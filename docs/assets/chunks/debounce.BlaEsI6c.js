import{i as v,r as L}from"./getTag.DtjCqBUh.js";import{i as M}from"./getPrototype.57D5m4QL.js";var N=/\s/;function B(n){for(var r=n.length;r--&&N.test(n.charAt(r)););return r}var R=/^\s+/;function $(n){return n&&n.slice(0,B(n)+1).replace(R,"")}var k=NaN,F=/^[-+]0x[0-9a-f]+$/i,_=/^0b[01]+$/i,j=/^0o[0-7]+$/i,D=parseInt;function S(n){if(typeof n=="number")return n;if(M(n))return k;if(v(n)){var r=typeof n.valueOf=="function"?n.valueOf():n;n=v(r)?r+"":r}if(typeof n!="string")return n===0?n:+n;n=$(n);var t=_.test(n);return t||j.test(n)?D(n.slice(2),t?2:8):F.test(n)?k:+n}var h=function(){return L.Date.now()},H="Expected a function",P=Math.max,U=Math.min;function z(n,r,t){var u,o,l,s,i,f,c=0,p=!1,d=!1,T=!0;if(typeof n!="function")throw new TypeError(H);r=S(r)||0,v(t)&&(p=!!t.leading,d="maxWait"in t,l=d?P(S(t.maxWait)||0,r):l,T="trailing"in t?!!t.trailing:T);function x(e){var a=u,m=o;return u=o=void 0,c=e,s=n.apply(m,a),s}function W(e){return c=e,i=setTimeout(g,r),p?x(e):s}function O(e){var a=e-f,m=e-c,E=r-a;return d?U(E,l-m):E}function y(e){var a=e-f,m=e-c;return f===void 0||a>=r||a<0||d&&m>=l}function g(){var e=h();if(y(e))return b(e);i=setTimeout(g,O(e))}function b(e){return i=void 0,T&&u?x(e):(u=o=void 0,s)}function A(){i!==void 0&&clearTimeout(i),c=0,u=f=o=i=void 0}function C(){return i===void 0?s:b(h())}function I(){var e=h(),a=y(e);if(u=arguments,o=this,f=e,a){if(i===void 0)return W(f);if(d)return clearTimeout(i),i=setTimeout(g,r),x(f)}return i===void 0&&(i=setTimeout(g,r)),s}return I.cancel=A,I.flush=C,I}export{z as d,S as t};
