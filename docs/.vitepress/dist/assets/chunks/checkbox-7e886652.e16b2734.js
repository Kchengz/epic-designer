import{e as p,_ as m,l as i}from"./index-0319fe2a.fdc23efa.js";import"./index-9f785207.e6578421.js";import"./isEqual-1d4135ea.f7b5493f.js";import{e as s,R as a}from"../app.f47f61a8.js";import"./use-form-item-ae3e8135.f9b79cbe.js";const B=s({emits:["update:modelValue"],setup(d,{emit:u,attrs:n}){function r(e=null){u("update:modelValue",e)}return()=>{const e={...n,"onUpdate:modelValue":r};return a(i,e,{default:()=>{var t,o;return[e!=null&&e.radioButton?(t=e.options)==null?void 0:t.map(l=>a(p,{label:l.label,value:l.value})):(o=e.options)==null?void 0:o.map(l=>a(m,{label:l.label,value:l.value}))]}})}}});export{B as default};