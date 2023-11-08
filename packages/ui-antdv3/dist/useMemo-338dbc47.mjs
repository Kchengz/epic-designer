import { g as v } from "./useConfigInject-f0dbb416.mjs";
var e = {}, o;
function m() {
  if (o)
    return e;
  o = 1, Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = a;
  var f = v;
  function a(r, n, i) {
    var u = (0, f.ref)(r());
    return (0, f.watch)(n, function(t, s) {
      i ? i(t, s) && (u.value = r()) : u.value = r();
    }), u;
  }
  return e;
}
export {
  m as r
};
