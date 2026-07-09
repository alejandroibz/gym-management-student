import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Exercise, ExerciseProgressHistory, RoutineAssignment } from './student.models';
import { StudentService } from './student.service';

interface SetDraft { reps: number | null; weight: number | null; done: boolean; }
const DEFAULT_SET_COUNT = 3;

@Component({
  selector: 'app-workout-session-page', standalone: true,
  imports: [CommonModule, RouterLink, MatButtonModule, MatIconModule, MatProgressBarModule],
  templateUrl: './workout-session-page.html', styleUrl: './workout-session-page.scss', changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorkoutSessionPage {
  private readonly service = inject(StudentService); private readonly route = inject(ActivatedRoute); private readonly router = inject(Router);
  readonly workout = signal<RoutineAssignment | null>(null); readonly exercises = signal<Exercise[]>([]); readonly currentIndex = signal(0); readonly draft = signal<Record<string, SetDraft>>({});
  readonly setCounts = signal<Record<number, number>>({});
  readonly previous = signal<ExerciseProgressHistory | null>(null); readonly restRemaining = signal(0); readonly isSaving = signal(false); readonly feedback = signal('');
  private timer?: ReturnType<typeof setInterval>; readonly assignmentId = Number(this.route.snapshot.paramMap.get('assignmentId'));
  readonly currentExercise = computed(() => this.workout()?.exercises[this.currentIndex()] ?? null);
  readonly progress = computed(() => { const total = this.workout()?.exercises.length || 1; return (this.currentIndex() + 1) / total * 100; });
  readonly currentMedia = computed(() => this.exercises().find(x => x.id === this.currentExercise()?.exerciseId));

  constructor() {
    this.service.getExercises().subscribe(items => this.exercises.set(items));
    this.service.getTrainingOverview().subscribe({ next: overview => { const all = [...overview.plans.flatMap(x => x.workouts), ...overview.directWorkouts]; const item = all.find(x => x.id === this.assignmentId) ?? null; this.workout.set(item); if (item) { this.restore(item); this.loadPrevious(); } }, error: () => this.feedback.set('No pudimos cargar este workout.') });
  }
  setNumbers(count: number): number[] { return Array.from({ length: Math.max(1, count) }, (_, i) => i + 1); }
  setCount(exerciseId: number): number { return this.setCounts()[exerciseId] ?? DEFAULT_SET_COUNT; }
  key(exerciseId: number, set: number): string { return `${exerciseId}-${set}`; }
  value(exerciseId: number, set: number): SetDraft { return this.draft()[this.key(exerciseId, set)] ?? { reps: null, weight: null, done: false }; }
  update(exerciseId: number, set: number, field: 'reps' | 'weight', event: Event): void { const value = Number((event.target as HTMLInputElement).value); const key = this.key(exerciseId, set); this.draft.update(items => ({ ...items, [key]: { ...this.value(exerciseId, set), [field]: Number.isFinite(value) ? value : null } })); this.persist(); }
  toggleDone(exerciseId: number, set: number): void { const key = this.key(exerciseId, set); const next = !this.value(exerciseId, set).done; this.draft.update(items => ({ ...items, [key]: { ...this.value(exerciseId, set), done: next } })); this.persist(); if (next) this.startRest(this.currentExercise()?.restSeconds || 60); }
  addSet(exerciseId: number): void {
    const nextSet = this.setCount(exerciseId) + 1;
    this.setCounts.update(items => ({ ...items, [exerciseId]: nextSet }));
    this.draft.update(items => ({ ...items, [this.key(exerciseId, nextSet)]: { reps: null, weight: null, done: false } }));
    this.persist();
  }
  removeSet(exerciseId: number, set: number): void {
    if (this.setCount(exerciseId) <= 1) return;
    const entries = Object.entries(this.draft()).filter(([key]) => key !== this.key(exerciseId, set));
    const nextDraft: Record<string, SetDraft> = {};
    entries.forEach(([key, value]) => {
      const [rawExerciseId, rawSet] = key.split('-').map(Number);
      if (rawExerciseId === exerciseId && rawSet > set) nextDraft[this.key(rawExerciseId, rawSet - 1)] = value;
      else nextDraft[key] = value;
    });
    this.draft.set(nextDraft);
    this.setCounts.update(items => ({ ...items, [exerciseId]: this.setCount(exerciseId) - 1 }));
    this.persist();
  }
  next(): void { const count = this.workout()?.exercises.length || 0; if (this.currentIndex() < count - 1) { this.currentIndex.update(x => x + 1); this.loadPrevious(); window.scrollTo({ top: 0, behavior: 'smooth' }); } }
  previousExercise(): void { if (this.currentIndex() > 0) { this.currentIndex.update(x => x - 1); this.loadPrevious(); } }
  startRest(seconds: number): void { if (this.timer) clearInterval(this.timer); this.restRemaining.set(seconds); this.timer = setInterval(() => { this.restRemaining.update(x => Math.max(0, x - 1)); if (this.restRemaining() === 0 && this.timer) clearInterval(this.timer); }, 1000); }
  skipRest(): void { if (this.timer) clearInterval(this.timer); this.restRemaining.set(0); }
  finish(): void { const workout = this.workout(); if (!workout || this.isSaving()) return; this.isSaving.set(true); this.service.saveWorkoutSession({ routineAssignmentId: workout.id, clientRequestId: this.requestId(), trainingDate: new Date().toISOString().slice(0,10), notes: null, exercises: workout.exercises.map(exercise => ({ exerciseId: exercise.exerciseId, sortOrder: exercise.sortOrder, notes: exercise.notes ?? null, sets: this.setNumbers(this.setCount(exercise.exerciseId)).map(set => ({ setNumber: set, reps: this.value(exercise.exerciseId,set).reps, weight: this.value(exercise.exerciseId,set).weight, restSeconds: exercise.restSeconds ?? null, notes: null })) })) }).subscribe({ next: () => { localStorage.removeItem(this.storageKey()); localStorage.removeItem(this.setCountsStorageKey()); localStorage.removeItem(`${this.storageKey()}-request`); this.router.navigate(['/progreso'], { queryParams: { completed: 1 } }); }, error: () => { this.feedback.set('No pudimos finalizar. Tu borrador sigue guardado.'); this.isSaving.set(false); } }); }
  private restore(workout: RoutineAssignment): void {
    const savedCounts = localStorage.getItem(this.setCountsStorageKey());
    const initialCounts = Object.fromEntries(workout.exercises.map(ex => [ex.exerciseId, DEFAULT_SET_COUNT]));
    if (savedCounts) { try { this.setCounts.set({ ...initialCounts, ...JSON.parse(savedCounts) }); } catch { this.setCounts.set(initialCounts); } }
    else this.setCounts.set(initialCounts);

    const saved = localStorage.getItem(this.storageKey());
    if (saved) { try { this.draft.set(JSON.parse(saved)); return; } catch {} }
    const initial: Record<string,SetDraft> = {};
    workout.exercises.forEach(ex => this.setNumbers(this.setCount(ex.exerciseId)).forEach(set => initial[this.key(ex.exerciseId,set)] = { reps: ex.reps ?? null, weight: ex.weight ?? null, done: false }));
    this.draft.set(initial);
  }
  private persist(): void { localStorage.setItem(this.storageKey(), JSON.stringify(this.draft())); localStorage.setItem(this.setCountsStorageKey(), JSON.stringify(this.setCounts())); }
  private storageKey(): string { return `student-workout-draft-${this.assignmentId}`; }
  private setCountsStorageKey(): string { return `${this.storageKey()}-sets`; }
  private requestId(): string { const key = `${this.storageKey()}-request`; const existing = localStorage.getItem(key); if (existing) return existing; const created = crypto.randomUUID(); localStorage.setItem(key, created); return created; }
  private loadPrevious(): void { const exercise = this.currentExercise(); if (!exercise) return; this.service.getExerciseProgress(exercise.exerciseId).subscribe({ next: value => this.previous.set(value), error: () => this.previous.set(null) }); }
}
