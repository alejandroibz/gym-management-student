export interface StudentDashboard {
  profile: StudentProfile;
  membership?: {
    id: number;
    planNombre: string;
    fechaInicio: string;
    fechaFin: string;
    estado: string;
    precioFinal: number;
  } | null;
  recentPayments: StudentPayment[];
  activeRoutines: RoutineAssignment[];
  progress: {
    trainedDays: number;
    completedWorkouts: number;
    achievementPoints: number;
    level: number;
  };
}

export interface StudentProfile {
  id: number;
  nombre: string;
  apellido: string;
  dni?: string | null;
  fechaNacimiento?: string | null;
  telefono?: string | null;
  email?: string | null;
  direccion?: string | null;
  avatarUrl?: string | null;
  studentBio?: string | null;
  tieneLesion: boolean;
  observaciones?: string | null;
  branchNombre: string;
}

export interface StudentNotification {
  id: number;
  type: string;
  title: string;
  message: string;
  actionUrl?: string | null;
  priority: string;
  readAt?: string | null;
  expiresAt?: string | null;
}

export interface StudentHome {
  dashboard: StudentDashboard;
  todayWorkout?: RoutineAssignment | null;
  weeklyCompleted: number;
  weeklyTarget: number;
  habitStreakDays: number;
  totalPoints: number;
  notifications: StudentNotification[];
}

export interface StudentPayment {
  id: number;
  fechaPago: string;
  monto: number;
  estado: string;
  confirmado: boolean;
  paymentMethodNombre?: string | null;
  membershipPlanNombre?: string | null;
  periodYear: number;
  periodMonth: number;
}

export interface RoutineAssignment {
  id: number;
  routineId: number;
  name: string;
  description?: string | null;
  level: string;
  goal: string;
  assignedAt: string;
  startsAt?: string | null;
  endsAt?: string | null;
  status: string;
  completionPercent: number;
  scheduleDays: number[];
  exercises: Array<{
    id: number;
    exerciseId: number;
    exerciseName: string;
    muscleGroup: string;
    sortOrder: number;
    sets?: number | null;
    reps?: number | null;
    weight?: number | null;
    restSeconds?: number | null;
    notes?: string | null;
  }>;
}

export interface HabitLog {
  id: number;
  date: string;
  trained: boolean;
  waterLiters?: number | null;
  sleepHours?: number | null;
  nutritionNotes?: string | null;
}

export interface HabitDefinition {
  id: number;
  code: string;
  name: string;
  description: string;
  category: string;
  frequency: string;
  pointsPerEntry: number;
  dailyLimit: number;
  weeklyLimit: number;
  countsForStreak: boolean;
  addsToRanking: boolean;
  isActive: boolean;
  entryCount: number;
}

export interface StudentHabitEntry {
  id: number;
  habitDefinitionId: number;
  habitName: string;
  category: string;
  entryDate: string;
  pointsAwarded: number;
  registeredAt: string;
}

export interface AchievementResponse {
  level: number;
  points: number;
  unlocked: Array<{
    code: string;
    name: string;
    description: string;
    points: number;
    icon?: string | null;
    unlockedAt: string;
  }>;
  achievements: AchievementProgress[];
}

export interface AchievementProgress {
  id: number;
  code: string;
  name: string;
  description: string;
  tier: string;
  points: number;
  icon?: string | null;
  badgeImageUrl?: string | null;
  triggerType: string;
  currentValue: number;
  requiredCount: number;
  progressPercent: number;
  isUnlocked: boolean;
  unlockedAt?: string | null;
}

export interface TrainingPlanAssignment {
  id: number;
  trainingPlanId: number;
  trainingPlanName: string;
  trainingPlanDescription?: string | null;
  trainingPlanGoal: string;
  trainingPlanLevel: string;
  workoutCount: number;
  weeklyCompleted: number;
  assignedAt: string;
  startsAt?: string | null;
  endsAt?: string | null;
  status: string;
  workouts: RoutineAssignment[];
}

export interface StudentTrainingOverview {
  plans: TrainingPlanAssignment[];
  directWorkouts: RoutineAssignment[];
}

export interface StudentPointTransaction {
  id: number;
  sourceType: string;
  description: string;
  points: number;
  isVerified: boolean;
  occurredAt: string;
}

export interface StudentBodyMeasurement {
  id: number;
  weightKg: number;
  measuredAt: string;
  source: string;
  isVerified: boolean;
  notes?: string | null;
}

export interface StudentGoal {
  id: number;
  type: string;
  title: string;
  description?: string | null;
  startValue: number;
  targetValue: number;
  currentValue: number;
  unit: string;
  targetDate?: string | null;
  createdByType: string;
  isVerified: boolean;
  status: string;
  exerciseId?: number | null;
  exerciseName?: string | null;
  progressPercent: number;
}

export interface StudentProgressDashboard {
  currentWeightKg?: number | null;
  weightDeltaKg?: number | null;
  attendanceCount: number;
  workoutCount: number;
  totalVolume: number;
  mostTrainedMuscles: Array<{ name: string; value: number }>;
  bodyMeasurements: StudentBodyMeasurement[];
  goals: StudentGoal[];
}

export interface StudentAttendance {
  id: number;
  date: string;
  source: string;
  branchName?: string | null;
  isVerified: boolean;
  distanceMeters?: number | null;
}

export interface ExerciseProgressHistory {
  clientId: number;
  exerciseId: number;
  exerciseName: string;
  bestWeight?: number | null;
  previousBestWeight?: number | null;
  weightDelta?: number | null;
  totalVolume: number;
  trend: string;
  points: Array<{ trainingDate: string; routineName: string; setNumber: number; reps?: number | null; weight?: number | null }>;
}

export interface RankingResponse {
  items: Array<{
    position: number;
    clientId: number;
    nombre: string;
    apellido: string;
    avatarUrl?: string | null;
    score: number;
    attendanceCount?: number;
    achievementCount?: number;
    habitCount?: number;
    verifiedPoints?: number;
    habitPoints?: number;
    totalPoints?: number;
  }>;
}

export interface Exercise {
  id: number;
  name: string;
  description: string;
  muscleGroup: string;
  musclesInvolved?: string | null;
  muscles?: Array<{ id: number; name: string; muscleGroupName?: string | null }>;
  photoUrl?: string | null;
  videoUrl?: string | null;
  qrSlug?: string | null;
  qrUrl: string;
}

export interface WorkoutSessionPayload {
  routineAssignmentId: number;
  clientRequestId?: string | null;
  trainingDate: string;
  notes?: string | null;
  exercises: Array<{
    exerciseId: number;
    sortOrder: number;
    notes?: string | null;
    sets: Array<{
      setNumber: number;
      reps?: number | null;
      weight?: number | null;
      restSeconds?: number | null;
      notes?: string | null;
    }>;
  }>;
}

export interface StudentContractClause { sortOrder:number; title:string; body:string; }
export interface StudentContract { id:number; clientId:number; clientName:string; clientDni?:string|null; templateVersion:number; templateName:string; status:string; signatureMethod?:string|null; issuedAt:string; signedAt?:string|null; signedByName?:string|null; acceptanceText:string; snapshot:{clientName:string;clientDni:string;branchName:string;branchAddress:string;membershipName:string;membershipPeriod:string;issuedAt:string;clauses:StudentContractClause[]};documents:Array<{id:number;documentType:string;fileName:string;uploadedAt:string}>; }
