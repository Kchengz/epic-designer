import { defineComponent as o, openBlock as c, createElementBlock as a, normalizeClass as p } from "vue";
const m = /* @__PURE__ */ o({
  name: "EIcon",
  __name: "icon",
  props: {
    name: {},
    prefix: { default: "epic-" }
  },
  setup(n) {
    const e = n;
    return (r, t) => (c(), a("span", {
      class: p(["iconfont", e.prefix + e.name])
    }, null, 2));
  }
});
export {
  m as _
};
