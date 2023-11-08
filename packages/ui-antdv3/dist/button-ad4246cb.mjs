import { defineComponent as n, openBlock as a, createBlock as c, unref as i, normalizeProps as m, guardReactiveProps as s, withCtx as l, renderSlot as d, createTextVNode as u, toDisplayString as f } from "vue";
import { B as _ } from "./index-22096bf0.mjs";
import "./index-5fc6c346.mjs";
import "./index-6ded6d59.mjs";
import "./useConfigInject-f0dbb416.mjs";
import "./wave-7581548b.mjs";
import "./raf-09a8b76f.mjs";
import "./classCallCheck-7491e821.mjs";
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
