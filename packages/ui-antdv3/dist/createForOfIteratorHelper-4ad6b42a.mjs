import { z as v } from "./useConfigInject-f0dbb416.mjs";
var a = { exports: {} }, s;
function x() {
  return s || (s = 1, function(o) {
    var c = v();
    function y(r, d) {
      var e = typeof Symbol < "u" && r[Symbol.iterator] || r["@@iterator"];
      if (!e) {
        if (Array.isArray(r) || (e = c(r)) || d && r && typeof r.length == "number") {
          e && (r = e);
          var i = 0, u = function() {
          };
          return {
            s: u,
            n: function() {
              return i >= r.length ? {
                done: !0
              } : {
                done: !1,
                value: r[i++]
              };
            },
            e: function(n) {
              throw n;
            },
            f: u
          };
        }
        throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      var f = !0, l = !1, p;
      return {
        s: function() {
          e = e.call(r);
        },
        n: function() {
          var n = e.next();
          return f = n.done, n;
        },
        e: function(n) {
          l = !0, p = n;
        },
        f: function() {
          try {
            !f && e.return != null && e.return();
          } finally {
            if (l)
              throw p;
          }
        }
      };
    }
    o.exports = y, o.exports.__esModule = !0, o.exports.default = o.exports;
  }(a)), a.exports;
}
export {
  x as r
};
