import{g as so,u as X,D as co,a as W,t as no,v as Co,c as uo,_ as n,o as Go,l as lo,E as So,m as mo,h as Fo,d as Vo,F as Uo}from"./useConfigInject.BvmlE8fS.js";import{P as F,w as xo,b as Xo,i as qo}from"./transition.OUsjLKOK.js";import{h as $,d as R,I as p,aF as Po,G as O,k as po,ap as fo,T as Ho,x as Wo,aq as Ko,R as Do,an as Jo,y as Qo,B as Yo,aC as Zo}from"./framework.Bj7ZzXMq.js";import{u as H,d as Lo}from"./useState.DG-Wr2Ur.js";import{L as Io}from"./revoke.BrdSO0Zx.js";import{c as Oo}from"./createContext.CKi_Suqn.js";import{f as ko,b as ot,j as tt,k as et,c as rt,h as nt,m as lt,n as at}from"./getTag.DtjCqBUh.js";const it=o=>{const{componentCls:t}=o;return{[t]:{display:"inline-flex","&-block":{display:"flex",width:"100%"},"&-vertical":{flexDirection:"column"}}}},st=o=>{const{componentCls:t}=o;return{[t]:{display:"inline-flex","&-rtl":{direction:"rtl"},"&-vertical":{flexDirection:"column"},"&-align":{flexDirection:"column","&-center":{alignItems:"center"},"&-start":{alignItems:"flex-start"},"&-end":{alignItems:"flex-end"},"&-baseline":{alignItems:"baseline"}},[`${t}-space-item`]:{"&:empty":{display:"none"}}}}},ct=so("Space",o=>[st(o),it(o)]);var dt="[object Map]",ut="[object Set]",mt=Object.prototype,pt=mt.hasOwnProperty;function Ao(o){if(o==null)return!0;if(ko(o)&&(ot(o)||typeof o=="string"||typeof o.splice=="function"||tt(o)||et(o)||rt(o)))return!o.length;var t=nt(o);if(t==dt||t==ut)return!o.size;if(lt(o))return!at(o).length;for(var e in o)if(pt.call(o,e))return!1;return!0}const ft=()=>({compactSize:String,compactDirection:F.oneOf(no("horizontal","vertical")).def("horizontal"),isFirstItem:Co(),isLastItem:Co()}),q=Oo(null),gt=(o,t)=>{const e=q.useInject(),r=$(()=>{if(!e||Ao(e))return"";const{compactDirection:l,isFirstItem:c,isLastItem:i}=e,d=l==="vertical"?"-vertical-":"-";return uo({[`${o.value}-compact${d}item`]:!0,[`${o.value}-compact${d}first-item`]:c,[`${o.value}-compact${d}last-item`]:i,[`${o.value}-compact${d}item-rtl`]:t.value==="rtl"})});return{compactSize:$(()=>e==null?void 0:e.compactSize),compactDirection:$(()=>e==null?void 0:e.compactDirection),compactItemClassnames:r}},ne=R({name:"NoCompactStyle",setup(o,t){let{slots:e}=t;return q.useProvide(null),()=>{var r;return(r=e.default)===null||r===void 0?void 0:r.call(e)}}}),vt=()=>({prefixCls:String,size:{type:String},direction:F.oneOf(no("horizontal","vertical")).def("horizontal"),align:F.oneOf(no("start","end","center","baseline")),block:{type:Boolean,default:void 0}}),bt=R({name:"CompactItem",props:ft(),setup(o,t){let{slots:e}=t;return q.useProvide(o),()=>{var r;return(r=e.default)===null||r===void 0?void 0:r.call(e)}}}),ht=R({name:"ASpaceCompact",inheritAttrs:!1,props:vt(),setup(o,t){let{attrs:e,slots:r}=t;const{prefixCls:l,direction:c}=X("space-compact",o),i=q.useInject(),[d,m]=ct(l),C=$(()=>uo(l.value,m.value,{[`${l.value}-rtl`]:c.value==="rtl",[`${l.value}-block`]:o.block,[`${l.value}-vertical`]:o.direction==="vertical"}));return()=>{var s;const f=co(((s=r.default)===null||s===void 0?void 0:s.call(r))||[]);return f.length===0?null:d(p("div",W(W({},e),{},{class:[C.value,e.class]}),[f.map((b,P)=>{var I;const E=b&&b.key||`${l.value}-item-${P}`,S=!i||Ao(i);return p(bt,{key:E,compactSize:(I=o.size)!==null&&I!==void 0?I:"middle",compactDirection:o.direction,isFirstItem:P===0&&(S||(i==null?void 0:i.isFirstItem)),isLastItem:P===f.length-1&&(S||(i==null?void 0:i.isLastItem))},{default:()=>[b]})})]))}}}),le=ht;function yt(o,t,e){const{focusElCls:r,focus:l,borderElCls:c}=e,i=c?"> *":"",d=["hover",l?"focus":null,"active"].filter(Boolean).map(m=>`&:${m} ${i}`).join(",");return{[`&-item:not(${t}-last-item)`]:{marginInlineEnd:-o.lineWidth},"&-item":n(n({[d]:{zIndex:2}},r?{[`&${r}`]:{zIndex:2}}:{}),{[`&[disabled] ${i}`]:{zIndex:0}})}}function $t(o,t,e){const{borderElCls:r}=e,l=r?`> ${r}`:"";return{[`&-item:not(${t}-first-item):not(${t}-last-item) ${l}`]:{borderRadius:0},[`&-item:not(${t}-last-item)${t}-first-item`]:{[`& ${l}, &${o}-sm ${l}, &${o}-lg ${l}`]:{borderStartEndRadius:0,borderEndEndRadius:0}},[`&-item:not(${t}-first-item)${t}-last-item`]:{[`& ${l}, &${o}-sm ${l}, &${o}-lg ${l}`]:{borderStartStartRadius:0,borderEndStartRadius:0}}}}function Ct(o){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{focus:!0};const{componentCls:e}=o,r=`${e}-compact`;return{[r]:n(n({},yt(o,r,t)),$t(e,r,t))}}const St=o=>{const{componentCls:t,colorPrimary:e}=o;return{[t]:{position:"absolute",background:"transparent",pointerEvents:"none",boxSizing:"border-box",color:`var(--wave-color, ${e})`,boxShadow:"0 0 0 0 currentcolor",opacity:.2,"&.wave-motion-appear":{transition:[`box-shadow 0.4s ${o.motionEaseOutCirc}`,`opacity 2s ${o.motionEaseOutCirc}`].join(","),"&-active":{boxShadow:"0 0 0 6px currentcolor",opacity:0}}}}},xt=so("Wave",o=>[St(o)]);function It(o){const t=(o||"").match(/rgba?\((\d*), (\d*), (\d*)(, [\d.]*)?\)/);return t&&t[1]&&t[2]&&t[3]?!(t[1]===t[2]&&t[2]===t[3]):!0}function eo(o){return o&&o!=="#fff"&&o!=="#ffffff"&&o!=="rgb(255, 255, 255)"&&o!=="rgba(255, 255, 255, 1)"&&It(o)&&!/rgba\((?:\d*, ){3}0\)/.test(o)&&o!=="transparent"}function Et(o){const{borderTopColor:t,borderColor:e,backgroundColor:r}=getComputedStyle(o);return eo(t)?t:eo(e)?e:eo(r)?r:null}function ro(o){return Number.isNaN(o)?0:o}const Bt=R({props:{target:Go(),className:String},setup(o){const t=O(null),[e,r]=H(null),[l,c]=H([]),[i,d]=H(0),[m,C]=H(0),[s,f]=H(0),[b,P]=H(0),[I,E]=H(!1);function S(){const{target:u}=o,g=getComputedStyle(u);r(Et(u));const L=g.position==="static",{borderLeftWidth:J,borderTopWidth:Q}=g;d(L?u.offsetLeft:ro(-parseFloat(J))),C(L?u.offsetTop:ro(-parseFloat(Q))),f(u.offsetWidth),P(u.offsetHeight);const{borderTopLeftRadius:Y,borderTopRightRadius:bo,borderBottomLeftRadius:ho,borderBottomRightRadius:a}=g;c([Y,bo,a,ho].map(v=>ro(parseFloat(v))))}let B,y,z;const D=()=>{clearTimeout(z),xo.cancel(y),B==null||B.disconnect()},A=()=>{var u;const g=(u=t.value)===null||u===void 0?void 0:u.parentElement;g&&(Po(null,g),g.parentElement&&g.parentElement.removeChild(g))};po(()=>{D(),z=setTimeout(()=>{A()},5e3);const{target:u}=o;u&&(y=xo(()=>{S(),E(!0)}),typeof ResizeObserver<"u"&&(B=new ResizeObserver(S),B.observe(u)))}),fo(()=>{D()});const K=u=>{u.propertyName==="opacity"&&A()};return()=>{if(!I.value)return null;const u={left:`${i.value}px`,top:`${m.value}px`,width:`${s.value}px`,height:`${b.value}px`,borderRadius:l.value.map(g=>`${g}px`).join(" ")};return e&&(u["--wave-color"]=e.value),p(Ho,{appear:!0,name:"wave-motion",appearFromClass:"wave-motion-appear",appearActiveClass:"wave-motion-appear",appearToClass:"wave-motion-appear wave-motion-appear-active"},{default:()=>[p("div",{ref:t,class:o.className,style:u,onTransitionend:K},null)]})}}});function Tt(o,t){const e=document.createElement("div");e.style.position="absolute",e.style.left="0px",e.style.top="0px",o==null||o.insertBefore(e,o==null?void 0:o.firstChild),Po(p(Bt,{target:o,className:t},null),e)}function wt(o,t,e){function r(){var l;const c=lo(o);!((l=e==null?void 0:e.value)===null||l===void 0)&&l.disabled||!c||Tt(c,t.value)}return r}const zt=R({compatConfig:{MODE:3},name:"Wave",props:{disabled:Boolean},setup(o,t){let{slots:e}=t;const r=Ko(),{prefixCls:l,wave:c}=X("wave",o),[,i]=xt(l),d=wt(r,$(()=>uo(l.value,i.value)),c);let m;const C=()=>{lo(r).removeEventListener("click",m,!0)};return po(()=>{Wo(()=>o.disabled,()=>{C(),Do(()=>{const s=lo(r);s==null||s.removeEventListener("click",m,!0),!(!s||s.nodeType!==1||o.disabled)&&(m=f=>{f.target.tagName==="INPUT"||!Xo(f.target)||!s.getAttribute||s.getAttribute("disabled")||s.disabled||s.className.includes("disabled")||s.className.includes("-leave")||d()},s.addEventListener("click",m,!0))})},{immediate:!0,flush:"post"})}),fo(()=>{C()}),()=>{var s;return(s=e.default)===null||s===void 0?void 0:s.call(e)[0]}}});function ae(o){return o==="danger"?{danger:!0}:{type:o}}const Rt=()=>({prefixCls:String,type:String,htmlType:{type:String,default:"button"},shape:{type:String},size:{type:String},loading:{type:[Boolean,Object],default:()=>!1},disabled:{type:Boolean,default:void 0},ghost:{type:Boolean,default:void 0},block:{type:Boolean,default:void 0},danger:{type:Boolean,default:void 0},icon:F.any,href:String,target:String,title:String,onClick:So(),onMousedown:So()}),Eo=o=>{o&&(o.style.width="0px",o.style.opacity="0",o.style.transform="scale(0)")},Bo=o=>{Do(()=>{o&&(o.style.width=`${o.scrollWidth}px`,o.style.opacity="1",o.style.transform="scale(1)")})},To=o=>{o&&o.style&&(o.style.width=null,o.style.opacity=null,o.style.transform=null)},Pt=R({compatConfig:{MODE:3},name:"LoadingIcon",props:{prefixCls:String,loading:[Boolean,Object],existIcon:Boolean},setup(o){return()=>{const{existIcon:t,prefixCls:e,loading:r}=o;if(t)return p("span",{class:`${e}-loading-icon`},[p(Io,null,null)]);const l=!!r;return p(Ho,{name:`${e}-loading-icon-motion`,onBeforeEnter:Eo,onEnter:Bo,onAfterEnter:To,onBeforeLeave:Bo,onLeave:c=>{setTimeout(()=>{Eo(c)})},onAfterLeave:To},{default:()=>[l?p("span",{class:`${e}-loading-icon`},[p(Io,null,null)]):null]})}}}),wo=(o,t)=>({[`> span, > ${o}`]:{"&:not(:last-child)":{[`&, & > ${o}`]:{"&:not(:disabled)":{borderInlineEndColor:t}}},"&:not(:first-child)":{[`&, & > ${o}`]:{"&:not(:disabled)":{borderInlineStartColor:t}}}}}),Ht=o=>{const{componentCls:t,fontSize:e,lineWidth:r,colorPrimaryHover:l,colorErrorHover:c}=o;return{[`${t}-group`]:[{position:"relative",display:"inline-flex",[`> span, > ${t}`]:{"&:not(:last-child)":{[`&, & > ${t}`]:{borderStartEndRadius:0,borderEndEndRadius:0}},"&:not(:first-child)":{marginInlineStart:-r,[`&, & > ${t}`]:{borderStartStartRadius:0,borderEndStartRadius:0}}},[t]:{position:"relative",zIndex:1,"&:hover,\n          &:focus,\n          &:active":{zIndex:2},"&[disabled]":{zIndex:0}},[`${t}-icon-only`]:{fontSize:e}},wo(`${t}-primary`,l),wo(`${t}-danger`,c)]}};function Wt(o,t){return{[`&-item:not(${t}-last-item)`]:{marginBottom:-o.lineWidth},"&-item":{"&:hover,&:focus,&:active":{zIndex:2},"&[disabled]":{zIndex:0}}}}function Dt(o,t){return{[`&-item:not(${t}-first-item):not(${t}-last-item)`]:{borderRadius:0},[`&-item${t}-first-item:not(${t}-last-item)`]:{[`&, &${o}-sm, &${o}-lg`]:{borderEndEndRadius:0,borderEndStartRadius:0}},[`&-item${t}-last-item:not(${t}-first-item)`]:{[`&, &${o}-sm, &${o}-lg`]:{borderStartStartRadius:0,borderStartEndRadius:0}}}}function Lt(o){const t=`${o.componentCls}-compact-vertical`;return{[t]:n(n({},Wt(o,t)),Dt(o.componentCls,t))}}const Ot=o=>{const{componentCls:t,iconCls:e}=o;return{[t]:{outline:"none",position:"relative",display:"inline-block",fontWeight:400,whiteSpace:"nowrap",textAlign:"center",backgroundImage:"none",backgroundColor:"transparent",border:`${o.lineWidth}px ${o.lineType} transparent`,cursor:"pointer",transition:`all ${o.motionDurationMid} ${o.motionEaseInOut}`,userSelect:"none",touchAction:"manipulation",lineHeight:o.lineHeight,color:o.colorText,"> span":{display:"inline-block"},[`> ${e} + span, > span + ${e}`]:{marginInlineStart:o.marginXS},"> a":{color:"currentColor"},"&:not(:disabled)":n({},Fo(o)),[`&-icon-only${t}-compact-item`]:{flex:"none"},[`&-compact-item${t}-primary`]:{[`&:not([disabled]) + ${t}-compact-item${t}-primary:not([disabled])`]:{position:"relative","&:before":{position:"absolute",top:-o.lineWidth,insetInlineStart:-o.lineWidth,display:"inline-block",width:o.lineWidth,height:`calc(100% + ${o.lineWidth*2}px)`,backgroundColor:o.colorPrimaryHover,content:'""'}}},"&-compact-vertical-item":{[`&${t}-primary`]:{[`&:not([disabled]) + ${t}-compact-vertical-item${t}-primary:not([disabled])`]:{position:"relative","&:before":{position:"absolute",top:-o.lineWidth,insetInlineStart:-o.lineWidth,display:"inline-block",width:`calc(100% + ${o.lineWidth*2}px)`,height:o.lineWidth,backgroundColor:o.colorPrimaryHover,content:'""'}}}}}}},w=(o,t)=>({"&:not(:disabled)":{"&:hover":o,"&:active":t}}),At=o=>({minWidth:o.controlHeight,paddingInlineStart:0,paddingInlineEnd:0,borderRadius:"50%"}),Nt=o=>({borderRadius:o.controlHeight,paddingInlineStart:o.controlHeight/2,paddingInlineEnd:o.controlHeight/2}),ao=o=>({cursor:"not-allowed",borderColor:o.colorBorder,color:o.colorTextDisabled,backgroundColor:o.colorBgContainerDisabled,boxShadow:"none"}),V=(o,t,e,r,l,c,i)=>({[`&${o}-background-ghost`]:n(n({color:t||void 0,backgroundColor:"transparent",borderColor:e||void 0,boxShadow:"none"},w(n({backgroundColor:"transparent"},c),n({backgroundColor:"transparent"},i))),{"&:disabled":{cursor:"not-allowed",color:r||void 0,borderColor:l||void 0}})}),go=o=>({"&:disabled":n({},ao(o))}),No=o=>n({},go(o)),U=o=>({"&:disabled":{cursor:"not-allowed",color:o.colorTextDisabled}}),_o=o=>n(n(n(n(n({},No(o)),{backgroundColor:o.colorBgContainer,borderColor:o.colorBorder,boxShadow:`0 ${o.controlOutlineWidth}px 0 ${o.controlTmpOutline}`}),w({color:o.colorPrimaryHover,borderColor:o.colorPrimaryHover},{color:o.colorPrimaryActive,borderColor:o.colorPrimaryActive})),V(o.componentCls,o.colorBgContainer,o.colorBgContainer,o.colorTextDisabled,o.colorBorder)),{[`&${o.componentCls}-dangerous`]:n(n(n({color:o.colorError,borderColor:o.colorError},w({color:o.colorErrorHover,borderColor:o.colorErrorBorderHover},{color:o.colorErrorActive,borderColor:o.colorErrorActive})),V(o.componentCls,o.colorError,o.colorError,o.colorTextDisabled,o.colorBorder)),go(o))}),_t=o=>n(n(n(n(n({},No(o)),{color:o.colorTextLightSolid,backgroundColor:o.colorPrimary,boxShadow:`0 ${o.controlOutlineWidth}px 0 ${o.controlOutline}`}),w({color:o.colorTextLightSolid,backgroundColor:o.colorPrimaryHover},{color:o.colorTextLightSolid,backgroundColor:o.colorPrimaryActive})),V(o.componentCls,o.colorPrimary,o.colorPrimary,o.colorTextDisabled,o.colorBorder,{color:o.colorPrimaryHover,borderColor:o.colorPrimaryHover},{color:o.colorPrimaryActive,borderColor:o.colorPrimaryActive})),{[`&${o.componentCls}-dangerous`]:n(n(n({backgroundColor:o.colorError,boxShadow:`0 ${o.controlOutlineWidth}px 0 ${o.colorErrorOutline}`},w({backgroundColor:o.colorErrorHover},{backgroundColor:o.colorErrorActive})),V(o.componentCls,o.colorError,o.colorError,o.colorTextDisabled,o.colorBorder,{color:o.colorErrorHover,borderColor:o.colorErrorHover},{color:o.colorErrorActive,borderColor:o.colorErrorActive})),go(o))}),jt=o=>n(n({},_o(o)),{borderStyle:"dashed"}),Mt=o=>n(n(n({color:o.colorLink},w({color:o.colorLinkHover},{color:o.colorLinkActive})),U(o)),{[`&${o.componentCls}-dangerous`]:n(n({color:o.colorError},w({color:o.colorErrorHover},{color:o.colorErrorActive})),U(o))}),Gt=o=>n(n(n({},w({color:o.colorText,backgroundColor:o.colorBgTextHover},{color:o.colorText,backgroundColor:o.colorBgTextActive})),U(o)),{[`&${o.componentCls}-dangerous`]:n(n({color:o.colorError},U(o)),w({color:o.colorErrorHover,backgroundColor:o.colorErrorBg},{color:o.colorErrorHover,backgroundColor:o.colorErrorBg}))}),Ft=o=>n(n({},ao(o)),{[`&${o.componentCls}:hover`]:n({},ao(o))}),Vt=o=>{const{componentCls:t}=o;return{[`${t}-default`]:_o(o),[`${t}-primary`]:_t(o),[`${t}-dashed`]:jt(o),[`${t}-link`]:Mt(o),[`${t}-text`]:Gt(o),[`${t}-disabled`]:Ft(o)}},vo=function(o){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";const{componentCls:e,iconCls:r,controlHeight:l,fontSize:c,lineHeight:i,lineWidth:d,borderRadius:m,buttonPaddingHorizontal:C}=o,s=Math.max(0,(l-c*i)/2-d),f=C-d,b=`${e}-icon-only`;return[{[`${e}${t}`]:{fontSize:c,height:l,padding:`${s}px ${f}px`,borderRadius:m,[`&${b}`]:{width:l,paddingInlineStart:0,paddingInlineEnd:0,[`&${e}-round`]:{width:"auto"},"> span":{transform:"scale(1.143)"}},[`&${e}-loading`]:{opacity:o.opacityLoading,cursor:"default"},[`${e}-loading-icon`]:{transition:`width ${o.motionDurationSlow} ${o.motionEaseInOut}, opacity ${o.motionDurationSlow} ${o.motionEaseInOut}`},[`&:not(${b}) ${e}-loading-icon > ${r}`]:{marginInlineEnd:o.marginXS}}},{[`${e}${e}-circle${t}`]:At(o)},{[`${e}${e}-round${t}`]:Nt(o)}]},Ut=o=>vo(o),Xt=o=>{const t=mo(o,{controlHeight:o.controlHeightSM,padding:o.paddingXS,buttonPaddingHorizontal:8,borderRadius:o.borderRadiusSM});return vo(t,`${o.componentCls}-sm`)},qt=o=>{const t=mo(o,{controlHeight:o.controlHeightLG,fontSize:o.fontSizeLG,borderRadius:o.borderRadiusLG});return vo(t,`${o.componentCls}-lg`)},Kt=o=>{const{componentCls:t}=o;return{[t]:{[`&${t}-block`]:{width:"100%"}}}},Jt=so("Button",o=>{const{controlTmpOutline:t,paddingContentHorizontal:e}=o,r=mo(o,{colorOutlineDefault:t,buttonPaddingHorizontal:e});return[Ot(r),Xt(r),Ut(r),qt(r),Kt(r),Vt(r),Ht(r),Ct(o,{focus:!1}),Lt(o)]}),Qt=()=>({prefixCls:String,size:{type:String}}),jo=Oo(),io=R({compatConfig:{MODE:3},name:"AButtonGroup",props:Qt(),setup(o,t){let{slots:e}=t;const{prefixCls:r,direction:l}=X("btn-group",o),[,,c]=Vo();jo.useProvide(Jo({size:$(()=>o.size)}));const i=$(()=>{const{size:d}=o;let m="";switch(d){case"large":m="lg";break;case"small":m="sm";break;case"middle":case void 0:break;default:Lo(!d,"Button.Group","Invalid prop `size`.")}return{[`${r.value}`]:!0,[`${r.value}-${m}`]:m,[`${r.value}-rtl`]:l.value==="rtl",[c.value]:!0}});return()=>{var d;return p("div",{class:i.value},[co((d=e.default)===null||d===void 0?void 0:d.call(e))])}}}),zo=/^[\u4e00-\u9fa5]{2}$/,Ro=zo.test.bind(zo);function M(o){return o==="text"||o==="link"}const G=R({compatConfig:{MODE:3},name:"AButton",inheritAttrs:!1,__ANT_BUTTON:!0,props:qo(Rt(),{type:"default"}),slots:Object,setup(o,t){let{slots:e,attrs:r,emit:l,expose:c}=t;const{prefixCls:i,autoInsertSpaceInButton:d,direction:m,size:C}=X("btn",o),[s,f]=Jt(i),b=jo.useInject(),P=Uo(),I=$(()=>{var a;return(a=o.disabled)!==null&&a!==void 0?a:P.value}),E=O(null),S=O(void 0);let B=!1;const y=O(!1),z=O(!1),D=$(()=>d.value!==!1),{compactSize:A,compactItemClassnames:K}=gt(i,m),u=$(()=>typeof o.loading=="object"&&o.loading.delay?o.loading.delay||!0:!!o.loading);Wo(u,a=>{clearTimeout(S.value),typeof u.value=="number"?S.value=setTimeout(()=>{y.value=a},u.value):y.value=a},{immediate:!0});const g=$(()=>{const{type:a,shape:v="default",ghost:T,block:x,danger:Z}=o,h=i.value,N={large:"lg",small:"sm",middle:void 0},_=A.value||(b==null?void 0:b.size)||C.value,j=_&&N[_]||"";return[K.value,{[f.value]:!0,[`${h}`]:!0,[`${h}-${v}`]:v!=="default"&&v,[`${h}-${a}`]:a,[`${h}-${j}`]:j,[`${h}-loading`]:y.value,[`${h}-background-ghost`]:T&&!M(a),[`${h}-two-chinese-chars`]:z.value&&D.value,[`${h}-block`]:x,[`${h}-dangerous`]:!!Z,[`${h}-rtl`]:m.value==="rtl"}]}),L=()=>{const a=E.value;if(!a||d.value===!1)return;const v=a.textContent;B&&Ro(v)?z.value||(z.value=!0):z.value&&(z.value=!1)},J=a=>{if(y.value||I.value){a.preventDefault();return}l("click",a)},Q=a=>{l("mousedown",a)},Y=(a,v)=>{const T=v?" ":"";if(a.type===Zo){let x=a.children.trim();return Ro(x)&&(x=x.split("").join(T)),p("span",null,[x])}return a};return Qo(()=>{Lo(!(o.ghost&&M(o.type)),"Button","`link` or `text` button can't be a `ghost` button.")}),po(L),Yo(L),fo(()=>{S.value&&clearTimeout(S.value)}),c({focus:()=>{var a;(a=E.value)===null||a===void 0||a.focus()},blur:()=>{var a;(a=E.value)===null||a===void 0||a.blur()}}),()=>{var a,v;const{icon:T=(a=e.icon)===null||a===void 0?void 0:a.call(e)}=o,x=co((v=e.default)===null||v===void 0?void 0:v.call(e));B=x.length===1&&!T&&!M(o.type);const{type:Z,htmlType:h,href:N,title:_,target:j}=o,Mo=y.value?"loading":T,k=n(n({},r),{title:_,disabled:I.value,class:[g.value,r.class,{[`${i.value}-icon-only`]:x.length===0&&!!Mo}],onClick:J,onMousedown:Q});I.value||delete k.disabled;const yo=T&&!y.value?T:p(Pt,{existIcon:!!T,prefixCls:i.value,loading:!!y.value},null),$o=x.map(to=>Y(to,B&&D.value));if(N!==void 0)return s(p("a",W(W({},k),{},{href:N,target:j,ref:E}),[yo,$o]));let oo=p("button",W(W({},k),{},{ref:E,type:h}),[yo,$o]);if(!M(Z)){const to=function(){return oo}();oo=p(zt,{ref:"wave",disabled:!!y.value},{default:()=>[to]})}return s(oo)}}});G.Group=io;G.install=function(o){return o.component(G.name,G),o.component(io.name,io),o};export{G as B,le as C,ne as N,zt as W,gt as a,Rt as b,ae as c,io as d,Ct as g,ct as u};
