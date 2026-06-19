import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from '@auth0/auth0-angular';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-access-denied',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
  template: `
    <main class="access-page">
      <section>
        <mat-icon>lock</mat-icon>
        <h1>Acceso de alumno requerido</h1>
        <p>Esta plataforma esta reservada para usuarios con rol User.</p>
        <button mat-flat-button color="primary" type="button" (click)="logout()">
          <mat-icon>logout</mat-icon>
          Cerrar sesion
        </button>
      </section>
    </main>
  `,
  styles: [`
    .access-page { display: grid; min-height: 100vh; place-items: center; padding: 1rem; }
    section { background: white; border-radius: 8px; max-width: 420px; padding: 2rem; text-align: center; }
    mat-icon { color: #176b87; }
  `]
})
export class AccessDenied {
  private readonly auth = inject(AuthService);

  logout(): void {
    this.auth.logout({ logoutParams: { returnTo: environment.auth0.logoutReturnTo } });
  }
}
