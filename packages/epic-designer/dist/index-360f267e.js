import { defineComponent as b, ref as o, watch as p, nextTick as g, openBlock as w, createBlock as U, unref as v, withCtx as y, createVNode as C } from "vue";
import { p as m } from "./index-bc424301.js";
const z = /* @__PURE__ */ b({
  __name: "index",
  props: {
    modelValue: {
      type: String,
      default: null
    }
  },
  emits: ["update:modelValue"],
  setup(i, { emit: r }) {
    const d = m.getComponent("input"), s = m.getComponent("select"), f = i, x = r, l = o(null), u = o("px"), V = [
      { label: "px", value: "px" },
      { label: "%", value: "%" },
      { label: "vw", value: "vw" },
      { label: "vh", value: "vh" },
      { label: "rem", value: "rem" },
      { label: "em", value: "em" },
      { label: "pt", value: "pt" }
    ];
    p(() => f.modelValue, (n) => {
      const e = parseFloat(n);
      if (isNaN(e))
        return l.value = null, !1;
      const a = /^(\d+(\.\d+)?)(px|%|vw|vh|rem|em|pt){1}$/, t = n.trim().match(a);
      l.value = (t == null ? void 0 : t[1]) ?? null, u.value = (t == null ? void 0 : t[3]) ?? "";
    }, {
      immediate: !0
    }), p(() => u.value + l.value, () => {
      c();
    });
    function c() {
      g(() => x("update:modelValue", l.value ? l.value + u.value : void 0));
    }
    return (n, e) => (w(), U(v(d), {
      class: "epic-input-size",
      modelValue: l.value,
      "onUpdate:modelValue": e[2] || (e[2] = (a) => l.value = a),
      value: l.value,
      "onUpdate:value": e[3] || (e[3] = (a) => l.value = a),
      type: "number",
      min: "0",
      placeholder: "请输入"
    }, {
      suffix: y(() => [
        C(v(s), {
          value: u.value,
          "onUpdate:value": e[0] || (e[0] = (a) => u.value = a),
          modelValue: u.value,
          "onUpdate:modelValue": e[1] || (e[1] = (a) => u.value = a),
          style: { width: "68px" },
          options: V
        }, null, 8, ["value", "modelValue"])
      ]),
      _: 1
    }, 8, ["modelValue", "value"]));
  }
});
export {
  z as default
};
