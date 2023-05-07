import { b as y, l as D, s as P, k as U } from "./useConfigInject.fdc04e2e.js";
import { r as j } from "./ResizeObserver.es.f11dbe23.js";
import { r as B } from "./_vue_commonjs-external.cdc460b2.js";
var s = {}, _;
function F() {
  if (_)
    return s;
  _ = 1;
  var a = U.exports;
  Object.defineProperty(s, "__esModule", {
    value: !0
  }), s.default = void 0;
  var c = a(y()), z = a(D()), q = a(j), e = B, w = P(), H = (0, e.defineComponent)({
    compatConfig: {
      MODE: 3
    },
    name: "ResizeObserver",
    props: {
      disabled: Boolean,
      onResize: Function
    },
    emits: ["resize"],
    setup: function(f, W) {
      var g = W.slots, o = (0, e.reactive)({
        width: 0,
        height: 0,
        offsetHeight: 0,
        offsetWidth: 0
      }), b = null, r = null, u = function() {
        r && (r.disconnect(), r = null);
      }, x = function(v) {
        var t = f.onResize, n = v[0].target, p = n.getBoundingClientRect(), M = p.width, $ = p.height, l = n.offsetWidth, h = n.offsetHeight, m = Math.floor(M), O = Math.floor($);
        if (o.width !== m || o.height !== O || o.offsetWidth !== l || o.offsetHeight !== h) {
          var R = {
            width: m,
            height: O,
            offsetWidth: l,
            offsetHeight: h
          };
          (0, z.default)(o, R), t && Promise.resolve().then(function() {
            t((0, c.default)((0, c.default)({}, R), {}, {
              offsetWidth: l,
              offsetHeight: h
            }), n);
          });
        }
      }, C = (0, e.getCurrentInstance)(), d = function() {
        var v = f.disabled;
        if (v) {
          u();
          return;
        }
        var t = (0, w.findDOMNode)(C), n = t !== b;
        n && (u(), b = t), !r && t && (r = new q.default(x), r.observe(t));
      };
      return (0, e.onMounted)(function() {
        d();
      }), (0, e.onUpdated)(function() {
        d();
      }), (0, e.onUnmounted)(function() {
        u();
      }), (0, e.watch)(function() {
        return f.disabled;
      }, function() {
        d();
      }, {
        flush: "post"
      }), function() {
        var i;
        return (i = g.default) === null || i === void 0 ? void 0 : i.call(g)[0];
      };
    }
  });
  return s.default = H, s;
}
export {
  F as r
};
