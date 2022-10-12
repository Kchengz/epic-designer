var k = Object.defineProperty;
var B = (m, e, o) => e in m ? k(m, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : m[e] = o;
var v = (m, e, o) => (B(m, typeof e != "symbol" ? e + "" : e, o), o);
import { defineComponent as y, onMounted as w, openBlock as u, createBlock as i, unref as n, mergeProps as _, withCtx as h, renderSlot as P, resolveDynamicComponent as I, reactive as b, ref as j, computed as D, createElementBlock as K, Fragment as O, renderList as U, createSlots as M, normalizeProps as $, guardReactiveProps as x } from "vue";
class E {
  constructor() {
    v(this, "components", {});
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
  useAntd(e) {
    const { Form: o, FormItem: s } = e;
    this.addComponent("Form", o), this.addComponent("FormItem", s);
  }
}
const q = new E(), C = q, z = /* @__PURE__ */ y({
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
  setup(m, { emit: e }) {
    const o = m, s = C.getComponent("FormItem"), { record: t } = o, a = t.componentProps, f = C.getComponents()[t.component];
    function g(c) {
      e("update:modelValue", c);
    }
    return w(() => {
      a.defaultValue && g(a.defaultValue);
    }), (c, r) => (u(), i(n(s), _(n(t), {
      name: n(t).field
    }), {
      default: h(() => [
        P(c.$slots, n(t).slot, {
          value: o.modelValue,
          model: o.model,
          record: n(t)
        }, () => [
          (u(), i(I(n(f)), _({
            style: { width: "100%" },
            value: o.model[n(t).field],
            "onUpdate:value": r[0] || (r[0] = (p) => o.model[n(t).field] = p)
          }, n(a)), null, 16, ["value"]))
        ])
      ]),
      _: 3
    }, 16, ["name"]));
  }
}), A = /* @__PURE__ */ y({
  __name: "KFormBuild",
  props: {
    formSchema: {
      type: Object
    }
  },
  setup(m, { expose: e }) {
    const o = m, s = C.getComponent("Form");
    let t = b({});
    const a = j(null), V = D(() => {
      var r;
      return {
        ...(r = o.formSchema) == null ? void 0 : r.config
      };
    });
    function f() {
      return new Promise(async (r, p) => {
        var d;
        try {
          await ((d = a.value) == null ? void 0 : d.validateFields()), r(t);
        } catch (l) {
          p(l);
        }
      });
    }
    function g(r) {
      Object.assign(t, r);
    }
    function c(r) {
      return r || "";
    }
    return e({
      getData: f,
      setData: g
    }), (r, p) => (u(), i(n(s), _({
      ref_key: "form",
      ref: a,
      model: n(t)
    }, n(V)), {
      default: h(() => {
        var d;
        return [
          (u(!0), K(O, null, U((d = o.formSchema) == null ? void 0 : d.nodes, (l, S) => (u(), i(z, {
            modelValue: n(t)[l.field],
            "onUpdate:modelValue": (F) => n(t)[l.field] = F,
            model: n(t),
            key: S,
            record: l
          }, M({ _: 2 }, [
            l.slot ? {
              name: c(l.slot),
              fn: h((F) => [
                P(r.$slots, l.slot, $(x(F || {})))
              ]),
              key: "0"
            } : void 0
          ]), 1032, ["modelValue", "onUpdate:modelValue", "model", "record"]))), 128))
        ];
      }),
      _: 3
    }, 16, ["model"]));
  }
}), L = [A], G = {
  install(m) {
    L.forEach((e) => {
      m.component(e.__name, e);
    });
  }
};
export {
  A as KFormBuild,
  G as default,
  C as pluginManager
};
