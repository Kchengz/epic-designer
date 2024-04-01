import { defineComponent as p, h as r, renderSlot as c } from "vue";
import { ElButton as a } from "element-plus";
const d = p({
  props: {
    componentSchema: {
      type: Object,
      default: () => ({})
    }
  },
  setup(t, { emit: u, slots: n }) {
    return () => {
      var e;
      const m = {
        ...(e = t.componentSchema) == null ? void 0 : e.componentProps
      };
      return r(a, m, {
        default: () => c(n, "default", {}, () => {
          var o;
          return [(o = t.componentSchema) == null ? void 0 : o.label];
        })
      });
    };
  }
});
export {
  d as default
};
