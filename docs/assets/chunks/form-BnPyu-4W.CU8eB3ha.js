import{E as w}from"../guide_components_EBuilder.md.Bqzc4ZOG.js";import{d as x,j as i,N as D,an as k,Z as _,k as j,h as p,o as u,c as d,I as E,w as F,r as f,F as M,D as N,M as O,m as P,e as $}from"./framework.Bj7ZzXMq.js";import"./index-dBLYGWys.BhaKRvQG.js";import"./fromPairs.Dx9PT-t0.js";import"./getTag.DtjCqBUh.js";import"./index.Dmr5GdgH.js";import"./getPrototype.57D5m4QL.js";import"./getAllKeys.BwAxqbuf.js";import"./baseSet.CkGxAcGT.js";const B={key:0,class:"form-main",style:{height:"100%"}},H=x({__name:"form",props:{componentSchema:{type:Object,require:!0,default:()=>({})}},setup(v,{expose:h}){const o=i(null),r=D("forms",{}),y=i(!0),l=k({});_("formData",l);const n=v;function m(){return l}function s(e){Object.assign(l,e)}function S(){var e;return(e=o.value)==null?void 0:e.validate()}j(async()=>{var e,a,t,c;if(((e=n.componentSchema)==null?void 0:e.type)==="form"&&r.value&&o.value){const C=((t=(a=n.componentSchema)==null?void 0:a.componentProps)==null?void 0:t.name)??((c=n.componentSchema)==null?void 0:c.name)??"default";return r.value[C]=o.value,o.value.getData=m,o.value.setData=s,!1}});const g=p(()=>{const e=n.componentSchema.componentProps;let a=e.labelCol,t=e.wrapperCol;return e.labelLayout==="fixed"&&(a={style:`width:${e.labelWidth}px`},t={style:"width:auto;flex:1"}),{...e,labelCol:a,wrapperCol:t}}),b=p(()=>n.componentSchema.children??[]);return h({form:o,getData:m,setData:s,validate:S}),(e,a)=>y.value?(u(),d("div",B,[E(P(w),O({ref_key:"form",ref:o,model:l},g.value,{style:{height:"100%"}}),{default:F(()=>[f(e.$slots,"edit-node",{},()=>[(u(!0),d(M,null,N(b.value,t=>f(e.$slots,"node",{componentSchema:t})),256))])]),_:3},16,["model"])])):$("",!0)}});export{H as default};
