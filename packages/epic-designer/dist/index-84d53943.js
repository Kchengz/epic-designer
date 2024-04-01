import { c as O } from "./_commonjsHelpers-c5d32002.js";
import { r as D } from "./_vue_commonjs-external-eb7fec7f.js";
import { c as rt, s as Ut, _ as ke, r as te, i as Ie, a as Rt, e as Mt, f as At, b as Dt } from "./index-815197f3.js";
import { c as Vt } from "./index-cd698eea.js";
import { s as ot, b as zt } from "./index-ea8cae7f.js";
import { s as nt, a as lt } from "./index-de83403a.js";
import { f as Ht } from "./fade-in-scale-up.cssr-45666b81.js";
function It(e, o) {
  for (var r = 0; r < o.length; r++) {
    const t = o[r];
    if (typeof t != "string" && !Array.isArray(t)) {
      for (const a in t)
        if (a !== "default" && !(a in e)) {
          const l = Object.getOwnPropertyDescriptor(t, a);
          l && Object.defineProperty(e, a, l.get ? l : {
            enumerable: !0,
            get: () => t[a]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
var at = {}, it = {}, st = {}, Be = {}, Oe = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.self = void 0;
  const o = rt, r = Ut, t = nt, a = ot, l = (s) => {
    const { fontSize: f, boxShadow2: k, popoverColor: V, textColor2: j, borderRadius: F, borderColor: oe, heightSmall: ne, heightMedium: xe, heightLarge: le, fontSizeSmall: ye, fontSizeMedium: Se, fontSizeLarge: we, dividerColor: Ce } = s;
    return {
      panelFontSize: f,
      boxShadow: k,
      color: V,
      textColor: j,
      borderRadius: F,
      border: `1px solid ${oe}`,
      heightSmall: ne,
      heightMedium: xe,
      heightLarge: le,
      fontSizeSmall: ye,
      fontSizeMedium: Se,
      fontSizeLarge: we,
      dividerColor: Ce
    };
  };
  e.self = l;
  const i = (0, r.createTheme)({
    name: "ColorPicker",
    common: o.commonLight,
    peers: {
      Input: t.inputLight,
      Button: a.buttonLight
    },
    self: e.self
  });
  e.default = i;
})(Oe);
Object.defineProperty(Be, "__esModule", { value: !0 });
const Bt = ot, Ot = nt, jt = rt, Ft = Oe, Et = {
  name: "ColorPicker",
  common: jt.commonDark,
  peers: {
    Input: Ot.inputDark,
    Button: Bt.buttonDark
  },
  self: Ft.self
};
Be.default = Et;
(function(e) {
  var o = O && O.__importDefault || function(a) {
    return a && a.__esModule ? a : { default: a };
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.colorPickerLight = e.colorPickerDark = void 0;
  var r = Be;
  Object.defineProperty(e, "colorPickerDark", { enumerable: !0, get: function() {
    return o(r).default;
  } });
  var t = Oe;
  Object.defineProperty(e, "colorPickerLight", { enumerable: !0, get: function() {
    return o(t).default;
  } });
})(st);
var je = {}, _ = {};
Object.defineProperty(_, "__esModule", { value: !0 });
_.convertColor = _.normalizeAlpha = _.normalizeHue = _.floor = _.getModeFromValue = _.deriveDefaultValue = void 0;
const c = te, Tt = ke;
function qt(e, o) {
  switch (e[0]) {
    case "hex":
      return o ? "#000000FF" : "#000000";
    case "rgb":
      return o ? "rgba(0, 0, 0, 1)" : "rgb(0, 0, 0)";
    case "hsl":
      return o ? "hsla(0, 0%, 0%, 1)" : "hsl(0, 0%, 0%)";
    case "hsv":
      return o ? "hsva(0, 0%, 0%, 1)" : "hsv(0, 0%, 0%)";
  }
  return process.env.NODE_ENV !== "production" && (0, Tt.warn)("color-picker", "props.modes is invalid."), "#000000";
}
_.deriveDefaultValue = qt;
function ut(e) {
  return e === null ? null : /^ *#/.test(e) ? "hex" : e.includes("rgb") ? "rgb" : e.includes("hsl") ? "hsl" : e.includes("hsv") ? "hsv" : null;
}
_.getModeFromValue = ut;
function Nt(e) {
  return e.map((o) => Math.floor(o));
}
_.floor = Nt;
function Lt(e) {
  return e = Math.round(e), e >= 360 ? 359 : e < 0 ? 0 : e;
}
_.normalizeHue = Lt;
function Kt(e) {
  return e = Math.round(e * 100) / 100, e > 1 ? 1 : e < 0 ? 0 : e;
}
_.normalizeAlpha = Kt;
const Xt = {
  rgb: {
    hex(e) {
      return (0, c.toHexaString)((0, c.rgba)(e));
    },
    hsl(e) {
      const [o, r, t, a] = (0, c.rgba)(e);
      return (0, c.toHslaString)([...(0, c.rgb2hsl)(o, r, t), a]);
    },
    hsv(e) {
      const [o, r, t, a] = (0, c.rgba)(e);
      return (0, c.toHsvaString)([...(0, c.rgb2hsv)(o, r, t), a]);
    }
  },
  hex: {
    rgb(e) {
      return (0, c.toRgbaString)((0, c.rgba)(e));
    },
    hsl(e) {
      const [o, r, t, a] = (0, c.rgba)(e);
      return (0, c.toHslaString)([...(0, c.rgb2hsl)(o, r, t), a]);
    },
    hsv(e) {
      const [o, r, t, a] = (0, c.rgba)(e);
      return (0, c.toHsvaString)([...(0, c.rgb2hsv)(o, r, t), a]);
    }
  },
  hsl: {
    hex(e) {
      const [o, r, t, a] = (0, c.hsla)(e);
      return (0, c.toHexaString)([...(0, c.hsl2rgb)(o, r, t), a]);
    },
    rgb(e) {
      const [o, r, t, a] = (0, c.hsla)(e);
      return (0, c.toRgbaString)([...(0, c.hsl2rgb)(o, r, t), a]);
    },
    hsv(e) {
      const [o, r, t, a] = (0, c.hsla)(e);
      return (0, c.toHsvaString)([...(0, c.hsl2hsv)(o, r, t), a]);
    }
  },
  hsv: {
    hex(e) {
      const [o, r, t, a] = (0, c.hsva)(e);
      return (0, c.toHexaString)([...(0, c.hsv2rgb)(o, r, t), a]);
    },
    rgb(e) {
      const [o, r, t, a] = (0, c.hsva)(e);
      return (0, c.toRgbaString)([...(0, c.hsv2rgb)(o, r, t), a]);
    },
    hsl(e) {
      const [o, r, t, a] = (0, c.hsva)(e);
      return (0, c.toHslaString)([...(0, c.hsv2hsl)(o, r, t), a]);
    }
  }
};
function Zt(e, o, r) {
  return r = r || ut(e), r ? r === o ? e : Xt[r][o](e) : null;
}
_.convertColor = Zt;
Object.defineProperty(je, "__esModule", { value: !0 });
const q = D, pe = Ie, Gt = _, W = "12px", Yt = 12, N = "6px", Jt = 6, Qt = "linear-gradient(90deg,red,#ff0 16.66%,#0f0 33.33%,#0ff 50%,#00f 66.66%,#f0f 83.33%,red)";
je.default = (0, q.defineComponent)({
  name: "HueSlider",
  props: {
    clsPrefix: {
      type: String,
      required: !0
    },
    hue: {
      type: Number,
      required: !0
    },
    onUpdateHue: {
      type: Function,
      required: !0
    },
    onComplete: Function
  },
  setup(e) {
    const o = (0, q.ref)(null);
    function r(l) {
      o.value && ((0, pe.on)("mousemove", document, t), (0, pe.on)("mouseup", document, a), t(l));
    }
    function t(l) {
      const { value: i } = o;
      if (!i)
        return;
      const { width: s, left: f } = i.getBoundingClientRect(), k = (0, Gt.normalizeHue)((l.clientX - f - Jt) / (s - Yt) * 360);
      e.onUpdateHue(k);
    }
    function a() {
      var l;
      (0, pe.off)("mousemove", document, t), (0, pe.off)("mouseup", document, a), (l = e.onComplete) === null || l === void 0 || l.call(e);
    }
    return {
      railRef: o,
      handleMouseDown: r
    };
  },
  render() {
    const { clsPrefix: e } = this;
    return (0, q.h)(
      "div",
      { class: `${e}-color-picker-slider`, style: {
        height: W,
        borderRadius: N
      } },
      (0, q.h)(
        "div",
        { ref: "railRef", style: {
          boxShadow: "inset 0 0 2px 0 rgba(0, 0, 0, .24)",
          boxSizing: "border-box",
          backgroundImage: Qt,
          height: W,
          borderRadius: N,
          position: "relative"
        }, onMousedown: this.handleMouseDown },
        (0, q.h)(
          "div",
          { style: {
            position: "absolute",
            left: N,
            right: N,
            top: 0,
            bottom: 0
          } },
          (0, q.h)(
            "div",
            { class: `${e}-color-picker-handle`, style: {
              left: `calc((${this.hue}%) / 359 * 100 - ${N})`,
              borderRadius: N,
              width: W,
              height: W
            } },
            (0, q.h)("div", { class: `${e}-color-picker-handle__fill`, style: {
              backgroundColor: `hsl(${this.hue}, 100%, 50%)`,
              borderRadius: N,
              width: W,
              height: W
            } })
          )
        )
      )
    );
  }
});
var Fe = {};
Object.defineProperty(Fe, "__esModule", { value: !0 });
const U = D, ge = Ie, Wt = te, er = _, se = "12px", tr = 12, L = "6px";
Fe.default = (0, U.defineComponent)({
  name: "AlphaSlider",
  props: {
    clsPrefix: {
      type: String,
      required: !0
    },
    rgba: {
      type: Array,
      default: null
    },
    alpha: {
      type: Number,
      default: 0
    },
    onUpdateAlpha: {
      type: Function,
      required: !0
    },
    onComplete: Function
  },
  setup(e) {
    const o = (0, U.ref)(null);
    function r(l) {
      !o.value || !e.rgba || ((0, ge.on)("mousemove", document, t), (0, ge.on)("mouseup", document, a), t(l));
    }
    function t(l) {
      const { value: i } = o;
      if (!i)
        return;
      const { width: s, left: f } = i.getBoundingClientRect(), k = (l.clientX - f) / (s - tr);
      e.onUpdateAlpha((0, er.normalizeAlpha)(k));
    }
    function a() {
      var l;
      (0, ge.off)("mousemove", document, t), (0, ge.off)("mouseup", document, a), (l = e.onComplete) === null || l === void 0 || l.call(e);
    }
    return {
      railRef: o,
      railBackgroundImage: (0, U.computed)(() => {
        const { rgba: l } = e;
        return l ? `linear-gradient(to right, rgba(${l[0]}, ${l[1]}, ${l[2]}, 0) 0%, rgba(${l[0]}, ${l[1]}, ${l[2]}, 1) 100%)` : "";
      }),
      handleMouseDown: r
    };
  },
  render() {
    const { clsPrefix: e } = this;
    return (0, U.h)(
      "div",
      { class: `${e}-color-picker-slider`, ref: "railRef", style: {
        height: se,
        borderRadius: L
      }, onMousedown: this.handleMouseDown },
      (0, U.h)(
        "div",
        { style: {
          borderRadius: L,
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          overflow: "hidden"
        } },
        (0, U.h)("div", { class: `${e}-color-picker-checkboard` }),
        (0, U.h)("div", { class: `${e}-color-picker-slider__image`, style: {
          backgroundImage: this.railBackgroundImage
        } })
      ),
      this.rgba && (0, U.h)(
        "div",
        { style: {
          position: "absolute",
          left: L,
          right: L,
          top: 0,
          bottom: 0
        } },
        (0, U.h)(
          "div",
          { class: `${e}-color-picker-handle`, style: {
            left: `calc(${this.alpha * 100}% - ${L})`,
            borderRadius: L,
            width: se,
            height: se
          } },
          (0, U.h)("div", { class: `${e}-color-picker-handle__fill`, style: {
            backgroundColor: (0, Wt.toRgbaString)(this.rgba),
            borderRadius: L,
            width: se,
            height: se
          } })
        )
      )
    );
  }
});
var Ee = {};
Object.defineProperty(Ee, "__esModule", { value: !0 });
const ve = Ie, B = D, be = "12px", me = "6px";
Ee.default = (0, B.defineComponent)({
  name: "Pallete",
  props: {
    clsPrefix: {
      type: String,
      required: !0
    },
    rgba: {
      type: Array,
      default: null
    },
    // 0 - 360
    displayedHue: {
      type: Number,
      required: !0
    },
    displayedSv: {
      type: Array,
      required: !0
    },
    onUpdateSV: {
      type: Function,
      required: !0
    },
    onComplete: Function
  },
  setup(e) {
    const o = (0, B.ref)(null);
    function r(l) {
      o.value && ((0, ve.on)("mousemove", document, t), (0, ve.on)("mouseup", document, a), t(l));
    }
    function t(l) {
      const { value: i } = o;
      if (!i)
        return;
      const { width: s, height: f, left: k, bottom: V } = i.getBoundingClientRect(), j = (V - l.clientY) / f, F = (l.clientX - k) / s, oe = 100 * (F > 1 ? 1 : F < 0 ? 0 : F), ne = 100 * (j > 1 ? 1 : j < 0 ? 0 : j);
      e.onUpdateSV(oe, ne);
    }
    function a() {
      var l;
      (0, ve.off)("mousemove", document, t), (0, ve.off)("mouseup", document, a), (l = e.onComplete) === null || l === void 0 || l.call(e);
    }
    return {
      palleteRef: o,
      handleColor: (0, B.computed)(() => {
        const { rgba: l } = e;
        return l ? `rgb(${l[0]}, ${l[1]}, ${l[2]})` : "";
      }),
      handleMouseDown: r
    };
  },
  render() {
    const { clsPrefix: e } = this;
    return (0, B.h)(
      "div",
      { class: `${e}-color-picker-pallete`, onMousedown: this.handleMouseDown, ref: "palleteRef" },
      (0, B.h)("div", { class: `${e}-color-picker-pallete__layer`, style: {
        backgroundImage: `linear-gradient(90deg, white, hsl(${this.displayedHue}, 100%, 50%))`
      } }),
      (0, B.h)("div", { class: `${e}-color-picker-pallete__layer ${e}-color-picker-pallete__layer--shadowed`, style: {
        backgroundImage: "linear-gradient(180deg, rgba(0, 0, 0, 0%), rgba(0, 0, 0, 100%))"
      } }),
      this.rgba && (0, B.h)(
        "div",
        { class: `${e}-color-picker-handle`, style: {
          width: be,
          height: be,
          borderRadius: me,
          left: `calc(${this.displayedSv[0]}% - ${me})`,
          bottom: `calc(${this.displayedSv[1]}% - ${me})`
        } },
        (0, B.h)("div", { class: `${e}-color-picker-handle__fill`, style: {
          backgroundColor: this.handleColor,
          borderRadius: me,
          width: be,
          height: be
        } })
      )
    );
  }
});
var Te = {}, qe = {}, re = {};
Object.defineProperty(re, "__esModule", { value: !0 });
re.colorPickerInjectionKey = void 0;
const rr = ke;
re.colorPickerInjectionKey = (0, rr.createInjectionKey)("n-color-picker");
Object.defineProperty(qe, "__esModule", { value: !0 });
const ue = D, or = lt, nr = re;
function lr(e) {
  return /^\d{1,3}\.?\d*$/.test(e.trim()) ? Math.max(0, Math.min(parseInt(e), 255)) : !1;
}
function ar(e) {
  return /^\d{1,3}\.?\d*$/.test(e.trim()) ? Math.max(0, Math.min(parseInt(e), 360)) : !1;
}
function ir(e) {
  return /^\d{1,3}\.?\d*$/.test(e.trim()) ? Math.max(0, Math.min(parseInt(e), 100)) : !1;
}
function sr(e) {
  const o = e.trim();
  return /^#[0-9a-fA-F]+$/.test(o) ? [4, 5, 7, 9].includes(o.length) : !1;
}
function ur(e) {
  return /^\d{1,3}\.?\d*%$/.test(e.trim()) ? Math.max(0, Math.min(parseInt(e) / 100, 100)) : !1;
}
const cr = {
  paddingSmall: "0 4px"
};
qe.default = (0, ue.defineComponent)({
  name: "ColorInputUnit",
  props: {
    label: {
      type: String,
      required: !0
    },
    value: {
      type: [Number, String],
      default: null
    },
    showAlpha: Boolean,
    onUpdateValue: {
      type: Function,
      required: !0
    }
  },
  setup(e) {
    const o = (0, ue.ref)(""), { themeRef: r } = (0, ue.inject)(nr.colorPickerInjectionKey, null);
    (0, ue.watchEffect)(() => {
      o.value = t();
    });
    function t() {
      const { value: i } = e;
      if (i === null)
        return "";
      const { label: s } = e;
      return s === "HEX" ? i : s === "A" ? `${Math.floor(i * 100)}%` : String(Math.floor(i));
    }
    function a(i) {
      o.value = i;
    }
    function l(i) {
      let s, f;
      switch (e.label) {
        case "HEX":
          f = sr(i), f && e.onUpdateValue(i), o.value = t();
          break;
        case "H":
          s = ar(i), s === !1 ? o.value = t() : e.onUpdateValue(s);
          break;
        case "S":
        case "L":
        case "V":
          s = ir(i), s === !1 ? o.value = t() : e.onUpdateValue(s);
          break;
        case "A":
          s = ur(i), s === !1 ? o.value = t() : e.onUpdateValue(s);
          break;
        case "R":
        case "G":
        case "B":
          s = lr(i), s === !1 ? o.value = t() : e.onUpdateValue(s);
          break;
      }
    }
    return {
      mergedTheme: r,
      inputValue: o,
      handleInputChange: l,
      handleInputUpdateValue: a
    };
  },
  render() {
    const { mergedTheme: e } = this;
    return (0, ue.h)(or.NInput, {
      size: "small",
      placeholder: this.label,
      theme: e.peers.Input,
      themeOverrides: e.peerOverrides.Input,
      builtinThemeOverrides: cr,
      value: this.inputValue,
      onUpdateValue: this.handleInputUpdateValue,
      onChange: this.handleInputChange,
      // add more space for xxx% input
      style: this.label === "A" ? "flex-grow: 1.25;" : ""
    });
  }
});
var dr = O && O.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Te, "__esModule", { value: !0 });
const R = te, ee = D, hr = lt, We = dr(qe);
Te.default = (0, ee.defineComponent)({
  name: "ColorInput",
  props: {
    clsPrefix: {
      type: String,
      required: !0
    },
    mode: {
      type: String,
      required: !0
    },
    modes: {
      type: Array,
      required: !0
    },
    showAlpha: {
      type: Boolean,
      required: !0
    },
    value: {
      // for hex to get percise value
      type: String,
      default: null
    },
    valueArr: {
      type: Array,
      default: null
    },
    onUpdateValue: {
      type: Function,
      required: !0
    },
    onUpdateMode: {
      type: Function,
      required: !0
    }
  },
  setup(e) {
    return {
      handleUnitUpdateValue(o, r) {
        const { showAlpha: t } = e;
        if (e.mode === "hex") {
          e.onUpdateValue((t ? R.toHexaString : R.toHexString)(r));
          return;
        }
        let a;
        switch (e.valueArr === null ? a = [0, 0, 0, 0] : a = Array.from(e.valueArr), e.mode) {
          case "hsv":
            a[o] = r, e.onUpdateValue((t ? R.toHsvaString : R.toHsvString)(a));
            break;
          case "rgb":
            a[o] = r, e.onUpdateValue((t ? R.toRgbaString : R.toRgbString)(a));
            break;
          case "hsl":
            a[o] = r, e.onUpdateValue((t ? R.toHslaString : R.toHslString)(a));
            break;
        }
      }
    };
  },
  render() {
    const { clsPrefix: e, modes: o } = this;
    return (0, ee.h)(
      "div",
      { class: `${e}-color-picker-input` },
      (0, ee.h)("div", { class: `${e}-color-picker-input__mode`, onClick: this.onUpdateMode, style: {
        cursor: o.length === 1 ? "" : "pointer"
      } }, this.mode.toUpperCase() + (this.showAlpha ? "A" : "")),
      (0, ee.h)(hr.NInputGroup, null, {
        default: () => {
          const { mode: r, valueArr: t, showAlpha: a } = this;
          if (r === "hex") {
            let l = null;
            try {
              l = t === null ? null : (a ? R.toHexaString : R.toHexString)(t);
            } catch {
            }
            return (0, ee.h)(We.default, { label: "HEX", showAlpha: a, value: l, onUpdateValue: (i) => {
              this.handleUnitUpdateValue(0, i);
            } });
          }
          return (r + (a ? "a" : "")).split("").map((l, i) => (0, ee.h)(We.default, { label: l.toUpperCase(), value: t === null ? null : t[i], onUpdateValue: (s) => {
            this.handleUnitUpdateValue(i, s);
          } }));
        }
      })
    );
  }
});
var Ne = {};
Object.defineProperty(Ne, "__esModule", { value: !0 });
const fr = te, K = D, pr = re;
Ne.default = (0, K.defineComponent)({
  name: "ColorPickerTrigger",
  props: {
    clsPrefix: {
      type: String,
      required: !0
    },
    value: {
      type: String,
      default: null
    },
    hsla: {
      type: Array,
      default: null
    },
    disabled: Boolean,
    onClick: Function
  },
  setup(e) {
    const { colorPickerSlots: o, renderLabelRef: r } = (0, K.inject)(pr.colorPickerInjectionKey, null);
    return () => {
      const { hsla: t, value: a, clsPrefix: l, onClick: i, disabled: s } = e, f = o.label || r.value;
      return (0, K.h)(
        "div",
        { class: [
          `${l}-color-picker-trigger`,
          s && `${l}-color-picker-trigger--disabled`
        ], onClick: s ? void 0 : i },
        (0, K.h)(
          "div",
          { class: `${l}-color-picker-trigger__fill` },
          (0, K.h)("div", { class: `${l}-color-picker-checkboard` }),
          (0, K.h)("div", { style: {
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            backgroundColor: t ? (0, fr.toHslaString)(t) : ""
          } }),
          a && t ? (0, K.h)("div", { class: `${l}-color-picker-trigger__value`, style: {
            color: t[2] > 50 || t[3] < 0.5 ? "black" : "white"
          } }, f ? f(a) : a) : null
        )
      );
    };
  }
});
var Le = {};
Object.defineProperty(Le, "__esModule", { value: !0 });
const ce = D, He = te, et = _, gr = ke;
function vr(e, o) {
  if (o === "hsv") {
    const [r, t, a, l] = (0, He.hsva)(e);
    return (0, He.toRgbaString)([...(0, He.hsv2rgb)(r, t, a), l]);
  }
  return e;
}
function br(e) {
  const o = document.createElement("canvas").getContext("2d");
  return o.fillStyle = e, o.fillStyle;
}
Le.default = (0, ce.defineComponent)({
  name: "ColorPickerSwatches",
  props: {
    clsPrefix: {
      type: String,
      required: !0
    },
    mode: {
      type: String,
      required: !0
    },
    swatches: {
      type: Array,
      required: !0
    },
    onUpdateColor: {
      type: Function,
      required: !0
    }
  },
  setup(e) {
    const o = (0, ce.computed)(() => e.swatches.map((l) => {
      const i = (0, et.getModeFromValue)(l);
      return {
        value: l,
        mode: i,
        legalValue: vr(l, i)
      };
    }));
    function r(l) {
      const { mode: i } = e;
      let { value: s, mode: f } = l;
      return f || (f = "hex", /^[a-zA-Z]+$/.test(s) ? s = br(s) : ((0, gr.warn)("color-picker", `color ${s} in swatches is invalid.`), s = "#000000")), f === i ? s : (0, et.convertColor)(s, i, f);
    }
    function t(l) {
      e.onUpdateColor(r(l));
    }
    function a(l, i) {
      l.key === "Enter" && t(i);
    }
    return {
      parsedSwatchesRef: o,
      handleSwatchSelect: t,
      handleSwatchKeyDown: a
    };
  },
  render() {
    const { clsPrefix: e } = this;
    return (0, ce.h)("div", { class: `${e}-color-picker-swatches` }, this.parsedSwatchesRef.map((o) => (0, ce.h)(
      "div",
      { class: `${e}-color-picker-swatch`, tabindex: 0, onClick: () => {
        this.handleSwatchSelect(o);
      }, onKeydown: (r) => {
        this.handleSwatchKeyDown(r, o);
      } },
      (0, ce.h)("div", { class: `${e}-color-picker-swatch__fill`, style: { background: o.legalValue } })
    )));
  }
});
var Ke = {};
Object.defineProperty(Ke, "__esModule", { value: !0 });
const _e = D, tt = _;
Ke.default = (0, _e.defineComponent)({
  name: "ColorPreview",
  props: {
    clsPrefix: {
      type: String,
      required: !0
    },
    mode: {
      type: String,
      required: !0
    },
    color: {
      type: String,
      default: null,
      validator: (e) => {
        const o = (0, tt.getModeFromValue)(e);
        return !!(!e || o && o !== "hsv");
      }
    },
    onUpdateColor: {
      type: Function,
      required: !0
    }
  },
  setup(e) {
    function o(r) {
      var t;
      const a = r.target.value;
      (t = e.onUpdateColor) === null || t === void 0 || t.call(e, (0, tt.convertColor)(a.toUpperCase(), e.mode, "hex")), r.stopPropagation();
    }
    return {
      handleChange: o
    };
  },
  render() {
    const { clsPrefix: e } = this;
    return (0, _e.h)(
      "div",
      { class: `${e}-color-picker-preview__preview` },
      (0, _e.h)("span", { class: `${e}-color-picker-preview__fill`, style: {
        background: this.color || "#000000"
      } }),
      (0, _e.h)("input", { class: `${e}-color-picker-preview__input`, type: "color", value: this.color, onChange: this.handleChange })
    );
  }
});
var Xe = {};
Object.defineProperty(Xe, "__esModule", {
  value: !0
});
const u = Rt, mr = Ht;
Xe.default = (0, u.c)([(0, u.cB)("color-picker", `
 display: inline-block;
 box-sizing: border-box;
 height: var(--n-height);
 font-size: var(--n-font-size);
 width: 100%;
 position: relative;
 `), (0, u.cB)("color-picker-panel", `
 margin: 4px 0;
 width: 240px;
 font-size: var(--n-panel-font-size);
 color: var(--n-text-color);
 background-color: var(--n-color);
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 `, [(0, mr.fadeInScaleUpTransition)(), (0, u.cB)("input", `
 text-align: center;
 `)]), (0, u.cB)("color-picker-checkboard", `
 background: white; 
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `, [(0, u.c)("&::after", `
 background-image: linear-gradient(45deg, #DDD 25%, #0000 25%), linear-gradient(-45deg, #DDD 25%, #0000 25%), linear-gradient(45deg, #0000 75%, #DDD 75%), linear-gradient(-45deg, #0000 75%, #DDD 75%);
 background-size: 12px 12px;
 background-position: 0 0, 0 6px, 6px -6px, -6px 0px;
 background-repeat: repeat;
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]), (0, u.cB)("color-picker-slider", `
 margin-bottom: 8px;
 position: relative;
 box-sizing: border-box;
 `, [(0, u.cE)("image", `
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `), (0, u.c)("&::after", `
 content: "";
 position: absolute;
 border-radius: inherit;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 box-shadow: inset 0 0 2px 0 rgba(0, 0, 0, .24);
 pointer-events: none;
 `)]), (0, u.cB)("color-picker-handle", `
 z-index: 1;
 box-shadow: 0 0 2px 0 rgba(0, 0, 0, .45);
 position: absolute;
 background-color: white;
 overflow: hidden;
 `, [(0, u.cE)("fill", `
 box-sizing: border-box;
 border: 2px solid white;
 `)]), (0, u.cB)("color-picker-pallete", `
 height: 180px;
 position: relative;
 margin-bottom: 8px;
 cursor: crosshair;
 `, [(0, u.cE)("layer", `
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `, [(0, u.cM)("shadowed", `
 box-shadow: inset 0 0 2px 0 rgba(0, 0, 0, .24);
 `)])]), (0, u.cB)("color-picker-preview", `
 display: flex;
 `, [(0, u.cE)("sliders", `
 flex: 1 0 auto;
 `), (0, u.cE)("preview", `
 position: relative;
 height: 30px;
 width: 30px;
 margin: 0 0 8px 6px;
 border-radius: 50%;
 box-shadow: rgba(0, 0, 0, .15) 0px 0px 0px 1px inset;
 overflow: hidden;
 `), (0, u.cE)("fill", `
 display: block;
 width: 30px;
 height: 30px;
 `), (0, u.cE)("input", `
 position: absolute;
 top: 0;
 left: 0;
 width: 30px;
 height: 30px;
 opacity: 0;
 z-index: 1;
 `)]), (0, u.cB)("color-picker-input", `
 display: flex;
 align-items: center;
 `, [(0, u.cB)("input", `
 flex-grow: 1;
 flex-basis: 0;
 `), (0, u.cE)("mode", `
 width: 72px;
 text-align: center;
 `)]), (0, u.cB)("color-picker-control", `
 padding: 12px;
 `), (0, u.cB)("color-picker-action", `
 display: flex;
 margin-top: -4px;
 border-top: 1px solid var(--n-divider-color);
 padding: 8px 12px;
 justify-content: flex-end;
 `, [(0, u.cB)("button", "margin-left: 8px;")]), (0, u.cB)("color-picker-trigger", `
 border: var(--n-border);
 height: 100%;
 box-sizing: border-box;
 border-radius: var(--n-border-radius);
 transition: border-color .3s var(--n-bezier);
 cursor: pointer;
 `, [(0, u.cE)("value", `
 white-space: nowrap;
 position: relative;
 `), (0, u.cE)("fill", `
 border-radius: var(--n-border-radius);
 position: absolute;
 display: flex;
 align-items: center;
 justify-content: center;
 left: 4px;
 right: 4px;
 top: 4px;
 bottom: 4px;
 `), (0, u.cM)("disabled", "cursor: not-allowed"), (0, u.cB)("color-picker-checkboard", `
 border-radius: var(--n-border-radius);
 `, [(0, u.c)("&::after", `
 --n-block-size: calc((var(--n-height) - 8px) / 3);
 background-size: calc(var(--n-block-size) * 2) calc(var(--n-block-size) * 2);
 background-position: 0 0, 0 var(--n-block-size), var(--n-block-size) calc(-1 * var(--n-block-size)), calc(-1 * var(--n-block-size)) 0px; 
 `)])]), (0, u.cB)("color-picker-swatches", `
 display: grid;
 grid-gap: 8px;
 flex-wrap: wrap;
 position: relative;
 grid-template-columns: repeat(auto-fill, 18px);
 margin-top: 10px;
 `, [(0, u.cB)("color-picker-swatch", `
 width: 18px;
 height: 18px;
 background-image: linear-gradient(45deg, #DDD 25%, #0000 25%), linear-gradient(-45deg, #DDD 25%, #0000 25%), linear-gradient(45deg, #0000 75%, #DDD 75%), linear-gradient(-45deg, #0000 75%, #DDD 75%);
 background-size: 8px 8px;
 background-position: 0px 0, 0px 4px, 4px -4px, -4px 0px;
 background-repeat: repeat;
 `, [(0, u.cE)("fill", `
 position: relative;
 width: 100%;
 height: 100%;
 border-radius: 3px;
 box-shadow: rgba(0, 0, 0, .15) 0px 0px 0px 1px inset;
 cursor: pointer;
 `), (0, u.c)("&:focus", `
 outline: none;
 `, [(0, u.cE)("fill", [(0, u.c)("&::after", `
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 background: inherit;
 filter: blur(2px);
 content: "";
 `)])])])])]);
(function(e) {
  var o = O && O.__importDefault || function(d) {
    return d && d.__esModule ? d : { default: d };
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.colorPickerProps = void 0;
  const r = D, t = te, a = Mt, l = At, i = Vt, s = st, f = Dt, k = ke, V = zt, j = o(je), F = o(Fe), oe = o(Ee), ne = o(Te), xe = o(Ne), le = _, ye = o(Le), Se = o(Ke), we = re, Ce = o(Xe);
  e.colorPickerProps = Object.assign(Object.assign({}, f.useTheme.props), { value: String, show: {
    type: Boolean,
    default: void 0
  }, defaultShow: Boolean, defaultValue: String, modes: {
    type: Array,
    // no hsva by default since browser doesn't support it
    default: () => ["rgb", "hex", "hsl"]
  }, placement: {
    type: String,
    default: "bottom-start"
  }, to: k.useAdjustedTo.propTo, showAlpha: {
    type: Boolean,
    default: !0
  }, showPreview: Boolean, swatches: Array, disabled: {
    type: Boolean,
    default: void 0
  }, actions: {
    type: Array,
    default: null
  }, internalActions: Array, size: String, renderLabel: Function, onComplete: Function, onConfirm: Function, "onUpdate:show": [Function, Array], onUpdateShow: [Function, Array], "onUpdate:value": [Function, Array], onUpdateValue: [Function, Array] }), e.default = (0, r.defineComponent)({
    name: "ColorPicker",
    props: e.colorPickerProps,
    setup(d, { slots: X }) {
      const Z = (0, r.ref)(null);
      let ae = null;
      const $e = (0, f.useFormItem)(d), { mergedSizeRef: Ze, mergedDisabledRef: ct } = $e, { localeRef: de } = (0, f.useLocale)("global"), { mergedClsPrefixRef: Pe, namespaceRef: dt, inlineThemeDisabled: Ue } = (0, f.useConfig)(d), Re = (0, f.useTheme)("ColorPicker", "-color-picker", Ce.default, s.colorPickerLight, d, Pe);
      (0, r.provide)(we.colorPickerInjectionKey, {
        themeRef: Re,
        renderLabelRef: (0, r.toRef)(d, "renderLabel"),
        colorPickerSlots: X
      });
      const Ge = (0, r.ref)(d.defaultShow), Ye = (0, a.useMergedState)((0, r.toRef)(d, "show"), Ge);
      function he(n) {
        const { onUpdateShow: h, "onUpdate:show": g } = d;
        h && (0, k.call)(h, n), g && (0, k.call)(g, n), Ge.value = n;
      }
      const { defaultValue: Je } = d, Qe = (0, r.ref)(Je === void 0 ? (0, le.deriveDefaultValue)(d.modes, d.showAlpha) : Je), y = (0, a.useMergedState)((0, r.toRef)(d, "value"), Qe), G = (0, r.ref)([y.value]), M = (0, r.ref)(0), Me = (0, r.computed)(() => (0, le.getModeFromValue)(y.value)), { modes: ht } = d, P = (0, r.ref)((0, le.getModeFromValue)(y.value) || ht[0] || "rgb");
      function ft() {
        const { modes: n } = d, { value: h } = P, g = n.findIndex((v) => v === h);
        ~g ? P.value = n[(g + 1) % n.length] : P.value = "rgb";
      }
      let w, C, Y, J, z, H, I, $;
      const ie = (0, r.computed)(() => {
        const { value: n } = y;
        if (!n)
          return null;
        switch (Me.value) {
          case "hsv":
            return (0, t.hsva)(n);
          case "hsl":
            return [w, C, Y, $] = (0, t.hsla)(n), [...(0, t.hsl2hsv)(w, C, Y), $];
          case "rgb":
          case "hex":
            return [z, H, I, $] = (0, t.rgba)(n), [...(0, t.rgb2hsv)(z, H, I), $];
        }
      }), E = (0, r.computed)(() => {
        const { value: n } = y;
        if (!n)
          return null;
        switch (Me.value) {
          case "rgb":
          case "hex":
            return (0, t.rgba)(n);
          case "hsv":
            return [w, C, J, $] = (0, t.hsva)(n), [...(0, t.hsv2rgb)(w, C, J), $];
          case "hsl":
            return [w, C, Y, $] = (0, t.hsla)(n), [...(0, t.hsl2rgb)(w, C, Y), $];
        }
      }), Ae = (0, r.computed)(() => {
        const { value: n } = y;
        if (!n)
          return null;
        switch (Me.value) {
          case "hsl":
            return (0, t.hsla)(n);
          case "hsv":
            return [w, C, J, $] = (0, t.hsva)(n), [...(0, t.hsv2hsl)(w, C, J), $];
          case "rgb":
          case "hex":
            return [z, H, I, $] = (0, t.rgba)(n), [...(0, t.rgb2hsl)(z, H, I), $];
        }
      }), pt = (0, r.computed)(() => {
        switch (P.value) {
          case "rgb":
          case "hex":
            return E.value;
          case "hsv":
            return ie.value;
          case "hsl":
            return Ae.value;
        }
      }), fe = (0, r.ref)(0), De = (0, r.ref)(1), Ve = (0, r.ref)([0, 0]);
      function gt(n, h) {
        const { value: g } = ie, v = fe.value, b = g ? g[3] : 1;
        Ve.value = [n, h];
        const { showAlpha: p } = d;
        switch (P.value) {
          case "hsv":
            m((p ? t.toHsvaString : t.toHsvString)([v, n, h, b]), "cursor");
            break;
          case "hsl":
            m((p ? t.toHslaString : t.toHslString)([
              ...(0, t.hsv2hsl)(v, n, h),
              b
            ]), "cursor");
            break;
          case "rgb":
            m((p ? t.toRgbaString : t.toRgbString)([
              ...(0, t.hsv2rgb)(v, n, h),
              b
            ]), "cursor");
            break;
          case "hex":
            m((p ? t.toHexaString : t.toHexString)([
              ...(0, t.hsv2rgb)(v, n, h),
              b
            ]), "cursor");
            break;
        }
      }
      function vt(n) {
        fe.value = n;
        const { value: h } = ie;
        if (!h)
          return;
        const [, g, v, b] = h, { showAlpha: p } = d;
        switch (P.value) {
          case "hsv":
            m((p ? t.toHsvaString : t.toHsvString)([n, g, v, b]), "cursor");
            break;
          case "rgb":
            m((p ? t.toRgbaString : t.toRgbString)([
              ...(0, t.hsv2rgb)(n, g, v),
              b
            ]), "cursor");
            break;
          case "hex":
            m((p ? t.toHexaString : t.toHexString)([
              ...(0, t.hsv2rgb)(n, g, v),
              b
            ]), "cursor");
            break;
          case "hsl":
            m((p ? t.toHslaString : t.toHslString)([
              ...(0, t.hsv2hsl)(n, g, v),
              b
            ]), "cursor");
            break;
        }
      }
      function bt(n) {
        switch (P.value) {
          case "hsv":
            [w, C, J] = ie.value, m((0, t.toHsvaString)([w, C, J, n]), "cursor");
            break;
          case "rgb":
            [z, H, I] = E.value, m((0, t.toRgbaString)([z, H, I, n]), "cursor");
            break;
          case "hex":
            [z, H, I] = E.value, m((0, t.toHexaString)([z, H, I, n]), "cursor");
            break;
          case "hsl":
            [w, C, Y] = Ae.value, m((0, t.toHslaString)([w, C, Y, n]), "cursor");
            break;
        }
        De.value = n;
      }
      function m(n, h) {
        h === "cursor" ? ae = n : ae = null;
        const { nTriggerFormChange: g, nTriggerFormInput: v } = $e, { onUpdateValue: b, "onUpdate:value": p } = d;
        b && (0, k.call)(b, n), p && (0, k.call)(p, n), g(), v(), Qe.value = n;
      }
      function mt(n) {
        m(n, "input"), (0, r.nextTick)(Q);
      }
      function Q(n = !0) {
        const { value: h } = y;
        if (h) {
          const { nTriggerFormChange: g, nTriggerFormInput: v } = $e, { onComplete: b } = d;
          b && b(h);
          const { value: p } = G, { value: S } = M;
          n && (p.splice(S + 1, p.length, h), M.value = S + 1), g(), v();
        }
      }
      function _t() {
        const { value: n } = M;
        n - 1 < 0 || (m(G.value[n - 1], "input"), Q(!1), M.value = n - 1);
      }
      function kt() {
        const { value: n } = M;
        n < 0 || n + 1 >= G.value.length || (m(G.value[n + 1], "input"), Q(!1), M.value = n + 1);
      }
      function xt() {
        m(null, "input"), he(!1);
      }
      function yt() {
        const { value: n } = y, { onConfirm: h } = d;
        h && h(n), he(!1);
      }
      const St = (0, r.computed)(() => M.value >= 1), wt = (0, r.computed)(() => {
        const { value: n } = G;
        return n.length > 1 && M.value < n.length - 1;
      });
      (0, r.watch)(Ye, (n) => {
        n || (G.value = [y.value], M.value = 0);
      }), (0, r.watchEffect)(() => {
        if (!(ae && ae === y.value)) {
          const { value: n } = ie;
          n && (fe.value = n[0], De.value = n[3], Ve.value = [n[1], n[2]]);
        }
        ae = null;
      });
      const ze = (0, r.computed)(() => {
        const { value: n } = Ze, { common: { cubicBezierEaseInOut: h }, self: { textColor: g, color: v, panelFontSize: b, boxShadow: p, border: S, borderRadius: x, dividerColor: T, [(0, k.createKey)("height", n)]: $t, [(0, k.createKey)("fontSize", n)]: Pt } } = Re.value;
        return {
          "--n-bezier": h,
          "--n-text-color": g,
          "--n-color": v,
          "--n-panel-font-size": b,
          "--n-font-size": Pt,
          "--n-box-shadow": p,
          "--n-border": S,
          "--n-border-radius": x,
          "--n-height": $t,
          "--n-divider-color": T
        };
      }), A = Ue ? (0, f.useThemeClass)("color-picker", (0, r.computed)(() => Ze.value[0]), ze, d) : void 0;
      function Ct() {
        var n;
        const { value: h } = E, { value: g } = fe, { internalActions: v, modes: b, actions: p } = d, { value: S } = Re, { value: x } = Pe;
        return (0, r.h)(
          "div",
          { class: [
            `${x}-color-picker-panel`,
            A == null ? void 0 : A.themeClass.value
          ], onDragstart: (T) => {
            T.preventDefault();
          }, style: Ue ? void 0 : ze.value },
          (0, r.h)(
            "div",
            { class: `${x}-color-picker-control` },
            (0, r.h)(oe.default, { clsPrefix: x, rgba: h, displayedHue: g, displayedSv: Ve.value, onUpdateSV: gt, onComplete: Q }),
            (0, r.h)(
              "div",
              { class: `${x}-color-picker-preview` },
              (0, r.h)(
                "div",
                { class: `${x}-color-picker-preview__sliders` },
                (0, r.h)(j.default, { clsPrefix: x, hue: g, onUpdateHue: vt, onComplete: Q }),
                d.showAlpha ? (0, r.h)(F.default, { clsPrefix: x, rgba: h, alpha: De.value, onUpdateAlpha: bt, onComplete: Q }) : null
              ),
              d.showPreview ? (0, r.h)(Se.default, { clsPrefix: x, mode: P.value, color: E.value && (0, t.toHexString)(E.value), onUpdateColor: (T) => {
                m(T, "input");
              } }) : null
            ),
            (0, r.h)(ne.default, { clsPrefix: x, showAlpha: d.showAlpha, mode: P.value, modes: b, onUpdateMode: ft, value: y.value, valueArr: pt.value, onUpdateValue: mt }),
            ((n = d.swatches) === null || n === void 0 ? void 0 : n.length) && (0, r.h)(ye.default, { clsPrefix: x, mode: P.value, swatches: d.swatches, onUpdateColor: (T) => {
              m(T, "input");
            } })
          ),
          p != null && p.length ? (0, r.h)(
            "div",
            { class: `${x}-color-picker-action` },
            p.includes("confirm") && (0, r.h)(V.NButton, { size: "small", onClick: yt, theme: S.peers.Button, themeOverrides: S.peerOverrides.Button }, { default: () => de.value.confirm }),
            p.includes("clear") && (0, r.h)(V.NButton, { size: "small", onClick: xt, disabled: !y.value, theme: S.peers.Button, themeOverrides: S.peerOverrides.Button }, { default: () => de.value.clear })
          ) : null,
          X.action ? (0, r.h)("div", { class: `${x}-color-picker-action` }, { default: X.action }) : v ? (0, r.h)(
            "div",
            { class: `${x}-color-picker-action` },
            v.includes("undo") && (0, r.h)(V.NButton, { size: "small", onClick: _t, disabled: !St.value, theme: S.peers.Button, themeOverrides: S.peerOverrides.Button }, { default: () => de.value.undo }),
            v.includes("redo") && (0, r.h)(V.NButton, { size: "small", onClick: kt, disabled: !wt.value, theme: S.peers.Button, themeOverrides: S.peerOverrides.Button }, { default: () => de.value.redo })
          ) : null
        );
      }
      return {
        mergedClsPrefix: Pe,
        namespace: dt,
        selfRef: Z,
        hsla: Ae,
        rgba: E,
        mergedShow: Ye,
        mergedDisabled: ct,
        isMounted: (0, a.useIsMounted)(),
        adjustedTo: (0, k.useAdjustedTo)(d),
        mergedValue: y,
        handleTriggerClick() {
          he(!0);
        },
        handleClickOutside(n) {
          var h;
          !((h = Z.value) === null || h === void 0) && h.contains((0, t.getPreciseEventTarget)(n)) || he(!1);
        },
        renderPanel: Ct,
        cssVars: Ue ? void 0 : ze,
        themeClass: A == null ? void 0 : A.themeClass,
        onRender: A == null ? void 0 : A.onRender
      };
    },
    render() {
      const { $slots: d, mergedClsPrefix: X, onRender: Z } = this;
      return Z == null || Z(), (0, r.h)(
        "div",
        { class: [this.themeClass, `${X}-color-picker`], ref: "selfRef", style: this.cssVars },
        (0, r.h)(l.VBinder, null, {
          default: () => [
            (0, r.h)(l.VTarget, null, {
              default: () => (0, r.h)(xe.default, { clsPrefix: X, value: this.mergedValue, hsla: this.hsla, disabled: this.mergedDisabled, onClick: this.handleTriggerClick }, {
                label: d.label
              })
            }),
            (0, r.h)(l.VFollower, { placement: this.placement, show: this.mergedShow, containerClass: this.namespace, teleportDisabled: this.adjustedTo === k.useAdjustedTo.tdkey, to: this.adjustedTo }, {
              default: () => (0, r.h)(r.Transition, { name: "fade-in-scale-up-transition", appear: this.isMounted }, {
                default: () => this.mergedShow ? (0, r.withDirectives)(this.renderPanel(), [
                  [
                    i.clickoutside,
                    this.handleClickOutside,
                    void 0,
                    { capture: !0 }
                  ]
                ]) : null
              })
            })
          ]
        })
      );
    }
  });
})(it);
(function(e) {
  var o = O && O.__importDefault || function(t) {
    return t && t.__esModule ? t : { default: t };
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.colorPickerProps = e.NColorPicker = void 0;
  var r = it;
  Object.defineProperty(e, "NColorPicker", { enumerable: !0, get: function() {
    return o(r).default;
  } }), Object.defineProperty(e, "colorPickerProps", { enumerable: !0, get: function() {
    return r.colorPickerProps;
  } });
})(at);
const $r = /* @__PURE__ */ It({
  __proto__: null
}, [at]);
export {
  $r as i
};
