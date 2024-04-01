import { defineComponent as y, useAttrs as v, computed as b, openBlock as m, createBlock as V, unref as t, normalizeProps as C, guardReactiveProps as B, withCtx as o, createElementVNode as r, renderSlot as d, createElementBlock as N, Fragment as w, renderList as $, createVNode as i, createTextVNode as u, toDisplayString as E } from "vue";
import { Modal as O, Space as P, Button as h } from "ant-design-vue";
const T = { class: "epic-modal-main" }, U = { class: "epic-modal-footer" }, D = /* @__PURE__ */ y({
  __name: "modal",
  props: {
    componentSchema: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["ok", "close", "update:modelValue"],
  setup(f, { emit: k }) {
    const n = v(), l = f, a = k, S = {
      position: "absolute",
      right: "150px",
      left: "150px",
      minWidth: "700px",
      width: "auto",
      top: "56px",
      bottom: "30px",
      minHeight: "500px"
    }, _ = {
      height: "calc(100vh - 108px)",
      padding: 0
    }, s = b(() => {
      var e;
      return {
        ...l.componentSchema,
        ...n,
        title: ((e = l.componentSchema) == null ? void 0 : e.label) ?? "",
        wrapClassName: "epic-modal-ant",
        open: n.modelValue,
        visible: n.modelValue,
        "onUpdate:open": c,
        "onUpdate:visible": c,
        style: "top:20px",
        bodyStyle: _,
        dialogStyle: S,
        footer: null,
        children: null
      };
    }), p = l.componentSchema.children ?? [];
    function g() {
      a("ok");
    }
    function c() {
      a("update:modelValue", !1), a("close");
    }
    return (e, j) => (m(), V(t(O), C(B(s.value)), {
      default: o(() => [
        r("div", T, [
          d(e.$slots, "edit-node", {}, () => [
            t(p).length ? (m(!0), N(w, { key: 0 }, $(t(p), (x) => d(e.$slots, "node", { componentSchema: x })), 256)) : d(e.$slots, "default", { key: 1 })
          ])
        ]),
        r("div", U, [
          i(t(P), { align: "end" }, {
            default: o(() => [
              i(t(h), { onClick: c }, {
                default: o(() => [
                  u("关闭")
                ]),
                _: 1
              }),
              i(t(h), {
                type: "primary",
                onClick: g
              }, {
                default: o(() => [
                  u(E(s.value.okText ?? "确定"), 1)
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ])
      ]),
      _: 3
    }, 16));
  }
});
export {
  D as default
};
