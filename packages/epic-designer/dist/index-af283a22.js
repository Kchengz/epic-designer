import { defineComponent as V, computed as g, openBlock as a, createElementBlock as l, Fragment as k, renderList as C, createVNode as p, unref as r, createElementVNode as u, createCommentVNode as y } from "vue";
import { p as U, g as P } from "./index-c81ab9b4.js";
import { _ as b } from "./icon.vue_vue_type_script_setup_true_lang-3f9e4127.js";
const E = {
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
  setup(c, { emit: d }) {
    const m = U.getComponent("number"), i = c, v = d, o = g({
      get() {
        return i.modelValue;
      },
      set(e) {
        v("update:modelValue", e);
      }
    });
    function _() {
      const e = {
        type: "col",
        children: [],
        componentProps: {
          span: 12
        },
        id: P()
      };
      o.value.push(e);
    }
    function f(e) {
      o.value = o.value.filter((h, n) => e !== n);
    }
    return (e, h) => (a(), l("div", null, [
      (a(!0), l(k, null, C(o.value, (n, s) => (a(), l("div", {
        key: s,
        class: "EColEditor-item"
      }, [
        p(r(m), {
          value: n.componentProps.span,
          "onUpdate:value": (t) => n.componentProps.span = t,
          modelValue: n.componentProps.span,
          "onUpdate:modelValue": (t) => n.componentProps.span = t,
          style: { width: "100%" },
          min: 1,
          max: 24
        }, null, 8, ["value", "onUpdate:value", "modelValue", "onUpdate:modelValue"]),
        o.value.length > 1 ? (a(), l("div", E, [
          u("span", {
            onClick: (t) => f(s)
          }, [
            p(r(b), { name: "icon-shanchu1" })
          ], 8, N)
        ])) : y("", !0)
      ]))), 128)),
      u("div", {
        class: "add-btn",
        onClick: _
      }, " 添加 ")
    ]));
  }
});
export {
  D as default
};
