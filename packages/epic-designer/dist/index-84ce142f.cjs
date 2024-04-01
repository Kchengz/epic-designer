"use strict";const k=require("./_commonjsHelpers-6763f629.cjs"),xe=require("./_vue_commonjs-external-0743e21a.cjs"),R=require("./index-8a4d6b86.cjs"),to=require("./fade-in-scale-up.cssr-b13248bc.cjs");function ro(l,v){for(var n=0;n<v.length;n++){const d=v[n];if(typeof d!="string"&&!Array.isArray(d)){for(const u in d)if(u!=="default"&&!(u in l)){const h=Object.getOwnPropertyDescriptor(d,u);h&&Object.defineProperty(l,u,h.get?h:{enumerable:!0,get:()=>d[u]})}}}return Object.freeze(Object.defineProperty(l,Symbol.toStringTag,{value:"Module"}))}var we={},_e={},ye={},te={},q={};Object.defineProperty(q,"__esModule",{value:!0});q.default={railHeight:"4px",railWidthVertical:"4px",handleSize:"18px",dotHeight:"8px",dotWidth:"8px",dotBorderRadius:"4px"};var no=k.commonjsGlobal&&k.commonjsGlobal.__importDefault||function(l){return l&&l.__esModule?l:{default:l}};Object.defineProperty(te,"__esModule",{value:!0});const ao=no(q),lo=R.common,io={name:"Slider",common:lo.commonDark,self(l){const v="0 2px 8px 0 rgba(0, 0, 0, 0.12)",{railColor:n,modalColor:d,primaryColorSuppl:u,popoverColor:h,textColor2:_,cardColor:y,borderRadius:V,fontSize:S,opacityDisabled:$}=l;return Object.assign(Object.assign({},ao.default),{fontSize:S,markFontSize:S,railColor:n,railColorHover:n,fillColor:u,fillColorHover:u,opacityDisabled:$,handleColor:"#FFF",dotColor:y,dotColorModal:d,dotColorPopover:h,handleBoxShadow:"0px 2px 4px 0 rgba(0, 0, 0, 0.4)",handleBoxShadowHover:"0px 2px 4px 0 rgba(0, 0, 0, 0.4)",handleBoxShadowActive:"0px 2px 4px 0 rgba(0, 0, 0, 0.4)",handleBoxShadowFocus:"0px 2px 4px 0 rgba(0, 0, 0, 0.4)",indicatorColor:h,indicatorBoxShadow:v,indicatorTextColor:_,indicatorBorderRadius:V,dotBorder:`2px solid ${n}`,dotBorderActive:`2px solid ${u}`,dotBoxShadow:""})}};te.default=io;var re={},so=k.commonjsGlobal&&k.commonjsGlobal.__importDefault||function(l){return l&&l.__esModule?l:{default:l}};Object.defineProperty(re,"__esModule",{value:!0});const co=so(q),uo=R.common,ho=l=>{const v="rgba(0, 0, 0, .85)",n="0 2px 8px 0 rgba(0, 0, 0, 0.12)",{railColor:d,primaryColor:u,baseColor:h,cardColor:_,modalColor:y,popoverColor:V,borderRadius:S,fontSize:$,opacityDisabled:K}=l;return Object.assign(Object.assign({},co.default),{fontSize:$,markFontSize:$,railColor:d,railColorHover:d,fillColor:u,fillColorHover:u,opacityDisabled:K,handleColor:"#FFF",dotColor:_,dotColorModal:y,dotColorPopover:V,handleBoxShadow:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",handleBoxShadowHover:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",handleBoxShadowActive:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",handleBoxShadowFocus:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",indicatorColor:v,indicatorBoxShadow:n,indicatorTextColor:h,indicatorBorderRadius:S,dotBorder:`2px solid ${d}`,dotBorderActive:`2px solid ${u}`,dotBoxShadow:""})},fo={name:"Slider",common:uo.commonLight,self:ho};re.default=fo;(function(l){var v=k.commonjsGlobal&&k.commonjsGlobal.__importDefault||function(u){return u&&u.__esModule?u:{default:u}};Object.defineProperty(l,"__esModule",{value:!0}),l.sliderLight=l.sliderDark=void 0;var n=te;Object.defineProperty(l,"sliderDark",{enumerable:!0,get:function(){return v(n).default}});var d=re;Object.defineProperty(l,"sliderLight",{enumerable:!0,get:function(){return v(d).default}})})(ye);var P={};Object.defineProperty(P,"__esModule",{value:!0});P.useRefs=P.isTouchEvent=void 0;const pe=xe.require$$0;function vo(l){return window.TouchEvent&&l instanceof window.TouchEvent}P.isTouchEvent=vo;function mo(){const l=(0,pe.ref)(new Map),v=n=>d=>{l.value.set(n,d)};return(0,pe.onBeforeUpdate)(()=>{l.value.clear()}),[l,v]}P.useRefs=mo;var ne={};Object.defineProperty(ne,"__esModule",{value:!0});const r=R.cssr,ge=to.fadeInScaleUp_cssr;ne.default=(0,r.c)([(0,r.cB)("slider",`
 display: block;
 padding: calc((var(--n-handle-size) - var(--n-rail-height)) / 2) 0;
 position: relative;
 z-index: 0;
 width: 100%;
 cursor: pointer;
 user-select: none;
 -webkit-user-select: none;
 `,[(0,r.cM)("reverse",[(0,r.cB)("slider-handles",[(0,r.cB)("slider-handle-wrapper",`
 transform: translate(50%, -50%);
 `)]),(0,r.cB)("slider-dots",[(0,r.cB)("slider-dot",`
 transform: translateX(50%, -50%);
 `)]),(0,r.cM)("vertical",[(0,r.cB)("slider-handles",[(0,r.cB)("slider-handle-wrapper",`
 transform: translate(-50%, -50%);
 `)]),(0,r.cB)("slider-marks",[(0,r.cB)("slider-mark",`
 transform: translateY(calc(-50% + var(--n-dot-height) / 2));
 `)]),(0,r.cB)("slider-dots",[(0,r.cB)("slider-dot",`
 transform: translateX(-50%) translateY(0);
 `)])])]),(0,r.cM)("vertical",`
 padding: 0 calc((var(--n-handle-size) - var(--n-rail-height)) / 2);
 width: var(--n-rail-width-vertical);
 height: 100%;
 `,[(0,r.cB)("slider-handles",`
 top: calc(var(--n-handle-size) / 2);
 right: 0;
 bottom: calc(var(--n-handle-size) / 2);
 left: 0;
 `,[(0,r.cB)("slider-handle-wrapper",`
 top: unset;
 left: 50%;
 transform: translate(-50%, 50%);
 `)]),(0,r.cB)("slider-rail",`
 height: 100%;
 `,[(0,r.cE)("fill",`
 top: unset;
 right: 0;
 bottom: unset;
 left: 0;
 `)]),(0,r.cM)("with-mark",`
 width: var(--n-rail-width-vertical);
 margin: 0 32px 0 8px;
 `),(0,r.cB)("slider-marks",`
 top: calc(var(--n-handle-size) / 2);
 right: unset;
 bottom: calc(var(--n-handle-size) / 2);
 left: 22px;
 font-size: var(--n-mark-font-size);
 `,[(0,r.cB)("slider-mark",`
 transform: translateY(50%);
 white-space: nowrap;
 `)]),(0,r.cB)("slider-dots",`
 top: calc(var(--n-handle-size) / 2);
 right: unset;
 bottom: calc(var(--n-handle-size) / 2);
 left: 50%;
 `,[(0,r.cB)("slider-dot",`
 transform: translateX(-50%) translateY(50%);
 `)])]),(0,r.cM)("disabled",`
 cursor: not-allowed;
 opacity: var(--n-opacity-disabled);
 `,[(0,r.cB)("slider-handle",`
 cursor: not-allowed;
 `)]),(0,r.cM)("with-mark",`
 width: 100%;
 margin: 8px 0 32px 0;
 `),(0,r.c)("&:hover",[(0,r.cB)("slider-rail",{backgroundColor:"var(--n-rail-color-hover)"},[(0,r.cE)("fill",{backgroundColor:"var(--n-fill-color-hover)"})]),(0,r.cB)("slider-handle",{boxShadow:"var(--n-handle-box-shadow-hover)"})]),(0,r.cM)("active",[(0,r.cB)("slider-rail",{backgroundColor:"var(--n-rail-color-hover)"},[(0,r.cE)("fill",{backgroundColor:"var(--n-fill-color-hover)"})]),(0,r.cB)("slider-handle",{boxShadow:"var(--n-handle-box-shadow-hover)"})]),(0,r.cB)("slider-marks",`
 position: absolute;
 top: 18px;
 left: calc(var(--n-handle-size) / 2);
 right: calc(var(--n-handle-size) / 2);
 `,[(0,r.cB)("slider-mark",`
 position: absolute;
 transform: translateX(-50%);
 white-space: nowrap;
 `)]),(0,r.cB)("slider-rail",`
 width: 100%;
 position: relative;
 height: var(--n-rail-height);
 background-color: var(--n-rail-color);
 transition: background-color .3s var(--n-bezier);
 border-radius: calc(var(--n-rail-height) / 2);
 `,[(0,r.cE)("fill",`
 position: absolute;
 top: 0;
 bottom: 0;
 border-radius: calc(var(--n-rail-height) / 2);
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-fill-color);
 `)]),(0,r.cB)("slider-handles",`
 position: absolute;
 top: 0;
 right: calc(var(--n-handle-size) / 2);
 bottom: 0;
 left: calc(var(--n-handle-size) / 2);
 `,[(0,r.cB)("slider-handle-wrapper",`
 outline: none;
 position: absolute;
 top: 50%;
 transform: translate(-50%, -50%);
 cursor: pointer;
 display: flex;
 `,[(0,r.cB)("slider-handle",`
 height: var(--n-handle-size);
 width: var(--n-handle-size);
 border-radius: 50%;
 overflow: hidden;
 transition: box-shadow .2s var(--n-bezier), background-color .3s var(--n-bezier);
 background-color: var(--n-handle-color);
 box-shadow: var(--n-handle-box-shadow);
 `,[(0,r.c)("&:hover",`
 box-shadow: var(--n-handle-box-shadow-hover);
 `)]),(0,r.c)("&:focus",[(0,r.cB)("slider-handle",`
 box-shadow: var(--n-handle-box-shadow-focus);
 `,[(0,r.c)("&:hover",`
 box-shadow: var(--n-handle-box-shadow-active);
 `)])])])]),(0,r.cB)("slider-dots",`
 position: absolute;
 top: 50%;
 left: calc(var(--n-handle-size) / 2);
 right: calc(var(--n-handle-size) / 2);
 `,[(0,r.cM)("transition-disabled",[(0,r.cB)("slider-dot","transition: none;")]),(0,r.cB)("slider-dot",`
 transition:
 border-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 position: absolute;
 transform: translate(-50%, -50%);
 height: var(--n-dot-height);
 width: var(--n-dot-width);
 border-radius: var(--n-dot-border-radius);
 overflow: hidden;
 box-sizing: border-box;
 border: var(--n-dot-border);
 background-color: var(--n-dot-color);
 `,[(0,r.cM)("active","border: var(--n-dot-border-active);")])])]),(0,r.cB)("slider-handle-indicator",`
 font-size: var(--n-font-size);
 padding: 6px 10px;
 border-radius: var(--n-indicator-border-radius);
 color: var(--n-indicator-text-color);
 background-color: var(--n-indicator-color);
 box-shadow: var(--n-indicator-box-shadow);
 `,[(0,ge.fadeInScaleUpTransition)()]),(0,r.cB)("slider-handle-indicator",`
 font-size: var(--n-font-size);
 padding: 6px 10px;
 border-radius: var(--n-indicator-border-radius);
 color: var(--n-indicator-text-color);
 background-color: var(--n-indicator-color);
 box-shadow: var(--n-indicator-box-shadow);
 `,[(0,r.cM)("top",`
 margin-bottom: 12px;
 `),(0,r.cM)("right",`
 margin-left: 12px;
 `),(0,r.cM)("bottom",`
 margin-top: 12px;
 `),(0,r.cM)("left",`
 margin-right: 12px;
 `),(0,ge.fadeInScaleUpTransition)()]),(0,r.insideModal)((0,r.cB)("slider",[(0,r.cB)("slider-dot","background-color: var(--n-dot-color-modal);")])),(0,r.insidePopover)((0,r.cB)("slider",[(0,r.cB)("slider-dot","background-color: var(--n-dot-color-popover);")]))]);(function(l){var v=k.commonjsGlobal&&k.commonjsGlobal.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(l,"__esModule",{value:!0}),l.sliderProps=void 0;const n=xe.require$$0,d=R.require$$1$1,u=R.require$$2,h=R.require$$3,_=R._mixins,y=R._utils,V=ye,S=P,$=v(ne),K=0;l.sliderProps=Object.assign(Object.assign({},_.useTheme.props),{to:y.useAdjustedTo.propTo,defaultValue:{type:[Number,Array],default:0},marks:Object,disabled:{type:Boolean,default:void 0},formatTooltip:Function,keyboard:{type:Boolean,default:!0},min:{type:Number,default:0},max:{type:Number,default:100},step:{type:[Number,String],default:1},range:Boolean,value:[Number,Array],placement:String,showTooltip:{type:Boolean,default:void 0},tooltip:{type:Boolean,default:!0},vertical:Boolean,reverse:Boolean,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array]}),l.default=(0,n.defineComponent)({name:"Slider",props:l.sliderProps,setup(a){const{mergedClsPrefixRef:c,namespaceRef:X,inlineThemeDisabled:M}=(0,_.useConfig)(a),g=(0,_.useTheme)("Slider","-slider",$.default,V.sliderLight,a,c),m=(0,n.ref)(null),[F,O]=(0,S.useRefs)(),[Be,ke]=(0,S.useRefs)(),Se=(0,n.ref)(new Set),ae=(0,_.useFormItem)(a),{mergedDisabledRef:H}=ae,le=(0,n.computed)(()=>{const{step:e}=a;if(Number(e)<=0||e==="mark")return 0;const o=e.toString();let t=0;return o.includes(".")&&(t=o.length-o.indexOf(".")-1),t}),Y=(0,n.ref)(a.defaultValue),Ce=(0,n.toRef)(a,"value"),W=(0,u.useMergedState)(Ce,Y),x=(0,n.computed)(()=>{const{value:e}=W;return(a.range?e:[e]).map(fe)}),ie=(0,n.computed)(()=>x.value.length>2),Re=(0,n.computed)(()=>a.placement===void 0?a.vertical?"right":"top":a.placement),se=(0,n.computed)(()=>{const{marks:e}=a;return e?Object.keys(e).map(parseFloat):null}),w=(0,n.ref)(-1),de=(0,n.ref)(-1),T=(0,n.ref)(-1),z=(0,n.ref)(!1),I=(0,n.ref)(!1),J=(0,n.computed)(()=>{const{vertical:e,reverse:o}=a;return e?o?"top":"bottom":o?"right":"left"}),Me=(0,n.computed)(()=>{if(ie.value)return;const e=x.value,o=A(a.range?Math.min(...e):a.min),t=A(a.range?Math.max(...e):e[0]),{value:i}=J;return a.vertical?{[i]:`${o}%`,height:`${t-o}%`}:{[i]:`${o}%`,width:`${t-o}%`}}),Te=(0,n.computed)(()=>{const e=[],{marks:o}=a;if(o){const t=x.value.slice();t.sort((b,p)=>b-p);const{value:i}=J,{value:s}=ie,{range:f}=a,B=s?()=>!1:b=>f?b>=t[0]&&b<=t[t.length-1]:b<=t[0];for(const b of Object.keys(o)){const p=Number(b);e.push({active:B(p),label:o[b],style:{[i]:`${A(p)}%`}})}}return e});function ze(e,o){const t=A(e),{value:i}=J;return{[i]:`${t}%`,zIndex:o===w.value?1:0}}function ce(e){return a.showTooltip||T.value===e||w.value===e&&z.value}function $e(e){return z.value?!(w.value===e&&de.value===e):!0}function je(e){var o;~e&&(w.value=e,(o=F.value.get(e))===null||o===void 0||o.focus())}function De(){Be.value.forEach((e,o)=>{ce(o)&&e.syncPosition()})}function ue(e){const{"onUpdate:value":o,onUpdateValue:t}=a,{nTriggerFormInput:i,nTriggerFormChange:s}=ae;t&&(0,y.call)(t,e),o&&(0,y.call)(o,e),Y.value=e,i(),s()}function he(e){const{range:o}=a;if(o){if(Array.isArray(e)){const{value:t}=x;e.join()!==t.join()&&ue(e)}}else Array.isArray(e)||x.value[0]!==e&&ue(e)}function Q(e,o){if(a.range){const t=x.value.slice();t.splice(o,1,e),he(t)}else he(e)}function Z(e,o,t){const i=t!==void 0;t||(t=e-o>0?1:-1);const s=se.value||[],{step:f}=a;if(f==="mark"){const p=E(e,s.concat(o),i?t:void 0);return p?p.value:o}if(f<=0)return o;const{value:B}=le;let b;if(i){const p=Number((o/f).toFixed(B)),C=Math.floor(p),ee=p>C?C:C-1,oe=p<C?C:C+1;b=E(o,[Number((ee*f).toFixed(B)),Number((oe*f).toFixed(B)),...s],t)}else{const p=Ve(e);b=E(e,[...s,p])}return b?fe(b.value):o}function fe(e){return Math.min(a.max,Math.max(a.min,e))}function A(e){const{max:o,min:t}=a;return(e-t)/(o-t)*100}function Pe(e){const{max:o,min:t}=a;return t+(o-t)*e}function Ve(e){const{step:o,min:t}=a;if(Number(o)<=0||o==="mark")return e;const i=Math.round((e-t)/o)*o+t;return Number(i.toFixed(le.value))}function E(e,o=se.value,t){if(!(o!=null&&o.length))return null;let i=null,s=-1;for(;++s<o.length;){const f=o[s]-e,B=Math.abs(f);(t===void 0||f*t>0)&&(i===null||B<i.distance)&&(i={index:s,distance:B,value:o[s]})}return i}function ve(e){const o=m.value;if(!o)return;const t=(0,S.isTouchEvent)(e)?e.touches[0]:e,i=o.getBoundingClientRect();let s;return a.vertical?s=(i.bottom-t.clientY)/i.height:s=(t.clientX-i.left)/i.width,a.reverse&&(s=1-s),Pe(s)}function Oe(e){if(H.value||!a.keyboard)return;const{vertical:o,reverse:t}=a;switch(e.key){case"ArrowUp":e.preventDefault(),N(o&&t?-1:1);break;case"ArrowRight":e.preventDefault(),N(!o&&t?-1:1);break;case"ArrowDown":e.preventDefault(),N(o&&t?1:-1);break;case"ArrowLeft":e.preventDefault(),N(!o&&t?1:-1);break}}function N(e){const o=w.value;if(o===-1)return;const{step:t}=a,i=x.value[o],s=Number(t)<=0||t==="mark"?i:i+t*e;Q(Z(s,i,e>0?1:-1),o)}function Fe(e){var o,t;if(H.value||!(0,S.isTouchEvent)(e)&&e.button!==K)return;const i=ve(e);if(i===void 0)return;const s=x.value.slice(),f=a.range?(t=(o=E(i,s))===null||o===void 0?void 0:o.index)!==null&&t!==void 0?t:-1:0;f!==-1&&(e.preventDefault(),je(f),He(),Q(Z(i,x.value[f]),f))}function He(){z.value||(z.value=!0,(0,h.on)("touchend",document,L),(0,h.on)("mouseup",document,L),(0,h.on)("touchmove",document,G),(0,h.on)("mousemove",document,G))}function U(){z.value&&(z.value=!1,(0,h.off)("touchend",document,L),(0,h.off)("mouseup",document,L),(0,h.off)("touchmove",document,G),(0,h.off)("mousemove",document,G))}function G(e){const{value:o}=w;if(!z.value||o===-1){U();return}const t=ve(e);Q(Z(t,x.value[o]),o)}function L(){U()}function Ie(e){w.value=e,H.value||(T.value=e)}function Ae(e){w.value===e&&(w.value=-1,U()),T.value===e&&(T.value=-1)}function Ee(e){T.value=e}function Ne(e){T.value===e&&(T.value=-1)}(0,n.watch)(w,(e,o)=>void(0,n.nextTick)(()=>de.value=o)),(0,n.watch)(W,()=>{if(a.marks){if(I.value)return;I.value=!0,(0,n.nextTick)(()=>{I.value=!1})}(0,n.nextTick)(De)}),(0,n.onBeforeUnmount)(()=>{U()});const me=(0,n.computed)(()=>{const{self:{markFontSize:e,railColor:o,railColorHover:t,fillColor:i,fillColorHover:s,handleColor:f,opacityDisabled:B,dotColor:b,dotColorModal:p,handleBoxShadow:C,handleBoxShadowHover:ee,handleBoxShadowActive:oe,handleBoxShadowFocus:Ue,dotBorder:Ge,dotBoxShadow:Le,railHeight:qe,railWidthVertical:Ke,handleSize:Xe,dotHeight:Ye,dotWidth:We,dotBorderRadius:Je,fontSize:Qe,dotBorderActive:Ze,dotColorPopover:eo},common:{cubicBezierEaseInOut:oo}}=g.value;return{"--n-bezier":oo,"--n-dot-border":Ge,"--n-dot-border-active":Ze,"--n-dot-border-radius":Je,"--n-dot-box-shadow":Le,"--n-dot-color":b,"--n-dot-color-modal":p,"--n-dot-color-popover":eo,"--n-dot-height":Ye,"--n-dot-width":We,"--n-fill-color":i,"--n-fill-color-hover":s,"--n-font-size":Qe,"--n-handle-box-shadow":C,"--n-handle-box-shadow-active":oe,"--n-handle-box-shadow-focus":Ue,"--n-handle-box-shadow-hover":ee,"--n-handle-color":f,"--n-handle-size":Xe,"--n-opacity-disabled":B,"--n-rail-color":o,"--n-rail-color-hover":t,"--n-rail-height":qe,"--n-rail-width-vertical":Ke,"--n-mark-font-size":e}}),j=M?(0,_.useThemeClass)("slider",void 0,me,a):void 0,be=(0,n.computed)(()=>{const{self:{fontSize:e,indicatorColor:o,indicatorBoxShadow:t,indicatorTextColor:i,indicatorBorderRadius:s}}=g.value;return{"--n-font-size":e,"--n-indicator-border-radius":s,"--n-indicator-box-shadow":t,"--n-indicator-color":o,"--n-indicator-text-color":i}}),D=M?(0,_.useThemeClass)("slider-indicator",void 0,be,a):void 0;return{mergedClsPrefix:c,namespace:X,uncontrolledValue:Y,mergedValue:W,mergedDisabled:H,mergedPlacement:Re,isMounted:(0,u.useIsMounted)(),adjustedTo:(0,y.useAdjustedTo)(a),dotTransitionDisabled:I,markInfos:Te,isShowTooltip:ce,shouldKeepTooltipTransition:$e,handleRailRef:m,setHandleRefs:O,setFollowerRefs:ke,fillStyle:Me,getHandleStyle:ze,activeIndex:w,arrifiedValues:x,followerEnabledIndexSet:Se,handleRailMouseDown:Fe,handleHandleFocus:Ie,handleHandleBlur:Ae,handleHandleMouseEnter:Ee,handleHandleMouseLeave:Ne,handleRailKeyDown:Oe,indicatorCssVars:M?void 0:be,indicatorThemeClass:D==null?void 0:D.themeClass,indicatorOnRender:D==null?void 0:D.onRender,cssVars:M?void 0:me,themeClass:j==null?void 0:j.themeClass,onRender:j==null?void 0:j.onRender}},render(){var a;const{mergedClsPrefix:c,themeClass:X,formatTooltip:M}=this;return(a=this.onRender)===null||a===void 0||a.call(this),(0,n.h)("div",{class:[`${c}-slider`,X,{[`${c}-slider--disabled`]:this.mergedDisabled,[`${c}-slider--active`]:this.activeIndex!==-1,[`${c}-slider--with-mark`]:this.marks,[`${c}-slider--vertical`]:this.vertical,[`${c}-slider--reverse`]:this.reverse}],style:this.cssVars,onKeydown:this.handleRailKeyDown,onMousedown:this.handleRailMouseDown,onTouchstart:this.handleRailMouseDown},(0,n.h)("div",{class:`${c}-slider-rail`},(0,n.h)("div",{class:`${c}-slider-rail__fill`,style:this.fillStyle}),this.marks?(0,n.h)("div",{class:[`${c}-slider-dots`,this.dotTransitionDisabled&&`${c}-slider-dots--transition-disabled`]},this.markInfos.map(g=>(0,n.h)("div",{key:g.label,class:[`${c}-slider-dot`,{[`${c}-slider-dot--active`]:g.active}],style:g.style}))):null,(0,n.h)("div",{ref:"handleRailRef",class:`${c}-slider-handles`},this.arrifiedValues.map((g,m)=>{const F=this.isShowTooltip(m);return(0,n.h)(d.VBinder,null,{default:()=>[(0,n.h)(d.VTarget,null,{default:()=>(0,n.h)("div",{ref:this.setHandleRefs(m),class:`${c}-slider-handle-wrapper`,tabindex:this.mergedDisabled?-1:0,style:this.getHandleStyle(g,m),onFocus:()=>{this.handleHandleFocus(m)},onBlur:()=>{this.handleHandleBlur(m)},onMouseenter:()=>{this.handleHandleMouseEnter(m)},onMouseleave:()=>{this.handleHandleMouseLeave(m)}},(0,y.resolveSlot)(this.$slots.thumb,()=>[(0,n.h)("div",{class:`${c}-slider-handle`})]))}),this.tooltip&&(0,n.h)(d.VFollower,{ref:this.setFollowerRefs(m),show:F,to:this.adjustedTo,enabled:this.showTooltip&&!this.range||this.followerEnabledIndexSet.has(m),teleportDisabled:this.adjustedTo===y.useAdjustedTo.tdkey,placement:this.mergedPlacement,containerClass:this.namespace},{default:()=>(0,n.h)(n.Transition,{name:"fade-in-scale-up-transition",appear:this.isMounted,css:this.shouldKeepTooltipTransition(m),onEnter:()=>{this.followerEnabledIndexSet.add(m)},onAfterLeave:()=>{this.followerEnabledIndexSet.delete(m)}},{default:()=>{var O;return F?((O=this.indicatorOnRender)===null||O===void 0||O.call(this),(0,n.h)("div",{class:[`${c}-slider-handle-indicator`,this.indicatorThemeClass,`${c}-slider-handle-indicator--${this.mergedPlacement}`],style:this.indicatorCssVars},typeof M=="function"?M(g):g)):null}})})]})})),this.marks?(0,n.h)("div",{class:`${c}-slider-marks`},this.markInfos.map(g=>(0,n.h)("div",{key:g.label,class:`${c}-slider-mark`,style:g.style},g.label))):null))}})})(_e);(function(l){var v=k.commonjsGlobal&&k.commonjsGlobal.__importDefault||function(d){return d&&d.__esModule?d:{default:d}};Object.defineProperty(l,"__esModule",{value:!0}),l.sliderProps=l.NSlider=void 0;var n=_e;Object.defineProperty(l,"NSlider",{enumerable:!0,get:function(){return v(n).default}}),Object.defineProperty(l,"sliderProps",{enumerable:!0,get:function(){return n.sliderProps}})})(we);const bo=ro({__proto__:null},[we]);exports.index=bo;
