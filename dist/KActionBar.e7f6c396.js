import { defineComponent as _, ref as f, shallowRef as v, openBlock as t, createElementBlock as s, Fragment as d, createElementVNode as n, renderList as k, unref as m, normalizeClass as i, createBlock as h, resolveDynamicComponent as C } from "vue";
import { p as b } from "./index.091e7416.js";
import "./revoke.807da173.js";
const B = { class: "k-action-bar" }, g = { class: "actions-container" }, y = ["title", "onClick"], A = { class: "sidebar-container" }, I = /* @__PURE__ */ _({
  __name: "KActionBar",
  setup(E) {
    const r = b.getActivitybars(), e = f(0), o = v(null);
    o.value = r[0].component;
    function p(u, a) {
      if (e.value === a)
        return e.value = null, !1;
      o.value = u.component, e.value = a;
    }
    return (u, a) => (t(), s(d, null, [
      n("div", B, [
        n("ul", g, [
          (t(!0), s(d, null, k(m(r), (l, c) => (t(), s("li", {
            class: i(["action-item", { checked: e.value === c }]),
            title: l.title,
            key: c,
            onClick: (w) => p(l, c)
          }, [
            n("span", {
              class: i(["iconfont", l.icon])
            }, null, 2)
          ], 10, y))), 128))
        ])
      ]),
      n("aside", {
        class: i(["k-left-sidebar", { hide: e.value === null }])
      }, [
        n("div", A, [
          (t(), h(C(m(o))))
        ])
      ], 2)
    ], 64));
  }
});
export {
  I as default
};
