import{E as w}from"../guide_components_EBuilder.md.CqpDDJB9.js";import{d as x,j as i,N as D,an as k,Z as _,k as j,h as p,o as u,c as d,I as N,w as E,r as f,F,D as P,M as W,m as $,e as q}from"./framework.C8YhLXwE.js";import"./index-DZavvwVo.CLpuZ4sn.js";import"./fromPairs.Dx9PT-t0.js";import"./getTag.DtjCqBUh.js";import"./index.Dmr5GdgH.js";import"./getPrototype.57D5m4QL.js";import"./getAllKeys.BwAxqbuf.js";import"./baseSet.CkGxAcGT.js";const B={key:0,class:"form-main",style:{height:"100%"}},H=x({__name:"form",props:{componentSchema:{type:Object,require:!0,default:()=>({})}},setup(v,{expose:h}){const t=i(null),r=D("forms",{}),y=i(!0),l=k({});_("formData",l);const n=v;function m(){return l}function s(e){Object.assign(l,e)}function b(){var e;return(e=t.value)==null?void 0:e.validate()}j(async()=>{var e,a,o,c;if(((e=n.componentSchema)==null?void 0:e.type)==="form"&&r.value&&t.value){const C=((o=(a=n.componentSchema)==null?void 0:a.componentProps)==null?void 0:o.name)??((c=n.componentSchema)==null?void 0:c.name)??"default";return r.value[C]=t.value,t.value.getData=m,t.value.setData=s,!1}});const S=p(()=>{const e=n.componentSchema.componentProps;let a=e.labelCol,o=e.wrapperCol;return e.labelLayout==="fixed"&&(a={style:`width:${typeof e.labelWidth=="number"?e.labelWidth+"px":e.labelWidth}`},o={style:"width:auto;flex:1"}),{...e,labelCol:a,wrapperCol:o}}),g=p(()=>n.componentSchema.children??[]);return h({form:t,getData:m,setData:s,validate:b}),(e,a)=>y.value?(u(),d("div",B,[N($(w),W({ref_key:"form",ref:t,model:l},S.value,{style:{height:"100%"}}),{default:E(()=>[f(e.$slots,"edit-node",{},()=>[(u(!0),d(F,null,P(g.value,o=>f(e.$slots,"node",{componentSchema:o})),256))])]),_:3},16,["model"])])):q("",!0)}});export{H as default};
