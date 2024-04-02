var Oe = Object.defineProperty;
var De = (n, e, t) => e in n ? Oe(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var M = (n, e, t) => (De(n, typeof e != "symbol" ? e + "" : e, t), t);
import { defineAsyncComponent as $e, effectScope as ke, watch as x, nextTick as ie, getCurrentScope as Me, onScopeDispose as Ve, unref as $, computed as B, ref as w, getCurrentInstance as ae, onMounted as Re, defineComponent as X, reactive as Q, inject as H, useAttrs as Ne, provide as R, shallowRef as Ge, onUnmounted as Fe, resolveComponent as ze, openBlock as N, createBlock as U, mergeProps as te, withCtx as A, resolveDynamicComponent as fe, createVNode as L, normalizeProps as me, guardReactiveProps as he, renderSlot as V, createCommentVNode as Se, useSlots as Be, createElementBlock as re, Suspense as Ce, createElementVNode as W, Fragment as Te, renderList as Le, normalizeClass as Ue, toRaw as ve } from "vue";
const G = (n, e) => $e({
  loader: n,
  loadingComponent: e,
  delay: 80
});
function le(n = 10) {
  return Math.random().toString(36).substring(2, 2 + n);
}
function He(n) {
  return n.charAt(0).toUpperCase() + n.slice(1);
}
function F(n, e = /* @__PURE__ */ new WeakMap()) {
  if (typeof n != "object" || n === null)
    return n;
  if (e.has(n))
    return e.get(n);
  if (Array.isArray(n)) {
    const s = n.map((o) => F(o, e));
    return e.set(n, s), s;
  }
  const t = {};
  return e.set(n, t), Object.keys(n).forEach((s) => {
    t[s] = F(n[s], e);
  }), t;
}
function It(n) {
  const [e] = Je([F(n)], (t) => {
    const s = {
      ...t,
      id: `${t.type}_${le(8)}`
    };
    return (s.field || s.input) && (s.field = s.id), s;
  });
  return e;
}
function Z(n, e) {
  for (const [t, s] of Object.entries(e)) {
    const o = n == null ? void 0 : n[t];
    o && s && typeof o == "object" && typeof s == "object" ? Z(o, s) : n[t] = s;
  }
  Object.keys(n).reverse().forEach((t) => {
    e.hasOwnProperty(t) || (Array.isArray(e) ? n.splice(t, 1) : delete n[t]);
  });
}
function _e(n, e, t = [], s = /* @__PURE__ */ new WeakMap()) {
  const o = (r) => {
    if (Array.isArray(r))
      return r.map(o);
    if (typeof r == "object" && r !== null) {
      if (s.has(r))
        return "[Circular]";
      s.set(r, !0);
      const i = Object.keys(r).sort(), a = {};
      return i.forEach((l) => {
        t.includes(l) || (a[l] = o(r[l]));
      }), s.delete(r), a;
    } else
      return r;
  };
  return JSON.stringify(o(n)) === JSON.stringify(o(e));
}
function We(n, e) {
  const t = [];
  let s = !1;
  function o(r) {
    if (t.push(r), r.id === e && (s = !0), !s && r.children != null && r.children.length > 0)
      for (let i = 0; i < r.children.length && (o(r.children[i]), !s); i++)
        ;
    if (!s && r.slots)
      for (let i in r.slots)
        for (let a = 0; a < r.slots[i].length && (o(r.slots[i][a]), !s); a++)
          ;
    s || t.pop();
  }
  return n.forEach(o), s || console.error(`没有查询到id为${e}的节点`), t;
}
function Pt(n, e) {
  const t = n.split(".");
  let s = e;
  for (let o = 0; o < t.length; o++)
    if (s = s[t[o]], typeof s > "u")
      return;
  return s;
}
function At(n, e, t) {
  const s = e.split(".");
  let o = t;
  s.forEach((r, i) => {
    if (i === s.length - 1) {
      o[r] = n;
      return;
    }
    o = o[r] ?? (o[r] = {});
  });
}
function Ot(n, e = "default") {
  const t = Y(
    n,
    (o) => {
      var r;
      return o.type === "form" && (((r = o.componentProps) == null ? void 0 : r.name) ?? o.name === e);
    },
    !0
  );
  return Y(
    (t == null ? void 0 : t.children) ?? [],
    (o) => !!o.input,
    !1,
    (o) => o.type !== "subform"
  ).map((o) => o.field);
}
function Y(n, e, t = !1, s) {
  const o = [], r = [...n];
  for (; r.length; ) {
    const i = r.pop();
    if (i != null && i.children && (!s || s(i)) && r.push(...i.children), i != null && i.slots && (!s || s(i)))
      for (let a in i.slots)
        r.push(...i.slots[a]);
    if (e(i) && (o.push(i), t))
      return i;
  }
  return t ? !1 : o;
}
function Je(n, e, t) {
  const s = [...n];
  for (; s.length; ) {
    const o = s.pop();
    if (o != null && o.children && (!t || t(o)) && s.push(...o.children), o != null && o.slots && (!t || t(o)))
      for (let r in o.slots)
        s.push(...o.slots[r]);
    Z(o, e(o));
  }
  return n;
}
function Dt(n, e) {
  const t = Y(
    n,
    (s) => s.id === e,
    !0
  );
  if (!t)
    throw new Error(`没有查询到id为${e}的节点`);
  return t;
}
function $t(n, e) {
  const t = [{ type: "", children: n }];
  let s = 0, o = null;
  if (Y(
    t,
    (r) => {
      if (o = r.children ?? null, !o) {
        if (r != null && r.slots)
          for (let i in r.slots) {
            o = r.slots[i];
            for (let a = 0; a < o.length; a++)
              if (o[a].id === e)
                return s = a, !0;
          }
        return !1;
      }
      for (let i = 0; i < o.length; i++)
        if (o[i].id === e)
          return s = i, !0;
      return !1;
    },
    !0
  ), !o)
    throw new Error(`没有查询到id为${e}的节点`);
  return {
    list: o,
    schema: o[s],
    index: s
  };
}
function kt(n) {
  const e = {
    schemas: [
      {
        type: "page",
        id: "root",
        label: "页面",
        children: [
          {
            label: "表单",
            type: "form",
            icon: "epic-icon-daibanshixiang",
            labelWidth: n.config.labelWidth || 100,
            name: "default",
            componentProps: {
              layout: n.config.layout || "horizontal",
              labelWidth: n.config.labelWidth || 100,
              labelLayout: n.config.labelLayout === "flex" ? "fixed" : "flex",
              labelCol: n.config.labelCol || { span: 5 },
              wrapperCol: n.config.wrapperCol || { span: 19 },
              hideRequiredMark: n.config.hideRequiredMark || !1,
              colon: n.config.colon || !0,
              labelAlign: n.config.labelAlign || "right",
              size: n.config.size || "middle"
            },
            children: [],
            id: "form_" + le()
          }
        ],
        componentProps: {
          style: {
            padding: "16px"
          }
        }
      }
    ],
    script: n.script || ""
  };
  return e.schemas[0].children[0].children = q(
    n.list
  ), e;
}
function q(n, e) {
  return n.map((t) => {
    var l, f, u;
    let s = t.type ?? "";
    const o = t.options ?? {}, r = (d, c) => {
      s === d && (s = c, o.defaultValue && (o.defaultValue = JSON.parse(o.defaultValue)));
    };
    if (r("uploadImg", "upload-image"), r("uploadFile", "upload-file"), s === "date" && o.range && (o.type = "daterange", delete o.range), (s === "date" || s === "time") && (o.valueFormat = o.format), s === "textarea") {
      const { minRows: d, maxRows: c } = o;
      o.autoSize = { minRows: d, maxRows: c }, delete o.minRows, delete o.maxRows;
    }
    s === "number" && !o.precision && delete o.precision, o.width && (o.style = { width: o.width }, delete o.width), s === "grid" && (s = "row", t.childImmovable = !0), e && e.type === "grid" && (s = "col", o.span = t.span, t.key = le());
    const i = {
      label: t.label,
      type: s,
      icon: t.icon || "",
      field: t.model,
      componentProps: o,
      childImmovable: t.childImmovable,
      id: t.key
    };
    return (o.noFormItem || !o.showLabel) && (i.noFormItem = !0, delete o.noFormItem, delete o.showLabel), o.clearable && (o.allowClear = !0, delete o.clearable), [
      "input",
      "textarea",
      "number",
      "password",
      "select",
      "cascader",
      "checkbox",
      "radio",
      "date",
      "time",
      "slider",
      "switch",
      "color-picker",
      "upload-file",
      "upload-image"
    ].includes(s) && (i.input = !0, ((f = (l = t.rules) == null ? void 0 : l[0]) == null ? void 0 : f.required) === !1 && t.rules.shift(), ((u = t.rules) == null ? void 0 : u.length) > 0 && (i.rules = t.rules)), t.list && (i.children = q(t.list, t)), t.columns && (i.children = q(t.columns, t)), t.trs && (i.children = q(t.trs, t)), t.tds && (i.children = q(t.tds, t)), i;
  });
}
function ce(n) {
  return Me() ? (Ve(n), !0) : !1;
}
function Ze(n) {
  let e = 0, t, s;
  const o = () => {
    e -= 1, s && e <= 0 && (s.stop(), t = void 0, s = void 0);
  };
  return (...r) => (e += 1, t || (s = ke(!0), t = s.run(() => n(...r))), ce(o), t);
}
function ue(n) {
  return typeof n == "function" ? n() : $(n);
}
const Ke = typeof window < "u", qe = () => {
};
function Mt(n, e, t) {
  const s = x(n, (...o) => (ie(() => s()), e(...o)), t);
}
function J(n) {
  var e;
  const t = ue(n);
  return (e = t == null ? void 0 : t.$el) != null ? e : t;
}
const j = Ke ? window : void 0;
function Qe(...n) {
  let e, t, s, o;
  if (typeof n[0] == "string" || Array.isArray(n[0]) ? ([t, s, o] = n, e = j) : [e, t, s, o] = n, !e)
    return qe;
  Array.isArray(t) || (t = [t]), Array.isArray(s) || (s = [s]);
  const r = [], i = () => {
    r.forEach((u) => u()), r.length = 0;
  }, a = (u, d, c, v) => (u.addEventListener(d, c, v), () => u.removeEventListener(d, c, v)), l = x(
    () => [J(e), ue(o)],
    ([u, d]) => {
      i(), u && r.push(
        ...t.flatMap((c) => s.map((v) => a(u, c, v, d)))
      );
    },
    { immediate: !0, flush: "post" }
  ), f = () => {
    l(), i();
  };
  return ce(f), f;
}
var Xe = Object.defineProperty, Ye = Object.defineProperties, je = Object.getOwnPropertyDescriptors, ye = Object.getOwnPropertySymbols, et = Object.prototype.hasOwnProperty, tt = Object.prototype.propertyIsEnumerable, ge = (n, e, t) => e in n ? Xe(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t, Ee = (n, e) => {
  for (var t in e || (e = {}))
    et.call(e, t) && ge(n, t, e[t]);
  if (ye)
    for (var t of ye(e))
      tt.call(e, t) && ge(n, t, e[t]);
  return n;
}, xe = (n, e) => Ye(n, je(e));
function nt(n) {
  return typeof n == "function" ? n : typeof n == "string" ? (e) => e.key === n : Array.isArray(n) ? (e) => n.includes(e.key) : () => !0;
}
function Ie(...n) {
  let e, t, s = {};
  n.length === 3 ? (e = n[0], t = n[1], s = n[2]) : n.length === 2 ? typeof n[1] == "object" ? (e = !0, t = n[0], s = n[1]) : (e = n[0], t = n[1]) : (e = !0, t = n[0]);
  const {
    target: o = j,
    eventName: r = "keydown",
    passive: i = !1,
    dedupe: a = !1
  } = s, l = nt(e);
  return Qe(o, r, (u) => {
    u.repeat && ue(a) || l(u) && t(u);
  }, i);
}
function ne(n, e, t = {}) {
  return Ie(n, e, xe(Ee({}, t), { eventName: "keydown" }));
}
function oe(n, e, t = {}) {
  return Ie(n, e, xe(Ee({}, t), { eventName: "keyup" }));
}
function ot() {
  const n = w(!1);
  return ae() && Re(() => {
    n.value = !0;
  }), n;
}
function st(n) {
  const e = ot();
  return B(() => (e.value, !!n()));
}
var we = Object.getOwnPropertySymbols, rt = Object.prototype.hasOwnProperty, it = Object.prototype.propertyIsEnumerable, at = (n, e) => {
  var t = {};
  for (var s in n)
    rt.call(n, s) && e.indexOf(s) < 0 && (t[s] = n[s]);
  if (n != null && we)
    for (var s of we(n))
      e.indexOf(s) < 0 && it.call(n, s) && (t[s] = n[s]);
  return t;
};
function lt(n, e, t = {}) {
  const s = t, { window: o = j } = s, r = at(s, ["window"]);
  let i;
  const a = st(() => o && "ResizeObserver" in o), l = () => {
    i && (i.disconnect(), i = void 0);
  }, f = B(
    () => Array.isArray(n) ? n.map((c) => J(c)) : [J(n)]
  ), u = x(
    f,
    (c) => {
      if (l(), a.value && o) {
        i = new ResizeObserver(e);
        for (const v of c)
          v && i.observe(v, r);
      }
    },
    { immediate: !0, flush: "post", deep: !0 }
  ), d = () => {
    l(), u();
  };
  return ce(d), {
    isSupported: a,
    stop: d
  };
}
function Vt(n, e = { width: 0, height: 0 }, t = {}) {
  const { window: s = j, box: o = "content-box" } = t, r = B(() => {
    var l, f;
    return (f = (l = J(n)) == null ? void 0 : l.namespaceURI) == null ? void 0 : f.includes("svg");
  }), i = w(e.width), a = w(e.height);
  return lt(
    n,
    ([l]) => {
      const f = o === "border-box" ? l.borderBoxSize : o === "content-box" ? l.contentBoxSize : l.devicePixelContentBoxSize;
      if (s && r.value) {
        const u = J(n);
        if (u) {
          const d = s.getComputedStyle(u);
          i.value = Number.parseFloat(d.width), a.value = Number.parseFloat(d.height);
        }
      } else if (f) {
        const u = Array.isArray(f) ? f : [f];
        i.value = u.reduce((d, { inlineSize: c }) => d + c, 0), a.value = u.reduce((d, { blockSize: c }) => d + c, 0);
      } else
        i.value = l.contentRect.width, a.value = l.contentRect.height;
    },
    t
  ), x(
    () => J(n),
    (l) => {
      i.value = l ? e.width : 0, a.value = l ? e.height : 0;
    }
  ), {
    width: i,
    height: a
  };
}
function ct() {
  const n = w(1), e = w(!1), { pressSpace: t, pressShift: s, pressCtrl: o } = ut();
  return {
    canvasScale: n,
    pressSpace: t,
    pressShift: s,
    pressCtrl: o,
    disabledZoom: e
  };
}
const de = Ze(ct);
function ut() {
  const n = w(!1), e = w(!1), t = w(!1);
  return ne(" ", (s) => {
    var o = s.target;
    ["INPUT", "TEXTAREA"].includes(o.tagName) || s.preventDefault(), n.value = !0;
  }), oe(" ", () => {
    n.value = !1;
  }), ne("Shift", (s) => {
    s.preventDefault(), e.value = !0;
  }), oe("Shift", () => {
    e.value = !1;
  }), ne("Control", (s) => {
    s.preventDefault(), t.value = !0;
  }), oe("Control", () => {
    t.value = !1;
  }), { pressSpace: n, pressShift: e, pressCtrl: t };
}
function Rt(n) {
  const { pressSpace: e } = de();
  let t = 0, s = 0;
  function o(a) {
    var l;
    t = a.x, s = a.y, (l = a.dataTransfer) == null || l.setDragImage(document.createElement("div"), 0, 0);
  }
  function r(a) {
    if (a.preventDefault(), !a.x || !a.y || !e.value)
      return;
    const l = a.x - t, f = a.y - s;
    t = a.x, s = a.y, n.value && (n.value.scrollTop -= f, n.value.scrollLeft -= l);
  }
  function i() {
    e.value = !1;
  }
  return { handleElementDragStart: o, handleElementDrag: r, handleElementDragEnd: i };
}
function Nt(n) {
  const { pressCtrl: e, canvasScale: t, disabledZoom: s } = de();
  function o(r) {
    if (!e.value || s.value)
      return;
    r.preventDefault();
    let i = 0;
    r.deltaY < 0 ? i = t.value + 0.05 : i = t.value - 0.05, !(i > 150 || i < 0.5) && (t.value = i);
  }
  return x(
    () => t.value,
    (r) => {
      n.value && !s.value && (n.value.style.transform = `scale(${r})`);
    }
  ), { handleZoom: o, canvasScale: t };
}
function Gt(n, e = 16.66) {
  let t;
  function s() {
    o(), t = window.setInterval(n, e);
  }
  function o() {
    window.clearInterval(t);
  }
  return {
    startTimedQuery: s,
    stopTimedQuery: o
  };
}
function Ft(n, e) {
  let t = null;
  return (...s) => {
    t && clearTimeout(t), t = setTimeout(() => {
      n.apply(this, s);
    }, e);
  };
}
class dt {
  constructor() {
    // 已初始化基础UI
    M(this, "initialized", w(!1));
    // 组件对象字典，key 为组件type，value 为组件
    M(this, "components", {});
    // 组件配置记录字典，key 为组件type，value 为组件配置
    M(this, "componentConfigs", {});
    // 组件模式分组，使用 Vue Composition API 的 ref 进行响应式处理
    M(this, "componentSchemaGroups", w([]));
    // 隐藏的组件列表，存储需要隐藏的组件名称
    M(this, "hiddenComponents", []);
    // 组件分组名称映射，key 为组件原名称，value 为组件分组映射名称
    M(this, "componentGroupNameMap", {});
    // 组件分组排序列表(设置之后，按该数组下标排序)
    M(this, "sortedGroups", ["表单", "布局"]);
    // 视图容器模型，包含活动栏和右侧边栏的配置
    M(this, "viewsContainers", {
      activitybars: [],
      // 活动栏配置列表
      rightSidebars: []
      // 右侧边栏配置列表
    });
    // 公共方法模型，存储插件的公共方法
    M(this, "publicMethods", {
      // 示例方法
      // test: {
      //   describe: "测试函数",
      //   methodName: "test",
      //   method: (e) => {
      //     console.log(e)
      //     // alert("测试函数弹出");
      //   },
      // },
    });
  }
  /**
   * 添加组件到插件管理器中
   * @param componentName 组件名称
   * @param component 组件
   */
  component(e, t) {
    typeof t == "function" && (t = G(t)), this.components[e] = t;
  }
  /**
   * 注册组件到插件管理器中
   * @param componentConfig 组件配置
   */
  registerComponent(e) {
    this.component(
      e.defaultSchema.type,
      e.component
    ), e.defaultSchema.input && (e.config.action || (e.config.action = []), e.config.action.unshift(
      {
        type: "setValue",
        describe: "设置值",
        // 参数配置
        argsConfigs: [
          {
            ...e.defaultSchema,
            label: "设置数据",
            field: "0"
          }
        ]
      },
      {
        type: "getValue",
        describe: "获取值"
      }
    )), this.componentConfigs[e.defaultSchema.type] = e, this.computedComponentSchemaGroups();
  }
  /**
   * 获取所有插件管理中的所有组件
   * @returns components
   */
  getComponents() {
    return this.components;
  }
  /**
   * 通过type 查询相应的组件
   * @returns components
   */
  getComponent(e) {
    return this.components[e];
  }
  /**
   * 注册或更新活动栏（Activitybar）模型。
   * 如果模型中的组件是一个函数，则异步加载该组件。
   * @param activitybar 要注册或更新的活动栏模型
   */
  registerActivitybar(e) {
    typeof e.component == "function" && (e.component = G(e.component));
    const t = this.viewsContainers.activitybars.findIndex(
      (s) => s.id === e.id
    );
    t !== -1 ? this.viewsContainers.activitybars[t] = e : this.viewsContainers.activitybars.push(e);
  }
  /**
   * 获取所有activitybars
   * @returns activitybars
   */
  getActivitybars() {
    return this.viewsContainers.activitybars;
  }
  /**
   * 注册右侧栏
   */
  registerRightSidebar(e) {
    typeof e.component == "function" && (e.component = G(e.component));
    const t = this.viewsContainers.rightSidebars.findIndex(
      (s) => s.id === e.id
    );
    t !== -1 ? this.viewsContainers.rightSidebars[t] = e : this.viewsContainers.rightSidebars.push(e);
  }
  /**
   * 获取所有rightSidebars
   * @returns rightSidebars
   */
  getRightSidebars() {
    return this.viewsContainers.rightSidebars;
  }
  /**
   * 获取所有插件管理中的所有组件配置
   * @returns componentAttrs
   */
  getComponentConfings() {
    return this.componentConfigs;
  }
  /**
   * 通过type获取ComponentConfing
   * @returns
   */
  getComponentConfingByType(e) {
    return this.componentConfigs[e];
  }
  /**
   * 计算componentSchemaGroups
   */
  computedComponentSchemaGroups() {
    const e = [];
    Object.values(this.componentConfigs).forEach((t) => {
      if (!this.hiddenComponents.includes(t.defaultSchema.type) && t.groupName) {
        const s = this.componentGroupNameMap[t.groupName] ?? t.groupName;
        let o = e.findIndex(
          (i) => i.title === s
        );
        o === -1 && (e.push({
          title: s,
          list: []
        }), o = e.length - 1);
        let r = e[o].list.findIndex(
          (i) => i.type === t.defaultSchema.type
        );
        r !== -1 ? e[o].list[r] = t.defaultSchema : e[o].list.push(
          t.defaultSchema
        );
      }
    }), e.sort((t, s) => {
      const o = this.sortedGroups.indexOf(t.title), r = this.sortedGroups.indexOf(s.title);
      return o === -1 ? 1 : r === -1 ? -1 : o - r;
    }), this.componentSchemaGroups.value = e;
  }
  /**
   * 按照分组获取componentSchemaGroups 暂时没啥用
   * @returns componentSchemaGroups
   */
  getComponentSchemaGroups() {
    return this.componentSchemaGroups;
  }
  /**
   * 设置组件分组名称到映射名称的关系
   * @param groupName 组件分组名称
   * @param mapName 映射的名称
   */
  setComponentGroupNameMap(e, t) {
    this.componentGroupNameMap[e] = t;
  }
  /**
   * 清空组件分组名称到映射名称的关系
   */
  clearComponentGroupNameMap() {
    this.componentGroupNameMap = {};
  }
  /**
   * 设置组件分组的排序
   * @param sortedGroups 包含组名和排序字段的对象数组
   */
  setSortedGroups(e) {
    this.sortedGroups = e, this.computedComponentSchemaGroups();
  }
  /**
   * 清空组件分组的排序
   */
  clearSortedGroups() {
    this.sortedGroups = [], this.computedComponentSchemaGroups();
  }
  /**
   * 添加需要隐藏的组件类型
   * @param {*} type
   * @returns
   */
  hideComponent(e) {
    this.hiddenComponents.push(e), this.computedComponentSchemaGroups();
  }
  /**
   * 移除需要隐藏的组件类型
   * @param {*} type
   * @returns
   */
  showComponent(e) {
    this.hiddenComponents = this.hiddenComponents.filter(
      (t) => t !== e
    ), this.computedComponentSchemaGroups();
  }
  /**
   * 设置需要隐藏的组件类型数组
   * @param {*} type[]
   * @returns
   */
  setHideComponents(e) {
    this.hiddenComponents = e, this.computedComponentSchemaGroups();
  }
  /**
   * 设置initialized的状态。
   *
   * @param value 要设置的布尔值。
   */
  setInitialized(e) {
    this.initialized.value = e;
  }
  /**
   * 添加公共方法
   * @param method
   */
  addPublicMethod(e) {
    this.publicMethods[e.methodName] = e;
  }
  /**
   * 移除公共方法
   * @param methodName
   */
  removePublicMethod(e) {
    delete this.publicMethods[e];
  }
}
const z = new dt();
function Pe() {
  const n = w({}), e = w({}), t = w(!1);
  function s(u) {
    return n.value[u];
  }
  function o(u, d) {
    n.value[u] = d;
  }
  function r(u) {
    delete n.value[u];
  }
  function i(u, d = !1) {
    const c = Object.entries(
      z.publicMethods
    ).reduce((v, [I, k]) => (v[I] = k.method, v), {});
    try {
      new Function(`const epic = this;${u}`).bind({
        ...c,
        getComponent: s,
        find: s,
        defineExpose: a,
        publicMethods: c,
        pluginManager: z
      })();
    } catch (v) {
      d && console.error("[epic-desinger：自定义函数]异常：", v);
    }
  }
  function a(u) {
    u != null && (e.value = u);
  }
  function l(u, ...d) {
    u == null || u.forEach((c) => {
      var v, I, k;
      if (c.type === "public" && ((v = z.publicMethods[c.methodName]) == null || v.method(...d)), c.type === "custom" && ((k = (I = e.value)[c.methodName]) == null || k.call(I, ...d)), c.type === "component") {
        (c.componentId != null && s(c.componentId))[c.methodName](
          ...c.args ? JSON.parse(c.args) : d
        );
        return;
      }
    });
  }
  function f(u = !0) {
    t.value = u;
  }
  return {
    componentInstances: n,
    funcs: e,
    isDesignMode: t,
    getComponentInstance: s,
    // 简化查询函数, 推荐使用
    find: s,
    addComponentInstance: o,
    removeComponentInstance: r,
    setMethods: i,
    doActions: l,
    setDesignMode: f
  };
}
function pt() {
  const n = w([]), e = w([]), t = w(null);
  let s = 0;
  function o(a, l = "插入组件") {
    const f = Date.now();
    s + 150 > f || (s = f, t.value != null && (n.value.push(t.value), e.value.splice(0, e.value.length)), t.value = {
      type: l,
      componentSchema: JSON.stringify(a)
    }, n.value.length > 20 && n.value.unshift());
  }
  function r() {
    if (n.value.length === 0)
      return !1;
    const a = n.value.pop();
    return t.value != null && e.value.push(t.value), t.value = a, JSON.parse(a.componentSchema);
  }
  function i() {
    if (e.value.length === 0)
      return !1;
    const a = e.value.pop();
    return t.value != null && n.value.push(t.value), t.value = a, JSON.parse(a.componentSchema);
  }
  return {
    recordList: n,
    undoList: e,
    currentRecord: t,
    push: o,
    undo: r,
    redo: i
  };
}
const be = pt(), ft = /* @__PURE__ */ X({
  name: "ENode",
  __name: "node",
  props: {
    componentSchema: {},
    modelValue: {},
    ruleField: {},
    resetFormData: {},
    name: {}
  },
  emits: ["update:modelValue", "change"],
  setup(n, { emit: e }) {
    const { proxy: t } = ae(), s = n;
    let o = Q(F(s.componentSchema));
    x(() => s.componentSchema, (p) => {
      _e(o, p, ["children"]) || Z(o, F(p));
    }, {
      deep: !0
    });
    let r = H("formData", {});
    const i = H("slots", {}), a = H("pageManager", {}), l = H("disabled", { value: !1 }), f = H("ruleFieldPrefix", null), u = H("resetFormData", !1);
    (s.resetFormData || u) && (r = {});
    const d = e, c = z.getComponent("form-item"), v = w(), I = w(), k = Ne();
    Object.keys(k).length && R("nodeAttrs", k);
    const O = Ge(null), h = Q({}), b = B(() => {
      var p, g;
      return (p = o.componentProps) != null && p.hidden ? !1 : typeof o.show == "boolean" ? o.show : ((g = o.show) == null ? void 0 : g.call(o, { values: r })) ?? !0;
    }), P = B(() => {
      var D;
      const p = b.value && ((D = o.rules) == null ? void 0 : D.map(
        (S) => ({
          ...S,
          validator: S.validator && a.funcs.value[S.validator]
          // 自定义校验函数
        })
      ));
      let g = o.field;
      s.ruleField ? g = s.ruleField : f && o.field && (g = F(f), g.push(o.field));
      const E = {
        ...o,
        rules: p,
        rule: p,
        field: g
      };
      return E.children && delete E.children, E;
    }), y = B(() => {
      var E, D;
      const p = ((E = C.value) == null ? void 0 : E.bindModel) ?? "modelValue", g = {};
      return o.on && Object.keys(o.on).forEach((S) => {
        g[`on${He(S)}`] = (...Ae) => a.doActions(o.on[S], ...Ae);
      }), {
        ...s,
        ...o.componentProps,
        disabled: (l == null ? void 0 : l.value) || ((D = o.componentProps) == null ? void 0 : D.disabled),
        bindModel: p,
        [`onUpdate:${p}`]: ee,
        ...g
      };
    }), C = B(() => z.getComponentConfingByType(o.type) ?? null), _ = () => r[o.field ?? ""] ?? s.modelValue;
    x(() => v.value, () => {
      T();
    }, { immediate: !0 });
    function T() {
      var g;
      const p = v.value || t;
      o.id && p && (o.input && (p.setValue = ee, p.getValue = () => r[o.field] || s.modelValue), p.setAttr = (E, D) => o.componentProps[E] = D, p.getAttr = (E) => o.componentProps[E], a.addComponentInstance(o.id, p), (g = C.value) != null && g.defaultSchema.input && o.noFormItem !== !0 && I.value && a.addComponentInstance(o.id + "formItem", I.value));
    }
    function m() {
      var p;
      o.id && (a.removeComponentInstance(o.id), (p = C.value) != null && p.defaultSchema.input && o.noFormItem !== !0 && a.removeComponentInstance(o.id + "formItem"));
    }
    async function K() {
      var g, E, D;
      if (typeof ((g = o.componentProps) == null ? void 0 : g.defaultValue) < "u") {
        const S = a.isDesignMode.value ? (E = o.componentProps) == null ? void 0 : E.defaultValue : r[o.field] ?? ((D = o.componentProps) == null ? void 0 : D.defaultValue);
        ee(F(S));
      }
      if (o.type === "slot") {
        const S = o.slotName;
        if (!S)
          return;
        O.value = X({
          setup() {
            return () => V(i, S, {
              componentSchema: o,
              model: r
            });
          }
        });
        return;
      }
      const p = z.getComponent(o.type);
      if (!p) {
        console.error(`组件${o.type}未注册`);
        return;
      }
      if (typeof p == "function") {
        const S = await p();
        O.value = S.default ?? S;
      } else
        O.value = p;
    }
    function ee(p) {
      d("update:modelValue", p), d("change", p), o.field && (r[o.field] = p);
    }
    let pe = null;
    return x(() => o, (p) => {
      const g = JSON.stringify({ ...p, children: void 0 });
      if (g === pe)
        return !1;
      pe = g, K();
    }, {
      immediate: !0,
      deep: !0
    }), Fe(m), (p, g) => {
      var D;
      const E = ze("ENode");
      return $(o).noFormItem !== !0 && ((D = C.value) != null && D.defaultSchema.input) && O.value && b.value ? (N(), U($(c), te({
        key: 0,
        ref_key: "formItemRef",
        ref: I
      }, P.value), {
        default: A(() => [
          (N(), U(fe(O.value), te({
            ref_key: "componentInstance",
            ref: v,
            onVnodeMounted: T
          }, { ...y.value, ...h, [y.value.bindModel]: _() }), {
            node: A((S) => [
              L(E, me(he(S)), null, 16)
            ]),
            "edit-node": A(() => [
              V(p.$slots, "edit-node")
            ]),
            _: 3
          }, 16))
        ]),
        _: 3
      }, 16)) : O.value && b.value ? (N(), U(fe(O.value), te({
        key: 1,
        onVnodeMounted: T,
        ref_key: "componentInstance",
        ref: v,
        model: $(r)
      }, { ...y.value, ...h, [y.value.bindModel]: _() }), {
        node: A((S) => [
          L(E, me(he(S)), null, 16)
        ]),
        "edit-node": A(() => [
          V(p.$slots, "edit-node")
        ]),
        _: 3
      }, 16, ["model"])) : Se("", !0);
    };
  }
}), mt = {
  key: 0,
  class: "loading-box"
}, ht = { class: "epic-builder-main" }, vt = { class: "loading-box" }, zt = /* @__PURE__ */ X({
  __name: "builder",
  props: {
    pageSchema: {},
    disabled: { type: Boolean }
  },
  emits: ["ready"],
  setup(n, { expose: e, emit: t }) {
    const s = G(() => import("./index-ab078c8b.js")), o = Pe(), r = t, i = Be(), a = w({}), l = w(!1), f = n, u = Q({
      schemas: []
    });
    x(() => f.pageSchema, (h) => {
      Z(u, h);
    }, {
      immediate: !0,
      deep: !0
    }), x(() => u.script, (h) => {
      h && h !== "" && o.setMethods(h, !0);
    }, {
      immediate: !0
    }), R("slots", i), R("pageManager", o), R("forms", a), R("pageSchema", u), R("disabled", B(() => f.disabled));
    function d(h = "default") {
      return new Promise(async (b, P) => {
        var _;
        if (!l.value) {
          const T = x(l, async () => {
            T(), b(await d(h));
          });
          return;
        }
        const y = (_ = a.value) == null ? void 0 : _[h];
        if (!y)
          return P(`表单 [name=${h}] 不存在`), !1;
        const C = F(await y.getData());
        b(C);
      });
    }
    function c(h = "default") {
      return new Promise(async (b, P) => {
        var C;
        if (!l.value) {
          const _ = x(l, async () => {
            _(), b(await c(h));
          });
          return;
        }
        const y = (C = a.value) == null ? void 0 : C[h];
        if (!y)
          return P(`表单 [name=${h}] 不存在`), !1;
        try {
          await y.validate();
          const _ = await y.getData();
          b(_);
        } catch (_) {
          P(_);
        }
      });
    }
    function v(h, b = "default") {
      var y;
      if (!l.value) {
        const C = x(l, () => {
          C(), v(h, b);
        });
        return;
      }
      const P = (y = a.value) == null ? void 0 : y[b];
      if (!P)
        return console.error(`表单 [name=${b}] 不存在`), !1;
      P.setData(h);
    }
    function I(h = "default") {
      return new Promise(async (b, P) => {
        var C;
        if (!l.value) {
          const _ = x(l, async () => {
            _(), b(await I(h));
          });
          return;
        }
        const y = (C = a.value) == null ? void 0 : C[h];
        if (!y)
          return P(`表单 [name=${h}] 不存在`), !1;
        b(y);
      });
    }
    const { proxy: k } = ae();
    function O() {
      ie(() => {
        l.value = !0, r("ready", o), k && o.addComponentInstance("builder", k);
      });
    }
    return e({
      ready: l,
      getData: d,
      setData: v,
      validate: c,
      getFormInstance: I
    }), (h, b) => $(z).initialized.value ? (N(), U(Ce, {
      key: 1,
      onResolve: O
    }, {
      default: A(() => [
        W("div", ht, [
          (N(!0), re(Te, null, Le(u.schemas, (P, y) => (N(), U($(ft), {
            key: y,
            componentSchema: P
          }, null, 8, ["componentSchema"]))), 128))
        ])
      ]),
      fallback: A(() => [
        W("div", vt, [
          L($(s))
        ])
      ]),
      _: 1
    })) : (N(), re("div", mt));
  }
}), yt = {
  key: 0,
  class: "loading-box"
}, gt = { class: "epic-designer-main" }, wt = { class: "epic-header-container" }, bt = { class: "loading-box" }, se = `const { defineExpose, find } = epic;

function test (){
    console.log('test')
}

// 通过defineExpose暴露的函数或者属性
defineExpose({
 test 
})`, Bt = /* @__PURE__ */ X({
  __name: "designer",
  props: {
    disabledZoom: { type: Boolean, default: !1 },
    hiddenHeader: { type: Boolean, default: !1 }
  },
  emits: ["ready", "save"],
  setup(n, { expose: e, emit: t }) {
    const s = G(() => import("./index-c9e822d6.js")), o = G(() => import("./index-72638c25.js")), r = G(() => import("./index-ee41006a.js")), i = G(() => import("./index-8003bd52.js")), a = G(() => import("./index-ab078c8b.js")), l = Pe();
    l.setDesignMode();
    const f = n, u = t, d = Q({
      checkedNode: null,
      hoverNode: null,
      disableHover: !1,
      matched: []
    }), c = Q({
      schemas: [],
      script: ""
    }), { disabledZoom: v } = de();
    x(() => f.disabledZoom, (m) => {
      v.value = m;
    }, {
      immediate: !0
    }), x(() => c.script, (m) => {
      m && m !== "" && l.setMethods(m);
    });
    const I = [{
      type: "page",
      id: "root",
      label: "页面",
      children: [],
      componentProps: {
        style: {
          padding: "16px"
        }
      }
    }];
    c.script = se, R("pageSchema", c), R("pageManager", l), R("designerProps", f), R("designer", {
      setCheckedNode: O,
      setHoverNode: h,
      setDisableHover: P,
      reset: _,
      state: d
    });
    function k() {
      c.schemas = F(I), O(c.schemas[0]), be.push(c.schemas, "初始化撤销功能");
    }
    async function O(m = c.schemas[0]) {
      d.checkedNode = m, d.matched = We(c.schemas, m.id);
    }
    async function h(m = null) {
      var K;
      if (!m || d.disableHover)
        return d.hoverNode = null, !1;
      if ((m == null ? void 0 : m.id) === ((K = d.hoverNode) == null ? void 0 : K.id))
        return !1;
      d.hoverNode = m;
    }
    function b() {
      ie(() => {
        u("ready", { pageManager: l });
      });
    }
    async function P(m = !1) {
      d.disableHover = m;
    }
    function y(m) {
      Z(c, m);
    }
    function C() {
      return ve(c);
    }
    function _() {
      _e(c.schemas, I) && c.script === se || (Z(c.schemas, I), c.script = se, O(c.schemas[0]), be.push(c.schemas, "重置操作"));
    }
    function T() {
      u("save", ve(c));
    }
    return k(), e({
      setData: y,
      getData: C,
      reset: _
    }), (m, K) => $(z).initialized.value ? (N(), U(Ce, {
      key: 1,
      onResolve: b
    }, {
      default: A(() => [
        W("div", gt, [
          W("div", wt, [
            V(m.$slots, "header", {}, () => [
              f.hiddenHeader ? Se("", !0) : (N(), U($(s), {
                key: 0,
                onSave: T
              }, {
                header: A(() => [
                  V(m.$slots, "header-prefix")
                ]),
                prefix: A(() => [
                  V(m.$slots, "header-prefix")
                ]),
                title: A(() => [
                  V(m.$slots, "header-title")
                ]),
                "right-prefix": A(() => [
                  V(m.$slots, "header-right-prefix")
                ]),
                "right-action": A(() => [
                  V(m.$slots, "header-right-action")
                ]),
                "right-suffix": A(() => [
                  V(m.$slots, "header-right-suffix")
                ]),
                _: 3
              }))
            ])
          ]),
          W("div", {
            class: Ue(["epic-split-view-container", { "hidden-header": m.hiddenHeader }])
          }, [
            L($(o)),
            L($(r)),
            L($(i))
          ], 2)
        ])
      ]),
      fallback: A(() => [
        W("div", bt, [
          L($(a))
        ])
      ]),
      _: 3
    })) : (N(), re("div", yt));
  }
}), St = {
  component: async () => await import("./index-64848bec.js"),
  defaultSchema: {
    label: "代码编辑器",
    type: "monacoEditor",
    field: "monacoEditor",
    icon: "epic-icon-write",
    input: !0
  },
  config: {
    attribute: [
      {
        label: "字段名",
        type: "input",
        field: "field"
      },
      {
        label: "标题",
        type: "input",
        field: "label"
      },
      {
        label: "默认值",
        type: "monacoEditor",
        field: "componentProps.defaultValue"
      }
    ]
  },
  bindModel: "model-value"
}, Ct = {
  component: async () => await import("./index-cebefbcc.js"),
  defaultSchema: {
    label: "页面",
    type: "page",
    componentProps: {},
    children: []
  },
  config: {
    attribute: [
      {
        label: "页面名称",
        type: "input",
        componentProps: {
          placeholder: "请输入"
        },
        field: "name"
      }
    ]
  }
};
function _t(n) {
  n.component("ETabPaneEditor", async () => await import("./index-7926f0db.js")), n.component("EInputSize", async () => await import("./index-360f267e.js")), n.component("EColEditor", async () => await import("./index-0db5b330.js")), n.component("EActionEditor", async () => await import("./index-ff7779fd.js")), n.component("ERuleEditor", async () => await import("./index-8eae6e83.js")), n.component("EOptionsEditor", async () => await import("./index-da66bb9b.js")), n.component("ENode", async () => await import("./index-4710d8af.js")), n.registerActivitybar({
    id: "component_view",
    title: "组件",
    icon: "epic-icon-mokuai_1",
    component: async () => await import("./index-33e85b0c.js")
  }), n.registerActivitybar({
    id: "sound_code_view",
    title: "源码",
    icon: "epic-icon-daima1",
    component: async () => await import("./index-ca3309cb.js")
  }), n.registerActivitybar({
    id: "outline_view",
    title: "大纲",
    icon: "epic-icon-juxingkaobei",
    component: async () => await import("./outline-98817964.js")
  }), n.registerRightSidebar({
    id: "attribute_view",
    title: "属性",
    component: async () => await import("./attributeView-277fa670.js")
  }), n.registerRightSidebar({
    id: "style_view",
    title: "样式",
    component: async () => await import("./styleView-ced96cd0.js")
  }), n.registerRightSidebar({
    id: "event_view",
    title: "事件",
    component: async () => await import("./eventView-b4b49db2.js")
  }), [St, Ct].forEach((t) => {
    n.registerComponent(t);
  });
}
_t(z);
export {
  Y as A,
  Je as B,
  q as C,
  He as D,
  ut as E,
  Ft as F,
  ct as G,
  dt as P,
  zt as _,
  Gt as a,
  It as b,
  lt as c,
  ft as d,
  Z as e,
  $t as f,
  le as g,
  kt as h,
  Rt as i,
  Vt as j,
  Nt as k,
  Dt as l,
  F as m,
  _e as n,
  Pt as o,
  z as p,
  Bt as q,
  be as r,
  At as s,
  Pe as t,
  de as u,
  pt as v,
  Mt as w,
  G as x,
  We as y,
  Ot as z
};
