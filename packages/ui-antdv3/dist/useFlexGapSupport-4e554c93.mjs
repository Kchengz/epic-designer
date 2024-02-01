import { B as x, i as E, g as h } from "./useConfigInject-f4796704.mjs";
var n = {}, r = {}, v;
function _() {
  if (v)
    return r;
  v = 1;
  var a = E;
  Object.defineProperty(r, "__esModule", {
    value: !0
  }), r.detectFlexGapSupported = r.default = r.canUseDocElement = void 0, r.isStyleSupport = s;
  var o = a(x()), l = function() {
    return (0, o.default)() && window.document.documentElement;
  };
  r.canUseDocElement = l;
  var p = function(e) {
    if ((0, o.default)() && window.document.documentElement) {
      var c = Array.isArray(e) ? e : [e], u = window.document.documentElement;
      return c.some(function(f) {
        return f in u.style;
      });
    }
    return !1;
  }, d = function(e, c) {
    if (!p(e))
      return !1;
    var u = document.createElement("div"), f = u.style[e];
    return u.style[e] = c, u.style[e] !== f;
  };
  function s(t, e) {
    return !Array.isArray(t) && e !== void 0 ? d(t, e) : p(t);
  }
  var i, S = function() {
    if (!l())
      return !1;
    if (i !== void 0)
      return i;
    var e = document.createElement("div");
    return e.style.display = "flex", e.style.flexDirection = "column", e.style.rowGap = "1px", e.appendChild(document.createElement("div")), e.appendChild(document.createElement("div")), document.body.appendChild(e), i = e.scrollHeight === 1, document.body.removeChild(e), i;
  };
  r.detectFlexGapSupported = S;
  var y = s;
  return r.default = y, r;
}
var m;
function C() {
  if (m)
    return n;
  m = 1, Object.defineProperty(n, "__esModule", {
    value: !0
  }), n.default = void 0;
  var a = h, o = _(), l = function() {
    var d = (0, a.ref)(!1);
    return (0, a.onMounted)(function() {
      d.value = (0, o.detectFlexGapSupported)();
    }), d;
  };
  return n.default = l, n;
}
export {
  _ as a,
  C as r
};
