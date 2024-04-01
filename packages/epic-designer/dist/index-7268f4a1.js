import { defineComponent as i, ref as l, inject as _, watch as p, toRaw as u, openBlock as f, createElementBlock as m, createVNode as g, unref as d } from "vue";
import { p as h, n as N, e as k } from "./index-c81ab9b4.js";
import { _ as v } from "./_plugin-vue_export-helper-dad06003.js";
const x = { class: "epic-sound-code" }, y = /* @__PURE__ */ i({
  __name: "index",
  setup(E) {
    const c = h.getComponent("monacoEditor"), a = l(null), o = _("designer");
    let t = {};
    p(() => o.state.checkedNode, (e) => {
      var n;
      N(t, u(e)) || (n = a.value) == null || n.setValue(JSON.stringify(e, null, 2));
    }, {
      deep: !0
    });
    const s = JSON.stringify(o.state.checkedNode, null, 2);
    function r(e) {
      if (!o.state.checkedNode)
        return !1;
      t = JSON.parse(e), k(o.state.checkedNode, t);
    }
    return (e, n) => (f(), m("div", x, [
      g(d(c), {
        ref_key: "monacoEditorRef",
        ref: a,
        class: "editor",
        "model-value": d(s),
        "onUpdate:modelValue": r
      }, null, 8, ["model-value"])
    ]));
  }
});
const C = /* @__PURE__ */ v(y, [["__scopeId", "data-v-aa433531"]]);
export {
  C as default
};
