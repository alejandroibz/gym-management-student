import { environment } from '../../environments/environment';

export function extractUserRoles(user: Record<string, unknown> | null | undefined): string[] {
  const rawRoles = user?.[environment.auth0.rolesClaim];

  if (Array.isArray(rawRoles)) {
    return rawRoles.filter((role): role is string => typeof role === 'string');
  }

  if (typeof rawRoles === 'string' && rawRoles.trim()) {
    return [rawRoles];
  }

  return [];
}

export function normalizeRole(role: string): string {
  return role.toLowerCase().replace(/[\s_-]/g, '');
}
