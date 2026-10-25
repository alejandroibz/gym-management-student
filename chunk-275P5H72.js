import{b as ye,c as ve,g as Ce,h as Me,i as Se,j as we,k as Pe,l as Ee,q as Oe,r as Ie,s as ke,t as Ve,u as Te,v as Re,w as De,y as Fe}from"./chunk-FDLGOLGN.js";import{B as ze,J as Be,K as Ae}from"./chunk-WPYQ23VI.js";import{e as Ne,f as q,g as W}from"./chunk-HG7VKA33.js";import{$ as _,$a as B,Ab as L,Ba as se,Cb as P,Db as E,Eb as O,Fa as k,Ga as de,Ib as C,Kb as M,Ob as x,Pb as $,Qa as V,Ra as m,Rb as pe,Sa as u,U as Q,Ua as ce,Ub as ge,V as ee,Va as T,Wa as R,Wb as H,X as I,Xa as p,Ya as r,Za as a,_ as g,_a as D,aa as te,ab as A,ac as _e,ba as ne,bb as F,bc as he,cc as fe,db as b,fa as ie,fb as f,ga as ae,gc as be,hb as d,ja as v,jc as xe,la as re,na as oe,o as Y,qc as G,sb as X,tb as me,ua as z,ub as ue,va as le,vb as s,wb as w,xa as l,xb as S,yb as K,zb as j}from"./chunk-6ET4OXFD.js";function Ge(t,n){t&1&&F(0,"div",2)}var Ze=new ee("MAT_PROGRESS_BAR_DEFAULT_OPTIONS");var We=(()=>{class t{_elementRef=I(oe);_ngZone=I(ae);_changeDetectorRef=I(ge);_renderer=I(se);_cleanupTransitionEnd;constructor(){let e=ze(),o=I(Ze,{optional:!0});this._isNoopAnimation=e==="di-disabled",e==="reduced-motion"&&this._elementRef.nativeElement.classList.add("mat-progress-bar-reduced-motion"),o&&(o.color&&(this.color=this._defaultColor=o.color),this.mode=o.mode||this.mode)}_isNoopAnimation;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;_defaultColor="primary";get value(){return this._value}set value(e){this._value=Ke(e||0),this._changeDetectorRef.markForCheck()}_value=0;get bufferValue(){return this._bufferValue||0}set bufferValue(e){this._bufferValue=Ke(e||0),this._changeDetectorRef.markForCheck()}_bufferValue=0;animationEnd=new ie;get mode(){return this._mode}set mode(e){this._mode=e,this._changeDetectorRef.markForCheck()}_mode="determinate";ngAfterViewInit(){this._ngZone.runOutsideAngular(()=>{this._cleanupTransitionEnd=this._renderer.listen(this._elementRef.nativeElement,"transitionend",this._transitionendHandler)})}ngOnDestroy(){this._cleanupTransitionEnd?.()}_getPrimaryBarTransform(){return`scaleX(${this._isIndeterminate()?1:this.value/100})`}_getBufferBarFlexBasis(){return`${this.mode==="buffer"?this.bufferValue:100}%`}_isIndeterminate(){return this.mode==="indeterminate"||this.mode==="query"}_transitionendHandler=e=>{this.animationEnd.observers.length===0||!e.target||!e.target.classList.contains("mdc-linear-progress__primary-bar")||(this.mode==="determinate"||this.mode==="buffer")&&this._ngZone.run(()=>this.animationEnd.next({value:this.value}))};static \u0275fac=function(o){return new(o||t)};static \u0275cmp=k({type:t,selectors:[["mat-progress-bar"]],hostAttrs:["role","progressbar","aria-valuemin","0","aria-valuemax","100","tabindex","-1",1,"mat-mdc-progress-bar","mdc-linear-progress"],hostVars:10,hostBindings:function(o,i){o&2&&(V("aria-valuenow",i._isIndeterminate()?null:i.value)("mode",i.mode),ue("mat-"+i.color),me("_mat-animation-noopable",i._isNoopAnimation)("mdc-linear-progress--animation-ready",!i._isNoopAnimation)("mdc-linear-progress--indeterminate",i._isIndeterminate()))},inputs:{color:"color",value:[2,"value","value",H],bufferValue:[2,"bufferValue","bufferValue",H],mode:"mode"},outputs:{animationEnd:"animationEnd"},exportAs:["matProgressBar"],decls:7,vars:5,consts:[["aria-hidden","true",1,"mdc-linear-progress__buffer"],[1,"mdc-linear-progress__buffer-bar"],[1,"mdc-linear-progress__buffer-dots"],["aria-hidden","true",1,"mdc-linear-progress__bar","mdc-linear-progress__primary-bar"],[1,"mdc-linear-progress__bar-inner"],["aria-hidden","true",1,"mdc-linear-progress__bar","mdc-linear-progress__secondary-bar"]],template:function(o,i){o&1&&(B(0,"div",0),F(1,"div",1),m(2,Ge,1,0,"div",2),A(),B(3,"div",3),F(4,"span",4),A(),B(5,"div",5),F(6,"span",4),A()),o&2&&(l(),X("flex-basis",i._getBufferBarFlexBasis()),l(),u(i.mode==="buffer"?2:-1),l(),X("transform",i._getPrimaryBarTransform()))},styles:[`.mat-mdc-progress-bar {
  --mat-progress-bar-animation-multiplier: 1;
  display: block;
  text-align: start;
}
.mat-mdc-progress-bar[mode=query] {
  transform: scaleX(-1);
}
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-dots,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__secondary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__bar-inner.mdc-linear-progress__bar-inner {
  animation: none;
}
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-bar {
  transition: transform 1ms;
}

.mat-progress-bar-reduced-motion {
  --mat-progress-bar-animation-multiplier: 2;
}

.mdc-linear-progress {
  position: relative;
  width: 100%;
  transform: translateZ(0);
  outline: 1px solid transparent;
  overflow-x: hidden;
  transition: opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  height: max(var(--mat-progress-bar-track-height, 4px), var(--mat-progress-bar-active-indicator-height, 4px));
}
@media (forced-colors: active) {
  .mdc-linear-progress {
    outline-color: CanvasText;
  }
}

.mdc-linear-progress__bar {
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  width: 100%;
  animation: none;
  transform-origin: top left;
  transition: transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  height: var(--mat-progress-bar-active-indicator-height, 4px);
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__bar {
  transition: none;
}
[dir=rtl] .mdc-linear-progress__bar {
  right: 0;
  transform-origin: center right;
}

.mdc-linear-progress__bar-inner {
  display: inline-block;
  position: absolute;
  width: 100%;
  animation: none;
  border-top-style: solid;
  border-color: var(--mat-progress-bar-active-indicator-color, var(--mat-sys-primary));
  border-top-width: var(--mat-progress-bar-active-indicator-height, 4px);
}

.mdc-linear-progress__buffer {
  display: flex;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  width: 100%;
  overflow: hidden;
  height: var(--mat-progress-bar-track-height, 4px);
  border-radius: var(--mat-progress-bar-track-shape, var(--mat-sys-corner-none));
}

.mdc-linear-progress__buffer-dots {
  background-image: radial-gradient(circle, var(--mat-progress-bar-track-color, var(--mat-sys-surface-variant)) calc(var(--mat-progress-bar-track-height, 4px) / 2), transparent 0);
  background-repeat: repeat-x;
  background-size: calc(calc(var(--mat-progress-bar-track-height, 4px) / 2) * 5);
  background-position: left;
  flex: auto;
  transform: rotate(180deg);
  animation: mdc-linear-progress-buffering calc(250ms * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
@media (forced-colors: active) {
  .mdc-linear-progress__buffer-dots {
    background-color: ButtonBorder;
  }
}
[dir=rtl] .mdc-linear-progress__buffer-dots {
  animation: mdc-linear-progress-buffering-reverse calc(250ms * var(--mat-progress-bar-animation-multiplier)) infinite linear;
  transform: rotate(0);
}

.mdc-linear-progress__buffer-bar {
  flex: 0 1 100%;
  transition: flex-basis 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  background-color: var(--mat-progress-bar-track-color, var(--mat-sys-surface-variant));
}

.mdc-linear-progress__primary-bar {
  transform: scaleX(0);
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar {
  left: -145.166611%;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar {
  animation: mdc-linear-progress-primary-indeterminate-translate calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar > .mdc-linear-progress__bar-inner {
  animation: mdc-linear-progress-primary-indeterminate-scale calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar {
  animation-name: mdc-linear-progress-primary-indeterminate-translate-reverse;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar {
  right: -145.166611%;
  left: auto;
}

.mdc-linear-progress__secondary-bar {
  display: none;
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar {
  left: -54.888891%;
  display: block;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar {
  animation: mdc-linear-progress-secondary-indeterminate-translate calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar > .mdc-linear-progress__bar-inner {
  animation: mdc-linear-progress-secondary-indeterminate-scale calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar {
  animation-name: mdc-linear-progress-secondary-indeterminate-translate-reverse;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar {
  right: -54.888891%;
  left: auto;
}

@keyframes mdc-linear-progress-buffering {
  from {
    transform: rotate(180deg) translateX(calc(var(--mat-progress-bar-track-height, 4px) * -2.5));
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-translate {
  0% {
    transform: translateX(0);
  }
  20% {
    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
    transform: translateX(0);
  }
  59.15% {
    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
    transform: translateX(83.67142%);
  }
  100% {
    transform: translateX(200.611057%);
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-scale {
  0% {
    transform: scaleX(0.08);
  }
  36.65% {
    animation-timing-function: cubic-bezier(0.334731, 0.12482, 0.785844, 1);
    transform: scaleX(0.08);
  }
  69.15% {
    animation-timing-function: cubic-bezier(0.06, 0.11, 0.6, 1);
    transform: scaleX(0.661479);
  }
  100% {
    transform: scaleX(0.08);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-translate {
  0% {
    animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);
    transform: translateX(0);
  }
  25% {
    animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);
    transform: translateX(37.651913%);
  }
  48.35% {
    animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);
    transform: translateX(84.386165%);
  }
  100% {
    transform: translateX(160.277782%);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-scale {
  0% {
    animation-timing-function: cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);
    transform: scaleX(0.08);
  }
  19.15% {
    animation-timing-function: cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);
    transform: scaleX(0.457104);
  }
  44.15% {
    animation-timing-function: cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);
    transform: scaleX(0.72796);
  }
  100% {
    transform: scaleX(0.08);
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-translate-reverse {
  0% {
    transform: translateX(0);
  }
  20% {
    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
    transform: translateX(0);
  }
  59.15% {
    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
    transform: translateX(-83.67142%);
  }
  100% {
    transform: translateX(-200.611057%);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-translate-reverse {
  0% {
    animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);
    transform: translateX(0);
  }
  25% {
    animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);
    transform: translateX(-37.651913%);
  }
  48.35% {
    animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);
    transform: translateX(-84.386165%);
  }
  100% {
    transform: translateX(-160.277782%);
  }
}
@keyframes mdc-linear-progress-buffering-reverse {
  from {
    transform: translateX(-10px);
  }
}
`],encapsulation:2,changeDetection:0})}return t})();function Ke(t,n=0,e=100){return Math.max(n,Math.min(e,t))}var Ue=(()=>{class t{static \u0275fac=function(o){return new(o||t)};static \u0275mod=de({type:t});static \u0275inj=Q({imports:[Ne]})}return t})();function Xe(t,n){return t===null||n===null||!Number.isFinite(t)||t<=0||t>1e4||!Number.isInteger(n)||n<1||n>10?null:Math.round((n===1?t:t*(1+n/30))*1e4)/1e4}function je(t,n){return Math.round(Math.floor((t+1e-4)/n)*n*1e3)/1e3}var U=(t,n)=>n.id;function et(t,n){if(t&1&&(r(0,"option",9),s(1),a()),t&2){let e=n.$implicit;p("ngValue",e.id),l(),w(e.name)}}function tt(t,n){if(t&1){let e=b();r(0,"label",3)(1,"span"),s(2),a(),r(3,"select",8),f("ngModelChange",function(i){g(e);let c=d();return _(c.selectExercise(i))}),r(4,"option",9),s(5,"Consulta r\xE1pida sin guardar"),a(),T(6,et,2,2,"option",9,U),a()()}if(t&2){let e=d();l(2),S("Ejercicio ",e.admin?"":"(opcional para calcular)"),l(),p("ngModel",e.selected())("disabled",e.busy()),l(),p("ngValue",0),l(2),R(e.catalog())}}function nt(t,n){t&1&&D(0,"mat-progress-bar",4)}function it(t,n){if(t&1){let e=b();r(0,"p",5),s(1),r(2,"button",10),f("click",function(){g(e);let i=d();return _(i.load())}),s(3," Reintentar consulta "),a()()}if(t&2){let e=d();l(),S(" ",e.error()," "),l(),p("disabled",e.busy())}}function at(t,n){if(t&1&&(r(0,"p",6),s(1),a()),t&2){let e=d();l(),w(e.message())}}function rt(t,n){if(t&1){let e=b();r(0,"details",7)(1,"summary"),s(2,"Configurar RM de este ejercicio"),a(),r(3,"p"),s(4," Habilit\xE1 solo variantes con carga externa comparable. Para asistidos, isom\xE9tricos y peso corporal, dej\xE1 RM deshabilitado. "),a(),r(5,"div",11)(6,"label",12)(7,"input",13),O("ngModelChange",function(i){g(e);let c=d();return E(c.configEnabled,i)||(c.configEnabled=i),_(i)}),a(),s(8,"Admite estimaci\xF3n de RM"),a(),r(9,"label",3)(10,"span"),s(11,"C\xF3mo se registra el peso"),a(),r(12,"select",8),O("ngModelChange",function(i){g(e);let c=d();return E(c.configConvention,i)||(c.configConvention=i),_(i)}),r(13,"option",14),s(14,"Peso total (incluye barra)"),a(),r(15,"option",15),s(16,"Una mancuerna"),a(),r(17,"option",16),s(18,"Carga de m\xE1quina"),a()()(),r(19,"label",3)(20,"span"),s(21,"Incremento disponible (kg)"),a(),r(22,"input",17),O("ngModelChange",function(i){g(e);let c=d();return E(c.configIncrement,i)||(c.configIncrement=i),_(i)}),a()(),r(23,"label",3)(24,"span"),s(25,"Variante y equipamiento"),a(),r(26,"input",18),O("ngModelChange",function(i){g(e);let c=d();return E(c.configEquipment,i)||(c.configEquipment=i),_(i)}),a()()(),r(27,"p"),s(28," Cambiar la variante o la convenci\xF3n excluye sus evaluaciones anteriores de los valores actuales. El historial se conserva. "),a(),r(29,"button",19),f("click",function(){g(e);let i=d();return _(i.saveSettings())}),s(30," Guardar configuraci\xF3n RM "),a()()}if(t&2){let e=d();p("open",e.settingsOnly),l(7),P("ngModel",e.configEnabled),p("disabled",e.busy()||e.loading()),l(5),P("ngModel",e.configConvention),p("disabled",e.busy()||e.loading()),l(10),P("ngModel",e.configIncrement),p("disabled",e.busy()||e.loading()),l(4),P("ngModel",e.configEquipment),p("disabled",e.busy()||e.loading()),l(3),p("disabled",e.busy()||e.loading()||!e.settings())}}function ot(t,n){t&1&&(r(0,"p",26),s(1," El profesor debe habilitar RM para este ejercicio. Pod\xE9s hacer una consulta, pero no guardarla. "),a())}function lt(t,n){if(t&1&&(r(0,"p",30),s(1),a(),m(2,ot,2,0,"p",26)),t&2){let e=n,o=d(2);l(),K(" ",o.conventionLabels[e.weightConvention]," \xB7 ",e.equipment||"Equipamiento pendiente de definir"," "),l(),u(e.enabled?-1:2)}}function st(t,n){if(t&1&&(r(0,"option",9),s(1),C(2,"date"),a()),t&2){let e=n.$implicit;p("ngValue",e.id),l(),L(" ",M(2,5,e.trainingDate,"dd/MM/yyyy")," \xB7 ",e.weightKg??"\u2014"," kg \xD7 ",e.reps??"\u2014"," reps ",e.reviewed?"\xB7 revisada":""," ")}}function dt(t,n){if(t&1){let e=b();r(0,"label",3)(1,"span"),s(2,"Usar una serie registrada"),a(),r(3,"select",31),f("ngModelChange",function(i){g(e);let c=d(2);return _(c.chooseSource(i))}),r(4,"option",9),s(5,"Evaluaci\xF3n manual"),a(),T(6,st,3,8,"option",9,U),a()()}if(t&2){let e=d(2);l(3),p("ngModel",e.sourceId)("disabled",e.busy()),l(),p("ngValue",0),l(2),R(e.sources())}}function ct(t,n){t&1&&(r(0,"p",26),s(1," Consulta de la serie en curso. No modifica tu workout. Para guardar una evaluaci\xF3n vinculada, finaliz\xE1 el entrenamiento y eleg\xED la serie desde Progreso. "),a())}function mt(t,n){if(t&1){let e=b();r(0,"label",12)(1,"input",37),f("ngModelChange",function(i){g(e);let c=d(3);return _(c.measured.set(i))}),a(),s(2,"Registrar como test de 1RM medido (1 repetici\xF3n)"),a()}if(t&2){let e=d(3);l(),p("ngModel",e.measured())("disabled",e.busy())}}function ut(t,n){t&1&&(r(0,"p",26),s(1,"El calentamiento no se guarda como evaluaci\xF3n de RM."),a())}function pt(t,n){if(t&1){let e=b();r(0,"label",3)(1,"span"),s(2,"Fecha de evaluaci\xF3n"),a(),r(3,"input",32),O("ngModelChange",function(i){g(e);let c=d(2);return E(c.performedAt,i)||(c.performedAt=i),_(i)}),a()(),m(4,mt,3,2,"label",12),r(5,"label",12)(6,"input",33),O("ngModelChange",function(i){g(e);let c=d(2);return E(c.nearMax,i)||(c.nearMax=i),_(i)}),a(),s(7,"Confirmo que fue una serie cercana al esfuerzo m\xE1ximo"),a(),r(8,"label",12)(9,"input",34),O("ngModelChange",function(i){g(e);let c=d(2);return E(c.warmup,i)||(c.warmup=i),_(i)}),a(),s(10,"Fue una serie de calentamiento"),a(),m(11,ut,2,0,"p",26),r(12,"label",3)(13,"span"),s(14,"Observaci\xF3n de la evaluaci\xF3n (opcional)"),a(),r(15,"textarea",35),O("ngModelChange",function(i){g(e);let c=d(2);return E(c.notes,i)||(c.notes=i),_(i)}),a()(),r(16,"button",36),s(17),a()}if(t&2){let e=d(2);l(3),P("ngModel",e.performedAt),p("max",e.maxDate)("readOnly",!!e.sourceId)("disabled",e.busy()),l(),u(e.admin?4:-1),l(2),P("ngModel",e.nearMax),p("disabled",e.busy()),l(3),P("ngModel",e.warmup),p("disabled",e.busy()),l(2),u(e.warmup?11:-1),l(4),P("ngModel",e.notes),p("disabled",e.busy()),l(),p("disabled",e.busy()||e.loading()||!e.estimate()||!e.nearMax||e.warmup||e.measured()&&e.reps()!==1),l(),S(" ",e.busy()?"Guardando\u2026":e.measured()?"Guardar test medido":"Guardar estimaci\xF3n"," ")}}function gt(t,n){if(t&1&&(r(0,"tr")(1,"th",38),s(2),a(),r(3,"td"),s(4),C(5,"number"),a()()),t&2){let e=n.$implicit,o=d(2);l(2),S("",e,"%"),l(2),S(" ",o.estimate()===null?"\u2014":M(5,2,o.loadAt(e),"1.0-3")," kg ")}}function _t(t,n){t&1&&(r(0,"p",40),s(1," Referencia pendiente de revisi\xF3n: cambi\xF3 o se invalid\xF3 su evaluaci\xF3n de origen. Se conserva el valor que eligi\xF3 el profesor. "),a())}function ht(t,n){if(t&1&&(r(0,"figure"),te(),r(1,"svg",44),D(2,"polyline",45),a(),ne(),r(3,"figcaption"),s(4," De la evaluaci\xF3n m\xE1s antigua a la m\xE1s reciente. Valores y fechas completos abajo. "),a()()),t&2){let e=d(3);l(2),V("points",e.chart())}}function ft(t,n){t&1&&(r(0,"p",41),s(1," Todav\xEDa no hay evaluaciones de fuerza para este ejercicio. Calcul\xE1 y guard\xE1 una serie efectiva, o seleccion\xE1 una serie registrada. "),a())}function bt(t,n){if(t&1){let e=b();r(0,"button",19),f("click",function(){g(e);let i=d(4);return _(i.setReference(null))}),s(1," Retirar RM de referencia "),a()}if(t&2){let e=d(4);p("disabled",e.busy())}}function xt(t,n){if(t&1){let e=b();r(0,"label",3)(1,"span"),s(2,"Nota para la decisi\xF3n de referencia (opcional)"),a(),r(3,"input",46),O("ngModelChange",function(i){g(e);let c=d(3);return E(c.decisionNote,i)||(c.decisionNote=i),_(i)}),a()(),m(4,bt,2,1,"button",47)}if(t&2){let e,o=d(3);l(3),P("ngModel",o.decisionNote),p("disabled",o.busy()),l(),u((e=o.reference())!=null&&e.evaluationId?4:-1)}}function yt(t,n){if(t&1&&(r(0,"p"),s(1),a()),t&2){let e=d().$implicit;l(),w(e.notes)}}function vt(t,n){if(t&1&&(r(0,"p"),s(1),C(2,"number"),a()),t&2){let e=d().$implicit;l(),S(" Valor original: ",M(2,1,e.originalValueKg,"1.0-1")," kg. Estimaci\xF3n actualizada desde la serie corregida. ")}}function Ct(t,n){if(t&1&&(r(0,"p",26),s(1),a()),t&2){let e=d().$implicit;l(),K(" ",e.exclusionReason," ",e.invalidationReason," ")}}function Mt(t,n){if(t&1){let e=b();r(0,"button",10),f("click",function(){g(e);let i=d(2).$implicit,c=d(3);return _(c.invalidating=i.id)}),s(1," Invalidar evaluaci\xF3n "),a()}if(t&2){let e=d(5);p("disabled",e.busy())}}function St(t,n){if(t&1){let e=b();r(0,"div",49)(1,"button",19),f("click",function(){g(e);let i=d().$implicit,c=d(3);return _(c.setReference(i.id))}),s(2," Usar como referencia"),a(),m(3,Mt,2,1,"button",51),a()}if(t&2){let e=d().$implicit,o=d(3);l(),p("disabled",o.busy()||!e.eligible),l(2),u(e.invalidatedAt?-1:3)}}function wt(t,n){if(t&1){let e=b();r(0,"div",50)(1,"label",3)(2,"span"),s(3,"Motivo de invalidaci\xF3n"),a(),r(4,"input",46),O("ngModelChange",function(i){g(e);let c=d(4);return E(c.invalidationReason,i)||(c.invalidationReason=i),_(i)}),a()(),r(5,"div",49)(6,"button",19),f("click",function(){g(e);let i=d().$implicit,c=d(3);return _(c.invalidate(i.id))}),s(7," Confirmar invalidaci\xF3n"),a(),r(8,"button",10),f("click",function(){g(e);let i=d(4);return _(i.invalidating=0)}),s(9," Cancelar "),a()()()}if(t&2){let e=d(4);l(4),P("ngModel",e.invalidationReason),p("disabled",e.busy()),l(2),p("disabled",e.busy()||!e.invalidationReason.trim()),l(2),p("disabled",e.busy())}}function Pt(t,n){if(t&1&&(r(0,"li")(1,"div",48)(2,"strong"),s(3),C(4,"number"),a(),r(5,"time"),s(6),C(7,"date"),a()(),r(8,"p"),s(9),a(),r(10,"p"),s(11),a(),m(12,yt,2,1,"p"),m(13,vt,3,4,"p"),m(14,Ct,2,2,"p",26),m(15,St,4,2,"div",49),m(16,wt,10,4,"div",50),a()),t&2){let e=n.$implicit,o=d(3);l(3),K("",e.valueKg===null?"No vigente":M(4,15,e.valueKg,"1.0-1")+" kg"," \xB7 ",e.isMeasured?"1RM medido":"1RM estimado"),l(3),w(M(7,18,e.performedAt,"dd/MM/yyyy")),l(3),L(" ",e.weightKg," kg \xD7 ",e.reps," reps \xB7 ",e.equipment," \xB7 ",e.sourceSetId?"Serie #"+e.sourceSetId:"Evaluaci\xF3n manual"," "),l(2),j(" ",e.isStudentAuthor?"Registrado por alumno":"Registrado por profesor"," \xB7 ",e.authorName," \xB7 ",e.reviewed?"Revisado por profesor":"Sin revisi\xF3n del profesor"," "),l(),u(e.notes?12:-1),l(),u(e.originalValueKg!==e.valueKg&&e.valueKg!==null?13:-1),l(),u(e.exclusionReason?14:-1),l(),u(o.admin?15:-1),l(),u(o.invalidating===e.id?16:-1)}}function Et(t,n){if(t&1&&(r(0,"p"),s(1),a()),t&2){let e=d().$implicit;l(),w(e.notes)}}function Ot(t,n){if(t&1&&(r(0,"li"),s(1),C(2,"date"),C(3,"number"),m(4,Et,2,1,"p"),a()),t&2){let e=n.$implicit;l(),j(" ",M(2,4,e.createdAt,"dd/MM/yyyy HH:mm")," \xB7 ",e.authorName," \xB7 ",e.valueKg===null?"Referencia retirada":M(3,7,e.valueKg,"1.0-1")+" kg"),l(3),u(e.notes?4:-1)}}function It(t,n){if(t&1&&(r(0,"details",43)(1,"summary"),s(2,"Historial de decisiones del profesor"),a(),r(3,"ol"),T(4,Ot,5,10,"li",null,U),a()()),t&2){let e=d();l(4),R(e.references)}}function kt(t,n){if(t&1&&(r(0,"section",29)(1,"h3"),s(2,"Evaluaciones y evoluci\xF3n"),a(),r(3,"dl",39)(4,"div")(5,"dt"),s(6,"\xDAltima evaluaci\xF3n vigente"),a(),r(7,"dd"),s(8),C(9,"number"),a(),r(10,"small"),s(11),C(12,"date"),a()(),r(13,"div")(14,"dt"),s(15,"Mejor evaluaci\xF3n hist\xF3rica vigente"),a(),r(16,"dd"),s(17),C(18,"number"),a(),r(19,"small"),s(20),C(21,"date"),a()(),r(22,"div")(23,"dt"),s(24,"RM de referencia del profesor"),a(),r(25,"dd"),s(26),C(27,"number"),a(),r(28,"small"),s(29),C(30,"date"),a()()(),m(31,_t,2,0,"p",40),m(32,ht,5,1,"figure"),m(33,ft,2,0,"p",41),m(34,xt,5,3),r(35,"ol",42),T(36,Pt,17,21,"li",null,U),a(),m(38,It,6,0,"details",43),a()),t&2){let e,o,i,c,h,Z,J,N=n,y=d(2);l(8),S(" ",((e=y.latest())==null?null:e.valueKg)===void 0||((e=y.latest())==null?null:e.valueKg)===null?"\u2014":M(9,11,y.latest().valueKg,"1.0-1")," kg "),l(3),w(M(12,14,(o=y.latest())==null?null:o.performedAt,"dd/MM/yyyy")),l(6),S(" ",((i=y.best())==null?null:i.valueKg)===void 0||((i=y.best())==null?null:i.valueKg)===null?"\u2014":M(18,17,y.best().valueKg,"1.0-1")," kg "),l(3),w(M(21,20,(c=y.best())==null?null:c.performedAt,"dd/MM/yyyy")),l(6),S(" ",((h=y.reference())==null?null:h.valueKg)===void 0||((h=y.reference())==null?null:h.valueKg)===null?"Sin definir":M(27,23,y.reference().valueKg,"1.0-1")+" kg"," "),l(3),w(M(30,26,(Z=y.reference())==null?null:Z.createdAt,"dd/MM/yyyy")),l(2),u((J=y.reference())!=null&&J.needsReview?31:-1),l(),u(y.chart()?32:-1),l(),u(N.evaluations.length?-1:33),l(),u(y.admin&&N.evaluations.length?34:-1),l(2),R(N.evaluations),l(2),u(N.references.length?38:-1)}}function Vt(t,n){if(t&1){let e=b();m(0,lt,3,3),r(1,"div",20)(2,"form",21),f("ngSubmit",function(){g(e);let i=d();return _(i.save())}),r(3,"h3"),s(4,"Calculadora de 1RM"),a(),m(5,dt,8,3,"label",3),r(6,"div",11)(7,"label",3)(8,"span"),s(9,"Peso utilizado (kg)"),a(),r(10,"input",22),f("ngModelChange",function(i){g(e);let c=d();return _(c.weight.set(i))}),a()(),r(11,"label",3)(12,"span"),s(13,"Repeticiones realizadas"),a(),r(14,"input",23),f("ngModelChange",function(i){g(e);let c=d();return _(c.reps.set(i))}),a()()(),r(15,"p",24),s(16," Us\xE1 entre 1 y 10 repeticiones. Epley estima a partir de una serie cercana al esfuerzo m\xE1ximo. Una repetici\xF3n devuelve el peso ingresado; no acredita un test m\xE1ximo. "),a(),r(17,"output",25),s(18,"1RM estimado "),r(19,"strong"),s(20),C(21,"number"),r(22,"small"),s(23,"kg"),a()()(),m(24,ct,2,0,"p",26),m(25,pt,18,14),a(),r(26,"section",27)(27,"h3"),s(28,"Tabla de cargas"),a(),r(29,"p"),s(30),a(),r(31,"table")(32,"thead")(33,"tr")(34,"th",28),s(35,"Intensidad"),a(),r(36,"th",28),s(37,"Carga"),a()()(),r(38,"tbody"),T(39,gt,6,5,"tr",null,ce),a()()()(),m(41,kt,39,29,"section",29)}if(t&2){let e,o,i,c,h=d();u((e=h.settings())?0:-1,e),l(5),u(h.sources().length&&!h.previewOnly?5:-1),l(5),p("ngModel",h.weight())("readOnly",!!h.sourceId)("disabled",h.busy()),l(4),p("ngModel",h.reps())("readOnly",!!h.sourceId)("disabled",h.busy()),l(6),S("",h.estimate()===null?"\u2014":M(21,13,h.estimate(),"1.0-1")," "),l(4),u(h.previewOnly?24:-1),l(),u(h.selected()&&!h.previewOnly&&((o=h.settings())!=null&&o.enabled)&&(!h.admin||h.clientId)?25:-1),l(5),S(" Orientaci\xF3n para planificar; no reemplaza la carga indicada por tu profesor. Redondeo hacia abajo a ",((i=h.settings())==null?null:i.incrementKg)??2.5," kg. "),l(9),R(h.percentages),l(2),u((c=h.history())?41:-1,c)}}var Le=class t{clientId=null;admin=!1;canConfigure=!1;exerciseId=0;seedWeight=null;seedReps=null;previewOnly=!1;settingsOnly=!1;http=I(be);url=`${G.apiUrl}/api/strength`;loadingRequest;catalogRequest;mutation;ready=!1;version=0;requestId=crypto.randomUUID();lastPayloadKey="";catalog=v([]);selected=v(0);loading=v(!1);busy=v(!1);error=v("");message=v("");settings=v(null);history=v(null);sources=v([]);weight=v(null);reps=v(null);measured=v(!1);estimate=x(()=>Xe(this.weight(),this.reps()));eligible=x(()=>this.history()?.evaluations.filter(n=>n.eligible)??[]);latest=x(()=>this.eligible()[0]??null);best=x(()=>this.eligible().reduce((n,e)=>!n||e.valueKg>n.valueKg?e:n,null));reference=x(()=>this.history()?.references[0]??null);chart=x(()=>{let n=[...this.eligible()].reverse();if(n.length<2)return"";let e=Math.min(...n.map(i=>i.valueKg)),o=Math.max(...n.map(i=>i.valueKg));return n.map((i,c)=>`${20+c*560/(n.length-1)},${110-(i.valueKg-e)*90/(o-e||1)}`).join(" ")});percentages=[60,65,70,75,80,85,90,95];sourceId=0;performedAt=this.today();maxDate=this.today();nearMax=!1;warmup=!1;notes="";decisionNote="";invalidating=0;invalidationReason="";configEnabled=!1;configConvention="Total";configIncrement=2.5;configEquipment="";conventionLabels={Total:"Peso total (incluye barra)",PerDumbbell:"Peso de una mancuerna",Machine:"Carga indicada en la m\xE1quina"};ngOnInit(){this.ready=!0,this.selected.set(this.exerciseId),this.seed(),this.load()}ngOnChanges(n){this.ready&&(n.clientId||n.exerciseId?(this.selected.set(this.exerciseId),this.clearForm(),this.seed(),this.load()):(n.seedWeight||n.seedReps)&&this.seed())}ngOnDestroy(){this.loadingRequest?.unsubscribe(),this.catalogRequest?.unsubscribe(),this.mutation?.unsubscribe()}today(){let n=new Date;return`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,"0")}-${String(n.getDate()).padStart(2,"0")}`}seed(){this.weight.set(this.seedWeight),this.reps.set(this.seedReps)}params(){return{params:this.admin&&this.clientId?{clientId:String(this.clientId)}:{}}}clearForm(){this.sourceId=0,this.weight.set(null),this.reps.set(null),this.nearMax=!1,this.warmup=!1,this.measured.set(!1),this.notes="",this.decisionNote="",this.invalidating=0,this.performedAt=this.today(),this.requestId=crypto.randomUUID(),this.message.set("")}selectExercise(n){this.busy()||(this.selected.set(Number(n)),this.clearForm(),this.load())}load(){if(this.loadingRequest?.unsubscribe(),this.version++,this.error.set(""),this.history.set(null),this.settings.set(null),this.sources.set([]),this.catalog().length||(this.catalogRequest?.unsubscribe(),this.catalogRequest=this.http.get(`${G.apiUrl}/api/Exercises`).subscribe({next:e=>this.catalog.set(e),error:()=>this.error.set("No se pudo cargar el cat\xE1logo. Us\xE1 Actualizar para volver a intentar.")})),!this.selected()){this.loading.set(!1);return}this.loading.set(!0);let n=this.http.get(`${this.url}/settings/${this.selected()}`);if(this.settingsOnly||this.previewOnly||this.admin&&!this.clientId){this.loadingRequest=n.subscribe({next:e=>{this.acceptSettings(e),this.loading.set(!1)},error:e=>this.fail(e)});return}this.loadingRequest=Y({settings:n,history:this.http.get(`${this.url}/${this.selected()}`,this.params()),sources:this.http.get(`${this.url}/${this.selected()}/sources`,this.params())}).subscribe({next:e=>{this.acceptSettings(e.settings),this.history.set(e.history),this.sources.set(e.sources),this.loading.set(!1)},error:e=>this.fail(e)})}acceptSettings(n){this.settings.set(n),this.configEnabled=n.enabled,this.configConvention=n.weightConvention,this.configIncrement=n.incrementKg,this.configEquipment=n.equipment}fail(n){this.loading.set(!1),this.busy.set(!1),this.error.set(n.error?.message||"No se pudo completar la operaci\xF3n. Tus datos ingresados se conservan; volv\xE9 a intentar.")}chooseSource(n){this.sourceId=Number(n),this.requestId=crypto.randomUUID(),this.measured.set(!1);let e=this.sources().find(o=>o.id===this.sourceId);e&&(this.weight.set(e.weightKg),this.reps.set(e.reps),this.performedAt=e.trainingDate.slice(0,10)),this.nearMax=!1,this.warmup=!1}loadAt(n){return je((this.estimate()??0)*n/100,this.settings()?.incrementKg??2.5)}save(){if(this.busy()||!this.estimate()||!this.selected()||!this.settings()?.enabled||this.previewOnly||!this.nearMax||this.warmup||!this.performedAt||this.admin&&!this.clientId)return;if(this.measured()&&this.reps()!==1){this.error.set("Un test de 1RM medido requiere una repetici\xF3n.");return}let n=JSON.stringify([this.selected(),this.clientId,this.performedAt,this.weight(),this.reps(),this.nearMax,this.warmup,this.measured(),this.sourceId,this.notes]);n!==this.lastPayloadKey&&(this.requestId=crypto.randomUUID(),this.lastPayloadKey=n),this.run(this.http.post(`${this.url}/${this.selected()}/evaluations`,{requestId:this.requestId,performedAt:this.performedAt,weightKg:this.weight(),reps:this.reps(),nearMaxEffort:this.nearMax,isWarmup:this.warmup,isMeasured:this.measured(),sourceSetId:this.sourceId||null,notes:this.notes||null},this.params()),"Evaluaci\xF3n guardada. La referencia del profesor no se modific\xF3.",()=>{this.requestId=crypto.randomUUID(),this.nearMax=!1})}saveSettings(){!this.canConfigure||!this.selected()||this.busy()||!this.settings()||this.run(this.http.put(`${this.url}/settings/${this.selected()}`,{exerciseId:this.selected(),enabled:this.configEnabled,weightConvention:this.configConvention,incrementKg:this.configIncrement,equipment:this.configEquipment}),"Configuraci\xF3n guardada.")}setReference(n){!this.admin||!this.clientId||this.busy()||this.run(this.http.post(`${this.url}/${this.selected()}/reference`,{evaluationId:n,notes:this.decisionNote||null},this.params()),n?"RM de referencia actualizado.":"Referencia retirada. El historial se conserva.")}invalidate(n){!this.admin||!this.invalidationReason.trim()||this.busy()||this.run(this.http.post(`${this.url}/${this.selected()}/evaluations/${n}/invalidate`,{reason:this.invalidationReason},this.params()),"Evaluaci\xF3n invalidada. El historial se conserva.",()=>{this.invalidating=0,this.invalidationReason=""})}run(n,e,o){this.busy.set(!0),this.error.set(""),this.message.set("");let i=this.version;this.mutation=n.subscribe({next:()=>{this.busy.set(!1),i===this.version&&(o?.(),this.load(),this.message.set(e))},error:c=>{this.busy.set(!1),i===this.version&&this.fail(c)}})}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=k({type:t,selectors:[["app-strength-panel"]],inputs:{clientId:"clientId",admin:"admin",canConfigure:"canConfigure",exerciseId:"exerciseId",seedWeight:"seedWeight",seedReps:"seedReps",previewOnly:"previewOnly",settingsOnly:"settingsOnly"},features:[re],decls:17,vars:9,consts:[["aria-label","Fuerza y RM",1,"strength-panel"],[1,"strength-heading"],["mat-button","","type","button","aria-label","Actualizar datos de fuerza",3,"click","disabled"],[1,"field"],["mode","indeterminate","aria-label","Cargando fuerza"],["role","alert",1,"strength-error"],["role","status",1,"strength-message"],[1,"strength-config",3,"open"],[3,"ngModelChange","ngModel","disabled"],[3,"ngValue"],["mat-button","","type","button",3,"click","disabled"],[1,"fields"],[1,"check"],["type","checkbox",3,"ngModelChange","ngModel","disabled"],["value","Total"],["value","PerDumbbell"],["value","Machine"],["type","number","min","0.001","max","100","step","0.001",3,"ngModelChange","ngModel","disabled"],["maxlength","150","placeholder","Ej.: barra libre de 20 kg",3,"ngModelChange","ngModel","disabled"],["mat-stroked-button","","type","button",3,"click","disabled"],[1,"calculator-layout"],[1,"calculator",3,"ngSubmit"],["type","number","inputmode","decimal","min","0.001","max","10000","step","any","name","weight","required","",3,"ngModelChange","ngModel","readOnly","disabled"],["type","number","inputmode","numeric","min","1","max","10","step","1","name","reps","required","",3,"ngModelChange","ngModel","readOnly","disabled"],[1,"help"],["aria-live","polite",1,"rm-result"],[1,"notice"],["aria-label","Porcentajes del RM estimado",1,"load-table"],["scope","col"],[1,"strength-history"],[1,"convention"],["name","source",3,"ngModelChange","ngModel","disabled"],["type","date","name","date","required","",3,"ngModelChange","ngModel","max","readOnly","disabled"],["type","checkbox","name","nearMax",3,"ngModelChange","ngModel","disabled"],["type","checkbox","name","warmup",3,"ngModelChange","ngModel","disabled"],["rows","2","name","notes","maxlength","1000",3,"ngModelChange","ngModel","disabled"],["mat-flat-button","","type","submit",3,"disabled"],["type","checkbox","name","measured",3,"ngModelChange","ngModel","disabled"],["scope","row"],[1,"strength-summary"],["role","status",1,"notice"],[1,"empty"],[1,"evaluation-list"],[1,"reference-history"],["viewBox","0 0 600 130","role","img","aria-label","Evoluci\xF3n cronol\xF3gica de las evaluaciones vigentes, de la m\xE1s antigua a la m\xE1s reciente"],["fill","none","stroke","currentColor","stroke-width","3"],["maxlength","1000",3,"ngModelChange","ngModel","disabled"],["mat-stroked-button","","type","button",3,"disabled"],[1,"evaluation-heading"],[1,"actions"],[1,"invalidation"],["mat-button","","type","button",3,"disabled"]],template:function(e,o){e&1&&(r(0,"section",0)(1,"header",1)(2,"div")(3,"h2"),s(4),a(),r(5,"p"),s(6),a()(),r(7,"button",2),f("click",function(){return o.load()}),r(8,"mat-icon"),s(9,"refresh"),a(),s(10,"Actualizar "),a()(),m(11,tt,8,4,"label",3),m(12,nt,1,0,"mat-progress-bar",4),m(13,it,4,2,"p",5),m(14,at,2,1,"p",6),m(15,rt,31,10,"details",7),m(16,Vt,42,16),a()),e&2&&(l(4),w(o.settingsOnly?"Configuraci\xF3n de RM":"Fuerza y RM"),l(2),S(" ",o.settingsOnly?"Defin\xED c\xF3mo se interpreta la carga de esta variante.":"Estim\xE1 tu fuerza y consult\xE1 las evaluaciones por ejercicio."," "),l(),p("disabled",o.loading()||o.busy()),l(4),u(o.exerciseId?-1:11),l(),u(o.loading()?12:-1),l(),u(o.error()?13:-1),l(),u(o.message()?14:-1),l(),u(o.canConfigure&&o.selected()?15:-1),l(),u(o.settingsOnly?-1:16))},dependencies:[fe,Fe,Pe,Ie,ke,ve,Ee,ye,Oe,Ce,Me,Re,De,Te,Ve,we,Se,Ae,Be,W,q,Ue,We,he,_e],styles:["[_nghost-%COMP%]{display:block;min-width:0;color:var(--app-text, var(--student-text, #17252a));font:inherit}.strength-panel[_ngcontent-%COMP%]{background:var(--app-surface, var(--student-surface, #fff));border:1px solid var(--app-border, var(--student-border, #d9e0e4));border-radius:14px;padding:clamp(14px,3vw,28px);min-width:0}h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{margin:0}h2[_ngcontent-%COMP%]{font-size:1.35rem}h3[_ngcontent-%COMP%]{font-size:1.05rem;margin-bottom:12px}p[_ngcontent-%COMP%]{line-height:1.55;overflow-wrap:anywhere}.strength-heading[_ngcontent-%COMP%]{display:flex;align-items:start;justify-content:space-between;gap:12px;margin-bottom:22px}.strength-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .help[_ngcontent-%COMP%], .load-table[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], figcaption[_ngcontent-%COMP%]{font-size:.875rem;color:var(--app-text-muted, var(--student-muted, #4c606b));max-width:70ch}.strength-heading[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{flex-shrink:0}.field[_ngcontent-%COMP%]{display:grid;gap:7px;font-size:.875rem;font-weight:600;min-width:0}.field[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{line-height:1.4}input[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]{box-sizing:border-box;width:100%;min-width:0;max-width:100%;padding:11px 12px;border:1px solid var(--app-border, var(--student-border, #c9d4da));border-radius:7px;font:inherit;color:inherit;background:var(--app-surface, var(--student-surface, #fff));min-height:44px}textarea[_ngcontent-%COMP%]{resize:vertical}input[_ngcontent-%COMP%]:focus-visible, select[_ngcontent-%COMP%]:focus-visible, textarea[_ngcontent-%COMP%]:focus-visible, summary[_ngcontent-%COMP%]:focus-visible{outline:2px solid var(--app-accent, var(--student-accent, #156843));outline-offset:3px}input[_ngcontent-%COMP%]:disabled, select[_ngcontent-%COMP%]:disabled, textarea[_ngcontent-%COMP%]:disabled{opacity:.65}input[readonly][_ngcontent-%COMP%]{background:var(--app-surface-muted, var(--student-surface-muted, #f3f5f6))}.check[_ngcontent-%COMP%]{display:flex;gap:10px;align-items:start;line-height:1.5;font-size:.875rem}.check[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:20px;height:20px;min-height:20px;flex-shrink:0;margin-top:2px;accent-color:var(--app-accent, var(--student-accent, #156843))}.calculator-layout[_ngcontent-%COMP%]{display:grid;grid-template-columns:minmax(0,1.4fr) minmax(0,1fr);gap:28px;margin-top:24px}.calculator[_ngcontent-%COMP%]{display:grid;align-content:start;gap:16px;min-width:0}.fields[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px}.rm-result[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;gap:16px;padding:18px 0;border-block:1px solid var(--app-border, var(--student-border, #d9e0e4));font-size:.95rem}.rm-result[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:2rem;font-variant-numeric:tabular-nums}.rm-result[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{font-size:1rem}.load-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse;font-variant-numeric:tabular-nums;margin-top:14px}th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{text-align:left;padding:10px 8px;border-bottom:1px solid var(--app-border, var(--student-border, #d9e0e4))}td[_ngcontent-%COMP%]{text-align:right}thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child{text-align:right}.strength-config[_ngcontent-%COMP%], .reference-history[_ngcontent-%COMP%]{margin-block:16px;padding-block:14px;border-block:1px solid var(--app-border, var(--student-border, #d9e0e4))}summary[_ngcontent-%COMP%]{cursor:pointer;font-weight:650;min-height:32px}.strength-config[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:12px 0;font-size:.875rem}.strength-error[_ngcontent-%COMP%], .strength-message[_ngcontent-%COMP%], .notice[_ngcontent-%COMP%]{margin-block:12px;padding:12px;border-radius:7px;background:var(--app-surface-muted, var(--student-surface-muted, #f0f4f3));font-size:.875rem}.strength-error[_ngcontent-%COMP%]{color:var(--app-danger, #a32929)}.strength-message[_ngcontent-%COMP%]{font-weight:600}.convention[_ngcontent-%COMP%]{margin-top:16px;font-size:.875rem}.strength-history[_ngcontent-%COMP%]{margin-top:30px;border-top:1px solid var(--app-border, var(--student-border, #d9e0e4));padding-top:24px}.strength-summary[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:20px;margin:18px 0 24px}.strength-summary[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%]{font-size:.8rem;line-height:1.5}.strength-summary[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%]{margin:6px 0;font-weight:700;font-size:1.25rem;font-variant-numeric:tabular-nums}.strength-summary[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{font-size:.8rem}.strength-history[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]{margin:16px 0}.strength-history[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:100%;max-height:160px;color:var(--app-accent, var(--student-accent, #156843))}figcaption[_ngcontent-%COMP%]{font-size:.8rem}.evaluation-list[_ngcontent-%COMP%]{list-style:none;margin:20px 0;padding:0}.evaluation-list[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]{padding:18px 0;border-top:1px solid var(--app-border, var(--student-border, #d9e0e4))}.evaluation-heading[_ngcontent-%COMP%]{display:flex;justify-content:space-between;gap:12px;flex-wrap:wrap}.evaluation-heading[_ngcontent-%COMP%]   time[_ngcontent-%COMP%]{font-size:.85rem}.evaluation-list[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-top:7px;font-size:.85rem}.actions[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:8px;margin-top:12px}.invalidation[_ngcontent-%COMP%]{margin-top:12px}.reference-history[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding-block:8px;font-size:.85rem;overflow-wrap:anywhere}.empty[_ngcontent-%COMP%]{padding-block:18px}.strength-history[_ngcontent-%COMP%] > .field[_ngcontent-%COMP%]{margin-bottom:12px}@media(max-width:650px){.calculator-layout[_ngcontent-%COMP%]{grid-template-columns:1fr;gap:24px}.strength-summary[_ngcontent-%COMP%]{grid-template-columns:1fr;gap:14px}.strength-summary[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:grid;grid-template-columns:minmax(0,1fr) auto;column-gap:10px}.strength-summary[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{grid-column:1/-1}.strength-summary[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%]{margin:0}.strength-heading[_ngcontent-%COMP%]{flex-wrap:wrap}.fields[_ngcontent-%COMP%]{gap:12px}.rm-result[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:1.75rem}.strength-panel[_ngcontent-%COMP%]{border-radius:10px}.strength-config[_ngcontent-%COMP%]   .fields[_ngcontent-%COMP%]{grid-template-columns:1fr}}@media(prefers-reduced-motion:reduce){[_nghost-%COMP%]   *[_ngcontent-%COMP%]{scroll-behavior:auto;transition:none}}.load-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{position:static}"],changeDetection:0})};function $e(t){try{let n=new URL(t||"");if(!["https:","http:"].includes(n.protocol))return null;let e=n.pathname.split("/").filter(Boolean),o=["youtu.be","www.youtu.be"].includes(n.hostname)?e[0]:["youtube.com","www.youtube.com","m.youtube.com","youtube-nocookie.com","www.youtube-nocookie.com"].includes(n.hostname)?n.pathname==="/watch"?n.searchParams.get("v"):["shorts","embed","live"].includes(e[0])?e[1]:null:null;return o&&/^[A-Za-z0-9_-]{11}$/.test(o)?o:null}catch{return null}}function Tt(t,n){if(t&1){let e=b();D(0,"iframe",5),r(1,"button",6),f("click",function(){g(e);let i=d();return _(i.stop())}),s(2,"Cerrar video"),a()}if(t&2){let e,o=d();p("src",n,le)("title","Video de "+((e=o.exercise())==null?null:e.name))}}function Rt(t,n){if(t&1){let e=b();r(0,"video",7),f("error",function(){g(e);let i=d();return _(i.playbackFailed.set(!0))}),a(),r(1,"button",6),f("click",function(){g(e);let i=d();return _(i.stop())}),s(2,"Cerrar video"),a()}if(t&2){let e=d();p("src",e.video(),z)}}function Dt(t,n){if(t&1){let e=b();r(0,"img",10),f("error",function(){let i=g(e),c=d(2);return _(c.onImageError(i))}),a()}if(t&2){let e,o=d(2);p("src",n,z)("alt",((e=o.exercise())==null?null:e.name)||"")}}function Ft(t,n){if(t&1){let e=b();r(0,"button",8),f("click",function(){g(e);let i=d();return _(i.play())}),m(1,Dt,1,2,"img",1),r(2,"span",9)(3,"mat-icon"),s(4,"play_circle"),a(),r(5,"span"),s(6,"Ver video"),a()()()}if(t&2){let e,o,i=d();V("aria-label","Reproducir video de "+((e=i.exercise())==null?null:e.name)),l(),u((o=i.image())?1:-1,o)}}function Nt(t,n){if(t&1){let e=b();r(0,"img",10),f("error",function(){let i=g(e),c=d();return _(c.onImageError(i))}),a()}if(t&2){let e,o=d();p("src",n,z)("alt",((e=o.exercise())==null?null:e.name)||"")}}function zt(t,n){if(t&1&&(r(0,"div",2)(1,"mat-icon"),s(2,"fitness_center"),a(),r(3,"span"),s(4),a()()),t&2){let e=d();l(4),w(e.video()?"Video sin vista previa disponible":"Sin imagen o video disponible")}}function Bt(t,n){t&1&&(r(0,"p",3),s(1,"Este ejercicio tiene un video cargado, pero su enlace no admite reproducci\xF3n dentro de la plataforma. Pedile a tu profesor un enlace de YouTube o un archivo MP4, WebM u OGG."),a())}function At(t,n){t&1&&(r(0,"p",4),s(1,"No se pudo reproducir este archivo de video. Pedile a tu profesor que revise el enlace."),a())}var He=class t{exercise=pe(null);sanitizer=I(xe);video=x(()=>this.exercise()?.videoUrl||this.exercise()?.media?.find(n=>n.mediaType==="Video")?.url||"");videoId=x(()=>$e(this.video()));directVideo=x(()=>/^https?:\/\/[^\s]+\.(mp4|webm|ogg)([?#].*)?$/i.test(this.video()));playable=x(()=>!!this.videoId()||this.directVideo());failedImages=v([]);onImageError(n){this.failedImages.update(e=>[...e,n])}image=x(()=>{let n=this.exercise()?.photoUrl||this.exercise()?.media?.find(o=>o.mediaType==="Image")?.url;if(n&&!this.failedImages().includes(n))return n;let e=this.videoId()?`https://i.ytimg.com/vi/${this.videoId()}/hqdefault.jpg`:null;return e&&!this.failedImages().includes(e)?e:null});key=x(()=>JSON.stringify([this.exercise()?.id,this.video()]));activeKey=$({source:this.key,computation:()=>""});playbackFailed=$({source:this.key,computation:()=>!1});playing=x(()=>this.activeKey()===this.key());embed=x(()=>this.videoId()?this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube-nocookie.com/embed/${this.videoId()}?autoplay=1&playsinline=1&rel=0`):null);play(){this.playbackFailed.set(!1),this.activeKey.set(this.key())}stop(){this.activeKey.set("")}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=k({type:t,selectors:[["app-exercise-media"]],inputs:{exercise:[1,"exercise"]},decls:7,vars:3,consts:[["type","button",1,"preview"],["loading","lazy",3,"src","alt"],[1,"placeholder"],["role","status",1,"media-notice"],["role","alert",1,"media-notice"],["allow","autoplay; encrypted-media; picture-in-picture; fullscreen","referrerpolicy","strict-origin-when-cross-origin","allowfullscreen","",3,"src","title"],["type","button",1,"stop",3,"click"],["controls","","autoplay","","playsinline","","preload","metadata",3,"error","src"],["type","button",1,"preview",3,"click"],[1,"play"],["loading","lazy",3,"error","src","alt"]],template:function(e,o){if(e&1&&(m(0,Tt,3,2)(1,Rt,3,1)(2,Ft,7,2,"button",0)(3,Nt,1,2,"img",1)(4,zt,5,1,"div",2),m(5,Bt,2,0,"p",3),m(6,At,2,0,"p",4)),e&2){let i;u((i=o.playing()&&o.embed())?0:o.playing()&&o.directVideo()?1:o.playable()?2:(i=o.image())?3:4,i),l(5),u(o.video()&&!o.playable()?5:-1),l(),u(o.playbackFailed()?6:-1)}},dependencies:[W,q],styles:["[_nghost-%COMP%]{display:block;min-width:0;position:relative;background:#171719;color:#fff}iframe[_ngcontent-%COMP%], video[_ngcontent-%COMP%], img[_ngcontent-%COMP%], .preview[_ngcontent-%COMP%], .placeholder[_ngcontent-%COMP%]{display:block;width:100%;aspect-ratio:16/9;border:0;box-sizing:border-box}img[_ngcontent-%COMP%]{object-fit:cover}iframe[_ngcontent-%COMP%], video[_ngcontent-%COMP%]{background:#000}.preview[_ngcontent-%COMP%]{position:relative;padding:0;background:#252528;color:#fff;cursor:pointer;font:inherit;overflow:hidden}.preview[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{position:absolute;inset:0;height:100%}.play[_ngcontent-%COMP%]{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:.25rem;background:linear-gradient(transparent,#0008);text-shadow:0 1px 4px #000}.play[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{width:52px;height:52px;font-size:52px}.placeholder[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;flex-direction:column;gap:.5rem;color:#ccc;font-size:.8rem}.stop[_ngcontent-%COMP%]{display:block;border:0;padding:.65rem 1rem;background:#252528;color:#fff;cursor:pointer;width:100%;font:inherit}.media-notice[_ngcontent-%COMP%]{margin:0;padding:.8rem;font-size:.85rem;line-height:1.5;color:#fff;background:#252528}button[_ngcontent-%COMP%]:focus-visible{outline:3px solid #ef4d57;outline-offset:-3px}"],changeDetection:0})};export{We as a,Ue as b,Le as c,He as d};
