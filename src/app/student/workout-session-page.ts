import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ChangeDetectorRef, DestroyRef, computed, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Exercise, ExerciseProgressHistory, RoutineAssignment } from './student.models';
import { StudentService } from './student.service';

import type { Driver, DriveStep } from 'driver.js';
import { workoutAction } from './workout-navigation';

interface SetDraft { reps: number | null; weight: number | null; done: boolean; }
interface SessionStep { blockId: number | null; blockName: string; blockOrder: number; cycle: number; cycles: number; exercise: RoutineAssignment['exercises'][number]; }
interface WorkoutOutlineBlock { id:number|null; name:string; sortOrder:number; cycles:number; notes?:string|null; exercises:RoutineAssignment['exercises']; }

@Component({ selector:'app-workout-session-page', standalone:true, imports:[CommonModule,RouterLink,MatButtonModule,MatIconModule,MatProgressBarModule], templateUrl:'./workout-session-page.html', styleUrl:'./workout-session-page.scss', changeDetection:ChangeDetectionStrategy.OnPush })
export class WorkoutSessionPage {
  private readonly service=inject(StudentService); private readonly route=inject(ActivatedRoute); private readonly router=inject(Router);
  readonly workout=signal<RoutineAssignment|null>(null); readonly exercises=signal<Exercise[]>([]); readonly currentIndex=signal(0); readonly draft=signal<Record<string,SetDraft>>({}); readonly setCounts=signal<Record<string,number>>({});
  readonly previous=signal<ExerciseProgressHistory|null>(null); readonly restRemaining=signal(0); readonly isSaving=signal(false); readonly feedback=signal(''); readonly sessionNote=signal('');
  private readonly changeDetector = inject(ChangeDetectorRef);
  private readonly destroyRef = inject(DestroyRef);
  private tour?: Driver;
  readonly tourLoading = signal(false);
  readonly tourError = signal('');
  readonly showOutline=signal(true);

