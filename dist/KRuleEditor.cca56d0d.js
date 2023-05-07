import { defineComponent as V, inject as q, computed as D, ref as _, watch as w, openBlock as o, createElementBlock as r, Fragment as c, renderList as C, createElementVNode as d, toDisplayString as E, createVNode as A, unref as F, createCommentVNode as x, createBlock as O, withCtx as U, createTextVNode as $ } from "vue";
import { a as k, p as j } from "./index.091e7416.js";
import { d as B } from "./revoke.807da173.js";
const N = { class: "rule-item-main bg-white m-t-2 p-2 rounded border border-solid border-gray-200 hover:border-primary transition-all relative" }, R = {
  key: 0,
  class: "flex m-t-2 first:m-0"
}, M = {
  class: "attr-label",
  title: "\u6821\u9A8C\u65F6\u673A"
}, S = { class: "attr-input" }, I = /* @__PURE__ */ d("span", { class: "iconfont icon-shanchu1" }, null, -1), K = [
  I
], T = /* @__PURE__ */ V({
  __name: "KRuleItem",
  props: {
    rule: {
      type: Object,
      required: !0
    }
  },
  emits: ["update:rule", "change", "delete"],
  setup(h, { emit: i }) {
    const v = h, b = q("pageManager", {}), n = D(() => Object.entries(b.funcs.value).filter(([e, a]) => typeof a == "function").map(([e]) => ({ label: e, value: e }))), m = ["string", "number", "url", "array", "email"], g = [{ label: "change", value: "change" }, { label: "blur", value: "blur" }], t = [
      { label: "string", value: "string" },
      { label: "number", value: "number" },
      { label: "boolean", value: "boolean" },
      { label: "method", value: "method" },
      { label: "regexp", value: "regexp" },
      { label: "integer", value: "integer" },
      { label: "float", value: "float" },
      { label: "array", value: "array" },
      { label: "object", value: "object" },
      { label: "date", value: "date" },
      { label: "url", value: "url" },
      { label: "hex", value: "hex" },
      { label: "email", value: "email" },
      { label: "any", value: "any" }
    ], f = [
      {
        type: "select",
        label: "\u6821\u9A8C\u65F6\u673A",
        model: "trigger",
        componentProps: { options: g, placeholder: "\u6821\u9A8C\u65F6\u673A", multiple: !0, mode: "multiple" }
      },
      {
        type: "switch",
        label: "\u81EA\u5B9A\u4E49\u89C4\u5219",
        model: "isValidator"
      },
      {
        type: "select",
        label: "\u6821\u9A8C\u51FD\u6570",
        model: "validator",
        show() {
          return Boolean(l.value.isValidator);
        },
        componentProps: { options: n.value, placeholder: "\u6821\u9A8C\u51FD\u6570" }
      },
      {
        type: "select",
        label: "\u7C7B\u578B",
        model: "type",
        show() {
          return !l.value.isValidator;
        },
        componentProps: { options: t, placeholder: "\u7C7B\u578B" }
      },
      {
        type: "input",
        label: "\u6B63\u5219\u6821\u9A8C",
        model: "pattern",
        show() {
          return !l.value.isValidator;
        },
        componentProps: { placeholder: "\u6B63\u5219\u6821\u9A8C" }
      },
      {
        type: "number",
        label: "\u5B57\u6BB5\u957F\u5EA6",
        model: "len",
        show() {
          var e;
          return m.includes((e = l.value.type) != null ? e : "");
        },
        componentProps: { min: 0, placeholder: "\u5B57\u6BB5\u957F\u5EA6" }
      },
      {
        type: "number",
        label: "\u6700\u5C0F\u957F\u5EA6",
        model: "min",
        show() {
          var e;
          return m.includes((e = l.value.type) != null ? e : "");
        },
        componentProps: { min: 0, placeholder: "\u6700\u5C0F\u957F\u5EA6" }
      },
      {
        type: "number",
        label: "\u6700\u5927\u957F\u5EA6",
        model: "max",
        show() {
          var e;
          return m.includes((e = l.value.type) != null ? e : "");
        },
        componentProps: { min: 0, placeholder: "\u6700\u5927\u957F\u5EA6" }
      },
      {
        type: "input",
        label: "\u6821\u9A8C\u4FE1\u606F",
        model: "message",
        componentProps: { placeholder: "\u6821\u9A8C\u4FE1\u606F" }
      }
    ], l = _({});
    w(() => v.rule, (e) => {
      l.value = e;
    }, {
      deep: !0,
      immediate: !0
    });
    function y() {
      const e = l.value;
      e.isValidator ? (delete e.type, delete e.pattern, delete e.len, delete e.min, delete e.max) : delete e.validator, i("update:rule", e), i("change", e);
    }
    function s() {
      i("delete");
    }
    return (e, a) => (o(), r("div", N, [
      (o(), r(c, null, C(f, (u, p) => (o(), r(c, { key: p }, [
        !u.show || u.show() ? (o(), r("div", R, [
          d("div", M, E(u.label), 1),
          d("div", S, [
            A(F(k), {
              record: u,
              modelValue: l.value[u.model],
              "onUpdate:modelValue": (P) => l.value[u.model] = P,
              onChange: y
            }, null, 8, ["record", "modelValue", "onUpdate:modelValue"])
          ])
        ])) : x("", !0)
      ], 64))), 64)),
      d("div", {
        class: "rule-btn-delete absolute top-0 right-0 transition-all w-6 h-6 cursor-pointer rounded-bl-1 flex-center color-white",
        onClick: s
      }, K)
    ]));
  }
}), L = { class: "rule-item-main bg-white m-t-2 p-2 rounded border border-solid border-gray-200 hover:border-primary transition-all relative" }, z = {
  key: 0,
  class: "flex m-t-2 first:m-0"
}, G = { class: "attr-label" }, H = { class: "flex-1" }, X = /* @__PURE__ */ V({
  __name: "KRuleEditor",
  props: {
    modelValue: {
      type: Array,
      default: null
    }
  },
  emits: ["update:modelValue"],
  setup(h, { emit: i }) {
    const v = h, b = j.getComponent("button"), n = _({
      required: !1,
      message: "\u5FC5\u586B\u9879",
      trigger: ["change"]
    }), g = [
      {
        type: "switch",
        label: "\u5FC5\u586B\u9879",
        model: "required"
      },
      {
        type: "select",
        label: "\u6821\u9A8C\u65F6\u673A",
        model: "trigger",
        show() {
          return Boolean(n.value.required);
        },
        componentProps: { options: [{ label: "change", value: "change" }, { label: "blur", value: "blur" }], placeholder: "\u6821\u9A8C\u65F6\u673A", multiple: !0, mode: "multiple" }
      },
      {
        type: "input",
        label: "\u6821\u9A8C\u4FE1\u606F",
        model: "message",
        show() {
          return Boolean(n.value.required);
        },
        componentProps: { placeholder: "\u6821\u9A8C\u4FE1\u606F" }
      }
    ], t = _([]);
    w(() => v.modelValue, (s) => {
      if (s) {
        if (!s)
          return;
        t.value = [], s.forEach((e) => {
          typeof e.required < "u" ? n.value = e : t.value.push(e);
        });
      }
    }, {
      immediate: !0
    });
    function f() {
      t.value.push({
        message: "",
        trigger: ["change"]
      }), l();
    }
    function l() {
      if (n.value.required) {
        i("update:modelValue", B([...t.value, n.value]));
        return;
      }
      if (t.value.length) {
        i("update:modelValue", B(t.value));
        return;
      }
      i("update:modelValue", void 0);
    }
    function y(s) {
      t.value.splice(s, 1), l();
    }
    return (s, e) => (o(), r("div", null, [
      d("div", L, [
        (o(), r(c, null, C(g, (a, u) => (o(), r(c, { key: u }, [
          !a.show || a.show() ? (o(), r("div", z, [
            d("div", G, E(a.label), 1),
            d("div", H, [
              A(F(k), {
                record: a,
                modelValue: n.value[a.model],
                "onUpdate:modelValue": (p) => n.value[a.model] = p,
                onChange: l
              }, null, 8, ["record", "modelValue", "onUpdate:modelValue"])
            ])
          ])) : x("", !0)
        ], 64))), 64))
      ]),
      (o(!0), r(c, null, C(t.value, (a, u) => (o(), O(T, {
        rule: t.value[u],
        "onUpdate:rule": (p) => t.value[u] = p,
        onDelete: (p) => y(u),
        onChange: l,
        key: u
      }, null, 8, ["rule", "onUpdate:rule", "onDelete"]))), 128)),
      A(F(b), {
        class: "m-t-2",
        onClick: f
      }, {
        default: U(() => [
          $("\u6DFB\u52A0\u89C4\u5219")
        ]),
        _: 1
      })
    ]));
  }
});
export {
  X as default
};
