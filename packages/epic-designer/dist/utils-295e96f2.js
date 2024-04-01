var t = {};
Object.defineProperty(t, "__esModule", { value: !0 });
t.createValOptMap = t.filterOptions = t.createTmOptions = t.patternMatched = t.getIgnored = t.getIsGroup = void 0;
function i(r) {
  return r.type === "group";
}
t.getIsGroup = i;
function f(r) {
  return r.type === "ignored";
}
t.getIgnored = f;
function g(r, n) {
  try {
    return !!(1 + n.toString().toLowerCase().indexOf(r.trim().toLowerCase()));
  } catch {
    return !1;
  }
}
t.patternMatched = g;
function d(r, n) {
  return {
    getIsGroup: i,
    getIgnored: f,
    getKey(e) {
      return i(e) ? e.name || e.key || "key-required" : e[r];
    },
    getChildren(e) {
      return e[n];
    }
  };
}
t.createTmOptions = d;
function O(r, n, u, e) {
  if (!n)
    return r;
  function a(o) {
    if (!Array.isArray(o))
      return [];
    const c = [];
    for (const s of o)
      if (i(s)) {
        const p = a(s[e]);
        p.length && c.push(Object.assign({}, s, {
          [e]: p
        }));
      } else {
        if (f(s))
          continue;
        n(u, s) && c.push(s);
      }
    return c;
  }
  return a(r);
}
t.filterOptions = O;
function l(r, n, u) {
  const e = /* @__PURE__ */ new Map();
  return r.forEach((a) => {
    i(a) ? a[u].forEach((o) => {
      e.set(o[n], o);
    }) : e.set(a[n], a);
  }), e;
}
t.createValOptMap = l;
export {
  t as u
};
