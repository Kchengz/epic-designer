import { defineComponent as _, ref as h, shallowRef as f, unref as s, openBlock as n, createElementBlock as r, createElementVNode as c, Fragment as k, renderList as v, normalizeClass as m, toDisplayString as g, createBlock as C, resolveDynamicComponent as b, createCommentVNode as y } from "vue";
import { p as B } from "./index.091e7416.js";
import "./revoke.807da173.js";
const S = {
  key: 0,
  class: "k-right-sidebar"
}, R = { class: "actions-container" }, D = ["title", "onClick"], E = { class: "sidebar-content" }, I = /* @__PURE__ */ _({
  __name: "KRightSidebar",
  setup(N) {
    var u;
    const i = B.getRightSidebars(), e = h(0), t = f(null);
    t.value = (u = i[0]) == null ? void 0 : u.component;
    function p(d, o) {
      if (e.value === o)
        return !1;
      t.value = d.component, e.value = o;
    }
    return (d, o) => s(t) ? (n(), r("div", S, [
      c("ul", R, [
        (n(!0), r(k, null, v(s(i), (a, l) => (n(), r("li", {
          class: m(["action-item", { checked: e.value === l }]),
          title: a.title,
          key: l,
          onClick: (V) => p(a, l)
        }, g(a.title), 11, D))), 128))
      ]),
      c("div", E, [
        c("aside", {
          class: m({ hide: e.value === null })
        }, [
          (n(), C(b(s(t))))
        ], 2)
      ])
    ])) : y("", !0);
  }
});
export {
  I as default
};
