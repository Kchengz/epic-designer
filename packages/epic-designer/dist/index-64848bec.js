import { defineComponent as c, ref as m, onMounted as p, openBlock as _, createElementBlock as g } from "vue";
import * as s from "monaco-editor";
import { _ as V } from "./_plugin-vue_export-helper-dad06003.js";
const v = /* @__PURE__ */ c({
  __name: "index",
  props: {
    language: { default: "json" },
    readOnly: { type: Boolean, default: !1 },
    valueFormat: { default: "string" },
    modelValue: {},
    config: { default: () => ({
      theme: "vs-light",
      selectOnLineNumbers: !0,
      minimap: {
        enabled: !1
      },
      lineNumbers: "off"
    }) }
  },
  emits: ["update:modelValue"],
  setup(o, { expose: r, emit: i }) {
    const t = o, u = i, a = m(null);
    let e = null;
    function f(l) {
      e == null || e.setValue(l || "");
    }
    function d(l) {
      const n = e == null ? void 0 : e.getPosition();
      n && (e == null || e.executeEdits("", [
        {
          range: new s.Range(
            n.lineNumber,
            n.column,
            n.lineNumber,
            n.column
          ),
          text: l
        }
      ]), e == null || e.setPosition({ ...n, column: n.column + l.length }), e == null || e.focus());
    }
    return p(() => {
      e = s.editor.create(a.value, {
        value: l(),
        language: t.language,
        readOnly: t.readOnly,
        ...t.config,
        automaticLayout: !0
      });
      function l() {
        return t.valueFormat === "json" && t.modelValue ? JSON.stringify(t.modelValue, null, 2) : t.modelValue ?? "";
      }
      e.onDidChangeModelContent(() => {
        const n = e == null ? void 0 : e.getValue();
        if (t.valueFormat === "json" && n) {
          u("update:modelValue", JSON.parse(n));
          return;
        }
        u("update:modelValue", n ?? "");
      });
    }), r({
      setValue: f,
      insertText: d
    }), (l, n) => (_(), g("div", {
      ref_key: "editContainer",
      ref: a,
      class: "code-editor"
    }, null, 512));
  }
});
const N = /* @__PURE__ */ V(v, [["__scopeId", "data-v-93a4539a"]]);
export {
  N as default
};
