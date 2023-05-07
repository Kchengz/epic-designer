import { r as _ } from "./_vue_commonjs-external.cdc460b2.js";
import { B as b } from "./useConfigInject.fdc04e2e.js";
var o = {}, O;
function C() {
  if (O)
    return o;
  O = 1, Object.defineProperty(o, "__esModule", {
    value: !0
  }), o.addEventListener = c, o.default = void 0;
  function u(t) {
    t.target.composing = !0;
  }
  function f(t) {
    !t.target.composing || (t.target.composing = !1, m(t.target, "input"));
  }
  function m(t, r) {
    var a = document.createEvent("HTMLEvents");
    a.initEvent(r, !0, !0), t.dispatchEvent(a);
  }
  function c(t, r, a, e) {
    t.addEventListener(r, a, e);
  }
  var l = {
    created: function(r, a) {
      (!a.modifiers || !a.modifiers.lazy) && (c(r, "compositionstart", u), c(r, "compositionend", f), c(r, "change", f));
    }
  }, s = l;
  return o.default = s, o;
}
var h = {}, p = {}, g;
function q() {
  if (g)
    return p;
  g = 1, Object.defineProperty(p, "__esModule", { value: !0 });
  var u = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z" } }] }, name: "search", theme: "outlined" };
  return p.default = u, p;
}
var S;
function P() {
  return S || (S = 1, function(u) {
    Object.defineProperty(u, "__esModule", {
      value: !0
    }), u.default = void 0;
    var f = _, m = l(q()), c = l(b());
    function l(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function s(e) {
      for (var n = 1; n < arguments.length; n++) {
        var i = arguments[n] != null ? Object(arguments[n]) : {}, d = Object.keys(i);
        typeof Object.getOwnPropertySymbols == "function" && (d = d.concat(Object.getOwnPropertySymbols(i).filter(function(v) {
          return Object.getOwnPropertyDescriptor(i, v).enumerable;
        }))), d.forEach(function(v) {
          t(e, v, i[v]);
        });
      }
      return e;
    }
    function t(e, n, i) {
      return n in e ? Object.defineProperty(e, n, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : e[n] = i, e;
    }
    var r = function(n, i) {
      var d = s({}, n, i.attrs);
      return (0, f.createVNode)(c.default, s({}, d, {
        icon: m.default
      }), null);
    };
    r.displayName = "SearchOutlined", r.inheritAttrs = !1;
    var a = r;
    u.default = a;
  }(h)), h;
}
export {
  P as a,
  C as r
};
