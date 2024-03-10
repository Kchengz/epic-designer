import { g as s } from "./useConfigInject-f4796704.mjs";
var e = {}, n;
function c() {
  if (n)
    return e;
  n = 1, Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = i;
  var u = s;
  function i(r) {
    var a = typeof r == "function" ? r() : r, t = (0, u.ref)(a);
    function o(f) {
      t.value = f;
    }
    return [t, o];
  }
  return e;
}
export {
  c as r
};
