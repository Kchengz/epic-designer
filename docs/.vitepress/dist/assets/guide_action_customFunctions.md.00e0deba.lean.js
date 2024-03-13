import{f as F,c as r,u as e}from"./chunks/index.0d4f5749.js";import{r as y,b as C,o as A,c as i,d as a,e as s,u as n,a as o,f as u}from"./app.b200646e.js";const q=o("",5),d={class:"epic-designer-container"},h=a("h2",{id:"\u663E\u793A-\u7981\u7528\u4EA4\u4E92\u793A\u4F8B-\u6E32\u67D3\u7EC4\u4EF6",tabindex:"-1"},[u("\u663E\u793A,\u7981\u7528\u4EA4\u4E92\u793A\u4F8B-\u6E32\u67D3\u7EC4\u4EF6 "),a("a",{class:"header-anchor",href:"#\u663E\u793A-\u7981\u7528\u4EA4\u4E92\u793A\u4F8B-\u6E32\u67D3\u7EC4\u4EF6","aria-hidden":"true"},"#")],-1),m=o("",3),E=o("",13),B=JSON.parse('{"title":"\u81EA\u5B9A\u4E49\u51FD\u6570","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u663E\u793A,\u7981\u7528\u4EA4\u4E92\u793A\u4F8B-\u8BBE\u8BA1\u7EC4\u4EF6","slug":"\u663E\u793A-\u7981\u7528\u4EA4\u4E92\u793A\u4F8B-\u8BBE\u8BA1\u7EC4\u4EF6","link":"#\u663E\u793A-\u7981\u7528\u4EA4\u4E92\u793A\u4F8B-\u8BBE\u8BA1\u7EC4\u4EF6","children":[]},{"level":2,"title":"\u663E\u793A,\u7981\u7528\u4EA4\u4E92\u793A\u4F8B-\u6E32\u67D3\u7EC4\u4EF6","slug":"\u663E\u793A-\u7981\u7528\u4EA4\u4E92\u793A\u4F8B-\u6E32\u67D3\u7EC4\u4EF6","link":"#\u663E\u793A-\u7981\u7528\u4EA4\u4E92\u793A\u4F8B-\u6E32\u67D3\u7EC4\u4EF6","children":[]},{"level":2,"title":"\u8868\u5355\u81EA\u52A8\u6C42\u548C-\u6E32\u67D3\u7EC4\u4EF6","slug":"\u8868\u5355\u81EA\u52A8\u6C42\u548C-\u6E32\u67D3\u7EC4\u4EF6","link":"#\u8868\u5355\u81EA\u52A8\u6C42\u548C-\u6E32\u67D3\u7EC4\u4EF6","children":[]},{"level":2,"title":"Epic Methods","slug":"epic-methods","link":"#epic-methods","children":[]}],"relativePath":"guide/action/customFunctions.md"}'),f={name:"guide/action/customFunctions.md"},P=Object.assign(f,{setup(b){F();const p=y(null),l={schemas:[{type:"page",id:"root",label:"\u9875\u9762",children:[{label:"\u8868\u5355",type:"form",icon:"epic-icon-daibanshixiang",componentProps:{size:"default",labelWidth:100,labelCol:{span:5},wrapperCol:{span:19},hideRequiredMark:!1,labelPosition:"right",requireAsteriskPosition:"left"},id:"3543akxhdum00",name:"default",children:[{label:"\u6805\u683C\u5E03\u5C40",type:"row",icon:"epic-icon-zhage",childImmovable:!0,children:[{type:"col",children:[{label:"\u7981\u7528\u59D3\u540D",type:"switch",icon:"epic-icon-kaiguan3",field:"switch_vhzz40mc",input:!0,componentProps:{disabled:!1},id:"switch_vhzz40mc",on:{change:[{type:"custom",methodName:"setDisabled",componentId:null}]}}],componentProps:{span:12},id:"col_fmqw6vre"},{type:"col",children:[{label:"\u9690\u85CF\u59D3\u540D",type:"switch",icon:"epic-icon-kaiguan3",field:"switch_k561x18z",input:!0,componentProps:{},id:"switch_k561x18z",on:{change:[{type:"custom",methodName:"test",componentId:null}]}}],componentProps:{span:12},id:"col_i5q4prg6"}],id:"row_w2fw9pkw"},{label:"\u59D3\u540D",type:"input",icon:"epic-icon-write",field:"input_ho0tpt7i7tc00",input:!0,componentProps:{placeholder:"\u8BF7\u8F93\u5165",defaultValue:"",size:"default",type:"text",hidden:!1,disabled:!1},id:"ho0tpt7i7tc00",on:{input:[{type:"custom",methodName:"test",componentId:null}]}}]}],componentProps:{style:{padding:"16px"}}}],script:`const { defineExpose, getComponent } = this;

function test (e){
    getComponent('ho0tpt7i7tc00').setAttr('hidden',e)
}

function setDisabled (e){
    getComponent('ho0tpt7i7tc00').setAttr('disabled',e)
}

// \u901A\u8FC7defineExpose\u66B4\u9732\u7684\u51FD\u6570\u6216\u8005\u5C5E\u6027
defineExpose({
 test,
 setDisabled
})`},D={schemas:[{type:"page",id:"root",label:"\u9875\u9762",children:[{label:"\u8868\u5355",type:"form",icon:"epic-icon-daibanshixiang",name:"default",componentProps:{labelWidth:100,labelCol:{span:5},wrapperCol:{span:19},hideRequiredMark:!1,labelPosition:"right",size:"default",requireAsteriskPosition:"left"},children:[{label:"\u6570\u503C1",type:"number",icon:"epic-icon-number",field:"number_9m5zzib6",input:!0,componentProps:{style:{width:"100%"},placeholder:"\u8BF7\u8F93\u5165"},id:"1",on:{change:[{type:"custom",methodName:"test",componentId:null}]}},{label:"\u6570\u503C2",type:"number",icon:"epic-icon-number",field:"number_szitefkr",input:!0,componentProps:{style:{width:"100%"},placeholder:"\u8BF7\u8F93\u5165"},id:"2",on:{change:[{type:"custom",methodName:"test",componentId:null}]}},{label:"\u603B\u503C",type:"number",icon:"epic-icon-number",field:"number_bs7n1wpv",input:!0,componentProps:{style:{width:"100%"},placeholder:"\u8BF7\u8F93\u5165"},id:"3"}],id:"3543akxhdum00"}],componentProps:{style:{padding:"16px"}}}],script:`const { defineExpose, getComponent } = this;

function test (e){
    const sum = (getComponent('1').getValue()??0)+ (getComponent('2').getValue()??0)
    getComponent('3').setValue(sum)
    
}

// \u901A\u8FC7defineExpose\u66B4\u9732\u7684\u51FD\u6570\u6216\u8005\u5C5E\u6027
defineExpose({
 test 
})`};C(()=>{p.value.setData(l)});function c(t){console.log(t)}return(t,_)=>(A(),i("div",null,[q,a("div",d,[s(n(r),{ref_key:"edRef",ref:p,onSave:c},null,512)]),h,s(n(e),{pageSchema:l}),m,s(n(e),{pageSchema:D}),E]))}});export{B as __pageData,P as default};
