"use strict";const B=require("./_commonjsHelpers-6763f629.cjs"),V=require("./_vue_commonjs-external-0743e21a.cjs"),b=require("./index-8a4d6b86.cjs"),wt=require("./index-a2c63f32.cjs"),Ie=require("./index-82c933df.cjs"),xe=require("./index-5ec7a6fc.cjs"),$t=require("./fade-in-scale-up.cssr-b13248bc.cjs");function Ct(e,o){for(var r=0;r<o.length;r++){const t=o[r];if(typeof t!="string"&&!Array.isArray(t)){for(const a in t)if(a!=="default"&&!(a in e)){const l=Object.getOwnPropertyDescriptor(t,a);l&&Object.defineProperty(e,a,l.get?l:{enumerable:!0,get:()=>t[a]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var rt={},ot={},nt={},qe={},je={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.self=void 0;const o=b.common,r=b.useTheme,t=xe.styles,a=Ie.styles,l=s=>{const{fontSize:f,boxShadow2:k,popoverColor:H,textColor2:O,borderRadius:E,borderColor:oe,heightSmall:ne,heightMedium:ke,heightLarge:le,fontSizeSmall:ye,fontSizeMedium:Se,fontSizeLarge:we,dividerColor:$e}=s;return{panelFontSize:f,boxShadow:k,color:H,textColor:O,borderRadius:E,border:`1px solid ${oe}`,heightSmall:ne,heightMedium:ke,heightLarge:le,fontSizeSmall:ye,fontSizeMedium:Se,fontSizeLarge:we,dividerColor:$e}};e.self=l;const i=(0,r.createTheme)({name:"ColorPicker",common:o.commonLight,peers:{Input:t.inputLight,Button:a.buttonLight},self:e.self});e.default=i})(je);Object.defineProperty(qe,"__esModule",{value:!0});const Pt=Ie.styles,Ut=xe.styles,Rt=b.common,Mt=je,At={name:"ColorPicker",common:Rt.commonDark,peers:{Input:Ut.inputDark,Button:Pt.buttonDark},self:Mt.self};qe.default=At;(function(e){var o=B.commonjsGlobal&&B.commonjsGlobal.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(e,"__esModule",{value:!0}),e.colorPickerLight=e.colorPickerDark=void 0;var r=qe;Object.defineProperty(e,"colorPickerDark",{enumerable:!0,get:function(){return o(r).default}});var t=je;Object.defineProperty(e,"colorPickerLight",{enumerable:!0,get:function(){return o(t).default}})})(nt);var Be={},x={};Object.defineProperty(x,"__esModule",{value:!0});x.convertColor=x.normalizeAlpha=x.normalizeHue=x.floor=x.getModeFromValue=x.deriveDefaultValue=void 0;const c=b.require$$1,Dt=b._utils;function Vt(e,o){switch(e[0]){case"hex":return o?"#000000FF":"#000000";case"rgb":return o?"rgba(0, 0, 0, 1)":"rgb(0, 0, 0)";case"hsl":return o?"hsla(0, 0%, 0%, 1)":"hsl(0, 0%, 0%)";case"hsv":return o?"hsva(0, 0%, 0%, 1)":"hsv(0, 0%, 0%)"}return process.env.NODE_ENV!=="production"&&(0,Dt.warn)("color-picker","props.modes is invalid."),"#000000"}x.deriveDefaultValue=Vt;function lt(e){return e===null?null:/^ *#/.test(e)?"hex":e.includes("rgb")?"rgb":e.includes("hsl")?"hsl":e.includes("hsv")?"hsv":null}x.getModeFromValue=lt;function Ht(e){return e.map(o=>Math.floor(o))}x.floor=Ht;function zt(e){return e=Math.round(e),e>=360?359:e<0?0:e}x.normalizeHue=zt;function It(e){return e=Math.round(e*100)/100,e>1?1:e<0?0:e}x.normalizeAlpha=It;const qt={rgb:{hex(e){return(0,c.toHexaString)((0,c.rgba)(e))},hsl(e){const[o,r,t,a]=(0,c.rgba)(e);return(0,c.toHslaString)([...(0,c.rgb2hsl)(o,r,t),a])},hsv(e){const[o,r,t,a]=(0,c.rgba)(e);return(0,c.toHsvaString)([...(0,c.rgb2hsv)(o,r,t),a])}},hex:{rgb(e){return(0,c.toRgbaString)((0,c.rgba)(e))},hsl(e){const[o,r,t,a]=(0,c.rgba)(e);return(0,c.toHslaString)([...(0,c.rgb2hsl)(o,r,t),a])},hsv(e){const[o,r,t,a]=(0,c.rgba)(e);return(0,c.toHsvaString)([...(0,c.rgb2hsv)(o,r,t),a])}},hsl:{hex(e){const[o,r,t,a]=(0,c.hsla)(e);return(0,c.toHexaString)([...(0,c.hsl2rgb)(o,r,t),a])},rgb(e){const[o,r,t,a]=(0,c.hsla)(e);return(0,c.toRgbaString)([...(0,c.hsl2rgb)(o,r,t),a])},hsv(e){const[o,r,t,a]=(0,c.hsla)(e);return(0,c.toHsvaString)([...(0,c.hsl2hsv)(o,r,t),a])}},hsv:{hex(e){const[o,r,t,a]=(0,c.hsva)(e);return(0,c.toHexaString)([...(0,c.hsv2rgb)(o,r,t),a])},rgb(e){const[o,r,t,a]=(0,c.hsva)(e);return(0,c.toRgbaString)([...(0,c.hsv2rgb)(o,r,t),a])},hsl(e){const[o,r,t,a]=(0,c.hsva)(e);return(0,c.toHslaString)([...(0,c.hsv2hsl)(o,r,t),a])}}};function jt(e,o,r){return r=r||lt(e),r?r===o?e:qt[r][o](e):null}x.convertColor=jt;Object.defineProperty(Be,"__esModule",{value:!0});const N=V.require$$0,pe=b.require$$3,Bt=x,ee="12px",Ot=12,L="6px",Et=6,Ft="linear-gradient(90deg,red,#ff0 16.66%,#0f0 33.33%,#0ff 50%,#00f 66.66%,#f0f 83.33%,red)";Be.default=(0,N.defineComponent)({name:"HueSlider",props:{clsPrefix:{type:String,required:!0},hue:{type:Number,required:!0},onUpdateHue:{type:Function,required:!0},onComplete:Function},setup(e){const o=(0,N.ref)(null);function r(l){o.value&&((0,pe.on)("mousemove",document,t),(0,pe.on)("mouseup",document,a),t(l))}function t(l){const{value:i}=o;if(!i)return;const{width:s,left:f}=i.getBoundingClientRect(),k=(0,Bt.normalizeHue)((l.clientX-f-Et)/(s-Ot)*360);e.onUpdateHue(k)}function a(){var l;(0,pe.off)("mousemove",document,t),(0,pe.off)("mouseup",document,a),(l=e.onComplete)===null||l===void 0||l.call(e)}return{railRef:o,handleMouseDown:r}},render(){const{clsPrefix:e}=this;return(0,N.h)("div",{class:`${e}-color-picker-slider`,style:{height:ee,borderRadius:L}},(0,N.h)("div",{ref:"railRef",style:{boxShadow:"inset 0 0 2px 0 rgba(0, 0, 0, .24)",boxSizing:"border-box",backgroundImage:Ft,height:ee,borderRadius:L,position:"relative"},onMousedown:this.handleMouseDown},(0,N.h)("div",{style:{position:"absolute",left:L,right:L,top:0,bottom:0}},(0,N.h)("div",{class:`${e}-color-picker-handle`,style:{left:`calc((${this.hue}%) / 359 * 100 - ${L})`,borderRadius:L,width:ee,height:ee}},(0,N.h)("div",{class:`${e}-color-picker-handle__fill`,style:{backgroundColor:`hsl(${this.hue}, 100%, 50%)`,borderRadius:L,width:ee,height:ee}})))))}});var Oe={};Object.defineProperty(Oe,"__esModule",{value:!0});const R=V.require$$0,ge=b.require$$3,Tt=b.require$$1,Nt=x,se="12px",Lt=12,G="6px";Oe.default=(0,R.defineComponent)({name:"AlphaSlider",props:{clsPrefix:{type:String,required:!0},rgba:{type:Array,default:null},alpha:{type:Number,default:0},onUpdateAlpha:{type:Function,required:!0},onComplete:Function},setup(e){const o=(0,R.ref)(null);function r(l){!o.value||!e.rgba||((0,ge.on)("mousemove",document,t),(0,ge.on)("mouseup",document,a),t(l))}function t(l){const{value:i}=o;if(!i)return;const{width:s,left:f}=i.getBoundingClientRect(),k=(l.clientX-f)/(s-Lt);e.onUpdateAlpha((0,Nt.normalizeAlpha)(k))}function a(){var l;(0,ge.off)("mousemove",document,t),(0,ge.off)("mouseup",document,a),(l=e.onComplete)===null||l===void 0||l.call(e)}return{railRef:o,railBackgroundImage:(0,R.computed)(()=>{const{rgba:l}=e;return l?`linear-gradient(to right, rgba(${l[0]}, ${l[1]}, ${l[2]}, 0) 0%, rgba(${l[0]}, ${l[1]}, ${l[2]}, 1) 100%)`:""}),handleMouseDown:r}},render(){const{clsPrefix:e}=this;return(0,R.h)("div",{class:`${e}-color-picker-slider`,ref:"railRef",style:{height:se,borderRadius:G},onMousedown:this.handleMouseDown},(0,R.h)("div",{style:{borderRadius:G,position:"absolute",left:0,right:0,top:0,bottom:0,overflow:"hidden"}},(0,R.h)("div",{class:`${e}-color-picker-checkboard`}),(0,R.h)("div",{class:`${e}-color-picker-slider__image`,style:{backgroundImage:this.railBackgroundImage}})),this.rgba&&(0,R.h)("div",{style:{position:"absolute",left:G,right:G,top:0,bottom:0}},(0,R.h)("div",{class:`${e}-color-picker-handle`,style:{left:`calc(${this.alpha*100}% - ${G})`,borderRadius:G,width:se,height:se}},(0,R.h)("div",{class:`${e}-color-picker-handle__fill`,style:{backgroundColor:(0,Tt.toRgbaString)(this.rgba),borderRadius:G,width:se,height:se}}))))}});var Ee={};Object.defineProperty(Ee,"__esModule",{value:!0});const ve=b.require$$3,j=V.require$$0,be="12px",me="6px";Ee.default=(0,j.defineComponent)({name:"Pallete",props:{clsPrefix:{type:String,required:!0},rgba:{type:Array,default:null},displayedHue:{type:Number,required:!0},displayedSv:{type:Array,required:!0},onUpdateSV:{type:Function,required:!0},onComplete:Function},setup(e){const o=(0,j.ref)(null);function r(l){o.value&&((0,ve.on)("mousemove",document,t),(0,ve.on)("mouseup",document,a),t(l))}function t(l){const{value:i}=o;if(!i)return;const{width:s,height:f,left:k,bottom:H}=i.getBoundingClientRect(),O=(H-l.clientY)/f,E=(l.clientX-k)/s,oe=100*(E>1?1:E<0?0:E),ne=100*(O>1?1:O<0?0:O);e.onUpdateSV(oe,ne)}function a(){var l;(0,ve.off)("mousemove",document,t),(0,ve.off)("mouseup",document,a),(l=e.onComplete)===null||l===void 0||l.call(e)}return{palleteRef:o,handleColor:(0,j.computed)(()=>{const{rgba:l}=e;return l?`rgb(${l[0]}, ${l[1]}, ${l[2]})`:""}),handleMouseDown:r}},render(){const{clsPrefix:e}=this;return(0,j.h)("div",{class:`${e}-color-picker-pallete`,onMousedown:this.handleMouseDown,ref:"palleteRef"},(0,j.h)("div",{class:`${e}-color-picker-pallete__layer`,style:{backgroundImage:`linear-gradient(90deg, white, hsl(${this.displayedHue}, 100%, 50%))`}}),(0,j.h)("div",{class:`${e}-color-picker-pallete__layer ${e}-color-picker-pallete__layer--shadowed`,style:{backgroundImage:"linear-gradient(180deg, rgba(0, 0, 0, 0%), rgba(0, 0, 0, 100%))"}}),this.rgba&&(0,j.h)("div",{class:`${e}-color-picker-handle`,style:{width:be,height:be,borderRadius:me,left:`calc(${this.displayedSv[0]}% - ${me})`,bottom:`calc(${this.displayedSv[1]}% - ${me})`}},(0,j.h)("div",{class:`${e}-color-picker-handle__fill`,style:{backgroundColor:this.handleColor,borderRadius:me,width:be,height:be}})))}});var Fe={},Te={},re={};Object.defineProperty(re,"__esModule",{value:!0});re.colorPickerInjectionKey=void 0;const Gt=b._utils;re.colorPickerInjectionKey=(0,Gt.createInjectionKey)("n-color-picker");Object.defineProperty(Te,"__esModule",{value:!0});const ue=V.require$$0,Kt=xe.input,Xt=re;function Zt(e){return/^\d{1,3}\.?\d*$/.test(e.trim())?Math.max(0,Math.min(parseInt(e),255)):!1}function Yt(e){return/^\d{1,3}\.?\d*$/.test(e.trim())?Math.max(0,Math.min(parseInt(e),360)):!1}function Jt(e){return/^\d{1,3}\.?\d*$/.test(e.trim())?Math.max(0,Math.min(parseInt(e),100)):!1}function Qt(e){const o=e.trim();return/^#[0-9a-fA-F]+$/.test(o)?[4,5,7,9].includes(o.length):!1}function Wt(e){return/^\d{1,3}\.?\d*%$/.test(e.trim())?Math.max(0,Math.min(parseInt(e)/100,100)):!1}const er={paddingSmall:"0 4px"};Te.default=(0,ue.defineComponent)({name:"ColorInputUnit",props:{label:{type:String,required:!0},value:{type:[Number,String],default:null},showAlpha:Boolean,onUpdateValue:{type:Function,required:!0}},setup(e){const o=(0,ue.ref)(""),{themeRef:r}=(0,ue.inject)(Xt.colorPickerInjectionKey,null);(0,ue.watchEffect)(()=>{o.value=t()});function t(){const{value:i}=e;if(i===null)return"";const{label:s}=e;return s==="HEX"?i:s==="A"?`${Math.floor(i*100)}%`:String(Math.floor(i))}function a(i){o.value=i}function l(i){let s,f;switch(e.label){case"HEX":f=Qt(i),f&&e.onUpdateValue(i),o.value=t();break;case"H":s=Yt(i),s===!1?o.value=t():e.onUpdateValue(s);break;case"S":case"L":case"V":s=Jt(i),s===!1?o.value=t():e.onUpdateValue(s);break;case"A":s=Wt(i),s===!1?o.value=t():e.onUpdateValue(s);break;case"R":case"G":case"B":s=Zt(i),s===!1?o.value=t():e.onUpdateValue(s);break}}return{mergedTheme:r,inputValue:o,handleInputChange:l,handleInputUpdateValue:a}},render(){const{mergedTheme:e}=this;return(0,ue.h)(Kt.NInput,{size:"small",placeholder:this.label,theme:e.peers.Input,themeOverrides:e.peerOverrides.Input,builtinThemeOverrides:er,value:this.inputValue,onUpdateValue:this.handleInputUpdateValue,onChange:this.handleInputChange,style:this.label==="A"?"flex-grow: 1.25;":""})}});var tr=B.commonjsGlobal&&B.commonjsGlobal.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Fe,"__esModule",{value:!0});const M=b.require$$1,te=V.require$$0,rr=xe.input,We=tr(Te);Fe.default=(0,te.defineComponent)({name:"ColorInput",props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},modes:{type:Array,required:!0},showAlpha:{type:Boolean,required:!0},value:{type:String,default:null},valueArr:{type:Array,default:null},onUpdateValue:{type:Function,required:!0},onUpdateMode:{type:Function,required:!0}},setup(e){return{handleUnitUpdateValue(o,r){const{showAlpha:t}=e;if(e.mode==="hex"){e.onUpdateValue((t?M.toHexaString:M.toHexString)(r));return}let a;switch(e.valueArr===null?a=[0,0,0,0]:a=Array.from(e.valueArr),e.mode){case"hsv":a[o]=r,e.onUpdateValue((t?M.toHsvaString:M.toHsvString)(a));break;case"rgb":a[o]=r,e.onUpdateValue((t?M.toRgbaString:M.toRgbString)(a));break;case"hsl":a[o]=r,e.onUpdateValue((t?M.toHslaString:M.toHslString)(a));break}}}},render(){const{clsPrefix:e,modes:o}=this;return(0,te.h)("div",{class:`${e}-color-picker-input`},(0,te.h)("div",{class:`${e}-color-picker-input__mode`,onClick:this.onUpdateMode,style:{cursor:o.length===1?"":"pointer"}},this.mode.toUpperCase()+(this.showAlpha?"A":"")),(0,te.h)(rr.NInputGroup,null,{default:()=>{const{mode:r,valueArr:t,showAlpha:a}=this;if(r==="hex"){let l=null;try{l=t===null?null:(a?M.toHexaString:M.toHexString)(t)}catch{}return(0,te.h)(We.default,{label:"HEX",showAlpha:a,value:l,onUpdateValue:i=>{this.handleUnitUpdateValue(0,i)}})}return(r+(a?"a":"")).split("").map((l,i)=>(0,te.h)(We.default,{label:l.toUpperCase(),value:t===null?null:t[i],onUpdateValue:s=>{this.handleUnitUpdateValue(i,s)}}))}}))}});var Ne={};Object.defineProperty(Ne,"__esModule",{value:!0});const or=b.require$$1,K=V.require$$0,nr=re;Ne.default=(0,K.defineComponent)({name:"ColorPickerTrigger",props:{clsPrefix:{type:String,required:!0},value:{type:String,default:null},hsla:{type:Array,default:null},disabled:Boolean,onClick:Function},setup(e){const{colorPickerSlots:o,renderLabelRef:r}=(0,K.inject)(nr.colorPickerInjectionKey,null);return()=>{const{hsla:t,value:a,clsPrefix:l,onClick:i,disabled:s}=e,f=o.label||r.value;return(0,K.h)("div",{class:[`${l}-color-picker-trigger`,s&&`${l}-color-picker-trigger--disabled`],onClick:s?void 0:i},(0,K.h)("div",{class:`${l}-color-picker-trigger__fill`},(0,K.h)("div",{class:`${l}-color-picker-checkboard`}),(0,K.h)("div",{style:{position:"absolute",left:0,right:0,top:0,bottom:0,backgroundColor:t?(0,or.toHslaString)(t):""}}),a&&t?(0,K.h)("div",{class:`${l}-color-picker-trigger__value`,style:{color:t[2]>50||t[3]<.5?"black":"white"}},f?f(a):a):null))}}});var Le={};Object.defineProperty(Le,"__esModule",{value:!0});const ce=V.require$$0,ze=b.require$$1,et=x,lr=b._utils;function ar(e,o){if(o==="hsv"){const[r,t,a,l]=(0,ze.hsva)(e);return(0,ze.toRgbaString)([...(0,ze.hsv2rgb)(r,t,a),l])}return e}function ir(e){const o=document.createElement("canvas").getContext("2d");return o.fillStyle=e,o.fillStyle}Le.default=(0,ce.defineComponent)({name:"ColorPickerSwatches",props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},swatches:{type:Array,required:!0},onUpdateColor:{type:Function,required:!0}},setup(e){const o=(0,ce.computed)(()=>e.swatches.map(l=>{const i=(0,et.getModeFromValue)(l);return{value:l,mode:i,legalValue:ar(l,i)}}));function r(l){const{mode:i}=e;let{value:s,mode:f}=l;return f||(f="hex",/^[a-zA-Z]+$/.test(s)?s=ir(s):((0,lr.warn)("color-picker",`color ${s} in swatches is invalid.`),s="#000000")),f===i?s:(0,et.convertColor)(s,i,f)}function t(l){e.onUpdateColor(r(l))}function a(l,i){l.key==="Enter"&&t(i)}return{parsedSwatchesRef:o,handleSwatchSelect:t,handleSwatchKeyDown:a}},render(){const{clsPrefix:e}=this;return(0,ce.h)("div",{class:`${e}-color-picker-swatches`},this.parsedSwatchesRef.map(o=>(0,ce.h)("div",{class:`${e}-color-picker-swatch`,tabindex:0,onClick:()=>{this.handleSwatchSelect(o)},onKeydown:r=>{this.handleSwatchKeyDown(r,o)}},(0,ce.h)("div",{class:`${e}-color-picker-swatch__fill`,style:{background:o.legalValue}}))))}});var Ge={};Object.defineProperty(Ge,"__esModule",{value:!0});const _e=V.require$$0,tt=x;Ge.default=(0,_e.defineComponent)({name:"ColorPreview",props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},color:{type:String,default:null,validator:e=>{const o=(0,tt.getModeFromValue)(e);return!!(!e||o&&o!=="hsv")}},onUpdateColor:{type:Function,required:!0}},setup(e){function o(r){var t;const a=r.target.value;(t=e.onUpdateColor)===null||t===void 0||t.call(e,(0,tt.convertColor)(a.toUpperCase(),e.mode,"hex")),r.stopPropagation()}return{handleChange:o}},render(){const{clsPrefix:e}=this;return(0,_e.h)("div",{class:`${e}-color-picker-preview__preview`},(0,_e.h)("span",{class:`${e}-color-picker-preview__fill`,style:{background:this.color||"#000000"}}),(0,_e.h)("input",{class:`${e}-color-picker-preview__input`,type:"color",value:this.color,onChange:this.handleChange}))}});var Ke={};Object.defineProperty(Ke,"__esModule",{value:!0});const u=b.cssr,sr=$t.fadeInScaleUp_cssr;Ke.default=(0,u.c)([(0,u.cB)("color-picker",`
 display: inline-block;
 box-sizing: border-box;
 height: var(--n-height);
 font-size: var(--n-font-size);
 width: 100%;
 position: relative;
 `),(0,u.cB)("color-picker-panel",`
 margin: 4px 0;
 width: 240px;
 font-size: var(--n-panel-font-size);
 color: var(--n-text-color);
 background-color: var(--n-color);
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 `,[(0,sr.fadeInScaleUpTransition)(),(0,u.cB)("input",`
 text-align: center;
 `)]),(0,u.cB)("color-picker-checkboard",`
 background: white; 
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `,[(0,u.c)("&::after",`
 background-image: linear-gradient(45deg, #DDD 25%, #0000 25%), linear-gradient(-45deg, #DDD 25%, #0000 25%), linear-gradient(45deg, #0000 75%, #DDD 75%), linear-gradient(-45deg, #0000 75%, #DDD 75%);
 background-size: 12px 12px;
 background-position: 0 0, 0 6px, 6px -6px, -6px 0px;
 background-repeat: repeat;
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),(0,u.cB)("color-picker-slider",`
 margin-bottom: 8px;
 position: relative;
 box-sizing: border-box;
 `,[(0,u.cE)("image",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `),(0,u.c)("&::after",`
 content: "";
 position: absolute;
 border-radius: inherit;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 box-shadow: inset 0 0 2px 0 rgba(0, 0, 0, .24);
 pointer-events: none;
 `)]),(0,u.cB)("color-picker-handle",`
 z-index: 1;
 box-shadow: 0 0 2px 0 rgba(0, 0, 0, .45);
 position: absolute;
 background-color: white;
 overflow: hidden;
 `,[(0,u.cE)("fill",`
 box-sizing: border-box;
 border: 2px solid white;
 `)]),(0,u.cB)("color-picker-pallete",`
 height: 180px;
 position: relative;
 margin-bottom: 8px;
 cursor: crosshair;
 `,[(0,u.cE)("layer",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `,[(0,u.cM)("shadowed",`
 box-shadow: inset 0 0 2px 0 rgba(0, 0, 0, .24);
 `)])]),(0,u.cB)("color-picker-preview",`
 display: flex;
 `,[(0,u.cE)("sliders",`
 flex: 1 0 auto;
 `),(0,u.cE)("preview",`
 position: relative;
 height: 30px;
 width: 30px;
 margin: 0 0 8px 6px;
 border-radius: 50%;
 box-shadow: rgba(0, 0, 0, .15) 0px 0px 0px 1px inset;
 overflow: hidden;
 `),(0,u.cE)("fill",`
 display: block;
 width: 30px;
 height: 30px;
 `),(0,u.cE)("input",`
 position: absolute;
 top: 0;
 left: 0;
 width: 30px;
 height: 30px;
 opacity: 0;
 z-index: 1;
 `)]),(0,u.cB)("color-picker-input",`
 display: flex;
 align-items: center;
 `,[(0,u.cB)("input",`
 flex-grow: 1;
 flex-basis: 0;
 `),(0,u.cE)("mode",`
 width: 72px;
 text-align: center;
 `)]),(0,u.cB)("color-picker-control",`
 padding: 12px;
 `),(0,u.cB)("color-picker-action",`
 display: flex;
 margin-top: -4px;
 border-top: 1px solid var(--n-divider-color);
 padding: 8px 12px;
 justify-content: flex-end;
 `,[(0,u.cB)("button","margin-left: 8px;")]),(0,u.cB)("color-picker-trigger",`
 border: var(--n-border);
 height: 100%;
 box-sizing: border-box;
 border-radius: var(--n-border-radius);
 transition: border-color .3s var(--n-bezier);
 cursor: pointer;
 `,[(0,u.cE)("value",`
 white-space: nowrap;
 position: relative;
 `),(0,u.cE)("fill",`
 border-radius: var(--n-border-radius);
 position: absolute;
 display: flex;
 align-items: center;
 justify-content: center;
 left: 4px;
 right: 4px;
 top: 4px;
 bottom: 4px;
 `),(0,u.cM)("disabled","cursor: not-allowed"),(0,u.cB)("color-picker-checkboard",`
 border-radius: var(--n-border-radius);
 `,[(0,u.c)("&::after",`
 --n-block-size: calc((var(--n-height) - 8px) / 3);
 background-size: calc(var(--n-block-size) * 2) calc(var(--n-block-size) * 2);
 background-position: 0 0, 0 var(--n-block-size), var(--n-block-size) calc(-1 * var(--n-block-size)), calc(-1 * var(--n-block-size)) 0px; 
 `)])]),(0,u.cB)("color-picker-swatches",`
 display: grid;
 grid-gap: 8px;
 flex-wrap: wrap;
 position: relative;
 grid-template-columns: repeat(auto-fill, 18px);
 margin-top: 10px;
 `,[(0,u.cB)("color-picker-swatch",`
 width: 18px;
 height: 18px;
 background-image: linear-gradient(45deg, #DDD 25%, #0000 25%), linear-gradient(-45deg, #DDD 25%, #0000 25%), linear-gradient(45deg, #0000 75%, #DDD 75%), linear-gradient(-45deg, #0000 75%, #DDD 75%);
 background-size: 8px 8px;
 background-position: 0px 0, 0px 4px, 4px -4px, -4px 0px;
 background-repeat: repeat;
 `,[(0,u.cE)("fill",`
 position: relative;
 width: 100%;
 height: 100%;
 border-radius: 3px;
 box-shadow: rgba(0, 0, 0, .15) 0px 0px 0px 1px inset;
 cursor: pointer;
 `),(0,u.c)("&:focus",`
 outline: none;
 `,[(0,u.cE)("fill",[(0,u.c)("&::after",`
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 background: inherit;
 filter: blur(2px);
 content: "";
 `)])])])])]);(function(e){var o=B.commonjsGlobal&&B.commonjsGlobal.__importDefault||function(d){return d&&d.__esModule?d:{default:d}};Object.defineProperty(e,"__esModule",{value:!0}),e.colorPickerProps=void 0;const r=V.require$$0,t=b.require$$1,a=b.require$$2,l=b.require$$1$1,i=wt.require$$2,s=nt,f=b._mixins,k=b._utils,H=Ie.button,O=o(Be),E=o(Oe),oe=o(Ee),ne=o(Fe),ke=o(Ne),le=x,ye=o(Le),Se=o(Ge),we=re,$e=o(Ke);e.colorPickerProps=Object.assign(Object.assign({},f.useTheme.props),{value:String,show:{type:Boolean,default:void 0},defaultShow:Boolean,defaultValue:String,modes:{type:Array,default:()=>["rgb","hex","hsl"]},placement:{type:String,default:"bottom-start"},to:k.useAdjustedTo.propTo,showAlpha:{type:Boolean,default:!0},showPreview:Boolean,swatches:Array,disabled:{type:Boolean,default:void 0},actions:{type:Array,default:null},internalActions:Array,size:String,renderLabel:Function,onComplete:Function,onConfirm:Function,"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array]}),e.default=(0,r.defineComponent)({name:"ColorPicker",props:e.colorPickerProps,setup(d,{slots:X}){const Z=(0,r.ref)(null);let ae=null;const Ce=(0,f.useFormItem)(d),{mergedSizeRef:Xe,mergedDisabledRef:at}=Ce,{localeRef:de}=(0,f.useLocale)("global"),{mergedClsPrefixRef:Pe,namespaceRef:it,inlineThemeDisabled:Ue}=(0,f.useConfig)(d),Re=(0,f.useTheme)("ColorPicker","-color-picker",$e.default,s.colorPickerLight,d,Pe);(0,r.provide)(we.colorPickerInjectionKey,{themeRef:Re,renderLabelRef:(0,r.toRef)(d,"renderLabel"),colorPickerSlots:X});const Ze=(0,r.ref)(d.defaultShow),Ye=(0,a.useMergedState)((0,r.toRef)(d,"show"),Ze);function he(n){const{onUpdateShow:h,"onUpdate:show":g}=d;h&&(0,k.call)(h,n),g&&(0,k.call)(g,n),Ze.value=n}const{defaultValue:Je}=d,Qe=(0,r.ref)(Je===void 0?(0,le.deriveDefaultValue)(d.modes,d.showAlpha):Je),S=(0,a.useMergedState)((0,r.toRef)(d,"value"),Qe),Y=(0,r.ref)([S.value]),A=(0,r.ref)(0),Me=(0,r.computed)(()=>(0,le.getModeFromValue)(S.value)),{modes:st}=d,U=(0,r.ref)((0,le.getModeFromValue)(S.value)||st[0]||"rgb");function ut(){const{modes:n}=d,{value:h}=U,g=n.findIndex(v=>v===h);~g?U.value=n[(g+1)%n.length]:U.value="rgb"}let $,C,J,Q,z,I,q,P;const ie=(0,r.computed)(()=>{const{value:n}=S;if(!n)return null;switch(Me.value){case"hsv":return(0,t.hsva)(n);case"hsl":return[$,C,J,P]=(0,t.hsla)(n),[...(0,t.hsl2hsv)($,C,J),P];case"rgb":case"hex":return[z,I,q,P]=(0,t.rgba)(n),[...(0,t.rgb2hsv)(z,I,q),P]}}),F=(0,r.computed)(()=>{const{value:n}=S;if(!n)return null;switch(Me.value){case"rgb":case"hex":return(0,t.rgba)(n);case"hsv":return[$,C,Q,P]=(0,t.hsva)(n),[...(0,t.hsv2rgb)($,C,Q),P];case"hsl":return[$,C,J,P]=(0,t.hsla)(n),[...(0,t.hsl2rgb)($,C,J),P]}}),Ae=(0,r.computed)(()=>{const{value:n}=S;if(!n)return null;switch(Me.value){case"hsl":return(0,t.hsla)(n);case"hsv":return[$,C,Q,P]=(0,t.hsva)(n),[...(0,t.hsv2hsl)($,C,Q),P];case"rgb":case"hex":return[z,I,q,P]=(0,t.rgba)(n),[...(0,t.rgb2hsl)(z,I,q),P]}}),ct=(0,r.computed)(()=>{switch(U.value){case"rgb":case"hex":return F.value;case"hsv":return ie.value;case"hsl":return Ae.value}}),fe=(0,r.ref)(0),De=(0,r.ref)(1),Ve=(0,r.ref)([0,0]);function dt(n,h){const{value:g}=ie,v=fe.value,m=g?g[3]:1;Ve.value=[n,h];const{showAlpha:p}=d;switch(U.value){case"hsv":_((p?t.toHsvaString:t.toHsvString)([v,n,h,m]),"cursor");break;case"hsl":_((p?t.toHslaString:t.toHslString)([...(0,t.hsv2hsl)(v,n,h),m]),"cursor");break;case"rgb":_((p?t.toRgbaString:t.toRgbString)([...(0,t.hsv2rgb)(v,n,h),m]),"cursor");break;case"hex":_((p?t.toHexaString:t.toHexString)([...(0,t.hsv2rgb)(v,n,h),m]),"cursor");break}}function ht(n){fe.value=n;const{value:h}=ie;if(!h)return;const[,g,v,m]=h,{showAlpha:p}=d;switch(U.value){case"hsv":_((p?t.toHsvaString:t.toHsvString)([n,g,v,m]),"cursor");break;case"rgb":_((p?t.toRgbaString:t.toRgbString)([...(0,t.hsv2rgb)(n,g,v),m]),"cursor");break;case"hex":_((p?t.toHexaString:t.toHexString)([...(0,t.hsv2rgb)(n,g,v),m]),"cursor");break;case"hsl":_((p?t.toHslaString:t.toHslString)([...(0,t.hsv2hsl)(n,g,v),m]),"cursor");break}}function ft(n){switch(U.value){case"hsv":[$,C,Q]=ie.value,_((0,t.toHsvaString)([$,C,Q,n]),"cursor");break;case"rgb":[z,I,q]=F.value,_((0,t.toRgbaString)([z,I,q,n]),"cursor");break;case"hex":[z,I,q]=F.value,_((0,t.toHexaString)([z,I,q,n]),"cursor");break;case"hsl":[$,C,J]=Ae.value,_((0,t.toHslaString)([$,C,J,n]),"cursor");break}De.value=n}function _(n,h){h==="cursor"?ae=n:ae=null;const{nTriggerFormChange:g,nTriggerFormInput:v}=Ce,{onUpdateValue:m,"onUpdate:value":p}=d;m&&(0,k.call)(m,n),p&&(0,k.call)(p,n),g(),v(),Qe.value=n}function pt(n){_(n,"input"),(0,r.nextTick)(W)}function W(n=!0){const{value:h}=S;if(h){const{nTriggerFormChange:g,nTriggerFormInput:v}=Ce,{onComplete:m}=d;m&&m(h);const{value:p}=Y,{value:w}=A;n&&(p.splice(w+1,p.length,h),A.value=w+1),g(),v()}}function gt(){const{value:n}=A;n-1<0||(_(Y.value[n-1],"input"),W(!1),A.value=n-1)}function vt(){const{value:n}=A;n<0||n+1>=Y.value.length||(_(Y.value[n+1],"input"),W(!1),A.value=n+1)}function bt(){_(null,"input"),he(!1)}function mt(){const{value:n}=S,{onConfirm:h}=d;h&&h(n),he(!1)}const _t=(0,r.computed)(()=>A.value>=1),xt=(0,r.computed)(()=>{const{value:n}=Y;return n.length>1&&A.value<n.length-1});(0,r.watch)(Ye,n=>{n||(Y.value=[S.value],A.value=0)}),(0,r.watchEffect)(()=>{if(!(ae&&ae===S.value)){const{value:n}=ie;n&&(fe.value=n[0],De.value=n[3],Ve.value=[n[1],n[2]])}ae=null});const He=(0,r.computed)(()=>{const{value:n}=Xe,{common:{cubicBezierEaseInOut:h},self:{textColor:g,color:v,panelFontSize:m,boxShadow:p,border:w,borderRadius:y,dividerColor:T,[(0,k.createKey)("height",n)]:yt,[(0,k.createKey)("fontSize",n)]:St}}=Re.value;return{"--n-bezier":h,"--n-text-color":g,"--n-color":v,"--n-panel-font-size":m,"--n-font-size":St,"--n-box-shadow":p,"--n-border":w,"--n-border-radius":y,"--n-height":yt,"--n-divider-color":T}}),D=Ue?(0,f.useThemeClass)("color-picker",(0,r.computed)(()=>Xe.value[0]),He,d):void 0;function kt(){var n;const{value:h}=F,{value:g}=fe,{internalActions:v,modes:m,actions:p}=d,{value:w}=Re,{value:y}=Pe;return(0,r.h)("div",{class:[`${y}-color-picker-panel`,D==null?void 0:D.themeClass.value],onDragstart:T=>{T.preventDefault()},style:Ue?void 0:He.value},(0,r.h)("div",{class:`${y}-color-picker-control`},(0,r.h)(oe.default,{clsPrefix:y,rgba:h,displayedHue:g,displayedSv:Ve.value,onUpdateSV:dt,onComplete:W}),(0,r.h)("div",{class:`${y}-color-picker-preview`},(0,r.h)("div",{class:`${y}-color-picker-preview__sliders`},(0,r.h)(O.default,{clsPrefix:y,hue:g,onUpdateHue:ht,onComplete:W}),d.showAlpha?(0,r.h)(E.default,{clsPrefix:y,rgba:h,alpha:De.value,onUpdateAlpha:ft,onComplete:W}):null),d.showPreview?(0,r.h)(Se.default,{clsPrefix:y,mode:U.value,color:F.value&&(0,t.toHexString)(F.value),onUpdateColor:T=>{_(T,"input")}}):null),(0,r.h)(ne.default,{clsPrefix:y,showAlpha:d.showAlpha,mode:U.value,modes:m,onUpdateMode:ut,value:S.value,valueArr:ct.value,onUpdateValue:pt}),((n=d.swatches)===null||n===void 0?void 0:n.length)&&(0,r.h)(ye.default,{clsPrefix:y,mode:U.value,swatches:d.swatches,onUpdateColor:T=>{_(T,"input")}})),p!=null&&p.length?(0,r.h)("div",{class:`${y}-color-picker-action`},p.includes("confirm")&&(0,r.h)(H.NButton,{size:"small",onClick:mt,theme:w.peers.Button,themeOverrides:w.peerOverrides.Button},{default:()=>de.value.confirm}),p.includes("clear")&&(0,r.h)(H.NButton,{size:"small",onClick:bt,disabled:!S.value,theme:w.peers.Button,themeOverrides:w.peerOverrides.Button},{default:()=>de.value.clear})):null,X.action?(0,r.h)("div",{class:`${y}-color-picker-action`},{default:X.action}):v?(0,r.h)("div",{class:`${y}-color-picker-action`},v.includes("undo")&&(0,r.h)(H.NButton,{size:"small",onClick:gt,disabled:!_t.value,theme:w.peers.Button,themeOverrides:w.peerOverrides.Button},{default:()=>de.value.undo}),v.includes("redo")&&(0,r.h)(H.NButton,{size:"small",onClick:vt,disabled:!xt.value,theme:w.peers.Button,themeOverrides:w.peerOverrides.Button},{default:()=>de.value.redo})):null)}return{mergedClsPrefix:Pe,namespace:it,selfRef:Z,hsla:Ae,rgba:F,mergedShow:Ye,mergedDisabled:at,isMounted:(0,a.useIsMounted)(),adjustedTo:(0,k.useAdjustedTo)(d),mergedValue:S,handleTriggerClick(){he(!0)},handleClickOutside(n){var h;!((h=Z.value)===null||h===void 0)&&h.contains((0,t.getPreciseEventTarget)(n))||he(!1)},renderPanel:kt,cssVars:Ue?void 0:He,themeClass:D==null?void 0:D.themeClass,onRender:D==null?void 0:D.onRender}},render(){const{$slots:d,mergedClsPrefix:X,onRender:Z}=this;return Z==null||Z(),(0,r.h)("div",{class:[this.themeClass,`${X}-color-picker`],ref:"selfRef",style:this.cssVars},(0,r.h)(l.VBinder,null,{default:()=>[(0,r.h)(l.VTarget,null,{default:()=>(0,r.h)(ke.default,{clsPrefix:X,value:this.mergedValue,hsla:this.hsla,disabled:this.mergedDisabled,onClick:this.handleTriggerClick},{label:d.label})}),(0,r.h)(l.VFollower,{placement:this.placement,show:this.mergedShow,containerClass:this.namespace,teleportDisabled:this.adjustedTo===k.useAdjustedTo.tdkey,to:this.adjustedTo},{default:()=>(0,r.h)(r.Transition,{name:"fade-in-scale-up-transition",appear:this.isMounted},{default:()=>this.mergedShow?(0,r.withDirectives)(this.renderPanel(),[[i.clickoutside,this.handleClickOutside,void 0,{capture:!0}]]):null})})]}))}})})(ot);(function(e){var o=B.commonjsGlobal&&B.commonjsGlobal.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.colorPickerProps=e.NColorPicker=void 0;var r=ot;Object.defineProperty(e,"NColorPicker",{enumerable:!0,get:function(){return o(r).default}}),Object.defineProperty(e,"colorPickerProps",{enumerable:!0,get:function(){return r.colorPickerProps}})})(rt);const ur=Ct({__proto__:null},[rt]);exports.index=ur;
