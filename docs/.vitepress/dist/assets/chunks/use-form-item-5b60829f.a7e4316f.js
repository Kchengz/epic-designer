import{ad as v,af as I,au as p}from"../guide_components_e-designer.md.ee402248.js";import{A as m,r as u,s as c,B as f,w as b,a4 as B,J as g}from"../app.c181f4ec.js";const x=()=>{const n=m(v,void 0),e=m(I,void 0);return{form:n,formItem:e}},M=(n,{formItemContext:e,disableIdGeneration:d,disableIdManagement:o})=>{d||(d=u(!1)),o||(o=u(!1));const t=u();let s;const i=c(()=>{var a;return!!(!n.label&&e&&e.inputIds&&((a=e.inputIds)==null?void 0:a.length)<=1)});return f(()=>{s=b([B(n,"id"),d],([a,l])=>{const r=a!=null?a:l?void 0:p().value;r!==t.value&&(e!=null&&e.removeInputId&&(t.value&&e.removeInputId(t.value),!(o!=null&&o.value)&&!l&&r&&e.addInputId(r)),t.value=r)},{immediate:!0})}),g(()=>{s&&s(),e!=null&&e.removeInputId&&t.value&&e.removeInputId(t.value)}),{isLabeledByFormItem:i,inputId:t}};export{x as B,M as K};