import{B as h,c7 as C}from"./index.c442f65c.js";import{m as k}from"./icon.vue_vue_type_script_setup_true_lang-3f9e4127.b898144b.js";import{i as y,m as g,o,c as n,F as B,E,d as u,e as s,u as m,C as N}from"../app.c1700df1.js";const U={key:0,class:"del-btn"},_=["onClick"],A=y({__name:"index",props:{modelValue:{type:Array,default:()=>[]}},emits:["update:modelValue"],setup(i,{emit:r}){const p=h.getComponent("input"),c=i,v=r,l=g({get(){return c.modelValue},set(e){v("update:modelValue",e)}});function f(){const e={label:"\u6807\u7B7E\u9875",type:"tab-pane",children:[],id:C()};l.value.push(e)}function V(e){l.value=l.value.filter((b,a)=>e!==a)}return(e,b)=>(o(),n("div",null,[(o(!0),n(B,null,E(l.value,(a,d)=>(o(),n("div",{key:d,class:"EColEditor-item"},[s(m(p),{value:a.label,"onUpdate:value":t=>a.label=t,modelValue:a.label,"onUpdate:modelValue":t=>a.label=t,style:{width:"100%"}},null,8,["value","onUpdate:value","modelValue","onUpdate:modelValue"]),l.value.length>1?(o(),n("div",U,[u("span",{onClick:t=>V(d)},[s(m(k),{name:"icon-shanchu"})],8,_)])):N("",!0)]))),128)),u("div",{class:"add-btn",onClick:f}," \u6DFB\u52A0 ")]))}});export{A as default};
