import { defineComponent as m, useAttrs as n, ref as f, openBlock as s, createBlock as a, unref as e, mergeProps as l, withCtx as c, renderSlot as p } from "vue";
import { FormItem as u } from "ant-design-vue";
const h = /* @__PURE__ */ m({
  __name: "formItem",
  setup(_) {
    const r = n(), t = f(null);
    return (o, d) => (s(), a(e(u), l({
      ref_key: "form",
      ref: t
    }, e(r), {
      name: e(r).field
    }), {
      default: c(() => [
        p(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["name"]));
  }
});
export {
  h as default
};
