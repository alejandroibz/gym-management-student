import { Routes } from '@angular/router';
import { authGuardFn } from '@auth0/auth0-angular';
import { studentRoleGuard } from './core/student-role.guard';

const studentPage = () => import('./student/student-page').then(m => m.StudentPage);

export const routes: Routes = [
  { path: 'inicio', canActivate: [authGuardFn, studentRoleGuard], loadComponent: studentPage, data: { section: 'home' } },
  { path: 'entrenar', canActivate: [authGuardFn, studentRoleGuard], loadComponent: studentPage, data: { section: 'training' } },
  { path: 'entrenar/:assignmentId', canActivate: [authGuardFn, studentRoleGuard], loadComponent: () => import('./student/workout-session-page').then(m => m.WorkoutSessionPage) },
  { path: 'progreso', canActivate: [authGuardFn, studentRoleGuard], loadComponent: studentPage, data: { section: 'progress' } },
  { path: 'comunidad', canActivate: [authGuardFn, studentRoleGuard], loadComponent: studentPage, data: { section: 'community' } },
  { path: 'perfil', canActivate: [authGuardFn, studentRoleGuard], loadComponent: studentPage, data: { section: 'profile' } },
  { path: 'ejercicios', canActivate: [authGuardFn, studentRoleGuard], loadComponent: studentPage, data: { section: 'exercises' } },
  { path: 'ejercicios/:slug', canActivate: [authGuardFn, studentRoleGuard], loadComponent: () => import('./student/exercise-detail-page').then(m => m.ExerciseDetailPage) },
  { path: 'asistencia/:token', canActivate: [authGuardFn, studentRoleGuard], loadComponent: () => import('./student/attendance-checkin-page').then(m => m.AttendanceCheckinPage) },
  { path: 'sin-acceso', loadComponent: () => import('./core/access-denied').then(m => m.AccessDenied) },
  { path: '', pathMatch: 'full', redirectTo: 'inicio' },
  { path: '**', redirectTo: 'inicio' }
];
