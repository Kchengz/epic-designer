import { defineComponent as l, h as m, renderSlot as n } from "vue";
import { ElCard as h } from "element-plus";
const f = l({
  props: {
    componentSchema: {
      type: Object,
      required: !0,
      default: () => ({})
    }
  },
  setup(d, { attrs: p, slots: e }) {
    return () => {
      var a;
      const t = {
        ...d.componentSchema,
        header: ((a = d.componentSchema) == null ? void 0 : a.label) ?? ""
      }, o = t.children ?? [];
      delete t.children;
      let r = null;
      return o.length ? r = () => o.map(
        (c) => n(e, "node", { componentSchema: c })
      ) : r = () => [n(e, "default")], m(h, t, {
        default: () => n(e, "edit-node", {}, r),
        header: () => n(e, "header")
      });
    };
  }
});
export {
  f as default
};
