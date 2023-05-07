import { u as S, k as y } from "./useConfigInject.fdc04e2e.js";
var t = {}, p;
function E() {
  if (p)
    return t;
  p = 1;
  var f = y.exports;
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.detectFlexGapSupported = t.default = t.canUseDocElement = void 0, t.isStyleSupport = c;
  var i = f(S()), a = function() {
    return (0, i.default)() && window.document.documentElement;
  };
  t.canUseDocElement = a;
  var l = function(e) {
    if ((0, i.default)() && window.document.documentElement) {
      var o = Array.isArray(e) ? e : [e], n = window.document.documentElement;
      return o.some(function(d) {
        return d in n.style;
      });
    }
    return !1;
  }, s = function(e, o) {
    if (!l(e))
      return !1;
    var n = document.createElement("div"), d = n.style[e];
    return n.style[e] = o, n.style[e] !== d;
  };
  function c(r, e) {
    return !Array.isArray(r) && e !== void 0 ? s(r, e) : l(r);
  }
  var u, m = function() {
    if (!a())
      return !1;
    if (u !== void 0)
      return u;
    var e = document.createElement("div");
    return e.style.display = "flex", e.style.flexDirection = "column", e.style.rowGap = "1px", e.appendChild(document.createElement("div")), e.appendChild(document.createElement("div")), document.body.appendChild(e), u = e.scrollHeight === 1, document.body.removeChild(e), u;
  };
  t.detectFlexGapSupported = m;
  var v = c;
  return t.default = v, t;
}
export {
  E as r
};
