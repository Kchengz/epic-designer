import { defineComponent as f, useAttrs as m, ref as n, openBlock as p, createBlock as s, unref as e, mergeProps as l, withCtx as a, renderSlot as c } from "vue";
import { ElFormItem as u } from "element-plus";
const h = /* @__PURE__ */ f({
  __name: "formItem",
  setup(_) {
    const r = m(), t = n(null);
    return (o, d) => (p(), s(e(u), l({
      ref_key: "form",
      ref: t
    }, e(r), {
      prop: e(r).field
    }), {
      default: a(() => [
        c(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["prop"]));
  }
});
export {
  h as default
};