  async startTour(): Promise<void> {
    if (!this.currentStep() || this.tourLoading() || this.tour?.isActive() || this.isSaving()) return;
    this.tourLoading.set(true);
    this.tourError.set('');
    try {
      const { driver } = await import('driver.js');
      if (this.destroyRef.destroyed) return;
      const outlineWasOpen = this.showOutline();
      const allSetsWereOpen = this.showAllSets();
      this.showOutline.set(true);
      this.showAllSets.set(false);
      this.changeDetector.detectChanges();
      const steps: DriveStep[] = [
        { popover: { title: 'Tu entrenamiento, paso a paso', description: 'Te mostramos cómo registrar cada serie y avanzar por tu rutina. Podés salir con la cruz o con Escape y volver a abrir esta guía cuando quieras.' } },
        { element: '[data-tour="outline"]', popover: { title: '1. Conocé tu rutina', description: 'Acá están los bloques, sus ejercicios y ciclos. Tocá un ejercicio para retomarlo; el contador indica cuántas series completaste.' } },
        { element: '[data-tour="round"]', popover: { title: '2. Ubicate en el bloque', description: 'La vuelta indica qué serie estás haciendo. Completás una serie de cada ejercicio del bloque y después empezás la siguiente vuelta. Si hay varios ciclos, repetís el bloque según tu rutina.' } },
        { element: '[data-tour="technique"]', popover: { title: '3. Revisá el ejercicio', description: 'Leé el nombre y las indicaciones de tu profesor. Cuando esté disponible, “Ver técnica” abre la ficha del ejercicio.' } },
        { element: '[data-tour="values"]', popover: { title: '4. Registrá lo que hiciste', description: 'Ingresá el peso en kilos y las repeticiones de esta serie. Los valores iniciales son los indicados en tu rutina; podés ajustarlos a lo que realizaste.' } },
        { element: '[data-tour="sets"]', popover: { title: '5. Revisá tus series', description: 'Con “Ver todas las series” podés corregir registros, marcar o desmarcar series y agregar o quitar una serie.' } },
        { element: '[data-tour="continue"]', popover: { title: '6. Completá y seguí', description: 'El botón te indica qué pasa al completar: pasar al siguiente ejercicio, empezar otra vuelta o ciclo, o pasar de bloque. Arriba ves qué serie registrás y qué ejercicio sigue. “Completar entrenamiento” registra la última serie y guarda; “Guardar entrenamiento” envía las series ya completas. Al completar una serie aparece el descanso, que podés omitir.' } },
        { popover: { title: '¡Ya podés empezar!', description: 'Tu avance se guarda en este navegador mientras entrenás. Al completar todas las series, se envía el entrenamiento y vas a Progreso. En el último ejercicio podés dejar observaciones. Esta guía no modificó tus registros.' } }
      ];
      this.tour = driver({
        steps, showProgress: true, progressText: '{{current}} de {{total}}',
        nextBtnText: 'Siguiente', prevBtnText: 'Anterior', doneBtnText: 'Empezar',
        allowClose: true, disableActiveInteraction: true, overlayClickBehavior: 'close',
        animate: !window.matchMedia('(prefers-reduced-motion: reduce)').matches,
        popoverClass: 'student-workout-tour', stagePadding: 6, stageRadius: 12,
        onDestroyed: () => {
          this.tour = undefined;
          if (!this.destroyRef.destroyed) {
            this.showOutline.set(outlineWasOpen);
            this.showAllSets.set(allSetsWereOpen);
            this.changeDetector.detectChanges();
            document.querySelector<HTMLButtonElement>('[data-tour="help"]')?.focus();
          }
        }
      });
      this.tour.drive();
    } catch {
      this.tourError.set('No pudimos abrir la guía. Intentá nuevamente.');
    } finally {
      this.tourLoading.set(false);
    }
  }
  readonly showAllSets=signal(false);
  private timer?:ReturnType<typeof setInterval>; readonly assignmentId=Number(this.route.snapshot.paramMap.get('assignmentId'));
  readonly steps=computed<SessionStep[]>(()=>{ const workout=this.workout(); if(!workout)return[]; if(workout.blocks?.length)return [...workout.blocks].sort((a,b)=>a.sortOrder-b.sortOrder).flatMap(block=>Array.from({length:Math.max(1,block.cycles)},(_,cycle)=>[...block.exercises].sort((a,b)=>a.sortOrder-b.sortOrder).map(exercise=>({blockId:block.id,blockName:block.name,blockOrder:block.sortOrder,cycle:cycle+1,cycles:block.cycles,exercise})))).flat(); return [...workout.exercises].sort((a,b)=>a.sortOrder-b.sortOrder).map(exercise=>({blockId:null,blockName:'Entrenamiento',blockOrder:1,cycle:1,cycles:1,exercise})); });
  readonly outline=computed<WorkoutOutlineBlock[]>(()=>{const workout=this.workout();if(!workout)return[];return workout.blocks?.length?[...workout.blocks].sort((a,b)=>a.sortOrder-b.sortOrder).map(block=>({...block,exercises:[...block.exercises].sort((a,b)=>a.sortOrder-b.sortOrder)})):[{id:null,name:'Entrenamiento',sortOrder:1,cycles:1,notes:null,exercises:[...workout.exercises].sort((a,b)=>a.sortOrder-b.sortOrder)}];});
  readonly activeBlockSteps=computed(()=>{const current=this.currentStep();if(!current)return[];return this.steps().map((step,index)=>({step,index})).filter(item=>item.step.blockId===current.blockId&&item.step.cycle===current.cycle);});
  readonly currentStep=computed(()=>this.steps()[this.currentIndex()]??null); readonly currentExercise=computed(()=>this.currentStep()?.exercise??null);
  readonly activeSet=computed(()=>{const step=this.currentStep();if(!step)return 1;return this.setNumbers(this.setCount(step)).find(set=>!this.value(step,set).done)??this.setCount(step);});
  readonly progress=computed(()=>this.steps().length?this.completedSets()/this.totalSets()*100:0); readonly currentMedia=computed(()=>this.exercises().find(x=>x.id===this.currentExercise()?.exerciseId));
  readonly completedSets=computed(()=>this.steps().reduce((total,step)=>total+this.setNumbers(this.setCount(step)).filter(set=>this.value(step,set).done).length,0));
  readonly totalSets=computed(()=>this.steps().reduce((total,step)=>total+this.setCount(step),0)||1);
  readonly completedCycles=computed(()=>{ const steps=this.steps(); const completed=new Set<string>(); for(const step of steps){const done=this.setNumbers(this.setCount(step)).every(set=>this.value(step,set).done);if(done)completed.add(`${step.blockId}-${step.cycle}`);}return completed; });
  blockProgress(block:WorkoutOutlineBlock):{done:number;total:number}{const steps=this.steps().filter(x=>x.blockId===block.id),total=steps.reduce((sum,step)=>sum+this.setCount(step),0),done=steps.reduce((sum,step)=>sum+this.setNumbers(this.setCount(step)).filter(set=>this.value(step,set).done).length,0);return{done,total};}
  cycleProgress(step:SessionStep):{done:number;total:number}{const matches=this.steps().filter(x=>x.blockId===step.blockId&&x.cycle===step.cycle),total=matches.reduce((sum,item)=>sum+this.setCount(item),0),done=matches.reduce((sum,item)=>sum+this.setNumbers(this.setCount(item)).filter(set=>this.value(item,set).done).length,0);return{done,total};}
  exerciseDone(blockId:number|null,exerciseId:number):boolean{const matches=this.steps().filter(x=>x.blockId===blockId&&x.exercise.id===exerciseId);return matches.length>0&&matches.every(step=>this.setNumbers(this.setCount(step)).every(set=>this.value(step,set).done));}
  exerciseDoneInCurrentRound(step:SessionStep):boolean{const round=Math.min(this.activeSet(),this.setCount(step));return this.value(step,round).done;}
  isCurrentBlock(blockId:number|null):boolean{return this.currentStep()?.blockId===blockId;}
  isCurrentOutlineExercise(blockId:number|null,exerciseId:number):boolean{return this.currentStep()?.blockId===blockId&&this.currentExercise()?.id===exerciseId;}
  goToOutlineExercise(blockId:number|null,exerciseId:number):void{const candidates=this.steps().map((step,index)=>({step,index})).filter(x=>x.step.blockId===blockId&&x.step.exercise.id===exerciseId);const target=candidates.find(x=>!this.setNumbers(this.setCount(x.step)).every(set=>this.value(x.step,set).done))??candidates[0];if(target){this.goToStep(target.index);this.showOutline.set(false);}}

