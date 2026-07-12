import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { AuthService } from '@auth0/auth0-angular';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { environment } from '../../environments/environment';
import { AchievementResponse, Exercise, ExerciseProgressHistory, HabitDefinition, HabitLog, RankingResponse, RoutineAssignment, StudentAttendance, StudentContract, StudentDashboard, StudentGoal, StudentHabitEntry, StudentHome, StudentPayment, StudentPointTransaction, StudentProgressDashboard, StudentTrainingOverview } from './student.models';
import { StudentService } from './student.service';
import { AvatarCropDialog } from './avatar-crop-dialog/avatar-crop-dialog';
import { BODY_ZONES, BodyZone, ExerciseBodyMap } from './exercise-body-map';

@Component({
  selector: 'app-student-page',
  standalone: true,
  imports: [
    CommonModule, RouterLink, RouterLinkActive,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatProgressBarModule,
    MatSelectModule,
    MatSnackBarModule,
    MatTabsModule,
    ExerciseBodyMap
  ],
  templateUrl: './student-page.html',
  styleUrl: './student-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StudentPage {
  private readonly service = inject(StudentService);
  private readonly auth = inject(AuthService);
  private readonly formBuilder = inject(FormBuilder);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly snackBar = inject(MatSnackBar);
  private readonly dialog = inject(MatDialog);

  readonly section = signal<'home' | 'training' | 'progress' | 'community' | 'profile' | 'exercises'>('home');
  readonly home = signal<StudentHome | null>(null);
  readonly training = signal<StudentTrainingOverview | null>(null);
  readonly progress = signal<StudentProgressDashboard | null>(null);
  readonly points = signal<StudentPointTransaction[]>([]);
  readonly attendance = signal<StudentAttendance[]>([]);
  readonly selectedExerciseProgress = signal<ExerciseProgressHistory | null>(null);
  readonly actionPanel = signal<'weight' | 'goal' | 'habit' | 'schedule' | 'notifications' | null>(null);
  readonly scheduleWorkout = signal<RoutineAssignment | null>(null);
  readonly scheduleDays = signal<number[]>([]);
  readonly isDark = signal(localStorage.getItem('student-theme') === 'dark');
  readonly progressPeriod = signal<'week' | 'month' | 'quarter'>('quarter');

  readonly dashboard = signal<StudentDashboard | null>(null);
  readonly payments = signal<StudentPayment[]>([]);
  readonly habits = signal<HabitLog[]>([]);
  readonly habitDefinitions = signal<HabitDefinition[]>([]);
  readonly habitEntries = signal<StudentHabitEntry[]>([]);
  readonly routines = signal<RoutineAssignment[]>([]);
  readonly achievements = signal<AchievementResponse | null>(null);
  readonly ranking = signal<RankingResponse | null>(null);
  readonly exercises = signal<Exercise[]>([]);
  readonly contracts = signal<StudentContract[]>([]);
  readonly feedback = signal('');
  readonly isLoading = signal(false);
  readonly isUploadingAvatar = signal(false);
  readonly isEditingProfile = signal(false);
  readonly workoutWeights = signal<Record<string, number>>({});
  readonly workoutReps = signal<Record<string, number>>({});
  readonly search = this.formBuilder.nonNullable.control('');
  readonly searchTerm = signal('');
  readonly selectedMuscles = signal<string[]>([]);
  readonly showExerciseAnatomy = signal(false);
  readonly availableMuscles = computed(() => {
    const names = new Set<string>();
    for (const exercise of this.exercises()) {
      for (const name of this.exerciseMuscleNames(exercise)) {
        names.add(name);
      }
    }
    return [...names].sort((a, b) => a.localeCompare(b));
  });
  readonly exerciseNameOptions = computed(() => {
    const term = this.normalize(this.searchTerm());
    return this.exercises()
      .filter(item => !term || this.normalize(item.name).includes(term))
      .map(item => item.name)
      .slice(0, 8);
  });
  readonly filteredExercises = computed(() => {
    const term = this.normalize(this.searchTerm());
    const selected = this.selectedMuscles().flatMap(item => this.filterTokensForMuscle(item));
    return this.exercises().filter(item => {
      const matchesName = !term || this.normalize(item.name).includes(term);
      const muscleText = this.normalize(this.exerciseMuscleNames(item).join(' '));
      const matchesMuscle = selected.length === 0 || selected.some(muscle => muscleText.includes(muscle));
      return matchesName && matchesMuscle;
    });
  });
  readonly unreadNotifications = computed(() => this.home()?.notifications.filter(item => !item.readAt) ?? []);
  readonly attendedToday = computed(() => {
    const today = new Date().toISOString().slice(0, 10);
    return this.attendance().some(item => item.date.slice(0, 10) === today);
  });
  readonly habitsCompletedToday = computed(() => {
    const today = new Date().toISOString().slice(0, 10);
    return new Set(this.habitEntries()
      .filter(item => item.entryDate.slice(0, 10) === today)
      .map(item => item.habitDefinitionId)).size;
  });
  readonly activeHabitCount = computed(() => this.habitDefinitions().filter(item => item.isActive).length);
  readonly activeTrainingPlan = computed(() => this.training()?.plans[0] ?? null);

  readonly profileForm = this.formBuilder.nonNullable.group({
    nombre: [''],
    apellido: [''],
    fechaNacimiento: [''],
    telefono: [''],
    direccion: [''],
    avatarUrl: [''],
    studentBio: ['']
  });

  readonly weightForm = this.formBuilder.nonNullable.group({
    weightKg: [70, [Validators.required, Validators.min(20), Validators.max(400)]],
    measuredAt: [new Date().toISOString().slice(0, 10)],
    notes: ['']
  });

  readonly goalForm = this.formBuilder.nonNullable.group({
    type: ['BodyWeight'], title: ['', Validators.required], startValue: [0], targetValue: [0], currentValue: [0], unit: ['kg'], targetDate: [''], description: [''], exerciseId: [0]
  });

  readonly habitForm = this.formBuilder.nonNullable.group({
    date: [new Date().toISOString().slice(0, 10)],
    trained: [true],
    waterLiters: [2],
    sleepHours: [8],
    nutritionNotes: ['']
  });

  constructor() {
    document.body.classList.toggle('student-dark', this.isDark());
    this.route.data.subscribe(data => this.section.set(data['section'] ?? 'home'));
    this.search.valueChanges.subscribe(value => this.searchTerm.set(value ?? ''));
    this.loadAll();
  }

  loadAll(): void {
    this.isLoading.set(true);
    this.feedback.set('');

    this.service.getDashboard().subscribe({
      next: dashboard => {
        this.dashboard.set(dashboard);
        this.routines.set(dashboard.activeRoutines);
        this.profileForm.patchValue({
          nombre: dashboard.profile.nombre,
          apellido: dashboard.profile.apellido,
          fechaNacimiento: dashboard.profile.fechaNacimiento?.slice(0, 10) ?? '',
          telefono: dashboard.profile.telefono ?? '',
          direccion: dashboard.profile.direccion ?? '',
          avatarUrl: dashboard.profile.avatarUrl ?? '',
          studentBio: dashboard.profile.studentBio ?? ''
        });
        if (!this.isEditingProfile()) {
          this.profileForm.disable({ emitEvent: false });
        }
        this.isLoading.set(false);
      },
      error: () => {
        this.isLoading.set(false);
        this.feedback.set('No se pudo cargar tu perfil.');
      }
    });

    this.service.getPayments().subscribe({ next: payments => this.payments.set(payments) });
    this.service.getHabits().subscribe({ next: habits => this.habits.set(habits) });
    this.service.getHabitDefinitions().subscribe({ next: habits => this.habitDefinitions.set(habits) });
    this.service.getHabitEntries().subscribe({ next: entries => this.habitEntries.set(entries) });
    this.service.getAchievements().subscribe({ next: achievements => this.achievements.set(achievements) });
    this.service.getRanking().subscribe({ next: ranking => this.ranking.set(ranking) });
    this.service.getExercises().subscribe({ next: exercises => this.exercises.set(exercises) });
    this.service.getHome().subscribe({ next: home => this.home.set(home) });
    this.service.getTrainingOverview().subscribe({ next: training => this.training.set(training) });
    this.service.getProgress().subscribe({ next: progress => this.progress.set(progress) });
    this.service.getPoints().subscribe({ next: points => this.points.set(points) });
    this.service.getAttendance().subscribe({ next: attendance => this.attendance.set(attendance) });
    this.service.getContracts().subscribe({next:items=>this.contracts.set(items)});
  }

  saveProfile(): void {
    if (!this.isEditingProfile()) return;
    const raw = this.profileForm.getRawValue();
    this.service.updateProfile(raw).subscribe({
      next: () => {
        this.isEditingProfile.set(false);
        this.profileForm.disable({ emitEvent: false });
        this.feedback.set('Perfil actualizado.');
        this.loadAll();
      },
      error: () => this.feedback.set('No se pudo actualizar el perfil.')
    });
  }

  saveHabit(): void {
    const raw = this.habitForm.getRawValue();
    this.service.saveHabit({
      date: raw.date,
      trained: raw.trained,
      waterLiters: raw.waterLiters,
      sleepHours: raw.sleepHours,
      nutritionNotes: raw.nutritionNotes || null
    }).subscribe({
      next: habit => {
        this.feedback.set('Habito registrado.');
        this.habits.update(items => [habit, ...items.filter(item => item.id !== habit.id)]);
      },
      error: () => this.feedback.set('No se pudo registrar el habito.')
    });
  }

  registerHabitDefinition(habit: HabitDefinition): void {
    this.service.saveHabitEntry({
      habitDefinitionId: habit.id,
      entryDate: new Date().toISOString().slice(0, 10)
    }).subscribe({
      next: entry => {
        this.feedback.set(entry.pointsAwarded > 0 ? `Habito registrado. Sumaste ${entry.pointsAwarded} puntos.` : 'Habito registrado. Ya alcanzaste el limite de puntos.');
        this.habitEntries.update(items => [entry, ...items]);
        this.service.getRanking().subscribe({ next: ranking => this.ranking.set(ranking) });
        this.service.getAchievements().subscribe({ next: achievements => this.achievements.set(achievements) });
      },
      error: () => this.feedback.set('No se pudo registrar el habito.')
    });
  }

  habitRegisteredToday(habit: HabitDefinition): boolean {
    const today = new Date().toISOString().slice(0, 10);
    return this.habitEntries().some(entry => entry.habitDefinitionId === habit.id && entry.entryDate.slice(0, 10) === today);
  }

  completeRoutine(routine: RoutineAssignment): void {
    const payload = {
      routineAssignmentId: routine.id,
      trainingDate: new Date().toISOString().slice(0, 10),
      notes: null,
      exercises: routine.exercises.map(exercise => ({
        exerciseId: exercise.exerciseId,
        sortOrder: exercise.sortOrder,
        notes: exercise.notes ?? null,
        sets: this.setNumbers(exercise.sets ?? 1).map(setNumber => ({
          setNumber,
          reps: this.workoutReps()[this.workoutKey(routine.id, exercise.exerciseId, setNumber)] ?? exercise.reps ?? null,
          weight: this.workoutWeights()[this.workoutKey(routine.id, exercise.exerciseId, setNumber)] ?? exercise.weight ?? null,
          restSeconds: exercise.restSeconds ?? null,
          notes: null
        }))
      }))
    };

    this.service.saveWorkoutSession(payload).subscribe({
      next: () => {
        this.feedback.set('Rutina registrada. Se marco tu asistencia de hoy.');
        this.service.getRoutines().subscribe(routines => this.routines.set(routines));
      },
      error: () => this.feedback.set('No se pudo registrar el progreso.')
    });
  }

  setWorkoutWeight(routineId: number, exerciseId: number, setNumber: number, event: Event): void {
    const value = Number((event.target as HTMLInputElement).value);
    this.workoutWeights.update(items => ({ ...items, [this.workoutKey(routineId, exerciseId, setNumber)]: value }));
  }

  setWorkoutReps(routineId: number, exerciseId: number, setNumber: number, event: Event): void {
    const value = Number((event.target as HTMLInputElement).value);
    this.workoutReps.update(items => ({ ...items, [this.workoutKey(routineId, exerciseId, setNumber)]: value }));
  }

  setNumbers(count: number): number[] {
    return Array.from({ length: Math.max(1, count) }, (_, index) => index + 1);
  }

  getDayLabel(day: number): string {
    return ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'][day] ?? `${day}`;
  }

  private workoutKey(routineId: number, exerciseId: number, setNumber: number): string {
    return `${routineId}-${exerciseId}-${setNumber}`;
  }

  downloadRoutine(routine: RoutineAssignment): void {
    window.open(`${environment.apiUrl}/api/Routines/${routine.id}/pdf`, '_blank');
  }

  startWorkout(routine: RoutineAssignment): void {
    this.router.navigate(['/entrenar', routine.id]);
  }

  manualCheckIn(): void {
    if (this.attendedToday()) {
      this.toast('Tu asistencia de hoy ya está registrada.');
      return;
    }
    this.service.checkIn({ mode: 'Manual' }).subscribe({
      next: () => { this.toast('Asistencia manual registrada.'); this.service.getAttendance().subscribe(items => this.attendance.set(items)); },
      error: error => this.toast(error?.error?.errors?.[0] ?? 'No pudimos registrar tu asistencia.')
    });
  }

  saveWeight(): void {
    if (this.weightForm.invalid) return;
    this.service.saveBodyMeasurement(this.weightForm.getRawValue()).subscribe({
      next: () => { this.actionPanel.set(null); this.toast('Peso registrado.'); this.service.getProgress().subscribe(item => this.progress.set(item)); },
      error: () => this.toast('No pudimos registrar el peso.')
    });
  }

  setProgressPeriod(period: 'week' | 'month' | 'quarter'): void {
    this.progressPeriod.set(period);
    const to = new Date();
    const from = new Date();
    from.setDate(to.getDate() - (period === 'week' ? 7 : period === 'month' ? 30 : 90));
    this.service.getProgress(from.toISOString().slice(0, 10), to.toISOString().slice(0, 10)).subscribe({ next: item => this.progress.set(item), error: () => this.toast('No pudimos actualizar el periodo.') });
  }

  saveGoal(): void {
    if (this.goalForm.invalid) return;
    const raw = this.goalForm.getRawValue();
    this.service.saveGoal({ ...raw, exerciseId: raw.exerciseId || null, targetDate: raw.targetDate || null }).subscribe({
      next: () => { this.actionPanel.set(null); this.toast('Objetivo creado.'); this.service.getProgress().subscribe(item => this.progress.set(item)); },
      error: () => this.toast('No pudimos crear el objetivo.')
    });
  }

  updateGoal(goal: StudentGoal): void {
    const value = Number(prompt(`Nuevo valor para ${goal.title}`, `${goal.currentValue}`));
    if (Number.isNaN(value)) return;
    this.service.saveGoalProgress(goal.id, value).subscribe({ next: item => { this.progress.update(current => current ? { ...current, goals: current.goals.map(goalItem => goalItem.id === item.id ? item : goalItem) } : current); this.toast('Progreso actualizado.'); } });
  }

  uploadAvatar(event: Event): void {
    if (!this.isEditingProfile()) return;
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (!file) return;
    input.value = '';
    if (!file.type.startsWith('image/')) {
      this.toast('Elegí un archivo de imagen válido.');
      return;
    }
    if (file.size > 10 * 1024 * 1024) {
      this.toast('La imagen no puede superar los 10 MB.');
      return;
    }

    this.dialog.open(AvatarCropDialog, {
      data: { file },
      width: '460px',
      maxWidth: 'calc(100vw - 1rem)',
      maxHeight: 'calc(100dvh - 1rem)',
      autoFocus: false,
      restoreFocus: true,
      panelClass: 'student-avatar-crop-dialog'
    }).afterClosed().subscribe(croppedFile => {
      if (!croppedFile) return;
      this.isUploadingAvatar.set(true);
      this.service.uploadAvatar(croppedFile).subscribe({
        next: item => {
          this.profileForm.controls.avatarUrl.setValue(item.url);
          this.service.updateProfile(this.profileForm.getRawValue()).subscribe({
            next: profile => {
              this.dashboard.update(current => current ? { ...current, profile } : current);
              this.home.update(current => current ? {
                ...current,
                dashboard: { ...current.dashboard, profile }
              } : current);
              this.isUploadingAvatar.set(false);
              this.toast('Foto de perfil actualizada.');
            },
            error: () => {
              this.isUploadingAvatar.set(false);
              this.toast('La foto se subió, pero no pudimos guardarla en tu perfil.');
            }
          });
        },
        error: () => {
          this.isUploadingAvatar.set(false);
          this.toast('No pudimos subir la foto.');
        }
      });
    });
  }

  selectExerciseProgress(exerciseId: number): void {
    this.service.getExerciseProgress(exerciseId).subscribe({ next: progress => this.selectedExerciseProgress.set(progress), error: () => this.toast('Todavia no hay registros para ese ejercicio.') });
  }

  openSchedule(workout: RoutineAssignment): void {
    this.scheduleWorkout.set(workout);
    this.scheduleDays.set([...workout.scheduleDays]);
    this.actionPanel.set('schedule');
  }

  toggleScheduleDay(day: number): void {
    this.scheduleDays.update(items => items.includes(day) ? items.filter(item => item !== day) : [...items, day]);
  }

  saveSchedule(): void {
    const workout = this.scheduleWorkout();
    if (!workout) return;
    this.service.updateWorkoutSchedule(workout.id, this.scheduleDays()).subscribe({ next: () => { this.actionPanel.set(null); this.toast('Agenda actualizada.'); this.service.getTrainingOverview().subscribe(item => this.training.set(item)); } });
  }

  markNotification(id: number, actionUrl?: string | null): void {
    this.service.markNotificationRead(id).subscribe({
      next: () => this.home.update(current => current ? {
        ...current,
        notifications: current.notifications.map(item => item.id === id ? { ...item, readAt: new Date().toISOString() } : item)
      } : current)
    });
    this.actionPanel.set(null);
    if (actionUrl) this.router.navigateByUrl(actionUrl);
  }

  tierLabel(tier: string): string {
    return ({ Bronze: 'Bronce', Silver: 'Plata', Gold: 'Oro', Platinum: 'Platino' } as Record<string, string>)[tier] ?? tier;
  }

  pointIcon(source: string): string {
    return ({ Attendance: 'how_to_reg', Workout: 'fitness_center', Habit: 'self_improvement', Achievement: 'emoji_events' } as Record<string, string>)[source] ?? 'stars';
  }

  toggleTheme(): void {
    this.isDark.update(value => !value);
    document.body.classList.toggle('student-dark', this.isDark());
    localStorage.setItem('student-theme', this.isDark() ? 'dark' : 'light');
  }

  startProfileEditing(): void {
    this.isEditingProfile.set(true);
    this.profileForm.enable({ emitEvent: false });
  }

  cancelProfileEditing(): void {
    const profile = this.dashboard()?.profile;
    if (profile) {
      this.profileForm.patchValue({
        nombre: profile.nombre,
        apellido: profile.apellido,
        fechaNacimiento: profile.fechaNacimiento?.slice(0, 10) ?? '',
        telefono: profile.telefono ?? '',
        direccion: profile.direccion ?? '',
        avatarUrl: profile.avatarUrl ?? '',
        studentBio: profile.studentBio ?? ''
      });
    }
    this.isEditingProfile.set(false);
    this.profileForm.disable({ emitEvent: false });
  }

  toggleExerciseMuscle(muscle: string): void {
    this.selectedMuscles.update(items => items.includes(muscle) ? items.filter(item => item !== muscle) : [...items, muscle]);
  }

  setExerciseMuscles(muscles: string[]): void {
    this.selectedMuscles.set(muscles);
  }

  toggleBodyZone(zone: BodyZone): void {
    this.toggleExerciseMuscle(zone.label);
  }

  clearExerciseFilters(): void {
    this.search.setValue('');
    this.searchTerm.set('');
    this.selectedMuscles.set([]);
  }

  hasExerciseFilters(): boolean {
    return !!this.searchTerm().trim() || this.selectedMuscles().length > 0;
  }

  exerciseFilterSummary(): string {
    const total = this.filteredExercises().length;
    const label = total === 1 ? 'ejercicio' : 'ejercicios';
    if (!this.hasExerciseFilters()) return `${total} ${label} disponibles`;
    return `${total} ${label} encontrados`;
  }

  exerciseMuscleNames(exercise: Exercise): string[] {
    const names = new Set<string>();
    if (exercise.muscleGroup) names.add(exercise.muscleGroup);
    for (const muscle of exercise.muscles ?? []) {
      if (muscle.name) names.add(muscle.name);
      if (muscle.muscleGroupName) names.add(muscle.muscleGroupName);
    }
    for (const part of (exercise.musclesInvolved ?? '').split(',')) {
      const name = part.trim();
      if (name) names.add(name);
    }
    return [...names];
  }

  private toast(message: string): void {
    this.snackBar.open(message, 'Cerrar', { duration: 3500 });
  }

  private normalize(value: string): string {
    return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim().toLowerCase();
  }

  private filterTokensForMuscle(muscle: string): string[] {
    const normalized = this.normalize(muscle);
    const zone = BODY_ZONES.find(item => this.normalize(item.label) === normalized || item.synonyms.some(synonym => this.normalize(synonym) === normalized));
    return [normalized, ...(zone?.synonyms.map(synonym => this.normalize(synonym)) ?? [])];
  }

  logout(): void {
    this.auth.logout({ logoutParams: { returnTo: environment.auth0.logoutReturnTo } });
  }

  downloadContract(contract:StudentContract):void{this.service.downloadContract(contract.id).subscribe(blob=>{const url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download=`contrato-${contract.clientName}.pdf`;a.click();URL.revokeObjectURL(url)})}
}
