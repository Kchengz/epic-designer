var N = Object.defineProperty;
var b = (a, o, l) => o in a ? N(a, o, { enumerable: !0, configurable: !0, writable: !0, value: l }) : a[o] = l;
var w = (a, o, l) => (b(a, typeof o != "symbol" ? o + "" : o, l), l);
import { defineComponent as S, shallowRef as P, onMounted as $, resolveComponent as j, unref as e, openBlock as V, createBlock as C, mergeProps as B, withCtx as f, renderSlot as F, createVNode as h, normalizeProps as p, guardReactiveProps as i, createCommentVNode as I, reactive as M, ref as O, computed as U, createElementBlock as D, Fragment as E, renderList as R, createSlots as q } from "vue";
class x {
  constructor() {
    w(this, "components", {});
  }
  addComponent(o, l, d = "value") {
    this.components[o] = {
      component: l,
      bindModel: d
    }, console.log(this.components);
  }
  getComponents() {
    return this.components;
  }
  getComponent(o) {
    return this.components[o];
  }
}
const k = new x(), z = /* @__PURE__ */ S({
  __name: "KNode",
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
  setup(a, { emit: o }) {
    const l = a, { component: d } = k.getComponent("FormItem"), { record: n } = l;
    console.log(n, 111111111111111);
    const g = k.getComponent(n.component);
    let s = P(null), m = P(null);
    async function v() {
      var c;
      console.time();
      const { bindModel: t, component: u } = g;
      if (typeof u == "function") {
        const r = await u();
        s.value = (c = r.default) != null ? c : r, console.log(s.value);
      } else
        s.value = u;
      m.value = {
        record: n,
        ...n.componentProps,
        is: s,
        style: "width: 100%;",
        [t]: l.modelValue,
        [`onUpdate:${t}`]: _
      }, console.timeEnd();
    }
    function _(t) {
      o("update:modelValue", t);
    }
    return $(() => {
      m.defaultValue && _(m.defaultValue);
    }), v(), (t, u) => {
      const c = j("KNode", !0);
      return e(s) && !e(n).noInput ? (V(), C(e(d), B({ key: 0 }, e(n), {
        name: e(n).field
      }), {
        default: f(() => [
          F(t.$slots, e(n).slot, {
            value: l.modelValue,
            model: l.model,
            record: e(n)
          }, () => [
            h(e(s), p(i(e(m))), {
              node: f((r) => [
                h(c, p(i(r)), null, 16)
              ]),
              _: 1
            }, 16)
          ])
        ]),
        _: 3
      }, 16, ["name"])) : e(s) ? F(t.$slots, e(n).slot, {
        key: 1,
        value: l.modelValue,
        model: l.model,
        record: e(n)
      }, () => [
        h(e(s), p(i(e(m))), {
          node: f((r) => [
            h(c, p(i(r)), null, 16)
          ]),
          _: 1
        }, 16)
      ]) : I("", !0);
    };
  }
}), L = /* @__PURE__ */ S({
  __name: "KFormBuild",
  props: {
    formSchema: {
      type: Object
    }
  },
  setup(a, { expose: o }) {
    const l = a, { component: d } = k.getComponent("Form");
    let n = M({});
    const g = O(null), s = U(() => {
      var t;
      return {
        ...(t = l.formSchema) == null ? void 0 : t.config
      };
    });
    function m() {
      return new Promise(async (t, u) => {
        var c;
        try {
          await ((c = g.value) == null ? void 0 : c.validateFields()), t(n);
        } catch (r) {
          u(r);
        }
      });
    }
    function v(t) {
      Object.assign(n, t);
    }
    function _(t) {
      return t || "";
    }
    return o({
      getData: m,
      setData: v
    }), (t, u) => (V(), C(e(d), B({
      ref_key: "form",
      ref: g,
      model: e(n)
    }, e(s)), {
      default: f(() => {
        var c;
        return [
          (V(!0), D(E, null, R((c = l.formSchema) == null ? void 0 : c.nodes, (r, K) => (V(), C(z, {
            modelValue: e(n)[r.field],
            "onUpdate:modelValue": (y) => e(n)[r.field] = y,
            model: e(n),
            key: K,
            record: r
          }, q({ _: 2 }, [
            r.slot ? {
              name: _(r.slot),
              fn: f((y) => [
                F(t.$slots, r.slot, p(i(y || {})))
              ]),
              key: "0"
            } : void 0
          ]), 1032, ["modelValue", "onUpdate:modelValue", "model", "record"]))), 128))
        ];
      }),
      _: 3
    }, 16, ["model"]));
  }
}), A = [L], J = {
  install(a) {
    A.forEach((o) => {
      a.component(o.__name, o);
    });
  }
};
export {
  L as KFormBuild,
  J as default,
  k as pluginManager
};
