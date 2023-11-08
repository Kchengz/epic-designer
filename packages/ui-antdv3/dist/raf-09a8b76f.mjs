var r = {}, s;
function v() {
  if (s)
    return r;
  s = 1, Object.defineProperty(r, "__esModule", {
    value: !0
  }), r.default = c;
  var u = function(e) {
    return setTimeout(e, 16);
  }, i = function(e) {
    return clearTimeout(e);
  };
  typeof window < "u" && "requestAnimationFrame" in window && (u = function(e) {
    return window.requestAnimationFrame(e);
  }, i = function(e) {
    return window.cancelAnimationFrame(e);
  });
  var f = 0, a = /* @__PURE__ */ new Map();
  function o(n) {
    a.delete(n);
  }
  function c(n) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
    f += 1;
    var t = f;
    function d(l) {
      if (l === 0)
        o(t), n();
      else {
        var m = u(function() {
          d(l - 1);
        });
        a.set(t, m);
      }
    }
    return d(e), t;
  }
  return c.cancel = function(n) {
    var e = a.get(n);
    return o(e), i(e);
  }, r;
}
export {
  v as r
};
