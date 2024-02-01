import { i as l, g as v } from "./useConfigInject-f4796704.mjs";
import { b as d, a as c, r as p } from "./Col-790da5bd.mjs";
var b = {}, u = {}, f;
function _() {
  if (f)
    return u;
  f = 1;
  var e = l;
  Object.defineProperty(u, "__esModule", {
    value: !0
  }), u.default = void 0;
  var r = v, t = e(d());
  function i() {
    var a = (0, r.ref)({}), n = null;
    return (0, r.onMounted)(function() {
      n = t.default.subscribe(function(s) {
        a.value = s;
      });
    }), (0, r.onUnmounted)(function() {
      t.default.unsubscribe(n);
    }), a;
  }
  var o = i;
  return u.default = o, u;
}
(function(e) {
  var r = l;
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "Col", {
    enumerable: !0,
    get: function() {
      return i.default;
    }
  }), Object.defineProperty(e, "Row", {
    enumerable: !0,
    get: function() {
      return t.default;
    }
  }), e.default = void 0;
  var t = r(c()), i = r(p()), o = r(_()), a = {
    useBreakpoint: o.default
  };
  e.default = a;
})(b);
export {
  b as g
};
