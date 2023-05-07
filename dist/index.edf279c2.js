import { defineComponent as d, openBlock as o, createElementBlock as t, normalizeClass as s, unref as r, renderSlot as l, createTextVNode as n, toDisplayString as p, createCommentVNode as c, createElementVNode as i, normalizeStyle as m } from "vue";
import { b as u, d as y, h as f, _ as h, w as v } from "./useElementPlus.5a2e6faa.js";
const w = u({
  header: {
    type: String,
    default: ""
  },
  bodyStyle: {
    type: y([String, Object, Array]),
    default: ""
  },
  shadow: {
    type: String,
    values: ["always", "hover", "never"],
    default: "always"
  }
}), S = d({
  name: "ElCard"
}), _ = /* @__PURE__ */ d({
  ...S,
  props: w,
  setup(C) {
    const a = f("card");
    return (e, g) => (o(), t("div", {
      class: s([r(a).b(), r(a).is(`${e.shadow}-shadow`)])
    }, [
      e.$slots.header || e.header ? (o(), t("div", {
        key: 0,
        class: s(r(a).e("header"))
      }, [
        l(e.$slots, "header", {}, () => [
          n(p(e.header), 1)
        ])
      ], 2)) : c("v-if", !0),
      i("div", {
        class: s(r(a).e("body")),
        style: m(e.bodyStyle)
      }, [
        l(e.$slots, "default")
      ], 6)
    ], 2));
  }
});
var b = /* @__PURE__ */ h(_, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/card/src/card.vue"]]);
const N = v(b);
export {
  N as E,
  w as c
};
