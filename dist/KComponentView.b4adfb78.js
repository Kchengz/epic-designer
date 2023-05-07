import { defineComponent as b, ref as v, inject as h, openBlock as d, createElementBlock as C, createVNode as k, unref as i, withCtx as r, Fragment as w, renderList as B, createBlock as D, mergeProps as K, createElementVNode as V, normalizeClass as S, createTextVNode as F, toDisplayString as j, toRaw as _ } from "vue";
import { d as z } from "./vuedraggable.umd.5428b8f7.js";
import { p as c } from "./index.091e7416.js";
import { d as y, g as x, f as A, r as G } from "./revoke.807da173.js";
import "./_commonjsHelpers.da91e947.js";
import "./_vue_commonjs-external.cdc460b2.js";
const L = { class: "k-component-view" }, M = ["onClick"], O = /* @__PURE__ */ b({
  __name: "KComponentView",
  setup(P) {
    const E = c.getComponent("Collapse"), I = c.getComponent("CollapseItem"), n = v([]);
    n.value = c.getSchemaByGroup();
    const u = h("schemas"), m = h("designer"), l = v(n.value.map((a) => a.title));
    function N(a, o) {
      o[a.oldIndex] = y({
        ..._(o[a.oldIndex]),
        id: x()
      });
    }
    function U(a) {
      var g, f;
      const o = A(u.value, (f = (g = m.state.checkedNode) == null ? void 0 : g.id) != null ? f : "root");
      if (!o)
        return !1;
      let { list: e, schema: t, index: s } = o;
      t.children && !["row", "tabs"].includes(t.type) && (e = t.children, s = t.children.length - 1);
      const p = y({
        ..._(a),
        id: x()
      });
      e.splice(s + 1, 0, p), m.setCheckedNode(p), G.push(u.value, "\u63D2\u5165\u7EC4\u4EF6");
    }
    return (a, o) => (d(), C("div", L, [
      k(i(E), {
        modelValue: l.value,
        "onUpdate:modelValue": o[0] || (o[0] = (e) => l.value = e),
        activeKey: l.value,
        "onUpdate:activeKey": o[1] || (o[1] = (e) => l.value = e)
      }, {
        default: r(() => [
          (d(!0), C(w, null, B(n.value, (e) => (d(), D(i(I), {
            title: e.title,
            header: e.title,
            name: e.title,
            key: e.title
          }, {
            default: r(() => [
              k(i(z), K({
                modelValue: e.list,
                "onUpdate:modelValue": (t) => e.list = t
              }, {
                group: { name: "edit-draggable", pull: "clone", put: !1 },
                sort: !1,
                animation: 180,
                ghostClass: "moving"
              }, {
                "item-key": "id",
                "component-data": { name: "list" },
                onEnd: (t) => N(t, e.list)
              }), {
                item: r(({ element: t }) => [
                  V("div", {
                    class: "source-componet-item",
                    onClick: (s) => U(t)
                  }, [
                    V("span", {
                      class: S(["iconfont", t.icon])
                    }, null, 2),
                    F(" " + j(t.label), 1)
                  ], 8, M)
                ]),
                _: 2
              }, 1040, ["modelValue", "onUpdate:modelValue", "onEnd"])
            ]),
            _: 2
          }, 1032, ["title", "header", "name"]))), 128))
        ]),
        _: 1
      }, 8, ["modelValue", "activeKey"])
    ]));
  }
});
export {
  O as default
};
