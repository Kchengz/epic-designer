import{_ as u,t as c}from"./useConfigInject.wP4KD9rp.js";import{z as i}from"./revoke.gXiQk-K7.js";import"./framework.Bkcw4pAp.js";const T=(e,t)=>{const r=u({},e);return Object.keys(t).forEach(s=>{const n=r[s];if(n)n.type||n.default?n.default=t[s]:n.def?n.def(t[s]):r[s]={type:n,default:t[s]};else throw new Error(`not have ${s} prop`)}),r};let f=e=>setTimeout(e,16),p=e=>clearTimeout(e);typeof window<"u"&&"requestAnimationFrame"in window&&(f=e=>window.requestAnimationFrame(e),p=e=>window.cancelAnimationFrame(e));let a=0;const o=new Map;function l(e){o.delete(e)}function g(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;a+=1;const r=a;function s(n){if(n===0)l(r),e();else{const d=f(()=>{s(n-1)});o.set(r,d)}}return s(t),r}g.cancel=e=>{const t=o.get(e);return l(t),p(t)};const $=i({func:void 0,bool:void 0,string:void 0,number:void 0,array:void 0,object:void 0,integer:void 0});$.extend([{name:"looseBool",getter:!0,type:Boolean,default:void 0},{name:"style",getter:!0,type:[String,Object],default:void 0},{name:"VueNode",getter:!0,type:null}]);function b(e){return e.default=void 0,e}const y=e=>{if(!e)return!1;if(e.offsetParent)return!0;if(e.getBBox){const t=e.getBBox();if(t.width||t.height)return!0}if(e.getBoundingClientRect){const t=e.getBoundingClientRect();if(t.width||t.height)return!0}return!1};c("bottomLeft","bottomRight","topLeft","topRight");const A=e=>e!==void 0&&(e==="topLeft"||e==="topRight")?"slide-down":"slide-up",B=function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return e?u({name:e,appear:!0,enterFromClass:`${e}-enter ${e}-enter-prepare ${e}-enter-start`,enterActiveClass:`${e}-enter ${e}-enter-prepare`,enterToClass:`${e}-enter ${e}-enter-active`,leaveFromClass:` ${e}-leave`,leaveActiveClass:`${e}-leave ${e}-leave-active`,leaveToClass:`${e}-leave ${e}-leave-active`},t):u({css:!1},t)},x=function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return e?u({name:e,appear:!0,appearActiveClass:`${e}`,appearToClass:`${e}-appear ${e}-appear-active`,enterFromClass:`${e}-appear ${e}-enter ${e}-appear-prepare ${e}-enter-prepare`,enterActiveClass:`${e}`,enterToClass:`${e}-enter ${e}-appear ${e}-appear-active ${e}-enter-active`,leaveActiveClass:`${e} ${e}-leave`,leaveToClass:`${e}-leave-active`},t):u({css:!1},t)},P=(e,t,r)=>r!==void 0?r:`${e}-${t}`;export{$ as P,P as a,y as b,x as c,A as d,b as e,B as g,T as i,g as w};
