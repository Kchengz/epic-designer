import{_ as F,A as mt,j as gt,c as ce,p as ht,a as G,g as vt,m as pt,r as Xe,q as Ge,a3 as bt,u as ke,t as Ie,U as $t,V as yt,a4 as xt,o as de,v as ue,a5 as Ve,s as je,a2 as wt,a6 as ae}from"./useConfigInject.BvmlE8fS.js";import{c as Ct,g as St,P as oe,i as Ft}from"./transition.OUsjLKOK.js";import{j as It,d as Ot,b as Et,c as Mt,L as Pt}from"./revoke.BrdSO0Zx.js";import{c as me}from"./cloneDeep.EyURs6P1.js";import{A as At}from"./Row.BLiC_7wV.js";import{S as Vt}from"./index.Dmr5GdgH.js";import{aG as jt,N as Ye,h as b,Z as Ke,I as P,F as ge,d as he,j as Oe,x as le,ai as Tt,aj as qt,aR as Lt,T as Nt,G as J,y as xe,ap as Wt,an as Qe,k as Rt,R as Ue,ao as we,m as ne}from"./framework.Bj7ZzXMq.js";import{b as Ze}from"./baseIteratee.Cw2_iwum.js";import{f as _t,q as Ht}from"./getTag.DtjCqBUh.js";import{k as zt}from"./getAllKeys.BwAxqbuf.js";import{b as Dt}from"./baseFindIndex.D7XfJLKM.js";import{t as Bt,d as Xt}from"./debounce.BlaEsI6c.js";import{C as Je}from"./Col.wuGn8SFB.js";import{T as Gt,g as kt,c as Yt}from"./collapseMotion.CP5a2Yy8.js";import{z as et}from"./zoom.B-iW8zoU.js";import{u as Kt,F as Qt,a as Ut,b as Ce}from"./FormItemContext.BZIHXwK-.js";import{S as Zt,c as Te,i as tt}from"./isEqual.3E0r62oz.js";import{d as nt}from"./getPrototype.57D5m4QL.js";import{a as Jt}from"./isPlainObject.DLjdWRXV.js";import{i as en,b as tn,o as nn}from"./omit.-feKOJMZ.js";function qe(e){return typeof e=="object"&&e!=null&&e.nodeType===1}function Le(e,n){return(!n||e!=="hidden")&&e!=="visible"&&e!=="clip"}function be(e,n){if(e.clientHeight<e.scrollHeight||e.clientWidth<e.scrollWidth){var t=getComputedStyle(e,null);return Le(t.overflowY,n)||Le(t.overflowX,n)||function(r){var l=function(a){if(!a.ownerDocument||!a.ownerDocument.defaultView)return null;try{return a.ownerDocument.defaultView.frameElement}catch{return null}}(r);return!!l&&(l.clientHeight<r.scrollHeight||l.clientWidth<r.scrollWidth)}(e)}return!1}function fe(e,n,t,r,l,a,i,f){return a<e&&i>n||a>e&&i<n?0:a<=e&&f<=t||i>=n&&f>=t?a-e-r:i>n&&f<t||a<e&&f>t?i-n+l:0}var Ne=function(e,n){var t=window,r=n.scrollMode,l=n.block,a=n.inline,i=n.boundary,f=n.skipOverflowHiddenElements,$=typeof i=="function"?i:function(ft){return ft!==i};if(!qe(e))throw new TypeError("Invalid target");for(var m,o,v=document.scrollingElement||document.documentElement,g=[],h=e;qe(h)&&$(h);){if((h=(o=(m=h).parentElement)==null?m.getRootNode().host||null:o)===v){g.push(h);break}h!=null&&h===document.body&&be(h)&&!be(document.documentElement)||h!=null&&be(h,f)&&g.push(h)}for(var x=t.visualViewport?t.visualViewport.width:innerWidth,C=t.visualViewport?t.visualViewport.height:innerHeight,V=window.scrollX||pageXOffset,R=window.scrollY||pageYOffset,M=e.getBoundingClientRect(),u=M.height,c=M.width,y=M.top,T=M.right,S=M.bottom,I=M.left,q=l==="start"||l==="nearest"?y:l==="end"?S:y+u/2,O=a==="center"?I+c/2:a==="end"?T:I,L=[],N=0;N<g.length;N++){var E=g[N],X=E.getBoundingClientRect(),k=X.height,z=X.width,d=X.top,p=X.right,A=X.bottom,H=X.left;if(r==="if-needed"&&y>=0&&I>=0&&S<=C&&T<=x&&y>=d&&S<=A&&I>=H&&T<=p)return L;var D=getComputedStyle(E),K=parseInt(D.borderLeftWidth,10),ee=parseInt(D.borderTopWidth,10),Y=parseInt(D.borderRightWidth,10),s=parseInt(D.borderBottomWidth,10),w=0,j=0,W="offsetWidth"in E?E.offsetWidth-E.clientWidth-K-Y:0,_="offsetHeight"in E?E.offsetHeight-E.clientHeight-ee-s:0,B="offsetWidth"in E?E.offsetWidth===0?0:z/E.offsetWidth:0,U="offsetHeight"in E?E.offsetHeight===0?0:k/E.offsetHeight:0;if(v===E)w=l==="start"?q:l==="end"?q-C:l==="nearest"?fe(R,R+C,C,ee,s,R+q,R+q+u,u):q-C/2,j=a==="start"?O:a==="center"?O-x/2:a==="end"?O-x:fe(V,V+x,x,K,Y,V+O,V+O+c,c),w=Math.max(0,w+R),j=Math.max(0,j+V);else{w=l==="start"?q-d-ee:l==="end"?q-A+s+_:l==="nearest"?fe(d,A,k,ee,s+_,q,q+u,u):q-(d+k/2)+_/2,j=a==="start"?O-H-K:a==="center"?O-(H+z/2)+W/2:a==="end"?O-p+Y+W:fe(H,p,z,K,Y+W,O,O+c,c);var Z=E.scrollLeft,se=E.scrollTop;q+=se-(w=Math.max(0,Math.min(se+w/U,E.scrollHeight-k/U+_))),O+=Z-(j=Math.max(0,Math.min(Z+j/B,E.scrollWidth-z/B+W)))}L.push({el:E,top:w,left:j})}return L};function rt(e){return e===Object(e)&&Object.keys(e).length!==0}function rn(e,n){n===void 0&&(n="auto");var t="scrollBehavior"in document.body.style;e.forEach(function(r){var l=r.el,a=r.top,i=r.left;l.scroll&&t?l.scroll({top:a,left:i,behavior:n}):(l.scrollTop=a,l.scrollLeft=i)})}function ln(e){return e===!1?{block:"end",inline:"nearest"}:rt(e)?e:{block:"start",inline:"nearest"}}function an(e,n){var t=e.isConnected||e.ownerDocument.documentElement.contains(e);if(rt(n)&&typeof n.behavior=="function")return n.behavior(t?Ne(e,n):[]);if(t){var r=ln(n);return rn(Ne(e,r),r.behavior)}}var We=1/0,on=17976931348623157e292;function sn(e){if(!e)return e===0?e:0;if(e=Bt(e),e===We||e===-We){var n=e<0?-1:1;return n*on}return e===e?e:0}function un(e){var n=sn(e),t=n%1;return n===n?t?n-t:n:0}function cn(e){return function(n,t,r){var l=Object(n);if(!_t(n)){var a=Ze(t);n=zt(n),t=function(f){return a(l[f],f,l)}}var i=e(n,t,r);return i>-1?l[a?n[i]:i]:void 0}}var dn=Math.max;function fn(e,n,t){var r=e==null?0:e.length;if(!r)return-1;var l=t==null?0:un(t);return l<0&&(l=dn(r+l,0)),Dt(e,Ze(n),l)}var mn=cn(fn),gn=Math.min;function hn(e,n,t){for(var r=Jt,l=e[0].length,a=e.length,i=a,f=Array(a),$=1/0,m=[];i--;){var o=e[i];i&&n&&(o=nt(o,Ht(n))),$=gn(o.length,$),f[i]=l>=120&&o.length>=120?new Zt(i&&o):void 0}o=e[0];var v=-1,g=f[0];e:for(;++v<l&&m.length<$;){var h=o[v],x=h;if(h=h!==0?h:0,!(g?Te(g,x):r(m,x))){for(i=a;--i;){var C=f[i];if(!(C?Te(C,x):r(e[i],x)))continue e}g&&g.push(x),m.push(h)}}return m}function vn(e){return en(e)?e:[]}var pn=tn(function(e){var n=nt(e,vn);return n.length&&n[0]===e[0]?hn(n):[]});function te(e){return e==null?[]:Array.isArray(e)?e:[e]}function lt(e,n){let t=e;for(let r=0;r<n.length;r+=1){if(t==null)return;t=t[n[r]]}return t}function at(e,n,t,r){if(!n.length)return t;const[l,...a]=n;let i;return!e&&typeof l=="number"?i=[]:Array.isArray(e)?i=[...e]:i=F({},e),r&&t===void 0&&a.length===1?delete i[l][a[0]]:i[l]=at(i[l],a,t,r),i}function bn(e,n,t){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1;return n.length&&r&&t===void 0&&!lt(e,n.slice(0,-1))?e:at(e,n,t,r)}function Se(e){return te(e)}function $n(e,n){return lt(e,n)}function yn(e,n,t){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1;return bn(e,n,t,r)}function xn(e,n){return e&&e.some(t=>Cn(t,n))}function Re(e){return typeof e=="object"&&e!==null&&Object.getPrototypeOf(e)===Object.prototype}function it(e,n){const t=Array.isArray(e)?[...e]:F({},e);return n&&Object.keys(n).forEach(r=>{const l=t[r],a=n[r],i=Re(l)&&Re(a);t[r]=i?it(l,a||{}):a}),t}function wn(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];return t.reduce((l,a)=>it(l,a),e)}function _e(e,n){let t={};return n.forEach(r=>{const l=$n(e,r);t=yn(t,r,l)}),t}function Cn(e,n){return!e||!n||e.length!==n.length?!1:e.every((t,r)=>n[r]===t)}const Q="'${name}' is not a valid ${type}",ve={default:"Validation error on field '${name}'",required:"'${name}' is required",enum:"'${name}' must be one of [${enum}]",whitespace:"'${name}' cannot be empty",date:{format:"'${name}' is invalid for format date",parse:"'${name}' could not be parsed as date",invalid:"'${name}' is invalid date"},types:{string:Q,method:Q,array:Q,object:Q,number:Q,date:Q,boolean:Q,integer:Q,float:Q,regexp:Q,email:Q,url:Q,hex:Q},string:{len:"'${name}' must be exactly ${len} characters",min:"'${name}' must be at least ${min} characters",max:"'${name}' cannot be longer than ${max} characters",range:"'${name}' must be between ${min} and ${max} characters"},number:{len:"'${name}' must equal ${len}",min:"'${name}' cannot be less than ${min}",max:"'${name}' cannot be greater than ${max}",range:"'${name}' must be between ${min} and ${max}"},array:{len:"'${name}' must be exactly ${len} in length",min:"'${name}' cannot be less than ${min} in length",max:"'${name}' cannot be greater than ${max} in length",range:"'${name}' must be between ${min} and ${max} in length"},pattern:{mismatch:"'${name}' does not match pattern ${pattern}"}};var pe=function(e,n,t,r){function l(a){return a instanceof t?a:new t(function(i){i(a)})}return new(t||(t=Promise))(function(a,i){function f(o){try{m(r.next(o))}catch(v){i(v)}}function $(o){try{m(r.throw(o))}catch(v){i(v)}}function m(o){o.done?a(o.value):l(o.value).then(f,$)}m((r=r.apply(e,n||[])).next())})};const Sn=Vt;function Fn(e,n){return e.replace(/\$\{\w+\}/g,t=>{const r=t.slice(2,-1);return n[r]})}function Fe(e,n,t,r,l){return pe(this,void 0,void 0,function*(){const a=F({},t);delete a.ruleIndex,delete a.trigger;let i=null;a&&a.type==="array"&&a.defaultField&&(i=a.defaultField,delete a.defaultField);const f=new Sn({[e]:[a]}),$=wn({},ve,r.validateMessages);f.messages($);let m=[];try{yield Promise.resolve(f.validate({[e]:n},F({},r)))}catch(g){g.errors?m=g.errors.map((h,x)=>{let{message:C}=h;return mt(C)?jt(C,{key:`error_${x}`}):C}):(console.error(g),m=[$.default()])}if(!m.length&&i)return(yield Promise.all(n.map((h,x)=>Fe(`${e}.${x}`,h,i,r,l)))).reduce((h,x)=>[...h,...x],[]);const o=F(F(F({},t),{name:e,enum:(t.enum||[]).join(", ")}),l);return m.map(g=>typeof g=="string"?Fn(g,o):g)})}function ot(e,n,t,r,l,a){const i=e.join("."),f=t.map((m,o)=>{const v=m.validator,g=F(F({},m),{ruleIndex:o});return v&&(g.validator=(h,x,C)=>{let V=!1;const M=v(h,x,function(){for(var u=arguments.length,c=new Array(u),y=0;y<u;y++)c[y]=arguments[y];Promise.resolve().then(()=>{V||C(...c)})});V=M&&typeof M.then=="function"&&typeof M.catch=="function",V&&M.then(()=>{C()}).catch(u=>{C(u||" ")})}),g}).sort((m,o)=>{let{warningOnly:v,ruleIndex:g}=m,{warningOnly:h,ruleIndex:x}=o;return!!v==!!h?g-x:v?1:-1});let $;if(l===!0)$=new Promise((m,o)=>pe(this,void 0,void 0,function*(){for(let v=0;v<f.length;v+=1){const g=f[v],h=yield Fe(i,n,g,r,a);if(h.length){o([{errors:h,rule:g}]);return}}m([])}));else{const m=f.map(o=>Fe(i,n,o,r,a).then(v=>({errors:v,rule:o})));$=(l?On(m):In(m)).then(o=>Promise.reject(o))}return $.catch(m=>m),$}function In(e){return pe(this,void 0,void 0,function*(){return Promise.all(e).then(n=>[].concat(...n))})}function On(e){return pe(this,void 0,void 0,function*(){let n=0;return new Promise(t=>{e.forEach(r=>{r.then(l=>{l.errors.length&&t([l]),n+=1,n===e.length&&t([])})})})})}const st=Symbol("formContextKey"),ut=e=>{Ke(st,e)},Ee=()=>Ye(st,{name:b(()=>{}),labelAlign:b(()=>"right"),vertical:b(()=>!1),addField:(e,n)=>{},removeField:e=>{},model:b(()=>{}),rules:b(()=>{}),colon:b(()=>{}),labelWrap:b(()=>{}),labelCol:b(()=>{}),requiredMark:b(()=>!1),validateTrigger:b(()=>{}),onValidate:()=>{},validateMessages:b(()=>ve)}),ct=Symbol("formItemPrefixContextKey"),En=e=>{Ke(ct,e)},Mn=()=>Ye(ct,{prefixCls:b(()=>"")});var Pn={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}},{tag:"path",attrs:{d:"M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0130.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1080 0 40 40 0 10-80 0z"}}]},name:"question-circle",theme:"outlined"};function He(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?Object(arguments[n]):{},r=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(l){return Object.getOwnPropertyDescriptor(t,l).enumerable}))),r.forEach(function(l){An(e,l,t[l])})}return e}function An(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var Me=function(n,t){var r=He({},n,t.attrs);return P(It,He({},r,{icon:Pn}),null)};Me.displayName="QuestionCircleOutlined";Me.inheritAttrs=!1;const Pe=(e,n)=>{let{slots:t,emit:r,attrs:l}=n;var a,i,f,$,m;const{prefixCls:o,htmlFor:v,labelCol:g,labelAlign:h,colon:x,required:C,requiredMark:V}=F(F({},e),l),[R]=gt("Form"),M=(a=e.label)!==null&&a!==void 0?a:(i=t.label)===null||i===void 0?void 0:i.call(t);if(!M)return null;const{vertical:u,labelAlign:c,labelCol:y,labelWrap:T,colon:S}=Ee(),I=g||(y==null?void 0:y.value)||{},q=h||(c==null?void 0:c.value),O=`${o}-item-label`,L=ce(O,q==="left"&&`${O}-left`,I.class,{[`${O}-wrap`]:!!T.value});let N=M;const E=x===!0||(S==null?void 0:S.value)!==!1&&x!==!1;if(E&&!u.value&&typeof M=="string"&&M.trim()!==""&&(N=M.replace(/[:|：]\s*$/,"")),e.tooltip||t.tooltip){const z=P("span",{class:`${o}-item-tooltip`},[P(Gt,{title:e.tooltip},{default:()=>[P(Me,null,null)]})]);N=P(ge,null,[N,t.tooltip?(f=t.tooltip)===null||f===void 0?void 0:f.call(t,{class:`${o}-item-tooltip`}):z])}V==="optional"&&!C&&(N=P(ge,null,[N,P("span",{class:`${o}-item-optional`},[(($=R.value)===null||$===void 0?void 0:$.optional)||((m=ht.Form)===null||m===void 0?void 0:m.optional)])]));const k=ce({[`${o}-item-required`]:C,[`${o}-item-required-mark-optional`]:V==="optional",[`${o}-item-no-colon`]:!E});return P(Je,G(G({},I),{},{class:L}),{default:()=>[P("label",{for:v,class:k,title:typeof M=="string"?M:"",onClick:z=>r("click",z)},[N])]})};Pe.displayName="FormItemLabel";Pe.inheritAttrs=!1;const Vn=e=>{const{componentCls:n}=e,t=`${n}-show-help`,r=`${n}-show-help-item`;return{[t]:{transition:`opacity ${e.motionDurationSlow} ${e.motionEaseInOut}`,"&-appear, &-enter":{opacity:0,"&-active":{opacity:1}},"&-leave":{opacity:1,"&-active":{opacity:0}},[r]:{overflow:"hidden",transition:`height ${e.motionDurationSlow} ${e.motionEaseInOut},
                     opacity ${e.motionDurationSlow} ${e.motionEaseInOut},
                     transform ${e.motionDurationSlow} ${e.motionEaseInOut} !important`,[`&${r}-appear, &${r}-enter`]:{transform:"translateY(-5px)",opacity:0,"&-active":{transform:"translateY(0)",opacity:1}},[`&${r}-leave-active`]:{transform:"translateY(-5px)"}}}}},jn=e=>({legend:{display:"block",width:"100%",marginBottom:e.marginLG,padding:0,color:e.colorTextDescription,fontSize:e.fontSizeLG,lineHeight:"inherit",border:0,borderBottom:`${e.lineWidth}px ${e.lineType} ${e.colorBorder}`},label:{fontSize:e.fontSize},'input[type="search"]':{boxSizing:"border-box"},'input[type="radio"], input[type="checkbox"]':{lineHeight:"normal"},'input[type="file"]':{display:"block"},'input[type="range"]':{display:"block",width:"100%"},"select[multiple], select[size]":{height:"auto"},"input[type='file']:focus,\n  input[type='radio']:focus,\n  input[type='checkbox']:focus":{outline:0,boxShadow:`0 0 0 ${e.controlOutlineWidth}px ${e.controlOutline}`},output:{display:"block",paddingTop:15,color:e.colorText,fontSize:e.fontSize,lineHeight:e.lineHeight}}),ze=(e,n)=>{const{formItemCls:t}=e;return{[t]:{[`${t}-label > label`]:{height:n},[`${t}-control-input`]:{minHeight:n}}}},Tn=e=>{const{componentCls:n}=e;return{[e.componentCls]:F(F(F({},Xe(e)),jn(e)),{[`${n}-text`]:{display:"inline-block",paddingInlineEnd:e.paddingSM},"&-small":F({},ze(e,e.controlHeightSM)),"&-large":F({},ze(e,e.controlHeightLG))})}},qn=e=>{const{formItemCls:n,iconCls:t,componentCls:r,rootPrefixCls:l}=e;return{[n]:F(F({},Xe(e)),{marginBottom:e.marginLG,verticalAlign:"top","&-with-help":{transition:"none"},[`&-hidden,
        &-hidden.${l}-row`]:{display:"none"},"&-has-warning":{[`${n}-split`]:{color:e.colorError}},"&-has-error":{[`${n}-split`]:{color:e.colorWarning}},[`${n}-label`]:{display:"inline-block",flexGrow:0,overflow:"hidden",whiteSpace:"nowrap",textAlign:"end",verticalAlign:"middle","&-left":{textAlign:"start"},"&-wrap":{overflow:"unset",lineHeight:`${e.lineHeight} - 0.25em`,whiteSpace:"unset"},"> label":{position:"relative",display:"inline-flex",alignItems:"center",maxWidth:"100%",height:e.controlHeight,color:e.colorTextHeading,fontSize:e.fontSize,[`> ${t}`]:{fontSize:e.fontSize,verticalAlign:"top"},[`&${n}-required:not(${n}-required-mark-optional)::before`]:{display:"inline-block",marginInlineEnd:e.marginXXS,color:e.colorError,fontSize:e.fontSize,fontFamily:"SimSun, sans-serif",lineHeight:1,content:'"*"',[`${r}-hide-required-mark &`]:{display:"none"}},[`${n}-optional`]:{display:"inline-block",marginInlineStart:e.marginXXS,color:e.colorTextDescription,[`${r}-hide-required-mark &`]:{display:"none"}},[`${n}-tooltip`]:{color:e.colorTextDescription,cursor:"help",writingMode:"horizontal-tb",marginInlineStart:e.marginXXS},"&::after":{content:'":"',position:"relative",marginBlock:0,marginInlineStart:e.marginXXS/2,marginInlineEnd:e.marginXS},[`&${n}-no-colon::after`]:{content:'" "'}}},[`${n}-control`]:{display:"flex",flexDirection:"column",flexGrow:1,[`&:first-child:not([class^="'${l}-col-'"]):not([class*="' ${l}-col-'"])`]:{width:"100%"},"&-input":{position:"relative",display:"flex",alignItems:"center",minHeight:e.controlHeight,"&-content":{flex:"auto",maxWidth:"100%"}}},[n]:{"&-explain, &-extra":{clear:"both",color:e.colorTextDescription,fontSize:e.fontSize,lineHeight:e.lineHeight},"&-explain-connected":{width:"100%"},"&-extra":{minHeight:e.controlHeightSM,transition:`color ${e.motionDurationMid} ${e.motionEaseOut}`},"&-explain":{"&-error":{color:e.colorError},"&-warning":{color:e.colorWarning}}},[`&-with-help ${n}-explain`]:{height:"auto",opacity:1},[`${n}-feedback-icon`]:{fontSize:e.fontSize,textAlign:"center",visibility:"visible",animationName:et,animationDuration:e.motionDurationMid,animationTimingFunction:e.motionEaseOutBack,pointerEvents:"none","&-success":{color:e.colorSuccess},"&-error":{color:e.colorError},"&-warning":{color:e.colorWarning},"&-validating":{color:e.colorPrimary}}})}},Ln=e=>{const{componentCls:n,formItemCls:t,rootPrefixCls:r}=e;return{[`${n}-horizontal`]:{[`${t}-label`]:{flexGrow:0},[`${t}-control`]:{flex:"1 1 0",minWidth:0},[`${t}-label.${r}-col-24 + ${t}-control`]:{minWidth:"unset"}}}},Nn=e=>{const{componentCls:n,formItemCls:t}=e;return{[`${n}-inline`]:{display:"flex",flexWrap:"wrap",[t]:{flex:"none",flexWrap:"nowrap",marginInlineEnd:e.margin,marginBottom:0,"&-with-help":{marginBottom:e.marginLG},[`> ${t}-label,
        > ${t}-control`]:{display:"inline-block",verticalAlign:"top"},[`> ${t}-label`]:{flex:"none"},[`${n}-text`]:{display:"inline-block"},[`${t}-has-feedback`]:{display:"inline-block"}}}}},ie=e=>({margin:0,padding:`0 0 ${e.paddingXS}px`,whiteSpace:"initial",textAlign:"start","> label":{margin:0,"&::after":{display:"none"}}}),Wn=e=>{const{componentCls:n,formItemCls:t}=e;return{[`${t} ${t}-label`]:ie(e),[n]:{[t]:{flexWrap:"wrap",[`${t}-label,
          ${t}-control`]:{flex:"0 0 100%",maxWidth:"100%"}}}}},Rn=e=>{const{componentCls:n,formItemCls:t,rootPrefixCls:r}=e;return{[`${n}-vertical`]:{[t]:{"&-row":{flexDirection:"column"},"&-label > label":{height:"auto"},[`${n}-item-control`]:{width:"100%"}}},[`${n}-vertical ${t}-label,
      .${r}-col-24${t}-label,
      .${r}-col-xl-24${t}-label`]:ie(e),[`@media (max-width: ${e.screenXSMax}px)`]:[Wn(e),{[n]:{[`.${r}-col-xs-24${t}-label`]:ie(e)}}],[`@media (max-width: ${e.screenSMMax}px)`]:{[n]:{[`.${r}-col-sm-24${t}-label`]:ie(e)}},[`@media (max-width: ${e.screenMDMax}px)`]:{[n]:{[`.${r}-col-md-24${t}-label`]:ie(e)}},[`@media (max-width: ${e.screenLGMax}px)`]:{[n]:{[`.${r}-col-lg-24${t}-label`]:ie(e)}}}},Ae=vt("Form",(e,n)=>{let{rootPrefixCls:t}=n;const r=pt(e,{formItemCls:`${e.componentCls}-item`,rootPrefixCls:t});return[Tn(r),qn(r),Vn(r),Ln(r),Nn(r),Rn(r),kt(r),et]}),_n=he({compatConfig:{MODE:3},name:"ErrorList",inheritAttrs:!1,props:["errors","help","onErrorVisibleChanged","helpStatus","warnings"],setup(e,n){let{attrs:t}=n;const{prefixCls:r,status:l}=Mn(),a=b(()=>`${r.value}-item-explain`),i=b(()=>!!(e.errors&&e.errors.length)),f=Oe(l.value),[,$]=Ae(r);return le([i,l],()=>{i.value&&(f.value=l.value)}),()=>{var m,o;const v=Yt(`${r.value}-show-help-item`),g=Ct(`${r.value}-show-help-item`,v);return g.role="alert",g.class=[$.value,a.value,t.class,`${r.value}-show-help`],P(Nt,G(G({},St(`${r.value}-show-help`)),{},{onAfterEnter:()=>e.onErrorVisibleChanged(!0),onAfterLeave:()=>e.onErrorVisibleChanged(!1)}),{default:()=>[Tt(P(Lt,G(G({},g),{},{tag:"div"}),{default:()=>[(o=e.errors)===null||o===void 0?void 0:o.map((h,x)=>P("div",{key:x,class:f.value?`${a.value}-${f.value}`:""},[h]))]}),[[qt,!!(!((m=e.errors)===null||m===void 0)&&m.length)]])]})}}}),Hn=he({compatConfig:{MODE:3},slots:Object,inheritAttrs:!1,props:["prefixCls","errors","hasFeedback","onDomErrorVisibleChange","wrapperCol","help","extra","status","marginBottom","onErrorVisibleChanged"],setup(e,n){let{slots:t}=n;const r=Ee(),{wrapperCol:l}=r,a=F({},r);return delete a.labelCol,delete a.wrapperCol,ut(a),En({prefixCls:b(()=>e.prefixCls),status:b(()=>e.status)}),()=>{var i,f,$;const{prefixCls:m,wrapperCol:o,marginBottom:v,onErrorVisibleChanged:g,help:h=(i=t.help)===null||i===void 0?void 0:i.call(t),errors:x=Ge((f=t.errors)===null||f===void 0?void 0:f.call(t)),extra:C=($=t.extra)===null||$===void 0?void 0:$.call(t)}=e,V=`${m}-item`,R=o||(l==null?void 0:l.value)||{},M=ce(`${V}-control`,R.class);return P(Je,G(G({},R),{},{class:M}),{default:()=>{var u;return P(ge,null,[P("div",{class:`${V}-control-input`},[P("div",{class:`${V}-control-input-content`},[(u=t.default)===null||u===void 0?void 0:u.call(t)])]),v!==null||x.length?P("div",{style:{display:"flex",flexWrap:"nowrap"}},[P(_n,{errors:x,help:h,class:`${V}-explain-connected`,onErrorVisibleChanged:g},null),!!v&&P("div",{style:{width:0,height:`${v}px`}},null)]):null,C?P("div",{class:`${V}-extra`},[C]):null])}})}}});function zn(e){const n=J(e.value.slice());let t=null;return xe(()=>{clearTimeout(t),t=setTimeout(()=>{n.value=e.value},e.value.length?0:10)}),n}Ie("success","warning","error","validating","");const Dn={success:Ot,warning:Et,error:Mt,validating:Pt};function $e(e,n,t){let r=e;const l=n;let a=0;try{for(let i=l.length;a<i-1&&!(!r&&!t);++a){const f=l[a];if(f in r)r=r[f];else{if(t)throw Error("please transfer a valid name path to form item!");break}}if(t&&!r)throw Error("please transfer a valid name path to form item!")}catch{console.error("please transfer a valid name path to form item!")}return{o:r,k:l[a],v:r?r[l[a]]:void 0}}const Bn=()=>({htmlFor:String,prefixCls:String,label:oe.any,help:oe.any,extra:oe.any,labelCol:{type:Object},wrapperCol:{type:Object},hasFeedback:{type:Boolean,default:!1},colon:{type:Boolean,default:void 0},labelAlign:String,prop:{type:[String,Number,Array]},name:{type:[String,Number,Array]},rules:[Array,Object],autoLink:{type:Boolean,default:!0},required:{type:Boolean,default:void 0},validateFirst:{type:Boolean,default:void 0},validateStatus:oe.oneOf(Ie("","success","warning","error","validating")),validateTrigger:{type:[String,Array]},messageVariables:{type:Object},hidden:Boolean,noStyle:Boolean,tooltip:String});let Xn=0;const Gn="form_item",kn=he({compatConfig:{MODE:3},name:"AFormItem",inheritAttrs:!1,__ANT_NEW_FORM_ITEM:!0,props:Bn(),slots:Object,setup(e,n){let{slots:t,attrs:r,expose:l}=n;bt(e.prop===void 0);const a=`form-item-${++Xn}`,{prefixCls:i}=ke("form",e),[f,$]=Ae(i),m=J(),o=Ee(),v=b(()=>e.name||e.prop),g=J([]),h=J(!1),x=J(),C=b(()=>{const s=v.value;return Se(s)}),V=b(()=>{if(C.value.length){const s=o.name.value,w=C.value.join("_");return s?`${s}_${w}`:`${Gn}_${w}`}else return}),R=()=>{const s=o.model.value;if(!(!s||!v.value))return $e(s,C.value,!0).v},M=b(()=>R()),u=J(me(M.value)),c=b(()=>{let s=e.validateTrigger!==void 0?e.validateTrigger:o.validateTrigger.value;return s=s===void 0?"change":s,te(s)}),y=b(()=>{let s=o.rules.value;const w=e.rules,j=e.required!==void 0?{required:!!e.required,trigger:c.value}:[],W=$e(s,C.value);s=s?W.o[W.k]||W.v:[];const _=[].concat(w||s||[]);return mn(_,B=>B.required)?_:_.concat(j)}),T=b(()=>{const s=y.value;let w=!1;return s&&s.length&&s.every(j=>j.required?(w=!0,!1):!0),w||e.required}),S=J();xe(()=>{S.value=e.validateStatus});const I=b(()=>{let s={};return typeof e.label=="string"?s.label=e.label:e.name&&(s.label=String(e.name)),e.messageVariables&&(s=F(F({},s),e.messageVariables)),s}),q=s=>{if(C.value.length===0)return;const{validateFirst:w=!1}=e,{triggerName:j}=s||{};let W=y.value;if(j&&(W=W.filter(B=>{const{trigger:U}=B;return!U&&!c.value.length?!0:te(U||c.value).includes(j)})),!W.length)return Promise.resolve();const _=ot(C.value,M.value,W,F({validateMessages:o.validateMessages.value},s),w,I.value);return S.value="validating",g.value=[],_.catch(B=>B).then(function(){let B=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];if(S.value==="validating"){const U=B.filter(Z=>Z&&Z.errors.length);S.value=U.length?"error":"success",g.value=U.map(Z=>Z.errors),o.onValidate(v.value,!g.value.length,g.value.length?we(g.value[0]):null)}}),_},O=()=>{q({triggerName:"blur"})},L=()=>{if(h.value){h.value=!1;return}q({triggerName:"change"})},N=()=>{S.value=e.validateStatus,h.value=!1,g.value=[]},E=()=>{var s;S.value=e.validateStatus,h.value=!0,g.value=[];const w=o.model.value||{},j=M.value,W=$e(w,C.value,!0);Array.isArray(j)?W.o[W.k]=[].concat((s=u.value)!==null&&s!==void 0?s:[]):W.o[W.k]=u.value,Ue(()=>{h.value=!1})},X=b(()=>e.htmlFor===void 0?V.value:e.htmlFor),k=()=>{const s=X.value;if(!s||!x.value)return;const w=x.value.$el.querySelector(`[id="${s}"]`);w&&w.focus&&w.focus()};l({onFieldBlur:O,onFieldChange:L,clearValidate:N,resetField:E}),Kt({id:V,onFieldBlur:()=>{e.autoLink&&O()},onFieldChange:()=>{e.autoLink&&L()},clearValidate:N},b(()=>!!(e.autoLink&&o.model.value&&v.value)));let z=!1;le(v,s=>{s?z||(z=!0,o.addField(a,{fieldValue:M,fieldId:V,fieldName:v,resetField:E,clearValidate:N,namePath:C,validateRules:q,rules:y})):(z=!1,o.removeField(a))},{immediate:!0}),Wt(()=>{o.removeField(a)});const d=zn(g),p=b(()=>e.validateStatus!==void 0?e.validateStatus:d.value.length?"error":S.value),A=b(()=>({[`${i.value}-item`]:!0,[$.value]:!0,[`${i.value}-item-has-feedback`]:p.value&&e.hasFeedback,[`${i.value}-item-has-success`]:p.value==="success",[`${i.value}-item-has-warning`]:p.value==="warning",[`${i.value}-item-has-error`]:p.value==="error",[`${i.value}-item-is-validating`]:p.value==="validating",[`${i.value}-item-hidden`]:e.hidden})),H=Qe({});Qt.useProvide(H),xe(()=>{let s;if(e.hasFeedback){const w=p.value&&Dn[p.value];s=w?P("span",{class:ce(`${i.value}-item-feedback-icon`,`${i.value}-item-feedback-icon-${p.value}`)},[P(w,null,null)]):null}F(H,{status:p.value,hasFeedback:e.hasFeedback,feedbackIcon:s,isFormItemInput:!0})});const D=J(null),K=J(!1),ee=()=>{if(m.value){const s=getComputedStyle(m.value);D.value=parseInt(s.marginBottom,10)}};Rt(()=>{le(K,()=>{K.value&&ee()},{flush:"post",immediate:!0})});const Y=s=>{s||(D.value=null)};return()=>{var s,w;if(e.noStyle)return(s=t.default)===null||s===void 0?void 0:s.call(t);const j=(w=e.help)!==null&&w!==void 0?w:t.help?Ge(t.help()):null,W=!!(j!=null&&Array.isArray(j)&&j.length||d.value.length);return K.value=W,f(P("div",{class:[A.value,W?`${i.value}-item-with-help`:"",r.class],ref:m},[P(At,G(G({},r),{},{class:`${i.value}-row`,key:"row"}),{default:()=>{var _,B;return P(ge,null,[P(Pe,G(G({},e),{},{htmlFor:X.value,required:T.value,requiredMark:o.requiredMark.value,prefixCls:i.value,onClick:k,label:e.label}),{label:t.label,tooltip:t.tooltip}),P(Hn,G(G({},e),{},{errors:j!=null?te(j):d.value,marginBottom:D.value,prefixCls:i.value,status:p.value,ref:x,help:j,extra:(_=e.extra)!==null&&_!==void 0?_:(B=t.extra)===null||B===void 0?void 0:B.call(t),onErrorVisibleChanged:Y}),{default:t.default})])}}),!!D.value&&P("div",{class:`${i.value}-margin-offset`,style:{marginBottom:`-${D.value}px`}},null)]))}}});function dt(e){let n=!1,t=e.length;const r=[];return e.length?new Promise((l,a)=>{e.forEach((i,f)=>{i.catch($=>(n=!0,$)).then($=>{t-=1,r[f]=$,!(t>0)&&(n&&a(r),l(r))})})}):Promise.resolve([])}function De(e){let n=!1;return e&&e.length&&e.every(t=>t.required?(n=!0,!1):!0),n}function Be(e){return e==null?[]:Array.isArray(e)?e:[e]}function ye(e,n,t){let r=e;n=n.replace(/\[(\w+)\]/g,".$1"),n=n.replace(/^\./,"");const l=n.split(".");let a=0;for(let i=l.length;a<i-1&&!(!r&&!t);++a){const f=l[a];if(f in r)r=r[f];else{if(t)throw new Error("please transfer a valid name path to validate!");break}}return{o:r,k:l[a],v:r?r[l[a]]:null,isValid:r&&l[a]in r}}function Yn(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Oe({}),t=arguments.length>2?arguments[2]:void 0;const r=me(ne(e)),l=Qe({}),a=J([]),i=u=>{F(ne(e),F(F({},me(r)),u)),Ue(()=>{Object.keys(l).forEach(c=>{l[c]={autoLink:!1,required:De(ne(n)[c])}})})},f=function(){let u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],c=arguments.length>1?arguments[1]:void 0;return c.length?u.filter(y=>{const T=Be(y.trigger||"change");return pn(T,c).length}):u};let $=null;const m=function(u){let c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},y=arguments.length>2?arguments[2]:void 0;const T=[],S={};for(let O=0;O<u.length;O++){const L=u[O],N=ye(ne(e),L,y);if(!N.isValid)continue;S[L]=N.v;const E=f(ne(n)[L],Be(c&&c.trigger));E.length&&T.push(o(L,N.v,E,c||{}).then(()=>({name:L,errors:[],warnings:[]})).catch(X=>{const k=[],z=[];return X.forEach(d=>{let{rule:{warningOnly:p},errors:A}=d;p?z.push(...A):k.push(...A)}),k.length?Promise.reject({name:L,errors:k,warnings:z}):{name:L,errors:k,warnings:z}}))}const I=dt(T);$=I;const q=I.then(()=>$===I?Promise.resolve(S):Promise.reject([])).catch(O=>{const L=O.filter(N=>N&&N.errors.length);return Promise.reject({values:S,errorFields:L,outOfDate:$!==I})});return q.catch(O=>O),q},o=function(u,c,y){let T=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const S=ot([u],c,y,F({validateMessages:ve},T),!!T.validateFirst);return l[u]?(l[u].validateStatus="validating",S.catch(I=>I).then(function(){let I=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];var q;if(l[u].validateStatus==="validating"){const O=I.filter(L=>L&&L.errors.length);l[u].validateStatus=O.length?"error":"success",l[u].help=O.length?O.map(L=>L.errors):null,(q=t==null?void 0:t.onValidate)===null||q===void 0||q.call(t,u,!O.length,O.length?we(l[u].help[0]):null)}}),S):S.catch(I=>I)},v=(u,c)=>{let y=[],T=!0;u?Array.isArray(u)?y=u:y=[u]:(T=!1,y=a.value);const S=m(y,c||{},T);return S.catch(I=>I),S},g=u=>{let c=[];u?Array.isArray(u)?c=u:c=[u]:c=a.value,c.forEach(y=>{l[y]&&F(l[y],{validateStatus:"",help:null})})},h=u=>{const c={autoLink:!1},y=[],T=Array.isArray(u)?u:[u];for(let S=0;S<T.length;S++){const I=T[S];(I==null?void 0:I.validateStatus)==="error"&&(c.validateStatus="error",I.help&&y.push(I.help)),c.required=c.required||(I==null?void 0:I.required)}return c.help=y,c};let x=r,C=!0;const V=u=>{const c=[];a.value.forEach(y=>{const T=ye(u,y,!1),S=ye(x,y,!1);(C&&(t==null?void 0:t.immediate)&&T.isValid||!tt(T.v,S.v))&&c.push(y)}),v(c,{trigger:"change"}),C=!1,x=me(we(u))},R=t==null?void 0:t.debounce;let M=!0;return le(n,()=>{a.value=n?Object.keys(ne(n)):[],!M&&t&&t.validateOnRuleChange&&v(),M=!1},{deep:!0,immediate:!0}),le(a,()=>{const u={};a.value.forEach(c=>{u[c]=F({},l[c],{autoLink:!1,required:De(ne(n)[c])}),delete l[c]});for(const c in l)Object.prototype.hasOwnProperty.call(l,c)&&delete l[c];F(l,u)},{immediate:!0}),le(e,R&&R.wait?Xt(V,R.wait,nn(R,["wait"])):V,{immediate:t&&!!t.immediate,deep:!0}),{modelRef:e,rulesRef:n,initialModel:r,validateInfos:l,resetFields:i,validate:v,validateField:o,mergeValidateInfo:h,clearValidate:g}}const Kn=()=>({layout:oe.oneOf(Ie("horizontal","inline","vertical")),labelCol:de(),wrapperCol:de(),colon:ue(),labelAlign:Ve(),labelWrap:ue(),prefixCls:String,requiredMark:je([String,Boolean]),hideRequiredMark:ue(),model:oe.object,rules:de(),validateMessages:de(),validateOnRuleChange:ue(),scrollToFirstError:wt(),onSubmit:ae(),name:String,validateTrigger:je([String,Array]),size:Ve(),disabled:ue(),onValuesChange:ae(),onFieldsChange:ae(),onFinish:ae(),onFinishFailed:ae(),onValidate:ae()});function Qn(e,n){return tt(te(e),te(n))}const re=he({compatConfig:{MODE:3},name:"AForm",inheritAttrs:!1,props:Ft(Kn(),{layout:"horizontal",hideRequiredMark:!1,colon:!0}),Item:kn,useForm:Yn,setup(e,n){let{emit:t,slots:r,expose:l,attrs:a}=n;const{prefixCls:i,direction:f,form:$,size:m,disabled:o}=ke("form",e),v=b(()=>e.requiredMark===""||e.requiredMark),g=b(()=>{var d;return v.value!==void 0?v.value:$&&((d=$.value)===null||d===void 0?void 0:d.requiredMark)!==void 0?$.value.requiredMark:!e.hideRequiredMark});$t(m),yt(o);const h=b(()=>{var d,p;return(d=e.colon)!==null&&d!==void 0?d:(p=$.value)===null||p===void 0?void 0:p.colon}),{validateMessages:x}=xt(),C=b(()=>F(F(F({},ve),x.value),e.validateMessages)),[V,R]=Ae(i),M=b(()=>ce(i.value,{[`${i.value}-${e.layout}`]:!0,[`${i.value}-hide-required-mark`]:g.value===!1,[`${i.value}-rtl`]:f.value==="rtl",[`${i.value}-${m.value}`]:m.value},R.value)),u=Oe(),c={},y=(d,p)=>{c[d]=p},T=d=>{delete c[d]},S=d=>{const p=!!d,A=p?te(d).map(Se):[];return p?Object.values(c).filter(H=>A.findIndex(D=>Qn(D,H.fieldName.value))>-1):Object.values(c)},I=d=>{e.model&&S(d).forEach(p=>{p.resetField()})},q=d=>{S(d).forEach(p=>{p.clearValidate()})},O=d=>{const{scrollToFirstError:p}=e;if(t("finishFailed",d),p&&d.errorFields.length){let A={};typeof p=="object"&&(A=p),N(d.errorFields[0].name,A)}},L=function(){return k(...arguments)},N=function(d){let p=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const A=S(d?[d]:void 0);if(A.length){const H=A[0].fieldId.value,D=H?document.getElementById(H):null;D&&an(D,F({scrollMode:"if-needed",block:"nearest"},p))}},E=function(){let d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;if(d===!0){const p=[];return Object.values(c).forEach(A=>{let{namePath:H}=A;p.push(H.value)}),_e(e.model,p)}else return _e(e.model,d)},X=(d,p)=>{if(!e.model)return Promise.reject("Form `model` is required for validateFields to work.");const A=!!d,H=A?te(d).map(Se):[],D=[];Object.values(c).forEach(Y=>{var s;if(A||H.push(Y.namePath.value),!(!((s=Y.rules)===null||s===void 0)&&s.value.length))return;const w=Y.namePath.value;if(!A||xn(H,w)){const j=Y.validateRules(F({validateMessages:C.value},p));D.push(j.then(()=>({name:w,errors:[],warnings:[]})).catch(W=>{const _=[],B=[];return W.forEach(U=>{let{rule:{warningOnly:Z},errors:se}=U;Z?B.push(...se):_.push(...se)}),_.length?Promise.reject({name:w,errors:_,warnings:B}):{name:w,errors:_,warnings:B}}))}});const K=dt(D);u.value=K;const ee=K.then(()=>u.value===K?Promise.resolve(E(H)):Promise.reject([])).catch(Y=>{const s=Y.filter(w=>w&&w.errors.length);return Promise.reject({values:E(H),errorFields:s,outOfDate:u.value!==K})});return ee.catch(Y=>Y),ee},k=function(){return X(...arguments)},z=d=>{d.preventDefault(),d.stopPropagation(),t("submit",d),e.model&&X().then(A=>{t("finish",A)}).catch(A=>{O(A)})};return l({resetFields:I,clearValidate:q,validateFields:X,getFieldsValue:E,validate:L,scrollToField:N}),ut({model:b(()=>e.model),name:b(()=>e.name),labelAlign:b(()=>e.labelAlign),labelCol:b(()=>e.labelCol),labelWrap:b(()=>e.labelWrap),wrapperCol:b(()=>e.wrapperCol),vertical:b(()=>e.layout==="vertical"),colon:h,requiredMark:g,validateTrigger:b(()=>e.validateTrigger),rules:b(()=>e.rules),addField:y,removeField:T,onValidate:(d,p,A)=>{t("validate",d,p,A)},validateMessages:C}),le(()=>e.rules,()=>{e.validateOnRuleChange&&X()}),()=>{var d;return V(P("form",G(G({},a),{},{onSubmit:z,class:[M.value,a.class]}),[(d=r.default)===null||d===void 0?void 0:d.call(r)]))}}});re.useInjectFormItemContext=Ut;re.ItemRest=Ce;re.install=function(e){return e.component(re.name,re),e.component(re.Item.name,re.Item),e.component(Ce.name,Ce),e};export{re as F,an as s,kn as u};
