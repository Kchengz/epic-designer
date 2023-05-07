import { defineComponent as u, inject as r, computed as _, openBlock as h, createElementBlock as f, createVNode as v, unref as e, withCtx as y, createElementVNode as N, withModifiers as c, toDisplayString as g } from "vue";
import { b as k, p as C } from "./index.091e7416.js";
import "./revoke.807da173.js";
const K = { class: "k-outline" }, M = ["onMouseenter"], w = /* @__PURE__ */ u({
  __name: "KOutline",
  setup(x) {
    const t = r("designer"), a = r("schemas"), l = _(() => {
      var n;
      const o = (n = t.state.checkedNode) == null ? void 0 : n.id;
      return o ? [o] : [];
    });
    function p(o) {
      t.setCheckedNode(o.record);
    }
    return (o, n) => {
      var s;
      return h(), f("div", K, [
        v(e(k), {
          options: e(a),
          selectedKeys: e(l),
          onNodeClick: p,
          hoverKey: (s = e(t).state.hoverNode) == null ? void 0 : s.id
        }, {
          "tree-node": y(({ record: d }) => {
            var i;
            return [
              N("div", {
                class: "text-padding",
                onMouseenter: c((m) => e(t).setHoverNode(d), ["stop"]),
                onMouseleave: n[0] || (n[0] = c((m) => e(t).setHoverNode(null), ["stop"]))
              }, g((i = e(C).getComponentConfingByType(d.type)) == null ? void 0 : i.defaultSchema.label), 41, M)
            ];
          }),
          _: 1
        }, 8, ["options", "selectedKeys", "hoverKey"])
      ]);
    };
  }
});
export {
  w as default
};
