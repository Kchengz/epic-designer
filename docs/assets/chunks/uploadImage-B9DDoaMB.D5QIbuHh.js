import{E,a as y}from"./index.DiClNJhn.js";import{E as V}from"./index.DUZnJfcV.js";import{d as j,j as o,x as u,h as w,ah as a,R as C}from"./framework.C8YhLXwE.js";import"../guide_components_EBuilder.md.CqpDDJB9.js";import"./index-DZavvwVo.CLpuZ4sn.js";import"./fromPairs.Dx9PT-t0.js";import"./getTag.DtjCqBUh.js";import"./index.Dmr5GdgH.js";import"./getPrototype.57D5m4QL.js";import"./getAllKeys.BwAxqbuf.js";import"./baseSet.CkGxAcGT.js";import"./index.DeFaXpkR.js";import"./cloneDeep.EyURs6P1.js";import"./isEqual.3E0r62oz.js";import"./use-global-config.WP9uySC6.js";import"./debounce.BlaEsI6c.js";const F=j({props:{modelValue:{type:Array,default:()=>[]}},emits:["update:modelValue"],setup(m,{emit:n,attrs:d}){const t=o([]),r=o(""),i=o(!1),p=e=>{i.value=e};u(t,e=>{n("update:modelValue",e)}),u(()=>m.modelValue,e=>{if(e!=null&&e.length>0&&t.value!=null){if(t.value===e)return;t.value.length=0,t.value.push(...e)}},{deep:!0,immediate:!0});const c=(e,l)=>{C(()=>{t.value=l})},g=(e,l,s)=>{console.log(s)},f=(e,l,s)=>{y.error("上传失败"),console.error(e)},v=e=>{},h=w(()=>({...d,"file-list":t.value,"list-type":"picture-card",accept:"image/gif,image/jpeg,image/jpg,image/png,image/svg",onBeforeUpload:v,onChange:c,onSuccess:g,onError:f,onPreview:x})),x=e=>{e.url&&(r.value=e.url,p(!0))};return()=>a("div",{class:"epic-upload-image"},{default:()=>[a(E,h.value,{default:()=>[a("div",{style:{"text-align":"center"}},{default:()=>[a("span",{class:"iconfont epic-icon-shangchuan1 text-md",style:{"margin-right":"2px"}}),a("div",{class:"ant-upload-text"},{default:()=>"点击上传"})]})]}),(()=>{if(i.value)return a(V,{urlList:[r.value],onClose:()=>{p(!1)}})})()]})}});export{F as default};
