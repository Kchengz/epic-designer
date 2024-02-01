import { defineComponent as n, openBlock as a, createBlock as c, unref as i, normalizeProps as m, guardReactiveProps as s, withCtx as l, renderSlot as d, createTextVNode as u, toDisplayString as f } from "vue";
import { B as _ } from "./index-43cd11f6.mjs";
import "./index-4ddd22ca.mjs";
import "./index-d455f4a3.mjs";
import "./useConfigInject-f4796704.mjs";
import "./wave-320c2dad.mjs";
import "./raf-09a8b76f.mjs";
import "./classCallCheck-781f96f0.mjs";
const S = /* @__PURE__ */ n({
  __name: "button",
  props: {
    record: {
      type: Object,
      default: () => ({})
    }
  },
  setup(e) {
    const t = e;
    return (p, B) => {
      var o;
      return a(), c(i(_), m(s((o = t.record) == null ? void 0 : o.componentProps)), {
        default: l(() => [
          d(p.$slots, "default", {}, () => {
            var r;
            return [
              u(f((r = t.record) == null ? void 0 : r.label), 1)
            ];
          })
        ]),
        _: 3
      }, 16);
    };
  }
});
export {
  S as default
};
