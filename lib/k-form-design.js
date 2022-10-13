var k = Object.defineProperty;
var B = (l, e, o) => e in l ? k(l, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : l[e] = o;
var y = (l, e, o) => (B(l, typeof e != "symbol" ? e + "" : e, o), o);
import { defineComponent as C, onMounted as w, openBlock as d, createBlock as p, unref as n, mergeProps as h, withCtx as F, renderSlot as P, resolveDynamicComponent as b, reactive as j, ref as D, computed as K, createElementBlock as O, Fragment as U, renderList as I, createSlots as M, normalizeProps as $, guardReactiveProps as x } from "vue";
class E {
  constructor() {
    y(this, "components", {});
  }
  addComponent(e, o) {
    this.components[e] = o;
  }
  getComponents() {
    return this.components;
  }
  getComponent(e) {
    return this.components[e];
  }
}
const V = new E(), q = /* @__PURE__ */ C({
  __name: "KFormItem",
  props: {
    record: {
      type: Object,
      require: !0
    },
    model: {
      type: Object
    },
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(l, { emit: e }) {
    const o = l, i = V.getComponent("FormItem"), { record: t } = o, m = t.componentProps, f = V.getComponents()[t.component];
    function g(s) {
      e("update:modelValue", s);
    }
    return w(() => {
      m.defaultValue && g(m.defaultValue);
    }), (s, r) => (d(), p(n(i), h(n(t), {
      name: n(t).field
    }), {
      default: F(() => [
        P(s.$slots, n(t).slot, {
          value: o.modelValue,
          model: o.model,
          record: n(t)
        }, () => [
          (d(), p(b(n(f)), h({
            style: { width: "100%" },
            value: o.model[n(t).field],
            "onUpdate:value": r[0] || (r[0] = (u) => o.model[n(t).field] = u)
          }, n(m)), null, 16, ["value"]))
        ])
      ]),
      _: 3
    }, 16, ["name"]));
  }
}), z = /* @__PURE__ */ C({
  __name: "KFormBuild",
  props: {
    formSchema: {
      type: Object
    }
  },
  setup(l, { expose: e }) {
    const o = l, i = V.getComponent("Form");
    let t = j({});
    const m = D(null), v = K(() => {
      var r;
      return {
        ...(r = o.formSchema) == null ? void 0 : r.config
      };
    });
    function f() {
      return new Promise(async (r, u) => {
        var c;
        try {
          await ((c = m.value) == null ? void 0 : c.validateFields()), r(t);
        } catch (a) {
          u(a);
        }
      });
    }
    function g(r) {
      Object.assign(t, r);
    }
    function s(r) {
      return r || "";
    }
    return e({
      getData: f,
      setData: g
    }), (r, u) => (d(), p(n(i), h({
      ref_key: "form",
      ref: m,
      model: n(t)
    }, n(v)), {
      default: F(() => {
        var c;
        return [
          (d(!0), O(U, null, I((c = o.formSchema) == null ? void 0 : c.nodes, (a, S) => (d(), p(q, {
            modelValue: n(t)[a.field],
            "onUpdate:modelValue": (_) => n(t)[a.field] = _,
            model: n(t),
            key: S,
            record: a
          }, M({ _: 2 }, [
            a.slot ? {
              name: s(a.slot),
              fn: F((_) => [
                P(r.$slots, a.slot, $(x(_ || {})))
              ]),
              key: "0"
            } : void 0
          ]), 1032, ["modelValue", "onUpdate:modelValue", "model", "record"]))), 128))
        ];
      }),
      _: 3
    }, 16, ["model"]));
  }
}), L = [z], A = {
  install(l) {
    L.forEach((e) => {
      l.component(e.__name, e);
    });
  }
};
export {
  z as KFormBuild,
  A as default,
  V as pluginManager
};
