import{B as q}from"./chunk-BKB3HW5H.js";import{e as $,f as G,g as K}from"./chunk-VMQQ5IK4.js";import{Da as x,Ea as B,Fb as c,Gb as P,Ib as j,Lb as L,Nb as T,Oa as C,Pa as g,Qa as f,T as V,U as I,Ua as y,Va as a,W as d,Wa as s,Xa as R,Ya as M,Z as p,Za as E,_ as u,_a as h,ab as b,ac as Z,cb as _,ea as O,eb as o,fa as z,ia as D,ma as S,pb as w,qb as A,rb as F,sb as m,ta as v,tb as U,ua as X,va as l,za as N}from"./chunk-PETCNAVX.js";function H(r){try{let i=new URL(r||"");if(!["https:","http:"].includes(i.protocol))return null;let e=i.pathname.split("/").filter(Boolean),n=["youtu.be","www.youtu.be"].includes(i.hostname)?e[0]:["youtube.com","www.youtube.com","m.youtube.com","youtube-nocookie.com","www.youtube-nocookie.com"].includes(i.hostname)?i.pathname==="/watch"?i.searchParams.get("v"):["shorts","embed","live"].includes(e[0])?e[1]:null:null;return n&&/^[A-Za-z0-9_-]{11}$/.test(n)?n:null}catch{return null}}function Q(r,i){if(r&1){let e=b();R(0,"iframe",5),a(1,"button",6),_("click",function(){p(e);let t=o();return u(t.stop())}),m(2,"Cerrar video"),s()}if(r&2){let e,n=o();y("src",i,X)("title","Video de "+((e=n.exercise())==null?null:e.name))}}function ee(r,i){if(r&1){let e=b();a(0,"video",7),_("error",function(){p(e);let t=o();return u(t.playbackFailed.set(!0))}),s(),a(1,"button",6),_("click",function(){p(e);let t=o();return u(t.stop())}),m(2,"Cerrar video"),s()}if(r&2){let e=o();y("src",e.video(),v)}}function ne(r,i){if(r&1){let e=b();a(0,"img",10),_("error",function(){let t=p(e),k=o(2);return u(k.onImageError(t))}),s()}if(r&2){let e,n=o(2);y("src",i,v)("alt",((e=n.exercise())==null?null:e.name)||"")}}function re(r,i){if(r&1){let e=b();a(0,"button",8),_("click",function(){p(e);let t=o();return u(t.play())}),g(1,ne,1,2,"img",1),a(2,"span",9)(3,"mat-icon"),m(4,"play_circle"),s(),a(5,"span"),m(6,"Ver video"),s()()()}if(r&2){let e,n,t=o();C("aria-label","Reproducir video de "+((e=t.exercise())==null?null:e.name)),l(),f((n=t.image())?1:-1,n)}}function ie(r,i){if(r&1){let e=b();a(0,"img",10),_("error",function(){let t=p(e),k=o();return u(k.onImageError(t))}),s()}if(r&2){let e,n=o();y("src",i,v)("alt",((e=n.exercise())==null?null:e.name)||"")}}function te(r,i){if(r&1&&(a(0,"div",2)(1,"mat-icon"),m(2,"fitness_center"),s(),a(3,"span"),m(4),s()()),r&2){let e=o();l(4),U(e.video()?"Video sin vista previa disponible":"Sin imagen o video disponible")}}function ae(r,i){r&1&&(a(0,"p",3),m(1,"Este ejercicio tiene un video cargado, pero su enlace no admite reproducci\xF3n dentro de la plataforma. Pedile a tu profesor un enlace de YouTube o un archivo MP4, WebM u OGG."),s())}function oe(r,i){r&1&&(a(0,"p",4),m(1,"No se pudo reproducir este archivo de video. Pedile a tu profesor que revise el enlace."),s())}var J=class r{exercise=j(null);sanitizer=d(Z);video=c(()=>this.exercise()?.videoUrl||this.exercise()?.media?.find(i=>i.mediaType==="Video")?.url||"");videoId=c(()=>H(this.video()));directVideo=c(()=>/^https?:\/\/[^\s]+\.(mp4|webm|ogg)([?#].*)?$/i.test(this.video()));playable=c(()=>!!this.videoId()||this.directVideo());failedImages=D([]);onImageError(i){this.failedImages.update(e=>[...e,i])}image=c(()=>{let i=this.exercise()?.photoUrl||this.exercise()?.media?.find(n=>n.mediaType==="Image")?.url;if(i&&!this.failedImages().includes(i))return i;let e=this.videoId()?`https://i.ytimg.com/vi/${this.videoId()}/hqdefault.jpg`:null;return e&&!this.failedImages().includes(e)?e:null});key=c(()=>JSON.stringify([this.exercise()?.id,this.video()]));activeKey=P({source:this.key,computation:()=>""});playbackFailed=P({source:this.key,computation:()=>!1});playing=c(()=>this.activeKey()===this.key());embed=c(()=>this.videoId()?this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube-nocookie.com/embed/${this.videoId()}?autoplay=1&playsinline=1&rel=0`):null);play(){this.playbackFailed.set(!1),this.activeKey.set(this.key())}stop(){this.activeKey.set("")}static \u0275fac=function(e){return new(e||r)};static \u0275cmp=x({type:r,selectors:[["app-exercise-media"]],inputs:{exercise:[1,"exercise"]},decls:7,vars:3,consts:[["type","button",1,"preview"],["loading","lazy",3,"src","alt"],[1,"placeholder"],["role","status",1,"media-notice"],["role","alert",1,"media-notice"],["allow","autoplay; encrypted-media; picture-in-picture; fullscreen","referrerpolicy","strict-origin-when-cross-origin","allowfullscreen","",3,"src","title"],["type","button",1,"stop",3,"click"],["controls","","autoplay","","playsinline","","preload","metadata",3,"error","src"],["type","button",1,"preview",3,"click"],[1,"play"],["loading","lazy",3,"error","src","alt"]],template:function(e,n){if(e&1&&(g(0,Q,3,2)(1,ee,3,1)(2,re,7,2,"button",0)(3,ie,1,2,"img",1)(4,te,5,1,"div",2),g(5,ae,2,0,"p",3),g(6,oe,2,0,"p",4)),e&2){let t;f((t=n.playing()&&n.embed())?0:n.playing()&&n.directVideo()?1:n.playable()?2:(t=n.image())?3:4,t),l(5),f(n.video()&&!n.playable()?5:-1),l(),f(n.playbackFailed()?6:-1)}},dependencies:[K,G],styles:["[_nghost-%COMP%]{display:block;min-width:0;position:relative;background:#171719;color:#fff}iframe[_ngcontent-%COMP%], video[_ngcontent-%COMP%], img[_ngcontent-%COMP%], .preview[_ngcontent-%COMP%], .placeholder[_ngcontent-%COMP%]{display:block;width:100%;aspect-ratio:16/9;border:0;box-sizing:border-box}img[_ngcontent-%COMP%]{object-fit:cover}iframe[_ngcontent-%COMP%], video[_ngcontent-%COMP%]{background:#000}.preview[_ngcontent-%COMP%]{position:relative;padding:0;background:#252528;color:#fff;cursor:pointer;font:inherit;overflow:hidden}.preview[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{position:absolute;inset:0;height:100%}.play[_ngcontent-%COMP%]{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:.25rem;background:linear-gradient(transparent,#0008);text-shadow:0 1px 4px #000}.play[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{width:52px;height:52px;font-size:52px}.placeholder[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;flex-direction:column;gap:.5rem;color:#ccc;font-size:.8rem}.stop[_ngcontent-%COMP%]{display:block;border:0;padding:.65rem 1rem;background:#252528;color:#fff;cursor:pointer;width:100%;font:inherit}.media-notice[_ngcontent-%COMP%]{margin:0;padding:.8rem;font-size:.85rem;line-height:1.5;color:#fff;background:#252528}button[_ngcontent-%COMP%]:focus-visible{outline:3px solid #ef4d57;outline-offset:-3px}"],changeDetection:0})};function se(r,i){r&1&&h(0,"div",2)}var le=new I("MAT_PROGRESS_BAR_DEFAULT_OPTIONS");var Ve=(()=>{class r{_elementRef=d(S);_ngZone=d(z);_changeDetectorRef=d(L);_renderer=d(N);_cleanupTransitionEnd;constructor(){let e=q(),n=d(le,{optional:!0});this._isNoopAnimation=e==="di-disabled",e==="reduced-motion"&&this._elementRef.nativeElement.classList.add("mat-progress-bar-reduced-motion"),n&&(n.color&&(this.color=this._defaultColor=n.color),this.mode=n.mode||this.mode)}_isNoopAnimation;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;_defaultColor="primary";get value(){return this._value}set value(e){this._value=W(e||0),this._changeDetectorRef.markForCheck()}_value=0;get bufferValue(){return this._bufferValue||0}set bufferValue(e){this._bufferValue=W(e||0),this._changeDetectorRef.markForCheck()}_bufferValue=0;animationEnd=new O;get mode(){return this._mode}set mode(e){this._mode=e,this._changeDetectorRef.markForCheck()}_mode="determinate";ngAfterViewInit(){this._ngZone.runOutsideAngular(()=>{this._cleanupTransitionEnd=this._renderer.listen(this._elementRef.nativeElement,"transitionend",this._transitionendHandler)})}ngOnDestroy(){this._cleanupTransitionEnd?.()}_getPrimaryBarTransform(){return`scaleX(${this._isIndeterminate()?1:this.value/100})`}_getBufferBarFlexBasis(){return`${this.mode==="buffer"?this.bufferValue:100}%`}_isIndeterminate(){return this.mode==="indeterminate"||this.mode==="query"}_transitionendHandler=e=>{this.animationEnd.observers.length===0||!e.target||!e.target.classList.contains("mdc-linear-progress__primary-bar")||(this.mode==="determinate"||this.mode==="buffer")&&this._ngZone.run(()=>this.animationEnd.next({value:this.value}))};static \u0275fac=function(n){return new(n||r)};static \u0275cmp=x({type:r,selectors:[["mat-progress-bar"]],hostAttrs:["role","progressbar","aria-valuemin","0","aria-valuemax","100","tabindex","-1",1,"mat-mdc-progress-bar","mdc-linear-progress"],hostVars:10,hostBindings:function(n,t){n&2&&(C("aria-valuenow",t._isIndeterminate()?null:t.value)("mode",t.mode),F("mat-"+t.color),A("_mat-animation-noopable",t._isNoopAnimation)("mdc-linear-progress--animation-ready",!t._isNoopAnimation)("mdc-linear-progress--indeterminate",t._isIndeterminate()))},inputs:{color:"color",value:[2,"value","value",T],bufferValue:[2,"bufferValue","bufferValue",T],mode:"mode"},outputs:{animationEnd:"animationEnd"},exportAs:["matProgressBar"],decls:7,vars:5,consts:[["aria-hidden","true",1,"mdc-linear-progress__buffer"],[1,"mdc-linear-progress__buffer-bar"],[1,"mdc-linear-progress__buffer-dots"],["aria-hidden","true",1,"mdc-linear-progress__bar","mdc-linear-progress__primary-bar"],[1,"mdc-linear-progress__bar-inner"],["aria-hidden","true",1,"mdc-linear-progress__bar","mdc-linear-progress__secondary-bar"]],template:function(n,t){n&1&&(M(0,"div",0),h(1,"div",1),g(2,se,1,0,"div",2),E(),M(3,"div",3),h(4,"span",4),E(),M(5,"div",5),h(6,"span",4),E()),n&2&&(l(),w("flex-basis",t._getBufferBarFlexBasis()),l(),f(t.mode==="buffer"?2:-1),l(),w("transform",t._getPrimaryBarTransform()))},styles:[`.mat-mdc-progress-bar {
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
`],encapsulation:2,changeDetection:0})}return r})();function W(r,i=0,e=100){return Math.max(i,Math.min(e,r))}var Ie=(()=>{class r{static \u0275fac=function(n){return new(n||r)};static \u0275mod=B({type:r});static \u0275inj=V({imports:[$]})}return r})();export{J as a,Ve as b,Ie as c};
