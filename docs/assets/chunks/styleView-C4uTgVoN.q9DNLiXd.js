import{J as P,O as b,U as r,E as g}from"./index-dBLYGWys.7krGtM9u.js";import{d as k,N as d,h as S,o as n,c as s,F as w,D as E,l as p,n as V,t as C,I,m,e as N,R as z}from"./framework.Bkcw4pAp.js";const U=["title"],D={class:"epic-attr-input"},J=k({__name:"styleView",setup(x){const u=d("designer"),y=d("pageSchema"),i=[{label:"宽度",type:"EInputSize",field:"componentProps.style.width"},{label:"高度",type:"EInputSize",field:"componentProps.style.height"},{label:"内边距",type:"EInputSize",field:"componentProps.style.padding"},{label:"外边距",type:"EInputSize",field:"componentProps.style.margin"},{label:"背景色",type:"color-picker",field:"componentProps.style.backgroundColor",componentProps:{type:"color",style:{}}},{label:"字体颜色",type:"color-picker",field:"componentProps.style.color",componentProps:{type:"color",style:{}}}],a=S(()=>u.state.checkedNode);function f(t){var o;return typeof t.show=="boolean"?t.show:((o=t.show)==null?void 0:o.call(t,{values:a.value}))??!0}function v(t,o,l,e=a.value){typeof l.onChange=="function"&&l.onChange({value:t,values:e,componentStyles:i}),l.changeSync?r(t,o,e):z(()=>{r(t,o,e)}),g.push(y.schemas,"编辑组件属性")}return(t,o)=>{var l;return n(),s("div",{class:"epic-style-view",key:(l=a.value)==null?void 0:l.id},[(n(),s(w,null,E(i,e=>{var c;return p("div",{key:e.field},[f(e)?(n(),s("div",{key:0,class:V(["epic-attr-item",e.layout])},[p("div",{class:"epic-attr-label",title:e.label},C(e.label),9,U),p("div",D,[I(m(b),{componentSchema:{...e,componentProps:{...e.componentProps,...e.field==="componentProps.defaultValue"?(c=a.value)==null?void 0:c.componentProps:{},input:!1,field:void 0,hidden:!1},show:!0,noFormItem:!0},"model-value":m(P)(e.field,e.editData??a.value),"onUpdate:modelValue":h=>v(h,e.field,e,e.editData)},null,8,["componentSchema","model-value","onUpdate:modelValue"])])],2)):N("",!0)])}),64))])}}});export{J as default};
