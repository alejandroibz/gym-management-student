export interface NavigationStep {
  blockId: number | null;
  cycle: number;
  exerciseName: string;
  pendingSets: number[];
}

// Preview the completion without mutating the draft. The click uses this same result.
export function workoutAction(steps: NavigationStep[], currentIndex: number) {
  const current = steps[currentIndex];
  const set = current?.pendingSets[0];
  const pending = steps.map((step, index) => ({
    ...step, index,
    pendingSets: step.pendingSets.filter(value => index !== currentIndex || value !== set)
  })).filter(step => step.pendingSets.length > 0);
  const group = pending.filter(step => step.blockId === current?.blockId && step.cycle === current?.cycle);
  const next = group.find(step => step.index > currentIndex && step.pendingSets[0] === set)
    ?? [...group].sort((a, b) => a.pendingSets[0] - b.pendingSets[0] || a.index - b.index)[0]
    ?? pending.find(step => step.index > currentIndex)
    ?? pending[0];
  const complete = set !== undefined;
  let label: string;
  if (!next) label = complete ? 'Completar entrenamiento' : 'Guardar entrenamiento';
  else if (!complete) label = 'Ir al ejercicio pendiente';
  else if (next.blockId !== current.blockId) label = 'Completar y pasar de bloque';
  else if (next.cycle !== current.cycle) label = 'Completar y empezar otro ciclo';
  else if (next.pendingSets[0] > set) label = 'Completar y empezar otra vuelta';
  else label = 'Completar y pasar al siguiente';
  return {
    label, set, nextIndex: next?.index ?? null,
    hint: complete ? `Vas a completar la serie ${set} de ${current.exerciseName}`
      : next ? 'Este ejercicio ya está completo. Retomá las series pendientes.'
      : 'Todas las series están completas. Guardá tu entrenamiento.',
    nextHint: next ? `Sigue: ${next.exerciseName} · serie ${next.pendingSets[0]}` : ''
  };
}