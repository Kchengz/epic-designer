"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const e=require("vue"),u=require("ant-design-vue"),a=e.defineComponent({props:{componentSchema:{type:Object,require:!0,default:()=>({})}},setup(n,{attrs:l,slots:o}){return()=>{var r;const t={...n.componentSchema,title:((r=n.componentSchema)==null?void 0:r.label)??""},c=t.children;return delete t.children,e.h(u.Row,t,{default:()=>e.renderSlot(o,"edit-node",{},()=>c.map(d=>e.renderSlot(o,"node",{componentSchema:d})))})}}});exports.default=a;