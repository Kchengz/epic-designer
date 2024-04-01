import { defineComponent as M, inject as L, openBlock as m, createElementBlock as h, Fragment as A, renderList as B, createElementVNode as i, toDisplayString as O, createVNode as I, unref as _, withCtx as R, createCommentVNode as G, createTextVNode as J, ref as E, computed as w, withDirectives as T, normalizeClass as D, vShow as F, reactive as H, createBlock as K, nextTick as Q, toRaw as P, watch as W } from "vue";
import { l as q, p as S, d as X, m as Y } from "./index-c81ab9b4.js";
import { _ as j } from "./icon.vue_vue_type_script_setup_true_lang-3f9e4127.js";
import { d as Z } from "./vuedraggable.umd-6a5b6da9.js";
import { _ as ee } from "./tree.vue_vue_type_script_setup_true_lang-86849f34.js";
import "./_commonjsHelpers-c5d32002.js";
import "./_vue_commonjs-external-eb7fec7f.js";
const te = { class: "event-info" }, ne = ["title"], oe = { class: "event-btn" }, le = { class: "epic-action-editor-main" }, ae = { class: "epic-editor-item" }, se = { class: "w-36px text-lg" }, ie = { class: "flex-1" }, ce = { key: 0 }, de = { key: 1 }, ue = { key: 2 }, re = { class: "opr-box" }, me = ["onClick"], pe = ["onClick"], ve = /* @__PURE__ */ M({
  __name: "EActionEditorItem",
  props: {
    itemEvents: {
      type: Array,
      default: () => []
    },
    allEvents: {
      type: Array,
      default: () => []
    },
    modelValue: {
      type: Object,
      default: () => []
    },
    events: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["add", "edit", "update:modelValue"],
  setup(k, { emit: V }) {
    const p = k, y = V, f = L("pageSchema");
    function x(v) {
      y("add", v);
    }
    function g(v) {
      return q(f.schemas, v).label;
    }
    function r(v, c) {
      var e;
      const l = t(c);
      l[c] = p.events[c].filter(($, N) => v !== N), (e = l[c]) != null && e.length || delete l[c], y("update:modelValue", l);
    }
    function u(v, c, l) {
      y("edit", v, c, l);
    }
    function t(v) {
      const c = {};
      return p.allEvents.forEach((l) => {
        if (!p.events[l.type].length || l.type === v)
          return !1;
        c[l.type] = p.events[l.type];
      }), c;
    }
    return (v, c) => (m(!0), h(A, null, B(k.itemEvents, (l) => (m(), h("div", {
      key: l.type,
      class: "event-item"
    }, [
      i("div", te, [
        i("div", {
          class: "event-label",
          title: l.describe
        }, O(l.describe), 9, ne),
        i("div", oe, [
          I(_(j), {
            name: "icon-tianjia1",
            onClick: (e) => x(l.type)
          }, null, 8, ["onClick"])
        ])
      ]),
      i("div", le, [
        I(_(Z), {
          modelValue: p.events[l.type],
          "onUpdate:modelValue": (e) => p.events[l.type] = e,
          "item-key": "id",
          "component-data": {
            type: "transition-group"
          },
          group: "option-list",
          handle: ".handle",
          animation: 200
        }, {
          item: R(({ element: e, index: $ }) => [
            i("div", ae, [
              i("div", se, [
                I(_(j), {
                  class: "mr-2 text-lg cursor-move handle",
                  name: "icon-tuozhuai"
                })
              ]),
              i("div", ie, [
                e.type === "component" ? (m(), h("div", ce, O(g(e.componentId)), 1)) : e.type === "custom" ? (m(), h("div", de, " 自定义函数 ")) : e.type === "public" ? (m(), h("div", ue, " 公共函数 ")) : G("", !0),
                J(" " + O(e.methodName), 1)
              ]),
              i("div", re, [
                i("div", {
                  class: "edit-btn",
                  onClick: (N) => u($, l.type, e)
                }, [
                  I(_(j), { name: "icon-tiaozheng" })
                ], 8, me),
                i("div", {
                  class: "del-btn",
                  onClick: (N) => r($, l.type)
                }, [
                  I(_(j), { name: "icon-shanchu1" })
                ], 8, pe)
              ])
            ])
          ]),
          _: 2
        }, 1032, ["modelValue", "onUpdate:modelValue"])
      ])
    ]))), 128));
  }
}), fe = { class: "h-full flex flex-col" }, he = /* @__PURE__ */ i("div", { class: "pb-2" }, " 自定义函数编辑 ", -1), _e = /* @__PURE__ */ M({
  __name: "EScriptEdit",
  setup(k) {
    const V = S.getComponent("monacoEditor"), p = {
      theme: "vs-light",
      selectOnLineNumbers: !0,
      minimap: {
        enabled: !1
      }
    }, y = E(null), f = L("pageSchema");
    return (x, g) => (m(), h("div", fe, [
      he,
      I(_(V), {
        ref_key: "monacoEditorRef",
        ref: y,
        modelValue: _(f).script,
        "onUpdate:modelValue": g[0] || (g[0] = (r) => _(f).script = r),
        class: "editor flex-1",
        config: p,
        language: "javascript"
      }, null, 8, ["modelValue"])
    ]));
  }
}), ge = { class: "epic-attribute-view" }, ye = ["title"], Ie = { class: "attr-input" }, xe = /* @__PURE__ */ M({
  __name: "EArgsEditor",
  props: {
    modelValue: {},
    actionArgsConfigs: {}
  },
  emits: ["update:modelValue"],
  setup(k, { emit: V }) {
    const p = k, y = V, f = w(() => p.modelValue ? JSON.parse(p.modelValue) : []);
    function x(r) {
      var u;
      return typeof r.show == "boolean" ? r.show : typeof r.show == "function" ? (u = r.show) == null ? void 0 : u.call(r, { values: f.value }) : !0;
    }
    function g(r, u) {
      const t = [
        ...JSON.parse(p.modelValue ?? "[]")
      ];
      t[u] = r, y("update:modelValue", JSON.stringify(t));
    }
    return (r, u) => (m(), h("aside", ge, [
      (m(!0), h(A, null, B(p.actionArgsConfigs, (t) => (m(), h("div", {
        key: t.field + t.type
      }, [
        T(i("div", {
          class: D(["attr-item", t.layout])
        }, [
          i("div", {
            class: "attr-label",
            title: t.label
          }, O(t.label), 9, ye),
          i("div", Ie, [
            I(_(X), {
              componentSchema: { ...t, componentProps: { ...t.componentProps, input: !1, field: void 0, hidden: !1 }, show: !0, noFormItem: !0 },
              "model-value": f.value[t.field],
              "onUpdate:modelValue": (v) => g(v, t.field)
            }, null, 8, ["componentSchema", "model-value", "onUpdate:modelValue"])
          ])
        ], 2), [
          [F, x(t)]
        ])
      ]))), 128))
    ]));
  }
}), Ce = { class: "rounded bg-white epic-modal-action-main" }, Ve = { class: "epic-modal-left-panel h-full flex flex-col" }, ke = { class: "flex flex-1 h-0 flex-col" }, be = { class: "flex-1 h-0" }, Ee = { class: "epic-action-select h-30/100 flex flex-col" }, $e = /* @__PURE__ */ i("div", { class: "mb-2" }, "动作选择", -1), Ne = { class: "flex-1 overflow-auto pr-8px" }, we = ["onClick"], Se = { class: "text-center pt-42px text-gray-400" }, Oe = { class: "epic-modal-right-panel" }, Ae = {
  key: 1,
  class: "text-center pt-42px text-gray-400"
}, Me = /* @__PURE__ */ M({
  __name: "EActionModal",
  emits: ["add", "edit"],
  setup(k, { expose: V, emit: p }) {
    const y = S.getComponent("modal"), f = E(!0), x = L("pageSchema"), g = L("pageManager", {}), r = E(!1), u = E([]), t = E(null), v = p, c = w(() => {
      var n;
      return e.actionItem.type === "component" ? t.value ? (n = S.getComponentConfings()[t.value.type].config.action) == null ? void 0 : n.map((o) => ({ label: o.describe, value: o.type })) : [] : e.actionItem.type === "custom" ? Object.entries(g.funcs.value).filter(([o, b]) => typeof b == "function").map(([o]) => ({ label: o, value: o })) : e.actionItem.type === "public" ? Object.entries(S.publicMethods).map(([o]) => ({ label: o, value: o })) : [];
    }), l = w(() => {
      if (e.actionItem.type === "component" && t.value) {
        console.log();
        const n = S.getComponentConfings()[t.value.type].config.action, o = n == null ? void 0 : n.find((b) => b.type === e.actionItem.methodName);
        return (o == null ? void 0 : o.argsConfigs) ?? [];
      }
      return [];
    }), e = H({
      actionItem: {
        type: "custom",
        methodName: "test",
        componentId: null
      },
      cacheData: {}
    });
    function $() {
      var n;
      r.value = !0, f.value = !0, e.actionItem.type = "custom", e.actionItem.componentId = null, (n = c.value) != null && n.length && d(c.value[0].value);
    }
    function N(n) {
      if (r.value = !0, f.value = !1, t.value = null, n.componentId) {
        const o = q(x.schemas, n.componentId);
        t.value = o, u.value = [n.componentId];
      }
      Q(() => {
        e.actionItem.componentId = n.componentId, e.actionItem.methodName = n.methodName, e.actionItem.type = n.type, e.actionItem.args = n.args;
      });
    }
    function z() {
      if (!e.actionItem.methodName) {
        alert("请先选择动作方法");
        return;
      }
      v(f.value ? "add" : "edit", Y(P(e.actionItem))), U();
    }
    function U() {
      r.value = !1, u.value = [], e.cacheData = {};
    }
    function s(n) {
      var o;
      e.actionItem.componentId = null, e.actionItem.type = n, t.value = null, e.actionItem.methodName = null, u.value = [], (o = c.value) != null && o.length && d(c.value[0].value);
    }
    function a(n) {
      var o;
      e.actionItem.args && (e.cacheData[e.actionItem.componentId + e.actionItem.methodName] = e.actionItem.args), e.actionItem.componentId = n.id, e.actionItem.type = "component", e.actionItem.methodName = null, t.value = n.componentSchema, (o = c.value) != null && o.length && d(c.value[0].value);
    }
    function d(n) {
      e.actionItem.methodName = n, e.actionItem.args = e.cacheData[e.actionItem.componentId + e.actionItem.methodName];
    }
    return V({
      handleOpen: $,
      handleOpenEdit: N
    }), (n, o) => (m(), K(_(y), {
      modelValue: r.value,
      "onUpdate:modelValue": o[4] || (o[4] = (b) => r.value = b),
      class: "w-1200px",
      width: "1200px",
      onClose: U,
      onOk: z,
      title: "动作配置"
    }, {
      default: R(() => {
        var b;
        return [
          i("div", Ce, [
            i("div", Ve, [
              i("div", ke, [
                i("div", {
                  class: D(["fun-btn", { checked: e.actionItem.type === "custom" }]),
                  onClick: o[0] || (o[0] = (C) => s("custom"))
                }, " 自定义函数 ", 2),
                i("div", {
                  class: D(["fun-btn", { checked: e.actionItem.type === "public" }]),
                  onClick: o[1] || (o[1] = (C) => s("public"))
                }, " 公共函数 ", 2),
                J(" 组件 "),
                i("div", be, [
                  I(_(ee), {
                    selectedKeys: u.value,
                    "onUpdate:selectedKeys": o[2] || (o[2] = (C) => u.value = C),
                    options: _(x).schemas,
                    onNodeClick: a
                  }, null, 8, ["selectedKeys", "options"])
                ])
              ]),
              i("div", Ee, [
                $e,
                i("div", Ne, [
                  (m(!0), h(A, null, B(c.value, (C) => (m(), h("div", {
                    class: D([{ checked: C.value === e.actionItem.methodName }, "action-item"]),
                    onClick: (Ue) => d(C.value),
                    key: C.value
                  }, [
                    i("span", null, O(C.label), 1)
                  ], 10, we))), 128)),
                  T(i("div", Se, "当前组件暂无动作", 512), [
                    [F, !((b = c.value) != null && b.length)]
                  ])
                ])
              ])
            ]),
            i("div", Oe, [
              e.actionItem.type === "custom" ? (m(), K(_e, { key: 0 })) : l.value.length === 0 ? (m(), h("div", Ae, "暂无配置")) : (m(), K(xe, {
                key: 2,
                modelValue: e.actionItem.args,
                "onUpdate:modelValue": o[3] || (o[3] = (C) => e.actionItem.args = C),
                actionArgsConfigs: l.value
              }, null, 8, ["modelValue", "actionArgsConfigs"]))
            ])
          ])
        ];
      }),
      _: 1
    }, 8, ["modelValue"]));
  }
}), Je = /* @__PURE__ */ M({
  __name: "index",
  props: {
    eventList: {
      type: Array,
      default: () => []
    },
    modelValue: {
      type: Object
    }
  },
  emits: ["update:modelValue"],
  setup(k, { emit: V }) {
    const p = S.getComponent("Collapse"), y = S.getComponent("CollapseItem"), f = E(null);
    let x = 0;
    const g = k, r = V, u = w({
      get() {
        return g.modelValue;
      },
      set(s) {
        r("update:modelValue", s);
      }
    }), t = E([]), v = w(() => g.eventList.filter((s) => s.events.length)), c = w(() => g.eventList.map((s) => s.events).flat()), l = E({});
    c.value.forEach((s) => {
      l.value[s.type] = w({
        get() {
          var a;
          return ((a = u.value) == null ? void 0 : a[s.type]) ?? [];
        },
        set(a) {
          a && a.length ? u.value[s.type] = a.map((d) => P(d)) : delete u.value[s.type];
        }
      });
    }), W(() => v.value, (s) => {
      s.length && (t.value = s.filter((a) => {
        for (let d = 0; d < a.events.length; d++) {
          const n = a.events[d].type;
          if (l.value[n].length)
            return !0;
        }
        return !1;
      }).map((a) => a.title));
    }, {
      // 配置选项
      immediate: !0
      // 立即执行一次回调函数
    });
    let e = "";
    function $(s) {
      var a;
      (a = f.value) == null || a.handleOpen(), e = s;
    }
    function N(s, a, d) {
      var n;
      (n = f.value) == null || n.handleOpenEdit(d), x = s, e = a;
    }
    function z(s) {
      l.value[e][x] = s, u.value[e] = [...l.value[e] ?? []];
    }
    function U(s) {
      if (!u.value) {
        u.value = { [e]: [...l.value[e] ?? [], s] };
        return;
      }
      u.value[e] = [...l.value[e] ?? [], s];
    }
    return (s, a) => (m(), h(A, null, [
      I(_(p), {
        modelValue: t.value,
        "onUpdate:modelValue": a[1] || (a[1] = (d) => t.value = d),
        activeKey: t.value,
        "onUpdate:activeKey": a[2] || (a[2] = (d) => t.value = d),
        "expanded-names": t.value,
        "onUpdate:expandedNames": a[3] || (a[3] = (d) => t.value = d)
      }, {
        default: R(() => [
          (m(!0), h(A, null, B(v.value, (d) => (m(), K(_(y), {
            key: d.title,
            title: d.title,
            header: d.title,
            name: d.title
          }, {
            default: R(() => [
              I(ve, {
                modelValue: u.value,
                "onUpdate:modelValue": a[0] || (a[0] = (n) => u.value = n),
                "item-events": d.events,
                "all-events": c.value,
                events: l.value,
                onAdd: $,
                onEdit: N
              }, null, 8, ["modelValue", "item-events", "all-events", "events"])
            ]),
            _: 2
          }, 1032, ["title", "header", "name"]))), 128))
        ]),
        _: 1
      }, 8, ["modelValue", "activeKey", "expanded-names"]),
      I(Me, {
        ref_key: "EActionModalRef",
        ref: f,
        onAdd: U,
        onEdit: z
      }, null, 512)
    ], 64));
  }
});
export {
  Je as default
};
