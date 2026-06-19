import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { map } from 'rxjs';
import { extractUserRoles, normalizeRole } from './auth0-config';

export const studentRoleGuard: CanActivateFn = () => {
  const auth = inject(AuthService);
  const router = inject(Router);

  return auth.user$.pipe(
    map(user => {
      const roles = extractUserRoles(user).map(normalizeRole);
      return roles.includes('user') ? true : router.createUrlTree(['/sin-acceso']);
    })
  );
};
