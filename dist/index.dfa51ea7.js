import { defineComponent as Ve, inject as He, ref as K, watch as $e, nextTick as Oe, computed as M, unref as e, provide as gt, openBlock as w, createBlock as ye, mergeProps as Ft, withCtx as te, normalizeClass as v, normalizeStyle as Tt, withModifiers as xe, resolveDynamicComponent as it, createCommentVNode as ie, createElementBlock as A, createElementVNode as x, renderSlot as ot, toDisplayString as ue, onMounted as oa, Fragment as me, renderList as Pe, createTextVNode as Ue, withDirectives as Re, createVNode as R, Transition as ra, withKeys as at, useAttrs as Bt, useSlots as Lt, toRef as nt, vShow as et, getCurrentInstance as Kt, reactive as ua } from "vue";
import { e as ia, f as L, r as ca, c as da, a as pa, b as va } from "./weekYear.7d67b0c3.js";
import { c as _t } from "./_commonjsHelpers.da91e947.js";
import { S as $t, a0 as Wt, H as De, b as Ce, d as re, a9 as fa, e as ma, P as Ne, h as Me, a5 as ha, Q as Ot, bk as ba, dd as ga, a6 as ya, A as ka, B as wa, G as je, o as ve, _ as Be, E as be, D as Da, b5 as Ca, cJ as It, aa as Sa, Z as Pa, aG as Ut, cH as _a, ac as yt, aN as rt, X as kt, Y as pt, aP as ut, a1 as wt } from "./useElementPlus.5a2e6faa.js";
import { a as ft } from "./index.0fb88f51.js";
import { f as Ma } from "./flatten.3de0f950.js";
import { f as Va, h as Ta } from "./isEqual.c2f76849.js";
const $a = [
  "year",
  "month",
  "date",
  "dates",
  "week",
  "datetime",
  "datetimerange",
  "daterange",
  "monthrange"
], cl = [
  "sun",
  "mon",
  "tue",
  "wed",
  "thu",
  "fri",
  "sat"
], dl = (c) => [...new Set(c)], qe = (c) => !c && c !== 0 ? [] : Array.isArray(c) ? c : [c];
var Oa = ia();
const Rt = ["hours", "minutes", "seconds"], At = "HH:mm:ss", tt = "YYYY-MM-DD", Ia = {
  date: tt,
  dates: tt,
  week: "gggg[w]ww",
  year: "YYYY",
  month: "YYYY-MM",
  datetime: `${tt} ${At}`,
  monthrange: "YYYY-MM",
  daterange: tt,
  datetimerange: `${tt} ${At}`
}, mt = (c, i) => [
  c > 0 ? c - 1 : void 0,
  c,
  c < i ? c + 1 : void 0
], Ht = (c) => Array.from(Array.from({ length: c }).keys()), zt = (c) => c.replace(/\W?m{1,2}|\W?ZZ/g, "").replace(/\W?h{1,2}|\W?s{1,3}|\W?a/gi, "").trim(), jt = (c) => c.replace(/\W?D{1,2}|\W?Do|\W?d{1,4}|\W?M{1,4}|\W?Y{2,4}/g, "").trim(), xt = function(c, i) {
  const n = $t(c), t = $t(i);
  return n && t ? c.getTime() === i.getTime() : !n && !t ? c === i : !1;
}, Nt = function(c, i) {
  const n = De(c), t = De(i);
  return n && t ? c.length !== i.length ? !1 : c.every((m, y) => xt(m, i[y])) : !n && !t ? xt(c, i) : !1;
}, Et = function(c, i, n) {
  const t = Wt(i) || i === "x" ? L(c).locale(n) : L(c, i).locale(n);
  return t.isValid() ? t : void 0;
}, Yt = function(c, i, n) {
  return Wt(i) ? c : i === "x" ? +c : L(c).locale(n).format(i);
}, ht = (c, i) => {
  var n;
  const t = [], m = i == null ? void 0 : i();
  for (let y = 0; y < c; y++)
    t.push((n = m == null ? void 0 : m.includes(y)) != null ? n : !1);
  return t;
}, qt = Ce({
  disabledHours: {
    type: re(Function)
  },
  disabledMinutes: {
    type: re(Function)
  },
  disabledSeconds: {
    type: re(Function)
  }
}), Ra = Ce({
  visible: Boolean,
  actualVisible: {
    type: Boolean,
    default: void 0
  },
  format: {
    type: String,
    default: ""
  }
}), Gt = Ce({
  id: {
    type: re([Array, String])
  },
  name: {
    type: re([Array, String]),
    default: ""
  },
  popperClass: {
    type: String,
    default: ""
  },
  format: String,
  valueFormat: String,
  type: {
    type: String,
    default: ""
  },
  clearable: {
    type: Boolean,
    default: !0
  },
  clearIcon: {
    type: re([String, Object]),
    default: fa
  },
  editable: {
    type: Boolean,
    default: !0
  },
  prefixIcon: {
    type: re([String, Object]),
    default: ""
  },
  size: ma,
  readonly: {
    type: Boolean,
    default: !1
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  placeholder: {
    type: String,
    default: ""
  },
  popperOptions: {
    type: re(Object),
    default: () => ({})
  },
  modelValue: {
    type: re([Date, Array, String, Number]),
    default: ""
  },
  rangeSeparator: {
    type: String,
    default: "-"
  },
  startPlaceholder: String,
  endPlaceholder: String,
  defaultValue: {
    type: re([Date, Array])
  },
  defaultTime: {
    type: re([Date, Array])
  },
  isRange: {
    type: Boolean,
    default: !1
  },
  ...qt,
  disabledDate: {
    type: Function
  },
  cellClassName: {
    type: Function
  },
  shortcuts: {
    type: Array,
    default: () => []
  },
  arrowControl: {
    type: Boolean,
    default: !1
  },
  label: {
    type: String,
    default: void 0
  },
  tabindex: {
    type: re([String, Number]),
    default: 0
  },
  validateEvent: {
    type: Boolean,
    default: !0
  },
  unlinkPanels: Boolean
}), Aa = ["id", "name", "placeholder", "value", "disabled", "readonly"], xa = ["id", "name", "placeholder", "value", "disabled", "readonly"], Na = Ve({
  name: "Picker"
}), Ea = /* @__PURE__ */ Ve({
  ...Na,
  props: Gt,
  emits: [
    "update:modelValue",
    "change",
    "focus",
    "blur",
    "calendar-change",
    "panel-change",
    "visible-change",
    "keydown"
  ],
  setup(c, { expose: i, emit: n }) {
    const t = c, { lang: m } = Ne(), y = Me("date"), P = Me("input"), E = Me("range"), { form: T, formItem: V } = ha(), Y = He("ElPopperOptions", {}), W = K(), C = K(), o = K(!1), h = K(!1), f = K(null);
    let S = !1, H = !1;
    $e(o, (a) => {
      a ? Oe(() => {
        a && (f.value = t.modelValue);
      }) : (ee.value = null, Oe(() => {
        $(t.modelValue);
      }));
    });
    const $ = (a, s) => {
      (s || !Nt(a, f.value)) && (n("change", a), t.validateEvent && (V == null || V.validate("change").catch((p) => Ot(p))));
    }, d = (a) => {
      if (!Nt(t.modelValue, a)) {
        let s;
        De(a) ? s = a.map((p) => Yt(p, t.valueFormat, m.value)) : a && (s = Yt(a, t.valueFormat, m.value)), n("update:modelValue", a && s, m.value);
      }
    }, _ = (a) => {
      n("keydown", a);
    }, B = M(() => {
      if (C.value) {
        const a = Ie.value ? C.value : C.value.$el;
        return Array.from(a.querySelectorAll("input"));
      }
      return [];
    }), z = (a, s, p) => {
      const k = B.value;
      !k.length || (!p || p === "min" ? (k[0].setSelectionRange(a, s), k[0].focus()) : p === "max" && (k[1].setSelectionRange(a, s), k[1].focus()));
    }, Q = () => {
      ge(!0, !0), Oe(() => {
        H = !1;
      });
    }, N = (a = "", s = !1) => {
      s || (H = !0), o.value = s;
      let p;
      De(a) ? p = a.map((k) => k.toDate()) : p = a && a.toDate(), ee.value = null, d(p);
    }, X = () => {
      h.value = !0;
    }, Z = () => {
      n("visible-change", !0);
    }, ne = (a) => {
      (a == null ? void 0 : a.key) === be.esc && ge(!0, !0);
    }, ke = () => {
      h.value = !1, o.value = !1, H = !1, n("visible-change", !1);
    }, q = () => {
      o.value = !0;
    }, le = () => {
      o.value = !1;
    }, ge = (a = !0, s = !1) => {
      H = s;
      const [p, k] = e(B);
      let he = p;
      !a && Ie.value && (he = k), he && he.focus();
    }, fe = (a) => {
      t.readonly || u.value || o.value || H || (o.value = !0, n("focus", a));
    };
    let U;
    const I = (a) => {
      const s = async () => {
        setTimeout(() => {
          var p;
          U === s && (!(((p = W.value) == null ? void 0 : p.isFocusInsideContent()) && !S) && B.value.filter((k) => k.contains(document.activeElement)).length === 0 && (Le(), o.value = !1, n("blur", a), t.validateEvent && (V == null || V.validate("blur").catch((k) => Ot(k)))), S = !1);
        }, 0);
      };
      U = s, s();
    }, u = M(() => t.disabled || (T == null ? void 0 : T.disabled)), b = M(() => {
      let a;
      if (ae.value ? ce.value.getDefaultValue && (a = ce.value.getDefaultValue()) : De(t.modelValue) ? a = t.modelValue.map((s) => Et(s, t.valueFormat, m.value)) : a = Et(t.modelValue, t.valueFormat, m.value), ce.value.getRangeAvailableTime) {
        const s = ce.value.getRangeAvailableTime(a);
        Va(s, a) || (a = s, d(De(a) ? a.map((p) => p.toDate()) : a.toDate()));
      }
      return De(a) && a.some((s) => !s) && (a = []), a;
    }), O = M(() => {
      if (!ce.value.panelReady)
        return "";
      const a = Te(b.value);
      return De(ee.value) ? [
        ee.value[0] || a && a[0] || "",
        ee.value[1] || a && a[1] || ""
      ] : ee.value !== null ? ee.value : !g.value && ae.value || !o.value && ae.value ? "" : a ? F.value ? a.join(", ") : a : "";
    }), l = M(() => t.type.includes("time")), g = M(() => t.type.startsWith("time")), F = M(() => t.type === "dates"), G = M(() => t.prefixIcon || (l.value ? ba : ga)), J = K(!1), de = (a) => {
      t.readonly || u.value || J.value && (a.stopPropagation(), Q(), d(null), $(null, !0), J.value = !1, o.value = !1, ce.value.handleClear && ce.value.handleClear());
    }, ae = M(() => {
      const { modelValue: a } = t;
      return !a || De(a) && !a.filter(Boolean).length;
    }), pe = async (a) => {
      var s;
      t.readonly || u.value || (((s = a.target) == null ? void 0 : s.tagName) !== "INPUT" || B.value.includes(document.activeElement)) && (o.value = !0);
    }, se = () => {
      t.readonly || u.value || !ae.value && t.clearable && (J.value = !0);
    }, Ee = () => {
      J.value = !1;
    }, we = (a) => {
      var s;
      t.readonly || u.value || (((s = a.touches[0].target) == null ? void 0 : s.tagName) !== "INPUT" || B.value.includes(document.activeElement)) && (o.value = !0);
    }, Ie = M(() => t.type.includes("range")), Se = ya(), lt = M(() => {
      var a, s;
      return (s = (a = e(W)) == null ? void 0 : a.popperRef) == null ? void 0 : s.contentRef;
    }), Ye = M(() => {
      var a;
      return e(Ie) ? e(C) : (a = e(C)) == null ? void 0 : a.$el;
    });
    ka(Ye, (a) => {
      const s = e(lt), p = e(Ye);
      s && (a.target === s || a.composedPath().includes(s)) || a.target === p || a.composedPath().includes(p) || (o.value = !1);
    });
    const ee = K(null), Le = () => {
      if (ee.value) {
        const a = _e(O.value);
        a && Ke(a) && (d(De(a) ? a.map((s) => s.toDate()) : a.toDate()), ee.value = null);
      }
      ee.value === "" && (d(null), $(null), ee.value = null);
    }, _e = (a) => a ? ce.value.parseUserInput(a) : null, Te = (a) => a ? ce.value.formatToString(a) : null, Ke = (a) => ce.value.isValidValue(a), Ge = async (a) => {
      if (t.readonly || u.value)
        return;
      const { code: s } = a;
      if (_(a), s === be.esc) {
        o.value === !0 && (o.value = !1, a.preventDefault(), a.stopPropagation());
        return;
      }
      if (s === be.down && (ce.value.handleFocusPicker && (a.preventDefault(), a.stopPropagation()), o.value === !1 && (o.value = !0, await Oe()), ce.value.handleFocusPicker)) {
        ce.value.handleFocusPicker();
        return;
      }
      if (s === be.tab) {
        S = !0;
        return;
      }
      if (s === be.enter || s === be.numpadEnter) {
        (ee.value === null || ee.value === "" || Ke(_e(O.value))) && (Le(), o.value = !1), a.stopPropagation();
        return;
      }
      if (ee.value) {
        a.stopPropagation();
        return;
      }
      ce.value.handleKeydownInput && ce.value.handleKeydownInput(a);
    }, Je = (a) => {
      ee.value = a, o.value || (o.value = !0);
    }, We = (a) => {
      const s = a.target;
      ee.value ? ee.value = [s.value, ee.value[1]] : ee.value = [s.value, null];
    }, Fe = (a) => {
      const s = a.target;
      ee.value ? ee.value = [ee.value[0], s.value] : ee.value = [null, s.value];
    }, Ze = () => {
      var a;
      const s = ee.value, p = _e(s && s[0]), k = e(b);
      if (p && p.isValid()) {
        ee.value = [
          Te(p),
          ((a = O.value) == null ? void 0 : a[1]) || null
        ];
        const he = [p, k && (k[1] || null)];
        Ke(he) && (d(he), ee.value = null);
      }
    }, Qe = () => {
      var a;
      const s = e(ee), p = _e(s && s[1]), k = e(b);
      if (p && p.isValid()) {
        ee.value = [
          ((a = e(O)) == null ? void 0 : a[0]) || null,
          Te(p)
        ];
        const he = [k && k[0], p];
        Ke(he) && (d(he), ee.value = null);
      }
    }, ce = K({}), r = (a) => {
      ce.value[a[0]] = a[1], ce.value.panelReady = !0;
    }, D = (a) => {
      n("calendar-change", a);
    }, j = (a, s, p) => {
      n("panel-change", a, s, p);
    };
    return gt("EP_PICKER_BASE", {
      props: t
    }), i({
      focus: ge,
      handleFocusInput: fe,
      handleBlurInput: I,
      handleOpen: q,
      handleClose: le,
      onPick: N
    }), (a, s) => (w(), ye(e(wa), Ft({
      ref_key: "refPopper",
      ref: W,
      visible: o.value,
      effect: "light",
      pure: "",
      trigger: "click"
    }, a.$attrs, {
      role: "dialog",
      teleported: "",
      transition: `${e(y).namespace.value}-zoom-in-top`,
      "popper-class": [`${e(y).namespace.value}-picker__popper`, a.popperClass],
      "popper-options": e(Y),
      "fallback-placements": ["bottom", "top", "right", "left"],
      "gpu-acceleration": !1,
      "stop-popper-mouse-event": !1,
      "hide-after": 0,
      persistent: "",
      onBeforeShow: X,
      onShow: Z,
      onHide: ke
    }), {
      default: te(() => [
        e(Ie) ? (w(), A("div", {
          key: 1,
          ref_key: "inputRef",
          ref: C,
          class: v([
            e(y).b("editor"),
            e(y).bm("editor", a.type),
            e(P).e("wrapper"),
            e(y).is("disabled", e(u)),
            e(y).is("active", o.value),
            e(E).b("editor"),
            e(Se) ? e(E).bm("editor", e(Se)) : "",
            a.$attrs.class
          ]),
          style: Tt(a.$attrs.style),
          onClick: fe,
          onMouseenter: se,
          onMouseleave: Ee,
          onTouchstart: we,
          onKeydown: Ge
        }, [
          e(G) ? (w(), ye(e(ve), {
            key: 0,
            class: v([e(P).e("icon"), e(E).e("icon")]),
            onMousedown: xe(pe, ["prevent"]),
            onTouchstart: we
          }, {
            default: te(() => [
              (w(), ye(it(e(G))))
            ]),
            _: 1
          }, 8, ["class", "onMousedown"])) : ie("v-if", !0),
          x("input", {
            id: a.id && a.id[0],
            autocomplete: "off",
            name: a.name && a.name[0],
            placeholder: a.startPlaceholder,
            value: e(O) && e(O)[0],
            disabled: e(u),
            readonly: !a.editable || a.readonly,
            class: v(e(E).b("input")),
            onMousedown: pe,
            onInput: We,
            onChange: Ze,
            onFocus: fe,
            onBlur: I
          }, null, 42, Aa),
          ot(a.$slots, "range-separator", {}, () => [
            x("span", {
              class: v(e(E).b("separator"))
            }, ue(a.rangeSeparator), 3)
          ]),
          x("input", {
            id: a.id && a.id[1],
            autocomplete: "off",
            name: a.name && a.name[1],
            placeholder: a.endPlaceholder,
            value: e(O) && e(O)[1],
            disabled: e(u),
            readonly: !a.editable || a.readonly,
            class: v(e(E).b("input")),
            onMousedown: pe,
            onFocus: fe,
            onBlur: I,
            onInput: Fe,
            onChange: Qe
          }, null, 42, xa),
          a.clearIcon ? (w(), ye(e(ve), {
            key: 1,
            class: v([
              e(P).e("icon"),
              e(E).e("close-icon"),
              {
                [e(E).e("close-icon--hidden")]: !J.value
              }
            ]),
            onClick: de
          }, {
            default: te(() => [
              (w(), ye(it(a.clearIcon)))
            ]),
            _: 1
          }, 8, ["class"])) : ie("v-if", !0)
        ], 38)) : (w(), ye(e(je), {
          key: 0,
          id: a.id,
          ref_key: "inputRef",
          ref: C,
          "container-role": "combobox",
          "model-value": e(O),
          name: a.name,
          size: e(Se),
          disabled: e(u),
          placeholder: a.placeholder,
          class: v([e(y).b("editor"), e(y).bm("editor", a.type), a.$attrs.class]),
          style: Tt(a.$attrs.style),
          readonly: !a.editable || a.readonly || e(F) || a.type === "week",
          label: a.label,
          tabindex: a.tabindex,
          "validate-event": !1,
          onInput: Je,
          onFocus: fe,
          onBlur: I,
          onKeydown: Ge,
          onChange: Le,
          onMousedown: pe,
          onMouseenter: se,
          onMouseleave: Ee,
          onTouchstart: we,
          onClick: s[0] || (s[0] = xe(() => {
          }, ["stop"]))
        }, {
          prefix: te(() => [
            e(G) ? (w(), ye(e(ve), {
              key: 0,
              class: v(e(P).e("icon")),
              onMousedown: xe(pe, ["prevent"]),
              onTouchstart: we
            }, {
              default: te(() => [
                (w(), ye(it(e(G))))
              ]),
              _: 1
            }, 8, ["class", "onMousedown"])) : ie("v-if", !0)
          ]),
          suffix: te(() => [
            J.value && a.clearIcon ? (w(), ye(e(ve), {
              key: 0,
              class: v(`${e(P).e("icon")} clear-icon`),
              onClick: xe(de, ["stop"])
            }, {
              default: te(() => [
                (w(), ye(it(a.clearIcon)))
              ]),
              _: 1
            }, 8, ["class", "onClick"])) : ie("v-if", !0)
          ]),
          _: 1
        }, 8, ["id", "model-value", "name", "size", "disabled", "placeholder", "class", "style", "readonly", "label", "tabindex", "onKeydown"]))
      ]),
      content: te(() => [
        ot(a.$slots, "default", {
          visible: o.value,
          actualVisible: h.value,
          parsedValue: e(b),
          format: a.format,
          unlinkPanels: a.unlinkPanels,
          type: a.type,
          defaultValue: a.defaultValue,
          onPick: N,
          onSelectRange: z,
          onSetPickerOption: r,
          onCalendarChange: D,
          onPanelChange: j,
          onKeydown: ne,
          onMousedown: s[1] || (s[1] = xe(() => {
          }, ["stop"]))
        })
      ]),
      _: 3
    }, 16, ["visible", "transition", "popper-class", "popper-options"]));
  }
});
var Ya = /* @__PURE__ */ Be(Ea, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/time-picker/src/common/picker.vue"]]);
const Fa = Ce({
  ...Ra,
  datetimeRole: String,
  parsedValue: {
    type: re(Object)
  }
}), Ba = ({
  getAvailableHours: c,
  getAvailableMinutes: i,
  getAvailableSeconds: n
}) => {
  const t = (P, E, T, V) => {
    const Y = {
      hour: c,
      minute: i,
      second: n
    };
    let W = P;
    return ["hour", "minute", "second"].forEach((C) => {
      if (Y[C]) {
        let o;
        const h = Y[C];
        switch (C) {
          case "minute": {
            o = h(W.hour(), E, V);
            break;
          }
          case "second": {
            o = h(W.hour(), W.minute(), E, V);
            break;
          }
          default: {
            o = h(E, V);
            break;
          }
        }
        if ((o == null ? void 0 : o.length) && !o.includes(W[C]())) {
          const f = T ? 0 : o.length - 1;
          W = W[C](o[f]);
        }
      }
    }), W;
  }, m = {};
  return {
    timePickerOptions: m,
    getAvailableTime: t,
    onSetOption: ([P, E]) => {
      m[P] = E;
    }
  };
}, bt = (c) => {
  const i = (t, m) => t || m, n = (t) => t !== !0;
  return c.map(i).filter(n);
}, Jt = (c, i, n) => ({
  getHoursList: (P, E) => ht(24, c && (() => c == null ? void 0 : c(P, E))),
  getMinutesList: (P, E, T) => ht(60, i && (() => i == null ? void 0 : i(P, E, T))),
  getSecondsList: (P, E, T, V) => ht(60, n && (() => n == null ? void 0 : n(P, E, T, V)))
}), La = (c, i, n) => {
  const { getHoursList: t, getMinutesList: m, getSecondsList: y } = Jt(c, i, n);
  return {
    getAvailableHours: (V, Y) => bt(t(V, Y)),
    getAvailableMinutes: (V, Y, W) => bt(m(V, Y, W)),
    getAvailableSeconds: (V, Y, W, C) => bt(y(V, Y, W, C))
  };
}, Ka = (c) => {
  const i = K(c.parsedValue);
  return $e(() => c.visible, (n) => {
    n || (i.value = c.parsedValue);
  }), i;
}, Wa = Ce({
  role: {
    type: String,
    required: !0
  },
  spinnerDate: {
    type: re(Object),
    required: !0
  },
  showSeconds: {
    type: Boolean,
    default: !0
  },
  arrowControl: Boolean,
  amPmMode: {
    type: re(String),
    default: ""
  },
  ...qt
}), Ua = ["onClick"], Ha = ["onMouseenter"], za = /* @__PURE__ */ Ve({
  __name: "basic-time-spinner",
  props: Wa,
  emits: ["change", "select-range", "set-option"],
  setup(c, { emit: i }) {
    const n = c, t = Me("time"), { getHoursList: m, getMinutesList: y, getSecondsList: P } = Jt(n.disabledHours, n.disabledMinutes, n.disabledSeconds);
    let E = !1;
    const T = K(), V = K(), Y = K(), W = K(), C = {
      hours: V,
      minutes: Y,
      seconds: W
    }, o = M(() => n.showSeconds ? Rt : Rt.slice(0, 2)), h = M(() => {
      const { spinnerDate: u } = n, b = u.hour(), O = u.minute(), l = u.second();
      return { hours: b, minutes: O, seconds: l };
    }), f = M(() => {
      const { hours: u, minutes: b } = e(h);
      return {
        hours: m(n.role),
        minutes: y(u, n.role),
        seconds: P(u, b, n.role)
      };
    }), S = M(() => {
      const { hours: u, minutes: b, seconds: O } = e(h);
      return {
        hours: mt(u, 23),
        minutes: mt(b, 59),
        seconds: mt(O, 59)
      };
    }), H = Ta((u) => {
      E = !1, _(u);
    }, 200), $ = (u) => {
      if (!!!n.amPmMode)
        return "";
      const O = n.amPmMode === "A";
      let l = u < 12 ? " am" : " pm";
      return O && (l = l.toUpperCase()), l;
    }, d = (u) => {
      let b;
      switch (u) {
        case "hours":
          b = [0, 2];
          break;
        case "minutes":
          b = [3, 5];
          break;
        case "seconds":
          b = [6, 8];
          break;
      }
      const [O, l] = b;
      i("select-range", O, l), T.value = u;
    }, _ = (u) => {
      Q(u, e(h)[u]);
    }, B = () => {
      _("hours"), _("minutes"), _("seconds");
    }, z = (u) => u.querySelector(`.${t.namespace.value}-scrollbar__wrap`), Q = (u, b) => {
      if (n.arrowControl)
        return;
      const O = e(C[u]);
      O && O.$el && (z(O.$el).scrollTop = Math.max(0, b * N(u)));
    }, N = (u) => {
      const b = e(C[u]);
      return (b == null ? void 0 : b.$el.querySelector("li").offsetHeight) || 0;
    }, X = () => {
      ne(1);
    }, Z = () => {
      ne(-1);
    }, ne = (u) => {
      T.value || d("hours");
      const b = T.value, O = e(h)[b], l = T.value === "hours" ? 24 : 60, g = ke(b, O, u, l);
      q(b, g), Q(b, g), Oe(() => d(b));
    }, ke = (u, b, O, l) => {
      let g = (b + O + l) % l;
      const F = e(f)[u];
      for (; F[g] && g !== b; )
        g = (g + O + l) % l;
      return g;
    }, q = (u, b) => {
      if (e(f)[u][b])
        return;
      const { hours: g, minutes: F, seconds: G } = e(h);
      let J;
      switch (u) {
        case "hours":
          J = n.spinnerDate.hour(b).minute(F).second(G);
          break;
        case "minutes":
          J = n.spinnerDate.hour(g).minute(b).second(G);
          break;
        case "seconds":
          J = n.spinnerDate.hour(g).minute(F).second(b);
          break;
      }
      i("change", J);
    }, le = (u, { value: b, disabled: O }) => {
      O || (q(u, b), d(u), Q(u, b));
    }, ge = (u) => {
      E = !0, H(u);
      const b = Math.min(Math.round((z(e(C[u]).$el).scrollTop - (fe(u) * 0.5 - 10) / N(u) + 3) / N(u)), u === "hours" ? 23 : 59);
      q(u, b);
    }, fe = (u) => e(C[u]).$el.offsetHeight, U = () => {
      const u = (b) => {
        const O = e(C[b]);
        O && O.$el && (z(O.$el).onscroll = () => {
          ge(b);
        });
      };
      u("hours"), u("minutes"), u("seconds");
    };
    oa(() => {
      Oe(() => {
        !n.arrowControl && U(), B(), n.role === "start" && d("hours");
      });
    });
    const I = (u, b) => {
      C[b].value = u;
    };
    return i("set-option", [`${n.role}_scrollDown`, ne]), i("set-option", [`${n.role}_emitSelectRange`, d]), $e(() => n.spinnerDate, () => {
      E || B();
    }), (u, b) => (w(), A("div", {
      class: v([e(t).b("spinner"), { "has-seconds": u.showSeconds }])
    }, [
      u.arrowControl ? ie("v-if", !0) : (w(!0), A(me, { key: 0 }, Pe(e(o), (O) => (w(), ye(e(Da), {
        key: O,
        ref_for: !0,
        ref: (l) => I(l, O),
        class: v(e(t).be("spinner", "wrapper")),
        "wrap-style": "max-height: inherit;",
        "view-class": e(t).be("spinner", "list"),
        noresize: "",
        tag: "ul",
        onMouseenter: (l) => d(O),
        onMousemove: (l) => _(O)
      }, {
        default: te(() => [
          (w(!0), A(me, null, Pe(e(f)[O], (l, g) => (w(), A("li", {
            key: g,
            class: v([
              e(t).be("spinner", "item"),
              e(t).is("active", g === e(h)[O]),
              e(t).is("disabled", l)
            ]),
            onClick: (F) => le(O, { value: g, disabled: l })
          }, [
            O === "hours" ? (w(), A(me, { key: 0 }, [
              Ue(ue(("0" + (u.amPmMode ? g % 12 || 12 : g)).slice(-2)) + ue($(g)), 1)
            ], 64)) : (w(), A(me, { key: 1 }, [
              Ue(ue(("0" + g).slice(-2)), 1)
            ], 64))
          ], 10, Ua))), 128))
        ]),
        _: 2
      }, 1032, ["class", "view-class", "onMouseenter", "onMousemove"]))), 128)),
      u.arrowControl ? (w(!0), A(me, { key: 1 }, Pe(e(o), (O) => (w(), A("div", {
        key: O,
        class: v([e(t).be("spinner", "wrapper"), e(t).is("arrow")]),
        onMouseenter: (l) => d(O)
      }, [
        Re((w(), ye(e(ve), {
          class: v(["arrow-up", e(t).be("spinner", "arrow")])
        }, {
          default: te(() => [
            R(e(Ca))
          ]),
          _: 1
        }, 8, ["class"])), [
          [e(It), Z]
        ]),
        Re((w(), ye(e(ve), {
          class: v(["arrow-down", e(t).be("spinner", "arrow")])
        }, {
          default: te(() => [
            R(e(Sa))
          ]),
          _: 1
        }, 8, ["class"])), [
          [e(It), X]
        ]),
        x("ul", {
          class: v(e(t).be("spinner", "list"))
        }, [
          (w(!0), A(me, null, Pe(e(S)[O], (l, g) => (w(), A("li", {
            key: g,
            class: v([
              e(t).be("spinner", "item"),
              e(t).is("active", l === e(h)[O]),
              e(t).is("disabled", e(f)[O][l])
            ])
          }, [
            typeof l == "number" ? (w(), A(me, { key: 0 }, [
              O === "hours" ? (w(), A(me, { key: 0 }, [
                Ue(ue(("0" + (u.amPmMode ? l % 12 || 12 : l)).slice(-2)) + ue($(l)), 1)
              ], 64)) : (w(), A(me, { key: 1 }, [
                Ue(ue(("0" + l).slice(-2)), 1)
              ], 64))
            ], 64)) : ie("v-if", !0)
          ], 2))), 128))
        ], 2)
      ], 42, Ha))), 128)) : ie("v-if", !0)
    ], 2));
  }
});
var ja = /* @__PURE__ */ Be(za, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/time-picker/src/time-picker-com/basic-time-spinner.vue"]]);
const qa = /* @__PURE__ */ Ve({
  __name: "panel-time-pick",
  props: Fa,
  emits: ["pick", "select-range", "set-picker-option"],
  setup(c, { emit: i }) {
    const n = c, t = He("EP_PICKER_BASE"), {
      arrowControl: m,
      disabledHours: y,
      disabledMinutes: P,
      disabledSeconds: E,
      defaultValue: T
    } = t.props, { getAvailableHours: V, getAvailableMinutes: Y, getAvailableSeconds: W } = La(y, P, E), C = Me("time"), { t: o, lang: h } = Ne(), f = K([0, 2]), S = Ka(n), H = M(() => Pa(n.actualVisible) ? `${C.namespace.value}-zoom-in-top` : ""), $ = M(() => n.format.includes("ss")), d = M(() => n.format.includes("A") ? "A" : n.format.includes("a") ? "a" : ""), _ = (I) => {
      const u = L(I).locale(h.value), b = le(u);
      return u.isSame(b);
    }, B = () => {
      i("pick", S.value, !1);
    }, z = (I = !1, u = !1) => {
      u || i("pick", n.parsedValue, I);
    }, Q = (I) => {
      if (!n.visible)
        return;
      const u = le(I).millisecond(0);
      i("pick", u, !0);
    }, N = (I, u) => {
      i("select-range", I, u), f.value = [I, u];
    }, X = (I) => {
      const u = [0, 3].concat($.value ? [6] : []), b = ["hours", "minutes"].concat($.value ? ["seconds"] : []), l = (u.indexOf(f.value[0]) + I + u.length) % u.length;
      ne.start_emitSelectRange(b[l]);
    }, Z = (I) => {
      const u = I.code, { left: b, right: O, up: l, down: g } = be;
      if ([b, O].includes(u)) {
        X(u === b ? -1 : 1), I.preventDefault();
        return;
      }
      if ([l, g].includes(u)) {
        const F = u === l ? -1 : 1;
        ne.start_scrollDown(F), I.preventDefault();
        return;
      }
    }, { timePickerOptions: ne, onSetOption: ke, getAvailableTime: q } = Ba({
      getAvailableHours: V,
      getAvailableMinutes: Y,
      getAvailableSeconds: W
    }), le = (I) => q(I, n.datetimeRole || "", !0), ge = (I) => I ? L(I, n.format).locale(h.value) : null, fe = (I) => I ? I.format(n.format) : null, U = () => L(T).locale(h.value);
    return i("set-picker-option", ["isValidValue", _]), i("set-picker-option", ["formatToString", fe]), i("set-picker-option", ["parseUserInput", ge]), i("set-picker-option", ["handleKeydownInput", Z]), i("set-picker-option", ["getRangeAvailableTime", le]), i("set-picker-option", ["getDefaultValue", U]), (I, u) => (w(), ye(ra, { name: e(H) }, {
      default: te(() => [
        I.actualVisible || I.visible ? (w(), A("div", {
          key: 0,
          class: v(e(C).b("panel"))
        }, [
          x("div", {
            class: v([e(C).be("panel", "content"), { "has-seconds": e($) }])
          }, [
            R(ja, {
              ref: "spinner",
              role: I.datetimeRole || "start",
              "arrow-control": e(m),
              "show-seconds": e($),
              "am-pm-mode": e(d),
              "spinner-date": I.parsedValue,
              "disabled-hours": e(y),
              "disabled-minutes": e(P),
              "disabled-seconds": e(E),
              onChange: Q,
              onSetOption: e(ke),
              onSelectRange: N
            }, null, 8, ["role", "arrow-control", "show-seconds", "am-pm-mode", "spinner-date", "disabled-hours", "disabled-minutes", "disabled-seconds", "onSetOption"])
          ], 2),
          x("div", {
            class: v(e(C).be("panel", "footer"))
          }, [
            x("button", {
              type: "button",
              class: v([e(C).be("panel", "btn"), "cancel"]),
              onClick: B
            }, ue(e(o)("el.datepicker.cancel")), 3),
            x("button", {
              type: "button",
              class: v([e(C).be("panel", "btn"), "confirm"]),
              onClick: u[0] || (u[0] = (b) => z())
            }, ue(e(o)("el.datepicker.confirm")), 3)
          ], 2)
        ], 2)) : ie("v-if", !0)
      ]),
      _: 1
    }, 8, ["name"]));
  }
});
var Dt = /* @__PURE__ */ Be(qa, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/time-picker/src/time-picker-com/panel-time-pick.vue"]]), Ga = ca(), Ja = da(), Za = pa(), Qa = va(), Zt = { exports: {} };
(function(c, i) {
  (function(n, t) {
    c.exports = t();
  })(_t, function() {
    return function(n, t, m) {
      t.prototype.dayOfYear = function(y) {
        var P = Math.round((m(this).startOf("day") - m(this).startOf("year")) / 864e5) + 1;
        return y == null ? P : this.add(y - P, "day");
      };
    };
  });
})(Zt);
const Xa = Zt.exports;
var Qt = { exports: {} };
(function(c, i) {
  (function(n, t) {
    c.exports = t();
  })(_t, function() {
    return function(n, t) {
      t.prototype.isSameOrAfter = function(m, y) {
        return this.isSame(m, y) || this.isAfter(m, y);
      };
    };
  });
})(Qt);
const en = Qt.exports;
var Xt = { exports: {} };
(function(c, i) {
  (function(n, t) {
    c.exports = t();
  })(_t, function() {
    return function(n, t) {
      t.prototype.isSameOrBefore = function(m, y) {
        return this.isSame(m, y) || this.isBefore(m, y);
      };
    };
  });
})(Xt);
const tn = Xt.exports, Mt = Symbol(), an = Ce({
  type: {
    type: re(String),
    default: "date"
  }
}), nn = ["date", "dates", "year", "month", "week", "range"], Vt = Ce({
  disabledDate: {
    type: re(Function)
  },
  date: {
    type: re(Object),
    required: !0
  },
  minDate: {
    type: re(Object)
  },
  maxDate: {
    type: re(Object)
  },
  parsedValue: {
    type: re([Object, Array])
  },
  rangeState: {
    type: re(Object),
    default: () => ({
      endDate: null,
      selecting: !1
    })
  }
}), ea = Ce({
  type: {
    type: re(String),
    required: !0,
    values: $a
  }
}), ta = Ce({
  unlinkPanels: Boolean,
  parsedValue: {
    type: re(Array)
  }
}), aa = (c) => ({
  type: String,
  values: nn,
  default: c
}), ln = Ce({
  ...ea,
  parsedValue: {
    type: re([Object, Array])
  },
  visible: {
    type: Boolean
  },
  format: {
    type: String,
    default: ""
  }
}), sn = Ce({
  ...Vt,
  cellClassName: {
    type: re(Function)
  },
  showWeekNumber: Boolean,
  selectionMode: aa("date")
}), Ct = (c) => {
  if (!De(c))
    return !1;
  const [i, n] = c;
  return L.isDayjs(i) && L.isDayjs(n) && i.isSameOrBefore(n);
}, na = (c, { lang: i, unit: n, unlinkPanels: t }) => {
  let m;
  if (De(c)) {
    let [y, P] = c.map((E) => L(E).locale(i));
    return t || (P = y.add(1, n)), [y, P];
  } else
    c ? m = L(c) : m = L();
  return m = m.locale(i), [m, m.add(1, n)];
}, on = (c, i, {
  columnIndexOffset: n,
  startDate: t,
  nextEndDate: m,
  now: y,
  unit: P,
  relativeDateGetter: E,
  setCellMetadata: T,
  setRowMetadata: V
}) => {
  for (let Y = 0; Y < c.row; Y++) {
    const W = i[Y];
    for (let C = 0; C < c.column; C++) {
      let o = W[C + n];
      o || (o = {
        row: Y,
        column: C,
        type: "normal",
        inRange: !1,
        start: !1,
        end: !1
      });
      const h = Y * c.column + C, f = E(h);
      o.dayjs = f, o.date = f.toDate(), o.timestamp = f.valueOf(), o.type = "normal", o.inRange = !!(t && f.isSameOrAfter(t, P) && m && f.isSameOrBefore(m, P)) || !!(t && f.isSameOrBefore(t, P) && m && f.isSameOrAfter(m, P)), t != null && t.isSameOrAfter(m) ? (o.start = !!m && f.isSame(m, P), o.end = t && f.isSame(t, P)) : (o.start = !!t && f.isSame(t, P), o.end = !!m && f.isSame(m, P)), f.isSame(y, P) && (o.type = "today"), T == null || T(o, { rowIndex: Y, columnIndex: C }), W[C + n] = o;
    }
    V == null || V(W);
  }
}, rn = Ce({
  cell: {
    type: re(Object)
  }
});
var un = Ve({
  name: "ElDatePickerCell",
  props: rn,
  setup(c) {
    const i = Me("date-table-cell"), {
      slots: n
    } = He(Mt);
    return () => {
      const {
        cell: t
      } = c;
      if (n.default) {
        const m = n.default(t).filter((y) => y.patchFlag !== -2 && y.type.toString() !== "Symbol(Comment)");
        if (m.length)
          return m;
      }
      return R("div", {
        class: i.b()
      }, [R("span", {
        class: i.e("text")
      }, [t == null ? void 0 : t.text])]);
    };
  }
});
const cn = ["aria-label", "onMousedown"], dn = {
  key: 0,
  scope: "col"
}, pn = ["aria-label"], vn = ["aria-current", "aria-selected", "tabindex"], fn = /* @__PURE__ */ Ve({
  __name: "basic-date-table",
  props: sn,
  emits: ["changerange", "pick", "select"],
  setup(c, { expose: i, emit: n }) {
    const t = c, m = Me("date-table"), { t: y, lang: P } = Ne(), E = K(), T = K(), V = K(), Y = K(), W = K([[], [], [], [], [], []]);
    let C = !1;
    const o = t.date.$locale().weekStart || 7, h = t.date.locale("en").localeData().weekdaysShort().map((l) => l.toLowerCase()), f = M(() => o > 3 ? 7 - o : -o), S = M(() => {
      const l = t.date.startOf("month");
      return l.subtract(l.day() || 7, "day");
    }), H = M(() => h.concat(h).slice(o, o + 7)), $ = M(() => Ma(N.value).some((l) => l.isCurrent)), d = M(() => {
      const l = t.date.startOf("month"), g = l.day() || 7, F = l.daysInMonth(), G = l.subtract(1, "month").daysInMonth();
      return {
        startOfMonthDay: g,
        dateCountOfMonth: F,
        dateCountOfLastMonth: G
      };
    }), _ = M(() => t.selectionMode === "dates" ? qe(t.parsedValue) : []), B = (l, {
      count: g,
      rowIndex: F,
      columnIndex: G
    }) => {
      const { startOfMonthDay: J, dateCountOfMonth: de, dateCountOfLastMonth: ae } = e(d), pe = e(f);
      if (F >= 0 && F <= 1) {
        const se = J + pe < 0 ? 7 + J + pe : J + pe;
        if (G + F * 7 >= se)
          return l.text = g, !0;
        l.text = ae - (se - G % 7) + 1 + F * 7, l.type = "prev-month";
      } else
        return g <= de ? l.text = g : (l.text = g - de, l.type = "next-month"), !0;
      return !1;
    }, z = (l, {
      columnIndex: g,
      rowIndex: F
    }, G) => {
      const { disabledDate: J, cellClassName: de } = t, ae = e(_), pe = B(l, { count: G, rowIndex: F, columnIndex: g }), se = l.dayjs.toDate();
      return l.selected = ae.find((Ee) => Ee.valueOf() === l.dayjs.valueOf()), l.isSelected = !!l.selected, l.isCurrent = ne(l), l.disabled = J == null ? void 0 : J(se), l.customClass = de == null ? void 0 : de(se), pe;
    }, Q = (l) => {
      if (t.selectionMode === "week") {
        const [g, F] = t.showWeekNumber ? [1, 7] : [0, 6], G = O(l[g + 1]);
        l[g].inRange = G, l[g].start = G, l[F].inRange = G, l[F].end = G;
      }
    }, N = M(() => {
      const { minDate: l, maxDate: g, rangeState: F, showWeekNumber: G } = t, J = f.value, de = W.value, ae = "day";
      let pe = 1;
      if (G)
        for (let se = 0; se < 6; se++)
          de[se][0] || (de[se][0] = {
            type: "week",
            text: S.value.add(se * 7 + 1, ae).week()
          });
      return on({ row: 6, column: 7 }, de, {
        startDate: l,
        columnIndexOffset: G ? 1 : 0,
        nextEndDate: F.endDate || g || F.selecting && l || null,
        now: L().locale(e(P)).startOf(ae),
        unit: ae,
        relativeDateGetter: (se) => S.value.add(se - J, ae),
        setCellMetadata: (...se) => {
          z(...se, pe) && (pe += 1);
        },
        setRowMetadata: Q
      }), de;
    });
    $e(() => t.date, async () => {
      var l, g;
      (l = E.value) != null && l.contains(document.activeElement) && (await Oe(), (g = T.value) == null || g.focus());
    });
    const X = async () => {
      var l;
      (l = T.value) == null || l.focus();
    }, Z = (l = "") => ["normal", "today"].includes(l), ne = (l) => t.selectionMode === "date" && Z(l.type) && ke(l, t.parsedValue), ke = (l, g) => g ? L(g).locale(P.value).isSame(t.date.date(Number(l.text)), "day") : !1, q = (l) => {
      const g = [];
      return Z(l.type) && !l.disabled ? (g.push("available"), l.type === "today" && g.push("today")) : g.push(l.type), ne(l) && g.push("current"), l.inRange && (Z(l.type) || t.selectionMode === "week") && (g.push("in-range"), l.start && g.push("start-date"), l.end && g.push("end-date")), l.disabled && g.push("disabled"), l.selected && g.push("selected"), l.customClass && g.push(l.customClass), g.join(" ");
    }, le = (l, g) => {
      const F = l * 7 + (g - (t.showWeekNumber ? 1 : 0)) - f.value;
      return S.value.add(F, "day");
    }, ge = (l) => {
      var g;
      if (!t.rangeState.selecting)
        return;
      let F = l.target;
      if (F.tagName === "SPAN" && (F = (g = F.parentNode) == null ? void 0 : g.parentNode), F.tagName === "DIV" && (F = F.parentNode), F.tagName !== "TD")
        return;
      const G = F.parentNode.rowIndex - 1, J = F.cellIndex;
      N.value[G][J].disabled || (G !== V.value || J !== Y.value) && (V.value = G, Y.value = J, n("changerange", {
        selecting: !0,
        endDate: le(G, J)
      }));
    }, fe = (l) => !$.value && (l == null ? void 0 : l.text) === 1 && l.type === "normal" || l.isCurrent, U = (l) => {
      C || $.value || t.selectionMode !== "date" || b(l, !0);
    }, I = (l) => {
      !l.target.closest("td") || (C = !0);
    }, u = (l) => {
      !l.target.closest("td") || (C = !1);
    }, b = (l, g = !1) => {
      const F = l.target.closest("td");
      if (!F)
        return;
      const G = F.parentNode.rowIndex - 1, J = F.cellIndex, de = N.value[G][J];
      if (de.disabled || de.type === "week")
        return;
      const ae = le(G, J);
      if (t.selectionMode === "range")
        !t.rangeState.selecting || !t.minDate ? (n("pick", { minDate: ae, maxDate: null }), n("select", !0)) : (ae >= t.minDate ? n("pick", { minDate: t.minDate, maxDate: ae }) : n("pick", { minDate: ae, maxDate: t.minDate }), n("select", !1));
      else if (t.selectionMode === "date")
        n("pick", ae, g);
      else if (t.selectionMode === "week") {
        const pe = ae.week(), se = `${ae.year()}w${pe}`;
        n("pick", {
          year: ae.year(),
          week: pe,
          value: se,
          date: ae.startOf("week")
        });
      } else if (t.selectionMode === "dates") {
        const pe = de.selected ? qe(t.parsedValue).filter((se) => (se == null ? void 0 : se.valueOf()) !== ae.valueOf()) : qe(t.parsedValue).concat([ae]);
        n("pick", pe);
      }
    }, O = (l) => {
      if (t.selectionMode !== "week")
        return !1;
      let g = t.date.startOf("day");
      if (l.type === "prev-month" && (g = g.subtract(1, "month")), l.type === "next-month" && (g = g.add(1, "month")), g = g.date(Number.parseInt(l.text, 10)), t.parsedValue && !Array.isArray(t.parsedValue)) {
        const F = (t.parsedValue.day() - o + 7) % 7 - 1;
        return t.parsedValue.subtract(F, "day").isSame(g, "day");
      }
      return !1;
    };
    return i({
      focus: X
    }), (l, g) => (w(), A("table", {
      role: "grid",
      "aria-label": e(y)("el.datepicker.dateTablePrompt"),
      cellspacing: "0",
      cellpadding: "0",
      class: v([e(m).b(), { "is-week-mode": l.selectionMode === "week" }]),
      onClick: b,
      onMousemove: ge,
      onMousedown: xe(I, ["prevent"]),
      onMouseup: u
    }, [
      x("tbody", {
        ref_key: "tbodyRef",
        ref: E
      }, [
        x("tr", null, [
          l.showWeekNumber ? (w(), A("th", dn, ue(e(y)("el.datepicker.week")), 1)) : ie("v-if", !0),
          (w(!0), A(me, null, Pe(e(H), (F, G) => (w(), A("th", {
            key: G,
            scope: "col",
            "aria-label": e(y)("el.datepicker.weeksFull." + F)
          }, ue(e(y)("el.datepicker.weeks." + F)), 9, pn))), 128))
        ]),
        (w(!0), A(me, null, Pe(e(N), (F, G) => (w(), A("tr", {
          key: G,
          class: v([e(m).e("row"), { current: O(F[1]) }])
        }, [
          (w(!0), A(me, null, Pe(F, (J, de) => (w(), A("td", {
            key: `${G}.${de}`,
            ref_for: !0,
            ref: (ae) => fe(J) && (T.value = ae),
            class: v(q(J)),
            "aria-current": J.isCurrent ? "date" : void 0,
            "aria-selected": J.isCurrent,
            tabindex: fe(J) ? 0 : -1,
            onFocus: U
          }, [
            R(e(un), { cell: J }, null, 8, ["cell"])
          ], 42, vn))), 128))
        ], 2))), 128))
      ], 512)
    ], 42, cn));
  }
});
var St = /* @__PURE__ */ Be(fn, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/date-picker/src/date-picker-com/basic-date-table.vue"]]);
const mn = Ce({
  ...Vt,
  selectionMode: aa("month")
}), hn = ["aria-label"], bn = ["aria-selected", "aria-label", "tabindex", "onKeydown"], gn = { class: "cell" }, yn = /* @__PURE__ */ Ve({
  __name: "basic-month-table",
  props: mn,
  emits: ["changerange", "pick", "select"],
  setup(c, { expose: i, emit: n }) {
    const t = c, m = (_, B, z) => {
      const Q = L().locale(z).startOf("month").month(B).year(_), N = Q.daysInMonth();
      return Ht(N).map((X) => Q.add(X, "day").toDate());
    }, y = Me("month-table"), { t: P, lang: E } = Ne(), T = K(), V = K(), Y = K(t.date.locale("en").localeData().monthsShort().map((_) => _.toLowerCase())), W = K([
      [],
      [],
      []
    ]), C = K(), o = K(), h = M(() => {
      var _, B;
      const z = W.value, Q = L().locale(E.value).startOf("month");
      for (let N = 0; N < 3; N++) {
        const X = z[N];
        for (let Z = 0; Z < 4; Z++) {
          const ne = X[Z] || (X[Z] = {
            row: N,
            column: Z,
            type: "normal",
            inRange: !1,
            start: !1,
            end: !1,
            text: -1,
            disabled: !1
          });
          ne.type = "normal";
          const ke = N * 4 + Z, q = t.date.startOf("year").month(ke), le = t.rangeState.endDate || t.maxDate || t.rangeState.selecting && t.minDate || null;
          ne.inRange = !!(t.minDate && q.isSameOrAfter(t.minDate, "month") && le && q.isSameOrBefore(le, "month")) || !!(t.minDate && q.isSameOrBefore(t.minDate, "month") && le && q.isSameOrAfter(le, "month")), (_ = t.minDate) != null && _.isSameOrAfter(le) ? (ne.start = !!(le && q.isSame(le, "month")), ne.end = t.minDate && q.isSame(t.minDate, "month")) : (ne.start = !!(t.minDate && q.isSame(t.minDate, "month")), ne.end = !!(le && q.isSame(le, "month"))), Q.isSame(q) && (ne.type = "today"), ne.text = ke, ne.disabled = ((B = t.disabledDate) == null ? void 0 : B.call(t, q.toDate())) || !1;
        }
      }
      return z;
    }), f = () => {
      var _;
      (_ = V.value) == null || _.focus();
    }, S = (_) => {
      const B = {}, z = t.date.year(), Q = new Date(), N = _.text;
      return B.disabled = t.disabledDate ? m(z, N, E.value).every(t.disabledDate) : !1, B.current = qe(t.parsedValue).findIndex((X) => L.isDayjs(X) && X.year() === z && X.month() === N) >= 0, B.today = Q.getFullYear() === z && Q.getMonth() === N, _.inRange && (B["in-range"] = !0, _.start && (B["start-date"] = !0), _.end && (B["end-date"] = !0)), B;
    }, H = (_) => {
      const B = t.date.year(), z = _.text;
      return qe(t.date).findIndex((Q) => Q.year() === B && Q.month() === z) >= 0;
    }, $ = (_) => {
      var B;
      if (!t.rangeState.selecting)
        return;
      let z = _.target;
      if (z.tagName === "A" && (z = (B = z.parentNode) == null ? void 0 : B.parentNode), z.tagName === "DIV" && (z = z.parentNode), z.tagName !== "TD")
        return;
      const Q = z.parentNode.rowIndex, N = z.cellIndex;
      h.value[Q][N].disabled || (Q !== C.value || N !== o.value) && (C.value = Q, o.value = N, n("changerange", {
        selecting: !0,
        endDate: t.date.startOf("year").month(Q * 4 + N)
      }));
    }, d = (_) => {
      var B;
      const z = (B = _.target) == null ? void 0 : B.closest("td");
      if ((z == null ? void 0 : z.tagName) !== "TD" || Ut(z, "disabled"))
        return;
      const Q = z.cellIndex, X = z.parentNode.rowIndex * 4 + Q, Z = t.date.startOf("year").month(X);
      t.selectionMode === "range" ? t.rangeState.selecting ? (t.minDate && Z >= t.minDate ? n("pick", { minDate: t.minDate, maxDate: Z }) : n("pick", { minDate: Z, maxDate: t.minDate }), n("select", !1)) : (n("pick", { minDate: Z, maxDate: null }), n("select", !0)) : n("pick", X);
    };
    return $e(() => t.date, async () => {
      var _, B;
      (_ = T.value) != null && _.contains(document.activeElement) && (await Oe(), (B = V.value) == null || B.focus());
    }), i({
      focus: f
    }), (_, B) => (w(), A("table", {
      role: "grid",
      "aria-label": e(P)("el.datepicker.monthTablePrompt"),
      class: v(e(y).b()),
      onClick: d,
      onMousemove: $
    }, [
      x("tbody", {
        ref_key: "tbodyRef",
        ref: T
      }, [
        (w(!0), A(me, null, Pe(e(h), (z, Q) => (w(), A("tr", { key: Q }, [
          (w(!0), A(me, null, Pe(z, (N, X) => (w(), A("td", {
            key: X,
            ref_for: !0,
            ref: (Z) => H(N) && (V.value = Z),
            class: v(S(N)),
            "aria-selected": `${H(N)}`,
            "aria-label": e(P)(`el.datepicker.month${+N.text + 1}`),
            tabindex: H(N) ? 0 : -1,
            onKeydown: [
              at(xe(d, ["prevent", "stop"]), ["space"]),
              at(xe(d, ["prevent", "stop"]), ["enter"])
            ]
          }, [
            x("div", null, [
              x("span", gn, ue(e(P)("el.datepicker.months." + Y.value[N.text])), 1)
            ])
          ], 42, bn))), 128))
        ]))), 128))
      ], 512)
    ], 42, hn));
  }
});
var Pt = /* @__PURE__ */ Be(yn, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/date-picker/src/date-picker-com/basic-month-table.vue"]]);
const { date: kn, disabledDate: wn, parsedValue: Dn } = Vt, Cn = Ce({
  date: kn,
  disabledDate: wn,
  parsedValue: Dn
}), Sn = ["aria-label"], Pn = ["aria-selected", "tabindex", "onKeydown"], _n = { class: "cell" }, Mn = { key: 1 }, Vn = /* @__PURE__ */ Ve({
  __name: "basic-year-table",
  props: Cn,
  emits: ["pick"],
  setup(c, { expose: i, emit: n }) {
    const t = c, m = (f, S) => {
      const H = L(String(f)).locale(S).startOf("year"), d = H.endOf("year").dayOfYear();
      return Ht(d).map((_) => H.add(_, "day").toDate());
    }, y = Me("year-table"), { t: P, lang: E } = Ne(), T = K(), V = K(), Y = M(() => Math.floor(t.date.year() / 10) * 10), W = () => {
      var f;
      (f = V.value) == null || f.focus();
    }, C = (f) => {
      const S = {}, H = L().locale(E.value);
      return S.disabled = t.disabledDate ? m(f, E.value).every(t.disabledDate) : !1, S.current = qe(t.parsedValue).findIndex(($) => $.year() === f) >= 0, S.today = H.year() === f, S;
    }, o = (f) => f === Y.value && t.date.year() < Y.value && t.date.year() > Y.value + 9 || qe(t.date).findIndex((S) => S.year() === f) >= 0, h = (f) => {
      const H = f.target.closest("td");
      if (H && H.textContent) {
        if (Ut(H, "disabled"))
          return;
        const $ = H.textContent || H.innerText;
        n("pick", Number($));
      }
    };
    return $e(() => t.date, async () => {
      var f, S;
      (f = T.value) != null && f.contains(document.activeElement) && (await Oe(), (S = V.value) == null || S.focus());
    }), i({
      focus: W
    }), (f, S) => (w(), A("table", {
      role: "grid",
      "aria-label": e(P)("el.datepicker.yearTablePrompt"),
      class: v(e(y).b()),
      onClick: h
    }, [
      x("tbody", {
        ref_key: "tbodyRef",
        ref: T
      }, [
        (w(), A(me, null, Pe(3, (H, $) => x("tr", { key: $ }, [
          (w(), A(me, null, Pe(4, (d, _) => (w(), A(me, {
            key: $ + "_" + _
          }, [
            $ * 4 + _ < 10 ? (w(), A("td", {
              key: 0,
              ref_for: !0,
              ref: (B) => o(e(Y) + $ * 4 + _) && (V.value = B),
              class: v(["available", C(e(Y) + $ * 4 + _)]),
              "aria-selected": `${o(e(Y) + $ * 4 + _)}`,
              tabindex: o(e(Y) + $ * 4 + _) ? 0 : -1,
              onKeydown: [
                at(xe(h, ["prevent", "stop"]), ["space"]),
                at(xe(h, ["prevent", "stop"]), ["enter"])
              ]
            }, [
              x("span", _n, ue(e(Y) + $ * 4 + _), 1)
            ], 42, Pn)) : (w(), A("td", Mn))
          ], 64))), 64))
        ])), 64))
      ], 512)
    ], 10, Sn));
  }
});
var Tn = /* @__PURE__ */ Be(Vn, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/date-picker/src/date-picker-com/basic-year-table.vue"]]);
const $n = ["onClick"], On = ["aria-label"], In = ["aria-label"], Rn = ["aria-label"], An = ["aria-label"], xn = /* @__PURE__ */ Ve({
  __name: "panel-date-pick",
  props: ln,
  emits: ["pick", "set-picker-option", "panel-change"],
  setup(c, { emit: i }) {
    const n = c, t = (r, D, j) => !0, m = Me("picker-panel"), y = Me("date-picker"), P = Bt(), E = Lt(), { t: T, lang: V } = Ne(), Y = He("EP_PICKER_BASE"), W = He(_a), { shortcuts: C, disabledDate: o, cellClassName: h, defaultTime: f, arrowControl: S } = Y.props, H = nt(Y.props, "defaultValue"), $ = K(), d = K(L().locale(V.value)), _ = K(!1), B = M(() => L(f).locale(V.value)), z = M(() => d.value.month()), Q = M(() => d.value.year()), N = K([]), X = K(null), Z = K(null), ne = (r) => N.value.length > 0 ? t(r, N.value, n.format || "HH:mm:ss") : !0, ke = (r) => f && !we.value && !_.value ? B.value.year(r.year()).month(r.month()).date(r.date()) : J.value ? r.millisecond(0) : r.startOf("day"), q = (r, ...D) => {
      if (!r)
        i("pick", r, ...D);
      else if (De(r)) {
        const j = r.map(ke);
        i("pick", j, ...D);
      } else
        i("pick", ke(r), ...D);
      X.value = null, Z.value = null, _.value = !1;
    }, le = (r, D) => {
      if (b.value === "date") {
        r = r;
        let j = n.parsedValue ? n.parsedValue.year(r.year()).month(r.month()).date(r.date()) : r;
        ne(j) || (j = N.value[0][0].year(r.year()).month(r.month()).date(r.date())), d.value = j, q(j, J.value || D);
      } else
        b.value === "week" ? q(r.date) : b.value === "dates" && q(r, !0);
    }, ge = (r) => {
      const D = r ? "add" : "subtract";
      d.value = d.value[D](1, "month"), ce("month");
    }, fe = (r) => {
      const D = d.value, j = r ? "add" : "subtract";
      d.value = U.value === "year" ? D[j](10, "year") : D[j](1, "year"), ce("year");
    }, U = K("date"), I = M(() => {
      const r = T("el.datepicker.year");
      if (U.value === "year") {
        const D = Math.floor(Q.value / 10) * 10;
        return r ? `${D} ${r} - ${D + 9} ${r}` : `${D} - ${D + 9}`;
      }
      return `${Q.value} ${r}`;
    }), u = (r) => {
      const D = wt(r.value) ? r.value() : r.value;
      if (D) {
        q(L(D).locale(V.value));
        return;
      }
      r.onClick && r.onClick({
        attrs: P,
        slots: E,
        emit: i
      });
    }, b = M(() => {
      const { type: r } = n;
      return ["week", "month", "year", "dates"].includes(r) ? r : "date";
    }), O = M(() => b.value === "date" ? U.value : b.value), l = M(() => !!C.length), g = async (r) => {
      d.value = d.value.startOf("month").month(r), b.value === "month" ? q(d.value, !1) : (U.value = "date", ["month", "year", "date", "week"].includes(b.value) && (q(d.value, !0), await Oe(), Fe())), ce("month");
    }, F = async (r) => {
      b.value === "year" ? (d.value = d.value.startOf("year").year(r), q(d.value, !1)) : (d.value = d.value.year(r), U.value = "month", ["month", "year", "date", "week"].includes(b.value) && (q(d.value, !0), await Oe(), Fe())), ce("year");
    }, G = async (r) => {
      U.value = r, await Oe(), Fe();
    }, J = M(() => n.type === "datetime" || n.type === "datetimerange"), de = M(() => J.value || b.value === "dates"), ae = () => {
      if (b.value === "dates")
        q(n.parsedValue);
      else {
        let r = n.parsedValue;
        if (!r) {
          const D = L(f).locale(V.value), j = We();
          r = D.year(j.year()).month(j.month()).date(j.date());
        }
        d.value = r, q(r);
      }
    }, pe = () => {
      const D = L().locale(V.value).toDate();
      _.value = !0, (!o || !o(D)) && ne(D) && (d.value = L().locale(V.value), q(d.value));
    }, se = M(() => jt(n.format)), Ee = M(() => zt(n.format)), we = M(() => {
      if (Z.value)
        return Z.value;
      if (!(!n.parsedValue && !H.value))
        return (n.parsedValue || d.value).format(se.value);
    }), Ie = M(() => {
      if (X.value)
        return X.value;
      if (!(!n.parsedValue && !H.value))
        return (n.parsedValue || d.value).format(Ee.value);
    }), Se = K(!1), lt = () => {
      Se.value = !0;
    }, Ye = () => {
      Se.value = !1;
    }, ee = (r) => ({
      hour: r.hour(),
      minute: r.minute(),
      second: r.second(),
      year: r.year(),
      month: r.month(),
      date: r.date()
    }), Le = (r, D, j) => {
      const { hour: a, minute: s, second: p } = ee(r), k = n.parsedValue ? n.parsedValue.hour(a).minute(s).second(p) : r;
      d.value = k, q(d.value, !0), j || (Se.value = D);
    }, _e = (r) => {
      const D = L(r, se.value).locale(V.value);
      if (D.isValid() && ne(D)) {
        const { year: j, month: a, date: s } = ee(d.value);
        d.value = D.year(j).month(a).date(s), Z.value = null, Se.value = !1, q(d.value, !0);
      }
    }, Te = (r) => {
      const D = L(r, Ee.value).locale(V.value);
      if (D.isValid()) {
        if (o && o(D.toDate()))
          return;
        const { hour: j, minute: a, second: s } = ee(d.value);
        d.value = D.hour(j).minute(a).second(s), X.value = null, q(d.value, !0);
      }
    }, Ke = (r) => L.isDayjs(r) && r.isValid() && (o ? !o(r.toDate()) : !0), Ge = (r) => b.value === "dates" ? r.map((D) => D.format(n.format)) : r.format(n.format), Je = (r) => L(r, n.format).locale(V.value), We = () => {
      const r = L(H.value).locale(V.value);
      if (!H.value) {
        const D = B.value;
        return L().hour(D.hour()).minute(D.minute()).second(D.second()).locale(V.value);
      }
      return r;
    }, Fe = async () => {
      var r;
      ["week", "month", "year", "date"].includes(b.value) && ((r = $.value) == null || r.focus(), b.value === "week" && Qe(be.down));
    }, Ze = (r) => {
      const { code: D } = r;
      [
        be.up,
        be.down,
        be.left,
        be.right,
        be.home,
        be.end,
        be.pageUp,
        be.pageDown
      ].includes(D) && (Qe(D), r.stopPropagation(), r.preventDefault()), [be.enter, be.space].includes(D) && X.value === null && Z.value === null && (r.preventDefault(), q(d.value, !1));
    }, Qe = (r) => {
      var D;
      const { up: j, down: a, left: s, right: p, home: k, end: he, pageUp: ze, pageDown: Xe } = be, sa = {
        year: {
          [j]: -4,
          [a]: 4,
          [s]: -1,
          [p]: 1,
          offset: (oe, Ae) => oe.setFullYear(oe.getFullYear() + Ae)
        },
        month: {
          [j]: -4,
          [a]: 4,
          [s]: -1,
          [p]: 1,
          offset: (oe, Ae) => oe.setMonth(oe.getMonth() + Ae)
        },
        week: {
          [j]: -1,
          [a]: 1,
          [s]: -1,
          [p]: 1,
          offset: (oe, Ae) => oe.setDate(oe.getDate() + Ae * 7)
        },
        date: {
          [j]: -7,
          [a]: 7,
          [s]: -1,
          [p]: 1,
          [k]: (oe) => -oe.getDay(),
          [he]: (oe) => -oe.getDay() + 6,
          [ze]: (oe) => -new Date(oe.getFullYear(), oe.getMonth(), 0).getDate(),
          [Xe]: (oe) => new Date(oe.getFullYear(), oe.getMonth() + 1, 0).getDate(),
          offset: (oe, Ae) => oe.setDate(oe.getDate() + Ae)
        }
      }, st = d.value.toDate();
      for (; Math.abs(d.value.diff(st, "year", !0)) < 1; ) {
        const oe = sa[O.value];
        if (!oe)
          return;
        if (oe.offset(st, wt(oe[r]) ? oe[r](st) : (D = oe[r]) != null ? D : 0), o && o(st))
          break;
        const Ae = L(st).locale(V.value);
        d.value = Ae, i("pick", Ae, !0);
        break;
      }
    }, ce = (r) => {
      i("panel-change", d.value.toDate(), r, U.value);
    };
    return $e(() => b.value, (r) => {
      if (["month", "year"].includes(r)) {
        U.value = r;
        return;
      }
      U.value = "date";
    }, { immediate: !0 }), $e(() => U.value, () => {
      W == null || W.updatePopper();
    }), $e(() => H.value, (r) => {
      r && (d.value = We());
    }, { immediate: !0 }), $e(() => n.parsedValue, (r) => {
      if (r) {
        if (b.value === "dates" || Array.isArray(r))
          return;
        d.value = r;
      } else
        d.value = We();
    }, { immediate: !0 }), i("set-picker-option", ["isValidValue", Ke]), i("set-picker-option", ["formatToString", Ge]), i("set-picker-option", ["parseUserInput", Je]), i("set-picker-option", ["handleFocusPicker", Fe]), (r, D) => (w(), A("div", {
      class: v([
        e(m).b(),
        e(y).b(),
        {
          "has-sidebar": r.$slots.sidebar || e(l),
          "has-time": e(J)
        }
      ])
    }, [
      x("div", {
        class: v(e(m).e("body-wrapper"))
      }, [
        ot(r.$slots, "sidebar", {
          class: v(e(m).e("sidebar"))
        }),
        e(l) ? (w(), A("div", {
          key: 0,
          class: v(e(m).e("sidebar"))
        }, [
          (w(!0), A(me, null, Pe(e(C), (j, a) => (w(), A("button", {
            key: a,
            type: "button",
            class: v(e(m).e("shortcut")),
            onClick: (s) => u(j)
          }, ue(j.text), 11, $n))), 128))
        ], 2)) : ie("v-if", !0),
        x("div", {
          class: v(e(m).e("body"))
        }, [
          e(J) ? (w(), A("div", {
            key: 0,
            class: v(e(y).e("time-header"))
          }, [
            x("span", {
              class: v(e(y).e("editor-wrap"))
            }, [
              R(e(je), {
                placeholder: e(T)("el.datepicker.selectDate"),
                "model-value": e(Ie),
                size: "small",
                "validate-event": !1,
                onInput: D[0] || (D[0] = (j) => X.value = j),
                onChange: Te
              }, null, 8, ["placeholder", "model-value"])
            ], 2),
            Re((w(), A("span", {
              class: v(e(y).e("editor-wrap"))
            }, [
              R(e(je), {
                placeholder: e(T)("el.datepicker.selectTime"),
                "model-value": e(we),
                size: "small",
                "validate-event": !1,
                onFocus: lt,
                onInput: D[1] || (D[1] = (j) => Z.value = j),
                onChange: _e
              }, null, 8, ["placeholder", "model-value"]),
              R(e(Dt), {
                visible: Se.value,
                format: e(se),
                "time-arrow-control": e(S),
                "parsed-value": d.value,
                onPick: Le
              }, null, 8, ["visible", "format", "time-arrow-control", "parsed-value"])
            ], 2)), [
              [e(yt), Ye]
            ])
          ], 2)) : ie("v-if", !0),
          Re(x("div", {
            class: v([
              e(y).e("header"),
              (U.value === "year" || U.value === "month") && e(y).e("header--bordered")
            ])
          }, [
            x("span", {
              class: v(e(y).e("prev-btn"))
            }, [
              x("button", {
                type: "button",
                "aria-label": e(T)("el.datepicker.prevYear"),
                class: v(["d-arrow-left", e(m).e("icon-btn")]),
                onClick: D[2] || (D[2] = (j) => fe(!1))
              }, [
                R(e(ve), null, {
                  default: te(() => [
                    R(e(rt))
                  ]),
                  _: 1
                })
              ], 10, On),
              Re(x("button", {
                type: "button",
                "aria-label": e(T)("el.datepicker.prevMonth"),
                class: v([e(m).e("icon-btn"), "arrow-left"]),
                onClick: D[3] || (D[3] = (j) => ge(!1))
              }, [
                R(e(ve), null, {
                  default: te(() => [
                    R(e(kt))
                  ]),
                  _: 1
                })
              ], 10, In), [
                [et, U.value === "date"]
              ])
            ], 2),
            x("span", {
              role: "button",
              class: v(e(y).e("header-label")),
              "aria-live": "polite",
              tabindex: "0",
              onKeydown: D[4] || (D[4] = at((j) => G("year"), ["enter"])),
              onClick: D[5] || (D[5] = (j) => G("year"))
            }, ue(e(I)), 35),
            Re(x("span", {
              role: "button",
              "aria-live": "polite",
              tabindex: "0",
              class: v([
                e(y).e("header-label"),
                { active: U.value === "month" }
              ]),
              onKeydown: D[6] || (D[6] = at((j) => G("month"), ["enter"])),
              onClick: D[7] || (D[7] = (j) => G("month"))
            }, ue(e(T)(`el.datepicker.month${e(z) + 1}`)), 35), [
              [et, U.value === "date"]
            ]),
            x("span", {
              class: v(e(y).e("next-btn"))
            }, [
              Re(x("button", {
                type: "button",
                "aria-label": e(T)("el.datepicker.nextMonth"),
                class: v([e(m).e("icon-btn"), "arrow-right"]),
                onClick: D[8] || (D[8] = (j) => ge(!0))
              }, [
                R(e(ve), null, {
                  default: te(() => [
                    R(e(pt))
                  ]),
                  _: 1
                })
              ], 10, Rn), [
                [et, U.value === "date"]
              ]),
              x("button", {
                type: "button",
                "aria-label": e(T)("el.datepicker.nextYear"),
                class: v([e(m).e("icon-btn"), "d-arrow-right"]),
                onClick: D[9] || (D[9] = (j) => fe(!0))
              }, [
                R(e(ve), null, {
                  default: te(() => [
                    R(e(ut))
                  ]),
                  _: 1
                })
              ], 10, An)
            ], 2)
          ], 2), [
            [et, U.value !== "time"]
          ]),
          x("div", {
            class: v(e(m).e("content")),
            onKeydown: Ze
          }, [
            U.value === "date" ? (w(), ye(St, {
              key: 0,
              ref_key: "currentViewRef",
              ref: $,
              "selection-mode": e(b),
              date: d.value,
              "parsed-value": r.parsedValue,
              "disabled-date": e(o),
              "cell-class-name": e(h),
              onPick: le
            }, null, 8, ["selection-mode", "date", "parsed-value", "disabled-date", "cell-class-name"])) : ie("v-if", !0),
            U.value === "year" ? (w(), ye(Tn, {
              key: 1,
              ref_key: "currentViewRef",
              ref: $,
              date: d.value,
              "disabled-date": e(o),
              "parsed-value": r.parsedValue,
              onPick: F
            }, null, 8, ["date", "disabled-date", "parsed-value"])) : ie("v-if", !0),
            U.value === "month" ? (w(), ye(Pt, {
              key: 2,
              ref_key: "currentViewRef",
              ref: $,
              date: d.value,
              "parsed-value": r.parsedValue,
              "disabled-date": e(o),
              onPick: g
            }, null, 8, ["date", "parsed-value", "disabled-date"])) : ie("v-if", !0)
          ], 34)
        ], 2)
      ], 2),
      Re(x("div", {
        class: v(e(m).e("footer"))
      }, [
        Re(R(e(ft), {
          text: "",
          size: "small",
          class: v(e(m).e("link-btn")),
          onClick: pe
        }, {
          default: te(() => [
            Ue(ue(e(T)("el.datepicker.now")), 1)
          ]),
          _: 1
        }, 8, ["class"]), [
          [et, e(b) !== "dates"]
        ]),
        R(e(ft), {
          plain: "",
          size: "small",
          class: v(e(m).e("link-btn")),
          onClick: ae
        }, {
          default: te(() => [
            Ue(ue(e(T)("el.datepicker.confirm")), 1)
          ]),
          _: 1
        }, 8, ["class"])
      ], 2), [
        [et, e(de) && U.value === "date"]
      ])
    ], 2));
  }
});
var Nn = /* @__PURE__ */ Be(xn, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/date-picker/src/date-picker-com/panel-date-pick.vue"]]);
const En = Ce({
  ...ea,
  ...ta
}), Yn = (c) => {
  const { emit: i } = Kt(), n = Bt(), t = Lt();
  return (y) => {
    const P = wt(y.value) ? y.value() : y.value;
    if (P) {
      i("pick", [
        L(P[0]).locale(c.value),
        L(P[1]).locale(c.value)
      ]);
      return;
    }
    y.onClick && y.onClick({
      attrs: n,
      slots: t,
      emit: i
    });
  };
}, la = (c, {
  defaultValue: i,
  leftDate: n,
  rightDate: t,
  unit: m,
  onParsedValueChanged: y
}) => {
  const { emit: P } = Kt(), { pickerNs: E } = He(Mt), T = Me("date-range-picker"), { t: V, lang: Y } = Ne(), W = Yn(Y), C = K(), o = K(), h = K({
    endDate: null,
    selecting: !1
  }), f = (d) => {
    h.value = d;
  }, S = (d = !1) => {
    const _ = e(C), B = e(o);
    Ct([_, B]) && P("pick", [_, B], d);
  }, H = (d) => {
    h.value.selecting = d, d || (h.value.endDate = null);
  }, $ = () => {
    const [d, _] = na(e(i), {
      lang: e(Y),
      unit: m,
      unlinkPanels: c.unlinkPanels
    });
    C.value = void 0, o.value = void 0, n.value = d, t.value = _;
  };
  return $e(i, (d) => {
    d && $();
  }, { immediate: !0 }), $e(() => c.parsedValue, (d) => {
    if (De(d) && d.length === 2) {
      const [_, B] = d;
      C.value = _, n.value = _, o.value = B, y(e(C), e(o));
    } else
      $();
  }, { immediate: !0 }), {
    minDate: C,
    maxDate: o,
    rangeState: h,
    lang: Y,
    ppNs: E,
    drpNs: T,
    handleChangeRange: f,
    handleRangeConfirm: S,
    handleShortcutClick: W,
    onSelect: H,
    t: V
  };
}, Fn = ["onClick"], Bn = ["disabled"], Ln = ["disabled"], Kn = ["disabled"], Wn = ["disabled"], ct = "month", Un = /* @__PURE__ */ Ve({
  __name: "panel-date-range",
  props: En,
  emits: [
    "pick",
    "set-picker-option",
    "calendar-change",
    "panel-change"
  ],
  setup(c, { emit: i }) {
    const n = c, t = He("EP_PICKER_BASE"), {
      disabledDate: m,
      cellClassName: y,
      format: P,
      defaultTime: E,
      arrowControl: T,
      clearable: V
    } = t.props, Y = nt(t.props, "shortcuts"), W = nt(t.props, "defaultValue"), { lang: C } = Ne(), o = K(L().locale(C.value)), h = K(L().locale(C.value).add(1, ct)), {
      minDate: f,
      maxDate: S,
      rangeState: H,
      ppNs: $,
      drpNs: d,
      handleChangeRange: _,
      handleRangeConfirm: B,
      handleShortcutClick: z,
      onSelect: Q,
      t: N
    } = la(n, {
      defaultValue: W,
      leftDate: o,
      rightDate: h,
      unit: ct,
      onParsedValueChanged: a
    }), X = K({
      min: null,
      max: null
    }), Z = K({
      min: null,
      max: null
    }), ne = M(() => `${o.value.year()} ${N("el.datepicker.year")} ${N(`el.datepicker.month${o.value.month() + 1}`)}`), ke = M(() => `${h.value.year()} ${N("el.datepicker.year")} ${N(`el.datepicker.month${h.value.month() + 1}`)}`), q = M(() => o.value.year()), le = M(() => o.value.month()), ge = M(() => h.value.year()), fe = M(() => h.value.month()), U = M(() => !!Y.value.length), I = M(() => X.value.min !== null ? X.value.min : f.value ? f.value.format(g.value) : ""), u = M(() => X.value.max !== null ? X.value.max : S.value || f.value ? (S.value || f.value).format(g.value) : ""), b = M(() => Z.value.min !== null ? Z.value.min : f.value ? f.value.format(l.value) : ""), O = M(() => Z.value.max !== null ? Z.value.max : S.value || f.value ? (S.value || f.value).format(l.value) : ""), l = M(() => jt(P)), g = M(() => zt(P)), F = () => {
      o.value = o.value.subtract(1, "year"), n.unlinkPanels || (h.value = o.value.add(1, "month")), we("year");
    }, G = () => {
      o.value = o.value.subtract(1, "month"), n.unlinkPanels || (h.value = o.value.add(1, "month")), we("month");
    }, J = () => {
      n.unlinkPanels ? h.value = h.value.add(1, "year") : (o.value = o.value.add(1, "year"), h.value = o.value.add(1, "month")), we("year");
    }, de = () => {
      n.unlinkPanels ? h.value = h.value.add(1, "month") : (o.value = o.value.add(1, "month"), h.value = o.value.add(1, "month")), we("month");
    }, ae = () => {
      o.value = o.value.add(1, "year"), we("year");
    }, pe = () => {
      o.value = o.value.add(1, "month"), we("month");
    }, se = () => {
      h.value = h.value.subtract(1, "year"), we("year");
    }, Ee = () => {
      h.value = h.value.subtract(1, "month"), we("month");
    }, we = (s) => {
      i("panel-change", [o.value.toDate(), h.value.toDate()], s);
    }, Ie = M(() => {
      const s = (le.value + 1) % 12, p = le.value + 1 >= 12 ? 1 : 0;
      return n.unlinkPanels && new Date(q.value + p, s) < new Date(ge.value, fe.value);
    }), Se = M(() => n.unlinkPanels && ge.value * 12 + fe.value - (q.value * 12 + le.value + 1) >= 12), lt = M(() => !(f.value && S.value && !H.value.selecting && Ct([f.value, S.value]))), Ye = M(() => n.type === "datetime" || n.type === "datetimerange"), ee = (s, p) => {
      if (!!s)
        return E ? L(E[p] || E).locale(C.value).year(s.year()).month(s.month()).date(s.date()) : s;
    }, Le = (s, p = !0) => {
      const k = s.minDate, he = s.maxDate, ze = ee(k, 0), Xe = ee(he, 1);
      S.value === Xe && f.value === ze || (i("calendar-change", [k.toDate(), he && he.toDate()]), S.value = Xe, f.value = ze, !(!p || Ye.value) && B());
    }, _e = K(!1), Te = K(!1), Ke = () => {
      _e.value = !1;
    }, Ge = () => {
      Te.value = !1;
    }, Je = (s, p) => {
      X.value[p] = s;
      const k = L(s, g.value).locale(C.value);
      if (k.isValid()) {
        if (m && m(k.toDate()))
          return;
        p === "min" ? (o.value = k, f.value = (f.value || o.value).year(k.year()).month(k.month()).date(k.date()), n.unlinkPanels || (h.value = k.add(1, "month"), S.value = f.value.add(1, "month"))) : (h.value = k, S.value = (S.value || h.value).year(k.year()).month(k.month()).date(k.date()), n.unlinkPanels || (o.value = k.subtract(1, "month"), f.value = S.value.subtract(1, "month")));
      }
    }, We = (s, p) => {
      X.value[p] = null;
    }, Fe = (s, p) => {
      Z.value[p] = s;
      const k = L(s, l.value).locale(C.value);
      k.isValid() && (p === "min" ? (_e.value = !0, f.value = (f.value || o.value).hour(k.hour()).minute(k.minute()).second(k.second()), (!S.value || S.value.isBefore(f.value)) && (S.value = f.value)) : (Te.value = !0, S.value = (S.value || h.value).hour(k.hour()).minute(k.minute()).second(k.second()), h.value = S.value, S.value && S.value.isBefore(f.value) && (f.value = S.value)));
    }, Ze = (s, p) => {
      Z.value[p] = null, p === "min" ? (o.value = f.value, _e.value = !1) : (h.value = S.value, Te.value = !1);
    }, Qe = (s, p, k) => {
      Z.value.min || (s && (o.value = s, f.value = (f.value || o.value).hour(s.hour()).minute(s.minute()).second(s.second())), k || (_e.value = p), (!S.value || S.value.isBefore(f.value)) && (S.value = f.value, h.value = s));
    }, ce = (s, p, k) => {
      Z.value.max || (s && (h.value = s, S.value = (S.value || h.value).hour(s.hour()).minute(s.minute()).second(s.second())), k || (Te.value = p), S.value && S.value.isBefore(f.value) && (f.value = S.value));
    }, r = () => {
      o.value = na(e(W), {
        lang: e(C),
        unit: "month",
        unlinkPanels: n.unlinkPanels
      })[0], h.value = o.value.add(1, "month"), i("pick", null);
    }, D = (s) => De(s) ? s.map((p) => p.format(P)) : s.format(P), j = (s) => De(s) ? s.map((p) => L(p, P).locale(C.value)) : L(s, P).locale(C.value);
    function a(s, p) {
      if (n.unlinkPanels && p) {
        const k = (s == null ? void 0 : s.year()) || 0, he = (s == null ? void 0 : s.month()) || 0, ze = p.year(), Xe = p.month();
        h.value = k === ze && he === Xe ? p.add(1, ct) : p;
      } else
        h.value = o.value.add(1, ct), p && (h.value = h.value.hour(p.hour()).minute(p.minute()).second(p.second()));
    }
    return i("set-picker-option", ["isValidValue", Ct]), i("set-picker-option", ["parseUserInput", j]), i("set-picker-option", ["formatToString", D]), i("set-picker-option", ["handleClear", r]), (s, p) => (w(), A("div", {
      class: v([
        e($).b(),
        e(d).b(),
        {
          "has-sidebar": s.$slots.sidebar || e(U),
          "has-time": e(Ye)
        }
      ])
    }, [
      x("div", {
        class: v(e($).e("body-wrapper"))
      }, [
        ot(s.$slots, "sidebar", {
          class: v(e($).e("sidebar"))
        }),
        e(U) ? (w(), A("div", {
          key: 0,
          class: v(e($).e("sidebar"))
        }, [
          (w(!0), A(me, null, Pe(e(Y), (k, he) => (w(), A("button", {
            key: he,
            type: "button",
            class: v(e($).e("shortcut")),
            onClick: (ze) => e(z)(k)
          }, ue(k.text), 11, Fn))), 128))
        ], 2)) : ie("v-if", !0),
        x("div", {
          class: v(e($).e("body"))
        }, [
          e(Ye) ? (w(), A("div", {
            key: 0,
            class: v(e(d).e("time-header"))
          }, [
            x("span", {
              class: v(e(d).e("editors-wrap"))
            }, [
              x("span", {
                class: v(e(d).e("time-picker-wrap"))
              }, [
                R(e(je), {
                  size: "small",
                  disabled: e(H).selecting,
                  placeholder: e(N)("el.datepicker.startDate"),
                  class: v(e(d).e("editor")),
                  "model-value": e(I),
                  "validate-event": !1,
                  onInput: p[0] || (p[0] = (k) => Je(k, "min")),
                  onChange: p[1] || (p[1] = (k) => We(k, "min"))
                }, null, 8, ["disabled", "placeholder", "class", "model-value"])
              ], 2),
              Re((w(), A("span", {
                class: v(e(d).e("time-picker-wrap"))
              }, [
                R(e(je), {
                  size: "small",
                  class: v(e(d).e("editor")),
                  disabled: e(H).selecting,
                  placeholder: e(N)("el.datepicker.startTime"),
                  "model-value": e(b),
                  "validate-event": !1,
                  onFocus: p[2] || (p[2] = (k) => _e.value = !0),
                  onInput: p[3] || (p[3] = (k) => Fe(k, "min")),
                  onChange: p[4] || (p[4] = (k) => Ze(k, "min"))
                }, null, 8, ["class", "disabled", "placeholder", "model-value"]),
                R(e(Dt), {
                  visible: _e.value,
                  format: e(l),
                  "datetime-role": "start",
                  "time-arrow-control": e(T),
                  "parsed-value": o.value,
                  onPick: Qe
                }, null, 8, ["visible", "format", "time-arrow-control", "parsed-value"])
              ], 2)), [
                [e(yt), Ke]
              ])
            ], 2),
            x("span", null, [
              R(e(ve), null, {
                default: te(() => [
                  R(e(pt))
                ]),
                _: 1
              })
            ]),
            x("span", {
              class: v([e(d).e("editors-wrap"), "is-right"])
            }, [
              x("span", {
                class: v(e(d).e("time-picker-wrap"))
              }, [
                R(e(je), {
                  size: "small",
                  class: v(e(d).e("editor")),
                  disabled: e(H).selecting,
                  placeholder: e(N)("el.datepicker.endDate"),
                  "model-value": e(u),
                  readonly: !e(f),
                  "validate-event": !1,
                  onInput: p[5] || (p[5] = (k) => Je(k, "max")),
                  onChange: p[6] || (p[6] = (k) => We(k, "max"))
                }, null, 8, ["class", "disabled", "placeholder", "model-value", "readonly"])
              ], 2),
              Re((w(), A("span", {
                class: v(e(d).e("time-picker-wrap"))
              }, [
                R(e(je), {
                  size: "small",
                  class: v(e(d).e("editor")),
                  disabled: e(H).selecting,
                  placeholder: e(N)("el.datepicker.endTime"),
                  "model-value": e(O),
                  readonly: !e(f),
                  "validate-event": !1,
                  onFocus: p[7] || (p[7] = (k) => e(f) && (Te.value = !0)),
                  onInput: p[8] || (p[8] = (k) => Fe(k, "max")),
                  onChange: p[9] || (p[9] = (k) => Ze(k, "max"))
                }, null, 8, ["class", "disabled", "placeholder", "model-value", "readonly"]),
                R(e(Dt), {
                  "datetime-role": "end",
                  visible: Te.value,
                  format: e(l),
                  "time-arrow-control": e(T),
                  "parsed-value": h.value,
                  onPick: ce
                }, null, 8, ["visible", "format", "time-arrow-control", "parsed-value"])
              ], 2)), [
                [e(yt), Ge]
              ])
            ], 2)
          ], 2)) : ie("v-if", !0),
          x("div", {
            class: v([[e($).e("content"), e(d).e("content")], "is-left"])
          }, [
            x("div", {
              class: v(e(d).e("header"))
            }, [
              x("button", {
                type: "button",
                class: v([e($).e("icon-btn"), "d-arrow-left"]),
                onClick: F
              }, [
                R(e(ve), null, {
                  default: te(() => [
                    R(e(rt))
                  ]),
                  _: 1
                })
              ], 2),
              x("button", {
                type: "button",
                class: v([e($).e("icon-btn"), "arrow-left"]),
                onClick: G
              }, [
                R(e(ve), null, {
                  default: te(() => [
                    R(e(kt))
                  ]),
                  _: 1
                })
              ], 2),
              s.unlinkPanels ? (w(), A("button", {
                key: 0,
                type: "button",
                disabled: !e(Se),
                class: v([[e($).e("icon-btn"), { "is-disabled": !e(Se) }], "d-arrow-right"]),
                onClick: ae
              }, [
                R(e(ve), null, {
                  default: te(() => [
                    R(e(ut))
                  ]),
                  _: 1
                })
              ], 10, Bn)) : ie("v-if", !0),
              s.unlinkPanels ? (w(), A("button", {
                key: 1,
                type: "button",
                disabled: !e(Ie),
                class: v([[
                  e($).e("icon-btn"),
                  { "is-disabled": !e(Ie) }
                ], "arrow-right"]),
                onClick: pe
              }, [
                R(e(ve), null, {
                  default: te(() => [
                    R(e(pt))
                  ]),
                  _: 1
                })
              ], 10, Ln)) : ie("v-if", !0),
              x("div", null, ue(e(ne)), 1)
            ], 2),
            R(St, {
              "selection-mode": "range",
              date: o.value,
              "min-date": e(f),
              "max-date": e(S),
              "range-state": e(H),
              "disabled-date": e(m),
              "cell-class-name": e(y),
              onChangerange: e(_),
              onPick: Le,
              onSelect: e(Q)
            }, null, 8, ["date", "min-date", "max-date", "range-state", "disabled-date", "cell-class-name", "onChangerange", "onSelect"])
          ], 2),
          x("div", {
            class: v([[e($).e("content"), e(d).e("content")], "is-right"])
          }, [
            x("div", {
              class: v(e(d).e("header"))
            }, [
              s.unlinkPanels ? (w(), A("button", {
                key: 0,
                type: "button",
                disabled: !e(Se),
                class: v([[e($).e("icon-btn"), { "is-disabled": !e(Se) }], "d-arrow-left"]),
                onClick: se
              }, [
                R(e(ve), null, {
                  default: te(() => [
                    R(e(rt))
                  ]),
                  _: 1
                })
              ], 10, Kn)) : ie("v-if", !0),
              s.unlinkPanels ? (w(), A("button", {
                key: 1,
                type: "button",
                disabled: !e(Ie),
                class: v([[
                  e($).e("icon-btn"),
                  { "is-disabled": !e(Ie) }
                ], "arrow-left"]),
                onClick: Ee
              }, [
                R(e(ve), null, {
                  default: te(() => [
                    R(e(kt))
                  ]),
                  _: 1
                })
              ], 10, Wn)) : ie("v-if", !0),
              x("button", {
                type: "button",
                class: v([e($).e("icon-btn"), "d-arrow-right"]),
                onClick: J
              }, [
                R(e(ve), null, {
                  default: te(() => [
                    R(e(ut))
                  ]),
                  _: 1
                })
              ], 2),
              x("button", {
                type: "button",
                class: v([e($).e("icon-btn"), "arrow-right"]),
                onClick: de
              }, [
                R(e(ve), null, {
                  default: te(() => [
                    R(e(pt))
                  ]),
                  _: 1
                })
              ], 2),
              x("div", null, ue(e(ke)), 1)
            ], 2),
            R(St, {
              "selection-mode": "range",
              date: h.value,
              "min-date": e(f),
              "max-date": e(S),
              "range-state": e(H),
              "disabled-date": e(m),
              "cell-class-name": e(y),
              onChangerange: e(_),
              onPick: Le,
              onSelect: e(Q)
            }, null, 8, ["date", "min-date", "max-date", "range-state", "disabled-date", "cell-class-name", "onChangerange", "onSelect"])
          ], 2)
        ], 2)
      ], 2),
      e(Ye) ? (w(), A("div", {
        key: 0,
        class: v(e($).e("footer"))
      }, [
        e(V) ? (w(), ye(e(ft), {
          key: 0,
          text: "",
          size: "small",
          class: v(e($).e("link-btn")),
          onClick: r
        }, {
          default: te(() => [
            Ue(ue(e(N)("el.datepicker.clear")), 1)
          ]),
          _: 1
        }, 8, ["class"])) : ie("v-if", !0),
        R(e(ft), {
          plain: "",
          size: "small",
          class: v(e($).e("link-btn")),
          disabled: e(lt),
          onClick: p[10] || (p[10] = (k) => e(B)(!1))
        }, {
          default: te(() => [
            Ue(ue(e(N)("el.datepicker.confirm")), 1)
          ]),
          _: 1
        }, 8, ["class", "disabled"])
      ], 2)) : ie("v-if", !0)
    ], 2));
  }
});
var Hn = /* @__PURE__ */ Be(Un, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/date-picker/src/date-picker-com/panel-date-range.vue"]]);
const zn = Ce({
  ...ta
}), jn = ["pick", "set-picker-option"], qn = ({
  unlinkPanels: c,
  leftDate: i,
  rightDate: n
}) => {
  const { t } = Ne(), m = () => {
    i.value = i.value.subtract(1, "year"), c.value || (n.value = n.value.subtract(1, "year"));
  }, y = () => {
    c.value || (i.value = i.value.add(1, "year")), n.value = n.value.add(1, "year");
  }, P = () => {
    i.value = i.value.add(1, "year");
  }, E = () => {
    n.value = n.value.subtract(1, "year");
  }, T = M(() => `${i.value.year()} ${t("el.datepicker.year")}`), V = M(() => `${n.value.year()} ${t("el.datepicker.year")}`), Y = M(() => i.value.year()), W = M(() => n.value.year() === i.value.year() ? i.value.year() + 1 : n.value.year());
  return {
    leftPrevYear: m,
    rightNextYear: y,
    leftNextYear: P,
    rightPrevYear: E,
    leftLabel: T,
    rightLabel: V,
    leftYear: Y,
    rightYear: W
  };
}, Gn = ["onClick"], Jn = ["disabled"], Zn = ["disabled"], dt = "year", Qn = Ve({
  name: "DatePickerMonthRange"
}), Xn = /* @__PURE__ */ Ve({
  ...Qn,
  props: zn,
  emits: jn,
  setup(c, { emit: i }) {
    const n = c, { lang: t } = Ne(), m = He("EP_PICKER_BASE"), { shortcuts: y, disabledDate: P, format: E } = m.props, T = nt(m.props, "defaultValue"), V = K(L().locale(t.value)), Y = K(L().locale(t.value).add(1, dt)), {
      minDate: W,
      maxDate: C,
      rangeState: o,
      ppNs: h,
      drpNs: f,
      handleChangeRange: S,
      handleRangeConfirm: H,
      handleShortcutClick: $,
      onSelect: d
    } = la(n, {
      defaultValue: T,
      leftDate: V,
      rightDate: Y,
      unit: dt,
      onParsedValueChanged: fe
    }), _ = M(() => !!y.length), {
      leftPrevYear: B,
      rightNextYear: z,
      leftNextYear: Q,
      rightPrevYear: N,
      leftLabel: X,
      rightLabel: Z,
      leftYear: ne,
      rightYear: ke
    } = qn({
      unlinkPanels: nt(n, "unlinkPanels"),
      leftDate: V,
      rightDate: Y
    }), q = M(() => n.unlinkPanels && ke.value > ne.value + 1), le = (U, I = !0) => {
      const u = U.minDate, b = U.maxDate;
      C.value === b && W.value === u || (C.value = b, W.value = u, I && H());
    }, ge = (U) => U.map((I) => I.format(E));
    function fe(U, I) {
      if (n.unlinkPanels && I) {
        const u = (U == null ? void 0 : U.year()) || 0, b = I.year();
        Y.value = u === b ? I.add(1, dt) : I;
      } else
        Y.value = V.value.add(1, dt);
    }
    return i("set-picker-option", ["formatToString", ge]), (U, I) => (w(), A("div", {
      class: v([
        e(h).b(),
        e(f).b(),
        {
          "has-sidebar": Boolean(U.$slots.sidebar) || e(_)
        }
      ])
    }, [
      x("div", {
        class: v(e(h).e("body-wrapper"))
      }, [
        ot(U.$slots, "sidebar", {
          class: v(e(h).e("sidebar"))
        }),
        e(_) ? (w(), A("div", {
          key: 0,
          class: v(e(h).e("sidebar"))
        }, [
          (w(!0), A(me, null, Pe(e(y), (u, b) => (w(), A("button", {
            key: b,
            type: "button",
            class: v(e(h).e("shortcut")),
            onClick: (O) => e($)(u)
          }, ue(u.text), 11, Gn))), 128))
        ], 2)) : ie("v-if", !0),
        x("div", {
          class: v(e(h).e("body"))
        }, [
          x("div", {
            class: v([[e(h).e("content"), e(f).e("content")], "is-left"])
          }, [
            x("div", {
              class: v(e(f).e("header"))
            }, [
              x("button", {
                type: "button",
                class: v([e(h).e("icon-btn"), "d-arrow-left"]),
                onClick: I[0] || (I[0] = (...u) => e(B) && e(B)(...u))
              }, [
                R(e(ve), null, {
                  default: te(() => [
                    R(e(rt))
                  ]),
                  _: 1
                })
              ], 2),
              U.unlinkPanels ? (w(), A("button", {
                key: 0,
                type: "button",
                disabled: !e(q),
                class: v([[
                  e(h).e("icon-btn"),
                  { [e(h).is("disabled")]: !e(q) }
                ], "d-arrow-right"]),
                onClick: I[1] || (I[1] = (...u) => e(Q) && e(Q)(...u))
              }, [
                R(e(ve), null, {
                  default: te(() => [
                    R(e(ut))
                  ]),
                  _: 1
                })
              ], 10, Jn)) : ie("v-if", !0),
              x("div", null, ue(e(X)), 1)
            ], 2),
            R(Pt, {
              "selection-mode": "range",
              date: V.value,
              "min-date": e(W),
              "max-date": e(C),
              "range-state": e(o),
              "disabled-date": e(P),
              onChangerange: e(S),
              onPick: le,
              onSelect: e(d)
            }, null, 8, ["date", "min-date", "max-date", "range-state", "disabled-date", "onChangerange", "onSelect"])
          ], 2),
          x("div", {
            class: v([[e(h).e("content"), e(f).e("content")], "is-right"])
          }, [
            x("div", {
              class: v(e(f).e("header"))
            }, [
              U.unlinkPanels ? (w(), A("button", {
                key: 0,
                type: "button",
                disabled: !e(q),
                class: v([[e(h).e("icon-btn"), { "is-disabled": !e(q) }], "d-arrow-left"]),
                onClick: I[2] || (I[2] = (...u) => e(N) && e(N)(...u))
              }, [
                R(e(ve), null, {
                  default: te(() => [
                    R(e(rt))
                  ]),
                  _: 1
                })
              ], 10, Zn)) : ie("v-if", !0),
              x("button", {
                type: "button",
                class: v([e(h).e("icon-btn"), "d-arrow-right"]),
                onClick: I[3] || (I[3] = (...u) => e(z) && e(z)(...u))
              }, [
                R(e(ve), null, {
                  default: te(() => [
                    R(e(ut))
                  ]),
                  _: 1
                })
              ], 2),
              x("div", null, ue(e(Z)), 1)
            ], 2),
            R(Pt, {
              "selection-mode": "range",
              date: Y.value,
              "min-date": e(W),
              "max-date": e(C),
              "range-state": e(o),
              "disabled-date": e(P),
              onChangerange: e(S),
              onPick: le,
              onSelect: e(d)
            }, null, 8, ["date", "min-date", "max-date", "range-state", "disabled-date", "onChangerange", "onSelect"])
          ], 2)
        ], 2)
      ], 2)
    ], 2));
  }
});
var el = /* @__PURE__ */ Be(Xn, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/date-picker/src/date-picker-com/panel-month-range.vue"]]);
const tl = function(c) {
  switch (c) {
    case "daterange":
    case "datetimerange":
      return Hn;
    case "monthrange":
      return el;
    default:
      return Nn;
  }
};
L.extend(Ga);
L.extend(Ja);
L.extend(Oa);
L.extend(Za);
L.extend(Qa);
L.extend(Xa);
L.extend(en);
L.extend(tn);
var al = Ve({
  name: "ElDatePicker",
  install: null,
  props: {
    ...Gt,
    ...an
  },
  emits: ["update:modelValue"],
  setup(c, {
    expose: i,
    emit: n,
    slots: t
  }) {
    const m = Me("picker-panel");
    gt("ElPopperOptions", ua(nt(c, "popperOptions"))), gt(Mt, {
      slots: t,
      pickerNs: m
    });
    const y = K();
    i({
      focus: (T = !0) => {
        var V;
        (V = y.value) == null || V.focus(T);
      },
      handleOpen: () => {
        var T;
        (T = y.value) == null || T.handleOpen();
      },
      handleClose: () => {
        var T;
        (T = y.value) == null || T.handleClose();
      }
    });
    const E = (T) => {
      n("update:modelValue", T);
    };
    return () => {
      var T;
      const V = (T = c.format) != null ? T : Ia[c.type] || tt, Y = tl(c.type);
      return R(Ya, Ft(c, {
        format: V,
        type: c.type,
        ref: y,
        "onUpdate:modelValue": E
      }), {
        default: (W) => R(Y, W, null),
        "range-separator": t["range-separator"]
      });
    };
  }
});
const vt = al;
vt.install = (c) => {
  c.component(vt.name, vt);
};
const pl = vt;
export {
  Ya as C,
  At as D,
  pl as E,
  Mt as R,
  ja as T,
  cl as W,
  Ba as a,
  La as b,
  Oa as c,
  Gt as d,
  Dt as e,
  dl as f,
  qe as g,
  mt as h,
  xt as i,
  zt as j,
  jt as k,
  Ga as l,
  Yt as m,
  ht as n,
  tt as o,
  Et as p,
  Ia as q,
  Ht as r,
  Rt as s,
  Ra as t,
  Ka as u,
  Nt as v,
  $a as w
};
