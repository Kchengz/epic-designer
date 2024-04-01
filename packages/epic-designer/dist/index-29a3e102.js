import { c as k } from "./_commonjsHelpers-c5d32002.js";
import { r as ge } from "./_vue_commonjs-external-eb7fec7f.js";
import { c as xe, a as to, f as ro, e as no, b as ao, _ as lo, i as io } from "./index-815197f3.js";
import { f as so } from "./fade-in-scale-up.cssr-45666b81.js";
function co(l, v) {
  for (var n = 0; n < v.length; n++) {
    const d = v[n];
    if (typeof d != "string" && !Array.isArray(d)) {
      for (const u in d)
        if (u !== "default" && !(u in l)) {
          const h = Object.getOwnPropertyDescriptor(d, u);
          h && Object.defineProperty(l, u, h.get ? h : {
            enumerable: !0,
            get: () => d[u]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(l, Symbol.toStringTag, { value: "Module" }));
}
var we = {}, _e = {}, ye = {}, oe = {}, K = {};
Object.defineProperty(K, "__esModule", { value: !0 });
K.default = {
  railHeight: "4px",
  railWidthVertical: "4px",
  handleSize: "18px",
  dotHeight: "8px",
  dotWidth: "8px",
  dotBorderRadius: "4px"
};
var uo = k && k.__importDefault || function(l) {
  return l && l.__esModule ? l : { default: l };
};
Object.defineProperty(oe, "__esModule", { value: !0 });
const ho = uo(K), fo = xe, vo = {
  name: "Slider",
  common: fo.commonDark,
  self(l) {
    const v = "0 2px 8px 0 rgba(0, 0, 0, 0.12)", { railColor: n, modalColor: d, primaryColorSuppl: u, popoverColor: h, textColor2: _, cardColor: y, borderRadius: V, fontSize: S, opacityDisabled: z } = l;
    return Object.assign(Object.assign({}, ho.default), { fontSize: S, markFontSize: S, railColor: n, railColorHover: n, fillColor: u, fillColorHover: u, opacityDisabled: z, handleColor: "#FFF", dotColor: y, dotColorModal: d, dotColorPopover: h, handleBoxShadow: "0px 2px 4px 0 rgba(0, 0, 0, 0.4)", handleBoxShadowHover: "0px 2px 4px 0 rgba(0, 0, 0, 0.4)", handleBoxShadowActive: "0px 2px 4px 0 rgba(0, 0, 0, 0.4)", handleBoxShadowFocus: "0px 2px 4px 0 rgba(0, 0, 0, 0.4)", indicatorColor: h, indicatorBoxShadow: v, indicatorTextColor: _, indicatorBorderRadius: V, dotBorder: `2px solid ${n}`, dotBorderActive: `2px solid ${u}`, dotBoxShadow: "" });
  }
};
oe.default = vo;
var te = {}, mo = k && k.__importDefault || function(l) {
  return l && l.__esModule ? l : { default: l };
};
Object.defineProperty(te, "__esModule", { value: !0 });
const bo = mo(K), po = xe, go = (l) => {
  const v = "rgba(0, 0, 0, .85)", n = "0 2px 8px 0 rgba(0, 0, 0, 0.12)", { railColor: d, primaryColor: u, baseColor: h, cardColor: _, modalColor: y, popoverColor: V, borderRadius: S, fontSize: z, opacityDisabled: X } = l;
  return Object.assign(Object.assign({}, bo.default), { fontSize: z, markFontSize: z, railColor: d, railColorHover: d, fillColor: u, fillColorHover: u, opacityDisabled: X, handleColor: "#FFF", dotColor: _, dotColorModal: y, dotColorPopover: V, handleBoxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)", handleBoxShadowHover: "0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)", handleBoxShadowActive: "0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)", handleBoxShadowFocus: "0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)", indicatorColor: v, indicatorBoxShadow: n, indicatorTextColor: h, indicatorBorderRadius: S, dotBorder: `2px solid ${d}`, dotBorderActive: `2px solid ${u}`, dotBoxShadow: "" });
}, xo = {
  name: "Slider",
  common: po.commonLight,
  self: go
};
te.default = xo;
(function(l) {
  var v = k && k.__importDefault || function(u) {
    return u && u.__esModule ? u : { default: u };
  };
  Object.defineProperty(l, "__esModule", { value: !0 }), l.sliderLight = l.sliderDark = void 0;
  var n = oe;
  Object.defineProperty(l, "sliderDark", { enumerable: !0, get: function() {
    return v(n).default;
  } });
  var d = te;
  Object.defineProperty(l, "sliderLight", { enumerable: !0, get: function() {
    return v(d).default;
  } });
})(ye);
var P = {};
Object.defineProperty(P, "__esModule", { value: !0 });
P.useRefs = P.isTouchEvent = void 0;
const be = ge;
function wo(l) {
  return window.TouchEvent && l instanceof window.TouchEvent;
}
P.isTouchEvent = wo;
function _o() {
  const l = (0, be.ref)(/* @__PURE__ */ new Map()), v = (n) => (d) => {
    l.value.set(n, d);
  };
  return (0, be.onBeforeUpdate)(() => {
    l.value.clear();
  }), [l, v];
}
P.useRefs = _o;
var re = {};
Object.defineProperty(re, "__esModule", {
  value: !0
});
const r = to, pe = so;
re.default = (0, r.c)([(0, r.cB)("slider", `
 display: block;
 padding: calc((var(--n-handle-size) - var(--n-rail-height)) / 2) 0;
 position: relative;
 z-index: 0;
 width: 100%;
 cursor: pointer;
 user-select: none;
 -webkit-user-select: none;
 `, [(0, r.cM)("reverse", [(0, r.cB)("slider-handles", [(0, r.cB)("slider-handle-wrapper", `
 transform: translate(50%, -50%);
 `)]), (0, r.cB)("slider-dots", [(0, r.cB)("slider-dot", `
 transform: translateX(50%, -50%);
 `)]), (0, r.cM)("vertical", [(0, r.cB)("slider-handles", [(0, r.cB)("slider-handle-wrapper", `
 transform: translate(-50%, -50%);
 `)]), (0, r.cB)("slider-marks", [(0, r.cB)("slider-mark", `
 transform: translateY(calc(-50% + var(--n-dot-height) / 2));
 `)]), (0, r.cB)("slider-dots", [(0, r.cB)("slider-dot", `
 transform: translateX(-50%) translateY(0);
 `)])])]), (0, r.cM)("vertical", `
 padding: 0 calc((var(--n-handle-size) - var(--n-rail-height)) / 2);
 width: var(--n-rail-width-vertical);
 height: 100%;
 `, [(0, r.cB)("slider-handles", `
 top: calc(var(--n-handle-size) / 2);
 right: 0;
 bottom: calc(var(--n-handle-size) / 2);
 left: 0;
 `, [(0, r.cB)("slider-handle-wrapper", `
 top: unset;
 left: 50%;
 transform: translate(-50%, 50%);
 `)]), (0, r.cB)("slider-rail", `
 height: 100%;
 `, [(0, r.cE)("fill", `
 top: unset;
 right: 0;
 bottom: unset;
 left: 0;
 `)]), (0, r.cM)("with-mark", `
 width: var(--n-rail-width-vertical);
 margin: 0 32px 0 8px;
 `), (0, r.cB)("slider-marks", `
 top: calc(var(--n-handle-size) / 2);
 right: unset;
 bottom: calc(var(--n-handle-size) / 2);
 left: 22px;
 font-size: var(--n-mark-font-size);
 `, [(0, r.cB)("slider-mark", `
 transform: translateY(50%);
 white-space: nowrap;
 `)]), (0, r.cB)("slider-dots", `
 top: calc(var(--n-handle-size) / 2);
 right: unset;
 bottom: calc(var(--n-handle-size) / 2);
 left: 50%;
 `, [(0, r.cB)("slider-dot", `
 transform: translateX(-50%) translateY(50%);
 `)])]), (0, r.cM)("disabled", `
 cursor: not-allowed;
 opacity: var(--n-opacity-disabled);
 `, [(0, r.cB)("slider-handle", `
 cursor: not-allowed;
 `)]), (0, r.cM)("with-mark", `
 width: 100%;
 margin: 8px 0 32px 0;
 `), (0, r.c)("&:hover", [(0, r.cB)("slider-rail", {
  backgroundColor: "var(--n-rail-color-hover)"
}, [(0, r.cE)("fill", {
  backgroundColor: "var(--n-fill-color-hover)"
})]), (0, r.cB)("slider-handle", {
  boxShadow: "var(--n-handle-box-shadow-hover)"
})]), (0, r.cM)("active", [(0, r.cB)("slider-rail", {
  backgroundColor: "var(--n-rail-color-hover)"
}, [(0, r.cE)("fill", {
  backgroundColor: "var(--n-fill-color-hover)"
})]), (0, r.cB)("slider-handle", {
  boxShadow: "var(--n-handle-box-shadow-hover)"
})]), (0, r.cB)("slider-marks", `
 position: absolute;
 top: 18px;
 left: calc(var(--n-handle-size) / 2);
 right: calc(var(--n-handle-size) / 2);
 `, [(0, r.cB)("slider-mark", `
 position: absolute;
 transform: translateX(-50%);
 white-space: nowrap;
 `)]), (0, r.cB)("slider-rail", `
 width: 100%;
 position: relative;
 height: var(--n-rail-height);
 background-color: var(--n-rail-color);
 transition: background-color .3s var(--n-bezier);
 border-radius: calc(var(--n-rail-height) / 2);
 `, [(0, r.cE)("fill", `
 position: absolute;
 top: 0;
 bottom: 0;
 border-radius: calc(var(--n-rail-height) / 2);
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-fill-color);
 `)]), (0, r.cB)("slider-handles", `
 position: absolute;
 top: 0;
 right: calc(var(--n-handle-size) / 2);
 bottom: 0;
 left: calc(var(--n-handle-size) / 2);
 `, [(0, r.cB)("slider-handle-wrapper", `
 outline: none;
 position: absolute;
 top: 50%;
 transform: translate(-50%, -50%);
 cursor: pointer;
 display: flex;
 `, [(0, r.cB)("slider-handle", `
 height: var(--n-handle-size);
 width: var(--n-handle-size);
 border-radius: 50%;
 overflow: hidden;
 transition: box-shadow .2s var(--n-bezier), background-color .3s var(--n-bezier);
 background-color: var(--n-handle-color);
 box-shadow: var(--n-handle-box-shadow);
 `, [(0, r.c)("&:hover", `
 box-shadow: var(--n-handle-box-shadow-hover);
 `)]), (0, r.c)("&:focus", [(0, r.cB)("slider-handle", `
 box-shadow: var(--n-handle-box-shadow-focus);
 `, [(0, r.c)("&:hover", `
 box-shadow: var(--n-handle-box-shadow-active);
 `)])])])]), (0, r.cB)("slider-dots", `
 position: absolute;
 top: 50%;
 left: calc(var(--n-handle-size) / 2);
 right: calc(var(--n-handle-size) / 2);
 `, [(0, r.cM)("transition-disabled", [(0, r.cB)("slider-dot", "transition: none;")]), (0, r.cB)("slider-dot", `
 transition:
 border-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 position: absolute;
 transform: translate(-50%, -50%);
 height: var(--n-dot-height);
 width: var(--n-dot-width);
 border-radius: var(--n-dot-border-radius);
 overflow: hidden;
 box-sizing: border-box;
 border: var(--n-dot-border);
 background-color: var(--n-dot-color);
 `, [(0, r.cM)("active", "border: var(--n-dot-border-active);")])])]), (0, r.cB)("slider-handle-indicator", `
 font-size: var(--n-font-size);
 padding: 6px 10px;
 border-radius: var(--n-indicator-border-radius);
 color: var(--n-indicator-text-color);
 background-color: var(--n-indicator-color);
 box-shadow: var(--n-indicator-box-shadow);
 `, [(0, pe.fadeInScaleUpTransition)()]), (0, r.cB)("slider-handle-indicator", `
 font-size: var(--n-font-size);
 padding: 6px 10px;
 border-radius: var(--n-indicator-border-radius);
 color: var(--n-indicator-text-color);
 background-color: var(--n-indicator-color);
 box-shadow: var(--n-indicator-box-shadow);
 `, [(0, r.cM)("top", `
 margin-bottom: 12px;
 `), (0, r.cM)("right", `
 margin-left: 12px;
 `), (0, r.cM)("bottom", `
 margin-top: 12px;
 `), (0, r.cM)("left", `
 margin-right: 12px;
 `), (0, pe.fadeInScaleUpTransition)()]), (0, r.insideModal)((0, r.cB)("slider", [(0, r.cB)("slider-dot", "background-color: var(--n-dot-color-modal);")])), (0, r.insidePopover)((0, r.cB)("slider", [(0, r.cB)("slider-dot", "background-color: var(--n-dot-color-popover);")]))]);
(function(l) {
  var v = k && k.__importDefault || function(a) {
    return a && a.__esModule ? a : { default: a };
  };
  Object.defineProperty(l, "__esModule", { value: !0 }), l.sliderProps = void 0;
  const n = ge, d = ro, u = no, h = io, _ = ao, y = lo, V = ye, S = P, z = v(re), X = 0;
  l.sliderProps = Object.assign(Object.assign({}, _.useTheme.props), { to: y.useAdjustedTo.propTo, defaultValue: {
    type: [Number, Array],
    default: 0
  }, marks: Object, disabled: {
    type: Boolean,
    default: void 0
  }, formatTooltip: Function, keyboard: {
    type: Boolean,
    default: !0
  }, min: {
    type: Number,
    default: 0
  }, max: {
    type: Number,
    default: 100
  }, step: {
    type: [Number, String],
    default: 1
  }, range: Boolean, value: [Number, Array], placement: String, showTooltip: {
    type: Boolean,
    default: void 0
  }, tooltip: {
    type: Boolean,
    default: !0
  }, vertical: Boolean, reverse: Boolean, "onUpdate:value": [Function, Array], onUpdateValue: [Function, Array] }), l.default = (0, n.defineComponent)({
    name: "Slider",
    props: l.sliderProps,
    setup(a) {
      const { mergedClsPrefixRef: c, namespaceRef: Y, inlineThemeDisabled: R } = (0, _.useConfig)(a), g = (0, _.useTheme)("Slider", "-slider", z.default, V.sliderLight, a, c), m = (0, n.ref)(null), [O, j] = (0, S.useRefs)(), [Be, ke] = (0, S.useRefs)(), Se = (0, n.ref)(/* @__PURE__ */ new Set()), ne = (0, _.useFormItem)(a), { mergedDisabledRef: F } = ne, ae = (0, n.computed)(() => {
        const { step: e } = a;
        if (Number(e) <= 0 || e === "mark")
          return 0;
        const o = e.toString();
        let t = 0;
        return o.includes(".") && (t = o.length - o.indexOf(".") - 1), t;
      }), q = (0, n.ref)(a.defaultValue), Ce = (0, n.toRef)(a, "value"), W = (0, u.useMergedState)(Ce, q), x = (0, n.computed)(() => {
        const { value: e } = W;
        return (a.range ? e : [e]).map(he);
      }), le = (0, n.computed)(() => x.value.length > 2), Re = (0, n.computed)(() => a.placement === void 0 ? a.vertical ? "right" : "top" : a.placement), ie = (0, n.computed)(() => {
        const { marks: e } = a;
        return e ? Object.keys(e).map(parseFloat) : null;
      }), w = (0, n.ref)(-1), se = (0, n.ref)(-1), M = (0, n.ref)(-1), T = (0, n.ref)(!1), H = (0, n.ref)(!1), G = (0, n.computed)(() => {
        const { vertical: e, reverse: o } = a;
        return e ? o ? "top" : "bottom" : o ? "right" : "left";
      }), Me = (0, n.computed)(() => {
        if (le.value)
          return;
        const e = x.value, o = A(a.range ? Math.min(...e) : a.min), t = A(a.range ? Math.max(...e) : e[0]), { value: i } = G;
        return a.vertical ? {
          [i]: `${o}%`,
          height: `${t - o}%`
        } : {
          [i]: `${o}%`,
          width: `${t - o}%`
        };
      }), Te = (0, n.computed)(() => {
        const e = [], { marks: o } = a;
        if (o) {
          const t = x.value.slice();
          t.sort((b, p) => b - p);
          const { value: i } = G, { value: s } = le, { range: f } = a, B = s ? () => !1 : (b) => f ? b >= t[0] && b <= t[t.length - 1] : b <= t[0];
          for (const b of Object.keys(o)) {
            const p = Number(b);
            e.push({
              active: B(p),
              label: o[b],
              style: {
                [i]: `${A(p)}%`
              }
            });
          }
        }
        return e;
      });
      function ze(e, o) {
        const t = A(e), { value: i } = G;
        return {
          [i]: `${t}%`,
          zIndex: o === w.value ? 1 : 0
        };
      }
      function de(e) {
        return a.showTooltip || M.value === e || w.value === e && T.value;
      }
      function De(e) {
        return T.value ? !(w.value === e && se.value === e) : !0;
      }
      function $e(e) {
        var o;
        ~e && (w.value = e, (o = O.value.get(e)) === null || o === void 0 || o.focus());
      }
      function Pe() {
        Be.value.forEach((e, o) => {
          de(o) && e.syncPosition();
        });
      }
      function ce(e) {
        const { "onUpdate:value": o, onUpdateValue: t } = a, { nTriggerFormInput: i, nTriggerFormChange: s } = ne;
        t && (0, y.call)(t, e), o && (0, y.call)(o, e), q.value = e, i(), s();
      }
      function ue(e) {
        const { range: o } = a;
        if (o) {
          if (Array.isArray(e)) {
            const { value: t } = x;
            e.join() !== t.join() && ce(e);
          }
        } else
          Array.isArray(e) || x.value[0] !== e && ce(e);
      }
      function J(e, o) {
        if (a.range) {
          const t = x.value.slice();
          t.splice(o, 1, e), ue(t);
        } else
          ue(e);
      }
      function Q(e, o, t) {
        const i = t !== void 0;
        t || (t = e - o > 0 ? 1 : -1);
        const s = ie.value || [], { step: f } = a;
        if (f === "mark") {
          const p = I(e, s.concat(o), i ? t : void 0);
          return p ? p.value : o;
        }
        if (f <= 0)
          return o;
        const { value: B } = ae;
        let b;
        if (i) {
          const p = Number((o / f).toFixed(B)), C = Math.floor(p), Z = p > C ? C : C - 1, ee = p < C ? C : C + 1;
          b = I(o, [
            Number((Z * f).toFixed(B)),
            Number((ee * f).toFixed(B)),
            ...s
          ], t);
        } else {
          const p = je(e);
          b = I(e, [...s, p]);
        }
        return b ? he(b.value) : o;
      }
      function he(e) {
        return Math.min(a.max, Math.max(a.min, e));
      }
      function A(e) {
        const { max: o, min: t } = a;
        return (e - t) / (o - t) * 100;
      }
      function Ve(e) {
        const { max: o, min: t } = a;
        return t + (o - t) * e;
      }
      function je(e) {
        const { step: o, min: t } = a;
        if (Number(o) <= 0 || o === "mark")
          return e;
        const i = Math.round((e - t) / o) * o + t;
        return Number(i.toFixed(ae.value));
      }
      function I(e, o = ie.value, t) {
        if (!(o != null && o.length))
          return null;
        let i = null, s = -1;
        for (; ++s < o.length; ) {
          const f = o[s] - e, B = Math.abs(f);
          // find marks in the same direction
          (t === void 0 || f * t > 0) && (i === null || B < i.distance) && (i = {
            index: s,
            distance: B,
            value: o[s]
          });
        }
        return i;
      }
      function fe(e) {
        const o = m.value;
        if (!o)
          return;
        const t = (0, S.isTouchEvent)(e) ? e.touches[0] : e, i = o.getBoundingClientRect();
        let s;
        return a.vertical ? s = (i.bottom - t.clientY) / i.height : s = (t.clientX - i.left) / i.width, a.reverse && (s = 1 - s), Ve(s);
      }
      function Oe(e) {
        if (F.value || !a.keyboard)
          return;
        const { vertical: o, reverse: t } = a;
        switch (e.key) {
          case "ArrowUp":
            e.preventDefault(), E(o && t ? -1 : 1);
            break;
          case "ArrowRight":
            e.preventDefault(), E(!o && t ? -1 : 1);
            break;
          case "ArrowDown":
            e.preventDefault(), E(o && t ? 1 : -1);
            break;
          case "ArrowLeft":
            e.preventDefault(), E(!o && t ? 1 : -1);
            break;
        }
      }
      function E(e) {
        const o = w.value;
        if (o === -1)
          return;
        const { step: t } = a, i = x.value[o], s = Number(t) <= 0 || t === "mark" ? i : i + t * e;
        J(
          // Avoid the number of value does not change when `step` is null
          Q(s, i, e > 0 ? 1 : -1),
          o
        );
      }
      function Fe(e) {
        var o, t;
        if (F.value || !(0, S.isTouchEvent)(e) && e.button !== X)
          return;
        const i = fe(e);
        if (i === void 0)
          return;
        const s = x.value.slice(), f = a.range ? (t = (o = I(i, s)) === null || o === void 0 ? void 0 : o.index) !== null && t !== void 0 ? t : -1 : 0;
        f !== -1 && (e.preventDefault(), $e(f), He(), J(Q(i, x.value[f]), f));
      }
      function He() {
        T.value || (T.value = !0, (0, h.on)("touchend", document, L), (0, h.on)("mouseup", document, L), (0, h.on)("touchmove", document, U), (0, h.on)("mousemove", document, U));
      }
      function N() {
        T.value && (T.value = !1, (0, h.off)("touchend", document, L), (0, h.off)("mouseup", document, L), (0, h.off)("touchmove", document, U), (0, h.off)("mousemove", document, U));
      }
      function U(e) {
        const { value: o } = w;
        if (!T.value || o === -1) {
          N();
          return;
        }
        const t = fe(e);
        J(Q(t, x.value[o]), o);
      }
      function L() {
        N();
      }
      function Ae(e) {
        w.value = e, F.value || (M.value = e);
      }
      function Ie(e) {
        w.value === e && (w.value = -1, N()), M.value === e && (M.value = -1);
      }
      function Ee(e) {
        M.value = e;
      }
      function Ne(e) {
        M.value === e && (M.value = -1);
      }
      (0, n.watch)(w, (e, o) => void (0, n.nextTick)(() => se.value = o)), (0, n.watch)(W, () => {
        if (a.marks) {
          if (H.value)
            return;
          H.value = !0, (0, n.nextTick)(() => {
            H.value = !1;
          });
        }
        (0, n.nextTick)(Pe);
      }), (0, n.onBeforeUnmount)(() => {
        N();
      });
      const ve = (0, n.computed)(() => {
        const { self: { markFontSize: e, railColor: o, railColorHover: t, fillColor: i, fillColorHover: s, handleColor: f, opacityDisabled: B, dotColor: b, dotColorModal: p, handleBoxShadow: C, handleBoxShadowHover: Z, handleBoxShadowActive: ee, handleBoxShadowFocus: Ue, dotBorder: Le, dotBoxShadow: Ke, railHeight: Xe, railWidthVertical: Ye, handleSize: qe, dotHeight: We, dotWidth: Ge, dotBorderRadius: Je, fontSize: Qe, dotBorderActive: Ze, dotColorPopover: eo }, common: { cubicBezierEaseInOut: oo } } = g.value;
        return {
          "--n-bezier": oo,
          "--n-dot-border": Le,
          "--n-dot-border-active": Ze,
          "--n-dot-border-radius": Je,
          "--n-dot-box-shadow": Ke,
          "--n-dot-color": b,
          "--n-dot-color-modal": p,
          "--n-dot-color-popover": eo,
          "--n-dot-height": We,
          "--n-dot-width": Ge,
          "--n-fill-color": i,
          "--n-fill-color-hover": s,
          "--n-font-size": Qe,
          "--n-handle-box-shadow": C,
          "--n-handle-box-shadow-active": ee,
          "--n-handle-box-shadow-focus": Ue,
          "--n-handle-box-shadow-hover": Z,
          "--n-handle-color": f,
          "--n-handle-size": qe,
          "--n-opacity-disabled": B,
          "--n-rail-color": o,
          "--n-rail-color-hover": t,
          "--n-rail-height": Xe,
          "--n-rail-width-vertical": Ye,
          "--n-mark-font-size": e
        };
      }), D = R ? (0, _.useThemeClass)("slider", void 0, ve, a) : void 0, me = (0, n.computed)(() => {
        const { self: { fontSize: e, indicatorColor: o, indicatorBoxShadow: t, indicatorTextColor: i, indicatorBorderRadius: s } } = g.value;
        return {
          "--n-font-size": e,
          "--n-indicator-border-radius": s,
          "--n-indicator-box-shadow": t,
          "--n-indicator-color": o,
          "--n-indicator-text-color": i
        };
      }), $ = R ? (0, _.useThemeClass)("slider-indicator", void 0, me, a) : void 0;
      return {
        mergedClsPrefix: c,
        namespace: Y,
        uncontrolledValue: q,
        mergedValue: W,
        mergedDisabled: F,
        mergedPlacement: Re,
        isMounted: (0, u.useIsMounted)(),
        adjustedTo: (0, y.useAdjustedTo)(a),
        dotTransitionDisabled: H,
        markInfos: Te,
        isShowTooltip: de,
        shouldKeepTooltipTransition: De,
        handleRailRef: m,
        setHandleRefs: j,
        setFollowerRefs: ke,
        fillStyle: Me,
        getHandleStyle: ze,
        activeIndex: w,
        arrifiedValues: x,
        followerEnabledIndexSet: Se,
        handleRailMouseDown: Fe,
        handleHandleFocus: Ae,
        handleHandleBlur: Ie,
        handleHandleMouseEnter: Ee,
        handleHandleMouseLeave: Ne,
        handleRailKeyDown: Oe,
        indicatorCssVars: R ? void 0 : me,
        indicatorThemeClass: $ == null ? void 0 : $.themeClass,
        indicatorOnRender: $ == null ? void 0 : $.onRender,
        cssVars: R ? void 0 : ve,
        themeClass: D == null ? void 0 : D.themeClass,
        onRender: D == null ? void 0 : D.onRender
      };
    },
    render() {
      var a;
      const { mergedClsPrefix: c, themeClass: Y, formatTooltip: R } = this;
      return (a = this.onRender) === null || a === void 0 || a.call(this), (0, n.h)(
        "div",
        { class: [
          `${c}-slider`,
          Y,
          {
            [`${c}-slider--disabled`]: this.mergedDisabled,
            [`${c}-slider--active`]: this.activeIndex !== -1,
            [`${c}-slider--with-mark`]: this.marks,
            [`${c}-slider--vertical`]: this.vertical,
            [`${c}-slider--reverse`]: this.reverse
          }
        ], style: this.cssVars, onKeydown: this.handleRailKeyDown, onMousedown: this.handleRailMouseDown, onTouchstart: this.handleRailMouseDown },
        (0, n.h)(
          "div",
          { class: `${c}-slider-rail` },
          (0, n.h)("div", { class: `${c}-slider-rail__fill`, style: this.fillStyle }),
          this.marks ? (0, n.h)("div", { class: [
            `${c}-slider-dots`,
            this.dotTransitionDisabled && `${c}-slider-dots--transition-disabled`
          ] }, this.markInfos.map((g) => (0, n.h)("div", { key: g.label, class: [
            `${c}-slider-dot`,
            {
              [`${c}-slider-dot--active`]: g.active
            }
          ], style: g.style }))) : null,
          (0, n.h)("div", { ref: "handleRailRef", class: `${c}-slider-handles` }, this.arrifiedValues.map((g, m) => {
            const O = this.isShowTooltip(m);
            return (0, n.h)(d.VBinder, null, {
              default: () => [
                (0, n.h)(d.VTarget, null, {
                  default: () => (0, n.h)("div", { ref: this.setHandleRefs(m), class: `${c}-slider-handle-wrapper`, tabindex: this.mergedDisabled ? -1 : 0, style: this.getHandleStyle(g, m), onFocus: () => {
                    this.handleHandleFocus(m);
                  }, onBlur: () => {
                    this.handleHandleBlur(m);
                  }, onMouseenter: () => {
                    this.handleHandleMouseEnter(m);
                  }, onMouseleave: () => {
                    this.handleHandleMouseLeave(m);
                  } }, (0, y.resolveSlot)(this.$slots.thumb, () => [
                    (0, n.h)("div", { class: `${c}-slider-handle` })
                  ]))
                }),
                this.tooltip && (0, n.h)(d.VFollower, { ref: this.setFollowerRefs(m), show: O, to: this.adjustedTo, enabled: this.showTooltip && !this.range || this.followerEnabledIndexSet.has(m), teleportDisabled: this.adjustedTo === y.useAdjustedTo.tdkey, placement: this.mergedPlacement, containerClass: this.namespace }, {
                  default: () => (0, n.h)(n.Transition, { name: "fade-in-scale-up-transition", appear: this.isMounted, css: this.shouldKeepTooltipTransition(m), onEnter: () => {
                    this.followerEnabledIndexSet.add(m);
                  }, onAfterLeave: () => {
                    this.followerEnabledIndexSet.delete(m);
                  } }, {
                    default: () => {
                      var j;
                      return O ? ((j = this.indicatorOnRender) === null || j === void 0 || j.call(this), (0, n.h)("div", { class: [
                        `${c}-slider-handle-indicator`,
                        this.indicatorThemeClass,
                        `${c}-slider-handle-indicator--${this.mergedPlacement}`
                      ], style: this.indicatorCssVars }, typeof R == "function" ? R(g) : g)) : null;
                    }
                  })
                })
              ]
            });
          })),
          this.marks ? (0, n.h)("div", { class: `${c}-slider-marks` }, this.markInfos.map((g) => (0, n.h)("div", { key: g.label, class: `${c}-slider-mark`, style: g.style }, g.label))) : null
        )
      );
    }
  });
})(_e);
(function(l) {
  var v = k && k.__importDefault || function(d) {
    return d && d.__esModule ? d : { default: d };
  };
  Object.defineProperty(l, "__esModule", { value: !0 }), l.sliderProps = l.NSlider = void 0;
  var n = _e;
  Object.defineProperty(l, "NSlider", { enumerable: !0, get: function() {
    return v(n).default;
  } }), Object.defineProperty(l, "sliderProps", { enumerable: !0, get: function() {
    return n.sliderProps;
  } });
})(we);
const Co = /* @__PURE__ */ co({
  __proto__: null
}, [we]);
export {
  Co as i
};
