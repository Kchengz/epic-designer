import { defineComponent as f, inject as d, computed as g, openBlock as h, createElementBlock as v, createVNode as y, unref as e, withCtx as k, createElementVNode as c, withModifiers as p, createTextVNode as N, toDisplayString as a } from "vue";
import { _ as C } from "./tree.vue_vue_type_script_setup_true_lang-86849f34.js";
import { p as x } from "./index-c81ab9b4.js";
import "./icon.vue_vue_type_script_setup_true_lang-3f9e4127.js";
import "./vuedraggable.umd-6a5b6da9.js";
import "./_commonjsHelpers-c5d32002.js";
import "./_vue_commonjs-external-eb7fec7f.js";
const M = { class: "epic-outline" }, S = ["onMouseenter"], b = { class: "epic-node-type-text" }, D = /* @__PURE__ */ f({
  __name: "outline",
  setup(B) {
    const t = d("designer"), l = d("pageSchema"), m = g(() => {
      var n;
      const o = (n = t.state.checkedNode) == null ? void 0 : n.id;
      return o ? [o] : [];
    });
    function u(o) {
      t.setCheckedNode(o.componentSchema);
    }
    return (o, n) => {
      var i;
      return h(), v("div", M, [
        y(e(C), {
          options: e(l).schemas,
          draggable: "",
          "selected-keys": m.value,
          "hover-key": (i = e(t).state.hoverNode) == null ? void 0 : i.id,
          onNodeClick: u
        }, {
          "tree-node": k(({ schema: s }) => {
            var r;
            return [
              c("div", {
                class: "text-padding",
                onMouseenter: p((_) => e(t).setHoverNode(s), ["stop"]),
                onMouseleave: n[0] || (n[0] = p((_) => e(t).setHoverNode(null), ["stop"]))
              }, [
                N(a(s.label ?? ((r = e(x).getComponentConfingByType(s.type)) == null ? void 0 : r.defaultSchema.label)), 1),
                c("span", b, a(s.type), 1)
              ], 40, S)
            ];
          }),
          _: 1
        }, 8, ["options", "selected-keys", "hover-key"])
      ]);
    };
  }
});
export {
  D as default
};
