import { defineComponent as l, ref as i, inject as u, watch as _, toRaw as p, openBlock as f, createElementBlock as m, createVNode as g, unref as d } from "vue";
import { p as h } from "./index.091e7416.js";
import { e as k, b as N, _ as S } from "./revoke.807da173.js";
const y = { class: "k-sound-code" }, C = /* @__PURE__ */ l({
  __name: "KSoundCode",
  setup(E) {
    const c = h.getComponent("monacoEditor"), a = i(null), o = u("designer");
    let t = {};
    _(() => o.state.checkedNode, (e) => {
      var n;
      k(t, p(e)) || (n = a.value) == null || n.setValue(JSON.stringify(e, null, 2));
    }, {
      deep: !0
    });
    const s = JSON.stringify(o.state.checkedNode, null, 2);
    function r(e) {
      if (!o.state.checkedNode)
        return !1;
      t = JSON.parse(e), N(o.state.checkedNode, t);
    }
    return (e, n) => (f(), m("div", y, [
      g(d(c), {
        class: "editor",
        ref_key: "monacoEditorRef",
        ref: a,
        modelValue: d(s),
        "onUpdate:modelValue": r
      }, null, 8, ["modelValue"])
    ]));
  }
});
const M = /* @__PURE__ */ S(C, [["__scopeId", "data-v-ce54bcaa"]]);
export {
  M as default
};
