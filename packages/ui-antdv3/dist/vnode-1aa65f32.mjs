import { r as h, c as y, q as _, i as q, g as E } from "./useConfigInject-f0dbb416.mjs";
import { _ as A } from "./index-5fc6c346.mjs";
var s = {}, m;
function R() {
  if (m)
    return s;
  m = 1;
  var i = q;
  Object.defineProperty(s, "__esModule", {
    value: !0
  }), s.cloneElement = o, s.cloneVNodes = c, s.deepCloneElement = g;
  var d = i(A), l = i(h()), f = y(), p = E, v = i(_());
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
  function g(e) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, u = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
    if (Array.isArray(e))
      return e.map(function(t) {
        return g(t, n, a, u);
      });
    var r = o(e, n, a, u);
    return Array.isArray(r.children) && (r.children = g(r.children)), r;
  }
  return s;
}
export {
  R as r
};
