import { defineComponent as j, inject as A, openBlock as m, createElementBlock as g, Fragment as U, renderList as B, createElementVNode as s, toDisplayString as M, createVNode as b, unref as _, withCtx as R, createCommentVNode as H, createTextVNode as T, ref as N, computed as S, withDirectives as F, normalizeClass as K, vShow as P, reactive as Q, createBlock as L, nextTick as W, toRaw as q, watch as X } from "vue";
import { l as G, p as O, d as Y, m as Z } from "./index-bc424301.js";
import { _ as D } from "./icon.vue_vue_type_script_setup_true_lang-3f9e4127.js";
import { d as ee } from "./vuedraggable.umd-6a5b6da9.js";
import { _ as te } from "./tree.vue_vue_type_script_setup_true_lang-babad864.js";
import "./_commonjsHelpers-c5d32002.js";
import "./_vue_commonjs-external-eb7fec7f.js";
const ne = { class: "event-info" }, oe = ["title"], le = { class: "event-btn" }, ae = { class: "epic-action-editor-main" }, se = { class: "epic-editor-item" }, ie = { class: "w-36px text-lg" }, ce = { class: "flex-1" }, de = { key: 0 }, ue = { key: 1 }, re = { key: 2 }, me = { class: "opr-box" }, pe = ["onClick"], ve = ["onClick"], fe = /* @__PURE__ */ j({
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
  setup($, { emit: E }) {
    const p = $, C = E, h = A("pageSchema");
    function k(d) {
      C("add", d);
    }
    function y(d) {
      return G(h.schemas, d).label;
    }
    function v(d, f) {
      var i;
      const t = o(f);
      t[f] = p.events[f].filter((e, w) => d !== w), (i = t[f]) != null && i.length || delete t[f], C("update:modelValue", t);
    }
    function u(d, f, t) {
      C("edit", d, f, t);
    }
    function o(d) {
      const f = {};
      return p.allEvents.forEach((t) => {
        if (!p.events[t.type].length || t.type === d)
          return !1;
        f[t.type] = p.events[t.type];
      }), f;
    }
    return (d, f) => (m(!0), g(U, null, B($.itemEvents, (t) => (m(), g("div", {
      key: t.type,
      class: "event-item"
    }, [
      s("div", ne, [
        s("div", {
          class: "event-label",
          title: t.describe
        }, M(t.describe), 9, oe),
        s("div", le, [
          b(_(D), {
            name: "icon-tianjia1",
            onClick: (i) => k(t.type)
          }, null, 8, ["onClick"])
        ])
      ]),
      s("div", ae, [
        b(_(ee), {
          modelValue: p.events[t.type],
          "onUpdate:modelValue": (i) => p.events[t.type] = i,
          "item-key": "id",
          "component-data": {
            type: "transition-group"
          },
          group: "option-list",
          handle: ".handle",
          animation: 200
        }, {
          item: R(({ element: i, index: e }) => [
            s("div", se, [
              s("div", ie, [
                b(_(D), {
                  class: "mr-2 text-lg cursor-move handle",
                  name: "icon-tuozhuai"
                })
              ]),
              s("div", ce, [
                i.type === "component" ? (m(), g("div", de, M(y(i.componentId)), 1)) : i.type === "custom" ? (m(), g("div", ue, " 自定义函数 ")) : i.type === "public" ? (m(), g("div", re, " 公共函数 ")) : H("", !0),
                T(" " + M(i.methodName), 1)
              ]),
              s("div", me, [
                s("div", {
                  class: "edit-btn",
                  onClick: (w) => u(e, t.type, i)
                }, [
                  b(_(D), { name: "icon-tiaozheng" })
                ], 8, pe),
                s("div", {
                  class: "del-btn",
                  onClick: (w) => v(e, t.type)
                }, [
                  b(_(D), { name: "icon-shanchu1" })
                ], 8, ve)
              ])
            ])
          ]),
          _: 2
        }, 1032, ["modelValue", "onUpdate:modelValue"])
      ])
    ]))), 128));
  }
}), he = { class: "h-full flex flex-col" }, ge = /* @__PURE__ */ s("div", { class: "pb-2" }, " 自定义函数编辑 ", -1), _e = /* @__PURE__ */ j({
  __name: "EScriptEdit",
  setup($) {
    const E = O.getComponent("monacoEditor"), p = {
      theme: "vs-light",
      selectOnLineNumbers: !0,
      minimap: {
        enabled: !1
      }
    }, C = N(null), h = A("pageSchema");
    return (k, y) => (m(), g("div", he, [
      ge,
      b(_(E), {
        ref_key: "monacoEditorRef",
        ref: C,
        modelValue: _(h).script,
        "onUpdate:modelValue": y[0] || (y[0] = (v) => _(h).script = v),
        class: "editor flex-1",
        config: p,
        language: "javascript"
      }, null, 8, ["modelValue"])
    ]));
  }
}), ye = { class: "epic-attribute-view" }, Ie = ["title"], Ce = { class: "attr-input" }, xe = /* @__PURE__ */ j({
  __name: "EArgsEditor",
  props: {
    modelValue: {},
    actionArgsConfigs: {}
  },
  emits: ["update:modelValue"],
  setup($, { emit: E }) {
    const p = $, C = E, h = S(() => p.modelValue ? JSON.parse(p.modelValue) : []);
    function k(v) {
      var u;
      return typeof v.show == "boolean" ? v.show : typeof v.show == "function" ? (u = v.show) == null ? void 0 : u.call(v, { values: h.value }) : !0;
    }
    function y(v, u) {
      const o = [
        ...JSON.parse(p.modelValue ?? "[]")
      ];
      o[u] = v, C("update:modelValue", JSON.stringify(o));
    }
    return (v, u) => (m(), g("aside", ye, [
      (m(!0), g(U, null, B(p.actionArgsConfigs, (o) => (m(), g("div", {
        key: o.field + o.type
      }, [
        F(s("div", {
          class: K(["attr-item", o.layout])
        }, [
          s("div", {
            class: "attr-label",
            title: o.label
          }, M(o.label), 9, Ie),
          s("div", Ce, [
            b(_(Y), {
              componentSchema: { ...o, componentProps: { ...o.componentProps, input: !1, field: void 0, hidden: !1 }, show: !0, noFormItem: !0 },
              "model-value": h.value[o.field],
              "onUpdate:modelValue": (d) => y(d, o.field)
            }, null, 8, ["componentSchema", "model-value", "onUpdate:modelValue"])
          ])
        ], 2), [
          [P, k(o)]
        ])
      ]))), 128))
    ]));
  }
}), Ve = { class: "rounded bg-white epic-modal-action-main" }, be = { class: "epic-modal-left-panel h-full flex flex-col" }, ke = { class: "flex flex-1 h-0 flex-col" }, Ee = { class: "flex-1 h-0" }, $e = { class: "epic-action-select h-30/100 flex flex-col" }, Ne = /* @__PURE__ */ s("div", { class: "mb-2" }, "动作选择", -1), we = { class: "flex-1 overflow-auto pr-8px" }, Se = ["onClick"], Oe = { class: "text-center pt-42px text-gray-400" }, Ae = { class: "epic-modal-right-panel" }, Me = {
  key: 1,
  class: "text-center pt-42px text-gray-400"
}, Ue = /* @__PURE__ */ j({
  __name: "EActionModal",
  emits: ["add", "edit"],
  setup($, { expose: E, emit: p }) {
    const C = O.getComponent("modal"), h = N(!0), k = A("pageSchema"), y = A("pageManager", {}), v = A("designer"), u = N(!1), o = N([]), d = N(null), f = p, t = S(() => {
      var c;
      return e.actionItem.type === "component" ? d.value ? (c = O.getComponentConfings()[d.value.type].config.action) == null ? void 0 : c.map((n) => ({ label: n.describe, value: n.type })) : [] : e.actionItem.type === "custom" ? Object.entries(y.funcs.value).filter(([n, V]) => typeof V == "function").map(([n]) => ({ label: n, value: n })) : e.actionItem.type === "public" ? Object.entries(O.publicMethods).map(([n]) => ({ label: n, value: n })) : [];
    }), i = S(() => {
      if (e.actionItem.type === "component" && d.value) {
        const c = O.getComponentConfings()[d.value.type].config.action, n = c == null ? void 0 : c.find((V) => V.type === e.actionItem.methodName);
        if (n != null && n.argsConfigs) {
          const V = n.argsConfigs.findIndex((I) => I.label === "设置数据");
          V !== -1 && (n.argsConfigs[V] = {
            ...v.state.checkedNode,
            label: "设置数据",
            field: "0"
          });
        }
        return (n == null ? void 0 : n.argsConfigs) ?? [];
      }
      return [];
    }), e = Q({
      actionItem: {
        type: "custom",
        methodName: "test",
        componentId: null
      },
      cacheData: {}
    });
    function w() {
      var c;
      u.value = !0, h.value = !0, e.actionItem.type = "custom", e.actionItem.componentId = null, (c = t.value) != null && c.length && x(t.value[0].value);
    }
    function z(c) {
      if (u.value = !0, h.value = !1, d.value = null, c.componentId) {
        const n = G(k.schemas, c.componentId);
        d.value = n, o.value = [c.componentId];
      }
      W(() => {
        e.actionItem.componentId = c.componentId, e.actionItem.methodName = c.methodName, e.actionItem.type = c.type, e.actionItem.args = c.args;
      });
    }
    function J() {
      if (!e.actionItem.methodName) {
        alert("请先选择动作方法");
        return;
      }
      f(h.value ? "add" : "edit", Z(q(e.actionItem))), a();
    }
    function a() {
      u.value = !1, o.value = [], e.cacheData = {};
    }
    function l(c) {
      var n;
      e.actionItem.componentId = null, e.actionItem.type = c, d.value = null, e.actionItem.methodName = null, o.value = [], (n = t.value) != null && n.length && x(t.value[0].value);
    }
    function r(c) {
      var n;
      e.actionItem.args && (e.cacheData[e.actionItem.componentId + e.actionItem.methodName] = e.actionItem.args), e.actionItem.componentId = c.id, e.actionItem.type = "component", e.actionItem.methodName = null, d.value = c.componentSchema, (n = t.value) != null && n.length && x(t.value[0].value);
    }
    function x(c) {
      e.actionItem.methodName = c, e.actionItem.args = e.cacheData[e.actionItem.componentId + e.actionItem.methodName];
    }
    return E({
      handleOpen: w,
      handleOpenEdit: z
    }), (c, n) => (m(), L(_(C), {
      modelValue: u.value,
      "onUpdate:modelValue": n[4] || (n[4] = (V) => u.value = V),
      class: "w-1200px",
      width: "1200px",
      onClose: a,
      onOk: J,
      title: "动作配置"
    }, {
      default: R(() => {
        var V;
        return [
          s("div", Ve, [
            s("div", be, [
              s("div", ke, [
                s("div", {
                  class: K(["fun-btn", { checked: e.actionItem.type === "custom" }]),
                  onClick: n[0] || (n[0] = (I) => l("custom"))
                }, " 自定义函数 ", 2),
                s("div", {
                  class: K(["fun-btn", { checked: e.actionItem.type === "public" }]),
                  onClick: n[1] || (n[1] = (I) => l("public"))
                }, " 公共函数 ", 2),
                T(" 组件 "),
                s("div", Ee, [
                  b(_(te), {
                    selectedKeys: o.value,
                    "onUpdate:selectedKeys": n[2] || (n[2] = (I) => o.value = I),
                    options: _(k).schemas,
                    onNodeClick: r
                  }, null, 8, ["selectedKeys", "options"])
                ])
              ]),
              s("div", $e, [
                Ne,
                s("div", we, [
                  (m(!0), g(U, null, B(t.value, (I) => (m(), g("div", {
                    class: K([{ checked: I.value === e.actionItem.methodName }, "action-item"]),
                    onClick: (je) => x(I.value),
                    key: I.value
                  }, [
                    s("span", null, M(I.label), 1)
                  ], 10, Se))), 128)),
                  F(s("div", Oe, "当前组件暂无动作", 512), [
                    [P, !((V = t.value) != null && V.length)]
                  ])
                ])
              ])
            ]),
            s("div", Ae, [
              e.actionItem.type === "custom" ? (m(), L(_e, { key: 0 })) : i.value.length === 0 ? (m(), g("div", Me, "暂无配置")) : (m(), L(xe, {
                key: 2,
                modelValue: e.actionItem.args,
                "onUpdate:modelValue": n[3] || (n[3] = (I) => e.actionItem.args = I),
                actionArgsConfigs: i.value
              }, null, 8, ["modelValue", "actionArgsConfigs"]))
            ])
          ])
        ];
      }),
      _: 1
    }, 8, ["modelValue"]));
  }
}), Te = /* @__PURE__ */ j({
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
  setup($, { emit: E }) {
    const p = O.getComponent("Collapse"), C = O.getComponent("CollapseItem"), h = N(null);
    let k = 0;
    const y = $, v = E, u = S({
      get() {
        return y.modelValue;
      },
      set(a) {
        v("update:modelValue", a);
      }
    }), o = N([]), d = S(() => y.eventList.filter((a) => a.events.length)), f = S(() => y.eventList.map((a) => a.events).flat()), t = N({});
    f.value.forEach((a) => {
      t.value[a.type] = S({
        get() {
          var l;
          return ((l = u.value) == null ? void 0 : l[a.type]) ?? [];
        },
        set(l) {
          l && l.length ? u.value[a.type] = l.map((r) => q(r)) : delete u.value[a.type];
        }
      });
    }), X(() => d.value, (a) => {
      a.length && (o.value = a.filter((l) => {
        for (let r = 0; r < l.events.length; r++) {
          const x = l.events[r].type;
          if (t.value[x].length)
            return !0;
        }
        return !1;
      }).map((l) => l.title));
    }, {
      // 配置选项
      immediate: !0
      // 立即执行一次回调函数
    });
    let i = "";
    function e(a) {
      var l;
      (l = h.value) == null || l.handleOpen(), i = a;
    }
    function w(a, l, r) {
      var x;
      (x = h.value) == null || x.handleOpenEdit(r), k = a, i = l;
    }
    function z(a) {
      t.value[i][k] = a, u.value[i] = [...t.value[i] ?? []];
    }
    function J(a) {
      if (!u.value) {
        u.value = { [i]: [...t.value[i] ?? [], a] };
        return;
      }
      u.value[i] = [...t.value[i] ?? [], a];
    }
    return (a, l) => (m(), g(U, null, [
      b(_(p), {
        modelValue: o.value,
        "onUpdate:modelValue": l[1] || (l[1] = (r) => o.value = r),
        activeKey: o.value,
        "onUpdate:activeKey": l[2] || (l[2] = (r) => o.value = r),
        "expanded-names": o.value,
        "onUpdate:expandedNames": l[3] || (l[3] = (r) => o.value = r)
      }, {
        default: R(() => [
          (m(!0), g(U, null, B(d.value, (r) => (m(), L(_(C), {
            key: r.title,
            title: r.title,
            header: r.title,
            name: r.title
          }, {
            default: R(() => [
              b(fe, {
                modelValue: u.value,
                "onUpdate:modelValue": l[0] || (l[0] = (x) => u.value = x),
                "item-events": r.events,
                "all-events": f.value,
                events: t.value,
                onAdd: e,
                onEdit: w
              }, null, 8, ["modelValue", "item-events", "all-events", "events"])
            ]),
            _: 2
          }, 1032, ["title", "header", "name"]))), 128))
        ]),
        _: 1
      }, 8, ["modelValue", "activeKey", "expanded-names"]),
      b(Ue, {
        ref_key: "EActionModalRef",
        ref: h,
        onAdd: J,
        onEdit: z
      }, null, 512)
    ], 64));
  }
});
export {
  Te as default
};
