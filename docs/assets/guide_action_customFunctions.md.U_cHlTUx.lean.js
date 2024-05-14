import{z as r,r as y,s as k}from"./chunks/index-dBLYGWys.BhaKRvQG.js";import{u as E,E as F,t as p,C as g}from"./chunks/revoke.BrdSO0Zx.js";import{j as c,k as C,c as u,l as t,I as i,m as s,a3 as a,a as B,o as q}from"./chunks/framework.Bj7ZzXMq.js";import"./chunks/commonjsHelpers-CT_km90n.D7mXbCtF.js";import"./chunks/index.DOFZgDuz.js";const f=a("",5),D={class:"epic-designer-container"},m=t("h2",{id:"显示-禁用交互示例-渲染组件",tabindex:"-1"},[B("显示,禁用交互示例-渲染组件 "),t("a",{class:"header-anchor",href:"#显示-禁用交互示例-渲染组件","aria-label":'Permalink to "显示,禁用交互示例-渲染组件"'},"​")],-1),A=a("",3),b=a("",2),_=a("",11),V=JSON.parse('{"title":"自定义函数","description":"","frontmatter":{},"headers":[],"relativePath":"guide/action/customFunctions.md","filePath":"guide/action/customFunctions.md"}'),P={name:"guide/action/customFunctions.md"},N=Object.assign(P,{setup(x){const{isDark:e}=E();F(r);const n=c(null),l={schemas:[{type:"page",id:"root",label:"页面",children:[{label:"表单",type:"form",icon:"epic-icon-daibanshixiang",componentProps:{size:"default",labelWidth:100,labelCol:{span:5},wrapperCol:{span:19},hideRequiredMark:!1,labelPosition:"right",requireAsteriskPosition:"left",labelWidth:100,labelLayout:"fixed"},id:"3543akxhdum00",name:"default",children:[{label:"栅格布局",type:"row",icon:"epic-icon-zhage",childImmovable:!0,children:[{type:"col",children:[{label:"禁用姓名",type:"switch",icon:"epic-icon-kaiguan3",field:"switch_vhzz40mc",input:!0,componentProps:{disabled:!1},id:"switch_vhzz40mc",on:{change:[{type:"custom",methodName:"setDisabled",componentId:null}]}}],componentProps:{span:12},id:"col_fmqw6vre"},{type:"col",children:[{label:"隐藏姓名",type:"switch",icon:"epic-icon-kaiguan3",field:"switch_k561x18z",input:!0,componentProps:{},id:"switch_k561x18z",on:{change:[{type:"custom",methodName:"test",componentId:null}]}}],componentProps:{span:12},id:"col_i5q4prg6"}],id:"row_w2fw9pkw"},{label:"姓名",type:"input",icon:"epic-icon-write",field:"input_ho0tpt7i7tc00",input:!0,componentProps:{placeholder:"请输入",defaultValue:"",size:"default",type:"text",hidden:!1,disabled:!1},id:"ho0tpt7i7tc00",on:{input:[{type:"custom",methodName:"test",componentId:null}]}}]}],componentProps:{style:{padding:"16px"}}}],script:`const { defineExpose, getComponent } = this;

function test (e){
    getComponent('ho0tpt7i7tc00').setAttr('hidden',e)
}

function setDisabled (e){
    getComponent('ho0tpt7i7tc00').setAttr('disabled',e)
}

// 通过defineExpose暴露的函数或者属性
defineExpose({
 test,
 setDisabled
})`},o={schemas:[{type:"page",id:"root",label:"页面",children:[{label:"表单",type:"form",icon:"epic-icon-daibanshixiang",name:"default",componentProps:{labelWidth:100,labelCol:{span:5},wrapperCol:{span:19},hideRequiredMark:!1,labelPosition:"right",size:"default",requireAsteriskPosition:"left"},children:[{label:"数值1",type:"number",icon:"epic-icon-number",field:"number_9m5zzib6",input:!0,componentProps:{style:{width:"100%"},placeholder:"请输入"},id:"1",on:{change:[{type:"custom",methodName:"test",componentId:null}]}},{label:"数值2",type:"number",icon:"epic-icon-number",field:"number_szitefkr",input:!0,componentProps:{style:{width:"100%"},placeholder:"请输入"},id:"2",on:{change:[{type:"custom",methodName:"test",componentId:null}]}},{label:"总值",type:"number",icon:"epic-icon-number",field:"number_bs7n1wpv",input:!0,componentProps:{style:{width:"100%"},placeholder:"请输入"},id:"3"}],id:"3543akxhdum00"}],componentProps:{style:{padding:"16px"}}}],script:`const { defineExpose, getComponent } = this;

function test (e){
    const sum = (getComponent('1').getValue()??0)+ (getComponent('2').getValue()??0)
    getComponent('3').setValue(sum)
    
}

// 通过defineExpose暴露的函数或者属性
defineExpose({
 test 
})`};C(()=>{n.value.setData(l)});function d(h){console.log(h)}return(h,w)=>(q(),u("div",null,[f,t("div",D,[i(s(y),{ref_key:"edRef",ref:n,onSave:d},null,512)]),m,i(s(k),{pageSchema:l}),A,i(s(k),{pageSchema:o}),b,i(s(g),{theme:{algorithm:s(e)?s(p).darkAlgorithm:s(p).defaultAlgorithm}},null,8,["theme"]),_]))}});export{V as __pageData,N as default};
