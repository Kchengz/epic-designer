var B = Object.defineProperty;
var M = (n, e, o) => e in n ? B(n, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : n[e] = o;
var y = (n, e, o) => (M(n, typeof e != "symbol" ? e + "" : e, o), o);
import { defineComponent as C, onMounted as w, openBlock as i, createBlock as _, unref as r, mergeProps as b, withCtx as h, renderSlot as v, createVNode as j, normalizeProps as P, guardReactiveProps as S, reactive as K, ref as O, computed as U, createElementBlock as $, Fragment as D, renderList as I, createSlots as x } from "vue";
class E {
  constructor() {
    y(this, "components", {});
  }
  addComponent(e, o, m = "value") {
    o.bindModel = m, this.components[e] = o;
  }
  getComponents() {
    return this.components;
  }
  getComponent(e) {
    return this.components[e];
  }
}
const V = new E(), N = /* @__PURE__ */ C({
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
  setup(n, { emit: e }) {
    const o = n, m = V.getComponent("FormItem"), { record: t } = o, s = V.getComponents()[t.component], c = {
      ...t.componentProps,
      is: s,
      style: "width: 100%;",
      [s.bindModel]: o.modelValue,
      [`onUpdate:${s.bindModel}`]: p
    };
    function p(d) {
      e("update:modelValue", d);
    }
    return w(() => {
      c.defaultValue && p(c.defaultValue);
    }), (d, l) => (i(), _(r(m), b(r(t), {
      name: r(t).field
    }), {
      default: h(() => [
        v(d.$slots, r(t).slot, {
          value: o.modelValue,
          model: o.model,
          record: r(t)
        }, () => [
          j(r(s), P(S(c)), null, 16)
        ])
      ]),
      _: 3
    }, 16, ["name"]));
  }
}), q = /* @__PURE__ */ C({
  __name: "KFormBuild",
  props: {
    formSchema: {
      type: Object
    }
  },
  setup(n, { expose: e }) {
    const o = n, m = V.getComponent("Form");
    let t = K({});
    const f = O(null), s = U(() => {
      var l;
      return {
        ...(l = o.formSchema) == null ? void 0 : l.config
      };
    });
    function c() {
      return new Promise(async (l, F) => {
        var u;
        try {
          await ((u = f.value) == null ? void 0 : u.validateFields()), l(t);
        } catch (a) {
          F(a);
        }
      });
    }
    function p(l) {
      Object.assign(t, l);
    }
    function d(l) {
      return l || "";
    }
    return e({
      getData: c,
      setData: p
    }), (l, F) => (i(), _(r(m), b({
      ref_key: "form",
      ref: f,
      model: r(t)
    }, r(s)), {
      default: h(() => {
        var u;
        return [
          (i(!0), $(D, null, I((u = o.formSchema) == null ? void 0 : u.nodes, (a, k) => (i(), _(N, {
            modelValue: r(t)[a.field],
            "onUpdate:modelValue": (g) => r(t)[a.field] = g,
            model: r(t),
            key: k,
            record: a
          }, x({ _: 2 }, [
            a.slot ? {
              name: d(a.slot),
              fn: h((g) => [
                v(l.$slots, a.slot, P(S(g || {})))
              ]),
              key: "0"
            } : void 0
          ]), 1032, ["modelValue", "onUpdate:modelValue", "model", "record"]))), 128))
        ];
      }),
      _: 3
    }, 16, ["model"]));
  }
}), z = [q], A = {
  install(n) {
    z.forEach((e) => {
      n.component(e.__name, e);
    });
  }
};
export {
  q as KFormBuild,
  A as default,
  V as pluginManager
};
