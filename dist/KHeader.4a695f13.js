import { defineComponent as D, ref as m, inject as _, openBlock as y, createBlock as w, resolveDynamicComponent as V, unref as e, withCtx as l, createElementVNode as o, createVNode as s, createTextVNode as p, createElementBlock as F } from "vue";
import { p as x, _ as N } from "./index.091e7416.js";
import { g as U, r as f, b as B } from "./revoke.807da173.js";
const z = { class: "k-modal-footer" }, A = /* @__PURE__ */ D({
  __name: "KPreview",
  setup(E, { expose: h }) {
    const a = x.getComponent("Modal"), i = x.getComponent("button"), n = m(!1), u = _("schemas"), v = _("script"), d = m(null), r = m("");
    function k() {
      n.value = !1;
    }
    function C() {
      n.value = !0, r.value = U();
    }
    async function g() {
      const t = await d.value.validate();
      console.log("\u8868\u5355\u7ED3\u679C\u4E3A\uFF1A", t);
    }
    return h({
      handleOpen: C
    }), (t, c) => (y(), w(V(e(a)), {
      title: "\u9884\u89C8",
      visible: n.value,
      "onUpdate:visible": c[0] || (c[0] = (b) => n.value = b),
      modelValue: n.value,
      "onUpdate:modelValue": c[1] || (c[1] = (b) => n.value = b),
      width: "800px",
      footer: null
    }, {
      default: l(() => [
        (y(), w(e(N), {
          key: r.value,
          ref_key: "kb",
          ref: d,
          schemas: e(u),
          script: e(v)
        }, null, 8, ["schemas", "script"])),
        o("div", z, [
          s(e(i), { onClick: k }, {
            default: l(() => [
              p("\u5173\u95ED")
            ]),
            _: 1
          }),
          s(e(i), {
            type: "primary",
            onClick: g
          }, {
            default: l(() => [
              p("\u8F93\u51FA\u7ED3\u679C")
            ]),
            _: 1
          })
        ])
      ]),
      _: 1
    }, 40, ["visible", "modelValue"]));
  }
}), L = { class: "k-header" }, M = { class: "k-header-item" }, K = /* @__PURE__ */ o("span", { class: "iconfont icon-chexiao2x" }, null, -1), O = /* @__PURE__ */ o("span", { class: "iconfont icon-fanhui2x" }, null, -1), $ = /* @__PURE__ */ o("div", { class: "k-header-item font-bold font-md" }, " k-designer ", -1), P = { class: "k-header-item" }, j = /* @__PURE__ */ o("span", {
  class: "iconfont icon-yulan",
  style: { "margin-right": "6px" }
}, null, -1), H = /* @__PURE__ */ o("span", {
  class: "iconfont icon-yulan",
  style: { "margin-right": "6px" }
}, null, -1), T = /* @__PURE__ */ D({
  __name: "KHeader",
  emits: ["save"],
  setup(E, { emit: h }) {
    const a = _("schemas"), i = _("designer"), n = x.getComponent("button"), u = m(null), v = f.recordList, d = f.undoList;
    function r() {
      u.value.handleOpen();
    }
    function k() {
      const t = f.undo();
      !t || (B(a.value, t), i.setCheckedNode(a.value[0]));
    }
    function C() {
      const t = f.redo();
      !t || (B(a.value, t), i.setCheckedNode(a.value[0]));
    }
    function g() {
      h("save");
    }
    return (t, c) => (y(), F("header", L, [
      o("div", M, [
        s(e(n), {
          onClick: k,
          size: "small",
          disabled: !e(v).length
        }, {
          default: l(() => [
            K
          ]),
          _: 1
        }, 8, ["disabled"]),
        s(e(n), {
          onClick: C,
          size: "small",
          disabled: !e(d).length
        }, {
          default: l(() => [
            O
          ]),
          _: 1
        }, 8, ["disabled"])
      ]),
      $,
      o("div", P, [
        s(e(n), {
          onClick: r,
          size: "small"
        }, {
          default: l(() => [
            j,
            p(" \u9884\u89C8")
          ]),
          _: 1
        }),
        s(e(n), {
          onClick: g,
          size: "small"
        }, {
          default: l(() => [
            H,
            p(" \u4FDD\u5B58")
          ]),
          _: 1
        })
      ]),
      s(A, {
        ref_key: "preview",
        ref: u
      }, null, 512)
    ]));
  }
});
export {
  T as default
};
