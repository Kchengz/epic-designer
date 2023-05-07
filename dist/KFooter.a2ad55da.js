import { defineComponent as m, inject as _, openBlock as o, createElementBlock as n, createElementVNode as e, Fragment as f, renderList as h, unref as s, createCommentVNode as g, withModifiers as p, toDisplayString as k } from "vue";
import { p as v } from "./index.091e7416.js";
import "./revoke.807da173.js";
const C = { class: "k-footer" }, y = { class: "left" }, M = { key: 0 }, N = ["onClick", "onMouseenter"], B = /* @__PURE__ */ e("div", { class: "right" }, [
  /* @__PURE__ */ e("div", { class: "author" }, " kcz "),
  /* @__PURE__ */ e("div", { class: "package-name" }, " k-designer ")
], -1), H = /* @__PURE__ */ m({
  __name: "KFooter",
  setup(S) {
    const t = _("designer");
    function u(a) {
      t.setCheckedNode(a);
    }
    return (a, i) => (o(), n("header", C, [
      e("div", y, [
        e("div", null, [
          (o(!0), n(f, null, h(s(t).state.matched, (r, c) => {
            var l;
            return o(), n("span", { key: c }, [
              c !== 0 ? (o(), n("span", M, " > ")) : g("", !0),
              e("span", {
                class: "node-item",
                onClick: (d) => u(r),
                onMouseenter: p((d) => s(t).setHoverNode(r), ["stop"]),
                onMouseleave: i[0] || (i[0] = p((d) => s(t).setHoverNode(null), ["stop"]))
              }, k((l = s(v).getComponentConfingByType(r.type)) == null ? void 0 : l.defaultSchema.label), 41, N)
            ]);
          }), 128))
        ])
      ]),
      B
    ]));
  }
});
export {
  H as default
};
