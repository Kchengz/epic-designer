import { c as u } from "./_commonjsHelpers-c5d32002.js";
import { r as be } from "./_vue_commonjs-external-eb7fec7f.js";
import { r as K, c as I, a as pe, e as ve, b as ge, _ as me } from "./index-815197f3.js";
import { a as _e, _ as we } from "./index-cd698eea.js";
function ye(i, c) {
  for (var o = 0; o < c.length; o++) {
    const r = c[o];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const s in r)
        if (s !== "default" && !(s in i)) {
          const d = Object.getOwnPropertyDescriptor(r, s);
          d && Object.defineProperty(i, s, d.get ? d : {
            enumerable: !0,
            get: () => r[s]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(i, Symbol.toStringTag, { value: "Module" }));
}
var q = {}, X = {}, Y = {}, N = {}, j = {};
Object.defineProperty(j, "__esModule", { value: !0 });
j.default = {
  buttonHeightSmall: "14px",
  buttonHeightMedium: "18px",
  buttonHeightLarge: "22px",
  buttonWidthSmall: "14px",
  buttonWidthMedium: "18px",
  buttonWidthLarge: "22px",
  buttonWidthPressedSmall: "20px",
  buttonWidthPressedMedium: "24px",
  buttonWidthPressedLarge: "28px",
  railHeightSmall: "18px",
  railHeightMedium: "22px",
  railHeightLarge: "26px",
  railWidthSmall: "32px",
  railWidthMedium: "40px",
  railWidthLarge: "48px"
};
var xe = u && u.__importDefault || function(i) {
  return i && i.__esModule ? i : { default: i };
};
Object.defineProperty(N, "__esModule", { value: !0 });
const Se = K, ke = xe(j), Ce = I, $e = {
  name: "Switch",
  common: Ce.commonDark,
  self(i) {
    const { primaryColorSuppl: c, opacityDisabled: o, borderRadius: r, primaryColor: s, textColor2: d, baseColor: $ } = i, a = "rgba(255, 255, 255, .20)";
    return Object.assign(Object.assign({}, ke.default), { iconColor: $, textColor: d, loadingColor: c, opacityDisabled: o, railColor: a, railColorActive: c, buttonBoxShadow: "0px 2px 4px 0 rgba(0, 0, 0, 0.4)", buttonColor: "#FFF", railBorderRadiusSmall: r, railBorderRadiusMedium: r, railBorderRadiusLarge: r, buttonBorderRadiusSmall: r, buttonBorderRadiusMedium: r, buttonBorderRadiusLarge: r, boxShadowFocus: `0 0 8px 0 ${(0, Se.changeColor)(s, { alpha: 0.3 })}` });
  }
};
N.default = $e;
var T = {}, Be = u && u.__importDefault || function(i) {
  return i && i.__esModule ? i : { default: i };
};
Object.defineProperty(T, "__esModule", { value: !0 });
const Re = K, Me = Be(j), Ee = I, Pe = (i) => {
  const { primaryColor: c, opacityDisabled: o, borderRadius: r, textColor3: s } = i, d = "rgba(0, 0, 0, .14)";
  return Object.assign(Object.assign({}, Me.default), { iconColor: s, textColor: "white", loadingColor: c, opacityDisabled: o, railColor: d, railColorActive: c, buttonBoxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)", buttonColor: "#FFF", railBorderRadiusSmall: r, railBorderRadiusMedium: r, railBorderRadiusLarge: r, buttonBorderRadiusSmall: r, buttonBorderRadiusMedium: r, buttonBorderRadiusLarge: r, boxShadowFocus: `0 0 0 2px ${(0, Re.changeColor)(c, { alpha: 0.2 })}` });
}, Oe = {
  name: "Switch",
  common: Ee.commonLight,
  self: Pe
};
T.default = Oe;
(function(i) {
  var c = u && u.__importDefault || function(s) {
    return s && s.__esModule ? s : { default: s };
  };
  Object.defineProperty(i, "__esModule", { value: !0 }), i.switchLight = i.switchDark = void 0;
  var o = N;
  Object.defineProperty(i, "switchDark", { enumerable: !0, get: function() {
    return c(o).default;
  } });
  var r = T;
  Object.defineProperty(i, "switchLight", { enumerable: !0, get: function() {
    return c(r).default;
  } });
})(Y);
var H = {};
Object.defineProperty(H, "__esModule", {
  value: !0
});
const U = _e, t = pe;
H.default = (0, t.cB)("switch", `
 height: var(--n-height);
 min-width: var(--n-width);
 vertical-align: middle;
 user-select: none;
 -webkit-user-select: none;
 display: inline-flex;
 outline: none;
 justify-content: center;
 align-items: center;
`, [(0, t.cE)("children-placeholder", `
 height: var(--n-rail-height);
 display: flex;
 flex-direction: column;
 overflow: hidden;
 pointer-events: none;
 visibility: hidden;
 `), (0, t.cE)("rail-placeholder", `
 display: flex;
 flex-wrap: none;
 `), (0, t.cE)("button-placeholder", `
 width: calc(1.75 * var(--n-rail-height));
 height: var(--n-rail-height);
 `), (0, t.cB)("base-loading", `
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 font-size: calc(var(--n-button-width) - 4px);
 color: var(--n-loading-color);
 transition: color .3s var(--n-bezier);
 `, [(0, U.iconSwitchTransition)({
  left: "50%",
  top: "50%",
  originalTransform: "translateX(-50%) translateY(-50%)"
})]), (0, t.cE)("checked, unchecked", `
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 box-sizing: border-box;
 position: absolute;
 white-space: nowrap;
 top: 0;
 bottom: 0;
 display: flex;
 align-items: center;
 line-height: 1;
 `), (0, t.cE)("checked", `
 right: 0;
 padding-right: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `), (0, t.cE)("unchecked", `
 left: 0;
 justify-content: flex-end;
 padding-left: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `), (0, t.c)("&:focus", [(0, t.cE)("rail", `
 box-shadow: var(--n-box-shadow-focus);
 `)]), (0, t.cM)("round", [(0, t.cE)("rail", "border-radius: calc(var(--n-rail-height) / 2);", [(0, t.cE)("button", "border-radius: calc(var(--n-button-height) / 2);")])]), (0, t.cNotM)("disabled", [(0, t.cNotM)("icon", [(0, t.cM)("rubber-band", [(0, t.cM)("pressed", [(0, t.cE)("rail", [(0, t.cE)("button", "max-width: var(--n-button-width-pressed);")])]), (0, t.cE)("rail", [(0, t.c)("&:active", [(0, t.cE)("button", "max-width: var(--n-button-width-pressed);")])]), (0, t.cM)("active", [(0, t.cM)("pressed", [(0, t.cE)("rail", [(0, t.cE)("button", "left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])]), (0, t.cE)("rail", [(0, t.c)("&:active", [(0, t.cE)("button", "left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])])])])])]), (0, t.cM)("active", [(0, t.cE)("rail", [(0, t.cE)("button", "left: calc(100% - var(--n-button-width) - var(--n-offset))")])]), (0, t.cE)("rail", `
 overflow: hidden;
 height: var(--n-rail-height);
 min-width: var(--n-rail-width);
 border-radius: var(--n-rail-border-radius);
 cursor: pointer;
 position: relative;
 transition:
 opacity .3s var(--n-bezier),
 background .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-rail-color);
 `, [(0, t.cE)("button-icon", `
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 font-size: calc(var(--n-button-height) - 4px);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 display: flex;
 justify-content: center;
 align-items: center;
 line-height: 1;
 `, [(0, U.iconSwitchTransition)()]), (0, t.cE)("button", `
 align-items: center; 
 top: var(--n-offset);
 left: var(--n-offset);
 height: var(--n-button-height);
 width: var(--n-button-width-pressed);
 max-width: var(--n-button-width);
 border-radius: var(--n-button-border-radius);
 background-color: var(--n-button-color);
 box-shadow: var(--n-button-box-shadow);
 box-sizing: border-box;
 cursor: inherit;
 content: "";
 position: absolute;
 transition:
 background-color .3s var(--n-bezier),
 left .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 `)]), (0, t.cM)("active", [(0, t.cE)("rail", "background-color: var(--n-rail-color-active);")]), (0, t.cM)("loading", [(0, t.cE)("rail", `
 cursor: wait;
 `)]), (0, t.cM)("disabled", [(0, t.cE)("rail", `
 cursor: not-allowed;
 opacity: .5;
 `)])]);
(function(i) {
  var c = u && u.__importDefault || function(e) {
    return e && e.__esModule ? e : { default: e };
  };
  Object.defineProperty(i, "__esModule", { value: !0 }), i.switchProps = void 0;
  const o = be, r = K, s = ve, d = ge, $ = we, a = me, G = Y, J = c(H);
  i.switchProps = Object.assign(Object.assign({}, d.useTheme.props), {
    size: {
      type: String,
      default: "medium"
    },
    value: {
      type: [String, Number, Boolean],
      default: void 0
    },
    loading: Boolean,
    defaultValue: {
      type: [String, Number, Boolean],
      default: !1
    },
    disabled: {
      type: Boolean,
      default: void 0
    },
    round: {
      type: Boolean,
      default: !0
    },
    "onUpdate:value": [Function, Array],
    onUpdateValue: [Function, Array],
    checkedValue: {
      type: [String, Number, Boolean],
      default: !0
    },
    uncheckedValue: {
      type: [String, Number, Boolean],
      default: !1
    },
    railStyle: Function,
    rubberBand: {
      type: Boolean,
      default: !0
    },
    /** @deprecated */
    onChange: [Function, Array]
  });
  let y;
  i.default = (0, o.defineComponent)({
    name: "Switch",
    props: i.switchProps,
    setup(e) {
      process.env.NODE_ENV !== "production" && (0, o.watchEffect)(() => {
        e.onChange && (0, a.warnOnce)("switch", "`on-change` is deprecated, please use `on-update:value` instead.");
      }), y === void 0 && (typeof CSS < "u" ? typeof CSS.supports < "u" ? y = CSS.supports("width", "max(1px)") : y = !1 : y = !0);
      const { mergedClsPrefixRef: B, inlineThemeDisabled: x } = (0, d.useConfig)(e), D = (0, d.useTheme)("Switch", "-switch", J.default, G.switchLight, e, B), h = (0, d.useFormItem)(e), { mergedSizeRef: R, mergedDisabledRef: g } = h, S = (0, o.ref)(e.defaultValue), M = (0, o.toRef)(e, "value"), m = (0, s.useMergedState)(M, S), k = (0, o.computed)(() => m.value === e.checkedValue), _ = (0, o.ref)(!1), l = (0, o.ref)(!1), f = (0, o.computed)(() => {
        const { railStyle: n } = e;
        if (n)
          return n({ focused: l.value, checked: k.value });
      });
      function b(n) {
        const { "onUpdate:value": E, onChange: P, onUpdateValue: O } = e, { nTriggerFormInput: F, nTriggerFormChange: V } = h;
        E && (0, a.call)(E, n), O && (0, a.call)(O, n), P && (0, a.call)(P, n), S.value = n, F(), V();
      }
      function Q() {
        const { nTriggerFormFocus: n } = h;
        n();
      }
      function Z() {
        const { nTriggerFormBlur: n } = h;
        n();
      }
      function ee() {
        e.loading || g.value || (m.value !== e.checkedValue ? b(e.checkedValue) : b(e.uncheckedValue));
      }
      function te() {
        l.value = !0, Q();
      }
      function re() {
        l.value = !1, Z(), _.value = !1;
      }
      function oe(n) {
        e.loading || g.value || n.key === " " && (m.value !== e.checkedValue ? b(e.checkedValue) : b(e.uncheckedValue), _.value = !1);
      }
      function ie(n) {
        e.loading || g.value || n.key === " " && (n.preventDefault(), _.value = !0);
      }
      const A = (0, o.computed)(() => {
        const { value: n } = R, { self: { opacityDisabled: E, railColor: P, railColorActive: O, buttonBoxShadow: F, buttonColor: V, boxShadowFocus: ne, loadingColor: ae, textColor: le, iconColor: ce, [(0, a.createKey)("buttonHeight", n)]: p, [(0, a.createKey)("buttonWidth", n)]: se, [(0, a.createKey)("buttonWidthPressed", n)]: de, [(0, a.createKey)("railHeight", n)]: v, [(0, a.createKey)("railWidth", n)]: C, [(0, a.createKey)("railBorderRadius", n)]: ue, [(0, a.createKey)("buttonBorderRadius", n)]: he }, common: { cubicBezierEaseInOut: fe } } = D.value;
        let W, z, L;
        return y ? (W = `calc((${v} - ${p}) / 2)`, z = `max(${v}, ${p})`, L = `max(${C}, calc(${C} + ${p} - ${v}))`) : (W = (0, r.pxfy)(((0, r.depx)(v) - (0, r.depx)(p)) / 2), z = (0, r.pxfy)(Math.max((0, r.depx)(v), (0, r.depx)(p))), L = (0, r.depx)(v) > (0, r.depx)(p) ? C : (0, r.pxfy)((0, r.depx)(C) + (0, r.depx)(p) - (0, r.depx)(v))), {
          "--n-bezier": fe,
          "--n-button-border-radius": he,
          "--n-button-box-shadow": F,
          "--n-button-color": V,
          "--n-button-width": se,
          "--n-button-width-pressed": de,
          "--n-button-height": p,
          "--n-height": z,
          "--n-offset": W,
          "--n-opacity-disabled": E,
          "--n-rail-border-radius": ue,
          "--n-rail-color": P,
          "--n-rail-color-active": O,
          "--n-rail-height": v,
          "--n-rail-width": C,
          "--n-width": L,
          "--n-box-shadow-focus": ne,
          "--n-loading-color": ae,
          "--n-text-color": le,
          "--n-icon-color": ce
        };
      }), w = x ? (0, d.useThemeClass)("switch", (0, o.computed)(() => R.value[0]), A, e) : void 0;
      return {
        handleClick: ee,
        handleBlur: re,
        handleFocus: te,
        handleKeyup: oe,
        handleKeydown: ie,
        mergedRailStyle: f,
        pressed: _,
        mergedClsPrefix: B,
        mergedValue: m,
        checked: k,
        mergedDisabled: g,
        cssVars: x ? void 0 : A,
        themeClass: w == null ? void 0 : w.themeClass,
        onRender: w == null ? void 0 : w.onRender
      };
    },
    render() {
      const { mergedClsPrefix: e, mergedDisabled: B, checked: x, mergedRailStyle: D, onRender: h, $slots: R } = this;
      h == null || h();
      const { checked: g, unchecked: S, icon: M, "checked-icon": m, "unchecked-icon": k } = R, _ = !((0, a.isSlotEmpty)(M) && (0, a.isSlotEmpty)(m) && (0, a.isSlotEmpty)(k));
      return (0, o.h)(
        "div",
        { role: "switch", "aria-checked": x, class: [
          `${e}-switch`,
          this.themeClass,
          _ && `${e}-switch--icon`,
          x && `${e}-switch--active`,
          B && `${e}-switch--disabled`,
          this.round && `${e}-switch--round`,
          this.loading && `${e}-switch--loading`,
          this.pressed && `${e}-switch--pressed`,
          this.rubberBand && `${e}-switch--rubber-band`
        ], tabindex: this.mergedDisabled ? void 0 : 0, style: this.cssVars, onClick: this.handleClick, onFocus: this.handleFocus, onBlur: this.handleBlur, onKeyup: this.handleKeyup, onKeydown: this.handleKeydown },
        (0, o.h)(
          "div",
          { class: `${e}-switch__rail`, "aria-hidden": "true", style: D },
          (0, a.resolveWrappedSlot)(g, (l) => (0, a.resolveWrappedSlot)(S, (f) => l || f ? (0, o.h)(
            "div",
            { "aria-hidden": !0, class: `${e}-switch__children-placeholder` },
            (0, o.h)(
              "div",
              { class: `${e}-switch__rail-placeholder` },
              (0, o.h)("div", { class: `${e}-switch__button-placeholder` }),
              l
            ),
            (0, o.h)(
              "div",
              { class: `${e}-switch__rail-placeholder` },
              (0, o.h)("div", { class: `${e}-switch__button-placeholder` }),
              f
            )
          ) : null)),
          (0, o.h)(
            "div",
            { class: `${e}-switch__button` },
            (0, a.resolveWrappedSlot)(M, (l) => (0, a.resolveWrappedSlot)(m, (f) => (0, a.resolveWrappedSlot)(k, (b) => (0, o.h)($.NIconSwitchTransition, null, {
              default: () => this.loading ? (0, o.h)($.NBaseLoading, { key: "loading", clsPrefix: e, strokeWidth: 20 }) : this.checked && (f || l) ? (0, o.h)("div", { class: `${e}-switch__button-icon`, key: f ? "checked-icon" : "icon" }, f || l) : !this.checked && (b || l) ? (0, o.h)("div", { class: `${e}-switch__button-icon`, key: b ? "unchecked-icon" : "icon" }, b || l) : null
            })))),
            (0, a.resolveWrappedSlot)(g, (l) => l && (0, o.h)("div", { key: "checked", class: `${e}-switch__checked` }, l)),
            (0, a.resolveWrappedSlot)(S, (l) => l && (0, o.h)("div", { key: "unchecked", class: `${e}-switch__unchecked` }, l))
          )
        )
      );
    }
  });
})(X);
(function(i) {
  var c = u && u.__importDefault || function(r) {
    return r && r.__esModule ? r : { default: r };
  };
  Object.defineProperty(i, "__esModule", { value: !0 }), i.switchProps = i.NSwitch = void 0;
  var o = X;
  Object.defineProperty(i, "NSwitch", { enumerable: !0, get: function() {
    return c(o).default;
  } }), Object.defineProperty(i, "switchProps", { enumerable: !0, get: function() {
    return o.switchProps;
  } });
})(q);
const We = /* @__PURE__ */ ye({
  __proto__: null
}, [q]);
export {
  We as i
};
