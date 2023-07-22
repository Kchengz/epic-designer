var L = Object.defineProperty;
var G = (t, e, n) => e in t ? L(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var m = (t, e, n) => (G(t, typeof e != "symbol" ? e + "" : e, n), n);
import { defineAsyncComponent as T, ref as f, effectScope as x, getCurrentScope as b, onScopeDispose as k, unref as K, watch as E } from "vue";
function J(t = 10) {
  return (+`${Math.random().toString().substring(3, t)}${Date.now()}`).toString(36);
}
function se(t) {
  return t.charAt(0).toUpperCase() + t.slice(1);
}
function S(t, e = /* @__PURE__ */ new WeakMap()) {
  if (typeof t != "object" || t === null)
    return t;
  if (e.has(t))
    return e.get(t);
  if (Array.isArray(t)) {
    const r = t.map((o) => S(o, e));
    return e.set(t, r), r;
  }
  const n = {};
  return e.set(t, n), Object.keys(t).forEach((r) => {
    n[r] = S(t[r], e);
  }), n;
}
function U(t, e) {
  for (const [n, r] of Object.entries(e)) {
    const o = t == null ? void 0 : t[n];
    o && r && typeof o == "object" && typeof r == "object" ? U(o, r) : t[n] = r;
  }
  Object.keys(t).reverse().forEach((n) => {
    e.hasOwnProperty(n) || (Array.isArray(e) ? t.splice(n, 1) : delete t[n]);
  });
}
function ue(t, e, n = /* @__PURE__ */ new WeakMap()) {
  const r = (o) => {
    if (Array.isArray(o))
      return o.map(r);
    if (typeof o == "object" && o !== null) {
      if (n.has(o))
        return "[Circular]";
      n.set(o, !0);
      const s = Object.keys(o).sort(), l = {};
      return s.forEach((u) => {
        l[u] = r(o[u]);
      }), n.delete(o), l;
    } else
      return o;
  };
  return JSON.stringify(r(t)) === JSON.stringify(r(e));
}
const v = (t, e) => T({
  loader: t,
  loadingComponent: e,
  delay: 80
});
function ie(t, e) {
  const n = [{ type: "root", children: t }];
  for (; n.length > 0; ) {
    const r = n.pop(), o = r == null ? void 0 : r.children;
    if (o != null)
      for (let s = 0; s < o.length; s++) {
        if (o[s].id === e)
          return {
            list: (r == null ? void 0 : r.children) ?? [],
            schema: o[s],
            index: s
          };
        n.push(...o);
      }
  }
  throw new Error(`没有查询到id为${e}的节点`);
}
function ae(t, e) {
  const n = [];
  let r = !1;
  function o(s) {
    if (n.push(s), s.id === e && (r = !0), !r && s.children != null && s.children.length > 0)
      for (let l = 0; l < s.children.length && (o(s.children[l]), !r); l++)
        ;
    r || n.pop();
  }
  return t.forEach(o), r || console.error(`没有查询到id为${e}的节点`), n;
}
function le(t, e) {
  const n = t.split(".");
  let r = e;
  for (let o = 0; o < n.length; o++)
    if (r = r[n[o]], r == null && r !== !1 && r !== 0)
      return;
  return r;
}
function ce(t, e, n) {
  const r = e.split(".");
  let o = n;
  r.forEach((s, l) => {
    if (l === r.length - 1) {
      o[s] = t;
      return;
    }
    o = o[s] ?? (o[s] = {});
  });
}
class B {
  constructor() {
    m(this, "components", {});
    m(this, "componentConfigs", {});
    m(this, "schemaGroup", []);
    m(this, "schemaGroupList", f([]));
    m(this, "viewsContainers", {
      activitybars: [],
      rightSidebars: []
    });
    m(this, "publicMethods", {
      test: {
        describe: "测试函数",
        methodName: "test",
        method: () => {
          alert("测试函数弹出");
        }
      }
    });
  }
  /**
   * 添加组件到插件管理器中
   * @param componentName 组件名称
   * @param component 组件
   */
  component(e, n) {
    typeof n == "function" && (n = v(n)), this.components[e] = n;
  }
  /**
   * 注册组件到插件管理器中
   * @param component 组件
   * @param schema 组件结构
   * @param attrSchemas 属性结构
   * @param bindModel 双向绑定value
   */
  registerComponent(e) {
    this.component(
      e.defaultSchema.type,
      e.component
    ), this.componentConfigs[e.defaultSchema.type] = e;
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
   * 注册活动栏
   */
  registerActivitybar(e) {
    typeof e.component == "function" && (e.component = v(e.component));
    const n = this.viewsContainers.activitybars.findIndex((r) => r.id === e.id);
    n !== -1 ? this.viewsContainers.activitybars[n] = e : this.viewsContainers.activitybars.push(e);
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
    typeof e.component == "function" && (e.component = v(e.component));
    const n = this.viewsContainers.rightSidebars.findIndex((r) => r.id === e.id);
    n !== -1 ? this.viewsContainers.rightSidebars[n] = e : this.viewsContainers.rightSidebars.push(e);
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
   * 设置分组,这个操作将会覆盖原来的数据
   * @param {*} schemaGroup
   * @returns
   */
  setSchemaGroup(e) {
    this.schemaGroup = e, this.computedSchemaGroupList();
  }
  /**
   * 添加分组
   * @param {*} schemaGroupItem
   * @returns
   */
  addSchemaGroup(e) {
    this.schemaGroup.push(e), this.computedSchemaGroupList();
  }
  /**
   * 计算schemaGroupList
   */
  computedSchemaGroupList() {
    const e = this.schemaGroup.map((n) => {
      const r = n.list.map((o) => {
        var l;
        const s = (l = this.componentConfigs[o]) == null ? void 0 : l.defaultSchema;
        return s == null ? (console.warn(`${o} 组件未注册到pluginManager中`), !1) : {
          ...s,
          id: J()
        };
      }).filter((o) => o);
      return {
        ...n,
        list: r
      };
    });
    this.schemaGroupList.value = e;
  }
  /**
   * 按照分组获取schemaGroupList
   * @returns schemaGroupList
   */
  getSchemaByGroup() {
    return this.schemaGroupList;
  }
  /**
   * 添加公共方法
   * @param method
   */
  addPublicMethod(e) {
    this.publicMethods[e.methodName] = e;
  }
}
const C = new B();
function fe() {
  const t = f({}), e = f({});
  function n(i) {
    return t.value[i];
  }
  function r(i, c) {
    t.value[i] = c;
  }
  function o(i) {
    delete t.value[i];
  }
  function s(i) {
    const c = Object.entries(
      C.publicMethods
    ).reduce((a, [p, d]) => (a[p] = d.method, a), {});
    new Function(`${i}`).bind({
      getComponent: n,
      defineExpose: l,
      ...c
    })();
  }
  function l(i) {
    i != null && (e.value = i);
  }
  function u(i, ...c) {
    i == null || i.forEach((a) => {
      var p, d, h;
      if (a.type === "public" && ((p = C.publicMethods[a.methodName]) == null || p.method(a.args)), a.type === "custom" && ((h = (d = e.value)[a.methodName]) == null || h.call(d, ...c)), a.type === "component") {
        (a.componentId != null && n(a.componentId))[a.methodName](...c);
        return;
      }
    });
  }
  return {
    componentInstances: t,
    funcs: e,
    getComponentInstance: n,
    addComponentInstance: r,
    removeComponentInstance: o,
    setMethods: s,
    doActions: u
  };
}
function R() {
  const t = f([]), e = f([]), n = f(null);
  let r = 0;
  function o(u, i = "插入组件") {
    const c = Date.now();
    r + 150 > c || (r = c, n.value != null && (t.value.push(n.value), e.value.splice(0, e.value.length)), n.value = {
      type: i,
      record: JSON.stringify(u)
    }, t.value.length > 20 && t.value.unshift());
  }
  function s() {
    if (t.value.length === 0)
      return !1;
    const u = t.value.pop();
    return n.value != null && e.value.push(n.value), n.value = u, JSON.parse(u.record);
  }
  function l() {
    if (e.value.length === 0)
      return !1;
    const u = e.value.pop();
    return n.value != null && t.value.push(n.value), n.value = u, JSON.parse(u.record);
  }
  return {
    recordList: t,
    undoList: e,
    currentRecord: n,
    push: o,
    undo: s,
    redo: l
  };
}
const pe = R();
function P(t) {
  return b() ? (k(t), !0) : !1;
}
function _(t) {
  let e = 0, n, r;
  const o = () => {
    e -= 1, r && e <= 0 && (r.stop(), n = void 0, r = void 0);
  };
  return (...s) => (e += 1, n || (r = x(!0), n = r.run(() => t(...s))), P(o), n);
}
function w(t) {
  return typeof t == "function" ? t() : K(t);
}
const V = typeof window < "u", W = () => {
};
function z(t) {
  var e;
  const n = w(t);
  return (e = n == null ? void 0 : n.$el) != null ? e : n;
}
const D = V ? window : void 0;
function Q(...t) {
  let e, n, r, o;
  if (typeof t[0] == "string" || Array.isArray(t[0]) ? ([n, r, o] = t, e = D) : [e, n, r, o] = t, !e)
    return W;
  Array.isArray(n) || (n = [n]), Array.isArray(r) || (r = [r]);
  const s = [], l = () => {
    s.forEach((a) => a()), s.length = 0;
  }, u = (a, p, d, h) => (a.addEventListener(p, d, h), () => a.removeEventListener(p, d, h)), i = E(
    () => [z(e), w(o)],
    ([a, p]) => {
      l(), a && s.push(
        ...n.flatMap((d) => r.map((h) => u(a, d, h, p)))
      );
    },
    { immediate: !0, flush: "post" }
  ), c = () => {
    i(), l();
  };
  return P(c), c;
}
var X = Object.defineProperty, Y = Object.defineProperties, Z = Object.getOwnPropertyDescriptors, A = Object.getOwnPropertySymbols, q = Object.prototype.hasOwnProperty, H = Object.prototype.propertyIsEnumerable, O = (t, e, n) => e in t ? X(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n, N = (t, e) => {
  for (var n in e || (e = {}))
    q.call(e, n) && O(t, n, e[n]);
  if (A)
    for (var n of A(e))
      H.call(e, n) && O(t, n, e[n]);
  return t;
}, I = (t, e) => Y(t, Z(e));
function F(t) {
  return typeof t == "function" ? t : typeof t == "string" ? (e) => e.key === t : Array.isArray(t) ? (e) => t.includes(e.key) : () => !0;
}
function M(...t) {
  let e, n, r = {};
  t.length === 3 ? (e = t[0], n = t[1], r = t[2]) : t.length === 2 ? typeof t[1] == "object" ? (e = !0, n = t[0], r = t[1]) : (e = t[0], n = t[1]) : (e = !0, n = t[0]);
  const {
    target: o = D,
    eventName: s = "keydown",
    passive: l = !1,
    dedupe: u = !1
  } = r, i = F(e);
  return Q(o, s, (a) => {
    a.repeat && w(u) || i(a) && n(a);
  }, l);
}
function y(t, e, n = {}) {
  return M(t, e, I(N({}, n), { eventName: "keydown" }));
}
function g(t, e, n = {}) {
  return M(t, e, I(N({}, n), { eventName: "keyup" }));
}
function j() {
  const t = f(!1), e = f(!1), n = f(!1);
  return y(" ", (r) => {
    var o = r.target;
    ["INPUT", "TEXTAREA"].includes(o.tagName) || r.preventDefault(), t.value = !0;
  }), g(" ", () => {
    t.value = !1;
  }), y("Shift", (r) => {
    r.preventDefault(), e.value = !0;
  }), g("Shift", () => {
    e.value = !1;
  }), y("Control", (r) => {
    r.preventDefault(), n.value = !0;
  }), g("Control", () => {
    n.value = !1;
  }), { pressSpace: t, pressShift: e, pressCtrl: n };
}
function ee() {
  return {
    canvasScale: f(1)
  };
}
const te = _(ee), $ = _(j);
function de(t) {
  const { pressSpace: e } = $();
  let n = 0, r = 0;
  function o(u) {
    var i;
    n = u.x, r = u.y, (i = u.dataTransfer) == null || i.setDragImage(document.createElement("div"), 0, 0);
  }
  function s(u) {
    if (u.preventDefault(), !u.x || !u.y || !e.value)
      return;
    const i = u.x - n, c = u.y - r;
    n = u.x, r = u.y, t.value && (t.value.scrollTop -= c, t.value.scrollLeft -= i);
  }
  function l() {
    e.value = !1;
  }
  return { handleElementDragStart: o, handleElementDrag: s, handleElementDragEnd: l };
}
function he(t) {
  const { pressCtrl: e } = $(), { canvasScale: n } = te();
  function r(o) {
    if (!e.value)
      return;
    o.preventDefault();
    let s = 0;
    o.deltaY < 0 ? s = n.value + 0.05 : s = n.value - 0.05, !(s > 2 || s < 0.2) && (n.value = s);
  }
  return E(
    () => n.value,
    (o) => {
      t.value && (t.value.style.transform = `scale(${o})`);
    }
  ), { handleZoom: r, canvasScale: n };
}
function me(t, e = 16.66) {
  let n;
  function r() {
    o(), n = window.setInterval(t, e);
  }
  function o() {
    window.clearInterval(n);
  }
  return {
    startTimedQuery: r,
    stopTimedQuery: o
  };
}
export {
  B as PluginManager,
  se as capitalizeFirstLetter,
  S as deepClone,
  U as deepCompareAndModify,
  ue as deepEqual,
  ie as findSchemaById,
  le as getAttributeValue,
  ae as getMatchedById,
  J as getUUID,
  v as loadAsyncComponent,
  C as pluginManager,
  pe as revoke,
  ce as setAttributeValue,
  de as useElementDrag,
  he as useElementZoom,
  fe as usePageManager,
  $ as useShareKeyPress,
  te as useShareStore,
  ee as useStore,
  me as useTimedQuery
};
