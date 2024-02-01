import { r as G, a as Y, i as j, g as K, e as ee, q as Be, c as ve, j as he, b as me, o as we, v as Ae, h as Ue, f as Ie } from "./useConfigInject-f4796704.mjs";
import { _ as te } from "./index-4ddd22ca.mjs";
import { r as ge } from "./index-34e90455.mjs";
import { r as Ne, a as Fe } from "./Portal-6677def3.mjs";
import { r as je } from "./KeyCode-8a26b842.mjs";
import { r as We } from "./index-82313b29.mjs";
import { r as Ge } from "./raf-09a8b76f.mjs";
import { r as Ke } from "./FormItemContext-4e085918.mjs";
function Xe(g, P) {
  for (var b = 0; b < P.length; b++) {
    const y = P[b];
    if (typeof y != "string" && !Array.isArray(y)) {
      for (const w in y)
        if (w !== "default" && !(w in g)) {
          const V = Object.getOwnPropertyDescriptor(y, w);
          V && Object.defineProperty(g, w, V.get ? V : {
            enumerable: !0,
            get: () => y[w]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(g, Symbol.toStringTag, { value: "Module" }));
}
var Z = {}, re = {}, ne = {}, xe;
function He() {
  if (xe)
    return ne;
  xe = 1;
  var g = j;
  Object.defineProperty(ne, "__esModule", {
    value: !0
  }), ne.default = void 0;
  var P = K, b = g(G()), y = g(Y()), w = function(B, T) {
    var p, O, k = T.attrs, C = k.included, M = k.vertical, h = k.style, o = k.class, s = k.length, d = k.offset, c = k.reverse;
    s < 0 && (c = !c, s = Math.abs(s), d = 100 - d);
    var m = M ? (p = {}, (0, y.default)(p, c ? "top" : "bottom", "".concat(d, "%")), (0, y.default)(p, c ? "bottom" : "top", "auto"), (0, y.default)(p, "height", "".concat(s, "%")), p) : (O = {}, (0, y.default)(O, c ? "right" : "left", "".concat(d, "%")), (0, y.default)(O, c ? "left" : "right", "auto"), (0, y.default)(O, "width", "".concat(s, "%")), O), v = (0, b.default)((0, b.default)({}, h), m);
    return C ? (0, P.createVNode)("div", {
      class: o,
      style: v
    }, null) : null;
  };
  w.inheritAttrs = !1;
  var V = w;
  return ne.default = V, ne;
}
var ce = {}, ie = {}, Ce;
function ze() {
  if (Ce)
    return ie;
  Ce = 1;
  var g = j;
  Object.defineProperty(ie, "__esModule", {
    value: !0
  }), ie.default = void 0;
  var P = K, b = g(Y()), y = g(G()), w = g(ee()), V = g(Be()), F = function(O, k, C, M, h, o) {
    (0, V.default)(C ? M > 0 : !0, "Slider", "`Slider[step]` should be a positive number in order to make Slider[dots] work.");
    var s = Object.keys(k).map(parseFloat).sort(function(c, m) {
      return c - m;
    });
    if (C && M)
      for (var d = h; d <= o; d += M)
        s.indexOf(d) === -1 && s.push(d);
    return s;
  }, B = function(O, k) {
    var C = k.attrs, M = C.prefixCls, h = C.vertical, o = C.reverse, s = C.marks, d = C.dots, c = C.step, m = C.included, v = C.lowerBound, a = C.upperBound, i = C.max, t = C.min, u = C.dotStyle, r = C.activeDotStyle, e = i - t, n = F(h, s, d, c, t, i).map(function(l) {
      var f, x = "".concat(Math.abs(l - t) / e * 100, "%"), S = !m && l === a || m && l <= a && l >= v, _ = h ? (0, y.default)((0, y.default)({}, u), {}, (0, b.default)({}, o ? "top" : "bottom", x)) : (0, y.default)((0, y.default)({}, u), {}, (0, b.default)({}, o ? "right" : "left", x));
      S && (_ = (0, y.default)((0, y.default)({}, _), r));
      var N = (0, w.default)((f = {}, (0, b.default)(f, "".concat(M, "-dot"), !0), (0, b.default)(f, "".concat(M, "-dot-active"), S), (0, b.default)(f, "".concat(M, "-dot-reverse"), o), f));
      return (0, P.createVNode)("span", {
        class: N,
        style: _,
        key: l
      }, null);
    });
    return (0, P.createVNode)("div", {
      class: "".concat(M, "-step")
    }, [n]);
  };
  B.inheritAttrs = !1;
  var T = B;
  return ie.default = T, ie;
}
var ue = {}, Pe;
function Ye() {
  if (Pe)
    return ue;
  Pe = 1;
  var g = j;
  Object.defineProperty(ue, "__esModule", {
    value: !0
  }), ue.default = void 0;
  var P = K, b = g(G()), y = g(Y()), w = g(te), V = g(Ne()), F = g(ee()), B = ve(), T = function(k, C) {
    var M = C.attrs, h = C.slots, o = M.class, s = M.vertical, d = M.reverse, c = M.marks, m = M.included, v = M.upperBound, a = M.lowerBound, i = M.max, t = M.min, u = M.onClickLabel, r = Object.keys(c), e = h.mark, n = i - t, l = r.map(parseFloat).sort(function(f, x) {
      return f - x;
    }).map(function(f) {
      var x, S = typeof c[f] == "function" ? c[f]() : c[f], _ = (0, w.default)(S) === "object" && !(0, B.isValidElement)(S), N = _ ? S.label : S;
      if (!N && N !== 0)
        return null;
      e && (N = e({
        point: f,
        label: N
      }));
      var $ = !m && f === v || m && f <= v && f >= a, D = (0, F.default)((x = {}, (0, y.default)(x, "".concat(o, "-text"), !0), (0, y.default)(x, "".concat(o, "-text-active"), $), x)), H = (0, y.default)({
        marginBottom: "-50%"
      }, d ? "top" : "bottom", "".concat((f - t) / n * 100, "%")), E = (0, y.default)({
        transform: "translateX(".concat(d ? "50%" : "-50%", ")"),
        msTransform: "translateX(".concat(d ? "50%" : "-50%", ")")
      }, d ? "right" : "left", "".concat((f - t) / n * 100, "%")), R = s ? H : E, A = _ ? (0, b.default)((0, b.default)({}, R), S.style) : R, I = (0, y.default)({}, V.default ? "onTouchstartPassive" : "onTouchstart", function(U) {
        return u(U, f);
      });
      return (0, P.createVNode)("span", (0, b.default)({
        class: D,
        style: A,
        key: f,
        onMousedown: function(J) {
          return u(J, f);
        }
      }, I), [N]);
    });
    return (0, P.createVNode)("div", {
      class: o
    }, [l]);
  };
  T.inheritAttrs = !1;
  var p = T;
  return ue.default = p, ue;
}
var le = {}, Se;
function Re() {
  if (Se)
    return le;
  Se = 1;
  var g = j;
  Object.defineProperty(le, "__esModule", {
    value: !0
  }), le.default = void 0;
  var P = K, b = g(G()), y = g(Y()), w = g(ee()), V = g(he()), F = g(Fe()), B = (0, P.defineComponent)({
    compatConfig: {
      MODE: 3
    },
    name: "Handle",
    inheritAttrs: !1,
    props: {
      prefixCls: String,
      vertical: {
        type: Boolean,
        default: void 0
      },
      offset: Number,
      disabled: {
        type: Boolean,
        default: void 0
      },
      min: Number,
      max: Number,
      value: Number,
      tabindex: V.default.oneOfType([V.default.number, V.default.string]),
      reverse: {
        type: Boolean,
        default: void 0
      },
      ariaLabel: String,
      ariaLabelledBy: String,
      ariaValueTextFormatter: Function,
      onMouseenter: {
        type: Function
      },
      onMouseleave: {
        type: Function
      },
      onMousedown: {
        type: Function
      }
    },
    setup: function(p, O) {
      var k = O.attrs, C = O.emit, M = O.expose, h = (0, P.ref)(!1), o = (0, P.ref)(), s = function() {
        document.activeElement === o.value && (h.value = !0);
      }, d = function(e) {
        h.value = !1, C("blur", e);
      }, c = function() {
        h.value = !1;
      }, m = function() {
        var e;
        (e = o.value) === null || e === void 0 || e.focus();
      }, v = function() {
        var e;
        (e = o.value) === null || e === void 0 || e.blur();
      }, a = function() {
        h.value = !0, m();
      }, i = function(e) {
        e.preventDefault(), m(), C("mousedown", e);
      };
      M({
        focus: m,
        blur: v,
        clickFocus: a,
        ref: o
      });
      var t = null;
      (0, P.onMounted)(function() {
        t = (0, F.default)(document, "mouseup", s);
      }), (0, P.onBeforeUnmount)(function() {
        var r;
        (r = t) === null || r === void 0 || r.remove();
      });
      var u = (0, P.computed)(function() {
        var r, e, n = p.vertical, l = p.offset, f = p.reverse;
        return n ? (r = {}, (0, y.default)(r, f ? "top" : "bottom", "".concat(l, "%")), (0, y.default)(r, f ? "bottom" : "top", "auto"), (0, y.default)(r, "transform", f ? null : "translateY(+50%)"), r) : (e = {}, (0, y.default)(e, f ? "right" : "left", "".concat(l, "%")), (0, y.default)(e, f ? "left" : "right", "auto"), (0, y.default)(e, "transform", "translateX(".concat(f ? "+" : "-", "50%)")), e);
      });
      return function() {
        var r = p.prefixCls, e = p.disabled, n = p.min, l = p.max, f = p.value, x = p.tabindex, S = p.ariaLabel, _ = p.ariaLabelledBy, N = p.ariaValueTextFormatter, $ = p.onMouseenter, D = p.onMouseleave, H = (0, w.default)(k.class, (0, y.default)({}, "".concat(r, "-handle-click-focused"), h.value)), E = {
          "aria-valuemin": n,
          "aria-valuemax": l,
          "aria-valuenow": f,
          "aria-disabled": !!e
        }, R = [k.style, u.value], A = x || 0;
        (e || x === null) && (A = null);
        var I;
        N && (I = N(f));
        var U = (0, b.default)((0, b.default)((0, b.default)({}, k), {}, {
          role: "slider",
          tabindex: A
        }, E), {}, {
          class: H,
          onBlur: d,
          onKeydown: c,
          onMousedown: i,
          onMouseenter: $,
          onMouseleave: D,
          ref: o,
          style: R
        });
        return (0, P.createVNode)("div", (0, b.default)((0, b.default)({}, U), {}, {
          "aria-label": S,
          "aria-labelledby": _,
          "aria-valuetext": I
        }), null);
      };
    }
  });
  return le.default = B, le;
}
var q = {}, _e;
function ye() {
  if (_e)
    return q;
  _e = 1;
  var g = j;
  Object.defineProperty(q, "__esModule", {
    value: !0
  }), q.calculateNextValue = h, q.ensureValueInRange = k, q.ensureValuePrecision = C, q.getClosestPoint = F, q.getHandleCenterPosition = O, q.getKeyboardValueMutator = o, q.getMousePosition = T, q.getPrecision = B, q.getTouchPosition = p, q.isEventFromHandle = y, q.isNotTouchEvent = V, q.isValueOutOfRange = w, q.pauseEvent = M;
  var P = g(me()), b = g(je());
  function y(s, d) {
    try {
      return Object.keys(d).some(function(c) {
        return s.target === d[c].ref;
      });
    } catch {
      return !1;
    }
  }
  function w(s, d) {
    var c = d.min, m = d.max;
    return s < c || s > m;
  }
  function V(s) {
    return s.touches.length > 1 || s.type.toLowerCase() === "touchend" && s.touches.length > 0;
  }
  function F(s, d) {
    var c = d.marks, m = d.step, v = d.min, a = d.max, i = Object.keys(c).map(parseFloat);
    if (m !== null) {
      var t = Math.pow(10, B(m)), u = Math.floor((a * t - v * t) / (m * t)), r = Math.min((s - v) / m, u), e = Math.round(r) * m + v;
      i.push(e);
    }
    var n = i.map(function(l) {
      return Math.abs(s - l);
    });
    return i[n.indexOf(Math.min.apply(Math, (0, P.default)(n)))];
  }
  function B(s) {
    var d = s.toString(), c = 0;
    return d.indexOf(".") >= 0 && (c = d.length - d.indexOf(".") - 1), c;
  }
  function T(s, d) {
    var c = 1;
    return window.visualViewport && (c = +(window.visualViewport.width / document.body.getBoundingClientRect().width).toFixed(2)), (s ? d.clientY : d.pageX) / c;
  }
  function p(s, d) {
    var c = 1;
    return window.visualViewport && (c = +(window.visualViewport.width / document.body.getBoundingClientRect().width).toFixed(2)), (s ? d.touches[0].clientY : d.touches[0].pageX) / c;
  }
  function O(s, d) {
    var c = d.getBoundingClientRect();
    return s ? c.top + c.height * 0.5 : window.pageXOffset + c.left + c.width * 0.5;
  }
  function k(s, d) {
    var c = d.max, m = d.min;
    return s <= m ? m : s >= c ? c : s;
  }
  function C(s, d) {
    var c = d.step, m = isFinite(F(s, d)) ? F(s, d) : 0;
    return c === null ? m : parseFloat(m.toFixed(B(c)));
  }
  function M(s) {
    s.stopPropagation(), s.preventDefault();
  }
  function h(s, d, c) {
    var m = {
      increase: function(t, u) {
        return t + u;
      },
      decrease: function(t, u) {
        return t - u;
      }
    }, v = m[s](Object.keys(c.marks).indexOf(JSON.stringify(d)), 1), a = Object.keys(c.marks)[v];
    return c.step ? m[s](d, c.step) : Object.keys(c.marks).length && c.marks[a] ? c.marks[a] : d;
  }
  function o(s, d, c) {
    var m = "increase", v = "decrease", a = m;
    switch (s.keyCode) {
      case b.default.UP:
        a = d && c ? v : m;
        break;
      case b.default.RIGHT:
        a = !d && c ? v : m;
        break;
      case b.default.DOWN:
        a = d && c ? m : v;
        break;
      case b.default.LEFT:
        a = !d && c ? m : v;
        break;
      case b.default.END:
        return function(i, t) {
          return t.max;
        };
      case b.default.HOME:
        return function(i, t) {
          return t.min;
        };
      case b.default.PAGE_UP:
        return function(i, t) {
          return i + t.step * 2;
        };
      case b.default.PAGE_DOWN:
        return function(i, t) {
          return i - t.step * 2;
        };
      default:
        return;
    }
    return function(i, t) {
      return h(a, i, t);
    };
  }
  return q;
}
var Me;
function $e() {
  if (Me)
    return ce;
  Me = 1;
  var g = j, P = te;
  Object.defineProperty(ce, "__esModule", {
    value: !0
  }), ce.default = i;
  var b = K, y = g(Y()), w = g(me()), V = g(G()), F = g(we()), B = g(ee()), T = g(he()), p = g(Fe()), O = g(Be()), k = ve(), C = g(ze()), M = g(Ye()), h = g(Re()), o = v(ye()), s = g(ge()), d = g(Ne()), c = ["index", "directives", "className", "style"];
  function m(t) {
    if (typeof WeakMap != "function")
      return null;
    var u = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakMap();
    return (m = function(n) {
      return n ? r : u;
    })(t);
  }
  function v(t, u) {
    if (!u && t && t.__esModule)
      return t;
    if (t === null || P(t) !== "object" && typeof t != "function")
      return { default: t };
    var r = m(u);
    if (r && r.has(t))
      return r.get(t);
    var e = {}, n = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var l in t)
      if (l !== "default" && Object.prototype.hasOwnProperty.call(t, l)) {
        var f = n ? Object.getOwnPropertyDescriptor(t, l) : null;
        f && (f.get || f.set) ? Object.defineProperty(e, l, f) : e[l] = t[l];
      }
    return e.default = t, r && r.set(t, e), e;
  }
  function a() {
  }
  function i(t) {
    var u = {
      id: String,
      min: Number,
      max: Number,
      step: Number,
      marks: T.default.object,
      included: {
        type: Boolean,
        default: void 0
      },
      prefixCls: String,
      disabled: {
        type: Boolean,
        default: void 0
      },
      handle: Function,
      dots: {
        type: Boolean,
        default: void 0
      },
      vertical: {
        type: Boolean,
        default: void 0
      },
      reverse: {
        type: Boolean,
        default: void 0
      },
      minimumTrackStyle: T.default.object,
      maximumTrackStyle: T.default.object,
      handleStyle: T.default.oneOfType([T.default.object, T.default.arrayOf(T.default.object)]),
      trackStyle: T.default.oneOfType([T.default.object, T.default.arrayOf(T.default.object)]),
      railStyle: T.default.object,
      dotStyle: T.default.object,
      activeDotStyle: T.default.object,
      autofocus: {
        type: Boolean,
        default: void 0
      },
      draggableTrack: {
        type: Boolean,
        default: void 0
      }
    };
    return (0, b.defineComponent)({
      compatConfig: {
        MODE: 3
      },
      name: "CreateSlider",
      mixins: [s.default, t],
      inheritAttrs: !1,
      slots: ["mark"],
      props: (0, k.initDefaultProps)(u, {
        prefixCls: "rc-slider",
        min: 0,
        max: 100,
        step: 1,
        marks: {},
        included: !0,
        disabled: !1,
        dots: !1,
        vertical: !1,
        reverse: !1,
        trackStyle: [{}],
        handleStyle: [{}],
        railStyle: {},
        dotStyle: {},
        activeDotStyle: {}
      }),
      emits: ["change", "blur", "focus"],
      data: function() {
        var e = this.step, n = this.max, l = this.min, f = isFinite(n - l) ? (n - l) % e === 0 : !0;
        return (0, O.default)(e && Math.floor(e) === e ? f : !0, "Slider[max] - Slider[min] (".concat(n - l, ") should be a multiple of Slider[step] (").concat(e, ")")), this.handlesRefs = {}, {};
      },
      mounted: function() {
        var e = this;
        this.$nextTick(function() {
          e.document = e.sliderRef && e.sliderRef.ownerDocument;
          var n = e.autofocus, l = e.disabled;
          n && !l && e.focus();
        });
      },
      beforeUnmount: function() {
        var e = this;
        this.$nextTick(function() {
          e.removeDocumentEvents();
        });
      },
      methods: {
        defaultHandle: function(e) {
          var n = e.index;
          e.directives;
          var l = e.className, f = e.style, x = (0, F.default)(e, c);
          if (delete x.dragging, x.value === null)
            return null;
          var S = (0, V.default)((0, V.default)({}, x), {}, {
            class: l,
            style: f,
            key: n
          });
          return (0, b.createVNode)(h.default, S, null);
        },
        onDown: function(e, n) {
          var l = n, f = this.$props, x = f.draggableTrack, S = f.vertical, _ = this.$data.bounds, N = x && this.positionGetValue ? this.positionGetValue(l) || [] : [], $ = o.isEventFromHandle(e, this.handlesRefs);
          if (this.dragTrack = x && _.length >= 2 && !$ && !N.map(function(H, E) {
            var R = E ? !0 : H >= _[E];
            return E === N.length - 1 ? H <= _[E] : R;
          }).some(function(H) {
            return !H;
          }), this.dragTrack)
            this.dragOffset = l, this.startBounds = (0, w.default)(_);
          else {
            if (!$)
              this.dragOffset = 0;
            else {
              var D = o.getHandleCenterPosition(S, e.target);
              this.dragOffset = l - D, l = D;
            }
            this.onStart(l);
          }
        },
        onMouseDown: function(e) {
          if (e.button === 0) {
            this.removeDocumentEvents();
            var n = this.$props.vertical, l = o.getMousePosition(n, e);
            this.onDown(e, l), this.addDocumentMouseEvents();
          }
        },
        onTouchStart: function(e) {
          if (!o.isNotTouchEvent(e)) {
            var n = this.vertical, l = o.getTouchPosition(n, e);
            this.onDown(e, l), this.addDocumentTouchEvents(), o.pauseEvent(e);
          }
        },
        onFocus: function(e) {
          var n = this.vertical;
          if (o.isEventFromHandle(e, this.handlesRefs) && !this.dragTrack) {
            var l = o.getHandleCenterPosition(n, e.target);
            this.dragOffset = 0, this.onStart(l), o.pauseEvent(e), this.$emit("focus", e);
          }
        },
        onBlur: function(e) {
          this.dragTrack || this.onEnd(), this.$emit("blur", e);
        },
        onMouseUp: function() {
          this.handlesRefs[this.prevMovedHandleIndex] && this.handlesRefs[this.prevMovedHandleIndex].clickFocus();
        },
        onMouseMove: function(e) {
          if (!this.sliderRef) {
            this.onEnd();
            return;
          }
          var n = o.getMousePosition(this.vertical, e);
          this.onMove(e, n - this.dragOffset, this.dragTrack, this.startBounds);
        },
        onTouchMove: function(e) {
          if (o.isNotTouchEvent(e) || !this.sliderRef) {
            this.onEnd();
            return;
          }
          var n = o.getTouchPosition(this.vertical, e);
          this.onMove(e, n - this.dragOffset, this.dragTrack, this.startBounds);
        },
        onKeyDown: function(e) {
          this.sliderRef && o.isEventFromHandle(e, this.handlesRefs) && this.onKeyboard(e);
        },
        onClickMarkLabel: function(e, n) {
          var l = this;
          e.stopPropagation(), this.onChange({
            sValue: n
          }), this.setState({
            sValue: n
          }, function() {
            return l.onEnd(!0);
          });
        },
        getSliderStart: function() {
          var e = this.sliderRef, n = this.vertical, l = this.reverse, f = e.getBoundingClientRect();
          return n ? l ? f.bottom : f.top : window.pageXOffset + (l ? f.right : f.left);
        },
        getSliderLength: function() {
          var e = this.sliderRef;
          if (!e)
            return 0;
          var n = e.getBoundingClientRect();
          return this.vertical ? n.height : n.width;
        },
        addDocumentTouchEvents: function() {
          this.onTouchMoveListener = (0, p.default)(this.document, "touchmove", this.onTouchMove), this.onTouchUpListener = (0, p.default)(this.document, "touchend", this.onEnd);
        },
        addDocumentMouseEvents: function() {
          this.onMouseMoveListener = (0, p.default)(this.document, "mousemove", this.onMouseMove), this.onMouseUpListener = (0, p.default)(this.document, "mouseup", this.onEnd);
        },
        removeDocumentEvents: function() {
          this.onTouchMoveListener && this.onTouchMoveListener.remove(), this.onTouchUpListener && this.onTouchUpListener.remove(), this.onMouseMoveListener && this.onMouseMoveListener.remove(), this.onMouseUpListener && this.onMouseUpListener.remove();
        },
        focus: function() {
          var e;
          this.$props.disabled || (e = this.handlesRefs[0]) === null || e === void 0 || e.focus();
        },
        blur: function() {
          var e = this;
          this.$props.disabled || Object.keys(this.handlesRefs).forEach(function(n) {
            var l, f;
            (l = e.handlesRefs[n]) === null || l === void 0 || (f = l.blur) === null || f === void 0 || f.call(l);
          });
        },
        calcValue: function(e) {
          var n = this.vertical, l = this.min, f = this.max, x = Math.abs(Math.max(e, 0) / this.getSliderLength()), S = n ? (1 - x) * (f - l) + l : x * (f - l) + l;
          return S;
        },
        calcValueByPos: function(e) {
          var n = this.reverse ? -1 : 1, l = n * (e - this.getSliderStart()), f = this.trimAlignValue(this.calcValue(l));
          return f;
        },
        calcOffset: function(e) {
          var n = this.min, l = this.max, f = (e - n) / (l - n);
          return Math.max(0, f * 100);
        },
        saveSlider: function(e) {
          this.sliderRef = e;
        },
        saveHandle: function(e, n) {
          this.handlesRefs[e] = n;
        }
      },
      render: function() {
        var e, n = this.prefixCls, l = this.marks, f = this.dots, x = this.step, S = this.included, _ = this.disabled, N = this.vertical, $ = this.reverse, D = this.min, H = this.max, E = this.maximumTrackStyle, R = this.railStyle, A = this.dotStyle, I = this.activeDotStyle, U = this.id, J = this.$attrs, ae = J.class, L = J.style, X = this.renderSlider(), de = X.tracks, fe = X.handles, be = (0, B.default)(n, ae, (e = {}, (0, y.default)(e, "".concat(n, "-with-marks"), Object.keys(l).length), (0, y.default)(e, "".concat(n, "-disabled"), _), (0, y.default)(e, "".concat(n, "-vertical"), N), e)), pe = {
          vertical: N,
          marks: l,
          included: S,
          lowerBound: this.getLowerBound(),
          upperBound: this.getUpperBound(),
          max: H,
          min: D,
          reverse: $,
          class: "".concat(n, "-mark"),
          onClickLabel: _ ? a : this.onClickMarkLabel
        }, Le = (0, y.default)({}, d.default ? "onTouchstartPassive" : "onTouchstart", _ ? a : this.onTouchStart);
        return (0, b.createVNode)("div", (0, V.default)((0, V.default)({
          id: U,
          ref: this.saveSlider,
          tabindex: "-1",
          class: be
        }, Le), {}, {
          onMousedown: _ ? a : this.onMouseDown,
          onMouseup: _ ? a : this.onMouseUp,
          onKeydown: _ ? a : this.onKeyDown,
          onFocus: _ ? a : this.onFocus,
          onBlur: _ ? a : this.onBlur,
          style: L
        }), [(0, b.createVNode)("div", {
          class: "".concat(n, "-rail"),
          style: (0, V.default)((0, V.default)({}, E), R)
        }, null), de, (0, b.createVNode)(C.default, {
          prefixCls: n,
          vertical: N,
          reverse: $,
          marks: l,
          dots: f,
          step: x,
          included: S,
          lowerBound: this.getLowerBound(),
          upperBound: this.getUpperBound(),
          max: H,
          min: D,
          dotStyle: A,
          activeDotStyle: I
        }, null), fe, (0, b.createVNode)(M.default, pe, {
          mark: this.$slots.mark
        }), (0, k.getSlot)(this)]);
      }
    });
  }
  return ce;
}
var Ve;
function Je() {
  if (Ve)
    return re;
  Ve = 1;
  var g = j, P = te;
  Object.defineProperty(re, "__esModule", {
    value: !0
  }), re.default = void 0;
  var b = K, y = g(G()), w = g(he()), V = g(ge()), F = ve(), B = g(He()), T = g($e()), p = k(ye());
  function O(h) {
    if (typeof WeakMap != "function")
      return null;
    var o = /* @__PURE__ */ new WeakMap(), s = /* @__PURE__ */ new WeakMap();
    return (O = function(c) {
      return c ? s : o;
    })(h);
  }
  function k(h, o) {
    if (!o && h && h.__esModule)
      return h;
    if (h === null || P(h) !== "object" && typeof h != "function")
      return { default: h };
    var s = O(o);
    if (s && s.has(h))
      return s.get(h);
    var d = {}, c = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var m in h)
      if (m !== "default" && Object.prototype.hasOwnProperty.call(h, m)) {
        var v = c ? Object.getOwnPropertyDescriptor(h, m) : null;
        v && (v.get || v.set) ? Object.defineProperty(d, m, v) : d[m] = h[m];
      }
    return d.default = h, s && s.set(h, d), d;
  }
  var C = (0, b.defineComponent)({
    compatConfig: {
      MODE: 3
    },
    name: "Slider",
    mixins: [V.default],
    inheritAttrs: !1,
    props: {
      defaultValue: Number,
      value: Number,
      disabled: {
        type: Boolean,
        default: void 0
      },
      autofocus: {
        type: Boolean,
        default: void 0
      },
      tabindex: w.default.oneOfType([w.default.number, w.default.string]),
      reverse: {
        type: Boolean,
        default: void 0
      },
      min: Number,
      max: Number,
      ariaLabelForHandle: String,
      ariaLabelledByForHandle: String,
      ariaValueTextFormatterForHandle: String,
      startPoint: Number
    },
    emits: ["beforeChange", "afterChange", "change"],
    data: function() {
      var o = this.defaultValue !== void 0 ? this.defaultValue : this.min, s = this.value !== void 0 ? this.value : o;
      return {
        sValue: this.trimAlignValue(s),
        dragging: !1
      };
    },
    watch: {
      value: {
        handler: function(o) {
          this.setChangeValue(o);
        },
        deep: !0
      },
      min: function() {
        var o = this.sValue;
        this.setChangeValue(o);
      },
      max: function() {
        var o = this.sValue;
        this.setChangeValue(o);
      }
    },
    methods: {
      setChangeValue: function(o) {
        var s = o !== void 0 ? o : this.sValue, d = this.trimAlignValue(s, this.$props);
        d !== this.sValue && (this.setState({
          sValue: d
        }), p.isValueOutOfRange(s, this.$props) && this.$emit("change", d));
      },
      onChange: function(o) {
        var s = !(0, F.hasProp)(this, "value"), d = o.sValue > this.max ? (0, y.default)((0, y.default)({}, o), {}, {
          sValue: this.max
        }) : o;
        s && this.setState(d);
        var c = d.sValue;
        this.$emit("change", c);
      },
      onStart: function(o) {
        this.setState({
          dragging: !0
        });
        var s = this.sValue;
        this.$emit("beforeChange", s);
        var d = this.calcValueByPos(o);
        this.startValue = d, this.startPosition = o, d !== s && (this.prevMovedHandleIndex = 0, this.onChange({
          sValue: d
        }));
      },
      onEnd: function(o) {
        var s = this.dragging;
        this.removeDocumentEvents(), (s || o) && this.$emit("afterChange", this.sValue), this.setState({
          dragging: !1
        });
      },
      onMove: function(o, s) {
        p.pauseEvent(o);
        var d = this.sValue, c = this.calcValueByPos(s);
        c !== d && this.onChange({
          sValue: c
        });
      },
      onKeyboard: function(o) {
        var s = this.$props, d = s.reverse, c = s.vertical, m = p.getKeyboardValueMutator(o, c, d);
        if (m) {
          p.pauseEvent(o);
          var v = this.sValue, a = m(v, this.$props), i = this.trimAlignValue(a);
          if (i === v)
            return;
          this.onChange({
            sValue: i
          }), this.$emit("afterChange", i), this.onEnd();
        }
      },
      getLowerBound: function() {
        var o = this.$props.startPoint || this.$props.min;
        return this.$data.sValue > o ? o : this.$data.sValue;
      },
      getUpperBound: function() {
        return this.$data.sValue < this.$props.startPoint ? this.$props.startPoint : this.$data.sValue;
      },
      trimAlignValue: function(o) {
        var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        if (o === null)
          return null;
        var d = (0, y.default)((0, y.default)({}, this.$props), s), c = p.ensureValueInRange(o, d);
        return p.ensureValuePrecision(c, d);
      },
      getTrack: function(o) {
        var s = o.prefixCls, d = o.reverse, c = o.vertical, m = o.included, v = o.minimumTrackStyle, a = o.mergedTrackStyle, i = o.length, t = o.offset;
        return (0, b.createVNode)(B.default, {
          class: "".concat(s, "-track"),
          vertical: c,
          included: m,
          offset: t,
          reverse: d,
          length: i,
          style: (0, y.default)((0, y.default)({}, v), a)
        }, null);
      },
      renderSlider: function() {
        var o = this, s = this.prefixCls, d = this.vertical, c = this.included, m = this.disabled, v = this.minimumTrackStyle, a = this.trackStyle, i = this.handleStyle, t = this.tabindex, u = this.ariaLabelForHandle, r = this.ariaLabelledByForHandle, e = this.ariaValueTextFormatterForHandle, n = this.min, l = this.max, f = this.startPoint, x = this.reverse, S = this.handle, _ = this.defaultHandle, N = S || _, $ = this.sValue, D = this.dragging, H = this.calcOffset($), E = N({
          class: "".concat(s, "-handle"),
          prefixCls: s,
          vertical: d,
          offset: H,
          value: $,
          dragging: D,
          disabled: m,
          min: n,
          max: l,
          reverse: x,
          index: 0,
          tabindex: t,
          ariaLabel: u,
          ariaLabelledBy: r,
          ariaValueTextFormatter: e,
          style: i[0] || i,
          ref: function(U) {
            return o.saveHandle(0, U);
          },
          onFocus: this.onFocus,
          onBlur: this.onBlur
        }), R = f !== void 0 ? this.calcOffset(f) : 0, A = a[0] || a;
        return {
          tracks: this.getTrack({
            prefixCls: s,
            reverse: x,
            vertical: d,
            included: c,
            offset: R,
            minimumTrackStyle: v,
            mergedTrackStyle: A,
            length: H - R
          }),
          handles: E
        };
      }
    }
  }), M = (0, T.default)(C);
  return re.default = M, re;
}
var se = {}, ke;
function Qe() {
  if (ke)
    return se;
  ke = 1;
  var g = j, P = te;
  Object.defineProperty(se, "__esModule", {
    value: !0
  }), se.default = void 0;
  var b = K, y = g(Y()), w = g(G()), V = g(me()), F = g(ee()), B = o(he()), T = g(ge()), p = ve(), O = g(He()), k = g($e()), C = o(ye()), M = g(Ae());
  function h(v) {
    if (typeof WeakMap != "function")
      return null;
    var a = /* @__PURE__ */ new WeakMap(), i = /* @__PURE__ */ new WeakMap();
    return (h = function(u) {
      return u ? i : a;
    })(v);
  }
  function o(v, a) {
    if (!a && v && v.__esModule)
      return v;
    if (v === null || P(v) !== "object" && typeof v != "function")
      return { default: v };
    var i = h(a);
    if (i && i.has(v))
      return i.get(v);
    var t = {}, u = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var r in v)
      if (r !== "default" && Object.prototype.hasOwnProperty.call(v, r)) {
        var e = u ? Object.getOwnPropertyDescriptor(v, r) : null;
        e && (e.get || e.set) ? Object.defineProperty(t, r, e) : t[r] = v[r];
      }
    return t.default = v, i && i.set(v, t), t;
  }
  var s = function(a) {
    var i = a.value, t = a.handle, u = a.bounds, r = a.props, e = r.allowCross, n = r.pushable, l = Number(n), f = C.ensureValueInRange(i, r), x = f;
    return !e && t != null && u !== void 0 && (t > 0 && f <= u[t - 1] + l && (x = u[t - 1] + l), t < u.length - 1 && f >= u[t + 1] - l && (x = u[t + 1] - l)), C.ensureValuePrecision(x, r);
  }, d = {
    defaultValue: B.default.arrayOf(B.default.number),
    value: B.default.arrayOf(B.default.number),
    count: Number,
    pushable: (0, B.withUndefined)(B.default.oneOfType([B.default.looseBool, B.default.number])),
    allowCross: {
      type: Boolean,
      default: void 0
    },
    disabled: {
      type: Boolean,
      default: void 0
    },
    reverse: {
      type: Boolean,
      default: void 0
    },
    tabindex: B.default.arrayOf(B.default.number),
    prefixCls: String,
    min: Number,
    max: Number,
    autofocus: {
      type: Boolean,
      default: void 0
    },
    ariaLabelGroupForHandles: Array,
    ariaLabelledByGroupForHandles: Array,
    ariaValueTextFormatterGroupForHandles: Array,
    draggableTrack: {
      type: Boolean,
      default: void 0
    }
  }, c = (0, b.defineComponent)({
    compatConfig: {
      MODE: 3
    },
    name: "Range",
    mixins: [T.default],
    inheritAttrs: !1,
    props: (0, M.default)(d, {
      count: 1,
      allowCross: !0,
      pushable: !1,
      tabindex: [],
      draggableTrack: !1,
      ariaLabelGroupForHandles: [],
      ariaLabelledByGroupForHandles: [],
      ariaValueTextFormatterGroupForHandles: []
    }),
    emits: ["beforeChange", "afterChange", "change"],
    displayName: "Range",
    data: function() {
      var a = this, i = this.count, t = this.min, u = this.max, r = Array.apply(void 0, (0, V.default)(Array(i + 1))).map(function() {
        return t;
      }), e = (0, p.hasProp)(this, "defaultValue") ? this.defaultValue : r, n = this.value;
      n === void 0 && (n = e);
      var l = n.map(function(x, S) {
        return s({
          value: x,
          handle: S,
          props: a.$props
        });
      }), f = l[0] === u ? 0 : l.length - 1;
      return {
        sHandle: null,
        recent: f,
        bounds: l
      };
    },
    watch: {
      value: {
        handler: function(a) {
          var i = this.bounds;
          this.setChangeValue(a || i);
        },
        deep: !0
      },
      min: function() {
        var a = this.value;
        this.setChangeValue(a || this.bounds);
      },
      max: function() {
        var a = this.value;
        this.setChangeValue(a || this.bounds);
      }
    },
    methods: {
      setChangeValue: function(a) {
        var i = this, t = this.bounds, u = a.map(function(e, n) {
          return s({
            value: e,
            handle: n,
            bounds: t,
            props: i.$props
          });
        });
        if (t.length === u.length) {
          if (u.every(function(e, n) {
            return e === t[n];
          }))
            return null;
        } else
          u = a.map(function(e, n) {
            return s({
              value: e,
              handle: n,
              props: i.$props
            });
          });
        if (this.setState({
          bounds: u
        }), a.some(function(e) {
          return C.isValueOutOfRange(e, i.$props);
        })) {
          var r = a.map(function(e) {
            return C.ensureValueInRange(e, i.$props);
          });
          this.$emit("change", r);
        }
      },
      onChange: function(a) {
        var i = !(0, p.hasProp)(this, "value");
        if (i)
          this.setState(a);
        else {
          var t = {};
          ["sHandle", "recent"].forEach(function(e) {
            a[e] !== void 0 && (t[e] = a[e]);
          }), Object.keys(t).length && this.setState(t);
        }
        var u = (0, w.default)((0, w.default)({}, this.$data), a), r = u.bounds;
        this.$emit("change", r);
      },
      positionGetValue: function(a) {
        var i = this.getValue(), t = this.calcValueByPos(a), u = this.getClosestBound(t), r = this.getBoundNeedMoving(t, u), e = i[r];
        if (t === e)
          return null;
        var n = (0, V.default)(i);
        return n[r] = t, n;
      },
      onStart: function(a) {
        var i = this.bounds;
        this.$emit("beforeChange", i);
        var t = this.calcValueByPos(a);
        this.startValue = t, this.startPosition = a;
        var u = this.getClosestBound(t);
        this.prevMovedHandleIndex = this.getBoundNeedMoving(t, u), this.setState({
          sHandle: this.prevMovedHandleIndex,
          recent: this.prevMovedHandleIndex
        });
        var r = i[this.prevMovedHandleIndex];
        if (t !== r) {
          var e = (0, V.default)(i);
          e[this.prevMovedHandleIndex] = t, this.onChange({
            bounds: e
          });
        }
      },
      onEnd: function(a) {
        var i = this.sHandle;
        this.removeDocumentEvents(), i || (this.dragTrack = !1), (i !== null || a) && this.$emit("afterChange", this.bounds), this.setState({
          sHandle: null
        });
      },
      onMove: function(a, i, t, u) {
        C.pauseEvent(a);
        var r = this.$data, e = this.$props, n = e.max || 100, l = e.min || 0;
        if (t) {
          var f = e.vertical ? -i : i;
          f = e.reverse ? -f : f;
          var x = n - Math.max.apply(Math, (0, V.default)(u)), S = l - Math.min.apply(Math, (0, V.default)(u)), _ = Math.min(Math.max(f / (this.getSliderLength() / 100), S), x), N = u.map(function(R) {
            return Math.floor(Math.max(Math.min(R + _, n), l));
          });
          r.bounds.map(function(R, A) {
            return R === N[A];
          }).some(function(R) {
            return !R;
          }) && this.onChange({
            bounds: N
          });
          return;
        }
        var $ = this.bounds, D = this.sHandle, H = this.calcValueByPos(i), E = $[D];
        H !== E && this.moveTo(H);
      },
      onKeyboard: function(a) {
        var i = this.$props, t = i.reverse, u = i.vertical, r = C.getKeyboardValueMutator(a, u, t);
        if (r) {
          C.pauseEvent(a);
          var e = this.bounds, n = this.sHandle, l = e[n === null ? this.recent : n], f = r(l, this.$props), x = s({
            value: f,
            handle: n,
            bounds: e,
            props: this.$props
          });
          if (x === l)
            return;
          var S = !0;
          this.moveTo(x, S);
        }
      },
      getClosestBound: function(a) {
        for (var i = this.bounds, t = 0, u = 1; u < i.length - 1; u += 1)
          a >= i[u] && (t = u);
        return Math.abs(i[t + 1] - a) < Math.abs(i[t] - a) && (t += 1), t;
      },
      getBoundNeedMoving: function(a, i) {
        var t = this.bounds, u = this.recent, r = i, e = t[i + 1] === t[i];
        return e && t[u] === t[i] && (r = u), e && a !== t[i + 1] && (r = a < t[i + 1] ? i : i + 1), r;
      },
      getLowerBound: function() {
        return this.bounds[0];
      },
      getUpperBound: function() {
        var a = this.bounds;
        return a[a.length - 1];
      },
      /**
       * Returns an array of possible slider points, taking into account both
       * `marks` and `step`. The result is cached.
       */
      getPoints: function() {
        var a = this.marks, i = this.step, t = this.min, u = this.max, r = this.internalPointsCache;
        if (!r || r.marks !== a || r.step !== i) {
          var e = (0, w.default)({}, a);
          if (i !== null)
            for (var n = t; n <= u; n += i)
              e[n] = n;
          var l = Object.keys(e).map(parseFloat);
          l.sort(function(f, x) {
            return f - x;
          }), this.internalPointsCache = {
            marks: a,
            step: i,
            points: l
          };
        }
        return this.internalPointsCache.points;
      },
      moveTo: function(a, i) {
        var t = this, u = (0, V.default)(this.bounds), r = this.sHandle, e = this.recent, n = r === null ? e : r;
        u[n] = a;
        var l = n;
        this.$props.pushable !== !1 ? this.pushSurroundingHandles(u, l) : this.$props.allowCross && (u.sort(function(f, x) {
          return f - x;
        }), l = u.indexOf(a)), this.onChange({
          recent: l,
          sHandle: l,
          bounds: u
        }), i && (this.$emit("afterChange", u), this.setState({}, function() {
          t.handlesRefs[l].focus();
        }), this.onEnd());
      },
      pushSurroundingHandles: function(a, i) {
        var t = a[i], u = this.pushable, r = Number(u), e = 0;
        if (a[i + 1] - t < r && (e = 1), t - a[i - 1] < r && (e = -1), e !== 0) {
          var n = i + e, l = e * (a[n] - t);
          this.pushHandle(a, n, e, r - l) || (a[i] = a[n] - e * r);
        }
      },
      pushHandle: function(a, i, t, u) {
        for (var r = a[i], e = a[i]; t * (e - r) < u; ) {
          if (!this.pushHandleOnePoint(a, i, t))
            return a[i] = r, !1;
          e = a[i];
        }
        return !0;
      },
      pushHandleOnePoint: function(a, i, t) {
        var u = this.getPoints(), r = u.indexOf(a[i]), e = r + t;
        if (e >= u.length || e < 0)
          return !1;
        var n = i + t, l = u[e], f = this.pushable, x = Number(f), S = t * (a[n] - l);
        return this.pushHandle(a, n, t, x - S) ? (a[i] = l, !0) : !1;
      },
      trimAlignValue: function(a) {
        var i = this.sHandle, t = this.bounds;
        return s({
          value: a,
          handle: i,
          bounds: t,
          props: this.$props
        });
      },
      ensureValueNotConflict: function(a, i, t) {
        var u = t.allowCross, r = t.pushable, e = this.$data || {}, n = e.bounds;
        if (a = a === void 0 ? e.sHandle : a, r = Number(r), !u && a != null && n !== void 0) {
          if (a > 0 && i <= n[a - 1] + r)
            return n[a - 1] + r;
          if (a < n.length - 1 && i >= n[a + 1] - r)
            return n[a + 1] - r;
        }
        return i;
      },
      getTrack: function(a) {
        var i = a.bounds, t = a.prefixCls, u = a.reverse, r = a.vertical, e = a.included, n = a.offsets, l = a.trackStyle;
        return i.slice(0, -1).map(function(f, x) {
          var S, _ = x + 1, N = (0, F.default)((S = {}, (0, y.default)(S, "".concat(t, "-track"), !0), (0, y.default)(S, "".concat(t, "-track-").concat(_), !0), S));
          return (0, b.createVNode)(O.default, {
            class: N,
            vertical: r,
            reverse: u,
            included: e,
            offset: n[_ - 1],
            length: n[_] - n[_ - 1],
            style: l[x],
            key: _
          }, null);
        });
      },
      renderSlider: function() {
        var a = this, i = this.sHandle, t = this.bounds, u = this.prefixCls, r = this.vertical, e = this.included, n = this.disabled, l = this.min, f = this.max, x = this.reverse, S = this.handle, _ = this.defaultHandle, N = this.trackStyle, $ = this.handleStyle, D = this.tabindex, H = this.ariaLabelGroupForHandles, E = this.ariaLabelledByGroupForHandles, R = this.ariaValueTextFormatterGroupForHandles, A = S || _, I = t.map(function(ae) {
          return a.calcOffset(ae);
        }), U = "".concat(u, "-handle"), J = t.map(function(ae, L) {
          var X, de = D[L] || 0;
          (n || D[L] === null) && (de = null);
          var fe = i === L;
          return A({
            class: (0, F.default)((X = {}, (0, y.default)(X, U, !0), (0, y.default)(X, "".concat(U, "-").concat(L + 1), !0), (0, y.default)(X, "".concat(U, "-dragging"), fe), X)),
            prefixCls: u,
            vertical: r,
            dragging: fe,
            offset: I[L],
            value: ae,
            index: L,
            tabindex: de,
            min: l,
            max: f,
            reverse: x,
            disabled: n,
            style: $[L],
            ref: function(pe) {
              return a.saveHandle(L, pe);
            },
            onFocus: a.onFocus,
            onBlur: a.onBlur,
            ariaLabel: H[L],
            ariaLabelledBy: E[L],
            ariaValueTextFormatter: R[L]
          });
        });
        return {
          tracks: this.getTrack({
            bounds: t,
            prefixCls: u,
            reverse: x,
            vertical: r,
            included: e,
            offsets: I,
            trackStyle: N
          }),
          handles: J
        };
      }
    }
  }), m = (0, k.default)(c);
  return se.default = m, se;
}
var oe = {}, Te;
function Ze() {
  if (Te)
    return oe;
  Te = 1;
  var g = j, P = te;
  Object.defineProperty(oe, "__esModule", {
    value: !0
  }), oe.default = void 0;
  var b = K, y = g(G()), w = B(We()), V = g(Ge());
  function F(p) {
    if (typeof WeakMap != "function")
      return null;
    var O = /* @__PURE__ */ new WeakMap(), k = /* @__PURE__ */ new WeakMap();
    return (F = function(M) {
      return M ? k : O;
    })(p);
  }
  function B(p, O) {
    if (!O && p && p.__esModule)
      return p;
    if (p === null || P(p) !== "object" && typeof p != "function")
      return { default: p };
    var k = F(O);
    if (k && k.has(p))
      return k.get(p);
    var C = {}, M = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var h in p)
      if (h !== "default" && Object.prototype.hasOwnProperty.call(p, h)) {
        var o = M ? Object.getOwnPropertyDescriptor(p, h) : null;
        o && (o.get || o.set) ? Object.defineProperty(C, h, o) : C[h] = p[h];
      }
    return C.default = p, k && k.set(p, C), C;
  }
  var T = (0, b.defineComponent)({
    compatConfig: {
      MODE: 3
    },
    name: "SliderTooltip",
    inheritAttrs: !1,
    props: (0, w.tooltipProps)(),
    setup: function(O, k) {
      var C = k.attrs, M = k.slots, h = (0, b.ref)(null), o = (0, b.ref)(null);
      function s() {
        V.default.cancel(o.value), o.value = null;
      }
      function d() {
        o.value = (0, V.default)(function() {
          var m;
          (m = h.value) === null || m === void 0 || m.forcePopupAlign(), o.value = null;
        });
      }
      var c = function() {
        s(), O.visible && d();
      };
      return (0, b.watch)([function() {
        return O.visible;
      }, function() {
        return O.title;
      }], function() {
        c();
      }, {
        flush: "post",
        immediate: !0
      }), (0, b.onActivated)(function() {
        c();
      }), (0, b.onBeforeUnmount)(function() {
        s();
      }), function() {
        return (0, b.createVNode)(w.default, (0, y.default)((0, y.default)({
          ref: h
        }, O), C), M);
      };
    }
  });
  return oe.default = T, oe;
}
var W = j;
Object.defineProperty(Z, "__esModule", {
  value: !0
});
var De = Z.sliderProps = qe = Z.default = void 0, z = K, et = W(te), tt = W(Y()), Q = W(G()), Oe = W(we()), at = W(Je()), rt = W(Qe()), nt = W(Re()), it = Ue(), ut = W(Ie()), lt = W(Ze()), st = W(ee()), ot = Ke(), dt = ["value", "dragging", "index"], ft = ["tooltipPrefixCls", "range", "id"], ct = function(P) {
  return typeof P == "number" ? P.toString() : "";
}, Ee = function() {
  return {
    id: String,
    prefixCls: String,
    tooltipPrefixCls: String,
    range: {
      type: [Boolean, Object],
      default: void 0
    },
    reverse: {
      type: Boolean,
      default: void 0
    },
    min: Number,
    max: Number,
    step: {
      type: [Number, Object]
    },
    marks: {
      type: Object
    },
    dots: {
      type: Boolean,
      default: void 0
    },
    value: {
      type: [Number, Array]
    },
    defaultValue: {
      type: [Number, Array]
    },
    included: {
      type: Boolean,
      default: void 0
    },
    disabled: {
      type: Boolean,
      default: void 0
    },
    vertical: {
      type: Boolean,
      default: void 0
    },
    tipFormatter: {
      type: [Function, Object],
      default: function() {
        return ct;
      }
    },
    tooltipVisible: {
      type: Boolean,
      default: void 0
    },
    tooltipPlacement: {
      type: String
    },
    getTooltipPopupContainer: {
      type: Function
    },
    autofocus: {
      type: Boolean,
      default: void 0
    },
    handleStyle: {
      type: [Object, Array]
    },
    trackStyle: {
      type: [Object, Array]
    },
    onChange: {
      type: Function
    },
    onAfterChange: {
      type: Function
    },
    onFocus: {
      type: Function
    },
    onBlur: {
      type: Function
    },
    "onUpdate:value": {
      type: Function
    }
  };
};
De = Z.sliderProps = Ee;
var vt = (0, z.defineComponent)({
  compatConfig: {
    MODE: 3
  },
  name: "ASlider",
  inheritAttrs: !1,
  props: Ee(),
  // emits: ['update:value', 'change', 'afterChange', 'blur'],
  slots: ["mark"],
  setup: function(P, b) {
    var y = b.attrs, w = b.slots, V = b.emit, F = b.expose, B = (0, ut.default)("slider", P), T = B.prefixCls, p = B.rootPrefixCls, O = B.direction, k = B.getPopupContainer, C = B.configProvider, M = (0, ot.useInjectFormItemContext)(), h = (0, z.ref)(), o = (0, z.ref)({}), s = function(u, r) {
      o.value[u] = r;
    }, d = (0, z.computed)(function() {
      return P.tooltipPlacement ? P.tooltipPlacement : P.vertical ? O.value === "rtl" ? "left" : "right" : "top";
    }), c = function() {
      var u;
      (u = h.value) === null || u === void 0 || u.focus();
    }, m = function() {
      var u;
      (u = h.value) === null || u === void 0 || u.blur();
    }, v = function(u) {
      V("update:value", u), V("change", u), M.onFieldChange();
    }, a = function(u) {
      V("blur", u);
    };
    F({
      focus: c,
      blur: m
    });
    var i = function(u) {
      var r = u.tooltipPrefixCls, e = u.info, n = e.value, l = e.dragging, f = e.index, x = (0, Oe.default)(e, dt), S = P.tipFormatter, _ = P.tooltipVisible, N = P.getTooltipPopupContainer, $ = S ? o.value[f] || l : !1, D = _ || _ === void 0 && $;
      return (0, z.createVNode)(lt.default, {
        prefixCls: r,
        title: S ? S(n) : "",
        visible: D,
        placement: d.value,
        transitionName: "".concat(p.value, "-zoom-down"),
        key: f,
        overlayClassName: "".concat(T.value, "-tooltip"),
        getPopupContainer: N || k.value
      }, {
        default: function() {
          return [(0, z.createVNode)(nt.default, (0, Q.default)((0, Q.default)({}, x), {}, {
            value: n,
            onMouseenter: function() {
              return s(f, !0);
            },
            onMouseleave: function() {
              return s(f, !1);
            }
          }), null)];
        }
      });
    };
    return function() {
      var t = P.tooltipPrefixCls, u = P.range, r = P.id, e = r === void 0 ? M.id.value : r, n = (0, Oe.default)(P, ft), l = C.getPrefixCls("tooltip", t), f = (0, st.default)(y.class, (0, tt.default)({}, "".concat(T.value, "-rtl"), O.value === "rtl"));
      O.value === "rtl" && !n.vertical && (n.reverse = !n.reverse);
      var x;
      return (0, et.default)(u) === "object" && (x = u.draggableTrack), u ? (0, z.createVNode)(rt.default, (0, Q.default)((0, Q.default)({}, n), {}, {
        step: n.step,
        draggableTrack: x,
        class: f,
        ref: h,
        handle: function(_) {
          return i({
            tooltipPrefixCls: l,
            prefixCls: T.value,
            info: _
          });
        },
        prefixCls: T.value,
        onChange: v,
        onBlur: a
      }), {
        mark: w.mark
      }) : (0, z.createVNode)(at.default, (0, Q.default)((0, Q.default)({}, n), {}, {
        id: e,
        step: n.step,
        class: f,
        ref: h,
        handle: function(_) {
          return i({
            tooltipPrefixCls: l,
            prefixCls: T.value,
            info: _
          });
        },
        prefixCls: T.value,
        onChange: v,
        onBlur: a
      }), {
        mark: w.mark
      });
    };
  }
}), ht = (0, it.withInstall)(vt), qe = Z.default = ht;
const St = /* @__PURE__ */ Xe({
  __proto__: null,
  get default() {
    return qe;
  },
  get sliderProps() {
    return De;
  }
}, [Z]);
export {
  St as i
};
