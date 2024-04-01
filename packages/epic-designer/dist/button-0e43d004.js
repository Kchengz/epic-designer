import { defineComponent as p, h as r, renderSlot as c } from "vue";
import { NButton as a } from "naive-ui";
const l = p({
  props: {
    componentSchema: {
      type: Object,
      default: () => ({})
    }
  },
  setup(t, { slots: n }) {
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
  l as default
};
