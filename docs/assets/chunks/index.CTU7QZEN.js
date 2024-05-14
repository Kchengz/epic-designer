import{K as q,_ as r,a as g,c as ie,f as ae,g as le,m as re,h as de,r as se,i as ce}from"./useConfigInject.BvmlE8fS.js";import{o as ue,K as V}from"./KeyCode.rKlZJYRd.js";import{p as me}from"./index.CknOZcBh.js";import{P as b,g as J,i as Q}from"./transition.OUsjLKOK.js";import{d as R,j as z,h as fe,I as d,ai as k,aj as ee,T as oe,R as ge,G as x,x as ne,ap as pe,y as ve}from"./framework.Bj7ZzXMq.js";import{i as Ce,u as be,P as $e}from"./motion.wQpHIsPt.js";import{i as ye}from"./zoom.B-iW8zoU.js";const Se=new q("antFadeIn",{"0%":{opacity:0},"100%":{opacity:1}}),he=new q("antFadeOut",{"0%":{opacity:1},"100%":{opacity:0}}),xe=function(e){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;const{antCls:n}=e,t=`${n}-fade`,i=o?"&":"";return[Ce(t,Se,he,e.motionDurationMid,o),{[`
        ${i}${t}-enter,
        ${i}${t}-appear
      `]:{opacity:0,animationTimingFunction:"linear"},[`${i}${t}-leave`]:{animationTimingFunction:"linear"}}]};function G(){return{keyboard:{type:Boolean,default:void 0},mask:{type:Boolean,default:void 0},afterClose:Function,closable:{type:Boolean,default:void 0},maskClosable:{type:Boolean,default:void 0},visible:{type:Boolean,default:void 0},destroyOnClose:{type:Boolean,default:void 0},mousePosition:b.shape({x:Number,y:Number}).loose,title:b.any,footer:b.any,transitionName:String,maskTransitionName:String,animation:b.any,maskAnimation:b.any,wrapStyle:{type:Object,default:void 0},bodyStyle:{type:Object,default:void 0},maskStyle:{type:Object,default:void 0},prefixCls:String,wrapClassName:String,rootClassName:String,width:[String,Number],height:[String,Number],zIndex:Number,bodyProps:b.any,maskProps:b.any,wrapProps:b.any,getContainer:b.any,dialogStyle:{type:Object,default:void 0},dialogClass:String,closeIcon:b.any,forceRender:{type:Boolean,default:void 0},getOpenCount:Function,focusTriggerAfterClose:{type:Boolean,default:void 0},onClose:Function,modalRender:Function}}function j(e,o,n){let t=o;return!t&&n&&(t=`${e}-${n}`),t}let K=-1;function we(){return K+=1,K}function X(e,o){let n=e[`page${o?"Y":"X"}Offset`];const t=`scroll${o?"Top":"Left"}`;if(typeof n!="number"){const i=e.document;n=i.documentElement[t],typeof n!="number"&&(n=i.body[t])}return n}function Be(e){const o=e.getBoundingClientRect(),n={left:o.left,top:o.top},t=e.ownerDocument,i=t.defaultView||t.parentWindow;return n.left+=X(i),n.top+=X(i,!0),n}const U={width:0,height:0,overflow:"hidden",outline:"none"},ze=R({compatConfig:{MODE:3},name:"DialogContent",inheritAttrs:!1,props:r(r({},G()),{motionName:String,ariaId:String,onVisibleChanged:Function,onMousedown:Function,onMouseup:Function}),setup(e,o){let{expose:n,slots:t,attrs:i}=o;const u=z(),m=z(),f=z();n({focus:()=>{var l;(l=u.value)===null||l===void 0||l.focus()},changeActive:l=>{const{activeElement:c}=document;l&&c===m.value?u.value.focus():!l&&c===u.value&&m.value.focus()}});const y=z(),h=fe(()=>{const{width:l,height:c}=e,v={};return l!==void 0&&(v.width=typeof l=="number"?`${l}px`:l),c!==void 0&&(v.height=typeof c=="number"?`${c}px`:c),y.value&&(v.transformOrigin=y.value),v}),p=()=>{ge(()=>{if(f.value){const l=Be(f.value);y.value=e.mousePosition?`${e.mousePosition.x-l.left}px ${e.mousePosition.y-l.top}px`:""}})},$=l=>{e.onVisibleChanged(l)};return()=>{var l,c,v,w;const{prefixCls:C,footer:a=(l=t.footer)===null||l===void 0?void 0:l.call(t),title:s=(c=t.title)===null||c===void 0?void 0:c.call(t),ariaId:S,closable:B,closeIcon:H=(v=t.closeIcon)===null||v===void 0?void 0:v.call(t),onClose:T,bodyStyle:O,bodyProps:W,onMousedown:N,onMouseup:E,visible:I,modalRender:P=t.modalRender,destroyOnClose:A,motionName:_}=e;let M;a&&(M=d("div",{class:`${C}-footer`},[a]));let F;s&&(F=d("div",{class:`${C}-header`},[d("div",{class:`${C}-title`,id:S},[s])]));let D;B&&(D=d("button",{type:"button",onClick:T,"aria-label":"Close",class:`${C}-close`},[H||d("span",{class:`${C}-close-x`},null)]));const L=d("div",{class:`${C}-content`},[D,F,d("div",g({class:`${C}-body`,style:O},W),[(w=t.default)===null||w===void 0?void 0:w.call(t)]),M]),te=J(_);return d(oe,g(g({},te),{},{onBeforeEnter:p,onAfterEnter:()=>$(!0),onAfterLeave:()=>$(!1)}),{default:()=>[I||!A?k(d("div",g(g({},i),{},{ref:f,key:"dialog-element",role:"document",style:[h.value,i.style],class:[C,i.class],onMousedown:N,onMouseup:E}),[d("div",{tabindex:0,ref:u,style:U,"aria-hidden":"true"},null),P?P({originVNode:L}):L,d("div",{tabindex:0,ref:m,style:U,"aria-hidden":"true"},null)]),[[ee,I]]):null]})}}}),He=R({compatConfig:{MODE:3},name:"DialogMask",props:{prefixCls:String,visible:Boolean,motionName:String,maskProps:Object},setup(e,o){return()=>{const{prefixCls:n,visible:t,maskProps:i,motionName:u}=e,m=J(u);return d(oe,m,{default:()=>[k(d("div",g({class:`${n}-mask`},i),null),[[ee,t]])]})}}}),Y=R({compatConfig:{MODE:3},name:"VcDialog",inheritAttrs:!1,props:Q(r(r({},G()),{getOpenCount:Function,scrollLocker:Object}),{mask:!0,visible:!1,keyboard:!0,closable:!0,maskClosable:!0,destroyOnClose:!1,prefixCls:"rc-dialog",getOpenCount:()=>null,focusTriggerAfterClose:!0}),setup(e,o){let{attrs:n,slots:t}=o;const i=x(),u=x(),m=x(),f=x(e.visible),y=x(`vcDialogTitle${we()}`),h=a=>{var s,S;if(a)ae(u.value,document.activeElement)||(i.value=document.activeElement,(s=m.value)===null||s===void 0||s.focus());else{const B=f.value;if(f.value=!1,e.mask&&i.value&&e.focusTriggerAfterClose){try{i.value.focus({preventScroll:!0})}catch{}i.value=null}B&&((S=e.afterClose)===null||S===void 0||S.call(e))}},p=a=>{var s;(s=e.onClose)===null||s===void 0||s.call(e,a)},$=x(!1),l=x(),c=()=>{clearTimeout(l.value),$.value=!0},v=()=>{l.value=setTimeout(()=>{$.value=!1})},w=a=>{if(!e.maskClosable)return null;$.value?$.value=!1:u.value===a.target&&p(a)},C=a=>{if(e.keyboard&&a.keyCode===V.ESC){a.stopPropagation(),p(a);return}e.visible&&a.keyCode===V.TAB&&m.value.changeActive(!a.shiftKey)};return ne(()=>e.visible,()=>{e.visible&&(f.value=!0)},{flush:"post"}),pe(()=>{var a;clearTimeout(l.value),(a=e.scrollLocker)===null||a===void 0||a.unLock()}),ve(()=>{var a,s;(a=e.scrollLocker)===null||a===void 0||a.unLock(),f.value&&((s=e.scrollLocker)===null||s===void 0||s.lock())}),()=>{const{prefixCls:a,mask:s,visible:S,maskTransitionName:B,maskAnimation:H,zIndex:T,wrapClassName:O,rootClassName:W,wrapStyle:N,closable:E,maskProps:I,maskStyle:P,transitionName:A,animation:_,wrapProps:M,title:F=t.title}=e,{style:D,class:L}=n;return d("div",g({class:[`${a}-root`,W]},me(e,{data:!0})),[d(He,{prefixCls:a,visible:s&&S,motionName:j(a,B,H),style:r({zIndex:T},P),maskProps:I},null),d("div",g({tabIndex:-1,onKeydown:C,class:ie(`${a}-wrap`,O),ref:u,onClick:w,role:"dialog","aria-labelledby":F?y.value:null,style:r(r({zIndex:T},N),{display:f.value?null:"none"})},M),[d(ze,g(g({},ue(e,["scrollLocker"])),{},{style:D,class:L,onMousedown:c,onMouseup:v,ref:m,closable:E,ariaId:y.value,prefixCls:a,visible:S,onClose:p,onVisibleChanged:h,motionName:j(a,A,_)}),t)])])}}}),Te=G(),_e=R({compatConfig:{MODE:3},name:"DialogWrap",inheritAttrs:!1,props:Q(Te,{visible:!1}),setup(e,o){let{attrs:n,slots:t}=o;const i=z(e.visible);return be({},{inTriggerContext:!1}),ne(()=>e.visible,()=>{e.visible&&(i.value=!0)},{flush:"post"}),()=>{const{visible:u,getContainer:m,forceRender:f,destroyOnClose:y=!1,afterClose:h}=e;let p=r(r(r({},e),n),{ref:"_component",key:"dialog"});return m===!1?d(Y,g(g({},p),{},{getOpenCount:()=>2}),t):!f&&y&&!i.value?null:d($e,{autoLock:!0,visible:u,forceRender:f,getContainer:m},{default:$=>(p=r(r(r({},p),$),{afterClose:()=>{h==null||h(),i.value=!1}}),d(Y,p,t))})}}});function Z(e){return{position:e,top:0,insetInlineEnd:0,bottom:0,insetInlineStart:0}}const Ie=e=>{const{componentCls:o}=e;return[{[`${o}-root`]:{[`${o}${e.antCls}-zoom-enter, ${o}${e.antCls}-zoom-appear`]:{transform:"none",opacity:0,animationDuration:e.motionDurationSlow,userSelect:"none"},[`${o}${e.antCls}-zoom-leave ${o}-content`]:{pointerEvents:"none"},[`${o}-mask`]:r(r({},Z("fixed")),{zIndex:e.zIndexPopupBase,height:"100%",backgroundColor:e.colorBgMask,[`${o}-hidden`]:{display:"none"}}),[`${o}-wrap`]:r(r({},Z("fixed")),{overflow:"auto",outline:0,WebkitOverflowScrolling:"touch"})}},{[`${o}-root`]:xe(e)}]},Pe=e=>{const{componentCls:o}=e;return[{[`${o}-root`]:{[`${o}-wrap`]:{zIndex:e.zIndexPopupBase,position:"fixed",inset:0,overflow:"auto",outline:0,WebkitOverflowScrolling:"touch"},[`${o}-wrap-rtl`]:{direction:"rtl"},[`${o}-centered`]:{textAlign:"center","&::before":{display:"inline-block",width:0,height:"100%",verticalAlign:"middle",content:'""'},[o]:{top:0,display:"inline-block",paddingBottom:0,textAlign:"start",verticalAlign:"middle"}},[`@media (max-width: ${e.screenSMMax})`]:{[o]:{maxWidth:"calc(100vw - 16px)",margin:`${e.marginXS} auto`},[`${o}-centered`]:{[o]:{flex:1}}}}},{[o]:r(r({},se(e)),{pointerEvents:"none",position:"relative",top:100,width:"auto",maxWidth:`calc(100vw - ${e.margin*2}px)`,margin:"0 auto",paddingBottom:e.paddingLG,[`${o}-title`]:{margin:0,color:e.modalHeadingColor,fontWeight:e.fontWeightStrong,fontSize:e.modalHeaderTitleFontSize,lineHeight:e.modalHeaderTitleLineHeight,wordWrap:"break-word"},[`${o}-content`]:{position:"relative",backgroundColor:e.modalContentBg,backgroundClip:"padding-box",border:0,borderRadius:e.borderRadiusLG,boxShadow:e.boxShadowSecondary,pointerEvents:"auto",padding:`${e.paddingMD}px ${e.paddingContentHorizontalLG}px`},[`${o}-close`]:r({position:"absolute",top:(e.modalHeaderCloseSize-e.modalCloseBtnSize)/2,insetInlineEnd:(e.modalHeaderCloseSize-e.modalCloseBtnSize)/2,zIndex:e.zIndexPopupBase+10,padding:0,color:e.modalCloseColor,fontWeight:e.fontWeightStrong,lineHeight:1,textDecoration:"none",background:"transparent",borderRadius:e.borderRadiusSM,width:e.modalConfirmIconSize,height:e.modalConfirmIconSize,border:0,outline:0,cursor:"pointer",transition:`color ${e.motionDurationMid}, background-color ${e.motionDurationMid}`,"&-x":{display:"block",fontSize:e.fontSizeLG,fontStyle:"normal",lineHeight:`${e.modalCloseBtnSize}px`,textAlign:"center",textTransform:"none",textRendering:"auto"},"&:hover":{color:e.modalIconHoverColor,backgroundColor:e.wireframe?"transparent":e.colorFillContent,textDecoration:"none"},"&:active":{backgroundColor:e.wireframe?"transparent":e.colorFillContentHover}},de(e)),[`${o}-header`]:{color:e.colorText,background:e.modalHeaderBg,borderRadius:`${e.borderRadiusLG}px ${e.borderRadiusLG}px 0 0`,marginBottom:e.marginXS},[`${o}-body`]:{fontSize:e.fontSize,lineHeight:e.lineHeight,wordWrap:"break-word"},[`${o}-footer`]:{textAlign:"end",background:e.modalFooterBg,marginTop:e.marginSM,[`${e.antCls}-btn + ${e.antCls}-btn:not(${e.antCls}-dropdown-trigger)`]:{marginBottom:0,marginInlineStart:e.marginXS}},[`${o}-open`]:{overflow:"hidden"}})},{[`${o}-pure-panel`]:{top:"auto",padding:0,display:"flex",flexDirection:"column",[`${o}-content,
          ${o}-body,
          ${o}-confirm-body-wrapper`]:{display:"flex",flexDirection:"column",flex:"auto"},[`${o}-confirm-body`]:{marginBottom:"auto"}}}]},Me=e=>{const{componentCls:o}=e,n=`${o}-confirm`;return{[n]:{"&-rtl":{direction:"rtl"},[`${e.antCls}-modal-header`]:{display:"none"},[`${n}-body-wrapper`]:r({},ce()),[`${n}-body`]:{display:"flex",flexWrap:"wrap",alignItems:"center",[`${n}-title`]:{flex:"0 0 100%",display:"block",overflow:"hidden",color:e.colorTextHeading,fontWeight:e.fontWeightStrong,fontSize:e.modalHeaderTitleFontSize,lineHeight:e.modalHeaderTitleLineHeight,[`+ ${n}-content`]:{marginBlockStart:e.marginXS,flexBasis:"100%",maxWidth:`calc(100% - ${e.modalConfirmIconSize+e.marginSM}px)`}},[`${n}-content`]:{color:e.colorText,fontSize:e.fontSize},[`> ${e.iconCls}`]:{flex:"none",marginInlineEnd:e.marginSM,fontSize:e.modalConfirmIconSize,[`+ ${n}-title`]:{flex:1},[`+ ${n}-title + ${n}-content`]:{marginInlineStart:e.modalConfirmIconSize+e.marginSM}}},[`${n}-btns`]:{textAlign:"end",marginTop:e.marginSM,[`${e.antCls}-btn + ${e.antCls}-btn`]:{marginBottom:0,marginInlineStart:e.marginXS}}},[`${n}-error ${n}-body > ${e.iconCls}`]:{color:e.colorError},[`${n}-warning ${n}-body > ${e.iconCls},
        ${n}-confirm ${n}-body > ${e.iconCls}`]:{color:e.colorWarning},[`${n}-info ${n}-body > ${e.iconCls}`]:{color:e.colorInfo},[`${n}-success ${n}-body > ${e.iconCls}`]:{color:e.colorSuccess},[`${o}-zoom-leave ${o}-btns`]:{pointerEvents:"none"}}},Fe=e=>{const{componentCls:o}=e;return{[`${o}-root`]:{[`${o}-wrap-rtl`]:{direction:"rtl",[`${o}-confirm-body`]:{direction:"rtl"}}}}},De=e=>{const{componentCls:o,antCls:n}=e,t=`${o}-confirm`;return{[o]:{[`${o}-content`]:{padding:0},[`${o}-header`]:{padding:e.modalHeaderPadding,borderBottom:`${e.modalHeaderBorderWidth}px ${e.modalHeaderBorderStyle} ${e.modalHeaderBorderColorSplit}`,marginBottom:0},[`${o}-body`]:{padding:e.modalBodyPadding},[`${o}-footer`]:{padding:`${e.modalFooterPaddingVertical}px ${e.modalFooterPaddingHorizontal}px`,borderTop:`${e.modalFooterBorderWidth}px ${e.modalFooterBorderStyle} ${e.modalFooterBorderColorSplit}`,borderRadius:`0 0 ${e.borderRadiusLG}px ${e.borderRadiusLG}px`,marginTop:0}},[t]:{[`${n}-modal-body`]:{padding:`${e.padding*2}px ${e.padding*2}px ${e.paddingLG}px`},[`${t}-body`]:{[`> ${e.iconCls}`]:{marginInlineEnd:e.margin,[`+ ${t}-title + ${t}-content`]:{marginInlineStart:e.modalConfirmIconSize+e.margin}}},[`${t}-btns`]:{marginTop:e.marginLG}}}},Ge=le("Modal",e=>{const o=e.padding,n=e.fontSizeHeading5,t=e.lineHeightHeading5,i=re(e,{modalBodyPadding:e.paddingLG,modalHeaderBg:e.colorBgElevated,modalHeaderPadding:`${o}px ${e.paddingLG}px`,modalHeaderBorderWidth:e.lineWidth,modalHeaderBorderStyle:e.lineType,modalHeaderTitleLineHeight:t,modalHeaderTitleFontSize:n,modalHeaderBorderColorSplit:e.colorSplit,modalHeaderCloseSize:t*n+o*2,modalContentBg:e.colorBgElevated,modalHeadingColor:e.colorTextHeading,modalCloseColor:e.colorTextDescription,modalFooterBg:"transparent",modalFooterBorderColorSplit:e.colorSplit,modalFooterBorderStyle:e.lineType,modalFooterPaddingVertical:e.paddingXS,modalFooterPaddingHorizontal:e.padding,modalFooterBorderWidth:e.lineWidth,modalConfirmTitleFontSize:e.fontSizeLG,modalIconHoverColor:e.colorIconHover,modalConfirmIconSize:e.fontSize*e.lineHeight,modalCloseBtnSize:e.controlHeightLG*.55});return[Pe(i),Me(i),Fe(i),Ie(i),e.wireframe&&De(i),ye(i,"zoom")]});export{_e as D,G as d,Ie as g,xe as i,Ge as u};
