import { defineComponent as p, ref as f, shallowRef as v, openBlock as a, createElementBlock as s, Fragment as u, createElementVNode as t, renderList as h, unref as _, normalizeClass as d, createVNode as k, toDisplayString as C, createBlock as b, resolveDynamicComponent as g } from "vue";
import { p as y } from "./index-c81ab9b4.js";
import { _ as B } from "./icon.vue_vue_type_script_setup_true_lang-3f9e4127.js";
const x = { class: "epic-action-bar" }, E = { class: "actions-container" }, A = ["title", "onClick"], D = { class: "text-14px" }, N = { class: "sidebar-container" }, I = /* @__PURE__ */ p({
  name: "EActionBar",
  __name: "index",
  setup(V) {
    const i = y.getActivitybars(), e = f(0), o = v(null);
    o.value = i[0].component;
    function m(r, l) {
      if (e.value === l)
        return e.value = null, !1;
      o.value = r.component, e.value = l;
    }
    return (r, l) => (a(), s(u, null, [
      t("div", x, [
        t("ul", E, [
          (a(!0), s(u, null, h(_(i), (n, c) => (a(), s("li", {
            key: c,
            class: d(["action-item", { checked: e.value === c }]),
            title: n.title,
            onClick: ($) => m(n, c)
          }, [
            k(_(B), {
              prefix: "",
              class: "iconfont relative",
              name: n.icon
            }, null, 8, ["name"]),
            t("div", D, C(n.title), 1)
          ], 10, A))), 128))
        ])
      ]),
      t("aside", {
        class: d(["epic-left-sidebar", { hide: e.value === null }])
      }, [
        t("div", N, [
          (a(), b(g(o.value)))
        ])
      ], 2)
    ], 64));
  }
});
export {
  I as default
};
