import { defineComponent as m, inject as h, computed as r, openBlock as g, createBlock as _, resolveDynamicComponent as $, normalizeClass as N, unref as p, normalizeStyle as v, withCtx as j, renderSlot as x } from "vue";
import { b as C, d as o, av as u, h as O, f, v as E, _ as w, w as k } from "./useElementPlus.5a2e6faa.js";
import { r as S } from "./constants.7f69fb4e.js";
const B = C({
  tag: {
    type: String,
    default: "div"
  },
  span: {
    type: Number,
    default: 24
  },
  offset: {
    type: Number,
    default: 0
  },
  pull: {
    type: Number,
    default: 0
  },
  push: {
    type: Number,
    default: 0
  },
  xs: {
    type: o([Number, Object]),
    default: () => u({})
  },
  sm: {
    type: o([Number, Object]),
    default: () => u({})
  },
  md: {
    type: o([Number, Object]),
    default: () => u({})
  },
  lg: {
    type: o([Number, Object]),
    default: () => u({})
  },
  xl: {
    type: o([Number, Object]),
    default: () => u({})
  }
}), K = m({
  name: "ElCol"
}), P = /* @__PURE__ */ m({
  ...K,
  props: B,
  setup(d) {
    const s = d, { gutter: n } = h(S, { gutter: r(() => 0) }), l = O("col"), b = r(() => {
      const e = {};
      return n.value && (e.paddingLeft = e.paddingRight = `${n.value / 2}px`), e;
    }), i = r(() => {
      const e = [];
      return ["span", "offset", "pull", "push"].forEach((t) => {
        const a = s[t];
        f(a) && (t === "span" ? e.push(l.b(`${s[t]}`)) : a > 0 && e.push(l.b(`${t}-${s[t]}`)));
      }), ["xs", "sm", "md", "lg", "xl"].forEach((t) => {
        f(s[t]) ? e.push(l.b(`${t}-${s[t]}`)) : E(s[t]) && Object.entries(s[t]).forEach(([a, c]) => {
          e.push(a !== "span" ? l.b(`${t}-${a}-${c}`) : l.b(`${t}-${c}`));
        });
      }), n.value && e.push(l.is("guttered")), [l.b(), e];
    });
    return (e, y) => (g(), _($(e.tag), {
      class: N(p(i)),
      style: v(p(b))
    }, {
      default: j(() => [
        x(e.$slots, "default")
      ]),
      _: 3
    }, 8, ["class", "style"]));
  }
});
var D = /* @__PURE__ */ w(P, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/col/src/col.vue"]]);
const q = k(D);
export {
  q as E,
  B as c
};
