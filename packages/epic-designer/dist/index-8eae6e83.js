import { defineComponent as q, computed as k, inject as O, openBlock as o, createElementBlock as u, Fragment as c, renderList as x, createElementVNode as i, toDisplayString as B, createVNode as v, unref as b, createCommentVNode as U, ref as P, watch as E, createBlock as I, withCtx as N, createTextVNode as R } from "vue";
import { d as $, p as F, m as C } from "./index-bc424301.js";
import { _ as M } from "./icon.vue_vue_type_script_setup_true_lang-3f9e4127.js";
const j = [
  { label: "string", value: "string" },
  { label: "number", value: "number" },
  { label: "boolean", value: "boolean" },
  { label: "method", value: "method" },
  { label: "regexp", value: "regexp" },
  { label: "integer", value: "integer" },
  { label: "float", value: "float" },
  { label: "array", value: "array" },
  { label: "object", value: "object" },
  // { label: 'enum', value: 'enum' },
  { label: "date", value: "date" },
  { label: "url", value: "url" },
  { label: "hex", value: "hex" },
  { label: "email", value: "email" },
  { label: "any", value: "any" }
], D = [
  { label: "change", value: "change" },
  { label: "blur", value: "blur" }
], w = ["string", "number", "url", "array", "email"], A = { class: "rule-item-main bg-white m-t-2 p-2 rounded border border-solid border-gray-200 hover:border-primary transition-all relative" }, T = {
  key: 0,
  class: "flex m-t-2 first:m-0"
}, L = {
  class: "attr-label",
  title: "校验时机"
}, z = { class: "attr-input" }, G = /* @__PURE__ */ q({
  __name: "ERuleItem",
  props: {
    rule: {}
  },
  emits: ["change", "delete", "update:rule"],
  setup(g, { emit: y }) {
    const p = y, f = g, e = k({
      get() {
        return f.rule;
      },
      set(l) {
        p("update:rule", l);
      }
    }), _ = O("pageManager", {}), t = k(() => Object.entries(_.funcs.value).filter(([l, r]) => typeof r == "function").map(([l]) => ({ label: l, value: l }))), m = [
      {
        type: "select",
        label: "校验时机",
        model: "trigger",
        componentProps: { options: D, placeholder: "校验时机", multiple: !0, mode: "multiple" }
      },
      {
        type: "switch",
        label: "自定义规则",
        model: "isValidator"
      },
      {
        type: "select",
        label: "校验函数",
        model: "validator",
        show() {
          return !!e.value.isValidator;
        },
        componentProps: { options: t.value, placeholder: "校验函数" }
      },
      {
        type: "select",
        label: "类型",
        model: "type",
        show() {
          return !e.value.isValidator;
        },
        componentProps: { options: j, placeholder: "类型" }
      },
      {
        type: "input",
        label: "正则校验",
        model: "pattern",
        show() {
          return !e.value.isValidator;
        },
        componentProps: { placeholder: "正则校验" }
      },
      {
        type: "number",
        label: "字段长度",
        model: "len",
        show() {
          return w.includes(e.value.type ?? "");
        },
        componentProps: { min: 0, placeholder: "字段长度" }
      },
      {
        type: "number",
        label: "最小长度",
        model: "min",
        show() {
          return w.includes(e.value.type ?? "");
        },
        componentProps: { min: 0, placeholder: "最小长度" }
      },
      {
        type: "number",
        label: "最大长度",
        model: "max",
        show() {
          return w.includes(e.value.type ?? "");
        },
        componentProps: { min: 0, placeholder: "最大长度" }
      },
      {
        type: "input",
        label: "校验信息",
        model: "message",
        componentProps: { placeholder: "校验信息" }
      }
    ];
    function V() {
      const l = e.value;
      l.isValidator ? (delete l.type, delete l.pattern, delete l.len, delete l.min, delete l.max) : delete l.validator, p("change", l);
    }
    function d() {
      p("delete");
    }
    return (l, r) => (o(), u("div", A, [
      (o(), u(c, null, x(m, (a, n) => (o(), u(c, { key: n }, [
        !a.show || a.show() ? (o(), u("div", T, [
          i("div", L, B(a.label), 1),
          i("div", z, [
            v(b($), {
              modelValue: e.value[a.model],
              "onUpdate:modelValue": (s) => e.value[a.model] = s,
              componentSchema: { ...a, noFormItem: !0 },
              onChange: V
            }, null, 8, ["modelValue", "onUpdate:modelValue", "componentSchema"])
          ])
        ])) : U("", !0)
      ], 64))), 64)),
      i("div", {
        class: "rule-btn-delete absolute top-0 right-0 transition-all w-24px h-24px cursor-pointer rounded-bl-2 flex justify-center items-center color-white",
        onClick: d
      }, [
        v(b(M), { name: "icon-shanchu1" })
      ])
    ]));
  }
}), H = { class: "rule-item-main bg-white m-t-2 p-2 rounded border border-solid border-gray-200 hover:border-primary transition-all relative" }, J = {
  key: 0,
  class: "flex m-t-2 first:m-0"
}, K = { class: "attr-label" }, Q = { class: "flex-1" }, Z = /* @__PURE__ */ q({
  __name: "index",
  props: {
    modelValue: {
      type: Array,
      default: void 0
    }
  },
  emits: ["update:modelValue"],
  setup(g, { emit: y }) {
    const p = F.getComponent("button"), f = g, e = P({
      required: !1,
      message: "必填项",
      type: "string",
      trigger: ["change"]
    }), _ = [
      {
        type: "switch",
        label: "必填项",
        model: "required"
      },
      {
        type: "select",
        label: "校验时机",
        model: "trigger",
        show() {
          return !!e.value.required;
        },
        componentProps: {
          options: D,
          placeholder: "校验时机",
          multiple: !0,
          mode: "multiple"
        }
      },
      {
        type: "select",
        label: "类型",
        model: "type",
        show() {
          return !!e.value.required;
        },
        componentProps: { options: j, placeholder: "类型" }
      },
      {
        type: "input",
        label: "校验信息",
        model: "message",
        show() {
          return !!e.value.required;
        },
        componentProps: { placeholder: "校验信息" }
      }
    ], t = P([]), m = y;
    E(() => f.modelValue, (r) => {
      if (r) {
        if (!r)
          return;
        t.value = [], r.forEach((a) => {
          typeof a.required < "u" ? e.value = a : t.value.push(a);
        });
      }
    }, {
      immediate: !0
    });
    function V() {
      t.value.push({
        message: "",
        trigger: ["change"]
      }), d();
    }
    function d() {
      if (e.value.required) {
        m("update:modelValue", C([...t.value, e.value]));
        return;
      }
      if (t.value.length) {
        m("update:modelValue", C(t.value));
        return;
      }
      m("update:modelValue", void 0);
    }
    function l(r) {
      t.value.splice(r, 1), d();
    }
    return (r, a) => (o(), u("div", null, [
      i("div", H, [
        (o(), u(c, null, x(_, (n, s) => (o(), u(c, { key: s }, [
          !n.show || n.show() ? (o(), u("div", J, [
            i("div", K, B(n.label), 1),
            i("div", Q, [
              v(b($), {
                modelValue: e.value[n.model],
                "onUpdate:modelValue": (h) => e.value[n.model] = h,
                componentSchema: { ...n, noFormItem: !0 },
                onChange: d
              }, null, 8, ["modelValue", "onUpdate:modelValue", "componentSchema"])
            ])
          ])) : U("", !0)
        ], 64))), 64))
      ]),
      (o(!0), u(c, null, x(t.value, (n, s) => (o(), I(G, {
        key: s,
        rule: t.value[s],
        "onUpdate:rule": (h) => t.value[s] = h,
        onDelete: (h) => l(s),
        onChange: d
      }, null, 8, ["rule", "onUpdate:rule", "onDelete"]))), 128)),
      v(b(p), {
        class: "m-t-2",
        onClick: V
      }, {
        default: N(() => [
          R(" 添加规则 ")
        ]),
        _: 1
      })
    ]));
  }
});
export {
  Z as default
};
