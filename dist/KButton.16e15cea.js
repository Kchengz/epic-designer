import { defineComponent as c, openBlock as p, createBlock as s, unref as l, normalizeProps as d, guardReactiveProps as i, withCtx as m, renderSlot as u, createTextVNode as f, toDisplayString as _ } from "vue";
import { l as y } from "./revoke.807da173.js";
const C = /* @__PURE__ */ c({
  __name: "KButton",
  props: {
    record: {
      type: Object
    }
  },
  setup(n) {
    const t = n, a = y(async () => (await import("./index.ffe828cd.js").then((e) => e.i)).default);
    return (e, B) => {
      var o;
      return p(), s(l(a), d(i((o = t.record) == null ? void 0 : o.componentProps)), {
        default: m(() => [
          u(e.$slots, "default", {}, () => {
            var r;
            return [
              f(_((r = t.record) == null ? void 0 : r.label), 1)
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
