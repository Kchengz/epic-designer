"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const e=require("vue"),c=require("./index-a6f7fd90.cjs"),v=require("./icon.vue_vue_type_script_setup_true_lang-5a70b817.cjs"),k={key:0,class:"del-btn"},V=["onClick"],f=e.defineComponent({__name:"index",props:{modelValue:{type:Array,default:()=>[]}},emits:["update:modelValue"],setup(u,{emit:r}){const s=c.pluginManager.getComponent("number"),d=u,p=r,o=e.computed({get(){return d.modelValue},set(n){p("update:modelValue",n)}});function m(){const n={type:"col",children:[],componentProps:{span:12},id:c.getUUID()};o.value.push(n)}function i(n){o.value=o.value.filter((_,t)=>n!==t)}return(n,_)=>(e.openBlock(),e.createElementBlock("div",null,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(o.value,(t,a)=>(e.openBlock(),e.createElementBlock("div",{key:a,class:"EColEditor-item"},[e.createVNode(e.unref(s),{value:t.componentProps.span,"onUpdate:value":l=>t.componentProps.span=l,modelValue:t.componentProps.span,"onUpdate:modelValue":l=>t.componentProps.span=l,style:{width:"100%"},min:1,max:24},null,8,["value","onUpdate:value","modelValue","onUpdate:modelValue"]),o.value.length>1?(e.openBlock(),e.createElementBlock("div",k,[e.createElementVNode("span",{onClick:l=>i(a)},[e.createVNode(e.unref(v._sfc_main),{name:"icon-shanchu1"})],8,V)])):e.createCommentVNode("",!0)]))),128)),e.createElementVNode("div",{class:"add-btn",onClick:m}," 添加 ")]))}});exports.default=f;