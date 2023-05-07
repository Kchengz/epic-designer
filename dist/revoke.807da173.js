import { openBlock as h, createElementBlock as _, createElementVNode as c, defineAsyncComponent as v, ref as i } from "vue";
const y = (e, n) => {
  const t = e.__vccOpts || e;
  for (const [r, s] of n)
    t[r] = s;
  return t;
}, g = {}, A = { class: "loading" }, m = /* @__PURE__ */ c("div", { class: "shape shape-1" }, null, -1), E = /* @__PURE__ */ c("div", { class: "shape shape-2" }, null, -1), O = /* @__PURE__ */ c("div", { class: "shape shape-3" }, null, -1), k = /* @__PURE__ */ c("div", { class: "shape shape-4" }, null, -1), C = [
  m,
  E,
  O,
  k
];
function S(e, n) {
  return h(), _("div", A, C);
}
const d = /* @__PURE__ */ y(g, [["render", S]]), L = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: d
}, Symbol.toStringTag, { value: "Module" }));
function M(e = 10) {
  return Number(
    Math.random().toString().substring(3, e) + Date.now()
  ).toString(36);
}
function x(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function f(e, n = /* @__PURE__ */ new WeakMap()) {
  if (typeof e != "object" || e === null)
    return e;
  if (n.has(e))
    return n.get(e);
  if (Array.isArray(e)) {
    const r = e.map((s) => f(s, n));
    return n.set(e, r), r;
  }
  const t = {};
  return n.set(e, t), Object.keys(e).forEach((r) => {
    t[r] = f(e[r], n);
  }), t;
}
function w(e, n) {
  for (const [t, r] of Object.entries(n)) {
    const s = e == null ? void 0 : e[t];
    typeof s == "object" && typeof r == "object" ? w(s, r) : e[t] = r;
  }
  Object.keys(e).reverse().forEach((t) => {
    n.hasOwnProperty(t) || (Array.isArray(n) ? e.splice(t, 1) : delete e[t]);
  });
}
function J(e, n, t = /* @__PURE__ */ new WeakMap()) {
  const r = (s) => {
    if (Array.isArray(s))
      return s.map(r);
    if (typeof s == "object" && s !== null) {
      if (t.has(s))
        return "[Circular]";
      t.set(s, !0);
      const u = Object.keys(s).sort(), a = {};
      return u.forEach((l) => {
        a[l] = r(s[l]);
      }), t.delete(s), a;
    } else
      return s;
  };
  return JSON.stringify(r(e)) === JSON.stringify(r(n));
}
const z = (e) => v({
  loader: e,
  loadingComponent: d,
  delay: 80
});
function D(e, n) {
  const t = [{ type: "root", children: e }];
  for (; t.length > 0; ) {
    const r = t.pop(), s = r == null ? void 0 : r.children;
    if (!!s)
      for (let u = 0; u < s.length; u++) {
        if (s[u].id === n)
          return {
            list: r.children,
            schema: s[u],
            index: u
          };
        t.push(...s);
      }
  }
  throw `\u6CA1\u6709\u67E5\u8BE2\u5230id\u4E3A${n}\u7684\u8282\u70B9`;
}
function K(e, n) {
  const t = [];
  let r = !1;
  function s(u) {
    if (t.push(u), u.id === n && (r = !0), !r && u.children && u.children.length > 0)
      for (let a = 0; a < u.children.length && (s(u.children[a]), !r); a++)
        ;
    r || t.pop();
  }
  return e.forEach(s), r || console.error(`\u6CA1\u6709\u67E5\u8BE2\u5230id\u4E3A${n}\u7684\u8282\u70B9`), t;
}
function P(e, n = {}) {
  const t = e.split(".");
  for (let r = 0; r < t.length; r++)
    if (n = n[t[r]], !n && n !== !1 && n !== 0)
      return;
  return n;
}
function I(e, n, t = {}) {
  const r = n.split(".");
  r.forEach((s, u) => {
    var a;
    if (u === r.length - 1)
      return t[s] = e, !1;
    t = (a = t[s]) != null ? a : t[s] = {};
  });
}
function B() {
  const e = i([]), n = i([]), t = i(null);
  let r = 0;
  function s(l, p = "\u63D2\u5165\u7EC4\u4EF6") {
    const o = Date.now();
    if (!(r + 150 > o))
      return r = o, t.value && (e.value.push(t.value), n.value.splice(0, n.value.length)), t.value = {
        type: p,
        record: JSON.stringify(l)
      }, e.value.length > 20 && e.value.unshift(), !0;
  }
  function u() {
    if (e.value.length === 0)
      return !1;
    const l = e.value.pop();
    return t.value && n.value.push(t.value), t.value = l, JSON.parse(l.record);
  }
  function a() {
    if (n.value.length === 0)
      return !1;
    const l = n.value.pop();
    return t.value && e.value.push(t.value), t.value = l, JSON.parse(l.record);
  }
  return {
    recordList: e,
    undoList: n,
    currentRecord: t,
    push: s,
    undo: u,
    redo: a
  };
}
const T = B();
export {
  L as K,
  y as _,
  K as a,
  w as b,
  x as c,
  f as d,
  J as e,
  D as f,
  M as g,
  P as h,
  z as l,
  T as r,
  I as s
};
