var ye = Object.defineProperty;
var _e = (d, t, e) => t in d ? ye(d, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : d[t] = e;
var z = (d, t, e) => (_e(d, typeof t != "symbol" ? t + "" : t, e), e);
import { ref as K, defineComponent as w, inject as S, watch as j, shallowRef as ae, reactive as Q, computed as B, resolveComponent as ie, unref as s, openBlock as g, createBlock as U, normalizeProps as W, mergeProps as X, withCtx as A, resolveDynamicComponent as se, createVNode as b, guardReactiveProps as ue, renderSlot as re, createCommentVNode as H, h as Y, useSlots as pe, provide as x, Suspense as me, createElementVNode as y, createElementBlock as F, Fragment as T, renderList as O, nextTick as te, toRaw as Z, toDisplayString as J, createTextVNode as q, normalizeClass as ee, isRef as fe } from "vue";
import { l as M, g as ne, c as ge, a as Ce, d as ve, r as ce, b as de, f as be } from "./revoke.807da173.js";
class Ee {
  constructor() {
    z(this, "components", {});
    z(this, "componentConfigs", {});
    z(this, "schemaGroup", [
      {
        title: "\u57FA\u7840\u7EC4\u4EF6",
        list: ["input"]
      }
    ]);
    z(this, "viewsContainers", {
      activitybars: [],
      rightSidebars: []
    });
    z(this, "publicMethods", {
      test: {
        describe: "\u6D4B\u8BD5\u51FD\u6570",
        methodName: "test",
        method: () => {
          alert("\u6D4B\u8BD5\u51FD\u6570\u5F39\u51FA");
        }
      }
    });
  }
  component(t, e) {
    if (this.components[t])
      return console.warn(`${t}\u7EC4\u4EF6\u5DF2\u5728pluginManager\u4E2D\u6CE8\u518C`), !1;
    typeof e == "function" && (e = M(e)), this.components[t] = e;
  }
  registerComponent(t) {
    this.component(
      t.defaultSchema.type,
      t.component
    ), this.componentConfigs[t.defaultSchema.type] = t;
  }
  getComponents() {
    return this.components;
  }
  getComponent(t) {
    return this.components[t];
  }
  registerActivitybar(t) {
    typeof t.component == "function" && (t.component = M(t.component)), this.viewsContainers.activitybars.push(t);
  }
  getActivitybars() {
    return this.viewsContainers.activitybars;
  }
  registerRightSidebar(t) {
    typeof t.component == "function" && (t.component = M(t.component)), this.viewsContainers.rightSidebars.push(t);
  }
  getRightSidebars() {
    return this.viewsContainers.rightSidebars;
  }
  getComponentConfings() {
    return this.componentConfigs;
  }
  getComponentConfingByType(t) {
    return this.componentConfigs[t];
  }
  setSchemaGroup(t) {
    this.schemaGroup = t;
  }
  addSchemaGroup(t) {
    this.schemaGroup.push(t);
  }
  getSchemaByGroup() {
    return this.schemaGroup.map((e) => {
      const v = e.list.map((m) => {
        var i;
        const f = (i = this.componentConfigs[m]) == null ? void 0 : i.defaultSchema;
        return f ? {
          ...f,
          id: ne()
        } : (console.warn(`${m} \u7EC4\u4EF6\u672A\u6CE8\u518C\u5230pluginManager\u4E2D`), !1);
      }).filter((m) => m);
      return {
        ...e,
        list: v
      };
    });
  }
  addPublicMethod(t) {
    this.publicMethods[t.methodName] = t;
  }
}
const $ = new Ee();
function oe() {
  const d = K({}), t = K({});
  function e(c) {
    return d.value[c];
  }
  function v(c, a) {
    return d.value[c] = a;
  }
  function m(c) {
    new Function(`${c}`).bind({
      getComponent: e,
      defineExpose: f
    })();
  }
  function f(c) {
    c && (t.value = c);
  }
  function i(c) {
    c == null || c.forEach((a) => {
      var o, n;
      const u = a.componentId && e(a.componentId);
      if (u && typeof u[a.methodName] == "function") {
        u[a.methodName](a.args), console.log(u[a.methodName]);
        return;
      }
      (n = (o = t.value)[a.methodName]) == null || n.call(o, a.args);
    });
  }
  return {
    componentInstances: d,
    funcs: t,
    getComponentInstance: e,
    addComponentInstance: v,
    setMethods: m,
    doActions: i
  };
}
const ke = /* @__PURE__ */ w({
  __name: "KNode",
  props: {
    record: {
      type: Object,
      required: !0
    },
    modelValue: {}
  },
  emits: ["update:modelValue", "change"],
  setup(d, { emit: t }) {
    const e = d, v = S("formData", {}), m = S("slots", {}), f = S("pageManager", {}), i = $.getComponent("form-item"), c = K(null);
    e.record.field && j(() => e.modelValue, (r) => {
      v[e.record.field] = r;
    }, {
      immediate: !0
    }), j(() => c.value, (r) => {
      e.record.id && f.addComponentInstance(e.record.id, r);
    });
    const a = ae(null), u = ae({}), o = Q({}), n = B(() => {
      var r, k, I, N;
      return (r = e.record.componentProps) != null && r.hidden ? !1 : typeof e.record.show == "boolean" ? e.record.show : (N = (I = (k = e.record).show) == null ? void 0 : I.call(k, { values: v })) != null ? N : !0;
    }), _ = B(() => {
      var r;
      return {
        ...e.record,
        rules: n.value && ((r = e.record.rules) == null ? void 0 : r.map((k) => ({
          ...k,
          validator: k.validator && f.funcs.value[k.validator]
        })))
      };
    });
    async function p() {
      var N, R, P, E, D, V, G;
      if ((N = e.record.componentProps) != null && N.defaultValue && l((R = e.record.componentProps) == null ? void 0 : R.defaultValue), (P = e.record.dataSource) != null && P.api && h((E = e.record.dataSource) == null ? void 0 : E.api, e.record), e.record.type === "slot") {
        const L = e.record.slotName;
        return L && j(() => v[e.record.field], () => {
          var le;
          a.value = Y("div", null, (le = m[L]) == null ? void 0 : le.call(m, {
            record: e.record,
            model: v
          }));
        }, {
          immediate: !0
        }), !1;
      }
      const r = $.getComponent(e.record.type);
      if (!r)
        return console.error(`\u7EC4\u4EF6${e.record.type}\u672A\u6CE8\u518C`), !1;
      const k = (V = (D = $.getComponentConfingByType(e.record.type)) == null ? void 0 : D.bindModel) != null ? V : "modelValue";
      if (typeof r == "function") {
        const L = await r();
        a.value = (G = L.default) != null ? G : L;
      } else
        a.value = r;
      const I = {};
      e.record.on && Object.keys(e.record.on).forEach((L) => {
        I[`on${ge(L)}`] = () => f.doActions(e.record.on[L]);
      }), u.value = {
        record: e.record,
        bindModel: k,
        [`onUpdate:${k}`]: l,
        ...I
      };
    }
    function h(r, k) {
      var R;
      const I = (R = k.dataSource.dataField) != null ? R : "options";
      async function N() {
        typeof r == "function" && (o[I] = await r());
      }
      N();
    }
    function l(r) {
      t("update:modelValue", r), t("change", r), e.record.field && (v[e.record.field] = r);
    }
    let C = null;
    return j(() => e.record, (r) => {
      const k = JSON.stringify({ ...r, children: void 0 });
      if (k === C)
        return !1;
      C = k, p();
    }, {
      immediate: !0,
      deep: !0
    }), (r, k) => {
      const I = ie("KNode", !0);
      return e.record.isInput && s(a) && s(n) ? (g(), U(s(i), W(X({ key: 0 }, s(_))), {
        default: A(() => [
          (g(), U(se(s(a)), X({
            ref_key: "componentInstance",
            ref: c
          }, { ...s(u), ...e.record.componentProps, ...o, [s(u).bindModel]: s(v)[e.record.field] }), {
            node: A((N) => [
              b(I, W(ue(N)), null, 16)
            ]),
            "edit-node": A(() => [
              re(r.$slots, "edit-node")
            ]),
            _: 3
          }, 16))
        ]),
        _: 3
      }, 16)) : s(a) && s(n) ? (g(), U(se(s(a)), X({
        key: 1,
        model: s(v),
        ref_key: "componentInstance",
        ref: c
      }, { ...s(u), ...e.record.componentProps, ...o, [s(u).bindModel]: s(v)[e.record.field] || d.modelValue }), {
        node: A((N) => [
          b(I, W(ue(N)), null, 16)
        ]),
        "edit-node": A(() => [
          re(r.$slots, "edit-node")
        ]),
        _: 3
      }, 16, ["model"])) : H("", !0);
    };
  }
}), Fe = { class: "loading-box" }, Ve = /* @__PURE__ */ w({
  __name: "KBuilder",
  props: {
    schemas: {
      type: Array
    },
    script: {
      type: String,
      default: ""
    }
  },
  emits: ["ready"],
  setup(d, { expose: t, emit: e }) {
    const v = d, m = M(() => import("./revoke.807da173.js").then((p) => p.K)), f = oe(), i = Q({}), c = pe(), a = K({});
    x("formData", i), x("slots", c), x("pageManager", f), x("forms", a), j(() => v.script, (p) => {
      f.setMethods(p);
    }, {
      immediate: !0
    });
    async function u(p = "default") {
      var l;
      return ((l = a.value) == null ? void 0 : l[p]) ? i : (console.error(`\u8868\u5355 [name=${p}] \u4E0D\u5B58\u5728`), !1);
    }
    async function o(p = "default") {
      var l;
      const h = (l = a.value) == null ? void 0 : l[p];
      return h ? (await (h == null ? void 0 : h.validate()), i) : (console.error(`\u8868\u5355 [name=${p}] \u4E0D\u5B58\u5728`), !1);
    }
    function n(p) {
      Object.assign(i, p);
    }
    function _() {
      te(() => {
        e("ready", { pageManager: f });
      });
    }
    return t({
      getData: u,
      setData: n,
      validate: o
    }), (p, h) => (g(), U(me, { onResolve: _ }, {
      default: A(() => [
        y("div", null, [
          (g(!0), F(T, null, O(v.schemas, (l, C) => (g(), U(s(ke), {
            ref_for: !0,
            ref: "Knode",
            key: C,
            record: l
          }, null, 8, ["record"]))), 128))
        ])
      ]),
      fallback: A(() => [
        y("div", Fe, [
          b(s(m))
        ])
      ]),
      _: 1
    }));
  }
}), Ae = { class: "k-designer-main" }, $e = { class: "k-split-view-container" }, De = { class: "loading-box" }, Ke = /* @__PURE__ */ w({
  __name: "KDesigner",
  emits: ["ready", "save"],
  setup(d, { expose: t, emit: e }) {
    const v = M(() => import("./KHeader.4a695f13.js")), m = M(() => import("./KActionBar.e7f6c396.js")), f = M(() => import("./KEditContainer.7d3034a3.js")), i = M(() => import("./KRightSidebar.1e545171.js")), c = M(() => import("./KFooter.a2ad55da.js")), a = M(() => import("./revoke.807da173.js").then((V) => V.K)), u = oe(), o = Q({
      checkedNode: null,
      hoverNode: null,
      disableHover: !1,
      matched: []
    }), n = K([]), _ = K(""), p = Q({});
    j(() => _.value, (V) => {
      u.setMethods(V);
    });
    const h = [{
      type: "page",
      id: "root",
      children: [],
      componentProps: {
        style: {
          padding: "16px"
        }
      }
    }], l = `const { defineExpose, getComponent } = this;

function test (){
    console.log('test')
}

// \u901A\u8FC7defineExpose\u66B4\u9732\u7684\u51FD\u6570\u6216\u8005\u5C5E\u6027
defineExpose({
 test 
})`;
    _.value = l, x("schemas", n), x("script", _), x("formData", p), x("pageManager", u);
    function C() {
      n.value = ve(h), r(n.value[0]), ce.push(n.value, "\u521D\u59CB\u5316\u64A4\u9500\u529F\u80FD");
    }
    x("designer", {
      setCheckedNode: r,
      setHoverNode: k,
      setDisableHover: N,
      state: o
    });
    async function r(V = n.value[0]) {
      o.checkedNode = V, o.matched = Ce(n.value, V.id);
    }
    async function k(V = null) {
      var G;
      if (!V || o.disableHover)
        return o.hoverNode = null, !1;
      if ((V == null ? void 0 : V.id) === ((G = o.hoverNode) == null ? void 0 : G.id))
        return !1;
      o.hoverNode = V;
    }
    function I() {
      te(() => {
        e("ready", { pageManager: u });
      });
    }
    async function N(V = !1) {
      o.disableHover = V;
    }
    function R(V) {
      de(n.value, V.schemas), _.value = V.script;
    }
    function P() {
      return {
        schemas: Z(n.value),
        script: _.value
      };
    }
    function E() {
      de(n.value, h), _.value = l, r(n.value[0]), ce.push(n.value, "\u91CD\u7F6E\u64CD\u4F5C");
    }
    function D() {
      e("save", { schemas: Z(n.value), script: _.value });
    }
    return C(), t({
      setData: R,
      getData: P,
      reset: E
    }), (V, G) => (g(), U(me, { onResolve: I }, {
      default: A(() => [
        y("div", Ae, [
          b(s(v), { onSave: D }),
          y("div", $e, [
            b(s(m)),
            b(s(f)),
            b(s(i))
          ]),
          b(s(c))
        ])
      ]),
      fallback: A(() => [
        y("div", De, [
          b(s(a))
        ])
      ]),
      _: 1
    }));
  }
}), Ie = {
  component: () => import("./monacoEditor.155cdd76.js").then((d) => d.a),
  defaultSchema: {
    label: "\u4EE3\u7801\u7F16\u8F91\u5668",
    type: "monacoEditor",
    field: "monacoEditor",
    icon: "icon-write",
    isInput: !0
  },
  config: {
    attribute: [
      {
        label: "\u5B57\u6BB5\u540D",
        type: "input",
        field: "field"
      },
      {
        label: "\u6807\u9898",
        type: "input",
        field: "label"
      },
      {
        label: "\u9ED8\u8BA4\u503C",
        type: "monacoEditor",
        field: "componentProps.defaultValue"
      }
    ]
  },
  bindModel: "value"
}, Ne = {
  component: () => import("./KPage.02c10c8a.js"),
  defaultSchema: {
    label: "\u9875\u9762",
    type: "page",
    componentProps: {},
    children: []
  },
  config: {
    attribute: [
      {
        label: "\u9875\u9762\u540D\u79F0",
        type: "input",
        field: "name"
      }
    ]
  }
}, xe = {
  key: 0,
  class: "del-btn"
}, Se = ["onClick"], we = /* @__PURE__ */ y("span", { class: "iconfont icon-shanchu" }, null, -1), Be = [
  we
], Ue = /* @__PURE__ */ w({
  __name: "KColEditor",
  props: {
    modelValue: {
      type: Array,
      default: () => []
    }
  },
  emits: ["update:modelValue"],
  setup(d, { emit: t }) {
    const e = d, v = $.getComponent("number"), m = B({
      get() {
        return e.modelValue;
      },
      set(c) {
        t("update:modelValue", c);
      }
    });
    function f() {
      const c = {
        type: "col",
        children: [],
        componentProps: {
          span: 12
        },
        id: ne()
      };
      m.value.push(c);
    }
    function i(c) {
      m.value = m.value.filter((a, u) => c !== u);
    }
    return (c, a) => (g(), F("div", null, [
      (g(!0), F(T, null, O(s(m), (u, o) => (g(), F("div", {
        class: "k-col-editor-item",
        key: o
      }, [
        b(s(v), {
          style: { width: "100%" },
          value: u.componentProps.span,
          "onUpdate:value": (n) => u.componentProps.span = n,
          modelValue: u.componentProps.span,
          "onUpdate:modelValue": (n) => u.componentProps.span = n,
          min: 1,
          max: 24
        }, null, 8, ["value", "onUpdate:value", "modelValue", "onUpdate:modelValue"]),
        s(m).length > 1 ? (g(), F("div", xe, [
          y("span", {
            onClick: (n) => i(o)
          }, Be, 8, Se)
        ])) : H("", !0)
      ]))), 128)),
      y("div", {
        class: "add-btn",
        onClick: f
      }, "\u6DFB\u52A0")
    ]));
  }
}), Pe = {
  key: 0,
  class: "del-btn"
}, Me = ["onClick"], Te = /* @__PURE__ */ y("span", { class: "iconfont icon-shanchu" }, null, -1), Re = [
  Te
], Oe = /* @__PURE__ */ w({
  __name: "KTabPaneEditor",
  props: {
    modelValue: {
      type: Array,
      default: () => []
    }
  },
  emits: ["update:modelValue"],
  setup(d, { emit: t }) {
    const e = d, v = $.getComponent("input"), m = B({
      get() {
        return e.modelValue;
      },
      set(c) {
        t("update:modelValue", c);
      }
    });
    function f() {
      const c = {
        label: "\u6807\u7B7E\u9875",
        type: "tab-pane",
        children: [],
        id: ne()
      };
      m.value.push(c);
    }
    function i(c) {
      m.value = m.value.filter((a, u) => c !== u);
    }
    return (c, a) => (g(), F("div", null, [
      (g(!0), F(T, null, O(s(m), (u, o) => (g(), F("div", {
        class: "k-col-editor-item",
        key: o
      }, [
        b(s(v), {
          style: { width: "100%" },
          value: u.label,
          "onUpdate:value": (n) => u.label = n,
          modelValue: u.label,
          "onUpdate:modelValue": (n) => u.label = n
        }, null, 8, ["value", "onUpdate:value", "modelValue", "onUpdate:modelValue"]),
        s(m).length > 1 ? (g(), F("div", Pe, [
          y("span", {
            onClick: (n) => i(o)
          }, Re, 8, Me)
        ])) : H("", !0)
      ]))), 128)),
      y("div", {
        class: "add-btn",
        onClick: f
      }, "\u6DFB\u52A0")
    ]));
  }
}), Le = /* @__PURE__ */ w({
  __name: "index",
  props: {
    modelValue: {
      type: String,
      default: null
    }
  },
  emits: ["update:modelValue"],
  setup(d, { emit: t }) {
    const e = d, v = $.getComponent("input"), m = $.getComponent("select"), f = K(null), i = K("px"), c = [
      { label: "px", value: "px" },
      { label: "%", value: "%" },
      { label: "vw", value: "vw" },
      { label: "vh", value: "vh" },
      { label: "rem", value: "rem" },
      { label: "em", value: "em" },
      { label: "pt", value: "pt" }
    ];
    j(() => e.modelValue, (u) => {
      const o = parseFloat(u);
      if (!o)
        return f.value = null, !1;
      f.value = String(o), i.value = u.substring(f.value.length);
    }, {
      immediate: !0
    });
    function a() {
      t("update:modelValue", f.value ? f.value + i.value : void 0);
    }
    return (u, o) => (g(), U(s(v), {
      modelValue: f.value,
      "onUpdate:modelValue": o[2] || (o[2] = (n) => f.value = n),
      value: f.value,
      "onUpdate:value": o[3] || (o[3] = (n) => f.value = n),
      type: "number",
      min: "0",
      onInput: a
    }, {
      append: A(() => [
        b(s(m), {
          modelValue: i.value,
          "onUpdate:modelValue": o[0] || (o[0] = (n) => i.value = n),
          style: { width: "68px" },
          onChange: a,
          options: c
        }, null, 8, ["modelValue"])
      ]),
      addonAfter: A(() => [
        b(s(m), {
          value: i.value,
          "onUpdate:value": o[1] || (o[1] = (n) => i.value = n),
          style: { width: "68px" },
          onChange: a,
          options: c
        }, null, 8, ["value"])
      ]),
      _: 1
    }, 8, ["modelValue", "value"]));
  }
}), je = { class: "event-info" }, Ge = ["title"], ze = { class: "event-btn" }, He = ["onClick"], qe = { class: "k-action-editor-main" }, Je = { class: "del-btn" }, Qe = ["onClick"], We = /* @__PURE__ */ y("span", { class: "iconfont icon-shanchu" }, null, -1), Xe = [
  We
], Ye = /* @__PURE__ */ w({
  __name: "KActionEditorItem",
  props: {
    modelValue: {
      type: Object,
      default: () => ({})
    },
    itemEvents: {
      type: Array
    },
    allEvents: {
      type: Array
    },
    events: {
      type: Object
    }
  },
  emits: ["update:modelValue", "add"],
  setup(d, { emit: t }) {
    const e = d, v = S("schemas");
    function m(a) {
      t("add", a);
    }
    function f(a) {
      const { schema: u } = be(v.value, a);
      return u.label;
    }
    function i(a, u) {
      var n;
      const o = c(u);
      o[u] = e.events[u].value.filter((_, p) => a !== p), (n = o[u].length) != null || delete o[u], t("update:modelValue", o);
    }
    function c(a) {
      const u = {};
      return e.allEvents.forEach((o) => {
        if (!e.events[o.type].value.length || o.type === a)
          return !1;
        u[o.type] = e.events[o.type].value;
      }), u;
    }
    return (a, u) => (g(!0), F(T, null, O(d.itemEvents, (o) => {
      var n;
      return g(), F("div", {
        class: "event-item",
        key: o.type
      }, [
        y("div", je, [
          y("div", {
            class: "event-label",
            title: o.describe
          }, J(o.describe), 9, Ge),
          y("div", ze, [
            y("span", {
              onClick: (_) => m(o.type),
              class: "iconfont icon-tianjia1"
            }, null, 8, He)
          ])
        ]),
        y("div", qe, [
          (g(!0), F(T, null, O((n = e.events[o.type]) == null ? void 0 : n.value, (_, p) => (g(), F("div", {
            class: "k-editor-item",
            key: p
          }, [
            q(J(_.componentId && f(_.componentId)) + " " + J(_.methodName) + " ", 1),
            y("div", Je, [
              y("span", {
                onClick: (h) => i(p, o.type)
              }, Xe, 8, Qe)
            ])
          ]))), 128))
        ])
      ]);
    }), 128));
  }
}), Ze = { class: "k-tree-node" }, et = /* @__PURE__ */ y("span", { class: "iconfont icon-zhankai" }, null, -1), tt = [
  et
], nt = /* @__PURE__ */ w({
  __name: "KTreeNode",
  props: {
    record: {
      type: Object,
      required: !0
    }
  },
  setup(d) {
    const t = d, e = S("slots", {}), v = S("expandedKeys"), m = S("treeProps"), f = S("handleSelect"), i = B(() => {
      var n;
      return v.value.includes((n = t.record.id) != null ? n : "");
    }), c = B(() => {
      var n;
      return (n = m.selectedKeys.value) != null ? n : m.selectedKeys;
    }), a = w({
      setup() {
        return () => {
          var n, _, p;
          return Y("span", { class: { text: !0, hover: m.hoverKey === t.record.id, checked: c.value.includes(t.record.id) }, onClick: () => f(t.record.id, t.record) }, (p = (n = e["tree-node"]) == null ? void 0 : n.call(e, t)) != null ? p : Y("span", { class: { "text-padding": !0 } }, (_ = $.getComponentConfingByType(t.record.type)) == null ? void 0 : _.defaultSchema.label));
        };
      }
    });
    function u() {
      const n = t.record.id;
      if (!n)
        return !1;
      v.value.includes(n) ? v.value = v.value.filter((_) => _ !== n) : v.value.push(n);
    }
    function o() {
      var _;
      const n = t.record.id;
      if (!n || !((_ = t.record.children) != null && _.length))
        return !1;
      v.value.push(n);
    }
    return o(), (n, _) => {
      var h, l;
      const p = ie("KTreeNode", !0);
      return g(), F("li", Ze, [
        y("a", null, [
          (h = t.record.children) != null && h.length ? (g(), F("span", {
            key: 0,
            onClick: u,
            class: ee(["icon-expanded", { expanded: s(i) }])
          }, tt, 2)) : H("", !0),
          b(s(a))
        ]),
        (l = t.record.children) != null && l.length ? (g(), F("ul", {
          key: 0,
          class: ee(["k-tree-sublist", { expanded: s(i) }])
        }, [
          (g(!0), F(T, null, O(t.record.children, (C) => (g(), U(p, {
            record: C,
            key: C.id
          }, null, 8, ["record"]))), 128))
        ], 2)) : H("", !0)
      ]);
    };
  }
}), ot = { class: "k-tree-main" }, he = /* @__PURE__ */ w({
  __name: "KTree",
  props: {
    options: {
      type: Array
    },
    selectedKeys: {
      type: Array
    },
    hoverKey: {
      type: String
    }
  },
  emits: ["update:selectedKeys", "node-click"],
  setup(d, { emit: t }) {
    const e = d, v = pe();
    x("slots", v);
    const m = K([]);
    function f(i, c) {
      t("update:selectedKeys", [i]), t("node-click", { id: i, record: c });
    }
    return x("expandedKeys", m), x("treeProps", e), x("handleSelect", f), (i, c) => (g(), F("ul", ot, [
      (g(!0), F(T, null, O(e.options, (a) => (g(), U(nt, {
        record: a,
        key: a.id
      }, null, 8, ["record"]))), 128))
    ]));
  }
}), lt = { class: "k-script-edit" }, at = { class: "k-script-left-panel" }, st = { class: "k-tree-select" }, ut = { class: "tree-node-item" }, rt = ["onClick"], ct = { class: "k-action-select" }, dt = ["onClick"], it = { class: "k-script-right-panel" }, pt = /* @__PURE__ */ w({
  __name: "KScriptEdit",
  setup(d) {
    const t = $.getComponent("monacoEditor"), e = {
      theme: "vs-light",
      selectOnLineNumbers: !0,
      minimap: {
        enabled: !1
      }
    }, v = K(null), m = S("pageManager", {}), f = S("schemas"), i = S("script"), c = K([]), a = K(null), u = B(() => {
      var p;
      return a.value ? (p = $.getComponentConfings()[a.value.type].config.action) == null ? void 0 : p.map((h) => ({ label: h.describe, value: h.type })) : Object.entries(m.funcs.value).filter(([h, l]) => typeof l == "function").map(([h]) => ({ label: h, value: h }));
    });
    function o(p) {
      a.value = p.record;
    }
    function n(p) {
      var h;
      (h = v.value) == null || h.insertText(`getComponent('${p.id}')`);
    }
    function _(p) {
      var h;
      (h = v.value) == null || h.insertText(`getComponent('${a.value.id}').${p.value}()`);
    }
    return (p, h) => (g(), F("div", lt, [
      y("div", at, [
        y("div", st, [
          b(s(he), {
            options: s(f),
            selectedKeys: c.value,
            "onUpdate:selectedKeys": h[0] || (h[0] = (l) => c.value = l),
            onNodeClick: o
          }, {
            "tree-node": A(({ record: l }) => {
              var C;
              return [
                y("div", ut, [
                  y("span", null, J((C = s($).getComponentConfingByType(l.type)) == null ? void 0 : C.defaultSchema.label), 1),
                  y("span", {
                    class: "action",
                    onClick: (r) => n(l)
                  }, "get", 8, rt)
                ])
              ];
            }),
            _: 1
          }, 8, ["options", "selectedKeys"])
        ]),
        y("div", ct, [
          (g(!0), F(T, null, O(s(u), (l) => (g(), F("div", {
            class: "action-item",
            key: l.value
          }, [
            y("span", null, J(l.label), 1),
            y("span", {
              class: "action",
              onClick: (C) => _(l)
            }, "get", 8, dt)
          ]))), 128))
        ])
      ]),
      y("div", it, [
        b(s(t), {
          ref_key: "monacoEditorRef",
          ref: v,
          class: "editor",
          config: e,
          language: "javascript",
          modelValue: s(i),
          "onUpdate:modelValue": h[1] || (h[1] = (l) => fe(i) ? i.value = l : null)
        }, null, 8, ["modelValue"])
      ])
    ]));
  }
}), mt = { class: "k-modal-action-main" }, ft = { class: "k-modal-left-panel" }, vt = { class: "k-modal-right-panel" }, ht = { class: "select-box" }, yt = /* @__PURE__ */ y("span", null, "\u52A8\u4F5C\u9009\u62E9", -1), _t = { class: "k-modal-footer" }, gt = /* @__PURE__ */ w({
  __name: "KActionModal",
  emits: ["add"],
  setup(d, { expose: t, emit: e }) {
    const v = $.getComponent("Modal"), m = $.getComponent("select"), f = $.getComponent("button"), i = $.getComponent("Tabs"), c = $.getComponent("TabPane"), a = S("schemas"), u = S("pageManager", {}), o = K(!1), n = K([]), _ = K(null), p = K("\u52A8\u4F5C\u914D\u7F6E"), h = B(() => {
      var P;
      return _.value ? (P = $.getComponentConfings()[_.value.type].config.action) == null ? void 0 : P.map((E) => ({ label: E.describe, value: E.type })) : Object.entries(u.funcs.value).filter(([E, D]) => typeof D == "function").map(([E]) => ({ label: E, value: E }));
    }), l = Q({
      actionItem: {
        methodName: null,
        componentId: null
      }
    });
    function C() {
      o.value = !0, te(() => {
        l.actionItem.methodName = null, l.actionItem.componentId = null, _.value = null;
      });
    }
    function r() {
      if (!l.actionItem.methodName) {
        alert("\u8BF7\u5148\u9009\u62E9\u52A8\u4F5C\u65B9\u6CD5");
        return;
      }
      e("add", ve(Z(l.actionItem))), k();
    }
    function k() {
      o.value = !1, n.value = [];
    }
    function I() {
      l.actionItem.componentId = null, l.actionItem.methodName = null, _.value = null, n.value = [];
    }
    function N(P) {
      l.actionItem.componentId = P.id, _.value = P.record, l.actionItem.methodName = null;
    }
    function R() {
      p.value = "\u811A\u672C\u7F16\u8F91";
    }
    return t({
      handleOpen: C
    }), (P, E) => (g(), U(s(v), {
      visible: o.value,
      "onUpdate:visible": E[5] || (E[5] = (D) => o.value = D),
      modelValue: o.value,
      "onUpdate:modelValue": E[6] || (E[6] = (D) => o.value = D),
      width: "850px",
      footer: null
    }, {
      default: A(() => [
        b(s(i), {
          modelValue: p.value,
          "onUpdate:modelValue": E[3] || (E[3] = (D) => p.value = D),
          activeKey: p.value,
          "onUpdate:activeKey": E[4] || (E[4] = (D) => p.value = D)
        }, {
          default: A(() => [
            b(s(c), {
              title: "\u52A8\u4F5C\u914D\u7F6E",
              tab: "\u52A8\u4F5C\u914D\u7F6E",
              key: "\u52A8\u4F5C\u914D\u7F6E",
              label: "\u52A8\u4F5C\u914D\u7F6E",
              name: "\u52A8\u4F5C\u914D\u7F6E"
            }, {
              default: A(() => [
                y("div", mt, [
                  y("div", ft, [
                    y("div", {
                      class: ee(["fun-btn", { checked: l.actionItem.componentId === null }]),
                      onClick: I
                    }, "\u51FD\u6570 ", 2),
                    q(" \u7EC4\u4EF6 "),
                    b(s(he), {
                      options: s(a),
                      selectedKeys: n.value,
                      "onUpdate:selectedKeys": E[0] || (E[0] = (D) => n.value = D),
                      onNodeClick: N
                    }, null, 8, ["options", "selectedKeys"])
                  ]),
                  y("div", vt, [
                    y("div", ht, [
                      yt,
                      b(s(m), {
                        class: "action-select",
                        modelValue: l.actionItem.methodName,
                        "onUpdate:modelValue": E[1] || (E[1] = (D) => l.actionItem.methodName = D),
                        value: l.actionItem.methodName,
                        "onUpdate:value": E[2] || (E[2] = (D) => l.actionItem.methodName = D),
                        placeholder: "\u8BF7\u9009\u62E9\u52A8\u4F5C",
                        options: s(h)
                      }, null, 8, ["modelValue", "value", "options"]),
                      l.actionItem.componentId === null ? (g(), U(s(f), {
                        key: 0,
                        onClick: R
                      }, {
                        default: A(() => [
                          q("\u7F16\u8F91\u51FD\u6570")
                        ]),
                        _: 1
                      })) : H("", !0)
                    ])
                  ])
                ])
              ]),
              _: 1
            }),
            b(s(c), {
              title: "\u811A\u672C\u7F16\u8F91",
              tab: "\u811A\u672C\u7F16\u8F91",
              key: "\u811A\u672C\u7F16\u8F91",
              label: "\u811A\u672C\u7F16\u8F91",
              name: "\u811A\u672C\u7F16\u8F91"
            }, {
              default: A(() => [
                b(pt)
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["modelValue", "activeKey"]),
        y("div", _t, [
          b(s(f), { onClick: k }, {
            default: A(() => [
              q("\u5173\u95ED")
            ]),
            _: 1
          }),
          b(s(f), {
            type: "primary",
            disabled: !l.actionItem.methodName,
            onClick: r
          }, {
            default: A(() => [
              q("\u4FDD\u5B58")
            ]),
            _: 1
          }, 8, ["disabled"])
        ])
      ]),
      _: 1
    }, 8, ["visible", "modelValue"]));
  }
}), Ct = /* @__PURE__ */ w({
  __name: "KActionEditor",
  props: {
    modelValue: {
      type: Object,
      default: () => ({})
    },
    eventList: {
      type: Array
    }
  },
  emits: ["update:modelValue"],
  setup(d, { emit: t }) {
    const e = d, v = $.getComponent("Collapse"), m = $.getComponent("CollapseItem"), f = K(null), i = K(["\u7EC4\u4EF6\u4E8B\u4EF6"]), c = B(() => e.eventList.filter((l) => l.events.length));
    j(() => c.value, (l) => {
      l.length && (i.value = l[0].title);
    }, {
      immediate: !0
    });
    const a = B(() => e.eventList.map((l) => l.events).flat()), u = B({
      get() {
        return e.modelValue;
      },
      set(l) {
        t("update:modelValue", l);
      }
    }), o = {};
    a.value.forEach((l) => {
      o[l.type] = B(() => {
        var C, r;
        return (r = (C = e.modelValue) == null ? void 0 : C[l.type]) != null ? r : [];
      });
    });
    let n = "";
    function _(l) {
      var C;
      (C = f.value) == null || C.handleOpen(), n = l;
    }
    function p(l) {
      var r;
      const C = h(n);
      C[n] = [...(r = o[n]) == null ? void 0 : r.value, l], t("update:modelValue", C);
    }
    function h(l) {
      const C = {};
      return a.value.forEach((r) => {
        var k, I;
        if (!((I = (k = o[r.type]) == null ? void 0 : k.value) != null && I.length) || r.type === l)
          return !1;
        C[r.type] = o[r.type].value;
      }), C;
    }
    return (l, C) => (g(), F(T, null, [
      b(s(v), {
        modelValue: i.value,
        "onUpdate:modelValue": C[1] || (C[1] = (r) => i.value = r),
        activeKey: i.value,
        "onUpdate:activeKey": C[2] || (C[2] = (r) => i.value = r)
      }, {
        default: A(() => [
          (g(!0), F(T, null, O(s(c), (r) => (g(), U(s(m), {
            title: r.title,
            header: r.title,
            name: r.title,
            key: r.title
          }, {
            default: A(() => [
              b(Ye, {
                onAdd: _,
                itemEvents: r.events,
                allEvents: s(a),
                events: o,
                modelValue: s(u),
                "onUpdate:modelValue": C[0] || (C[0] = (k) => fe(u) ? u.value = k : null)
              }, null, 8, ["itemEvents", "allEvents", "modelValue"])
            ]),
            _: 2
          }, 1032, ["title", "header", "name"]))), 128))
        ]),
        _: 1
      }, 8, ["modelValue", "activeKey"]),
      b(gt, {
        ref_key: "KActionModalRef",
        ref: f,
        onAdd: p
      }, null, 512)
    ], 64));
  }
});
function bt(d) {
  d.component("k-tab-pane-editor", Oe), d.component("k-input-size", Le), d.component("k-col-editor", Ue), d.component("k-action-editor", Ct), d.component("k-rule-editor", () => import("./KRuleEditor.cca56d0d.js")), d.registerActivitybar({
    title: "\u7EC4\u4EF6",
    icon: "icon-mokuai_1",
    component: () => import("./KComponentView.b4adfb78.js")
  }), d.registerActivitybar({
    title: "\u6E90\u7801",
    icon: "icon-daima1",
    component: () => import("./KSoundCode.d758492f.js")
  }), d.registerActivitybar({
    title: "\u5927\u7EB2",
    icon: "icon-juxingkaobei",
    component: () => import("./KOutline.5dfbf511.js")
  }), d.registerRightSidebar({
    title: "\u5C5E\u6027",
    component: () => import("./KAttributeView.1ba7c802.js")
  }), d.registerRightSidebar({
    title: "\u6837\u5F0F",
    component: () => import("./KStyleView.ce016f64.js")
  }), d.registerRightSidebar({
    title: "\u4E8B\u4EF6",
    component: () => import("./KEventView.0393056b.js")
  }), [Ie, Ne].forEach((e) => {
    d.registerComponent(e);
  });
}
bt($);
const Et = [Ve, Ke], At = {
  install(d) {
    Et.forEach((t) => {
      d.component(t.__name, t);
    });
  },
  pluginManager: $,
  usePageManager: oe
};
export {
  At as K,
  Ve as _,
  ke as a,
  he as b,
  Ke as c,
  $ as p,
  oe as u
};
