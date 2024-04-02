import { defineComponent as v, inject as $, openBlock as t, createElementBlock as o, Fragment as f, renderList as k, unref as n, createCommentVNode as d, createBlock as g, createElementVNode as p, withModifiers as m, toDisplayString as C, ref as N, shallowRef as B, createVNode as M, normalizeClass as h, resolveDynamicComponent as S } from "vue";
import { p as y } from "./index-bc424301.js";
import { _ as V } from "./icon.vue_vue_type_script_setup_true_lang-3f9e4127.js";
const w = { class: "epic-breadcrumb pl-4 py-2 truncate" }, z = { key: 0 }, D = { key: 0 }, E = ["onClick", "onMouseenter"], H = /* @__PURE__ */ v({
  __name: "breadcrumb",
  setup(b) {
    const e = $("designer");
    function r(s) {
      e.setCheckedNode(s);
    }
    return (s, u) => (t(), o("div", w, [
      (t(!0), o(f, null, k(n(e).state.matched, (a, c) => {
        var l;
        return t(), o("span", { key: c }, [
          c > n(e).state.matched.length - 4 ? (t(), o("span", z, [
            n(e).state.matched.length > 3 && c === n(e).state.matched.length - 3 ? (t(), o("span", D, "...")) : d("", !0),
            c !== 0 ? (t(), g(n(V), {
              key: 1,
              class: "m-1",
              name: "icon-zhankai"
            })) : d("", !0),
            p("span", {
              class: "node-item cursor-pointer",
              onClick: (i) => r(a),
              onMouseenter: m((i) => n(e).setHoverNode(a), ["stop"]),
              onMouseleave: u[0] || (u[0] = m((i) => n(e).setHoverNode(null), ["stop"]))
            }, C(a.label ?? ((l = n(y).getComponentConfingByType(a.type)) == null ? void 0 : l.defaultSchema.label)), 41, E)
          ])) : d("", !0)
        ]);
      }), 128))
    ]));
  }
}), R = {
  key: 0,
  class: "epic-right-sidebar"
}, j = { class: "actions-container" }, F = ["title", "onClick"], I = { class: "sidebar-content" }, G = /* @__PURE__ */ v({
  __name: "index",
  setup(b) {
    var a;
    const e = y.getRightSidebars(), r = N(0), s = B(null);
    s.value = (a = e[0]) == null ? void 0 : a.component;
    function u(c, l) {
      if (r.value === l)
        return !1;
      s.value = c.component, r.value = l;
    }
    return (c, l) => s.value ? (t(), o("div", R, [
      M(H),
      p("ul", j, [
        (t(!0), o(f, null, k(n(e), (i, _) => (t(), o("li", {
          key: _,
          class: h(["action-item", { checked: r.value === _ }]),
          title: i.title,
          onClick: (L) => u(i, _)
        }, C(i.title), 11, F))), 128))
      ]),
      p("div", I, [
        p("aside", {
          class: h({ hide: r.value === null })
        }, [
          (t(), g(S(s.value)))
        ], 2)
      ])
    ])) : d("", !0);
  }
});
export {
  G as default
};
