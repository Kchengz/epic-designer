import{h as p,i as y,e as u,_ as c,w as m}from"../guide_components_EBuilder.md.Bqzc4ZOG.js";import{d as f,o as r,c as t,n as o,m as s,r as l,a as d,t as n,e as i,l as h,P as v}from"./framework.Bj7ZzXMq.js";const S=p({header:{type:String,default:""},footer:{type:String,default:""},bodyStyle:{type:y([String,Object,Array]),default:""},bodyClass:String,shadow:{type:String,values:["always","hover","never"],default:"always"}}),b=f({name:"ElCard"}),C=f({...b,props:S,setup(g){const a=u("card");return(e,$)=>(r(),t("div",{class:o([s(a).b(),s(a).is(`${e.shadow}-shadow`)])},[e.$slots.header||e.header?(r(),t("div",{key:0,class:o(s(a).e("header"))},[l(e.$slots,"header",{},()=>[d(n(e.header),1)])],2)):i("v-if",!0),h("div",{class:o([s(a).e("body"),e.bodyClass]),style:v(e.bodyStyle)},[l(e.$slots,"default")],6),e.$slots.footer||e.footer?(r(),t("div",{key:1,class:o(s(a).e("footer"))},[l(e.$slots,"footer",{},()=>[d(n(e.footer),1)])],2)):i("v-if",!0)],2))}});var w=c(C,[["__file","card.vue"]]);const N=m(w);export{N as E,S as c};
