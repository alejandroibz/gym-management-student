import{a as j,b as me,c as le,e as rt}from"./chunk-EE3LTAL6.js";import{$a as ie,A as Gt,Aa as at,Ba as ne,D as Zt,Fa as T,Ga as M,Ha as A,Ja as ot,L as tt,M as $t,Ma as _t,Mb as D,Nb as se,O as et,Q as Yt,Qa as ae,V as d,W as w,Wb as ce,X as h,Z as r,_a as oe,a as l,ab as S,ac as de,d as zt,e as q,ea as L,f as p,fa as I,g as Kt,ga as nt,ha as m,hb as it,ib as P,k as Ht,ka as ht,la as Qt,m as O,n as Vt,oa as _,p as Wt,pa as vt,qa as Xt,ra as qt,sa as Jt,sb as B,ta as te,tb as re,v as J,ya as ee,z as F}from"./chunk-OV5KBAIY.js";function V(e){return e.buttons===0||e.detail===0}function W(e){let a=e.touches&&e.touches[0]||e.changedTouches&&e.changedTouches[0];return!!a&&a.identifier===-1&&(a.radiusX==null||a.radiusX===1)&&(a.radiusY==null||a.radiusY===1)}var gt;function ue(){if(gt==null){let e=typeof document<"u"?document.head:null;gt=!!(e&&(e.createShadowRoot||e.attachShadow))}return gt}function yt(e){if(ue()){let a=e.getRootNode?e.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&a instanceof ShadowRoot)return a}return null}function $e(){let e=typeof document<"u"&&document?document.activeElement:null;for(;e&&e.shadowRoot;){let a=e.shadowRoot.activeElement;if(a===e)break;e=a}return e}function g(e){return e.composedPath?e.composedPath()[0]:e.target}var xt;try{xt=typeof Intl<"u"&&Intl.v8BreakIterator}catch{xt=!1}var f=(()=>{class e{_platformId=r(qt);isBrowser=this._platformId?ce(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||xt)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;constructor(){}static \u0275fac=function(n){return new(n||e)};static \u0275prov=d({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var G;function be(){if(G==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>G=!0}))}finally{G=G||!1}return G}function U(e){return be()?e:!!e.capture}function Et(e,a=0){return pe(e)?Number(e):arguments.length===2?a:0}function pe(e){return!isNaN(parseFloat(e))&&!isNaN(Number(e))}function x(e){return e instanceof _?e.nativeElement:e}var fe=new h("cdk-input-modality-detector-options"),he={ignoreKeys:[18,17,224,91,16]},ve=650,It={passive:!0,capture:!0},_e=(()=>{class e{_platform=r(f);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new Kt(null);_options;_lastTouchMs=0;_onKeydown=t=>{this._options?.ignoreKeys?.some(n=>n===t.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=g(t))};_onMousedown=t=>{Date.now()-this._lastTouchMs<ve||(this._modality.next(V(t)?"keyboard":"mouse"),this._mostRecentTarget=g(t))};_onTouchstart=t=>{if(W(t)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=g(t)};constructor(){let t=r(m),n=r(I),o=r(fe,{optional:!0});if(this._options=l(l({},he),o),this.modalityDetected=this._modality.pipe(tt(1)),this.modalityChanged=this.modalityDetected.pipe(Zt()),this._platform.isBrowser){let i=r(at).createRenderer(null,null);this._listenerCleanups=t.runOutsideAngular(()=>[i.listen(n,"keydown",this._onKeydown,It),i.listen(n,"mousedown",this._onMousedown,It),i.listen(n,"touchstart",this._onTouchstart,It)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(t=>t())}static \u0275fac=function(n){return new(n||e)};static \u0275prov=d({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),Z=(function(e){return e[e.IMMEDIATE=0]="IMMEDIATE",e[e.EVENTUAL=1]="EVENTUAL",e})(Z||{}),ge=new h("cdk-focus-monitor-default-options"),st=U({passive:!0,capture:!0}),ct=(()=>{class e{_ngZone=r(m);_platform=r(f);_inputModalityDetector=r(_e);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=r(I);_stopInputModalityDetector=new p;constructor(){let t=r(ge,{optional:!0});this._detectionMode=t?.detectionMode||Z.IMMEDIATE}_rootNodeFocusAndBlurListener=t=>{let n=g(t);for(let o=n;o;o=o.parentElement)t.type==="focus"?this._onFocus(t,o):this._onBlur(t,o)};monitor(t,n=!1){let o=x(t);if(!this._platform.isBrowser||o.nodeType!==1)return Ht();let i=yt(o)||this._document,s=this._elementInfo.get(o);if(s)return n&&(s.checkChildren=!0),s.subject;let c={checkChildren:n,subject:new p,rootNode:i};return this._elementInfo.set(o,c),this._registerGlobalListeners(c),c.subject}stopMonitoring(t){let n=x(t),o=this._elementInfo.get(n);o&&(o.subject.complete(),this._setClasses(n),this._elementInfo.delete(n),this._removeGlobalListeners(o))}focusVia(t,n,o){let i=x(t),s=this._document.activeElement;i===s?this._getClosestElementsInfo(i).forEach(([c,u])=>this._originChanged(c,n,u)):(this._setOrigin(n),typeof i.focus=="function"&&i.focus(o))}ngOnDestroy(){this._elementInfo.forEach((t,n)=>this.stopMonitoring(n))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(t){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(t)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:t&&this._isLastInteractionFromInputLabel(t)?"mouse":"program"}_shouldBeAttributedToTouch(t){return this._detectionMode===Z.EVENTUAL||!!t?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(t,n){t.classList.toggle("cdk-focused",!!n),t.classList.toggle("cdk-touch-focused",n==="touch"),t.classList.toggle("cdk-keyboard-focused",n==="keyboard"),t.classList.toggle("cdk-mouse-focused",n==="mouse"),t.classList.toggle("cdk-program-focused",n==="program")}_setOrigin(t,n=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=t,this._originFromTouchInteraction=t==="touch"&&n,this._detectionMode===Z.IMMEDIATE){clearTimeout(this._originTimeoutId);let o=this._originFromTouchInteraction?ve:1;this._originTimeoutId=setTimeout(()=>this._origin=null,o)}})}_onFocus(t,n){let o=this._elementInfo.get(n),i=g(t);!o||!o.checkChildren&&n!==i||this._originChanged(n,this._getFocusOrigin(i),o)}_onBlur(t,n){let o=this._elementInfo.get(n);!o||o.checkChildren&&t.relatedTarget instanceof Node&&n.contains(t.relatedTarget)||(this._setClasses(n),this._emitOrigin(o,null))}_emitOrigin(t,n){t.subject.observers.length&&this._ngZone.run(()=>t.subject.next(n))}_registerGlobalListeners(t){if(!this._platform.isBrowser)return;let n=t.rootNode,o=this._rootNodeFocusListenerCount.get(n)||0;o||this._ngZone.runOutsideAngular(()=>{n.addEventListener("focus",this._rootNodeFocusAndBlurListener,st),n.addEventListener("blur",this._rootNodeFocusAndBlurListener,st)}),this._rootNodeFocusListenerCount.set(n,o+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(et(this._stopInputModalityDetector)).subscribe(i=>{this._setOrigin(i,!0)}))}_removeGlobalListeners(t){let n=t.rootNode;if(this._rootNodeFocusListenerCount.has(n)){let o=this._rootNodeFocusListenerCount.get(n);o>1?this._rootNodeFocusListenerCount.set(n,o-1):(n.removeEventListener("focus",this._rootNodeFocusAndBlurListener,st),n.removeEventListener("blur",this._rootNodeFocusAndBlurListener,st),this._rootNodeFocusListenerCount.delete(n))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(t,n,o){this._setClasses(t,n),this._emitOrigin(o,n),this._lastFocusOrigin=n}_getClosestElementsInfo(t){let n=[];return this._elementInfo.forEach((o,i)=>{(i===t||o.checkChildren&&i.contains(t))&&n.push([i,o])}),n}_isLastInteractionFromInputLabel(t){let{_mostRecentTarget:n,mostRecentModality:o}=this._inputModalityDetector;if(o!=="mouse"||!n||n===t||t.nodeName!=="INPUT"&&t.nodeName!=="TEXTAREA"||t.disabled)return!1;let i=t.labels;if(i){for(let s=0;s<i.length;s++)if(i[s].contains(n))return!0}return!1}static \u0275fac=function(n){return new(n||e)};static \u0275prov=d({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),Ye=(()=>{class e{_elementRef=r(_);_focusMonitor=r(ct);_monitorSubscription;_focusOrigin=null;cdkFocusChange=new nt;constructor(){}get focusOrigin(){return this._focusOrigin}ngAfterViewInit(){let t=this._elementRef.nativeElement;this._monitorSubscription=this._focusMonitor.monitor(t,t.nodeType===1&&t.hasAttribute("cdkMonitorSubtreeFocus")).subscribe(n=>{this._focusOrigin=n,this.cdkFocusChange.emit(n)})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._monitorSubscription?.unsubscribe()}static \u0275fac=function(n){return new(n||e)};static \u0275dir=A({type:e,selectors:[["","cdkMonitorElementFocus",""],["","cdkMonitorSubtreeFocus",""]],outputs:{cdkFocusChange:"cdkFocusChange"},exportAs:["cdkMonitorFocus"]})}return e})();function dt(e){return Array.isArray(e)?e:[e]}var ye=new Set,N,mt=(()=>{class e{_platform=r(f);_nonce=r(te,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):Xe}matchMedia(t){return(this._platform.WEBKIT||this._platform.BLINK)&&Qe(t,this._nonce),this._matchMedia(t)}static \u0275fac=function(n){return new(n||e)};static \u0275prov=d({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function Qe(e,a){if(!ye.has(e))try{N||(N=document.createElement("style"),a&&N.setAttribute("nonce",a),N.setAttribute("type","text/css"),document.head.appendChild(N)),N.sheet&&(N.sheet.insertRule(`@media ${e} {body{ }}`,0),ye.add(e))}catch(t){console.error(t)}}function Xe(e){return{matches:e==="all"||e==="",media:e,addListener:()=>{},removeListener:()=>{}}}var At=(()=>{class e{_mediaMatcher=r(mt);_zone=r(m);_queries=new Map;_destroySubject=new p;constructor(){}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(t){return xe(dt(t)).some(o=>this._registerQuery(o).mql.matches)}observe(t){let o=xe(dt(t)).map(s=>this._registerQuery(s).observable),i=Vt(o);return i=Wt(i.pipe(Gt(1)),i.pipe(tt(1),F(0))),i.pipe(O(s=>{let c={matches:!1,breakpoints:{}};return s.forEach(({matches:u,query:E})=>{c.matches=c.matches||u,c.breakpoints[E]=u}),c}))}_registerQuery(t){if(this._queries.has(t))return this._queries.get(t);let n=this._mediaMatcher.matchMedia(t),i={observable:new q(s=>{let c=u=>this._zone.run(()=>s.next(u));return n.addListener(c),()=>{n.removeListener(c)}}).pipe($t(n),O(({matches:s})=>({query:t,matches:s})),et(this._destroySubject)),mql:n};return this._queries.set(t,i),i}static \u0275fac=function(n){return new(n||e)};static \u0275prov=d({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function xe(e){return e.map(a=>a.split(",")).reduce((a,t)=>a.concat(t)).map(a=>a.trim())}function qe(e){if(e.type==="characterData"&&e.target instanceof Comment)return!0;if(e.type==="childList"){for(let a=0;a<e.addedNodes.length;a++)if(!(e.addedNodes[a]instanceof Comment))return!1;for(let a=0;a<e.removedNodes.length;a++)if(!(e.removedNodes[a]instanceof Comment))return!1;return!0}return!1}var Ee=(()=>{class e{create(t){return typeof MutationObserver>"u"?null:new MutationObserver(t)}static \u0275fac=function(n){return new(n||e)};static \u0275prov=d({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),Ie=(()=>{class e{_mutationObserverFactory=r(Ee);_observedElements=new Map;_ngZone=r(m);constructor(){}ngOnDestroy(){this._observedElements.forEach((t,n)=>this._cleanupObserver(n))}observe(t){let n=x(t);return new q(o=>{let s=this._observeElement(n).pipe(O(c=>c.filter(u=>!qe(u))),J(c=>!!c.length)).subscribe(c=>{this._ngZone.run(()=>{o.next(c)})});return()=>{s.unsubscribe(),this._unobserveElement(n)}})}_observeElement(t){return this._ngZone.runOutsideAngular(()=>{if(this._observedElements.has(t))this._observedElements.get(t).count++;else{let n=new p,o=this._mutationObserverFactory.create(i=>n.next(i));o&&o.observe(t,{characterData:!0,childList:!0,subtree:!0}),this._observedElements.set(t,{observer:o,stream:n,count:1})}return this._observedElements.get(t).stream})}_unobserveElement(t){this._observedElements.has(t)&&(this._observedElements.get(t).count--,this._observedElements.get(t).count||this._cleanupObserver(t))}_cleanupObserver(t){if(this._observedElements.has(t)){let{observer:n,stream:o}=this._observedElements.get(t);n&&n.disconnect(),o.complete(),this._observedElements.delete(t)}}static \u0275fac=function(n){return new(n||e)};static \u0275prov=d({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),xa=(()=>{class e{_contentObserver=r(Ie);_elementRef=r(_);event=new nt;get disabled(){return this._disabled}set disabled(t){this._disabled=t,this._disabled?this._unsubscribe():this._subscribe()}_disabled=!1;get debounce(){return this._debounce}set debounce(t){this._debounce=Et(t),this._subscribe()}_debounce;_currentSubscription=null;constructor(){}ngAfterContentInit(){!this._currentSubscription&&!this.disabled&&this._subscribe()}ngOnDestroy(){this._unsubscribe()}_subscribe(){this._unsubscribe();let t=this._contentObserver.observe(this._elementRef);this._currentSubscription=(this.debounce?t.pipe(F(this.debounce)):t).subscribe(this.event)}_unsubscribe(){this._currentSubscription?.unsubscribe()}static \u0275fac=function(n){return new(n||e)};static \u0275dir=A({type:e,selectors:[["","cdkObserveContent",""]],inputs:{disabled:[2,"cdkObserveContentDisabled","disabled",D],debounce:"debounce"},outputs:{event:"cdkObserveContent"},exportAs:["cdkObserveContent"]})}return e})(),Ae=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=M({type:e});static \u0275inj=w({providers:[Ee]})}return e})();var Je=(()=>{class e{_platform=r(f);constructor(){}isDisabled(t){return t.hasAttribute("disabled")}isVisible(t){return en(t)&&getComputedStyle(t).visibility==="visible"}isTabbable(t){if(!this._platform.isBrowser)return!1;let n=tn(mn(t));if(n&&(we(n)===-1||!this.isVisible(n)))return!1;let o=t.nodeName.toLowerCase(),i=we(t);return t.hasAttribute("contenteditable")?i!==-1:o==="iframe"||o==="object"||this._platform.WEBKIT&&this._platform.IOS&&!cn(t)?!1:o==="audio"?t.hasAttribute("controls")?i!==-1:!1:o==="video"?i===-1?!1:i!==null?!0:this._platform.FIREFOX||t.hasAttribute("controls"):t.tabIndex>=0}isFocusable(t,n){return dn(t)&&!this.isDisabled(t)&&(n?.ignoreVisibility||this.isVisible(t))}static \u0275fac=function(n){return new(n||e)};static \u0275prov=d({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function tn(e){try{return e.frameElement}catch{return null}}function en(e){return!!(e.offsetWidth||e.offsetHeight||typeof e.getClientRects=="function"&&e.getClientRects().length)}function nn(e){let a=e.nodeName.toLowerCase();return a==="input"||a==="select"||a==="button"||a==="textarea"}function an(e){return rn(e)&&e.type=="hidden"}function on(e){return sn(e)&&e.hasAttribute("href")}function rn(e){return e.nodeName.toLowerCase()=="input"}function sn(e){return e.nodeName.toLowerCase()=="a"}function De(e){if(!e.hasAttribute("tabindex")||e.tabIndex===void 0)return!1;let a=e.getAttribute("tabindex");return!!(a&&!isNaN(parseInt(a,10)))}function we(e){if(!De(e))return null;let a=parseInt(e.getAttribute("tabindex")||"",10);return isNaN(a)?-1:a}function cn(e){let a=e.nodeName.toLowerCase(),t=a==="input"&&e.type;return t==="text"||t==="password"||a==="select"||a==="textarea"}function dn(e){return an(e)?!1:nn(e)||on(e)||e.hasAttribute("contenteditable")||De(e)}function mn(e){return e.ownerDocument&&e.ownerDocument.defaultView||window}var Tt=class{_element;_checker;_ngZone;_document;_injector;_startAnchor=null;_endAnchor=null;_hasAttached=!1;startAnchorListener=()=>this.focusLastTabbableElement();endAnchorListener=()=>this.focusFirstTabbableElement();get enabled(){return this._enabled}set enabled(a){this._enabled=a,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(a,this._startAnchor),this._toggleAnchorTabIndex(a,this._endAnchor))}_enabled=!0;constructor(a,t,n,o,i=!1,s){this._element=a,this._checker=t,this._ngZone=n,this._document=o,this._injector=s,i||this.attachAnchors()}destroy(){let a=this._startAnchor,t=this._endAnchor;a&&(a.removeEventListener("focus",this.startAnchorListener),a.remove()),t&&(t.removeEventListener("focus",this.endAnchorListener),t.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=!1}attachAnchors(){return this._hasAttached?!0:(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener("focus",this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener("focus",this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(a){return new Promise(t=>{this._executeOnStable(()=>t(this.focusInitialElement(a)))})}focusFirstTabbableElementWhenReady(a){return new Promise(t=>{this._executeOnStable(()=>t(this.focusFirstTabbableElement(a)))})}focusLastTabbableElementWhenReady(a){return new Promise(t=>{this._executeOnStable(()=>t(this.focusLastTabbableElement(a)))})}_getRegionBoundary(a){let t=this._element.querySelectorAll(`[cdk-focus-region-${a}], [cdkFocusRegion${a}], [cdk-focus-${a}]`);return a=="start"?t.length?t[0]:this._getFirstTabbableElement(this._element):t.length?t[t.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(a){let t=this._element.querySelector("[cdk-focus-initial], [cdkFocusInitial]");if(t){if(!this._checker.isFocusable(t)){let n=this._getFirstTabbableElement(t);return n?.focus(a),!!n}return t.focus(a),!0}return this.focusFirstTabbableElement(a)}focusFirstTabbableElement(a){let t=this._getRegionBoundary("start");return t&&t.focus(a),!!t}focusLastTabbableElement(a){let t=this._getRegionBoundary("end");return t&&t.focus(a),!!t}hasAttached(){return this._hasAttached}_getFirstTabbableElement(a){if(this._checker.isFocusable(a)&&this._checker.isTabbable(a))return a;let t=a.children;for(let n=0;n<t.length;n++){let o=t[n].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(t[n]):null;if(o)return o}return null}_getLastTabbableElement(a){if(this._checker.isFocusable(a)&&this._checker.isTabbable(a))return a;let t=a.children;for(let n=t.length-1;n>=0;n--){let o=t[n].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(t[n]):null;if(o)return o}return null}_createAnchor(){let a=this._document.createElement("div");return this._toggleAnchorTabIndex(this._enabled,a),a.classList.add("cdk-visually-hidden"),a.classList.add("cdk-focus-trap-anchor"),a.setAttribute("aria-hidden","true"),a}_toggleAnchorTabIndex(a,t){a?t.setAttribute("tabindex","0"):t.removeAttribute("tabindex")}toggleAnchors(a){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(a,this._startAnchor),this._toggleAnchorTabIndex(a,this._endAnchor))}_executeOnStable(a){this._injector?ee(a,{injector:this._injector}):setTimeout(a)}},ln=(()=>{class e{_checker=r(Je);_ngZone=r(m);_document=r(I);_injector=r(L);constructor(){r(j).load(me)}create(t,n=!1){return new Tt(t,this._checker,this._ngZone,this._document,n,this._injector)}static \u0275fac=function(n){return new(n||e)};static \u0275prov=d({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var ke=new h("liveAnnouncerElement",{providedIn:"root",factory:()=>null}),Ce=new h("LIVE_ANNOUNCER_DEFAULT_OPTIONS"),un=0,bn=(()=>{class e{_ngZone=r(m);_defaultOptions=r(Ce,{optional:!0});_liveElement;_document=r(I);_sanitizer=r(de);_previousTimeout;_currentPromise;_currentResolve;constructor(){let t=r(ke,{optional:!0});this._liveElement=t||this._createLiveElement()}announce(t,...n){let o=this._defaultOptions,i,s;return n.length===1&&typeof n[0]=="number"?s=n[0]:[i,s]=n,this.clear(),clearTimeout(this._previousTimeout),i||(i=o&&o.politeness?o.politeness:"polite"),s==null&&o&&(s=o.duration),this._liveElement.setAttribute("aria-live",i),this._liveElement.id&&this._exposeAnnouncerToModals(this._liveElement.id),this._ngZone.runOutsideAngular(()=>(this._currentPromise||(this._currentPromise=new Promise(c=>this._currentResolve=c)),clearTimeout(this._previousTimeout),this._previousTimeout=setTimeout(()=>{!t||typeof t=="string"?this._liveElement.textContent=t:le(this._liveElement,t,this._sanitizer),typeof s=="number"&&(this._previousTimeout=setTimeout(()=>this.clear(),s)),this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0},100),this._currentPromise))}clear(){this._liveElement&&(this._liveElement.textContent="")}ngOnDestroy(){clearTimeout(this._previousTimeout),this._liveElement?.remove(),this._liveElement=null,this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0}_createLiveElement(){let t="cdk-live-announcer-element",n=this._document.getElementsByClassName(t),o=this._document.createElement("div");for(let i=0;i<n.length;i++)n[i].remove();return o.classList.add(t),o.classList.add("cdk-visually-hidden"),o.setAttribute("aria-atomic","true"),o.setAttribute("aria-live","polite"),o.id=`cdk-live-announcer-${un++}`,this._document.body.appendChild(o),o}_exposeAnnouncerToModals(t){let n=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let o=0;o<n.length;o++){let i=n[o],s=i.getAttribute("aria-owns");s?s.indexOf(t)===-1&&i.setAttribute("aria-owns",s+" "+t):i.setAttribute("aria-owns",t)}}static \u0275fac=function(n){return new(n||e)};static \u0275prov=d({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var k=(function(e){return e[e.NONE=0]="NONE",e[e.BLACK_ON_WHITE=1]="BLACK_ON_WHITE",e[e.WHITE_ON_BLACK=2]="WHITE_ON_BLACK",e})(k||{}),Te="cdk-high-contrast-black-on-white",Me="cdk-high-contrast-white-on-black",wt="cdk-high-contrast-active",Oe=(()=>{class e{_platform=r(f);_hasCheckedHighContrastMode=!1;_document=r(I);_breakpointSubscription;constructor(){this._breakpointSubscription=r(At).observe("(forced-colors: active)").subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return k.NONE;let t=this._document.createElement("div");t.style.backgroundColor="rgb(1,2,3)",t.style.position="absolute",this._document.body.appendChild(t);let n=this._document.defaultView||window,o=n&&n.getComputedStyle?n.getComputedStyle(t):null,i=(o&&o.backgroundColor||"").replace(/ /g,"");switch(t.remove(),i){case"rgb(0,0,0)":case"rgb(45,50,54)":case"rgb(32,32,32)":return k.WHITE_ON_BLACK;case"rgb(255,255,255)":case"rgb(255,250,239)":return k.BLACK_ON_WHITE}return k.NONE}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){let t=this._document.body.classList;t.remove(wt,Te,Me),this._hasCheckedHighContrastMode=!0;let n=this.getHighContrastMode();n===k.BLACK_ON_WHITE?t.add(wt,Te):n===k.WHITE_ON_BLACK&&t.add(wt,Me)}}static \u0275fac=function(n){return new(n||e)};static \u0275prov=d({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),pn=(()=>{class e{constructor(){r(Oe)._applyBodyHighContrastModeCssClasses()}static \u0275fac=function(n){return new(n||e)};static \u0275mod=M({type:e});static \u0275inj=w({imports:[Ae]})}return e})();var fn=200,lt=class{_letterKeyStream=new p;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new p;selectedItem=this._selectedItem;constructor(a,t){let n=typeof t?.debounceInterval=="number"?t.debounceInterval:fn;t?.skipPredicate&&(this._skipPredicateFn=t.skipPredicate),this.setItems(a),this._setupKeyHandler(n)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(a){this._selectedItemIndex=a}setItems(a){this._items=a}handleKey(a){let t=a.keyCode;a.key&&a.key.length===1?this._letterKeyStream.next(a.key.toLocaleUpperCase()):(t>=65&&t<=90||t>=48&&t<=57)&&this._letterKeyStream.next(String.fromCharCode(t))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(a){this._letterKeyStream.pipe(Yt(t=>this._pressedLetters.push(t)),F(a),J(()=>this._pressedLetters.length>0),O(()=>this._pressedLetters.join("").toLocaleUpperCase())).subscribe(t=>{for(let n=1;n<this._items.length+1;n++){let o=(this._selectedItemIndex+n)%this._items.length,i=this._items[o];if(!this._skipPredicateFn?.(i)&&i.getLabel?.().toLocaleUpperCase().trim().indexOf(t)===0){this._selectedItem.next(i);break}}this._pressedLetters=[]})}};function Ne(e,...a){return a.length?a.some(t=>e[t]):e.altKey||e.shiftKey||e.ctrlKey||e.metaKey}var z=class{_items;_activeItemIndex=ht(-1);_activeItem=ht(null);_wrap=!1;_typeaheadSubscription=zt.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal=null;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=a=>a.disabled;constructor(a,t){this._items=a,a instanceof vt?this._itemChangesSubscription=a.changes.subscribe(n=>this._itemsChanged(n.toArray())):_t(a)&&(this._effectRef=Qt(()=>this._itemsChanged(a()),{injector:t}))}tabOut=new p;change=new p;skipPredicate(a){return this._skipPredicateFn=a,this}withWrap(a=!0){return this._wrap=a,this}withVerticalOrientation(a=!0){return this._vertical=a,this}withHorizontalOrientation(a){return this._horizontal=a,this}withAllowedModifierKeys(a){return this._allowedModifierKeys=a,this}withTypeAhead(a=200){this._typeaheadSubscription.unsubscribe();let t=this._getItemsArray();return this._typeahead=new lt(t,{debounceInterval:typeof a=="number"?a:void 0,skipPredicate:n=>this._skipPredicateFn(n)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(n=>{this.setActiveItem(n)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(a=!0){return this._homeAndEnd=a,this}withPageUpDown(a=!0,t=10){return this._pageUpAndDown={enabled:a,delta:t},this}setActiveItem(a){let t=this._activeItem();this.updateActiveItem(a),this._activeItem()!==t&&this.change.next(this._activeItemIndex())}onKeydown(a){let t=a.keyCode,o=["altKey","ctrlKey","metaKey","shiftKey"].every(i=>!a[i]||this._allowedModifierKeys.indexOf(i)>-1);switch(t){case 9:this.tabOut.next();return;case 40:if(this._vertical&&o){this.setNextItemActive();break}else return;case 38:if(this._vertical&&o){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&o){this._horizontal==="rtl"?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&o){this._horizontal==="rtl"?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&o){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&o){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&o){let i=this._activeItemIndex()-this._pageUpAndDown.delta;this._setActiveItemByIndex(i>0?i:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&o){let i=this._activeItemIndex()+this._pageUpAndDown.delta,s=this._getItemsArray().length;this._setActiveItemByIndex(i<s?i:s-1,-1);break}else return;default:(o||Ne(a,"shiftKey"))&&this._typeahead?.handleKey(a);return}this._typeahead?.reset(),a.preventDefault()}get activeItemIndex(){return this._activeItemIndex()}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex()<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex()<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(a){let t=this._getItemsArray(),n=typeof a=="number"?a:t.indexOf(a),o=t[n];this._activeItem.set(o??null),this._activeItemIndex.set(n),this._typeahead?.setCurrentSelectedItemIndex(n)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(a){this._wrap?this._setActiveInWrapMode(a):this._setActiveInDefaultMode(a)}_setActiveInWrapMode(a){let t=this._getItemsArray();for(let n=1;n<=t.length;n++){let o=(this._activeItemIndex()+a*n+t.length)%t.length,i=t[o];if(!this._skipPredicateFn(i)){this.setActiveItem(o);return}}}_setActiveInDefaultMode(a){this._setActiveItemByIndex(this._activeItemIndex()+a,a)}_setActiveItemByIndex(a,t){let n=this._getItemsArray();if(n[a]){for(;this._skipPredicateFn(n[a]);)if(a+=t,!n[a])return;this.setActiveItem(a)}}_getItemsArray(){return _t(this._items)?this._items():this._items instanceof vt?this._items.toArray():this._items}_itemsChanged(a){this._typeahead?.setItems(a);let t=this._activeItem();if(t){let n=a.indexOf(t);n>-1&&n!==this._activeItemIndex()&&(this._activeItemIndex.set(n),this._typeahead?.setCurrentSelectedItemIndex(n))}}};var Mt=class extends z{setActiveItem(a){this.activeItem&&this.activeItem.setInactiveStyles(),super.setActiveItem(a),this.activeItem&&this.activeItem.setActiveStyles()}};var Dt=class extends z{_origin="program";setFocusOrigin(a){return this._origin=a,this}setActiveItem(a){super.setActiveItem(a),this.activeItem&&this.activeItem.focus(this._origin)}};var kt={},Ct=class e{_appId=r(Xt);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(a,t=!1){return this._appId!=="ng"&&(a+=this._appId),kt.hasOwnProperty(a)||(kt[a]=0),`${a}${t?e._infix+"-":""}${kt[a]++}`}static \u0275fac=function(t){return new(t||e)};static \u0275prov=d({token:e,factory:e.\u0275fac,providedIn:"root"})};var Re=" ";function fo(e,a,t){let n=Fe(e,a);t=t.trim(),!n.some(o=>o.trim()===t)&&(n.push(t),e.setAttribute(a,n.join(Re)))}function ho(e,a,t){let n=Fe(e,a);t=t.trim();let o=n.filter(i=>i!==t);o.length?e.setAttribute(a,o.join(Re)):e.removeAttribute(a)}function Fe(e,a){return e.getAttribute(a)?.match(/\S+/g)??[]}var $=(function(e){return e[e.NORMAL=0]="NORMAL",e[e.NEGATED=1]="NEGATED",e[e.INVERTED=2]="INVERTED",e})($||{}),ut,R;function Ao(){if(R==null){if(typeof document!="object"||!document||typeof Element!="function"||!Element)return R=!1,R;if(document.documentElement?.style&&"scrollBehavior"in document.documentElement.style)R=!0;else{let e=Element.prototype.scrollTo;e?R=!/\{\s*\[native code\]\s*\}/.test(e.toString()):R=!1}}return R}function wo(){if(typeof document!="object"||!document)return $.NORMAL;if(ut==null){let e=document.createElement("div"),a=e.style;e.dir="rtl",a.width="1px",a.overflow="auto",a.visibility="hidden",a.pointerEvents="none",a.position="absolute";let t=document.createElement("div"),n=t.style;n.width="2px",n.height="1px",e.appendChild(t),document.body.appendChild(e),ut=$.NORMAL,e.scrollLeft===0&&(e.scrollLeft=1,ut=e.scrollLeft===0?$.NEGATED:$.INVERTED),e.remove()}return ut}function Mo(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}var K,Le=["color","button","checkbox","date","datetime-local","email","file","hidden","image","month","number","password","radio","range","reset","search","submit","tel","text","time","url","week"];function ko(){if(K)return K;if(typeof document!="object"||!document)return K=new Set(Le),K;let e=document.createElement("input");return K=new Set(Le.filter(a=>(e.setAttribute("type",a),e.type===a))),K}var Fo={XSmall:"(max-width: 599.98px)",Small:"(min-width: 600px) and (max-width: 959.98px)",Medium:"(min-width: 960px) and (max-width: 1279.98px)",Large:"(min-width: 1280px) and (max-width: 1919.98px)",XLarge:"(min-width: 1920px)",Handset:"(max-width: 599.98px) and (orientation: portrait), (max-width: 959.98px) and (orientation: landscape)",Tablet:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait), (min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",Web:"(min-width: 840px) and (orientation: portrait), (min-width: 1280px) and (orientation: landscape)",HandsetPortrait:"(max-width: 599.98px) and (orientation: portrait)",TabletPortrait:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait)",WebPortrait:"(min-width: 840px) and (orientation: portrait)",HandsetLandscape:"(max-width: 959.98px) and (orientation: landscape)",TabletLandscape:"(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",WebLandscape:"(min-width: 1280px) and (orientation: landscape)"};var hn=new h("MATERIAL_ANIMATIONS"),Se=null;function vn(){return r(hn,{optional:!0})?.animationsDisabled||r(Jt,{optional:!0})==="NoopAnimations"?"di-disabled":(Se??=r(mt).matchMedia("(prefers-reduced-motion)").matches,Se?"reduced-motion":"enabled")}function H(){return vn()!=="enabled"}function Uo(e){return e==null?"":typeof e=="string"?e:`${e}px`}function Ko(e){return e!=null&&`${e}`!="false"}var v=(function(e){return e[e.FADING_IN=0]="FADING_IN",e[e.VISIBLE=1]="VISIBLE",e[e.FADING_OUT=2]="FADING_OUT",e[e.HIDDEN=3]="HIDDEN",e})(v||{}),Ot=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=v.HIDDEN;constructor(a,t,n,o=!1){this._renderer=a,this.element=t,this.config=n,this._animationForciblyDisabledThroughCss=o}fadeOut(){this._renderer.fadeOutRipple(this)}},Pe=U({passive:!0,capture:!0}),Nt=class{_events=new Map;addHandler(a,t,n,o){let i=this._events.get(t);if(i){let s=i.get(n);s?s.add(o):i.set(n,new Set([o]))}else this._events.set(t,new Map([[n,new Set([o])]])),a.runOutsideAngular(()=>{document.addEventListener(t,this._delegateEventHandler,Pe)})}removeHandler(a,t,n){let o=this._events.get(a);if(!o)return;let i=o.get(t);i&&(i.delete(n),i.size===0&&o.delete(t),o.size===0&&(this._events.delete(a),document.removeEventListener(a,this._delegateEventHandler,Pe)))}_delegateEventHandler=a=>{let t=g(a);t&&this._events.get(a.type)?.forEach((n,o)=>{(o===t||o.contains(t))&&n.forEach(i=>i.handleEvent(a))})}},Y={enterDuration:225,exitDuration:150},_n=800,Be=U({passive:!0,capture:!0}),je=["mousedown","touchstart"],Ue=["mouseup","mouseleave","touchend","touchcancel"],gn=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275cmp=T({type:e,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(n,o){},styles:[`.mat-ripple {
  overflow: hidden;
  position: relative;
}
.mat-ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-ripple.mat-ripple-unbounded {
  overflow: visible;
}

.mat-ripple-element {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale3d(0, 0, 0);
  background-color: var(--mat-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface) 10%, transparent));
}
@media (forced-colors: active) {
  .mat-ripple-element {
    display: none;
  }
}
.cdk-drag-preview .mat-ripple-element, .cdk-drag-placeholder .mat-ripple-element {
  display: none;
}
`],encapsulation:2,changeDetection:0})}return e})(),Q=class e{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new Nt;constructor(a,t,n,o,i){this._target=a,this._ngZone=t,this._platform=o,o.isBrowser&&(this._containerElement=x(n)),i&&i.get(j).load(gn)}fadeInRipple(a,t,n={}){let o=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),i=l(l({},Y),n.animation);n.centered&&(a=o.left+o.width/2,t=o.top+o.height/2);let s=n.radius||yn(a,t,o),c=a-o.left,u=t-o.top,E=i.enterDuration,b=document.createElement("div");b.classList.add("mat-ripple-element"),b.style.left=`${c-s}px`,b.style.top=`${u-s}px`,b.style.height=`${s*2}px`,b.style.width=`${s*2}px`,n.color!=null&&(b.style.backgroundColor=n.color),b.style.transitionDuration=`${E}ms`,this._containerElement.appendChild(b);let Pt=window.getComputedStyle(b),Ze=Pt.transitionProperty,Bt=Pt.transitionDuration,pt=Ze==="none"||Bt==="0s"||Bt==="0s, 0s"||o.width===0&&o.height===0,C=new Ot(this,b,n,pt);b.style.transform="scale3d(1, 1, 1)",C.state=v.FADING_IN,n.persistent||(this._mostRecentTransientRipple=C);let X=null;return!pt&&(E||i.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let jt=()=>{X&&(X.fallbackTimer=null),clearTimeout(Ut),this._finishRippleTransition(C)},ft=()=>this._destroyRipple(C),Ut=setTimeout(ft,E+100);b.addEventListener("transitionend",jt),b.addEventListener("transitioncancel",ft),X={onTransitionEnd:jt,onTransitionCancel:ft,fallbackTimer:Ut}}),this._activeRipples.set(C,X),(pt||!E)&&this._finishRippleTransition(C),C}fadeOutRipple(a){if(a.state===v.FADING_OUT||a.state===v.HIDDEN)return;let t=a.element,n=l(l({},Y),a.config.animation);t.style.transitionDuration=`${n.exitDuration}ms`,t.style.opacity="0",a.state=v.FADING_OUT,(a._animationForciblyDisabledThroughCss||!n.exitDuration)&&this._finishRippleTransition(a)}fadeOutAll(){this._getActiveRipples().forEach(a=>a.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(a=>{a.config.persistent||a.fadeOut()})}setupTriggerEvents(a){let t=x(a);!this._platform.isBrowser||!t||t===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=t,je.forEach(n=>{e._eventManager.addHandler(this._ngZone,n,t,this)}))}handleEvent(a){a.type==="mousedown"?this._onMousedown(a):a.type==="touchstart"?this._onTouchStart(a):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{Ue.forEach(t=>{this._triggerElement.addEventListener(t,this,Be)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(a){a.state===v.FADING_IN?this._startFadeOutTransition(a):a.state===v.FADING_OUT&&this._destroyRipple(a)}_startFadeOutTransition(a){let t=a===this._mostRecentTransientRipple,{persistent:n}=a.config;a.state=v.VISIBLE,!n&&(!t||!this._isPointerDown)&&a.fadeOut()}_destroyRipple(a){let t=this._activeRipples.get(a)??null;this._activeRipples.delete(a),this._activeRipples.size||(this._containerRect=null),a===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),a.state=v.HIDDEN,t!==null&&(a.element.removeEventListener("transitionend",t.onTransitionEnd),a.element.removeEventListener("transitioncancel",t.onTransitionCancel),t.fallbackTimer!==null&&clearTimeout(t.fallbackTimer)),a.element.remove()}_onMousedown(a){let t=V(a),n=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+_n;!this._target.rippleDisabled&&!t&&!n&&(this._isPointerDown=!0,this.fadeInRipple(a.clientX,a.clientY,this._target.rippleConfig))}_onTouchStart(a){if(!this._target.rippleDisabled&&!W(a)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let t=a.changedTouches;if(t)for(let n=0;n<t.length;n++)this.fadeInRipple(t[n].clientX,t[n].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(a=>{let t=a.state===v.VISIBLE||a.config.terminateOnPointerUp&&a.state===v.FADING_IN;!a.config.persistent&&t&&a.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let a=this._triggerElement;a&&(je.forEach(t=>e._eventManager.removeHandler(t,a,this)),this._pointerUpEventsRegistered&&(Ue.forEach(t=>a.removeEventListener(t,this,Be)),this._pointerUpEventsRegistered=!1))}};function yn(e,a,t){let n=Math.max(Math.abs(e-t.left),Math.abs(e-t.right)),o=Math.max(Math.abs(a-t.top),Math.abs(a-t.bottom));return Math.sqrt(n*n+o*o)}var Rt=new h("mat-ripple-global-options"),ai=(()=>{class e{_elementRef=r(_);_animationsDisabled=H();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(t){t&&this.fadeOutAllNonPersistent(),this._disabled=t,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(t){this._trigger=t,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let t=r(m),n=r(f),o=r(Rt,{optional:!0}),i=r(L);this._globalOptions=o||{},this._rippleRenderer=new Q(this,t,this._elementRef,n,i)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:l(l(l({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(t,n=0,o){return typeof t=="number"?this._rippleRenderer.fadeInRipple(t,n,l(l({},this.rippleConfig),o)):this._rippleRenderer.fadeInRipple(0,0,l(l({},this.rippleConfig),t))}static \u0275fac=function(n){return new(n||e)};static \u0275dir=A({type:e,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(n,o){n&2&&B("mat-ripple-unbounded",o.unbounded)},inputs:{color:[0,"matRippleColor","color"],unbounded:[0,"matRippleUnbounded","unbounded"],centered:[0,"matRippleCentered","centered"],radius:[0,"matRippleRadius","radius"],animation:[0,"matRippleAnimation","animation"],disabled:[0,"matRippleDisabled","disabled"],trigger:[0,"matRippleTrigger","trigger"]},exportAs:["matRipple"]})}return e})();var xn={capture:!0},En=["focus","mousedown","mouseenter","touchstart"],Ft="mat-ripple-loader-uninitialized",Lt="mat-ripple-loader-class-name",ze="mat-ripple-loader-centered",bt="mat-ripple-loader-disabled",Ke=(()=>{class e{_document=r(I);_animationsDisabled=H();_globalRippleOptions=r(Rt,{optional:!0});_platform=r(f);_ngZone=r(m);_injector=r(L);_eventCleanups;_hosts=new Map;constructor(){let t=r(at).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>En.map(n=>t.listen(this._document,n,this._onInteraction,xn)))}ngOnDestroy(){let t=this._hosts.keys();for(let n of t)this.destroyRipple(n);this._eventCleanups.forEach(n=>n())}configureRipple(t,n){t.setAttribute(Ft,this._globalRippleOptions?.namespace??""),(n.className||!t.hasAttribute(Lt))&&t.setAttribute(Lt,n.className||""),n.centered&&t.setAttribute(ze,""),n.disabled&&t.setAttribute(bt,"")}setDisabled(t,n){let o=this._hosts.get(t);o?(o.target.rippleDisabled=n,!n&&!o.hasSetUpEvents&&(o.hasSetUpEvents=!0,o.renderer.setupTriggerEvents(t))):n?t.setAttribute(bt,""):t.removeAttribute(bt)}_onInteraction=t=>{let n=g(t);if(n instanceof HTMLElement){let o=n.closest(`[${Ft}="${this._globalRippleOptions?.namespace??""}"]`);o&&this._createRipple(o)}};_createRipple(t){if(!this._document||this._hosts.has(t))return;t.querySelector(".mat-ripple")?.remove();let n=this._document.createElement("span");n.classList.add("mat-ripple",t.getAttribute(Lt)),t.append(n);let o=this._globalRippleOptions,i=this._animationsDisabled?0:o?.animation?.enterDuration??Y.enterDuration,s=this._animationsDisabled?0:o?.animation?.exitDuration??Y.exitDuration,c={rippleDisabled:this._animationsDisabled||o?.disabled||t.hasAttribute(bt),rippleConfig:{centered:t.hasAttribute(ze),terminateOnPointerUp:o?.terminateOnPointerUp,animation:{enterDuration:i,exitDuration:s}}},u=new Q(c,this._ngZone,n,this._platform,this._injector),E=!c.rippleDisabled;E&&u.setupTriggerEvents(t),this._hosts.set(t,{target:c,renderer:u,hasSetUpEvents:E}),t.removeAttribute(Ft)}destroyRipple(t){let n=this._hosts.get(t);n&&(n.renderer._removeTriggerEvents(),this._hosts.delete(t))}static \u0275fac=function(n){return new(n||e)};static \u0275prov=d({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var He=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275cmp=T({type:e,selectors:[["structural-styles"]],decls:0,vars:0,template:function(n,o){},styles:[`.mat-focus-indicator {
  position: relative;
}
.mat-focus-indicator::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  box-sizing: border-box;
  pointer-events: none;
  display: var(--mat-focus-indicator-display, none);
  border-width: var(--mat-focus-indicator-border-width, 3px);
  border-style: var(--mat-focus-indicator-border-style, solid);
  border-color: var(--mat-focus-indicator-border-color, transparent);
  border-radius: var(--mat-focus-indicator-border-radius, 4px);
}
.mat-focus-indicator:focus-visible::before {
  content: "";
}

@media (forced-colors: active) {
  html {
    --mat-focus-indicator-display: block;
  }
}
`],encapsulation:2,changeDetection:0})}return e})();var In=["mat-icon-button",""],An=["*"],wn=new h("MAT_BUTTON_CONFIG");function Ve(e){return e==null?void 0:se(e)}var St=(()=>{class e{_elementRef=r(_);_ngZone=r(m);_animationsDisabled=H();_config=r(wn,{optional:!0});_focusMonitor=r(ct);_cleanupClick;_renderer=r(ne);_rippleLoader=r(Ke);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(t){this._disableRipple=t,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(t){this._disabled=t,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(t){this.tabIndex=t}constructor(){r(j).load(He);let t=this._elementRef.nativeElement;this._isAnchor=t.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(t,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(t="program",n){t?this._focusMonitor.focusVia(this._elementRef.nativeElement,t,n):this._elementRef.nativeElement.focus(n)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",t=>{this.disabled&&(t.preventDefault(),t.stopImmediatePropagation())}))}static \u0275fac=function(n){return new(n||e)};static \u0275dir=A({type:e,hostAttrs:[1,"mat-mdc-button-base"],hostVars:13,hostBindings:function(n,o){n&2&&(ae("disabled",o._getDisabledAttribute())("aria-disabled",o._getAriaDisabled())("tabindex",o._getTabIndex()),re(o.color?"mat-"+o.color:""),B("mat-mdc-button-disabled",o.disabled)("mat-mdc-button-disabled-interactive",o.disabledInteractive)("mat-unthemed",!o.color)("_mat-animation-noopable",o._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",D],disabled:[2,"disabled","disabled",D],ariaDisabled:[2,"aria-disabled","ariaDisabled",D],disabledInteractive:[2,"disabledInteractive","disabledInteractive",D],tabIndex:[2,"tabIndex","tabIndex",Ve],_tabindex:[2,"tabindex","_tabindex",Ve]}})}return e})(),Tn=(()=>{class e extends St{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static \u0275fac=function(n){return new(n||e)};static \u0275cmp=T({type:e,selectors:[["button","mat-icon-button",""],["a","mat-icon-button",""],["button","matIconButton",""],["a","matIconButton",""]],hostAttrs:[1,"mdc-icon-button","mat-mdc-icon-button"],exportAs:["matButton","matAnchor"],features:[ot],attrs:In,ngContentSelectors:An,decls:4,vars:0,consts:[[1,"mat-mdc-button-persistent-ripple","mdc-icon-button__ripple"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(n,o){n&1&&(it(),S(0,"span",0),P(1),S(2,"span",1)(3,"span",2))},styles:[`.mat-mdc-icon-button {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  border: none;
  outline: none;
  background-color: transparent;
  fill: currentColor;
  text-decoration: none;
  cursor: pointer;
  z-index: 0;
  overflow: visible;
  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));
  flex-shrink: 0;
  text-align: center;
  width: var(--mat-icon-button-state-layer-size, 40px);
  height: var(--mat-icon-button-state-layer-size, 40px);
  padding: calc(calc(var(--mat-icon-button-state-layer-size, 40px) - var(--mat-icon-button-icon-size, 24px)) / 2);
  font-size: var(--mat-icon-button-icon-size, 24px);
  color: var(--mat-icon-button-icon-color, var(--mat-sys-on-surface-variant));
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-icon-button .mat-mdc-button-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-icon-button .mdc-button__label,
.mat-mdc-icon-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-icon-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-icon-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-ripple-element {
  background-color: var(--mat-icon-button-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface-variant) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-icon-button-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-icon-button-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-icon-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-icon-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-icon-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-icon-button-touch-target-size, 48px);
  display: var(--mat-icon-button-touch-target-display, block);
  left: 50%;
  width: var(--mat-icon-button-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-icon-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-icon-button[disabled], .mat-mdc-icon-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-icon-button-disabled-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-icon-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-icon-button img,
.mat-mdc-icon-button svg {
  width: var(--mat-icon-button-icon-size, 24px);
  height: var(--mat-icon-button-icon-size, 24px);
  vertical-align: baseline;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple {
  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));
}
.mat-mdc-icon-button[hidden] {
  display: none;
}
.mat-mdc-icon-button.mat-unthemed:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-primary:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-accent:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-warn:not(.mdc-ripple-upgraded):focus::before {
  background: transparent;
  opacity: 1;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return e})();var We=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=M({type:e});static \u0275inj=w({imports:[rt]})}return e})();var Mn=["matButton",""],Dn=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]]],kn=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]"];var Ge=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),Ci=(()=>{class e extends St{get appearance(){return this._appearance}set appearance(t){this.setAppearance(t||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let t=Cn(this._elementRef.nativeElement);t&&this.setAppearance(t)}setAppearance(t){if(t===this._appearance)return;let n=this._elementRef.nativeElement.classList,o=this._appearance?Ge.get(this._appearance):null,i=Ge.get(t);o&&n.remove(...o),n.add(...i),this._appearance=t}static \u0275fac=function(n){return new(n||e)};static \u0275cmp=T({type:e,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[ot],attrs:Mn,ngContentSelectors:kn,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(n,o){n&1&&(it(Dn),S(0,"span",0),P(1),oe(2,"span",1),P(3,1),ie(),P(4,2),S(5,"span",2)(6,"span",3)),n&2&&B("mdc-button__ripple",!o._isFab)("mdc-fab__ripple",o._isFab)},styles:[`.mat-mdc-button-base {
  text-decoration: none;
}
.mat-mdc-button-base .mat-icon {
  min-height: fit-content;
  flex-shrink: 0;
}
@media (hover: none) {
  .mat-mdc-button-base:hover > span.mat-mdc-button-persistent-ripple::before {
    opacity: 0;
  }
}

.mdc-button {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 64px;
  border: none;
  outline: none;
  line-height: inherit;
  -webkit-appearance: none;
  overflow: visible;
  vertical-align: middle;
  background: transparent;
  padding: 0 8px;
}
.mdc-button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mdc-button:active {
  outline: none;
}
.mdc-button:hover {
  cursor: pointer;
}
.mdc-button:disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-button[hidden] {
  display: none;
}
.mdc-button .mdc-button__label {
  position: relative;
}

.mat-mdc-button {
  padding: 0 var(--mat-button-text-horizontal-padding, 12px);
  height: var(--mat-button-text-container-height, 40px);
  font-family: var(--mat-button-text-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-text-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-text-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-text-label-text-transform);
  font-weight: var(--mat-button-text-label-text-weight, var(--mat-sys-label-large-weight));
}
.mat-mdc-button, .mat-mdc-button .mdc-button__ripple {
  border-radius: var(--mat-button-text-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-button:not(:disabled) {
  color: var(--mat-button-text-label-text-color, var(--mat-sys-primary));
}
.mat-mdc-button[disabled], .mat-mdc-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-text-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-button:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding: 0 var(--mat-button-text-with-icon-horizontal-padding, 16px);
}
.mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
[dir=rtl] .mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
.mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
.mat-mdc-button .mat-ripple-element {
  background-color: var(--mat-button-text-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-text-touch-target-size, 48px);
  display: var(--mat-button-text-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-unelevated-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-filled-container-height, 40px);
  font-family: var(--mat-button-filled-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-filled-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-filled-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-filled-label-text-transform);
  font-weight: var(--mat-button-filled-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-filled-horizontal-padding, 24px);
}
.mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
.mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
.mat-mdc-unelevated-button .mat-ripple-element {
  background-color: var(--mat-button-filled-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-state-layer-color, var(--mat-sys-on-primary));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-unelevated-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-unelevated-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-unelevated-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-unelevated-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-filled-touch-target-size, 48px);
  display: var(--mat-button-filled-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-unelevated-button:not(:disabled) {
  color: var(--mat-button-filled-label-text-color, var(--mat-sys-on-primary));
  background-color: var(--mat-button-filled-container-color, var(--mat-sys-primary));
}
.mat-mdc-unelevated-button, .mat-mdc-unelevated-button .mdc-button__ripple {
  border-radius: var(--mat-button-filled-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-unelevated-button[disabled], .mat-mdc-unelevated-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-raised-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--mat-button-protected-container-elevation-shadow, var(--mat-sys-level1));
  height: var(--mat-button-protected-container-height, 40px);
  font-family: var(--mat-button-protected-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-protected-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-protected-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-protected-label-text-transform);
  font-weight: var(--mat-button-protected-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-protected-horizontal-padding, 24px);
}
.mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
.mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
.mat-mdc-raised-button .mat-ripple-element {
  background-color: var(--mat-button-protected-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-raised-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-raised-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-raised-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-raised-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-protected-touch-target-size, 48px);
  display: var(--mat-button-protected-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-raised-button:not(:disabled) {
  color: var(--mat-button-protected-label-text-color, var(--mat-sys-primary));
  background-color: var(--mat-button-protected-container-color, var(--mat-sys-surface));
}
.mat-mdc-raised-button, .mat-mdc-raised-button .mdc-button__ripple {
  border-radius: var(--mat-button-protected-container-shape, var(--mat-sys-corner-full));
}
@media (hover: hover) {
  .mat-mdc-raised-button:hover {
    box-shadow: var(--mat-button-protected-hover-container-elevation-shadow, var(--mat-sys-level2));
  }
}
.mat-mdc-raised-button:focus {
  box-shadow: var(--mat-button-protected-focus-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button:active, .mat-mdc-raised-button:focus:active {
  box-shadow: var(--mat-button-protected-pressed-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button[disabled], .mat-mdc-raised-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-protected-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-protected-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-raised-button[disabled].mat-mdc-button-disabled, .mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled {
  box-shadow: var(--mat-button-protected-disabled-container-elevation-shadow, var(--mat-sys-level0));
}
.mat-mdc-raised-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-outlined-button {
  border-style: solid;
  transition: border 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-outlined-container-height, 40px);
  font-family: var(--mat-button-outlined-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-outlined-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-outlined-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-outlined-label-text-transform);
  font-weight: var(--mat-button-outlined-label-text-weight, var(--mat-sys-label-large-weight));
  border-radius: var(--mat-button-outlined-container-shape, var(--mat-sys-corner-full));
  border-width: var(--mat-button-outlined-outline-width, 1px);
  padding: 0 var(--mat-button-outlined-horizontal-padding, 24px);
}
.mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
.mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
.mat-mdc-outlined-button .mat-ripple-element {
  background-color: var(--mat-button-outlined-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-outlined-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-outlined-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-outlined-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-outlined-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-outlined-touch-target-size, 48px);
  display: var(--mat-button-outlined-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-outlined-button:not(:disabled) {
  color: var(--mat-button-outlined-label-text-color, var(--mat-sys-primary));
  border-color: var(--mat-button-outlined-outline-color, var(--mat-sys-outline));
}
.mat-mdc-outlined-button[disabled], .mat-mdc-outlined-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: var(--mat-button-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-tonal-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-tonal-container-height, 40px);
  font-family: var(--mat-button-tonal-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-tonal-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-tonal-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-tonal-label-text-transform);
  font-weight: var(--mat-button-tonal-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-tonal-horizontal-padding, 24px);
}
.mat-tonal-button:not(:disabled) {
  color: var(--mat-button-tonal-label-text-color, var(--mat-sys-on-secondary-container));
  background-color: var(--mat-button-tonal-container-color, var(--mat-sys-secondary-container));
}
.mat-tonal-button, .mat-tonal-button .mdc-button__ripple {
  border-radius: var(--mat-button-tonal-container-shape, var(--mat-sys-corner-full));
}
.mat-tonal-button[disabled], .mat-tonal-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-tonal-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-tonal-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-tonal-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
[dir=rtl] .mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
.mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
[dir=rtl] .mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
.mat-tonal-button .mat-ripple-element {
  background-color: var(--mat-button-tonal-ripple-color, color-mix(in srgb, var(--mat-sys-on-secondary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-state-layer-color, var(--mat-sys-on-secondary-container));
}
.mat-tonal-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-tonal-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-tonal-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-tonal-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-tonal-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-tonal-touch-target-size, 48px);
  display: var(--mat-button-tonal-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-button,
.mat-mdc-unelevated-button,
.mat-mdc-raised-button,
.mat-mdc-outlined-button,
.mat-tonal-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-button .mdc-button__label,
.mat-mdc-button .mat-icon,
.mat-mdc-unelevated-button .mdc-button__label,
.mat-mdc-unelevated-button .mat-icon,
.mat-mdc-raised-button .mdc-button__label,
.mat-mdc-raised-button .mat-icon,
.mat-mdc-outlined-button .mdc-button__label,
.mat-mdc-outlined-button .mat-icon,
.mat-tonal-button .mdc-button__label,
.mat-tonal-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-button .mat-focus-indicator,
.mat-mdc-unelevated-button .mat-focus-indicator,
.mat-mdc-raised-button .mat-focus-indicator,
.mat-mdc-outlined-button .mat-focus-indicator,
.mat-tonal-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-unelevated-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-raised-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-outlined-button:focus-visible > .mat-focus-indicator::before,
.mat-tonal-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-button._mat-animation-noopable,
.mat-mdc-unelevated-button._mat-animation-noopable,
.mat-mdc-raised-button._mat-animation-noopable,
.mat-mdc-outlined-button._mat-animation-noopable,
.mat-tonal-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-button > .mat-icon,
.mat-mdc-unelevated-button > .mat-icon,
.mat-mdc-raised-button > .mat-icon,
.mat-mdc-outlined-button > .mat-icon,
.mat-tonal-button > .mat-icon {
  display: inline-block;
  position: relative;
  vertical-align: top;
  font-size: 1.125rem;
  height: 1.125rem;
  width: 1.125rem;
}

.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mdc-button__ripple {
  top: -1px;
  left: -1px;
  bottom: -1px;
  right: -1px;
}

.mat-mdc-unelevated-button .mat-focus-indicator::before,
.mat-tonal-button .mat-focus-indicator::before,
.mat-mdc-raised-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-outlined-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 3px) * -1);
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return e})();function Cn(e){return e.hasAttribute("mat-raised-button")?"elevated":e.hasAttribute("mat-stroked-button")?"outlined":e.hasAttribute("mat-flat-button")?"filled":e.hasAttribute("mat-button")?"text":null}var Oi=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=M({type:e});static \u0275inj=w({imports:[We,rt]})}return e})();export{$e as a,g as b,f as c,Et as d,x as e,ct as f,Ye as g,dt as h,At as i,xa as j,Ae as k,Je as l,ln as m,bn as n,pn as o,Ne as p,Mt as q,Dt as r,Ct as s,fo as t,ho as u,$ as v,Ao as w,wo as x,Mo as y,ko as z,Fo as A,vn as B,H as C,Uo as D,Ko as E,ai as F,He as G,We as H,Tn as I,Ci as J,Oi as K};
