"use strict";const u=require("./_commonjsHelpers-6763f629.cjs"),be=require("./_vue_commonjs-external-0743e21a.cjs"),h=require("./index-8a4d6b86.cjs"),A=require("./index-a2c63f32.cjs");function ve(i,c){for(var r=0;r<c.length;r++){const o=c[r];if(typeof o!="string"&&!Array.isArray(o)){for(const s in o)if(s!=="default"&&!(s in i)){const d=Object.getOwnPropertyDescriptor(o,s);d&&Object.defineProperty(i,s,d.get?d:{enumerable:!0,get:()=>o[s]})}}}return Object.freeze(Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}))}var U={},I={},X={},N={},D={};Object.defineProperty(D,"__esModule",{value:!0});D.default={buttonHeightSmall:"14px",buttonHeightMedium:"18px",buttonHeightLarge:"22px",buttonWidthSmall:"14px",buttonWidthMedium:"18px",buttonWidthLarge:"22px",buttonWidthPressedSmall:"20px",buttonWidthPressedMedium:"24px",buttonWidthPressedLarge:"28px",railHeightSmall:"18px",railHeightMedium:"22px",railHeightLarge:"26px",railWidthSmall:"32px",railWidthMedium:"40px",railWidthLarge:"48px"};var me=u.commonjsGlobal&&u.commonjsGlobal.__importDefault||function(i){return i&&i.__esModule?i:{default:i}};Object.defineProperty(N,"__esModule",{value:!0});const ge=h.require$$1,pe=me(D),_e=h.common,we={name:"Switch",common:_e.commonDark,self(i){const{primaryColorSuppl:c,opacityDisabled:r,borderRadius:o,primaryColor:s,textColor2:d,baseColor:B}=i,a="rgba(255, 255, 255, .20)";return Object.assign(Object.assign({},pe.default),{iconColor:B,textColor:d,loadingColor:c,opacityDisabled:r,railColor:a,railColorActive:c,buttonBoxShadow:"0px 2px 4px 0 rgba(0, 0, 0, 0.4)",buttonColor:"#FFF",railBorderRadiusSmall:o,railBorderRadiusMedium:o,railBorderRadiusLarge:o,buttonBorderRadiusSmall:o,buttonBorderRadiusMedium:o,buttonBorderRadiusLarge:o,boxShadowFocus:`0 0 8px 0 ${(0,ge.changeColor)(s,{alpha:.3})}`})}};N.default=we;var T={},ye=u.commonjsGlobal&&u.commonjsGlobal.__importDefault||function(i){return i&&i.__esModule?i:{default:i}};Object.defineProperty(T,"__esModule",{value:!0});const xe=h.require$$1,Se=ye(D),ke=h.common,Ce=i=>{const{primaryColor:c,opacityDisabled:r,borderRadius:o,textColor3:s}=i,d="rgba(0, 0, 0, .14)";return Object.assign(Object.assign({},Se.default),{iconColor:s,textColor:"white",loadingColor:c,opacityDisabled:r,railColor:d,railColorActive:c,buttonBoxShadow:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",buttonColor:"#FFF",railBorderRadiusSmall:o,railBorderRadiusMedium:o,railBorderRadiusLarge:o,buttonBorderRadiusSmall:o,buttonBorderRadiusMedium:o,buttonBorderRadiusLarge:o,boxShadowFocus:`0 0 0 2px ${(0,xe.changeColor)(c,{alpha:.2})}`})},$e={name:"Switch",common:ke.commonLight,self:Ce};T.default=$e;(function(i){var c=u.commonjsGlobal&&u.commonjsGlobal.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(i,"__esModule",{value:!0}),i.switchLight=i.switchDark=void 0;var r=N;Object.defineProperty(i,"switchDark",{enumerable:!0,get:function(){return c(r).default}});var o=T;Object.defineProperty(i,"switchLight",{enumerable:!0,get:function(){return c(o).default}})})(X);var H={};Object.defineProperty(H,"__esModule",{value:!0});const q=A.iconSwitch_cssr,t=h.cssr;H.default=(0,t.cB)("switch",`
 height: var(--n-height);
 min-width: var(--n-width);
 vertical-align: middle;
 user-select: none;
 -webkit-user-select: none;
 display: inline-flex;
 outline: none;
 justify-content: center;
 align-items: center;
`,[(0,t.cE)("children-placeholder",`
 height: var(--n-rail-height);
 display: flex;
 flex-direction: column;
 overflow: hidden;
 pointer-events: none;
 visibility: hidden;
 `),(0,t.cE)("rail-placeholder",`
 display: flex;
 flex-wrap: none;
 `),(0,t.cE)("button-placeholder",`
 width: calc(1.75 * var(--n-rail-height));
 height: var(--n-rail-height);
 `),(0,t.cB)("base-loading",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 font-size: calc(var(--n-button-width) - 4px);
 color: var(--n-loading-color);
 transition: color .3s var(--n-bezier);
 `,[(0,q.iconSwitchTransition)({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})]),(0,t.cE)("checked, unchecked",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 box-sizing: border-box;
 position: absolute;
 white-space: nowrap;
 top: 0;
 bottom: 0;
 display: flex;
 align-items: center;
 line-height: 1;
 `),(0,t.cE)("checked",`
 right: 0;
 padding-right: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),(0,t.cE)("unchecked",`
 left: 0;
 justify-content: flex-end;
 padding-left: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),(0,t.c)("&:focus",[(0,t.cE)("rail",`
 box-shadow: var(--n-box-shadow-focus);
 `)]),(0,t.cM)("round",[(0,t.cE)("rail","border-radius: calc(var(--n-rail-height) / 2);",[(0,t.cE)("button","border-radius: calc(var(--n-button-height) / 2);")])]),(0,t.cNotM)("disabled",[(0,t.cNotM)("icon",[(0,t.cM)("rubber-band",[(0,t.cM)("pressed",[(0,t.cE)("rail",[(0,t.cE)("button","max-width: var(--n-button-width-pressed);")])]),(0,t.cE)("rail",[(0,t.c)("&:active",[(0,t.cE)("button","max-width: var(--n-button-width-pressed);")])]),(0,t.cM)("active",[(0,t.cM)("pressed",[(0,t.cE)("rail",[(0,t.cE)("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])]),(0,t.cE)("rail",[(0,t.c)("&:active",[(0,t.cE)("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])])])])])]),(0,t.cM)("active",[(0,t.cE)("rail",[(0,t.cE)("button","left: calc(100% - var(--n-button-width) - var(--n-offset))")])]),(0,t.cE)("rail",`
 overflow: hidden;
 height: var(--n-rail-height);
 min-width: var(--n-rail-width);
 border-radius: var(--n-rail-border-radius);
 cursor: pointer;
 position: relative;
 transition:
 opacity .3s var(--n-bezier),
 background .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-rail-color);
 `,[(0,t.cE)("button-icon",`
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 font-size: calc(var(--n-button-height) - 4px);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 display: flex;
 justify-content: center;
 align-items: center;
 line-height: 1;
 `,[(0,q.iconSwitchTransition)()]),(0,t.cE)("button",`
 align-items: center; 
 top: var(--n-offset);
 left: var(--n-offset);
 height: var(--n-button-height);
 width: var(--n-button-width-pressed);
 max-width: var(--n-button-width);
 border-radius: var(--n-button-border-radius);
 background-color: var(--n-button-color);
 box-shadow: var(--n-button-box-shadow);
 box-sizing: border-box;
 cursor: inherit;
 content: "";
 position: absolute;
 transition:
 background-color .3s var(--n-bezier),
 left .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 `)]),(0,t.cM)("active",[(0,t.cE)("rail","background-color: var(--n-rail-color-active);")]),(0,t.cM)("loading",[(0,t.cE)("rail",`
 cursor: wait;
 `)]),(0,t.cM)("disabled",[(0,t.cE)("rail",`
 cursor: not-allowed;
 opacity: .5;
 `)])]);(function(i){var c=u.commonjsGlobal&&u.commonjsGlobal.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(i,"__esModule",{value:!0}),i.switchProps=void 0;const r=be.require$$0,o=h.require$$1,s=h.require$$2,d=h._mixins,B=A._internal,a=h._utils,Y=X,J=c(H);i.switchProps=Object.assign(Object.assign({},d.useTheme.props),{size:{type:String,default:"medium"},value:{type:[String,Number,Boolean],default:void 0},loading:Boolean,defaultValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:void 0},round:{type:Boolean,default:!0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],checkedValue:{type:[String,Number,Boolean],default:!0},uncheckedValue:{type:[String,Number,Boolean],default:!1},railStyle:Function,rubberBand:{type:Boolean,default:!0},onChange:[Function,Array]});let x;i.default=(0,r.defineComponent)({name:"Switch",props:i.switchProps,setup(e){process.env.NODE_ENV!=="production"&&(0,r.watchEffect)(()=>{e.onChange&&(0,a.warnOnce)("switch","`on-change` is deprecated, please use `on-update:value` instead.")}),x===void 0&&(typeof CSS<"u"?typeof CSS.supports<"u"?x=CSS.supports("width","max(1px)"):x=!1:x=!0);const{mergedClsPrefixRef:R,inlineThemeDisabled:S}=(0,d.useConfig)(e),F=(0,d.useTheme)("Switch","-switch",J.default,Y.switchLight,e,R),f=(0,d.useFormItem)(e),{mergedSizeRef:j,mergedDisabledRef:p}=f,k=(0,r.ref)(e.defaultValue),M=(0,r.toRef)(e,"value"),_=(0,s.useMergedState)(M,k),C=(0,r.computed)(()=>_.value===e.checkedValue),w=(0,r.ref)(!1),l=(0,r.ref)(!1),b=(0,r.computed)(()=>{const{railStyle:n}=e;if(n)return n({focused:l.value,checked:C.value})});function v(n){const{"onUpdate:value":E,onChange:P,onUpdateValue:O}=e,{nTriggerFormInput:V,nTriggerFormChange:W}=f;E&&(0,a.call)(E,n),O&&(0,a.call)(O,n),P&&(0,a.call)(P,n),k.value=n,V(),W()}function Q(){const{nTriggerFormFocus:n}=f;n()}function Z(){const{nTriggerFormBlur:n}=f;n()}function ee(){e.loading||p.value||(_.value!==e.checkedValue?v(e.checkedValue):v(e.uncheckedValue))}function te(){l.value=!0,Q()}function oe(){l.value=!1,Z(),w.value=!1}function re(n){e.loading||p.value||n.key===" "&&(_.value!==e.checkedValue?v(e.checkedValue):v(e.uncheckedValue),w.value=!1)}function ie(n){e.loading||p.value||n.key===" "&&(n.preventDefault(),w.value=!0)}const G=(0,r.computed)(()=>{const{value:n}=j,{self:{opacityDisabled:E,railColor:P,railColorActive:O,buttonBoxShadow:V,buttonColor:W,boxShadowFocus:ne,loadingColor:ae,textColor:le,iconColor:ce,[(0,a.createKey)("buttonHeight",n)]:m,[(0,a.createKey)("buttonWidth",n)]:se,[(0,a.createKey)("buttonWidthPressed",n)]:de,[(0,a.createKey)("railHeight",n)]:g,[(0,a.createKey)("railWidth",n)]:$,[(0,a.createKey)("railBorderRadius",n)]:ue,[(0,a.createKey)("buttonBorderRadius",n)]:he},common:{cubicBezierEaseInOut:fe}}=F.value;let z,L,K;return x?(z=`calc((${g} - ${m}) / 2)`,L=`max(${g}, ${m})`,K=`max(${$}, calc(${$} + ${m} - ${g}))`):(z=(0,o.pxfy)(((0,o.depx)(g)-(0,o.depx)(m))/2),L=(0,o.pxfy)(Math.max((0,o.depx)(g),(0,o.depx)(m))),K=(0,o.depx)(g)>(0,o.depx)(m)?$:(0,o.pxfy)((0,o.depx)($)+(0,o.depx)(m)-(0,o.depx)(g))),{"--n-bezier":fe,"--n-button-border-radius":he,"--n-button-box-shadow":V,"--n-button-color":W,"--n-button-width":se,"--n-button-width-pressed":de,"--n-button-height":m,"--n-height":L,"--n-offset":z,"--n-opacity-disabled":E,"--n-rail-border-radius":ue,"--n-rail-color":P,"--n-rail-color-active":O,"--n-rail-height":g,"--n-rail-width":$,"--n-width":K,"--n-box-shadow-focus":ne,"--n-loading-color":ae,"--n-text-color":le,"--n-icon-color":ce}}),y=S?(0,d.useThemeClass)("switch",(0,r.computed)(()=>j.value[0]),G,e):void 0;return{handleClick:ee,handleBlur:oe,handleFocus:te,handleKeyup:re,handleKeydown:ie,mergedRailStyle:b,pressed:w,mergedClsPrefix:R,mergedValue:_,checked:C,mergedDisabled:p,cssVars:S?void 0:G,themeClass:y==null?void 0:y.themeClass,onRender:y==null?void 0:y.onRender}},render(){const{mergedClsPrefix:e,mergedDisabled:R,checked:S,mergedRailStyle:F,onRender:f,$slots:j}=this;f==null||f();const{checked:p,unchecked:k,icon:M,"checked-icon":_,"unchecked-icon":C}=j,w=!((0,a.isSlotEmpty)(M)&&(0,a.isSlotEmpty)(_)&&(0,a.isSlotEmpty)(C));return(0,r.h)("div",{role:"switch","aria-checked":S,class:[`${e}-switch`,this.themeClass,w&&`${e}-switch--icon`,S&&`${e}-switch--active`,R&&`${e}-switch--disabled`,this.round&&`${e}-switch--round`,this.loading&&`${e}-switch--loading`,this.pressed&&`${e}-switch--pressed`,this.rubberBand&&`${e}-switch--rubber-band`],tabindex:this.mergedDisabled?void 0:0,style:this.cssVars,onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},(0,r.h)("div",{class:`${e}-switch__rail`,"aria-hidden":"true",style:F},(0,a.resolveWrappedSlot)(p,l=>(0,a.resolveWrappedSlot)(k,b=>l||b?(0,r.h)("div",{"aria-hidden":!0,class:`${e}-switch__children-placeholder`},(0,r.h)("div",{class:`${e}-switch__rail-placeholder`},(0,r.h)("div",{class:`${e}-switch__button-placeholder`}),l),(0,r.h)("div",{class:`${e}-switch__rail-placeholder`},(0,r.h)("div",{class:`${e}-switch__button-placeholder`}),b)):null)),(0,r.h)("div",{class:`${e}-switch__button`},(0,a.resolveWrappedSlot)(M,l=>(0,a.resolveWrappedSlot)(_,b=>(0,a.resolveWrappedSlot)(C,v=>(0,r.h)(B.NIconSwitchTransition,null,{default:()=>this.loading?(0,r.h)(B.NBaseLoading,{key:"loading",clsPrefix:e,strokeWidth:20}):this.checked&&(b||l)?(0,r.h)("div",{class:`${e}-switch__button-icon`,key:b?"checked-icon":"icon"},b||l):!this.checked&&(v||l)?(0,r.h)("div",{class:`${e}-switch__button-icon`,key:v?"unchecked-icon":"icon"},v||l):null})))),(0,a.resolveWrappedSlot)(p,l=>l&&(0,r.h)("div",{key:"checked",class:`${e}-switch__checked`},l)),(0,a.resolveWrappedSlot)(k,l=>l&&(0,r.h)("div",{key:"unchecked",class:`${e}-switch__unchecked`},l)))))}})})(I);(function(i){var c=u.commonjsGlobal&&u.commonjsGlobal.__importDefault||function(o){return o&&o.__esModule?o:{default:o}};Object.defineProperty(i,"__esModule",{value:!0}),i.switchProps=i.NSwitch=void 0;var r=I;Object.defineProperty(i,"NSwitch",{enumerable:!0,get:function(){return c(r).default}}),Object.defineProperty(i,"switchProps",{enumerable:!0,get:function(){return r.switchProps}})})(U);const Be=ve({__proto__:null},[U]);exports.index=Be;
