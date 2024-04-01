"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const e=require("vue"),g=require("./index-a6f7fd90.cjs"),x=require("./icon.vue_vue_type_script_setup_true_lang-5a70b817.cjs"),b=require("./vuedraggable.umd-50dcd280.cjs"),S=require("./tree.vue_vue_type_script_setup_true_lang-5f07d7cc.cjs");require("./_commonjsHelpers-6763f629.cjs");require("./_vue_commonjs-external-0743e21a.cjs");const $={class:"event-info"},w=["title"],M={class:"event-btn"},O={class:"epic-action-editor-main"},A={class:"epic-editor-item"},j={class:"w-36px text-lg"},D={class:"flex-1"},U={key:0},L={key:1},q={key:2},K={class:"opr-box"},R=["onClick"],z=["onClick"],F=e.defineComponent({__name:"EActionEditorItem",props:{itemEvents:{type:Array,default:()=>[]},allEvents:{type:Array,default:()=>[]},modelValue:{type:Object,default:()=>[]},events:{type:Object,default:()=>({})}},emits:["add","edit","update:modelValue"],setup(E,{emit:V}){const m=E,h=V,v=e.inject("pageSchema");function _(p){h("add",p)}function f(p){return g.findSchemaById(v.schemas,p).label}function u(p,i){var t;const a=n(i);a[i]=m.events[i].filter((N,I)=>p!==I),(t=a[i])!=null&&t.length||delete a[i],h("update:modelValue",a)}function r(p,i,a){h("edit",p,i,a)}function n(p){const i={};return m.allEvents.forEach(a=>{if(!m.events[a.type].length||a.type===p)return!1;i[a.type]=m.events[a.type]}),i}return(p,i)=>(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(E.itemEvents,a=>(e.openBlock(),e.createElementBlock("div",{key:a.type,class:"event-item"},[e.createElementVNode("div",$,[e.createElementVNode("div",{class:"event-label",title:a.describe},e.toDisplayString(a.describe),9,w),e.createElementVNode("div",M,[e.createVNode(e.unref(x._sfc_main),{name:"icon-tianjia1",onClick:t=>_(a.type)},null,8,["onClick"])])]),e.createElementVNode("div",O,[e.createVNode(e.unref(b.draggable),{modelValue:m.events[a.type],"onUpdate:modelValue":t=>m.events[a.type]=t,"item-key":"id","component-data":{type:"transition-group"},group:"option-list",handle:".handle",animation:200},{item:e.withCtx(({element:t,index:N})=>[e.createElementVNode("div",A,[e.createElementVNode("div",j,[e.createVNode(e.unref(x._sfc_main),{class:"mr-2 text-lg cursor-move handle",name:"icon-tuozhuai"})]),e.createElementVNode("div",D,[t.type==="component"?(e.openBlock(),e.createElementBlock("div",U,e.toDisplayString(f(t.componentId)),1)):t.type==="custom"?(e.openBlock(),e.createElementBlock("div",L," 自定义函数 ")):t.type==="public"?(e.openBlock(),e.createElementBlock("div",q," 公共函数 ")):e.createCommentVNode("",!0),e.createTextVNode(" "+e.toDisplayString(t.methodName),1)]),e.createElementVNode("div",K,[e.createElementVNode("div",{class:"edit-btn",onClick:I=>r(N,a.type,t)},[e.createVNode(e.unref(x._sfc_main),{name:"icon-tiaozheng"})],8,R),e.createElementVNode("div",{class:"del-btn",onClick:I=>u(N,a.type)},[e.createVNode(e.unref(x._sfc_main),{name:"icon-shanchu1"})],8,z)])])]),_:2},1032,["modelValue","onUpdate:modelValue"])])]))),128))}}),T={class:"h-full flex flex-col"},J=e.createElementVNode("div",{class:"pb-2"}," 自定义函数编辑 ",-1),P=e.defineComponent({__name:"EScriptEdit",setup(E){const V=g.pluginManager.getComponent("monacoEditor"),m={theme:"vs-light",selectOnLineNumbers:!0,minimap:{enabled:!1}},h=e.ref(null),v=e.inject("pageSchema");return(_,f)=>(e.openBlock(),e.createElementBlock("div",T,[J,e.createVNode(e.unref(V),{ref_key:"monacoEditorRef",ref:h,modelValue:e.unref(v).script,"onUpdate:modelValue":f[0]||(f[0]=u=>e.unref(v).script=u),class:"editor flex-1",config:m,language:"javascript"},null,8,["modelValue"])]))}}),G={class:"epic-attribute-view"},H=["title"],Q={class:"attr-input"},W=e.defineComponent({__name:"EArgsEditor",props:{modelValue:{},actionArgsConfigs:{}},emits:["update:modelValue"],setup(E,{emit:V}){const m=E,h=V,v=e.computed(()=>m.modelValue?JSON.parse(m.modelValue):[]);function _(u){var r;return typeof u.show=="boolean"?u.show:typeof u.show=="function"?(r=u.show)==null?void 0:r.call(u,{values:v.value}):!0}function f(u,r){const n=[...JSON.parse(m.modelValue??"[]")];n[r]=u,h("update:modelValue",JSON.stringify(n))}return(u,r)=>(e.openBlock(),e.createElementBlock("aside",G,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(m.actionArgsConfigs,n=>(e.openBlock(),e.createElementBlock("div",{key:n.field+n.type},[e.withDirectives(e.createElementVNode("div",{class:e.normalizeClass(["attr-item",n.layout])},[e.createElementVNode("div",{class:"attr-label",title:n.label},e.toDisplayString(n.label),9,H),e.createElementVNode("div",Q,[e.createVNode(e.unref(g._sfc_main$1),{componentSchema:{...n,componentProps:{...n.componentProps,input:!1,field:void 0,hidden:!1},show:!0,noFormItem:!0},"model-value":v.value[n.field],"onUpdate:modelValue":p=>f(p,n.field)},null,8,["componentSchema","model-value","onUpdate:modelValue"])])],2),[[e.vShow,_(n)]])]))),128))]))}}),X={class:"rounded bg-white epic-modal-action-main"},Y={class:"epic-modal-left-panel h-full flex flex-col"},Z={class:"flex flex-1 h-0 flex-col"},ee={class:"flex-1 h-0"},te={class:"epic-action-select h-30/100 flex flex-col"},ne=e.createElementVNode("div",{class:"mb-2"},"动作选择",-1),oe={class:"flex-1 overflow-auto pr-8px"},le=["onClick"],ae={class:"text-center pt-42px text-gray-400"},ce={class:"epic-modal-right-panel"},se={key:1,class:"text-center pt-42px text-gray-400"},ie=e.defineComponent({__name:"EActionModal",emits:["add","edit"],setup(E,{expose:V,emit:m}){const h=g.pluginManager.getComponent("modal"),v=e.ref(!0),_=e.inject("pageSchema"),f=e.inject("pageManager",{}),u=e.ref(!1),r=e.ref([]),n=e.ref(null),p=m,i=e.computed(()=>{var o;return t.actionItem.type==="component"?n.value?(o=g.pluginManager.getComponentConfings()[n.value.type].config.action)==null?void 0:o.map(l=>({label:l.describe,value:l.type})):[]:t.actionItem.type==="custom"?Object.entries(f.funcs.value).filter(([l,k])=>typeof k=="function").map(([l])=>({label:l,value:l})):t.actionItem.type==="public"?Object.entries(g.pluginManager.publicMethods).map(([l])=>({label:l,value:l})):[]}),a=e.computed(()=>{if(t.actionItem.type==="component"&&n.value){console.log();const o=g.pluginManager.getComponentConfings()[n.value.type].config.action,l=o==null?void 0:o.find(k=>k.type===t.actionItem.methodName);return(l==null?void 0:l.argsConfigs)??[]}return[]}),t=e.reactive({actionItem:{type:"custom",methodName:"test",componentId:null},cacheData:{}});function N(){var o;u.value=!0,v.value=!0,t.actionItem.type="custom",t.actionItem.componentId=null,(o=i.value)!=null&&o.length&&d(i.value[0].value)}function I(o){if(u.value=!0,v.value=!1,n.value=null,o.componentId){const l=g.findSchemaById(_.schemas,o.componentId);n.value=l,r.value=[o.componentId]}e.nextTick(()=>{t.actionItem.componentId=o.componentId,t.actionItem.methodName=o.methodName,t.actionItem.type=o.type,t.actionItem.args=o.args})}function B(){if(!t.actionItem.methodName){alert("请先选择动作方法");return}p(v.value?"add":"edit",g.deepClone(e.toRaw(t.actionItem))),C()}function C(){u.value=!1,r.value=[],t.cacheData={}}function s(o){var l;t.actionItem.componentId=null,t.actionItem.type=o,n.value=null,t.actionItem.methodName=null,r.value=[],(l=i.value)!=null&&l.length&&d(i.value[0].value)}function c(o){var l;t.actionItem.args&&(t.cacheData[t.actionItem.componentId+t.actionItem.methodName]=t.actionItem.args),t.actionItem.componentId=o.id,t.actionItem.type="component",t.actionItem.methodName=null,n.value=o.componentSchema,(l=i.value)!=null&&l.length&&d(i.value[0].value)}function d(o){t.actionItem.methodName=o,t.actionItem.args=t.cacheData[t.actionItem.componentId+t.actionItem.methodName]}return V({handleOpen:N,handleOpenEdit:I}),(o,l)=>(e.openBlock(),e.createBlock(e.unref(h),{modelValue:u.value,"onUpdate:modelValue":l[4]||(l[4]=k=>u.value=k),class:"w-1200px",width:"1200px",onClose:C,onOk:B,title:"动作配置"},{default:e.withCtx(()=>{var k;return[e.createElementVNode("div",X,[e.createElementVNode("div",Y,[e.createElementVNode("div",Z,[e.createElementVNode("div",{class:e.normalizeClass(["fun-btn",{checked:t.actionItem.type==="custom"}]),onClick:l[0]||(l[0]=y=>s("custom"))}," 自定义函数 ",2),e.createElementVNode("div",{class:e.normalizeClass(["fun-btn",{checked:t.actionItem.type==="public"}]),onClick:l[1]||(l[1]=y=>s("public"))}," 公共函数 ",2),e.createTextVNode(" 组件 "),e.createElementVNode("div",ee,[e.createVNode(e.unref(S._sfc_main),{selectedKeys:r.value,"onUpdate:selectedKeys":l[2]||(l[2]=y=>r.value=y),options:e.unref(_).schemas,onNodeClick:c},null,8,["selectedKeys","options"])])]),e.createElementVNode("div",te,[ne,e.createElementVNode("div",oe,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(i.value,y=>(e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass([{checked:y.value===t.actionItem.methodName},"action-item"]),onClick:re=>d(y.value),key:y.value},[e.createElementVNode("span",null,e.toDisplayString(y.label),1)],10,le))),128)),e.withDirectives(e.createElementVNode("div",ae,"当前组件暂无动作",512),[[e.vShow,!((k=i.value)!=null&&k.length)]])])])]),e.createElementVNode("div",ce,[t.actionItem.type==="custom"?(e.openBlock(),e.createBlock(P,{key:0})):a.value.length===0?(e.openBlock(),e.createElementBlock("div",se,"暂无配置")):(e.openBlock(),e.createBlock(W,{key:2,modelValue:t.actionItem.args,"onUpdate:modelValue":l[3]||(l[3]=y=>t.actionItem.args=y),actionArgsConfigs:a.value},null,8,["modelValue","actionArgsConfigs"]))])])]}),_:1},8,["modelValue"]))}}),de=e.defineComponent({__name:"index",props:{eventList:{type:Array,default:()=>[]},modelValue:{type:Object}},emits:["update:modelValue"],setup(E,{emit:V}){const m=g.pluginManager.getComponent("Collapse"),h=g.pluginManager.getComponent("CollapseItem"),v=e.ref(null);let _=0;const f=E,u=V,r=e.computed({get(){return f.modelValue},set(s){u("update:modelValue",s)}}),n=e.ref([]),p=e.computed(()=>f.eventList.filter(s=>s.events.length)),i=e.computed(()=>f.eventList.map(s=>s.events).flat()),a=e.ref({});i.value.forEach(s=>{a.value[s.type]=e.computed({get(){var c;return((c=r.value)==null?void 0:c[s.type])??[]},set(c){c&&c.length?r.value[s.type]=c.map(d=>e.toRaw(d)):delete r.value[s.type]}})}),e.watch(()=>p.value,s=>{s.length&&(n.value=s.filter(c=>{for(let d=0;d<c.events.length;d++){const o=c.events[d].type;if(a.value[o].length)return!0}return!1}).map(c=>c.title))},{immediate:!0});let t="";function N(s){var c;(c=v.value)==null||c.handleOpen(),t=s}function I(s,c,d){var o;(o=v.value)==null||o.handleOpenEdit(d),_=s,t=c}function B(s){a.value[t][_]=s,r.value[t]=[...a.value[t]??[]]}function C(s){if(!r.value){r.value={[t]:[...a.value[t]??[],s]};return}r.value[t]=[...a.value[t]??[],s]}return(s,c)=>(e.openBlock(),e.createElementBlock(e.Fragment,null,[e.createVNode(e.unref(m),{modelValue:n.value,"onUpdate:modelValue":c[1]||(c[1]=d=>n.value=d),activeKey:n.value,"onUpdate:activeKey":c[2]||(c[2]=d=>n.value=d),"expanded-names":n.value,"onUpdate:expandedNames":c[3]||(c[3]=d=>n.value=d)},{default:e.withCtx(()=>[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(p.value,d=>(e.openBlock(),e.createBlock(e.unref(h),{key:d.title,title:d.title,header:d.title,name:d.title},{default:e.withCtx(()=>[e.createVNode(F,{modelValue:r.value,"onUpdate:modelValue":c[0]||(c[0]=o=>r.value=o),"item-events":d.events,"all-events":i.value,events:a.value,onAdd:N,onEdit:I},null,8,["modelValue","item-events","all-events","events"])]),_:2},1032,["title","header","name"]))),128))]),_:1},8,["modelValue","activeKey","expanded-names"]),e.createVNode(ie,{ref_key:"EActionModalRef",ref:v,onAdd:C,onEdit:B},null,512)],64))}});exports.default=de;