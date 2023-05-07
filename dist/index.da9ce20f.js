import { k as l } from "./useConfigInject.fdc04e2e.js";
import { b as v, a as d, r as p } from "./Col.c9fdc545.js";
import { r as c } from "./_vue_commonjs-external.cdc460b2.js";
var b = {}, u = {}, f;
function _() {
  if (f)
    return u;
  f = 1;
  var e = l.exports;
  Object.defineProperty(u, "__esModule", {
    value: !0
  }), u.default = void 0;
  var r = c, t = e(v());
  function o() {
    var a = (0, r.ref)({}), n = null;
    return (0, r.onMounted)(function() {
      n = t.default.subscribe(function(s) {
        a.value = s;
      });
    }), (0, r.onUnmounted)(function() {
      t.default.unsubscribe(n);
    }), a;
  }
  var i = o;
  return u.default = i, u;
}
(function(e) {
  var r = l.exports;
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "Col", {
    enumerable: !0,
    get: function() {
      return o.default;
    }
  }), Object.defineProperty(e, "Row", {
    enumerable: !0,
    get: function() {
      return t.default;
    }
  }), e.default = void 0;
  var t = r(d()), o = r(p()), i = r(_()), a = {
    useBreakpoint: i.default
  };
  e.default = a;
})(b);
export {
  b as g
};
