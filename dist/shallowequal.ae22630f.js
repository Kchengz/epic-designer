import { k as y } from "./useConfigInject.fdc04e2e.js";
import { _ as O } from "./index.1fa3133f.js";
import { r as R } from "./_vue_commonjs-external.cdc460b2.js";
var f = {}, d;
function m() {
  if (d)
    return f;
  d = 1;
  var h = y.exports;
  Object.defineProperty(f, "__esModule", {
    value: !0
  }), f.default = w;
  var s = h(O.exports), o = R;
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
      var v = e[l], p = r[l];
      if (a = t ? t.call(u, v, p, l) : void 0, a === !1 || a === void 0 && v !== p)
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
  m as r
};
