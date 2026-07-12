import{K as T}from"./chunk-WTLIFXZB.js";import{$a as o,Fa as L,Ga as x,Qa as C,Ta as _,Ua as l,Ub as I,Va as m,W as g,X as f,Z as y,_a as i,aa as v,ab as Z,ba as b,ca as u,cb as k,da as h,fb as D,ga as M,gb as c,hb as w,ib as E,sb as p,ub as s,vb as A,xa as d}from"./chunk-KARBMNKJ.js";var j=["*"];var G=new f("MAT_CARD_CONFIG"),ee=(()=>{class t{appearance;constructor(){let e=y(G,{optional:!0});this.appearance=e?.appearance||"raised"}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=L({type:t,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:8,hostBindings:function(n,r){n&2&&p("mat-mdc-card-outlined",r.appearance==="outlined")("mdc-card--outlined",r.appearance==="outlined")("mat-mdc-card-filled",r.appearance==="filled")("mdc-card--filled",r.appearance==="filled")},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:j,decls:1,vars:0,template:function(n,r){n&1&&(w(),E(0))},styles:[`.mat-mdc-card {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  position: relative;
  border-style: solid;
  border-width: 0;
  background-color: var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));
  border-color: var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));
  border-radius: var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));
  box-shadow: var(--mat-card-elevated-container-elevation, var(--mat-sys-level1));
}
.mat-mdc-card::after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: solid 1px transparent;
  content: "";
  display: block;
  pointer-events: none;
  box-sizing: border-box;
  border-radius: var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));
}

.mat-mdc-card-outlined {
  background-color: var(--mat-card-outlined-container-color, var(--mat-sys-surface));
  border-radius: var(--mat-card-outlined-container-shape, var(--mat-sys-corner-medium));
  border-width: var(--mat-card-outlined-outline-width, 1px);
  border-color: var(--mat-card-outlined-outline-color, var(--mat-sys-outline-variant));
  box-shadow: var(--mat-card-outlined-container-elevation, var(--mat-sys-level0));
}
.mat-mdc-card-outlined::after {
  border: none;
}

.mat-mdc-card-filled {
  background-color: var(--mat-card-filled-container-color, var(--mat-sys-surface-container-highest));
  border-radius: var(--mat-card-filled-container-shape, var(--mat-sys-corner-medium));
  box-shadow: var(--mat-card-filled-container-elevation, var(--mat-sys-level0));
}

.mdc-card__media {
  position: relative;
  box-sizing: border-box;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.mdc-card__media::before {
  display: block;
  content: "";
}
.mdc-card__media:first-child {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}
.mdc-card__media:last-child {
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
}

.mat-mdc-card-actions {
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  padding: 8px;
}

.mat-mdc-card-title {
  font-family: var(--mat-card-title-text-font, var(--mat-sys-title-large-font));
  line-height: var(--mat-card-title-text-line-height, var(--mat-sys-title-large-line-height));
  font-size: var(--mat-card-title-text-size, var(--mat-sys-title-large-size));
  letter-spacing: var(--mat-card-title-text-tracking, var(--mat-sys-title-large-tracking));
  font-weight: var(--mat-card-title-text-weight, var(--mat-sys-title-large-weight));
}

.mat-mdc-card-subtitle {
  color: var(--mat-card-subtitle-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-card-subtitle-text-font, var(--mat-sys-title-medium-font));
  line-height: var(--mat-card-subtitle-text-line-height, var(--mat-sys-title-medium-line-height));
  font-size: var(--mat-card-subtitle-text-size, var(--mat-sys-title-medium-size));
  letter-spacing: var(--mat-card-subtitle-text-tracking, var(--mat-sys-title-medium-tracking));
  font-weight: var(--mat-card-subtitle-text-weight, var(--mat-sys-title-medium-weight));
}

.mat-mdc-card-title,
.mat-mdc-card-subtitle {
  display: block;
  margin: 0;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle {
  padding: 16px 16px 0;
}

.mat-mdc-card-header {
  display: flex;
  padding: 16px 16px 0;
}

.mat-mdc-card-content {
  display: block;
  padding: 0 16px;
}
.mat-mdc-card-content:first-child {
  padding-top: 16px;
}
.mat-mdc-card-content:last-child {
  padding-bottom: 16px;
}

.mat-mdc-card-title-group {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.mat-mdc-card-avatar {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  flex-shrink: 0;
  margin-bottom: 16px;
  object-fit: cover;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title {
  line-height: normal;
}

.mat-mdc-card-sm-image {
  width: 80px;
  height: 80px;
}

.mat-mdc-card-md-image {
  width: 112px;
  height: 112px;
}

.mat-mdc-card-lg-image {
  width: 152px;
  height: 152px;
}

.mat-mdc-card-xl-image {
  width: 240px;
  height: 240px;
}

.mat-mdc-card-subtitle ~ .mat-mdc-card-title,
.mat-mdc-card-title ~ .mat-mdc-card-subtitle,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-title-group .mat-mdc-card-title,
.mat-mdc-card-title-group .mat-mdc-card-subtitle {
  padding-top: 0;
}

.mat-mdc-card-content > :last-child:not(.mat-mdc-card-footer) {
  margin-bottom: 0;
}

.mat-mdc-card-actions-align-end {
  justify-content: flex-end;
}
`],encapsulation:2,changeDetection:0})}return t})();var te=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=x({type:t});static \u0275inj=g({imports:[T]})}return t})();var z={pectorals:["M534 89 L569 75 L605 75 L626 98 L638 114 L648 134 L637 156 L619 167 L596 174 L563 167 L535 158 L502 169 L471 174 L438 160 L422 138 L433 113 L452 93 L464 75 L501 74 Z"],obliques:["M599 176 L600 195 L595 209 L587 214 L587 233 L582 251 L581 269 L578 285 L581 300 L581 314 L584 331 L580 343 L577 364 L603 352 L617 328 L620 305 L619 279 L616 252 L622 233 L628 211 L632 190 L632 168 L613 169 Z","M470 175 L450 168 L435 157 L436 178 L439 201 L445 231 L453 256 L451 276 L450 299 L450 322 L459 338 L471 347 L484 362 L495 365 L488 324 L488 303 L492 278 L487 248 L482 219 L472 204 L469 189 Z"],posterior_tibialis:["M590 669 L582 698 L581 728 L587 751 L597 774 L604 787 L613 763 L616 738 L613 706 L603 682 Z","M478 663 L487 699 L487 727 L481 748 L474 767 L465 785 L455 760 L452 736 L457 705 L465 680 Z"],extensors:["M371 234 L381 271 L381 252 L380 299 L367 328 L363 359 L361 379 L342 388 L347 344 L344 317 L348 281 L354 256 Z","M697 235 L715 262 L721 296 L721 331 L721 362 L726 382 L708 380 L701 331 L691 292 L688 258 Z","M1288 239 L1309 275 L1314 383 L1297 382 L1287 289 L1285 255 Z"],triceps:["M1235 125 L1228 153 L1228 193 L1240 231 L1262 253 L1262 207 L1284 233 L1291 194 L1284 167 L1264 142 Z","M1012 125 L1020 154 L1016 203 L1002 244 L982 254 L988 227 L981 208 L971 220 L958 238 L953 203 L960 176 L975 151 L989 137 Z"],rotators:["M1052 82 L1070 109 L1078 140 L1080 158 L1049 158 L1021 149 L1013 120 L1035 103 Z","M1198 82 L1216 109 L1235 124 L1227 154 L1203 156 L1182 157 L1165 157 L1169 131 L1177 103 L1184 93 Z"],traps:["M1123 227 L1148 187 L1165 156 L1173 115 L1185 92 L1200 79 L1211 68 L1190 52 L1165 36 L1154 18 L1146 -5 L1124 -11 L1103 -5 L1092 20 L1078 40 L1056 52 L1034 66 L1058 85 L1071 112 L1079 147 L1098 189 Z"],lats:["M1020 154 L1024 201 L1032 226 L1043 256 L1066 289 L1083 258 L1116 219 L1095 184 L1082 160 Z","M1165 159 L1226 153 L1223 193 L1213 235 L1204 258 L1183 289 L1156 248 L1129 220 L1150 185 Z"],hamstrings:["M1040 449 L1065 459 L1100 458 L1100 486 L1094 533 L1092 563 L1083 605 L1075 652 L1061 609 L1055 583 L1043 601 L1030 621 L1015 638 L1017 599 L1015 566 L1017 537 L1023 498 Z","M1147 457 L1181 459 L1204 445 L1216 480 L1226 519 L1228 559 L1228 591 L1229 619 L1228 639 L1210 618 L1199 601 L1189 574 L1185 598 L1180 619 L1180 644 L1172 653 L1166 631 L1156 601 L1151 561 L1149 518 L1147 495 Z"],iliotibial_bands:["M1017 390 L1008 434 L1006 472 L1006 516 L1009 574 L1014 590 L1017 538 L1022 503 L1032 468 L1039 448 L1025 403 Z","M1204 448 L1218 493 L1226 532 L1231 578 L1239 528 L1242 470 L1234 432 L1223 389 L1217 426 Z"],glutes:["M1032 331 L1024 351 L1023 369 L1021 386 L1029 421 L1040 443 L1064 458 L1098 454 L1116 440 L1122 431 L1131 442 L1146 453 L1165 458 L1189 453 L1209 438 L1218 408 L1222 382 L1222 362 L1213 337 L1200 324 L1180 323 L1158 334 L1146 346 L1134 361 L1122 371 L1104 349 L1085 332 L1067 322 L1050 323 Z"],lower_back:["M1066 287 L1067 306 L1068 320 L1093 337 L1111 352 L1122 368 L1140 346 L1162 332 L1181 325 L1180 303 L1180 284 L1168 266 L1153 245 L1141 231 L1130 222 L1123 228 L1114 220 L1103 236 L1084 256 Z"],shoulders:["M1278 156 L1278 125 L1270 96 L1249 75 L1218 70 L1196 78 L1207 98 L1222 112 L1235 124 L1257 139 Z","M1045 83 L1034 103 L1012 121 L993 136 L975 151 L969 157 L968 140 L967 120 L970 103 L979 89 L996 77 L1012 70 L1031 69 Z","M605 77 L625 69 L651 73 L675 86 L687 112 L688 139 L686 160 L648 138 L634 109 L613 87 Z","M462 76 L429 70 L407 77 L389 95 L382 116 L381 137 L385 163 L420 136 L435 106 Z"],flexors:["M404 253 L408 278 L401 307 L389 336 L376 361 L372 380 L362 381 L364 361 L368 326 L376 300 L380 279 L386 262 Z","M664 249 L662 285 L669 309 L683 333 L691 352 L698 377 L708 379 L703 343 L695 308 L689 281 L687 267 Z","M980 254 L997 246 L996 273 L996 291 L982 317 L975 337 L967 354 L960 382 L947 381 L951 361 L955 326 L958 296 L976 279 Z","M1248 252 L1263 256 L1269 274 L1280 290 L1289 300 L1291 333 L1293 355 L1294 376 L1294 383 L1284 379 L1279 360 L1263 326 L1252 305 L1247 276 Z"],biceps:["M389 164 L380 189 L376 219 L377 246 L383 264 L403 249 L416 234 L425 216 L431 193 L431 176 L429 160 L421 136 Z","M648 139 L638 155 L635 171 L639 202 L649 227 L659 247 L673 256 L684 262 L693 234 L691 210 L685 183 L685 164 Z"],abs:["M470 176 L471 200 L483 217 L483 234 L489 247 L489 263 L495 284 L489 308 L487 332 L496 367 L511 389 L520 399 L533 401 L548 400 L562 381 L571 371 L579 356 L580 329 L580 308 L577 285 L582 264 L580 248 L585 231 L585 214 L598 201 L599 183 L596 173 L579 173 L562 167 L542 159 L526 162 L497 173 L482 172 Z"],adductors:["M479 361 L506 385 L523 406 L527 423 L530 459 L525 486 L513 514 L508 529 L502 489 L499 449 L487 406 L481 382 Z","M546 404 L543 429 L541 456 L545 484 L563 530 L566 480 L575 445 L586 396 L591 367 L595 358 L575 372 L564 382 Z","M1100 450 L1116 445 L1114 489 L1097 537 L1098 479 Z","M1124 445 L1146 453 L1146 485 L1149 539 L1136 504 L1129 475 Z"],quads:["M444 332 L463 345 L479 363 L484 399 L493 434 L489 468 L483 494 L474 532 L464 552 L453 567 L445 574 L427 547 L420 528 L416 500 L418 457 L427 398 Z","M595 355 L622 333 L632 354 L638 388 L647 421 L648 445 L652 487 L649 524 L642 540 L625 570 L607 552 L595 531 L582 500 L576 456 L577 429 L582 399 Z"],shins:["M1204 616 L1200 647 L1204 689 L1210 726 L1220 745 L1230 760 L1244 768 L1251 724 L1246 690 L1238 658 L1227 636 Z","M1015 643 L1041 620 L1044 639 L1044 661 L1040 694 L1035 720 L1030 741 L1015 760 L1000 764 L996 742 L994 718 L996 692 L1005 663 Z"],feet:["M417 874 L443 863 L457 872 L456 893 L462 913 L462 924 L452 926 L447 939 L436 945 L421 942 L403 943 L383 937 L398 914 L408 904 L415 888 Z","M608 878 L615 868 L628 866 L639 866 L649 871 L649 887 L659 901 L675 916 L684 929 L688 936 L677 943 L656 942 L634 943 L621 937 L616 928 L604 924 L604 908 L609 895 Z","M981 926 L1002 932 L1011 941 L1035 941 L1051 936 L1052 919 L1048 904 L1043 894 L1007 887 L995 897 L987 907 Z","M1196 902 L1240 893 L1252 905 L1265 921 L1261 931 L1237 932 L1218 940 L1195 937 L1192 924 Z"],calves:["M1042 619 L1041 648 L1042 671 L1038 703 L1034 732 L1043 751 L1056 764 L1062 770 L1070 752 L1075 724 L1077 701 L1074 681 L1070 663 L1070 644 L1062 628 L1052 617 Z","M1201 619 L1200 648 L1201 682 L1205 711 L1211 730 L1204 746 L1196 761 L1181 765 L1171 745 L1168 706 L1172 667 L1176 639 L1185 620 Z","M1201 617 L1223 632 L1233 652 L1239 665 L1242 681 L1251 705 L1249 729 L1247 755 L1244 771 L1231 759 L1217 742 L1211 728 L1201 689 L1200 659 Z","M1040 618 L1044 645 L1047 666 L1039 691 L1034 724 L1032 738 L1021 748 L1013 759 L1004 762 L995 739 L995 715 L999 683 L1009 659 L1015 637 L1026 623 Z"]};var O=(t,a)=>a.key;function q(t,a){if(t&1){let e=k();u(),i(0,"path",7),D("click",function(){v(e);let r=c().$implicit,B=c();return b(B.toggleZone(r))}),o()}if(t&2){let e=a.$implicit,n=c().$implicit,r=c();p("clickable",r.interactive),C("d",e)("fill",r.hasActiveZone(n)?"rgba(93,143,240,.58)":"transparent")("stroke",r.hasActiveZone(n)?"#4478de":"transparent")}}function N(t,a){if(t&1&&l(0,q,1,5,":svg:path",6,_),t&2){let e=a.$implicit,n=c();m(n.paths[e.key])}}function $(t,a){if(t&1&&(i(0,"span"),s(1),o()),t&2){let e=a.$implicit;d(),A(e.label)}}function V(t,a){t&1&&(i(0,"small"),s(1,"Sin musculos asociados al mapa."),o())}var P=[{key:"pectorals",label:"Pectorales",synonyms:["pectorales","pectoral","pecho"]},{key:"obliques",label:"Oblicuos",synonyms:["oblicuo","oblicuos"]},{key:"posterior_tibialis",label:"Tibiales posteriores",synonyms:["tibial posterior","tibiales posteriores"]},{key:"extensors",label:"Extensores",synonyms:["extensor","extensores"]},{key:"triceps",label:"Triceps",synonyms:["tricep","triceps"]},{key:"rotators",label:"Rotadores",synonyms:["rotador","rotadores","manguito rotador"]},{key:"traps",label:"Trapecios",synonyms:["trapecio","trapecios"]},{key:"lats",label:"Laterales",synonyms:["laterales","dorsal","dorsales","dorsal ancho"]},{key:"hamstrings",label:"Isquiotibiales",synonyms:["isquio","isquios","femoral","isquiotibial","isquiotibiales"]},{key:"iliotibial_bands",label:"Cintillas iliotibiales",synonyms:["cintilla iliotibial","cintillas iliotibiales","tracto iliotibial"]},{key:"glutes",label:"Gluteos",synonyms:["gluteo","gluteos"]},{key:"lower_back",label:"Musculos lumbares",synonyms:["musculo lumbar","musculos lumbares","lumbar","lumbares","erector","erectores"]},{key:"shoulders",label:"Hombros",synonyms:["hombro","hombros","delto","deltoides"]},{key:"flexors",label:"Flexores",synonyms:["flexor","flexores"]},{key:"biceps",label:"Biceps",synonyms:["bicep","biceps","braquial"]},{key:"abs",label:"Abdominales",synonyms:["abdomen","abdominal","abdominales","recto abdominal","core"]},{key:"adductors",label:"Aductores",synonyms:["aductor","aductores"]},{key:"quads",label:"Cuadriceps",synonyms:["cuadricep","cuadriceps"]},{key:"shins",label:"Espinillas",synonyms:["espinilla","espinillas","tibial anterior"]},{key:"feet",label:"Pies",synonyms:["pies"]},{key:"calves",label:"Pantorrillas",synonyms:["pantorrilla","pantorrillas","gemelo","gemelos","soleo"]}],S=class t{muscleGroup;musclesInvolved;muscles;interactive=!1;selectedLabels;zoneToggle=new M;zones=P;paths=z;activeZones(){let a=this.searchText();return a?P.filter(e=>e.synonyms.some(n=>a.includes(this.normalize(n)))):[]}hasActiveZone(a){return this.activeZones().some(e=>e.key===a.key)}toggleZone(a){this.interactive&&this.zoneToggle.emit(a)}searchText(){if(this.interactive&&this.selectedLabels?.length)return this.normalize(this.selectedLabels.join(" "));let a=(this.muscles??[]).map(e=>`${e.name} ${e.muscleGroupName??""}`).join(" ");return this.normalize(`${this.muscleGroup??""} ${this.musclesInvolved??""} ${a}`)}normalize(a){return a.normalize("NFD").replace(/[\u0300-\u036f]/g,"").trim().toLowerCase()}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=L({type:t,selectors:[["app-exercise-body-map"]],inputs:{muscleGroup:"muscleGroup",musclesInvolved:"musclesInvolved",muscles:"muscles",interactive:"interactive",selectedLabels:"selectedLabels"},outputs:{zoneToggle:"zoneToggle"},decls:16,vars:1,consts:[[1,"exercise-body-map"],[1,"map-canvas"],["src","/body-muscle-map.png","alt","Mapa corporal muscular"],["viewBox","0 0 1664 1248","aria-hidden","true"],["stroke-linejoin","round","stroke-width","3","transform","translate(0 155)"],[1,"active-zone-list"],[3,"clickable"],[3,"click"]],template:function(e,n){e&1&&(i(0,"section",0)(1,"header")(2,"span"),s(3,"Anatomia"),o(),i(4,"strong"),s(5,"Musculos trabajados"),o()(),i(6,"div",1),Z(7,"img",2),u(),i(8,"svg",3)(9,"g",4),l(10,N,2,0,null,null,O),o()()(),h(),i(12,"div",5),l(13,$,2,1,"span",null,O,!1,V,2,0,"small"),o()()),e&2&&(d(10),m(n.zones),d(3),m(n.activeZones()))},dependencies:[I],styles:[".exercise-body-map[_ngcontent-%COMP%]{background:#111827;border:1px solid rgba(148,163,184,.22);border-radius:12px;color:#f8fafc;display:grid;gap:.8rem;overflow:hidden;padding:.85rem}header[_ngcontent-%COMP%]{display:grid;gap:.15rem}header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#ff8d91;font-size:.7rem;font-weight:900;letter-spacing:.06em;text-transform:uppercase}header[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:1rem}.map-canvas[_ngcontent-%COMP%]{aspect-ratio:1664/1248;background:#f8fafc;border-radius:10px;overflow:hidden;position:relative}.map-canvas[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .map-canvas[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{display:block;inset:0;position:absolute;transform-origin:center;width:100%}.map-canvas[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:auto;position:static}.map-canvas[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{height:100%}.map-canvas[_ngcontent-%COMP%]   path.clickable[_ngcontent-%COMP%]{cursor:pointer;pointer-events:all;transition:fill .16s ease,stroke .16s ease}.map-canvas[_ngcontent-%COMP%]   path.clickable[_ngcontent-%COMP%]:hover{fill:#ff8d916b}.active-zone-list[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:.35rem;min-height:27px}.active-zone-list[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{background:#eef4ff;border:1px solid #bfd2ff;border-radius:999px;color:#1d4ed8;font-size:.74rem;font-weight:850;padding:.25rem .55rem}.active-zone-list[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{color:#c9c9cd;font-size:.8rem}"],changeDetection:0})};export{ee as a,te as b,P as c,S as d};
