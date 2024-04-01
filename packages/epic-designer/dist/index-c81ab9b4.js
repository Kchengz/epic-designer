var Ae = Object.defineProperty;
var Oe = (n, t, e) => t in n ? Ae(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[t] = e;
var k = (n, t, e) => (Oe(n, typeof t != "symbol" ? t + "" : t, e), e);
import { defineAsyncComponent as De, effectScope as $e, watch as E, nextTick as re, getCurrentScope as ke, onScopeDispose as Me, unref as D, computed as z, ref as w, getCurrentInstance as we, onMounted as Ve, defineComponent as X, reactive as Q, inject as H, useAttrs as Re, provide as V, shallowRef as Ne, onUnmounted as Ge, resolveComponent as Fe, openBlock as R, createBlock as U, mergeProps as ee, withCtx as P, resolveDynamicComponent as de, createVNode as L, normalizeProps as pe, guardReactiveProps as fe, renderSlot as M, createCommentVNode as be, useSlots as ze, createElementBlock as se, Suspense as Se, createElementVNode as W, Fragment as Be, renderList as Te, normalizeClass as Le, toRaw as me } from "vue";
const G = (n, t) => De({
  loader: n,
  loadingComponent: t,
  delay: 80
});
function ie(n = 10) {
  return Math.random().toString(36).substring(2, 2 + n);
}
function Ue(n) {
  return n.charAt(0).toUpperCase() + n.slice(1);
}
function F(n, t = /* @__PURE__ */ new WeakMap()) {
  if (typeof n != "object" || n === null)
    return n;
  if (t.has(n))
    return t.get(n);
  if (Array.isArray(n)) {
    const o = n.map((s) => F(s, t));
    return t.set(n, o), o;
  }
  const e = {};
  return t.set(n, e), Object.keys(n).forEach((o) => {
    e[o] = F(n[o], t);
  }), e;
}
function It(n) {
  const [t] = We([F(n)], (e) => {
    const o = {
      ...e,
      id: `${e.type}_${ie(8)}`
    };
    return (o.field || o.input) && (o.field = o.id), o;
  });
  return t;
}
function Z(n, t) {
  for (const [e, o] of Object.entries(t)) {
    const s = n == null ? void 0 : n[e];
    s && o && typeof s == "object" && typeof o == "object" ? Z(s, o) : n[e] = o;
  }
  Object.keys(n).reverse().forEach((e) => {
    t.hasOwnProperty(e) || (Array.isArray(t) ? n.splice(e, 1) : delete n[e]);
  });
}
function Ce(n, t, e = [], o = /* @__PURE__ */ new WeakMap()) {
  const s = (i) => {
    if (Array.isArray(i))
      return i.map(s);
    if (typeof i == "object" && i !== null) {
      if (o.has(i))
        return "[Circular]";
      o.set(i, !0);
      const r = Object.keys(i).sort(), a = {};
      return r.forEach((c) => {
        e.includes(c) || (a[c] = s(i[c]));
      }), o.delete(i), a;
    } else
      return i;
  };
  return JSON.stringify(s(n)) === JSON.stringify(s(t));
}
function He(n, t) {
  const e = [];
  let o = !1;
  function s(i) {
    if (e.push(i), i.id === t && (o = !0), !o && i.children != null && i.children.length > 0)
      for (let r = 0; r < i.children.length && (s(i.children[r]), !o); r++)
        ;
    if (!o && i.slots)
      for (let r in i.slots)
        for (let a = 0; a < i.slots[r].length && (s(i.slots[r][a]), !o); a++)
          ;
    o || e.pop();
  }
  return n.forEach(s), o || console.error(`没有查询到id为${t}的节点`), e;
}
function Pt(n, t) {
  const e = n.split(".");
  let o = t;
  for (let s = 0; s < e.length; s++)
    if (o = o[e[s]], typeof o > "u")
      return;
  return o;
}
function xt(n, t, e) {
  const o = t.split(".");
  let s = e;
  o.forEach((i, r) => {
    if (r === o.length - 1) {
      s[i] = n;
      return;
    }
    s = s[i] ?? (s[i] = {});
  });
}
function At(n, t = "default") {
  const e = Y(
    n,
    (s) => {
      var i;
      return s.type === "form" && (((i = s.componentProps) == null ? void 0 : i.name) ?? s.name === t);
    },
    !0
  );
  return Y(
    (e == null ? void 0 : e.children) ?? [],
    (s) => !!s.input,
    !1,
    (s) => s.type !== "subform"
  ).map((s) => s.field);
}
function Y(n, t, e = !1, o) {
  const s = [], i = [...n];
  for (; i.length; ) {
    const r = i.pop();
    if (r != null && r.children && (!o || o(r)) && i.push(...r.children), r != null && r.slots && (!o || o(r)))
      for (let a in r.slots)
        i.push(...r.slots[a]);
    if (t(r) && (s.push(r), e))
      return r;
  }
  return e ? !1 : s;
}
function We(n, t, e) {
  const o = [...n];
  for (; o.length; ) {
    const s = o.pop();
    if (s != null && s.children && (!e || e(s)) && o.push(...s.children), s != null && s.slots && (!e || e(s)))
      for (let i in s.slots)
        o.push(...s.slots[i]);
    Z(s, t(s));
  }
  return n;
}
function Ot(n, t) {
  const e = Y(
    n,
    (o) => o.id === t,
    !0
  );
  if (!e)
    throw new Error(`没有查询到id为${t}的节点`);
  return e;
}
function Dt(n, t) {
  const e = [{ type: "", children: n }];
  let o = 0, s = null;
  if (Y(
    e,
    (i) => {
      if (s = i.children ?? null, !s) {
        if (i != null && i.slots)
          for (let r in i.slots) {
            s = i.slots[r];
            for (let a = 0; a < s.length; a++)
              if (s[a].id === t)
                return o = a, !0;
          }
        return !1;
      }
      for (let r = 0; r < s.length; r++)
        if (s[r].id === t)
          return o = r, !0;
      return !1;
    },
    !0
  ), !s)
    throw new Error(`没有查询到id为${t}的节点`);
  return {
    list: s,
    schema: s[o],
    index: o
  };
}
function $t(n) {
  const t = {
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
            id: "form_" + ie()
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
  return t.schemas[0].children[0].children = q(
    n.list
  ), t;
}
function q(n, t) {
  return n.map((e) => {
    var c, p, u;
    let o = e.type ?? "";
    const s = e.options ?? {}, i = (d, l) => {
      o === d && (o = l, s.defaultValue && (s.defaultValue = JSON.parse(s.defaultValue)));
    };
    if (i("uploadImg", "upload-image"), i("uploadFile", "upload-file"), o === "date" && s.range && (s.type = "daterange", delete s.range), (o === "date" || o === "time") && (s.valueFormat = s.format), o === "textarea") {
      const { minRows: d, maxRows: l } = s;
      s.autoSize = { minRows: d, maxRows: l }, delete s.minRows, delete s.maxRows;
    }
    o === "number" && !s.precision && delete s.precision, s.width && (s.style = { width: s.width }, delete s.width), o === "grid" && (o = "row", e.childImmovable = !0), t && t.type === "grid" && (o = "col", s.span = e.span, e.key = ie());
    const r = {
      label: e.label,
      type: o,
      icon: e.icon || "",
      field: e.model,
      componentProps: s,
      childImmovable: e.childImmovable,
      id: e.key
    };
    return (s.noFormItem || !s.showLabel) && (r.noFormItem = !0, delete s.noFormItem, delete s.showLabel), s.clearable && (s.allowClear = !0, delete s.clearable), [
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
    ].includes(o) && (r.input = !0, ((p = (c = e.rules) == null ? void 0 : c[0]) == null ? void 0 : p.required) === !1 && e.rules.shift(), ((u = e.rules) == null ? void 0 : u.length) > 0 && (r.rules = e.rules)), e.list && (r.children = q(e.list, e)), e.columns && (r.children = q(e.columns, e)), e.trs && (r.children = q(e.trs, e)), e.tds && (r.children = q(e.tds, e)), r;
  });
}
function ae(n) {
  return ke() ? (Me(n), !0) : !1;
}
function Je(n) {
  let t = 0, e, o;
  const s = () => {
    t -= 1, o && t <= 0 && (o.stop(), e = void 0, o = void 0);
  };
  return (...i) => (t += 1, e || (o = $e(!0), e = o.run(() => n(...i))), ae(s), e);
}
function le(n) {
  return typeof n == "function" ? n() : D(n);
}
const Ze = typeof window < "u", Ke = () => {
};
function kt(n, t, e) {
  const o = E(n, (...s) => (re(() => o()), t(...s)), e);
}
function J(n) {
  var t;
  const e = le(n);
  return (t = e == null ? void 0 : e.$el) != null ? t : e;
}
const j = Ze ? window : void 0;
function qe(...n) {
  let t, e, o, s;
  if (typeof n[0] == "string" || Array.isArray(n[0]) ? ([e, o, s] = n, t = j) : [t, e, o, s] = n, !t)
    return Ke;
  Array.isArray(e) || (e = [e]), Array.isArray(o) || (o = [o]);
  const i = [], r = () => {
    i.forEach((u) => u()), i.length = 0;
  }, a = (u, d, l, v) => (u.addEventListener(d, l, v), () => u.removeEventListener(d, l, v)), c = E(
    () => [J(t), le(s)],
    ([u, d]) => {
      r(), u && i.push(
        ...e.flatMap((l) => o.map((v) => a(u, l, v, d)))
      );
    },
    { immediate: !0, flush: "post" }
  ), p = () => {
    c(), r();
  };
  return ae(p), p;
}
var Qe = Object.defineProperty, Xe = Object.defineProperties, Ye = Object.getOwnPropertyDescriptors, he = Object.getOwnPropertySymbols, je = Object.prototype.hasOwnProperty, et = Object.prototype.propertyIsEnumerable, ve = (n, t, e) => t in n ? Qe(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[t] = e, _e = (n, t) => {
  for (var e in t || (t = {}))
    je.call(t, e) && ve(n, e, t[e]);
  if (he)
    for (var e of he(t))
      et.call(t, e) && ve(n, e, t[e]);
  return n;
}, Ee = (n, t) => Xe(n, Ye(t));
function tt(n) {
  return typeof n == "function" ? n : typeof n == "string" ? (t) => t.key === n : Array.isArray(n) ? (t) => n.includes(t.key) : () => !0;
}
function Ie(...n) {
  let t, e, o = {};
  n.length === 3 ? (t = n[0], e = n[1], o = n[2]) : n.length === 2 ? typeof n[1] == "object" ? (t = !0, e = n[0], o = n[1]) : (t = n[0], e = n[1]) : (t = !0, e = n[0]);
  const {
    target: s = j,
    eventName: i = "keydown",
    passive: r = !1,
    dedupe: a = !1
  } = o, c = tt(t);
  return qe(s, i, (u) => {
    u.repeat && le(a) || c(u) && e(u);
  }, r);
}
function te(n, t, e = {}) {
  return Ie(n, t, Ee(_e({}, e), { eventName: "keydown" }));
}
function ne(n, t, e = {}) {
  return Ie(n, t, Ee(_e({}, e), { eventName: "keyup" }));
}
function nt() {
  const n = w(!1);
  return we() && Ve(() => {
    n.value = !0;
  }), n;
}
function ot(n) {
  const t = nt();
  return z(() => (t.value, !!n()));
}
var ye = Object.getOwnPropertySymbols, st = Object.prototype.hasOwnProperty, rt = Object.prototype.propertyIsEnumerable, it = (n, t) => {
  var e = {};
  for (var o in n)
    st.call(n, o) && t.indexOf(o) < 0 && (e[o] = n[o]);
  if (n != null && ye)
    for (var o of ye(n))
      t.indexOf(o) < 0 && rt.call(n, o) && (e[o] = n[o]);
  return e;
};
function at(n, t, e = {}) {
  const o = e, { window: s = j } = o, i = it(o, ["window"]);
  let r;
  const a = ot(() => s && "ResizeObserver" in s), c = () => {
    r && (r.disconnect(), r = void 0);
  }, p = z(
    () => Array.isArray(n) ? n.map((l) => J(l)) : [J(n)]
  ), u = E(
    p,
    (l) => {
      if (c(), a.value && s) {
        r = new ResizeObserver(t);
        for (const v of l)
          v && r.observe(v, i);
      }
    },
    { immediate: !0, flush: "post", deep: !0 }
  ), d = () => {
    c(), u();
  };
  return ae(d), {
    isSupported: a,
    stop: d
  };
}
function Mt(n, t = { width: 0, height: 0 }, e = {}) {
  const { window: o = j, box: s = "content-box" } = e, i = z(() => {
    var c, p;
    return (p = (c = J(n)) == null ? void 0 : c.namespaceURI) == null ? void 0 : p.includes("svg");
  }), r = w(t.width), a = w(t.height);
  return at(
    n,
    ([c]) => {
      const p = s === "border-box" ? c.borderBoxSize : s === "content-box" ? c.contentBoxSize : c.devicePixelContentBoxSize;
      if (o && i.value) {
        const u = J(n);
        if (u) {
          const d = o.getComputedStyle(u);
          r.value = Number.parseFloat(d.width), a.value = Number.parseFloat(d.height);
        }
      } else if (p) {
        const u = Array.isArray(p) ? p : [p];
        r.value = u.reduce((d, { inlineSize: l }) => d + l, 0), a.value = u.reduce((d, { blockSize: l }) => d + l, 0);
      } else
        r.value = c.contentRect.width, a.value = c.contentRect.height;
    },
    e
  ), E(
    () => J(n),
    (c) => {
      r.value = c ? t.width : 0, a.value = c ? t.height : 0;
    }
  ), {
    width: r,
    height: a
  };
}
function lt() {
  const n = w(1), t = w(!1), { pressSpace: e, pressShift: o, pressCtrl: s } = ct();
  return {
    canvasScale: n,
    pressSpace: e,
    pressShift: o,
    pressCtrl: s,
    disabledZoom: t
  };
}
const ce = Je(lt);
function ct() {
  const n = w(!1), t = w(!1), e = w(!1);
  return te(" ", (o) => {
    var s = o.target;
    ["INPUT", "TEXTAREA"].includes(s.tagName) || o.preventDefault(), n.value = !0;
  }), ne(" ", () => {
    n.value = !1;
  }), te("Shift", (o) => {
    o.preventDefault(), t.value = !0;
  }), ne("Shift", () => {
    t.value = !1;
  }), te("Control", (o) => {
    o.preventDefault(), e.value = !0;
  }), ne("Control", () => {
    e.value = !1;
  }), { pressSpace: n, pressShift: t, pressCtrl: e };
}
function Vt(n) {
  const { pressSpace: t } = ce();
  let e = 0, o = 0;
  function s(a) {
    var c;
    e = a.x, o = a.y, (c = a.dataTransfer) == null || c.setDragImage(document.createElement("div"), 0, 0);
  }
  function i(a) {
    if (a.preventDefault(), !a.x || !a.y || !t.value)
      return;
    const c = a.x - e, p = a.y - o;
    e = a.x, o = a.y, n.value && (n.value.scrollTop -= p, n.value.scrollLeft -= c);
  }
  function r() {
    t.value = !1;
  }
  return { handleElementDragStart: s, handleElementDrag: i, handleElementDragEnd: r };
}
function Rt(n) {
  const { pressCtrl: t, canvasScale: e, disabledZoom: o } = ce();
  function s(i) {
    if (!t.value || o.value)
      return;
    i.preventDefault();
    let r = 0;
    i.deltaY < 0 ? r = e.value + 0.05 : r = e.value - 0.05, !(r > 150 || r < 0.5) && (e.value = r);
  }
  return E(
    () => e.value,
    (i) => {
      n.value && !o.value && (n.value.style.transform = `scale(${i})`);
    }
  ), { handleZoom: s, canvasScale: e };
}
function Nt(n, t = 16.66) {
  let e;
  function o() {
    s(), e = window.setInterval(n, t);
  }
  function s() {
    window.clearInterval(e);
  }
  return {
    startTimedQuery: o,
    stopTimedQuery: s
  };
}
function Gt(n, t) {
  let e = null;
  return (...o) => {
    e && clearTimeout(e), e = setTimeout(() => {
      n.apply(this, o);
    }, t);
  };
}
class ut {
  constructor() {
    // 已初始化基础UI
    k(this, "initialized", w(!1));
    // 组件对象字典，key 为组件type，value 为组件
    k(this, "components", {});
    // 组件配置记录字典，key 为组件type，value 为组件配置
    k(this, "componentConfigs", {});
    // 组件模式分组，使用 Vue Composition API 的 ref 进行响应式处理
    k(this, "componentSchemaGroups", w([]));
    // 隐藏的组件列表，存储需要隐藏的组件名称
    k(this, "hiddenComponents", []);
    // 组件分组名称映射，key 为组件原名称，value 为组件分组映射名称
    k(this, "componentGroupNameMap", {});
    // 组件分组排序列表(设置之后，按该数组下标排序)
    k(this, "sortedGroups", ["表单", "布局"]);
    // 视图容器模型，包含活动栏和右侧边栏的配置
    k(this, "viewsContainers", {
      activitybars: [],
      // 活动栏配置列表
      rightSidebars: []
      // 右侧边栏配置列表
    });
    // 公共方法模型，存储插件的公共方法
    k(this, "publicMethods", {
      // 示例方法
      // test: {
      //   describe: "测试函数",
      //   methodName: "test",
      //   method: (e) => {
      //     console.log(e)
      //     alert("测试函数弹出");
      //   },
      // },
    });
  }
  /**
   * 添加组件到插件管理器中
   * @param componentName 组件名称
   * @param component 组件
   */
  component(t, e) {
    typeof e == "function" && (e = G(e)), this.components[t] = e;
  }
  /**
   * 注册组件到插件管理器中
   * @param componentConfig 组件配置
   */
  registerComponent(t) {
    this.component(
      t.defaultSchema.type,
      t.component
    ), t.defaultSchema.input && (t.config.action || (t.config.action = []), t.config.action.unshift(
      {
        type: "setValue",
        describe: "设置值",
        argsConfigs: [
          {
            ...t.defaultSchema,
            label: "设置数据",
            field: "0"
          }
        ]
      },
      {
        type: "getValue",
        describe: "获取值"
      }
    )), this.componentConfigs[t.defaultSchema.type] = t, this.computedComponentSchemaGroups();
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
  getComponent(t) {
    return this.components[t];
  }
  /**
   * 注册或更新活动栏（Activitybar）模型。
   * 如果模型中的组件是一个函数，则异步加载该组件。
   * @param activitybar 要注册或更新的活动栏模型
   */
  registerActivitybar(t) {
    typeof t.component == "function" && (t.component = G(t.component));
    const e = this.viewsContainers.activitybars.findIndex(
      (o) => o.id === t.id
    );
    e !== -1 ? this.viewsContainers.activitybars[e] = t : this.viewsContainers.activitybars.push(t);
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
  registerRightSidebar(t) {
    typeof t.component == "function" && (t.component = G(t.component));
    const e = this.viewsContainers.rightSidebars.findIndex(
      (o) => o.id === t.id
    );
    e !== -1 ? this.viewsContainers.rightSidebars[e] = t : this.viewsContainers.rightSidebars.push(t);
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
  getComponentConfingByType(t) {
    return this.componentConfigs[t];
  }
  /**
   * 计算componentSchemaGroups
   */
  computedComponentSchemaGroups() {
    const t = [];
    Object.values(this.componentConfigs).forEach((e) => {
      if (!this.hiddenComponents.includes(e.defaultSchema.type) && e.groupName) {
        const o = this.componentGroupNameMap[e.groupName] ?? e.groupName;
        let s = t.findIndex(
          (r) => r.title === o
        );
        s === -1 && (t.push({
          title: o,
          list: []
        }), s = t.length - 1);
        let i = t[s].list.findIndex(
          (r) => r.type === e.defaultSchema.type
        );
        i !== -1 ? t[s].list[i] = e.defaultSchema : t[s].list.push(
          e.defaultSchema
        );
      }
    }), t.sort((e, o) => {
      const s = this.sortedGroups.indexOf(e.title), i = this.sortedGroups.indexOf(o.title);
      return s === -1 ? 1 : i === -1 ? -1 : s - i;
    }), this.componentSchemaGroups.value = t;
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
  setComponentGroupNameMap(t, e) {
    this.componentGroupNameMap[t] = e;
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
  setSortedGroups(t) {
    this.sortedGroups = t, this.computedComponentSchemaGroups();
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
  hideComponent(t) {
    this.hiddenComponents.push(t), this.computedComponentSchemaGroups();
  }
  /**
   * 移除需要隐藏的组件类型
   * @param {*} type
   * @returns
   */
  showComponent(t) {
    this.hiddenComponents = this.hiddenComponents.filter(
      (e) => e !== t
    ), this.computedComponentSchemaGroups();
  }
  /**
   * 设置需要隐藏的组件类型数组
   * @param {*} type[]
   * @returns
   */
  setHideComponents(t) {
    this.hiddenComponents = t, this.computedComponentSchemaGroups();
  }
  /**
   * 设置initialized的状态。
   *
   * @param value 要设置的布尔值。
   */
  setInitialized(t) {
    this.initialized.value = t;
  }
  /**
   * 添加公共方法
   * @param method
   */
  addPublicMethod(t) {
    this.publicMethods[t.methodName] = t;
  }
  /**
   * 移除公共方法
   * @param methodName
   */
  removePublicMethod(t) {
    delete this.publicMethods[t];
  }
}
const B = new ut();
function Pe() {
  const n = w({}), t = w({}), e = w(!1);
  function o(u) {
    return n.value[u];
  }
  function s(u, d) {
    n.value[u] = d;
  }
  function i(u) {
    delete n.value[u];
  }
  function r(u) {
    const d = Object.entries(
      B.publicMethods
    ).reduce((l, [v, x]) => (l[v] = x.method, l), {});
    new Function(`const epic = this;${u}`).bind({
      ...d,
      getComponent: o,
      find: o,
      defineExpose: a,
      publicMethods: d
    })();
  }
  function a(u) {
    u != null && (t.value = u);
  }
  function c(u, ...d) {
    u == null || u.forEach((l) => {
      var v, x, I;
      if (l.type === "public" && ((v = B.publicMethods[l.methodName]) == null || v.method(...d)), l.type === "custom" && ((I = (x = t.value)[l.methodName]) == null || I.call(x, ...d)), l.type === "component") {
        (l.componentId != null && o(l.componentId))[l.methodName](
          ...l.args ? JSON.parse(l.args) : d
        );
        return;
      }
    });
  }
  function p(u = !0) {
    e.value = u;
  }
  return {
    componentInstances: n,
    funcs: t,
    isDesignMode: e,
    getComponentInstance: o,
    // 简化查询函数, 推荐使用
    find: o,
    addComponentInstance: s,
    removeComponentInstance: i,
    setMethods: r,
    doActions: c,
    setDesignMode: p
  };
}
function dt() {
  const n = w([]), t = w([]), e = w(null);
  let o = 0;
  function s(a, c = "插入组件") {
    const p = Date.now();
    o + 150 > p || (o = p, e.value != null && (n.value.push(e.value), t.value.splice(0, t.value.length)), e.value = {
      type: c,
      componentSchema: JSON.stringify(a)
    }, n.value.length > 20 && n.value.unshift());
  }
  function i() {
    if (n.value.length === 0)
      return !1;
    const a = n.value.pop();
    return e.value != null && t.value.push(e.value), e.value = a, JSON.parse(a.componentSchema);
  }
  function r() {
    if (t.value.length === 0)
      return !1;
    const a = t.value.pop();
    return e.value != null && n.value.push(e.value), e.value = a, JSON.parse(a.componentSchema);
  }
  return {
    recordList: n,
    undoList: t,
    currentRecord: e,
    push: s,
    undo: i,
    redo: r
  };
}
const ge = dt(), pt = /* @__PURE__ */ X({
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
  setup(n, { emit: t }) {
    const e = n;
    let o = Q(F(e.componentSchema));
    E(() => e.componentSchema, (f) => {
      Ce(o, f, ["children"]) || Z(o, F(f));
    }, {
      deep: !0
    });
    let s = H("formData", {});
    const i = H("slots", {}), r = H("pageManager", {}), a = H("disabled", { value: !1 }), c = H("ruleFieldPrefix", null), p = H("resetFormData", !1);
    (e.resetFormData || p) && (s = {});
    const u = t, d = B.getComponent("form-item"), l = w(), v = w(), x = Re();
    Object.keys(x).length && V("nodeAttrs", x);
    const I = Ne(null), N = Q({}), h = z(() => {
      var f, g;
      return (f = o.componentProps) != null && f.hidden ? !1 : typeof o.show == "boolean" ? o.show : ((g = o.show) == null ? void 0 : g.call(o, { values: s })) ?? !0;
    }), C = z(() => {
      var $;
      const f = h.value && (($ = o.rules) == null ? void 0 : $.map(
        (S) => ({
          ...S,
          validator: S.validator && r.funcs.value[S.validator]
          // 自定义校验函数
        })
      ));
      let g = o.field;
      e.ruleField ? g = e.ruleField : c && o.field && (g = F(c), g.push(o.field));
      const O = {
        ...o,
        rules: f,
        rule: f,
        field: g
      };
      return O.children && delete O.children, O;
    }), b = z(() => {
      var O, $;
      const f = ((O = y.value) == null ? void 0 : O.bindModel) ?? "modelValue", g = {};
      return o.on && Object.keys(o.on).forEach((S) => {
        g[`on${Ue(S)}`] = (...xe) => r.doActions(o.on[S], ...xe);
      }), {
        ...e,
        ...o.componentProps,
        disabled: (a == null ? void 0 : a.value) || (($ = o.componentProps) == null ? void 0 : $.disabled),
        bindModel: f,
        [`onUpdate:${f}`]: T,
        ...g
      };
    }), y = z(() => B.getComponentConfingByType(o.type) ?? null), A = () => s[o.field ?? ""] ?? e.modelValue;
    E(() => l.value, () => {
      _();
    });
    function _() {
      var f;
      o.id && l.value && (o.input && (l.value.setValue = T, l.value.getValue = () => s[o.field] || e.modelValue), l.value.setAttr = (g, O) => o.componentProps[g] = O, l.value.getAttr = (g) => o.componentProps[g], r.addComponentInstance(o.id, l.value), (f = y.value) != null && f.defaultSchema.input && o.noFormItem !== !0 && v.value && r.addComponentInstance(o.id + "formItem", v.value));
    }
    function K() {
      var f;
      o.id && (r.removeComponentInstance(o.id), (f = y.value) != null && f.defaultSchema.input && o.noFormItem !== !0 && r.removeComponentInstance(o.id + "formItem"));
    }
    async function m() {
      var g, O, $;
      if (typeof ((g = o.componentProps) == null ? void 0 : g.defaultValue) < "u") {
        const S = r.isDesignMode.value ? (O = o.componentProps) == null ? void 0 : O.defaultValue : s[o.field] ?? (($ = o.componentProps) == null ? void 0 : $.defaultValue);
        T(F(S));
      }
      if (o.type === "slot") {
        const S = o.slotName;
        if (!S)
          return;
        I.value = X({
          setup() {
            return () => M(i, S, {
              componentSchema: o,
              model: s
            });
          }
        });
        return;
      }
      const f = B.getComponent(o.type);
      if (!f) {
        console.error(`组件${o.type}未注册`);
        return;
      }
      if (typeof f == "function") {
        const S = await f();
        I.value = S.default ?? S;
      } else
        I.value = f;
    }
    function T(f) {
      u("update:modelValue", f), u("change", f), o.field && (s[o.field] = f);
    }
    let ue = null;
    return E(() => o, (f) => {
      const g = JSON.stringify({ ...f, children: void 0 });
      if (g === ue)
        return !1;
      ue = g, m();
    }, {
      immediate: !0,
      deep: !0
    }), Ge(K), (f, g) => {
      var $;
      const O = Fe("ENode");
      return D(o).noFormItem !== !0 && (($ = y.value) != null && $.defaultSchema.input) && I.value && h.value ? (R(), U(D(d), ee({
        key: 0,
        ref_key: "formItemRef",
        ref: v
      }, C.value), {
        default: P(() => [
          (R(), U(de(I.value), ee({
            ref_key: "componentInstance",
            ref: l,
            onVnodeMounted: _
          }, { ...b.value, ...N, [b.value.bindModel]: A() }), {
            node: P((S) => [
              L(O, pe(fe(S)), null, 16)
            ]),
            "edit-node": P(() => [
              M(f.$slots, "edit-node")
            ]),
            _: 3
          }, 16))
        ]),
        _: 3
      }, 16)) : I.value && h.value ? (R(), U(de(I.value), ee({
        key: 1,
        onVnodeMounted: _,
        ref_key: "componentInstance",
        ref: l,
        model: D(s)
      }, { ...b.value, ...N, [b.value.bindModel]: A() }), {
        node: P((S) => [
          L(O, pe(fe(S)), null, 16)
        ]),
        "edit-node": P(() => [
          M(f.$slots, "edit-node")
        ]),
        _: 3
      }, 16, ["model"])) : be("", !0);
    };
  }
}), ft = {
  key: 0,
  class: "loading-box"
}, mt = { class: "epic-builder-main" }, ht = { class: "loading-box" }, Ft = /* @__PURE__ */ X({
  __name: "builder",
  props: {
    pageSchema: {},
    disabled: { type: Boolean }
  },
  emits: ["ready"],
  setup(n, { expose: t, emit: e }) {
    const o = G(() => import("./index-ab078c8b.js")), s = Pe(), i = e, r = ze(), a = w({}), c = w(!1), p = n, u = Q({
      schemas: []
    });
    E(() => p.pageSchema, (h) => {
      Z(u, h);
    }, {
      immediate: !0,
      deep: !0
    }), E(() => u.script, (h) => {
      h && h !== "" && s.setMethods(h);
    }, {
      immediate: !0
    }), V("slots", r), V("pageManager", s), V("forms", a), V("pageSchema", u), V("disabled", z(() => p.disabled));
    function d(h = "default") {
      return new Promise(async (C, b) => {
        var _;
        if (!c.value) {
          const K = E(c, async () => {
            K(), C(await d(h));
          });
          return;
        }
        const y = (_ = a.value) == null ? void 0 : _[h];
        if (!y)
          return b(`表单 [name=${h}] 不存在`), !1;
        const A = F(await y.getData());
        C(A);
      });
    }
    function l(h = "default") {
      return new Promise(async (C, b) => {
        var A;
        if (!c.value) {
          const _ = E(c, async () => {
            _(), C(await l(h));
          });
          return;
        }
        const y = (A = a.value) == null ? void 0 : A[h];
        if (!y)
          return b(`表单 [name=${h}] 不存在`), !1;
        try {
          await y.validate();
          const _ = await y.getData();
          C(_);
        } catch (_) {
          b(_);
        }
      });
    }
    function v(h, C = "default") {
      var y;
      if (!c.value) {
        const A = E(c, () => {
          A(), v(h, C);
        });
        return;
      }
      const b = (y = a.value) == null ? void 0 : y[C];
      if (!b)
        return console.error(`表单 [name=${C}] 不存在`), !1;
      b.setData(h);
    }
    function x(h = "default") {
      return new Promise(async (C, b) => {
        var A;
        if (!c.value) {
          const _ = E(c, async () => {
            _(), C(await x(h));
          });
          return;
        }
        const y = (A = a.value) == null ? void 0 : A[h];
        if (!y)
          return b(`表单 [name=${h}] 不存在`), !1;
        C(y);
      });
    }
    const { proxy: I } = we();
    function N() {
      re(() => {
        c.value = !0, i("ready", s), I && s.addComponentInstance("builder", I);
      });
    }
    return t({
      ready: c,
      getData: d,
      setData: v,
      validate: l,
      getFormInstance: x
    }), (h, C) => D(B).initialized.value ? (R(), U(Se, {
      key: 1,
      onResolve: N
    }, {
      default: P(() => [
        W("div", mt, [
          (R(!0), se(Be, null, Te(u.schemas, (b, y) => (R(), U(D(pt), {
            key: y,
            componentSchema: b
          }, null, 8, ["componentSchema"]))), 128))
        ])
      ]),
      fallback: P(() => [
        W("div", ht, [
          L(D(o))
        ])
      ]),
      _: 1
    })) : (R(), se("div", ft));
  }
}), vt = {
  key: 0,
  class: "loading-box"
}, yt = { class: "epic-designer-main" }, gt = { class: "epic-header-container" }, wt = { class: "loading-box" }, oe = `const { defineExpose, find } = epic;

function test (){
    console.log('test')
}

// 通过defineExpose暴露的函数或者属性
defineExpose({
 test 
})`, zt = /* @__PURE__ */ X({
  __name: "designer",
  props: {
    disabledZoom: { type: Boolean, default: !1 },
    hiddenHeader: { type: Boolean, default: !1 }
  },
  emits: ["ready", "save"],
  setup(n, { expose: t, emit: e }) {
    const o = G(() => import("./index-125822fb.js")), s = G(() => import("./index-e759540c.js")), i = G(() => import("./index-a1e4b4ec.js")), r = G(() => import("./index-fb589494.js")), a = G(() => import("./index-ab078c8b.js")), c = Pe();
    c.setDesignMode();
    const p = n, u = e, d = Q({
      checkedNode: null,
      hoverNode: null,
      disableHover: !1,
      matched: []
    }), l = Q({
      schemas: [],
      script: ""
    }), { disabledZoom: v } = ce();
    E(() => p.disabledZoom, (m) => {
      v.value = m;
    }, {
      immediate: !0
    }), E(() => l.script, (m) => {
      m && m !== "" && c.setMethods(m);
    });
    const x = [{
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
    l.script = oe, V("pageSchema", l), V("pageManager", c), V("designerProps", p), V("designer", {
      setCheckedNode: N,
      setHoverNode: h,
      setDisableHover: b,
      reset: _,
      state: d
    });
    function I() {
      l.schemas = F(x), N(l.schemas[0]), ge.push(l.schemas, "初始化撤销功能");
    }
    async function N(m = l.schemas[0]) {
      d.checkedNode = m, d.matched = He(l.schemas, m.id);
    }
    async function h(m = null) {
      var T;
      if (!m || d.disableHover)
        return d.hoverNode = null, !1;
      if ((m == null ? void 0 : m.id) === ((T = d.hoverNode) == null ? void 0 : T.id))
        return !1;
      d.hoverNode = m;
    }
    function C() {
      re(() => {
        u("ready", { pageManager: c });
      });
    }
    async function b(m = !1) {
      d.disableHover = m;
    }
    function y(m) {
      Z(l, m);
    }
    function A() {
      return me(l);
    }
    function _() {
      Ce(l.schemas, x) && l.script === oe || (Z(l.schemas, x), l.script = oe, N(l.schemas[0]), ge.push(l.schemas, "重置操作"));
    }
    function K() {
      u("save", me(l));
    }
    return I(), t({
      setData: y,
      getData: A,
      reset: _
    }), (m, T) => D(B).initialized.value ? (R(), U(Se, {
      key: 1,
      onResolve: C
    }, {
      default: P(() => [
        W("div", yt, [
          W("div", gt, [
            M(m.$slots, "header", {}, () => [
              p.hiddenHeader ? be("", !0) : (R(), U(D(o), {
                key: 0,
                onSave: K
              }, {
                header: P(() => [
                  M(m.$slots, "header-prefix")
                ]),
                prefix: P(() => [
                  M(m.$slots, "header-prefix")
                ]),
                title: P(() => [
                  M(m.$slots, "header-title")
                ]),
                "right-prefix": P(() => [
                  M(m.$slots, "header-right-prefix")
                ]),
                "right-action": P(() => [
                  M(m.$slots, "header-right-action")
                ]),
                "right-suffix": P(() => [
                  M(m.$slots, "header-right-suffix")
                ]),
                _: 3
              }))
            ])
          ]),
          W("div", {
            class: Le(["epic-split-view-container", { "hidden-header": m.hiddenHeader }])
          }, [
            L(D(s)),
            L(D(i)),
            L(D(r))
          ], 2)
        ])
      ]),
      fallback: P(() => [
        W("div", wt, [
          L(D(a))
        ])
      ]),
      _: 3
    })) : (R(), se("div", vt));
  }
}), bt = {
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
}, St = {
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
function Ct(n) {
  n.component("ETabPaneEditor", async () => await import("./index-83994d04.js")), n.component("EInputSize", async () => await import("./index-0238f67c.js")), n.component("EColEditor", async () => await import("./index-af283a22.js")), n.component("EActionEditor", async () => await import("./index-76c2efe5.js")), n.component("ERuleEditor", async () => await import("./index-cac24322.js")), n.component("EOptionsEditor", async () => await import("./index-898f7d0f.js")), n.component("ENode", async () => await import("./index-fbad5742.js")), n.registerActivitybar({
    id: "component_view",
    title: "组件",
    icon: "epic-icon-mokuai_1",
    component: async () => await import("./index-245fe886.js")
  }), n.registerActivitybar({
    id: "sound_code_view",
    title: "源码",
    icon: "epic-icon-daima1",
    component: async () => await import("./index-7268f4a1.js")
  }), n.registerActivitybar({
    id: "outline_view",
    title: "大纲",
    icon: "epic-icon-juxingkaobei",
    component: async () => await import("./outline-c7b1fc16.js")
  }), n.registerRightSidebar({
    id: "attribute_view",
    title: "属性",
    component: async () => await import("./attributeView-078b8058.js")
  }), n.registerRightSidebar({
    id: "style_view",
    title: "样式",
    component: async () => await import("./styleView-6f6d82d3.js")
  }), n.registerRightSidebar({
    id: "event_view",
    title: "事件",
    component: async () => await import("./eventView-f72ce75d.js")
  }), [bt, St].forEach((e) => {
    n.registerComponent(e);
  });
}
Ct(B);
export {
  Y as A,
  We as B,
  q as C,
  Ue as D,
  ct as E,
  Gt as F,
  lt as G,
  ut as P,
  Ft as _,
  Nt as a,
  It as b,
  at as c,
  pt as d,
  Z as e,
  Dt as f,
  ie as g,
  $t as h,
  Vt as i,
  Mt as j,
  Rt as k,
  Ot as l,
  F as m,
  Ce as n,
  Pt as o,
  B as p,
  zt as q,
  ge as r,
  xt as s,
  Pe as t,
  ce as u,
  dt as v,
  kt as w,
  G as x,
  He as y,
  At as z
};
