import { g as p } from "./useConfigInject-f4796704.mjs";
var c = {}, l = {}, u;
function y() {
  if (u)
    return l;
  u = 1, Object.defineProperty(l, "__esModule", {
    value: !0
  }), l.addClass = r, l.hasClass = n, l.removeClass = o;
  function n(t, a) {
    if (t.classList)
      return t.classList.contains(a);
    var s = t.className;
    return " ".concat(s, " ").indexOf(" ".concat(a, " ")) > -1;
  }
  function r(t, a) {
    t.classList ? t.classList.add(a) : n(t, a) || (t.className = "".concat(t.className, " ").concat(a));
  }
  function o(t, a) {
    if (t.classList)
      t.classList.remove(a);
    else if (n(t, a)) {
      var s = t.className;
      t.className = " ".concat(s, " ").replace(" ".concat(a, " "), " ");
    }
  }
  return l;
}
var f;
function g() {
  if (f)
    return c;
  f = 1, Object.defineProperty(c, "__esModule", {
    value: !0
  }), c.default = void 0;
  var n = p, r = y(), o = function() {
    var s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "ant-motion-collapse", v = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
    return {
      name: s,
      appear: v,
      css: !0,
      onBeforeEnter: function(e) {
        e.style.height = "0px", e.style.opacity = "0", (0, r.addClass)(e, s);
      },
      onEnter: function(e) {
        (0, n.nextTick)(function() {
          e.style.height = "".concat(e.scrollHeight, "px"), e.style.opacity = "1";
        });
      },
      onAfterEnter: function(e) {
        e && ((0, r.removeClass)(e, s), e.style.height = null, e.style.opacity = null);
      },
      onBeforeLeave: function(e) {
        (0, r.addClass)(e, s), e.style.height = "".concat(e.offsetHeight, "px"), e.style.opacity = null;
      },
      onLeave: function(e) {
        setTimeout(function() {
          e.style.height = "0px", e.style.opacity = "0";
        });
      },
      onAfterLeave: function(e) {
        e && ((0, r.removeClass)(e, s), e.style && (e.style.height = null, e.style.opacity = null));
      }
    };
  }, t = o;
  return c.default = t, c;
}
export {
  g as r
};
