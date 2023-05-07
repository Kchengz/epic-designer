import { k as y, e as b } from "./useConfigInject.fdc04e2e.js";
import { r as E } from "./_vue_commonjs-external.cdc460b2.js";
var m = {}, x;
function w() {
  if (x)
    return m;
  x = 1, Object.defineProperty(m, "__esModule", {
    value: !0
  }), m.default = t;
  function t(e, a) {
    return e ? e.contains(a) : !1;
  }
  return m;
}
var h = {}, P = {}, j;
function I() {
  if (j)
    return P;
  j = 1, Object.defineProperty(P, "__esModule", {
    value: !0
  }), P.default = void 0;
  var t = !1;
  try {
    var e = Object.defineProperty({}, "passive", {
      get: function() {
        t = !0;
      }
    });
    window.addEventListener("testPassive", null, e), window.removeEventListener("testPassive", null, e);
  } catch {
  }
  var a = t;
  return P.default = a, P;
}
var _;
function D() {
  if (_)
    return h;
  _ = 1;
  var t = y.exports;
  Object.defineProperty(h, "__esModule", {
    value: !0
  }), h.default = a;
  var e = t(I());
  function a(u, i, c, s) {
    if (u && u.addEventListener) {
      var l = s;
      l === void 0 && e.default && (i === "touchstart" || i === "touchmove" || i === "wheel") && (l = {
        passive: !1
      }), u.addEventListener(i, c, l);
    }
    return {
      remove: function() {
        u && u.removeEventListener && u.removeEventListener(i, c);
      }
    };
  }
  return h;
}
var p = {}, o = {}, q;
function L() {
  if (q)
    return o;
  q = 1, Object.defineProperty(o, "__esModule", {
    value: !0
  }), o.useProviderTrigger = o.useProvidePortal = o.useInjectTrigger = o.useInjectPortal = void 0;
  var t = E, e = Symbol("TriggerContextKey"), a = function() {
    var n = null;
    return (0, t.provide)(e, {
      setPortal: function(r) {
        n = r;
      },
      popPortal: !0
    }), function() {
      return n;
    };
  };
  o.useProviderTrigger = a;
  var u = function(n) {
    return n ? (0, t.inject)(e, {
      setPortal: function() {
      },
      popPortal: !1
    }) : {
      setPortal: function() {
      },
      popPortal: !1
    };
  };
  o.useInjectTrigger = u;
  var i = Symbol("PortalContextKey"), c = function(n) {
    var f = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      inTriggerContext: !0
    };
    (0, t.provide)(i, {
      inTriggerContext: f.inTriggerContext,
      shouldRender: (0, t.computed)(function() {
        var r = n || {}, g = r.sPopupVisible, d = r.popupRef, C = r.forceRender, v = r.autoDestroy, R = !1;
        return (g || d || C) && (R = !0), !g && v && (R = !1), R;
      })
    });
  };
  o.useProvidePortal = c;
  var s = function() {
    c({}, {
      inTriggerContext: !1
    });
    var n = (0, t.inject)(i, {
      shouldRender: (0, t.computed)(function() {
        return !1;
      }),
      inTriggerContext: !1
    });
    return {
      shouldRender: (0, t.computed)(function() {
        return n.shouldRender.value || n.inTriggerContext === !1;
      })
    };
  };
  return o.useInjectPortal = s, o;
}
var T;
function S() {
  if (T)
    return p;
  T = 1;
  var t = y.exports;
  Object.defineProperty(p, "__esModule", {
    value: !0
  }), p.default = void 0;
  var e = E, a = t(b()), u = L(), i = (0, e.defineComponent)({
    compatConfig: {
      MODE: 3
    },
    name: "Portal",
    inheritAttrs: !1,
    props: {
      getContainer: a.default.func.isRequired,
      didUpdate: Function
    },
    setup: function(s, l) {
      var n = l.slots, f = !0, r, g = (0, u.useInjectPortal)(), d = g.shouldRender;
      (0, e.onBeforeMount)(function() {
        f = !1, d.value && (r = s.getContainer());
      });
      var C = (0, e.watch)(d, function() {
        d.value && !r && (r = s.getContainer()), r && C();
      });
      return (0, e.onUpdated)(function() {
        (0, e.nextTick)(function() {
          if (d.value) {
            var v;
            (v = s.didUpdate) === null || v === void 0 || v.call(s, s);
          }
        });
      }), (0, e.onBeforeUnmount)(function() {
        r && r.parentNode && r.parentNode.removeChild(r);
      }), function() {
        if (!d.value)
          return null;
        if (f) {
          var v;
          return (v = n.default) === null || v === void 0 ? void 0 : v.call(n);
        }
        return r ? (0, e.createVNode)(e.Teleport, {
          to: r
        }, n) : null;
      };
    }
  });
  return p.default = i, p;
}
export {
  w as a,
  S as b,
  L as c,
  I as d,
  D as r
};
