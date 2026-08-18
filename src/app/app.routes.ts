import { Routes } from '@angular/router';
import { authGuardFn } from '@auth0/auth0-angular';
import { studentRoleGuard } from './core/student-role.guard';
import { contractComplianceGuard } from './core/contract-compliance.guard';

const studentPage = () => import('./student/student-page').then(m => m.StudentPage);

export const routes: Routes = [
  { path: 'inicio', canActivate: [authGuardFn, studentRoleGuard, contractComplianceGuard], loadComponent: studentPage, data: { section: 'home' } },
  { path: 'entrenar', canActivate: [authGuardFn, studentRoleGuard, contractComplianceGuard], loadComponent: studentPage, data: { section: 'training' } },
  { path: 'entrenar/:assignmentId', canActivate: [authGuardFn, studentRoleGuard, contractComplianceGuard], loadComponent: () => import('./student/workout-session-page').then(m => m.WorkoutSessionPage) },
  { path: 'progreso', canActivate: [authGuardFn, studentRoleGuard, contractComplianceGuard], loadComponent: studentPage, data: { section: 'progress' } },
  { path: 'comunidad', canActivate: [authGuardFn, studentRoleGuard, contractComplianceGuard], loadComponent: studentPage, data: { section: 'community' } },
  { path: 'perfil', canActivate: [authGuardFn, studentRoleGuard, contractComplianceGuard], loadComponent: studentPage, data: { section: 'profile' } },
  { path: 'ejercicios', canActivate: [authGuardFn, studentRoleGuard, contractComplianceGuard], loadComponent: studentPage, data: { section: 'exercises' } },
  { path: 'ejercicios/:slug', canActivate: [authGuardFn, studentRoleGuard, contractComplianceGuard], loadComponent: () => import('./student/exercise-detail-page').then(m => m.ExerciseDetailPage) },
  { path: 'asistencia/:token', canActivate: [authGuardFn, studentRoleGuard, contractComplianceGuard], loadComponent: () => import('./student/attendance-checkin-page').then(m => m.AttendanceCheckinPage) },
  { path: 'contratos/:id/firmar', canActivate: [authGuardFn, studentRoleGuard], loadComponent: () => import('./student/contract-signature-page/contract-signature-page').then(m => m.ContractSignaturePage) },
  { path: 'verificar-contrato/:code', loadComponent: () => import('./student/contract-verification-page/contract-verification-page').then(m => m.ContractVerificationPage) },
  { path: 'sin-acceso', loadComponent: () => import('./core/access-denied').then(m => m.AccessDenied) },
  { path: '', pathMatch: 'full', redirectTo: 'inicio' },
  { path: '**', redirectTo: 'inicio' }
];
