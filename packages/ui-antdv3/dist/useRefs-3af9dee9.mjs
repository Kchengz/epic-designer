import { g as i } from "./useConfigInject-f4796704.mjs";
var e = {}, f;
function l() {
  if (f)
    return e;
  f = 1, Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = void 0;
  var u = i, t = function() {
    var r = (0, u.ref)(/* @__PURE__ */ new Map()), n = function(s) {
      return function(o) {
        r.value.set(s, o);
      };
    };
    return (0, u.onBeforeUpdate)(function() {
      r.value = /* @__PURE__ */ new Map();
    }), [n, r];
  }, a = t;
  return e.default = a, e;
}
export {
  l as r
};
