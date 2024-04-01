import { defineComponent as b, ref as n, watch as o, nextTick as c, openBlock as g, createBlock as w, unref as p, withCtx as U, createVNode as y } from "vue";
import { p as v } from "./index-c81ab9b4.js";
const S = /* @__PURE__ */ b({
  __name: "index",
  props: {
    modelValue: {
      type: String,
      default: null
    }
  },
  emits: ["update:modelValue"],
  setup(m, { emit: i }) {
    const r = v.getComponent("input"), s = v.getComponent("select"), d = m, f = i, l = n(null), a = n("px"), V = [
      { label: "px", value: "px" },
      { label: "%", value: "%" },
      { label: "vw", value: "vw" },
      { label: "vh", value: "vh" },
      { label: "rem", value: "rem" },
      { label: "em", value: "em" },
      { label: "pt", value: "pt" }
    ];
    o(() => d.modelValue, (t) => {
      const e = parseFloat(t);
      if (!e)
        return l.value = null, !1;
      l.value = String(e), a.value = t.substring(l.value.length);
    }, {
      immediate: !0
    }), o(() => a.value + l.value, () => {
      x();
    });
    function x() {
      c(() => f("update:modelValue", l.value ? l.value + a.value : void 0));
    }
    return (t, e) => (g(), w(p(r), {
      class: "epic-input-size",
      modelValue: l.value,
      "onUpdate:modelValue": e[2] || (e[2] = (u) => l.value = u),
      value: l.value,
      "onUpdate:value": e[3] || (e[3] = (u) => l.value = u),
      type: "number",
      min: "0",
      placeholder: "请输入"
    }, {
      suffix: U(() => [
        y(p(s), {
          value: a.value,
          "onUpdate:value": e[0] || (e[0] = (u) => a.value = u),
          modelValue: a.value,
          "onUpdate:modelValue": e[1] || (e[1] = (u) => a.value = u),
          style: { width: "68px" },
          options: V
        }, null, 8, ["value", "modelValue"])
      ]),
      _: 1
    }, 8, ["modelValue", "value"]));
  }
});
export {
  S as default
};
