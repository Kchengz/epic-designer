import { s as V, i as B, k as H } from "./useConfigInject.fdc04e2e.js";
import { r as F } from "./_vue_commonjs-external.cdc460b2.js";
import { r as G } from "./raf.f4e1fc4f.js";
var p = {}, T = {}, D;
function $() {
  if (D)
    return T;
  D = 1, Object.defineProperty(T, "__esModule", {
    value: !0
  }), T.default = void 0;
  var l = {
    transitionstart: {
      transition: "transitionstart",
      WebkitTransition: "webkitTransitionStart",
      MozTransition: "mozTransitionStart",
      OTransition: "oTransitionStart",
      msTransition: "MSTransitionStart"
    },
    animationstart: {
      animation: "animationstart",
      WebkitAnimation: "webkitAnimationStart",
      MozAnimation: "mozAnimationStart",
      OAnimation: "oAnimationStart",
      msAnimation: "MSAnimationStart"
    }
  }, d = {
    transitionend: {
      transition: "transitionend",
      WebkitTransition: "webkitTransitionEnd",
      MozTransition: "mozTransitionEnd",
      OTransition: "oTransitionEnd",
      msTransition: "MSTransitionEnd"
    },
    animationend: {
      animation: "animationend",
      WebkitAnimation: "webkitAnimationEnd",
      MozAnimation: "mozAnimationEnd",
      OAnimation: "oAnimationEnd",
      msAnimation: "MSAnimationEnd"
    }
  }, o = [], f = [];
  function g() {
    var s = document.createElement("div"), e = s.style;
    "AnimationEvent" in window || (delete l.animationstart.animation, delete d.animationend.animation), "TransitionEvent" in window || (delete l.transitionstart.transition, delete d.transitionend.transition);
    function n(r, k) {
      for (var N in r)
        if (r.hasOwnProperty(N)) {
          var v = r[N];
          for (var m in v)
            if (m in e) {
              k.push(v[m]);
              break;
            }
        }
    }
    n(l, o), n(d, f);
  }
  typeof window < "u" && typeof document < "u" && g();
  function A(s, e, n) {
    s.addEventListener(e, n, !1);
  }
  function u(s, e, n) {
    s.removeEventListener(e, n, !1);
  }
  var S = {
    startEvents: o,
    addStartEventListener: function(e, n) {
      if (o.length === 0) {
        setTimeout(n, 0);
        return;
      }
      o.forEach(function(r) {
        A(e, r, n);
      });
    },
    removeStartEventListener: function(e, n) {
      o.length !== 0 && o.forEach(function(r) {
        u(e, r, n);
      });
    },
    endEvents: f,
    addEndEventListener: function(e, n) {
      if (f.length === 0) {
        setTimeout(n, 0);
        return;
      }
      f.forEach(function(r) {
        A(e, r, n);
      });
    },
    removeEndEventListener: function(e, n) {
      f.length !== 0 && f.forEach(function(r) {
        u(e, r, n);
      });
    }
  }, y = S;
  return T.default = y, T;
}
var R;
function X() {
  if (R)
    return p;
  R = 1;
  var l = H.exports;
  Object.defineProperty(p, "__esModule", {
    value: !0
  }), p.default = void 0;
  var d = F, o = l($()), f = l(G()), g = V(), A = l(B()), u;
  function S(e) {
    return process.env.NODE_ENV === "test" ? !1 : !e || e.offsetParent === null;
  }
  function y(e) {
    var n = (e || "").match(/rgba?\((\d*), (\d*), (\d*)(, [\.\d]*)?\)/);
    return n && n[1] && n[2] && n[3] ? !(n[1] === n[2] && n[2] === n[3]) : !0;
  }
  var s = (0, d.defineComponent)({
    compatConfig: {
      MODE: 3
    },
    name: "Wave",
    props: {
      insertExtraNode: Boolean,
      disabled: Boolean
    },
    setup: function(n, r) {
      var k = r.slots, N = r.expose, v = (0, d.getCurrentInstance)(), m = (0, A.default)("", n), L = m.csp, E = m.prefixCls;
      N({
        csp: L
      });
      var M = null, w = null, q = null, _ = !1, c = null, P = !1, z = function(t) {
        if (!P) {
          var i = (0, g.findDOMNode)(v);
          !t || t.target !== i || _ || C(i);
        }
      }, I = function(t) {
        !t || t.animationName !== "fadeEffect" || C(t.target);
      }, W = function() {
        var t = n.insertExtraNode;
        return t ? "".concat(E.value, "-click-animating") : "".concat(E.value, "-click-animating-without-extra-node");
      }, U = function(t, i) {
        var b = n.insertExtraNode, h = n.disabled;
        if (!(h || !t || S(t) || t.className.indexOf("-leave") >= 0)) {
          c = document.createElement("div"), c.className = "".concat(E.value, "-click-animating-node");
          var x = W();
          if (t.removeAttribute(x), t.setAttribute(x, "true"), u = u || document.createElement("style"), i && i !== "#ffffff" && i !== "rgb(255, 255, 255)" && y(i) && !/rgba\(\d*, \d*, \d*, 0\)/.test(i) && i !== "transparent") {
            var O;
            (O = L.value) !== null && O !== void 0 && O.nonce && (u.nonce = L.value.nonce), c.style.borderColor = i, u.innerHTML = `
        [`.concat(E.value, "-click-animating-without-extra-node='true']::after, .").concat(E.value, `-click-animating-node {
          --antd-wave-shadow-color: `).concat(i, `;
        }`), document.body.contains(u) || document.body.appendChild(u);
          }
          b && t.appendChild(c), o.default.addStartEventListener(t, z), o.default.addEndEventListener(t, I);
        }
      }, C = function(t) {
        if (!(!t || t === c || !(t instanceof Element))) {
          var i = n.insertExtraNode, b = W();
          t.setAttribute(b, "false"), u && (u.innerHTML = ""), i && c && t.contains(c) && t.removeChild(c), o.default.removeStartEventListener(t, z), o.default.removeEndEventListener(t, I);
        }
      }, j = function(t) {
        if (!(!t || !t.getAttribute || t.getAttribute("disabled") || t.className.indexOf("disabled") >= 0)) {
          var i = function(h) {
            if (!(h.target.tagName === "INPUT" || S(h.target))) {
              C(t);
              var x = getComputedStyle(t).getPropertyValue("border-top-color") || getComputedStyle(t).getPropertyValue("border-color") || getComputedStyle(t).getPropertyValue("background-color");
              w = setTimeout(function() {
                return U(t, x);
              }, 0), f.default.cancel(q), _ = !0, q = (0, f.default)(function() {
                _ = !1;
              }, 10);
            }
          };
          return t.addEventListener("click", i, !0), {
            cancel: function() {
              t.removeEventListener("click", i, !0);
            }
          };
        }
      };
      return (0, d.onMounted)(function() {
        (0, d.nextTick)(function() {
          var a = (0, g.findDOMNode)(v);
          a.nodeType === 1 && (M = j(a));
        });
      }), (0, d.onBeforeUnmount)(function() {
        M && M.cancel(), clearTimeout(w), P = !0;
      }), function() {
        var a;
        return (a = k.default) === null || a === void 0 ? void 0 : a.call(k)[0];
      };
    }
  });
  return p.default = s, p;
}
export {
  X as r
};
