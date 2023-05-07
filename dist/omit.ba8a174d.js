import { l as v, k as s } from "./useConfigInject.fdc04e2e.js";
var e = {}, u;
function m() {
  if (u)
    return e;
  u = 1;
  var o = s.exports;
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = void 0;
  var i = o(v());
  function n(f, t) {
    for (var a = (0, i.default)({}, f), r = 0; r < t.length; r += 1) {
      var d = t[r];
      delete a[d];
    }
    return a;
  }
  var l = n;
  return e.default = l, e;
}
export {
  m as r
};