  constructor(){this.destroyRef.onDestroy(() => { this.tour?.destroy(); if (this.timer) clearInterval(this.timer); });this.service.getExercises().subscribe(items=>this.exercises.set(items));this.service.getTrainingOverview().subscribe({next:overview=>{const all=[...overview.plans.flatMap(x=>x.workouts),...overview.directWorkouts];const item=all.find(x=>x.id===this.assignmentId)??null;this.workout.set(item);if(item){this.restore();this.loadPrevious();}},error:()=>this.feedback.set('No pudimos cargar este workout.')});}
  setNumbers(count:number):number[]{return Array.from({length:Math.max(1,count)},(_,i)=>i+1);} stepId(step:SessionStep):string{return `${step.blockId??'legacy'}-${step.cycle}-${step.exercise.id}`;} key(step:SessionStep,set:number):string{return `${this.stepId(step)}-${set}`;}
  setCount(step:SessionStep):number{return this.setCounts()[this.stepId(step)]??step.exercise.sets??3;} value(step:SessionStep,set:number):SetDraft{return this.draft()[this.key(step,set)]??{reps:step.exercise.reps??null,weight:step.exercise.weight??null,done:false};}
  update(step:SessionStep,set:number,field:'reps'|'weight',event:Event):void{const raw=(event.target as HTMLInputElement).value;const value=raw===''?null:Number(raw);const key=this.key(step,set);this.draft.update(items=>({...items,[key]:{...this.value(step,set),[field]:value!==null&&Number.isFinite(value)?value:null}}));this.persist();}
  toggleDone(step:SessionStep,set:number):void{const key=this.key(step,set);const done=!this.value(step,set).done;this.draft.update(items=>({...items,[key]:{...this.value(step,set),done}}));this.persist();if(done)this.startRest(step.exercise.restSeconds||60);}
  addSet(step:SessionStep):void{const id=this.stepId(step),next=this.setCount(step)+1;this.setCounts.update(x=>({...x,[id]:next}));this.draft.update(x=>({...x,[this.key(step,next)]:{reps:null,weight:null,done:false}}));this.persist();}
  removeSet(step:SessionStep,set:number):void{if(this.setCount(step)<=1)return;const next:Record<string,SetDraft>={};for(let n=1;n<=this.setCount(step);n++){if(n===set)continue;next[this.key(step,n>set?n-1:n)]=this.value(step,n);}for(const [key,value] of Object.entries(this.draft()))if(!key.startsWith(`${this.stepId(step)}-`))next[key]=value;this.draft.set(next);this.setCounts.update(x=>({...x,[this.stepId(step)]:this.setCount(step)-1}));this.persist();}
  blockRoundTotal(step:SessionStep):number{return Math.max(...this.steps().filter(x=>x.blockId===step.blockId&&x.cycle===step.cycle).map(x=>this.setCount(x)),1);}
  readonly primaryAction = computed(() => workoutAction(this.steps().map(step => ({
    blockId: step.blockId, cycle: step.cycle, exerciseName: step.exercise.exerciseName,
    pendingSets: this.setNumbers(this.setCount(step)).filter(set => !this.value(step, set).done)
  })), this.currentIndex()));

