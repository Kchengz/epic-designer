"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const e=require("vue"),l=require("./index-a6f7fd90.cjs"),v=["title"],g={class:"attr-input"},b=e.defineComponent({__name:"attributeView",setup(m){const s=e.inject("designer"),u=e.inject("pageSchema"),d=l.pluginManager.getComponentConfings(),c=e.computed(()=>s.state.checkedNode);function p(n){var a;return typeof n.show=="boolean"?n.show:typeof n.show=="function"?(a=n.show)==null?void 0:a.call(n,{values:c.value}):!0}const r=e.ref([]);e.watch(()=>{var n;return(n=s.state.checkedNode)==null?void 0:n.type},()=>{var o,t;const n=(o=s.state.checkedNode)==null?void 0:o.type;if(!n)return[];const a=((t=d[n])==null?void 0:t.config.attribute)??[];r.value=[{label:"组件ID",type:"input",field:"id",componentProps:{disabled:!0}},...a],n==="page"&&r.value.push({label:"画布宽度",type:"EInputSize",field:"canvas.width",editData:u},{label:"画布高度",type:"EInputSize",field:"canvas.height",editData:u})},{immediate:!0});function f(n,a,o,t=c.value){typeof o.onChange=="function"&&o.onChange({value:n,values:t,componentAttributes:r}),o.changeSync?l.setAttributeValue(n,a,t):e.nextTick(()=>{l.setAttributeValue(n,a,t)}),l.revoke.push(u.schemas,"编辑组件属性")}return(n,a)=>{var o;return e.openBlock(),e.createElementBlock("aside",{class:"epic-attribute-view",key:(o=c.value)==null?void 0:o.id},[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(r.value,t=>{var i;return e.openBlock(),e.createElementBlock("div",{key:t.field},[e.withDirectives(e.createElementVNode("div",{class:e.normalizeClass(["attr-item",t.layout])},[e.createElementVNode("div",{class:"attr-label",title:t.label},e.toDisplayString(t.label),9,v),e.createElementVNode("div",g,[e.createVNode(e.unref(l._sfc_main$1),{componentSchema:{...t,componentProps:{...t.componentProps,...t.field==="componentProps.defaultValue"?(i=c.value)==null?void 0:i.componentProps:{},input:!1,field:void 0,hidden:!1},show:!0,noFormItem:!0},"model-value":e.unref(l.getAttributeValue)(t.field,t.editData??c.value),"onUpdate:modelValue":h=>f(h,t.field,t,t.editData)},null,8,["componentSchema","model-value","onUpdate:modelValue"])])],2),[[e.vShow,p(t)]])])}),128))])}}});exports.default=b;