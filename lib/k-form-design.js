import { Fragment as ft, isVNode as lo, Comment as O0, Text as Bh, defineComponent as pe, reactive as Mt, getCurrentInstance as sn, onMounted as dt, onUpdated as kr, onUnmounted as va, watch as Ce, inject as ut, computed as F, unref as St, createVNode as m, provide as ct, Transition as _r, Teleport as Pc, ref as G, TransitionGroup as Oc, render as Xd, h as Qd, nextTick as vt, watchEffect as Ue, withDirectives as gn, resolveDirective as T0, onBeforeUnmount as ht, cloneVNode as Fi, toRef as ze, withModifiers as Jd, vShow as uo, onBeforeMount as I0, createTextVNode as or, isRef as k0, toRefs as Tc, shallowRef as Xe, toRaw as Ot, useAttrs as _0, onBeforeUpdate as Kh, camelize as Hh, openBlock as Fa, createBlock as si, withCtx as zh, resolveDynamicComponent as E0, mergeProps as Wh, createElementBlock as N0, renderList as M0 } from "vue";
function j(t, e, n) {
  return e in t ? Object.defineProperty(t, e, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = n, t;
}
function Zd(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(t, a).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Y(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Zd(Object(n), !0).forEach(function(r) {
      j(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Zd(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function k() {
  return k = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
    }
    return t;
  }, k.apply(this, arguments);
}
function Le(t) {
  return Le = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Le(t);
}
var A0 = function(e) {
  return typeof e == "function";
}, D0 = Array.isArray, F0 = function(e) {
  return typeof e == "string";
}, R0 = function(e) {
  return e !== null && Le(e) === "object";
}, $0 = /^on[^a-z]/, L0 = function(e) {
  return $0.test(e);
}, Uh = function(e) {
  var n = /* @__PURE__ */ Object.create(null);
  return function(r) {
    var a = n[r];
    return a || (n[r] = e(r));
  };
}, j0 = /-(\w)/g, Ic = Uh(function(t) {
  return t.replace(j0, function(e, n) {
    return n ? n.toUpperCase() : "";
  });
}), V0 = /\B([A-Z])/g, B0 = Uh(function(t) {
  return t.replace(V0, "-$1").toLowerCase();
}), K0 = Object.prototype.hasOwnProperty, ef = function(e, n) {
  return K0.call(e, n);
};
function H0(t, e, n, r) {
  var a = t[n];
  if (a != null) {
    var o = ef(a, "default");
    if (o && r === void 0) {
      var i = a.default;
      r = a.type !== Function && A0(i) ? i() : i;
    }
    a.type === Boolean && (!ef(e, n) && !o ? r = !1 : r === "" && (r = !0));
  }
  return r;
}
function _a(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 ? arguments[2] : void 0;
  return typeof t == "function" ? t(e) : t != null ? t : n;
}
function ge() {
  for (var t = [], e = 0; e < arguments.length; e++) {
    var n = e < 0 || arguments.length <= e ? void 0 : arguments[e];
    if (!!n) {
      if (F0(n))
        t.push(n);
      else if (D0(n))
        for (var r = 0; r < n.length; r++) {
          var a = ge(n[r]);
          a && t.push(a);
        }
      else if (R0(n))
        for (var o in n)
          n[o] && t.push(o);
    }
  }
  return t.join(" ");
}
var Yh = function() {
  if (typeof Map < "u")
    return Map;
  function t(e, n) {
    var r = -1;
    return e.some(function(a, o) {
      return a[0] === n ? (r = o, !0) : !1;
    }), r;
  }
  return function() {
    function e() {
      this.__entries__ = [];
    }
    return Object.defineProperty(e.prototype, "size", {
      get: function() {
        return this.__entries__.length;
      },
      enumerable: !0,
      configurable: !0
    }), e.prototype.get = function(n) {
      var r = t(this.__entries__, n), a = this.__entries__[r];
      return a && a[1];
    }, e.prototype.set = function(n, r) {
      var a = t(this.__entries__, n);
      ~a ? this.__entries__[a][1] = r : this.__entries__.push([n, r]);
    }, e.prototype.delete = function(n) {
      var r = this.__entries__, a = t(r, n);
      ~a && r.splice(a, 1);
    }, e.prototype.has = function(n) {
      return !!~t(this.__entries__, n);
    }, e.prototype.clear = function() {
      this.__entries__.splice(0);
    }, e.prototype.forEach = function(n, r) {
      r === void 0 && (r = null);
      for (var a = 0, o = this.__entries__; a < o.length; a++) {
        var i = o[a];
        n.call(r, i[1], i[0]);
      }
    }, e;
  }();
}(), bu = typeof window < "u" && typeof document < "u" && window.document === document, di = function() {
  return typeof global < "u" && global.Math === Math ? global : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")();
}(), z0 = function() {
  return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(di) : function(t) {
    return setTimeout(function() {
      return t(Date.now());
    }, 1e3 / 60);
  };
}(), W0 = 2;
function U0(t, e) {
  var n = !1, r = !1, a = 0;
  function o() {
    n && (n = !1, t()), r && l();
  }
  function i() {
    z0(o);
  }
  function l() {
    var u = Date.now();
    if (n) {
      if (u - a < W0)
        return;
      r = !0;
    } else
      n = !0, r = !1, setTimeout(i, e);
    a = u;
  }
  return l;
}
var Y0 = 20, q0 = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], G0 = typeof MutationObserver < "u", X0 = function() {
  function t() {
    this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = U0(this.refresh.bind(this), Y0);
  }
  return t.prototype.addObserver = function(e) {
    ~this.observers_.indexOf(e) || this.observers_.push(e), this.connected_ || this.connect_();
  }, t.prototype.removeObserver = function(e) {
    var n = this.observers_, r = n.indexOf(e);
    ~r && n.splice(r, 1), !n.length && this.connected_ && this.disconnect_();
  }, t.prototype.refresh = function() {
    var e = this.updateObservers_();
    e && this.refresh();
  }, t.prototype.updateObservers_ = function() {
    var e = this.observers_.filter(function(n) {
      return n.gatherActive(), n.hasActive();
    });
    return e.forEach(function(n) {
      return n.broadcastActive();
    }), e.length > 0;
  }, t.prototype.connect_ = function() {
    !bu || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), G0 ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
      attributes: !0,
      childList: !0,
      characterData: !0,
      subtree: !0
    })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
  }, t.prototype.disconnect_ = function() {
    !bu || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
  }, t.prototype.onTransitionEnd_ = function(e) {
    var n = e.propertyName, r = n === void 0 ? "" : n, a = q0.some(function(o) {
      return !!~r.indexOf(o);
    });
    a && this.refresh();
  }, t.getInstance = function() {
    return this.instance_ || (this.instance_ = new t()), this.instance_;
  }, t.instance_ = null, t;
}(), qh = function(t, e) {
  for (var n = 0, r = Object.keys(e); n < r.length; n++) {
    var a = r[n];
    Object.defineProperty(t, a, {
      value: e[a],
      enumerable: !1,
      writable: !1,
      configurable: !0
    });
  }
  return t;
}, la = function(t) {
  var e = t && t.ownerDocument && t.ownerDocument.defaultView;
  return e || di;
}, Gh = Ri(0, 0, 0, 0);
function fi(t) {
  return parseFloat(t) || 0;
}
function tf(t) {
  for (var e = [], n = 1; n < arguments.length; n++)
    e[n - 1] = arguments[n];
  return e.reduce(function(r, a) {
    var o = t["border-" + a + "-width"];
    return r + fi(o);
  }, 0);
}
function Q0(t) {
  for (var e = ["top", "right", "bottom", "left"], n = {}, r = 0, a = e; r < a.length; r++) {
    var o = a[r], i = t["padding-" + o];
    n[o] = fi(i);
  }
  return n;
}
function J0(t) {
  var e = t.getBBox();
  return Ri(0, 0, e.width, e.height);
}
function Z0(t) {
  var e = t.clientWidth, n = t.clientHeight;
  if (!e && !n)
    return Gh;
  var r = la(t).getComputedStyle(t), a = Q0(r), o = a.left + a.right, i = a.top + a.bottom, l = fi(r.width), u = fi(r.height);
  if (r.boxSizing === "border-box" && (Math.round(l + o) !== e && (l -= tf(r, "left", "right") + o), Math.round(u + i) !== n && (u -= tf(r, "top", "bottom") + i)), !tC(t)) {
    var s = Math.round(l + o) - e, d = Math.round(u + i) - n;
    Math.abs(s) !== 1 && (l -= s), Math.abs(d) !== 1 && (u -= d);
  }
  return Ri(a.left, a.top, l, u);
}
var eC = function() {
  return typeof SVGGraphicsElement < "u" ? function(t) {
    return t instanceof la(t).SVGGraphicsElement;
  } : function(t) {
    return t instanceof la(t).SVGElement && typeof t.getBBox == "function";
  };
}();
function tC(t) {
  return t === la(t).document.documentElement;
}
function nC(t) {
  return bu ? eC(t) ? J0(t) : Z0(t) : Gh;
}
function rC(t) {
  var e = t.x, n = t.y, r = t.width, a = t.height, o = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, i = Object.create(o.prototype);
  return qh(i, {
    x: e,
    y: n,
    width: r,
    height: a,
    top: n,
    right: e + r,
    bottom: a + n,
    left: e
  }), i;
}
function Ri(t, e, n, r) {
  return { x: t, y: e, width: n, height: r };
}
var aC = function() {
  function t(e) {
    this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = Ri(0, 0, 0, 0), this.target = e;
  }
  return t.prototype.isActive = function() {
    var e = nC(this.target);
    return this.contentRect_ = e, e.width !== this.broadcastWidth || e.height !== this.broadcastHeight;
  }, t.prototype.broadcastRect = function() {
    var e = this.contentRect_;
    return this.broadcastWidth = e.width, this.broadcastHeight = e.height, e;
  }, t;
}(), oC = function() {
  function t(e, n) {
    var r = rC(n);
    qh(this, { target: e, contentRect: r });
  }
  return t;
}(), iC = function() {
  function t(e, n, r) {
    if (this.activeObservations_ = [], this.observations_ = new Yh(), typeof e != "function")
      throw new TypeError("The callback provided as parameter 1 is not a function.");
    this.callback_ = e, this.controller_ = n, this.callbackCtx_ = r;
  }
  return t.prototype.observe = function(e) {
    if (!arguments.length)
      throw new TypeError("1 argument required, but only 0 present.");
    if (!(typeof Element > "u" || !(Element instanceof Object))) {
      if (!(e instanceof la(e).Element))
        throw new TypeError('parameter 1 is not of type "Element".');
      var n = this.observations_;
      n.has(e) || (n.set(e, new aC(e)), this.controller_.addObserver(this), this.controller_.refresh());
    }
  }, t.prototype.unobserve = function(e) {
    if (!arguments.length)
      throw new TypeError("1 argument required, but only 0 present.");
    if (!(typeof Element > "u" || !(Element instanceof Object))) {
      if (!(e instanceof la(e).Element))
        throw new TypeError('parameter 1 is not of type "Element".');
      var n = this.observations_;
      !n.has(e) || (n.delete(e), n.size || this.controller_.removeObserver(this));
    }
  }, t.prototype.disconnect = function() {
    this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this);
  }, t.prototype.gatherActive = function() {
    var e = this;
    this.clearActive(), this.observations_.forEach(function(n) {
      n.isActive() && e.activeObservations_.push(n);
    });
  }, t.prototype.broadcastActive = function() {
    if (!!this.hasActive()) {
      var e = this.callbackCtx_, n = this.activeObservations_.map(function(r) {
        return new oC(r.target, r.broadcastRect());
      });
      this.callback_.call(e, n, e), this.clearActive();
    }
  }, t.prototype.clearActive = function() {
    this.activeObservations_.splice(0);
  }, t.prototype.hasActive = function() {
    return this.activeObservations_.length > 0;
  }, t;
}(), Xh = typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : new Yh(), Qh = function() {
  function t(e) {
    if (!(this instanceof t))
      throw new TypeError("Cannot call a class as a function.");
    if (!arguments.length)
      throw new TypeError("1 argument required, but only 0 present.");
    var n = X0.getInstance(), r = new iC(e, n, this);
    Xh.set(this, r);
  }
  return t;
}();
[
  "observe",
  "unobserve",
  "disconnect"
].forEach(function(t) {
  Qh.prototype[t] = function() {
    var e;
    return (e = Xh.get(this))[t].apply(e, arguments);
  };
});
var Jh = function() {
  return typeof di.ResizeObserver < "u" ? di.ResizeObserver : Qh;
}();
function Zh(t) {
  if (Array.isArray(t))
    return t;
}
function lC(t, e) {
  var n = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (n != null) {
    var r = [], a = !0, o = !1, i, l;
    try {
      for (n = n.call(t); !(a = (i = n.next()).done) && (r.push(i.value), !(e && r.length === e)); a = !0)
        ;
    } catch (u) {
      o = !0, l = u;
    } finally {
      try {
        !a && n.return != null && n.return();
      } finally {
        if (o)
          throw l;
      }
    }
    return r;
  }
}
function Cu(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, r = new Array(e); n < e; n++)
    r[n] = t[n];
  return r;
}
function $i(t, e) {
  if (!!t) {
    if (typeof t == "string")
      return Cu(t, e);
    var n = Object.prototype.toString.call(t).slice(8, -1);
    if (n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set")
      return Array.from(t);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return Cu(t, e);
  }
}
function eg() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function De(t, e) {
  return Zh(t) || lC(t, e) || $i(t, e) || eg();
}
function uC(t) {
  if (Array.isArray(t))
    return Cu(t);
}
function tg(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null)
    return Array.from(t);
}
function cC() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ie(t) {
  return uC(t) || tg(t) || $i(t) || cC();
}
var sC = typeof global == "object" && global && global.Object === Object && global;
const ng = sC;
var dC = typeof self == "object" && self && self.Object === Object && self, fC = ng || dC || Function("return this")();
const mn = fC;
var vC = mn.Symbol;
const un = vC;
var rg = Object.prototype, pC = rg.hasOwnProperty, hC = rg.toString, Pa = un ? un.toStringTag : void 0;
function gC(t) {
  var e = pC.call(t, Pa), n = t[Pa];
  try {
    t[Pa] = void 0;
    var r = !0;
  } catch {
  }
  var a = hC.call(t);
  return r && (e ? t[Pa] = n : delete t[Pa]), a;
}
var mC = Object.prototype, yC = mC.toString;
function bC(t) {
  return yC.call(t);
}
var CC = "[object Null]", wC = "[object Undefined]", nf = un ? un.toStringTag : void 0;
function Er(t) {
  return t == null ? t === void 0 ? wC : CC : nf && nf in Object(t) ? gC(t) : bC(t);
}
function ag(t, e) {
  return function(n) {
    return t(e(n));
  };
}
var SC = ag(Object.getPrototypeOf, Object);
const kc = SC;
function _n(t) {
  return t != null && typeof t == "object";
}
var xC = "[object Object]", PC = Function.prototype, OC = Object.prototype, og = PC.toString, TC = OC.hasOwnProperty, IC = og.call(Object);
function ig(t) {
  if (!_n(t) || Er(t) != xC)
    return !1;
  var e = kc(t);
  if (e === null)
    return !0;
  var n = TC.call(e, "constructor") && e.constructor;
  return typeof n == "function" && n instanceof n && og.call(n) == IC;
}
var kC = function(e) {
  return e != null && e !== "";
};
const wu = kC;
var _C = function(e, n) {
  var r = k({}, e);
  return Object.keys(n).forEach(function(a) {
    var o = r[a];
    if (o)
      o.type || o.default ? o.default = n[a] : o.def ? o.def(n[a]) : r[a] = {
        type: o,
        default: n[a]
      };
    else
      throw new Error("not have ".concat(a, " prop"));
  }), r;
};
const kt = _C;
var _c = function(e) {
  for (var n = Object.keys(e), r = {}, a = {}, o = {}, i = 0, l = n.length; i < l; i++) {
    var u = n[i];
    L0(u) ? (r[u[2].toLowerCase() + u.slice(3)] = e[u], a[u] = e[u]) : o[u] = e[u];
  }
  return {
    onEvents: a,
    events: r,
    extraAttrs: o
  };
}, EC = function() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", n = arguments.length > 1 ? arguments[1] : void 0, r = {}, a = /;(?![^(]*\))/g, o = /:(.+)/;
  return Le(e) === "object" ? e : (e.split(a).forEach(function(i) {
    if (i) {
      var l = i.split(o);
      if (l.length > 1) {
        var u = n ? Ic(l[0].trim()) : l[0].trim();
        r[u] = l[1].trim();
      }
    }
  }), r);
}, Yr = function(e, n) {
  return e[n] !== void 0;
}, Kt = function t() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, r = Array.isArray(e) ? e : [e], a = [];
  return r.forEach(function(o) {
    Array.isArray(o) ? a.push.apply(a, Ie(t(o, n))) : o && o.type === ft ? a.push.apply(a, Ie(t(o.children, n))) : o && lo(o) ? n && !ug(o) ? a.push(o) : n || a.push(o) : wu(o) && a.push(o);
  }), a;
}, NC = function(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "default", r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (lo(e))
    return e.type === ft ? n === "default" ? Kt(e.children) : [] : e.children && e.children[n] ? Kt(e.children[n](r)) : [];
  var a = e.$slots[n] && e.$slots[n](r);
  return Kt(a);
}, wr = function(e) {
  for (var n, r = ((n = e == null ? void 0 : e.vnode) === null || n === void 0 ? void 0 : n.el) || e && (e.$el || e); r && !r.tagName; )
    r = r.nextSibling;
  return r;
}, MC = function(e) {
  var n = {};
  if (e.$ && e.$.vnode) {
    var r = e.$.vnode.props || {};
    Object.keys(e.$props).forEach(function(l) {
      var u = e.$props[l], s = B0(l);
      (u !== void 0 || s in r) && (n[l] = u);
    });
  } else if (lo(e) && Le(e.type) === "object") {
    var a = e.props || {}, o = {};
    Object.keys(a).forEach(function(l) {
      o[Ic(l)] = a[l];
    });
    var i = e.type.props || {};
    Object.keys(i).forEach(function(l) {
      var u = H0(i, o, l, o[l]);
      (u !== void 0 || l in o) && (n[l] = u);
    });
  }
  return n;
}, lg = function(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "default", r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : e, a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !0, o = void 0;
  if (e.$) {
    var i = e[n];
    if (i !== void 0)
      return typeof i == "function" && a ? i(r) : i;
    o = e.$slots[n], o = a && o ? o(r) : o;
  } else if (lo(e)) {
    var l = e.props && e.props[n];
    if (l !== void 0 && e.props !== null)
      return typeof l == "function" && a ? l(r) : l;
    e.type === ft ? o = e.children : e.children && e.children[n] && (o = e.children[n], o = a && o ? o(r) : o);
  }
  return Array.isArray(o) && (o = Kt(o), o = o.length === 1 ? o[0] : o, o = o.length === 0 ? void 0 : o), o;
};
function rf() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, n = {};
  return t.$ ? n = k(k({}, n), t.$attrs) : n = k(k({}, n), t.props), _c(n)[e ? "onEvents" : "events"];
}
function AC(t, e) {
  var n = (lo(t) ? t.props : t.$attrs) || {}, r = n.style || {};
  if (typeof r == "string")
    r = EC(r, e);
  else if (e && r) {
    var a = {};
    return Object.keys(r).forEach(function(o) {
      return a[Ic(o)] = r[o];
    }), a;
  }
  return r;
}
function ug(t) {
  return t && (t.type === O0 || t.type === ft && t.children.length === 0 || t.type === Bh && t.children.trim() === "");
}
function yn() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], e = [];
  return t.forEach(function(n) {
    Array.isArray(n) ? e.push.apply(e, Ie(n)) : (n == null ? void 0 : n.type) === ft ? e.push.apply(e, Ie(yn(n.children))) : e.push(n);
  }), e.filter(function(n) {
    return !ug(n);
  });
}
function At(t) {
  return Array.isArray(t) && t.length === 1 && (t = t[0]), t && t.__v_isVNode && Le(t.type) !== "symbol";
}
function ua(t, e) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "default", r, a;
  return (r = e[n]) !== null && r !== void 0 ? r : (a = t[n]) === null || a === void 0 ? void 0 : a.call(t);
}
const Li = pe({
  name: "ResizeObserver",
  props: {
    disabled: Boolean,
    onResize: Function
  },
  emits: ["resize"],
  setup: function(e, n) {
    var r = n.slots, a = Mt({
      width: 0,
      height: 0,
      offsetHeight: 0,
      offsetWidth: 0
    }), o = null, i = null, l = function() {
      i && (i.disconnect(), i = null);
    }, u = function(v) {
      var f = e.onResize, g = v[0].target, p = g.getBoundingClientRect(), y = p.width, h = p.height, w = g.offsetWidth, C = g.offsetHeight, x = Math.floor(y), S = Math.floor(h);
      if (a.width !== x || a.height !== S || a.offsetWidth !== w || a.offsetHeight !== C) {
        var b = {
          width: x,
          height: S,
          offsetWidth: w,
          offsetHeight: C
        };
        k(a, b), f && Promise.resolve().then(function() {
          f(k(k({}, b), {
            offsetWidth: w,
            offsetHeight: C
          }), g);
        });
      }
    }, s = sn(), d = function() {
      var v = e.disabled;
      if (v) {
        l();
        return;
      }
      var f = wr(s), g = f !== o;
      g && (l(), o = f), !i && f && (i = new Jh(u), i.observe(f));
    };
    return dt(function() {
      d();
    }), kr(function() {
      d();
    }), va(function() {
      l();
    }), Ce(function() {
      return e.disabled;
    }, function() {
      d();
    }, {
      flush: "post"
    }), function() {
      var c;
      return (c = r.default) === null || c === void 0 ? void 0 : c.call(r)[0];
    };
  }
});
var cg = function(e) {
  return setTimeout(e, 16);
}, sg = function(e) {
  return clearTimeout(e);
};
typeof window < "u" && "requestAnimationFrame" in window && (cg = function(e) {
  return window.requestAnimationFrame(e);
}, sg = function(e) {
  return window.cancelAnimationFrame(e);
});
var af = 0, Ec = /* @__PURE__ */ new Map();
function dg(t) {
  Ec.delete(t);
}
function tt(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  af += 1;
  var n = af;
  function r(a) {
    if (a === 0)
      dg(n), t();
    else {
      var o = cg(function() {
        r(a - 1);
      });
      Ec.set(n, o);
    }
  }
  return r(e), n;
}
tt.cancel = function(t) {
  var e = Ec.get(t);
  return dg(e), sg(e);
};
var Ht = function() {
  for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
    n[r] = arguments[r];
  return n;
}, Nr = function(e) {
  var n = e;
  return n.install = function(r) {
    r.component(n.displayName || n.name, e);
  }, e;
}, fg = !1;
try {
  var of = Object.defineProperty({}, "passive", {
    get: function() {
      fg = !0;
    }
  });
  window.addEventListener("testPassive", null, of), window.removeEventListener("testPassive", null, of);
} catch {
}
const Wt = fg;
function Ea(t, e, n, r) {
  if (t && t.addEventListener) {
    var a = r;
    a === void 0 && Wt && (e === "touchstart" || e === "touchmove" || e === "wheel") && (a = {
      passive: !1
    }), t.addEventListener(e, n, a);
  }
  return {
    remove: function() {
      t && t.removeEventListener && t.removeEventListener(e, n);
    }
  };
}
const vg = {
  items_per_page: "/ page",
  jump_to: "Go to",
  jump_to_confirm: "confirm",
  page: "",
  prev_page: "Previous Page",
  next_page: "Next Page",
  prev_5: "Previous 5 Pages",
  next_5: "Next 5 Pages",
  prev_3: "Previous 3 Pages",
  next_3: "Next 3 Pages"
};
var DC = {
  locale: "en_US",
  today: "Today",
  now: "Now",
  backToToday: "Back to today",
  ok: "Ok",
  clear: "Clear",
  month: "Month",
  year: "Year",
  timeSelect: "select time",
  dateSelect: "select date",
  weekSelect: "Choose a week",
  monthSelect: "Choose a month",
  yearSelect: "Choose a year",
  decadeSelect: "Choose a decade",
  yearFormat: "YYYY",
  dateFormat: "M/D/YYYY",
  dayFormat: "D",
  dateTimeFormat: "M/D/YYYY HH:mm:ss",
  monthBeforeYear: !0,
  previousMonth: "Previous month (PageUp)",
  nextMonth: "Next month (PageDown)",
  previousYear: "Last year (Control + left)",
  nextYear: "Next year (Control + right)",
  previousDecade: "Last decade",
  nextDecade: "Next decade",
  previousCentury: "Last century",
  nextCentury: "Next century"
};
const FC = DC;
var RC = {
  placeholder: "Select time",
  rangePlaceholder: ["Start time", "End time"]
};
const pg = RC;
var $C = {
  lang: k({
    placeholder: "Select date",
    yearPlaceholder: "Select year",
    quarterPlaceholder: "Select quarter",
    monthPlaceholder: "Select month",
    weekPlaceholder: "Select week",
    rangePlaceholder: ["Start date", "End date"],
    rangeYearPlaceholder: ["Start year", "End year"],
    rangeQuarterPlaceholder: ["Start quarter", "End quarter"],
    rangeMonthPlaceholder: ["Start month", "End month"],
    rangeWeekPlaceholder: ["Start week", "End week"]
  }, FC),
  timePickerLocale: k({}, pg)
};
const vi = $C;
var Yt = "${label} is not a valid ${type}", LC = {
  locale: "en",
  Pagination: vg,
  DatePicker: vi,
  TimePicker: pg,
  Calendar: vi,
  global: {
    placeholder: "Please select"
  },
  Table: {
    filterTitle: "Filter menu",
    filterConfirm: "OK",
    filterReset: "Reset",
    filterEmptyText: "No filters",
    filterCheckall: "Select all items",
    filterSearchPlaceholder: "Search in filters",
    emptyText: "No data",
    selectAll: "Select current page",
    selectInvert: "Invert current page",
    selectNone: "Clear all data",
    selectionAll: "Select all data",
    sortTitle: "Sort",
    expand: "Expand row",
    collapse: "Collapse row",
    triggerDesc: "Click to sort descending",
    triggerAsc: "Click to sort ascending",
    cancelSort: "Click to cancel sorting"
  },
  Modal: {
    okText: "OK",
    cancelText: "Cancel",
    justOkText: "OK"
  },
  Popconfirm: {
    okText: "OK",
    cancelText: "Cancel"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "Search here",
    itemUnit: "item",
    itemsUnit: "items",
    remove: "Remove",
    selectCurrent: "Select current page",
    removeCurrent: "Remove current page",
    selectAll: "Select all data",
    removeAll: "Remove all data",
    selectInvert: "Invert current page"
  },
  Upload: {
    uploading: "Uploading...",
    removeFile: "Remove file",
    uploadError: "Upload error",
    previewFile: "Preview file",
    downloadFile: "Download file"
  },
  Empty: {
    description: "No Data"
  },
  Icon: {
    icon: "icon"
  },
  Text: {
    edit: "Edit",
    copy: "Copy",
    copied: "Copied",
    expand: "Expand"
  },
  PageHeader: {
    back: "Back"
  },
  Form: {
    optional: "(optional)",
    defaultValidateMessages: {
      default: "Field validation error for ${label}",
      required: "Please enter ${label}",
      enum: "${label} must be one of [${enum}]",
      whitespace: "${label} cannot be a blank character",
      date: {
        format: "${label} date format is invalid",
        parse: "${label} cannot be converted to a date",
        invalid: "${label} is an invalid date"
      },
      types: {
        string: Yt,
        method: Yt,
        array: Yt,
        object: Yt,
        number: Yt,
        date: Yt,
        boolean: Yt,
        integer: Yt,
        float: Yt,
        regexp: Yt,
        email: Yt,
        url: Yt,
        hex: Yt
      },
      string: {
        len: "${label} must be ${len} characters",
        min: "${label} must be at least ${min} characters",
        max: "${label} must be up to ${max} characters",
        range: "${label} must be between ${min}-${max} characters"
      },
      number: {
        len: "${label} must be equal to ${len}",
        min: "${label} must be minimum ${min}",
        max: "${label} must be maximum ${max}",
        range: "${label} must be between ${min}-${max}"
      },
      array: {
        len: "Must be ${len} ${label}",
        min: "At least ${min} ${label}",
        max: "At most ${max} ${label}",
        range: "The amount of ${label} must be between ${min}-${max}"
      },
      pattern: {
        mismatch: "${label} does not match the pattern ${pattern}"
      }
    }
  },
  Image: {
    preview: "Preview"
  }
};
const ir = LC, ji = pe({
  name: "LocaleReceiver",
  props: {
    componentName: String,
    defaultLocale: {
      type: [Object, Function]
    },
    children: {
      type: Function
    }
  },
  setup: function(e, n) {
    var r = n.slots, a = ut("localeData", {}), o = F(function() {
      var l = e.componentName, u = l === void 0 ? "global" : l, s = e.defaultLocale, d = s || ir[u || "global"], c = a.antLocale, v = u && c ? c[u] : {};
      return k(k({}, typeof d == "function" ? d() : d), v || {});
    }), i = F(function() {
      var l = a.antLocale, u = l && l.locale;
      return l && l.exist && !u ? ir.locale : u;
    });
    return function() {
      var l = e.children || r.default, u = a.antLocale;
      return l == null ? void 0 : l(o.value, i.value, u);
    };
  }
});
function co(t, e, n) {
  var r = ut("localeData", {}), a = F(function() {
    var o = r.antLocale, i = St(e) || ir[t || "global"], l = t && o ? o[t] : {};
    return k(k(k({}, typeof i == "function" ? i() : i), l || {}), St(n) || {});
  });
  return [a];
}
var hg = function() {
  var e = Qe("empty", {}), n = e.getPrefixCls, r = n("empty-img-default");
  return m("svg", {
    class: r,
    width: "184",
    height: "152",
    viewBox: "0 0 184 152"
  }, [m("g", {
    fill: "none",
    "fill-rule": "evenodd"
  }, [m("g", {
    transform: "translate(24 31.67)"
  }, [m("ellipse", {
    class: "".concat(r, "-ellipse"),
    cx: "67.797",
    cy: "106.89",
    rx: "67.797",
    ry: "12.668"
  }, null), m("path", {
    class: "".concat(r, "-path-1"),
    d: "M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z"
  }, null), m("path", {
    class: "".concat(r, "-path-2"),
    d: "M101.537 86.214L80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z",
    transform: "translate(13.56)"
  }, null), m("path", {
    class: "".concat(r, "-path-3"),
    d: "M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z"
  }, null), m("path", {
    class: "".concat(r, "-path-4"),
    d: "M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z"
  }, null)]), m("path", {
    class: "".concat(r, "-path-5"),
    d: "M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z"
  }, null), m("g", {
    class: "".concat(r, "-g"),
    transform: "translate(149.65 15.383)"
  }, [m("ellipse", {
    cx: "20.654",
    cy: "3.167",
    rx: "2.849",
    ry: "2.815"
  }, null), m("path", {
    d: "M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z"
  }, null)])])]);
};
hg.PRESENTED_IMAGE_DEFAULT = !0;
const jC = hg;
var gg = function() {
  var e = Qe("empty", {}), n = e.getPrefixCls, r = n("empty-img-simple");
  return m("svg", {
    class: r,
    width: "64",
    height: "41",
    viewBox: "0 0 64 41"
  }, [m("g", {
    transform: "translate(0 1)",
    fill: "none",
    "fill-rule": "evenodd"
  }, [m("ellipse", {
    class: "".concat(r, "-ellipse"),
    fill: "#F5F5F5",
    cx: "32",
    cy: "33",
    rx: "32",
    ry: "7"
  }, null), m("g", {
    class: "".concat(r, "-g"),
    "fill-rule": "nonzero",
    stroke: "#D9D9D9"
  }, [m("path", {
    d: "M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"
  }, null), m("path", {
    d: "M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z",
    fill: "#FAFAFA",
    class: "".concat(r, "-path")
  }, null)])])]);
};
gg.PRESENTED_IMAGE_SIMPLE = !0;
const VC = gg;
function lf(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
  }
}
function mg(t, e, n) {
  return e && lf(t.prototype, e), n && lf(t, n), t;
}
function Zo() {
  return (Zo = Object.assign || function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
    }
    return t;
  }).apply(this, arguments);
}
function yg(t, e) {
  t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;
}
function bg(t, e) {
  if (t == null)
    return {};
  var n, r, a = {}, o = Object.keys(t);
  for (r = 0; r < o.length; r++)
    e.indexOf(n = o[r]) >= 0 || (a[n] = t[n]);
  return a;
}
function uf(t) {
  return ((e = t) != null && typeof e == "object" && Array.isArray(e) === !1) == 1 && Object.prototype.toString.call(t) === "[object Object]";
  var e;
}
var Cg = Object.prototype, wg = Cg.toString, BC = Cg.hasOwnProperty, Sg = /^\s*function (\w+)/;
function cf(t) {
  var e, n = (e = t == null ? void 0 : t.type) !== null && e !== void 0 ? e : t;
  if (n) {
    var r = n.toString().match(Sg);
    return r ? r[1] : "";
  }
  return "";
}
var Or = function(t) {
  var e, n;
  return uf(t) !== !1 && typeof (e = t.constructor) == "function" && uf(n = e.prototype) !== !1 && n.hasOwnProperty("isPrototypeOf") !== !1;
}, xg = function(t) {
  return t;
}, Vt = xg;
if (process.env.NODE_ENV !== "production") {
  var KC = typeof console < "u";
  Vt = KC ? function(t) {
    console.warn("[VueTypes warn]: " + t);
  } : xg;
}
var Ya = function(t, e) {
  return BC.call(t, e);
}, HC = Number.isInteger || function(t) {
  return typeof t == "number" && isFinite(t) && Math.floor(t) === t;
}, ca = Array.isArray || function(t) {
  return wg.call(t) === "[object Array]";
}, sa = function(t) {
  return wg.call(t) === "[object Function]";
}, pi = function(t) {
  return Or(t) && Ya(t, "_vueTypes_name");
}, Pg = function(t) {
  return Or(t) && (Ya(t, "type") || ["_vueTypes_name", "validator", "default", "required"].some(function(e) {
    return Ya(t, e);
  }));
};
function Nc(t, e) {
  return Object.defineProperty(t.bind(e), "__original", { value: t });
}
function Mr(t, e, n) {
  var r;
  n === void 0 && (n = !1);
  var a = !0, o = "";
  r = Or(t) ? t : { type: t };
  var i = pi(r) ? r._vueTypes_name + " - " : "";
  if (Pg(r) && r.type !== null) {
    if (r.type === void 0 || r.type === !0 || !r.required && e === void 0)
      return a;
    ca(r.type) ? (a = r.type.some(function(c) {
      return Mr(c, e, !0) === !0;
    }), o = r.type.map(function(c) {
      return cf(c);
    }).join(" or ")) : a = (o = cf(r)) === "Array" ? ca(e) : o === "Object" ? Or(e) : o === "String" || o === "Number" || o === "Boolean" || o === "Function" ? function(c) {
      if (c == null)
        return "";
      var v = c.constructor.toString().match(Sg);
      return v ? v[1] : "";
    }(e) === o : e instanceof r.type;
  }
  if (!a) {
    var l = i + 'value "' + e + '" should be of type "' + o + '"';
    return n === !1 ? (Vt(l), !1) : l;
  }
  if (Ya(r, "validator") && sa(r.validator)) {
    var u = Vt, s = [];
    if (Vt = function(c) {
      s.push(c);
    }, a = r.validator(e), Vt = u, !a) {
      var d = (s.length > 1 ? "* " : "") + s.join(`
* `);
      return s.length = 0, n === !1 ? (Vt(d), a) : d;
    }
  }
  return a;
}
function Zt(t, e) {
  var n = Object.defineProperties(e, { _vueTypes_name: { value: t, writable: !0 }, isRequired: { get: function() {
    return this.required = !0, this;
  } }, def: { value: function(a) {
    return a !== void 0 || this.default ? sa(a) || Mr(this, a, !0) === !0 ? (this.default = ca(a) ? function() {
      return [].concat(a);
    } : Or(a) ? function() {
      return Object.assign({}, a);
    } : a, this) : (Vt(this._vueTypes_name + ' - invalid default value: "' + a + '"'), this) : this;
  } } }), r = n.validator;
  return sa(r) && (n.validator = Nc(r, n)), n;
}
function En(t, e) {
  var n = Zt(t, e);
  return Object.defineProperty(n, "validate", { value: function(r) {
    return sa(this.validator) && Vt(this._vueTypes_name + ` - calling .validate() will overwrite the current custom validator function. Validator info:
` + JSON.stringify(this)), this.validator = Nc(r, this), this;
  } });
}
function sf(t, e, n) {
  var r, a, o = (r = e, a = {}, Object.getOwnPropertyNames(r).forEach(function(c) {
    a[c] = Object.getOwnPropertyDescriptor(r, c);
  }), Object.defineProperties({}, a));
  if (o._vueTypes_name = t, !Or(n))
    return o;
  var i, l, u = n.validator, s = bg(n, ["validator"]);
  if (sa(u)) {
    var d = o.validator;
    d && (d = (l = (i = d).__original) !== null && l !== void 0 ? l : i), o.validator = Nc(d ? function(c) {
      return d.call(this, c) && u.call(this, c);
    } : u, o);
  }
  return Object.assign(o, s);
}
function Vi(t) {
  return t.replace(/^(?!\s*$)/gm, "  ");
}
var zC = function() {
  return En("any", {});
}, WC = function() {
  return En("function", { type: Function });
}, UC = function() {
  return En("boolean", { type: Boolean });
}, YC = function() {
  return En("string", { type: String });
}, qC = function() {
  return En("number", { type: Number });
}, GC = function() {
  return En("array", { type: Array });
}, XC = function() {
  return En("object", { type: Object });
}, QC = function() {
  return Zt("integer", { type: Number, validator: function(t) {
    return HC(t);
  } });
}, JC = function() {
  return Zt("symbol", { validator: function(t) {
    return typeof t == "symbol";
  } });
};
function ZC(t, e) {
  if (e === void 0 && (e = "custom validation failed"), typeof t != "function")
    throw new TypeError("[VueTypes error]: You must provide a function as argument");
  return Zt(t.name || "<<anonymous function>>", { validator: function(n) {
    var r = t(n);
    return r || Vt(this._vueTypes_name + " - " + e), r;
  } });
}
function ew(t) {
  if (!ca(t))
    throw new TypeError("[VueTypes error]: You must provide an array as argument.");
  var e = 'oneOf - value should be one of "' + t.join('", "') + '".', n = t.reduce(function(r, a) {
    if (a != null) {
      var o = a.constructor;
      r.indexOf(o) === -1 && r.push(o);
    }
    return r;
  }, []);
  return Zt("oneOf", { type: n.length > 0 ? n : void 0, validator: function(r) {
    var a = t.indexOf(r) !== -1;
    return a || Vt(e), a;
  } });
}
function tw(t) {
  if (!ca(t))
    throw new TypeError("[VueTypes error]: You must provide an array as argument");
  for (var e = !1, n = [], r = 0; r < t.length; r += 1) {
    var a = t[r];
    if (Pg(a)) {
      if (pi(a) && a._vueTypes_name === "oneOf") {
        n = n.concat(a.type);
        continue;
      }
      if (sa(a.validator) && (e = !0), a.type !== !0 && a.type) {
        n = n.concat(a.type);
        continue;
      }
    }
    n.push(a);
  }
  return n = n.filter(function(o, i) {
    return n.indexOf(o) === i;
  }), Zt("oneOfType", e ? { type: n, validator: function(o) {
    var i = [], l = t.some(function(u) {
      var s = Mr(pi(u) && u._vueTypes_name === "oneOf" ? u.type || null : u, o, !0);
      return typeof s == "string" && i.push(s), s === !0;
    });
    return l || Vt("oneOfType - provided value does not match any of the " + i.length + ` passed-in validators:
` + Vi(i.join(`
`))), l;
  } } : { type: n });
}
function nw(t) {
  return Zt("arrayOf", { type: Array, validator: function(e) {
    var n, r = e.every(function(a) {
      return (n = Mr(t, a, !0)) === !0;
    });
    return r || Vt(`arrayOf - value validation error:
` + Vi(n)), r;
  } });
}
function rw(t) {
  return Zt("instanceOf", { type: t });
}
function aw(t) {
  return Zt("objectOf", { type: Object, validator: function(e) {
    var n, r = Object.keys(e).every(function(a) {
      return (n = Mr(t, e[a], !0)) === !0;
    });
    return r || Vt(`objectOf - value validation error:
` + Vi(n)), r;
  } });
}
function ow(t) {
  var e = Object.keys(t), n = e.filter(function(a) {
    var o;
    return !!(!((o = t[a]) === null || o === void 0) && o.required);
  }), r = Zt("shape", { type: Object, validator: function(a) {
    var o = this;
    if (!Or(a))
      return !1;
    var i = Object.keys(a);
    if (n.length > 0 && n.some(function(u) {
      return i.indexOf(u) === -1;
    })) {
      var l = n.filter(function(u) {
        return i.indexOf(u) === -1;
      });
      return Vt(l.length === 1 ? 'shape - required property "' + l[0] + '" is not defined.' : 'shape - required properties "' + l.join('", "') + '" are not defined.'), !1;
    }
    return i.every(function(u) {
      if (e.indexOf(u) === -1)
        return o._vueTypes_isLoose === !0 || (Vt('shape - shape definition does not include a "' + u + '" property. Allowed keys: "' + e.join('", "') + '".'), !1);
      var s = Mr(t[u], a[u], !0);
      return typeof s == "string" && Vt('shape - "' + u + `" property validation error:
 ` + Vi(s)), s === !0;
    });
  } });
  return Object.defineProperty(r, "_vueTypes_isLoose", { writable: !0, value: !1 }), Object.defineProperty(r, "loose", { get: function() {
    return this._vueTypes_isLoose = !0, this;
  } }), r;
}
var Pn = function() {
  function t() {
  }
  return t.extend = function(e) {
    var n = this;
    if (ca(e))
      return e.forEach(function(c) {
        return n.extend(c);
      }), this;
    var r = e.name, a = e.validate, o = a !== void 0 && a, i = e.getter, l = i !== void 0 && i, u = bg(e, ["name", "validate", "getter"]);
    if (Ya(this, r))
      throw new TypeError('[VueTypes error]: Type "' + r + '" already defined');
    var s, d = u.type;
    return pi(d) ? (delete u.type, Object.defineProperty(this, r, l ? { get: function() {
      return sf(r, d, u);
    } } : { value: function() {
      var c, v = sf(r, d, u);
      return v.validator && (v.validator = (c = v.validator).bind.apply(c, [v].concat([].slice.call(arguments)))), v;
    } })) : (s = l ? { get: function() {
      var c = Object.assign({}, u);
      return o ? En(r, c) : Zt(r, c);
    }, enumerable: !0 } : { value: function() {
      var c, v, f = Object.assign({}, u);
      return c = o ? En(r, f) : Zt(r, f), f.validator && (c.validator = (v = f.validator).bind.apply(v, [c].concat([].slice.call(arguments)))), c;
    }, enumerable: !0 }, Object.defineProperty(this, r, s));
  }, mg(t, null, [{ key: "any", get: function() {
    return zC();
  } }, { key: "func", get: function() {
    return WC().def(this.defaults.func);
  } }, { key: "bool", get: function() {
    return UC().def(this.defaults.bool);
  } }, { key: "string", get: function() {
    return YC().def(this.defaults.string);
  } }, { key: "number", get: function() {
    return qC().def(this.defaults.number);
  } }, { key: "array", get: function() {
    return GC().def(this.defaults.array);
  } }, { key: "object", get: function() {
    return XC().def(this.defaults.object);
  } }, { key: "integer", get: function() {
    return QC().def(this.defaults.integer);
  } }, { key: "symbol", get: function() {
    return JC();
  } }]), t;
}();
function Og(t) {
  var e;
  return t === void 0 && (t = { func: function() {
  }, bool: !0, string: "", number: 0, array: function() {
    return [];
  }, object: function() {
    return {};
  }, integer: 0 }), (e = function(n) {
    function r() {
      return n.apply(this, arguments) || this;
    }
    return yg(r, n), mg(r, null, [{ key: "sensibleDefaults", get: function() {
      return Zo({}, this.defaults);
    }, set: function(a) {
      this.defaults = a !== !1 ? Zo({}, a !== !0 ? a : t) : {};
    } }]), r;
  }(Pn)).defaults = Zo({}, t), e;
}
Pn.defaults = {}, Pn.custom = ZC, Pn.oneOf = ew, Pn.instanceOf = rw, Pn.oneOfType = tw, Pn.arrayOf = nw, Pn.objectOf = aw, Pn.shape = ow, Pn.utils = { validate: function(t, e) {
  return Mr(e, t, !0) === !0;
}, toType: function(t, e, n) {
  return n === void 0 && (n = !1), n ? En(t, e) : Zt(t, e);
} };
(function(t) {
  function e() {
    return t.apply(this, arguments) || this;
  }
  return yg(e, t), e;
})(Og());
var Tg = Og({
  func: void 0,
  bool: void 0,
  string: void 0,
  number: void 0,
  array: void 0,
  object: void 0,
  integer: void 0
});
Tg.extend([{
  name: "looseBool",
  getter: !0,
  type: Boolean,
  default: void 0
}, {
  name: "style",
  getter: !0,
  type: [String, Object],
  default: void 0
}, {
  name: "VueNode",
  getter: !0,
  type: null
}]);
const Q = Tg;
var iw = globalThis && globalThis.__rest || function(t, e) {
  var n = {};
  for (var r in t)
    Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(t); a < r.length; a++)
      e.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[a]) && (n[r[a]] = t[r[a]]);
  return n;
}, Ig = m(jC, null, null), kg = m(VC, null, null), pa = function(e, n) {
  var r = n.slots, a = r === void 0 ? {} : r, o = n.attrs, i, l = Qe("empty", e), u = l.direction, s = l.prefixCls, d = s.value, c = k(k({}, e), o), v = c.image, f = v === void 0 ? Ig : v, g = c.description, p = g === void 0 ? ((i = a.description) === null || i === void 0 ? void 0 : i.call(a)) || void 0 : g, y = c.imageStyle, h = c.class, w = h === void 0 ? "" : h, C = iw(c, ["image", "description", "imageStyle", "class"]);
  return m(ji, {
    componentName: "Empty",
    children: function(S) {
      var b, P = typeof p < "u" ? p : S.description, T = typeof P == "string" ? P : "empty", O = null;
      return typeof f == "string" ? O = m("img", {
        alt: T,
        src: f
      }, null) : O = f, m("div", Y({
        class: ge(d, w, (b = {}, j(b, "".concat(d, "-normal"), f === kg), j(b, "".concat(d, "-rtl"), u.value === "rtl"), b))
      }, C), [m("div", {
        class: "".concat(d, "-image"),
        style: y
      }, [O]), P && m("p", {
        class: "".concat(d, "-description")
      }, [P]), a.default && m("div", {
        class: "".concat(d, "-footer")
      }, [yn(a.default())])]);
    }
  }, null);
};
pa.displayName = "AEmpty";
pa.PRESENTED_IMAGE_DEFAULT = Ig;
pa.PRESENTED_IMAGE_SIMPLE = kg;
pa.inheritAttrs = !1;
pa.props = {
  prefixCls: String,
  image: Q.any,
  description: Q.any,
  imageStyle: {
    type: Object,
    default: void 0
  }
};
const Oa = Nr(pa);
var lw = function(e) {
  var n = Qe("empty", e), r = n.prefixCls, a = function(i) {
    switch (i) {
      case "Table":
      case "List":
        return m(Oa, {
          image: Oa.PRESENTED_IMAGE_SIMPLE
        }, null);
      case "Select":
      case "TreeSelect":
      case "Cascader":
      case "Transfer":
      case "Mentions":
        return m(Oa, {
          image: Oa.PRESENTED_IMAGE_SIMPLE,
          class: "".concat(r.value, "-small")
        }, null);
      default:
        return m(Oa, null, null);
    }
  };
  return a(e.componentName);
};
function _g(t) {
  return m(lw, {
    componentName: t
  }, null);
}
var df = {};
function Ze(t, e) {
  process.env.NODE_ENV !== "production" && !t && console !== void 0 && console.error("Warning: ".concat(e));
}
function Eg(t, e) {
  process.env.NODE_ENV !== "production" && !t && console !== void 0 && console.warn("Note: ".concat(e));
}
function Ng(t, e, n) {
  !e && !df[n] && (t(!1, n), df[n] = !0);
}
function pn(t, e) {
  Ng(Ze, t, e);
}
function Su(t, e) {
  Ng(Eg, t, e);
}
const tr = function(t, e) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "";
  pn(t, "[antdv: ".concat(e, "] ").concat(n));
};
var xu = "internalMark", ei = pe({
  name: "ALocaleProvider",
  props: {
    locale: {
      type: Object
    },
    ANT_MARK__: String
  },
  setup: function(e, n) {
    var r = n.slots;
    tr(e.ANT_MARK__ === xu, "LocaleProvider", "`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead");
    var a = Mt({
      antLocale: k(k({}, e.locale), {
        exist: !0
      }),
      ANT_MARK__: xu
    });
    return ct("localeData", a), Ce(function() {
      return e.locale;
    }, function() {
      a.antLocale = k(k({}, e.locale), {
        exist: !0
      });
    }, {
      immediate: !0
    }), function() {
      var o;
      return (o = r.default) === null || o === void 0 ? void 0 : o.call(r);
    };
  }
});
ei.install = function(t) {
  return t.component(ei.name, ei), t;
};
const uw = Nr(ei);
Ht("bottomLeft", "bottomRight", "topLeft", "topRight");
var cw = function(e) {
  return e !== void 0 && (e === "topLeft" || e === "topRight") ? "slide-down" : "slide-up";
}, Mc = function(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = k(e ? {
    name: e,
    appear: !0,
    enterFromClass: "".concat(e, "-enter ").concat(e, "-enter-prepare"),
    enterActiveClass: "".concat(e, "-enter ").concat(e, "-enter-prepare"),
    enterToClass: "".concat(e, "-enter ").concat(e, "-enter-active"),
    leaveFromClass: " ".concat(e, "-leave"),
    leaveActiveClass: "".concat(e, "-leave ").concat(e, "-leave-active"),
    leaveToClass: "".concat(e, "-leave ").concat(e, "-leave-active")
  } : {
    css: !1
  }, n);
  return r;
}, Ac = function(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = k(e ? {
    name: e,
    appear: !0,
    appearActiveClass: "".concat(e),
    appearToClass: "".concat(e, "-appear ").concat(e, "-appear-active"),
    enterFromClass: "".concat(e, "-appear ").concat(e, "-enter ").concat(e, "-appear-prepare ").concat(e, "-enter-prepare"),
    enterActiveClass: "".concat(e),
    enterToClass: "".concat(e, "-enter ").concat(e, "-appear ").concat(e, "-appear-active ").concat(e, "-enter-active"),
    leaveActiveClass: "".concat(e, " ").concat(e, "-leave"),
    leaveToClass: "".concat(e, "-leave-active")
  } : {
    css: !1
  }, n);
  return r;
}, Pu = function(e, n, r) {
  return r !== void 0 ? r : "".concat(e, "-").concat(n);
};
const sw = pe({
  name: "Notice",
  inheritAttrs: !1,
  props: ["prefixCls", "duration", "updateMark", "noticeKey", "closeIcon", "closable", "props", "onClick", "onClose", "holder", "visible"],
  setup: function(e, n) {
    var r = n.attrs, a = n.slots, o, i = F(function() {
      return e.duration === void 0 ? 1.5 : e.duration;
    }), l = function() {
      i.value && (o = setTimeout(function() {
        s();
      }, i.value * 1e3));
    }, u = function() {
      o && (clearTimeout(o), o = null);
    }, s = function(v) {
      v && v.stopPropagation(), u();
      var f = e.onClose, g = e.noticeKey;
      f && f(g);
    }, d = function() {
      u(), l();
    };
    return dt(function() {
      l();
    }), va(function() {
      u();
    }), Ce([i, function() {
      return e.updateMark;
    }, function() {
      return e.visible;
    }], function(c, v) {
      var f = De(c, 3), g = f[0], p = f[1], y = f[2], h = De(v, 3), w = h[0], C = h[1], x = h[2];
      (g !== w || p !== C || y !== x && x) && d();
    }, {
      flush: "post"
    }), function() {
      var c, v, f = e.prefixCls, g = e.closable, p = e.closeIcon, y = p === void 0 ? (c = a.closeIcon) === null || c === void 0 ? void 0 : c.call(a) : p, h = e.onClick, w = e.holder, C = r.class, x = r.style, S = "".concat(f, "-notice"), b = Object.keys(r).reduce(function(T, O) {
        return (O.substr(0, 5) === "data-" || O.substr(0, 5) === "aria-" || O === "role") && (T[O] = r[O]), T;
      }, {}), P = m("div", Y({
        class: ge(S, C, j({}, "".concat(S, "-closable"), g)),
        style: x,
        onMouseenter: u,
        onMouseleave: l,
        onClick: h
      }, b), [m("div", {
        class: "".concat(S, "-content")
      }, [(v = a.default) === null || v === void 0 ? void 0 : v.call(a)]), g ? m("a", {
        tabindex: 0,
        onClick: s,
        class: "".concat(S, "-close")
      }, [y || m("span", {
        class: "".concat(S, "-close-x")
      }, null)]) : null]);
      return w ? m(Pc, {
        to: w
      }, {
        default: function() {
          return P;
        }
      }) : P;
    };
  }
});
var dw = globalThis && globalThis.__rest || function(t, e) {
  var n = {};
  for (var r in t)
    Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(t); a < r.length; a++)
      e.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[a]) && (n[r[a]] = t[r[a]]);
  return n;
}, ff = 0, fw = Date.now();
function vf() {
  var t = ff;
  return ff += 1, "rcNotification_".concat(fw, "_").concat(t);
}
var Ou = pe({
  name: "Notification",
  inheritAttrs: !1,
  props: ["prefixCls", "transitionName", "animation", "maxCount", "closeIcon"],
  setup: function(e, n) {
    var r = n.attrs, a = n.expose, o = n.slots, i = /* @__PURE__ */ new Map(), l = G([]), u = F(function() {
      var c = e.prefixCls, v = e.animation, f = v === void 0 ? "fade" : v, g = e.transitionName;
      return !g && f && (g = "".concat(c, "-").concat(f)), Ac(g);
    }), s = function(v, f) {
      var g = v.key || vf(), p = k(k({}, v), {
        key: g
      }), y = e.maxCount, h = l.value.map(function(C) {
        return C.notice.key;
      }).indexOf(g), w = l.value.concat();
      h !== -1 ? w.splice(h, 1, {
        notice: p,
        holderCallback: f
      }) : (y && l.value.length >= y && (p.key = w[0].notice.key, p.updateMark = vf(), p.userPassKey = g, w.shift()), w.push({
        notice: p,
        holderCallback: f
      })), l.value = w;
    }, d = function(v) {
      l.value = l.value.filter(function(f) {
        var g = f.notice, p = g.key, y = g.userPassKey, h = y || p;
        return h !== v;
      });
    };
    return a({
      add: s,
      remove: d,
      notices: l
    }), function() {
      var c, v, f = e.prefixCls, g = e.closeIcon, p = g === void 0 ? (v = o.closeIcon) === null || v === void 0 ? void 0 : v.call(o, {
        prefixCls: f
      }) : g, y = l.value.map(function(w, C) {
        var x = w.notice, S = w.holderCallback, b = C === l.value.length - 1 ? x.updateMark : void 0, P = x.key, T = x.userPassKey, O = x.content, D = k(k(k({
          prefixCls: f,
          closeIcon: typeof p == "function" ? p({
            prefixCls: f
          }) : p
        }, x), x.props), {
          key: P,
          noticeKey: T || P,
          updateMark: b,
          onClose: function(K) {
            var R;
            d(K), (R = x.onClose) === null || R === void 0 || R.call(x);
          },
          onClick: x.onClick
        });
        return S ? m("div", {
          key: P,
          class: "".concat(f, "-hook-holder"),
          ref: function(K) {
            typeof P > "u" || (K ? (i.set(P, K), S(K, D)) : i.delete(P));
          }
        }, null) : m(sw, D, {
          default: function() {
            return [typeof O == "function" ? O({
              prefixCls: f
            }) : O];
          }
        });
      }), h = (c = {}, j(c, f, 1), j(c, r.class, !!r.class), c);
      return m("div", {
        class: h,
        style: r.style || {
          top: "65px",
          left: "50%"
        }
      }, [m(Oc, Y({
        tag: "div"
      }, u.value), {
        default: function() {
          return [y];
        }
      })]);
    };
  }
});
Ou.newInstance = function(e, n) {
  var r = e || {}, a = r.name, o = a === void 0 ? "notification" : a, i = r.getContainer, l = r.appContext, u = r.prefixCls, s = r.rootPrefixCls, d = r.transitionName, c = r.hasTransitionName, v = dw(r, ["name", "getContainer", "appContext", "prefixCls", "rootPrefixCls", "transitionName", "hasTransitionName"]), f = document.createElement("div");
  if (i) {
    var g = i();
    g.appendChild(f);
  } else
    document.body.appendChild(f);
  var p = pe({
    name: "NotificationWrapper",
    setup: function(w, C) {
      var x = C.attrs, S = G();
      return dt(function() {
        n({
          notice: function(P) {
            var T;
            (T = S.value) === null || T === void 0 || T.add(P);
          },
          removeNotice: function(P) {
            var T;
            (T = S.value) === null || T === void 0 || T.remove(P);
          },
          destroy: function() {
            Xd(null, f), f.parentNode && f.parentNode.removeChild(f);
          },
          component: S
        });
      }), function() {
        var b = ln, P = b.getPrefixCls(o, u), T = b.getRootPrefixCls(s, P), O = c ? d : "".concat(T, "-").concat(d);
        return m($a, Y(Y({}, b), {}, {
          notUpdateGlobalConfig: !0,
          prefixCls: T
        }), {
          default: function() {
            return [m(Ou, Y(Y({
              ref: S
            }, x), {}, {
              prefixCls: P,
              transitionName: O
            }), null)];
          }
        });
      };
    }
  }), y = m(p, v);
  y.appContext = l || y.appContext, Xd(y, f);
};
const Mg = Ou;
var vw = { icon: { tag: "svg", attrs: { viewBox: "0 0 1024 1024", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z" } }] }, name: "loading", theme: "outlined" };
const pw = vw;
function Lt(t, e) {
  hw(t) && (t = "100%");
  var n = gw(t);
  return t = e === 360 ? t : Math.min(e, Math.max(0, parseFloat(t))), n && (t = parseInt(String(t * e), 10) / 100), Math.abs(t - e) < 1e-6 ? 1 : (e === 360 ? t = (t < 0 ? t % e + e : t % e) / parseFloat(String(e)) : t = t % e / parseFloat(String(e)), t);
}
function To(t) {
  return Math.min(1, Math.max(0, t));
}
function hw(t) {
  return typeof t == "string" && t.indexOf(".") !== -1 && parseFloat(t) === 1;
}
function gw(t) {
  return typeof t == "string" && t.indexOf("%") !== -1;
}
function Ag(t) {
  return t = parseFloat(t), (isNaN(t) || t < 0 || t > 1) && (t = 1), t;
}
function Io(t) {
  return t <= 1 ? "".concat(Number(t) * 100, "%") : t;
}
function Sr(t) {
  return t.length === 1 ? "0" + t : String(t);
}
function mw(t, e, n) {
  return {
    r: Lt(t, 255) * 255,
    g: Lt(e, 255) * 255,
    b: Lt(n, 255) * 255
  };
}
function pf(t, e, n) {
  t = Lt(t, 255), e = Lt(e, 255), n = Lt(n, 255);
  var r = Math.max(t, e, n), a = Math.min(t, e, n), o = 0, i = 0, l = (r + a) / 2;
  if (r === a)
    i = 0, o = 0;
  else {
    var u = r - a;
    switch (i = l > 0.5 ? u / (2 - r - a) : u / (r + a), r) {
      case t:
        o = (e - n) / u + (e < n ? 6 : 0);
        break;
      case e:
        o = (n - t) / u + 2;
        break;
      case n:
        o = (t - e) / u + 4;
        break;
    }
    o /= 6;
  }
  return { h: o, s: i, l };
}
function Pl(t, e, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t + (e - t) * (6 * n) : n < 1 / 2 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t;
}
function yw(t, e, n) {
  var r, a, o;
  if (t = Lt(t, 360), e = Lt(e, 100), n = Lt(n, 100), e === 0)
    a = n, o = n, r = n;
  else {
    var i = n < 0.5 ? n * (1 + e) : n + e - n * e, l = 2 * n - i;
    r = Pl(l, i, t + 1 / 3), a = Pl(l, i, t), o = Pl(l, i, t - 1 / 3);
  }
  return { r: r * 255, g: a * 255, b: o * 255 };
}
function Tu(t, e, n) {
  t = Lt(t, 255), e = Lt(e, 255), n = Lt(n, 255);
  var r = Math.max(t, e, n), a = Math.min(t, e, n), o = 0, i = r, l = r - a, u = r === 0 ? 0 : l / r;
  if (r === a)
    o = 0;
  else {
    switch (r) {
      case t:
        o = (e - n) / l + (e < n ? 6 : 0);
        break;
      case e:
        o = (n - t) / l + 2;
        break;
      case n:
        o = (t - e) / l + 4;
        break;
    }
    o /= 6;
  }
  return { h: o, s: u, v: i };
}
function bw(t, e, n) {
  t = Lt(t, 360) * 6, e = Lt(e, 100), n = Lt(n, 100);
  var r = Math.floor(t), a = t - r, o = n * (1 - e), i = n * (1 - a * e), l = n * (1 - (1 - a) * e), u = r % 6, s = [n, i, o, o, l, n][u], d = [l, n, n, i, o, o][u], c = [o, o, l, n, n, i][u];
  return { r: s * 255, g: d * 255, b: c * 255 };
}
function Iu(t, e, n, r) {
  var a = [
    Sr(Math.round(t).toString(16)),
    Sr(Math.round(e).toString(16)),
    Sr(Math.round(n).toString(16))
  ];
  return r && a[0].startsWith(a[0].charAt(1)) && a[1].startsWith(a[1].charAt(1)) && a[2].startsWith(a[2].charAt(1)) ? a[0].charAt(0) + a[1].charAt(0) + a[2].charAt(0) : a.join("");
}
function Cw(t, e, n, r, a) {
  var o = [
    Sr(Math.round(t).toString(16)),
    Sr(Math.round(e).toString(16)),
    Sr(Math.round(n).toString(16)),
    Sr(ww(r))
  ];
  return a && o[0].startsWith(o[0].charAt(1)) && o[1].startsWith(o[1].charAt(1)) && o[2].startsWith(o[2].charAt(1)) && o[3].startsWith(o[3].charAt(1)) ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0) + o[3].charAt(0) : o.join("");
}
function ww(t) {
  return Math.round(parseFloat(t) * 255).toString(16);
}
function hf(t) {
  return Gt(t) / 255;
}
function Gt(t) {
  return parseInt(t, 16);
}
function Sw(t) {
  return {
    r: t >> 16,
    g: (t & 65280) >> 8,
    b: t & 255
  };
}
var ku = {
  aliceblue: "#f0f8ff",
  antiquewhite: "#faebd7",
  aqua: "#00ffff",
  aquamarine: "#7fffd4",
  azure: "#f0ffff",
  beige: "#f5f5dc",
  bisque: "#ffe4c4",
  black: "#000000",
  blanchedalmond: "#ffebcd",
  blue: "#0000ff",
  blueviolet: "#8a2be2",
  brown: "#a52a2a",
  burlywood: "#deb887",
  cadetblue: "#5f9ea0",
  chartreuse: "#7fff00",
  chocolate: "#d2691e",
  coral: "#ff7f50",
  cornflowerblue: "#6495ed",
  cornsilk: "#fff8dc",
  crimson: "#dc143c",
  cyan: "#00ffff",
  darkblue: "#00008b",
  darkcyan: "#008b8b",
  darkgoldenrod: "#b8860b",
  darkgray: "#a9a9a9",
  darkgreen: "#006400",
  darkgrey: "#a9a9a9",
  darkkhaki: "#bdb76b",
  darkmagenta: "#8b008b",
  darkolivegreen: "#556b2f",
  darkorange: "#ff8c00",
  darkorchid: "#9932cc",
  darkred: "#8b0000",
  darksalmon: "#e9967a",
  darkseagreen: "#8fbc8f",
  darkslateblue: "#483d8b",
  darkslategray: "#2f4f4f",
  darkslategrey: "#2f4f4f",
  darkturquoise: "#00ced1",
  darkviolet: "#9400d3",
  deeppink: "#ff1493",
  deepskyblue: "#00bfff",
  dimgray: "#696969",
  dimgrey: "#696969",
  dodgerblue: "#1e90ff",
  firebrick: "#b22222",
  floralwhite: "#fffaf0",
  forestgreen: "#228b22",
  fuchsia: "#ff00ff",
  gainsboro: "#dcdcdc",
  ghostwhite: "#f8f8ff",
  goldenrod: "#daa520",
  gold: "#ffd700",
  gray: "#808080",
  green: "#008000",
  greenyellow: "#adff2f",
  grey: "#808080",
  honeydew: "#f0fff0",
  hotpink: "#ff69b4",
  indianred: "#cd5c5c",
  indigo: "#4b0082",
  ivory: "#fffff0",
  khaki: "#f0e68c",
  lavenderblush: "#fff0f5",
  lavender: "#e6e6fa",
  lawngreen: "#7cfc00",
  lemonchiffon: "#fffacd",
  lightblue: "#add8e6",
  lightcoral: "#f08080",
  lightcyan: "#e0ffff",
  lightgoldenrodyellow: "#fafad2",
  lightgray: "#d3d3d3",
  lightgreen: "#90ee90",
  lightgrey: "#d3d3d3",
  lightpink: "#ffb6c1",
  lightsalmon: "#ffa07a",
  lightseagreen: "#20b2aa",
  lightskyblue: "#87cefa",
  lightslategray: "#778899",
  lightslategrey: "#778899",
  lightsteelblue: "#b0c4de",
  lightyellow: "#ffffe0",
  lime: "#00ff00",
  limegreen: "#32cd32",
  linen: "#faf0e6",
  magenta: "#ff00ff",
  maroon: "#800000",
  mediumaquamarine: "#66cdaa",
  mediumblue: "#0000cd",
  mediumorchid: "#ba55d3",
  mediumpurple: "#9370db",
  mediumseagreen: "#3cb371",
  mediumslateblue: "#7b68ee",
  mediumspringgreen: "#00fa9a",
  mediumturquoise: "#48d1cc",
  mediumvioletred: "#c71585",
  midnightblue: "#191970",
  mintcream: "#f5fffa",
  mistyrose: "#ffe4e1",
  moccasin: "#ffe4b5",
  navajowhite: "#ffdead",
  navy: "#000080",
  oldlace: "#fdf5e6",
  olive: "#808000",
  olivedrab: "#6b8e23",
  orange: "#ffa500",
  orangered: "#ff4500",
  orchid: "#da70d6",
  palegoldenrod: "#eee8aa",
  palegreen: "#98fb98",
  paleturquoise: "#afeeee",
  palevioletred: "#db7093",
  papayawhip: "#ffefd5",
  peachpuff: "#ffdab9",
  peru: "#cd853f",
  pink: "#ffc0cb",
  plum: "#dda0dd",
  powderblue: "#b0e0e6",
  purple: "#800080",
  rebeccapurple: "#663399",
  red: "#ff0000",
  rosybrown: "#bc8f8f",
  royalblue: "#4169e1",
  saddlebrown: "#8b4513",
  salmon: "#fa8072",
  sandybrown: "#f4a460",
  seagreen: "#2e8b57",
  seashell: "#fff5ee",
  sienna: "#a0522d",
  silver: "#c0c0c0",
  skyblue: "#87ceeb",
  slateblue: "#6a5acd",
  slategray: "#708090",
  slategrey: "#708090",
  snow: "#fffafa",
  springgreen: "#00ff7f",
  steelblue: "#4682b4",
  tan: "#d2b48c",
  teal: "#008080",
  thistle: "#d8bfd8",
  tomato: "#ff6347",
  turquoise: "#40e0d0",
  violet: "#ee82ee",
  wheat: "#f5deb3",
  white: "#ffffff",
  whitesmoke: "#f5f5f5",
  yellow: "#ffff00",
  yellowgreen: "#9acd32"
};
function qr(t) {
  var e = { r: 0, g: 0, b: 0 }, n = 1, r = null, a = null, o = null, i = !1, l = !1;
  return typeof t == "string" && (t = Ow(t)), typeof t == "object" && (Fn(t.r) && Fn(t.g) && Fn(t.b) ? (e = mw(t.r, t.g, t.b), i = !0, l = String(t.r).substr(-1) === "%" ? "prgb" : "rgb") : Fn(t.h) && Fn(t.s) && Fn(t.v) ? (r = Io(t.s), a = Io(t.v), e = bw(t.h, r, a), i = !0, l = "hsv") : Fn(t.h) && Fn(t.s) && Fn(t.l) && (r = Io(t.s), o = Io(t.l), e = yw(t.h, r, o), i = !0, l = "hsl"), Object.prototype.hasOwnProperty.call(t, "a") && (n = t.a)), n = Ag(n), {
    ok: i,
    format: t.format || l,
    r: Math.min(255, Math.max(e.r, 0)),
    g: Math.min(255, Math.max(e.g, 0)),
    b: Math.min(255, Math.max(e.b, 0)),
    a: n
  };
}
var xw = "[-\\+]?\\d+%?", Pw = "[-\\+]?\\d*\\.\\d+%?", Jn = "(?:".concat(Pw, ")|(?:").concat(xw, ")"), Ol = "[\\s|\\(]+(".concat(Jn, ")[,|\\s]+(").concat(Jn, ")[,|\\s]+(").concat(Jn, ")\\s*\\)?"), Tl = "[\\s|\\(]+(".concat(Jn, ")[,|\\s]+(").concat(Jn, ")[,|\\s]+(").concat(Jn, ")[,|\\s]+(").concat(Jn, ")\\s*\\)?"), vn = {
  CSS_UNIT: new RegExp(Jn),
  rgb: new RegExp("rgb" + Ol),
  rgba: new RegExp("rgba" + Tl),
  hsl: new RegExp("hsl" + Ol),
  hsla: new RegExp("hsla" + Tl),
  hsv: new RegExp("hsv" + Ol),
  hsva: new RegExp("hsva" + Tl),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function Ow(t) {
  if (t = t.trim().toLowerCase(), t.length === 0)
    return !1;
  var e = !1;
  if (ku[t])
    t = ku[t], e = !0;
  else if (t === "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  var n = vn.rgb.exec(t);
  return n ? { r: n[1], g: n[2], b: n[3] } : (n = vn.rgba.exec(t), n ? { r: n[1], g: n[2], b: n[3], a: n[4] } : (n = vn.hsl.exec(t), n ? { h: n[1], s: n[2], l: n[3] } : (n = vn.hsla.exec(t), n ? { h: n[1], s: n[2], l: n[3], a: n[4] } : (n = vn.hsv.exec(t), n ? { h: n[1], s: n[2], v: n[3] } : (n = vn.hsva.exec(t), n ? { h: n[1], s: n[2], v: n[3], a: n[4] } : (n = vn.hex8.exec(t), n ? {
    r: Gt(n[1]),
    g: Gt(n[2]),
    b: Gt(n[3]),
    a: hf(n[4]),
    format: e ? "name" : "hex8"
  } : (n = vn.hex6.exec(t), n ? {
    r: Gt(n[1]),
    g: Gt(n[2]),
    b: Gt(n[3]),
    format: e ? "name" : "hex"
  } : (n = vn.hex4.exec(t), n ? {
    r: Gt(n[1] + n[1]),
    g: Gt(n[2] + n[2]),
    b: Gt(n[3] + n[3]),
    a: hf(n[4] + n[4]),
    format: e ? "name" : "hex8"
  } : (n = vn.hex3.exec(t), n ? {
    r: Gt(n[1] + n[1]),
    g: Gt(n[2] + n[2]),
    b: Gt(n[3] + n[3]),
    format: e ? "name" : "hex"
  } : !1)))))))));
}
function Fn(t) {
  return Boolean(vn.CSS_UNIT.exec(String(t)));
}
var Il = function() {
  function t(e, n) {
    e === void 0 && (e = ""), n === void 0 && (n = {});
    var r;
    if (e instanceof t)
      return e;
    typeof e == "number" && (e = Sw(e)), this.originalInput = e;
    var a = qr(e);
    this.originalInput = e, this.r = a.r, this.g = a.g, this.b = a.b, this.a = a.a, this.roundA = Math.round(100 * this.a) / 100, this.format = (r = n.format) !== null && r !== void 0 ? r : a.format, this.gradientType = n.gradientType, this.r < 1 && (this.r = Math.round(this.r)), this.g < 1 && (this.g = Math.round(this.g)), this.b < 1 && (this.b = Math.round(this.b)), this.isValid = a.ok;
  }
  return t.prototype.isDark = function() {
    return this.getBrightness() < 128;
  }, t.prototype.isLight = function() {
    return !this.isDark();
  }, t.prototype.getBrightness = function() {
    var e = this.toRgb();
    return (e.r * 299 + e.g * 587 + e.b * 114) / 1e3;
  }, t.prototype.getLuminance = function() {
    var e = this.toRgb(), n, r, a, o = e.r / 255, i = e.g / 255, l = e.b / 255;
    return o <= 0.03928 ? n = o / 12.92 : n = Math.pow((o + 0.055) / 1.055, 2.4), i <= 0.03928 ? r = i / 12.92 : r = Math.pow((i + 0.055) / 1.055, 2.4), l <= 0.03928 ? a = l / 12.92 : a = Math.pow((l + 0.055) / 1.055, 2.4), 0.2126 * n + 0.7152 * r + 0.0722 * a;
  }, t.prototype.getAlpha = function() {
    return this.a;
  }, t.prototype.setAlpha = function(e) {
    return this.a = Ag(e), this.roundA = Math.round(100 * this.a) / 100, this;
  }, t.prototype.toHsv = function() {
    var e = Tu(this.r, this.g, this.b);
    return { h: e.h * 360, s: e.s, v: e.v, a: this.a };
  }, t.prototype.toHsvString = function() {
    var e = Tu(this.r, this.g, this.b), n = Math.round(e.h * 360), r = Math.round(e.s * 100), a = Math.round(e.v * 100);
    return this.a === 1 ? "hsv(".concat(n, ", ").concat(r, "%, ").concat(a, "%)") : "hsva(".concat(n, ", ").concat(r, "%, ").concat(a, "%, ").concat(this.roundA, ")");
  }, t.prototype.toHsl = function() {
    var e = pf(this.r, this.g, this.b);
    return { h: e.h * 360, s: e.s, l: e.l, a: this.a };
  }, t.prototype.toHslString = function() {
    var e = pf(this.r, this.g, this.b), n = Math.round(e.h * 360), r = Math.round(e.s * 100), a = Math.round(e.l * 100);
    return this.a === 1 ? "hsl(".concat(n, ", ").concat(r, "%, ").concat(a, "%)") : "hsla(".concat(n, ", ").concat(r, "%, ").concat(a, "%, ").concat(this.roundA, ")");
  }, t.prototype.toHex = function(e) {
    return e === void 0 && (e = !1), Iu(this.r, this.g, this.b, e);
  }, t.prototype.toHexString = function(e) {
    return e === void 0 && (e = !1), "#" + this.toHex(e);
  }, t.prototype.toHex8 = function(e) {
    return e === void 0 && (e = !1), Cw(this.r, this.g, this.b, this.a, e);
  }, t.prototype.toHex8String = function(e) {
    return e === void 0 && (e = !1), "#" + this.toHex8(e);
  }, t.prototype.toRgb = function() {
    return {
      r: Math.round(this.r),
      g: Math.round(this.g),
      b: Math.round(this.b),
      a: this.a
    };
  }, t.prototype.toRgbString = function() {
    var e = Math.round(this.r), n = Math.round(this.g), r = Math.round(this.b);
    return this.a === 1 ? "rgb(".concat(e, ", ").concat(n, ", ").concat(r, ")") : "rgba(".concat(e, ", ").concat(n, ", ").concat(r, ", ").concat(this.roundA, ")");
  }, t.prototype.toPercentageRgb = function() {
    var e = function(n) {
      return "".concat(Math.round(Lt(n, 255) * 100), "%");
    };
    return {
      r: e(this.r),
      g: e(this.g),
      b: e(this.b),
      a: this.a
    };
  }, t.prototype.toPercentageRgbString = function() {
    var e = function(n) {
      return Math.round(Lt(n, 255) * 100);
    };
    return this.a === 1 ? "rgb(".concat(e(this.r), "%, ").concat(e(this.g), "%, ").concat(e(this.b), "%)") : "rgba(".concat(e(this.r), "%, ").concat(e(this.g), "%, ").concat(e(this.b), "%, ").concat(this.roundA, ")");
  }, t.prototype.toName = function() {
    if (this.a === 0)
      return "transparent";
    if (this.a < 1)
      return !1;
    for (var e = "#" + Iu(this.r, this.g, this.b, !1), n = 0, r = Object.entries(ku); n < r.length; n++) {
      var a = r[n], o = a[0], i = a[1];
      if (e === i)
        return o;
    }
    return !1;
  }, t.prototype.toString = function(e) {
    var n = Boolean(e);
    e = e != null ? e : this.format;
    var r = !1, a = this.a < 1 && this.a >= 0, o = !n && a && (e.startsWith("hex") || e === "name");
    return o ? e === "name" && this.a === 0 ? this.toName() : this.toRgbString() : (e === "rgb" && (r = this.toRgbString()), e === "prgb" && (r = this.toPercentageRgbString()), (e === "hex" || e === "hex6") && (r = this.toHexString()), e === "hex3" && (r = this.toHexString(!0)), e === "hex4" && (r = this.toHex8String(!0)), e === "hex8" && (r = this.toHex8String()), e === "name" && (r = this.toName()), e === "hsl" && (r = this.toHslString()), e === "hsv" && (r = this.toHsvString()), r || this.toHexString());
  }, t.prototype.toNumber = function() {
    return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
  }, t.prototype.clone = function() {
    return new t(this.toString());
  }, t.prototype.lighten = function(e) {
    e === void 0 && (e = 10);
    var n = this.toHsl();
    return n.l += e / 100, n.l = To(n.l), new t(n);
  }, t.prototype.brighten = function(e) {
    e === void 0 && (e = 10);
    var n = this.toRgb();
    return n.r = Math.max(0, Math.min(255, n.r - Math.round(255 * -(e / 100)))), n.g = Math.max(0, Math.min(255, n.g - Math.round(255 * -(e / 100)))), n.b = Math.max(0, Math.min(255, n.b - Math.round(255 * -(e / 100)))), new t(n);
  }, t.prototype.darken = function(e) {
    e === void 0 && (e = 10);
    var n = this.toHsl();
    return n.l -= e / 100, n.l = To(n.l), new t(n);
  }, t.prototype.tint = function(e) {
    return e === void 0 && (e = 10), this.mix("white", e);
  }, t.prototype.shade = function(e) {
    return e === void 0 && (e = 10), this.mix("black", e);
  }, t.prototype.desaturate = function(e) {
    e === void 0 && (e = 10);
    var n = this.toHsl();
    return n.s -= e / 100, n.s = To(n.s), new t(n);
  }, t.prototype.saturate = function(e) {
    e === void 0 && (e = 10);
    var n = this.toHsl();
    return n.s += e / 100, n.s = To(n.s), new t(n);
  }, t.prototype.greyscale = function() {
    return this.desaturate(100);
  }, t.prototype.spin = function(e) {
    var n = this.toHsl(), r = (n.h + e) % 360;
    return n.h = r < 0 ? 360 + r : r, new t(n);
  }, t.prototype.mix = function(e, n) {
    n === void 0 && (n = 50);
    var r = this.toRgb(), a = new t(e).toRgb(), o = n / 100, i = {
      r: (a.r - r.r) * o + r.r,
      g: (a.g - r.g) * o + r.g,
      b: (a.b - r.b) * o + r.b,
      a: (a.a - r.a) * o + r.a
    };
    return new t(i);
  }, t.prototype.analogous = function(e, n) {
    e === void 0 && (e = 6), n === void 0 && (n = 30);
    var r = this.toHsl(), a = 360 / n, o = [this];
    for (r.h = (r.h - (a * e >> 1) + 720) % 360; --e; )
      r.h = (r.h + a) % 360, o.push(new t(r));
    return o;
  }, t.prototype.complement = function() {
    var e = this.toHsl();
    return e.h = (e.h + 180) % 360, new t(e);
  }, t.prototype.monochromatic = function(e) {
    e === void 0 && (e = 6);
    for (var n = this.toHsv(), r = n.h, a = n.s, o = n.v, i = [], l = 1 / e; e--; )
      i.push(new t({ h: r, s: a, v: o })), o = (o + l) % 1;
    return i;
  }, t.prototype.splitcomplement = function() {
    var e = this.toHsl(), n = e.h;
    return [
      this,
      new t({ h: (n + 72) % 360, s: e.s, l: e.l }),
      new t({ h: (n + 216) % 360, s: e.s, l: e.l })
    ];
  }, t.prototype.onBackground = function(e) {
    var n = this.toRgb(), r = new t(e).toRgb();
    return new t({
      r: r.r + (n.r - r.r) * n.a,
      g: r.g + (n.g - r.g) * n.a,
      b: r.b + (n.b - r.b) * n.a
    });
  }, t.prototype.triad = function() {
    return this.polyad(3);
  }, t.prototype.tetrad = function() {
    return this.polyad(4);
  }, t.prototype.polyad = function(e) {
    for (var n = this.toHsl(), r = n.h, a = [this], o = 360 / e, i = 1; i < e; i++)
      a.push(new t({ h: (r + i * o) % 360, s: n.s, l: n.l }));
    return a;
  }, t.prototype.equals = function(e) {
    return this.toRgbString() === new t(e).toRgbString();
  }, t;
}(), ko = 2, gf = 0.16, Tw = 0.05, Iw = 0.05, kw = 0.15, Dg = 5, Fg = 4, _w = [{
  index: 7,
  opacity: 0.15
}, {
  index: 6,
  opacity: 0.25
}, {
  index: 5,
  opacity: 0.3
}, {
  index: 5,
  opacity: 0.45
}, {
  index: 5,
  opacity: 0.65
}, {
  index: 5,
  opacity: 0.85
}, {
  index: 4,
  opacity: 0.9
}, {
  index: 3,
  opacity: 0.95
}, {
  index: 2,
  opacity: 0.97
}, {
  index: 1,
  opacity: 0.98
}];
function mf(t) {
  var e = t.r, n = t.g, r = t.b, a = Tu(e, n, r);
  return {
    h: a.h * 360,
    s: a.s,
    v: a.v
  };
}
function _o(t) {
  var e = t.r, n = t.g, r = t.b;
  return "#".concat(Iu(e, n, r, !1));
}
function Ew(t, e, n) {
  var r = n / 100, a = {
    r: (e.r - t.r) * r + t.r,
    g: (e.g - t.g) * r + t.g,
    b: (e.b - t.b) * r + t.b
  };
  return a;
}
function yf(t, e, n) {
  var r;
  return Math.round(t.h) >= 60 && Math.round(t.h) <= 240 ? r = n ? Math.round(t.h) - ko * e : Math.round(t.h) + ko * e : r = n ? Math.round(t.h) + ko * e : Math.round(t.h) - ko * e, r < 0 ? r += 360 : r >= 360 && (r -= 360), r;
}
function bf(t, e, n) {
  if (t.h === 0 && t.s === 0)
    return t.s;
  var r;
  return n ? r = t.s - gf * e : e === Fg ? r = t.s + gf : r = t.s + Tw * e, r > 1 && (r = 1), n && e === Dg && r > 0.1 && (r = 0.1), r < 0.06 && (r = 0.06), Number(r.toFixed(2));
}
function Cf(t, e, n) {
  var r;
  return n ? r = t.v + Iw * e : r = t.v - kw * e, r > 1 && (r = 1), Number(r.toFixed(2));
}
function qa(t) {
  for (var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = [], r = qr(t), a = Dg; a > 0; a -= 1) {
    var o = mf(r), i = _o(qr({
      h: yf(o, a, !0),
      s: bf(o, a, !0),
      v: Cf(o, a, !0)
    }));
    n.push(i);
  }
  n.push(_o(r));
  for (var l = 1; l <= Fg; l += 1) {
    var u = mf(r), s = _o(qr({
      h: yf(u, l),
      s: bf(u, l),
      v: Cf(u, l)
    }));
    n.push(s);
  }
  return e.theme === "dark" ? _w.map(function(d) {
    var c = d.index, v = d.opacity, f = _o(Ew(qr(e.backgroundColor || "#141414"), qr(n[c]), v * 100));
    return f;
  }) : n;
}
var ea = {
  red: "#F5222D",
  volcano: "#FA541C",
  orange: "#FA8C16",
  gold: "#FAAD14",
  yellow: "#FADB14",
  lime: "#A0D911",
  green: "#52C41A",
  cyan: "#13C2C2",
  blue: "#1890FF",
  geekblue: "#2F54EB",
  purple: "#722ED1",
  magenta: "#EB2F96",
  grey: "#666666"
}, kl = {}, _l = {};
Object.keys(ea).forEach(function(t) {
  kl[t] = qa(ea[t]), kl[t].primary = kl[t][5], _l[t] = qa(ea[t], {
    theme: "dark",
    backgroundColor: "#141414"
  }), _l[t].primary = _l[t][5];
});
var wf = [], Ta = [], Nw = "insert-css: You need to provide a CSS string. Usage: insertCss(cssString[, options]).";
function Mw() {
  var t = document.createElement("style");
  return t.setAttribute("type", "text/css"), t;
}
function Aw(t, e) {
  if (e = e || {}, t === void 0)
    throw new Error(Nw);
  var n = e.prepend === !0 ? "prepend" : "append", r = e.container !== void 0 ? e.container : document.querySelector("head"), a = wf.indexOf(r);
  a === -1 && (a = wf.push(r) - 1, Ta[a] = {});
  var o;
  return Ta[a] !== void 0 && Ta[a][n] !== void 0 ? o = Ta[a][n] : (o = Ta[a][n] = Mw(), n === "prepend" ? r.insertBefore(o, r.childNodes[0]) : r.appendChild(o)), t.charCodeAt(0) === 65279 && (t = t.substr(1, t.length)), o.styleSheet ? o.styleSheet.cssText += t : o.textContent += t, o;
}
function Sf(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? Object(arguments[e]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(a) {
      return Object.getOwnPropertyDescriptor(n, a).enumerable;
    }))), r.forEach(function(a) {
      Dw(t, a, n[a]);
    });
  }
  return t;
}
function Dw(t, e, n) {
  return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function Fw(t, e) {
  process.env.NODE_ENV !== "production" && !t && console !== void 0 && console.error("Warning: ".concat(e));
}
function Rw(t, e) {
  Fw(t, "[@ant-design/icons-vue] ".concat(e));
}
function xf(t) {
  return typeof t == "object" && typeof t.name == "string" && typeof t.theme == "string" && (typeof t.icon == "object" || typeof t.icon == "function");
}
function _u(t, e, n) {
  return n ? Qd(t.tag, Sf({
    key: e
  }, n, t.attrs), (t.children || []).map(function(r, a) {
    return _u(r, "".concat(e, "-").concat(t.tag, "-").concat(a));
  })) : Qd(t.tag, Sf({
    key: e
  }, t.attrs), (t.children || []).map(function(r, a) {
    return _u(r, "".concat(e, "-").concat(t.tag, "-").concat(a));
  }));
}
function Rg(t) {
  return qa(t)[0];
}
function $g(t) {
  return t ? Array.isArray(t) ? t : [t] : [];
}
var $w = `
.anticon {
  display: inline-block;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.anticon > * {
  line-height: 1;
}

.anticon svg {
  display: inline-block;
}

.anticon::before {
  display: none;
}

.anticon .anticon-icon {
  display: block;
}

.anticon[tabindex] {
  cursor: pointer;
}

.anticon-spin::before,
.anticon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`, Pf = !1, Lw = function() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : $w;
  vt(function() {
    Pf || (typeof window < "u" && window.document && window.document.documentElement && Aw(e, {
      prepend: !0
    }), Pf = !0);
  });
}, jw = ["icon", "primaryColor", "secondaryColor"];
function Vw(t, e) {
  if (t == null)
    return {};
  var n = Bw(t, e), r, a;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    for (a = 0; a < o.length; a++)
      r = o[a], !(e.indexOf(r) >= 0) && (!Object.prototype.propertyIsEnumerable.call(t, r) || (n[r] = t[r]));
  }
  return n;
}
function Bw(t, e) {
  if (t == null)
    return {};
  var n = {}, r = Object.keys(t), a, o;
  for (o = 0; o < r.length; o++)
    a = r[o], !(e.indexOf(a) >= 0) && (n[a] = t[a]);
  return n;
}
function ti(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? Object(arguments[e]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(a) {
      return Object.getOwnPropertyDescriptor(n, a).enumerable;
    }))), r.forEach(function(a) {
      Kw(t, a, n[a]);
    });
  }
  return t;
}
function Kw(t, e, n) {
  return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
var Ra = {
  primaryColor: "#333",
  secondaryColor: "#E6E6E6",
  calculated: !1
};
function Hw(t) {
  var e = t.primaryColor, n = t.secondaryColor;
  Ra.primaryColor = e, Ra.secondaryColor = n || Rg(e), Ra.calculated = !!n;
}
function zw() {
  return ti({}, Ra);
}
var ha = function(e, n) {
  var r = ti({}, e, n.attrs), a = r.icon, o = r.primaryColor, i = r.secondaryColor, l = Vw(r, jw), u = Ra;
  if (o && (u = {
    primaryColor: o,
    secondaryColor: i || Rg(o)
  }), Lw(), Rw(xf(a), "icon should be icon definiton, but got ".concat(a)), !xf(a))
    return null;
  var s = a;
  return s && typeof s.icon == "function" && (s = ti({}, s, {
    icon: s.icon(u.primaryColor, u.secondaryColor)
  })), _u(s.icon, "svg-".concat(s.name), ti({}, l, {
    "data-icon": s.name,
    width: "1em",
    height: "1em",
    fill: "currentColor",
    "aria-hidden": "true"
  }));
};
ha.props = {
  icon: Object,
  primaryColor: String,
  secondaryColor: String,
  focusable: String
};
ha.inheritAttrs = !1;
ha.displayName = "IconBase";
ha.getTwoToneColors = zw;
ha.setTwoToneColors = Hw;
const Dc = ha;
function Ww(t, e) {
  return Gw(t) || qw(t, e) || Yw(t, e) || Uw();
}
function Uw() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Yw(t, e) {
  if (!!t) {
    if (typeof t == "string")
      return Of(t, e);
    var n = Object.prototype.toString.call(t).slice(8, -1);
    if (n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set")
      return Array.from(t);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return Of(t, e);
  }
}
function Of(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, r = new Array(e); n < e; n++)
    r[n] = t[n];
  return r;
}
function qw(t, e) {
  var n = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (n != null) {
    var r = [], a = !0, o = !1, i, l;
    try {
      for (n = n.call(t); !(a = (i = n.next()).done) && (r.push(i.value), !(e && r.length === e)); a = !0)
        ;
    } catch (u) {
      o = !0, l = u;
    } finally {
      try {
        !a && n.return != null && n.return();
      } finally {
        if (o)
          throw l;
      }
    }
    return r;
  }
}
function Gw(t) {
  if (Array.isArray(t))
    return t;
}
function Lg(t) {
  var e = $g(t), n = Ww(e, 2), r = n[0], a = n[1];
  return Dc.setTwoToneColors({
    primaryColor: r,
    secondaryColor: a
  });
}
function Xw() {
  var t = Dc.getTwoToneColors();
  return t.calculated ? [t.primaryColor, t.secondaryColor] : t.primaryColor;
}
var Qw = ["class", "icon", "spin", "rotate", "tabindex", "twoToneColor", "onClick"];
function Jw(t, e) {
  return nS(t) || tS(t, e) || eS(t, e) || Zw();
}
function Zw() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function eS(t, e) {
  if (!!t) {
    if (typeof t == "string")
      return Tf(t, e);
    var n = Object.prototype.toString.call(t).slice(8, -1);
    if (n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set")
      return Array.from(t);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return Tf(t, e);
  }
}
function Tf(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, r = new Array(e); n < e; n++)
    r[n] = t[n];
  return r;
}
function tS(t, e) {
  var n = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (n != null) {
    var r = [], a = !0, o = !1, i, l;
    try {
      for (n = n.call(t); !(a = (i = n.next()).done) && (r.push(i.value), !(e && r.length === e)); a = !0)
        ;
    } catch (u) {
      o = !0, l = u;
    } finally {
      try {
        !a && n.return != null && n.return();
      } finally {
        if (o)
          throw l;
      }
    }
    return r;
  }
}
function nS(t) {
  if (Array.isArray(t))
    return t;
}
function If(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? Object(arguments[e]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(a) {
      return Object.getOwnPropertyDescriptor(n, a).enumerable;
    }))), r.forEach(function(a) {
      Eu(t, a, n[a]);
    });
  }
  return t;
}
function Eu(t, e, n) {
  return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function rS(t, e) {
  if (t == null)
    return {};
  var n = aS(t, e), r, a;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    for (a = 0; a < o.length; a++)
      r = o[a], !(e.indexOf(r) >= 0) && (!Object.prototype.propertyIsEnumerable.call(t, r) || (n[r] = t[r]));
  }
  return n;
}
function aS(t, e) {
  if (t == null)
    return {};
  var n = {}, r = Object.keys(t), a, o;
  for (o = 0; o < r.length; o++)
    a = r[o], !(e.indexOf(a) >= 0) && (n[a] = t[a]);
  return n;
}
Lg("#1890ff");
var ga = function(e, n) {
  var r, a = If({}, e, n.attrs), o = a.class, i = a.icon, l = a.spin, u = a.rotate, s = a.tabindex, d = a.twoToneColor, c = a.onClick, v = rS(a, Qw), f = (r = {
    anticon: !0
  }, Eu(r, "anticon-".concat(i.name), Boolean(i.name)), Eu(r, o, o), r), g = l === "" || !!l || i.name === "loading" ? "anticon-spin" : "", p = s;
  p === void 0 && c && (p = -1, v.tabindex = p);
  var y = u ? {
    msTransform: "rotate(".concat(u, "deg)"),
    transform: "rotate(".concat(u, "deg)")
  } : void 0, h = $g(d), w = Jw(h, 2), C = w[0], x = w[1];
  return m("span", If({
    role: "img",
    "aria-label": i.name
  }, v, {
    onClick: c,
    class: f
  }), [m(Dc, {
    class: g,
    icon: i,
    primaryColor: C,
    secondaryColor: x,
    style: y
  }, null)]);
};
ga.props = {
  spin: Boolean,
  rotate: Number,
  icon: Object,
  twoToneColor: String
};
ga.displayName = "AntdIcon";
ga.inheritAttrs = !1;
ga.getTwoToneColor = Xw;
ga.setTwoToneColor = Lg;
const st = ga;
function kf(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? Object(arguments[e]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(a) {
      return Object.getOwnPropertyDescriptor(n, a).enumerable;
    }))), r.forEach(function(a) {
      oS(t, a, n[a]);
    });
  }
  return t;
}
function oS(t, e, n) {
  return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
var Fc = function(e, n) {
  var r = kf({}, e, n.attrs);
  return m(st, kf({}, r, {
    icon: pw
  }), null);
};
Fc.displayName = "LoadingOutlined";
Fc.inheritAttrs = !1;
const Bn = Fc;
var iS = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, name: "exclamation-circle", theme: "filled" };
const lS = iS;
function _f(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? Object(arguments[e]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(a) {
      return Object.getOwnPropertyDescriptor(n, a).enumerable;
    }))), r.forEach(function(a) {
      uS(t, a, n[a]);
    });
  }
  return t;
}
function uS(t, e, n) {
  return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
var Rc = function(e, n) {
  var r = _f({}, e, n.attrs);
  return m(st, _f({}, r, {
    icon: lS
  }), null);
};
Rc.displayName = "ExclamationCircleFilled";
Rc.inheritAttrs = !1;
const jg = Rc;
var cS = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 01-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z" } }] }, name: "close-circle", theme: "filled" };
const sS = cS;
function Ef(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? Object(arguments[e]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(a) {
      return Object.getOwnPropertyDescriptor(n, a).enumerable;
    }))), r.forEach(function(a) {
      dS(t, a, n[a]);
    });
  }
  return t;
}
function dS(t, e, n) {
  return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
var $c = function(e, n) {
  var r = Ef({}, e, n.attrs);
  return m(st, Ef({}, r, {
    icon: sS
  }), null);
};
$c.displayName = "CloseCircleFilled";
$c.inheritAttrs = !1;
const Ar = $c;
var fS = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z" } }] }, name: "check-circle", theme: "filled" };
const vS = fS;
function Nf(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? Object(arguments[e]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(a) {
      return Object.getOwnPropertyDescriptor(n, a).enumerable;
    }))), r.forEach(function(a) {
      pS(t, a, n[a]);
    });
  }
  return t;
}
function pS(t, e, n) {
  return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
var Lc = function(e, n) {
  var r = Nf({}, e, n.attrs);
  return m(st, Nf({}, r, {
    icon: vS
  }), null);
};
Lc.displayName = "CheckCircleFilled";
Lc.inheritAttrs = !1;
const jc = Lc;
var hS = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, name: "info-circle", theme: "filled" };
const gS = hS;
function Mf(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? Object(arguments[e]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(a) {
      return Object.getOwnPropertyDescriptor(n, a).enumerable;
    }))), r.forEach(function(a) {
      mS(t, a, n[a]);
    });
  }
  return t;
}
function mS(t, e, n) {
  return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
var Vc = function(e, n) {
  var r = Mf({}, e, n.attrs);
  return m(st, Mf({}, r, {
    icon: gS
  }), null);
};
Vc.displayName = "InfoCircleFilled";
Vc.inheritAttrs = !1;
const yS = Vc;
var Vg = 3, Bg, Bt, bS = 1, Kg = "", Hg = "move-up", zg = !1, Wg = function() {
  return document.body;
}, Ug, Yg = !1;
function CS() {
  return bS++;
}
function wS(t) {
  t.top !== void 0 && (Bg = t.top, Bt = null), t.duration !== void 0 && (Vg = t.duration), t.prefixCls !== void 0 && (Kg = t.prefixCls), t.getContainer !== void 0 && (Wg = t.getContainer, Bt = null), t.transitionName !== void 0 && (Hg = t.transitionName, Bt = null, zg = !0), t.maxCount !== void 0 && (Ug = t.maxCount, Bt = null), t.rtl !== void 0 && (Yg = t.rtl);
}
function SS(t, e) {
  if (Bt) {
    e(Bt);
    return;
  }
  Mg.newInstance({
    appContext: t.appContext,
    prefixCls: t.prefixCls || Kg,
    rootPrefixCls: t.rootPrefixCls,
    transitionName: Hg,
    hasTransitionName: zg,
    style: {
      top: Bg
    },
    getContainer: Wg || t.getPopupContainer,
    maxCount: Ug,
    name: "message"
  }, function(n) {
    if (Bt) {
      e(Bt);
      return;
    }
    Bt = n, e(n);
  });
}
var xS = {
  info: yS,
  success: jc,
  error: Ar,
  warning: jg,
  loading: Bn
};
function PS(t) {
  var e = t.duration !== void 0 ? t.duration : Vg, n = t.key || CS(), r = new Promise(function(o) {
    var i = function() {
      return typeof t.onClose == "function" && t.onClose(), o(!0);
    };
    SS(t, function(l) {
      l.notice({
        key: n,
        duration: e,
        style: t.style || {},
        class: t.class,
        content: function(s) {
          var d, c = s.prefixCls, v = xS[t.type], f = v ? m(v, null, null) : "", g = ge("".concat(c, "-custom-content"), (d = {}, j(d, "".concat(c, "-").concat(t.type), t.type), j(d, "".concat(c, "-rtl"), Yg === !0), d));
          return m("div", {
            class: g
          }, [typeof t.icon == "function" ? t.icon() : t.icon || f, m("span", null, [typeof t.content == "function" ? t.content() : t.content])]);
        },
        onClose: i,
        onClick: t.onClick
      });
    });
  }), a = function() {
    Bt && Bt.removeNotice(n);
  };
  return a.then = function(o, i) {
    return r.then(o, i);
  }, a.promise = r, a;
}
function OS(t) {
  return Object.prototype.toString.call(t) === "[object Object]" && !!t.content;
}
var hi = {
  open: PS,
  config: wS,
  destroy: function(e) {
    if (Bt)
      if (e) {
        var n = Bt, r = n.removeNotice;
        r(e);
      } else {
        var a = Bt, o = a.destroy;
        o(), Bt = null;
      }
  }
};
function TS(t, e) {
  t[e] = function(n, r, a) {
    return OS(n) ? t.open(k(k({}, n), {
      type: e
    })) : (typeof r == "function" && (a = r, r = void 0), t.open({
      content: n,
      duration: r,
      type: e,
      onClose: a
    }));
  };
}
["success", "info", "warning", "error", "loading"].forEach(function(t) {
  return TS(hi, t);
});
hi.warn = hi.warning;
const IS = hi;
var Dr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, qg = { exports: {} }, Gg = { exports: {} };
(function(t) {
  function e(n) {
    return t.exports = e = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
      return typeof r;
    } : function(r) {
      return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
    }, t.exports.__esModule = !0, t.exports.default = t.exports, e(n);
  }
  t.exports = e, t.exports.__esModule = !0, t.exports.default = t.exports;
})(Gg);
(function(t) {
  var e = Gg.exports.default;
  function n() {
    /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
    t.exports = n = function() {
      return r;
    }, t.exports.__esModule = !0, t.exports.default = t.exports;
    var r = {}, a = Object.prototype, o = a.hasOwnProperty, i = typeof Symbol == "function" ? Symbol : {}, l = i.iterator || "@@iterator", u = i.asyncIterator || "@@asyncIterator", s = i.toStringTag || "@@toStringTag";
    function d(R, E, M) {
      return Object.defineProperty(R, E, {
        value: M,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }), R[E];
    }
    try {
      d({}, "");
    } catch {
      d = function(M, N, _) {
        return M[N] = _;
      };
    }
    function c(R, E, M, N) {
      var _ = E && E.prototype instanceof g ? E : g, I = Object.create(_.prototype), A = new D(N || []);
      return I._invoke = function(B, W, U) {
        var z = "suspendedStart";
        return function(L, $) {
          if (z === "executing")
            throw new Error("Generator is already running");
          if (z === "completed") {
            if (L === "throw")
              throw $;
            return K();
          }
          for (U.method = L, U.arg = $; ; ) {
            var q = U.delegate;
            if (q) {
              var H = P(q, U);
              if (H) {
                if (H === f)
                  continue;
                return H;
              }
            }
            if (U.method === "next")
              U.sent = U._sent = U.arg;
            else if (U.method === "throw") {
              if (z === "suspendedStart")
                throw z = "completed", U.arg;
              U.dispatchException(U.arg);
            } else
              U.method === "return" && U.abrupt("return", U.arg);
            z = "executing";
            var J = v(B, W, U);
            if (J.type === "normal") {
              if (z = U.done ? "completed" : "suspendedYield", J.arg === f)
                continue;
              return {
                value: J.arg,
                done: U.done
              };
            }
            J.type === "throw" && (z = "completed", U.method = "throw", U.arg = J.arg);
          }
        };
      }(R, M, A), I;
    }
    function v(R, E, M) {
      try {
        return {
          type: "normal",
          arg: R.call(E, M)
        };
      } catch (N) {
        return {
          type: "throw",
          arg: N
        };
      }
    }
    r.wrap = c;
    var f = {};
    function g() {
    }
    function p() {
    }
    function y() {
    }
    var h = {};
    d(h, l, function() {
      return this;
    });
    var w = Object.getPrototypeOf, C = w && w(w(V([])));
    C && C !== a && o.call(C, l) && (h = C);
    var x = y.prototype = g.prototype = Object.create(h);
    function S(R) {
      ["next", "throw", "return"].forEach(function(E) {
        d(R, E, function(M) {
          return this._invoke(E, M);
        });
      });
    }
    function b(R, E) {
      function M(_, I, A, B) {
        var W = v(R[_], R, I);
        if (W.type !== "throw") {
          var U = W.arg, z = U.value;
          return z && e(z) == "object" && o.call(z, "__await") ? E.resolve(z.__await).then(function(L) {
            M("next", L, A, B);
          }, function(L) {
            M("throw", L, A, B);
          }) : E.resolve(z).then(function(L) {
            U.value = L, A(U);
          }, function(L) {
            return M("throw", L, A, B);
          });
        }
        B(W.arg);
      }
      var N;
      this._invoke = function(_, I) {
        function A() {
          return new E(function(B, W) {
            M(_, I, B, W);
          });
        }
        return N = N ? N.then(A, A) : A();
      };
    }
    function P(R, E) {
      var M = R.iterator[E.method];
      if (M === void 0) {
        if (E.delegate = null, E.method === "throw") {
          if (R.iterator.return && (E.method = "return", E.arg = void 0, P(R, E), E.method === "throw"))
            return f;
          E.method = "throw", E.arg = new TypeError("The iterator does not provide a 'throw' method");
        }
        return f;
      }
      var N = v(M, R.iterator, E.arg);
      if (N.type === "throw")
        return E.method = "throw", E.arg = N.arg, E.delegate = null, f;
      var _ = N.arg;
      return _ ? _.done ? (E[R.resultName] = _.value, E.next = R.nextLoc, E.method !== "return" && (E.method = "next", E.arg = void 0), E.delegate = null, f) : _ : (E.method = "throw", E.arg = new TypeError("iterator result is not an object"), E.delegate = null, f);
    }
    function T(R) {
      var E = {
        tryLoc: R[0]
      };
      1 in R && (E.catchLoc = R[1]), 2 in R && (E.finallyLoc = R[2], E.afterLoc = R[3]), this.tryEntries.push(E);
    }
    function O(R) {
      var E = R.completion || {};
      E.type = "normal", delete E.arg, R.completion = E;
    }
    function D(R) {
      this.tryEntries = [{
        tryLoc: "root"
      }], R.forEach(T, this), this.reset(!0);
    }
    function V(R) {
      if (R) {
        var E = R[l];
        if (E)
          return E.call(R);
        if (typeof R.next == "function")
          return R;
        if (!isNaN(R.length)) {
          var M = -1, N = function _() {
            for (; ++M < R.length; )
              if (o.call(R, M))
                return _.value = R[M], _.done = !1, _;
            return _.value = void 0, _.done = !0, _;
          };
          return N.next = N;
        }
      }
      return {
        next: K
      };
    }
    function K() {
      return {
        value: void 0,
        done: !0
      };
    }
    return p.prototype = y, d(x, "constructor", y), d(y, "constructor", p), p.displayName = d(y, s, "GeneratorFunction"), r.isGeneratorFunction = function(R) {
      var E = typeof R == "function" && R.constructor;
      return !!E && (E === p || (E.displayName || E.name) === "GeneratorFunction");
    }, r.mark = function(R) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(R, y) : (R.__proto__ = y, d(R, s, "GeneratorFunction")), R.prototype = Object.create(x), R;
    }, r.awrap = function(R) {
      return {
        __await: R
      };
    }, S(b.prototype), d(b.prototype, u, function() {
      return this;
    }), r.AsyncIterator = b, r.async = function(R, E, M, N, _) {
      _ === void 0 && (_ = Promise);
      var I = new b(c(R, E, M, N), _);
      return r.isGeneratorFunction(E) ? I : I.next().then(function(A) {
        return A.done ? A.value : I.next();
      });
    }, S(x), d(x, s, "Generator"), d(x, l, function() {
      return this;
    }), d(x, "toString", function() {
      return "[object Generator]";
    }), r.keys = function(R) {
      var E = [];
      for (var M in R)
        E.push(M);
      return E.reverse(), function N() {
        for (; E.length; ) {
          var _ = E.pop();
          if (_ in R)
            return N.value = _, N.done = !1, N;
        }
        return N.done = !0, N;
      };
    }, r.values = V, D.prototype = {
      constructor: D,
      reset: function(E) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(O), !E)
          for (var M in this)
            M.charAt(0) === "t" && o.call(this, M) && !isNaN(+M.slice(1)) && (this[M] = void 0);
      },
      stop: function() {
        this.done = !0;
        var E = this.tryEntries[0].completion;
        if (E.type === "throw")
          throw E.arg;
        return this.rval;
      },
      dispatchException: function(E) {
        if (this.done)
          throw E;
        var M = this;
        function N(U, z) {
          return A.type = "throw", A.arg = E, M.next = U, z && (M.method = "next", M.arg = void 0), !!z;
        }
        for (var _ = this.tryEntries.length - 1; _ >= 0; --_) {
          var I = this.tryEntries[_], A = I.completion;
          if (I.tryLoc === "root")
            return N("end");
          if (I.tryLoc <= this.prev) {
            var B = o.call(I, "catchLoc"), W = o.call(I, "finallyLoc");
            if (B && W) {
              if (this.prev < I.catchLoc)
                return N(I.catchLoc, !0);
              if (this.prev < I.finallyLoc)
                return N(I.finallyLoc);
            } else if (B) {
              if (this.prev < I.catchLoc)
                return N(I.catchLoc, !0);
            } else {
              if (!W)
                throw new Error("try statement without catch or finally");
              if (this.prev < I.finallyLoc)
                return N(I.finallyLoc);
            }
          }
        }
      },
      abrupt: function(E, M) {
        for (var N = this.tryEntries.length - 1; N >= 0; --N) {
          var _ = this.tryEntries[N];
          if (_.tryLoc <= this.prev && o.call(_, "finallyLoc") && this.prev < _.finallyLoc) {
            var I = _;
            break;
          }
        }
        I && (E === "break" || E === "continue") && I.tryLoc <= M && M <= I.finallyLoc && (I = null);
        var A = I ? I.completion : {};
        return A.type = E, A.arg = M, I ? (this.method = "next", this.next = I.finallyLoc, f) : this.complete(A);
      },
      complete: function(E, M) {
        if (E.type === "throw")
          throw E.arg;
        return E.type === "break" || E.type === "continue" ? this.next = E.arg : E.type === "return" ? (this.rval = this.arg = E.arg, this.method = "return", this.next = "end") : E.type === "normal" && M && (this.next = M), f;
      },
      finish: function(E) {
        for (var M = this.tryEntries.length - 1; M >= 0; --M) {
          var N = this.tryEntries[M];
          if (N.finallyLoc === E)
            return this.complete(N.completion, N.afterLoc), O(N), f;
        }
      },
      catch: function(E) {
        for (var M = this.tryEntries.length - 1; M >= 0; --M) {
          var N = this.tryEntries[M];
          if (N.tryLoc === E) {
            var _ = N.completion;
            if (_.type === "throw") {
              var I = _.arg;
              O(N);
            }
            return I;
          }
        }
        throw new Error("illegal catch attempt");
      },
      delegateYield: function(E, M, N) {
        return this.delegate = {
          iterator: V(E),
          resultName: M,
          nextLoc: N
        }, this.method === "next" && (this.arg = void 0), f;
      }
    }, r;
  }
  t.exports = n, t.exports.__esModule = !0, t.exports.default = t.exports;
})(qg);
var ni = qg.exports(), Ut = ni;
try {
  regeneratorRuntime = ni;
} catch {
  typeof globalThis == "object" ? globalThis.regeneratorRuntime = ni : Function("r", "regeneratorRuntime = r")(ni);
}
var kS = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0051.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z" } }, { tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" } }] }, name: "check-circle", theme: "outlined" };
const _S = kS;
function Af(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? Object(arguments[e]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(a) {
      return Object.getOwnPropertyDescriptor(n, a).enumerable;
    }))), r.forEach(function(a) {
      ES(t, a, n[a]);
    });
  }
  return t;
}
function ES(t, e, n) {
  return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
var Bc = function(e, n) {
  var r = Af({}, e, n.attrs);
  return m(st, Af({}, r, {
    icon: _S
  }), null);
};
Bc.displayName = "CheckCircleOutlined";
Bc.inheritAttrs = !1;
const NS = Bc;
var MS = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" } }, { tag: "path", attrs: { d: "M464 336a48 48 0 1096 0 48 48 0 10-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z" } }] }, name: "info-circle", theme: "outlined" };
const AS = MS;
function Df(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? Object(arguments[e]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(a) {
      return Object.getOwnPropertyDescriptor(n, a).enumerable;
    }))), r.forEach(function(a) {
      DS(t, a, n[a]);
    });
  }
  return t;
}
function DS(t, e, n) {
  return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
var Kc = function(e, n) {
  var r = Df({}, e, n.attrs);
  return m(st, Df({}, r, {
    icon: AS
  }), null);
};
Kc.displayName = "InfoCircleOutlined";
Kc.inheritAttrs = !1;
const FS = Kc;
var RS = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M685.4 354.8c0-4.4-3.6-8-8-8l-66 .3L512 465.6l-99.3-118.4-66.1-.3c-4.4 0-8 3.5-8 8 0 1.9.7 3.7 1.9 5.2l130.1 155L340.5 670a8.32 8.32 0 00-1.9 5.2c0 4.4 3.6 8 8 8l66.1-.3L512 564.4l99.3 118.4 66 .3c4.4 0 8-3.5 8-8 0-1.9-.7-3.7-1.9-5.2L553.5 515l130.1-155c1.2-1.4 1.8-3.3 1.8-5.2z" } }, { tag: "path", attrs: { d: "M512 65C264.6 65 64 265.6 64 513s200.6 448 448 448 448-200.6 448-448S759.4 65 512 65zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" } }] }, name: "close-circle", theme: "outlined" };
const $S = RS;
function Ff(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? Object(arguments[e]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(a) {
      return Object.getOwnPropertyDescriptor(n, a).enumerable;
    }))), r.forEach(function(a) {
      LS(t, a, n[a]);
    });
  }
  return t;
}
function LS(t, e, n) {
  return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
var Hc = function(e, n) {
  var r = Ff({}, e, n.attrs);
  return m(st, Ff({}, r, {
    icon: $S
  }), null);
};
Hc.displayName = "CloseCircleOutlined";
Hc.inheritAttrs = !1;
const jS = Hc;
var VS = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" } }, { tag: "path", attrs: { d: "M464 688a48 48 0 1096 0 48 48 0 10-96 0zm24-112h48c4.4 0 8-3.6 8-8V296c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8z" } }] }, name: "exclamation-circle", theme: "outlined" };
const BS = VS;
function Rf(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? Object(arguments[e]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(a) {
      return Object.getOwnPropertyDescriptor(n, a).enumerable;
    }))), r.forEach(function(a) {
      KS(t, a, n[a]);
    });
  }
  return t;
}
function KS(t, e, n) {
  return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
var zc = function(e, n) {
  var r = Rf({}, e, n.attrs);
  return m(st, Rf({}, r, {
    icon: BS
  }), null);
};
zc.displayName = "ExclamationCircleOutlined";
zc.inheritAttrs = !1;
const HS = zc;
var zS = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z" } }] }, name: "close", theme: "outlined" };
const WS = zS;
function $f(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? Object(arguments[e]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(a) {
      return Object.getOwnPropertyDescriptor(n, a).enumerable;
    }))), r.forEach(function(a) {
      US(t, a, n[a]);
    });
  }
  return t;
}
function US(t, e, n) {
  return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
var Wc = function(e, n) {
  var r = $f({}, e, n.attrs);
  return m(st, $f({}, r, {
    icon: WS
  }), null);
};
Wc.displayName = "CloseOutlined";
Wc.inheritAttrs = !1;
const Bi = Wc;
globalThis && globalThis.__awaiter;
var Cr = {}, Xg = 4.5, Qg = "24px", Jg = "24px", Nu = "", Zg = "topRight", em = function() {
  return document.body;
}, tm = null, Mu = !1, nm;
function YS(t) {
  var e = t.duration, n = t.placement, r = t.bottom, a = t.top, o = t.getContainer, i = t.closeIcon, l = t.prefixCls;
  l !== void 0 && (Nu = l), e !== void 0 && (Xg = e), n !== void 0 && (Zg = n), r !== void 0 && (Jg = typeof r == "number" ? "".concat(r, "px") : r), a !== void 0 && (Qg = typeof a == "number" ? "".concat(a, "px") : a), o !== void 0 && (em = o), i !== void 0 && (tm = i), t.rtl !== void 0 && (Mu = t.rtl), t.maxCount !== void 0 && (nm = t.maxCount);
}
function qS(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Qg, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Jg, r;
  switch (t) {
    case "topLeft":
      r = {
        left: "0px",
        top: e,
        bottom: "auto"
      };
      break;
    case "topRight":
      r = {
        right: "0px",
        top: e,
        bottom: "auto"
      };
      break;
    case "bottomLeft":
      r = {
        left: "0px",
        top: "auto",
        bottom: n
      };
      break;
    default:
      r = {
        right: "0px",
        top: "auto",
        bottom: n
      };
      break;
  }
  return r;
}
function GS(t, e) {
  var n = t.prefixCls, r = t.placement, a = r === void 0 ? Zg : r, o = t.getContainer, i = o === void 0 ? em : o, l = t.top, u = t.bottom, s = t.closeIcon, d = s === void 0 ? tm : s, c = t.appContext, v = s1(), f = v.getPrefixCls, g = f("notification", n || Nu), p = "".concat(g, "-").concat(a, "-").concat(Mu), y = Cr[p];
  if (y) {
    Promise.resolve(y).then(function(w) {
      e(w);
    });
    return;
  }
  var h = ge("".concat(g, "-").concat(a), j({}, "".concat(g, "-rtl"), Mu === !0));
  Mg.newInstance({
    name: "notification",
    prefixCls: n || Nu,
    class: h,
    style: qS(a, l, u),
    appContext: c,
    getContainer: i,
    closeIcon: function(C) {
      var x = C.prefixCls, S = m("span", {
        class: "".concat(x, "-close-x")
      }, [_a(d, {}, m(Bi, {
        class: "".concat(x, "-close-icon")
      }, null))]);
      return S;
    },
    maxCount: nm,
    hasTransitionName: !0
  }, function(w) {
    Cr[p] = w, e(w);
  });
}
var XS = {
  success: NS,
  info: FS,
  error: jS,
  warning: HS
};
function QS(t) {
  var e = t.icon, n = t.type, r = t.description, a = t.message, o = t.btn, i = t.duration === void 0 ? Xg : t.duration;
  GS(t, function(l) {
    l.notice({
      content: function(s) {
        var d = s.prefixCls, c = "".concat(d, "-notice"), v = null;
        if (e)
          v = function() {
            return m("span", {
              class: "".concat(c, "-icon")
            }, [_a(e)]);
          };
        else if (n) {
          var f = XS[n];
          v = function() {
            return m(f, {
              class: "".concat(c, "-icon ").concat(c, "-icon-").concat(n)
            }, null);
          };
        }
        return m("div", {
          class: v ? "".concat(c, "-with-icon") : ""
        }, [v && v(), m("div", {
          class: "".concat(c, "-message")
        }, [!r && v ? m("span", {
          class: "".concat(c, "-message-single-line-auto-margin")
        }, null) : null, _a(a)]), m("div", {
          class: "".concat(c, "-description")
        }, [_a(r)]), o ? m("span", {
          class: "".concat(c, "-btn")
        }, [_a(o)]) : null]);
      },
      duration: i,
      closable: !0,
      onClose: t.onClose,
      onClick: t.onClick,
      key: t.key,
      style: t.style || {},
      class: t.class
    });
  });
}
var Ga = {
  open: QS,
  close: function(e) {
    Object.keys(Cr).forEach(function(n) {
      return Promise.resolve(Cr[n]).then(function(r) {
        r.removeNotice(e);
      });
    });
  },
  config: YS,
  destroy: function() {
    Object.keys(Cr).forEach(function(e) {
      Promise.resolve(Cr[e]).then(function(n) {
        n.destroy();
      }), delete Cr[e];
    });
  }
}, JS = ["success", "info", "warning", "error"];
JS.forEach(function(t) {
  Ga[t] = function(e) {
    return Ga.open(k(k({}, e), {
      type: t
    }));
  };
});
Ga.warn = Ga.warning;
const ZS = Ga;
function Ki() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
var e1 = "vc-util-key";
function rm() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, e = t.mark;
  return e ? e.startsWith("data-") ? e : "data-".concat(e) : e1;
}
function Uc(t) {
  if (t.attachTo)
    return t.attachTo;
  var e = document.querySelector("head");
  return e || document.body;
}
function Lf(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n, r;
  if (!Ki())
    return null;
  var a = document.createElement("style");
  !((n = e.csp) === null || n === void 0) && n.nonce && (a.nonce = (r = e.csp) === null || r === void 0 ? void 0 : r.nonce), a.innerHTML = t;
  var o = Uc(e), i = o.firstChild;
  return e.prepend && o.prepend ? o.prepend(a) : e.prepend && i ? o.insertBefore(a, i) : o.appendChild(a), a;
}
var Au = /* @__PURE__ */ new Map();
function t1(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = Uc(e);
  return Array.from(Au.get(n).children).find(function(r) {
    return r.tagName === "STYLE" && r.getAttribute(rm(e)) === t;
  });
}
function n1(t, e) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r, a, o, i = Uc(n);
  if (!Au.has(i)) {
    var l = Lf("", n), u = l.parentNode;
    Au.set(i, u), u.removeChild(l);
  }
  var s = t1(e, n);
  if (s)
    return ((r = n.csp) === null || r === void 0 ? void 0 : r.nonce) && s.nonce !== ((a = n.csp) === null || a === void 0 ? void 0 : a.nonce) && (s.nonce = (o = n.csp) === null || o === void 0 ? void 0 : o.nonce), s.innerHTML !== t && (s.innerHTML = t), s;
  var d = Lf(t, n);
  return d.setAttribute(rm(n), e), d;
}
const mt = function(t, e, n) {
  pn(t, "[ant-design-vue: ".concat(e, "] ").concat(n));
};
var r1 = "-ant-".concat(Date.now(), "-").concat(Math.random());
function a1(t, e) {
  var n = {}, r = function(d, c) {
    var v = d.clone();
    return v = (c == null ? void 0 : c(v)) || v, v.toRgbString();
  }, a = function(d, c) {
    var v = new Il(d), f = qa(v.toRgbString());
    n["".concat(c, "-color")] = r(v), n["".concat(c, "-color-disabled")] = f[1], n["".concat(c, "-color-hover")] = f[4], n["".concat(c, "-color-active")] = f[6], n["".concat(c, "-color-outline")] = v.clone().setAlpha(0.2).toRgbString(), n["".concat(c, "-color-deprecated-bg")] = f[1], n["".concat(c, "-color-deprecated-border")] = f[3];
  };
  if (e.primaryColor) {
    a(e.primaryColor, "primary");
    var o = new Il(e.primaryColor), i = qa(o.toRgbString());
    i.forEach(function(s, d) {
      n["primary-".concat(d + 1)] = s;
    }), n["primary-color-deprecated-l-35"] = r(o, function(s) {
      return s.lighten(35);
    }), n["primary-color-deprecated-l-20"] = r(o, function(s) {
      return s.lighten(20);
    }), n["primary-color-deprecated-t-20"] = r(o, function(s) {
      return s.tint(20);
    }), n["primary-color-deprecated-t-50"] = r(o, function(s) {
      return s.tint(50);
    }), n["primary-color-deprecated-f-12"] = r(o, function(s) {
      return s.setAlpha(s.getAlpha() * 0.12);
    });
    var l = new Il(i[0]);
    n["primary-color-active-deprecated-f-30"] = r(l, function(s) {
      return s.setAlpha(s.getAlpha() * 0.3);
    }), n["primary-color-active-deprecated-d-02"] = r(l, function(s) {
      return s.darken(2);
    });
  }
  e.successColor && a(e.successColor, "success"), e.warningColor && a(e.warningColor, "warning"), e.errorColor && a(e.errorColor, "error"), e.infoColor && a(e.infoColor, "info");
  var u = Object.keys(n).map(function(s) {
    return "--".concat(t, "-").concat(s, ": ").concat(n[s], ";");
  });
  Ki() ? n1(`
  :root {
    `.concat(u.join(`
`), `
  }
  `), "".concat(r1, "-dynamic-theme")) : mt(!1, "ConfigProvider", "SSR do not support dynamic theme with css variables.");
}
var am = Symbol("GlobalFormContextKey"), o1 = function(e) {
  ct(am, e);
}, i1 = function() {
  return ut(am, {
    validateMessages: F(function() {
    })
  });
}, l1 = function() {
  return {
    getTargetContainer: {
      type: Function
    },
    getPopupContainer: {
      type: Function
    },
    prefixCls: String,
    getPrefixCls: {
      type: Function
    },
    renderEmpty: {
      type: Function
    },
    transformCellText: {
      type: Function
    },
    csp: {
      type: Object,
      default: void 0
    },
    input: {
      type: Object
    },
    autoInsertSpaceInButton: {
      type: Boolean,
      default: void 0
    },
    locale: {
      type: Object,
      default: void 0
    },
    pageHeader: {
      type: Object
    },
    componentSize: {
      type: String
    },
    direction: {
      type: String
    },
    space: {
      type: Object
    },
    virtual: {
      type: Boolean,
      default: void 0
    },
    dropdownMatchSelectWidth: {
      type: [Number, Boolean],
      default: !0
    },
    form: {
      type: Object,
      default: void 0
    },
    notUpdateGlobalConfig: Boolean
  };
}, u1 = "ant";
function ta() {
  return ln.prefixCls || u1;
}
var Du = Mt({}), om = Mt({}), ln = Mt({});
Ue(function() {
  k(ln, Du, om), ln.prefixCls = ta(), ln.getPrefixCls = function(t, e) {
    return e || (t ? "".concat(ln.prefixCls, "-").concat(t) : ln.prefixCls);
  }, ln.getRootPrefixCls = function(t, e) {
    return t || (ln.prefixCls ? ln.prefixCls : e && e.includes("-") ? e.replace(/^(.*)-[^-]*$/, "$1") : ta());
  };
});
var El, c1 = function(e) {
  El && El(), El = Ue(function() {
    k(om, Mt(e));
  }), e.theme && a1(ta(), e.theme);
}, s1 = function() {
  return {
    getPrefixCls: function(n, r) {
      return r || (n ? "".concat(ta(), "-").concat(n) : ta());
    },
    getRootPrefixCls: function(n, r) {
      return n || (ln.prefixCls ? ln.prefixCls : r && r.includes("-") ? r.replace(/^(.*)-[^-]*$/, "$1") : ta());
    }
  };
}, $a = pe({
  name: "AConfigProvider",
  inheritAttrs: !1,
  props: l1(),
  setup: function(e, n) {
    var r = n.slots, a = function(c, v) {
      var f = e.prefixCls, g = f === void 0 ? "ant" : f;
      return v || (c ? "".concat(g, "-").concat(c) : g);
    }, o = function(c) {
      var v = e.renderEmpty || r.renderEmpty || _g;
      return v(c);
    }, i = function(c, v) {
      var f = e.prefixCls;
      if (v)
        return v;
      var g = f || a("");
      return c ? "".concat(g, "-").concat(c) : g;
    }, l = Mt(k(k({}, e), {
      getPrefixCls: i,
      renderEmpty: o
    }));
    Object.keys(e).forEach(function(d) {
      Ce(function() {
        return e[d];
      }, function() {
        l[d] = e[d];
      });
    }), e.notUpdateGlobalConfig || (k(Du, l), Ce(l, function() {
      k(Du, l);
    }));
    var u = F(function() {
      var d, c, v = {};
      return e.locale && (v = ((d = e.locale.Form) === null || d === void 0 ? void 0 : d.defaultValidateMessages) || ((c = ir.Form) === null || c === void 0 ? void 0 : c.defaultValidateMessages) || {}), e.form && e.form.validateMessages && (v = k(k({}, v), e.form.validateMessages)), v;
    });
    o1({
      validateMessages: u
    }), ct("configProvider", l);
    var s = function(c) {
      var v;
      return m(uw, {
        locale: e.locale || c,
        ANT_MARK__: xu
      }, {
        default: function() {
          return [(v = r.default) === null || v === void 0 ? void 0 : v.call(r)];
        }
      });
    };
    return Ue(function() {
      e.direction && (IS.config({
        rtl: e.direction === "rtl"
      }), ZS.config({
        rtl: e.direction === "rtl"
      }));
    }), function() {
      return m(ji, {
        children: function(c, v, f) {
          return s(f);
        }
      }, null);
    };
  }
}), d1 = Mt({
  getPrefixCls: function(e, n) {
    return n || (e ? "ant-".concat(e) : "ant");
  },
  renderEmpty: _g,
  direction: "ltr"
});
$a.config = c1;
$a.install = function(t) {
  t.component($a.name, $a);
};
const Qe = function(t, e) {
  var n = ut("configProvider", d1), r = F(function() {
    return n.getPrefixCls(t, e.prefixCls);
  }), a = F(function() {
    var w;
    return (w = e.direction) !== null && w !== void 0 ? w : n.direction;
  }), o = F(function() {
    return n.getPrefixCls();
  }), i = F(function() {
    return n.autoInsertSpaceInButton;
  }), l = F(function() {
    return n.renderEmpty;
  }), u = F(function() {
    return n.space;
  }), s = F(function() {
    return n.pageHeader;
  }), d = F(function() {
    return n.form;
  }), c = F(function() {
    return e.getTargetContainer || n.getTargetContainer;
  }), v = F(function() {
    return e.getPopupContainer || n.getPopupContainer;
  }), f = F(function() {
    var w;
    return (w = e.dropdownMatchSelectWidth) !== null && w !== void 0 ? w : n.dropdownMatchSelectWidth;
  }), g = F(function() {
    return (e.virtual === void 0 ? n.virtual !== !1 : e.virtual !== !1) && f.value !== !1;
  }), p = F(function() {
    return e.size || n.componentSize;
  }), y = F(function() {
    var w;
    return e.autocomplete || ((w = n.input) === null || w === void 0 ? void 0 : w.autocomplete);
  }), h = F(function() {
    return n.csp;
  });
  return {
    configProvider: n,
    prefixCls: r,
    direction: a,
    size: p,
    getTargetContainer: c,
    getPopupContainer: v,
    space: u,
    pageHeader: s,
    form: d,
    autoInsertSpaceInButton: i,
    renderEmpty: l,
    virtual: g,
    dropdownMatchSelectWidth: f,
    rootPrefixCls: o,
    getPrefixCls: n.getPrefixCls,
    autocomplete: y,
    csp: h
  };
};
function pt(t, e) {
  for (var n = k({}, t), r = 0; r < e.length; r += 1) {
    var a = e[r];
    delete n[a];
  }
  return n;
}
function im(t) {
  return Zh(t) || tg(t) || $i(t) || eg();
}
function jf(t, e) {
  var n = t.key, r;
  return "value" in t && (r = t.value), n != null ? n : r !== void 0 ? r : "rc-index-key-".concat(e);
}
function lm(t, e) {
  var n = t || {}, r = n.label, a = n.value, o = n.options;
  return {
    label: r || (e ? "children" : "label"),
    value: a || "value",
    options: o || "options"
  };
}
function f1(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = e.fieldNames, r = e.childrenAsData, a = [], o = lm(n, !1), i = o.label, l = o.value, u = o.options;
  function s(d, c) {
    d.forEach(function(v) {
      var f = v[i];
      if (c || !(u in v)) {
        var g = v[l];
        a.push({
          key: jf(v, a.length),
          groupOption: c,
          data: v,
          label: f,
          value: g
        });
      } else {
        var p = f;
        p === void 0 && r && (p = v.label), a.push({
          key: jf(v, a.length),
          group: !0,
          data: v,
          label: p
        }), s(v[u], !0);
      }
    });
  }
  return s(t, !1), a;
}
function Fu(t) {
  var e = k({}, t);
  return "props" in e || Object.defineProperty(e, "props", {
    get: function() {
      return Ze(!1, "Return type is option instead of Option instance. Please read value directly instead of reading from `props`."), e;
    }
  }), e;
}
function v1(t, e) {
  if (!e || !e.length)
    return null;
  var n = !1;
  function r(o, i) {
    var l = im(i), u = l[0], s = l.slice(1);
    if (!u)
      return [o];
    var d = o.split(u);
    return n = n || d.length > 1, d.reduce(function(c, v) {
      return [].concat(Ie(c), Ie(r(v, s)));
    }, []).filter(function(c) {
      return c;
    });
  }
  var a = r(t, e);
  return n ? a : null;
}
function Gr(t, e) {
  return t ? t.contains(e) : !1;
}
var um = ["moz", "ms", "webkit"];
function p1() {
  var t = 0;
  return function(e) {
    var n = new Date().getTime(), r = Math.max(0, 16 - (n - t)), a = window.setTimeout(function() {
      e(n + r);
    }, r);
    return t = n + r, a;
  };
}
function h1() {
  if (typeof window > "u")
    return function() {
    };
  if (window.requestAnimationFrame)
    return window.requestAnimationFrame.bind(window);
  var t = um.filter(function(e) {
    return "".concat(e, "RequestAnimationFrame") in window;
  })[0];
  return t ? window["".concat(t, "RequestAnimationFrame")] : p1();
}
function g1(t) {
  if (typeof window > "u")
    return null;
  if (window.cancelAnimationFrame)
    return window.cancelAnimationFrame(t);
  var e = um.filter(function(n) {
    return "".concat(n, "CancelAnimationFrame") in window || "".concat(n, "CancelRequestAnimationFrame") in window;
  })[0];
  return e ? (window["".concat(e, "CancelAnimationFrame")] || window["".concat(e, "CancelRequestAnimationFrame")]).call(this, t) : clearTimeout(t);
}
var Vf = h1(), m1 = function(e) {
  return g1(e.id);
}, y1 = function(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, r = Date.now();
  function a() {
    Date.now() - r >= n ? e.call() : o.id = Vf(a);
  }
  var o = {
    id: Vf(a)
  };
  return o;
}, Yc = {
  visible: Boolean,
  prefixCls: String,
  zIndex: Number,
  destroyPopupOnHide: Boolean,
  forceRender: Boolean,
  animation: [String, Object],
  transitionName: String,
  stretch: {
    type: String
  },
  align: {
    type: Object
  },
  point: {
    type: Object
  },
  getRootDomNode: {
    type: Function
  },
  getClassNameFromAlign: {
    type: Function
  },
  onMouseenter: {
    type: Function
  },
  onMouseleave: {
    type: Function
  },
  onMousedown: {
    type: Function
  },
  onTouchstart: {
    type: Function
  }
}, b1 = k(k({}, Yc), {
  mobile: {
    type: Object
  }
}), C1 = k(k({}, Yc), {
  mask: Boolean,
  mobile: {
    type: Object
  },
  maskAnimation: String,
  maskTransitionName: String
});
function cm(t) {
  var e = t.prefixCls, n = t.animation, r = t.transitionName;
  return n ? {
    name: "".concat(e, "-").concat(n)
  } : r ? {
    name: r
  } : {};
}
function sm(t) {
  var e = t.prefixCls, n = t.visible, r = t.zIndex, a = t.mask, o = t.maskAnimation, i = t.maskTransitionName;
  if (!a)
    return null;
  var l = {};
  return (i || o) && (l = cm({
    prefixCls: e,
    transitionName: i,
    animation: o
  })), m(_r, Y({
    appear: !0
  }, l), {
    default: function() {
      return [gn(m("div", {
        style: {
          zIndex: r
        },
        class: "".concat(e, "-mask")
      }, null), [[T0("if"), n]])];
    }
  });
}
sm.displayName = "Mask";
const w1 = pe({
  name: "MobilePopupInner",
  inheritAttrs: !1,
  props: b1,
  emits: ["mouseenter", "mouseleave", "mousedown", "touchstart", "align"],
  setup: function(e, n) {
    var r = n.expose, a = n.slots, o = G();
    return r({
      forceAlign: function() {
      },
      getElement: function() {
        return o.value;
      }
    }), function() {
      var i, l = e.zIndex, u = e.visible, s = e.prefixCls, d = e.mobile;
      d = d === void 0 ? {} : d;
      var c = d.popupClassName, v = d.popupStyle, f = d.popupMotion, g = f === void 0 ? {} : f, p = d.popupRender, y = k({
        zIndex: l
      }, v), h = Kt((i = a.default) === null || i === void 0 ? void 0 : i.call(a));
      h.length > 1 && (h = m("div", {
        class: "".concat(s, "-content")
      }, [h])), p && (h = p(h));
      var w = ge(s, c);
      return m(_r, Y({
        ref: o
      }, g), {
        default: function() {
          return [u ? m("div", {
            class: w,
            style: y
          }, [h]) : null];
        }
      });
    };
  }
});
var S1 = globalThis && globalThis.__awaiter || function(t, e, n, r) {
  function a(o) {
    return o instanceof n ? o : new n(function(i) {
      i(o);
    });
  }
  return new (n || (n = Promise))(function(o, i) {
    function l(d) {
      try {
        s(r.next(d));
      } catch (c) {
        i(c);
      }
    }
    function u(d) {
      try {
        s(r.throw(d));
      } catch (c) {
        i(c);
      }
    }
    function s(d) {
      d.done ? o(d.value) : a(d.value).then(l, u);
    }
    s((r = r.apply(t, e || [])).next());
  });
}, Bf = ["measure", "align", null, "motion"];
const x1 = function(t, e) {
  var n = G(null), r = G(), a = G(!1);
  function o(u) {
    a.value || (n.value = u);
  }
  function i() {
    tt.cancel(r.value);
  }
  function l(u) {
    i(), r.value = tt(function() {
      var s = n.value;
      switch (n.value) {
        case "align":
          s = "motion";
          break;
        case "motion":
          s = "stable";
          break;
      }
      o(s), u == null || u();
    });
  }
  return Ce(t, function() {
    o("measure");
  }, {
    immediate: !0,
    flush: "post"
  }), dt(function() {
    Ce(n, function() {
      switch (n.value) {
        case "measure":
          e();
          break;
      }
      n.value && (r.value = tt(function() {
        return S1(void 0, void 0, void 0, /* @__PURE__ */ Ut.mark(function u() {
          var s, d;
          return Ut.wrap(function(v) {
            for (; ; )
              switch (v.prev = v.next) {
                case 0:
                  s = Bf.indexOf(n.value), d = Bf[s + 1], d && s !== -1 && o(d);
                case 3:
                case "end":
                  return v.stop();
              }
          }, u);
        }));
      }));
    }, {
      immediate: !0,
      flush: "post"
    });
  }), ht(function() {
    a.value = !0, i();
  }), [n, l];
}, P1 = function(t) {
  var e = G({
    width: 0,
    height: 0
  });
  function n(a) {
    e.value = {
      width: a.offsetWidth,
      height: a.offsetHeight
    };
  }
  var r = F(function() {
    var a = {};
    if (t.value) {
      var o = e.value, i = o.width, l = o.height;
      t.value.indexOf("height") !== -1 && l ? a.height = "".concat(l, "px") : t.value.indexOf("minHeight") !== -1 && l && (a.minHeight = "".concat(l, "px")), t.value.indexOf("width") !== -1 && i ? a.width = "".concat(i, "px") : t.value.indexOf("minWidth") !== -1 && i && (a.minWidth = "".concat(i, "px"));
    }
    return a;
  });
  return [r, n];
};
function Kf(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(t, a).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Hf(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Kf(Object(n), !0).forEach(function(r) {
      O1(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Kf(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function ri(t) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? ri = function(e) {
    return typeof e;
  } : ri = function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, ri(t);
}
function O1(t, e, n) {
  return e in t ? Object.defineProperty(t, e, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = n, t;
}
var Ia, T1 = {
  Webkit: "-webkit-",
  Moz: "-moz-",
  ms: "-ms-",
  O: "-o-"
};
function gi() {
  if (Ia !== void 0)
    return Ia;
  Ia = "";
  var t = document.createElement("p").style, e = "Transform";
  for (var n in T1)
    n + e in t && (Ia = n);
  return Ia;
}
function dm() {
  return gi() ? "".concat(gi(), "TransitionProperty") : "transitionProperty";
}
function Hi() {
  return gi() ? "".concat(gi(), "Transform") : "transform";
}
function zf(t, e) {
  var n = dm();
  n && (t.style[n] = e, n !== "transitionProperty" && (t.style.transitionProperty = e));
}
function Nl(t, e) {
  var n = Hi();
  n && (t.style[n] = e, n !== "transform" && (t.style.transform = e));
}
function I1(t) {
  return t.style.transitionProperty || t.style[dm()];
}
function k1(t) {
  var e = window.getComputedStyle(t, null), n = e.getPropertyValue("transform") || e.getPropertyValue(Hi());
  if (n && n !== "none") {
    var r = n.replace(/[^0-9\-.,]/g, "").split(",");
    return {
      x: parseFloat(r[12] || r[4], 0),
      y: parseFloat(r[13] || r[5], 0)
    };
  }
  return {
    x: 0,
    y: 0
  };
}
var _1 = /matrix\((.*)\)/, E1 = /matrix3d\((.*)\)/;
function N1(t, e) {
  var n = window.getComputedStyle(t, null), r = n.getPropertyValue("transform") || n.getPropertyValue(Hi());
  if (r && r !== "none") {
    var a, o = r.match(_1);
    if (o)
      o = o[1], a = o.split(",").map(function(l) {
        return parseFloat(l, 10);
      }), a[4] = e.x, a[5] = e.y, Nl(t, "matrix(".concat(a.join(","), ")"));
    else {
      var i = r.match(E1)[1];
      a = i.split(",").map(function(l) {
        return parseFloat(l, 10);
      }), a[12] = e.x, a[13] = e.y, Nl(t, "matrix3d(".concat(a.join(","), ")"));
    }
  } else
    Nl(t, "translateX(".concat(e.x, "px) translateY(").concat(e.y, "px) translateZ(0)"));
}
var M1 = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source, so;
function Wf(t) {
  var e = t.style.display;
  t.style.display = "none", t.offsetHeight, t.style.display = e;
}
function na(t, e, n) {
  var r = n;
  if (ri(e) === "object") {
    for (var a in e)
      e.hasOwnProperty(a) && na(t, a, e[a]);
    return;
  }
  if (typeof r < "u") {
    typeof r == "number" && (r = "".concat(r, "px")), t.style[e] = r;
    return;
  }
  return so(t, e);
}
function A1(t) {
  var e, n, r, a = t.ownerDocument, o = a.body, i = a && a.documentElement;
  return e = t.getBoundingClientRect(), n = Math.floor(e.left), r = Math.floor(e.top), n -= i.clientLeft || o.clientLeft || 0, r -= i.clientTop || o.clientTop || 0, {
    left: n,
    top: r
  };
}
function fm(t, e) {
  var n = t["page".concat(e ? "Y" : "X", "Offset")], r = "scroll".concat(e ? "Top" : "Left");
  if (typeof n != "number") {
    var a = t.document;
    n = a.documentElement[r], typeof n != "number" && (n = a.body[r]);
  }
  return n;
}
function vm(t) {
  return fm(t);
}
function pm(t) {
  return fm(t, !0);
}
function Xa(t) {
  var e = A1(t), n = t.ownerDocument, r = n.defaultView || n.parentWindow;
  return e.left += vm(r), e.top += pm(r), e;
}
function qc(t) {
  return t != null && t == t.window;
}
function hm(t) {
  return qc(t) ? t.document : t.nodeType === 9 ? t : t.ownerDocument;
}
function D1(t, e, n) {
  var r = n, a = "", o = hm(t);
  return r = r || o.defaultView.getComputedStyle(t, null), r && (a = r.getPropertyValue(e) || r[e]), a;
}
var F1 = new RegExp("^(".concat(M1, ")(?!px)[a-z%]+$"), "i"), R1 = /^(top|right|bottom|left)$/, Ml = "currentStyle", Al = "runtimeStyle", vr = "left", $1 = "px";
function L1(t, e) {
  var n = t[Ml] && t[Ml][e];
  if (F1.test(n) && !R1.test(e)) {
    var r = t.style, a = r[vr], o = t[Al][vr];
    t[Al][vr] = t[Ml][vr], r[vr] = e === "fontSize" ? "1em" : n || 0, n = r.pixelLeft + $1, r[vr] = a, t[Al][vr] = o;
  }
  return n === "" ? "auto" : n;
}
typeof window < "u" && (so = window.getComputedStyle ? D1 : L1);
function Eo(t, e) {
  return t === "left" ? e.useCssRight ? "right" : t : e.useCssBottom ? "bottom" : t;
}
function Uf(t) {
  if (t === "left")
    return "right";
  if (t === "right")
    return "left";
  if (t === "top")
    return "bottom";
  if (t === "bottom")
    return "top";
}
function Yf(t, e, n) {
  na(t, "position") === "static" && (t.style.position = "relative");
  var r = -999, a = -999, o = Eo("left", n), i = Eo("top", n), l = Uf(o), u = Uf(i);
  o !== "left" && (r = 999), i !== "top" && (a = 999);
  var s = "", d = Xa(t);
  ("left" in e || "top" in e) && (s = I1(t) || "", zf(t, "none")), "left" in e && (t.style[l] = "", t.style[o] = "".concat(r, "px")), "top" in e && (t.style[u] = "", t.style[i] = "".concat(a, "px")), Wf(t);
  var c = Xa(t), v = {};
  for (var f in e)
    if (e.hasOwnProperty(f)) {
      var g = Eo(f, n), p = f === "left" ? r : a, y = d[f] - c[f];
      g === f ? v[g] = p + y : v[g] = p - y;
    }
  na(t, v), Wf(t), ("left" in e || "top" in e) && zf(t, s);
  var h = {};
  for (var w in e)
    if (e.hasOwnProperty(w)) {
      var C = Eo(w, n), x = e[w] - d[w];
      w === C ? h[C] = v[C] + x : h[C] = v[C] - x;
    }
  na(t, h);
}
function j1(t, e) {
  var n = Xa(t), r = k1(t), a = {
    x: r.x,
    y: r.y
  };
  "left" in e && (a.x = r.x + e.left - n.left), "top" in e && (a.y = r.y + e.top - n.top), N1(t, a);
}
function V1(t, e, n) {
  if (n.ignoreShake) {
    var r = Xa(t), a = r.left.toFixed(0), o = r.top.toFixed(0), i = e.left.toFixed(0), l = e.top.toFixed(0);
    if (a === i && o === l)
      return;
  }
  n.useCssRight || n.useCssBottom ? Yf(t, e, n) : n.useCssTransform && Hi() in document.body.style ? j1(t, e) : Yf(t, e, n);
}
function Gc(t, e) {
  for (var n = 0; n < t.length; n++)
    e(t[n]);
}
function gm(t) {
  return so(t, "boxSizing") === "border-box";
}
var B1 = ["margin", "border", "padding"], Ru = -1, K1 = 2, $u = 1, H1 = 0;
function z1(t, e, n) {
  var r = {}, a = t.style, o;
  for (o in e)
    e.hasOwnProperty(o) && (r[o] = a[o], a[o] = e[o]);
  n.call(t);
  for (o in e)
    e.hasOwnProperty(o) && (a[o] = r[o]);
}
function Na(t, e, n) {
  var r = 0, a, o, i;
  for (o = 0; o < e.length; o++)
    if (a = e[o], a)
      for (i = 0; i < n.length; i++) {
        var l = void 0;
        a === "border" ? l = "".concat(a).concat(n[i], "Width") : l = a + n[i], r += parseFloat(so(t, l)) || 0;
      }
  return r;
}
var In = {
  getParent: function(e) {
    var n = e;
    do
      n.nodeType === 11 && n.host ? n = n.host : n = n.parentNode;
    while (n && n.nodeType !== 1 && n.nodeType !== 9);
    return n;
  }
};
Gc(["Width", "Height"], function(t) {
  In["doc".concat(t)] = function(e) {
    var n = e.document;
    return Math.max(
      n.documentElement["scroll".concat(t)],
      n.body["scroll".concat(t)],
      In["viewport".concat(t)](n)
    );
  }, In["viewport".concat(t)] = function(e) {
    var n = "client".concat(t), r = e.document, a = r.body, o = r.documentElement, i = o[n];
    return r.compatMode === "CSS1Compat" && i || a && a[n] || i;
  };
});
function qf(t, e, n) {
  var r = n;
  if (qc(t))
    return e === "width" ? In.viewportWidth(t) : In.viewportHeight(t);
  if (t.nodeType === 9)
    return e === "width" ? In.docWidth(t) : In.docHeight(t);
  var a = e === "width" ? ["Left", "Right"] : ["Top", "Bottom"], o = Math.floor(e === "width" ? t.getBoundingClientRect().width : t.getBoundingClientRect().height), i = gm(t), l = 0;
  (o == null || o <= 0) && (o = void 0, l = so(t, e), (l == null || Number(l) < 0) && (l = t.style[e] || 0), l = parseFloat(l) || 0), r === void 0 && (r = i ? $u : Ru);
  var u = o !== void 0 || i, s = o || l;
  return r === Ru ? u ? s - Na(t, ["border", "padding"], a) : l : u ? r === $u ? s : s + (r === K1 ? -Na(t, ["border"], a) : Na(t, ["margin"], a)) : l + Na(t, B1.slice(r), a);
}
var W1 = {
  position: "absolute",
  visibility: "hidden",
  display: "block"
};
function Gf() {
  for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
    e[n] = arguments[n];
  var r, a = e[0];
  return a.offsetWidth !== 0 ? r = qf.apply(void 0, e) : z1(a, W1, function() {
    r = qf.apply(void 0, e);
  }), r;
}
Gc(["width", "height"], function(t) {
  var e = t.charAt(0).toUpperCase() + t.slice(1);
  In["outer".concat(e)] = function(r, a) {
    return r && Gf(r, t, a ? H1 : $u);
  };
  var n = t === "width" ? ["Left", "Right"] : ["Top", "Bottom"];
  In[t] = function(r, a) {
    var o = a;
    if (o !== void 0) {
      if (r) {
        var i = gm(r);
        return i && (o += Na(r, ["padding", "border"], n)), na(r, t, o);
      }
      return;
    }
    return r && Gf(r, t, Ru);
  };
});
function mm(t, e) {
  for (var n in e)
    e.hasOwnProperty(n) && (t[n] = e[n]);
  return t;
}
var qe = {
  getWindow: function(e) {
    if (e && e.document && e.setTimeout)
      return e;
    var n = e.ownerDocument || e;
    return n.defaultView || n.parentWindow;
  },
  getDocument: hm,
  offset: function(e, n, r) {
    if (typeof n < "u")
      V1(e, n, r || {});
    else
      return Xa(e);
  },
  isWindow: qc,
  each: Gc,
  css: na,
  clone: function(e) {
    var n, r = {};
    for (n in e)
      e.hasOwnProperty(n) && (r[n] = e[n]);
    var a = e.overflow;
    if (a)
      for (n in e)
        e.hasOwnProperty(n) && (r.overflow[n] = e.overflow[n]);
    return r;
  },
  mix: mm,
  getWindowScrollLeft: function(e) {
    return vm(e);
  },
  getWindowScrollTop: function(e) {
    return pm(e);
  },
  merge: function() {
    for (var e = {}, n = 0; n < arguments.length; n++)
      qe.mix(e, n < 0 || arguments.length <= n ? void 0 : arguments[n]);
    return e;
  },
  viewportWidth: 0,
  viewportHeight: 0
};
mm(qe, In);
var Dl = qe.getParent;
function Lu(t) {
  if (qe.isWindow(t) || t.nodeType === 9)
    return null;
  var e = qe.getDocument(t), n = e.body, r, a = qe.css(t, "position"), o = a === "fixed" || a === "absolute";
  if (!o)
    return t.nodeName.toLowerCase() === "html" ? null : Dl(t);
  for (r = Dl(t); r && r !== n && r.nodeType !== 9; r = Dl(r))
    if (a = qe.css(r, "position"), a !== "static")
      return r;
  return null;
}
var Xf = qe.getParent;
function U1(t) {
  if (qe.isWindow(t) || t.nodeType === 9)
    return !1;
  var e = qe.getDocument(t), n = e.body, r = null;
  for (r = Xf(t); r && r !== n && r !== e; r = Xf(r)) {
    var a = qe.css(r, "position");
    if (a === "fixed")
      return !0;
  }
  return !1;
}
function Xc(t, e) {
  for (var n = {
    left: 0,
    right: 1 / 0,
    top: 0,
    bottom: 1 / 0
  }, r = Lu(t), a = qe.getDocument(t), o = a.defaultView || a.parentWindow, i = a.body, l = a.documentElement; r; ) {
    if ((navigator.userAgent.indexOf("MSIE") === -1 || r.clientWidth !== 0) && r !== i && r !== l && qe.css(r, "overflow") !== "visible") {
      var u = qe.offset(r);
      u.left += r.clientLeft, u.top += r.clientTop, n.top = Math.max(n.top, u.top), n.right = Math.min(
        n.right,
        u.left + r.clientWidth
      ), n.bottom = Math.min(n.bottom, u.top + r.clientHeight), n.left = Math.max(n.left, u.left);
    } else if (r === i || r === l)
      break;
    r = Lu(r);
  }
  var s = null;
  if (!qe.isWindow(t) && t.nodeType !== 9) {
    s = t.style.position;
    var d = qe.css(t, "position");
    d === "absolute" && (t.style.position = "fixed");
  }
  var c = qe.getWindowScrollLeft(o), v = qe.getWindowScrollTop(o), f = qe.viewportWidth(o), g = qe.viewportHeight(o), p = l.scrollWidth, y = l.scrollHeight, h = window.getComputedStyle(i);
  if (h.overflowX === "hidden" && (p = o.innerWidth), h.overflowY === "hidden" && (y = o.innerHeight), t.style && (t.style.position = s), e || U1(t))
    n.left = Math.max(n.left, c), n.top = Math.max(n.top, v), n.right = Math.min(n.right, c + f), n.bottom = Math.min(n.bottom, v + g);
  else {
    var w = Math.max(p, c + f);
    n.right = Math.min(n.right, w);
    var C = Math.max(y, v + g);
    n.bottom = Math.min(n.bottom, C);
  }
  return n.top >= 0 && n.left >= 0 && n.bottom > n.top && n.right > n.left ? n : null;
}
function Y1(t, e, n, r) {
  var a = qe.clone(t), o = {
    width: e.width,
    height: e.height
  };
  return r.adjustX && a.left < n.left && (a.left = n.left), r.resizeWidth && a.left >= n.left && a.left + o.width > n.right && (o.width -= a.left + o.width - n.right), r.adjustX && a.left + o.width > n.right && (a.left = Math.max(n.right - o.width, n.left)), r.adjustY && a.top < n.top && (a.top = n.top), r.resizeHeight && a.top >= n.top && a.top + o.height > n.bottom && (o.height -= a.top + o.height - n.bottom), r.adjustY && a.top + o.height > n.bottom && (a.top = Math.max(n.bottom - o.height, n.top)), qe.mix(a, o);
}
function Qc(t) {
  var e, n, r;
  if (!qe.isWindow(t) && t.nodeType !== 9)
    e = qe.offset(t), n = qe.outerWidth(t), r = qe.outerHeight(t);
  else {
    var a = qe.getWindow(t);
    e = {
      left: qe.getWindowScrollLeft(a),
      top: qe.getWindowScrollTop(a)
    }, n = qe.viewportWidth(a), r = qe.viewportHeight(a);
  }
  return e.width = n, e.height = r, e;
}
function Qf(t, e) {
  var n = e.charAt(0), r = e.charAt(1), a = t.width, o = t.height, i = t.left, l = t.top;
  return n === "c" ? l += o / 2 : n === "b" && (l += o), r === "c" ? i += a / 2 : r === "r" && (i += a), {
    left: i,
    top: l
  };
}
function No(t, e, n, r, a) {
  var o = Qf(e, n[1]), i = Qf(t, n[0]), l = [i.left - o.left, i.top - o.top];
  return {
    left: Math.round(t.left - l[0] + r[0] - a[0]),
    top: Math.round(t.top - l[1] + r[1] - a[1])
  };
}
function Jf(t, e, n) {
  return t.left < n.left || t.left + e.width > n.right;
}
function Zf(t, e, n) {
  return t.top < n.top || t.top + e.height > n.bottom;
}
function q1(t, e, n) {
  return t.left > n.right || t.left + e.width < n.left;
}
function G1(t, e, n) {
  return t.top > n.bottom || t.top + e.height < n.top;
}
function Mo(t, e, n) {
  var r = [];
  return qe.each(t, function(a) {
    r.push(a.replace(e, function(o) {
      return n[o];
    }));
  }), r;
}
function Ao(t, e) {
  return t[e] = -t[e], t;
}
function ev(t, e) {
  var n;
  return /%$/.test(t) ? n = parseInt(t.substring(0, t.length - 1), 10) / 100 * e : n = parseInt(t, 10), n || 0;
}
function tv(t, e) {
  t[0] = ev(t[0], e.width), t[1] = ev(t[1], e.height);
}
function ym(t, e, n, r) {
  var a = n.points, o = n.offset || [0, 0], i = n.targetOffset || [0, 0], l = n.overflow, u = n.source || t;
  o = [].concat(o), i = [].concat(i), l = l || {};
  var s = {}, d = 0, c = !!(l && l.alwaysByViewport), v = Xc(u, c), f = Qc(u);
  tv(o, f), tv(i, e);
  var g = No(f, e, a, o, i), p = qe.merge(f, g);
  if (v && (l.adjustX || l.adjustY) && r) {
    if (l.adjustX && Jf(g, f, v)) {
      var y = Mo(a, /[lr]/gi, {
        l: "r",
        r: "l"
      }), h = Ao(o, 0), w = Ao(i, 0), C = No(f, e, y, h, w);
      q1(C, f, v) || (d = 1, a = y, o = h, i = w);
    }
    if (l.adjustY && Zf(g, f, v)) {
      var x = Mo(a, /[tb]/gi, {
        t: "b",
        b: "t"
      }), S = Ao(o, 1), b = Ao(i, 1), P = No(f, e, x, S, b);
      G1(P, f, v) || (d = 1, a = x, o = S, i = b);
    }
    d && (g = No(f, e, a, o, i), qe.mix(p, g));
    var T = Jf(g, f, v), O = Zf(g, f, v);
    if (T || O) {
      var D = a;
      T && (D = Mo(a, /[lr]/gi, {
        l: "r",
        r: "l"
      })), O && (D = Mo(a, /[tb]/gi, {
        t: "b",
        b: "t"
      })), a = D, o = n.offset || [0, 0], i = n.targetOffset || [0, 0];
    }
    s.adjustX = l.adjustX && T, s.adjustY = l.adjustY && O, (s.adjustX || s.adjustY) && (p = Y1(g, f, v, s));
  }
  return p.width !== f.width && qe.css(u, "width", qe.width(u) + p.width - f.width), p.height !== f.height && qe.css(u, "height", qe.height(u) + p.height - f.height), qe.offset(u, {
    left: p.left,
    top: p.top
  }, {
    useCssRight: n.useCssRight,
    useCssBottom: n.useCssBottom,
    useCssTransform: n.useCssTransform,
    ignoreShake: n.ignoreShake
  }), {
    points: a,
    offset: o,
    targetOffset: i,
    overflow: s
  };
}
function X1(t, e) {
  var n = Xc(t, e), r = Qc(t);
  return !n || r.left + r.width <= n.left || r.top + r.height <= n.top || r.left >= n.right || r.top >= n.bottom;
}
function Jc(t, e, n) {
  var r = n.target || e, a = Qc(r), o = !X1(r, n.overflow && n.overflow.alwaysByViewport);
  return ym(t, a, n, o);
}
Jc.__getOffsetParent = Lu;
Jc.__getVisibleRectForElement = Xc;
function Q1(t, e, n) {
  var r, a, o = qe.getDocument(t), i = o.defaultView || o.parentWindow, l = qe.getWindowScrollLeft(i), u = qe.getWindowScrollTop(i), s = qe.viewportWidth(i), d = qe.viewportHeight(i);
  "pageX" in e ? r = e.pageX : r = l + e.clientX, "pageY" in e ? a = e.pageY : a = u + e.clientY;
  var c = {
    left: r,
    top: a,
    width: 0,
    height: 0
  }, v = r >= 0 && r <= l + s && a >= 0 && a <= u + d, f = [n.points[0], "cc"];
  return ym(t, c, Hf(Hf({}, n), {}, {
    points: f
  }), v);
}
function Ct(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1, a = t;
  if (Array.isArray(t) && (a = yn(t)[0]), !a)
    return null;
  var o = Fi(a, e, r);
  return o.props = n ? k(k({}, o.props), e) : o.props, tr(Le(o.props.class) !== "object", "class must be string"), o;
}
const bm = function(t) {
  if (!t)
    return !1;
  if (t.offsetParent)
    return !0;
  if (t.getBBox) {
    var e = t.getBBox();
    if (e.width || e.height)
      return !0;
  }
  if (t.getBoundingClientRect) {
    var n = t.getBoundingClientRect();
    if (n.width || n.height)
      return !0;
  }
  return !1;
};
function J1(t, e) {
  return t === e ? !0 : !t || !e ? !1 : "pageX" in e && "pageY" in e ? t.pageX === e.pageX && t.pageY === e.pageY : "clientX" in e && "clientY" in e ? t.clientX === e.clientX && t.clientY === e.clientY : !1;
}
function Z1(t, e) {
  t !== document.activeElement && Gr(e, t) && typeof t.focus == "function" && t.focus();
}
function nv(t, e) {
  var n = null, r = null;
  function a(i) {
    var l = De(i, 1), u = l[0].target;
    if (!!document.documentElement.contains(u)) {
      var s = u.getBoundingClientRect(), d = s.width, c = s.height, v = Math.floor(d), f = Math.floor(c);
      (n !== v || r !== f) && Promise.resolve().then(function() {
        e({
          width: v,
          height: f
        });
      }), n = v, r = f;
    }
  }
  var o = new Jh(a);
  return t && o.observe(t), function() {
    o.disconnect();
  };
}
const ex = function(t, e) {
  var n = !1, r = null;
  function a() {
    clearTimeout(r);
  }
  function o(i) {
    if (!n || i === !0) {
      if (t() === !1)
        return;
      n = !0, a(), r = setTimeout(function() {
        n = !1;
      }, e.value);
    } else
      a(), r = setTimeout(function() {
        n = !1, o();
      }, e.value);
  }
  return [o, function() {
    n = !1, a();
  }];
};
function tx() {
  this.__data__ = [], this.size = 0;
}
function Zc(t, e) {
  return t === e || t !== t && e !== e;
}
function zi(t, e) {
  for (var n = t.length; n--; )
    if (Zc(t[n][0], e))
      return n;
  return -1;
}
var nx = Array.prototype, rx = nx.splice;
function ax(t) {
  var e = this.__data__, n = zi(e, t);
  if (n < 0)
    return !1;
  var r = e.length - 1;
  return n == r ? e.pop() : rx.call(e, n, 1), --this.size, !0;
}
function ox(t) {
  var e = this.__data__, n = zi(e, t);
  return n < 0 ? void 0 : e[n][1];
}
function ix(t) {
  return zi(this.__data__, t) > -1;
}
function lx(t, e) {
  var n = this.__data__, r = zi(n, t);
  return r < 0 ? (++this.size, n.push([t, e])) : n[r][1] = e, this;
}
function Hn(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++e < n; ) {
    var r = t[e];
    this.set(r[0], r[1]);
  }
}
Hn.prototype.clear = tx;
Hn.prototype.delete = ax;
Hn.prototype.get = ox;
Hn.prototype.has = ix;
Hn.prototype.set = lx;
function ux() {
  this.__data__ = new Hn(), this.size = 0;
}
function cx(t) {
  var e = this.__data__, n = e.delete(t);
  return this.size = e.size, n;
}
function sx(t) {
  return this.__data__.get(t);
}
function dx(t) {
  return this.__data__.has(t);
}
function Kn(t) {
  var e = typeof t;
  return t != null && (e == "object" || e == "function");
}
var fx = "[object AsyncFunction]", vx = "[object Function]", px = "[object GeneratorFunction]", hx = "[object Proxy]";
function Cm(t) {
  if (!Kn(t))
    return !1;
  var e = Er(t);
  return e == vx || e == px || e == fx || e == hx;
}
var gx = mn["__core-js_shared__"];
const Fl = gx;
var rv = function() {
  var t = /[^.]+$/.exec(Fl && Fl.keys && Fl.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
}();
function mx(t) {
  return !!rv && rv in t;
}
var yx = Function.prototype, bx = yx.toString;
function Fr(t) {
  if (t != null) {
    try {
      return bx.call(t);
    } catch {
    }
    try {
      return t + "";
    } catch {
    }
  }
  return "";
}
var Cx = /[\\^$.*+?()[\]{}|]/g, wx = /^\[object .+?Constructor\]$/, Sx = Function.prototype, xx = Object.prototype, Px = Sx.toString, Ox = xx.hasOwnProperty, Tx = RegExp(
  "^" + Px.call(Ox).replace(Cx, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Ix(t) {
  if (!Kn(t) || mx(t))
    return !1;
  var e = Cm(t) ? Tx : wx;
  return e.test(Fr(t));
}
function kx(t, e) {
  return t == null ? void 0 : t[e];
}
function Rr(t, e) {
  var n = kx(t, e);
  return Ix(n) ? n : void 0;
}
var _x = Rr(mn, "Map");
const Qa = _x;
var Ex = Rr(Object, "create");
const Ja = Ex;
function Nx() {
  this.__data__ = Ja ? Ja(null) : {}, this.size = 0;
}
function Mx(t) {
  var e = this.has(t) && delete this.__data__[t];
  return this.size -= e ? 1 : 0, e;
}
var Ax = "__lodash_hash_undefined__", Dx = Object.prototype, Fx = Dx.hasOwnProperty;
function Rx(t) {
  var e = this.__data__;
  if (Ja) {
    var n = e[t];
    return n === Ax ? void 0 : n;
  }
  return Fx.call(e, t) ? e[t] : void 0;
}
var $x = Object.prototype, Lx = $x.hasOwnProperty;
function jx(t) {
  var e = this.__data__;
  return Ja ? e[t] !== void 0 : Lx.call(e, t);
}
var Vx = "__lodash_hash_undefined__";
function Bx(t, e) {
  var n = this.__data__;
  return this.size += this.has(t) ? 0 : 1, n[t] = Ja && e === void 0 ? Vx : e, this;
}
function Tr(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++e < n; ) {
    var r = t[e];
    this.set(r[0], r[1]);
  }
}
Tr.prototype.clear = Nx;
Tr.prototype.delete = Mx;
Tr.prototype.get = Rx;
Tr.prototype.has = jx;
Tr.prototype.set = Bx;
function Kx() {
  this.size = 0, this.__data__ = {
    hash: new Tr(),
    map: new (Qa || Hn)(),
    string: new Tr()
  };
}
function Hx(t) {
  var e = typeof t;
  return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null;
}
function Wi(t, e) {
  var n = t.__data__;
  return Hx(e) ? n[typeof e == "string" ? "string" : "hash"] : n.map;
}
function zx(t) {
  var e = Wi(this, t).delete(t);
  return this.size -= e ? 1 : 0, e;
}
function Wx(t) {
  return Wi(this, t).get(t);
}
function Ux(t) {
  return Wi(this, t).has(t);
}
function Yx(t, e) {
  var n = Wi(this, t), r = n.size;
  return n.set(t, e), this.size += n.size == r ? 0 : 1, this;
}
function zn(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++e < n; ) {
    var r = t[e];
    this.set(r[0], r[1]);
  }
}
zn.prototype.clear = Kx;
zn.prototype.delete = zx;
zn.prototype.get = Wx;
zn.prototype.has = Ux;
zn.prototype.set = Yx;
var qx = 200;
function Gx(t, e) {
  var n = this.__data__;
  if (n instanceof Hn) {
    var r = n.__data__;
    if (!Qa || r.length < qx - 1)
      return r.push([t, e]), this.size = ++n.size, this;
    n = this.__data__ = new zn(r);
  }
  return n.set(t, e), this.size = n.size, this;
}
function kn(t) {
  var e = this.__data__ = new Hn(t);
  this.size = e.size;
}
kn.prototype.clear = ux;
kn.prototype.delete = cx;
kn.prototype.get = sx;
kn.prototype.has = dx;
kn.prototype.set = Gx;
var Xx = "__lodash_hash_undefined__";
function Qx(t) {
  return this.__data__.set(t, Xx), this;
}
function Jx(t) {
  return this.__data__.has(t);
}
function da(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.__data__ = new zn(); ++e < n; )
    this.add(t[e]);
}
da.prototype.add = da.prototype.push = Qx;
da.prototype.has = Jx;
function Zx(t, e) {
  for (var n = -1, r = t == null ? 0 : t.length; ++n < r; )
    if (e(t[n], n, t))
      return !0;
  return !1;
}
function mi(t, e) {
  return t.has(e);
}
var eP = 1, tP = 2;
function wm(t, e, n, r, a, o) {
  var i = n & eP, l = t.length, u = e.length;
  if (l != u && !(i && u > l))
    return !1;
  var s = o.get(t), d = o.get(e);
  if (s && d)
    return s == e && d == t;
  var c = -1, v = !0, f = n & tP ? new da() : void 0;
  for (o.set(t, e), o.set(e, t); ++c < l; ) {
    var g = t[c], p = e[c];
    if (r)
      var y = i ? r(p, g, c, e, t, o) : r(g, p, c, t, e, o);
    if (y !== void 0) {
      if (y)
        continue;
      v = !1;
      break;
    }
    if (f) {
      if (!Zx(e, function(h, w) {
        if (!mi(f, w) && (g === h || a(g, h, n, r, o)))
          return f.push(w);
      })) {
        v = !1;
        break;
      }
    } else if (!(g === p || a(g, p, n, r, o))) {
      v = !1;
      break;
    }
  }
  return o.delete(t), o.delete(e), v;
}
var nP = mn.Uint8Array;
const yi = nP;
function rP(t) {
  var e = -1, n = Array(t.size);
  return t.forEach(function(r, a) {
    n[++e] = [a, r];
  }), n;
}
function es(t) {
  var e = -1, n = Array(t.size);
  return t.forEach(function(r) {
    n[++e] = r;
  }), n;
}
var aP = 1, oP = 2, iP = "[object Boolean]", lP = "[object Date]", uP = "[object Error]", cP = "[object Map]", sP = "[object Number]", dP = "[object RegExp]", fP = "[object Set]", vP = "[object String]", pP = "[object Symbol]", hP = "[object ArrayBuffer]", gP = "[object DataView]", av = un ? un.prototype : void 0, Rl = av ? av.valueOf : void 0;
function mP(t, e, n, r, a, o, i) {
  switch (n) {
    case gP:
      if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset)
        return !1;
      t = t.buffer, e = e.buffer;
    case hP:
      return !(t.byteLength != e.byteLength || !o(new yi(t), new yi(e)));
    case iP:
    case lP:
    case sP:
      return Zc(+t, +e);
    case uP:
      return t.name == e.name && t.message == e.message;
    case dP:
    case vP:
      return t == e + "";
    case cP:
      var l = rP;
    case fP:
      var u = r & aP;
      if (l || (l = es), t.size != e.size && !u)
        return !1;
      var s = i.get(t);
      if (s)
        return s == e;
      r |= oP, i.set(t, e);
      var d = wm(l(t), l(e), r, a, o, i);
      return i.delete(t), d;
    case pP:
      if (Rl)
        return Rl.call(t) == Rl.call(e);
  }
  return !1;
}
function ts(t, e) {
  for (var n = -1, r = e.length, a = t.length; ++n < r; )
    t[a + n] = e[n];
  return t;
}
var yP = Array.isArray;
const cn = yP;
function Sm(t, e, n) {
  var r = e(t);
  return cn(t) ? r : ts(r, n(t));
}
function bP(t, e) {
  for (var n = -1, r = t == null ? 0 : t.length, a = 0, o = []; ++n < r; ) {
    var i = t[n];
    e(i, n, t) && (o[a++] = i);
  }
  return o;
}
function xm() {
  return [];
}
var CP = Object.prototype, wP = CP.propertyIsEnumerable, ov = Object.getOwnPropertySymbols, SP = ov ? function(t) {
  return t == null ? [] : (t = Object(t), bP(ov(t), function(e) {
    return wP.call(t, e);
  }));
} : xm;
const ns = SP;
function xP(t, e) {
  for (var n = -1, r = Array(t); ++n < t; )
    r[n] = e(n);
  return r;
}
var PP = "[object Arguments]";
function iv(t) {
  return _n(t) && Er(t) == PP;
}
var Pm = Object.prototype, OP = Pm.hasOwnProperty, TP = Pm.propertyIsEnumerable, IP = iv(function() {
  return arguments;
}()) ? iv : function(t) {
  return _n(t) && OP.call(t, "callee") && !TP.call(t, "callee");
};
const rs = IP;
function kP() {
  return !1;
}
var Om = typeof exports == "object" && exports && !exports.nodeType && exports, lv = Om && typeof module == "object" && module && !module.nodeType && module, _P = lv && lv.exports === Om, uv = _P ? mn.Buffer : void 0, EP = uv ? uv.isBuffer : void 0, NP = EP || kP;
const bi = NP;
var MP = 9007199254740991, AP = /^(?:0|[1-9]\d*)$/;
function Tm(t, e) {
  var n = typeof t;
  return e = e == null ? MP : e, !!e && (n == "number" || n != "symbol" && AP.test(t)) && t > -1 && t % 1 == 0 && t < e;
}
var DP = 9007199254740991;
function as(t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= DP;
}
var FP = "[object Arguments]", RP = "[object Array]", $P = "[object Boolean]", LP = "[object Date]", jP = "[object Error]", VP = "[object Function]", BP = "[object Map]", KP = "[object Number]", HP = "[object Object]", zP = "[object RegExp]", WP = "[object Set]", UP = "[object String]", YP = "[object WeakMap]", qP = "[object ArrayBuffer]", GP = "[object DataView]", XP = "[object Float32Array]", QP = "[object Float64Array]", JP = "[object Int8Array]", ZP = "[object Int16Array]", eO = "[object Int32Array]", tO = "[object Uint8Array]", nO = "[object Uint8ClampedArray]", rO = "[object Uint16Array]", aO = "[object Uint32Array]", bt = {};
bt[XP] = bt[QP] = bt[JP] = bt[ZP] = bt[eO] = bt[tO] = bt[nO] = bt[rO] = bt[aO] = !0;
bt[FP] = bt[RP] = bt[qP] = bt[$P] = bt[GP] = bt[LP] = bt[jP] = bt[VP] = bt[BP] = bt[KP] = bt[HP] = bt[zP] = bt[WP] = bt[UP] = bt[YP] = !1;
function oO(t) {
  return _n(t) && as(t.length) && !!bt[Er(t)];
}
function Ui(t) {
  return function(e) {
    return t(e);
  };
}
var Im = typeof exports == "object" && exports && !exports.nodeType && exports, La = Im && typeof module == "object" && module && !module.nodeType && module, iO = La && La.exports === Im, $l = iO && ng.process, lO = function() {
  try {
    var t = La && La.require && La.require("util").types;
    return t || $l && $l.binding && $l.binding("util");
  } catch {
  }
}();
const fa = lO;
var cv = fa && fa.isTypedArray, uO = cv ? Ui(cv) : oO;
const km = uO;
var cO = Object.prototype, sO = cO.hasOwnProperty;
function _m(t, e) {
  var n = cn(t), r = !n && rs(t), a = !n && !r && bi(t), o = !n && !r && !a && km(t), i = n || r || a || o, l = i ? xP(t.length, String) : [], u = l.length;
  for (var s in t)
    (e || sO.call(t, s)) && !(i && (s == "length" || a && (s == "offset" || s == "parent") || o && (s == "buffer" || s == "byteLength" || s == "byteOffset") || Tm(s, u))) && l.push(s);
  return l;
}
var dO = Object.prototype;
function os(t) {
  var e = t && t.constructor, n = typeof e == "function" && e.prototype || dO;
  return t === n;
}
var fO = ag(Object.keys, Object);
const vO = fO;
var pO = Object.prototype, hO = pO.hasOwnProperty;
function gO(t) {
  if (!os(t))
    return vO(t);
  var e = [];
  for (var n in Object(t))
    hO.call(t, n) && n != "constructor" && e.push(n);
  return e;
}
function fo(t) {
  return t != null && as(t.length) && !Cm(t);
}
function ma(t) {
  return fo(t) ? _m(t) : gO(t);
}
function ju(t) {
  return Sm(t, ma, ns);
}
var mO = 1, yO = Object.prototype, bO = yO.hasOwnProperty;
function CO(t, e, n, r, a, o) {
  var i = n & mO, l = ju(t), u = l.length, s = ju(e), d = s.length;
  if (u != d && !i)
    return !1;
  for (var c = u; c--; ) {
    var v = l[c];
    if (!(i ? v in e : bO.call(e, v)))
      return !1;
  }
  var f = o.get(t), g = o.get(e);
  if (f && g)
    return f == e && g == t;
  var p = !0;
  o.set(t, e), o.set(e, t);
  for (var y = i; ++c < u; ) {
    v = l[c];
    var h = t[v], w = e[v];
    if (r)
      var C = i ? r(w, h, v, e, t, o) : r(h, w, v, t, e, o);
    if (!(C === void 0 ? h === w || a(h, w, n, r, o) : C)) {
      p = !1;
      break;
    }
    y || (y = v == "constructor");
  }
  if (p && !y) {
    var x = t.constructor, S = e.constructor;
    x != S && "constructor" in t && "constructor" in e && !(typeof x == "function" && x instanceof x && typeof S == "function" && S instanceof S) && (p = !1);
  }
  return o.delete(t), o.delete(e), p;
}
var wO = Rr(mn, "DataView");
const Vu = wO;
var SO = Rr(mn, "Promise");
const Bu = SO;
var xO = Rr(mn, "Set");
const ra = xO;
var PO = Rr(mn, "WeakMap");
const Ku = PO;
var sv = "[object Map]", OO = "[object Object]", dv = "[object Promise]", fv = "[object Set]", vv = "[object WeakMap]", pv = "[object DataView]", TO = Fr(Vu), IO = Fr(Qa), kO = Fr(Bu), _O = Fr(ra), EO = Fr(Ku), yr = Er;
(Vu && yr(new Vu(new ArrayBuffer(1))) != pv || Qa && yr(new Qa()) != sv || Bu && yr(Bu.resolve()) != dv || ra && yr(new ra()) != fv || Ku && yr(new Ku()) != vv) && (yr = function(t) {
  var e = Er(t), n = e == OO ? t.constructor : void 0, r = n ? Fr(n) : "";
  if (r)
    switch (r) {
      case TO:
        return pv;
      case IO:
        return sv;
      case kO:
        return dv;
      case _O:
        return fv;
      case EO:
        return vv;
    }
  return e;
});
const Za = yr;
var NO = 1, hv = "[object Arguments]", gv = "[object Array]", Do = "[object Object]", MO = Object.prototype, mv = MO.hasOwnProperty;
function AO(t, e, n, r, a, o) {
  var i = cn(t), l = cn(e), u = i ? gv : Za(t), s = l ? gv : Za(e);
  u = u == hv ? Do : u, s = s == hv ? Do : s;
  var d = u == Do, c = s == Do, v = u == s;
  if (v && bi(t)) {
    if (!bi(e))
      return !1;
    i = !0, d = !1;
  }
  if (v && !d)
    return o || (o = new kn()), i || km(t) ? wm(t, e, n, r, a, o) : mP(t, e, u, n, r, a, o);
  if (!(n & NO)) {
    var f = d && mv.call(t, "__wrapped__"), g = c && mv.call(e, "__wrapped__");
    if (f || g) {
      var p = f ? t.value() : t, y = g ? e.value() : e;
      return o || (o = new kn()), a(p, y, n, r, o);
    }
  }
  return v ? (o || (o = new kn()), CO(t, e, n, r, a, o)) : !1;
}
function Yi(t, e, n, r, a) {
  return t === e ? !0 : t == null || e == null || !_n(t) && !_n(e) ? t !== t && e !== e : AO(t, e, n, r, Yi, a);
}
function is(t, e) {
  return Yi(t, e);
}
var DO = {
  align: Object,
  target: [Object, Function],
  onAlign: Function,
  monitorBufferTime: Number,
  monitorWindowResize: Boolean,
  disabled: Boolean
};
function yv(t) {
  return typeof t != "function" ? null : t();
}
function bv(t) {
  return Le(t) !== "object" || !t ? null : t;
}
const FO = pe({
  name: "Align",
  props: DO,
  emits: ["align"],
  setup: function(e, n) {
    var r = n.expose, a = n.slots, o = G({}), i = G(), l = ex(function() {
      var p = e.disabled, y = e.target, h = e.align, w = e.onAlign;
      if (!p && y && i.value) {
        var C = i.value, x, S = yv(y), b = bv(y);
        o.value.element = S, o.value.point = b, o.value.align = h;
        var P = document, T = P.activeElement;
        return S && bm(S) ? x = Jc(C, S, h) : b && (x = Q1(C, b, h)), Z1(T, C), w && x && w(C, x), !0;
      }
      return !1;
    }, F(function() {
      return e.monitorBufferTime;
    })), u = De(l, 2), s = u[0], d = u[1], c = G({
      cancel: function() {
      }
    }), v = G({
      cancel: function() {
      }
    }), f = function() {
      var y = e.target, h = yv(y), w = bv(y);
      i.value !== v.value.element && (v.value.cancel(), v.value.element = i.value, v.value.cancel = nv(i.value, s)), (o.value.element !== h || !J1(o.value.point, w) || !is(o.value.align, e.align)) && (s(), c.value.element !== h && (c.value.cancel(), c.value.element = h, c.value.cancel = nv(h, s)));
    };
    dt(function() {
      vt(function() {
        f();
      });
    }), kr(function() {
      vt(function() {
        f();
      });
    }), Ce(function() {
      return e.disabled;
    }, function(p) {
      p ? d() : s();
    }, {
      immediate: !0,
      flush: "post"
    });
    var g = G(null);
    return Ce(function() {
      return e.monitorWindowResize;
    }, function(p) {
      p ? g.value || (g.value = Ea(window, "resize", s)) : g.value && (g.value.remove(), g.value = null);
    }, {
      flush: "post"
    }), va(function() {
      c.value.cancel(), v.value.cancel(), g.value && g.value.remove(), d();
    }), r({
      forceAlign: function() {
        return s(!0);
      }
    }), function() {
      var p = a == null ? void 0 : a.default();
      return p ? Ct(p[0], {
        ref: i
      }, !0, !0) : null;
    };
  }
}), RO = pe({
  name: "PopupInner",
  inheritAttrs: !1,
  props: Yc,
  emits: ["mouseenter", "mouseleave", "mousedown", "touchstart", "align"],
  setup: function(e, n) {
    var r = n.expose, a = n.attrs, o = n.slots, i = G(), l = G(), u = G(), s = P1(ze(e, "stretch")), d = De(s, 2), c = d[0], v = d[1], f = function() {
      e.stretch && v(e.getRootDomNode());
    }, g = G(!1), p;
    Ce(function() {
      return e.visible;
    }, function(V) {
      clearTimeout(p), V ? p = setTimeout(function() {
        g.value = e.visible;
      }) : g.value = !1;
    }, {
      immediate: !0
    });
    var y = x1(g, f), h = De(y, 2), w = h[0], C = h[1], x = G(), S = function() {
      return e.point ? e.point : e.getRootDomNode;
    }, b = function() {
      var K;
      (K = i.value) === null || K === void 0 || K.forceAlign();
    }, P = function(K, R) {
      var E, M = e.getClassNameFromAlign(R), N = u.value;
      u.value !== M && (u.value = M), w.value === "align" && (N !== M ? Promise.resolve().then(function() {
        b();
      }) : C(function() {
        var _;
        (_ = x.value) === null || _ === void 0 || _.call(x);
      }), (E = e.onAlign) === null || E === void 0 || E.call(e, K, R));
    }, T = F(function() {
      var V = Le(e.animation) === "object" ? e.animation : cm(e);
      return ["onAfterEnter", "onAfterLeave"].forEach(function(K) {
        var R = V[K];
        V[K] = function(E) {
          C(), w.value = "stable", R == null || R(E);
        };
      }), V;
    }), O = function() {
      return new Promise(function(K) {
        x.value = K;
      });
    };
    Ce([T, w], function() {
      !T.value && w.value === "motion" && C();
    }, {
      immediate: !0
    }), r({
      forceAlign: b,
      getElement: function() {
        return l.value.$el || l.value;
      }
    });
    var D = F(function() {
      var V;
      return !(((V = e.align) === null || V === void 0 ? void 0 : V.points) && (w.value === "align" || w.value === "stable"));
    });
    return function() {
      var V, K = e.zIndex, R = e.align, E = e.prefixCls, M = e.destroyPopupOnHide, N = e.onMouseenter, _ = e.onMouseleave, I = e.onTouchstart, A = I === void 0 ? function() {
      } : I, B = e.onMousedown, W = w.value, U = [k(k({}, c.value), {
        zIndex: K,
        opacity: W === "motion" || W === "stable" || !g.value ? null : 0,
        pointerEvents: !g.value && W !== "stable" ? "none" : null
      }), a.style], z = Kt((V = o.default) === null || V === void 0 ? void 0 : V.call(o, {
        visible: e.visible
      }));
      z.length > 1 && (z = m("div", {
        class: "".concat(E, "-content")
      }, [z]));
      var L = ge(E, a.class, u.value), $ = g.value || !e.visible, q = $ ? Mc(T.value.name, T.value) : {};
      return m(_r, Y(Y({
        ref: l
      }, q), {}, {
        onBeforeEnter: O
      }), {
        default: function() {
          return !M || e.visible ? gn(m(FO, {
            target: S(),
            key: "popup",
            ref: i,
            monitorWindowResize: !0,
            disabled: D.value,
            align: R,
            onAlign: P
          }, {
            default: function() {
              return m("div", Y(Y({
                class: L,
                onMouseenter: N,
                onMouseleave: _,
                onMousedown: Jd(B, ["capture"])
              }, j({}, Wt ? "onTouchstartPassive" : "onTouchstart", Jd(A, ["capture"]))), {}, {
                style: U
              }), [z]);
            }
          }), [[uo, g.value]]) : null;
        }
      });
    };
  }
}), $O = pe({
  name: "Popup",
  inheritAttrs: !1,
  props: C1,
  setup: function(e, n) {
    var r = n.attrs, a = n.slots, o = n.expose, i = G(!1), l = G(!1), u = G();
    return Ce([function() {
      return e.visible;
    }, function() {
      return e.mobile;
    }], function() {
      i.value = e.visible, e.visible && e.mobile && (l.value = !0);
    }, {
      immediate: !0,
      flush: "post"
    }), o({
      forceAlign: function() {
        var d;
        (d = u.value) === null || d === void 0 || d.forceAlign();
      },
      getElement: function() {
        var d;
        return (d = u.value) === null || d === void 0 ? void 0 : d.getElement();
      }
    }), function() {
      var s = k(k(k({}, e), r), {
        visible: i.value
      }), d = l.value ? m(w1, Y(Y({}, s), {}, {
        mobile: e.mobile,
        ref: u
      }), {
        default: a.default
      }) : m(RO, Y(Y({}, s), {}, {
        ref: u
      }), {
        default: a.default
      });
      return m("div", null, [m(sm, s, null), d]);
    };
  }
});
function LO(t, e, n) {
  return n ? t[0] === e[0] : t[0] === e[0] && t[1] === e[1];
}
function Cv(t, e, n) {
  var r = t[e] || {};
  return k(k({}, r), n);
}
function jO(t, e, n, r) {
  for (var a = n.points, o = Object.keys(t), i = 0; i < o.length; i += 1) {
    var l = o[i];
    if (LO(t[l].points, a, r))
      return "".concat(e, "-placement-").concat(l);
  }
  return "";
}
const Em = {
  methods: {
    setState: function() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 ? arguments[1] : void 0, r = typeof e == "function" ? e(this.$data, this.$props) : e;
      if (this.getDerivedStateFromProps) {
        var a = this.getDerivedStateFromProps(MC(this), k(k({}, this.$data), r));
        if (a === null)
          return;
        r = k(k({}, r), a || {});
      }
      k(this.$data, r), this._.isMounted && this.$forceUpdate(), vt(function() {
        n && n();
      });
    },
    __emit: function() {
      var e = [].slice.call(arguments, 0), n = e[0];
      n = "on".concat(n[0].toUpperCase()).concat(n.substring(1));
      var r = this.$props[n] || this.$attrs[n];
      if (e.length && r)
        if (Array.isArray(r))
          for (var a = 0, o = r.length; a < o; a++)
            r[a].apply(r, Ie(e.slice(1)));
        else
          r.apply(void 0, Ie(e.slice(1)));
    }
  }
};
var Nm = Symbol("TriggerContextKey"), Mm = function() {
  var e = null;
  return ct(Nm, {
    setPortal: function(r) {
      e = r;
    },
    popPortal: !0
  }), function() {
    return e;
  };
}, VO = function() {
  return ut(Nm, {
    setPortal: function() {
    },
    popPortal: !1
  });
}, Am = Symbol("PortalContextKey"), Dm = function(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    inTriggerContext: !0
  };
  ct(Am, {
    inTriggerContext: n.inTriggerContext,
    shouldRender: F(function() {
      var r = e || {}, a = r.sPopupVisible, o = r.popupRef, i = r.forceRender, l = r.autoDestroy, u = !1;
      return (a || o || i) && (u = !0), !a && l && (u = !1), u;
    })
  });
}, BO = function() {
  Dm({}, {
    inTriggerContext: !1
  });
  var e = ut(Am, {
    shouldRender: F(function() {
      return !1;
    }),
    inTriggerContext: !1
  });
  return {
    shouldRender: F(function() {
      return e.shouldRender.value || e.inTriggerContext === !1;
    })
  };
};
const wv = pe({
  name: "Portal",
  inheritAttrs: !1,
  props: {
    getContainer: Q.func.isRequired,
    didUpdate: Function
  },
  setup: function(e, n) {
    var r = n.slots, a = !0, o, i = BO(), l = i.shouldRender;
    I0(function() {
      a = !1, l.value && (o = e.getContainer());
    });
    var u = Ce(l, function() {
      l.value && !o && (o = e.getContainer()), o && u();
    });
    return kr(function() {
      vt(function() {
        var s;
        l.value && ((s = e.didUpdate) === null || s === void 0 || s.call(e, e));
      });
    }), ht(function() {
      o && o.parentNode && o.parentNode.removeChild(o);
    }), function() {
      var s;
      return l.value ? a ? (s = r.default) === null || s === void 0 ? void 0 : s.call(r) : o ? m(Pc, {
        to: o
      }, r) : null : null;
    };
  }
});
function Sv() {
}
function KO() {
  return "";
}
function HO(t) {
  return t ? t.ownerDocument : window.document;
}
var zO = ["onClick", "onMousedown", "onTouchstart", "onMouseenter", "onMouseleave", "onFocus", "onBlur", "onContextmenu"];
const vo = pe({
  name: "Trigger",
  mixins: [Em],
  inheritAttrs: !1,
  props: {
    action: Q.oneOfType([Q.string, Q.arrayOf(Q.string)]).def([]),
    showAction: Q.any.def([]),
    hideAction: Q.any.def([]),
    getPopupClassNameFromAlign: Q.any.def(KO),
    onPopupVisibleChange: Function,
    afterPopupVisibleChange: Q.func.def(Sv),
    popup: Q.any,
    popupStyle: {
      type: Object,
      default: void 0
    },
    prefixCls: Q.string.def("rc-trigger-popup"),
    popupClassName: Q.string.def(""),
    popupPlacement: String,
    builtinPlacements: Q.object,
    popupTransitionName: String,
    popupAnimation: Q.any,
    mouseEnterDelay: Q.number.def(0),
    mouseLeaveDelay: Q.number.def(0.1),
    zIndex: Number,
    focusDelay: Q.number.def(0),
    blurDelay: Q.number.def(0.15),
    getPopupContainer: Function,
    getDocument: Q.func.def(HO),
    forceRender: {
      type: Boolean,
      default: void 0
    },
    destroyPopupOnHide: {
      type: Boolean,
      default: !1
    },
    mask: {
      type: Boolean,
      default: !1
    },
    maskClosable: {
      type: Boolean,
      default: !0
    },
    popupAlign: Q.object.def(function() {
      return {};
    }),
    popupVisible: {
      type: Boolean,
      default: void 0
    },
    defaultPopupVisible: {
      type: Boolean,
      default: !1
    },
    maskTransitionName: String,
    maskAnimation: String,
    stretch: String,
    alignPoint: {
      type: Boolean,
      default: void 0
    },
    autoDestroy: {
      type: Boolean,
      default: !1
    },
    mobile: Object,
    getTriggerDOMNode: Function
  },
  setup: function(e) {
    var n = F(function() {
      var u = e.popupPlacement, s = e.popupAlign, d = e.builtinPlacements;
      return u && d ? Cv(d, u, s) : s;
    }), r = VO(), a = r.setPortal, o = r.popPortal, i = G(null), l = function(s) {
      i.value = s;
    };
    return {
      popPortal: o,
      setPortal: a,
      vcTriggerContext: ut("vcTriggerContext", {}),
      popupRef: i,
      setPopupRef: l,
      triggerRef: G(null),
      align: n,
      focusTime: null,
      clickOutsideHandler: null,
      contextmenuOutsideHandler1: null,
      contextmenuOutsideHandler2: null,
      touchOutsideHandler: null,
      attachId: null,
      delayTimer: null,
      hasPopupMouseDown: !1,
      preClickTime: null,
      preTouchTime: null,
      mouseDownTimeout: null,
      childOriginEvents: {}
    };
  },
  data: function() {
    var e = this, n, r, a = this.$props, o;
    return this.popupVisible !== void 0 ? o = !!a.popupVisible : o = !!a.defaultPopupVisible, zO.forEach(function(i) {
      e["fire".concat(i)] = function(l) {
        e.fireEvents(i, l);
      };
    }), (r = (n = this).setPortal) === null || r === void 0 || r.call(n, m(wv, {
      key: "portal",
      getContainer: this.getContainer,
      didUpdate: this.handlePortalUpdate
    }, {
      default: this.getComponent
    })), {
      prevPopupVisible: o,
      sPopupVisible: o,
      point: null
    };
  },
  watch: {
    popupVisible: function(e) {
      e !== void 0 && (this.prevPopupVisible = this.sPopupVisible, this.sPopupVisible = e);
    }
  },
  created: function() {
    ct("vcTriggerContext", {
      onPopupMouseDown: this.onPopupMouseDown
    }), Dm(this);
  },
  deactivated: function() {
    this.setPopupVisible(!1);
  },
  mounted: function() {
    var e = this;
    this.$nextTick(function() {
      e.updatedCal();
    });
  },
  updated: function() {
    var e = this;
    this.$nextTick(function() {
      e.updatedCal();
    });
  },
  beforeUnmount: function() {
    this.clearDelayTimer(), this.clearOutsideHandler(), clearTimeout(this.mouseDownTimeout), tt.cancel(this.attachId);
  },
  methods: {
    updatedCal: function() {
      var e = this.$props, n = this.$data;
      if (n.sPopupVisible) {
        var r;
        !this.clickOutsideHandler && (this.isClickToHide() || this.isContextmenuToShow()) && (r = e.getDocument(this.getRootDomNode()), this.clickOutsideHandler = Ea(r, "mousedown", this.onDocumentClick)), this.touchOutsideHandler || (r = r || e.getDocument(this.getRootDomNode()), this.touchOutsideHandler = Ea(r, "touchstart", this.onDocumentClick, Wt ? {
          passive: !1
        } : !1)), !this.contextmenuOutsideHandler1 && this.isContextmenuToShow() && (r = r || e.getDocument(this.getRootDomNode()), this.contextmenuOutsideHandler1 = Ea(r, "scroll", this.onContextmenuClose)), !this.contextmenuOutsideHandler2 && this.isContextmenuToShow() && (this.contextmenuOutsideHandler2 = Ea(window, "blur", this.onContextmenuClose));
      } else
        this.clearOutsideHandler();
    },
    onMouseenter: function(e) {
      var n = this.$props.mouseEnterDelay;
      this.fireEvents("onMouseenter", e), this.delaySetPopupVisible(!0, n, n ? null : e);
    },
    onMouseMove: function(e) {
      this.fireEvents("onMousemove", e), this.setPoint(e);
    },
    onMouseleave: function(e) {
      this.fireEvents("onMouseleave", e), this.delaySetPopupVisible(!1, this.$props.mouseLeaveDelay);
    },
    onPopupMouseenter: function() {
      this.clearDelayTimer();
    },
    onPopupMouseleave: function(e) {
      var n;
      e && e.relatedTarget && !e.relatedTarget.setTimeout && Gr((n = this.popupRef) === null || n === void 0 ? void 0 : n.getElement(), e.relatedTarget) || this.delaySetPopupVisible(!1, this.$props.mouseLeaveDelay);
    },
    onFocus: function(e) {
      this.fireEvents("onFocus", e), this.clearDelayTimer(), this.isFocusToShow() && (this.focusTime = Date.now(), this.delaySetPopupVisible(!0, this.$props.focusDelay));
    },
    onMousedown: function(e) {
      this.fireEvents("onMousedown", e), this.preClickTime = Date.now();
    },
    onTouchstart: function(e) {
      this.fireEvents("onTouchstart", e), this.preTouchTime = Date.now();
    },
    onBlur: function(e) {
      Gr(e.target, e.relatedTarget || document.activeElement) || (this.fireEvents("onBlur", e), this.clearDelayTimer(), this.isBlurToHide() && this.delaySetPopupVisible(!1, this.$props.blurDelay));
    },
    onContextmenu: function(e) {
      e.preventDefault(), this.fireEvents("onContextmenu", e), this.setPopupVisible(!0, e);
    },
    onContextmenuClose: function() {
      this.isContextmenuToShow() && this.close();
    },
    onClick: function(e) {
      if (this.fireEvents("onClick", e), this.focusTime) {
        var n;
        if (this.preClickTime && this.preTouchTime ? n = Math.min(this.preClickTime, this.preTouchTime) : this.preClickTime ? n = this.preClickTime : this.preTouchTime && (n = this.preTouchTime), Math.abs(n - this.focusTime) < 20)
          return;
        this.focusTime = 0;
      }
      this.preClickTime = 0, this.preTouchTime = 0, this.isClickToShow() && (this.isClickToHide() || this.isBlurToHide()) && e && e.preventDefault && e.preventDefault(), e && e.domEvent && e.domEvent.preventDefault();
      var r = !this.$data.sPopupVisible;
      (this.isClickToHide() && !r || r && this.isClickToShow()) && this.setPopupVisible(!this.$data.sPopupVisible, e);
    },
    onPopupMouseDown: function() {
      var e = this, n = this.vcTriggerContext, r = n === void 0 ? {} : n;
      this.hasPopupMouseDown = !0, clearTimeout(this.mouseDownTimeout), this.mouseDownTimeout = setTimeout(function() {
        e.hasPopupMouseDown = !1;
      }, 0), r.onPopupMouseDown && r.onPopupMouseDown.apply(r, arguments);
    },
    onDocumentClick: function(e) {
      if (!(this.$props.mask && !this.$props.maskClosable)) {
        var n = e.target, r = this.getRootDomNode(), a = this.getPopupDomNode();
        (!Gr(r, n) || this.isContextMenuOnly()) && !Gr(a, n) && !this.hasPopupMouseDown && this.delaySetPopupVisible(!1, 0.1);
      }
    },
    getPopupDomNode: function() {
      var e;
      return ((e = this.popupRef) === null || e === void 0 ? void 0 : e.getElement()) || null;
    },
    getRootDomNode: function() {
      var e = this.$props.getTriggerDOMNode;
      if (e) {
        var n = wr(this.triggerRef);
        return wr(e(n));
      }
      try {
        var r = wr(this.triggerRef);
        if (r)
          return r;
      } catch {
      }
      return wr(this);
    },
    handleGetPopupClassFromAlign: function(e) {
      var n = [], r = this.$props, a = r.popupPlacement, o = r.builtinPlacements, i = r.prefixCls, l = r.alignPoint, u = r.getPopupClassNameFromAlign;
      return a && o && n.push(jO(o, i, e, l)), u && n.push(u(e)), n.join(" ");
    },
    getPopupAlign: function() {
      var e = this.$props, n = e.popupPlacement, r = e.popupAlign, a = e.builtinPlacements;
      return n && a ? Cv(a, n, r) : r;
    },
    getComponent: function() {
      var e = this, n = {};
      this.isMouseEnterToShow() && (n.onMouseenter = this.onPopupMouseenter), this.isMouseLeaveToHide() && (n.onMouseleave = this.onPopupMouseleave), n.onMousedown = this.onPopupMouseDown, n[Wt ? "onTouchstartPassive" : "onTouchstart"] = this.onPopupMouseDown;
      var r = this.handleGetPopupClassFromAlign, a = this.getRootDomNode, o = this.getContainer, i = this.$attrs, l = this.$props, u = l.prefixCls, s = l.destroyPopupOnHide, d = l.popupClassName, c = l.popupAnimation, v = l.popupTransitionName, f = l.popupStyle, g = l.mask, p = l.maskAnimation, y = l.maskTransitionName, h = l.zIndex, w = l.stretch, C = l.alignPoint, x = l.mobile, S = l.forceRender, b = this.$data, P = b.sPopupVisible, T = b.point, O = k(k({
        prefixCls: u,
        destroyPopupOnHide: s,
        visible: P,
        point: C ? T : null,
        align: this.align,
        animation: c,
        getClassNameFromAlign: r,
        stretch: w,
        getRootDomNode: a,
        mask: g,
        zIndex: h,
        transitionName: v,
        maskAnimation: p,
        maskTransitionName: y,
        getContainer: o,
        class: d,
        style: f,
        onAlign: i.onPopupAlign || Sv
      }, n), {
        ref: this.setPopupRef,
        mobile: x,
        forceRender: S
      });
      return m($O, O, {
        default: this.$slots.popup || function() {
          return lg(e, "popup");
        }
      });
    },
    attachParent: function(e) {
      var n = this;
      tt.cancel(this.attachId);
      var r = this.$props, a = r.getPopupContainer, o = r.getDocument, i = this.getRootDomNode(), l;
      a ? (i || a.length === 0) && (l = a(i)) : l = o(this.getRootDomNode()).body, l ? l.appendChild(e) : this.attachId = tt(function() {
        n.attachParent(e);
      });
    },
    getContainer: function() {
      var e = this.$props, n = e.getDocument, r = n(this.getRootDomNode()).createElement("div");
      return r.style.position = "absolute", r.style.top = "0", r.style.left = "0", r.style.width = "100%", this.attachParent(r), r;
    },
    setPopupVisible: function(e, n) {
      var r = this.alignPoint, a = this.sPopupVisible, o = this.onPopupVisibleChange;
      this.clearDelayTimer(), a !== e && (Yr(this, "popupVisible") || this.setState({
        sPopupVisible: e,
        prevPopupVisible: a
      }), o && o(e)), r && n && e && this.setPoint(n);
    },
    setPoint: function(e) {
      var n = this.$props.alignPoint;
      !n || !e || this.setState({
        point: {
          pageX: e.pageX,
          pageY: e.pageY
        }
      });
    },
    handlePortalUpdate: function() {
      this.prevPopupVisible !== this.sPopupVisible && this.afterPopupVisibleChange(this.sPopupVisible);
    },
    delaySetPopupVisible: function(e, n, r) {
      var a = this, o = n * 1e3;
      if (this.clearDelayTimer(), o) {
        var i = r ? {
          pageX: r.pageX,
          pageY: r.pageY
        } : null;
        this.delayTimer = y1(function() {
          a.setPopupVisible(e, i), a.clearDelayTimer();
        }, o);
      } else
        this.setPopupVisible(e, r);
    },
    clearDelayTimer: function() {
      this.delayTimer && (m1(this.delayTimer), this.delayTimer = null);
    },
    clearOutsideHandler: function() {
      this.clickOutsideHandler && (this.clickOutsideHandler.remove(), this.clickOutsideHandler = null), this.contextmenuOutsideHandler1 && (this.contextmenuOutsideHandler1.remove(), this.contextmenuOutsideHandler1 = null), this.contextmenuOutsideHandler2 && (this.contextmenuOutsideHandler2.remove(), this.contextmenuOutsideHandler2 = null), this.touchOutsideHandler && (this.touchOutsideHandler.remove(), this.touchOutsideHandler = null);
    },
    createTwoChains: function(e) {
      var n = function() {
      }, r = rf(this);
      return this.childOriginEvents[e] && r[e] ? this["fire".concat(e)] : (n = this.childOriginEvents[e] || r[e] || n, n);
    },
    isClickToShow: function() {
      var e = this.$props, n = e.action, r = e.showAction;
      return n.indexOf("click") !== -1 || r.indexOf("click") !== -1;
    },
    isContextMenuOnly: function() {
      var e = this.$props.action;
      return e === "contextmenu" || e.length === 1 && e[0] === "contextmenu";
    },
    isContextmenuToShow: function() {
      var e = this.$props, n = e.action, r = e.showAction;
      return n.indexOf("contextmenu") !== -1 || r.indexOf("contextmenu") !== -1;
    },
    isClickToHide: function() {
      var e = this.$props, n = e.action, r = e.hideAction;
      return n.indexOf("click") !== -1 || r.indexOf("click") !== -1;
    },
    isMouseEnterToShow: function() {
      var e = this.$props, n = e.action, r = e.showAction;
      return n.indexOf("hover") !== -1 || r.indexOf("mouseenter") !== -1;
    },
    isMouseLeaveToHide: function() {
      var e = this.$props, n = e.action, r = e.hideAction;
      return n.indexOf("hover") !== -1 || r.indexOf("mouseleave") !== -1;
    },
    isFocusToShow: function() {
      var e = this.$props, n = e.action, r = e.showAction;
      return n.indexOf("focus") !== -1 || r.indexOf("focus") !== -1;
    },
    isBlurToHide: function() {
      var e = this.$props, n = e.action, r = e.hideAction;
      return n.indexOf("focus") !== -1 || r.indexOf("blur") !== -1;
    },
    forcePopupAlign: function() {
      var e;
      this.$data.sPopupVisible && ((e = this.popupRef) === null || e === void 0 || e.forceAlign());
    },
    fireEvents: function(e, n) {
      this.childOriginEvents[e] && this.childOriginEvents[e](n);
      var r = this.$props[e] || this.$attrs[e];
      r && r(n);
    },
    close: function() {
      this.setPopupVisible(!1);
    }
  },
  render: function() {
    var e = this, n = this.$attrs, r = yn(NC(this)), a = this.$props.alignPoint, o = r[0];
    this.childOriginEvents = rf(o);
    var i = {
      key: "trigger"
    };
    this.isContextmenuToShow() ? i.onContextmenu = this.onContextmenu : i.onContextmenu = this.createTwoChains("onContextmenu"), this.isClickToHide() || this.isClickToShow() ? (i.onClick = this.onClick, i.onMousedown = this.onMousedown, i[Wt ? "onTouchstartPassive" : "onTouchstart"] = this.onTouchstart) : (i.onClick = this.createTwoChains("onClick"), i.onMousedown = this.createTwoChains("onMousedown"), i[Wt ? "onTouchstartPassive" : "onTouchstart"] = this.createTwoChains("onTouchstart")), this.isMouseEnterToShow() ? (i.onMouseenter = this.onMouseenter, a && (i.onMousemove = this.onMouseMove)) : i.onMouseenter = this.createTwoChains("onMouseenter"), this.isMouseLeaveToHide() ? i.onMouseleave = this.onMouseleave : i.onMouseleave = this.createTwoChains("onMouseleave"), this.isFocusToShow() || this.isBlurToHide() ? (i.onFocus = this.onFocus, i.onBlur = this.onBlur) : (i.onFocus = this.createTwoChains("onFocus"), i.onBlur = function(d) {
      d && (!d.relatedTarget || !Gr(d.target, d.relatedTarget)) && e.createTwoChains("onBlur")(d);
    });
    var l = ge(o && o.props && o.props.class, n.class);
    l && (i.class = l);
    var u = Ct(o, k(k({}, i), {
      ref: "triggerRef"
    }), !0, !0);
    if (this.popPortal)
      return u;
    var s = m(wv, {
      key: "portal",
      getContainer: this.getContainer,
      didUpdate: this.handlePortalUpdate
    }, {
      default: this.getComponent
    });
    return m(ft, null, [s, u]);
  }
});
var WO = globalThis && globalThis.__rest || function(t, e) {
  var n = {};
  for (var r in t)
    Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(t); a < r.length; a++)
      e.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[a]) && (n[r[a]] = t[r[a]]);
  return n;
}, UO = function(e) {
  var n = e === !0 ? 0 : 1;
  return {
    bottomLeft: {
      points: ["tl", "bl"],
      offset: [0, 4],
      overflow: {
        adjustX: n,
        adjustY: 1
      }
    },
    bottomRight: {
      points: ["tr", "br"],
      offset: [0, 4],
      overflow: {
        adjustX: n,
        adjustY: 1
      }
    },
    topLeft: {
      points: ["bl", "tl"],
      offset: [0, -4],
      overflow: {
        adjustX: n,
        adjustY: 1
      }
    },
    topRight: {
      points: ["br", "tr"],
      offset: [0, -4],
      overflow: {
        adjustX: n,
        adjustY: 1
      }
    }
  };
}, YO = pe({
  name: "SelectTrigger",
  inheritAttrs: !1,
  props: {
    dropdownAlign: Object,
    visible: {
      type: Boolean,
      default: void 0
    },
    disabled: {
      type: Boolean,
      default: void 0
    },
    dropdownClassName: String,
    dropdownStyle: Q.object,
    placement: String,
    empty: {
      type: Boolean,
      default: void 0
    },
    prefixCls: String,
    popupClassName: String,
    animation: String,
    transitionName: String,
    getPopupContainer: Function,
    dropdownRender: Function,
    containerWidth: Number,
    dropdownMatchSelectWidth: Q.oneOfType([Number, Boolean]).def(!0),
    popupElement: Q.any,
    direction: String,
    getTriggerDOMNode: Function,
    onPopupVisibleChange: Function,
    onPopupMouseEnter: Function
  },
  setup: function(e, n) {
    var r = n.slots, a = n.attrs, o = n.expose, i = F(function() {
      var u = e.dropdownMatchSelectWidth;
      return UO(u);
    }), l = G();
    return o({
      getPopupElement: function() {
        return l.value;
      }
    }), function() {
      var u = k(k({}, e), a), s = u.empty, d = s === void 0 ? !1 : s, c = WO(u, ["empty"]), v = c.visible, f = c.dropdownAlign, g = c.prefixCls, p = c.popupElement, y = c.dropdownClassName, h = c.dropdownStyle, w = c.direction, C = w === void 0 ? "ltr" : w, x = c.placement, S = c.dropdownMatchSelectWidth, b = c.containerWidth, P = c.dropdownRender, T = c.animation, O = c.transitionName, D = c.getPopupContainer, V = c.getTriggerDOMNode, K = c.onPopupVisibleChange, R = c.onPopupMouseEnter, E = "".concat(g, "-dropdown"), M = p;
      P && (M = P({
        menuNode: p,
        props: e
      }));
      var N = T ? "".concat(E, "-").concat(T) : O, _ = k({
        minWidth: "".concat(b, "px")
      }, h);
      return typeof S == "number" ? _.width = "".concat(S, "px") : S && (_.width = "".concat(b, "px")), m(vo, Y(Y({}, e), {}, {
        showAction: K ? ["click"] : [],
        hideAction: K ? ["click"] : [],
        popupPlacement: x || (C === "rtl" ? "bottomRight" : "bottomLeft"),
        builtinPlacements: i.value,
        prefixCls: E,
        popupTransitionName: N,
        popupAlign: f,
        popupVisible: v,
        getPopupContainer: D,
        popupClassName: ge(y, j({}, "".concat(E, "-empty"), d)),
        popupStyle: _,
        getTriggerDOMNode: V,
        onPopupVisibleChange: K
      }), {
        default: r.default,
        popup: function() {
          return m("div", {
            ref: l,
            onMouseenter: R
          }, [M]);
        }
      });
    };
  }
});
const qO = YO;
var He = {
  MAC_ENTER: 3,
  BACKSPACE: 8,
  TAB: 9,
  NUM_CENTER: 12,
  ENTER: 13,
  SHIFT: 16,
  CTRL: 17,
  ALT: 18,
  PAUSE: 19,
  CAPS_LOCK: 20,
  ESC: 27,
  SPACE: 32,
  PAGE_UP: 33,
  PAGE_DOWN: 34,
  END: 35,
  HOME: 36,
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40,
  PRINT_SCREEN: 44,
  INSERT: 45,
  DELETE: 46,
  ZERO: 48,
  ONE: 49,
  TWO: 50,
  THREE: 51,
  FOUR: 52,
  FIVE: 53,
  SIX: 54,
  SEVEN: 55,
  EIGHT: 56,
  NINE: 57,
  QUESTION_MARK: 63,
  A: 65,
  B: 66,
  C: 67,
  D: 68,
  E: 69,
  F: 70,
  G: 71,
  H: 72,
  I: 73,
  J: 74,
  K: 75,
  L: 76,
  M: 77,
  N: 78,
  O: 79,
  P: 80,
  Q: 81,
  R: 82,
  S: 83,
  T: 84,
  U: 85,
  V: 86,
  W: 87,
  X: 88,
  Y: 89,
  Z: 90,
  META: 91,
  WIN_KEY_RIGHT: 92,
  CONTEXT_MENU: 93,
  NUM_ZERO: 96,
  NUM_ONE: 97,
  NUM_TWO: 98,
  NUM_THREE: 99,
  NUM_FOUR: 100,
  NUM_FIVE: 101,
  NUM_SIX: 102,
  NUM_SEVEN: 103,
  NUM_EIGHT: 104,
  NUM_NINE: 105,
  NUM_MULTIPLY: 106,
  NUM_PLUS: 107,
  NUM_MINUS: 109,
  NUM_PERIOD: 110,
  NUM_DIVISION: 111,
  F1: 112,
  F2: 113,
  F3: 114,
  F4: 115,
  F5: 116,
  F6: 117,
  F7: 118,
  F8: 119,
  F9: 120,
  F10: 121,
  F11: 122,
  F12: 123,
  NUMLOCK: 144,
  SEMICOLON: 186,
  DASH: 189,
  EQUALS: 187,
  COMMA: 188,
  PERIOD: 190,
  SLASH: 191,
  APOSTROPHE: 192,
  SINGLE_QUOTE: 222,
  OPEN_SQUARE_BRACKET: 219,
  BACKSLASH: 220,
  CLOSE_SQUARE_BRACKET: 221,
  WIN_KEY: 224,
  MAC_FF_META: 224,
  WIN_IME: 229,
  isTextModifyingKeyEvent: function(e) {
    var n = e.keyCode;
    if (e.altKey && !e.ctrlKey || e.metaKey || n >= He.F1 && n <= He.F12)
      return !1;
    switch (n) {
      case He.ALT:
      case He.CAPS_LOCK:
      case He.CONTEXT_MENU:
      case He.CTRL:
      case He.DOWN:
      case He.END:
      case He.ESC:
      case He.HOME:
      case He.INSERT:
      case He.LEFT:
      case He.MAC_FF_META:
      case He.META:
      case He.NUMLOCK:
      case He.NUM_CENTER:
      case He.PAGE_DOWN:
      case He.PAGE_UP:
      case He.PAUSE:
      case He.PRINT_SCREEN:
      case He.RIGHT:
      case He.SHIFT:
      case He.UP:
      case He.WIN_KEY:
      case He.WIN_KEY_RIGHT:
        return !1;
      default:
        return !0;
    }
  },
  isCharacterKey: function(e) {
    if (e >= He.ZERO && e <= He.NINE || e >= He.NUM_ZERO && e <= He.NUM_MULTIPLY || e >= He.A && e <= He.Z || window.navigator.userAgent.indexOf("WebKit") !== -1 && e === 0)
      return !0;
    switch (e) {
      case He.SPACE:
      case He.QUESTION_MARK:
      case He.NUM_PLUS:
      case He.NUM_MINUS:
      case He.NUM_PERIOD:
      case He.NUM_DIVISION:
      case He.SEMICOLON:
      case He.DASH:
      case He.EQUALS:
      case He.COMMA:
      case He.PERIOD:
      case He.SLASH:
      case He.APOSTROPHE:
      case He.SINGLE_QUOTE:
      case He.OPEN_SQUARE_BRACKET:
      case He.BACKSLASH:
      case He.CLOSE_SQUARE_BRACKET:
        return !0;
      default:
        return !1;
    }
  }
};
const xe = He;
var qi = function(e, n) {
  var r = n.slots, a, o = e.class, i = e.customizeIcon, l = e.customizeIconProps, u = e.onMousedown, s = e.onClick, d;
  return typeof i == "function" ? d = i(l) : d = i, m("span", {
    class: o,
    onMousedown: function(v) {
      v.preventDefault(), u && u(v);
    },
    style: {
      userSelect: "none",
      WebkitUserSelect: "none"
    },
    unselectable: "on",
    onClick: s,
    "aria-hidden": !0
  }, [d !== void 0 ? d : m("span", {
    class: o.split(/\s+/).map(function(c) {
      return "".concat(c, "-icon");
    })
  }, [(a = r.default) === null || a === void 0 ? void 0 : a.call(r)])]);
};
qi.inheritAttrs = !1;
qi.displayName = "TransBtn";
qi.props = {
  class: String,
  customizeIcon: Q.any,
  customizeIconProps: Q.any,
  onMousedown: Function,
  onClick: Function
};
const Ci = qi;
function GO(t) {
  t.target.composing = !0;
}
function xv(t) {
  !t.target.composing || (t.target.composing = !1, XO(t.target, "input"));
}
function XO(t, e) {
  var n = document.createEvent("HTMLEvents");
  n.initEvent(e, !0, !0), t.dispatchEvent(n);
}
function Ll(t, e, n, r) {
  t.addEventListener(e, n, r);
}
var QO = {
  created: function(e, n) {
    (!n.modifiers || !n.modifiers.lazy) && (Ll(e, "compositionstart", GO), Ll(e, "compositionend", xv), Ll(e, "change", xv));
  }
};
const po = QO;
var JO = {
  inputRef: Q.any,
  prefixCls: String,
  id: String,
  inputElement: Q.VueNode,
  disabled: {
    type: Boolean,
    default: void 0
  },
  autofocus: {
    type: Boolean,
    default: void 0
  },
  autocomplete: String,
  editable: {
    type: Boolean,
    default: void 0
  },
  activeDescendantId: String,
  value: String,
  open: {
    type: Boolean,
    default: void 0
  },
  tabindex: Q.oneOfType([Q.number, Q.string]),
  attrs: Q.object,
  onKeydown: {
    type: Function
  },
  onMousedown: {
    type: Function
  },
  onChange: {
    type: Function
  },
  onPaste: {
    type: Function
  },
  onCompositionstart: {
    type: Function
  },
  onCompositionend: {
    type: Function
  },
  onFocus: {
    type: Function
  },
  onBlur: {
    type: Function
  }
}, ZO = pe({
  name: "Input",
  inheritAttrs: !1,
  props: JO,
  setup: function(e) {
    var n = null, r = ut("VCSelectContainerEvent");
    return function() {
      var a, o = e.prefixCls, i = e.id, l = e.inputElement, u = e.disabled, s = e.tabindex, d = e.autofocus, c = e.autocomplete, v = e.editable, f = e.activeDescendantId, g = e.value, p = e.onKeydown, y = e.onMousedown, h = e.onChange, w = e.onPaste, C = e.onCompositionstart, x = e.onCompositionend, S = e.onFocus, b = e.onBlur, P = e.open, T = e.inputRef, O = e.attrs, D = l || gn(m("input", null, null), [[po]]), V = D.props || {}, K = V.onKeydown, R = V.onInput, E = V.onFocus, M = V.onBlur, N = V.onMousedown, _ = V.onCompositionstart, I = V.onCompositionend, A = V.style;
      return D = Ct(D, k(k(k(k(k({
        type: "search"
      }, V), {
        id: i,
        ref: T,
        disabled: u,
        tabindex: s,
        autocomplete: c || "off",
        autofocus: d,
        class: ge("".concat(o, "-selection-search-input"), (a = D == null ? void 0 : D.props) === null || a === void 0 ? void 0 : a.class),
        role: "combobox",
        "aria-expanded": P,
        "aria-haspopup": "listbox",
        "aria-owns": "".concat(i, "_list"),
        "aria-autocomplete": "list",
        "aria-controls": "".concat(i, "_list"),
        "aria-activedescendant": f
      }), O), {
        value: v ? g : "",
        readonly: !v,
        unselectable: v ? null : "on",
        style: k(k({}, A), {
          opacity: v ? null : 0
        }),
        onKeydown: function(W) {
          p(W), K && K(W);
        },
        onMousedown: function(W) {
          y(W), N && N(W);
        },
        onInput: function(W) {
          h(W), R && R(W);
        },
        onCompositionstart: function(W) {
          C(W), _ && _(W);
        },
        onCompositionend: function(W) {
          x(W), I && I(W);
        },
        onPaste: w,
        onFocus: function() {
          clearTimeout(n), E && E(arguments.length <= 0 ? void 0 : arguments[0]), S && S(arguments.length <= 0 ? void 0 : arguments[0]), r == null || r.focus(arguments.length <= 0 ? void 0 : arguments[0]);
        },
        onBlur: function() {
          for (var W = arguments.length, U = new Array(W), z = 0; z < W; z++)
            U[z] = arguments[z];
          n = setTimeout(function() {
            M && M(U[0]), b && b(U[0]), r == null || r.blur(U[0]);
          }, 100);
        }
      }), D.type === "textarea" ? {} : {
        type: "search"
      }), !0, !0), D;
    };
  }
});
const Fm = ZO;
var eT = `accept acceptcharset accesskey action allowfullscreen allowtransparency
alt async autocomplete autofocus autoplay capture cellpadding cellspacing challenge
charset checked classid classname colspan cols content contenteditable contextmenu
controls coords crossorigin data datetime default defer dir disabled download draggable
enctype form formaction formenctype formmethod formnovalidate formtarget frameborder
headers height hidden high href hreflang htmlfor for httpequiv icon id inputmode integrity
is keyparams keytype kind label lang list loop low manifest marginheight marginwidth max maxlength media
mediagroup method min minlength multiple muted name novalidate nonce open
optimum pattern placeholder poster preload radiogroup readonly rel required
reversed role rowspan rows sandbox scope scoped scrolling seamless selected
shape size sizes span spellcheck src srcdoc srclang srcset start step style
summary tabindex target title type usemap value width wmode wrap`, tT = `onCopy onCut onPaste onCompositionend onCompositionstart onCompositionupdate onKeydown
    onKeypress onKeyup onFocus onBlur onChange onInput onSubmit onClick onContextmenu onDoubleclick onDblclick
    onDrag onDragend onDragenter onDragexit onDragleave onDragover onDragstart onDrop onMousedown
    onMouseenter onMouseleave onMousemove onMouseout onMouseover onMouseup onSelect onTouchcancel
    onTouchend onTouchmove onTouchstart onTouchstartPassive onTouchmovePassive onScroll onWheel onAbort onCanplay onCanplaythrough
    onDurationchange onEmptied onEncrypted onEnded onError onLoadeddata onLoadedmetadata
    onLoadstart onPause onPlay onPlaying onProgress onRatechange onSeeked onSeeking onStalled onSuspend onTimeupdate onVolumechange onWaiting onLoad onError`, Pv = "".concat(eT, " ").concat(tT).split(/[\s\n]+/), nT = "aria-", rT = "data-";
function Ov(t, e) {
  return t.indexOf(e) === 0;
}
function ya(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n;
  e === !1 ? n = {
    aria: !0,
    data: !0,
    attr: !0
  } : e === !0 ? n = {
    aria: !0
  } : n = k({}, e);
  var r = {};
  return Object.keys(t).forEach(function(a) {
    (n.aria && (a === "role" || Ov(a, nT)) || n.data && Ov(a, rT) || n.attr && (Pv.includes(a) || Pv.includes(a.toLowerCase()))) && (r[a] = t[a]);
  }), r;
}
var Rm = Symbol("OverflowContextProviderKey"), Hu = pe({
  name: "OverflowContextProvider",
  inheritAttrs: !1,
  props: {
    value: {
      type: Object
    }
  },
  setup: function(e, n) {
    var r = n.slots;
    return ct(Rm, F(function() {
      return e.value;
    })), function() {
      var a;
      return (a = r.default) === null || a === void 0 ? void 0 : a.call(r);
    };
  }
}), aT = function() {
  return ut(Rm, F(function() {
    return null;
  }));
}, oT = globalThis && globalThis.__rest || function(t, e) {
  var n = {};
  for (var r in t)
    Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(t); a < r.length; a++)
      e.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[a]) && (n[r[a]] = t[r[a]]);
  return n;
}, Kr = void 0;
const ai = pe({
  name: "Item",
  props: {
    prefixCls: String,
    item: Q.any,
    renderItem: Function,
    responsive: Boolean,
    itemKey: {
      type: [String, Number]
    },
    registerSize: Function,
    display: Boolean,
    order: Number,
    component: Q.any,
    invalidate: Boolean
  },
  setup: function(e, n) {
    var r = n.slots, a = n.expose, o = F(function() {
      return e.responsive && !e.display;
    }), i = G();
    a({
      itemNodeRef: i
    });
    function l(u) {
      e.registerSize(e.itemKey, u);
    }
    return va(function() {
      l(null);
    }), function() {
      var u, s = e.prefixCls, d = e.invalidate, c = e.item, v = e.renderItem, f = e.responsive;
      e.registerSize, e.itemKey, e.display;
      var g = e.order, p = e.component, y = p === void 0 ? "div" : p, h = oT(e, ["prefixCls", "invalidate", "item", "renderItem", "responsive", "registerSize", "itemKey", "display", "order", "component"]), w = (u = r.default) === null || u === void 0 ? void 0 : u.call(r), C = v && c !== Kr ? v(c) : w, x;
      d || (x = {
        opacity: o.value ? 0 : 1,
        height: o.value ? 0 : Kr,
        overflowY: o.value ? "hidden" : Kr,
        order: f ? g : Kr,
        pointerEvents: o.value ? "none" : Kr,
        position: o.value ? "absolute" : Kr
      });
      var S = {};
      return o.value && (S["aria-hidden"] = !0), m(Li, {
        disabled: !f,
        onResize: function(P) {
          var T = P.offsetWidth;
          l(T);
        }
      }, {
        default: function() {
          return m(y, Y(Y(Y({
            class: ge(!d && s),
            style: x
          }, S), h), {}, {
            ref: i
          }), {
            default: function() {
              return [C];
            }
          });
        }
      });
    };
  }
});
var jl = globalThis && globalThis.__rest || function(t, e) {
  var n = {};
  for (var r in t)
    Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(t); a < r.length; a++)
      e.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[a]) && (n[r[a]] = t[r[a]]);
  return n;
};
const iT = pe({
  name: "RawItem",
  inheritAttrs: !1,
  props: {
    component: Q.any,
    title: Q.any,
    id: String,
    onMouseenter: {
      type: Function
    },
    onMouseleave: {
      type: Function
    },
    onClick: {
      type: Function
    },
    onKeydown: {
      type: Function
    },
    onFocus: {
      type: Function
    }
  },
  setup: function(e, n) {
    var r = n.slots, a = n.attrs, o = aT();
    return function() {
      var i;
      if (!o.value) {
        var l = e.component, u = l === void 0 ? "div" : l, s = jl(e, ["component"]);
        return m(u, Y(Y({}, s), a), {
          default: function() {
            return [(i = r.default) === null || i === void 0 ? void 0 : i.call(r)];
          }
        });
      }
      var d = o.value, c = d.className, v = jl(d, ["className"]), f = a.class, g = jl(a, ["class"]);
      return m(Hu, {
        value: null
      }, {
        default: function() {
          return [m(ai, Y(Y(Y({
            class: ge(c, f)
          }, v), g), e), r)];
        }
      });
    };
  }
});
var lT = globalThis && globalThis.__rest || function(t, e) {
  var n = {};
  for (var r in t)
    Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(t); a < r.length; a++)
      e.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[a]) && (n[r[a]] = t[r[a]]);
  return n;
}, $m = "responsive", Lm = "invalidate";
function uT(t) {
  return "+ ".concat(t.length, " ...");
}
var cT = function() {
  return {
    id: String,
    prefixCls: String,
    data: Array,
    itemKey: [String, Number, Function],
    itemWidth: {
      type: Number,
      default: 10
    },
    renderItem: Function,
    renderRawItem: Function,
    maxCount: [Number, String],
    renderRest: Function,
    renderRawRest: Function,
    suffix: Q.any,
    component: String,
    itemComponent: Q.any,
    onVisibleChange: Function,
    ssr: String,
    onMousedown: Function
  };
}, Gi = pe({
  name: "Overflow",
  inheritAttrs: !1,
  props: cT(),
  emits: ["visibleChange"],
  setup: function(e, n) {
    var r = n.attrs, a = n.emit, o = n.slots, i = F(function() {
      return e.ssr === "full";
    }), l = G(null), u = F(function() {
      return l.value || 0;
    }), s = G(/* @__PURE__ */ new Map()), d = G(0), c = G(0), v = G(0), f = G(null), g = G(null), p = F(function() {
      return g.value === null && i.value ? Number.MAX_SAFE_INTEGER : g.value || 0;
    }), y = G(!1), h = F(function() {
      return "".concat(e.prefixCls, "-item");
    }), w = F(function() {
      return Math.max(d.value, c.value);
    }), C = F(function() {
      return !!(e.data.length && e.maxCount === $m);
    }), x = F(function() {
      return e.maxCount === Lm;
    }), S = F(function() {
      return C.value || typeof e.maxCount == "number" && e.data.length > e.maxCount;
    }), b = F(function() {
      var N = e.data;
      return C.value ? l.value === null && i.value ? N = e.data : N = e.data.slice(0, Math.min(e.data.length, u.value / e.itemWidth)) : typeof e.maxCount == "number" && (N = e.data.slice(0, e.maxCount)), N;
    }), P = F(function() {
      return C.value ? e.data.slice(p.value + 1) : e.data.slice(b.value.length);
    }), T = function(_, I) {
      var A, B;
      return typeof e.itemKey == "function" ? e.itemKey(_) : (B = e.itemKey && ((A = _) === null || A === void 0 ? void 0 : A[e.itemKey])) !== null && B !== void 0 ? B : I;
    }, O = F(function() {
      return e.renderItem || function(N) {
        return N;
      };
    }), D = function(_, I) {
      g.value = _, I || (y.value = _ < e.data.length - 1, a("visibleChange", _));
    }, V = function(_, I) {
      l.value = I.clientWidth;
    }, K = function(_, I) {
      var A = new Map(s.value);
      I === null ? A.delete(_) : A.set(_, I), s.value = A;
    }, R = function(_, I) {
      d.value = c.value, c.value = I;
    }, E = function(_, I) {
      v.value = I;
    }, M = function(_) {
      return s.value.get(T(b.value[_], _));
    };
    return Ce([u, s, c, v, function() {
      return e.itemKey;
    }, b], function() {
      if (u.value && w.value && b.value) {
        var N = v.value, _ = b.value.length, I = _ - 1;
        if (!_) {
          D(0), f.value = null;
          return;
        }
        for (var A = 0; A < _; A += 1) {
          var B = M(A);
          if (B === void 0) {
            D(A - 1, !0);
            break;
          }
          if (N += B, I === 0 && N <= u.value || A === I - 1 && N + M(I) <= u.value) {
            D(I), f.value = null;
            break;
          } else if (N + w.value > u.value) {
            D(A - 1), f.value = N - B - v.value + c.value;
            break;
          }
        }
        e.suffix && M(0) + v.value > u.value && (f.value = null);
      }
    }), function() {
      var N = y.value && !!P.value.length, _ = e.itemComponent, I = e.renderRawItem, A = e.renderRawRest, B = e.renderRest, W = e.prefixCls, U = W === void 0 ? "rc-overflow" : W, z = e.suffix, L = e.component, $ = L === void 0 ? "div" : L, q = e.id, H = e.onMousedown, J = r.class, Z = r.style, ae = lT(r, ["class", "style"]), ue = {};
      f.value !== null && C.value && (ue = {
        position: "absolute",
        left: "".concat(f.value, "px"),
        top: 0
      });
      var ne = {
        prefixCls: h.value,
        responsive: C.value,
        component: _,
        invalidate: x.value
      }, X = I ? function(Me, Pe) {
        var fe = T(Me, Pe);
        return m(Hu, {
          key: fe,
          value: k(k({}, ne), {
            order: Pe,
            item: Me,
            itemKey: fe,
            registerSize: K,
            display: Pe <= p.value
          })
        }, {
          default: function() {
            return [I(Me, Pe)];
          }
        });
      } : function(Me, Pe) {
        var fe = T(Me, Pe);
        return m(ai, Y(Y({}, ne), {}, {
          order: Pe,
          key: fe,
          item: Me,
          renderItem: O.value,
          itemKey: fe,
          registerSize: K,
          display: Pe <= p.value
        }), null);
      }, te = function() {
        return null;
      }, me = {
        order: N ? p.value : Number.MAX_SAFE_INTEGER,
        className: "".concat(h.value, " ").concat(h.value, "-rest"),
        registerSize: R,
        display: N
      };
      if (A)
        A && (te = function() {
          return m(Hu, {
            value: k(k({}, ne), me)
          }, {
            default: function() {
              return [A(P.value)];
            }
          });
        });
      else {
        var Oe = B || uT;
        te = function() {
          return m(ai, Y(Y({}, ne), me), {
            default: function() {
              return typeof Oe == "function" ? Oe(P.value) : Oe;
            }
          });
        };
      }
      var ke = function() {
        var Pe;
        return m($, Y({
          id: q,
          class: ge(!x.value && U, J),
          style: Z,
          onMousedown: H
        }, ae), {
          default: function() {
            return [b.value.map(X), S.value ? te() : null, z && m(ai, Y(Y({}, ne), {}, {
              order: p.value,
              class: "".concat(h.value, "-suffix"),
              registerSize: E,
              display: !0,
              style: ue
            }), {
              default: function() {
                return z;
              }
            }), (Pe = o.default) === null || Pe === void 0 ? void 0 : Pe.call(o)];
          }
        });
      };
      return m(Li, {
        disabled: !C.value,
        onResize: V
      }, {
        default: ke
      });
    };
  }
});
Gi.Item = iT;
Gi.RESPONSIVE = $m;
Gi.INVALIDATE = Lm;
const aa = Gi;
var jm = Symbol("TreeSelectLegacyContextPropsKey");
function sT(t) {
  return ct(jm, t);
}
function Xi() {
  return ut(jm, {});
}
var dT = {
  id: String,
  prefixCls: String,
  values: Q.array,
  open: {
    type: Boolean,
    default: void 0
  },
  searchValue: String,
  inputRef: Q.any,
  placeholder: Q.any,
  disabled: {
    type: Boolean,
    default: void 0
  },
  mode: String,
  showSearch: {
    type: Boolean,
    default: void 0
  },
  autofocus: {
    type: Boolean,
    default: void 0
  },
  autocomplete: String,
  activeDescendantId: String,
  tabindex: Q.oneOfType([Q.number, Q.string]),
  removeIcon: Q.any,
  choiceTransitionName: String,
  maxTagCount: Q.oneOfType([Q.number, Q.string]),
  maxTagTextLength: Number,
  maxTagPlaceholder: Q.any.def(function() {
    return function(t) {
      return "+ ".concat(t.length, " ...");
    };
  }),
  tagRender: Function,
  onToggleOpen: {
    type: Function
  },
  onRemove: Function,
  onInputChange: Function,
  onInputPaste: Function,
  onInputKeyDown: Function,
  onInputMouseDown: Function,
  onInputCompositionStart: Function,
  onInputCompositionEnd: Function
}, Tv = function(e) {
  e.preventDefault(), e.stopPropagation();
}, fT = pe({
  name: "MultipleSelectSelector",
  inheritAttrs: !1,
  props: dT,
  setup: function(e) {
    var n = G(), r = G(0), a = G(!1), o = Xi(), i = F(function() {
      return "".concat(e.prefixCls, "-selection");
    }), l = F(function() {
      return e.open || e.mode === "tags" ? e.searchValue : "";
    }), u = F(function() {
      return e.mode === "tags" || e.showSearch && (e.open || a.value);
    });
    dt(function() {
      Ce(l, function() {
        r.value = n.value.scrollWidth;
      }, {
        flush: "post",
        immediate: !0
      });
    });
    function s(f, g, p, y, h) {
      return m("span", {
        class: ge("".concat(i.value, "-item"), j({}, "".concat(i.value, "-item-disabled"), p)),
        title: typeof f == "string" || typeof f == "number" ? f.toString() : void 0
      }, [m("span", {
        class: "".concat(i.value, "-item-content")
      }, [g]), y && m(Ci, {
        class: "".concat(i.value, "-item-remove"),
        onMousedown: Tv,
        onClick: h,
        customizeIcon: e.removeIcon
      }, {
        default: function() {
          return [or("\xD7")];
        }
      })]);
    }
    function d(f, g, p, y, h, w) {
      var C, x = function(P) {
        Tv(P), e.onToggleOpen(!open);
      }, S = w;
      return o.keyEntities && (S = ((C = o.keyEntities[f]) === null || C === void 0 ? void 0 : C.node) || {}), m("span", {
        key: f,
        onMousedown: x
      }, [e.tagRender({
        label: g,
        value: f,
        disabled: p,
        closable: y,
        onClose: h,
        option: S
      })]);
    }
    function c(f) {
      var g = f.disabled, p = f.label, y = f.value, h = f.option, w = !e.disabled && !g, C = p;
      if (typeof e.maxTagTextLength == "number" && (typeof p == "string" || typeof p == "number")) {
        var x = String(C);
        x.length > e.maxTagTextLength && (C = "".concat(x.slice(0, e.maxTagTextLength), "..."));
      }
      var S = function(P) {
        var T;
        P && P.stopPropagation(), (T = e.onRemove) === null || T === void 0 || T.call(e, f);
      };
      return typeof e.tagRender == "function" ? d(y, C, g, w, S, h) : s(p, C, g, w, S);
    }
    function v(f) {
      var g = e.maxTagPlaceholder, p = g === void 0 ? function(h) {
        return "+ ".concat(h.length, " ...");
      } : g, y = typeof p == "function" ? p(f) : p;
      return s(y, y, !1);
    }
    return function() {
      var f = e.id, g = e.prefixCls, p = e.values, y = e.open, h = e.inputRef, w = e.placeholder, C = e.disabled, x = e.autofocus, S = e.autocomplete, b = e.activeDescendantId, P = e.tabindex, T = e.onInputChange, O = e.onInputPaste, D = e.onInputKeyDown, V = e.onInputMouseDown, K = e.onInputCompositionStart, R = e.onInputCompositionEnd, E = m("div", {
        class: "".concat(i.value, "-search"),
        style: {
          width: r.value + "px"
        },
        key: "input"
      }, [m(Fm, {
        inputRef: h,
        open: y,
        prefixCls: g,
        id: f,
        inputElement: null,
        disabled: C,
        autofocus: x,
        autocomplete: S,
        editable: u.value,
        activeDescendantId: b,
        value: l.value,
        onKeydown: D,
        onMousedown: V,
        onChange: T,
        onPaste: O,
        onCompositionstart: K,
        onCompositionend: R,
        tabindex: P,
        attrs: ya(e, !0),
        onFocus: function() {
          return a.value = !0;
        },
        onBlur: function() {
          return a.value = !1;
        }
      }, null), m("span", {
        ref: n,
        class: "".concat(i.value, "-search-mirror"),
        "aria-hidden": !0
      }, [l.value, or("\xA0")])]), M = m(aa, {
        prefixCls: "".concat(i.value, "-overflow"),
        data: p,
        renderItem: c,
        renderRest: v,
        suffix: E,
        itemKey: "key",
        maxCount: e.maxTagCount,
        key: "overflow"
      }, null);
      return m(ft, null, [M, !p.length && !l.value && m("span", {
        class: "".concat(i.value, "-placeholder")
      }, [w])]);
    };
  }
});
const vT = fT;
var pT = {
  inputElement: Q.any,
  id: String,
  prefixCls: String,
  values: Q.array,
  open: {
    type: Boolean,
    default: void 0
  },
  searchValue: String,
  inputRef: Q.any,
  placeholder: Q.any,
  disabled: {
    type: Boolean,
    default: void 0
  },
  mode: String,
  showSearch: {
    type: Boolean,
    default: void 0
  },
  autofocus: {
    type: Boolean,
    default: void 0
  },
  autocomplete: String,
  activeDescendantId: String,
  tabindex: Q.oneOfType([Q.number, Q.string]),
  activeValue: String,
  backfill: {
    type: Boolean,
    default: void 0
  },
  optionLabelRender: Function,
  onInputChange: Function,
  onInputPaste: Function,
  onInputKeyDown: Function,
  onInputMouseDown: Function,
  onInputCompositionStart: Function,
  onInputCompositionEnd: Function
}, ls = pe({
  name: "SingleSelector",
  setup: function(e) {
    var n = G(!1), r = F(function() {
      return e.mode === "combobox";
    }), a = F(function() {
      return r.value || e.showSearch;
    }), o = F(function() {
      var d = e.searchValue || "";
      return r.value && e.activeValue && !n.value && (d = e.activeValue), d;
    }), i = Xi();
    Ce([r, function() {
      return e.activeValue;
    }], function() {
      r.value && (n.value = !1);
    }, {
      immediate: !0
    });
    var l = F(function() {
      return e.mode !== "combobox" && !e.open && !e.showSearch ? !1 : !!o.value;
    }), u = F(function() {
      var d = e.values[0];
      return d && (typeof d.label == "string" || typeof d.label == "number") ? d.label.toString() : void 0;
    }), s = function() {
      if (e.values[0])
        return null;
      var c = l.value ? {
        visibility: "hidden"
      } : void 0;
      return m("span", {
        class: "".concat(e.prefixCls, "-selection-placeholder"),
        style: c
      }, [e.placeholder]);
    };
    return function() {
      var d, c, v, f, g = e.inputElement, p = e.prefixCls, y = e.id, h = e.values, w = e.inputRef, C = e.disabled, x = e.autofocus, S = e.autocomplete, b = e.activeDescendantId, P = e.open, T = e.tabindex, O = e.optionLabelRender, D = e.onInputKeyDown, V = e.onInputMouseDown, K = e.onInputChange, R = e.onInputPaste, E = e.onInputCompositionStart, M = e.onInputCompositionEnd, N = h[0], _ = null;
      if (N && i.customSlots) {
        var I = (d = N.key) !== null && d !== void 0 ? d : N.value, A = ((c = i.keyEntities[I]) === null || c === void 0 ? void 0 : c.node) || {};
        _ = i.customSlots[(v = A.slots) === null || v === void 0 ? void 0 : v.title] || i.customSlots.title || N.label, typeof _ == "function" && (_ = _(A));
      } else
        _ = O && N ? O(N.option) : N == null ? void 0 : N.label;
      return m(ft, null, [m("span", {
        class: "".concat(p, "-selection-search")
      }, [m(Fm, {
        inputRef: w,
        prefixCls: p,
        id: y,
        open: P,
        inputElement: g,
        disabled: C,
        autofocus: x,
        autocomplete: S,
        editable: a.value,
        activeDescendantId: b,
        value: o.value,
        onKeydown: D,
        onMousedown: V,
        onChange: function(W) {
          n.value = !0, K(W);
        },
        onPaste: R,
        onCompositionstart: E,
        onCompositionend: M,
        tabindex: T,
        attrs: ya(e, !0)
      }, null)]), !r.value && N && !l.value && m("span", {
        class: "".concat(p, "-selection-item"),
        title: u.value
      }, [m(ft, {
        key: (f = N.key) !== null && f !== void 0 ? f : N.value
      }, [_])]), s()]);
    };
  }
});
ls.props = pT;
ls.inheritAttrs = !1;
const hT = ls;
function gT(t) {
  return ![
    xe.ESC,
    xe.SHIFT,
    xe.BACKSPACE,
    xe.TAB,
    xe.WIN_KEY,
    xe.ALT,
    xe.META,
    xe.WIN_KEY_RIGHT,
    xe.CTRL,
    xe.SEMICOLON,
    xe.EQUALS,
    xe.CAPS_LOCK,
    xe.CONTEXT_MENU,
    xe.F1,
    xe.F2,
    xe.F3,
    xe.F4,
    xe.F5,
    xe.F6,
    xe.F7,
    xe.F8,
    xe.F9,
    xe.F10,
    xe.F11,
    xe.F12
  ].includes(t);
}
function Vm() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 250, e = null, n;
  ht(function() {
    clearTimeout(n);
  });
  function r(a) {
    (a || e === null) && (e = a), clearTimeout(n), n = setTimeout(function() {
      e = null;
    }, t);
  }
  return [function() {
    return e;
  }, r];
}
function eo() {
  var t = function e(n) {
    e.current = n;
  };
  return t;
}
var mT = pe({
  name: "Selector",
  inheritAttrs: !1,
  props: {
    id: String,
    prefixCls: String,
    showSearch: {
      type: Boolean,
      default: void 0
    },
    open: {
      type: Boolean,
      default: void 0
    },
    values: Q.array,
    multiple: {
      type: Boolean,
      default: void 0
    },
    mode: String,
    searchValue: String,
    activeValue: String,
    inputElement: Q.any,
    autofocus: {
      type: Boolean,
      default: void 0
    },
    activeDescendantId: String,
    tabindex: Q.oneOfType([Q.number, Q.string]),
    disabled: {
      type: Boolean,
      default: void 0
    },
    placeholder: Q.any,
    removeIcon: Q.any,
    maxTagCount: Q.oneOfType([Q.number, Q.string]),
    maxTagTextLength: Number,
    maxTagPlaceholder: Q.any,
    tagRender: Function,
    optionLabelRender: Function,
    tokenWithEnter: {
      type: Boolean,
      default: void 0
    },
    choiceTransitionName: String,
    onToggleOpen: {
      type: Function
    },
    onSearch: Function,
    onSearchSubmit: Function,
    onRemove: Function,
    onInputKeyDown: {
      type: Function
    },
    domRef: Function
  },
  setup: function(e, n) {
    var r = n.expose, a = eo(), o = !1, i = Vm(0), l = De(i, 2), u = l[0], s = l[1], d = function(S) {
      var b = S.which;
      (b === xe.UP || b === xe.DOWN) && S.preventDefault(), e.onInputKeyDown && e.onInputKeyDown(S), b === xe.ENTER && e.mode === "tags" && !o && !e.open && e.onSearchSubmit(S.target.value), gT(b) && e.onToggleOpen(!0);
    }, c = function() {
      s(!0);
    }, v = null, f = function(S) {
      e.onSearch(S, !0, o) !== !1 && e.onToggleOpen(!0);
    }, g = function() {
      o = !0;
    }, p = function(S) {
      o = !1, e.mode !== "combobox" && f(S.target.value);
    }, y = function(S) {
      var b = S.target.value;
      if (e.tokenWithEnter && v && /[\r\n]/.test(v)) {
        var P = v.replace(/[\r\n]+$/, "").replace(/\r\n/g, " ").replace(/[\r\n]/g, " ");
        b = b.replace(P, v);
      }
      v = null, f(b);
    }, h = function(S) {
      var b = S.clipboardData, P = b.getData("text");
      v = P;
    }, w = function(S) {
      var b = S.target;
      if (b !== a.current) {
        var P = document.body.style.msTouchAction !== void 0;
        P ? setTimeout(function() {
          a.current.focus();
        }) : a.current.focus();
      }
    }, C = function(S) {
      var b = u();
      S.target !== a.current && !b && S.preventDefault(), (e.mode !== "combobox" && (!e.showSearch || !b) || !e.open) && (e.open && e.onSearch("", !0, !1), e.onToggleOpen());
    };
    return r({
      focus: function() {
        a.current.focus();
      },
      blur: function() {
        a.current.blur();
      }
    }), function() {
      var x = e.prefixCls, S = e.domRef, b = e.mode, P = {
        inputRef: a,
        onInputKeyDown: d,
        onInputMouseDown: c,
        onInputChange: y,
        onInputPaste: h,
        onInputCompositionStart: g,
        onInputCompositionEnd: p
      }, T = b === "multiple" || b === "tags" ? m(vT, Y(Y({}, e), P), null) : m(hT, Y(Y({}, e), P), null);
      return m("div", {
        ref: S,
        class: "".concat(x, "-selector"),
        onClick: w,
        onMousedown: C
      }, [T]);
    };
  }
});
const yT = mT;
function bT(t, e, n) {
  function r(a) {
    var o, i, l, u = a.target;
    u.shadowRoot && a.composed && (u = a.composedPath()[0] || u);
    var s = [(o = t[0]) === null || o === void 0 ? void 0 : o.value, (l = (i = t[1]) === null || i === void 0 ? void 0 : i.value) === null || l === void 0 ? void 0 : l.getPopupElement()];
    e.value && s.every(function(d) {
      return d && !d.contains(u) && d !== u;
    }) && n(!1);
  }
  dt(function() {
    window.addEventListener("mousedown", r);
  }), ht(function() {
    window.removeEventListener("mousedown", r);
  });
}
function CT() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 10, e = G(!1), n, r = function() {
    clearTimeout(n);
  };
  dt(function() {
    r();
  });
  var a = function(i, l) {
    r(), n = setTimeout(function() {
      e.value = i, l && l();
    }, t);
  };
  return [e, a, r];
}
var Bm = Symbol("BaseSelectContextKey");
function wT(t) {
  return ct(Bm, t);
}
function ho() {
  return ut(Bm, {});
}
const Km = function() {
  if (typeof navigator > "u" || typeof window > "u")
    return !1;
  var t = navigator.userAgent || navigator.vendor || window.opera;
  return !!(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(t) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(t == null ? void 0 : t.substr(0, 4)));
};
function wi(t) {
  if (!k0(t))
    return Mt(t);
  var e = new Proxy({}, {
    get: function(r, a, o) {
      return Reflect.get(t.value, a, o);
    },
    set: function(r, a, o) {
      return t.value[a] = o, !0;
    },
    deleteProperty: function(r, a) {
      return Reflect.deleteProperty(t.value, a);
    },
    has: function(r, a) {
      return Reflect.has(t.value, a);
    },
    ownKeys: function() {
      return Object.keys(t.value);
    },
    getOwnPropertyDescriptor: function() {
      return {
        enumerable: !0,
        configurable: !0
      };
    }
  });
  return Mt(e);
}
var ST = globalThis && globalThis.__rest || function(t, e) {
  var n = {};
  for (var r in t)
    Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(t); a < r.length; a++)
      e.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[a]) && (n[r[a]] = t[r[a]]);
  return n;
}, xT = ["value", "onChange", "removeIcon", "placeholder", "autofocus", "maxTagCount", "maxTagTextLength", "maxTagPlaceholder", "choiceTransitionName", "onInputKeyDown", "onPopupScroll", "tabindex", "OptionList", "notFoundContent"], PT = function() {
  return {
    prefixCls: String,
    id: String,
    omitDomProps: Array,
    displayValues: Array,
    onDisplayValuesChange: Function,
    activeValue: String,
    activeDescendantId: String,
    onActiveValueChange: Function,
    searchValue: String,
    onSearch: Function,
    onSearchSplit: Function,
    maxLength: Number,
    OptionList: Q.any,
    emptyOptions: Boolean
  };
}, Qi = function() {
  return {
    showSearch: {
      type: Boolean,
      default: void 0
    },
    tagRender: {
      type: Function
    },
    optionLabelRender: {
      type: Function
    },
    direction: {
      type: String
    },
    tabindex: Number,
    autofocus: Boolean,
    notFoundContent: Q.any,
    placeholder: Q.any,
    onClear: Function,
    choiceTransitionName: String,
    mode: String,
    disabled: {
      type: Boolean,
      default: void 0
    },
    loading: {
      type: Boolean,
      default: void 0
    },
    open: {
      type: Boolean,
      default: void 0
    },
    defaultOpen: {
      type: Boolean,
      default: void 0
    },
    onDropdownVisibleChange: {
      type: Function
    },
    getInputElement: {
      type: Function
    },
    getRawInputElement: {
      type: Function
    },
    maxTagTextLength: Number,
    maxTagCount: {
      type: [String, Number]
    },
    maxTagPlaceholder: Q.any,
    tokenSeparators: {
      type: Array
    },
    allowClear: {
      type: Boolean,
      default: void 0
    },
    showArrow: {
      type: Boolean,
      default: void 0
    },
    inputIcon: Q.any,
    clearIcon: Q.any,
    removeIcon: Q.any,
    animation: String,
    transitionName: String,
    dropdownStyle: {
      type: Object
    },
    dropdownClassName: String,
    dropdownMatchSelectWidth: {
      type: [Boolean, Number],
      default: void 0
    },
    dropdownRender: {
      type: Function
    },
    dropdownAlign: Object,
    placement: {
      type: String
    },
    getPopupContainer: {
      type: Function
    },
    showAction: {
      type: Array
    },
    onBlur: {
      type: Function
    },
    onFocus: {
      type: Function
    },
    onKeyup: Function,
    onKeydown: Function,
    onMousedown: Function,
    onPopupScroll: Function,
    onInputKeyDown: Function,
    onMouseenter: Function,
    onMouseleave: Function,
    onClick: Function
  };
}, OT = function() {
  return k(k({}, PT()), Qi());
};
function us(t) {
  return t === "tags" || t === "multiple";
}
const cs = pe({
  name: "BaseSelect",
  inheritAttrs: !1,
  props: kt(OT(), {
    showAction: [],
    notFoundContent: "Not Found"
  }),
  setup: function(e, n) {
    var r = n.attrs, a = n.expose, o = n.slots, i = F(function() {
      return us(e.mode);
    }), l = F(function() {
      return e.showSearch !== void 0 ? e.showSearch : i.value || e.mode === "combobox";
    }), u = G(!1);
    dt(function() {
      u.value = Km();
    });
    var s = Xi(), d = G(null), c = eo(), v = G(null), f = G(null), g = G(null), p = CT(), y = De(p, 3), h = y[0], w = y[1], C = y[2], x = function() {
      var X;
      (X = f.value) === null || X === void 0 || X.focus();
    }, S = function() {
      var X;
      (X = f.value) === null || X === void 0 || X.blur();
    };
    a({
      focus: x,
      blur: S,
      scrollTo: function(X) {
        var te;
        return (te = g.value) === null || te === void 0 ? void 0 : te.scrollTo(X);
      }
    });
    var b = F(function() {
      var ne;
      if (e.mode !== "combobox")
        return e.searchValue;
      var X = (ne = e.displayValues[0]) === null || ne === void 0 ? void 0 : ne.value;
      return typeof X == "string" || typeof X == "number" ? String(X) : "";
    }), P = e.open !== void 0 ? e.open : e.defaultOpen, T = G(P), O = G(P), D = function(X) {
      T.value = e.open !== void 0 ? e.open : X, O.value = T.value;
    };
    Ce(function() {
      return e.open;
    }, function() {
      D(e.open);
    });
    var V = F(function() {
      return !e.notFoundContent && e.emptyOptions;
    });
    Ue(function() {
      O.value = T.value, (e.disabled || V.value && O.value && e.mode === "combobox") && (O.value = !1);
    });
    var K = F(function() {
      return V.value ? !1 : O.value;
    }), R = function(X) {
      var te = X !== void 0 ? X : !O.value;
      T.value !== te && !e.disabled && (D(te), e.onDropdownVisibleChange && e.onDropdownVisibleChange(te));
    }, E = F(function() {
      return (e.tokenSeparators || []).some(function(ne) {
        return [`
`, `\r
`].includes(ne);
      });
    }), M = function(X, te, me) {
      var Oe, ke, Me = !0, Pe = X;
      (Oe = e.onActiveValueChange) === null || Oe === void 0 || Oe.call(e, null);
      var fe = me ? null : v1(X, e.tokenSeparators);
      return e.mode !== "combobox" && fe && (Pe = "", (ke = e.onSearchSplit) === null || ke === void 0 || ke.call(e, fe), R(!1), Me = !1), e.onSearch && b.value !== Pe && e.onSearch(Pe, {
        source: te ? "typing" : "effect"
      }), Me;
    }, N = function(X) {
      var te;
      !X || !X.trim() || (te = e.onSearch) === null || te === void 0 || te.call(e, X, {
        source: "submit"
      });
    };
    Ce(O, function() {
      !O.value && !i.value && e.mode !== "combobox" && M("", !1, !1);
    }, {
      immediate: !0,
      flush: "post"
    }), Ce(function() {
      return e.disabled;
    }, function() {
      T.value && !!e.disabled && D(!1);
    }, {
      immediate: !0
    });
    var _ = Vm(), I = De(_, 2), A = I[0], B = I[1], W = function(X) {
      var te, me, Oe = A(), ke = X.which;
      if (ke === xe.ENTER && (e.mode !== "combobox" && X.preventDefault(), O.value || R(!0)), B(!!b.value), ke === xe.BACKSPACE && !Oe && i.value && !b.value && e.displayValues.length) {
        for (var Me = Ie(e.displayValues), Pe = null, fe = Me.length - 1; fe >= 0; fe -= 1) {
          var le = Me[fe];
          if (!le.disabled) {
            Me.splice(fe, 1), Pe = le;
            break;
          }
        }
        Pe && e.onDisplayValuesChange(Me, {
          type: "remove",
          values: [Pe]
        });
      }
      for (var ie = arguments.length, de = new Array(ie > 1 ? ie - 1 : 0), ye = 1; ye < ie; ye++)
        de[ye - 1] = arguments[ye];
      if (O.value && g.value) {
        var _e;
        (_e = g.value).onKeydown.apply(_e, [X].concat(de));
      }
      (me = e.onKeydown) === null || me === void 0 || (te = me).call.apply(te, [e, X].concat(de));
    }, U = function(X) {
      for (var te = arguments.length, me = new Array(te > 1 ? te - 1 : 0), Oe = 1; Oe < te; Oe++)
        me[Oe - 1] = arguments[Oe];
      if (O.value && g.value) {
        var ke;
        (ke = g.value).onKeyup.apply(ke, [X].concat(me));
      }
      e.onKeyup && e.onKeyup.apply(e, [X].concat(me));
    }, z = function(X) {
      var te = e.displayValues.filter(function(me) {
        return me !== X;
      });
      e.onDisplayValuesChange(te, {
        type: "remove",
        values: [X]
      });
    }, L = G(!1), $ = function() {
      w(!0), e.disabled || (e.onFocus && !L.value && e.onFocus.apply(e, arguments), e.showAction && e.showAction.includes("focus") && R(!0)), L.value = !0;
    }, q = function() {
      if (w(!1, function() {
        L.value = !1, R(!1);
      }), !e.disabled) {
        var X = b.value;
        X && (e.mode === "tags" ? e.onSearch(X, {
          source: "submit"
        }) : e.mode === "multiple" && e.onSearch("", {
          source: "blur"
        })), e.onBlur && e.onBlur.apply(e, arguments);
      }
    };
    ct("VCSelectContainerEvent", {
      focus: $,
      blur: q
    });
    var H = [];
    dt(function() {
      H.forEach(function(ne) {
        return clearTimeout(ne);
      }), H.splice(0, H.length);
    }), ht(function() {
      H.forEach(function(ne) {
        return clearTimeout(ne);
      }), H.splice(0, H.length);
    });
    var J = function(X) {
      var te, me, Oe, ke = X.target, Me = (me = v.value) === null || me === void 0 ? void 0 : me.getPopupElement();
      if (Me && Me.contains(ke)) {
        var Pe = setTimeout(function() {
          var de, ye = H.indexOf(Pe);
          ye !== -1 && H.splice(ye, 1), C(), !u.value && !Me.contains(document.activeElement) && ((de = f.value) === null || de === void 0 || de.focus());
        });
        H.push(Pe);
      }
      for (var fe = arguments.length, le = new Array(fe > 1 ? fe - 1 : 0), ie = 1; ie < fe; ie++)
        le[ie - 1] = arguments[ie];
      (Oe = e.onMousedown) === null || Oe === void 0 || (te = Oe).call.apply(te, [e, X].concat(le));
    }, Z = G(null), ae = sn(), ue = function() {
      ae.update();
    };
    return dt(function() {
      Ce(K, function() {
        var ne;
        if (K.value) {
          var X = Math.ceil((ne = d.value) === null || ne === void 0 ? void 0 : ne.offsetWidth);
          Z.value !== X && !Number.isNaN(X) && (Z.value = X);
        }
      }, {
        immediate: !0,
        flush: "post"
      });
    }), bT([d, v], K, R), wT(wi(k(k({}, Tc(e)), {
      open: O,
      triggerOpen: K,
      showSearch: l,
      multiple: i,
      toggleOpen: R
    }))), function() {
      var ne, X = k(k({}, e), r), te = X.prefixCls, me = X.id;
      X.open, X.defaultOpen;
      var Oe = X.mode;
      X.showSearch, X.searchValue, X.onSearch;
      var ke = X.allowClear, Me = X.clearIcon, Pe = X.showArrow, fe = X.inputIcon, le = X.disabled, ie = X.loading, de = X.getInputElement, ye = X.getPopupContainer, _e = X.placement, Be = X.animation, Ve = X.transitionName, he = X.dropdownStyle, oe = X.dropdownClassName, ve = X.dropdownMatchSelectWidth, Se = X.dropdownRender, se = X.dropdownAlign;
      X.showAction;
      var ee = X.direction;
      X.tokenSeparators;
      var re = X.tagRender, ce = X.optionLabelRender;
      X.onPopupScroll, X.onDropdownVisibleChange, X.onFocus, X.onBlur, X.onKeyup, X.onKeydown, X.onMousedown;
      var Ee = X.onClear, Te = X.omitDomProps, we = X.getRawInputElement, be = X.displayValues, Ae = X.onDisplayValuesChange, je = X.emptyOptions, We = X.activeDescendantId, et = X.activeValue, Ge = X.OptionList, it = ST(X, ["prefixCls", "id", "open", "defaultOpen", "mode", "showSearch", "searchValue", "onSearch", "allowClear", "clearIcon", "showArrow", "inputIcon", "disabled", "loading", "getInputElement", "getPopupContainer", "placement", "animation", "transitionName", "dropdownStyle", "dropdownClassName", "dropdownMatchSelectWidth", "dropdownRender", "dropdownAlign", "showAction", "direction", "tokenSeparators", "tagRender", "optionLabelRender", "onPopupScroll", "onDropdownVisibleChange", "onFocus", "onBlur", "onKeyup", "onKeydown", "onMousedown", "onClear", "omitDomProps", "getRawInputElement", "displayValues", "onDisplayValuesChange", "emptyOptions", "activeDescendantId", "activeValue", "OptionList"]), nt = Oe === "combobox" && de && de() || null, lt = typeof we == "function" && we(), at = k({}, it), rt;
      lt && (rt = function(Wn) {
        R(Wn);
      }), xT.forEach(function(Ft) {
        delete at[Ft];
      }), Te == null || Te.forEach(function(Ft) {
        delete at[Ft];
      });
      var yt = Pe !== void 0 ? Pe : ie || !i.value && Oe !== "combobox", It;
      yt && (It = m(Ci, {
        class: ge("".concat(te, "-arrow"), j({}, "".concat(te, "-arrow-loading"), ie)),
        customizeIcon: fe,
        customizeIconProps: {
          loading: ie,
          searchValue: b.value,
          open: O.value,
          focused: h.value,
          showSearch: l.value
        }
      }, null));
      var Dt, wt = function() {
        Ee == null || Ee(), Ae([], {
          type: "clear",
          values: be
        }), M("", !1, !1);
      };
      !le && ke && (be.length || b.value) && (Dt = m(Ci, {
        class: "".concat(te, "-clear"),
        onMousedown: wt,
        customizeIcon: Me
      }, {
        default: function() {
          return [or("\xD7")];
        }
      }));
      var xt = m(Ge, {
        ref: g
      }, k(k({}, s.customSlots), {
        option: o.option
      })), Mn = ge(te, r.class, (ne = {}, j(ne, "".concat(te, "-focused"), h.value), j(ne, "".concat(te, "-multiple"), i.value), j(ne, "".concat(te, "-single"), !i.value), j(ne, "".concat(te, "-allow-clear"), ke), j(ne, "".concat(te, "-show-arrow"), yt), j(ne, "".concat(te, "-disabled"), le), j(ne, "".concat(te, "-loading"), ie), j(ne, "".concat(te, "-open"), O.value), j(ne, "".concat(te, "-customize-input"), nt), j(ne, "".concat(te, "-show-search"), l.value), ne)), dn = m(qO, {
        ref: v,
        disabled: le,
        prefixCls: te,
        visible: K.value,
        popupElement: xt,
        containerWidth: Z.value,
        animation: Be,
        transitionName: Ve,
        dropdownStyle: he,
        dropdownClassName: oe,
        direction: ee,
        dropdownMatchSelectWidth: ve,
        dropdownRender: Se,
        dropdownAlign: se,
        placement: _e,
        getPopupContainer: ye,
        empty: je,
        getTriggerDOMNode: function() {
          return c.current;
        },
        onPopupVisibleChange: rt,
        onPopupMouseEnter: ue
      }, {
        default: function() {
          return lt ? At(lt) && Ct(lt, {
            ref: c
          }, !1, !0) : m(yT, Y(Y({}, e), {}, {
            domRef: c,
            prefixCls: te,
            inputElement: nt,
            ref: f,
            id: me,
            showSearch: l.value,
            mode: Oe,
            activeDescendantId: We,
            tagRender: re,
            optionLabelRender: ce,
            values: be,
            open: O.value,
            onToggleOpen: R,
            activeValue: et,
            searchValue: b.value,
            onSearch: M,
            onSearchSubmit: N,
            onRemove: z,
            tokenWithEnter: E.value
          }), null);
        }
      }), cr;
      return lt ? cr = dn : cr = m("div", Y(Y({}, at), {}, {
        class: Mn,
        ref: d,
        onMousedown: J,
        onKeydown: W,
        onKeyup: U
      }), [h.value && !O.value && m("span", {
        style: {
          width: 0,
          height: 0,
          display: "flex",
          overflow: "hidden",
          opacity: 0
        },
        "aria-live": "polite"
      }, ["".concat(be.map(function(Ft) {
        var Wn = Ft.label, Ca = Ft.value;
        return ["number", "string"].includes(Le(Wn)) ? Wn : Ca;
      }).join(", "))]), dn, It, Dt]), cr;
    };
  }
});
var Ji = function(e, n) {
  var r = e.height, a = e.offset, o = e.prefixCls, i = e.onInnerResize, l = n.slots, u, s = {}, d = {
    display: "flex",
    flexDirection: "column"
  };
  return a !== void 0 && (s = {
    height: "".concat(r, "px"),
    position: "relative",
    overflow: "hidden"
  }, d = k(k({}, d), {
    transform: "translateY(".concat(a, "px)"),
    position: "absolute",
    left: 0,
    right: 0,
    top: 0
  })), m("div", {
    style: s
  }, [m(Li, {
    onResize: function(v) {
      var f = v.offsetHeight;
      f && i && i();
    }
  }, {
    default: function() {
      return [m("div", {
        style: d,
        class: ge(j({}, "".concat(o, "-holder-inner"), o))
      }, [(u = l.default) === null || u === void 0 ? void 0 : u.call(l)])];
    }
  })]);
};
Ji.displayName = "Filter";
Ji.inheritAttrs = !1;
Ji.props = {
  prefixCls: String,
  height: Number,
  offset: Number,
  onInnerResize: Function
};
const TT = Ji;
var Hm = function(e, n) {
  var r = e.setRef, a = n.slots, o, i = Kt((o = a.default) === null || o === void 0 ? void 0 : o.call(a));
  return i && i.length ? Fi(i[0], {
    ref: r
  }) : i;
};
Hm.props = {
  setRef: {
    type: Function,
    default: function() {
    }
  }
};
const IT = Hm;
var kT = 20;
function Iv(t) {
  return "touches" in t ? t.touches[0].pageY : t.pageY;
}
const _T = pe({
  name: "ScrollBar",
  inheritAttrs: !1,
  props: {
    prefixCls: String,
    scrollTop: Number,
    scrollHeight: Number,
    height: Number,
    count: Number,
    onScroll: {
      type: Function
    },
    onStartMove: {
      type: Function
    },
    onStopMove: {
      type: Function
    }
  },
  setup: function() {
    return {
      moveRaf: null,
      scrollbarRef: eo(),
      thumbRef: eo(),
      visibleTimeout: null,
      state: Mt({
        dragging: !1,
        pageY: null,
        startTop: null,
        visible: !1
      })
    };
  },
  watch: {
    scrollTop: {
      handler: function() {
        this.delayHidden();
      },
      flush: "post"
    }
  },
  mounted: function() {
    var e, n;
    (e = this.scrollbarRef.current) === null || e === void 0 || e.addEventListener("touchstart", this.onScrollbarTouchStart, Wt ? {
      passive: !1
    } : !1), (n = this.thumbRef.current) === null || n === void 0 || n.addEventListener("touchstart", this.onMouseDown, Wt ? {
      passive: !1
    } : !1);
  },
  beforeUnmount: function() {
    this.removeEvents(), clearTimeout(this.visibleTimeout);
  },
  methods: {
    delayHidden: function() {
      var e = this;
      clearTimeout(this.visibleTimeout), this.state.visible = !0, this.visibleTimeout = setTimeout(function() {
        e.state.visible = !1;
      }, 2e3);
    },
    onScrollbarTouchStart: function(e) {
      e.preventDefault();
    },
    onContainerMouseDown: function(e) {
      e.stopPropagation(), e.preventDefault();
    },
    patchEvents: function() {
      window.addEventListener("mousemove", this.onMouseMove), window.addEventListener("mouseup", this.onMouseUp), this.thumbRef.current.addEventListener("touchmove", this.onMouseMove, Wt ? {
        passive: !1
      } : !1), this.thumbRef.current.addEventListener("touchend", this.onMouseUp);
    },
    removeEvents: function() {
      window.removeEventListener("mousemove", this.onMouseMove), window.removeEventListener("mouseup", this.onMouseUp), this.scrollbarRef.current.removeEventListener("touchstart", this.onScrollbarTouchStart, Wt ? {
        passive: !1
      } : !1), this.thumbRef.current.removeEventListener("touchstart", this.onMouseDown, Wt ? {
        passive: !1
      } : !1), this.thumbRef.current.removeEventListener("touchmove", this.onMouseMove, Wt ? {
        passive: !1
      } : !1), this.thumbRef.current.removeEventListener("touchend", this.onMouseUp), tt.cancel(this.moveRaf);
    },
    onMouseDown: function(e) {
      var n = this.$props.onStartMove;
      k(this.state, {
        dragging: !0,
        pageY: Iv(e),
        startTop: this.getTop()
      }), n(), this.patchEvents(), e.stopPropagation(), e.preventDefault();
    },
    onMouseMove: function(e) {
      var n = this.state, r = n.dragging, a = n.pageY, o = n.startTop, i = this.$props.onScroll;
      if (tt.cancel(this.moveRaf), r) {
        var l = Iv(e) - a, u = o + l, s = this.getEnableScrollRange(), d = this.getEnableHeightRange(), c = d ? u / d : 0, v = Math.ceil(c * s);
        this.moveRaf = tt(function() {
          i(v);
        });
      }
    },
    onMouseUp: function() {
      var e = this.$props.onStopMove;
      this.state.dragging = !1, e(), this.removeEvents();
    },
    getSpinHeight: function() {
      var e = this.$props, n = e.height, r = e.count, a = n / r * 10;
      return a = Math.max(a, kT), a = Math.min(a, n / 2), Math.floor(a);
    },
    getEnableScrollRange: function() {
      var e = this.$props, n = e.scrollHeight, r = e.height;
      return n - r || 0;
    },
    getEnableHeightRange: function() {
      var e = this.$props.height, n = this.getSpinHeight();
      return e - n || 0;
    },
    getTop: function() {
      var e = this.$props.scrollTop, n = this.getEnableScrollRange(), r = this.getEnableHeightRange();
      if (e === 0 || n === 0)
        return 0;
      var a = e / n;
      return a * r;
    },
    showScroll: function() {
      var e = this.$props, n = e.height, r = e.scrollHeight;
      return r > n;
    }
  },
  render: function() {
    var e = this.state, n = e.dragging, r = e.visible, a = this.$props.prefixCls, o = this.getSpinHeight() + "px", i = this.getTop() + "px", l = this.showScroll(), u = l && r;
    return m("div", {
      ref: this.scrollbarRef,
      class: ge("".concat(a, "-scrollbar"), j({}, "".concat(a, "-scrollbar-show"), l)),
      style: {
        width: "8px",
        top: 0,
        bottom: 0,
        right: 0,
        position: "absolute",
        display: u ? void 0 : "none"
      },
      onMousedown: this.onContainerMouseDown,
      onMousemove: this.delayHidden
    }, [m("div", {
      ref: this.thumbRef,
      class: ge("".concat(a, "-scrollbar-thumb"), j({}, "".concat(a, "-scrollbar-thumb-moving"), n)),
      style: {
        width: "100%",
        height: o,
        top: i,
        left: 0,
        position: "absolute",
        background: "rgba(0, 0, 0, 0.5)",
        borderRadius: "99px",
        cursor: "pointer",
        userSelect: "none"
      },
      onMousedown: this.onMouseDown
    }, null)]);
  }
});
function ET(t, e, n, r) {
  var a = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), i = G(Symbol("update"));
  Ce(t, function() {
    i.value = Symbol("update");
  });
  var l = 0;
  function u() {
    l += 1;
    var d = l;
    Promise.resolve().then(function() {
      d === l && a.forEach(function(c, v) {
        if (c && c.offsetParent) {
          var f = c.offsetHeight;
          o.get(v) !== f && (i.value = Symbol("update"), o.set(v, c.offsetHeight));
        }
      });
    });
  }
  function s(d, c) {
    var v = e(d), f = a.get(v);
    c ? (a.set(v, c.$el || c), u()) : a.delete(v), !f != !c && (c ? n == null || n(d) : r == null || r(d));
  }
  return [s, u, o, i];
}
function NT(t, e, n, r, a, o, i, l) {
  var u;
  return function(s) {
    if (s == null) {
      l();
      return;
    }
    tt.cancel(u);
    var d = e.value, c = r.itemHeight;
    if (typeof s == "number")
      i(s);
    else if (s && Le(s) === "object") {
      var v, f = s.align;
      "index" in s ? v = s.index : v = d.findIndex(function(h) {
        return a(h) === s.key;
      });
      var g = s.offset, p = g === void 0 ? 0 : g, y = function h(w, C) {
        if (!(w < 0 || !t.value)) {
          var x = t.value.clientHeight, S = !1, b = C;
          if (x) {
            for (var P = C || f, T = 0, O = 0, D = 0, V = Math.min(d.length, v), K = 0; K <= V; K += 1) {
              var R = a(d[K]);
              O = T;
              var E = n.get(R);
              D = O + (E === void 0 ? c : E), T = D, K === v && E === void 0 && (S = !0);
            }
            var M = t.value.scrollTop, N = null;
            switch (P) {
              case "top":
                N = O - p;
                break;
              case "bottom":
                N = D - x + p;
                break;
              default: {
                var _ = M + x;
                O < M ? b = "top" : D > _ && (b = "bottom");
              }
            }
            N !== null && N !== M && i(N);
          }
          u = tt(function() {
            S && o(), h(w - 1, b);
          });
        }
      };
      y(5);
    }
  };
}
var MT = (typeof navigator > "u" ? "undefined" : Le(navigator)) === "object" && /Firefox/i.test(navigator.userAgent);
const AT = MT, zm = function(t, e) {
  var n = !1, r = null;
  function a() {
    clearTimeout(r), n = !0, r = setTimeout(function() {
      n = !1;
    }, 50);
  }
  return function(o) {
    var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, l = o < 0 && t.value || o > 0 && e.value;
    return i && l ? (clearTimeout(r), n = !1) : (!l || n) && a(), !n && l;
  };
};
function DT(t, e, n, r) {
  var a = 0, o = null, i = null, l = !1, u = zm(e, n);
  function s(c) {
    if (!!t.value) {
      tt.cancel(o);
      var v = c.deltaY;
      a += v, i = v, !u(v) && (AT || c.preventDefault(), o = tt(function() {
        var f = l ? 10 : 1;
        r(a * f), a = 0;
      }));
    }
  }
  function d(c) {
    !t.value || (l = c.detail === i);
  }
  return [s, d];
}
var FT = 14 / 15;
function RT(t, e, n) {
  var r = !1, a = 0, o = null, i = null, l = function() {
    o && (o.removeEventListener("touchmove", u), o.removeEventListener("touchend", s));
  }, u = function(f) {
    if (r) {
      var g = Math.ceil(f.touches[0].pageY), p = a - g;
      a = g, n(p) && f.preventDefault(), clearInterval(i), i = setInterval(function() {
        p *= FT, (!n(p, !0) || Math.abs(p) <= 0.1) && clearInterval(i);
      }, 16);
    }
  }, s = function() {
    r = !1, l();
  }, d = function(f) {
    l(), f.touches.length === 1 && !r && (r = !0, a = Math.ceil(f.touches[0].pageY), o = f.target, o.addEventListener("touchmove", u, {
      passive: !1
    }), o.addEventListener("touchend", s));
  }, c = function() {
  };
  dt(function() {
    document.addEventListener("touchmove", c, {
      passive: !1
    }), Ce(t, function(v) {
      e.value.removeEventListener("touchstart", d), l(), clearInterval(i), v && e.value.addEventListener("touchstart", d, {
        passive: !1
      });
    }, {
      immediate: !0
    });
  }), ht(function() {
    document.removeEventListener("touchmove", c);
  });
}
var $T = globalThis && globalThis.__rest || function(t, e) {
  var n = {};
  for (var r in t)
    Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(t); a < r.length; a++)
      e.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[a]) && (n[r[a]] = t[r[a]]);
  return n;
}, LT = [], jT = {
  overflowY: "auto",
  overflowAnchor: "none"
};
function VT(t, e, n, r, a, o) {
  var i = o.getKey;
  return t.slice(e, n + 1).map(function(l, u) {
    var s = e + u, d = a(l, s, {}), c = i(l);
    return m(IT, {
      key: c,
      setRef: function(f) {
        return r(l, f);
      }
    }, {
      default: function() {
        return [d];
      }
    });
  });
}
var BT = pe({
  name: "List",
  inheritAttrs: !1,
  props: {
    prefixCls: String,
    data: Q.array,
    height: Number,
    itemHeight: Number,
    fullHeight: {
      type: Boolean,
      default: void 0
    },
    itemKey: {
      type: [String, Number, Function],
      required: !0
    },
    component: {
      type: [String, Object]
    },
    virtual: {
      type: Boolean,
      default: void 0
    },
    children: Function,
    onScroll: Function,
    onMousedown: Function,
    onMouseenter: Function,
    onVisibleChange: Function
  },
  setup: function(e, n) {
    var r = n.expose, a = F(function() {
      var z = e.height, L = e.itemHeight, $ = e.virtual;
      return !!($ !== !1 && z && L);
    }), o = F(function() {
      var z = e.height, L = e.itemHeight, $ = e.data;
      return a.value && $ && L * $.length > z;
    }), i = Mt({
      scrollTop: 0,
      scrollMoving: !1
    }), l = F(function() {
      return e.data || LT;
    }), u = Xe([]);
    Ce(l, function() {
      u.value = Ot(l.value).slice();
    }, {
      immediate: !0
    });
    var s = Xe(function(z) {
    });
    Ce(function() {
      return e.itemKey;
    }, function(z) {
      typeof z == "function" ? s.value = z : s.value = function(L) {
        return L == null ? void 0 : L[z];
      };
    }, {
      immediate: !0
    });
    var d = G(), c = G(), v = G(), f = function(L) {
      return s.value(L);
    }, g = {
      getKey: f
    };
    function p(z) {
      var L;
      typeof z == "function" ? L = z(i.scrollTop) : L = z;
      var $ = O(L);
      d.value && (d.value.scrollTop = $), i.scrollTop = $;
    }
    var y = ET(u, f, null, null), h = De(y, 4), w = h[0], C = h[1], x = h[2], S = h[3], b = Mt({
      scrollHeight: void 0,
      start: 0,
      end: 0,
      offset: void 0
    }), P = G(0);
    dt(function() {
      vt(function() {
        var z;
        P.value = ((z = c.value) === null || z === void 0 ? void 0 : z.offsetHeight) || 0;
      });
    }), kr(function() {
      vt(function() {
        var z;
        P.value = ((z = c.value) === null || z === void 0 ? void 0 : z.offsetHeight) || 0;
      });
    }), Ce([a, u], function() {
      a.value || k(b, {
        scrollHeight: void 0,
        start: 0,
        end: u.value.length - 1,
        offset: void 0
      });
    }, {
      immediate: !0
    }), Ce([a, u, P, o], function() {
      a.value && !o.value && k(b, {
        scrollHeight: P.value,
        start: 0,
        end: u.value.length - 1,
        offset: void 0
      });
    }, {
      immediate: !0
    }), Ce([o, a, function() {
      return i.scrollTop;
    }, u, S, function() {
      return e.height;
    }, P], function() {
      if (!(!a.value || !o.value)) {
        for (var z = 0, L, $, q, H = u.value.length, J = u.value, Z = i.scrollTop, ae = e.itemHeight, ue = e.height, ne = Z + ue, X = 0; X < H; X += 1) {
          var te = J[X], me = f(te), Oe = x.get(me);
          Oe === void 0 && (Oe = ae);
          var ke = z + Oe;
          L === void 0 && ke >= Z && (L = X, $ = z), q === void 0 && ke > ne && (q = X), z = ke;
        }
        L === void 0 && (L = 0, $ = 0), q === void 0 && (q = H - 1), q = Math.min(q + 1, H), k(b, {
          scrollHeight: z,
          start: L,
          end: q,
          offset: $
        });
      }
    }, {
      immediate: !0
    });
    var T = F(function() {
      return b.scrollHeight - e.height;
    });
    function O(z) {
      var L = z;
      return Number.isNaN(T.value) || (L = Math.min(L, T.value)), L = Math.max(L, 0), L;
    }
    var D = F(function() {
      return i.scrollTop <= 0;
    }), V = F(function() {
      return i.scrollTop >= T.value;
    }), K = zm(D, V);
    function R(z) {
      var L = z;
      p(L);
    }
    function E(z) {
      var L, $ = z.currentTarget.scrollTop;
      Math.abs($ - i.scrollTop) >= 1 && p($), (L = e.onScroll) === null || L === void 0 || L.call(e, z);
    }
    var M = DT(a, D, V, function(z) {
      p(function(L) {
        var $ = L + z;
        return $;
      });
    }), N = De(M, 2), _ = N[0], I = N[1];
    RT(a, d, function(z, L) {
      return K(z, L) ? !1 : (_({
        preventDefault: function() {
        },
        deltaY: z
      }), !0);
    });
    function A(z) {
      a.value && z.preventDefault();
    }
    var B = function() {
      d.value && (d.value.removeEventListener("wheel", _, Wt ? {
        passive: !1
      } : !1), d.value.removeEventListener("DOMMouseScroll", I), d.value.removeEventListener("MozMousePixelScroll", A));
    };
    Ue(function() {
      vt(function() {
        d.value && (B(), d.value.addEventListener("wheel", _, Wt ? {
          passive: !1
        } : !1), d.value.addEventListener("DOMMouseScroll", I), d.value.addEventListener("MozMousePixelScroll", A));
      });
    }), ht(function() {
      B();
    });
    var W = NT(d, u, x, e, f, C, p, function() {
      var z;
      (z = v.value) === null || z === void 0 || z.delayHidden();
    });
    r({
      scrollTo: W
    });
    var U = F(function() {
      var z = null;
      return e.height && (z = k(j({}, e.fullHeight ? "height" : "maxHeight", e.height + "px"), jT), a.value && (z.overflowY = "hidden", i.scrollMoving && (z.pointerEvents = "none"))), z;
    });
    return Ce([function() {
      return b.start;
    }, function() {
      return b.end;
    }, u], function() {
      if (e.onVisibleChange) {
        var z = u.value.slice(b.start, b.end + 1);
        e.onVisibleChange(z, u.value);
      }
    }, {
      flush: "post"
    }), {
      state: i,
      mergedData: u,
      componentStyle: U,
      onFallbackScroll: E,
      onScrollBar: R,
      componentRef: d,
      useVirtual: a,
      calRes: b,
      collectHeight: C,
      setInstance: w,
      sharedConfig: g,
      scrollBarRef: v,
      fillerInnerRef: c
    };
  },
  render: function() {
    var e = this, n = k(k({}, this.$props), this.$attrs), r = n.prefixCls, a = r === void 0 ? "rc-virtual-list" : r, o = n.height;
    n.itemHeight, n.fullHeight, n.data, n.itemKey, n.virtual;
    var i = n.component, l = i === void 0 ? "div" : i;
    n.onScroll;
    var u = n.children, s = u === void 0 ? this.$slots.default : u, d = n.style, c = n.class, v = $T(n, ["prefixCls", "height", "itemHeight", "fullHeight", "data", "itemKey", "virtual", "component", "onScroll", "children", "style", "class"]), f = ge(a, c), g = this.state.scrollTop, p = this.calRes, y = p.scrollHeight, h = p.offset, w = p.start, C = p.end, x = this.componentStyle, S = this.onFallbackScroll, b = this.onScrollBar, P = this.useVirtual, T = this.collectHeight, O = this.sharedConfig, D = this.setInstance, V = this.mergedData;
    return m("div", Y({
      style: k(k({}, d), {
        position: "relative"
      }),
      class: f
    }, v), [m(l, {
      class: "".concat(a, "-holder"),
      style: x,
      ref: "componentRef",
      onScroll: S
    }, {
      default: function() {
        return [m(TT, {
          prefixCls: a,
          height: y,
          offset: h,
          onInnerResize: T,
          ref: "fillerInnerRef"
        }, {
          default: function() {
            return VT(V, w, C, D, s, O);
          }
        })];
      }
    }), P && m(_T, {
      ref: "scrollBarRef",
      prefixCls: a,
      scrollTop: g,
      height: o,
      scrollHeight: y,
      count: V.length,
      onScroll: b,
      onStartMove: function() {
        e.state.scrollMoving = !0;
      },
      onStopMove: function() {
        e.state.scrollMoving = !1;
      }
    }, null)]);
  }
});
const Wm = BT;
function ss(t, e, n) {
  var r = G(t());
  return Ce(e, function(a, o) {
    n ? n(a, o) && (r.value = t()) : r.value = t();
  }), r;
}
function KT() {
  return /(mac\sos|macintosh)/i.test(navigator.appVersion);
}
var Um = Symbol("SelectContextKey");
function HT(t) {
  return ct(Um, t);
}
function zT() {
  return ut(Um, {});
}
var WT = globalThis && globalThis.__rest || function(t, e) {
  var n = {};
  for (var r in t)
    Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(t); a < r.length; a++)
      e.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[a]) && (n[r[a]] = t[r[a]]);
  return n;
};
function kv(t) {
  return typeof t == "string" || typeof t == "number";
}
var UT = pe({
  name: "OptionList",
  inheritAttrs: !1,
  slots: ["option"],
  setup: function(e, n) {
    var r = n.expose, a = n.slots, o = ho(), i = zT(), l = F(function() {
      return "".concat(o.prefixCls, "-item");
    }), u = ss(function() {
      return i.flattenOptions;
    }, [function() {
      return o.open;
    }, function() {
      return i.flattenOptions;
    }], function(b) {
      return b[0];
    }), s = eo(), d = function(P) {
      P.preventDefault();
    }, c = function(P) {
      s.current && s.current.scrollTo(typeof P == "number" ? {
        index: P
      } : P);
    }, v = function(P) {
      for (var T = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1, O = u.value.length, D = 0; D < O; D += 1) {
        var V = (P + D * T + O) % O, K = u.value[V], R = K.group, E = K.data;
        if (!R && !E.disabled)
          return V;
      }
      return -1;
    }, f = Mt({
      activeIndex: v(0)
    }), g = function(P) {
      var T = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
      f.activeIndex = P;
      var O = {
        source: T ? "keyboard" : "mouse"
      }, D = u.value[P];
      if (!D) {
        i.onActiveValue(null, -1, O);
        return;
      }
      i.onActiveValue(D.value, P, O);
    };
    Ce([function() {
      return u.value.length;
    }, function() {
      return o.searchValue;
    }], function() {
      g(i.defaultActiveFirstOption !== !1 ? v(0) : -1);
    }, {
      immediate: !0
    });
    var p = function(P) {
      return i.rawValues.has(P) && o.mode !== "combobox";
    };
    Ce([function() {
      return o.open;
    }, function() {
      return o.searchValue;
    }], function() {
      if (!o.multiple && o.open && i.rawValues.size === 1) {
        var b = Array.from(i.rawValues)[0], P = Ot(u.value).findIndex(function(T) {
          var O = T.data;
          return O[i.fieldNames.value] === b;
        });
        P !== -1 && (g(P), vt(function() {
          c(P);
        }));
      }
      o.open && vt(function() {
        var T;
        (T = s.current) === null || T === void 0 || T.scrollTo(void 0);
      });
    }, {
      immediate: !0,
      flush: "post"
    });
    var y = function(P) {
      P !== void 0 && i.onSelect(P, {
        selected: !i.rawValues.has(P)
      }), o.multiple || o.toggleOpen(!1);
    }, h = function(P) {
      return typeof P.label == "function" ? P.label() : P.label;
    };
    function w(b) {
      var P = u.value[b];
      if (!P)
        return null;
      var T = P.data || {}, O = T.value, D = P.group, V = ya(T, !0), K = h(P);
      return P ? m("div", Y(Y({
        "aria-label": typeof K == "string" && !D ? K : null
      }, V), {}, {
        key: b,
        role: D ? "presentation" : "option",
        id: "".concat(o.id, "_list_").concat(b),
        "aria-selected": p(O)
      }), [O]) : null;
    }
    var C = function(P) {
      var T = P.which, O = P.ctrlKey;
      switch (T) {
        case xe.N:
        case xe.P:
        case xe.UP:
        case xe.DOWN: {
          var D = 0;
          if (T === xe.UP ? D = -1 : T === xe.DOWN ? D = 1 : KT() && O && (T === xe.N ? D = 1 : T === xe.P && (D = -1)), D !== 0) {
            var V = v(f.activeIndex + D, D);
            c(V), g(V, !0);
          }
          break;
        }
        case xe.ENTER: {
          var K = u.value[f.activeIndex];
          K && !K.data.disabled ? y(K.value) : y(void 0), o.open && P.preventDefault();
          break;
        }
        case xe.ESC:
          o.toggleOpen(!1), o.open && P.stopPropagation();
      }
    }, x = function() {
    }, S = function(P) {
      c(P);
    };
    return r({
      onKeydown: C,
      onKeyup: x,
      scrollTo: S
    }), function() {
      var b = o.id, P = o.notFoundContent, T = o.onPopupScroll, O = i.menuItemSelectedIcon, D = i.fieldNames, V = i.virtual, K = i.listHeight, R = i.listItemHeight, E = a.option, M = f.activeIndex, N = Object.keys(D).map(function(_) {
        return D[_];
      });
      return u.value.length === 0 ? m("div", {
        role: "listbox",
        id: "".concat(b, "_list"),
        class: "".concat(l.value, "-empty"),
        onMousedown: d
      }, [P]) : m(ft, null, [m("div", {
        role: "listbox",
        id: "".concat(b, "_list"),
        style: {
          height: 0,
          width: 0,
          overflow: "hidden"
        }
      }, [w(M - 1), w(M), w(M + 1)]), m(Wm, {
        itemKey: "key",
        ref: s,
        data: u.value,
        height: K,
        itemHeight: R,
        fullHeight: !1,
        onMousedown: d,
        onScroll: T,
        virtual: V
      }, {
        default: function(I, A) {
          var B, W, U = I.group, z = I.groupOption, L = I.data, $ = I.value, q = L.key, H = typeof I.label == "function" ? I.label() : I.label;
          if (U) {
            var J = (W = L.title) !== null && W !== void 0 ? W : kv(H) && H;
            return m("div", {
              class: ge(l.value, "".concat(l.value, "-group")),
              title: J
            }, [E ? E(L) : H !== void 0 ? H : q]);
          }
          var Z = L.disabled, ae = L.title;
          L.children;
          var ue = L.style, ne = L.class, X = L.className, te = WT(L, ["disabled", "title", "children", "style", "class", "className"]), me = pt(te, N), Oe = p($), ke = "".concat(l.value, "-option"), Me = ge(l.value, ke, ne, X, (B = {}, j(B, "".concat(ke, "-grouped"), z), j(B, "".concat(ke, "-active"), M === A && !Z), j(B, "".concat(ke, "-disabled"), Z), j(B, "".concat(ke, "-selected"), Oe), B)), Pe = h(I), fe = !O || typeof O == "function" || Oe, le = typeof Pe == "number" ? Pe : Pe || $, ie = kv(le) ? le.toString() : void 0;
          return ae !== void 0 && (ie = ae), m("div", Y(Y({}, me), {}, {
            "aria-selected": Oe,
            class: Me,
            title: ie,
            onMousemove: function(ye) {
              te.onMousemove && te.onMousemove(ye), !(M === A || Z) && g(A);
            },
            onClick: function(ye) {
              Z || y($), te.onClick && te.onClick(ye);
            },
            style: ue
          }), [m("div", {
            class: "".concat(ke, "-content")
          }, [E ? E(L) : le]), At(O) || Oe, fe && m(Ci, {
            class: "".concat(l.value, "-option-state"),
            customizeIcon: O,
            customizeIconProps: {
              isSelected: Oe
            }
          }, {
            default: function() {
              return [Oe ? "\u2713" : null];
            }
          })]);
        }
      })]);
    };
  }
});
const YT = UT;
var qT = globalThis && globalThis.__rest || function(t, e) {
  var n = {};
  for (var r in t)
    Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(t); a < r.length; a++)
      e.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[a]) && (n[r[a]] = t[r[a]]);
  return n;
};
function GT(t) {
  var e = t, n = e.key, r = e.children, a = e.props, o = a.value, i = a.disabled, l = qT(a, ["value", "disabled"]), u = r == null ? void 0 : r.default;
  return k({
    key: n,
    value: o !== void 0 ? o : n,
    children: u,
    disabled: i || i === ""
  }, l);
}
function ds(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = Kt(t).map(function(r, a) {
    var o;
    if (!At(r) || !r.type)
      return null;
    var i = r.type.isSelectOptGroup, l = r.key, u = r.children, s = r.props;
    if (e || !i)
      return GT(r);
    var d = u && u.default ? u.default() : void 0, c = (s == null ? void 0 : s.label) || ((o = u.label) === null || o === void 0 ? void 0 : o.call(u)) || l;
    return k(k({
      key: "__RC_SELECT_GRP__".concat(l === null ? a : String(l), "__")
    }, s), {
      label: c,
      options: ds(d || [])
    });
  }).filter(function(r) {
    return r;
  });
  return n;
}
function XT(t, e, n) {
  var r = Xe(), a = Xe(), o = Xe(), i = Xe([]);
  return Ce([t, e], function() {
    t.value ? i.value = Ot(t.value).slice() : i.value = ds(e.value);
  }, {
    immediate: !0,
    deep: !0
  }), Ue(function() {
    var l = i.value, u = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map(), d = n.value;
    function c(v) {
      for (var f = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, g = 0; g < v.length; g += 1) {
        var p = v[g];
        !p[d.options] || f ? (u.set(p[d.value], p), s.set(p[d.label], p)) : c(p[d.options], !0);
      }
    }
    c(l), r.value = l, a.value = u, o.value = s;
  }), {
    options: r,
    valueOptions: a,
    labelOptions: o
  };
}
var _v = 0, QT = process.env.NODE_ENV !== "test" && Ki();
function JT() {
  var t;
  return QT ? (t = _v, _v += 1) : t = "TEST_OR_SSR", t;
}
function fs() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : G(""), e = "rc_select_".concat(JT());
  return t.value || e;
}
function vs(t) {
  return Array.isArray(t) ? t : t !== void 0 ? [t] : [];
}
var ZT = typeof window < "u" && window.document && window.document.documentElement;
process.env.NODE_ENV;
function eI(t) {
  var e = t.mode, n = t.options, r = t.children, a = t.backfill, o = t.allowClear, i = t.placeholder, l = t.getInputElement, u = t.showSearch, s = t.onSearch, d = t.defaultOpen, c = t.autofocus, v = t.labelInValue, f = t.value, g = t.inputValue, p = t.optionLabelProp, y = us(e), h = u !== void 0 ? u : y || e === "combobox", w = n || ds(r);
  if (pn(e !== "tags" || w.every(function(S) {
    return !S.disabled;
  }), "Please avoid setting option to disabled in tags mode since user can always type text as tag."), pn(e !== "combobox" || !p, "`combobox` mode not support `optionLabelProp`. Please set `value` on Option directly."), pn(e === "combobox" || !a, "`backfill` only works with `combobox` mode."), pn(e === "combobox" || !l, "`getInputElement` only work with `combobox` mode."), Su(e !== "combobox" || !l || !o || !i, "Customize `getInputElement` should customize clear and placeholder logic instead of configuring `allowClear` and `placeholder`."), s && !h && e !== "combobox" && e !== "tags" && pn(!1, "`onSearch` should work with `showSearch` instead of use alone."), Su(!d || c, "`defaultOpen` makes Select open without focus which means it will not close by click outside. You can set `autofocus` if needed."), f != null) {
    var C = vs(f);
    pn(!v || C.every(function(S) {
      return Le(S) === "object" && ("key" in S || "value" in S);
    }), "`value` should in shape of `{ value: string | number, label?: any }` when you set `labelInValue` to `true`"), pn(!y || Array.isArray(f), "`value` should be array when `mode` is `multiple` or `tags`");
  }
  if (r) {
    var x = null;
    r.some(function(S) {
      var b;
      if (!At(S) || !S.type)
        return !1;
      var P = S.type;
      if (P.isSelectOption)
        return !1;
      if (P.isSelectOptGroup) {
        var T = ((b = S.children) === null || b === void 0 ? void 0 : b.default()) || [], O = T.every(function(D) {
          return !At(D) || !S.type || D.type.isSelectOption ? !0 : (x = D.type, !1);
        });
        return !O;
      }
      return x = P, !0;
    }), x && pn(!1, "`children` should be `Select.Option` or `Select.OptGroup` instead of `".concat(x.displayName || x.name || x, "`.")), pn(g === void 0, "`inputValue` is deprecated, please use `searchValue` instead.");
  }
}
function Vl(t, e) {
  return vs(t).join("").toUpperCase().includes(e);
}
const tI = function(t, e, n, r, a) {
  return F(function() {
    var o = n.value, i = a == null ? void 0 : a.value, l = r == null ? void 0 : r.value;
    if (!o || l === !1)
      return t.value;
    var u = e.value, s = u.options, d = u.label, c = u.value, v = [], f = typeof l == "function", g = o.toUpperCase(), p = f ? l : function(h, w) {
      return i ? Vl(w[i], g) : w[s] ? Vl(w[d !== "children" ? d : "label"], g) : Vl(w[c], g);
    }, y = f ? function(h) {
      return Fu(h);
    } : function(h) {
      return h;
    };
    return t.value.forEach(function(h) {
      if (h[s]) {
        var w = p(o, y(h));
        if (w)
          v.push(h);
        else {
          var C = h[s].filter(function(x) {
            return p(o, y(x));
          });
          C.length && v.push(k(k({}, h), j({}, s, C)));
        }
        return;
      }
      p(o, y(h)) && v.push(h);
    }), v;
  });
}, nI = function(t, e) {
  var n = Xe({
    values: /* @__PURE__ */ new Map(),
    options: /* @__PURE__ */ new Map()
  }), r = F(function() {
    var o = n.value, i = o.values, l = o.options, u = t.value.map(function(c) {
      var v;
      return c.label === void 0 ? k(k({}, c), {
        label: (v = i.get(c.value)) === null || v === void 0 ? void 0 : v.label
      }) : c;
    }), s = /* @__PURE__ */ new Map(), d = /* @__PURE__ */ new Map();
    return u.forEach(function(c) {
      s.set(c.value, c), d.set(c.value, e.value.get(c.value) || l.get(c.value));
    }), n.value.values = s, n.value.options = d, u;
  }), a = function(i) {
    return e.value.get(i) || n.value.options.get(i);
  };
  return [r, a];
};
function Rt(t, e) {
  var n = e || {}, r = n.defaultValue, a = n.value, o = a === void 0 ? G() : a, i = typeof t == "function" ? t() : t;
  o.value !== void 0 && (i = St(o)), r !== void 0 && (i = typeof r == "function" ? r() : r);
  var l = G(i), u = G(i);
  Ue(function() {
    var d = o.value !== void 0 ? o.value : l.value;
    e.postState && (d = e.postState(d)), u.value = d;
  });
  function s(d) {
    var c = u.value;
    l.value = d, Ot(u.value) !== d && e.onChange && e.onChange(d, c);
  }
  return Ce(o, function() {
    l.value = o.value;
  }), [u, s];
}
function to(t) {
  var e = typeof t == "function" ? t() : t, n = G(e);
  function r(a) {
    n.value = a;
  }
  return [n, r];
}
var rI = ["inputValue"];
function Ym() {
  return k(k({}, Qi()), {
    prefixCls: String,
    id: String,
    backfill: {
      type: Boolean,
      default: void 0
    },
    fieldNames: Object,
    inputValue: String,
    searchValue: String,
    onSearch: Function,
    autoClearSearchValue: {
      type: Boolean,
      default: void 0
    },
    onSelect: Function,
    onDeselect: Function,
    filterOption: {
      type: [Boolean, Function],
      default: void 0
    },
    filterSort: Function,
    optionFilterProp: String,
    optionLabelProp: String,
    options: Array,
    defaultActiveFirstOption: {
      type: Boolean,
      default: void 0
    },
    virtual: {
      type: Boolean,
      default: void 0
    },
    listHeight: Number,
    listItemHeight: Number,
    menuItemSelectedIcon: Q.any,
    mode: String,
    labelInValue: {
      type: Boolean,
      default: void 0
    },
    value: Q.any,
    defaultValue: Q.any,
    onChange: Function,
    children: Array
  });
}
function aI(t) {
  return !t || Le(t) !== "object";
}
const oI = pe({
  name: "Select",
  inheritAttrs: !1,
  props: kt(Ym(), {
    prefixCls: "vc-select",
    autoClearSearchValue: !0,
    listHeight: 200,
    listItemHeight: 20,
    dropdownMatchSelectWidth: !0
  }),
  setup: function(e, n) {
    var r = n.expose, a = n.attrs, o = n.slots, i = fs(ze(e, "id")), l = F(function() {
      return us(e.mode);
    }), u = F(function() {
      return !!(!e.options && e.children);
    }), s = F(function() {
      return e.filterOption === void 0 && e.mode === "combobox" ? !1 : e.filterOption;
    }), d = F(function() {
      return lm(e.fieldNames, u.value);
    }), c = Rt("", {
      value: F(function() {
        return e.searchValue !== void 0 ? e.searchValue : e.inputValue;
      }),
      postState: function(le) {
        return le || "";
      }
    }), v = De(c, 2), f = v[0], g = v[1], p = XT(ze(e, "options"), ze(e, "children"), d), y = p.valueOptions, h = p.labelOptions, w = p.options, C = function(le) {
      var ie = vs(le);
      return ie.map(function(de) {
        var ye, _e, Be, Ve, he, oe;
        aI(de) ? Be = de : (he = de.key, Ve = de.label, Be = (ye = de.value) !== null && ye !== void 0 ? ye : he);
        var ve = y.value.get(Be);
        return ve && (Ve === void 0 && (Ve = ve == null ? void 0 : ve[e.optionLabelProp || d.value.label]), he === void 0 && (he = (_e = ve == null ? void 0 : ve.key) !== null && _e !== void 0 ? _e : Be), oe = ve == null ? void 0 : ve.disabled), {
          label: Ve,
          value: Be,
          key: he,
          disabled: oe,
          option: ve
        };
      });
    }, x = Rt(e.defaultValue, {
      value: ze(e, "value")
    }), S = De(x, 2), b = S[0], P = S[1], T = F(function() {
      var fe, le = C(b.value);
      return e.mode === "combobox" && !(!((fe = le[0]) === null || fe === void 0) && fe.value) ? [] : le;
    }), O = nI(T, y), D = De(O, 2), V = D[0], K = D[1], R = F(function() {
      if (!e.mode && V.value.length === 1) {
        var fe = V.value[0];
        if (fe.value === null && (fe.label === null || fe.label === void 0))
          return [];
      }
      return V.value.map(function(le) {
        var ie;
        return k(k({}, le), {
          label: (ie = typeof le.label == "function" ? le.label() : le.label) !== null && ie !== void 0 ? ie : le.value
        });
      });
    }), E = F(function() {
      return new Set(V.value.map(function(fe) {
        return fe.value;
      }));
    });
    Ue(function() {
      var fe;
      if (e.mode === "combobox") {
        var le = (fe = V.value[0]) === null || fe === void 0 ? void 0 : fe.value;
        le != null && g(String(le));
      }
    }, {
      flush: "post"
    });
    var M = function(le, ie) {
      var de, ye = ie != null ? ie : le;
      return de = {}, j(de, d.value.value, le), j(de, d.value.label, ye), de;
    }, N = Xe();
    Ue(function() {
      if (e.mode !== "tags") {
        N.value = w.value;
        return;
      }
      var fe = w.value.slice(), le = function(de) {
        return y.value.has(de);
      };
      Ie(V.value).sort(function(ie, de) {
        return ie.value < de.value ? -1 : 1;
      }).forEach(function(ie) {
        var de = ie.value;
        le(de) || fe.push(M(de, ie.label));
      }), N.value = fe;
    });
    var _ = tI(N, d, f, s, ze(e, "optionFilterProp")), I = F(function() {
      return e.mode !== "tags" || !f.value || _.value.some(function(fe) {
        return fe[e.optionFilterProp || "value"] === f.value;
      }) ? _.value : [M(f.value)].concat(Ie(_.value));
    }), A = F(function() {
      return e.filterSort ? Ie(I.value).sort(function(fe, le) {
        return e.filterSort(fe, le);
      }) : I.value;
    }), B = F(function() {
      return f1(A.value, {
        fieldNames: d.value,
        childrenAsData: u.value
      });
    }), W = function(le) {
      var ie = C(le);
      if (P(ie), e.onChange && (ie.length !== V.value.length || ie.some(function(_e, Be) {
        var Ve;
        return ((Ve = V.value[Be]) === null || Ve === void 0 ? void 0 : Ve.value) !== (_e == null ? void 0 : _e.value);
      }))) {
        var de = e.labelInValue ? ie.map(function(_e) {
          return k(k({}, _e), {
            originLabel: _e.label,
            label: typeof _e.label == "function" ? _e.label() : _e.label
          });
        }) : ie.map(function(_e) {
          return _e.value;
        }), ye = ie.map(function(_e) {
          return Fu(K(_e.value));
        });
        e.onChange(
          l.value ? de : de[0],
          l.value ? ye : ye[0]
        );
      }
    }, U = to(null), z = De(U, 2), L = z[0], $ = z[1], q = to(0), H = De(q, 2), J = H[0], Z = H[1], ae = F(function() {
      return e.defaultActiveFirstOption !== void 0 ? e.defaultActiveFirstOption : e.mode !== "combobox";
    }), ue = function(le, ie) {
      var de = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, ye = de.source, _e = ye === void 0 ? "keyboard" : ye;
      Z(ie), e.backfill && e.mode === "combobox" && le !== null && _e === "keyboard" && $(String(le));
    }, ne = function(le, ie) {
      var de = function() {
        var ee, re = K(le), ce = re == null ? void 0 : re[d.value.label];
        return [e.labelInValue ? {
          label: typeof ce == "function" ? ce() : ce,
          originLabel: ce,
          value: le,
          key: (ee = re == null ? void 0 : re.key) !== null && ee !== void 0 ? ee : le
        } : le, Fu(re)];
      };
      if (ie && e.onSelect) {
        var ye = de(), _e = De(ye, 2), Be = _e[0], Ve = _e[1];
        e.onSelect(Be, Ve);
      } else if (!ie && e.onDeselect) {
        var he = de(), oe = De(he, 2), ve = oe[0], Se = oe[1];
        e.onDeselect(ve, Se);
      }
    }, X = function(le, ie) {
      var de, ye = l.value ? ie.selected : !0;
      ye ? de = l.value ? [].concat(Ie(V.value), [le]) : [le] : de = V.value.filter(function(_e) {
        return _e.value !== le;
      }), W(de), ne(le, ye), e.mode === "combobox" ? $("") : (!l.value || e.autoClearSearchValue) && (g(""), $(""));
    }, te = function(le, ie) {
      W(le), (ie.type === "remove" || ie.type === "clear") && ie.values.forEach(function(de) {
        ne(de.value, !1);
      });
    }, me = function(le, ie) {
      var de;
      if (g(le), $(null), ie.source === "submit") {
        var ye = (le || "").trim();
        if (ye) {
          var _e = Array.from(new Set([].concat(Ie(E.value), [ye])));
          W(_e), ne(ye, !0), g("");
        }
        return;
      }
      ie.source !== "blur" && (e.mode === "combobox" && W(le), (de = e.onSearch) === null || de === void 0 || de.call(e, le));
    }, Oe = function(le) {
      var ie = le;
      e.mode !== "tags" && (ie = le.map(function(ye) {
        var _e = h.value.get(ye);
        return _e == null ? void 0 : _e.value;
      }).filter(function(ye) {
        return ye !== void 0;
      }));
      var de = Array.from(new Set([].concat(Ie(E.value), Ie(ie))));
      W(de), de.forEach(function(ye) {
        ne(ye, !0);
      });
    }, ke = F(function() {
      return e.virtual !== !1 && e.dropdownMatchSelectWidth !== !1;
    });
    HT(wi(k(k({}, p), {
      flattenOptions: B,
      onActiveValue: ue,
      defaultActiveFirstOption: ae,
      onSelect: X,
      menuItemSelectedIcon: ze(e, "menuItemSelectedIcon"),
      rawValues: E,
      fieldNames: d,
      virtual: ke,
      listHeight: ze(e, "listHeight"),
      listItemHeight: ze(e, "listItemHeight"),
      childrenAsData: u
    }))), process.env.NODE_ENV !== "production" && Ue(function() {
      eI(e);
    }, {
      flush: "post"
    });
    var Me = G();
    r({
      focus: function() {
        var le;
        (le = Me.value) === null || le === void 0 || le.focus();
      },
      blur: function() {
        var le;
        (le = Me.value) === null || le === void 0 || le.blur();
      },
      scrollTo: function(le) {
        var ie;
        (ie = Me.value) === null || ie === void 0 || ie.scrollTo(le);
      }
    });
    var Pe = F(function() {
      return pt(e, [
        "id",
        "mode",
        "prefixCls",
        "backfill",
        "fieldNames",
        "inputValue",
        "searchValue",
        "onSearch",
        "autoClearSearchValue",
        "onSelect",
        "onDeselect",
        "dropdownMatchSelectWidth",
        "filterOption",
        "filterSort",
        "optionFilterProp",
        "optionLabelProp",
        "options",
        "children",
        "defaultActiveFirstOption",
        "menuItemSelectedIcon",
        "virtual",
        "listHeight",
        "listItemHeight",
        "value",
        "defaultValue",
        "labelInValue",
        "onChange"
      ]);
    });
    return function() {
      return m(cs, Y(Y(Y({}, Pe.value), a), {}, {
        id: i,
        prefixCls: e.prefixCls,
        ref: Me,
        omitDomProps: rI,
        mode: e.mode,
        displayValues: R.value,
        onDisplayValuesChange: te,
        searchValue: f.value,
        onSearch: me,
        onSearchSplit: Oe,
        dropdownMatchSelectWidth: e.dropdownMatchSelectWidth,
        OptionList: YT,
        emptyOptions: !B.value.length,
        activeValue: L.value,
        activeDescendantId: "".concat(i, "_list_").concat(J.value)
      }), o);
    };
  }
});
var ps = function() {
  return null;
};
ps.isSelectOption = !0;
ps.displayName = "ASelectOption";
const iI = ps;
var hs = function() {
  return null;
};
hs.isSelectOptGroup = !0;
hs.displayName = "ASelectOptGroup";
const lI = hs;
var uI = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z" } }] }, name: "down", theme: "outlined" };
const cI = uI;
function Ev(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? Object(arguments[e]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(a) {
      return Object.getOwnPropertyDescriptor(n, a).enumerable;
    }))), r.forEach(function(a) {
      sI(t, a, n[a]);
    });
  }
  return t;
}
function sI(t, e, n) {
  return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
var gs = function(e, n) {
  var r = Ev({}, e, n.attrs);
  return m(st, Ev({}, r, {
    icon: cI
  }), null);
};
gs.displayName = "DownOutlined";
gs.inheritAttrs = !1;
const ms = gs;
var dI = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z" } }] }, name: "check", theme: "outlined" };
const fI = dI;
function Nv(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? Object(arguments[e]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(a) {
      return Object.getOwnPropertyDescriptor(n, a).enumerable;
    }))), r.forEach(function(a) {
      vI(t, a, n[a]);
    });
  }
  return t;
}
function vI(t, e, n) {
  return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
var ys = function(e, n) {
  var r = Nv({}, e, n.attrs);
  return m(st, Nv({}, r, {
    icon: fI
  }), null);
};
ys.displayName = "CheckOutlined";
ys.inheritAttrs = !1;
const qm = ys;
var pI = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z" } }] }, name: "search", theme: "outlined" };
const hI = pI;
function Mv(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? Object(arguments[e]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(a) {
      return Object.getOwnPropertyDescriptor(n, a).enumerable;
    }))), r.forEach(function(a) {
      gI(t, a, n[a]);
    });
  }
  return t;
}
function gI(t, e, n) {
  return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
var bs = function(e, n) {
  var r = Mv({}, e, n.attrs);
  return m(st, Mv({}, r, {
    icon: hI
  }), null);
};
bs.displayName = "SearchOutlined";
bs.inheritAttrs = !1;
const Cs = bs;
function ws(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = t.loading, r = t.multiple, a = t.prefixCls, o = t.suffixIcon || e.suffixIcon && e.suffixIcon(), i = t.clearIcon || e.clearIcon && e.clearIcon(), l = t.menuItemSelectedIcon || e.menuItemSelectedIcon && e.menuItemSelectedIcon(), u = t.removeIcon || e.removeIcon && e.removeIcon(), s = i;
  i || (s = m(Ar, null, null));
  var d = null;
  if (o !== void 0)
    d = o;
  else if (n)
    d = m(Bn, {
      spin: !0
    }, null);
  else {
    var c = "".concat(a, "-suffix");
    d = function(p) {
      var y = p.open, h = p.showSearch;
      return y && h ? m(Cs, {
        class: c
      }, null) : m(ms, {
        class: c
      }, null);
    };
  }
  var v = null;
  l !== void 0 ? v = l : r ? v = m(qm, null, null) : v = null;
  var f = null;
  return u !== void 0 ? f = u : f = m(Bi, null, null), {
    clearIcon: s,
    suffixIcon: d,
    itemIcon: v,
    removeIcon: f
  };
}
var Si = Symbol("ContextProps"), xi = Symbol("InternalContextProps"), mI = function(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : F(function() {
    return !0;
  }), r = G(/* @__PURE__ */ new Map()), a = function(u, s) {
    r.value.set(u, s), r.value = new Map(r.value);
  }, o = function(u) {
    r.value.delete(u), r.value = new Map(r.value);
  }, i = sn();
  Ce([n, r], function() {
    if (process.env.NODE_ENV !== "production" && n.value && r.value.size > 1) {
      mt(!1, "Form.Item", "FormItem can only collect one field item, you haved set ".concat(Ie(r.value.values()).map(function(u) {
        return "`".concat(u.name, "`");
      }).join(", "), " ").concat(r.value.size, " field items.\n        You can set not need to be collected fields into `a-form-item-rest`"));
      for (var l = i; l.parent; )
        console.warn("at", l.type), l = l.parent;
    }
  }), ct(Si, e), ct(xi, {
    addFormItemField: a,
    removeFormItemField: o
  });
}, zu = {
  id: F(function() {
  }),
  onFieldBlur: function() {
  },
  onFieldChange: function() {
  },
  clearValidate: function() {
  }
}, Wu = {
  addFormItemField: function() {
  },
  removeFormItemField: function() {
  }
}, jt = function() {
  var e = ut(xi, Wu), n = Symbol("FormItemFieldKey"), r = sn();
  return e.addFormItemField(n, r.type), ht(function() {
    e.removeFormItemField(n);
  }), ct(xi, Wu), ct(Si, zu), ut(Si, zu);
};
const Uu = pe({
  name: "AFormItemRest",
  setup: function(e, n) {
    var r = n.slots;
    return ct(xi, Wu), ct(Si, zu), function() {
      var a;
      return (a = r.default) === null || a === void 0 ? void 0 : a.call(r);
    };
  }
});
var Gm = function() {
  return k(k({}, pt(Ym(), ["inputIcon", "mode", "getInputElement", "getRawInputElement", "backfill"])), {
    value: {
      type: [Array, Object, String, Number]
    },
    defaultValue: {
      type: [Array, Object, String, Number]
    },
    notFoundContent: Q.any,
    suffixIcon: Q.any,
    itemIcon: Q.any,
    size: String,
    mode: String,
    bordered: {
      type: Boolean,
      default: !0
    },
    transitionName: String,
    choiceTransitionName: {
      type: String,
      default: ""
    },
    "onUpdate:value": Function
  });
}, Av = "SECRET_COMBOBOX_MODE_DO_NOT_USE", Tn = pe({
  name: "ASelect",
  Option: iI,
  OptGroup: lI,
  inheritAttrs: !1,
  props: kt(Gm(), {
    listHeight: 256,
    listItemHeight: 24
  }),
  SECRET_COMBOBOX_MODE_DO_NOT_USE: Av,
  slots: [
    "notFoundContent",
    "suffixIcon",
    "itemIcon",
    "removeIcon",
    "clearIcon",
    "dropdownRender",
    "option",
    "placeholder",
    "tagRender",
    "maxTagPlaceholder",
    "optionLabel"
  ],
  setup: function(e, n) {
    var r = n.attrs, a = n.emit, o = n.slots, i = n.expose, l = G(), u = jt(), s = function() {
      var D;
      (D = l.value) === null || D === void 0 || D.focus();
    }, d = function() {
      var D;
      (D = l.value) === null || D === void 0 || D.blur();
    }, c = function(D) {
      var V;
      (V = l.value) === null || V === void 0 || V.scrollTo(D);
    }, v = F(function() {
      var O = e.mode;
      if (O !== "combobox")
        return O === Av ? "combobox" : O;
    }), f = Qe("select", e), g = f.prefixCls, p = f.direction, y = f.configProvider, h = f.size, w = f.getPrefixCls, C = F(function() {
      return w();
    }), x = F(function() {
      return Pu(C.value, "slide-up", e.transitionName);
    }), S = F(function() {
      var O;
      return ge((O = {}, j(O, "".concat(g.value, "-lg"), h.value === "large"), j(O, "".concat(g.value, "-sm"), h.value === "small"), j(O, "".concat(g.value, "-rtl"), p.value === "rtl"), j(O, "".concat(g.value, "-borderless"), !e.bordered), O));
    }), b = function() {
      for (var D = arguments.length, V = new Array(D), K = 0; K < D; K++)
        V[K] = arguments[K];
      a("update:value", V[0]), a.apply(void 0, ["change"].concat(V)), u.onFieldChange();
    }, P = function(D) {
      a("blur", D), u.onFieldBlur();
    };
    i({
      blur: d,
      focus: s,
      scrollTo: c
    });
    var T = F(function() {
      return v.value === "multiple" || v.value === "tags";
    });
    return function() {
      var O, D, V = e.notFoundContent, K = e.listHeight, R = K === void 0 ? 256 : K, E = e.listItemHeight, M = E === void 0 ? 24 : E, N = e.getPopupContainer, _ = e.dropdownClassName, I = e.virtual, A = e.dropdownMatchSelectWidth, B = e.id, W = B === void 0 ? u.id.value : B, U = e.placeholder, z = U === void 0 ? (O = o.placeholder) === null || O === void 0 ? void 0 : O.call(o) : U, L = y.renderEmpty, $ = y.getPopupContainer, q;
      V !== void 0 ? q = V : o.notFoundContent ? q = o.notFoundContent() : v.value === "combobox" ? q = null : q = L("Select");
      var H = ws(k(k({}, e), {
        multiple: T.value,
        prefixCls: g.value
      }), o), J = H.suffixIcon, Z = H.itemIcon, ae = H.removeIcon, ue = H.clearIcon, ne = pt(e, ["prefixCls", "suffixIcon", "itemIcon", "removeIcon", "clearIcon", "size", "bordered"]), X = ge(_, j({}, "".concat(g.value, "-dropdown-").concat(p.value), p.value === "rtl"));
      return m(oI, Y(Y(Y({
        ref: l,
        virtual: I,
        dropdownMatchSelectWidth: A
      }, ne), r), {}, {
        placeholder: z,
        listHeight: R,
        listItemHeight: M,
        mode: v.value,
        prefixCls: g.value,
        direction: p.value,
        inputIcon: J,
        menuItemSelectedIcon: Z,
        removeIcon: ae,
        clearIcon: ue,
        notFoundContent: q,
        class: [S.value, r.class],
        getPopupContainer: N || $,
        dropdownClassName: X,
        onChange: b,
        onBlur: P,
        id: W,
        dropdownRender: ne.dropdownRender || o.dropdownRender,
        transitionName: x.value,
        children: (D = o.default) === null || D === void 0 ? void 0 : D.call(o),
        tagRender: e.tagRender || o.tagRender,
        optionLabelRender: o.optionLabel,
        maxTagPlaceholder: e.maxTagPlaceholder || o.maxTagPlaceholder
      }), {
        option: o.option
      });
    };
  }
});
Tn.install = function(t) {
  return t.component(Tn.name, Tn), t.component(Tn.Option.displayName, Tn.Option), t.component(Tn.OptGroup.displayName, Tn.OptGroup), t;
};
Tn.Option;
Tn.OptGroup;
const Pi = Tn;
var Dv = ["xxxl", "xxl", "xl", "lg", "md", "sm", "xs"], Fo = {
  xs: "(max-width: 575px)",
  sm: "(min-width: 576px)",
  md: "(min-width: 768px)",
  lg: "(min-width: 992px)",
  xl: "(min-width: 1200px)",
  xxl: "(min-width: 1600px)",
  xxxl: "(min-width: 2000px)"
}, pr = /* @__PURE__ */ new Map(), Bl = -1, Ro = {}, yI = {
  matchHandlers: {},
  dispatch: function(e) {
    return Ro = e, pr.forEach(function(n) {
      return n(Ro);
    }), pr.size >= 1;
  },
  subscribe: function(e) {
    return pr.size || this.register(), Bl += 1, pr.set(Bl, e), e(Ro), Bl;
  },
  unsubscribe: function(e) {
    pr.delete(e), pr.size || this.unregister();
  },
  unregister: function() {
    var e = this;
    Object.keys(Fo).forEach(function(n) {
      var r = Fo[n], a = e.matchHandlers[r];
      a == null || a.mql.removeListener(a == null ? void 0 : a.listener);
    }), pr.clear();
  },
  register: function() {
    var e = this;
    Object.keys(Fo).forEach(function(n) {
      var r = Fo[n], a = function(l) {
        var u = l.matches;
        e.dispatch(k(k({}, Ro), j({}, n, u)));
      }, o = window.matchMedia(r);
      o.addListener(a), e.matchHandlers[r] = {
        mql: o,
        listener: a
      }, a(o);
    });
  }
};
const Oi = yI;
function bI() {
  var t = G({}), e = null;
  return dt(function() {
    e = Oi.subscribe(function(n) {
      t.value = n;
    });
  }), va(function() {
    Oi.unsubscribe(e);
  }), t;
}
var CI = Symbol("SizeProvider"), wI = function(e) {
  var n = e ? F(function() {
    return e.size;
  }) : ut(CI, F(function() {
    return "default";
  }));
  return n;
};
function xn(t) {
  var e = Xe();
  return Ue(function() {
    e.value = t();
  }, {
    flush: "sync"
  }), e;
}
var nn = {
  adjustX: 1,
  adjustY: 1
}, rn = [0, 0], Xm = {
  left: {
    points: ["cr", "cl"],
    overflow: nn,
    offset: [-4, 0],
    targetOffset: rn
  },
  right: {
    points: ["cl", "cr"],
    overflow: nn,
    offset: [4, 0],
    targetOffset: rn
  },
  top: {
    points: ["bc", "tc"],
    overflow: nn,
    offset: [0, -4],
    targetOffset: rn
  },
  bottom: {
    points: ["tc", "bc"],
    overflow: nn,
    offset: [0, 4],
    targetOffset: rn
  },
  topLeft: {
    points: ["bl", "tl"],
    overflow: nn,
    offset: [0, -4],
    targetOffset: rn
  },
  leftTop: {
    points: ["tr", "tl"],
    overflow: nn,
    offset: [-4, 0],
    targetOffset: rn
  },
  topRight: {
    points: ["br", "tr"],
    overflow: nn,
    offset: [0, -4],
    targetOffset: rn
  },
  rightTop: {
    points: ["tl", "tr"],
    overflow: nn,
    offset: [4, 0],
    targetOffset: rn
  },
  bottomRight: {
    points: ["tr", "br"],
    overflow: nn,
    offset: [0, 4],
    targetOffset: rn
  },
  rightBottom: {
    points: ["bl", "br"],
    overflow: nn,
    offset: [4, 0],
    targetOffset: rn
  },
  bottomLeft: {
    points: ["tl", "bl"],
    overflow: nn,
    offset: [0, 4],
    targetOffset: rn
  },
  leftBottom: {
    points: ["br", "bl"],
    overflow: nn,
    offset: [-4, 0],
    targetOffset: rn
  }
}, SI = {
  prefixCls: String,
  id: String,
  overlayInnerStyle: Q.any
};
const xI = pe({
  name: "Content",
  props: SI,
  slots: ["overlay"],
  setup: function(e, n) {
    var r = n.slots;
    return function() {
      var a;
      return m("div", {
        class: "".concat(e.prefixCls, "-inner"),
        id: e.id,
        role: "tooltip",
        style: e.overlayInnerStyle
      }, [(a = r.overlay) === null || a === void 0 ? void 0 : a.call(r)]);
    };
  }
});
var PI = globalThis && globalThis.__rest || function(t, e) {
  var n = {};
  for (var r in t)
    Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(t); a < r.length; a++)
      e.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[a]) && (n[r[a]] = t[r[a]]);
  return n;
};
function Fv() {
}
const OI = pe({
  name: "Tooltip",
  inheritAttrs: !1,
  props: {
    trigger: Q.any.def(["hover"]),
    defaultVisible: {
      type: Boolean,
      default: void 0
    },
    visible: {
      type: Boolean,
      default: void 0
    },
    placement: Q.string.def("right"),
    transitionName: String,
    animation: Q.any,
    afterVisibleChange: Q.func.def(function() {
    }),
    overlayStyle: {
      type: Object,
      default: void 0
    },
    overlayClassName: String,
    prefixCls: Q.string.def("rc-tooltip"),
    mouseEnterDelay: Q.number.def(0.1),
    mouseLeaveDelay: Q.number.def(0.1),
    getPopupContainer: Function,
    destroyTooltipOnHide: {
      type: Boolean,
      default: !1
    },
    align: Q.object.def(function() {
      return {};
    }),
    arrowContent: Q.any.def(null),
    tipId: String,
    builtinPlacements: Q.object,
    overlayInnerStyle: {
      type: Object,
      default: void 0
    },
    popupVisible: {
      type: Boolean,
      default: void 0
    },
    onVisibleChange: Function,
    onPopupAlign: Function
  },
  slots: ["arrowContent", "overlay"],
  setup: function(e, n) {
    var r = n.slots, a = n.attrs, o = n.expose, i = G(), l = function() {
      var v = e.prefixCls, f = e.tipId, g = e.overlayInnerStyle;
      return [m("div", {
        class: "".concat(v, "-arrow"),
        key: "arrow"
      }, [ua(r, e, "arrowContent")]), m(xI, {
        key: "content",
        prefixCls: v,
        id: f,
        overlayInnerStyle: g
      }, {
        overlay: r.overlay
      })];
    }, u = function() {
      return i.value.getPopupDomNode();
    };
    o({
      getPopupDomNode: u,
      triggerDOM: i,
      forcePopupAlign: function() {
        var v;
        return (v = i.value) === null || v === void 0 ? void 0 : v.forcePopupAlign();
      }
    });
    var s = G(!1), d = G(!1);
    return Ue(function() {
      var c = e.destroyTooltipOnHide;
      if (typeof c == "boolean")
        s.value = c;
      else if (c && Le(c) === "object") {
        var v = c.keepParent;
        s.value = v === !0, d.value = v === !1;
      }
    }), function() {
      var c = e.overlayClassName, v = e.trigger, f = e.mouseEnterDelay, g = e.mouseLeaveDelay, p = e.overlayStyle, y = e.prefixCls, h = e.afterVisibleChange, w = e.transitionName, C = e.animation, x = e.placement, S = e.align;
      e.destroyTooltipOnHide;
      var b = e.defaultVisible, P = PI(e, ["overlayClassName", "trigger", "mouseEnterDelay", "mouseLeaveDelay", "overlayStyle", "prefixCls", "afterVisibleChange", "transitionName", "animation", "placement", "align", "destroyTooltipOnHide", "defaultVisible"]), T = k({}, P);
      e.visible !== void 0 && (T.popupVisible = e.visible);
      var O = k(k(k({
        popupClassName: c,
        prefixCls: y,
        action: v,
        builtinPlacements: Xm,
        popupPlacement: x,
        popupAlign: S,
        afterPopupVisibleChange: h,
        popupTransitionName: w,
        popupAnimation: C,
        defaultPopupVisible: b,
        destroyPopupOnHide: s.value,
        autoDestroy: d.value,
        mouseLeaveDelay: g,
        popupStyle: p,
        mouseEnterDelay: f
      }, T), a), {
        onPopupVisibleChange: e.onVisibleChange || Fv,
        onPopupAlign: e.onPopupAlign || Fv,
        ref: i,
        popup: l()
      });
      return m(vo, O, {
        default: r.default
      });
    };
  }
});
var TI = Ht("success", "processing", "error", "default", "warning"), Qm = Ht("pink", "red", "yellow", "orange", "cyan", "green", "blue", "purple", "geekblue", "magenta", "volcano", "gold", "lime");
const II = function() {
  return {
    trigger: [String, Array],
    visible: {
      type: Boolean,
      default: void 0
    },
    defaultVisible: {
      type: Boolean,
      default: void 0
    },
    placement: String,
    color: String,
    transitionName: String,
    overlayStyle: {
      type: Object,
      default: void 0
    },
    overlayClassName: String,
    openClassName: String,
    prefixCls: String,
    mouseEnterDelay: Number,
    mouseLeaveDelay: Number,
    getPopupContainer: Function,
    arrowPointAtCenter: {
      type: Boolean,
      default: void 0
    },
    autoAdjustOverflow: {
      type: [Boolean, Object],
      default: void 0
    },
    destroyTooltipOnHide: {
      type: Boolean,
      default: void 0
    },
    align: {
      type: Object,
      default: void 0
    },
    builtinPlacements: {
      type: Object,
      default: void 0
    },
    children: Array,
    onVisibleChange: Function,
    "onUpdate:visible": Function
  };
};
var kI = {
  adjustX: 1,
  adjustY: 1
}, Rv = {
  adjustX: 0,
  adjustY: 0
}, _I = [0, 0];
function $v(t) {
  return typeof t == "boolean" ? t ? kI : Rv : k(k({}, Rv), t);
}
function Jm(t) {
  var e = t.arrowWidth, n = e === void 0 ? 4 : e, r = t.horizontalArrowShift, a = r === void 0 ? 16 : r, o = t.verticalArrowShift, i = o === void 0 ? 8 : o, l = t.autoAdjustOverflow, u = t.arrowPointAtCenter, s = {
    left: {
      points: ["cr", "cl"],
      offset: [-4, 0]
    },
    right: {
      points: ["cl", "cr"],
      offset: [4, 0]
    },
    top: {
      points: ["bc", "tc"],
      offset: [0, -4]
    },
    bottom: {
      points: ["tc", "bc"],
      offset: [0, 4]
    },
    topLeft: {
      points: ["bl", "tc"],
      offset: [-(a + n), -4]
    },
    leftTop: {
      points: ["tr", "cl"],
      offset: [-4, -(i + n)]
    },
    topRight: {
      points: ["br", "tc"],
      offset: [a + n, -4]
    },
    rightTop: {
      points: ["tl", "cr"],
      offset: [4, -(i + n)]
    },
    bottomRight: {
      points: ["tr", "bc"],
      offset: [a + n, 4]
    },
    rightBottom: {
      points: ["bl", "cr"],
      offset: [4, i + n]
    },
    bottomLeft: {
      points: ["tl", "bc"],
      offset: [-(a + n), 4]
    },
    leftBottom: {
      points: ["br", "cl"],
      offset: [-4, i + n]
    }
  };
  return Object.keys(s).forEach(function(d) {
    s[d] = u ? k(k({}, s[d]), {
      overflow: $v(l),
      targetOffset: _I
    }) : k(k({}, Xm[d]), {
      overflow: $v(l)
    }), s[d].ignoreShake = !0;
  }), s;
}
function Yu() {
  for (var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], e = 0, n = t.length; e < n; e++)
    if (t[e] !== void 0)
      return t[e];
}
var EI = function(e, n) {
  var r = {}, a = k({}, e);
  return n.forEach(function(o) {
    e && o in e && (r[o] = e[o], delete a[o]);
  }), {
    picked: r,
    omitted: a
  };
}, Lv = new RegExp("^(".concat(Qm.join("|"), ")(-inverse)?$")), NI = function() {
  return k(k({}, II()), {
    title: Q.any
  });
};
const MI = pe({
  name: "ATooltip",
  inheritAttrs: !1,
  props: kt(NI(), {
    trigger: "hover",
    transitionName: "zoom-big-fast",
    align: {},
    placement: "top",
    mouseEnterDelay: 0.1,
    mouseLeaveDelay: 0.1,
    arrowPointAtCenter: !1,
    autoAdjustOverflow: !0
  }),
  slots: ["title"],
  setup: function(e, n) {
    var r = n.slots, a = n.emit, o = n.attrs, i = n.expose, l = Qe("tooltip", e), u = l.prefixCls, s = l.getPopupContainer, d = G(Yu([e.visible, e.defaultVisible])), c = G();
    dt(function() {
      tr(e.defaultVisible === void 0, "Tooltip", "'defaultVisible' is deprecated, please use 'v-model:visible'");
    });
    var v;
    Ce(function() {
      return e.visible;
    }, function(S) {
      tt.cancel(v), v = tt(function() {
        d.value = !!S;
      });
    });
    var f = function() {
      var b, P = (b = e.title) !== null && b !== void 0 ? b : r.title;
      return !P && P !== 0;
    }, g = function(b) {
      var P = f();
      e.visible === void 0 && (d.value = P ? !1 : b), P || (a("update:visible", b), a("visibleChange", b));
    }, p = function() {
      return c.value.getPopupDomNode();
    };
    i({
      getPopupDomNode: p,
      visible: d,
      forcePopupAlign: function() {
        var b;
        return (b = c.value) === null || b === void 0 ? void 0 : b.forcePopupAlign();
      }
    });
    var y = F(function() {
      var S = e.builtinPlacements, b = e.arrowPointAtCenter, P = e.autoAdjustOverflow;
      return S || Jm({
        arrowPointAtCenter: b,
        autoAdjustOverflow: P
      });
    }), h = function(b) {
      return b || b === "";
    }, w = function(b) {
      var P = b.type;
      if (Le(P) === "object" && b.props && ((P.__ANT_BUTTON === !0 || P === "button") && h(b.props.disabled) || P.__ANT_SWITCH === !0 && (h(b.props.disabled) || h(b.props.loading)))) {
        var T = EI(AC(b), ["position", "left", "right", "top", "bottom", "float", "display", "zIndex"]), O = T.picked, D = T.omitted, V = k(k({
          display: "inline-block"
        }, O), {
          cursor: "not-allowed",
          lineHeight: 1,
          width: b.props && b.props.block ? "100%" : null
        }), K = k(k({}, D), {
          pointerEvents: "none"
        }), R = Ct(b, {
          style: K
        }, !0);
        return m("span", {
          style: V,
          class: "".concat(u.value, "-disabled-compatible-wrapper")
        }, [R]);
      }
      return b;
    }, C = function() {
      var b, P;
      return (b = e.title) !== null && b !== void 0 ? b : (P = r.title) === null || P === void 0 ? void 0 : P.call(r);
    }, x = function(b, P) {
      var T = y.value, O = Object.keys(T).filter(function(K) {
        return T[K].points[0] === P.points[0] && T[K].points[1] === P.points[1];
      })[0];
      if (!!O) {
        var D = b.getBoundingClientRect(), V = {
          top: "50%",
          left: "50%"
        };
        O.indexOf("top") >= 0 || O.indexOf("Bottom") >= 0 ? V.top = "".concat(D.height - P.offset[1], "px") : (O.indexOf("Top") >= 0 || O.indexOf("bottom") >= 0) && (V.top = "".concat(-P.offset[1], "px")), O.indexOf("left") >= 0 || O.indexOf("Right") >= 0 ? V.left = "".concat(D.width - P.offset[0], "px") : (O.indexOf("right") >= 0 || O.indexOf("Left") >= 0) && (V.left = "".concat(-P.offset[0], "px")), b.style.transformOrigin = "".concat(V.left, " ").concat(V.top);
      }
    };
    return function() {
      var S, b, P, T = e.openClassName, O = e.color, D = e.overlayClassName, V = (P = yn((b = r.default) === null || b === void 0 ? void 0 : b.call(r))) !== null && P !== void 0 ? P : null;
      V = V.length === 1 ? V[0] : V;
      var K = d.value;
      if (e.visible === void 0 && f() && (K = !1), !V)
        return null;
      var R = w(At(V) ? V : m("span", null, [V])), E = ge((S = {}, j(S, T || "".concat(u.value, "-open"), !0), j(S, R.props && R.props.class, R.props && R.props.class), S)), M = ge(D, j({}, "".concat(u.value, "-").concat(O), O && Lv.test(O))), N, _;
      O && !Lv.test(O) && (N = {
        backgroundColor: O
      }, _ = {
        backgroundColor: O
      });
      var I = k(k(k({}, o), e), {
        prefixCls: u.value,
        getPopupContainer: s.value,
        builtinPlacements: y.value,
        visible: K,
        ref: c,
        overlayClassName: M,
        overlayInnerStyle: N,
        onVisibleChange: g,
        onPopupAlign: x
      });
      return m(OI, I, {
        default: function() {
          return [d.value ? Ct(R, {
            class: E
          }) : R];
        },
        arrowContent: function() {
          return m("span", {
            class: "".concat(u.value, "-arrow-content"),
            style: _
          }, null);
        },
        overlay: C
      });
    };
  }
}), Zm = Nr(MI);
var Hr = {
  adjustX: 1,
  adjustY: 1
}, zr = [0, 0], AI = {
  topLeft: {
    points: ["bl", "tl"],
    overflow: Hr,
    offset: [0, -4],
    targetOffset: zr
  },
  topCenter: {
    points: ["bc", "tc"],
    overflow: Hr,
    offset: [0, -4],
    targetOffset: zr
  },
  topRight: {
    points: ["br", "tr"],
    overflow: Hr,
    offset: [0, -4],
    targetOffset: zr
  },
  bottomLeft: {
    points: ["tl", "bl"],
    overflow: Hr,
    offset: [0, 4],
    targetOffset: zr
  },
  bottomCenter: {
    points: ["tc", "bc"],
    overflow: Hr,
    offset: [0, 4],
    targetOffset: zr
  },
  bottomRight: {
    points: ["tr", "br"],
    overflow: Hr,
    offset: [0, 4],
    targetOffset: zr
  }
};
const DI = AI;
var FI = globalThis && globalThis.__rest || function(t, e) {
  var n = {};
  for (var r in t)
    Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(t); a < r.length; a++)
      e.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[a]) && (n[r[a]] = t[r[a]]);
  return n;
};
const RI = pe({
  props: {
    minOverlayWidthMatchTrigger: {
      type: Boolean,
      default: void 0
    },
    arrow: {
      type: Boolean,
      default: !1
    },
    prefixCls: Q.string.def("rc-dropdown"),
    transitionName: String,
    overlayClassName: Q.string.def(""),
    openClassName: String,
    animation: Q.any,
    align: Q.object,
    overlayStyle: {
      type: Object,
      default: void 0
    },
    placement: Q.string.def("bottomLeft"),
    overlay: Q.any,
    trigger: Q.oneOfType([Q.string, Q.arrayOf(Q.string)]).def("hover"),
    alignPoint: {
      type: Boolean,
      default: void 0
    },
    showAction: Q.array,
    hideAction: Q.array,
    getPopupContainer: Function,
    visible: {
      type: Boolean,
      default: void 0
    },
    defaultVisible: {
      type: Boolean,
      default: !1
    },
    mouseEnterDelay: Q.number.def(0.15),
    mouseLeaveDelay: Q.number.def(0.1)
  },
  emits: ["visibleChange", "overlayClick"],
  slots: ["overlay"],
  setup: function(e, n) {
    var r = n.slots, a = n.emit, o = n.expose, i = G(!!e.visible);
    Ce(function() {
      return e.visible;
    }, function(g) {
      g !== void 0 && (i.value = g);
    });
    var l = G();
    o({
      triggerRef: l
    });
    var u = function(p) {
      e.visible === void 0 && (i.value = !1), a("overlayClick", p);
    }, s = function(p) {
      e.visible === void 0 && (i.value = p), a("visibleChange", p);
    }, d = function() {
      var p, y = (p = r.overlay) === null || p === void 0 ? void 0 : p.call(r), h = {
        prefixCls: "".concat(e.prefixCls, "-menu"),
        onClick: u,
        getPopupContainer: function() {
          return l.value.getPopupDomNode();
        }
      };
      return m(ft, null, [e.arrow && m("div", {
        class: "".concat(e.prefixCls, "-arrow")
      }, null), Ct(y, h, !1)]);
    }, c = F(function() {
      var g = e.minOverlayWidthMatchTrigger, p = g === void 0 ? !e.alignPoint : g;
      return p;
    }), v = function() {
      var p, y = (p = r.default) === null || p === void 0 ? void 0 : p.call(r);
      return i.value && y ? Ct(y[0], {
        class: e.openClassName || "".concat(e.prefixCls, "-open")
      }, !1) : y;
    }, f = F(function() {
      return !e.hideAction && e.trigger.indexOf("contextmenu") !== -1 ? ["click"] : e.hideAction;
    });
    return function() {
      var g = e.prefixCls, p = e.arrow, y = e.showAction, h = e.overlayStyle, w = e.trigger, C = e.placement, x = e.align, S = e.getPopupContainer, b = e.transitionName, P = e.animation, T = e.overlayClassName, O = FI(e, ["prefixCls", "arrow", "showAction", "overlayStyle", "trigger", "placement", "align", "getPopupContainer", "transitionName", "animation", "overlayClassName"]);
      return m(vo, Y(Y({}, O), {}, {
        prefixCls: g,
        ref: l,
        popupClassName: ge(T, j({}, "".concat(g, "-show-arrow"), p)),
        popupStyle: h,
        builtinPlacements: DI,
        action: w,
        showAction: y,
        hideAction: f.value || [],
        popupPlacement: C,
        popupAlign: x,
        popupTransitionName: b,
        popupAnimation: P,
        popupVisible: i.value,
        stretch: c.value ? "minWidth" : "",
        onPopupVisibleChange: s,
        getPopupContainer: S
      }), {
        popup: d,
        default: v
      });
    };
  }
});
var Kl = {
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
}, Hl = {
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
}, Xr = [], Qr = [];
function $I() {
  var t = document.createElement("div"), e = t.style;
  "AnimationEvent" in window || (delete Kl.animationstart.animation, delete Hl.animationend.animation), "TransitionEvent" in window || (delete Kl.transitionstart.transition, delete Hl.transitionend.transition);
  function n(r, a) {
    for (var o in r)
      if (r.hasOwnProperty(o)) {
        var i = r[o];
        for (var l in i)
          if (l in e) {
            a.push(i[l]);
            break;
          }
      }
  }
  n(Kl, Xr), n(Hl, Qr);
}
typeof window < "u" && typeof document < "u" && $I();
function jv(t, e, n) {
  t.addEventListener(e, n, !1);
}
function Vv(t, e, n) {
  t.removeEventListener(e, n, !1);
}
var LI = {
  startEvents: Xr,
  addStartEventListener: function(e, n) {
    if (Xr.length === 0) {
      setTimeout(n, 0);
      return;
    }
    Xr.forEach(function(r) {
      jv(e, r, n);
    });
  },
  removeStartEventListener: function(e, n) {
    Xr.length !== 0 && Xr.forEach(function(r) {
      Vv(e, r, n);
    });
  },
  endEvents: Qr,
  addEndEventListener: function(e, n) {
    if (Qr.length === 0) {
      setTimeout(n, 0);
      return;
    }
    Qr.forEach(function(r) {
      jv(e, r, n);
    });
  },
  removeEndEventListener: function(e, n) {
    Qr.length !== 0 && Qr.forEach(function(r) {
      Vv(e, r, n);
    });
  }
};
const $o = LI;
var qn;
function Bv(t) {
  return process.env.NODE_ENV === "test" ? !1 : !t || t.offsetParent === null;
}
function jI(t) {
  var e = (t || "").match(/rgba?\((\d*), (\d*), (\d*)(, [\.\d]*)?\)/);
  return e && e[1] && e[2] && e[3] ? !(e[1] === e[2] && e[2] === e[3]) : !0;
}
const ey = pe({
  name: "Wave",
  props: {
    insertExtraNode: Boolean,
    disabled: Boolean
  },
  setup: function(e, n) {
    var r = n.slots, a = n.expose, o = sn(), i = Qe("", e), l = i.csp, u = i.prefixCls;
    a({
      csp: l
    });
    var s = null, d = null, c = null, v = !1, f = null, g = !1, p = function(b) {
      if (!g) {
        var P = wr(o);
        !b || b.target !== P || v || C(P);
      }
    }, y = function(b) {
      !b || b.animationName !== "fadeEffect" || C(b.target);
    }, h = function() {
      var b = e.insertExtraNode;
      return b ? "".concat(u.value, "-click-animating") : "".concat(u.value, "-click-animating-without-extra-node");
    }, w = function(b, P) {
      var T, O = e.insertExtraNode, D = e.disabled;
      if (!(D || !b || Bv(b) || b.className.indexOf("-leave") >= 0)) {
        f = document.createElement("div"), f.className = "".concat(u.value, "-click-animating-node");
        var V = h();
        b.removeAttribute(V), b.setAttribute(V, "true"), qn = qn || document.createElement("style"), P && P !== "#ffffff" && P !== "rgb(255, 255, 255)" && jI(P) && !/rgba\(\d*, \d*, \d*, 0\)/.test(P) && P !== "transparent" && (!((T = l.value) === null || T === void 0) && T.nonce && (qn.nonce = l.value.nonce), f.style.borderColor = P, qn.innerHTML = `
        [`.concat(u.value, "-click-animating-without-extra-node='true']::after, .").concat(u.value, `-click-animating-node {
          --antd-wave-shadow-color: `).concat(P, `;
        }`), document.body.contains(qn) || document.body.appendChild(qn)), O && b.appendChild(f), $o.addStartEventListener(b, p), $o.addEndEventListener(b, y);
      }
    }, C = function(b) {
      if (!(!b || b === f || !(b instanceof Element))) {
        var P = e.insertExtraNode, T = h();
        b.setAttribute(T, "false"), qn && (qn.innerHTML = ""), P && f && b.contains(f) && b.removeChild(f), $o.removeStartEventListener(b, p), $o.removeEndEventListener(b, y);
      }
    }, x = function(b) {
      if (!(!b || !b.getAttribute || b.getAttribute("disabled") || b.className.indexOf("disabled") >= 0)) {
        var P = function(O) {
          if (!(O.target.tagName === "INPUT" || Bv(O.target))) {
            C(b);
            var D = getComputedStyle(b).getPropertyValue("border-top-color") || getComputedStyle(b).getPropertyValue("border-color") || getComputedStyle(b).getPropertyValue("background-color");
            d = setTimeout(function() {
              return w(b, D);
            }, 0), tt.cancel(c), v = !0, c = tt(function() {
              v = !1;
            }, 10);
          }
        };
        return b.addEventListener("click", P, !0), {
          cancel: function() {
            b.removeEventListener("click", P, !0);
          }
        };
      }
    };
    return dt(function() {
      vt(function() {
        var S = wr(o);
        S.nodeType === 1 && (s = x(S));
      });
    }), ht(function() {
      s && s.cancel(), clearTimeout(d), g = !0;
    }), function() {
      var S;
      return (S = r.default) === null || S === void 0 ? void 0 : S.call(r)[0];
    };
  }
});
var VI = function() {
  return {
    prefixCls: String,
    type: String,
    htmlType: {
      type: String,
      default: "button"
    },
    shape: {
      type: String
    },
    size: {
      type: String
    },
    loading: {
      type: [Boolean, Object],
      default: function() {
        return !1;
      }
    },
    disabled: {
      type: Boolean,
      default: void 0
    },
    ghost: {
      type: Boolean,
      default: void 0
    },
    block: {
      type: Boolean,
      default: void 0
    },
    danger: {
      type: Boolean,
      default: void 0
    },
    icon: Q.any,
    href: String,
    target: String,
    title: String,
    onClick: {
      type: Function
    },
    onMousedown: {
      type: Function
    }
  };
};
const ty = VI;
var Kv = function(e) {
  e && (e.style.width = "0px", e.style.opacity = "0", e.style.transform = "scale(0)");
}, Hv = function(e) {
  vt(function() {
    e && (e.style.width = "".concat(e.scrollWidth, "px"), e.style.opacity = "1", e.style.transform = "scale(1)");
  });
}, zv = function(e) {
  e && e.style && (e.style.width = null, e.style.opacity = null, e.style.transform = null);
};
const BI = pe({
  name: "LoadingIcon",
  props: {
    prefixCls: String,
    loading: [Boolean, Object],
    existIcon: Boolean
  },
  setup: function(e) {
    return function() {
      var n = e.existIcon, r = e.prefixCls, a = e.loading;
      if (n)
        return m("span", {
          class: "".concat(r, "-loading-icon")
        }, [m(Bn, null, null)]);
      var o = !!a;
      return m(_r, {
        name: "".concat(r, "-loading-icon-motion"),
        onBeforeEnter: Kv,
        onEnter: Hv,
        onAfterEnter: zv,
        onBeforeLeave: Hv,
        onLeave: function(l) {
          setTimeout(function() {
            Kv(l);
          });
        },
        onAfterLeave: zv
      }, {
        default: function() {
          return [o ? m("span", {
            class: "".concat(r, "-loading-icon")
          }, [m(Bn, null, null)]) : null];
        }
      });
    };
  }
});
var Wv = /^[\u4e00-\u9fa5]{2}$/, Uv = Wv.test.bind(Wv);
function Lo(t) {
  return t === "text" || t === "link";
}
const Jt = pe({
  name: "AButton",
  inheritAttrs: !1,
  __ANT_BUTTON: !0,
  props: kt(ty(), {
    type: "default"
  }),
  slots: ["icon"],
  setup: function(e, n) {
    var r = n.slots, a = n.attrs, o = n.emit, i = Qe("btn", e), l = i.prefixCls, u = i.autoInsertSpaceInButton, s = i.direction, d = i.size, c = G(null), v = G(void 0), f = !1, g = G(!1), p = G(!1), y = F(function() {
      return u.value !== !1;
    }), h = F(function() {
      return Le(e.loading) === "object" && e.loading.delay ? e.loading.delay || !0 : !!e.loading;
    });
    Ce(h, function(b) {
      clearTimeout(v.value), typeof h.value == "number" ? v.value = setTimeout(function() {
        g.value = b;
      }, h.value) : g.value = b;
    }, {
      immediate: !0
    });
    var w = F(function() {
      var b, P = e.type, T = e.shape, O = T === void 0 ? "default" : T, D = e.ghost, V = e.block, K = e.danger, R = l.value, E = {
        large: "lg",
        small: "sm",
        middle: void 0
      }, M = d.value, N = M && E[M] || "";
      return b = {}, j(b, "".concat(R), !0), j(b, "".concat(R, "-").concat(P), P), j(b, "".concat(R, "-").concat(O), O !== "default" && O), j(b, "".concat(R, "-").concat(N), N), j(b, "".concat(R, "-loading"), g.value), j(b, "".concat(R, "-background-ghost"), D && !Lo(P)), j(b, "".concat(R, "-two-chinese-chars"), p.value && y.value), j(b, "".concat(R, "-block"), V), j(b, "".concat(R, "-dangerous"), !!K), j(b, "".concat(R, "-rtl"), s.value === "rtl"), b;
    }), C = function() {
      var P = c.value;
      if (!(!P || u.value === !1)) {
        var T = P.textContent;
        f && Uv(T) ? p.value || (p.value = !0) : p.value && (p.value = !1);
      }
    }, x = function(P) {
      if (g.value || e.disabled) {
        P.preventDefault();
        return;
      }
      o("click", P);
    }, S = function(P, T) {
      var O = T ? " " : "";
      if (P.type === Bh) {
        var D = P.children.trim();
        return Uv(D) && (D = D.split("").join(O)), m("span", null, [D]);
      }
      return P;
    };
    return Ue(function() {
      mt(!(e.ghost && Lo(e.type)), "Button", "`link` or `text` button can't be a `ghost` button.");
    }), dt(C), kr(C), ht(function() {
      v.value && clearTimeout(v.value);
    }), function() {
      var b, P, T = e.icon, O = T === void 0 ? (b = r.icon) === null || b === void 0 ? void 0 : b.call(r) : T, D = Kt((P = r.default) === null || P === void 0 ? void 0 : P.call(r));
      f = D.length === 1 && !O && !Lo(e.type);
      var V = e.type, K = e.htmlType, R = e.disabled, E = e.href, M = e.title, N = e.target, _ = e.onMousedown, I = g.value ? "loading" : O, A = k(k({}, a), {
        title: M,
        disabled: R,
        class: [w.value, a.class, j({}, "".concat(l.value, "-icon-only"), D.length === 0 && !!I)],
        onClick: x,
        onMousedown: _
      });
      R || delete A.disabled;
      var B = O && !g.value ? O : m(BI, {
        existIcon: !!O,
        prefixCls: l.value,
        loading: !!g.value
      }, null), W = D.map(function(z) {
        return S(z, f && y.value);
      });
      if (E !== void 0)
        return m("a", Y(Y({}, A), {}, {
          href: E,
          target: N,
          ref: c
        }), [B, W]);
      var U = m("button", Y(Y({}, A), {}, {
        ref: c,
        type: K
      }), [B, W]);
      return Lo(V) ? U : m(ey, {
        ref: "wave",
        disabled: !!g.value
      }, {
        default: function() {
          return [U];
        }
      });
    };
  }
});
function Yv(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
  }
}
function Ss(t, e, n) {
  return e && Yv(t.prototype, e), n && Yv(t, n), Object.defineProperty(t, "prototype", {
    writable: !1
  }), t;
}
function xs(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
var KI = /* @__PURE__ */ Ss(function t(e) {
  xs(this, t), this.error = new Error("unreachable case: ".concat(JSON.stringify(e)));
}), HI = function() {
  return {
    prefixCls: String,
    size: {
      type: String
    }
  };
};
const qu = pe({
  name: "AButtonGroup",
  props: HI(),
  setup: function(e, n) {
    var r = n.slots, a = Qe("btn-group", e), o = a.prefixCls, i = a.direction, l = F(function() {
      var u, s = e.size, d = "";
      switch (s) {
        case "large":
          d = "lg";
          break;
        case "small":
          d = "sm";
          break;
        case "middle":
        case void 0:
          break;
        default:
          console.warn(new KI(s).error);
      }
      return u = {}, j(u, "".concat(o.value), !0), j(u, "".concat(o.value, "-").concat(d), d), j(u, "".concat(o.value, "-rtl"), i.value === "rtl"), u;
    });
    return function() {
      var u;
      return m("div", {
        class: l.value
      }, [Kt((u = r.default) === null || u === void 0 ? void 0 : u.call(r))]);
    };
  }
});
Jt.Group = qu;
Jt.install = function(t) {
  return t.component(Jt.name, Jt), t.component(qu.name, qu), t;
};
var ny = function() {
  return {
    arrow: {
      type: [Boolean, Object],
      default: void 0
    },
    trigger: {
      type: [Array, String]
    },
    overlay: Q.any,
    visible: {
      type: Boolean,
      default: void 0
    },
    disabled: {
      type: Boolean,
      default: void 0
    },
    align: {
      type: Object
    },
    getPopupContainer: Function,
    prefixCls: String,
    transitionName: String,
    placement: String,
    overlayClassName: String,
    overlayStyle: {
      type: Object,
      default: void 0
    },
    forceRender: {
      type: Boolean,
      default: void 0
    },
    mouseEnterDelay: Number,
    mouseLeaveDelay: Number,
    openClassName: String,
    minOverlayWidthMatchTrigger: {
      type: Boolean,
      default: void 0
    },
    destroyPopupOnHide: {
      type: Boolean,
      default: void 0
    },
    onVisibleChange: {
      type: Function
    },
    "onUpdate:visible": {
      type: Function
    }
  };
}, zl = ty(), zI = function() {
  return k(k({}, ny()), {
    type: zl.type,
    size: String,
    htmlType: zl.htmlType,
    href: String,
    disabled: {
      type: Boolean,
      default: void 0
    },
    prefixCls: String,
    icon: Q.any,
    title: String,
    loading: zl.loading,
    onClick: {
      type: Function
    }
  });
}, WI = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z" } }] }, name: "ellipsis", theme: "outlined" };
const UI = WI;
function qv(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? Object(arguments[e]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(a) {
      return Object.getOwnPropertyDescriptor(n, a).enumerable;
    }))), r.forEach(function(a) {
      YI(t, a, n[a]);
    });
  }
  return t;
}
function YI(t, e, n) {
  return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
var Ps = function(e, n) {
  var r = qv({}, e, n.attrs);
  return m(st, qv({}, r, {
    icon: UI
  }), null);
};
Ps.displayName = "EllipsisOutlined";
Ps.inheritAttrs = !1;
const ry = Ps;
var qI = globalThis && globalThis.__rest || function(t, e) {
  var n = {};
  for (var r in t)
    Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(t); a < r.length; a++)
      e.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[a]) && (n[r[a]] = t[r[a]]);
  return n;
}, GI = Jt.Group;
const Ti = pe({
  name: "ADropdownButton",
  inheritAttrs: !1,
  __ANT_BUTTON: !0,
  props: kt(zI(), {
    trigger: "hover",
    placement: "bottomRight",
    type: "default"
  }),
  slots: ["icon", "leftButton", "rightButton", "overlay"],
  setup: function(e, n) {
    var r = n.slots, a = n.attrs, o = n.emit, i = function(v) {
      o("update:visible", v), o("visibleChange", v);
    }, l = Qe("dropdown-button", e), u = l.prefixCls, s = l.direction, d = l.getPopupContainer;
    return function() {
      var c, v, f = k(k({}, e), a), g = f.type, p = g === void 0 ? "default" : g, y = f.disabled, h = f.loading, w = f.htmlType, C = f.class, x = C === void 0 ? "" : C, S = f.overlay, b = S === void 0 ? (c = r.overlay) === null || c === void 0 ? void 0 : c.call(r) : S, P = f.trigger, T = f.align, O = f.visible;
      f.onVisibleChange;
      var D = f.placement, V = D === void 0 ? s.value === "rtl" ? "bottomLeft" : "bottomRight" : D, K = f.href, R = f.title, E = f.icon, M = E === void 0 ? ((v = r.icon) === null || v === void 0 ? void 0 : v.call(r)) || m(ry, null, null) : E, N = f.mouseEnterDelay, _ = f.mouseLeaveDelay, I = f.overlayClassName, A = f.overlayStyle, B = f.destroyPopupOnHide, W = f.onClick;
      f["onUpdate:visible"];
      var U = qI(f, ["type", "disabled", "loading", "htmlType", "class", "overlay", "trigger", "align", "visible", "onVisibleChange", "placement", "href", "title", "icon", "mouseEnterDelay", "mouseLeaveDelay", "overlayClassName", "overlayStyle", "destroyPopupOnHide", "onClick", "onUpdate:visible"]), z = {
        align: T,
        disabled: y,
        trigger: y ? [] : P,
        placement: V,
        getPopupContainer: d.value,
        onVisibleChange: i,
        mouseEnterDelay: N,
        mouseLeaveDelay: _,
        visible: O,
        overlayClassName: I,
        overlayStyle: A,
        destroyPopupOnHide: B
      }, L = m(Jt, {
        type: p,
        disabled: y,
        loading: h,
        onClick: W,
        htmlType: w,
        href: K,
        title: R
      }, {
        default: r.default
      }), $ = m(Jt, {
        type: p,
        icon: M
      }, null);
      return m(GI, Y(Y({}, U), {}, {
        class: ge(u.value, x)
      }), {
        default: function() {
          return [r.leftButton ? r.leftButton({
            button: L
          }) : L, m(oa, z, {
            default: function() {
              return [r.rightButton ? r.rightButton({
                button: $
              }) : $];
            },
            overlay: function() {
              return b;
            }
          })];
        }
      });
    };
  }
});
var XI = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z" } }] }, name: "right", theme: "outlined" };
const QI = XI;
function Gv(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? Object(arguments[e]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(a) {
      return Object.getOwnPropertyDescriptor(n, a).enumerable;
    }))), r.forEach(function(a) {
      JI(t, a, n[a]);
    });
  }
  return t;
}
function JI(t, e, n) {
  return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
var Os = function(e, n) {
  var r = Gv({}, e, n.attrs);
  return m(st, Gv({}, r, {
    icon: QI
  }), null);
};
Os.displayName = "RightOutlined";
Os.inheritAttrs = !1;
const no = Os;
var ay = pe({
  name: "ADropdown",
  inheritAttrs: !1,
  props: kt(ny(), {
    mouseEnterDelay: 0.15,
    mouseLeaveDelay: 0.1,
    placement: "bottomLeft",
    trigger: "hover"
  }),
  slots: ["overlay"],
  setup: function(e, n) {
    var r = n.slots, a = n.attrs, o = n.emit, i = Qe("dropdown", e), l = i.prefixCls, u = i.rootPrefixCls, s = i.direction, d = i.getPopupContainer, c = F(function() {
      var p = e.placement, y = p === void 0 ? "" : p, h = e.transitionName;
      return h !== void 0 ? h : y.indexOf("top") >= 0 ? "".concat(u.value, "-slide-down") : "".concat(u.value, "-slide-up");
    }), v = function() {
      var y, h, w, C = e.overlay || ((y = r.overlay) === null || y === void 0 ? void 0 : y.call(r)), x = Array.isArray(C) ? C[0] : C;
      if (!x)
        return null;
      var S = x.props || {};
      mt(!S.mode || S.mode === "vertical", "Dropdown", 'mode="'.concat(S.mode, `" is not supported for Dropdown's Menu.`));
      var b = S.selectable, P = b === void 0 ? !1 : b, T = S.expandIcon, O = T === void 0 ? (w = (h = x.children) === null || h === void 0 ? void 0 : h.expandIcon) === null || w === void 0 ? void 0 : w.call(h) : T, D = typeof O < "u" && At(O) ? O : m("span", {
        class: "".concat(l.value, "-menu-submenu-arrow")
      }, [m(no, {
        class: "".concat(l.value, "-menu-submenu-arrow-icon")
      }, null)]), V = At(x) ? Ct(x, {
        mode: "vertical",
        selectable: P,
        expandIcon: function() {
          return D;
        }
      }) : x;
      return V;
    }, f = F(function() {
      var p = e.placement;
      if (!p)
        return s.value === "rtl" ? "bottomRight" : "bottomLeft";
      if (p.includes("Center")) {
        var y = p.slice(0, p.indexOf("Center"));
        return mt(!p.includes("Center"), "Dropdown", "You are using '".concat(p, "' placement in Dropdown, which is deprecated. Try to use '").concat(y, "' instead.")), y;
      }
      return p;
    }), g = function(y) {
      o("update:visible", y), o("visibleChange", y);
    };
    return function() {
      var p, y, h = e.arrow, w = e.trigger, C = e.disabled, x = e.overlayClassName, S = (p = r.default) === null || p === void 0 ? void 0 : p.call(r)[0], b = Ct(S, k({
        class: ge((y = S == null ? void 0 : S.props) === null || y === void 0 ? void 0 : y.class, j({}, "".concat(l.value, "-rtl"), s.value === "rtl"), "".concat(l.value, "-trigger"))
      }, C ? {
        disabled: C
      } : {})), P = ge(x, j({}, "".concat(l.value, "-rtl"), s.value === "rtl")), T = C ? [] : w, O;
      T && T.indexOf("contextmenu") !== -1 && (O = !0);
      var D = Jm({
        arrowPointAtCenter: Le(h) === "object" && h.pointAtCenter,
        autoAdjustOverflow: !0
      }), V = pt(k(k(k({}, e), a), {
        builtinPlacements: D,
        overlayClassName: P,
        arrow: h,
        alignPoint: O,
        prefixCls: l.value,
        getPopupContainer: d.value,
        transitionName: c.value,
        trigger: T,
        onVisibleChange: g,
        placement: f.value
      }), ["overlay", "onUpdate:visible"]);
      return m(RI, V, {
        default: function() {
          return [b];
        },
        overlay: v
      });
    };
  }
});
ay.Button = Ti;
const oa = ay;
function ZI(t, e, n, r) {
  var a = n ? n.call(r, t, e) : void 0;
  if (a !== void 0)
    return !!a;
  if (t === e)
    return !0;
  if (Le(t) !== "object" || !t || Le(e) !== "object" || !e)
    return !1;
  var o = Object.keys(t), i = Object.keys(e);
  if (o.length !== i.length)
    return !1;
  for (var l = Object.prototype.hasOwnProperty.bind(e), u = 0; u < o.length; u++) {
    var s = o[u];
    if (!l(s))
      return !1;
    var d = t[s], c = e[s];
    if (a = n ? n.call(r, d, c, s) : void 0, a === !1 || a === void 0 && d !== c)
      return !1;
  }
  return !0;
}
function Jr(t, e, n, r) {
  return ZI(Ot(t), Ot(e), n, r);
}
var oy = Symbol("menuContextKey"), iy = function(e) {
  ct(oy, e);
}, lr = function() {
  return ut(oy);
}, ly = Symbol("ForceRenderKey"), ek = function(e) {
  ct(ly, e);
}, uy = function() {
  return ut(ly, !1);
}, cy = Symbol("menuFirstLevelContextKey"), sy = function(e) {
  ct(cy, e);
}, tk = function() {
  return ut(cy, !0);
}, Ii = pe({
  name: "MenuContextProvider",
  inheritAttrs: !1,
  props: {
    mode: {
      type: String,
      default: void 0
    },
    overflowDisabled: {
      type: Boolean,
      default: void 0
    },
    isRootMenu: {
      type: Boolean,
      default: void 0
    }
  },
  setup: function(e, n) {
    var r = n.slots, a = lr(), o = k({}, a);
    return e.mode !== void 0 && (o.mode = ze(e, "mode")), e.isRootMenu !== void 0 && (o.isRootMenu = ze(e, "isRootMenu")), e.overflowDisabled !== void 0 && (o.overflowDisabled = ze(e, "overflowDisabled")), iy(o), function() {
      var i;
      return (i = r.default) === null || i === void 0 ? void 0 : i.call(r);
    };
  }
});
const nk = iy;
function dy(t, e, n, r) {
  for (var a = t.length, o = n + (r ? 1 : -1); r ? o-- : ++o < a; )
    if (e(t[o], o, t))
      return o;
  return -1;
}
function rk(t) {
  return t !== t;
}
function ak(t, e, n) {
  for (var r = n - 1, a = t.length; ++r < a; )
    if (t[r] === e)
      return r;
  return -1;
}
function ok(t, e, n) {
  return e === e ? ak(t, e, n) : dy(t, rk, n);
}
function fy(t, e) {
  var n = t == null ? 0 : t.length;
  return !!n && ok(t, e, 0) > -1;
}
function vy(t, e, n) {
  for (var r = -1, a = t == null ? 0 : t.length; ++r < a; )
    if (n(e, t[r]))
      return !0;
  return !1;
}
function ik() {
}
var lk = 1 / 0, uk = ra && 1 / es(new ra([, -0]))[1] == lk ? function(t) {
  return new ra(t);
} : ik;
const ck = uk;
var sk = 200;
function dk(t, e, n) {
  var r = -1, a = fy, o = t.length, i = !0, l = [], u = l;
  if (n)
    i = !1, a = vy;
  else if (o >= sk) {
    var s = e ? null : ck(t);
    if (s)
      return es(s);
    i = !1, a = mi, u = new da();
  } else
    u = e ? [] : l;
  e:
    for (; ++r < o; ) {
      var d = t[r], c = e ? e(d) : d;
      if (d = n || d !== 0 ? d : 0, i && c === c) {
        for (var v = u.length; v--; )
          if (u[v] === c)
            continue e;
        e && u.push(c), l.push(d);
      } else
        a(u, c, n) || (u !== l && u.push(c), l.push(d));
    }
  return l;
}
function Wl(t) {
  return t && t.length ? dk(t) : [];
}
var fk = Symbol("siderCollapsed"), jo = "$$__vc-menu-more__key", py = Symbol("KeyPathContext"), Ts = function() {
  return ut(py, {
    parentEventKeys: F(function() {
      return [];
    }),
    parentKeys: F(function() {
      return [];
    }),
    parentInfo: {}
  });
}, vk = function(e, n, r) {
  var a = Ts(), o = a.parentEventKeys, i = a.parentKeys, l = F(function() {
    return [].concat(Ie(o.value), [e]);
  }), u = F(function() {
    return [].concat(Ie(i.value), [n]);
  });
  return ct(py, {
    parentEventKeys: l,
    parentKeys: u,
    parentInfo: r
  }), u;
}, hy = Symbol("measure"), Xv = pe({
  setup: function(e, n) {
    var r = n.slots;
    return ct(hy, !0), function() {
      var a;
      return (a = r.default) === null || a === void 0 ? void 0 : a.call(r);
    };
  }
}), Is = function() {
  return ut(hy, !1);
};
const pk = vk;
function gy(t) {
  var e = lr(), n = e.mode, r = e.rtl, a = e.inlineIndent;
  return F(function() {
    return n.value !== "inline" ? null : r.value ? {
      paddingRight: "".concat(t.value * a.value, "px")
    } : {
      paddingLeft: "".concat(t.value * a.value, "px")
    };
  });
}
var hk = 0, gk = function() {
  return {
    id: String,
    role: String,
    disabled: Boolean,
    danger: Boolean,
    title: {
      type: [String, Boolean],
      default: void 0
    },
    icon: Q.any,
    onMouseenter: Function,
    onMouseleave: Function,
    onClick: Function,
    onKeydown: Function,
    onFocus: Function
  };
};
const ki = pe({
  name: "AMenuItem",
  inheritAttrs: !1,
  props: gk(),
  slots: ["icon", "title"],
  setup: function(e, n) {
    var r = n.slots, a = n.emit, o = n.attrs, i = sn(), l = Is(), u = Le(i.vnode.key) === "symbol" ? String(i.vnode.key) : i.vnode.key;
    mt(Le(i.vnode.key) !== "symbol", "MenuItem", 'MenuItem `:key="'.concat(String(u), '"` not support Symbol type'));
    var s = "menu_item_".concat(++hk, "_$$_").concat(u), d = Ts(), c = d.parentEventKeys, v = d.parentKeys, f = lr(), g = f.prefixCls, p = f.activeKeys, y = f.disabled, h = f.changeActiveKeys, w = f.rtl, C = f.inlineCollapsed, x = f.siderCollapsed, S = f.onItemClick, b = f.selectedKeys, P = f.registerMenuInfo, T = f.unRegisterMenuInfo, O = tk(), D = G(!1), V = F(function() {
      return [].concat(Ie(v.value), [u]);
    }), K = {
      eventKey: s,
      key: u,
      parentEventKeys: c,
      parentKeys: v,
      isLeaf: !0
    };
    P(s, K), ht(function() {
      T(s);
    }), Ce(p, function() {
      D.value = !!p.value.find(function(L) {
        return L === u;
      });
    }, {
      immediate: !0
    });
    var R = F(function() {
      return y.value || e.disabled;
    }), E = F(function() {
      return b.value.includes(u);
    }), M = F(function() {
      var L, $ = "".concat(g.value, "-item");
      return L = {}, j(L, "".concat($), !0), j(L, "".concat($, "-danger"), e.danger), j(L, "".concat($, "-active"), D.value), j(L, "".concat($, "-selected"), E.value), j(L, "".concat($, "-disabled"), R.value), L;
    }), N = function($) {
      return {
        key: u,
        eventKey: s,
        keyPath: V.value,
        eventKeyPath: [].concat(Ie(c.value), [s]),
        domEvent: $,
        item: k(k({}, e), o)
      };
    }, _ = function($) {
      if (!R.value) {
        var q = N($);
        a("click", $), S(q);
      }
    }, I = function($) {
      R.value || (h(V.value), a("mouseenter", $));
    }, A = function($) {
      R.value || (h([]), a("mouseleave", $));
    }, B = function($) {
      if (a("keydown", $), $.which === xe.ENTER) {
        var q = N($);
        a("click", $), S(q);
      }
    }, W = function($) {
      h(V.value), a("focus", $);
    }, U = function($, q) {
      var H = m("span", {
        class: "".concat(g.value, "-title-content")
      }, [q]);
      return (!$ || At(q) && q.type === "span") && q && C.value && O && typeof q == "string" ? m("div", {
        class: "".concat(g.value, "-inline-collapsed-noicon")
      }, [q.charAt(0)]) : H;
    }, z = gy(F(function() {
      return V.value.length;
    }));
    return function() {
      var L, $, q, H;
      if (l)
        return null;
      var J = ($ = e.title) !== null && $ !== void 0 ? $ : (q = r.title) === null || q === void 0 ? void 0 : q.call(r), Z = Kt((H = r.default) === null || H === void 0 ? void 0 : H.call(r)), ae = Z.length, ue = J;
      typeof J > "u" ? ue = O && ae ? Z : "" : J === !1 && (ue = "");
      var ne = {
        title: ue
      };
      !x.value && !C.value && (ne.title = null, ne.visible = !1);
      var X = {};
      e.role === "option" && (X["aria-selected"] = E.value);
      var te = ua(r, e, "icon");
      return m(Zm, Y(Y({}, ne), {}, {
        placement: w.value ? "left" : "right",
        overlayClassName: "".concat(g.value, "-inline-collapsed-tooltip")
      }), {
        default: function() {
          return [m(aa.Item, Y(Y(Y({
            component: "li"
          }, o), {}, {
            id: e.id,
            style: k(k({}, o.style || {}), z.value),
            class: [M.value, (L = {}, j(L, "".concat(o.class), !!o.class), j(L, "".concat(g.value, "-item-only-child"), (te ? ae + 1 : ae) === 1), L)],
            role: e.role || "menuitem",
            tabindex: e.disabled ? null : -1,
            "data-menu-id": u,
            "aria-disabled": e.disabled
          }, X), {}, {
            onMouseenter: I,
            onMouseleave: A,
            onClick: _,
            onKeydown: B,
            onFocus: W,
            title: typeof J == "string" ? J : void 0
          }), {
            default: function() {
              return [Ct(te, {
                class: "".concat(g.value, "-item-icon")
              }, !1), U(te, Z)];
            }
          })];
        }
      });
    };
  }
});
var Zn = {
  adjustX: 1,
  adjustY: 1
}, mk = {
  topLeft: {
    points: ["bl", "tl"],
    overflow: Zn,
    offset: [0, -7]
  },
  bottomLeft: {
    points: ["tl", "bl"],
    overflow: Zn,
    offset: [0, 7]
  },
  leftTop: {
    points: ["tr", "tl"],
    overflow: Zn,
    offset: [-4, 0]
  },
  rightTop: {
    points: ["tl", "tr"],
    overflow: Zn,
    offset: [4, 0]
  }
}, yk = {
  topLeft: {
    points: ["bl", "tl"],
    overflow: Zn,
    offset: [0, -7]
  },
  bottomLeft: {
    points: ["tl", "bl"],
    overflow: Zn,
    offset: [0, 7]
  },
  rightTop: {
    points: ["tr", "tl"],
    overflow: Zn,
    offset: [-4, 0]
  },
  leftTop: {
    points: ["tl", "tr"],
    overflow: Zn,
    offset: [4, 0]
  }
}, bk = {
  horizontal: "bottomLeft",
  vertical: "rightTop",
  "vertical-left": "rightTop",
  "vertical-right": "leftTop"
};
const Qv = pe({
  name: "PopupTrigger",
  inheritAttrs: !1,
  props: {
    prefixCls: String,
    mode: String,
    visible: Boolean,
    popupClassName: String,
    popupOffset: Array,
    disabled: Boolean,
    onVisibleChange: Function
  },
  slots: ["popup"],
  emits: ["visibleChange"],
  setup: function(e, n) {
    var r = n.slots, a = n.emit, o = G(!1), i = lr(), l = i.getPopupContainer, u = i.rtl, s = i.subMenuOpenDelay, d = i.subMenuCloseDelay, c = i.builtinPlacements, v = i.triggerSubMenuAction, f = i.isRootMenu, g = i.forceSubMenuRender, p = i.motion, y = i.defaultMotions, h = uy(), w = F(function() {
      return u.value ? k(k({}, yk), c.value) : k(k({}, mk), c.value);
    }), C = F(function() {
      return bk[e.mode];
    }), x = G();
    Ce(function() {
      return e.visible;
    }, function(P) {
      tt.cancel(x.value), x.value = tt(function() {
        o.value = P;
      });
    }, {
      immediate: !0
    }), ht(function() {
      tt.cancel(x.value);
    });
    var S = function(T) {
      a("visibleChange", T);
    }, b = F(function() {
      var P, T, O = p.value || ((P = y.value) === null || P === void 0 ? void 0 : P[e.mode]) || ((T = y.value) === null || T === void 0 ? void 0 : T.other), D = typeof O == "function" ? O() : O;
      return D ? Mc(D.name, {
        css: !0
      }) : void 0;
    });
    return function() {
      var P = e.prefixCls, T = e.popupClassName, O = e.mode, D = e.popupOffset, V = e.disabled;
      return m(vo, {
        prefixCls: P,
        popupClassName: ge("".concat(P, "-popup"), j({}, "".concat(P, "-rtl"), u.value), T),
        stretch: O === "horizontal" ? "minWidth" : null,
        getPopupContainer: f.value ? l.value : function(K) {
          return K.parentNode;
        },
        builtinPlacements: w.value,
        popupPlacement: C.value,
        popupVisible: o.value,
        popupAlign: D && {
          offset: D
        },
        action: V ? [] : [v.value],
        mouseEnterDelay: s.value,
        mouseLeaveDelay: d.value,
        onPopupVisibleChange: S,
        forceRender: h || g.value,
        popupAnimation: b.value
      }, {
        popup: r.popup,
        default: r.default
      });
    };
  }
});
var my = function(e, n) {
  var r = n.slots, a = n.attrs, o, i = lr(), l = i.prefixCls, u = i.mode;
  return m("ul", Y(Y({}, a), {}, {
    class: ge(l.value, "".concat(l.value, "-sub"), "".concat(l.value, "-").concat(u.value === "inline" ? "inline" : "vertical")),
    "data-menu-list": !0
  }), [(o = r.default) === null || o === void 0 ? void 0 : o.call(r)]);
};
my.displayName = "SubMenuList";
const yy = my, Ck = pe({
  name: "InlineSubMenuList",
  inheritAttrs: !1,
  props: {
    id: String,
    open: Boolean,
    keyPath: Array
  },
  setup: function(e, n) {
    var r = n.slots, a = F(function() {
      return "inline";
    }), o = lr(), i = o.motion, l = o.mode, u = o.defaultMotions, s = F(function() {
      return l.value === a.value;
    }), d = G(!s.value), c = F(function() {
      return s.value ? e.open : !1;
    });
    Ce(l, function() {
      s.value && (d.value = !1);
    }, {
      flush: "post"
    });
    var v = F(function() {
      var f, g, p = i.value || ((f = u.value) === null || f === void 0 ? void 0 : f[a.value]) || ((g = u.value) === null || g === void 0 ? void 0 : g.other), y = typeof p == "function" ? p() : p;
      return k(k({}, y), {
        appear: e.keyPath.length <= 1
      });
    });
    return function() {
      var f;
      return d.value ? null : m(Ii, {
        mode: a.value
      }, {
        default: function() {
          return [m(_r, v.value, {
            default: function() {
              return [gn(m(yy, {
                id: e.id
              }, {
                default: function() {
                  return [(f = r.default) === null || f === void 0 ? void 0 : f.call(r)];
                }
              }), [[uo, c.value]])];
            }
          })];
        }
      });
    };
  }
});
var Jv = 0, wk = function() {
  return {
    icon: Q.any,
    title: Q.any,
    disabled: Boolean,
    level: Number,
    popupClassName: String,
    popupOffset: Array,
    internalPopupClose: Boolean,
    eventKey: String,
    expandIcon: Function,
    onMouseenter: Function,
    onMouseleave: Function,
    onTitleClick: Function
  };
};
const ro = pe({
  name: "ASubMenu",
  inheritAttrs: !1,
  props: wk(),
  slots: ["icon", "title", "expandIcon"],
  setup: function(e, n) {
    var r = n.slots, a = n.attrs, o = n.emit, i, l;
    sy(!1);
    var u = Is(), s = sn(), d = Le(s.vnode.key) === "symbol" ? String(s.vnode.key) : s.vnode.key;
    mt(Le(s.vnode.key) !== "symbol", "SubMenu", 'SubMenu `:key="'.concat(String(d), '"` not support Symbol type'));
    var c = wu(d) ? d : "sub_menu_".concat(++Jv, "_$$_not_set_key"), v = (i = e.eventKey) !== null && i !== void 0 ? i : wu(d) ? "sub_menu_".concat(++Jv, "_$$_").concat(d) : c, f = Ts(), g = f.parentEventKeys, p = f.parentInfo, y = f.parentKeys, h = F(function() {
      return [].concat(Ie(y.value), [c]);
    }), w = G([]), C = {
      eventKey: v,
      key: c,
      parentEventKeys: g,
      childrenEventKeys: w,
      parentKeys: y
    };
    (l = p.childrenEventKeys) === null || l === void 0 || l.value.push(v), ht(function() {
      var ie;
      p.childrenEventKeys && (p.childrenEventKeys.value = (ie = p.childrenEventKeys) === null || ie === void 0 ? void 0 : ie.value.filter(function(de) {
        return de != v;
      }));
    }), pk(v, c, C);
    var x = lr(), S = x.prefixCls, b = x.activeKeys, P = x.disabled, T = x.changeActiveKeys, O = x.mode, D = x.inlineCollapsed, V = x.antdMenuTheme, K = x.openKeys, R = x.overflowDisabled, E = x.onOpenChange, M = x.registerMenuInfo, N = x.unRegisterMenuInfo, _ = x.selectedSubMenuKeys, I = x.expandIcon, A = d != null, B = !u && (uy() || !A);
    ek(B), (u && A || !u && !A || B) && (M(v, C), ht(function() {
      N(v);
    }));
    var W = F(function() {
      return "".concat(S.value, "-submenu");
    }), U = F(function() {
      return P.value || e.disabled;
    }), z = G(), L = G(), $ = F(function() {
      return K.value.includes(c);
    }), q = F(function() {
      return !R.value && $.value;
    }), H = F(function() {
      return _.value.includes(c);
    }), J = G(!1);
    Ce(b, function() {
      J.value = !!b.value.find(function(ie) {
        return ie === c;
      });
    }, {
      immediate: !0
    });
    var Z = function(de) {
      U.value || (o("titleClick", de, c), O.value === "inline" && E(c, !$.value));
    }, ae = function(de) {
      U.value || (T(h.value), o("mouseenter", de));
    }, ue = function(de) {
      U.value || (T([]), o("mouseleave", de));
    }, ne = gy(F(function() {
      return h.value.length;
    })), X = function(de) {
      O.value !== "inline" && E(c, de);
    }, te = function() {
      T(h.value);
    }, me = v && "".concat(v, "-popup"), Oe = F(function() {
      return ge(S.value, "".concat(S.value, "-").concat(V.value), e.popupClassName);
    }), ke = function(de, ye) {
      if (!ye)
        return D.value && !y.value.length && de && typeof de == "string" ? m("div", {
          class: "".concat(S.value, "-inline-collapsed-noicon")
        }, [de.charAt(0)]) : m("span", {
          class: "".concat(S.value, "-title-content")
        }, [de]);
      var _e = At(de) && de.type === "span";
      return m(ft, null, [Ct(ye, {
        class: "".concat(S.value, "-item-icon")
      }, !1), _e ? de : m("span", {
        class: "".concat(S.value, "-title-content")
      }, [de])]);
    }, Me = F(function() {
      return O.value !== "inline" && h.value.length > 1 ? "vertical" : O.value;
    }), Pe = F(function() {
      return O.value === "horizontal" ? "vertical" : O.value;
    }), fe = F(function() {
      return Me.value === "horizontal" ? "vertical" : Me.value;
    }), le = function() {
      var de = W.value, ye = ua(r, e, "icon"), _e = e.expandIcon || r.expandIcon || I.value, Be = ke(ua(r, e, "title"), ye);
      return m("div", {
        style: ne.value,
        class: "".concat(de, "-title"),
        tabindex: U.value ? null : -1,
        ref: z,
        title: typeof Be == "string" ? Be : null,
        "data-menu-id": c,
        "aria-expanded": q.value,
        "aria-haspopup": !0,
        "aria-controls": me,
        "aria-disabled": U.value,
        onClick: Z,
        onFocus: te
      }, [Be, O.value !== "horizontal" && _e ? _e(k(k({}, e), {
        isOpen: q.value
      })) : m("i", {
        class: "".concat(de, "-arrow")
      }, null)]);
    };
    return function() {
      var ie, de;
      if (u)
        return A ? (de = r.default) === null || de === void 0 ? void 0 : de.call(r) : null;
      var ye = W.value, _e = function() {
        return null;
      };
      return !R.value && O.value !== "inline" ? _e = function() {
        return m(Qv, {
          mode: Me.value,
          prefixCls: ye,
          visible: !e.internalPopupClose && q.value,
          popupClassName: Oe.value,
          popupOffset: e.popupOffset,
          disabled: U.value,
          onVisibleChange: X
        }, {
          default: function() {
            return [le()];
          },
          popup: function() {
            return m(Ii, {
              mode: fe.value,
              isRootMenu: !1
            }, {
              default: function() {
                return [m(yy, {
                  id: me,
                  ref: L
                }, {
                  default: r.default
                })];
              }
            });
          }
        });
      } : _e = function() {
        return m(Qv, null, {
          default: le
        });
      }, m(Ii, {
        mode: Pe.value
      }, {
        default: function() {
          return [m(aa.Item, Y(Y({
            component: "li"
          }, a), {}, {
            role: "none",
            class: ge(ye, "".concat(ye, "-").concat(O.value), a.class, (ie = {}, j(ie, "".concat(ye, "-open"), q.value), j(ie, "".concat(ye, "-active"), J.value), j(ie, "".concat(ye, "-selected"), H.value), j(ie, "".concat(ye, "-disabled"), U.value), ie)),
            onMouseenter: ae,
            onMouseleave: ue,
            "data-submenu-id": c
          }), {
            default: function() {
              return m(ft, null, [_e(), !R.value && m(Ck, {
                id: me,
                open: q.value,
                keyPath: h.value
              }, {
                default: r.default
              })]);
            }
          })];
        }
      });
    };
  }
});
function by(t, e) {
  if (t.classList)
    return t.classList.contains(e);
  var n = t.className;
  return " ".concat(n, " ").indexOf(" ".concat(e, " ")) > -1;
}
function Zv(t, e) {
  t.classList ? t.classList.add(e) : by(t, e) || (t.className = "".concat(t.className, " ").concat(e));
}
function ep(t, e) {
  if (t.classList)
    t.classList.remove(e);
  else if (by(t, e)) {
    var n = t.className;
    t.className = " ".concat(n, " ").replace(" ".concat(e, " "), " ");
  }
}
var Sk = function() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "ant-motion-collapse", n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return {
    name: e,
    appear: n,
    css: !0,
    onBeforeEnter: function(a) {
      a.style.height = "0px", a.style.opacity = "0", Zv(a, e);
    },
    onEnter: function(a) {
      vt(function() {
        a.style.height = "".concat(a.scrollHeight, "px"), a.style.opacity = "1";
      });
    },
    onAfterEnter: function(a) {
      a && (ep(a, e), a.style.height = null, a.style.opacity = null);
    },
    onBeforeLeave: function(a) {
      Zv(a, e), a.style.height = "".concat(a.offsetHeight, "px"), a.style.opacity = null;
    },
    onLeave: function(a) {
      setTimeout(function() {
        a.style.height = "0px", a.style.opacity = "0";
      });
    },
    onAfterLeave: function(a) {
      a && (ep(a, e), a.style && (a.style.height = null, a.style.opacity = null));
    }
  };
};
const Zi = Sk;
var xk = function() {
  return {
    id: String,
    prefixCls: String,
    disabled: Boolean,
    inlineCollapsed: Boolean,
    disabledOverflow: Boolean,
    forceSubMenuRender: Boolean,
    openKeys: Array,
    selectedKeys: Array,
    activeKey: String,
    selectable: {
      type: Boolean,
      default: !0
    },
    multiple: {
      type: Boolean,
      default: !1
    },
    motion: Object,
    theme: {
      type: String,
      default: "light"
    },
    mode: {
      type: String,
      default: "vertical"
    },
    inlineIndent: {
      type: Number,
      default: 24
    },
    subMenuOpenDelay: {
      type: Number,
      default: 0.1
    },
    subMenuCloseDelay: {
      type: Number,
      default: 0.1
    },
    builtinPlacements: {
      type: Object
    },
    triggerSubMenuAction: {
      type: String,
      default: "hover"
    },
    getPopupContainer: Function,
    expandIcon: Function,
    onOpenChange: Function,
    onSelect: Function,
    onDeselect: Function,
    onClick: [Function, Array],
    onFocus: Function,
    onBlur: Function,
    onMousedown: Function,
    "onUpdate:openKeys": Function,
    "onUpdate:selectedKeys": Function,
    "onUpdate:activeKey": Function
  };
}, tp = [];
const zt = pe({
  name: "AMenu",
  inheritAttrs: !1,
  props: xk(),
  slots: ["expandIcon", "overflowedIndicator"],
  setup: function(e, n) {
    var r = n.slots, a = n.emit, o = n.attrs, i = Qe("menu", e), l = i.prefixCls, u = i.direction, s = i.getPrefixCls, d = G({}), c = ut(fk, G(void 0)), v = F(function() {
      return c.value !== void 0 ? c.value : e.inlineCollapsed;
    }), f = G(!1);
    dt(function() {
      f.value = !0;
    }), Ue(function() {
      mt(!(e.inlineCollapsed === !0 && e.mode !== "inline"), "Menu", "`inlineCollapsed` should only be used when `mode` is inline."), mt(!(c.value !== void 0 && e.inlineCollapsed === !0), "Menu", "`inlineCollapsed` not control Menu under Sider. Should set `collapsed` on Sider instead.");
    });
    var g = G([]), p = G([]), y = G({});
    Ce(d, function() {
      for (var L = {}, $ = 0, q = Object.values(d.value); $ < q.length; $++) {
        var H = q[$];
        L[H.key] = H;
      }
      y.value = L;
    }, {
      flush: "post"
    }), Ue(function() {
      if (e.activeKey !== void 0) {
        var L = [], $ = e.activeKey ? y.value[e.activeKey] : void 0;
        $ && e.activeKey !== void 0 ? L = Wl([].concat(St($.parentKeys), e.activeKey)) : L = [], Jr(g.value, L) || (g.value = L);
      }
    }), Ce(function() {
      return e.selectedKeys;
    }, function(L) {
      L && (p.value = L.slice());
    }, {
      immediate: !0,
      deep: !0
    });
    var h = G([]);
    Ce([y, p], function() {
      var L = [];
      p.value.forEach(function($) {
        var q = y.value[$];
        q && (L = L.concat(St(q.parentKeys)));
      }), L = Wl(L), Jr(h.value, L) || (h.value = L);
    }, {
      immediate: !0
    });
    var w = function($) {
      if (!!e.selectable) {
        var q = $.key, H = p.value.includes(q), J;
        e.multiple ? H ? J = p.value.filter(function(ae) {
          return ae !== q;
        }) : J = [].concat(Ie(p.value), [q]) : J = [q];
        var Z = k(k({}, $), {
          selectedKeys: J
        });
        Jr(J, p.value) || (e.selectedKeys === void 0 && (p.value = J), a("update:selectedKeys", J), H && e.multiple ? a("deselect", Z) : a("select", Z)), T.value !== "inline" && !e.multiple && C.value.length && V(tp);
      }
    }, C = G([]);
    Ce(function() {
      return e.openKeys;
    }, function() {
      var L = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : C.value;
      Jr(C.value, L) || (C.value = L.slice());
    }, {
      immediate: !0,
      deep: !0
    });
    var x, S = function($) {
      clearTimeout(x), x = setTimeout(function() {
        e.activeKey === void 0 && (g.value = $), a("update:activeKey", $[$.length - 1]);
      });
    }, b = F(function() {
      return !!e.disabled;
    }), P = F(function() {
      return u.value === "rtl";
    }), T = G("vertical"), O = G(!1);
    Ue(function() {
      (e.mode === "inline" || e.mode === "vertical") && v.value ? (T.value = "vertical", O.value = v.value) : (T.value = e.mode, O.value = !1);
    });
    var D = F(function() {
      return T.value === "inline";
    }), V = function($) {
      C.value = $, a("update:openKeys", $), a("openChange", $);
    }, K = G(C.value), R = G(!1);
    Ce(C, function() {
      D.value && (K.value = C.value);
    }, {
      immediate: !0
    }), Ce(D, function() {
      if (!R.value) {
        R.value = !0;
        return;
      }
      D.value ? C.value = K.value : V(tp);
    }, {
      immediate: !0
    });
    var E = F(function() {
      var L;
      return L = {}, j(L, "".concat(l.value), !0), j(L, "".concat(l.value, "-root"), !0), j(L, "".concat(l.value, "-").concat(T.value), !0), j(L, "".concat(l.value, "-inline-collapsed"), O.value), j(L, "".concat(l.value, "-rtl"), P.value), j(L, "".concat(l.value, "-").concat(e.theme), !0), L;
    }), M = F(function() {
      return s();
    }), N = F(function() {
      return {
        horizontal: {
          name: "".concat(M.value, "-slide-up")
        },
        inline: Zi,
        other: {
          name: "".concat(M.value, "-zoom-big")
        }
      };
    });
    sy(!0);
    var _ = function L() {
      var $ = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], q = [], H = d.value;
      return $.forEach(function(J) {
        var Z = H[J], ae = Z.key, ue = Z.childrenEventKeys;
        q.push.apply(q, [ae].concat(Ie(L(St(ue)))));
      }), q;
    }, I = function($) {
      a("click", $), w($);
    }, A = function($, q) {
      var H = y.value[$].childrenEventKeys, J = C.value.filter(function(ae) {
        return ae !== $;
      });
      if (q)
        J.push($);
      else if (T.value !== "inline") {
        var Z = _(St(H));
        J = Wl(J.filter(function(ae) {
          return !Z.includes(ae);
        }));
      }
      Jr(C, J) || V(J);
    }, B = function($, q) {
      d.value = k(k({}, d.value), j({}, $, q));
    }, W = function($) {
      delete d.value[$], d.value = k({}, d.value);
    }, U = G(0), z = F(function() {
      return e.expandIcon || r.expandIcon ? function(L) {
        var $ = e.expandIcon || r.expandIcon;
        return $ = typeof $ == "function" ? $(L) : $, Ct($, {
          class: "".concat(l.value, "-submenu-expand-icon")
        }, !1);
      } : null;
    });
    return nk({
      store: d,
      prefixCls: l,
      activeKeys: g,
      openKeys: C,
      selectedKeys: p,
      changeActiveKeys: S,
      disabled: b,
      rtl: P,
      mode: T,
      inlineIndent: F(function() {
        return e.inlineIndent;
      }),
      subMenuCloseDelay: F(function() {
        return e.subMenuCloseDelay;
      }),
      subMenuOpenDelay: F(function() {
        return e.subMenuOpenDelay;
      }),
      builtinPlacements: F(function() {
        return e.builtinPlacements;
      }),
      triggerSubMenuAction: F(function() {
        return e.triggerSubMenuAction;
      }),
      getPopupContainer: F(function() {
        return e.getPopupContainer;
      }),
      inlineCollapsed: O,
      antdMenuTheme: F(function() {
        return e.theme;
      }),
      siderCollapsed: c,
      defaultMotions: F(function() {
        return f.value ? N.value : null;
      }),
      motion: F(function() {
        return f.value ? e.motion : null;
      }),
      overflowDisabled: G(void 0),
      onOpenChange: A,
      onItemClick: I,
      registerMenuInfo: B,
      unRegisterMenuInfo: W,
      selectedSubMenuKeys: h,
      isRootMenu: G(!0),
      expandIcon: z,
      forceSubMenuRender: F(function() {
        return e.forceSubMenuRender;
      })
    }), function() {
      var L, $, q = Kt((L = r.default) === null || L === void 0 ? void 0 : L.call(r)), H = U.value >= q.length - 1 || T.value !== "horizontal" || e.disabledOverflow, J = T.value !== "horizontal" || e.disabledOverflow ? q : q.map(function(ae, ue) {
        return m(Ii, {
          key: ae.key,
          overflowDisabled: ue > U.value
        }, {
          default: function() {
            return ae;
          }
        });
      }), Z = (($ = r.overflowedIndicator) === null || $ === void 0 ? void 0 : $.call(r)) || m(ry, null, null);
      return m(aa, Y(Y({}, o), {}, {
        onMousedown: e.onMousedown,
        prefixCls: "".concat(l.value, "-overflow"),
        component: "ul",
        itemComponent: ki,
        class: [E.value, o.class],
        role: "menu",
        id: e.id,
        data: J,
        renderRawItem: function(ue) {
          return ue;
        },
        renderRawRest: function(ue) {
          var ne = ue.length, X = ne ? q.slice(-ne) : null;
          return m(ft, null, [m(ro, {
            eventKey: jo,
            key: jo,
            title: Z,
            disabled: H,
            internalPopupClose: ne === 0
          }, {
            default: function() {
              return X;
            }
          }), m(Xv, null, {
            default: function() {
              return [m(ro, {
                eventKey: jo,
                key: jo,
                title: Z,
                disabled: H,
                internalPopupClose: ne === 0
              }, {
                default: function() {
                  return X;
                }
              })];
            }
          })]);
        },
        maxCount: T.value !== "horizontal" || e.disabledOverflow ? aa.INVALIDATE : aa.RESPONSIVE,
        ssr: "full",
        "data-menu-list": !0,
        onVisibleChange: function(ue) {
          U.value = ue;
        }
      }), {
        default: function() {
          return [m(Pc, {
            to: "body"
          }, {
            default: function() {
              return [m("div", {
                style: {
                  display: "none"
                },
                "aria-hidden": !0
              }, [m(Xv, null, {
                default: function() {
                  return [J];
                }
              })])];
            }
          })];
        }
      });
    };
  }
});
var Pk = function() {
  return {
    title: Q.any
  };
};
const Gu = pe({
  name: "AMenuItemGroup",
  inheritAttrs: !1,
  props: Pk(),
  slots: ["title"],
  setup: function(e, n) {
    var r = n.slots, a = n.attrs, o = lr(), i = o.prefixCls, l = F(function() {
      return "".concat(i.value, "-item-group");
    }), u = Is();
    return function() {
      var s, d;
      return u ? (s = r.default) === null || s === void 0 ? void 0 : s.call(r) : m("li", Y(Y({}, a), {}, {
        onClick: function(v) {
          return v.stopPropagation();
        },
        class: l.value
      }), [m("div", {
        title: typeof e.title == "string" ? e.title : void 0,
        class: "".concat(l.value, "-title")
      }, [ua(r, e, "title")]), m("ul", {
        class: "".concat(l.value, "-list")
      }, [(d = r.default) === null || d === void 0 ? void 0 : d.call(r)])]);
    };
  }
});
var Ok = function() {
  return {
    prefixCls: String,
    dashed: Boolean
  };
};
const Xu = pe({
  name: "AMenuDivider",
  props: Ok(),
  setup: function(e) {
    var n = Qe("menu", e), r = n.prefixCls, a = F(function() {
      var o;
      return o = {}, j(o, "".concat(r.value, "-item-divider"), !0), j(o, "".concat(r.value, "-item-divider-dashed"), !!e.dashed), o;
    });
    return function() {
      return m("li", {
        class: a.value
      }, null);
    };
  }
});
zt.install = function(t) {
  return t.component(zt.name, zt), t.component(ki.name, ki), t.component(ro.name, ro), t.component(Xu.name, Xu), t.component(Gu.name, Gu), t;
};
zt.Item = ki;
zt.Divider = Xu;
zt.SubMenu = ro;
zt.ItemGroup = Gu;
var Cy = { exports: {} };
(function(t, e) {
  (function(n, r) {
    t.exports = r();
  })(Dr, function() {
    var n = 1e3, r = 6e4, a = 36e5, o = "millisecond", i = "second", l = "minute", u = "hour", s = "day", d = "week", c = "month", v = "quarter", f = "year", g = "date", p = "Invalid Date", y = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, h = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, w = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_") }, C = function(R, E, M) {
      var N = String(R);
      return !N || N.length >= E ? R : "" + Array(E + 1 - N.length).join(M) + R;
    }, x = { s: C, z: function(R) {
      var E = -R.utcOffset(), M = Math.abs(E), N = Math.floor(M / 60), _ = M % 60;
      return (E <= 0 ? "+" : "-") + C(N, 2, "0") + ":" + C(_, 2, "0");
    }, m: function R(E, M) {
      if (E.date() < M.date())
        return -R(M, E);
      var N = 12 * (M.year() - E.year()) + (M.month() - E.month()), _ = E.clone().add(N, c), I = M - _ < 0, A = E.clone().add(N + (I ? -1 : 1), c);
      return +(-(N + (M - _) / (I ? _ - A : A - _)) || 0);
    }, a: function(R) {
      return R < 0 ? Math.ceil(R) || 0 : Math.floor(R);
    }, p: function(R) {
      return { M: c, y: f, w: d, d: s, D: g, h: u, m: l, s: i, ms: o, Q: v }[R] || String(R || "").toLowerCase().replace(/s$/, "");
    }, u: function(R) {
      return R === void 0;
    } }, S = "en", b = {};
    b[S] = w;
    var P = function(R) {
      return R instanceof V;
    }, T = function R(E, M, N) {
      var _;
      if (!E)
        return S;
      if (typeof E == "string") {
        var I = E.toLowerCase();
        b[I] && (_ = I), M && (b[I] = M, _ = I);
        var A = E.split("-");
        if (!_ && A.length > 1)
          return R(A[0]);
      } else {
        var B = E.name;
        b[B] = E, _ = B;
      }
      return !N && _ && (S = _), _ || !N && S;
    }, O = function(R, E) {
      if (P(R))
        return R.clone();
      var M = typeof E == "object" ? E : {};
      return M.date = R, M.args = arguments, new V(M);
    }, D = x;
    D.l = T, D.i = P, D.w = function(R, E) {
      return O(R, { locale: E.$L, utc: E.$u, x: E.$x, $offset: E.$offset });
    };
    var V = function() {
      function R(M) {
        this.$L = T(M.locale, null, !0), this.parse(M);
      }
      var E = R.prototype;
      return E.parse = function(M) {
        this.$d = function(N) {
          var _ = N.date, I = N.utc;
          if (_ === null)
            return new Date(NaN);
          if (D.u(_))
            return new Date();
          if (_ instanceof Date)
            return new Date(_);
          if (typeof _ == "string" && !/Z$/i.test(_)) {
            var A = _.match(y);
            if (A) {
              var B = A[2] - 1 || 0, W = (A[7] || "0").substring(0, 3);
              return I ? new Date(Date.UTC(A[1], B, A[3] || 1, A[4] || 0, A[5] || 0, A[6] || 0, W)) : new Date(A[1], B, A[3] || 1, A[4] || 0, A[5] || 0, A[6] || 0, W);
            }
          }
          return new Date(_);
        }(M), this.$x = M.x || {}, this.init();
      }, E.init = function() {
        var M = this.$d;
        this.$y = M.getFullYear(), this.$M = M.getMonth(), this.$D = M.getDate(), this.$W = M.getDay(), this.$H = M.getHours(), this.$m = M.getMinutes(), this.$s = M.getSeconds(), this.$ms = M.getMilliseconds();
      }, E.$utils = function() {
        return D;
      }, E.isValid = function() {
        return this.$d.toString() !== p;
      }, E.isSame = function(M, N) {
        var _ = O(M);
        return this.startOf(N) <= _ && _ <= this.endOf(N);
      }, E.isAfter = function(M, N) {
        return O(M) < this.startOf(N);
      }, E.isBefore = function(M, N) {
        return this.endOf(N) < O(M);
      }, E.$g = function(M, N, _) {
        return D.u(M) ? this[N] : this.set(_, M);
      }, E.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, E.valueOf = function() {
        return this.$d.getTime();
      }, E.startOf = function(M, N) {
        var _ = this, I = !!D.u(N) || N, A = D.p(M), B = function(J, Z) {
          var ae = D.w(_.$u ? Date.UTC(_.$y, Z, J) : new Date(_.$y, Z, J), _);
          return I ? ae : ae.endOf(s);
        }, W = function(J, Z) {
          return D.w(_.toDate()[J].apply(_.toDate("s"), (I ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(Z)), _);
        }, U = this.$W, z = this.$M, L = this.$D, $ = "set" + (this.$u ? "UTC" : "");
        switch (A) {
          case f:
            return I ? B(1, 0) : B(31, 11);
          case c:
            return I ? B(1, z) : B(0, z + 1);
          case d:
            var q = this.$locale().weekStart || 0, H = (U < q ? U + 7 : U) - q;
            return B(I ? L - H : L + (6 - H), z);
          case s:
          case g:
            return W($ + "Hours", 0);
          case u:
            return W($ + "Minutes", 1);
          case l:
            return W($ + "Seconds", 2);
          case i:
            return W($ + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, E.endOf = function(M) {
        return this.startOf(M, !1);
      }, E.$set = function(M, N) {
        var _, I = D.p(M), A = "set" + (this.$u ? "UTC" : ""), B = (_ = {}, _[s] = A + "Date", _[g] = A + "Date", _[c] = A + "Month", _[f] = A + "FullYear", _[u] = A + "Hours", _[l] = A + "Minutes", _[i] = A + "Seconds", _[o] = A + "Milliseconds", _)[I], W = I === s ? this.$D + (N - this.$W) : N;
        if (I === c || I === f) {
          var U = this.clone().set(g, 1);
          U.$d[B](W), U.init(), this.$d = U.set(g, Math.min(this.$D, U.daysInMonth())).$d;
        } else
          B && this.$d[B](W);
        return this.init(), this;
      }, E.set = function(M, N) {
        return this.clone().$set(M, N);
      }, E.get = function(M) {
        return this[D.p(M)]();
      }, E.add = function(M, N) {
        var _, I = this;
        M = Number(M);
        var A = D.p(N), B = function(z) {
          var L = O(I);
          return D.w(L.date(L.date() + Math.round(z * M)), I);
        };
        if (A === c)
          return this.set(c, this.$M + M);
        if (A === f)
          return this.set(f, this.$y + M);
        if (A === s)
          return B(1);
        if (A === d)
          return B(7);
        var W = (_ = {}, _[l] = r, _[u] = a, _[i] = n, _)[A] || 1, U = this.$d.getTime() + M * W;
        return D.w(U, this);
      }, E.subtract = function(M, N) {
        return this.add(-1 * M, N);
      }, E.format = function(M) {
        var N = this, _ = this.$locale();
        if (!this.isValid())
          return _.invalidDate || p;
        var I = M || "YYYY-MM-DDTHH:mm:ssZ", A = D.z(this), B = this.$H, W = this.$m, U = this.$M, z = _.weekdays, L = _.months, $ = function(Z, ae, ue, ne) {
          return Z && (Z[ae] || Z(N, I)) || ue[ae].slice(0, ne);
        }, q = function(Z) {
          return D.s(B % 12 || 12, Z, "0");
        }, H = _.meridiem || function(Z, ae, ue) {
          var ne = Z < 12 ? "AM" : "PM";
          return ue ? ne.toLowerCase() : ne;
        }, J = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: U + 1, MM: D.s(U + 1, 2, "0"), MMM: $(_.monthsShort, U, L, 3), MMMM: $(L, U), D: this.$D, DD: D.s(this.$D, 2, "0"), d: String(this.$W), dd: $(_.weekdaysMin, this.$W, z, 2), ddd: $(_.weekdaysShort, this.$W, z, 3), dddd: z[this.$W], H: String(B), HH: D.s(B, 2, "0"), h: q(1), hh: q(2), a: H(B, W, !0), A: H(B, W, !1), m: String(W), mm: D.s(W, 2, "0"), s: String(this.$s), ss: D.s(this.$s, 2, "0"), SSS: D.s(this.$ms, 3, "0"), Z: A };
        return I.replace(h, function(Z, ae) {
          return ae || J[Z] || A.replace(":", "");
        });
      }, E.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, E.diff = function(M, N, _) {
        var I, A = D.p(N), B = O(M), W = (B.utcOffset() - this.utcOffset()) * r, U = this - B, z = D.m(this, B);
        return z = (I = {}, I[f] = z / 12, I[c] = z, I[v] = z / 3, I[d] = (U - W) / 6048e5, I[s] = (U - W) / 864e5, I[u] = U / a, I[l] = U / r, I[i] = U / n, I)[A] || U, _ ? z : D.a(z);
      }, E.daysInMonth = function() {
        return this.endOf(c).$D;
      }, E.$locale = function() {
        return b[this.$L];
      }, E.locale = function(M, N) {
        if (!M)
          return this.$L;
        var _ = this.clone(), I = T(M, N, !0);
        return I && (_.$L = I), _;
      }, E.clone = function() {
        return D.w(this.$d, this);
      }, E.toDate = function() {
        return new Date(this.valueOf());
      }, E.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, E.toISOString = function() {
        return this.$d.toISOString();
      }, E.toString = function() {
        return this.$d.toUTCString();
      }, R;
    }(), K = V.prototype;
    return O.prototype = K, [["$ms", o], ["$s", i], ["$m", l], ["$H", u], ["$W", s], ["$M", c], ["$y", f], ["$D", g]].forEach(function(R) {
      K[R[1]] = function(E) {
        return this.$g(E, R[0], R[1]);
      };
    }), O.extend = function(R, E) {
      return R.$i || (R(E, V, O), R.$i = !0), O;
    }, O.locale = T, O.isDayjs = P, O.unix = function(R) {
      return O(1e3 * R);
    }, O.en = b[S], O.Ls = b, O.p = {}, O;
  });
})(Cy);
const Nt = Cy.exports;
var wy = { exports: {} };
(function(t, e) {
  (function(n, r) {
    t.exports = r();
  })(Dr, function() {
    return function(n, r) {
      r.prototype.weekday = function(a) {
        var o = this.$locale().weekStart || 0, i = this.$W, l = (i < o ? i + 7 : i) - o;
        return this.$utils().u(a) ? l : this.subtract(l, "day").add(a, "day");
      };
    };
  });
})(wy);
const Tk = wy.exports;
var Sy = { exports: {} };
(function(t, e) {
  (function(n, r) {
    t.exports = r();
  })(Dr, function() {
    return function(n, r, a) {
      var o = r.prototype, i = function(c) {
        return c && (c.indexOf ? c : c.s);
      }, l = function(c, v, f, g, p) {
        var y = c.name ? c : c.$locale(), h = i(y[v]), w = i(y[f]), C = h || w.map(function(S) {
          return S.slice(0, g);
        });
        if (!p)
          return C;
        var x = y.weekStart;
        return C.map(function(S, b) {
          return C[(b + (x || 0)) % 7];
        });
      }, u = function() {
        return a.Ls[a.locale()];
      }, s = function(c, v) {
        return c.formats[v] || function(f) {
          return f.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(g, p, y) {
            return p || y.slice(1);
          });
        }(c.formats[v.toUpperCase()]);
      }, d = function() {
        var c = this;
        return { months: function(v) {
          return v ? v.format("MMMM") : l(c, "months");
        }, monthsShort: function(v) {
          return v ? v.format("MMM") : l(c, "monthsShort", "months", 3);
        }, firstDayOfWeek: function() {
          return c.$locale().weekStart || 0;
        }, weekdays: function(v) {
          return v ? v.format("dddd") : l(c, "weekdays");
        }, weekdaysMin: function(v) {
          return v ? v.format("dd") : l(c, "weekdaysMin", "weekdays", 2);
        }, weekdaysShort: function(v) {
          return v ? v.format("ddd") : l(c, "weekdaysShort", "weekdays", 3);
        }, longDateFormat: function(v) {
          return s(c.$locale(), v);
        }, meridiem: this.$locale().meridiem, ordinal: this.$locale().ordinal };
      };
      o.localeData = function() {
        return d.bind(this)();
      }, a.localeData = function() {
        var c = u();
        return { firstDayOfWeek: function() {
          return c.weekStart || 0;
        }, weekdays: function() {
          return a.weekdays();
        }, weekdaysShort: function() {
          return a.weekdaysShort();
        }, weekdaysMin: function() {
          return a.weekdaysMin();
        }, months: function() {
          return a.months();
        }, monthsShort: function() {
          return a.monthsShort();
        }, longDateFormat: function(v) {
          return s(c, v);
        }, meridiem: c.meridiem, ordinal: c.ordinal };
      }, a.months = function() {
        return l(u(), "months");
      }, a.monthsShort = function() {
        return l(u(), "monthsShort", "months", 3);
      }, a.weekdays = function(c) {
        return l(u(), "weekdays", null, null, c);
      }, a.weekdaysShort = function(c) {
        return l(u(), "weekdaysShort", "weekdays", 3, c);
      }, a.weekdaysMin = function(c) {
        return l(u(), "weekdaysMin", "weekdays", 2, c);
      };
    };
  });
})(Sy);
const Ik = Sy.exports;
var xy = { exports: {} };
(function(t, e) {
  (function(n, r) {
    t.exports = r();
  })(Dr, function() {
    var n = "week", r = "year";
    return function(a, o, i) {
      var l = o.prototype;
      l.week = function(u) {
        if (u === void 0 && (u = null), u !== null)
          return this.add(7 * (u - this.week()), "day");
        var s = this.$locale().yearStart || 1;
        if (this.month() === 11 && this.date() > 25) {
          var d = i(this).startOf(r).add(1, r).date(s), c = i(this).endOf(n);
          if (d.isBefore(c))
            return 1;
        }
        var v = i(this).startOf(r).date(s).startOf(n).subtract(1, "millisecond"), f = this.diff(v, n, !0);
        return f < 0 ? i(this).startOf("week").week() : Math.ceil(f);
      }, l.weeks = function(u) {
        return u === void 0 && (u = null), this.week(u);
      };
    };
  });
})(xy);
const kk = xy.exports;
var Py = { exports: {} };
(function(t, e) {
  (function(n, r) {
    t.exports = r();
  })(Dr, function() {
    return function(n, r) {
      r.prototype.weekYear = function() {
        var a = this.month(), o = this.week(), i = this.year();
        return o === 1 && a === 11 ? i + 1 : a === 0 && o >= 52 ? i - 1 : i;
      };
    };
  });
})(Py);
const _k = Py.exports;
var Oy = { exports: {} };
(function(t, e) {
  (function(n, r) {
    t.exports = r();
  })(Dr, function() {
    return function(n, r, a) {
      var o = r.prototype, i = o.format;
      a.en.ordinal = function(l) {
        var u = ["th", "st", "nd", "rd"], s = l % 100;
        return "[" + l + (u[(s - 20) % 10] || u[s] || u[0]) + "]";
      }, o.format = function(l) {
        var u = this, s = this.$locale();
        if (!this.isValid())
          return i.bind(this)(l);
        var d = this.$utils(), c = (l || "YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g, function(v) {
          switch (v) {
            case "Q":
              return Math.ceil((u.$M + 1) / 3);
            case "Do":
              return s.ordinal(u.$D);
            case "gggg":
              return u.weekYear();
            case "GGGG":
              return u.isoWeekYear();
            case "wo":
              return s.ordinal(u.week(), "W");
            case "w":
            case "ww":
              return d.s(u.week(), v === "w" ? 1 : 2, "0");
            case "W":
            case "WW":
              return d.s(u.isoWeek(), v === "W" ? 1 : 2, "0");
            case "k":
            case "kk":
              return d.s(String(u.$H === 0 ? 24 : u.$H), v === "k" ? 1 : 2, "0");
            case "X":
              return Math.floor(u.$d.getTime() / 1e3);
            case "x":
              return u.$d.getTime();
            case "z":
              return "[" + u.offsetName() + "]";
            case "zzz":
              return "[" + u.offsetName("long") + "]";
            default:
              return v;
          }
        });
        return i.bind(this)(c);
      };
    };
  });
})(Oy);
const Ek = Oy.exports;
var Ty = { exports: {} };
(function(t, e) {
  (function(n, r) {
    t.exports = r();
  })(Dr, function() {
    var n = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, r = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, a = /\d\d/, o = /\d\d?/, i = /\d*[^-_:/,()\s\d]+/, l = {}, u = function(p) {
      return (p = +p) + (p > 68 ? 1900 : 2e3);
    }, s = function(p) {
      return function(y) {
        this[p] = +y;
      };
    }, d = [/[+-]\d\d:?(\d\d)?|Z/, function(p) {
      (this.zone || (this.zone = {})).offset = function(y) {
        if (!y || y === "Z")
          return 0;
        var h = y.match(/([+-]|\d\d)/g), w = 60 * h[1] + (+h[2] || 0);
        return w === 0 ? 0 : h[0] === "+" ? -w : w;
      }(p);
    }], c = function(p) {
      var y = l[p];
      return y && (y.indexOf ? y : y.s.concat(y.f));
    }, v = function(p, y) {
      var h, w = l.meridiem;
      if (w) {
        for (var C = 1; C <= 24; C += 1)
          if (p.indexOf(w(C, 0, y)) > -1) {
            h = C > 12;
            break;
          }
      } else
        h = p === (y ? "pm" : "PM");
      return h;
    }, f = { A: [i, function(p) {
      this.afternoon = v(p, !1);
    }], a: [i, function(p) {
      this.afternoon = v(p, !0);
    }], S: [/\d/, function(p) {
      this.milliseconds = 100 * +p;
    }], SS: [a, function(p) {
      this.milliseconds = 10 * +p;
    }], SSS: [/\d{3}/, function(p) {
      this.milliseconds = +p;
    }], s: [o, s("seconds")], ss: [o, s("seconds")], m: [o, s("minutes")], mm: [o, s("minutes")], H: [o, s("hours")], h: [o, s("hours")], HH: [o, s("hours")], hh: [o, s("hours")], D: [o, s("day")], DD: [a, s("day")], Do: [i, function(p) {
      var y = l.ordinal, h = p.match(/\d+/);
      if (this.day = h[0], y)
        for (var w = 1; w <= 31; w += 1)
          y(w).replace(/\[|\]/g, "") === p && (this.day = w);
    }], M: [o, s("month")], MM: [a, s("month")], MMM: [i, function(p) {
      var y = c("months"), h = (c("monthsShort") || y.map(function(w) {
        return w.slice(0, 3);
      })).indexOf(p) + 1;
      if (h < 1)
        throw new Error();
      this.month = h % 12 || h;
    }], MMMM: [i, function(p) {
      var y = c("months").indexOf(p) + 1;
      if (y < 1)
        throw new Error();
      this.month = y % 12 || y;
    }], Y: [/[+-]?\d+/, s("year")], YY: [a, function(p) {
      this.year = u(p);
    }], YYYY: [/\d{4}/, s("year")], Z: d, ZZ: d };
    function g(p) {
      var y, h;
      y = p, h = l && l.formats;
      for (var w = (p = y.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(O, D, V) {
        var K = V && V.toUpperCase();
        return D || h[V] || n[V] || h[K].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(R, E, M) {
          return E || M.slice(1);
        });
      })).match(r), C = w.length, x = 0; x < C; x += 1) {
        var S = w[x], b = f[S], P = b && b[0], T = b && b[1];
        w[x] = T ? { regex: P, parser: T } : S.replace(/^\[|\]$/g, "");
      }
      return function(O) {
        for (var D = {}, V = 0, K = 0; V < C; V += 1) {
          var R = w[V];
          if (typeof R == "string")
            K += R.length;
          else {
            var E = R.regex, M = R.parser, N = O.slice(K), _ = E.exec(N)[0];
            M.call(D, _), O = O.replace(_, "");
          }
        }
        return function(I) {
          var A = I.afternoon;
          if (A !== void 0) {
            var B = I.hours;
            A ? B < 12 && (I.hours += 12) : B === 12 && (I.hours = 0), delete I.afternoon;
          }
        }(D), D;
      };
    }
    return function(p, y, h) {
      h.p.customParseFormat = !0, p && p.parseTwoDigitYear && (u = p.parseTwoDigitYear);
      var w = y.prototype, C = w.parse;
      w.parse = function(x) {
        var S = x.date, b = x.utc, P = x.args;
        this.$u = b;
        var T = P[1];
        if (typeof T == "string") {
          var O = P[2] === !0, D = P[3] === !0, V = O || D, K = P[2];
          D && (K = P[2]), l = this.$locale(), !O && K && (l = h.Ls[K]), this.$d = function(N, _, I) {
            try {
              if (["x", "X"].indexOf(_) > -1)
                return new Date((_ === "X" ? 1e3 : 1) * N);
              var A = g(_)(N), B = A.year, W = A.month, U = A.day, z = A.hours, L = A.minutes, $ = A.seconds, q = A.milliseconds, H = A.zone, J = new Date(), Z = U || (B || W ? 1 : J.getDate()), ae = B || J.getFullYear(), ue = 0;
              B && !W || (ue = W > 0 ? W - 1 : J.getMonth());
              var ne = z || 0, X = L || 0, te = $ || 0, me = q || 0;
              return H ? new Date(Date.UTC(ae, ue, Z, ne, X, te, me + 60 * H.offset * 1e3)) : I ? new Date(Date.UTC(ae, ue, Z, ne, X, te, me)) : new Date(ae, ue, Z, ne, X, te, me);
            } catch {
              return new Date("");
            }
          }(S, T, b), this.init(), K && K !== !0 && (this.$L = this.locale(K).$L), V && S != this.format(T) && (this.$d = new Date("")), l = {};
        } else if (T instanceof Array)
          for (var R = T.length, E = 1; E <= R; E += 1) {
            P[1] = T[E - 1];
            var M = h.apply(this, P);
            if (M.isValid()) {
              this.$d = M.$d, this.$L = M.$L, this.init();
              break;
            }
            E === R && (this.$d = new Date(""));
          }
        else
          C.call(this, x);
      };
    };
  });
})(Ty);
const Nk = Ty.exports;
Nt.extend(Nk);
Nt.extend(Ek);
Nt.extend(Tk);
Nt.extend(Ik);
Nt.extend(kk);
Nt.extend(_k);
Nt.extend(function(t, e) {
  var n = e.prototype, r = n.format;
  n.format = function(o) {
    var i = (o || "").replace("Wo", "wo");
    return r.bind(this)(i);
  };
});
var Mk = {
  bn_BD: "bn-bd",
  by_BY: "be",
  en_GB: "en-gb",
  en_US: "en",
  fr_BE: "fr",
  fr_CA: "fr-ca",
  hy_AM: "hy-am",
  kmr_IQ: "ku",
  nl_BE: "nl-be",
  pt_BR: "pt-br",
  zh_CN: "zh-cn",
  zh_HK: "zh-hk",
  zh_TW: "zh-tw"
}, hr = function(e) {
  var n = Mk[e];
  return n || e.split("_")[0];
}, np = function() {
  Su(!1, "Not match any format. Please help to fire a issue about this.");
}, Ak = {
  getNow: function() {
    return Nt();
  },
  getFixedDate: function(e) {
    return Nt(e, ["YYYY-M-DD", "YYYY-MM-DD"]);
  },
  getEndDate: function(e) {
    return e.endOf("month");
  },
  getWeekDay: function(e) {
    var n = e.locale("en");
    return n.weekday() + n.localeData().firstDayOfWeek();
  },
  getYear: function(e) {
    return e.year();
  },
  getMonth: function(e) {
    return e.month();
  },
  getDate: function(e) {
    return e.date();
  },
  getHour: function(e) {
    return e.hour();
  },
  getMinute: function(e) {
    return e.minute();
  },
  getSecond: function(e) {
    return e.second();
  },
  addYear: function(e, n) {
    return e.add(n, "year");
  },
  addMonth: function(e, n) {
    return e.add(n, "month");
  },
  addDate: function(e, n) {
    return e.add(n, "day");
  },
  setYear: function(e, n) {
    return e.year(n);
  },
  setMonth: function(e, n) {
    return e.month(n);
  },
  setDate: function(e, n) {
    return e.date(n);
  },
  setHour: function(e, n) {
    return e.hour(n);
  },
  setMinute: function(e, n) {
    return e.minute(n);
  },
  setSecond: function(e, n) {
    return e.second(n);
  },
  isAfter: function(e, n) {
    return e.isAfter(n);
  },
  isValidate: function(e) {
    return e.isValid();
  },
  locale: {
    getWeekFirstDay: function(e) {
      return Nt().locale(hr(e)).localeData().firstDayOfWeek();
    },
    getWeekFirstDate: function(e, n) {
      return n.locale(hr(e)).weekday(0);
    },
    getWeek: function(e, n) {
      return n.locale(hr(e)).week();
    },
    getShortWeekDays: function(e) {
      return Nt().locale(hr(e)).localeData().weekdaysMin();
    },
    getShortMonths: function(e) {
      return Nt().locale(hr(e)).localeData().monthsShort();
    },
    format: function(e, n, r) {
      return n.locale(hr(e)).format(r);
    },
    parse: function(e, n, r) {
      for (var a = hr(e), o = 0; o < r.length; o += 1) {
        var i = r[o], l = n;
        if (i.includes("wo") || i.includes("Wo")) {
          for (var u = l.split("-")[0], s = l.split("-")[1], d = Nt(u, "YYYY").startOf("year").locale(a), c = 0; c <= 52; c += 1) {
            var v = d.add(c, "week");
            if (v.format("Wo") === s)
              return v;
          }
          return np(), null;
        }
        var f = Nt(l, i, !0).locale(a);
        if (f.isValid())
          return f;
      }
      return n || np(), null;
    }
  },
  toDate: function(e, n) {
    return Array.isArray(e) ? e.map(function(r) {
      return typeof r == "string" && r ? Nt(r, n) : r || null;
    }) : typeof e == "string" && e ? Nt(e, n) : e || null;
  },
  toString: function(e, n) {
    return Array.isArray(e) ? e.map(function(r) {
      return Nt.isDayjs(r) ? r.format(n) : r;
    }) : Nt.isDayjs(e) ? e.format(n) : e;
  }
};
const Iy = Ak;
function el(t, e) {
  for (var n = -1, r = t == null ? 0 : t.length, a = Array(r); ++n < r; )
    a[n] = e(t[n], n, t);
  return a;
}
var Dk = "[object Symbol]";
function tl(t) {
  return typeof t == "symbol" || _n(t) && Er(t) == Dk;
}
var Fk = 1 / 0, rp = un ? un.prototype : void 0, ap = rp ? rp.toString : void 0;
function ky(t) {
  if (typeof t == "string")
    return t;
  if (cn(t))
    return el(t, ky) + "";
  if (tl(t))
    return ap ? ap.call(t) : "";
  var e = t + "";
  return e == "0" && 1 / t == -Fk ? "-0" : e;
}
function Rk(t, e, n) {
  var r = -1, a = t.length;
  e < 0 && (e = -e > a ? 0 : a + e), n = n > a ? a : n, n < 0 && (n += a), a = e > n ? 0 : n - e >>> 0, e >>>= 0;
  for (var o = Array(a); ++r < a; )
    o[r] = t[r + e];
  return o;
}
function $k(t) {
  return function(e) {
    return e == null ? void 0 : e[t];
  };
}
var Lk = /\s/;
function jk(t) {
  for (var e = t.length; e-- && Lk.test(t.charAt(e)); )
    ;
  return e;
}
var Vk = /^\s+/;
function Bk(t) {
  return t && t.slice(0, jk(t) + 1).replace(Vk, "");
}
var op = 0 / 0, Kk = /^[-+]0x[0-9a-f]+$/i, Hk = /^0b[01]+$/i, zk = /^0o[0-7]+$/i, Wk = parseInt;
function Qu(t) {
  if (typeof t == "number")
    return t;
  if (tl(t))
    return op;
  if (Kn(t)) {
    var e = typeof t.valueOf == "function" ? t.valueOf() : t;
    t = Kn(e) ? e + "" : e;
  }
  if (typeof t != "string")
    return t === 0 ? t : +t;
  t = Bk(t);
  var n = Hk.test(t);
  return n || zk.test(t) ? Wk(t.slice(2), n ? 2 : 8) : Kk.test(t) ? op : +t;
}
var ip = 1 / 0, Uk = 17976931348623157e292;
function Yk(t) {
  if (!t)
    return t === 0 ? t : 0;
  if (t = Qu(t), t === ip || t === -ip) {
    var e = t < 0 ? -1 : 1;
    return e * Uk;
  }
  return t === t ? t : 0;
}
function qk(t) {
  var e = Yk(t), n = e % 1;
  return e === e ? n ? e - n : e : 0;
}
function Gk(t) {
  return t == null ? "" : ky(t);
}
function Tt(t) {
  var e = _0();
  return k(k({}, t), e);
}
var _y = Symbol("PanelContextProps"), ks = function(e) {
  ct(_y, e);
}, Nn = function() {
  return ut(_y, {});
}, Vo = {
  visibility: "hidden"
};
function ur(t, e) {
  var n = e.slots, r, a = Tt(t), o = a.prefixCls, i = a.prevIcon, l = i === void 0 ? "\u2039" : i, u = a.nextIcon, s = u === void 0 ? "\u203A" : u, d = a.superPrevIcon, c = d === void 0 ? "\xAB" : d, v = a.superNextIcon, f = v === void 0 ? "\xBB" : v, g = a.onSuperPrev, p = a.onSuperNext, y = a.onPrev, h = a.onNext, w = Nn(), C = w.hideNextBtn, x = w.hidePrevBtn;
  return m("div", {
    class: o
  }, [g && m("button", {
    type: "button",
    onClick: g,
    tabindex: -1,
    class: "".concat(o, "-super-prev-btn"),
    style: x.value ? Vo : {}
  }, [c]), y && m("button", {
    type: "button",
    onClick: y,
    tabindex: -1,
    class: "".concat(o, "-prev-btn"),
    style: x.value ? Vo : {}
  }, [l]), m("div", {
    class: "".concat(o, "-view")
  }, [(r = n.default) === null || r === void 0 ? void 0 : r.call(n)]), h && m("button", {
    type: "button",
    onClick: h,
    tabindex: -1,
    class: "".concat(o, "-next-btn"),
    style: C.value ? Vo : {}
  }, [s]), p && m("button", {
    type: "button",
    onClick: p,
    tabindex: -1,
    class: "".concat(o, "-super-next-btn"),
    style: C.value ? Vo : {}
  }, [f])]);
}
ur.displayName = "Header";
ur.inheritAttrs = !1;
function _s(t) {
  var e = Tt(t), n = e.prefixCls, r = e.generateConfig, a = e.viewDate, o = e.onPrevDecades, i = e.onNextDecades, l = Nn(), u = l.hideHeader;
  if (u)
    return null;
  var s = "".concat(n, "-header"), d = r.getYear(a), c = Math.floor(d / Ln) * Ln, v = c + Ln - 1;
  return m(ur, Y(Y({}, e), {}, {
    prefixCls: s,
    onSuperPrev: o,
    onSuperNext: i
  }), {
    default: function() {
      return [c, or("-"), v];
    }
  });
}
_s.displayName = "DecadeHeader";
_s.inheritAttrs = !1;
function Ey(t, e, n, r, a) {
  var o = t.setHour(e, n);
  return o = t.setMinute(o, r), o = t.setSecond(o, a), o;
}
function oi(t, e, n) {
  if (!n)
    return e;
  var r = e;
  return r = t.setHour(r, t.getHour(n)), r = t.setMinute(r, t.getMinute(n)), r = t.setSecond(r, t.getSecond(n)), r;
}
function Xk(t, e, n, r, a, o) {
  var i = Math.floor(t / r) * r;
  if (i < t)
    return [i, 60 - a, 60 - o];
  var l = Math.floor(e / a) * a;
  if (l < e)
    return [i, l, 60 - o];
  var u = Math.floor(n / o) * o;
  return [i, l, u];
}
function Qk(t, e) {
  var n = t.getYear(e), r = t.getMonth(e) + 1, a = t.getEndDate(t.getFixedDate("".concat(n, "-").concat(r, "-01"))), o = t.getDate(a), i = r < 10 ? "0".concat(r) : "".concat(r);
  return "".concat(n, "-").concat(i, "-").concat(o);
}
function $r(t) {
  for (var e = Tt(t), n = e.prefixCls, r = e.disabledDate, a = e.onSelect, o = e.picker, i = e.rowNum, l = e.colNum, u = e.prefixColumn, s = e.rowClassName, d = e.baseDate, c = e.getCellClassName, v = e.getCellText, f = e.getCellNode, g = e.getCellDate, p = e.generateConfig, y = e.titleCell, h = e.headerCells, w = Nn(), C = w.onDateMouseenter, x = w.onDateMouseleave, S = w.mode, b = "".concat(n, "-cell"), P = [], T = 0; T < i; T += 1) {
    for (var O = [], D = void 0, V = function(E) {
      var M, N = T * l + E, _ = g(d, N), I = tc({
        cellDate: _,
        mode: S.value,
        disabledDate: r,
        generateConfig: p
      });
      E === 0 && (D = _, u && O.push(u(D)));
      var A = y && y(_);
      O.push(m("td", {
        key: E,
        title: A,
        class: ge(b, k((M = {}, j(M, "".concat(b, "-disabled"), I), j(M, "".concat(b, "-start"), v(_) === 1 || o === "year" && Number(A) % 10 === 0), j(M, "".concat(b, "-end"), A === Qk(p, _) || o === "year" && Number(A) % 10 === 9), M), c(_))),
        onClick: function() {
          I || a(_);
        },
        onMouseenter: function() {
          !I && C && C(_);
        },
        onMouseleave: function() {
          !I && x && x(_);
        }
      }, [f ? f(_) : m("div", {
        class: "".concat(b, "-inner")
      }, [v(_)])]));
    }, K = 0; K < l; K += 1)
      V(K);
    P.push(m("tr", {
      key: T,
      class: s && s(D)
    }, [O]));
  }
  return m("div", {
    class: "".concat(n, "-body")
  }, [m("table", {
    class: "".concat(n, "-content")
  }, [h && m("thead", null, [m("tr", null, [h])]), m("tbody", null, [P])])]);
}
$r.displayName = "PanelBody";
$r.inheritAttrs = !1;
var Ju = 3, lp = 4;
function Es(t) {
  var e = Tt(t), n = hn - 1, r = e.prefixCls, a = e.viewDate, o = e.generateConfig, i = "".concat(r, "-cell"), l = o.getYear(a), u = Math.floor(l / hn) * hn, s = Math.floor(l / Ln) * Ln, d = s + Ln - 1, c = o.setYear(a, s - Math.ceil((Ju * lp * hn - Ln) / 2)), v = function(g) {
    var p, y = o.getYear(g), h = y + n;
    return p = {}, j(p, "".concat(i, "-in-view"), s <= y && h <= d), j(p, "".concat(i, "-selected"), y === u), p;
  };
  return m($r, Y(Y({}, e), {}, {
    rowNum: lp,
    colNum: Ju,
    baseDate: c,
    getCellText: function(g) {
      var p = o.getYear(g);
      return "".concat(p, "-").concat(p + n);
    },
    getCellClassName: v,
    getCellDate: function(g, p) {
      return o.addYear(g, p * hn);
    }
  }), null);
}
Es.displayName = "DecadeBody";
Es.inheritAttrs = !1;
var Bo = /* @__PURE__ */ new Map();
function Jk(t, e) {
  var n;
  function r() {
    bm(t) ? e() : n = tt(function() {
      r();
    });
  }
  return r(), function() {
    tt.cancel(n);
  };
}
function Zu(t, e, n) {
  if (Bo.get(t) && tt.cancel(Bo.get(t)), n <= 0) {
    Bo.set(t, tt(function() {
      t.scrollTop = e;
    }));
    return;
  }
  var r = e - t.scrollTop, a = r / n * 10;
  Bo.set(t, tt(function() {
    t.scrollTop += a, t.scrollTop !== e && Zu(t, e, n - 10);
  }));
}
function ba(t, e) {
  var n = e.onLeftRight, r = e.onCtrlLeftRight, a = e.onUpDown, o = e.onPageUpDown, i = e.onEnter, l = t.which, u = t.ctrlKey, s = t.metaKey;
  switch (l) {
    case xe.LEFT:
      if (u || s) {
        if (r)
          return r(-1), !0;
      } else if (n)
        return n(-1), !0;
      break;
    case xe.RIGHT:
      if (u || s) {
        if (r)
          return r(1), !0;
      } else if (n)
        return n(1), !0;
      break;
    case xe.UP:
      if (a)
        return a(-1), !0;
      break;
    case xe.DOWN:
      if (a)
        return a(1), !0;
      break;
    case xe.PAGE_UP:
      if (o)
        return o(-1), !0;
      break;
    case xe.PAGE_DOWN:
      if (o)
        return o(1), !0;
      break;
    case xe.ENTER:
      if (i)
        return i(), !0;
      break;
  }
  return !1;
}
function Ny(t, e, n, r) {
  var a = t;
  if (!a)
    switch (e) {
      case "time":
        a = r ? "hh:mm:ss a" : "HH:mm:ss";
        break;
      case "week":
        a = "gggg-wo";
        break;
      case "month":
        a = "YYYY-MM";
        break;
      case "quarter":
        a = "YYYY-[Q]Q";
        break;
      case "year":
        a = "YYYY";
        break;
      default:
        a = n ? "YYYY-MM-DD HH:mm:ss" : "YYYY-MM-DD";
    }
  return a;
}
function My(t, e, n) {
  var r = t === "time" ? 8 : 10, a = typeof e == "function" ? e(n.getNow()).length : e.length;
  return Math.max(r, a) + 2;
}
var ka = null, Ko = /* @__PURE__ */ new Set();
function Zk(t) {
  return !ka && typeof window < "u" && window.addEventListener && (ka = function(n) {
    Ie(Ko).forEach(function(r) {
      r(n);
    });
  }, window.addEventListener("mousedown", ka)), Ko.add(t), function() {
    Ko.delete(t), Ko.size === 0 && (window.removeEventListener("mousedown", ka), ka = null);
  };
}
function e2(t) {
  var e, n = t.target;
  return t.composed && n.shadowRoot && ((e = t.composedPath) === null || e === void 0 ? void 0 : e.call(t)[0]) || n;
}
var t2 = function(e) {
  return e === "month" || e === "date" ? "year" : e;
}, n2 = function(e) {
  return e === "date" ? "month" : e;
}, r2 = function(e) {
  return e === "month" || e === "date" ? "quarter" : e;
}, a2 = function(e) {
  return e === "date" ? "week" : e;
}, o2 = {
  year: t2,
  month: n2,
  quarter: r2,
  week: a2,
  time: null,
  date: null
};
function Ay(t, e) {
  return process.env.NODE_ENV === "test" ? !1 : t.some(function(n) {
    return n && n.contains(e);
  });
}
var hn = 10, Ln = hn * 10;
function Ns(t) {
  var e = Tt(t), n = e.prefixCls, r = e.onViewDateChange, a = e.generateConfig, o = e.viewDate, i = e.operationRef, l = e.onSelect, u = e.onPanelChange, s = "".concat(n, "-decade-panel");
  i.value = {
    onKeydown: function(f) {
      return ba(f, {
        onLeftRight: function(p) {
          l(a.addYear(o, p * hn), "key");
        },
        onCtrlLeftRight: function(p) {
          l(a.addYear(o, p * Ln), "key");
        },
        onUpDown: function(p) {
          l(a.addYear(o, p * hn * Ju), "key");
        },
        onEnter: function() {
          u("year", o);
        }
      });
    }
  };
  var d = function(f) {
    var g = a.addYear(o, f * Ln);
    r(g), u(null, g);
  }, c = function(f) {
    l(f, "mouse"), u("year", f);
  };
  return m("div", {
    class: s
  }, [m(_s, Y(Y({}, e), {}, {
    prefixCls: n,
    onPrevDecades: function() {
      d(-1);
    },
    onNextDecades: function() {
      d(1);
    }
  }), null), m(Es, Y(Y({}, e), {}, {
    prefixCls: n,
    onSelect: c
  }), null)]);
}
Ns.displayName = "DecadePanel";
Ns.inheritAttrs = !1;
var ii = 7;
function Lr(t, e) {
  if (!t && !e)
    return !0;
  if (!t || !e)
    return !1;
}
function i2(t, e, n) {
  var r = Lr(e, n);
  if (typeof r == "boolean")
    return r;
  var a = Math.floor(t.getYear(e) / 10), o = Math.floor(t.getYear(n) / 10);
  return a === o;
}
function nl(t, e, n) {
  var r = Lr(e, n);
  return typeof r == "boolean" ? r : t.getYear(e) === t.getYear(n);
}
function ec(t, e) {
  var n = Math.floor(t.getMonth(e) / 3);
  return n + 1;
}
function Dy(t, e, n) {
  var r = Lr(e, n);
  return typeof r == "boolean" ? r : nl(t, e, n) && ec(t, e) === ec(t, n);
}
function Ms(t, e, n) {
  var r = Lr(e, n);
  return typeof r == "boolean" ? r : nl(t, e, n) && t.getMonth(e) === t.getMonth(n);
}
function jn(t, e, n) {
  var r = Lr(e, n);
  return typeof r == "boolean" ? r : t.getYear(e) === t.getYear(n) && t.getMonth(e) === t.getMonth(n) && t.getDate(e) === t.getDate(n);
}
function l2(t, e, n) {
  var r = Lr(e, n);
  return typeof r == "boolean" ? r : t.getHour(e) === t.getHour(n) && t.getMinute(e) === t.getMinute(n) && t.getSecond(e) === t.getSecond(n);
}
function Fy(t, e, n, r) {
  var a = Lr(n, r);
  return typeof a == "boolean" ? a : t.locale.getWeek(e, n) === t.locale.getWeek(e, r);
}
function ia(t, e, n) {
  return jn(t, e, n) && l2(t, e, n);
}
function Ho(t, e, n, r) {
  return !e || !n || !r ? !1 : !jn(t, e, r) && !jn(t, n, r) && t.isAfter(r, e) && t.isAfter(n, r);
}
function u2(t, e, n) {
  var r = e.locale.getWeekFirstDay(t), a = e.setDate(n, 1), o = e.getWeekDay(a), i = e.addDate(a, r - o);
  return e.getMonth(i) === e.getMonth(n) && e.getDate(i) > 1 && (i = e.addDate(i, -7)), i;
}
function ja(t, e, n) {
  var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 1;
  switch (e) {
    case "year":
      return n.addYear(t, r * 10);
    case "quarter":
    case "month":
      return n.addYear(t, r);
    default:
      return n.addMonth(t, r);
  }
}
function $t(t, e) {
  var n = e.generateConfig, r = e.locale, a = e.format;
  return typeof a == "function" ? a(t) : n.locale.format(r.locale, t, a);
}
function Ry(t, e) {
  var n = e.generateConfig, r = e.locale, a = e.formatList;
  return !t || typeof a[0] == "function" ? null : n.locale.parse(r.locale, t, a);
}
function tc(t) {
  var e = t.cellDate, n = t.mode, r = t.disabledDate, a = t.generateConfig;
  if (!r)
    return !1;
  var o = function(g, p, y) {
    for (var h = p; h <= y; ) {
      var w = void 0;
      switch (g) {
        case "date": {
          if (w = a.setDate(e, h), !r(w))
            return !1;
          break;
        }
        case "month": {
          if (w = a.setMonth(e, h), !tc({
            cellDate: w,
            mode: "month",
            generateConfig: a,
            disabledDate: r
          }))
            return !1;
          break;
        }
        case "year": {
          if (w = a.setYear(e, h), !tc({
            cellDate: w,
            mode: "year",
            generateConfig: a,
            disabledDate: r
          }))
            return !1;
          break;
        }
      }
      h += 1;
    }
    return !0;
  };
  switch (n) {
    case "date":
    case "week":
      return r(e);
    case "month": {
      var i = 1, l = a.getDate(a.getEndDate(e));
      return o("date", i, l);
    }
    case "quarter": {
      var u = Math.floor(a.getMonth(e) / 3) * 3, s = u + 2;
      return o("month", u, s);
    }
    case "year":
      return o("month", 0, 11);
    case "decade": {
      var d = a.getYear(e), c = Math.floor(d / hn) * hn, v = c + hn - 1;
      return o("year", c, v);
    }
  }
}
function As(t) {
  var e = Tt(t), n = Nn(), r = n.hideHeader;
  if (r.value)
    return null;
  var a = e.prefixCls, o = e.generateConfig, i = e.locale, l = e.value, u = e.format, s = "".concat(a, "-header");
  return m(ur, {
    prefixCls: s
  }, {
    default: function() {
      return [l ? $t(l, {
        locale: i,
        format: u,
        generateConfig: o
      }) : "\xA0"];
    }
  });
}
As.displayName = "TimeHeader";
As.inheritAttrs = !1;
const zo = pe({
  name: "TimeUnitColumn",
  props: ["prefixCls", "units", "onSelect", "value", "active", "hideDisabledOptions"],
  setup: function(e) {
    var n = Nn(), r = n.open, a = G(null), o = G(/* @__PURE__ */ new Map()), i = G();
    return Ce(function() {
      return e.value;
    }, function() {
      var l = o.value.get(e.value);
      l && r.value !== !1 && Zu(a.value, l.offsetTop, 120);
    }), ht(function() {
      var l;
      (l = i.value) === null || l === void 0 || l.call(i);
    }), Ce(r, function() {
      var l;
      (l = i.value) === null || l === void 0 || l.call(i), vt(function() {
        if (r.value) {
          var u = o.value.get(e.value);
          u && (i.value = Jk(u, function() {
            Zu(a.value, u.offsetTop, 0);
          }));
        }
      });
    }, {
      immediate: !0,
      flush: "post"
    }), function() {
      var l = e.prefixCls, u = e.units, s = e.onSelect, d = e.value, c = e.active, v = e.hideDisabledOptions, f = "".concat(l, "-cell");
      return m("ul", {
        class: ge("".concat(l, "-column"), j({}, "".concat(l, "-column-active"), c)),
        ref: a,
        style: {
          position: "relative"
        }
      }, [u.map(function(g) {
        var p;
        return v && g.disabled ? null : m("li", {
          key: g.value,
          ref: function(h) {
            o.value.set(g.value, h);
          },
          class: ge(f, (p = {}, j(p, "".concat(f, "-disabled"), g.disabled), j(p, "".concat(f, "-selected"), d === g.value), p)),
          onClick: function() {
            g.disabled || s(g.value);
          }
        }, [m("div", {
          class: "".concat(f, "-inner")
        }, [g.label])]);
      })]);
    };
  }
});
function $y(t, e) {
  for (var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "0", r = String(t); r.length < e; )
    r = "".concat(n).concat(t);
  return r;
}
var c2 = function() {
  for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
    n[r] = arguments[r];
  return n;
};
function Ly(t) {
  return t == null ? [] : Array.isArray(t) ? t : [t];
}
function jy(t) {
  var e = {};
  return Object.keys(t).forEach(function(n) {
    (n.substr(0, 5) === "data-" || n.substr(0, 5) === "aria-" || n === "role" || n === "name") && n.substr(0, 7) !== "data-__" && (e[n] = t[n]);
  }), e;
}
function Je(t, e) {
  return t ? t[e] : null;
}
function on(t, e, n) {
  var r = [Je(t, 0), Je(t, 1)];
  return r[n] = typeof e == "function" ? e(r[n]) : e, !r[0] && !r[1] ? null : r;
}
function Ul(t, e, n, r) {
  for (var a = [], o = t; o <= e; o += n)
    a.push({
      label: $y(o, 2),
      value: o,
      disabled: (r || []).includes(o)
    });
  return a;
}
var s2 = pe({
  name: "TimeBody",
  inheritAttrs: !1,
  props: ["generateConfig", "prefixCls", "operationRef", "activeColumnIndex", "value", "showHour", "showMinute", "showSecond", "use12Hours", "hourStep", "minuteStep", "secondStep", "disabledHours", "disabledMinutes", "disabledSeconds", "disabledTime", "hideDisabledOptions", "onSelect"],
  setup: function(e) {
    var n = F(function() {
      return e.value ? e.generateConfig.getHour(e.value) : -1;
    }), r = F(function() {
      return e.use12Hours ? n.value >= 12 : !1;
    }), a = F(function() {
      return e.use12Hours ? n.value % 12 : n.value;
    }), o = F(function() {
      return e.value ? e.generateConfig.getMinute(e.value) : -1;
    }), i = F(function() {
      return e.value ? e.generateConfig.getSecond(e.value) : -1;
    }), l = G(e.generateConfig.getNow()), u = G(), s = G(), d = G();
    Kh(function() {
      l.value = e.generateConfig.getNow();
    }), Ue(function() {
      if (e.disabledTime) {
        var h = e.disabledTime(l), w = [h.disabledHours, h.disabledMinutes, h.disabledSeconds];
        u.value = w[0], s.value = w[1], d.value = w[2];
      } else {
        var C = [e.disabledHours, e.disabledMinutes, e.disabledSeconds];
        u.value = C[0], s.value = C[1], d.value = C[2];
      }
    });
    var c = function(w, C, x, S) {
      var b = e.value || e.generateConfig.getNow(), P = Math.max(0, C), T = Math.max(0, x), O = Math.max(0, S);
      return b = Ey(e.generateConfig, b, !e.use12Hours || !w ? P : P + 12, T, O), b;
    }, v = F(function() {
      var h;
      return Ul(0, 23, (h = e.hourStep) !== null && h !== void 0 ? h : 1, u.value && u.value());
    }), f = F(function() {
      if (!e.use12Hours)
        return [!1, !1];
      var h = [!0, !0];
      return v.value.forEach(function(w) {
        var C = w.disabled, x = w.value;
        C || (x >= 12 ? h[1] = !1 : h[0] = !1);
      }), h;
    }), g = F(function() {
      return e.use12Hours ? v.value.filter(r.value ? function(h) {
        return h.value >= 12;
      } : function(h) {
        return h.value < 12;
      }).map(function(h) {
        var w = h.value % 12, C = w === 0 ? "12" : $y(w, 2);
        return k(k({}, h), {
          label: C,
          value: w
        });
      }) : v.value;
    }), p = F(function() {
      var h;
      return Ul(0, 59, (h = e.minuteStep) !== null && h !== void 0 ? h : 1, s.value && s.value(n.value));
    }), y = F(function() {
      var h;
      return Ul(0, 59, (h = e.secondStep) !== null && h !== void 0 ? h : 1, d.value && d.value(n.value, o));
    });
    return function() {
      var h = e.prefixCls, w = e.operationRef, C = e.activeColumnIndex, x = e.showHour, S = e.showMinute, b = e.showSecond, P = e.use12Hours, T = e.hideDisabledOptions, O = e.onSelect, D = [], V = "".concat(h, "-content"), K = "".concat(h, "-time-panel");
      w.value = {
        onUpDown: function(N) {
          var _ = D[C];
          if (_)
            for (var I = _.units.findIndex(function(U) {
              return U.value === _.value;
            }), A = _.units.length, B = 1; B < A; B += 1) {
              var W = _.units[(I + N * B + A) % A];
              if (W.disabled !== !0) {
                _.onSelect(W.value);
                break;
              }
            }
        }
      };
      function R(M, N, _, I, A) {
        M !== !1 && D.push({
          node: Ct(N, {
            prefixCls: K,
            value: _,
            active: C === D.length,
            onSelect: A,
            units: I,
            hideDisabledOptions: T
          }),
          onSelect: A,
          value: _,
          units: I
        });
      }
      R(x, m(zo, {
        key: "hour"
      }, null), a.value, g.value, function(M) {
        O(c(r.value, M, o.value, i.value), "mouse");
      }), R(S, m(zo, {
        key: "minute"
      }, null), o.value, p.value, function(M) {
        O(c(r.value, a.value, M, i.value), "mouse");
      }), R(b, m(zo, {
        key: "second"
      }, null), i.value, y.value, function(M) {
        O(c(r.value, a.value, o.value, M), "mouse");
      });
      var E = -1;
      return typeof r.value == "boolean" && (E = r.value ? 1 : 0), R(P === !0, m(zo, {
        key: "12hours"
      }, null), E, [{
        label: "AM",
        value: 0,
        disabled: f.value[0]
      }, {
        label: "PM",
        value: 1,
        disabled: f.value[1]
      }], function(M) {
        O(c(!!M, a.value, o.value, i.value), "mouse");
      }), m("div", {
        class: V
      }, [D.map(function(M) {
        var N = M.node;
        return N;
      })]);
    };
  }
});
const d2 = s2;
var f2 = function(e) {
  return e.filter(function(n) {
    return n !== !1;
  }).length;
};
function rl(t) {
  var e = Tt(t), n = e.generateConfig, r = e.format, a = r === void 0 ? "HH:mm:ss" : r, o = e.prefixCls, i = e.active, l = e.operationRef, u = e.showHour, s = e.showMinute, d = e.showSecond, c = e.use12Hours, v = c === void 0 ? !1 : c, f = e.onSelect, g = e.value, p = "".concat(o, "-time-panel"), y = G(), h = G(-1), w = f2([u, s, d, v]);
  return l.value = {
    onKeydown: function(x) {
      return ba(x, {
        onLeftRight: function(b) {
          h.value = (h.value + b + w) % w;
        },
        onUpDown: function(b) {
          h.value === -1 ? h.value = 0 : y.value && y.value.onUpDown(b);
        },
        onEnter: function() {
          f(g || n.getNow(), "key"), h.value = -1;
        }
      });
    },
    onBlur: function() {
      h.value = -1;
    }
  }, m("div", {
    class: ge(p, j({}, "".concat(p, "-active"), i))
  }, [m(As, Y(Y({}, e), {}, {
    format: a,
    prefixCls: o
  }), null), m(d2, Y(Y({}, e), {}, {
    prefixCls: o,
    activeColumnIndex: h.value,
    operationRef: y
  }), null)]);
}
rl.displayName = "TimePanel";
rl.inheritAttrs = !1;
function al(t) {
  var e = t.cellPrefixCls, n = t.generateConfig, r = t.rangedValue, a = t.hoverRangedValue, o = t.isInView, i = t.isSameCell, l = t.offsetCell, u = t.today, s = t.value;
  function d(c) {
    var v, f = l(c, -1), g = l(c, 1), p = Je(r, 0), y = Je(r, 1), h = Je(a, 0), w = Je(a, 1), C = Ho(n, h, w, c);
    function x(D) {
      return i(p, D);
    }
    function S(D) {
      return i(y, D);
    }
    var b = i(h, c), P = i(w, c), T = (C || P) && (!o(f) || S(f)), O = (C || b) && (!o(g) || x(g));
    return v = {}, j(v, "".concat(e, "-in-view"), o(c)), j(v, "".concat(e, "-in-range"), Ho(n, p, y, c)), j(v, "".concat(e, "-range-start"), x(c)), j(v, "".concat(e, "-range-end"), S(c)), j(v, "".concat(e, "-range-start-single"), x(c) && !y), j(v, "".concat(e, "-range-end-single"), S(c) && !p), j(v, "".concat(e, "-range-start-near-hover"), x(c) && (i(f, h) || Ho(n, h, w, f))), j(v, "".concat(e, "-range-end-near-hover"), S(c) && (i(g, w) || Ho(n, h, w, g))), j(v, "".concat(e, "-range-hover"), C), j(v, "".concat(e, "-range-hover-start"), b), j(v, "".concat(e, "-range-hover-end"), P), j(v, "".concat(e, "-range-hover-edge-start"), T), j(v, "".concat(e, "-range-hover-edge-end"), O), j(v, "".concat(e, "-range-hover-edge-start-near-range"), T && i(f, y)), j(v, "".concat(e, "-range-hover-edge-end-near-range"), O && i(g, p)), j(v, "".concat(e, "-today"), i(u, c)), j(v, "".concat(e, "-selected"), i(s, c)), v;
  }
  return d;
}
var Vy = Symbol("RangeContextProps"), v2 = function(e) {
  ct(Vy, e);
}, go = function() {
  return ut(Vy, {
    rangedValue: G(),
    hoverRangedValue: G(),
    inRange: G(),
    panelPosition: G()
  });
}, p2 = pe({
  name: "PanelContextProvider",
  inheritAttrs: !1,
  props: {
    value: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
  setup: function(e, n) {
    var r = n.slots, a = {
      rangedValue: G(e.value.rangedValue),
      hoverRangedValue: G(e.value.hoverRangedValue),
      inRange: G(e.value.inRange),
      panelPosition: G(e.value.panelPosition)
    };
    return v2(a), Ce(function() {
      return e.value;
    }, function() {
      Object.keys(e.value).forEach(function(o) {
        a[o] && (a[o].value = e.value[o]);
      });
    }), function() {
      var o;
      return (o = r.default) === null || o === void 0 ? void 0 : o.call(r);
    };
  }
});
function ol(t) {
  var e = Tt(t), n = e.prefixCls, r = e.generateConfig, a = e.prefixColumn, o = e.locale, i = e.rowCount, l = e.viewDate, u = e.value, s = e.dateRender, d = go(), c = d.rangedValue, v = d.hoverRangedValue, f = u2(o.locale, r, l), g = "".concat(n, "-cell"), p = r.locale.getWeekFirstDay(o.locale), y = r.getNow(), h = [], w = o.shortWeekDays || (r.locale.getShortWeekDays ? r.locale.getShortWeekDays(o.locale) : []);
  a && h.push(m("th", {
    key: "empty",
    "aria-label": "empty cell"
  }, null));
  for (var C = 0; C < ii; C += 1)
    h.push(m("th", {
      key: C
    }, [w[(C + p) % ii]]));
  var x = al({
    cellPrefixCls: g,
    today: y,
    value: u,
    generateConfig: r,
    rangedValue: a ? null : c.value,
    hoverRangedValue: a ? null : v.value,
    isSameCell: function(P, T) {
      return jn(r, P, T);
    },
    isInView: function(P) {
      return Ms(r, P, l);
    },
    offsetCell: function(P, T) {
      return r.addDate(P, T);
    }
  }), S = s ? function(b) {
    return s({
      current: b,
      today: y
    });
  } : void 0;
  return m($r, Y(Y({}, e), {}, {
    rowNum: i,
    colNum: ii,
    baseDate: f,
    getCellNode: S,
    getCellText: r.getDate,
    getCellClassName: x,
    getCellDate: r.addDate,
    titleCell: function(P) {
      return $t(P, {
        locale: o,
        format: "YYYY-MM-DD",
        generateConfig: r
      });
    },
    headerCells: h
  }), null);
}
ol.displayName = "DateBody";
ol.inheritAttrs = !1;
ol.props = [
  "prefixCls",
  "generateConfig",
  "value?",
  "viewDate",
  "locale",
  "rowCount",
  "onSelect",
  "dateRender?",
  "disabledDate?",
  "prefixColumn?",
  "rowClassName?"
];
function Ds(t) {
  var e = Tt(t), n = e.prefixCls, r = e.generateConfig, a = e.locale, o = e.viewDate, i = e.onNextMonth, l = e.onPrevMonth, u = e.onNextYear, s = e.onPrevYear, d = e.onYearClick, c = e.onMonthClick, v = Nn(), f = v.hideHeader;
  if (f.value)
    return null;
  var g = "".concat(n, "-header"), p = a.shortMonths || (r.locale.getShortMonths ? r.locale.getShortMonths(a.locale) : []), y = r.getMonth(o), h = m("button", {
    type: "button",
    key: "year",
    onClick: d,
    tabindex: -1,
    class: "".concat(n, "-year-btn")
  }, [$t(o, {
    locale: a,
    format: a.yearFormat,
    generateConfig: r
  })]), w = m("button", {
    type: "button",
    key: "month",
    onClick: c,
    tabindex: -1,
    class: "".concat(n, "-month-btn")
  }, [a.monthFormat ? $t(o, {
    locale: a,
    format: a.monthFormat,
    generateConfig: r
  }) : p[y]]), C = a.monthBeforeYear ? [w, h] : [h, w];
  return m(ur, Y(Y({}, e), {}, {
    prefixCls: g,
    onSuperPrev: s,
    onPrev: l,
    onNext: i,
    onSuperNext: u
  }), {
    default: function() {
      return [C];
    }
  });
}
Ds.displayName = "DateHeader";
Ds.inheritAttrs = !1;
var h2 = 6;
function mo(t) {
  var e = Tt(t), n = e.prefixCls, r = e.panelName, a = r === void 0 ? "date" : r, o = e.keyboardConfig, i = e.active, l = e.operationRef, u = e.generateConfig, s = e.value, d = e.viewDate, c = e.onViewDateChange, v = e.onPanelChange, f = e.onSelect, g = "".concat(n, "-").concat(a, "-panel");
  l.value = {
    onKeydown: function(w) {
      return ba(w, k({
        onLeftRight: function(x) {
          f(u.addDate(s || d, x), "key");
        },
        onCtrlLeftRight: function(x) {
          f(u.addYear(s || d, x), "key");
        },
        onUpDown: function(x) {
          f(u.addDate(s || d, x * ii), "key");
        },
        onPageUpDown: function(x) {
          f(u.addMonth(s || d, x), "key");
        }
      }, o));
    }
  };
  var p = function(w) {
    var C = u.addYear(d, w);
    c(C), v(null, C);
  }, y = function(w) {
    var C = u.addMonth(d, w);
    c(C), v(null, C);
  };
  return m("div", {
    class: ge(g, j({}, "".concat(g, "-active"), i))
  }, [m(Ds, Y(Y({}, e), {}, {
    prefixCls: n,
    value: s,
    viewDate: d,
    onPrevYear: function() {
      p(-1);
    },
    onNextYear: function() {
      p(1);
    },
    onPrevMonth: function() {
      y(-1);
    },
    onNextMonth: function() {
      y(1);
    },
    onMonthClick: function() {
      v("month", d);
    },
    onYearClick: function() {
      v("year", d);
    }
  }), null), m(ol, Y(Y({}, e), {}, {
    onSelect: function(w) {
      return f(w, "mouse");
    },
    prefixCls: n,
    value: s,
    viewDate: d,
    rowCount: h2
  }), null)]);
}
mo.displayName = "DatePanel";
mo.inheritAttrs = !1;
var up = c2("date", "time");
function Fs(t) {
  var e = Tt(t), n = e.prefixCls, r = e.operationRef, a = e.generateConfig, o = e.value, i = e.defaultValue, l = e.disabledTime, u = e.showTime, s = e.onSelect, d = "".concat(n, "-datetime-panel"), c = G(null), v = G({}), f = G({}), g = Le(u) === "object" ? k({}, u) : {};
  function p(C) {
    var x = up.indexOf(c.value) + C, S = up[x] || null;
    return S;
  }
  var y = function(x) {
    f.value.onBlur && f.value.onBlur(x), c.value = null;
  };
  r.value = {
    onKeydown: function(x) {
      if (x.which === xe.TAB) {
        var S = p(x.shiftKey ? -1 : 1);
        return c.value = S, S && x.preventDefault(), !0;
      }
      if (c.value) {
        var b = c.value === "date" ? v : f;
        return b.value && b.value.onKeydown && b.value.onKeydown(x), !0;
      }
      return [xe.LEFT, xe.RIGHT, xe.UP, xe.DOWN].includes(x.which) ? (c.value = "date", !0) : !1;
    },
    onBlur: y,
    onClose: y
  };
  var h = function(x, S) {
    var b = x;
    S === "date" && !o && g.defaultValue ? (b = a.setHour(b, a.getHour(g.defaultValue)), b = a.setMinute(b, a.getMinute(g.defaultValue)), b = a.setSecond(b, a.getSecond(g.defaultValue))) : S === "time" && !o && i && (b = a.setYear(b, a.getYear(i)), b = a.setMonth(b, a.getMonth(i)), b = a.setDate(b, a.getDate(i))), s && s(b, "mouse");
  }, w = l ? l(o || null) : {};
  return m("div", {
    class: ge(d, j({}, "".concat(d, "-active"), c.value))
  }, [m(mo, Y(Y({}, e), {}, {
    operationRef: v,
    active: c.value === "date",
    onSelect: function(x) {
      h(oi(a, x, !o && Le(u) === "object" ? u.defaultValue : null), "date");
    }
  }), null), m(rl, Y(Y(Y(Y({}, e), {}, {
    format: void 0
  }, g), w), {}, {
    disabledTime: null,
    defaultValue: void 0,
    operationRef: f,
    active: c.value === "time",
    onSelect: function(x) {
      h(x, "time");
    }
  }), null)]);
}
Fs.displayName = "DatetimePanel";
Fs.inheritAttrs = !1;
function Rs(t) {
  var e = Tt(t), n = e.prefixCls, r = e.generateConfig, a = e.locale, o = e.value, i = "".concat(n, "-cell"), l = function(c) {
    return m("td", {
      key: "week",
      class: ge(i, "".concat(i, "-week"))
    }, [r.locale.getWeek(a.locale, c)]);
  }, u = "".concat(n, "-week-panel-row"), s = function(c) {
    return ge(u, j({}, "".concat(u, "-selected"), Fy(r, a.locale, o, c)));
  };
  return m(mo, Y(Y({}, e), {}, {
    panelName: "week",
    prefixColumn: l,
    rowClassName: s,
    keyboardConfig: {
      onLeftRight: null
    }
  }), null);
}
Rs.displayName = "WeekPanel";
Rs.inheritAttrs = !1;
function $s(t) {
  var e = Tt(t), n = e.prefixCls, r = e.generateConfig, a = e.locale, o = e.viewDate, i = e.onNextYear, l = e.onPrevYear, u = e.onYearClick, s = Nn(), d = s.hideHeader;
  if (d.value)
    return null;
  var c = "".concat(n, "-header");
  return m(ur, Y(Y({}, e), {}, {
    prefixCls: c,
    onSuperPrev: l,
    onSuperNext: i
  }), {
    default: function() {
      return [m("button", {
        type: "button",
        onClick: u,
        class: "".concat(n, "-year-btn")
      }, [$t(o, {
        locale: a,
        format: a.yearFormat,
        generateConfig: r
      })])];
    }
  });
}
$s.displayName = "MonthHeader";
$s.inheritAttrs = !1;
var By = 3, g2 = 4;
function Ls(t) {
  var e = Tt(t), n = e.prefixCls, r = e.locale, a = e.value, o = e.viewDate, i = e.generateConfig, l = e.monthCellRender, u = go(), s = u.rangedValue, d = u.hoverRangedValue, c = "".concat(n, "-cell"), v = al({
    cellPrefixCls: c,
    value: a,
    generateConfig: i,
    rangedValue: s.value,
    hoverRangedValue: d.value,
    isSameCell: function(h, w) {
      return Ms(i, h, w);
    },
    isInView: function() {
      return !0;
    },
    offsetCell: function(h, w) {
      return i.addMonth(h, w);
    }
  }), f = r.shortMonths || (i.locale.getShortMonths ? i.locale.getShortMonths(r.locale) : []), g = i.setMonth(o, 0), p = l ? function(y) {
    return l({
      current: y,
      locale: r
    });
  } : void 0;
  return m($r, Y(Y({}, e), {}, {
    rowNum: g2,
    colNum: By,
    baseDate: g,
    getCellNode: p,
    getCellText: function(h) {
      return r.monthFormat ? $t(h, {
        locale: r,
        format: r.monthFormat,
        generateConfig: i
      }) : f[i.getMonth(h)];
    },
    getCellClassName: v,
    getCellDate: i.addMonth,
    titleCell: function(h) {
      return $t(h, {
        locale: r,
        format: "YYYY-MM",
        generateConfig: i
      });
    }
  }), null);
}
Ls.displayName = "MonthBody";
Ls.inheritAttrs = !1;
function js(t) {
  var e = Tt(t), n = e.prefixCls, r = e.operationRef, a = e.onViewDateChange, o = e.generateConfig, i = e.value, l = e.viewDate, u = e.onPanelChange, s = e.onSelect, d = "".concat(n, "-month-panel");
  r.value = {
    onKeydown: function(f) {
      return ba(f, {
        onLeftRight: function(p) {
          s(o.addMonth(i || l, p), "key");
        },
        onCtrlLeftRight: function(p) {
          s(o.addYear(i || l, p), "key");
        },
        onUpDown: function(p) {
          s(o.addMonth(i || l, p * By), "key");
        },
        onEnter: function() {
          u("date", i || l);
        }
      });
    }
  };
  var c = function(f) {
    var g = o.addYear(l, f);
    a(g), u(null, g);
  };
  return m("div", {
    class: d
  }, [m($s, Y(Y({}, e), {}, {
    prefixCls: n,
    onPrevYear: function() {
      c(-1);
    },
    onNextYear: function() {
      c(1);
    },
    onYearClick: function() {
      u("year", l);
    }
  }), null), m(Ls, Y(Y({}, e), {}, {
    prefixCls: n,
    onSelect: function(f) {
      s(f, "mouse"), u("date", f);
    }
  }), null)]);
}
js.displayName = "MonthPanel";
js.inheritAttrs = !1;
function Vs(t) {
  var e = Tt(t), n = e.prefixCls, r = e.generateConfig, a = e.locale, o = e.viewDate, i = e.onNextYear, l = e.onPrevYear, u = e.onYearClick, s = Nn(), d = s.hideHeader;
  if (d.value)
    return null;
  var c = "".concat(n, "-header");
  return m(ur, Y(Y({}, e), {}, {
    prefixCls: c,
    onSuperPrev: l,
    onSuperNext: i
  }), {
    default: function() {
      return [m("button", {
        type: "button",
        onClick: u,
        class: "".concat(n, "-year-btn")
      }, [$t(o, {
        locale: a,
        format: a.yearFormat,
        generateConfig: r
      })])];
    }
  });
}
Vs.displayName = "QuarterHeader";
Vs.inheritAttrs = !1;
var m2 = 4, y2 = 1;
function Bs(t) {
  var e = Tt(t), n = e.prefixCls, r = e.locale, a = e.value, o = e.viewDate, i = e.generateConfig, l = go(), u = l.rangedValue, s = l.hoverRangedValue, d = "".concat(n, "-cell"), c = al({
    cellPrefixCls: d,
    value: a,
    generateConfig: i,
    rangedValue: u.value,
    hoverRangedValue: s.value,
    isSameCell: function(g, p) {
      return Dy(i, g, p);
    },
    isInView: function() {
      return !0;
    },
    offsetCell: function(g, p) {
      return i.addMonth(g, p * 3);
    }
  }), v = i.setDate(i.setMonth(o, 0), 1);
  return m($r, Y(Y({}, e), {}, {
    rowNum: y2,
    colNum: m2,
    baseDate: v,
    getCellText: function(g) {
      return $t(g, {
        locale: r,
        format: r.quarterFormat || "[Q]Q",
        generateConfig: i
      });
    },
    getCellClassName: c,
    getCellDate: function(g, p) {
      return i.addMonth(g, p * 3);
    },
    titleCell: function(g) {
      return $t(g, {
        locale: r,
        format: "YYYY-[Q]Q",
        generateConfig: i
      });
    }
  }), null);
}
Bs.displayName = "QuarterBody";
Bs.inheritAttrs = !1;
function Ks(t) {
  var e = Tt(t), n = e.prefixCls, r = e.operationRef, a = e.onViewDateChange, o = e.generateConfig, i = e.value, l = e.viewDate, u = e.onPanelChange, s = e.onSelect, d = "".concat(n, "-quarter-panel");
  r.value = {
    onKeydown: function(f) {
      return ba(f, {
        onLeftRight: function(p) {
          s(o.addMonth(i || l, p * 3), "key");
        },
        onCtrlLeftRight: function(p) {
          s(o.addYear(i || l, p), "key");
        },
        onUpDown: function(p) {
          s(o.addYear(i || l, p), "key");
        }
      });
    }
  };
  var c = function(f) {
    var g = o.addYear(l, f);
    a(g), u(null, g);
  };
  return m("div", {
    class: d
  }, [m(Vs, Y(Y({}, e), {}, {
    prefixCls: n,
    onPrevYear: function() {
      c(-1);
    },
    onNextYear: function() {
      c(1);
    },
    onYearClick: function() {
      u("year", l);
    }
  }), null), m(Bs, Y(Y({}, e), {}, {
    prefixCls: n,
    onSelect: function(f) {
      s(f, "mouse");
    }
  }), null)]);
}
Ks.displayName = "QuarterPanel";
Ks.inheritAttrs = !1;
function Hs(t) {
  var e = Tt(t), n = e.prefixCls, r = e.generateConfig, a = e.viewDate, o = e.onPrevDecade, i = e.onNextDecade, l = e.onDecadeClick, u = Nn(), s = u.hideHeader;
  if (s.value)
    return null;
  var d = "".concat(n, "-header"), c = r.getYear(a), v = Math.floor(c / er) * er, f = v + er - 1;
  return m(ur, Y(Y({}, e), {}, {
    prefixCls: d,
    onSuperPrev: o,
    onSuperNext: i
  }), {
    default: function() {
      return [m("button", {
        type: "button",
        onClick: l,
        class: "".concat(n, "-decade-btn")
      }, [v, or("-"), f])];
    }
  });
}
Hs.displayName = "YearHeader";
Hs.inheritAttrs = !1;
var nc = 3, cp = 4;
function zs(t) {
  var e = Tt(t), n = e.prefixCls, r = e.value, a = e.viewDate, o = e.locale, i = e.generateConfig, l = go(), u = l.rangedValue, s = l.hoverRangedValue, d = "".concat(n, "-cell"), c = i.getYear(a), v = Math.floor(c / er) * er, f = v + er - 1, g = i.setYear(a, v - Math.ceil((nc * cp - er) / 2)), p = function(w) {
    var C = i.getYear(w);
    return v <= C && C <= f;
  }, y = al({
    cellPrefixCls: d,
    value: r,
    generateConfig: i,
    rangedValue: u.value,
    hoverRangedValue: s.value,
    isSameCell: function(w, C) {
      return nl(i, w, C);
    },
    isInView: p,
    offsetCell: function(w, C) {
      return i.addYear(w, C);
    }
  });
  return m($r, Y(Y({}, e), {}, {
    rowNum: cp,
    colNum: nc,
    baseDate: g,
    getCellText: i.getYear,
    getCellClassName: y,
    getCellDate: i.addYear,
    titleCell: function(w) {
      return $t(w, {
        locale: o,
        format: "YYYY",
        generateConfig: i
      });
    }
  }), null);
}
zs.displayName = "YearBody";
zs.inheritAttrs = !1;
var er = 10;
function Ws(t) {
  var e = Tt(t), n = e.prefixCls, r = e.operationRef, a = e.onViewDateChange, o = e.generateConfig, i = e.value, l = e.viewDate, u = e.sourceMode, s = e.onSelect, d = e.onPanelChange, c = "".concat(n, "-year-panel");
  r.value = {
    onKeydown: function(g) {
      return ba(g, {
        onLeftRight: function(y) {
          s(o.addYear(i || l, y), "key");
        },
        onCtrlLeftRight: function(y) {
          s(o.addYear(i || l, y * er), "key");
        },
        onUpDown: function(y) {
          s(o.addYear(i || l, y * nc), "key");
        },
        onEnter: function() {
          d(u === "date" ? "date" : "month", i || l);
        }
      });
    }
  };
  var v = function(g) {
    var p = o.addYear(l, g * 10);
    a(p), d(null, p);
  };
  return m("div", {
    class: c
  }, [m(Hs, Y(Y({}, e), {}, {
    prefixCls: n,
    onPrevDecade: function() {
      v(-1);
    },
    onNextDecade: function() {
      v(1);
    },
    onDecadeClick: function() {
      d("decade", l);
    }
  }), null), m(zs, Y(Y({}, e), {}, {
    prefixCls: n,
    onSelect: function(g) {
      d(u === "date" ? "date" : "month", g), s(g, "mouse");
    }
  }), null)]);
}
Ws.displayName = "YearPanel";
Ws.inheritAttrs = !1;
function Ky(t, e, n) {
  return n ? m("div", {
    class: "".concat(t, "-footer-extra")
  }, [n(e)]) : null;
}
function Hy(t) {
  var e = t.prefixCls, n = t.rangeList, r = n === void 0 ? [] : n, a = t.components, o = a === void 0 ? {} : a, i = t.needConfirmButton, l = t.onNow, u = t.onOk, s = t.okDisabled, d = t.showNow, c = t.locale, v, f;
  if (r.length) {
    var g = o.rangeItem || "span";
    v = m(ft, null, [r.map(function(y) {
      var h = y.label, w = y.onClick, C = y.onMouseenter, x = y.onMouseleave;
      return m("li", {
        key: h,
        class: "".concat(e, "-preset")
      }, [m(g, {
        onClick: w,
        onMouseenter: C,
        onMouseleave: x
      }, {
        default: function() {
          return [h];
        }
      })]);
    })]);
  }
  if (i) {
    var p = o.button || "button";
    l && !v && d !== !1 && (v = m("li", {
      class: "".concat(e, "-now")
    }, [m("a", {
      class: "".concat(e, "-now-btn"),
      onClick: l
    }, [c.now])])), f = i && m("li", {
      class: "".concat(e, "-ok")
    }, [m(p, {
      disabled: s,
      onClick: u
    }, {
      default: function() {
        return [c.ok];
      }
    })]);
  }
  return !v && !f ? null : m("ul", {
    class: "".concat(e, "-ranges")
  }, [v, f]);
}
function b2() {
  return pe({
    name: "PickerPanel",
    inheritAttrs: !1,
    props: {
      prefixCls: String,
      locale: Object,
      generateConfig: Object,
      value: Object,
      defaultValue: Object,
      pickerValue: Object,
      defaultPickerValue: Object,
      disabledDate: Function,
      mode: String,
      picker: {
        type: String,
        default: "date"
      },
      tabindex: {
        type: [Number, String],
        default: 0
      },
      showNow: {
        type: Boolean,
        default: void 0
      },
      showTime: [Boolean, Object],
      showToday: Boolean,
      renderExtraFooter: Function,
      dateRender: Function,
      hideHeader: {
        type: Boolean,
        default: void 0
      },
      onSelect: Function,
      onChange: Function,
      onPanelChange: Function,
      onMousedown: Function,
      onPickerValueChange: Function,
      onOk: Function,
      components: Object,
      direction: String,
      hourStep: {
        type: Number,
        default: 1
      },
      minuteStep: {
        type: Number,
        default: 1
      },
      secondStep: {
        type: Number,
        default: 1
      }
    },
    setup: function(e, n) {
      var r = n.attrs, a = F(function() {
        return e.picker === "date" && !!e.showTime || e.picker === "time";
      }), o = F(function() {
        return 24 % e.hourStep === 0;
      }), i = F(function() {
        return 60 % e.minuteStep === 0;
      }), l = F(function() {
        return 60 % e.secondStep === 0;
      });
      process.env.NODE_ENV !== "production" && Ue(function() {
        var q = e.generateConfig, H = e.value, J = e.hourStep, Z = J === void 0 ? 1 : J, ae = e.minuteStep, ue = ae === void 0 ? 1 : ae, ne = e.secondStep, X = ne === void 0 ? 1 : ne;
        Ze(!H || q.isValidate(H), "Invalidate date pass to `value`."), Ze(!H || q.isValidate(H), "Invalidate date pass to `defaultValue`."), Ze(o.value, "`hourStep` ".concat(Z, " is invalid. It should be a factor of 24.")), Ze(i.value, "`minuteStep` ".concat(ue, " is invalid. It should be a factor of 60.")), Ze(l.value, "`secondStep` ".concat(X, " is invalid. It should be a factor of 60."));
      });
      var u = Nn(), s = u.operationRef, d = u.panelRef, c = u.onSelect, v = u.hideRanges, f = u.defaultOpenValue, g = go(), p = g.inRange, y = g.panelPosition, h = g.rangedValue, w = g.hoverRangedValue, C = G({}), x = Rt(null, {
        value: ze(e, "value"),
        defaultValue: e.defaultValue,
        postState: function(H) {
          return !H && (f == null ? void 0 : f.value) && e.picker === "time" ? f.value : H;
        }
      }), S = De(x, 2), b = S[0], P = S[1], T = Rt(null, {
        value: ze(e, "pickerValue"),
        defaultValue: e.defaultPickerValue || b.value,
        postState: function(H) {
          var J = e.generateConfig, Z = e.showTime, ae = e.defaultValue, ue = J.getNow();
          return H ? !b.value && e.showTime ? Le(Z) === "object" ? oi(J, Array.isArray(H) ? H[0] : H, Z.defaultValue || ue) : ae ? oi(J, Array.isArray(H) ? H[0] : H, ae) : oi(J, Array.isArray(H) ? H[0] : H, ue) : H : ue;
        }
      }), O = De(T, 2), D = O[0], V = O[1], K = function(H) {
        V(H), e.onPickerValueChange && e.onPickerValueChange(H);
      }, R = function(H) {
        var J = o2[e.picker];
        return J ? J(H) : H;
      }, E = Rt(function() {
        return e.picker === "time" ? "time" : R("date");
      }, {
        value: ze(e, "mode")
      }), M = De(E, 2), N = M[0], _ = M[1];
      Ce(function() {
        return e.picker;
      }, function() {
        _(e.picker);
      });
      var I = G(N.value), A = function(H) {
        I.value = H;
      }, B = function(H, J) {
        var Z = e.onPanelChange, ae = e.generateConfig, ue = R(H || N.value);
        A(N.value), _(ue), Z && (N.value !== ue || ia(ae, D.value, D.value)) && Z(J, ue);
      }, W = function(H, J) {
        var Z = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, ae = e.picker, ue = e.generateConfig, ne = e.onSelect, X = e.onChange, te = e.disabledDate;
        (N.value === ae || Z) && (P(H), ne && ne(H), c && c(H, J), X && !ia(ue, H, b.value) && !(te != null && te(H)) && X(H));
      }, U = function(H) {
        return C.value && C.value.onKeydown ? ([xe.LEFT, xe.RIGHT, xe.UP, xe.DOWN, xe.PAGE_UP, xe.PAGE_DOWN, xe.ENTER].includes(H.which) && H.preventDefault(), C.value.onKeydown(H)) : (Ze(!1, "Panel not correct handle keyDown event. Please help to fire issue about this."), !1);
      }, z = function(H) {
        C.value && C.value.onBlur && C.value.onBlur(H);
      }, L = function() {
        var H = e.generateConfig, J = e.hourStep, Z = e.minuteStep, ae = e.secondStep, ue = H.getNow(), ne = Xk(H.getHour(ue), H.getMinute(ue), H.getSecond(ue), o.value ? J : 1, i.value ? Z : 1, l.value ? ae : 1), X = Ey(
          H,
          ue,
          ne[0],
          ne[1],
          ne[2]
        );
        W(X, "submit");
      }, $ = F(function() {
        var q, H = e.prefixCls, J = e.direction;
        return ge("".concat(H, "-panel"), (q = {}, j(q, "".concat(H, "-panel-has-range"), h && h.value && h.value[0] && h.value[1]), j(q, "".concat(H, "-panel-has-range-hover"), w && w.value && w.value[0] && w.value[1]), j(q, "".concat(H, "-panel-rtl"), J === "rtl"), q));
      });
      return ks(k(k({}, u), {
        mode: N,
        hideHeader: F(function() {
          var q;
          return e.hideHeader !== void 0 ? e.hideHeader : (q = u.hideHeader) === null || q === void 0 ? void 0 : q.value;
        }),
        hidePrevBtn: F(function() {
          return p.value && y.value === "right";
        }),
        hideNextBtn: F(function() {
          return p.value && y.value === "left";
        })
      })), Ce(function() {
        return e.value;
      }, function() {
        e.value && V(e.value);
      }), function() {
        var q = e.prefixCls, H = q === void 0 ? "ant-picker" : q, J = e.locale, Z = e.generateConfig, ae = e.disabledDate, ue = e.picker, ne = ue === void 0 ? "date" : ue, X = e.tabindex, te = X === void 0 ? 0 : X, me = e.showNow, Oe = e.showTime, ke = e.showToday, Me = e.renderExtraFooter, Pe = e.onMousedown, fe = e.onOk, le = e.components;
        s && y.value !== "right" && (s.value = {
          onKeydown: U,
          onClose: function() {
            C.value && C.value.onClose && C.value.onClose();
          }
        });
        var ie, de = k(k(k({}, r), e), {
          operationRef: C,
          prefixCls: H,
          viewDate: D.value,
          value: b.value,
          onViewDateChange: K,
          sourceMode: I.value,
          onPanelChange: B,
          disabledDate: ae
        });
        switch (delete de.onChange, delete de.onSelect, N.value) {
          case "decade":
            ie = m(Ns, Y(Y({}, de), {}, {
              onSelect: function(Se, se) {
                K(Se), W(Se, se);
              }
            }), null);
            break;
          case "year":
            ie = m(Ws, Y(Y({}, de), {}, {
              onSelect: function(Se, se) {
                K(Se), W(Se, se);
              }
            }), null);
            break;
          case "month":
            ie = m(js, Y(Y({}, de), {}, {
              onSelect: function(Se, se) {
                K(Se), W(Se, se);
              }
            }), null);
            break;
          case "quarter":
            ie = m(Ks, Y(Y({}, de), {}, {
              onSelect: function(Se, se) {
                K(Se), W(Se, se);
              }
            }), null);
            break;
          case "week":
            ie = m(Rs, Y(Y({}, de), {}, {
              onSelect: function(Se, se) {
                K(Se), W(Se, se);
              }
            }), null);
            break;
          case "time":
            delete de.showTime, ie = m(rl, Y(Y(Y({}, de), Le(Oe) === "object" ? Oe : null), {}, {
              onSelect: function(Se, se) {
                K(Se), W(Se, se);
              }
            }), null);
            break;
          default:
            Oe ? ie = m(Fs, Y(Y({}, de), {}, {
              onSelect: function(Se, se) {
                K(Se), W(Se, se);
              }
            }), null) : ie = m(mo, Y(Y({}, de), {}, {
              onSelect: function(Se, se) {
                K(Se), W(Se, se);
              }
            }), null);
        }
        var ye, _e;
        v != null && v.value || (ye = Ky(H, N.value, Me), _e = Hy({
          prefixCls: H,
          components: le,
          needConfirmButton: a.value,
          okDisabled: !b.value || ae && ae(b.value),
          locale: J,
          showNow: me,
          onNow: a.value && L,
          onOk: function() {
            b.value && (W(b.value, "submit", !0), fe && fe(b.value));
          }
        }));
        var Be;
        if (ke && N.value === "date" && ne === "date" && !Oe) {
          var Ve = Z.getNow(), he = "".concat(H, "-today-btn"), oe = ae && ae(Ve);
          Be = m("a", {
            class: ge(he, oe && "".concat(he, "-disabled")),
            "aria-disabled": oe,
            onClick: function() {
              oe || W(Ve, "mouse", !0);
            }
          }, [J.today]);
        }
        return m("div", {
          tabindex: te,
          class: ge($.value, r.class),
          style: r.style,
          onKeydown: U,
          onBlur: z,
          onMousedown: Pe,
          ref: d
        }, [ie, ye || _e || Be ? m("div", {
          class: "".concat(H, "-footer")
        }, [ye, _e, Be]) : null]);
      };
    }
  });
}
var C2 = b2();
const zy = function(t) {
  return m(C2, t);
};
var w2 = {
  bottomLeft: {
    points: ["tl", "bl"],
    offset: [0, 4],
    overflow: {
      adjustX: 1,
      adjustY: 1
    }
  },
  bottomRight: {
    points: ["tr", "br"],
    offset: [0, 4],
    overflow: {
      adjustX: 1,
      adjustY: 1
    }
  },
  topLeft: {
    points: ["bl", "tl"],
    offset: [0, -4],
    overflow: {
      adjustX: 0,
      adjustY: 1
    }
  },
  topRight: {
    points: ["br", "tr"],
    offset: [0, -4],
    overflow: {
      adjustX: 0,
      adjustY: 1
    }
  }
};
function Wy(t, e) {
  var n, r = e.slots, a = Tt(t), o = a.prefixCls, i = a.popupStyle, l = a.visible, u = a.dropdownClassName, s = a.dropdownAlign, d = a.transitionName, c = a.getPopupContainer, v = a.range, f = a.popupPlacement, g = a.direction, p = "".concat(o, "-dropdown"), y = function() {
    return f !== void 0 ? f : g === "rtl" ? "bottomRight" : "bottomLeft";
  };
  return m(vo, {
    showAction: [],
    hideAction: [],
    popupPlacement: y(),
    builtinPlacements: w2,
    prefixCls: p,
    popupTransitionName: d,
    popupAlign: s,
    popupVisible: l,
    popupClassName: ge(u, (n = {}, j(n, "".concat(p, "-range"), v), j(n, "".concat(p, "-rtl"), g === "rtl"), n)),
    popupStyle: i,
    getPopupContainer: c
  }, {
    default: r.default,
    popup: r.popupElement
  });
}
function rc(t) {
  var e = t.open, n = t.value, r = t.isClickOutside, a = t.triggerOpen, o = t.forwardKeydown, i = t.onKeydown, l = t.blurToCancel, u = t.onSubmit, s = t.onCancel, d = t.onFocus, c = t.onBlur, v = G(!1), f = G(!1), g = G(!1), p = G(!1), y = G(!1), h = F(function() {
    return {
      onMousedown: function() {
        v.value = !0, a(!0);
      },
      onKeydown: function(x) {
        var S = function() {
          y.value = !0;
        };
        if (i(x, S), !y.value) {
          switch (x.which) {
            case xe.ENTER: {
              e.value ? u() !== !1 && (v.value = !0) : a(!0), x.preventDefault();
              return;
            }
            case xe.TAB: {
              v.value && e.value && !x.shiftKey ? (v.value = !1, x.preventDefault()) : !v.value && e.value && !o(x) && x.shiftKey && (v.value = !0, x.preventDefault());
              return;
            }
            case xe.ESC: {
              v.value = !0, s();
              return;
            }
          }
          !e.value && ![xe.SHIFT].includes(x.which) ? a(!0) : v.value || o(x);
        }
      },
      onFocus: function(x) {
        v.value = !0, f.value = !0, d && d(x);
      },
      onBlur: function(x) {
        if (g.value || !r(document.activeElement)) {
          g.value = !1;
          return;
        }
        l.value ? setTimeout(function() {
          for (var S = document, b = S.activeElement; b && b.shadowRoot; )
            b = b.shadowRoot.activeElement;
          r(b) && s();
        }, 0) : e.value && (a(!1), p.value && u()), f.value = !1, c && c(x);
      }
    };
  });
  Ce(e, function() {
    p.value = !1;
  }), Ce(n, function() {
    p.value = !0;
  });
  var w = G();
  return dt(function() {
    w.value = Zk(function(C) {
      var x = e2(C);
      if (e.value) {
        var S = r(x);
        S ? (!f.value || S) && a(!1) : (g.value = !0, tt(function() {
          g.value = !1;
        }));
      }
    });
  }), ht(function() {
    w.value && w.value();
  }), [h, {
    focused: f,
    typing: v
  }];
}
function ac(t) {
  var e = t.valueTexts, n = t.onTextChange, r = G("");
  function a(i) {
    r.value = i, n(i);
  }
  function o() {
    r.value = e.value[0];
  }
  return Ce(function() {
    return Ie(e.value);
  }, function(i) {
    var l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    i.join("||") !== l.join("||") && e.value.every(function(u) {
      return u !== r.value;
    }) && o();
  }, {
    immediate: !0
  }), [r, a, o];
}
function _i(t, e) {
  var n = e.formatList, r = e.generateConfig, a = e.locale, o = ss(function() {
    if (!t.value)
      return [[""], ""];
    for (var u = "", s = [], d = 0; d < n.value.length; d += 1) {
      var c = n.value[d], v = $t(t.value, {
        generateConfig: r.value,
        locale: a.value,
        format: c
      });
      s.push(v), d === 0 && (u = v);
    }
    return [s, u];
  }, [t, n], function(u, s) {
    return s[0] !== u[0] || !Jr(s[1], u[1]);
  }), i = F(function() {
    return o.value[0];
  }), l = F(function() {
    return o.value[1];
  });
  return [i, l];
}
function oc(t, e) {
  var n = e.formatList, r = e.generateConfig, a = e.locale, o = G(null), i;
  function l(f) {
    var g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    if (tt.cancel(i), g) {
      o.value = f;
      return;
    }
    i = tt(function() {
      o.value = f;
    });
  }
  var u = _i(o, {
    formatList: n,
    generateConfig: r,
    locale: a
  }), s = De(u, 2), d = s[1];
  function c(f) {
    l(f);
  }
  function v() {
    var f = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
    l(null, f);
  }
  return Ce(t, function() {
    v(!0);
  }), ht(function() {
    tt.cancel(i);
  }), [d, c, v];
}
function Uy(t) {
  var e = t.picker, n = t.disabledHours, r = t.disabledMinutes, a = t.disabledSeconds;
  e === "time" && (n || r || a) && Ze(!1, "'disabledHours', 'disabledMinutes', 'disabledSeconds' will be removed in the next major version, please use 'disabledTime' instead.");
}
function S2() {
  return pe({
    name: "Picker",
    inheritAttrs: !1,
    props: ["prefixCls", "id", "tabindex", "dropdownClassName", "dropdownAlign", "popupStyle", "transitionName", "generateConfig", "locale", "inputReadOnly", "allowClear", "autofocus", "showTime", "showNow", "showHour", "showMinute", "showSecond", "picker", "format", "use12Hours", "value", "defaultValue", "open", "defaultOpen", "defaultOpenValue", "suffixIcon", "clearIcon", "disabled", "disabledDate", "placeholder", "getPopupContainer", "panelRender", "inputRender", "onChange", "onOpenChange", "onFocus", "onBlur", "onMousedown", "onMouseup", "onMouseenter", "onMouseleave", "onContextmenu", "onClick", "onKeydown", "onSelect", "direction", "autocomplete", "showToday", "renderExtraFooter", "dateRender", "minuteStep", "hourStep", "secondStep", "hideDisabledOptions"],
    setup: function(e, n) {
      var r = n.attrs, a = n.expose, o = G(null), i = F(function() {
        var X;
        return (X = e.picker) !== null && X !== void 0 ? X : "date";
      }), l = F(function() {
        return i.value === "date" && !!e.showTime || i.value === "time";
      });
      process.env.NODE_ENV !== "production" && Uy(e);
      var u = F(function() {
        return Ly(Ny(e.format, i.value, e.showTime, e.use12Hours));
      }), s = G(null), d = G(null), c = G(null), v = Rt(null, {
        value: ze(e, "value"),
        defaultValue: e.defaultValue
      }), f = De(v, 2), g = f[0], p = f[1], y = G(g.value), h = function(te) {
        y.value = te;
      }, w = G(null), C = Rt(!1, {
        value: ze(e, "open"),
        defaultValue: e.defaultOpen,
        postState: function(te) {
          return e.disabled ? !1 : te;
        },
        onChange: function(te) {
          e.onOpenChange && e.onOpenChange(te), !te && w.value && w.value.onClose && w.value.onClose();
        }
      }), x = De(C, 2), S = x[0], b = x[1], P = _i(y, {
        formatList: u,
        generateConfig: ze(e, "generateConfig"),
        locale: ze(e, "locale")
      }), T = De(P, 2), O = T[0], D = T[1], V = ac({
        valueTexts: O,
        onTextChange: function(te) {
          var me = Ry(te, {
            locale: e.locale,
            formatList: u.value,
            generateConfig: e.generateConfig
          });
          me && (!e.disabledDate || !e.disabledDate(me)) && h(me);
        }
      }), K = De(V, 3), R = K[0], E = K[1], M = K[2], N = function(te) {
        var me = e.onChange, Oe = e.generateConfig, ke = e.locale;
        h(te), p(te), me && !ia(Oe, g.value, te) && me(te, te ? $t(te, {
          generateConfig: Oe,
          locale: ke,
          format: u.value[0]
        }) : "");
      }, _ = function(te) {
        e.disabled && te || b(te);
      }, I = function(te) {
        return S.value && w.value && w.value.onKeydown ? w.value.onKeydown(te) : (Ze(!1, "Picker not correct forward Keydown operation. Please help to fire issue about this."), !1);
      }, A = function() {
        e.onMouseup && e.onMouseup.apply(e, arguments), o.value && (o.value.focus(), _(!0));
      }, B = rc({
        blurToCancel: l,
        open: S,
        value: R,
        triggerOpen: _,
        forwardKeydown: I,
        isClickOutside: function(te) {
          return !Ay([s.value, d.value, c.value], te);
        },
        onSubmit: function() {
          return !y.value || e.disabledDate && e.disabledDate(y.value) ? !1 : (N(y.value), _(!1), M(), !0);
        },
        onCancel: function() {
          _(!1), h(g.value), M();
        },
        onKeydown: function(te, me) {
          var Oe;
          (Oe = e.onKeydown) === null || Oe === void 0 || Oe.call(e, te, me);
        },
        onFocus: function(te) {
          var me;
          (me = e.onFocus) === null || me === void 0 || me.call(e, te);
        },
        onBlur: function(te) {
          var me;
          (me = e.onBlur) === null || me === void 0 || me.call(e, te);
        }
      }), W = De(B, 2), U = W[0], z = W[1], L = z.focused, $ = z.typing;
      Ce([S, O], function() {
        S.value || (h(g.value), !O.value.length || O.value[0] === "" ? E("") : D.value !== R.value && M());
      }), Ce(i, function() {
        S.value || M();
      }), Ce(g, function() {
        h(g.value);
      });
      var q = oc(R, {
        formatList: u,
        generateConfig: ze(e, "generateConfig"),
        locale: ze(e, "locale")
      }), H = De(q, 3), J = H[0], Z = H[1], ae = H[2], ue = function(te, me) {
        (me === "submit" || me !== "key" && !l.value) && (N(te), _(!1));
      };
      ks({
        operationRef: w,
        hideHeader: F(function() {
          return i.value === "time";
        }),
        panelRef: s,
        onSelect: ue,
        open: S,
        defaultOpenValue: ze(e, "defaultOpenValue"),
        onDateMouseenter: Z,
        onDateMouseleave: ae
      }), a({
        focus: function() {
          o.value && o.value.focus();
        },
        blur: function() {
          o.value && o.value.blur();
        }
      });
      var ne = Mm();
      return function() {
        var X, te = e.prefixCls, me = te === void 0 ? "rc-picker" : te, Oe = e.id, ke = e.tabindex, Me = e.dropdownClassName, Pe = e.dropdownAlign, fe = e.popupStyle, le = e.transitionName, ie = e.generateConfig, de = e.locale, ye = e.inputReadOnly, _e = e.allowClear, Be = e.autofocus, Ve = e.picker, he = Ve === void 0 ? "date" : Ve, oe = e.defaultOpenValue, ve = e.suffixIcon, Se = e.clearIcon, se = e.disabled, ee = e.placeholder, re = e.getPopupContainer, ce = e.panelRender, Ee = e.onMousedown, Te = e.onMouseenter, we = e.onMouseleave, be = e.onContextmenu, Ae = e.onClick, je = e.onSelect, We = e.direction, et = e.autocomplete, Ge = et === void 0 ? "off" : et, it = k(k(k({}, e), r), {
          class: ge(j({}, "".concat(me, "-panel-focused"), !$.value)),
          style: void 0,
          pickerValue: void 0,
          onPickerValueChange: void 0,
          onChange: null
        }), nt = m(zy, Y(Y({}, it), {}, {
          generateConfig: ie,
          value: y.value,
          locale: de,
          tabindex: -1,
          onSelect: function(xt) {
            je == null || je(xt), h(xt);
          },
          direction: We,
          onPanelChange: function(xt, Mn) {
            var dn = e.onPanelChange;
            ae(!0), dn == null || dn(xt, Mn);
          }
        }), null);
        ce && (nt = ce(nt));
        var lt = m("div", {
          class: "".concat(me, "-panel-container"),
          onMousedown: function(xt) {
            xt.preventDefault();
          }
        }, [nt]), at;
        ve && (at = m("span", {
          class: "".concat(me, "-suffix")
        }, [ve]));
        var rt;
        _e && g.value && !se && (rt = m("span", {
          onMousedown: function(xt) {
            xt.preventDefault(), xt.stopPropagation();
          },
          onMouseup: function(xt) {
            xt.preventDefault(), xt.stopPropagation(), N(null), _(!1);
          },
          class: "".concat(me, "-clear"),
          role: "button"
        }, [Se || m("span", {
          class: "".concat(me, "-clear-btn")
        }, null)]));
        var yt = k(k(k(k({
          id: Oe,
          tabindex: ke,
          disabled: se,
          readonly: ye || typeof u.value[0] == "function" || !$.value,
          value: J.value || R.value,
          onInput: function(xt) {
            E(xt.target.value);
          },
          autofocus: Be,
          placeholder: ee,
          ref: o,
          title: R.value
        }, U.value), {
          size: My(he, u.value[0], ie)
        }), jy(e)), {
          autocomplete: Ge
        }), It = e.inputRender ? e.inputRender(yt) : m("input", yt, null);
        process.env.NODE_ENV !== "production" && Ze(!oe, "`defaultOpenValue` may confuse user for the current value status. Please use `defaultValue` instead.");
        var Dt = We === "rtl" ? "bottomRight" : "bottomLeft";
        return m(Wy, {
          visible: S.value,
          popupStyle: fe,
          prefixCls: me,
          dropdownClassName: Me,
          dropdownAlign: Pe,
          getPopupContainer: re,
          transitionName: le,
          popupPlacement: Dt,
          direction: We
        }, {
          default: function() {
            return [m("div", {
              ref: c,
              class: ge(me, r.class, (X = {}, j(X, "".concat(me, "-disabled"), se), j(X, "".concat(me, "-focused"), L.value), j(X, "".concat(me, "-rtl"), We === "rtl"), X)),
              style: r.style,
              onMousedown: Ee,
              onMouseup: A,
              onMouseenter: Te,
              onMouseleave: we,
              onContextmenu: be,
              onClick: Ae
            }, [m("div", {
              class: ge("".concat(me, "-input"), j({}, "".concat(me, "-input-placeholder"), !!J.value)),
              ref: d
            }, [It, at, rt]), ne()])];
          },
          popupElement: function() {
            return lt;
          }
        });
      };
    }
  });
}
const x2 = S2();
function P2(t, e) {
  var n = t.picker, r = t.locale, a = t.selectedValue, o = t.disabledDate, i = t.disabled, l = t.generateConfig, u = F(function() {
    return Je(a.value, 0);
  }), s = F(function() {
    return Je(a.value, 1);
  });
  function d(p) {
    return l.value.locale.getWeekFirstDate(r.value.locale, p);
  }
  function c(p) {
    var y = l.value.getYear(p), h = l.value.getMonth(p);
    return y * 100 + h;
  }
  function v(p) {
    var y = l.value.getYear(p), h = ec(l.value, p);
    return y * 10 + h;
  }
  var f = function(y) {
    var h;
    if (o && ((h = o == null ? void 0 : o.value) === null || h === void 0 ? void 0 : h.call(o, y)))
      return !0;
    if (i[1] && s)
      return !jn(l.value, y, s.value) && l.value.isAfter(y, s.value);
    if (e.value[1] && s.value)
      switch (n.value) {
        case "quarter":
          return v(y) > v(s.value);
        case "month":
          return c(y) > c(s.value);
        case "week":
          return d(y) > d(s.value);
        default:
          return !jn(l.value, y, s.value) && l.value.isAfter(y, s.value);
      }
    return !1;
  }, g = function(y) {
    var h;
    if (!((h = o.value) === null || h === void 0) && h.call(o, y))
      return !0;
    if (i[0] && u)
      return !jn(l.value, y, s.value) && l.value.isAfter(u.value, y);
    if (e.value[0] && u.value)
      switch (n.value) {
        case "quarter":
          return v(y) < v(u.value);
        case "month":
          return c(y) < c(u.value);
        case "week":
          return d(y) < d(u.value);
        default:
          return !jn(l.value, y, u.value) && l.value.isAfter(u.value, y);
      }
    return !1;
  };
  return [f, g];
}
function O2(t, e, n, r) {
  var a = ja(t, n, r, 1);
  function o(i) {
    return i(t, e) ? "same" : i(a, e) ? "closing" : "far";
  }
  switch (n) {
    case "year":
      return o(function(i, l) {
        return i2(r, i, l);
      });
    case "quarter":
    case "month":
      return o(function(i, l) {
        return nl(r, i, l);
      });
    default:
      return o(function(i, l) {
        return Ms(r, i, l);
      });
  }
}
function T2(t, e, n, r) {
  var a = Je(t, 0), o = Je(t, 1);
  if (e === 0)
    return a;
  if (a && o) {
    var i = O2(a, o, n, r);
    switch (i) {
      case "same":
        return a;
      case "closing":
        return a;
      default:
        return ja(o, n, r, -1);
    }
  }
  return a;
}
function I2(t) {
  var e = t.values, n = t.picker, r = t.defaultDates, a = t.generateConfig, o = G([Je(r, 0), Je(r, 1)]), i = G(null), l = F(function() {
    return Je(e.value, 0);
  }), u = F(function() {
    return Je(e.value, 1);
  }), s = function(g) {
    return o.value[g] ? o.value[g] : Je(i.value, g) || T2(e.value, g, n.value, a.value) || l.value || u.value || a.value.getNow();
  }, d = G(null), c = G(null);
  Ue(function() {
    d.value = s(0), c.value = s(1);
  });
  function v(f, g) {
    if (f) {
      var p = on(i.value, f, g);
      o.value = on(o.value, null, g) || [null, null];
      var y = (g + 1) % 2;
      Je(e.value, y) || (p = on(p, f, y)), i.value = p;
    } else
      (l.value || u.value) && (i.value = null);
  }
  return [d, c, v];
}
function sp(t, e) {
  return t && t[0] && t[1] && e.isAfter(t[0], t[1]) ? [t[1], t[0]] : t;
}
function dp(t, e, n, r) {
  return !!(t || r && r[e] || n[(e + 1) % 2]);
}
function k2() {
  return pe({
    name: "RangerPicker",
    inheritAttrs: !1,
    props: ["prefixCls", "id", "popupStyle", "dropdownClassName", "transitionName", "dropdownAlign", "getPopupContainer", "generateConfig", "locale", "placeholder", "autofocus", "disabled", "format", "picker", "showTime", "showNow", "showHour", "showMinute", "showSecond", "use12Hours", "separator", "value", "defaultValue", "defaultPickerValue", "open", "defaultOpen", "disabledDate", "disabledTime", "dateRender", "panelRender", "ranges", "allowEmpty", "allowClear", "suffixIcon", "clearIcon", "pickerRef", "inputReadOnly", "mode", "renderExtraFooter", "onChange", "onOpenChange", "onPanelChange", "onCalendarChange", "onFocus", "onBlur", "onMousedown", "onMouseup", "onMouseenter", "onMouseleave", "onClick", "onOk", "onKeydown", "components", "order", "direction", "activePickerIndex", "autocomplete", "minuteStep", "hourStep", "secondStep", "hideDisabledOptions", "disabledMinutes"],
    setup: function(e, n) {
      var r = n.attrs, a = n.expose, o = F(function() {
        return e.picker === "date" && !!e.showTime || e.picker === "time";
      }), i = Mm(), l = G({}), u = G(null), s = G(null), d = G(null), c = G(null), v = G(null), f = G(null), g = G(null), p = G(null);
      process.env.NODE_ENV !== "production" && Uy(e);
      var y = F(function() {
        return Ly(Ny(e.format, e.picker, e.showTime, e.use12Hours));
      }), h = Rt(0, {
        value: ze(e, "activePickerIndex")
      }), w = De(h, 2), C = w[0], x = w[1], S = G(null), b = F(function() {
        var Re = e.disabled;
        return Array.isArray(Re) ? Re : [Re || !1, Re || !1];
      }), P = Rt(null, {
        value: ze(e, "value"),
        defaultValue: e.defaultValue,
        postState: function(Ne) {
          return e.picker === "time" && !e.order ? Ne : sp(Ne, e.generateConfig);
        }
      }), T = De(P, 2), O = T[0], D = T[1], V = I2({
        values: O,
        picker: ze(e, "picker"),
        defaultDates: e.defaultPickerValue,
        generateConfig: ze(e, "generateConfig")
      }), K = De(V, 3), R = K[0], E = K[1], M = K[2], N = Rt(O.value, {
        postState: function(Ne) {
          var Fe = Ne;
          if (b.value[0] && b.value[1])
            return Fe;
          for (var $e = 0; $e < 2; $e += 1)
            b[$e] && !Je(Fe, $e) && !Je(e.allowEmpty, $e) && (Fe = on(Fe, e.generateConfig.getNow(), $e));
          return Fe;
        }
      }), _ = De(N, 2), I = _[0], A = _[1], B = Rt([e.picker, e.picker], {
        value: ze(e, "mode")
      }), W = De(B, 2), U = W[0], z = W[1];
      Ce(function() {
        return e.picker;
      }, function() {
        z([e.picker, e.picker]);
      });
      var L = function(Ne, Fe) {
        var $e;
        z(Ne), ($e = e.onPanelChange) === null || $e === void 0 || $e.call(e, Fe, Ne);
      }, $ = P2({
        picker: ze(e, "picker"),
        selectedValue: I,
        locale: ze(e, "locale"),
        disabled: b,
        disabledDate: ze(e, "disabledDate"),
        generateConfig: ze(e, "generateConfig")
      }, l), q = De($, 2), H = q[0], J = q[1], Z = Rt(!1, {
        value: ze(e, "open"),
        defaultValue: e.defaultOpen,
        postState: function(Ne) {
          return b.value[C.value] ? !1 : Ne;
        },
        onChange: function(Ne) {
          var Fe;
          (Fe = e.onOpenChange) === null || Fe === void 0 || Fe.call(e, Ne), !Ne && S.value && S.value.onClose && S.value.onClose();
        }
      }), ae = De(Z, 2), ue = ae[0], ne = ae[1], X = F(function() {
        return ue.value && C.value === 0;
      }), te = F(function() {
        return ue.value && C.value === 1;
      }), me = G(0);
      Ce(ue, function() {
        !ue.value && u.value && (me.value = u.value.offsetWidth);
      });
      var Oe = G();
      function ke(Re, Ne) {
        if (Re)
          clearTimeout(Oe.value), l.value[Ne] = !0, x(Ne), ne(Re), ue.value || M(null, Ne);
        else if (C.value === Ne) {
          ne(Re);
          var Fe = l.value;
          Oe.value = setTimeout(function() {
            Fe === l.value && (l.value = {});
          });
        }
      }
      function Me(Re) {
        ke(!0, Re), setTimeout(function() {
          var Ne = [f, g][Re];
          Ne.value && Ne.value.focus();
        }, 0);
      }
      function Pe(Re, Ne) {
        var Fe = Re, $e = Je(Fe, 0), Ke = Je(Fe, 1), Pt = e.generateConfig, Un = e.locale, bn = e.picker, wa = e.order, dr = e.onCalendarChange, Vr = e.allowEmpty, An = e.onChange, Sa = e.showTime;
        $e && Ke && Pt.isAfter($e, Ke) && (bn === "week" && !Fy(Pt, Un.locale, $e, Ke) || bn === "quarter" && !Dy(Pt, $e, Ke) || bn !== "week" && bn !== "quarter" && bn !== "time" && !(Sa ? ia(Pt, $e, Ke) : jn(Pt, $e, Ke)) ? (Ne === 0 ? (Fe = [$e, null], Ke = null) : ($e = null, Fe = [null, Ke]), l.value = j({}, Ne, !0)) : (bn !== "time" || wa !== !1) && (Fe = sp(Fe, Pt))), A(Fe);
        var Cn = Fe && Fe[0] ? $t(Fe[0], {
          generateConfig: Pt,
          locale: Un,
          format: y.value[0]
        }) : "", fn = Fe && Fe[1] ? $t(Fe[1], {
          generateConfig: Pt,
          locale: Un,
          format: y.value[0]
        }) : "";
        if (dr) {
          var wn = {
            range: Ne === 0 ? "start" : "end"
          };
          dr(Fe, [Cn, fn], wn);
        }
        var en = dp($e, 0, b.value, Vr), yl = dp(Ke, 1, b.value, Vr), Oo = Fe === null || en && yl;
        Oo && (D(Fe), An && (!ia(Pt, Je(O.value, 0), $e) || !ia(Pt, Je(O.value, 1), Ke)) && An(Fe, [Cn, fn]));
        var Dn = null;
        Ne === 0 && !b.value[1] ? Dn = 1 : Ne === 1 && !b.value[0] && (Dn = 0), Dn !== null && Dn !== C.value && (!l.value[Dn] || !Je(Fe, Dn)) && Je(Fe, Ne) ? Me(Dn) : ke(!1, Ne);
      }
      var fe = function(Ne) {
        return ue && S.value && S.value.onKeydown ? S.value.onKeydown(Ne) : (Ze(!1, "Picker not correct forward Keydown operation. Please help to fire issue about this."), !1);
      }, le = {
        formatList: y,
        generateConfig: ze(e, "generateConfig"),
        locale: ze(e, "locale")
      }, ie = _i(F(function() {
        return Je(I.value, 0);
      }), le), de = De(ie, 2), ye = de[0], _e = de[1], Be = _i(F(function() {
        return Je(I.value, 1);
      }), le), Ve = De(Be, 2), he = Ve[0], oe = Ve[1], ve = function(Ne, Fe) {
        var $e = Ry(Ne, {
          locale: e.locale,
          formatList: y.value,
          generateConfig: e.generateConfig
        }), Ke = Fe === 0 ? H : J;
        $e && !Ke($e) && (A(on(I.value, $e, Fe)), M($e, Fe));
      }, Se = ac({
        valueTexts: ye,
        onTextChange: function(Ne) {
          return ve(Ne, 0);
        }
      }), se = De(Se, 3), ee = se[0], re = se[1], ce = se[2], Ee = ac({
        valueTexts: he,
        onTextChange: function(Ne) {
          return ve(Ne, 1);
        }
      }), Te = De(Ee, 3), we = Te[0], be = Te[1], Ae = Te[2], je = to(null), We = De(je, 2), et = We[0], Ge = We[1], it = to(null), nt = De(it, 2), lt = nt[0], at = nt[1], rt = oc(ee, le), yt = De(rt, 3), It = yt[0], Dt = yt[1], wt = yt[2], xt = oc(we, le), Mn = De(xt, 3), dn = Mn[0], cr = Mn[1], Ft = Mn[2], Wn = function(Ne) {
        at(on(I.value, Ne, C.value)), C.value === 0 ? Dt(Ne) : cr(Ne);
      }, Ca = function() {
        at(on(I.value, null, C.value)), C.value === 0 ? wt() : Ft();
      }, So = function(Ne, Fe) {
        return {
          forwardKeydown: fe,
          onBlur: function(Ke) {
            var Pt;
            (Pt = e.onBlur) === null || Pt === void 0 || Pt.call(e, Ke);
          },
          isClickOutside: function(Ke) {
            return !Ay([s.value, d.value, c.value, u.value], Ke);
          },
          onFocus: function(Ke) {
            var Pt;
            x(Ne), (Pt = e.onFocus) === null || Pt === void 0 || Pt.call(e, Ke);
          },
          triggerOpen: function(Ke) {
            ke(Ke, Ne);
          },
          onSubmit: function() {
            if (!I.value || e.disabledDate && e.disabledDate(I.value[Ne]))
              return !1;
            Pe(I.value, Ne), Fe();
          },
          onCancel: function() {
            ke(!1, Ne), A(O.value), Fe();
          }
        };
      }, pl = rc(k(k({}, So(0, ce)), {
        blurToCancel: o,
        open: X,
        value: ee,
        onKeydown: function(Ne, Fe) {
          var $e;
          ($e = e.onKeydown) === null || $e === void 0 || $e.call(e, Ne, Fe);
        }
      })), xo = De(pl, 2), hl = xo[0], Po = xo[1], sr = Po.focused, gl = Po.typing, r0 = rc(k(k({}, So(1, Ae)), {
        blurToCancel: o,
        open: te,
        value: we,
        onKeydown: function(Ne, Fe) {
          var $e;
          ($e = e.onKeydown) === null || $e === void 0 || $e.call(e, Ne, Fe);
        }
      })), Md = De(r0, 2), a0 = Md[0], Ad = Md[1], Dd = Ad.focused, Fd = Ad.typing, o0 = function(Ne) {
        var Fe;
        (Fe = e.onClick) === null || Fe === void 0 || Fe.call(e, Ne), !ue.value && !f.value.contains(Ne.target) && !g.value.contains(Ne.target) && (b.value[0] ? b.value[1] || Me(1) : Me(0));
      }, i0 = function(Ne) {
        var Fe;
        (Fe = e.onMousedown) === null || Fe === void 0 || Fe.call(e, Ne), ue.value && (sr.value || Dd.value) && !f.value.contains(Ne.target) && !g.value.contains(Ne.target) && Ne.preventDefault();
      }, l0 = F(function() {
        var Re;
        return !((Re = O.value) === null || Re === void 0) && Re[0] ? $t(O.value[0], {
          locale: e.locale,
          format: "YYYYMMDDHHmmss",
          generateConfig: e.generateConfig
        }) : "";
      }), u0 = F(function() {
        var Re;
        return !((Re = O.value) === null || Re === void 0) && Re[1] ? $t(O.value[1], {
          locale: e.locale,
          format: "YYYYMMDDHHmmss",
          generateConfig: e.generateConfig
        }) : "";
      });
      Ce([ue, ye, he], function() {
        ue.value || (A(O.value), !ye.value.length || ye.value[0] === "" ? re("") : _e.value !== ee.value && ce(), !he.value.length || he.value[0] === "" ? be("") : oe.value !== we.value && Ae());
      }), Ce([l0, u0], function() {
        A(O.value);
      }), process.env.NODE_ENV !== "production" && Ue(function() {
        var Re = e.value, Ne = e.disabled;
        Re && Array.isArray(Ne) && (Je(Ne, 0) && !Je(Re, 0) || Je(Ne, 1) && !Je(Re, 1)) && Ze(!1, "`disabled` should not set with empty `value`. You should set `allowEmpty` or `value` instead.");
      }), a({
        focus: function() {
          f.value && f.value.focus();
        },
        blur: function() {
          f.value && f.value.blur(), g.value && g.value.blur();
        }
      });
      var c0 = F(function() {
        return Object.keys(e.ranges || {}).map(function(Re) {
          var Ne = e.ranges[Re], Fe = typeof Ne == "function" ? Ne() : Ne;
          return {
            label: Re,
            onClick: function() {
              Pe(Fe, null), ke(!1, C.value);
            },
            onMouseenter: function() {
              Ge(Fe);
            },
            onMouseleave: function() {
              Ge(null);
            }
          };
        });
      }), s0 = F(function() {
        return ue.value && lt.value && lt.value[0] && lt.value[1] && e.generateConfig.isAfter(lt.value[1], lt.value[0]) ? lt.value : null;
      });
      function ml() {
        var Re = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, Ne = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, Fe = e.generateConfig, $e = e.showTime, Ke = e.dateRender, Pt = e.direction, Un = e.disabledTime, bn = e.prefixCls, wa = e.locale, dr = $e;
        if ($e && Le($e) === "object" && $e.defaultValue) {
          var Vr = $e.defaultValue;
          dr = k(k({}, $e), {
            defaultValue: Je(Vr, C.value) || void 0
          });
        }
        var An = null;
        return Ke && (An = function(Cn) {
          var fn = Cn.current, wn = Cn.today;
          return Ke({
            current: fn,
            today: wn,
            info: {
              range: C.value ? "end" : "start"
            }
          });
        }), m(p2, {
          value: {
            inRange: !0,
            panelPosition: Re,
            rangedValue: et.value || I.value,
            hoverRangedValue: s0.value
          }
        }, {
          default: function() {
            return [m(zy, Y(Y(Y({}, e), Ne), {}, {
              dateRender: An,
              showTime: dr,
              mode: U.value[C.value],
              generateConfig: Fe,
              style: void 0,
              direction: Pt,
              disabledDate: C.value === 0 ? H : J,
              disabledTime: function(fn) {
                return Un ? Un(fn, C.value === 0 ? "start" : "end") : !1;
              },
              class: ge(j({}, "".concat(bn, "-panel-focused"), C.value === 0 ? !gl.value : !Fd.value)),
              value: Je(I.value, C.value),
              locale: wa,
              tabIndex: -1,
              onPanelChange: function(fn, wn) {
                C.value === 0 && wt(!0), C.value === 1 && Ft(!0), L(on(U.value, wn, C.value), on(I.value, fn, C.value));
                var en = fn;
                Re === "right" && U.value[C.value] === wn && (en = ja(en, wn, Fe, -1)), M(en, C.value);
              },
              onOk: null,
              onSelect: void 0,
              onChange: void 0,
              defaultValue: C.value === 0 ? Je(I.value, 1) : Je(I.value, 0)
            }), null)];
          }
        });
      }
      var d0 = function(Ne, Fe) {
        var $e = on(I.value, Ne, C.value);
        Fe === "submit" || Fe !== "key" && !o.value ? (Pe($e, C.value), C.value === 0 ? wt() : Ft()) : A($e);
      };
      return ks({
        operationRef: S,
        hideHeader: F(function() {
          return e.picker === "time";
        }),
        onDateMouseenter: Wn,
        onDateMouseleave: Ca,
        hideRanges: F(function() {
          return !0;
        }),
        onSelect: d0,
        open: ue
      }), function() {
        var Re, Ne, Fe, $e = e.prefixCls, Ke = $e === void 0 ? "rc-picker" : $e, Pt = e.id, Un = e.popupStyle, bn = e.dropdownClassName, wa = e.transitionName, dr = e.dropdownAlign, Vr = e.getPopupContainer, An = e.generateConfig, Sa = e.locale, Cn = e.placeholder, fn = e.autofocus, wn = e.picker, en = wn === void 0 ? "date" : wn, yl = e.showTime, Oo = e.separator, Dn = Oo === void 0 ? "~" : Oo, Rd = e.disabledDate, $d = e.panelRender, f0 = e.allowClear, Ld = e.suffixIcon, v0 = e.clearIcon, jd = e.inputReadOnly, p0 = e.renderExtraFooter, h0 = e.onMouseenter, g0 = e.onMouseleave, m0 = e.onMouseup, Vd = e.onOk, y0 = e.components, Br = e.direction, Bd = e.autocomplete, Kd = Bd === void 0 ? "off" : Bd, fr = 0, Hd = 0;
        C.value && d.value && v.value && s.value && (fr = d.value.offsetWidth + v.value.offsetWidth, s.value.offsetWidth && p.value.offsetWidth && fr > s.value.offsetWidth - p.value.offsetWidth - (Br === "rtl" || p.value.offsetLeft > fr ? 0 : p.value.offsetLeft) && (Hd = fr));
        var b0 = Br === "rtl" ? {
          right: "".concat(fr, "px")
        } : {
          left: "".concat(fr, "px")
        };
        function C0() {
          var Yn, Sn = Ky(Ke, U.value[C.value], p0), tn = Hy({
            prefixCls: Ke,
            components: y0,
            needConfirmButton: o.value,
            okDisabled: !Je(I.value, C.value) || Rd && Rd(I.value[C.value]),
            locale: Sa,
            rangeList: c0.value,
            onOk: function() {
              Je(I.value, C.value) && (Pe(I.value, C.value), Vd && Vd(I.value));
            }
          });
          if (en !== "time" && !yl) {
            var Yd = C.value === 0 ? R.value : E.value, x0 = ja(Yd, en, An), P0 = U.value[C.value], wl = P0 === en, qd = ml(wl ? "left" : !1, {
              pickerValue: Yd,
              onPickerValueChange: function(xa) {
                M(xa, C.value);
              }
            }), Gd = ml("right", {
              pickerValue: x0,
              onPickerValueChange: function(xa) {
                M(ja(xa, en, An, -1), C.value);
              }
            });
            Br === "rtl" ? Yn = m(ft, null, [Gd, wl && qd]) : Yn = m(ft, null, [qd, wl && Gd]);
          } else
            Yn = ml();
          var Sl = m(ft, null, [m("div", {
            class: "".concat(Ke, "-panels")
          }, [Yn]), (Sn || tn) && m("div", {
            class: "".concat(Ke, "-footer")
          }, [Sn, tn])]);
          return $d && (Sl = $d(Sl)), m("div", {
            class: "".concat(Ke, "-panel-container"),
            style: {
              marginLeft: "".concat(Hd, "px")
            },
            ref: s,
            onMousedown: function(xa) {
              xa.preventDefault();
            }
          }, [Sl]);
        }
        var w0 = m("div", {
          class: ge("".concat(Ke, "-range-wrapper"), "".concat(Ke, "-").concat(en, "-range-wrapper")),
          style: {
            minWidth: "".concat(me.value, "px")
          }
        }, [m("div", {
          ref: p,
          class: "".concat(Ke, "-range-arrow"),
          style: b0
        }, null), C0()]), zd;
        Ld && (zd = m("span", {
          class: "".concat(Ke, "-suffix")
        }, [Ld]));
        var Wd;
        f0 && (Je(O.value, 0) && !b.value[0] || Je(O.value, 1) && !b.value[1]) && (Wd = m("span", {
          onMousedown: function(Sn) {
            Sn.preventDefault(), Sn.stopPropagation();
          },
          onMouseup: function(Sn) {
            Sn.preventDefault(), Sn.stopPropagation();
            var tn = O.value;
            b.value[0] || (tn = on(tn, null, 0)), b.value[1] || (tn = on(tn, null, 1)), Pe(tn, null), ke(!1, C.value);
          },
          class: "".concat(Ke, "-clear")
        }, [v0 || m("span", {
          class: "".concat(Ke, "-clear-btn")
        }, null)]));
        var Ud = {
          size: My(en, y.value[0], An)
        }, bl = 0, Cl = 0;
        d.value && c.value && v.value && (C.value === 0 ? Cl = d.value.offsetWidth : (bl = fr, Cl = c.value.offsetWidth));
        var S0 = Br === "rtl" ? {
          right: "".concat(bl, "px")
        } : {
          left: "".concat(bl, "px")
        };
        return m(Wy, {
          visible: ue.value,
          popupStyle: Un,
          prefixCls: Ke,
          dropdownClassName: bn,
          dropdownAlign: dr,
          getPopupContainer: Vr,
          transitionName: wa,
          range: !0,
          direction: Br
        }, {
          default: function() {
            return [m("div", Y({
              ref: u,
              class: ge(Ke, "".concat(Ke, "-range"), r.class, (Re = {}, j(Re, "".concat(Ke, "-disabled"), b.value[0] && b.value[1]), j(Re, "".concat(Ke, "-focused"), C.value === 0 ? sr.value : Dd.value), j(Re, "".concat(Ke, "-rtl"), Br === "rtl"), Re)),
              style: r.style,
              onClick: o0,
              onMouseenter: h0,
              onMouseleave: g0,
              onMousedown: i0,
              onMouseup: m0
            }, jy(e)), [m("div", {
              class: ge("".concat(Ke, "-input"), (Ne = {}, j(Ne, "".concat(Ke, "-input-active"), C.value === 0), j(Ne, "".concat(Ke, "-input-placeholder"), !!It.value), Ne)),
              ref: d
            }, [m("input", Y(Y(Y({
              id: Pt,
              disabled: b.value[0],
              readonly: jd || typeof y.value[0] == "function" || !gl.value,
              value: It.value || ee.value,
              onInput: function(tn) {
                re(tn.target.value);
              },
              autofocus: fn,
              placeholder: Je(Cn, 0) || "",
              ref: f
            }, hl.value), Ud), {}, {
              autocomplete: Kd
            }), null)]), m("div", {
              class: "".concat(Ke, "-range-separator"),
              ref: v
            }, [Dn]), m("div", {
              class: ge("".concat(Ke, "-input"), (Fe = {}, j(Fe, "".concat(Ke, "-input-active"), C.value === 1), j(Fe, "".concat(Ke, "-input-placeholder"), !!dn.value), Fe)),
              ref: c
            }, [m("input", Y(Y(Y({
              disabled: b.value[1],
              readonly: jd || typeof y.value[0] == "function" || !Fd.value,
              value: dn.value || we.value,
              onInput: function(tn) {
                be(tn.target.value);
              },
              placeholder: Je(Cn, 1) || "",
              ref: g
            }, a0.value), Ud), {}, {
              autocomplete: Kd
            }), null)]), m("div", {
              class: "".concat(Ke, "-active-bar"),
              style: k(k({}, S0), {
                width: "".concat(Cl, "px"),
                position: "absolute"
              })
            }, null), zd, Wd, i()])];
          },
          popupElement: function() {
            return w0;
          }
        });
      };
    }
  });
}
var _2 = k2();
const E2 = _2;
var N2 = globalThis && globalThis.__rest || function(t, e) {
  var n = {};
  for (var r in t)
    Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(t); a < r.length; a++)
      e.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[a]) && (n[r[a]] = t[r[a]]);
  return n;
}, M2 = {
  prefixCls: String,
  name: String,
  id: String,
  type: String,
  defaultChecked: {
    type: [Boolean, Number],
    default: void 0
  },
  checked: {
    type: [Boolean, Number],
    default: void 0
  },
  disabled: Boolean,
  tabindex: {
    type: [Number, String]
  },
  readonly: Boolean,
  autofocus: Boolean,
  value: Q.any,
  required: Boolean
};
const Yy = pe({
  name: "Checkbox",
  inheritAttrs: !1,
  props: kt(M2, {
    prefixCls: "rc-checkbox",
    type: "checkbox",
    defaultChecked: !1
  }),
  emits: ["click", "change"],
  setup: function(e, n) {
    var r = n.attrs, a = n.emit, o = n.expose, i = G(e.checked === void 0 ? e.defaultChecked : e.checked), l = G();
    Ce(function() {
      return e.checked;
    }, function() {
      i.value = e.checked;
    }), o({
      focus: function() {
        var v;
        (v = l.value) === null || v === void 0 || v.focus();
      },
      blur: function() {
        var v;
        (v = l.value) === null || v === void 0 || v.blur();
      }
    });
    var u = G(), s = function(v) {
      if (!e.disabled) {
        e.checked === void 0 && (i.value = v.target.checked), v.shiftKey = u.value;
        var f = {
          target: k(k({}, e), {
            checked: v.target.checked
          }),
          stopPropagation: function() {
            v.stopPropagation();
          },
          preventDefault: function() {
            v.preventDefault();
          },
          nativeEvent: v
        };
        e.checked !== void 0 && (l.value.checked = !!e.checked), a("change", f), u.value = !1;
      }
    }, d = function(v) {
      a("click", v), u.value = v.shiftKey;
    };
    return function() {
      var c, v = e.prefixCls, f = e.name, g = e.id, p = e.type, y = e.disabled, h = e.readonly, w = e.tabindex, C = e.autofocus, x = e.value, S = e.required, b = N2(e, ["prefixCls", "name", "id", "type", "disabled", "readonly", "tabindex", "autofocus", "value", "required"]), P = r.class, T = r.onFocus, O = r.onBlur, D = r.onKeydown, V = r.onKeypress, K = r.onKeyup, R = k(k({}, b), r), E = Object.keys(R).reduce(function(_, I) {
        return (I.substr(0, 5) === "aria-" || I.substr(0, 5) === "data-" || I === "role") && (_[I] = R[I]), _;
      }, {}), M = ge(v, P, (c = {}, j(c, "".concat(v, "-checked"), i.value), j(c, "".concat(v, "-disabled"), y), c)), N = k(k({
        name: f,
        id: g,
        type: p,
        readonly: h,
        disabled: y,
        tabindex: w,
        class: "".concat(v, "-input"),
        checked: !!i.value,
        autofocus: C,
        value: x
      }, E), {
        onChange: s,
        onClick: d,
        onFocus: T,
        onBlur: O,
        onKeydown: D,
        onKeypress: V,
        onKeyup: K,
        required: S
      });
      return m("span", {
        class: M
      }, [m("input", Y({
        ref: l
      }, N), null), m("span", {
        class: "".concat(v, "-inner")
      }, null)]);
    };
  }
});
var A2 = globalThis && globalThis.__rest || function(t, e) {
  var n = {};
  for (var r in t)
    Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(t); a < r.length; a++)
      e.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[a]) && (n[r[a]] = t[r[a]]);
  return n;
}, qy = function() {
  return {
    prefixCls: String,
    checked: {
      type: Boolean,
      default: void 0
    },
    disabled: {
      type: Boolean,
      default: void 0
    },
    isGroup: {
      type: Boolean,
      default: void 0
    },
    value: Q.any,
    name: String,
    id: String,
    autofocus: {
      type: Boolean,
      default: void 0
    },
    onChange: Function,
    onFocus: Function,
    onBlur: Function,
    onClick: Function,
    "onUpdate:checked": Function,
    "onUpdate:value": Function
  };
};
const Xt = pe({
  name: "ARadio",
  props: qy(),
  setup: function(e, n) {
    var r = n.emit, a = n.expose, o = n.slots, i = jt(), l = G(), u = ut("radioGroupContext", void 0), s = Qe("radio", e), d = s.prefixCls, c = s.direction, v = function() {
      l.value.focus();
    }, f = function() {
      l.value.blur();
    };
    a({
      focus: v,
      blur: f
    });
    var g = function(h) {
      var w = h.target.checked;
      r("update:checked", w), r("update:value", w), r("change", h), i.onFieldChange();
    }, p = function(h) {
      r("change", h), u && u.onRadioChange && u.onRadioChange(h);
    };
    return function() {
      var y, h = u;
      e.prefixCls;
      var w = e.id, C = w === void 0 ? i.id.value : w, x = A2(e, ["prefixCls", "id"]), S = k({
        prefixCls: d.value,
        id: C
      }, pt(x, ["onUpdate:checked", "onUpdate:value"]));
      h ? (S.name = h.props.name, S.onChange = p, S.checked = e.value === h.stateValue.value, S.disabled = e.disabled || h.props.disabled) : S.onChange = g;
      var b = ge((y = {}, j(y, "".concat(d.value, "-wrapper"), !0), j(y, "".concat(d.value, "-wrapper-checked"), S.checked), j(y, "".concat(d.value, "-wrapper-disabled"), S.disabled), j(y, "".concat(d.value, "-wrapper-rtl"), c.value === "rtl"), y));
      return m("label", {
        class: b
      }, [m(Yy, Y(Y({}, S), {}, {
        type: "radio",
        ref: l
      }), null), o.default && m("span", null, [o.default()])]);
    };
  }
});
var D2 = Ht("large", "default", "small"), F2 = function() {
  return {
    prefixCls: String,
    value: Q.any,
    size: Q.oneOf(D2),
    options: {
      type: Array
    },
    disabled: {
      type: Boolean,
      default: void 0
    },
    name: String,
    buttonStyle: {
      type: String,
      default: "outline"
    },
    id: String,
    optionType: {
      type: String,
      default: "default"
    },
    onChange: Function,
    "onUpdate:value": Function
  };
};
const R2 = pe({
  name: "ARadioGroup",
  props: F2(),
  setup: function(e, n) {
    var r = n.slots, a = n.emit, o = jt(), i = Qe("radio", e), l = i.prefixCls, u = i.direction, s = i.size, d = G(e.value), c = G(!1);
    Ce(function() {
      return e.value;
    }, function(f) {
      d.value = f, c.value = !1;
    });
    var v = function(g) {
      var p = d.value, y = g.target.value;
      "value" in e || (d.value = y), !c.value && y !== p && (c.value = !0, a("update:value", y), a("change", g), o.onFieldChange()), vt(function() {
        c.value = !1;
      });
    };
    return ct("radioGroupContext", {
      onRadioChange: v,
      stateValue: d,
      props: e
    }), function() {
      var f, g, p = e.options, y = e.optionType, h = e.buttonStyle, w = e.id, C = w === void 0 ? o.id.value : w, x = "".concat(l.value, "-group"), S = ge(x, "".concat(x, "-").concat(h), (f = {}, j(f, "".concat(x, "-").concat(s.value), s.value), j(f, "".concat(x, "-rtl"), u.value === "rtl"), f)), b = null;
      if (p && p.length > 0) {
        var P = y === "button" ? "".concat(l.value, "-button") : l.value;
        b = p.map(function(T) {
          if (typeof T == "string" || typeof T == "number")
            return m(Xt, {
              key: T,
              prefixCls: P,
              disabled: e.disabled,
              value: T,
              checked: d.value === T
            }, {
              default: function() {
                return [T];
              }
            });
          var O = T.value, D = T.disabled, V = T.label;
          return m(Xt, {
            key: "radio-group-value-options-".concat(O),
            prefixCls: P,
            disabled: D || e.disabled,
            value: O,
            checked: d.value === O
          }, {
            default: function() {
              return [V];
            }
          });
        });
      } else
        b = (g = r.default) === null || g === void 0 ? void 0 : g.call(r);
      return m("div", {
        class: S,
        id: C
      }, [b]);
    };
  }
}), $2 = pe({
  name: "ARadioButton",
  props: qy(),
  setup: function(e, n) {
    var r = n.slots, a = Qe("radio-button", e), o = a.prefixCls, i = ut("radioGroupContext", void 0);
    return function() {
      var l, u = k(k({}, e), {
        prefixCls: o.value
      });
      return i && (u.onChange = i.onRadioChange, u.checked = u.value === i.stateValue.value, u.disabled = u.disabled || i.props.disabled), m(Xt, u, {
        default: function() {
          return [(l = r.default) === null || l === void 0 ? void 0 : l.call(r)];
        }
      });
    };
  }
});
Xt.Group = R2;
Xt.Button = $2;
Xt.install = function(t) {
  return t.component(Xt.name, Xt), t.component(Xt.Group.name, Xt.Group), t.component(Xt.Button.name, Xt.Button), t;
};
var L2 = function() {
  var e = G(/* @__PURE__ */ new Map()), n = function(a) {
    return function(o) {
      e.value.set(a, o);
    };
  };
  return Kh(function() {
    e.value = /* @__PURE__ */ new Map();
  }), [n, e];
};
const j2 = L2;
var V2 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, B2 = /^\w*$/;
function Us(t, e) {
  if (cn(t))
    return !1;
  var n = typeof t;
  return n == "number" || n == "symbol" || n == "boolean" || t == null || tl(t) ? !0 : B2.test(t) || !V2.test(t) || e != null && t in Object(e);
}
var K2 = "Expected a function";
function Ys(t, e) {
  if (typeof t != "function" || e != null && typeof e != "function")
    throw new TypeError(K2);
  var n = function() {
    var r = arguments, a = e ? e.apply(this, r) : r[0], o = n.cache;
    if (o.has(a))
      return o.get(a);
    var i = t.apply(this, r);
    return n.cache = o.set(a, i) || o, i;
  };
  return n.cache = new (Ys.Cache || zn)(), n;
}
Ys.Cache = zn;
var H2 = 500;
function z2(t) {
  var e = Ys(t, function(r) {
    return n.size === H2 && n.clear(), r;
  }), n = e.cache;
  return e;
}
var W2 = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, U2 = /\\(\\)?/g, Y2 = z2(function(t) {
  var e = [];
  return t.charCodeAt(0) === 46 && e.push(""), t.replace(W2, function(n, r, a, o) {
    e.push(a ? o.replace(U2, "$1") : r || n);
  }), e;
});
const q2 = Y2;
function il(t, e) {
  return cn(t) ? t : Us(t, e) ? [t] : q2(Gk(t));
}
var G2 = 1 / 0;
function yo(t) {
  if (typeof t == "string" || tl(t))
    return t;
  var e = t + "";
  return e == "0" && 1 / t == -G2 ? "-0" : e;
}
function qs(t, e) {
  e = il(e, t);
  for (var n = 0, r = e.length; t != null && n < r; )
    t = t[yo(e[n++])];
  return n && n == r ? t : void 0;
}
var X2 = function() {
  try {
    var t = Rr(Object, "defineProperty");
    return t({}, "", {}), t;
  } catch {
  }
}();
const Ei = X2;
function Gy(t, e, n) {
  e == "__proto__" && Ei ? Ei(t, e, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : t[e] = n;
}
var Q2 = Object.prototype, J2 = Q2.hasOwnProperty;
function Xy(t, e, n) {
  var r = t[e];
  (!(J2.call(t, e) && Zc(r, n)) || n === void 0 && !(e in t)) && Gy(t, e, n);
}
function Z2(t, e) {
  return t != null && e in Object(t);
}
function e_(t, e, n) {
  e = il(e, t);
  for (var r = -1, a = e.length, o = !1; ++r < a; ) {
    var i = yo(e[r]);
    if (!(o = t != null && n(t, i)))
      break;
    t = t[i];
  }
  return o || ++r != a ? o : (a = t == null ? 0 : t.length, !!a && as(a) && Tm(i, a) && (cn(t) || rs(t)));
}
function t_(t, e) {
  return t != null && e_(t, e, Z2);
}
var fp = un ? un.isConcatSpreadable : void 0;
function n_(t) {
  return cn(t) || rs(t) || !!(fp && t && t[fp]);
}
function Qy(t, e, n, r, a) {
  var o = -1, i = t.length;
  for (n || (n = n_), a || (a = []); ++o < i; ) {
    var l = t[o];
    e > 0 && n(l) ? e > 1 ? Qy(l, e - 1, n, r, a) : ts(a, l) : r || (a[a.length] = l);
  }
  return a;
}
function r_(t) {
  var e = t == null ? 0 : t.length;
  return e ? Qy(t, 1) : [];
}
function a_(t, e, n) {
  switch (n.length) {
    case 0:
      return t.call(e);
    case 1:
      return t.call(e, n[0]);
    case 2:
      return t.call(e, n[0], n[1]);
    case 3:
      return t.call(e, n[0], n[1], n[2]);
  }
  return t.apply(e, n);
}
var vp = Math.max;
function Jy(t, e, n) {
  return e = vp(e === void 0 ? t.length - 1 : e, 0), function() {
    for (var r = arguments, a = -1, o = vp(r.length - e, 0), i = Array(o); ++a < o; )
      i[a] = r[e + a];
    a = -1;
    for (var l = Array(e + 1); ++a < e; )
      l[a] = r[a];
    return l[e] = n(i), a_(t, this, l);
  };
}
function o_(t) {
  return function() {
    return t;
  };
}
function Gs(t) {
  return t;
}
var i_ = Ei ? function(t, e) {
  return Ei(t, "toString", {
    configurable: !0,
    enumerable: !1,
    value: o_(e),
    writable: !0
  });
} : Gs;
const l_ = i_;
var u_ = 800, c_ = 16, s_ = Date.now;
function d_(t) {
  var e = 0, n = 0;
  return function() {
    var r = s_(), a = c_ - (r - n);
    if (n = r, a > 0) {
      if (++e >= u_)
        return arguments[0];
    } else
      e = 0;
    return t.apply(void 0, arguments);
  };
}
var f_ = d_(l_);
const Zy = f_;
function v_(t) {
  return Zy(Jy(t, void 0, r_), t + "");
}
var p_ = function() {
  return Ki() && window.document.documentElement;
}, Wo, h_ = function() {
  if (!p_())
    return !1;
  if (Wo !== void 0)
    return Wo;
  var e = document.createElement("div");
  return e.style.display = "flex", e.style.flexDirection = "column", e.style.rowGap = "1px", e.appendChild(document.createElement("div")), e.appendChild(document.createElement("div")), document.body.appendChild(e), Wo = e.scrollHeight === 1, document.body.removeChild(e), Wo;
};
const g_ = function() {
  var t = G(!1);
  return dt(function() {
    t.value = h_();
  }), t;
};
var eb = Symbol("rowContextKey"), m_ = function(e) {
  ct(eb, e);
}, y_ = function() {
  return ut(eb, {
    gutter: F(function() {
    }),
    wrap: F(function() {
    }),
    supportFlexGap: F(function() {
    })
  });
};
const b_ = m_;
Ht("top", "middle", "bottom", "stretch");
Ht("start", "end", "center", "space-around", "space-between");
var C_ = function() {
  return {
    align: String,
    justify: String,
    prefixCls: String,
    gutter: {
      type: [Number, Array, Object],
      default: 0
    },
    wrap: {
      type: Boolean,
      default: void 0
    }
  };
}, w_ = pe({
  name: "ARow",
  props: C_(),
  setup: function(e, n) {
    var r = n.slots, a = Qe("row", e), o = a.prefixCls, i = a.direction, l, u = G({
      xs: !0,
      sm: !0,
      md: !0,
      lg: !0,
      xl: !0,
      xxl: !0,
      xxxl: !0
    }), s = g_();
    dt(function() {
      l = Oi.subscribe(function(f) {
        var g = e.gutter || 0;
        (!Array.isArray(g) && Le(g) === "object" || Array.isArray(g) && (Le(g[0]) === "object" || Le(g[1]) === "object")) && (u.value = f);
      });
    }), ht(function() {
      Oi.unsubscribe(l);
    });
    var d = F(function() {
      var f = [0, 0], g = e.gutter, p = g === void 0 ? 0 : g, y = Array.isArray(p) ? p : [p, 0];
      return y.forEach(function(h, w) {
        if (Le(h) === "object")
          for (var C = 0; C < Dv.length; C++) {
            var x = Dv[C];
            if (u.value[x] && h[x] !== void 0) {
              f[w] = h[x];
              break;
            }
          }
        else
          f[w] = h || 0;
      }), f;
    });
    b_({
      gutter: d,
      supportFlexGap: s,
      wrap: F(function() {
        return e.wrap;
      })
    });
    var c = F(function() {
      var f;
      return ge(o.value, (f = {}, j(f, "".concat(o.value, "-no-wrap"), e.wrap === !1), j(f, "".concat(o.value, "-").concat(e.justify), e.justify), j(f, "".concat(o.value, "-").concat(e.align), e.align), j(f, "".concat(o.value, "-rtl"), i.value === "rtl"), f));
    }), v = F(function() {
      var f = d.value, g = {}, p = f[0] > 0 ? "".concat(f[0] / -2, "px") : void 0, y = f[1] > 0 ? "".concat(f[1] / -2, "px") : void 0;
      return p && (g.marginLeft = p, g.marginRight = p), s.value ? g.rowGap = "".concat(f[1], "px") : y && (g.marginTop = y, g.marginBottom = y), g;
    });
    return function() {
      var f;
      return m("div", {
        class: c.value,
        style: v.value
      }, [(f = r.default) === null || f === void 0 ? void 0 : f.call(r)]);
    };
  }
});
const S_ = w_;
function x_(t) {
  return typeof t == "number" ? "".concat(t, " ").concat(t, " auto") : /^\d+(\.\d+)?(px|em|rem|%)$/.test(t) ? "0 0 ".concat(t) : t;
}
var P_ = function() {
  return {
    span: [String, Number],
    order: [String, Number],
    offset: [String, Number],
    push: [String, Number],
    pull: [String, Number],
    xs: {
      type: [String, Number, Object],
      default: void 0
    },
    sm: {
      type: [String, Number, Object],
      default: void 0
    },
    md: {
      type: [String, Number, Object],
      default: void 0
    },
    lg: {
      type: [String, Number, Object],
      default: void 0
    },
    xl: {
      type: [String, Number, Object],
      default: void 0
    },
    xxl: {
      type: [String, Number, Object],
      default: void 0
    },
    xxxl: {
      type: [String, Number, Object],
      default: void 0
    },
    prefixCls: String,
    flex: [String, Number]
  };
};
const tb = pe({
  name: "ACol",
  props: P_(),
  setup: function(e, n) {
    var r = n.slots, a = y_(), o = a.gutter, i = a.supportFlexGap, l = a.wrap, u = Qe("col", e), s = u.prefixCls, d = u.direction, c = F(function() {
      var f, g = e.span, p = e.order, y = e.offset, h = e.push, w = e.pull, C = s.value, x = {};
      return ["xs", "sm", "md", "lg", "xl", "xxl", "xxxl"].forEach(function(S) {
        var b, P = {}, T = e[S];
        typeof T == "number" ? P.span = T : Le(T) === "object" && (P = T || {}), x = k(k({}, x), (b = {}, j(b, "".concat(C, "-").concat(S, "-").concat(P.span), P.span !== void 0), j(b, "".concat(C, "-").concat(S, "-order-").concat(P.order), P.order || P.order === 0), j(b, "".concat(C, "-").concat(S, "-offset-").concat(P.offset), P.offset || P.offset === 0), j(b, "".concat(C, "-").concat(S, "-push-").concat(P.push), P.push || P.push === 0), j(b, "".concat(C, "-").concat(S, "-pull-").concat(P.pull), P.pull || P.pull === 0), j(b, "".concat(C, "-rtl"), d.value === "rtl"), b));
      }), ge(C, (f = {}, j(f, "".concat(C, "-").concat(g), g !== void 0), j(f, "".concat(C, "-order-").concat(p), p), j(f, "".concat(C, "-offset-").concat(y), y), j(f, "".concat(C, "-push-").concat(h), h), j(f, "".concat(C, "-pull-").concat(w), w), f), x);
    }), v = F(function() {
      var f = e.flex, g = o.value, p = {};
      if (g && g[0] > 0) {
        var y = "".concat(g[0] / 2, "px");
        p.paddingLeft = y, p.paddingRight = y;
      }
      if (g && g[1] > 0 && !i.value) {
        var h = "".concat(g[1] / 2, "px");
        p.paddingTop = h, p.paddingBottom = h;
      }
      return f && (p.flex = x_(f), l.value === !1 && !p.minWidth && (p.minWidth = 0)), p;
    });
    return function() {
      var f;
      return m("div", {
        class: c.value,
        style: v.value
      }, [(f = r.default) === null || f === void 0 ? void 0 : f.call(r)]);
    };
  }
});
var O_ = function() {
  return mn.Date.now();
};
const Yl = O_;
var T_ = "Expected a function", I_ = Math.max, k_ = Math.min;
function __(t, e, n) {
  var r, a, o, i, l, u, s = 0, d = !1, c = !1, v = !0;
  if (typeof t != "function")
    throw new TypeError(T_);
  e = Qu(e) || 0, Kn(n) && (d = !!n.leading, c = "maxWait" in n, o = c ? I_(Qu(n.maxWait) || 0, e) : o, v = "trailing" in n ? !!n.trailing : v);
  function f(b) {
    var P = r, T = a;
    return r = a = void 0, s = b, i = t.apply(T, P), i;
  }
  function g(b) {
    return s = b, l = setTimeout(h, e), d ? f(b) : i;
  }
  function p(b) {
    var P = b - u, T = b - s, O = e - P;
    return c ? k_(O, o - T) : O;
  }
  function y(b) {
    var P = b - u, T = b - s;
    return u === void 0 || P >= e || P < 0 || c && T >= o;
  }
  function h() {
    var b = Yl();
    if (y(b))
      return w(b);
    l = setTimeout(h, p(b));
  }
  function w(b) {
    return l = void 0, v && r ? f(b) : (r = a = void 0, i);
  }
  function C() {
    l !== void 0 && clearTimeout(l), s = 0, r = u = a = l = void 0;
  }
  function x() {
    return l === void 0 ? i : w(Yl());
  }
  function S() {
    var b = Yl(), P = y(b);
    if (r = arguments, a = this, u = b, P) {
      if (l === void 0)
        return g(u);
      if (c)
        return clearTimeout(l), l = setTimeout(h, e), f(u);
    }
    return l === void 0 && (l = setTimeout(h, e)), i;
  }
  return S.cancel = C, S.flush = x, S;
}
var Xs = "__RC_CASCADER_SPLIT__", E_ = "SHOW_PARENT", N_ = "SHOW_CHILD";
function nr(t) {
  return t.join(Xs);
}
function Zr(t) {
  return t.map(nr);
}
function M_(t) {
  return t.split(Xs);
}
function A_(t) {
  var e = t || {}, n = e.label, r = e.value, a = e.children, o = r || "value";
  return {
    label: n || "label",
    value: o,
    key: o,
    children: a || "children"
  };
}
function Ma(t, e) {
  var n, r;
  return (n = t.isLeaf) !== null && n !== void 0 ? n : !(!((r = t[e.children]) === null || r === void 0) && r.length);
}
function D_(t) {
  var e = t.parentElement;
  if (!!e) {
    var n = t.offsetTop - e.offsetTop;
    n - e.scrollTop < 0 ? e.scrollTo({
      top: n
    }) : n + t.offsetHeight - e.scrollTop > e.offsetHeight && e.scrollTo({
      top: n + t.offsetHeight - e.offsetHeight
    });
  }
}
var nb = Symbol("TreeContextKey"), F_ = pe({
  name: "TreeContext",
  props: {
    value: {
      type: Object
    }
  },
  setup: function(e, n) {
    var r = n.slots;
    return ct(nb, F(function() {
      return e.value;
    })), function() {
      var a;
      return (a = r.default) === null || a === void 0 ? void 0 : a.call(r);
    };
  }
}), Qs = function() {
  return ut(nb, F(function() {
    return {};
  }));
}, rb = Symbol("KeysStateKey"), R_ = function(e) {
  ct(rb, e);
}, ab = function() {
  return ut(rb, {
    expandedKeys: Xe([]),
    selectedKeys: Xe([]),
    loadedKeys: Xe([]),
    loadingKeys: Xe([]),
    checkedKeys: Xe([]),
    halfCheckedKeys: Xe([]),
    expandedKeysSet: F(function() {
      return /* @__PURE__ */ new Set();
    }),
    selectedKeysSet: F(function() {
      return /* @__PURE__ */ new Set();
    }),
    loadedKeysSet: F(function() {
      return /* @__PURE__ */ new Set();
    }),
    loadingKeysSet: F(function() {
      return /* @__PURE__ */ new Set();
    }),
    checkedKeysSet: F(function() {
      return /* @__PURE__ */ new Set();
    }),
    halfCheckedKeysSet: F(function() {
      return /* @__PURE__ */ new Set();
    }),
    flattenNodes: Xe([])
  });
}, $_ = function(e) {
  for (var n = e.prefixCls, r = e.level, a = e.isStart, o = e.isEnd, i = "".concat(n, "-indent-unit"), l = [], u = 0; u < r; u += 1) {
    var s;
    l.push(m("span", {
      key: u,
      class: (s = {}, j(s, i, !0), j(s, "".concat(i, "-start"), a[u]), j(s, "".concat(i, "-end"), o[u]), s)
    }, null));
  }
  return m("span", {
    "aria-hidden": "true",
    class: "".concat(n, "-indent")
  }, [l]);
};
const L_ = $_;
var ob = {
  eventKey: [String, Number],
  prefixCls: String,
  title: Q.any,
  data: {
    type: Object,
    default: void 0
  },
  parent: {
    type: Object,
    default: void 0
  },
  isStart: {
    type: Array
  },
  isEnd: {
    type: Array
  },
  active: {
    type: Boolean,
    default: void 0
  },
  onMousemove: {
    type: Function
  },
  isLeaf: {
    type: Boolean,
    default: void 0
  },
  checkable: {
    type: Boolean,
    default: void 0
  },
  selectable: {
    type: Boolean,
    default: void 0
  },
  disabled: {
    type: Boolean,
    default: void 0
  },
  disableCheckbox: {
    type: Boolean,
    default: void 0
  },
  icon: Q.any,
  switcherIcon: Q.any,
  domRef: {
    type: Function
  }
}, j_ = {
  prefixCls: {
    type: String
  },
  motion: {
    type: Object
  },
  focusable: {
    type: Boolean
  },
  activeItem: {
    type: Object
  },
  focused: {
    type: Boolean
  },
  tabindex: {
    type: Number
  },
  checkable: {
    type: Boolean
  },
  selectable: {
    type: Boolean
  },
  disabled: {
    type: Boolean
  },
  height: {
    type: Number
  },
  itemHeight: {
    type: Number
  },
  virtual: {
    type: Boolean
  },
  onScroll: {
    type: Function
  },
  onKeydown: {
    type: Function
  },
  onFocus: {
    type: Function
  },
  onBlur: {
    type: Function
  },
  onActiveChange: {
    type: Function
  },
  onContextmenu: {
    type: Function
  },
  onListChangeStart: {
    type: Function
  },
  onListChangeEnd: {
    type: Function
  }
}, V_ = function() {
  return {
    prefixCls: String,
    focusable: {
      type: Boolean,
      default: void 0
    },
    activeKey: [Number, String],
    tabindex: Number,
    children: Q.any,
    treeData: {
      type: Array
    },
    fieldNames: {
      type: Object
    },
    showLine: {
      type: [Boolean, Object],
      default: void 0
    },
    showIcon: {
      type: Boolean,
      default: void 0
    },
    icon: Q.any,
    selectable: {
      type: Boolean,
      default: void 0
    },
    disabled: {
      type: Boolean,
      default: void 0
    },
    multiple: {
      type: Boolean,
      default: void 0
    },
    checkable: {
      type: Boolean,
      default: void 0
    },
    checkStrictly: {
      type: Boolean,
      default: void 0
    },
    draggable: {
      type: [Function, Boolean]
    },
    defaultExpandParent: {
      type: Boolean,
      default: void 0
    },
    autoExpandParent: {
      type: Boolean,
      default: void 0
    },
    defaultExpandAll: {
      type: Boolean,
      default: void 0
    },
    defaultExpandedKeys: {
      type: Array
    },
    expandedKeys: {
      type: Array
    },
    defaultCheckedKeys: {
      type: Array
    },
    checkedKeys: {
      type: [Object, Array]
    },
    defaultSelectedKeys: {
      type: Array
    },
    selectedKeys: {
      type: Array
    },
    allowDrop: {
      type: Function
    },
    dropIndicatorRender: {
      type: Function
    },
    onFocus: {
      type: Function
    },
    onBlur: {
      type: Function
    },
    onKeydown: {
      type: Function
    },
    onContextmenu: {
      type: Function
    },
    onClick: {
      type: Function
    },
    onDblclick: {
      type: Function
    },
    onScroll: {
      type: Function
    },
    onExpand: {
      type: Function
    },
    onCheck: {
      type: Function
    },
    onSelect: {
      type: Function
    },
    onLoad: {
      type: Function
    },
    loadData: {
      type: Function
    },
    loadedKeys: {
      type: Array
    },
    onMouseenter: {
      type: Function
    },
    onMouseleave: {
      type: Function
    },
    onRightClick: {
      type: Function
    },
    onDragstart: {
      type: Function
    },
    onDragenter: {
      type: Function
    },
    onDragover: {
      type: Function
    },
    onDragleave: {
      type: Function
    },
    onDragend: {
      type: Function
    },
    onDrop: {
      type: Function
    },
    onActiveChange: {
      type: Function
    },
    filterTreeNode: {
      type: Function
    },
    motion: Q.any,
    switcherIcon: Q.any,
    height: Number,
    itemHeight: Number,
    virtual: {
      type: Boolean,
      default: void 0
    },
    direction: {
      type: String
    }
  };
}, B_ = globalThis && globalThis.__rest || function(t, e) {
  var n = {};
  for (var r in t)
    Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(t); a < r.length; a++)
      e.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[a]) && (n[r[a]] = t[r[a]]);
  return n;
}, pp = "open", hp = "close", K_ = "---";
const gp = pe({
  name: "TreeNode",
  inheritAttrs: !1,
  props: ob,
  isTreeNode: 1,
  slots: ["title", "icon", "switcherIcon"],
  setup: function(e, n) {
    var r = n.attrs, a = n.slots, o = n.expose;
    Ze(!("slots" in e.data), "treeData slots is deprecated, please use ".concat(Object.keys(e.data.slots || {}).map(function(he) {
      return "`v-slot:" + he + "` ";
    }), "instead"));
    var i = G(!1), l = Qs(), u = ab(), s = u.expandedKeysSet, d = u.selectedKeysSet, c = u.loadedKeysSet, v = u.loadingKeysSet, f = u.checkedKeysSet, g = u.halfCheckedKeysSet, p = l.value, y = p.dragOverNodeKey, h = p.dropPosition, w = p.keyEntities, C = F(function() {
      return ic(e.eventKey, {
        expandedKeysSet: s.value,
        selectedKeysSet: d.value,
        loadedKeysSet: c.value,
        loadingKeysSet: v.value,
        checkedKeysSet: f.value,
        halfCheckedKeysSet: g.value,
        dragOverNodeKey: y,
        dropPosition: h,
        keyEntities: w
      });
    }), x = xn(function() {
      return C.value.expanded;
    }), S = xn(function() {
      return C.value.selected;
    }), b = xn(function() {
      return C.value.checked;
    }), P = xn(function() {
      return C.value.loaded;
    }), T = xn(function() {
      return C.value.loading;
    }), O = xn(function() {
      return C.value.halfChecked;
    }), D = xn(function() {
      return C.value.dragOver;
    }), V = xn(function() {
      return C.value.dragOverGapTop;
    }), K = xn(function() {
      return C.value.dragOverGapBottom;
    }), R = xn(function() {
      return C.value.pos;
    }), E = G(), M = F(function() {
      var he = e.eventKey, oe = l.value.keyEntities, ve = oe[he] || {}, Se = ve.children;
      return !!(Se || []).length;
    }), N = F(function() {
      var he = e.isLeaf, oe = l.value.loadData, ve = M.value;
      return he === !1 ? !1 : he || !oe && !ve || oe && P.value && !ve;
    }), _ = F(function() {
      return N.value ? null : x.value ? pp : hp;
    }), I = F(function() {
      var he = e.disabled, oe = l.value.disabled;
      return !!(oe || he);
    }), A = F(function() {
      var he = e.checkable, oe = l.value.checkable;
      return !oe || he === !1 ? !1 : oe;
    }), B = F(function() {
      var he = e.selectable, oe = l.value.selectable;
      return typeof he == "boolean" ? he : oe;
    }), W = F(function() {
      var he = e.data, oe = e.active, ve = e.checkable, Se = e.disableCheckbox, se = e.disabled, ee = e.selectable;
      return k(k({
        active: oe,
        checkable: ve,
        disableCheckbox: Se,
        disabled: se,
        selectable: ee
      }, he), {
        dataRef: he,
        data: he,
        isLeaf: N.value,
        checked: b.value,
        expanded: x.value,
        loading: T.value,
        selected: S.value,
        halfChecked: O.value
      });
    }), U = sn(), z = F(function() {
      var he = e.eventKey, oe = l.value.keyEntities, ve = oe[he] || {}, Se = ve.parent;
      return k(k({}, lc(k({}, e, C.value))), {
        parent: Se
      });
    }), L = Mt({
      eventData: z,
      eventKey: F(function() {
        return e.eventKey;
      }),
      selectHandle: E,
      pos: R,
      key: U.vnode.key
    });
    o(L);
    var $ = function(oe) {
      var ve = l.value.onNodeDoubleClick;
      ve(oe, z.value);
    }, q = function(oe) {
      if (!I.value) {
        var ve = l.value.onNodeSelect;
        oe.preventDefault(), ve(oe, z.value);
      }
    }, H = function(oe) {
      if (!I.value) {
        var ve = e.disableCheckbox, Se = l.value.onNodeCheck;
        if (!(!A.value || ve)) {
          oe.preventDefault();
          var se = !b.value;
          Se(oe, z.value, se);
        }
      }
    }, J = function(oe) {
      var ve = l.value.onNodeClick;
      ve(oe, z.value), B.value ? q(oe) : H(oe);
    }, Z = function(oe) {
      var ve = l.value.onNodeMouseEnter;
      ve(oe, z.value);
    }, ae = function(oe) {
      var ve = l.value.onNodeMouseLeave;
      ve(oe, z.value);
    }, ue = function(oe) {
      var ve = l.value.onNodeContextMenu;
      ve(oe, z.value);
    }, ne = function(oe) {
      var ve = l.value.onNodeDragStart;
      oe.stopPropagation(), i.value = !0, ve(oe, L);
      try {
        oe.dataTransfer.setData("text/plain", "");
      } catch {
      }
    }, X = function(oe) {
      var ve = l.value.onNodeDragEnter;
      oe.preventDefault(), oe.stopPropagation(), ve(oe, L);
    }, te = function(oe) {
      var ve = l.value.onNodeDragOver;
      oe.preventDefault(), oe.stopPropagation(), ve(oe, L);
    }, me = function(oe) {
      var ve = l.value.onNodeDragLeave;
      oe.stopPropagation(), ve(oe, L);
    }, Oe = function(oe) {
      var ve = l.value.onNodeDragEnd;
      oe.stopPropagation(), i.value = !1, ve(oe, L);
    }, ke = function(oe) {
      var ve = l.value.onNodeDrop;
      oe.preventDefault(), oe.stopPropagation(), i.value = !1, ve(oe, L);
    }, Me = function(oe) {
      var ve = l.value.onNodeExpand;
      T.value || ve(oe, z.value);
    }, Pe = function() {
      var oe = e.data, ve = l.value.draggable;
      return !!(ve && (!ve.nodeDraggable || ve.nodeDraggable(oe)));
    }, fe = function() {
      var oe = l.value, ve = oe.draggable, Se = oe.prefixCls;
      return ve != null && ve.icon ? m("span", {
        class: "".concat(Se, "-draggable-icon")
      }, [ve.icon]) : null;
    }, le = function() {
      var oe, ve, Se, se = e.switcherIcon, ee = se === void 0 ? a.switcherIcon || ((oe = l.value.slots) === null || oe === void 0 ? void 0 : oe[(Se = (ve = e.data) === null || ve === void 0 ? void 0 : ve.slots) === null || Se === void 0 ? void 0 : Se.switcherIcon]) : se, re = l.value.switcherIcon, ce = ee || re;
      return typeof ce == "function" ? ce(W.value) : ce;
    }, ie = function() {
      var oe = l.value, ve = oe.loadData, Se = oe.onNodeLoad;
      T.value || ve && x.value && !N.value && !M.value && !P.value && Se(z.value);
    };
    dt(function() {
      ie();
    }), kr(function() {
      ie();
    });
    var de = function() {
      var oe = l.value.prefixCls, ve = le();
      if (N.value)
        return ve !== !1 ? m("span", {
          class: ge("".concat(oe, "-switcher"), "".concat(oe, "-switcher-noop"))
        }, [ve]) : null;
      var Se = ge("".concat(oe, "-switcher"), "".concat(oe, "-switcher_").concat(x.value ? pp : hp));
      return ve !== !1 ? m("span", {
        onClick: Me,
        class: Se
      }, [ve]) : null;
    }, ye = function() {
      var oe, ve, Se = e.disableCheckbox, se = l.value.prefixCls, ee = I.value, re = A.value;
      return re ? m("span", {
        class: ge("".concat(se, "-checkbox"), b.value && "".concat(se, "-checkbox-checked"), !b.value && O.value && "".concat(se, "-checkbox-indeterminate"), (ee || Se) && "".concat(se, "-checkbox-disabled")),
        onClick: H
      }, [(ve = (oe = l.value).customCheckable) === null || ve === void 0 ? void 0 : ve.call(oe)]) : null;
    }, _e = function() {
      var oe = l.value.prefixCls;
      return m("span", {
        class: ge("".concat(oe, "-iconEle"), "".concat(oe, "-icon__").concat(_.value || "docu"), T.value && "".concat(oe, "-icon_loading"))
      }, null);
    }, Be = function() {
      var oe = e.disabled, ve = e.eventKey, Se = l.value, se = Se.draggable, ee = Se.dropLevelOffset, re = Se.dropPosition, ce = Se.prefixCls, Ee = Se.indent, Te = Se.dropIndicatorRender, we = Se.dragOverNodeKey, be = Se.direction, Ae = se !== !1, je = !oe && Ae && we === ve;
      return je ? Te({
        dropPosition: re,
        dropLevelOffset: ee,
        indent: Ee,
        prefixCls: ce,
        direction: be
      }) : null;
    }, Ve = function() {
      var oe, ve, Se, se, ee, re, ce = e.icon, Ee = ce === void 0 ? a.icon : ce, Te = e.data, we = a.title || ((oe = l.value.slots) === null || oe === void 0 ? void 0 : oe[(Se = (ve = e.data) === null || ve === void 0 ? void 0 : ve.slots) === null || Se === void 0 ? void 0 : Se.title]) || ((se = l.value.slots) === null || se === void 0 ? void 0 : se.title) || e.title, be = l.value, Ae = be.prefixCls, je = be.showIcon, We = be.icon, et = be.loadData, Ge = I.value, it = "".concat(Ae, "-node-content-wrapper"), nt;
      if (je) {
        var lt = Ee || ((ee = l.value.slots) === null || ee === void 0 ? void 0 : ee[(re = Te == null ? void 0 : Te.slots) === null || re === void 0 ? void 0 : re.icon]) || We;
        nt = lt ? m("span", {
          class: ge("".concat(Ae, "-iconEle"), "".concat(Ae, "-icon__customize"))
        }, [typeof lt == "function" ? lt(W.value) : lt]) : _e();
      } else
        et && T.value && (nt = _e());
      var at;
      typeof we == "function" ? at = we(W.value) : at = we, at = at === void 0 ? K_ : at;
      var rt = m("span", {
        class: "".concat(Ae, "-title")
      }, [at]);
      return m("span", {
        ref: E,
        title: typeof we == "string" ? we : "",
        class: ge("".concat(it), "".concat(it, "-").concat(_.value || "normal"), !Ge && (S.value || i.value) && "".concat(Ae, "-node-selected")),
        onMouseenter: Z,
        onMouseleave: ae,
        onContextmenu: ue,
        onClick: J,
        onDblclick: $
      }, [nt, rt, Be()]);
    };
    return function() {
      var he, oe = k(k({}, e), r), ve = oe.eventKey, Se = oe.isLeaf, se = oe.isStart, ee = oe.isEnd, re = oe.domRef, ce = oe.active;
      oe.data;
      var Ee = oe.onMousemove, Te = oe.selectable, we = B_(oe, ["eventKey", "isLeaf", "isStart", "isEnd", "domRef", "active", "data", "onMousemove", "selectable"]), be = l.value, Ae = be.prefixCls, je = be.filterTreeNode, We = be.keyEntities, et = be.dropContainerKey, Ge = be.dropTargetKey, it = be.draggingNodeKey, nt = I.value, lt = ya(we, {
        aria: !0,
        data: !0
      }), at = We[ve] || {}, rt = at.level, yt = ee[ee.length - 1], It = Pe(), Dt = !nt && It, wt = it === ve, xt = Te !== void 0 ? {
        "aria-selected": !!Te
      } : void 0;
      return m("div", Y(Y({
        ref: re,
        class: ge(r.class, "".concat(Ae, "-treenode"), (he = {}, j(he, "".concat(Ae, "-treenode-disabled"), nt), j(he, "".concat(Ae, "-treenode-switcher-").concat(x.value ? "open" : "close"), !Se), j(he, "".concat(Ae, "-treenode-checkbox-checked"), b.value), j(he, "".concat(Ae, "-treenode-checkbox-indeterminate"), O.value), j(he, "".concat(Ae, "-treenode-selected"), S.value), j(he, "".concat(Ae, "-treenode-loading"), T.value), j(he, "".concat(Ae, "-treenode-active"), ce), j(he, "".concat(Ae, "-treenode-leaf-last"), yt), j(he, "".concat(Ae, "-treenode-draggable"), Dt), j(he, "dragging", wt), j(he, "drop-target", Ge === ve), j(he, "drop-container", et === ve), j(he, "drag-over", !nt && D.value), j(he, "drag-over-gap-top", !nt && V.value), j(he, "drag-over-gap-bottom", !nt && K.value), j(he, "filter-node", je && je(z.value)), he)),
        style: r.style,
        draggable: Dt,
        "aria-grabbed": wt,
        onDragstart: Dt ? ne : void 0,
        onDragenter: It ? X : void 0,
        onDragover: It ? te : void 0,
        onDragleave: It ? me : void 0,
        onDrop: It ? ke : void 0,
        onDragend: It ? Oe : void 0,
        onMousemove: Ee
      }, xt), lt), [m(L_, {
        prefixCls: Ae,
        level: rt,
        isStart: se,
        isEnd: ee
      }, null), fe(), de(), ye(), Ve()]);
    };
  }
});
globalThis && globalThis.__rest;
function Gn(t, e) {
  if (!t)
    return [];
  var n = t.slice(), r = n.indexOf(e);
  return r >= 0 && n.splice(r, 1), n;
}
function gr(t, e) {
  var n = (t || []).slice();
  return n.indexOf(e) === -1 && n.push(e), n;
}
function Js(t) {
  return t.split("-");
}
function ib(t, e) {
  return "".concat(t, "-").concat(e);
}
function H_(t) {
  return t && t.type && t.type.isTreeNode;
}
function z_(t, e) {
  var n = [], r = e[t];
  function a() {
    var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    o.forEach(function(i) {
      var l = i.key, u = i.children;
      n.push(l), a(u);
    });
  }
  return a(r.children), n;
}
function W_(t) {
  if (t.parent) {
    var e = Js(t.pos);
    return Number(e[e.length - 1]) === t.parent.children.length - 1;
  }
  return !1;
}
function U_(t) {
  var e = Js(t.pos);
  return Number(e[e.length - 1]) === 0;
}
function mp(t, e, n, r, a, o, i, l, u, s) {
  var d, c = t.clientX, v = t.clientY, f = t.target.getBoundingClientRect(), g = f.top, p = f.height, y = (s === "rtl" ? -1 : 1) * (((a == null ? void 0 : a.x) || 0) - c), h = (y - 12) / r, w = l[n.eventKey];
  if (v < g + p / 2) {
    var C = i.findIndex(function(M) {
      return M.key === w.key;
    }), x = C <= 0 ? 0 : C - 1, S = i[x].key;
    w = l[S];
  }
  var b = w.key, P = w, T = w.key, O = 0, D = 0;
  if (!u.has(b))
    for (var V = 0; V < h && W_(w); V += 1)
      w = w.parent, D += 1;
  var K = e.eventData, R = w.node, E = !0;
  return U_(w) && w.level === 0 && v < g + p / 2 && o({
    dragNode: K,
    dropNode: R,
    dropPosition: -1
  }) && w.key === n.eventKey ? O = -1 : (P.children || []).length && u.has(T) ? o({
    dragNode: K,
    dropNode: R,
    dropPosition: 0
  }) ? O = 0 : E = !1 : D === 0 ? h > -1.5 ? o({
    dragNode: K,
    dropNode: R,
    dropPosition: 1
  }) ? O = 1 : E = !1 : o({
    dragNode: K,
    dropNode: R,
    dropPosition: 0
  }) ? O = 0 : o({
    dragNode: K,
    dropNode: R,
    dropPosition: 1
  }) ? O = 1 : E = !1 : o({
    dragNode: K,
    dropNode: R,
    dropPosition: 1
  }) ? O = 1 : E = !1, {
    dropPosition: O,
    dropLevelOffset: D,
    dropTargetKey: w.key,
    dropTargetPos: w.pos,
    dragOverNodeKey: T,
    dropContainerKey: O === 0 ? null : ((d = w.parent) === null || d === void 0 ? void 0 : d.key) || null,
    dropAllowed: E
  };
}
function yp(t, e) {
  if (!!t) {
    var n = e.multiple;
    return n ? t.slice() : t.length ? [t[0]] : t;
  }
}
function ql(t) {
  if (!t)
    return null;
  var e;
  if (Array.isArray(t))
    e = {
      checkedKeys: t,
      halfCheckedKeys: void 0
    };
  else if (Le(t) === "object")
    e = {
      checkedKeys: t.checked || void 0,
      halfCheckedKeys: t.halfChecked || void 0
    };
  else
    return Ze(!1, "`checkedKeys` is not an array or an object"), null;
  return e;
}
function bp(t, e) {
  var n = /* @__PURE__ */ new Set();
  function r(a) {
    if (!n.has(a)) {
      var o = e[a];
      if (!!o) {
        n.add(a);
        var i = o.parent, l = o.node;
        l.disabled || i && r(i.key);
      }
    }
  }
  return (t || []).forEach(function(a) {
    r(a);
  }), Ie(n);
}
var Y_ = globalThis && globalThis.__rest || function(t, e) {
  var n = {};
  for (var r in t)
    Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(t); a < r.length; a++)
      e.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[a]) && (n[r[a]] = t[r[a]]);
  return n;
};
function bo(t, e) {
  return t != null ? t : e;
}
function Zs(t) {
  var e = t || {}, n = e.title, r = e._title, a = e.key, o = e.children, i = n || "title";
  return {
    title: i,
    _title: r || [i],
    key: a || "key",
    children: o || "children"
  };
}
function q_(t) {
  function e() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], r = yn(n);
    return r.map(function(a) {
      var o, i, l, u;
      if (!H_(a))
        return Ze(!a, "Tree/TreeNode can only accept TreeNode as children."), null;
      for (var s = a.children || {}, d = a.key, c = {}, v = 0, f = Object.entries(a.props); v < f.length; v++) {
        var g = De(f[v], 2), p = g[0], y = g[1];
        c[Hh(p)] = y;
      }
      var h = c.isLeaf, w = c.checkable, C = c.selectable, x = c.disabled, S = c.disableCheckbox, b = {
        isLeaf: h || h === "" || void 0,
        checkable: w || w === "" || void 0,
        selectable: C || C === "" || void 0,
        disabled: x || x === "" || void 0,
        disableCheckbox: S || S === "" || void 0
      }, P = k(k({}, c), b), T = c.title, O = T === void 0 ? (o = s.title) === null || o === void 0 ? void 0 : o.call(s, P) : T, D = c.icon, V = D === void 0 ? (i = s.icon) === null || i === void 0 ? void 0 : i.call(s, P) : D, K = c.switcherIcon, R = K === void 0 ? (l = s.switcherIcon) === null || l === void 0 ? void 0 : l.call(s, P) : K, E = Y_(c, ["title", "icon", "switcherIcon"]), M = (u = s.default) === null || u === void 0 ? void 0 : u.call(s), N = k(k(k({}, E), {
        title: O,
        icon: V,
        switcherIcon: R,
        key: d,
        isLeaf: h
      }), b), _ = e(M);
      return _.length && (N.children = _), N;
    });
  }
  return e(t);
}
function G_(t, e, n) {
  var r = Zs(n), a = r._title, o = r.key, i = r.children, l = new Set(e === !0 ? [] : e), u = [];
  function s(d) {
    var c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
    return d.map(function(v, f) {
      for (var g = ib(c ? c.pos : "0", f), p = bo(v[o], g), y, h = 0; h < a.length; h += 1) {
        var w = a[h];
        if (v[w] !== void 0) {
          y = v[w];
          break;
        }
      }
      var C = k(k({}, pt(v, [].concat(Ie(a), [o, i]))), {
        title: y,
        key: p,
        parent: c,
        pos: g,
        children: null,
        data: v,
        isStart: [].concat(Ie(c ? c.isStart : []), [f === 0]),
        isEnd: [].concat(Ie(c ? c.isEnd : []), [f === d.length - 1])
      });
      return u.push(C), e === !0 || l.has(p) ? C.children = s(v[i] || [], C) : C.children = [], C;
    });
  }
  return s(t), u;
}
function X_(t, e, n) {
  var r = {};
  Le(n) === "object" ? r = n : r = {
    externalGetKey: n
  }, r = r || {};
  var a = r, o = a.childrenPropName, i = a.externalGetKey, l = a.fieldNames, u = Zs(l), s = u.key, d = u.children, c = o || d, v;
  i ? typeof i == "string" ? v = function(p) {
    return p[i];
  } : typeof i == "function" && (v = function(p) {
    return i(p);
  }) : v = function(p, y) {
    return bo(p[s], y);
  };
  function f(g, p, y, h) {
    var w = g ? g[c] : t, C = g ? ib(y.pos, p) : "0", x = g ? [].concat(Ie(h), [g]) : [];
    if (g) {
      var S = v(g, C), b = {
        node: g,
        index: p,
        pos: C,
        key: S,
        parentPos: y.node ? y.pos : null,
        level: y.level + 1,
        nodes: x
      };
      e(b);
    }
    w && w.forEach(function(P, T) {
      f(P, T, {
        node: g,
        pos: C,
        level: y ? y.level + 1 : -1
      }, x);
    });
  }
  f(null);
}
function ed(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = e.initWrapper, r = e.processEntity, a = e.onProcessFinished, o = e.externalGetKey, i = e.childrenPropName, l = e.fieldNames, u = arguments.length > 2 ? arguments[2] : void 0, s = o || u, d = {}, c = {}, v = {
    posEntities: d,
    keyEntities: c
  };
  return n && (v = n(v) || v), X_(t, function(f) {
    var g = f.node, p = f.index, y = f.pos, h = f.key, w = f.parentPos, C = f.level, x = f.nodes, S = {
      node: g,
      nodes: x,
      index: p,
      key: h,
      pos: y,
      level: C
    }, b = bo(h, y);
    d[y] = S, c[b] = S, S.parent = d[w], S.parent && (S.parent.children = S.parent.children || [], S.parent.children.push(S)), r && r(S, v);
  }, {
    externalGetKey: s,
    childrenPropName: i,
    fieldNames: l
  }), a && a(v), v;
}
function ic(t, e) {
  var n = e.expandedKeysSet, r = e.selectedKeysSet, a = e.loadedKeysSet, o = e.loadingKeysSet, i = e.checkedKeysSet, l = e.halfCheckedKeysSet, u = e.dragOverNodeKey, s = e.dropPosition, d = e.keyEntities, c = d[t], v = {
    eventKey: t,
    expanded: n.has(t),
    selected: r.has(t),
    loaded: a.has(t),
    loading: o.has(t),
    checked: i.has(t),
    halfChecked: l.has(t),
    pos: String(c ? c.pos : ""),
    parent: c.parent,
    dragOver: u === t && s === 0,
    dragOverGapTop: u === t && s === -1,
    dragOverGapBottom: u === t && s === 1
  };
  return v;
}
function lc(t) {
  var e = t.data, n = t.expanded, r = t.selected, a = t.checked, o = t.loaded, i = t.loading, l = t.halfChecked, u = t.dragOver, s = t.dragOverGapTop, d = t.dragOverGapBottom, c = t.pos, v = t.active, f = t.eventKey, g = k(k({
    dataRef: e
  }, e), {
    expanded: n,
    selected: r,
    checked: a,
    loaded: o,
    loading: i,
    halfChecked: l,
    dragOver: u,
    dragOverGapTop: s,
    dragOverGapBottom: d,
    pos: c,
    active: v,
    eventKey: f,
    key: f
  });
  return "props" in g || Object.defineProperty(g, "props", {
    get: function() {
      return Ze(!1, "Second param return from event is node data instead of TreeNode instance. Please read value directly instead of reading from `props`."), t;
    }
  }), g;
}
const Q_ = function(t, e) {
  var n = F(function() {
    return ed(t.value, {
      fieldNames: e.value,
      initWrapper: function(a) {
        return k(k({}, a), {
          pathKeyEntities: {}
        });
      },
      processEntity: function(a, o) {
        var i = a.nodes.map(function(l) {
          return l[e.value.value];
        }).join(Xs);
        o.pathKeyEntities[i] = a, a.key = i;
      }
    }).pathKeyEntities;
  });
  return n;
};
function J_(t) {
  var e = G(!1), n = G({});
  return Ue(function() {
    if (!t.value) {
      e.value = !1, n.value = {};
      return;
    }
    var r = {
      matchInputWidth: !0,
      limit: 50
    };
    t.value && Le(t.value) === "object" && (r = k(k({}, r), t.value)), r.limit <= 0 && (delete r.limit, process.env.NODE_ENV !== "production" && Ze(!1, "'limit' of showSearch should be positive number or false.")), e.value = !0, n.value = r;
  }), {
    showSearch: e,
    searchConfig: n
  };
}
var Va = "__rc_cascader_search_mark__", Z_ = function(e, n, r) {
  var a = r.label;
  return n.some(function(o) {
    return String(o[a]).toLowerCase().includes(e.toLowerCase());
  });
}, eE = function(e) {
  var n = e.path, r = e.fieldNames;
  return n.map(function(a) {
    return a[r.label];
  }).join(" / ");
};
const tE = function(t, e, n, r, a, o) {
  return F(function() {
    var i = a.value, l = i.filter, u = l === void 0 ? Z_ : l, s = i.render, d = s === void 0 ? eE : s, c = i.limit, v = c === void 0 ? 50 : c, f = i.sort, g = [];
    if (!t.value)
      return [];
    function p(y, h) {
      y.forEach(function(w) {
        if (!(!f && v > 0 && g.length >= v)) {
          var C = [].concat(Ie(h), [w]), x = w[n.value.children];
          if ((!x || x.length === 0 || o.value) && u(t.value, C, {
            label: n.value.label
          })) {
            var S;
            g.push(k(k({}, w), (S = {}, j(S, n.value.label, d({
              inputValue: t.value,
              path: C,
              prefixCls: r.value,
              fieldNames: n.value
            })), j(S, Va, C), S)));
          }
          x && p(w[n.value.children], C);
        }
      });
    }
    return p(e.value, []), f && g.sort(function(y, h) {
      return f(y[Va], h[Va], t.value, n.value);
    }), v > 0 ? g.slice(0, v) : g;
  });
};
function Cp(t, e, n) {
  var r = new Set(t);
  return t.filter(function(a) {
    var o = e[a], i = o ? o.parent : null, l = o ? o.children : null;
    return n === N_ ? !(l && l.some(function(u) {
      return u.key && r.has(u.key);
    })) : !(i && !i.node.disabled && r.has(i.key));
  });
}
function ao(t, e, n) {
  for (var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1, a, o = e, i = [], l = function(d) {
    var c = t[d], v = o == null ? void 0 : o.findIndex(function(g) {
      var p = g[n.value];
      return r ? String(p) === String(c) : p === c;
    }), f = v !== -1 ? o == null ? void 0 : o[v] : null;
    i.push({
      value: (a = f == null ? void 0 : f[n.value]) !== null && a !== void 0 ? a : c,
      index: v,
      option: f
    }), o = f == null ? void 0 : f[n.children];
  }, u = 0; u < t.length; u += 1)
    l(u);
  return i;
}
const nE = function(t, e, n) {
  return F(function() {
    var r = [], a = [];
    return n.value.forEach(function(o) {
      var i = ao(o, t.value, e.value);
      i.every(function(l) {
        return l.option;
      }) ? a.push(o) : r.push(o);
    }), [a, r];
  });
};
function lb(t, e) {
  var n = /* @__PURE__ */ new Set();
  return t.forEach(function(r) {
    e.has(r) || n.add(r);
  }), n;
}
function rE(t) {
  var e = t || {}, n = e.disabled, r = e.disableCheckbox, a = e.checkable;
  return !!(n || r) || a === !1;
}
function aE(t, e, n, r) {
  for (var a = new Set(t), o = /* @__PURE__ */ new Set(), i = 0; i <= n; i += 1) {
    var l = e.get(i) || /* @__PURE__ */ new Set();
    l.forEach(function(c) {
      var v = c.key, f = c.node, g = c.children, p = g === void 0 ? [] : g;
      a.has(v) && !r(f) && p.filter(function(y) {
        return !r(y.node);
      }).forEach(function(y) {
        a.add(y.key);
      });
    });
  }
  for (var u = /* @__PURE__ */ new Set(), s = n; s >= 0; s -= 1) {
    var d = e.get(s) || /* @__PURE__ */ new Set();
    d.forEach(function(c) {
      var v = c.parent, f = c.node;
      if (!(r(f) || !c.parent || u.has(c.parent.key))) {
        if (r(c.parent.node)) {
          u.add(v.key);
          return;
        }
        var g = !0, p = !1;
        (v.children || []).filter(function(y) {
          return !r(y.node);
        }).forEach(function(y) {
          var h = y.key, w = a.has(h);
          g && !w && (g = !1), !p && (w || o.has(h)) && (p = !0);
        }), g && a.add(v.key), p && o.add(v.key), u.add(v.key);
      }
    });
  }
  return {
    checkedKeys: Array.from(a),
    halfCheckedKeys: Array.from(lb(o, a))
  };
}
function oE(t, e, n, r, a) {
  for (var o = new Set(t), i = new Set(e), l = 0; l <= r; l += 1) {
    var u = n.get(l) || /* @__PURE__ */ new Set();
    u.forEach(function(v) {
      var f = v.key, g = v.node, p = v.children, y = p === void 0 ? [] : p;
      !o.has(f) && !i.has(f) && !a(g) && y.filter(function(h) {
        return !a(h.node);
      }).forEach(function(h) {
        o.delete(h.key);
      });
    });
  }
  i = /* @__PURE__ */ new Set();
  for (var s = /* @__PURE__ */ new Set(), d = r; d >= 0; d -= 1) {
    var c = n.get(d) || /* @__PURE__ */ new Set();
    c.forEach(function(v) {
      var f = v.parent, g = v.node;
      if (!(a(g) || !v.parent || s.has(v.parent.key))) {
        if (a(v.parent.node)) {
          s.add(f.key);
          return;
        }
        var p = !0, y = !1;
        (f.children || []).filter(function(h) {
          return !a(h.node);
        }).forEach(function(h) {
          var w = h.key, C = o.has(w);
          p && !C && (p = !1), !y && (C || i.has(w)) && (y = !0);
        }), p || o.delete(f.key), y && i.add(f.key), s.add(f.key);
      }
    });
  }
  return {
    checkedKeys: Array.from(o),
    halfCheckedKeys: Array.from(lb(i, o))
  };
}
function Vn(t, e, n, r, a, o) {
  var i = [], l;
  o ? l = o : l = rE;
  var u = new Set(t.filter(function(d) {
    var c = !!n[d];
    return c || i.push(d), c;
  }));
  Eg(!i.length, "Tree missing follow keys: ".concat(i.slice(0, 100).map(function(d) {
    return "'".concat(d, "'");
  }).join(", ")));
  var s;
  return e === !0 ? s = aE(u, a, r, l) : s = oE(u, e.halfCheckedKeys, a, r, l), s;
}
const iE = function(t, e, n, r, a) {
  return F(function() {
    var o = a.value || function(i) {
      var l = i.labels, u = r.value ? l.slice(-1) : l, s = " / ";
      return u.every(function(d) {
        return ["string", "number"].includes(Le(d));
      }) ? u.join(s) : u.reduce(function(d, c, v) {
        var f = At(c) ? Ct(c, {
          key: v
        }) : c;
        return v === 0 ? [f] : [].concat(Ie(d), [s, f]);
      }, []);
    };
    return t.value.map(function(i) {
      var l = ao(i, e.value, n.value), u = o({
        labels: l.map(function(d) {
          var c = d.option, v = d.value, f;
          return (f = c == null ? void 0 : c[n.value.label]) !== null && f !== void 0 ? f : v;
        }),
        selectedOptions: l.map(function(d) {
          var c = d.option;
          return c;
        })
      }), s = nr(i);
      return {
        label: u,
        value: s,
        key: s,
        valueCells: i
      };
    });
  });
};
var ub = Symbol("CascaderContextKey"), lE = function(e) {
  ct(ub, e);
}, ll = function() {
  return ut(ub);
};
const uE = function() {
  var t = ho(), e = ll(), n = e.values, r = to([]), a = De(r, 2), o = a[0], i = a[1];
  return Ce(function() {
    return t.open;
  }, function() {
    if (t.open && !t.multiple) {
      var l = n.value[0];
      i(l || []);
    }
  }, {
    immediate: !0
  }), [o, i];
}, cE = function(t, e, n, r, a, o) {
  var i = ho(), l = F(function() {
    return i.direction === "rtl";
  }), u = [G([]), G(), G([])], s = u[0], d = u[1], c = u[2];
  Ue(function() {
    for (var y = -1, h = e.value, w = [], C = [], x = r.value.length, S = function(K) {
      var R = h.findIndex(function(E) {
        return E[n.value.value] === r.value[K];
      });
      if (R === -1)
        return "break";
      y = R, w.push(y), C.push(r.value[K]), h = h[y][n.value.children];
    }, b = 0; b < x && h; b += 1) {
      var P = S(b);
      if (P === "break")
        break;
    }
    for (var T = e.value, O = 0; O < w.length - 1; O += 1)
      T = T[w[O]][n.value.children];
    var D = [C, y, T];
    s.value = D[0], d.value = D[1], c.value = D[2];
  });
  var v = function(h) {
    a(h);
  }, f = function(h) {
    var w = c.value.length, C = d.value;
    C === -1 && h < 0 && (C = w);
    for (var x = 0; x < w; x += 1) {
      C = (C + h + w) % w;
      var S = c.value[C];
      if (S && !S.disabled) {
        var b = S[n.value.value], P = s.value.slice(0, -1).concat(b);
        v(P);
        return;
      }
    }
  }, g = function() {
    if (s.value.length > 1) {
      var h = s.value.slice(0, -1);
      v(h);
    } else
      i.toggleOpen(!1);
  }, p = function() {
    var h, w = ((h = c.value[d.value]) === null || h === void 0 ? void 0 : h[n.value.children]) || [], C = w.find(function(S) {
      return !S.disabled;
    });
    if (C) {
      var x = [].concat(Ie(s.value), [C[n.value.value]]);
      v(x);
    }
  };
  t.expose({
    onKeydown: function(h) {
      var w = h.which;
      switch (w) {
        case xe.UP:
        case xe.DOWN: {
          var C = 0;
          w === xe.UP ? C = -1 : w === xe.DOWN && (C = 1), C !== 0 && f(C);
          break;
        }
        case xe.LEFT: {
          l.value ? p() : g();
          break;
        }
        case xe.RIGHT: {
          l.value ? g() : p();
          break;
        }
        case xe.BACKSPACE: {
          i.searchValue || g();
          break;
        }
        case xe.ENTER: {
          if (s.value.length) {
            var x = c.value[d.value], S = (x == null ? void 0 : x[Va]) || [];
            S.length ? o(S.map(function(b) {
              return b[n.value.value];
            }), S[S.length - 1]) : o(s.value, x);
          }
          break;
        }
        case xe.ESC:
          i.toggleOpen(!1), open && h.stopPropagation();
      }
    },
    onKeyup: function() {
    }
  });
};
function ul(t) {
  var e, n = t.prefixCls, r = t.checked, a = t.halfChecked, o = t.disabled, i = t.onClick, l = ll(), u = l.customSlots, s = l.checkable, d = s.value !== !1 ? u.value.checkable : s.value, c = typeof d == "function" ? d() : typeof d == "boolean" ? null : d;
  return m("span", {
    class: (e = {}, j(e, n, !0), j(e, "".concat(n, "-checked"), r), j(e, "".concat(n, "-indeterminate"), !r && a), j(e, "".concat(n, "-disabled"), o), e),
    onClick: i
  }, [c]);
}
ul.props = ["prefixCls", "checked", "halfChecked", "disabled", "onClick"];
ul.displayName = "Checkbox";
ul.inheritAttrs = !1;
var cb = "__cascader_fix_label__";
function cl(t) {
  var e = t.prefixCls, n = t.multiple, r = t.options, a = t.activeValue, o = t.prevValuePath, i = t.onToggleOpen, l = t.onSelect, u = t.onActive, s = t.checkedSet, d = t.halfCheckedSet, c = t.loadingKeys, v = t.isSelectable, f, g, p, y, h, w, C = "".concat(e, "-menu"), x = "".concat(e, "-menu-item"), S = ll(), b = S.fieldNames, P = S.changeOnSelect, T = S.expandTrigger, O = S.expandIcon, D = S.loadingIcon, V = S.dropdownMenuColumnStyle, K = S.customSlots, R = (f = O.value) !== null && f !== void 0 ? f : (p = (g = K.value).expandIcon) === null || p === void 0 ? void 0 : p.call(g), E = (y = D.value) !== null && y !== void 0 ? y : (w = (h = K.value).loadingIcon) === null || w === void 0 ? void 0 : w.call(h), M = T.value === "hover";
  return m("ul", {
    class: C,
    role: "menu"
  }, [r.map(function(N) {
    var _, I, A = N.disabled, B = N[Va], W = (I = N[cb]) !== null && I !== void 0 ? I : N[b.value.label], U = N[b.value.value], z = Ma(N, b.value), L = B ? B.map(function(ne) {
      return ne[b.value.value];
    }) : [].concat(Ie(o), [U]), $ = nr(L), q = c.includes($), H = s.has($), J = d.has($), Z = function() {
      !A && (!M || !z) && u(L);
    }, ae = function() {
      v(N) && l(L, z);
    }, ue;
    return typeof N.title == "string" ? ue = N.title : typeof W == "string" && (ue = W), m("li", {
      key: $,
      class: [x, (_ = {}, j(_, "".concat(x, "-expand"), !z), j(_, "".concat(x, "-active"), a === U), j(_, "".concat(x, "-disabled"), A), j(_, "".concat(x, "-loading"), q), _)],
      style: V.value,
      role: "menuitemcheckbox",
      title: ue,
      "aria-checked": H,
      "data-path-key": $,
      onClick: function() {
        Z(), (!n || z) && ae();
      },
      onDblclick: function() {
        P.value && i(!1);
      },
      onMouseenter: function() {
        M && Z();
      },
      onMousedown: function(X) {
        X.preventDefault();
      }
    }, [n && m(ul, {
      prefixCls: "".concat(e, "-checkbox"),
      checked: H,
      halfChecked: J,
      disabled: A,
      onClick: function(X) {
        X.stopPropagation(), ae();
      }
    }, null), m("div", {
      class: "".concat(x, "-content")
    }, [W]), !q && R && !z && m("div", {
      class: "".concat(x, "-expand-icon")
    }, [R]), q && E && m("div", {
      class: "".concat(x, "-loading-icon")
    }, [E])]);
  })]);
}
cl.props = ["prefixCls", "multiple", "options", "activeValue", "prevValuePath", "onToggleOpen", "onSelect", "onActive", "checkedSet", "halfCheckedSet", "loadingKeys", "isSelectable"];
cl.displayName = "Column";
cl.inheritAttrs = !1;
const sE = pe({
  name: "OptionList",
  inheritAttrs: !1,
  setup: function(e, n) {
    var r = n.attrs, a = n.slots, o = ho(), i = G(), l = F(function() {
      return o.direction === "rtl";
    }), u = ll(), s = u.options, d = u.values, c = u.halfValues, v = u.fieldNames, f = u.changeOnSelect, g = u.onSelect, p = u.searchOptions, y = u.dropdownPrefixCls, h = u.loadData, w = u.expandTrigger, C = u.customSlots, x = F(function() {
      return y.value || o.prefixCls;
    }), S = Xe([]), b = function(W) {
      if (!(!h.value || o.searchValue)) {
        var U = ao(W, s.value, v.value), z = U.map(function(q) {
          var H = q.option;
          return H;
        }), L = z[z.length - 1];
        if (L && !Ma(L, v.value)) {
          var $ = nr(W);
          S.value = [].concat(Ie(S.value), [$]), h.value(z);
        }
      }
    };
    Ue(function() {
      S.value.length && S.value.forEach(function(B) {
        var W = M_(B), U = ao(W, s.value, v.value, !0).map(function(L) {
          var $ = L.option;
          return $;
        }), z = U[U.length - 1];
        (!z || z[v.value.children] || Ma(z, v.value)) && (S.value = S.value.filter(function(L) {
          return L !== B;
        }));
      });
    });
    var P = F(function() {
      return new Set(Zr(d.value));
    }), T = F(function() {
      return new Set(Zr(c.value));
    }), O = uE(), D = De(O, 2), V = D[0], K = D[1], R = function(W) {
      K(W), b(W);
    }, E = function(W) {
      var U = W.disabled, z = Ma(W, v.value);
      return !U && (z || f.value || o.multiple);
    }, M = function(W, U) {
      var z = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
      g(W), !o.multiple && (U || f.value && (w.value === "hover" || z)) && o.toggleOpen(!1);
    }, N = F(function() {
      return o.searchValue ? p.value : s.value;
    }), _ = F(function() {
      for (var B = [{
        options: N.value
      }], W = N.value, U = function(q) {
        var H = V.value[q], J = W.find(function(ae) {
          return ae[v.value.value] === H;
        }), Z = J == null ? void 0 : J[v.value.children];
        if (!(Z != null && Z.length))
          return "break";
        W = Z, B.push({
          options: Z
        });
      }, z = 0; z < V.value.length; z += 1) {
        var L = U(z);
        if (L === "break")
          break;
      }
      return B;
    }), I = function(W, U) {
      E(U) && M(W, Ma(U, v.value), !0);
    };
    cE(n, N, v, V, R, I);
    var A = function(W) {
      W.preventDefault();
    };
    return dt(function() {
      Ce(V, function(B) {
        for (var W, U = 0; U < B.length; U += 1) {
          var z = B.slice(0, U + 1), L = nr(z), $ = (W = i.value) === null || W === void 0 ? void 0 : W.querySelector('li[data-path-key="'.concat(L.replace(/\\{0,2}"/g, '\\"'), '"]'));
          $ && D_($);
        }
      }, {
        flush: "post",
        immediate: !0
      });
    }), function() {
      var B, W, U, z, L, $, q, H = o.notFoundContent, J = H === void 0 ? ((U = a.notFoundContent) === null || U === void 0 ? void 0 : U.call(a)) || ((L = (z = C.value).notFoundContent) === null || L === void 0 ? void 0 : L.call(z)) : H, Z = o.multiple, ae = o.toggleOpen, ue = !(!((q = ($ = _.value[0]) === null || $ === void 0 ? void 0 : $.options) === null || q === void 0) && q.length), ne = [(B = {}, j(B, v.value.value, "__EMPTY__"), j(B, cb, J), j(B, "disabled", !0), B)], X = k(k({}, r), {
        multiple: !ue && Z,
        onSelect: M,
        onActive: R,
        onToggleOpen: ae,
        checkedSet: P.value,
        halfCheckedSet: T.value,
        loadingKeys: S.value,
        isSelectable: E
      }), te = ue ? [{
        options: ne
      }] : _.value, me = te.map(function(Oe, ke) {
        var Me = V.value.slice(0, ke), Pe = V.value[ke];
        return m(cl, Y(Y({
          key: ke
        }, X), {}, {
          prefixCls: x.value,
          options: Oe.options,
          prevValuePath: Me,
          activeValue: Pe
        }), null);
      });
      return m("div", {
        class: ["".concat(x.value, "-menus"), (W = {}, j(W, "".concat(x.value, "-menu-empty"), ue), j(W, "".concat(x.value, "-rtl"), l.value), W)],
        onMousedown: A,
        ref: i
      }, [me]);
    };
  }
});
function td(t) {
  var e = G(0), n = Xe();
  return Ue(function() {
    var r = /* @__PURE__ */ new Map(), a = 0, o = t.value || {};
    for (var i in o)
      if (Object.prototype.hasOwnProperty.call(o, i)) {
        var l = o[i], u = l.level, s = r.get(u);
        s || (s = /* @__PURE__ */ new Set(), r.set(u, s)), s.add(l), a = Math.max(a, u);
      }
    e.value = a, n.value = r;
  }), {
    maxLevel: e,
    levelEntities: n
  };
}
function dE() {
  return k(k({}, pt(Qi(), ["tokenSeparators", "mode", "showSearch"])), {
    id: String,
    prefixCls: String,
    fieldNames: Object,
    children: Array,
    value: {
      type: [String, Number, Array]
    },
    defaultValue: {
      type: [String, Number, Array]
    },
    changeOnSelect: {
      type: Boolean,
      default: void 0
    },
    displayRender: Function,
    checkable: {
      type: Boolean,
      default: void 0
    },
    showCheckedStrategy: {
      type: String,
      default: E_
    },
    showSearch: {
      type: [Boolean, Object],
      default: void 0
    },
    searchValue: String,
    onSearch: Function,
    expandTrigger: String,
    options: Array,
    dropdownPrefixCls: String,
    loadData: Function,
    popupVisible: {
      type: Boolean,
      default: void 0
    },
    popupClassName: String,
    dropdownClassName: String,
    dropdownMenuColumnStyle: {
      type: Object,
      default: void 0
    },
    popupStyle: {
      type: Object,
      default: void 0
    },
    dropdownStyle: {
      type: Object,
      default: void 0
    },
    popupPlacement: String,
    placement: String,
    onPopupVisibleChange: Function,
    onDropdownVisibleChange: Function,
    expandIcon: Q.any,
    loadingIcon: Q.any
  });
}
function sb() {
  return k(k({}, dE()), {
    onChange: Function,
    customSlots: Object
  });
}
function fE(t) {
  return Array.isArray(t) && Array.isArray(t[0]);
}
function wp(t) {
  return t ? fE(t) ? t : (t.length === 0 ? [] : [t]).map(function(e) {
    return Array.isArray(e) ? e : [e];
  }) : [];
}
const vE = pe({
  name: "Cascader",
  inheritAttrs: !1,
  props: kt(sb(), {}),
  setup: function(e, n) {
    var r = n.attrs, a = n.expose, o = n.slots, i = fs(ze(e, "id")), l = F(function() {
      return !!e.checkable;
    }), u = Rt(e.defaultValue, {
      value: F(function() {
        return e.value;
      }),
      postState: wp
    }), s = De(u, 2), d = s[0], c = s[1], v = F(function() {
      return A_(e.fieldNames);
    }), f = F(function() {
      return e.options || [];
    }), g = Q_(f, v), p = function(fe) {
      var le = g.value;
      return fe.map(function(ie) {
        var de = le[ie].nodes;
        return de.map(function(ye) {
          return ye[v.value.value];
        });
      });
    }, y = Rt("", {
      value: F(function() {
        return e.searchValue;
      }),
      postState: function(fe) {
        return fe || "";
      }
    }), h = De(y, 2), w = h[0], C = h[1], x = function(fe, le) {
      C(fe), le.source !== "blur" && e.onSearch && e.onSearch(fe);
    }, S = J_(ze(e, "showSearch")), b = S.showSearch, P = S.searchConfig, T = tE(w, f, v, F(function() {
      return e.dropdownPrefixCls || e.prefixCls;
    }), P, ze(e, "changeOnSelect")), O = nE(f, v, d), D = [G([]), G([]), G([])], V = D[0], K = D[1], R = D[2], E = td(g), M = E.maxLevel, N = E.levelEntities;
    Ue(function() {
      var Pe = De(O.value, 2), fe = Pe[0], le = Pe[1];
      if (!l.value || !d.value.length) {
        var ie = [fe, [], le];
        V.value = ie[0], K.value = ie[1], R.value = ie[2];
        return;
      }
      var de = Zr(fe), ye = g.value, _e = Vn(de, !0, ye, M.value, N.value), Be = _e.checkedKeys, Ve = _e.halfCheckedKeys, he = [p(Be), p(Ve), le];
      V.value = he[0], K.value = he[1], R.value = he[2];
    });
    var _ = F(function() {
      var Pe = Zr(V.value), fe = Cp(Pe, g.value, e.showCheckedStrategy);
      return [].concat(Ie(R.value), Ie(p(fe)));
    }), I = iE(_, f, v, l, ze(e, "displayRender")), A = function(fe) {
      if (c(fe), e.onChange) {
        var le = wp(fe), ie = le.map(function(_e) {
          return ao(_e, f.value, v.value).map(function(Be) {
            return Be.option;
          });
        }), de = l.value ? le : le[0], ye = l.value ? ie : ie[0];
        e.onChange(de, ye);
      }
    }, B = function(fe) {
      if (C(""), !l.value)
        A(fe);
      else {
        var le = nr(fe), ie = Zr(V.value), de = Zr(K.value), ye = ie.includes(le), _e = R.value.some(function(ee) {
          return nr(ee) === le;
        }), Be = V.value, Ve = R.value;
        if (_e && !ye)
          Ve = R.value.filter(function(ee) {
            return nr(ee) !== le;
          });
        else {
          var he = ye ? ie.filter(function(ee) {
            return ee !== le;
          }) : [].concat(Ie(ie), [le]), oe;
          if (ye) {
            var ve = Vn(he, {
              checked: !1,
              halfCheckedKeys: de
            }, g.value, M.value, N.value);
            oe = ve.checkedKeys;
          } else {
            var Se = Vn(he, !0, g.value, M.value, N.value);
            oe = Se.checkedKeys;
          }
          var se = Cp(oe, g.value, e.showCheckedStrategy);
          Be = p(se);
        }
        A([].concat(Ie(Ve), Ie(Be)));
      }
    }, W = function(fe, le) {
      if (le.type === "clear") {
        A([]);
        return;
      }
      var ie = le.values[0].valueCells;
      B(ie);
    };
    process.env.NODE_ENV !== "production" && Ue(function() {
      mt(!e.onPopupVisibleChange, "Cascader", "`popupVisibleChange` is deprecated. Please use `dropdownVisibleChange` instead."), mt(e.popupVisible === void 0, "Cascader", "`popupVisible` is deprecated. Please use `open` instead."), mt(e.popupClassName === void 0, "Cascader", "`popupClassName` is deprecated. Please use `dropdownClassName` instead."), mt(e.popupPlacement === void 0, "Cascader", "`popupPlacement` is deprecated. Please use `placement` instead."), mt(e.popupStyle === void 0, "Cascader", "`popupStyle` is deprecated. Please use `dropdownStyle` instead.");
    });
    var U = F(function() {
      return e.open !== void 0 ? e.open : e.popupVisible;
    }), z = F(function() {
      return e.dropdownClassName || e.popupClassName;
    }), L = F(function() {
      return e.dropdownStyle || e.popupStyle || {};
    }), $ = F(function() {
      return e.placement || e.popupPlacement;
    }), q = function(fe) {
      var le, ie;
      (le = e.onDropdownVisibleChange) === null || le === void 0 || le.call(e, fe), (ie = e.onPopupVisibleChange) === null || ie === void 0 || ie.call(e, fe);
    }, H = Tc(e), J = H.changeOnSelect, Z = H.checkable, ae = H.dropdownPrefixCls, ue = H.loadData, ne = H.expandTrigger, X = H.expandIcon, te = H.loadingIcon, me = H.dropdownMenuColumnStyle, Oe = H.customSlots;
    lE({
      options: f,
      fieldNames: v,
      values: V,
      halfValues: K,
      changeOnSelect: J,
      onSelect: B,
      checkable: Z,
      searchOptions: T,
      dropdownPrefixCls: ae,
      loadData: ue,
      expandTrigger: ne,
      expandIcon: X,
      loadingIcon: te,
      dropdownMenuColumnStyle: me,
      customSlots: Oe
    });
    var ke = G();
    a({
      focus: function() {
        var fe;
        (fe = ke.value) === null || fe === void 0 || fe.focus();
      },
      blur: function() {
        var fe;
        (fe = ke.value) === null || fe === void 0 || fe.blur();
      },
      scrollTo: function(fe) {
        var le;
        (le = ke.value) === null || le === void 0 || le.scrollTo(fe);
      }
    });
    var Me = F(function() {
      return pt(e, [
        "id",
        "prefixCls",
        "fieldNames",
        "defaultValue",
        "value",
        "changeOnSelect",
        "onChange",
        "displayRender",
        "checkable",
        "searchValue",
        "onSearch",
        "showSearch",
        "expandTrigger",
        "options",
        "dropdownPrefixCls",
        "loadData",
        "popupVisible",
        "open",
        "popupClassName",
        "dropdownClassName",
        "dropdownMenuColumnStyle",
        "popupPlacement",
        "placement",
        "onDropdownVisibleChange",
        "onPopupVisibleChange",
        "expandIcon",
        "loadingIcon",
        "customSlots",
        "showCheckedStrategy",
        "children"
      ]);
    });
    return function() {
      var Pe = !(w.value ? T.value : f.value).length, fe = e.dropdownMatchSelectWidth, le = fe === void 0 ? !1 : fe, ie = w.value && P.value.matchInputWidth || Pe ? {} : {
        minWidth: "auto"
      };
      return m(cs, Y(Y(Y({}, Me.value), r), {}, {
        ref: ke,
        id: i,
        prefixCls: e.prefixCls,
        dropdownMatchSelectWidth: le,
        dropdownStyle: k(k({}, L.value), ie),
        displayValues: I.value,
        onDisplayValuesChange: W,
        mode: l.value ? "multiple" : void 0,
        searchValue: w.value,
        onSearch: x,
        showSearch: b.value,
        OptionList: sE,
        emptyOptions: Pe,
        open: U.value,
        dropdownClassName: z.value,
        placement: $.value,
        onDropdownVisibleChange: q,
        getRawInputElement: function() {
          var ye;
          return (ye = o.default) === null || ye === void 0 ? void 0 : ye.call(o);
        }
      }), o);
    };
  }
});
var pE = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z" } }] }, name: "left", theme: "outlined" };
const hE = pE;
function Sp(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? Object(arguments[e]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(a) {
      return Object.getOwnPropertyDescriptor(n, a).enumerable;
    }))), r.forEach(function(a) {
      gE(t, a, n[a]);
    });
  }
  return t;
}
function gE(t, e, n) {
  return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
var nd = function(e, n) {
  var r = Sp({}, e, n.attrs);
  return m(st, Sp({}, r, {
    icon: hE
  }), null);
};
nd.displayName = "LeftOutlined";
nd.inheritAttrs = !1;
const Ni = nd;
function mE(t, e) {
  for (var n = -1, r = t == null ? 0 : t.length; ++n < r && e(t[n], n, t) !== !1; )
    ;
  return t;
}
function Co(t, e, n, r) {
  var a = !n;
  n || (n = {});
  for (var o = -1, i = e.length; ++o < i; ) {
    var l = e[o], u = r ? r(n[l], t[l], l, n, t) : void 0;
    u === void 0 && (u = t[l]), a ? Gy(n, l, u) : Xy(n, l, u);
  }
  return n;
}
function yE(t, e) {
  return t && Co(e, ma(e), t);
}
function bE(t) {
  var e = [];
  if (t != null)
    for (var n in Object(t))
      e.push(n);
  return e;
}
var CE = Object.prototype, wE = CE.hasOwnProperty;
function SE(t) {
  if (!Kn(t))
    return bE(t);
  var e = os(t), n = [];
  for (var r in t)
    r == "constructor" && (e || !wE.call(t, r)) || n.push(r);
  return n;
}
function rd(t) {
  return fo(t) ? _m(t, !0) : SE(t);
}
function xE(t, e) {
  return t && Co(e, rd(e), t);
}
var db = typeof exports == "object" && exports && !exports.nodeType && exports, xp = db && typeof module == "object" && module && !module.nodeType && module, PE = xp && xp.exports === db, Pp = PE ? mn.Buffer : void 0, Op = Pp ? Pp.allocUnsafe : void 0;
function OE(t, e) {
  if (e)
    return t.slice();
  var n = t.length, r = Op ? Op(n) : new t.constructor(n);
  return t.copy(r), r;
}
function TE(t, e) {
  var n = -1, r = t.length;
  for (e || (e = Array(r)); ++n < r; )
    e[n] = t[n];
  return e;
}
function IE(t, e) {
  return Co(t, ns(t), e);
}
var kE = Object.getOwnPropertySymbols, _E = kE ? function(t) {
  for (var e = []; t; )
    ts(e, ns(t)), t = kc(t);
  return e;
} : xm;
const fb = _E;
function EE(t, e) {
  return Co(t, fb(t), e);
}
function vb(t) {
  return Sm(t, rd, fb);
}
var NE = Object.prototype, ME = NE.hasOwnProperty;
function AE(t) {
  var e = t.length, n = new t.constructor(e);
  return e && typeof t[0] == "string" && ME.call(t, "index") && (n.index = t.index, n.input = t.input), n;
}
function ad(t) {
  var e = new t.constructor(t.byteLength);
  return new yi(e).set(new yi(t)), e;
}
function DE(t, e) {
  var n = e ? ad(t.buffer) : t.buffer;
  return new t.constructor(n, t.byteOffset, t.byteLength);
}
var FE = /\w*$/;
function RE(t) {
  var e = new t.constructor(t.source, FE.exec(t));
  return e.lastIndex = t.lastIndex, e;
}
var Tp = un ? un.prototype : void 0, Ip = Tp ? Tp.valueOf : void 0;
function $E(t) {
  return Ip ? Object(Ip.call(t)) : {};
}
function LE(t, e) {
  var n = e ? ad(t.buffer) : t.buffer;
  return new t.constructor(n, t.byteOffset, t.length);
}
var jE = "[object Boolean]", VE = "[object Date]", BE = "[object Map]", KE = "[object Number]", HE = "[object RegExp]", zE = "[object Set]", WE = "[object String]", UE = "[object Symbol]", YE = "[object ArrayBuffer]", qE = "[object DataView]", GE = "[object Float32Array]", XE = "[object Float64Array]", QE = "[object Int8Array]", JE = "[object Int16Array]", ZE = "[object Int32Array]", eN = "[object Uint8Array]", tN = "[object Uint8ClampedArray]", nN = "[object Uint16Array]", rN = "[object Uint32Array]";
function aN(t, e, n) {
  var r = t.constructor;
  switch (e) {
    case YE:
      return ad(t);
    case jE:
    case VE:
      return new r(+t);
    case qE:
      return DE(t, n);
    case GE:
    case XE:
    case QE:
    case JE:
    case ZE:
    case eN:
    case tN:
    case nN:
    case rN:
      return LE(t, n);
    case BE:
      return new r();
    case KE:
    case WE:
      return new r(t);
    case HE:
      return RE(t);
    case zE:
      return new r();
    case UE:
      return $E(t);
  }
}
var kp = Object.create, oN = function() {
  function t() {
  }
  return function(e) {
    if (!Kn(e))
      return {};
    if (kp)
      return kp(e);
    t.prototype = e;
    var n = new t();
    return t.prototype = void 0, n;
  };
}();
const iN = oN;
function lN(t) {
  return typeof t.constructor == "function" && !os(t) ? iN(kc(t)) : {};
}
var uN = "[object Map]";
function cN(t) {
  return _n(t) && Za(t) == uN;
}
var _p = fa && fa.isMap, sN = _p ? Ui(_p) : cN;
const dN = sN;
var fN = "[object Set]";
function vN(t) {
  return _n(t) && Za(t) == fN;
}
var Ep = fa && fa.isSet, pN = Ep ? Ui(Ep) : vN;
const hN = pN;
var gN = 1, mN = 2, yN = 4, pb = "[object Arguments]", bN = "[object Array]", CN = "[object Boolean]", wN = "[object Date]", SN = "[object Error]", hb = "[object Function]", xN = "[object GeneratorFunction]", PN = "[object Map]", ON = "[object Number]", gb = "[object Object]", TN = "[object RegExp]", IN = "[object Set]", kN = "[object String]", _N = "[object Symbol]", EN = "[object WeakMap]", NN = "[object ArrayBuffer]", MN = "[object DataView]", AN = "[object Float32Array]", DN = "[object Float64Array]", FN = "[object Int8Array]", RN = "[object Int16Array]", $N = "[object Int32Array]", LN = "[object Uint8Array]", jN = "[object Uint8ClampedArray]", VN = "[object Uint16Array]", BN = "[object Uint32Array]", gt = {};
gt[pb] = gt[bN] = gt[NN] = gt[MN] = gt[CN] = gt[wN] = gt[AN] = gt[DN] = gt[FN] = gt[RN] = gt[$N] = gt[PN] = gt[ON] = gt[gb] = gt[TN] = gt[IN] = gt[kN] = gt[_N] = gt[LN] = gt[jN] = gt[VN] = gt[BN] = !0;
gt[SN] = gt[hb] = gt[EN] = !1;
function Ba(t, e, n, r, a, o) {
  var i, l = e & gN, u = e & mN, s = e & yN;
  if (n && (i = a ? n(t, r, a, o) : n(t)), i !== void 0)
    return i;
  if (!Kn(t))
    return t;
  var d = cn(t);
  if (d) {
    if (i = AE(t), !l)
      return TE(t, i);
  } else {
    var c = Za(t), v = c == hb || c == xN;
    if (bi(t))
      return OE(t, l);
    if (c == gb || c == pb || v && !a) {
      if (i = u || v ? {} : lN(t), !l)
        return u ? EE(t, xE(i, t)) : IE(t, yE(i, t));
    } else {
      if (!gt[c])
        return a ? t : {};
      i = aN(t, c, l);
    }
  }
  o || (o = new kn());
  var f = o.get(t);
  if (f)
    return f;
  o.set(t, i), hN(t) ? t.forEach(function(y) {
    i.add(Ba(y, e, n, y, t, o));
  }) : dN(t) && t.forEach(function(y, h) {
    i.set(h, Ba(y, e, n, h, t, o));
  });
  var g = s ? u ? vb : ju : u ? rd : ma, p = d ? void 0 : g(t);
  return mE(p || t, function(y, h) {
    p && (h = y, y = t[h]), Xy(i, h, Ba(y, e, n, h, t, o));
  }), i;
}
var KN = 1, HN = 4;
function li(t) {
  return Ba(t, KN | HN);
}
function xr() {
  return xr = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
    }
    return t;
  }, xr.apply(this, arguments);
}
function zN(t, e) {
  t.prototype = Object.create(e.prototype), t.prototype.constructor = t, oo(t, e);
}
function uc(t) {
  return uc = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, uc(t);
}
function oo(t, e) {
  return oo = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, a) {
    return r.__proto__ = a, r;
  }, oo(t, e);
}
function WN() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function ui(t, e, n) {
  return WN() ? ui = Reflect.construct.bind() : ui = function(a, o, i) {
    var l = [null];
    l.push.apply(l, o);
    var u = Function.bind.apply(a, l), s = new u();
    return i && oo(s, i.prototype), s;
  }, ui.apply(null, arguments);
}
function UN(t) {
  return Function.toString.call(t).indexOf("[native code]") !== -1;
}
function cc(t) {
  var e = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return cc = function(r) {
    if (r === null || !UN(r))
      return r;
    if (typeof r != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof e < "u") {
      if (e.has(r))
        return e.get(r);
      e.set(r, a);
    }
    function a() {
      return ui(r, arguments, uc(this).constructor);
    }
    return a.prototype = Object.create(r.prototype, {
      constructor: {
        value: a,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), oo(a, r);
  }, cc(t);
}
var YN = /%[sdj%]/g, mb = function() {
};
typeof process < "u" && process.env && process.env.NODE_ENV !== "production" && typeof window < "u" && typeof document < "u" && (mb = function(e, n) {
  typeof console < "u" && console.warn && typeof ASYNC_VALIDATOR_NO_WARNING > "u" && n.every(function(r) {
    return typeof r == "string";
  }) && console.warn(e, n);
});
function sc(t) {
  if (!t || !t.length)
    return null;
  var e = {};
  return t.forEach(function(n) {
    var r = n.field;
    e[r] = e[r] || [], e[r].push(n);
  }), e;
}
function Qt(t) {
  for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++)
    n[r - 1] = arguments[r];
  var a = 0, o = n.length;
  if (typeof t == "function")
    return t.apply(null, n);
  if (typeof t == "string") {
    var i = t.replace(YN, function(l) {
      if (l === "%%")
        return "%";
      if (a >= o)
        return l;
      switch (l) {
        case "%s":
          return String(n[a++]);
        case "%d":
          return Number(n[a++]);
        case "%j":
          try {
            return JSON.stringify(n[a++]);
          } catch {
            return "[Circular]";
          }
          break;
        default:
          return l;
      }
    });
    return i;
  }
  return t;
}
function qN(t) {
  return t === "string" || t === "url" || t === "hex" || t === "email" || t === "date" || t === "pattern";
}
function Et(t, e) {
  return !!(t == null || e === "array" && Array.isArray(t) && !t.length || qN(e) && typeof t == "string" && !t);
}
function GN(t, e, n) {
  var r = [], a = 0, o = t.length;
  function i(l) {
    r.push.apply(r, l || []), a++, a === o && n(r);
  }
  t.forEach(function(l) {
    e(l, i);
  });
}
function Np(t, e, n) {
  var r = 0, a = t.length;
  function o(i) {
    if (i && i.length) {
      n(i);
      return;
    }
    var l = r;
    r = r + 1, l < a ? e(t[l], o) : n([]);
  }
  o([]);
}
function XN(t) {
  var e = [];
  return Object.keys(t).forEach(function(n) {
    e.push.apply(e, t[n] || []);
  }), e;
}
var Mp = /* @__PURE__ */ function(t) {
  zN(e, t);
  function e(n, r) {
    var a;
    return a = t.call(this, "Async Validation Error") || this, a.errors = n, a.fields = r, a;
  }
  return e;
}(/* @__PURE__ */ cc(Error));
function QN(t, e, n, r, a) {
  if (e.first) {
    var o = new Promise(function(v, f) {
      var g = function(h) {
        return r(h), h.length ? f(new Mp(h, sc(h))) : v(a);
      }, p = XN(t);
      Np(p, n, g);
    });
    return o.catch(function(v) {
      return v;
    }), o;
  }
  var i = e.firstFields === !0 ? Object.keys(t) : e.firstFields || [], l = Object.keys(t), u = l.length, s = 0, d = [], c = new Promise(function(v, f) {
    var g = function(y) {
      if (d.push.apply(d, y), s++, s === u)
        return r(d), d.length ? f(new Mp(d, sc(d))) : v(a);
    };
    l.length || (r(d), v(a)), l.forEach(function(p) {
      var y = t[p];
      i.indexOf(p) !== -1 ? Np(y, n, g) : GN(y, n, g);
    });
  });
  return c.catch(function(v) {
    return v;
  }), c;
}
function JN(t) {
  return !!(t && t.message !== void 0);
}
function ZN(t, e) {
  for (var n = t, r = 0; r < e.length; r++) {
    if (n == null)
      return n;
    n = n[e[r]];
  }
  return n;
}
function Ap(t, e) {
  return function(n) {
    var r;
    return t.fullFields ? r = ZN(e, t.fullFields) : r = e[n.field || t.fullField], JN(n) ? (n.field = n.field || t.fullField, n.fieldValue = r, n) : {
      message: typeof n == "function" ? n() : n,
      fieldValue: r,
      field: n.field || t.fullField
    };
  };
}
function Dp(t, e) {
  if (e) {
    for (var n in e)
      if (e.hasOwnProperty(n)) {
        var r = e[n];
        typeof r == "object" && typeof t[n] == "object" ? t[n] = xr({}, t[n], r) : t[n] = r;
      }
  }
  return t;
}
var yb = function(e, n, r, a, o, i) {
  e.required && (!r.hasOwnProperty(e.field) || Et(n, i || e.type)) && a.push(Qt(o.messages.required, e.fullField));
}, eM = function(e, n, r, a, o) {
  (/^\s+$/.test(n) || n === "") && a.push(Qt(o.messages.whitespace, e.fullField));
}, Uo, tM = function() {
  if (Uo)
    return Uo;
  var t = "[a-fA-F\\d:]", e = function(x) {
    return x && x.includeBoundaries ? "(?:(?<=\\s|^)(?=" + t + ")|(?<=" + t + ")(?=\\s|$))" : "";
  }, n = "(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}", r = "[a-fA-F\\d]{1,4}", a = (`
(?:
(?:` + r + ":){7}(?:" + r + `|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8
(?:` + r + ":){6}(?:" + n + "|:" + r + `|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4
(?:` + r + ":){5}(?::" + n + "|(?::" + r + `){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4
(?:` + r + ":){4}(?:(?::" + r + "){0,1}:" + n + "|(?::" + r + `){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4
(?:` + r + ":){3}(?:(?::" + r + "){0,2}:" + n + "|(?::" + r + `){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4
(?:` + r + ":){2}(?:(?::" + r + "){0,3}:" + n + "|(?::" + r + `){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4
(?:` + r + ":){1}(?:(?::" + r + "){0,4}:" + n + "|(?::" + r + `){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4
(?::(?:(?::` + r + "){0,5}:" + n + "|(?::" + r + `){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4
)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1
`).replace(/\s*\/\/.*$/gm, "").replace(/\n/g, "").trim(), o = new RegExp("(?:^" + n + "$)|(?:^" + a + "$)"), i = new RegExp("^" + n + "$"), l = new RegExp("^" + a + "$"), u = function(x) {
    return x && x.exact ? o : new RegExp("(?:" + e(x) + n + e(x) + ")|(?:" + e(x) + a + e(x) + ")", "g");
  };
  u.v4 = function(C) {
    return C && C.exact ? i : new RegExp("" + e(C) + n + e(C), "g");
  }, u.v6 = function(C) {
    return C && C.exact ? l : new RegExp("" + e(C) + a + e(C), "g");
  };
  var s = "(?:(?:[a-z]+:)?//)", d = "(?:\\S+(?::\\S*)?@)?", c = u.v4().source, v = u.v6().source, f = "(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)", g = "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*", p = "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))", y = "(?::\\d{2,5})?", h = '(?:[/?#][^\\s"]*)?', w = "(?:" + s + "|www\\.)" + d + "(?:localhost|" + c + "|" + v + "|" + f + g + p + ")" + y + h;
  return Uo = new RegExp("(?:^" + w + "$)", "i"), Uo;
}, Fp = {
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
}, Aa = {
  integer: function(e) {
    return Aa.number(e) && parseInt(e, 10) === e;
  },
  float: function(e) {
    return Aa.number(e) && !Aa.integer(e);
  },
  array: function(e) {
    return Array.isArray(e);
  },
  regexp: function(e) {
    if (e instanceof RegExp)
      return !0;
    try {
      return !!new RegExp(e);
    } catch {
      return !1;
    }
  },
  date: function(e) {
    return typeof e.getTime == "function" && typeof e.getMonth == "function" && typeof e.getYear == "function" && !isNaN(e.getTime());
  },
  number: function(e) {
    return isNaN(e) ? !1 : typeof e == "number";
  },
  object: function(e) {
    return typeof e == "object" && !Aa.array(e);
  },
  method: function(e) {
    return typeof e == "function";
  },
  email: function(e) {
    return typeof e == "string" && e.length <= 320 && !!e.match(Fp.email);
  },
  url: function(e) {
    return typeof e == "string" && e.length <= 2048 && !!e.match(tM());
  },
  hex: function(e) {
    return typeof e == "string" && !!e.match(Fp.hex);
  }
}, nM = function(e, n, r, a, o) {
  if (e.required && n === void 0) {
    yb(e, n, r, a, o);
    return;
  }
  var i = ["integer", "float", "array", "regexp", "object", "method", "email", "number", "date", "url", "hex"], l = e.type;
  i.indexOf(l) > -1 ? Aa[l](n) || a.push(Qt(o.messages.types[l], e.fullField, e.type)) : l && typeof n !== e.type && a.push(Qt(o.messages.types[l], e.fullField, e.type));
}, rM = function(e, n, r, a, o) {
  var i = typeof e.len == "number", l = typeof e.min == "number", u = typeof e.max == "number", s = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, d = n, c = null, v = typeof n == "number", f = typeof n == "string", g = Array.isArray(n);
  if (v ? c = "number" : f ? c = "string" : g && (c = "array"), !c)
    return !1;
  g && (d = n.length), f && (d = n.replace(s, "_").length), i ? d !== e.len && a.push(Qt(o.messages[c].len, e.fullField, e.len)) : l && !u && d < e.min ? a.push(Qt(o.messages[c].min, e.fullField, e.min)) : u && !l && d > e.max ? a.push(Qt(o.messages[c].max, e.fullField, e.max)) : l && u && (d < e.min || d > e.max) && a.push(Qt(o.messages[c].range, e.fullField, e.min, e.max));
}, Wr = "enum", aM = function(e, n, r, a, o) {
  e[Wr] = Array.isArray(e[Wr]) ? e[Wr] : [], e[Wr].indexOf(n) === -1 && a.push(Qt(o.messages[Wr], e.fullField, e[Wr].join(", ")));
}, oM = function(e, n, r, a, o) {
  if (e.pattern) {
    if (e.pattern instanceof RegExp)
      e.pattern.lastIndex = 0, e.pattern.test(n) || a.push(Qt(o.messages.pattern.mismatch, e.fullField, n, e.pattern));
    else if (typeof e.pattern == "string") {
      var i = new RegExp(e.pattern);
      i.test(n) || a.push(Qt(o.messages.pattern.mismatch, e.fullField, n, e.pattern));
    }
  }
}, ot = {
  required: yb,
  whitespace: eM,
  type: nM,
  range: rM,
  enum: aM,
  pattern: oM
}, iM = function(e, n, r, a, o) {
  var i = [], l = e.required || !e.required && a.hasOwnProperty(e.field);
  if (l) {
    if (Et(n, "string") && !e.required)
      return r();
    ot.required(e, n, a, i, o, "string"), Et(n, "string") || (ot.type(e, n, a, i, o), ot.range(e, n, a, i, o), ot.pattern(e, n, a, i, o), e.whitespace === !0 && ot.whitespace(e, n, a, i, o));
  }
  r(i);
}, lM = function(e, n, r, a, o) {
  var i = [], l = e.required || !e.required && a.hasOwnProperty(e.field);
  if (l) {
    if (Et(n) && !e.required)
      return r();
    ot.required(e, n, a, i, o), n !== void 0 && ot.type(e, n, a, i, o);
  }
  r(i);
}, uM = function(e, n, r, a, o) {
  var i = [], l = e.required || !e.required && a.hasOwnProperty(e.field);
  if (l) {
    if (n === "" && (n = void 0), Et(n) && !e.required)
      return r();
    ot.required(e, n, a, i, o), n !== void 0 && (ot.type(e, n, a, i, o), ot.range(e, n, a, i, o));
  }
  r(i);
}, cM = function(e, n, r, a, o) {
  var i = [], l = e.required || !e.required && a.hasOwnProperty(e.field);
  if (l) {
    if (Et(n) && !e.required)
      return r();
    ot.required(e, n, a, i, o), n !== void 0 && ot.type(e, n, a, i, o);
  }
  r(i);
}, sM = function(e, n, r, a, o) {
  var i = [], l = e.required || !e.required && a.hasOwnProperty(e.field);
  if (l) {
    if (Et(n) && !e.required)
      return r();
    ot.required(e, n, a, i, o), Et(n) || ot.type(e, n, a, i, o);
  }
  r(i);
}, dM = function(e, n, r, a, o) {
  var i = [], l = e.required || !e.required && a.hasOwnProperty(e.field);
  if (l) {
    if (Et(n) && !e.required)
      return r();
    ot.required(e, n, a, i, o), n !== void 0 && (ot.type(e, n, a, i, o), ot.range(e, n, a, i, o));
  }
  r(i);
}, fM = function(e, n, r, a, o) {
  var i = [], l = e.required || !e.required && a.hasOwnProperty(e.field);
  if (l) {
    if (Et(n) && !e.required)
      return r();
    ot.required(e, n, a, i, o), n !== void 0 && (ot.type(e, n, a, i, o), ot.range(e, n, a, i, o));
  }
  r(i);
}, vM = function(e, n, r, a, o) {
  var i = [], l = e.required || !e.required && a.hasOwnProperty(e.field);
  if (l) {
    if (n == null && !e.required)
      return r();
    ot.required(e, n, a, i, o, "array"), n != null && (ot.type(e, n, a, i, o), ot.range(e, n, a, i, o));
  }
  r(i);
}, pM = function(e, n, r, a, o) {
  var i = [], l = e.required || !e.required && a.hasOwnProperty(e.field);
  if (l) {
    if (Et(n) && !e.required)
      return r();
    ot.required(e, n, a, i, o), n !== void 0 && ot.type(e, n, a, i, o);
  }
  r(i);
}, hM = "enum", gM = function(e, n, r, a, o) {
  var i = [], l = e.required || !e.required && a.hasOwnProperty(e.field);
  if (l) {
    if (Et(n) && !e.required)
      return r();
    ot.required(e, n, a, i, o), n !== void 0 && ot[hM](e, n, a, i, o);
  }
  r(i);
}, mM = function(e, n, r, a, o) {
  var i = [], l = e.required || !e.required && a.hasOwnProperty(e.field);
  if (l) {
    if (Et(n, "string") && !e.required)
      return r();
    ot.required(e, n, a, i, o), Et(n, "string") || ot.pattern(e, n, a, i, o);
  }
  r(i);
}, yM = function(e, n, r, a, o) {
  var i = [], l = e.required || !e.required && a.hasOwnProperty(e.field);
  if (l) {
    if (Et(n, "date") && !e.required)
      return r();
    if (ot.required(e, n, a, i, o), !Et(n, "date")) {
      var u;
      n instanceof Date ? u = n : u = new Date(n), ot.type(e, u, a, i, o), u && ot.range(e, u.getTime(), a, i, o);
    }
  }
  r(i);
}, bM = function(e, n, r, a, o) {
  var i = [], l = Array.isArray(n) ? "array" : typeof n;
  ot.required(e, n, a, i, o, l), r(i);
}, Gl = function(e, n, r, a, o) {
  var i = e.type, l = [], u = e.required || !e.required && a.hasOwnProperty(e.field);
  if (u) {
    if (Et(n, i) && !e.required)
      return r();
    ot.required(e, n, a, l, o, i), Et(n, i) || ot.type(e, n, a, l, o);
  }
  r(l);
}, CM = function(e, n, r, a, o) {
  var i = [], l = e.required || !e.required && a.hasOwnProperty(e.field);
  if (l) {
    if (Et(n) && !e.required)
      return r();
    ot.required(e, n, a, i, o);
  }
  r(i);
}, Ka = {
  string: iM,
  method: lM,
  number: uM,
  boolean: cM,
  regexp: sM,
  integer: dM,
  float: fM,
  array: vM,
  object: pM,
  enum: gM,
  pattern: mM,
  date: yM,
  url: Gl,
  hex: Gl,
  email: Gl,
  required: bM,
  any: CM
};
function dc() {
  return {
    default: "Validation error on field %s",
    required: "%s is required",
    enum: "%s must be one of %s",
    whitespace: "%s cannot be empty",
    date: {
      format: "%s date %s is invalid for format %s",
      parse: "%s date could not be parsed, %s is invalid ",
      invalid: "%s date %s is invalid"
    },
    types: {
      string: "%s is not a %s",
      method: "%s is not a %s (function)",
      array: "%s is not an %s",
      object: "%s is not an %s",
      number: "%s is not a %s",
      date: "%s is not a %s",
      boolean: "%s is not a %s",
      integer: "%s is not an %s",
      float: "%s is not a %s",
      regexp: "%s is not a valid %s",
      email: "%s is not a valid %s",
      url: "%s is not a valid %s",
      hex: "%s is not a valid %s"
    },
    string: {
      len: "%s must be exactly %s characters",
      min: "%s must be at least %s characters",
      max: "%s cannot be longer than %s characters",
      range: "%s must be between %s and %s characters"
    },
    number: {
      len: "%s must equal %s",
      min: "%s cannot be less than %s",
      max: "%s cannot be greater than %s",
      range: "%s must be between %s and %s"
    },
    array: {
      len: "%s must be exactly %s in length",
      min: "%s cannot be less than %s in length",
      max: "%s cannot be greater than %s in length",
      range: "%s must be between %s and %s in length"
    },
    pattern: {
      mismatch: "%s value %s does not match pattern %s"
    },
    clone: function() {
      var e = JSON.parse(JSON.stringify(this));
      return e.clone = this.clone, e;
    }
  };
}
var fc = dc(), wo = /* @__PURE__ */ function() {
  function t(n) {
    this.rules = null, this._messages = fc, this.define(n);
  }
  var e = t.prototype;
  return e.define = function(r) {
    var a = this;
    if (!r)
      throw new Error("Cannot configure a schema with no rules");
    if (typeof r != "object" || Array.isArray(r))
      throw new Error("Rules must be an object");
    this.rules = {}, Object.keys(r).forEach(function(o) {
      var i = r[o];
      a.rules[o] = Array.isArray(i) ? i : [i];
    });
  }, e.messages = function(r) {
    return r && (this._messages = Dp(dc(), r)), this._messages;
  }, e.validate = function(r, a, o) {
    var i = this;
    a === void 0 && (a = {}), o === void 0 && (o = function() {
    });
    var l = r, u = a, s = o;
    if (typeof u == "function" && (s = u, u = {}), !this.rules || Object.keys(this.rules).length === 0)
      return s && s(null, l), Promise.resolve(l);
    function d(p) {
      var y = [], h = {};
      function w(x) {
        if (Array.isArray(x)) {
          var S;
          y = (S = y).concat.apply(S, x);
        } else
          y.push(x);
      }
      for (var C = 0; C < p.length; C++)
        w(p[C]);
      y.length ? (h = sc(y), s(y, h)) : s(null, l);
    }
    if (u.messages) {
      var c = this.messages();
      c === fc && (c = dc()), Dp(c, u.messages), u.messages = c;
    } else
      u.messages = this.messages();
    var v = {}, f = u.keys || Object.keys(this.rules);
    f.forEach(function(p) {
      var y = i.rules[p], h = l[p];
      y.forEach(function(w) {
        var C = w;
        typeof C.transform == "function" && (l === r && (l = xr({}, l)), h = l[p] = C.transform(h)), typeof C == "function" ? C = {
          validator: C
        } : C = xr({}, C), C.validator = i.getValidationMethod(C), C.validator && (C.field = p, C.fullField = C.fullField || p, C.type = i.getType(C), v[p] = v[p] || [], v[p].push({
          rule: C,
          value: h,
          source: l,
          field: p
        }));
      });
    });
    var g = {};
    return QN(v, u, function(p, y) {
      var h = p.rule, w = (h.type === "object" || h.type === "array") && (typeof h.fields == "object" || typeof h.defaultField == "object");
      w = w && (h.required || !h.required && p.value), h.field = p.field;
      function C(b, P) {
        return xr({}, P, {
          fullField: h.fullField + "." + b,
          fullFields: h.fullFields ? [].concat(h.fullFields, [b]) : [b]
        });
      }
      function x(b) {
        b === void 0 && (b = []);
        var P = Array.isArray(b) ? b : [b];
        !u.suppressWarning && P.length && t.warning("async-validator:", P), P.length && h.message !== void 0 && (P = [].concat(h.message));
        var T = P.map(Ap(h, l));
        if (u.first && T.length)
          return g[h.field] = 1, y(T);
        if (!w)
          y(T);
        else {
          if (h.required && !p.value)
            return h.message !== void 0 ? T = [].concat(h.message).map(Ap(h, l)) : u.error && (T = [u.error(h, Qt(u.messages.required, h.field))]), y(T);
          var O = {};
          h.defaultField && Object.keys(p.value).map(function(K) {
            O[K] = h.defaultField;
          }), O = xr({}, O, p.rule.fields);
          var D = {};
          Object.keys(O).forEach(function(K) {
            var R = O[K], E = Array.isArray(R) ? R : [R];
            D[K] = E.map(C.bind(null, K));
          });
          var V = new t(D);
          V.messages(u.messages), p.rule.options && (p.rule.options.messages = u.messages, p.rule.options.error = u.error), V.validate(p.value, p.rule.options || u, function(K) {
            var R = [];
            T && T.length && R.push.apply(R, T), K && K.length && R.push.apply(R, K), y(R.length ? R : null);
          });
        }
      }
      var S;
      if (h.asyncValidator)
        S = h.asyncValidator(h, p.value, x, p.source, u);
      else if (h.validator) {
        try {
          S = h.validator(h, p.value, x, p.source, u);
        } catch (b) {
          console.error == null || console.error(b), u.suppressValidatorError || setTimeout(function() {
            throw b;
          }, 0), x(b.message);
        }
        S === !0 ? x() : S === !1 ? x(typeof h.message == "function" ? h.message(h.fullField || h.field) : h.message || (h.fullField || h.field) + " fails") : S instanceof Array ? x(S) : S instanceof Error && x(S.message);
      }
      S && S.then && S.then(function() {
        return x();
      }, function(b) {
        return x(b);
      });
    }, function(p) {
      d(p);
    }, l);
  }, e.getType = function(r) {
    if (r.type === void 0 && r.pattern instanceof RegExp && (r.type = "pattern"), typeof r.validator != "function" && r.type && !Ka.hasOwnProperty(r.type))
      throw new Error(Qt("Unknown rule type %s", r.type));
    return r.type || "string";
  }, e.getValidationMethod = function(r) {
    if (typeof r.validator == "function")
      return r.validator;
    var a = Object.keys(r), o = a.indexOf("message");
    return o !== -1 && a.splice(o, 1), a.length === 1 && a[0] === "required" ? Ka.required : Ka[this.getType(r)] || void 0;
  }, t;
}();
wo.register = function(e, n) {
  if (typeof n != "function")
    throw new Error("Cannot register a validator by type, validator is not a function");
  Ka[e] = n;
};
wo.warning = mb;
wo.messages = fc;
wo.validators = Ka;
function rr(t) {
  return t == null ? [] : Array.isArray(t) ? t : [t];
}
function bb(t, e) {
  for (var n = t, r = 0; r < e.length; r += 1) {
    if (n == null)
      return;
    n = n[e[r]];
  }
  return n;
}
function Cb(t, e, n, r) {
  if (!e.length)
    return n;
  var a = im(e), o = a[0], i = a.slice(1), l;
  return !t && typeof o == "number" ? l = [] : Array.isArray(t) ? l = Ie(t) : l = k({}, t), r && n === void 0 && i.length === 1 ? delete l[o][i[0]] : l[o] = Cb(l[o], i, n, r), l;
}
function wM(t, e, n) {
  var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  return e.length && r && n === void 0 && !bb(t, e.slice(0, -1)) ? t : Cb(t, e, n, r);
}
function vc(t) {
  return rr(t);
}
function SM(t, e) {
  var n = bb(t, e);
  return n;
}
function xM(t, e, n) {
  var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1, a = wM(t, e, n, r);
  return a;
}
function PM(t, e) {
  return t && t.some(function(n) {
    return TM(n, e);
  });
}
function Rp(t) {
  return Le(t) === "object" && t !== null && Object.getPrototypeOf(t) === Object.prototype;
}
function wb(t, e) {
  var n = Array.isArray(t) ? Ie(t) : k({}, t);
  return e && Object.keys(e).forEach(function(r) {
    var a = n[r], o = e[r], i = Rp(a) && Rp(o);
    n[r] = i ? wb(a, o || {}) : o;
  }), n;
}
function OM(t) {
  for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++)
    n[r - 1] = arguments[r];
  return n.reduce(function(a, o) {
    return wb(a, o);
  }, t);
}
function $p(t, e) {
  var n = {};
  return e.forEach(function(r) {
    var a = SM(t, r);
    n = xM(n, r, a);
  }), n;
}
function TM(t, e) {
  return !t || !e || t.length !== e.length ? !1 : t.every(function(n, r) {
    return e[r] === n;
  });
}
var qt = "'${name}' is not a valid ${type}", sl = {
  default: "Validation error on field '${name}'",
  required: "'${name}' is required",
  enum: "'${name}' must be one of [${enum}]",
  whitespace: "'${name}' cannot be empty",
  date: {
    format: "'${name}' is invalid for format date",
    parse: "'${name}' could not be parsed as date",
    invalid: "'${name}' is invalid date"
  },
  types: {
    string: qt,
    method: qt,
    array: qt,
    object: qt,
    number: qt,
    date: qt,
    boolean: qt,
    integer: qt,
    float: qt,
    regexp: qt,
    email: qt,
    url: qt,
    hex: qt
  },
  string: {
    len: "'${name}' must be exactly ${len} characters",
    min: "'${name}' must be at least ${min} characters",
    max: "'${name}' cannot be longer than ${max} characters",
    range: "'${name}' must be between ${min} and ${max} characters"
  },
  number: {
    len: "'${name}' must equal ${len}",
    min: "'${name}' cannot be less than ${min}",
    max: "'${name}' cannot be greater than ${max}",
    range: "'${name}' must be between ${min} and ${max}"
  },
  array: {
    len: "'${name}' must be exactly ${len} in length",
    min: "'${name}' cannot be less than ${min} in length",
    max: "'${name}' cannot be greater than ${max} in length",
    range: "'${name}' must be between ${min} and ${max} in length"
  },
  pattern: {
    mismatch: "'${name}' does not match pattern ${pattern}"
  }
}, dl = globalThis && globalThis.__awaiter || function(t, e, n, r) {
  function a(o) {
    return o instanceof n ? o : new n(function(i) {
      i(o);
    });
  }
  return new (n || (n = Promise))(function(o, i) {
    function l(d) {
      try {
        s(r.next(d));
      } catch (c) {
        i(c);
      }
    }
    function u(d) {
      try {
        s(r.throw(d));
      } catch (c) {
        i(c);
      }
    }
    function s(d) {
      d.done ? o(d.value) : a(d.value).then(l, u);
    }
    s((r = r.apply(t, e || [])).next());
  });
}, IM = wo;
function kM(t, e) {
  return t.replace(/\$\{\w+\}/g, function(n) {
    var r = n.slice(2, -1);
    return e[r];
  });
}
function pc(t, e, n, r, a) {
  return dl(this, void 0, void 0, /* @__PURE__ */ Ut.mark(function o() {
    var i, l, u, s, d, c, v, f;
    return Ut.wrap(function(p) {
      for (; ; )
        switch (p.prev = p.next) {
          case 0:
            return i = k({}, n), delete i.ruleIndex, delete i.trigger, l = null, i && i.type === "array" && i.defaultField && (l = i.defaultField, delete i.defaultField), u = new IM(j({}, t, [i])), s = OM({}, sl, r.validateMessages), u.messages(s), d = [], p.prev = 9, p.next = 12, Promise.resolve(u.validate(j({}, t, e), k({}, r)));
          case 12:
            p.next = 17;
            break;
          case 14:
            p.prev = 14, p.t0 = p.catch(9), p.t0.errors ? d = p.t0.errors.map(function(y, h) {
              var w = y.message;
              return At(w) ? Fi(w, {
                key: "error_".concat(h)
              }) : w;
            }) : (console.error(p.t0), d = [s.default()]);
          case 17:
            if (!(!d.length && l)) {
              p.next = 22;
              break;
            }
            return p.next = 20, Promise.all(e.map(function(y, h) {
              return pc("".concat(t, ".").concat(h), y, l, r, a);
            }));
          case 20:
            return c = p.sent, p.abrupt("return", c.reduce(function(y, h) {
              return [].concat(Ie(y), Ie(h));
            }, []));
          case 22:
            return v = k(k(k({}, n), {
              name: t,
              enum: (n.enum || []).join(", ")
            }), a), f = d.map(function(y) {
              return typeof y == "string" ? kM(y, v) : y;
            }), p.abrupt("return", f);
          case 25:
          case "end":
            return p.stop();
        }
    }, o, null, [[9, 14]]);
  }));
}
function Sb(t, e, n, r, a, o) {
  var i = this, l = t.join("."), u = n.map(function(c, v) {
    var f = c.validator, g = k(k({}, c), {
      ruleIndex: v
    });
    return f && (g.validator = function(p, y, h) {
      var w = !1, C = function() {
        for (var b = arguments.length, P = new Array(b), T = 0; T < b; T++)
          P[T] = arguments[T];
        Promise.resolve().then(function() {
          Ze(!w, "Your validator function has already return a promise. `callback` will be ignored."), w || h.apply(void 0, P);
        });
      }, x = f(p, y, C);
      w = x && typeof x.then == "function" && typeof x.catch == "function", Ze(w, "`callback` is deprecated. Please return a promise instead."), w && x.then(function() {
        h();
      }).catch(function(S) {
        h(S || " ");
      });
    }), g;
  }).sort(function(c, v) {
    var f = c.warningOnly, g = c.ruleIndex, p = v.warningOnly, y = v.ruleIndex;
    return !!f == !!p ? g - y : f ? 1 : -1;
  }), s;
  if (a === !0)
    s = new Promise(function(c, v) {
      return dl(i, void 0, void 0, /* @__PURE__ */ Ut.mark(function f() {
        var g, p, y;
        return Ut.wrap(function(w) {
          for (; ; )
            switch (w.prev = w.next) {
              case 0:
                g = 0;
              case 1:
                if (!(g < u.length)) {
                  w.next = 12;
                  break;
                }
                return p = u[g], w.next = 5, pc(l, e, p, r, o);
              case 5:
                if (y = w.sent, !y.length) {
                  w.next = 9;
                  break;
                }
                return v([{
                  errors: y,
                  rule: p
                }]), w.abrupt("return");
              case 9:
                g += 1, w.next = 1;
                break;
              case 12:
                c([]);
              case 13:
              case "end":
                return w.stop();
            }
        }, f);
      }));
    });
  else {
    var d = u.map(function(c) {
      return pc(l, e, c, r, o).then(function(v) {
        return {
          errors: v,
          rule: c
        };
      });
    });
    s = (a ? EM(d) : _M(d)).then(function(c) {
      return Promise.reject(c);
    });
  }
  return s.catch(function(c) {
    return c;
  }), s;
}
function _M(t) {
  return dl(this, void 0, void 0, /* @__PURE__ */ Ut.mark(function e() {
    return Ut.wrap(function(r) {
      for (; ; )
        switch (r.prev = r.next) {
          case 0:
            return r.abrupt("return", Promise.all(t).then(function(a) {
              var o, i = (o = []).concat.apply(o, Ie(a));
              return i;
            }));
          case 1:
          case "end":
            return r.stop();
        }
    }, e);
  }));
}
function EM(t) {
  return dl(this, void 0, void 0, /* @__PURE__ */ Ut.mark(function e() {
    var n;
    return Ut.wrap(function(a) {
      for (; ; )
        switch (a.prev = a.next) {
          case 0:
            return n = 0, a.abrupt("return", new Promise(function(o) {
              t.forEach(function(i) {
                i.then(function(l) {
                  l.errors.length && o([l]), n += 1, n === t.length && o([]);
                });
              });
            }));
          case 2:
          case "end":
            return a.stop();
        }
    }, e);
  }));
}
var NM = 1, MM = 2;
function AM(t, e, n, r) {
  var a = n.length, o = a, i = !r;
  if (t == null)
    return !o;
  for (t = Object(t); a--; ) {
    var l = n[a];
    if (i && l[2] ? l[1] !== t[l[0]] : !(l[0] in t))
      return !1;
  }
  for (; ++a < o; ) {
    l = n[a];
    var u = l[0], s = t[u], d = l[1];
    if (i && l[2]) {
      if (s === void 0 && !(u in t))
        return !1;
    } else {
      var c = new kn();
      if (r)
        var v = r(s, d, u, t, e, c);
      if (!(v === void 0 ? Yi(d, s, NM | MM, r, c) : v))
        return !1;
    }
  }
  return !0;
}
function xb(t) {
  return t === t && !Kn(t);
}
function DM(t) {
  for (var e = ma(t), n = e.length; n--; ) {
    var r = e[n], a = t[r];
    e[n] = [r, a, xb(a)];
  }
  return e;
}
function Pb(t, e) {
  return function(n) {
    return n == null ? !1 : n[t] === e && (e !== void 0 || t in Object(n));
  };
}
function FM(t) {
  var e = DM(t);
  return e.length == 1 && e[0][2] ? Pb(e[0][0], e[0][1]) : function(n) {
    return n === t || AM(n, t, e);
  };
}
function RM(t, e, n) {
  var r = t == null ? void 0 : qs(t, e);
  return r === void 0 ? n : r;
}
var $M = 1, LM = 2;
function jM(t, e) {
  return Us(t) && xb(e) ? Pb(yo(t), e) : function(n) {
    var r = RM(n, t);
    return r === void 0 && r === e ? t_(n, t) : Yi(e, r, $M | LM);
  };
}
function VM(t) {
  return function(e) {
    return qs(e, t);
  };
}
function BM(t) {
  return Us(t) ? $k(yo(t)) : VM(t);
}
function od(t) {
  return typeof t == "function" ? t : t == null ? Gs : typeof t == "object" ? cn(t) ? jM(t[0], t[1]) : FM(t) : BM(t);
}
function KM(t) {
  return function(e, n, r) {
    var a = Object(e);
    if (!fo(e)) {
      var o = od(n);
      e = ma(e), n = function(l) {
        return o(a[l], l, a);
      };
    }
    var i = t(e, n, r);
    return i > -1 ? a[o ? e[i] : i] : void 0;
  };
}
var HM = Math.max;
function zM(t, e, n) {
  var r = t == null ? 0 : t.length;
  if (!r)
    return -1;
  var a = n == null ? 0 : qk(n);
  return a < 0 && (a = HM(r + a, 0)), dy(t, od(e), a);
}
var WM = KM(zM);
const UM = WM;
var Ob = Symbol("formContextKey"), Tb = function(e) {
  ct(Ob, e);
}, id = function() {
  return ut(Ob, {
    name: F(function() {
    }),
    labelAlign: F(function() {
      return "right";
    }),
    vertical: F(function() {
      return !1;
    }),
    addField: function(n, r) {
    },
    removeField: function(n) {
    },
    model: F(function() {
    }),
    rules: F(function() {
    }),
    colon: F(function() {
    }),
    labelWrap: F(function() {
    }),
    labelCol: F(function() {
    }),
    requiredMark: F(function() {
      return !1;
    }),
    validateTrigger: F(function() {
    }),
    onValidate: function() {
    },
    validateMessages: F(function() {
      return sl;
    })
  });
}, Ib = Symbol("formItemPrefixContextKey"), YM = function(e) {
  ct(Ib, e);
}, qM = function() {
  return ut(Ib, {
    prefixCls: F(function() {
      return "";
    })
  });
}, ld = function(e, n) {
  var r, a = n.slots, o = n.emit, i = n.attrs, l, u, s, d, c, v = k(k({}, e), i), f = v.prefixCls, g = v.htmlFor, p = v.labelCol, y = v.labelAlign, h = v.colon, w = v.required, C = v.requiredMark, x = co("Form"), S = De(x, 1), b = S[0], P = (l = e.label) !== null && l !== void 0 ? l : (u = a.label) === null || u === void 0 ? void 0 : u.call(a);
  if (!P)
    return null;
  var T = id(), O = T.vertical, D = T.labelAlign, V = T.labelCol, K = T.labelWrap, R = T.colon, E = p || (V == null ? void 0 : V.value) || {}, M = y || (D == null ? void 0 : D.value), N = "".concat(f, "-item-label"), _ = ge(N, M === "left" && "".concat(N, "-left"), E.class, j({}, "".concat(N, "-wrap"), !!K.value)), I = P, A = h === !0 || (R == null ? void 0 : R.value) !== !1 && h !== !1, B = A && !O.value;
  B && typeof P == "string" && P.trim() !== "" && (I = P.replace(/[:|：]\s*$/, "")), I = m(ft, null, [I, (s = a.tooltip) === null || s === void 0 ? void 0 : s.call(a, {
    class: "".concat(f, "-item-tooltip")
  })]), C === "optional" && !w && (I = m(ft, null, [I, m("span", {
    class: "".concat(f, "-item-optional")
  }, [((d = b.value) === null || d === void 0 ? void 0 : d.optional) || ((c = ir.Form) === null || c === void 0 ? void 0 : c.optional)])]));
  var W = ge((r = {}, j(r, "".concat(f, "-item-required"), w), j(r, "".concat(f, "-item-required-mark-optional"), C === "optional"), j(r, "".concat(f, "-item-no-colon"), !A), r));
  return m(tb, Y(Y({}, E), {}, {
    class: _
  }), {
    default: function() {
      return [m("label", {
        for: g,
        class: W,
        title: typeof P == "string" ? P : "",
        onClick: function(L) {
          return o("click", L);
        }
      }, [I])];
    }
  });
};
ld.displayName = "FormItemLabel";
ld.inheritAttrs = !1;
const GM = ld, XM = pe({
  name: "ErrorList",
  props: ["errors", "help", "onDomErrorVisibleChange", "helpStatus", "warnings"],
  setup: function(e) {
    var n = Qe("", e), r = n.prefixCls, a = qM(), o = a.prefixCls, i = a.status, l = F(function() {
      return "".concat(o.value, "-item-explain");
    }), u = F(function() {
      return !!(e.errors && e.errors.length);
    }), s = G(i.value);
    return Ce([u, i], function() {
      u.value && (s.value = i.value);
    }), function() {
      var d, c, v = Zi("".concat(r.value, "-show-help-item")), f = Ac("".concat(r.value, "-show-help-item"), v);
      return f.class = l.value, !((d = e.errors) === null || d === void 0) && d.length ? m(Oc, Y(Y({}, f), {}, {
        tag: "div"
      }), {
        default: function() {
          return [(c = e.errors) === null || c === void 0 ? void 0 : c.map(function(p, y) {
            return m("div", {
              key: y,
              role: "alert",
              class: s.value ? "".concat(l.value, "-").concat(s.value) : ""
            }, [p]);
          })];
        }
      }) : null;
    };
  }
});
var QM = {
  success: jc,
  warning: jg,
  error: Ar,
  validating: Bn
}, JM = pe({
  slots: ["help", "extra", "errors"],
  inheritAttrs: !1,
  props: ["prefixCls", "errors", "hasFeedback", "onDomErrorVisibleChange", "wrapperCol", "help", "extra", "status"],
  setup: function(e, n) {
    var r = n.slots, a = id(), o = a.wrapperCol, i = k({}, a);
    return delete i.labelCol, delete i.wrapperCol, Tb(i), YM({
      prefixCls: F(function() {
        return e.prefixCls;
      }),
      status: F(function() {
        return e.status;
      })
    }), function() {
      var l, u, s, d = e.prefixCls, c = e.wrapperCol, v = e.help, f = v === void 0 ? (l = r.help) === null || l === void 0 ? void 0 : l.call(r) : v, g = e.errors, p = g === void 0 ? (u = r.errors) === null || u === void 0 ? void 0 : u.call(r) : g, y = e.hasFeedback, h = e.status, w = e.extra, C = w === void 0 ? (s = r.extra) === null || s === void 0 ? void 0 : s.call(r) : w, x = "".concat(d, "-item"), S = c || (o == null ? void 0 : o.value) || {}, b = ge("".concat(x, "-control"), S.class), P = h && QM[h];
      return m(tb, Y(Y({}, S), {}, {
        class: b
      }), {
        default: function() {
          var O;
          return m(ft, null, [m("div", {
            class: "".concat(x, "-control-input")
          }, [m("div", {
            class: "".concat(x, "-control-input-content")
          }, [(O = r.default) === null || O === void 0 ? void 0 : O.call(r)]), y && P ? m("span", {
            class: "".concat(x, "-children-icon")
          }, [m(P, null, null)]) : null]), m(XM, {
            errors: p,
            help: f,
            class: "".concat(x, "-explain-connected")
          }, null), C ? m("div", {
            class: "".concat(x, "-extra")
          }, [C]) : null]);
        }
      });
    };
  }
});
const ZM = JM;
function eA(t) {
  var e = Xe(t.value.slice()), n = null;
  return Ue(function() {
    clearTimeout(n), n = setTimeout(function() {
      e.value = t.value;
    }, t.value.length ? 0 : 10);
  }), e;
}
Ht("success", "warning", "error", "validating", "");
function Xl(t, e, n) {
  var r = t, a = e, o = 0;
  try {
    for (var i = a.length; o < i - 1 && !(!r && !n); ++o) {
      var l = a[o];
      if (l in r)
        r = r[l];
      else {
        if (n)
          throw Error("please transfer a valid name path to form item!");
        break;
      }
    }
    if (n && !r)
      throw Error("please transfer a valid name path to form item!");
  } catch {
    console.error("please transfer a valid name path to form item!");
  }
  return {
    o: r,
    k: a[o],
    v: r ? r[a[o]] : void 0
  };
}
var tA = function() {
  return {
    htmlFor: String,
    prefixCls: String,
    label: Q.any,
    help: Q.any,
    extra: Q.any,
    labelCol: {
      type: Object
    },
    wrapperCol: {
      type: Object
    },
    hasFeedback: {
      type: Boolean,
      default: !1
    },
    colon: {
      type: Boolean,
      default: void 0
    },
    labelAlign: Q.oneOf(Ht("left", "right")),
    prop: {
      type: [String, Number, Array]
    },
    name: {
      type: [String, Number, Array]
    },
    rules: [Array, Object],
    autoLink: {
      type: Boolean,
      default: !0
    },
    required: {
      type: Boolean,
      default: void 0
    },
    validateFirst: {
      type: Boolean,
      default: void 0
    },
    validateStatus: Q.oneOf(Ht("", "success", "warning", "error", "validating")),
    validateTrigger: {
      type: [String, Array]
    },
    messageVariables: {
      type: Object
    },
    hidden: Boolean,
    noStyle: Boolean
  };
}, nA = 0, rA = "form_item";
const kb = pe({
  name: "AFormItem",
  inheritAttrs: !1,
  __ANT_NEW_FORM_ITEM: !0,
  props: tA(),
  slots: ["help", "label", "extra"],
  setup: function(e, n) {
    var r = n.slots, a = n.attrs, o = n.expose;
    Ze(e.prop === void 0, "`prop` is deprecated. Please use `name` instead.");
    var i = "form-item-".concat(++nA), l = Qe("form", e), u = l.prefixCls, s = id(), d = F(function() {
      return e.name || e.prop;
    }), c = G([]), v = G(!1), f = G(), g = F(function() {
      var A = d.value;
      return vc(A);
    }), p = F(function() {
      if (g.value.length) {
        var A = s.name.value, B = g.value.join("_");
        return A ? "".concat(A, "_").concat(B) : "".concat(rA, "_").concat(B);
      } else
        return;
    }), y = function() {
      var B = s.model.value;
      if (!(!B || !d.value))
        return Xl(B, g.value, !0).v;
    }, h = F(function() {
      return y();
    }), w = G(li(h.value)), C = F(function() {
      var A = e.validateTrigger !== void 0 ? e.validateTrigger : s.validateTrigger.value;
      return A = A === void 0 ? "change" : A, rr(A);
    }), x = F(function() {
      var A = s.rules.value, B = e.rules, W = e.required !== void 0 ? {
        required: !!e.required,
        trigger: C.value
      } : [], U = Xl(A, g.value);
      A = A ? U.o[U.k] || U.v : [];
      var z = [].concat(B || A || []);
      return UM(z, function(L) {
        return L.required;
      }) ? z : z.concat(W);
    }), S = F(function() {
      var A = x.value, B = !1;
      return A && A.length && A.every(function(W) {
        return W.required ? (B = !0, !1) : !0;
      }), B || e.required;
    }), b = G();
    Ue(function() {
      b.value = e.validateStatus;
    });
    var P = F(function() {
      var A = {};
      return typeof e.label == "string" ? A.label = e.label : e.name && (A.label = String(name)), e.messageVariables && (A = k(k({}, A), e.messageVariables)), A;
    }), T = function(B) {
      if (g.value.length !== 0) {
        var W = e.validateFirst, U = W === void 0 ? !1 : W, z = B || {}, L = z.triggerName, $ = x.value;
        if (L && ($ = $.filter(function(H) {
          var J = H.trigger;
          if (!J && !C.value.length)
            return !0;
          var Z = rr(J || C.value);
          return Z.includes(L);
        })), !$.length)
          return Promise.resolve();
        var q = Sb(g.value, h.value, $, k({
          validateMessages: s.validateMessages.value
        }, B), U, P.value);
        return b.value = "validating", c.value = [], q.catch(function(H) {
          return H;
        }).then(function() {
          var H = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
          if (b.value === "validating") {
            var J = H.filter(function(Z) {
              return Z && Z.errors.length;
            });
            b.value = J.length ? "error" : "success", c.value = J.map(function(Z) {
              return Z.errors;
            }), s.onValidate(d.value, !c.value.length, c.value.length ? Ot(c.value[0]) : null);
          }
        }), q;
      }
    }, O = function() {
      T({
        triggerName: "blur"
      });
    }, D = function() {
      if (v.value) {
        v.value = !1;
        return;
      }
      T({
        triggerName: "change"
      });
    }, V = function() {
      b.value = e.validateStatus, v.value = !1, c.value = [];
    }, K = function() {
      b.value = e.validateStatus, v.value = !0, c.value = [];
      var B = s.model.value || {}, W = h.value, U = Xl(B, g.value, !0);
      Array.isArray(W) ? U.o[U.k] = [].concat(w.value) : U.o[U.k] = w.value, vt(function() {
        v.value = !1;
      });
    }, R = F(function() {
      return e.htmlFor === void 0 ? p.value : e.htmlFor;
    }), E = function() {
      var B = R.value;
      if (!(!B || !f.value)) {
        var W = f.value.$el.querySelector('[id="'.concat(B, '"]'));
        W && W.focus && W.focus();
      }
    };
    o({
      onFieldBlur: O,
      onFieldChange: D,
      clearValidate: V,
      resetField: K
    }), mI({
      id: p,
      onFieldBlur: function() {
        e.autoLink && O();
      },
      onFieldChange: function() {
        e.autoLink && D();
      },
      clearValidate: V
    }, F(function() {
      return !!(e.autoLink && s.model.value && d.value);
    }));
    var M = !1;
    Ce(d, function(A) {
      A ? M || (M = !0, s.addField(i, {
        fieldValue: h,
        fieldId: p,
        fieldName: d,
        resetField: K,
        clearValidate: V,
        namePath: g,
        validateRules: T,
        rules: x
      })) : (M = !1, s.removeField(i));
    }, {
      immediate: !0
    }), ht(function() {
      s.removeField(i);
    });
    var N = eA(c), _ = F(function() {
      return e.validateStatus !== void 0 ? e.validateStatus : N.value.length ? "error" : b.value;
    }), I = F(function() {
      var A;
      return A = {}, j(A, "".concat(u.value, "-item"), !0), j(A, "".concat(u.value, "-item-has-feedback"), _.value && e.hasFeedback), j(A, "".concat(u.value, "-item-has-success"), _.value === "success"), j(A, "".concat(u.value, "-item-has-warning"), _.value === "warning"), j(A, "".concat(u.value, "-item-has-error"), _.value === "error"), j(A, "".concat(u.value, "-item-is-validating"), _.value === "validating"), j(A, "".concat(u.value, "-item-hidden"), e.hidden), A;
    });
    return function() {
      var A, B;
      if (e.noStyle)
        return (A = r.default) === null || A === void 0 ? void 0 : A.call(r);
      var W = (B = e.help) !== null && B !== void 0 ? B : r.help ? yn(r.help()) : null;
      return m(S_, Y(Y({}, a), {}, {
        class: [I.value, W != null || N.value.length ? "".concat(u.value, "-item-with-help") : "", a.class],
        key: "row"
      }), {
        default: function() {
          var z, L, $, q;
          return m(ft, null, [m(GM, Y(Y({}, e), {}, {
            htmlFor: R.value,
            required: S.value,
            requiredMark: s.requiredMark.value,
            prefixCls: u.value,
            onClick: E,
            label: (z = e.label) !== null && z !== void 0 ? z : (L = r.label) === null || L === void 0 ? void 0 : L.call(r)
          }), null), m(ZM, Y(Y({}, e), {}, {
            errors: W != null ? rr(W) : N.value,
            prefixCls: u.value,
            status: _.value,
            ref: f,
            help: W,
            extra: ($ = e.extra) !== null && $ !== void 0 ? $ : (q = r.extra) === null || q === void 0 ? void 0 : q.call(r)
          }), {
            default: r.default
          })]);
        }
      });
    };
  }
});
function _b(t) {
  var e = !1, n = t.length, r = [];
  return t.length ? new Promise(function(a, o) {
    t.forEach(function(i, l) {
      i.catch(function(u) {
        return e = !0, u;
      }).then(function(u) {
        n -= 1, r[l] = u, !(n > 0) && (e && o(r), a(r));
      });
    });
  }) : Promise.resolve([]);
}
function Lp(t) {
  return typeof t == "object" && t != null && t.nodeType === 1;
}
function jp(t, e) {
  return (!e || t !== "hidden") && t !== "visible" && t !== "clip";
}
function Ql(t, e) {
  if (t.clientHeight < t.scrollHeight || t.clientWidth < t.scrollWidth) {
    var n = getComputedStyle(t, null);
    return jp(n.overflowY, e) || jp(n.overflowX, e) || function(r) {
      var a = function(o) {
        if (!o.ownerDocument || !o.ownerDocument.defaultView)
          return null;
        try {
          return o.ownerDocument.defaultView.frameElement;
        } catch {
          return null;
        }
      }(r);
      return !!a && (a.clientHeight < r.scrollHeight || a.clientWidth < r.scrollWidth);
    }(t);
  }
  return !1;
}
function Yo(t, e, n, r, a, o, i, l) {
  return o < t && i > e || o > t && i < e ? 0 : o <= t && l <= n || i >= e && l >= n ? o - t - r : i > e && l < n || o < t && l > n ? i - e + a : 0;
}
function Vp(t, e) {
  var n = window, r = e.scrollMode, a = e.block, o = e.inline, i = e.boundary, l = e.skipOverflowHiddenElements, u = typeof i == "function" ? i : function(ae) {
    return ae !== i;
  };
  if (!Lp(t))
    throw new TypeError("Invalid target");
  for (var s = document.scrollingElement || document.documentElement, d = [], c = t; Lp(c) && u(c); ) {
    if ((c = c.parentElement) === s) {
      d.push(c);
      break;
    }
    c != null && c === document.body && Ql(c) && !Ql(document.documentElement) || c != null && Ql(c, l) && d.push(c);
  }
  for (var v = n.visualViewport ? n.visualViewport.width : innerWidth, f = n.visualViewport ? n.visualViewport.height : innerHeight, g = window.scrollX || pageXOffset, p = window.scrollY || pageYOffset, y = t.getBoundingClientRect(), h = y.height, w = y.width, C = y.top, x = y.right, S = y.bottom, b = y.left, P = a === "start" || a === "nearest" ? C : a === "end" ? S : C + h / 2, T = o === "center" ? b + w / 2 : o === "end" ? x : b, O = [], D = 0; D < d.length; D++) {
    var V = d[D], K = V.getBoundingClientRect(), R = K.height, E = K.width, M = K.top, N = K.right, _ = K.bottom, I = K.left;
    if (r === "if-needed" && C >= 0 && b >= 0 && S <= f && x <= v && C >= M && S <= _ && b >= I && x <= N)
      return O;
    var A = getComputedStyle(V), B = parseInt(A.borderLeftWidth, 10), W = parseInt(A.borderTopWidth, 10), U = parseInt(A.borderRightWidth, 10), z = parseInt(A.borderBottomWidth, 10), L = 0, $ = 0, q = "offsetWidth" in V ? V.offsetWidth - V.clientWidth - B - U : 0, H = "offsetHeight" in V ? V.offsetHeight - V.clientHeight - W - z : 0;
    if (s === V)
      L = a === "start" ? P : a === "end" ? P - f : a === "nearest" ? Yo(p, p + f, f, W, z, p + P, p + P + h, h) : P - f / 2, $ = o === "start" ? T : o === "center" ? T - v / 2 : o === "end" ? T - v : Yo(g, g + v, v, B, U, g + T, g + T + w, w), L = Math.max(0, L + p), $ = Math.max(0, $ + g);
    else {
      L = a === "start" ? P - M - W : a === "end" ? P - _ + z + H : a === "nearest" ? Yo(M, _, R, W, z + H, P, P + h, h) : P - (M + R / 2) + H / 2, $ = o === "start" ? T - I - B : o === "center" ? T - (I + E / 2) + q / 2 : o === "end" ? T - N + U + q : Yo(I, N, E, B, U + q, T, T + w, w);
      var J = V.scrollLeft, Z = V.scrollTop;
      P += Z - (L = Math.max(0, Math.min(Z + L, V.scrollHeight - R + H))), T += J - ($ = Math.max(0, Math.min(J + $, V.scrollWidth - E + q)));
    }
    O.push({ el: V, top: L, left: $ });
  }
  return O;
}
function Eb(t) {
  return t === Object(t) && Object.keys(t).length !== 0;
}
function aA(t, e) {
  e === void 0 && (e = "auto");
  var n = "scrollBehavior" in document.body.style;
  t.forEach(function(r) {
    var a = r.el, o = r.top, i = r.left;
    a.scroll && n ? a.scroll({
      top: o,
      left: i,
      behavior: e
    }) : (a.scrollTop = o, a.scrollLeft = i);
  });
}
function oA(t) {
  return t === !1 ? {
    block: "end",
    inline: "nearest"
  } : Eb(t) ? t : {
    block: "start",
    inline: "nearest"
  };
}
function iA(t, e) {
  var n = t.isConnected || t.ownerDocument.documentElement.contains(t);
  if (Eb(e) && typeof e.behavior == "function")
    return e.behavior(n ? Vp(t, e) : []);
  if (!!n) {
    var r = oA(e);
    return aA(Vp(t, r), r.behavior);
  }
}
var lA = Math.min;
function uA(t, e, n) {
  for (var r = n ? vy : fy, a = t[0].length, o = t.length, i = o, l = Array(o), u = 1 / 0, s = []; i--; ) {
    var d = t[i];
    i && e && (d = el(d, Ui(e))), u = lA(d.length, u), l[i] = !n && (e || a >= 120 && d.length >= 120) ? new da(i && d) : void 0;
  }
  d = t[0];
  var c = -1, v = l[0];
  e:
    for (; ++c < a && s.length < u; ) {
      var f = d[c], g = e ? e(f) : f;
      if (f = n || f !== 0 ? f : 0, !(v ? mi(v, g) : r(s, g, n))) {
        for (i = o; --i; ) {
          var p = l[i];
          if (!(p ? mi(p, g) : r(t[i], g, n)))
            continue e;
        }
        v && v.push(g), s.push(f);
      }
    }
  return s;
}
function cA(t, e) {
  return Zy(Jy(t, e, Gs), t + "");
}
function sA(t) {
  return _n(t) && fo(t);
}
function dA(t) {
  return sA(t) ? t : [];
}
var fA = cA(function(t) {
  var e = el(t, dA);
  return e.length && e[0] === t[0] ? uA(e) : [];
});
const vA = fA;
function pA(t) {
  var e = t == null ? 0 : t.length;
  return e ? t[e - 1] : void 0;
}
function hA(t, e) {
  return e.length < 2 ? t : qs(t, Rk(e, 0, -1));
}
function gA(t, e) {
  return e = il(e, t), t = hA(t, e), t == null || delete t[yo(pA(e))];
}
function mA(t) {
  return ig(t) ? void 0 : t;
}
var yA = 1, bA = 2, CA = 4, wA = v_(function(t, e) {
  var n = {};
  if (t == null)
    return n;
  var r = !1;
  e = el(e, function(o) {
    return o = il(o, t), r || (r = o.length > 1), o;
  }), Co(t, vb(t), n), r && (n = Ba(n, yA | bA | CA, mA));
  for (var a = e.length; a--; )
    gA(n, e[a]);
  return n;
});
const SA = wA;
function Bp(t) {
  var e = !1;
  return t && t.length && t.every(function(n) {
    return n.required ? (e = !0, !1) : !0;
  }), e;
}
function Kp(t) {
  return t == null ? [] : Array.isArray(t) ? t : [t];
}
function Jl(t, e, n) {
  var r = t;
  e = e.replace(/\[(\w+)\]/g, ".$1"), e = e.replace(/^\./, "");
  for (var a = e.split("."), o = 0, i = a.length; o < i - 1 && !(!r && !n); ++o) {
    var l = a[o];
    if (l in r)
      r = r[l];
    else {
      if (n)
        throw new Error("please transfer a valid name path to validate!");
      break;
    }
  }
  return {
    o: r,
    k: a[o],
    v: r ? r[a[o]] : null,
    isValid: r && a[o] in r
  };
}
function xA(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : G({}), n = arguments.length > 2 ? arguments[2] : void 0, r = li(St(t)), a = Mt({}), o = Xe([]), i = function(x) {
    k(St(t), k(k({}, li(r)), x)), vt(function() {
      Object.keys(a).forEach(function(S) {
        a[S] = {
          autoLink: !1,
          required: Bp(St(e)[S])
        };
      });
    });
  }, l = function() {
    var x = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], S = arguments.length > 1 ? arguments[1] : void 0;
    return S.length ? x.filter(function(b) {
      var P = Kp(b.trigger || "change");
      return vA(P, S).length;
    }) : x;
  }, u = null, s = function(x) {
    for (var S = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, b = arguments.length > 2 ? arguments[2] : void 0, P = [], T = {}, O = function(M) {
      var N = x[M], _ = Jl(St(t), N, b);
      if (!_.isValid)
        return "continue";
      T[N] = _.v;
      var I = l(St(e)[N], Kp(S && S.trigger));
      I.length && P.push(d(N, _.v, I, S || {}).then(function() {
        return {
          name: N,
          errors: [],
          warnings: []
        };
      }).catch(function(A) {
        var B = [], W = [];
        return A.forEach(function(U) {
          var z = U.rule.warningOnly, L = U.errors;
          z ? W.push.apply(W, Ie(L)) : B.push.apply(B, Ie(L));
        }), B.length ? Promise.reject({
          name: N,
          errors: B,
          warnings: W
        }) : {
          name: N,
          errors: B,
          warnings: W
        };
      }));
    }, D = 0; D < x.length; D++)
      var V = O(D);
    var K = _b(P);
    u = K;
    var R = K.then(function() {
      return u === K ? Promise.resolve(T) : Promise.reject([]);
    }).catch(function(E) {
      var M = E.filter(function(N) {
        return N && N.errors.length;
      });
      return Promise.reject({
        values: T,
        errorFields: M,
        outOfDate: u !== K
      });
    });
    return R.catch(function(E) {
      return E;
    }), R;
  }, d = function(x, S, b) {
    var P = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, T = Sb([x], S, b, k({
      validateMessages: sl
    }, P), !!P.validateFirst);
    return a[x] ? (a[x].validateStatus = "validating", T.catch(function(O) {
      return O;
    }).then(function() {
      var O = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], D;
      if (a[x].validateStatus === "validating") {
        var V = O.filter(function(K) {
          return K && K.errors.length;
        });
        a[x].validateStatus = V.length ? "error" : "success", a[x].help = V.length ? V.map(function(K) {
          return K.errors;
        }) : null, (D = n == null ? void 0 : n.onValidate) === null || D === void 0 || D.call(n, x, !V.length, V.length ? Ot(a[x].help[0]) : null);
      }
    }), T) : T.catch(function(O) {
      return O;
    });
  }, c = function(x, S) {
    var b = [], P = !0;
    x ? Array.isArray(x) ? b = x : b = [x] : (P = !1, b = o.value);
    var T = s(b, S || {}, P);
    return T.catch(function(O) {
      return O;
    }), T;
  }, v = function(x) {
    var S = [];
    x ? Array.isArray(x) ? S = x : S = [x] : S = o.value, S.forEach(function(b) {
      a[b] && k(a[b], {
        validateStatus: "",
        help: null
      });
    });
  }, f = function(x) {
    for (var S = {
      autoLink: !1
    }, b = [], P = Array.isArray(x) ? x : [x], T = 0; T < P.length; T++) {
      var O = P[T];
      (O == null ? void 0 : O.validateStatus) === "error" && (S.validateStatus = "error", O.help && b.push(O.help)), S.required = S.required || (O == null ? void 0 : O.required);
    }
    return S.help = b, S;
  }, g = r, p = !0, y = function(x) {
    var S = [];
    o.value.forEach(function(b) {
      var P = Jl(x, b, !1), T = Jl(g, b, !1), O = p && (n == null ? void 0 : n.immediate) && P.isValid;
      (O || !is(P.v, T.v)) && S.push(b);
    }), c(S, {
      trigger: "change"
    }), p = !1, g = li(Ot(x));
  }, h = n == null ? void 0 : n.debounce, w = !0;
  return Ce(e, function() {
    o.value = e ? Object.keys(St(e)) : [], !w && n && n.validateOnRuleChange && c(), w = !1;
  }, {
    deep: !0,
    immediate: !0
  }), Ce(o, function() {
    var C = {};
    o.value.forEach(function(S) {
      C[S] = k({}, a[S], {
        autoLink: !1,
        required: Bp(St(e)[S])
      }), delete a[S];
    });
    for (var x in a)
      Object.prototype.hasOwnProperty.call(a, x) && delete a[x];
    k(a, C);
  }, {
    immediate: !0
  }), Ce(t, h && h.wait ? __(y, h.wait, SA(h, ["wait"])) : y, {
    immediate: n && !!n.immediate,
    deep: !0
  }), {
    modelRef: t,
    rulesRef: e,
    initialModel: r,
    validateInfos: a,
    resetFields: i,
    validate: c,
    validateField: d,
    mergeValidateInfo: f,
    clearValidate: v
  };
}
var PA = function() {
  return {
    layout: Q.oneOf(Ht("horizontal", "inline", "vertical")),
    labelCol: {
      type: Object
    },
    wrapperCol: {
      type: Object
    },
    colon: {
      type: Boolean,
      default: void 0
    },
    labelAlign: Q.oneOf(Ht("left", "right")),
    labelWrap: {
      type: Boolean,
      default: void 0
    },
    prefixCls: String,
    requiredMark: {
      type: [String, Boolean],
      default: void 0
    },
    hideRequiredMark: {
      type: Boolean,
      default: void 0
    },
    model: Q.object,
    rules: {
      type: Object
    },
    validateMessages: {
      type: Object,
      default: void 0
    },
    validateOnRuleChange: {
      type: Boolean,
      default: void 0
    },
    scrollToFirstError: {
      type: [Boolean, Object]
    },
    onSubmit: Function,
    name: String,
    validateTrigger: {
      type: [String, Array]
    },
    size: {
      type: String
    },
    onValuesChange: {
      type: Function
    },
    onFieldsChange: {
      type: Function
    },
    onFinish: {
      type: Function
    },
    onFinishFailed: {
      type: Function
    },
    onValidate: {
      type: Function
    }
  };
};
function OA(t, e) {
  return is(rr(t), rr(e));
}
var TA = pe({
  name: "AForm",
  inheritAttrs: !1,
  props: kt(PA(), {
    layout: "horizontal",
    hideRequiredMark: !1,
    colon: !0
  }),
  Item: kb,
  useForm: xA,
  setup: function(e, n) {
    var r = n.emit, a = n.slots, o = n.expose, i = n.attrs, l = wI(e), u = Qe("form", e), s = u.prefixCls, d = u.direction, c = u.form, v = F(function() {
      return e.requiredMark === "" || e.requiredMark;
    }), f = F(function() {
      var _;
      return v.value !== void 0 ? v.value : c && ((_ = c.value) === null || _ === void 0 ? void 0 : _.requiredMark) !== void 0 ? c.value.requiredMark : !e.hideRequiredMark;
    }), g = F(function() {
      var _, I;
      return (_ = e.colon) !== null && _ !== void 0 ? _ : (I = c.value) === null || I === void 0 ? void 0 : I.colon;
    }), p = i1(), y = p.validateMessages, h = F(function() {
      return k(k(k({}, sl), y.value), e.validateMessages);
    }), w = F(function() {
      var _;
      return ge(s.value, (_ = {}, j(_, "".concat(s.value, "-").concat(e.layout), !0), j(_, "".concat(s.value, "-hide-required-mark"), f.value === !1), j(_, "".concat(s.value, "-rtl"), d.value === "rtl"), j(_, "".concat(s.value, "-").concat(l.value), l.value), _));
    }), C = G(), x = {}, S = function(I, A) {
      x[I] = A;
    }, b = function(I) {
      delete x[I];
    }, P = function(I) {
      var A = !!I, B = A ? rr(I).map(vc) : [];
      return A ? Object.values(x).filter(function(W) {
        return B.findIndex(function(U) {
          return OA(U, W.fieldName.value);
        }) > -1;
      }) : Object.values(x);
    }, T = function(I) {
      if (!e.model) {
        tr(!1, "Form", "model is required for resetFields to work.");
        return;
      }
      P(I).forEach(function(A) {
        A.resetField();
      });
    }, O = function(I) {
      P(I).forEach(function(A) {
        A.clearValidate();
      });
    }, D = function(I) {
      var A = e.scrollToFirstError;
      if (r("finishFailed", I), A && I.errorFields.length) {
        var B = {};
        Le(A) === "object" && (B = A), K(I.errorFields[0].name, B);
      }
    }, V = function() {
      return M.apply(void 0, arguments);
    }, K = function(I) {
      var A = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, B = P(I ? [I] : void 0);
      if (B.length) {
        var W = B[0].fieldId.value, U = W ? document.getElementById(W) : null;
        U && iA(U, k({
          scrollMode: "if-needed",
          block: "nearest"
        }, A));
      }
    }, R = function() {
      var I = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
      if (I === !0) {
        var A = [];
        return Object.values(x).forEach(function(B) {
          var W = B.namePath;
          A.push(W.value);
        }), $p(e.model, A);
      } else
        return $p(e.model, I);
    }, E = function(I, A) {
      if (tr(!(I instanceof Function), "Form", "validateFields/validateField/validate not support callback, please use promise instead"), !e.model)
        return tr(!1, "Form", "model is required for validateFields to work."), Promise.reject("Form `model` is required for validateFields to work.");
      var B = !!I, W = B ? rr(I).map(vc) : [], U = [];
      Object.values(x).forEach(function($) {
        var q;
        if (B || W.push($.namePath.value), !!(!((q = $.rules) === null || q === void 0) && q.value.length)) {
          var H = $.namePath.value;
          if (!B || PM(W, H)) {
            var J = $.validateRules(k({
              validateMessages: h.value
            }, A));
            U.push(J.then(function() {
              return {
                name: H,
                errors: [],
                warnings: []
              };
            }).catch(function(Z) {
              var ae = [], ue = [];
              return Z.forEach(function(ne) {
                var X = ne.rule.warningOnly, te = ne.errors;
                X ? ue.push.apply(ue, Ie(te)) : ae.push.apply(ae, Ie(te));
              }), ae.length ? Promise.reject({
                name: H,
                errors: ae,
                warnings: ue
              }) : {
                name: H,
                errors: ae,
                warnings: ue
              };
            }));
          }
        }
      });
      var z = _b(U);
      C.value = z;
      var L = z.then(function() {
        return C.value === z ? Promise.resolve(R(W)) : Promise.reject([]);
      }).catch(function($) {
        var q = $.filter(function(H) {
          return H && H.errors.length;
        });
        return Promise.reject({
          values: R(W),
          errorFields: q,
          outOfDate: C.value !== z
        });
      });
      return L.catch(function($) {
        return $;
      }), L;
    }, M = function() {
      return E.apply(void 0, arguments);
    }, N = function(I) {
      if (I.preventDefault(), I.stopPropagation(), r("submit", I), e.model) {
        var A = E();
        A.then(function(B) {
          r("finish", B);
        }).catch(function(B) {
          D(B);
        });
      }
    };
    return o({
      resetFields: T,
      clearValidate: O,
      validateFields: E,
      getFieldsValue: R,
      validate: V,
      scrollToField: K
    }), Tb({
      model: F(function() {
        return e.model;
      }),
      name: F(function() {
        return e.name;
      }),
      labelAlign: F(function() {
        return e.labelAlign;
      }),
      labelCol: F(function() {
        return e.labelCol;
      }),
      labelWrap: F(function() {
        return e.labelWrap;
      }),
      wrapperCol: F(function() {
        return e.wrapperCol;
      }),
      vertical: F(function() {
        return e.layout === "vertical";
      }),
      colon: g,
      requiredMark: f,
      validateTrigger: F(function() {
        return e.validateTrigger;
      }),
      rules: F(function() {
        return e.rules;
      }),
      addField: S,
      removeField: b,
      onValidate: function(I, A, B) {
        r("validate", I, A, B);
      },
      validateMessages: h
    }), Ce(function() {
      return e.rules;
    }, function() {
      e.validateOnRuleChange && E();
    }), function() {
      var _;
      return m("form", Y(Y({}, i), {}, {
        onSubmit: N,
        class: [w.value, i.class]
      }), [(_ = a.default) === null || _ === void 0 ? void 0 : _.call(a)]);
    };
  }
});
const Qn = TA;
Qn.useInjectFormItemContext = jt;
Qn.ItemRest = Uu;
Qn.install = function(t) {
  return t.component(Qn.name, Qn), t.component(Qn.Item.name, Qn.Item), t.component(Uu.name, Uu), t;
};
var IA = globalThis && globalThis.__rest || function(t, e) {
  var n = {};
  for (var r in t)
    Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(t); a < r.length; a++)
      e.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[a]) && (n[r[a]] = t[r[a]]);
  return n;
};
function kA(t, e, n) {
  var r = t.toLowerCase().split(e).reduce(function(i, l, u) {
    return u === 0 ? [l] : [].concat(Ie(i), [e, l]);
  }, []), a = [], o = 0;
  return r.forEach(function(i, l) {
    var u = o + i.length, s = t.slice(o, u);
    o = u, l % 2 === 1 && (s = m("span", {
      class: "".concat(n, "-menu-item-keyword"),
      key: "seperator"
    }, [s])), a.push(s);
  }), a;
}
var _A = function(e) {
  var n = e.inputValue, r = e.path, a = e.prefixCls, o = e.fieldNames, i = [], l = n.toLowerCase();
  return r.forEach(function(u, s) {
    s !== 0 && i.push(" / ");
    var d = u[o.label], c = Le(d);
    (c === "string" || c === "number") && (d = kA(String(d), l, a)), i.push(d);
  }), i;
};
function EA() {
  return k(k({}, pt(sb(), ["customSlots", "checkable", "options"])), {
    multiple: {
      type: Boolean,
      default: void 0
    },
    size: String,
    bordered: {
      type: Boolean,
      default: void 0
    },
    placement: {
      type: String
    },
    suffixIcon: Q.any,
    options: Array,
    "onUpdate:value": Function
  });
}
var NA = pe({
  name: "ACascader",
  inheritAttrs: !1,
  props: kt(EA(), {
    bordered: !0,
    choiceTransitionName: "",
    allowClear: !0
  }),
  setup: function(e, n) {
    var r = n.attrs, a = n.expose, o = n.slots, i = n.emit, l = jt(), u = Qe("cascader", e), s = u.prefixCls, d = u.rootPrefixCls, c = u.getPrefixCls, v = u.direction, f = u.getPopupContainer, g = u.renderEmpty, p = u.size, y = F(function() {
      return c("select", e.prefixCls);
    }), h = F(function() {
      return v.value === "rtl";
    });
    process.env.NODE_ENV !== "production" && Ue(function() {
      mt(!e.multiple || !e.displayRender || !o.displayRender, "Cascader", "`displayRender` not work on `multiple`. Please use `tagRender` instead.");
    });
    var w = F(function() {
      if (!e.showSearch)
        return e.showSearch;
      var O = {
        render: _A
      };
      return Le(e.showSearch) === "object" && (O = k(k({}, O), e.showSearch)), O;
    }), C = F(function() {
      return ge(e.dropdownClassName || e.popupClassName, "".concat(s.value, "-dropdown"), j({}, "".concat(s.value, "-dropdown-rtl"), h.value));
    }), x = G();
    a({
      focus: function() {
        var D;
        (D = x.value) === null || D === void 0 || D.focus();
      },
      blur: function() {
        var D;
        (D = x.value) === null || D === void 0 || D.blur();
      }
    });
    var S = function() {
      for (var D = arguments.length, V = new Array(D), K = 0; K < D; K++)
        V[K] = arguments[K];
      i("update:value", V[0]), i.apply(void 0, ["change"].concat(V)), l.onFieldChange();
    }, b = function() {
      for (var D = arguments.length, V = new Array(D), K = 0; K < D; K++)
        V[K] = arguments[K];
      i.apply(void 0, ["blur"].concat(V)), l.onFieldBlur();
    }, P = F(function() {
      return e.showArrow !== void 0 ? e.showArrow : e.loading || !e.multiple;
    }), T = F(function() {
      return e.placement !== void 0 ? e.placement : v.value === "rtl" ? "bottomRight" : "bottomLeft";
    });
    return function() {
      var O, D, V, K = e.notFoundContent, R = K === void 0 ? (D = o.notFoundContent) === null || D === void 0 ? void 0 : D.call(o) : K, E = e.expandIcon, M = E === void 0 ? (V = o.expandIcon) === null || V === void 0 ? void 0 : V.call(o) : E, N = e.multiple, _ = e.bordered, I = e.allowClear, A = e.choiceTransitionName, B = e.transitionName, W = e.id, U = W === void 0 ? l.id.value : W, z = IA(e, ["notFoundContent", "expandIcon", "multiple", "bordered", "allowClear", "choiceTransitionName", "transitionName", "id"]), L = R || g.value("Cascader"), $ = M;
      M || ($ = h.value ? m(Ni, null, null) : m(no, null, null));
      var q = m("span", {
        class: "".concat(y.value, "-menu-item-loading-icon")
      }, [m(Bn, {
        spin: !0
      }, null)]), H = ws(k(k({}, e), {
        multiple: N,
        prefixCls: y.value,
        showArrow: P.value
      }), o), J = H.suffixIcon, Z = H.removeIcon, ae = H.clearIcon;
      return m(vE, Y(Y(Y({}, z), r), {}, {
        id: U,
        prefixCls: y.value,
        class: [s.value, (O = {}, j(O, "".concat(y.value, "-lg"), p.value === "large"), j(O, "".concat(y.value, "-sm"), p.value === "small"), j(O, "".concat(y.value, "-rtl"), h.value), j(O, "".concat(y.value, "-borderless"), !_), O), r.class],
        direction: v.value,
        placement: T.value,
        notFoundContent: L,
        allowClear: I,
        showSearch: w.value,
        expandIcon: $,
        inputIcon: J,
        removeIcon: Z,
        clearIcon: ae,
        loadingIcon: q,
        checkable: !!N,
        dropdownClassName: C.value,
        dropdownPrefixCls: s.value,
        choiceTransitionName: Pu(d.value, "", A),
        transitionName: Pu(d.value, cw(T.value), B),
        getPopupContainer: f.value,
        customSlots: k(k({}, o), {
          checkable: function() {
            return m("span", {
              class: "".concat(s.value, "-checkbox-inner")
            }, null);
          }
        }),
        displayRender: e.displayRender || o.displayRender,
        maxTagPlaceholder: e.maxTagPlaceholder || o.maxTagPlaceholder,
        showArrow: e.showArrow,
        onChange: S,
        onBlur: b,
        ref: x
      }), o);
    };
  }
});
const MA = Nr(NA);
var AA = function() {
  return {
    name: String,
    prefixCls: String,
    options: {
      type: Array,
      default: function() {
        return [];
      }
    },
    disabled: Boolean,
    id: String
  };
}, DA = function() {
  return k(k({}, AA()), {
    defaultValue: {
      type: Array
    },
    value: {
      type: Array
    },
    onChange: {
      type: Function
    },
    "onUpdate:value": {
      type: Function
    }
  });
}, FA = function() {
  return {
    prefixCls: String,
    defaultChecked: {
      type: Boolean,
      default: void 0
    },
    checked: {
      type: Boolean,
      default: void 0
    },
    disabled: {
      type: Boolean,
      default: void 0
    },
    isGroup: {
      type: Boolean,
      default: void 0
    },
    value: Q.any,
    name: String,
    id: String,
    indeterminate: {
      type: Boolean,
      default: void 0
    },
    type: {
      type: String,
      default: "checkbox"
    },
    autofocus: {
      type: Boolean,
      default: void 0
    },
    onChange: Function,
    "onUpdate:checked": Function,
    onClick: Function,
    skipGroup: {
      type: Boolean,
      default: !1
    }
  };
}, RA = function() {
  return k(k({}, FA()), {
    indeterminate: {
      type: Boolean,
      default: !1
    }
  });
}, Nb = Symbol("CheckboxGroupContext"), Hp = globalThis && globalThis.__rest || function(t, e) {
  var n = {};
  for (var r in t)
    Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(t); a < r.length; a++)
      e.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[a]) && (n[r[a]] = t[r[a]]);
  return n;
};
const ar = pe({
  name: "ACheckbox",
  inheritAttrs: !1,
  __ANT_CHECKBOX: !0,
  props: RA(),
  setup: function(e, n) {
    var r = n.emit, a = n.attrs, o = n.slots, i = n.expose, l = jt(), u = Qe("checkbox", e), s = u.prefixCls, d = u.direction, c = ut(Nb, void 0), v = Symbol("checkboxUniId");
    Ue(function() {
      !e.skipGroup && c && c.registerValue(v, e.value);
    }), ht(function() {
      c && c.cancelValue(v);
    }), dt(function() {
      tr(e.checked !== void 0 || c || e.value === void 0, "Checkbox", "`value` is not validate prop, do you mean `checked`?");
    });
    var f = function(w) {
      var C = w.target.checked;
      r("update:checked", C), r("change", w);
    }, g = G(), p = function() {
      var w;
      (w = g.value) === null || w === void 0 || w.focus();
    }, y = function() {
      var w;
      (w = g.value) === null || w === void 0 || w.blur();
    };
    return i({
      focus: p,
      blur: y
    }), function() {
      var h, w, C = Kt((w = o.default) === null || w === void 0 ? void 0 : w.call(o)), x = e.indeterminate, S = e.skipGroup, b = e.id, P = b === void 0 ? l.id.value : b, T = Hp(e, ["indeterminate", "skipGroup", "id"]), O = a.onMouseenter, D = a.onMouseleave;
      a.onInput;
      var V = a.class, K = a.style, R = Hp(a, ["onMouseenter", "onMouseleave", "onInput", "class", "style"]), E = k(k(k({}, T), {
        id: P,
        prefixCls: s.value
      }), R);
      c && !S ? (E.onChange = function() {
        for (var _ = arguments.length, I = new Array(_), A = 0; A < _; A++)
          I[A] = arguments[A];
        r.apply(void 0, ["change"].concat(I)), c.toggleOption({
          label: C,
          value: e.value
        });
      }, E.name = c.name.value, E.checked = c.mergedValue.value.indexOf(e.value) !== -1, E.disabled = e.disabled || c.disabled.value, E.indeterminate = x) : E.onChange = f;
      var M = ge((h = {}, j(h, "".concat(s.value, "-wrapper"), !0), j(h, "".concat(s.value, "-rtl"), d.value === "rtl"), j(h, "".concat(s.value, "-wrapper-checked"), E.checked), j(h, "".concat(s.value, "-wrapper-disabled"), E.disabled), h), V), N = ge(j({}, "".concat(s.value, "-indeterminate"), x));
      return m("label", {
        class: M,
        style: K,
        onMouseenter: O,
        onMouseleave: D
      }, [m(Yy, Y(Y({}, E), {}, {
        class: N,
        ref: g
      }), null), C.length ? m("span", null, [C]) : null]);
    };
  }
});
function $A(t, e) {
  var n = typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (!n) {
    if (Array.isArray(t) || (n = $i(t)) || e && t && typeof t.length == "number") {
      n && (t = n);
      var r = 0, a = function() {
      };
      return {
        s: a,
        n: function() {
          return r >= t.length ? {
            done: !0
          } : {
            done: !1,
            value: t[r++]
          };
        },
        e: function(s) {
          throw s;
        },
        f: a
      };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var o = !0, i = !1, l;
  return {
    s: function() {
      n = n.call(t);
    },
    n: function() {
      var s = n.next();
      return o = s.done, s;
    },
    e: function(s) {
      i = !0, l = s;
    },
    f: function() {
      try {
        !o && n.return != null && n.return();
      } finally {
        if (i)
          throw l;
      }
    }
  };
}
const hc = pe({
  name: "ACheckboxGroup",
  props: DA(),
  setup: function(e, n) {
    var r = n.slots, a = n.emit, o = n.expose, i = jt(), l = Qe("checkbox", e), u = l.prefixCls, s = l.direction, d = G((e.value === void 0 ? e.defaultValue : e.value) || []);
    Ce(function() {
      return e.value;
    }, function() {
      d.value = e.value || [];
    });
    var c = F(function() {
      return e.options.map(function(w) {
        return typeof w == "string" || typeof w == "number" ? {
          label: w,
          value: w
        } : w;
      });
    }), v = G(Symbol()), f = G(/* @__PURE__ */ new Map()), g = function(C) {
      f.value.delete(C), v.value = Symbol();
    }, p = function(C, x) {
      f.value.set(C, x), v.value = Symbol();
    }, y = G(/* @__PURE__ */ new Map());
    Ce(v, function() {
      var w = /* @__PURE__ */ new Map(), C = $A(f.value.values()), x;
      try {
        for (C.s(); !(x = C.n()).done; ) {
          var S = x.value;
          w.set(S, !0);
        }
      } catch (b) {
        C.e(b);
      } finally {
        C.f();
      }
      y.value = w;
    });
    var h = function(C) {
      var x = d.value.indexOf(C.value), S = Ie(d.value);
      x === -1 ? S.push(C.value) : S.splice(x, 1), e.value === void 0 && (d.value = S);
      var b = S.filter(function(P) {
        return y.value.has(P);
      }).sort(function(P, T) {
        var O = c.value.findIndex(function(V) {
          return V.value === P;
        }), D = c.value.findIndex(function(V) {
          return V.value === T;
        });
        return O - D;
      });
      a("update:value", b), a("change", b), i.onFieldChange();
    };
    return ct(Nb, {
      cancelValue: g,
      registerValue: p,
      toggleOption: h,
      mergedValue: d,
      name: F(function() {
        return e.name;
      }),
      disabled: F(function() {
        return e.disabled;
      })
    }), o({
      mergedValue: d
    }), function() {
      var w, C = e.id, x = C === void 0 ? i.id.value : C, S = null, b = "".concat(u.value, "-group");
      return c.value && c.value.length > 0 && (S = c.value.map(function(P) {
        var T;
        return m(ar, {
          prefixCls: u.value,
          key: P.value.toString(),
          disabled: "disabled" in P ? P.disabled : e.disabled,
          indeterminate: P.indeterminate,
          value: P.value,
          checked: d.value.indexOf(P.value) !== -1,
          onChange: P.onChange,
          class: "".concat(b, "-item")
        }, {
          default: function() {
            return [P.label === void 0 ? (T = r.label) === null || T === void 0 ? void 0 : T.call(r, P) : P.label];
          }
        });
      })), m("div", {
        class: [b, j({}, "".concat(b, "-rtl"), s.value === "rtl")],
        id: x
      }, [S || ((w = r.default) === null || w === void 0 ? void 0 : w.call(r))]);
    };
  }
});
ar.Group = hc;
ar.install = function(t) {
  return t.component(ar.name, ar), t.component(hc.name, hc), t;
};
var LA = function(e, n) {
  var r = n.attrs, a = n.slots;
  return m(Jt, Y(Y({
    size: "small",
    type: "primary"
  }, e), r), a);
};
const jA = LA;
var VA = function() {
  return {
    prefixCls: String,
    checked: {
      type: Boolean,
      default: void 0
    },
    onChange: {
      type: Function
    },
    onClick: {
      type: Function
    },
    "onUpdate:checked": Function
  };
}, BA = pe({
  name: "ACheckableTag",
  props: VA(),
  setup: function(e, n) {
    var r = n.slots, a = n.emit, o = Qe("tag", e), i = o.prefixCls, l = function(d) {
      var c = e.checked;
      a("update:checked", !c), a("change", !c), a("click", d);
    }, u = F(function() {
      var s;
      return ge(i.value, (s = {}, j(s, "".concat(i.value, "-checkable"), !0), j(s, "".concat(i.value, "-checkable-checked"), e.checked), s));
    });
    return function() {
      var s;
      return m("span", {
        class: u.value,
        onClick: l
      }, [(s = r.default) === null || s === void 0 ? void 0 : s.call(r)]);
    };
  }
});
const gc = BA;
var KA = new RegExp("^(".concat(Qm.join("|"), ")(-inverse)?$")), HA = new RegExp("^(".concat(TI.join("|"), ")$")), zA = function() {
  return {
    prefixCls: String,
    color: {
      type: String
    },
    closable: {
      type: Boolean,
      default: !1
    },
    closeIcon: Q.any,
    visible: {
      type: Boolean,
      default: void 0
    },
    onClose: {
      type: Function
    },
    "onUpdate:visible": Function,
    icon: Q.any
  };
}, Ha = pe({
  name: "ATag",
  props: zA(),
  slots: ["closeIcon", "icon"],
  setup: function(e, n) {
    var r = n.slots, a = n.emit, o = n.attrs, i = Qe("tag", e), l = i.prefixCls, u = i.direction, s = G(!0);
    Ue(function() {
      e.visible !== void 0 && (s.value = e.visible);
    });
    var d = function(g) {
      g.stopPropagation(), a("update:visible", !1), a("close", g), !g.defaultPrevented && e.visible === void 0 && (s.value = !1);
    }, c = F(function() {
      var f = e.color;
      return f ? KA.test(f) || HA.test(f) : !1;
    }), v = F(function() {
      var f;
      return ge(l.value, (f = {}, j(f, "".concat(l.value, "-").concat(e.color), c.value), j(f, "".concat(l.value, "-has-color"), e.color && !c.value), j(f, "".concat(l.value, "-hidden"), !s.value), j(f, "".concat(l.value, "-rtl"), u.value === "rtl"), f));
    });
    return function() {
      var f, g, p, y = e.icon, h = y === void 0 ? (f = r.icon) === null || f === void 0 ? void 0 : f.call(r) : y, w = e.color, C = e.closeIcon, x = C === void 0 ? (g = r.closeIcon) === null || g === void 0 ? void 0 : g.call(r) : C, S = e.closable, b = S === void 0 ? !1 : S, P = function() {
        return b ? x ? m("div", {
          class: "".concat(l.value, "-close-icon"),
          onClick: d
        }, [x]) : m(Bi, {
          class: "".concat(l.value, "-close-icon"),
          onClick: d
        }, null) : null;
      }, T = {
        backgroundColor: w && !c.value ? w : void 0
      }, O = h || null, D = (p = r.default) === null || p === void 0 ? void 0 : p.call(r), V = O ? m(ft, null, [O, m("span", null, [D])]) : D, K = "onClick" in o, R = m("span", {
        class: v.value,
        style: T
      }, [V, P()]);
      return K ? m(ey, null, {
        default: function() {
          return [R];
        }
      }) : R;
    };
  }
});
Ha.CheckableTag = gc;
Ha.install = function(t) {
  return t.component(Ha.name, Ha), t.component(gc.name, gc), t;
};
const WA = Ha;
function UA(t, e) {
  var n = e.slots, r = e.attrs;
  return m(WA, Y(Y({
    color: "blue"
  }, t), r), n);
}
var YA = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zm-40 656H184V460h656v380zM184 392V256h128v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h256v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h128v136H184z" } }] }, name: "calendar", theme: "outlined" };
const qA = YA;
function zp(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? Object(arguments[e]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(a) {
      return Object.getOwnPropertyDescriptor(n, a).enumerable;
    }))), r.forEach(function(a) {
      GA(t, a, n[a]);
    });
  }
  return t;
}
function GA(t, e, n) {
  return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
var ud = function(e, n) {
  var r = zp({}, e, n.attrs);
  return m(st, zp({}, r, {
    icon: qA
  }), null);
};
ud.displayName = "CalendarOutlined";
ud.inheritAttrs = !1;
const Mb = ud;
var XA = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" } }, { tag: "path", attrs: { d: "M686.7 638.6L544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.8 11.2-1.7l28.6-39c2.6-3.7 1.8-8.7-1.8-11.2z" } }] }, name: "clock-circle", theme: "outlined" };
const QA = XA;
function Wp(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? Object(arguments[e]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(a) {
      return Object.getOwnPropertyDescriptor(n, a).enumerable;
    }))), r.forEach(function(a) {
      JA(t, a, n[a]);
    });
  }
  return t;
}
function JA(t, e, n) {
  return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
var cd = function(e, n) {
  var r = Wp({}, e, n.attrs);
  return m(st, Wp({}, r, {
    icon: QA
  }), null);
};
cd.displayName = "ClockCircleOutlined";
cd.inheritAttrs = !1;
const Ab = cd;
function ZA(t, e, n) {
  return n !== void 0 ? n : t === "year" && e.lang.yearPlaceholder ? e.lang.yearPlaceholder : t === "quarter" && e.lang.quarterPlaceholder ? e.lang.quarterPlaceholder : t === "month" && e.lang.monthPlaceholder ? e.lang.monthPlaceholder : t === "week" && e.lang.weekPlaceholder ? e.lang.weekPlaceholder : t === "time" && e.timePickerLocale.placeholder ? e.timePickerLocale.placeholder : e.lang.placeholder;
}
function eD(t, e, n) {
  return n !== void 0 ? n : t === "year" && e.lang.yearPlaceholder ? e.lang.rangeYearPlaceholder : t === "month" && e.lang.monthPlaceholder ? e.lang.rangeMonthPlaceholder : t === "week" && e.lang.weekPlaceholder ? e.lang.rangeWeekPlaceholder : t === "time" && e.timePickerLocale.placeholder ? e.timePickerLocale.rangePlaceholder : e.lang.rangePlaceholder;
}
function Mi() {
  return {
    id: String,
    dropdownClassName: String,
    dropdownAlign: {
      type: Object
    },
    popupStyle: {
      type: Object
    },
    transitionName: String,
    placeholder: String,
    allowClear: {
      type: Boolean,
      default: void 0
    },
    autofocus: {
      type: Boolean,
      default: void 0
    },
    disabled: {
      type: Boolean,
      default: void 0
    },
    tabindex: Number,
    open: {
      type: Boolean,
      default: void 0
    },
    defaultOpen: {
      type: Boolean,
      default: void 0
    },
    inputReadOnly: {
      type: Boolean,
      default: void 0
    },
    getPopupContainer: {
      type: Function
    },
    panelRender: {
      type: Function
    },
    onChange: {
      type: Function
    },
    "onUpdate:value": {
      type: Function
    },
    onOk: {
      type: Function
    },
    onOpenChange: {
      type: Function
    },
    "onUpdate:open": {
      type: Function
    },
    onFocus: {
      type: Function
    },
    onBlur: {
      type: Function
    },
    onMousedown: {
      type: Function
    },
    onMouseup: {
      type: Function
    },
    onMouseenter: {
      type: Function
    },
    onMouseleave: {
      type: Function
    },
    onClick: {
      type: Function
    },
    onContextmenu: {
      type: Function
    },
    onKeydown: {
      type: Function
    },
    role: String,
    name: String,
    autocomplete: String,
    direction: {
      type: String
    },
    showToday: {
      type: Boolean,
      default: void 0
    },
    showTime: {
      type: [Boolean, Object],
      default: void 0
    },
    locale: {
      type: Object
    },
    size: {
      type: String
    },
    bordered: {
      type: Boolean,
      default: void 0
    },
    dateRender: {
      type: Function
    },
    disabledDate: {
      type: Function
    },
    mode: {
      type: String
    },
    picker: {
      type: String
    },
    valueFormat: String,
    disabledHours: Function,
    disabledMinutes: Function,
    disabledSeconds: Function
  };
}
function Db() {
  return {
    defaultPickerValue: {
      type: [String, Object]
    },
    defaultValue: {
      type: [String, Object]
    },
    value: {
      type: [String, Object]
    },
    disabledTime: {
      type: Function
    },
    format: {
      type: [String, Function, Array]
    },
    renderExtraFooter: {
      type: Function
    },
    showNow: {
      type: Boolean,
      default: void 0
    },
    monthCellRender: {
      type: Function
    },
    monthCellContentRender: {
      type: Function
    }
  };
}
function Fb() {
  return {
    allowEmpty: {
      type: Array
    },
    dateRender: {
      type: Function
    },
    defaultPickerValue: {
      type: Array
    },
    defaultValue: {
      type: Array
    },
    value: {
      type: Array
    },
    disabledTime: {
      type: Function
    },
    disabled: {
      type: [Boolean, Array]
    },
    format: String,
    renderExtraFooter: {
      type: Function
    },
    separator: {
      type: String
    },
    ranges: {
      type: Object
    },
    placeholder: Array,
    mode: {
      type: Array
    },
    onChange: {
      type: Function
    },
    "onUpdate:value": {
      type: Function
    },
    onCalendarChange: {
      type: Function
    },
    onPanelChange: {
      type: Function
    },
    onOk: {
      type: Function
    }
  };
}
var tD = globalThis && globalThis.__rest || function(t, e) {
  var n = {};
  for (var r in t)
    Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(t); a < r.length; a++)
      e.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[a]) && (n[r[a]] = t[r[a]]);
  return n;
};
function nD(t, e) {
  function n(s, d) {
    var c = k(k(k({}, Mi()), Db()), e);
    return pe({
      name: d,
      inheritAttrs: !1,
      props: c,
      slots: [
        "suffixIcon",
        "prevIcon",
        "nextIcon",
        "superPrevIcon",
        "superNextIcon",
        "dateRender",
        "renderExtraFooter",
        "monthCellRender"
      ],
      setup: function(f, g) {
        var p = g.slots, y = g.expose, h = g.attrs, w = g.emit, C = f, x = jt();
        mt(!(C.monthCellContentRender || p.monthCellContentRender), "DatePicker", '`monthCellContentRender` is deprecated. Please use `monthCellRender"` instead.'), mt(!h.getCalendarContainer, "DatePicker", '`getCalendarContainer` is deprecated. Please use `getPopupContainer"` instead.');
        var S = Qe("picker", C), b = S.prefixCls, P = S.direction, T = S.getPopupContainer, O = S.size, D = S.rootPrefixCls, V = G();
        y({
          focus: function() {
            var q;
            (q = V.value) === null || q === void 0 || q.focus();
          },
          blur: function() {
            var q;
            (q = V.value) === null || q === void 0 || q.blur();
          }
        });
        var K = function(q) {
          return C.valueFormat ? t.toString(q, C.valueFormat) : q;
        }, R = function(q, H) {
          var J = K(q);
          w("update:value", J), w("change", J, H), x.onFieldChange();
        }, E = function(q) {
          w("update:open", q), w("openChange", q);
        }, M = function(q) {
          w("focus", q);
        }, N = function(q) {
          w("blur", q), x.onFieldBlur();
        }, _ = function(q, H) {
          var J = K(q);
          w("panelChange", J, H);
        }, I = function(q) {
          var H = K(q);
          w("ok", H);
        }, A = co("DatePicker", vi), B = De(A, 1), W = B[0], U = F(function() {
          return C.value ? C.valueFormat ? t.toDate(C.value, C.valueFormat) : C.value : C.value === "" ? void 0 : C.value;
        }), z = F(function() {
          return C.defaultValue ? C.valueFormat ? t.toDate(C.defaultValue, C.valueFormat) : C.defaultValue : C.defaultValue === "" ? void 0 : C.defaultValue;
        }), L = F(function() {
          return C.defaultPickerValue ? C.valueFormat ? t.toDate(C.defaultPickerValue, C.valueFormat) : C.defaultPickerValue : C.defaultPickerValue === "" ? void 0 : C.defaultPickerValue;
        });
        return function() {
          var $, q, H, J, Z, ae, ue, ne = k(k({}, W.value), C.locale), X = k(k({}, C), h), te = X.bordered, me = te === void 0 ? !0 : te, Oe = X.placeholder, ke = X.suffixIcon, Me = ke === void 0 ? (q = p.suffixIcon) === null || q === void 0 ? void 0 : q.call(p) : ke, Pe = X.showToday, fe = Pe === void 0 ? !0 : Pe, le = X.transitionName, ie = X.allowClear, de = ie === void 0 ? !0 : ie, ye = X.dateRender, _e = ye === void 0 ? p.dateRender : ye, Be = X.renderExtraFooter, Ve = Be === void 0 ? p.renderExtraFooter : Be, he = X.monthCellRender, oe = he === void 0 ? p.monthCellRender || C.monthCellContentRender || p.monthCellContentRender : he, ve = X.clearIcon, Se = ve === void 0 ? (H = p.clearIcon) === null || H === void 0 ? void 0 : H.call(p) : ve, se = X.id, ee = se === void 0 ? x.id.value : se, re = tD(X, ["bordered", "placeholder", "suffixIcon", "showToday", "transitionName", "allowClear", "dateRender", "renderExtraFooter", "monthCellRender", "clearIcon", "id"]), ce = X.showTime === "" ? !0 : X.showTime, Ee = X.format, Te = {};
          s && (Te.picker = s);
          var we = s || X.picker || "date";
          Te = k(k(k({}, Te), ce ? Ai(k({
            format: Ee,
            picker: we
          }, Le(ce) === "object" ? ce : {})) : {}), we === "time" ? Ai(k(k({
            format: Ee
          }, re), {
            picker: we
          })) : {});
          var be = b.value;
          return m(x2, Y(Y(Y({
            monthCellRender: oe,
            dateRender: _e,
            renderExtraFooter: Ve,
            ref: V,
            placeholder: ZA(we, ne, Oe),
            suffixIcon: Me || (we === "time" ? m(Ab, null, null) : m(Mb, null, null)),
            clearIcon: Se || m(Ar, null, null),
            allowClear: de,
            transitionName: le || "".concat(D.value, "-slide-up")
          }, re), Te), {}, {
            id: ee,
            picker: we,
            value: U.value,
            defaultValue: z.value,
            defaultPickerValue: L.value,
            showToday: fe,
            locale: ne.lang,
            class: ge(($ = {}, j($, "".concat(be, "-").concat(O.value), O.value), j($, "".concat(be, "-borderless"), !me), $), h.class),
            prefixCls: be,
            getPopupContainer: h.getCalendarContainer || T.value,
            generateConfig: t,
            prevIcon: ((J = p.prevIcon) === null || J === void 0 ? void 0 : J.call(p)) || m("span", {
              class: "".concat(be, "-prev-icon")
            }, null),
            nextIcon: ((Z = p.nextIcon) === null || Z === void 0 ? void 0 : Z.call(p)) || m("span", {
              class: "".concat(be, "-next-icon")
            }, null),
            superPrevIcon: ((ae = p.superPrevIcon) === null || ae === void 0 ? void 0 : ae.call(p)) || m("span", {
              class: "".concat(be, "-super-prev-icon")
            }, null),
            superNextIcon: ((ue = p.superNextIcon) === null || ue === void 0 ? void 0 : ue.call(p)) || m("span", {
              class: "".concat(be, "-super-next-icon")
            }, null),
            components: Rb,
            direction: P.value,
            onChange: R,
            onOpenChange: E,
            onFocus: M,
            onBlur: N,
            onPanelChange: _,
            onOk: I
          }), null);
        };
      }
    });
  }
  var r = n(void 0, "ADatePicker"), a = n("week", "AWeekPicker"), o = n("month", "AMonthPicker"), i = n("year", "AYearPicker"), l = n("time", "TimePicker"), u = n("quarter", "AQuarterPicker");
  return {
    DatePicker: r,
    WeekPicker: a,
    MonthPicker: o,
    YearPicker: i,
    TimePicker: l,
    QuarterPicker: u
  };
}
var rD = { icon: { tag: "svg", attrs: { viewBox: "0 0 1024 1024", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M873.1 596.2l-164-208A32 32 0 00684 376h-64.8c-6.7 0-10.4 7.7-6.3 13l144.3 183H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h695.9c26.8 0 41.7-30.8 25.2-51.8z" } }] }, name: "swap-right", theme: "outlined" };
const aD = rD;
function Up(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? Object(arguments[e]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(a) {
      return Object.getOwnPropertyDescriptor(n, a).enumerable;
    }))), r.forEach(function(a) {
      oD(t, a, n[a]);
    });
  }
  return t;
}
function oD(t, e, n) {
  return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
var sd = function(e, n) {
  var r = Up({}, e, n.attrs);
  return m(st, Up({}, r, {
    icon: aD
  }), null);
};
sd.displayName = "SwapRightOutlined";
sd.inheritAttrs = !1;
const iD = sd;
var lD = globalThis && globalThis.__rest || function(t, e) {
  var n = {};
  for (var r in t)
    Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(t); a < r.length; a++)
      e.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[a]) && (n[r[a]] = t[r[a]]);
  return n;
};
function uD(t, e) {
  var n = pe({
    name: "ARangePicker",
    inheritAttrs: !1,
    props: k(k(k({}, Mi()), Fb()), e),
    slots: [
      "suffixIcon",
      "prevIcon",
      "nextIcon",
      "superPrevIcon",
      "superNextIcon",
      "dateRender",
      "renderExtraFooter"
    ],
    setup: function(a, o) {
      var i = o.expose, l = o.slots, u = o.attrs, s = o.emit, d = a, c = jt();
      mt(!u.getCalendarContainer, "DatePicker", '`getCalendarContainer` is deprecated. Please use `getPopupContainer"` instead.');
      var v = Qe("picker", d), f = v.prefixCls, g = v.direction, p = v.getPopupContainer, y = v.size, h = v.rootPrefixCls, w = G();
      i({
        focus: function() {
          var I;
          (I = w.value) === null || I === void 0 || I.focus();
        },
        blur: function() {
          var I;
          (I = w.value) === null || I === void 0 || I.blur();
        }
      });
      var C = function(I) {
        return d.valueFormat ? t.toString(I, d.valueFormat) : I;
      }, x = function(I, A) {
        var B = C(I);
        s("update:value", B), s("change", B, A), c.onFieldChange();
      }, S = function(I) {
        s("update:open", I), s("openChange", I);
      }, b = function(I) {
        s("focus", I);
      }, P = function(I) {
        s("blur", I), c.onFieldBlur();
      }, T = function(I, A) {
        var B = C(I);
        s("panelChange", B, A);
      }, O = function(I) {
        var A = C(I);
        s("ok", A);
      }, D = function(I, A, B) {
        var W = C(I);
        s("calendarChange", W, A, B);
      }, V = co("DatePicker", vi), K = De(V, 1), R = K[0], E = F(function() {
        return d.value && d.valueFormat ? t.toDate(d.value, d.valueFormat) : d.value;
      }), M = F(function() {
        return d.defaultValue && d.valueFormat ? t.toDate(d.defaultValue, d.valueFormat) : d.defaultValue;
      }), N = F(function() {
        return d.defaultPickerValue && d.valueFormat ? t.toDate(d.defaultPickerValue, d.valueFormat) : d.defaultPickerValue;
      });
      return function() {
        var _, I, A, B, W, U, z, L, $ = k(k({}, R.value), d.locale), q = k(k({}, d), u);
        q.prefixCls;
        var H = q.bordered, J = H === void 0 ? !0 : H, Z = q.placeholder, ae = q.suffixIcon, ue = ae === void 0 ? (I = l.suffixIcon) === null || I === void 0 ? void 0 : I.call(l) : ae, ne = q.picker, X = ne === void 0 ? "date" : ne, te = q.transitionName, me = q.allowClear, Oe = me === void 0 ? !0 : me, ke = q.dateRender, Me = ke === void 0 ? l.dateRender : ke, Pe = q.renderExtraFooter, fe = Pe === void 0 ? l.renderExtraFooter : Pe, le = q.separator, ie = le === void 0 ? (A = l.separator) === null || A === void 0 ? void 0 : A.call(l) : le, de = q.clearIcon, ye = de === void 0 ? (B = l.clearIcon) === null || B === void 0 ? void 0 : B.call(l) : de, _e = q.id, Be = _e === void 0 ? c.id.value : _e, Ve = lD(q, ["prefixCls", "bordered", "placeholder", "suffixIcon", "picker", "transitionName", "allowClear", "dateRender", "renderExtraFooter", "separator", "clearIcon", "id"]);
        delete Ve["onUpdate:value"], delete Ve["onUpdate:open"];
        var he = q.format, oe = q.showTime, ve = {};
        ve = k(k(k({}, ve), oe ? Ai(k({
          format: he,
          picker: X
        }, oe)) : {}), X === "time" ? Ai(k(k({
          format: he
        }, pt(Ve, ["disabledTime"])), {
          picker: X
        })) : {});
        var Se = f.value;
        return m(E2, Y(Y(Y({
          dateRender: Me,
          renderExtraFooter: fe,
          separator: ie || m("span", {
            "aria-label": "to",
            class: "".concat(Se, "-separator")
          }, [m(iD, null, null)]),
          ref: w,
          placeholder: eD(X, $, Z),
          suffixIcon: ue || (X === "time" ? m(Ab, null, null) : m(Mb, null, null)),
          clearIcon: ye || m(Ar, null, null),
          allowClear: Oe,
          transitionName: te || "".concat(h.value, "-slide-up")
        }, Ve), ve), {}, {
          id: Be,
          value: E.value,
          defaultValue: M.value,
          defaultPickerValue: N.value,
          picker: X,
          class: ge((_ = {}, j(_, "".concat(Se, "-").concat(y.value), y.value), j(_, "".concat(Se, "-borderless"), !J), _), u.class),
          locale: $.lang,
          prefixCls: Se,
          getPopupContainer: u.getCalendarContainer || p.value,
          generateConfig: t,
          prevIcon: ((W = l.prevIcon) === null || W === void 0 ? void 0 : W.call(l)) || m("span", {
            class: "".concat(Se, "-prev-icon")
          }, null),
          nextIcon: ((U = l.nextIcon) === null || U === void 0 ? void 0 : U.call(l)) || m("span", {
            class: "".concat(Se, "-next-icon")
          }, null),
          superPrevIcon: ((z = l.superPrevIcon) === null || z === void 0 ? void 0 : z.call(l)) || m("span", {
            class: "".concat(Se, "-super-prev-icon")
          }, null),
          superNextIcon: ((L = l.superNextIcon) === null || L === void 0 ? void 0 : L.call(l)) || m("span", {
            class: "".concat(Se, "-super-next-icon")
          }, null),
          components: Rb,
          direction: g.value,
          onChange: x,
          onOpenChange: S,
          onFocus: b,
          onBlur: P,
          onPanelChange: T,
          onOk: O,
          onCalendarChange: D
        }), null);
      };
    }
  });
  return n;
}
var Rb = {
  button: jA,
  rangeItem: UA
};
function cD(t) {
  return t ? Array.isArray(t) ? t : [t] : [];
}
function Ai(t) {
  var e = t.format, n = t.picker, r = t.showHour, a = t.showMinute, o = t.showSecond, i = t.use12Hours, l = cD(e)[0], u = k({}, t);
  return l && typeof l == "string" && (!l.includes("s") && o === void 0 && (u.showSecond = !1), !l.includes("m") && a === void 0 && (u.showMinute = !1), !l.includes("H") && !l.includes("h") && r === void 0 && (u.showHour = !1), (l.includes("a") || l.includes("A")) && i === void 0 && (u.use12Hours = !0)), n === "time" ? u : (typeof l == "function" && delete u.format, {
    showTime: u
  });
}
function $b(t, e) {
  var n = nD(t, e), r = n.DatePicker, a = n.WeekPicker, o = n.MonthPicker, i = n.YearPicker, l = n.TimePicker, u = n.QuarterPicker, s = uD(t, e);
  return {
    DatePicker: r,
    WeekPicker: a,
    MonthPicker: o,
    YearPicker: i,
    TimePicker: l,
    QuarterPicker: u,
    RangePicker: s
  };
}
var jr = $b(Iy), Zl = jr.DatePicker, eu = jr.WeekPicker, tu = jr.MonthPicker, sD = jr.YearPicker, dD = jr.TimePicker, nu = jr.QuarterPicker, ru = jr.RangePicker;
const fD = k(Zl, {
  WeekPicker: eu,
  MonthPicker: tu,
  YearPicker: sD,
  RangePicker: ru,
  TimePicker: dD,
  QuarterPicker: nu,
  install: function(e) {
    return e.component(Zl.name, Zl), e.component(ru.name, ru), e.component(tu.name, tu), e.component(eu.name, eu), e.component(nu.name, nu), e;
  }
});
oa.Button = Ti;
oa.install = function(t) {
  return t.component(oa.name, oa), t.component(Ti.name, Ti), t;
};
var Lb = function() {
  return {
    id: String,
    prefixCls: String,
    inputPrefixCls: String,
    defaultValue: Q.oneOfType([Q.string, Q.number]),
    value: {
      type: [String, Number, Symbol],
      default: void 0
    },
    placeholder: {
      type: [String, Number]
    },
    autocomplete: String,
    type: {
      type: String,
      default: "text"
    },
    name: String,
    size: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: void 0
    },
    readonly: {
      type: Boolean,
      default: void 0
    },
    addonBefore: Q.any,
    addonAfter: Q.any,
    prefix: Q.any,
    suffix: Q.any,
    autofocus: {
      type: Boolean,
      default: void 0
    },
    allowClear: {
      type: Boolean,
      default: void 0
    },
    lazy: {
      type: Boolean,
      default: !0
    },
    maxlength: Number,
    loading: {
      type: Boolean,
      default: void 0
    },
    bordered: {
      type: Boolean,
      default: void 0
    },
    showCount: {
      type: [Boolean, Object]
    },
    htmlSize: Number,
    onPressEnter: Function,
    onKeydown: Function,
    onKeyup: Function,
    onFocus: Function,
    onBlur: Function,
    onChange: Function,
    onInput: Function,
    "onUpdate:value": Function,
    valueModifiers: Object,
    hidden: Boolean
  };
};
const dd = Lb;
var jb = function() {
  return k(k({}, pt(Lb(), ["prefix", "addonBefore", "addonAfter", "suffix"])), {
    rows: Number,
    autosize: {
      type: [Boolean, Object],
      default: void 0
    },
    autoSize: {
      type: [Boolean, Object],
      default: void 0
    },
    onResize: {
      type: Function
    },
    onCompositionstart: Function,
    onCompositionend: Function,
    valueModifiers: Object
  });
};
function Vb(t, e, n, r, a) {
  var o;
  return ge(t, (o = {}, j(o, "".concat(t, "-sm"), n === "small"), j(o, "".concat(t, "-lg"), n === "large"), j(o, "".concat(t, "-disabled"), r), j(o, "".concat(t, "-rtl"), a === "rtl"), j(o, "".concat(t, "-borderless"), !e), o));
}
var za = function(e) {
  return e != null && (Array.isArray(e) ? yn(e).length : !0);
};
function vD(t) {
  return za(t.prefix) || za(t.suffix) || za(t.allowClear);
}
function au(t) {
  return za(t.addonBefore) || za(t.addonAfter);
}
var pD = ["text", "input"];
const Bb = pe({
  name: "ClearableLabeledInput",
  inheritAttrs: !1,
  props: {
    prefixCls: String,
    inputType: Q.oneOf(Ht("text", "input")),
    value: Q.any,
    defaultValue: Q.any,
    allowClear: {
      type: Boolean,
      default: void 0
    },
    element: Q.any,
    handleReset: Function,
    disabled: {
      type: Boolean,
      default: void 0
    },
    direction: {
      type: String
    },
    size: {
      type: String
    },
    suffix: Q.any,
    prefix: Q.any,
    addonBefore: Q.any,
    addonAfter: Q.any,
    readonly: {
      type: Boolean,
      default: void 0
    },
    focused: {
      type: Boolean,
      default: void 0
    },
    bordered: {
      type: Boolean,
      default: !0
    },
    triggerFocus: {
      type: Function
    },
    hidden: Boolean
  },
  setup: function(e, n) {
    var r = n.slots, a = n.attrs, o = G(), i = function(f) {
      var g;
      if (!((g = o.value) === null || g === void 0) && g.contains(f.target)) {
        var p = e.triggerFocus;
        p == null || p();
      }
    }, l = function(f) {
      var g, p = e.allowClear, y = e.value, h = e.disabled, w = e.readonly, C = e.handleReset, x = e.suffix, S = x === void 0 ? r.suffix : x;
      if (!p)
        return null;
      var b = !h && !w && y, P = "".concat(f, "-clear-icon");
      return m(Ar, {
        onClick: C,
        onMousedown: function(O) {
          return O.preventDefault();
        },
        class: ge((g = {}, j(g, "".concat(P, "-hidden"), !b), j(g, "".concat(P, "-has-suffix"), !!S), g), P),
        role: "button"
      }, null);
    }, u = function(f) {
      var g, p = e.suffix, y = p === void 0 ? (g = r.suffix) === null || g === void 0 ? void 0 : g.call(r) : p, h = e.allowClear;
      return y || h ? m("span", {
        class: "".concat(f, "-suffix")
      }, [l(f), y]) : null;
    }, s = function(f, g) {
      var p, y, h, w = e.focused, C = e.value, x = e.prefix, S = x === void 0 ? (y = r.prefix) === null || y === void 0 ? void 0 : y.call(r) : x, b = e.size, P = e.suffix, T = P === void 0 ? (h = r.suffix) === null || h === void 0 ? void 0 : h.call(r) : P, O = e.disabled, D = e.allowClear, V = e.direction, K = e.readonly, R = e.bordered, E = e.hidden, M = e.addonAfter, N = M === void 0 ? r.addonAfter : M, _ = e.addonBefore, I = _ === void 0 ? r.addonBefore : _, A = u(f);
      if (!vD({
        prefix: S,
        suffix: T,
        allowClear: D
      }))
        return Ct(g, {
          value: C
        });
      var B = S ? m("span", {
        class: "".concat(f, "-prefix")
      }, [S]) : null, W = ge("".concat(f, "-affix-wrapper"), (p = {}, j(p, "".concat(f, "-affix-wrapper-focused"), w), j(p, "".concat(f, "-affix-wrapper-disabled"), O), j(p, "".concat(f, "-affix-wrapper-sm"), b === "small"), j(p, "".concat(f, "-affix-wrapper-lg"), b === "large"), j(p, "".concat(f, "-affix-wrapper-input-with-clear-btn"), T && D && C), j(p, "".concat(f, "-affix-wrapper-rtl"), V === "rtl"), j(p, "".concat(f, "-affix-wrapper-readonly"), K), j(p, "".concat(f, "-affix-wrapper-borderless"), !R), j(p, "".concat(a.class), !au({
        addonAfter: N,
        addonBefore: I
      }) && a.class), p));
      return m("span", {
        ref: o,
        class: W,
        style: a.style,
        onMouseup: i,
        hidden: E
      }, [B, Ct(g, {
        style: null,
        value: C,
        class: Vb(f, R, b, O)
      }), A]);
    }, d = function(f, g) {
      var p, y, h, w = e.addonBefore, C = w === void 0 ? (y = r.addonBefore) === null || y === void 0 ? void 0 : y.call(r) : w, x = e.addonAfter, S = x === void 0 ? (h = r.addonAfter) === null || h === void 0 ? void 0 : h.call(r) : x, b = e.size, P = e.direction, T = e.hidden;
      if (!au({
        addonBefore: C,
        addonAfter: S
      }))
        return g;
      var O = "".concat(f, "-group"), D = "".concat(O, "-addon"), V = C ? m("span", {
        class: D
      }, [C]) : null, K = S ? m("span", {
        class: D
      }, [S]) : null, R = ge("".concat(f, "-wrapper"), O, j({}, "".concat(O, "-rtl"), P === "rtl")), E = ge("".concat(f, "-group-wrapper"), (p = {}, j(p, "".concat(f, "-group-wrapper-sm"), b === "small"), j(p, "".concat(f, "-group-wrapper-lg"), b === "large"), j(p, "".concat(f, "-group-wrapper-rtl"), P === "rtl"), p), a.class);
      return m("span", {
        class: E,
        style: a.style,
        hidden: T
      }, [m("span", {
        class: R
      }, [V, Ct(g, {
        style: null
      }), K])]);
    }, c = function(f, g) {
      var p, y = e.value, h = e.allowClear, w = e.direction, C = e.bordered, x = e.hidden, S = e.addonAfter, b = S === void 0 ? r.addonAfter : S, P = e.addonBefore, T = P === void 0 ? r.addonBefore : P;
      if (!h)
        return Ct(g, {
          value: y
        });
      var O = ge("".concat(f, "-affix-wrapper"), "".concat(f, "-affix-wrapper-textarea-with-clear-btn"), (p = {}, j(p, "".concat(f, "-affix-wrapper-rtl"), w === "rtl"), j(p, "".concat(f, "-affix-wrapper-borderless"), !C), j(p, "".concat(a.class), !au({
        addonAfter: b,
        addonBefore: T
      }) && a.class), p));
      return m("span", {
        class: O,
        style: a.style,
        hidden: x
      }, [Ct(g, {
        style: null,
        value: y
      }), l(f)]);
    };
    return function() {
      var v, f = e.prefixCls, g = e.inputType, p = e.element, y = p === void 0 ? (v = r.element) === null || v === void 0 ? void 0 : v.call(r) : p;
      return g === pD[0] ? c(f, y) : d(f, s(f, y));
    };
  }
});
function mc(t) {
  return typeof t > "u" || t === null ? "" : String(t);
}
function Wa(t, e, n, r) {
  if (!!n) {
    var a = e;
    if (e.type === "click") {
      Object.defineProperty(a, "target", {
        writable: !0
      }), Object.defineProperty(a, "currentTarget", {
        writable: !0
      });
      var o = t.cloneNode(!0);
      a.target = o, a.currentTarget = o, o.value = "", n(a);
      return;
    }
    if (r !== void 0) {
      Object.defineProperty(a, "target", {
        writable: !0
      }), Object.defineProperty(a, "currentTarget", {
        writable: !0
      }), a.target = t, a.currentTarget = t, t.value = r, n(a);
      return;
    }
    n(a);
  }
}
function Kb(t, e) {
  if (!!t) {
    t.focus(e);
    var n = e || {}, r = n.cursor;
    if (r) {
      var a = t.value.length;
      switch (r) {
        case "start":
          t.setSelectionRange(0, 0);
          break;
        case "end":
          t.setSelectionRange(a, a);
          break;
        default:
          t.setSelectionRange(0, a);
      }
    }
  }
}
const _t = pe({
  name: "AInput",
  inheritAttrs: !1,
  props: dd(),
  setup: function(e, n) {
    var r = n.slots, a = n.attrs, o = n.expose, i = n.emit, l = G(), u = G(), s, d = jt(), c = Qe("input", e), v = c.direction, f = c.prefixCls, g = c.size, p = c.autocomplete, y = G(e.value === void 0 ? e.defaultValue : e.value), h = G(!1);
    Ce(function() {
      return e.value;
    }, function() {
      y.value = e.value;
    }), Ce(function() {
      return e.disabled;
    }, function() {
      e.value !== void 0 && (y.value = e.value), e.disabled && (h.value = !1);
    });
    var w = function() {
      s = setTimeout(function() {
        var I;
        ((I = l.value) === null || I === void 0 ? void 0 : I.getAttribute("type")) === "password" && l.value.hasAttribute("value") && l.value.removeAttribute("value");
      });
    }, C = function(I) {
      Kb(l.value, I);
    }, x = function() {
      var I;
      (I = l.value) === null || I === void 0 || I.blur();
    }, S = function(I, A, B) {
      var W;
      (W = l.value) === null || W === void 0 || W.setSelectionRange(I, A, B);
    }, b = function() {
      var I;
      (I = l.value) === null || I === void 0 || I.select();
    };
    o({
      focus: C,
      blur: x,
      input: l,
      stateValue: y,
      setSelectionRange: S,
      select: b
    });
    var P = function(I) {
      var A = e.onFocus;
      h.value = !0, A == null || A(I), vt(function() {
        w();
      });
    }, T = function(I) {
      var A = e.onBlur;
      h.value = !1, A == null || A(I), d.onFieldBlur(), vt(function() {
        w();
      });
    }, O = function(I) {
      i("update:value", I.target.value), i("change", I), i("input", I), d.onFieldChange();
    }, D = sn(), V = function(I, A) {
      y.value !== I && (e.value === void 0 ? y.value = I : vt(function() {
        l.value.value !== y.value && D.update();
      }), vt(function() {
        A && A();
      }));
    }, K = function(I) {
      Wa(l.value, I, O), V("", function() {
        C();
      });
    }, R = function(I) {
      var A = I.target, B = A.value, W = A.composing;
      if (!((I.isComposing || W) && e.lazy || y.value === B)) {
        var U = I.target.value;
        Wa(l.value, I, O), V(U, function() {
          w();
        });
      }
    }, E = function(I) {
      I.keyCode === 13 && i("pressEnter", I), i("keydown", I);
    };
    dt(function() {
      w();
    }), ht(function() {
      clearTimeout(s);
    });
    var M = function() {
      var I, A = e.addonBefore, B = A === void 0 ? r.addonBefore : A, W = e.addonAfter, U = W === void 0 ? r.addonAfter : W, z = e.disabled, L = e.bordered, $ = L === void 0 ? !0 : L, q = e.valueModifiers, H = q === void 0 ? {} : q, J = e.htmlSize, Z = pt(e, [
        "prefixCls",
        "onPressEnter",
        "addonBefore",
        "addonAfter",
        "prefix",
        "suffix",
        "allowClear",
        "defaultValue",
        "size",
        "bordered",
        "htmlSize",
        "lazy",
        "showCount",
        "valueModifiers"
      ]), ae = k(k(k({}, Z), a), {
        autocomplete: p.value,
        onChange: R,
        onInput: R,
        onFocus: P,
        onBlur: T,
        onKeydown: E,
        class: ge(Vb(f.value, $, g.value, z, v.value), j({}, a.class, a.class && !B && !U)),
        ref: l,
        key: "ant-input",
        size: J,
        id: (I = Z.id) !== null && I !== void 0 ? I : d.id.value
      });
      H.lazy && delete ae.onInput, ae.autofocus || delete ae.autofocus;
      var ue = m("input", pt(ae, ["size"]), null);
      return gn(ue, [[po]]);
    }, N = function() {
      var I, A = y.value, B = e.maxlength, W = e.suffix, U = W === void 0 ? (I = r.suffix) === null || I === void 0 ? void 0 : I.call(r) : W, z = e.showCount, L = Number(B) > 0;
      if (U || z) {
        var $ = Ie(mc(A)).length, q = null;
        return Le(z) === "object" ? q = z.formatter({
          count: $,
          maxlength: B
        }) : q = "".concat($).concat(L ? " / ".concat(B) : ""), m(ft, null, [!!z && m("span", {
          class: ge("".concat(f.value, "-show-count-suffix"), j({}, "".concat(f.value, "-show-count-has-suffix"), !!U))
        }, [q]), U]);
      }
      return null;
    };
    return function() {
      var _ = k(k(k({}, a), e), {
        prefixCls: f.value,
        inputType: "input",
        value: mc(y.value),
        handleReset: K,
        focused: h.value && !e.disabled
      });
      return m(Bb, Y(Y({}, pt(_, ["element", "valueModifiers", "suffix", "showCount"])), {}, {
        ref: u
      }), k(k({}, r), {
        element: M,
        suffix: N
      }));
    };
  }
}), hD = pe({
  name: "AInputGroup",
  props: {
    prefixCls: String,
    size: {
      type: String
    },
    compact: {
      type: Boolean,
      default: void 0
    },
    onMouseenter: {
      type: Function
    },
    onMouseleave: {
      type: Function
    },
    onFocus: {
      type: Function
    },
    onBlur: {
      type: Function
    }
  },
  setup: function(e, n) {
    var r = n.slots, a = Qe("input-group", e), o = a.prefixCls, i = a.direction, l = F(function() {
      var u, s = o.value;
      return u = {}, j(u, "".concat(s), !0), j(u, "".concat(s, "-lg"), e.size === "large"), j(u, "".concat(s, "-sm"), e.size === "small"), j(u, "".concat(s, "-compact"), e.compact), j(u, "".concat(s, "-rtl"), i.value === "rtl"), u;
    });
    return function() {
      var u;
      return m("span", {
        class: l.value,
        onMouseenter: e.onMouseenter,
        onMouseleave: e.onMouseleave,
        onFocus: e.onFocus,
        onBlur: e.onBlur
      }, [(u = r.default) === null || u === void 0 ? void 0 : u.call(r)]);
    };
  }
});
var ou = /iPhone/i, Yp = /iPod/i, qp = /iPad/i, iu = /\bAndroid(?:.+)Mobile\b/i, Gp = /Android/i, Ur = /\bAndroid(?:.+)SD4930UR\b/i, qo = /\bAndroid(?:.+)(?:KF[A-Z]{2,4})\b/i, Rn = /Windows Phone/i, Xp = /\bWindows(?:.+)ARM\b/i, Qp = /BlackBerry/i, Jp = /BB10/i, Zp = /Opera Mini/i, eh = /\b(CriOS|Chrome)(?:.+)Mobile/i, th = /Mobile(?:.+)Firefox\b/i;
function Ye(t, e) {
  return t.test(e);
}
function nh(t) {
  var e = t || (typeof navigator < "u" ? navigator.userAgent : ""), n = e.split("[FBAN");
  if (typeof n[1] < "u") {
    var r = n, a = De(r, 1);
    e = a[0];
  }
  if (n = e.split("Twitter"), typeof n[1] < "u") {
    var o = n, i = De(o, 1);
    e = i[0];
  }
  var l = {
    apple: {
      phone: Ye(ou, e) && !Ye(Rn, e),
      ipod: Ye(Yp, e),
      tablet: !Ye(ou, e) && Ye(qp, e) && !Ye(Rn, e),
      device: (Ye(ou, e) || Ye(Yp, e) || Ye(qp, e)) && !Ye(Rn, e)
    },
    amazon: {
      phone: Ye(Ur, e),
      tablet: !Ye(Ur, e) && Ye(qo, e),
      device: Ye(Ur, e) || Ye(qo, e)
    },
    android: {
      phone: !Ye(Rn, e) && Ye(Ur, e) || !Ye(Rn, e) && Ye(iu, e),
      tablet: !Ye(Rn, e) && !Ye(Ur, e) && !Ye(iu, e) && (Ye(qo, e) || Ye(Gp, e)),
      device: !Ye(Rn, e) && (Ye(Ur, e) || Ye(qo, e) || Ye(iu, e) || Ye(Gp, e)) || Ye(/\bokhttp\b/i, e)
    },
    windows: {
      phone: Ye(Rn, e),
      tablet: Ye(Xp, e),
      device: Ye(Rn, e) || Ye(Xp, e)
    },
    other: {
      blackberry: Ye(Qp, e),
      blackberry10: Ye(Jp, e),
      opera: Ye(Zp, e),
      firefox: Ye(th, e),
      chrome: Ye(eh, e),
      device: Ye(Qp, e) || Ye(Jp, e) || Ye(Zp, e) || Ye(th, e) || Ye(eh, e)
    },
    any: null,
    phone: null,
    tablet: null
  };
  return l.any = l.apple.device || l.android.device || l.windows.device || l.other.device, l.phone = l.apple.phone || l.android.phone || l.windows.phone, l.tablet = l.apple.tablet || l.android.tablet || l.windows.tablet, l;
}
var gD = k(k({}, nh()), {
  isMobile: nh
});
const mD = gD;
var yD = globalThis && globalThis.__rest || function(t, e) {
  var n = {};
  for (var r in t)
    Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(t); a < r.length; a++)
      e.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[a]) && (n[r[a]] = t[r[a]]);
  return n;
};
const bD = pe({
  name: "AInputSearch",
  inheritAttrs: !1,
  props: k(k({}, dd()), {
    inputPrefixCls: String,
    enterButton: Q.any,
    onSearch: {
      type: Function
    }
  }),
  setup: function(e, n) {
    var r = n.slots, a = n.attrs, o = n.expose, i = n.emit, l = G(), u = function() {
      var x;
      (x = l.value) === null || x === void 0 || x.focus();
    }, s = function() {
      var x;
      (x = l.value) === null || x === void 0 || x.blur();
    };
    o({
      focus: u,
      blur: s
    });
    var d = function(x) {
      i("update:value", x.target.value), x && x.target && x.type === "click" && i("search", x.target.value, x), i("change", x);
    }, c = function(x) {
      var S;
      document.activeElement === ((S = l.value) === null || S === void 0 ? void 0 : S.input) && x.preventDefault();
    }, v = function(x) {
      var S;
      i("search", (S = l.value) === null || S === void 0 ? void 0 : S.stateValue, x), mD.tablet || l.value.focus();
    }, f = Qe("input-search", e), g = f.prefixCls, p = f.getPrefixCls, y = f.direction, h = f.size, w = F(function() {
      return p("input", e.inputPrefixCls);
    });
    return function() {
      var C, x, S, b, P, T = e.disabled, O = e.loading, D = e.addonAfter, V = D === void 0 ? (x = r.addonAfter) === null || x === void 0 ? void 0 : x.call(r) : D, K = e.suffix, R = K === void 0 ? (S = r.suffix) === null || S === void 0 ? void 0 : S.call(r) : K, E = yD(e, ["disabled", "loading", "addonAfter", "suffix"]), M = e.enterButton, N = M === void 0 ? (P = (b = r.enterButton) === null || b === void 0 ? void 0 : b.call(r)) !== null && P !== void 0 ? P : !1 : M;
      N = N || N === "";
      var _ = typeof N == "boolean" ? m(Cs, null, null) : null, I = "".concat(g.value, "-button"), A = Array.isArray(N) ? N[0] : N, B, W = A.type && ig(A.type) && A.type.__ANT_BUTTON;
      if (W || A.tagName === "button")
        B = Ct(A, k({
          onMousedown: c,
          onClick: v,
          key: "enterButton"
        }, W ? {
          class: I,
          size: h.value
        } : {}), !1);
      else {
        var U = _ && !N;
        B = m(Jt, {
          class: I,
          type: N ? "primary" : void 0,
          size: h.value,
          disabled: T,
          key: "enterButton",
          onMousedown: c,
          onClick: v,
          loading: O,
          icon: U ? _ : null
        }, {
          default: function() {
            return [U ? null : _ || N];
          }
        });
      }
      V && (B = [B, V]);
      var z = ge(g.value, (C = {}, j(C, "".concat(g.value, "-rtl"), y.value === "rtl"), j(C, "".concat(g.value, "-").concat(h.value), !!h.value), j(C, "".concat(g.value, "-with-button"), !!N), C), a.class);
      return m(_t, Y(Y(Y({
        ref: l
      }, pt(E, ["onUpdate:value", "onSearch", "enterButton"])), a), {}, {
        onPressEnter: v,
        size: h.value,
        prefixCls: w.value,
        addonAfter: B,
        suffix: R,
        onChange: d,
        class: z,
        disabled: T
      }), r);
    };
  }
});
var CD = `
 min-height:0 !important;
 max-height:none !important;
 height:0 !important;
 visibility:hidden !important;
 overflow:hidden !important;
 position:absolute !important;
 z-index:-1000 !important;
 top:0 !important;
 right:0 !important
`, wD = ["letter-spacing", "line-height", "padding-top", "padding-bottom", "font-family", "font-weight", "font-size", "font-variant", "text-rendering", "text-transform", "width", "text-indent", "padding-left", "padding-right", "border-width", "box-sizing", "word-break"], lu = {}, an;
function SD(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = t.getAttribute("id") || t.getAttribute("data-reactid") || t.getAttribute("name");
  if (e && lu[n])
    return lu[n];
  var r = window.getComputedStyle(t), a = r.getPropertyValue("box-sizing") || r.getPropertyValue("-moz-box-sizing") || r.getPropertyValue("-webkit-box-sizing"), o = parseFloat(r.getPropertyValue("padding-bottom")) + parseFloat(r.getPropertyValue("padding-top")), i = parseFloat(r.getPropertyValue("border-bottom-width")) + parseFloat(r.getPropertyValue("border-top-width")), l = wD.map(function(s) {
    return "".concat(s, ":").concat(r.getPropertyValue(s));
  }).join(";"), u = {
    sizingStyle: l,
    paddingSize: o,
    borderSize: i,
    boxSizing: a
  };
  return e && n && (lu[n] = u), u;
}
function xD(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null, r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
  an || (an = document.createElement("textarea"), an.setAttribute("tab-index", "-1"), an.setAttribute("aria-hidden", "true"), document.body.appendChild(an)), t.getAttribute("wrap") ? an.setAttribute("wrap", t.getAttribute("wrap")) : an.removeAttribute("wrap");
  var a = SD(t, e), o = a.paddingSize, i = a.borderSize, l = a.boxSizing, u = a.sizingStyle;
  an.setAttribute("style", "".concat(u, ";").concat(CD)), an.value = t.value || t.placeholder || "";
  var s = Number.MIN_SAFE_INTEGER, d = Number.MAX_SAFE_INTEGER, c = an.scrollHeight, v;
  if (l === "border-box" ? c += i : l === "content-box" && (c -= o), n !== null || r !== null) {
    an.value = " ";
    var f = an.scrollHeight - o;
    n !== null && (s = f * n, l === "border-box" && (s = s + o + i), c = Math.max(s, c)), r !== null && (d = f * r, l === "border-box" && (d = d + o + i), v = c > d ? "" : "hidden", c = Math.min(d, c));
  }
  return {
    height: "".concat(c, "px"),
    minHeight: "".concat(s, "px"),
    maxHeight: "".concat(d, "px"),
    overflowY: v,
    resize: "none"
  };
}
var uu = 0, rh = 1, PD = 2, OD = pe({
  name: "ResizableTextArea",
  inheritAttrs: !1,
  props: jb(),
  setup: function(e, n) {
    var r = n.attrs, a = n.emit, o = n.expose, i, l, u = G(), s = G({}), d = G(uu);
    ht(function() {
      tt.cancel(i), tt.cancel(l);
    });
    var c = function() {
      try {
        if (document.activeElement === u.value) {
          var w = u.value.selectionStart, C = u.value.selectionEnd;
          u.value.setSelectionRange(w, C);
        }
      } catch {
      }
    }, v = function() {
      var w = e.autoSize || e.autosize;
      if (!(!w || !u.value)) {
        var C = w.minRows, x = w.maxRows;
        s.value = xD(u.value, !1, C, x), d.value = rh, tt.cancel(l), l = tt(function() {
          d.value = PD, l = tt(function() {
            d.value = uu, c();
          });
        });
      }
    }, f = function() {
      tt.cancel(i), i = tt(v);
    }, g = function(w) {
      if (d.value === uu) {
        a("resize", w);
        var C = e.autoSize || e.autosize;
        C && f();
      }
    };
    tr(e.autosize === void 0, "Input.TextArea", "autosize is deprecated, please use autoSize instead.");
    var p = function() {
      var w = e.prefixCls, C = e.autoSize, x = e.autosize, S = e.disabled, b = pt(e, ["prefixCls", "onPressEnter", "autoSize", "autosize", "defaultValue", "allowClear", "type", "lazy", "maxlength", "valueModifiers"]), P = ge(w, r.class, j({}, "".concat(w, "-disabled"), S)), T = [r.style, s.value, d.value === rh ? {
        overflowX: "hidden",
        overflowY: "hidden"
      } : null], O = k(k(k({}, b), r), {
        style: T,
        class: P
      });
      return O.autofocus || delete O.autofocus, O.rows === 0 && delete O.rows, m(Li, {
        onResize: g,
        disabled: !(C || x)
      }, {
        default: function() {
          return [gn(m("textarea", Y(Y({}, O), {}, {
            ref: u
          }), null), [[po]])];
        }
      });
    };
    Ce(function() {
      return e.value;
    }, function() {
      vt(function() {
        v();
      });
    }), dt(function() {
      vt(function() {
        v();
      });
    });
    var y = sn();
    return o({
      resizeTextarea: v,
      textArea: u,
      instance: y
    }), function() {
      return p();
    };
  }
});
const TD = OD;
function Hb(t, e) {
  return Ie(t || "").slice(0, e).join("");
}
function ah(t, e, n, r) {
  var a = n;
  return t ? a = Hb(n, r) : Ie(e || "").length < n.length && Ie(n || "").length > r && (a = e), a;
}
const ID = pe({
  name: "ATextarea",
  inheritAttrs: !1,
  props: jb(),
  setup: function(e, n) {
    var r = n.attrs, a = n.expose, o = n.emit, i = jt(), l = G(e.value === void 0 ? e.defaultValue : e.value), u = G(), s = G(""), d = Qe("input", e), c = d.prefixCls, v = d.size, f = d.direction, g = F(function() {
      return e.showCount === "" || e.showCount || !1;
    }), p = F(function() {
      return Number(e.maxlength) > 0;
    }), y = G(!1), h = G(), w = G(0), C = function(N) {
      y.value = !0, h.value = s.value, w.value = N.currentTarget.selectionStart, o("compositionstart", N);
    }, x = function(N) {
      var _;
      y.value = !1;
      var I = N.currentTarget.value;
      if (p.value) {
        var A = w.value >= e.maxlength + 1 || w.value === ((_ = h.value) === null || _ === void 0 ? void 0 : _.length);
        I = ah(A, h.value, I, e.maxlength);
      }
      I !== s.value && (T(I), Wa(N.currentTarget, N, V, I)), o("compositionend", N);
    }, S = sn();
    Ce(function() {
      return e.value;
    }, function() {
      var M;
      "value" in S.vnode.props, l.value = (M = e.value) !== null && M !== void 0 ? M : "";
    });
    var b = function(N) {
      var _;
      Kb((_ = u.value) === null || _ === void 0 ? void 0 : _.textArea, N);
    }, P = function() {
      var N, _;
      (_ = (N = u.value) === null || N === void 0 ? void 0 : N.textArea) === null || _ === void 0 || _.blur();
    }, T = function(N, _) {
      l.value !== N && (e.value === void 0 ? l.value = N : vt(function() {
        var I, A, B;
        u.value.textArea.value !== s.value && ((B = (I = u.value) === null || I === void 0 ? void 0 : (A = I.instance).update) === null || B === void 0 || B.call(A));
      }), vt(function() {
        _ && _();
      }));
    }, O = function(N) {
      N.keyCode === 13 && o("pressEnter", N), o("keydown", N);
    }, D = function(N) {
      var _ = e.onBlur;
      _ == null || _(N), i.onFieldBlur();
    }, V = function(N) {
      o("update:value", N.target.value), o("change", N), o("input", N), i.onFieldChange();
    }, K = function(N) {
      Wa(u.value.textArea, N, V), T("", function() {
        b();
      });
    }, R = function(N) {
      var _ = N.target.composing, I = N.target.value;
      if (y.value = !!(N.isComposing || _), !(y.value && e.lazy || l.value === I)) {
        if (p.value) {
          var A = N.target, B = A.selectionStart >= e.maxlength + 1 || A.selectionStart === I.length || !A.selectionStart;
          I = ah(B, s.value, I, e.maxlength);
        }
        Wa(N.currentTarget, N, V, I), T(I);
      }
    }, E = function() {
      var N, _, I, A = r.style, B = r.class, W = e.bordered, U = W === void 0 ? !0 : W, z = k(k(k({}, pt(e, ["allowClear"])), r), {
        style: g.value ? {} : A,
        class: (N = {}, j(N, "".concat(c.value, "-borderless"), !U), j(N, "".concat(B), B && !g.value), j(N, "".concat(c.value, "-sm"), v.value === "small"), j(N, "".concat(c.value, "-lg"), v.value === "large"), N),
        showCount: null,
        prefixCls: c.value,
        onInput: R,
        onChange: R,
        onBlur: D,
        onKeydown: O,
        onCompositionstart: C,
        onCompositionend: x
      });
      return !((_ = e.valueModifiers) === null || _ === void 0) && _.lazy && delete z.onInput, m(TD, Y(Y({}, z), {}, {
        id: (I = z.id) !== null && I !== void 0 ? I : i.id.value,
        ref: u,
        maxlength: e.maxlength
      }), null);
    };
    return a({
      focus: b,
      blur: P,
      resizableTextArea: u
    }), Ue(function() {
      var M = mc(l.value);
      !y.value && p.value && (e.value === null || e.value === void 0) && (M = Hb(M, e.maxlength)), s.value = M;
    }), function() {
      var M = e.maxlength, N = e.bordered, _ = N === void 0 ? !0 : N, I = e.hidden, A = r.style, B = r.class, W = k(k(k({}, e), r), {
        prefixCls: c.value,
        inputType: "text",
        handleReset: K,
        direction: f.value,
        bordered: _,
        style: g.value ? void 0 : A
      }), U = m(Bb, Y(Y({}, W), {}, {
        value: s.value
      }), {
        element: E
      });
      if (g.value) {
        var z = Ie(s.value).length, L = "";
        Le(g.value) === "object" ? L = g.value.formatter({
          count: z,
          maxlength: M
        }) : L = "".concat(z).concat(p.value ? " / ".concat(M) : ""), U = m("div", {
          hidden: I,
          class: ge("".concat(c.value, "-textarea"), j({}, "".concat(c.value, "-textarea-rtl"), f.value === "rtl"), "".concat(c.value, "-textarea-show-count"), B),
          style: A,
          "data-count": Le(L) !== "object" ? L : void 0
        }, [U]);
      }
      return U;
    };
  }
});
var kD = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z" } }] }, name: "eye", theme: "outlined" };
const _D = kD;
function oh(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? Object(arguments[e]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(a) {
      return Object.getOwnPropertyDescriptor(n, a).enumerable;
    }))), r.forEach(function(a) {
      ED(t, a, n[a]);
    });
  }
  return t;
}
function ED(t, e, n) {
  return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
var fd = function(e, n) {
  var r = oh({}, e, n.attrs);
  return m(st, oh({}, r, {
    icon: _D
  }), null);
};
fd.displayName = "EyeOutlined";
fd.inheritAttrs = !1;
const zb = fd;
var ND = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z" } }, { tag: "path", attrs: { d: "M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z" } }] }, name: "eye-invisible", theme: "outlined" };
const MD = ND;
function ih(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? Object(arguments[e]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(a) {
      return Object.getOwnPropertyDescriptor(n, a).enumerable;
    }))), r.forEach(function(a) {
      AD(t, a, n[a]);
    });
  }
  return t;
}
function AD(t, e, n) {
  return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
var vd = function(e, n) {
  var r = ih({}, e, n.attrs);
  return m(st, ih({}, r, {
    icon: MD
  }), null);
};
vd.displayName = "EyeInvisibleOutlined";
vd.inheritAttrs = !1;
const DD = vd;
var FD = globalThis && globalThis.__rest || function(t, e) {
  var n = {};
  for (var r in t)
    Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(t); a < r.length; a++)
      e.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[a]) && (n[r[a]] = t[r[a]]);
  return n;
}, RD = {
  click: "onClick",
  hover: "onMouseover"
}, $D = function(e) {
  return e ? m(zb, null, null) : m(DD, null, null);
};
const LD = pe({
  name: "AInputPassword",
  inheritAttrs: !1,
  props: k(k({}, dd()), {
    prefixCls: String,
    inputPrefixCls: String,
    action: {
      type: String,
      default: "click"
    },
    visibilityToggle: {
      type: Boolean,
      default: !0
    },
    iconRender: Function
  }),
  setup: function(e, n) {
    var r = n.slots, a = n.attrs, o = n.expose, i = G(!1), l = function() {
      var w = e.disabled;
      w || (i.value = !i.value);
    }, u = G(), s = function() {
      var w;
      (w = u.value) === null || w === void 0 || w.focus();
    }, d = function() {
      var w;
      (w = u.value) === null || w === void 0 || w.blur();
    };
    o({
      focus: s,
      blur: d
    });
    var c = function(w) {
      var C, x = e.action, S = e.iconRender, b = S === void 0 ? r.iconRender || $D : S, P = RD[x] || "", T = b(i.value), O = (C = {}, j(C, P, l), j(C, "class", "".concat(w, "-icon")), j(C, "key", "passwordIcon"), j(C, "onMousedown", function(V) {
        V.preventDefault();
      }), j(C, "onMouseup", function(V) {
        V.preventDefault();
      }), C);
      return Ct(At(T) ? T : m("span", null, [T]), O);
    }, v = Qe("input-password", e), f = v.prefixCls, g = v.getPrefixCls, p = F(function() {
      return g("input", e.inputPrefixCls);
    }), y = function() {
      var w = e.size, C = e.visibilityToggle, x = FD(e, ["size", "visibilityToggle"]), S = C && c(f.value), b = ge(f.value, a.class, j({}, "".concat(f.value, "-").concat(w), !!w)), P = k(k(k({}, pt(x, ["suffix", "iconRender", "action"])), a), {
        type: i.value ? "text" : "password",
        class: b,
        prefixCls: p.value,
        suffix: S
      });
      return w && (P.size = w), m(_t, Y({
        ref: u
      }, P), r);
    };
    return function() {
      return y();
    };
  }
});
_t.Group = hD;
_t.Search = bD;
_t.TextArea = ID;
_t.Password = LD;
_t.install = function(t) {
  return t.component(_t.name, _t), t.component(_t.Group.name, _t.Group), t.component(_t.Search.name, _t.Search), t.component(_t.TextArea.name, _t.TextArea), t.component(_t.Password.name, _t.Password), t;
};
var jD = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M890.5 755.3L537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3A8 8 0 00140 768h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7z" } }] }, name: "up", theme: "outlined" };
const VD = jD;
function lh(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? Object(arguments[e]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(a) {
      return Object.getOwnPropertyDescriptor(n, a).enumerable;
    }))), r.forEach(function(a) {
      BD(t, a, n[a]);
    });
  }
  return t;
}
function BD(t, e, n) {
  return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
var pd = function(e, n) {
  var r = lh({}, e, n.attrs);
  return m(st, lh({}, r, {
    icon: VD
  }), null);
};
pd.displayName = "UpOutlined";
pd.inheritAttrs = !1;
const KD = pd;
function yc() {
  return typeof BigInt == "function";
}
function Ua(t) {
  var e = t.trim(), n = e.startsWith("-");
  n && (e = e.slice(1)), e = e.replace(/(\.\d*[^0])0*$/, "$1").replace(/\.0*$/, "").replace(/^0+/, ""), e.startsWith(".") && (e = "0".concat(e));
  var r = e || "0", a = r.split("."), o = a[0] || "0", i = a[1] || "0";
  o === "0" && i === "0" && (n = !1);
  var l = n ? "-" : "";
  return {
    negative: n,
    negativeStr: l,
    trimStr: r,
    integerStr: o,
    decimalStr: i,
    fullStr: "".concat(l).concat(r)
  };
}
function hd(t) {
  var e = String(t);
  return !Number.isNaN(Number(e)) && e.includes("e");
}
function io(t) {
  var e = String(t);
  if (hd(t)) {
    var n = Number(e.slice(e.indexOf("e-") + 2)), r = e.match(/\.(\d+)/);
    return r != null && r[1] && (n += r[1].length), n;
  }
  return e.includes(".") && md(e) ? e.length - e.indexOf(".") - 1 : 0;
}
function gd(t) {
  var e = String(t);
  if (hd(t)) {
    if (t > Number.MAX_SAFE_INTEGER)
      return String(yc() ? BigInt(t).toString() : Number.MAX_SAFE_INTEGER);
    if (t < Number.MIN_SAFE_INTEGER)
      return String(yc() ? BigInt(t).toString() : Number.MIN_SAFE_INTEGER);
    e = t.toFixed(io(e));
  }
  return Ua(e).fullStr;
}
function md(t) {
  return typeof t == "number" ? !Number.isNaN(t) : t ? /^\s*-?\d+(\.\d+)?\s*$/.test(t) || /^\s*-?\d+\.\s*$/.test(t) || /^\s*-?\.\d+\s*$/.test(t) : !1;
}
var HD = /* @__PURE__ */ function() {
  function t(e) {
    if (xs(this, t), this.origin = "", !e && e !== 0 || !String(e).trim()) {
      this.empty = !0;
      return;
    }
    this.origin = String(e), this.number = Number(e);
  }
  return Ss(t, [{
    key: "negate",
    value: function() {
      return new t(-this.toNumber());
    }
  }, {
    key: "add",
    value: function(n) {
      if (this.isInvalidate())
        return new t(n);
      var r = Number(n);
      if (Number.isNaN(r))
        return this;
      var a = this.number + r;
      if (a > Number.MAX_SAFE_INTEGER)
        return new t(Number.MAX_SAFE_INTEGER);
      if (a < Number.MIN_SAFE_INTEGER)
        return new t(Number.MIN_SAFE_INTEGER);
      var o = Math.max(io(this.number), io(r));
      return new t(a.toFixed(o));
    }
  }, {
    key: "isEmpty",
    value: function() {
      return this.empty;
    }
  }, {
    key: "isNaN",
    value: function() {
      return Number.isNaN(this.number);
    }
  }, {
    key: "isInvalidate",
    value: function() {
      return this.isEmpty() || this.isNaN();
    }
  }, {
    key: "equals",
    value: function(n) {
      return this.toNumber() === (n == null ? void 0 : n.toNumber());
    }
  }, {
    key: "lessEquals",
    value: function(n) {
      return this.add(n.negate().toString()).toNumber() <= 0;
    }
  }, {
    key: "toNumber",
    value: function() {
      return this.number;
    }
  }, {
    key: "toString",
    value: function() {
      var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
      return n ? this.isInvalidate() ? "" : gd(this.number) : this.origin;
    }
  }]), t;
}(), zD = /* @__PURE__ */ function() {
  function t(e) {
    if (xs(this, t), this.origin = "", !e && e !== 0 || !String(e).trim()) {
      this.empty = !0;
      return;
    }
    if (this.origin = String(e), e === "-") {
      this.nan = !0;
      return;
    }
    var n = e;
    if (hd(n) && (n = Number(n)), n = typeof n == "string" ? n : gd(n), md(n)) {
      var r = Ua(n);
      this.negative = r.negative;
      var a = r.trimStr.split(".");
      this.integer = BigInt(a[0]);
      var o = a[1] || "0";
      this.decimal = BigInt(o), this.decimalLen = o.length;
    } else
      this.nan = !0;
  }
  return Ss(t, [{
    key: "getMark",
    value: function() {
      return this.negative ? "-" : "";
    }
  }, {
    key: "getIntegerStr",
    value: function() {
      return this.integer.toString();
    }
  }, {
    key: "getDecimalStr",
    value: function() {
      return this.decimal.toString().padStart(this.decimalLen, "0");
    }
  }, {
    key: "alignDecimal",
    value: function(n) {
      var r = "".concat(this.getMark()).concat(this.getIntegerStr()).concat(this.getDecimalStr().padEnd(n, "0"));
      return BigInt(r);
    }
  }, {
    key: "negate",
    value: function() {
      var n = new t(this.toString());
      return n.negative = !n.negative, n;
    }
  }, {
    key: "add",
    value: function(n) {
      if (this.isInvalidate())
        return new t(n);
      var r = new t(n);
      if (r.isInvalidate())
        return this;
      var a = Math.max(this.getDecimalStr().length, r.getDecimalStr().length), o = this.alignDecimal(a), i = r.alignDecimal(a), l = (o + i).toString(), u = Ua(l), s = u.negativeStr, d = u.trimStr, c = "".concat(s).concat(d.padStart(a + 1, "0"));
      return new t("".concat(c.slice(0, -a), ".").concat(c.slice(-a)));
    }
  }, {
    key: "isEmpty",
    value: function() {
      return this.empty;
    }
  }, {
    key: "isNaN",
    value: function() {
      return this.nan;
    }
  }, {
    key: "isInvalidate",
    value: function() {
      return this.isEmpty() || this.isNaN();
    }
  }, {
    key: "equals",
    value: function(n) {
      return this.toString() === (n == null ? void 0 : n.toString());
    }
  }, {
    key: "lessEquals",
    value: function(n) {
      return this.add(n.negate().toString()).toNumber() <= 0;
    }
  }, {
    key: "toNumber",
    value: function() {
      return this.isNaN() ? NaN : Number(this.toString());
    }
  }, {
    key: "toString",
    value: function() {
      var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
      return n ? this.isInvalidate() ? "" : Ua("".concat(this.getMark()).concat(this.getIntegerStr(), ".").concat(this.getDecimalStr())).fullStr : this.origin;
    }
  }]), t;
}();
function On(t) {
  return yc() ? new zD(t) : new HD(t);
}
function bc(t, e, n) {
  if (t === "")
    return "";
  var r = Ua(t), a = r.negativeStr, o = r.integerStr, i = r.decimalStr, l = "".concat(e).concat(i), u = "".concat(a).concat(o);
  if (n >= 0) {
    var s = Number(i[n]);
    if (s >= 5) {
      var d = On(t).add("".concat(a, "0.").concat("0".repeat(n)).concat(10 - s));
      return bc(d.toString(), e, n);
    }
    return n === 0 ? u : "".concat(u).concat(e).concat(i.padEnd(n, "0").slice(0, n));
  }
  return l === ".0" ? u : "".concat(u).concat(l);
}
var WD = 200, UD = 600;
const YD = pe({
  name: "StepHandler",
  inheritAttrs: !1,
  props: {
    prefixCls: String,
    upDisabled: Boolean,
    downDisabled: Boolean,
    onStep: {
      type: Function
    }
  },
  slots: ["upNode", "downNode"],
  setup: function(e, n) {
    var r = n.slots, a = n.emit, o = G(), i = function(s, d) {
      s.preventDefault(), a("step", d);
      function c() {
        a("step", d), o.value = setTimeout(c, WD);
      }
      o.value = setTimeout(c, UD);
    }, l = function() {
      clearTimeout(o.value);
    };
    return ht(function() {
      l();
    }), function() {
      if (Km())
        return null;
      var u = e.prefixCls, s = e.upDisabled, d = e.downDisabled, c = "".concat(u, "-handler"), v = ge(c, "".concat(c, "-up"), j({}, "".concat(c, "-up-disabled"), s)), f = ge(c, "".concat(c, "-down"), j({}, "".concat(c, "-down-disabled"), d)), g = {
        unselectable: "on",
        role: "button",
        onMouseup: l,
        onMouseleave: l
      }, p = r.upNode, y = r.downNode;
      return m("div", {
        class: "".concat(c, "-wrap")
      }, [m("span", Y(Y({}, g), {}, {
        onMousedown: function(w) {
          i(w, !0);
        },
        "aria-label": "Increase Value",
        "aria-disabled": s,
        class: v
      }), [(p == null ? void 0 : p()) || m("span", {
        unselectable: "on",
        class: "".concat(u, "-handler-up-inner")
      }, null)]), m("span", Y(Y({}, g), {}, {
        onMousedown: function(w) {
          i(w, !1);
        },
        "aria-label": "Decrease Value",
        "aria-disabled": d,
        class: f
      }), [(y == null ? void 0 : y()) || m("span", {
        unselectable: "on",
        class: "".concat(u, "-handler-down-inner")
      }, null)])]);
    };
  }
});
function qD(t, e) {
  var n = G(null);
  function r() {
    try {
      var o = t.value, i = o.selectionStart, l = o.selectionEnd, u = o.value, s = u.substring(0, i), d = u.substring(l);
      n.value = {
        start: i,
        end: l,
        value: u,
        beforeTxt: s,
        afterTxt: d
      };
    } catch {
    }
  }
  function a() {
    if (t.value && n.value && e.value)
      try {
        var o = t.value.value, i = n.value, l = i.beforeTxt, u = i.afterTxt, s = i.start, d = o.length;
        if (o.endsWith(u))
          d = o.length - n.value.afterTxt.length;
        else if (o.startsWith(l))
          d = l.length;
        else {
          var c = l[s - 1], v = o.indexOf(c, s - 1);
          v !== -1 && (d = v + 1);
        }
        t.value.setSelectionRange(d, d);
      } catch (f) {
        Ze(!1, "Something warning of cursor restore. Please fire issue about this: ".concat(f.message));
      }
  }
  return [r, a];
}
const GD = function() {
  var t = G(0), e = function() {
    tt.cancel(t.value);
  };
  return ht(function() {
    e();
  }), function(n) {
    e(), t.value = tt(function() {
      n();
    });
  };
};
var XD = globalThis && globalThis.__rest || function(t, e) {
  var n = {};
  for (var r in t)
    Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(t); a < r.length; a++)
      e.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[a]) && (n[r[a]] = t[r[a]]);
  return n;
}, uh = function(e, n) {
  return e || n.isEmpty() ? n.toString() : n.toNumber();
}, ch = function(e) {
  var n = On(e);
  return n.isInvalidate() ? null : n;
}, Wb = function() {
  return {
    stringMode: {
      type: Boolean
    },
    defaultValue: {
      type: [String, Number]
    },
    value: {
      type: [String, Number]
    },
    prefixCls: {
      type: String
    },
    min: {
      type: [String, Number]
    },
    max: {
      type: [String, Number]
    },
    step: {
      type: [String, Number],
      default: 1
    },
    tabindex: {
      type: Number
    },
    controls: {
      type: Boolean,
      default: !0
    },
    readonly: {
      type: Boolean
    },
    disabled: {
      type: Boolean
    },
    autofocus: {
      type: Boolean
    },
    keyboard: {
      type: Boolean,
      default: !0
    },
    parser: {
      type: Function
    },
    formatter: {
      type: Function
    },
    precision: {
      type: Number
    },
    decimalSeparator: {
      type: String
    },
    onInput: {
      type: Function
    },
    onChange: {
      type: Function
    },
    onPressEnter: {
      type: Function
    },
    onStep: {
      type: Function
    },
    onBlur: {
      type: Function
    },
    onFocus: {
      type: Function
    }
  };
};
const QD = pe({
  name: "InnerInputNumber",
  inheritAttrs: !1,
  props: k(k({}, Wb()), {
    lazy: Boolean
  }),
  slots: ["upHandler", "downHandler"],
  setup: function(e, n) {
    var r = n.attrs, a = n.slots, o = n.emit, i = n.expose, l = G(), u = G(!1), s = G(!1), d = G(!1), c = G(On(e.value));
    function v(L) {
      e.value === void 0 && (c.value = L);
    }
    var f = function($, q) {
      if (!q)
        return e.precision >= 0 ? e.precision : Math.max(io($), io(e.step));
    }, g = function($) {
      var q = String($);
      if (e.parser)
        return e.parser(q);
      var H = q;
      return e.decimalSeparator && (H = H.replace(e.decimalSeparator, ".")), H.replace(/[^\w.-]+/g, "");
    }, p = G(""), y = function($, q) {
      if (e.formatter)
        return e.formatter($, {
          userTyping: q,
          input: String(p.value)
        });
      var H = typeof $ == "number" ? gd($) : $;
      if (!q) {
        var J = f(H, q);
        if (md(H) && (e.decimalSeparator || J >= 0)) {
          var Z = e.decimalSeparator || ".";
          H = bc(H, Z, J);
        }
      }
      return H;
    }, h = function() {
      var L = e.value;
      return c.value.isInvalidate() && ["string", "number"].includes(Le(L)) ? Number.isNaN(L) ? "" : L : y(c.value.toString(), !1);
    }();
    p.value = h;
    function w(L, $) {
      p.value = y(
        L.isInvalidate() ? L.toString(!1) : L.toString(!$),
        $
      );
    }
    var C = F(function() {
      return ch(e.max);
    }), x = F(function() {
      return ch(e.min);
    }), S = F(function() {
      return !C.value || !c.value || c.value.isInvalidate() ? !1 : C.value.lessEquals(c.value);
    }), b = F(function() {
      return !x.value || !c.value || c.value.isInvalidate() ? !1 : c.value.lessEquals(x.value);
    }), P = qD(l, u), T = De(P, 2), O = T[0], D = T[1], V = function($) {
      return C.value && !$.lessEquals(C.value) ? C.value : x.value && !x.value.lessEquals($) ? x.value : null;
    }, K = function($) {
      return !V($);
    }, R = function($, q) {
      var H, J = $, Z = K(J) || J.isEmpty();
      if (!J.isEmpty() && !q && (J = V(J) || J, Z = !0), !e.readonly && !e.disabled && Z) {
        var ae = J.toString(), ue = f(ae, q);
        return ue >= 0 && (J = On(bc(ae, ".", ue))), J.equals(c.value) || (v(J), (H = e.onChange) === null || H === void 0 || H.call(e, J.isEmpty() ? null : uh(e.stringMode, J)), e.value === void 0 && w(J, q)), J;
      }
      return c.value;
    }, E = GD(), M = function L($) {
      var q;
      if (O(), p.value = $, !d.value) {
        var H = g($), J = On(H);
        J.isNaN() || R(J, !0);
      }
      (q = e.onInput) === null || q === void 0 || q.call(e, $), E(function() {
        var Z = $;
        e.parser || (Z = $.replace(/。/g, ".")), Z !== $ && L(Z);
      });
    }, N = function() {
      d.value = !0;
    }, _ = function() {
      d.value = !1, M(l.value.value);
    }, I = function($) {
      M($.target.value);
    }, A = function($) {
      var q, H;
      if (!($ && S.value || !$ && b.value)) {
        s.value = !1;
        var J = On(e.step);
        $ || (J = J.negate());
        var Z = (c.value || On(0)).add(J.toString()), ae = R(Z, !1);
        (q = e.onStep) === null || q === void 0 || q.call(e, uh(e.stringMode, ae), {
          offset: e.step,
          type: $ ? "up" : "down"
        }), (H = l.value) === null || H === void 0 || H.focus();
      }
    }, B = function($) {
      var q = On(g(p.value)), H = q;
      q.isNaN() ? H = c.value : H = R(q, $), e.value !== void 0 ? w(c.value, !1) : H.isNaN() || w(H, !1);
    }, W = function($) {
      var q, H = $.which;
      s.value = !0, H === xe.ENTER && (d.value || (s.value = !1), B(!1), (q = e.onPressEnter) === null || q === void 0 || q.call(e, $)), e.keyboard !== !1 && !d.value && [xe.UP, xe.DOWN].includes(H) && (A(xe.UP === H), $.preventDefault());
    }, U = function() {
      s.value = !1;
    }, z = function($) {
      B(!1), u.value = !1, s.value = !1, o("blur", $);
    };
    return Ce(function() {
      return e.precision;
    }, function() {
      c.value.isInvalidate() || w(c.value, !1);
    }, {
      flush: "post"
    }), Ce(function() {
      return e.value;
    }, function() {
      var L = On(e.value);
      c.value = L;
      var $ = On(g(p.value));
      (!L.equals($) || !s.value || e.formatter) && w(L, s.value);
    }, {
      flush: "post"
    }), Ce(p, function() {
      e.formatter && D();
    }, {
      flush: "post"
    }), Ce(function() {
      return e.disabled;
    }, function(L) {
      L && (u.value = !1);
    }), i({
      focus: function() {
        var $;
        ($ = l.value) === null || $ === void 0 || $.focus();
      },
      blur: function() {
        var $;
        ($ = l.value) === null || $ === void 0 || $.blur();
      }
    }), function() {
      var L, $ = k(k({}, r), e), q = $.prefixCls, H = q === void 0 ? "rc-input-number" : q, J = $.min, Z = $.max, ae = $.step, ue = ae === void 0 ? 1 : ae;
      $.defaultValue, $.value;
      var ne = $.disabled, X = $.readonly;
      $.keyboard;
      var te = $.controls, me = te === void 0 ? !0 : te, Oe = $.autofocus;
      $.stringMode, $.parser, $.formatter, $.precision, $.decimalSeparator, $.onChange, $.onInput, $.onPressEnter, $.onStep;
      var ke = $.lazy, Me = $.class, Pe = $.style, fe = XD($, ["prefixCls", "min", "max", "step", "defaultValue", "value", "disabled", "readonly", "keyboard", "controls", "autofocus", "stringMode", "parser", "formatter", "precision", "decimalSeparator", "onChange", "onInput", "onPressEnter", "onStep", "lazy", "class", "style"]), le = a.upHandler, ie = a.downHandler, de = "".concat(H, "-input"), ye = {};
      return ke ? ye.onChange = I : ye.onInput = I, m("div", {
        class: ge(H, Me, (L = {}, j(L, "".concat(H, "-focused"), u.value), j(L, "".concat(H, "-disabled"), ne), j(L, "".concat(H, "-readonly"), X), j(L, "".concat(H, "-not-a-number"), c.value.isNaN()), j(L, "".concat(H, "-out-of-range"), !c.value.isInvalidate() && !K(c.value)), L)),
        style: Pe,
        onKeydown: W,
        onKeyup: U
      }, [me && m(YD, {
        prefixCls: H,
        upDisabled: S.value,
        downDisabled: b.value,
        onStep: A
      }, {
        upNode: le,
        downNode: ie
      }), m("div", {
        class: "".concat(de, "-wrap")
      }, [m("input", Y(Y(Y({
        autofocus: Oe,
        autocomplete: "off",
        role: "spinbutton",
        "aria-valuemin": J,
        "aria-valuemax": Z,
        "aria-valuenow": c.value.isInvalidate() ? null : c.value.toString(),
        step: ue
      }, fe), {}, {
        ref: l,
        class: de,
        value: p.value,
        disabled: ne,
        readonly: X,
        onFocus: function(Be) {
          u.value = !0, o("focus", Be);
        }
      }, ye), {}, {
        onBlur: z,
        onCompositionstart: N,
        onCompositionend: _
      }), null)])]);
    };
  }
});
function cu(t) {
  return t != null;
}
var JD = globalThis && globalThis.__rest || function(t, e) {
  var n = {};
  for (var r in t)
    Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(t); a < r.length; a++)
      e.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[a]) && (n[r[a]] = t[r[a]]);
  return n;
}, sh = Wb(), ZD = function() {
  return k(k({}, sh), {
    size: {
      type: String
    },
    bordered: {
      type: Boolean,
      default: !0
    },
    placeholder: String,
    name: String,
    id: String,
    type: String,
    addonBefore: Q.any,
    addonAfter: Q.any,
    prefix: Q.any,
    "onUpdate:value": sh.onChange,
    valueModifiers: Object
  });
}, su = pe({
  name: "AInputNumber",
  inheritAttrs: !1,
  props: ZD(),
  slots: ["addonBefore", "addonAfter", "prefix"],
  setup: function(e, n) {
    var r = n.emit, a = n.expose, o = n.attrs, i = n.slots, l = jt(), u = Qe("input-number", e), s = u.prefixCls, d = u.size, c = u.direction, v = G(e.value === void 0 ? e.defaultValue : e.value), f = G(!1);
    Ce(function() {
      return e.value;
    }, function() {
      v.value = e.value;
    });
    var g = G(null), p = function() {
      var S;
      (S = g.value) === null || S === void 0 || S.focus();
    }, y = function() {
      var S;
      (S = g.value) === null || S === void 0 || S.blur();
    };
    a({
      focus: p,
      blur: y
    });
    var h = function(S) {
      e.value === void 0 && (v.value = S), r("update:value", S), r("change", S), l.onFieldChange();
    }, w = function(S) {
      f.value = !1, r("blur", S), l.onFieldBlur();
    }, C = function(S) {
      f.value = !0, r("focus", S);
    };
    return function() {
      var x, S, b, P, T = k(k({}, o), e), O = T.class, D = T.bordered, V = T.readonly, K = T.style, R = T.addonBefore, E = R === void 0 ? (S = i.addonBefore) === null || S === void 0 ? void 0 : S.call(i) : R, M = T.addonAfter, N = M === void 0 ? (b = i.addonAfter) === null || b === void 0 ? void 0 : b.call(i) : M, _ = T.prefix, I = _ === void 0 ? (P = i.prefix) === null || P === void 0 ? void 0 : P.call(i) : _, A = T.valueModifiers, B = A === void 0 ? {} : A, W = JD(T, ["class", "bordered", "readonly", "style", "addonBefore", "addonAfter", "prefix", "valueModifiers"]), U = s.value, z = d.value, L = ge((x = {}, j(x, "".concat(U, "-lg"), z === "large"), j(x, "".concat(U, "-sm"), z === "small"), j(x, "".concat(U, "-rtl"), c.value === "rtl"), j(x, "".concat(U, "-readonly"), V), j(x, "".concat(U, "-borderless"), !D), x), O), $ = m(QD, Y(Y({}, pt(W, ["size", "defaultValue"])), {}, {
        ref: g,
        lazy: !!B.lazy,
        value: v.value,
        class: L,
        prefixCls: U,
        readonly: V,
        onChange: h,
        onBlur: w,
        onFocus: C
      }), {
        upHandler: function() {
          return m(KD, {
            class: "".concat(U, "-handler-up-inner")
          }, null);
        },
        downHandler: function() {
          return m(ms, {
            class: "".concat(U, "-handler-down-inner")
          }, null);
        }
      }), q = cu(E) || cu(N);
      if (cu(I)) {
        var H, J = ge("".concat(U, "-affix-wrapper"), (H = {}, j(H, "".concat(U, "-affix-wrapper-focused"), f.value), j(H, "".concat(U, "-affix-wrapper-disabled"), e.disabled), j(H, "".concat(U, "-affix-wrapper-rtl"), c.value === "rtl"), j(H, "".concat(U, "-affix-wrapper-readonly"), V), j(H, "".concat(U, "-affix-wrapper-borderless"), !D), j(H, "".concat(O), !q && O), H));
        $ = m("div", {
          class: J,
          style: K,
          onMouseup: function() {
            return g.value.focus();
          }
        }, [m("span", {
          class: "".concat(U, "-prefix")
        }, [I]), $]);
      }
      if (q) {
        var Z, ae = "".concat(U, "-group"), ue = "".concat(ae, "-addon"), ne = E ? m("div", {
          class: ue
        }, [E]) : null, X = N ? m("div", {
          class: ue
        }, [N]) : null, te = ge("".concat(U, "-wrapper"), ae, j({}, "".concat(ae, "-rtl"), c.value === "rtl")), me = ge("".concat(U, "-group-wrapper"), (Z = {}, j(Z, "".concat(U, "-group-wrapper-sm"), z === "small"), j(Z, "".concat(U, "-group-wrapper-lg"), z === "large"), j(Z, "".concat(U, "-group-wrapper-rtl"), c.value === "rtl"), Z), O);
        $ = m("div", {
          class: me,
          style: K
        }, [m("div", {
          class: te
        }, [ne, $, X])]);
      }
      return Ct($, {
        style: K
      });
    };
  }
});
const eF = k(su, {
  install: function(e) {
    return e.component(su.name, su), e;
  }
});
var tF = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M272.9 512l265.4-339.1c4.1-5.2.4-12.9-6.3-12.9h-77.3c-4.9 0-9.6 2.3-12.6 6.1L186.8 492.3a31.99 31.99 0 000 39.5l255.3 326.1c3 3.9 7.7 6.1 12.6 6.1H532c6.7 0 10.4-7.7 6.3-12.9L272.9 512zm304 0l265.4-339.1c4.1-5.2.4-12.9-6.3-12.9h-77.3c-4.9 0-9.6 2.3-12.6 6.1L490.8 492.3a31.99 31.99 0 000 39.5l255.3 326.1c3 3.9 7.7 6.1 12.6 6.1H836c6.7 0 10.4-7.7 6.3-12.9L576.9 512z" } }] }, name: "double-left", theme: "outlined" };
const nF = tF;
function dh(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? Object(arguments[e]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(a) {
      return Object.getOwnPropertyDescriptor(n, a).enumerable;
    }))), r.forEach(function(a) {
      rF(t, a, n[a]);
    });
  }
  return t;
}
function rF(t, e, n) {
  return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
var yd = function(e, n) {
  var r = dh({}, e, n.attrs);
  return m(st, dh({}, r, {
    icon: nF
  }), null);
};
yd.displayName = "DoubleLeftOutlined";
yd.inheritAttrs = !1;
const aF = yd;
var oF = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M533.2 492.3L277.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H188c-6.7 0-10.4 7.7-6.3 12.9L447.1 512 181.7 851.1A7.98 7.98 0 00188 864h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326.1c9.1-11.7 9.1-27.9 0-39.5zm304 0L581.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H492c-6.7 0-10.4 7.7-6.3 12.9L751.1 512 485.7 851.1A7.98 7.98 0 00492 864h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326.1c9.1-11.7 9.1-27.9 0-39.5z" } }] }, name: "double-right", theme: "outlined" };
const iF = oF;
function fh(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? Object(arguments[e]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(a) {
      return Object.getOwnPropertyDescriptor(n, a).enumerable;
    }))), r.forEach(function(a) {
      lF(t, a, n[a]);
    });
  }
  return t;
}
function lF(t, e, n) {
  return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
var bd = function(e, n) {
  var r = fh({}, e, n.attrs);
  return m(st, fh({}, r, {
    icon: iF
  }), null);
};
bd.displayName = "DoubleRightOutlined";
bd.inheritAttrs = !1;
const uF = bd, cF = pe({
  inheritAttrs: !1,
  props: Gm(),
  Option: Pi.Option,
  setup: function(e, n) {
    var r = n.attrs, a = n.slots;
    return function() {
      var o = k(k(k({}, e), {
        size: "small"
      }), r);
      return m(Pi, o, a);
    };
  }
}), mr = pe({
  name: "Pager",
  inheritAttrs: !1,
  props: {
    rootPrefixCls: String,
    page: Number,
    active: {
      type: Boolean,
      default: void 0
    },
    last: {
      type: Boolean,
      default: void 0
    },
    locale: Q.object,
    showTitle: {
      type: Boolean,
      default: void 0
    },
    itemRender: {
      type: Function,
      default: function() {
      }
    },
    onClick: {
      type: Function
    },
    onKeypress: {
      type: Function
    }
  },
  eimt: ["click", "keypress"],
  setup: function(e, n) {
    var r = n.emit, a = n.attrs, o = function() {
      r("click", e.page);
    }, i = function(u) {
      r("keypress", u, o, e.page);
    };
    return function() {
      var l, u = e.showTitle, s = e.page, d = e.itemRender, c = a.class, v = a.style, f = "".concat(e.rootPrefixCls, "-item"), g = ge(f, "".concat(f, "-").concat(e.page), (l = {}, j(l, "".concat(f, "-active"), e.active), j(l, "".concat(f, "-disabled"), !e.page), l), c);
      return m("li", {
        onClick: o,
        onKeypress: i,
        title: u ? String(s) : null,
        tabindex: "0",
        class: g,
        style: v
      }, [d({
        page: s,
        type: "page",
        originalElement: m("a", {
          rel: "nofollow"
        }, [s])
      })]);
    };
  }
}), br = {
  ZERO: 48,
  NINE: 57,
  NUMPAD_ZERO: 96,
  NUMPAD_NINE: 105,
  BACKSPACE: 8,
  DELETE: 46,
  ENTER: 13,
  ARROW_UP: 38,
  ARROW_DOWN: 40
}, sF = pe({
  props: {
    disabled: {
      type: Boolean,
      default: void 0
    },
    changeSize: Function,
    quickGo: Function,
    selectComponentClass: Q.any,
    current: Number,
    pageSizeOptions: Q.array.def(["10", "20", "50", "100"]),
    pageSize: Number,
    buildOptionText: Function,
    locale: Q.object,
    rootPrefixCls: String,
    selectPrefixCls: String,
    goButton: Q.any
  },
  setup: function(e) {
    var n = G(""), r = F(function() {
      return !n.value || isNaN(n.value) ? void 0 : Number(n.value);
    }), a = function(d) {
      return "".concat(d.value, " ").concat(e.locale.items_per_page);
    }, o = function(d) {
      var c = d.target, v = c.value, f = c.composing;
      d.isComposing || f || n.value === v || (n.value = v);
    }, i = function(d) {
      var c = e.goButton, v = e.quickGo, f = e.rootPrefixCls;
      if (!(c || n.value === ""))
        if (d.relatedTarget && (d.relatedTarget.className.indexOf("".concat(f, "-item-link")) >= 0 || d.relatedTarget.className.indexOf("".concat(f, "-item")) >= 0)) {
          n.value = "";
          return;
        } else
          v(r.value), n.value = "";
    }, l = function(d) {
      n.value !== "" && (d.keyCode === br.ENTER || d.type === "click") && (e.quickGo(r.value), n.value = "");
    }, u = F(function() {
      var s = e.pageSize, d = e.pageSizeOptions;
      return d.some(function(c) {
        return c.toString() === s.toString();
      }) ? d : d.concat([s.toString()]).sort(function(c, v) {
        var f = isNaN(Number(c)) ? 0 : Number(c), g = isNaN(Number(v)) ? 0 : Number(v);
        return f - g;
      });
    });
    return function() {
      var s = e.rootPrefixCls, d = e.locale, c = e.changeSize, v = e.quickGo, f = e.goButton, g = e.selectComponentClass, p = e.selectPrefixCls, y = e.pageSize, h = e.disabled, w = "".concat(s, "-options"), C = null, x = null, S = null;
      if (!c && !v)
        return null;
      if (c && g) {
        var b = e.buildOptionText || a, P = u.value.map(function(T, O) {
          return m(g.Option, {
            key: O,
            value: T
          }, {
            default: function() {
              return [b({
                value: T
              })];
            }
          });
        });
        C = m(g, {
          disabled: h,
          prefixCls: p,
          showSearch: !1,
          class: "".concat(w, "-size-changer"),
          optionLabelProp: "children",
          value: (y || u.value[0]).toString(),
          onChange: function(O) {
            return c(Number(O));
          },
          getPopupContainer: function(O) {
            return O.parentNode;
          }
        }, {
          default: function() {
            return [P];
          }
        });
      }
      return v && (f && (S = typeof f == "boolean" ? m("button", {
        type: "button",
        onClick: l,
        onKeyup: l,
        disabled: h,
        class: "".concat(w, "-quick-jumper-button")
      }, [d.jump_to_confirm]) : m("span", {
        onClick: l,
        onKeyup: l
      }, [f])), x = m("div", {
        class: "".concat(w, "-quick-jumper")
      }, [d.jump_to, gn(m("input", {
        disabled: h,
        type: "text",
        value: n.value,
        onInput: o,
        onChange: o,
        onKeyup: l,
        onBlur: i
      }, null), [[po]]), d.page, S])), m("li", {
        class: "".concat(w)
      }, [C, x]);
    };
  }
}), dF = {
  items_per_page: "\u6761/\u9875",
  jump_to: "\u8DF3\u81F3",
  jump_to_confirm: "\u786E\u5B9A",
  page: "\u9875",
  prev_page: "\u4E0A\u4E00\u9875",
  next_page: "\u4E0B\u4E00\u9875",
  prev_5: "\u5411\u524D 5 \u9875",
  next_5: "\u5411\u540E 5 \u9875",
  prev_3: "\u5411\u524D 3 \u9875",
  next_3: "\u5411\u540E 3 \u9875"
};
var fF = globalThis && globalThis.__rest || function(t, e) {
  var n = {};
  for (var r in t)
    Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(t); a < r.length; a++)
      e.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[a]) && (n[r[a]] = t[r[a]]);
  return n;
};
function vF(t) {
  return typeof t == "number" && isFinite(t) && Math.floor(t) === t;
}
function pF(t) {
  var e = t.originalElement;
  return e;
}
function $n(t, e, n) {
  var r = typeof t > "u" ? e.statePageSize : t;
  return Math.floor((n.total - 1) / r) + 1;
}
const hF = pe({
  name: "Pagination",
  mixins: [Em],
  inheritAttrs: !1,
  props: {
    disabled: {
      type: Boolean,
      default: void 0
    },
    prefixCls: Q.string.def("rc-pagination"),
    selectPrefixCls: Q.string.def("rc-select"),
    current: Number,
    defaultCurrent: Q.number.def(1),
    total: Q.number.def(0),
    pageSize: Number,
    defaultPageSize: Q.number.def(10),
    hideOnSinglePage: {
      type: Boolean,
      default: !1
    },
    showSizeChanger: {
      type: Boolean,
      default: void 0
    },
    showLessItems: {
      type: Boolean,
      default: !1
    },
    selectComponentClass: Q.any,
    showPrevNextJumpers: {
      type: Boolean,
      default: !0
    },
    showQuickJumper: Q.oneOfType([Q.looseBool, Q.object]).def(!1),
    showTitle: {
      type: Boolean,
      default: !0
    },
    pageSizeOptions: Q.arrayOf(Q.oneOfType([Q.number, Q.string])),
    buildOptionText: Function,
    showTotal: Function,
    simple: {
      type: Boolean,
      default: void 0
    },
    locale: Q.object.def(dF),
    itemRender: Q.func.def(pF),
    prevIcon: Q.any,
    nextIcon: Q.any,
    jumpPrevIcon: Q.any,
    jumpNextIcon: Q.any,
    totalBoundaryShowSizeChanger: Q.number.def(50)
  },
  data: function() {
    var e = this.$props, n = Yu([this.current, this.defaultCurrent]), r = Yu([this.pageSize, this.defaultPageSize]);
    return n = Math.min(n, $n(r, void 0, e)), {
      stateCurrent: n,
      stateCurrentInputValue: n,
      statePageSize: r
    };
  },
  watch: {
    current: function(e) {
      this.setState({
        stateCurrent: e,
        stateCurrentInputValue: e
      });
    },
    pageSize: function(e) {
      var n = {}, r = this.stateCurrent, a = $n(e, this.$data, this.$props);
      r = r > a ? a : r, Yr(this, "current") || (n.stateCurrent = r, n.stateCurrentInputValue = r), n.statePageSize = e, this.setState(n);
    },
    stateCurrent: function(e, n) {
      var r = this;
      this.$nextTick(function() {
        if (r.$refs.paginationNode) {
          var a = r.$refs.paginationNode.querySelector(".".concat(r.prefixCls, "-item-").concat(n));
          a && document.activeElement === a && a.blur();
        }
      });
    },
    total: function() {
      var e = {}, n = $n(this.pageSize, this.$data, this.$props);
      if (Yr(this, "current")) {
        var r = Math.min(this.current, n);
        e.stateCurrent = r, e.stateCurrentInputValue = r;
      } else {
        var a = this.stateCurrent;
        a === 0 && n > 0 ? a = 1 : a = Math.min(this.stateCurrent, n), e.stateCurrent = a;
      }
      this.setState(e);
    }
  },
  methods: {
    getJumpPrevPage: function() {
      return Math.max(1, this.stateCurrent - (this.showLessItems ? 3 : 5));
    },
    getJumpNextPage: function() {
      return Math.min($n(void 0, this.$data, this.$props), this.stateCurrent + (this.showLessItems ? 3 : 5));
    },
    getItemIcon: function(e, n) {
      var r = this.$props.prefixCls, a = lg(this, e, this.$props) || m("button", {
        type: "button",
        "aria-label": n,
        class: "".concat(r, "-item-link")
      }, null);
      return a;
    },
    getValidValue: function(e) {
      var n = e.target.value, r = $n(void 0, this.$data, this.$props), a = this.$data.stateCurrentInputValue, o;
      return n === "" ? o = n : isNaN(Number(n)) ? o = a : n >= r ? o = r : o = Number(n), o;
    },
    isValid: function(e) {
      return vF(e) && e !== this.stateCurrent;
    },
    shouldDisplayQuickJumper: function() {
      var e = this.$props, n = e.showQuickJumper, r = e.pageSize, a = e.total;
      return a <= r ? !1 : n;
    },
    handleKeyDown: function(e) {
      (e.keyCode === br.ARROW_UP || e.keyCode === br.ARROW_DOWN) && e.preventDefault();
    },
    handleKeyUp: function(e) {
      if (!(e.isComposing || e.target.composing)) {
        var n = this.getValidValue(e), r = this.stateCurrentInputValue;
        n !== r && this.setState({
          stateCurrentInputValue: n
        }), e.keyCode === br.ENTER ? this.handleChange(n) : e.keyCode === br.ARROW_UP ? this.handleChange(n - 1) : e.keyCode === br.ARROW_DOWN && this.handleChange(n + 1);
      }
    },
    changePageSize: function(e) {
      var n = this.stateCurrent, r = n, a = $n(e, this.$data, this.$props);
      n = n > a ? a : n, a === 0 && (n = this.stateCurrent), typeof e == "number" && (Yr(this, "pageSize") || this.setState({
        statePageSize: e
      }), Yr(this, "current") || this.setState({
        stateCurrent: n,
        stateCurrentInputValue: n
      })), this.__emit("update:pageSize", e), n !== r && this.__emit("update:current", n), this.__emit("showSizeChange", n, e), this.__emit("change", n, e);
    },
    handleChange: function(e) {
      var n = this.$props.disabled, r = e;
      if (this.isValid(r) && !n) {
        var a = $n(void 0, this.$data, this.$props);
        return r > a ? r = a : r < 1 && (r = 1), Yr(this, "current") || this.setState({
          stateCurrent: r,
          stateCurrentInputValue: r
        }), this.__emit("update:current", r), this.__emit("change", r, this.statePageSize), r;
      }
      return this.stateCurrent;
    },
    prev: function() {
      this.hasPrev() && this.handleChange(this.stateCurrent - 1);
    },
    next: function() {
      this.hasNext() && this.handleChange(this.stateCurrent + 1);
    },
    jumpPrev: function() {
      this.handleChange(this.getJumpPrevPage());
    },
    jumpNext: function() {
      this.handleChange(this.getJumpNextPage());
    },
    hasPrev: function() {
      return this.stateCurrent > 1;
    },
    hasNext: function() {
      return this.stateCurrent < $n(void 0, this.$data, this.$props);
    },
    getShowSizeChanger: function() {
      var e = this.$props, n = e.showSizeChanger, r = e.total, a = e.totalBoundaryShowSizeChanger;
      return typeof n < "u" ? n : r > a;
    },
    runIfEnter: function(e, n) {
      if (e.key === "Enter" || e.charCode === 13) {
        for (var r = arguments.length, a = new Array(r > 2 ? r - 2 : 0), o = 2; o < r; o++)
          a[o - 2] = arguments[o];
        n.apply(void 0, a);
      }
    },
    runIfEnterPrev: function(e) {
      this.runIfEnter(e, this.prev);
    },
    runIfEnterNext: function(e) {
      this.runIfEnter(e, this.next);
    },
    runIfEnterJumpPrev: function(e) {
      this.runIfEnter(e, this.jumpPrev);
    },
    runIfEnterJumpNext: function(e) {
      this.runIfEnter(e, this.jumpNext);
    },
    handleGoTO: function(e) {
      (e.keyCode === br.ENTER || e.type === "click") && this.handleChange(this.stateCurrentInputValue);
    },
    renderPrev: function(e) {
      var n = this.$props.itemRender, r = n({
        page: e,
        type: "prev",
        originalElement: this.getItemIcon("prevIcon", "prev page")
      }), a = !this.hasPrev();
      return At(r) ? Ct(r, a ? {
        disabled: a
      } : {}) : r;
    },
    renderNext: function(e) {
      var n = this.$props.itemRender, r = n({
        page: e,
        type: "next",
        originalElement: this.getItemIcon("nextIcon", "next page")
      }), a = !this.hasNext();
      return At(r) ? Ct(r, a ? {
        disabled: a
      } : {}) : r;
    }
  },
  render: function() {
    var e, n = this.$props, r = n.prefixCls, a = n.disabled, o = n.hideOnSinglePage, i = n.total, l = n.locale, u = n.showQuickJumper, s = n.showLessItems, d = n.showTitle, c = n.showTotal, v = n.simple, f = n.itemRender, g = n.showPrevNextJumpers, p = n.jumpPrevIcon, y = n.jumpNextIcon, h = n.selectComponentClass, w = n.selectPrefixCls, C = n.pageSizeOptions, x = this.stateCurrent, S = this.statePageSize, b = _c(this.$attrs).extraAttrs, P = b.class, T = fF(b, ["class"]);
    if (o === !0 && this.total <= S)
      return null;
    var O = $n(void 0, this.$data, this.$props), D = [], V = null, K = null, R = null, E = null, M = null, N = u && u.goButton, _ = s ? 1 : 2, I = x - 1 > 0 ? x - 1 : 0, A = x + 1 < O ? x + 1 : O, B = this.hasPrev(), W = this.hasNext();
    if (v)
      return N && (typeof N == "boolean" ? M = m("button", {
        type: "button",
        onClick: this.handleGoTO,
        onKeyup: this.handleGoTO
      }, [l.jump_to_confirm]) : M = m("span", {
        onClick: this.handleGoTO,
        onKeyup: this.handleGoTO
      }, [N]), M = m("li", {
        title: d ? "".concat(l.jump_to).concat(x, "/").concat(O) : null,
        class: "".concat(r, "-simple-pager")
      }, [M])), m("ul", Y({
        class: ge("".concat(r, " ").concat(r, "-simple"), j({}, "".concat(r, "-disabled"), a), P)
      }, T), [m("li", {
        title: d ? l.prev_page : null,
        onClick: this.prev,
        tabindex: B ? 0 : null,
        onKeypress: this.runIfEnterPrev,
        class: ge("".concat(r, "-prev"), j({}, "".concat(r, "-disabled"), !B)),
        "aria-disabled": !B
      }, [this.renderPrev(I)]), m("li", {
        title: d ? "".concat(x, "/").concat(O) : null,
        class: "".concat(r, "-simple-pager")
      }, [gn(m("input", {
        type: "text",
        value: this.stateCurrentInputValue,
        disabled: a,
        onKeydown: this.handleKeyDown,
        onKeyup: this.handleKeyUp,
        onInput: this.handleKeyUp,
        onChange: this.handleKeyUp,
        size: "3"
      }, null), [[po]]), m("span", {
        class: "".concat(r, "-slash")
      }, [or("\uFF0F")]), O]), m("li", {
        title: d ? l.next_page : null,
        onClick: this.next,
        tabindex: W ? 0 : null,
        onKeypress: this.runIfEnterNext,
        class: ge("".concat(r, "-next"), j({}, "".concat(r, "-disabled"), !W)),
        "aria-disabled": !W
      }, [this.renderNext(A)]), M]);
    if (O <= 3 + _ * 2) {
      var U = {
        locale: l,
        rootPrefixCls: r,
        showTitle: d,
        itemRender: f,
        onClick: this.handleChange,
        onKeypress: this.runIfEnter
      };
      O || D.push(m(mr, Y(Y({}, U), {}, {
        key: "noPager",
        page: 1,
        class: "".concat(r, "-item-disabled")
      }), null));
      for (var z = 1; z <= O; z += 1) {
        var L = x === z;
        D.push(m(mr, Y(Y({}, U), {}, {
          key: z,
          page: z,
          active: L
        }), null));
      }
    } else {
      var $ = s ? l.prev_3 : l.prev_5, q = s ? l.next_3 : l.next_5;
      g && (V = m("li", {
        title: this.showTitle ? $ : null,
        key: "prev",
        onClick: this.jumpPrev,
        tabindex: "0",
        onKeypress: this.runIfEnterJumpPrev,
        class: ge("".concat(r, "-jump-prev"), j({}, "".concat(r, "-jump-prev-custom-icon"), !!p))
      }, [f({
        page: this.getJumpPrevPage(),
        type: "jump-prev",
        originalElement: this.getItemIcon("jumpPrevIcon", "prev page")
      })]), K = m("li", {
        title: this.showTitle ? q : null,
        key: "next",
        tabindex: "0",
        onClick: this.jumpNext,
        onKeypress: this.runIfEnterJumpNext,
        class: ge("".concat(r, "-jump-next"), j({}, "".concat(r, "-jump-next-custom-icon"), !!y))
      }, [f({
        page: this.getJumpNextPage(),
        type: "jump-next",
        originalElement: this.getItemIcon("jumpNextIcon", "next page")
      })])), E = m(mr, {
        locale: l,
        last: !0,
        rootPrefixCls: r,
        onClick: this.handleChange,
        onKeypress: this.runIfEnter,
        key: O,
        page: O,
        active: !1,
        showTitle: d,
        itemRender: f
      }, null), R = m(mr, {
        locale: l,
        rootPrefixCls: r,
        onClick: this.handleChange,
        onKeypress: this.runIfEnter,
        key: 1,
        page: 1,
        active: !1,
        showTitle: d,
        itemRender: f
      }, null);
      var H = Math.max(1, x - _), J = Math.min(x + _, O);
      x - 1 <= _ && (J = 1 + _ * 2), O - x <= _ && (H = O - _ * 2);
      for (var Z = H; Z <= J; Z += 1) {
        var ae = x === Z;
        D.push(m(mr, {
          locale: l,
          rootPrefixCls: r,
          onClick: this.handleChange,
          onKeypress: this.runIfEnter,
          key: Z,
          page: Z,
          active: ae,
          showTitle: d,
          itemRender: f
        }, null));
      }
      x - 1 >= _ * 2 && x !== 1 + 2 && (D[0] = m(mr, {
        locale: l,
        rootPrefixCls: r,
        onClick: this.handleChange,
        onKeypress: this.runIfEnter,
        key: H,
        page: H,
        class: "".concat(r, "-item-after-jump-prev"),
        active: !1,
        showTitle: this.showTitle,
        itemRender: f
      }, null), D.unshift(V)), O - x >= _ * 2 && x !== O - 2 && (D[D.length - 1] = m(mr, {
        locale: l,
        rootPrefixCls: r,
        onClick: this.handleChange,
        onKeypress: this.runIfEnter,
        key: J,
        page: J,
        class: "".concat(r, "-item-before-jump-next"),
        active: !1,
        showTitle: this.showTitle,
        itemRender: f
      }, null), D.push(K)), H !== 1 && D.unshift(R), J !== O && D.push(E);
    }
    var ue = null;
    c && (ue = m("li", {
      class: "".concat(r, "-total-text")
    }, [c(i, [i === 0 ? 0 : (x - 1) * S + 1, x * S > i ? i : x * S])]));
    var ne = !B || !O, X = !W || !O, te = this.buildOptionText || this.$slots.buildOptionText;
    return m("ul", Y(Y({
      unselectable: "on",
      ref: "paginationNode"
    }, T), {}, {
      class: ge((e = {}, j(e, "".concat(r), !0), j(e, "".concat(r, "-disabled"), a), e), P)
    }), [ue, m("li", {
      title: d ? l.prev_page : null,
      onClick: this.prev,
      tabindex: ne ? null : 0,
      onKeypress: this.runIfEnterPrev,
      class: ge("".concat(r, "-prev"), j({}, "".concat(r, "-disabled"), ne)),
      "aria-disabled": ne
    }, [this.renderPrev(I)]), D, m("li", {
      title: d ? l.next_page : null,
      onClick: this.next,
      tabindex: X ? null : 0,
      onKeypress: this.runIfEnterNext,
      class: ge("".concat(r, "-next"), j({}, "".concat(r, "-disabled"), X)),
      "aria-disabled": X
    }, [this.renderNext(A)]), m(sF, {
      disabled: a,
      locale: l,
      rootPrefixCls: r,
      selectComponentClass: h,
      selectPrefixCls: w,
      changeSize: this.getShowSizeChanger() ? this.changePageSize : null,
      current: x,
      pageSize: S,
      pageSizeOptions: C,
      buildOptionText: te || null,
      quickGo: this.shouldDisplayQuickJumper() ? this.handleChange : null,
      goButton: N
    }, null)]);
  }
});
var gF = globalThis && globalThis.__rest || function(t, e) {
  var n = {};
  for (var r in t)
    Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(t); a < r.length; a++)
      e.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[a]) && (n[r[a]] = t[r[a]]);
  return n;
}, mF = function() {
  return {
    total: Number,
    defaultCurrent: Number,
    disabled: {
      type: Boolean,
      default: void 0
    },
    current: Number,
    defaultPageSize: Number,
    pageSize: Number,
    hideOnSinglePage: {
      type: Boolean,
      default: void 0
    },
    showSizeChanger: {
      type: Boolean,
      default: void 0
    },
    pageSizeOptions: Array,
    buildOptionText: Function,
    showQuickJumper: {
      type: [Boolean, Object],
      default: void 0
    },
    showTotal: Function,
    size: String,
    simple: {
      type: Boolean,
      default: void 0
    },
    locale: Object,
    prefixCls: String,
    selectPrefixCls: String,
    totalBoundaryShowSizeChanger: Number,
    selectComponentClass: String,
    itemRender: Function,
    role: String,
    responsive: Boolean,
    showLessItems: {
      type: Boolean,
      default: void 0
    },
    onChange: Function,
    onShowSizeChange: Function,
    "onUpdate:current": Function,
    "onUpdate:pageSize": Function
  };
};
const yF = pe({
  name: "APagination",
  inheritAttrs: !1,
  props: mF(),
  setup: function(e, n) {
    var r = n.slots, a = n.attrs, o = Qe("pagination", e), i = o.prefixCls, l = o.configProvider, u = o.direction, s = F(function() {
      return l.getPrefixCls("select", e.selectPrefixCls);
    }), d = bI(), c = co("Pagination", vg, ze(e, "locale")), v = De(c, 1), f = v[0], g = function(y) {
      var h = m("span", {
        class: "".concat(y, "-item-ellipsis")
      }, [or("\u2022\u2022\u2022")]), w = m("button", {
        class: "".concat(y, "-item-link"),
        type: "button",
        tabindex: -1
      }, [m(Ni, null, null)]), C = m("button", {
        class: "".concat(y, "-item-link"),
        type: "button",
        tabindex: -1
      }, [m(no, null, null)]), x = m("a", {
        rel: "nofollow",
        class: "".concat(y, "-item-link")
      }, [m("div", {
        class: "".concat(y, "-item-container")
      }, [m(aF, {
        class: "".concat(y, "-item-link-icon")
      }, null), h])]), S = m("a", {
        rel: "nofollow",
        class: "".concat(y, "-item-link")
      }, [m("div", {
        class: "".concat(y, "-item-container")
      }, [m(uF, {
        class: "".concat(y, "-item-link-icon")
      }, null), h])]);
      if (u.value === "rtl") {
        var b = [C, w];
        w = b[0], C = b[1];
        var P = [S, x];
        x = P[0], S = P[1];
      }
      return {
        prevIcon: w,
        nextIcon: C,
        jumpPrevIcon: x,
        jumpNextIcon: S
      };
    };
    return function() {
      var p, y = e.size, h = e.itemRender, w = h === void 0 ? r.itemRender : h, C = e.buildOptionText, x = C === void 0 ? r.buildOptionText : C, S = e.selectComponentClass, b = e.responsive, P = gF(e, ["size", "itemRender", "buildOptionText", "selectComponentClass", "responsive"]), T = y === "small" || !!(((p = d.value) === null || p === void 0 ? void 0 : p.xs) && !y && b), O = k(k(k(k(k({}, P), g(i.value)), {
        prefixCls: i.value,
        selectPrefixCls: s.value,
        selectComponentClass: S || (T ? cF : Pi),
        locale: f.value,
        buildOptionText: x
      }), a), {
        class: ge(j({
          mini: T
        }, "".concat(i.value, "-rtl"), u.value === "rtl"), a.class),
        itemRender: w
      });
      return m(hF, O, null);
    };
  }
}), bF = Nr(yF);
var CF = globalThis && globalThis.__rest || function(t, e) {
  var n = {};
  for (var r in t)
    Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(t); a < r.length; a++)
      e.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[a]) && (n[r[a]] = t[r[a]]);
  return n;
}, wF = {
  border: 0,
  background: "transparent",
  padding: 0,
  lineHeight: "inherit",
  display: "inline-block"
}, SF = pe({
  name: "TransButton",
  inheritAttrs: !1,
  props: {
    noStyle: {
      type: Boolean,
      default: void 0
    },
    onClick: Function,
    disabled: {
      type: Boolean,
      default: void 0
    },
    autofocus: {
      type: Boolean,
      default: void 0
    }
  },
  setup: function(e, n) {
    var r = n.slots, a = n.emit, o = n.attrs, i = n.expose, l = G(), u = function(g) {
      var p = g.keyCode;
      p === xe.ENTER && g.preventDefault();
    }, s = function(g) {
      var p = g.keyCode;
      p === xe.ENTER && a("click", g);
    }, d = function(g) {
      a("click", g);
    }, c = function() {
      l.value && l.value.focus();
    }, v = function() {
      l.value && l.value.blur();
    };
    return dt(function() {
      e.autofocus && c();
    }), i({
      focus: c,
      blur: v
    }), function() {
      var f, g = e.noStyle, p = e.disabled, y = CF(e, ["noStyle", "disabled"]), h = {};
      return g || (h = k({}, wF)), p && (h.pointerEvents = "none"), m("div", Y(Y(Y({
        role: "button",
        tabindex: 0,
        ref: l
      }, y), o), {}, {
        onClick: d,
        onKeydown: u,
        onKeyup: s,
        style: k(k({}, h), o.style || {})
      }), [(f = r.default) === null || f === void 0 ? void 0 : f.call(r)]);
    };
  }
});
const xF = SF;
var Ub = Ht("normal", "exception", "active", "success"), PF = Ht("line", "circle", "dashboard"), OF = Ht("default", "small"), fl = function() {
  return {
    prefixCls: String,
    type: Q.oneOf(PF),
    percent: Number,
    format: {
      type: Function
    },
    status: Q.oneOf(Ub),
    showInfo: {
      type: Boolean,
      default: void 0
    },
    strokeWidth: Number,
    strokeLinecap: String,
    strokeColor: {
      type: [String, Object],
      default: void 0
    },
    trailColor: String,
    width: Number,
    success: {
      type: Object,
      default: function() {
        return {};
      }
    },
    gapDegree: Number,
    gapPosition: String,
    size: Q.oneOf(OF),
    steps: Number,
    successPercent: Number,
    title: String
  };
};
function Pr(t) {
  return !t || t < 0 ? 0 : t > 100 ? 100 : t;
}
function Di(t) {
  var e = t.success, n = t.successPercent, r = n;
  return e && "progress" in e && (mt(!1, "Progress", "`success.progress` is deprecated. Please use `success.percent` instead."), r = e.progress), e && "percent" in e && (r = e.percent), r;
}
var TF = globalThis && globalThis.__rest || function(t, e) {
  var n = {};
  for (var r in t)
    Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(t); a < r.length; a++)
      e.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[a]) && (n[r[a]] = t[r[a]]);
  return n;
}, IF = function() {
  return k(k({}, fl()), {
    prefixCls: String,
    direction: {
      type: String
    }
  });
}, kF = function(e) {
  var n = [];
  return Object.keys(e).forEach(function(r) {
    var a = parseFloat(r.replace(/%/g, ""));
    isNaN(a) || n.push({
      key: a,
      value: e[r]
    });
  }), n = n.sort(function(r, a) {
    return r.key - a.key;
  }), n.map(function(r) {
    var a = r.key, o = r.value;
    return "".concat(o, " ").concat(a, "%");
  }).join(", ");
}, _F = function(e, n) {
  var r = e.from, a = r === void 0 ? ea.blue : r, o = e.to, i = o === void 0 ? ea.blue : o, l = e.direction, u = l === void 0 ? n === "rtl" ? "to left" : "to right" : l, s = TF(e, ["from", "to", "direction"]);
  if (Object.keys(s).length !== 0) {
    var d = kF(s);
    return {
      backgroundImage: "linear-gradient(".concat(u, ", ").concat(d, ")")
    };
  }
  return {
    backgroundImage: "linear-gradient(".concat(u, ", ").concat(a, ", ").concat(i, ")")
  };
};
const EF = pe({
  name: "Line",
  props: IF(),
  setup: function(e, n) {
    var r = n.slots, a = F(function() {
      var s = e.strokeColor, d = e.direction;
      return s && typeof s != "string" ? _F(s, d) : {
        background: s
      };
    }), o = F(function() {
      return e.trailColor ? {
        backgroundColor: e.trailColor
      } : void 0;
    }), i = F(function() {
      var s = e.percent, d = e.strokeWidth, c = e.strokeLinecap, v = e.size;
      return k({
        width: "".concat(Pr(s), "%"),
        height: "".concat(d || (v === "small" ? 6 : 8), "px"),
        borderRadius: c === "square" ? 0 : ""
      }, a.value);
    }), l = F(function() {
      return Di(e);
    }), u = F(function() {
      var s = e.strokeWidth, d = e.size, c = e.strokeLinecap, v = e.success;
      return {
        width: "".concat(Pr(l.value), "%"),
        height: "".concat(s || (d === "small" ? 6 : 8), "px"),
        borderRadius: c === "square" ? 0 : "",
        backgroundColor: v == null ? void 0 : v.strokeColor
      };
    });
    return function() {
      var s;
      return m(ft, null, [m("div", {
        class: "".concat(e.prefixCls, "-outer")
      }, [m("div", {
        class: "".concat(e.prefixCls, "-inner"),
        style: o.value
      }, [m("div", {
        class: "".concat(e.prefixCls, "-bg"),
        style: i.value
      }, null), l.value !== void 0 ? m("div", {
        class: "".concat(e.prefixCls, "-success-bg"),
        style: u.value
      }, null) : null])]), (s = r.default) === null || s === void 0 ? void 0 : s.call(r)]);
    };
  }
});
var NF = {
  percent: 0,
  prefixCls: "vc-progress",
  strokeColor: "#2db7f5",
  strokeLinecap: "round",
  strokeWidth: 1,
  trailColor: "#D9D9D9",
  trailWidth: 1
}, MF = function(e) {
  var n = G(null);
  return kr(function() {
    var r = Date.now(), a = !1;
    e.value.forEach(function(o) {
      var i, l = ((i = o) === null || i === void 0 ? void 0 : i.$el) || o;
      if (!!l) {
        a = !0;
        var u = l.style;
        u.transitionDuration = ".3s, .3s, .3s, .06s", n.value && r - n.value < 100 && (u.transitionDuration = "0s, 0s");
      }
    }), a && (n.value = Date.now());
  }), e;
}, AF = {
  gapDegree: Number,
  gapPosition: {
    type: String
  },
  percent: {
    type: [Array, Number]
  },
  prefixCls: String,
  strokeColor: {
    type: [Object, String, Array]
  },
  strokeLinecap: {
    type: String
  },
  strokeWidth: Number,
  trailColor: String,
  trailWidth: Number,
  transition: String
}, DF = globalThis && globalThis.__rest || function(t, e) {
  var n = {};
  for (var r in t)
    Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(t); a < r.length; a++)
      e.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[a]) && (n[r[a]] = t[r[a]]);
  return n;
}, vh = 0;
function ph(t) {
  return +t.replace("%", "");
}
function hh(t) {
  return Array.isArray(t) ? t : [t];
}
function gh(t, e, n, r) {
  var a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0, o = arguments.length > 5 ? arguments[5] : void 0, i = 50 - r / 2, l = 0, u = -i, s = 0, d = -2 * i;
  switch (o) {
    case "left":
      l = -i, u = 0, s = 2 * i, d = 0;
      break;
    case "right":
      l = i, u = 0, s = -2 * i, d = 0;
      break;
    case "bottom":
      u = i, d = 2 * i;
      break;
  }
  var c = "M 50,50 m ".concat(l, ",").concat(u, `
   a `).concat(i, ",").concat(i, " 0 1 1 ").concat(s, ",").concat(-d, `
   a `).concat(i, ",").concat(i, " 0 1 1 ").concat(-s, ",").concat(d), v = Math.PI * 2 * i, f = {
    stroke: n,
    strokeDasharray: "".concat(e / 100 * (v - a), "px ").concat(v, "px"),
    strokeDashoffset: "-".concat(a / 2 + t / 100 * (v - a), "px"),
    transition: "stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s, stroke-width .06s ease .3s, opacity .3s ease 0s"
  };
  return {
    pathString: c,
    pathStyle: f
  };
}
const FF = pe({
  name: "VCCircle",
  props: kt(AF, NF),
  setup: function(e) {
    vh += 1;
    var n = G(vh), r = F(function() {
      return hh(e.percent);
    }), a = F(function() {
      return hh(e.strokeColor);
    }), o = j2(), i = De(o, 2), l = i[0], u = i[1];
    MF(u);
    var s = function() {
      var c = e.prefixCls, v = e.strokeWidth, f = e.strokeLinecap, g = e.gapDegree, p = e.gapPosition, y = 0;
      return r.value.map(function(h, w) {
        var C = a.value[w] || a.value[a.value.length - 1], x = Object.prototype.toString.call(C) === "[object Object]" ? "url(#".concat(c, "-gradient-").concat(n.value, ")") : "", S = gh(y, h, C, v, g, p), b = S.pathString, P = S.pathStyle;
        y += h;
        var T = {
          key: w,
          d: b,
          stroke: x,
          "stroke-linecap": f,
          "stroke-width": v,
          opacity: h === 0 ? 0 : 1,
          "fill-opacity": "0",
          class: "".concat(c, "-circle-path"),
          style: P
        };
        return m("path", Y({
          ref: l(w)
        }, T), null);
      });
    };
    return function() {
      var d = e.prefixCls, c = e.strokeWidth, v = e.trailWidth, f = e.gapDegree, g = e.gapPosition, p = e.trailColor, y = e.strokeLinecap;
      e.strokeColor;
      var h = DF(e, ["prefixCls", "strokeWidth", "trailWidth", "gapDegree", "gapPosition", "trailColor", "strokeLinecap", "strokeColor"]), w = gh(0, 100, p, c, f, g), C = w.pathString, x = w.pathStyle;
      delete h.percent;
      var S = a.value.find(function(P) {
        return Object.prototype.toString.call(P) === "[object Object]";
      }), b = {
        d: C,
        stroke: p,
        "stroke-linecap": y,
        "stroke-width": v || c,
        "fill-opacity": "0",
        class: "".concat(d, "-circle-trail"),
        style: x
      };
      return m("svg", Y({
        class: "".concat(d, "-circle"),
        viewBox: "0 0 100 100"
      }, h), [S && m("defs", null, [m("linearGradient", {
        id: "".concat(d, "-gradient-").concat(n.value),
        x1: "100%",
        y1: "0%",
        x2: "0%",
        y2: "0%"
      }, [Object.keys(S).sort(function(P, T) {
        return ph(P) - ph(T);
      }).map(function(P, T) {
        return m("stop", {
          key: T,
          offset: P,
          "stop-color": S[P]
        }, null);
      })])]), m("path", b, null), s().reverse()]);
    };
  }
});
function RF(t) {
  var e = t.percent, n = t.success, r = t.successPercent, a = Pr(Di({
    success: n,
    successPercent: r
  }));
  return [a, Pr(Pr(e) - a)];
}
function $F(t) {
  var e = t.success, n = e === void 0 ? {} : e, r = t.strokeColor, a = n.strokeColor;
  return [a || ea.green, r || null];
}
const LF = pe({
  name: "Circle",
  inheritAttrs: !1,
  props: fl(),
  setup: function(e, n) {
    var r = n.slots, a = F(function() {
      if (e.gapDegree || e.gapDegree === 0)
        return e.gapDegree;
      if (e.type === "dashboard")
        return 75;
    }), o = F(function() {
      var v = e.width || 120;
      return {
        width: typeof v == "number" ? "".concat(v, "px") : v,
        height: typeof v == "number" ? "".concat(v, "px") : v,
        fontSize: "".concat(v * 0.15 + 6, "px")
      };
    }), i = F(function() {
      return e.strokeWidth || 6;
    }), l = F(function() {
      return e.gapPosition || e.type === "dashboard" && "bottom" || "top";
    }), u = F(function() {
      return RF(e);
    }), s = F(function() {
      return Object.prototype.toString.call(e.strokeColor) === "[object Object]";
    }), d = F(function() {
      return $F({
        success: e.success,
        strokeColor: e.strokeColor
      });
    }), c = F(function() {
      var v;
      return v = {}, j(v, "".concat(e.prefixCls, "-inner"), !0), j(v, "".concat(e.prefixCls, "-circle-gradient"), s.value), v;
    });
    return function() {
      var v;
      return m("div", {
        class: c.value,
        style: o.value
      }, [m(FF, {
        percent: u.value,
        strokeWidth: i.value,
        trailWidth: i.value,
        strokeColor: d.value,
        strokeLinecap: e.strokeLinecap,
        trailColor: e.trailColor,
        prefixCls: e.prefixCls,
        gapDegree: a.value,
        gapPosition: l.value
      }, null), (v = r.default) === null || v === void 0 ? void 0 : v.call(r)]);
    };
  }
});
var jF = function() {
  return k(k({}, fl()), {
    steps: Number,
    size: {
      type: String
    },
    strokeColor: String,
    trailColor: String
  });
};
const VF = pe({
  name: "Steps",
  props: jF(),
  setup: function(e, n) {
    var r = n.slots, a = F(function() {
      return Math.round(e.steps * ((e.percent || 0) / 100));
    }), o = F(function() {
      return e.size === "small" ? 2 : 14;
    }), i = F(function() {
      for (var l = e.steps, u = e.strokeWidth, s = u === void 0 ? 8 : u, d = e.strokeColor, c = e.trailColor, v = e.prefixCls, f = [], g = 0; g < l; g += 1) {
        var p, y = (p = {}, j(p, "".concat(v, "-steps-item"), !0), j(p, "".concat(v, "-steps-item-active"), g <= a.value - 1), p);
        f.push(m("div", {
          key: g,
          class: y,
          style: {
            backgroundColor: g <= a.value - 1 ? d : c,
            width: "".concat(o.value, "px"),
            height: "".concat(s, "px")
          }
        }, null));
      }
      return f;
    });
    return function() {
      var l;
      return m("div", {
        class: "".concat(e.prefixCls, "-steps-outer")
      }, [i.value, (l = r.default) === null || l === void 0 ? void 0 : l.call(r)]);
    };
  }
}), BF = pe({
  name: "AProgress",
  props: kt(fl(), {
    type: "line",
    percent: 0,
    showInfo: !0,
    trailColor: null,
    size: "default",
    strokeLinecap: "round"
  }),
  slots: ["format"],
  setup: function(e, n) {
    var r = n.slots, a = Qe("progress", e), o = a.prefixCls, i = a.direction;
    mt(e.successPercent == null, "Progress", "`successPercent` is deprecated. Please use `success.percent` instead.");
    var l = F(function() {
      var c, v = e.type, f = e.showInfo, g = e.size, p = o.value;
      return c = {}, j(c, p, !0), j(c, "".concat(p, "-").concat(v === "dashboard" && "circle" || v), !0), j(c, "".concat(p, "-show-info"), f), j(c, "".concat(p, "-").concat(g), g), j(c, "".concat(p, "-rtl"), i.value === "rtl"), c;
    }), u = F(function() {
      var c = e.percent, v = c === void 0 ? 0 : c, f = Di(e);
      return parseInt(f !== void 0 ? f.toString() : v.toString(), 10);
    }), s = F(function() {
      var c = e.status;
      return Ub.indexOf(c) < 0 && u.value >= 100 ? "success" : c || "normal";
    }), d = function() {
      var v = e.showInfo, f = e.format, g = e.type, p = e.percent, y = e.title, h = Di(e);
      if (!v)
        return null;
      var w, C = f || (r == null ? void 0 : r.format) || function(S) {
        return "".concat(S, "%");
      }, x = g === "line";
      return f || (r == null ? void 0 : r.format) || s.value !== "exception" && s.value !== "success" ? w = C(Pr(p), Pr(h)) : s.value === "exception" ? w = x ? m(Ar, null, null) : m(Bi, null, null) : s.value === "success" && (w = x ? m(jc, null, null) : m(qm, null, null)), m("span", {
        class: "".concat(o.value, "-text"),
        title: y === void 0 && typeof w == "string" ? w : void 0
      }, [w]);
    };
    return function() {
      var c = e.type, v = e.steps, f = e.strokeColor, g = e.title, p = d(), y;
      c === "line" ? y = v ? m(VF, Y(Y({}, e), {}, {
        strokeColor: typeof f == "string" ? f : void 0,
        prefixCls: o.value,
        steps: v
      }), {
        default: function() {
          return [p];
        }
      }) : m(EF, Y(Y({}, e), {}, {
        prefixCls: o.value
      }), {
        default: function() {
          return [p];
        }
      }) : (c === "circle" || c === "dashboard") && (y = m(LF, Y(Y({}, e), {}, {
        prefixCls: o.value
      }), {
        default: function() {
          return [p];
        }
      }));
      var h = k(k({}, l.value), j({}, "".concat(o.value, "-status-").concat(s.value), !0));
      return m("div", {
        class: h,
        title: g
      }, [y]);
    };
  }
}), KF = Nr(BF);
var mh = globalThis && globalThis.__rest || function(t, e) {
  var n = {};
  for (var r in t)
    Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(t); a < r.length; a++)
      e.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[a]) && (n[r[a]] = t[r[a]]);
  return n;
};
const HF = pe({
  name: "MotionTreeNode",
  inheritAttrs: !1,
  props: k(k({}, ob), {
    active: Boolean,
    motion: Object,
    motionNodes: {
      type: Array
    },
    onMotionStart: Function,
    onMotionEnd: Function,
    motionType: String
  }),
  slots: ["title", "icon", "switcherIcon", "checkable"],
  setup: function(e, n) {
    var r = n.attrs, a = n.slots, o = G(!0), i = Qs(), l = G(!1), u = F(function() {
      return e.motion ? e.motion : Zi();
    }), s = function(c, v) {
      var f, g, p, y;
      v === "appear" ? (g = (f = u.value) === null || f === void 0 ? void 0 : f.onAfterEnter) === null || g === void 0 || g.call(f, c) : v === "leave" && ((y = (p = u.value) === null || p === void 0 ? void 0 : p.onAfterLeave) === null || y === void 0 || y.call(p, c)), l.value || e.onMotionEnd(), l.value = !0;
    };
    return Ce(function() {
      return e.motionNodes;
    }, function() {
      e.motionNodes && e.motionType === "hide" && o.value && vt(function() {
        o.value = !1;
      });
    }, {
      immediate: !0,
      flush: "post"
    }), dt(function() {
      e.motionNodes && e.onMotionStart();
    }), ht(function() {
      e.motionNodes && s();
    }), function() {
      e.motion;
      var d = e.motionNodes, c = e.motionType, v = e.active, f = e.eventKey, g = mh(e, ["motion", "motionNodes", "motionType", "active", "eventKey"]);
      return d ? m(_r, Y(Y({}, u.value), {}, {
        appear: c === "show",
        onAfterAppear: function(y) {
          return s(y, "appear");
        },
        onAfterLeave: function(y) {
          return s(y, "leave");
        }
      }), {
        default: function() {
          return [gn(m("div", {
            class: "".concat(i.value.prefixCls, "-treenode-motion")
          }, [d.map(function(y) {
            var h = mh(y.data, []), w = y.title, C = y.key, x = y.isStart, S = y.isEnd;
            return delete h.children, m(gp, Y(Y({}, h), {}, {
              title: w,
              active: v,
              data: y.data,
              key: C,
              eventKey: C,
              isStart: x,
              isEnd: S
            }), a);
          })]), [[uo, o.value]])];
        }
      }) : m(gp, Y(Y({
        domRef: G,
        class: r.class,
        style: r.style
      }, g), {}, {
        active: v,
        eventKey: f
      }), a);
    };
  }
});
function zF() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], n = t.length, r = e.length;
  if (Math.abs(n - r) !== 1)
    return {
      add: !1,
      key: null
    };
  function a(o, i) {
    var l = /* @__PURE__ */ new Map();
    o.forEach(function(s) {
      l.set(s, !0);
    });
    var u = i.filter(function(s) {
      return !l.has(s);
    });
    return u.length === 1 ? u[0] : null;
  }
  return n < r ? {
    add: !0,
    key: a(t, e)
  } : {
    add: !1,
    key: a(e, t)
  };
}
function yh(t, e, n) {
  var r = t.findIndex(function(l) {
    return l.key === n;
  }), a = t[r + 1], o = e.findIndex(function(l) {
    return l.key === n;
  });
  if (a) {
    var i = e.findIndex(function(l) {
      return l.key === a.key;
    });
    return e.slice(o + 1, i);
  }
  return e.slice(o + 1);
}
var bh = globalThis && globalThis.__rest || function(t, e) {
  var n = {};
  for (var r in t)
    Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(t); a < r.length; a++)
      e.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[a]) && (n[r[a]] = t[r[a]]);
  return n;
}, Ch = {
  width: 0,
  height: 0,
  display: "flex",
  overflow: "hidden",
  opacity: 0,
  border: 0,
  padding: 0,
  margin: 0
}, WF = function() {
}, Ir = "RC_TREE_MOTION_".concat(Math.random()), Cc = {
  key: Ir
}, Yb = {
  key: Ir,
  level: 0,
  index: 0,
  pos: "0",
  node: Cc,
  nodes: [Cc]
}, wh = {
  parent: null,
  children: [],
  pos: Yb.pos,
  data: Cc,
  title: null,
  key: Ir,
  isStart: [],
  isEnd: []
};
function Sh(t, e, n, r) {
  return e === !1 || !n ? t : t.slice(0, Math.ceil(n / r) + 1);
}
function xh(t) {
  var e = t.key, n = t.pos;
  return bo(e, n);
}
function UF(t) {
  for (var e = String(t.key), n = t; n.parent; )
    n = n.parent, e = "".concat(n.key, " > ").concat(e);
  return e;
}
const YF = pe({
  name: "NodeList",
  inheritAttrs: !1,
  props: j_,
  setup: function(e, n) {
    var r = n.expose, a = n.attrs, o = G(), i = G(), l = ab(), u = l.expandedKeys, s = l.flattenNodes;
    r({
      scrollTo: function(w) {
        o.value.scrollTo(w);
      },
      getIndentWidth: function() {
        return i.value.offsetWidth;
      }
    });
    var d = Xe(s.value), c = Xe([]), v = G(null);
    function f() {
      d.value = s.value, c.value = [], v.value = null, e.onListChangeEnd();
    }
    var g = Qs();
    Ce([function() {
      return u.value.slice();
    }, s], function(h, w) {
      var C = De(h, 2), x = C[0], S = C[1], b = De(w, 2), P = b[0], T = b[1], O = zF(P, x);
      if (O.key !== null) {
        var D = e.virtual, V = e.height, K = e.itemHeight;
        if (O.add) {
          var R = T.findIndex(function(A) {
            var B = A.key;
            return B === O.key;
          }), E = Sh(yh(T, S, O.key), D, V, K), M = T.slice();
          M.splice(R + 1, 0, wh), d.value = M, c.value = E, v.value = "show";
        } else {
          var N = S.findIndex(function(A) {
            var B = A.key;
            return B === O.key;
          }), _ = Sh(yh(S, T, O.key), D, V, K), I = S.slice();
          I.splice(N + 1, 0, wh), d.value = I, c.value = _, v.value = "hide";
        }
      } else
        T !== S && (d.value = S);
    }), Ce(function() {
      return g.value.dragging;
    }, function(h) {
      h || f();
    });
    var p = F(function() {
      return e.motion === void 0 ? d.value : s.value;
    }), y = function() {
      e.onActiveChange(null);
    };
    return function() {
      var h = k(k({}, e), a), w = h.prefixCls;
      h.selectable, h.checkable;
      var C = h.disabled, x = h.motion, S = h.height, b = h.itemHeight, P = h.virtual, T = h.focusable, O = h.activeItem, D = h.focused, V = h.tabindex, K = h.onKeydown, R = h.onFocus, E = h.onBlur, M = h.onListChangeStart;
      h.onListChangeEnd;
      var N = bh(h, ["prefixCls", "selectable", "checkable", "disabled", "motion", "height", "itemHeight", "virtual", "focusable", "activeItem", "focused", "tabindex", "onKeydown", "onFocus", "onBlur", "onListChangeStart", "onListChangeEnd"]);
      return m(ft, null, [D && O && m("span", {
        style: Ch,
        "aria-live": "assertive"
      }, [UF(O)]), m("div", null, [m("input", {
        style: Ch,
        disabled: T === !1 || C,
        tabindex: T !== !1 ? V : null,
        onKeydown: K,
        onFocus: R,
        onBlur: E,
        value: "",
        onChange: WF,
        "aria-label": "for screen reader"
      }, null)]), m("div", {
        class: "".concat(w, "-treenode"),
        "aria-hidden": !0,
        style: {
          position: "absolute",
          pointerEvents: "none",
          visibility: "hidden",
          height: 0,
          overflow: "hidden"
        }
      }, [m("div", {
        class: "".concat(w, "-indent")
      }, [m("div", {
        ref: i,
        class: "".concat(w, "-indent-unit")
      }, null)])]), m(Wm, Y(Y({}, pt(N, ["onActiveChange"])), {}, {
        data: p.value,
        itemKey: xh,
        height: S,
        fullHeight: !1,
        virtual: P,
        itemHeight: b,
        prefixCls: "".concat(w, "-list"),
        ref: o,
        onVisibleChange: function(I, A) {
          var B = new Set(I), W = A.filter(function(U) {
            return !B.has(U);
          });
          W.some(function(U) {
            return xh(U) === Ir;
          }) && f();
        }
      }), {
        default: function(I) {
          var A = I.pos, B = bh(I.data, []), W = I.title, U = I.key, z = I.isStart, L = I.isEnd, $ = bo(U, A);
          return delete B.key, delete B.children, m(HF, Y(Y({}, B), {}, {
            eventKey: $,
            title: W,
            active: !!O && U === O.key,
            data: I.data,
            isStart: z,
            isEnd: L,
            motion: x,
            motionNodes: U === Ir ? c.value : null,
            motionType: v.value,
            onMotionStart: M,
            onMotionEnd: f,
            onMousemove: y
          }), null);
        }
      })]);
    };
  }
});
function qF(t) {
  var e = t.dropPosition, n = t.dropLevelOffset, r = t.indent, a = {
    pointerEvents: "none",
    position: "absolute",
    right: 0,
    backgroundColor: "red",
    height: "".concat(2, "px")
  };
  switch (e) {
    case -1:
      a.top = 0, a.left = "".concat(-n * r, "px");
      break;
    case 1:
      a.bottom = 0, a.left = "".concat(-n * r, "px");
      break;
    case 0:
      a.bottom = 0, a.left = "".concat(r);
      break;
  }
  return m("div", {
    style: a
  }, null);
}
var GF = 10;
const XF = pe({
  name: "Tree",
  inheritAttrs: !1,
  slots: ["checkable", "title", "icon", "titleRender"],
  props: kt(V_(), {
    prefixCls: "vc-tree",
    showLine: !1,
    showIcon: !0,
    selectable: !0,
    multiple: !1,
    checkable: !1,
    disabled: !1,
    checkStrictly: !1,
    draggable: !1,
    defaultExpandParent: !0,
    autoExpandParent: !1,
    defaultExpandAll: !1,
    defaultExpandedKeys: [],
    defaultCheckedKeys: [],
    defaultSelectedKeys: [],
    dropIndicatorRender: qF,
    allowDrop: function() {
      return !0;
    }
  }),
  setup: function(e, n) {
    var r = n.attrs, a = n.slots, o = n.expose, i = G(!1), l = {}, u = G(), s = Xe([]), d = Xe([]), c = Xe([]), v = Xe([]), f = Xe([]), g = Xe([]), p = {}, y = Mt({
      draggingNodeKey: null,
      dragChildrenKeys: [],
      dropTargetKey: null,
      dropPosition: null,
      dropContainerKey: null,
      dropLevelOffset: null,
      dropTargetPos: null,
      dropAllowed: !0,
      dragOverNodeKey: null
    }), h = Xe([]);
    Ce([function() {
      return e.treeData;
    }, function() {
      return e.children;
    }], function() {
      h.value = e.treeData !== void 0 ? Ot(e.treeData).slice() : q_(Ot(e.children));
    }, {
      immediate: !0,
      deep: !0
    });
    var w = Xe({}), C = G(!1), x = G(null), S = G(!1), b = F(function() {
      return Zs(e.fieldNames);
    }), P = G(), T = null, O = null, D = null, V = F(function() {
      return {
        expandedKeysSet: K.value,
        selectedKeysSet: R.value,
        loadedKeysSet: E.value,
        loadingKeysSet: M.value,
        checkedKeysSet: N.value,
        halfCheckedKeysSet: _.value,
        dragOverNodeKey: y.dragOverNodeKey,
        dropPosition: y.dropPosition,
        keyEntities: w.value
      };
    }), K = F(function() {
      return new Set(g.value);
    }), R = F(function() {
      return new Set(s.value);
    }), E = F(function() {
      return new Set(v.value);
    }), M = F(function() {
      return new Set(f.value);
    }), N = F(function() {
      return new Set(d.value);
    }), _ = F(function() {
      return new Set(c.value);
    });
    Ue(function() {
      if (h.value) {
        var se = ed(h.value, {
          fieldNames: b.value
        });
        w.value = k(j({}, Ir, Yb), se.keyEntities);
      }
    });
    var I = !1;
    Ce(
      [function() {
        return e.expandedKeys;
      }, function() {
        return e.autoExpandParent;
      }, w],
      function(se, ee) {
        var re = De(se, 2);
        re[0];
        var ce = re[1], Ee = De(ee, 2);
        Ee[0];
        var Te = Ee[1], we = g.value;
        if (e.expandedKeys !== void 0 || I && ce !== Te)
          we = e.autoExpandParent || !I && e.defaultExpandParent ? bp(e.expandedKeys, w.value) : e.expandedKeys;
        else if (!I && e.defaultExpandAll) {
          var be = k({}, w.value);
          delete be[Ir], we = Object.keys(be).map(function(Ae) {
            return be[Ae].key;
          });
        } else
          !I && e.defaultExpandedKeys && (we = e.autoExpandParent || e.defaultExpandParent ? bp(e.defaultExpandedKeys, w.value) : e.defaultExpandedKeys);
        we && (g.value = we), I = !0;
      },
      {
        immediate: !0
      }
    );
    var A = Xe([]);
    Ue(function() {
      A.value = G_(h.value, g.value, b.value);
    }), Ue(function() {
      e.selectable && (e.selectedKeys !== void 0 ? s.value = yp(e.selectedKeys, e) : !I && e.defaultSelectedKeys && (s.value = yp(e.defaultSelectedKeys, e)));
    });
    var B = td(w), W = B.maxLevel, U = B.levelEntities;
    Ue(function() {
      if (e.checkable) {
        var se;
        if (e.checkedKeys !== void 0 ? se = ql(e.checkedKeys) || {} : !I && e.defaultCheckedKeys ? se = ql(e.defaultCheckedKeys) || {} : h.value && (se = ql(e.checkedKeys) || {
          checkedKeys: d.value,
          halfCheckedKeys: c.value
        }), se) {
          var ee = se, re = ee.checkedKeys, ce = re === void 0 ? [] : re, Ee = ee.halfCheckedKeys, Te = Ee === void 0 ? [] : Ee;
          if (!e.checkStrictly) {
            var we = Vn(ce, !0, w.value, W.value, U.value);
            ce = we.checkedKeys, Te = we.halfCheckedKeys;
          }
          d.value = ce, c.value = Te;
        }
      }
    }), Ue(function() {
      e.loadedKeys && (v.value = e.loadedKeys);
    });
    var z = function() {
      k(y, {
        dragOverNodeKey: null,
        dropPosition: null,
        dropLevelOffset: null,
        dropTargetKey: null,
        dropContainerKey: null,
        dropTargetPos: null,
        dropAllowed: !1
      });
    }, L = function(ee) {
      P.value.scrollTo(ee);
    };
    Ce(function() {
      return e.activeKey;
    }, function() {
      e.activeKey !== void 0 && (x.value = e.activeKey);
    }, {
      immediate: !0
    }), Ce(x, function(se) {
      vt(function() {
        se !== null && L({
          key: se
        });
      });
    }, {
      immediate: !0,
      flush: "post"
    });
    var $ = function(ee) {
      e.expandedKeys === void 0 && (g.value = ee);
    }, q = function() {
      y.draggingNodeKey !== null && k(y, {
        draggingNodeKey: null,
        dropPosition: null,
        dropContainerKey: null,
        dropTargetKey: null,
        dropLevelOffset: null,
        dropAllowed: !0,
        dragOverNodeKey: null
      }), T = null, D = null;
    }, H = function(ee, re) {
      var ce = e.onDragend;
      y.dragOverNodeKey = null, q(), ce == null || ce({
        event: ee,
        node: re.eventData
      }), O = null;
    }, J = function se(ee) {
      H(ee, null), window.removeEventListener("dragend", se);
    }, Z = function(ee, re) {
      var ce = e.onDragstart, Ee = re.eventKey, Te = re.eventData;
      O = re, T = {
        x: ee.clientX,
        y: ee.clientY
      };
      var we = Gn(g.value, Ee);
      y.draggingNodeKey = Ee, y.dragChildrenKeys = z_(Ee, w.value), u.value = P.value.getIndentWidth(), $(we), window.addEventListener("dragend", J), ce && ce({
        event: ee,
        node: Te
      });
    }, ae = function(ee, re) {
      var ce = e.onDragenter, Ee = e.onExpand, Te = e.allowDrop, we = e.direction, be = re.pos, Ae = re.eventKey;
      if (D !== Ae && (D = Ae), !O) {
        z();
        return;
      }
      var je = mp(ee, O, re, u.value, T, Te, A.value, w.value, K.value, we), We = je.dropPosition, et = je.dropLevelOffset, Ge = je.dropTargetKey, it = je.dropContainerKey, nt = je.dropTargetPos, lt = je.dropAllowed, at = je.dragOverNodeKey;
      if (y.dragChildrenKeys.indexOf(Ge) !== -1 || !lt) {
        z();
        return;
      }
      if (l || (l = {}), Object.keys(l).forEach(function(rt) {
        clearTimeout(l[rt]);
      }), O.eventKey !== re.eventKey && (l[be] = window.setTimeout(function() {
        if (y.draggingNodeKey !== null) {
          var rt = g.value.slice(), yt = w.value[re.eventKey];
          yt && (yt.children || []).length && (rt = gr(g.value, re.eventKey)), $(rt), Ee && Ee(rt, {
            node: re.eventData,
            expanded: !0,
            nativeEvent: ee
          });
        }
      }, 800)), O.eventKey === Ge && et === 0) {
        z();
        return;
      }
      k(y, {
        dragOverNodeKey: at,
        dropPosition: We,
        dropLevelOffset: et,
        dropTargetKey: Ge,
        dropContainerKey: it,
        dropTargetPos: nt,
        dropAllowed: lt
      }), ce && ce({
        event: ee,
        node: re.eventData,
        expandedKeys: g.value
      });
    }, ue = function(ee, re) {
      var ce = e.onDragover, Ee = e.allowDrop, Te = e.direction;
      if (!!O) {
        var we = mp(ee, O, re, u.value, T, Ee, A.value, w.value, K.value, Te), be = we.dropPosition, Ae = we.dropLevelOffset, je = we.dropTargetKey, We = we.dropContainerKey, et = we.dropAllowed, Ge = we.dropTargetPos, it = we.dragOverNodeKey;
        y.dragChildrenKeys.indexOf(je) !== -1 || !et || (O.eventKey === je && Ae === 0 ? y.dropPosition === null && y.dropLevelOffset === null && y.dropTargetKey === null && y.dropContainerKey === null && y.dropTargetPos === null && y.dropAllowed === !1 && y.dragOverNodeKey === null || z() : be === y.dropPosition && Ae === y.dropLevelOffset && je === y.dropTargetKey && We === y.dropContainerKey && Ge === y.dropTargetPos && et === y.dropAllowed && it === y.dragOverNodeKey || k(y, {
          dropPosition: be,
          dropLevelOffset: Ae,
          dropTargetKey: je,
          dropContainerKey: We,
          dropTargetPos: Ge,
          dropAllowed: et,
          dragOverNodeKey: it
        }), ce && ce({
          event: ee,
          node: re.eventData
        }));
      }
    }, ne = function(ee, re) {
      D === re.eventKey && !ee.currentTarget.contains(ee.relatedTarget) && (z(), D = null);
      var ce = e.onDragleave;
      ce && ce({
        event: ee,
        node: re.eventData
      });
    }, X = function(ee, re) {
      var ce = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, Ee, Te = y.dragChildrenKeys, we = y.dropPosition, be = y.dropTargetKey, Ae = y.dropTargetPos, je = y.dropAllowed;
      if (!!je) {
        var We = e.onDrop;
        if (y.dragOverNodeKey = null, q(), be !== null) {
          var et = k(k({}, ic(be, Ot(V.value))), {
            active: ((Ee = he.value) === null || Ee === void 0 ? void 0 : Ee.key) === be,
            data: w.value[be].node
          }), Ge = Te.indexOf(be) !== -1;
          Ze(!Ge, "Can not drop to dragNode's children node. Maybe this is a bug of ant-design-vue. Please report an issue.");
          var it = Js(Ae), nt = {
            event: ee,
            node: lc(et),
            dragNode: O ? O.eventData : null,
            dragNodesKeys: [O.eventKey].concat(Te),
            dropToGap: we !== 0,
            dropPosition: we + Number(it[it.length - 1])
          };
          ce || We == null || We(nt), O = null;
        }
      }
    }, te = function(ee, re) {
      var ce = e.onClick;
      ce && ce(ee, re);
    }, me = function(ee, re) {
      var ce = e.onDblclick;
      ce && ce(ee, re);
    }, Oe = function(ee, re) {
      var ce = s.value, Ee = e.onSelect, Te = e.multiple, we = re.selected, be = re[b.value.key], Ae = !we;
      Ae ? Te ? ce = gr(ce, be) : ce = [be] : ce = Gn(ce, be);
      var je = w.value, We = ce.map(function(et) {
        var Ge = je[et];
        return Ge ? Ge.node : null;
      }).filter(function(et) {
        return et;
      });
      e.selectedKeys === void 0 && (s.value = ce), Ee && Ee(ce, {
        event: "select",
        selected: Ae,
        node: re,
        selectedNodes: We,
        nativeEvent: ee
      });
    }, ke = function(ee, re, ce) {
      var Ee = e.checkStrictly, Te = e.onCheck, we = re[b.value.key], be, Ae = {
        event: "check",
        node: re,
        checked: ce,
        nativeEvent: ee
      }, je = w.value;
      if (Ee) {
        var We = ce ? gr(d.value, we) : Gn(d.value, we), et = Gn(c.value, we);
        be = {
          checked: We,
          halfChecked: et
        }, Ae.checkedNodes = We.map(function(rt) {
          return je[rt];
        }).filter(function(rt) {
          return rt;
        }).map(function(rt) {
          return rt.node;
        }), e.checkedKeys === void 0 && (d.value = We);
      } else {
        var Ge = Vn([].concat(Ie(d.value), [we]), !0, je, W.value, U.value), it = Ge.checkedKeys, nt = Ge.halfCheckedKeys;
        if (!ce) {
          var lt = new Set(it);
          lt.delete(we);
          var at = Vn(Array.from(lt), {
            checked: !1,
            halfCheckedKeys: nt
          }, je, W.value, U.value);
          it = at.checkedKeys, nt = at.halfCheckedKeys;
        }
        be = it, Ae.checkedNodes = [], Ae.checkedNodesPositions = [], Ae.halfCheckedKeys = nt, it.forEach(function(rt) {
          var yt = je[rt];
          if (!!yt) {
            var It = yt.node, Dt = yt.pos;
            Ae.checkedNodes.push(It), Ae.checkedNodesPositions.push({
              node: It,
              pos: Dt
            });
          }
        }), e.checkedKeys === void 0 && (d.value = it, c.value = nt);
      }
      Te && Te(be, Ae);
    }, Me = function(ee) {
      var re = ee[b.value.key], ce = new Promise(function(Ee, Te) {
        var we = e.loadData, be = e.onLoad;
        if (!we || E.value.has(re) || M.value.has(re))
          return null;
        var Ae = we(ee);
        Ae.then(function() {
          var je = gr(v.value, re), We = Gn(f.value, re);
          be && be(je, {
            event: "load",
            node: ee
          }), e.loadedKeys === void 0 && (v.value = je), f.value = We, Ee();
        }).catch(function(je) {
          var We = Gn(f.value, re);
          if (f.value = We, p[re] = (p[re] || 0) + 1, p[re] >= GF) {
            Ze(!1, "Retry for `loadData` many times but still failed. No more retry.");
            var et = gr(v.value, re);
            e.loadedKeys === void 0 && (v.value = et), Ee();
          }
          Te(je);
        }), f.value = gr(f.value, re);
      });
      return ce.catch(function() {
      }), ce;
    }, Pe = function(ee, re) {
      var ce = e.onMouseenter;
      ce && ce({
        event: ee,
        node: re
      });
    }, fe = function(ee, re) {
      var ce = e.onMouseleave;
      ce && ce({
        event: ee,
        node: re
      });
    }, le = function(ee, re) {
      var ce = e.onRightClick;
      ce && (ee.preventDefault(), ce({
        event: ee,
        node: re
      }));
    }, ie = function(ee) {
      var re = e.onFocus;
      C.value = !0, re && re(ee);
    }, de = function(ee) {
      var re = e.onBlur;
      C.value = !1, Ve(null), re && re(ee);
    }, ye = function(ee, re) {
      var ce = g.value, Ee = e.onExpand, Te = e.loadData, we = re.expanded, be = re[b.value.key];
      if (!S.value) {
        var Ae = ce.indexOf(be), je = !we;
        if (Ze(we && Ae !== -1 || !we && Ae === -1, "Expand state not sync with index check"), je ? ce = gr(ce, be) : ce = Gn(ce, be), $(ce), Ee && Ee(ce, {
          node: re,
          expanded: je,
          nativeEvent: ee
        }), je && Te) {
          var We = Me(re);
          We && We.then(function() {
          }).catch(function(et) {
            var Ge = Gn(g.value, be);
            $(Ge), Promise.reject(et);
          });
        }
      }
    }, _e = function() {
      S.value = !0;
    }, Be = function() {
      setTimeout(function() {
        S.value = !1;
      });
    }, Ve = function(ee) {
      var re = e.onActiveChange;
      x.value !== ee && (e.activeKey !== void 0 && (x.value = ee), ee !== null && L({
        key: ee
      }), re && re(ee));
    }, he = F(function() {
      return x.value === null ? null : A.value.find(function(se) {
        var ee = se.key;
        return ee === x.value;
      }) || null;
    }), oe = function(ee) {
      var re = A.value.findIndex(function(Te) {
        var we = Te.key;
        return we === x.value;
      });
      re === -1 && ee < 0 && (re = A.value.length), re = (re + ee + A.value.length) % A.value.length;
      var ce = A.value[re];
      if (ce) {
        var Ee = ce.key;
        Ve(Ee);
      } else
        Ve(null);
    }, ve = F(function() {
      return lc(k(k({}, ic(x.value, V.value)), {
        data: he.value.data,
        active: !0
      }));
    }), Se = function(ee) {
      var re = e.onKeydown, ce = e.checkable, Ee = e.selectable;
      switch (ee.which) {
        case xe.UP: {
          oe(-1), ee.preventDefault();
          break;
        }
        case xe.DOWN: {
          oe(1), ee.preventDefault();
          break;
        }
      }
      var Te = he.value;
      if (Te && Te.data) {
        var we = Te.data.isLeaf === !1 || !!(Te.data.children || []).length, be = ve.value;
        switch (ee.which) {
          case xe.LEFT: {
            we && K.value.has(x.value) ? ye({}, be) : Te.parent && Ve(Te.parent.key), ee.preventDefault();
            break;
          }
          case xe.RIGHT: {
            we && !K.value.has(x.value) ? ye({}, be) : Te.children && Te.children.length && Ve(Te.children[0].key), ee.preventDefault();
            break;
          }
          case xe.ENTER:
          case xe.SPACE: {
            ce && !be.disabled && be.checkable !== !1 && !be.disableCheckbox ? ke({}, be, !N.value.has(x.value)) : !ce && Ee && !be.disabled && be.selectable !== !1 && Oe({}, be);
            break;
          }
        }
      }
      re && re(ee);
    };
    return o({
      onNodeExpand: ye,
      scrollTo: L,
      onKeydown: Se,
      selectedKeys: F(function() {
        return s.value;
      }),
      checkedKeys: F(function() {
        return d.value;
      }),
      halfCheckedKeys: F(function() {
        return c.value;
      }),
      loadedKeys: F(function() {
        return v.value;
      }),
      loadingKeys: F(function() {
        return f.value;
      }),
      expandedKeys: F(function() {
        return g.value;
      })
    }), va(function() {
      window.removeEventListener("dragend", J), i.value = !0;
    }), R_({
      expandedKeys: g,
      selectedKeys: s,
      loadedKeys: v,
      loadingKeys: f,
      checkedKeys: d,
      halfCheckedKeys: c,
      expandedKeysSet: K,
      selectedKeysSet: R,
      loadedKeysSet: E,
      loadingKeysSet: M,
      checkedKeysSet: N,
      halfCheckedKeysSet: _,
      flattenNodes: A
    }), function() {
      var se, ee = y.draggingNodeKey, re = y.dropLevelOffset, ce = y.dropContainerKey, Ee = y.dropTargetKey, Te = y.dropPosition, we = y.dragOverNodeKey, be = e.prefixCls, Ae = e.showLine, je = e.focusable, We = e.tabindex, et = We === void 0 ? 0 : We, Ge = e.selectable, it = e.showIcon, nt = e.icon, lt = nt === void 0 ? a.icon : nt, at = e.switcherIcon, rt = e.draggable, yt = e.checkable, It = e.checkStrictly, Dt = e.disabled, wt = e.motion, xt = e.loadData, Mn = e.filterTreeNode, dn = e.height, cr = e.itemHeight, Ft = e.virtual, Wn = e.dropIndicatorRender, Ca = e.onContextmenu, So = e.onScroll, pl = e.direction, xo = r.class, hl = r.style, Po = ya(k(k({}, e), r), {
        aria: !0,
        data: !0
      }), sr;
      return rt && (Le(rt) === "object" ? sr = rt : typeof rt == "function" ? sr = {
        nodeDraggable: rt
      } : sr = {}), m(F_, {
        value: {
          prefixCls: be,
          selectable: Ge,
          showIcon: it,
          icon: lt,
          switcherIcon: at,
          draggable: sr,
          draggingNodeKey: ee,
          checkable: yt,
          customCheckable: a.checkable,
          checkStrictly: It,
          disabled: Dt,
          keyEntities: w.value,
          dropLevelOffset: re,
          dropContainerKey: ce,
          dropTargetKey: Ee,
          dropPosition: Te,
          dragOverNodeKey: we,
          dragging: ee !== null,
          indent: u.value,
          direction: pl,
          dropIndicatorRender: Wn,
          loadData: xt,
          filterTreeNode: Mn,
          onNodeClick: te,
          onNodeDoubleClick: me,
          onNodeExpand: ye,
          onNodeSelect: Oe,
          onNodeCheck: ke,
          onNodeLoad: Me,
          onNodeMouseEnter: Pe,
          onNodeMouseLeave: fe,
          onNodeContextMenu: le,
          onNodeDragStart: Z,
          onNodeDragEnter: ae,
          onNodeDragOver: ue,
          onNodeDragLeave: ne,
          onNodeDragEnd: H,
          onNodeDrop: X,
          slots: a
        }
      }, {
        default: function() {
          return [m("div", {
            role: "tree",
            class: ge(be, xo, (se = {}, j(se, "".concat(be, "-show-line"), Ae), j(se, "".concat(be, "-focused"), C.value), j(se, "".concat(be, "-active-focused"), x.value !== null), se))
          }, [m(YF, Y({
            ref: P,
            prefixCls: be,
            style: hl,
            disabled: Dt,
            selectable: Ge,
            checkable: !!yt,
            motion: wt,
            height: dn,
            itemHeight: cr,
            virtual: Ft,
            focusable: je,
            focused: C.value,
            tabindex: et,
            activeItem: he.value,
            onFocus: ie,
            onBlur: de,
            onKeydown: Se,
            onActiveChange: Ve,
            onListChangeStart: _e,
            onListChangeEnd: Be,
            onContextmenu: Ca,
            onScroll: So
          }, Po), null)])];
        }
      });
    };
  }
});
var QF = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0042 42h216v494z" } }] }, name: "file", theme: "outlined" };
const JF = QF;
function Ph(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? Object(arguments[e]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(a) {
      return Object.getOwnPropertyDescriptor(n, a).enumerable;
    }))), r.forEach(function(a) {
      ZF(t, a, n[a]);
    });
  }
  return t;
}
function ZF(t, e, n) {
  return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
var Cd = function(e, n) {
  var r = Ph({}, e, n.attrs);
  return m(st, Ph({}, r, {
    icon: JF
  }), null);
};
Cd.displayName = "FileOutlined";
Cd.inheritAttrs = !1;
const eR = Cd;
var tR = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M328 544h368c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z" } }, { tag: "path", attrs: { d: "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z" } }] }, name: "minus-square", theme: "outlined" };
const nR = tR;
function Oh(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? Object(arguments[e]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(a) {
      return Object.getOwnPropertyDescriptor(n, a).enumerable;
    }))), r.forEach(function(a) {
      rR(t, a, n[a]);
    });
  }
  return t;
}
function rR(t, e, n) {
  return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
var wd = function(e, n) {
  var r = Oh({}, e, n.attrs);
  return m(st, Oh({}, r, {
    icon: nR
  }), null);
};
wd.displayName = "MinusSquareOutlined";
wd.inheritAttrs = !1;
const aR = wd;
var oR = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M328 544h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z" } }, { tag: "path", attrs: { d: "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z" } }] }, name: "plus-square", theme: "outlined" };
const iR = oR;
function Th(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? Object(arguments[e]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(a) {
      return Object.getOwnPropertyDescriptor(n, a).enumerable;
    }))), r.forEach(function(a) {
      lR(t, a, n[a]);
    });
  }
  return t;
}
function lR(t, e, n) {
  return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
var Sd = function(e, n) {
  var r = Th({}, e, n.attrs);
  return m(st, Th({}, r, {
    icon: iR
  }), null);
};
Sd.displayName = "PlusSquareOutlined";
Sd.inheritAttrs = !1;
const uR = Sd;
var cR = { icon: { tag: "svg", attrs: { viewBox: "0 0 1024 1024", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z" } }] }, name: "caret-down", theme: "filled" };
const sR = cR;
function Ih(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? Object(arguments[e]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(a) {
      return Object.getOwnPropertyDescriptor(n, a).enumerable;
    }))), r.forEach(function(a) {
      dR(t, a, n[a]);
    });
  }
  return t;
}
function dR(t, e, n) {
  return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
var xd = function(e, n) {
  var r = Ih({}, e, n.attrs);
  return m(st, Ih({}, r, {
    icon: sR
  }), null);
};
xd.displayName = "CaretDownFilled";
xd.inheritAttrs = !1;
const fR = xd;
function vR(t, e, n, r) {
  var a = r.isLeaf, o = r.expanded, i = r.loading, l = e;
  if (i)
    return m(Bn, {
      class: "".concat(t, "-switcher-loading-icon")
    }, null);
  var u;
  n && Le(n) === "object" && (u = n.showLeafIcon);
  var s = null, d = "".concat(t, "-switcher-icon");
  return a ? (n && (Le(n) === "object" && !u ? s = m("span", {
    class: "".concat(t, "-switcher-leaf-line")
  }, null) : s = m(eR, {
    class: "".concat(t, "-switcher-line-icon")
  }, null)), s) : (s = m(fR, {
    class: d
  }, null), n && (s = o ? m(aR, {
    class: "".concat(t, "-switcher-line-icon")
  }, null) : m(uR, {
    class: "".concat(t, "-switcher-line-icon")
  }, null)), typeof e == "function" ? l = e(k(k({}, r), {
    defaultIcon: s,
    switcherCls: d
  })) : At(l) && (l = Fi(l, {
    class: d
  })), l || s);
}
var pR = {
  prefixCls: String,
  placeholder: String,
  value: String,
  handleClear: Function,
  disabled: {
    type: Boolean,
    default: void 0
  },
  onChange: Function
};
const hR = pe({
  name: "Search",
  inheritAttrs: !1,
  props: kt(pR, {
    placeholder: ""
  }),
  emits: ["change"],
  setup: function(e, n) {
    var r = n.emit, a = function(i) {
      var l;
      r("change", i), i.target.value === "" && ((l = e.handleClear) === null || l === void 0 || l.call(e));
    };
    return function() {
      var o = e.placeholder, i = e.value, l = e.prefixCls, u = e.disabled;
      return m(_t, {
        placeholder: o,
        class: l,
        value: i,
        onChange: a,
        disabled: u,
        allowClear: !0
      }, {
        prefix: function() {
          return m(Cs, null, null);
        }
      });
    };
  }
});
var gR = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z" } }] }, name: "delete", theme: "outlined" };
const mR = gR;
function kh(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? Object(arguments[e]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(a) {
      return Object.getOwnPropertyDescriptor(n, a).enumerable;
    }))), r.forEach(function(a) {
      yR(t, a, n[a]);
    });
  }
  return t;
}
function yR(t, e, n) {
  return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
var Pd = function(e, n) {
  var r = kh({}, e, n.attrs);
  return m(st, kh({}, r, {
    icon: mR
  }), null);
};
Pd.displayName = "DeleteOutlined";
Pd.inheritAttrs = !1;
const qb = Pd;
function bR() {
}
var CR = {
  renderedText: Q.any,
  renderedEl: Q.any,
  item: Q.any,
  checked: {
    type: Boolean,
    default: void 0
  },
  prefixCls: String,
  disabled: {
    type: Boolean,
    default: void 0
  },
  showRemove: {
    type: Boolean,
    default: void 0
  },
  onClick: Function,
  onRemove: Function
};
const wR = pe({
  name: "ListItem",
  inheritAttrs: !1,
  props: CR,
  emits: ["click", "remove"],
  setup: function(e, n) {
    var r = n.emit;
    return function() {
      var a, o = e.renderedText, i = e.renderedEl, l = e.item, u = e.checked, s = e.disabled, d = e.prefixCls, c = e.showRemove, v = ge((a = {}, j(a, "".concat(d, "-content-item"), !0), j(a, "".concat(d, "-content-item-disabled"), s || l.disabled), a)), f;
      return (typeof o == "string" || typeof o == "number") && (f = String(o)), m(ji, {
        componentName: "Transfer",
        defaultLocale: ir.Transfer
      }, {
        default: function(p) {
          var y = m("span", {
            class: "".concat(d, "-content-item-text")
          }, [i]);
          return c ? m("li", {
            class: v,
            title: f
          }, [y, m(xF, {
            disabled: s || l.disabled,
            class: "".concat(d, "-content-item-remove"),
            "aria-label": p.remove,
            onClick: function() {
              r("remove", l);
            }
          }, {
            default: function() {
              return [m(qb, null, null)];
            }
          })]) : m("li", {
            class: v,
            title: f,
            onClick: s || l.disabled ? bR : function() {
              r("click", l);
            }
          }, [m(ar, {
            class: "".concat(d, "-checkbox"),
            checked: u,
            disabled: s || l.disabled
          }, null), y]);
        }
      });
    };
  }
});
var SR = {
  prefixCls: String,
  filteredRenderItems: Q.array.def([]),
  selectedKeys: Q.array,
  disabled: {
    type: Boolean,
    default: void 0
  },
  showRemove: {
    type: Boolean,
    default: void 0
  },
  pagination: Q.any,
  onItemSelect: Function,
  onScroll: Function,
  onItemRemove: Function
};
function xR(t) {
  if (!t)
    return null;
  var e = {
    pageSize: 10
  };
  return Le(t) === "object" ? k(k({}, e), t) : e;
}
var PR = pe({
  name: "ListBody",
  inheritAttrs: !1,
  props: SR,
  emits: ["itemSelect", "itemRemove", "scroll"],
  setup: function(e, n) {
    var r = n.emit, a = n.expose, o = G(1), i = function(f) {
      var g = e.selectedKeys, p = g.indexOf(f.key) >= 0;
      r("itemSelect", f.key, !p);
    }, l = function(f) {
      r("itemRemove", f.key);
    }, u = function(f) {
      r("scroll", f);
    }, s = F(function() {
      return xR(e.pagination);
    });
    Ce([s, function() {
      return e.filteredRenderItems;
    }], function() {
      if (s.value) {
        var v = Math.ceil(e.filteredRenderItems.length / s.value.pageSize);
        o.value > v && (o.value = v);
      }
    }, {
      immediate: !0
    });
    var d = F(function() {
      var v = e.filteredRenderItems, f = v;
      return s.value && (f = v.slice((o.value - 1) * s.value.pageSize, o.value * s.value.pageSize)), f;
    }), c = function(f) {
      o.value = f;
    };
    return a({
      items: d
    }), function() {
      var v = e.prefixCls, f = e.filteredRenderItems, g = e.selectedKeys, p = e.disabled, y = e.showRemove, h = null;
      s.value && (h = m(bF, {
        simple: !0,
        size: "small",
        disabled: p,
        class: "".concat(v, "-pagination"),
        total: f.length,
        pageSize: s.value.pageSize,
        current: o.value,
        onChange: c
      }, null));
      var w = d.value.map(function(C) {
        var x = C.renderedEl, S = C.renderedText, b = C.item, P = b.disabled, T = g.indexOf(b.key) >= 0;
        return m(wR, {
          disabled: p || P,
          key: b.key,
          item: b,
          renderedText: S,
          renderedEl: x,
          checked: T,
          prefixCls: v,
          onClick: i,
          onRemove: l,
          showRemove: y
        }, null);
      });
      return m(ft, null, [m("ul", {
        class: ge("".concat(v, "-content"), j({}, "".concat(v, "-content-show-remove"), y)),
        onScroll: u
      }, [w]), h]);
    };
  }
});
const OR = PR;
var TR = function() {
  return null;
};
function IR(t) {
  return t && !At(t) && Object.prototype.toString.call(t) === "[object Object]";
}
function Go(t) {
  return t.filter(function(e) {
    return !e.disabled;
  }).map(function(e) {
    return e.key;
  });
}
var kR = {
  prefixCls: String,
  dataSource: {
    type: Array,
    default: []
  },
  filter: String,
  filterOption: Function,
  checkedKeys: Q.arrayOf(Q.string),
  handleFilter: Function,
  handleClear: Function,
  renderItem: Function,
  showSearch: {
    type: Boolean,
    default: !1
  },
  searchPlaceholder: String,
  notFoundContent: Q.any,
  itemUnit: String,
  itemsUnit: String,
  renderList: Q.any,
  disabled: {
    type: Boolean,
    default: void 0
  },
  direction: String,
  showSelectAll: {
    type: Boolean,
    default: void 0
  },
  remove: String,
  selectAll: String,
  selectCurrent: String,
  selectInvert: String,
  removeAll: String,
  removeCurrent: String,
  selectAllLabel: Q.any,
  showRemove: {
    type: Boolean,
    default: void 0
  },
  pagination: Q.any,
  onItemSelect: Function,
  onItemSelectAll: Function,
  onItemRemove: Function,
  onScroll: Function
};
const _h = pe({
  name: "TransferList",
  inheritAttrs: !1,
  props: kR,
  slots: ["footer", "titleText"],
  setup: function(e, n) {
    var r = n.attrs, a = n.slots, o = G(""), i = G(), l = G(), u = function(b, P) {
      var T = b ? b(P) : null, O = !!T && yn(T).length > 0;
      return O || (T = m(OR, Y(Y({}, P), {}, {
        ref: l
      }), null)), {
        customize: O,
        bodyContent: T
      };
    }, s = function(b) {
      var P = e.renderItem, T = P === void 0 ? TR : P, O = T(b), D = IR(O);
      return {
        renderedText: D ? O.value : O,
        renderedEl: D ? O.label : O,
        item: b
      };
    }, d = G([]), c = G([]);
    Ue(function() {
      var S = [], b = [];
      e.dataSource.forEach(function(P) {
        var T = s(P), O = T.renderedText;
        if (o.value && o.value.trim() && !w(O, P))
          return null;
        S.push(P), b.push(T);
      }), d.value = S, c.value = b;
    });
    var v = F(function() {
      var S = e.checkedKeys;
      return S.length === 0 ? "none" : d.value.every(function(b) {
        return S.indexOf(b.key) >= 0 || !!b.disabled;
      }) ? "all" : "part";
    }), f = F(function() {
      return Go(d.value);
    }), g = function(b, P) {
      return Array.from(new Set([].concat(Ie(b), Ie(e.checkedKeys)))).filter(function(T) {
        return P.indexOf(T) === -1;
      });
    }, p = function(b) {
      var P = b.disabled, T = b.prefixCls, O = v.value === "all", D = m(ar, {
        disabled: P,
        checked: O,
        indeterminate: v.value === "part",
        class: "".concat(T, "-checkbox"),
        onChange: function() {
          var K = f.value;
          e.onItemSelectAll(g(O ? [] : K, O ? e.checkedKeys : []));
        }
      }, null);
      return D;
    }, y = function(b) {
      var P, T = b.target.value;
      o.value = T, (P = e.handleFilter) === null || P === void 0 || P.call(e, b);
    }, h = function(b) {
      var P;
      o.value = "", (P = e.handleClear) === null || P === void 0 || P.call(e, b);
    }, w = function(b, P) {
      var T = e.filterOption;
      return T ? T(o.value, P) : b.indexOf(o.value) >= 0;
    }, C = function(b, P) {
      var T = e.itemsUnit, O = e.itemUnit, D = e.selectAllLabel;
      if (D)
        return typeof D == "function" ? D({
          selectedCount: b,
          totalCount: P
        }) : D;
      var V = P > 1 ? T : O;
      return m(ft, null, [(b > 0 ? "".concat(b, "/") : "") + P, or(" "), V]);
    }, x = function(b, P, T, O, D, V) {
      var K = D ? m("div", {
        class: "".concat(b, "-body-search-wrapper")
      }, [m(hR, {
        prefixCls: "".concat(b, "-search"),
        onChange: y,
        handleClear: h,
        placeholder: P,
        value: o.value,
        disabled: V
      }, null)]) : null, R, E = _c(r), M = E.onEvents, N = u(O, k(k(k({}, e), {
        filteredItems: d.value,
        filteredRenderItems: c.value,
        selectedKeys: T
      }), M)), _ = N.bodyContent, I = N.customize;
      return I ? R = m("div", {
        class: "".concat(b, "-body-customize-wrapper")
      }, [_]) : R = d.value.length ? _ : m("div", {
        class: "".concat(b, "-body-not-found")
      }, [e.notFoundContent]), m("div", {
        class: D ? "".concat(b, "-body ").concat(b, "-body-with-search") : "".concat(b, "-body"),
        ref: i
      }, [K, R]);
    };
    return function() {
      var S, b, P, T = e.prefixCls, O = e.checkedKeys, D = e.disabled, V = e.showSearch, K = e.searchPlaceholder, R = e.selectAll, E = e.selectCurrent, M = e.selectInvert, N = e.removeAll, _ = e.removeCurrent, I = e.renderList, A = e.onItemSelectAll, B = e.onItemRemove, W = e.showSelectAll, U = W === void 0 ? !0 : W, z = e.showRemove, L = e.pagination, $ = (b = a.footer) === null || b === void 0 ? void 0 : b.call(a, k({}, e)), q = ge(T, (S = {}, j(S, "".concat(T, "-with-pagination"), !!L), j(S, "".concat(T, "-with-footer"), !!$), S)), H = x(T, K, O, I, V, D), J = $ ? m("div", {
        class: "".concat(T, "-footer")
      }, [$]) : null, Z = !z && !L && p({
        disabled: D,
        prefixCls: T
      }), ae = null;
      z ? ae = m(zt, null, {
        default: function() {
          return [L && m(zt.Item, {
            key: "removeCurrent",
            onClick: function() {
              var te = Go((l.value.items || []).map(function(me) {
                return me.item;
              }));
              B == null || B(te);
            }
          }, {
            default: function() {
              return [_];
            }
          }), m(zt.Item, {
            key: "removeAll",
            onClick: function() {
              B == null || B(f.value);
            }
          }, {
            default: function() {
              return [N];
            }
          })];
        }
      }) : ae = m(zt, null, {
        default: function() {
          return [m(zt.Item, {
            key: "selectAll",
            onClick: function() {
              var te = f.value;
              A(g(te, []));
            }
          }, {
            default: function() {
              return [R];
            }
          }), L && m(zt.Item, {
            onClick: function() {
              var te = Go((l.value.items || []).map(function(me) {
                return me.item;
              }));
              A(g(te, []));
            }
          }, {
            default: function() {
              return [E];
            }
          }), m(zt.Item, {
            key: "selectInvert",
            onClick: function() {
              var te;
              L ? te = Go((l.value.items || []).map(function(Me) {
                return Me.item;
              })) : te = f.value;
              var me = new Set(O), Oe = [], ke = [];
              te.forEach(function(Me) {
                me.has(Me) ? ke.push(Me) : Oe.push(Me);
              }), A(g(Oe, ke));
            }
          }, {
            default: function() {
              return [M];
            }
          })];
        }
      });
      var ue = m(oa, {
        class: "".concat(T, "-header-dropdown"),
        overlay: ae,
        disabled: D
      }, {
        default: function() {
          return [m(ms, null, null)];
        }
      });
      return m("div", {
        class: q,
        style: r.style
      }, [m("div", {
        class: "".concat(T, "-header")
      }, [U ? m(ft, null, [Z, ue]) : null, m("span", {
        class: "".concat(T, "-header-selected")
      }, [m("span", null, [C(O.length, d.value.length)]), m("span", {
        class: "".concat(T, "-header-title")
      }, [(P = a.titleText) === null || P === void 0 ? void 0 : P.call(a)])])]), H, J]);
    };
  }
});
function Eh() {
}
var Od = function(e) {
  var n = e.disabled, r = e.moveToLeft, a = r === void 0 ? Eh : r, o = e.moveToRight, i = o === void 0 ? Eh : o, l = e.leftArrowText, u = l === void 0 ? "" : l, s = e.rightArrowText, d = s === void 0 ? "" : s, c = e.leftActive, v = e.rightActive, f = e.class, g = e.style, p = e.direction, y = e.oneWay;
  return m("div", {
    class: f,
    style: g
  }, [m(Jt, {
    type: "primary",
    size: "small",
    disabled: n || !v,
    onClick: i,
    icon: p !== "rtl" ? m(no, null, null) : m(Ni, null, null)
  }, {
    default: function() {
      return [d];
    }
  }), !y && m(Jt, {
    type: "primary",
    size: "small",
    disabled: n || !c,
    onClick: a,
    icon: p !== "rtl" ? m(Ni, null, null) : m(no, null, null)
  }, {
    default: function() {
      return [u];
    }
  })]);
};
Od.displayName = "Operation";
Od.inheritAttrs = !1;
const _R = Od;
var ER = function() {
  return {
    id: String,
    prefixCls: String,
    dataSource: {
      type: Array,
      default: []
    },
    disabled: {
      type: Boolean,
      default: void 0
    },
    targetKeys: {
      type: Array,
      default: void 0
    },
    selectedKeys: {
      type: Array,
      default: void 0
    },
    render: {
      type: Function
    },
    listStyle: {
      type: [Function, Object],
      default: function() {
        return {};
      }
    },
    operationStyle: {
      type: Object,
      default: void 0
    },
    titles: {
      type: Array
    },
    operations: {
      type: Array
    },
    showSearch: {
      type: Boolean,
      default: !1
    },
    filterOption: {
      type: Function
    },
    searchPlaceholder: String,
    notFoundContent: Q.any,
    locale: {
      type: Object,
      default: function() {
        return {};
      }
    },
    rowKey: {
      type: Function
    },
    showSelectAll: {
      type: Boolean,
      default: void 0
    },
    selectAllLabels: {
      type: Array
    },
    children: {
      type: Function
    },
    oneWay: {
      type: Boolean,
      default: void 0
    },
    pagination: {
      type: [Object, Boolean],
      default: void 0
    },
    onChange: Function,
    onSelectChange: Function,
    onSearch: Function,
    onScroll: Function,
    "onUpdate:targetKeys": Function,
    "onUpdate:selectedKeys": Function
  };
}, NR = pe({
  name: "ATransfer",
  inheritAttrs: !1,
  props: ER(),
  slots: ["leftTitle", "rightTitle", "children", "render", "notFoundContent", "leftSelectAllLabel", "rightSelectAllLabel", "footer"],
  setup: function(e, n) {
    var r = n.emit, a = n.attrs, o = n.slots, i = n.expose, l = Qe("transfer", e), u = l.configProvider, s = l.prefixCls, d = l.direction, c = G([]), v = G([]), f = jt();
    Ce(function() {
      return e.selectedKeys;
    }, function() {
      var z, L;
      c.value = ((z = e.selectedKeys) === null || z === void 0 ? void 0 : z.filter(function($) {
        return e.targetKeys.indexOf($) === -1;
      })) || [], v.value = ((L = e.selectedKeys) === null || L === void 0 ? void 0 : L.filter(function($) {
        return e.targetKeys.indexOf($) > -1;
      })) || [];
    }, {
      immediate: !0
    });
    var g = function(L, $) {
      var q = {
        notFoundContent: $("Transfer")
      }, H = ua(o, e, "notFoundContent");
      return H && (q.notFoundContent = H), e.searchPlaceholder !== void 0 && (q.searchPlaceholder = e.searchPlaceholder), k(k(k({}, L), q), e.locale);
    }, p = function(L) {
      var $ = e.targetKeys, q = $ === void 0 ? [] : $, H = e.dataSource, J = H === void 0 ? [] : H, Z = L === "right" ? c.value : v.value, ae = Z.filter(function(X) {
        return !J.some(function(te) {
          return !!(X === te.key && te.disabled);
        });
      }), ue = L === "right" ? ae.concat(q) : q.filter(function(X) {
        return ae.indexOf(X) === -1;
      }), ne = L === "right" ? "left" : "right";
      L === "right" ? c.value = [] : v.value = [], r("update:targetKeys", ue), S(ne, []), r("change", ue, L, ae), f.onFieldChange();
    }, y = function() {
      p("left");
    }, h = function() {
      p("right");
    }, w = function(L, $) {
      S(L, $);
    }, C = function(L) {
      return w("left", L);
    }, x = function(L) {
      return w("right", L);
    }, S = function(L, $) {
      L === "left" ? (e.selectedKeys || (c.value = $), r("update:selectedKeys", [].concat(Ie($), Ie(v.value))), r("selectChange", $, Ot(v.value))) : (e.selectedKeys || (v.value = $), r("update:selectedKeys", [].concat(Ie($), Ie(c.value))), r("selectChange", Ot(c.value), $));
    }, b = function(L, $) {
      var q = $.target.value;
      r("search", L, q);
    }, P = function(L) {
      b("left", L);
    }, T = function(L) {
      b("right", L);
    }, O = function(L) {
      r("search", L, "");
    }, D = function() {
      O("left");
    }, V = function() {
      O("right");
    }, K = function(L, $, q) {
      var H = Ie(L === "left" ? c.value : v.value), J = H.indexOf($);
      J > -1 && H.splice(J, 1), q && H.push($), S(L, H);
    }, R = function(L, $) {
      return K("left", L, $);
    }, E = function(L, $) {
      return K("right", L, $);
    }, M = function(L) {
      var $ = e.targetKeys, q = $ === void 0 ? [] : $, H = q.filter(function(J) {
        return !L.includes(J);
      });
      r("update:targetKeys", H), r("change", H, "left", Ie(L));
    }, N = function(L, $) {
      r("scroll", L, $);
    }, _ = function(L) {
      N("left", L);
    }, I = function(L) {
      N("right", L);
    }, A = function(L, $) {
      return typeof L == "function" ? L({
        direction: $
      }) : L;
    }, B = G([]), W = G([]);
    Ue(function() {
      var z = e.dataSource, L = e.rowKey, $ = e.targetKeys, q = $ === void 0 ? [] : $, H = [], J = new Array(q.length);
      z.forEach(function(Z) {
        L && (Z.key = L(Z));
        var ae = q.indexOf(Z.key);
        ae !== -1 ? J[ae] = Z : H.push(Z);
      }), B.value = H, W.value = J;
    }), i({
      handleSelectChange: S
    });
    var U = function(L) {
      var $, q, H, J, Z, ae, ue, ne = e.disabled, X = e.operations, te = X === void 0 ? [] : X, me = e.showSearch, Oe = e.listStyle, ke = e.operationStyle, Me = e.filterOption, Pe = e.showSelectAll, fe = e.selectAllLabels, le = fe === void 0 ? [] : fe, ie = e.oneWay, de = e.pagination, ye = e.id, _e = ye === void 0 ? f.id.value : ye, Be = a.class, Ve = a.style, he = o.children, oe = !he && de, ve = u.renderEmpty, Se = g(L, ve), se = o.footer, ee = e.render || o.render, re = v.value.length > 0, ce = c.value.length > 0, Ee = ge(s.value, Be, ($ = {}, j($, "".concat(s.value, "-disabled"), ne), j($, "".concat(s.value, "-customize-list"), !!he), $)), Te = e.titles, we = (J = (q = Te && Te[0]) !== null && q !== void 0 ? q : (H = o.leftTitle) === null || H === void 0 ? void 0 : H.call(o)) !== null && J !== void 0 ? J : (Se.titles || ["", ""])[0], be = (ue = (Z = Te && Te[1]) !== null && Z !== void 0 ? Z : (ae = o.rightTitle) === null || ae === void 0 ? void 0 : ae.call(o)) !== null && ue !== void 0 ? ue : (Se.titles || ["", ""])[1];
      return m("div", {
        class: Ee,
        style: Ve,
        id: _e
      }, [m(_h, Y({
        key: "leftList",
        prefixCls: "".concat(s.value, "-list"),
        dataSource: B.value,
        filterOption: Me,
        style: A(Oe, "left"),
        checkedKeys: c.value,
        handleFilter: P,
        handleClear: D,
        onItemSelect: R,
        onItemSelectAll: C,
        renderItem: ee,
        showSearch: me,
        renderList: he,
        onScroll: _,
        disabled: ne,
        direction: d.value === "rtl" ? "right" : "left",
        showSelectAll: Pe,
        selectAllLabel: le[0] || o.leftSelectAllLabel,
        pagination: oe
      }, Se), {
        titleText: function() {
          return we;
        },
        footer: se
      }), m(_R, {
        key: "operation",
        class: "".concat(s.value, "-operation"),
        rightActive: ce,
        rightArrowText: te[0],
        moveToRight: h,
        leftActive: re,
        leftArrowText: te[1],
        moveToLeft: y,
        style: ke,
        disabled: ne,
        direction: d.value,
        oneWay: ie
      }, null), m(_h, Y({
        key: "rightList",
        prefixCls: "".concat(s.value, "-list"),
        dataSource: W.value,
        filterOption: Me,
        style: A(Oe, "right"),
        checkedKeys: v.value,
        handleFilter: T,
        handleClear: V,
        onItemSelect: E,
        onItemSelectAll: x,
        onItemRemove: M,
        renderItem: ee,
        showSearch: me,
        renderList: he,
        onScroll: I,
        disabled: ne,
        direction: d.value === "rtl" ? "left" : "right",
        showSelectAll: Pe,
        selectAllLabel: le[1] || o.rightSelectAllLabel,
        showRemove: ie,
        pagination: oe
      }, Se), {
        titleText: function() {
          return be;
        },
        footer: se
      })]);
    };
    return function() {
      return m(ji, {
        componentName: "Transfer",
        defaultLocale: ir.Transfer,
        children: U
      }, null);
    };
  }
});
const MR = Nr(NR);
function Gb(t) {
  return Array.isArray(t) ? t : t !== void 0 ? [t] : [];
}
function AR(t) {
  var e = t || {}, n = e.label, r = e.value, a = e.children, o = r || "value";
  return {
    _title: n ? [n] : ["title", "label"],
    value: o,
    key: o,
    children: a || "children"
  };
}
function wc(t) {
  return t.disabled || t.disableCheckbox || t.checkable === !1;
}
function DR(t, e) {
  var n = [];
  function r(a) {
    a.forEach(function(o) {
      n.push(o[e.value]);
      var i = o[e.children];
      i && r(i);
    });
  }
  return r(t), n;
}
function Sc(t) {
  return t == null;
}
var Xb = Symbol("TreeSelectContextPropsKey");
function FR(t) {
  return ct(Xb, t);
}
function RR() {
  return ut(Xb, {});
}
var $R = {
  width: 0,
  height: 0,
  display: "flex",
  overflow: "hidden",
  opacity: 0,
  border: 0,
  padding: 0,
  margin: 0
};
const LR = pe({
  name: "OptionList",
  inheritAttrs: !1,
  slots: ["notFoundContent", "menuItemSelectedIcon"],
  setup: function(e, n) {
    var r = n.slots, a = n.expose, o = ho(), i = Xi(), l = RR(), u = G(), s = ss(function() {
      return l.treeData;
    }, [function() {
      return o.open;
    }, function() {
      return l.treeData;
    }], function(b) {
      return b[0];
    }), d = F(function() {
      var b = i.checkable, P = i.halfCheckedKeys, T = i.checkedKeys;
      return b ? {
        checked: T,
        halfChecked: P
      } : null;
    });
    Ce(function() {
      return o.open;
    }, function() {
      vt(function() {
        var b;
        o.open && !o.multiple && i.checkedKeys.length && ((b = u.value) === null || b === void 0 || b.scrollTo({
          key: i.checkedKeys[0]
        }));
      });
    }, {
      immediate: !0,
      flush: "post"
    });
    var c = F(function() {
      return String(o.searchValue).toLowerCase();
    }), v = function(P) {
      return c.value ? String(P[i.treeNodeFilterProp]).toLowerCase().includes(c.value) : !1;
    }, f = Xe(i.treeDefaultExpandedKeys), g = Xe(null);
    Ce(function() {
      return o.searchValue;
    }, function() {
      o.searchValue && (g.value = DR(Ot(l.treeData), Ot(l.fieldNames)));
    }, {
      immediate: !0
    });
    var p = F(function() {
      return i.treeExpandedKeys ? i.treeExpandedKeys.slice() : o.searchValue ? g.value : f.value;
    }), y = function(P) {
      var T;
      f.value = P, g.value = P, (T = i.onTreeExpand) === null || T === void 0 || T.call(i, P);
    }, h = function(P) {
      P.preventDefault();
    }, w = function(P, T) {
      var O = T.node, D, V, K = i.checkable, R = i.checkedKeys;
      K && wc(O) || ((D = l.onSelect) === null || D === void 0 || D.call(l, O.key, {
        selected: !R.includes(O.key)
      }), o.multiple || (V = o.toggleOpen) === null || V === void 0 || V.call(o, !1));
    }, C = G(null), x = F(function() {
      return i.keyEntities[C.value];
    }), S = function(P) {
      C.value = P;
    };
    return a({
      scrollTo: function() {
        for (var P, T, O, D = arguments.length, V = new Array(D), K = 0; K < D; K++)
          V[K] = arguments[K];
        return (O = (T = u.value) === null || T === void 0 ? void 0 : T.scrollTo) === null || O === void 0 ? void 0 : (P = O).call.apply(P, [T].concat(V));
      },
      onKeydown: function(P) {
        var T, O = P.which;
        switch (O) {
          case xe.UP:
          case xe.DOWN:
          case xe.LEFT:
          case xe.RIGHT:
            (T = u.value) === null || T === void 0 || T.onKeydown(P);
            break;
          case xe.ENTER: {
            if (x.value) {
              var D = x.value.node || {}, V = D.selectable, K = D.value;
              V !== !1 && w(null, {
                node: {
                  key: C.value
                },
                selected: !i.checkedKeys.includes(K)
              });
            }
            break;
          }
          case xe.ESC:
            o.toggleOpen(!1);
        }
      },
      onKeyup: function() {
      }
    }), function() {
      var b, P = o.prefixCls, T = o.multiple, O = o.searchValue, D = o.open, V = o.notFoundContent, K = V === void 0 ? (b = r.notFoundContent) === null || b === void 0 ? void 0 : b.call(r) : V, R = l.listHeight, E = l.listItemHeight, M = l.virtual, N = i.checkable, _ = i.treeDefaultExpandAll, I = i.treeIcon, A = i.showTreeIcon, B = i.switcherIcon, W = i.treeLine, U = i.loadData, z = i.treeLoadedKeys, L = i.treeMotion, $ = i.onTreeLoad, q = i.checkedKeys;
      if (s.value.length === 0)
        return m("div", {
          role: "listbox",
          class: "".concat(P, "-empty"),
          onMousedown: h
        }, [K]);
      var H = {
        fieldNames: l.fieldNames
      };
      return z && (H.loadedKeys = z), p.value && (H.expandedKeys = p.value), m("div", {
        onMousedown: h
      }, [x.value && D && m("span", {
        style: $R,
        "aria-live": "assertive"
      }, [x.value.node.value]), m(XF, Y(Y({
        ref: u,
        focusable: !1,
        prefixCls: "".concat(P, "-tree"),
        treeData: s.value,
        height: R,
        itemHeight: E,
        virtual: M,
        multiple: T,
        icon: I,
        showIcon: A,
        switcherIcon: B,
        showLine: W,
        loadData: O ? null : U,
        motion: L,
        activeKey: C.value,
        checkable: N,
        checkStrictly: !0,
        checkedKeys: d.value,
        selectedKeys: N ? [] : q,
        defaultExpandAll: _
      }, H), {}, {
        onActiveChange: S,
        onSelect: w,
        onCheck: w,
        onExpand: y,
        onLoad: $,
        filterTreeNode: v
      }), k(k({}, r), {
        checkable: i.customSlots.treeCheckable
      }))]);
    };
  }
});
var jR = "SHOW_ALL", Qb = "SHOW_PARENT", Td = "SHOW_CHILD";
function Nh(t, e, n, r) {
  var a = new Set(t);
  return e === Td ? t.filter(function(o) {
    var i = n[o];
    return !(i && i.children && i.children.some(function(l) {
      var u = l.node;
      return a.has(u[r.value]);
    }) && i.children.every(function(l) {
      var u = l.node;
      return wc(u) || a.has(u[r.value]);
    }));
  }) : e === Qb ? t.filter(function(o) {
    var i = n[o], l = i ? i.parent : null;
    return !(l && !wc(l.node) && a.has(l.key));
  }) : t;
}
var vl = function() {
  return null;
};
vl.inheritAttrs = !1;
vl.displayName = "ATreeSelectNode";
vl.isTreeSelectNode = !0;
const Id = vl;
var VR = globalThis && globalThis.__rest || function(t, e) {
  var n = {};
  for (var r in t)
    Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(t); a < r.length; a++)
      e.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[a]) && (n[r[a]] = t[r[a]]);
  return n;
};
function BR(t) {
  return t && t.type && t.type.isTreeSelectNode;
}
function KR(t) {
  function e() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    return yn(n).map(function(r) {
      var a, o, i;
      if (!BR(r))
        return Ze(!r, "TreeSelect/TreeSelectNode can only accept TreeSelectNode as children."), null;
      for (var l = r.children || {}, u = r.key, s = {}, d = 0, c = Object.entries(r.props); d < c.length; d++) {
        var v = De(c[d], 2), f = v[0], g = v[1];
        s[Hh(f)] = g;
      }
      var p = s.isLeaf, y = s.checkable, h = s.selectable, w = s.disabled, C = s.disableCheckbox, x = {
        isLeaf: p || p === "" || void 0,
        checkable: y || y === "" || void 0,
        selectable: h || h === "" || void 0,
        disabled: w || w === "" || void 0,
        disableCheckbox: C || C === "" || void 0
      }, S = k(k({}, s), x), b = s.title, P = b === void 0 ? (a = l.title) === null || a === void 0 ? void 0 : a.call(l, S) : b, T = s.switcherIcon, O = T === void 0 ? (o = l.switcherIcon) === null || o === void 0 ? void 0 : o.call(l, S) : T, D = VR(s, ["title", "switcherIcon"]), V = (i = l.default) === null || i === void 0 ? void 0 : i.call(l), K = k(k(k({}, D), {
        title: P,
        switcherIcon: O,
        key: u,
        isLeaf: p
      }), x), R = e(V);
      return R.length && (K.children = R), K;
    });
  }
  return e(t);
}
function xc(t) {
  if (!t)
    return t;
  var e = k({}, t);
  return "props" in e || Object.defineProperty(e, "props", {
    get: function() {
      return Ze(!1, "New `vc-tree-select` not support return node instance as argument anymore. Please consider to remove `props` access."), e;
    }
  }), e;
}
function HR(t, e, n, r, a, o) {
  var i = null, l = null;
  function u() {
    function s(d) {
      var c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "0", v = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
      return d.map(function(f, g) {
        var p = "".concat(c, "-").concat(g), y = f[o.value], h = n.includes(y), w = s(f[o.children] || [], p, h), C = m(Id, f, {
          default: function() {
            return [w.map(function(b) {
              return b.node;
            })];
          }
        });
        if (e === y && (i = C), h) {
          var x = {
            pos: p,
            node: C,
            children: w
          };
          return v || l.push(x), x;
        }
        return null;
      }).filter(function(f) {
        return f;
      });
    }
    l || (l = [], s(r), l.sort(function(d, c) {
      var v = d.node.props.value, f = c.node.props.value, g = n.indexOf(v), p = n.indexOf(f);
      return g - p;
    }));
  }
  Object.defineProperty(t, "triggerNode", {
    get: function() {
      return Ze(!1, "`triggerNode` is deprecated. Please consider decoupling data with node."), u(), i;
    }
  }), Object.defineProperty(t, "allCheckedNodes", {
    get: function() {
      return Ze(!1, "`allCheckedNodes` is deprecated. Please consider decoupling data with node."), u(), a ? l : l.map(function(d) {
        var c = d.node;
        return c;
      });
    }
  });
}
function zR(t, e) {
  var n = e.id, r = e.pId, a = e.rootPId, o = {}, i = [], l = t.map(function(u) {
    var s = k({}, u), d = s[n];
    return o[d] = s, s.key = s.key || d, s;
  });
  return l.forEach(function(u) {
    var s = u[r], d = o[s];
    d && (d.children = d.children || [], d.children.push(u)), (s === a || !d && a === null) && i.push(u);
  }), i;
}
function WR(t, e, n) {
  var r = Xe();
  return Ce([n, t, e], function() {
    var a = n.value;
    t.value ? r.value = n.value ? zR(Ot(t.value), k({
      id: "id",
      pId: "pId",
      rootPId: null
    }, a !== !0 ? a : {})) : Ot(t.value).slice() : r.value = KR(Ot(e.value));
  }, {
    immediate: !0,
    deep: !0
  }), r;
}
const UR = function(t) {
  var e = Xe({
    valueLabels: /* @__PURE__ */ new Map()
  }), n = Xe();
  Ce(t, function() {
    n.value = Ot(t.value);
  }, {
    immediate: !0
  });
  var r = F(function() {
    var a = e.value.valueLabels, o = /* @__PURE__ */ new Map(), i = n.value.map(function(l) {
      var u, s = l.value, d = (u = l.label) !== null && u !== void 0 ? u : a.get(s);
      return o.set(s, d), k(k({}, l), {
        label: d
      });
    });
    return e.value.valueLabels = o, i;
  });
  return [r];
}, YR = function(t, e) {
  var n = Xe(/* @__PURE__ */ new Map()), r = Xe({});
  return Ue(function() {
    var a = e.value, o = ed(t.value, {
      fieldNames: a,
      initWrapper: function(l) {
        return k(k({}, l), {
          valueEntities: /* @__PURE__ */ new Map()
        });
      },
      processEntity: function(l, u) {
        var s = l.node[a.value];
        if (process.env.NODE_ENV !== "production") {
          var d = l.node.key;
          Ze(!Sc(s), "TreeNode `value` is invalidate: undefined"), Ze(!u.valueEntities.has(s), "Same `value` exist in the tree: ".concat(s)), Ze(!d || String(d) === String(s), "`key` or `value` with TreeNode must be the same or you can remove one of them. key: ".concat(d, ", value: ").concat(s, "."));
        }
        u.valueEntities.set(s, l);
      }
    });
    n.value = o.valueEntities, r.value = o.keyEntities;
  }), {
    valueEntities: n,
    keyEntities: r
  };
}, qR = function(t, e, n, r, a, o) {
  var i = Xe([]), l = Xe([]);
  return Ue(function() {
    var u = t.value.map(function(v) {
      var f = v.value;
      return f;
    }), s = e.value.map(function(v) {
      var f = v.value;
      return f;
    }), d = u.filter(function(v) {
      return !r.value[v];
    });
    if (n.value) {
      var c = Vn(u, !0, r.value, a.value, o.value);
      u = c.checkedKeys, s = c.halfCheckedKeys;
    }
    i.value = Array.from(new Set([].concat(Ie(d), Ie(u)))), l.value = s;
  }), [i, l];
}, GR = function(t, e, n) {
  var r = n.treeNodeFilterProp, a = n.filterTreeNode, o = n.fieldNames;
  return F(function() {
    var i = o.value.children, l = e.value, u = r == null ? void 0 : r.value;
    if (!l || a.value === !1)
      return t.value;
    var s;
    if (typeof a.value == "function")
      s = a.value;
    else {
      var d = l.toUpperCase();
      s = function(f, g) {
        var p = g[u];
        return String(p).toUpperCase().includes(d);
      };
    }
    function c(v) {
      for (var f = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, g = [], p = 0, y = v.length; p < y; p++) {
        var h = v[p], w = h[i], C = f || s(l, xc(h)), x = c(w || [], C);
        (C || x.length) && g.push(k(k({}, h), j({}, i, x)));
      }
      return g;
    }
    return c(t.value);
  });
};
function XR(t) {
  var e = t.searchPlaceholder, n = t.treeCheckStrictly, r = t.treeCheckable, a = t.labelInValue, o = t.value, i = t.multiple;
  Ze(!e, "`searchPlaceholder` has been removed, please use `placeholder` instead"), n && a === !1 && Ze(!1, "`treeCheckStrictly` will force set `labelInValue` to `true`."), (a || n) && Ze(Gb(o).every(function(l) {
    return l && Le(l) === "object" && "value" in l;
  }), "Invalid prop `value` supplied to `TreeSelect`. You should use { label: string, value: string | number } or [{ label: string, value: string | number }] instead."), n || i || r ? Ze(!o || Array.isArray(o), "`value` should be an array when `TreeSelect` is checkable or multiple.") : Ze(!Array.isArray(o), "`value` should not be array when `TreeSelect` is single mode.");
}
function Jb() {
  return k(k({}, pt(Qi(), ["mode"])), {
    prefixCls: String,
    id: String,
    value: {
      type: [String, Number, Object, Array]
    },
    defaultValue: {
      type: [String, Number, Object, Array]
    },
    onChange: {
      type: Function
    },
    searchValue: String,
    inputValue: String,
    onSearch: {
      type: Function
    },
    autoClearSearchValue: {
      type: Boolean,
      default: void 0
    },
    filterTreeNode: {
      type: [Boolean, Function],
      default: void 0
    },
    treeNodeFilterProp: String,
    onSelect: Function,
    onDeselect: Function,
    showCheckedStrategy: {
      type: String
    },
    treeNodeLabelProp: String,
    fieldNames: {
      type: Object
    },
    multiple: {
      type: Boolean,
      default: void 0
    },
    treeCheckable: {
      type: Boolean,
      default: void 0
    },
    treeCheckStrictly: {
      type: Boolean,
      default: void 0
    },
    labelInValue: {
      type: Boolean,
      default: void 0
    },
    treeData: {
      type: Array
    },
    treeDataSimpleMode: {
      type: [Boolean, Object],
      default: void 0
    },
    loadData: {
      type: Function
    },
    treeLoadedKeys: {
      type: Array
    },
    onTreeLoad: {
      type: Function
    },
    treeDefaultExpandAll: {
      type: Boolean,
      default: void 0
    },
    treeExpandedKeys: {
      type: Array
    },
    treeDefaultExpandedKeys: {
      type: Array
    },
    onTreeExpand: {
      type: Function
    },
    virtual: {
      type: Boolean,
      default: void 0
    },
    listHeight: Number,
    listItemHeight: Number,
    onDropdownVisibleChange: {
      type: Function
    },
    treeLine: {
      type: [Boolean, Object],
      default: void 0
    },
    treeIcon: Q.any,
    showTreeIcon: {
      type: Boolean,
      default: void 0
    },
    switcherIcon: Q.any,
    treeMotion: Q.any,
    children: Array,
    showArrow: {
      type: Boolean,
      default: void 0
    },
    showSearch: {
      type: Boolean,
      default: void 0
    },
    open: {
      type: Boolean,
      default: void 0
    },
    defaultOpen: {
      type: Boolean,
      default: void 0
    },
    disabled: {
      type: Boolean,
      default: void 0
    },
    placeholder: Q.any,
    maxTagPlaceholder: {
      type: Function
    },
    dropdownPopupAlign: Q.any,
    customSlots: Object
  });
}
function QR(t) {
  return !t || Le(t) !== "object";
}
const JR = pe({
  name: "TreeSelect",
  inheritAttrs: !1,
  props: kt(Jb(), {
    treeNodeFilterProp: "value",
    autoClearSearchValue: !0,
    showCheckedStrategy: Td,
    listHeight: 200,
    listItemHeight: 20,
    prefixCls: "vc-tree-select"
  }),
  setup: function(e, n) {
    var r = n.attrs, a = n.expose, o = n.slots, i = fs(ze(e, "id")), l = F(function() {
      return e.treeCheckable && !e.treeCheckStrictly;
    }), u = F(function() {
      return e.treeCheckable || e.treeCheckStrictly;
    }), s = F(function() {
      return e.treeCheckStrictly || e.labelInValue;
    }), d = F(function() {
      return u.value || e.multiple;
    });
    process.env.NODE_ENV !== "production" && Ue(function() {
      XR(e);
    });
    var c = F(function() {
      return AR(e.fieldNames);
    }), v = Rt("", {
      value: F(function() {
        return e.searchValue !== void 0 ? e.searchValue : e.inputValue;
      }),
      postState: function(ee) {
        return ee || "";
      }
    }), f = De(v, 2), g = f[0], p = f[1], y = function(ee) {
      var re;
      p(ee), (re = e.onSearch) === null || re === void 0 || re.call(e, ee);
    }, h = WR(ze(e, "treeData"), ze(e, "children"), ze(e, "treeDataSimpleMode")), w = YR(h, c), C = w.keyEntities, x = w.valueEntities, S = function(ee) {
      var re = [], ce = [];
      return ee.forEach(function(Ee) {
        x.value.has(Ee) ? ce.push(Ee) : re.push(Ee);
      }), {
        missingRawValues: re,
        existRawValues: ce
      };
    }, b = GR(h, g, {
      fieldNames: c,
      treeNodeFilterProp: ze(e, "treeNodeFilterProp"),
      filterTreeNode: ze(e, "filterTreeNode")
    }), P = function(ee) {
      if (ee) {
        if (e.treeNodeLabelProp)
          return ee[e.treeNodeLabelProp];
        for (var re = c.value._title, ce = 0; ce < re.length; ce += 1) {
          var Ee = ee[re[ce]];
          if (Ee !== void 0)
            return Ee;
        }
      }
    }, T = function(ee) {
      var re = Gb(ee);
      return re.map(function(ce) {
        return QR(ce) ? {
          value: ce
        } : ce;
      });
    }, O = function(ee) {
      var re = T(ee);
      return re.map(function(ce) {
        var Ee = ce.label, Te = ce.value, we = ce.halfChecked, be, Ae = x.value.get(Te);
        return Ae && (Ee = Ee != null ? Ee : P(Ae.node), be = Ae.node.disabled), {
          label: Ee,
          value: Te,
          halfChecked: we,
          disabled: be
        };
      });
    }, D = Rt(e.defaultValue, {
      value: ze(e, "value")
    }), V = De(D, 2), K = V[0], R = V[1], E = F(function() {
      return T(K.value);
    }), M = Xe([]), N = Xe([]);
    Ue(function() {
      var se = [], ee = [];
      E.value.forEach(function(re) {
        re.halfChecked ? ee.push(re) : se.push(re);
      }), M.value = se, N.value = ee;
    });
    var _ = F(function() {
      return M.value.map(function(se) {
        return se.value;
      });
    }), I = td(C), A = I.maxLevel, B = I.levelEntities, W = qR(M, N, l, C, A, B), U = De(W, 2), z = U[0], L = U[1], $ = F(function() {
      var se = Nh(z.value, e.showCheckedStrategy, C.value, c.value), ee = se.map(function(Te) {
        var we, be, Ae;
        return (Ae = (be = (we = C.value[Te]) === null || we === void 0 ? void 0 : we.node) === null || be === void 0 ? void 0 : be[c.value.value]) !== null && Ae !== void 0 ? Ae : Te;
      }), re = ee.map(function(Te) {
        var we = M.value.find(function(be) {
          return be.value === Te;
        });
        return {
          value: Te,
          label: we == null ? void 0 : we.label
        };
      }), ce = O(re), Ee = ce[0];
      return !d.value && Ee && Sc(Ee.value) && Sc(Ee.label) ? [] : ce.map(function(Te) {
        var we;
        return k(k({}, Te), {
          label: (we = Te.label) !== null && we !== void 0 ? we : Te.value
        });
      });
    }), q = UR($), H = De(q, 1), J = H[0], Z = function(ee, re, ce) {
      var Ee = O(ee);
      if (R(Ee), e.autoClearSearchValue && p(""), e.onChange) {
        var Te = ee;
        if (l.value) {
          var we = Nh(ee, e.showCheckedStrategy, C.value, c.value);
          Te = we.map(function(at) {
            var rt = x.value.get(at);
            return rt ? rt.node[c.value.value] : at;
          });
        }
        var be = re || {
          triggerValue: void 0,
          selected: void 0
        }, Ae = be.triggerValue, je = be.selected, We = Te;
        if (e.treeCheckStrictly) {
          var et = N.value.filter(function(at) {
            return !Te.includes(at.value);
          });
          We = [].concat(Ie(We), Ie(et));
        }
        var Ge = O(We), it = {
          preValue: M.value,
          triggerValue: Ae
        }, nt = !0;
        (e.treeCheckStrictly || ce === "selection" && !je) && (nt = !1), HR(it, Ae, ee, h.value, nt, c.value), u.value ? it.checked = je : it.selected = je;
        var lt = s.value ? Ge : Ge.map(function(at) {
          return at.value;
        });
        e.onChange(d.value ? lt : lt[0], s.value ? null : Ge.map(function(at) {
          return at.label;
        }), it);
      }
    }, ae = function(ee, re) {
      var ce = re.selected, Ee = re.source, Te, we, be, Ae = Ot(C.value), je = Ot(x.value), We = Ae[ee], et = We == null ? void 0 : We.node, Ge = (Te = et == null ? void 0 : et[c.value.value]) !== null && Te !== void 0 ? Te : ee;
      if (!d.value)
        Z([Ge], {
          selected: !0,
          triggerValue: Ge
        }, "option");
      else {
        var it = ce ? [].concat(Ie(_.value), [Ge]) : z.value.filter(function(wt) {
          return wt !== Ge;
        });
        if (l.value) {
          var nt = S(it), lt = nt.missingRawValues, at = nt.existRawValues, rt = at.map(function(wt) {
            return je.get(wt).key;
          }), yt;
          if (ce) {
            var It = Vn(rt, !0, Ae, A.value, B.value);
            yt = It.checkedKeys;
          } else {
            var Dt = Vn(rt, {
              checked: !1,
              halfCheckedKeys: L.value
            }, Ae, A.value, B.value);
            yt = Dt.checkedKeys;
          }
          it = [].concat(Ie(lt), Ie(yt.map(function(wt) {
            return Ae[wt].node[c.value.value];
          })));
        }
        Z(it, {
          selected: ce,
          triggerValue: Ge
        }, Ee || "option");
      }
      ce || !d.value ? (we = e.onSelect) === null || we === void 0 || we.call(e, Ge, xc(et)) : (be = e.onDeselect) === null || be === void 0 || be.call(e, Ge, xc(et));
    }, ue = function(ee) {
      if (e.onDropdownVisibleChange) {
        var re = {};
        Object.defineProperty(re, "documentClickClose", {
          get: function() {
            return Ze(!1, "Second param of `onDropdownVisibleChange` has been removed."), !1;
          }
        }), e.onDropdownVisibleChange(ee, re);
      }
    }, ne = function(ee, re) {
      var ce = ee.map(function(Ee) {
        return Ee.value;
      });
      if (re.type === "clear") {
        Z(ce, {}, "selection");
        return;
      }
      re.values.length && ae(re.values[0].value, {
        selected: !1,
        source: "selection"
      });
    }, X = Tc(e), te = X.treeNodeFilterProp, me = X.loadData, Oe = X.treeLoadedKeys, ke = X.onTreeLoad, Me = X.treeDefaultExpandAll, Pe = X.treeExpandedKeys, fe = X.treeDefaultExpandedKeys, le = X.onTreeExpand, ie = X.virtual, de = X.listHeight, ye = X.listItemHeight, _e = X.treeLine, Be = X.treeIcon, Ve = X.showTreeIcon, he = X.switcherIcon, oe = X.treeMotion, ve = X.customSlots;
    sT(wi({
      checkable: u,
      loadData: me,
      treeLoadedKeys: Oe,
      onTreeLoad: ke,
      checkedKeys: z,
      halfCheckedKeys: L,
      treeDefaultExpandAll: Me,
      treeExpandedKeys: Pe,
      treeDefaultExpandedKeys: fe,
      onTreeExpand: le,
      treeIcon: Be,
      treeMotion: oe,
      showTreeIcon: Ve,
      switcherIcon: he,
      treeLine: _e,
      treeNodeFilterProp: te,
      keyEntities: C,
      customSlots: ve
    })), FR(wi({
      virtual: ie,
      listHeight: de,
      listItemHeight: ye,
      treeData: b,
      fieldNames: c,
      onSelect: ae
    }));
    var Se = G();
    return a({
      focus: function() {
        var ee;
        (ee = Se.value) === null || ee === void 0 || ee.focus();
      },
      blur: function() {
        var ee;
        (ee = Se.value) === null || ee === void 0 || ee.blur();
      },
      scrollTo: function(ee) {
        var re;
        (re = Se.value) === null || re === void 0 || re.scrollTo(ee);
      }
    }), function() {
      var se, ee = pt(e, [
        "id",
        "prefixCls",
        "value",
        "defaultValue",
        "onChange",
        "onSelect",
        "onDeselect",
        "searchValue",
        "inputValue",
        "onSearch",
        "autoClearSearchValue",
        "filterTreeNode",
        "treeNodeFilterProp",
        "showCheckedStrategy",
        "treeNodeLabelProp",
        "multiple",
        "treeCheckable",
        "treeCheckStrictly",
        "labelInValue",
        "fieldNames",
        "treeDataSimpleMode",
        "treeData",
        "children",
        "loadData",
        "treeLoadedKeys",
        "onTreeLoad",
        "treeDefaultExpandAll",
        "treeExpandedKeys",
        "treeDefaultExpandedKeys",
        "onTreeExpand",
        "virtual",
        "listHeight",
        "listItemHeight",
        "onDropdownVisibleChange",
        "treeLine",
        "treeIcon",
        "showTreeIcon",
        "switcherIcon",
        "treeMotion"
      ]);
      return m(cs, Y(Y(Y({
        ref: Se
      }, r), ee), {}, {
        id: i,
        prefixCls: e.prefixCls,
        mode: d.value ? "multiple" : void 0,
        displayValues: J.value,
        onDisplayValuesChange: ne,
        searchValue: g.value,
        onSearch: y,
        OptionList: LR,
        emptyOptions: !h.value.length,
        onDropdownVisibleChange: ue,
        tagRender: e.tagRender || o.tagRender,
        dropdownMatchSelectWidth: (se = e.dropdownMatchSelectWidth) !== null && se !== void 0 ? se : !0
      }), o);
    };
  }
});
var Mh = function(e, n, r) {
  return r !== void 0 ? r : "".concat(e, "-").concat(n);
};
function ZR() {
  return k(k({}, pt(Jb(), ["showTreeIcon", "treeMotion", "inputIcon", "getInputElement", "treeLine", "customSlots"])), {
    suffixIcon: Q.any,
    size: {
      type: String
    },
    bordered: {
      type: Boolean,
      default: void 0
    },
    treeLine: {
      type: [Boolean, Object],
      default: void 0
    },
    replaceFields: {
      type: Object
    },
    "onUpdate:value": {
      type: Function
    },
    "onUpdate:treeExpandedKeys": {
      type: Function
    },
    "onUpdate:searchValue": {
      type: Function
    }
  });
}
var du = pe({
  name: "ATreeSelect",
  inheritAttrs: !1,
  props: kt(ZR(), {
    choiceTransitionName: "",
    listHeight: 256,
    treeIcon: !1,
    listItemHeight: 26,
    bordered: !0
  }),
  slots: ["title", "titleRender", "placeholder", "maxTagPlaceholder", "treeIcon", "switcherIcon", "notFoundContent"],
  setup: function(e, n) {
    var r = n.attrs, a = n.slots, o = n.expose, i = n.emit;
    Ze(!(e.treeData === void 0 && a.default), "`children` of TreeSelect is deprecated. Please use `treeData` instead."), Ue(function() {
      mt(e.multiple !== !1 || !e.treeCheckable, "TreeSelect", "`multiple` will always be `true` when `treeCheckable` is true"), mt(e.replaceFields === void 0, "TreeSelect", "`replaceFields` is deprecated, please use fieldNames instead");
    });
    var l = jt(), u = Qe("select", e), s = u.prefixCls, d = u.renderEmpty, c = u.direction, v = u.virtual, f = u.dropdownMatchSelectWidth, g = u.size, p = u.getPopupContainer, y = u.getPrefixCls, h = F(function() {
      return y();
    }), w = F(function() {
      return Mh(h.value, "slide-up", e.transitionName);
    }), C = F(function() {
      return Mh(h.value, "", e.choiceTransitionName);
    }), x = F(function() {
      return y("select-tree", e.prefixCls);
    }), S = F(function() {
      return y("tree-select", e.prefixCls);
    }), b = F(function() {
      return ge(e.dropdownClassName, "".concat(S.value, "-dropdown"), j({}, "".concat(S.value, "-dropdown-rtl"), c.value === "rtl"));
    }), P = F(function() {
      return !!(e.treeCheckable || e.multiple);
    }), T = G();
    o({
      focus: function() {
        var E, M;
        (M = (E = T.value).focus) === null || M === void 0 || M.call(E);
      },
      blur: function() {
        var E, M;
        (M = (E = T.value).blur) === null || M === void 0 || M.call(E);
      }
    });
    var O = function() {
      for (var E = arguments.length, M = new Array(E), N = 0; N < E; N++)
        M[N] = arguments[N];
      i("update:value", M[0]), i.apply(void 0, ["change"].concat(M)), l.onFieldChange();
    }, D = function(E) {
      i("update:treeExpandedKeys", E), i("treeExpand", E);
    }, V = function(E) {
      i("update:searchValue", E), i("search", E);
    }, K = function(E) {
      i("blur", E), l.onFieldBlur();
    };
    return function() {
      var R, E, M, N = e.notFoundContent, _ = N === void 0 ? (E = a.notFoundContent) === null || E === void 0 ? void 0 : E.call(a) : N, I = e.prefixCls, A = e.bordered, B = e.listHeight, W = e.listItemHeight, U = e.multiple, z = e.treeIcon, L = e.treeLine, $ = e.switcherIcon, q = $ === void 0 ? (M = a.switcherIcon) === null || M === void 0 ? void 0 : M.call(a) : $, H = e.fieldNames, J = H === void 0 ? e.replaceFields : H, Z = e.id, ae = Z === void 0 ? l.id.value : Z, ue = ws(k(k({}, e), {
        multiple: P.value,
        prefixCls: s.value
      }), a), ne = ue.suffixIcon, X = ue.removeIcon, te = ue.clearIcon, me;
      _ !== void 0 ? me = _ : me = d.value("Select");
      var Oe = pt(e, ["suffixIcon", "itemIcon", "removeIcon", "clearIcon", "switcherIcon", "bordered", "onUpdate:value", "onUpdate:treeExpandedKeys", "onUpdate:searchValue"]), ke = ge(!I && S.value, (R = {}, j(R, "".concat(s.value, "-lg"), g.value === "large"), j(R, "".concat(s.value, "-sm"), g.value === "small"), j(R, "".concat(s.value, "-rtl"), c.value === "rtl"), j(R, "".concat(s.value, "-borderless"), !A), R), r.class), Me = {};
      return e.treeData === void 0 && a.default && (Me.children = Kt(a.default())), m(JR, Y(Y(Y(Y({}, r), Oe), {}, {
        virtual: v.value,
        dropdownMatchSelectWidth: f.value,
        id: ae,
        fieldNames: J,
        ref: T,
        prefixCls: s.value,
        class: ke,
        listHeight: B,
        listItemHeight: W,
        treeLine: !!L,
        inputIcon: ne,
        multiple: U,
        removeIcon: X,
        clearIcon: te,
        switcherIcon: function(fe) {
          return vR(x.value, q, L, fe);
        },
        showTreeIcon: z,
        notFoundContent: me,
        getPopupContainer: p.value,
        treeMotion: null,
        dropdownClassName: b.value,
        choiceTransitionName: C.value,
        onChange: O,
        onBlur: K,
        onSearch: V,
        onTreeExpand: D
      }, Me), {}, {
        transitionName: w.value,
        customSlots: k(k({}, a), {
          treeCheckable: function() {
            return m("span", {
              class: "".concat(s.value, "-tree-checkbox-inner")
            }, null);
          }
        }),
        maxTagPlaceholder: e.maxTagPlaceholder || a.maxTagPlaceholder
      }), k(k({}, a), {
        treeCheckable: function() {
          return m("span", {
            class: "".concat(s.value, "-tree-checkbox-inner")
          }, null);
        }
      }));
    };
  }
}), Ah = Id;
const e4 = k(du, {
  TreeNode: Id,
  SHOW_ALL: jR,
  SHOW_PARENT: Qb,
  SHOW_CHILD: Td,
  install: function(e) {
    return e.component(du.name, du), e.component(Ah.displayName, Ah), e;
  }
});
var fu = function() {
  return {
    format: String,
    showNow: {
      type: Boolean,
      default: void 0
    },
    showHour: {
      type: Boolean,
      default: void 0
    },
    showMinute: {
      type: Boolean,
      default: void 0
    },
    showSecond: {
      type: Boolean,
      default: void 0
    },
    use12Hours: {
      type: Boolean,
      default: void 0
    },
    hourStep: Number,
    minuteStep: Number,
    secondStep: Number,
    hideDisabledOptions: {
      type: Boolean,
      default: void 0
    },
    popupClassName: String
  };
};
function t4(t) {
  var e = $b(t, k(k({}, fu()), {
    order: {
      type: Boolean,
      default: !0
    }
  })), n = e.TimePicker, r = e.RangePicker, a = pe({
    name: "ATimePicker",
    inheritAttrs: !1,
    props: k(k(k(k({}, Mi()), Db()), fu()), {
      addon: {
        type: Function
      }
    }),
    slot: ["addon", "renderExtraFooter", "suffixIcon", "clearIcon"],
    setup: function(l, u) {
      var s = u.slots, d = u.expose, c = u.emit, v = u.attrs, f = jt();
      mt(!(s.addon || l.addon), "TimePicker", "`addon` is deprecated. Please use `v-slot:renderExtraFooter` instead.");
      var g = G();
      d({
        focus: function() {
          var S;
          (S = g.value) === null || S === void 0 || S.focus();
        },
        blur: function() {
          var S;
          (S = g.value) === null || S === void 0 || S.blur();
        }
      });
      var p = function(S, b) {
        c("update:value", S), c("change", S, b), f.onFieldChange();
      }, y = function(S) {
        c("update:open", S), c("openChange", S);
      }, h = function(S) {
        c("focus", S);
      }, w = function(S) {
        c("blur", S), f.onFieldBlur();
      }, C = function(S) {
        c("ok", S);
      };
      return function() {
        var x = l.id, S = x === void 0 ? f.id.value : x;
        return m(n, Y(Y(Y({}, v), pt(l, ["onUpdate:value", "onUpdate:open"])), {}, {
          id: S,
          dropdownClassName: l.popupClassName,
          mode: void 0,
          ref: g,
          renderExtraFooter: l.addon || s.addon || l.renderExtraFooter || s.renderExtraFooter,
          onChange: p,
          onOpenChange: y,
          onFocus: h,
          onBlur: w,
          onOk: C
        }), s);
      };
    }
  }), o = pe({
    name: "ATimeRangePicker",
    inheritAttrs: !1,
    props: k(k(k(k({}, Mi()), Fb()), fu()), {
      order: {
        type: Boolean,
        default: !0
      }
    }),
    slot: ["renderExtraFooter", "suffixIcon", "clearIcon"],
    setup: function(l, u) {
      var s = u.slots, d = u.expose, c = u.emit, v = u.attrs, f = G(), g = jt();
      d({
        focus: function() {
          var P;
          (P = f.value) === null || P === void 0 || P.focus();
        },
        blur: function() {
          var P;
          (P = f.value) === null || P === void 0 || P.blur();
        }
      });
      var p = function(P, T) {
        c("update:value", P), c("change", P, T), g.onFieldChange();
      }, y = function(P) {
        c("update:open", P), c("openChange", P);
      }, h = function(P) {
        c("focus", P);
      }, w = function(P) {
        c("blur", P), g.onFieldBlur();
      }, C = function(P, T) {
        c("panelChange", P, T);
      }, x = function(P) {
        c("ok", P);
      }, S = function(P, T, O) {
        c("calendarChange", P, T, O);
      };
      return function() {
        var b = l.id, P = b === void 0 ? g.id.value : b;
        return m(r, Y(Y(Y({}, v), pt(l, ["onUpdate:open", "onUpdate:value"])), {}, {
          id: P,
          dropdownClassName: l.popupClassName,
          picker: "time",
          mode: void 0,
          ref: f,
          onChange: p,
          onOpenChange: y,
          onFocus: h,
          onBlur: w,
          onPanelChange: C,
          onOk: x,
          onCalendarChange: S
        }), s);
      };
    }
  });
  return {
    TimePicker: a,
    TimeRangePicker: o
  };
}
var Zb = t4(Iy), Xo = Zb.TimePicker, vu = Zb.TimeRangePicker;
const n4 = k(Xo, {
  TimePicker: Xo,
  TimeRangePicker: vu,
  install: function(e) {
    return e.component(Xo.name, Xo), e.component(vu.name, vu), e;
  }
});
function r4(t, e) {
  var n = "cannot ".concat(t.method, " ").concat(t.action, " ").concat(e.status, "'"), r = new Error(n);
  return r.status = e.status, r.method = t.method, r.url = t.action, r;
}
function Dh(t) {
  var e = t.responseText || t.response;
  if (!e)
    return e;
  try {
    return JSON.parse(e);
  } catch {
    return e;
  }
}
function a4(t) {
  var e = new XMLHttpRequest();
  t.onProgress && e.upload && (e.upload.onprogress = function(o) {
    o.total > 0 && (o.percent = o.loaded / o.total * 100), t.onProgress(o);
  });
  var n = new FormData();
  t.data && Object.keys(t.data).forEach(function(a) {
    var o = t.data[a];
    if (Array.isArray(o)) {
      o.forEach(function(i) {
        n.append("".concat(a, "[]"), i);
      });
      return;
    }
    n.append(a, o);
  }), t.file instanceof Blob ? n.append(t.filename, t.file, t.file.name) : n.append(t.filename, t.file), e.onerror = function(o) {
    t.onError(o);
  }, e.onload = function() {
    return e.status < 200 || e.status >= 300 ? t.onError(r4(t, e), Dh(e)) : t.onSuccess(Dh(e), e);
  }, e.open(t.method, t.action, !0), t.withCredentials && "withCredentials" in e && (e.withCredentials = !0);
  var r = t.headers || {};
  return r["X-Requested-With"] !== null && e.setRequestHeader("X-Requested-With", "XMLHttpRequest"), Object.keys(r).forEach(function(a) {
    r[a] !== null && e.setRequestHeader(a, r[a]);
  }), e.send(n), {
    abort: function() {
      e.abort();
    }
  };
}
var o4 = +new Date(), i4 = 0;
function pu() {
  return "vc-upload-".concat(o4, "-").concat(++i4);
}
const hu = function(t, e) {
  if (t && e) {
    var n = Array.isArray(e) ? e : e.split(","), r = t.name || "", a = t.type || "", o = a.replace(/\/.*$/, "");
    return n.some(function(i) {
      var l = i.trim();
      if (/^\*(\/\*)?$/.test(i))
        return !0;
      if (l.charAt(0) === ".") {
        var u = r.toLowerCase(), s = l.toLowerCase(), d = [s];
        return (s === ".jpg" || s === ".jpeg") && (d = [".jpg", ".jpeg"]), d.some(function(c) {
          return u.endsWith(c);
        });
      }
      return /\/\*$/.test(l) ? o === l.replace(/\/.*$/, "") : a === l ? !0 : /^\w+$/.test(l) ? (Ze(!1, "Upload takes an invalidate 'accept' type '".concat(l, "'.Skip for check.")), !0) : !1;
    });
  }
  return !0;
};
function l4(t, e) {
  var n = t.createReader(), r = [];
  function a() {
    n.readEntries(function(o) {
      var i = Array.prototype.slice.apply(o);
      r = r.concat(i);
      var l = !i.length;
      l ? e(r) : a();
    });
  }
  a();
}
var u4 = function(e, n, r) {
  var a = function o(i, l) {
    i.path = l || "", i.isFile ? i.file(function(u) {
      r(u) && (i.fullPath && !u.webkitRelativePath && (Object.defineProperties(u, {
        webkitRelativePath: {
          writable: !0
        }
      }), u.webkitRelativePath = i.fullPath.replace(/^\//, ""), Object.defineProperties(u, {
        webkitRelativePath: {
          writable: !1
        }
      })), n([u]));
    }) : i.isDirectory && l4(i, function(u) {
      u.forEach(function(s) {
        o(s, "".concat(l).concat(i.name, "/"));
      });
    });
  };
  e.forEach(function(o) {
    a(o.webkitGetAsEntry());
  });
};
const c4 = u4;
var e0 = function() {
  return {
    capture: [Boolean, String],
    multipart: {
      type: Boolean,
      default: void 0
    },
    name: String,
    disabled: {
      type: Boolean,
      default: void 0
    },
    componentTag: String,
    action: [String, Function],
    method: String,
    directory: {
      type: Boolean,
      default: void 0
    },
    data: [Object, Function],
    headers: Object,
    accept: String,
    multiple: {
      type: Boolean,
      default: void 0
    },
    onBatchStart: Function,
    onReject: Function,
    onStart: Function,
    onError: Function,
    onSuccess: Function,
    onProgress: Function,
    beforeUpload: Function,
    customRequest: Function,
    withCredentials: {
      type: Boolean,
      default: void 0
    },
    openFileDialogOnClick: {
      type: Boolean,
      default: void 0
    },
    prefixCls: String,
    id: String,
    onMouseenter: Function,
    onMouseleave: Function,
    onClick: Function
  };
};
function s4(t, e, n, r) {
  for (var a = -1, o = t == null ? 0 : t.length; ++a < o; ) {
    var i = t[a];
    e(r, i, n(i), t);
  }
  return r;
}
function d4(t) {
  return function(e, n, r) {
    for (var a = -1, o = Object(e), i = r(e), l = i.length; l--; ) {
      var u = i[t ? l : ++a];
      if (n(o[u], u, o) === !1)
        break;
    }
    return e;
  };
}
var f4 = d4();
const v4 = f4;
function p4(t, e) {
  return t && v4(t, e, ma);
}
function h4(t, e) {
  return function(n, r) {
    if (n == null)
      return n;
    if (!fo(n))
      return t(n, r);
    for (var a = n.length, o = e ? a : -1, i = Object(n); (e ? o-- : ++o < a) && r(i[o], o, i) !== !1; )
      ;
    return n;
  };
}
var g4 = h4(p4);
const m4 = g4;
function y4(t, e, n, r) {
  return m4(t, function(a, o, i) {
    e(r, a, n(a), i);
  }), r;
}
function b4(t, e) {
  return function(n, r) {
    var a = cn(n) ? s4 : y4, o = e ? e() : {};
    return a(n, t, od(r), o);
  };
}
var C4 = b4(function(t, e, n) {
  t[n ? 0 : 1].push(e);
}, function() {
  return [[], []];
});
const w4 = C4;
var S4 = globalThis && globalThis.__awaiter || function(t, e, n, r) {
  function a(o) {
    return o instanceof n ? o : new n(function(i) {
      i(o);
    });
  }
  return new (n || (n = Promise))(function(o, i) {
    function l(d) {
      try {
        s(r.next(d));
      } catch (c) {
        i(c);
      }
    }
    function u(d) {
      try {
        s(r.throw(d));
      } catch (c) {
        i(c);
      }
    }
    function s(d) {
      d.done ? o(d.value) : a(d.value).then(l, u);
    }
    s((r = r.apply(t, e || [])).next());
  });
}, x4 = globalThis && globalThis.__rest || function(t, e) {
  var n = {};
  for (var r in t)
    Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(t); a < r.length; a++)
      e.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[a]) && (n[r[a]] = t[r[a]]);
  return n;
};
const P4 = pe({
  name: "AjaxUploader",
  inheritAttrs: !1,
  props: e0(),
  setup: function(e, n) {
    var r = this, a = n.slots, o = n.attrs, i = n.expose, l = G(pu()), u = {}, s = G(), d = !1, c = function(S, b) {
      return S4(r, void 0, void 0, /* @__PURE__ */ Ut.mark(function P() {
        var T, O, D, V, K, R, E, M, N;
        return Ut.wrap(function(I) {
          for (; ; )
            switch (I.prev = I.next) {
              case 0:
                if (T = e.beforeUpload, O = S, !T) {
                  I.next = 14;
                  break;
                }
                return I.prev = 3, I.next = 6, T(S, b);
              case 6:
                O = I.sent, I.next = 12;
                break;
              case 9:
                I.prev = 9, I.t0 = I.catch(3), O = !1;
              case 12:
                if (O !== !1) {
                  I.next = 14;
                  break;
                }
                return I.abrupt("return", {
                  origin: S,
                  parsedFile: null,
                  action: null,
                  data: null
                });
              case 14:
                if (D = e.action, typeof D != "function") {
                  I.next = 21;
                  break;
                }
                return I.next = 18, D(S);
              case 18:
                V = I.sent, I.next = 22;
                break;
              case 21:
                V = D;
              case 22:
                if (K = e.data, typeof K != "function") {
                  I.next = 29;
                  break;
                }
                return I.next = 26, K(S);
              case 26:
                R = I.sent, I.next = 30;
                break;
              case 29:
                R = K;
              case 30:
                return E = (Le(O) === "object" || typeof O == "string") && O ? O : S, E instanceof File ? M = E : M = new File([E], S.name, {
                  type: S.type
                }), N = M, N.uid = S.uid, I.abrupt("return", {
                  origin: S,
                  data: R,
                  parsedFile: N,
                  action: V
                });
              case 35:
              case "end":
                return I.stop();
            }
        }, P, null, [[3, 9]]);
      }));
    }, v = function(S) {
      var b = S.data, P = S.origin, T = S.action, O = S.parsedFile;
      if (!!d) {
        var D = e.onStart, V = e.customRequest, K = e.name, R = e.headers, E = e.withCredentials, M = e.method, N = P.uid, _ = V || a4, I = {
          action: T,
          filename: K,
          data: b,
          file: O,
          headers: R,
          withCredentials: E,
          method: M || "post",
          onProgress: function(B) {
            var W = e.onProgress;
            W == null || W(B, O);
          },
          onSuccess: function(B, W) {
            var U = e.onSuccess;
            U == null || U(B, O, W), delete u[N];
          },
          onError: function(B, W) {
            var U = e.onError;
            U == null || U(B, W, O), delete u[N];
          }
        };
        D(P), u[N] = _(I);
      }
    }, f = function() {
      l.value = pu();
    }, g = function(S) {
      if (S) {
        var b = S.uid ? S.uid : S;
        u[b] && u[b].abort && u[b].abort(), delete u[b];
      } else
        Object.keys(u).forEach(function(P) {
          u[P] && u[P].abort && u[P].abort(), delete u[P];
        });
    };
    dt(function() {
      d = !0;
    }), ht(function() {
      d = !1, g();
    });
    var p = function(S) {
      var b = Ie(S), P = b.map(function(T) {
        return T.uid = pu(), c(T, b);
      });
      Promise.all(P).then(function(T) {
        var O = e.onBatchStart;
        O == null || O(T.map(function(D) {
          var V = D.origin, K = D.parsedFile;
          return {
            file: V,
            parsedFile: K
          };
        })), T.filter(function(D) {
          return D.parsedFile !== null;
        }).forEach(function(D) {
          v(D);
        });
      });
    }, y = function(S) {
      var b = e.accept, P = e.directory, T = S.target.files, O = Ie(T).filter(function(D) {
        return !P || hu(D, b);
      });
      p(O), f();
    }, h = function(S) {
      var b = s.value;
      if (!!b) {
        var P = e.onClick;
        b.click(), P && P(S);
      }
    }, w = function(S) {
      S.key === "Enter" && h(S);
    }, C = function(S) {
      var b = e.multiple;
      if (S.preventDefault(), S.type !== "dragover")
        if (e.directory)
          c4(Array.prototype.slice.call(S.dataTransfer.items), p, function(D) {
            return hu(D, e.accept);
          });
        else {
          var P = w4(Array.prototype.slice.call(S.dataTransfer.files), function(D) {
            return hu(D, e.accept);
          }), T = P[0], O = P[1];
          b === !1 && (T = T.slice(0, 1)), p(T), O.length && e.onReject && e.onReject(O);
        }
    };
    return i({
      abort: g
    }), function() {
      var x, S, b = e.componentTag, P = e.prefixCls, T = e.disabled, O = e.id, D = e.multiple, V = e.accept, K = e.capture, R = e.directory, E = e.openFileDialogOnClick, M = e.onMouseenter, N = e.onMouseleave, _ = x4(e, ["componentTag", "prefixCls", "disabled", "id", "multiple", "accept", "capture", "directory", "openFileDialogOnClick", "onMouseenter", "onMouseleave"]), I = (x = {}, j(x, P, !0), j(x, "".concat(P, "-disabled"), T), j(x, o.class, !!o.class), x), A = R ? {
        directory: "directory",
        webkitdirectory: "webkitdirectory"
      } : {}, B = T ? {} : {
        onClick: E ? h : function() {
        },
        onKeydown: E ? w : function() {
        },
        onMouseenter: M,
        onMouseleave: N,
        onDrop: C,
        onDragover: C,
        tabindex: "0"
      };
      return m(b, Y(Y({}, B), {}, {
        class: I,
        role: "button",
        style: o.style
      }), {
        default: function() {
          return [m("input", Y(Y(Y({}, ya(_, {
            aria: !0,
            data: !0
          })), {}, {
            id: O,
            type: "file",
            ref: s,
            onClick: function(z) {
              return z.stopPropagation();
            },
            key: l.value,
            style: {
              display: "none"
            },
            accept: V
          }, A), {}, {
            multiple: D,
            onChange: y
          }, K != null ? {
            capture: K
          } : {}), null), (S = a.default) === null || S === void 0 ? void 0 : S.call(a)];
        }
      });
    };
  }
});
function gu() {
}
const Fh = pe({
  name: "Upload",
  inheritAttrs: !1,
  props: kt(e0(), {
    componentTag: "span",
    prefixCls: "rc-upload",
    data: {},
    headers: {},
    name: "file",
    multipart: !1,
    onStart: gu,
    onError: gu,
    onSuccess: gu,
    multiple: !1,
    beforeUpload: null,
    customRequest: null,
    withCredentials: !1,
    openFileDialogOnClick: !0
  }),
  setup: function(e, n) {
    var r = n.slots, a = n.attrs, o = n.expose, i = G(), l = function(s) {
      var d;
      (d = i.value) === null || d === void 0 || d.abort(s);
    };
    return o({
      abort: l
    }), function() {
      return m(P4, Y(Y(Y({}, e), a), {}, {
        ref: i
      }), r);
    };
  }
});
var O4 = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M779.3 196.6c-94.2-94.2-247.6-94.2-341.7 0l-261 260.8c-1.7 1.7-2.6 4-2.6 6.4s.9 4.7 2.6 6.4l36.9 36.9a9 9 0 0012.7 0l261-260.8c32.4-32.4 75.5-50.2 121.3-50.2s88.9 17.8 121.2 50.2c32.4 32.4 50.2 75.5 50.2 121.2 0 45.8-17.8 88.8-50.2 121.2l-266 265.9-43.1 43.1c-40.3 40.3-105.8 40.3-146.1 0-19.5-19.5-30.2-45.4-30.2-73s10.7-53.5 30.2-73l263.9-263.8c6.7-6.6 15.5-10.3 24.9-10.3h.1c9.4 0 18.1 3.7 24.7 10.3 6.7 6.7 10.3 15.5 10.3 24.9 0 9.3-3.7 18.1-10.3 24.7L372.4 653c-1.7 1.7-2.6 4-2.6 6.4s.9 4.7 2.6 6.4l36.9 36.9a9 9 0 0012.7 0l215.6-215.6c19.9-19.9 30.8-46.3 30.8-74.4s-11-54.6-30.8-74.4c-41.1-41.1-107.9-41-149 0L463 364 224.8 602.1A172.22 172.22 0 00174 724.8c0 46.3 18.1 89.8 50.8 122.5 33.9 33.8 78.3 50.7 122.7 50.7 44.4 0 88.8-16.9 122.6-50.7l309.2-309C824.8 492.7 850 432 850 367.5c.1-64.6-25.1-125.3-70.7-170.9z" } }] }, name: "paper-clip", theme: "outlined" };
const T4 = O4;
function Rh(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? Object(arguments[e]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(a) {
      return Object.getOwnPropertyDescriptor(n, a).enumerable;
    }))), r.forEach(function(a) {
      I4(t, a, n[a]);
    });
  }
  return t;
}
function I4(t, e, n) {
  return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
var kd = function(e, n) {
  var r = Rh({}, e, n.attrs);
  return m(st, Rh({}, r, {
    icon: T4
  }), null);
};
kd.displayName = "PaperClipOutlined";
kd.inheritAttrs = !1;
const k4 = kd;
var _4 = { icon: function(e, n) {
  return { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 632H136v-39.9l138.5-164.3 150.1 178L658.1 489 888 761.6V792zm0-129.8L664.2 396.8c-3.2-3.8-9-3.8-12.2 0L424.6 666.4l-144-170.7c-3.2-3.8-9-3.8-12.2 0L136 652.7V232h752v430.2z", fill: e } }, { tag: "path", attrs: { d: "M424.6 765.8l-150.1-178L136 752.1V792h752v-30.4L658.1 489z", fill: n } }, { tag: "path", attrs: { d: "M136 652.7l132.4-157c3.2-3.8 9-3.8 12.2 0l144 170.7L652 396.8c3.2-3.8 9-3.8 12.2 0L888 662.2V232H136v420.7zM304 280a88 88 0 110 176 88 88 0 010-176z", fill: n } }, { tag: "path", attrs: { d: "M276 368a28 28 0 1056 0 28 28 0 10-56 0z", fill: n } }, { tag: "path", attrs: { d: "M304 456a88 88 0 100-176 88 88 0 000 176zm0-116c15.5 0 28 12.5 28 28s-12.5 28-28 28-28-12.5-28-28 12.5-28 28-28z", fill: e } }] };
}, name: "picture", theme: "twotone" };
const E4 = _4;
function $h(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? Object(arguments[e]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(a) {
      return Object.getOwnPropertyDescriptor(n, a).enumerable;
    }))), r.forEach(function(a) {
      N4(t, a, n[a]);
    });
  }
  return t;
}
function N4(t, e, n) {
  return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
var _d = function(e, n) {
  var r = $h({}, e, n.attrs);
  return m(st, $h({}, r, {
    icon: E4
  }), null);
};
_d.displayName = "PictureTwoTone";
_d.inheritAttrs = !1;
const M4 = _d;
var A4 = { icon: function(e, n) {
  return { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M534 352V136H232v752h560V394H576a42 42 0 01-42-42z", fill: n } }, { tag: "path", attrs: { d: "M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM602 137.8L790.2 326H602V137.8zM792 888H232V136h302v216a42 42 0 0042 42h216v494z", fill: e } }] };
}, name: "file", theme: "twotone" };
const D4 = A4;
function Lh(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? Object(arguments[e]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(a) {
      return Object.getOwnPropertyDescriptor(n, a).enumerable;
    }))), r.forEach(function(a) {
      F4(t, a, n[a]);
    });
  }
  return t;
}
function F4(t, e, n) {
  return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
var Ed = function(e, n) {
  var r = Lh({}, e, n.attrs);
  return m(st, Lh({}, r, {
    icon: D4
  }), null);
};
Ed.displayName = "FileTwoTone";
Ed.inheritAttrs = !1;
const R4 = Ed;
function t0() {
  return {
    capture: [Boolean, String],
    type: String,
    name: String,
    defaultFileList: Array,
    fileList: Array,
    action: [String, Function],
    directory: {
      type: Boolean,
      default: void 0
    },
    data: [Object, Function],
    method: String,
    headers: Object,
    showUploadList: {
      type: [Boolean, Object],
      default: void 0
    },
    multiple: {
      type: Boolean,
      default: void 0
    },
    accept: String,
    beforeUpload: Function,
    onChange: Function,
    "onUpdate:fileList": Function,
    onDrop: Function,
    listType: String,
    onPreview: Function,
    onDownload: Function,
    onReject: Function,
    onRemove: Function,
    remove: Function,
    supportServerRender: {
      type: Boolean,
      default: void 0
    },
    disabled: {
      type: Boolean,
      default: void 0
    },
    prefixCls: String,
    customRequest: Function,
    withCredentials: {
      type: Boolean,
      default: void 0
    },
    openFileDialogOnClick: {
      type: Boolean,
      default: void 0
    },
    locale: {
      type: Object,
      default: void 0
    },
    id: String,
    previewFile: Function,
    transformFile: Function,
    iconRender: Function,
    isImageUrl: Function,
    progress: Object,
    itemRender: Function,
    maxCount: Number,
    height: [Number, String],
    removeIcon: Function,
    downloadIcon: Function,
    previewIcon: Function
  };
}
function $4() {
  return {
    listType: String,
    onPreview: Function,
    onDownload: Function,
    onRemove: Function,
    items: Array,
    progress: Object,
    prefixCls: String,
    showRemoveIcon: {
      type: Boolean,
      default: void 0
    },
    showDownloadIcon: {
      type: Boolean,
      default: void 0
    },
    showPreviewIcon: {
      type: Boolean,
      default: void 0
    },
    removeIcon: Function,
    downloadIcon: Function,
    previewIcon: Function,
    locale: {
      type: Object,
      default: void 0
    },
    previewFile: Function,
    iconRender: Function,
    isImageUrl: Function,
    appendAction: Function,
    appendActionVisible: {
      type: Boolean,
      default: void 0
    },
    itemRender: Function
  };
}
function Qo(t) {
  return k(k({}, t), {
    lastModified: t.lastModified,
    lastModifiedDate: t.lastModifiedDate,
    name: t.name,
    size: t.size,
    type: t.type,
    uid: t.uid,
    percent: 0,
    originFileObj: t
  });
}
function Jo(t, e) {
  var n = Ie(e), r = n.findIndex(function(a) {
    var o = a.uid;
    return o === t.uid;
  });
  return r === -1 ? n.push(t) : n[r] = t, n;
}
function mu(t, e) {
  var n = t.uid !== void 0 ? "uid" : "name";
  return e.filter(function(r) {
    return r[n] === t[n];
  })[0];
}
function L4(t, e) {
  var n = t.uid !== void 0 ? "uid" : "name", r = e.filter(function(a) {
    return a[n] !== t[n];
  });
  return r.length === e.length ? null : r;
}
var j4 = function() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", n = e.split("/"), r = n[n.length - 1], a = r.split(/#|\?/)[0];
  return (/\.[^./\\]*$/.exec(a) || [""])[0];
}, n0 = function(e) {
  return e.indexOf("image/") === 0;
}, V4 = function(e) {
  if (e.type && !e.thumbUrl)
    return n0(e.type);
  var n = e.thumbUrl || e.url || "", r = j4(n);
  return /^data:image\//.test(n) || /(webp|svg|png|gif|jpg|jpeg|jfif|bmp|dpg|ico)$/i.test(r) ? !0 : !(/^data:/.test(n) || r);
}, Xn = 200;
function B4(t) {
  return new Promise(function(e) {
    if (!t.type || !n0(t.type)) {
      e("");
      return;
    }
    var n = document.createElement("canvas");
    n.width = Xn, n.height = Xn, n.style.cssText = "position: fixed; left: 0; top: 0; width: ".concat(Xn, "px; height: ").concat(Xn, "px; z-index: 9999; display: none;"), document.body.appendChild(n);
    var r = n.getContext("2d"), a = new Image();
    a.onload = function() {
      var o = a.width, i = a.height, l = Xn, u = Xn, s = 0, d = 0;
      o > i ? (u = i * (Xn / o), d = -(u - l) / 2) : (l = o * (Xn / i), s = -(l - u) / 2), r.drawImage(a, s, d, l, u);
      var c = n.toDataURL();
      document.body.removeChild(n), e(c);
    }, a.src = window.URL.createObjectURL(t);
  });
}
var K4 = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M505.7 661a8 8 0 0012.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z" } }] }, name: "download", theme: "outlined" };
const H4 = K4;
function jh(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? Object(arguments[e]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(a) {
      return Object.getOwnPropertyDescriptor(n, a).enumerable;
    }))), r.forEach(function(a) {
      z4(t, a, n[a]);
    });
  }
  return t;
}
function z4(t, e, n) {
  return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
var Nd = function(e, n) {
  var r = jh({}, e, n.attrs);
  return m(st, jh({}, r, {
    icon: H4
  }), null);
};
Nd.displayName = "DownloadOutlined";
Nd.inheritAttrs = !1;
const W4 = Nd;
var U4 = function() {
  return {
    prefixCls: String,
    locale: {
      type: Object,
      default: void 0
    },
    file: Object,
    items: Array,
    listType: String,
    isImgUrl: Function,
    showRemoveIcon: {
      type: Boolean,
      default: void 0
    },
    showDownloadIcon: {
      type: Boolean,
      default: void 0
    },
    showPreviewIcon: {
      type: Boolean,
      default: void 0
    },
    removeIcon: Function,
    downloadIcon: Function,
    previewIcon: Function,
    iconRender: Function,
    actionIconRender: Function,
    itemRender: Function,
    onPreview: Function,
    onClose: Function,
    onDownload: Function,
    progress: Object
  };
};
const Y4 = pe({
  name: "ListItem",
  inheritAttrs: !1,
  props: U4(),
  setup: function(e, n) {
    var r = n.slots, a = n.attrs, o = G(!1), i = G();
    dt(function() {
      i.value = setTimeout(function() {
        o.value = !0;
      }, 300);
    }), ht(function() {
      clearTimeout(i.value);
    });
    var l = Qe("upload", e), u = l.rootPrefixCls, s = F(function() {
      return Mc("".concat(u.value, "-fade"));
    });
    return function() {
      var d, c, v, f, g = e.prefixCls, p = e.locale, y = e.listType, h = e.file, w = e.items, C = e.progress, x = e.iconRender, S = x === void 0 ? r.iconRender : x, b = e.actionIconRender, P = b === void 0 ? r.actionIconRender : b, T = e.itemRender, O = T === void 0 ? r.itemRender : T, D = e.isImgUrl, V = e.showPreviewIcon, K = e.showRemoveIcon, R = e.showDownloadIcon, E = e.previewIcon, M = E === void 0 ? r.previewIcon : E, N = e.removeIcon, _ = N === void 0 ? r.removeIcon : N, I = e.downloadIcon, A = I === void 0 ? r.downloadIcon : I, B = e.onPreview, W = e.onDownload, U = e.onClose, z = a.class, L = a.style, $ = "".concat(g, "-span"), q = S({
        file: h
      }), H = m("div", {
        class: "".concat(g, "-text-icon")
      }, [q]);
      if (y === "picture" || y === "picture-card")
        if (h.status === "uploading" || !h.thumbUrl && !h.url) {
          var J, Z = (J = {}, j(J, "".concat(g, "-list-item-thumbnail"), !0), j(J, "".concat(g, "-list-item-file"), h.status !== "uploading"), J);
          H = m("div", {
            class: Z
          }, [q]);
        } else {
          var ae, ue = D != null && D(h) ? m("img", {
            src: h.thumbUrl || h.url,
            alt: h.name,
            class: "".concat(g, "-list-item-image")
          }, null) : q, ne = (ae = {}, j(ae, "".concat(g, "-list-item-thumbnail"), !0), j(ae, "".concat(g, "-list-item-file"), D && !D(h)), ae);
          H = m("a", {
            class: ne,
            onClick: function(oe) {
              return B(h, oe);
            },
            href: h.url || h.thumbUrl,
            target: "_blank",
            rel: "noopener noreferrer"
          }, [ue]);
        }
      var X = (d = {}, j(d, "".concat(g, "-list-item"), !0), j(d, "".concat(g, "-list-item-").concat(h.status), !0), j(d, "".concat(g, "-list-item-list-type-").concat(y), !0), d), te = typeof h.linkProps == "string" ? JSON.parse(h.linkProps) : h.linkProps, me = K ? P({
        customIcon: _ ? _({
          file: h
        }) : m(qb, null, null),
        callback: function() {
          return U(h);
        },
        prefixCls: g,
        title: p.removeFile
      }) : null, Oe = R && h.status === "done" ? P({
        customIcon: A ? A({
          file: h
        }) : m(W4, null, null),
        callback: function() {
          return W(h);
        },
        prefixCls: g,
        title: p.downloadFile
      }) : null, ke = y !== "picture-card" && m("span", {
        key: "download-delete",
        class: ["".concat(g, "-list-item-card-actions"), {
          picture: y === "picture"
        }]
      }, [Oe, me]), Me = "".concat(g, "-list-item-name"), Pe = h.url ? [m("a", Y(Y({
        key: "view",
        target: "_blank",
        rel: "noopener noreferrer",
        class: Me,
        title: h.name
      }, te), {}, {
        href: h.url,
        onClick: function(oe) {
          return B(h, oe);
        }
      }), [h.name]), ke] : [m("span", {
        key: "view",
        class: Me,
        onClick: function(oe) {
          return B(h, oe);
        },
        title: h.name
      }, [h.name]), ke], fe = {
        pointerEvents: "none",
        opacity: 0.5
      }, le = V ? m("a", {
        href: h.url || h.thumbUrl,
        target: "_blank",
        rel: "noopener noreferrer",
        style: h.url || h.thumbUrl ? void 0 : fe,
        onClick: function(oe) {
          return B(h, oe);
        },
        title: p.previewFile
      }, [M ? M({
        file: h
      }) : m(zb, null, null)]) : null, ie = y === "picture-card" && h.status !== "uploading" && m("span", {
        class: "".concat(g, "-list-item-actions")
      }, [le, h.status === "done" && Oe, me]), de;
      h.response && typeof h.response == "string" ? de = h.response : de = ((v = h.error) === null || v === void 0 ? void 0 : v.statusText) || ((f = h.error) === null || f === void 0 ? void 0 : f.message) || p.uploadError;
      var ye = m("span", {
        class: $
      }, [H, Pe]), _e = m("div", {
        class: X
      }, [m("div", {
        class: "".concat(g, "-list-item-info")
      }, [ye]), ie, o.value && m(_r, s.value, {
        default: function() {
          return [gn(m("div", {
            class: "".concat(g, "-list-item-progress")
          }, ["percent" in h ? m(KF, Y(Y({}, C), {}, {
            type: "line",
            percent: h.percent
          }), null) : null]), [[uo, h.status === "uploading"]])];
        }
      })]), Be = (c = {}, j(c, "".concat(g, "-list-").concat(y, "-container"), !0), j(c, "".concat(z), !!z), c), Ve = h.status === "error" ? m(Zm, {
        title: de,
        getPopupContainer: function(oe) {
          return oe.parentNode;
        }
      }, {
        default: function() {
          return [_e];
        }
      }) : _e;
      return m("div", {
        class: Be,
        style: L,
        ref: G
      }, [O ? O({
        originNode: Ve,
        file: h,
        fileList: w,
        actions: {
          download: W.bind(null, h),
          preview: B.bind(null, h),
          remove: U.bind(null, h)
        }
      }) : Ve]);
    };
  }
});
var q4 = function(e, n) {
  var r = n.slots, a;
  return yn((a = r.default) === null || a === void 0 ? void 0 : a.call(r))[0];
};
const G4 = pe({
  name: "AUploadList",
  props: kt($4(), {
    listType: "text",
    progress: {
      strokeWidth: 2,
      showInfo: !1
    },
    showRemoveIcon: !0,
    showDownloadIcon: !1,
    showPreviewIcon: !0,
    previewFile: B4,
    isImageUrl: V4,
    items: [],
    appendActionVisible: !0
  }),
  setup: function(e, n) {
    var r = n.slots, a = n.expose, o = G(!1), i = sn();
    dt(function() {
      o.value == !0;
    }), Ue(function() {
      e.listType !== "picture" && e.listType !== "picture-card" || (e.items || []).forEach(function(h) {
        typeof document > "u" || typeof window > "u" || !window.FileReader || !window.File || !(h.originFileObj instanceof File || h.originFileObj instanceof Blob) || h.thumbUrl !== void 0 || (h.thumbUrl = "", e.previewFile && e.previewFile(h.originFileObj).then(function(w) {
          h.thumbUrl = w || "", i.update();
        }));
      });
    });
    var l = function(w, C) {
      if (!!e.onPreview)
        return C == null || C.preventDefault(), e.onPreview(w);
    }, u = function(w) {
      typeof e.onDownload == "function" ? e.onDownload(w) : w.url && window.open(w.url);
    }, s = function(w) {
      var C;
      (C = e.onRemove) === null || C === void 0 || C.call(e, w);
    }, d = function(w) {
      var C = w.file, x = e.iconRender || r.iconRender;
      if (x)
        return x({
          file: C,
          listType: e.listType
        });
      var S = C.status === "uploading", b = e.isImageUrl && e.isImageUrl(C) ? m(M4, null, null) : m(R4, null, null), P = S ? m(Bn, null, null) : m(k4, null, null);
      return e.listType === "picture" ? P = S ? m(Bn, null, null) : b : e.listType === "picture-card" && (P = S ? e.locale.uploading : b), P;
    }, c = function(w) {
      var C = w.customIcon, x = w.callback, S = w.prefixCls, b = w.title, P = {
        type: "text",
        size: "small",
        title: b,
        onClick: function() {
          x();
        },
        class: "".concat(S, "-list-item-card-actions-btn")
      };
      return At(C) ? m(Jt, P, {
        icon: function() {
          return C;
        }
      }) : m(Jt, P, {
        default: function() {
          return [m("span", null, [C])];
        }
      });
    };
    a({
      handlePreview: l,
      handleDownload: u
    });
    var v = Qe("upload", e), f = v.prefixCls, g = v.direction, p = F(function() {
      var h;
      return h = {}, j(h, "".concat(f.value, "-list"), !0), j(h, "".concat(f.value, "-list-").concat(e.listType), !0), j(h, "".concat(f.value, "-list-rtl"), g.value === "rtl"), h;
    }), y = F(function() {
      return k(k(k({}, Zi("".concat(f.value, "-").concat(e.listType === "picture-card" ? "animate-inline" : "animate"))), Ac("".concat(f.value, "-").concat(e.listType === "picture-card" ? "animate-inline" : "animate"))), {
        class: p.value,
        appear: o.value
      });
    });
    return function() {
      var h = e.listType, w = e.locale, C = e.isImageUrl, x = e.items, S = x === void 0 ? [] : x, b = e.showPreviewIcon, P = e.showRemoveIcon, T = e.showDownloadIcon, O = e.removeIcon, D = e.previewIcon, V = e.downloadIcon, K = e.progress, R = e.appendAction, E = e.itemRender, M = e.appendActionVisible, N = R == null ? void 0 : R();
      return m(Oc, Y(Y({}, y.value), {}, {
        tag: "div"
      }), {
        default: function() {
          return [S.map(function(I) {
            var A = I.uid;
            return m(Y4, {
              key: A,
              locale: w,
              prefixCls: f.value,
              file: I,
              items: S,
              progress: K,
              listType: h,
              isImgUrl: C,
              showPreviewIcon: b,
              showRemoveIcon: P,
              showDownloadIcon: T,
              onPreview: l,
              onDownload: u,
              onClose: s,
              removeIcon: O,
              previewIcon: D,
              downloadIcon: V,
              itemRender: E
            }, k(k({}, r), {
              iconRender: d,
              actionIconRender: c
            }));
          }), R ? gn(m(q4, {
            key: "__ant_upload_appendAction"
          }, {
            default: function() {
              return N;
            }
          }), [[uo, !!M]]) : null];
        }
      });
    };
  }
});
var X4 = globalThis && globalThis.__awaiter || function(t, e, n, r) {
  function a(o) {
    return o instanceof n ? o : new n(function(i) {
      i(o);
    });
  }
  return new (n || (n = Promise))(function(o, i) {
    function l(d) {
      try {
        s(r.next(d));
      } catch (c) {
        i(c);
      }
    }
    function u(d) {
      try {
        s(r.throw(d));
      } catch (c) {
        i(c);
      }
    }
    function s(d) {
      d.done ? o(d.value) : a(d.value).then(l, u);
    }
    s((r = r.apply(t, e || [])).next());
  });
}, Q4 = globalThis && globalThis.__rest || function(t, e) {
  var n = {};
  for (var r in t)
    Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(t); a < r.length; a++)
      e.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[a]) && (n[r[a]] = t[r[a]]);
  return n;
}, Da = "__LIST_IGNORE_".concat(Date.now(), "__");
const ci = pe({
  name: "AUpload",
  inheritAttrs: !1,
  props: kt(t0(), {
    type: "select",
    multiple: !1,
    action: "",
    data: {},
    accept: "",
    showUploadList: !0,
    listType: "text",
    disabled: !1,
    supportServerRender: !0
  }),
  setup: function(e, n) {
    var r = this, a = n.slots, o = n.attrs, i = n.expose, l = jt(), u = Rt(e.defaultFileList || [], {
      value: ze(e, "fileList"),
      postState: function(E) {
        var M = Date.now();
        return (E != null ? E : []).map(function(N, _) {
          return !N.uid && !Object.isFrozen(N) && (N.uid = "__AUTO__".concat(M, "_").concat(_, "__")), N;
        });
      }
    }), s = De(u, 2), d = s[0], c = s[1], v = G("drop"), f = G();
    dt(function() {
      mt(e.fileList !== void 0 || o.value === void 0, "Upload", "`value` is not a valid prop, do you mean `fileList`?"), mt(e.transformFile === void 0, "Upload", "`transformFile` is deprecated. Please use `beforeUpload` directly."), mt(e.remove === void 0, "Upload", "`remove` props is deprecated. Please use `remove` event.");
    });
    var g = function(E, M, N) {
      var _, I, A = Ie(M);
      e.maxCount === 1 ? A = A.slice(-1) : e.maxCount && (A = A.slice(0, e.maxCount)), c(A);
      var B = {
        file: E,
        fileList: A
      };
      N && (B.event = N), (_ = e["onUpdate:fileList"]) === null || _ === void 0 || _.call(e, B.fileList), (I = e.onChange) === null || I === void 0 || I.call(e, B), l.onFieldChange();
    }, p = function(E, M) {
      return X4(r, void 0, void 0, /* @__PURE__ */ Ut.mark(function N() {
        var _, I, A, B;
        return Ut.wrap(function(U) {
          for (; ; )
            switch (U.prev = U.next) {
              case 0:
                if (_ = e.beforeUpload, I = e.transformFile, A = E, !_) {
                  U.next = 13;
                  break;
                }
                return U.next = 5, _(E, M);
              case 5:
                if (B = U.sent, B !== !1) {
                  U.next = 8;
                  break;
                }
                return U.abrupt("return", !1);
              case 8:
                if (delete E[Da], B !== Da) {
                  U.next = 12;
                  break;
                }
                return Object.defineProperty(E, Da, {
                  value: !0,
                  configurable: !0
                }), U.abrupt("return", !1);
              case 12:
                Le(B) === "object" && B && (A = B);
              case 13:
                if (!I) {
                  U.next = 17;
                  break;
                }
                return U.next = 16, I(A);
              case 16:
                A = U.sent;
              case 17:
                return U.abrupt("return", A);
              case 18:
              case "end":
                return U.stop();
            }
        }, N);
      }));
    }, y = function(E) {
      var M = E.filter(function(I) {
        return !I.file[Da];
      });
      if (!!M.length) {
        var N = M.map(function(I) {
          return Qo(I.file);
        }), _ = Ie(d.value);
        N.forEach(function(I) {
          _ = Jo(I, _);
        }), N.forEach(function(I, A) {
          var B = I;
          if (M[A].parsedFile)
            I.status = "uploading";
          else {
            var W = I.originFileObj, U;
            try {
              U = new File([W], W.name, {
                type: W.type
              });
            } catch {
              U = new Blob([W], {
                type: W.type
              }), U.name = W.name, U.lastModifiedDate = new Date(), U.lastModified = new Date().getTime();
            }
            U.uid = I.uid, B = U;
          }
          g(B, _);
        });
      }
    }, h = function(E, M, N) {
      try {
        typeof E == "string" && (E = JSON.parse(E));
      } catch {
      }
      if (!!mu(M, d.value)) {
        var _ = Qo(M);
        _.status = "done", _.percent = 100, _.response = E, _.xhr = N;
        var I = Jo(_, d.value);
        g(_, I);
      }
    }, w = function(E, M) {
      if (!!mu(M, d.value)) {
        var N = Qo(M);
        N.status = "uploading", N.percent = E.percent;
        var _ = Jo(N, d.value);
        g(N, _, E);
      }
    }, C = function(E, M, N) {
      if (!!mu(N, d.value)) {
        var _ = Qo(N);
        _.error = E, _.response = M, _.status = "error";
        var I = Jo(_, d.value);
        g(_, I);
      }
    }, x = function(E) {
      var M, N = e.onRemove || e.remove;
      Promise.resolve(typeof N == "function" ? N(E) : N).then(function(_) {
        var I, A;
        if (_ !== !1) {
          var B = L4(E, d.value);
          B && (M = k(k({}, E), {
            status: "removed"
          }), (I = d.value) === null || I === void 0 || I.forEach(function(W) {
            var U = M.uid !== void 0 ? "uid" : "name";
            W[U] === M[U] && !Object.isFrozen(W) && (W.status = "removed");
          }), (A = f.value) === null || A === void 0 || A.abort(M), g(M, B));
        }
      });
    }, S = function(E) {
      var M;
      v.value = E.type, E.type === "drop" && ((M = e.onDrop) === null || M === void 0 || M.call(e, E));
    };
    i({
      onBatchStart: y,
      onSuccess: h,
      onProgress: w,
      onError: C,
      fileList: d,
      upload: f
    });
    var b = Qe("upload", e), P = b.prefixCls, T = b.direction, O = co("Upload", ir.Upload, F(function() {
      return e.locale;
    })), D = De(O, 1), V = D[0], K = function(E, M) {
      var N = e.removeIcon, _ = e.previewIcon, I = e.downloadIcon, A = e.previewFile, B = e.onPreview, W = e.onDownload, U = e.disabled, z = e.isImageUrl, L = e.progress, $ = e.itemRender, q = e.iconRender, H = e.showUploadList, J = typeof H == "boolean" ? {} : H, Z = J.showDownloadIcon, ae = J.showPreviewIcon, ue = J.showRemoveIcon;
      return H ? m(G4, {
        listType: e.listType,
        items: d.value,
        previewFile: A,
        onPreview: B,
        onDownload: W,
        onRemove: x,
        showRemoveIcon: !U && ue,
        showPreviewIcon: ae,
        showDownloadIcon: Z,
        removeIcon: N,
        previewIcon: _,
        downloadIcon: I,
        iconRender: q,
        locale: V.value,
        isImageUrl: z,
        progress: L,
        itemRender: $,
        appendActionVisible: M,
        appendAction: E
      }, k({}, a)) : E == null ? void 0 : E();
    };
    return function() {
      var R, E, M, N, _ = e.listType, I = e.disabled, A = e.type;
      o.class, o.style;
      var B = Q4(o, ["class", "style"]), W = k(k(k({
        onBatchStart: y,
        onError: C,
        onProgress: w,
        onSuccess: h
      }, B), e), {
        id: (E = e.id) !== null && E !== void 0 ? E : l.id.value,
        prefixCls: P.value,
        beforeUpload: p,
        onChange: void 0
      });
      if (delete W.remove, (!a.default || I) && delete W.id, A === "drag") {
        var U, z = ge(P.value, (U = {}, j(U, "".concat(P.value, "-drag"), !0), j(U, "".concat(P.value, "-drag-uploading"), d.value.some(function(H) {
          return H.status === "uploading";
        })), j(U, "".concat(P.value, "-drag-hover"), v.value === "dragover"), j(U, "".concat(P.value, "-disabled"), I), j(U, "".concat(P.value, "-rtl"), T.value === "rtl"), U), o.class);
        return m("span", null, [m("div", {
          class: z,
          onDrop: S,
          onDragover: S,
          onDragleave: S,
          style: o.style
        }, [m(Fh, Y(Y({}, W), {}, {
          ref: f,
          class: "".concat(P.value, "-btn")
        }), Y({
          default: function() {
            return [m("div", {
              class: "".concat(P, "-drag-container")
            }, [(M = a.default) === null || M === void 0 ? void 0 : M.call(a)])];
          }
        }, a))]), K()]);
      }
      var L = ge(P.value, (R = {}, j(R, "".concat(P.value, "-select"), !0), j(R, "".concat(P.value, "-select-").concat(_), !0), j(R, "".concat(P.value, "-disabled"), I), j(R, "".concat(P.value, "-rtl"), T.value === "rtl"), R)), $ = Kt((N = a.default) === null || N === void 0 ? void 0 : N.call(a)), q = function(J) {
        return m("div", {
          class: L,
          style: J
        }, [m(Fh, Y(Y({}, W), {}, {
          ref: f
        }), a)]);
      };
      return _ === "picture-card" ? m("span", {
        class: ge("".concat(P.value, "-picture-card-wrapper"), o.class)
      }, [K(q, !!($ && $.length))]) : m("span", {
        class: o.class
      }, [q($ && $.length ? void 0 : {
        display: "none"
      }), K()]);
    };
  }
});
var Vh = globalThis && globalThis.__rest || function(t, e) {
  var n = {};
  for (var r in t)
    Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(t); a < r.length; a++)
      e.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[a]) && (n[r[a]] = t[r[a]]);
  return n;
};
const yu = pe({
  name: "AUploadDragger",
  inheritAttrs: !1,
  props: t0(),
  setup: function(e, n) {
    var r = n.slots, a = n.attrs;
    return function() {
      var o = e.height, i = Vh(e, ["height"]), l = a.style, u = Vh(a, ["style"]), s = k(k(k({}, i), u), {
        type: "drag",
        style: k(k({}, l), {
          height: typeof o == "number" ? "".concat(o, "px") : o
        })
      });
      return m(ci, s, r);
    };
  }
}), J4 = k(ci, {
  Dragger: yu,
  LIST_IGNORE: Da,
  install: function(e) {
    return e.component(ci.name, ci), e.component(yu.name, yu), e;
  }
});
const Z4 = {
  Input: _t,
  InputNumber: eF,
  Radio: Xt,
  Select: Pi,
  TimePicker: n4,
  DatePicker: fD,
  Checkbox: ar,
  Cascader: MA,
  Transfer: MR,
  TreeSelect: e4,
  Upload: J4
}, e6 = /* @__PURE__ */ pe({
  __name: "KFormItem",
  props: {
    record: {
      type: Object,
      require: !0
    },
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(t, { emit: e }) {
    const n = t, { record: r } = n, a = Z4[r.component], o = r.componentProps;
    function i(l) {
      e("update:modelValue", l);
    }
    return (l, u) => {
      const s = kb;
      return Fa(), si(s, {
        label: St(r).label,
        rules: St(r).rules,
        name: St(r).field
      }, {
        default: zh(() => [
          (Fa(), si(E0(St(a)), Wh({
            style: { width: "100%" },
            value: n.modelValue,
            "onUpdate:value": i
          }, St(o)), null, 16, ["value"]))
        ]),
        _: 1
      }, 8, ["label", "rules", "name"]);
    };
  }
}), t6 = /* @__PURE__ */ pe({
  __name: "KFormBuild",
  props: {
    formSchema: {
      type: Object
    }
  },
  setup(t, { expose: e }) {
    const n = t;
    let r = Mt({});
    const a = G(null), o = F(() => {
      var u;
      return {
        ...(u = n.formSchema) == null ? void 0 : u.config
      };
    });
    function i() {
      return new Promise(async (u, s) => {
        var d;
        try {
          await ((d = a.value) == null ? void 0 : d.validateFields()), u(r);
        } catch (c) {
          s(c);
        }
      });
    }
    function l(u) {
      Object.assign(r, u);
    }
    return e({
      getData: i,
      setData: l
    }), (u, s) => {
      const d = Qn;
      return Fa(), si(d, Wh({
        ref_key: "form",
        ref: a,
        model: St(r)
      }, St(o)), {
        default: zh(() => {
          var c;
          return [
            (Fa(!0), N0(ft, null, M0((c = n.formSchema) == null ? void 0 : c.nodes, (v, f) => (Fa(), si(e6, {
              modelValue: St(r)[v.field],
              "onUpdate:modelValue": (g) => St(r)[v.field] = g,
              key: f,
              record: v
            }, null, 8, ["modelValue", "onUpdate:modelValue", "record"]))), 128))
          ];
        }),
        _: 1
      }, 16, ["model"]);
    };
  }
}), n6 = [t6], a6 = {
  install(t) {
    n6.forEach((e) => {
      t.component(e.__name, e);
    });
  }
};
export {
  t6 as KFormBuild,
  a6 as default
};
