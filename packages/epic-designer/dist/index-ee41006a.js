import { defineComponent as P, inject as L, ref as y, computed as W, watch as E, openBlock as $, createElementBlock as z, Fragment as Y, withDirectives as ae, createElementVNode as x, normalizeClass as Q, toDisplayString as xe, unref as u, createVNode as O, vShow as ie, createBlock as q, mergeProps as ye, withCtx as G, useAttrs as be, provide as _e, onUnmounted as Se, resolveComponent as we, createSlots as Ce, renderList as re, createCommentVNode as pe, isRef as he, shallowRef as ke, nextTick as ve, onMounted as me, normalizeStyle as te, renderSlot as Ne } from "vue";
import { u as ue, p as A, a as $e, f as fe, b as Re, r as U, c as ce, d as Oe, e as le, h as Be, i as Te, j as Le, k as De, w as Ve } from "./index-bc424301.js";
import { _ as ne } from "./icon.vue_vue_type_script_setup_true_lang-3f9e4127.js";
import { d as He } from "./vuedraggable.umd-6a5b6da9.js";
import "./_commonjsHelpers-c5d32002.js";
import "./_vue_commonjs-external-eb7fec7f.js";
const ze = { class: "action-item whitespace-nowrap" }, Me = /* @__PURE__ */ P({
  __name: "previewWidgets",
  setup(I, { expose: w }) {
    const g = L("pageManager", {}), p = L("pageSchema"), d = L("designer"), l = y(null), a = y(null), v = y(null), C = y(!1), k = y(!1), s = y(!0), c = y("top"), { canvasScale: r, disabledZoom: m } = ue();
    let n = null;
    const R = W(() => {
      var S, N, T, _, j;
      const o = g.componentInstances.value, f = (S = d.state.checkedNode) == null ? void 0 : S.id, b = A.getComponentConfingByType((N = d.state.checkedNode) == null ? void 0 : N.type) ?? null;
      if (!f || !(o != null && o[f]))
        return null;
      if (b != null && b.defaultSchema.input && ((T = d.state.checkedNode) == null ? void 0 : T.noFormItem) !== !0)
        return (_ = o[f + "formItem"]) == null ? void 0 : _.$el;
      const h = o[f];
      return ((j = h == null ? void 0 : h.$el) == null ? void 0 : j.nodeName) === "#text" ? null : h == null ? void 0 : h.$el;
    }), D = W(() => {
      var S, N, T, _;
      const o = g.componentInstances.value, f = (S = d.state.hoverNode) == null ? void 0 : S.id, b = A.getComponentConfingByType((N = d.state.hoverNode) == null ? void 0 : N.type) ?? null;
      if (!f || !(o != null && o[f]))
        return null;
      if (b != null && b.defaultSchema.input && ((T = d.state.hoverNode) == null ? void 0 : T.noFormItem) !== !0)
        return (_ = o[f + "formItem"]) == null ? void 0 : _.$el;
      const h = o[f];
      return (h == null ? void 0 : h.$el.nodeName) === "#text" ? null : h == null ? void 0 : h.$el;
    }), { mutationObserver: V, observerConfig: H } = i(e), { startTimedQuery: B, stopTimedQuery: K } = $e(e);
    E(() => R.value, (o) => {
      if (o) {
        C.value = !0, V.observe(o, H);
        const f = o.parentNode;
        f && (f.ondragstart = () => {
          s.value = !1, B();
        }, f.ondragend = () => {
          s.value = !0, K();
        }), e();
      } else
        C.value = !1;
    });
    const { mutationObserver: J, observerConfig: F } = i(t);
    E(() => D.value, (o) => {
      o && (J.observe(o, F), t());
    });
    let Z = 0;
    E(() => {
      var o;
      return (o = d.state.hoverNode) == null ? void 0 : o.id;
    }, (o) => {
      if (o) {
        k.value = !0, clearTimeout(Z);
        return;
      }
      Z = setTimeout(() => {
        k.value = !1;
      }, 300);
    });
    function e() {
      const o = R.value;
      if (!o)
        return;
      const { top: f, left: b } = (n == null ? void 0 : n.getBoundingClientRect()) ?? { top: 0, left: 0 }, { top: h, left: S, width: N, height: T } = o.getBoundingClientRect(), _ = m.value ? 1 : r.value, j = h - f + ((n == null ? void 0 : n.scrollTop) ?? 0) * _, se = S - b + ((n == null ? void 0 : n.scrollLeft) ?? 0) * _, X = T / _;
      l.value && (l.value.style.width = `${N / _}px`, l.value.style.height = `${X}px`, l.value.style.top = `${j / _}px`, l.value.style.left = `${se / _}px`), v.value && (j < 45 && X < 100 ? (v.value.style.top = "", v.value.style.bottom = "-30px", v.value.style["border-radius"] = "0px 0px 4px 4px", c.value = "bottom") : j < 45 ? (v.value.style.top = "0px", v.value.style["border-radius"] = "0px 0px 4px 0", c.value = "center") : (v.value.style.top = "-30px", v.value.style["border-radius"] = "4px 4px 0px 0px", c.value = "top"));
    }
    function t() {
      var X, de;
      const o = D.value;
      if (!o)
        return;
      const { top: f, left: b } = (n == null ? void 0 : n.getBoundingClientRect()) ?? { top: 0, left: 0 }, { top: h, left: S, width: N, height: T } = ((X = o.getBoundingClientRect) == null ? void 0 : X.call(o)) ?? ((de = o.nextElementSibling) == null ? void 0 : de.getBoundingClientRect()), _ = m.value ? 1 : r.value, j = h - f + ((n == null ? void 0 : n.scrollTop) ?? 0) * _, se = S - b + ((n == null ? void 0 : n.scrollLeft) ?? 0) * _;
      a.value && (a.value.style.width = `${N / _}px`, a.value.style.height = `${T / _}px`, a.value.style.top = `${j / _}px`, a.value.style.left = `${se / _}px`);
    }
    function i(o) {
      const f = window.MutationObserver, b = {
        childList: !0,
        attributes: !0,
        subtree: !0
      };
      return {
        mutationObserver: new f(o),
        observerConfig: b
      };
    }
    function M() {
      var N;
      const o = fe(p.schemas, ((N = d.state.checkedNode) == null ? void 0 : N.id) ?? "root");
      if (!o)
        return !1;
      const { list: f, schema: b, index: h } = o, S = Re(b);
      f.splice(h + 1, 0, S), d.setCheckedNode(S), U.push(p.schemas, "复制组件");
    }
    function oe() {
      var S;
      const o = fe(p.schemas, ((S = d.state.checkedNode) == null ? void 0 : S.id) ?? "root");
      if (!o)
        return !1;
      let { list: f, schema: b, index: h } = o;
      f.splice(h, 1), h === f.length && h--, d.setCheckedNode(f[h]), U.push(p.schemas, "删除组件");
    }
    function ee(o) {
      n = o, n == null || n.addEventListener("scroll", () => {
        e();
      }), ce(R, e), ce(D, e);
    }
    return w({
      handleInit: ee
    }), (o, f) => {
      var b, h, S, N, T;
      return $(), z(Y, null, [
        ae(x("div", {
          ref_key: "selectorRef",
          ref: l,
          class: Q(["checked-widget absolute pointer-events-none z-20", c.value + " " + (s.value ? "transition-all" : "")])
        }, [
          x("div", {
            class: "action-box",
            ref_key: "actionBoxRef",
            ref: v
          }, [
            x("div", ze, xe((h = u(A).getComponentConfingByType(((b = u(d).state.checkedNode) == null ? void 0 : b.type) ?? "")) == null ? void 0 : h.defaultSchema.label), 1),
            x("div", {
              title: "复制",
              class: "action-item pointer-events-auto",
              onClick: M
            }, [
              O(u(ne), { name: "icon-fuzhi3" })
            ]),
            x("div", {
              title: "删除",
              class: "action-item pointer-events-auto",
              onClick: oe
            }, [
              O(u(ne), { name: "icon-shanchu1" })
            ])
          ], 512)
        ], 2), [
          [ie, C.value && ((S = u(d).state.checkedNode) == null ? void 0 : S.id) !== "root"]
        ]),
        ae(x("div", {
          ref_key: "hoverWidgetRef",
          ref: a,
          class: "hover-widget absolute transition-all pointer-events-none z-998"
        }, null, 512), [
          [ie, k.value && ((N = u(d).state.checkedNode) == null ? void 0 : N.id) !== ((T = u(d).state.hoverNode) == null ? void 0 : T.id)]
        ])
      ], 64);
    };
  }
}), Ie = /* @__PURE__ */ P({
  name: "EditNodeItem",
  __name: "editNodeItem",
  props: {
    schemas: {}
  },
  emits: ["update:schemas"],
  setup(I, { emit: w }) {
    const g = L("designer"), p = L("pageSchema"), d = I, l = w, a = W({
      get() {
        return d.schemas;
      },
      set(s) {
        l("update:schemas", s);
      }
    });
    function v(s) {
      g.setCheckedNode(a.value[s]), g.setDisableHover(!0);
    }
    function C() {
      g.setDisableHover(), U.push(p.schemas, "拖拽组件");
    }
    function k() {
      U.push(p.schemas, "插入组件");
    }
    return (s, c) => ($(), q(u(He), ye({
      modelValue: a.value,
      "onUpdate:modelValue": c[0] || (c[0] = (r) => a.value = r),
      "item-key": "id",
      "component-data": {
        type: "transition-group"
      },
      class: "draggable-range"
    }, {
      animation: 200,
      group: "edit-draggable",
      handle: ".draggable-item",
      ghostClass: "moveing"
    }, {
      onStart: c[1] || (c[1] = (r) => v(r.oldIndex)),
      onEnd: c[2] || (c[2] = (r) => C()),
      onAdd: c[3] || (c[3] = (r) => {
        v(r.newIndex), k();
      })
    }), {
      item: G(({ element: r, index: m }) => [
        ($(), z("div", {
          class: Q(["widget-box", { "draggable-item": !r.immovable }]),
          key: m
        }, [
          O(ge, { schema: r }, null, 8, ["schema"])
        ], 2))
      ]),
      _: 1
    }, 16, ["modelValue"]));
  }
}), ge = /* @__PURE__ */ P({
  name: "ENodeItem",
  __name: "nodeItem",
  props: {
    schema: {},
    name: {}
  },
  setup(I) {
    const w = be(), g = L("designer"), p = L("pageManager", {}), d = y(null);
    _e("nodeAttrs", w);
    const l = I, a = W(() => {
      var n, R, D, V, H;
      const s = p.componentInstances.value, c = (n = l.schema) == null ? void 0 : n.id, r = A.getComponentConfingByType((R = l.schema) == null ? void 0 : R.type) ?? null;
      if (!c || !(s != null && s[c]))
        return null;
      if (r != null && r.defaultSchema.input && ((D = l.schema) == null ? void 0 : D.noFormItem) !== !0)
        return (V = s[c + "formItem"]) == null ? void 0 : V.$el;
      const m = s[c];
      return ((H = m == null ? void 0 : m.$el) == null ? void 0 : H.nodeName) === "#text" ? null : m == null ? void 0 : m.$el;
    });
    E(() => a.value, (s) => {
      s == null || s.addEventListener("click", v, !1), s == null || s.addEventListener("mouseover", C, !1), s == null || s.addEventListener("mouseout", k, !1);
    }), Se(() => {
      var s, c, r;
      (s = a.value) == null || s.removeEventListener("click", v, !1), (c = a.value) == null || c.removeEventListener("mouseover", C, !1), (r = a.value) == null || r.removeEventListener("mouseout", k, !1);
    });
    function v(s) {
      s.stopPropagation(), g.setCheckedNode(l.schema);
    }
    function C(s) {
      l.schema.type !== "page" && (s.stopPropagation(), g.setHoverNode(l.schema));
    }
    function k(s) {
      s.stopPropagation(), g.setHoverNode(null);
    }
    return (s, c) => {
      var m;
      const r = we("ENodeItem");
      return $(), q(u(Oe), {
        ref_key: "nodeRef",
        ref: d,
        componentSchema: l.schema
      }, Ce({ _: 2 }, [
        (m = l.schema) != null && m.childImmovable ? {
          name: "edit-node",
          fn: G(() => [
            ($(!0), z(Y, null, re(l.schema.children, (n) => ($(), q(r, {
              key: n.id,
              schema: n
            }, null, 8, ["schema"]))), 128))
          ]),
          key: "0"
        } : {
          name: "edit-node",
          fn: G(() => [
            l.schema.children ? ($(), q(Ie, {
              key: 0,
              schemas: l.schema.children,
              "onUpdate:schemas": c[0] || (c[0] = (n) => l.schema.children = n)
            }, null, 8, ["schemas"])) : pe("", !0)
          ]),
          key: "1"
        }
      ]), 1032, ["componentSchema"]);
    };
  }
}), je = { class: "min-w-750px rounded bg-white h-full" }, Ue = /* @__PURE__ */ P({
  __name: "previewJson",
  setup(I, { expose: w }) {
    const g = A.getComponent("modal"), p = A.getComponent("monacoEditor"), d = {
      theme: "vs-light",
      selectOnLineNumbers: !0,
      minimap: {
        enabled: !1
      },
      readOnly: !0
    }, l = y(null), a = y(!1), v = L("pageSchema");
    function C() {
      a.value = !1;
    }
    function k() {
      a.value = !0, l.value ? l.value.setValue(JSON.stringify(v, null, 2)) : setTimeout(() => {
        k();
      }, 300);
    }
    function s(c = "epic-data.json") {
      let r = "data:text/json;charset=utf-8,";
      r += JSON.stringify(v, null, 2);
      var m = encodeURI(r), n = document.createElement("a");
      n.setAttribute("href", m), n.setAttribute("download", c), n.click();
    }
    return w({
      handleOpen: k
    }), (c, r) => ($(), q(u(g), {
      modelValue: a.value,
      "onUpdate:modelValue": r[0] || (r[0] = (m) => a.value = m),
      title: "查看数据",
      class: "w-900px",
      width: "900px",
      onClose: C,
      onOk: s,
      okText: "导出数据"
    }, {
      default: G(() => [
        x("div", je, [
          O(u(p), {
            ref_key: "monacoEditorRef",
            ref: l,
            class: "editor h-full",
            config: d,
            language: "json"
          }, null, 512)
        ])
      ]),
      _: 1
    }, 8, ["modelValue"]));
  }
}), Ae = { class: "edit-toolbar flex items-center justify-between px-4 mx-1" }, We = { class: "flex-1 h-full flex items-center" }, Fe = ["title", "onClick"], Ee = { class: "flex-1 h-full flex items-center justify-center" }, Pe = ["title", "onClick"], Je = { class: "flex-1 h-full flex items-center justify-end" }, Ze = {
  key: 0,
  class: "flex items-center ml-12px"
}, Qe = { class: "pr-8px w-82px cursor-pointer" }, Ke = { class: "w-90px cursor-pointer" }, Xe = /* @__PURE__ */ P({
  __name: "toolbar",
  setup(I) {
    const w = A.getComponent("slider"), g = A.getComponent("select"), { canvasScale: p, disabledZoom: d } = ue(), l = y("pc"), a = L("pageSchema"), v = L("designer"), C = y(null), k = [
      {
        icon: "icon-a-diannaotoubu",
        title: "pc",
        key: "pc"
      },
      {
        icon: "icon-a-pingbantoubu",
        title: "平板",
        key: "pad"
      },
      {
        icon: "icon-a-shoujitoubu",
        title: "手机",
        key: "mobile"
      }
    ], s = U.recordList, c = U.undoList, r = W(() => [
      {
        icon: "icon-daima1",
        title: "查看数据",
        on: () => B()
      },
      {
        icon: "icon-shangchuan1",
        title: "导入数据",
        on: K
      },
      {
        icon: "icon-shanchu1",
        title: "清空",
        on: H
      },
      {
        icon: "icon-chexiao2x",
        title: "撤销",
        on: D,
        disabled: !s.value.length
      },
      {
        icon: "icon-fanhui2x",
        title: "重做",
        on: V,
        disabled: !c.value.length
      }
    ]), m = y(null), n = W({
      get() {
        return `${(p.value * 100).toFixed(0)}%`;
      },
      set(e) {
        p.value = Number(e);
      }
    }), R = [
      {
        label: "60%",
        value: "0.6"
      },
      {
        label: "80%",
        value: "0.8"
      },
      {
        label: "100%",
        value: "1.0"
      },
      {
        label: "120%",
        value: "1.2"
      },
      {
        label: "140%",
        value: "1.4"
      }
    ];
    function D() {
      const e = U.undo();
      e && (le(a.schemas, e), v.setCheckedNode(a.schemas[0]));
    }
    function V() {
      const e = U.redo();
      e && (le(a.schemas, e), v.setCheckedNode(a.schemas[0]));
    }
    function H() {
      v.reset();
    }
    function B() {
      C.value.handleOpen();
    }
    function K() {
      var e;
      (e = m.value) == null || e.click();
    }
    function J(e) {
      var M;
      const t = (M = e.target.files) == null ? void 0 : M[0];
      if (!t)
        return;
      e.target.value = null;
      const i = new FileReader();
      i.readAsText(t), i.onload = (oe) => {
        var ee;
        F((ee = oe.target) == null ? void 0 : ee.result);
      };
    }
    function F(e) {
      try {
        let t = JSON.parse(e ?? "");
        t.schemas || (t = Be(t)), le(a, t);
      } catch (t) {
        console.error(t);
      }
    }
    function Z(e) {
      l.value = e;
      const t = {
        pc: {},
        pad: {
          width: "800px"
        },
        mobile: {
          width: "420px"
        }
      };
      a.canvas = t[e];
    }
    return (e, t) => ($(), z(Y, null, [
      x("div", Ae, [
        x("div", We, [
          ($(!0), z(Y, null, re(r.value, (i, M) => ($(), z("div", {
            title: i.title,
            class: Q(["action-item h-90% px-10px flex items-center hover:bg-gray-50 cursor-pointer", { disabled: i.disabled }]),
            key: M,
            onClick: i.on
          }, [
            O(u(ne), {
              name: i.icon
            }, null, 8, ["name"])
          ], 10, Fe))), 128))
        ]),
        ae(x("input", {
          type: "file",
          ref_key: "fileRef",
          ref: m,
          accept: ".json,.txt",
          onChange: J
        }, null, 544), [
          [ie, !1]
        ]),
        x("div", Ee, [
          ($(), z(Y, null, re(k, (i) => x("div", {
            title: i.title,
            class: Q(["device-item h-90% px-10px flex items-center hover:bg-gray-50 cursor-pointer", { checked: i.key === l.value }]),
            key: i.key,
            onClick: (M) => Z(i.key)
          }, [
            O(u(ne), {
              name: i.icon
            }, null, 8, ["name"])
          ], 10, Pe)), 64))
        ]),
        x("div", Je, [
          u(d) ? pe("", !0) : ($(), z("div", Ze, [
            x("div", Qe, [
              O(u(g), {
                value: n.value,
                "onUpdate:value": t[0] || (t[0] = (i) => n.value = i),
                modelValue: n.value,
                "onUpdate:modelValue": t[1] || (t[1] = (i) => n.value = i),
                options: R,
                size: "small"
              }, null, 8, ["value", "modelValue"])
            ]),
            x("div", Ke, [
              O(u(w), {
                min: 0.6,
                max: 1.4,
                step: 0.01,
                tooltip: !1,
                value: u(p),
                "onUpdate:value": t[2] || (t[2] = (i) => he(p) ? p.value = i : null),
                modelValue: u(p),
                "onUpdate:modelValue": t[3] || (t[3] = (i) => he(p) ? p.value = i : null)
              }, null, 8, ["value", "modelValue"])
            ])
          ]))
        ])
      ]),
      O(Ue, {
        ref_key: "previewJson",
        ref: C
      }, null, 512)
    ], 64));
  }
}), Ye = { class: "h-full flex flex-col relative" }, qe = ["draggable"], Ge = /* @__PURE__ */ P({
  __name: "editScreenContainer",
  setup(I) {
    const w = L("pageSchema"), g = y(null), p = y(null), d = y(null), { pressSpace: l, disabledZoom: a } = ue(), { handleElementDragStart: v, handleElementDrag: C, handleElementDragEnd: k } = Te(g), { width: s, height: c } = Le(g), { canvasScale: r, handleZoom: m } = De(p);
    let n = 0, R = 0;
    const D = y({}), V = y({}), H = y({}), B = ke({ width: 0, height: 0 });
    E(() => {
      var e, t;
      return { width: (e = w.canvas) == null ? void 0 : e.width, height: (t = w.canvas) == null ? void 0 : t.height };
    }, J), E(H, () => {
      ve(K);
    }), me(() => {
      var e, t;
      J({ width: (e = w.canvas) == null ? void 0 : e.width, height: (t = w.canvas) == null ? void 0 : t.height });
    });
    function K() {
      const e = u(d);
      e && (B.value = {
        width: e.clientWidth,
        height: e.clientHeight
      });
    }
    function J({ width: e, height: t }) {
      H.value = {
        width: e ?? "0",
        height: t ?? "0"
      };
    }
    Ve(s, F), E(B, F);
    function F() {
      if (a.value) {
        V.value = { width: n + "px", height: R + "px", transform: "translate(0px, 20px)" };
        return;
      }
      let e = B.value.width || n, t = B.value.height || R;
      D.value = { width: s.value + e + "px", height: c.value + t + "px" }, V.value = { width: e + "px", height: t + "px" }, Z();
    }
    function Z() {
      ve(() => {
        let e = B.value.width || n;
        const i = (B.value.height || R) / 2, M = e / 2;
        g.value.scrollTo(M, i);
      });
    }
    return ce(g, ([{ contentRect: e }]) => {
      if (n = e.width - 60, R = e.height - 80, !a.value)
        if (B.value.width === 0)
          r.value = 1;
        else {
          const t = (n - 20) / B.value.width;
          r.value = t < 1.2 ? t : r.value;
        }
      F();
    }), (e, t) => ($(), z("div", Ye, [
      O(Xe),
      x("div", {
        ref_key: "editScreenContainerRef",
        ref: g,
        class: Q(["flex-1 overflow-auto overflow-y-hidden epic-edit-screen-container", { "cursor-grab": u(l) }]),
        draggable: u(l),
        onWheel: t[0] || (t[0] = //@ts-ignore
        (...i) => u(m) && u(m)(...i)),
        onDragstart: t[1] || (t[1] = //@ts-ignore
        (...i) => u(v) && u(v)(...i)),
        onDragend: t[2] || (t[2] = //@ts-ignore
        (...i) => u(k) && u(k)(...i)),
        onDrag: t[3] || (t[3] = //@ts-ignore
        (...i) => u(C) && u(C)(...i))
      }, [
        x("div", {
          id: "canvasContainer",
          class: "flex items-center justify-center",
          style: te(D.value)
        }, [
          x("div", {
            ref_key: "draggableElRef",
            ref: p,
            class: "transition-all"
          }, [
            x("div", {
              class: Q({ "pointer-events-none": u(l) }),
              style: te(V.value)
            }, [
              Ne(e.$slots, "default")
            ], 6)
          ], 512)
        ], 4)
      ], 42, qe),
      x("div", {
        ref_key: "sizeBoxRef",
        ref: d,
        class: "absolute op-0 pointer-events-none",
        style: te(H.value)
      }, null, 4)
    ]));
  }
}), et = { class: "epic-edit-canvas" }, it = /* @__PURE__ */ P({
  __name: "index",
  setup(I) {
    const w = y(null), g = y(null), p = L("pageSchema"), d = W(() => p.schemas[0]), l = W(() => ({
      width: "100%",
      height: "100%"
    }));
    return me(() => {
      var a;
      (a = g.value) == null || a.handleInit(w.value);
    }), (a, v) => ($(), z("section", et, [
      O(Ge, null, {
        default: G(() => [
          x("div", {
            ref_key: "epicEditRangeRef",
            ref: w,
            class: "epic-edit-range rounded-md overflow-auto relative",
            style: te(l.value)
          }, [
            O(ge, { schema: d.value }, null, 8, ["schema"]),
            O(Me, {
              ref_key: "ePreviewWidgetsRef",
              ref: g
            }, null, 512)
          ], 4)
        ]),
        _: 1
      })
    ]));
  }
});
export {
  it as default
};
