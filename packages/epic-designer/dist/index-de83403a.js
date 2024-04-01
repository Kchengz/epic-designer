import { c as P } from "./_commonjsHelpers-c5d32002.js";
import { r as le } from "./_vue_commonjs-external-eb7fec7f.js";
import { q as Mo, r as Fe, c as Ue, a as xe, _ as _e, e as Ro, f as Fo, p as Do, b as De, i as Io } from "./index-815197f3.js";
import { i as To, _ as Ao } from "./index-cd698eea.js";
function Oo(t, s) {
  for (var v = 0; v < s.length; v++) {
    const h = s[v];
    if (typeof h != "string" && !Array.isArray(h)) {
      for (const f in h)
        if (f !== "default" && !(f in t)) {
          const r = Object.getOwnPropertyDescriptor(h, f);
          r && Object.defineProperty(t, f, r.get ? r : {
            enumerable: !0,
            get: () => h[f]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }));
}
var qe = {}, Xe = {}, Ye = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.isSafari = t.isFirefox = t.isChrome = void 0;
  const s = Mo;
  t.isChrome = s.isBrowser && "chrome" in window, t.isFirefox = s.isBrowser && navigator.userAgent.includes("Firefox"), t.isSafari = s.isBrowser && navigator.userAgent.includes("Safari") && !t.isChrome;
})(Ye);
var Ie = {}, Te = {}, ye = {};
Object.defineProperty(ye, "__esModule", { value: !0 });
ye.default = {
  paddingTiny: "0 8px",
  paddingSmall: "0 10px",
  paddingMedium: "0 12px",
  paddingLarge: "0 14px",
  clearSize: "16px"
};
var jo = P && P.__importDefault || function(t) {
  return t && t.__esModule ? t : { default: t };
};
Object.defineProperty(Te, "__esModule", { value: !0 });
const Wo = jo(ye), ee = Fe, Vo = Ue, ko = {
  name: "Input",
  common: Vo.commonDark,
  self(t) {
    const { textColor2: s, textColor3: v, textColorDisabled: h, primaryColor: f, primaryColorHover: r, inputColor: m, inputColorDisabled: u, warningColor: b, warningColorHover: w, errorColor: $, errorColorHover: D, borderRadius: I, lineHeight: B, fontSizeTiny: R, fontSizeSmall: p, fontSizeMedium: N, fontSizeLarge: G, heightTiny: j, heightSmall: k, heightMedium: L, heightLarge: n, clearColor: g, clearColorHover: a, clearColorPressed: F, placeholderColor: T, placeholderColorDisabled: A, iconColor: z, iconColorDisabled: E, iconColorHover: C, iconColorPressed: c } = t;
    return Object.assign(Object.assign({}, Wo.default), {
      countTextColorDisabled: h,
      countTextColor: v,
      heightTiny: j,
      heightSmall: k,
      heightMedium: L,
      heightLarge: n,
      fontSizeTiny: R,
      fontSizeSmall: p,
      fontSizeMedium: N,
      fontSizeLarge: G,
      lineHeight: B,
      lineHeightTextarea: B,
      borderRadius: I,
      iconSize: "16px",
      groupLabelColor: m,
      textColor: s,
      textColorDisabled: h,
      textDecorationColor: s,
      groupLabelTextColor: s,
      caretColor: f,
      placeholderColor: T,
      placeholderColorDisabled: A,
      color: m,
      colorDisabled: u,
      colorFocus: (0, ee.changeColor)(f, { alpha: 0.1 }),
      groupLabelBorder: "1px solid #0000",
      border: "1px solid #0000",
      borderHover: `1px solid ${r}`,
      borderDisabled: "1px solid #0000",
      borderFocus: `1px solid ${r}`,
      boxShadowFocus: `0 0 8px 0 ${(0, ee.changeColor)(f, { alpha: 0.3 })}`,
      loadingColor: f,
      // warning
      loadingColorWarning: b,
      borderWarning: `1px solid ${b}`,
      borderHoverWarning: `1px solid ${w}`,
      colorFocusWarning: (0, ee.changeColor)(b, { alpha: 0.1 }),
      borderFocusWarning: `1px solid ${w}`,
      boxShadowFocusWarning: `0 0 8px 0 ${(0, ee.changeColor)(b, {
        alpha: 0.3
      })}`,
      caretColorWarning: b,
      // error
      loadingColorError: $,
      borderError: `1px solid ${$}`,
      borderHoverError: `1px solid ${D}`,
      colorFocusError: (0, ee.changeColor)($, { alpha: 0.1 }),
      borderFocusError: `1px solid ${D}`,
      boxShadowFocusError: `0 0 8px 0 ${(0, ee.changeColor)($, {
        alpha: 0.3
      })}`,
      caretColorError: $,
      clearColor: g,
      clearColorHover: a,
      clearColorPressed: F,
      iconColor: z,
      iconColorDisabled: E,
      iconColorHover: C,
      iconColorPressed: c,
      suffixTextColor: s
    });
  }
};
Te.default = ko;
var Ae = {}, Lo = P && P.__importDefault || function(t) {
  return t && t.__esModule ? t : { default: t };
};
Object.defineProperty(Ae, "__esModule", { value: !0 });
const Ho = Lo(ye), Re = Fe, No = Ue, Go = (t) => {
  const { textColor2: s, textColor3: v, textColorDisabled: h, primaryColor: f, primaryColorHover: r, inputColor: m, inputColorDisabled: u, borderColor: b, warningColor: w, warningColorHover: $, errorColor: D, errorColorHover: I, borderRadius: B, lineHeight: R, fontSizeTiny: p, fontSizeSmall: N, fontSizeMedium: G, fontSizeLarge: j, heightTiny: k, heightSmall: L, heightMedium: n, heightLarge: g, actionColor: a, clearColor: F, clearColorHover: T, clearColorPressed: A, placeholderColor: z, placeholderColorDisabled: E, iconColor: C, iconColorDisabled: c, iconColorHover: d, iconColorPressed: M } = t;
  return Object.assign(Object.assign({}, Ho.default), {
    countTextColorDisabled: h,
    countTextColor: v,
    heightTiny: k,
    heightSmall: L,
    heightMedium: n,
    heightLarge: g,
    fontSizeTiny: p,
    fontSizeSmall: N,
    fontSizeMedium: G,
    fontSizeLarge: j,
    lineHeight: R,
    lineHeightTextarea: R,
    borderRadius: B,
    iconSize: "16px",
    groupLabelColor: a,
    groupLabelTextColor: s,
    textColor: s,
    textColorDisabled: h,
    textDecorationColor: s,
    caretColor: f,
    placeholderColor: z,
    placeholderColorDisabled: E,
    color: m,
    colorDisabled: u,
    colorFocus: m,
    groupLabelBorder: `1px solid ${b}`,
    border: `1px solid ${b}`,
    borderHover: `1px solid ${r}`,
    borderDisabled: `1px solid ${b}`,
    borderFocus: `1px solid ${r}`,
    boxShadowFocus: `0 0 0 2px ${(0, Re.changeColor)(f, { alpha: 0.2 })}`,
    loadingColor: f,
    // warning
    loadingColorWarning: w,
    borderWarning: `1px solid ${w}`,
    borderHoverWarning: `1px solid ${$}`,
    colorFocusWarning: m,
    borderFocusWarning: `1px solid ${$}`,
    boxShadowFocusWarning: `0 0 0 2px ${(0, Re.changeColor)(w, {
      alpha: 0.2
    })}`,
    caretColorWarning: w,
    // error
    loadingColorError: D,
    borderError: `1px solid ${D}`,
    borderHoverError: `1px solid ${I}`,
    colorFocusError: m,
    borderFocusError: `1px solid ${I}`,
    boxShadowFocusError: `0 0 0 2px ${(0, Re.changeColor)(D, {
      alpha: 0.2
    })}`,
    caretColorError: D,
    clearColor: F,
    clearColorHover: T,
    clearColorPressed: A,
    iconColor: C,
    iconColorDisabled: c,
    iconColorHover: d,
    iconColorPressed: M,
    suffixTextColor: s
  });
}, Ko = {
  name: "Input",
  common: No.commonLight,
  self: Go
};
Ae.default = Ko;
var Ce = {}, Oe = {};
Object.defineProperty(Oe, "__esModule", {
  value: !0
});
const Y = xe;
Oe.default = (0, Y.cB)("input", [(0, Y.cM)("rtl", `
 direction: rtl;
 `, [(0, Y.cE)("prefix", {
  marginRight: 0,
  marginLeft: "4px"
}), (0, Y.cE)("suffix", {
  marginRight: "4px",
  marginLeft: 0
}), (0, Y.cM)("textarea", "width: 100%;", [(0, Y.cB)("input-word-count", `
 left: var(--n-padding-right);
 right: unset;
 `)]), (0, Y.cB)("input-word-count", `
 margin-left: 0;
 margin-right: 4px;
 `)])]);
