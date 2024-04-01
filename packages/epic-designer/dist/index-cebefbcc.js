import { defineComponent as d, computed as m, openBlock as n, createElementBlock as o, renderSlot as t, Fragment as p, renderList as a } from "vue";
const u = { class: "h-full box-border bg-white wh-full!" }, f = /* @__PURE__ */ d({
  __name: "index",
  props: {
    componentSchema: {}
  },
  setup(r) {
    const c = r, l = m(() => c.componentSchema.children ?? []);
    return (e, i) => (n(), o("div", u, [
      t(e.$slots, "edit-node", {}, () => [
        (n(!0), o(p, null, a(l.value, (s) => t(e.$slots, "node", { componentSchema: s })), 256))
      ])
    ]));
  }
});
export {
  f as default
};
