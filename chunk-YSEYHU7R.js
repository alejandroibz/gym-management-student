import{a as te}from"./chunk-3CFL6OBC.js";import{D as U,L as Z,N as J,O as X,P as Y,Q as ee}from"./chunk-MEOXYPVS.js";import{$ as h,Ab as L,Bb as F,Cb as Q,Ea as b,Fa as D,Ja as R,Kb as P,Pa as p,Pb as H,Qa as u,Ra as g,Rb as q,Sb as G,V as A,Va as k,W as E,Wa as i,Xa as a,Y as l,Ya as _,_b as $,aa as f,ab as C,ba as S,bb as O,bc as K,ca as T,db as y,eb as m,ib as N,ja as v,jb as V,kb as W,na as I,ob as z,pb as x,qb as M,rb as B,sb as s,tb as w,ub as j,wa as o}from"./chunk-T4KTBUTU.js";var ce=["determinateSpinner"];function se(n,c){if(n&1&&(S(),i(0,"svg",11),_(1,"circle",12),a()),n&2){let e=m();p("viewBox",e._viewBox()),o(),x("stroke-dasharray",e._strokeCircumference(),"px")("stroke-dashoffset",e._strokeCircumference()/2,"px")("stroke-width",e._circleStrokeWidth(),"%"),p("r",e._circleRadius())}}var me=new E("mat-progress-spinner-default-options",{providedIn:"root",factory:()=>({diameter:ne})}),ne=100,de=10,re=(()=>{class n{_elementRef=l(I);_noopAnimations;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;_defaultColor="primary";_determinateCircle;constructor(){let e=l(me),r=U(),t=this._elementRef.nativeElement;this._noopAnimations=r==="di-disabled"&&!!e&&!e._forceAnimations,this.mode=t.nodeName.toLowerCase()==="mat-spinner"?"indeterminate":"determinate",!this._noopAnimations&&r==="reduced-motion"&&t.classList.add("mat-progress-spinner-reduced-motion"),e&&(e.color&&(this.color=this._defaultColor=e.color),e.diameter&&(this.diameter=e.diameter),e.strokeWidth&&(this.strokeWidth=e.strokeWidth))}mode;get value(){return this.mode==="determinate"?this._value:0}set value(e){this._value=Math.max(0,Math.min(100,e||0))}_value=0;get diameter(){return this._diameter}set diameter(e){this._diameter=e||0}_diameter=ne;get strokeWidth(){return this._strokeWidth??this.diameter/10}set strokeWidth(e){this._strokeWidth=e||0}_strokeWidth;_circleRadius(){return(this.diameter-de)/2}_viewBox(){let e=this._circleRadius()*2+this.strokeWidth;return`0 0 ${e} ${e}`}_strokeCircumference(){return 2*Math.PI*this._circleRadius()}_strokeDashOffset(){return this.mode==="determinate"?this._strokeCircumference()*(100-this._value)/100:null}_circleStrokeWidth(){return this.strokeWidth/this.diameter*100}static \u0275fac=function(r){return new(r||n)};static \u0275cmp=b({type:n,selectors:[["mat-progress-spinner"],["mat-spinner"]],viewQuery:function(r,t){if(r&1&&N(ce,5),r&2){let d;V(d=W())&&(t._determinateCircle=d.first)}},hostAttrs:["role","progressbar","tabindex","-1",1,"mat-mdc-progress-spinner","mdc-circular-progress"],hostVars:18,hostBindings:function(r,t){r&2&&(p("aria-valuemin",0)("aria-valuemax",100)("aria-valuenow",t.mode==="determinate"?t.value:null)("mode",t.mode),B("mat-"+t.color),x("width",t.diameter,"px")("height",t.diameter,"px")("--mat-progress-spinner-size",t.diameter+"px")("--mat-progress-spinner-active-indicator-width",t.diameter+"px"),M("_mat-animation-noopable",t._noopAnimations)("mdc-circular-progress--indeterminate",t.mode==="indeterminate"))},inputs:{color:"color",mode:"mode",value:[2,"value","value",P],diameter:[2,"diameter","diameter",P],strokeWidth:[2,"strokeWidth","strokeWidth",P]},exportAs:["matProgressSpinner"],decls:14,vars:11,consts:[["circle",""],["determinateSpinner",""],["aria-hidden","true",1,"mdc-circular-progress__determinate-container"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__determinate-circle-graphic"],["cx","50%","cy","50%",1,"mdc-circular-progress__determinate-circle"],["aria-hidden","true",1,"mdc-circular-progress__indeterminate-container"],[1,"mdc-circular-progress__spinner-layer"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-left"],[3,"ngTemplateOutlet"],[1,"mdc-circular-progress__gap-patch"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-right"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__indeterminate-circle-graphic"],["cx","50%","cy","50%"]],template:function(r,t){if(r&1&&(R(0,se,2,8,"ng-template",null,0,Q),i(2,"div",2,1),S(),i(4,"svg",3),_(5,"circle",4),a()(),T(),i(6,"div",5)(7,"div",6)(8,"div",7),C(9,8),a(),i(10,"div",9),C(11,8),a(),i(12,"div",10),C(13,8),a()()()),r&2){let d=z(1);o(4),p("viewBox",t._viewBox()),o(),x("stroke-dasharray",t._strokeCircumference(),"px")("stroke-dashoffset",t._strokeDashOffset(),"px")("stroke-width",t._circleStrokeWidth(),"%"),p("r",t._circleRadius()),o(4),k("ngTemplateOutlet",d),o(2),k("ngTemplateOutlet",d),o(2),k("ngTemplateOutlet",d)}},dependencies:[H],styles:[`.mat-mdc-progress-spinner {
  --mat-progress-spinner-animation-multiplier: 1;
  display: block;
  overflow: hidden;
  line-height: 0;
  position: relative;
  direction: ltr;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mat-mdc-progress-spinner circle {
  stroke-width: var(--mat-progress-spinner-active-indicator-width, 4px);
}
.mat-mdc-progress-spinner._mat-animation-noopable, .mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__determinate-circle {
  transition: none !important;
}
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-circle-graphic,
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__spinner-layer,
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container {
  animation: none !important;
}
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container circle {
  stroke-dasharray: 0 !important;
}
@media (forced-colors: active) {
  .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic,
  .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle {
    stroke: currentColor;
    stroke: CanvasText;
  }
}

.mat-progress-spinner-reduced-motion {
  --mat-progress-spinner-animation-multiplier: 1.25;
}

.mdc-circular-progress__determinate-container,
.mdc-circular-progress__indeterminate-circle-graphic,
.mdc-circular-progress__indeterminate-container,
.mdc-circular-progress__spinner-layer {
  position: absolute;
  width: 100%;
  height: 100%;
}

.mdc-circular-progress__determinate-container {
  transform: rotate(-90deg);
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__determinate-container {
  opacity: 0;
}

.mdc-circular-progress__indeterminate-container {
  font-size: 0;
  letter-spacing: 0;
  white-space: nowrap;
  opacity: 0;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container {
  opacity: 1;
  animation: mdc-circular-progress-container-rotate calc(1568.2352941176ms * var(--mat-progress-spinner-animation-multiplier)) linear infinite;
}

.mdc-circular-progress__determinate-circle-graphic,
.mdc-circular-progress__indeterminate-circle-graphic {
  fill: transparent;
}

.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,
.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic {
  stroke: var(--mat-progress-spinner-active-indicator-color, var(--mat-sys-primary));
}
@media (forced-colors: active) {
  .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,
  .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic {
    stroke: CanvasText;
  }
}

.mdc-circular-progress__determinate-circle {
  transition: stroke-dashoffset 500ms cubic-bezier(0, 0, 0.2, 1);
}

.mdc-circular-progress__gap-patch {
  position: absolute;
  top: 0;
  left: 47.5%;
  box-sizing: border-box;
  width: 5%;
  height: 100%;
  overflow: hidden;
}

.mdc-circular-progress__gap-patch .mdc-circular-progress__indeterminate-circle-graphic {
  left: -900%;
  width: 2000%;
  transform: rotate(180deg);
}
.mdc-circular-progress__circle-clipper .mdc-circular-progress__indeterminate-circle-graphic {
  width: 200%;
}
.mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic {
  left: -100%;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-left .mdc-circular-progress__indeterminate-circle-graphic {
  animation: mdc-circular-progress-left-spin calc(1333ms * var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic {
  animation: mdc-circular-progress-right-spin calc(1333ms * var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}

.mdc-circular-progress__circle-clipper {
  display: inline-flex;
  position: relative;
  width: 50%;
  height: 100%;
  overflow: hidden;
}

.mdc-circular-progress--indeterminate .mdc-circular-progress__spinner-layer {
  animation: mdc-circular-progress-spinner-layer-rotate calc(5332ms * var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}

@keyframes mdc-circular-progress-container-rotate {
  to {
    transform: rotate(360deg);
  }
}
@keyframes mdc-circular-progress-spinner-layer-rotate {
  12.5% {
    transform: rotate(135deg);
  }
  25% {
    transform: rotate(270deg);
  }
  37.5% {
    transform: rotate(405deg);
  }
  50% {
    transform: rotate(540deg);
  }
  62.5% {
    transform: rotate(675deg);
  }
  75% {
    transform: rotate(810deg);
  }
  87.5% {
    transform: rotate(945deg);
  }
  100% {
    transform: rotate(1080deg);
  }
}
@keyframes mdc-circular-progress-left-spin {
  from {
    transform: rotate(265deg);
  }
  50% {
    transform: rotate(130deg);
  }
  to {
    transform: rotate(265deg);
  }
}
@keyframes mdc-circular-progress-right-spin {
  from {
    transform: rotate(-265deg);
  }
  50% {
    transform: rotate(-130deg);
  }
  to {
    transform: rotate(-265deg);
  }
}
`],encapsulation:2,changeDetection:0})}return n})();var ie=(()=>{class n{static \u0275fac=function(r){return new(r||n)};static \u0275mod=D({type:n});static \u0275inj=A({imports:[Z]})}return n})();function pe(n,c){n&1&&_(0,"mat-spinner",3)}function ue(n,c){if(n&1&&(i(0,"div",8)(1,"mat-icon"),s(2),a()()),n&2){let e=m();M("success",e.state()==="success")("error",e.state()==="error"),o(2),w(e.state()==="success"?"verified":e.state()==="error"?"location_off":"location_on")}}function ge(n,c){if(n&1&&(i(0,"small"),s(1),L(2,"number"),a()),n&2){let e,r=m();o(),j("Validada a ",F(2,1,(e=r.attendance())==null?null:e.distanceMeters,"1.0-0")," metros de la sede.")}}function _e(n,c){if(n&1){let e=O();i(0,"button",9),y("click",function(){h(e);let t=m();return f(t.verify())}),i(1,"mat-icon"),s(2,"my_location"),a(),s(3,"Validar ubicaci\xF3n"),a()}}function he(n,c){if(n&1){let e=O();i(0,"button",9),y("click",function(){h(e);let t=m();return f(t.verify())}),s(1,"Intentar otra vez"),a(),i(2,"button",10),y("click",function(){h(e);let t=m();return f(t.manual())}),s(3,"Registrar manualmente"),a()}}function fe(n,c){n&1&&(i(0,"a",7),s(1,"Volver al inicio"),a())}var ae=class n{service=l(te);token=l($).snapshot.paramMap.get("token")??"";state=v("ready");message=v("Necesitamos tu ubicaci\xF3n para validar que est\xE1s en la sede.");attendance=v(null);verify(){if(!navigator.geolocation){this.fail("Este dispositivo no permite obtener ubicaci\xF3n.");return}this.state.set("locating"),this.message.set("Validando tu ubicaci\xF3n..."),navigator.geolocation.getCurrentPosition(c=>{this.service.checkIn({mode:"Qr",qrToken:this.token,latitude:c.coords.latitude,longitude:c.coords.longitude,accuracyMeters:c.coords.accuracy}).subscribe({next:e=>{this.attendance.set(e),this.state.set("success"),this.message.set("Asistencia verificada correctamente.")},error:e=>this.fail(e?.error?.errors?.[0]??"No pudimos validar tu ubicaci\xF3n.")})},()=>this.fail("No recibimos permiso de ubicaci\xF3n. Pod\xE9s registrarla manualmente."),{enableHighAccuracy:!0,timeout:15e3,maximumAge:0})}manual(){this.state.set("locating"),this.service.checkIn({mode:"Manual"}).subscribe({next:c=>{this.attendance.set(c),this.state.set("success"),this.message.set("Asistencia manual registrada sin puntos verificados.")},error:()=>this.fail("No pudimos registrar tu asistencia.")})}fail(c){this.state.set("error"),this.message.set(c)}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=b({type:n,selectors:[["app-attendance-checkin-page"]],decls:20,vars:7,consts:[[1,"checkin-page"],[1,"checkin-card"],[1,"brand-mark"],["diameter","64"],[1,"status-icon",3,"success","error"],[1,"eyebrow"],["mat-flat-button","","type","button"],["mat-flat-button","","routerLink","/inicio"],[1,"status-icon"],["mat-flat-button","","type","button",3,"click"],["mat-stroked-button","","type","button",3,"click"]],template:function(e,r){if(e&1&&(i(0,"main",0)(1,"section",1)(2,"span",2),s(3,"S"),a(),u(4,pe,1,0,"mat-spinner",3)(5,ue,3,5,"div",4),i(6,"span",5),s(7,"ASISTENCIA"),a(),i(8,"h1"),s(9),a(),i(10,"p"),s(11),a(),u(12,ge,3,4,"small"),u(13,_e,4,0,"button",6),u(14,he,4,0),u(15,fe,2,0,"a",7),i(16,"footer")(17,"mat-icon"),s(18,"lock"),a(),s(19,"Tu ubicaci\xF3n solo se usa en este momento."),a()()()),e&2){let t;o(4),g(r.state()==="locating"?4:5),o(5),w(r.state()==="success"?"\xA1Listo!":"Registr\xE1 tu visita"),o(2),w(r.message()),o(),g((t=r.attendance())!=null&&t.distanceMeters?12:-1),o(),g(r.state()==="ready"?13:-1),o(),g(r.state()==="error"?14:-1),o(),g(r.state()==="success"?15:-1)}},dependencies:[G,K,X,J,ee,Y,ie,re,q],styles:["[_nghost-%COMP%]{display:block;min-height:100dvh}.checkin-page[_ngcontent-%COMP%]{align-items:center;background:radial-gradient(circle at top,#3a0b11 0,#111113 48%);display:flex;justify-content:center;min-height:100dvh;padding:1rem}.checkin-card[_ngcontent-%COMP%]{align-items:center;background:var(--student-surface);border-radius:14px;box-shadow:0 24px 70px #00000052;display:flex;flex-direction:column;max-width:430px;padding:2rem;text-align:center;width:100%}.brand-mark[_ngcontent-%COMP%]{align-items:center;background:var(--student-accent);border-radius:8px;color:#fff;display:flex;font-size:1.2rem;font-weight:900;height:40px;justify-content:center;margin-bottom:1.7rem;width:40px}.status-icon[_ngcontent-%COMP%]{align-items:center;background:var(--student-accent-soft);border-radius:50%;color:var(--student-accent);display:flex;height:90px;justify-content:center;margin-bottom:1rem;width:90px}.status-icon.success[_ngcontent-%COMP%]{background:#e7f7ed;color:#17834d}.status-icon.error[_ngcontent-%COMP%]{background:#fff0f2;color:var(--student-accent)}.status-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:48px;height:48px;width:48px}.eyebrow[_ngcontent-%COMP%]{color:var(--student-accent);font-size:.7rem;font-weight:800;letter-spacing:.1em}.checkin-card[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:1.8rem;margin:.35rem 0}.checkin-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:var(--student-muted);line-height:1.5}.checkin-card[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{color:#17834d;margin-bottom:1rem}.checkin-card[_ngcontent-%COMP%] > a[_ngcontent-%COMP%], .checkin-card[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]{margin-top:.6rem;min-height:46px;width:100%}.checkin-card[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%]{align-items:center;color:var(--student-muted);display:flex;font-size:.72rem;gap:.3rem;margin-top:1.5rem}.checkin-card[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:15px;height:15px;width:15px}"],changeDetection:0})};export{ae as AttendanceCheckinPage};
