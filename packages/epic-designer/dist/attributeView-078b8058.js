import { defineComponent as y, inject as p, computed as _, ref as w, watch as S, openBlock as r, createElementBlock as u, Fragment as k, renderList as V, withDirectives as C, createElementVNode as i, normalizeClass as N, toDisplayString as D, createVNode as P, unref as f, vShow as E, nextTick as I } from "vue";
import { p as x, d as z, o as A, s as h, r as B } from "./index-c81ab9b4.js";
const F = ["title"], U = { class: "attr-input" }, T = /* @__PURE__ */ y({
  __name: "attributeView",
  setup(j) {
    const l = p("designer"), c = p("pageSchema"), v = x.getComponentConfings(), a = _(() => l.state.checkedNode);
    function g(t) {
      var o;
      return typeof t.show == "boolean" ? t.show : typeof t.show == "function" ? (o = t.show) == null ? void 0 : o.call(t, { values: a.value }) : !0;
    }
    const s = w([]);
    S(() => {
      var t;
      return (t = l.state.checkedNode) == null ? void 0 : t.type;
    }, () => {
      var n, e;
      const t = (n = l.state.checkedNode) == null ? void 0 : n.type;
      if (!t)
        return [];
      const o = ((e = v[t]) == null ? void 0 : e.config.attribute) ?? [];
      s.value = [
        {
          label: "组件ID",
          type: "input",
          field: "id",
          componentProps: {
            disabled: !0
          }
        },
        ...o
      ], t === "page" && s.value.push({
        label: "画布宽度",
        type: "EInputSize",
        field: "canvas.width",
        editData: c
      }, {
        label: "画布高度",
        type: "EInputSize",
        field: "canvas.height",
        editData: c
      });
    }, {
      immediate: !0
    });
    function m(t, o, n, e = a.value) {
      typeof n.onChange == "function" && n.onChange({ value: t, values: e, componentAttributes: s }), n.changeSync ? h(t, o, e) : I(() => {
        h(t, o, e);
      }), B.push(c.schemas, "编辑组件属性");
    }
    return (t, o) => {
      var n;
      return r(), u("aside", {
        class: "epic-attribute-view",
        key: (n = a.value) == null ? void 0 : n.id
      }, [
        (r(!0), u(k, null, V(s.value, (e) => {
          var d;
          return r(), u("div", {
            key: e.field
          }, [
            C(i("div", {
              class: N(["attr-item", e.layout])
            }, [
              i("div", {
                class: "attr-label",
                title: e.label
              }, D(e.label), 9, F),
              i("div", U, [
                P(f(z), {
                  componentSchema: { ...e, componentProps: { ...e.componentProps, ...e.field === "componentProps.defaultValue" ? (d = a.value) == null ? void 0 : d.componentProps : {}, input: !1, field: void 0, hidden: !1 }, show: !0, noFormItem: !0 },
                  "model-value": f(A)(e.field, e.editData ?? a.value),
                  "onUpdate:modelValue": (b) => m(b, e.field, e, e.editData)
                }, null, 8, ["componentSchema", "model-value", "onUpdate:modelValue"])
              ])
            ], 2), [
              [E, g(e)]
            ])
          ]);
        }), 128))
      ]);
    };
  }
});
export {
  T as default
};
