var A = { exports: {} }, G, ne;
function oe() {
  if (ne)
    return G;
  ne = 1;
  function S(t) {
    return typeof t == "object" && t != null && t.nodeType === 1;
  }
  function h(t, i) {
    return (!i || t !== "hidden") && t !== "visible" && t !== "clip";
  }
  function w(t, i) {
    if (t.clientHeight < t.scrollHeight || t.clientWidth < t.scrollWidth) {
      var l = getComputedStyle(t, null);
      return h(l.overflowY, i) || h(l.overflowX, i) || function(a) {
        var o = function(e) {
          if (!e.ownerDocument || !e.ownerDocument.defaultView)
            return null;
          try {
            return e.ownerDocument.defaultView.frameElement;
          } catch {
            return null;
          }
        }(a);
        return !!o && (o.clientHeight < a.scrollHeight || o.clientWidth < a.scrollWidth);
      }(t);
    }
    return !1;
  }
  function p(t, i, l, a, o, e, n, u) {
    return e < t && n > i || e > t && n < i ? 0 : e <= t && u <= l || n >= i && u >= l ? e - t - a : n > i && u < l || e < t && u > l ? n - i + o : 0;
  }
  return G = function(t, i) {
    var l = window, a = i.scrollMode, o = i.block, e = i.inline, n = i.boundary, u = i.skipOverflowHiddenElements, s = typeof n == "function" ? n : function(ie) {
      return ie !== n;
    };
    if (!S(t))
      throw new TypeError("Invalid target");
    for (var m, I, y = document.scrollingElement || document.documentElement, _ = [], f = t; S(f) && s(f); ) {
      if ((f = (I = (m = f).parentElement) == null ? m.getRootNode().host || null : I) === y) {
        _.push(f);
        break;
      }
      f != null && f === document.body && w(f) && !w(document.documentElement) || f != null && w(f, u) && _.push(f);
    }
    for (var H = l.visualViewport ? l.visualViewport.width : innerWidth, V = l.visualViewport ? l.visualViewport.height : innerHeight, M = window.scrollX || pageXOffset, O = window.scrollY || pageYOffset, b = t.getBoundingClientRect(), x = b.height, E = b.width, k = b.top, z = b.right, F = b.bottom, T = b.left, c = o === "start" || o === "nearest" ? k : o === "end" ? F : k + x / 2, d = e === "center" ? T + E / 2 : e === "end" ? z : T, K = [], P = 0; P < _.length; P++) {
      var r = _[P], W = r.getBoundingClientRect(), q = W.height, D = W.width, L = W.top, R = W.right, C = W.bottom, N = W.left;
      if (a === "if-needed" && k >= 0 && T >= 0 && F <= V && z <= H && k >= L && F <= C && T >= N && z <= R)
        return K;
      var X = getComputedStyle(r), Y = parseInt(X.borderLeftWidth, 10), Q = parseInt(X.borderTopWidth, 10), U = parseInt(X.borderRightWidth, 10), Z = parseInt(X.borderBottomWidth, 10), v = 0, g = 0, $ = "offsetWidth" in r ? r.offsetWidth - r.clientWidth - Y - U : 0, j = "offsetHeight" in r ? r.offsetHeight - r.clientHeight - Q - Z : 0, J = "offsetWidth" in r ? r.offsetWidth === 0 ? 0 : D / r.offsetWidth : 0, B = "offsetHeight" in r ? r.offsetHeight === 0 ? 0 : q / r.offsetHeight : 0;
      if (y === r)
        v = o === "start" ? c : o === "end" ? c - V : o === "nearest" ? p(O, O + V, V, Q, Z, O + c, O + c + x, x) : c - V / 2, g = e === "start" ? d : e === "center" ? d - H / 2 : e === "end" ? d - H : p(M, M + H, H, Y, U, M + d, M + d + E, E), v = Math.max(0, v + O), g = Math.max(0, g + M);
      else {
        v = o === "start" ? c - L - Q : o === "end" ? c - C + Z + j : o === "nearest" ? p(L, C, q, Q, Z + j, c, c + x, x) : c - (L + q / 2) + j / 2, g = e === "start" ? d - N - Y : e === "center" ? d - (N + D / 2) + $ / 2 : e === "end" ? d - R + U + $ : p(N, R, D, Y, U + $, d, d + E, E);
        var ee = r.scrollLeft, te = r.scrollTop;
        c += te - (v = Math.max(0, Math.min(te + v / B, r.scrollHeight - q / B + j))), d += ee - (g = Math.max(0, Math.min(ee + g / J, r.scrollWidth - D / J + $)));
      }
      K.push({ el: r, top: v, left: g });
    }
    return K;
  }, G;
}
var re;
function le() {
  return re || (re = 1, function(S, h) {
    h.__esModule = !0, h.default = void 0;
    var w = p(oe());
    function p(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function t(e) {
      return e === Object(e) && Object.keys(e).length !== 0;
    }
    function i(e, n) {
      n === void 0 && (n = "auto");
      var u = "scrollBehavior" in document.body.style;
      e.forEach(function(s) {
        var m = s.el, I = s.top, y = s.left;
        m.scroll && u ? m.scroll({
          top: I,
          left: y,
          behavior: n
        }) : (m.scrollTop = I, m.scrollLeft = y);
      });
    }
    function l(e) {
      return e === !1 ? {
        block: "end",
        inline: "nearest"
      } : t(e) ? e : {
        block: "start",
        inline: "nearest"
      };
    }
    function a(e, n) {
      var u = e.isConnected || e.ownerDocument.documentElement.contains(e);
      if (t(n) && typeof n.behavior == "function")
        return n.behavior(u ? (0, w.default)(e, n) : []);
      if (!!u) {
        var s = l(n);
        return i((0, w.default)(e, s), s.behavior);
      }
    }
    var o = a;
    h.default = o, S.exports = h.default;
  }(A, A.exports)), A.exports;
}
export {
  le as r
};
