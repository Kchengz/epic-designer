"use strict";const h=require("./_commonjsHelpers-6763f629.cjs"),F=require("./_vue_commonjs-external-0743e21a.cjs"),p=require("./index-8a4d6b86.cjs"),G=require("./index-a2c63f32.cjs");function oe(e,o){for(var t=0;t<o.length;t++){const n=o[t];if(typeof n!="string"&&!Array.isArray(n)){for(const a in n)if(a!=="default"&&!(a in e)){const i=Object.getOwnPropertyDescriptor(n,a);i&&Object.defineProperty(e,a,i.get?i:{enumerable:!0,get:()=>n[a]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var J={},H={},Q={},L={},U={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.self=void 0;const o=p.common,t=a=>{const{fontWeight:i,textColor1:E,textColor2:C,textColorDisabled:g,dividerColor:l,fontSize:N}=a;return{titleFontSize:N,titleFontWeight:i,dividerColor:l,titleTextColor:E,titleTextColorDisabled:g,fontSize:N,textColor:C,arrowColor:C,arrowColorDisabled:g,itemMargin:"16px 0 0 0",titlePadding:"16px 0 0 0"}};e.self=t;const n={name:"Collapse",common:o.commonLight,self:e.self};e.default=n})(U);Object.defineProperty(L,"__esModule",{value:!0});const le=p.common,re=U,ne={name:"Collapse",common:le.commonDark,self:re.self};L.default=ne;var T={},W={};Object.defineProperty(W,"__esModule",{value:!0});const m=p.cssr;W.default=(0,m.cB)("collapse",[(0,m.cM)("rtl",`
 direction: rtl;
 `,[(0,m.cB)("collapse-item",[(0,m.cB)("collapse-item",{marginRight:"32px",marginLeft:0}),(0,m.cM)("left-arrow-placement",[(0,m.cE)("header",[(0,m.cB)("collapse-item-arrow",{marginRight:0,marginLeft:"4px"})])]),(0,m.cM)("right-arrow-placement",[(0,m.cE)("header",[(0,m.cB)("collapse-item-arrow",{marginLeft:0,marginRight:"4px"})])]),(0,m.cM)("active",[(0,m.cE)("header",[(0,m.cM)("active",[(0,m.cB)("collapse-item-arrow",{transform:"rotate(-90deg)"})])])])])])]);var ae=h.commonjsGlobal&&h.commonjsGlobal.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(T,"__esModule",{value:!0});T.collapseRtl=void 0;const ie=ae(W);T.collapseRtl={name:"Collapse",style:ie.default};(function(e){var o=h.commonjsGlobal&&h.commonjsGlobal.__importDefault||function(i){return i&&i.__esModule?i:{default:i}};Object.defineProperty(e,"__esModule",{value:!0}),e.collapseRtl=e.collapseLight=e.collapseDark=void 0;var t=L;Object.defineProperty(e,"collapseDark",{enumerable:!0,get:function(){return o(t).default}});var n=U;Object.defineProperty(e,"collapseLight",{enumerable:!0,get:function(){return o(n).default}});var a=T;Object.defineProperty(e,"collapseRtl",{enumerable:!0,get:function(){return a.collapseRtl}})})(Q);var K={},q={},se=h.commonjsGlobal&&h.commonjsGlobal.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(q,"__esModule",{value:!0});q.fadeInHeightExpandTransition=void 0;const k=p.cssr,ce=se(p._common),{cubicBezierEaseInOut:$,cubicBezierEaseOut:de,cubicBezierEaseIn:ue}=ce.default;function pe({overflow:e="hidden",duration:o=".3s",originalTransition:t="",leavingDelay:n="0s",foldPadding:a=!1,enterToProps:i=void 0,leaveToProps:E=void 0,reverse:C=!1}={}){const g=C?"leave":"enter",l=C?"enter":"leave";return[(0,k.c)(`&.fade-in-height-expand-transition-${l}-from,
 &.fade-in-height-expand-transition-${g}-to`,Object.assign(Object.assign({},i),{opacity:1})),(0,k.c)(`&.fade-in-height-expand-transition-${l}-to,
 &.fade-in-height-expand-transition-${g}-from`,Object.assign(Object.assign({},E),{opacity:0,marginTop:"0 !important",marginBottom:"0 !important",paddingTop:a?"0 !important":void 0,paddingBottom:a?"0 !important":void 0})),(0,k.c)(`&.fade-in-height-expand-transition-${l}-active`,`
 overflow: ${e};
 transition:
 max-height ${o} ${$} ${n},
 opacity ${o} ${de} ${n},
 margin-top ${o} ${$} ${n},
 margin-bottom ${o} ${$} ${n},
 padding-top ${o} ${$} ${n},
 padding-bottom ${o} ${$} ${n}
 ${t?","+t:""}
 `),(0,k.c)(`&.fade-in-height-expand-transition-${g}-active`,`
 overflow: ${e};
 transition:
 max-height ${o} ${$},
 opacity ${o} ${ue},
 margin-top ${o} ${$},
 margin-bottom ${o} ${$},
 padding-top ${o} ${$},
 padding-bottom ${o} ${$}
 ${t?","+t:""}
 `)]}q.fadeInHeightExpandTransition=pe;Object.defineProperty(K,"__esModule",{value:!0});const r=p.cssr,fe=q;K.default=(0,r.cB)("collapse","width: 100%;",[(0,r.cB)("collapse-item",`
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 margin: var(--n-item-margin);
 `,[(0,r.cM)("disabled",[(0,r.cE)("header","cursor: not-allowed;",[(0,r.cE)("header-main",`
 color: var(--n-title-text-color-disabled);
 `),(0,r.cB)("collapse-item-arrow",`
 color: var(--n-arrow-color-disabled);
 `)])]),(0,r.cB)("collapse-item","margin-left: 32px;"),(0,r.c)("&:first-child","margin-top: 0;"),(0,r.c)("&:first-child >",[(0,r.cE)("header","padding-top: 0;")]),(0,r.cM)("left-arrow-placement",[(0,r.cE)("header",[(0,r.cB)("collapse-item-arrow","margin-right: 4px;")])]),(0,r.cM)("right-arrow-placement",[(0,r.cE)("header",[(0,r.cB)("collapse-item-arrow","margin-left: 4px;")])]),(0,r.cE)("content-wrapper",[(0,r.cE)("content-inner","padding-top: 16px;"),(0,fe.fadeInHeightExpandTransition)({duration:"0.15s"})]),(0,r.cM)("active",[(0,r.cE)("header",[(0,r.cM)("active",[(0,r.cB)("collapse-item-arrow","transform: rotate(90deg);")])])]),(0,r.c)("&:not(:first-child)","border-top: 1px solid var(--n-divider-color);"),(0,r.cE)("header",`
 font-size: var(--n-title-font-size);
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 transition: color .3s var(--n-bezier);
 position: relative;
 padding: var(--n-title-padding);
 color: var(--n-title-text-color);
 cursor: pointer;
 `,[(0,r.cE)("header-main",`
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 flex: 1;
 color: var(--n-title-text-color);
 `),(0,r.cE)("header-extra",`
 display: flex;
 align-items: center;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),(0,r.cB)("collapse-item-arrow",`
 display: flex;
 transition:
 transform .15s var(--n-bezier),
 color .3s var(--n-bezier);
 font-size: 18px;
 color: var(--n-arrow-color);
 `)])])]);(function(e){var o=h.commonjsGlobal&&h.commonjsGlobal.__importDefault||function(l){return l&&l.__esModule?l:{default:l}};Object.defineProperty(e,"__esModule",{value:!0}),e.collapseInjectionKey=e.collapseProps=void 0;const t=F.require$$0,n=p.require$$2,a=p._mixins,i=p._utils,E=Q,C=o(K),g=p.useRtl;e.collapseProps=Object.assign(Object.assign({},a.useTheme.props),{defaultExpandedNames:{type:[Array,String],default:null},expandedNames:[Array,String],arrowPlacement:{type:String,default:"left"},accordion:{type:Boolean,default:!1},displayDirective:{type:String,default:"if"},onItemHeaderClick:[Function,Array],"onUpdate:expandedNames":[Function,Array],onUpdateExpandedNames:[Function,Array],onExpandedNamesChange:{type:[Function,Array],validator:()=>(process.env.NODE_ENV!=="production"&&(0,i.warn)("collapse","`on-expanded-names-change` is deprecated, please use `on-update:expanded-names` instead."),!0),default:void 0}}),e.collapseInjectionKey=(0,i.createInjectionKey)("n-collapse"),e.default=(0,t.defineComponent)({name:"Collapse",props:e.collapseProps,setup(l,{slots:N}){const{mergedClsPrefixRef:O,inlineThemeDisabled:d,mergedRtlRef:j}=(0,a.useConfig)(l),y=(0,t.ref)(l.defaultExpandedNames),_=(0,t.computed)(()=>l.expandedNames),P=(0,n.useMergedState)(_,y),u=(0,a.useTheme)("Collapse","-collapse",C.default,E.collapseLight,l,O);function b(f){const{"onUpdate:expandedNames":c,onUpdateExpandedNames:x,onExpandedNamesChange:D}=l;x&&(0,i.call)(x,f),c&&(0,i.call)(c,f),D&&(0,i.call)(D,f),y.value=f}function v(f){const{onItemHeaderClick:c}=l;c&&(0,i.call)(c,f)}function S(f,c,x){const{accordion:D}=l,{value:z}=P;if(D)f?(b([c]),v({name:c,expanded:!0,event:x})):(b([]),v({name:c,expanded:!1,event:x}));else if(!Array.isArray(z))b([c]),v({name:c,expanded:!0,event:x});else{const I=z.slice(),B=I.findIndex(A=>c===A);~B?(I.splice(B,1),b(I),v({name:c,expanded:!1,event:x})):(I.push(c),b(I),v({name:c,expanded:!0,event:x}))}}(0,t.provide)(e.collapseInjectionKey,{props:l,mergedClsPrefixRef:O,expandedNamesRef:P,slots:N,toggleItem:S});const M=(0,g.useRtl)("Collapse",j,O),w=(0,t.computed)(()=>{const{common:{cubicBezierEaseInOut:f},self:{titleFontWeight:c,dividerColor:x,titlePadding:D,titleTextColor:z,titleTextColorDisabled:I,textColor:B,arrowColor:A,fontSize:Y,titleFontSize:Z,arrowColorDisabled:ee,itemMargin:te}}=u.value;return{"--n-font-size":Y,"--n-bezier":f,"--n-text-color":B,"--n-divider-color":x,"--n-title-padding":D,"--n-title-font-size":Z,"--n-title-text-color":z,"--n-title-text-color-disabled":I,"--n-title-font-weight":c,"--n-arrow-color":A,"--n-arrow-color-disabled":ee,"--n-item-margin":te}}),s=d?(0,a.useThemeClass)("collapse",void 0,w,l):void 0;return{rtlEnabled:M,mergedTheme:u,mergedClsPrefix:O,cssVars:d?void 0:w,themeClass:s==null?void 0:s.themeClass,onRender:s==null?void 0:s.onRender}},render(){var l;return(l=this.onRender)===null||l===void 0||l.call(this),(0,t.h)("div",{class:[`${this.mergedClsPrefix}-collapse`,this.rtlEnabled&&`${this.mergedClsPrefix}-collapse--rtl`,this.themeClass],style:this.cssVars},this.$slots)}})})(H);var X={},V={};Object.defineProperty(V,"__esModule",{value:!0});const R=F.require$$0,me=p.require$$2,_e=G._internal;V.default=(0,R.defineComponent)({name:"CollapseItemContent",props:{displayDirective:{type:String,required:!0},show:Boolean,clsPrefix:{type:String,required:!0}},setup(e){return{onceTrue:(0,me.useFalseUntilTruthy)((0,R.toRef)(e,"show"))}},render(){return(0,R.h)(_e.NFadeInExpandTransition,null,{default:()=>{const{show:e,displayDirective:o,onceTrue:t,clsPrefix:n}=this,a=o==="show"&&t,i=(0,R.h)("div",{class:`${n}-collapse-item__content-wrapper`},(0,R.h)("div",{class:`${n}-collapse-item__content-inner`},this.$slots));return a?(0,R.withDirectives)(i,[[R.vShow,e]]):e?i:null}})}});(function(e){var o=h.commonjsGlobal&&h.commonjsGlobal.__importDefault||function(d){return d&&d.__esModule?d:{default:d}};Object.defineProperty(e,"__esModule",{value:!0}),e.collapseItemProps=void 0;const t=F.require$$0,n=p.require$$1,a=p.require$$2,i=G.icons,E=p.useRtl,C=p._mixins,g=G._internal,l=p._utils,N=H,O=o(V);e.collapseItemProps={title:String,name:[String,Number],disabled:Boolean,displayDirective:String},e.default=(0,t.defineComponent)({name:"CollapseItem",props:e.collapseItemProps,setup(d){const{mergedRtlRef:j}=(0,C.useConfig)(d),y=(0,n.createId)(),_=(0,a.useMemo)(()=>{var s;return(s=d.name)!==null&&s!==void 0?s:y}),P=(0,t.inject)(N.collapseInjectionKey);P||(0,l.throwError)("collapse-item","`n-collapse-item` must be placed inside `n-collapse`.");const{expandedNamesRef:u,props:b,mergedClsPrefixRef:v,slots:S}=P,M=(0,t.computed)(()=>{const{value:s}=u;if(Array.isArray(s)){const{value:f}=_;return!~s.findIndex(c=>c===f)}else if(s){const{value:f}=_;return f!==s}return!0});return{rtlEnabled:(0,E.useRtl)("Collapse",j,v),collapseSlots:S,randomName:y,mergedClsPrefix:v,collapsed:M,mergedDisplayDirective:(0,t.computed)(()=>{const{displayDirective:s}=d;return s||b.displayDirective}),arrowPlacement:(0,t.computed)(()=>b.arrowPlacement),handleClick(s){P&&!d.disabled&&P.toggleItem(M.value,_.value,s)}}},render(){const{collapseSlots:d,$slots:j,arrowPlacement:y,collapsed:_,mergedDisplayDirective:P,mergedClsPrefix:u,disabled:b}=this,v=(0,l.resolveSlotWithProps)(j.header,{collapsed:_},()=>[this.title]),S=j["header-extra"]||d["header-extra"],M=j.arrow||d.arrow;return(0,t.h)("div",{class:[`${u}-collapse-item`,`${u}-collapse-item--${y}-arrow-placement`,b&&`${u}-collapse-item--disabled`,!_&&`${u}-collapse-item--active`]},(0,t.h)("div",{class:[`${u}-collapse-item__header`,!_&&`${u}-collapse-item__header--active`]},(0,t.h)("div",{class:`${u}-collapse-item__header-main`,onClick:this.handleClick},y==="right"&&v,(0,t.h)("div",{class:`${u}-collapse-item-arrow`,key:this.rtlEnabled?0:1},(0,l.resolveSlotWithProps)(M,{collapsed:_},()=>{var w;return[(0,t.h)(g.NBaseIcon,{clsPrefix:u},{default:(w=d.expandIcon)!==null&&w!==void 0?w:()=>this.rtlEnabled?(0,t.h)(i.ChevronLeftIcon,null):(0,t.h)(i.ChevronRightIcon,null)})]})),y==="left"&&v),(0,l.resolveWrappedSlotWithProps)(S,{collapsed:_},w=>(0,t.h)("div",{class:`${u}-collapse-item__header-extra`,onClick:this.handleClick},w))),(0,t.h)(O.default,{clsPrefix:u,displayDirective:P,show:!_},j))}})})(X);(function(e){var o=h.commonjsGlobal&&h.commonjsGlobal.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(e,"__esModule",{value:!0}),e.collapseItemProps=e.NCollapseItem=e.collapseProps=e.NCollapse=void 0;var t=H;Object.defineProperty(e,"NCollapse",{enumerable:!0,get:function(){return o(t).default}}),Object.defineProperty(e,"collapseProps",{enumerable:!0,get:function(){return t.collapseProps}});var n=X;Object.defineProperty(e,"NCollapseItem",{enumerable:!0,get:function(){return o(n).default}}),Object.defineProperty(e,"collapseItemProps",{enumerable:!0,get:function(){return n.collapseItemProps}})})(J);const he=oe({__proto__:null},[J]);exports.index=he;
