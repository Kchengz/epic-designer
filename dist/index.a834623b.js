import { defineComponent as n, computed as o, provide as p, openBlock as c, createBlock as m, resolveDynamicComponent as f, normalizeClass as g, unref as r, normalizeStyle as d, withCtx as y, renderSlot as w } from "vue";
import { r as _ } from "./constants.7f69fb4e.js";
import { b as v, h as R, _ as b, w as h } from "./useElementPlus.5a2e6faa.js";
const C = [
  "start",
  "center",
  "end",
  "space-around",
  "space-between",
  "space-evenly"
], S = ["top", "middle", "bottom"], j = v({
  tag: {
    type: String,
    default: "div"
  },
  gutter: {
    type: Number,
    default: 0
  },
  justify: {
    type: String,
    values: C,
    default: "start"
  },
  align: {
    type: String,
    values: S,
    default: "top"
  }
}), k = n({
  name: "ElRow"
}), x = /* @__PURE__ */ n({
  ...k,
  props: j,
  setup(a) {
    const t = a, s = R("row"), l = o(() => t.gutter);
    p(_, {
      gutter: l
    });
    const i = o(() => {
      const e = {};
      return t.gutter && (e.marginRight = e.marginLeft = `-${t.gutter / 2}px`), e;
    }), u = o(() => [
      s.b(),
      s.is(`justify-${t.justify}`, t.justify !== "start"),
      s.is(`align-${t.align}`, t.align !== "top")
    ]);
    return (e, E) => (c(), m(f(e.tag), {
      class: g(r(u)),
      style: d(r(i))
    }, {
      default: y(() => [
        w(e.$slots, "default")
      ]),
      _: 3
    }, 8, ["class", "style"]));
  }
});
var $ = /* @__PURE__ */ b(x, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/row/src/row.vue"]]);
const N = h($);
export {
  N as E,
  S as R,
  C as a,
  j as r
};
