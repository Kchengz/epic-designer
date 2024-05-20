import{d as U,ay as H,j as y,az as fe,G as me,h as _,x as W,R as ve,k as pe,o as C,b as G,I as r,w as p,l as v,n as d,m as a,P as K,a1 as ge,e as E,c as V,F as Z,J as be,D as ke,ai as we,aj as _e,r as xe,T as Ie,aA as he}from"./framework.C8YhLXwE.js";import{h as ye,j as q,i as J,m as Ne,l as ze,s as Ce,e as Ee,o as k,p as Te,q as Oe,r as Le,z as Re,t as Se,v as Ae,x as Ve,_ as Xe,y as L,A as N,k as $e,w as Ye}from"../guide_components_EBuilder.md.CqpDDJB9.js";import{u as Me,a as Be}from"./index.DeFaXpkR.js";import{d as De}from"./debounce.BlaEsI6c.js";import{i as Fe}from"./getTag.DtjCqBUh.js";var Pe="Expected a function";function X(g,T,f){var x=!0,n=!0;if(typeof g!="function")throw new TypeError(Pe);return Fe(f)&&(x="leading"in f?!!f.leading:x,n="trailing"in f?!!f.trailing:n),De(g,T,{leading:x,maxWait:T,trailing:n})}const je=ye({urlList:{type:J(Array),default:()=>Ne([])},zIndex:{type:Number},initialIndex:{type:Number,default:0},infinite:{type:Boolean,default:!0},hideOnClickModal:Boolean,teleported:Boolean,closeOnPressEscape:{type:Boolean,default:!0},zoomRate:{type:Number,default:1.2},minScale:{type:Number,default:.2},maxScale:{type:Number,default:7},crossorigin:{type:J(String)}}),He={close:()=>!0,switch:g=>q(g),rotate:g=>q(g)},We=["src","crossorigin"],Ge=U({name:"ElImageViewer"}),Ke=U({...Ge,props:je,emits:He,setup(g,{expose:T,emit:f}){var x;const n=g,z={CONTAIN:{name:"contain",icon:H(ze)},ORIGINAL:{name:"original",icon:H(Ce)}},{t:Q}=Me(),o=Ee("image-viewer"),{nextZIndex:ee}=Be(),R=y(),$=y([]),Y=fe(),I=y(!0),b=y(n.initialIndex),O=me(z.CONTAIN),l=y({scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}),ae=y((x=n.zIndex)!=null?x:ee()),te=_(()=>{const{urlList:e}=n;return e.length<=1}),M=_(()=>b.value===0),B=_(()=>b.value===n.urlList.length-1),se=_(()=>n.urlList[b.value]),ne=_(()=>[o.e("btn"),o.e("prev"),o.is("disabled",!n.infinite&&M.value)]),oe=_(()=>[o.e("btn"),o.e("next"),o.is("disabled",!n.infinite&&B.value)]),le=_(()=>{const{scale:e,deg:t,offsetX:s,offsetY:u,enableTransition:m}=l.value;let i=s/e,c=u/e;switch(t%360){case 90:case-270:[i,c]=[c,-i];break;case 180:case-180:[i,c]=[-i,-c];break;case 270:case-90:[i,c]=[-c,i];break}const h={transform:`scale(${e}) rotate(${t}deg) translate(${i}px, ${c}px)`,transition:m?"transform .3s":""};return O.value.name===z.CONTAIN.name&&(h.maxWidth=h.maxHeight="100%"),h});function S(){ie(),f("close")}function re(){const e=X(s=>{switch(s.code){case N.esc:n.closeOnPressEscape&&S();break;case N.space:F();break;case N.left:P();break;case N.up:w("zoomIn");break;case N.right:j();break;case N.down:w("zoomOut");break}}),t=X(s=>{const u=s.deltaY||s.deltaX;w(u<0?"zoomIn":"zoomOut",{zoomRate:n.zoomRate,enableTransition:!1})});Y.run(()=>{L(document,"keydown",e),L(document,"wheel",t)})}function ie(){Y.stop()}function ue(){I.value=!1}function ce(e){I.value=!1,e.target.alt=Q("el.image.error")}function de(e){if(I.value||e.button!==0||!R.value)return;l.value.enableTransition=!1;const{offsetX:t,offsetY:s}=l.value,u=e.pageX,m=e.pageY,i=X(h=>{l.value={...l.value,offsetX:t+h.pageX-u,offsetY:s+h.pageY-m}}),c=L(document,"mousemove",i);L(document,"mouseup",()=>{c()}),e.preventDefault()}function D(){l.value={scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}}function F(){if(I.value)return;const e=$e(z),t=Object.values(z),s=O.value.name,m=(t.findIndex(i=>i.name===s)+1)%e.length;O.value=z[e[m]],D()}function A(e){const t=n.urlList.length;b.value=(e+t)%t}function P(){M.value&&!n.infinite||A(b.value-1)}function j(){B.value&&!n.infinite||A(b.value+1)}function w(e,t={}){if(I.value)return;const{minScale:s,maxScale:u}=n,{zoomRate:m,rotateDeg:i,enableTransition:c}={zoomRate:n.zoomRate,rotateDeg:90,enableTransition:!0,...t};switch(e){case"zoomOut":l.value.scale>s&&(l.value.scale=Number.parseFloat((l.value.scale/m).toFixed(3)));break;case"zoomIn":l.value.scale<u&&(l.value.scale=Number.parseFloat((l.value.scale*m).toFixed(3)));break;case"clockwise":l.value.deg+=i,f("rotate",l.value.deg);break;case"anticlockwise":l.value.deg-=i,f("rotate",l.value.deg);break}l.value.enableTransition=c}return W(se,()=>{ve(()=>{const e=$.value[0];e!=null&&e.complete||(I.value=!0)})}),W(b,e=>{D(),f("switch",e)}),pe(()=>{var e,t;re(),(t=(e=R.value)==null?void 0:e.focus)==null||t.call(e)}),T({setActiveItem:A}),(e,t)=>(C(),G(he,{to:"body",disabled:!e.teleported},[r(Ie,{name:"viewer-fade",appear:""},{default:p(()=>[v("div",{ref_key:"wrapper",ref:R,tabindex:-1,class:d(a(o).e("wrapper")),style:K({zIndex:ae.value})},[v("div",{class:d(a(o).e("mask")),onClick:t[0]||(t[0]=ge(s=>e.hideOnClickModal&&S(),["self"]))},null,2),E(" CLOSE "),v("span",{class:d([a(o).e("btn"),a(o).e("close")]),onClick:S},[r(a(k),null,{default:p(()=>[r(a(Te))]),_:1})],2),E(" ARROW "),a(te)?E("v-if",!0):(C(),V(Z,{key:0},[v("span",{class:d(a(ne)),onClick:P},[r(a(k),null,{default:p(()=>[r(a(Oe))]),_:1})],2),v("span",{class:d(a(oe)),onClick:j},[r(a(k),null,{default:p(()=>[r(a(Le))]),_:1})],2)],64)),E(" ACTIONS "),v("div",{class:d([a(o).e("btn"),a(o).e("actions")])},[v("div",{class:d(a(o).e("actions__inner"))},[r(a(k),{onClick:t[1]||(t[1]=s=>w("zoomOut"))},{default:p(()=>[r(a(Re))]),_:1}),r(a(k),{onClick:t[2]||(t[2]=s=>w("zoomIn"))},{default:p(()=>[r(a(Se))]),_:1}),v("i",{class:d(a(o).e("actions__divider"))},null,2),r(a(k),{onClick:F},{default:p(()=>[(C(),G(be(a(O).icon)))]),_:1}),v("i",{class:d(a(o).e("actions__divider"))},null,2),r(a(k),{onClick:t[3]||(t[3]=s=>w("anticlockwise"))},{default:p(()=>[r(a(Ae))]),_:1}),r(a(k),{onClick:t[4]||(t[4]=s=>w("clockwise"))},{default:p(()=>[r(a(Ve))]),_:1})],2)],2),E(" CANVAS "),v("div",{class:d(a(o).e("canvas"))},[(C(!0),V(Z,null,ke(e.urlList,(s,u)=>we((C(),V("img",{ref_for:!0,ref:m=>$.value[u]=m,key:s,src:s,style:K(a(le)),class:d(a(o).e("img")),crossorigin:e.crossorigin,onLoad:ue,onError:ce,onMousedown:de},null,46,We)),[[_e,u===b.value]])),128))],2),xe(e.$slots,"default")],6)]),_:3})],8,["disabled"]))}});var Ze=Xe(Ke,[["__file","image-viewer.vue"]]);const aa=Ye(Ze);export{aa as E,je as a,He as i,X as t};
