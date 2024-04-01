import { c as P } from "./_commonjsHelpers-c5d32002.js";
import { r as tt } from "./_vue_commonjs-external-eb7fec7f.js";
import { c as ge, b as pe, a as nt, f as lt, e as it, _ as at, r as rt } from "./index-815197f3.js";
import { s as be, b as _e, r as ot, c as ut, _ as st } from "./index-cd698eea.js";
import { u as ct } from "./utils-295e96f2.js";
import { f as dt } from "./fade-in-scale-up.cssr-45666b81.js";
function ft(s, v) {
  for (var l = 0; l < v.length; l++) {
    const c = v[l];
    if (typeof c != "string" && !Array.isArray(c)) {
      for (const h in c)
        if (h !== "default" && !(h in s)) {
          const S = Object.getOwnPropertyDescriptor(c, h);
          S && Object.defineProperty(s, h, S.get ? S : {
            enumerable: !0,
            get: () => c[h]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(s, Symbol.toStringTag, { value: "Module" }));
}
var Oe = {}, ye = {}, Se = {}, H = {}, R = {};
Object.defineProperty(R, "__esModule", { value: !0 });
R.self = void 0;
const ht = be, vt = _e, mt = ge, gt = pe;
function Me(s) {
  const { boxShadow2: v } = s;
  return {
    menuBoxShadow: v
  };
}
R.self = Me;
const pt = (0, gt.createTheme)({
  name: "Select",
  common: mt.commonLight,
  peers: {
    InternalSelection: ht.internalSelectionLight,
    InternalSelectMenu: vt.internalSelectMenuLight
  },
  self: Me
});
R.default = pt;
Object.defineProperty(H, "__esModule", { value: !0 });
const bt = be, _t = _e, Ot = ge, yt = R, St = {
  name: "Select",
  common: Ot.commonDark,
  peers: {
    InternalSelection: bt.internalSelectionDark,
    InternalSelectMenu: _t.internalSelectMenuDark
  },
  self: yt.self
};
H.default = St;
(function(s) {
  var v = P && P.__importDefault || function(h) {
    return h && h.__esModule ? h : { default: h };
  };
  Object.defineProperty(s, "__esModule", { value: !0 }), s.selectLight = s.selectDark = void 0;
  var l = H;
  Object.defineProperty(s, "selectDark", { enumerable: !0, get: function() {
    return v(l).default;
  } });
  var c = R;
  Object.defineProperty(s, "selectLight", { enumerable: !0, get: function() {
    return v(c).default;
  } });
})(Se);
var J = {};
Object.defineProperty(J, "__esModule", {
  value: !0
});
const G = nt, Mt = dt;
J.default = (0, G.c)([(0, G.cB)("select", `
 z-index: auto;
 outline: none;
 width: 100%;
 position: relative;
 `), (0, G.cB)("select-menu", `
 margin: 4px 0;
 box-shadow: var(--n-menu-box-shadow);
 `, [(0, Mt.fadeInScaleUpTransition)({
  originalTransition: "background-color .3s var(--n-bezier), box-shadow .3s var(--n-bezier)"
})])]);
(function(s) {
  var v = P && P.__importDefault || function(t) {
    return t && t.__esModule ? t : { default: t };
  };
  Object.defineProperty(s, "__esModule", { value: !0 }), s.selectProps = void 0;
  const l = tt, c = rt, h = ot, S = lt, V = it, Q = ut, w = pe, d = at, X = st, we = Se, F = ct, Fe = v(J);
  s.selectProps = Object.assign(Object.assign({}, w.useTheme.props), {
    to: d.useAdjustedTo.propTo,
    bordered: {
      type: Boolean,
      default: void 0
    },
    clearable: Boolean,
    clearFilterAfterSelect: {
      type: Boolean,
      default: !0
    },
    options: {
      type: Array,
      default: () => []
    },
    defaultValue: {
      type: [String, Number, Array],
      default: null
    },
    keyboard: {
      type: Boolean,
      default: !0
    },
    value: [String, Number, Array],
    placeholder: String,
    menuProps: Object,
    multiple: Boolean,
    size: String,
    filterable: Boolean,
    disabled: {
      type: Boolean,
      default: void 0
    },
    remote: Boolean,
    loading: Boolean,
    filter: Function,
    placement: {
      type: String,
      default: "bottom-start"
    },
    widthMode: {
      type: String,
      default: "trigger"
    },
    tag: Boolean,
    onCreate: Function,
    fallbackOption: {
      type: [Function, Boolean],
      default: void 0
    },
    show: {
      type: Boolean,
      default: void 0
    },
    showArrow: {
      type: Boolean,
      default: !0
    },
    maxTagCount: [Number, String],
    consistentMenuWidth: {
      type: Boolean,
      default: !0
    },
    virtualScroll: {
      type: Boolean,
      default: !0
    },
    labelField: {
      type: String,
      default: "label"
    },
    valueField: {
      type: String,
      default: "value"
    },
    childrenField: {
      type: String,
      default: "children"
    },
    renderLabel: Function,
    renderOption: Function,
    renderTag: Function,
    "onUpdate:value": [Function, Array],
    inputProps: Object,
    nodeProps: Function,
    ignoreComposition: { type: Boolean, default: !0 },
    showOnFocus: Boolean,
    // for jsx
    onUpdateValue: [Function, Array],
    onBlur: [Function, Array],
    onClear: [Function, Array],
    onFocus: [Function, Array],
    onScroll: [Function, Array],
    onSearch: [Function, Array],
    onUpdateShow: [Function, Array],
    "onUpdate:show": [Function, Array],
    displayDirective: {
      type: String,
      default: "show"
    },
    resetMenuOnOptionsChange: {
      type: Boolean,
      default: !0
    },
    status: String,
    showCheckmark: {
      type: Boolean,
      default: !0
    },
    /** deprecated */
    onChange: [Function, Array],
    items: Array
  }), s.default = (0, l.defineComponent)({
    name: "Select",
    props: s.selectProps,
    setup(t) {
      process.env.NODE_ENV !== "production" && (0, l.watchEffect)(() => {
        t.items !== void 0 && (0, d.warnOnce)("select", "`items` is deprecated, please use `options` instead."), t.onChange !== void 0 && (0, d.warnOnce)("select", "`on-change` is deprecated, please use `on-update:value` instead.");
      });
      const { mergedClsPrefixRef: g, mergedBorderedRef: B, namespaceRef: M, inlineThemeDisabled: m } = (0, w.useConfig)(t), Y = (0, w.useTheme)("Select", "-select", Fe.default, we.selectLight, t, g), W = (0, l.ref)(t.defaultValue), Te = (0, l.toRef)(t, "value"), k = (0, V.useMergedState)(Te, W), A = (0, l.ref)(!1), T = (0, l.ref)(""), Ce = (0, l.computed)(() => {
        const { valueField: e, childrenField: n } = t, i = (0, F.createTmOptions)(e, n);
        return (0, h.createTreeMate)(ke.value, i);
      }), Z = (0, l.computed)(() => (0, F.createValOptMap)(ne.value, t.valueField, t.childrenField)), $ = (0, l.ref)(!1), p = (0, V.useMergedState)((0, l.toRef)(t, "show"), $), b = (0, l.ref)(null), ee = (0, l.ref)(null), D = (0, l.ref)(null), { localeRef: Pe } = (0, w.useLocale)("Select"), Re = (0, l.computed)(() => {
        var e;
        return (e = t.placeholder) !== null && e !== void 0 ? e : Pe.value.placeholder;
      }), q = (0, V.useCompitable)(t, ["items", "options"]), I = [], _ = (0, l.ref)([]), y = (0, l.ref)([]), x = (0, l.ref)(/* @__PURE__ */ new Map()), te = (0, l.computed)(() => {
        const { fallbackOption: e } = t;
        if (e === void 0) {
          const { labelField: n, valueField: i } = t;
          return (u) => ({
            [n]: String(u),
            [i]: u
          });
        }
        return e === !1 ? !1 : (n) => Object.assign(e(n), {
          value: n
        });
      }), ne = (0, l.computed)(() => y.value.concat(_.value).concat(q.value)), Be = (0, l.computed)(() => {
        const { filter: e } = t;
        if (e)
          return e;
        const { labelField: n, valueField: i } = t;
        return (u, a) => {
          if (!a)
            return !1;
          const o = a[n];
          if (typeof o == "string")
            return (0, F.patternMatched)(u, o);
          const r = a[i];
          return typeof r == "string" ? (0, F.patternMatched)(u, r) : typeof r == "number" ? (0, F.patternMatched)(u, String(r)) : !1;
        };
      }), ke = (0, l.computed)(() => {
        if (t.remote)
          return q.value;
        {
          const { value: e } = ne, { value: n } = T;
          return !n.length || !t.filterable ? e : (0, F.filterOptions)(e, Be.value, n, t.childrenField);
        }
      });
      function K(e) {
        const n = t.remote, { value: i } = x, { value: u } = Z, { value: a } = te, o = [];
        return e.forEach((r) => {
          if (u.has(r))
            o.push(u.get(r));
          else if (n && i.has(r))
            o.push(i.get(r));
          else if (a) {
            const f = a(r);
            f && o.push(f);
          }
        }), o;
      }
      const le = (0, l.computed)(() => {
        if (t.multiple) {
          const { value: e } = k;
          return Array.isArray(e) ? K(e) : [];
        }
        return null;
      }), ie = (0, l.computed)(() => {
        const { value: e } = k;
        return !t.multiple && !Array.isArray(e) ? e === null ? null : K([e])[0] || null : null;
      }), z = (0, w.useFormItem)(t), { mergedSizeRef: Ae, mergedDisabledRef: L, mergedStatusRef: De } = z;
      function U(e, n) {
        const { onChange: i, "onUpdate:value": u, onUpdateValue: a } = t, { nTriggerFormChange: o, nTriggerFormInput: r } = z;
        i && (0, d.call)(i, e, n), a && (0, d.call)(a, e, n), u && (0, d.call)(u, e, n), W.value = e, o(), r();
      }
      function ae(e) {
        const { onBlur: n } = t, { nTriggerFormBlur: i } = z;
        n && (0, d.call)(n, e), i();
      }
      function Ie() {
        const { onClear: e } = t;
        e && (0, d.call)(e);
      }
      function je(e) {
        const { onFocus: n, showOnFocus: i } = t, { nTriggerFormFocus: u } = z;
        n && (0, d.call)(n, e), u(), i && j();
      }
      function Ve(e) {
        const { onSearch: n } = t;
        n && (0, d.call)(n, e);
      }
      function $e(e) {
        const { onScroll: n } = t;
        n && (0, d.call)(n, e);
      }
      function re() {
        var e;
        const { remote: n, multiple: i } = t;
        if (n) {
          const { value: u } = x;
          if (i) {
            const { valueField: a } = t;
            (e = le.value) === null || e === void 0 || e.forEach((o) => {
              u.set(o[a], o);
            });
          } else {
            const a = ie.value;
            a && u.set(a[t.valueField], a);
          }
        }
      }
      function oe(e) {
        const { onUpdateShow: n, "onUpdate:show": i } = t;
        n && (0, d.call)(n, e), i && (0, d.call)(i, e), $.value = e;
      }
      function j() {
        L.value || (oe(!0), $.value = !0, t.filterable && he());
      }
      function O() {
        oe(!1);
      }
      function ue() {
        T.value = "", y.value = I;
      }
      const N = (0, l.ref)(!1);
      function xe() {
        t.filterable && (N.value = !0);
      }
      function ze() {
        t.filterable && (N.value = !1, p.value || ue());
      }
      function Le() {
        L.value || (p.value ? t.filterable ? he() : O() : j());
      }
      function Ue(e) {
        var n, i;
        !((i = (n = D.value) === null || n === void 0 ? void 0 : n.selfRef) === null || i === void 0) && i.contains(e.relatedTarget) || (A.value = !1, ae(e), O());
      }
      function Ne(e) {
        je(e), A.value = !0;
      }
      function Ee(e) {
        A.value = !0;
      }
      function We(e) {
        var n;
        !((n = b.value) === null || n === void 0) && n.$el.contains(e.relatedTarget) || (A.value = !1, ae(e), O());
      }
      function qe() {
        var e;
        (e = b.value) === null || e === void 0 || e.focus(), O();
      }
      function Ke(e) {
        var n;
        p.value && (!((n = b.value) === null || n === void 0) && n.$el.contains((0, c.getPreciseEventTarget)(e)) || O());
      }
      function Ge(e) {
        if (!Array.isArray(e))
          return [];
        if (te.value)
          return Array.from(e);
        {
          const { remote: n } = t, { value: i } = Z;
          if (n) {
            const { value: u } = x;
            return e.filter((a) => i.has(a) || u.has(a));
          } else
            return e.filter((u) => i.has(u));
        }
      }
      function se(e) {
        E(e.rawNode);
      }
      function E(e) {
        if (L.value)
          return;
        const { tag: n, remote: i, clearFilterAfterSelect: u, valueField: a } = t;
        if (n && !i) {
          const { value: o } = y, r = o[0] || null;
          if (r) {
            const f = _.value;
            f.length ? f.push(r) : _.value = [r], y.value = I;
          }
        }
        if (i && x.value.set(e[a], e), t.multiple) {
          const o = Ge(k.value), r = o.findIndex((f) => f === e[a]);
          if (~r) {
            if (o.splice(r, 1), n && !i) {
              const f = ce(e[a]);
              ~f && (_.value.splice(f, 1), u && (T.value = ""));
            }
          } else
            o.push(e[a]), u && (T.value = "");
          U(o, K(o));
        } else {
          if (n && !i) {
            const o = ce(e[a]);
            ~o ? _.value = [
              _.value[o]
            ] : _.value = I;
          }
          fe(), O(), U(e[a], e);
        }
      }
      function ce(e) {
        return _.value.findIndex((i) => i[t.valueField] === e);
      }
      function He(e) {
        p.value || j();
        const { value: n } = e.target;
        T.value = n;
        const { tag: i, remote: u } = t;
        if (Ve(n), i && !u) {
          if (!n) {
            y.value = I;
            return;
          }
          const { onCreate: a } = t, o = a ? a(n) : { [t.labelField]: n, [t.valueField]: n }, { valueField: r } = t;
          q.value.some((f) => f[r] === o[r]) || _.value.some((f) => f[r] === o[r]) ? y.value = I : y.value = [o];
        }
      }
      function Je(e) {
        e.stopPropagation();
        const { multiple: n } = t;
        !n && t.filterable && O(), Ie(), n ? U([], []) : U(null, null);
      }
      function Qe(e) {
        !(0, c.happensIn)(e, "action") && !(0, c.happensIn)(e, "empty") && e.preventDefault();
      }
      function Xe(e) {
        $e(e);
      }
      function de(e) {
        var n, i, u, a, o;
        if (!t.keyboard) {
          e.preventDefault();
          return;
        }
        switch (e.key) {
          case " ":
            if (t.filterable)
              break;
            e.preventDefault();
          case "Enter":
            if (!(!((n = b.value) === null || n === void 0) && n.isComposing)) {
              if (p.value) {
                const r = (i = D.value) === null || i === void 0 ? void 0 : i.getPendingTmNode();
                r ? se(r) : t.filterable || (O(), fe());
              } else if (j(), t.tag && N.value) {
                const r = y.value[0];
                if (r) {
                  const f = r[t.valueField], { value: me } = k;
                  t.multiple && Array.isArray(me) && me.some((et) => et === f) || E(r);
                }
              }
            }
            e.preventDefault();
            break;
          case "ArrowUp":
            if (e.preventDefault(), t.loading)
              return;
            p.value && ((u = D.value) === null || u === void 0 || u.prev());
            break;
          case "ArrowDown":
            if (e.preventDefault(), t.loading)
              return;
            p.value ? (a = D.value) === null || a === void 0 || a.next() : j();
            break;
          case "Escape":
            p.value && ((0, d.markEventEffectPerformed)(e), O()), (o = b.value) === null || o === void 0 || o.focus();
            break;
        }
      }
      function fe() {
        var e;
        (e = b.value) === null || e === void 0 || e.focus();
      }
      function he() {
        var e;
        (e = b.value) === null || e === void 0 || e.focusInput();
      }
      function Ye() {
        var e;
        p.value && ((e = ee.value) === null || e === void 0 || e.syncPosition());
      }
      re(), (0, l.watch)((0, l.toRef)(t, "options"), re);
      const Ze = {
        focus: () => {
          var e;
          (e = b.value) === null || e === void 0 || e.focus();
        },
        blur: () => {
          var e;
          (e = b.value) === null || e === void 0 || e.blur();
        }
      }, ve = (0, l.computed)(() => {
        const { self: { menuBoxShadow: e } } = Y.value;
        return {
          "--n-menu-box-shadow": e
        };
      }), C = m ? (0, w.useThemeClass)("select", void 0, ve, t) : void 0;
      return Object.assign(Object.assign({}, Ze), {
        mergedStatus: De,
        mergedClsPrefix: g,
        mergedBordered: B,
        namespace: M,
        treeMate: Ce,
        isMounted: (0, V.useIsMounted)(),
        triggerRef: b,
        menuRef: D,
        pattern: T,
        uncontrolledShow: $,
        mergedShow: p,
        adjustedTo: (0, d.useAdjustedTo)(t),
        uncontrolledValue: W,
        mergedValue: k,
        followerRef: ee,
        localizedPlaceholder: Re,
        selectedOption: ie,
        selectedOptions: le,
        mergedSize: Ae,
        mergedDisabled: L,
        focused: A,
        activeWithoutMenuOpen: N,
        inlineThemeDisabled: m,
        onTriggerInputFocus: xe,
        onTriggerInputBlur: ze,
        handleTriggerOrMenuResize: Ye,
        handleMenuFocus: Ee,
        handleMenuBlur: We,
        handleMenuTabOut: qe,
        handleTriggerClick: Le,
        handleToggle: se,
        handleDeleteOption: E,
        handlePatternInput: He,
        handleClear: Je,
        handleTriggerBlur: Ue,
        handleTriggerFocus: Ne,
        handleKeydown: de,
        handleMenuAfterLeave: ue,
        handleMenuClickOutside: Ke,
        handleMenuScroll: Xe,
        handleMenuKeydown: de,
        handleMenuMousedown: Qe,
        mergedTheme: Y,
        cssVars: m ? void 0 : ve,
        themeClass: C == null ? void 0 : C.themeClass,
        onRender: C == null ? void 0 : C.onRender
      });
    },
    render() {
      return (0, l.h)(
        "div",
        { class: `${this.mergedClsPrefix}-select` },
        (0, l.h)(S.VBinder, null, {
          default: () => [
            (0, l.h)(S.VTarget, null, {
              default: () => (0, l.h)(X.NInternalSelection, { ref: "triggerRef", inlineThemeDisabled: this.inlineThemeDisabled, status: this.mergedStatus, inputProps: this.inputProps, clsPrefix: this.mergedClsPrefix, showArrow: this.showArrow, maxTagCount: this.maxTagCount, bordered: this.mergedBordered, active: this.activeWithoutMenuOpen || this.mergedShow, pattern: this.pattern, placeholder: this.localizedPlaceholder, selectedOption: this.selectedOption, selectedOptions: this.selectedOptions, multiple: this.multiple, renderTag: this.renderTag, renderLabel: this.renderLabel, filterable: this.filterable, clearable: this.clearable, disabled: this.mergedDisabled, size: this.mergedSize, theme: this.mergedTheme.peers.InternalSelection, labelField: this.labelField, valueField: this.valueField, themeOverrides: this.mergedTheme.peerOverrides.InternalSelection, loading: this.loading, focused: this.focused, onClick: this.handleTriggerClick, onDeleteOption: this.handleDeleteOption, onPatternInput: this.handlePatternInput, onClear: this.handleClear, onBlur: this.handleTriggerBlur, onFocus: this.handleTriggerFocus, onKeydown: this.handleKeydown, onPatternBlur: this.onTriggerInputBlur, onPatternFocus: this.onTriggerInputFocus, onResize: this.handleTriggerOrMenuResize, ignoreComposition: this.ignoreComposition }, {
                arrow: () => {
                  var t, g;
                  return [(g = (t = this.$slots).arrow) === null || g === void 0 ? void 0 : g.call(t)];
                }
              })
            }),
            (0, l.h)(S.VFollower, { ref: "followerRef", show: this.mergedShow, to: this.adjustedTo, teleportDisabled: this.adjustedTo === d.useAdjustedTo.tdkey, containerClass: this.namespace, width: this.consistentMenuWidth ? "target" : void 0, minWidth: "target", placement: this.placement }, {
              default: () => (0, l.h)(l.Transition, { name: "fade-in-scale-up-transition", appear: this.isMounted, onAfterLeave: this.handleMenuAfterLeave }, {
                default: () => {
                  var t, g, B;
                  return this.mergedShow || this.displayDirective === "show" ? ((t = this.onRender) === null || t === void 0 || t.call(this), (0, l.withDirectives)((0, l.h)(X.NInternalSelectMenu, Object.assign({}, this.menuProps, { ref: "menuRef", onResize: this.handleTriggerOrMenuResize, inlineThemeDisabled: this.inlineThemeDisabled, virtualScroll: this.consistentMenuWidth && this.virtualScroll, class: [
                    `${this.mergedClsPrefix}-select-menu`,
                    this.themeClass,
                    (g = this.menuProps) === null || g === void 0 ? void 0 : g.class
                  ], clsPrefix: this.mergedClsPrefix, focusable: !0, labelField: this.labelField, valueField: this.valueField, autoPending: !0, nodeProps: this.nodeProps, theme: this.mergedTheme.peers.InternalSelectMenu, themeOverrides: this.mergedTheme.peerOverrides.InternalSelectMenu, treeMate: this.treeMate, multiple: this.multiple, size: "medium", renderOption: this.renderOption, renderLabel: this.renderLabel, value: this.mergedValue, style: [(B = this.menuProps) === null || B === void 0 ? void 0 : B.style, this.cssVars], onToggle: this.handleToggle, onScroll: this.handleMenuScroll, onFocus: this.handleMenuFocus, onBlur: this.handleMenuBlur, onKeydown: this.handleMenuKeydown, onTabOut: this.handleMenuTabOut, onMousedown: this.handleMenuMousedown, show: this.mergedShow, showCheckmark: this.showCheckmark, resetMenuOnOptionsChange: this.resetMenuOnOptionsChange }), {
                    empty: () => {
                      var M, m;
                      return [(m = (M = this.$slots).empty) === null || m === void 0 ? void 0 : m.call(M)];
                    },
                    action: () => {
                      var M, m;
                      return [(m = (M = this.$slots).action) === null || m === void 0 ? void 0 : m.call(M)];
                    }
                  }), this.displayDirective === "show" ? [
                    [l.vShow, this.mergedShow],
                    [
                      Q.clickoutside,
                      this.handleMenuClickOutside,
                      void 0,
                      { capture: !0 }
                    ]
                  ] : [
                    [
                      Q.clickoutside,
                      this.handleMenuClickOutside,
                      void 0,
                      { capture: !0 }
                    ]
                  ])) : null;
                }
              })
            })
          ]
        })
      );
    }
  });
})(ye);
(function(s) {
  var v = P && P.__importDefault || function(c) {
    return c && c.__esModule ? c : { default: c };
  };
  Object.defineProperty(s, "__esModule", { value: !0 }), s.selectProps = s.NSelect = void 0;
  var l = ye;
  Object.defineProperty(s, "NSelect", { enumerable: !0, get: function() {
    return v(l).default;
  } }), Object.defineProperty(s, "selectProps", { enumerable: !0, get: function() {
    return l.selectProps;
  } });
})(Oe);
const Bt = /* @__PURE__ */ ft({
  __proto__: null
}, [Oe]);
export {
  Bt as i
};
