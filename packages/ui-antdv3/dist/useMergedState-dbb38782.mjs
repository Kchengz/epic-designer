import { g as M } from "./useConfigInject-f0dbb416.mjs";
var v = {}, c;
function p() {
  if (c)
    return v;
  c = 1, Object.defineProperty(v, "__esModule", {
    value: !0
  }), v.default = g;
  var e = M;
  function g(i, u) {
    var d = u || {}, t = d.defaultValue, o = d.value, a = o === void 0 ? (0, e.ref)() : o, f = typeof i == "function" ? i() : i;
    a.value !== void 0 && (f = (0, e.unref)(a)), t !== void 0 && (f = typeof t == "function" ? t() : t);
    var l = (0, e.ref)(f), n = (0, e.ref)(f);
    (0, e.watchEffect)(function() {
      var r = a.value !== void 0 ? a.value : l.value;
      u.postState && (r = u.postState(r)), n.value = r;
    });
    function s(r) {
      var h = n.value;
      l.value = r, (0, e.toRaw)(n.value) !== r && u.onChange && u.onChange(r, h);
    }
    return (0, e.watch)(a, function() {
      l.value = a.value;
    }), [n, s];
  }
  return v;
}
export {
  p as r
};
