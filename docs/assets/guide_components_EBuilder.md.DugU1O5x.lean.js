import{L as F,T as c,P as t}from"./chunks/index-NP0d70UY.CIJ65HY9.js";import{j as h,k as u,c as q,l as s,I as p,m as k,t as C,a3 as n,o as B}from"./chunks/framework.Bp6pYewT.js";const m=n("",4),b=n("",2),f=n("",2),A=n("",6),D=s("table",null,[s("thead",null,[s("tr",null,[s("th",null,"事件名称"),s("th",null,"说明"),s("th",null,"参数"),s("th",null,"版本")])]),s("tbody",null,[s("tr",null,[s("td",null,"ready"),s("td",null,"页面渲染完时触发"),s("td",{pageManager:""}),s("td")])])],-1),S=JSON.parse('{"title":"EBuilder 生成器","description":"","frontmatter":{},"headers":[],"relativePath":"guide/components/EBuilder.md","filePath":"guide/components/EBuilder.md"}'),_={name:"guide/components/EBuilder.md"},T=Object.assign(_,{setup(v){F(c);const E=h(null),e=h(null),a=h(null),d={schemas:[{type:"page",id:"root",children:[{label:"输入框",type:"input",field:"input",icon:"epic-icon-write",input:!0,componentProps:{defaultValue:"",placeholder:"请输入",size:"default",type:"text"},id:"gbm1xhrrj5s00"}],componentProps:{style:{padding:"16px"}}}]},r={schemas:[{type:"page",id:"root",children:[{label:"表单",type:"form",icon:"epic-icon-qiapian",name:"default",componentProps:{labelWidth:100,labelCol:{span:5},wrapperCol:{span:19},hideRequiredMark:!1,labelPosition:"right",size:"default",requireAsteriskPosition:"left"},children:[{label:"输入框",type:"input",field:"input",icon:"epic-icon-write",input:!0,componentProps:{defaultValue:"",placeholder:"请输入",size:"default",type:"text"},id:"7k6ajqpxhl000"},{label:"数字输入框",type:"number",icon:"epic-icon-number",field:"number",input:!0,componentProps:{placeholder:"请输入",size:"default",controlsPosition:"default"},id:"i6x0mqlm6js00"},{label:"选择框",type:"select",icon:"epic-icon-xiala",field:"select",input:!0,componentProps:{options:[{label:"选项1",value:"选项1"},{label:"选项2",value:"选项2"}],placeholder:"请选择",size:"default",effect:"light",placement:"bottom-start"},id:"80gl3fnca3g00"},{label:"单选框",type:"radio",icon:"epic-icon-danxuan-cuxiantiao",field:"radio",input:!0,componentProps:{options:[{label:"选项1",value:"选项1"},{label:"选项2",value:"选项2"}],size:"default"},id:"2ggd4l3i109w0"}],id:"eqf5rtg2ohc00"}],componentProps:{style:{padding:"16px"}}}]};async function g(){e.value={...await E.value.validate()}}async function y(){var l;console.log(a.value);const i=await((l=a.value)==null?void 0:l.getFormInstance());i==null||i.resetFields()}const o={schemas:[{type:"page",id:"root",label:"页面",children:[{label:"表单",type:"form",icon:"epic-icon-daibanshixiang",componentProps:{name:"default",labelWidth:100,labelCol:{span:5},wrapperCol:{span:19},hideRequiredMark:!1,labelPlacement:"left",labelAlign:"right",requireMarkPlacement:"right",size:"medium"},children:[{label:"姓名",type:"input",field:"input_sb6jhfb8",icon:"epic-icon-write",input:!0,componentProps:{defaultValue:"",placeholder:"请输入",type:"text",size:"medium",disabled:!1},id:"input_sb6jhfb8"}],id:"form_18vemlk8"}],componentProps:{style:{padding:"16px"}}}]};return u(async()=>{var i;(i=a.value)==null||i.setData({input_sb6jhfb8:"自动填写的内容"})}),(i,l)=>(B(),q("div",null,[m,s("div",null,[p(k(t),{pageSchema:d})]),b,s("div",null,[p(k(t),{ref_key:"ebForm",ref:E,pageSchema:r},null,512),s("button",{onClick:g},"获取数据"),s("div",null,C(e.value),1)]),f,s("div",null,[p(k(t),{ref_key:"ebRef2",ref:a,pageSchema:o},null,512),s("button",{onClick:y}," 重置表单 ")]),A,D]))}});export{S as __pageData,T as default};
