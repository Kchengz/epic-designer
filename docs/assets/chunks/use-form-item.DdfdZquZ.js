import{f as p,a as t,u as f}from"../guide_components_EBuilder.md.CqpDDJB9.js";import{N as r,j as n,h as I,k as h,x as m,au as w,z as y}from"./framework.C8YhLXwE.js";const K=()=>{const l=r(p,void 0),u=r(t,void 0);return{form:l,formItem:u}},U=(l,{formItemContext:u,disableIdGeneration:d,disableIdManagement:a})=>{d||(d=n(!1)),a||(a=n(!1));const v=n();let i;const c=I(()=>{var s;return!!(!l.label&&u&&u.inputIds&&((s=u.inputIds)==null?void 0:s.length)<=1)});return h(()=>{i=m([w(l,"id"),d],([s,e])=>{const o=s??(e?void 0:f().value);o!==v.value&&(u!=null&&u.removeInputId&&(v.value&&u.removeInputId(v.value),!(a!=null&&a.value)&&!e&&o&&u.addInputId(o)),v.value=o)},{immediate:!0})}),y(()=>{i&&i(),u!=null&&u.removeInputId&&v.value&&u.removeInputId(v.value)}),{isLabeledByFormItem:c,inputId:v}};export{U as a,K as u};
