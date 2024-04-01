import { a as be, c as H } from "./_commonjsHelpers-c5d32002.js";
import { r as je } from "./_vue_commonjs-external-eb7fec7f.js";
import { ref as De, readonly as Wt, watch as er, computed as nt, getCurrentInstance as Jl, onMounted as Hr, onBeforeUnmount as Rt, onBeforeMount as di, reactive as LP, createTextVNode as BP, Fragment as Qf, Comment as VP, defineComponent as tr, provide as qP, inject as Gn, withDirectives as em, toRef as ti, h as Ze, Teleport as XP, nextTick as tm, renderSlot as rm, onActivated as KP, onDeactivated as GP, mergeProps as UP } from "vue";
function nm(t) {
  const n = De(!!t.value);
  if (n.value)
    return Wt(n);
  const a = er(t, (o) => {
    o && (n.value = !0, a());
  });
  return Wt(n);
}
function ai(t) {
  const n = nt(t), a = De(n.value);
  return er(n, (o) => {
    a.value = o;
  }), typeof t == "function" ? a : {
    __v_isRef: !0,
    get value() {
      return a.value;
    },
    set value(o) {
      t.set(o);
    }
  };
}
function ci() {
  return Jl() !== null;
}
const Un = typeof window < "u";
let ln, Vn;
const YP = () => {
  var t, n;
  ln = Un ? (n = (t = document) === null || t === void 0 ? void 0 : t.fonts) === null || n === void 0 ? void 0 : n.ready : void 0, Vn = !1, ln !== void 0 ? ln.then(() => {
    Vn = !0;
  }) : Vn = !0;
};
YP();
function am(t) {
  if (Vn)
    return;
  let n = !1;
  Hr(() => {
    Vn || ln == null || ln.then(() => {
      n || t();
    });
  }), Rt(() => {
    n = !0;
  });
}
function ri(t) {
  return t.composedPath()[0];
}
const ZP = {
  mousemoveoutside: /* @__PURE__ */ new WeakMap(),
  clickoutside: /* @__PURE__ */ new WeakMap()
};
function JP(t, n, a) {
  if (t === "mousemoveoutside") {
    const o = (l) => {
      n.contains(ri(l)) || a(l);
    };
    return {
      mousemove: o,
      touchstart: o
    };
  } else if (t === "clickoutside") {
    let o = !1;
    const l = (m) => {
      o = !n.contains(ri(m));
    }, d = (m) => {
      o && (n.contains(ri(m)) || a(m));
    };
    return {
      mousedown: l,
      mouseup: d,
      touchstart: l,
      touchend: d
    };
  }
  return console.error(
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    `[evtd/create-trap-handler]: name \`${t}\` is invalid. This could be a bug of evtd.`
  ), {};
}
function im(t, n, a) {
  const o = ZP[t];
  let l = o.get(n);
  l === void 0 && o.set(n, l = /* @__PURE__ */ new WeakMap());
  let d = l.get(a);
  return d === void 0 && l.set(a, d = JP(t, n, a)), d;
}
function QP(t, n, a, o) {
  if (t === "mousemoveoutside" || t === "clickoutside") {
    const l = im(t, n, a);
    return Object.keys(l).forEach((d) => {
      _t(d, document, l[d], o);
    }), !0;
  }
  return !1;
}
function e0(t, n, a, o) {
  if (t === "mousemoveoutside" || t === "clickoutside") {
    const l = im(t, n, a);
    return Object.keys(l).forEach((d) => {
      at(d, document, l[d], o);
    }), !0;
  }
  return !1;
}
function t0() {
  if (typeof window > "u")
    return {
      on: () => {
      },
      off: () => {
      }
    };
  const t = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap();
  function a() {
    t.set(this, !0);
  }
  function o() {
    t.set(this, !0), n.set(this, !0);
  }
  function l(j, A, Z) {
    const ce = j[A];
    return j[A] = function() {
      return Z.apply(j, arguments), ce.apply(j, arguments);
    }, j;
  }
  function d(j, A) {
    j[A] = Event.prototype[A];
  }
  const m = /* @__PURE__ */ new WeakMap(), b = Object.getOwnPropertyDescriptor(Event.prototype, "currentTarget");
  function y() {
    var j;
    return (j = m.get(this)) !== null && j !== void 0 ? j : null;
  }
  function w(j, A) {
    b !== void 0 && Object.defineProperty(j, "currentTarget", {
      configurable: !0,
      enumerable: !0,
      get: A ?? b.get
    });
  }
  const $ = {
    bubble: {},
    capture: {}
  }, W = {};
  function x() {
    const j = function(A) {
      const { type: Z, eventPhase: ce, bubbles: F } = A, V = ri(A);
      if (ce === 2)
        return;
      const re = ce === 1 ? "capture" : "bubble";
      let le = V;
      const fe = [];
      for (; le === null && (le = window), fe.push(le), le !== window; )
        le = le.parentNode || null;
      const ge = $.capture[Z], se = $.bubble[Z];
      if (l(A, "stopPropagation", a), l(A, "stopImmediatePropagation", o), w(A, y), re === "capture") {
        if (ge === void 0)
          return;
        for (let he = fe.length - 1; he >= 0 && !t.has(A); --he) {
          const Ae = fe[he], Le = ge.get(Ae);
          if (Le !== void 0) {
            m.set(A, Ae);
            for (const $e of Le) {
              if (n.has(A))
                break;
              $e(A);
            }
          }
          if (he === 0 && !F && se !== void 0) {
            const $e = se.get(Ae);
            if ($e !== void 0)
              for (const it of $e) {
                if (n.has(A))
                  break;
                it(A);
              }
          }
        }
      } else if (re === "bubble") {
        if (se === void 0)
          return;
        for (let he = 0; he < fe.length && !t.has(A); ++he) {
          const Ae = fe[he], Le = se.get(Ae);
          if (Le !== void 0) {
            m.set(A, Ae);
            for (const $e of Le) {
              if (n.has(A))
                break;
              $e(A);
            }
          }
        }
      }
      d(A, "stopPropagation"), d(A, "stopImmediatePropagation"), w(A);
    };
    return j.displayName = "evtdUnifiedHandler", j;
  }
  function E() {
    const j = function(A) {
      const { type: Z, eventPhase: ce } = A;
      if (ce !== 2)
        return;
      const F = W[Z];
      F !== void 0 && F.forEach((V) => V(A));
    };
    return j.displayName = "evtdUnifiedWindowEventHandler", j;
  }
  const _ = x(), N = E();
  function O(j, A) {
    const Z = $[j];
    return Z[A] === void 0 && (Z[A] = /* @__PURE__ */ new Map(), window.addEventListener(A, _, j === "capture")), Z[A];
  }
  function T(j) {
    return W[j] === void 0 && (W[j] = /* @__PURE__ */ new Set(), window.addEventListener(j, N)), W[j];
  }
  function q(j, A) {
    let Z = j.get(A);
    return Z === void 0 && j.set(A, Z = /* @__PURE__ */ new Set()), Z;
  }
  function Q(j, A, Z, ce) {
    const F = $[A][Z];
    if (F !== void 0) {
      const V = F.get(j);
      if (V !== void 0 && V.has(ce))
        return !0;
    }
    return !1;
  }
  function ae(j, A) {
    const Z = W[j];
    return !!(Z !== void 0 && Z.has(A));
  }
  function oe(j, A, Z, ce) {
    let F;
    if (typeof ce == "object" && ce.once === !0 ? F = (ge) => {
      Pe(j, A, F, ce), Z(ge);
    } : F = Z, QP(j, A, F, ce))
      return;
    const re = ce === !0 || typeof ce == "object" && ce.capture === !0 ? "capture" : "bubble", le = O(re, j), fe = q(le, A);
    if (fe.has(F) || fe.add(F), A === window) {
      const ge = T(j);
      ge.has(F) || ge.add(F);
    }
  }
  function Pe(j, A, Z, ce) {
    if (e0(j, A, Z, ce))
      return;
    const V = ce === !0 || typeof ce == "object" && ce.capture === !0, re = V ? "capture" : "bubble", le = O(re, j), fe = q(le, A);
    if (A === window && !Q(A, V ? "bubble" : "capture", j, Z) && ae(j, Z)) {
      const se = W[j];
      se.delete(Z), se.size === 0 && (window.removeEventListener(j, N), W[j] = void 0);
    }
    fe.has(Z) && fe.delete(Z), fe.size === 0 && le.delete(A), le.size === 0 && (window.removeEventListener(j, _, re === "capture"), $[re][j] = void 0);
  }
  return {
    on: oe,
    off: Pe
  };
}
const { on: _t, off: at } = t0(), r0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  off: at,
  on: _t
}, Symbol.toStringTag, { value: "Module" })), Ln = De(null);
function qc(t) {
  if (t.clientX > 0 || t.clientY > 0)
    Ln.value = {
      x: t.clientX,
      y: t.clientY
    };
  else {
    const { target: n } = t;
    if (n instanceof Element) {
      const { left: a, top: o, width: l, height: d } = n.getBoundingClientRect();
      a > 0 || o > 0 ? Ln.value = {
        x: a + l / 2,
        y: o + d / 2
      } : Ln.value = { x: 0, y: 0 };
    } else
      Ln.value = null;
  }
}
let Va = 0, Xc = !0;
function n0() {
  if (!Un)
    return Wt(De(null));
  Va === 0 && _t("click", document, qc, !0);
  const t = () => {
    Va += 1;
  };
  return Xc && (Xc = ci()) ? (di(t), Rt(() => {
    Va -= 1, Va === 0 && at("click", document, qc, !0);
  })) : t(), Wt(Ln);
}
const a0 = De(void 0);
let qa = 0;
function Kc() {
  a0.value = Date.now();
}
let Gc = !0;
function i0(t) {
  if (!Un)
    return Wt(De(!1));
  const n = De(!1);
  let a = null;
  function o() {
    a !== null && window.clearTimeout(a);
  }
  function l() {
    o(), n.value = !0, a = window.setTimeout(() => {
      n.value = !1;
    }, t);
  }
  qa === 0 && _t("click", window, Kc, !0);
  const d = () => {
    qa += 1, _t("click", window, l, !0);
  };
  return Gc && (Gc = ci()) ? (di(d), Rt(() => {
    qa -= 1, qa === 0 && at("click", window, Kc, !0), at("click", window, l, !0), o();
  })) : d(), Wt(n);
}
let Xa = 0;
const o0 = typeof window < "u" && window.matchMedia !== void 0, hr = De(null);
let Dt, Er;
function ii(t) {
  t.matches && (hr.value = "dark");
}
function oi(t) {
  t.matches && (hr.value = "light");
}
function l0() {
  Dt = window.matchMedia("(prefers-color-scheme: dark)"), Er = window.matchMedia("(prefers-color-scheme: light)"), Dt.matches ? hr.value = "dark" : Er.matches ? hr.value = "light" : hr.value = null, Dt.addEventListener ? (Dt.addEventListener("change", ii), Er.addEventListener("change", oi)) : Dt.addListener && (Dt.addListener(ii), Er.addListener(oi));
}
function u0() {
  "removeEventListener" in Dt ? (Dt.removeEventListener("change", ii), Er.removeEventListener("change", oi)) : "removeListener" in Dt && (Dt.removeListener(ii), Er.removeListener(oi)), Dt = void 0, Er = void 0;
}
let Uc = !0;
function s0() {
  return process.env.NODE_ENV !== "test" && !o0 ? Wt(hr) : process.env.NODE_ENV === "test" && window.matchMedia === void 0 ? Wt(hr) : (Xa === 0 && l0(), Uc && (Uc = ci()) && (di(() => {
    Xa += 1;
  }), Rt(() => {
    Xa -= 1, Xa === 0 && u0();
  })), Wt(hr));
}
function d0(t, n) {
  return er(t, (a) => {
    a !== void 0 && (n.value = a);
  }), nt(() => t.value === void 0 ? n.value : t.value);
}
function om() {
  const t = De(!1);
  return Hr(() => {
    t.value = !0;
  }), Wt(t);
}
function c0(t, n) {
  return nt(() => {
    for (const a of n)
      if (t[a] !== void 0)
        return t[a];
    return t[n[n.length - 1]];
  });
}
const lm = (typeof window > "u" ? !1 : /iPad|iPhone|iPod/.test(navigator.platform) || navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1) && // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
!window.MSStream;
function f0() {
  return lm;
}
const m0 = {
  // mobile
  // 0 ~ 640 doesn't mean it should display well in all the range,
  // but means you should treat it like a mobile phone.)
  xs: 0,
  s: 640,
  m: 1024,
  l: 1280,
  xl: 1536,
  "2xl": 1920
  // normal desktop display
};
function h0(t) {
  return `(min-width: ${t}px)`;
}
const Fn = {};
function Al(t = m0) {
  if (!Un)
    return nt(() => []);
  if (typeof window.matchMedia != "function")
    return nt(() => []);
  const n = De({}), a = Object.keys(t), o = (l, d) => {
    l.matches ? n.value[d] = !0 : n.value[d] = !1;
  };
  return a.forEach((l) => {
    const d = t[l];
    let m, b;
    Fn[d] === void 0 ? (m = window.matchMedia(h0(d)), m.addEventListener ? m.addEventListener("change", (y) => {
      b.forEach((w) => {
        w(y, l);
      });
    }) : m.addListener && m.addListener((y) => {
      b.forEach((w) => {
        w(y, l);
      });
    }), b = /* @__PURE__ */ new Set(), Fn[d] = {
      mql: m,
      cbs: b
    }) : (m = Fn[d].mql, b = Fn[d].cbs), b.add(o), m.matches && b.forEach((y) => {
      y(m, l);
    });
  }), Rt(() => {
    a.forEach((l) => {
      const { cbs: d } = Fn[t[l]];
      d.has(o) && d.delete(o);
    });
  }), nt(() => {
    const { value: l } = n;
    return a.filter((d) => l[d]);
  });
}
function v0(t) {
  if (!Un)
    return nt(() => {
    });
  const n = t !== void 0 ? Al(t) : Al();
  return nt(() => {
    const { value: a } = n;
    if (a.length !== 0)
      return a[a.length - 1];
  });
}
function p0(t = {}, n) {
  const a = LP({
    ctrl: !1,
    command: !1,
    win: !1,
    shift: !1,
    tab: !1
  }), { keydown: o, keyup: l } = t, d = (y) => {
    switch (y.key) {
      case "Control":
        a.ctrl = !0;
        break;
      case "Meta":
        a.command = !0, a.win = !0;
        break;
      case "Shift":
        a.shift = !0;
        break;
      case "Tab":
        a.tab = !0;
        break;
    }
    o !== void 0 && Object.keys(o).forEach((w) => {
      if (w !== y.key)
        return;
      const $ = o[w];
      if (typeof $ == "function")
        $(y);
      else {
        const { stop: W = !1, prevent: x = !1 } = $;
        W && y.stopPropagation(), x && y.preventDefault(), $.handler(y);
      }
    });
  }, m = (y) => {
    switch (y.key) {
      case "Control":
        a.ctrl = !1;
        break;
      case "Meta":
        a.command = !1, a.win = !1;
        break;
      case "Shift":
        a.shift = !1;
        break;
      case "Tab":
        a.tab = !1;
        break;
    }
    l !== void 0 && Object.keys(l).forEach((w) => {
      if (w !== y.key)
        return;
      const $ = l[w];
      if (typeof $ == "function")
        $(y);
      else {
        const { stop: W = !1, prevent: x = !1 } = $;
        W && y.stopPropagation(), x && y.preventDefault(), $.handler(y);
      }
    });
  }, b = () => {
    (n === void 0 || n.value) && (_t("keydown", document, d), _t("keyup", document, m)), n !== void 0 && er(n, (y) => {
      y ? (_t("keydown", document, d), _t("keyup", document, m)) : (at("keydown", document, d), at("keyup", document, m));
    });
  };
  return ci() ? (di(b), Rt(() => {
    (n === void 0 || n.value) && (at("keydown", document, d), at("keyup", document, m));
  })) : b(), Wt(a);
}
const g0 = typeof window > "u" ? !1 : lm || window.safari !== void 0;
function y0() {
  return g0;
}
const b0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  onFontsReady: am,
  useBreakpoint: v0,
  useBreakpoints: Al,
  useClickPosition: n0,
  useClicked: i0,
  useCompitable: c0,
  useFalseUntilTruthy: nm,
  useIsIos: f0,
  useIsMounted: om,
  useIsSafari: y0,
  useKeyboard: p0,
  useMemo: ai,
  useMergedState: d0,
  useOsTheme: s0
}, Symbol.toStringTag, { value: "Module" })), w0 = /* @__PURE__ */ be(b0);
let li = [];
const um = /* @__PURE__ */ new WeakMap();
function P0() {
  li.forEach((t) => t(...um.get(t))), li = [];
}
function Ql(t, ...n) {
  um.set(t, n), !li.includes(t) && li.push(t) === 1 && requestAnimationFrame(P0);
}
let Fl = [], Il = [];
function M0() {
  Fl.forEach((t, n) => t(...Il[n])), Fl = [], Il = [];
}
function _0(t, ...n) {
  Fl.push(t) === 1 && requestAnimationFrame(M0), Il.push(n);
}
function $0(t) {
  return t.nodeType === 9 ? null : t.parentNode;
}
function sm(t) {
  if (t === null)
    return null;
  const n = $0(t);
  if (n === null)
    return null;
  if (n.nodeType === 9)
    return document.documentElement;
  if (n.nodeType === 1) {
    const { overflow: a, overflowX: o, overflowY: l } = getComputedStyle(n);
    if (/(auto|scroll|overlay)/.test(a + l + o))
      return n;
  }
  return sm(n);
}
function T0(t) {
  return typeof t == "string" ? document.querySelector(t) : typeof t == "function" ? t() : t;
}
function k0(t, n) {
  let { target: a } = t;
  for (; a; ) {
    if (a.dataset && a.dataset[n] !== void 0)
      return !0;
    a = a.parentElement;
  }
  return !1;
}
function dm(t) {
  return t.composedPath()[0] || null;
}
function cm(t) {
  if (typeof t == "number")
    return {
      "": t.toString()
    };
  const n = {};
  return t.split(/ +/).forEach((a) => {
    if (a === "")
      return;
    const [o, l] = a.split(":");
    l === void 0 ? n[""] = o : n[o] = l;
  }), n;
}
function S0(t, n) {
  var a;
  if (t == null)
    return;
  const o = cm(t);
  if (n === void 0)
    return o[""];
  if (typeof n == "string")
    return (a = o[n]) !== null && a !== void 0 ? a : o[""];
  if (Array.isArray(n)) {
    for (let l = n.length - 1; l >= 0; --l) {
      const d = n[l];
      if (d in o)
        return o[d];
    }
    return o[""];
  } else {
    let l, d = -1;
    return Object.keys(o).forEach((m) => {
      const b = Number(m);
      !Number.isNaN(b) && n >= b && b >= d && (d = b, l = o[m]);
    }), l;
  }
}
function Nl(t) {
  return typeof t == "string" ? t.endsWith("px") ? Number(t.slice(0, t.length - 2)) : Number(t) : t;
}
function Bn(t) {
  if (t != null)
    return typeof t == "number" ? `${t}px` : t.endsWith("px") ? t : `${t}px`;
}
function Yc(t, n) {
  const a = t.trim().split(/\s+/g), o = {
    top: a[0]
  };
  switch (a.length) {
    case 1:
      o.right = a[0], o.bottom = a[0], o.left = a[0];
      break;
    case 2:
      o.right = a[1], o.left = a[1], o.bottom = a[0];
      break;
    case 3:
      o.right = a[1], o.bottom = a[2], o.left = a[1];
      break;
    case 4:
      o.right = a[1], o.bottom = a[2], o.left = a[3];
      break;
    default:
      throw new Error("[seemly/getMargin]:" + t + " is not a valid value.");
  }
  return n === void 0 ? o : o[n];
}
function C0(t, n) {
  const [a, o] = t.split(" ");
  return n ? n === "row" ? a : o : {
    row: a,
    col: o || a
  };
}
const Zc = {
  black: "#000",
  silver: "#C0C0C0",
  gray: "#808080",
  white: "#FFF",
  maroon: "#800000",
  red: "#F00",
  purple: "#800080",
  fuchsia: "#F0F",
  green: "#008000",
  lime: "#0F0",
  olive: "#808000",
  yellow: "#FF0",
  navy: "#000080",
  blue: "#00F",
  teal: "#008080",
  aqua: "#0FF",
  transparent: "#0000"
};
function D0(t, n, a) {
  n /= 100, a /= 100;
  const o = n * Math.min(a, 1 - a) + a;
  return [t, o ? (2 - 2 * a / o) * 100 : 0, o * 100];
}
function W0(t, n, a) {
  n /= 100, a /= 100;
  const o = a - a * n / 2, l = Math.min(o, 1 - o);
  return [t, l ? (a - o) / l * 100 : 0, o * 100];
}
function x0(t, n, a) {
  n /= 100, a /= 100;
  let o = (l, d = (l + t / 60) % 6) => a - a * n * Math.max(Math.min(d, 4 - d, 1), 0);
  return [o(5) * 255, o(3) * 255, o(1) * 255];
}
function O0(t, n, a) {
  t /= 255, n /= 255, a /= 255;
  let o = Math.max(t, n, a), l = o - Math.min(t, n, a), d = l && (o == t ? (n - a) / l : o == n ? 2 + (a - t) / l : 4 + (t - n) / l);
  return [60 * (d < 0 ? d + 6 : d), o && l / o * 100, o * 100];
}
function z0(t, n, a) {
  t /= 255, n /= 255, a /= 255;
  let o = Math.max(t, n, a), l = o - Math.min(t, n, a), d = 1 - Math.abs(o + o - l - 1), m = l && (o == t ? (n - a) / l : o == n ? 2 + (a - t) / l : 4 + (t - n) / l);
  return [60 * (m < 0 ? m + 6 : m), d ? l / d * 100 : 0, (o + o - l) * 50];
}
function E0(t, n, a) {
  n /= 100, a /= 100;
  let o = n * Math.min(a, 1 - a), l = (d, m = (d + t / 30) % 12) => a - o * Math.max(Math.min(m - 3, 9 - m, 1), -1);
  return [l(0) * 255, l(8) * 255, l(4) * 255];
}
const Lt = "^\\s*", Bt = "\\s*$", gr = "\\s*((\\.\\d+)|(\\d+(\\.\\d*)?))%\\s*", mt = "\\s*((\\.\\d+)|(\\d+(\\.\\d*)?))\\s*", jr = "([0-9A-Fa-f])", Ar = "([0-9A-Fa-f]{2})", j0 = new RegExp(`${Lt}hsl\\s*\\(${mt},${gr},${gr}\\)${Bt}`), A0 = new RegExp(`${Lt}hsv\\s*\\(${mt},${gr},${gr}\\)${Bt}`), F0 = new RegExp(`${Lt}hsla\\s*\\(${mt},${gr},${gr},${mt}\\)${Bt}`), I0 = new RegExp(`${Lt}hsva\\s*\\(${mt},${gr},${gr},${mt}\\)${Bt}`), N0 = new RegExp(`${Lt}rgb\\s*\\(${mt},${mt},${mt}\\)${Bt}`), H0 = new RegExp(`${Lt}rgba\\s*\\(${mt},${mt},${mt},${mt}\\)${Bt}`), eu = new RegExp(`${Lt}#${jr}${jr}${jr}${Bt}`), tu = new RegExp(`${Lt}#${Ar}${Ar}${Ar}${Bt}`), ru = new RegExp(`${Lt}#${jr}${jr}${jr}${jr}${Bt}`), nu = new RegExp(`${Lt}#${Ar}${Ar}${Ar}${Ar}${Bt}`);
function rt(t) {
  return parseInt(t, 16);
}
function R0(t) {
  try {
    let n;
    if (n = F0.exec(t))
      return [
        xt(n[1]),
        Ee(n[5]),
        Ee(n[9]),
        Nt(n[13])
      ];
    if (n = j0.exec(t))
      return [xt(n[1]), Ee(n[5]), Ee(n[9]), 1];
    throw new Error(`[seemly/hsla]: Invalid color value ${t}.`);
  } catch (n) {
    throw n;
  }
}
function L0(t) {
  try {
    let n;
    if (n = I0.exec(t))
      return [
        xt(n[1]),
        Ee(n[5]),
        Ee(n[9]),
        Nt(n[13])
      ];
    if (n = A0.exec(t))
      return [xt(n[1]), Ee(n[5]), Ee(n[9]), 1];
    throw new Error(`[seemly/hsva]: Invalid color value ${t}.`);
  } catch (n) {
    throw n;
  }
}
function yr(t) {
  try {
    let n;
    if (n = tu.exec(t))
      return [rt(n[1]), rt(n[2]), rt(n[3]), 1];
    if (n = N0.exec(t))
      return [Ce(n[1]), Ce(n[5]), Ce(n[9]), 1];
    if (n = H0.exec(t))
      return [
        Ce(n[1]),
        Ce(n[5]),
        Ce(n[9]),
        Nt(n[13])
      ];
    if (n = eu.exec(t))
      return [
        rt(n[1] + n[1]),
        rt(n[2] + n[2]),
        rt(n[3] + n[3]),
        1
      ];
    if (n = nu.exec(t))
      return [
        rt(n[1]),
        rt(n[2]),
        rt(n[3]),
        Nt(rt(n[4]) / 255)
      ];
    if (n = ru.exec(t))
      return [
        rt(n[1] + n[1]),
        rt(n[2] + n[2]),
        rt(n[3] + n[3]),
        Nt(rt(n[4] + n[4]) / 255)
      ];
    if (t in Zc)
      return yr(Zc[t]);
    throw new Error(`[seemly/rgba]: Invalid color value ${t}.`);
  } catch (n) {
    throw n;
  }
}
function B0(t) {
  return t > 1 ? 1 : t < 0 ? 0 : t;
}
function V0(t, n, a) {
  return `rgb(${Ce(t)}, ${Ce(n)}, ${Ce(a)})`;
}
function Hl(t, n, a, o) {
  return `rgba(${Ce(t)}, ${Ce(n)}, ${Ce(a)}, ${B0(o)})`;
}
function gl(t, n, a, o, l) {
  return Ce((t * n * (1 - o) + a * o) / l);
}
function q0(t, n) {
  Array.isArray(t) || (t = yr(t)), Array.isArray(n) || (n = yr(n));
  const a = t[3], o = n[3], l = Nt(a + o - a * o);
  return Hl(gl(t[0], a, n[0], o, l), gl(t[1], a, n[1], o, l), gl(t[2], a, n[2], o, l), l);
}
function X0(t, n) {
  const [a, o, l, d = 1] = Array.isArray(t) ? t : yr(t);
  return n.alpha ? Hl(a, o, l, n.alpha) : Hl(a, o, l, d);
}
function K0(t, n) {
  const [a, o, l, d = 1] = Array.isArray(t) ? t : yr(t), { lightness: m = 1, alpha: b = 1 } = n;
  return mm([a * m, o * m, l * m, d * b]);
}
function fm(t) {
  var n;
  return (n = (Array.isArray(t) ? t : yr(t))[3]) !== null && n !== void 0 ? n : 1;
}
function G0(t) {
  return `${fm(t)}`;
}
function Nt(t) {
  const n = Math.round(Number(t) * 100) / 100;
  return n > 1 ? 1 : n < 0 ? 0 : n;
}
function xt(t) {
  const n = Math.round(Number(t));
  return n >= 360 || n < 0 ? 0 : n;
}
function Ce(t) {
  const n = Math.round(Number(t));
  return n > 255 ? 255 : n < 0 ? 0 : n;
}
function Ee(t) {
  const n = Math.round(Number(t));
  return n > 100 ? 100 : n < 0 ? 0 : n;
}
function U0(t) {
  const [n, a, o] = Array.isArray(t) ? t : yr(t);
  return V0(n, a, o);
}
function mm(t) {
  const [n, a, o] = t;
  return 3 in t ? `rgba(${Ce(n)}, ${Ce(a)}, ${Ce(o)}, ${Nt(t[3])})` : `rgba(${Ce(n)}, ${Ce(a)}, ${Ce(o)}, 1)`;
}
function Y0(t) {
  return `hsv(${xt(t[0])}, ${Ee(t[1])}%, ${Ee(t[2])}%)`;
}
function Z0(t) {
  const [n, a, o] = t;
  return 3 in t ? `hsva(${xt(n)}, ${Ee(a)}%, ${Ee(o)}%, ${Nt(t[3])})` : `hsva(${xt(n)}, ${Ee(a)}%, ${Ee(o)}%, 1)`;
}
function J0(t) {
  return `hsl(${xt(t[0])}, ${Ee(t[1])}%, ${Ee(t[2])}%)`;
}
function Q0(t) {
  const [n, a, o] = t;
  return 3 in t ? `hsla(${xt(n)}, ${Ee(a)}%, ${Ee(o)}%, ${Nt(t[3])})` : `hsla(${xt(n)}, ${Ee(a)}%, ${Ee(o)}%, 1)`;
}
function e1(t) {
  if (typeof t == "string") {
    let o;
    if (o = tu.exec(t))
      return `${o[0]}FF`;
    if (o = nu.exec(t))
      return o[0];
    if (o = eu.exec(t))
      return `#${o[1]}${o[1]}${o[2]}${o[2]}${o[3]}${o[3]}FF`;
    if (o = ru.exec(t))
      return `#${o[1]}${o[1]}${o[2]}${o[2]}${o[3]}${o[3]}${o[4]}${o[4]}`;
    throw new Error(`[seemly/toHexString]: Invalid hex value ${t}.`);
  }
  const n = `#${t.slice(0, 3).map((o) => Ce(o).toString(16).toUpperCase().padStart(2, "0")).join("")}`, a = t.length === 3 ? "FF" : Ce(t[3] * 255).toString(16).padStart(2, "0").toUpperCase();
  return n + a;
}
function t1(t) {
  if (typeof t == "string") {
    let n;
    if (n = tu.exec(t))
      return n[0];
    if (n = nu.exec(t))
      return n[0].slice(0, 7);
    if (n = eu.exec(t) || ru.exec(t))
      return `#${n[1]}${n[1]}${n[2]}${n[2]}${n[3]}${n[3]}`;
    throw new Error(`[seemly/toHexString]: Invalid hex value ${t}.`);
  }
  return `#${t.slice(0, 3).map((n) => Ce(n).toString(16).toUpperCase().padStart(2, "0")).join("")}`;
}
function hm(t = 8) {
  return Math.random().toString(16).slice(2, 2 + t);
}
function r1(t, n) {
  const a = [];
  for (let o = 0; o < t; ++o)
    a.push(n);
  return a;
}
function n1(t, n) {
  const a = [];
  if (!n) {
    for (let o = 0; o < t; ++o)
      a.push(o);
    return a;
  }
  for (let o = 0; o < t; ++o)
    a.push(n(o));
  return a;
}
async function a1(t) {
  return new Promise((n) => {
    setTimeout(n, t);
  });
}
const i1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  beforeNextFrame: _0,
  beforeNextFrameOnce: Ql,
  changeColor: X0,
  composite: q0,
  createId: hm,
  depx: Nl,
  getAlpha: fm,
  getAlphaString: G0,
  getGap: C0,
  getMargin: Yc,
  getPadding: Yc,
  getPreciseEventTarget: dm,
  getScrollParent: sm,
  happensIn: k0,
  hsl2hsv: D0,
  hsl2rgb: E0,
  hsla: R0,
  hsv2hsl: W0,
  hsv2rgb: x0,
  hsva: L0,
  indexMap: n1,
  parseResponsiveProp: cm,
  parseResponsivePropValue: S0,
  pxfy: Bn,
  repeat: r1,
  rgb2hsl: z0,
  rgb2hsv: O0,
  rgba: yr,
  roundAlpha: Nt,
  roundChannel: Ce,
  roundDeg: xt,
  roundPercent: Ee,
  scaleColor: K0,
  sleep: a1,
  toHexString: t1,
  toHexaString: e1,
  toHslString: J0,
  toHslaString: Q0,
  toHsvString: Y0,
  toHsvaString: Z0,
  toRgbString: U0,
  toRgbaString: mm,
  unwrapElement: T0
}, Symbol.toStringTag, { value: "Module" })), vm = /* @__PURE__ */ be(i1);
function Rl(t, n, a = "default") {
  const o = n[a];
  if (o === void 0)
    throw new Error(`[vueuc/${t}]: slot[${a}] is empty.`);
  return o();
}
function Ll(t, n = !0, a = []) {
  return t.forEach((o) => {
    if (o !== null) {
      if (typeof o != "object") {
        (typeof o == "string" || typeof o == "number") && a.push(BP(String(o)));
        return;
      }
      if (Array.isArray(o)) {
        Ll(o, n, a);
        return;
      }
      if (o.type === Qf) {
        if (o.children === null)
          return;
        Array.isArray(o.children) && Ll(o.children, n, a);
      } else
        o.type !== VP && a.push(o);
    }
  }), a;
}
function Jc(t, n, a = "default") {
  const o = n[a];
  if (o === void 0)
    throw new Error(`[vueuc/${t}]: slot[${a}] is empty.`);
  const l = Ll(o());
  if (l.length === 1)
    return l[0];
  throw new Error(`[vueuc/${t}]: slot[${a}] should have exactly one child.`);
}
let mr = null;
function pm() {
  if (mr === null && (mr = document.getElementById("v-binder-view-measurer"), mr === null)) {
    mr = document.createElement("div"), mr.id = "v-binder-view-measurer";
    const { style: t } = mr;
    t.position = "fixed", t.left = "0", t.right = "0", t.top = "0", t.bottom = "0", t.pointerEvents = "none", t.visibility = "hidden", document.body.appendChild(mr);
  }
  return mr.getBoundingClientRect();
}
function o1(t, n) {
  const a = pm();
  return {
    top: n,
    left: t,
    height: 0,
    width: 0,
    right: a.width - t,
    bottom: a.height - n
  };
}
function yl(t) {
  const n = t.getBoundingClientRect(), a = pm();
  return {
    left: n.left - a.left,
    top: n.top - a.top,
    bottom: a.height + a.top - n.bottom,
    right: a.width + a.left - n.right,
    width: n.width,
    height: n.height
  };
}
function l1(t) {
  return t.nodeType === 9 ? null : t.parentNode;
}
function gm(t) {
  if (t === null)
    return null;
  const n = l1(t);
  if (n === null)
    return null;
  if (n.nodeType === 9)
    return document;
  if (n.nodeType === 1) {
    const { overflow: a, overflowX: o, overflowY: l } = getComputedStyle(n);
    if (/(auto|scroll|overlay)/.test(a + l + o))
      return n;
  }
  return gm(n);
}
const u1 = tr({
  name: "Binder",
  props: {
    syncTargetWithParent: Boolean,
    syncTarget: {
      type: Boolean,
      default: !0
    }
  },
  setup(t) {
    var n;
    qP("VBinder", (n = Jl()) === null || n === void 0 ? void 0 : n.proxy);
    const a = Gn("VBinder", null), o = De(null), l = (T) => {
      o.value = T, a && t.syncTargetWithParent && a.setTargetRef(T);
    };
    let d = [];
    const m = () => {
      let T = o.value;
      for (; T = gm(T), T !== null; )
        d.push(T);
      for (const q of d)
        _t("scroll", q, W, !0);
    }, b = () => {
      for (const T of d)
        at("scroll", T, W, !0);
      d = [];
    }, y = /* @__PURE__ */ new Set(), w = (T) => {
      y.size === 0 && m(), y.has(T) || y.add(T);
    }, $ = (T) => {
      y.has(T) && y.delete(T), y.size === 0 && b();
    }, W = () => {
      Ql(x);
    }, x = () => {
      y.forEach((T) => T());
    }, E = /* @__PURE__ */ new Set(), _ = (T) => {
      E.size === 0 && _t("resize", window, O), E.has(T) || E.add(T);
    }, N = (T) => {
      E.has(T) && E.delete(T), E.size === 0 && at("resize", window, O);
    }, O = () => {
      E.forEach((T) => T());
    };
    return Rt(() => {
      at("resize", window, O), b();
    }), {
      targetRef: o,
      setTargetRef: l,
      addScrollListener: w,
      removeScrollListener: $,
      addResizeListener: _,
      removeResizeListener: N
    };
  },
  render() {
    return Rl("binder", this.$slots);
  }
}), Qc = u1, ef = tr({
  name: "Target",
  setup() {
    const { setTargetRef: t, syncTarget: n } = Gn("VBinder");
    return {
      syncTarget: n,
      setTargetDirective: {
        mounted: t,
        updated: t
      }
    };
  },
  render() {
    const { syncTarget: t, setTargetDirective: n } = this;
    return t ? em(Jc("follower", this.$slots), [
      [n]
    ]) : Jc("follower", this.$slots);
  }
});
function s1(t, n) {
  console.error(`[vdirs/${t}]: ${n}`);
}
class d1 {
  constructor() {
    this.elementZIndex = /* @__PURE__ */ new Map(), this.nextZIndex = 2e3;
  }
  get elementCount() {
    return this.elementZIndex.size;
  }
  ensureZIndex(n, a) {
    const { elementZIndex: o } = this;
    if (a !== void 0) {
      n.style.zIndex = `${a}`, o.delete(n);
      return;
    }
    const { nextZIndex: l } = this;
    o.has(n) && o.get(n) + 1 === this.nextZIndex || (n.style.zIndex = `${l}`, o.set(n, l), this.nextZIndex = l + 1, this.squashState());
  }
  unregister(n, a) {
    const { elementZIndex: o } = this;
    o.has(n) ? o.delete(n) : a === void 0 && s1("z-index-manager/unregister-element", "Element not found when unregistering."), this.squashState();
  }
  squashState() {
    const { elementCount: n } = this;
    n || (this.nextZIndex = 2e3), this.nextZIndex - n > 2500 && this.rearrange();
  }
  rearrange() {
    const n = Array.from(this.elementZIndex.entries());
    n.sort((a, o) => a[1] - o[1]), this.nextZIndex = 2e3, n.forEach((a) => {
      const o = a[0], l = this.nextZIndex++;
      `${l}` !== o.style.zIndex && (o.style.zIndex = `${l}`);
    });
  }
}
const bl = new d1(), on = "@@ziContext", c1 = {
  mounted(t, n) {
    const { value: a = {} } = n, { zIndex: o, enabled: l } = a;
    t[on] = {
      enabled: !!l,
      initialized: !1
    }, l && (bl.ensureZIndex(t, o), t[on].initialized = !0);
  },
  updated(t, n) {
    const { value: a = {} } = n, { zIndex: o, enabled: l } = a, d = t[on].enabled;
    l && !d && (bl.ensureZIndex(t, o), t[on].initialized = !0), t[on].enabled = !!l;
  },
  unmounted(t, n) {
    if (!t[on].initialized)
      return;
    const { value: a = {} } = n, { zIndex: o } = a;
    bl.unregister(t, o);
  }
}, f1 = c1, au = Symbol("@css-render/vue3-ssr");
function m1(t, n) {
  return `<style cssr-id="${t}">
${n}
</style>`;
}
function h1(t, n) {
  const a = Gn(au, null);
  if (a === null) {
    console.error("[css-render/vue3-ssr]: no ssr context found.");
    return;
  }
  const { styles: o, ids: l } = a;
  l.has(t) || o !== null && (l.add(t), o.push(m1(t, n)));
}
const v1 = typeof document < "u";
function Yn() {
  if (v1)
    return;
  const t = Gn(au, null);
  if (t !== null)
    return {
      adapter: h1,
      context: t
    };
}
function p1(t) {
  const n = [], a = {
    styles: n,
    ids: /* @__PURE__ */ new Set()
  };
  return t.provide(au, a), {
    collect() {
      const o = n.join(`
`);
      return n.length = 0, o;
    }
  };
}
const g1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  setup: p1,
  useSsrAdapter: Yn
}, Symbol.toStringTag, { value: "Module" }));
function tf(t, n) {
  console.error(`[vueuc/${t}]: ${n}`);
}
function y1(t) {
  let n = 0;
  for (let a = 0; a < t.length; ++a)
    t[a] === "&" && ++n;
  return n;
}
const ym = /\s*,(?![^(]*\))\s*/g, b1 = /\s+/g;
function w1(t, n) {
  const a = [];
  return n.split(ym).forEach((o) => {
    let l = y1(o);
    if (l) {
      if (l === 1) {
        t.forEach((m) => {
          a.push(o.replace("&", m));
        });
        return;
      }
    } else {
      t.forEach((m) => {
        a.push(
          // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
          (m && m + " ") + o
        );
      });
      return;
    }
    let d = [
      o
    ];
    for (; l--; ) {
      const m = [];
      d.forEach((b) => {
        t.forEach((y) => {
          m.push(b.replace("&", y));
        });
      }), d = m;
    }
    d.forEach((m) => a.push(m));
  }), a;
}
function P1(t, n) {
  const a = [];
  return n.split(ym).forEach((o) => {
    t.forEach((l) => {
      a.push((l && l + " ") + o);
    });
  }), a;
}
function M1(t) {
  let n = [""];
  return t.forEach((a) => {
    a = a && a.trim(), // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    a && (a.includes("&") ? n = w1(n, a) : n = P1(n, a));
  }), n.join(", ").replace(b1, " ");
}
function rf(t) {
  if (!t)
    return;
  const n = t.parentElement;
  n && n.removeChild(t);
}
function fi(t) {
  return document.querySelector(`style[cssr-id="${t}"]`);
}
function _1(t) {
  const n = document.createElement("style");
  return n.setAttribute("cssr-id", t), n;
}
function Ka(t) {
  return t ? /^\s*@(s|m)/.test(t) : !1;
}
const $1 = /[A-Z]/g;
function bm(t) {
  return t.replace($1, (n) => "-" + n.toLowerCase());
}
function T1(t, n = "  ") {
  return typeof t == "object" && t !== null ? ` {
` + Object.entries(t).map((a) => n + `  ${bm(a[0])}: ${a[1]};`).join(`
`) + `
` + n + "}" : `: ${t};`;
}
function k1(t, n, a) {
  return typeof t == "function" ? t({
    context: n.context,
    props: a
  }) : t;
}
function nf(t, n, a, o) {
  if (!n)
    return "";
  const l = k1(n, a, o);
  if (!l)
    return "";
  if (typeof l == "string")
    return `${t} {
${l}
}`;
  const d = Object.keys(l);
  if (d.length === 0)
    return a.config.keepEmptyBlock ? t + ` {
}` : "";
  const m = t ? [
    t + " {"
  ] : [];
  return d.forEach((b) => {
    const y = l[b];
    if (b === "raw") {
      m.push(`
` + y + `
`);
      return;
    }
    b = bm(b), y != null && m.push(`  ${b}${T1(y)}`);
  }), t && m.push("}"), m.join(`
`);
}
function Bl(t, n, a) {
  t && t.forEach((o) => {
    if (Array.isArray(o))
      Bl(o, n, a);
    else if (typeof o == "function") {
      const l = o(n);
      Array.isArray(l) ? Bl(l, n, a) : l && a(l);
    } else
      o && a(o);
  });
}
function wm(t, n, a, o, l, d) {
  const m = t.$;
  let b = "";
  if (!m || typeof m == "string")
    Ka(m) ? b = m : n.push(m);
  else if (typeof m == "function") {
    const $ = m({
      context: o.context,
      props: l
    });
    Ka($) ? b = $ : n.push($);
  } else if (m.before && m.before(o.context), !m.$ || typeof m.$ == "string")
    Ka(m.$) ? b = m.$ : n.push(m.$);
  else if (m.$) {
    const $ = m.$({
      context: o.context,
      props: l
    });
    Ka($) ? b = $ : n.push($);
  }
  const y = M1(n), w = nf(y, t.props, o, l);
  b ? (a.push(`${b} {`), d && w && d.insertRule(`${b} {
${w}
}
`)) : (d && w && d.insertRule(w), !d && w.length && a.push(w)), t.children && Bl(t.children, {
    context: o.context,
    props: l
  }, ($) => {
    if (typeof $ == "string") {
      const W = nf(y, { raw: $ }, o, l);
      d ? d.insertRule(W) : a.push(W);
    } else
      wm($, n, a, o, l, d);
  }), n.pop(), b && a.push("}"), m && m.after && m.after(o.context);
}
function Pm(t, n, a, o = !1) {
  const l = [];
  return wm(t, [], l, n, a, o ? t.instance.__styleSheet : void 0), o ? "" : l.join(`

`);
}
function Mm(t) {
  for (var n = 0, a, o = 0, l = t.length; l >= 4; ++o, l -= 4)
    a = t.charCodeAt(o) & 255 | (t.charCodeAt(++o) & 255) << 8 | (t.charCodeAt(++o) & 255) << 16 | (t.charCodeAt(++o) & 255) << 24, a = /* Math.imul(k, m): */
    (a & 65535) * 1540483477 + ((a >>> 16) * 59797 << 16), a ^= /* k >>> r: */
    a >>> 24, n = /* Math.imul(k, m): */
    (a & 65535) * 1540483477 + ((a >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16);
  switch (l) {
    case 3:
      n ^= (t.charCodeAt(o + 2) & 255) << 16;
    case 2:
      n ^= (t.charCodeAt(o + 1) & 255) << 8;
    case 1:
      n ^= t.charCodeAt(o) & 255, n = /* Math.imul(h, m): */
      (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16);
  }
  return n ^= n >>> 13, n = /* Math.imul(h, m): */
  (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16), ((n ^ n >>> 15) >>> 0).toString(36);
}
typeof window < "u" && (window.__cssrContext = {});
function S1(t, n, a) {
  const { els: o } = n;
  if (a === void 0)
    o.forEach(rf), n.els = [];
  else {
    const l = fi(a);
    l && o.includes(l) && (rf(l), n.els = o.filter((d) => d !== l));
  }
}
function af(t, n) {
  t.push(n);
}
function C1(t, n, a, o, l, d, m, b, y) {
  if (d && !y) {
    if (a === void 0) {
      console.error("[css-render/mount]: `id` is required in `silent` mode.");
      return;
    }
    const x = window.__cssrContext;
    x[a] || (x[a] = !0, Pm(n, t, o, d));
    return;
  }
  let w;
  if (a === void 0 && (w = n.render(o), a = Mm(w)), y) {
    y.adapter(a, w ?? n.render(o));
    return;
  }
  const $ = fi(a);
  if ($ !== null && !m)
    return $;
  const W = $ ?? _1(a);
  if (w === void 0 && (w = n.render(o)), W.textContent = w, $ !== null)
    return $;
  if (b) {
    const x = document.head.querySelector(`meta[name="${b}"]`);
    if (x)
      return document.head.insertBefore(W, x), af(n.els, W), W;
  }
  return l ? document.head.insertBefore(W, document.head.querySelector("style, link")) : document.head.appendChild(W), af(n.els, W), W;
}
function D1(t) {
  return Pm(this, this.instance, t);
}
function W1(t = {}) {
  const { id: n, ssr: a, props: o, head: l = !1, silent: d = !1, force: m = !1, anchorMetaName: b } = t;
  return C1(this.instance, this, n, o, l, d, m, b, a);
}
function x1(t = {}) {
  const { id: n } = t;
  S1(this.instance, this, n);
}
const Ga = function(t, n, a, o) {
  return {
    instance: t,
    $: n,
    props: a,
    children: o,
    els: [],
    render: D1,
    mount: W1,
    unmount: x1
  };
}, O1 = function(t, n, a, o) {
  return Array.isArray(n) ? Ga(t, { $: null }, null, n) : Array.isArray(a) ? Ga(t, n, null, a) : Array.isArray(o) ? Ga(t, n, a, o) : Ga(t, n, a, null);
};
function Vl(t = {}) {
  let n = null;
  const a = {
    c: (...o) => O1(a, ...o),
    use: (o, ...l) => o.install(a, ...l),
    find: fi,
    context: {},
    config: t,
    get __styleSheet() {
      if (!n) {
        const o = document.createElement("style");
        return document.head.appendChild(o), n = document.styleSheets[document.styleSheets.length - 1], n;
      }
      return n;
    }
  };
  return a;
}
function z1(t, n) {
  if (t === void 0)
    return !1;
  if (n) {
    const { context: { ids: a } } = n;
    return a.has(t);
  }
  return fi(t) !== null;
}
const E1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CssRender: Vl,
  default: Vl,
  exists: z1,
  hash: Mm
}, Symbol.toStringTag, { value: "Module" })), { c: Ft } = Vl(), mi = "vueuc-style";
function of(t) {
  return t & -t;
}
class j1 {
  /**
   * @param l length of the array
   * @param min min value of the array
   */
  constructor(n, a) {
    this.l = n, this.min = a;
    const o = new Array(n + 1);
    for (let l = 0; l < n + 1; ++l)
      o[l] = 0;
    this.ft = o;
  }
  /**
   * Add arr[i] by n, start from 0
   * @param i the index of the element to be added
   * @param n the value to be added
   */
  add(n, a) {
    if (a === 0)
      return;
    const { l: o, ft: l } = this;
    for (n += 1; n <= o; )
      l[n] += a, n += of(n);
  }
  /**
   * Get the value of index i
   * @param i index
   * @returns value of the index
   */
  get(n) {
    return this.sum(n + 1) - this.sum(n);
  }
  /**
   * Get the sum of first i elements
   * @param i count of head elements to be added
   * @returns the sum of first i elements
   */
  sum(n) {
    if (n === void 0 && (n = this.l), n <= 0)
      return 0;
    const { ft: a, min: o, l } = this;
    if (n > l)
      throw new Error("[FinweckTree.sum]: `i` is larger than length.");
    let d = n * o;
    for (; n > 0; )
      d += a[n], n -= of(n);
    return d;
  }
  /**
   * Get the largest count of head elements whose sum are <= threshold
   * @param threshold
   * @returns the largest count of head elements whose sum are <= threshold
   */
  getBound(n) {
    let a = 0, o = this.l;
    for (; o > a; ) {
      const l = Math.floor((a + o) / 2), d = this.sum(l);
      if (d > n) {
        o = l;
        continue;
      } else if (d < n) {
        if (a === l)
          return this.sum(a + 1) <= n ? a + 1 : l;
        a = l;
      } else
        return l;
    }
    return a;
  }
}
function lf(t) {
  return typeof t == "string" ? document.querySelector(t) : t();
}
const ql = tr({
  name: "LazyTeleport",
  props: {
    to: {
      type: [String, Object],
      default: void 0
    },
    disabled: Boolean,
    show: {
      type: Boolean,
      required: !0
    }
  },
  setup(t) {
    return {
      showTeleport: nm(ti(t, "show")),
      mergedTo: nt(() => {
        const { to: n } = t;
        return n ?? "body";
      })
    };
  },
  render() {
    return this.showTeleport ? this.disabled ? Rl("lazy-teleport", this.$slots) : Ze(XP, {
      disabled: this.disabled,
      to: this.mergedTo
    }, Rl("lazy-teleport", this.$slots)) : null;
  }
}), Ua = {
  top: "bottom",
  bottom: "top",
  left: "right",
  right: "left"
}, uf = {
  start: "end",
  center: "center",
  end: "start"
}, wl = {
  top: "height",
  bottom: "height",
  left: "width",
  right: "width"
}, A1 = {
  "bottom-start": "top left",
  bottom: "top center",
  "bottom-end": "top right",
  "top-start": "bottom left",
  top: "bottom center",
  "top-end": "bottom right",
  "right-start": "top left",
  right: "center left",
  "right-end": "bottom left",
  "left-start": "top right",
  left: "center right",
  "left-end": "bottom right"
}, F1 = {
  "bottom-start": "bottom left",
  bottom: "bottom center",
  "bottom-end": "bottom right",
  "top-start": "top left",
  top: "top center",
  "top-end": "top right",
  "right-start": "top right",
  right: "center right",
  "right-end": "bottom right",
  "left-start": "top left",
  left: "center left",
  "left-end": "bottom left"
}, I1 = {
  "bottom-start": "right",
  "bottom-end": "left",
  "top-start": "right",
  "top-end": "left",
  "right-start": "bottom",
  "right-end": "top",
  "left-start": "bottom",
  "left-end": "top"
}, sf = {
  top: !0,
  bottom: !1,
  left: !0,
  right: !1
  // left--
}, df = {
  top: "end",
  bottom: "start",
  left: "end",
  right: "start"
};
function N1(t, n, a, o, l, d) {
  if (!l || d)
    return { placement: t, top: 0, left: 0 };
  const [m, b] = t.split("-");
  let y = b ?? "center", w = {
    top: 0,
    left: 0
  };
  const $ = (E, _, N) => {
    let O = 0, T = 0;
    const q = a[E] - n[_] - n[E];
    return q > 0 && o && (N ? T = sf[_] ? q : -q : O = sf[_] ? q : -q), {
      left: O,
      top: T
    };
  }, W = m === "left" || m === "right";
  if (y !== "center") {
    const E = I1[t], _ = Ua[E], N = wl[E];
    if (a[N] > n[N]) {
      if (
        // current space is not enough
        // ----------[ target ]---------|
        // -------[     follower        ]
        n[E] + n[N] < a[N]
      ) {
        const O = (a[N] - n[N]) / 2;
        n[E] < O || n[_] < O ? n[E] < n[_] ? (y = uf[b], w = $(N, _, W)) : w = $(N, E, W) : y = "center";
      }
    } else
      a[N] < n[N] && n[_] < 0 && // opposite align has larger space
      // ------------[   target   ]
      // ----------------[follower]
      n[E] > n[_] && (y = uf[b]);
  } else {
    const E = m === "bottom" || m === "top" ? "left" : "top", _ = Ua[E], N = wl[E], O = (a[N] - n[N]) / 2;
    // center is not enough
    // ----------- [ target ]--|
    // -------[     follower     ]
    (n[E] < O || n[_] < O) && (n[E] > n[_] ? (y = df[E], w = $(N, E, W)) : (y = df[_], w = $(N, _, W)));
  }
  let x = m;
  return (
    // space is not enough
    n[m] < a[wl[m]] && // opposite position's space is larger
    n[m] < n[Ua[m]] && (x = Ua[m]), {
      placement: y !== "center" ? `${x}-${y}` : x,
      left: w.left,
      top: w.top
    }
  );
}
function H1(t, n) {
  return n ? F1[t] : A1[t];
}
function R1(t, n, a, o, l, d) {
  if (d)
    switch (t) {
      case "bottom-start":
        return {
          top: `${Math.round(a.top - n.top + a.height)}px`,
          left: `${Math.round(a.left - n.left)}px`,
          transform: "translateY(-100%)"
        };
      case "bottom-end":
        return {
          top: `${Math.round(a.top - n.top + a.height)}px`,
          left: `${Math.round(a.left - n.left + a.width)}px`,
          transform: "translateX(-100%) translateY(-100%)"
        };
      case "top-start":
        return {
          top: `${Math.round(a.top - n.top)}px`,
          left: `${Math.round(a.left - n.left)}px`,
          transform: ""
        };
      case "top-end":
        return {
          top: `${Math.round(a.top - n.top)}px`,
          left: `${Math.round(a.left - n.left + a.width)}px`,
          transform: "translateX(-100%)"
        };
      case "right-start":
        return {
          top: `${Math.round(a.top - n.top)}px`,
          left: `${Math.round(a.left - n.left + a.width)}px`,
          transform: "translateX(-100%)"
        };
      case "right-end":
        return {
          top: `${Math.round(a.top - n.top + a.height)}px`,
          left: `${Math.round(a.left - n.left + a.width)}px`,
          transform: "translateX(-100%) translateY(-100%)"
        };
      case "left-start":
        return {
          top: `${Math.round(a.top - n.top)}px`,
          left: `${Math.round(a.left - n.left)}px`,
          transform: ""
        };
      case "left-end":
        return {
          top: `${Math.round(a.top - n.top + a.height)}px`,
          left: `${Math.round(a.left - n.left)}px`,
          transform: "translateY(-100%)"
        };
      case "top":
        return {
          top: `${Math.round(a.top - n.top)}px`,
          left: `${Math.round(a.left - n.left + a.width / 2)}px`,
          transform: "translateX(-50%)"
        };
      case "right":
        return {
          top: `${Math.round(a.top - n.top + a.height / 2)}px`,
          left: `${Math.round(a.left - n.left + a.width)}px`,
          transform: "translateX(-100%) translateY(-50%)"
        };
      case "left":
        return {
          top: `${Math.round(a.top - n.top + a.height / 2)}px`,
          left: `${Math.round(a.left - n.left)}px`,
          transform: "translateY(-50%)"
        };
      case "bottom":
      default:
        return {
          top: `${Math.round(a.top - n.top + a.height)}px`,
          left: `${Math.round(a.left - n.left + a.width / 2)}px`,
          transform: "translateX(-50%) translateY(-100%)"
        };
    }
  switch (t) {
    case "bottom-start":
      return {
        top: `${Math.round(a.top - n.top + a.height + o)}px`,
        left: `${Math.round(a.left - n.left + l)}px`,
        transform: ""
      };
    case "bottom-end":
      return {
        top: `${Math.round(a.top - n.top + a.height + o)}px`,
        left: `${Math.round(a.left - n.left + a.width + l)}px`,
        transform: "translateX(-100%)"
      };
    case "top-start":
      return {
        top: `${Math.round(a.top - n.top + o)}px`,
        left: `${Math.round(a.left - n.left + l)}px`,
        transform: "translateY(-100%)"
      };
    case "top-end":
      return {
        top: `${Math.round(a.top - n.top + o)}px`,
        left: `${Math.round(a.left - n.left + a.width + l)}px`,
        transform: "translateX(-100%) translateY(-100%)"
      };
    case "right-start":
      return {
        top: `${Math.round(a.top - n.top + o)}px`,
        left: `${Math.round(a.left - n.left + a.width + l)}px`,
        transform: ""
      };
    case "right-end":
      return {
        top: `${Math.round(a.top - n.top + a.height + o)}px`,
        left: `${Math.round(a.left - n.left + a.width + l)}px`,
        transform: "translateY(-100%)"
      };
    case "left-start":
      return {
        top: `${Math.round(a.top - n.top + o)}px`,
        left: `${Math.round(a.left - n.left + l)}px`,
        transform: "translateX(-100%)"
      };
    case "left-end":
      return {
        top: `${Math.round(a.top - n.top + a.height + o)}px`,
        left: `${Math.round(a.left - n.left + l)}px`,
        transform: "translateX(-100%) translateY(-100%)"
      };
    case "top":
      return {
        top: `${Math.round(a.top - n.top + o)}px`,
        left: `${Math.round(a.left - n.left + a.width / 2 + l)}px`,
        transform: "translateY(-100%) translateX(-50%)"
      };
    case "right":
      return {
        top: `${Math.round(a.top - n.top + a.height / 2 + o)}px`,
        left: `${Math.round(a.left - n.left + a.width + l)}px`,
        transform: "translateY(-50%)"
      };
    case "left":
      return {
        top: `${Math.round(a.top - n.top + a.height / 2 + o)}px`,
        left: `${Math.round(a.left - n.left + l)}px`,
        transform: "translateY(-50%) translateX(-100%)"
      };
    case "bottom":
    default:
      return {
        top: `${Math.round(a.top - n.top + a.height + o)}px`,
        left: `${Math.round(a.left - n.left + a.width / 2 + l)}px`,
        transform: "translateX(-50%)"
      };
  }
}
const L1 = Ft([
  Ft(".v-binder-follower-container", {
    position: "absolute",
    left: "0",
    right: "0",
    top: "0",
    height: "0",
    pointerEvents: "none",
    zIndex: "auto"
  }),
  Ft(".v-binder-follower-content", {
    position: "absolute",
    zIndex: "auto"
  }, [
    Ft("> *", {
      pointerEvents: "all"
    })
  ])
]), cf = tr({
  name: "Follower",
  inheritAttrs: !1,
  props: {
    show: Boolean,
    enabled: {
      type: Boolean,
      default: void 0
    },
    placement: {
      type: String,
      default: "bottom"
    },
    syncTrigger: {
      type: Array,
      default: ["resize", "scroll"]
    },
    to: [String, Object],
    flip: {
      type: Boolean,
      default: !0
    },
    internalShift: Boolean,
    x: Number,
    y: Number,
    width: String,
    minWidth: String,
    containerClass: String,
    teleportDisabled: Boolean,
    zindexable: {
      type: Boolean,
      default: !0
    },
    zIndex: Number,
    overlap: Boolean
  },
  setup(t) {
    const n = Gn("VBinder"), a = ai(() => t.enabled !== void 0 ? t.enabled : t.show), o = De(null), l = De(null), d = () => {
      const { syncTrigger: x } = t;
      x.includes("scroll") && n.addScrollListener(y), x.includes("resize") && n.addResizeListener(y);
    }, m = () => {
      n.removeScrollListener(y), n.removeResizeListener(y);
    };
    Hr(() => {
      a.value && (y(), d());
    });
    const b = Yn();
    L1.mount({
      id: "vueuc/binder",
      head: !0,
      anchorMetaName: mi,
      ssr: b
    }), Rt(() => {
      m();
    }), am(() => {
      a.value && y();
    });
    const y = () => {
      if (!a.value)
        return;
      const x = o.value;
      if (x === null)
        return;
      const E = n.targetRef, { x: _, y: N, overlap: O } = t, T = _ !== void 0 && N !== void 0 ? o1(_, N) : yl(E);
      x.style.setProperty("--v-target-width", `${Math.round(T.width)}px`), x.style.setProperty("--v-target-height", `${Math.round(T.height)}px`);
      const { width: q, minWidth: Q, placement: ae, internalShift: oe, flip: Pe } = t;
      x.setAttribute("v-placement", ae), O ? x.setAttribute("v-overlap", "") : x.removeAttribute("v-overlap");
      const { style: j } = x;
      q === "target" ? j.width = `${T.width}px` : q !== void 0 ? j.width = q : j.width = "", Q === "target" ? j.minWidth = `${T.width}px` : Q !== void 0 ? j.minWidth = Q : j.minWidth = "";
      const A = yl(x), Z = yl(l.value), { left: ce, top: F, placement: V } = N1(ae, T, A, oe, Pe, O), re = H1(V, O), { left: le, top: fe, transform: ge } = R1(V, Z, T, F, ce, O);
      x.setAttribute("v-placement", V), x.style.setProperty("--v-offset-left", `${Math.round(ce)}px`), x.style.setProperty("--v-offset-top", `${Math.round(F)}px`), x.style.transform = `translateX(${le}) translateY(${fe}) ${ge}`, x.style.setProperty("--v-transform-origin", re), x.style.transformOrigin = re;
    };
    er(a, (x) => {
      x ? (d(), w()) : m();
    });
    const w = () => {
      tm().then(y).catch((x) => console.error(x));
    };
    [
      "placement",
      "x",
      "y",
      "internalShift",
      "flip",
      "width",
      "overlap",
      "minWidth"
    ].forEach((x) => {
      er(ti(t, x), y);
    }), ["teleportDisabled"].forEach((x) => {
      er(ti(t, x), w);
    }), er(ti(t, "syncTrigger"), (x) => {
      x.includes("resize") ? n.addResizeListener(y) : n.removeResizeListener(y), x.includes("scroll") ? n.addScrollListener(y) : n.removeScrollListener(y);
    });
    const $ = om(), W = ai(() => {
      const { to: x } = t;
      if (x !== void 0)
        return x;
      $.value;
    });
    return {
      VBinder: n,
      mergedEnabled: a,
      offsetContainerRef: l,
      followerRef: o,
      mergedTo: W,
      syncPosition: y
    };
  },
  render() {
    return Ze(ql, {
      show: this.show,
      to: this.mergedTo,
      disabled: this.teleportDisabled
    }, {
      default: () => {
        var t, n;
        const a = Ze("div", {
          class: ["v-binder-follower-container", this.containerClass],
          ref: "offsetContainerRef"
        }, [
          Ze("div", {
            class: "v-binder-follower-content",
            ref: "followerRef"
          }, (n = (t = this.$slots).default) === null || n === void 0 ? void 0 : n.call(t))
        ]);
        return this.zindexable ? em(a, [
          [
            f1,
            {
              enabled: this.mergedEnabled,
              zIndex: this.zIndex
            }
          ]
        ]) : a;
      }
    });
  }
});
var Ir = [], B1 = function() {
  return Ir.some(function(t) {
    return t.activeTargets.length > 0;
  });
}, V1 = function() {
  return Ir.some(function(t) {
    return t.skippedTargets.length > 0;
  });
}, ff = "ResizeObserver loop completed with undelivered notifications.", q1 = function() {
  var t;
  typeof ErrorEvent == "function" ? t = new ErrorEvent("error", {
    message: ff
  }) : (t = document.createEvent("Event"), t.initEvent("error", !1, !1), t.message = ff), window.dispatchEvent(t);
}, Xn;
(function(t) {
  t.BORDER_BOX = "border-box", t.CONTENT_BOX = "content-box", t.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box";
})(Xn || (Xn = {}));
var Nr = function(t) {
  return Object.freeze(t);
}, X1 = function() {
  function t(n, a) {
    this.inlineSize = n, this.blockSize = a, Nr(this);
  }
  return t;
}(), _m = function() {
  function t(n, a, o, l) {
    return this.x = n, this.y = a, this.width = o, this.height = l, this.top = this.y, this.left = this.x, this.bottom = this.top + this.height, this.right = this.left + this.width, Nr(this);
  }
  return t.prototype.toJSON = function() {
    var n = this, a = n.x, o = n.y, l = n.top, d = n.right, m = n.bottom, b = n.left, y = n.width, w = n.height;
    return { x: a, y: o, top: l, right: d, bottom: m, left: b, width: y, height: w };
  }, t.fromRect = function(n) {
    return new t(n.x, n.y, n.width, n.height);
  }, t;
}(), iu = function(t) {
  return t instanceof SVGElement && "getBBox" in t;
}, $m = function(t) {
  if (iu(t)) {
    var n = t.getBBox(), a = n.width, o = n.height;
    return !a && !o;
  }
  var l = t, d = l.offsetWidth, m = l.offsetHeight;
  return !(d || m || t.getClientRects().length);
}, mf = function(t) {
  var n;
  if (t instanceof Element)
    return !0;
  var a = (n = t == null ? void 0 : t.ownerDocument) === null || n === void 0 ? void 0 : n.defaultView;
  return !!(a && t instanceof a.Element);
}, K1 = function(t) {
  switch (t.tagName) {
    case "INPUT":
      if (t.type !== "image")
        break;
    case "VIDEO":
    case "AUDIO":
    case "EMBED":
    case "OBJECT":
    case "CANVAS":
    case "IFRAME":
    case "IMG":
      return !0;
  }
  return !1;
}, qn = typeof window < "u" ? window : {}, Ya = /* @__PURE__ */ new WeakMap(), hf = /auto|scroll/, G1 = /^tb|vertical/, U1 = /msie|trident/i.test(qn.navigator && qn.navigator.userAgent), At = function(t) {
  return parseFloat(t || "0");
}, un = function(t, n, a) {
  return t === void 0 && (t = 0), n === void 0 && (n = 0), a === void 0 && (a = !1), new X1((a ? n : t) || 0, (a ? t : n) || 0);
}, vf = Nr({
  devicePixelContentBoxSize: un(),
  borderBoxSize: un(),
  contentBoxSize: un(),
  contentRect: new _m(0, 0, 0, 0)
}), Tm = function(t, n) {
  if (n === void 0 && (n = !1), Ya.has(t) && !n)
    return Ya.get(t);
  if ($m(t))
    return Ya.set(t, vf), vf;
  var a = getComputedStyle(t), o = iu(t) && t.ownerSVGElement && t.getBBox(), l = !U1 && a.boxSizing === "border-box", d = G1.test(a.writingMode || ""), m = !o && hf.test(a.overflowY || ""), b = !o && hf.test(a.overflowX || ""), y = o ? 0 : At(a.paddingTop), w = o ? 0 : At(a.paddingRight), $ = o ? 0 : At(a.paddingBottom), W = o ? 0 : At(a.paddingLeft), x = o ? 0 : At(a.borderTopWidth), E = o ? 0 : At(a.borderRightWidth), _ = o ? 0 : At(a.borderBottomWidth), N = o ? 0 : At(a.borderLeftWidth), O = W + w, T = y + $, q = N + E, Q = x + _, ae = b ? t.offsetHeight - Q - t.clientHeight : 0, oe = m ? t.offsetWidth - q - t.clientWidth : 0, Pe = l ? O + q : 0, j = l ? T + Q : 0, A = o ? o.width : At(a.width) - Pe - oe, Z = o ? o.height : At(a.height) - j - ae, ce = A + O + oe + q, F = Z + T + ae + Q, V = Nr({
    devicePixelContentBoxSize: un(Math.round(A * devicePixelRatio), Math.round(Z * devicePixelRatio), d),
    borderBoxSize: un(ce, F, d),
    contentBoxSize: un(A, Z, d),
    contentRect: new _m(W, y, A, Z)
  });
  return Ya.set(t, V), V;
}, km = function(t, n, a) {
  var o = Tm(t, a), l = o.borderBoxSize, d = o.contentBoxSize, m = o.devicePixelContentBoxSize;
  switch (n) {
    case Xn.DEVICE_PIXEL_CONTENT_BOX:
      return m;
    case Xn.BORDER_BOX:
      return l;
    default:
      return d;
  }
}, Y1 = function() {
  function t(n) {
    var a = Tm(n);
    this.target = n, this.contentRect = a.contentRect, this.borderBoxSize = Nr([a.borderBoxSize]), this.contentBoxSize = Nr([a.contentBoxSize]), this.devicePixelContentBoxSize = Nr([a.devicePixelContentBoxSize]);
  }
  return t;
}(), Sm = function(t) {
  if ($m(t))
    return 1 / 0;
  for (var n = 0, a = t.parentNode; a; )
    n += 1, a = a.parentNode;
  return n;
}, Z1 = function() {
  var t = 1 / 0, n = [];
  Ir.forEach(function(m) {
    if (m.activeTargets.length !== 0) {
      var b = [];
      m.activeTargets.forEach(function(w) {
        var $ = new Y1(w.target), W = Sm(w.target);
        b.push($), w.lastReportedSize = km(w.target, w.observedBox), W < t && (t = W);
      }), n.push(function() {
        m.callback.call(m.observer, b, m.observer);
      }), m.activeTargets.splice(0, m.activeTargets.length);
    }
  });
  for (var a = 0, o = n; a < o.length; a++) {
    var l = o[a];
    l();
  }
  return t;
}, pf = function(t) {
  Ir.forEach(function(a) {
    a.activeTargets.splice(0, a.activeTargets.length), a.skippedTargets.splice(0, a.skippedTargets.length), a.observationTargets.forEach(function(l) {
      l.isActive() && (Sm(l.target) > t ? a.activeTargets.push(l) : a.skippedTargets.push(l));
    });
  });
}, J1 = function() {
  var t = 0;
  for (pf(t); B1(); )
    t = Z1(), pf(t);
  return V1() && q1(), t > 0;
}, Pl, Cm = [], Q1 = function() {
  return Cm.splice(0).forEach(function(t) {
    return t();
  });
}, eM = function(t) {
  if (!Pl) {
    var n = 0, a = document.createTextNode(""), o = { characterData: !0 };
    new MutationObserver(function() {
      return Q1();
    }).observe(a, o), Pl = function() {
      a.textContent = "".concat(n ? n-- : n++);
    };
  }
  Cm.push(t), Pl();
}, tM = function(t) {
  eM(function() {
    requestAnimationFrame(t);
  });
}, ni = 0, rM = function() {
  return !!ni;
}, nM = 250, aM = { attributes: !0, characterData: !0, childList: !0, subtree: !0 }, gf = [
  "resize",
  "load",
  "transitionend",
  "animationend",
  "animationstart",
  "animationiteration",
  "keyup",
  "keydown",
  "mouseup",
  "mousedown",
  "mouseover",
  "mouseout",
  "blur",
  "focus"
], yf = function(t) {
  return t === void 0 && (t = 0), Date.now() + t;
}, Ml = !1, iM = function() {
  function t() {
    var n = this;
    this.stopped = !0, this.listener = function() {
      return n.schedule();
    };
  }
  return t.prototype.run = function(n) {
    var a = this;
    if (n === void 0 && (n = nM), !Ml) {
      Ml = !0;
      var o = yf(n);
      tM(function() {
        var l = !1;
        try {
          l = J1();
        } finally {
          if (Ml = !1, n = o - yf(), !rM())
            return;
          l ? a.run(1e3) : n > 0 ? a.run(n) : a.start();
        }
      });
    }
  }, t.prototype.schedule = function() {
    this.stop(), this.run();
  }, t.prototype.observe = function() {
    var n = this, a = function() {
      return n.observer && n.observer.observe(document.body, aM);
    };
    document.body ? a() : qn.addEventListener("DOMContentLoaded", a);
  }, t.prototype.start = function() {
    var n = this;
    this.stopped && (this.stopped = !1, this.observer = new MutationObserver(this.listener), this.observe(), gf.forEach(function(a) {
      return qn.addEventListener(a, n.listener, !0);
    }));
  }, t.prototype.stop = function() {
    var n = this;
    this.stopped || (this.observer && this.observer.disconnect(), gf.forEach(function(a) {
      return qn.removeEventListener(a, n.listener, !0);
    }), this.stopped = !0);
  }, t;
}(), Xl = new iM(), bf = function(t) {
  !ni && t > 0 && Xl.start(), ni += t, !ni && Xl.stop();
}, oM = function(t) {
  return !iu(t) && !K1(t) && getComputedStyle(t).display === "inline";
}, lM = function() {
  function t(n, a) {
    this.target = n, this.observedBox = a || Xn.CONTENT_BOX, this.lastReportedSize = {
      inlineSize: 0,
      blockSize: 0
    };
  }
  return t.prototype.isActive = function() {
    var n = km(this.target, this.observedBox, !0);
    return oM(this.target) && (this.lastReportedSize = n), this.lastReportedSize.inlineSize !== n.inlineSize || this.lastReportedSize.blockSize !== n.blockSize;
  }, t;
}(), uM = function() {
  function t(n, a) {
    this.activeTargets = [], this.skippedTargets = [], this.observationTargets = [], this.observer = n, this.callback = a;
  }
  return t;
}(), Za = /* @__PURE__ */ new WeakMap(), wf = function(t, n) {
  for (var a = 0; a < t.length; a += 1)
    if (t[a].target === n)
      return a;
  return -1;
}, Ja = function() {
  function t() {
  }
  return t.connect = function(n, a) {
    var o = new uM(n, a);
    Za.set(n, o);
  }, t.observe = function(n, a, o) {
    var l = Za.get(n), d = l.observationTargets.length === 0;
    wf(l.observationTargets, a) < 0 && (d && Ir.push(l), l.observationTargets.push(new lM(a, o && o.box)), bf(1), Xl.schedule());
  }, t.unobserve = function(n, a) {
    var o = Za.get(n), l = wf(o.observationTargets, a), d = o.observationTargets.length === 1;
    l >= 0 && (d && Ir.splice(Ir.indexOf(o), 1), o.observationTargets.splice(l, 1), bf(-1));
  }, t.disconnect = function(n) {
    var a = this, o = Za.get(n);
    o.observationTargets.slice().forEach(function(l) {
      return a.unobserve(n, l.target);
    }), o.activeTargets.splice(0, o.activeTargets.length);
  }, t;
}(), sM = function() {
  function t(n) {
    if (arguments.length === 0)
      throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
    if (typeof n != "function")
      throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
    Ja.connect(this, n);
  }
  return t.prototype.observe = function(n, a) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!mf(n))
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
    Ja.observe(this, n, a);
  }, t.prototype.unobserve = function(n) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!mf(n))
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
    Ja.unobserve(this, n);
  }, t.prototype.disconnect = function() {
    Ja.disconnect(this);
  }, t.toString = function() {
    return "function ResizeObserver () { [polyfill code] }";
  }, t;
}();
class dM {
  constructor() {
    this.handleResize = this.handleResize.bind(this), this.observer = new (typeof window < "u" && window.ResizeObserver || sM)(this.handleResize), this.elHandlersMap = /* @__PURE__ */ new Map();
  }
  handleResize(n) {
    for (const a of n) {
      const o = this.elHandlersMap.get(a.target);
      o !== void 0 && o(a);
    }
  }
  registerHandler(n, a) {
    this.elHandlersMap.set(n, a), this.observer.observe(n);
  }
  unregisterHandler(n) {
    this.elHandlersMap.has(n) && (this.elHandlersMap.delete(n), this.observer.unobserve(n));
  }
}
const Kl = new dM(), ui = tr({
  name: "ResizeObserver",
  props: {
    onResize: Function
  },
  setup(t) {
    let n = !1;
    const a = Jl().proxy;
    function o(l) {
      const { onResize: d } = t;
      d !== void 0 && d(l);
    }
    Hr(() => {
      const l = a.$el;
      if (l === void 0) {
        tf("resize-observer", "$el does not exist.");
        return;
      }
      if (l.nextElementSibling !== l.nextSibling && l.nodeType === 3 && l.nodeValue !== "") {
        tf("resize-observer", "$el can not be observed (it may be a text node).");
        return;
      }
      l.nextElementSibling !== null && (Kl.registerHandler(l.nextElementSibling, o), n = !0);
    }), Rt(() => {
      n && Kl.unregisterHandler(a.$el.nextElementSibling);
    });
  },
  render() {
    return rm(this.$slots, "default");
  }
});
let Qa;
function cM() {
  return Qa === void 0 && ("matchMedia" in window ? Qa = window.matchMedia("(pointer:coarse)").matches : Qa = !1), Qa;
}
let _l;
function Pf() {
  return _l === void 0 && (_l = "chrome" in window ? window.devicePixelRatio : 1), _l;
}
const fM = Ft(".v-vl", {
  maxHeight: "inherit",
  height: "100%",
  overflow: "auto",
  minWidth: "1px"
  // a zero width container won't be scrollable
}, [
  Ft("&:not(.v-vl--show-scrollbar)", {
    scrollbarWidth: "none"
  }, [
    Ft("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb", {
      width: 0,
      height: 0,
      display: "none"
    })
  ])
]), Mf = tr({
  name: "VirtualList",
  inheritAttrs: !1,
  props: {
    showScrollbar: {
      type: Boolean,
      default: !0
    },
    items: {
      type: Array,
      default: () => []
    },
    // it is suppose to be the min height
    itemSize: {
      type: Number,
      required: !0
    },
    itemResizable: Boolean,
    itemsStyle: [String, Object],
    visibleItemsTag: {
      type: [String, Object],
      default: "div"
    },
    visibleItemsProps: Object,
    ignoreItemResize: Boolean,
    onScroll: Function,
    onWheel: Function,
    onResize: Function,
    defaultScrollKey: [Number, String],
    defaultScrollIndex: Number,
    keyField: {
      type: String,
      default: "key"
    },
    // Whether it is a good API?
    // ResizeObserver + footer & header is not enough.
    // Too complex for simple case
    paddingTop: {
      type: [Number, String],
      default: 0
    },
    paddingBottom: {
      type: [Number, String],
      default: 0
    }
  },
  setup(t) {
    const n = Yn();
    fM.mount({
      id: "vueuc/virtual-list",
      head: !0,
      anchorMetaName: mi,
      ssr: n
    }), Hr(() => {
      const { defaultScrollIndex: F, defaultScrollKey: V } = t;
      F != null ? _({ index: F }) : V != null && _({ key: V });
    });
    let a = !1, o = !1;
    KP(() => {
      if (a = !1, !o) {
        o = !0;
        return;
      }
      _({ top: W.value, left: $ });
    }), GP(() => {
      a = !0, o || (o = !0);
    });
    const l = nt(() => {
      const F = /* @__PURE__ */ new Map(), { keyField: V } = t;
      return t.items.forEach((re, le) => {
        F.set(re[V], le);
      }), F;
    }), d = De(null), m = De(void 0), b = /* @__PURE__ */ new Map(), y = nt(() => {
      const { items: F, itemSize: V, keyField: re } = t, le = new j1(F.length, V);
      return F.forEach((fe, ge) => {
        const se = fe[re], he = b.get(se);
        he !== void 0 && le.add(ge, he);
      }), le;
    }), w = De(0);
    let $ = 0;
    const W = De(0), x = ai(() => Math.max(y.value.getBound(W.value - Nl(t.paddingTop)) - 1, 0)), E = nt(() => {
      const { value: F } = m;
      if (F === void 0)
        return [];
      const { items: V, itemSize: re } = t, le = x.value, fe = Math.min(le + Math.ceil(F / re + 1), V.length - 1), ge = [];
      for (let se = le; se <= fe; ++se)
        ge.push(V[se]);
      return ge;
    }), _ = (F, V) => {
      if (typeof F == "number") {
        q(F, V, "auto");
        return;
      }
      const { left: re, top: le, index: fe, key: ge, position: se, behavior: he, debounce: Ae = !0 } = F;
      if (re !== void 0 || le !== void 0)
        q(re, le, he);
      else if (fe !== void 0)
        T(fe, he, Ae);
      else if (ge !== void 0) {
        const Le = l.value.get(ge);
        Le !== void 0 && T(Le, he, Ae);
      } else
        se === "bottom" ? q(0, Number.MAX_SAFE_INTEGER, he) : se === "top" && q(0, 0, he);
    };
    let N, O = null;
    function T(F, V, re) {
      const { value: le } = y, fe = le.sum(F) + Nl(t.paddingTop);
      if (!re)
        d.value.scrollTo({
          left: 0,
          top: fe,
          behavior: V
        });
      else {
        N = F, O !== null && window.clearTimeout(O), O = window.setTimeout(() => {
          N = void 0, O = null;
        }, 16);
        const { scrollTop: ge, offsetHeight: se } = d.value;
        if (fe > ge) {
          const he = le.get(F);
          fe + he <= ge + se || d.value.scrollTo({
            left: 0,
            top: fe + he - se,
            behavior: V
          });
        } else
          d.value.scrollTo({
            left: 0,
            top: fe,
            behavior: V
          });
      }
    }
    function q(F, V, re) {
      d.value.scrollTo({
        left: F,
        top: V,
        behavior: re
      });
    }
    function Q(F, V) {
      var re, le, fe;
      if (a || t.ignoreItemResize || ce(V.target))
        return;
      const { value: ge } = y, se = l.value.get(F), he = ge.get(se), Ae = (fe = (le = (re = V.borderBoxSize) === null || re === void 0 ? void 0 : re[0]) === null || le === void 0 ? void 0 : le.blockSize) !== null && fe !== void 0 ? fe : V.contentRect.height;
      if (Ae === he)
        return;
      Ae - t.itemSize === 0 ? b.delete(F) : b.set(F, Ae - t.itemSize);
      const $e = Ae - he;
      if ($e === 0)
        return;
      ge.add(se, $e);
      const it = d.value;
      if (it != null) {
        if (N === void 0) {
          const wr = ge.sum(se);
          it.scrollTop > wr && it.scrollBy(0, $e);
        } else if (se < N)
          it.scrollBy(0, $e);
        else if (se === N) {
          const wr = ge.sum(se);
          Ae + wr > // Note, listEl shouldn't have border, nor offsetHeight won't be
          // correct
          it.scrollTop + it.offsetHeight && it.scrollBy(0, $e);
        }
        Z();
      }
      w.value++;
    }
    const ae = !cM();
    let oe = !1;
    function Pe(F) {
      var V;
      (V = t.onScroll) === null || V === void 0 || V.call(t, F), (!ae || !oe) && Z();
    }
    function j(F) {
      var V;
      if ((V = t.onWheel) === null || V === void 0 || V.call(t, F), ae) {
        const re = d.value;
        if (re != null) {
          if (F.deltaX === 0 && (re.scrollTop === 0 && F.deltaY <= 0 || re.scrollTop + re.offsetHeight >= re.scrollHeight && F.deltaY >= 0))
            return;
          F.preventDefault(), re.scrollTop += F.deltaY / Pf(), re.scrollLeft += F.deltaX / Pf(), Z(), oe = !0, Ql(() => {
            oe = !1;
          });
        }
      }
    }
    function A(F) {
      if (a || ce(F.target) || F.contentRect.height === m.value)
        return;
      m.value = F.contentRect.height;
      const { onResize: V } = t;
      V !== void 0 && V(F);
    }
    function Z() {
      const { value: F } = d;
      F != null && (W.value = F.scrollTop, $ = F.scrollLeft);
    }
    function ce(F) {
      let V = F;
      for (; V !== null; ) {
        if (V.style.display === "none")
          return !0;
        V = V.parentElement;
      }
      return !1;
    }
    return {
      listHeight: m,
      listStyle: {
        overflow: "auto"
      },
      keyToIndex: l,
      itemsStyle: nt(() => {
        const { itemResizable: F } = t, V = Bn(y.value.sum());
        return w.value, [
          t.itemsStyle,
          {
            boxSizing: "content-box",
            height: F ? "" : V,
            minHeight: F ? V : "",
            paddingTop: Bn(t.paddingTop),
            paddingBottom: Bn(t.paddingBottom)
          }
        ];
      }),
      visibleItemsStyle: nt(() => (w.value, {
        transform: `translateY(${Bn(y.value.sum(x.value))})`
      })),
      viewportItems: E,
      listElRef: d,
      itemsElRef: De(null),
      scrollTo: _,
      handleListResize: A,
      handleListScroll: Pe,
      handleListWheel: j,
      handleItemResize: Q
    };
  },
  render() {
    const { itemResizable: t, keyField: n, keyToIndex: a, visibleItemsTag: o } = this;
    return Ze(ui, {
      onResize: this.handleListResize
    }, {
      default: () => {
        var l, d;
        return Ze("div", UP(this.$attrs, {
          class: ["v-vl", this.showScrollbar && "v-vl--show-scrollbar"],
          onScroll: this.handleListScroll,
          onWheel: this.handleListWheel,
          ref: "listElRef"
        }), [
          this.items.length !== 0 ? Ze("div", {
            ref: "itemsElRef",
            class: "v-vl-items",
            style: this.itemsStyle
          }, [
            Ze(o, Object.assign({
              class: "v-vl-visible-items",
              style: this.visibleItemsStyle
            }, this.visibleItemsProps), {
              default: () => this.viewportItems.map((m) => {
                const b = m[n], y = a.get(b), w = this.$slots.default({
                  item: m,
                  index: y
                })[0];
                return t ? Ze(ui, {
                  key: b,
                  onResize: ($) => this.handleItemResize(b, $)
                }, {
                  default: () => w
                }) : (w.key = b, w);
              })
            })
          ]) : (d = (l = this.$slots).empty) === null || d === void 0 ? void 0 : d.call(l)
        ]);
      }
    });
  }
}), mM = Ft(".v-x-scroll", {
  overflow: "auto",
  scrollbarWidth: "none"
}, [
  Ft("&::-webkit-scrollbar", {
    width: 0,
    height: 0
  })
]), _f = tr({
  name: "XScroll",
  props: {
    disabled: Boolean,
    onScroll: Function
  },
  setup() {
    const t = De(null);
    function n(l) {
      !(l.currentTarget.offsetWidth < l.currentTarget.scrollWidth) || l.deltaY === 0 || (l.currentTarget.scrollLeft += l.deltaY + l.deltaX, l.preventDefault());
    }
    const a = Yn();
    return mM.mount({
      id: "vueuc/x-scroll",
      head: !0,
      anchorMetaName: mi,
      ssr: a
    }), Object.assign({
      selfRef: t,
      handleWheel: n
    }, {
      scrollTo(...l) {
        var d;
        (d = t.value) === null || d === void 0 || d.scrollTo(...l);
      }
    });
  },
  render() {
    return Ze("div", {
      ref: "selfRef",
      onScroll: this.onScroll,
      onWheel: this.disabled ? void 0 : this.handleWheel,
      class: "v-x-scroll"
    }, this.$slots);
  }
}), Or = "v-hidden", hM = Ft("[v-hidden]", {
  display: "none!important"
}), $f = tr({
  name: "Overflow",
  props: {
    getCounter: Function,
    getTail: Function,
    updateCounter: Function,
    onUpdateOverflow: Function
  },
  setup(t, { slots: n }) {
    const a = De(null), o = De(null);
    function l() {
      const { value: m } = a, { getCounter: b, getTail: y } = t;
      let w;
      if (b !== void 0 ? w = b() : w = o.value, !m || !w)
        return;
      w.hasAttribute(Or) && w.removeAttribute(Or);
      const { children: $ } = m, W = m.offsetWidth, x = [], E = n.tail ? y == null ? void 0 : y() : null;
      let _ = E ? E.offsetWidth : 0, N = !1;
      const O = m.children.length - (n.tail ? 1 : 0);
      for (let q = 0; q < O - 1; ++q) {
        if (q < 0)
          continue;
        const Q = $[q];
        if (N) {
          Q.hasAttribute(Or) || Q.setAttribute(Or, "");
          continue;
        } else
          Q.hasAttribute(Or) && Q.removeAttribute(Or);
        const ae = Q.offsetWidth;
        if (_ += ae, x[q] = ae, _ > W) {
          const { updateCounter: oe } = t;
          for (let Pe = q; Pe >= 0; --Pe) {
            const j = O - 1 - Pe;
            oe !== void 0 ? oe(j) : w.textContent = `${j}`;
            const A = w.offsetWidth;
            if (_ -= x[Pe], _ + A <= W || Pe === 0) {
              N = !0, q = Pe - 1, E && (q === -1 ? (E.style.maxWidth = `${W - A}px`, E.style.boxSizing = "border-box") : E.style.maxWidth = "");
              break;
            }
          }
        }
      }
      const { onUpdateOverflow: T } = t;
      N ? T !== void 0 && T(!0) : (T !== void 0 && T(!1), w.setAttribute(Or, ""));
    }
    const d = Yn();
    return hM.mount({
      id: "vueuc/overflow",
      head: !0,
      anchorMetaName: mi,
      ssr: d
    }), Hr(l), {
      selfRef: a,
      counterRef: o,
      sync: l
    };
  },
  render() {
    const { $slots: t } = this;
    return tm(this.sync), Ze("div", {
      class: "v-overflow",
      ref: "selfRef"
    }, [
      rm(t, "default"),
      // $slots.counter should only has 1 element
      t.counter ? t.counter() : Ze("span", {
        style: {
          display: "inline-block"
        },
        ref: "counterRef"
      }),
      // $slots.tail should only has 1 element
      t.tail ? t.tail() : null
    ]);
  }
});
function Dm(t) {
  return t instanceof HTMLElement;
}
function Wm(t) {
  for (let n = 0; n < t.childNodes.length; n++) {
    const a = t.childNodes[n];
    if (Dm(a) && (Om(a) || Wm(a)))
      return !0;
  }
  return !1;
}
function xm(t) {
  for (let n = t.childNodes.length - 1; n >= 0; n--) {
    const a = t.childNodes[n];
    if (Dm(a) && (Om(a) || xm(a)))
      return !0;
  }
  return !1;
}
function Om(t) {
  if (!vM(t))
    return !1;
  try {
    t.focus({ preventScroll: !0 });
  } catch {
  }
  return document.activeElement === t;
}
function vM(t) {
  if (t.tabIndex > 0 || t.tabIndex === 0 && t.getAttribute("tabIndex") !== null)
    return !0;
  if (t.getAttribute("disabled"))
    return !1;
  switch (t.nodeName) {
    case "A":
      return !!t.href && t.rel !== "ignore";
    case "INPUT":
      return t.type !== "hidden" && t.type !== "file";
    case "BUTTON":
    case "SELECT":
    case "TEXTAREA":
      return !0;
    default:
      return !1;
  }
}
let In = [];
const Tf = tr({
  name: "FocusTrap",
  props: {
    disabled: Boolean,
    active: Boolean,
    autoFocus: {
      type: Boolean,
      default: !0
    },
    onEsc: Function,
    initialFocusTo: String,
    finalFocusTo: String,
    returnFocusOnDeactivated: {
      type: Boolean,
      default: !0
    }
  },
  setup(t) {
    const n = hm(), a = De(null), o = De(null);
    let l = !1, d = !1;
    const m = typeof document > "u" ? null : document.activeElement;
    function b() {
      return In[In.length - 1] === n;
    }
    function y(O) {
      var T;
      O.code === "Escape" && b() && ((T = t.onEsc) === null || T === void 0 || T.call(t, O));
    }
    Hr(() => {
      er(() => t.active, (O) => {
        O ? (W(), _t("keydown", document, y)) : (at("keydown", document, y), l && x());
      }, {
        immediate: !0
      });
    }), Rt(() => {
      at("keydown", document, y), l && x();
    });
    function w(O) {
      if (!d && b()) {
        const T = $();
        if (T === null || T.contains(dm(O)))
          return;
        E("first");
      }
    }
    function $() {
      const O = a.value;
      if (O === null)
        return null;
      let T = O;
      for (; T = T.nextSibling, !(T === null || T instanceof Element && T.tagName === "DIV"); )
        ;
      return T;
    }
    function W() {
      var O;
      if (!t.disabled) {
        if (In.push(n), t.autoFocus) {
          const { initialFocusTo: T } = t;
          T === void 0 ? E("first") : (O = lf(T)) === null || O === void 0 || O.focus({ preventScroll: !0 });
        }
        l = !0, document.addEventListener("focus", w, !0);
      }
    }
    function x() {
      var O;
      if (t.disabled || (document.removeEventListener("focus", w, !0), In = In.filter((q) => q !== n), b()))
        return;
      const { finalFocusTo: T } = t;
      T !== void 0 ? (O = lf(T)) === null || O === void 0 || O.focus({ preventScroll: !0 }) : t.returnFocusOnDeactivated && m instanceof HTMLElement && (d = !0, m.focus({ preventScroll: !0 }), d = !1);
    }
    function E(O) {
      if (b() && t.active) {
        const T = a.value, q = o.value;
        if (T !== null && q !== null) {
          const Q = $();
          if (Q == null || Q === q) {
            d = !0, T.focus({ preventScroll: !0 }), d = !1;
            return;
          }
          d = !0;
          const ae = O === "first" ? Wm(Q) : xm(Q);
          d = !1, ae || (d = !0, T.focus({ preventScroll: !0 }), d = !1);
        }
      }
    }
    function _(O) {
      if (d)
        return;
      const T = $();
      T !== null && (O.relatedTarget !== null && T.contains(O.relatedTarget) ? E("last") : E("first"));
    }
    function N(O) {
      d || (O.relatedTarget !== null && O.relatedTarget === a.value ? E("last") : E("first"));
    }
    return {
      focusableStartRef: a,
      focusableEndRef: o,
      focusableStyle: "position: absolute; height: 0; width: 0;",
      handleStartFocus: _,
      handleEndFocus: N
    };
  },
  render() {
    const { default: t } = this.$slots;
    if (t === void 0)
      return null;
    if (this.disabled)
      return t();
    const { active: n, focusableStyle: a } = this;
    return Ze(Qf, null, [
      Ze("div", {
        "aria-hidden": "true",
        tabindex: n ? "0" : "-1",
        ref: "focusableStartRef",
        style: a,
        onFocus: this.handleStartFocus
      }),
      t(),
      Ze("div", {
        "aria-hidden": "true",
        style: a,
        ref: "focusableEndRef",
        tabindex: n ? "0" : "-1",
        onFocus: this.handleEndFocus
      })
    ]);
  }
}), pM = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Binder: Qc,
  FocusTrap: Tf,
  Follower: cf,
  LazyTeleport: ql,
  Overflow: $f,
  ResizeObserver: ui,
  Target: ef,
  VBinder: Qc,
  VFocusTrap: Tf,
  VFollower: cf,
  VLazyTeleport: ql,
  VOverflow: $f,
  VResizeObserver: ui,
  VTarget: ef,
  VVirtualList: Mf,
  VXScroll: _f,
  VirtualList: Mf,
  XScroll: _f,
  resizeObserverManager: Kl
}, Symbol.toStringTag, { value: "Module" })), gM = /* @__PURE__ */ be(pM), yM = /* @__PURE__ */ be(r0);
var hn = {};
Object.defineProperty(hn, "__esModule", { value: !0 });
hn.isBrowser = void 0;
hn.isBrowser = typeof document < "u" && typeof window < "u";
var si = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
si.exports;
(function(t, n) {
  (function() {
    var a, o = "4.17.21", l = 200, d = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", m = "Expected a function", b = "Invalid `variable` option passed into `_.template`", y = "__lodash_hash_undefined__", w = 500, $ = "__lodash_placeholder__", W = 1, x = 2, E = 4, _ = 1, N = 2, O = 1, T = 2, q = 4, Q = 8, ae = 16, oe = 32, Pe = 64, j = 128, A = 256, Z = 512, ce = 30, F = "...", V = 800, re = 16, le = 1, fe = 2, ge = 3, se = 1 / 0, he = 9007199254740991, Ae = 17976931348623157e292, Le = 0 / 0, $e = 4294967295, it = $e - 1, wr = $e >>> 1, Xi = [
      ["ary", j],
      ["bind", O],
      ["bindKey", T],
      ["curry", Q],
      ["curryRight", ae],
      ["flip", Z],
      ["partial", oe],
      ["partialRight", Pe],
      ["rearg", A]
    ], nr = "[object Arguments]", Rr = "[object Array]", Ki = "[object AsyncFunction]", Pr = "[object Boolean]", Mr = "[object Date]", Gi = "[object DOMException]", Lr = "[object Error]", Br = "[object Function]", ea = "[object GeneratorFunction]", ot = "[object Map]", Ot = "[object Number]", ih = "[object Null]", Vt = "[object Object]", vs = "[object Promise]", oh = "[object Proxy]", yn = "[object RegExp]", $t = "[object Set]", bn = "[object String]", ta = "[object Symbol]", lh = "[object Undefined]", wn = "[object WeakMap]", uh = "[object WeakSet]", Pn = "[object ArrayBuffer]", Vr = "[object DataView]", Ui = "[object Float32Array]", Yi = "[object Float64Array]", Zi = "[object Int8Array]", Ji = "[object Int16Array]", Qi = "[object Int32Array]", eo = "[object Uint8Array]", to = "[object Uint8ClampedArray]", ro = "[object Uint16Array]", no = "[object Uint32Array]", sh = /\b__p \+= '';/g, dh = /\b(__p \+=) '' \+/g, ch = /(__e\(.*?\)|\b__t\)) \+\n'';/g, ps = /&(?:amp|lt|gt|quot|#39);/g, gs = /[&<>"']/g, fh = RegExp(ps.source), mh = RegExp(gs.source), hh = /<%-([\s\S]+?)%>/g, vh = /<%([\s\S]+?)%>/g, ys = /<%=([\s\S]+?)%>/g, ph = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, gh = /^\w*$/, yh = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, ao = /[\\^$.*+?()[\]{}|]/g, bh = RegExp(ao.source), io = /^\s+/, wh = /\s/, Ph = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, Mh = /\{\n\/\* \[wrapped with (.+)\] \*/, _h = /,? & /, $h = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, Th = /[()=,{}\[\]\/\s]/, kh = /\\(\\)?/g, Sh = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, bs = /\w*$/, Ch = /^[-+]0x[0-9a-f]+$/i, Dh = /^0b[01]+$/i, Wh = /^\[object .+?Constructor\]$/, xh = /^0o[0-7]+$/i, Oh = /^(?:0|[1-9]\d*)$/, zh = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, ra = /($^)/, Eh = /['\n\r\u2028\u2029\\]/g, na = "\\ud800-\\udfff", jh = "\\u0300-\\u036f", Ah = "\\ufe20-\\ufe2f", Fh = "\\u20d0-\\u20ff", ws = jh + Ah + Fh, Ps = "\\u2700-\\u27bf", Ms = "a-z\\xdf-\\xf6\\xf8-\\xff", Ih = "\\xac\\xb1\\xd7\\xf7", Nh = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", Hh = "\\u2000-\\u206f", Rh = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", _s = "A-Z\\xc0-\\xd6\\xd8-\\xde", $s = "\\ufe0e\\ufe0f", Ts = Ih + Nh + Hh + Rh, oo = "['’]", Lh = "[" + na + "]", ks = "[" + Ts + "]", aa = "[" + ws + "]", Ss = "\\d+", Bh = "[" + Ps + "]", Cs = "[" + Ms + "]", Ds = "[^" + na + Ts + Ss + Ps + Ms + _s + "]", lo = "\\ud83c[\\udffb-\\udfff]", Vh = "(?:" + aa + "|" + lo + ")", Ws = "[^" + na + "]", uo = "(?:\\ud83c[\\udde6-\\uddff]){2}", so = "[\\ud800-\\udbff][\\udc00-\\udfff]", qr = "[" + _s + "]", xs = "\\u200d", Os = "(?:" + Cs + "|" + Ds + ")", qh = "(?:" + qr + "|" + Ds + ")", zs = "(?:" + oo + "(?:d|ll|m|re|s|t|ve))?", Es = "(?:" + oo + "(?:D|LL|M|RE|S|T|VE))?", js = Vh + "?", As = "[" + $s + "]?", Xh = "(?:" + xs + "(?:" + [Ws, uo, so].join("|") + ")" + As + js + ")*", Kh = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", Gh = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Fs = As + js + Xh, Uh = "(?:" + [Bh, uo, so].join("|") + ")" + Fs, Yh = "(?:" + [Ws + aa + "?", aa, uo, so, Lh].join("|") + ")", Zh = RegExp(oo, "g"), Jh = RegExp(aa, "g"), co = RegExp(lo + "(?=" + lo + ")|" + Yh + Fs, "g"), Qh = RegExp([
      qr + "?" + Cs + "+" + zs + "(?=" + [ks, qr, "$"].join("|") + ")",
      qh + "+" + Es + "(?=" + [ks, qr + Os, "$"].join("|") + ")",
      qr + "?" + Os + "+" + zs,
      qr + "+" + Es,
      Gh,
      Kh,
      Ss,
      Uh
    ].join("|"), "g"), ev = RegExp("[" + xs + na + ws + $s + "]"), tv = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, rv = [
      "Array",
      "Buffer",
      "DataView",
      "Date",
      "Error",
      "Float32Array",
      "Float64Array",
      "Function",
      "Int8Array",
      "Int16Array",
      "Int32Array",
      "Map",
      "Math",
      "Object",
      "Promise",
      "RegExp",
      "Set",
      "String",
      "Symbol",
      "TypeError",
      "Uint8Array",
      "Uint8ClampedArray",
      "Uint16Array",
      "Uint32Array",
      "WeakMap",
      "_",
      "clearTimeout",
      "isFinite",
      "parseInt",
      "setTimeout"
    ], nv = -1, Te = {};
    Te[Ui] = Te[Yi] = Te[Zi] = Te[Ji] = Te[Qi] = Te[eo] = Te[to] = Te[ro] = Te[no] = !0, Te[nr] = Te[Rr] = Te[Pn] = Te[Pr] = Te[Vr] = Te[Mr] = Te[Lr] = Te[Br] = Te[ot] = Te[Ot] = Te[Vt] = Te[yn] = Te[$t] = Te[bn] = Te[wn] = !1;
    var _e = {};
    _e[nr] = _e[Rr] = _e[Pn] = _e[Vr] = _e[Pr] = _e[Mr] = _e[Ui] = _e[Yi] = _e[Zi] = _e[Ji] = _e[Qi] = _e[ot] = _e[Ot] = _e[Vt] = _e[yn] = _e[$t] = _e[bn] = _e[ta] = _e[eo] = _e[to] = _e[ro] = _e[no] = !0, _e[Lr] = _e[Br] = _e[wn] = !1;
    var av = {
      // Latin-1 Supplement block.
      À: "A",
      Á: "A",
      Â: "A",
      Ã: "A",
      Ä: "A",
      Å: "A",
      à: "a",
      á: "a",
      â: "a",
      ã: "a",
      ä: "a",
      å: "a",
      Ç: "C",
      ç: "c",
      Ð: "D",
      ð: "d",
      È: "E",
      É: "E",
      Ê: "E",
      Ë: "E",
      è: "e",
      é: "e",
      ê: "e",
      ë: "e",
      Ì: "I",
      Í: "I",
      Î: "I",
      Ï: "I",
      ì: "i",
      í: "i",
      î: "i",
      ï: "i",
      Ñ: "N",
      ñ: "n",
      Ò: "O",
      Ó: "O",
      Ô: "O",
      Õ: "O",
      Ö: "O",
      Ø: "O",
      ò: "o",
      ó: "o",
      ô: "o",
      õ: "o",
      ö: "o",
      ø: "o",
      Ù: "U",
      Ú: "U",
      Û: "U",
      Ü: "U",
      ù: "u",
      ú: "u",
      û: "u",
      ü: "u",
      Ý: "Y",
      ý: "y",
      ÿ: "y",
      Æ: "Ae",
      æ: "ae",
      Þ: "Th",
      þ: "th",
      ß: "ss",
      // Latin Extended-A block.
      Ā: "A",
      Ă: "A",
      Ą: "A",
      ā: "a",
      ă: "a",
      ą: "a",
      Ć: "C",
      Ĉ: "C",
      Ċ: "C",
      Č: "C",
      ć: "c",
      ĉ: "c",
      ċ: "c",
      č: "c",
      Ď: "D",
      Đ: "D",
      ď: "d",
      đ: "d",
      Ē: "E",
      Ĕ: "E",
      Ė: "E",
      Ę: "E",
      Ě: "E",
      ē: "e",
      ĕ: "e",
      ė: "e",
      ę: "e",
      ě: "e",
      Ĝ: "G",
      Ğ: "G",
      Ġ: "G",
      Ģ: "G",
      ĝ: "g",
      ğ: "g",
      ġ: "g",
      ģ: "g",
      Ĥ: "H",
      Ħ: "H",
      ĥ: "h",
      ħ: "h",
      Ĩ: "I",
      Ī: "I",
      Ĭ: "I",
      Į: "I",
      İ: "I",
      ĩ: "i",
      ī: "i",
      ĭ: "i",
      į: "i",
      ı: "i",
      Ĵ: "J",
      ĵ: "j",
      Ķ: "K",
      ķ: "k",
      ĸ: "k",
      Ĺ: "L",
      Ļ: "L",
      Ľ: "L",
      Ŀ: "L",
      Ł: "L",
      ĺ: "l",
      ļ: "l",
      ľ: "l",
      ŀ: "l",
      ł: "l",
      Ń: "N",
      Ņ: "N",
      Ň: "N",
      Ŋ: "N",
      ń: "n",
      ņ: "n",
      ň: "n",
      ŋ: "n",
      Ō: "O",
      Ŏ: "O",
      Ő: "O",
      ō: "o",
      ŏ: "o",
      ő: "o",
      Ŕ: "R",
      Ŗ: "R",
      Ř: "R",
      ŕ: "r",
      ŗ: "r",
      ř: "r",
      Ś: "S",
      Ŝ: "S",
      Ş: "S",
      Š: "S",
      ś: "s",
      ŝ: "s",
      ş: "s",
      š: "s",
      Ţ: "T",
      Ť: "T",
      Ŧ: "T",
      ţ: "t",
      ť: "t",
      ŧ: "t",
      Ũ: "U",
      Ū: "U",
      Ŭ: "U",
      Ů: "U",
      Ű: "U",
      Ų: "U",
      ũ: "u",
      ū: "u",
      ŭ: "u",
      ů: "u",
      ű: "u",
      ų: "u",
      Ŵ: "W",
      ŵ: "w",
      Ŷ: "Y",
      ŷ: "y",
      Ÿ: "Y",
      Ź: "Z",
      Ż: "Z",
      Ž: "Z",
      ź: "z",
      ż: "z",
      ž: "z",
      Ĳ: "IJ",
      ĳ: "ij",
      Œ: "Oe",
      œ: "oe",
      ŉ: "'n",
      ſ: "s"
    }, iv = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }, ov = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    }, lv = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, uv = parseFloat, sv = parseInt, Is = typeof H == "object" && H && H.Object === Object && H, dv = typeof self == "object" && self && self.Object === Object && self, He = Is || dv || Function("return this")(), fo = n && !n.nodeType && n, _r = fo && !0 && t && !t.nodeType && t, Ns = _r && _r.exports === fo, mo = Ns && Is.process, ht = function() {
      try {
        var p = _r && _r.require && _r.require("util").types;
        return p || mo && mo.binding && mo.binding("util");
      } catch {
      }
    }(), Hs = ht && ht.isArrayBuffer, Rs = ht && ht.isDate, Ls = ht && ht.isMap, Bs = ht && ht.isRegExp, Vs = ht && ht.isSet, qs = ht && ht.isTypedArray;
    function lt(p, M, P) {
      switch (P.length) {
        case 0:
          return p.call(M);
        case 1:
          return p.call(M, P[0]);
        case 2:
          return p.call(M, P[0], P[1]);
        case 3:
          return p.call(M, P[0], P[1], P[2]);
      }
      return p.apply(M, P);
    }
    function cv(p, M, P, B) {
      for (var J = -1, pe = p == null ? 0 : p.length; ++J < pe; ) {
        var Fe = p[J];
        M(B, Fe, P(Fe), p);
      }
      return B;
    }
    function vt(p, M) {
      for (var P = -1, B = p == null ? 0 : p.length; ++P < B && M(p[P], P, p) !== !1; )
        ;
      return p;
    }
    function fv(p, M) {
      for (var P = p == null ? 0 : p.length; P-- && M(p[P], P, p) !== !1; )
        ;
      return p;
    }
    function Xs(p, M) {
      for (var P = -1, B = p == null ? 0 : p.length; ++P < B; )
        if (!M(p[P], P, p))
          return !1;
      return !0;
    }
    function ar(p, M) {
      for (var P = -1, B = p == null ? 0 : p.length, J = 0, pe = []; ++P < B; ) {
        var Fe = p[P];
        M(Fe, P, p) && (pe[J++] = Fe);
      }
      return pe;
    }
    function ia(p, M) {
      var P = p == null ? 0 : p.length;
      return !!P && Xr(p, M, 0) > -1;
    }
    function ho(p, M, P) {
      for (var B = -1, J = p == null ? 0 : p.length; ++B < J; )
        if (P(M, p[B]))
          return !0;
      return !1;
    }
    function ke(p, M) {
      for (var P = -1, B = p == null ? 0 : p.length, J = Array(B); ++P < B; )
        J[P] = M(p[P], P, p);
      return J;
    }
    function ir(p, M) {
      for (var P = -1, B = M.length, J = p.length; ++P < B; )
        p[J + P] = M[P];
      return p;
    }
    function vo(p, M, P, B) {
      var J = -1, pe = p == null ? 0 : p.length;
      for (B && pe && (P = p[++J]); ++J < pe; )
        P = M(P, p[J], J, p);
      return P;
    }
    function mv(p, M, P, B) {
      var J = p == null ? 0 : p.length;
      for (B && J && (P = p[--J]); J--; )
        P = M(P, p[J], J, p);
      return P;
    }
    function po(p, M) {
      for (var P = -1, B = p == null ? 0 : p.length; ++P < B; )
        if (M(p[P], P, p))
          return !0;
      return !1;
    }
    var hv = go("length");
    function vv(p) {
      return p.split("");
    }
    function pv(p) {
      return p.match($h) || [];
    }
    function Ks(p, M, P) {
      var B;
      return P(p, function(J, pe, Fe) {
        if (M(J, pe, Fe))
          return B = pe, !1;
      }), B;
    }
    function oa(p, M, P, B) {
      for (var J = p.length, pe = P + (B ? 1 : -1); B ? pe-- : ++pe < J; )
        if (M(p[pe], pe, p))
          return pe;
      return -1;
    }
    function Xr(p, M, P) {
      return M === M ? Cv(p, M, P) : oa(p, Gs, P);
    }
    function gv(p, M, P, B) {
      for (var J = P - 1, pe = p.length; ++J < pe; )
        if (B(p[J], M))
          return J;
      return -1;
    }
    function Gs(p) {
      return p !== p;
    }
    function Us(p, M) {
      var P = p == null ? 0 : p.length;
      return P ? bo(p, M) / P : Le;
    }
    function go(p) {
      return function(M) {
        return M == null ? a : M[p];
      };
    }
    function yo(p) {
      return function(M) {
        return p == null ? a : p[M];
      };
    }
    function Ys(p, M, P, B, J) {
      return J(p, function(pe, Fe, Me) {
        P = B ? (B = !1, pe) : M(P, pe, Fe, Me);
      }), P;
    }
    function yv(p, M) {
      var P = p.length;
      for (p.sort(M); P--; )
        p[P] = p[P].value;
      return p;
    }
    function bo(p, M) {
      for (var P, B = -1, J = p.length; ++B < J; ) {
        var pe = M(p[B]);
        pe !== a && (P = P === a ? pe : P + pe);
      }
      return P;
    }
    function wo(p, M) {
      for (var P = -1, B = Array(p); ++P < p; )
        B[P] = M(P);
      return B;
    }
    function bv(p, M) {
      return ke(M, function(P) {
        return [P, p[P]];
      });
    }
    function Zs(p) {
      return p && p.slice(0, td(p) + 1).replace(io, "");
    }
    function ut(p) {
      return function(M) {
        return p(M);
      };
    }
    function Po(p, M) {
      return ke(M, function(P) {
        return p[P];
      });
    }
    function Mn(p, M) {
      return p.has(M);
    }
    function Js(p, M) {
      for (var P = -1, B = p.length; ++P < B && Xr(M, p[P], 0) > -1; )
        ;
      return P;
    }
    function Qs(p, M) {
      for (var P = p.length; P-- && Xr(M, p[P], 0) > -1; )
        ;
      return P;
    }
    function wv(p, M) {
      for (var P = p.length, B = 0; P--; )
        p[P] === M && ++B;
      return B;
    }
    var Pv = yo(av), Mv = yo(iv);
    function _v(p) {
      return "\\" + lv[p];
    }
    function $v(p, M) {
      return p == null ? a : p[M];
    }
    function Kr(p) {
      return ev.test(p);
    }
    function Tv(p) {
      return tv.test(p);
    }
    function kv(p) {
      for (var M, P = []; !(M = p.next()).done; )
        P.push(M.value);
      return P;
    }
    function Mo(p) {
      var M = -1, P = Array(p.size);
      return p.forEach(function(B, J) {
        P[++M] = [J, B];
      }), P;
    }
    function ed(p, M) {
      return function(P) {
        return p(M(P));
      };
    }
    function or(p, M) {
      for (var P = -1, B = p.length, J = 0, pe = []; ++P < B; ) {
        var Fe = p[P];
        (Fe === M || Fe === $) && (p[P] = $, pe[J++] = P);
      }
      return pe;
    }
    function la(p) {
      var M = -1, P = Array(p.size);
      return p.forEach(function(B) {
        P[++M] = B;
      }), P;
    }
    function Sv(p) {
      var M = -1, P = Array(p.size);
      return p.forEach(function(B) {
        P[++M] = [B, B];
      }), P;
    }
    function Cv(p, M, P) {
      for (var B = P - 1, J = p.length; ++B < J; )
        if (p[B] === M)
          return B;
      return -1;
    }
    function Dv(p, M, P) {
      for (var B = P + 1; B--; )
        if (p[B] === M)
          return B;
      return B;
    }
    function Gr(p) {
      return Kr(p) ? xv(p) : hv(p);
    }
    function Tt(p) {
      return Kr(p) ? Ov(p) : vv(p);
    }
    function td(p) {
      for (var M = p.length; M-- && wh.test(p.charAt(M)); )
        ;
      return M;
    }
    var Wv = yo(ov);
    function xv(p) {
      for (var M = co.lastIndex = 0; co.test(p); )
        ++M;
      return M;
    }
    function Ov(p) {
      return p.match(co) || [];
    }
    function zv(p) {
      return p.match(Qh) || [];
    }
    var Ev = function p(M) {
      M = M == null ? He : Ur.defaults(He.Object(), M, Ur.pick(He, rv));
      var P = M.Array, B = M.Date, J = M.Error, pe = M.Function, Fe = M.Math, Me = M.Object, _o = M.RegExp, jv = M.String, pt = M.TypeError, ua = P.prototype, Av = pe.prototype, Yr = Me.prototype, sa = M["__core-js_shared__"], da = Av.toString, we = Yr.hasOwnProperty, Fv = 0, rd = function() {
        var e = /[^.]+$/.exec(sa && sa.keys && sa.keys.IE_PROTO || "");
        return e ? "Symbol(src)_1." + e : "";
      }(), ca = Yr.toString, Iv = da.call(Me), Nv = He._, Hv = _o(
        "^" + da.call(we).replace(ao, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), fa = Ns ? M.Buffer : a, lr = M.Symbol, ma = M.Uint8Array, nd = fa ? fa.allocUnsafe : a, ha = ed(Me.getPrototypeOf, Me), ad = Me.create, id = Yr.propertyIsEnumerable, va = ua.splice, od = lr ? lr.isConcatSpreadable : a, _n = lr ? lr.iterator : a, $r = lr ? lr.toStringTag : a, pa = function() {
        try {
          var e = Dr(Me, "defineProperty");
          return e({}, "", {}), e;
        } catch {
        }
      }(), Rv = M.clearTimeout !== He.clearTimeout && M.clearTimeout, Lv = B && B.now !== He.Date.now && B.now, Bv = M.setTimeout !== He.setTimeout && M.setTimeout, ga = Fe.ceil, ya = Fe.floor, $o = Me.getOwnPropertySymbols, Vv = fa ? fa.isBuffer : a, ld = M.isFinite, qv = ua.join, Xv = ed(Me.keys, Me), Ie = Fe.max, Be = Fe.min, Kv = B.now, Gv = M.parseInt, ud = Fe.random, Uv = ua.reverse, To = Dr(M, "DataView"), $n = Dr(M, "Map"), ko = Dr(M, "Promise"), Zr = Dr(M, "Set"), Tn = Dr(M, "WeakMap"), kn = Dr(Me, "create"), ba = Tn && new Tn(), Jr = {}, Yv = Wr(To), Zv = Wr($n), Jv = Wr(ko), Qv = Wr(Zr), ep = Wr(Tn), wa = lr ? lr.prototype : a, Sn = wa ? wa.valueOf : a, sd = wa ? wa.toString : a;
      function c(e) {
        if (We(e) && !ee(e) && !(e instanceof de)) {
          if (e instanceof gt)
            return e;
          if (we.call(e, "__wrapped__"))
            return dc(e);
        }
        return new gt(e);
      }
      var Qr = function() {
        function e() {
        }
        return function(r) {
          if (!Se(r))
            return {};
          if (ad)
            return ad(r);
          e.prototype = r;
          var i = new e();
          return e.prototype = a, i;
        };
      }();
      function Pa() {
      }
      function gt(e, r) {
        this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!r, this.__index__ = 0, this.__values__ = a;
      }
      c.templateSettings = {
        /**
         * Used to detect `data` property values to be HTML-escaped.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        escape: hh,
        /**
         * Used to detect code to be evaluated.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        evaluate: vh,
        /**
         * Used to detect `data` property values to inject.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        interpolate: ys,
        /**
         * Used to reference the data object in the template text.
         *
         * @memberOf _.templateSettings
         * @type {string}
         */
        variable: "",
        /**
         * Used to import variables into the compiled template.
         *
         * @memberOf _.templateSettings
         * @type {Object}
         */
        imports: {
          /**
           * A reference to the `lodash` function.
           *
           * @memberOf _.templateSettings.imports
           * @type {Function}
           */
          _: c
        }
      }, c.prototype = Pa.prototype, c.prototype.constructor = c, gt.prototype = Qr(Pa.prototype), gt.prototype.constructor = gt;
      function de(e) {
        this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = $e, this.__views__ = [];
      }
      function tp() {
        var e = new de(this.__wrapped__);
        return e.__actions__ = Je(this.__actions__), e.__dir__ = this.__dir__, e.__filtered__ = this.__filtered__, e.__iteratees__ = Je(this.__iteratees__), e.__takeCount__ = this.__takeCount__, e.__views__ = Je(this.__views__), e;
      }
      function rp() {
        if (this.__filtered__) {
          var e = new de(this);
          e.__dir__ = -1, e.__filtered__ = !0;
        } else
          e = this.clone(), e.__dir__ *= -1;
        return e;
      }
      function np() {
        var e = this.__wrapped__.value(), r = this.__dir__, i = ee(e), u = r < 0, s = i ? e.length : 0, f = vg(0, s, this.__views__), h = f.start, v = f.end, g = v - h, k = u ? v : h - 1, S = this.__iteratees__, z = S.length, I = 0, X = Be(g, this.__takeCount__);
        if (!i || !u && s == g && X == g)
          return zd(e, this.__actions__);
        var U = [];
        e:
          for (; g-- && I < X; ) {
            k += r;
            for (var ne = -1, Y = e[k]; ++ne < z; ) {
              var ue = S[ne], me = ue.iteratee, ct = ue.type, Ge = me(Y);
              if (ct == fe)
                Y = Ge;
              else if (!Ge) {
                if (ct == le)
                  continue e;
                break e;
              }
            }
            U[I++] = Y;
          }
        return U;
      }
      de.prototype = Qr(Pa.prototype), de.prototype.constructor = de;
      function Tr(e) {
        var r = -1, i = e == null ? 0 : e.length;
        for (this.clear(); ++r < i; ) {
          var u = e[r];
          this.set(u[0], u[1]);
        }
      }
      function ap() {
        this.__data__ = kn ? kn(null) : {}, this.size = 0;
      }
      function ip(e) {
        var r = this.has(e) && delete this.__data__[e];
        return this.size -= r ? 1 : 0, r;
      }
      function op(e) {
        var r = this.__data__;
        if (kn) {
          var i = r[e];
          return i === y ? a : i;
        }
        return we.call(r, e) ? r[e] : a;
      }
      function lp(e) {
        var r = this.__data__;
        return kn ? r[e] !== a : we.call(r, e);
      }
      function up(e, r) {
        var i = this.__data__;
        return this.size += this.has(e) ? 0 : 1, i[e] = kn && r === a ? y : r, this;
      }
      Tr.prototype.clear = ap, Tr.prototype.delete = ip, Tr.prototype.get = op, Tr.prototype.has = lp, Tr.prototype.set = up;
      function qt(e) {
        var r = -1, i = e == null ? 0 : e.length;
        for (this.clear(); ++r < i; ) {
          var u = e[r];
          this.set(u[0], u[1]);
        }
      }
      function sp() {
        this.__data__ = [], this.size = 0;
      }
      function dp(e) {
        var r = this.__data__, i = Ma(r, e);
        if (i < 0)
          return !1;
        var u = r.length - 1;
        return i == u ? r.pop() : va.call(r, i, 1), --this.size, !0;
      }
      function cp(e) {
        var r = this.__data__, i = Ma(r, e);
        return i < 0 ? a : r[i][1];
      }
      function fp(e) {
        return Ma(this.__data__, e) > -1;
      }
      function mp(e, r) {
        var i = this.__data__, u = Ma(i, e);
        return u < 0 ? (++this.size, i.push([e, r])) : i[u][1] = r, this;
      }
      qt.prototype.clear = sp, qt.prototype.delete = dp, qt.prototype.get = cp, qt.prototype.has = fp, qt.prototype.set = mp;
      function Xt(e) {
        var r = -1, i = e == null ? 0 : e.length;
        for (this.clear(); ++r < i; ) {
          var u = e[r];
          this.set(u[0], u[1]);
        }
      }
      function hp() {
        this.size = 0, this.__data__ = {
          hash: new Tr(),
          map: new ($n || qt)(),
          string: new Tr()
        };
      }
      function vp(e) {
        var r = Ea(this, e).delete(e);
        return this.size -= r ? 1 : 0, r;
      }
      function pp(e) {
        return Ea(this, e).get(e);
      }
      function gp(e) {
        return Ea(this, e).has(e);
      }
      function yp(e, r) {
        var i = Ea(this, e), u = i.size;
        return i.set(e, r), this.size += i.size == u ? 0 : 1, this;
      }
      Xt.prototype.clear = hp, Xt.prototype.delete = vp, Xt.prototype.get = pp, Xt.prototype.has = gp, Xt.prototype.set = yp;
      function kr(e) {
        var r = -1, i = e == null ? 0 : e.length;
        for (this.__data__ = new Xt(); ++r < i; )
          this.add(e[r]);
      }
      function bp(e) {
        return this.__data__.set(e, y), this;
      }
      function wp(e) {
        return this.__data__.has(e);
      }
      kr.prototype.add = kr.prototype.push = bp, kr.prototype.has = wp;
      function kt(e) {
        var r = this.__data__ = new qt(e);
        this.size = r.size;
      }
      function Pp() {
        this.__data__ = new qt(), this.size = 0;
      }
      function Mp(e) {
        var r = this.__data__, i = r.delete(e);
        return this.size = r.size, i;
      }
      function _p(e) {
        return this.__data__.get(e);
      }
      function $p(e) {
        return this.__data__.has(e);
      }
      function Tp(e, r) {
        var i = this.__data__;
        if (i instanceof qt) {
          var u = i.__data__;
          if (!$n || u.length < l - 1)
            return u.push([e, r]), this.size = ++i.size, this;
          i = this.__data__ = new Xt(u);
        }
        return i.set(e, r), this.size = i.size, this;
      }
      kt.prototype.clear = Pp, kt.prototype.delete = Mp, kt.prototype.get = _p, kt.prototype.has = $p, kt.prototype.set = Tp;
      function dd(e, r) {
        var i = ee(e), u = !i && xr(e), s = !i && !u && fr(e), f = !i && !u && !s && nn(e), h = i || u || s || f, v = h ? wo(e.length, jv) : [], g = v.length;
        for (var k in e)
          (r || we.call(e, k)) && !(h && // Safari 9 has enumerable `arguments.length` in strict mode.
          (k == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
          s && (k == "offset" || k == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
          f && (k == "buffer" || k == "byteLength" || k == "byteOffset") || // Skip index properties.
          Yt(k, g))) && v.push(k);
        return v;
      }
      function cd(e) {
        var r = e.length;
        return r ? e[Fo(0, r - 1)] : a;
      }
      function kp(e, r) {
        return ja(Je(e), Sr(r, 0, e.length));
      }
      function Sp(e) {
        return ja(Je(e));
      }
      function So(e, r, i) {
        (i !== a && !St(e[r], i) || i === a && !(r in e)) && Kt(e, r, i);
      }
      function Cn(e, r, i) {
        var u = e[r];
        (!(we.call(e, r) && St(u, i)) || i === a && !(r in e)) && Kt(e, r, i);
      }
      function Ma(e, r) {
        for (var i = e.length; i--; )
          if (St(e[i][0], r))
            return i;
        return -1;
      }
      function Cp(e, r, i, u) {
        return ur(e, function(s, f, h) {
          r(u, s, i(s), h);
        }), u;
      }
      function fd(e, r) {
        return e && Et(r, Ne(r), e);
      }
      function Dp(e, r) {
        return e && Et(r, et(r), e);
      }
      function Kt(e, r, i) {
        r == "__proto__" && pa ? pa(e, r, {
          configurable: !0,
          enumerable: !0,
          value: i,
          writable: !0
        }) : e[r] = i;
      }
      function Co(e, r) {
        for (var i = -1, u = r.length, s = P(u), f = e == null; ++i < u; )
          s[i] = f ? a : ul(e, r[i]);
        return s;
      }
      function Sr(e, r, i) {
        return e === e && (i !== a && (e = e <= i ? e : i), r !== a && (e = e >= r ? e : r)), e;
      }
      function yt(e, r, i, u, s, f) {
        var h, v = r & W, g = r & x, k = r & E;
        if (i && (h = s ? i(e, u, s, f) : i(e)), h !== a)
          return h;
        if (!Se(e))
          return e;
        var S = ee(e);
        if (S) {
          if (h = gg(e), !v)
            return Je(e, h);
        } else {
          var z = Ve(e), I = z == Br || z == ea;
          if (fr(e))
            return Ad(e, v);
          if (z == Vt || z == nr || I && !s) {
            if (h = g || I ? {} : tc(e), !v)
              return g ? og(e, Dp(h, e)) : ig(e, fd(h, e));
          } else {
            if (!_e[z])
              return s ? e : {};
            h = yg(e, z, v);
          }
        }
        f || (f = new kt());
        var X = f.get(e);
        if (X)
          return X;
        f.set(e, h), Wc(e) ? e.forEach(function(Y) {
          h.add(yt(Y, r, i, Y, e, f));
        }) : Cc(e) && e.forEach(function(Y, ue) {
          h.set(ue, yt(Y, r, i, ue, e, f));
        });
        var U = k ? g ? Go : Ko : g ? et : Ne, ne = S ? a : U(e);
        return vt(ne || e, function(Y, ue) {
          ne && (ue = Y, Y = e[ue]), Cn(h, ue, yt(Y, r, i, ue, e, f));
        }), h;
      }
      function Wp(e) {
        var r = Ne(e);
        return function(i) {
          return md(i, e, r);
        };
      }
      function md(e, r, i) {
        var u = i.length;
        if (e == null)
          return !u;
        for (e = Me(e); u--; ) {
          var s = i[u], f = r[s], h = e[s];
          if (h === a && !(s in e) || !f(h))
            return !1;
        }
        return !0;
      }
      function hd(e, r, i) {
        if (typeof e != "function")
          throw new pt(m);
        return jn(function() {
          e.apply(a, i);
        }, r);
      }
      function Dn(e, r, i, u) {
        var s = -1, f = ia, h = !0, v = e.length, g = [], k = r.length;
        if (!v)
          return g;
        i && (r = ke(r, ut(i))), u ? (f = ho, h = !1) : r.length >= l && (f = Mn, h = !1, r = new kr(r));
        e:
          for (; ++s < v; ) {
            var S = e[s], z = i == null ? S : i(S);
            if (S = u || S !== 0 ? S : 0, h && z === z) {
              for (var I = k; I--; )
                if (r[I] === z)
                  continue e;
              g.push(S);
            } else
              f(r, z, u) || g.push(S);
          }
        return g;
      }
      var ur = Rd(zt), vd = Rd(Wo, !0);
      function xp(e, r) {
        var i = !0;
        return ur(e, function(u, s, f) {
          return i = !!r(u, s, f), i;
        }), i;
      }
      function _a(e, r, i) {
        for (var u = -1, s = e.length; ++u < s; ) {
          var f = e[u], h = r(f);
          if (h != null && (v === a ? h === h && !dt(h) : i(h, v)))
            var v = h, g = f;
        }
        return g;
      }
      function Op(e, r, i, u) {
        var s = e.length;
        for (i = te(i), i < 0 && (i = -i > s ? 0 : s + i), u = u === a || u > s ? s : te(u), u < 0 && (u += s), u = i > u ? 0 : Oc(u); i < u; )
          e[i++] = r;
        return e;
      }
      function pd(e, r) {
        var i = [];
        return ur(e, function(u, s, f) {
          r(u, s, f) && i.push(u);
        }), i;
      }
      function Re(e, r, i, u, s) {
        var f = -1, h = e.length;
        for (i || (i = wg), s || (s = []); ++f < h; ) {
          var v = e[f];
          r > 0 && i(v) ? r > 1 ? Re(v, r - 1, i, u, s) : ir(s, v) : u || (s[s.length] = v);
        }
        return s;
      }
      var Do = Ld(), gd = Ld(!0);
      function zt(e, r) {
        return e && Do(e, r, Ne);
      }
      function Wo(e, r) {
        return e && gd(e, r, Ne);
      }
      function $a(e, r) {
        return ar(r, function(i) {
          return Zt(e[i]);
        });
      }
      function Cr(e, r) {
        r = dr(r, e);
        for (var i = 0, u = r.length; e != null && i < u; )
          e = e[jt(r[i++])];
        return i && i == u ? e : a;
      }
      function yd(e, r, i) {
        var u = r(e);
        return ee(e) ? u : ir(u, i(e));
      }
      function Xe(e) {
        return e == null ? e === a ? lh : ih : $r && $r in Me(e) ? hg(e) : Sg(e);
      }
      function xo(e, r) {
        return e > r;
      }
      function zp(e, r) {
        return e != null && we.call(e, r);
      }
      function Ep(e, r) {
        return e != null && r in Me(e);
      }
      function jp(e, r, i) {
        return e >= Be(r, i) && e < Ie(r, i);
      }
      function Oo(e, r, i) {
        for (var u = i ? ho : ia, s = e[0].length, f = e.length, h = f, v = P(f), g = 1 / 0, k = []; h--; ) {
          var S = e[h];
          h && r && (S = ke(S, ut(r))), g = Be(S.length, g), v[h] = !i && (r || s >= 120 && S.length >= 120) ? new kr(h && S) : a;
        }
        S = e[0];
        var z = -1, I = v[0];
        e:
          for (; ++z < s && k.length < g; ) {
            var X = S[z], U = r ? r(X) : X;
            if (X = i || X !== 0 ? X : 0, !(I ? Mn(I, U) : u(k, U, i))) {
              for (h = f; --h; ) {
                var ne = v[h];
                if (!(ne ? Mn(ne, U) : u(e[h], U, i)))
                  continue e;
              }
              I && I.push(U), k.push(X);
            }
          }
        return k;
      }
      function Ap(e, r, i, u) {
        return zt(e, function(s, f, h) {
          r(u, i(s), f, h);
        }), u;
      }
      function Wn(e, r, i) {
        r = dr(r, e), e = ic(e, r);
        var u = e == null ? e : e[jt(wt(r))];
        return u == null ? a : lt(u, e, i);
      }
      function bd(e) {
        return We(e) && Xe(e) == nr;
      }
      function Fp(e) {
        return We(e) && Xe(e) == Pn;
      }
      function Ip(e) {
        return We(e) && Xe(e) == Mr;
      }
      function xn(e, r, i, u, s) {
        return e === r ? !0 : e == null || r == null || !We(e) && !We(r) ? e !== e && r !== r : Np(e, r, i, u, xn, s);
      }
      function Np(e, r, i, u, s, f) {
        var h = ee(e), v = ee(r), g = h ? Rr : Ve(e), k = v ? Rr : Ve(r);
        g = g == nr ? Vt : g, k = k == nr ? Vt : k;
        var S = g == Vt, z = k == Vt, I = g == k;
        if (I && fr(e)) {
          if (!fr(r))
            return !1;
          h = !0, S = !1;
        }
        if (I && !S)
          return f || (f = new kt()), h || nn(e) ? Jd(e, r, i, u, s, f) : fg(e, r, g, i, u, s, f);
        if (!(i & _)) {
          var X = S && we.call(e, "__wrapped__"), U = z && we.call(r, "__wrapped__");
          if (X || U) {
            var ne = X ? e.value() : e, Y = U ? r.value() : r;
            return f || (f = new kt()), s(ne, Y, i, u, f);
          }
        }
        return I ? (f || (f = new kt()), mg(e, r, i, u, s, f)) : !1;
      }
      function Hp(e) {
        return We(e) && Ve(e) == ot;
      }
      function zo(e, r, i, u) {
        var s = i.length, f = s, h = !u;
        if (e == null)
          return !f;
        for (e = Me(e); s--; ) {
          var v = i[s];
          if (h && v[2] ? v[1] !== e[v[0]] : !(v[0] in e))
            return !1;
        }
        for (; ++s < f; ) {
          v = i[s];
          var g = v[0], k = e[g], S = v[1];
          if (h && v[2]) {
            if (k === a && !(g in e))
              return !1;
          } else {
            var z = new kt();
            if (u)
              var I = u(k, S, g, e, r, z);
            if (!(I === a ? xn(S, k, _ | N, u, z) : I))
              return !1;
          }
        }
        return !0;
      }
      function wd(e) {
        if (!Se(e) || Mg(e))
          return !1;
        var r = Zt(e) ? Hv : Wh;
        return r.test(Wr(e));
      }
      function Rp(e) {
        return We(e) && Xe(e) == yn;
      }
      function Lp(e) {
        return We(e) && Ve(e) == $t;
      }
      function Bp(e) {
        return We(e) && Ra(e.length) && !!Te[Xe(e)];
      }
      function Pd(e) {
        return typeof e == "function" ? e : e == null ? tt : typeof e == "object" ? ee(e) ? $d(e[0], e[1]) : _d(e) : Bc(e);
      }
      function Eo(e) {
        if (!En(e))
          return Xv(e);
        var r = [];
        for (var i in Me(e))
          we.call(e, i) && i != "constructor" && r.push(i);
        return r;
      }
      function Vp(e) {
        if (!Se(e))
          return kg(e);
        var r = En(e), i = [];
        for (var u in e)
          u == "constructor" && (r || !we.call(e, u)) || i.push(u);
        return i;
      }
      function jo(e, r) {
        return e < r;
      }
      function Md(e, r) {
        var i = -1, u = Qe(e) ? P(e.length) : [];
        return ur(e, function(s, f, h) {
          u[++i] = r(s, f, h);
        }), u;
      }
      function _d(e) {
        var r = Yo(e);
        return r.length == 1 && r[0][2] ? nc(r[0][0], r[0][1]) : function(i) {
          return i === e || zo(i, e, r);
        };
      }
      function $d(e, r) {
        return Jo(e) && rc(r) ? nc(jt(e), r) : function(i) {
          var u = ul(i, e);
          return u === a && u === r ? sl(i, e) : xn(r, u, _ | N);
        };
      }
      function Ta(e, r, i, u, s) {
        e !== r && Do(r, function(f, h) {
          if (s || (s = new kt()), Se(f))
            qp(e, r, h, i, Ta, u, s);
          else {
            var v = u ? u(el(e, h), f, h + "", e, r, s) : a;
            v === a && (v = f), So(e, h, v);
          }
        }, et);
      }
      function qp(e, r, i, u, s, f, h) {
        var v = el(e, i), g = el(r, i), k = h.get(g);
        if (k) {
          So(e, i, k);
          return;
        }
        var S = f ? f(v, g, i + "", e, r, h) : a, z = S === a;
        if (z) {
          var I = ee(g), X = !I && fr(g), U = !I && !X && nn(g);
          S = g, I || X || U ? ee(v) ? S = v : Oe(v) ? S = Je(v) : X ? (z = !1, S = Ad(g, !0)) : U ? (z = !1, S = Fd(g, !0)) : S = [] : An(g) || xr(g) ? (S = v, xr(v) ? S = zc(v) : (!Se(v) || Zt(v)) && (S = tc(g))) : z = !1;
        }
        z && (h.set(g, S), s(S, g, u, f, h), h.delete(g)), So(e, i, S);
      }
      function Td(e, r) {
        var i = e.length;
        if (i)
          return r += r < 0 ? i : 0, Yt(r, i) ? e[r] : a;
      }
      function kd(e, r, i) {
        r.length ? r = ke(r, function(f) {
          return ee(f) ? function(h) {
            return Cr(h, f.length === 1 ? f[0] : f);
          } : f;
        }) : r = [tt];
        var u = -1;
        r = ke(r, ut(G()));
        var s = Md(e, function(f, h, v) {
          var g = ke(r, function(k) {
            return k(f);
          });
          return { criteria: g, index: ++u, value: f };
        });
        return yv(s, function(f, h) {
          return ag(f, h, i);
        });
      }
      function Xp(e, r) {
        return Sd(e, r, function(i, u) {
          return sl(e, u);
        });
      }
      function Sd(e, r, i) {
        for (var u = -1, s = r.length, f = {}; ++u < s; ) {
          var h = r[u], v = Cr(e, h);
          i(v, h) && On(f, dr(h, e), v);
        }
        return f;
      }
      function Kp(e) {
        return function(r) {
          return Cr(r, e);
        };
      }
      function Ao(e, r, i, u) {
        var s = u ? gv : Xr, f = -1, h = r.length, v = e;
        for (e === r && (r = Je(r)), i && (v = ke(e, ut(i))); ++f < h; )
          for (var g = 0, k = r[f], S = i ? i(k) : k; (g = s(v, S, g, u)) > -1; )
            v !== e && va.call(v, g, 1), va.call(e, g, 1);
        return e;
      }
      function Cd(e, r) {
        for (var i = e ? r.length : 0, u = i - 1; i--; ) {
          var s = r[i];
          if (i == u || s !== f) {
            var f = s;
            Yt(s) ? va.call(e, s, 1) : Ho(e, s);
          }
        }
        return e;
      }
      function Fo(e, r) {
        return e + ya(ud() * (r - e + 1));
      }
      function Gp(e, r, i, u) {
        for (var s = -1, f = Ie(ga((r - e) / (i || 1)), 0), h = P(f); f--; )
          h[u ? f : ++s] = e, e += i;
        return h;
      }
      function Io(e, r) {
        var i = "";
        if (!e || r < 1 || r > he)
          return i;
        do
          r % 2 && (i += e), r = ya(r / 2), r && (e += e);
        while (r);
        return i;
      }
      function ie(e, r) {
        return tl(ac(e, r, tt), e + "");
      }
      function Up(e) {
        return cd(an(e));
      }
      function Yp(e, r) {
        var i = an(e);
        return ja(i, Sr(r, 0, i.length));
      }
      function On(e, r, i, u) {
        if (!Se(e))
          return e;
        r = dr(r, e);
        for (var s = -1, f = r.length, h = f - 1, v = e; v != null && ++s < f; ) {
          var g = jt(r[s]), k = i;
          if (g === "__proto__" || g === "constructor" || g === "prototype")
            return e;
          if (s != h) {
            var S = v[g];
            k = u ? u(S, g, v) : a, k === a && (k = Se(S) ? S : Yt(r[s + 1]) ? [] : {});
          }
          Cn(v, g, k), v = v[g];
        }
        return e;
      }
      var Dd = ba ? function(e, r) {
        return ba.set(e, r), e;
      } : tt, Zp = pa ? function(e, r) {
        return pa(e, "toString", {
          configurable: !0,
          enumerable: !1,
          value: cl(r),
          writable: !0
        });
      } : tt;
      function Jp(e) {
        return ja(an(e));
      }
      function bt(e, r, i) {
        var u = -1, s = e.length;
        r < 0 && (r = -r > s ? 0 : s + r), i = i > s ? s : i, i < 0 && (i += s), s = r > i ? 0 : i - r >>> 0, r >>>= 0;
        for (var f = P(s); ++u < s; )
          f[u] = e[u + r];
        return f;
      }
      function Qp(e, r) {
        var i;
        return ur(e, function(u, s, f) {
          return i = r(u, s, f), !i;
        }), !!i;
      }
      function ka(e, r, i) {
        var u = 0, s = e == null ? u : e.length;
        if (typeof r == "number" && r === r && s <= wr) {
          for (; u < s; ) {
            var f = u + s >>> 1, h = e[f];
            h !== null && !dt(h) && (i ? h <= r : h < r) ? u = f + 1 : s = f;
          }
          return s;
        }
        return No(e, r, tt, i);
      }
      function No(e, r, i, u) {
        var s = 0, f = e == null ? 0 : e.length;
        if (f === 0)
          return 0;
        r = i(r);
        for (var h = r !== r, v = r === null, g = dt(r), k = r === a; s < f; ) {
          var S = ya((s + f) / 2), z = i(e[S]), I = z !== a, X = z === null, U = z === z, ne = dt(z);
          if (h)
            var Y = u || U;
          else
            k ? Y = U && (u || I) : v ? Y = U && I && (u || !X) : g ? Y = U && I && !X && (u || !ne) : X || ne ? Y = !1 : Y = u ? z <= r : z < r;
          Y ? s = S + 1 : f = S;
        }
        return Be(f, it);
      }
      function Wd(e, r) {
        for (var i = -1, u = e.length, s = 0, f = []; ++i < u; ) {
          var h = e[i], v = r ? r(h) : h;
          if (!i || !St(v, g)) {
            var g = v;
            f[s++] = h === 0 ? 0 : h;
          }
        }
        return f;
      }
      function xd(e) {
        return typeof e == "number" ? e : dt(e) ? Le : +e;
      }
      function st(e) {
        if (typeof e == "string")
          return e;
        if (ee(e))
          return ke(e, st) + "";
        if (dt(e))
          return sd ? sd.call(e) : "";
        var r = e + "";
        return r == "0" && 1 / e == -se ? "-0" : r;
      }
      function sr(e, r, i) {
        var u = -1, s = ia, f = e.length, h = !0, v = [], g = v;
        if (i)
          h = !1, s = ho;
        else if (f >= l) {
          var k = r ? null : dg(e);
          if (k)
            return la(k);
          h = !1, s = Mn, g = new kr();
        } else
          g = r ? [] : v;
        e:
          for (; ++u < f; ) {
            var S = e[u], z = r ? r(S) : S;
            if (S = i || S !== 0 ? S : 0, h && z === z) {
              for (var I = g.length; I--; )
                if (g[I] === z)
                  continue e;
              r && g.push(z), v.push(S);
            } else
              s(g, z, i) || (g !== v && g.push(z), v.push(S));
          }
        return v;
      }
      function Ho(e, r) {
        return r = dr(r, e), e = ic(e, r), e == null || delete e[jt(wt(r))];
      }
      function Od(e, r, i, u) {
        return On(e, r, i(Cr(e, r)), u);
      }
      function Sa(e, r, i, u) {
        for (var s = e.length, f = u ? s : -1; (u ? f-- : ++f < s) && r(e[f], f, e); )
          ;
        return i ? bt(e, u ? 0 : f, u ? f + 1 : s) : bt(e, u ? f + 1 : 0, u ? s : f);
      }
      function zd(e, r) {
        var i = e;
        return i instanceof de && (i = i.value()), vo(r, function(u, s) {
          return s.func.apply(s.thisArg, ir([u], s.args));
        }, i);
      }
      function Ro(e, r, i) {
        var u = e.length;
        if (u < 2)
          return u ? sr(e[0]) : [];
        for (var s = -1, f = P(u); ++s < u; )
          for (var h = e[s], v = -1; ++v < u; )
            v != s && (f[s] = Dn(f[s] || h, e[v], r, i));
        return sr(Re(f, 1), r, i);
      }
      function Ed(e, r, i) {
        for (var u = -1, s = e.length, f = r.length, h = {}; ++u < s; ) {
          var v = u < f ? r[u] : a;
          i(h, e[u], v);
        }
        return h;
      }
      function Lo(e) {
        return Oe(e) ? e : [];
      }
      function Bo(e) {
        return typeof e == "function" ? e : tt;
      }
      function dr(e, r) {
        return ee(e) ? e : Jo(e, r) ? [e] : sc(ye(e));
      }
      var eg = ie;
      function cr(e, r, i) {
        var u = e.length;
        return i = i === a ? u : i, !r && i >= u ? e : bt(e, r, i);
      }
      var jd = Rv || function(e) {
        return He.clearTimeout(e);
      };
      function Ad(e, r) {
        if (r)
          return e.slice();
        var i = e.length, u = nd ? nd(i) : new e.constructor(i);
        return e.copy(u), u;
      }
      function Vo(e) {
        var r = new e.constructor(e.byteLength);
        return new ma(r).set(new ma(e)), r;
      }
      function tg(e, r) {
        var i = r ? Vo(e.buffer) : e.buffer;
        return new e.constructor(i, e.byteOffset, e.byteLength);
      }
      function rg(e) {
        var r = new e.constructor(e.source, bs.exec(e));
        return r.lastIndex = e.lastIndex, r;
      }
      function ng(e) {
        return Sn ? Me(Sn.call(e)) : {};
      }
      function Fd(e, r) {
        var i = r ? Vo(e.buffer) : e.buffer;
        return new e.constructor(i, e.byteOffset, e.length);
      }
      function Id(e, r) {
        if (e !== r) {
          var i = e !== a, u = e === null, s = e === e, f = dt(e), h = r !== a, v = r === null, g = r === r, k = dt(r);
          if (!v && !k && !f && e > r || f && h && g && !v && !k || u && h && g || !i && g || !s)
            return 1;
          if (!u && !f && !k && e < r || k && i && s && !u && !f || v && i && s || !h && s || !g)
            return -1;
        }
        return 0;
      }
      function ag(e, r, i) {
        for (var u = -1, s = e.criteria, f = r.criteria, h = s.length, v = i.length; ++u < h; ) {
          var g = Id(s[u], f[u]);
          if (g) {
            if (u >= v)
              return g;
            var k = i[u];
            return g * (k == "desc" ? -1 : 1);
          }
        }
        return e.index - r.index;
      }
      function Nd(e, r, i, u) {
        for (var s = -1, f = e.length, h = i.length, v = -1, g = r.length, k = Ie(f - h, 0), S = P(g + k), z = !u; ++v < g; )
          S[v] = r[v];
        for (; ++s < h; )
          (z || s < f) && (S[i[s]] = e[s]);
        for (; k--; )
          S[v++] = e[s++];
        return S;
      }
      function Hd(e, r, i, u) {
        for (var s = -1, f = e.length, h = -1, v = i.length, g = -1, k = r.length, S = Ie(f - v, 0), z = P(S + k), I = !u; ++s < S; )
          z[s] = e[s];
        for (var X = s; ++g < k; )
          z[X + g] = r[g];
        for (; ++h < v; )
          (I || s < f) && (z[X + i[h]] = e[s++]);
        return z;
      }
      function Je(e, r) {
        var i = -1, u = e.length;
        for (r || (r = P(u)); ++i < u; )
          r[i] = e[i];
        return r;
      }
      function Et(e, r, i, u) {
        var s = !i;
        i || (i = {});
        for (var f = -1, h = r.length; ++f < h; ) {
          var v = r[f], g = u ? u(i[v], e[v], v, i, e) : a;
          g === a && (g = e[v]), s ? Kt(i, v, g) : Cn(i, v, g);
        }
        return i;
      }
      function ig(e, r) {
        return Et(e, Zo(e), r);
      }
      function og(e, r) {
        return Et(e, Qd(e), r);
      }
      function Ca(e, r) {
        return function(i, u) {
          var s = ee(i) ? cv : Cp, f = r ? r() : {};
          return s(i, e, G(u, 2), f);
        };
      }
      function en(e) {
        return ie(function(r, i) {
          var u = -1, s = i.length, f = s > 1 ? i[s - 1] : a, h = s > 2 ? i[2] : a;
          for (f = e.length > 3 && typeof f == "function" ? (s--, f) : a, h && Ke(i[0], i[1], h) && (f = s < 3 ? a : f, s = 1), r = Me(r); ++u < s; ) {
            var v = i[u];
            v && e(r, v, u, f);
          }
          return r;
        });
      }
      function Rd(e, r) {
        return function(i, u) {
          if (i == null)
            return i;
          if (!Qe(i))
            return e(i, u);
          for (var s = i.length, f = r ? s : -1, h = Me(i); (r ? f-- : ++f < s) && u(h[f], f, h) !== !1; )
            ;
          return i;
        };
      }
      function Ld(e) {
        return function(r, i, u) {
          for (var s = -1, f = Me(r), h = u(r), v = h.length; v--; ) {
            var g = h[e ? v : ++s];
            if (i(f[g], g, f) === !1)
              break;
          }
          return r;
        };
      }
      function lg(e, r, i) {
        var u = r & O, s = zn(e);
        function f() {
          var h = this && this !== He && this instanceof f ? s : e;
          return h.apply(u ? i : this, arguments);
        }
        return f;
      }
      function Bd(e) {
        return function(r) {
          r = ye(r);
          var i = Kr(r) ? Tt(r) : a, u = i ? i[0] : r.charAt(0), s = i ? cr(i, 1).join("") : r.slice(1);
          return u[e]() + s;
        };
      }
      function tn(e) {
        return function(r) {
          return vo(Rc(Hc(r).replace(Zh, "")), e, "");
        };
      }
      function zn(e) {
        return function() {
          var r = arguments;
          switch (r.length) {
            case 0:
              return new e();
            case 1:
              return new e(r[0]);
            case 2:
              return new e(r[0], r[1]);
            case 3:
              return new e(r[0], r[1], r[2]);
            case 4:
              return new e(r[0], r[1], r[2], r[3]);
            case 5:
              return new e(r[0], r[1], r[2], r[3], r[4]);
            case 6:
              return new e(r[0], r[1], r[2], r[3], r[4], r[5]);
            case 7:
              return new e(r[0], r[1], r[2], r[3], r[4], r[5], r[6]);
          }
          var i = Qr(e.prototype), u = e.apply(i, r);
          return Se(u) ? u : i;
        };
      }
      function ug(e, r, i) {
        var u = zn(e);
        function s() {
          for (var f = arguments.length, h = P(f), v = f, g = rn(s); v--; )
            h[v] = arguments[v];
          var k = f < 3 && h[0] !== g && h[f - 1] !== g ? [] : or(h, g);
          if (f -= k.length, f < i)
            return Gd(
              e,
              r,
              Da,
              s.placeholder,
              a,
              h,
              k,
              a,
              a,
              i - f
            );
          var S = this && this !== He && this instanceof s ? u : e;
          return lt(S, this, h);
        }
        return s;
      }
      function Vd(e) {
        return function(r, i, u) {
          var s = Me(r);
          if (!Qe(r)) {
            var f = G(i, 3);
            r = Ne(r), i = function(v) {
              return f(s[v], v, s);
            };
          }
          var h = e(r, i, u);
          return h > -1 ? s[f ? r[h] : h] : a;
        };
      }
      function qd(e) {
        return Ut(function(r) {
          var i = r.length, u = i, s = gt.prototype.thru;
          for (e && r.reverse(); u--; ) {
            var f = r[u];
            if (typeof f != "function")
              throw new pt(m);
            if (s && !h && za(f) == "wrapper")
              var h = new gt([], !0);
          }
          for (u = h ? u : i; ++u < i; ) {
            f = r[u];
            var v = za(f), g = v == "wrapper" ? Uo(f) : a;
            g && Qo(g[0]) && g[1] == (j | Q | oe | A) && !g[4].length && g[9] == 1 ? h = h[za(g[0])].apply(h, g[3]) : h = f.length == 1 && Qo(f) ? h[v]() : h.thru(f);
          }
          return function() {
            var k = arguments, S = k[0];
            if (h && k.length == 1 && ee(S))
              return h.plant(S).value();
            for (var z = 0, I = i ? r[z].apply(this, k) : S; ++z < i; )
              I = r[z].call(this, I);
            return I;
          };
        });
      }
      function Da(e, r, i, u, s, f, h, v, g, k) {
        var S = r & j, z = r & O, I = r & T, X = r & (Q | ae), U = r & Z, ne = I ? a : zn(e);
        function Y() {
          for (var ue = arguments.length, me = P(ue), ct = ue; ct--; )
            me[ct] = arguments[ct];
          if (X)
            var Ge = rn(Y), ft = wv(me, Ge);
          if (u && (me = Nd(me, u, s, X)), f && (me = Hd(me, f, h, X)), ue -= ft, X && ue < k) {
            var ze = or(me, Ge);
            return Gd(
              e,
              r,
              Da,
              Y.placeholder,
              i,
              me,
              ze,
              v,
              g,
              k - ue
            );
          }
          var Ct = z ? i : this, Qt = I ? Ct[e] : e;
          return ue = me.length, v ? me = Cg(me, v) : U && ue > 1 && me.reverse(), S && g < ue && (me.length = g), this && this !== He && this instanceof Y && (Qt = ne || zn(Qt)), Qt.apply(Ct, me);
        }
        return Y;
      }
      function Xd(e, r) {
        return function(i, u) {
          return Ap(i, e, r(u), {});
        };
      }
      function Wa(e, r) {
        return function(i, u) {
          var s;
          if (i === a && u === a)
            return r;
          if (i !== a && (s = i), u !== a) {
            if (s === a)
              return u;
            typeof i == "string" || typeof u == "string" ? (i = st(i), u = st(u)) : (i = xd(i), u = xd(u)), s = e(i, u);
          }
          return s;
        };
      }
      function qo(e) {
        return Ut(function(r) {
          return r = ke(r, ut(G())), ie(function(i) {
            var u = this;
            return e(r, function(s) {
              return lt(s, u, i);
            });
          });
        });
      }
      function xa(e, r) {
        r = r === a ? " " : st(r);
        var i = r.length;
        if (i < 2)
          return i ? Io(r, e) : r;
        var u = Io(r, ga(e / Gr(r)));
        return Kr(r) ? cr(Tt(u), 0, e).join("") : u.slice(0, e);
      }
      function sg(e, r, i, u) {
        var s = r & O, f = zn(e);
        function h() {
          for (var v = -1, g = arguments.length, k = -1, S = u.length, z = P(S + g), I = this && this !== He && this instanceof h ? f : e; ++k < S; )
            z[k] = u[k];
          for (; g--; )
            z[k++] = arguments[++v];
          return lt(I, s ? i : this, z);
        }
        return h;
      }
      function Kd(e) {
        return function(r, i, u) {
          return u && typeof u != "number" && Ke(r, i, u) && (i = u = a), r = Jt(r), i === a ? (i = r, r = 0) : i = Jt(i), u = u === a ? r < i ? 1 : -1 : Jt(u), Gp(r, i, u, e);
        };
      }
      function Oa(e) {
        return function(r, i) {
          return typeof r == "string" && typeof i == "string" || (r = Pt(r), i = Pt(i)), e(r, i);
        };
      }
      function Gd(e, r, i, u, s, f, h, v, g, k) {
        var S = r & Q, z = S ? h : a, I = S ? a : h, X = S ? f : a, U = S ? a : f;
        r |= S ? oe : Pe, r &= ~(S ? Pe : oe), r & q || (r &= ~(O | T));
        var ne = [
          e,
          r,
          s,
          X,
          z,
          U,
          I,
          v,
          g,
          k
        ], Y = i.apply(a, ne);
        return Qo(e) && oc(Y, ne), Y.placeholder = u, lc(Y, e, r);
      }
      function Xo(e) {
        var r = Fe[e];
        return function(i, u) {
          if (i = Pt(i), u = u == null ? 0 : Be(te(u), 292), u && ld(i)) {
            var s = (ye(i) + "e").split("e"), f = r(s[0] + "e" + (+s[1] + u));
            return s = (ye(f) + "e").split("e"), +(s[0] + "e" + (+s[1] - u));
          }
          return r(i);
        };
      }
      var dg = Zr && 1 / la(new Zr([, -0]))[1] == se ? function(e) {
        return new Zr(e);
      } : hl;
      function Ud(e) {
        return function(r) {
          var i = Ve(r);
          return i == ot ? Mo(r) : i == $t ? Sv(r) : bv(r, e(r));
        };
      }
      function Gt(e, r, i, u, s, f, h, v) {
        var g = r & T;
        if (!g && typeof e != "function")
          throw new pt(m);
        var k = u ? u.length : 0;
        if (k || (r &= ~(oe | Pe), u = s = a), h = h === a ? h : Ie(te(h), 0), v = v === a ? v : te(v), k -= s ? s.length : 0, r & Pe) {
          var S = u, z = s;
          u = s = a;
        }
        var I = g ? a : Uo(e), X = [
          e,
          r,
          i,
          u,
          s,
          S,
          z,
          f,
          h,
          v
        ];
        if (I && Tg(X, I), e = X[0], r = X[1], i = X[2], u = X[3], s = X[4], v = X[9] = X[9] === a ? g ? 0 : e.length : Ie(X[9] - k, 0), !v && r & (Q | ae) && (r &= ~(Q | ae)), !r || r == O)
          var U = lg(e, r, i);
        else
          r == Q || r == ae ? U = ug(e, r, v) : (r == oe || r == (O | oe)) && !s.length ? U = sg(e, r, i, u) : U = Da.apply(a, X);
        var ne = I ? Dd : oc;
        return lc(ne(U, X), e, r);
      }
      function Yd(e, r, i, u) {
        return e === a || St(e, Yr[i]) && !we.call(u, i) ? r : e;
      }
      function Zd(e, r, i, u, s, f) {
        return Se(e) && Se(r) && (f.set(r, e), Ta(e, r, a, Zd, f), f.delete(r)), e;
      }
      function cg(e) {
        return An(e) ? a : e;
      }
      function Jd(e, r, i, u, s, f) {
        var h = i & _, v = e.length, g = r.length;
        if (v != g && !(h && g > v))
          return !1;
        var k = f.get(e), S = f.get(r);
        if (k && S)
          return k == r && S == e;
        var z = -1, I = !0, X = i & N ? new kr() : a;
        for (f.set(e, r), f.set(r, e); ++z < v; ) {
          var U = e[z], ne = r[z];
          if (u)
            var Y = h ? u(ne, U, z, r, e, f) : u(U, ne, z, e, r, f);
          if (Y !== a) {
            if (Y)
              continue;
            I = !1;
            break;
          }
          if (X) {
            if (!po(r, function(ue, me) {
              if (!Mn(X, me) && (U === ue || s(U, ue, i, u, f)))
                return X.push(me);
            })) {
              I = !1;
              break;
            }
          } else if (!(U === ne || s(U, ne, i, u, f))) {
            I = !1;
            break;
          }
        }
        return f.delete(e), f.delete(r), I;
      }
      function fg(e, r, i, u, s, f, h) {
        switch (i) {
          case Vr:
            if (e.byteLength != r.byteLength || e.byteOffset != r.byteOffset)
              return !1;
            e = e.buffer, r = r.buffer;
          case Pn:
            return !(e.byteLength != r.byteLength || !f(new ma(e), new ma(r)));
          case Pr:
          case Mr:
          case Ot:
            return St(+e, +r);
          case Lr:
            return e.name == r.name && e.message == r.message;
          case yn:
          case bn:
            return e == r + "";
          case ot:
            var v = Mo;
          case $t:
            var g = u & _;
            if (v || (v = la), e.size != r.size && !g)
              return !1;
            var k = h.get(e);
            if (k)
              return k == r;
            u |= N, h.set(e, r);
            var S = Jd(v(e), v(r), u, s, f, h);
            return h.delete(e), S;
          case ta:
            if (Sn)
              return Sn.call(e) == Sn.call(r);
        }
        return !1;
      }
      function mg(e, r, i, u, s, f) {
        var h = i & _, v = Ko(e), g = v.length, k = Ko(r), S = k.length;
        if (g != S && !h)
          return !1;
        for (var z = g; z--; ) {
          var I = v[z];
          if (!(h ? I in r : we.call(r, I)))
            return !1;
        }
        var X = f.get(e), U = f.get(r);
        if (X && U)
          return X == r && U == e;
        var ne = !0;
        f.set(e, r), f.set(r, e);
        for (var Y = h; ++z < g; ) {
          I = v[z];
          var ue = e[I], me = r[I];
          if (u)
            var ct = h ? u(me, ue, I, r, e, f) : u(ue, me, I, e, r, f);
          if (!(ct === a ? ue === me || s(ue, me, i, u, f) : ct)) {
            ne = !1;
            break;
          }
          Y || (Y = I == "constructor");
        }
        if (ne && !Y) {
          var Ge = e.constructor, ft = r.constructor;
          Ge != ft && "constructor" in e && "constructor" in r && !(typeof Ge == "function" && Ge instanceof Ge && typeof ft == "function" && ft instanceof ft) && (ne = !1);
        }
        return f.delete(e), f.delete(r), ne;
      }
      function Ut(e) {
        return tl(ac(e, a, mc), e + "");
      }
      function Ko(e) {
        return yd(e, Ne, Zo);
      }
      function Go(e) {
        return yd(e, et, Qd);
      }
      var Uo = ba ? function(e) {
        return ba.get(e);
      } : hl;
      function za(e) {
        for (var r = e.name + "", i = Jr[r], u = we.call(Jr, r) ? i.length : 0; u--; ) {
          var s = i[u], f = s.func;
          if (f == null || f == e)
            return s.name;
        }
        return r;
      }
      function rn(e) {
        var r = we.call(c, "placeholder") ? c : e;
        return r.placeholder;
      }
      function G() {
        var e = c.iteratee || fl;
        return e = e === fl ? Pd : e, arguments.length ? e(arguments[0], arguments[1]) : e;
      }
      function Ea(e, r) {
        var i = e.__data__;
        return Pg(r) ? i[typeof r == "string" ? "string" : "hash"] : i.map;
      }
      function Yo(e) {
        for (var r = Ne(e), i = r.length; i--; ) {
          var u = r[i], s = e[u];
          r[i] = [u, s, rc(s)];
        }
        return r;
      }
      function Dr(e, r) {
        var i = $v(e, r);
        return wd(i) ? i : a;
      }
      function hg(e) {
        var r = we.call(e, $r), i = e[$r];
        try {
          e[$r] = a;
          var u = !0;
        } catch {
        }
        var s = ca.call(e);
        return u && (r ? e[$r] = i : delete e[$r]), s;
      }
      var Zo = $o ? function(e) {
        return e == null ? [] : (e = Me(e), ar($o(e), function(r) {
          return id.call(e, r);
        }));
      } : vl, Qd = $o ? function(e) {
        for (var r = []; e; )
          ir(r, Zo(e)), e = ha(e);
        return r;
      } : vl, Ve = Xe;
      (To && Ve(new To(new ArrayBuffer(1))) != Vr || $n && Ve(new $n()) != ot || ko && Ve(ko.resolve()) != vs || Zr && Ve(new Zr()) != $t || Tn && Ve(new Tn()) != wn) && (Ve = function(e) {
        var r = Xe(e), i = r == Vt ? e.constructor : a, u = i ? Wr(i) : "";
        if (u)
          switch (u) {
            case Yv:
              return Vr;
            case Zv:
              return ot;
            case Jv:
              return vs;
            case Qv:
              return $t;
            case ep:
              return wn;
          }
        return r;
      });
      function vg(e, r, i) {
        for (var u = -1, s = i.length; ++u < s; ) {
          var f = i[u], h = f.size;
          switch (f.type) {
            case "drop":
              e += h;
              break;
            case "dropRight":
              r -= h;
              break;
            case "take":
              r = Be(r, e + h);
              break;
            case "takeRight":
              e = Ie(e, r - h);
              break;
          }
        }
        return { start: e, end: r };
      }
      function pg(e) {
        var r = e.match(Mh);
        return r ? r[1].split(_h) : [];
      }
      function ec(e, r, i) {
        r = dr(r, e);
        for (var u = -1, s = r.length, f = !1; ++u < s; ) {
          var h = jt(r[u]);
          if (!(f = e != null && i(e, h)))
            break;
          e = e[h];
        }
        return f || ++u != s ? f : (s = e == null ? 0 : e.length, !!s && Ra(s) && Yt(h, s) && (ee(e) || xr(e)));
      }
      function gg(e) {
        var r = e.length, i = new e.constructor(r);
        return r && typeof e[0] == "string" && we.call(e, "index") && (i.index = e.index, i.input = e.input), i;
      }
      function tc(e) {
        return typeof e.constructor == "function" && !En(e) ? Qr(ha(e)) : {};
      }
      function yg(e, r, i) {
        var u = e.constructor;
        switch (r) {
          case Pn:
            return Vo(e);
          case Pr:
          case Mr:
            return new u(+e);
          case Vr:
            return tg(e, i);
          case Ui:
          case Yi:
          case Zi:
          case Ji:
          case Qi:
          case eo:
          case to:
          case ro:
          case no:
            return Fd(e, i);
          case ot:
            return new u();
          case Ot:
          case bn:
            return new u(e);
          case yn:
            return rg(e);
          case $t:
            return new u();
          case ta:
            return ng(e);
        }
      }
      function bg(e, r) {
        var i = r.length;
        if (!i)
          return e;
        var u = i - 1;
        return r[u] = (i > 1 ? "& " : "") + r[u], r = r.join(i > 2 ? ", " : " "), e.replace(Ph, `{
/* [wrapped with ` + r + `] */
`);
      }
      function wg(e) {
        return ee(e) || xr(e) || !!(od && e && e[od]);
      }
      function Yt(e, r) {
        var i = typeof e;
        return r = r ?? he, !!r && (i == "number" || i != "symbol" && Oh.test(e)) && e > -1 && e % 1 == 0 && e < r;
      }
      function Ke(e, r, i) {
        if (!Se(i))
          return !1;
        var u = typeof r;
        return (u == "number" ? Qe(i) && Yt(r, i.length) : u == "string" && r in i) ? St(i[r], e) : !1;
      }
      function Jo(e, r) {
        if (ee(e))
          return !1;
        var i = typeof e;
        return i == "number" || i == "symbol" || i == "boolean" || e == null || dt(e) ? !0 : gh.test(e) || !ph.test(e) || r != null && e in Me(r);
      }
      function Pg(e) {
        var r = typeof e;
        return r == "string" || r == "number" || r == "symbol" || r == "boolean" ? e !== "__proto__" : e === null;
      }
      function Qo(e) {
        var r = za(e), i = c[r];
        if (typeof i != "function" || !(r in de.prototype))
          return !1;
        if (e === i)
          return !0;
        var u = Uo(i);
        return !!u && e === u[0];
      }
      function Mg(e) {
        return !!rd && rd in e;
      }
      var _g = sa ? Zt : pl;
      function En(e) {
        var r = e && e.constructor, i = typeof r == "function" && r.prototype || Yr;
        return e === i;
      }
      function rc(e) {
        return e === e && !Se(e);
      }
      function nc(e, r) {
        return function(i) {
          return i == null ? !1 : i[e] === r && (r !== a || e in Me(i));
        };
      }
      function $g(e) {
        var r = Na(e, function(u) {
          return i.size === w && i.clear(), u;
        }), i = r.cache;
        return r;
      }
      function Tg(e, r) {
        var i = e[1], u = r[1], s = i | u, f = s < (O | T | j), h = u == j && i == Q || u == j && i == A && e[7].length <= r[8] || u == (j | A) && r[7].length <= r[8] && i == Q;
        if (!(f || h))
          return e;
        u & O && (e[2] = r[2], s |= i & O ? 0 : q);
        var v = r[3];
        if (v) {
          var g = e[3];
          e[3] = g ? Nd(g, v, r[4]) : v, e[4] = g ? or(e[3], $) : r[4];
        }
        return v = r[5], v && (g = e[5], e[5] = g ? Hd(g, v, r[6]) : v, e[6] = g ? or(e[5], $) : r[6]), v = r[7], v && (e[7] = v), u & j && (e[8] = e[8] == null ? r[8] : Be(e[8], r[8])), e[9] == null && (e[9] = r[9]), e[0] = r[0], e[1] = s, e;
      }
      function kg(e) {
        var r = [];
        if (e != null)
          for (var i in Me(e))
            r.push(i);
        return r;
      }
      function Sg(e) {
        return ca.call(e);
      }
      function ac(e, r, i) {
        return r = Ie(r === a ? e.length - 1 : r, 0), function() {
          for (var u = arguments, s = -1, f = Ie(u.length - r, 0), h = P(f); ++s < f; )
            h[s] = u[r + s];
          s = -1;
          for (var v = P(r + 1); ++s < r; )
            v[s] = u[s];
          return v[r] = i(h), lt(e, this, v);
        };
      }
      function ic(e, r) {
        return r.length < 2 ? e : Cr(e, bt(r, 0, -1));
      }
      function Cg(e, r) {
        for (var i = e.length, u = Be(r.length, i), s = Je(e); u--; ) {
          var f = r[u];
          e[u] = Yt(f, i) ? s[f] : a;
        }
        return e;
      }
      function el(e, r) {
        if (!(r === "constructor" && typeof e[r] == "function") && r != "__proto__")
          return e[r];
      }
      var oc = uc(Dd), jn = Bv || function(e, r) {
        return He.setTimeout(e, r);
      }, tl = uc(Zp);
      function lc(e, r, i) {
        var u = r + "";
        return tl(e, bg(u, Dg(pg(u), i)));
      }
      function uc(e) {
        var r = 0, i = 0;
        return function() {
          var u = Kv(), s = re - (u - i);
          if (i = u, s > 0) {
            if (++r >= V)
              return arguments[0];
          } else
            r = 0;
          return e.apply(a, arguments);
        };
      }
      function ja(e, r) {
        var i = -1, u = e.length, s = u - 1;
        for (r = r === a ? u : r; ++i < r; ) {
          var f = Fo(i, s), h = e[f];
          e[f] = e[i], e[i] = h;
        }
        return e.length = r, e;
      }
      var sc = $g(function(e) {
        var r = [];
        return e.charCodeAt(0) === 46 && r.push(""), e.replace(yh, function(i, u, s, f) {
          r.push(s ? f.replace(kh, "$1") : u || i);
        }), r;
      });
      function jt(e) {
        if (typeof e == "string" || dt(e))
          return e;
        var r = e + "";
        return r == "0" && 1 / e == -se ? "-0" : r;
      }
      function Wr(e) {
        if (e != null) {
          try {
            return da.call(e);
          } catch {
          }
          try {
            return e + "";
          } catch {
          }
        }
        return "";
      }
      function Dg(e, r) {
        return vt(Xi, function(i) {
          var u = "_." + i[0];
          r & i[1] && !ia(e, u) && e.push(u);
        }), e.sort();
      }
      function dc(e) {
        if (e instanceof de)
          return e.clone();
        var r = new gt(e.__wrapped__, e.__chain__);
        return r.__actions__ = Je(e.__actions__), r.__index__ = e.__index__, r.__values__ = e.__values__, r;
      }
      function Wg(e, r, i) {
        (i ? Ke(e, r, i) : r === a) ? r = 1 : r = Ie(te(r), 0);
        var u = e == null ? 0 : e.length;
        if (!u || r < 1)
          return [];
        for (var s = 0, f = 0, h = P(ga(u / r)); s < u; )
          h[f++] = bt(e, s, s += r);
        return h;
      }
      function xg(e) {
        for (var r = -1, i = e == null ? 0 : e.length, u = 0, s = []; ++r < i; ) {
          var f = e[r];
          f && (s[u++] = f);
        }
        return s;
      }
      function Og() {
        var e = arguments.length;
        if (!e)
          return [];
        for (var r = P(e - 1), i = arguments[0], u = e; u--; )
          r[u - 1] = arguments[u];
        return ir(ee(i) ? Je(i) : [i], Re(r, 1));
      }
      var zg = ie(function(e, r) {
        return Oe(e) ? Dn(e, Re(r, 1, Oe, !0)) : [];
      }), Eg = ie(function(e, r) {
        var i = wt(r);
        return Oe(i) && (i = a), Oe(e) ? Dn(e, Re(r, 1, Oe, !0), G(i, 2)) : [];
      }), jg = ie(function(e, r) {
        var i = wt(r);
        return Oe(i) && (i = a), Oe(e) ? Dn(e, Re(r, 1, Oe, !0), a, i) : [];
      });
      function Ag(e, r, i) {
        var u = e == null ? 0 : e.length;
        return u ? (r = i || r === a ? 1 : te(r), bt(e, r < 0 ? 0 : r, u)) : [];
      }
      function Fg(e, r, i) {
        var u = e == null ? 0 : e.length;
        return u ? (r = i || r === a ? 1 : te(r), r = u - r, bt(e, 0, r < 0 ? 0 : r)) : [];
      }
      function Ig(e, r) {
        return e && e.length ? Sa(e, G(r, 3), !0, !0) : [];
      }
      function Ng(e, r) {
        return e && e.length ? Sa(e, G(r, 3), !0) : [];
      }
      function Hg(e, r, i, u) {
        var s = e == null ? 0 : e.length;
        return s ? (i && typeof i != "number" && Ke(e, r, i) && (i = 0, u = s), Op(e, r, i, u)) : [];
      }
      function cc(e, r, i) {
        var u = e == null ? 0 : e.length;
        if (!u)
          return -1;
        var s = i == null ? 0 : te(i);
        return s < 0 && (s = Ie(u + s, 0)), oa(e, G(r, 3), s);
      }
      function fc(e, r, i) {
        var u = e == null ? 0 : e.length;
        if (!u)
          return -1;
        var s = u - 1;
        return i !== a && (s = te(i), s = i < 0 ? Ie(u + s, 0) : Be(s, u - 1)), oa(e, G(r, 3), s, !0);
      }
      function mc(e) {
        var r = e == null ? 0 : e.length;
        return r ? Re(e, 1) : [];
      }
      function Rg(e) {
        var r = e == null ? 0 : e.length;
        return r ? Re(e, se) : [];
      }
      function Lg(e, r) {
        var i = e == null ? 0 : e.length;
        return i ? (r = r === a ? 1 : te(r), Re(e, r)) : [];
      }
      function Bg(e) {
        for (var r = -1, i = e == null ? 0 : e.length, u = {}; ++r < i; ) {
          var s = e[r];
          u[s[0]] = s[1];
        }
        return u;
      }
      function hc(e) {
        return e && e.length ? e[0] : a;
      }
      function Vg(e, r, i) {
        var u = e == null ? 0 : e.length;
        if (!u)
          return -1;
        var s = i == null ? 0 : te(i);
        return s < 0 && (s = Ie(u + s, 0)), Xr(e, r, s);
      }
      function qg(e) {
        var r = e == null ? 0 : e.length;
        return r ? bt(e, 0, -1) : [];
      }
      var Xg = ie(function(e) {
        var r = ke(e, Lo);
        return r.length && r[0] === e[0] ? Oo(r) : [];
      }), Kg = ie(function(e) {
        var r = wt(e), i = ke(e, Lo);
        return r === wt(i) ? r = a : i.pop(), i.length && i[0] === e[0] ? Oo(i, G(r, 2)) : [];
      }), Gg = ie(function(e) {
        var r = wt(e), i = ke(e, Lo);
        return r = typeof r == "function" ? r : a, r && i.pop(), i.length && i[0] === e[0] ? Oo(i, a, r) : [];
      });
      function Ug(e, r) {
        return e == null ? "" : qv.call(e, r);
      }
      function wt(e) {
        var r = e == null ? 0 : e.length;
        return r ? e[r - 1] : a;
      }
      function Yg(e, r, i) {
        var u = e == null ? 0 : e.length;
        if (!u)
          return -1;
        var s = u;
        return i !== a && (s = te(i), s = s < 0 ? Ie(u + s, 0) : Be(s, u - 1)), r === r ? Dv(e, r, s) : oa(e, Gs, s, !0);
      }
      function Zg(e, r) {
        return e && e.length ? Td(e, te(r)) : a;
      }
      var Jg = ie(vc);
      function vc(e, r) {
        return e && e.length && r && r.length ? Ao(e, r) : e;
      }
      function Qg(e, r, i) {
        return e && e.length && r && r.length ? Ao(e, r, G(i, 2)) : e;
      }
      function ey(e, r, i) {
        return e && e.length && r && r.length ? Ao(e, r, a, i) : e;
      }
      var ty = Ut(function(e, r) {
        var i = e == null ? 0 : e.length, u = Co(e, r);
        return Cd(e, ke(r, function(s) {
          return Yt(s, i) ? +s : s;
        }).sort(Id)), u;
      });
      function ry(e, r) {
        var i = [];
        if (!(e && e.length))
          return i;
        var u = -1, s = [], f = e.length;
        for (r = G(r, 3); ++u < f; ) {
          var h = e[u];
          r(h, u, e) && (i.push(h), s.push(u));
        }
        return Cd(e, s), i;
      }
      function rl(e) {
        return e == null ? e : Uv.call(e);
      }
      function ny(e, r, i) {
        var u = e == null ? 0 : e.length;
        return u ? (i && typeof i != "number" && Ke(e, r, i) ? (r = 0, i = u) : (r = r == null ? 0 : te(r), i = i === a ? u : te(i)), bt(e, r, i)) : [];
      }
      function ay(e, r) {
        return ka(e, r);
      }
      function iy(e, r, i) {
        return No(e, r, G(i, 2));
      }
      function oy(e, r) {
        var i = e == null ? 0 : e.length;
        if (i) {
          var u = ka(e, r);
          if (u < i && St(e[u], r))
            return u;
        }
        return -1;
      }
      function ly(e, r) {
        return ka(e, r, !0);
      }
      function uy(e, r, i) {
        return No(e, r, G(i, 2), !0);
      }
      function sy(e, r) {
        var i = e == null ? 0 : e.length;
        if (i) {
          var u = ka(e, r, !0) - 1;
          if (St(e[u], r))
            return u;
        }
        return -1;
      }
      function dy(e) {
        return e && e.length ? Wd(e) : [];
      }
      function cy(e, r) {
        return e && e.length ? Wd(e, G(r, 2)) : [];
      }
      function fy(e) {
        var r = e == null ? 0 : e.length;
        return r ? bt(e, 1, r) : [];
      }
      function my(e, r, i) {
        return e && e.length ? (r = i || r === a ? 1 : te(r), bt(e, 0, r < 0 ? 0 : r)) : [];
      }
      function hy(e, r, i) {
        var u = e == null ? 0 : e.length;
        return u ? (r = i || r === a ? 1 : te(r), r = u - r, bt(e, r < 0 ? 0 : r, u)) : [];
      }
      function vy(e, r) {
        return e && e.length ? Sa(e, G(r, 3), !1, !0) : [];
      }
      function py(e, r) {
        return e && e.length ? Sa(e, G(r, 3)) : [];
      }
      var gy = ie(function(e) {
        return sr(Re(e, 1, Oe, !0));
      }), yy = ie(function(e) {
        var r = wt(e);
        return Oe(r) && (r = a), sr(Re(e, 1, Oe, !0), G(r, 2));
      }), by = ie(function(e) {
        var r = wt(e);
        return r = typeof r == "function" ? r : a, sr(Re(e, 1, Oe, !0), a, r);
      });
      function wy(e) {
        return e && e.length ? sr(e) : [];
      }
      function Py(e, r) {
        return e && e.length ? sr(e, G(r, 2)) : [];
      }
      function My(e, r) {
        return r = typeof r == "function" ? r : a, e && e.length ? sr(e, a, r) : [];
      }
      function nl(e) {
        if (!(e && e.length))
          return [];
        var r = 0;
        return e = ar(e, function(i) {
          if (Oe(i))
            return r = Ie(i.length, r), !0;
        }), wo(r, function(i) {
          return ke(e, go(i));
        });
      }
      function pc(e, r) {
        if (!(e && e.length))
          return [];
        var i = nl(e);
        return r == null ? i : ke(i, function(u) {
          return lt(r, a, u);
        });
      }
      var _y = ie(function(e, r) {
        return Oe(e) ? Dn(e, r) : [];
      }), $y = ie(function(e) {
        return Ro(ar(e, Oe));
      }), Ty = ie(function(e) {
        var r = wt(e);
        return Oe(r) && (r = a), Ro(ar(e, Oe), G(r, 2));
      }), ky = ie(function(e) {
        var r = wt(e);
        return r = typeof r == "function" ? r : a, Ro(ar(e, Oe), a, r);
      }), Sy = ie(nl);
      function Cy(e, r) {
        return Ed(e || [], r || [], Cn);
      }
      function Dy(e, r) {
        return Ed(e || [], r || [], On);
      }
      var Wy = ie(function(e) {
        var r = e.length, i = r > 1 ? e[r - 1] : a;
        return i = typeof i == "function" ? (e.pop(), i) : a, pc(e, i);
      });
      function gc(e) {
        var r = c(e);
        return r.__chain__ = !0, r;
      }
      function xy(e, r) {
        return r(e), e;
      }
      function Aa(e, r) {
        return r(e);
      }
      var Oy = Ut(function(e) {
        var r = e.length, i = r ? e[0] : 0, u = this.__wrapped__, s = function(f) {
          return Co(f, e);
        };
        return r > 1 || this.__actions__.length || !(u instanceof de) || !Yt(i) ? this.thru(s) : (u = u.slice(i, +i + (r ? 1 : 0)), u.__actions__.push({
          func: Aa,
          args: [s],
          thisArg: a
        }), new gt(u, this.__chain__).thru(function(f) {
          return r && !f.length && f.push(a), f;
        }));
      });
      function zy() {
        return gc(this);
      }
      function Ey() {
        return new gt(this.value(), this.__chain__);
      }
      function jy() {
        this.__values__ === a && (this.__values__ = xc(this.value()));
        var e = this.__index__ >= this.__values__.length, r = e ? a : this.__values__[this.__index__++];
        return { done: e, value: r };
      }
      function Ay() {
        return this;
      }
      function Fy(e) {
        for (var r, i = this; i instanceof Pa; ) {
          var u = dc(i);
          u.__index__ = 0, u.__values__ = a, r ? s.__wrapped__ = u : r = u;
          var s = u;
          i = i.__wrapped__;
        }
        return s.__wrapped__ = e, r;
      }
      function Iy() {
        var e = this.__wrapped__;
        if (e instanceof de) {
          var r = e;
          return this.__actions__.length && (r = new de(this)), r = r.reverse(), r.__actions__.push({
            func: Aa,
            args: [rl],
            thisArg: a
          }), new gt(r, this.__chain__);
        }
        return this.thru(rl);
      }
      function Ny() {
        return zd(this.__wrapped__, this.__actions__);
      }
      var Hy = Ca(function(e, r, i) {
        we.call(e, i) ? ++e[i] : Kt(e, i, 1);
      });
      function Ry(e, r, i) {
        var u = ee(e) ? Xs : xp;
        return i && Ke(e, r, i) && (r = a), u(e, G(r, 3));
      }
      function Ly(e, r) {
        var i = ee(e) ? ar : pd;
        return i(e, G(r, 3));
      }
      var By = Vd(cc), Vy = Vd(fc);
      function qy(e, r) {
        return Re(Fa(e, r), 1);
      }
      function Xy(e, r) {
        return Re(Fa(e, r), se);
      }
      function Ky(e, r, i) {
        return i = i === a ? 1 : te(i), Re(Fa(e, r), i);
      }
      function yc(e, r) {
        var i = ee(e) ? vt : ur;
        return i(e, G(r, 3));
      }
      function bc(e, r) {
        var i = ee(e) ? fv : vd;
        return i(e, G(r, 3));
      }
      var Gy = Ca(function(e, r, i) {
        we.call(e, i) ? e[i].push(r) : Kt(e, i, [r]);
      });
      function Uy(e, r, i, u) {
        e = Qe(e) ? e : an(e), i = i && !u ? te(i) : 0;
        var s = e.length;
        return i < 0 && (i = Ie(s + i, 0)), La(e) ? i <= s && e.indexOf(r, i) > -1 : !!s && Xr(e, r, i) > -1;
      }
      var Yy = ie(function(e, r, i) {
        var u = -1, s = typeof r == "function", f = Qe(e) ? P(e.length) : [];
        return ur(e, function(h) {
          f[++u] = s ? lt(r, h, i) : Wn(h, r, i);
        }), f;
      }), Zy = Ca(function(e, r, i) {
        Kt(e, i, r);
      });
      function Fa(e, r) {
        var i = ee(e) ? ke : Md;
        return i(e, G(r, 3));
      }
      function Jy(e, r, i, u) {
        return e == null ? [] : (ee(r) || (r = r == null ? [] : [r]), i = u ? a : i, ee(i) || (i = i == null ? [] : [i]), kd(e, r, i));
      }
      var Qy = Ca(function(e, r, i) {
        e[i ? 0 : 1].push(r);
      }, function() {
        return [[], []];
      });
      function eb(e, r, i) {
        var u = ee(e) ? vo : Ys, s = arguments.length < 3;
        return u(e, G(r, 4), i, s, ur);
      }
      function tb(e, r, i) {
        var u = ee(e) ? mv : Ys, s = arguments.length < 3;
        return u(e, G(r, 4), i, s, vd);
      }
      function rb(e, r) {
        var i = ee(e) ? ar : pd;
        return i(e, Ha(G(r, 3)));
      }
      function nb(e) {
        var r = ee(e) ? cd : Up;
        return r(e);
      }
      function ab(e, r, i) {
        (i ? Ke(e, r, i) : r === a) ? r = 1 : r = te(r);
        var u = ee(e) ? kp : Yp;
        return u(e, r);
      }
      function ib(e) {
        var r = ee(e) ? Sp : Jp;
        return r(e);
      }
      function ob(e) {
        if (e == null)
          return 0;
        if (Qe(e))
          return La(e) ? Gr(e) : e.length;
        var r = Ve(e);
        return r == ot || r == $t ? e.size : Eo(e).length;
      }
      function lb(e, r, i) {
        var u = ee(e) ? po : Qp;
        return i && Ke(e, r, i) && (r = a), u(e, G(r, 3));
      }
      var ub = ie(function(e, r) {
        if (e == null)
          return [];
        var i = r.length;
        return i > 1 && Ke(e, r[0], r[1]) ? r = [] : i > 2 && Ke(r[0], r[1], r[2]) && (r = [r[0]]), kd(e, Re(r, 1), []);
      }), Ia = Lv || function() {
        return He.Date.now();
      };
      function sb(e, r) {
        if (typeof r != "function")
          throw new pt(m);
        return e = te(e), function() {
          if (--e < 1)
            return r.apply(this, arguments);
        };
      }
      function wc(e, r, i) {
        return r = i ? a : r, r = e && r == null ? e.length : r, Gt(e, j, a, a, a, a, r);
      }
      function Pc(e, r) {
        var i;
        if (typeof r != "function")
          throw new pt(m);
        return e = te(e), function() {
          return --e > 0 && (i = r.apply(this, arguments)), e <= 1 && (r = a), i;
        };
      }
      var al = ie(function(e, r, i) {
        var u = O;
        if (i.length) {
          var s = or(i, rn(al));
          u |= oe;
        }
        return Gt(e, u, r, i, s);
      }), Mc = ie(function(e, r, i) {
        var u = O | T;
        if (i.length) {
          var s = or(i, rn(Mc));
          u |= oe;
        }
        return Gt(r, u, e, i, s);
      });
      function _c(e, r, i) {
        r = i ? a : r;
        var u = Gt(e, Q, a, a, a, a, a, r);
        return u.placeholder = _c.placeholder, u;
      }
      function $c(e, r, i) {
        r = i ? a : r;
        var u = Gt(e, ae, a, a, a, a, a, r);
        return u.placeholder = $c.placeholder, u;
      }
      function Tc(e, r, i) {
        var u, s, f, h, v, g, k = 0, S = !1, z = !1, I = !0;
        if (typeof e != "function")
          throw new pt(m);
        r = Pt(r) || 0, Se(i) && (S = !!i.leading, z = "maxWait" in i, f = z ? Ie(Pt(i.maxWait) || 0, r) : f, I = "trailing" in i ? !!i.trailing : I);
        function X(ze) {
          var Ct = u, Qt = s;
          return u = s = a, k = ze, h = e.apply(Qt, Ct), h;
        }
        function U(ze) {
          return k = ze, v = jn(ue, r), S ? X(ze) : h;
        }
        function ne(ze) {
          var Ct = ze - g, Qt = ze - k, Vc = r - Ct;
          return z ? Be(Vc, f - Qt) : Vc;
        }
        function Y(ze) {
          var Ct = ze - g, Qt = ze - k;
          return g === a || Ct >= r || Ct < 0 || z && Qt >= f;
        }
        function ue() {
          var ze = Ia();
          if (Y(ze))
            return me(ze);
          v = jn(ue, ne(ze));
        }
        function me(ze) {
          return v = a, I && u ? X(ze) : (u = s = a, h);
        }
        function ct() {
          v !== a && jd(v), k = 0, u = g = s = v = a;
        }
        function Ge() {
          return v === a ? h : me(Ia());
        }
        function ft() {
          var ze = Ia(), Ct = Y(ze);
          if (u = arguments, s = this, g = ze, Ct) {
            if (v === a)
              return U(g);
            if (z)
              return jd(v), v = jn(ue, r), X(g);
          }
          return v === a && (v = jn(ue, r)), h;
        }
        return ft.cancel = ct, ft.flush = Ge, ft;
      }
      var db = ie(function(e, r) {
        return hd(e, 1, r);
      }), cb = ie(function(e, r, i) {
        return hd(e, Pt(r) || 0, i);
      });
      function fb(e) {
        return Gt(e, Z);
      }
      function Na(e, r) {
        if (typeof e != "function" || r != null && typeof r != "function")
          throw new pt(m);
        var i = function() {
          var u = arguments, s = r ? r.apply(this, u) : u[0], f = i.cache;
          if (f.has(s))
            return f.get(s);
          var h = e.apply(this, u);
          return i.cache = f.set(s, h) || f, h;
        };
        return i.cache = new (Na.Cache || Xt)(), i;
      }
      Na.Cache = Xt;
      function Ha(e) {
        if (typeof e != "function")
          throw new pt(m);
        return function() {
          var r = arguments;
          switch (r.length) {
            case 0:
              return !e.call(this);
            case 1:
              return !e.call(this, r[0]);
            case 2:
              return !e.call(this, r[0], r[1]);
            case 3:
              return !e.call(this, r[0], r[1], r[2]);
          }
          return !e.apply(this, r);
        };
      }
      function mb(e) {
        return Pc(2, e);
      }
      var hb = eg(function(e, r) {
        r = r.length == 1 && ee(r[0]) ? ke(r[0], ut(G())) : ke(Re(r, 1), ut(G()));
        var i = r.length;
        return ie(function(u) {
          for (var s = -1, f = Be(u.length, i); ++s < f; )
            u[s] = r[s].call(this, u[s]);
          return lt(e, this, u);
        });
      }), il = ie(function(e, r) {
        var i = or(r, rn(il));
        return Gt(e, oe, a, r, i);
      }), kc = ie(function(e, r) {
        var i = or(r, rn(kc));
        return Gt(e, Pe, a, r, i);
      }), vb = Ut(function(e, r) {
        return Gt(e, A, a, a, a, r);
      });
      function pb(e, r) {
        if (typeof e != "function")
          throw new pt(m);
        return r = r === a ? r : te(r), ie(e, r);
      }
      function gb(e, r) {
        if (typeof e != "function")
          throw new pt(m);
        return r = r == null ? 0 : Ie(te(r), 0), ie(function(i) {
          var u = i[r], s = cr(i, 0, r);
          return u && ir(s, u), lt(e, this, s);
        });
      }
      function yb(e, r, i) {
        var u = !0, s = !0;
        if (typeof e != "function")
          throw new pt(m);
        return Se(i) && (u = "leading" in i ? !!i.leading : u, s = "trailing" in i ? !!i.trailing : s), Tc(e, r, {
          leading: u,
          maxWait: r,
          trailing: s
        });
      }
      function bb(e) {
        return wc(e, 1);
      }
      function wb(e, r) {
        return il(Bo(r), e);
      }
      function Pb() {
        if (!arguments.length)
          return [];
        var e = arguments[0];
        return ee(e) ? e : [e];
      }
      function Mb(e) {
        return yt(e, E);
      }
      function _b(e, r) {
        return r = typeof r == "function" ? r : a, yt(e, E, r);
      }
      function $b(e) {
        return yt(e, W | E);
      }
      function Tb(e, r) {
        return r = typeof r == "function" ? r : a, yt(e, W | E, r);
      }
      function kb(e, r) {
        return r == null || md(e, r, Ne(r));
      }
      function St(e, r) {
        return e === r || e !== e && r !== r;
      }
      var Sb = Oa(xo), Cb = Oa(function(e, r) {
        return e >= r;
      }), xr = bd(function() {
        return arguments;
      }()) ? bd : function(e) {
        return We(e) && we.call(e, "callee") && !id.call(e, "callee");
      }, ee = P.isArray, Db = Hs ? ut(Hs) : Fp;
      function Qe(e) {
        return e != null && Ra(e.length) && !Zt(e);
      }
      function Oe(e) {
        return We(e) && Qe(e);
      }
      function Wb(e) {
        return e === !0 || e === !1 || We(e) && Xe(e) == Pr;
      }
      var fr = Vv || pl, xb = Rs ? ut(Rs) : Ip;
      function Ob(e) {
        return We(e) && e.nodeType === 1 && !An(e);
      }
      function zb(e) {
        if (e == null)
          return !0;
        if (Qe(e) && (ee(e) || typeof e == "string" || typeof e.splice == "function" || fr(e) || nn(e) || xr(e)))
          return !e.length;
        var r = Ve(e);
        if (r == ot || r == $t)
          return !e.size;
        if (En(e))
          return !Eo(e).length;
        for (var i in e)
          if (we.call(e, i))
            return !1;
        return !0;
      }
      function Eb(e, r) {
        return xn(e, r);
      }
      function jb(e, r, i) {
        i = typeof i == "function" ? i : a;
        var u = i ? i(e, r) : a;
        return u === a ? xn(e, r, a, i) : !!u;
      }
      function ol(e) {
        if (!We(e))
          return !1;
        var r = Xe(e);
        return r == Lr || r == Gi || typeof e.message == "string" && typeof e.name == "string" && !An(e);
      }
      function Ab(e) {
        return typeof e == "number" && ld(e);
      }
      function Zt(e) {
        if (!Se(e))
          return !1;
        var r = Xe(e);
        return r == Br || r == ea || r == Ki || r == oh;
      }
      function Sc(e) {
        return typeof e == "number" && e == te(e);
      }
      function Ra(e) {
        return typeof e == "number" && e > -1 && e % 1 == 0 && e <= he;
      }
      function Se(e) {
        var r = typeof e;
        return e != null && (r == "object" || r == "function");
      }
      function We(e) {
        return e != null && typeof e == "object";
      }
      var Cc = Ls ? ut(Ls) : Hp;
      function Fb(e, r) {
        return e === r || zo(e, r, Yo(r));
      }
      function Ib(e, r, i) {
        return i = typeof i == "function" ? i : a, zo(e, r, Yo(r), i);
      }
      function Nb(e) {
        return Dc(e) && e != +e;
      }
      function Hb(e) {
        if (_g(e))
          throw new J(d);
        return wd(e);
      }
      function Rb(e) {
        return e === null;
      }
      function Lb(e) {
        return e == null;
      }
      function Dc(e) {
        return typeof e == "number" || We(e) && Xe(e) == Ot;
      }
      function An(e) {
        if (!We(e) || Xe(e) != Vt)
          return !1;
        var r = ha(e);
        if (r === null)
          return !0;
        var i = we.call(r, "constructor") && r.constructor;
        return typeof i == "function" && i instanceof i && da.call(i) == Iv;
      }
      var ll = Bs ? ut(Bs) : Rp;
      function Bb(e) {
        return Sc(e) && e >= -he && e <= he;
      }
      var Wc = Vs ? ut(Vs) : Lp;
      function La(e) {
        return typeof e == "string" || !ee(e) && We(e) && Xe(e) == bn;
      }
      function dt(e) {
        return typeof e == "symbol" || We(e) && Xe(e) == ta;
      }
      var nn = qs ? ut(qs) : Bp;
      function Vb(e) {
        return e === a;
      }
      function qb(e) {
        return We(e) && Ve(e) == wn;
      }
      function Xb(e) {
        return We(e) && Xe(e) == uh;
      }
      var Kb = Oa(jo), Gb = Oa(function(e, r) {
        return e <= r;
      });
      function xc(e) {
        if (!e)
          return [];
        if (Qe(e))
          return La(e) ? Tt(e) : Je(e);
        if (_n && e[_n])
          return kv(e[_n]());
        var r = Ve(e), i = r == ot ? Mo : r == $t ? la : an;
        return i(e);
      }
      function Jt(e) {
        if (!e)
          return e === 0 ? e : 0;
        if (e = Pt(e), e === se || e === -se) {
          var r = e < 0 ? -1 : 1;
          return r * Ae;
        }
        return e === e ? e : 0;
      }
      function te(e) {
        var r = Jt(e), i = r % 1;
        return r === r ? i ? r - i : r : 0;
      }
      function Oc(e) {
        return e ? Sr(te(e), 0, $e) : 0;
      }
      function Pt(e) {
        if (typeof e == "number")
          return e;
        if (dt(e))
          return Le;
        if (Se(e)) {
          var r = typeof e.valueOf == "function" ? e.valueOf() : e;
          e = Se(r) ? r + "" : r;
        }
        if (typeof e != "string")
          return e === 0 ? e : +e;
        e = Zs(e);
        var i = Dh.test(e);
        return i || xh.test(e) ? sv(e.slice(2), i ? 2 : 8) : Ch.test(e) ? Le : +e;
      }
      function zc(e) {
        return Et(e, et(e));
      }
      function Ub(e) {
        return e ? Sr(te(e), -he, he) : e === 0 ? e : 0;
      }
      function ye(e) {
        return e == null ? "" : st(e);
      }
      var Yb = en(function(e, r) {
        if (En(r) || Qe(r)) {
          Et(r, Ne(r), e);
          return;
        }
        for (var i in r)
          we.call(r, i) && Cn(e, i, r[i]);
      }), Ec = en(function(e, r) {
        Et(r, et(r), e);
      }), Ba = en(function(e, r, i, u) {
        Et(r, et(r), e, u);
      }), Zb = en(function(e, r, i, u) {
        Et(r, Ne(r), e, u);
      }), Jb = Ut(Co);
      function Qb(e, r) {
        var i = Qr(e);
        return r == null ? i : fd(i, r);
      }
      var ew = ie(function(e, r) {
        e = Me(e);
        var i = -1, u = r.length, s = u > 2 ? r[2] : a;
        for (s && Ke(r[0], r[1], s) && (u = 1); ++i < u; )
          for (var f = r[i], h = et(f), v = -1, g = h.length; ++v < g; ) {
            var k = h[v], S = e[k];
            (S === a || St(S, Yr[k]) && !we.call(e, k)) && (e[k] = f[k]);
          }
        return e;
      }), tw = ie(function(e) {
        return e.push(a, Zd), lt(jc, a, e);
      });
      function rw(e, r) {
        return Ks(e, G(r, 3), zt);
      }
      function nw(e, r) {
        return Ks(e, G(r, 3), Wo);
      }
      function aw(e, r) {
        return e == null ? e : Do(e, G(r, 3), et);
      }
      function iw(e, r) {
        return e == null ? e : gd(e, G(r, 3), et);
      }
      function ow(e, r) {
        return e && zt(e, G(r, 3));
      }
      function lw(e, r) {
        return e && Wo(e, G(r, 3));
      }
      function uw(e) {
        return e == null ? [] : $a(e, Ne(e));
      }
      function sw(e) {
        return e == null ? [] : $a(e, et(e));
      }
      function ul(e, r, i) {
        var u = e == null ? a : Cr(e, r);
        return u === a ? i : u;
      }
      function dw(e, r) {
        return e != null && ec(e, r, zp);
      }
      function sl(e, r) {
        return e != null && ec(e, r, Ep);
      }
      var cw = Xd(function(e, r, i) {
        r != null && typeof r.toString != "function" && (r = ca.call(r)), e[r] = i;
      }, cl(tt)), fw = Xd(function(e, r, i) {
        r != null && typeof r.toString != "function" && (r = ca.call(r)), we.call(e, r) ? e[r].push(i) : e[r] = [i];
      }, G), mw = ie(Wn);
      function Ne(e) {
        return Qe(e) ? dd(e) : Eo(e);
      }
      function et(e) {
        return Qe(e) ? dd(e, !0) : Vp(e);
      }
      function hw(e, r) {
        var i = {};
        return r = G(r, 3), zt(e, function(u, s, f) {
          Kt(i, r(u, s, f), u);
        }), i;
      }
      function vw(e, r) {
        var i = {};
        return r = G(r, 3), zt(e, function(u, s, f) {
          Kt(i, s, r(u, s, f));
        }), i;
      }
      var pw = en(function(e, r, i) {
        Ta(e, r, i);
      }), jc = en(function(e, r, i, u) {
        Ta(e, r, i, u);
      }), gw = Ut(function(e, r) {
        var i = {};
        if (e == null)
          return i;
        var u = !1;
        r = ke(r, function(f) {
          return f = dr(f, e), u || (u = f.length > 1), f;
        }), Et(e, Go(e), i), u && (i = yt(i, W | x | E, cg));
        for (var s = r.length; s--; )
          Ho(i, r[s]);
        return i;
      });
      function yw(e, r) {
        return Ac(e, Ha(G(r)));
      }
      var bw = Ut(function(e, r) {
        return e == null ? {} : Xp(e, r);
      });
      function Ac(e, r) {
        if (e == null)
          return {};
        var i = ke(Go(e), function(u) {
          return [u];
        });
        return r = G(r), Sd(e, i, function(u, s) {
          return r(u, s[0]);
        });
      }
      function ww(e, r, i) {
        r = dr(r, e);
        var u = -1, s = r.length;
        for (s || (s = 1, e = a); ++u < s; ) {
          var f = e == null ? a : e[jt(r[u])];
          f === a && (u = s, f = i), e = Zt(f) ? f.call(e) : f;
        }
        return e;
      }
      function Pw(e, r, i) {
        return e == null ? e : On(e, r, i);
      }
      function Mw(e, r, i, u) {
        return u = typeof u == "function" ? u : a, e == null ? e : On(e, r, i, u);
      }
      var Fc = Ud(Ne), Ic = Ud(et);
      function _w(e, r, i) {
        var u = ee(e), s = u || fr(e) || nn(e);
        if (r = G(r, 4), i == null) {
          var f = e && e.constructor;
          s ? i = u ? new f() : [] : Se(e) ? i = Zt(f) ? Qr(ha(e)) : {} : i = {};
        }
        return (s ? vt : zt)(e, function(h, v, g) {
          return r(i, h, v, g);
        }), i;
      }
      function $w(e, r) {
        return e == null ? !0 : Ho(e, r);
      }
      function Tw(e, r, i) {
        return e == null ? e : Od(e, r, Bo(i));
      }
      function kw(e, r, i, u) {
        return u = typeof u == "function" ? u : a, e == null ? e : Od(e, r, Bo(i), u);
      }
      function an(e) {
        return e == null ? [] : Po(e, Ne(e));
      }
      function Sw(e) {
        return e == null ? [] : Po(e, et(e));
      }
      function Cw(e, r, i) {
        return i === a && (i = r, r = a), i !== a && (i = Pt(i), i = i === i ? i : 0), r !== a && (r = Pt(r), r = r === r ? r : 0), Sr(Pt(e), r, i);
      }
      function Dw(e, r, i) {
        return r = Jt(r), i === a ? (i = r, r = 0) : i = Jt(i), e = Pt(e), jp(e, r, i);
      }
      function Ww(e, r, i) {
        if (i && typeof i != "boolean" && Ke(e, r, i) && (r = i = a), i === a && (typeof r == "boolean" ? (i = r, r = a) : typeof e == "boolean" && (i = e, e = a)), e === a && r === a ? (e = 0, r = 1) : (e = Jt(e), r === a ? (r = e, e = 0) : r = Jt(r)), e > r) {
          var u = e;
          e = r, r = u;
        }
        if (i || e % 1 || r % 1) {
          var s = ud();
          return Be(e + s * (r - e + uv("1e-" + ((s + "").length - 1))), r);
        }
        return Fo(e, r);
      }
      var xw = tn(function(e, r, i) {
        return r = r.toLowerCase(), e + (i ? Nc(r) : r);
      });
      function Nc(e) {
        return dl(ye(e).toLowerCase());
      }
      function Hc(e) {
        return e = ye(e), e && e.replace(zh, Pv).replace(Jh, "");
      }
      function Ow(e, r, i) {
        e = ye(e), r = st(r);
        var u = e.length;
        i = i === a ? u : Sr(te(i), 0, u);
        var s = i;
        return i -= r.length, i >= 0 && e.slice(i, s) == r;
      }
      function zw(e) {
        return e = ye(e), e && mh.test(e) ? e.replace(gs, Mv) : e;
      }
      function Ew(e) {
        return e = ye(e), e && bh.test(e) ? e.replace(ao, "\\$&") : e;
      }
      var jw = tn(function(e, r, i) {
        return e + (i ? "-" : "") + r.toLowerCase();
      }), Aw = tn(function(e, r, i) {
        return e + (i ? " " : "") + r.toLowerCase();
      }), Fw = Bd("toLowerCase");
      function Iw(e, r, i) {
        e = ye(e), r = te(r);
        var u = r ? Gr(e) : 0;
        if (!r || u >= r)
          return e;
        var s = (r - u) / 2;
        return xa(ya(s), i) + e + xa(ga(s), i);
      }
      function Nw(e, r, i) {
        e = ye(e), r = te(r);
        var u = r ? Gr(e) : 0;
        return r && u < r ? e + xa(r - u, i) : e;
      }
      function Hw(e, r, i) {
        e = ye(e), r = te(r);
        var u = r ? Gr(e) : 0;
        return r && u < r ? xa(r - u, i) + e : e;
      }
      function Rw(e, r, i) {
        return i || r == null ? r = 0 : r && (r = +r), Gv(ye(e).replace(io, ""), r || 0);
      }
      function Lw(e, r, i) {
        return (i ? Ke(e, r, i) : r === a) ? r = 1 : r = te(r), Io(ye(e), r);
      }
      function Bw() {
        var e = arguments, r = ye(e[0]);
        return e.length < 3 ? r : r.replace(e[1], e[2]);
      }
      var Vw = tn(function(e, r, i) {
        return e + (i ? "_" : "") + r.toLowerCase();
      });
      function qw(e, r, i) {
        return i && typeof i != "number" && Ke(e, r, i) && (r = i = a), i = i === a ? $e : i >>> 0, i ? (e = ye(e), e && (typeof r == "string" || r != null && !ll(r)) && (r = st(r), !r && Kr(e)) ? cr(Tt(e), 0, i) : e.split(r, i)) : [];
      }
      var Xw = tn(function(e, r, i) {
        return e + (i ? " " : "") + dl(r);
      });
      function Kw(e, r, i) {
        return e = ye(e), i = i == null ? 0 : Sr(te(i), 0, e.length), r = st(r), e.slice(i, i + r.length) == r;
      }
      function Gw(e, r, i) {
        var u = c.templateSettings;
        i && Ke(e, r, i) && (r = a), e = ye(e), r = Ba({}, r, u, Yd);
        var s = Ba({}, r.imports, u.imports, Yd), f = Ne(s), h = Po(s, f), v, g, k = 0, S = r.interpolate || ra, z = "__p += '", I = _o(
          (r.escape || ra).source + "|" + S.source + "|" + (S === ys ? Sh : ra).source + "|" + (r.evaluate || ra).source + "|$",
          "g"
        ), X = "//# sourceURL=" + (we.call(r, "sourceURL") ? (r.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++nv + "]") + `
`;
        e.replace(I, function(Y, ue, me, ct, Ge, ft) {
          return me || (me = ct), z += e.slice(k, ft).replace(Eh, _v), ue && (v = !0, z += `' +
__e(` + ue + `) +
'`), Ge && (g = !0, z += `';
` + Ge + `;
__p += '`), me && (z += `' +
((__t = (` + me + `)) == null ? '' : __t) +
'`), k = ft + Y.length, Y;
        }), z += `';
`;
        var U = we.call(r, "variable") && r.variable;
        if (!U)
          z = `with (obj) {
` + z + `
}
`;
        else if (Th.test(U))
          throw new J(b);
        z = (g ? z.replace(sh, "") : z).replace(dh, "$1").replace(ch, "$1;"), z = "function(" + (U || "obj") + `) {
` + (U ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (v ? ", __e = _.escape" : "") + (g ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + z + `return __p
}`;
        var ne = Lc(function() {
          return pe(f, X + "return " + z).apply(a, h);
        });
        if (ne.source = z, ol(ne))
          throw ne;
        return ne;
      }
      function Uw(e) {
        return ye(e).toLowerCase();
      }
      function Yw(e) {
        return ye(e).toUpperCase();
      }
      function Zw(e, r, i) {
        if (e = ye(e), e && (i || r === a))
          return Zs(e);
        if (!e || !(r = st(r)))
          return e;
        var u = Tt(e), s = Tt(r), f = Js(u, s), h = Qs(u, s) + 1;
        return cr(u, f, h).join("");
      }
      function Jw(e, r, i) {
        if (e = ye(e), e && (i || r === a))
          return e.slice(0, td(e) + 1);
        if (!e || !(r = st(r)))
          return e;
        var u = Tt(e), s = Qs(u, Tt(r)) + 1;
        return cr(u, 0, s).join("");
      }
      function Qw(e, r, i) {
        if (e = ye(e), e && (i || r === a))
          return e.replace(io, "");
        if (!e || !(r = st(r)))
          return e;
        var u = Tt(e), s = Js(u, Tt(r));
        return cr(u, s).join("");
      }
      function eP(e, r) {
        var i = ce, u = F;
        if (Se(r)) {
          var s = "separator" in r ? r.separator : s;
          i = "length" in r ? te(r.length) : i, u = "omission" in r ? st(r.omission) : u;
        }
        e = ye(e);
        var f = e.length;
        if (Kr(e)) {
          var h = Tt(e);
          f = h.length;
        }
        if (i >= f)
          return e;
        var v = i - Gr(u);
        if (v < 1)
          return u;
        var g = h ? cr(h, 0, v).join("") : e.slice(0, v);
        if (s === a)
          return g + u;
        if (h && (v += g.length - v), ll(s)) {
          if (e.slice(v).search(s)) {
            var k, S = g;
            for (s.global || (s = _o(s.source, ye(bs.exec(s)) + "g")), s.lastIndex = 0; k = s.exec(S); )
              var z = k.index;
            g = g.slice(0, z === a ? v : z);
          }
        } else if (e.indexOf(st(s), v) != v) {
          var I = g.lastIndexOf(s);
          I > -1 && (g = g.slice(0, I));
        }
        return g + u;
      }
      function tP(e) {
        return e = ye(e), e && fh.test(e) ? e.replace(ps, Wv) : e;
      }
      var rP = tn(function(e, r, i) {
        return e + (i ? " " : "") + r.toUpperCase();
      }), dl = Bd("toUpperCase");
      function Rc(e, r, i) {
        return e = ye(e), r = i ? a : r, r === a ? Tv(e) ? zv(e) : pv(e) : e.match(r) || [];
      }
      var Lc = ie(function(e, r) {
        try {
          return lt(e, a, r);
        } catch (i) {
          return ol(i) ? i : new J(i);
        }
      }), nP = Ut(function(e, r) {
        return vt(r, function(i) {
          i = jt(i), Kt(e, i, al(e[i], e));
        }), e;
      });
      function aP(e) {
        var r = e == null ? 0 : e.length, i = G();
        return e = r ? ke(e, function(u) {
          if (typeof u[1] != "function")
            throw new pt(m);
          return [i(u[0]), u[1]];
        }) : [], ie(function(u) {
          for (var s = -1; ++s < r; ) {
            var f = e[s];
            if (lt(f[0], this, u))
              return lt(f[1], this, u);
          }
        });
      }
      function iP(e) {
        return Wp(yt(e, W));
      }
      function cl(e) {
        return function() {
          return e;
        };
      }
      function oP(e, r) {
        return e == null || e !== e ? r : e;
      }
      var lP = qd(), uP = qd(!0);
      function tt(e) {
        return e;
      }
      function fl(e) {
        return Pd(typeof e == "function" ? e : yt(e, W));
      }
      function sP(e) {
        return _d(yt(e, W));
      }
      function dP(e, r) {
        return $d(e, yt(r, W));
      }
      var cP = ie(function(e, r) {
        return function(i) {
          return Wn(i, e, r);
        };
      }), fP = ie(function(e, r) {
        return function(i) {
          return Wn(e, i, r);
        };
      });
      function ml(e, r, i) {
        var u = Ne(r), s = $a(r, u);
        i == null && !(Se(r) && (s.length || !u.length)) && (i = r, r = e, e = this, s = $a(r, Ne(r)));
        var f = !(Se(i) && "chain" in i) || !!i.chain, h = Zt(e);
        return vt(s, function(v) {
          var g = r[v];
          e[v] = g, h && (e.prototype[v] = function() {
            var k = this.__chain__;
            if (f || k) {
              var S = e(this.__wrapped__), z = S.__actions__ = Je(this.__actions__);
              return z.push({ func: g, args: arguments, thisArg: e }), S.__chain__ = k, S;
            }
            return g.apply(e, ir([this.value()], arguments));
          });
        }), e;
      }
      function mP() {
        return He._ === this && (He._ = Nv), this;
      }
      function hl() {
      }
      function hP(e) {
        return e = te(e), ie(function(r) {
          return Td(r, e);
        });
      }
      var vP = qo(ke), pP = qo(Xs), gP = qo(po);
      function Bc(e) {
        return Jo(e) ? go(jt(e)) : Kp(e);
      }
      function yP(e) {
        return function(r) {
          return e == null ? a : Cr(e, r);
        };
      }
      var bP = Kd(), wP = Kd(!0);
      function vl() {
        return [];
      }
      function pl() {
        return !1;
      }
      function PP() {
        return {};
      }
      function MP() {
        return "";
      }
      function _P() {
        return !0;
      }
      function $P(e, r) {
        if (e = te(e), e < 1 || e > he)
          return [];
        var i = $e, u = Be(e, $e);
        r = G(r), e -= $e;
        for (var s = wo(u, r); ++i < e; )
          r(i);
        return s;
      }
      function TP(e) {
        return ee(e) ? ke(e, jt) : dt(e) ? [e] : Je(sc(ye(e)));
      }
      function kP(e) {
        var r = ++Fv;
        return ye(e) + r;
      }
      var SP = Wa(function(e, r) {
        return e + r;
      }, 0), CP = Xo("ceil"), DP = Wa(function(e, r) {
        return e / r;
      }, 1), WP = Xo("floor");
      function xP(e) {
        return e && e.length ? _a(e, tt, xo) : a;
      }
      function OP(e, r) {
        return e && e.length ? _a(e, G(r, 2), xo) : a;
      }
      function zP(e) {
        return Us(e, tt);
      }
      function EP(e, r) {
        return Us(e, G(r, 2));
      }
      function jP(e) {
        return e && e.length ? _a(e, tt, jo) : a;
      }
      function AP(e, r) {
        return e && e.length ? _a(e, G(r, 2), jo) : a;
      }
      var FP = Wa(function(e, r) {
        return e * r;
      }, 1), IP = Xo("round"), NP = Wa(function(e, r) {
        return e - r;
      }, 0);
      function HP(e) {
        return e && e.length ? bo(e, tt) : 0;
      }
      function RP(e, r) {
        return e && e.length ? bo(e, G(r, 2)) : 0;
      }
      return c.after = sb, c.ary = wc, c.assign = Yb, c.assignIn = Ec, c.assignInWith = Ba, c.assignWith = Zb, c.at = Jb, c.before = Pc, c.bind = al, c.bindAll = nP, c.bindKey = Mc, c.castArray = Pb, c.chain = gc, c.chunk = Wg, c.compact = xg, c.concat = Og, c.cond = aP, c.conforms = iP, c.constant = cl, c.countBy = Hy, c.create = Qb, c.curry = _c, c.curryRight = $c, c.debounce = Tc, c.defaults = ew, c.defaultsDeep = tw, c.defer = db, c.delay = cb, c.difference = zg, c.differenceBy = Eg, c.differenceWith = jg, c.drop = Ag, c.dropRight = Fg, c.dropRightWhile = Ig, c.dropWhile = Ng, c.fill = Hg, c.filter = Ly, c.flatMap = qy, c.flatMapDeep = Xy, c.flatMapDepth = Ky, c.flatten = mc, c.flattenDeep = Rg, c.flattenDepth = Lg, c.flip = fb, c.flow = lP, c.flowRight = uP, c.fromPairs = Bg, c.functions = uw, c.functionsIn = sw, c.groupBy = Gy, c.initial = qg, c.intersection = Xg, c.intersectionBy = Kg, c.intersectionWith = Gg, c.invert = cw, c.invertBy = fw, c.invokeMap = Yy, c.iteratee = fl, c.keyBy = Zy, c.keys = Ne, c.keysIn = et, c.map = Fa, c.mapKeys = hw, c.mapValues = vw, c.matches = sP, c.matchesProperty = dP, c.memoize = Na, c.merge = pw, c.mergeWith = jc, c.method = cP, c.methodOf = fP, c.mixin = ml, c.negate = Ha, c.nthArg = hP, c.omit = gw, c.omitBy = yw, c.once = mb, c.orderBy = Jy, c.over = vP, c.overArgs = hb, c.overEvery = pP, c.overSome = gP, c.partial = il, c.partialRight = kc, c.partition = Qy, c.pick = bw, c.pickBy = Ac, c.property = Bc, c.propertyOf = yP, c.pull = Jg, c.pullAll = vc, c.pullAllBy = Qg, c.pullAllWith = ey, c.pullAt = ty, c.range = bP, c.rangeRight = wP, c.rearg = vb, c.reject = rb, c.remove = ry, c.rest = pb, c.reverse = rl, c.sampleSize = ab, c.set = Pw, c.setWith = Mw, c.shuffle = ib, c.slice = ny, c.sortBy = ub, c.sortedUniq = dy, c.sortedUniqBy = cy, c.split = qw, c.spread = gb, c.tail = fy, c.take = my, c.takeRight = hy, c.takeRightWhile = vy, c.takeWhile = py, c.tap = xy, c.throttle = yb, c.thru = Aa, c.toArray = xc, c.toPairs = Fc, c.toPairsIn = Ic, c.toPath = TP, c.toPlainObject = zc, c.transform = _w, c.unary = bb, c.union = gy, c.unionBy = yy, c.unionWith = by, c.uniq = wy, c.uniqBy = Py, c.uniqWith = My, c.unset = $w, c.unzip = nl, c.unzipWith = pc, c.update = Tw, c.updateWith = kw, c.values = an, c.valuesIn = Sw, c.without = _y, c.words = Rc, c.wrap = wb, c.xor = $y, c.xorBy = Ty, c.xorWith = ky, c.zip = Sy, c.zipObject = Cy, c.zipObjectDeep = Dy, c.zipWith = Wy, c.entries = Fc, c.entriesIn = Ic, c.extend = Ec, c.extendWith = Ba, ml(c, c), c.add = SP, c.attempt = Lc, c.camelCase = xw, c.capitalize = Nc, c.ceil = CP, c.clamp = Cw, c.clone = Mb, c.cloneDeep = $b, c.cloneDeepWith = Tb, c.cloneWith = _b, c.conformsTo = kb, c.deburr = Hc, c.defaultTo = oP, c.divide = DP, c.endsWith = Ow, c.eq = St, c.escape = zw, c.escapeRegExp = Ew, c.every = Ry, c.find = By, c.findIndex = cc, c.findKey = rw, c.findLast = Vy, c.findLastIndex = fc, c.findLastKey = nw, c.floor = WP, c.forEach = yc, c.forEachRight = bc, c.forIn = aw, c.forInRight = iw, c.forOwn = ow, c.forOwnRight = lw, c.get = ul, c.gt = Sb, c.gte = Cb, c.has = dw, c.hasIn = sl, c.head = hc, c.identity = tt, c.includes = Uy, c.indexOf = Vg, c.inRange = Dw, c.invoke = mw, c.isArguments = xr, c.isArray = ee, c.isArrayBuffer = Db, c.isArrayLike = Qe, c.isArrayLikeObject = Oe, c.isBoolean = Wb, c.isBuffer = fr, c.isDate = xb, c.isElement = Ob, c.isEmpty = zb, c.isEqual = Eb, c.isEqualWith = jb, c.isError = ol, c.isFinite = Ab, c.isFunction = Zt, c.isInteger = Sc, c.isLength = Ra, c.isMap = Cc, c.isMatch = Fb, c.isMatchWith = Ib, c.isNaN = Nb, c.isNative = Hb, c.isNil = Lb, c.isNull = Rb, c.isNumber = Dc, c.isObject = Se, c.isObjectLike = We, c.isPlainObject = An, c.isRegExp = ll, c.isSafeInteger = Bb, c.isSet = Wc, c.isString = La, c.isSymbol = dt, c.isTypedArray = nn, c.isUndefined = Vb, c.isWeakMap = qb, c.isWeakSet = Xb, c.join = Ug, c.kebabCase = jw, c.last = wt, c.lastIndexOf = Yg, c.lowerCase = Aw, c.lowerFirst = Fw, c.lt = Kb, c.lte = Gb, c.max = xP, c.maxBy = OP, c.mean = zP, c.meanBy = EP, c.min = jP, c.minBy = AP, c.stubArray = vl, c.stubFalse = pl, c.stubObject = PP, c.stubString = MP, c.stubTrue = _P, c.multiply = FP, c.nth = Zg, c.noConflict = mP, c.noop = hl, c.now = Ia, c.pad = Iw, c.padEnd = Nw, c.padStart = Hw, c.parseInt = Rw, c.random = Ww, c.reduce = eb, c.reduceRight = tb, c.repeat = Lw, c.replace = Bw, c.result = ww, c.round = IP, c.runInContext = p, c.sample = nb, c.size = ob, c.snakeCase = Vw, c.some = lb, c.sortedIndex = ay, c.sortedIndexBy = iy, c.sortedIndexOf = oy, c.sortedLastIndex = ly, c.sortedLastIndexBy = uy, c.sortedLastIndexOf = sy, c.startCase = Xw, c.startsWith = Kw, c.subtract = NP, c.sum = HP, c.sumBy = RP, c.template = Gw, c.times = $P, c.toFinite = Jt, c.toInteger = te, c.toLength = Oc, c.toLower = Uw, c.toNumber = Pt, c.toSafeInteger = Ub, c.toString = ye, c.toUpper = Yw, c.trim = Zw, c.trimEnd = Jw, c.trimStart = Qw, c.truncate = eP, c.unescape = tP, c.uniqueId = kP, c.upperCase = rP, c.upperFirst = dl, c.each = yc, c.eachRight = bc, c.first = hc, ml(c, function() {
        var e = {};
        return zt(c, function(r, i) {
          we.call(c.prototype, i) || (e[i] = r);
        }), e;
      }(), { chain: !1 }), c.VERSION = o, vt(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(e) {
        c[e].placeholder = c;
      }), vt(["drop", "take"], function(e, r) {
        de.prototype[e] = function(i) {
          i = i === a ? 1 : Ie(te(i), 0);
          var u = this.__filtered__ && !r ? new de(this) : this.clone();
          return u.__filtered__ ? u.__takeCount__ = Be(i, u.__takeCount__) : u.__views__.push({
            size: Be(i, $e),
            type: e + (u.__dir__ < 0 ? "Right" : "")
          }), u;
        }, de.prototype[e + "Right"] = function(i) {
          return this.reverse()[e](i).reverse();
        };
      }), vt(["filter", "map", "takeWhile"], function(e, r) {
        var i = r + 1, u = i == le || i == ge;
        de.prototype[e] = function(s) {
          var f = this.clone();
          return f.__iteratees__.push({
            iteratee: G(s, 3),
            type: i
          }), f.__filtered__ = f.__filtered__ || u, f;
        };
      }), vt(["head", "last"], function(e, r) {
        var i = "take" + (r ? "Right" : "");
        de.prototype[e] = function() {
          return this[i](1).value()[0];
        };
      }), vt(["initial", "tail"], function(e, r) {
        var i = "drop" + (r ? "" : "Right");
        de.prototype[e] = function() {
          return this.__filtered__ ? new de(this) : this[i](1);
        };
      }), de.prototype.compact = function() {
        return this.filter(tt);
      }, de.prototype.find = function(e) {
        return this.filter(e).head();
      }, de.prototype.findLast = function(e) {
        return this.reverse().find(e);
      }, de.prototype.invokeMap = ie(function(e, r) {
        return typeof e == "function" ? new de(this) : this.map(function(i) {
          return Wn(i, e, r);
        });
      }), de.prototype.reject = function(e) {
        return this.filter(Ha(G(e)));
      }, de.prototype.slice = function(e, r) {
        e = te(e);
        var i = this;
        return i.__filtered__ && (e > 0 || r < 0) ? new de(i) : (e < 0 ? i = i.takeRight(-e) : e && (i = i.drop(e)), r !== a && (r = te(r), i = r < 0 ? i.dropRight(-r) : i.take(r - e)), i);
      }, de.prototype.takeRightWhile = function(e) {
        return this.reverse().takeWhile(e).reverse();
      }, de.prototype.toArray = function() {
        return this.take($e);
      }, zt(de.prototype, function(e, r) {
        var i = /^(?:filter|find|map|reject)|While$/.test(r), u = /^(?:head|last)$/.test(r), s = c[u ? "take" + (r == "last" ? "Right" : "") : r], f = u || /^find/.test(r);
        s && (c.prototype[r] = function() {
          var h = this.__wrapped__, v = u ? [1] : arguments, g = h instanceof de, k = v[0], S = g || ee(h), z = function(ue) {
            var me = s.apply(c, ir([ue], v));
            return u && I ? me[0] : me;
          };
          S && i && typeof k == "function" && k.length != 1 && (g = S = !1);
          var I = this.__chain__, X = !!this.__actions__.length, U = f && !I, ne = g && !X;
          if (!f && S) {
            h = ne ? h : new de(this);
            var Y = e.apply(h, v);
            return Y.__actions__.push({ func: Aa, args: [z], thisArg: a }), new gt(Y, I);
          }
          return U && ne ? e.apply(this, v) : (Y = this.thru(z), U ? u ? Y.value()[0] : Y.value() : Y);
        });
      }), vt(["pop", "push", "shift", "sort", "splice", "unshift"], function(e) {
        var r = ua[e], i = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru", u = /^(?:pop|shift)$/.test(e);
        c.prototype[e] = function() {
          var s = arguments;
          if (u && !this.__chain__) {
            var f = this.value();
            return r.apply(ee(f) ? f : [], s);
          }
          return this[i](function(h) {
            return r.apply(ee(h) ? h : [], s);
          });
        };
      }), zt(de.prototype, function(e, r) {
        var i = c[r];
        if (i) {
          var u = i.name + "";
          we.call(Jr, u) || (Jr[u] = []), Jr[u].push({ name: r, func: i });
        }
      }), Jr[Da(a, T).name] = [{
        name: "wrapper",
        func: a
      }], de.prototype.clone = tp, de.prototype.reverse = rp, de.prototype.value = np, c.prototype.at = Oy, c.prototype.chain = zy, c.prototype.commit = Ey, c.prototype.next = jy, c.prototype.plant = Fy, c.prototype.reverse = Iy, c.prototype.toJSON = c.prototype.valueOf = c.prototype.value = Ny, c.prototype.first = c.prototype.head, _n && (c.prototype[_n] = Ay), c;
    }, Ur = Ev();
    _r ? ((_r.exports = Ur)._ = Ur, fo._ = Ur) : He._ = Ur;
  }).call(H);
})(si, si.exports);
var zm = si.exports, rr = {}, vn = {}, Em = {}, hi = {};
Object.defineProperty(hi, "__esModule", { value: !0 });
hi.getSlot = void 0;
function bM(t, n = "default", a = []) {
  const l = t.$slots[n];
  return l === void 0 ? a : l();
}
hi.getSlot = bM;
var vi = {};
Object.defineProperty(vi, "__esModule", { value: !0 });
vi.getVNodeChildren = void 0;
function wM(t, n = "default", a = []) {
  const { children: o } = t;
  if (o !== null && typeof o == "object" && !Array.isArray(o)) {
    const l = o[n];
    if (typeof l == "function")
      return l();
  }
  return a;
}
vi.getVNodeChildren = wM;
var pi = {};
Object.defineProperty(pi, "__esModule", { value: !0 });
pi.keep = void 0;
function PM(t, n = [], a) {
  const o = {};
  return n.forEach((l) => {
    o[l] = t[l];
  }), Object.assign(o, a);
}
pi.keep = PM;
var gi = {};
Object.defineProperty(gi, "__esModule", { value: !0 });
gi.omit = void 0;
function MM(t, n = [], a) {
  const o = {};
  return Object.getOwnPropertyNames(t).forEach((d) => {
    n.includes(d) || (o[d] = t[d]);
  }), Object.assign(o, a);
}
gi.omit = MM;
var Zn = {};
Object.defineProperty(Zn, "__esModule", { value: !0 });
Zn.flatten = void 0;
const $l = je;
function Gl(t, n = !0, a = []) {
  return t.forEach((o) => {
    if (o !== null) {
      if (typeof o != "object") {
        (typeof o == "string" || typeof o == "number") && a.push((0, $l.createTextVNode)(String(o)));
        return;
      }
      if (Array.isArray(o)) {
        Gl(o, n, a);
        return;
      }
      if (o.type === $l.Fragment) {
        if (o.children === null)
          return;
        Array.isArray(o.children) && Gl(o.children, n, a);
      } else
        o.type !== $l.Comment && a.push(o);
    }
  }), a;
}
Zn.flatten = Gl;
var yi = {};
Object.defineProperty(yi, "__esModule", { value: !0 });
yi.call = void 0;
function jm(t, ...n) {
  if (Array.isArray(t))
    t.forEach((a) => jm(a, ...n));
  else
    return t(...n);
}
yi.call = jm;
var bi = {};
Object.defineProperty(bi, "__esModule", { value: !0 });
bi.keysOf = void 0;
function _M(t) {
  return Object.keys(t);
}
bi.keysOf = _M;
var wi = {};
Object.defineProperty(wi, "__esModule", { value: !0 });
wi.render = void 0;
const kf = je, $M = (t, ...n) => typeof t == "function" ? t(...n) : typeof t == "string" ? (0, kf.createTextVNode)(t) : typeof t == "number" ? (0, kf.createTextVNode)(String(t)) : null;
wi.render = $M;
var Pi = {}, ou = {}, vr = {};
Object.defineProperty(vr, "__esModule", { value: !0 });
vr.throwError = vr.warn = vr.warnOnce = void 0;
const Sf = /* @__PURE__ */ new Set();
function TM(t, n) {
  const a = `[naive/${t}]: ${n}`;
  Sf.has(a) || (Sf.add(a), console.error(a));
}
vr.warnOnce = TM;
function kM(t, n) {
  console.error(`[naive/${t}]: ${n}`);
}
vr.warn = kM;
function SM(t, n) {
  throw new Error(`[naive/${t}]: ${n}`);
}
vr.throwError = SM;
var sn = {};
Object.defineProperty(sn, "__esModule", { value: !0 });
sn.smallerSize = sn.largerSize = void 0;
function CM(t) {
  switch (t) {
    case "tiny":
      return "small";
    case "small":
      return "medium";
    case "medium":
      return "large";
    case "large":
      return "huge";
  }
}
sn.largerSize = CM;
function DM(t) {
  switch (t) {
    case "tiny":
      return "mini";
    case "small":
      return "tiny";
    case "medium":
      return "small";
    case "large":
      return "medium";
    case "huge":
      return "large";
  }
  throw Error(`${t} has no smaller size.`);
}
sn.smallerSize = DM;
var Mi = {};
Object.defineProperty(Mi, "__esModule", { value: !0 });
Mi.getTitleAttribute = void 0;
function WM(t) {
  switch (typeof t) {
    case "string":
      return t || void 0;
    case "number":
      return String(t);
    default:
      return;
  }
}
Mi.getTitleAttribute = WM;
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.getTitleAttribute = t.largerSize = t.smallerSize = t.throwError = t.warnOnce = t.warn = void 0;
  var n = vr;
  Object.defineProperty(t, "warn", { enumerable: !0, get: function() {
    return n.warn;
  } }), Object.defineProperty(t, "warnOnce", { enumerable: !0, get: function() {
    return n.warnOnce;
  } }), Object.defineProperty(t, "throwError", { enumerable: !0, get: function() {
    return n.throwError;
  } });
  var a = sn;
  Object.defineProperty(t, "smallerSize", { enumerable: !0, get: function() {
    return a.smallerSize;
  } }), Object.defineProperty(t, "largerSize", { enumerable: !0, get: function() {
    return a.largerSize;
  } });
  var o = Mi;
  Object.defineProperty(t, "getTitleAttribute", { enumerable: !0, get: function() {
    return o.getTitleAttribute;
  } });
})(ou);
Object.defineProperty(Pi, "__esModule", { value: !0 });
Pi.getFirstSlotVNode = void 0;
const xM = Zn, Cf = ou;
function OM(t, n = "default", a = void 0) {
  const o = t[n];
  if (!o)
    return (0, Cf.warn)("getFirstSlotVNode", `slot[${n}] is empty`), null;
  const l = (0, xM.flatten)(o(a));
  return l.length === 1 ? l[0] : ((0, Cf.warn)("getFirstSlotVNode", `slot[${n}] should have exactly one child`), null);
}
Pi.getFirstSlotVNode = OM;
var _i = {};
Object.defineProperty(_i, "__esModule", { value: !0 });
_i.createDataKey = void 0;
function zM(t) {
  return typeof t == "string" ? `s-${t}` : `n-${t}`;
}
_i.createDataKey = zM;
var $i = {};
Object.defineProperty($i, "__esModule", { value: !0 });
$i.createRefSetter = void 0;
function EM(t) {
  return (n) => {
    n ? t.value = n.$el : t.value = null;
  };
}
$i.createRefSetter = EM;
var br = {};
Object.defineProperty(br, "__esModule", { value: !0 });
br.createInjectionKey = void 0;
function jM(t) {
  return t;
}
br.createInjectionKey = jM;
var Mt = {};
Object.defineProperty(Mt, "__esModule", { value: !0 });
Mt.isSlotEmpty = Mt.resolveWrappedSlotWithProps = Mt.resolveWrappedSlot = Mt.resolveSlotWithProps = Mt.resolveSlot = void 0;
const Tl = je;
function pn(t) {
  return t.some((n) => (0, Tl.isVNode)(n) ? !(n.type === Tl.Comment || n.type === Tl.Fragment && !pn(n.children)) : !0) ? t : null;
}
function AM(t, n) {
  return t && pn(t()) || n();
}
Mt.resolveSlot = AM;
function FM(t, n, a) {
  return t && pn(t(n)) || a(n);
}
Mt.resolveSlotWithProps = FM;
function IM(t, n) {
  const a = t && pn(t());
  return n(a || null);
}
Mt.resolveWrappedSlot = IM;
function NM(t, n, a) {
  const o = t && pn(t(n));
  return a(o || null);
}
Mt.resolveWrappedSlotWithProps = NM;
function HM(t) {
  return !(t && pn(t()));
}
Mt.isSlotEmpty = HM;
var Ti = {};
Object.defineProperty(Ti, "__esModule", { value: !0 });
Ti.mergeEventHandlers = void 0;
function RM(t) {
  const n = t.filter((a) => a !== void 0);
  if (n.length !== 0)
    return n.length === 1 ? n[0] : (a) => {
      t.forEach((o) => {
        o && o(a);
      });
    };
}
Ti.mergeEventHandlers = RM;
var ki = {};
Object.defineProperty(ki, "__esModule", { value: !0 });
ki.isNodeVShowFalse = void 0;
const LM = je;
function BM(t) {
  var n;
  const a = (n = t.dirs) === null || n === void 0 ? void 0 : n.find(({ dir: o }) => o === LM.vShow);
  return !!(a && a.value === !1);
}
ki.isNodeVShowFalse = BM;
var Si = {};
Object.defineProperty(Si, "__esModule", { value: !0 });
Si.Wrapper = void 0;
const VM = je;
Si.Wrapper = (0, VM.defineComponent)({
  render() {
    var t, n;
    return (n = (t = this.$slots).default) === null || n === void 0 ? void 0 : n.call(t);
  }
});
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.Wrapper = t.isNodeVShowFalse = t.mergeEventHandlers = t.isSlotEmpty = t.resolveWrappedSlotWithProps = t.resolveSlotWithProps = t.resolveWrappedSlot = t.resolveSlot = t.createInjectionKey = t.createRefSetter = t.createDataKey = t.getFirstSlotVNode = t.render = t.keysOf = t.call = t.flatten = t.omit = t.keep = t.getVNodeChildren = t.getSlot = void 0;
  var n = hi;
  Object.defineProperty(t, "getSlot", { enumerable: !0, get: function() {
    return n.getSlot;
  } });
  var a = vi;
  Object.defineProperty(t, "getVNodeChildren", { enumerable: !0, get: function() {
    return a.getVNodeChildren;
  } });
  var o = pi;
  Object.defineProperty(t, "keep", { enumerable: !0, get: function() {
    return o.keep;
  } });
  var l = gi;
  Object.defineProperty(t, "omit", { enumerable: !0, get: function() {
    return l.omit;
  } });
  var d = Zn;
  Object.defineProperty(t, "flatten", { enumerable: !0, get: function() {
    return d.flatten;
  } });
  var m = yi;
  Object.defineProperty(t, "call", { enumerable: !0, get: function() {
    return m.call;
  } });
  var b = bi;
  Object.defineProperty(t, "keysOf", { enumerable: !0, get: function() {
    return b.keysOf;
  } });
  var y = wi;
  Object.defineProperty(t, "render", { enumerable: !0, get: function() {
    return y.render;
  } });
  var w = Pi;
  Object.defineProperty(t, "getFirstSlotVNode", { enumerable: !0, get: function() {
    return w.getFirstSlotVNode;
  } });
  var $ = _i;
  Object.defineProperty(t, "createDataKey", { enumerable: !0, get: function() {
    return $.createDataKey;
  } });
  var W = $i;
  Object.defineProperty(t, "createRefSetter", { enumerable: !0, get: function() {
    return W.createRefSetter;
  } });
  var x = br;
  Object.defineProperty(t, "createInjectionKey", { enumerable: !0, get: function() {
    return x.createInjectionKey;
  } });
  var E = Mt;
  Object.defineProperty(t, "resolveSlot", { enumerable: !0, get: function() {
    return E.resolveSlot;
  } }), Object.defineProperty(t, "resolveWrappedSlot", { enumerable: !0, get: function() {
    return E.resolveWrappedSlot;
  } }), Object.defineProperty(t, "resolveSlotWithProps", { enumerable: !0, get: function() {
    return E.resolveSlotWithProps;
  } }), Object.defineProperty(t, "resolveWrappedSlotWithProps", { enumerable: !0, get: function() {
    return E.resolveWrappedSlotWithProps;
  } }), Object.defineProperty(t, "isSlotEmpty", { enumerable: !0, get: function() {
    return E.isSlotEmpty;
  } });
  var _ = Ti;
  Object.defineProperty(t, "mergeEventHandlers", { enumerable: !0, get: function() {
    return _.mergeEventHandlers;
  } });
  var N = ki;
  Object.defineProperty(t, "isNodeVShowFalse", { enumerable: !0, get: function() {
    return N.isNodeVShowFalse;
  } });
  var O = Si;
  Object.defineProperty(t, "Wrapper", { enumerable: !0, get: function() {
    return O.Wrapper;
  } });
})(Em);
var Am = {}, Ci = {};
Object.defineProperty(Ci, "__esModule", { value: !0 });
Ci.formatLength = void 0;
const qM = /^(\d|\.)+$/, Df = /(\d|\.)+/;
function XM(t, { c: n = 1, offset: a = 0, attachPx: o = !0 } = {}) {
  if (typeof t == "number") {
    const l = (t + a) * n;
    return l === 0 ? "0" : `${l}px`;
  } else if (typeof t == "string")
    if (qM.test(t)) {
      const l = (Number(t) + a) * n;
      return o ? l === 0 ? "0" : `${l}px` : `${l}`;
    } else {
      const l = Df.exec(t);
      return l ? t.replace(Df, String((Number(l[0]) + a) * n)) : t;
    }
  return t;
}
Ci.formatLength = XM;
var Di = {};
Object.defineProperty(Di, "__esModule", { value: !0 });
Di.color2Class = void 0;
function KM(t) {
  return t.replace(/#|\(|\)|,|\s/g, "_");
}
Di.color2Class = KM;
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.color2Class = t.formatLength = void 0;
  var n = Ci;
  Object.defineProperty(t, "formatLength", { enumerable: !0, get: function() {
    return n.formatLength;
  } });
  var a = Di;
  Object.defineProperty(t, "color2Class", { enumerable: !0, get: function() {
    return a.color2Class;
  } });
})(Am);
var Wi = {};
const lu = /* @__PURE__ */ be(E1);
function Wf(t) {
  let n = ".", a = "__", o = "--", l;
  if (t) {
    let _ = t.blockPrefix;
    _ && (n = _), _ = t.elementPrefix, _ && (a = _), _ = t.modifierPrefix, _ && (o = _);
  }
  const d = {
    install(_) {
      l = _.c;
      const N = _.context;
      N.bem = {}, N.bem.b = null, N.bem.els = null;
    }
  };
  function m(_) {
    let N, O;
    return {
      before(T) {
        N = T.bem.b, O = T.bem.els, T.bem.els = null;
      },
      after(T) {
        T.bem.b = N, T.bem.els = O;
      },
      $({ context: T, props: q }) {
        return _ = typeof _ == "string" ? _ : _({ context: T, props: q }), T.bem.b = _, `${(q == null ? void 0 : q.bPrefix) || n}${T.bem.b}`;
      }
    };
  }
  function b(_) {
    let N;
    return {
      before(O) {
        N = O.bem.els;
      },
      after(O) {
        O.bem.els = N;
      },
      $({ context: O, props: T }) {
        return _ = typeof _ == "string" ? _ : _({ context: O, props: T }), O.bem.els = _.split(",").map((q) => q.trim()), O.bem.els.map((q) => `${(T == null ? void 0 : T.bPrefix) || n}${O.bem.b}${a}${q}`).join(", ");
      }
    };
  }
  function y(_) {
    return {
      $({ context: N, props: O }) {
        _ = typeof _ == "string" ? _ : _({ context: N, props: O });
        const T = _.split(",").map((ae) => ae.trim());
        function q(ae) {
          return T.map((oe) => `&${(O == null ? void 0 : O.bPrefix) || n}${N.bem.b}${ae !== void 0 ? `${a}${ae}` : ""}${o}${oe}`).join(", ");
        }
        const Q = N.bem.els;
        if (Q !== null) {
          if (process.env.NODE_ENV !== "production" && Q.length >= 2)
            throw Error(`[css-render/plugin-bem]: m(${_}) is invalid, using modifier inside multiple elements is not allowed`);
          return q(Q[0]);
        } else
          return q();
      }
    };
  }
  function w(_) {
    return {
      $({ context: N, props: O }) {
        _ = typeof _ == "string" ? _ : _({ context: N, props: O });
        const T = N.bem.els;
        if (process.env.NODE_ENV !== "production" && T !== null && T.length >= 2)
          throw Error(`[css-render/plugin-bem]: notM(${_}) is invalid, using modifier inside multiple elements is not allowed`);
        return `&:not(${(O == null ? void 0 : O.bPrefix) || n}${N.bem.b}${T !== null && T.length > 0 ? `${a}${T[0]}` : ""}${o}${_})`;
      }
    };
  }
  return Object.assign(d, {
    cB: (..._) => l(m(_[0]), _[1], _[2]),
    cE: (..._) => l(b(_[0]), _[1], _[2]),
    cM: (..._) => l(y(_[0]), _[1], _[2]),
    cNotM: (..._) => l(w(_[0]), _[1], _[2])
  }), d;
}
const GM = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Wf,
  plugin: Wf
}, Symbol.toStringTag, { value: "Module" })), UM = /* @__PURE__ */ be(GM);
var xi = {};
Object.defineProperty(xi, "__esModule", { value: !0 });
xi.createKey = void 0;
function Fm(t, n) {
  return t + (n === "default" ? "" : n.replace(/^[a-z]/, (a) => a.toUpperCase()));
}
xi.createKey = Fm;
Fm("abc", "def");
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.createKey = t.find = t.namespace = t.prefix = t.asModal = t.insidePopover = t.insideModal = t.cCB = t.cNotM = t.cM = t.cE = t.cB = t.c = void 0;
  const n = lu, a = UM, o = "n";
  t.namespace = o;
  const l = `.${o}-`;
  t.prefix = l;
  const d = "__", m = "--", b = (0, n.CssRender)(), y = (0, a.plugin)({
    blockPrefix: l,
    elementPrefix: d,
    modifierPrefix: m
  });
  b.use(y);
  const { c: w, find: $ } = b;
  t.c = w, t.find = $;
  const { cB: W, cE: x, cM: E, cNotM: _ } = y;
  t.cB = W, t.cE = x, t.cM = E, t.cNotM = _;
  function N(ae) {
    return w(({ props: { bPrefix: oe } }) => `${oe || l}modal, ${oe || l}drawer`, [ae]);
  }
  t.insideModal = N;
  function O(ae) {
    return w(({ props: { bPrefix: oe } }) => `${oe || l}popover`, [ae]);
  }
  t.insidePopover = O;
  function T(ae) {
    return w(({ props: { bPrefix: oe } }) => `&${oe || l}modal`, ae);
  }
  t.asModal = T;
  const q = (...ae) => w(">", [W(...ae)]);
  t.cCB = q;
  var Q = xi;
  Object.defineProperty(t, "createKey", { enumerable: !0, get: function() {
    return Q.createKey;
  } });
})(Wi);
var Oi = {};
Object.defineProperty(Oi, "__esModule", { value: !0 });
Oi.isJsdom = void 0;
let kl;
function YM() {
  return kl === void 0 && (kl = navigator.userAgent.includes("Node.js") || navigator.userAgent.includes("jsdom")), kl;
}
Oi.isJsdom = YM;
var dn = {};
Object.defineProperty(dn, "__esModule", { value: !0 });
dn.eventEffectNotPerformed = dn.markEventEffectPerformed = void 0;
const Im = /* @__PURE__ */ new WeakSet();
function ZM(t) {
  Im.add(t);
}
dn.markEventEffectPerformed = ZM;
function JM(t) {
  return !Im.has(t);
}
dn.eventEffectNotPerformed = JM;
var Nm = {}, pr = {};
Object.defineProperty(pr, "__esModule", { value: !0 });
pr.useInjectionElementCollection = pr.useInjectionCollection = pr.useInjectionInstanceCollection = void 0;
const It = je;
function QM(t, n, a) {
  var o;
  const l = (0, It.inject)(t, null);
  if (l === null)
    return;
  const d = (o = (0, It.getCurrentInstance)()) === null || o === void 0 ? void 0 : o.proxy;
  (0, It.watch)(a, m), m(a.value), (0, It.onBeforeUnmount)(() => {
    m(void 0, a.value);
  });
  function m(w, $) {
    const W = l[n];
    $ !== void 0 && b(W, $), w !== void 0 && y(W, w);
  }
  function b(w, $) {
    w[$] || (w[$] = []), w[$].splice(w[$].findIndex((W) => W === d), 1);
  }
  function y(w, $) {
    w[$] || (w[$] = []), ~w[$].findIndex((W) => W === d) || w[$].push(d);
  }
}
pr.useInjectionInstanceCollection = QM;
function e_(t, n, a) {
  const o = (0, It.inject)(t, null);
  o !== null && (n in o || (o[n] = []), o[n].push(a.value), (0, It.watch)(a, (l, d) => {
    const m = o[n], b = m.findIndex((y) => y === d);
    ~b && m.splice(b, 1), m.push(l);
  }), (0, It.onBeforeUnmount)(() => {
    const l = o[n], d = l.findIndex((m) => m === a.value);
    ~d && l.splice(d, 1);
  }));
}
pr.useInjectionCollection = e_;
function t_(t, n, a) {
  const o = (0, It.inject)(t, null);
  o !== null && (n in o || (o[n] = []), (0, It.onMounted)(() => {
    const l = a();
    l && o[n].push(l);
  }), (0, It.onBeforeUnmount)(() => {
    const l = o[n], d = a(), m = l.findIndex((b) => b === d);
    ~m && l.splice(m, 1);
  }));
}
pr.useInjectionElementCollection = t_;
var zi = {};
Object.defineProperty(zi, "__esModule", { value: !0 });
zi.useDeferredTrue = void 0;
const xf = je;
function r_(t, n, a) {
  if (!n)
    return t;
  const o = (0, xf.ref)(t.value);
  let l = null;
  return (0, xf.watch)(t, (d) => {
    l !== null && window.clearTimeout(l), d === !0 ? a && !a.value ? o.value = !0 : l = window.setTimeout(() => {
      o.value = !0;
    }, n) : o.value = !1;
  }), o;
}
zi.useDeferredTrue = r_;
var Ei = {}, cn = {};
Object.defineProperty(cn, "__esModule", { value: !0 });
cn.internalSelectionMenuBodyInjectionKey = cn.internalSelectionMenuInjectionKey = void 0;
const Hm = br;
cn.internalSelectionMenuInjectionKey = (0, Hm.createInjectionKey)("n-internal-select-menu");
cn.internalSelectionMenuBodyInjectionKey = (0, Hm.createInjectionKey)("n-internal-select-menu-body");
var fn = {};
Object.defineProperty(fn, "__esModule", { value: !0 });
fn.modalInjectionKey = fn.modalBodyInjectionKey = void 0;
const Rm = br;
fn.modalBodyInjectionKey = (0, Rm.createInjectionKey)("n-modal-body");
fn.modalInjectionKey = (0, Rm.createInjectionKey)("n-modal");
var mn = {};
Object.defineProperty(mn, "__esModule", { value: !0 });
mn.drawerInjectionKey = mn.drawerBodyInjectionKey = void 0;
const Lm = br;
mn.drawerBodyInjectionKey = (0, Lm.createInjectionKey)("n-drawer-body");
mn.drawerInjectionKey = (0, Lm.createInjectionKey)("n-drawer");
var ji = {};
Object.defineProperty(ji, "__esModule", { value: !0 });
ji.popoverBodyInjectionKey = void 0;
const n_ = br;
ji.popoverBodyInjectionKey = (0, n_.createInjectionKey)("n-popover-body");
Object.defineProperty(Ei, "__esModule", { value: !0 });
Ei.useAdjustedTo = void 0;
const a_ = w0, Of = yM, zr = je, i_ = cn, o_ = fn, l_ = mn, u_ = ji, Bm = "__disabled__";
function uu(t) {
  const n = (0, zr.inject)(o_.modalBodyInjectionKey, null), a = (0, zr.inject)(l_.drawerBodyInjectionKey, null), o = (0, zr.inject)(u_.popoverBodyInjectionKey, null), l = (0, zr.inject)(i_.internalSelectionMenuBodyInjectionKey, null), d = (0, zr.ref)();
  if (typeof document < "u") {
    d.value = document.fullscreenElement;
    const m = () => {
      d.value = document.fullscreenElement;
    };
    (0, zr.onMounted)(() => {
      (0, Of.on)("fullscreenchange", document, m);
    }), (0, zr.onBeforeUnmount)(() => {
      (0, Of.off)("fullscreenchange", document, m);
    });
  }
  return (0, a_.useMemo)(() => {
    var m;
    const { to: b } = t;
    return b !== void 0 ? b === !1 ? Bm : b === !0 ? d.value || "body" : b : n != null && n.value ? (m = n.value.$el) !== null && m !== void 0 ? m : n.value : a != null && a.value ? a.value : o != null && o.value ? o.value : l != null && l.value ? l.value : b ?? (d.value || "body");
  });
}
Ei.useAdjustedTo = uu;
uu.tdkey = Bm;
uu.propTo = {
  type: [String, Object, Boolean],
  default: void 0
};
var Ai = {};
Object.defineProperty(Ai, "__esModule", { value: !0 });
Ai.useHoudini = void 0;
const s_ = hn;
let zf = !1;
function d_() {
  if (s_.isBrowser && window.CSS && !zf && (zf = !0, "registerProperty" in (window == null ? void 0 : window.CSS)))
    try {
      CSS.registerProperty({
        name: "--n-color-start",
        syntax: "<color>",
        inherits: !1,
        initialValue: "#0000"
      }), CSS.registerProperty({
        name: "--n-color-end",
        syntax: "<color>",
        inherits: !1,
        initialValue: "#0000"
      });
    } catch {
    }
}
Ai.useHoudini = d_;
var Fi = {};
Object.defineProperty(Fi, "__esModule", { value: !0 });
Fi.useOnResize = void 0;
const Ef = je, jf = gM;
function c_(t, n) {
  n && ((0, Ef.onMounted)(() => {
    const { value: a } = t;
    a && jf.resizeObserverManager.registerHandler(a, n);
  }), (0, Ef.onBeforeUnmount)(() => {
    const { value: a } = t;
    a && jf.resizeObserverManager.unregisterHandler(a);
  }));
}
Fi.useOnResize = c_;
var Vm = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.useLockHtmlScroll = t.lockHtmlScrollRightCompensationRef = void 0;
  const n = je;
  let a = 0, o = "", l = "", d = "", m = "";
  t.lockHtmlScrollRightCompensationRef = (0, n.ref)("0px");
  function b(y) {
    if (typeof document > "u")
      return;
    const w = document.documentElement;
    let $, W = !1;
    const x = () => {
      w.style.marginRight = o, w.style.overflow = l, w.style.overflowX = d, w.style.overflowY = m, t.lockHtmlScrollRightCompensationRef.value = "0px";
    };
    (0, n.onMounted)(() => {
      $ = (0, n.watch)(y, (E) => {
        if (E) {
          if (!a) {
            const _ = window.innerWidth - w.offsetWidth;
            _ > 0 && (o = w.style.marginRight, w.style.marginRight = `${_}px`, t.lockHtmlScrollRightCompensationRef.value = `${_}px`), l = w.style.overflow, d = w.style.overflowX, m = w.style.overflowY, w.style.overflow = "hidden", w.style.overflowX = "hidden", w.style.overflowY = "hidden";
          }
          W = !0, a++;
        } else
          a--, a || x(), W = !1;
      }, {
        immediate: !0
      });
    }), (0, n.onBeforeUnmount)(() => {
      $ == null || $(), W && (a--, a || x(), W = !1);
    });
  }
  t.useLockHtmlScroll = b;
})(Vm);
var Ii = {};
Object.defineProperty(Ii, "__esModule", { value: !0 });
Ii.useIsComposing = void 0;
const Ul = je, f_ = hn, su = (0, Ul.ref)(!1), Af = () => {
  su.value = !0;
}, Ff = () => {
  su.value = !1;
};
let Nn = 0;
const m_ = () => (f_.isBrowser && ((0, Ul.onBeforeMount)(() => {
  Nn || (window.addEventListener("compositionstart", Af), window.addEventListener("compositionend", Ff)), Nn++;
}), (0, Ul.onBeforeUnmount)(() => {
  Nn <= 1 ? (window.removeEventListener("compositionstart", Af), window.removeEventListener("compositionend", Ff), Nn = 0) : Nn--;
})), su);
Ii.useIsComposing = m_;
var Ni = {};
Object.defineProperty(Ni, "__esModule", { value: !0 });
Ni.useReactivated = void 0;
const If = je;
function h_(t) {
  const n = { isDeactivated: !1 };
  let a = !1;
  return (0, If.onActivated)(() => {
    if (n.isDeactivated = !1, !a) {
      a = !0;
      return;
    }
    t();
  }), (0, If.onDeactivated)(() => {
    n.isDeactivated = !0, a || (a = !0);
  }), n;
}
Ni.useReactivated = h_;
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.useReactivated = t.useIsComposing = t.lockHtmlScrollRightCompensationRef = t.useLockHtmlScroll = t.useOnResize = t.useHoudini = t.useAdjustedTo = t.useDeferredTrue = t.useInjectionInstanceCollection = t.useInjectionElementCollection = t.useInjectionCollection = void 0;
  var n = pr;
  Object.defineProperty(t, "useInjectionCollection", { enumerable: !0, get: function() {
    return n.useInjectionCollection;
  } }), Object.defineProperty(t, "useInjectionElementCollection", { enumerable: !0, get: function() {
    return n.useInjectionElementCollection;
  } }), Object.defineProperty(t, "useInjectionInstanceCollection", { enumerable: !0, get: function() {
    return n.useInjectionInstanceCollection;
  } });
  var a = zi;
  Object.defineProperty(t, "useDeferredTrue", { enumerable: !0, get: function() {
    return a.useDeferredTrue;
  } });
  var o = Ei;
  Object.defineProperty(t, "useAdjustedTo", { enumerable: !0, get: function() {
    return o.useAdjustedTo;
  } });
  var l = Ai;
  Object.defineProperty(t, "useHoudini", { enumerable: !0, get: function() {
    return l.useHoudini;
  } });
  var d = Fi;
  Object.defineProperty(t, "useOnResize", { enumerable: !0, get: function() {
    return d.useOnResize;
  } });
  var m = Vm;
  Object.defineProperty(t, "useLockHtmlScroll", { enumerable: !0, get: function() {
    return m.useLockHtmlScroll;
  } }), Object.defineProperty(t, "lockHtmlScrollRightCompensationRef", { enumerable: !0, get: function() {
    return m.lockHtmlScrollRightCompensationRef;
  } });
  var b = Ii;
  Object.defineProperty(t, "useIsComposing", { enumerable: !0, get: function() {
    return b.useIsComposing;
  } });
  var y = Ni;
  Object.defineProperty(t, "useReactivated", { enumerable: !0, get: function() {
    return y.useReactivated;
  } });
})(Nm);
var qm = {}, Hi = {};
Object.defineProperty(Hi, "__esModule", { value: !0 });
Hi.isDocument = void 0;
function v_(t) {
  return t.nodeName === "#document";
}
Hi.isDocument = v_;
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.isDocument = void 0;
  var n = Hi;
  Object.defineProperty(t, "isDocument", { enumerable: !0, get: function() {
    return n.isDocument;
  } });
})(qm);
(function(t) {
  var n = H && H.__createBinding || (Object.create ? function($, W, x, E) {
    E === void 0 && (E = x);
    var _ = Object.getOwnPropertyDescriptor(W, x);
    (!_ || ("get" in _ ? !W.__esModule : _.writable || _.configurable)) && (_ = { enumerable: !0, get: function() {
      return W[x];
    } }), Object.defineProperty($, E, _);
  } : function($, W, x, E) {
    E === void 0 && (E = x), $[E] = W[x];
  }), a = H && H.__exportStar || function($, W) {
    for (var x in $)
      x !== "default" && !Object.prototype.hasOwnProperty.call(W, x) && n(W, $, x);
  };
  Object.defineProperty(t, "__esModule", { value: !0 }), t.markEventEffectPerformed = t.eventEffectNotPerformed = t.isBrowser = t.isJsdom = t.createKey = t.color2Class = t.formatLength = t.getTitleAttribute = t.largerSize = t.smallerSize = t.throwError = t.warnOnce = t.warn = t.Wrapper = t.resolveWrappedSlotWithProps = t.isNodeVShowFalse = t.mergeEventHandlers = t.isSlotEmpty = t.resolveWrappedSlot = t.resolveSlotWithProps = t.resolveSlot = t.createInjectionKey = t.createRefSetter = t.createDataKey = t.getFirstSlotVNode = t.render = t.keysOf = t.getVNodeChildren = t.getSlot = t.flatten = t.omit = t.keep = t.call = void 0;
  var o = Em;
  Object.defineProperty(t, "call", { enumerable: !0, get: function() {
    return o.call;
  } }), Object.defineProperty(t, "keep", { enumerable: !0, get: function() {
    return o.keep;
  } }), Object.defineProperty(t, "omit", { enumerable: !0, get: function() {
    return o.omit;
  } }), Object.defineProperty(t, "flatten", { enumerable: !0, get: function() {
    return o.flatten;
  } }), Object.defineProperty(t, "getSlot", { enumerable: !0, get: function() {
    return o.getSlot;
  } }), Object.defineProperty(t, "getVNodeChildren", { enumerable: !0, get: function() {
    return o.getVNodeChildren;
  } }), Object.defineProperty(t, "keysOf", { enumerable: !0, get: function() {
    return o.keysOf;
  } }), Object.defineProperty(t, "render", { enumerable: !0, get: function() {
    return o.render;
  } }), Object.defineProperty(t, "getFirstSlotVNode", { enumerable: !0, get: function() {
    return o.getFirstSlotVNode;
  } }), Object.defineProperty(t, "createDataKey", { enumerable: !0, get: function() {
    return o.createDataKey;
  } }), Object.defineProperty(t, "createRefSetter", { enumerable: !0, get: function() {
    return o.createRefSetter;
  } }), Object.defineProperty(t, "createInjectionKey", { enumerable: !0, get: function() {
    return o.createInjectionKey;
  } }), Object.defineProperty(t, "resolveSlot", { enumerable: !0, get: function() {
    return o.resolveSlot;
  } }), Object.defineProperty(t, "resolveSlotWithProps", { enumerable: !0, get: function() {
    return o.resolveSlotWithProps;
  } }), Object.defineProperty(t, "resolveWrappedSlot", { enumerable: !0, get: function() {
    return o.resolveWrappedSlot;
  } }), Object.defineProperty(t, "isSlotEmpty", { enumerable: !0, get: function() {
    return o.isSlotEmpty;
  } }), Object.defineProperty(t, "mergeEventHandlers", { enumerable: !0, get: function() {
    return o.mergeEventHandlers;
  } }), Object.defineProperty(t, "isNodeVShowFalse", { enumerable: !0, get: function() {
    return o.isNodeVShowFalse;
  } }), Object.defineProperty(t, "resolveWrappedSlotWithProps", { enumerable: !0, get: function() {
    return o.resolveWrappedSlotWithProps;
  } }), Object.defineProperty(t, "Wrapper", { enumerable: !0, get: function() {
    return o.Wrapper;
  } });
  var l = ou;
  Object.defineProperty(t, "warn", { enumerable: !0, get: function() {
    return l.warn;
  } }), Object.defineProperty(t, "warnOnce", { enumerable: !0, get: function() {
    return l.warnOnce;
  } }), Object.defineProperty(t, "throwError", { enumerable: !0, get: function() {
    return l.throwError;
  } }), Object.defineProperty(t, "smallerSize", { enumerable: !0, get: function() {
    return l.smallerSize;
  } }), Object.defineProperty(t, "largerSize", { enumerable: !0, get: function() {
    return l.largerSize;
  } }), Object.defineProperty(t, "getTitleAttribute", { enumerable: !0, get: function() {
    return l.getTitleAttribute;
  } });
  var d = Am;
  Object.defineProperty(t, "formatLength", { enumerable: !0, get: function() {
    return d.formatLength;
  } }), Object.defineProperty(t, "color2Class", { enumerable: !0, get: function() {
    return d.color2Class;
  } });
  var m = Wi;
  Object.defineProperty(t, "createKey", { enumerable: !0, get: function() {
    return m.createKey;
  } });
  var b = Oi;
  Object.defineProperty(t, "isJsdom", { enumerable: !0, get: function() {
    return b.isJsdom;
  } });
  var y = hn;
  Object.defineProperty(t, "isBrowser", { enumerable: !0, get: function() {
    return y.isBrowser;
  } });
  var w = dn;
  Object.defineProperty(t, "eventEffectNotPerformed", { enumerable: !0, get: function() {
    return w.eventEffectNotPerformed;
  } }), Object.defineProperty(t, "markEventEffectPerformed", { enumerable: !0, get: function() {
    return w.markEventEffectPerformed;
  } }), a(Nm, t), a(qm, t);
})(vn);
Object.defineProperty(rr, "__esModule", { value: !0 });
rr.configProviderInjectionKey = void 0;
const p_ = vn;
rr.configProviderInjectionKey = (0, p_.createInjectionKey)("n-config-provider");
var Ri = {};
const Li = /* @__PURE__ */ be(g1);
var gn = {};
Object.defineProperty(gn, "__esModule", { value: !0 });
gn.cssrAnchorMetaName = void 0;
gn.cssrAnchorMetaName = "naive-ui-style";
Object.defineProperty(Ri, "__esModule", { value: !0 });
Ri.useRtl = void 0;
const Sl = je, g_ = lu, y_ = Li, b_ = gn;
function w_(t, n, a) {
  if (!n)
    return;
  const o = (0, y_.useSsrAdapter)(), l = (0, Sl.computed)(() => {
    const { value: m } = n;
    if (!m)
      return;
    const b = m[t];
    if (b)
      return b;
  }), d = () => {
    (0, Sl.watchEffect)(() => {
      const { value: m } = a, b = `${m}${t}Rtl`;
      if ((0, g_.exists)(b, o))
        return;
      const { value: y } = l;
      y && y.style.mount({
        id: b,
        head: !0,
        anchorMetaName: b_.cssrAnchorMetaName,
        props: {
          bPrefix: m ? `.${m}-` : void 0
        },
        ssr: o
      });
    });
  };
  return o ? d() : (0, Sl.onBeforeMount)(d), l;
}
Ri.useRtl = w_;
var P_ = {}, Xm = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.formItemInjectionKey = void 0;
  const n = je, a = vn;
  t.formItemInjectionKey = (0, a.createInjectionKey)("n-form-item");
  function o(l, { defaultSize: d = "medium", mergedSize: m, mergedDisabled: b } = {}) {
    const y = (0, n.inject)(t.formItemInjectionKey, null);
    (0, n.provide)(t.formItemInjectionKey, null);
    const w = (0, n.computed)(m ? () => m(y) : () => {
      const { size: x } = l;
      if (x)
        return x;
      if (y) {
        const { mergedSize: E } = y;
        if (E.value !== void 0)
          return E.value;
      }
      return d;
    }), $ = (0, n.computed)(b ? () => b(y) : () => {
      const { disabled: x } = l;
      return x !== void 0 ? x : y ? y.disabled.value : !1;
    }), W = (0, n.computed)(() => {
      const { status: x } = l;
      return x || (y == null ? void 0 : y.mergedValidationStatus.value);
    });
    return (0, n.onBeforeUnmount)(() => {
      y && y.restoreValidation();
    }), {
      mergedSizeRef: w,
      mergedDisabledRef: $,
      mergedStatusRef: W,
      nTriggerFormBlur() {
        y && y.handleContentBlur();
      },
      nTriggerFormChange() {
        y && y.handleContentChange();
      },
      nTriggerFormFocus() {
        y && y.handleContentFocus();
      },
      nTriggerFormInput() {
        y && y.handleContentInput();
      }
    };
  }
  t.default = o;
})(Xm);
var Jn = {}, Bi = {}, Qn = {};
Object.defineProperty(Qn, "__esModule", { value: !0 });
Qn.default = {
  fontFamily: 'v-sans, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  fontFamilyMono: "v-mono, SFMono-Regular, Menlo, Consolas, Courier, monospace",
  fontWeight: "400",
  fontWeightStrong: "500",
  cubicBezierEaseInOut: "cubic-bezier(.4, 0, .2, 1)",
  cubicBezierEaseOut: "cubic-bezier(0, 0, .2, 1)",
  cubicBezierEaseIn: "cubic-bezier(.4, 0, 1, 1)",
  borderRadius: "3px",
  borderRadiusSmall: "2px",
  fontSize: "14px",
  fontSizeMini: "12px",
  fontSizeTiny: "12px",
  fontSizeSmall: "14px",
  fontSizeMedium: "14px",
  fontSizeLarge: "15px",
  fontSizeHuge: "16px",
  lineHeight: "1.6",
  heightMini: "16px",
  heightTiny: "22px",
  heightSmall: "28px",
  heightMedium: "34px",
  heightLarge: "40px",
  heightHuge: "46px"
};
var M_ = H && H.__importDefault || function(t) {
  return t && t.__esModule ? t : {
    default: t
  };
};
Object.defineProperty(Bi, "__esModule", {
  value: !0
});
const Nf = Wi, __ = M_(Qn), {
  fontSize: $_,
  fontFamily: T_,
  lineHeight: k_
} = __.default;
Bi.default = (0, Nf.c)("body", `
 margin: 0;
 font-size: ${$_};
 font-family: ${T_};
 line-height: ${k_};
 -webkit-text-size-adjust: 100%;
 -webkit-tap-highlight-color: transparent;
`, [(0, Nf.c)("input", `
 font-family: inherit;
 font-size: inherit;
 `)]);
var S_ = H && H.__importDefault || function(t) {
  return t && t.__esModule ? t : { default: t };
};
Object.defineProperty(Jn, "__esModule", { value: !0 });
Jn.createTheme = void 0;
const Cl = je, ei = zm, C_ = Li, D_ = S_(Bi), W_ = rr, Hf = gn;
function x_(t) {
  return t;
}
Jn.createTheme = x_;
function Km(t, n, a, o, l, d) {
  const m = (0, C_.useSsrAdapter)(), b = (0, Cl.inject)(W_.configProviderInjectionKey, null);
  if (a) {
    const w = () => {
      const $ = d == null ? void 0 : d.value;
      a.mount({
        id: $ === void 0 ? n : $ + n,
        head: !0,
        props: {
          bPrefix: $ ? `.${$}-` : void 0
        },
        anchorMetaName: Hf.cssrAnchorMetaName,
        ssr: m
      }), b != null && b.preflightStyleDisabled || D_.default.mount({
        id: "n-global",
        head: !0,
        anchorMetaName: Hf.cssrAnchorMetaName,
        ssr: m
      });
    };
    m ? w() : (0, Cl.onBeforeMount)(w);
  }
  return (0, Cl.computed)(() => {
    var w;
    const { theme: { common: $, self: W, peers: x = {} } = {}, themeOverrides: E = {}, builtinThemeOverrides: _ = {} } = l, { common: N, peers: O } = E, { common: T = void 0, [t]: { common: q = void 0, self: Q = void 0, peers: ae = {} } = {} } = (b == null ? void 0 : b.mergedThemeRef.value) || {}, { common: oe = void 0, [t]: Pe = {} } = (b == null ? void 0 : b.mergedThemeOverridesRef.value) || {}, { common: j, peers: A = {} } = Pe, Z = (0, ei.merge)({}, $ || q || T || o.common, oe, j, N), ce = (0, ei.merge)(
      // {}, executed every time, no need for empty obj
      (w = W || Q || o.self) === null || w === void 0 ? void 0 : w(Z),
      _,
      Pe,
      E
    );
    return {
      common: Z,
      self: ce,
      peers: (0, ei.merge)({}, o.peers, ae, x),
      peerOverrides: (0, ei.merge)({}, _.peers, A, O)
    };
  });
}
Km.props = {
  theme: Object,
  themeOverrides: Object,
  builtinThemeOverrides: Object
};
Jn.default = Km;
var Gm = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.defaultClsPrefix = void 0;
  const n = je, a = rr;
  t.defaultClsPrefix = "n";
  function o(l = {}, d = {
    defaultBordered: !0
  }) {
    const m = (0, n.inject)(a.configProviderInjectionKey, null);
    return {
      // NConfigProvider,
      inlineThemeDisabled: m == null ? void 0 : m.inlineThemeDisabled,
      mergedRtlRef: m == null ? void 0 : m.mergedRtlRef,
      mergedComponentPropsRef: m == null ? void 0 : m.mergedComponentPropsRef,
      mergedBreakpointsRef: m == null ? void 0 : m.mergedBreakpointsRef,
      mergedBorderedRef: (0, n.computed)(() => {
        var b, y;
        const { bordered: w } = l;
        return w !== void 0 ? w : (y = (b = m == null ? void 0 : m.mergedBorderedRef.value) !== null && b !== void 0 ? b : d.defaultBordered) !== null && y !== void 0 ? y : !0;
      }),
      mergedClsPrefixRef: (0, n.computed)(() => (m == null ? void 0 : m.mergedClsPrefixRef.value) || t.defaultClsPrefix),
      namespaceRef: (0, n.computed)(() => m == null ? void 0 : m.mergedNamespaceRef.value)
    };
  }
  t.default = o;
})(Gm);
var du = {}, Um = {}, cu = {};
Object.defineProperty(cu, "__esModule", { value: !0 });
const O_ = {
  name: "zh-CN",
  global: {
    undo: "撤销",
    redo: "重做",
    confirm: "确认",
    clear: "清除"
  },
  Popconfirm: {
    positiveText: "确认",
    negativeText: "取消"
  },
  Cascader: {
    placeholder: "请选择",
    loading: "加载中",
    loadingRequiredMessage: (t) => `加载全部 ${t} 的子节点后才可选中`
  },
  Time: {
    dateFormat: "yyyy-MM-dd",
    dateTimeFormat: "yyyy-MM-dd HH:mm:ss"
  },
  DatePicker: {
    yearFormat: "yyyy年",
    monthFormat: "MMM",
    dayFormat: "eeeeee",
    yearTypeFormat: "yyyy",
    monthTypeFormat: "yyyy-MM",
    dateFormat: "yyyy-MM-dd",
    dateTimeFormat: "yyyy-MM-dd HH:mm:ss",
    quarterFormat: "yyyy-qqq",
    clear: "清除",
    now: "此刻",
    confirm: "确认",
    selectTime: "选择时间",
    selectDate: "选择日期",
    datePlaceholder: "选择日期",
    datetimePlaceholder: "选择日期时间",
    monthPlaceholder: "选择月份",
    yearPlaceholder: "选择年份",
    quarterPlaceholder: "选择季度",
    startDatePlaceholder: "开始日期",
    endDatePlaceholder: "结束日期",
    startDatetimePlaceholder: "开始日期时间",
    endDatetimePlaceholder: "结束日期时间",
    startMonthPlaceholder: "开始月份",
    endMonthPlaceholder: "结束月份",
    monthBeforeYear: !1,
    firstDayOfWeek: 0,
    today: "今天"
  },
  DataTable: {
    checkTableAll: "选择全部表格数据",
    uncheckTableAll: "取消选择全部表格数据",
    confirm: "确认",
    clear: "重置"
  },
  LegacyTransfer: {
    sourceTitle: "源项",
    targetTitle: "目标项"
  },
  Transfer: {
    selectAll: "全选",
    clearAll: "清除",
    unselectAll: "取消全选",
    total: (t) => `共 ${t} 项`,
    selected: (t) => `已选 ${t} 项`
  },
  Empty: {
    description: "无数据"
  },
  Select: {
    placeholder: "请选择"
  },
  TimePicker: {
    placeholder: "请选择时间",
    positiveText: "确认",
    negativeText: "取消",
    now: "此刻"
  },
  Pagination: {
    goto: "跳至",
    selectionSuffix: "页"
  },
  DynamicTags: {
    add: "添加"
  },
  Log: {
    loading: "加载中"
  },
  Input: {
    placeholder: "请输入"
  },
  InputNumber: {
    placeholder: "请输入"
  },
  DynamicInput: {
    create: "添加"
  },
  ThemeEditor: {
    title: "主题编辑器",
    clearAllVars: "清除全部变量",
    clearSearch: "清除搜索",
    filterCompName: "过滤组件名",
    filterVarName: "过滤变量名",
    import: "导入",
    export: "导出",
    restore: "恢复默认"
  },
  Image: {
    tipPrevious: "上一张（←）",
    tipNext: "下一张（→）",
    tipCounterclockwise: "向左旋转",
    tipClockwise: "向右旋转",
    tipZoomOut: "缩小",
    tipZoomIn: "放大",
    tipClose: "关闭（Esc）",
    tipOriginalSize: "缩放到原始尺寸"
  }
};
cu.default = O_;
var fu = {};
Object.defineProperty(fu, "__esModule", { value: !0 });
const z_ = {
  name: "zh-TW",
  global: {
    undo: "撤銷",
    redo: "重做",
    confirm: "確認",
    clear: "清除"
  },
  Popconfirm: {
    positiveText: "確認",
    negativeText: "取消"
  },
  Cascader: {
    placeholder: "請選擇",
    loading: "載入中",
    loadingRequiredMessage: (t) => `載入全部 ${t} 的子節點後才可選中`
  },
  Time: {
    dateFormat: "yyyy-MM-dd",
    dateTimeFormat: "yyyy-MM-dd HH:mm:ss"
  },
  DatePicker: {
    yearFormat: "yyyy年",
    monthFormat: "MMM",
    dayFormat: "eeeeee",
    yearTypeFormat: "yyyy",
    monthTypeFormat: "yyyy-MM",
    dateFormat: "yyyy-MM-dd",
    dateTimeFormat: "yyyy-MM-dd HH:mm:ss",
    quarterFormat: "yyyy-qqq",
    clear: "清除",
    now: "此刻",
    confirm: "確認",
    selectTime: "選擇時間",
    selectDate: "選擇日期",
    datePlaceholder: "選擇日期",
    datetimePlaceholder: "選擇日期時間",
    monthPlaceholder: "選擇月份",
    yearPlaceholder: "選擇年份",
    quarterPlaceholder: "選擇季度",
    startDatePlaceholder: "開始日期",
    endDatePlaceholder: "結束日期",
    startDatetimePlaceholder: "開始日期時間",
    endDatetimePlaceholder: "結束日期時間",
    startMonthPlaceholder: "開始月份",
    endMonthPlaceholder: "結束月份",
    monthBeforeYear: !1,
    firstDayOfWeek: 0,
    today: "今天"
  },
  DataTable: {
    checkTableAll: "選擇全部表格資料",
    uncheckTableAll: "取消選擇全部表格資料",
    confirm: "確認",
    clear: "重置"
  },
  LegacyTransfer: {
    sourceTitle: "源項",
    targetTitle: "目標項"
  },
  Transfer: {
    selectAll: "全選",
    unselectAll: "取消全選",
    clearAll: "清除",
    total: (t) => `共 ${t} 項`,
    selected: (t) => `已選 ${t} 項`
  },
  Empty: {
    description: "無資料"
  },
  Select: {
    placeholder: "請選擇"
  },
  TimePicker: {
    placeholder: "請選擇時間",
    positiveText: "確認",
    negativeText: "取消",
    now: "此刻"
  },
  Pagination: {
    goto: "跳至",
    selectionSuffix: "頁"
  },
  DynamicTags: {
    add: "新增"
  },
  Log: {
    loading: "載入中"
  },
  Input: {
    placeholder: "請輸入"
  },
  InputNumber: {
    placeholder: "請輸入"
  },
  DynamicInput: {
    create: "新增"
  },
  ThemeEditor: {
    title: "主題編輯器",
    clearAllVars: "清除全部變數",
    clearSearch: "清除搜尋",
    filterCompName: "過濾組件名",
    filterVarName: "過濾變數名",
    import: "導入",
    export: "匯出",
    restore: "恢復預設"
  },
  Image: {
    tipPrevious: "上一張（←）",
    tipNext: "下一張（→）",
    tipCounterclockwise: "向左旋轉",
    tipClockwise: "向右旋轉",
    tipZoomOut: "縮小",
    tipZoomIn: "放大",
    tipClose: "關閉（Esc）",
    tipOriginalSize: "縮放到原始尺寸"
  }
};
fu.default = z_;
var mu = {};
Object.defineProperty(mu, "__esModule", { value: !0 });
const E_ = {
  name: "en-US",
  global: {
    undo: "Undo",
    redo: "Redo",
    confirm: "Confirm",
    clear: "Clear"
  },
  Popconfirm: {
    positiveText: "Confirm",
    negativeText: "Cancel"
  },
  Cascader: {
    placeholder: "Please Select",
    loading: "Loading",
    loadingRequiredMessage: (t) => `Please load all ${t}'s descendants before checking it.`
  },
  Time: {
    dateFormat: "yyyy-MM-dd",
    dateTimeFormat: "yyyy-MM-dd HH:mm:ss"
  },
  DatePicker: {
    yearFormat: "yyyy",
    monthFormat: "MMM",
    dayFormat: "eeeeee",
    yearTypeFormat: "yyyy",
    monthTypeFormat: "yyyy-MM",
    dateFormat: "yyyy-MM-dd",
    dateTimeFormat: "yyyy-MM-dd HH:mm:ss",
    quarterFormat: "yyyy-qqq",
    clear: "Clear",
    now: "Now",
    confirm: "Confirm",
    selectTime: "Select Time",
    selectDate: "Select Date",
    datePlaceholder: "Select Date",
    datetimePlaceholder: "Select Date and Time",
    monthPlaceholder: "Select Month",
    yearPlaceholder: "Select Year",
    quarterPlaceholder: "Select Quarter",
    startDatePlaceholder: "Start Date",
    endDatePlaceholder: "End Date",
    startDatetimePlaceholder: "Start Date and Time",
    endDatetimePlaceholder: "End Date and Time",
    startMonthPlaceholder: "Start Month",
    endMonthPlaceholder: "End Month",
    monthBeforeYear: !0,
    firstDayOfWeek: 6,
    today: "Today"
  },
  DataTable: {
    checkTableAll: "Select all in the table",
    uncheckTableAll: "Unselect all in the table",
    confirm: "Confirm",
    clear: "Clear"
  },
  LegacyTransfer: {
    sourceTitle: "Source",
    targetTitle: "Target"
  },
  Transfer: {
    selectAll: "Select all",
    unselectAll: "Unselect all",
    clearAll: "Clear",
    total: (t) => `Total ${t} items`,
    selected: (t) => `${t} items selected`
  },
  Empty: {
    description: "No Data"
  },
  Select: {
    placeholder: "Please Select"
  },
  TimePicker: {
    placeholder: "Select Time",
    positiveText: "OK",
    negativeText: "Cancel",
    now: "Now"
  },
  Pagination: {
    goto: "Goto",
    selectionSuffix: "page"
  },
  DynamicTags: {
    add: "Add"
  },
  Log: {
    loading: "Loading"
  },
  Input: {
    placeholder: "Please Input"
  },
  InputNumber: {
    placeholder: "Please Input"
  },
  DynamicInput: {
    create: "Create"
  },
  ThemeEditor: {
    title: "Theme Editor",
    clearAllVars: "Clear All Variables",
    clearSearch: "Clear Search",
    filterCompName: "Filter Component Name",
    filterVarName: "Filter Variable Name",
    import: "Import",
    export: "Export",
    restore: "Reset to Default"
  },
  Image: {
    tipPrevious: "Previous picture (←)",
    tipNext: "Next picture (→)",
    tipCounterclockwise: "Counterclockwise",
    tipClockwise: "Clockwise",
    tipZoomOut: "Zoom out",
    tipZoomIn: "Zoom in",
    tipClose: "Close (Esc)",
    // TODO: translation
    tipOriginalSize: "Zoom to original size"
  }
};
mu.default = E_;
var hu = {};
Object.defineProperty(hu, "__esModule", { value: !0 });
const j_ = {
  name: "ru-RU",
  global: {
    undo: "Отменить",
    redo: "Вернуть",
    confirm: "Подтвердить",
    clear: "Очистить"
  },
  Popconfirm: {
    positiveText: "Подтвердить",
    negativeText: "Отмена"
  },
  Cascader: {
    placeholder: "Выбрать",
    loading: "Загрузка",
    loadingRequiredMessage: (t) => `Загрузите все дочерние узлы ${t} прежде чем они станут необязательными`
  },
  Time: {
    dateFormat: "yyyy-MM-dd",
    dateTimeFormat: "yyyy-MM-dd HH:mm:ss"
  },
  DatePicker: {
    yearFormat: "yyyy",
    monthFormat: "MMM",
    dayFormat: "eeeeee",
    yearTypeFormat: "yyyy",
    monthTypeFormat: "yyyy-MM",
    dateFormat: "yyyy-MM-dd",
    dateTimeFormat: "yyyy-MM-dd HH:mm:ss",
    quarterFormat: "yyyy-qqq",
    clear: "Очистить",
    now: "Сейчас",
    confirm: "Подтвердить",
    selectTime: "Выбрать время",
    selectDate: "Выбрать дату",
    datePlaceholder: "Выбрать дату",
    datetimePlaceholder: "Выбрать дату и время",
    monthPlaceholder: "Выберите месяц",
    // FIXME: translation needed
    yearPlaceholder: "Select Year",
    quarterPlaceholder: "Select Quarter",
    startDatePlaceholder: "Дата начала",
    endDatePlaceholder: "Дата окончания",
    startDatetimePlaceholder: "Дата и время начала",
    endDatetimePlaceholder: "Дата и время окончания",
    // FIXME: translation needed
    startMonthPlaceholder: "Start Month",
    endMonthPlaceholder: "End Month",
    monthBeforeYear: !0,
    firstDayOfWeek: 0,
    today: "Сегодня"
  },
  DataTable: {
    checkTableAll: "Выбрать все в таблице",
    uncheckTableAll: "Отменить все в таблице",
    confirm: "Подтвердить",
    clear: "Очистить"
  },
  LegacyTransfer: {
    sourceTitle: "Источник",
    targetTitle: "Назначение"
  },
  // TODO: translation
  Transfer: {
    selectAll: "Select all",
    unselectAll: "Unselect all",
    clearAll: "Clear",
    total: (t) => `Total ${t} items`,
    selected: (t) => `${t} items selected`
  },
  Empty: {
    description: "Нет данных"
  },
  Select: {
    placeholder: "Выбрать"
  },
  TimePicker: {
    placeholder: "Выбрать время",
    positiveText: "OK",
    negativeText: "Отменить",
    now: "Сейчас"
  },
  Pagination: {
    goto: "Перейти",
    selectionSuffix: "страница"
  },
  DynamicTags: {
    add: "Добавить"
  },
  Log: {
    loading: "Загрузка"
  },
  Input: {
    placeholder: "Ввести"
  },
  InputNumber: {
    placeholder: "Ввести"
  },
  DynamicInput: {
    create: "Создать"
  },
  ThemeEditor: {
    title: "Редактор темы",
    clearAllVars: "Очистить все",
    clearSearch: "Очистить поиск",
    filterCompName: "Фильтровать по имени компонента",
    filterVarName: "Фильтровать имена переменных",
    import: "Импорт",
    export: "Экспорт",
    restore: "Сбросить"
  },
  // TODO: translation
  Image: {
    tipPrevious: "Previous picture (←)",
    tipNext: "Next picture (→)",
    tipCounterclockwise: "Counterclockwise",
    tipClockwise: "Clockwise",
    tipZoomOut: "Zoom out",
    tipZoomIn: "Zoom in",
    tipClose: "Close (Esc)",
    // TODO: translation
    tipOriginalSize: "Zoom to original size"
  }
};
hu.default = j_;
var vu = {};
Object.defineProperty(vu, "__esModule", { value: !0 });
const A_ = {
  name: "uk-UA",
  global: {
    undo: "Відмінити",
    redo: "Повторити",
    confirm: "Підтвердити",
    clear: "Стерти"
  },
  Popconfirm: {
    positiveText: "Підтвердити",
    negativeText: "Скасувати"
  },
  Cascader: {
    placeholder: "Обрати",
    loading: "Завантаження",
    loadingRequiredMessage: (t) => `Завантажте всі дочірні вузли ${t} перед перевіркою`
  },
  Time: {
    dateFormat: "yyyy-MM-dd",
    dateTimeFormat: "yyyy-MM-dd HH:mm:ss"
  },
  DatePicker: {
    yearFormat: "yyyy",
    monthFormat: "MMM",
    dayFormat: "eeeeee",
    yearTypeFormat: "yyyy",
    monthTypeFormat: "yyyy-MM",
    dateFormat: "yyyy-MM-dd",
    dateTimeFormat: "yyyy-MM-dd HH:mm:ss",
    quarterFormat: "yyyy-qqq",
    clear: "Стерти",
    now: "Зараз",
    confirm: "Підтвердити",
    selectTime: "Обрати час",
    selectDate: "Обрати дату",
    datePlaceholder: "Обрати дату",
    datetimePlaceholder: "Обрати дату і час",
    monthPlaceholder: "Оберіть місяць",
    yearPlaceholder: "Оберіть рік",
    quarterPlaceholder: "Оберіть квартал",
    startDatePlaceholder: "Дата початку",
    endDatePlaceholder: "Дата завершення",
    startDatetimePlaceholder: "Дата і час початку",
    endDatetimePlaceholder: "Дата і час завершення",
    startMonthPlaceholder: "Перший місяць",
    endMonthPlaceholder: "Останній місяць",
    monthBeforeYear: !0,
    firstDayOfWeek: 0,
    today: "Сьогодні"
  },
  DataTable: {
    checkTableAll: "Обрати все в таблиці",
    uncheckTableAll: "Скасувати вибір усього в таблиці",
    confirm: "Підтвердити",
    clear: "Стерти"
  },
  LegacyTransfer: {
    sourceTitle: "Джерело",
    targetTitle: "Ціль"
  },
  // TODO: translation
  Transfer: {
    selectAll: "Select all",
    unselectAll: "Unselect all",
    clearAll: "Clear",
    total: (t) => `Total ${t} items`,
    selected: (t) => `${t} items selected`
  },
  Empty: {
    description: "Немає даних"
  },
  Select: {
    placeholder: "Обрати"
  },
  TimePicker: {
    placeholder: "Обрати час",
    positiveText: "OK",
    negativeText: "Скасувати",
    now: "Зараз"
  },
  Pagination: {
    goto: "Перейти",
    selectionSuffix: "сторінка"
  },
  DynamicTags: {
    add: "Додати"
  },
  Log: {
    loading: "Завантаження"
  },
  Input: {
    placeholder: "Ввести"
  },
  InputNumber: {
    placeholder: "Ввести"
  },
  DynamicInput: {
    create: "Створити"
  },
  ThemeEditor: {
    title: "Редактор теми",
    clearAllVars: "Стерти все",
    clearSearch: "Очистити пошук",
    filterCompName: "Фільтрувати за іменем компонента",
    filterVarName: "Фільтрувати імена змінних",
    import: "Імпорт",
    export: "Експорт",
    restore: "Скинути"
  },
  Image: {
    tipPrevious: "Попереднє зображення (←)",
    tipNext: "Наступне зображення (→)",
    tipCounterclockwise: "Проти годинникової стрілки",
    tipClockwise: "За годинниковою стрілкою",
    tipZoomOut: "Віддалити",
    tipZoomIn: "Наблизити",
    tipClose: "Закрити (Esc)",
    tipOriginalSize: "Масштабувати до оригінального розміру"
  }
};
vu.default = A_;
var pu = {};
Object.defineProperty(pu, "__esModule", { value: !0 });
const F_ = {
  name: "ja-JP",
  global: {
    undo: "元に戻す",
    redo: "やり直す",
    confirm: "OK",
    clear: "クリア"
  },
  Popconfirm: {
    positiveText: "OK",
    negativeText: "キャンセル"
  },
  Cascader: {
    placeholder: "選択してください",
    loading: "ロード中",
    loadingRequiredMessage: (t) => `すべての ${t} サブノードをロードしてから選択できます。`
  },
  Time: {
    dateFormat: "yyyy-MM-dd",
    dateTimeFormat: "yyyy-MM-dd HH:mm:ss"
  },
  DatePicker: {
    yearFormat: "yyyy年",
    monthFormat: "MMM",
    dayFormat: "eeeeee",
    yearTypeFormat: "yyyy",
    monthTypeFormat: "yyyy-MM",
    dateFormat: "yyyy-MM-dd",
    dateTimeFormat: "yyyy-MM-dd HH:mm:ss",
    quarterFormat: "yyyy-qqq",
    clear: "クリア",
    now: "現在",
    confirm: "OK",
    selectTime: "時間を選択",
    selectDate: "日付を選択",
    datePlaceholder: "日付を選択",
    datetimePlaceholder: "選択",
    monthPlaceholder: "月を選択",
    yearPlaceholder: "年を選択",
    quarterPlaceholder: "四半期を選択",
    startDatePlaceholder: "開始日",
    endDatePlaceholder: "終了日",
    startDatetimePlaceholder: "開始時間",
    endDatetimePlaceholder: "終了時間",
    // FIXME: translation needed
    startMonthPlaceholder: "Start Month",
    endMonthPlaceholder: "End Month",
    monthBeforeYear: !1,
    firstDayOfWeek: 0,
    today: "今日"
  },
  DataTable: {
    checkTableAll: "全選択",
    uncheckTableAll: "全選択取消",
    confirm: "OK",
    clear: "リセット"
  },
  LegacyTransfer: {
    sourceTitle: "元",
    targetTitle: "先"
  },
  // TODO: translation
  Transfer: {
    selectAll: "Select all",
    unselectAll: "Unselect all",
    clearAll: "Clear",
    total: (t) => `Total ${t} items`,
    selected: (t) => `${t} items selected`
  },
  Empty: {
    description: "データなし"
  },
  Select: {
    placeholder: "選択してください"
  },
  TimePicker: {
    placeholder: "選択してください",
    positiveText: "OK",
    negativeText: "キャンセル",
    now: "現在"
  },
  Pagination: {
    goto: "ページジャンプ",
    selectionSuffix: "ページ"
  },
  DynamicTags: {
    add: "追加"
  },
  Log: {
    loading: "ロード中"
  },
  Input: {
    placeholder: "入力してください"
  },
  InputNumber: {
    placeholder: "入力してください"
  },
  DynamicInput: {
    create: "追加"
  },
  ThemeEditor: {
    title: "テーマエディタ",
    clearAllVars: "全件変数クリア",
    clearSearch: "検索クリア",
    filterCompName: "コンポネント名をフィルタ",
    filterVarName: "変数をフィルタ",
    import: "インポート",
    export: "エクスポート",
    restore: "デフォルト"
  },
  Image: {
    tipPrevious: "前の画像 (←)",
    tipNext: "次の画像 (→)",
    tipCounterclockwise: "左に回転",
    tipClockwise: "右に回転",
    tipZoomOut: "縮小",
    tipZoomIn: "拡大",
    tipClose: "閉じる (Esc)",
    // TODO: translation
    tipOriginalSize: "Zoom to original size"
  }
};
pu.default = F_;
var gu = {};
Object.defineProperty(gu, "__esModule", { value: !0 });
const I_ = {
  name: "ko-KR",
  global: {
    undo: "실행 취소",
    redo: "다시 실행",
    confirm: "확인",
    clear: "지우기"
  },
  Popconfirm: {
    positiveText: "확인",
    negativeText: "취소"
  },
  Cascader: {
    placeholder: "선택해 주세요",
    loading: "불러오는 중",
    loadingRequiredMessage: (t) => `${t}의 모든 하위 항목을 불러온 뒤에 선택할 수 있습니다.`
  },
  Time: {
    dateFormat: "yyyy-MM-dd",
    dateTimeFormat: "yyyy-MM-dd HH:mm:ss"
  },
  DatePicker: {
    yearFormat: "yyyy년",
    monthFormat: "MMM",
    dayFormat: "eeeeee",
    yearTypeFormat: "yyyy",
    monthTypeFormat: "yyyy-MM",
    dateFormat: "yyyy-MM-dd",
    dateTimeFormat: "yyyy-MM-dd HH:mm:ss",
    quarterFormat: "yyyy-qqq",
    clear: "지우기",
    now: "현재",
    confirm: "확인",
    selectTime: "시간 선택",
    selectDate: "날짜 선택",
    datePlaceholder: "날짜 선택",
    datetimePlaceholder: "날짜 및 시간 선택",
    monthPlaceholder: "월 선택",
    yearPlaceholder: "년 선택",
    quarterPlaceholder: "분기 선택",
    startDatePlaceholder: "시작 날짜",
    endDatePlaceholder: "종료 날짜",
    startDatetimePlaceholder: "시작 날짜 및 시간",
    endDatetimePlaceholder: "종료 날짜 및 시간",
    // FIXME: translation needed
    startMonthPlaceholder: "시작 월",
    endMonthPlaceholder: "종료 월",
    monthBeforeYear: !1,
    firstDayOfWeek: 6,
    today: "오늘"
  },
  DataTable: {
    checkTableAll: "모두 선택",
    uncheckTableAll: "모두 선택 해제",
    confirm: "확인",
    clear: "지우기"
  },
  LegacyTransfer: {
    sourceTitle: "원본",
    targetTitle: "타깃"
  },
  // TODO: translation
  Transfer: {
    selectAll: "전체 선택",
    unselectAll: "전체 해제",
    clearAll: "전체 삭제",
    total: (t) => `총 ${t} 개`,
    selected: (t) => `${t} 개 선택`
  },
  Empty: {
    description: "데이터 없음"
  },
  Select: {
    placeholder: "선택해 주세요"
  },
  TimePicker: {
    placeholder: "시간 선택",
    positiveText: "확인",
    negativeText: "취소",
    now: "현재 시간"
  },
  Pagination: {
    goto: "이동",
    selectionSuffix: "페이지"
  },
  DynamicTags: {
    add: "추가"
  },
  Log: {
    loading: "불러오는 중"
  },
  Input: {
    placeholder: "입력해 주세요"
  },
  InputNumber: {
    placeholder: "입력해 주세요"
  },
  DynamicInput: {
    create: "추가"
  },
  ThemeEditor: {
    title: "테마 편집기",
    clearAllVars: "모든 변수 지우기",
    clearSearch: "검색 지우기",
    filterCompName: "구성 요소 이름 필터",
    filterVarName: "변수 이름 필터",
    import: "가져오기",
    export: "내보내기",
    restore: "기본으로 재설정"
  },
  Image: {
    tipPrevious: "이전 (←)",
    tipNext: "다음 (→)",
    tipCounterclockwise: "시계 반대 방향으로 회전",
    tipClockwise: "시계 방향으로 회전",
    tipZoomOut: "축소",
    tipZoomIn: "확대",
    tipClose: "닫기 (Esc)",
    // TODO: translation
    tipOriginalSize: "원본 크기로 확대"
  }
};
gu.default = I_;
var yu = {};
Object.defineProperty(yu, "__esModule", { value: !0 });
const N_ = {
  name: "id-ID",
  global: {
    undo: "Membatalkan",
    redo: "Mem-perbarui",
    confirm: "Setuju",
    clear: "Bersihkan"
  },
  Popconfirm: {
    positiveText: "Setuju",
    negativeText: "Batalkan"
  },
  Cascader: {
    placeholder: "Mohon Pilih",
    loading: "Memuat",
    loadingRequiredMessage: (t) => `Mohon muat semua ${t} sebelum memeriksa.`
  },
  Time: {
    dateFormat: "dd-MM-yyyy",
    dateTimeFormat: "dd-MM-yyyy HH:mm:ss"
  },
  DatePicker: {
    yearFormat: "yyyy",
    monthFormat: "MMM",
    dayFormat: "eeeeee",
    yearTypeFormat: "yyyy",
    monthTypeFormat: "MM-yyyy",
    dateFormat: "dd-MM-yyyy",
    dateTimeFormat: "dd-MM-yyyy HH:mm:ss",
    quarterFormat: "yyyy-qqq",
    clear: "Bersihkan",
    now: "Sekarang",
    confirm: "Setuju",
    selectTime: "Pilih Waktu",
    selectDate: "Pilih Tanggal",
    datePlaceholder: "Pilih Tanggal",
    datetimePlaceholder: "Pilih Tanggal dan Waktu",
    monthPlaceholder: "Pilih Bulan",
    // FIXME: translation needed
    yearPlaceholder: "Pilih tahun",
    quarterPlaceholder: "Pilih perempat tahun",
    startDatePlaceholder: "Tanggal Mulai",
    endDatePlaceholder: "Tanggal Selesai",
    startDatetimePlaceholder: "Tanggal dan Waktu Mulai",
    endDatetimePlaceholder: "Tanggal dan Waktu Selesai",
    // FIXME: translation needed
    startMonthPlaceholder: "Awal bulan",
    endMonthPlaceholder: "Akhir bulan",
    monthBeforeYear: !0,
    firstDayOfWeek: 6,
    today: "Hari ini"
  },
  DataTable: {
    checkTableAll: "Pilih semua pada tabel",
    uncheckTableAll: "Batalkan pilihan semua",
    confirm: "Setuju",
    clear: "Bersihkan"
  },
  LegacyTransfer: {
    sourceTitle: "Sumber",
    targetTitle: "Tujuan"
  },
  // TODO: translation
  Transfer: {
    selectAll: "Pilih semua",
    unselectAll: "Batalkan pilihan",
    clearAll: "Bersihkan",
    total: (t) => `Total ${t} item`,
    selected: (t) => `${t} item dipilih`
  },
  Empty: {
    description: "Tidak ada data"
  },
  Select: {
    placeholder: "Mohon Pilih"
  },
  TimePicker: {
    placeholder: "Pilih Waktu",
    positiveText: "OK",
    negativeText: "Batalkan",
    now: "Sekarang"
  },
  Pagination: {
    goto: "Ke",
    selectionSuffix: "halaman"
  },
  DynamicTags: {
    add: "Tambah"
  },
  Log: {
    loading: "Memuat"
  },
  Input: {
    placeholder: "Mohon isi"
  },
  InputNumber: {
    placeholder: "Mohon isi"
  },
  DynamicInput: {
    create: "Buat baru"
  },
  ThemeEditor: {
    title: "Pengaturan Tema",
    clearAllVars: "Bersihkan semua variabel",
    clearSearch: "Bersihkan pencarian",
    filterCompName: "Saring nama komponen",
    filterVarName: "Saring nama variabel",
    import: "Impor",
    export: "Ekspor",
    restore: "Setel ulang ke awal"
  },
  Image: {
    tipPrevious: "Gambar sebelumnya (←)",
    tipNext: "Gambar berikutnya (→)",
    tipCounterclockwise: "Berlawanan arah jarum jam",
    tipClockwise: "Searah jarum jam",
    tipZoomOut: "Zoom out",
    tipZoomIn: "Zoom in",
    tipClose: "Tutup (Esc)",
    // TODO: translation
    tipOriginalSize: "Zoom ke ukuran asli"
  }
};
yu.default = N_;
var bu = {};
Object.defineProperty(bu, "__esModule", { value: !0 });
const H_ = {
  name: "de-DE",
  global: {
    undo: "Rückgängig",
    redo: "Wiederholen",
    confirm: "Bestätigen",
    clear: "Löschen"
  },
  Popconfirm: {
    positiveText: "Bestätigen",
    negativeText: "Abbrechen"
  },
  Cascader: {
    placeholder: "Bitte auswählen",
    loading: "Wird geladen",
    loadingRequiredMessage: (t) => `Bitte laden Sie alle Unterpunkte von ${t}, bevor Sie es auswählen.`
  },
  Time: {
    dateFormat: "dd.MM.yyyy",
    dateTimeFormat: "dd.MM.yyyy HH:mm:ss"
  },
  DatePicker: {
    yearFormat: "yyyy",
    monthFormat: "MMM",
    dayFormat: "eeeeee",
    yearTypeFormat: "yyyy",
    monthTypeFormat: "MM-yyyy",
    dateFormat: "dd.MM.yyyy",
    dateTimeFormat: "dd.MM.yyyy HH:mm:ss",
    quarterFormat: "yyyy-qqq",
    clear: "Löschen",
    now: "Jetzt",
    confirm: "Bestätigen",
    selectTime: "Uhrzeit auswählen",
    selectDate: "Datum auswählen",
    datePlaceholder: "Datum auswählen",
    datetimePlaceholder: "Datum und Uhrzeit auswählen",
    monthPlaceholder: "Monat auswählen",
    yearPlaceholder: "Jahr auswählen",
    quarterPlaceholder: "Quartal auswählen",
    startDatePlaceholder: "Anfangsdatum",
    endDatePlaceholder: "Enddatum",
    startDatetimePlaceholder: "Anfangsdatum und Uhrzeit",
    endDatetimePlaceholder: "Enddatum und Uhrzeit",
    startMonthPlaceholder: "Anfangsmonat",
    endMonthPlaceholder: "Endmonat",
    monthBeforeYear: !0,
    firstDayOfWeek: 0,
    today: "Heute"
  },
  DataTable: {
    checkTableAll: "Alles auswählen",
    uncheckTableAll: "Auswahl aufheben",
    confirm: "Bestätigen",
    clear: "Löschen"
  },
  LegacyTransfer: {
    sourceTitle: "Quelle",
    targetTitle: "Ziel"
  },
  Transfer: {
    selectAll: "Alle auswählen",
    unselectAll: "Alle abwählen",
    clearAll: "Leeren",
    total: (t) => `Insgesamt ${t} Einträge`,
    selected: (t) => `${t} Einträge ausgewählt`
  },
  Empty: {
    description: "Keine Daten"
  },
  Select: {
    placeholder: "Bitte auswählen"
  },
  TimePicker: {
    placeholder: "Uhrzeit auswählen",
    positiveText: "OK",
    negativeText: "Abbrechen",
    now: "Jetzt"
  },
  Pagination: {
    goto: "Gehe zu",
    selectionSuffix: "Seite"
  },
  DynamicTags: {
    add: "Hinzufügen"
  },
  Log: {
    loading: "Wird geladen"
  },
  Input: {
    placeholder: "Bitte ausfüllen"
  },
  InputNumber: {
    placeholder: "Bitte ausfüllen"
  },
  DynamicInput: {
    create: "Erstellen"
  },
  ThemeEditor: {
    title: "Theme Editor",
    clearAllVars: "Alle Variablen löschen",
    clearSearch: "Suche löschen",
    filterCompName: "Filter Komponentenname",
    filterVarName: "Filter Variablenname",
    import: "Importieren",
    export: "Exportieren",
    restore: "Auf Standard zurücksetzen"
  },
  Image: {
    tipPrevious: "Vorheriges Bild (←)",
    tipNext: "Nächstes Bild (→)",
    tipCounterclockwise: "Gegen Uhrzeigersinn",
    tipClockwise: "Uhrzeigersinn",
    tipZoomOut: "Rauszoomen",
    tipZoomIn: "Reinzoomen",
    tipClose: "Schließen (Esc)",
    tipOriginalSize: "Zoom zurücksetzen"
  }
};
bu.default = H_;
var wu = {};
Object.defineProperty(wu, "__esModule", { value: !0 });
const R_ = {
  name: "nb-NO",
  global: {
    undo: "Angre",
    redo: "Utfør likevel",
    confirm: "Bekreft",
    clear: "Tøm"
  },
  Popconfirm: {
    positiveText: "Bekreft",
    negativeText: "Avbryt"
  },
  Cascader: {
    placeholder: "Vennligst velg",
    loading: "Laster",
    loadingRequiredMessage: (t) => `Vennligst last alle underpunkter av ${t} før du velger oppføringen.`
  },
  Time: {
    dateFormat: "dd.MM.yyyy",
    dateTimeFormat: "dd.MM.yyyy HH:mm:ss"
  },
  DatePicker: {
    yearFormat: "yyyy",
    monthFormat: "MMM",
    dayFormat: "eeeeee",
    yearTypeFormat: "yyyy",
    monthTypeFormat: "MM.yyyy",
    dateFormat: "dd.MM.yyyy",
    dateTimeFormat: "dd.MM.yyyy HH:mm:ss",
    quarterFormat: "yyyy-qqq",
    clear: "Tøm",
    now: "Nå",
    confirm: "Bekreft",
    selectTime: "Velg tid",
    selectDate: "Velg dato",
    datePlaceholder: "Velg dato",
    datetimePlaceholder: "Velg dato og tid",
    monthPlaceholder: "Velg måned",
    // FIXME: translation needed
    yearPlaceholder: "Select Year",
    quarterPlaceholder: "Select Quarter",
    startDatePlaceholder: "Startdato",
    endDatePlaceholder: "Sluttdato",
    startDatetimePlaceholder: "Startdato og -tid",
    endDatetimePlaceholder: "Sluttdato og -tid",
    // FIXME: translation needed
    startMonthPlaceholder: "Start Month",
    endMonthPlaceholder: "End Month",
    monthBeforeYear: !0,
    firstDayOfWeek: 0,
    today: "I dag"
  },
  DataTable: {
    checkTableAll: "Velg alt",
    uncheckTableAll: "Velg ingenting",
    confirm: "Bekreft",
    clear: "Tøm"
  },
  LegacyTransfer: {
    sourceTitle: "Kilde",
    targetTitle: "Mål"
  },
  // TODO: translation
  Transfer: {
    selectAll: "Select all",
    unselectAll: "Unselect all",
    clearAll: "Clear",
    total: (t) => `Total ${t} items`,
    selected: (t) => `${t} items selected`
  },
  Empty: {
    description: "Ingen data"
  },
  Select: {
    placeholder: "Vennligst velg"
  },
  TimePicker: {
    placeholder: "Velg tid",
    positiveText: "OK",
    negativeText: "Avbryt",
    now: "Nå"
  },
  Pagination: {
    goto: "Gå til",
    selectionSuffix: "side"
  },
  DynamicTags: {
    add: "Legg til"
  },
  Log: {
    loading: "Laster"
  },
  Input: {
    placeholder: "Vennligst fyll ut"
  },
  InputNumber: {
    placeholder: "Vennligst fyll ut"
  },
  DynamicInput: {
    create: "Opprett"
  },
  ThemeEditor: {
    title: "Temaredigerer",
    clearAllVars: "Nullstill alle variabler",
    clearSearch: "Tøm søk",
    filterCompName: "Filtrer etter komponentnavn",
    filterVarName: "Filtrer etter variabelnavn",
    import: "Importer",
    export: "Eksporter",
    restore: "Nullstill til standardvalg"
  },
  Image: {
    tipPrevious: "Previous picture (←)",
    tipNext: "Next picture (→)",
    tipCounterclockwise: "Counterclockwise",
    tipClockwise: "Clockwise",
    tipZoomOut: "Zoom out",
    tipZoomIn: "Zoom in",
    tipClose: "Close (Esc)",
    // TODO: translation
    tipOriginalSize: "Zoom to original size"
  }
};
wu.default = R_;
var Pu = {};
Object.defineProperty(Pu, "__esModule", { value: !0 });
const L_ = {
  name: "nl-NL",
  global: {
    undo: "Ongedaan Maken",
    redo: "Opnieuw Doen",
    confirm: "Bevestig",
    clear: "Wis"
  },
  Popconfirm: {
    positiveText: "Bevestig",
    negativeText: "Annuleer"
  },
  Cascader: {
    placeholder: "Selecteer a.u.b.",
    loading: "Laden",
    loadingRequiredMessage: (t) => `Laad alle afstammelingen van ${t} alvorens het te selecteren.`
  },
  Time: {
    dateFormat: "dd/MM/yyyy",
    dateTimeFormat: "dd/MM/yyyy HH:mm:ss"
  },
  DatePicker: {
    yearFormat: "yyyy",
    monthFormat: "MMM",
    dayFormat: "eeeeee",
    yearTypeFormat: "yyyy",
    monthTypeFormat: "MM/yyyy",
    dateFormat: "dd/MM/yyyy",
    dateTimeFormat: "dd/MM/yyyy HH:mm:ss",
    quarterFormat: "qqq yyyy",
    clear: "Wis",
    now: "Nu",
    confirm: "Bevestig",
    selectTime: "Selecteer Uur",
    selectDate: "Selecteer Datum",
    datePlaceholder: "Selecteer Datum",
    datetimePlaceholder: "Selecteer Dag en Uur",
    monthPlaceholder: "Selecteer Maand",
    yearPlaceholder: "Selecteer Jaar",
    quarterPlaceholder: "Selecteer Kwartaal",
    startDatePlaceholder: "Begindatum",
    endDatePlaceholder: "Einddatum",
    startDatetimePlaceholder: "Begindatum en Uur",
    endDatetimePlaceholder: "Einddatum en Uur",
    startMonthPlaceholder: "Begin Maand",
    endMonthPlaceholder: "Eind Maand",
    monthBeforeYear: !0,
    firstDayOfWeek: 0,
    today: "Vandaag"
  },
  DataTable: {
    checkTableAll: "Selecteer alles in de tabel",
    uncheckTableAll: "Alles in de tabel deselecteren",
    confirm: "Bevestig",
    clear: "Wis"
  },
  LegacyTransfer: {
    sourceTitle: "Bron",
    targetTitle: "Doel"
  },
  // TODO: translation
  Transfer: {
    selectAll: "Select all",
    unselectAll: "Unselect all",
    clearAll: "Clear",
    total: (t) => `Total ${t} items`,
    selected: (t) => `${t} items selected`
  },
  Empty: {
    description: "Geen Data"
  },
  Select: {
    placeholder: "Selecteer a.u.b."
  },
  TimePicker: {
    placeholder: "Selecteer Uur",
    positiveText: "OK",
    negativeText: "Annuleer",
    now: "Nu"
  },
  Pagination: {
    goto: "Ga naar",
    selectionSuffix: "pagina"
  },
  DynamicTags: {
    add: "Toevoegen"
  },
  Log: {
    loading: "Laden"
  },
  Input: {
    placeholder: "Invoeren a.u.b."
  },
  InputNumber: {
    placeholder: "Invoeren a.u.b."
  },
  DynamicInput: {
    create: "Creëer"
  },
  ThemeEditor: {
    title: "Thema Bewerker",
    clearAllVars: "Wis Alle Variabelen",
    clearSearch: "Wis Zoekopdracht",
    filterCompName: "Filter Componentsnaam",
    filterVarName: "Filter Variablenaam",
    import: "Importen",
    export: "Exporteren",
    restore: "Reset naar Standaard"
  },
  Image: {
    tipPrevious: "Vorige afbeelding (←)",
    tipNext: "Volgende afbeelding (→)",
    tipCounterclockwise: "Tegen de klok in",
    tipClockwise: "Met de klok mee",
    tipZoomOut: "Uitzoomen",
    tipZoomIn: "Inzoomen",
    tipClose: "Sluiten (Esc)",
    // TODO: translation
    tipOriginalSize: "Zoom to original size"
  }
};
Pu.default = L_;
var Mu = {};
Object.defineProperty(Mu, "__esModule", { value: !0 });
const B_ = {
  name: "fr-FR",
  global: {
    undo: "Défaire",
    redo: "Refaire",
    confirm: "Confirmer",
    clear: "Effacer"
  },
  Popconfirm: {
    positiveText: "Confirmer",
    negativeText: "Annuler"
  },
  Cascader: {
    placeholder: "Sélectionner",
    loading: "Chargement",
    loadingRequiredMessage: (t) => `Charger tous les enfants de ${t} avant de le sélectionner`
  },
  Time: {
    dateFormat: "dd/MM/yyyy",
    dateTimeFormat: "dd/MM/yyyy HH:mm:ss"
  },
  DatePicker: {
    yearFormat: "yyyy",
    monthFormat: "MMM",
    dayFormat: "eeeeee",
    yearTypeFormat: "yyyy",
    monthTypeFormat: "MM/yyyy",
    dateFormat: "dd/MM/yyyy",
    dateTimeFormat: "dd/MM/yyyy HH:mm:ss",
    quarterFormat: "qqq yyyy",
    clear: "Effacer",
    now: "Maintenant",
    confirm: "Confirmer",
    selectTime: "Sélectionner l'heure",
    selectDate: "Sélectionner la date",
    datePlaceholder: "Sélectionner la date",
    datetimePlaceholder: "Sélectionner la date et l'heure",
    monthPlaceholder: "Sélectionner le mois",
    yearPlaceholder: "Sélectionner l'année",
    quarterPlaceholder: "Sélectionner le trimestre",
    startDatePlaceholder: "Date de début",
    endDatePlaceholder: "Date de fin",
    startDatetimePlaceholder: "Date et heure de début",
    endDatetimePlaceholder: "Date et heure de fin",
    startMonthPlaceholder: "Mois de début",
    endMonthPlaceholder: "Mois de fin",
    monthBeforeYear: !0,
    firstDayOfWeek: 1,
    today: "Aujourd'hui"
  },
  DataTable: {
    checkTableAll: "Sélectionner tout",
    uncheckTableAll: "Désélectionner tout",
    confirm: "Confirmer",
    clear: "Effacer"
  },
  LegacyTransfer: {
    sourceTitle: "Source",
    targetTitle: "Cible"
  },
  Transfer: {
    selectAll: "Sélectionner tout",
    unselectAll: "Désélectionner tout",
    clearAll: "Effacer",
    total: (t) => `Total ${t} éléments`,
    selected: (t) => `${t} éléments sélectionnés`
  },
  Empty: {
    description: "Aucune donnée"
  },
  Select: {
    placeholder: "Sélectionner"
  },
  TimePicker: {
    placeholder: "Sélectionner l'heure",
    positiveText: "OK",
    negativeText: "Annuler",
    now: "Maintenant"
  },
  Pagination: {
    goto: "Aller à",
    selectionSuffix: "page"
  },
  DynamicTags: {
    add: "Ajouter"
  },
  Log: {
    loading: "Chargement"
  },
  Input: {
    placeholder: "Saisir"
  },
  InputNumber: {
    placeholder: "Saisir"
  },
  DynamicInput: {
    create: "Créer"
  },
  ThemeEditor: {
    title: "Éditeur de thème",
    clearAllVars: "Effacer toutes les variables",
    clearSearch: "Effacer la recherche",
    filterCompName: "Filtrer par nom de composant",
    filterVarName: "Filtrer par nom de variable",
    import: "Importer",
    export: "Exporter",
    restore: "Réinitialiser"
  },
  Image: {
    tipPrevious: "Image précédente (←)",
    tipNext: "Image suivante (→)",
    tipCounterclockwise: "Sens antihoraire",
    tipClockwise: "Sens horaire",
    tipZoomOut: "Dézoomer",
    tipZoomIn: "Zoomer",
    tipClose: "Fermer (Échap.)",
    tipOriginalSize: "Zoom à la taille originale"
  }
};
Mu.default = B_;
var _u = {};
Object.defineProperty(_u, "__esModule", { value: !0 });
const V_ = {
  name: "es-AR",
  global: {
    undo: "Deshacer",
    redo: "Rehacer",
    confirm: "Confirmar",
    clear: "Borrar"
  },
  Popconfirm: {
    positiveText: "Confirmar",
    negativeText: "Cancelar"
  },
  Cascader: {
    placeholder: "Seleccionar por favor",
    loading: "Cargando",
    loadingRequiredMessage: (t) => `Por favor, cargue los descendientes de ${t} antes de marcarlo.`
  },
  Time: {
    dateFormat: "yyyy-MM-dd",
    dateTimeFormat: "yyyy-MM-dd HH:mm:ss"
  },
  DatePicker: {
    yearFormat: "yyyy",
    monthFormat: "MMM",
    dayFormat: "eeeeee",
    yearTypeFormat: "yyyy",
    monthTypeFormat: "yyyy-MM",
    dateFormat: "yyyy-MM-dd",
    dateTimeFormat: "yyyy-MM-dd HH:mm:ss",
    quarterFormat: "yyyy-qqq",
    clear: "Borrar",
    now: "Ahora",
    confirm: "Confirmar",
    selectTime: "Seleccionar hora",
    selectDate: "Seleccionar fecha",
    datePlaceholder: "Seleccionar fecha",
    datetimePlaceholder: "Seleccionar fecha y hora",
    monthPlaceholder: "Seleccionar mes",
    yearPlaceholder: "Seleccionar año",
    quarterPlaceholder: "Seleccionar Trimestre",
    startDatePlaceholder: "Fecha de inicio",
    endDatePlaceholder: "Fecha final",
    startDatetimePlaceholder: "Fecha y hora de inicio",
    endDatetimePlaceholder: "Fecha y hora final",
    monthBeforeYear: !0,
    // FIXME: translation needed
    startMonthPlaceholder: "Start Month",
    endMonthPlaceholder: "End Month",
    // 0 is Monday / 0 es Lunes
    firstDayOfWeek: 6,
    today: "Hoy"
  },
  DataTable: {
    checkTableAll: "Seleccionar todo de la tabla",
    uncheckTableAll: "Deseleccionar todo de la tabla",
    confirm: "Confirmar",
    clear: "Limpiar"
  },
  LegacyTransfer: {
    sourceTitle: "Fuente",
    targetTitle: "Objetivo"
  },
  // TODO: translation
  Transfer: {
    selectAll: "Select all",
    unselectAll: "Unselect all",
    clearAll: "Clear",
    total: (t) => `Total ${t} items`,
    selected: (t) => `${t} items selected`
  },
  Empty: {
    description: "Sin datos"
  },
  Select: {
    placeholder: "Seleccionar por favor"
  },
  TimePicker: {
    placeholder: "Seleccionar hora",
    positiveText: "OK",
    negativeText: "Cancelar",
    now: "Ahora"
  },
  Pagination: {
    goto: "Ir a",
    selectionSuffix: "página"
  },
  DynamicTags: {
    add: "Agregar"
  },
  Log: {
    loading: "Cargando"
  },
  Input: {
    placeholder: "Ingrese datos por favor"
  },
  InputNumber: {
    placeholder: "Ingrese datos por favor"
  },
  DynamicInput: {
    create: "Crear"
  },
  ThemeEditor: {
    title: "Editor de Tema",
    clearAllVars: "Limpiar todas las variables",
    clearSearch: "Limpiar búsqueda",
    filterCompName: "Filtro para nombre del componente",
    filterVarName: "Filtro para nombre de la variable",
    import: "Importar",
    export: "Exportar",
    restore: "Restablecer los valores por defecto"
  },
  Image: {
    tipPrevious: "Imagen anterior (←)",
    tipNext: "Siguiente imagen (→)",
    tipCounterclockwise: "Sentido antihorario",
    tipClockwise: "Sentido horario",
    tipZoomOut: "Alejar",
    tipZoomIn: "Acercar",
    tipClose: "Cerrar (Esc)",
    // TODO: translation
    tipOriginalSize: "Zoom to original size"
  }
};
_u.default = V_;
var $u = {};
Object.defineProperty($u, "__esModule", { value: !0 });
const q_ = {
  name: "it-IT",
  global: {
    undo: "Annulla",
    redo: "Ripeti",
    confirm: "Conferma",
    clear: "Cancella"
  },
  Popconfirm: {
    positiveText: "Conferma",
    negativeText: "Annulla"
  },
  Cascader: {
    placeholder: "Si prega di selezionare",
    loading: "Caricamento",
    loadingRequiredMessage: (t) => `Carica tutti i discendenti di ${t} prima di controllarlo.`
  },
  Time: {
    dateFormat: "dd/MM/yyyy",
    dateTimeFormat: "dd/MM/yyyy HH:mm:ss"
  },
  DatePicker: {
    yearFormat: "yyyy",
    monthFormat: "MMM",
    dayFormat: "eeeeee",
    yearTypeFormat: "yyyy",
    monthTypeFormat: "yyyy-MM",
    dateFormat: "yyyy-MM-dd",
    dateTimeFormat: "yyyy-MM-dd HH:mm:ss",
    quarterFormat: "yyyy-qqq",
    clear: "Cancella",
    now: "Adesso",
    confirm: "Conferma",
    selectTime: "Seleziona ora",
    selectDate: "Seleziona data",
    datePlaceholder: "Seleziona data",
    datetimePlaceholder: "Seleziona data e ora",
    monthPlaceholder: "Seleziona mese",
    yearPlaceholder: "Seleziona anno",
    quarterPlaceholder: "Seleziona trimestre",
    startDatePlaceholder: "Data inizio",
    endDatePlaceholder: "Data fine",
    startDatetimePlaceholder: "Data e ora di inizio",
    endDatetimePlaceholder: "Data e ora di fine",
    // FIXME: translation needed
    startMonthPlaceholder: "Start Month",
    endMonthPlaceholder: "End Month",
    monthBeforeYear: !0,
    firstDayOfWeek: 0,
    today: "Oggi"
  },
  DataTable: {
    checkTableAll: "Seleziona tutto nella tabella",
    uncheckTableAll: "Deseleziona tutto nella tabella",
    confirm: "Conferma",
    clear: "Cancella"
  },
  LegacyTransfer: {
    sourceTitle: "Fonte",
    targetTitle: "Destinazione"
  },
  // TODO: translation
  Transfer: {
    selectAll: "Select all",
    unselectAll: "Unselect all",
    clearAll: "Clear",
    total: (t) => `Total ${t} items`,
    selected: (t) => `${t} items selected`
  },
  Empty: {
    description: "Nessun Dato"
  },
  Select: {
    placeholder: "Si prega di selezionare"
  },
  TimePicker: {
    placeholder: "Seleziona ora",
    positiveText: "OK",
    negativeText: "Annulla",
    now: "Ora"
  },
  Pagination: {
    goto: "Vai a",
    selectionSuffix: "per pagina"
  },
  DynamicTags: {
    add: "Aggiungi"
  },
  Log: {
    loading: "Caricamento"
  },
  Input: {
    placeholder: "Si prega di inserire"
  },
  InputNumber: {
    placeholder: "Si prega di inserire"
  },
  DynamicInput: {
    create: "Crea"
  },
  ThemeEditor: {
    title: "Editor Tema",
    clearAllVars: "Cancella tutte le variabili",
    clearSearch: "Cancella ricerca",
    filterCompName: "Filtra componenti",
    filterVarName: "Filtra variabili",
    import: "Importa",
    export: "Esporta",
    restore: "Ripristina"
  },
  Image: {
    tipPrevious: "Immagine precedente (←)",
    tipNext: "Immagine successiva (→)",
    tipCounterclockwise: "Ruota a sinistra",
    tipClockwise: "Ruota a destra",
    tipZoomOut: "Ingrandisci",
    tipZoomIn: "Riduci",
    tipClose: "Chiudi (Esc)",
    // TODO: translation
    tipOriginalSize: "Zoom to original size"
  }
};
$u.default = q_;
var Tu = {};
Object.defineProperty(Tu, "__esModule", { value: !0 });
const X_ = {
  name: "sk-SK",
  global: {
    undo: "Späť",
    redo: "Obnoviť",
    confirm: "Potvrdiť",
    clear: "Vyčistiť"
  },
  Popconfirm: {
    positiveText: "Potvrdiť",
    negativeText: "Zrušiť"
  },
  Cascader: {
    placeholder: "Prosím vyberte",
    loading: "Načítavanie",
    loadingRequiredMessage: (t) => `Prosím načítajte všetkých ${t} potomkov pred kontrolou.`
  },
  Time: {
    dateFormat: "d-M-yyyy",
    dateTimeFormat: "d-M-yyyy HH:mm:ss"
  },
  DatePicker: {
    yearFormat: "yyyy",
    monthFormat: "MMM",
    dayFormat: "EEEE",
    yearTypeFormat: "yyyy",
    monthTypeFormat: "MMM-yyyy",
    dateFormat: "d-M-yyyy",
    dateTimeFormat: "d-M-yyyy HH:mm:ss",
    quarterFormat: "qqq-yyyy",
    clear: "Vyčistiť",
    now: "Teraz",
    confirm: "Potvrdiť",
    selectTime: "Vybrať čas",
    selectDate: "Vybrať dátum",
    datePlaceholder: "Vyberte čas",
    datetimePlaceholder: "Vyberte dátum a čas",
    monthPlaceholder: "Vyberte mesiac",
    yearPlaceholder: "Vyberte rok",
    quarterPlaceholder: "Vyberte štvrťrok",
    startDatePlaceholder: "Dátum začiatku",
    endDatePlaceholder: "Dátum ukončenia",
    startDatetimePlaceholder: "Dátum a čas začiatku",
    endDatetimePlaceholder: "Dátum a čas ukončenia ",
    // FIXME: translation needed
    startMonthPlaceholder: "Start Month",
    endMonthPlaceholder: "End Month",
    monthBeforeYear: !0,
    firstDayOfWeek: 6,
    today: "Dnes"
  },
  DataTable: {
    checkTableAll: "Vybrať všetko v tabuľke",
    uncheckTableAll: "Zrušiť výber všetkého v tabuľke ",
    confirm: "Potvrdiť",
    clear: "Vyčistiť"
  },
  LegacyTransfer: {
    sourceTitle: "Zdroj",
    targetTitle: "Cieľ"
  },
  // TODO: translation
  Transfer: {
    selectAll: "Select all",
    unselectAll: "Unselect all",
    clearAll: "Clear",
    total: (t) => `Total ${t} items`,
    selected: (t) => `${t} items selected`
  },
  Empty: {
    description: "Žiadne dáta"
  },
  Select: {
    placeholder: "Prosím vyberte"
  },
  TimePicker: {
    placeholder: "Vybrať čas",
    positiveText: "OK",
    negativeText: "Zrušiť",
    now: "Teraz"
  },
  Pagination: {
    goto: "Ísť",
    selectionSuffix: "Strana"
  },
  DynamicTags: {
    add: "Pridať"
  },
  Log: {
    loading: "Načítavanie"
  },
  Input: {
    placeholder: "Zadajte"
  },
  InputNumber: {
    placeholder: "Zadajte"
  },
  DynamicInput: {
    create: "Vytvoriť"
  },
  ThemeEditor: {
    title: "Editor tém",
    clearAllVars: "Vymazať všetky premenné",
    clearSearch: "Vymazať vyhľadávanie",
    filterCompName: "Názov komponentu filtra",
    filterVarName: "Názov premennej filtra",
    import: "Importovať",
    export: "Exportovať",
    restore: "Obnoviť pôvodné nastavenia"
  },
  // TODO: translation
  Image: {
    tipPrevious: "Predchádzajúci obrázok (←)",
    tipNext: "Ďalší obrázok (→)",
    tipCounterclockwise: "Proti smeru hodinových ručičiek",
    tipClockwise: "V smere hodinových ručičiek",
    tipZoomOut: "Oddialiť",
    tipZoomIn: "Priblížiť",
    tipClose: "Zavrieť (Esc)",
    // TODO: translation
    tipOriginalSize: "Zoom to original size"
  }
};
Tu.default = X_;
var ku = {};
Object.defineProperty(ku, "__esModule", { value: !0 });
const K_ = {
  name: "en-GB",
  global: {
    undo: "Undo",
    redo: "Redo",
    confirm: "Confirm",
    clear: "Clear"
  },
  Popconfirm: {
    positiveText: "Confirm",
    negativeText: "Cancel"
  },
  Cascader: {
    placeholder: "Please Select",
    loading: "Loading",
    loadingRequiredMessage: (t) => `Please load all ${t}'s descendants before checking it.`
  },
  Time: {
    dateFormat: "yyyy/MM/dd",
    dateTimeFormat: "yyyy/MM/dd HH:mm:ss"
  },
  DatePicker: {
    yearFormat: "yyyy",
    monthFormat: "MMM",
    dayFormat: "eeeeee",
    yearTypeFormat: "yyyy",
    monthTypeFormat: "yyyy/MM",
    dateFormat: "yyyy/MM/dd",
    dateTimeFormat: "yyyy/MM/dd HH:mm:ss",
    quarterFormat: "yyyy-qqq",
    clear: "Clear",
    now: "Now",
    confirm: "Confirm",
    selectTime: "Select Time",
    selectDate: "Select Date",
    datePlaceholder: "Select Date",
    datetimePlaceholder: "Select Date and Time",
    monthPlaceholder: "Select Month",
    yearPlaceholder: "Select Year",
    quarterPlaceholder: "Select Quarter",
    startDatePlaceholder: "Start Date",
    endDatePlaceholder: "End Date",
    startDatetimePlaceholder: "Start Date and Time",
    endDatetimePlaceholder: "End Date and Time",
    startMonthPlaceholder: "Start Month",
    endMonthPlaceholder: "End Month",
    monthBeforeYear: !0,
    firstDayOfWeek: 0,
    today: "Today"
  },
  DataTable: {
    checkTableAll: "Select all in the table",
    uncheckTableAll: "Unselect all in the table",
    confirm: "Confirm",
    clear: "Clear"
  },
  LegacyTransfer: {
    sourceTitle: "Source",
    targetTitle: "Target"
  },
  Transfer: {
    selectAll: "Select all",
    unselectAll: "Unselect all",
    clearAll: "Clear",
    total: (t) => `Total ${t} items`,
    selected: (t) => `${t} items selected`
  },
  Empty: {
    description: "No Data"
  },
  Select: {
    placeholder: "Please Select"
  },
  TimePicker: {
    placeholder: "Select Time",
    positiveText: "OK",
    negativeText: "Cancel",
    now: "Now"
  },
  Pagination: {
    goto: "Goto",
    selectionSuffix: "page"
  },
  DynamicTags: {
    add: "Add"
  },
  Log: {
    loading: "Loading"
  },
  Input: {
    placeholder: "Please Input"
  },
  InputNumber: {
    placeholder: "Please Input"
  },
  DynamicInput: {
    create: "Create"
  },
  ThemeEditor: {
    title: "Theme Editor",
    clearAllVars: "Clear All Variables",
    clearSearch: "Clear Search",
    filterCompName: "Filter Component Name",
    filterVarName: "Filter Variable Name",
    import: "Import",
    export: "Export",
    restore: "Reset to Default"
  },
  Image: {
    tipPrevious: "Previous picture (←)",
    tipNext: "Next picture (→)",
    tipCounterclockwise: "Counterclockwise",
    tipClockwise: "Clockwise",
    tipZoomOut: "Zoom out",
    tipZoomIn: "Zoom in",
    tipClose: "Close (Esc)",
    // TODO: translation
    tipOriginalSize: "Zoom to original size"
  }
};
ku.default = K_;
var Su = {};
Object.defineProperty(Su, "__esModule", { value: !0 });
const G_ = {
  name: "pl-PL",
  global: {
    undo: "Cofnij",
    redo: "Ponów",
    confirm: "Potwierdź",
    clear: "Wyczyść"
  },
  Popconfirm: {
    positiveText: "Potwierdź",
    negativeText: "Anuluj"
  },
  Cascader: {
    placeholder: "Wybierz",
    loading: "Ładowanie",
    loadingRequiredMessage: (t) => `Proszę załadować wszystkie ${t}'s elementy przed sprawdzeniem.`
  },
  Time: {
    dateFormat: "yyyy-MM-dd",
    dateTimeFormat: "yyyy-MM-dd HH:mm:ss"
  },
  DatePicker: {
    yearFormat: "yyyy",
    monthFormat: "MMM",
    dayFormat: "eeeeee",
    yearTypeFormat: "yyyy",
    monthTypeFormat: "yyyy-MM",
    dateFormat: "yyyy-MM-dd",
    dateTimeFormat: "yyyy-MM-dd HH:mm:ss",
    quarterFormat: "yyyy-qqq",
    clear: "Wyczyść",
    now: "Teraz",
    confirm: "Potwierdź",
    selectTime: "Wybierz czas",
    selectDate: "Wybierz datę",
    datePlaceholder: "Wybierz datę",
    datetimePlaceholder: "Wybierz datę i czas",
    monthPlaceholder: "Wybierz miesiąc",
    yearPlaceholder: "Wybierz rok",
    quarterPlaceholder: "Wybierz kwartał",
    startDatePlaceholder: "Data rozpoczęcia",
    endDatePlaceholder: "Data zakończenia",
    startDatetimePlaceholder: "Data i godzina rozpoczęcia",
    endDatetimePlaceholder: "Data i godzina zakończenia",
    // FIXME: translation needed
    startMonthPlaceholder: "Start Month",
    endMonthPlaceholder: "End Month",
    monthBeforeYear: !0,
    firstDayOfWeek: 6,
    today: "Dziś"
  },
  DataTable: {
    checkTableAll: "Zaznacz wszystkie w tabeli",
    uncheckTableAll: "Odznacz wszystkie w tabeli",
    confirm: "Potwierdź",
    clear: "Wyczyść"
  },
  LegacyTransfer: {
    sourceTitle: "Źródło",
    targetTitle: "Cel"
  },
  // TODO: translation
  Transfer: {
    selectAll: "Select all",
    unselectAll: "Unselect all",
    clearAll: "Clear",
    total: (t) => `Total ${t} items`,
    selected: (t) => `${t} items selected`
  },
  Empty: {
    description: "Brak danych"
  },
  Select: {
    placeholder: "Wybierz"
  },
  TimePicker: {
    placeholder: "Wybierz czas",
    positiveText: "Potwierdź",
    negativeText: "Anuluj",
    now: "Teraz"
  },
  Pagination: {
    goto: "Idź do",
    selectionSuffix: "strona"
  },
  DynamicTags: {
    add: "Dodaj"
  },
  Log: {
    loading: "Ładowanie"
  },
  Input: {
    placeholder: "Wprowadź dane"
  },
  InputNumber: {
    placeholder: "Wprowadź dane"
  },
  DynamicInput: {
    create: "Utwórz"
  },
  ThemeEditor: {
    title: "Edytor motywów",
    clearAllVars: "Wyczyść wszystkie zmienne",
    clearSearch: "Wyczyść wyszukiwanie",
    filterCompName: "Nazwa komponentu filtra",
    filterVarName: "Nazwa zmiennej filtra",
    import: "Importuj",
    export: "Eksportuj",
    restore: "Przywróć ustawienia domyślne"
  },
  Image: {
    tipPrevious: "Poprzednie zdjęcie (←)",
    tipNext: "Następne zdjęcie (→)",
    tipCounterclockwise: "Przeciwnie do ruchu wskazówek zegara",
    tipClockwise: "Zgodnie z ruchem wskazówek zegara",
    tipZoomOut: "Powiększ",
    tipZoomIn: "Pomniejsz",
    tipClose: "Zamknij (Esc)",
    // TODO: translation
    tipOriginalSize: "Zoom to original size"
  }
};
Su.default = G_;
var Cu = {};
Object.defineProperty(Cu, "__esModule", { value: !0 });
const U_ = {
  name: "pt-BR",
  global: {
    undo: "Desfazer",
    redo: "Refazer",
    confirm: "Confirmar",
    clear: "Limpar"
  },
  Popconfirm: {
    positiveText: "Confirmar",
    negativeText: "Cancelar"
  },
  Cascader: {
    placeholder: "Por favor selecione",
    loading: "Carregando",
    loadingRequiredMessage: (t) => `Carregue todos os descendentes de ${t} antes de verificar.`
  },
  Time: {
    dateFormat: "dd/MM/yyyy",
    dateTimeFormat: "dd/MM/yyyy HH:mm:ss"
  },
  DatePicker: {
    yearFormat: "yyyy",
    monthFormat: "MMM",
    dayFormat: "eeeeee",
    yearTypeFormat: "yyyy",
    monthTypeFormat: "yyyy/MM",
    dateFormat: "dd/MM/yyyy",
    dateTimeFormat: "dd/MM/yyyy HH:mm:ss",
    quarterFormat: "yyyy/qqq",
    clear: "Limpar",
    now: "Agora",
    confirm: "Confirmar",
    selectTime: "Selecionar hora",
    selectDate: "Selecione a data",
    datePlaceholder: "Selecione a data",
    datetimePlaceholder: "Selecione Data e Hora",
    monthPlaceholder: "Selecione o mês",
    yearPlaceholder: "Selecione o ano",
    quarterPlaceholder: "Selecione o quatrimestre",
    startDatePlaceholder: "Selecione a data de início",
    endDatePlaceholder: "Selecione a data de término",
    startDatetimePlaceholder: "Selecione a data e hora de início",
    endDatetimePlaceholder: "Select a data e hora de término",
    // FIXME: translation needed
    startMonthPlaceholder: "Start Month",
    endMonthPlaceholder: "End Month",
    monthBeforeYear: !0,
    firstDayOfWeek: 6,
    today: "Hoje"
  },
  DataTable: {
    checkTableAll: "Selecionar todos na tabela",
    uncheckTableAll: "Desmarcar todos na tabela",
    confirm: "Confirmar",
    clear: "Limpar"
  },
  LegacyTransfer: {
    sourceTitle: "Fonte",
    targetTitle: "Destino"
  },
  // TODO: translation
  Transfer: {
    selectAll: "Select all",
    unselectAll: "Unselect all",
    clearAll: "Clear",
    total: (t) => `Total ${t} items`,
    selected: (t) => `${t} items selected`
  },
  Empty: {
    description: "Não há dados"
  },
  Select: {
    placeholder: "Por favor selecione"
  },
  TimePicker: {
    placeholder: "Selecione a hora",
    positiveText: "OK",
    negativeText: "Cancelar",
    now: "Agora"
  },
  Pagination: {
    goto: "Ir para",
    selectionSuffix: "página"
  },
  DynamicTags: {
    add: "Adicionar"
  },
  Log: {
    loading: "Carregando"
  },
  Input: {
    placeholder: "Por favor digite"
  },
  InputNumber: {
    placeholder: "Por favor digite"
  },
  DynamicInput: {
    create: "Criar"
  },
  ThemeEditor: {
    title: "Editor de temas",
    clearAllVars: "Limpar todas as variáveis",
    clearSearch: "Limpar pesquisa",
    filterCompName: "Filtrar nome do componente",
    filterVarName: "Filtrar nome da variável",
    import: "Importar",
    export: "Exportar",
    restore: "Restaurar"
  },
  Image: {
    tipPrevious: "Foto anterior (←)",
    tipNext: "Próxima foto (→)",
    tipCounterclockwise: "Sentido anti-horário",
    tipClockwise: "Sentido horário",
    tipZoomOut: "Reduzir o zoom",
    tipZoomIn: "Mais Zoom",
    tipClose: "Fechar (Esc)",
    // TODO: translation
    tipOriginalSize: "Zoom to original size"
  }
};
Cu.default = U_;
var Du = {};
Object.defineProperty(Du, "__esModule", { value: !0 });
const Y_ = {
  name: "thTH",
  global: {
    undo: "เลิกทำ",
    redo: "ทำซ้ำ",
    confirm: "ยืนยัน",
    clear: "ล้าง"
  },
  Popconfirm: {
    positiveText: "ยืนยัน",
    negativeText: "ยกเลิก"
  },
  Cascader: {
    placeholder: "กรุณาเลือก",
    loading: "กำลังโหลด",
    loadingRequiredMessage: (t) => `Please load all ${t}'s descendants before checking it.`
  },
  Time: {
    dateFormat: "dd-MMMM-yyyy",
    dateTimeFormat: "dd-MMMM-yyyy HH:mm:ss"
  },
  DatePicker: {
    yearFormat: "yyyy",
    monthFormat: "MMM",
    dayFormat: "eeeeee",
    yearTypeFormat: "yyyy",
    monthTypeFormat: "yyyy-MM",
    dateFormat: "dd/MMMM/yyyy",
    dateTimeFormat: "dd/MMMM/yyyy HH:mm:ss",
    quarterFormat: "yyyy-qqq",
    clear: "ล้าง",
    now: "วันนี้",
    confirm: "ยืนยัน",
    selectTime: "เวลา",
    selectDate: "วันที่",
    datePlaceholder: "วันที่",
    datetimePlaceholder: "เวลา-วันที่",
    monthPlaceholder: "เดือน",
    yearPlaceholder: "ปี",
    quarterPlaceholder: "ไตรมาส",
    startDatePlaceholder: "วันที่เริ่มต้น",
    endDatePlaceholder: "วันที่สิ้นสุด",
    startDatetimePlaceholder: "วันที่เริ่มต้นและสิ้นสุด",
    endDatetimePlaceholder: "วันที่สิ้นสุดและเวลา",
    // FIXME: translation needed
    startMonthPlaceholder: "Start Month",
    endMonthPlaceholder: "End Month",
    monthBeforeYear: !0,
    firstDayOfWeek: 6,
    today: "วันนี้"
  },
  DataTable: {
    checkTableAll: "เลือกทั้งหมด",
    uncheckTableAll: "ไม่เลือกทั้งหมด",
    confirm: "ยืนยัน",
    clear: "ล้างข้อมูล"
  },
  LegacyTransfer: {
    sourceTitle: "Source",
    targetTitle: "Target"
  },
  // TODO: translation
  Transfer: {
    selectAll: "Select all",
    unselectAll: "Unselect all",
    clearAll: "Clear",
    total: (t) => `Total ${t} items`,
    selected: (t) => `${t} items selected`
  },
  Empty: {
    description: "ไม่มีข้อมูล"
  },
  Select: {
    placeholder: "กรุณาเลือก"
  },
  TimePicker: {
    placeholder: "เวลา",
    positiveText: "ตกลง",
    negativeText: "ยกเลิก",
    now: "วันนี้"
  },
  Pagination: {
    goto: "ไปยัง",
    selectionSuffix: "หน้า"
  },
  DynamicTags: {
    add: "เพิ่ม"
  },
  Log: {
    loading: "กำลังโหลด"
  },
  Input: {
    placeholder: "กรุณากรอก"
  },
  InputNumber: {
    placeholder: "กรุณากรอก"
  },
  DynamicInput: {
    create: "สร้าง"
  },
  ThemeEditor: {
    title: "แก้ไขธีม",
    clearAllVars: "ล้างข้อมูลตัวแปร",
    clearSearch: "ล้างข้อมูลค้นหา",
    filterCompName: "กรองโดยชื่อ Component",
    filterVarName: "กรองโดยชื่อตัวแปร",
    import: "นำเข้า",
    export: "ส่งออก",
    restore: "รีเซ็ต"
  },
  // TODO: translation
  Image: {
    tipPrevious: "ก่อนหน้า (←)",
    tipNext: "ถัดไป (→)",
    tipCounterclockwise: "หมุน (↺)",
    tipClockwise: "หมุน (↻)",
    tipZoomOut: "ซูมออก",
    tipZoomIn: "ซูมเข้า",
    tipClose: "ปิด (Esc)",
    // TODO: translation
    tipOriginalSize: "Zoom to original size"
  }
};
Du.default = Y_;
var Wu = {};
Object.defineProperty(Wu, "__esModule", { value: !0 });
const Z_ = {
  name: "ar-DZ",
  global: {
    undo: "تراجع",
    redo: "إعادة",
    confirm: "تأكيد",
    clear: "مسح"
  },
  Popconfirm: {
    positiveText: "تأكيد",
    negativeText: "إلغاء"
  },
  Cascader: {
    placeholder: "يرجى التحديد",
    loading: "جاري التحميل",
    loadingRequiredMessage: (t) => `يرجى تحميل جميع الـ ${t} الفرعية قبل التحقق منها.`
  },
  Time: {
    dateFormat: "yyyy-MM-dd",
    dateTimeFormat: "yyyy-MM-dd HH:mm:ss"
  },
  DatePicker: {
    yearFormat: "yyyy",
    monthFormat: "MMM",
    dayFormat: "eeeeee",
    yearTypeFormat: "yyyy",
    monthTypeFormat: "yyyy-MM",
    dateFormat: "yyyy-MM-dd",
    dateTimeFormat: "yyyy-MM-dd HH:mm:ss",
    quarterFormat: "yyyy-qqq",
    clear: "مسح",
    now: "الآن",
    confirm: "تأكيد",
    selectTime: "إختيار الوقت",
    selectDate: "إختيار التاريخ",
    datePlaceholder: "إختيار التاريخ",
    datetimePlaceholder: "إختيار التاريخ والوقت",
    monthPlaceholder: "إختيار الشهر",
    yearPlaceholder: "إختيار السنة",
    quarterPlaceholder: "إختيار الربع",
    startDatePlaceholder: "تاريخ البدء",
    endDatePlaceholder: "تاريخ الإنتهاء",
    startDatetimePlaceholder: "تاريخ ووقت البدء",
    endDatetimePlaceholder: "تاريخ ووقت الإنتهاء",
    startMonthPlaceholder: "شهر البدء",
    endMonthPlaceholder: "شهر الإنتهاء",
    monthBeforeYear: !0,
    firstDayOfWeek: 6,
    today: "اليوم"
  },
  DataTable: {
    checkTableAll: "تحديد كل العناصر في الجدول",
    uncheckTableAll: "إلغاء تحديد كل العناصر في الجدول",
    confirm: "تأكيد",
    clear: "مسح"
  },
  LegacyTransfer: {
    sourceTitle: "المصدر",
    targetTitle: "الهدف"
  },
  Transfer: {
    selectAll: "تحديد الكل",
    unselectAll: "إلغاء تحديد الكل",
    clearAll: "مسح",
    total: (t) => `إجمالي ${t} عنصر`,
    selected: (t) => `${t} عنصر محدد`
  },
  Empty: {
    description: "لا توجد بيانات"
  },
  Select: {
    placeholder: "يرجى الإختيار"
  },
  TimePicker: {
    placeholder: "إختيار الوقت",
    positiveText: "تأكيد",
    negativeText: "إلغاء",
    now: "الآن"
  },
  Pagination: {
    goto: "إذهب إلى",
    selectionSuffix: "صفحة"
  },
  DynamicTags: {
    add: "إضافة"
  },
  Log: {
    loading: "جاري التحميل"
  },
  Input: {
    placeholder: "يرجى الإدخال"
  },
  InputNumber: {
    placeholder: "يرجى الإدخال"
  },
  DynamicInput: {
    create: "إنشاء"
  },
  ThemeEditor: {
    title: "محرر النمط",
    clearAllVars: "مسح جميع المتغيرات",
    clearSearch: "مسح البحث",
    filterCompName: "تصفية إسم المكون",
    filterVarName: "تصفية إسم المتغير",
    import: "إستيراد",
    export: "تصدير",
    restore: "إعادة تعيين إلى الإفتراضي"
  },
  Image: {
    tipPrevious: "(→) الصورة السابقة",
    tipNext: "(←) الصورة التالية",
    tipCounterclockwise: "عكس عقارب الساعة",
    tipClockwise: "إتجاه عقارب الساعة",
    tipZoomOut: "تكبير",
    tipZoomIn: "تصغير",
    tipClose: "إغلاق (Esc زر)",
    tipOriginalSize: "تكبير إلى الحجم الأصلي"
  }
};
Wu.default = Z_;
var xu = {};
Object.defineProperty(xu, "__esModule", { value: !0 });
const J_ = {
  name: "tr-TR",
  global: {
    undo: "Vazgeç",
    redo: "Tekrar Dene",
    confirm: "Kabul Et",
    clear: "Temizle"
  },
  Popconfirm: {
    positiveText: "Kabul Et",
    negativeText: "İptal"
  },
  Cascader: {
    placeholder: "Lütfen Seçin",
    loading: "Yükleniyor",
    loadingRequiredMessage: (t) => `Lütfen kontrol etmeden önce tüm ${t}ları yükleyin.`
  },
  Time: {
    dateFormat: "yyyy-MM-dd",
    dateTimeFormat: "yyyy-MM-dd HH:mm:ss"
  },
  DatePicker: {
    yearFormat: "yyyy",
    monthFormat: "MMM",
    dayFormat: "eeeeee",
    yearTypeFormat: "yyyy",
    monthTypeFormat: "yyyy-MM",
    dateFormat: "yyyy-MM-dd",
    dateTimeFormat: "yyyy-MM-dd HH:mm:ss",
    quarterFormat: "yyyy-qqq",
    clear: "Temizle",
    now: "Şimdi",
    confirm: "Onayla",
    selectTime: "Saat Seçin",
    selectDate: "Tarih Seçin",
    datePlaceholder: "Tarih Seç",
    datetimePlaceholder: "Tarih ve Saat Seçin",
    monthPlaceholder: "Ay Seçin",
    yearPlaceholder: "Yıl Seçin",
    quarterPlaceholder: "Mevsim Seçin",
    startDatePlaceholder: "Başlangıç Tarihi",
    endDatePlaceholder: "Bitiş Tarihi",
    startDatetimePlaceholder: "Başlangıç Tarih ve Saati",
    endDatetimePlaceholder: "Bitiş Tarihi ve Saati",
    startMonthPlaceholder: "Başlangıç Ayı",
    endMonthPlaceholder: "Bitiş Ayı",
    monthBeforeYear: !0,
    firstDayOfWeek: 6,
    today: "Bugün"
  },
  DataTable: {
    checkTableAll: "Tüm Tabloyu Seç",
    uncheckTableAll: "Tablodaki tüm seçimleri kaldır",
    confirm: "Onayla",
    clear: "Temizle"
  },
  LegacyTransfer: {
    sourceTitle: "Kaynak",
    targetTitle: "Hedef"
  },
  Transfer: {
    selectAll: "Tümünü Seç",
    unselectAll: "Tüm Seçimi Kaldır",
    clearAll: "Temizle",
    total: (t) => `Toplam ${t} öğe`,
    selected: (t) => `${t} öğe Seçili`
  },
  Empty: {
    description: "Veri Yok"
  },
  Select: {
    placeholder: "Lütfen seçin"
  },
  TimePicker: {
    placeholder: "Saat Seç",
    positiveText: "Tamam",
    negativeText: "İptal",
    now: "Şimdi"
  },
  Pagination: {
    goto: "git",
    selectionSuffix: "sayfa"
  },
  DynamicTags: {
    add: "Ekle"
  },
  Log: {
    loading: "Yükleniyor"
  },
  Input: {
    placeholder: "Lütfen Girin"
  },
  InputNumber: {
    placeholder: "Lütfen Girin"
  },
  DynamicInput: {
    create: "Oluştur"
  },
  ThemeEditor: {
    title: "Tema Editörü",
    clearAllVars: "Tüm Değişkenleri Temizle",
    clearSearch: "Aramayı Temizle",
    filterCompName: "Bileşen Adını Filtrele",
    filterVarName: "Değişken Adını Filtrele",
    import: "Ekle",
    export: "Çıkar",
    restore: "Varsayılana sıfırla"
  },
  Image: {
    tipPrevious: "Önceki resim (←)",
    tipNext: "Sonraki resim (→)",
    tipCounterclockwise: "saat yönünün tersine",
    tipClockwise: "saat yönününe",
    tipZoomOut: "Uzaklaştır",
    tipZoomIn: "Yakınlaştır",
    tipClose: "Kapat (Esc)",
    // TODO: translation
    tipOriginalSize: "Orijinal boyuta yakınlaştır"
  }
};
xu.default = J_;
var Ou = {};
Object.defineProperty(Ou, "__esModule", { value: !0 });
const Q_ = {
  name: "eo",
  global: {
    undo: "Malfari",
    redo: "Refari",
    confirm: "Konfirmi",
    clear: "Malplenigi"
  },
  Popconfirm: {
    positiveText: "Konfirmi",
    negativeText: "Nuligi"
  },
  Cascader: {
    placeholder: "Bonvolu elekti",
    loading: "Ŝargiĝo",
    loadingRequiredMessage: (t) => `Bonvolu ŝargi ĉiujn idojn de ${t} antaŭ ol elekti ĝin.`
  },
  Time: {
    dateFormat: "yyyy-MM-dd",
    dateTimeFormat: "yyyy-MM-dd HH:mm:ss"
  },
  DatePicker: {
    yearFormat: "yyyy",
    monthFormat: "MMM",
    dayFormat: "eeeeee",
    yearTypeFormat: "yyyy",
    monthTypeFormat: "yyyy-MM",
    dateFormat: "yyyy-MM-dd",
    dateTimeFormat: "yyyy-MM-dd HH:mm:ss",
    quarterFormat: "yyyy-qqq",
    clear: "Malplenigi",
    now: "Nun",
    confirm: "Konfirmi",
    selectTime: "Elekti tempon",
    selectDate: "Elekti daton",
    datePlaceholder: "Elekti daton",
    datetimePlaceholder: "Elekti daton kaj tempon",
    monthPlaceholder: "Elekti monaton",
    yearPlaceholder: "Elekti jaron",
    quarterPlaceholder: "Elekti jarkvaronon",
    startDatePlaceholder: "Komenca dato",
    endDatePlaceholder: "Fina dato",
    startDatetimePlaceholder: "Komencaj dato kaj tempo",
    endDatetimePlaceholder: "Finaj dato kaj tempo",
    // FIXME: translation needed
    startMonthPlaceholder: "Start Month",
    endMonthPlaceholder: "End Month",
    monthBeforeYear: !0,
    firstDayOfWeek: 0,
    today: "Hodiaŭ"
  },
  DataTable: {
    checkTableAll: "Elekti ĉiujn en la tabelo",
    uncheckTableAll: "Malelekti ĉiujn en la tabelo",
    confirm: "Konfirmi",
    clear: "Malplenigi"
  },
  LegacyTransfer: {
    sourceTitle: "Source",
    targetTitle: "Target"
  },
  // TODO: translation
  Transfer: {
    selectAll: "Select all",
    unselectAll: "Unselect all",
    clearAll: "Clear",
    total: (t) => `Total ${t} items`,
    selected: (t) => `${t} items selected`
  },
  Empty: {
    description: "Neniu datumo"
  },
  Select: {
    placeholder: "Bonvolu elekti"
  },
  TimePicker: {
    placeholder: "Elekti tempon",
    positiveText: "Bone",
    negativeText: "Nuligi",
    now: "Nun"
  },
  Pagination: {
    goto: "Iri al",
    selectionSuffix: "paĝo"
  },
  DynamicTags: {
    add: "Aldoni"
  },
  Log: {
    loading: "Ŝargado"
  },
  Input: {
    placeholder: "Bonvolu entajpi"
  },
  InputNumber: {
    placeholder: "Bonvolu entajpi"
  },
  DynamicInput: {
    create: "Krei"
  },
  ThemeEditor: {
    title: "Etosredaktilo",
    clearAllVars: "Malplenigi ĉiujn variablojn",
    clearSearch: "Malplenigi serĉon",
    filterCompName: "Filtri nomojn de komponaĵoj",
    filterVarName: "Filtri nomojn de variabloj",
    import: "Importi",
    export: "Eksporti",
    restore: "Restarigi defaŭltajn valorojn"
  },
  Image: {
    tipPrevious: "Antaŭa bildo (←)",
    tipNext: "Sekva bildo (→)",
    tipCounterclockwise: "Maldekstrume",
    tipClockwise: "Dekstrume",
    tipZoomOut: "Malzomi",
    tipZoomIn: "Zomi",
    tipClose: "Fermi (Esc)",
    tipOriginalSize: "Zoom to original size"
  }
};
Ou.default = Q_;
var zu = {};
Object.defineProperty(zu, "__esModule", { value: !0 });
const e$ = {
  name: "vi-VN",
  global: {
    undo: "Hoàn tác",
    redo: "Làm lại",
    confirm: "Xác nhận",
    clear: "xóa"
  },
  Popconfirm: {
    positiveText: "Xác nhận",
    negativeText: "Hủy"
  },
  Cascader: {
    placeholder: "Vui lòng chọn",
    loading: "Đang tải",
    loadingRequiredMessage: (t) => `Vui lòng tải tất cả thông tin con của ${t} trước.`
  },
  Time: {
    dateFormat: "",
    dateTimeFormat: "HH:mm:ss dd-MM-yyyy"
  },
  DatePicker: {
    yearFormat: "yyyy",
    monthFormat: "MMM",
    dayFormat: "eeeeee",
    yearTypeFormat: "yyyy",
    monthTypeFormat: "MM-yyyy",
    dateFormat: "dd-MM-yyyy",
    dateTimeFormat: "HH:mm:ss dd-MM-yyyy",
    quarterFormat: "qqq-yyyy",
    clear: "Xóa",
    now: "Hôm nay",
    confirm: "Xác nhận",
    selectTime: "Chọn giờ",
    selectDate: "Chọn ngày",
    datePlaceholder: "Chọn ngày",
    datetimePlaceholder: "Chọn ngày giờ",
    monthPlaceholder: "Chọn tháng",
    yearPlaceholder: "Chọn năm",
    quarterPlaceholder: "Chọn quý",
    startDatePlaceholder: "Ngày bắt đầu",
    endDatePlaceholder: "Ngày kết thúc",
    startDatetimePlaceholder: "Thời gian bắt đầu",
    endDatetimePlaceholder: "Thời gian kết thúc",
    startMonthPlaceholder: "Tháng bắt đầu",
    endMonthPlaceholder: "Tháng kết thúc",
    monthBeforeYear: !0,
    firstDayOfWeek: 0,
    today: "Hôm nay"
  },
  DataTable: {
    checkTableAll: "Chọn tất cả có trong bảng",
    uncheckTableAll: "Bỏ chọn tất cả có trong bảng",
    confirm: "Xác nhận",
    clear: "Xóa"
  },
  LegacyTransfer: {
    sourceTitle: "Nguồn",
    targetTitle: "Đích"
  },
  Transfer: {
    selectAll: "Chọn tất cả",
    unselectAll: "Bỏ chọn tất cả",
    clearAll: "Xoá tất cả",
    total: (t) => `Tổng cộng ${t} mục`,
    selected: (t) => `${t} mục được chọn`
  },
  Empty: {
    description: "Không có dữ liệu"
  },
  Select: {
    placeholder: "Vui lòng chọn"
  },
  TimePicker: {
    placeholder: "Chọn thời gian",
    positiveText: "OK",
    negativeText: "Hủy",
    now: "Hiện tại"
  },
  Pagination: {
    goto: "Đi đến trang",
    selectionSuffix: "trang"
  },
  DynamicTags: {
    add: "Thêm"
  },
  Log: {
    loading: "Đang tải"
  },
  Input: {
    placeholder: "Vui lòng nhập"
  },
  InputNumber: {
    placeholder: "Vui lòng nhập"
  },
  DynamicInput: {
    create: "Tạo"
  },
  ThemeEditor: {
    title: "Tùy chỉnh giao diện",
    clearAllVars: "Xóa tất cả các biến",
    clearSearch: "Xóa tìm kiếm",
    filterCompName: "Lọc tên component",
    filterVarName: "Lọc tên biến",
    import: "Nhập",
    export: "Xuất",
    restore: "Đặt lại mặc định"
  },
  Image: {
    tipPrevious: "Hình trước (←)",
    tipNext: "Hình tiếp (→)",
    tipCounterclockwise: "Counterclockwise",
    tipClockwise: "Chiều kim đồng hồ",
    tipZoomOut: "Thu nhỏ",
    tipZoomIn: "Phóng to",
    tipClose: "Đóng (Esc)",
    tipOriginalSize: "Xem kích thước gốc"
  }
};
zu.default = e$;
var Eu = {};
Object.defineProperty(Eu, "__esModule", { value: !0 });
const t$ = {
  name: "fa-IR",
  global: {
    undo: "لغو انجام شده",
    redo: "انجام دوباره",
    confirm: "تأیید",
    clear: "پاک کردن"
  },
  Popconfirm: {
    positiveText: "تأیید",
    negativeText: "لغو"
  },
  Cascader: {
    placeholder: "لطفا انتخاب کنید",
    loading: "بارگذاری",
    loadingRequiredMessage: (t) => `پس از بارگیری کامل زیرمجموعه های ${t} می توانید انتخاب کنید `
  },
  Time: {
    dateFormat: "yyyy/MM/dd",
    dateTimeFormat: "yyyy/MM/dd، H:mm:ss"
  },
  DatePicker: {
    yearFormat: "yyyy سال",
    monthFormat: "MMM",
    dayFormat: "eeeeee",
    yearTypeFormat: "yyyy",
    monthTypeFormat: "MM/yyyy",
    dateFormat: "yyyy/MM/dd",
    dateTimeFormat: "yyyy/MM/dd HH:mm:ss",
    quarterFormat: "سه ماهه yyyy",
    clear: "پاک کردن",
    now: "اکنون",
    confirm: "تأیید",
    selectTime: "انتخاب زمان",
    selectDate: "انتخاب تاریخ",
    datePlaceholder: "انتخاب تاریخ",
    datetimePlaceholder: "انتخاب تاریخ و زمان",
    monthPlaceholder: "انتخاب ماه",
    yearPlaceholder: "انتخاب سال",
    quarterPlaceholder: "انتخاب سه‌ماهه",
    startDatePlaceholder: "تاریخ شروع",
    endDatePlaceholder: "تاریخ پایان",
    startDatetimePlaceholder: "زمان شروع",
    endDatetimePlaceholder: "زمان پایان",
    startMonthPlaceholder: "ماه شروع",
    endMonthPlaceholder: "ماه پایان",
    monthBeforeYear: !1,
    firstDayOfWeek: 6,
    today: "امروز"
  },
  DataTable: {
    checkTableAll: "انتخاب همه داده‌های جدول",
    uncheckTableAll: "عدم انتخاب همه داده‌های جدول",
    confirm: "تأیید",
    clear: "تنظیم مجدد"
  },
  LegacyTransfer: {
    sourceTitle: "آیتم منبع",
    targetTitle: "آیتم مقصد"
  },
  Transfer: {
    selectAll: "انتخاب همه",
    clearAll: "حذف همه",
    unselectAll: "عدم انتخاب همه",
    total: (t) => `کل ${t} مورد`,
    selected: (t) => `انتخاب شده ${t} مورد`
  },
  Empty: {
    description: "اطلاعاتی وجود ندارد"
  },
  Select: {
    placeholder: "لطفاً انتخاب کنید"
  },
  TimePicker: {
    placeholder: "لطفاً زمان مورد نظر را انتخاب کنید",
    positiveText: "تأیید",
    negativeText: "لغو",
    now: "همین الان"
  },
  Pagination: {
    goto: "رفتن به صفحه",
    selectionSuffix: "صفحه"
  },
  DynamicTags: {
    add: "افزودن"
  },
  Log: {
    loading: "در حال بارگذاری"
  },
  Input: {
    placeholder: "لطفاً وارد کنید"
  },
  InputNumber: {
    placeholder: "لطفاً وارد کنید"
  },
  DynamicInput: {
    create: "افزودن"
  },
  ThemeEditor: {
    title: "ویرایشگر پوسته",
    clearAllVars: "پاک کردن همه متغیرها",
    clearSearch: "پاک کردن جستجو",
    filterCompName: "فیلتر نام کامپوننت",
    filterVarName: "فیلتر نام متغیر",
    import: "ورود",
    export: "خروج",
    restore: "بازگردانی به حالت پیش‌فرض"
  },
  Image: {
    tipPrevious: "تصویر قبلی (←)",
    tipNext: "تصویر بعدی (→)",
    tipCounterclockwise: "چرخش به سمت چپ",
    tipClockwise: "چرخش به سمت راست",
    tipZoomOut: "کوچک نمایی تصویر",
    tipZoomIn: "بزرگ نمایی تصویر",
    tipClose: "بستن (Esc)",
    tipOriginalSize: "اندازه اصلی تصویر"
  }
};
Eu.default = t$;
var ju = {}, r$ = {
  lessThanXSeconds: {
    one: "不到 1 秒",
    other: "不到 {{count}} 秒"
  },
  xSeconds: {
    one: "1 秒",
    other: "{{count}} 秒"
  },
  halfAMinute: "半分钟",
  lessThanXMinutes: {
    one: "不到 1 分钟",
    other: "不到 {{count}} 分钟"
  },
  xMinutes: {
    one: "1 分钟",
    other: "{{count}} 分钟"
  },
  xHours: {
    one: "1 小时",
    other: "{{count}} 小时"
  },
  aboutXHours: {
    one: "大约 1 小时",
    other: "大约 {{count}} 小时"
  },
  xDays: {
    one: "1 天",
    other: "{{count}} 天"
  },
  aboutXWeeks: {
    one: "大约 1 个星期",
    other: "大约 {{count}} 个星期"
  },
  xWeeks: {
    one: "1 个星期",
    other: "{{count}} 个星期"
  },
  aboutXMonths: {
    one: "大约 1 个月",
    other: "大约 {{count}} 个月"
  },
  xMonths: {
    one: "1 个月",
    other: "{{count}} 个月"
  },
  aboutXYears: {
    one: "大约 1 年",
    other: "大约 {{count}} 年"
  },
  xYears: {
    one: "1 年",
    other: "{{count}} 年"
  },
  overXYears: {
    one: "超过 1 年",
    other: "超过 {{count}} 年"
  },
  almostXYears: {
    one: "将近 1 年",
    other: "将近 {{count}} 年"
  }
}, n$ = function(n, a, o) {
  var l, d = r$[n];
  return typeof d == "string" ? l = d : a === 1 ? l = d.one : l = d.other.replace("{{count}}", String(a)), o != null && o.addSuffix ? o.comparison && o.comparison > 0 ? l + "内" : l + "前" : l;
};
const a$ = n$;
function L(t) {
  return function() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, a = n.width ? String(n.width) : t.defaultWidth, o = t.formats[a] || t.formats[t.defaultWidth];
    return o;
  };
}
var i$ = {
  full: "y'年'M'月'd'日' EEEE",
  long: "y'年'M'月'd'日'",
  medium: "yyyy-MM-dd",
  short: "yy-MM-dd"
}, o$ = {
  full: "zzzz a h:mm:ss",
  long: "z a h:mm:ss",
  medium: "a h:mm:ss",
  short: "a h:mm"
}, l$ = {
  full: "{{date}} {{time}}",
  long: "{{date}} {{time}}",
  medium: "{{date}} {{time}}",
  short: "{{date}} {{time}}"
}, u$ = {
  date: L({
    formats: i$,
    defaultWidth: "full"
  }),
  time: L({
    formats: o$,
    defaultWidth: "full"
  }),
  dateTime: L({
    formats: l$,
    defaultWidth: "full"
  })
};
const s$ = u$;
function Au(t, n) {
  if (n.length < t)
    throw new TypeError(t + " argument" + (t > 1 ? "s" : "") + " required, but only " + n.length + " present");
}
function Yl(t) {
  "@babel/helpers - typeof";
  return Yl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
    return typeof n;
  } : function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Yl(t);
}
function Fu(t) {
  Au(1, arguments);
  var n = Object.prototype.toString.call(t);
  return t instanceof Date || Yl(t) === "object" && n === "[object Date]" ? new Date(t.getTime()) : typeof t == "number" || n === "[object Number]" ? new Date(t) : ((typeof t == "string" || n === "[object String]") && typeof console < "u" && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"), console.warn(new Error().stack)), /* @__PURE__ */ new Date(NaN));
}
function d$(t) {
  if (t === null || t === !0 || t === !1)
    return NaN;
  var n = Number(t);
  return isNaN(n) ? n : n < 0 ? Math.ceil(n) : Math.floor(n);
}
var Ym = {};
function c$() {
  return Ym;
}
function zH(t) {
  Ym = t;
}
function Rf(t, n) {
  var a, o, l, d, m, b, y, w;
  Au(1, arguments);
  var $ = c$(), W = d$((a = (o = (l = (d = n == null ? void 0 : n.weekStartsOn) !== null && d !== void 0 ? d : n == null || (m = n.locale) === null || m === void 0 || (b = m.options) === null || b === void 0 ? void 0 : b.weekStartsOn) !== null && l !== void 0 ? l : $.weekStartsOn) !== null && o !== void 0 ? o : (y = $.locale) === null || y === void 0 || (w = y.options) === null || w === void 0 ? void 0 : w.weekStartsOn) !== null && a !== void 0 ? a : 0);
  if (!(W >= 0 && W <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var x = Fu(t), E = x.getUTCDay(), _ = (E < W ? 7 : 0) + E - W;
  return x.setUTCDate(x.getUTCDate() - _), x.setUTCHours(0, 0, 0, 0), x;
}
function Ht(t, n, a) {
  Au(2, arguments);
  var o = Rf(t, a), l = Rf(n, a);
  return o.getTime() === l.getTime();
}
function Lf(t, n, a) {
  var o = "eeee p";
  return Ht(t, n, a) ? o : t.getTime() > n.getTime() ? "'下个'" + o : "'上个'" + o;
}
var f$ = {
  lastWeek: Lf,
  // days before yesterday, maybe in this week or last week
  yesterday: "'昨天' p",
  today: "'今天' p",
  tomorrow: "'明天' p",
  nextWeek: Lf,
  // days after tomorrow, maybe in this week or next week
  other: "PP p"
}, m$ = function(n, a, o, l) {
  var d = f$[n];
  return typeof d == "function" ? d(a, o, l) : d;
};
const h$ = m$;
function C(t) {
  return function(n, a) {
    var o = a != null && a.context ? String(a.context) : "standalone", l;
    if (o === "formatting" && t.formattingValues) {
      var d = t.defaultFormattingWidth || t.defaultWidth, m = a != null && a.width ? String(a.width) : d;
      l = t.formattingValues[m] || t.formattingValues[d];
    } else {
      var b = t.defaultWidth, y = a != null && a.width ? String(a.width) : t.defaultWidth;
      l = t.values[y] || t.values[b];
    }
    var w = t.argumentCallback ? t.argumentCallback(n) : n;
    return l[w];
  };
}
var v$ = {
  narrow: ["前", "公元"],
  abbreviated: ["前", "公元"],
  wide: ["公元前", "公元"]
}, p$ = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["第一季", "第二季", "第三季", "第四季"],
  wide: ["第一季度", "第二季度", "第三季度", "第四季度"]
}, g$ = {
  narrow: ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二"],
  abbreviated: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
  wide: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"]
}, y$ = {
  narrow: ["日", "一", "二", "三", "四", "五", "六"],
  short: ["日", "一", "二", "三", "四", "五", "六"],
  abbreviated: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
  wide: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]
}, b$ = {
  narrow: {
    am: "上",
    pm: "下",
    midnight: "凌晨",
    noon: "午",
    morning: "早",
    afternoon: "下午",
    evening: "晚",
    night: "夜"
  },
  abbreviated: {
    am: "上午",
    pm: "下午",
    midnight: "凌晨",
    noon: "中午",
    morning: "早晨",
    afternoon: "中午",
    evening: "晚上",
    night: "夜间"
  },
  wide: {
    am: "上午",
    pm: "下午",
    midnight: "凌晨",
    noon: "中午",
    morning: "早晨",
    afternoon: "中午",
    evening: "晚上",
    night: "夜间"
  }
}, w$ = {
  narrow: {
    am: "上",
    pm: "下",
    midnight: "凌晨",
    noon: "午",
    morning: "早",
    afternoon: "下午",
    evening: "晚",
    night: "夜"
  },
  abbreviated: {
    am: "上午",
    pm: "下午",
    midnight: "凌晨",
    noon: "中午",
    morning: "早晨",
    afternoon: "中午",
    evening: "晚上",
    night: "夜间"
  },
  wide: {
    am: "上午",
    pm: "下午",
    midnight: "凌晨",
    noon: "中午",
    morning: "早晨",
    afternoon: "中午",
    evening: "晚上",
    night: "夜间"
  }
}, P$ = function(n, a) {
  var o = Number(n);
  switch (a == null ? void 0 : a.unit) {
    case "date":
      return o.toString() + "日";
    case "hour":
      return o.toString() + "时";
    case "minute":
      return o.toString() + "分";
    case "second":
      return o.toString() + "秒";
    default:
      return "第 " + o.toString();
  }
}, M$ = {
  ordinalNumber: P$,
  era: C({
    values: v$,
    defaultWidth: "wide"
  }),
  quarter: C({
    values: p$,
    defaultWidth: "wide",
    argumentCallback: function(n) {
      return n - 1;
    }
  }),
  month: C({
    values: g$,
    defaultWidth: "wide"
  }),
  day: C({
    values: y$,
    defaultWidth: "wide"
  }),
  dayPeriod: C({
    values: b$,
    defaultWidth: "wide",
    formattingValues: w$,
    defaultFormattingWidth: "wide"
  })
};
const _$ = M$;
function D(t) {
  return function(n) {
    var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o = a.width, l = o && t.matchPatterns[o] || t.matchPatterns[t.defaultMatchWidth], d = n.match(l);
    if (!d)
      return null;
    var m = d[0], b = o && t.parsePatterns[o] || t.parsePatterns[t.defaultParseWidth], y = Array.isArray(b) ? T$(b, function(W) {
      return W.test(m);
    }) : $$(b, function(W) {
      return W.test(m);
    }), w;
    w = t.valueCallback ? t.valueCallback(y) : y, w = a.valueCallback ? a.valueCallback(w) : w;
    var $ = n.slice(m.length);
    return {
      value: w,
      rest: $
    };
  };
}
function $$(t, n) {
  for (var a in t)
    if (t.hasOwnProperty(a) && n(t[a]))
      return a;
}
function T$(t, n) {
  for (var a = 0; a < t.length; a++)
    if (n(t[a]))
      return a;
}
function xe(t) {
  return function(n) {
    var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o = n.match(t.matchPattern);
    if (!o)
      return null;
    var l = o[0], d = n.match(t.parsePattern);
    if (!d)
      return null;
    var m = t.valueCallback ? t.valueCallback(d[0]) : d[0];
    m = a.valueCallback ? a.valueCallback(m) : m;
    var b = n.slice(l.length);
    return {
      value: m,
      rest: b
    };
  };
}
var k$ = /^(第\s*)?\d+(日|时|分|秒)?/i, S$ = /\d+/i, C$ = {
  narrow: /^(前)/i,
  abbreviated: /^(前)/i,
  wide: /^(公元前|公元)/i
}, D$ = {
  any: [/^(前)/i, /^(公元)/i]
}, W$ = {
  narrow: /^[1234]/i,
  abbreviated: /^第[一二三四]刻/i,
  wide: /^第[一二三四]刻钟/i
}, x$ = {
  any: [/(1|一)/i, /(2|二)/i, /(3|三)/i, /(4|四)/i]
}, O$ = {
  narrow: /^(一|二|三|四|五|六|七|八|九|十[二一])/i,
  abbreviated: /^(一|二|三|四|五|六|七|八|九|十[二一]|\d|1[12])月/i,
  wide: /^(一|二|三|四|五|六|七|八|九|十[二一])月/i
}, z$ = {
  narrow: [/^一/i, /^二/i, /^三/i, /^四/i, /^五/i, /^六/i, /^七/i, /^八/i, /^九/i, /^十(?!(一|二))/i, /^十一/i, /^十二/i],
  any: [/^一|1/i, /^二|2/i, /^三|3/i, /^四|4/i, /^五|5/i, /^六|6/i, /^七|7/i, /^八|8/i, /^九|9/i, /^十(?!(一|二))|10/i, /^十一|11/i, /^十二|12/i]
}, E$ = {
  narrow: /^[一二三四五六日]/i,
  short: /^[一二三四五六日]/i,
  abbreviated: /^周[一二三四五六日]/i,
  wide: /^星期[一二三四五六日]/i
}, j$ = {
  any: [/日/i, /一/i, /二/i, /三/i, /四/i, /五/i, /六/i]
}, A$ = {
  any: /^(上午?|下午?|午夜|[中正]午|早上?|下午|晚上?|凌晨|)/i
}, F$ = {
  any: {
    am: /^上午?/i,
    pm: /^下午?/i,
    midnight: /^午夜/i,
    noon: /^[中正]午/i,
    morning: /^早上/i,
    afternoon: /^下午/i,
    evening: /^晚上?/i,
    night: /^凌晨/i
  }
}, I$ = {
  ordinalNumber: xe({
    matchPattern: k$,
    parsePattern: S$,
    valueCallback: function(n) {
      return parseInt(n, 10);
    }
  }),
  era: D({
    matchPatterns: C$,
    defaultMatchWidth: "wide",
    parsePatterns: D$,
    defaultParseWidth: "any"
  }),
  quarter: D({
    matchPatterns: W$,
    defaultMatchWidth: "wide",
    parsePatterns: x$,
    defaultParseWidth: "any",
    valueCallback: function(n) {
      return n + 1;
    }
  }),
  month: D({
    matchPatterns: O$,
    defaultMatchWidth: "wide",
    parsePatterns: z$,
    defaultParseWidth: "any"
  }),
  day: D({
    matchPatterns: E$,
    defaultMatchWidth: "wide",
    parsePatterns: j$,
    defaultParseWidth: "any"
  }),
  dayPeriod: D({
    matchPatterns: A$,
    defaultMatchWidth: "any",
    parsePatterns: F$,
    defaultParseWidth: "any"
  })
};
const N$ = I$;
var H$ = {
  code: "zh-CN",
  formatDistance: a$,
  formatLong: s$,
  formatRelative: h$,
  localize: _$,
  match: N$,
  options: {
    weekStartsOn: 1,
    firstWeekContainsDate: 4
  }
};
const R$ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: H$
}, Symbol.toStringTag, { value: "Module" })), Zm = /* @__PURE__ */ be(R$);
var L$ = H && H.__importDefault || function(t) {
  return t && t.__esModule ? t : { default: t };
};
Object.defineProperty(ju, "__esModule", { value: !0 });
const B$ = L$(Zm), V$ = {
  name: "zh-CN",
  locale: B$.default
};
ju.default = V$;
var Iu = {}, q$ = {
  lessThanXSeconds: {
    one: "少於 1 秒",
    other: "少於 {{count}} 秒"
  },
  xSeconds: {
    one: "1 秒",
    other: "{{count}} 秒"
  },
  halfAMinute: "半分鐘",
  lessThanXMinutes: {
    one: "少於 1 分鐘",
    other: "少於 {{count}} 分鐘"
  },
  xMinutes: {
    one: "1 分鐘",
    other: "{{count}} 分鐘"
  },
  xHours: {
    one: "1 小時",
    other: "{{count}} 小時"
  },
  aboutXHours: {
    one: "大約 1 小時",
    other: "大約 {{count}} 小時"
  },
  xDays: {
    one: "1 天",
    other: "{{count}} 天"
  },
  aboutXWeeks: {
    one: "大約 1 個星期",
    other: "大約 {{count}} 個星期"
  },
  xWeeks: {
    one: "1 個星期",
    other: "{{count}} 個星期"
  },
  aboutXMonths: {
    one: "大約 1 個月",
    other: "大約 {{count}} 個月"
  },
  xMonths: {
    one: "1 個月",
    other: "{{count}} 個月"
  },
  aboutXYears: {
    one: "大約 1 年",
    other: "大約 {{count}} 年"
  },
  xYears: {
    one: "1 年",
    other: "{{count}} 年"
  },
  overXYears: {
    one: "超過 1 年",
    other: "超過 {{count}} 年"
  },
  almostXYears: {
    one: "將近 1 年",
    other: "將近 {{count}} 年"
  }
}, X$ = function(n, a, o) {
  var l, d = q$[n];
  return typeof d == "string" ? l = d : a === 1 ? l = d.one : l = d.other.replace("{{count}}", String(a)), o != null && o.addSuffix ? o.comparison && o.comparison > 0 ? l + "內" : l + "前" : l;
};
const K$ = X$;
var G$ = {
  full: "y'年'M'月'd'日' EEEE",
  long: "y'年'M'月'd'日'",
  medium: "yyyy-MM-dd",
  short: "yy-MM-dd"
}, U$ = {
  full: "zzzz a h:mm:ss",
  long: "z a h:mm:ss",
  medium: "a h:mm:ss",
  short: "a h:mm"
}, Y$ = {
  full: "{{date}} {{time}}",
  long: "{{date}} {{time}}",
  medium: "{{date}} {{time}}",
  short: "{{date}} {{time}}"
}, Z$ = {
  date: L({
    formats: G$,
    defaultWidth: "full"
  }),
  time: L({
    formats: U$,
    defaultWidth: "full"
  }),
  dateTime: L({
    formats: Y$,
    defaultWidth: "full"
  })
};
const J$ = Z$;
var Q$ = {
  lastWeek: "'上個'eeee p",
  yesterday: "'昨天' p",
  today: "'今天' p",
  tomorrow: "'明天' p",
  nextWeek: "'下個'eeee p",
  other: "P"
}, eT = function(n, a, o, l) {
  return Q$[n];
};
const tT = eT;
var rT = {
  narrow: ["前", "公元"],
  abbreviated: ["前", "公元"],
  wide: ["公元前", "公元"]
}, nT = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["第一刻", "第二刻", "第三刻", "第四刻"],
  wide: ["第一刻鐘", "第二刻鐘", "第三刻鐘", "第四刻鐘"]
}, aT = {
  narrow: ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二"],
  abbreviated: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
  wide: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"]
}, iT = {
  narrow: ["日", "一", "二", "三", "四", "五", "六"],
  short: ["日", "一", "二", "三", "四", "五", "六"],
  abbreviated: ["週日", "週一", "週二", "週三", "週四", "週五", "週六"],
  wide: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]
}, oT = {
  narrow: {
    am: "上",
    pm: "下",
    midnight: "凌晨",
    noon: "午",
    morning: "早",
    afternoon: "下午",
    evening: "晚",
    night: "夜"
  },
  abbreviated: {
    am: "上午",
    pm: "下午",
    midnight: "凌晨",
    noon: "中午",
    morning: "早晨",
    afternoon: "中午",
    evening: "晚上",
    night: "夜間"
  },
  wide: {
    am: "上午",
    pm: "下午",
    midnight: "凌晨",
    noon: "中午",
    morning: "早晨",
    afternoon: "中午",
    evening: "晚上",
    night: "夜間"
  }
}, lT = {
  narrow: {
    am: "上",
    pm: "下",
    midnight: "凌晨",
    noon: "午",
    morning: "早",
    afternoon: "下午",
    evening: "晚",
    night: "夜"
  },
  abbreviated: {
    am: "上午",
    pm: "下午",
    midnight: "凌晨",
    noon: "中午",
    morning: "早晨",
    afternoon: "中午",
    evening: "晚上",
    night: "夜間"
  },
  wide: {
    am: "上午",
    pm: "下午",
    midnight: "凌晨",
    noon: "中午",
    morning: "早晨",
    afternoon: "中午",
    evening: "晚上",
    night: "夜間"
  }
}, uT = function(n, a) {
  var o = Number(n);
  switch (a == null ? void 0 : a.unit) {
    case "date":
      return o + "日";
    case "hour":
      return o + "時";
    case "minute":
      return o + "分";
    case "second":
      return o + "秒";
    default:
      return "第 " + o;
  }
}, sT = {
  ordinalNumber: uT,
  era: C({
    values: rT,
    defaultWidth: "wide"
  }),
  quarter: C({
    values: nT,
    defaultWidth: "wide",
    argumentCallback: function(n) {
      return n - 1;
    }
  }),
  month: C({
    values: aT,
    defaultWidth: "wide"
  }),
  day: C({
    values: iT,
    defaultWidth: "wide"
  }),
  dayPeriod: C({
    values: oT,
    defaultWidth: "wide",
    formattingValues: lT,
    defaultFormattingWidth: "wide"
  })
};
const dT = sT;
var cT = /^(第\s*)?\d+(日|時|分|秒)?/i, fT = /\d+/i, mT = {
  narrow: /^(前)/i,
  abbreviated: /^(前)/i,
  wide: /^(公元前|公元)/i
}, hT = {
  any: [/^(前)/i, /^(公元)/i]
}, vT = {
  narrow: /^[1234]/i,
  abbreviated: /^第[一二三四]刻/i,
  wide: /^第[一二三四]刻鐘/i
}, pT = {
  any: [/(1|一)/i, /(2|二)/i, /(3|三)/i, /(4|四)/i]
}, gT = {
  narrow: /^(一|二|三|四|五|六|七|八|九|十[二一])/i,
  abbreviated: /^(一|二|三|四|五|六|七|八|九|十[二一]|\d|1[12])月/i,
  wide: /^(一|二|三|四|五|六|七|八|九|十[二一])月/i
}, yT = {
  narrow: [/^一/i, /^二/i, /^三/i, /^四/i, /^五/i, /^六/i, /^七/i, /^八/i, /^九/i, /^十(?!(一|二))/i, /^十一/i, /^十二/i],
  any: [/^一|1/i, /^二|2/i, /^三|3/i, /^四|4/i, /^五|5/i, /^六|6/i, /^七|7/i, /^八|8/i, /^九|9/i, /^十(?!(一|二))|10/i, /^十一|11/i, /^十二|12/i]
}, bT = {
  narrow: /^[一二三四五六日]/i,
  short: /^[一二三四五六日]/i,
  abbreviated: /^週[一二三四五六日]/i,
  wide: /^星期[一二三四五六日]/i
}, wT = {
  any: [/日/i, /一/i, /二/i, /三/i, /四/i, /五/i, /六/i]
}, PT = {
  any: /^(上午?|下午?|午夜|[中正]午|早上?|下午|晚上?|凌晨)/i
}, MT = {
  any: {
    am: /^上午?/i,
    pm: /^下午?/i,
    midnight: /^午夜/i,
    noon: /^[中正]午/i,
    morning: /^早上/i,
    afternoon: /^下午/i,
    evening: /^晚上?/i,
    night: /^凌晨/i
  }
}, _T = {
  ordinalNumber: xe({
    matchPattern: cT,
    parsePattern: fT,
    valueCallback: function(n) {
      return parseInt(n, 10);
    }
  }),
  era: D({
    matchPatterns: mT,
    defaultMatchWidth: "wide",
    parsePatterns: hT,
    defaultParseWidth: "any"
  }),
  quarter: D({
    matchPatterns: vT,
    defaultMatchWidth: "wide",
    parsePatterns: pT,
    defaultParseWidth: "any",
    valueCallback: function(n) {
      return n + 1;
    }
  }),
  month: D({
    matchPatterns: gT,
    defaultMatchWidth: "wide",
    parsePatterns: yT,
    defaultParseWidth: "any"
  }),
  day: D({
    matchPatterns: bT,
    defaultMatchWidth: "wide",
    parsePatterns: wT,
    defaultParseWidth: "any"
  }),
  dayPeriod: D({
    matchPatterns: PT,
    defaultMatchWidth: "any",
    parsePatterns: MT,
    defaultParseWidth: "any"
  })
};
const $T = _T;
var TT = {
  code: "zh-TW",
  formatDistance: K$,
  formatLong: J$,
  formatRelative: tT,
  localize: dT,
  match: $T,
  options: {
    weekStartsOn: 1,
    firstWeekContainsDate: 4
  }
};
const kT = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: TT
}, Symbol.toStringTag, { value: "Module" })), ST = /* @__PURE__ */ be(kT);
var CT = H && H.__importDefault || function(t) {
  return t && t.__esModule ? t : { default: t };
};
Object.defineProperty(Iu, "__esModule", { value: !0 });
const DT = CT(ST), WT = {
  name: "zh-TW",
  locale: DT.default
};
Iu.default = WT;
var Nu = {}, xT = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
}, OT = function(n, a, o) {
  var l, d = xT[n];
  return typeof d == "string" ? l = d : a === 1 ? l = d.one : l = d.other.replace("{{count}}", a.toString()), o != null && o.addSuffix ? o.comparison && o.comparison > 0 ? "in " + l : l + " ago" : l;
};
const Jm = OT;
var zT = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, ET = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, jT = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, AT = {
  date: L({
    formats: zT,
    defaultWidth: "full"
  }),
  time: L({
    formats: ET,
    defaultWidth: "full"
  }),
  dateTime: L({
    formats: jT,
    defaultWidth: "full"
  })
};
const FT = AT;
var IT = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, NT = function(n, a, o, l) {
  return IT[n];
};
const Qm = NT;
var HT = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, RT = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, LT = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
}, BT = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
}, VT = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
}, qT = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
}, XT = function(n, a) {
  var o = Number(n), l = o % 100;
  if (l > 20 || l < 10)
    switch (l % 10) {
      case 1:
        return o + "st";
      case 2:
        return o + "nd";
      case 3:
        return o + "rd";
    }
  return o + "th";
}, KT = {
  ordinalNumber: XT,
  era: C({
    values: HT,
    defaultWidth: "wide"
  }),
  quarter: C({
    values: RT,
    defaultWidth: "wide",
    argumentCallback: function(n) {
      return n - 1;
    }
  }),
  month: C({
    values: LT,
    defaultWidth: "wide"
  }),
  day: C({
    values: BT,
    defaultWidth: "wide"
  }),
  dayPeriod: C({
    values: VT,
    defaultWidth: "wide",
    formattingValues: qT,
    defaultFormattingWidth: "wide"
  })
};
const eh = KT;
var GT = /^(\d+)(th|st|nd|rd)?/i, UT = /\d+/i, YT = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, ZT = {
  any: [/^b/i, /^(a|c)/i]
}, JT = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, QT = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, ek = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, tk = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
}, rk = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, nk = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, ak = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, ik = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
}, ok = {
  ordinalNumber: xe({
    matchPattern: GT,
    parsePattern: UT,
    valueCallback: function(n) {
      return parseInt(n, 10);
    }
  }),
  era: D({
    matchPatterns: YT,
    defaultMatchWidth: "wide",
    parsePatterns: ZT,
    defaultParseWidth: "any"
  }),
  quarter: D({
    matchPatterns: JT,
    defaultMatchWidth: "wide",
    parsePatterns: QT,
    defaultParseWidth: "any",
    valueCallback: function(n) {
      return n + 1;
    }
  }),
  month: D({
    matchPatterns: ek,
    defaultMatchWidth: "wide",
    parsePatterns: tk,
    defaultParseWidth: "any"
  }),
  day: D({
    matchPatterns: rk,
    defaultMatchWidth: "wide",
    parsePatterns: nk,
    defaultParseWidth: "any"
  }),
  dayPeriod: D({
    matchPatterns: ak,
    defaultMatchWidth: "any",
    parsePatterns: ik,
    defaultParseWidth: "any"
  })
};
const th = ok;
var lk = {
  code: "en-US",
  formatDistance: Jm,
  formatLong: FT,
  formatRelative: Qm,
  localize: eh,
  match: th,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
const uk = lk, sk = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: uk
}, Symbol.toStringTag, { value: "Module" })), dk = /* @__PURE__ */ be(sk);
var ck = H && H.__importDefault || function(t) {
  return t && t.__esModule ? t : { default: t };
};
Object.defineProperty(Nu, "__esModule", { value: !0 });
const fk = ck(dk), mk = {
  name: "en-US",
  locale: fk.default
};
Nu.default = mk;
var Hu = {};
function Hn(t, n) {
  if (t.one !== void 0 && n === 1)
    return t.one;
  var a = n % 10, o = n % 100;
  return a === 1 && o !== 11 ? t.singularNominative.replace("{{count}}", String(n)) : a >= 2 && a <= 4 && (o < 10 || o > 20) ? t.singularGenitive.replace("{{count}}", String(n)) : t.pluralGenitive.replace("{{count}}", String(n));
}
function Ue(t) {
  return function(n, a) {
    return a != null && a.addSuffix ? a.comparison && a.comparison > 0 ? t.future ? Hn(t.future, n) : "через " + Hn(t.regular, n) : t.past ? Hn(t.past, n) : Hn(t.regular, n) + " назад" : Hn(t.regular, n);
  };
}
var hk = {
  lessThanXSeconds: Ue({
    regular: {
      one: "меньше секунды",
      singularNominative: "меньше {{count}} секунды",
      singularGenitive: "меньше {{count}} секунд",
      pluralGenitive: "меньше {{count}} секунд"
    },
    future: {
      one: "меньше, чем через секунду",
      singularNominative: "меньше, чем через {{count}} секунду",
      singularGenitive: "меньше, чем через {{count}} секунды",
      pluralGenitive: "меньше, чем через {{count}} секунд"
    }
  }),
  xSeconds: Ue({
    regular: {
      singularNominative: "{{count}} секунда",
      singularGenitive: "{{count}} секунды",
      pluralGenitive: "{{count}} секунд"
    },
    past: {
      singularNominative: "{{count}} секунду назад",
      singularGenitive: "{{count}} секунды назад",
      pluralGenitive: "{{count}} секунд назад"
    },
    future: {
      singularNominative: "через {{count}} секунду",
      singularGenitive: "через {{count}} секунды",
      pluralGenitive: "через {{count}} секунд"
    }
  }),
  halfAMinute: function(n, a) {
    return a != null && a.addSuffix ? a.comparison && a.comparison > 0 ? "через полминуты" : "полминуты назад" : "полминуты";
  },
  lessThanXMinutes: Ue({
    regular: {
      one: "меньше минуты",
      singularNominative: "меньше {{count}} минуты",
      singularGenitive: "меньше {{count}} минут",
      pluralGenitive: "меньше {{count}} минут"
    },
    future: {
      one: "меньше, чем через минуту",
      singularNominative: "меньше, чем через {{count}} минуту",
      singularGenitive: "меньше, чем через {{count}} минуты",
      pluralGenitive: "меньше, чем через {{count}} минут"
    }
  }),
  xMinutes: Ue({
    regular: {
      singularNominative: "{{count}} минута",
      singularGenitive: "{{count}} минуты",
      pluralGenitive: "{{count}} минут"
    },
    past: {
      singularNominative: "{{count}} минуту назад",
      singularGenitive: "{{count}} минуты назад",
      pluralGenitive: "{{count}} минут назад"
    },
    future: {
      singularNominative: "через {{count}} минуту",
      singularGenitive: "через {{count}} минуты",
      pluralGenitive: "через {{count}} минут"
    }
  }),
  aboutXHours: Ue({
    regular: {
      singularNominative: "около {{count}} часа",
      singularGenitive: "около {{count}} часов",
      pluralGenitive: "около {{count}} часов"
    },
    future: {
      singularNominative: "приблизительно через {{count}} час",
      singularGenitive: "приблизительно через {{count}} часа",
      pluralGenitive: "приблизительно через {{count}} часов"
    }
  }),
  xHours: Ue({
    regular: {
      singularNominative: "{{count}} час",
      singularGenitive: "{{count}} часа",
      pluralGenitive: "{{count}} часов"
    }
  }),
  xDays: Ue({
    regular: {
      singularNominative: "{{count}} день",
      singularGenitive: "{{count}} дня",
      pluralGenitive: "{{count}} дней"
    }
  }),
  aboutXWeeks: Ue({
    regular: {
      singularNominative: "около {{count}} недели",
      singularGenitive: "около {{count}} недель",
      pluralGenitive: "около {{count}} недель"
    },
    future: {
      singularNominative: "приблизительно через {{count}} неделю",
      singularGenitive: "приблизительно через {{count}} недели",
      pluralGenitive: "приблизительно через {{count}} недель"
    }
  }),
  xWeeks: Ue({
    regular: {
      singularNominative: "{{count}} неделя",
      singularGenitive: "{{count}} недели",
      pluralGenitive: "{{count}} недель"
    }
  }),
  aboutXMonths: Ue({
    regular: {
      singularNominative: "около {{count}} месяца",
      singularGenitive: "около {{count}} месяцев",
      pluralGenitive: "около {{count}} месяцев"
    },
    future: {
      singularNominative: "приблизительно через {{count}} месяц",
      singularGenitive: "приблизительно через {{count}} месяца",
      pluralGenitive: "приблизительно через {{count}} месяцев"
    }
  }),
  xMonths: Ue({
    regular: {
      singularNominative: "{{count}} месяц",
      singularGenitive: "{{count}} месяца",
      pluralGenitive: "{{count}} месяцев"
    }
  }),
  aboutXYears: Ue({
    regular: {
      singularNominative: "около {{count}} года",
      singularGenitive: "около {{count}} лет",
      pluralGenitive: "около {{count}} лет"
    },
    future: {
      singularNominative: "приблизительно через {{count}} год",
      singularGenitive: "приблизительно через {{count}} года",
      pluralGenitive: "приблизительно через {{count}} лет"
    }
  }),
  xYears: Ue({
    regular: {
      singularNominative: "{{count}} год",
      singularGenitive: "{{count}} года",
      pluralGenitive: "{{count}} лет"
    }
  }),
  overXYears: Ue({
    regular: {
      singularNominative: "больше {{count}} года",
      singularGenitive: "больше {{count}} лет",
      pluralGenitive: "больше {{count}} лет"
    },
    future: {
      singularNominative: "больше, чем через {{count}} год",
      singularGenitive: "больше, чем через {{count}} года",
      pluralGenitive: "больше, чем через {{count}} лет"
    }
  }),
  almostXYears: Ue({
    regular: {
      singularNominative: "почти {{count}} год",
      singularGenitive: "почти {{count}} года",
      pluralGenitive: "почти {{count}} лет"
    },
    future: {
      singularNominative: "почти через {{count}} год",
      singularGenitive: "почти через {{count}} года",
      pluralGenitive: "почти через {{count}} лет"
    }
  })
}, vk = function(n, a, o) {
  return hk[n](a, o);
};
const pk = vk;
var gk = {
  full: "EEEE, d MMMM y 'г.'",
  long: "d MMMM y 'г.'",
  medium: "d MMM y 'г.'",
  short: "dd.MM.y"
}, yk = {
  full: "H:mm:ss zzzz",
  long: "H:mm:ss z",
  medium: "H:mm:ss",
  short: "H:mm"
}, bk = {
  any: "{{date}}, {{time}}"
}, wk = {
  date: L({
    formats: gk,
    defaultWidth: "full"
  }),
  time: L({
    formats: yk,
    defaultWidth: "full"
  }),
  dateTime: L({
    formats: bk,
    defaultWidth: "any"
  })
};
const Pk = wk;
var Ru = ["воскресенье", "понедельник", "вторник", "среду", "четверг", "пятницу", "субботу"];
function Mk(t) {
  var n = Ru[t];
  switch (t) {
    case 0:
      return "'в прошлое " + n + " в' p";
    case 1:
    case 2:
    case 4:
      return "'в прошлый " + n + " в' p";
    case 3:
    case 5:
    case 6:
      return "'в прошлую " + n + " в' p";
  }
}
function Bf(t) {
  var n = Ru[t];
  return t === 2 ? "'во " + n + " в' p" : "'в " + n + " в' p";
}
function _k(t) {
  var n = Ru[t];
  switch (t) {
    case 0:
      return "'в следующее " + n + " в' p";
    case 1:
    case 2:
    case 4:
      return "'в следующий " + n + " в' p";
    case 3:
    case 5:
    case 6:
      return "'в следующую " + n + " в' p";
  }
}
var $k = {
  lastWeek: function(n, a, o) {
    var l = n.getUTCDay();
    return Ht(n, a, o) ? Bf(l) : Mk(l);
  },
  yesterday: "'вчера в' p",
  today: "'сегодня в' p",
  tomorrow: "'завтра в' p",
  nextWeek: function(n, a, o) {
    var l = n.getUTCDay();
    return Ht(n, a, o) ? Bf(l) : _k(l);
  },
  other: "P"
}, Tk = function(n, a, o, l) {
  var d = $k[n];
  return typeof d == "function" ? d(a, o, l) : d;
};
const kk = Tk;
var Sk = {
  narrow: ["до н.э.", "н.э."],
  abbreviated: ["до н. э.", "н. э."],
  wide: ["до нашей эры", "нашей эры"]
}, Ck = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["1-й кв.", "2-й кв.", "3-й кв.", "4-й кв."],
  wide: ["1-й квартал", "2-й квартал", "3-й квартал", "4-й квартал"]
}, Dk = {
  narrow: ["Я", "Ф", "М", "А", "М", "И", "И", "А", "С", "О", "Н", "Д"],
  abbreviated: ["янв.", "фев.", "март", "апр.", "май", "июнь", "июль", "авг.", "сент.", "окт.", "нояб.", "дек."],
  wide: ["январь", "февраль", "март", "апрель", "май", "июнь", "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь"]
}, Wk = {
  narrow: ["Я", "Ф", "М", "А", "М", "И", "И", "А", "С", "О", "Н", "Д"],
  abbreviated: ["янв.", "фев.", "мар.", "апр.", "мая", "июн.", "июл.", "авг.", "сент.", "окт.", "нояб.", "дек."],
  wide: ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"]
}, xk = {
  narrow: ["В", "П", "В", "С", "Ч", "П", "С"],
  short: ["вс", "пн", "вт", "ср", "чт", "пт", "сб"],
  abbreviated: ["вск", "пнд", "втр", "срд", "чтв", "птн", "суб"],
  wide: ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"]
}, Ok = {
  narrow: {
    am: "ДП",
    pm: "ПП",
    midnight: "полн.",
    noon: "полд.",
    morning: "утро",
    afternoon: "день",
    evening: "веч.",
    night: "ночь"
  },
  abbreviated: {
    am: "ДП",
    pm: "ПП",
    midnight: "полн.",
    noon: "полд.",
    morning: "утро",
    afternoon: "день",
    evening: "веч.",
    night: "ночь"
  },
  wide: {
    am: "ДП",
    pm: "ПП",
    midnight: "полночь",
    noon: "полдень",
    morning: "утро",
    afternoon: "день",
    evening: "вечер",
    night: "ночь"
  }
}, zk = {
  narrow: {
    am: "ДП",
    pm: "ПП",
    midnight: "полн.",
    noon: "полд.",
    morning: "утра",
    afternoon: "дня",
    evening: "веч.",
    night: "ночи"
  },
  abbreviated: {
    am: "ДП",
    pm: "ПП",
    midnight: "полн.",
    noon: "полд.",
    morning: "утра",
    afternoon: "дня",
    evening: "веч.",
    night: "ночи"
  },
  wide: {
    am: "ДП",
    pm: "ПП",
    midnight: "полночь",
    noon: "полдень",
    morning: "утра",
    afternoon: "дня",
    evening: "вечера",
    night: "ночи"
  }
}, Ek = function(n, a) {
  var o = Number(n), l = a == null ? void 0 : a.unit, d;
  return l === "date" ? d = "-е" : l === "week" || l === "minute" || l === "second" ? d = "-я" : d = "-й", o + d;
}, jk = {
  ordinalNumber: Ek,
  era: C({
    values: Sk,
    defaultWidth: "wide"
  }),
  quarter: C({
    values: Ck,
    defaultWidth: "wide",
    argumentCallback: function(n) {
      return n - 1;
    }
  }),
  month: C({
    values: Dk,
    defaultWidth: "wide",
    formattingValues: Wk,
    defaultFormattingWidth: "wide"
  }),
  day: C({
    values: xk,
    defaultWidth: "wide"
  }),
  dayPeriod: C({
    values: Ok,
    defaultWidth: "any",
    formattingValues: zk,
    defaultFormattingWidth: "wide"
  })
};
const Ak = jk;
var Fk = /^(\d+)(-?(е|я|й|ое|ье|ая|ья|ый|ой|ий|ый))?/i, Ik = /\d+/i, Nk = {
  narrow: /^((до )?н\.?\s?э\.?)/i,
  abbreviated: /^((до )?н\.?\s?э\.?)/i,
  wide: /^(до нашей эры|нашей эры|наша эра)/i
}, Hk = {
  any: [/^д/i, /^н/i]
}, Rk = {
  narrow: /^[1234]/i,
  abbreviated: /^[1234](-?[ыои]?й?)? кв.?/i,
  wide: /^[1234](-?[ыои]?й?)? квартал/i
}, Lk = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Bk = {
  narrow: /^[яфмаисонд]/i,
  abbreviated: /^(янв|фев|март?|апр|ма[йя]|июн[ья]?|июл[ья]?|авг|сент?|окт|нояб?|дек)\.?/i,
  wide: /^(январ[ья]|феврал[ья]|марта?|апрел[ья]|ма[йя]|июн[ья]|июл[ья]|августа?|сентябр[ья]|октябр[ья]|октябр[ья]|ноябр[ья]|декабр[ья])/i
}, Vk = {
  narrow: [/^я/i, /^ф/i, /^м/i, /^а/i, /^м/i, /^и/i, /^и/i, /^а/i, /^с/i, /^о/i, /^н/i, /^я/i],
  any: [/^я/i, /^ф/i, /^мар/i, /^ап/i, /^ма[йя]/i, /^июн/i, /^июл/i, /^ав/i, /^с/i, /^о/i, /^н/i, /^д/i]
}, qk = {
  narrow: /^[впсч]/i,
  short: /^(вс|во|пн|по|вт|ср|чт|че|пт|пя|сб|су)\.?/i,
  abbreviated: /^(вск|вос|пнд|пон|втр|вто|срд|сре|чтв|чет|птн|пят|суб).?/i,
  wide: /^(воскресень[ея]|понедельника?|вторника?|сред[аы]|четверга?|пятниц[аы]|суббот[аы])/i
}, Xk = {
  narrow: [/^в/i, /^п/i, /^в/i, /^с/i, /^ч/i, /^п/i, /^с/i],
  any: [/^в[ос]/i, /^п[он]/i, /^в/i, /^ср/i, /^ч/i, /^п[ят]/i, /^с[уб]/i]
}, Kk = {
  narrow: /^([дп]п|полн\.?|полд\.?|утр[оа]|день|дня|веч\.?|ноч[ьи])/i,
  abbreviated: /^([дп]п|полн\.?|полд\.?|утр[оа]|день|дня|веч\.?|ноч[ьи])/i,
  wide: /^([дп]п|полночь|полдень|утр[оа]|день|дня|вечера?|ноч[ьи])/i
}, Gk = {
  any: {
    am: /^дп/i,
    pm: /^пп/i,
    midnight: /^полн/i,
    noon: /^полд/i,
    morning: /^у/i,
    afternoon: /^д[ен]/i,
    evening: /^в/i,
    night: /^н/i
  }
}, Uk = {
  ordinalNumber: xe({
    matchPattern: Fk,
    parsePattern: Ik,
    valueCallback: function(n) {
      return parseInt(n, 10);
    }
  }),
  era: D({
    matchPatterns: Nk,
    defaultMatchWidth: "wide",
    parsePatterns: Hk,
    defaultParseWidth: "any"
  }),
  quarter: D({
    matchPatterns: Rk,
    defaultMatchWidth: "wide",
    parsePatterns: Lk,
    defaultParseWidth: "any",
    valueCallback: function(n) {
      return n + 1;
    }
  }),
  month: D({
    matchPatterns: Bk,
    defaultMatchWidth: "wide",
    parsePatterns: Vk,
    defaultParseWidth: "any"
  }),
  day: D({
    matchPatterns: qk,
    defaultMatchWidth: "wide",
    parsePatterns: Xk,
    defaultParseWidth: "any"
  }),
  dayPeriod: D({
    matchPatterns: Kk,
    defaultMatchWidth: "wide",
    parsePatterns: Gk,
    defaultParseWidth: "any"
  })
};
const Yk = Uk;
var Zk = {
  code: "ru",
  formatDistance: pk,
  formatLong: Pk,
  formatRelative: kk,
  localize: Ak,
  match: Yk,
  options: {
    weekStartsOn: 1,
    firstWeekContainsDate: 1
  }
};
const Jk = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Zk
}, Symbol.toStringTag, { value: "Module" })), Qk = /* @__PURE__ */ be(Jk);
var eS = H && H.__importDefault || function(t) {
  return t && t.__esModule ? t : { default: t };
};
Object.defineProperty(Hu, "__esModule", { value: !0 });
const tS = eS(Qk), rS = {
  name: "ru-RU",
  locale: tS.default
};
Hu.default = rS;
var Lu = {};
function Rn(t, n) {
  if (t.one !== void 0 && n === 1)
    return t.one;
  var a = n % 10, o = n % 100;
  return a === 1 && o !== 11 ? t.singularNominative.replace("{{count}}", String(n)) : a >= 2 && a <= 4 && (o < 10 || o > 20) ? t.singularGenitive.replace("{{count}}", String(n)) : t.pluralGenitive.replace("{{count}}", String(n));
}
function Ye(t) {
  return function(n, a) {
    return a && a.addSuffix ? a.comparison && a.comparison > 0 ? t.future ? Rn(t.future, n) : "за " + Rn(t.regular, n) : t.past ? Rn(t.past, n) : Rn(t.regular, n) + " тому" : Rn(t.regular, n);
  };
}
var nS = function(n, a) {
  return a && a.addSuffix ? a.comparison && a.comparison > 0 ? "за півхвилини" : "півхвилини тому" : "півхвилини";
}, aS = {
  lessThanXSeconds: Ye({
    regular: {
      one: "менше секунди",
      singularNominative: "менше {{count}} секунди",
      singularGenitive: "менше {{count}} секунд",
      pluralGenitive: "менше {{count}} секунд"
    },
    future: {
      one: "менше, ніж за секунду",
      singularNominative: "менше, ніж за {{count}} секунду",
      singularGenitive: "менше, ніж за {{count}} секунди",
      pluralGenitive: "менше, ніж за {{count}} секунд"
    }
  }),
  xSeconds: Ye({
    regular: {
      singularNominative: "{{count}} секунда",
      singularGenitive: "{{count}} секунди",
      pluralGenitive: "{{count}} секунд"
    },
    past: {
      singularNominative: "{{count}} секунду тому",
      singularGenitive: "{{count}} секунди тому",
      pluralGenitive: "{{count}} секунд тому"
    },
    future: {
      singularNominative: "за {{count}} секунду",
      singularGenitive: "за {{count}} секунди",
      pluralGenitive: "за {{count}} секунд"
    }
  }),
  halfAMinute: nS,
  lessThanXMinutes: Ye({
    regular: {
      one: "менше хвилини",
      singularNominative: "менше {{count}} хвилини",
      singularGenitive: "менше {{count}} хвилин",
      pluralGenitive: "менше {{count}} хвилин"
    },
    future: {
      one: "менше, ніж за хвилину",
      singularNominative: "менше, ніж за {{count}} хвилину",
      singularGenitive: "менше, ніж за {{count}} хвилини",
      pluralGenitive: "менше, ніж за {{count}} хвилин"
    }
  }),
  xMinutes: Ye({
    regular: {
      singularNominative: "{{count}} хвилина",
      singularGenitive: "{{count}} хвилини",
      pluralGenitive: "{{count}} хвилин"
    },
    past: {
      singularNominative: "{{count}} хвилину тому",
      singularGenitive: "{{count}} хвилини тому",
      pluralGenitive: "{{count}} хвилин тому"
    },
    future: {
      singularNominative: "за {{count}} хвилину",
      singularGenitive: "за {{count}} хвилини",
      pluralGenitive: "за {{count}} хвилин"
    }
  }),
  aboutXHours: Ye({
    regular: {
      singularNominative: "близько {{count}} години",
      singularGenitive: "близько {{count}} годин",
      pluralGenitive: "близько {{count}} годин"
    },
    future: {
      singularNominative: "приблизно за {{count}} годину",
      singularGenitive: "приблизно за {{count}} години",
      pluralGenitive: "приблизно за {{count}} годин"
    }
  }),
  xHours: Ye({
    regular: {
      singularNominative: "{{count}} годину",
      singularGenitive: "{{count}} години",
      pluralGenitive: "{{count}} годин"
    }
  }),
  xDays: Ye({
    regular: {
      singularNominative: "{{count}} день",
      singularGenitive: "{{count}} днi",
      pluralGenitive: "{{count}} днів"
    }
  }),
  aboutXWeeks: Ye({
    regular: {
      singularNominative: "близько {{count}} тижня",
      singularGenitive: "близько {{count}} тижнів",
      pluralGenitive: "близько {{count}} тижнів"
    },
    future: {
      singularNominative: "приблизно за {{count}} тиждень",
      singularGenitive: "приблизно за {{count}} тижні",
      pluralGenitive: "приблизно за {{count}} тижнів"
    }
  }),
  xWeeks: Ye({
    regular: {
      singularNominative: "{{count}} тиждень",
      singularGenitive: "{{count}} тижні",
      pluralGenitive: "{{count}} тижнів"
    }
  }),
  aboutXMonths: Ye({
    regular: {
      singularNominative: "близько {{count}} місяця",
      singularGenitive: "близько {{count}} місяців",
      pluralGenitive: "близько {{count}} місяців"
    },
    future: {
      singularNominative: "приблизно за {{count}} місяць",
      singularGenitive: "приблизно за {{count}} місяці",
      pluralGenitive: "приблизно за {{count}} місяців"
    }
  }),
  xMonths: Ye({
    regular: {
      singularNominative: "{{count}} місяць",
      singularGenitive: "{{count}} місяці",
      pluralGenitive: "{{count}} місяців"
    }
  }),
  aboutXYears: Ye({
    regular: {
      singularNominative: "близько {{count}} року",
      singularGenitive: "близько {{count}} років",
      pluralGenitive: "близько {{count}} років"
    },
    future: {
      singularNominative: "приблизно за {{count}} рік",
      singularGenitive: "приблизно за {{count}} роки",
      pluralGenitive: "приблизно за {{count}} років"
    }
  }),
  xYears: Ye({
    regular: {
      singularNominative: "{{count}} рік",
      singularGenitive: "{{count}} роки",
      pluralGenitive: "{{count}} років"
    }
  }),
  overXYears: Ye({
    regular: {
      singularNominative: "більше {{count}} року",
      singularGenitive: "більше {{count}} років",
      pluralGenitive: "більше {{count}} років"
    },
    future: {
      singularNominative: "більше, ніж за {{count}} рік",
      singularGenitive: "більше, ніж за {{count}} роки",
      pluralGenitive: "більше, ніж за {{count}} років"
    }
  }),
  almostXYears: Ye({
    regular: {
      singularNominative: "майже {{count}} рік",
      singularGenitive: "майже {{count}} роки",
      pluralGenitive: "майже {{count}} років"
    },
    future: {
      singularNominative: "майже за {{count}} рік",
      singularGenitive: "майже за {{count}} роки",
      pluralGenitive: "майже за {{count}} років"
    }
  })
}, iS = function(n, a, o) {
  return o = o || {}, aS[n](a, o);
};
const oS = iS;
var lS = {
  full: "EEEE, do MMMM y 'р.'",
  long: "do MMMM y 'р.'",
  medium: "d MMM y 'р.'",
  short: "dd.MM.y"
}, uS = {
  full: "H:mm:ss zzzz",
  long: "H:mm:ss z",
  medium: "H:mm:ss",
  short: "H:mm"
}, sS = {
  full: "{{date}} 'о' {{time}}",
  long: "{{date}} 'о' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, dS = {
  date: L({
    formats: lS,
    defaultWidth: "full"
  }),
  time: L({
    formats: uS,
    defaultWidth: "full"
  }),
  dateTime: L({
    formats: sS,
    defaultWidth: "full"
  })
};
const cS = dS;
var Bu = ["неділю", "понеділок", "вівторок", "середу", "четвер", "п’ятницю", "суботу"];
function fS(t) {
  var n = Bu[t];
  switch (t) {
    case 0:
    case 3:
    case 5:
    case 6:
      return "'у минулу " + n + " о' p";
    case 1:
    case 2:
    case 4:
      return "'у минулий " + n + " о' p";
  }
}
function rh(t) {
  var n = Bu[t];
  return "'у " + n + " о' p";
}
function mS(t) {
  var n = Bu[t];
  switch (t) {
    case 0:
    case 3:
    case 5:
    case 6:
      return "'у наступну " + n + " о' p";
    case 1:
    case 2:
    case 4:
      return "'у наступний " + n + " о' p";
  }
}
var hS = function(n, a, o) {
  var l = Fu(n), d = l.getUTCDay();
  return Ht(l, a, o) ? rh(d) : fS(d);
}, vS = function(n, a, o) {
  var l = Fu(n), d = l.getUTCDay();
  return Ht(l, a, o) ? rh(d) : mS(d);
}, pS = {
  lastWeek: hS,
  yesterday: "'вчора о' p",
  today: "'сьогодні о' p",
  tomorrow: "'завтра о' p",
  nextWeek: vS,
  other: "P"
}, gS = function(n, a, o, l) {
  var d = pS[n];
  return typeof d == "function" ? d(a, o, l) : d;
};
const yS = gS;
var bS = {
  narrow: ["до н.е.", "н.е."],
  abbreviated: ["до н. е.", "н. е."],
  wide: ["до нашої ери", "нашої ери"]
}, wS = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["1-й кв.", "2-й кв.", "3-й кв.", "4-й кв."],
  wide: ["1-й квартал", "2-й квартал", "3-й квартал", "4-й квартал"]
}, PS = {
  // ДСТУ 3582:2013
  narrow: ["С", "Л", "Б", "К", "Т", "Ч", "Л", "С", "В", "Ж", "Л", "Г"],
  abbreviated: ["січ.", "лют.", "берез.", "квіт.", "трав.", "черв.", "лип.", "серп.", "верес.", "жовт.", "листоп.", "груд."],
  wide: ["січень", "лютий", "березень", "квітень", "травень", "червень", "липень", "серпень", "вересень", "жовтень", "листопад", "грудень"]
}, MS = {
  narrow: ["С", "Л", "Б", "К", "Т", "Ч", "Л", "С", "В", "Ж", "Л", "Г"],
  abbreviated: ["січ.", "лют.", "берез.", "квіт.", "трав.", "черв.", "лип.", "серп.", "верес.", "жовт.", "листоп.", "груд."],
  wide: ["січня", "лютого", "березня", "квітня", "травня", "червня", "липня", "серпня", "вересня", "жовтня", "листопада", "грудня"]
}, _S = {
  narrow: ["Н", "П", "В", "С", "Ч", "П", "С"],
  short: ["нд", "пн", "вт", "ср", "чт", "пт", "сб"],
  abbreviated: ["нед", "пон", "вів", "сер", "чтв", "птн", "суб"],
  wide: ["неділя", "понеділок", "вівторок", "середа", "четвер", "п’ятниця", "субота"]
}, $S = {
  narrow: {
    am: "ДП",
    pm: "ПП",
    midnight: "півн.",
    noon: "пол.",
    morning: "ранок",
    afternoon: "день",
    evening: "веч.",
    night: "ніч"
  },
  abbreviated: {
    am: "ДП",
    pm: "ПП",
    midnight: "півн.",
    noon: "пол.",
    morning: "ранок",
    afternoon: "день",
    evening: "веч.",
    night: "ніч"
  },
  wide: {
    am: "ДП",
    pm: "ПП",
    midnight: "північ",
    noon: "полудень",
    morning: "ранок",
    afternoon: "день",
    evening: "вечір",
    night: "ніч"
  }
}, TS = {
  narrow: {
    am: "ДП",
    pm: "ПП",
    midnight: "півн.",
    noon: "пол.",
    morning: "ранку",
    afternoon: "дня",
    evening: "веч.",
    night: "ночі"
  },
  abbreviated: {
    am: "ДП",
    pm: "ПП",
    midnight: "півн.",
    noon: "пол.",
    morning: "ранку",
    afternoon: "дня",
    evening: "веч.",
    night: "ночі"
  },
  wide: {
    am: "ДП",
    pm: "ПП",
    midnight: "північ",
    noon: "полудень",
    morning: "ранку",
    afternoon: "дня",
    evening: "веч.",
    night: "ночі"
  }
}, kS = function(n, a) {
  var o = String(a == null ? void 0 : a.unit), l = Number(n), d;
  return o === "date" ? l === 3 || l === 23 ? d = "-є" : d = "-е" : o === "minute" || o === "second" || o === "hour" ? d = "-а" : d = "-й", l + d;
}, SS = {
  ordinalNumber: kS,
  era: C({
    values: bS,
    defaultWidth: "wide"
  }),
  quarter: C({
    values: wS,
    defaultWidth: "wide",
    argumentCallback: function(n) {
      return n - 1;
    }
  }),
  month: C({
    values: PS,
    defaultWidth: "wide",
    formattingValues: MS,
    defaultFormattingWidth: "wide"
  }),
  day: C({
    values: _S,
    defaultWidth: "wide"
  }),
  dayPeriod: C({
    values: $S,
    defaultWidth: "any",
    formattingValues: TS,
    defaultFormattingWidth: "wide"
  })
};
const CS = SS;
var DS = /^(\d+)(-?(е|й|є|а|я))?/i, WS = /\d+/i, xS = {
  narrow: /^((до )?н\.?\s?е\.?)/i,
  abbreviated: /^((до )?н\.?\s?е\.?)/i,
  wide: /^(до нашої ери|нашої ери|наша ера)/i
}, OS = {
  any: [/^д/i, /^н/i]
}, zS = {
  narrow: /^[1234]/i,
  abbreviated: /^[1234](-?[иі]?й?)? кв.?/i,
  wide: /^[1234](-?[иі]?й?)? квартал/i
}, ES = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, jS = {
  narrow: /^[слбктчвжг]/i,
  abbreviated: /^(січ|лют|бер(ез)?|квіт|трав|черв|лип|серп|вер(ес)?|жовт|лис(топ)?|груд)\.?/i,
  wide: /^(січень|січня|лютий|лютого|березень|березня|квітень|квітня|травень|травня|червня|червень|липень|липня|серпень|серпня|вересень|вересня|жовтень|жовтня|листопад[а]?|грудень|грудня)/i
}, AS = {
  narrow: [/^с/i, /^л/i, /^б/i, /^к/i, /^т/i, /^ч/i, /^л/i, /^с/i, /^в/i, /^ж/i, /^л/i, /^г/i],
  any: [/^сі/i, /^лю/i, /^б/i, /^к/i, /^т/i, /^ч/i, /^лип/i, /^се/i, /^в/i, /^ж/i, /^лис/i, /^г/i]
}, FS = {
  narrow: /^[нпвсч]/i,
  short: /^(нд|пн|вт|ср|чт|пт|сб)\.?/i,
  abbreviated: /^(нед|пон|вів|сер|че?тв|птн?|суб)\.?/i,
  wide: /^(неділ[яі]|понеділ[ок][ка]|вівтор[ок][ка]|серед[аи]|четвер(га)?|п\W*?ятниц[яі]|субот[аи])/i
}, IS = {
  narrow: [/^н/i, /^п/i, /^в/i, /^с/i, /^ч/i, /^п/i, /^с/i],
  any: [/^н/i, /^п[он]/i, /^в/i, /^с[ер]/i, /^ч/i, /^п\W*?[ят]/i, /^с[уб]/i]
}, NS = {
  narrow: /^([дп]п|півн\.?|пол\.?|ранок|ранку|день|дня|веч\.?|ніч|ночі)/i,
  abbreviated: /^([дп]п|півн\.?|пол\.?|ранок|ранку|день|дня|веч\.?|ніч|ночі)/i,
  wide: /^([дп]п|північ|полудень|ранок|ранку|день|дня|вечір|вечора|ніч|ночі)/i
}, HS = {
  any: {
    am: /^дп/i,
    pm: /^пп/i,
    midnight: /^півн/i,
    noon: /^пол/i,
    morning: /^р/i,
    afternoon: /^д[ен]/i,
    evening: /^в/i,
    night: /^н/i
  }
}, RS = {
  ordinalNumber: xe({
    matchPattern: DS,
    parsePattern: WS,
    valueCallback: function(n) {
      return parseInt(n, 10);
    }
  }),
  era: D({
    matchPatterns: xS,
    defaultMatchWidth: "wide",
    parsePatterns: OS,
    defaultParseWidth: "any"
  }),
  quarter: D({
    matchPatterns: zS,
    defaultMatchWidth: "wide",
    parsePatterns: ES,
    defaultParseWidth: "any",
    valueCallback: function(n) {
      return n + 1;
    }
  }),
  month: D({
    matchPatterns: jS,
    defaultMatchWidth: "wide",
    parsePatterns: AS,
    defaultParseWidth: "any"
  }),
  day: D({
    matchPatterns: FS,
    defaultMatchWidth: "wide",
    parsePatterns: IS,
    defaultParseWidth: "any"
  }),
  dayPeriod: D({
    matchPatterns: NS,
    defaultMatchWidth: "wide",
    parsePatterns: HS,
    defaultParseWidth: "any"
  })
};
const LS = RS;
var BS = {
  code: "uk",
  formatDistance: oS,
  formatLong: cS,
  formatRelative: yS,
  localize: CS,
  match: LS,
  options: {
    weekStartsOn: 1,
    firstWeekContainsDate: 1
  }
};
const VS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: BS
}, Symbol.toStringTag, { value: "Module" })), qS = /* @__PURE__ */ be(VS);
var XS = H && H.__importDefault || function(t) {
  return t && t.__esModule ? t : { default: t };
};
Object.defineProperty(Lu, "__esModule", { value: !0 });
const KS = XS(qS), GS = {
  name: "uk-UA",
  locale: KS.default
};
Lu.default = GS;
var Vu = {}, US = {
  lessThanXSeconds: {
    one: "1秒未満",
    other: "{{count}}秒未満",
    oneWithSuffix: "約1秒",
    otherWithSuffix: "約{{count}}秒"
  },
  xSeconds: {
    one: "1秒",
    other: "{{count}}秒"
  },
  halfAMinute: "30秒",
  lessThanXMinutes: {
    one: "1分未満",
    other: "{{count}}分未満",
    oneWithSuffix: "約1分",
    otherWithSuffix: "約{{count}}分"
  },
  xMinutes: {
    one: "1分",
    other: "{{count}}分"
  },
  aboutXHours: {
    one: "約1時間",
    other: "約{{count}}時間"
  },
  xHours: {
    one: "1時間",
    other: "{{count}}時間"
  },
  xDays: {
    one: "1日",
    other: "{{count}}日"
  },
  aboutXWeeks: {
    one: "約1週間",
    other: "約{{count}}週間"
  },
  xWeeks: {
    one: "1週間",
    other: "{{count}}週間"
  },
  aboutXMonths: {
    one: "約1か月",
    other: "約{{count}}か月"
  },
  xMonths: {
    one: "1か月",
    other: "{{count}}か月"
  },
  aboutXYears: {
    one: "約1年",
    other: "約{{count}}年"
  },
  xYears: {
    one: "1年",
    other: "{{count}}年"
  },
  overXYears: {
    one: "1年以上",
    other: "{{count}}年以上"
  },
  almostXYears: {
    one: "1年近く",
    other: "{{count}}年近く"
  }
}, YS = function(n, a, o) {
  o = o || {};
  var l, d = US[n];
  return typeof d == "string" ? l = d : a === 1 ? o.addSuffix && d.oneWithSuffix ? l = d.oneWithSuffix : l = d.one : o.addSuffix && d.otherWithSuffix ? l = d.otherWithSuffix.replace("{{count}}", String(a)) : l = d.other.replace("{{count}}", String(a)), o.addSuffix ? o.comparison && o.comparison > 0 ? l + "後" : l + "前" : l;
};
const ZS = YS;
var JS = {
  full: "y年M月d日EEEE",
  long: "y年M月d日",
  medium: "y/MM/dd",
  short: "y/MM/dd"
}, QS = {
  full: "H時mm分ss秒 zzzz",
  long: "H:mm:ss z",
  medium: "H:mm:ss",
  short: "H:mm"
}, eC = {
  full: "{{date}} {{time}}",
  long: "{{date}} {{time}}",
  medium: "{{date}} {{time}}",
  short: "{{date}} {{time}}"
}, tC = {
  date: L({
    formats: JS,
    defaultWidth: "full"
  }),
  time: L({
    formats: QS,
    defaultWidth: "full"
  }),
  dateTime: L({
    formats: eC,
    defaultWidth: "full"
  })
};
const rC = tC;
var nC = {
  lastWeek: "先週のeeeeのp",
  yesterday: "昨日のp",
  today: "今日のp",
  tomorrow: "明日のp",
  nextWeek: "翌週のeeeeのp",
  other: "P"
}, aC = function(n, a, o, l) {
  return nC[n];
};
const iC = aC;
var oC = {
  narrow: ["BC", "AC"],
  abbreviated: ["紀元前", "西暦"],
  wide: ["紀元前", "西暦"]
}, lC = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["第1四半期", "第2四半期", "第3四半期", "第4四半期"]
}, uC = {
  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
  abbreviated: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
  wide: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"]
}, sC = {
  narrow: ["日", "月", "火", "水", "木", "金", "土"],
  short: ["日", "月", "火", "水", "木", "金", "土"],
  abbreviated: ["日", "月", "火", "水", "木", "金", "土"],
  wide: ["日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日"]
}, dC = {
  narrow: {
    am: "午前",
    pm: "午後",
    midnight: "深夜",
    noon: "正午",
    morning: "朝",
    afternoon: "午後",
    evening: "夜",
    night: "深夜"
  },
  abbreviated: {
    am: "午前",
    pm: "午後",
    midnight: "深夜",
    noon: "正午",
    morning: "朝",
    afternoon: "午後",
    evening: "夜",
    night: "深夜"
  },
  wide: {
    am: "午前",
    pm: "午後",
    midnight: "深夜",
    noon: "正午",
    morning: "朝",
    afternoon: "午後",
    evening: "夜",
    night: "深夜"
  }
}, cC = {
  narrow: {
    am: "午前",
    pm: "午後",
    midnight: "深夜",
    noon: "正午",
    morning: "朝",
    afternoon: "午後",
    evening: "夜",
    night: "深夜"
  },
  abbreviated: {
    am: "午前",
    pm: "午後",
    midnight: "深夜",
    noon: "正午",
    morning: "朝",
    afternoon: "午後",
    evening: "夜",
    night: "深夜"
  },
  wide: {
    am: "午前",
    pm: "午後",
    midnight: "深夜",
    noon: "正午",
    morning: "朝",
    afternoon: "午後",
    evening: "夜",
    night: "深夜"
  }
}, fC = function(n, a) {
  var o = Number(n), l = String(a == null ? void 0 : a.unit);
  switch (l) {
    case "year":
      return "".concat(o, "年");
    case "quarter":
      return "第".concat(o, "四半期");
    case "month":
      return "".concat(o, "月");
    case "week":
      return "第".concat(o, "週");
    case "date":
      return "".concat(o, "日");
    case "hour":
      return "".concat(o, "時");
    case "minute":
      return "".concat(o, "分");
    case "second":
      return "".concat(o, "秒");
    default:
      return "".concat(o);
  }
}, mC = {
  ordinalNumber: fC,
  era: C({
    values: oC,
    defaultWidth: "wide"
  }),
  quarter: C({
    values: lC,
    defaultWidth: "wide",
    argumentCallback: function(n) {
      return Number(n) - 1;
    }
  }),
  month: C({
    values: uC,
    defaultWidth: "wide"
  }),
  day: C({
    values: sC,
    defaultWidth: "wide"
  }),
  dayPeriod: C({
    values: dC,
    defaultWidth: "wide",
    formattingValues: cC,
    defaultFormattingWidth: "wide"
  })
};
const hC = mC;
var vC = /^第?\d+(年|四半期|月|週|日|時|分|秒)?/i, pC = /\d+/i, gC = {
  narrow: /^(B\.?C\.?|A\.?D\.?)/i,
  abbreviated: /^(紀元[前後]|西暦)/i,
  wide: /^(紀元[前後]|西暦)/i
}, yC = {
  narrow: [/^B/i, /^A/i],
  any: [/^(紀元前)/i, /^(西暦|紀元後)/i]
}, bC = {
  narrow: /^[1234]/i,
  abbreviated: /^Q[1234]/i,
  wide: /^第[1234一二三四１２３４]四半期/i
}, wC = {
  any: [/(1|一|１)/i, /(2|二|２)/i, /(3|三|３)/i, /(4|四|４)/i]
}, PC = {
  narrow: /^([123456789]|1[012])/,
  abbreviated: /^([123456789]|1[012])月/i,
  wide: /^([123456789]|1[012])月/i
}, MC = {
  any: [/^1\D/, /^2/, /^3/, /^4/, /^5/, /^6/, /^7/, /^8/, /^9/, /^10/, /^11/, /^12/]
}, _C = {
  narrow: /^[日月火水木金土]/,
  short: /^[日月火水木金土]/,
  abbreviated: /^[日月火水木金土]/,
  wide: /^[日月火水木金土]曜日/
}, $C = {
  any: [/^日/, /^月/, /^火/, /^水/, /^木/, /^金/, /^土/]
}, TC = {
  any: /^(AM|PM|午前|午後|正午|深夜|真夜中|夜|朝)/i
}, kC = {
  any: {
    am: /^(A|午前)/i,
    pm: /^(P|午後)/i,
    midnight: /^深夜|真夜中/i,
    noon: /^正午/i,
    morning: /^朝/i,
    afternoon: /^午後/i,
    evening: /^夜/i,
    night: /^深夜/i
  }
}, SC = {
  ordinalNumber: xe({
    matchPattern: vC,
    parsePattern: pC,
    valueCallback: function(n) {
      return parseInt(n, 10);
    }
  }),
  era: D({
    matchPatterns: gC,
    defaultMatchWidth: "wide",
    parsePatterns: yC,
    defaultParseWidth: "any"
  }),
  quarter: D({
    matchPatterns: bC,
    defaultMatchWidth: "wide",
    parsePatterns: wC,
    defaultParseWidth: "any",
    valueCallback: function(n) {
      return n + 1;
    }
  }),
  month: D({
    matchPatterns: PC,
    defaultMatchWidth: "wide",
    parsePatterns: MC,
    defaultParseWidth: "any"
  }),
  day: D({
    matchPatterns: _C,
    defaultMatchWidth: "wide",
    parsePatterns: $C,
    defaultParseWidth: "any"
  }),
  dayPeriod: D({
    matchPatterns: TC,
    defaultMatchWidth: "any",
    parsePatterns: kC,
    defaultParseWidth: "any"
  })
};
const CC = SC;
var DC = {
  code: "ja",
  formatDistance: ZS,
  formatLong: rC,
  formatRelative: iC,
  localize: hC,
  match: CC,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
const WC = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: DC
}, Symbol.toStringTag, { value: "Module" })), xC = /* @__PURE__ */ be(WC);
var OC = H && H.__importDefault || function(t) {
  return t && t.__esModule ? t : { default: t };
};
Object.defineProperty(Vu, "__esModule", { value: !0 });
const zC = OC(xC), EC = {
  name: "ja-JP",
  locale: zC.default
};
Vu.default = EC;
var qu = {}, jC = {
  lessThanXSeconds: {
    one: "1초 미만",
    other: "{{count}}초 미만"
  },
  xSeconds: {
    one: "1초",
    other: "{{count}}초"
  },
  halfAMinute: "30초",
  lessThanXMinutes: {
    one: "1분 미만",
    other: "{{count}}분 미만"
  },
  xMinutes: {
    one: "1분",
    other: "{{count}}분"
  },
  aboutXHours: {
    one: "약 1시간",
    other: "약 {{count}}시간"
  },
  xHours: {
    one: "1시간",
    other: "{{count}}시간"
  },
  xDays: {
    one: "1일",
    other: "{{count}}일"
  },
  aboutXWeeks: {
    one: "약 1주",
    other: "약 {{count}}주"
  },
  xWeeks: {
    one: "1주",
    other: "{{count}}주"
  },
  aboutXMonths: {
    one: "약 1개월",
    other: "약 {{count}}개월"
  },
  xMonths: {
    one: "1개월",
    other: "{{count}}개월"
  },
  aboutXYears: {
    one: "약 1년",
    other: "약 {{count}}년"
  },
  xYears: {
    one: "1년",
    other: "{{count}}년"
  },
  overXYears: {
    one: "1년 이상",
    other: "{{count}}년 이상"
  },
  almostXYears: {
    one: "거의 1년",
    other: "거의 {{count}}년"
  }
}, AC = function(n, a, o) {
  var l, d = jC[n];
  return typeof d == "string" ? l = d : a === 1 ? l = d.one : l = d.other.replace("{{count}}", a.toString()), o != null && o.addSuffix ? o.comparison && o.comparison > 0 ? l + " 후" : l + " 전" : l;
};
const FC = AC;
var IC = {
  full: "y년 M월 d일 EEEE",
  long: "y년 M월 d일",
  medium: "y.MM.dd",
  short: "y.MM.dd"
}, NC = {
  full: "a H시 mm분 ss초 zzzz",
  long: "a H:mm:ss z",
  medium: "HH:mm:ss",
  short: "HH:mm"
}, HC = {
  full: "{{date}} {{time}}",
  long: "{{date}} {{time}}",
  medium: "{{date}} {{time}}",
  short: "{{date}} {{time}}"
}, RC = {
  date: L({
    formats: IC,
    defaultWidth: "full"
  }),
  time: L({
    formats: NC,
    defaultWidth: "full"
  }),
  dateTime: L({
    formats: HC,
    defaultWidth: "full"
  })
};
const LC = RC;
var BC = {
  lastWeek: "'지난' eeee p",
  yesterday: "'어제' p",
  today: "'오늘' p",
  tomorrow: "'내일' p",
  nextWeek: "'다음' eeee p",
  other: "P"
}, VC = function(n, a, o, l) {
  return BC[n];
};
const qC = VC;
var XC = {
  narrow: ["BC", "AD"],
  abbreviated: ["BC", "AD"],
  wide: ["기원전", "서기"]
}, KC = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1분기", "2분기", "3분기", "4분기"]
}, GC = {
  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
  abbreviated: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
  wide: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"]
}, UC = {
  narrow: ["일", "월", "화", "수", "목", "금", "토"],
  short: ["일", "월", "화", "수", "목", "금", "토"],
  abbreviated: ["일", "월", "화", "수", "목", "금", "토"],
  wide: ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"]
}, YC = {
  narrow: {
    am: "오전",
    pm: "오후",
    midnight: "자정",
    noon: "정오",
    morning: "아침",
    afternoon: "오후",
    evening: "저녁",
    night: "밤"
  },
  abbreviated: {
    am: "오전",
    pm: "오후",
    midnight: "자정",
    noon: "정오",
    morning: "아침",
    afternoon: "오후",
    evening: "저녁",
    night: "밤"
  },
  wide: {
    am: "오전",
    pm: "오후",
    midnight: "자정",
    noon: "정오",
    morning: "아침",
    afternoon: "오후",
    evening: "저녁",
    night: "밤"
  }
}, ZC = {
  narrow: {
    am: "오전",
    pm: "오후",
    midnight: "자정",
    noon: "정오",
    morning: "아침",
    afternoon: "오후",
    evening: "저녁",
    night: "밤"
  },
  abbreviated: {
    am: "오전",
    pm: "오후",
    midnight: "자정",
    noon: "정오",
    morning: "아침",
    afternoon: "오후",
    evening: "저녁",
    night: "밤"
  },
  wide: {
    am: "오전",
    pm: "오후",
    midnight: "자정",
    noon: "정오",
    morning: "아침",
    afternoon: "오후",
    evening: "저녁",
    night: "밤"
  }
}, JC = function(n, a) {
  var o = Number(n), l = String(a == null ? void 0 : a.unit);
  switch (l) {
    case "minute":
    case "second":
      return String(o);
    case "date":
      return o + "일";
    default:
      return o + "번째";
  }
}, QC = {
  ordinalNumber: JC,
  era: C({
    values: XC,
    defaultWidth: "wide"
  }),
  quarter: C({
    values: KC,
    defaultWidth: "wide",
    argumentCallback: function(n) {
      return n - 1;
    }
  }),
  month: C({
    values: GC,
    defaultWidth: "wide"
  }),
  day: C({
    values: UC,
    defaultWidth: "wide"
  }),
  dayPeriod: C({
    values: YC,
    defaultWidth: "wide",
    formattingValues: ZC,
    defaultFormattingWidth: "wide"
  })
};
const eD = QC;
var tD = /^(\d+)(일|번째)?/i, rD = /\d+/i, nD = {
  narrow: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(기원전|서기)/i
}, aD = {
  any: [/^(bc|기원전)/i, /^(ad|서기)/i]
}, iD = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234]사?분기/i
}, oD = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, lD = {
  narrow: /^(1[012]|[123456789])/,
  abbreviated: /^(1[012]|[123456789])월/i,
  wide: /^(1[012]|[123456789])월/i
}, uD = {
  any: [/^1월?$/, /^2/, /^3/, /^4/, /^5/, /^6/, /^7/, /^8/, /^9/, /^10/, /^11/, /^12/]
}, sD = {
  narrow: /^[일월화수목금토]/,
  short: /^[일월화수목금토]/,
  abbreviated: /^[일월화수목금토]/,
  wide: /^[일월화수목금토]요일/
}, dD = {
  any: [/^일/, /^월/, /^화/, /^수/, /^목/, /^금/, /^토/]
}, cD = {
  any: /^(am|pm|오전|오후|자정|정오|아침|저녁|밤)/i
}, fD = {
  any: {
    am: /^(am|오전)/i,
    pm: /^(pm|오후)/i,
    midnight: /^자정/i,
    noon: /^정오/i,
    morning: /^아침/i,
    afternoon: /^오후/i,
    evening: /^저녁/i,
    night: /^밤/i
  }
}, mD = {
  ordinalNumber: xe({
    matchPattern: tD,
    parsePattern: rD,
    valueCallback: function(n) {
      return parseInt(n, 10);
    }
  }),
  era: D({
    matchPatterns: nD,
    defaultMatchWidth: "wide",
    parsePatterns: aD,
    defaultParseWidth: "any"
  }),
  quarter: D({
    matchPatterns: iD,
    defaultMatchWidth: "wide",
    parsePatterns: oD,
    defaultParseWidth: "any",
    valueCallback: function(n) {
      return n + 1;
    }
  }),
  month: D({
    matchPatterns: lD,
    defaultMatchWidth: "wide",
    parsePatterns: uD,
    defaultParseWidth: "any"
  }),
  day: D({
    matchPatterns: sD,
    defaultMatchWidth: "wide",
    parsePatterns: dD,
    defaultParseWidth: "any"
  }),
  dayPeriod: D({
    matchPatterns: cD,
    defaultMatchWidth: "any",
    parsePatterns: fD,
    defaultParseWidth: "any"
  })
};
const hD = mD;
var vD = {
  code: "ko",
  formatDistance: FC,
  formatLong: LC,
  formatRelative: qC,
  localize: eD,
  match: hD,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
const pD = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: vD
}, Symbol.toStringTag, { value: "Module" })), gD = /* @__PURE__ */ be(pD);
var yD = H && H.__importDefault || function(t) {
  return t && t.__esModule ? t : { default: t };
};
Object.defineProperty(qu, "__esModule", { value: !0 });
const bD = yD(gD), wD = {
  name: "ko-KR",
  locale: bD.default
};
qu.default = wD;
var Xu = {}, PD = {
  lessThanXSeconds: {
    one: "kurang dari 1 detik",
    other: "kurang dari {{count}} detik"
  },
  xSeconds: {
    one: "1 detik",
    other: "{{count}} detik"
  },
  halfAMinute: "setengah menit",
  lessThanXMinutes: {
    one: "kurang dari 1 menit",
    other: "kurang dari {{count}} menit"
  },
  xMinutes: {
    one: "1 menit",
    other: "{{count}} menit"
  },
  aboutXHours: {
    one: "sekitar 1 jam",
    other: "sekitar {{count}} jam"
  },
  xHours: {
    one: "1 jam",
    other: "{{count}} jam"
  },
  xDays: {
    one: "1 hari",
    other: "{{count}} hari"
  },
  aboutXWeeks: {
    one: "sekitar 1 minggu",
    other: "sekitar {{count}} minggu"
  },
  xWeeks: {
    one: "1 minggu",
    other: "{{count}} minggu"
  },
  aboutXMonths: {
    one: "sekitar 1 bulan",
    other: "sekitar {{count}} bulan"
  },
  xMonths: {
    one: "1 bulan",
    other: "{{count}} bulan"
  },
  aboutXYears: {
    one: "sekitar 1 tahun",
    other: "sekitar {{count}} tahun"
  },
  xYears: {
    one: "1 tahun",
    other: "{{count}} tahun"
  },
  overXYears: {
    one: "lebih dari 1 tahun",
    other: "lebih dari {{count}} tahun"
  },
  almostXYears: {
    one: "hampir 1 tahun",
    other: "hampir {{count}} tahun"
  }
}, MD = function(n, a, o) {
  var l, d = PD[n];
  return typeof d == "string" ? l = d : a === 1 ? l = d.one : l = d.other.replace("{{count}}", a.toString()), o != null && o.addSuffix ? o.comparison && o.comparison > 0 ? "dalam waktu " + l : l + " yang lalu" : l;
};
const _D = MD;
var $D = {
  full: "EEEE, d MMMM yyyy",
  long: "d MMMM yyyy",
  medium: "d MMM yyyy",
  short: "d/M/yyyy"
}, TD = {
  full: "HH.mm.ss",
  long: "HH.mm.ss",
  medium: "HH.mm",
  short: "HH.mm"
}, kD = {
  full: "{{date}} 'pukul' {{time}}",
  long: "{{date}} 'pukul' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, SD = {
  date: L({
    formats: $D,
    defaultWidth: "full"
  }),
  time: L({
    formats: TD,
    defaultWidth: "full"
  }),
  dateTime: L({
    formats: kD,
    defaultWidth: "full"
  })
};
const CD = SD;
var DD = {
  lastWeek: "eeee 'lalu pukul' p",
  yesterday: "'Kemarin pukul' p",
  today: "'Hari ini pukul' p",
  tomorrow: "'Besok pukul' p",
  nextWeek: "eeee 'pukul' p",
  other: "P"
}, WD = function(n, a, o, l) {
  return DD[n];
};
const xD = WD;
var OD = {
  narrow: ["SM", "M"],
  abbreviated: ["SM", "M"],
  wide: ["Sebelum Masehi", "Masehi"]
}, zD = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["K1", "K2", "K3", "K4"],
  wide: ["Kuartal ke-1", "Kuartal ke-2", "Kuartal ke-3", "Kuartal ke-4"]
}, ED = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agt", "Sep", "Okt", "Nov", "Des"],
  wide: ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"]
}, jD = {
  narrow: ["M", "S", "S", "R", "K", "J", "S"],
  short: ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"],
  abbreviated: ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"],
  wide: ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"]
}, AD = {
  narrow: {
    am: "AM",
    pm: "PM",
    midnight: "tengah malam",
    noon: "tengah hari",
    morning: "pagi",
    afternoon: "siang",
    evening: "sore",
    night: "malam"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "tengah malam",
    noon: "tengah hari",
    morning: "pagi",
    afternoon: "siang",
    evening: "sore",
    night: "malam"
  },
  wide: {
    am: "AM",
    pm: "PM",
    midnight: "tengah malam",
    noon: "tengah hari",
    morning: "pagi",
    afternoon: "siang",
    evening: "sore",
    night: "malam"
  }
}, FD = {
  narrow: {
    am: "AM",
    pm: "PM",
    midnight: "tengah malam",
    noon: "tengah hari",
    morning: "pagi",
    afternoon: "siang",
    evening: "sore",
    night: "malam"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "tengah malam",
    noon: "tengah hari",
    morning: "pagi",
    afternoon: "siang",
    evening: "sore",
    night: "malam"
  },
  wide: {
    am: "AM",
    pm: "PM",
    midnight: "tengah malam",
    noon: "tengah hari",
    morning: "pagi",
    afternoon: "siang",
    evening: "sore",
    night: "malam"
  }
}, ID = function(n, a) {
  var o = Number(n);
  return "ke-" + o;
}, ND = {
  ordinalNumber: ID,
  era: C({
    values: OD,
    defaultWidth: "wide"
  }),
  quarter: C({
    values: zD,
    defaultWidth: "wide",
    argumentCallback: function(n) {
      return n - 1;
    }
  }),
  month: C({
    values: ED,
    defaultWidth: "wide"
  }),
  day: C({
    values: jD,
    defaultWidth: "wide"
  }),
  dayPeriod: C({
    values: AD,
    defaultWidth: "wide",
    formattingValues: FD,
    defaultFormattingWidth: "wide"
  })
};
const HD = ND;
var RD = /^ke-(\d+)?/i, LD = /\d+/i, BD = {
  narrow: /^(sm|m)/i,
  abbreviated: /^(s\.?\s?m\.?|s\.?\s?e\.?\s?u\.?|m\.?|e\.?\s?u\.?)/i,
  wide: /^(sebelum masehi|sebelum era umum|masehi|era umum)/i
}, VD = {
  any: [/^s/i, /^(m|e)/i]
}, qD = {
  narrow: /^[1234]/i,
  abbreviated: /^K-?\s[1234]/i,
  wide: /^Kuartal ke-?\s?[1234]/i
}, XD = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, KD = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|mei|jun|jul|agt|sep|okt|nov|des)/i,
  wide: /^(januari|februari|maret|april|mei|juni|juli|agustus|september|oktober|november|desember)/i
}, GD = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^ma/i, /^ap/i, /^me/i, /^jun/i, /^jul/i, /^ag/i, /^s/i, /^o/i, /^n/i, /^d/i]
}, UD = {
  narrow: /^[srkjm]/i,
  short: /^(min|sen|sel|rab|kam|jum|sab)/i,
  abbreviated: /^(min|sen|sel|rab|kam|jum|sab)/i,
  wide: /^(minggu|senin|selasa|rabu|kamis|jumat|sabtu)/i
}, YD = {
  narrow: [/^m/i, /^s/i, /^s/i, /^r/i, /^k/i, /^j/i, /^s/i],
  any: [/^m/i, /^sen/i, /^sel/i, /^r/i, /^k/i, /^j/i, /^sa/i]
}, ZD = {
  narrow: /^(a|p|tengah m|tengah h|(di(\swaktu)?) (pagi|siang|sore|malam))/i,
  any: /^([ap]\.?\s?m\.?|tengah malam|tengah hari|(di(\swaktu)?) (pagi|siang|sore|malam))/i
}, JD = {
  any: {
    am: /^a/i,
    pm: /^pm/i,
    midnight: /^tengah m/i,
    noon: /^tengah h/i,
    morning: /pagi/i,
    afternoon: /siang/i,
    evening: /sore/i,
    night: /malam/i
  }
}, QD = {
  ordinalNumber: xe({
    matchPattern: RD,
    parsePattern: LD,
    valueCallback: function(n) {
      return parseInt(n, 10);
    }
  }),
  era: D({
    matchPatterns: BD,
    defaultMatchWidth: "wide",
    parsePatterns: VD,
    defaultParseWidth: "any"
  }),
  quarter: D({
    matchPatterns: qD,
    defaultMatchWidth: "wide",
    parsePatterns: XD,
    defaultParseWidth: "any",
    valueCallback: function(n) {
      return n + 1;
    }
  }),
  month: D({
    matchPatterns: KD,
    defaultMatchWidth: "wide",
    parsePatterns: GD,
    defaultParseWidth: "any"
  }),
  day: D({
    matchPatterns: UD,
    defaultMatchWidth: "wide",
    parsePatterns: YD,
    defaultParseWidth: "any"
  }),
  dayPeriod: D({
    matchPatterns: ZD,
    defaultMatchWidth: "any",
    parsePatterns: JD,
    defaultParseWidth: "any"
  })
};
const eW = QD;
var tW = {
  code: "id",
  formatDistance: _D,
  formatLong: CD,
  formatRelative: xD,
  localize: HD,
  match: eW,
  options: {
    weekStartsOn: 1,
    firstWeekContainsDate: 1
  }
};
const rW = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: tW
}, Symbol.toStringTag, { value: "Module" })), nW = /* @__PURE__ */ be(rW);
var aW = H && H.__importDefault || function(t) {
  return t && t.__esModule ? t : { default: t };
};
Object.defineProperty(Xu, "__esModule", { value: !0 });
const iW = aW(nW), oW = {
  name: "id-ID",
  locale: iW.default
};
Xu.default = oW;
var Ku = {}, Vf = {
  lessThanXSeconds: {
    standalone: {
      one: "weniger als 1 Sekunde",
      other: "weniger als {{count}} Sekunden"
    },
    withPreposition: {
      one: "weniger als 1 Sekunde",
      other: "weniger als {{count}} Sekunden"
    }
  },
  xSeconds: {
    standalone: {
      one: "1 Sekunde",
      other: "{{count}} Sekunden"
    },
    withPreposition: {
      one: "1 Sekunde",
      other: "{{count}} Sekunden"
    }
  },
  halfAMinute: {
    standalone: "halbe Minute",
    withPreposition: "halben Minute"
  },
  lessThanXMinutes: {
    standalone: {
      one: "weniger als 1 Minute",
      other: "weniger als {{count}} Minuten"
    },
    withPreposition: {
      one: "weniger als 1 Minute",
      other: "weniger als {{count}} Minuten"
    }
  },
  xMinutes: {
    standalone: {
      one: "1 Minute",
      other: "{{count}} Minuten"
    },
    withPreposition: {
      one: "1 Minute",
      other: "{{count}} Minuten"
    }
  },
  aboutXHours: {
    standalone: {
      one: "etwa 1 Stunde",
      other: "etwa {{count}} Stunden"
    },
    withPreposition: {
      one: "etwa 1 Stunde",
      other: "etwa {{count}} Stunden"
    }
  },
  xHours: {
    standalone: {
      one: "1 Stunde",
      other: "{{count}} Stunden"
    },
    withPreposition: {
      one: "1 Stunde",
      other: "{{count}} Stunden"
    }
  },
  xDays: {
    standalone: {
      one: "1 Tag",
      other: "{{count}} Tage"
    },
    withPreposition: {
      one: "1 Tag",
      other: "{{count}} Tagen"
    }
  },
  aboutXWeeks: {
    standalone: {
      one: "etwa 1 Woche",
      other: "etwa {{count}} Wochen"
    },
    withPreposition: {
      one: "etwa 1 Woche",
      other: "etwa {{count}} Wochen"
    }
  },
  xWeeks: {
    standalone: {
      one: "1 Woche",
      other: "{{count}} Wochen"
    },
    withPreposition: {
      one: "1 Woche",
      other: "{{count}} Wochen"
    }
  },
  aboutXMonths: {
    standalone: {
      one: "etwa 1 Monat",
      other: "etwa {{count}} Monate"
    },
    withPreposition: {
      one: "etwa 1 Monat",
      other: "etwa {{count}} Monaten"
    }
  },
  xMonths: {
    standalone: {
      one: "1 Monat",
      other: "{{count}} Monate"
    },
    withPreposition: {
      one: "1 Monat",
      other: "{{count}} Monaten"
    }
  },
  aboutXYears: {
    standalone: {
      one: "etwa 1 Jahr",
      other: "etwa {{count}} Jahre"
    },
    withPreposition: {
      one: "etwa 1 Jahr",
      other: "etwa {{count}} Jahren"
    }
  },
  xYears: {
    standalone: {
      one: "1 Jahr",
      other: "{{count}} Jahre"
    },
    withPreposition: {
      one: "1 Jahr",
      other: "{{count}} Jahren"
    }
  },
  overXYears: {
    standalone: {
      one: "mehr als 1 Jahr",
      other: "mehr als {{count}} Jahre"
    },
    withPreposition: {
      one: "mehr als 1 Jahr",
      other: "mehr als {{count}} Jahren"
    }
  },
  almostXYears: {
    standalone: {
      one: "fast 1 Jahr",
      other: "fast {{count}} Jahre"
    },
    withPreposition: {
      one: "fast 1 Jahr",
      other: "fast {{count}} Jahren"
    }
  }
}, lW = function(n, a, o) {
  var l, d = o != null && o.addSuffix ? Vf[n].withPreposition : Vf[n].standalone;
  return typeof d == "string" ? l = d : a === 1 ? l = d.one : l = d.other.replace("{{count}}", String(a)), o != null && o.addSuffix ? o.comparison && o.comparison > 0 ? "in " + l : "vor " + l : l;
};
const uW = lW;
var sW = {
  full: "EEEE, do MMMM y",
  // Montag, 7. Januar 2018
  long: "do MMMM y",
  // 7. Januar 2018
  medium: "do MMM y",
  // 7. Jan. 2018
  short: "dd.MM.y"
  // 07.01.2018
}, dW = {
  full: "HH:mm:ss zzzz",
  long: "HH:mm:ss z",
  medium: "HH:mm:ss",
  short: "HH:mm"
}, cW = {
  full: "{{date}} 'um' {{time}}",
  long: "{{date}} 'um' {{time}}",
  medium: "{{date}} {{time}}",
  short: "{{date}} {{time}}"
}, fW = {
  date: L({
    formats: sW,
    defaultWidth: "full"
  }),
  time: L({
    formats: dW,
    defaultWidth: "full"
  }),
  dateTime: L({
    formats: cW,
    defaultWidth: "full"
  })
};
const mW = fW;
var hW = {
  lastWeek: "'letzten' eeee 'um' p",
  yesterday: "'gestern um' p",
  today: "'heute um' p",
  tomorrow: "'morgen um' p",
  nextWeek: "eeee 'um' p",
  other: "P"
}, vW = function(n, a, o, l) {
  return hW[n];
};
const pW = vW;
var gW = {
  narrow: ["v.Chr.", "n.Chr."],
  abbreviated: ["v.Chr.", "n.Chr."],
  wide: ["vor Christus", "nach Christus"]
}, yW = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1. Quartal", "2. Quartal", "3. Quartal", "4. Quartal"]
}, Zl = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: ["Jan", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"],
  wide: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"]
}, bW = {
  narrow: Zl.narrow,
  abbreviated: ["Jan.", "Feb.", "März", "Apr.", "Mai", "Juni", "Juli", "Aug.", "Sep.", "Okt.", "Nov.", "Dez."],
  wide: Zl.wide
}, wW = {
  narrow: ["S", "M", "D", "M", "D", "F", "S"],
  short: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
  abbreviated: ["So.", "Mo.", "Di.", "Mi.", "Do.", "Fr.", "Sa."],
  wide: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"]
}, PW = {
  narrow: {
    am: "vm.",
    pm: "nm.",
    midnight: "Mitternacht",
    noon: "Mittag",
    morning: "Morgen",
    afternoon: "Nachm.",
    evening: "Abend",
    night: "Nacht"
  },
  abbreviated: {
    am: "vorm.",
    pm: "nachm.",
    midnight: "Mitternacht",
    noon: "Mittag",
    morning: "Morgen",
    afternoon: "Nachmittag",
    evening: "Abend",
    night: "Nacht"
  },
  wide: {
    am: "vormittags",
    pm: "nachmittags",
    midnight: "Mitternacht",
    noon: "Mittag",
    morning: "Morgen",
    afternoon: "Nachmittag",
    evening: "Abend",
    night: "Nacht"
  }
}, MW = {
  narrow: {
    am: "vm.",
    pm: "nm.",
    midnight: "Mitternacht",
    noon: "Mittag",
    morning: "morgens",
    afternoon: "nachm.",
    evening: "abends",
    night: "nachts"
  },
  abbreviated: {
    am: "vorm.",
    pm: "nachm.",
    midnight: "Mitternacht",
    noon: "Mittag",
    morning: "morgens",
    afternoon: "nachmittags",
    evening: "abends",
    night: "nachts"
  },
  wide: {
    am: "vormittags",
    pm: "nachmittags",
    midnight: "Mitternacht",
    noon: "Mittag",
    morning: "morgens",
    afternoon: "nachmittags",
    evening: "abends",
    night: "nachts"
  }
}, _W = function(n) {
  var a = Number(n);
  return a + ".";
}, $W = {
  ordinalNumber: _W,
  era: C({
    values: gW,
    defaultWidth: "wide"
  }),
  quarter: C({
    values: yW,
    defaultWidth: "wide",
    argumentCallback: function(n) {
      return n - 1;
    }
  }),
  month: C({
    values: Zl,
    formattingValues: bW,
    defaultWidth: "wide"
  }),
  day: C({
    values: wW,
    defaultWidth: "wide"
  }),
  dayPeriod: C({
    values: PW,
    defaultWidth: "wide",
    formattingValues: MW,
    defaultFormattingWidth: "wide"
  })
};
const TW = $W;
var kW = /^(\d+)(\.)?/i, SW = /\d+/i, CW = {
  narrow: /^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i,
  abbreviated: /^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i,
  wide: /^(vor Christus|vor unserer Zeitrechnung|nach Christus|unserer Zeitrechnung)/i
}, DW = {
  any: [/^v/i, /^n/i]
}, WW = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](\.)? Quartal/i
}, xW = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, OW = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(j[aä]n|feb|mär[z]?|apr|mai|jun[i]?|jul[i]?|aug|sep|okt|nov|dez)\.?/i,
  wide: /^(januar|februar|märz|april|mai|juni|juli|august|september|oktober|november|dezember)/i
}, zW = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^j[aä]/i, /^f/i, /^mär/i, /^ap/i, /^mai/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
}, EW = {
  narrow: /^[smdmf]/i,
  short: /^(so|mo|di|mi|do|fr|sa)/i,
  abbreviated: /^(son?|mon?|die?|mit?|don?|fre?|sam?)\.?/i,
  wide: /^(sonntag|montag|dienstag|mittwoch|donnerstag|freitag|samstag)/i
}, jW = {
  any: [/^so/i, /^mo/i, /^di/i, /^mi/i, /^do/i, /^f/i, /^sa/i]
}, AW = {
  narrow: /^(vm\.?|nm\.?|Mitternacht|Mittag|morgens|nachm\.?|abends|nachts)/i,
  abbreviated: /^(vorm\.?|nachm\.?|Mitternacht|Mittag|morgens|nachm\.?|abends|nachts)/i,
  wide: /^(vormittags|nachmittags|Mitternacht|Mittag|morgens|nachmittags|abends|nachts)/i
}, FW = {
  any: {
    am: /^v/i,
    pm: /^n/i,
    midnight: /^Mitte/i,
    noon: /^Mitta/i,
    morning: /morgens/i,
    afternoon: /nachmittags/i,
    // will never be matched. Afternoon is matched by `pm`
    evening: /abends/i,
    night: /nachts/i
    // will never be matched. Night is matched by `pm`
  }
}, IW = {
  ordinalNumber: xe({
    matchPattern: kW,
    parsePattern: SW,
    valueCallback: function(n) {
      return parseInt(n);
    }
  }),
  era: D({
    matchPatterns: CW,
    defaultMatchWidth: "wide",
    parsePatterns: DW,
    defaultParseWidth: "any"
  }),
  quarter: D({
    matchPatterns: WW,
    defaultMatchWidth: "wide",
    parsePatterns: xW,
    defaultParseWidth: "any",
    valueCallback: function(n) {
      return n + 1;
    }
  }),
  month: D({
    matchPatterns: OW,
    defaultMatchWidth: "wide",
    parsePatterns: zW,
    defaultParseWidth: "any"
  }),
  day: D({
    matchPatterns: EW,
    defaultMatchWidth: "wide",
    parsePatterns: jW,
    defaultParseWidth: "any"
  }),
  dayPeriod: D({
    matchPatterns: AW,
    defaultMatchWidth: "wide",
    parsePatterns: FW,
    defaultParseWidth: "any"
  })
};
const NW = IW;
var HW = {
  code: "de",
  formatDistance: uW,
  formatLong: mW,
  formatRelative: pW,
  localize: TW,
  match: NW,
  options: {
    weekStartsOn: 1,
    firstWeekContainsDate: 4
  }
};
const RW = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: HW
}, Symbol.toStringTag, { value: "Module" })), LW = /* @__PURE__ */ be(RW);
var BW = H && H.__importDefault || function(t) {
  return t && t.__esModule ? t : { default: t };
};
Object.defineProperty(Ku, "__esModule", { value: !0 });
const VW = BW(LW), qW = {
  name: "de-DE",
  locale: VW.default
};
Ku.default = qW;
var Gu = {}, XW = {
  lessThanXSeconds: {
    one: "mindre enn ett sekund",
    other: "mindre enn {{count}} sekunder"
  },
  xSeconds: {
    one: "ett sekund",
    other: "{{count}} sekunder"
  },
  halfAMinute: "et halvt minutt",
  lessThanXMinutes: {
    one: "mindre enn ett minutt",
    other: "mindre enn {{count}} minutter"
  },
  xMinutes: {
    one: "ett minutt",
    other: "{{count}} minutter"
  },
  aboutXHours: {
    one: "omtrent en time",
    other: "omtrent {{count}} timer"
  },
  xHours: {
    one: "en time",
    other: "{{count}} timer"
  },
  xDays: {
    one: "en dag",
    other: "{{count}} dager"
  },
  aboutXWeeks: {
    one: "omtrent en uke",
    other: "omtrent {{count}} uker"
  },
  xWeeks: {
    one: "en uke",
    other: "{{count}} uker"
  },
  aboutXMonths: {
    one: "omtrent en måned",
    other: "omtrent {{count}} måneder"
  },
  xMonths: {
    one: "en måned",
    other: "{{count}} måneder"
  },
  aboutXYears: {
    one: "omtrent ett år",
    other: "omtrent {{count}} år"
  },
  xYears: {
    one: "ett år",
    other: "{{count}} år"
  },
  overXYears: {
    one: "over ett år",
    other: "over {{count}} år"
  },
  almostXYears: {
    one: "nesten ett år",
    other: "nesten {{count}} år"
  }
}, KW = function(n, a, o) {
  var l, d = XW[n];
  return typeof d == "string" ? l = d : a === 1 ? l = d.one : l = d.other.replace("{{count}}", String(a)), o != null && o.addSuffix ? o.comparison && o.comparison > 0 ? "om " + l : l + " siden" : l;
};
const GW = KW;
var UW = {
  full: "EEEE d. MMMM y",
  long: "d. MMMM y",
  medium: "d. MMM y",
  short: "dd.MM.y"
}, YW = {
  full: "'kl'. HH:mm:ss zzzz",
  long: "HH:mm:ss z",
  medium: "HH:mm:ss",
  short: "HH:mm"
}, ZW = {
  full: "{{date}} 'kl.' {{time}}",
  long: "{{date}} 'kl.' {{time}}",
  medium: "{{date}} {{time}}",
  short: "{{date}} {{time}}"
}, JW = {
  date: L({
    formats: UW,
    defaultWidth: "full"
  }),
  time: L({
    formats: YW,
    defaultWidth: "full"
  }),
  dateTime: L({
    formats: ZW,
    defaultWidth: "full"
  })
};
const QW = JW;
var ex = {
  lastWeek: "'forrige' eeee 'kl.' p",
  yesterday: "'i går kl.' p",
  today: "'i dag kl.' p",
  tomorrow: "'i morgen kl.' p",
  nextWeek: "EEEE 'kl.' p",
  other: "P"
}, tx = function(n, a, o, l) {
  return ex[n];
};
const rx = tx;
var nx = {
  narrow: ["f.Kr.", "e.Kr."],
  abbreviated: ["f.Kr.", "e.Kr."],
  wide: ["før Kristus", "etter Kristus"]
}, ax = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1. kvartal", "2. kvartal", "3. kvartal", "4. kvartal"]
}, ix = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: ["jan.", "feb.", "mars", "apr.", "mai", "juni", "juli", "aug.", "sep.", "okt.", "nov.", "des."],
  wide: ["januar", "februar", "mars", "april", "mai", "juni", "juli", "august", "september", "oktober", "november", "desember"]
}, ox = {
  narrow: ["S", "M", "T", "O", "T", "F", "L"],
  short: ["sø", "ma", "ti", "on", "to", "fr", "lø"],
  abbreviated: ["søn", "man", "tir", "ons", "tor", "fre", "lør"],
  wide: ["søndag", "mandag", "tirsdag", "onsdag", "torsdag", "fredag", "lørdag"]
}, lx = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "midnatt",
    noon: "middag",
    morning: "på morg.",
    afternoon: "på etterm.",
    evening: "på kvelden",
    night: "på natten"
  },
  abbreviated: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnatt",
    noon: "middag",
    morning: "på morg.",
    afternoon: "på etterm.",
    evening: "på kvelden",
    night: "på natten"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnatt",
    noon: "middag",
    morning: "på morgenen",
    afternoon: "på ettermiddagen",
    evening: "på kvelden",
    night: "på natten"
  }
}, ux = function(n, a) {
  var o = Number(n);
  return o + ".";
}, sx = {
  ordinalNumber: ux,
  era: C({
    values: nx,
    defaultWidth: "wide"
  }),
  quarter: C({
    values: ax,
    defaultWidth: "wide",
    argumentCallback: function(n) {
      return n - 1;
    }
  }),
  month: C({
    values: ix,
    defaultWidth: "wide"
  }),
  day: C({
    values: ox,
    defaultWidth: "wide"
  }),
  dayPeriod: C({
    values: lx,
    defaultWidth: "wide"
  })
};
const dx = sx;
var cx = /^(\d+)\.?/i, fx = /\d+/i, mx = {
  narrow: /^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,
  abbreviated: /^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,
  wide: /^(før Kristus|før vår tid|etter Kristus|vår tid)/i
}, hx = {
  any: [/^f/i, /^e/i]
}, vx = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](\.)? kvartal/i
}, px = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, gx = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mars?|apr|mai|juni?|juli?|aug|sep|okt|nov|des)\.?/i,
  wide: /^(januar|februar|mars|april|mai|juni|juli|august|september|oktober|november|desember)/i
}, yx = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^mai/i, /^jun/i, /^jul/i, /^aug/i, /^s/i, /^o/i, /^n/i, /^d/i]
}, bx = {
  narrow: /^[smtofl]/i,
  short: /^(sø|ma|ti|on|to|fr|lø)/i,
  abbreviated: /^(søn|man|tir|ons|tor|fre|lør)/i,
  wide: /^(søndag|mandag|tirsdag|onsdag|torsdag|fredag|lørdag)/i
}, wx = {
  any: [/^s/i, /^m/i, /^ti/i, /^o/i, /^to/i, /^f/i, /^l/i]
}, Px = {
  narrow: /^(midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten)|[ap])/i,
  any: /^([ap]\.?\s?m\.?|midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten))/i
}, Mx = {
  any: {
    am: /^a(\.?\s?m\.?)?$/i,
    pm: /^p(\.?\s?m\.?)?$/i,
    midnight: /^midn/i,
    noon: /^midd/i,
    morning: /morgen/i,
    afternoon: /ettermiddag/i,
    evening: /kveld/i,
    night: /natt/i
  }
}, _x = {
  ordinalNumber: xe({
    matchPattern: cx,
    parsePattern: fx,
    valueCallback: function(n) {
      return parseInt(n, 10);
    }
  }),
  era: D({
    matchPatterns: mx,
    defaultMatchWidth: "wide",
    parsePatterns: hx,
    defaultParseWidth: "any"
  }),
  quarter: D({
    matchPatterns: vx,
    defaultMatchWidth: "wide",
    parsePatterns: px,
    defaultParseWidth: "any",
    valueCallback: function(n) {
      return n + 1;
    }
  }),
  month: D({
    matchPatterns: gx,
    defaultMatchWidth: "wide",
    parsePatterns: yx,
    defaultParseWidth: "any"
  }),
  day: D({
    matchPatterns: bx,
    defaultMatchWidth: "wide",
    parsePatterns: wx,
    defaultParseWidth: "any"
  }),
  dayPeriod: D({
    matchPatterns: Px,
    defaultMatchWidth: "any",
    parsePatterns: Mx,
    defaultParseWidth: "any"
  })
};
const $x = _x;
var Tx = {
  code: "nb",
  formatDistance: GW,
  formatLong: QW,
  formatRelative: rx,
  localize: dx,
  match: $x,
  options: {
    weekStartsOn: 1,
    firstWeekContainsDate: 4
  }
};
const kx = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Tx
}, Symbol.toStringTag, { value: "Module" })), Sx = /* @__PURE__ */ be(kx);
var Cx = H && H.__importDefault || function(t) {
  return t && t.__esModule ? t : { default: t };
};
Object.defineProperty(Gu, "__esModule", { value: !0 });
const Dx = Cx(Sx), Wx = {
  name: "nb-NO",
  locale: Dx.default
};
Gu.default = Wx;
var Uu = {}, xx = {
  lessThanXSeconds: {
    one: "minder dan een seconde",
    other: "minder dan {{count}} seconden"
  },
  xSeconds: {
    one: "1 seconde",
    other: "{{count}} seconden"
  },
  halfAMinute: "een halve minuut",
  lessThanXMinutes: {
    one: "minder dan een minuut",
    other: "minder dan {{count}} minuten"
  },
  xMinutes: {
    one: "een minuut",
    other: "{{count}} minuten"
  },
  aboutXHours: {
    one: "ongeveer 1 uur",
    other: "ongeveer {{count}} uur"
  },
  xHours: {
    one: "1 uur",
    other: "{{count}} uur"
  },
  xDays: {
    one: "1 dag",
    other: "{{count}} dagen"
  },
  aboutXWeeks: {
    one: "ongeveer 1 week",
    other: "ongeveer {{count}} weken"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weken"
  },
  aboutXMonths: {
    one: "ongeveer 1 maand",
    other: "ongeveer {{count}} maanden"
  },
  xMonths: {
    one: "1 maand",
    other: "{{count}} maanden"
  },
  aboutXYears: {
    one: "ongeveer 1 jaar",
    other: "ongeveer {{count}} jaar"
  },
  xYears: {
    one: "1 jaar",
    other: "{{count}} jaar"
  },
  overXYears: {
    one: "meer dan 1 jaar",
    other: "meer dan {{count}} jaar"
  },
  almostXYears: {
    one: "bijna 1 jaar",
    other: "bijna {{count}} jaar"
  }
}, Ox = function(n, a, o) {
  var l, d = xx[n];
  return typeof d == "string" ? l = d : a === 1 ? l = d.one : l = d.other.replace("{{count}}", String(a)), o != null && o.addSuffix ? o.comparison && o.comparison > 0 ? "over " + l : l + " geleden" : l;
};
const zx = Ox;
var Ex = {
  full: "EEEE d MMMM y",
  long: "d MMMM y",
  medium: "d MMM y",
  short: "dd-MM-y"
}, jx = {
  full: "HH:mm:ss zzzz",
  long: "HH:mm:ss z",
  medium: "HH:mm:ss",
  short: "HH:mm"
}, Ax = {
  full: "{{date}} 'om' {{time}}",
  long: "{{date}} 'om' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, Fx = {
  date: L({
    formats: Ex,
    defaultWidth: "full"
  }),
  time: L({
    formats: jx,
    defaultWidth: "full"
  }),
  dateTime: L({
    formats: Ax,
    defaultWidth: "full"
  })
};
const Ix = Fx;
var Nx = {
  lastWeek: "'afgelopen' eeee 'om' p",
  yesterday: "'gisteren om' p",
  today: "'vandaag om' p",
  tomorrow: "'morgen om' p",
  nextWeek: "eeee 'om' p",
  other: "P"
}, Hx = function(n, a, o, l) {
  return Nx[n];
};
const Rx = Hx;
var Lx = {
  narrow: ["v.C.", "n.C."],
  abbreviated: ["v.Chr.", "n.Chr."],
  wide: ["voor Christus", "na Christus"]
}, Bx = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["K1", "K2", "K3", "K4"],
  wide: ["1e kwartaal", "2e kwartaal", "3e kwartaal", "4e kwartaal"]
}, Vx = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: ["jan.", "feb.", "mrt.", "apr.", "mei", "jun.", "jul.", "aug.", "sep.", "okt.", "nov.", "dec."],
  wide: ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"]
}, qx = {
  narrow: ["Z", "M", "D", "W", "D", "V", "Z"],
  short: ["zo", "ma", "di", "wo", "do", "vr", "za"],
  abbreviated: ["zon", "maa", "din", "woe", "don", "vri", "zat"],
  wide: ["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"]
}, Xx = {
  narrow: {
    am: "AM",
    pm: "PM",
    midnight: "middernacht",
    noon: "het middaguur",
    morning: "'s ochtends",
    afternoon: "'s middags",
    evening: "'s avonds",
    night: "'s nachts"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "middernacht",
    noon: "het middaguur",
    morning: "'s ochtends",
    afternoon: "'s middags",
    evening: "'s avonds",
    night: "'s nachts"
  },
  wide: {
    am: "AM",
    pm: "PM",
    midnight: "middernacht",
    noon: "het middaguur",
    morning: "'s ochtends",
    afternoon: "'s middags",
    evening: "'s avonds",
    night: "'s nachts"
  }
}, Kx = function(n, a) {
  var o = Number(n);
  return o + "e";
}, Gx = {
  ordinalNumber: Kx,
  era: C({
    values: Lx,
    defaultWidth: "wide"
  }),
  quarter: C({
    values: Bx,
    defaultWidth: "wide",
    argumentCallback: function(n) {
      return n - 1;
    }
  }),
  month: C({
    values: Vx,
    defaultWidth: "wide"
  }),
  day: C({
    values: qx,
    defaultWidth: "wide"
  }),
  dayPeriod: C({
    values: Xx,
    defaultWidth: "wide"
  })
};
const Ux = Gx;
var Yx = /^(\d+)e?/i, Zx = /\d+/i, Jx = {
  narrow: /^([vn]\.? ?C\.?)/,
  abbreviated: /^([vn]\. ?Chr\.?)/,
  wide: /^((voor|na) Christus)/
}, Qx = {
  any: [/^v/, /^n/]
}, eO = {
  narrow: /^[1234]/i,
  abbreviated: /^K[1234]/i,
  wide: /^[1234]e kwartaal/i
}, tO = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, rO = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan.|feb.|mrt.|apr.|mei|jun.|jul.|aug.|sep.|okt.|nov.|dec.)/i,
  wide: /^(januari|februari|maart|april|mei|juni|juli|augustus|september|oktober|november|december)/i
}, nO = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^jan/i, /^feb/i, /^m(r|a)/i, /^apr/i, /^mei/i, /^jun/i, /^jul/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i]
}, aO = {
  narrow: /^[zmdwv]/i,
  short: /^(zo|ma|di|wo|do|vr|za)/i,
  abbreviated: /^(zon|maa|din|woe|don|vri|zat)/i,
  wide: /^(zondag|maandag|dinsdag|woensdag|donderdag|vrijdag|zaterdag)/i
}, iO = {
  narrow: [/^z/i, /^m/i, /^d/i, /^w/i, /^d/i, /^v/i, /^z/i],
  any: [/^zo/i, /^ma/i, /^di/i, /^wo/i, /^do/i, /^vr/i, /^za/i]
}, oO = {
  any: /^(am|pm|middernacht|het middaguur|'s (ochtends|middags|avonds|nachts))/i
}, lO = {
  any: {
    am: /^am/i,
    pm: /^pm/i,
    midnight: /^middernacht/i,
    noon: /^het middaguur/i,
    morning: /ochtend/i,
    afternoon: /middag/i,
    evening: /avond/i,
    night: /nacht/i
  }
}, uO = {
  ordinalNumber: xe({
    matchPattern: Yx,
    parsePattern: Zx,
    valueCallback: function(n) {
      return parseInt(n, 10);
    }
  }),
  era: D({
    matchPatterns: Jx,
    defaultMatchWidth: "wide",
    parsePatterns: Qx,
    defaultParseWidth: "any"
  }),
  quarter: D({
    matchPatterns: eO,
    defaultMatchWidth: "wide",
    parsePatterns: tO,
    defaultParseWidth: "any",
    valueCallback: function(n) {
      return n + 1;
    }
  }),
  month: D({
    matchPatterns: rO,
    defaultMatchWidth: "wide",
    parsePatterns: nO,
    defaultParseWidth: "any"
  }),
  day: D({
    matchPatterns: aO,
    defaultMatchWidth: "wide",
    parsePatterns: iO,
    defaultParseWidth: "any"
  }),
  dayPeriod: D({
    matchPatterns: oO,
    defaultMatchWidth: "any",
    parsePatterns: lO,
    defaultParseWidth: "any"
  })
};
const sO = uO;
var dO = {
  code: "nl",
  formatDistance: zx,
  formatLong: Ix,
  formatRelative: Rx,
  localize: Ux,
  match: sO,
  options: {
    weekStartsOn: 1,
    firstWeekContainsDate: 4
  }
};
const cO = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: dO
}, Symbol.toStringTag, { value: "Module" })), fO = /* @__PURE__ */ be(cO);
var mO = H && H.__importDefault || function(t) {
  return t && t.__esModule ? t : { default: t };
};
Object.defineProperty(Uu, "__esModule", { value: !0 });
const hO = mO(fO), vO = {
  name: "nl-NL",
  locale: hO.default
};
Uu.default = vO;
var Yu = {}, pO = {
  lessThanXSeconds: {
    one: "moins d’une seconde",
    other: "moins de {{count}} secondes"
  },
  xSeconds: {
    one: "1 seconde",
    other: "{{count}} secondes"
  },
  halfAMinute: "30 secondes",
  lessThanXMinutes: {
    one: "moins d’une minute",
    other: "moins de {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "environ 1 heure",
    other: "environ {{count}} heures"
  },
  xHours: {
    one: "1 heure",
    other: "{{count}} heures"
  },
  xDays: {
    one: "1 jour",
    other: "{{count}} jours"
  },
  aboutXWeeks: {
    one: "environ 1 semaine",
    other: "environ {{count}} semaines"
  },
  xWeeks: {
    one: "1 semaine",
    other: "{{count}} semaines"
  },
  aboutXMonths: {
    one: "environ 1 mois",
    other: "environ {{count}} mois"
  },
  xMonths: {
    one: "1 mois",
    other: "{{count}} mois"
  },
  aboutXYears: {
    one: "environ 1 an",
    other: "environ {{count}} ans"
  },
  xYears: {
    one: "1 an",
    other: "{{count}} ans"
  },
  overXYears: {
    one: "plus d’un an",
    other: "plus de {{count}} ans"
  },
  almostXYears: {
    one: "presqu’un an",
    other: "presque {{count}} ans"
  }
}, gO = function(n, a, o) {
  var l, d = pO[n];
  return typeof d == "string" ? l = d : a === 1 ? l = d.one : l = d.other.replace("{{count}}", String(a)), o != null && o.addSuffix ? o.comparison && o.comparison > 0 ? "dans " + l : "il y a " + l : l;
};
const yO = gO;
var bO = {
  full: "EEEE d MMMM y",
  long: "d MMMM y",
  medium: "d MMM y",
  short: "dd/MM/y"
}, wO = {
  full: "HH:mm:ss zzzz",
  long: "HH:mm:ss z",
  medium: "HH:mm:ss",
  short: "HH:mm"
}, PO = {
  full: "{{date}} 'à' {{time}}",
  long: "{{date}} 'à' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, MO = {
  date: L({
    formats: bO,
    defaultWidth: "full"
  }),
  time: L({
    formats: wO,
    defaultWidth: "full"
  }),
  dateTime: L({
    formats: PO,
    defaultWidth: "full"
  })
};
const _O = MO;
var $O = {
  lastWeek: "eeee 'dernier à' p",
  yesterday: "'hier à' p",
  today: "'aujourd’hui à' p",
  tomorrow: "'demain à' p'",
  nextWeek: "eeee 'prochain à' p",
  other: "P"
}, TO = function(n, a, o, l) {
  return $O[n];
};
const kO = TO;
var SO = {
  narrow: ["av. J.-C", "ap. J.-C"],
  abbreviated: ["av. J.-C", "ap. J.-C"],
  wide: ["avant Jésus-Christ", "après Jésus-Christ"]
}, CO = {
  narrow: ["T1", "T2", "T3", "T4"],
  abbreviated: ["1er trim.", "2ème trim.", "3ème trim.", "4ème trim."],
  wide: ["1er trimestre", "2ème trimestre", "3ème trimestre", "4ème trimestre"]
}, DO = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: ["janv.", "févr.", "mars", "avr.", "mai", "juin", "juil.", "août", "sept.", "oct.", "nov.", "déc."],
  wide: ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"]
}, WO = {
  narrow: ["D", "L", "M", "M", "J", "V", "S"],
  short: ["di", "lu", "ma", "me", "je", "ve", "sa"],
  abbreviated: ["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."],
  wide: ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"]
}, xO = {
  narrow: {
    am: "AM",
    pm: "PM",
    midnight: "minuit",
    noon: "midi",
    morning: "mat.",
    afternoon: "ap.m.",
    evening: "soir",
    night: "mat."
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "minuit",
    noon: "midi",
    morning: "matin",
    afternoon: "après-midi",
    evening: "soir",
    night: "matin"
  },
  wide: {
    am: "AM",
    pm: "PM",
    midnight: "minuit",
    noon: "midi",
    morning: "du matin",
    afternoon: "de l’après-midi",
    evening: "du soir",
    night: "du matin"
  }
}, OO = function(n, a) {
  var o = Number(n), l = a == null ? void 0 : a.unit;
  if (o === 0)
    return "0";
  var d = ["year", "week", "hour", "minute", "second"], m;
  return o === 1 ? m = l && d.includes(l) ? "ère" : "er" : m = "ème", o + m;
}, zO = {
  ordinalNumber: OO,
  era: C({
    values: SO,
    defaultWidth: "wide"
  }),
  quarter: C({
    values: CO,
    defaultWidth: "wide",
    argumentCallback: function(n) {
      return n - 1;
    }
  }),
  month: C({
    values: DO,
    defaultWidth: "wide"
  }),
  day: C({
    values: WO,
    defaultWidth: "wide"
  }),
  dayPeriod: C({
    values: xO,
    defaultWidth: "wide"
  })
};
const EO = zO;
var jO = /^(\d+)(ième|ère|ème|er|e)?/i, AO = /\d+/i, FO = {
  narrow: /^(av\.J\.C|ap\.J\.C|ap\.J\.-C)/i,
  abbreviated: /^(av\.J\.-C|av\.J-C|apr\.J\.-C|apr\.J-C|ap\.J-C)/i,
  wide: /^(avant Jésus-Christ|après Jésus-Christ)/i
}, IO = {
  any: [/^av/i, /^ap/i]
}, NO = {
  narrow: /^T?[1234]/i,
  abbreviated: /^[1234](er|ème|e)? trim\.?/i,
  wide: /^[1234](er|ème|e)? trimestre/i
}, HO = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, RO = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(janv|févr|mars|avr|mai|juin|juill|juil|août|sept|oct|nov|déc)\.?/i,
  wide: /^(janvier|février|mars|avril|mai|juin|juillet|août|septembre|octobre|novembre|décembre)/i
}, LO = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^av/i, /^ma/i, /^juin/i, /^juil/i, /^ao/i, /^s/i, /^o/i, /^n/i, /^d/i]
}, BO = {
  narrow: /^[lmjvsd]/i,
  short: /^(di|lu|ma|me|je|ve|sa)/i,
  abbreviated: /^(dim|lun|mar|mer|jeu|ven|sam)\.?/i,
  wide: /^(dimanche|lundi|mardi|mercredi|jeudi|vendredi|samedi)/i
}, VO = {
  narrow: [/^d/i, /^l/i, /^m/i, /^m/i, /^j/i, /^v/i, /^s/i],
  any: [/^di/i, /^lu/i, /^ma/i, /^me/i, /^je/i, /^ve/i, /^sa/i]
}, qO = {
  narrow: /^(a|p|minuit|midi|mat\.?|ap\.?m\.?|soir|nuit)/i,
  any: /^([ap]\.?\s?m\.?|du matin|de l'après[-\s]midi|du soir|de la nuit)/i
}, XO = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^min/i,
    noon: /^mid/i,
    morning: /mat/i,
    afternoon: /ap/i,
    evening: /soir/i,
    night: /nuit/i
  }
}, KO = {
  ordinalNumber: xe({
    matchPattern: jO,
    parsePattern: AO,
    valueCallback: function(n) {
      return parseInt(n);
    }
  }),
  era: D({
    matchPatterns: FO,
    defaultMatchWidth: "wide",
    parsePatterns: IO,
    defaultParseWidth: "any"
  }),
  quarter: D({
    matchPatterns: NO,
    defaultMatchWidth: "wide",
    parsePatterns: HO,
    defaultParseWidth: "any",
    valueCallback: function(n) {
      return n + 1;
    }
  }),
  month: D({
    matchPatterns: RO,
    defaultMatchWidth: "wide",
    parsePatterns: LO,
    defaultParseWidth: "any"
  }),
  day: D({
    matchPatterns: BO,
    defaultMatchWidth: "wide",
    parsePatterns: VO,
    defaultParseWidth: "any"
  }),
  dayPeriod: D({
    matchPatterns: qO,
    defaultMatchWidth: "any",
    parsePatterns: XO,
    defaultParseWidth: "any"
  })
};
const GO = KO;
var UO = {
  code: "fr",
  formatDistance: yO,
  formatLong: _O,
  formatRelative: kO,
  localize: EO,
  match: GO,
  options: {
    weekStartsOn: 1,
    firstWeekContainsDate: 4
  }
};
const YO = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: UO
}, Symbol.toStringTag, { value: "Module" })), ZO = /* @__PURE__ */ be(YO);
var JO = H && H.__importDefault || function(t) {
  return t && t.__esModule ? t : { default: t };
};
Object.defineProperty(Yu, "__esModule", { value: !0 });
const QO = JO(ZO), ez = {
  name: "fr-FR",
  locale: QO.default
};
Yu.default = ez;
var Zu = {}, tz = {
  lessThanXSeconds: {
    one: "menos de un segundo",
    other: "menos de {{count}} segundos"
  },
  xSeconds: {
    one: "1 segundo",
    other: "{{count}} segundos"
  },
  halfAMinute: "medio minuto",
  lessThanXMinutes: {
    one: "menos de un minuto",
    other: "menos de {{count}} minutos"
  },
  xMinutes: {
    one: "1 minuto",
    other: "{{count}} minutos"
  },
  aboutXHours: {
    one: "alrededor de 1 hora",
    other: "alrededor de {{count}} horas"
  },
  xHours: {
    one: "1 hora",
    other: "{{count}} horas"
  },
  xDays: {
    one: "1 día",
    other: "{{count}} días"
  },
  aboutXWeeks: {
    one: "alrededor de 1 semana",
    other: "alrededor de {{count}} semanas"
  },
  xWeeks: {
    one: "1 semana",
    other: "{{count}} semanas"
  },
  aboutXMonths: {
    one: "alrededor de 1 mes",
    other: "alrededor de {{count}} meses"
  },
  xMonths: {
    one: "1 mes",
    other: "{{count}} meses"
  },
  aboutXYears: {
    one: "alrededor de 1 año",
    other: "alrededor de {{count}} años"
  },
  xYears: {
    one: "1 año",
    other: "{{count}} años"
  },
  overXYears: {
    one: "más de 1 año",
    other: "más de {{count}} años"
  },
  almostXYears: {
    one: "casi 1 año",
    other: "casi {{count}} años"
  }
}, rz = function(n, a, o) {
  var l, d = tz[n];
  return typeof d == "string" ? l = d : a === 1 ? l = d.one : l = d.other.replace("{{count}}", a.toString()), o != null && o.addSuffix ? o.comparison && o.comparison > 0 ? "en " + l : "hace " + l : l;
};
const nz = rz;
var az = {
  full: "EEEE, d 'de' MMMM 'de' y",
  long: "d 'de' MMMM 'de' y",
  medium: "d MMM y",
  short: "dd/MM/y"
}, iz = {
  full: "HH:mm:ss zzzz",
  long: "HH:mm:ss z",
  medium: "HH:mm:ss",
  short: "HH:mm"
}, oz = {
  full: "{{date}} 'a las' {{time}}",
  long: "{{date}} 'a las' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, lz = {
  date: L({
    formats: az,
    defaultWidth: "full"
  }),
  time: L({
    formats: iz,
    defaultWidth: "full"
  }),
  dateTime: L({
    formats: oz,
    defaultWidth: "full"
  })
};
const uz = lz;
var sz = {
  lastWeek: "'el' eeee 'pasado a la' p",
  yesterday: "'ayer a la' p",
  today: "'hoy a la' p",
  tomorrow: "'mañana a la' p",
  nextWeek: "eeee 'a la' p",
  other: "P"
}, dz = {
  lastWeek: "'el' eeee 'pasado a las' p",
  yesterday: "'ayer a las' p",
  today: "'hoy a las' p",
  tomorrow: "'mañana a las' p",
  nextWeek: "eeee 'a las' p",
  other: "P"
}, cz = function(n, a, o, l) {
  return a.getUTCHours() !== 1 ? dz[n] : sz[n];
};
const fz = cz;
var mz = {
  narrow: ["AC", "DC"],
  abbreviated: ["AC", "DC"],
  wide: ["antes de cristo", "después de cristo"]
}, hz = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["T1", "T2", "T3", "T4"],
  wide: ["1º trimestre", "2º trimestre", "3º trimestre", "4º trimestre"]
}, vz = {
  narrow: ["e", "f", "m", "a", "m", "j", "j", "a", "s", "o", "n", "d"],
  abbreviated: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"],
  wide: ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"]
}, pz = {
  narrow: ["d", "l", "m", "m", "j", "v", "s"],
  short: ["do", "lu", "ma", "mi", "ju", "vi", "sá"],
  abbreviated: ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"],
  wide: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"]
}, gz = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mn",
    noon: "md",
    morning: "mañana",
    afternoon: "tarde",
    evening: "tarde",
    night: "noche"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "medianoche",
    noon: "mediodia",
    morning: "mañana",
    afternoon: "tarde",
    evening: "tarde",
    night: "noche"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "medianoche",
    noon: "mediodia",
    morning: "mañana",
    afternoon: "tarde",
    evening: "tarde",
    night: "noche"
  }
}, yz = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mn",
    noon: "md",
    morning: "de la mañana",
    afternoon: "de la tarde",
    evening: "de la tarde",
    night: "de la noche"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "medianoche",
    noon: "mediodia",
    morning: "de la mañana",
    afternoon: "de la tarde",
    evening: "de la tarde",
    night: "de la noche"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "medianoche",
    noon: "mediodia",
    morning: "de la mañana",
    afternoon: "de la tarde",
    evening: "de la tarde",
    night: "de la noche"
  }
}, bz = function(n, a) {
  var o = Number(n);
  return o + "º";
}, wz = {
  ordinalNumber: bz,
  era: C({
    values: mz,
    defaultWidth: "wide"
  }),
  quarter: C({
    values: hz,
    defaultWidth: "wide",
    argumentCallback: function(n) {
      return Number(n) - 1;
    }
  }),
  month: C({
    values: vz,
    defaultWidth: "wide"
  }),
  day: C({
    values: pz,
    defaultWidth: "wide"
  }),
  dayPeriod: C({
    values: gz,
    defaultWidth: "wide",
    formattingValues: yz,
    defaultFormattingWidth: "wide"
  })
};
const Pz = wz;
var Mz = /^(\d+)(º)?/i, _z = /\d+/i, $z = {
  narrow: /^(ac|dc|a|d)/i,
  abbreviated: /^(a\.?\s?c\.?|a\.?\s?e\.?\s?c\.?|d\.?\s?c\.?|e\.?\s?c\.?)/i,
  wide: /^(antes de cristo|antes de la era com[uú]n|despu[eé]s de cristo|era com[uú]n)/i
}, Tz = {
  any: [/^ac/i, /^dc/i],
  wide: [/^(antes de cristo|antes de la era com[uú]n)/i, /^(despu[eé]s de cristo|era com[uú]n)/i]
}, kz = {
  narrow: /^[1234]/i,
  abbreviated: /^T[1234]/i,
  wide: /^[1234](º)? trimestre/i
}, Sz = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Cz = {
  narrow: /^[efmajsond]/i,
  abbreviated: /^(ene|feb|mar|abr|may|jun|jul|ago|sep|oct|nov|dic)/i,
  wide: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i
}, Dz = {
  narrow: [/^e/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^en/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i]
}, Wz = {
  narrow: /^[dlmjvs]/i,
  short: /^(do|lu|ma|mi|ju|vi|s[áa])/i,
  abbreviated: /^(dom|lun|mar|mi[ée]|jue|vie|s[áa]b)/i,
  wide: /^(domingo|lunes|martes|mi[ée]rcoles|jueves|viernes|s[áa]bado)/i
}, xz = {
  narrow: [/^d/i, /^l/i, /^m/i, /^m/i, /^j/i, /^v/i, /^s/i],
  any: [/^do/i, /^lu/i, /^ma/i, /^mi/i, /^ju/i, /^vi/i, /^sa/i]
}, Oz = {
  narrow: /^(a|p|mn|md|(de la|a las) (mañana|tarde|noche))/i,
  any: /^([ap]\.?\s?m\.?|medianoche|mediodia|(de la|a las) (mañana|tarde|noche))/i
}, zz = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mn/i,
    noon: /^md/i,
    morning: /mañana/i,
    afternoon: /tarde/i,
    evening: /tarde/i,
    night: /noche/i
  }
}, Ez = {
  ordinalNumber: xe({
    matchPattern: Mz,
    parsePattern: _z,
    valueCallback: function(n) {
      return parseInt(n, 10);
    }
  }),
  era: D({
    matchPatterns: $z,
    defaultMatchWidth: "wide",
    parsePatterns: Tz,
    defaultParseWidth: "any"
  }),
  quarter: D({
    matchPatterns: kz,
    defaultMatchWidth: "wide",
    parsePatterns: Sz,
    defaultParseWidth: "any",
    valueCallback: function(n) {
      return n + 1;
    }
  }),
  month: D({
    matchPatterns: Cz,
    defaultMatchWidth: "wide",
    parsePatterns: Dz,
    defaultParseWidth: "any"
  }),
  day: D({
    matchPatterns: Wz,
    defaultMatchWidth: "wide",
    parsePatterns: xz,
    defaultParseWidth: "any"
  }),
  dayPeriod: D({
    matchPatterns: Oz,
    defaultMatchWidth: "any",
    parsePatterns: zz,
    defaultParseWidth: "any"
  })
};
const jz = Ez;
var Az = {
  code: "es",
  formatDistance: nz,
  formatLong: uz,
  formatRelative: fz,
  localize: Pz,
  match: jz,
  options: {
    weekStartsOn: 1,
    firstWeekContainsDate: 1
  }
};
const Fz = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Az
}, Symbol.toStringTag, { value: "Module" })), Iz = /* @__PURE__ */ be(Fz);
var Nz = H && H.__importDefault || function(t) {
  return t && t.__esModule ? t : { default: t };
};
Object.defineProperty(Zu, "__esModule", { value: !0 });
const Hz = Nz(Iz), Rz = {
  name: "es-AR",
  locale: Hz.default
};
Zu.default = Rz;
var Ju = {}, Lz = {
  lessThanXSeconds: {
    one: "meno di un secondo",
    other: "meno di {{count}} secondi"
  },
  xSeconds: {
    one: "un secondo",
    other: "{{count}} secondi"
  },
  halfAMinute: "alcuni secondi",
  lessThanXMinutes: {
    one: "meno di un minuto",
    other: "meno di {{count}} minuti"
  },
  xMinutes: {
    one: "un minuto",
    other: "{{count}} minuti"
  },
  aboutXHours: {
    one: "circa un'ora",
    other: "circa {{count}} ore"
  },
  xHours: {
    one: "un'ora",
    other: "{{count}} ore"
  },
  xDays: {
    one: "un giorno",
    other: "{{count}} giorni"
  },
  aboutXWeeks: {
    one: "circa una settimana",
    other: "circa {{count}} settimane"
  },
  xWeeks: {
    one: "una settimana",
    other: "{{count}} settimane"
  },
  aboutXMonths: {
    one: "circa un mese",
    other: "circa {{count}} mesi"
  },
  xMonths: {
    one: "un mese",
    other: "{{count}} mesi"
  },
  aboutXYears: {
    one: "circa un anno",
    other: "circa {{count}} anni"
  },
  xYears: {
    one: "un anno",
    other: "{{count}} anni"
  },
  overXYears: {
    one: "più di un anno",
    other: "più di {{count}} anni"
  },
  almostXYears: {
    one: "quasi un anno",
    other: "quasi {{count}} anni"
  }
}, Bz = function(n, a, o) {
  var l, d = Lz[n];
  return typeof d == "string" ? l = d : a === 1 ? l = d.one : l = d.other.replace("{{count}}", a.toString()), o != null && o.addSuffix ? o.comparison && o.comparison > 0 ? "tra " + l : l + " fa" : l;
};
const Vz = Bz;
var qz = {
  full: "EEEE d MMMM y",
  long: "d MMMM y",
  medium: "d MMM y",
  short: "dd/MM/y"
}, Xz = {
  full: "HH:mm:ss zzzz",
  long: "HH:mm:ss z",
  medium: "HH:mm:ss",
  short: "HH:mm"
}, Kz = {
  full: "{{date}} {{time}}",
  long: "{{date}} {{time}}",
  medium: "{{date}} {{time}}",
  short: "{{date}} {{time}}"
}, Gz = {
  date: L({
    formats: qz,
    defaultWidth: "full"
  }),
  time: L({
    formats: Xz,
    defaultWidth: "full"
  }),
  dateTime: L({
    formats: Kz,
    defaultWidth: "full"
  })
};
const Uz = Gz;
var Qu = ["domenica", "lunedì", "martedì", "mercoledì", "giovedì", "venerdì", "sabato"];
function Yz(t) {
  switch (t) {
    case 0:
      return "'domenica scorsa alle' p";
    default:
      return "'" + Qu[t] + " scorso alle' p";
  }
}
function qf(t) {
  return "'" + Qu[t] + " alle' p";
}
function Zz(t) {
  switch (t) {
    case 0:
      return "'domenica prossima alle' p";
    default:
      return "'" + Qu[t] + " prossimo alle' p";
  }
}
var Jz = {
  lastWeek: function(n, a, o) {
    var l = n.getUTCDay();
    return Ht(n, a, o) ? qf(l) : Yz(l);
  },
  yesterday: "'ieri alle' p",
  today: "'oggi alle' p",
  tomorrow: "'domani alle' p",
  nextWeek: function(n, a, o) {
    var l = n.getUTCDay();
    return Ht(n, a, o) ? qf(l) : Zz(l);
  },
  other: "P"
}, Qz = function(n, a, o, l) {
  var d = Jz[n];
  return typeof d == "function" ? d(a, o, l) : d;
};
const eE = Qz;
var tE = {
  narrow: ["aC", "dC"],
  abbreviated: ["a.C.", "d.C."],
  wide: ["avanti Cristo", "dopo Cristo"]
}, rE = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["T1", "T2", "T3", "T4"],
  wide: ["1º trimestre", "2º trimestre", "3º trimestre", "4º trimestre"]
}, nE = {
  narrow: ["G", "F", "M", "A", "M", "G", "L", "A", "S", "O", "N", "D"],
  abbreviated: ["gen", "feb", "mar", "apr", "mag", "giu", "lug", "ago", "set", "ott", "nov", "dic"],
  wide: ["gennaio", "febbraio", "marzo", "aprile", "maggio", "giugno", "luglio", "agosto", "settembre", "ottobre", "novembre", "dicembre"]
}, aE = {
  narrow: ["D", "L", "M", "M", "G", "V", "S"],
  short: ["dom", "lun", "mar", "mer", "gio", "ven", "sab"],
  abbreviated: ["dom", "lun", "mar", "mer", "gio", "ven", "sab"],
  wide: ["domenica", "lunedì", "martedì", "mercoledì", "giovedì", "venerdì", "sabato"]
}, iE = {
  narrow: {
    am: "m.",
    pm: "p.",
    midnight: "mezzanotte",
    noon: "mezzogiorno",
    morning: "mattina",
    afternoon: "pomeriggio",
    evening: "sera",
    night: "notte"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "mezzanotte",
    noon: "mezzogiorno",
    morning: "mattina",
    afternoon: "pomeriggio",
    evening: "sera",
    night: "notte"
  },
  wide: {
    am: "AM",
    pm: "PM",
    midnight: "mezzanotte",
    noon: "mezzogiorno",
    morning: "mattina",
    afternoon: "pomeriggio",
    evening: "sera",
    night: "notte"
  }
}, oE = {
  narrow: {
    am: "m.",
    pm: "p.",
    midnight: "mezzanotte",
    noon: "mezzogiorno",
    morning: "di mattina",
    afternoon: "del pomeriggio",
    evening: "di sera",
    night: "di notte"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "mezzanotte",
    noon: "mezzogiorno",
    morning: "di mattina",
    afternoon: "del pomeriggio",
    evening: "di sera",
    night: "di notte"
  },
  wide: {
    am: "AM",
    pm: "PM",
    midnight: "mezzanotte",
    noon: "mezzogiorno",
    morning: "di mattina",
    afternoon: "del pomeriggio",
    evening: "di sera",
    night: "di notte"
  }
}, lE = function(n, a) {
  var o = Number(n);
  return String(o);
}, uE = {
  ordinalNumber: lE,
  era: C({
    values: tE,
    defaultWidth: "wide"
  }),
  quarter: C({
    values: rE,
    defaultWidth: "wide",
    argumentCallback: function(n) {
      return n - 1;
    }
  }),
  month: C({
    values: nE,
    defaultWidth: "wide"
  }),
  day: C({
    values: aE,
    defaultWidth: "wide"
  }),
  dayPeriod: C({
    values: iE,
    defaultWidth: "wide",
    formattingValues: oE,
    defaultFormattingWidth: "wide"
  })
};
const sE = uE;
var dE = /^(\d+)(º)?/i, cE = /\d+/i, fE = {
  narrow: /^(aC|dC)/i,
  abbreviated: /^(a\.?\s?C\.?|a\.?\s?e\.?\s?v\.?|d\.?\s?C\.?|e\.?\s?v\.?)/i,
  wide: /^(avanti Cristo|avanti Era Volgare|dopo Cristo|Era Volgare)/i
}, mE = {
  any: [/^a/i, /^(d|e)/i]
}, hE = {
  narrow: /^[1234]/i,
  abbreviated: /^t[1234]/i,
  wide: /^[1234](º)? trimestre/i
}, vE = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, pE = {
  narrow: /^[gfmalsond]/i,
  abbreviated: /^(gen|feb|mar|apr|mag|giu|lug|ago|set|ott|nov|dic)/i,
  wide: /^(gennaio|febbraio|marzo|aprile|maggio|giugno|luglio|agosto|settembre|ottobre|novembre|dicembre)/i
}, gE = {
  narrow: [/^g/i, /^f/i, /^m/i, /^a/i, /^m/i, /^g/i, /^l/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ge/i, /^f/i, /^mar/i, /^ap/i, /^mag/i, /^gi/i, /^l/i, /^ag/i, /^s/i, /^o/i, /^n/i, /^d/i]
}, yE = {
  narrow: /^[dlmgvs]/i,
  short: /^(do|lu|ma|me|gi|ve|sa)/i,
  abbreviated: /^(dom|lun|mar|mer|gio|ven|sab)/i,
  wide: /^(domenica|luned[i|ì]|marted[i|ì]|mercoled[i|ì]|gioved[i|ì]|venerd[i|ì]|sabato)/i
}, bE = {
  narrow: [/^d/i, /^l/i, /^m/i, /^m/i, /^g/i, /^v/i, /^s/i],
  any: [/^d/i, /^l/i, /^ma/i, /^me/i, /^g/i, /^v/i, /^s/i]
}, wE = {
  narrow: /^(a|m\.|p|mezzanotte|mezzogiorno|(di|del) (mattina|pomeriggio|sera|notte))/i,
  any: /^([ap]\.?\s?m\.?|mezzanotte|mezzogiorno|(di|del) (mattina|pomeriggio|sera|notte))/i
}, PE = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mezza/i,
    noon: /^mezzo/i,
    morning: /mattina/i,
    afternoon: /pomeriggio/i,
    evening: /sera/i,
    night: /notte/i
  }
}, ME = {
  ordinalNumber: xe({
    matchPattern: dE,
    parsePattern: cE,
    valueCallback: function(n) {
      return parseInt(n, 10);
    }
  }),
  era: D({
    matchPatterns: fE,
    defaultMatchWidth: "wide",
    parsePatterns: mE,
    defaultParseWidth: "any"
  }),
  quarter: D({
    matchPatterns: hE,
    defaultMatchWidth: "wide",
    parsePatterns: vE,
    defaultParseWidth: "any",
    valueCallback: function(n) {
      return n + 1;
    }
  }),
  month: D({
    matchPatterns: pE,
    defaultMatchWidth: "wide",
    parsePatterns: gE,
    defaultParseWidth: "any"
  }),
  day: D({
    matchPatterns: yE,
    defaultMatchWidth: "wide",
    parsePatterns: bE,
    defaultParseWidth: "any"
  }),
  dayPeriod: D({
    matchPatterns: wE,
    defaultMatchWidth: "any",
    parsePatterns: PE,
    defaultParseWidth: "any"
  })
};
const _E = ME;
var $E = {
  code: "it",
  formatDistance: Vz,
  formatLong: Uz,
  formatRelative: eE,
  localize: sE,
  match: _E,
  options: {
    weekStartsOn: 1,
    firstWeekContainsDate: 4
  }
};
const TE = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $E
}, Symbol.toStringTag, { value: "Module" })), kE = /* @__PURE__ */ be(TE);
var SE = H && H.__importDefault || function(t) {
  return t && t.__esModule ? t : { default: t };
};
Object.defineProperty(Ju, "__esModule", { value: !0 });
const CE = SE(kE), DE = {
  name: "it-IT",
  locale: CE.default
};
Ju.default = DE;
var es = {};
function WE(t, n) {
  return n === 1 && t.one ? t.one : n >= 2 && n <= 4 && t.twoFour ? t.twoFour : t.other;
}
function Dl(t, n, a) {
  var o = WE(t, n), l = o[a];
  return l.replace("{{count}}", String(n));
}
function xE(t) {
  var n = ["lessThan", "about", "over", "almost"].filter(function(a) {
    return !!t.match(new RegExp("^" + a));
  });
  return n[0];
}
function Wl(t) {
  var n = "";
  return t === "almost" && (n = "takmer"), t === "about" && (n = "približne"), n.length > 0 ? n + " " : "";
}
function xl(t) {
  var n = "";
  return t === "lessThan" && (n = "menej než"), t === "over" && (n = "viac než"), n.length > 0 ? n + " " : "";
}
function OE(t) {
  return t.charAt(0).toLowerCase() + t.slice(1);
}
var zE = {
  xSeconds: {
    one: {
      present: "sekunda",
      past: "sekundou",
      future: "sekundu"
    },
    twoFour: {
      present: "{{count}} sekundy",
      past: "{{count}} sekundami",
      future: "{{count}} sekundy"
    },
    other: {
      present: "{{count}} sekúnd",
      past: "{{count}} sekundami",
      future: "{{count}} sekúnd"
    }
  },
  halfAMinute: {
    other: {
      present: "pol minúty",
      past: "pol minútou",
      future: "pol minúty"
    }
  },
  xMinutes: {
    one: {
      present: "minúta",
      past: "minútou",
      future: "minútu"
    },
    twoFour: {
      present: "{{count}} minúty",
      past: "{{count}} minútami",
      future: "{{count}} minúty"
    },
    other: {
      present: "{{count}} minút",
      past: "{{count}} minútami",
      future: "{{count}} minút"
    }
  },
  xHours: {
    one: {
      present: "hodina",
      past: "hodinou",
      future: "hodinu"
    },
    twoFour: {
      present: "{{count}} hodiny",
      past: "{{count}} hodinami",
      future: "{{count}} hodiny"
    },
    other: {
      present: "{{count}} hodín",
      past: "{{count}} hodinami",
      future: "{{count}} hodín"
    }
  },
  xDays: {
    one: {
      present: "deň",
      past: "dňom",
      future: "deň"
    },
    twoFour: {
      present: "{{count}} dni",
      past: "{{count}} dňami",
      future: "{{count}} dni"
    },
    other: {
      present: "{{count}} dní",
      past: "{{count}} dňami",
      future: "{{count}} dní"
    }
  },
  xWeeks: {
    one: {
      present: "týždeň",
      past: "týždňom",
      future: "týždeň"
    },
    twoFour: {
      present: "{{count}} týždne",
      past: "{{count}} týždňami",
      future: "{{count}} týždne"
    },
    other: {
      present: "{{count}} týždňov",
      past: "{{count}} týždňami",
      future: "{{count}} týždňov"
    }
  },
  xMonths: {
    one: {
      present: "mesiac",
      past: "mesiacom",
      future: "mesiac"
    },
    twoFour: {
      present: "{{count}} mesiace",
      past: "{{count}} mesiacmi",
      future: "{{count}} mesiace"
    },
    other: {
      present: "{{count}} mesiacov",
      past: "{{count}} mesiacmi",
      future: "{{count}} mesiacov"
    }
  },
  xYears: {
    one: {
      present: "rok",
      past: "rokom",
      future: "rok"
    },
    twoFour: {
      present: "{{count}} roky",
      past: "{{count}} rokmi",
      future: "{{count}} roky"
    },
    other: {
      present: "{{count}} rokov",
      past: "{{count}} rokmi",
      future: "{{count}} rokov"
    }
  }
}, EE = function(n, a, o) {
  var l = xE(n) || "", d = OE(n.substring(l.length)), m = zE[d];
  return o != null && o.addSuffix ? o.comparison && o.comparison > 0 ? Wl(l) + "o " + xl(l) + Dl(m, a, "future") : Wl(l) + "pred " + xl(l) + Dl(m, a, "past") : Wl(l) + xl(l) + Dl(m, a, "present");
};
const jE = EE;
var AE = {
  full: "EEEE d. MMMM y",
  long: "d. MMMM y",
  medium: "d. M. y",
  short: "d. M. y"
}, FE = {
  full: "H:mm:ss zzzz",
  long: "H:mm:ss z",
  medium: "H:mm:ss",
  short: "H:mm"
}, IE = {
  full: "{{date}}, {{time}}",
  long: "{{date}}, {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}} {{time}}"
}, NE = {
  date: L({
    formats: AE,
    defaultWidth: "full"
  }),
  time: L({
    formats: FE,
    defaultWidth: "full"
  }),
  dateTime: L({
    formats: IE,
    defaultWidth: "full"
  })
};
const HE = NE;
var ts = ["nedeľu", "pondelok", "utorok", "stredu", "štvrtok", "piatok", "sobotu"];
function RE(t) {
  var n = ts[t];
  switch (t) {
    case 0:
    case 3:
    case 6:
      return "'minulú " + n + " o' p";
    default:
      return "'minulý' eeee 'o' p";
  }
}
function Xf(t) {
  var n = ts[t];
  return t === 4 ? "'vo' eeee 'o' p" : "'v " + n + " o' p";
}
function LE(t) {
  var n = ts[t];
  switch (t) {
    case 0:
    case 4:
    case 6:
      return "'budúcu " + n + " o' p";
    default:
      return "'budúci' eeee 'o' p";
  }
}
var BE = {
  lastWeek: function(n, a, o) {
    var l = n.getUTCDay();
    return Ht(n, a, o) ? Xf(l) : RE(l);
  },
  yesterday: "'včera o' p",
  today: "'dnes o' p",
  tomorrow: "'zajtra o' p",
  nextWeek: function(n, a, o) {
    var l = n.getUTCDay();
    return Ht(n, a, o) ? Xf(l) : LE(l);
  },
  other: "P"
}, VE = function(n, a, o, l) {
  var d = BE[n];
  return typeof d == "function" ? d(a, o, l) : d;
};
const qE = VE;
var XE = {
  narrow: ["pred Kr.", "po Kr."],
  abbreviated: ["pred Kr.", "po Kr."],
  wide: ["pred Kristom", "po Kristovi"]
}, KE = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1. štvrťrok", "2. štvrťrok", "3. štvrťrok", "4. štvrťrok"]
}, GE = {
  narrow: ["j", "f", "m", "a", "m", "j", "j", "a", "s", "o", "n", "d"],
  abbreviated: ["jan", "feb", "mar", "apr", "máj", "jún", "júl", "aug", "sep", "okt", "nov", "dec"],
  wide: ["január", "február", "marec", "apríl", "máj", "jún", "júl", "august", "september", "október", "november", "december"]
}, UE = {
  narrow: ["j", "f", "m", "a", "m", "j", "j", "a", "s", "o", "n", "d"],
  abbreviated: ["jan", "feb", "mar", "apr", "máj", "jún", "júl", "aug", "sep", "okt", "nov", "dec"],
  wide: ["januára", "februára", "marca", "apríla", "mája", "júna", "júla", "augusta", "septembra", "októbra", "novembra", "decembra"]
}, YE = {
  narrow: ["n", "p", "u", "s", "š", "p", "s"],
  short: ["ne", "po", "ut", "st", "št", "pi", "so"],
  abbreviated: ["ne", "po", "ut", "st", "št", "pi", "so"],
  wide: ["nedeľa", "pondelok", "utorok", "streda", "štvrtok", "piatok", "sobota"]
}, ZE = {
  narrow: {
    am: "AM",
    pm: "PM",
    midnight: "poln.",
    noon: "pol.",
    morning: "ráno",
    afternoon: "pop.",
    evening: "več.",
    night: "noc"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "poln.",
    noon: "pol.",
    morning: "ráno",
    afternoon: "popol.",
    evening: "večer",
    night: "noc"
  },
  wide: {
    am: "AM",
    pm: "PM",
    midnight: "polnoc",
    noon: "poludnie",
    morning: "ráno",
    afternoon: "popoludnie",
    evening: "večer",
    night: "noc"
  }
}, JE = {
  narrow: {
    am: "AM",
    pm: "PM",
    midnight: "o poln.",
    noon: "nap.",
    morning: "ráno",
    afternoon: "pop.",
    evening: "več.",
    night: "v n."
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "o poln.",
    noon: "napol.",
    morning: "ráno",
    afternoon: "popol.",
    evening: "večer",
    night: "v noci"
  },
  wide: {
    am: "AM",
    pm: "PM",
    midnight: "o polnoci",
    noon: "napoludnie",
    morning: "ráno",
    afternoon: "popoludní",
    evening: "večer",
    night: "v noci"
  }
}, QE = function(n, a) {
  var o = Number(n);
  return o + ".";
}, ej = {
  ordinalNumber: QE,
  era: C({
    values: XE,
    defaultWidth: "wide"
  }),
  quarter: C({
    values: KE,
    defaultWidth: "wide",
    argumentCallback: function(n) {
      return n - 1;
    }
  }),
  month: C({
    values: GE,
    defaultWidth: "wide",
    formattingValues: UE,
    defaultFormattingWidth: "wide"
  }),
  day: C({
    values: YE,
    defaultWidth: "wide"
  }),
  dayPeriod: C({
    values: ZE,
    defaultWidth: "wide",
    formattingValues: JE,
    defaultFormattingWidth: "wide"
  })
};
const tj = ej;
var rj = /^(\d+)\.?/i, nj = /\d+/i, aj = {
  narrow: /^(pred Kr\.|pred n\. l\.|po Kr\.|n\. l\.)/i,
  abbreviated: /^(pred Kr\.|pred n\. l\.|po Kr\.|n\. l\.)/i,
  wide: /^(pred Kristom|pred na[šs][íi]m letopo[čc]tom|po Kristovi|n[áa][šs]ho letopo[čc]tu)/i
}, ij = {
  any: [/^pr/i, /^(po|n)/i]
}, oj = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234]\. [šs]tvr[ťt]rok/i
}, lj = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, uj = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|m[áa]j|j[úu]n|j[úu]l|aug|sep|okt|nov|dec)/i,
  wide: /^(janu[áa]ra?|febru[áa]ra?|(marec|marca)|apr[íi]la?|m[áa]ja?|j[úu]na?|j[úu]la?|augusta?|(september|septembra)|(okt[óo]ber|okt[óo]bra)|(november|novembra)|(december|decembra))/i
}, sj = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^m[áa]j/i, /^j[úu]n/i, /^j[úu]l/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
}, dj = {
  narrow: /^[npusšp]/i,
  short: /^(ne|po|ut|st|št|pi|so)/i,
  abbreviated: /^(ne|po|ut|st|št|pi|so)/i,
  wide: /^(nede[ľl]a|pondelok|utorok|streda|[šs]tvrtok|piatok|sobota])/i
}, cj = {
  narrow: [/^n/i, /^p/i, /^u/i, /^s/i, /^š/i, /^p/i, /^s/i],
  any: [/^n/i, /^po/i, /^u/i, /^st/i, /^(št|stv)/i, /^pi/i, /^so/i]
}, fj = {
  narrow: /^(am|pm|(o )?poln\.?|(nap\.?|pol\.?)|r[áa]no|pop\.?|ve[čc]\.?|(v n\.?|noc))/i,
  abbreviated: /^(am|pm|(o )?poln\.?|(napol\.?|pol\.?)|r[áa]no|pop\.?|ve[čc]er|(v )?noci?)/i,
  any: /^(am|pm|(o )?polnoci?|(na)?poludnie|r[áa]no|popoludn(ie|í|i)|ve[čc]er|(v )?noci?)/i
}, mj = {
  any: {
    am: /^am/i,
    pm: /^pm/i,
    midnight: /poln/i,
    noon: /^(nap|(na)?pol(\.|u))/i,
    morning: /^r[áa]no/i,
    afternoon: /^pop/i,
    evening: /^ve[čc]/i,
    night: /^(noc|v n\.)/i
  }
}, hj = {
  ordinalNumber: xe({
    matchPattern: rj,
    parsePattern: nj,
    valueCallback: function(n) {
      return parseInt(n, 10);
    }
  }),
  era: D({
    matchPatterns: aj,
    defaultMatchWidth: "wide",
    parsePatterns: ij,
    defaultParseWidth: "any"
  }),
  quarter: D({
    matchPatterns: oj,
    defaultMatchWidth: "wide",
    parsePatterns: lj,
    defaultParseWidth: "any",
    valueCallback: function(n) {
      return n + 1;
    }
  }),
  month: D({
    matchPatterns: uj,
    defaultMatchWidth: "wide",
    parsePatterns: sj,
    defaultParseWidth: "any"
  }),
  day: D({
    matchPatterns: dj,
    defaultMatchWidth: "wide",
    parsePatterns: cj,
    defaultParseWidth: "any"
  }),
  dayPeriod: D({
    matchPatterns: fj,
    defaultMatchWidth: "any",
    parsePatterns: mj,
    defaultParseWidth: "any"
  })
};
const vj = hj;
var pj = {
  code: "sk",
  formatDistance: jE,
  formatLong: HE,
  formatRelative: qE,
  localize: tj,
  match: vj,
  options: {
    weekStartsOn: 1,
    firstWeekContainsDate: 4
  }
};
const gj = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: pj
}, Symbol.toStringTag, { value: "Module" })), yj = /* @__PURE__ */ be(gj);
var bj = H && H.__importDefault || function(t) {
  return t && t.__esModule ? t : { default: t };
};
Object.defineProperty(es, "__esModule", { value: !0 });
const wj = bj(yj), Pj = {
  name: "sk-SK",
  locale: wj.default
};
es.default = Pj;
var rs = {}, Mj = {
  full: "EEEE, d MMMM yyyy",
  long: "d MMMM yyyy",
  medium: "d MMM yyyy",
  short: "dd/MM/yyyy"
}, _j = {
  full: "HH:mm:ss zzzz",
  long: "HH:mm:ss z",
  medium: "HH:mm:ss",
  short: "HH:mm"
}, $j = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, Tj = {
  date: L({
    formats: Mj,
    defaultWidth: "full"
  }),
  time: L({
    formats: _j,
    defaultWidth: "full"
  }),
  dateTime: L({
    formats: $j,
    defaultWidth: "full"
  })
};
const kj = Tj;
var Sj = {
  code: "en-GB",
  formatDistance: Jm,
  formatLong: kj,
  formatRelative: Qm,
  localize: eh,
  match: th,
  options: {
    weekStartsOn: 1,
    firstWeekContainsDate: 4
  }
};
const Cj = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Sj
}, Symbol.toStringTag, { value: "Module" })), Dj = /* @__PURE__ */ be(Cj);
var Wj = H && H.__importDefault || function(t) {
  return t && t.__esModule ? t : { default: t };
};
Object.defineProperty(rs, "__esModule", { value: !0 });
const xj = Wj(Dj), Oj = {
  name: "en-GB",
  locale: xj.default
};
rs.default = Oj;
var ns = {}, zj = {
  lessThanXSeconds: {
    one: {
      regular: "mniej niż sekunda",
      past: "mniej niż sekundę",
      future: "mniej niż sekundę"
    },
    twoFour: "mniej niż {{count}} sekundy",
    other: "mniej niż {{count}} sekund"
  },
  xSeconds: {
    one: {
      regular: "sekunda",
      past: "sekundę",
      future: "sekundę"
    },
    twoFour: "{{count}} sekundy",
    other: "{{count}} sekund"
  },
  halfAMinute: {
    one: "pół minuty",
    twoFour: "pół minuty",
    other: "pół minuty"
  },
  lessThanXMinutes: {
    one: {
      regular: "mniej niż minuta",
      past: "mniej niż minutę",
      future: "mniej niż minutę"
    },
    twoFour: "mniej niż {{count}} minuty",
    other: "mniej niż {{count}} minut"
  },
  xMinutes: {
    one: {
      regular: "minuta",
      past: "minutę",
      future: "minutę"
    },
    twoFour: "{{count}} minuty",
    other: "{{count}} minut"
  },
  aboutXHours: {
    one: {
      regular: "około godziny",
      past: "około godziny",
      future: "około godzinę"
    },
    twoFour: "około {{count}} godziny",
    other: "około {{count}} godzin"
  },
  xHours: {
    one: {
      regular: "godzina",
      past: "godzinę",
      future: "godzinę"
    },
    twoFour: "{{count}} godziny",
    other: "{{count}} godzin"
  },
  xDays: {
    one: {
      regular: "dzień",
      past: "dzień",
      future: "1 dzień"
    },
    twoFour: "{{count}} dni",
    other: "{{count}} dni"
  },
  aboutXWeeks: {
    one: "około tygodnia",
    twoFour: "około {{count}} tygodni",
    other: "około {{count}} tygodni"
  },
  xWeeks: {
    one: "tydzień",
    twoFour: "{{count}} tygodnie",
    other: "{{count}} tygodni"
  },
  aboutXMonths: {
    one: "około miesiąc",
    twoFour: "około {{count}} miesiące",
    other: "około {{count}} miesięcy"
  },
  xMonths: {
    one: "miesiąc",
    twoFour: "{{count}} miesiące",
    other: "{{count}} miesięcy"
  },
  aboutXYears: {
    one: "około rok",
    twoFour: "około {{count}} lata",
    other: "około {{count}} lat"
  },
  xYears: {
    one: "rok",
    twoFour: "{{count}} lata",
    other: "{{count}} lat"
  },
  overXYears: {
    one: "ponad rok",
    twoFour: "ponad {{count}} lata",
    other: "ponad {{count}} lat"
  },
  almostXYears: {
    one: "prawie rok",
    twoFour: "prawie {{count}} lata",
    other: "prawie {{count}} lat"
  }
};
function Ej(t, n) {
  if (n === 1)
    return t.one;
  var a = n % 100;
  if (a <= 20 && a > 10)
    return t.other;
  var o = a % 10;
  return o >= 2 && o <= 4 ? t.twoFour : t.other;
}
function Ol(t, n, a) {
  var o = Ej(t, n), l = typeof o == "string" ? o : o[a];
  return l.replace("{{count}}", String(n));
}
var jj = function(n, a, o) {
  var l = zj[n];
  return o != null && o.addSuffix ? o.comparison && o.comparison > 0 ? "za " + Ol(l, a, "future") : Ol(l, a, "past") + " temu" : Ol(l, a, "regular");
};
const Aj = jj;
var Fj = {
  full: "EEEE, do MMMM y",
  long: "do MMMM y",
  medium: "do MMM y",
  short: "dd.MM.y"
}, Ij = {
  full: "HH:mm:ss zzzz",
  long: "HH:mm:ss z",
  medium: "HH:mm:ss",
  short: "HH:mm"
}, Nj = {
  full: "{{date}} {{time}}",
  long: "{{date}} {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, Hj = {
  date: L({
    formats: Fj,
    defaultWidth: "full"
  }),
  time: L({
    formats: Ij,
    defaultWidth: "full"
  }),
  dateTime: L({
    formats: Nj,
    defaultWidth: "full"
  })
};
const Rj = Hj;
var Lj = {
  masculine: "ostatni",
  feminine: "ostatnia"
}, Bj = {
  masculine: "ten",
  feminine: "ta"
}, Vj = {
  masculine: "następny",
  feminine: "następna"
}, qj = {
  0: "feminine",
  1: "masculine",
  2: "masculine",
  3: "feminine",
  4: "masculine",
  5: "masculine",
  6: "feminine"
};
function Kf(t, n, a, o) {
  var l;
  if (Ht(n, a, o))
    l = Bj;
  else if (t === "lastWeek")
    l = Lj;
  else if (t === "nextWeek")
    l = Vj;
  else
    throw new Error("Cannot determine adjectives for token ".concat(t));
  var d = n.getUTCDay(), m = qj[d], b = l[m];
  return "'".concat(b, "' eeee 'o' p");
}
var Xj = {
  lastWeek: Kf,
  yesterday: "'wczoraj o' p",
  today: "'dzisiaj o' p",
  tomorrow: "'jutro o' p",
  nextWeek: Kf,
  other: "P"
}, Kj = function(n, a, o, l) {
  var d = Xj[n];
  return typeof d == "function" ? d(n, a, o, l) : d;
};
const Gj = Kj;
var Uj = {
  narrow: ["p.n.e.", "n.e."],
  abbreviated: ["p.n.e.", "n.e."],
  wide: ["przed naszą erą", "naszej ery"]
}, Yj = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["I kw.", "II kw.", "III kw.", "IV kw."],
  wide: ["I kwartał", "II kwartał", "III kwartał", "IV kwartał"]
}, Zj = {
  narrow: ["S", "L", "M", "K", "M", "C", "L", "S", "W", "P", "L", "G"],
  abbreviated: ["sty", "lut", "mar", "kwi", "maj", "cze", "lip", "sie", "wrz", "paź", "lis", "gru"],
  wide: ["styczeń", "luty", "marzec", "kwiecień", "maj", "czerwiec", "lipiec", "sierpień", "wrzesień", "październik", "listopad", "grudzień"]
}, Jj = {
  narrow: ["s", "l", "m", "k", "m", "c", "l", "s", "w", "p", "l", "g"],
  abbreviated: ["sty", "lut", "mar", "kwi", "maj", "cze", "lip", "sie", "wrz", "paź", "lis", "gru"],
  wide: ["stycznia", "lutego", "marca", "kwietnia", "maja", "czerwca", "lipca", "sierpnia", "września", "października", "listopada", "grudnia"]
}, Qj = {
  narrow: ["N", "P", "W", "Ś", "C", "P", "S"],
  short: ["nie", "pon", "wto", "śro", "czw", "pią", "sob"],
  abbreviated: ["niedz.", "pon.", "wt.", "śr.", "czw.", "pt.", "sob."],
  wide: ["niedziela", "poniedziałek", "wtorek", "środa", "czwartek", "piątek", "sobota"]
}, eA = {
  narrow: ["n", "p", "w", "ś", "c", "p", "s"],
  short: ["nie", "pon", "wto", "śro", "czw", "pią", "sob"],
  abbreviated: ["niedz.", "pon.", "wt.", "śr.", "czw.", "pt.", "sob."],
  wide: ["niedziela", "poniedziałek", "wtorek", "środa", "czwartek", "piątek", "sobota"]
}, tA = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "półn.",
    noon: "poł",
    morning: "rano",
    afternoon: "popoł.",
    evening: "wiecz.",
    night: "noc"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "północ",
    noon: "południe",
    morning: "rano",
    afternoon: "popołudnie",
    evening: "wieczór",
    night: "noc"
  },
  wide: {
    am: "AM",
    pm: "PM",
    midnight: "północ",
    noon: "południe",
    morning: "rano",
    afternoon: "popołudnie",
    evening: "wieczór",
    night: "noc"
  }
}, rA = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "o półn.",
    noon: "w poł.",
    morning: "rano",
    afternoon: "po poł.",
    evening: "wiecz.",
    night: "w nocy"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "o północy",
    noon: "w południe",
    morning: "rano",
    afternoon: "po południu",
    evening: "wieczorem",
    night: "w nocy"
  },
  wide: {
    am: "AM",
    pm: "PM",
    midnight: "o północy",
    noon: "w południe",
    morning: "rano",
    afternoon: "po południu",
    evening: "wieczorem",
    night: "w nocy"
  }
}, nA = function(n, a) {
  return String(n);
}, aA = {
  ordinalNumber: nA,
  era: C({
    values: Uj,
    defaultWidth: "wide"
  }),
  quarter: C({
    values: Yj,
    defaultWidth: "wide",
    argumentCallback: function(n) {
      return n - 1;
    }
  }),
  month: C({
    values: Zj,
    defaultWidth: "wide",
    formattingValues: Jj,
    defaultFormattingWidth: "wide"
  }),
  day: C({
    values: Qj,
    defaultWidth: "wide",
    formattingValues: eA,
    defaultFormattingWidth: "wide"
  }),
  dayPeriod: C({
    values: tA,
    defaultWidth: "wide",
    formattingValues: rA,
    defaultFormattingWidth: "wide"
  })
};
const iA = aA;
var oA = /^(\d+)?/i, lA = /\d+/i, uA = {
  narrow: /^(p\.?\s*n\.?\s*e\.?\s*|n\.?\s*e\.?\s*)/i,
  abbreviated: /^(p\.?\s*n\.?\s*e\.?\s*|n\.?\s*e\.?\s*)/i,
  wide: /^(przed\s*nasz(ą|a)\s*er(ą|a)|naszej\s*ery)/i
}, sA = {
  any: [/^p/i, /^n/i]
}, dA = {
  narrow: /^[1234]/i,
  abbreviated: /^(I|II|III|IV)\s*kw\.?/i,
  wide: /^(I|II|III|IV)\s*kwarta(ł|l)/i
}, cA = {
  narrow: [/1/i, /2/i, /3/i, /4/i],
  any: [/^I kw/i, /^II kw/i, /^III kw/i, /^IV kw/i]
}, fA = {
  narrow: /^[slmkcwpg]/i,
  abbreviated: /^(sty|lut|mar|kwi|maj|cze|lip|sie|wrz|pa(ź|z)|lis|gru)/i,
  wide: /^(stycznia|stycze(ń|n)|lutego|luty|marca|marzec|kwietnia|kwiecie(ń|n)|maja|maj|czerwca|czerwiec|lipca|lipiec|sierpnia|sierpie(ń|n)|wrze(ś|s)nia|wrzesie(ń|n)|pa(ź|z)dziernika|pa(ź|z)dziernik|listopada|listopad|grudnia|grudzie(ń|n))/i
}, mA = {
  narrow: [/^s/i, /^l/i, /^m/i, /^k/i, /^m/i, /^c/i, /^l/i, /^s/i, /^w/i, /^p/i, /^l/i, /^g/i],
  any: [/^st/i, /^lu/i, /^mar/i, /^k/i, /^maj/i, /^c/i, /^lip/i, /^si/i, /^w/i, /^p/i, /^lis/i, /^g/i]
}, hA = {
  narrow: /^[npwścs]/i,
  short: /^(nie|pon|wto|(ś|s)ro|czw|pi(ą|a)|sob)/i,
  abbreviated: /^(niedz|pon|wt|(ś|s)r|czw|pt|sob)\.?/i,
  wide: /^(niedziela|poniedzia(ł|l)ek|wtorek|(ś|s)roda|czwartek|pi(ą|a)tek|sobota)/i
}, vA = {
  narrow: [/^n/i, /^p/i, /^w/i, /^ś/i, /^c/i, /^p/i, /^s/i],
  abbreviated: [/^n/i, /^po/i, /^w/i, /^(ś|s)r/i, /^c/i, /^pt/i, /^so/i],
  any: [/^n/i, /^po/i, /^w/i, /^(ś|s)r/i, /^c/i, /^pi/i, /^so/i]
}, pA = {
  narrow: /^(^a$|^p$|pó(ł|l)n\.?|o\s*pó(ł|l)n\.?|po(ł|l)\.?|w\s*po(ł|l)\.?|po\s*po(ł|l)\.?|rano|wiecz\.?|noc|w\s*nocy)/i,
  any: /^(am|pm|pó(ł|l)noc|o\s*pó(ł|l)nocy|po(ł|l)udnie|w\s*po(ł|l)udnie|popo(ł|l)udnie|po\s*po(ł|l)udniu|rano|wieczór|wieczorem|noc|w\s*nocy)/i
}, gA = {
  narrow: {
    am: /^a$/i,
    pm: /^p$/i,
    midnight: /pó(ł|l)n/i,
    noon: /po(ł|l)/i,
    morning: /rano/i,
    afternoon: /po\s*po(ł|l)/i,
    evening: /wiecz/i,
    night: /noc/i
  },
  any: {
    am: /^am/i,
    pm: /^pm/i,
    midnight: /pó(ł|l)n/i,
    noon: /po(ł|l)/i,
    morning: /rano/i,
    afternoon: /po\s*po(ł|l)/i,
    evening: /wiecz/i,
    night: /noc/i
  }
}, yA = {
  ordinalNumber: xe({
    matchPattern: oA,
    parsePattern: lA,
    valueCallback: function(n) {
      return parseInt(n, 10);
    }
  }),
  era: D({
    matchPatterns: uA,
    defaultMatchWidth: "wide",
    parsePatterns: sA,
    defaultParseWidth: "any"
  }),
  quarter: D({
    matchPatterns: dA,
    defaultMatchWidth: "wide",
    parsePatterns: cA,
    defaultParseWidth: "any",
    valueCallback: function(n) {
      return n + 1;
    }
  }),
  month: D({
    matchPatterns: fA,
    defaultMatchWidth: "wide",
    parsePatterns: mA,
    defaultParseWidth: "any"
  }),
  day: D({
    matchPatterns: hA,
    defaultMatchWidth: "wide",
    parsePatterns: vA,
    defaultParseWidth: "any"
  }),
  dayPeriod: D({
    matchPatterns: pA,
    defaultMatchWidth: "any",
    parsePatterns: gA,
    defaultParseWidth: "any"
  })
};
const bA = yA;
var wA = {
  code: "pl",
  formatDistance: Aj,
  formatLong: Rj,
  formatRelative: Gj,
  localize: iA,
  match: bA,
  options: {
    weekStartsOn: 1,
    firstWeekContainsDate: 4
  }
};
const PA = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: wA
}, Symbol.toStringTag, { value: "Module" })), MA = /* @__PURE__ */ be(PA);
var _A = H && H.__importDefault || function(t) {
  return t && t.__esModule ? t : { default: t };
};
Object.defineProperty(ns, "__esModule", { value: !0 });
const $A = _A(MA), TA = {
  name: "pl-PL",
  locale: $A.default
};
ns.default = TA;
var as = {}, kA = {
  lessThanXSeconds: {
    one: "menos de um segundo",
    other: "menos de {{count}} segundos"
  },
  xSeconds: {
    one: "1 segundo",
    other: "{{count}} segundos"
  },
  halfAMinute: "meio minuto",
  lessThanXMinutes: {
    one: "menos de um minuto",
    other: "menos de {{count}} minutos"
  },
  xMinutes: {
    one: "1 minuto",
    other: "{{count}} minutos"
  },
  aboutXHours: {
    one: "cerca de 1 hora",
    other: "cerca de {{count}} horas"
  },
  xHours: {
    one: "1 hora",
    other: "{{count}} horas"
  },
  xDays: {
    one: "1 dia",
    other: "{{count}} dias"
  },
  aboutXWeeks: {
    one: "cerca de 1 semana",
    other: "cerca de {{count}} semanas"
  },
  xWeeks: {
    one: "1 semana",
    other: "{{count}} semanas"
  },
  aboutXMonths: {
    one: "cerca de 1 mês",
    other: "cerca de {{count}} meses"
  },
  xMonths: {
    one: "1 mês",
    other: "{{count}} meses"
  },
  aboutXYears: {
    one: "cerca de 1 ano",
    other: "cerca de {{count}} anos"
  },
  xYears: {
    one: "1 ano",
    other: "{{count}} anos"
  },
  overXYears: {
    one: "mais de 1 ano",
    other: "mais de {{count}} anos"
  },
  almostXYears: {
    one: "quase 1 ano",
    other: "quase {{count}} anos"
  }
}, SA = function(n, a, o) {
  var l, d = kA[n];
  return typeof d == "string" ? l = d : a === 1 ? l = d.one : l = d.other.replace("{{count}}", String(a)), o != null && o.addSuffix ? o.comparison && o.comparison > 0 ? "em " + l : "há " + l : l;
};
const CA = SA;
var DA = {
  full: "EEEE, d 'de' MMMM 'de' y",
  long: "d 'de' MMMM 'de' y",
  medium: "d MMM y",
  short: "dd/MM/yyyy"
}, WA = {
  full: "HH:mm:ss zzzz",
  long: "HH:mm:ss z",
  medium: "HH:mm:ss",
  short: "HH:mm"
}, xA = {
  full: "{{date}} 'às' {{time}}",
  long: "{{date}} 'às' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, OA = {
  date: L({
    formats: DA,
    defaultWidth: "full"
  }),
  time: L({
    formats: WA,
    defaultWidth: "full"
  }),
  dateTime: L({
    formats: xA,
    defaultWidth: "full"
  })
};
const zA = OA;
var EA = {
  lastWeek: function(n) {
    var a = n.getUTCDay(), o = a === 0 || a === 6 ? "último" : "última";
    return "'" + o + "' eeee 'às' p";
  },
  yesterday: "'ontem às' p",
  today: "'hoje às' p",
  tomorrow: "'amanhã às' p",
  nextWeek: "eeee 'às' p",
  other: "P"
}, jA = function(n, a, o, l) {
  var d = EA[n];
  return typeof d == "function" ? d(a) : d;
};
const AA = jA;
var FA = {
  narrow: ["AC", "DC"],
  abbreviated: ["AC", "DC"],
  wide: ["antes de cristo", "depois de cristo"]
}, IA = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["T1", "T2", "T3", "T4"],
  wide: ["1º trimestre", "2º trimestre", "3º trimestre", "4º trimestre"]
}, NA = {
  narrow: ["j", "f", "m", "a", "m", "j", "j", "a", "s", "o", "n", "d"],
  abbreviated: ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"],
  wide: ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"]
}, HA = {
  narrow: ["D", "S", "T", "Q", "Q", "S", "S"],
  short: ["dom", "seg", "ter", "qua", "qui", "sex", "sab"],
  abbreviated: ["domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado"],
  wide: ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"]
}, RA = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mn",
    noon: "md",
    morning: "manhã",
    afternoon: "tarde",
    evening: "tarde",
    night: "noite"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "meia-noite",
    noon: "meio-dia",
    morning: "manhã",
    afternoon: "tarde",
    evening: "tarde",
    night: "noite"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "meia-noite",
    noon: "meio-dia",
    morning: "manhã",
    afternoon: "tarde",
    evening: "tarde",
    night: "noite"
  }
}, LA = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mn",
    noon: "md",
    morning: "da manhã",
    afternoon: "da tarde",
    evening: "da tarde",
    night: "da noite"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "meia-noite",
    noon: "meio-dia",
    morning: "da manhã",
    afternoon: "da tarde",
    evening: "da tarde",
    night: "da noite"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "meia-noite",
    noon: "meio-dia",
    morning: "da manhã",
    afternoon: "da tarde",
    evening: "da tarde",
    night: "da noite"
  }
}, BA = function(n, a) {
  var o = Number(n);
  return (a == null ? void 0 : a.unit) === "week" ? o + "ª" : o + "º";
}, VA = {
  ordinalNumber: BA,
  era: C({
    values: FA,
    defaultWidth: "wide"
  }),
  quarter: C({
    values: IA,
    defaultWidth: "wide",
    argumentCallback: function(n) {
      return n - 1;
    }
  }),
  month: C({
    values: NA,
    defaultWidth: "wide"
  }),
  day: C({
    values: HA,
    defaultWidth: "wide"
  }),
  dayPeriod: C({
    values: RA,
    defaultWidth: "wide",
    formattingValues: LA,
    defaultFormattingWidth: "wide"
  })
};
const qA = VA;
var XA = /^(\d+)[ºªo]?/i, KA = /\d+/i, GA = {
  narrow: /^(ac|dc|a|d)/i,
  abbreviated: /^(a\.?\s?c\.?|d\.?\s?c\.?)/i,
  wide: /^(antes de cristo|depois de cristo)/i
}, UA = {
  any: [/^ac/i, /^dc/i],
  wide: [/^antes de cristo/i, /^depois de cristo/i]
}, YA = {
  narrow: /^[1234]/i,
  abbreviated: /^T[1234]/i,
  wide: /^[1234](º)? trimestre/i
}, ZA = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, JA = {
  narrow: /^[jfmajsond]/i,
  abbreviated: /^(jan|fev|mar|abr|mai|jun|jul|ago|set|out|nov|dez)/i,
  wide: /^(janeiro|fevereiro|março|abril|maio|junho|julho|agosto|setembro|outubro|novembro|dezembro)/i
}, QA = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^fev/i, /^mar/i, /^abr/i, /^mai/i, /^jun/i, /^jul/i, /^ago/i, /^set/i, /^out/i, /^nov/i, /^dez/i]
}, e2 = {
  narrow: /^(dom|[23456]ª?|s[aá]b)/i,
  short: /^(dom|[23456]ª?|s[aá]b)/i,
  abbreviated: /^(dom|seg|ter|qua|qui|sex|s[aá]b)/i,
  wide: /^(domingo|(segunda|ter[cç]a|quarta|quinta|sexta)([- ]feira)?|s[aá]bado)/i
}, t2 = {
  short: [/^d/i, /^2/i, /^3/i, /^4/i, /^5/i, /^6/i, /^s[aá]/i],
  narrow: [/^d/i, /^2/i, /^3/i, /^4/i, /^5/i, /^6/i, /^s[aá]/i],
  any: [/^d/i, /^seg/i, /^t/i, /^qua/i, /^qui/i, /^sex/i, /^s[aá]b/i]
}, r2 = {
  narrow: /^(a|p|mn|md|(da) (manhã|tarde|noite))/i,
  any: /^([ap]\.?\s?m\.?|meia[-\s]noite|meio[-\s]dia|(da) (manhã|tarde|noite))/i
}, n2 = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mn|^meia[-\s]noite/i,
    noon: /^md|^meio[-\s]dia/i,
    morning: /manhã/i,
    afternoon: /tarde/i,
    evening: /tarde/i,
    night: /noite/i
  }
}, a2 = {
  ordinalNumber: xe({
    matchPattern: XA,
    parsePattern: KA,
    valueCallback: function(n) {
      return parseInt(n, 10);
    }
  }),
  era: D({
    matchPatterns: GA,
    defaultMatchWidth: "wide",
    parsePatterns: UA,
    defaultParseWidth: "any"
  }),
  quarter: D({
    matchPatterns: YA,
    defaultMatchWidth: "wide",
    parsePatterns: ZA,
    defaultParseWidth: "any",
    valueCallback: function(n) {
      return n + 1;
    }
  }),
  month: D({
    matchPatterns: JA,
    defaultMatchWidth: "wide",
    parsePatterns: QA,
    defaultParseWidth: "any"
  }),
  day: D({
    matchPatterns: e2,
    defaultMatchWidth: "wide",
    parsePatterns: t2,
    defaultParseWidth: "any"
  }),
  dayPeriod: D({
    matchPatterns: r2,
    defaultMatchWidth: "any",
    parsePatterns: n2,
    defaultParseWidth: "any"
  })
};
const i2 = a2;
var o2 = {
  code: "pt-BR",
  formatDistance: CA,
  formatLong: zA,
  formatRelative: AA,
  localize: qA,
  match: i2,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
const l2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: o2
}, Symbol.toStringTag, { value: "Module" })), u2 = /* @__PURE__ */ be(l2);
var s2 = H && H.__importDefault || function(t) {
  return t && t.__esModule ? t : { default: t };
};
Object.defineProperty(as, "__esModule", { value: !0 });
const d2 = s2(u2), c2 = {
  name: "pt-BR",
  locale: d2.default
};
as.default = c2;
var is = {}, f2 = {
  lessThanXSeconds: {
    one: "น้อยกว่า 1 วินาที",
    other: "น้อยกว่า {{count}} วินาที"
  },
  xSeconds: {
    one: "1 วินาที",
    other: "{{count}} วินาที"
  },
  halfAMinute: "ครึ่งนาที",
  lessThanXMinutes: {
    one: "น้อยกว่า 1 นาที",
    other: "น้อยกว่า {{count}} นาที"
  },
  xMinutes: {
    one: "1 นาที",
    other: "{{count}} นาที"
  },
  aboutXHours: {
    one: "ประมาณ 1 ชั่วโมง",
    other: "ประมาณ {{count}} ชั่วโมง"
  },
  xHours: {
    one: "1 ชั่วโมง",
    other: "{{count}} ชั่วโมง"
  },
  xDays: {
    one: "1 วัน",
    other: "{{count}} วัน"
  },
  aboutXWeeks: {
    one: "ประมาณ 1 สัปดาห์",
    other: "ประมาณ {{count}} สัปดาห์"
  },
  xWeeks: {
    one: "1 สัปดาห์",
    other: "{{count}} สัปดาห์"
  },
  aboutXMonths: {
    one: "ประมาณ 1 เดือน",
    other: "ประมาณ {{count}} เดือน"
  },
  xMonths: {
    one: "1 เดือน",
    other: "{{count}} เดือน"
  },
  aboutXYears: {
    one: "ประมาณ 1 ปี",
    other: "ประมาณ {{count}} ปี"
  },
  xYears: {
    one: "1 ปี",
    other: "{{count}} ปี"
  },
  overXYears: {
    one: "มากกว่า 1 ปี",
    other: "มากกว่า {{count}} ปี"
  },
  almostXYears: {
    one: "เกือบ 1 ปี",
    other: "เกือบ {{count}} ปี"
  }
}, m2 = function(n, a, o) {
  var l, d = f2[n];
  return typeof d == "string" ? l = d : a === 1 ? l = d.one : l = d.other.replace("{{count}}", String(a)), o != null && o.addSuffix ? o.comparison && o.comparison > 0 ? n === "halfAMinute" ? "ใน" + l : "ใน " + l : l + "ที่ผ่านมา" : l;
};
const h2 = m2;
var v2 = {
  full: "วันEEEEที่ do MMMM y",
  long: "do MMMM y",
  medium: "d MMM y",
  short: "dd/MM/yyyy"
}, p2 = {
  full: "H:mm:ss น. zzzz",
  long: "H:mm:ss น. z",
  medium: "H:mm:ss น.",
  short: "H:mm น."
}, g2 = {
  full: "{{date}} 'เวลา' {{time}}",
  long: "{{date}} 'เวลา' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, y2 = {
  date: L({
    formats: v2,
    defaultWidth: "full"
  }),
  time: L({
    formats: p2,
    defaultWidth: "medium"
  }),
  dateTime: L({
    formats: g2,
    defaultWidth: "full"
  })
};
const b2 = y2;
var w2 = {
  lastWeek: "eeee'ที่แล้วเวลา' p",
  yesterday: "'เมื่อวานนี้เวลา' p",
  today: "'วันนี้เวลา' p",
  tomorrow: "'พรุ่งนี้เวลา' p",
  nextWeek: "eeee 'เวลา' p",
  other: "P"
}, P2 = function(n, a, o, l) {
  return w2[n];
};
const M2 = P2;
var _2 = {
  narrow: ["B", "คศ"],
  abbreviated: ["BC", "ค.ศ."],
  wide: ["ปีก่อนคริสตกาล", "คริสต์ศักราช"]
}, $2 = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["ไตรมาสแรก", "ไตรมาสที่สอง", "ไตรมาสที่สาม", "ไตรมาสที่สี่"]
}, T2 = {
  narrow: ["อา.", "จ.", "อ.", "พ.", "พฤ.", "ศ.", "ส."],
  short: ["อา.", "จ.", "อ.", "พ.", "พฤ.", "ศ.", "ส."],
  abbreviated: ["อา.", "จ.", "อ.", "พ.", "พฤ.", "ศ.", "ส."],
  wide: ["อาทิตย์", "จันทร์", "อังคาร", "พุธ", "พฤหัสบดี", "ศุกร์", "เสาร์"]
}, k2 = {
  narrow: ["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."],
  abbreviated: ["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."],
  wide: ["มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"]
}, S2 = {
  narrow: {
    am: "ก่อนเที่ยง",
    pm: "หลังเที่ยง",
    midnight: "เที่ยงคืน",
    noon: "เที่ยง",
    morning: "เช้า",
    afternoon: "บ่าย",
    evening: "เย็น",
    night: "กลางคืน"
  },
  abbreviated: {
    am: "ก่อนเที่ยง",
    pm: "หลังเที่ยง",
    midnight: "เที่ยงคืน",
    noon: "เที่ยง",
    morning: "เช้า",
    afternoon: "บ่าย",
    evening: "เย็น",
    night: "กลางคืน"
  },
  wide: {
    am: "ก่อนเที่ยง",
    pm: "หลังเที่ยง",
    midnight: "เที่ยงคืน",
    noon: "เที่ยง",
    morning: "เช้า",
    afternoon: "บ่าย",
    evening: "เย็น",
    night: "กลางคืน"
  }
}, C2 = {
  narrow: {
    am: "ก่อนเที่ยง",
    pm: "หลังเที่ยง",
    midnight: "เที่ยงคืน",
    noon: "เที่ยง",
    morning: "ตอนเช้า",
    afternoon: "ตอนกลางวัน",
    evening: "ตอนเย็น",
    night: "ตอนกลางคืน"
  },
  abbreviated: {
    am: "ก่อนเที่ยง",
    pm: "หลังเที่ยง",
    midnight: "เที่ยงคืน",
    noon: "เที่ยง",
    morning: "ตอนเช้า",
    afternoon: "ตอนกลางวัน",
    evening: "ตอนเย็น",
    night: "ตอนกลางคืน"
  },
  wide: {
    am: "ก่อนเที่ยง",
    pm: "หลังเที่ยง",
    midnight: "เที่ยงคืน",
    noon: "เที่ยง",
    morning: "ตอนเช้า",
    afternoon: "ตอนกลางวัน",
    evening: "ตอนเย็น",
    night: "ตอนกลางคืน"
  }
}, D2 = function(n, a) {
  return String(n);
}, W2 = {
  ordinalNumber: D2,
  era: C({
    values: _2,
    defaultWidth: "wide"
  }),
  quarter: C({
    values: $2,
    defaultWidth: "wide",
    argumentCallback: function(n) {
      return n - 1;
    }
  }),
  month: C({
    values: k2,
    defaultWidth: "wide"
  }),
  day: C({
    values: T2,
    defaultWidth: "wide"
  }),
  dayPeriod: C({
    values: S2,
    defaultWidth: "wide",
    formattingValues: C2,
    defaultFormattingWidth: "wide"
  })
};
const x2 = W2;
var O2 = /^\d+/i, z2 = /\d+/i, E2 = {
  narrow: /^([bB]|[aA]|คศ)/i,
  abbreviated: /^([bB]\.?\s?[cC]\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?|ค\.?ศ\.?)/i,
  wide: /^(ก่อนคริสตกาล|คริสต์ศักราช|คริสตกาล)/i
}, j2 = {
  any: [/^[bB]/i, /^(^[aA]|ค\.?ศ\.?|คริสตกาล|คริสต์ศักราช|)/i]
}, A2 = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^ไตรมาส(ที่)? ?[1234]/i
}, F2 = {
  any: [/(1|แรก|หนึ่ง)/i, /(2|สอง)/i, /(3|สาม)/i, /(4|สี่)/i]
}, I2 = {
  narrow: /^(ม\.?ค\.?|ก\.?พ\.?|มี\.?ค\.?|เม\.?ย\.?|พ\.?ค\.?|มิ\.?ย\.?|ก\.?ค\.?|ส\.?ค\.?|ก\.?ย\.?|ต\.?ค\.?|พ\.?ย\.?|ธ\.?ค\.?)/i,
  abbreviated: /^(ม\.?ค\.?|ก\.?พ\.?|มี\.?ค\.?|เม\.?ย\.?|พ\.?ค\.?|มิ\.?ย\.?|ก\.?ค\.?|ส\.?ค\.?|ก\.?ย\.?|ต\.?ค\.?|พ\.?ย\.?|ธ\.?ค\.?')/i,
  wide: /^(มกราคม|กุมภาพันธ์|มีนาคม|เมษายน|พฤษภาคม|มิถุนายน|กรกฎาคม|สิงหาคม|กันยายน|ตุลาคม|พฤศจิกายน|ธันวาคม)/i
}, N2 = {
  wide: [/^มก/i, /^กุม/i, /^มี/i, /^เม/i, /^พฤษ/i, /^มิ/i, /^กรก/i, /^ส/i, /^กัน/i, /^ต/i, /^พฤศ/i, /^ธ/i],
  any: [/^ม\.?ค\.?/i, /^ก\.?พ\.?/i, /^มี\.?ค\.?/i, /^เม\.?ย\.?/i, /^พ\.?ค\.?/i, /^มิ\.?ย\.?/i, /^ก\.?ค\.?/i, /^ส\.?ค\.?/i, /^ก\.?ย\.?/i, /^ต\.?ค\.?/i, /^พ\.?ย\.?/i, /^ธ\.?ค\.?/i]
}, H2 = {
  narrow: /^(อา\.?|จ\.?|อ\.?|พฤ\.?|พ\.?|ศ\.?|ส\.?)/i,
  short: /^(อา\.?|จ\.?|อ\.?|พฤ\.?|พ\.?|ศ\.?|ส\.?)/i,
  abbreviated: /^(อา\.?|จ\.?|อ\.?|พฤ\.?|พ\.?|ศ\.?|ส\.?)/i,
  wide: /^(อาทิตย์|จันทร์|อังคาร|พุธ|พฤหัสบดี|ศุกร์|เสาร์)/i
}, R2 = {
  wide: [/^อา/i, /^จั/i, /^อั/i, /^พุธ/i, /^พฤ/i, /^ศ/i, /^เส/i],
  any: [/^อา/i, /^จ/i, /^อ/i, /^พ(?!ฤ)/i, /^พฤ/i, /^ศ/i, /^ส/i]
}, L2 = {
  any: /^(ก่อนเที่ยง|หลังเที่ยง|เที่ยงคืน|เที่ยง|(ตอน.*?)?.*(เที่ยง|เช้า|บ่าย|เย็น|กลางคืน))/i
}, B2 = {
  any: {
    am: /^ก่อนเที่ยง/i,
    pm: /^หลังเที่ยง/i,
    midnight: /^เที่ยงคืน/i,
    noon: /^เที่ยง/i,
    morning: /เช้า/i,
    afternoon: /บ่าย/i,
    evening: /เย็น/i,
    night: /กลางคืน/i
  }
}, V2 = {
  ordinalNumber: xe({
    matchPattern: O2,
    parsePattern: z2,
    valueCallback: function(n) {
      return parseInt(n, 10);
    }
  }),
  era: D({
    matchPatterns: E2,
    defaultMatchWidth: "wide",
    parsePatterns: j2,
    defaultParseWidth: "any"
  }),
  quarter: D({
    matchPatterns: A2,
    defaultMatchWidth: "wide",
    parsePatterns: F2,
    defaultParseWidth: "any",
    valueCallback: function(n) {
      return n + 1;
    }
  }),
  month: D({
    matchPatterns: I2,
    defaultMatchWidth: "wide",
    parsePatterns: N2,
    defaultParseWidth: "any"
  }),
  day: D({
    matchPatterns: H2,
    defaultMatchWidth: "wide",
    parsePatterns: R2,
    defaultParseWidth: "any"
  }),
  dayPeriod: D({
    matchPatterns: L2,
    defaultMatchWidth: "any",
    parsePatterns: B2,
    defaultParseWidth: "any"
  })
};
const q2 = V2;
var X2 = {
  code: "th",
  formatDistance: h2,
  formatLong: b2,
  formatRelative: M2,
  localize: x2,
  match: q2,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
const K2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: X2
}, Symbol.toStringTag, { value: "Module" })), G2 = /* @__PURE__ */ be(K2);
var U2 = H && H.__importDefault || function(t) {
  return t && t.__esModule ? t : { default: t };
};
Object.defineProperty(is, "__esModule", { value: !0 });
const Y2 = U2(G2), Z2 = {
  name: "thTH",
  locale: Y2.default
};
is.default = Z2;
var os = {}, J2 = {
  lessThanXSeconds: {
    one: "أقل من ثانية",
    two: "أقل من ثانيتين",
    threeToTen: "أقل من {{count}} ثواني",
    other: "أقل من {{count}} ثانية"
  },
  xSeconds: {
    one: "ثانية واحدة",
    two: "ثانيتان",
    threeToTen: "{{count}} ثواني",
    other: "{{count}} ثانية"
  },
  halfAMinute: "نصف دقيقة",
  lessThanXMinutes: {
    one: "أقل من دقيقة",
    two: "أقل من دقيقتين",
    threeToTen: "أقل من {{count}} دقائق",
    other: "أقل من {{count}} دقيقة"
  },
  xMinutes: {
    one: "دقيقة واحدة",
    two: "دقيقتان",
    threeToTen: "{{count}} دقائق",
    other: "{{count}} دقيقة"
  },
  aboutXHours: {
    one: "ساعة واحدة تقريباً",
    two: "ساعتين تقريبا",
    threeToTen: "{{count}} ساعات تقريباً",
    other: "{{count}} ساعة تقريباً"
  },
  xHours: {
    one: "ساعة واحدة",
    two: "ساعتان",
    threeToTen: "{{count}} ساعات",
    other: "{{count}} ساعة"
  },
  xDays: {
    one: "يوم واحد",
    two: "يومان",
    threeToTen: "{{count}} أيام",
    other: "{{count}} يوم"
  },
  aboutXWeeks: {
    one: "أسبوع واحد تقريبا",
    two: "أسبوعين تقريبا",
    threeToTen: "{{count}} أسابيع تقريبا",
    other: "{{count}} أسبوعا تقريبا"
  },
  xWeeks: {
    one: "أسبوع واحد",
    two: "أسبوعان",
    threeToTen: "{{count}} أسابيع",
    other: "{{count}} أسبوعا"
  },
  aboutXMonths: {
    one: "شهر واحد تقريباً",
    two: "شهرين تقريبا",
    threeToTen: "{{count}} أشهر تقريبا",
    other: "{{count}} شهرا تقريباً"
  },
  xMonths: {
    one: "شهر واحد",
    two: "شهران",
    threeToTen: "{{count}} أشهر",
    other: "{{count}} شهرا"
  },
  aboutXYears: {
    one: "سنة واحدة تقريباً",
    two: "سنتين تقريبا",
    threeToTen: "{{count}} سنوات تقريباً",
    other: "{{count}} سنة تقريباً"
  },
  xYears: {
    one: "سنة واحد",
    two: "سنتان",
    threeToTen: "{{count}} سنوات",
    other: "{{count}} سنة"
  },
  overXYears: {
    one: "أكثر من سنة",
    two: "أكثر من سنتين",
    threeToTen: "أكثر من {{count}} سنوات",
    other: "أكثر من {{count}} سنة"
  },
  almostXYears: {
    one: "ما يقارب سنة واحدة",
    two: "ما يقارب سنتين",
    threeToTen: "ما يقارب {{count}} سنوات",
    other: "ما يقارب {{count}} سنة"
  }
}, Q2 = function(n, a, o) {
  var l = J2[n], d;
  return typeof l == "string" ? d = l : a === 1 ? d = l.one : a === 2 ? d = l.two : a <= 10 ? d = l.threeToTen.replace("{{count}}", String(a)) : d = l.other.replace("{{count}}", String(a)), o != null && o.addSuffix ? o.comparison && o.comparison > 0 ? "خلال " + d : "منذ " + d : d;
};
const eF = Q2;
var tF = {
  full: "EEEE، do MMMM y",
  long: "do MMMM y",
  medium: "d MMM y",
  short: "dd/MM/yyyy"
}, rF = {
  full: "HH:mm:ss",
  long: "HH:mm:ss",
  medium: "HH:mm:ss",
  short: "HH:mm"
}, nF = {
  full: "{{date}} 'عند الساعة' {{time}}",
  long: "{{date}} 'عند الساعة' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, aF = {
  date: L({
    formats: tF,
    defaultWidth: "full"
  }),
  time: L({
    formats: rF,
    defaultWidth: "full"
  }),
  dateTime: L({
    formats: nF,
    defaultWidth: "full"
  })
};
const iF = aF;
var oF = {
  lastWeek: "eeee 'الماضي عند الساعة' p",
  yesterday: "'الأمس عند الساعة' p",
  today: "'اليوم عند الساعة' p",
  tomorrow: "'غدا عند الساعة' p",
  nextWeek: "eeee 'القادم عند الساعة' p",
  other: "P"
}, lF = function(n) {
  return oF[n];
};
const uF = lF;
var sF = {
  narrow: ["ق", "ب"],
  abbreviated: ["ق.م.", "ب.م."],
  wide: ["قبل الميلاد", "بعد الميلاد"]
}, dF = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["ر1", "ر2", "ر3", "ر4"],
  wide: ["الربع الأول", "الربع الثاني", "الربع الثالث", "الربع الرابع"]
}, cF = {
  narrow: ["ي", "ف", "م", "أ", "م", "ي", "ي", "أ", "س", "أ", "ن", "د"],
  abbreviated: ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"],
  wide: ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"]
}, fF = {
  narrow: ["ح", "ن", "ث", "ر", "خ", "ج", "س"],
  short: ["أحد", "اثنين", "ثلاثاء", "أربعاء", "خميس", "جمعة", "سبت"],
  abbreviated: ["أحد", "اثنين", "ثلاثاء", "أربعاء", "خميس", "جمعة", "سبت"],
  wide: ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"]
}, mF = {
  narrow: {
    am: "ص",
    pm: "م",
    morning: "الصباح",
    noon: "الظهر",
    afternoon: "بعد الظهر",
    evening: "المساء",
    night: "الليل",
    midnight: "منتصف الليل"
  },
  abbreviated: {
    am: "ص",
    pm: "م",
    morning: "الصباح",
    noon: "الظهر",
    afternoon: "بعد الظهر",
    evening: "المساء",
    night: "الليل",
    midnight: "منتصف الليل"
  },
  wide: {
    am: "ص",
    pm: "م",
    morning: "الصباح",
    noon: "الظهر",
    afternoon: "بعد الظهر",
    evening: "المساء",
    night: "الليل",
    midnight: "منتصف الليل"
  }
}, hF = {
  narrow: {
    am: "ص",
    pm: "م",
    morning: "في الصباح",
    noon: "الظهر",
    afternoon: "بعد الظهر",
    evening: "في المساء",
    night: "في الليل",
    midnight: "منتصف الليل"
  },
  abbreviated: {
    am: "ص",
    pm: "م",
    morning: "في الصباح",
    noon: "الظهر",
    afternoon: "بعد الظهر",
    evening: "في المساء",
    night: "في الليل",
    midnight: "منتصف الليل"
  },
  wide: {
    am: "ص",
    pm: "م",
    morning: "في الصباح",
    noon: "الظهر",
    afternoon: "بعد الظهر",
    evening: "في المساء",
    night: "في الليل",
    midnight: "منتصف الليل"
  }
}, vF = function(n) {
  return String(n);
}, pF = {
  ordinalNumber: vF,
  era: C({
    values: sF,
    defaultWidth: "wide"
  }),
  quarter: C({
    values: dF,
    defaultWidth: "wide",
    argumentCallback: function(n) {
      return n - 1;
    }
  }),
  month: C({
    values: cF,
    defaultWidth: "wide"
  }),
  day: C({
    values: fF,
    defaultWidth: "wide"
  }),
  dayPeriod: C({
    values: mF,
    defaultWidth: "wide",
    formattingValues: hF,
    defaultFormattingWidth: "wide"
  })
};
const gF = pF;
var yF = /^(\d+)(th|st|nd|rd)?/i, bF = /\d+/i, wF = {
  narrow: /[قب]/,
  abbreviated: /[قب]\.م\./,
  wide: /(قبل|بعد) الميلاد/
}, PF = {
  any: [/قبل/, /بعد/]
}, MF = {
  narrow: /^[1234]/i,
  abbreviated: /ر[1234]/,
  wide: /الربع (الأول|الثاني|الثالث|الرابع)/
}, _F = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, $F = {
  narrow: /^[أيفمسند]/,
  abbreviated: /^(يناير|فبراير|مارس|أبريل|مايو|يونيو|يوليو|أغسطس|سبتمبر|أكتوبر|نوفمبر|ديسمبر)/,
  wide: /^(يناير|فبراير|مارس|أبريل|مايو|يونيو|يوليو|أغسطس|سبتمبر|أكتوبر|نوفمبر|ديسمبر)/
}, TF = {
  narrow: [/^ي/i, /^ف/i, /^م/i, /^أ/i, /^م/i, /^ي/i, /^ي/i, /^أ/i, /^س/i, /^أ/i, /^ن/i, /^د/i],
  any: [/^يناير/i, /^فبراير/i, /^مارس/i, /^أبريل/i, /^مايو/i, /^يونيو/i, /^يوليو/i, /^أغسطس/i, /^سبتمبر/i, /^أكتوبر/i, /^نوفمبر/i, /^ديسمبر/i]
}, kF = {
  narrow: /^[حنثرخجس]/i,
  short: /^(أحد|اثنين|ثلاثاء|أربعاء|خميس|جمعة|سبت)/i,
  abbreviated: /^(أحد|اثنين|ثلاثاء|أربعاء|خميس|جمعة|سبت)/i,
  wide: /^(الأحد|الاثنين|الثلاثاء|الأربعاء|الخميس|الجمعة|السبت)/i
}, SF = {
  narrow: [/^ح/i, /^ن/i, /^ث/i, /^ر/i, /^خ/i, /^ج/i, /^س/i],
  wide: [/^الأحد/i, /^الاثنين/i, /^الثلاثاء/i, /^الأربعاء/i, /^الخميس/i, /^الجمعة/i, /^السبت/i],
  any: [/^أح/i, /^اث/i, /^ث/i, /^أر/i, /^خ/i, /^ج/i, /^س/i]
}, CF = {
  narrow: /^(ص|م|منتصف الليل|الظهر|بعد الظهر|في الصباح|في المساء|في الليل)/,
  any: /^(ص|م|منتصف الليل|الظهر|بعد الظهر|في الصباح|في المساء|في الليل)/
}, DF = {
  any: {
    am: /^ص/,
    pm: /^م/,
    midnight: /منتصف الليل/,
    noon: /الظهر/,
    afternoon: /بعد الظهر/,
    morning: /في الصباح/,
    evening: /في المساء/,
    night: /في الليل/
  }
}, WF = {
  ordinalNumber: xe({
    matchPattern: yF,
    parsePattern: bF,
    valueCallback: function(n) {
      return parseInt(n, 10);
    }
  }),
  era: D({
    matchPatterns: wF,
    defaultMatchWidth: "wide",
    parsePatterns: PF,
    defaultParseWidth: "any"
  }),
  quarter: D({
    matchPatterns: MF,
    defaultMatchWidth: "wide",
    parsePatterns: _F,
    defaultParseWidth: "any",
    valueCallback: function(n) {
      return n + 1;
    }
  }),
  month: D({
    matchPatterns: $F,
    defaultMatchWidth: "wide",
    parsePatterns: TF,
    defaultParseWidth: "any"
  }),
  day: D({
    matchPatterns: kF,
    defaultMatchWidth: "wide",
    parsePatterns: SF,
    defaultParseWidth: "any"
  }),
  dayPeriod: D({
    matchPatterns: CF,
    defaultMatchWidth: "any",
    parsePatterns: DF,
    defaultParseWidth: "any"
  })
};
const xF = WF;
var OF = {
  code: "ar",
  formatDistance: eF,
  formatLong: iF,
  formatRelative: uF,
  localize: gF,
  match: xF,
  options: {
    weekStartsOn: 6,
    firstWeekContainsDate: 1
  }
};
const zF = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: OF
}, Symbol.toStringTag, { value: "Module" })), EF = /* @__PURE__ */ be(zF);
var jF = H && H.__importDefault || function(t) {
  return t && t.__esModule ? t : { default: t };
};
Object.defineProperty(os, "__esModule", { value: !0 });
const AF = jF(EF), FF = {
  name: "ar-DZ",
  locale: AF.default
};
os.default = FF;
var ls = {}, IF = {
  lessThanXSeconds: {
    one: "bir saniyeden az",
    other: "{{count}} saniyeden az"
  },
  xSeconds: {
    one: "1 saniye",
    other: "{{count}} saniye"
  },
  halfAMinute: "yarım dakika",
  lessThanXMinutes: {
    one: "bir dakikadan az",
    other: "{{count}} dakikadan az"
  },
  xMinutes: {
    one: "1 dakika",
    other: "{{count}} dakika"
  },
  aboutXHours: {
    one: "yaklaşık 1 saat",
    other: "yaklaşık {{count}} saat"
  },
  xHours: {
    one: "1 saat",
    other: "{{count}} saat"
  },
  xDays: {
    one: "1 gün",
    other: "{{count}} gün"
  },
  aboutXWeeks: {
    one: "yaklaşık 1 hafta",
    other: "yaklaşık {{count}} hafta"
  },
  xWeeks: {
    one: "1 hafta",
    other: "{{count}} hafta"
  },
  aboutXMonths: {
    one: "yaklaşık 1 ay",
    other: "yaklaşık {{count}} ay"
  },
  xMonths: {
    one: "1 ay",
    other: "{{count}} ay"
  },
  aboutXYears: {
    one: "yaklaşık 1 yıl",
    other: "yaklaşık {{count}} yıl"
  },
  xYears: {
    one: "1 yıl",
    other: "{{count}} yıl"
  },
  overXYears: {
    one: "1 yıldan fazla",
    other: "{{count}} yıldan fazla"
  },
  almostXYears: {
    one: "neredeyse 1 yıl",
    other: "neredeyse {{count}} yıl"
  }
}, NF = function(n, a, o) {
  var l, d = IF[n];
  return typeof d == "string" ? l = d : a === 1 ? l = d.one : l = d.other.replace("{{count}}", a.toString()), o != null && o.addSuffix ? o.comparison && o.comparison > 0 ? l + " sonra" : l + " önce" : l;
};
const HF = NF;
var RF = {
  full: "d MMMM y EEEE",
  long: "d MMMM y",
  medium: "d MMM y",
  short: "dd.MM.yyyy"
}, LF = {
  full: "HH:mm:ss zzzz",
  long: "HH:mm:ss z",
  medium: "HH:mm:ss",
  short: "HH:mm"
}, BF = {
  full: "{{date}} 'saat' {{time}}",
  long: "{{date}} 'saat' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, VF = {
  date: L({
    formats: RF,
    defaultWidth: "full"
  }),
  time: L({
    formats: LF,
    defaultWidth: "full"
  }),
  dateTime: L({
    formats: BF,
    defaultWidth: "full"
  })
};
const qF = VF;
var XF = {
  lastWeek: "'geçen hafta' eeee 'saat' p",
  yesterday: "'dün saat' p",
  today: "'bugün saat' p",
  tomorrow: "'yarın saat' p",
  nextWeek: "eeee 'saat' p",
  other: "P"
}, KF = function(n, a, o, l) {
  return XF[n];
};
const GF = KF;
var UF = {
  narrow: ["MÖ", "MS"],
  abbreviated: ["MÖ", "MS"],
  wide: ["Milattan Önce", "Milattan Sonra"]
}, YF = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["1Ç", "2Ç", "3Ç", "4Ç"],
  wide: ["İlk çeyrek", "İkinci Çeyrek", "Üçüncü çeyrek", "Son çeyrek"]
}, ZF = {
  narrow: ["O", "Ş", "M", "N", "M", "H", "T", "A", "E", "E", "K", "A"],
  abbreviated: ["Oca", "Şub", "Mar", "Nis", "May", "Haz", "Tem", "Ağu", "Eyl", "Eki", "Kas", "Ara"],
  wide: ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"]
}, JF = {
  narrow: ["P", "P", "S", "Ç", "P", "C", "C"],
  short: ["Pz", "Pt", "Sa", "Ça", "Pe", "Cu", "Ct"],
  abbreviated: ["Paz", "Pzt", "Sal", "Çar", "Per", "Cum", "Cts"],
  wide: ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"]
}, QF = {
  narrow: {
    am: "öö",
    pm: "ös",
    midnight: "gy",
    noon: "ö",
    morning: "sa",
    afternoon: "ös",
    evening: "ak",
    night: "ge"
  },
  abbreviated: {
    am: "ÖÖ",
    pm: "ÖS",
    midnight: "gece yarısı",
    noon: "öğle",
    morning: "sabah",
    afternoon: "öğleden sonra",
    evening: "akşam",
    night: "gece"
  },
  wide: {
    am: "Ö.Ö.",
    pm: "Ö.S.",
    midnight: "gece yarısı",
    noon: "öğle",
    morning: "sabah",
    afternoon: "öğleden sonra",
    evening: "akşam",
    night: "gece"
  }
}, eI = {
  narrow: {
    am: "öö",
    pm: "ös",
    midnight: "gy",
    noon: "ö",
    morning: "sa",
    afternoon: "ös",
    evening: "ak",
    night: "ge"
  },
  abbreviated: {
    am: "ÖÖ",
    pm: "ÖS",
    midnight: "gece yarısı",
    noon: "öğlen",
    morning: "sabahleyin",
    afternoon: "öğleden sonra",
    evening: "akşamleyin",
    night: "geceleyin"
  },
  wide: {
    am: "ö.ö.",
    pm: "ö.s.",
    midnight: "gece yarısı",
    noon: "öğlen",
    morning: "sabahleyin",
    afternoon: "öğleden sonra",
    evening: "akşamleyin",
    night: "geceleyin"
  }
}, tI = function(n, a) {
  var o = Number(n);
  return o + ".";
}, rI = {
  ordinalNumber: tI,
  era: C({
    values: UF,
    defaultWidth: "wide"
  }),
  quarter: C({
    values: YF,
    defaultWidth: "wide",
    argumentCallback: function(n) {
      return Number(n) - 1;
    }
  }),
  month: C({
    values: ZF,
    defaultWidth: "wide"
  }),
  day: C({
    values: JF,
    defaultWidth: "wide"
  }),
  dayPeriod: C({
    values: QF,
    defaultWidth: "wide",
    formattingValues: eI,
    defaultFormattingWidth: "wide"
  })
};
const nI = rI;
var aI = /^(\d+)(\.)?/i, iI = /\d+/i, oI = {
  narrow: /^(mö|ms)/i,
  abbreviated: /^(mö|ms)/i,
  wide: /^(milattan önce|milattan sonra)/i
}, lI = {
  any: [/(^mö|^milattan önce)/i, /(^ms|^milattan sonra)/i]
}, uI = {
  narrow: /^[1234]/i,
  abbreviated: /^[1234]ç/i,
  wide: /^((i|İ)lk|(i|İ)kinci|üçüncü|son) çeyrek/i
}, sI = {
  any: [/1/i, /2/i, /3/i, /4/i],
  abbreviated: [/1ç/i, /2ç/i, /3ç/i, /4ç/i],
  wide: [/^(i|İ)lk çeyrek/i, /(i|İ)kinci çeyrek/i, /üçüncü çeyrek/i, /son çeyrek/i]
}, dI = {
  narrow: /^[oşmnhtaek]/i,
  abbreviated: /^(oca|şub|mar|nis|may|haz|tem|ağu|eyl|eki|kas|ara)/i,
  wide: /^(ocak|şubat|mart|nisan|mayıs|haziran|temmuz|ağustos|eylül|ekim|kasım|aralık)/i
}, cI = {
  narrow: [/^o/i, /^ş/i, /^m/i, /^n/i, /^m/i, /^h/i, /^t/i, /^a/i, /^e/i, /^e/i, /^k/i, /^a/i],
  any: [/^o/i, /^ş/i, /^mar/i, /^n/i, /^may/i, /^h/i, /^t/i, /^ağ/i, /^ey/i, /^ek/i, /^k/i, /^ar/i]
}, fI = {
  narrow: /^[psçc]/i,
  short: /^(pz|pt|sa|ça|pe|cu|ct)/i,
  abbreviated: /^(paz|pzt|sal|çar|per|cum|cts)/i,
  wide: /^(pazar(?!tesi)|pazartesi|salı|çarşamba|perşembe|cuma(?!rtesi)|cumartesi)/i
}, mI = {
  narrow: [/^p/i, /^p/i, /^s/i, /^ç/i, /^p/i, /^c/i, /^c/i],
  any: [/^pz/i, /^pt/i, /^sa/i, /^ça/i, /^pe/i, /^cu/i, /^ct/i],
  wide: [/^pazar(?!tesi)/i, /^pazartesi/i, /^salı/i, /^çarşamba/i, /^perşembe/i, /^cuma(?!rtesi)/i, /^cumartesi/i]
}, hI = {
  narrow: /^(öö|ös|gy|ö|sa|ös|ak|ge)/i,
  any: /^(ö\.?\s?[ös]\.?|öğleden sonra|gece yarısı|öğle|(sabah|öğ|akşam|gece)(leyin))/i
}, vI = {
  any: {
    am: /^ö\.?ö\.?/i,
    pm: /^ö\.?s\.?/i,
    midnight: /^(gy|gece yarısı)/i,
    noon: /^öğ/i,
    morning: /^sa/i,
    afternoon: /^öğleden sonra/i,
    evening: /^ak/i,
    night: /^ge/i
  }
}, pI = {
  ordinalNumber: xe({
    matchPattern: aI,
    parsePattern: iI,
    valueCallback: function(n) {
      return parseInt(n, 10);
    }
  }),
  era: D({
    matchPatterns: oI,
    defaultMatchWidth: "wide",
    parsePatterns: lI,
    defaultParseWidth: "any"
  }),
  quarter: D({
    matchPatterns: uI,
    defaultMatchWidth: "wide",
    parsePatterns: sI,
    defaultParseWidth: "any",
    valueCallback: function(n) {
      return n + 1;
    }
  }),
  month: D({
    matchPatterns: dI,
    defaultMatchWidth: "wide",
    parsePatterns: cI,
    defaultParseWidth: "any"
  }),
  day: D({
    matchPatterns: fI,
    defaultMatchWidth: "wide",
    parsePatterns: mI,
    defaultParseWidth: "any"
  }),
  dayPeriod: D({
    matchPatterns: hI,
    defaultMatchWidth: "any",
    parsePatterns: vI,
    defaultParseWidth: "any"
  })
};
const gI = pI;
var yI = {
  code: "tr",
  formatDistance: HF,
  formatLong: qF,
  formatRelative: GF,
  localize: nI,
  match: gI,
  options: {
    weekStartsOn: 1,
    firstWeekContainsDate: 1
  }
};
const bI = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: yI
}, Symbol.toStringTag, { value: "Module" })), wI = /* @__PURE__ */ be(bI);
var PI = H && H.__importDefault || function(t) {
  return t && t.__esModule ? t : { default: t };
};
Object.defineProperty(ls, "__esModule", { value: !0 });
const MI = PI(wI), _I = {
  name: "zh-CN",
  locale: MI.default
};
ls.default = _I;
var us = {}, $I = {
  lessThanXSeconds: {
    one: "malpli ol sekundo",
    other: "malpli ol {{count}} sekundoj"
  },
  xSeconds: {
    one: "1 sekundo",
    other: "{{count}} sekundoj"
  },
  halfAMinute: "duonminuto",
  lessThanXMinutes: {
    one: "malpli ol minuto",
    other: "malpli ol {{count}} minutoj"
  },
  xMinutes: {
    one: "1 minuto",
    other: "{{count}} minutoj"
  },
  aboutXHours: {
    one: "proksimume 1 horo",
    other: "proksimume {{count}} horoj"
  },
  xHours: {
    one: "1 horo",
    other: "{{count}} horoj"
  },
  xDays: {
    one: "1 tago",
    other: "{{count}} tagoj"
  },
  aboutXMonths: {
    one: "proksimume 1 monato",
    other: "proksimume {{count}} monatoj"
  },
  xWeeks: {
    one: "1 semajno",
    other: "{{count}} semajnoj"
  },
  aboutXWeeks: {
    one: "proksimume 1 semajno",
    other: "proksimume {{count}} semajnoj"
  },
  xMonths: {
    one: "1 monato",
    other: "{{count}} monatoj"
  },
  aboutXYears: {
    one: "proksimume 1 jaro",
    other: "proksimume {{count}} jaroj"
  },
  xYears: {
    one: "1 jaro",
    other: "{{count}} jaroj"
  },
  overXYears: {
    one: "pli ol 1 jaro",
    other: "pli ol {{count}} jaroj"
  },
  almostXYears: {
    one: "preskaŭ 1 jaro",
    other: "preskaŭ {{count}} jaroj"
  }
}, TI = function(n, a, o) {
  var l, d = $I[n];
  return typeof d == "string" ? l = d : a === 1 ? l = d.one : l = d.other.replace("{{count}}", String(a)), o != null && o.addSuffix ? o != null && o.comparison && o.comparison > 0 ? "post " + l : "antaŭ " + l : l;
};
const kI = TI;
var SI = {
  full: "EEEE, do 'de' MMMM y",
  long: "y-MMMM-dd",
  medium: "y-MMM-dd",
  short: "yyyy-MM-dd"
}, CI = {
  full: "Ho 'horo kaj' m:ss zzzz",
  long: "HH:mm:ss z",
  medium: "HH:mm:ss",
  short: "HH:mm"
}, DI = {
  any: "{{date}} {{time}}"
}, WI = {
  date: L({
    formats: SI,
    defaultWidth: "full"
  }),
  time: L({
    formats: CI,
    defaultWidth: "full"
  }),
  dateTime: L({
    formats: DI,
    defaultWidth: "any"
  })
};
const xI = WI;
var OI = {
  lastWeek: "'pasinta' eeee 'je' p",
  yesterday: "'hieraŭ je' p",
  today: "'hodiaŭ je' p",
  tomorrow: "'morgaŭ je' p",
  nextWeek: "eeee 'je' p",
  other: "P"
}, zI = function(n, a, o, l) {
  return OI[n];
};
const EI = zI;
var jI = {
  narrow: ["aK", "pK"],
  abbreviated: ["a.K.E.", "p.K.E."],
  wide: ["antaŭ Komuna Erao", "Komuna Erao"]
}, AI = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["K1", "K2", "K3", "K4"],
  wide: ["1-a kvaronjaro", "2-a kvaronjaro", "3-a kvaronjaro", "4-a kvaronjaro"]
}, FI = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: ["jan", "feb", "mar", "apr", "maj", "jun", "jul", "aŭg", "sep", "okt", "nov", "dec"],
  wide: ["januaro", "februaro", "marto", "aprilo", "majo", "junio", "julio", "aŭgusto", "septembro", "oktobro", "novembro", "decembro"]
}, II = {
  narrow: ["D", "L", "M", "M", "Ĵ", "V", "S"],
  short: ["di", "lu", "ma", "me", "ĵa", "ve", "sa"],
  abbreviated: ["dim", "lun", "mar", "mer", "ĵaŭ", "ven", "sab"],
  wide: ["dimanĉo", "lundo", "mardo", "merkredo", "ĵaŭdo", "vendredo", "sabato"]
}, NI = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "noktomezo",
    noon: "tagmezo",
    morning: "matene",
    afternoon: "posttagmeze",
    evening: "vespere",
    night: "nokte"
  },
  abbreviated: {
    am: "a.t.m.",
    pm: "p.t.m.",
    midnight: "noktomezo",
    noon: "tagmezo",
    morning: "matene",
    afternoon: "posttagmeze",
    evening: "vespere",
    night: "nokte"
  },
  wide: {
    am: "antaŭtagmeze",
    pm: "posttagmeze",
    midnight: "noktomezo",
    noon: "tagmezo",
    morning: "matene",
    afternoon: "posttagmeze",
    evening: "vespere",
    night: "nokte"
  }
}, HI = function(n) {
  var a = Number(n);
  return a + "-a";
}, RI = {
  ordinalNumber: HI,
  era: C({
    values: jI,
    defaultWidth: "wide"
  }),
  quarter: C({
    values: AI,
    defaultWidth: "wide",
    argumentCallback: function(n) {
      return Number(n) - 1;
    }
  }),
  month: C({
    values: FI,
    defaultWidth: "wide"
  }),
  day: C({
    values: II,
    defaultWidth: "wide"
  }),
  dayPeriod: C({
    values: NI,
    defaultWidth: "wide"
  })
};
const LI = RI;
var BI = /^(\d+)(-?a)?/i, VI = /\d+/i, qI = {
  narrow: /^([ap]k)/i,
  abbreviated: /^([ap]\.?\s?k\.?\s?e\.?)/i,
  wide: /^((antaǔ |post )?komuna erao)/i
}, XI = {
  any: [/^a/i, /^[kp]/i]
}, KI = {
  narrow: /^[1234]/i,
  abbreviated: /^k[1234]/i,
  wide: /^[1234](-?a)? kvaronjaro/i
}, GI = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, UI = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|maj|jun|jul|a(ŭ|ux|uh|u)g|sep|okt|nov|dec)/i,
  wide: /^(januaro|februaro|marto|aprilo|majo|junio|julio|a(ŭ|ux|uh|u)gusto|septembro|oktobro|novembro|decembro)/i
}, YI = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^maj/i, /^jun/i, /^jul/i, /^a(u|ŭ)/i, /^s/i, /^o/i, /^n/i, /^d/i]
}, ZI = {
  narrow: /^[dlmĵjvs]/i,
  short: /^(di|lu|ma|me|(ĵ|jx|jh|j)a|ve|sa)/i,
  abbreviated: /^(dim|lun|mar|mer|(ĵ|jx|jh|j)a(ŭ|ux|uh|u)|ven|sab)/i,
  wide: /^(diman(ĉ|cx|ch|c)o|lundo|mardo|merkredo|(ĵ|jx|jh|j)a(ŭ|ux|uh|u)do|vendredo|sabato)/i
}, JI = {
  narrow: [/^d/i, /^l/i, /^m/i, /^m/i, /^(j|ĵ)/i, /^v/i, /^s/i],
  any: [/^d/i, /^l/i, /^ma/i, /^me/i, /^(j|ĵ)/i, /^v/i, /^s/i]
}, QI = {
  narrow: /^([ap]|(posttagmez|noktomez|tagmez|maten|vesper|nokt)[eo])/i,
  abbreviated: /^([ap][.\s]?t[.\s]?m[.\s]?|(posttagmez|noktomez|tagmez|maten|vesper|nokt)[eo])/i,
  wide: /^(anta(ŭ|ux)tagmez|posttagmez|noktomez|tagmez|maten|vesper|nokt)[eo]/i
}, eN = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^noktom/i,
    noon: /^t/i,
    morning: /^m/i,
    afternoon: /^posttagmeze/i,
    evening: /^v/i,
    night: /^n/i
  }
}, tN = {
  ordinalNumber: xe({
    matchPattern: BI,
    parsePattern: VI,
    valueCallback: function(n) {
      return parseInt(n, 10);
    }
  }),
  era: D({
    matchPatterns: qI,
    defaultMatchWidth: "wide",
    parsePatterns: XI,
    defaultParseWidth: "any"
  }),
  quarter: D({
    matchPatterns: KI,
    defaultMatchWidth: "wide",
    parsePatterns: GI,
    defaultParseWidth: "any",
    valueCallback: function(n) {
      return n + 1;
    }
  }),
  month: D({
    matchPatterns: UI,
    defaultMatchWidth: "wide",
    parsePatterns: YI,
    defaultParseWidth: "any"
  }),
  day: D({
    matchPatterns: ZI,
    defaultMatchWidth: "wide",
    parsePatterns: JI,
    defaultParseWidth: "any"
  }),
  dayPeriod: D({
    matchPatterns: QI,
    defaultMatchWidth: "wide",
    parsePatterns: eN,
    defaultParseWidth: "any"
  })
};
const rN = tN;
var nN = {
  code: "eo",
  formatDistance: kI,
  formatLong: xI,
  formatRelative: EI,
  localize: LI,
  match: rN,
  options: {
    weekStartsOn: 1,
    firstWeekContainsDate: 4
  }
};
const aN = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: nN
}, Symbol.toStringTag, { value: "Module" })), iN = /* @__PURE__ */ be(aN);
var oN = H && H.__importDefault || function(t) {
  return t && t.__esModule ? t : { default: t };
};
Object.defineProperty(us, "__esModule", { value: !0 });
const lN = oN(iN), uN = {
  name: "eo",
  locale: lN.default
};
us.default = uN;
var ss = {}, sN = {
  lessThanXSeconds: {
    one: "dưới 1 giây",
    other: "dưới {{count}} giây"
  },
  xSeconds: {
    one: "1 giây",
    other: "{{count}} giây"
  },
  halfAMinute: "nửa phút",
  lessThanXMinutes: {
    one: "dưới 1 phút",
    other: "dưới {{count}} phút"
  },
  xMinutes: {
    one: "1 phút",
    other: "{{count}} phút"
  },
  aboutXHours: {
    one: "khoảng 1 giờ",
    other: "khoảng {{count}} giờ"
  },
  xHours: {
    one: "1 giờ",
    other: "{{count}} giờ"
  },
  xDays: {
    one: "1 ngày",
    other: "{{count}} ngày"
  },
  aboutXWeeks: {
    one: "khoảng 1 tuần",
    other: "khoảng {{count}} tuần"
  },
  xWeeks: {
    one: "1 tuần",
    other: "{{count}} tuần"
  },
  aboutXMonths: {
    one: "khoảng 1 tháng",
    other: "khoảng {{count}} tháng"
  },
  xMonths: {
    one: "1 tháng",
    other: "{{count}} tháng"
  },
  aboutXYears: {
    one: "khoảng 1 năm",
    other: "khoảng {{count}} năm"
  },
  xYears: {
    one: "1 năm",
    other: "{{count}} năm"
  },
  overXYears: {
    one: "hơn 1 năm",
    other: "hơn {{count}} năm"
  },
  almostXYears: {
    one: "gần 1 năm",
    other: "gần {{count}} năm"
  }
}, dN = function(n, a, o) {
  var l, d = sN[n];
  return typeof d == "string" ? l = d : a === 1 ? l = d.one : l = d.other.replace("{{count}}", String(a)), o != null && o.addSuffix ? o.comparison && o.comparison > 0 ? l + " nữa" : l + " trước" : l;
};
const cN = dN;
var fN = {
  // thứ Sáu, ngày 25 tháng 08 năm 2017
  full: "EEEE, 'ngày' d MMMM 'năm' y",
  // ngày 25 tháng 08 năm 2017
  long: "'ngày' d MMMM 'năm' y",
  // 25 thg 08 năm 2017
  medium: "d MMM 'năm' y",
  // 25/08/2017
  short: "dd/MM/y"
}, mN = {
  full: "HH:mm:ss zzzz",
  long: "HH:mm:ss z",
  medium: "HH:mm:ss",
  short: "HH:mm"
}, hN = {
  // thứ Sáu, ngày 25 tháng 08 năm 2017 23:25:59
  full: "{{date}} {{time}}",
  // ngày 25 tháng 08 năm 2017 23:25
  long: "{{date}} {{time}}",
  medium: "{{date}} {{time}}",
  short: "{{date}} {{time}}"
}, vN = {
  date: L({
    formats: fN,
    defaultWidth: "full"
  }),
  time: L({
    formats: mN,
    defaultWidth: "full"
  }),
  dateTime: L({
    formats: hN,
    defaultWidth: "full"
  })
};
const pN = vN;
var gN = {
  lastWeek: "eeee 'tuần trước vào lúc' p",
  yesterday: "'hôm qua vào lúc' p",
  today: "'hôm nay vào lúc' p",
  tomorrow: "'ngày mai vào lúc' p",
  nextWeek: "eeee 'tới vào lúc' p",
  other: "P"
}, yN = function(n, a, o, l) {
  return gN[n];
};
const bN = yN;
var wN = {
  narrow: ["TCN", "SCN"],
  abbreviated: ["trước CN", "sau CN"],
  wide: ["trước Công Nguyên", "sau Công Nguyên"]
}, PN = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["Quý 1", "Quý 2", "Quý 3", "Quý 4"]
}, MN = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  // I notice many news outlet use this "quý II/2018"
  wide: ["quý I", "quý II", "quý III", "quý IV"]
}, _N = {
  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
  abbreviated: ["Thg 1", "Thg 2", "Thg 3", "Thg 4", "Thg 5", "Thg 6", "Thg 7", "Thg 8", "Thg 9", "Thg 10", "Thg 11", "Thg 12"],
  wide: ["Tháng Một", "Tháng Hai", "Tháng Ba", "Tháng Tư", "Tháng Năm", "Tháng Sáu", "Tháng Bảy", "Tháng Tám", "Tháng Chín", "Tháng Mười", "Tháng Mười Một", "Tháng Mười Hai"]
}, $N = {
  narrow: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
  abbreviated: ["thg 1", "thg 2", "thg 3", "thg 4", "thg 5", "thg 6", "thg 7", "thg 8", "thg 9", "thg 10", "thg 11", "thg 12"],
  wide: ["tháng 01", "tháng 02", "tháng 03", "tháng 04", "tháng 05", "tháng 06", "tháng 07", "tháng 08", "tháng 09", "tháng 10", "tháng 11", "tháng 12"]
}, TN = {
  narrow: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"],
  short: ["CN", "Th 2", "Th 3", "Th 4", "Th 5", "Th 6", "Th 7"],
  abbreviated: ["CN", "Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7"],
  wide: ["Chủ Nhật", "Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu", "Thứ Bảy"]
}, kN = {
  // narrow date period is extremely rare in Vietnamese
  // I used abbreviated form for noon, morning and afternoon
  // which are regconizable by Vietnamese, others cannot be any shorter
  narrow: {
    am: "am",
    pm: "pm",
    midnight: "nửa đêm",
    noon: "tr",
    morning: "sg",
    afternoon: "ch",
    evening: "tối",
    night: "đêm"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "nửa đêm",
    noon: "trưa",
    morning: "sáng",
    afternoon: "chiều",
    evening: "tối",
    night: "đêm"
  },
  wide: {
    am: "SA",
    pm: "CH",
    midnight: "nửa đêm",
    noon: "trưa",
    morning: "sáng",
    afternoon: "chiều",
    evening: "tối",
    night: "đêm"
  }
}, SN = {
  narrow: {
    am: "am",
    pm: "pm",
    midnight: "nửa đêm",
    noon: "tr",
    morning: "sg",
    afternoon: "ch",
    evening: "tối",
    night: "đêm"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "nửa đêm",
    noon: "trưa",
    morning: "sáng",
    afternoon: "chiều",
    evening: "tối",
    night: "đêm"
  },
  wide: {
    am: "SA",
    pm: "CH",
    midnight: "nửa đêm",
    noon: "giữa trưa",
    morning: "vào buổi sáng",
    afternoon: "vào buổi chiều",
    evening: "vào buổi tối",
    night: "vào ban đêm"
  }
}, CN = function(n, a) {
  var o = Number(n), l = a == null ? void 0 : a.unit;
  if (l === "quarter")
    switch (o) {
      case 1:
        return "I";
      case 2:
        return "II";
      case 3:
        return "III";
      case 4:
        return "IV";
    }
  else if (l === "day")
    switch (o) {
      case 1:
        return "thứ 2";
      case 2:
        return "thứ 3";
      case 3:
        return "thứ 4";
      case 4:
        return "thứ 5";
      case 5:
        return "thứ 6";
      case 6:
        return "thứ 7";
      case 7:
        return "chủ nhật";
    }
  else {
    if (l === "week")
      return o === 1 ? "thứ nhất" : "thứ " + o;
    if (l === "dayOfYear")
      return o === 1 ? "đầu tiên" : "thứ " + o;
  }
  return String(o);
}, DN = {
  ordinalNumber: CN,
  era: C({
    values: wN,
    defaultWidth: "wide"
  }),
  quarter: C({
    values: PN,
    defaultWidth: "wide",
    formattingValues: MN,
    defaultFormattingWidth: "wide",
    argumentCallback: function(n) {
      return n - 1;
    }
  }),
  month: C({
    values: _N,
    defaultWidth: "wide",
    formattingValues: $N,
    defaultFormattingWidth: "wide"
  }),
  day: C({
    values: TN,
    defaultWidth: "wide"
  }),
  dayPeriod: C({
    values: kN,
    defaultWidth: "wide",
    formattingValues: SN,
    defaultFormattingWidth: "wide"
  })
};
const WN = DN;
var xN = /^(\d+)/i, ON = /\d+/i, zN = {
  narrow: /^(tcn|scn)/i,
  abbreviated: /^(trước CN|sau CN)/i,
  wide: /^(trước Công Nguyên|sau Công Nguyên)/i
}, EN = {
  any: [/^t/i, /^s/i]
}, jN = {
  narrow: /^([1234]|i{1,3}v?)/i,
  abbreviated: /^q([1234]|i{1,3}v?)/i,
  wide: /^quý ([1234]|i{1,3}v?)/i
}, AN = {
  any: [/(1|i)$/i, /(2|ii)$/i, /(3|iii)$/i, /(4|iv)$/i]
}, FN = {
  // month number may contain leading 0, 'thg' prefix may have space, underscore or empty before number
  // note the order of '1' since it is a sub-string of '10', so must be lower priority
  narrow: /^(0?[2-9]|10|11|12|0?1)/i,
  // note the order of 'thg 1' since it is sub-string of 'thg 10', so must be lower priority
  abbreviated: /^thg[ _]?(0?[1-9](?!\d)|10|11|12)/i,
  // note the order of 'Mười' since it is sub-string of Mười Một, so must be lower priority
  wide: /^tháng ?(Một|Hai|Ba|Tư|Năm|Sáu|Bảy|Tám|Chín|Mười|Mười ?Một|Mười ?Hai|0?[1-9](?!\d)|10|11|12)/i
}, IN = {
  narrow: [/0?1$/i, /0?2/i, /3/, /4/, /5/, /6/, /7/, /8/, /9/, /10/, /11/, /12/],
  abbreviated: [/^thg[ _]?0?1(?!\d)/i, /^thg[ _]?0?2/i, /^thg[ _]?0?3/i, /^thg[ _]?0?4/i, /^thg[ _]?0?5/i, /^thg[ _]?0?6/i, /^thg[ _]?0?7/i, /^thg[ _]?0?8/i, /^thg[ _]?0?9/i, /^thg[ _]?10/i, /^thg[ _]?11/i, /^thg[ _]?12/i],
  wide: [/^tháng ?(Một|0?1(?!\d))/i, /^tháng ?(Hai|0?2)/i, /^tháng ?(Ba|0?3)/i, /^tháng ?(Tư|0?4)/i, /^tháng ?(Năm|0?5)/i, /^tháng ?(Sáu|0?6)/i, /^tháng ?(Bảy|0?7)/i, /^tháng ?(Tám|0?8)/i, /^tháng ?(Chín|0?9)/i, /^tháng ?(Mười|10)/i, /^tháng ?(Mười ?Một|11)/i, /^tháng ?(Mười ?Hai|12)/i]
}, NN = {
  narrow: /^(CN|T2|T3|T4|T5|T6|T7)/i,
  short: /^(CN|Th ?2|Th ?3|Th ?4|Th ?5|Th ?6|Th ?7)/i,
  abbreviated: /^(CN|Th ?2|Th ?3|Th ?4|Th ?5|Th ?6|Th ?7)/i,
  wide: /^(Chủ ?Nhật|Chúa ?Nhật|thứ ?Hai|thứ ?Ba|thứ ?Tư|thứ ?Năm|thứ ?Sáu|thứ ?Bảy)/i
}, HN = {
  narrow: [/CN/i, /2/i, /3/i, /4/i, /5/i, /6/i, /7/i],
  short: [/CN/i, /2/i, /3/i, /4/i, /5/i, /6/i, /7/i],
  abbreviated: [/CN/i, /2/i, /3/i, /4/i, /5/i, /6/i, /7/i],
  wide: [/(Chủ|Chúa) ?Nhật/i, /Hai/i, /Ba/i, /Tư/i, /Năm/i, /Sáu/i, /Bảy/i]
}, RN = {
  narrow: /^(a|p|nửa đêm|trưa|(giờ) (sáng|chiều|tối|đêm))/i,
  abbreviated: /^(am|pm|nửa đêm|trưa|(giờ) (sáng|chiều|tối|đêm))/i,
  wide: /^(ch[^i]*|sa|nửa đêm|trưa|(giờ) (sáng|chiều|tối|đêm))/i
}, LN = {
  any: {
    am: /^(a|sa)/i,
    pm: /^(p|ch[^i]*)/i,
    midnight: /nửa đêm/i,
    noon: /trưa/i,
    morning: /sáng/i,
    afternoon: /chiều/i,
    evening: /tối/i,
    night: /^đêm/i
  }
}, BN = {
  ordinalNumber: xe({
    matchPattern: xN,
    parsePattern: ON,
    valueCallback: function(n) {
      return parseInt(n, 10);
    }
  }),
  era: D({
    matchPatterns: zN,
    defaultMatchWidth: "wide",
    parsePatterns: EN,
    defaultParseWidth: "any"
  }),
  quarter: D({
    matchPatterns: jN,
    defaultMatchWidth: "wide",
    parsePatterns: AN,
    defaultParseWidth: "any",
    valueCallback: function(n) {
      return n + 1;
    }
  }),
  month: D({
    matchPatterns: FN,
    defaultMatchWidth: "wide",
    parsePatterns: IN,
    defaultParseWidth: "wide"
  }),
  day: D({
    matchPatterns: NN,
    defaultMatchWidth: "wide",
    parsePatterns: HN,
    defaultParseWidth: "wide"
  }),
  dayPeriod: D({
    matchPatterns: RN,
    defaultMatchWidth: "wide",
    parsePatterns: LN,
    defaultParseWidth: "any"
  })
};
const VN = BN;
var qN = {
  code: "vi",
  formatDistance: cN,
  formatLong: pN,
  formatRelative: bN,
  localize: WN,
  match: VN,
  options: {
    weekStartsOn: 1,
    firstWeekContainsDate: 1
    /* First week of new year contains Jan 1st  */
  }
};
const XN = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: qN
}, Symbol.toStringTag, { value: "Module" })), KN = /* @__PURE__ */ be(XN);
var GN = H && H.__importDefault || function(t) {
  return t && t.__esModule ? t : { default: t };
};
Object.defineProperty(ss, "__esModule", { value: !0 });
const UN = GN(KN), YN = {
  name: "vi-VN",
  locale: UN.default
};
ss.default = YN;
var ds = {}, ZN = H && H.__importDefault || function(t) {
  return t && t.__esModule ? t : { default: t };
};
Object.defineProperty(ds, "__esModule", { value: !0 });
const JN = ZN(Zm), QN = {
  name: "fa-IR",
  locale: JN.default
};
ds.default = QN;
var Vi = {};
Object.defineProperty(Vi, "__esModule", { value: !0 });
Vi.createLocale = void 0;
const eH = zm;
function tH(t, n) {
  return (0, eH.merge)({}, n, t);
}
Vi.createLocale = tH;
(function(t) {
  var n = H && H.__importDefault || function(Ot) {
    return Ot && Ot.__esModule ? Ot : { default: Ot };
  };
  Object.defineProperty(t, "__esModule", { value: !0 }), t.createLocale = t.dateFaIR = t.dateViVN = t.dateEo = t.dateTrTR = t.dateArDZ = t.dateThTH = t.datePtBR = t.datePlPL = t.dateEnGB = t.dateSkSK = t.dateItIT = t.dateEsAR = t.dateFrFR = t.dateNlNL = t.dateNbNO = t.dateDeDE = t.dateIdID = t.dateKoKR = t.dateJaJP = t.dateUkUA = t.dateRuRU = t.dateEnUS = t.dateZhTW = t.dateZhCN = t.faIR = t.viVN = t.eo = t.trTR = t.arDZ = t.thTH = t.ptBR = t.plPL = t.enGB = t.skSK = t.itIT = t.esAR = t.frFR = t.nlNL = t.nbNO = t.deDE = t.idID = t.koKR = t.jaJP = t.ukUA = t.ruRU = t.enUS = t.zhTW = t.zhCN = void 0;
  var a = cu;
  Object.defineProperty(t, "zhCN", { enumerable: !0, get: function() {
    return n(a).default;
  } });
  var o = fu;
  Object.defineProperty(t, "zhTW", { enumerable: !0, get: function() {
    return n(o).default;
  } });
  var l = mu;
  Object.defineProperty(t, "enUS", { enumerable: !0, get: function() {
    return n(l).default;
  } });
  var d = hu;
  Object.defineProperty(t, "ruRU", { enumerable: !0, get: function() {
    return n(d).default;
  } });
  var m = vu;
  Object.defineProperty(t, "ukUA", { enumerable: !0, get: function() {
    return n(m).default;
  } });
  var b = pu;
  Object.defineProperty(t, "jaJP", { enumerable: !0, get: function() {
    return n(b).default;
  } });
  var y = gu;
  Object.defineProperty(t, "koKR", { enumerable: !0, get: function() {
    return n(y).default;
  } });
  var w = yu;
  Object.defineProperty(t, "idID", { enumerable: !0, get: function() {
    return n(w).default;
  } });
  var $ = bu;
  Object.defineProperty(t, "deDE", { enumerable: !0, get: function() {
    return n($).default;
  } });
  var W = wu;
  Object.defineProperty(t, "nbNO", { enumerable: !0, get: function() {
    return n(W).default;
  } });
  var x = Pu;
  Object.defineProperty(t, "nlNL", { enumerable: !0, get: function() {
    return n(x).default;
  } });
  var E = Mu;
  Object.defineProperty(t, "frFR", { enumerable: !0, get: function() {
    return n(E).default;
  } });
  var _ = _u;
  Object.defineProperty(t, "esAR", { enumerable: !0, get: function() {
    return n(_).default;
  } });
  var N = $u;
  Object.defineProperty(t, "itIT", { enumerable: !0, get: function() {
    return n(N).default;
  } });
  var O = Tu;
  Object.defineProperty(t, "skSK", { enumerable: !0, get: function() {
    return n(O).default;
  } });
  var T = ku;
  Object.defineProperty(t, "enGB", { enumerable: !0, get: function() {
    return n(T).default;
  } });
  var q = Su;
  Object.defineProperty(t, "plPL", { enumerable: !0, get: function() {
    return n(q).default;
  } });
  var Q = Cu;
  Object.defineProperty(t, "ptBR", { enumerable: !0, get: function() {
    return n(Q).default;
  } });
  var ae = Du;
  Object.defineProperty(t, "thTH", { enumerable: !0, get: function() {
    return n(ae).default;
  } });
  var oe = Wu;
  Object.defineProperty(t, "arDZ", { enumerable: !0, get: function() {
    return n(oe).default;
  } });
  var Pe = xu;
  Object.defineProperty(t, "trTR", { enumerable: !0, get: function() {
    return n(Pe).default;
  } });
  var j = Ou;
  Object.defineProperty(t, "eo", { enumerable: !0, get: function() {
    return n(j).default;
  } });
  var A = zu;
  Object.defineProperty(t, "viVN", { enumerable: !0, get: function() {
    return n(A).default;
  } });
  var Z = Eu;
  Object.defineProperty(t, "faIR", { enumerable: !0, get: function() {
    return n(Z).default;
  } });
  var ce = ju;
  Object.defineProperty(t, "dateZhCN", { enumerable: !0, get: function() {
    return n(ce).default;
  } });
  var F = Iu;
  Object.defineProperty(t, "dateZhTW", { enumerable: !0, get: function() {
    return n(F).default;
  } });
  var V = Nu;
  Object.defineProperty(t, "dateEnUS", { enumerable: !0, get: function() {
    return n(V).default;
  } });
  var re = Hu;
  Object.defineProperty(t, "dateRuRU", { enumerable: !0, get: function() {
    return n(re).default;
  } });
  var le = Lu;
  Object.defineProperty(t, "dateUkUA", { enumerable: !0, get: function() {
    return n(le).default;
  } });
  var fe = Vu;
  Object.defineProperty(t, "dateJaJP", { enumerable: !0, get: function() {
    return n(fe).default;
  } });
  var ge = qu;
  Object.defineProperty(t, "dateKoKR", { enumerable: !0, get: function() {
    return n(ge).default;
  } });
  var se = Xu;
  Object.defineProperty(t, "dateIdID", { enumerable: !0, get: function() {
    return n(se).default;
  } });
  var he = Ku;
  Object.defineProperty(t, "dateDeDE", { enumerable: !0, get: function() {
    return n(he).default;
  } });
  var Ae = Gu;
  Object.defineProperty(t, "dateNbNO", { enumerable: !0, get: function() {
    return n(Ae).default;
  } });
  var Le = Uu;
  Object.defineProperty(t, "dateNlNL", { enumerable: !0, get: function() {
    return n(Le).default;
  } });
  var $e = Yu;
  Object.defineProperty(t, "dateFrFR", { enumerable: !0, get: function() {
    return n($e).default;
  } });
  var it = Zu;
  Object.defineProperty(t, "dateEsAR", { enumerable: !0, get: function() {
    return n(it).default;
  } });
  var wr = Ju;
  Object.defineProperty(t, "dateItIT", { enumerable: !0, get: function() {
    return n(wr).default;
  } });
  var Xi = es;
  Object.defineProperty(t, "dateSkSK", { enumerable: !0, get: function() {
    return n(Xi).default;
  } });
  var nr = rs;
  Object.defineProperty(t, "dateEnGB", { enumerable: !0, get: function() {
    return n(nr).default;
  } });
  var Rr = ns;
  Object.defineProperty(t, "datePlPL", { enumerable: !0, get: function() {
    return n(Rr).default;
  } });
  var Ki = as;
  Object.defineProperty(t, "datePtBR", { enumerable: !0, get: function() {
    return n(Ki).default;
  } });
  var Pr = is;
  Object.defineProperty(t, "dateThTH", { enumerable: !0, get: function() {
    return n(Pr).default;
  } });
  var Mr = os;
  Object.defineProperty(t, "dateArDZ", { enumerable: !0, get: function() {
    return n(Mr).default;
  } });
  var Gi = ls;
  Object.defineProperty(t, "dateTrTR", { enumerable: !0, get: function() {
    return n(Gi).default;
  } });
  var Lr = us;
  Object.defineProperty(t, "dateEo", { enumerable: !0, get: function() {
    return n(Lr).default;
  } });
  var Br = ss;
  Object.defineProperty(t, "dateViVN", { enumerable: !0, get: function() {
    return n(Br).default;
  } });
  var ea = ds;
  Object.defineProperty(t, "dateFaIR", { enumerable: !0, get: function() {
    return n(ea).default;
  } });
  var ot = Vi;
  Object.defineProperty(t, "createLocale", { enumerable: !0, get: function() {
    return ot.createLocale;
  } });
})(Um);
Object.defineProperty(du, "__esModule", { value: !0 });
const zl = je, Gf = Um, rH = rr;
function nH(t) {
  const { mergedLocaleRef: n, mergedDateLocaleRef: a } = (0, zl.inject)(rH.configProviderInjectionKey, null) || {}, o = (0, zl.computed)(() => {
    var d, m;
    return (m = (d = n == null ? void 0 : n.value) === null || d === void 0 ? void 0 : d[t]) !== null && m !== void 0 ? m : Gf.enUS[t];
  });
  return {
    dateLocaleRef: (0, zl.computed)(() => {
      var d;
      return (d = a == null ? void 0 : a.value) !== null && d !== void 0 ? d : Gf.dateEnUS;
    }),
    localeRef: o
  };
}
du.default = nH;
var cs = {}, aH = H && H.__importDefault || function(t) {
  return t && t.__esModule ? t : { default: t };
};
Object.defineProperty(cs, "__esModule", { value: !0 });
const Uf = je, iH = Li, oH = rr, lH = aH(Bi), uH = vn, Yf = gn;
function sH(t, n, a) {
  if (!n) {
    process.env.NODE_ENV !== "production" && (0, uH.throwError)("use-style", "No style is specified.");
    return;
  }
  const o = (0, iH.useSsrAdapter)(), l = (0, Uf.inject)(oH.configProviderInjectionKey, null), d = () => {
    const m = a == null ? void 0 : a.value;
    n.mount({
      id: m === void 0 ? t : m + t,
      head: !0,
      anchorMetaName: Yf.cssrAnchorMetaName,
      props: {
        bPrefix: m ? `.${m}-` : void 0
      },
      ssr: o
    }), l != null && l.preflightStyleDisabled || lH.default.mount({
      id: "n-global",
      head: !0,
      anchorMetaName: Yf.cssrAnchorMetaName,
      ssr: o
    });
  };
  o ? d() : (0, Uf.onBeforeMount)(d);
}
cs.default = sH;
var fs = {};
Object.defineProperty(fs, "__esModule", { value: !0 });
const El = je, dH = rr, cH = vn;
function fH(t, n) {
  const a = (0, El.inject)(dH.configProviderInjectionKey, null);
  if (process.env.NODE_ENV !== "production") {
    const o = () => {
      !t.hljs && !(a != null && a.mergedHljsRef.value) && (0, cH.warn)("code", "hljs is not set.");
    };
    n ? (0, El.watchEffect)(() => {
      n.value && o();
    }) : o();
  }
  return (0, El.computed)(() => t.hljs || (a == null ? void 0 : a.mergedHljsRef.value));
}
fs.default = fH;
var qi = {};
Object.defineProperty(qi, "__esModule", { value: !0 });
qi.useThemeClass = void 0;
const jl = je, Zf = lu, mH = Li, hH = rr, vH = vn, pH = Wi;
function gH(t, n, a, o) {
  var l;
  a || (0, vH.throwError)("useThemeClass", "cssVarsRef is not passed");
  const d = (l = (0, jl.inject)(hH.configProviderInjectionKey, null)) === null || l === void 0 ? void 0 : l.mergedThemeHashRef, m = (0, jl.ref)(""), b = (0, mH.useSsrAdapter)();
  let y;
  const w = `__${t}`, $ = () => {
    let W = w;
    const x = n ? n.value : void 0, E = d == null ? void 0 : d.value;
    E && (W += "-" + E), x && (W += "-" + x);
    const { themeOverrides: _, builtinThemeOverrides: N } = o;
    _ && (W += "-" + (0, Zf.hash)(JSON.stringify(_))), N && (W += "-" + (0, Zf.hash)(JSON.stringify(N))), m.value = W, y = () => {
      const O = a.value;
      let T = "";
      for (const q in O)
        T += `${q}: ${O[q]};`;
      (0, pH.c)(`.${W}`, T).mount({
        id: W,
        ssr: b
      }), y = void 0;
    };
  };
  return (0, jl.watchEffect)(() => {
    $();
  }), {
    themeClass: m,
    onRender: () => {
      y == null || y();
    }
  };
}
qi.useThemeClass = gH;
(function(t) {
  var n = H && H.__importDefault || function($) {
    return $ && $.__esModule ? $ : { default: $ };
  };
  Object.defineProperty(t, "__esModule", { value: !0 }), t.useRtl = t.useThemeClass = t.useHljs = t.useStyle = t.useLocale = t.defaultClsPrefix = t.useConfig = t.createTheme = t.useTheme = t.useFormItem = void 0;
  var a = Xm;
  Object.defineProperty(t, "useFormItem", { enumerable: !0, get: function() {
    return n(a).default;
  } });
  var o = Jn;
  Object.defineProperty(t, "useTheme", { enumerable: !0, get: function() {
    return n(o).default;
  } }), Object.defineProperty(t, "createTheme", { enumerable: !0, get: function() {
    return o.createTheme;
  } });
  var l = Gm;
  Object.defineProperty(t, "useConfig", { enumerable: !0, get: function() {
    return n(l).default;
  } }), Object.defineProperty(t, "defaultClsPrefix", { enumerable: !0, get: function() {
    return l.defaultClsPrefix;
  } });
  var d = du;
  Object.defineProperty(t, "useLocale", { enumerable: !0, get: function() {
    return n(d).default;
  } });
  var m = cs;
  Object.defineProperty(t, "useStyle", { enumerable: !0, get: function() {
    return n(m).default;
  } });
  var b = fs;
  Object.defineProperty(t, "useHljs", { enumerable: !0, get: function() {
    return n(b).default;
  } });
  var y = qi;
  Object.defineProperty(t, "useThemeClass", { enumerable: !0, get: function() {
    return y.useThemeClass;
  } });
  var w = Ri;
  Object.defineProperty(t, "useRtl", { enumerable: !0, get: function() {
    return w.useRtl;
  } });
})(P_);
var yH = {}, ms = {}, bH = H && H.__importDefault || function(t) {
  return t && t.__esModule ? t : { default: t };
};
Object.defineProperty(ms, "__esModule", { value: !0 });
const Kn = vm, wH = bH(Qn), R = {
  neutralBase: "#000",
  neutralInvertBase: "#fff",
  neutralTextBase: "#fff",
  neutralPopover: "rgb(72, 72, 78)",
  neutralCard: "rgb(24, 24, 28)",
  neutralModal: "rgb(44, 44, 50)",
  neutralBody: "rgb(16, 16, 20)",
  alpha1: "0.9",
  alpha2: "0.82",
  alpha3: "0.52",
  alpha4: "0.38",
  alpha5: "0.28",
  alphaClose: "0.52",
  alphaDisabled: "0.38",
  alphaDisabledInput: "0.06",
  alphaPending: "0.09",
  alphaTablePending: "0.06",
  alphaTableStriped: "0.05",
  alphaPressed: "0.05",
  alphaAvatar: "0.18",
  alphaRail: "0.2",
  alphaProgressRail: "0.12",
  alphaBorder: "0.24",
  alphaDivider: "0.09",
  alphaInput: "0.1",
  alphaAction: "0.06",
  alphaTab: "0.04",
  alphaScrollbar: "0.2",
  alphaScrollbarHover: "0.3",
  alphaCode: "0.12",
  alphaTag: "0.2",
  // primary
  primaryHover: "#7fe7c4",
  primaryDefault: "#63e2b7",
  primaryActive: "#5acea7",
  primarySuppl: "rgb(42, 148, 125)",
  // info
  infoHover: "#8acbec",
  infoDefault: "#70c0e8",
  infoActive: "#66afd3",
  infoSuppl: "rgb(56, 137, 197)",
  // error
  errorHover: "#e98b8b",
  errorDefault: "#e88080",
  errorActive: "#e57272",
  errorSuppl: "rgb(208, 58, 82)",
  // warning
  warningHover: "#f5d599",
  warningDefault: "#f2c97d",
  warningActive: "#e6c260",
  warningSuppl: "rgb(240, 138, 0)",
  // success
  successHover: "#7fe7c4",
  successDefault: "#63e2b7",
  successActive: "#5acea7",
  successSuppl: "rgb(42, 148, 125)"
}, PH = (0, Kn.rgba)(R.neutralBase), nh = (0, Kn.rgba)(R.neutralInvertBase), MH = "rgba(" + nh.slice(0, 3).join(", ") + ", ";
function ve(t) {
  return MH + String(t) + ")";
}
function _H(t) {
  const n = Array.from(nh);
  return n[3] = Number(t), (0, Kn.composite)(PH, n);
}
const $H = Object.assign(Object.assign({ name: "common" }, wH.default), {
  baseColor: R.neutralBase,
  // primary color
  primaryColor: R.primaryDefault,
  primaryColorHover: R.primaryHover,
  primaryColorPressed: R.primaryActive,
  primaryColorSuppl: R.primarySuppl,
  // info color
  infoColor: R.infoDefault,
  infoColorHover: R.infoHover,
  infoColorPressed: R.infoActive,
  infoColorSuppl: R.infoSuppl,
  // success color
  successColor: R.successDefault,
  successColorHover: R.successHover,
  successColorPressed: R.successActive,
  successColorSuppl: R.successSuppl,
  // warning color
  warningColor: R.warningDefault,
  warningColorHover: R.warningHover,
  warningColorPressed: R.warningActive,
  warningColorSuppl: R.warningSuppl,
  // error color
  errorColor: R.errorDefault,
  errorColorHover: R.errorHover,
  errorColorPressed: R.errorActive,
  errorColorSuppl: R.errorSuppl,
  // text color
  textColorBase: R.neutralTextBase,
  textColor1: ve(R.alpha1),
  textColor2: ve(R.alpha2),
  textColor3: ve(R.alpha3),
  // textColor4: overlay(base.alpha4), // disabled, placeholder, icon
  // textColor5: overlay(base.alpha5),
  textColorDisabled: ve(R.alpha4),
  placeholderColor: ve(R.alpha4),
  placeholderColorDisabled: ve(R.alpha5),
  iconColor: ve(R.alpha4),
  iconColorDisabled: ve(R.alpha5),
  iconColorHover: ve(Number(R.alpha4) * 1.25),
  iconColorPressed: ve(Number(R.alpha4) * 0.8),
  opacity1: R.alpha1,
  opacity2: R.alpha2,
  opacity3: R.alpha3,
  opacity4: R.alpha4,
  opacity5: R.alpha5,
  dividerColor: ve(R.alphaDivider),
  borderColor: ve(R.alphaBorder),
  // close
  closeIconColorHover: ve(Number(R.alphaClose)),
  closeIconColor: ve(Number(R.alphaClose)),
  closeIconColorPressed: ve(Number(R.alphaClose)),
  closeColorHover: "rgba(255, 255, 255, .12)",
  closeColorPressed: "rgba(255, 255, 255, .08)",
  // clear
  clearColor: ve(R.alpha4),
  clearColorHover: (0, Kn.scaleColor)(ve(R.alpha4), { alpha: 1.25 }),
  clearColorPressed: (0, Kn.scaleColor)(ve(R.alpha4), { alpha: 0.8 }),
  scrollbarColor: ve(R.alphaScrollbar),
  scrollbarColorHover: ve(R.alphaScrollbarHover),
  scrollbarWidth: "5px",
  scrollbarHeight: "5px",
  scrollbarBorderRadius: "5px",
  progressRailColor: ve(R.alphaProgressRail),
  railColor: ve(R.alphaRail),
  popoverColor: R.neutralPopover,
  tableColor: R.neutralCard,
  cardColor: R.neutralCard,
  modalColor: R.neutralModal,
  bodyColor: R.neutralBody,
  tagColor: _H(R.alphaTag),
  avatarColor: ve(R.alphaAvatar),
  invertedColor: R.neutralBase,
  inputColor: ve(R.alphaInput),
  codeColor: ve(R.alphaCode),
  tabColor: ve(R.alphaTab),
  actionColor: ve(R.alphaAction),
  tableHeaderColor: ve(R.alphaAction),
  hoverColor: ve(R.alphaPending),
  tableColorHover: ve(R.alphaTablePending),
  tableColorStriped: ve(R.alphaTableStriped),
  pressedColor: ve(R.alphaPressed),
  opacityDisabled: R.alphaDisabled,
  inputColorDisabled: ve(R.alphaDisabledInput),
  buttonColor2: "rgba(255, 255, 255, .08)",
  buttonColor2Hover: "rgba(255, 255, 255, .12)",
  buttonColor2Pressed: "rgba(255, 255, 255, .08)",
  boxShadow1: "0 1px 2px -2px rgba(0, 0, 0, .24), 0 3px 6px 0 rgba(0, 0, 0, .18), 0 5px 12px 4px rgba(0, 0, 0, .12)",
  boxShadow2: "0 3px 6px -4px rgba(0, 0, 0, .24), 0 6px 12px 0 rgba(0, 0, 0, .16), 0 9px 18px 8px rgba(0, 0, 0, .10)",
  boxShadow3: "0 6px 16px -9px rgba(0, 0, 0, .08), 0 9px 28px 0 rgba(0, 0, 0, .05), 0 12px 48px 16px rgba(0, 0, 0, .03)"
});
ms.default = $H;
var hs = {}, TH = H && H.__importDefault || function(t) {
  return t && t.__esModule ? t : { default: t };
};
Object.defineProperty(hs, "__esModule", { value: !0 });
const Fr = vm, kH = TH(Qn), K = {
  neutralBase: "#FFF",
  neutralInvertBase: "#000",
  neutralTextBase: "#000",
  neutralPopover: "#fff",
  neutralCard: "#fff",
  neutralModal: "#fff",
  neutralBody: "#fff",
  alpha1: "0.82",
  alpha2: "0.72",
  alpha3: "0.38",
  alpha4: "0.24",
  alpha5: "0.18",
  alphaClose: "0.6",
  alphaDisabled: "0.5",
  alphaDisabledInput: "0.02",
  alphaPending: "0.05",
  alphaTablePending: "0.02",
  alphaPressed: "0.07",
  alphaAvatar: "0.2",
  alphaRail: "0.14",
  alphaProgressRail: ".08",
  alphaBorder: "0.12",
  alphaDivider: "0.06",
  alphaInput: "0",
  alphaAction: "0.02",
  alphaTab: "0.04",
  alphaScrollbar: "0.25",
  alphaScrollbarHover: "0.4",
  alphaCode: "0.05",
  alphaTag: "0.02",
  // primary
  primaryHover: "#36ad6a",
  primaryDefault: "#18a058",
  primaryActive: "#0c7a43",
  primarySuppl: "#36ad6a",
  // info
  infoHover: "#4098fc",
  infoDefault: "#2080f0",
  infoActive: "#1060c9",
  infoSuppl: "#4098fc",
  // error
  errorHover: "#de576d",
  errorDefault: "#d03050",
  errorActive: "#ab1f3f",
  errorSuppl: "#de576d",
  // warning
  warningHover: "#fcb040",
  warningDefault: "#f0a020",
  warningActive: "#c97c10",
  warningSuppl: "#fcb040",
  // success
  successHover: "#36ad6a",
  successDefault: "#18a058",
  successActive: "#0c7a43",
  successSuppl: "#36ad6a"
}, SH = (0, Fr.rgba)(K.neutralBase), ah = (0, Fr.rgba)(K.neutralInvertBase), CH = "rgba(" + ah.slice(0, 3).join(", ") + ", ";
function Jf(t) {
  return CH + String(t) + ")";
}
function qe(t) {
  const n = Array.from(ah);
  return n[3] = Number(t), (0, Fr.composite)(SH, n);
}
const DH = Object.assign(Object.assign({ name: "common" }, kH.default), {
  baseColor: K.neutralBase,
  // primary color
  primaryColor: K.primaryDefault,
  primaryColorHover: K.primaryHover,
  primaryColorPressed: K.primaryActive,
  primaryColorSuppl: K.primarySuppl,
  // info color
  infoColor: K.infoDefault,
  infoColorHover: K.infoHover,
  infoColorPressed: K.infoActive,
  infoColorSuppl: K.infoSuppl,
  // success color
  successColor: K.successDefault,
  successColorHover: K.successHover,
  successColorPressed: K.successActive,
  successColorSuppl: K.successSuppl,
  // warning color
  warningColor: K.warningDefault,
  warningColorHover: K.warningHover,
  warningColorPressed: K.warningActive,
  warningColorSuppl: K.warningSuppl,
  // error color
  errorColor: K.errorDefault,
  errorColorHover: K.errorHover,
  errorColorPressed: K.errorActive,
  errorColorSuppl: K.errorSuppl,
  // text color
  textColorBase: K.neutralTextBase,
  textColor1: "rgb(31, 34, 37)",
  textColor2: "rgb(51, 54, 57)",
  textColor3: "rgb(118, 124, 130)",
  // textColor4: neutral(base.alpha4), // disabled, placeholder, icon
  // textColor5: neutral(base.alpha5),
  textColorDisabled: qe(K.alpha4),
  placeholderColor: qe(K.alpha4),
  placeholderColorDisabled: qe(K.alpha5),
  iconColor: qe(K.alpha4),
  iconColorHover: (0, Fr.scaleColor)(qe(K.alpha4), { lightness: 0.75 }),
  iconColorPressed: (0, Fr.scaleColor)(qe(K.alpha4), { lightness: 0.9 }),
  iconColorDisabled: qe(K.alpha5),
  opacity1: K.alpha1,
  opacity2: K.alpha2,
  opacity3: K.alpha3,
  opacity4: K.alpha4,
  opacity5: K.alpha5,
  dividerColor: "rgb(239, 239, 245)",
  borderColor: "rgb(224, 224, 230)",
  // close
  closeIconColor: qe(Number(K.alphaClose)),
  closeIconColorHover: qe(Number(K.alphaClose)),
  closeIconColorPressed: qe(Number(K.alphaClose)),
  closeColorHover: "rgba(0, 0, 0, .09)",
  closeColorPressed: "rgba(0, 0, 0, .13)",
  // clear
  clearColor: qe(K.alpha4),
  clearColorHover: (0, Fr.scaleColor)(qe(K.alpha4), { lightness: 0.75 }),
  clearColorPressed: (0, Fr.scaleColor)(qe(K.alpha4), { lightness: 0.9 }),
  scrollbarColor: Jf(K.alphaScrollbar),
  scrollbarColorHover: Jf(K.alphaScrollbarHover),
  scrollbarWidth: "5px",
  scrollbarHeight: "5px",
  scrollbarBorderRadius: "5px",
  progressRailColor: qe(K.alphaProgressRail),
  railColor: "rgb(219, 219, 223)",
  popoverColor: K.neutralPopover,
  tableColor: K.neutralCard,
  cardColor: K.neutralCard,
  modalColor: K.neutralModal,
  bodyColor: K.neutralBody,
  tagColor: "#eee",
  avatarColor: qe(K.alphaAvatar),
  invertedColor: "rgb(0, 20, 40)",
  inputColor: qe(K.alphaInput),
  codeColor: "rgb(244, 244, 248)",
  tabColor: "rgb(247, 247, 250)",
  actionColor: "rgb(250, 250, 252)",
  tableHeaderColor: "rgb(250, 250, 252)",
  hoverColor: "rgb(243, 243, 245)",
  // use color with alpha since it can be nested with header filter & sorter effect
  tableColorHover: "rgba(0, 0, 100, 0.03)",
  tableColorStriped: "rgba(0, 0, 100, 0.02)",
  pressedColor: "rgb(237, 237, 239)",
  opacityDisabled: K.alphaDisabled,
  inputColorDisabled: "rgb(250, 250, 252)",
  // secondary button color
  // can also be used in tertiary button & quaternary button
  buttonColor2: "rgba(46, 51, 56, .05)",
  buttonColor2Hover: "rgba(46, 51, 56, .09)",
  buttonColor2Pressed: "rgba(46, 51, 56, .13)",
  boxShadow1: "0 1px 2px -2px rgba(0, 0, 0, .08), 0 3px 6px 0 rgba(0, 0, 0, .06), 0 5px 12px 4px rgba(0, 0, 0, .04)",
  boxShadow2: "0 3px 6px -4px rgba(0, 0, 0, .12), 0 6px 16px 0 rgba(0, 0, 0, .08), 0 9px 28px 8px rgba(0, 0, 0, .05)",
  boxShadow3: "0 6px 16px -9px rgba(0, 0, 0, .08), 0 9px 28px 0 rgba(0, 0, 0, .05), 0 12px 48px 16px rgba(0, 0, 0, .03)"
});
hs.default = DH;
(function(t) {
  var n = H && H.__importDefault || function(l) {
    return l && l.__esModule ? l : { default: l };
  };
  Object.defineProperty(t, "__esModule", { value: !0 }), t.commonLight = t.commonDark = void 0;
  var a = ms;
  Object.defineProperty(t, "commonDark", { enumerable: !0, get: function() {
    return n(a).default;
  } });
  var o = hs;
  Object.defineProperty(t, "commonLight", { enumerable: !0, get: function() {
    return n(o).default;
  } });
})(yH);
export {
  c$ as A,
  Rf as B,
  uk as C,
  zH as D,
  vn as _,
  Wi as a,
  P_ as b,
  yH as c,
  Qn as d,
  w0 as e,
  gM as f,
  at as g,
  rr as h,
  yM as i,
  cn as j,
  mn as k,
  zm as l,
  fn as m,
  ji as n,
  _t as o,
  Ri as p,
  hn as q,
  vm as r,
  Jn as s,
  Au as t,
  Xm as u,
  Em as v,
  Fu as w,
  d$ as x,
  Yl as y,
  f1 as z
};
