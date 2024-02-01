import { u as v, i as s } from "./useConfigInject-f4796704.mjs";
var e = {}, u;
function m() {
  if (u)
    return e;
  u = 1;
  var o = s;
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = void 0;
  var i = o(v());
  function n(l, t) {
    for (var a = (0, i.default)({}, l), r = 0; r < t.length; r += 1) {
      var d = t[r];
      delete a[d];
    }
    return a;
  }
  var f = n;
  return e.default = f, e;
}
export {
  m as r
};
