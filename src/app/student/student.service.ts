import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { AchievementResponse, Exercise, ExerciseProgressHistory, HabitDefinition, HabitLog, RankingResponse, RoutineAssignment, StudentAttendance, StudentBodyMeasurement, StudentDashboard, StudentGoal, StudentHabitEntry, StudentHome, StudentNotification, StudentPayment, StudentPointTransaction, StudentProgressDashboard, StudentTrainingOverview, WorkoutSessionPayload } from './student.models';

@Injectable({ providedIn: 'root' })
export class StudentService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = `${environment.apiUrl}/api`;

  getDashboard(): Observable<StudentDashboard> {
    return this.http.get<StudentDashboard>(`${this.apiUrl}/Student/me`);
  }

  getHome(): Observable<StudentHome> {
    return this.http.get<StudentHome>(`${this.apiUrl}/Student/home`);
  }

  updateProfile(payload: { nombre?: string | null; apellido?: string | null; fechaNacimiento?: string | null; telefono?: string | null; direccion?: string | null; avatarUrl?: string | null; studentBio?: string | null }): Observable<unknown> {
    return this.http.put(`${this.apiUrl}/Student/me`, payload);
  }

  uploadAvatar(file: File): Observable<{ url: string }> {
    const form = new FormData();
    form.append('file', file);
    return this.http.post<{ url: string }>(`${this.apiUrl}/files`, form, { params: new HttpParams().set('folder', 'student-platform/avatars') });
  }

  getTrainingOverview(): Observable<StudentTrainingOverview> {
    return this.http.get<StudentTrainingOverview>(`${this.apiUrl}/Student/training-plans`);
  }

  updateWorkoutSchedule(assignmentId: number, scheduleDays: number[]): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/Student/workouts/${assignmentId}/schedule`, { scheduleDays });
  }

  checkIn(payload: { mode: 'Manual' | 'Qr'; qrToken?: string; latitude?: number; longitude?: number; accuracyMeters?: number }): Observable<StudentAttendance> {
    return this.http.post<StudentAttendance>(`${this.apiUrl}/Student/attendance/check-in`, payload);
  }

  getAttendance(): Observable<StudentAttendance[]> {
    return this.http.get<StudentAttendance[]>(`${this.apiUrl}/Training/attendance`);
  }

  getProgress(from?: string, to?: string): Observable<StudentProgressDashboard> {
    let params = new HttpParams();
    if (from) params = params.set('from', from);
    if (to) params = params.set('to', to);
    return this.http.get<StudentProgressDashboard>(`${this.apiUrl}/Student/progress`, { params });
  }

  saveBodyMeasurement(payload: { weightKg: number; measuredAt: string; notes?: string | null }): Observable<StudentBodyMeasurement> {
    return this.http.post<StudentBodyMeasurement>(`${this.apiUrl}/Student/body-measurements`, payload);
  }

  getGoals(): Observable<StudentGoal[]> {
    return this.http.get<StudentGoal[]>(`${this.apiUrl}/Student/goals`);
  }

  saveGoal(payload: Partial<StudentGoal>): Observable<StudentGoal> {
    return this.http.post<StudentGoal>(`${this.apiUrl}/Student/goals`, payload);
  }

  saveGoalProgress(goalId: number, value: number, notes?: string): Observable<StudentGoal> {
    return this.http.post<StudentGoal>(`${this.apiUrl}/Student/goals/${goalId}/progress`, { value, notes: notes || null, recordedAt: new Date().toISOString() });
  }

  getPoints(): Observable<StudentPointTransaction[]> {
    return this.http.get<StudentPointTransaction[]>(`${this.apiUrl}/Student/points`);
  }

  getNotifications(): Observable<StudentNotification[]> {
    return this.http.get<StudentNotification[]>(`${this.apiUrl}/Student/notifications`);
  }

  markNotificationRead(id: number): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/Student/notifications/${id}/read`, {});
  }

  getExerciseProgress(exerciseId: number): Observable<ExerciseProgressHistory> {
    return this.http.get<ExerciseProgressHistory>(`${this.apiUrl}/Training/progress/${exerciseId}`);
  }

  getPayments(): Observable<StudentPayment[]> {
    return this.http.get<StudentPayment[]>(`${this.apiUrl}/Student/payments`);
  }

  getHabits(): Observable<HabitLog[]> {
    return this.http.get<HabitLog[]>(`${this.apiUrl}/Student/habits`);
  }

  saveHabit(payload: { date: string; trained: boolean; waterLiters?: number | null; sleepHours?: number | null; nutritionNotes?: string | null }): Observable<HabitLog> {
    return this.http.post<HabitLog>(`${this.apiUrl}/Student/habits`, payload);
  }

  getHabitDefinitions(): Observable<HabitDefinition[]> {
    return this.http.get<HabitDefinition[]>(`${this.apiUrl}/Student/habit-definitions`);
  }

  getHabitEntries(): Observable<StudentHabitEntry[]> {
    return this.http.get<StudentHabitEntry[]>(`${this.apiUrl}/Student/habit-entries`);
  }

  saveHabitEntry(payload: { habitDefinitionId: number; entryDate: string }): Observable<StudentHabitEntry> {
    return this.http.post<StudentHabitEntry>(`${this.apiUrl}/Student/habit-entries`, payload);
  }

  getAchievements(): Observable<AchievementResponse> {
    return this.http.get<AchievementResponse>(`${this.apiUrl}/Student/achievements`);
  }

  getRoutines(): Observable<RoutineAssignment[]> {
    return this.http.get<RoutineAssignment[]>(`${this.apiUrl}/Routines`);
  }

  saveRoutineProgress(assignmentId: number, completionPercent: number): Observable<unknown> {
    return this.http.post(`${this.apiUrl}/Routines/${assignmentId}/progress`, { completionPercent });
  }

  saveWorkoutSession(payload: WorkoutSessionPayload): Observable<unknown> {
    return this.http.post(`${this.apiUrl}/Training/sessions`, payload);
  }

  getExercises(search = ''): Observable<Exercise[]> {
    let params = new HttpParams();
    if (search.trim()) params = params.set('search', search.trim());
    return this.http.get<Exercise[]>(`${this.apiUrl}/Exercises`, { params });
  }

  getExerciseBySlug(slug: string): Observable<Exercise> {
    return this.http.get<Exercise>(`${this.apiUrl}/Exercises/slug/${encodeURIComponent(slug)}`);
  }

  getExerciseById(id: number): Observable<Exercise> {
    return this.http.get<Exercise>(`${this.apiUrl}/Exercises/${id}`);
  }

  getRanking(): Observable<RankingResponse> {
    return this.http.get<RankingResponse>(`${this.apiUrl}/Rankings`, {
      params: new HttpParams().set('period', 'monthly').set('metric', 'total')
    });
  }
}
