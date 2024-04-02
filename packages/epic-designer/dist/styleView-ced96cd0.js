import { defineComponent as b, inject as c, computed as g, openBlock as p, createElementBlock as d, Fragment as S, renderList as _, createElementVNode as s, withDirectives as P, normalizeClass as k, toDisplayString as w, createVNode as V, unref as i, vShow as E, nextTick as z } from "vue";
import { d as C, o as I, s as u, r as N } from "./index-bc424301.js";
const x = ["title"], A = { class: "attr-input" }, U = /* @__PURE__ */ b({
  __name: "styleView",
  setup(B) {
    const f = c("designer"), h = c("pageSchema"), a = [
      {
        label: "宽度",
        type: "EInputSize",
        field: "componentProps.style.width"
      },
      {
        label: "高度",
        type: "EInputSize",
        field: "componentProps.style.height"
      },
      {
        label: "内边距",
        type: "EInputSize",
        field: "componentProps.style.padding"
      },
      {
        label: "外边距",
        type: "EInputSize",
        field: "componentProps.style.margin"
      },
      {
        label: "背景色",
        type: "color-picker",
        field: "componentProps.style.backgroundColor",
        componentProps: {
          type: "color",
          style: {
            // width: '60px'
          }
        }
      },
      {
        label: "字体颜色",
        type: "color-picker",
        field: "componentProps.style.color",
        componentProps: {
          type: "color",
          style: {
            // width: '60px'
          }
        }
      }
    ], l = g(() => f.state.checkedNode);
    function y(o) {
      var t;
      return typeof o.show == "boolean" ? o.show : ((t = o.show) == null ? void 0 : t.call(o, { values: l.value })) ?? !0;
    }
    function m(o, t, n, e = l.value) {
      typeof n.onChange == "function" && n.onChange({ value: o, values: e, componentStyles: a }), n.changeSync ? u(o, t, e) : z(() => {
        u(o, t, e);
      }), N.push(h.schemas, "编辑组件属性");
    }
    return (o, t) => {
      var n;
      return p(), d("aside", {
        class: "epic-attribute-view",
        key: (n = l.value) == null ? void 0 : n.id
      }, [
        (p(), d(S, null, _(a, (e) => {
          var r;
          return s("div", {
            key: e.field
          }, [
            P(s("div", {
              class: k(["attr-item", e.layout])
            }, [
              s("div", {
                class: "attr-label",
                title: e.label
              }, w(e.label), 9, x),
              s("div", A, [
                V(i(C), {
                  componentSchema: { ...e, componentProps: { ...e.componentProps, ...e.field === "componentProps.defaultValue" ? (r = l.value) == null ? void 0 : r.componentProps : {}, input: !1, field: void 0, hidden: !1 }, show: !0, noFormItem: !0 },
                  "model-value": i(I)(e.field, e.editData ?? l.value),
                  "onUpdate:modelValue": (v) => m(v, e.field, e, e.editData)
                }, null, 8, ["componentSchema", "model-value", "onUpdate:modelValue"])
              ])
            ], 2), [
              [E, y(e)]
            ])
          ]);
        }), 64))
      ]);
    };
  }
});
export {
  U as default
};
