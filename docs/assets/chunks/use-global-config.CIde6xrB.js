import{e as g,g as x,n as C,S as I,k as d}from"../guide_components_EBuilder.md.Bqzc4ZOG.js";import{u as _,a as z,d as y,l as b,z as S}from"./index.BG3O_jN5.js";import{j as K,aq as f,N,h as a,m as c,Z}from"./framework.Bj7ZzXMq.js";const m=Symbol(),i=K();function p(t,l=void 0){const n=f()?N(m,i):i;return t?a(()=>{var s,o;return(o=(s=n.value)==null?void 0:s[t])!=null?o:l}):n}function h(t,l){const n=p(),s=g(t,a(()=>{var e;return((e=n.value)==null?void 0:e.namespace)||x})),o=_(a(()=>{var e;return(e=n.value)==null?void 0:e.locale})),r=z(a(()=>{var e;return((e=n.value)==null?void 0:e.zIndex)||y})),u=a(()=>{var e;return c(l)||((e=n.value)==null?void 0:e.size)||""});return j(a(()=>c(n)||{})),{ns:s,locale:o,zIndex:r,size:u}}const j=(t,l,n=!1)=>{var s;const o=!!f(),r=o?p():void 0,u=(s=l==null?void 0:l.provide)!=null?s:o?Z:void 0;if(!u)return;const e=a(()=>{const v=c(t);return r!=null&&r.value?k(r.value,v):v});return u(m,e),u(b,a(()=>e.value.locale)),u(C,a(()=>e.value.namespace)),u(S,a(()=>e.value.zIndex)),u(I,{size:a(()=>e.value.size||"")}),(n||!i.value)&&(i.value=e.value),e},k=(t,l)=>{var n;const s=[...new Set([...d(t),...d(l)])],o={};for(const r of s)o[r]=(n=l[r])!=null?n:t[r];return o};export{h as a,m as c,j as p,p as u};
