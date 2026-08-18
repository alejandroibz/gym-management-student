import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { catchError, map, of } from 'rxjs';
import { StudentService } from '../student/student.service';

/** Blocks the student platform until the current mandatory contract is signed. */
export const contractComplianceGuard: CanActivateFn = () => {
  const service = inject(StudentService);
  const router = inject(Router);

  return service.getContracts().pipe(
    map(contracts => {
      const pending = contracts.find(contract => contract.status === 'PendingSignature');
      return pending
        ? router.createUrlTree(['/contratos', pending.id, 'firmar'], { queryParams: { required: true } })
        : true;
    }),
    catchError(() => of(router.createUrlTree(['/sin-acceso'], { queryParams: { reason: 'contract-check' } })))
  );
};
