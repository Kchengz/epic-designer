import{z as v}from"./index-dBLYGWys.BhaKRvQG.js";import{d as b,j as n,x as m,o as h,b as w,w as z,I as C,m as p,R as U}from"./framework.Bj7ZzXMq.js";const y=b({__name:"index",props:{modelValue:{type:String,default:null}},emits:["update:modelValue"],setup(d,{emit:s}){const i=v.getComponent("input"),r=v.getComponent("select"),c=d,f=s,l=n(null),u=n("px"),x=[{label:"px",value:"px"},{label:"%",value:"%"},{label:"vw",value:"vw"},{label:"vh",value:"vh"},{label:"rem",value:"rem"},{label:"em",value:"em"},{label:"pt",value:"pt"}];m(()=>c.modelValue,o=>{const e=parseFloat(o);if(isNaN(e))return l.value=null,!1;const a=/^(\d+(\.\d+)?)(px|%|vw|vh|rem|em|pt){1}$/,t=o.trim().match(a);l.value=(t==null?void 0:t[1])??null,u.value=(t==null?void 0:t[3])??""},{immediate:!0}),m(()=>u.value+l.value,()=>{V()});function V(){U(()=>f("update:modelValue",l.value?l.value+u.value:void 0))}return(o,e)=>(h(),w(p(i),{class:"epic-input-size",modelValue:l.value,"onUpdate:modelValue":e[2]||(e[2]=a=>l.value=a),value:l.value,"onUpdate:value":e[3]||(e[3]=a=>l.value=a),type:"number",min:"0",placeholder:"请输入"},{suffix:z(()=>[C(p(r),{value:u.value,"onUpdate:value":e[0]||(e[0]=a=>u.value=a),modelValue:u.value,"onUpdate:modelValue":e[1]||(e[1]=a=>u.value=a),style:{width:"68px"},options:x},null,8,["value","modelValue"])]),_:1},8,["modelValue","value"]))}});export{y as default};
