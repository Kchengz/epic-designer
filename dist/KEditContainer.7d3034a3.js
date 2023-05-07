import { defineComponent as D, inject as y, ref as A, computed as B, watch as H, openBlock as c, createBlock as C, unref as t, isRef as j, withCtx as E, createElementVNode as h, normalizeClass as z, withModifiers as v, withDirectives as R, toDisplayString as q, createElementBlock as N, createCommentVNode as I, vShow as L, createVNode as $, toRaw as O, onBeforeUpdate as T, resolveComponent as G, Fragment as J, renderList as P } from "vue";
import { p as Q, a as F } from "./index.091e7416.js";
import { d as W } from "./vuedraggable.umd.5428b8f7.js";
import { r as k, d as X, g as S } from "./revoke.807da173.js";
import "./_commonjsHelpers.da91e947.js";
import "./_vue_commonjs-external.cdc460b2.js";
const Y = ["onClick", "onMouseover"], Z = { class: "action-box" }, ee = { class: "action-item" }, te = ["onClick"], oe = /* @__PURE__ */ h("span", { class: "iconfont icon-fuzhi3" }, null, -1), ne = [
  oe
], se = ["onClick"], de = /* @__PURE__ */ h("span", { class: "iconfont icon-shanchu1" }, null, -1), ie = [
  de
], re = /* @__PURE__ */ D({
  __name: "KEditNodeItem",
  props: {
    schemas: {
      type: Array
    }
  },
  emits: ["update:schemas"],
  setup(f, { emit: i }) {
    const u = f, s = y("designer"), r = y("schemas"), m = A(""), d = B({
      get() {
        return u.schemas;
      },
      set(o) {
        i("update:schemas", o);
      }
    });
    H(d, (o) => {
      var n;
      o != null && o.length && (m.value = (n = o[0].id) != null ? n : "");
    }, {
      immediate: !0
    });
    function b(o) {
      s.setCheckedNode(d.value[o]);
    }
    function K() {
      s.setDisableHover(), k.push(r.value, "\u62D6\u62FD\u7EC4\u4EF6");
    }
    function M() {
      k.push(r.value, "\u63D2\u5165\u7EC4\u4EF6");
    }
    function U(o, n, e) {
      var _;
      const l = X({
        ...O(n),
        id: S()
      });
      o.splice(e + 1, 0, l);
      const a = l.children ? [...l.children] : [];
      for (; a.length > 0; ) {
        const p = a.pop();
        p.id = S(), ((_ = p.children) == null ? void 0 : _.length) > 0 && a.push(...p.children);
      }
      s.setCheckedNode(l), k.push(r.value, "\u590D\u5236\u7EC4\u4EF6");
    }
    function x(o, n, e) {
      o = o.filter((l, a) => e !== a), i("update:schemas", o), e === o.length && e--, s.setCheckedNode(o[e]), k.push(r.value, "\u5220\u9664\u7EC4\u4EF6");
    }
    return (o, n) => (c(), C(t(W), {
      modelValue: t(d),
      "onUpdate:modelValue": n[1] || (n[1] = (e) => j(d) ? d.value = e : null),
      group: m.value === "root" || "edit-draggable",
      "item-key": "id",
      onStart: n[2] || (n[2] = (e) => {
        b(e.oldIndex), t(s).setDisableHover(!0);
      }),
      onEnd: n[3] || (n[3] = (e) => K()),
      onAdd: n[4] || (n[4] = (e) => {
        b(e.newIndex), M();
      }),
      ghostClass: "moveing",
      "component-data": { name: "draggable-range" }
    }, {
      item: E(({ element: e, index: l }) => {
        var a, _, p, w;
        return [
          h("div", {
            class: z(["item", {
              checked: ((a = t(s).state.checkedNode) == null ? void 0 : a.id) === e.id,
              hover: ((_ = t(s).state.hoverNode) == null ? void 0 : _.id) === e.id,
              "root-node": e.id === "root"
            }]),
            onClick: v((g) => t(s).setCheckedNode(e), ["stop"]),
            onMouseover: v((g) => t(s).setHoverNode(e), ["stop"]),
            onMouseout: n[0] || (n[0] = v((g) => t(s).setHoverNode(null), ["stop"]))
          }, [
            R(h("div", Z, [
              h("div", ee, q((p = t(Q).getComponentConfingByType(e.type)) == null ? void 0 : p.defaultSchema.label), 1),
              m.value !== "root" ? (c(), N("div", {
                key: 0,
                title: "\u590D\u5236",
                class: "action-item",
                onClick: v((g) => U(t(d), e, l), ["stop"])
              }, ne, 8, te)) : I("", !0),
              m.value !== "root" ? (c(), N("div", {
                key: 1,
                title: "\u5220\u9664",
                class: "action-item",
                onClick: v((g) => x(t(d), e, l), ["stop"])
              }, ie, 8, se)) : I("", !0)
            ], 512), [
              [L, ((w = t(s).state.checkedNode) == null ? void 0 : w.id) === e.id]
            ]),
            $(V, { element: e }, null, 8, ["element"])
          ], 42, Y)
        ];
      }),
      _: 1
    }, 8, ["modelValue", "group"]));
  }
}), V = /* @__PURE__ */ D({
  __name: "KNodeItem",
  props: {
    element: {
      type: Object,
      required: !0
    }
  },
  setup(f) {
    const i = f, u = i.element;
    return T(() => {
      console.log("\u66F4\u65B0\u4E8622");
    }), (s, r) => {
      const m = G("KNodeItem", !0);
      return ["row", "tabs"].includes(i.element.type) ? (c(), C(t(F), {
        key: 0,
        record: i.element
      }, {
        "edit-node": E(() => [
          (c(!0), N(J, null, P(t(u).children, (d) => (c(), C(m, {
            key: d.id,
            element: d
          }, null, 8, ["element"]))), 128))
        ]),
        _: 1
      }, 8, ["record"])) : (c(), C(t(F), {
        key: 1,
        record: i.element
      }, {
        "edit-node": E(() => [
          $(re, {
            schemas: t(u).children,
            "onUpdate:schemas": r[0] || (r[0] = (d) => t(u).children = d)
          }, null, 8, ["schemas"])
        ]),
        _: 1
      }, 8, ["record"]));
    };
  }
}), le = { class: "k-edit-container" }, ae = { class: "k-edit-range rounded-md" }, ve = /* @__PURE__ */ D({
  __name: "KEditContainer",
  setup(f) {
    const i = y("schemas"), u = B(() => i.value[0]);
    return (s, r) => (c(), N("section", le, [
      h("div", ae, [
        $(V, { element: t(u) }, null, 8, ["element"])
      ])
    ]));
  }
});
export {
  ve as default
};
