import{V as P}from"./index.DvF_pUzD.js";import{R as j}from"./index.1QwXVrKs.js";import{s as l}from"./index.CknOZcBh.js";import{d as R,ak as U,j as p,x as c,h as _,o as d,c as f,I as v,w as A,e as E,as as I,at as T,m as g,l as h,R as q}from"./framework.Bj7ZzXMq.js";import"./useConfigInject.BvmlE8fS.js";import"./revoke.BrdSO0Zx.js";import"./index-dBLYGWys.BhaKRvQG.js";import"./commonjsHelpers-CT_km90n.D7mXbCtF.js";import"./index.DOFZgDuz.js";import"./transition.OUsjLKOK.js";import"./baseEach.CkCjRC0N.js";import"./getAllKeys.BwAxqbuf.js";import"./getTag.DtjCqBUh.js";import"./baseIteratee.Cw2_iwum.js";import"./isEqual.3E0r62oz.js";import"./index.Dmr5GdgH.js";import"./getPrototype.57D5m4QL.js";import"./hasIn.BpqLs2Mi.js";import"./index.BxXi7ljV.js";import"./useState.DG-Wr2Ur.js";import"./createContext.CKi_Suqn.js";import"./collapseMotion.CP5a2Yy8.js";import"./colors.Cl0BMt5X.js";import"./motion.wQpHIsPt.js";import"./zoom.B-iW8zoU.js";import"./useRefs.BNYNBfan.js";import"./useMergedState.DMJdz4bp.js";import"./index.PO2iXlOp.js";import"./cloneDeep.EyURs6P1.js";import"./Row.BLiC_7wV.js";import"./useFlexGapSupport.CH3HOXNj.js";import"./index.BzOCTf23.js";import"./baseFindIndex.D7XfJLKM.js";import"./debounce.BlaEsI6c.js";import"./Col.wuGn8SFB.js";import"./FormItemContext.BZIHXwK-.js";import"./isPlainObject.DLjdWRXV.js";import"./omit.-feKOJMZ.js";import"./flatRest.ASmQkvUo.js";import"./index.CTU7QZEN.js";import"./KeyCode.rKlZJYRd.js";const z={class:"epic-upload-image"},D={key:0},F=h("span",{class:"iconfont epic-icon-shangchuan1 mr-2px"},null,-1),G=h("div",{class:"ant-upload-text"},"点击上传",-1),K=[F,G],Re=R({__name:"uploadImage",props:{modelValue:{type:Array,default:()=>[]},maxCount:{type:Number}},emits:["update:modelValue","change"],setup(x,{emit:V}){const y=U(),m=x,u=V,r=p([]),o=p(""),n=p(!1),s=e=>{n.value=e};c(r,e=>{u("update:modelValue",e),u("change",e)}),c(()=>m.modelValue,e=>{if(e!=null&&e.length>0&&r.value!=null){if(r.value===e)return;r.value.length=0,r.value.push(...e)}},{deep:!0,immediate:!0});function C(e){q(()=>{r.value=e})}const w=e=>{var i,t;if(e.file.status!=="uploading"){if(e.file.status==="done"){const a=(t=(i=e.file.response)==null?void 0:i.data)==null?void 0:t.url;if(!e.file.url&&!a){e.file.status="error",l.error("上传失败");return}e.file.url=a,e.file.thumbUrl=a}e.file.status==="error"&&l.error("upload error")}},b=e=>{},k=_(()=>({...y,"list-type":"picture-card",accept:"image/gif,image/jpeg,image/jpg,image/png,image/svg","onUpdate:file-list":C,"file-list":r.value,"onBefore-upload":b,onChange:w,onPreview:B}));function B(e){e.url&&(o.value=e.url,s(!0))}function N(){o.value&&l.error("图片地址无法访问!")}return(e,i)=>(d(),f("div",z,[v(g(P),I(T(k.value)),{default:A(()=>{var t;return[(((t=r.value)==null?void 0:t.length)??0)<(m.maxCount??999)?(d(),f("div",D,K)):E("",!0)]}),_:1},16),v(g(j),{style:{display:"none"},src:o.value,preview:{visible:n.value,onVisibleChange:s},onError:N},null,8,["src","preview"])]))}});export{Re as default};
