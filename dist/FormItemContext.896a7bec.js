import { t as j, w as b, k as h } from "./useConfigInject.fdc04e2e.js";
import { r as q } from "./_vue_commonjs-external.cdc460b2.js";
var n = {}, f;
function D() {
  if (f)
    return n;
  f = 1;
  var c = h.exports;
  Object.defineProperty(n, "__esModule", {
    value: !0
  }), n.useProvideFormItemContext = n.useInjectFormItemContext = n.default = void 0;
  var F = c(j()), e = q, I = c(b()), l = Symbol("ContextProps"), d = Symbol("InternalContextProps"), p = function(i) {
    var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : (0, e.computed)(function() {
      return !0;
    }), t = (0, e.ref)(/* @__PURE__ */ new Map()), m = function(u, _) {
      t.value.set(u, _), t.value = new Map(t.value);
    }, y = function(u) {
      t.value.delete(u), t.value = new Map(t.value);
    }, g = (0, e.getCurrentInstance)();
    (0, e.watch)([o, t], function() {
      if (process.env.NODE_ENV !== "production" && o.value && t.value.size > 1) {
        (0, I.default)(!1, "Form.Item", "FormItem can only collect one field item, you haved set ".concat((0, F.default)(t.value.values()).map(function(u) {
          return "`".concat(u.name, "`");
        }).join(", "), " ").concat(t.value.size, " field items.\n        You can set not need to be collected fields into `a-form-item-rest`"));
        for (var a = g; a.parent; )
          console.warn("at", a.type), a = a.parent;
      }
    }), (0, e.provide)(l, i), (0, e.provide)(d, {
      addFormItemField: m,
      removeFormItemField: y
    });
  };
  n.useProvideFormItemContext = p;
  var v = {
    id: (0, e.computed)(function() {
    }),
    onFieldBlur: function() {
    },
    onFieldChange: function() {
    },
    clearValidate: function() {
    }
  }, s = {
    addFormItemField: function() {
    },
    removeFormItemField: function() {
    }
  }, C = function() {
    var i = (0, e.inject)(d, s), o = Symbol("FormItemFieldKey"), t = (0, e.getCurrentInstance)();
    return i.addFormItemField(o, t.type), (0, e.onBeforeUnmount)(function() {
      i.removeFormItemField(o);
    }), (0, e.provide)(d, s), (0, e.provide)(l, v), (0, e.inject)(l, v);
  };
  n.useInjectFormItemContext = C;
  var x = (0, e.defineComponent)({
    compatConfig: {
      MODE: 3
    },
    name: "AFormItemRest",
    setup: function(i, o) {
      var t = o.slots;
      return (0, e.provide)(d, s), (0, e.provide)(l, v), function() {
        var m;
        return (m = t.default) === null || m === void 0 ? void 0 : m.call(t);
      };
    }
  });
  return n.default = x, n;
}
export {
  D as r
};
