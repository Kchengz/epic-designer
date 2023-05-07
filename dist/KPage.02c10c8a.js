import { defineComponent as l, computed as u, openBlock as r, createElementBlock as t, renderSlot as o, Fragment as i, renderList as p, unref as a } from "vue";
const m = { class: "h-full box-border bg-white" }, _ = /* @__PURE__ */ l({
  __name: "KPage",
  props: {
    record: {
      type: Object,
      require: !0
    }
  },
  setup(n) {
    const c = n, s = u(() => {
      var e;
      return (e = c.record.children) != null ? e : [];
    });
    return (e, f) => (r(), t("div", m, [
      o(e.$slots, "edit-node", {}, () => [
        (r(!0), t(i, null, p(a(s), (d) => o(e.$slots, "node", { record: d })), 256))
      ])
    ]));
  }
});
export {
  _ as default
};
