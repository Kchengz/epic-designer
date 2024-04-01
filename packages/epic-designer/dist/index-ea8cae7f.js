import { c as z } from "./_commonjsHelpers-c5d32002.js";
import { r as Ge } from "./_vue_commonjs-external-eb7fec7f.js";
import { r as ge, _ as ue, c as me, a as Pe, e as Re, p as ke, b as We } from "./index-815197f3.js";
import { b as je } from "./index-de83403a.js";
import { f as Ne, a as Le, _ as qe } from "./index-cd698eea.js";
var Qe = {}, _e = {}, X = {};
Object.defineProperty(X, "__esModule", { value: !0 });
X.createPressedColor = X.createHoverColor = void 0;
const Se = ge;
function Ve(l) {
  return (0, Se.composite)(l, [255, 255, 255, 0.16]);
}
X.createHoverColor = Ve;
function Xe(l) {
  return (0, Se.composite)(l, [0, 0, 0, 0.12]);
}
X.createPressedColor = Xe;
var U = {};
Object.defineProperty(U, "__esModule", { value: !0 });
U.buttonGroupInjectionKey = void 0;
const Ye = ue;
U.buttonGroupInjectionKey = (0, Ye.createInjectionKey)("n-button-group");
var Te = {}, be = {}, xe = {}, fe = {};
Object.defineProperty(fe, "__esModule", { value: !0 });
fe.default = {
  paddingTiny: "0 6px",
  paddingSmall: "0 10px",
  paddingMedium: "0 14px",
  paddingLarge: "0 18px",
  paddingRoundTiny: "0 10px",
  paddingRoundSmall: "0 14px",
  paddingRoundMedium: "0 18px",
  paddingRoundLarge: "0 22px",
  iconMarginTiny: "6px",
  iconMarginSmall: "6px",
  iconMarginMedium: "6px",
  iconMarginLarge: "6px",
  iconSizeTiny: "14px",
  iconSizeSmall: "18px",
  iconSizeMedium: "18px",
  iconSizeLarge: "20px",
  rippleDuration: ".6s"
};
(function(l) {
  var p = z && z.__importDefault || function(I) {
    return I && I.__esModule ? I : { default: I };
  };
  Object.defineProperty(l, "__esModule", { value: !0 }), l.self = void 0;
  const i = p(fe), _ = me, K = (I) => {
    const { heightTiny: ee, heightSmall: oe, heightMedium: R, heightLarge: j, borderRadius: r, fontSizeTiny: re, fontSizeSmall: te, fontSizeMedium: Y, fontSizeLarge: o, opacityDisabled: N, textColor2: y, textColor3: B, primaryColorHover: c, primaryColorPressed: S, borderColor: L, primaryColor: g, baseColor: a, infoColor: T, infoColorHover: H, infoColorPressed: q, successColor: E, successColorHover: m, successColorPressed: F, warningColor: w, warningColorHover: $, warningColorPressed: Q, errorColor: P, errorColorHover: h, errorColorPressed: n, fontWeight: d, buttonColor2: C, buttonColor2Hover: e, buttonColor2Pressed: M, fontWeightStrong: O } = I;
    return Object.assign(Object.assign({}, i.default), {
      heightTiny: ee,
      heightSmall: oe,
      heightMedium: R,
      heightLarge: j,
      borderRadiusTiny: r,
      borderRadiusSmall: r,
      borderRadiusMedium: r,
      borderRadiusLarge: r,
      fontSizeTiny: re,
      fontSizeSmall: te,
      fontSizeMedium: Y,
      fontSizeLarge: o,
      opacityDisabled: N,
      // secondary
      colorOpacitySecondary: "0.16",
      colorOpacitySecondaryHover: "0.22",
      colorOpacitySecondaryPressed: "0.28",
      colorSecondary: C,
      colorSecondaryHover: e,
      colorSecondaryPressed: M,
      // tertiary
      colorTertiary: C,
      colorTertiaryHover: e,
      colorTertiaryPressed: M,
      // quaternary
      colorQuaternary: "#0000",
      colorQuaternaryHover: e,
      colorQuaternaryPressed: M,
      // default type
      color: "#0000",
      colorHover: "#0000",
      colorPressed: "#0000",
      colorFocus: "#0000",
      colorDisabled: "#0000",
      textColor: y,
      textColorTertiary: B,
      textColorHover: c,
      textColorPressed: S,
      textColorFocus: c,
      textColorDisabled: y,
      textColorText: y,
      textColorTextHover: c,
      textColorTextPressed: S,
      textColorTextFocus: c,
      textColorTextDisabled: y,
      textColorGhost: y,
      textColorGhostHover: c,
      textColorGhostPressed: S,
      textColorGhostFocus: c,
      textColorGhostDisabled: y,
      border: `1px solid ${L}`,
      borderHover: `1px solid ${c}`,
      borderPressed: `1px solid ${S}`,
      borderFocus: `1px solid ${c}`,
      borderDisabled: `1px solid ${L}`,
      rippleColor: g,
      // primary
      colorPrimary: g,
      colorHoverPrimary: c,
      colorPressedPrimary: S,
      colorFocusPrimary: c,
      colorDisabledPrimary: g,
      textColorPrimary: a,
      textColorHoverPrimary: a,
      textColorPressedPrimary: a,
      textColorFocusPrimary: a,
      textColorDisabledPrimary: a,
      textColorTextPrimary: g,
      textColorTextHoverPrimary: c,
      textColorTextPressedPrimary: S,
      textColorTextFocusPrimary: c,
      textColorTextDisabledPrimary: y,
      textColorGhostPrimary: g,
      textColorGhostHoverPrimary: c,
      textColorGhostPressedPrimary: S,
      textColorGhostFocusPrimary: c,
      textColorGhostDisabledPrimary: g,
      borderPrimary: `1px solid ${g}`,
      borderHoverPrimary: `1px solid ${c}`,
      borderPressedPrimary: `1px solid ${S}`,
      borderFocusPrimary: `1px solid ${c}`,
      borderDisabledPrimary: `1px solid ${g}`,
      rippleColorPrimary: g,
      // info
      colorInfo: T,
      colorHoverInfo: H,
      colorPressedInfo: q,
      colorFocusInfo: H,
      colorDisabledInfo: T,
      textColorInfo: a,
      textColorHoverInfo: a,
      textColorPressedInfo: a,
      textColorFocusInfo: a,
      textColorDisabledInfo: a,
      textColorTextInfo: T,
      textColorTextHoverInfo: H,
      textColorTextPressedInfo: q,
      textColorTextFocusInfo: H,
      textColorTextDisabledInfo: y,
      textColorGhostInfo: T,
      textColorGhostHoverInfo: H,
      textColorGhostPressedInfo: q,
      textColorGhostFocusInfo: H,
      textColorGhostDisabledInfo: T,
      borderInfo: `1px solid ${T}`,
      borderHoverInfo: `1px solid ${H}`,
      borderPressedInfo: `1px solid ${q}`,
      borderFocusInfo: `1px solid ${H}`,
      borderDisabledInfo: `1px solid ${T}`,
      rippleColorInfo: T,
      // success
      colorSuccess: E,
      colorHoverSuccess: m,
      colorPressedSuccess: F,
      colorFocusSuccess: m,
      colorDisabledSuccess: E,
      textColorSuccess: a,
      textColorHoverSuccess: a,
      textColorPressedSuccess: a,
      textColorFocusSuccess: a,
      textColorDisabledSuccess: a,
      textColorTextSuccess: E,
      textColorTextHoverSuccess: m,
      textColorTextPressedSuccess: F,
      textColorTextFocusSuccess: m,
      textColorTextDisabledSuccess: y,
      textColorGhostSuccess: E,
      textColorGhostHoverSuccess: m,
      textColorGhostPressedSuccess: F,
      textColorGhostFocusSuccess: m,
      textColorGhostDisabledSuccess: E,
      borderSuccess: `1px solid ${E}`,
      borderHoverSuccess: `1px solid ${m}`,
      borderPressedSuccess: `1px solid ${F}`,
      borderFocusSuccess: `1px solid ${m}`,
      borderDisabledSuccess: `1px solid ${E}`,
      rippleColorSuccess: E,
      // warning
      colorWarning: w,
      colorHoverWarning: $,
      colorPressedWarning: Q,
      colorFocusWarning: $,
      colorDisabledWarning: w,
      textColorWarning: a,
      textColorHoverWarning: a,
      textColorPressedWarning: a,
      textColorFocusWarning: a,
      textColorDisabledWarning: a,
      textColorTextWarning: w,
      textColorTextHoverWarning: $,
      textColorTextPressedWarning: Q,
      textColorTextFocusWarning: $,
      textColorTextDisabledWarning: y,
      textColorGhostWarning: w,
      textColorGhostHoverWarning: $,
      textColorGhostPressedWarning: Q,
      textColorGhostFocusWarning: $,
      textColorGhostDisabledWarning: w,
      borderWarning: `1px solid ${w}`,
      borderHoverWarning: `1px solid ${$}`,
      borderPressedWarning: `1px solid ${Q}`,
      borderFocusWarning: `1px solid ${$}`,
      borderDisabledWarning: `1px solid ${w}`,
      rippleColorWarning: w,
      // error
      colorError: P,
      colorHoverError: h,
      colorPressedError: n,
      colorFocusError: h,
      colorDisabledError: P,
      textColorError: a,
      textColorHoverError: a,
      textColorPressedError: a,
      textColorFocusError: a,
      textColorDisabledError: a,
      textColorTextError: P,
      textColorTextHoverError: h,
      textColorTextPressedError: n,
      textColorTextFocusError: h,
      textColorTextDisabledError: y,
      textColorGhostError: P,
      textColorGhostHoverError: h,
      textColorGhostPressedError: n,
      textColorGhostFocusError: h,
      textColorGhostDisabledError: P,
      borderError: `1px solid ${P}`,
      borderHoverError: `1px solid ${h}`,
      borderPressedError: `1px solid ${n}`,
      borderFocusError: `1px solid ${h}`,
      borderDisabledError: `1px solid ${P}`,
      rippleColorError: P,
      waveOpacity: "0.6",
      fontWeight: d,
      fontWeightStrong: O
    });
  };
  l.self = K;
  const f = {
    name: "Button",
    common: _.commonLight,
    self: l.self
  };
  l.default = f;
})(xe);
Object.defineProperty(be, "__esModule", { value: !0 });
const Ae = me, Je = xe, Ue = {
  name: "Button",
  common: Ae.commonDark,
  self(l) {
    const p = (0, Je.self)(l);
    return p.waveOpacity = "0.8", p.colorOpacitySecondary = "0.16", p.colorOpacitySecondaryHover = "0.2", p.colorOpacitySecondaryPressed = "0.12", p;
  }
};
be.default = Ue;
var Z = {}, ye = {};
Object.defineProperty(ye, "__esModule", {
  value: !0
});
const V = Pe;
ye.default = (0, V.cB)("button", [(0, V.cM)("rtl", `
 direction: rtl;
 `, [(0, V.cE)("icon", {
  margin: "var(--n-icon-margin)",
  marginRight: 0
}), (0, V.cE)("content", [(0, V.c)("~", [(0, V.cE)("icon", {
  margin: "var(--n-icon-margin)",
  marginLeft: 0
})])])])]);
var Ze = z && z.__importDefault || function(l) {
  return l && l.__esModule ? l : { default: l };
};
Object.defineProperty(Z, "__esModule", { value: !0 });
Z.buttonRtl = void 0;
const eo = Ze(ye);
Z.buttonRtl = {
  name: "Button",
  style: eo.default
};
(function(l) {
  var p = z && z.__importDefault || function(f) {
    return f && f.__esModule ? f : { default: f };
  };
  Object.defineProperty(l, "__esModule", { value: !0 }), l.buttonRtl = l.buttonLight = l.buttonDark = void 0;
  var i = be;
  Object.defineProperty(l, "buttonDark", { enumerable: !0, get: function() {
    return p(i).default;
  } });
  var _ = xe;
  Object.defineProperty(l, "buttonLight", { enumerable: !0, get: function() {
    return p(_).default;
  } });
  var K = Z;
  Object.defineProperty(l, "buttonRtl", { enumerable: !0, get: function() {
    return K.buttonRtl;
  } });
})(Te);
var ve = {};
Object.defineProperty(ve, "__esModule", {
  value: !0
});
const t = Pe, oo = Ne, ro = Le, to = ue;
ve.default = (0, t.c)([(0, t.cB)("button", `
 margin: 0;
 font-weight: var(--n-font-weight);
 line-height: 1;
 font-family: inherit;
 padding: var(--n-padding);
 height: var(--n-height);
 font-size: var(--n-font-size);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 width: var(--n-width);
 white-space: nowrap;
 outline: none;
 position: relative;
 z-index: auto;
 border: none;
 display: inline-flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 align-items: center;
 justify-content: center;
 user-select: none;
 -webkit-user-select: none;
 text-align: center;
 cursor: pointer;
 text-decoration: none;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `, [(0, t.cM)("color", [(0, t.cE)("border", {
  borderColor: "var(--n-border-color)"
}), (0, t.cM)("disabled", [(0, t.cE)("border", {
  borderColor: "var(--n-border-color-disabled)"
})]), (0, t.cNotM)("disabled", [(0, t.c)("&:focus", [(0, t.cE)("state-border", {
  borderColor: "var(--n-border-color-focus)"
})]), (0, t.c)("&:hover", [(0, t.cE)("state-border", {
  borderColor: "var(--n-border-color-hover)"
})]), (0, t.c)("&:active", [(0, t.cE)("state-border", {
  borderColor: "var(--n-border-color-pressed)"
})]), (0, t.cM)("pressed", [(0, t.cE)("state-border", {
  borderColor: "var(--n-border-color-pressed)"
})])])]), (0, t.cM)("disabled", {
  backgroundColor: "var(--n-color-disabled)",
  color: "var(--n-text-color-disabled)"
}, [(0, t.cE)("border", {
  border: "var(--n-border-disabled)"
})]), (0, t.cNotM)("disabled", [(0, t.c)("&:focus", {
  backgroundColor: "var(--n-color-focus)",
  color: "var(--n-text-color-focus)"
}, [(0, t.cE)("state-border", {
  border: "var(--n-border-focus)"
})]), (0, t.c)("&:hover", {
  backgroundColor: "var(--n-color-hover)",
  color: "var(--n-text-color-hover)"
}, [(0, t.cE)("state-border", {
  border: "var(--n-border-hover)"
})]), (0, t.c)("&:active", {
  backgroundColor: "var(--n-color-pressed)",
  color: "var(--n-text-color-pressed)"
}, [(0, t.cE)("state-border", {
  border: "var(--n-border-pressed)"
})]), (0, t.cM)("pressed", {
  backgroundColor: "var(--n-color-pressed)",
  color: "var(--n-text-color-pressed)"
}, [(0, t.cE)("state-border", {
  border: "var(--n-border-pressed)"
})])]), (0, t.cM)("loading", "cursor: wait;"), (0, t.cB)("base-wave", `
 pointer-events: none;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 animation-iteration-count: 1;
 animation-duration: var(--n-ripple-duration);
 animation-timing-function: var(--n-bezier-ease-out), var(--n-bezier-ease-out);
 `, [(0, t.cM)("active", {
  zIndex: 1,
  animationName: "button-wave-spread, button-wave-opacity"
})]), to.isBrowser && "MozBoxSizing" in document.createElement("div").style ? (0, t.c)("&::moz-focus-inner", {
  border: 0
}) : null, (0, t.cE)("border, state-border", `
 position: absolute;
 left: 0;
 top: 0;
 right: 0;
 bottom: 0;
 border-radius: inherit;
 transition: border-color .3s var(--n-bezier);
 pointer-events: none;
 `), (0, t.cE)("border", {
  border: "var(--n-border)"
}), (0, t.cE)("state-border", {
  border: "var(--n-border)",
  borderColor: "#0000",
  zIndex: 1
}), (0, t.cE)("icon", `
 margin: var(--n-icon-margin);
 margin-left: 0;
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 max-width: var(--n-icon-size);
 font-size: var(--n-icon-size);
 position: relative;
 flex-shrink: 0;
 `, [(0, t.cB)("icon-slot", `
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 position: absolute;
 left: 0;
 top: 50%;
 transform: translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 `, [(0, ro.iconSwitchTransition)({
  top: "50%",
  originalTransform: "translateY(-50%)"
})]), (0, oo.fadeInWidthExpandTransition)()]), (0, t.cE)("content", `
 display: flex;
 align-items: center;
 flex-wrap: nowrap;
 min-width: 0;
 `, [(0, t.c)("~", [(0, t.cE)("icon", {
  margin: "var(--n-icon-margin)",
  marginRight: 0
})])]), (0, t.cM)("block", `
 display: flex;
 width: 100%;
 `), (0, t.cM)("dashed", [(0, t.cE)("border, state-border", {
  borderStyle: "dashed !important"
})]), (0, t.cM)("disabled", {
  cursor: "not-allowed",
  opacity: "var(--n-opacity-disabled)"
})]), (0, t.c)("@keyframes button-wave-spread", {
  from: {
    boxShadow: "0 0 0.5px 0 var(--n-ripple-color)"
  },
  to: {
    // don't use exact 5px since chrome will display the animation with glitches
    boxShadow: "0 0 0.5px 4.5px var(--n-ripple-color)"
  }
}), (0, t.c)("@keyframes button-wave-opacity", {
  from: {
    opacity: "var(--n-wave-opacity)"
  },
  to: {
    opacity: 0
  }
})]);
(function(l) {
  var p = z && z.__importDefault || function(o) {
    return o && o.__esModule ? o : { default: o };
  };
  Object.defineProperty(l, "__esModule", { value: !0 }), l.XButton = l.buttonProps = void 0;
  const i = Ge, _ = Re, K = ge, f = X, I = U, ee = ke, oe = je, R = We, j = qe, r = ue, re = Te, te = p(ve);
  l.buttonProps = Object.assign(Object.assign({}, R.useTheme.props), { color: String, textColor: String, text: Boolean, block: Boolean, loading: Boolean, disabled: Boolean, circle: Boolean, size: String, ghost: Boolean, round: Boolean, secondary: Boolean, tertiary: Boolean, quaternary: Boolean, strong: Boolean, focusable: {
    type: Boolean,
    default: !0
  }, keyboard: {
    type: Boolean,
    default: !0
  }, tag: {
    type: String,
    default: "button"
  }, type: {
    type: String,
    default: "default"
  }, dashed: Boolean, renderIcon: Function, iconPlacement: {
    type: String,
    default: "left"
  }, attrType: {
    type: String,
    default: "button"
  }, bordered: {
    type: Boolean,
    default: !0
  }, onClick: [Function, Array], nativeFocusBehavior: {
    type: Boolean,
    default: !oe.isSafari
  } });
  const Y = (0, i.defineComponent)({
    name: "Button",
    props: l.buttonProps,
    setup(o) {
      process.env.NODE_ENV !== "production" && (0, i.watchEffect)(() => {
        const { dashed: n, ghost: d, text: C, secondary: e, tertiary: M, quaternary: O } = o;
        (n || d || C) && (e || M || O) && (0, r.warnOnce)("button", "`dashed`, `ghost` and `text` props can't be used along with `secondary`, `tertiary` and `quaterary` props.");
      });
      const N = (0, i.ref)(null), y = (0, i.ref)(null), B = (0, i.ref)(!1), c = (0, _.useMemo)(() => !o.quaternary && !o.tertiary && !o.secondary && !o.text && (!o.color || o.ghost || o.dashed) && o.bordered), S = (0, i.inject)(I.buttonGroupInjectionKey, {}), { mergedSizeRef: L } = (0, R.useFormItem)({}, {
        defaultSize: "medium",
        mergedSize: (n) => {
          const { size: d } = o;
          if (d)
            return d;
          const { size: C } = S;
          if (C)
            return C;
          const { mergedSize: e } = n || {};
          return e ? e.value : "medium";
        }
      }), g = (0, i.computed)(() => o.focusable && !o.disabled), a = (n) => {
        var d;
        g.value || n.preventDefault(), !o.nativeFocusBehavior && (n.preventDefault(), !o.disabled && g.value && ((d = N.value) === null || d === void 0 || d.focus({ preventScroll: !0 })));
      }, T = (n) => {
        var d;
        if (!o.disabled && !o.loading) {
          const { onClick: C } = o;
          C && (0, r.call)(C, n), o.text || (d = y.value) === null || d === void 0 || d.play();
        }
      }, H = (n) => {
        switch (n.key) {
          case "Enter":
            if (!o.keyboard)
              return;
            B.value = !1;
        }
      }, q = (n) => {
        switch (n.key) {
          case "Enter":
            if (!o.keyboard || o.loading) {
              n.preventDefault();
              return;
            }
            B.value = !0;
        }
      }, E = () => {
        B.value = !1;
      }, { inlineThemeDisabled: m, mergedClsPrefixRef: F, mergedRtlRef: w } = (0, R.useConfig)(o), $ = (0, R.useTheme)("Button", "-button", te.default, re.buttonLight, o, F), Q = (0, ee.useRtl)("Button", w, F), P = (0, i.computed)(() => {
        const n = $.value, { common: { cubicBezierEaseInOut: d, cubicBezierEaseOut: C }, self: e } = n, { rippleDuration: M, opacityDisabled: O, fontWeight: ne, fontWeightStrong: le } = e, D = L.value, { dashed: se, type: k, ghost: ie, text: G, color: u, round: he, circle: ae, textColor: W, secondary: He, tertiary: pe, quaternary: Ee, strong: we } = o, $e = {
          "font-weight": we ? le : ne
        };
        let b = {
          "--n-color": "initial",
          "--n-color-hover": "initial",
          "--n-color-pressed": "initial",
          "--n-color-focus": "initial",
          "--n-color-disabled": "initial",
          "--n-ripple-color": "initial",
          "--n-text-color": "initial",
          "--n-text-color-hover": "initial",
          "--n-text-color-pressed": "initial",
          "--n-text-color-focus": "initial",
          "--n-text-color-disabled": "initial"
        };
        const A = k === "tertiary", Ce = k === "default", s = A ? "default" : k;
        if (G) {
          const x = W || u;
          b = {
            "--n-color": "#0000",
            "--n-color-hover": "#0000",
            "--n-color-pressed": "#0000",
            "--n-color-focus": "#0000",
            "--n-color-disabled": "#0000",
            "--n-ripple-color": "#0000",
            "--n-text-color": x || e[(0, r.createKey)("textColorText", s)],
            "--n-text-color-hover": x ? (0, f.createHoverColor)(x) : e[(0, r.createKey)("textColorTextHover", s)],
            "--n-text-color-pressed": x ? (0, f.createPressedColor)(x) : e[(0, r.createKey)("textColorTextPressed", s)],
            "--n-text-color-focus": x ? (0, f.createHoverColor)(x) : e[(0, r.createKey)("textColorTextHover", s)],
            "--n-text-color-disabled": x || e[(0, r.createKey)("textColorTextDisabled", s)]
          };
        } else if (ie || se) {
          const x = W || u;
          b = {
            "--n-color": "#0000",
            "--n-color-hover": "#0000",
            "--n-color-pressed": "#0000",
            "--n-color-focus": "#0000",
            "--n-color-disabled": "#0000",
            "--n-ripple-color": u || e[(0, r.createKey)("rippleColor", s)],
            "--n-text-color": x || e[(0, r.createKey)("textColorGhost", s)],
            "--n-text-color-hover": x ? (0, f.createHoverColor)(x) : e[(0, r.createKey)("textColorGhostHover", s)],
            "--n-text-color-pressed": x ? (0, f.createPressedColor)(x) : e[(0, r.createKey)("textColorGhostPressed", s)],
            "--n-text-color-focus": x ? (0, f.createHoverColor)(x) : e[(0, r.createKey)("textColorGhostHover", s)],
            "--n-text-color-disabled": x || e[(0, r.createKey)("textColorGhostDisabled", s)]
          };
        } else if (He) {
          const x = Ce ? e.textColor : A ? e.textColorTertiary : e[(0, r.createKey)("color", s)], v = u || x, J = k !== "default" && k !== "tertiary";
          b = {
            "--n-color": J ? (0, K.changeColor)(v, {
              alpha: Number(e.colorOpacitySecondary)
            }) : e.colorSecondary,
            "--n-color-hover": J ? (0, K.changeColor)(v, {
              alpha: Number(e.colorOpacitySecondaryHover)
            }) : e.colorSecondaryHover,
            "--n-color-pressed": J ? (0, K.changeColor)(v, {
              alpha: Number(e.colorOpacitySecondaryPressed)
            }) : e.colorSecondaryPressed,
            "--n-color-focus": J ? (0, K.changeColor)(v, {
              alpha: Number(e.colorOpacitySecondaryHover)
            }) : e.colorSecondaryHover,
            "--n-color-disabled": e.colorSecondary,
            "--n-ripple-color": "#0000",
            "--n-text-color": v,
            "--n-text-color-hover": v,
            "--n-text-color-pressed": v,
            "--n-text-color-focus": v,
            "--n-text-color-disabled": v
          };
        } else if (pe || Ee) {
          const x = Ce ? e.textColor : A ? e.textColorTertiary : e[(0, r.createKey)("color", s)], v = u || x;
          pe ? (b["--n-color"] = e.colorTertiary, b["--n-color-hover"] = e.colorTertiaryHover, b["--n-color-pressed"] = e.colorTertiaryPressed, b["--n-color-focus"] = e.colorSecondaryHover, b["--n-color-disabled"] = e.colorTertiary) : (b["--n-color"] = e.colorQuaternary, b["--n-color-hover"] = e.colorQuaternaryHover, b["--n-color-pressed"] = e.colorQuaternaryPressed, b["--n-color-focus"] = e.colorQuaternaryHover, b["--n-color-disabled"] = e.colorQuaternary), b["--n-ripple-color"] = "#0000", b["--n-text-color"] = v, b["--n-text-color-hover"] = v, b["--n-text-color-pressed"] = v, b["--n-text-color-focus"] = v, b["--n-text-color-disabled"] = v;
        } else
          b = {
            "--n-color": u || e[(0, r.createKey)("color", s)],
            "--n-color-hover": u ? (0, f.createHoverColor)(u) : e[(0, r.createKey)("colorHover", s)],
            "--n-color-pressed": u ? (0, f.createPressedColor)(u) : e[(0, r.createKey)("colorPressed", s)],
            "--n-color-focus": u ? (0, f.createHoverColor)(u) : e[(0, r.createKey)("colorFocus", s)],
            "--n-color-disabled": u || e[(0, r.createKey)("colorDisabled", s)],
            "--n-ripple-color": u || e[(0, r.createKey)("rippleColor", s)],
            "--n-text-color": W || (u ? e.textColorPrimary : A ? e.textColorTertiary : e[(0, r.createKey)("textColor", s)]),
            "--n-text-color-hover": W || (u ? e.textColorHoverPrimary : e[(0, r.createKey)("textColorHover", s)]),
            "--n-text-color-pressed": W || (u ? e.textColorPressedPrimary : e[(0, r.createKey)("textColorPressed", s)]),
            "--n-text-color-focus": W || (u ? e.textColorFocusPrimary : e[(0, r.createKey)("textColorFocus", s)]),
            "--n-text-color-disabled": W || (u ? e.textColorDisabledPrimary : e[(0, r.createKey)("textColorDisabled", s)])
          };
        let ce = {
          "--n-border": "initial",
          "--n-border-hover": "initial",
          "--n-border-pressed": "initial",
          "--n-border-focus": "initial",
          "--n-border-disabled": "initial"
        };
        G ? ce = {
          "--n-border": "none",
          "--n-border-hover": "none",
          "--n-border-pressed": "none",
          "--n-border-focus": "none",
          "--n-border-disabled": "none"
        } : ce = {
          "--n-border": e[(0, r.createKey)("border", s)],
          "--n-border-hover": e[(0, r.createKey)("borderHover", s)],
          "--n-border-pressed": e[(0, r.createKey)("borderPressed", s)],
          "--n-border-focus": e[(0, r.createKey)("borderFocus", s)],
          "--n-border-disabled": e[(0, r.createKey)("borderDisabled", s)]
        };
        const { [(0, r.createKey)("height", D)]: de, [(0, r.createKey)("fontSize", D)]: De, [(0, r.createKey)("padding", D)]: ze, [(0, r.createKey)("paddingRound", D)]: Be, [(0, r.createKey)("iconSize", D)]: Me, [(0, r.createKey)("borderRadius", D)]: Ke, [(0, r.createKey)("iconMargin", D)]: Ie, waveOpacity: Fe } = e, Oe = {
          "--n-width": ae && !G ? de : "initial",
          "--n-height": G ? "initial" : de,
          "--n-font-size": De,
          "--n-padding": ae || G ? "initial" : he ? Be : ze,
          "--n-icon-size": Me,
          "--n-icon-margin": Ie,
          "--n-border-radius": G ? "initial" : ae || he ? de : Ke
        };
        return Object.assign(Object.assign(Object.assign(Object.assign({ "--n-bezier": d, "--n-bezier-ease-out": C, "--n-ripple-duration": M, "--n-opacity-disabled": O, "--n-wave-opacity": Fe }, $e), b), ce), Oe);
      }), h = m ? (0, R.useThemeClass)("button", (0, i.computed)(() => {
        let n = "";
        const { dashed: d, type: C, ghost: e, text: M, color: O, round: ne, circle: le, textColor: D, secondary: se, tertiary: k, quaternary: ie, strong: G } = o;
        d && (n += "a"), e && (n += "b"), M && (n += "c"), ne && (n += "d"), le && (n += "e"), se && (n += "f"), k && (n += "g"), ie && (n += "h"), G && (n += "i"), O && (n += "j" + (0, r.color2Class)(O)), D && (n += "k" + (0, r.color2Class)(D));
        const { value: u } = L;
        return n += "l" + u[0], n += "m" + C[0], n;
      }), P, o) : void 0;
      return {
        selfElRef: N,
        waveElRef: y,
        mergedClsPrefix: F,
        mergedFocusable: g,
        mergedSize: L,
        showBorder: c,
        enterPressed: B,
        rtlEnabled: Q,
        handleMousedown: a,
        handleKeydown: q,
        handleBlur: E,
        handleKeyup: H,
        handleClick: T,
        customColorCssVars: (0, i.computed)(() => {
          const { color: n } = o;
          if (!n)
            return null;
          const d = (0, f.createHoverColor)(n);
          return {
            "--n-border-color": n,
            "--n-border-color-hover": d,
            "--n-border-color-pressed": (0, f.createPressedColor)(n),
            "--n-border-color-focus": d,
            "--n-border-color-disabled": n
          };
        }),
        cssVars: m ? void 0 : P,
        themeClass: h == null ? void 0 : h.themeClass,
        onRender: h == null ? void 0 : h.onRender
      };
    },
    render() {
      const { mergedClsPrefix: o, tag: N, onRender: y } = this;
      y == null || y();
      const B = (0, r.resolveWrappedSlot)(this.$slots.default, (c) => c && (0, i.h)("span", { class: `${o}-button__content` }, c));
      return (0, i.h)(
        N,
        { ref: "selfElRef", class: [
          this.themeClass,
          `${o}-button`,
          `${o}-button--${this.type}-type`,
          `${o}-button--${this.mergedSize}-type`,
          this.rtlEnabled && `${o}-button--rtl`,
          this.disabled && `${o}-button--disabled`,
          this.block && `${o}-button--block`,
          this.enterPressed && `${o}-button--pressed`,
          !this.text && this.dashed && `${o}-button--dashed`,
          this.color && `${o}-button--color`,
          this.secondary && `${o}-button--secondary`,
          this.loading && `${o}-button--loading`,
          this.ghost && `${o}-button--ghost`
          // required for button group border collapse
        ], tabindex: this.mergedFocusable ? 0 : -1, type: this.attrType, style: this.cssVars, disabled: this.disabled, onClick: this.handleClick, onBlur: this.handleBlur, onMousedown: this.handleMousedown, onKeyup: this.handleKeyup, onKeydown: this.handleKeydown },
        this.iconPlacement === "right" && B,
        (0, i.h)(j.NFadeInExpandTransition, { width: !0 }, {
          default: () => (0, r.resolveWrappedSlot)(this.$slots.icon, (c) => (this.loading || this.renderIcon || c) && (0, i.h)(
            "span",
            { class: `${o}-button__icon`, style: {
              margin: (0, r.isSlotEmpty)(this.$slots.default) ? "0" : ""
            } },
            (0, i.h)(j.NIconSwitchTransition, null, {
              default: () => this.loading ? (0, i.h)(j.NBaseLoading, { clsPrefix: o, key: "loading", class: `${o}-icon-slot`, strokeWidth: 20 }) : (0, i.h)("div", { key: "icon", class: `${o}-icon-slot`, role: "none" }, this.renderIcon ? this.renderIcon() : c)
            })
          ))
        }),
        this.iconPlacement === "left" && B,
        this.text ? null : (0, i.h)(j.NBaseWave, { ref: "waveElRef", clsPrefix: o }),
        this.showBorder ? (0, i.h)("div", { "aria-hidden": !0, class: `${o}-button__border`, style: this.customColorCssVars }) : null,
        this.showBorder ? (0, i.h)("div", { "aria-hidden": !0, class: `${o}-button__state-border`, style: this.customColorCssVars }) : null
      );
    }
  });
  l.default = Y, l.XButton = Y;
})(_e);
(function(l) {
  var p = z && z.__importDefault || function(_) {
    return _ && _.__esModule ? _ : { default: _ };
  };
  Object.defineProperty(l, "__esModule", { value: !0 }), l.buttonProps = l.NxButton = l.NButton = void 0;
  var i = _e;
  Object.defineProperty(l, "NButton", { enumerable: !0, get: function() {
    return p(i).default;
  } }), Object.defineProperty(l, "NxButton", { enumerable: !0, get: function() {
    return i.XButton;
  } }), Object.defineProperty(l, "buttonProps", { enumerable: !0, get: function() {
    return i.buttonProps;
  } });
})(Qe);
export {
  Qe as b,
  Z as r,
  Te as s
};
