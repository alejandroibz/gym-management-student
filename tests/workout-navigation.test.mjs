import { test } from 'node:test';
import assert from 'node:assert/strict';
import { workoutAction } from '../src/app/student/workout-navigation.ts';

const step = (exerciseName, pendingSets, blockId = 1, cycle = 1) => ({ exerciseName, pendingSets, blockId, cycle });
test('completes current series and previews the next exercise without changing the draft', () => {
  const steps = [step('Sentadillas', [1, 2]), step('Remo', [1, 2])];
  const original = structuredClone(steps);
  const action = workoutAction(steps, 0);
  assert.equal(action.label, 'Completar y pasar al siguiente');
  assert.equal(action.nextIndex, 1);
  assert.equal(action.hint, 'Vas a completar la serie 1 de Sentadillas');
  assert.equal(action.nextHint, 'Sigue: Remo · serie 1');
  assert.deepEqual(steps, original);
});
test('starts the next round including a block with one exercise', () => {
  assert.equal(workoutAction([step('Sentadillas', [2]), step('Remo', [1, 2])], 1).label, 'Completar y empezar otra vuelta');
  assert.equal(workoutAction([step('Sentadillas', [1, 2])], 0).nextIndex, 0);
  assert.equal(workoutAction([step('Sentadillas', [1, 2])], 0).label, 'Completar y empezar otra vuelta');
});
test('distinguishes cycles and blocks', () => {
  assert.equal(workoutAction([step('Remo', [1]), step('Remo', [1], 1, 2)], 0).label, 'Completar y empezar otro ciclo');
  assert.equal(workoutAction([step('Remo', [1]), step('Plancha', [1], 2)], 0).label, 'Completar y pasar de bloque');
});
test('distinguishes completing the final series from saving already completed series', () => {
  assert.equal(workoutAction([step('Remo', [3])], 0).label, 'Completar entrenamiento');
  assert.equal(workoutAction([step('Remo', [])], 0).label, 'Guardar entrenamiento');
  assert.equal(workoutAction([step('Remo', [])], 0).nextIndex, null);
});
test('returns to skipped series instead of finishing early or staying stuck', () => {
  const action = workoutAction([step('Remo', [1]), step('Plancha', [1], 2)], 1);
  assert.equal(action.nextIndex, 0);
  assert.equal(action.label, 'Completar y pasar de bloque');
  const done = workoutAction([step('Remo', [1]), step('Plancha', [], 2)], 1);
  assert.equal(done.label, 'Ir al ejercicio pendiente');
  assert.equal(done.set, undefined);
});
test('handles unequal series counts, manually completed series, and legacy workouts', () => {
  assert.equal(workoutAction([step('Remo', [2, 3]), step('Plancha', [])], 0).nextIndex, 0);
  const action = workoutAction([step('Remo', [1], null), step('Plancha', [2], null)], 0);
  assert.equal(action.label, 'Completar y empezar otra vuelta');
  assert.equal(action.nextHint, 'Sigue: Plancha · serie 2');
});