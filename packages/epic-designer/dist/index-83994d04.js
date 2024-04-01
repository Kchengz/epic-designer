import { defineComponent as V, computed as b, openBlock as n, createElementBlock as o, Fragment as g, renderList as k, createVNode as d, unref as r, createElementVNode as s, createCommentVNode as C } from "vue";
import { p as y, g as U } from "./index-c81ab9b4.js";
import { _ as E } from "./icon.vue_vue_type_script_setup_true_lang-3f9e4127.js";
const I = {
  key: 0,
  class: "del-btn"
}, N = ["onClick"], D = /* @__PURE__ */ V({
  __name: "index",
  props: {
    modelValue: {
      type: Array,
      default: () => []
    }
  },
  emits: ["update:modelValue"],
  setup(c, { emit: i }) {
    const m = y.getComponent("input"), p = c, v = i, l = b({
      get() {
        return p.modelValue;
      },
      set(e) {
        v("update:modelValue", e);
      }
    });
    function _() {
      const e = {
        label: "标签页",
        type: "tab-pane",
        children: [],
        id: U()
      };
      l.value.push(e);
    }
    function f(e) {
      l.value = l.value.filter((h, t) => e !== t);
    }
    return (e, h) => (n(), o("div", null, [
      (n(!0), o(g, null, k(l.value, (t, u) => (n(), o("div", {
        key: u,
        class: "EColEditor-item"
      }, [
        d(r(m), {
          value: t.label,
          "onUpdate:value": (a) => t.label = a,
          modelValue: t.label,
          "onUpdate:modelValue": (a) => t.label = a,
          style: { width: "100%" }
        }, null, 8, ["value", "onUpdate:value", "modelValue", "onUpdate:modelValue"]),
        l.value.length > 1 ? (n(), o("div", I, [
          s("span", {
            onClick: (a) => f(u)
          }, [
            d(r(E), { name: "icon-shanchu" })
          ], 8, N)
        ])) : C("", !0)
      ]))), 128)),
      s("div", {
        class: "add-btn",
        onClick: _
      }, " 添加 ")
    ]));
  }
});
export {
  D as default
};
