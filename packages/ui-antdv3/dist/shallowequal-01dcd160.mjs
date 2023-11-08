import { i as y, g as O } from "./useConfigInject-f0dbb416.mjs";
import { _ as R } from "./index-5fc6c346.mjs";
var f = {}, p;
function P() {
  if (p)
    return f;
  p = 1;
  var h = y;
  Object.defineProperty(f, "__esModule", {
    value: !0
  }), f.default = w;
  var s = h(R), o = O;
  function q(e, r, t, u) {
    var a = t ? t.call(u, e, r) : void 0;
    if (a !== void 0)
      return !!a;
    if (e === r)
      return !0;
    if ((0, s.default)(e) !== "object" || !e || (0, s.default)(r) !== "object" || !r)
      return !1;
    var i = Object.keys(e), _ = Object.keys(r);
    if (i.length !== _.length)
      return !1;
    for (var c = Object.prototype.hasOwnProperty.bind(r), n = 0; n < i.length; n++) {
      var l = i[n];
      if (!c(l))
        return !1;
      var v = e[l], d = r[l];
      if (a = t ? t.call(u, v, d, l) : void 0, a === !1 || a === void 0 && v !== d)
        return !1;
    }
    return !0;
  }
  function w(e, r, t, u) {
    return q((0, o.toRaw)(e), (0, o.toRaw)(r), t, u);
  }
  return f;
}
export {
  P as r
};
