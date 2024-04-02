import { defineComponent as i, ref as l, inject as _, watch as p, toRaw as u, openBlock as f, createElementBlock as m, createVNode as g, unref as a } from "vue";
import { p as h, n as N, e as k } from "./index-bc424301.js";
import { _ as v } from "./_plugin-vue_export-helper-dad06003.js";
const x = { class: "epic-sound-code" }, y = /* @__PURE__ */ i({
  __name: "index",
  setup(E) {
    const d = h.getComponent("monacoEditor"), c = l(null), t = _("designer");
    let n = {};
    p(() => t.state.checkedNode, (e) => {
      var o;
      N(n, u(e)) || (o = c.value) == null || o.setValue(JSON.stringify(e, null, 2));
    }, {
      deep: !0
    });
    const s = JSON.stringify(t.state.checkedNode, null, 2);
    function r(e) {
      try {
        if (!t.state.checkedNode)
          return !1;
        n = JSON.parse(e), k(t.state.checkedNode, n);
      } catch (o) {
        console.warn("[epic-desinger：源码]异常：", o);
      }
    }
    return (e, o) => (f(), m("div", x, [
      g(a(d), {
        ref_key: "monacoEditorRef",
        ref: c,
        class: "editor",
        "model-value": a(s),
        "onUpdate:modelValue": r
      }, null, 8, ["model-value"])
    ]));
  }
});
const C = /* @__PURE__ */ v(y, [["__scopeId", "data-v-c4e09b1c"]]);
export {
  C as default
};
