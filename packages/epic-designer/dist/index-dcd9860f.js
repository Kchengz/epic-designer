import { c as _ } from "./_commonjsHelpers-c5d32002.js";
import { r as F } from "./_vue_commonjs-external-eb7fec7f.js";
import { c as J, a as H, d as ie, e as L, b as Q, _ as X, p as Y, r as se } from "./index-815197f3.js";
import { _ as Z, i as ce } from "./index-cd698eea.js";
function de(e, r) {
  for (var t = 0; t < r.length; t++) {
    const n = r[t];
    if (typeof n != "string" && !Array.isArray(n)) {
      for (const o in n)
        if (o !== "default" && !(o in e)) {
          const i = Object.getOwnPropertyDescriptor(n, o);
          i && Object.defineProperty(e, o, i.get ? i : {
            enumerable: !0,
            get: () => n[o]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
var ee = {}, U = {}, te = {}, W = {}, q = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.self = void 0;
  const r = J, t = (o) => {
    const { fontWeight: i, textColor1: E, textColor2: C, textColorDisabled: v, dividerColor: a, fontSize: j } = o;
    return {
      titleFontSize: j,
      titleFontWeight: i,
      dividerColor: a,
      titleTextColor: E,
      titleTextColorDisabled: v,
      fontSize: j,
      textColor: C,
      arrowColor: C,
      arrowColorDisabled: v,
      itemMargin: "16px 0 0 0",
      titlePadding: "16px 0 0 0"
    };
  };
  e.self = t;
  const n = {
    name: "Collapse",
    common: r.commonLight,
    self: e.self
  };
  e.default = n;
})(q);
Object.defineProperty(W, "__esModule", { value: !0 });
const pe = J, ue = q, fe = {
  name: "Collapse",
  common: pe.commonDark,
  self: ue.self
};
W.default = fe;
var k = {}, K = {};
Object.defineProperty(K, "__esModule", {
  value: !0
});
const f = H;
K.default = (0, f.cB)("collapse", [(0, f.cM)("rtl", `
 direction: rtl;
 `, [(0, f.cB)("collapse-item", [(0, f.cB)("collapse-item", {
  marginRight: "32px",
  marginLeft: 0
}), (0, f.cM)("left-arrow-placement", [(0, f.cE)("header", [(0, f.cB)("collapse-item-arrow", {
  marginRight: 0,
  marginLeft: "4px"
})])]), (0, f.cM)("right-arrow-placement", [(0, f.cE)("header", [(0, f.cB)("collapse-item-arrow", {
  marginLeft: 0,
  marginRight: "4px"
})])]), (0, f.cM)("active", [(0, f.cE)("header", [(0, f.cM)("active", [(0, f.cB)("collapse-item-arrow", {
  transform: "rotate(-90deg)"
})])])])])])]);
var me = _ && _.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(k, "__esModule", { value: !0 });
k.collapseRtl = void 0;
const _e = me(K);
k.collapseRtl = {
  name: "Collapse",
  style: _e.default
};
(function(e) {
  var r = _ && _.__importDefault || function(i) {
    return i && i.__esModule ? i : { default: i };
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.collapseRtl = e.collapseLight = e.collapseDark = void 0;
  var t = W;
  Object.defineProperty(e, "collapseDark", { enumerable: !0, get: function() {
    return r(t).default;
  } });
  var n = q;
  Object.defineProperty(e, "collapseLight", { enumerable: !0, get: function() {
    return r(n).default;
  } });
  var o = k;
  Object.defineProperty(e, "collapseRtl", { enumerable: !0, get: function() {
    return o.collapseRtl;
  } });
})(te);
var V = {}, T = {}, he = _ && _.__importDefault || function(e) {
  return e && e.__esModule ? e : {
    default: e
  };
};
Object.defineProperty(T, "__esModule", {
  value: !0
});
T.fadeInHeightExpandTransition = void 0;
const B = H, ve = he(ie), {
  cubicBezierEaseInOut: x,
  cubicBezierEaseOut: ge,
  cubicBezierEaseIn: be
} = ve.default;
function xe({
  overflow: e = "hidden",
  duration: r = ".3s",
  originalTransition: t = "",
  leavingDelay: n = "0s",
  foldPadding: o = !1,
  enterToProps: i = void 0,
  leaveToProps: E = void 0,
  reverse: C = !1
} = {}) {
  const v = C ? "leave" : "enter", a = C ? "enter" : "leave";
  return [(0, B.c)(`&.fade-in-height-expand-transition-${a}-from,
 &.fade-in-height-expand-transition-${v}-to`, Object.assign(Object.assign({}, i), {
    opacity: 1
  })), (0, B.c)(`&.fade-in-height-expand-transition-${a}-to,
 &.fade-in-height-expand-transition-${v}-from`, Object.assign(Object.assign({}, E), {
    opacity: 0,
    marginTop: "0 !important",
    marginBottom: "0 !important",
    paddingTop: o ? "0 !important" : void 0,
    paddingBottom: o ? "0 !important" : void 0
  })), (0, B.c)(`&.fade-in-height-expand-transition-${a}-active`, `
 overflow: ${e};
 transition:
 max-height ${r} ${x} ${n},
 opacity ${r} ${ge} ${n},
 margin-top ${r} ${x} ${n},
 margin-bottom ${r} ${x} ${n},
 padding-top ${r} ${x} ${n},
 padding-bottom ${r} ${x} ${n}
 ${t ? "," + t : ""}
 `), (0, B.c)(`&.fade-in-height-expand-transition-${v}-active`, `
 overflow: ${e};
 transition:
 max-height ${r} ${x},
 opacity ${r} ${be},
 margin-top ${r} ${x},
 margin-bottom ${r} ${x},
 padding-top ${r} ${x},
 padding-bottom ${r} ${x}
 ${t ? "," + t : ""}
 `)];
}
T.fadeInHeightExpandTransition = xe;
Object.defineProperty(V, "__esModule", {
  value: !0
});
const l = H, Ce = T;
V.default = (0, l.cB)("collapse", "width: 100%;", [(0, l.cB)("collapse-item", `
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 margin: var(--n-item-margin);
 `, [(0, l.cM)("disabled", [(0, l.cE)("header", "cursor: not-allowed;", [(0, l.cE)("header-main", `
 color: var(--n-title-text-color-disabled);
 `), (0, l.cB)("collapse-item-arrow", `
 color: var(--n-arrow-color-disabled);
 `)])]), (0, l.cB)("collapse-item", "margin-left: 32px;"), (0, l.c)("&:first-child", "margin-top: 0;"), (0, l.c)("&:first-child >", [(0, l.cE)("header", "padding-top: 0;")]), (0, l.cM)("left-arrow-placement", [(0, l.cE)("header", [(0, l.cB)("collapse-item-arrow", "margin-right: 4px;")])]), (0, l.cM)("right-arrow-placement", [(0, l.cE)("header", [(0, l.cB)("collapse-item-arrow", "margin-left: 4px;")])]), (0, l.cE)("content-wrapper", [(0, l.cE)("content-inner", "padding-top: 16px;"), (0, Ce.fadeInHeightExpandTransition)({
  duration: "0.15s"
})]), (0, l.cM)("active", [(0, l.cE)("header", [(0, l.cM)("active", [(0, l.cB)("collapse-item-arrow", "transform: rotate(90deg);")])])]), (0, l.c)("&:not(:first-child)", "border-top: 1px solid var(--n-divider-color);"), (0, l.cE)("header", `
 font-size: var(--n-title-font-size);
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 transition: color .3s var(--n-bezier);
 position: relative;
 padding: var(--n-title-padding);
 color: var(--n-title-text-color);
 cursor: pointer;
 `, [(0, l.cE)("header-main", `
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 flex: 1;
 color: var(--n-title-text-color);
 `), (0, l.cE)("header-extra", `
 display: flex;
 align-items: center;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `), (0, l.cB)("collapse-item-arrow", `
 display: flex;
 transition:
 transform .15s var(--n-bezier),
 color .3s var(--n-bezier);
 font-size: 18px;
 color: var(--n-arrow-color);
 `)])])]);
(function(e) {
  var r = _ && _.__importDefault || function(a) {
    return a && a.__esModule ? a : { default: a };
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.collapseInjectionKey = e.collapseProps = void 0;
  const t = F, n = L, o = Q, i = X, E = te, C = r(V), v = Y;
  e.collapseProps = Object.assign(Object.assign({}, o.useTheme.props), {
    defaultExpandedNames: {
      type: [Array, String],
      default: null
    },
    expandedNames: [Array, String],
    arrowPlacement: {
      type: String,
      default: "left"
    },
    accordion: {
      type: Boolean,
      default: !1
    },
    displayDirective: {
      type: String,
      default: "if"
    },
    onItemHeaderClick: [Function, Array],
    "onUpdate:expandedNames": [Function, Array],
    onUpdateExpandedNames: [Function, Array],
    // deprecated
    onExpandedNamesChange: {
      type: [Function, Array],
      validator: () => (process.env.NODE_ENV !== "production" && (0, i.warn)("collapse", "`on-expanded-names-change` is deprecated, please use `on-update:expanded-names` instead."), !0),
      default: void 0
    }
  }), e.collapseInjectionKey = (0, i.createInjectionKey)("n-collapse"), e.default = (0, t.defineComponent)({
    name: "Collapse",
    props: e.collapseProps,
    setup(a, { slots: j }) {
      const { mergedClsPrefixRef: N, inlineThemeDisabled: d, mergedRtlRef: w } = (0, o.useConfig)(a), y = (0, t.ref)(a.defaultExpandedNames), m = (0, t.computed)(() => a.expandedNames), $ = (0, n.useMergedState)(m, y), p = (0, o.useTheme)("Collapse", "-collapse", C.default, E.collapseLight, a, N);
      function g(u) {
        const { "onUpdate:expandedNames": c, onUpdateExpandedNames: b, onExpandedNamesChange: M } = a;
        b && (0, i.call)(b, u), c && (0, i.call)(c, u), M && (0, i.call)(M, u), y.value = u;
      }
      function h(u) {
        const { onItemHeaderClick: c } = a;
        c && (0, i.call)(c, u);
      }
      function D(u, c, b) {
        const { accordion: M } = a, { value: S } = $;
        if (M)
          u ? (g([c]), h({ name: c, expanded: !0, event: b })) : (g([]), h({ name: c, expanded: !1, event: b }));
        else if (!Array.isArray(S))
          g([c]), h({ name: c, expanded: !0, event: b });
        else {
          const I = S.slice(), z = I.findIndex((A) => c === A);
          ~z ? (I.splice(z, 1), g(I), h({ name: c, expanded: !1, event: b })) : (I.push(c), g(I), h({ name: c, expanded: !0, event: b }));
        }
      }
      (0, t.provide)(e.collapseInjectionKey, {
        props: a,
        mergedClsPrefixRef: N,
        expandedNamesRef: $,
        slots: j,
        toggleItem: D
      });
      const O = (0, v.useRtl)("Collapse", w, N), P = (0, t.computed)(() => {
        const { common: { cubicBezierEaseInOut: u }, self: { titleFontWeight: c, dividerColor: b, titlePadding: M, titleTextColor: S, titleTextColorDisabled: I, textColor: z, arrowColor: A, fontSize: ae, titleFontSize: le, arrowColorDisabled: ne, itemMargin: oe } } = p.value;
        return {
          "--n-font-size": ae,
          "--n-bezier": u,
          "--n-text-color": z,
          "--n-divider-color": b,
          "--n-title-padding": M,
          "--n-title-font-size": le,
          "--n-title-text-color": S,
          "--n-title-text-color-disabled": I,
          "--n-title-font-weight": c,
          "--n-arrow-color": A,
          "--n-arrow-color-disabled": ne,
          "--n-item-margin": oe
        };
      }), s = d ? (0, o.useThemeClass)("collapse", void 0, P, a) : void 0;
      return {
        rtlEnabled: O,
        mergedTheme: p,
        mergedClsPrefix: N,
        cssVars: d ? void 0 : P,
        themeClass: s == null ? void 0 : s.themeClass,
        onRender: s == null ? void 0 : s.onRender
      };
    },
    render() {
      var a;
      return (a = this.onRender) === null || a === void 0 || a.call(this), (0, t.h)("div", { class: [
        `${this.mergedClsPrefix}-collapse`,
        this.rtlEnabled && `${this.mergedClsPrefix}-collapse--rtl`,
        this.themeClass
      ], style: this.cssVars }, this.$slots);
    }
  });
})(U);
var re = {}, G = {};
Object.defineProperty(G, "__esModule", { value: !0 });
const R = F, ye = L, $e = Z;
G.default = (0, R.defineComponent)({
  name: "CollapseItemContent",
  props: {
    displayDirective: {
      type: String,
      required: !0
    },
    show: Boolean,
    clsPrefix: {
      type: String,
      required: !0
    }
  },
  setup(e) {
    return {
      onceTrue: (0, ye.useFalseUntilTruthy)((0, R.toRef)(e, "show"))
    };
  },
  render() {
    return (0, R.h)($e.NFadeInExpandTransition, null, {
      default: () => {
        const { show: e, displayDirective: r, onceTrue: t, clsPrefix: n } = this, o = r === "show" && t, i = (0, R.h)(
          "div",
          { class: `${n}-collapse-item__content-wrapper` },
          (0, R.h)("div", { class: `${n}-collapse-item__content-inner` }, this.$slots)
        );
        return o ? (0, R.withDirectives)(i, [[R.vShow, e]]) : e ? i : null;
      }
    });
  }
});
(function(e) {
  var r = _ && _.__importDefault || function(d) {
    return d && d.__esModule ? d : { default: d };
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.collapseItemProps = void 0;
  const t = F, n = se, o = L, i = ce, E = Y, C = Q, v = Z, a = X, j = U, N = r(G);
  e.collapseItemProps = {
    title: String,
    name: [String, Number],
    disabled: Boolean,
    displayDirective: String
  }, e.default = (0, t.defineComponent)({
    name: "CollapseItem",
    props: e.collapseItemProps,
    setup(d) {
      const { mergedRtlRef: w } = (0, C.useConfig)(d), y = (0, n.createId)(), m = (0, o.useMemo)(() => {
        var s;
        return (s = d.name) !== null && s !== void 0 ? s : y;
      }), $ = (0, t.inject)(j.collapseInjectionKey);
      $ || (0, a.throwError)("collapse-item", "`n-collapse-item` must be placed inside `n-collapse`.");
      const { expandedNamesRef: p, props: g, mergedClsPrefixRef: h, slots: D } = $, O = (0, t.computed)(() => {
        const { value: s } = p;
        if (Array.isArray(s)) {
          const { value: u } = m;
          return !~s.findIndex((c) => c === u);
        } else if (s) {
          const { value: u } = m;
          return u !== s;
        }
        return !0;
      });
      return {
        rtlEnabled: (0, E.useRtl)("Collapse", w, h),
        collapseSlots: D,
        randomName: y,
        mergedClsPrefix: h,
        collapsed: O,
        mergedDisplayDirective: (0, t.computed)(() => {
          const { displayDirective: s } = d;
          return s || g.displayDirective;
        }),
        arrowPlacement: (0, t.computed)(() => g.arrowPlacement),
        handleClick(s) {
          $ && !d.disabled && $.toggleItem(O.value, m.value, s);
        }
      };
    },
    render() {
      const { collapseSlots: d, $slots: w, arrowPlacement: y, collapsed: m, mergedDisplayDirective: $, mergedClsPrefix: p, disabled: g } = this, h = (0, a.resolveSlotWithProps)(w.header, { collapsed: m }, () => [this.title]), D = w["header-extra"] || d["header-extra"], O = w.arrow || d.arrow;
      return (0, t.h)(
        "div",
        { class: [
          `${p}-collapse-item`,
          `${p}-collapse-item--${y}-arrow-placement`,
          g && `${p}-collapse-item--disabled`,
          !m && `${p}-collapse-item--active`
        ] },
        (0, t.h)(
          "div",
          { class: [
            `${p}-collapse-item__header`,
            !m && `${p}-collapse-item__header--active`
          ] },
          (0, t.h)(
            "div",
            { class: `${p}-collapse-item__header-main`, onClick: this.handleClick },
            y === "right" && h,
            (0, t.h)("div", { class: `${p}-collapse-item-arrow`, key: this.rtlEnabled ? 0 : 1 }, (0, a.resolveSlotWithProps)(O, { collapsed: m }, () => {
              var P;
              return [
                (0, t.h)(v.NBaseIcon, { clsPrefix: p }, {
                  default: (P = d.expandIcon) !== null && P !== void 0 ? P : () => this.rtlEnabled ? (0, t.h)(i.ChevronLeftIcon, null) : (0, t.h)(i.ChevronRightIcon, null)
                })
              ];
            })),
            y === "left" && h
          ),
          (0, a.resolveWrappedSlotWithProps)(D, { collapsed: m }, (P) => (0, t.h)("div", { class: `${p}-collapse-item__header-extra`, onClick: this.handleClick }, P))
        ),
        (0, t.h)(N.default, { clsPrefix: p, displayDirective: $, show: !m }, w)
      );
    }
  });
})(re);
(function(e) {
  var r = _ && _.__importDefault || function(o) {
    return o && o.__esModule ? o : { default: o };
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.collapseItemProps = e.NCollapseItem = e.collapseProps = e.NCollapse = void 0;
  var t = U;
  Object.defineProperty(e, "NCollapse", { enumerable: !0, get: function() {
    return r(t).default;
  } }), Object.defineProperty(e, "collapseProps", { enumerable: !0, get: function() {
    return t.collapseProps;
  } });
  var n = re;
  Object.defineProperty(e, "NCollapseItem", { enumerable: !0, get: function() {
    return r(n).default;
  } }), Object.defineProperty(e, "collapseItemProps", { enumerable: !0, get: function() {
    return n.collapseItemProps;
  } });
})(ee);
const Re = /* @__PURE__ */ de({
  __proto__: null
}, [ee]);
export {
  Re as i
};
