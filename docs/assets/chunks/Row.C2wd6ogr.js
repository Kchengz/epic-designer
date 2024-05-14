import{d as z,_ as h,u as C,a as O,s as y,c as E}from"./useConfigInject.wP4KD9rp.js";import{h as m,d as B,j as R,k as _,ap as k,I as H}from"./framework.Bkcw4pAp.js";import{u as I}from"./useFlexGapSupport.DBCY_Bx4.js";import{b as N,c as T}from"./index.unhIxbWw.js";const x=["xxxl","xxl","xl","lg","md","sm","xs"],q=s=>({xs:`(max-width: ${s.screenXSMax}px)`,sm:`(min-width: ${s.screenSM}px)`,md:`(min-width: ${s.screenMD}px)`,lg:`(min-width: ${s.screenLG}px)`,xl:`(min-width: ${s.screenXL}px)`,xxl:`(min-width: ${s.screenXXL}px)`,xxxl:`{min-width: ${s.screenXXXL}px}`});function D(){const[,s]=z();return m(()=>{const u=q(s.value),l=new Map;let c=-1,a={};return{matchHandlers:{},dispatch(r){return a=r,l.forEach(o=>o(a)),l.size>=1},subscribe(r){return l.size||this.register(),c+=1,l.set(c,r),r(a),c},unsubscribe(r){l.delete(r),l.size||this.unregister()},unregister(){Object.keys(u).forEach(r=>{const o=u[r],n=this.matchHandlers[o];n==null||n.mql.removeListener(n==null?void 0:n.listener)}),l.clear()},register(){Object.keys(u).forEach(r=>{const o=u[r],n=p=>{let{matches:v}=p;this.dispatch(h(h({},a),{[r]:v}))},f=window.matchMedia(o);f.addListener(n),this.matchHandlers[o]={mql:f,listener:n},n(f)})},responsiveMap:u}})}const F=()=>({align:y([String,Object]),justify:y([String,Object]),prefixCls:String,gutter:y([Number,Array,Object],0),wrap:{type:Boolean,default:void 0}}),K=B({compatConfig:{MODE:3},name:"ARow",inheritAttrs:!1,props:F(),setup(s,u){let{slots:l,attrs:c}=u;const{prefixCls:a,direction:r}=C("row",s),[o,n]=N(a);let f;const p=D(),v=R({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),w=R({xs:!1,sm:!1,md:!1,lg:!1,xl:!1,xxl:!1}),$=e=>m(()=>{if(typeof s[e]=="string")return s[e];if(typeof s[e]!="object")return"";for(let t=0;t<x.length;t++){const d=x[t];if(!w.value[d])continue;const i=s[e][d];if(i!==void 0)return i}return""}),j=$("align"),A=$("justify"),S=I();_(()=>{f=p.value.subscribe(e=>{w.value=e;const t=s.gutter||0;(!Array.isArray(t)&&typeof t=="object"||Array.isArray(t)&&(typeof t[0]=="object"||typeof t[1]=="object"))&&(v.value=e)})}),k(()=>{p.value.unsubscribe(f)});const M=m(()=>{const e=[void 0,void 0],{gutter:t=0}=s;return(Array.isArray(t)?t:[t,void 0]).forEach((i,G)=>{if(typeof i=="object")for(let g=0;g<x.length;g++){const b=x[g];if(v.value[b]&&i[b]!==void 0){e[G]=i[b];break}}else e[G]=i}),e});T({gutter:M,supportFlexGap:S,wrap:m(()=>s.wrap)});const L=m(()=>E(a.value,{[`${a.value}-no-wrap`]:s.wrap===!1,[`${a.value}-${A.value}`]:A.value,[`${a.value}-${j.value}`]:j.value,[`${a.value}-rtl`]:r.value==="rtl"},c.class,n.value)),X=m(()=>{const e=M.value,t={},d=e[0]!=null&&e[0]>0?`${e[0]/-2}px`:void 0,i=e[1]!=null&&e[1]>0?`${e[1]/-2}px`:void 0;return d&&(t.marginLeft=d,t.marginRight=d),S.value?t.rowGap=`${e[1]}px`:i&&(t.marginTop=i,t.marginBottom=i),t});return()=>{var e;return o(H("div",O(O({},c),{},{class:L.value,style:h(h({},X.value),c.style)}),[(e=l.default)===null||e===void 0?void 0:e.call(l)]))}}});export{K as A,x as r,D as u};
