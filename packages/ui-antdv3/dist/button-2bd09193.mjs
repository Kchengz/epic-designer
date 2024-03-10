import { defineComponent as n, openBlock as m, createBlock as a, unref as c, normalizeProps as i, guardReactiveProps as s, withCtx as l, renderSlot as u, createTextVNode as f, toDisplayString as d } from "vue";
import { B as _ } from "./index-43cd11f6.mjs";
import "./index-4ddd22ca.mjs";
import "./index-d455f4a3.mjs";
import "./useConfigInject-f4796704.mjs";
import "./wave-320c2dad.mjs";
import "./raf-09a8b76f.mjs";
import "./classCallCheck-781f96f0.mjs";
const C = /* @__PURE__ */ n({
  __name: "button",
  props: {
    componentSchema: {
      type: Object,
      default: () => ({})
    }
  },
  setup(r) {
    const t = r;
    return (p, h) => {
      var o;
      return m(), a(c(_), i(s((o = t.componentSchema) == null ? void 0 : o.componentProps)), {
        default: l(() => [
          u(p.$slots, "default", {}, () => {
            var e;
            return [
              f(d((e = t.componentSchema) == null ? void 0 : e.label), 1)
            ];
          })
        ]),
        _: 3
      }, 16);
    };
  }
});
export {
  C as default
};