  completeAndContinue(): void {
    const step = this.currentStep();
    if (!step || this.isSaving()) return;
    const action = this.primaryAction();
    if (action.set !== undefined) this.toggleDone(step, action.set);
    if (action.nextIndex === null) this.finish();
    else this.goToStep(action.nextIndex);
  }
 previousExercise():void{if(this.currentIndex()>0){this.currentIndex.update(x=>x-1);this.showAllSets.set(false);this.loadPrevious();}}
  goToStep(index:number):void{this.currentIndex.set(index);this.showAllSets.set(false);this.persist();this.loadPrevious();window.scrollTo({top:0,behavior:'smooth'});}
  startRest(seconds:number):void{if(this.timer)clearInterval(this.timer);this.restRemaining.set(seconds);this.timer=setInterval(()=>{this.restRemaining.update(x=>Math.max(0,x-1));if(this.restRemaining()===0&&this.timer)clearInterval(this.timer);},1000);} skipRest():void{if(this.timer)clearInterval(this.timer);this.restRemaining.set(0);}
  finish():void{const workout=this.workout();if(!workout||this.isSaving())return;this.isSaving.set(true);this.service.saveWorkoutSession({routineAssignmentId:workout.id,clientRequestId:this.requestId(),trainingDate:new Date().toISOString().slice(0,10),notes:this.sessionNote()||null,exercises:this.steps().map((step,index)=>({exerciseId:step.exercise.exerciseId,routineBlockId:step.blockId,routineExerciseId:step.exercise.id,cycleNumber:step.cycle,sortOrder:index+1,notes:step.exercise.notes??null,sets:this.setNumbers(this.setCount(step)).map(set=>({setNumber:set,reps:this.value(step,set).reps,weight:this.value(step,set).weight,restSeconds:step.exercise.restSeconds??null,notes:this.value(step,set).done?null:'No completada'}))}))}).subscribe({next:()=>{localStorage.removeItem(this.storageKey());localStorage.removeItem(this.countsKey());localStorage.removeItem(`${this.storageKey()}-request`);this.router.navigate(['/progreso'],{queryParams:{completed:1}});},error:()=>{this.feedback.set('No pudimos finalizar. Tu avance sigue guardado.');this.isSaving.set(false);}});}
  private restore():void{const counts=localStorage.getItem(this.countsKey());if(counts)try{const stored=JSON.parse(counts) as Record<string,number>;const validIds=new Set(this.steps().map(step=>this.stepId(step)));this.setCounts.set(Object.fromEntries(Object.entries(stored).filter(([key])=>validIds.has(key))));}catch{}const saved=localStorage.getItem(this.storageKey());if(saved)try{const value=JSON.parse(saved);const stored=(value.draft??value) as Record<string,SetDraft>;const restored:Record<string,SetDraft>={};for(const step of this.steps())for(const set of this.setNumbers(this.setCount(step))){const key=this.key(step,set);restored[key]=stored[key]??{reps:step.exercise.reps??null,weight:step.exercise.weight??null,done:false};}this.draft.set(restored);this.sessionNote.set(value.note??'');this.currentIndex.set(Math.min(Math.max(0,Number(value.index)||0),Math.max(0,this.steps().length-1)));this.persist();return;}catch{}const initial:Record<string,SetDraft>={};for(const step of this.steps())for(const set of this.setNumbers(this.setCount(step)))initial[this.key(step,set)]={reps:step.exercise.reps??null,weight:step.exercise.weight??null,done:false};this.draft.set(initial);this.persist();}
  private persist():void{localStorage.setItem(this.storageKey(),JSON.stringify({draft:this.draft(),note:this.sessionNote(),index:this.currentIndex()}));localStorage.setItem(this.countsKey(),JSON.stringify(this.setCounts()));}
  private storageKey():string{return `student-workout-draft-v2-${this.assignmentId}`;} private countsKey():string{return `${this.storageKey()}-sets`;}
  private requestId():string{const key=`${this.storageKey()}-request`,existing=localStorage.getItem(key);if(existing)return existing;const created=crypto.randomUUID();localStorage.setItem(key,created);return created;}
  private loadPrevious():void{const exercise=this.currentExercise();if(!exercise)return;this.service.getExerciseProgress(exercise.exerciseId).subscribe({next:value=>this.previous.set(value),error:()=>this.previous.set(null)});}
}
