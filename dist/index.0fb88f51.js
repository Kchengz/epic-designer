import { computed as v, inject as K, ref as R, useSlots as A, Text as U, defineComponent as _, openBlock as m, createElementBlock as h, normalizeClass as S, unref as e, normalizeStyle as j, Fragment as M, renderSlot as C, createBlock as B, withCtx as V, resolveDynamicComponent as z, createCommentVNode as w, provide as O, reactive as q, toRef as I } from "vue";
import { R as H, bR as J, a5 as L, a6 as Q, y as G, b as W, e as X, K as E, F as Y, h as N, o as T, _ as F, w as Z, O as oo } from "./useElementPlus.5a2e6faa.js";
import { T as eo } from "./index.1e43ecc1.js";
const P = Symbol("buttonGroupContextKey"), to = (t, r) => {
  H({
    from: "type.text",
    replacement: "link",
    version: "3.0.0",
    scope: "props",
    ref: "https://element-plus.org/en-US/component/button.html#button-attributes"
  }, v(() => t.type === "text"));
  const s = K(P, void 0), l = J("button"), { form: a } = L(), o = Q(v(() => s == null ? void 0 : s.size)), c = G(), f = R(), d = A(), u = v(() => t.type || (s == null ? void 0 : s.type) || ""), k = v(() => {
    var i, b, g;
    return (g = (b = t.autoInsertSpace) != null ? b : (i = l.value) == null ? void 0 : i.autoInsertSpace) != null ? g : !1;
  }), y = v(() => {
    var i;
    const b = (i = d.default) == null ? void 0 : i.call(d);
    if (k.value && (b == null ? void 0 : b.length) === 1) {
      const g = b[0];
      if ((g == null ? void 0 : g.type) === U) {
        const D = g.children;
        return /^\p{Unified_Ideograph}{2}$/u.test(D.trim());
      }
    }
    return !1;
  });
  return {
    _disabled: c,
    _size: o,
    _type: u,
    _ref: f,
    shouldAddSpace: y,
    handleClick: (i) => {
      t.nativeType === "reset" && (a == null || a.resetFields()), r("click", i);
    }
  };
}, no = [
  "default",
  "primary",
  "success",
  "warning",
  "info",
  "danger",
  "text",
  ""
], so = ["button", "submit", "reset"], $ = W({
  size: X,
  disabled: Boolean,
  type: {
    type: String,
    values: no,
    default: ""
  },
  icon: {
    type: E
  },
  nativeType: {
    type: String,
    values: so,
    default: "button"
  },
  loading: Boolean,
  loadingIcon: {
    type: E,
    default: () => Y
  },
  plain: Boolean,
  text: Boolean,
  link: Boolean,
  bg: Boolean,
  autofocus: Boolean,
  round: Boolean,
  circle: Boolean,
  color: String,
  dark: Boolean,
  autoInsertSpace: {
    type: Boolean,
    default: void 0
  }
}), lo = {
  click: (t) => t instanceof MouseEvent
};
function p(t, r = 20) {
  return t.mix("#141414", r).toString();
}
function ao(t) {
  const r = G(), s = N("button");
  return v(() => {
    let l = {};
    const a = t.color;
    if (a) {
      const o = new eo(a), c = t.dark ? o.tint(20).toString() : p(o, 20);
      if (t.plain)
        l = s.cssVarBlock({
          "bg-color": t.dark ? p(o, 90) : o.tint(90).toString(),
          "text-color": a,
          "border-color": t.dark ? p(o, 50) : o.tint(50).toString(),
          "hover-text-color": `var(${s.cssVarName("color-white")})`,
          "hover-bg-color": a,
          "hover-border-color": a,
          "active-bg-color": c,
          "active-text-color": `var(${s.cssVarName("color-white")})`,
          "active-border-color": c
        }), r.value && (l[s.cssVarBlockName("disabled-bg-color")] = t.dark ? p(o, 90) : o.tint(90).toString(), l[s.cssVarBlockName("disabled-text-color")] = t.dark ? p(o, 50) : o.tint(50).toString(), l[s.cssVarBlockName("disabled-border-color")] = t.dark ? p(o, 80) : o.tint(80).toString());
      else {
        const f = t.dark ? p(o, 30) : o.tint(30).toString(), d = o.isDark() ? `var(${s.cssVarName("color-white")})` : `var(${s.cssVarName("color-black")})`;
        if (l = s.cssVarBlock({
          "bg-color": a,
          "text-color": d,
          "border-color": a,
          "hover-bg-color": f,
          "hover-text-color": d,
          "hover-border-color": f,
          "active-bg-color": c,
          "active-border-color": c
        }), r.value) {
          const u = t.dark ? p(o, 50) : o.tint(50).toString();
          l[s.cssVarBlockName("disabled-bg-color")] = u, l[s.cssVarBlockName("disabled-text-color")] = t.dark ? "rgba(255, 255, 255, 0.5)" : `var(${s.cssVarName("color-white")})`, l[s.cssVarBlockName("disabled-border-color")] = u;
        }
      }
    }
    return l;
  });
}
const ro = ["aria-disabled", "disabled", "autofocus", "type"], io = _({
  name: "ElButton"
}), co = /* @__PURE__ */ _({
  ...io,
  props: $,
  emits: lo,
  setup(t, { expose: r, emit: s }) {
    const l = t, a = ao(l), o = N("button"), { _ref: c, _size: f, _type: d, _disabled: u, shouldAddSpace: k, handleClick: y } = to(l, s);
    return r({
      ref: c,
      size: f,
      type: d,
      disabled: u,
      shouldAddSpace: k
    }), (n, i) => (m(), h("button", {
      ref_key: "_ref",
      ref: c,
      class: S([
        e(o).b(),
        e(o).m(e(d)),
        e(o).m(e(f)),
        e(o).is("disabled", e(u)),
        e(o).is("loading", n.loading),
        e(o).is("plain", n.plain),
        e(o).is("round", n.round),
        e(o).is("circle", n.circle),
        e(o).is("text", n.text),
        e(o).is("link", n.link),
        e(o).is("has-bg", n.bg)
      ]),
      "aria-disabled": e(u) || n.loading,
      disabled: e(u) || n.loading,
      autofocus: n.autofocus,
      type: n.nativeType,
      style: j(e(a)),
      onClick: i[0] || (i[0] = (...b) => e(y) && e(y)(...b))
    }, [
      n.loading ? (m(), h(M, { key: 0 }, [
        n.$slots.loading ? C(n.$slots, "loading", { key: 0 }) : (m(), B(e(T), {
          key: 1,
          class: S(e(o).is("loading"))
        }, {
          default: V(() => [
            (m(), B(z(n.loadingIcon)))
          ]),
          _: 1
        }, 8, ["class"]))
      ], 64)) : n.icon || n.$slots.icon ? (m(), B(e(T), { key: 1 }, {
        default: V(() => [
          n.icon ? (m(), B(z(n.icon), { key: 0 })) : C(n.$slots, "icon", { key: 1 })
        ]),
        _: 3
      })) : w("v-if", !0),
      n.$slots.default ? (m(), h("span", {
        key: 2,
        class: S({ [e(o).em("text", "expand")]: e(k) })
      }, [
        C(n.$slots, "default")
      ], 2)) : w("v-if", !0)
    ], 14, ro));
  }
});
var uo = /* @__PURE__ */ F(co, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/button/src/button.vue"]]);
const bo = {
  size: $.size,
  type: $.type
}, po = _({
  name: "ElButtonGroup"
}), mo = /* @__PURE__ */ _({
  ...po,
  props: bo,
  setup(t) {
    const r = t;
    O(P, q({
      size: I(r, "size"),
      type: I(r, "type")
    }));
    const s = N("button");
    return (l, a) => (m(), h("div", {
      class: S(`${e(s).b("group")}`)
    }, [
      C(l.$slots, "default")
    ], 2));
  }
});
var x = /* @__PURE__ */ F(mo, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/button/src/button-group.vue"]]);
const ko = Z(uo, {
  ButtonGroup: x
}), yo = oo(x);
export {
  yo as E,
  ko as a,
  no as b,
  lo as c,
  so as d,
  $ as e,
  P as f
};
