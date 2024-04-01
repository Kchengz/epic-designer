import { defineComponent as p, openBlock as a, createBlock as c, unref as m, normalizeProps as s, guardReactiveProps as l, withCtx as u, renderSlot as f, createTextVNode as i, toDisplayString as d } from "vue";
import { Button as _ } from "ant-design-vue";
const x = /* @__PURE__ */ p({
  __name: "button",
  props: {
    componentSchema: {
      type: Object,
      default: () => ({})
    }
  },
  setup(n) {
    const e = n;
    return (r, h) => {
      var t;
      return a(), c(m(_), s(l((t = e.componentSchema) == null ? void 0 : t.componentProps)), {
        default: u(() => [
          f(r.$slots, "default", {}, () => {
            var o;
            return [
              i(d((o = e.componentSchema) == null ? void 0 : o.label), 1)
            ];
          })
        ]),
        _: 3
      }, 16);
    };
  }
});
export {
  x as default
};
