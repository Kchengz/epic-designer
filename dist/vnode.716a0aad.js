import { b as h, s as y, A as _, k as q } from "./useConfigInject.fdc04e2e.js";
import { _ as A } from "./index.1fa3133f.js";
import { r as b } from "./_vue_commonjs-external.cdc460b2.js";
var s = {}, g;
function V() {
  if (g)
    return s;
  g = 1;
  var i = q.exports;
  Object.defineProperty(s, "__esModule", {
    value: !0
  }), s.cloneElement = o, s.cloneVNodes = c, s.deepCloneElement = m;
  var d = i(A.exports), l = i(h()), f = y(), p = b, v = i(_());
  function o(e) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, u = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1, r = e;
    if (Array.isArray(e) && (r = (0, f.filterEmpty)(e)[0]), !r)
      return null;
    var t = (0, p.cloneVNode)(r, n, u);
    return t.props = a ? (0, l.default)((0, l.default)({}, t.props), n) : t.props, (0, v.default)((0, d.default)(t.props.class) !== "object", "class must be string"), t;
  }
  function c(e) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
    return e.map(function(u) {
      return o(u, n, a);
    });
  }
  function m(e) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, u = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
    if (Array.isArray(e))
      return e.map(function(t) {
        return m(t, n, a, u);
      });
    var r = o(e, n, a, u);
    return Array.isArray(r.children) && (r.children = m(r.children)), r;
  }
  return s;
}
export {
  V as r
};