var Uo = P && P.__importDefault || function(t) {
  return t && t.__esModule ? t : { default: t };
};
Object.defineProperty(Ce, "__esModule", { value: !0 });
Ce.inputRtl = void 0;
const qo = Uo(Oe);
Ce.inputRtl = {
  name: "Input",
  style: qo.default
};
(function(t) {
  var s = P && P.__importDefault || function(r) {
    return r && r.__esModule ? r : { default: r };
  };
  Object.defineProperty(t, "__esModule", { value: !0 }), t.inputRtl = t.inputLight = t.inputDark = void 0;
  var v = Te;
  Object.defineProperty(t, "inputDark", { enumerable: !0, get: function() {
    return s(v).default;
  } });
  var h = Ae;
  Object.defineProperty(t, "inputLight", { enumerable: !0, get: function() {
    return s(h).default;
  } });
  var f = Ce;
  Object.defineProperty(t, "inputRtl", { enumerable: !0, get: function() {
    return f.inputRtl;
  } });
})(Ie);
var se = {};
Object.defineProperty(se, "__esModule", { value: !0 });
se.inputInjectionKey = void 0;
const Xo = _e;
se.inputInjectionKey = (0, Xo.createInjectionKey)("n-input");
var V = {};
Object.defineProperty(V, "__esModule", { value: !0 });
V.useCursor = V.isEmptyInputValue = V.len = void 0;
const Ge = le;
function Yo(t) {
  let s = 0;
  for (const v of t)
    s++;
  return s;
}
V.len = Yo;
function Jo(t) {
  return t === "" || t == null;
}
V.isEmptyInputValue = Jo;
function Qo(t) {
  const s = (0, Ge.ref)(null);
  function v() {
    const { value: r } = t;
    if (!(r != null && r.focus)) {
      f();
      return;
    }
    const { selectionStart: m, selectionEnd: u, value: b } = r;
    if (m == null || u == null) {
      f();
      return;
    }
    s.value = {
      start: m,
      end: u,
      beforeText: b.slice(0, m),
      afterText: b.slice(u)
    };
  }
  function h() {
    var r;
    const { value: m } = s, { value: u } = t;
    if (!m || !u)
      return;
    const { value: b } = u, { start: w, beforeText: $, afterText: D } = m;
    let I = b.length;
    if (b.endsWith(D))
      I = b.length - D.length;
    else if (b.startsWith($))
      I = $.length;
    else {
      const B = $[w - 1], R = b.indexOf(B, w - 1);
      R !== -1 && (I = R + 1);
    }
    (r = u.setSelectionRange) === null || r === void 0 || r.call(u, I, I);
  }
  function f() {
    s.value = null;
  }
  return (0, Ge.watch)(t, f), {
    recordCursor: v,
    restoreCursor: h
  };
}
V.useCursor = Qo;
var je = {};
Object.defineProperty(je, "__esModule", { value: !0 });
const me = le, Zo = _e, et = se, rt = V;
je.default = (0, me.defineComponent)({
  name: "InputWordCount",
  setup(t, { slots: s }) {
    const { mergedValueRef: v, maxlengthRef: h, mergedClsPrefixRef: f, countGraphemesRef: r } = (
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      (0, me.inject)(et.inputInjectionKey)
    ), m = (0, me.computed)(() => {
      const { value: u } = v;
      return u === null || Array.isArray(u) ? 0 : (r.value || rt.len)(u);
    });
    return () => {
      const { value: u } = h, { value: b } = v;
      return (0, me.h)("span", { class: `${f.value}-input-word-count` }, (0, Zo.resolveSlotWithProps)(s.default, {
        value: b === null || Array.isArray(b) ? "" : b
      }, () => [
        u === void 0 ? m.value : `${m.value} / ${u}`
      ]));
    };
  }
});
var ue = {};
Object.defineProperty(ue, "__esModule", {
  value: !0
});
ue.safariStyle = void 0;
const i = xe;
ue.default = (0, i.cB)("input", `
 max-width: 100%;
 cursor: text;
 line-height: 1.5;
 z-index: auto;
 outline: none;
 box-sizing: border-box;
 position: relative;
 display: inline-flex;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 transition: background-color .3s var(--n-bezier);
 font-size: var(--n-font-size);
 --n-padding-vertical: calc((var(--n-height) - 1.5 * var(--n-font-size)) / 2);
`, [
  // common
  (0, i.cE)("input, textarea", `
 overflow: hidden;
 flex-grow: 1;
 position: relative;
 `),
  (0, i.cE)("input-el, textarea-el, input-mirror, textarea-mirror, separator, placeholder", `
 box-sizing: border-box;
 font-size: inherit;
 line-height: 1.5;
 font-family: inherit;
 border: none;
 outline: none;
 background-color: #0000;
 text-align: inherit;
 transition:
 -webkit-text-fill-color .3s var(--n-bezier),
 caret-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 text-decoration-color .3s var(--n-bezier);
 `),
  (0, i.cE)("input-el, textarea-el", `
 -webkit-appearance: none;
 scrollbar-width: none;
 width: 100%;
 min-width: 0;
 text-decoration-color: var(--n-text-decoration-color);
 color: var(--n-text-color);
 caret-color: var(--n-caret-color);
 background-color: transparent;
 `, [(0, i.c)("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb", `
 width: 0;
 height: 0;
 display: none;
 `), (0, i.c)("&::placeholder", `
 color: #0000;
 -webkit-text-fill-color: transparent !important;
 `), (0, i.c)("&:-webkit-autofill ~", [(0, i.cE)("placeholder", "display: none;")])]),
  (0, i.cM)("round", [(0, i.cNotM)("textarea", "border-radius: calc(var(--n-height) / 2);")]),
  (0, i.cE)("placeholder", `
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 overflow: hidden;
 color: var(--n-placeholder-color);
 `, [(0, i.c)("span", `
 width: 100%;
 display: inline-block;
 `)]),
  (0, i.cM)("textarea", [(0, i.cE)("placeholder", "overflow: visible;")]),
  (0, i.cNotM)("autosize", "width: 100%;"),
  (0, i.cM)("autosize", [(0, i.cE)("textarea-el, input-el", `
 position: absolute;
 top: 0;
 left: 0;
 height: 100%;
 `)]),
  // input
  (0, i.cB)("input-wrapper", `
 overflow: hidden;
 display: inline-flex;
 flex-grow: 1;
 position: relative;
 padding-left: var(--n-padding-left);
 padding-right: var(--n-padding-right);
 `),
  (0, i.cE)("input-mirror", `
 padding: 0;
 height: var(--n-height);
 line-height: var(--n-height);
 overflow: hidden;
 visibility: hidden;
 position: static;
 white-space: pre;
 pointer-events: none;
 `),
  (0, i.cE)("input-el", `
 padding: 0;
 height: var(--n-height);
 line-height: var(--n-height);
 `, [(0, i.c)("+", [(0, i.cE)("placeholder", `
 display: flex;
 align-items: center; 
 `)])]),
  (0, i.cNotM)("textarea", [(0, i.cE)("placeholder", "white-space: nowrap;")]),
  (0, i.cE)("eye", `
 display: flex;
 align-items: center;
 justify-content: center;
 transition: color .3s var(--n-bezier);
 `),
  // textarea
  (0, i.cM)("textarea", "width: 100%;", [(0, i.cB)("input-word-count", `
 position: absolute;
 right: var(--n-padding-right);
 bottom: var(--n-padding-vertical);
 `), (0, i.cM)("resizable", [(0, i.cB)("input-wrapper", `
 resize: vertical;
 min-height: var(--n-height);
 `)]), (0, i.cE)("textarea-el, textarea-mirror, placeholder", `
 height: 100%;
 padding-left: 0;
 padding-right: 0;
 padding-top: var(--n-padding-vertical);
 padding-bottom: var(--n-padding-vertical);
 word-break: break-word;
 display: inline-block;
 vertical-align: bottom;
 box-sizing: border-box;
 line-height: var(--n-line-height-textarea);
 margin: 0;
 resize: none;
 white-space: pre-wrap;
 `), (0, i.cE)("textarea-mirror", `
 width: 100%;
 pointer-events: none;
 overflow: hidden;
 visibility: hidden;
 position: static;
 white-space: pre-wrap;
 overflow-wrap: break-word;
 `)]),
  // pair
  (0, i.cM)("pair", [(0, i.cE)("input-el, placeholder", "text-align: center;"), (0, i.cE)("separator", `
 display: flex;
 align-items: center;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 white-space: nowrap;
 `, [(0, i.cB)("icon", `
 color: var(--n-icon-color);
 `), (0, i.cB)("base-icon", `
 color: var(--n-icon-color);
 `)])]),
  (0, i.cM)("disabled", `
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `, [(0, i.cE)("border", "border: var(--n-border-disabled);"), (0, i.cE)("input-el, textarea-el", `
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 text-decoration-color: var(--n-text-color-disabled);
 `), (0, i.cE)("placeholder", "color: var(--n-placeholder-color-disabled);"), (0, i.cE)("separator", "color: var(--n-text-color-disabled);", [(0, i.cB)("icon", `
 color: var(--n-icon-color-disabled);
 `), (0, i.cB)("base-icon", `
 color: var(--n-icon-color-disabled);
 `)]), (0, i.cB)("input-word-count", `
 color: var(--n-count-text-color-disabled);
 `), (0, i.cE)("suffix, prefix", "color: var(--n-text-color-disabled);", [(0, i.cB)("icon", `
 color: var(--n-icon-color-disabled);
 `), (0, i.cB)("internal-icon", `
 color: var(--n-icon-color-disabled);
 `)])]),
  (0, i.cNotM)("disabled", [(0, i.cE)("eye", `
 color: var(--n-icon-color);
 cursor: pointer;
 `, [(0, i.c)("&:hover", `
 color: var(--n-icon-color-hover);
 `), (0, i.c)("&:active", `
 color: var(--n-icon-color-pressed);
 `)]), (0, i.c)("&:hover", [(0, i.cE)("state-border", "border: var(--n-border-hover);")]), (0, i.cM)("focus", "background-color: var(--n-color-focus);", [(0, i.cE)("state-border", `
 border: var(--n-border-focus);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),
  (0, i.cE)("border, state-border", `
 box-sizing: border-box;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border-radius: inherit;
 border: var(--n-border);
 transition:
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),
  (0, i.cE)("state-border", `
 border-color: #0000;
 z-index: 1;
 `),
  (0, i.cE)("prefix", "margin-right: 4px;"),
  (0, i.cE)("suffix", `
 margin-left: 4px;
 `),
  (0, i.cE)("suffix, prefix", `
 transition: color .3s var(--n-bezier);
 flex-wrap: nowrap;
 flex-shrink: 0;
 line-height: var(--n-height);
 white-space: nowrap;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 color: var(--n-suffix-text-color);
 `, [(0, i.cB)("base-loading", `
 font-size: var(--n-icon-size);
 margin: 0 2px;
 color: var(--n-loading-color);
 `), (0, i.cB)("base-clear", `
 font-size: var(--n-icon-size);
 `, [(0, i.cE)("placeholder", [(0, i.cB)("base-icon", `
 transition: color .3s var(--n-bezier);
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 `)])]), (0, i.c)(">", [(0, i.cB)("icon", `
 transition: color .3s var(--n-bezier);
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 `)]), (0, i.cB)("base-icon", `
 font-size: var(--n-icon-size);
 `)]),
  (0, i.cB)("input-word-count", `
 pointer-events: none;
 line-height: 1.5;
 font-size: .85em;
 color: var(--n-count-text-color);
 transition: color .3s var(--n-bezier);
 margin-left: 4px;
 font-variant: tabular-nums;
 `),
  ["warning", "error"].map((t) => (0, i.cM)(`${t}-status`, [(0, i.cNotM)("disabled", [(0, i.cB)("base-loading", `
 color: var(--n-loading-color-${t})
 `), (0, i.cE)("input-el, textarea-el", `
 caret-color: var(--n-caret-color-${t});
 `), (0, i.cE)("state-border", `
 border: var(--n-border-${t});
 `), (0, i.c)("&:hover", [(0, i.cE)("state-border", `
 border: var(--n-border-hover-${t});
 `)]), (0, i.c)("&:focus", `
 background-color: var(--n-color-focus-${t});
 `, [(0, i.cE)("state-border", `
 box-shadow: var(--n-box-shadow-focus-${t});
 border: var(--n-border-focus-${t});
 `)]), (0, i.cM)("focus", `
 background-color: var(--n-color-focus-${t});
 `, [(0, i.cE)("state-border", `
 box-shadow: var(--n-box-shadow-focus-${t});
 border: var(--n-border-focus-${t});
 `)])])]))
]);
ue.safariStyle = (0, i.cB)("input", [(0, i.cM)("disabled", [(0, i.cE)("input-el, textarea-el", `
 -webkit-text-fill-color: var(--n-text-color-disabled);
 `)])]);
(function(t) {
  var s = P && P.__createBinding || (Object.create ? function(n, g, a, F) {
    F === void 0 && (F = a);
    var T = Object.getOwnPropertyDescriptor(g, a);
    (!T || ("get" in T ? !g.__esModule : T.writable || T.configurable)) && (T = { enumerable: !0, get: function() {
      return g[a];
    } }), Object.defineProperty(n, F, T);
  } : function(n, g, a, F) {
    F === void 0 && (F = a), n[F] = g[a];
  }), v = P && P.__setModuleDefault || (Object.create ? function(n, g) {
    Object.defineProperty(n, "default", { enumerable: !0, value: g });
  } : function(n, g) {
    n.default = g;
  }), h = P && P.__importStar || function(n) {
    if (n && n.__esModule)
      return n;
    var g = {};
    if (n != null)
      for (var a in n)
        a !== "default" && Object.prototype.hasOwnProperty.call(n, a) && s(g, n, a);
    return v(g, n), g;
  }, f = P && P.__importDefault || function(n) {
    return n && n.__esModule ? n : { default: n };
  };
  Object.defineProperty(t, "__esModule", { value: !0 }), t.inputProps = void 0;
  const r = le, m = Ro, u = Fe, b = Fo, w = Io, $ = Ye, D = To, I = Do, B = Ao, R = De, p = _e, N = Ie, G = se, j = V, k = f(je), L = h(ue);
  t.inputProps = Object.assign(Object.assign({}, R.useTheme.props), {
    bordered: {
      type: Boolean,
      default: void 0
    },
    type: {
      type: String,
      default: "text"
    },
    placeholder: [Array, String],
    defaultValue: {
      type: [String, Array],
      default: null
    },
    value: [String, Array],
    disabled: {
      type: Boolean,
      default: void 0
    },
    size: String,
    rows: {
      type: [Number, String],
      default: 3
    },
    round: Boolean,
    minlength: [String, Number],
    maxlength: [String, Number],
    clearable: Boolean,
    autosize: {
      type: [Boolean, Object],
      default: !1
    },
    pair: Boolean,
    separator: String,
    readonly: {
      type: [String, Boolean],
      default: !1
    },
    passivelyActivated: Boolean,
    showPasswordOn: String,
    stateful: {
      type: Boolean,
      default: !0
    },
    autofocus: Boolean,
    inputProps: Object,
    resizable: {
      type: Boolean,
      default: !0
    },
    showCount: Boolean,
    loading: {
      type: Boolean,
      default: void 0
    },
    allowInput: Function,
    renderCount: Function,
    onMousedown: Function,
    onKeydown: Function,
    onKeyup: Function,
    onInput: [Function, Array],
    onFocus: [Function, Array],
    onBlur: [Function, Array],
    onClick: [Function, Array],
    onChange: [Function, Array],
    onClear: [Function, Array],
    countGraphemes: Function,
    status: String,
    "onUpdate:value": [Function, Array],
    onUpdateValue: [Function, Array],
    /** private */
    textDecoration: [String, Array],
    attrSize: {
      type: Number,
      default: 20
    },
    onInputBlur: [Function, Array],
    onInputFocus: [Function, Array],
    onDeactivate: [Function, Array],
    onActivate: [Function, Array],
    onWrapperFocus: [Function, Array],
    onWrapperBlur: [Function, Array],
    internalDeactivateOnEnter: Boolean,
    internalForceFocus: Boolean,
    internalLoadingBeforeSuffix: Boolean,
    /** deprecated */
    showPasswordToggle: Boolean
  }), t.default = (0, r.defineComponent)({
    name: "Input",
    props: t.inputProps,
    setup(n) {
      process.env.NODE_ENV !== "production" && (0, r.watchEffect)(() => {
        n.showPasswordToggle && (0, p.warnOnce)("input", '`show-password-toggle` is deprecated, please use `showPasswordOn="click"` instead');
      });
      const { mergedClsPrefixRef: g, mergedBorderedRef: a, inlineThemeDisabled: F, mergedRtlRef: T } = (0, R.useConfig)(n), A = (0, R.useTheme)("Input", "-input", L.default, N.inputLight, n, g);
      $.isSafari && (0, R.useStyle)("-input-safari", L.safariStyle, g);
      const z = (0, r.ref)(null), E = (0, r.ref)(null), C = (0, r.ref)(null), c = (0, r.ref)(null), d = (0, r.ref)(null), M = (0, r.ref)(null), O = (0, r.ref)(null), ce = (0, j.useCursor)(O), K = (0, r.ref)(null), { localeRef: Ze } = (0, R.useLocale)("Input"), de = (0, r.ref)(n.defaultValue), er = (0, r.toRef)(n, "value"), W = (0, m.useMergedState)(er, de), re = (0, R.useFormItem)(n), { mergedSizeRef: we, mergedDisabledRef: J, mergedStatusRef: rr } = re, Q = (0, r.ref)(!1), oe = (0, r.ref)(!1), H = (0, r.ref)(!1), te = (0, r.ref)(!1);
      let Ee = null;
      const Pe = (0, r.computed)(() => {
        const { placeholder: e, pair: o } = n;
        return o ? Array.isArray(e) ? e : e === void 0 ? ["", ""] : [e, e] : e === void 0 ? [Ze.value.placeholder] : [e];
      }), or = (0, r.computed)(() => {
        const { value: e } = H, { value: o } = W, { value: l } = Pe;
        return !e && ((0, j.isEmptyInputValue)(o) || Array.isArray(o) && (0, j.isEmptyInputValue)(o[0])) && l[0];
      }), tr = (0, r.computed)(() => {
        const { value: e } = H, { value: o } = W, { value: l } = Pe;
        return !e && l[1] && ((0, j.isEmptyInputValue)(o) || Array.isArray(o) && (0, j.isEmptyInputValue)(o[1]));
      }), Se = (0, m.useMemo)(() => n.internalForceFocus || Q.value), nr = (0, m.useMemo)(() => {
        if (J.value || n.readonly || !n.clearable || !Se.value && !oe.value)
          return !1;
        const { value: e } = W, { value: o } = Se;
        return n.pair ? !!(Array.isArray(e) && (e[0] || e[1])) && (oe.value || o) : !!e && (oe.value || o);
      }), $e = (0, r.computed)(() => {
        const { showPasswordOn: e } = n;
        if (e)
          return e;
        if (n.showPasswordToggle)
          return "click";
      }), ne = (0, r.ref)(!1), ir = (0, r.computed)(() => {
        const { textDecoration: e } = n;
        return e ? Array.isArray(e) ? e.map((o) => ({
          textDecoration: o
        })) : [
          {
            textDecoration: e
          }
        ] : ["", ""];
      }), ke = (0, r.ref)(void 0), ar = () => {
        var e, o;
        if (n.type === "textarea") {
          const { autosize: l } = n;
          if (l && (ke.value = (o = (e = K.value) === null || e === void 0 ? void 0 : e.$el) === null || o === void 0 ? void 0 : o.offsetWidth), !E.value || typeof l == "boolean")
            return;
          const { paddingTop: y, paddingBottom: S, lineHeight: x } = window.getComputedStyle(E.value), U = Number(y.slice(0, -2)), q = Number(S.slice(0, -2)), X = Number(x.slice(0, -2)), { value: ie } = C;
          if (!ie)
            return;
          if (l.minRows) {
            const ae = Math.max(l.minRows, 1), Me = `${U + q + X * ae}px`;
            ie.style.minHeight = Me;
          }
          if (l.maxRows) {
            const ae = `${U + q + X * l.maxRows}px`;
            ie.style.maxHeight = ae;
          }
        }
      }, lr = (0, r.computed)(() => {
        const { maxlength: e } = n;
        return e === void 0 ? void 0 : Number(e);
      });
      (0, r.onMounted)(() => {
        const { value: e } = W;
        Array.isArray(e) || ze(e);
      });
      const sr = (0, r.getCurrentInstance)().proxy;
      function fe(e) {
        const { onUpdateValue: o, "onUpdate:value": l, onInput: y } = n, { nTriggerFormInput: S } = re;
        o && (0, p.call)(o, e), l && (0, p.call)(l, e), y && (0, p.call)(y, e), de.value = e, S();
      }
      function pe(e) {
        const { onChange: o } = n, { nTriggerFormChange: l } = re;
        o && (0, p.call)(o, e), de.value = e, l();
      }
      function ur(e) {
        const { onBlur: o } = n, { nTriggerFormBlur: l } = re;
        o && (0, p.call)(o, e), l();
      }
      function cr(e) {
        const { onFocus: o } = n, { nTriggerFormFocus: l } = re;
        o && (0, p.call)(o, e), l();
      }
      function dr(e) {
        const { onClear: o } = n;
        o && (0, p.call)(o, e);
      }
      function fr(e) {
        const { onInputBlur: o } = n;
        o && (0, p.call)(o, e);
      }
      function pr(e) {
        const { onInputFocus: o } = n;
        o && (0, p.call)(o, e);
      }
      function hr() {
        const { onDeactivate: e } = n;
        e && (0, p.call)(e);
      }
      function vr() {
        const { onActivate: e } = n;
        e && (0, p.call)(e);
      }
      function br(e) {
        const { onClick: o } = n;
        o && (0, p.call)(o, e);
      }
      function gr(e) {
        const { onWrapperFocus: o } = n;
        o && (0, p.call)(o, e);
      }
      function mr(e) {
        const { onWrapperBlur: o } = n;
        o && (0, p.call)(o, e);
      }
      function xr() {
        H.value = !0;
      }
      function _r(e) {
        H.value = !1, e.target === M.value ? he(e, 1) : he(e, 0);
      }
      function he(e, o = 0, l = "input") {
        const y = e.target.value;
        if (ze(y), e instanceof InputEvent && !e.isComposing && (H.value = !1), n.type === "textarea") {
          const { value: x } = K;
          x && x.syncUnifiedContainer();
        }
        if (Ee = y, H.value)
          return;
        ce.recordCursor();
        const S = yr(y);
        if (S)
          if (!n.pair)
            l === "input" ? fe(y) : pe(y);
          else {
            let { value: x } = W;
            Array.isArray(x) ? x = [x[0], x[1]] : x = ["", ""], x[o] = y, l === "input" ? fe(x) : pe(x);
          }
        sr.$forceUpdate(), S || (0, r.nextTick)(ce.restoreCursor);
      }
      function yr(e) {
        const { countGraphemes: o, maxlength: l, minlength: y } = n;
        if (o) {
          let x;
          if (l !== void 0 && (x === void 0 && (x = o(e)), x > Number(l)) || y !== void 0 && (x === void 0 && (x = o(e)), x < Number(l)))
            return !1;
        }
        const { allowInput: S } = n;
        return typeof S == "function" ? S(e) : !0;
      }
      function Cr(e) {
        fr(e), e.relatedTarget === z.value && hr(), e.relatedTarget !== null && (e.relatedTarget === d.value || e.relatedTarget === M.value || e.relatedTarget === E.value) || (te.value = !1), ve(e, "blur"), O.value = null;
      }
      function wr(e, o) {
        pr(e), Q.value = !0, te.value = !0, vr(), ve(e, "focus"), o === 0 ? O.value = d.value : o === 1 ? O.value = M.value : o === 2 && (O.value = E.value);
      }
      function Er(e) {
        n.passivelyActivated && (mr(e), ve(e, "blur"));
      }
      function Pr(e) {
        n.passivelyActivated && (Q.value = !0, gr(e), ve(e, "focus"));
      }
      function ve(e, o) {
        e.relatedTarget !== null && (e.relatedTarget === d.value || e.relatedTarget === M.value || e.relatedTarget === E.value || e.relatedTarget === z.value) || (o === "focus" ? (cr(e), Q.value = !0) : o === "blur" && (ur(e), Q.value = !1));
      }
      function Sr(e, o) {
        he(e, o, "change");
      }
      function $r(e) {
        br(e);
      }
      function Br(e) {
        dr(e), n.pair ? (fe(["", ""]), pe(["", ""])) : (fe(""), pe(""));
      }
      function zr(e) {
        const { onMousedown: o } = n;
        o && o(e);
        const { tagName: l } = e.target;
        if (l !== "INPUT" && l !== "TEXTAREA") {
          if (n.resizable) {
            const { value: y } = z;
            if (y) {
              const { left: S, top: x, width: U, height: q } = y.getBoundingClientRect(), X = 14;
              if (S + U - X < e.clientX && e.clientX < S + U && x + q - X < e.clientY && e.clientY < x + q)
                return;
            }
          }
          e.preventDefault(), Q.value || Le();
        }
      }
      function Mr() {
        var e;
        oe.value = !0, n.type === "textarea" && ((e = K.value) === null || e === void 0 || e.handleMouseEnterWrapper());
      }
      function Rr() {
        var e;
        oe.value = !1, n.type === "textarea" && ((e = K.value) === null || e === void 0 || e.handleMouseLeaveWrapper());
      }
      function Fr() {
        J.value || $e.value === "click" && (ne.value = !ne.value);
      }
      function Dr(e) {
        if (J.value)
          return;
        e.preventDefault();
        const o = (y) => {
          y.preventDefault(), (0, w.off)("mouseup", document, o);
        };
        if ((0, w.on)("mouseup", document, o), $e.value !== "mousedown")
          return;
        ne.value = !0;
        const l = () => {
          ne.value = !1, (0, w.off)("mouseup", document, l);
        };
        (0, w.on)("mouseup", document, l);
      }
      function Ir(e) {
        var o;
        switch ((o = n.onKeydown) === null || o === void 0 || o.call(n, e), e.key) {
          case "Escape":
            Be();
            break;
          case "Enter":
            Tr(e);
            break;
        }
      }
      function Tr(e) {
        var o, l;
        if (n.passivelyActivated) {
          const { value: y } = te;
          if (y) {
            n.internalDeactivateOnEnter && Be();
            return;
          }
          e.preventDefault(), n.type === "textarea" ? (o = E.value) === null || o === void 0 || o.focus() : (l = d.value) === null || l === void 0 || l.focus();
        }
      }
      function Be() {
        n.passivelyActivated && (te.value = !1, (0, r.nextTick)(() => {
          var e;
          (e = z.value) === null || e === void 0 || e.focus();
        }));
      }
      function Le() {
        var e, o, l;
        J.value || (n.passivelyActivated ? (e = z.value) === null || e === void 0 || e.focus() : ((o = E.value) === null || o === void 0 || o.focus(), (l = d.value) === null || l === void 0 || l.focus()));
      }
      function Ar() {
        var e;
        !((e = z.value) === null || e === void 0) && e.contains(document.activeElement) && document.activeElement.blur();
      }
      function Or() {
        var e, o;
        (e = E.value) === null || e === void 0 || e.select(), (o = d.value) === null || o === void 0 || o.select();
      }
      function jr() {
        J.value || (E.value ? E.value.focus() : d.value && d.value.focus());
      }
      function Wr() {
        const { value: e } = z;
        e != null && e.contains(document.activeElement) && e !== document.activeElement && Be();
      }
      function Vr(e) {
        if (n.type === "textarea") {
          const { value: o } = E;
          o == null || o.scrollTo(e);
        } else {
          const { value: o } = d;
          o == null || o.scrollTo(e);
        }
      }
      function ze(e) {
        const { type: o, pair: l, autosize: y } = n;
        if (!l && y)
          if (o === "textarea") {
            const { value: S } = C;
            S && (S.textContent = (e ?? "") + `\r
`);
          } else {
            const { value: S } = c;
            S && (e ? S.textContent = e : S.innerHTML = "&nbsp;");
          }
      }
      function kr() {
        ar();
      }
      const He = (0, r.ref)({
        top: "0"
      });
      function Lr(e) {
        var o;
        const { scrollTop: l } = e.target;
        He.value.top = `${-l}px`, (o = K.value) === null || o === void 0 || o.syncUnifiedContainer();
      }
      let be = null;
      (0, r.watchEffect)(() => {
        const { autosize: e, type: o } = n;
        e && o === "textarea" ? be = (0, r.watch)(W, (l) => {
          !Array.isArray(l) && l !== Ee && ze(l);
        }) : be == null || be();
      });
      let ge = null;
      (0, r.watchEffect)(() => {
        n.type === "textarea" ? ge = (0, r.watch)(W, (e) => {
          var o;
          !Array.isArray(e) && e !== Ee && ((o = K.value) === null || o === void 0 || o.syncUnifiedContainer());
        }) : ge == null || ge();
      }), (0, r.provide)(G.inputInjectionKey, {
        mergedValueRef: W,
        maxlengthRef: lr,
        mergedClsPrefixRef: g,
        countGraphemesRef: (0, r.toRef)(n, "countGraphemes")
      });
      const Hr = {
        wrapperElRef: z,
        inputElRef: d,
        textareaElRef: E,
        isCompositing: H,
        focus: Le,
        blur: Ar,
        select: Or,
        deactivate: Wr,
        activate: jr,
        scrollTo: Vr
      }, Nr = (0, I.useRtl)("Input", T, g), Ne = (0, r.computed)(() => {
        const { value: e } = we, { common: { cubicBezierEaseInOut: o }, self: { color: l, borderRadius: y, textColor: S, caretColor: x, caretColorError: U, caretColorWarning: q, textDecorationColor: X, border: ie, borderDisabled: ae, borderHover: Me, borderFocus: Gr, placeholderColor: Kr, placeholderColorDisabled: Ur, lineHeightTextarea: qr, colorDisabled: Xr, colorFocus: Yr, textColorDisabled: Jr, boxShadowFocus: Qr, iconSize: Zr, colorFocusWarning: eo, boxShadowFocusWarning: ro, borderWarning: oo, borderFocusWarning: to, borderHoverWarning: no, colorFocusError: io, boxShadowFocusError: ao, borderError: lo, borderFocusError: so, borderHoverError: uo, clearSize: co, clearColor: fo, clearColorHover: po, clearColorPressed: ho, iconColor: vo, iconColorDisabled: bo, suffixTextColor: go, countTextColor: mo, countTextColorDisabled: xo, iconColorHover: _o, iconColorPressed: yo, loadingColor: Co, loadingColorError: wo, loadingColorWarning: Eo, [(0, p.createKey)("padding", e)]: Po, [(0, p.createKey)("fontSize", e)]: So, [(0, p.createKey)("height", e)]: $o } } = A.value, { left: Bo, right: zo } = (0, u.getPadding)(Po);
        return {
          "--n-bezier": o,
          "--n-count-text-color": mo,
          "--n-count-text-color-disabled": xo,
          "--n-color": l,
          "--n-font-size": So,
          "--n-border-radius": y,
          "--n-height": $o,
          "--n-padding-left": Bo,
          "--n-padding-right": zo,
          "--n-text-color": S,
          "--n-caret-color": x,
          "--n-text-decoration-color": X,
          "--n-border": ie,
          "--n-border-disabled": ae,
          "--n-border-hover": Me,
          "--n-border-focus": Gr,
          "--n-placeholder-color": Kr,
          "--n-placeholder-color-disabled": Ur,
          "--n-icon-size": Zr,
          "--n-line-height-textarea": qr,
          "--n-color-disabled": Xr,
          "--n-color-focus": Yr,
          "--n-text-color-disabled": Jr,
          "--n-box-shadow-focus": Qr,
          "--n-loading-color": Co,
          // form warning
          "--n-caret-color-warning": q,
          "--n-color-focus-warning": eo,
          "--n-box-shadow-focus-warning": ro,
          "--n-border-warning": oo,
          "--n-border-focus-warning": to,
          "--n-border-hover-warning": no,
          "--n-loading-color-warning": Eo,
          // form error
          "--n-caret-color-error": U,
          "--n-color-focus-error": io,
          "--n-box-shadow-focus-error": ao,
          "--n-border-error": lo,
          "--n-border-focus-error": so,
          "--n-border-hover-error": uo,
          "--n-loading-color-error": wo,
          // clear-button
          "--n-clear-color": fo,
          "--n-clear-size": co,
          "--n-clear-color-hover": po,
          "--n-clear-color-pressed": ho,
          "--n-icon-color": vo,
          "--n-icon-color-hover": _o,
          "--n-icon-color-pressed": yo,
          "--n-icon-color-disabled": bo,
          "--n-suffix-text-color": go
        };
      }), Z = F ? (0, R.useThemeClass)("input", (0, r.computed)(() => {
        const { value: e } = we;
        return e[0];
      }), Ne, n) : void 0;
      return Object.assign(Object.assign({}, Hr), {
        // DOM ref
        wrapperElRef: z,
        inputElRef: d,
        inputMirrorElRef: c,
        inputEl2Ref: M,
        textareaElRef: E,
        textareaMirrorElRef: C,
        textareaScrollbarInstRef: K,
        // value
        rtlEnabled: Nr,
        uncontrolledValue: de,
        mergedValue: W,
        passwordVisible: ne,
        mergedPlaceholder: Pe,
        showPlaceholder1: or,
        showPlaceholder2: tr,
        mergedFocus: Se,
        isComposing: H,
        activated: te,
        showClearButton: nr,
        mergedSize: we,
        mergedDisabled: J,
        textDecorationStyle: ir,
        mergedClsPrefix: g,
        mergedBordered: a,
        mergedShowPasswordOn: $e,
        placeholderStyle: He,
        mergedStatus: rr,
        textAreaScrollContainerWidth: ke,
        // methods
        handleTextAreaScroll: Lr,
        handleCompositionStart: xr,
        handleCompositionEnd: _r,
        handleInput: he,
        handleInputBlur: Cr,
        handleInputFocus: wr,
        handleWrapperBlur: Er,
        handleWrapperFocus: Pr,
        handleMouseEnter: Mr,
        handleMouseLeave: Rr,
        handleMouseDown: zr,
        handleChange: Sr,
        handleClick: $r,
        handleClear: Br,
        handlePasswordToggleClick: Fr,
        handlePasswordToggleMousedown: Dr,
        handleWrapperKeydown: Ir,
        handleTextAreaMirrorResize: kr,
        getTextareaScrollContainer: () => E.value,
        mergedTheme: A,
        cssVars: F ? void 0 : Ne,
        themeClass: Z == null ? void 0 : Z.themeClass,
        onRender: Z == null ? void 0 : Z.onRender
      });
    },
    render() {
      var n, g;
      const { mergedClsPrefix: a, mergedStatus: F, themeClass: T, type: A, countGraphemes: z, onRender: E } = this, C = this.$slots;
      return E == null || E(), (0, r.h)(
        "div",
        { ref: "wrapperElRef", class: [
          `${a}-input`,
          T,
          F && `${a}-input--${F}-status`,
          {
            [`${a}-input--rtl`]: this.rtlEnabled,
            [`${a}-input--disabled`]: this.mergedDisabled,
            [`${a}-input--textarea`]: A === "textarea",
            [`${a}-input--resizable`]: this.resizable && !this.autosize,
            [`${a}-input--autosize`]: this.autosize,
            [`${a}-input--round`]: this.round && A !== "textarea",
            [`${a}-input--pair`]: this.pair,
            [`${a}-input--focus`]: this.mergedFocus,
            [`${a}-input--stateful`]: this.stateful
          }
        ], style: this.cssVars, tabindex: !this.mergedDisabled && this.passivelyActivated && !this.activated ? 0 : void 0, onFocus: this.handleWrapperFocus, onBlur: this.handleWrapperBlur, onClick: this.handleClick, onMousedown: this.handleMouseDown, onMouseenter: this.handleMouseEnter, onMouseleave: this.handleMouseLeave, onCompositionstart: this.handleCompositionStart, onCompositionend: this.handleCompositionEnd, onKeyup: this.onKeyup, onKeydown: this.handleWrapperKeydown },
        (0, r.h)(
          "div",
          { class: `${a}-input-wrapper` },
          (0, p.resolveWrappedSlot)(C.prefix, (c) => c && (0, r.h)("div", { class: `${a}-input__prefix` }, c)),
          A === "textarea" ? (0, r.h)(B.NScrollbar, { ref: "textareaScrollbarInstRef", class: `${a}-input__textarea`, container: this.getTextareaScrollContainer, triggerDisplayManually: !0, useUnifiedContainer: !0, internalHoistYRail: !0 }, {
            default: () => {
              var c, d;
              const { textAreaScrollContainerWidth: M } = this, O = {
                width: this.autosize && M && `${M}px`
              };
              return (0, r.h)(
                r.Fragment,
                null,
                (0, r.h)("textarea", Object.assign({}, this.inputProps, { ref: "textareaElRef", class: [
                  `${a}-input__textarea-el`,
                  (c = this.inputProps) === null || c === void 0 ? void 0 : c.class
                ], autofocus: this.autofocus, rows: Number(this.rows), placeholder: this.placeholder, value: this.mergedValue, disabled: this.mergedDisabled, maxlength: z ? void 0 : this.maxlength, minlength: z ? void 0 : this.minlength, readonly: this.readonly, tabindex: this.passivelyActivated && !this.activated ? -1 : void 0, style: [
                  this.textDecorationStyle[0],
                  (d = this.inputProps) === null || d === void 0 ? void 0 : d.style,
                  O
                ], onBlur: this.handleInputBlur, onFocus: (ce) => {
                  this.handleInputFocus(ce, 2);
                }, onInput: this.handleInput, onChange: this.handleChange, onScroll: this.handleTextAreaScroll })),
                this.showPlaceholder1 ? (0, r.h)("div", { class: `${a}-input__placeholder`, style: [
                  this.placeholderStyle,
                  O
                ], key: "placeholder" }, this.mergedPlaceholder[0]) : null,
                this.autosize ? (0, r.h)(b.VResizeObserver, { onResize: this.handleTextAreaMirrorResize }, {
                  default: () => (0, r.h)("div", { ref: "textareaMirrorElRef", class: `${a}-input__textarea-mirror`, key: "mirror" })
                }) : null
              );
            }
          }) : (0, r.h)(
            "div",
            { class: `${a}-input__input` },
            (0, r.h)("input", Object.assign({ type: A === "password" && this.mergedShowPasswordOn && this.passwordVisible ? "text" : A }, this.inputProps, { ref: "inputElRef", class: [
              `${a}-input__input-el`,
              (n = this.inputProps) === null || n === void 0 ? void 0 : n.class
            ], style: [
              this.textDecorationStyle[0],
              (g = this.inputProps) === null || g === void 0 ? void 0 : g.style
            ], tabindex: this.passivelyActivated && !this.activated ? -1 : void 0, placeholder: this.mergedPlaceholder[0], disabled: this.mergedDisabled, maxlength: z ? void 0 : this.maxlength, minlength: z ? void 0 : this.minlength, value: Array.isArray(this.mergedValue) ? this.mergedValue[0] : this.mergedValue, readonly: this.readonly, autofocus: this.autofocus, size: this.attrSize, onBlur: this.handleInputBlur, onFocus: (c) => {
              this.handleInputFocus(c, 0);
            }, onInput: (c) => {
              this.handleInput(c, 0);
            }, onChange: (c) => {
              this.handleChange(c, 0);
            } })),
            this.showPlaceholder1 ? (0, r.h)(
              "div",
              { class: `${a}-input__placeholder` },
              (0, r.h)("span", null, this.mergedPlaceholder[0])
            ) : null,
            this.autosize ? (0, r.h)("div", { class: `${a}-input__input-mirror`, key: "mirror", ref: "inputMirrorElRef" }, " ") : null
          ),
          !this.pair && (0, p.resolveWrappedSlot)(C.suffix, (c) => c || this.clearable || this.showCount || this.mergedShowPasswordOn || this.loading !== void 0 ? (0, r.h)("div", { class: `${a}-input__suffix` }, [
            (0, p.resolveWrappedSlot)(C["clear-icon-placeholder"], (d) => (this.clearable || d) && (0, r.h)(B.NBaseClear, { clsPrefix: a, show: this.showClearButton, onClear: this.handleClear }, {
              placeholder: () => d,
              icon: () => {
                var M, O;
                return (O = (M = this.$slots)["clear-icon"]) === null || O === void 0 ? void 0 : O.call(M);
              }
            })),
            this.internalLoadingBeforeSuffix ? null : c,
            this.loading !== void 0 ? (0, r.h)(B.NBaseSuffix, { clsPrefix: a, loading: this.loading, showArrow: !1, showClear: !1, style: this.cssVars }) : null,
            this.internalLoadingBeforeSuffix ? c : null,
            this.showCount && this.type !== "textarea" ? (0, r.h)(k.default, null, {
              default: (d) => {
                var M;
                return (M = C.count) === null || M === void 0 ? void 0 : M.call(C, d);
              }
            }) : null,
            this.mergedShowPasswordOn && this.type === "password" ? (0, r.h)("div", { class: `${a}-input__eye`, onMousedown: this.handlePasswordToggleMousedown, onClick: this.handlePasswordToggleClick }, this.passwordVisible ? (0, p.resolveSlot)(C["password-visible-icon"], () => [
              (0, r.h)(B.NBaseIcon, { clsPrefix: a }, { default: () => (0, r.h)(D.EyeIcon, null) })
            ]) : (0, p.resolveSlot)(C["password-invisible-icon"], () => [
              (0, r.h)(B.NBaseIcon, { clsPrefix: a }, { default: () => (0, r.h)(D.EyeOffIcon, null) })
            ])) : null
          ]) : null)
        ),
        this.pair ? (0, r.h)("span", { class: `${a}-input__separator` }, (0, p.resolveSlot)(C.separator, () => [this.separator])) : null,
        this.pair ? (0, r.h)(
          "div",
          { class: `${a}-input-wrapper` },
          (0, r.h)(
            "div",
            { class: `${a}-input__input` },
            (0, r.h)("input", { ref: "inputEl2Ref", type: this.type, class: `${a}-input__input-el`, tabindex: this.passivelyActivated && !this.activated ? -1 : void 0, placeholder: this.mergedPlaceholder[1], disabled: this.mergedDisabled, maxlength: z ? void 0 : this.maxlength, minlength: z ? void 0 : this.minlength, value: Array.isArray(this.mergedValue) ? this.mergedValue[1] : void 0, readonly: this.readonly, style: this.textDecorationStyle[1], onBlur: this.handleInputBlur, onFocus: (c) => {
              this.handleInputFocus(c, 1);
            }, onInput: (c) => {
              this.handleInput(c, 1);
            }, onChange: (c) => {
              this.handleChange(c, 1);
            } }),
            this.showPlaceholder2 ? (0, r.h)(
              "div",
              { class: `${a}-input__placeholder` },
              (0, r.h)("span", null, this.mergedPlaceholder[1])
            ) : null
          ),
          (0, p.resolveWrappedSlot)(C.suffix, (c) => (this.clearable || c) && (0, r.h)("div", { class: `${a}-input__suffix` }, [
            this.clearable && (0, r.h)(B.NBaseClear, { clsPrefix: a, show: this.showClearButton, onClear: this.handleClear }, {
              icon: () => {
                var d;
                return (d = C["clear-icon"]) === null || d === void 0 ? void 0 : d.call(C);
              },
              placeholder: () => {
                var d;
                return (d = C["clear-icon-placeholder"]) === null || d === void 0 ? void 0 : d.call(C);
              }
            }),
            c
          ]))
        ) : null,
        this.mergedBordered ? (0, r.h)("div", { class: `${a}-input__border` }) : null,
        this.mergedBordered ? (0, r.h)("div", { class: `${a}-input__state-border` }) : null,
        this.showCount && A === "textarea" ? (0, r.h)(k.default, null, {
          default: (c) => {
            var d;
            const { renderCount: M } = this;
            return M ? M(c) : (d = C.count) === null || d === void 0 ? void 0 : d.call(C, c);
          }
        }) : null
      );
    }
  });
})(Xe);
var Je = {}, We = {};
Object.defineProperty(We, "__esModule", {
  value: !0
});
const _ = xe;
We.default = (0, _.cB)("input-group", `
 display: inline-flex;
 width: 100%;
 flex-wrap: nowrap;
 vertical-align: bottom;
`, [(0, _.c)(">", [(0, _.cB)("input", [(0, _.c)("&:not(:last-child)", `
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `), (0, _.c)("&:not(:first-child)", `
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 margin-left: -1px!important;
 `)]), (0, _.cB)("button", [(0, _.c)("&:not(:last-child)", `
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `, [(0, _.cE)("state-border, border", `
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)]), (0, _.c)("&:not(:first-child)", `
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `, [(0, _.cE)("state-border, border", `
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])]), (0, _.c)("*", [(0, _.c)("&:not(:last-child)", `
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `, [(0, _.c)(">", [(0, _.cB)("input", `
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `), (0, _.cB)("base-selection", [(0, _.cB)("base-selection-label", `
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `), (0, _.cB)("base-selection-tags", `
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `), (0, _.cE)("box-shadow, border, state-border", `
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)])])]), (0, _.c)("&:not(:first-child)", `
 margin-left: -1px!important;
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `, [(0, _.c)(">", [(0, _.cB)("input", `
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `), (0, _.cB)("base-selection", [(0, _.cB)("base-selection-label", `
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `), (0, _.cB)("base-selection-tags", `
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `), (0, _.cE)("box-shadow, border, state-border", `
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])])])])])]);
(function(t) {
  var s = P && P.__importDefault || function(r) {
    return r && r.__esModule ? r : { default: r };
  };
  Object.defineProperty(t, "__esModule", { value: !0 }), t.inputGroupProps = void 0;
  const v = le, h = De, f = s(We);
  t.inputGroupProps = {}, t.default = (0, v.defineComponent)({
    name: "InputGroup",
    props: t.inputGroupProps,
    setup(r) {
      const { mergedClsPrefixRef: m } = (0, h.useConfig)(r);
      return (0, h.useStyle)("-input-group", f.default, m), {
        mergedClsPrefix: m
      };
    },
    render() {
      const { mergedClsPrefix: r } = this;
      return (0, v.h)("div", { class: `${r}-input-group` }, this.$slots);
    }
  });
})(Je);
var Qe = {}, Ve = {};
Object.defineProperty(Ve, "__esModule", {
  value: !0
});
const Ke = xe;
Ve.default = (0, Ke.cB)("input-group-label", `
 position: relative;
 user-select: none;
 -webkit-user-select: none;
 box-sizing: border-box;
 padding: 0 12px;
 display: inline-block;
 border-radius: var(--n-border-radius);
 background-color: var(--n-group-label-color);
 color: var(--n-group-label-text-color);
 font-size: var(--n-font-size);
 line-height: var(--n-height);
 height: var(--n-height);
 flex-shrink: 0;
 white-space: nowrap;
 transition: 
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`, [(0, Ke.cE)("border", `
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 border: var(--n-group-label-border);
 transition: border-color .3s var(--n-bezier);
 `)]);
(function(t) {
  var s = P && P.__importDefault || function(u) {
    return u && u.__esModule ? u : { default: u };
  };
  Object.defineProperty(t, "__esModule", { value: !0 }), t.inputGroupLabelProps = void 0;
  const v = le, h = De, f = _e, r = Ie, m = s(Ve);
  t.inputGroupLabelProps = Object.assign(Object.assign({}, h.useTheme.props), { size: {
    type: String,
    default: "medium"
  }, bordered: {
    type: Boolean,
    default: void 0
  } }), t.default = (0, v.defineComponent)({
    name: "InputGroupLabel",
    props: t.inputGroupLabelProps,
    setup(u) {
      const { mergedBorderedRef: b, mergedClsPrefixRef: w, inlineThemeDisabled: $ } = (0, h.useConfig)(u), D = (0, h.useTheme)("Input", "-input-group-label", m.default, r.inputLight, u, w), I = (0, v.computed)(() => {
        const { size: R } = u, { common: { cubicBezierEaseInOut: p }, self: { groupLabelColor: N, borderRadius: G, groupLabelTextColor: j, lineHeight: k, groupLabelBorder: L, [(0, f.createKey)("fontSize", R)]: n, [(0, f.createKey)("height", R)]: g } } = D.value;
        return {
          "--n-bezier": p,
          "--n-group-label-color": N,
          "--n-group-label-border": L,
          "--n-border-radius": G,
          "--n-group-label-text-color": j,
          "--n-font-size": n,
          "--n-line-height": k,
          "--n-height": g
        };
      }), B = $ ? (0, h.useThemeClass)("input-group-label", (0, v.computed)(() => u.size[0]), I, u) : void 0;
      return {
        mergedClsPrefix: w,
        mergedBordered: b,
        cssVars: $ ? void 0 : I,
        themeClass: B == null ? void 0 : B.themeClass,
        onRender: B == null ? void 0 : B.onRender
      };
    },
    render() {
      var u, b, w;
      const { mergedClsPrefix: $ } = this;
      return (u = this.onRender) === null || u === void 0 || u.call(this), (0, v.h)(
        "div",
        { class: [`${$}-input-group-label`, this.themeClass], style: this.cssVars },
        (w = (b = this.$slots).default) === null || w === void 0 ? void 0 : w.call(b),
        this.mergedBordered ? (0, v.h)("div", { class: `${$}-input-group-label__border` }) : null
      );
    }
  });
})(Qe);
(function(t) {
  var s = P && P.__importDefault || function(r) {
    return r && r.__esModule ? r : { default: r };
  };
  Object.defineProperty(t, "__esModule", { value: !0 }), t.inputGroupLabelProps = t.NInputGroupLabel = t.inputGroupProps = t.NInputGroup = t.inputProps = t.NInput = void 0;
  var v = Xe;
  Object.defineProperty(t, "NInput", { enumerable: !0, get: function() {
    return s(v).default;
  } }), Object.defineProperty(t, "inputProps", { enumerable: !0, get: function() {
    return v.inputProps;
  } });
  var h = Je;
  Object.defineProperty(t, "NInputGroup", { enumerable: !0, get: function() {
    return s(h).default;
  } }), Object.defineProperty(t, "inputGroupProps", { enumerable: !0, get: function() {
    return h.inputGroupProps;
  } });
  var f = Qe;
  Object.defineProperty(t, "NInputGroupLabel", { enumerable: !0, get: function() {
    return s(f).default;
  } }), Object.defineProperty(t, "inputGroupLabelProps", { enumerable: !0, get: function() {
    return f.inputGroupLabelProps;
  } });
})(qe);
const at = /* @__PURE__ */ Oo({
  __proto__: null
}, [qe]);
export {
  qe as a,
  Ye as b,
  at as i,
  Ce as r,
  Ie as s
};
