import { c as K } from "./_commonjsHelpers-c5d32002.js";
import { r as le } from "./_vue_commonjs-external-eb7fec7f.js";
import { c as _e, _ as ne, a as dt, f as ct, l as bt, e as ft, b as pt, r as ut } from "./index-815197f3.js";
import { i as vt, _ as gt } from "./index-cd698eea.js";
function ht(o, s) {
  for (var r = 0; r < s.length; r++) {
    const g = s[r];
    if (typeof g != "string" && !Array.isArray(g)) {
      for (const b in g)
        if (b !== "default" && !(b in o)) {
          const v = Object.getOwnPropertyDescriptor(g, b);
          v && Object.defineProperty(o, b, v.get ? v : {
            enumerable: !0,
            get: () => g[b]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(o, Symbol.toStringTag, { value: "Module" }));
}
var Ce = {}, Se = {}, Be = {}, se = {}, de = {}, ce = {};
Object.defineProperty(ce, "__esModule", { value: !0 });
ce.default = {
  tabFontSizeSmall: "14px",
  tabFontSizeMedium: "14px",
  tabFontSizeLarge: "16px",
  tabGapSmallLine: "36px",
  tabGapMediumLine: "36px",
  tabGapLargeLine: "36px",
  tabGapSmallLineVertical: "8px",
  tabGapMediumLineVertical: "8px",
  tabGapLargeLineVertical: "8px",
  tabPaddingSmallLine: "6px 0",
  tabPaddingMediumLine: "10px 0",
  tabPaddingLargeLine: "14px 0",
  tabPaddingVerticalSmallLine: "6px 12px",
  tabPaddingVerticalMediumLine: "8px 16px",
  tabPaddingVerticalLargeLine: "10px 20px",
  tabGapSmallBar: "36px",
  tabGapMediumBar: "36px",
  tabGapLargeBar: "36px",
  tabGapSmallBarVertical: "8px",
  tabGapMediumBarVertical: "8px",
  tabGapLargeBarVertical: "8px",
  tabPaddingSmallBar: "4px 0",
  tabPaddingMediumBar: "6px 0",
  tabPaddingLargeBar: "10px 0",
  tabPaddingVerticalSmallBar: "6px 12px",
  tabPaddingVerticalMediumBar: "8px 16px",
  tabPaddingVerticalLargeBar: "10px 20px",
  tabGapSmallCard: "4px",
  tabGapMediumCard: "4px",
  tabGapLargeCard: "4px",
  tabGapSmallCardVertical: "4px",
  tabGapMediumCardVertical: "4px",
  tabGapLargeCardVertical: "4px",
  tabPaddingSmallCard: "8px 16px",
  tabPaddingMediumCard: "10px 20px",
  tabPaddingLargeCard: "12px 24px",
  tabPaddingSmallSegment: "4px 0",
  tabPaddingMediumSegment: "6px 0",
  tabPaddingLargeSegment: "8px 0",
  tabPaddingVerticalLargeSegment: "0 8px",
  tabPaddingVerticalSmallCard: "8px 12px",
  tabPaddingVerticalMediumCard: "10px 16px",
  tabPaddingVerticalLargeCard: "12px 20px",
  tabPaddingVerticalSmallSegment: "0 4px",
  tabPaddingVerticalMediumSegment: "0 6px",
  tabGapSmallSegment: "0",
  tabGapMediumSegment: "0",
  tabGapLargeSegment: "0",
  tabGapSmallSegmentVertical: "0",
  tabGapMediumSegmentVertical: "0",
  tabGapLargeSegmentVertical: "0",
  panePaddingSmall: "8px 0 0 0",
  panePaddingMedium: "12px 0 0 0",
  panePaddingLarge: "16px 0 0 0",
  closeSize: "18px",
  closeIconSize: "14px"
};
(function(o) {
  var s = K && K.__importDefault || function(_) {
    return _ && _.__esModule ? _ : { default: _ };
  };
  Object.defineProperty(o, "__esModule", { value: !0 }), o.self = void 0;
  const r = s(ce), g = _e, b = (_) => {
    const { textColor2: l, primaryColor: p, textColorDisabled: x, closeIconColor: w, closeIconColorHover: A, closeIconColorPressed: L, closeColorHover: W, closeColorPressed: k, tabColor: V, baseColor: $, dividerColor: t, fontWeight: c, textColor1: f, borderRadius: C, fontSize: h, fontWeightStrong: T } = _;
    return Object.assign(Object.assign({}, r.default), {
      colorSegment: V,
      tabFontSizeCard: h,
      tabTextColorLine: f,
      tabTextColorActiveLine: p,
      tabTextColorHoverLine: p,
      tabTextColorDisabledLine: x,
      tabTextColorSegment: f,
      tabTextColorActiveSegment: l,
      tabTextColorHoverSegment: l,
      tabTextColorDisabledSegment: x,
      tabTextColorBar: f,
      tabTextColorActiveBar: p,
      tabTextColorHoverBar: p,
      tabTextColorDisabledBar: x,
      tabTextColorCard: f,
      tabTextColorHoverCard: f,
      tabTextColorActiveCard: p,
      tabTextColorDisabledCard: x,
      barColor: p,
      closeIconColor: w,
      closeIconColorHover: A,
      closeIconColorPressed: L,
      closeColorHover: W,
      closeColorPressed: k,
      closeBorderRadius: C,
      tabColor: V,
      tabColorSegment: $,
      tabBorderColor: t,
      tabFontWeightActive: c,
      tabFontWeight: c,
      tabBorderRadius: C,
      paneTextColor: l,
      fontWeightStrong: T
    });
  };
  o.self = b;
  const v = {
    name: "Tabs",
    common: g.commonLight,
    self: o.self
  };
  o.default = v;
})(de);
Object.defineProperty(se, "__esModule", { value: !0 });
const mt = _e, xt = de, yt = {
  name: "Tabs",
  common: mt.commonDark,
  self(o) {
    const s = (0, xt.self)(o), { inputColor: r } = o;
    return s.colorSegment = r, s.tabColorSegment = r, s;
  }
};
se.default = yt;
(function(o) {
  var s = K && K.__importDefault || function(b) {
    return b && b.__esModule ? b : { default: b };
  };
  Object.defineProperty(o, "__esModule", { value: !0 }), o.tabsLight = o.tabsDark = void 0;
  var r = se;
  Object.defineProperty(o, "tabsDark", { enumerable: !0, get: function() {
    return s(r).default;
  } });
  var g = de;
  Object.defineProperty(o, "tabsLight", { enumerable: !0, get: function() {
    return s(g).default;
  } });
})(Be);
var Q = {};
Object.defineProperty(Q, "__esModule", { value: !0 });
Q.tabsInjectionKey = void 0;
const Pt = ne;
Q.tabsInjectionKey = (0, Pt.createInjectionKey)("n-tabs");
var be = {}, fe = {};
(function(o) {
  Object.defineProperty(o, "__esModule", { value: !0 }), o.tabPaneProps = void 0;
  const s = le, r = ne, g = Q;
  o.tabPaneProps = {
    tab: [String, Number, Object, Function],
    name: {
      type: [String, Number],
      required: !0
    },
    disabled: Boolean,
    displayDirective: {
      type: String,
      default: "if"
    },
    closable: {
      type: Boolean,
      default: void 0
    },
    tabProps: Object,
    /** @deprecated */
    label: [String, Number, Object, Function]
  }, o.default = (0, s.defineComponent)({
    __TAB_PANE__: !0,
    name: "TabPane",
    alias: ["TabPanel"],
    props: o.tabPaneProps,
    setup(b) {
      process.env.NODE_ENV !== "production" && (0, s.watchEffect)(() => {
        b.label !== void 0 && (0, r.warnOnce)("tab-pane", "`label` is deprecated, please use `tab` instead.");
      });
      const v = (0, s.inject)(g.tabsInjectionKey, null);
      return v || (0, r.throwError)("tab-pane", "`n-tab-pane` must be placed inside `n-tabs`."), {
        style: v.paneStyleRef,
        class: v.paneClassRef,
        mergedClsPrefix: v.mergedClsPrefixRef
      };
    },
    render() {
      return (0, s.h)("div", { class: [`${this.mergedClsPrefix}-tab-pane`, this.class], style: this.style }, this.$slots);
    }
  });
})(fe);
(function(o) {
  Object.defineProperty(o, "__esModule", { value: !0 }), o.tabProps = void 0;
  const s = le, r = vt, g = gt, b = ne, v = Q, _ = fe;
  o.tabProps = Object.assign({ internalLeftPadded: Boolean, internalAddable: Boolean, internalCreatedByPane: Boolean }, (0, b.omit)(_.tabPaneProps, ["displayDirective"])), o.default = (0, s.defineComponent)({
    __TAB__: !0,
    inheritAttrs: !1,
    name: "Tab",
    props: o.tabProps,
    setup(l) {
      const {
        mergedClsPrefixRef: p,
        valueRef: x,
        typeRef: w,
        closableRef: A,
        tabStyleRef: L,
        tabChangeIdRef: W,
        onBeforeLeaveRef: k,
        triggerRef: V,
        handleAdd: $,
        activateTab: t,
        handleClose: c
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      } = (0, s.inject)(v.tabsInjectionKey);
      return {
        trigger: V,
        mergedClosable: (0, s.computed)(() => {
          if (l.internalAddable)
            return !1;
          const { closable: f } = l;
          return f === void 0 ? A.value : f;
        }),
        style: L,
        clsPrefix: p,
        value: x,
        type: w,
        handleClose(f) {
          f.stopPropagation(), !l.disabled && c(l.name);
        },
        activateTab() {
          if (l.disabled)
            return;
          if (l.internalAddable) {
            $();
            return;
          }
          const { name: f } = l, C = ++W.id;
          if (f !== x.value) {
            const { value: h } = k;
            h ? Promise.resolve(h(l.name, x.value)).then((T) => {
              T && W.id === C && t(f);
            }) : t(f);
          }
        }
      };
    },
    render() {
      const { internalAddable: l, clsPrefix: p, name: x, disabled: w, label: A, tab: L, value: W, mergedClosable: k, style: V, trigger: $, $slots: { default: t } } = this, c = A ?? L;
      return (0, s.h)(
        "div",
        { class: `${p}-tabs-tab-wrapper` },
        this.internalLeftPadded ? (0, s.h)("div", { class: `${p}-tabs-tab-pad` }) : null,
        (0, s.h)(
          "div",
          Object.assign({ key: x, "data-name": x, "data-disabled": w ? !0 : void 0 }, (0, s.mergeProps)({
            class: [
              `${p}-tabs-tab`,
              W === x && `${p}-tabs-tab--active`,
              w && `${p}-tabs-tab--disabled`,
              k && `${p}-tabs-tab--closable`,
              l && `${p}-tabs-tab--addable`
            ],
            onClick: $ === "click" ? this.activateTab : void 0,
            onMouseenter: $ === "hover" ? this.activateTab : void 0,
            style: l ? void 0 : V
          }, this.internalCreatedByPane ? this.tabProps || {} : this.$attrs)),
          (0, s.h)("span", { class: `${p}-tabs-tab__label` }, l ? (0, s.h)(
            s.Fragment,
            null,
            (0, s.h)("div", { class: `${p}-tabs-tab__height-placeholder` }, " "),
            (0, s.h)(g.NBaseIcon, { clsPrefix: p }, {
              default: () => (0, s.h)(r.AddIcon, null)
            })
          ) : t ? t() : typeof c == "object" ? c : (0, b.render)(c ?? x)),
          k && this.type === "card" ? (0, s.h)(g.NBaseClose, { clsPrefix: p, class: `${p}-tabs-tab__close`, onClick: this.handleClose, disabled: w }) : null
        )
      );
    }
  });
})(be);
var pe = {};
Object.defineProperty(pe, "__esModule", {
  value: !0
});
const e = dt;
pe.default = (0, e.cB)("tabs", `
 box-sizing: border-box;
 width: 100%;
 display: flex;
 flex-direction: column;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
`, [(0, e.cM)("segment-type", [(0, e.cB)("tabs-rail", [(0, e.c)("&.transition-disabled", "color: red;", [(0, e.cB)("tabs-tab", `
 transition: none;
 `)])])]), (0, e.cM)("top", [(0, e.cB)("tab-pane", `
 padding: var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left);
 `)]), (0, e.cM)("left", [(0, e.cB)("tab-pane", `
 padding: var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left) var(--n-pane-padding-top);
 `)]), (0, e.cM)("left, right", `
 flex-direction: row;
 `, [(0, e.cB)("tabs-bar", `
 width: 2px;
 right: 0;
 transition:
 top .2s var(--n-bezier),
 max-height .2s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `), (0, e.cB)("tabs-tab", `
 padding: var(--n-tab-padding-vertical); 
 `)]), (0, e.cM)("right", `
 flex-direction: row-reverse;
 `, [(0, e.cB)("tab-pane", `
 padding: var(--n-pane-padding-left) var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom);
 `), (0, e.cB)("tabs-bar", `
 left: 0;
 `)]), (0, e.cM)("bottom", `
 flex-direction: column-reverse;
 justify-content: flex-end;
 `, [(0, e.cB)("tab-pane", `
 padding: var(--n-pane-padding-bottom) var(--n-pane-padding-right) var(--n-pane-padding-top) var(--n-pane-padding-left);
 `), (0, e.cB)("tabs-bar", `
 top: 0;
 `)]), (0, e.cB)("tabs-rail", `
 padding: 3px;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 background-color: var(--n-color-segment);
 transition: background-color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 `, [(0, e.cB)("tabs-tab-wrapper", `
 flex-basis: 0;
 flex-grow: 1;
 display: flex;
 align-items: center;
 justify-content: center;
 `, [(0, e.cB)("tabs-tab", `
 overflow: hidden;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 `, [(0, e.cM)("active", `
 font-weight: var(--n-font-weight-strong);
 color: var(--n-tab-text-color-active);
 background-color: var(--n-tab-color-segment);
 box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .08);
 `), (0, e.c)("&:hover", `
 color: var(--n-tab-text-color-hover);
 `)])])]), (0, e.cM)("flex", [(0, e.cB)("tabs-nav", {
  width: "100%"
}, [(0, e.cB)("tabs-wrapper", {
  width: "100%"
}, [(0, e.cB)("tabs-tab", {
  marginRight: 0
})])])]), (0, e.cB)("tabs-nav", `
 box-sizing: border-box;
 line-height: 1.5;
 display: flex;
 transition: border-color .3s var(--n-bezier);
 `, [(0, e.cE)("prefix, suffix", `
 display: flex;
 align-items: center;
 `), (0, e.cE)("prefix", "padding-right: 16px;"), (0, e.cE)("suffix", "padding-left: 16px;")]), (0, e.cM)("top, bottom", [(0, e.cB)("tabs-nav-scroll-wrapper", [(0, e.c)("&::before", `
 top: 0;
 bottom: 0;
 left: 0;
 width: 20px;
 `), (0, e.c)("&::after", `
 top: 0;
 bottom: 0;
 right: 0;
 width: 20px;
 `), (0, e.cM)("shadow-start", [(0, e.c)("&::before", `
 box-shadow: inset 10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]), (0, e.cM)("shadow-end", [(0, e.c)("&::after", `
 box-shadow: inset -10px 0 8px -8px rgba(0, 0, 0, .12);
 `)])])]), (0, e.cM)("left, right", [(0, e.cB)("tabs-nav-scroll-wrapper", [(0, e.c)("&::before", `
 top: 0;
 left: 0;
 right: 0;
 height: 20px;
 `), (0, e.c)("&::after", `
 bottom: 0;
 left: 0;
 right: 0;
 height: 20px;
 `), (0, e.cM)("shadow-start", [(0, e.c)("&::before", `
 box-shadow: inset 0 10px 8px -8px rgba(0, 0, 0, .12);
 `)]), (0, e.cM)("shadow-end", [(0, e.c)("&::after", `
 box-shadow: inset 0 -10px 8px -8px rgba(0, 0, 0, .12);
 `)])])]), (0, e.cB)("tabs-nav-scroll-wrapper", `
 flex: 1;
 position: relative;
 overflow: hidden;
 `, [(0, e.cB)("tabs-nav-y-scroll", `
 height: 100%;
 width: 100%;
 overflow-y: auto; 
 scrollbar-width: none;
 `, [(0, e.c)("&::-webkit-scrollbar", `
 width: 0;
 height: 0;
 `)]), (0, e.c)("&::before, &::after", `
 transition: box-shadow .3s var(--n-bezier);
 pointer-events: none;
 content: "";
 position: absolute;
 z-index: 1;
 `)]), (0, e.cB)("tabs-nav-scroll-content", `
 display: flex;
 position: relative;
 min-width: 100%;
 width: fit-content;
 box-sizing: border-box;
 `), (0, e.cB)("tabs-wrapper", `
 display: inline-flex;
 flex-wrap: nowrap;
 position: relative;
 `), (0, e.cB)("tabs-tab-wrapper", `
 display: flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 flex-grow: 0;
 `), (0, e.cB)("tabs-tab", `
 cursor: pointer;
 white-space: nowrap;
 flex-wrap: nowrap;
 display: inline-flex;
 align-items: center;
 color: var(--n-tab-text-color);
 font-size: var(--n-tab-font-size);
 background-clip: padding-box;
 padding: var(--n-tab-padding);
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `, [(0, e.cM)("disabled", {
  cursor: "not-allowed"
}), (0, e.cE)("close", `
 margin-left: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `), (0, e.cE)("label", `
 display: flex;
 align-items: center;
 `)]), (0, e.cB)("tabs-bar", `
 position: absolute;
 bottom: 0;
 height: 2px;
 border-radius: 1px;
 background-color: var(--n-bar-color);
 transition:
 left .2s var(--n-bezier),
 max-width .2s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `, [(0, e.c)("&.transition-disabled", `
 transition: none;
 `), (0, e.cM)("disabled", `
 background-color: var(--n-tab-text-color-disabled)
 `)]), (0, e.cB)("tabs-pane-wrapper", `
 position: relative;
 overflow: hidden;
 transition: max-height .2s var(--n-bezier);
 `), (0, e.cB)("tab-pane", `
 color: var(--n-pane-text-color);
 width: 100%;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .2s var(--n-bezier);
 left: 0;
 right: 0;
 top: 0;
 `, [(0, e.c)("&.next-transition-leave-active, &.prev-transition-leave-active, &.next-transition-enter-active, &.prev-transition-enter-active", `
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 transform .2s var(--n-bezier),
 opacity .2s var(--n-bezier);
 `), (0, e.c)("&.next-transition-leave-active, &.prev-transition-leave-active", `
 position: absolute;
 `), (0, e.c)("&.next-transition-enter-from, &.prev-transition-leave-to", `
 transform: translateX(32px);
 opacity: 0;
 `), (0, e.c)("&.next-transition-leave-to, &.prev-transition-enter-from", `
 transform: translateX(-32px);
 opacity: 0;
 `), (0, e.c)("&.next-transition-leave-from, &.next-transition-enter-to, &.prev-transition-leave-from, &.prev-transition-enter-to", `
 transform: translateX(0);
 opacity: 1;
 `)]), (0, e.cB)("tabs-tab-pad", `
 box-sizing: border-box;
 width: var(--n-tab-gap);
 flex-grow: 0;
 flex-shrink: 0;
 `), (0, e.cM)("line-type, bar-type", [(0, e.cB)("tabs-tab", `
 font-weight: var(--n-tab-font-weight);
 box-sizing: border-box;
 vertical-align: bottom;
 `, [(0, e.c)("&:hover", {
  color: "var(--n-tab-text-color-hover)"
}), (0, e.cM)("active", `
 color: var(--n-tab-text-color-active);
 font-weight: var(--n-tab-font-weight-active);
 `), (0, e.cM)("disabled", {
  color: "var(--n-tab-text-color-disabled)"
})])]), (0, e.cB)("tabs-nav", [(0, e.cM)("line-type", [(0, e.cM)("top", [(0, e.cE)("prefix, suffix", `
 border-bottom: 1px solid var(--n-tab-border-color);
 `), (0, e.cB)("tabs-nav-scroll-content", `
 border-bottom: 1px solid var(--n-tab-border-color);
 `), (0, e.cB)("tabs-bar", `
 bottom: -1px;
 `)]), (0, e.cM)("left", [(0, e.cE)("prefix, suffix", `
 border-right: 1px solid var(--n-tab-border-color);
 `), (0, e.cB)("tabs-nav-scroll-content", `
 border-right: 1px solid var(--n-tab-border-color);
 `), (0, e.cB)("tabs-bar", `
 right: -1px;
 `)]), (0, e.cM)("right", [(0, e.cE)("prefix, suffix", `
 border-left: 1px solid var(--n-tab-border-color);
 `), (0, e.cB)("tabs-nav-scroll-content", `
 border-left: 1px solid var(--n-tab-border-color);
 `), (0, e.cB)("tabs-bar", `
 left: -1px;
 `)]), (0, e.cM)("bottom", [(0, e.cE)("prefix, suffix", `
 border-top: 1px solid var(--n-tab-border-color);
 `), (0, e.cB)("tabs-nav-scroll-content", `
 border-top: 1px solid var(--n-tab-border-color);
 `), (0, e.cB)("tabs-bar", `
 top: -1px;
 `)]), (0, e.cE)("prefix, suffix", `
 transition: border-color .3s var(--n-bezier);
 `), (0, e.cB)("tabs-nav-scroll-content", `
 transition: border-color .3s var(--n-bezier);
 `), (0, e.cB)("tabs-bar", `
 border-radius: 0;
 `)]), (0, e.cM)("card-type", [(0, e.cE)("prefix, suffix", `
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `), (0, e.cB)("tabs-pad", `
 flex-grow: 1;
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `), (0, e.cB)("tabs-tab-pad", `
 transition: border-color .3s var(--n-bezier);
 `), (0, e.cB)("tabs-tab", `
 font-weight: var(--n-tab-font-weight);
 border: 1px solid var(--n-tab-border-color);
 background-color: var(--n-tab-color);
 box-sizing: border-box;
 position: relative;
 vertical-align: bottom;
 display: flex;
 justify-content: space-between;
 font-size: var(--n-tab-font-size);
 color: var(--n-tab-text-color);
 `, [(0, e.cM)("addable", `
 padding-left: 8px;
 padding-right: 8px;
 font-size: 16px;
 `, [(0, e.cE)("height-placeholder", `
 width: 0;
 font-size: var(--n-tab-font-size);
 `), (0, e.cNotM)("disabled", [(0, e.c)("&:hover", `
 color: var(--n-tab-text-color-hover);
 `)])]), (0, e.cM)("closable", "padding-right: 8px;"), (0, e.cM)("active", `
 background-color: #0000;
 font-weight: var(--n-tab-font-weight-active);
 color: var(--n-tab-text-color-active);
 `), (0, e.cM)("disabled", "color: var(--n-tab-text-color-disabled);")]), (0, e.cB)("tabs-scroll-padding", "border-bottom: 1px solid var(--n-tab-border-color);")]), (0, e.cM)("left, right", [(0, e.cB)("tabs-wrapper", `
 flex-direction: column;
 `, [(0, e.cB)("tabs-tab-wrapper", `
 flex-direction: column;
 `, [(0, e.cB)("tabs-tab-pad", `
 height: var(--n-tab-gap-vertical);
 width: 100%;
 `)])])]), (0, e.cM)("top", [(0, e.cM)("card-type", [(0, e.cB)("tabs-tab", `
 border-top-left-radius: var(--n-tab-border-radius);
 border-top-right-radius: var(--n-tab-border-radius);
 `, [(0, e.cM)("active", `
 border-bottom: 1px solid #0000;
 `)]), (0, e.cB)("tabs-tab-pad", `
 border-bottom: 1px solid var(--n-tab-border-color);
 `)])]), (0, e.cM)("left", [(0, e.cM)("card-type", [(0, e.cB)("tabs-tab", `
 border-top-left-radius: var(--n-tab-border-radius);
 border-bottom-left-radius: var(--n-tab-border-radius);
 `, [(0, e.cM)("active", `
 border-right: 1px solid #0000;
 `)]), (0, e.cB)("tabs-tab-pad", `
 border-right: 1px solid var(--n-tab-border-color);
 `)])]), (0, e.cM)("right", [(0, e.cM)("card-type", [(0, e.cB)("tabs-tab", `
 border-top-right-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `, [(0, e.cM)("active", `
 border-left: 1px solid #0000;
 `)]), (0, e.cB)("tabs-tab-pad", `
 border-left: 1px solid var(--n-tab-border-color);
 `)])]), (0, e.cM)("bottom", [(0, e.cM)("card-type", [(0, e.cB)("tabs-tab", `
 border-bottom-left-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `, [(0, e.cM)("active", `
 border-top: 1px solid #0000;
 `)]), (0, e.cB)("tabs-tab-pad", `
 border-top: 1px solid var(--n-tab-border-color);
 `)])])])]);
(function(o) {
  var s = K && K.__importDefault || function(t) {
    return t && t.__esModule ? t : { default: t };
  };
  Object.defineProperty(o, "__esModule", { value: !0 }), o.tabsProps = void 0;
  const r = le, g = ct, b = bt, v = ft, _ = pt, l = ne, p = Be, x = Q, w = s(be), A = s(pe), L = ut;
  o.tabsProps = Object.assign(Object.assign({}, _.useTheme.props), {
    value: [String, Number],
    defaultValue: [String, Number],
    trigger: {
      type: String,
      default: "click"
    },
    type: {
      type: String,
      default: "bar"
    },
    closable: Boolean,
    justifyContent: String,
    size: {
      type: String,
      default: "medium"
    },
    placement: {
      type: String,
      default: "top"
    },
    tabStyle: [String, Object],
    barWidth: Number,
    paneClass: String,
    paneStyle: [String, Object],
    paneWrapperClass: String,
    paneWrapperStyle: [String, Object],
    addable: [Boolean, Object],
    tabsPadding: {
      type: Number,
      default: 0
    },
    animated: Boolean,
    onBeforeLeave: Function,
    onAdd: Function,
    "onUpdate:value": [Function, Array],
    onUpdateValue: [Function, Array],
    onClose: [Function, Array],
    // deprecated
    labelSize: String,
    activeName: [String, Number],
    onActiveNameChange: [Function, Array]
  }), o.default = (0, r.defineComponent)({
    name: "Tabs",
    props: o.tabsProps,
    setup(t, { slots: c }) {
      var f, C, h, T;
      process.env.NODE_ENV !== "production" && (0, r.watchEffect)(() => {
        t.labelSize !== void 0 && (0, l.warnOnce)("tabs", "`label-size` is deprecated, please use `size` instead."), t.activeName !== void 0 && (0, l.warnOnce)("tabs", "`active-name` is deprecated, please use `value` instead."), t.onActiveNameChange !== void 0 && (0, l.warnOnce)("tabs", "`on-active-name-change` is deprecated, please use `on-update:value` instead.");
      });
      const { mergedClsPrefixRef: y, inlineThemeDisabled: j } = (0, _.useConfig)(t), D = (0, _.useTheme)("Tabs", "-tabs", A.default, p.tabsLight, t, y), O = (0, r.ref)(null), z = (0, r.ref)(null), q = (0, r.ref)(null), H = (0, r.ref)(null), P = (0, r.ref)(null), S = (0, r.ref)(!0), I = (0, r.ref)(!0), E = (0, v.useCompitable)(t, ["labelSize", "size"]), U = (0, v.useCompitable)(t, ["activeName", "value"]), R = (0, r.ref)((C = (f = U.value) !== null && f !== void 0 ? f : t.defaultValue) !== null && C !== void 0 ? C : c.default ? (T = (h = (0, l.flatten)(c.default())[0]) === null || h === void 0 ? void 0 : h.props) === null || T === void 0 ? void 0 : T.name : null), G = (0, v.useMergedState)(U, R), F = { id: 0 }, u = (0, r.computed)(() => {
        if (!(!t.justifyContent || t.type === "card"))
          return {
            display: "flex",
            justifyContent: t.justifyContent
          };
      });
      (0, r.watch)(G, () => {
        F.id = 0, Z(), ve();
      });
      function m() {
        var a;
        const { value: n } = G;
        return n === null ? null : (a = O.value) === null || a === void 0 ? void 0 : a.querySelector(`[data-name="${n}"]`);
      }
      function Y(a) {
        if (t.type === "card")
          return;
        const { value: n } = z;
        if (n && a) {
          const i = `${y.value}-tabs-bar--disabled`, { barWidth: d, placement: B } = t;
          if (a.dataset.disabled === "true" ? n.classList.add(i) : n.classList.remove(i), ["top", "bottom"].includes(B)) {
            if (ue(["top", "maxHeight", "height"]), typeof d == "number" && a.offsetWidth >= d) {
              const M = Math.floor((a.offsetWidth - d) / 2) + a.offsetLeft;
              n.style.left = `${M}px`, n.style.maxWidth = `${d}px`;
            } else
              n.style.left = `${a.offsetLeft}px`, n.style.maxWidth = `${a.offsetWidth}px`;
            n.style.width = "8192px", n.offsetWidth;
          } else {
            if (ue(["left", "maxWidth", "width"]), typeof d == "number" && a.offsetHeight >= d) {
              const M = Math.floor((a.offsetHeight - d) / 2) + a.offsetTop;
              n.style.top = `${M}px`, n.style.maxHeight = `${d}px`;
            } else
              n.style.top = `${a.offsetTop}px`, n.style.maxHeight = `${a.offsetHeight}px`;
            n.style.height = "8192px", n.offsetHeight;
          }
        }
      }
      function ue(a) {
        const { value: n } = z;
        if (n)
          for (const i of a)
            n.style[i] = "";
      }
      function Z() {
        if (t.type === "card")
          return;
        const a = m();
        a && Y(a);
      }
      function ve(a) {
        var n;
        const i = (n = P.value) === null || n === void 0 ? void 0 : n.$el;
        if (!i)
          return;
        const d = m();
        if (!d)
          return;
        const { scrollLeft: B, offsetWidth: M } = i, { offsetLeft: J, offsetWidth: ae } = d;
        B > J ? i.scrollTo({
          top: 0,
          left: J,
          behavior: "smooth"
        }) : J + ae > B + M && i.scrollTo({
          top: 0,
          left: J + ae - M,
          behavior: "smooth"
        });
      }
      const ee = (0, r.ref)(null);
      let oe = 0, N = null;
      function we(a) {
        const n = ee.value;
        if (n) {
          oe = a.getBoundingClientRect().height;
          const i = `${oe}px`, d = () => {
            n.style.height = i, n.style.maxHeight = i;
          };
          N ? (d(), N(), N = null) : N = d;
        }
      }
      function Te(a) {
        const n = ee.value;
        if (n) {
          const i = a.getBoundingClientRect().height, d = () => {
            document.body.offsetHeight, n.style.maxHeight = `${i}px`, n.style.height = `${Math.max(oe, i)}px`;
          };
          N ? (N(), N = null, d()) : N = d;
        }
      }
      function ze() {
        const a = ee.value;
        a && (a.style.maxHeight = "", a.style.height = "");
      }
      const ge = { value: [] }, he = (0, r.ref)("next");
      function Re(a) {
        const n = G.value;
        let i = "next";
        for (const d of ge.value) {
          if (d === n)
            break;
          if (d === a) {
            i = "prev";
            break;
          }
        }
        he.value = i, Me(a);
      }
      function Me(a) {
        const { onActiveNameChange: n, onUpdateValue: i, "onUpdate:value": d } = t;
        n && (0, l.call)(n, a), i && (0, l.call)(i, a), d && (0, l.call)(d, a), R.value = a;
      }
      function Le(a) {
        const { onClose: n } = t;
        n && (0, l.call)(n, a);
      }
      function me() {
        const { value: a } = z;
        if (!a)
          return;
        const n = "transition-disabled";
        a.classList.add(n), Z(), a.classList.remove(n);
      }
      let xe = 0;
      function $e(a) {
        var n;
        if (a.contentRect.width === 0 && a.contentRect.height === 0 || xe === a.contentRect.width)
          return;
        xe = a.contentRect.width;
        const { type: i } = t;
        (i === "line" || i === "bar") && me(), i !== "segment" && ie((n = P.value) === null || n === void 0 ? void 0 : n.$el);
      }
      const je = (0, b.throttle)($e, 64);
      (0, r.watch)([() => t.justifyContent, () => t.size], () => {
        (0, r.nextTick)(() => {
          const { type: a } = t;
          (a === "line" || a === "bar") && me();
        });
      });
      const te = (0, r.ref)(!1);
      function Oe(a) {
        var n;
        const { target: i, contentRect: { width: d } } = a, B = i.parentElement.offsetWidth;
        if (!te.value)
          B < d && (te.value = !0);
        else {
          const { value: M } = H;
          if (!M)
            return;
          B - d > M.$el.offsetWidth && (te.value = !1);
        }
        ie((n = P.value) === null || n === void 0 ? void 0 : n.$el);
      }
      const Ee = (0, b.throttle)(Oe, 64);
      function Ae() {
        const { onAdd: a } = t;
        a && a(), (0, r.nextTick)(() => {
          const n = m(), { value: i } = P;
          !n || !i || i.scrollTo({
            left: n.offsetLeft,
            top: 0,
            behavior: "smooth"
          });
        });
      }
      function ie(a) {
        if (!a)
          return;
        const { placement: n } = t;
        if (n === "top" || n === "bottom") {
          const { scrollLeft: i, scrollWidth: d, offsetWidth: B } = a;
          S.value = i <= 0, I.value = i + B >= d;
        } else {
          const { scrollTop: i, scrollHeight: d, offsetHeight: B } = a;
          S.value = i <= 0, I.value = i + B >= d;
        }
      }
      const We = (0, b.throttle)((a) => {
        ie(a.target);
      }, 64);
      (0, r.provide)(x.tabsInjectionKey, {
        triggerRef: (0, r.toRef)(t, "trigger"),
        tabStyleRef: (0, r.toRef)(t, "tabStyle"),
        paneClassRef: (0, r.toRef)(t, "paneClass"),
        paneStyleRef: (0, r.toRef)(t, "paneStyle"),
        mergedClsPrefixRef: y,
        typeRef: (0, r.toRef)(t, "type"),
        closableRef: (0, r.toRef)(t, "closable"),
        valueRef: G,
        tabChangeIdRef: F,
        onBeforeLeaveRef: (0, r.toRef)(t, "onBeforeLeave"),
        activateTab: Re,
        handleClose: Le,
        handleAdd: Ae
      }), (0, v.onFontsReady)(() => {
        Z(), ve();
      }), (0, r.watchEffect)(() => {
        const { value: a } = q;
        if (!a)
          return;
        const { value: n } = y, i = `${n}-tabs-nav-scroll-wrapper--shadow-start`, d = `${n}-tabs-nav-scroll-wrapper--shadow-end`;
        S.value ? a.classList.remove(i) : a.classList.add(i), I.value ? a.classList.remove(d) : a.classList.add(d);
      });
      const ye = (0, r.ref)(null);
      (0, r.watch)(G, () => {
        if (t.type === "segment") {
          const a = ye.value;
          a && (0, r.nextTick)(() => {
            a.classList.add("transition-disabled"), a.offsetWidth, a.classList.remove("transition-disabled");
          });
        }
      });
      const ke = {
        syncBarPosition: () => {
          Z();
        }
      }, Pe = (0, r.computed)(() => {
        const { value: a } = E, { type: n } = t, i = {
          card: "Card",
          bar: "Bar",
          line: "Line",
          segment: "Segment"
        }[n], d = `${a}${i}`, { self: { barColor: B, closeIconColor: M, closeIconColorHover: J, closeIconColorPressed: ae, tabColor: Ve, tabBorderColor: De, paneTextColor: Ge, tabFontWeight: He, tabBorderRadius: Ie, tabFontWeightActive: Fe, colorSegment: Ne, fontWeightStrong: Ke, tabColorSegment: qe, closeSize: Ue, closeIconSize: Xe, closeColorHover: Je, closeColorPressed: Qe, closeBorderRadius: Ye, [(0, l.createKey)("panePadding", a)]: re, [(0, l.createKey)("tabPadding", d)]: Ze, [(0, l.createKey)("tabPaddingVertical", d)]: et, [(0, l.createKey)("tabGap", d)]: tt, [(0, l.createKey)("tabGap", `${d}Vertical`)]: at, [(0, l.createKey)("tabTextColor", n)]: rt, [(0, l.createKey)("tabTextColorActive", n)]: nt, [(0, l.createKey)("tabTextColorHover", n)]: ot, [(0, l.createKey)("tabTextColorDisabled", n)]: it, [(0, l.createKey)("tabFontSize", a)]: lt }, common: { cubicBezierEaseInOut: st } } = D.value;
        return {
          "--n-bezier": st,
          "--n-color-segment": Ne,
          "--n-bar-color": B,
          "--n-tab-font-size": lt,
          "--n-tab-text-color": rt,
          "--n-tab-text-color-active": nt,
          "--n-tab-text-color-disabled": it,
          "--n-tab-text-color-hover": ot,
          "--n-pane-text-color": Ge,
          "--n-tab-border-color": De,
          "--n-tab-border-radius": Ie,
          "--n-close-size": Ue,
          "--n-close-icon-size": Xe,
          "--n-close-color-hover": Je,
          "--n-close-color-pressed": Qe,
          "--n-close-border-radius": Ye,
          "--n-close-icon-color": M,
          "--n-close-icon-color-hover": J,
          "--n-close-icon-color-pressed": ae,
          "--n-tab-color": Ve,
          "--n-tab-font-weight": He,
          "--n-tab-font-weight-active": Fe,
          "--n-tab-padding": Ze,
          "--n-tab-padding-vertical": et,
          "--n-tab-gap": tt,
          "--n-tab-gap-vertical": at,
          "--n-pane-padding-left": (0, L.getPadding)(re, "left"),
          "--n-pane-padding-right": (0, L.getPadding)(re, "right"),
          "--n-pane-padding-top": (0, L.getPadding)(re, "top"),
          "--n-pane-padding-bottom": (0, L.getPadding)(re, "bottom"),
          "--n-font-weight-strong": Ke,
          "--n-tab-color-segment": qe
        };
      }), X = j ? (0, _.useThemeClass)("tabs", (0, r.computed)(() => `${E.value[0]}${t.type[0]}`), Pe, t) : void 0;
      return Object.assign({
        mergedClsPrefix: y,
        mergedValue: G,
        renderedNames: /* @__PURE__ */ new Set(),
        tabsRailElRef: ye,
        tabsPaneWrapperRef: ee,
        tabsElRef: O,
        barElRef: z,
        addTabInstRef: H,
        xScrollInstRef: P,
        scrollWrapperElRef: q,
        addTabFixed: te,
        tabWrapperStyle: u,
        handleNavResize: je,
        mergedSize: E,
        handleScroll: We,
        handleTabsResize: Ee,
        cssVars: j ? void 0 : Pe,
        themeClass: X == null ? void 0 : X.themeClass,
        animationDirection: he,
        renderNameListRef: ge,
        onAnimationBeforeLeave: we,
        onAnimationEnter: Te,
        onAnimationAfterEnter: ze,
        onRender: X == null ? void 0 : X.onRender
      }, ke);
    },
    render() {
      const { mergedClsPrefix: t, type: c, placement: f, addTabFixed: C, addable: h, mergedSize: T, renderNameListRef: y, onRender: j, paneWrapperClass: D, paneWrapperStyle: O, $slots: { default: z, prefix: q, suffix: H } } = this;
      j == null || j();
      const P = z ? (0, l.flatten)(z()).filter((u) => u.type.__TAB_PANE__ === !0) : [], S = z ? (0, l.flatten)(z()).filter((u) => u.type.__TAB__ === !0) : [], I = !S.length, E = c === "card", U = c === "segment", R = !E && !U && this.justifyContent;
      y.value = [];
      const G = () => {
        const u = (0, r.h)(
          "div",
          { style: this.tabWrapperStyle, class: [`${t}-tabs-wrapper`] },
          R ? null : (0, r.h)("div", { class: `${t}-tabs-scroll-padding`, style: { width: `${this.tabsPadding}px` } }),
          I ? P.map((m, Y) => (y.value.push(m.props.name), $((0, r.h)(w.default, Object.assign({}, m.props, { internalCreatedByPane: !0, internalLeftPadded: Y !== 0 && (!R || R === "center" || R === "start" || R === "end") }), m.children ? {
            default: m.children.tab
          } : void 0)))) : S.map((m, Y) => (y.value.push(m.props.name), $(Y !== 0 && !R ? V(m) : m))),
          !C && h && E ? k(h, (I ? P.length : S.length) !== 0) : null,
          R ? null : (0, r.h)("div", { class: `${t}-tabs-scroll-padding`, style: { width: `${this.tabsPadding}px` } })
        );
        return (0, r.h)(
          "div",
          { ref: "tabsElRef", class: `${t}-tabs-nav-scroll-content` },
          E && h ? (0, r.h)(g.VResizeObserver, { onResize: this.handleTabsResize }, {
            default: () => u
          }) : u,
          E ? (0, r.h)("div", { class: `${t}-tabs-pad` }) : null,
          E ? null : (0, r.h)("div", { ref: "barElRef", class: `${t}-tabs-bar` })
        );
      }, F = U ? "top" : f;
      return (0, r.h)(
        "div",
        { class: [
          `${t}-tabs`,
          this.themeClass,
          `${t}-tabs--${c}-type`,
          `${t}-tabs--${T}-size`,
          R && `${t}-tabs--flex`,
          `${t}-tabs--${F}`
        ], style: this.cssVars },
        (0, r.h)(
          "div",
          { class: [
            // the class should be applied here since it's possible
            // to make tabs nested in tabs, style may influence each
            // other. adding a class will make it easy to write the
            // style.
            `${t}-tabs-nav--${c}-type`,
            `${t}-tabs-nav--${F}`,
            `${t}-tabs-nav`
          ] },
          (0, l.resolveWrappedSlot)(q, (u) => u && (0, r.h)("div", { class: `${t}-tabs-nav__prefix` }, u)),
          U ? (0, r.h)("div", { class: `${t}-tabs-rail`, ref: "tabsRailElRef" }, I ? P.map((u, m) => (y.value.push(u.props.name), (0, r.h)(w.default, Object.assign({}, u.props, { internalCreatedByPane: !0, internalLeftPadded: m !== 0 }), u.children ? {
            default: u.children.tab
          } : void 0))) : S.map((u, m) => (y.value.push(u.props.name), m === 0 ? u : V(u)))) : (0, r.h)(g.VResizeObserver, { onResize: this.handleNavResize }, {
            default: () => (0, r.h)("div", { class: `${t}-tabs-nav-scroll-wrapper`, ref: "scrollWrapperElRef" }, ["top", "bottom"].includes(F) ? (0, r.h)(g.VXScroll, { ref: "xScrollInstRef", onScroll: this.handleScroll }, {
              default: G
            }) : (0, r.h)("div", { class: `${t}-tabs-nav-y-scroll`, onScroll: this.handleScroll }, G()))
          }),
          C && h && E ? k(h, !0) : null,
          (0, l.resolveWrappedSlot)(H, (u) => u && (0, r.h)("div", { class: `${t}-tabs-nav__suffix` }, u))
        ),
        I && (this.animated && (F === "top" || F === "bottom") ? (0, r.h)("div", { ref: "tabsPaneWrapperRef", style: O, class: [`${t}-tabs-pane-wrapper`, D] }, W(P, this.mergedValue, this.renderedNames, this.onAnimationBeforeLeave, this.onAnimationEnter, this.onAnimationAfterEnter, this.animationDirection)) : W(P, this.mergedValue, this.renderedNames))
      );
    }
  });
  function W(t, c, f, C, h, T, y) {
    const j = [];
    return t.forEach((D) => {
      const { name: O, displayDirective: z, "display-directive": q } = D.props, H = (S) => z === S || q === S, P = c === O;
      if (D.key !== void 0 && (D.key = O), P || H("show") || H("show:lazy") && f.has(O)) {
        f.has(O) || f.add(O);
        const S = !H("if");
        j.push(S ? (0, r.withDirectives)(D, [[r.vShow, P]]) : D);
      }
    }), y ? (0, r.h)(r.TransitionGroup, { name: `${y}-transition`, onBeforeLeave: C, onEnter: h, onAfterEnter: T }, { default: () => j }) : j;
  }
  function k(t, c) {
    return (0, r.h)(w.default, { ref: "addTabInstRef", key: "__addable", name: "__addable", internalCreatedByPane: !0, internalAddable: !0, internalLeftPadded: c, disabled: typeof t == "object" && t.disabled });
  }
  function V(t) {
    const c = (0, r.cloneVNode)(t);
    return c.props ? c.props.internalLeftPadded = !0 : c.props = {
      internalLeftPadded: !0
    }, c;
  }
  function $(t) {
    return Array.isArray(t.dynamicProps) ? t.dynamicProps.includes("internalLeftPadded") || t.dynamicProps.push("internalLeftPadded") : t.dynamicProps = ["internalLeftPadded"], t;
  }
})(Se);
(function(o) {
  var s = K && K.__importDefault || function(v) {
    return v && v.__esModule ? v : { default: v };
  };
  Object.defineProperty(o, "__esModule", { value: !0 }), o.tabProps = o.NTab = o.tabPaneProps = o.NTabPane = o.tabsProps = o.NTabs = void 0;
  var r = Se;
  Object.defineProperty(o, "NTabs", { enumerable: !0, get: function() {
    return s(r).default;
  } }), Object.defineProperty(o, "tabsProps", { enumerable: !0, get: function() {
    return r.tabsProps;
  } });
  var g = fe;
  Object.defineProperty(o, "NTabPane", { enumerable: !0, get: function() {
    return s(g).default;
  } }), Object.defineProperty(o, "tabPaneProps", { enumerable: !0, get: function() {
    return g.tabPaneProps;
  } });
  var b = be;
  Object.defineProperty(o, "NTab", { enumerable: !0, get: function() {
    return s(b).default;
  } }), Object.defineProperty(o, "tabProps", { enumerable: !0, get: function() {
    return b.tabProps;
  } });
})(Ce);
const wt = /* @__PURE__ */ ht({
  __proto__: null
}, [Ce]);
export {
  wt as i
};
