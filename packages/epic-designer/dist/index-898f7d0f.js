import { defineComponent as x, inject as $, computed as f, resolveComponent as w, openBlock as c, createBlock as g, unref as o, withCtx as U, createElementVNode as _, normalizeClass as N, createVNode as u, createCommentVNode as C, createElementBlock as b, provide as O, withDirectives as K, vShow as j, createTextVNode as z } from "vue";
import { d as A } from "./vuedraggable.umd-6a5b6da9.js";
import { p as k } from "./index-c81ab9b4.js";
import { _ as h } from "./icon.vue_vue_type_script_setup_true_lang-3f9e4127.js";
import "./_commonjsHelpers-c5d32002.js";
import "./_vue_commonjs-external-eb7fec7f.js";
const E = {
  key: 0,
  class: "pl-4"
}, D = /* @__PURE__ */ x({
  name: "KOptionsCol",
  __name: "optionsCol",
  props: {
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(p, { emit: v }) {
    const V = p, r = k.getComponent("input"), i = $("tree", !1), d = v, s = f({
      get() {
        return V.modelValue;
      },
      set(l) {
        d("update:modelValue", l);
      }
    });
    function m(l) {
      const a = {
        label: "",
        value: ""
      };
      l.children ? l.children.push(a) : l.children = [a];
    }
    function n(l) {
      var a;
      (a = s.value) == null || a.splice(l, 1);
    }
    return (l, a) => {
      const y = w("KOptionsCol");
      return c(), g(o(A), {
        modelValue: s.value,
        "onUpdate:modelValue": a[0] || (a[0] = (e) => s.value = e),
        "item-key": "id",
        "component-data": {
          type: "transition-group"
        },
        group: "option-list",
        handle: ".handle",
        animation: 200
      }, {
        item: U(({ element: e, index: B }) => [
          _("div", null, [
            _("div", {
              class: N([o(i) ? "grid-cols-[16px_auto_auto_16px_16px]" : "grid-cols-[16px_auto_auto_16px]", "option-item grid gap-2 items-center mb-2"])
            }, [
              u(o(h), {
                class: "mr-2 text-lg cursor-move handle",
                name: "icon-tuozhuai"
              }),
              u(o(r), {
                modelValue: e.label,
                "onUpdate:modelValue": (t) => e.label = t,
                value: e.label,
                "onUpdate:value": (t) => e.label = t,
                placeholder: "label"
              }, null, 8, ["modelValue", "onUpdate:modelValue", "value", "onUpdate:value"]),
              u(o(r), {
                modelValue: e.value,
                "onUpdate:modelValue": (t) => e.value = t,
                value: e.value,
                "onUpdate:value": (t) => e.value = t,
                placeholder: "value"
              }, null, 8, ["modelValue", "onUpdate:modelValue", "value", "onUpdate:value"]),
              o(i) ? (c(), g(o(h), {
                key: 0,
                class: "text-lg",
                name: "icon-tianjia1",
                onClick: (t) => m(e)
              }, null, 8, ["onClick"])) : C("", !0),
              u(o(h), {
                class: "text-lg hover:text-red cursor-pointer",
                name: "icon-shanchu1",
                onClick: (t) => n(B)
              }, null, 8, ["onClick"])
            ], 2),
            e.children ? (c(), b("div", E, [
              u(y, {
                modelValue: e.children,
                "onUpdate:modelValue": (t) => e.children = t
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ])) : C("", !0)
          ])
        ]),
        _: 1
      }, 8, ["modelValue"]);
    };
  }
}), I = { class: "" }, M = { class: "py-4 my-2 text-center text-gray-400 bg-white" }, H = /* @__PURE__ */ x({
  __name: "index",
  props: {
    tree: { type: Boolean },
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(p, { emit: v }) {
    const V = k.getComponent("button"), r = p, i = v, d = f({
      get() {
        return r.modelValue;
      },
      set(m) {
        i("update:modelValue", m);
      }
    });
    O("tree", r.tree);
    function s() {
      var n;
      const m = {
        label: "",
        value: ""
      };
      (n = d.value) == null || n.push(m);
    }
    return (m, n) => {
      var l;
      return c(), b("div", I, [
        K(_("div", M, "暂无选项", 512), [
          [j, !((l = d.value) != null && l.length)]
        ]),
        u(D, {
          modelValue: d.value,
          "onUpdate:modelValue": n[0] || (n[0] = (a) => d.value = a)
        }, null, 8, ["modelValue"]),
        u(o(V), { onClick: s }, {
          default: U(() => [
            z("添加选项")
          ]),
          _: 1
        })
      ]);
    };
  }
});
export {
  H as default
};
