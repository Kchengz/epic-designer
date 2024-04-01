import { defineComponent as N, inject as h, computed as V, h as T, openBlock as i, createElementBlock as k, normalizeClass as C, createElementVNode as _, createVNode as b, unref as v, createCommentVNode as B, createBlock as K, mergeProps as A, withCtx as U, Fragment as L, renderList as z, useSlots as H, provide as f, ref as I, withDirectives as M, vShow as q } from "vue";
import { _ as D } from "./icon.vue_vue_type_script_setup_true_lang-3f9e4127.js";
import { p as $ } from "./index-c81ab9b4.js";
import { d as F } from "./vuedraggable.umd-6a5b6da9.js";
const P = /* @__PURE__ */ N({
  name: "ETreeNodeItem",
  __name: "treeNodeItem",
  props: {
    schema: {}
  },
  setup(y) {
    const t = y, u = h("slots", {}), c = h("expandedKeys"), r = h("treeProps"), x = h("selectedKeys"), o = h("handleSelect"), m = V(() => c.value.includes(t.schema.id ?? "")), g = N({
      setup() {
        return () => {
          var a;
          return T(
            "span",
            {
              class: {
                text: !0,
                hover: r.hoverKey === t.schema.id,
                checked: x.value.includes(t.schema.id)
              },
              onClick: () => o(t.schema.id, t.schema)
            },
            ((a = u["tree-node"]) == null ? void 0 : a.call(u, t)) ?? T(
              "span",
              { class: "text-padding" },
              {
                default: () => {
                  var s;
                  return [
                    t.schema.label ?? ((s = $.getComponentConfingByType(t.schema.type)) == null ? void 0 : s.defaultSchema.label),
                    T("span", { class: "epic-node-type-text" }, t.schema.type)
                  ];
                }
              }
            )
          );
        };
      }
    });
    function n() {
      const a = t.schema.id;
      if (!a)
        return !1;
      c.value.includes(a) ? c.value = c.value.filter((s) => s !== a) : c.value.push(a);
    }
    function d() {
      var s;
      const a = t.schema.id;
      if (!a || !((s = t.schema.children) != null && s.length))
        return !1;
      c.value.push(a);
    }
    return d(), (a, s) => {
      var e, l, p;
      return i(), k("li", {
        class: C(["epic-tree-node", { expanded: (e = t.schema.children) == null ? void 0 : e.length, "level-1": t.schema.type === "page" }])
      }, [
        _("a", null, [
          (l = t.schema.children) != null && l.length && t.schema.type !== "page" ? (i(), k("span", {
            key: 0,
            class: C(["icon-expanded", { expanded: m.value }]),
            onClick: n
          }, [
            b(v(D), { name: "icon-youjiantou" })
          ], 2)) : B("", !0),
          b(v(g))
        ]),
        (p = t.schema.children) != null && p.length ? (i(), K(j, {
          key: 0,
          class: C(["epic-tree-sublist", { expanded: m.value }]),
          schemas: t.schema.children,
          "onUpdate:schemas": s[0] || (s[0] = (S) => t.schema.children = S),
          parentSchema: t.schema
        }, null, 8, ["class", "schemas", "parentSchema"])) : B("", !0)
      ], 2);
    };
  }
}), G = { key: 1 }, j = /* @__PURE__ */ N({
  name: "ETreeNodes",
  __name: "treeNodes",
  props: {
    schemas: {},
    parentSchema: {}
  },
  emits: ["update:schemas"],
  setup(y, { emit: t }) {
    const u = h("designer"), c = h("treeProps"), r = y, x = t, o = V({
      get() {
        return r.schemas;
      },
      set(n) {
        x("update:schemas", n);
      }
    });
    function m(n) {
      u.setDisableHover(!0), u.setCheckedNode(o.value[n]);
    }
    function g(n) {
      return n.type === "page" || n.immovable ? "unmover-item" : "draggable-item";
    }
    return (n, d) => {
      var a, s;
      return (a = r.parentSchema) != null && a.childImmovable ? (i(), k("ul", G, [
        (i(!0), k(L, null, z(o.value, (e) => (i(), K(P, {
          key: e.id,
          schema: e
        }, null, 8, ["schema"]))), 128))
      ])) : (i(), K(v(F), A({
        key: 0,
        modelValue: o.value,
        "onUpdate:modelValue": d[0] || (d[0] = (e) => o.value = e),
        "item-key": "id",
        "component-data": {},
        class: "draggable-range"
      }, {
        animation: 200,
        tag: "ul",
        group: "tree-draggable",
        ghostClass: "moveing",
        draggable: ".draggable-item",
        disabled: !v(c).draggable || ((s = o.value[0]) == null ? void 0 : s.type) === "page"
      }, {
        onStart: d[1] || (d[1] = (e) => m(e.oldIndex))
      }), {
        item: U(({ element: e, index: l }) => [
          (i(), K(P, {
            class: C(g(e)),
            key: e.id,
            schema: e
          }, null, 8, ["class", "schema"]))
        ]),
        _: 1
      }, 16, ["modelValue"]));
    };
  }
}), J = { class: "epic-tree h-full flex flex-col" }, O = { class: "search-box px-10px py-6px" }, Q = { class: "epic-tree-main flex-1 overflow-auto h-0" }, R = { class: "text-center pt-42px text-gray-400" }, ee = /* @__PURE__ */ N({
  name: "ETree",
  __name: "tree",
  props: {
    options: {
      type: Array,
      default: () => []
    },
    hoverKey: {
      type: String,
      default: ""
    },
    selectedKeys: {
      type: Array,
      default: () => []
    },
    draggable: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["update:selectedKeys", "node-click"],
  setup(y, { emit: t }) {
    const u = H();
    f("slots", u);
    const c = $.getComponent("input"), r = I(""), x = I([]), o = y, m = t, g = V({
      get() {
        return o.selectedKeys;
      },
      set(s) {
        m("update:selectedKeys", s);
      }
    }), n = V({
      get() {
        return d(o.options, r.value);
      },
      set(s) {
        console.log(s);
      }
    });
    function d(s, e) {
      const l = [];
      return s.forEach((p) => {
        var S;
        if ((S = p.label) != null && S.includes(e))
          l.push(p);
        else if (p.children) {
          const E = d(p.children, e);
          if (E.length > 0) {
            const w = { ...p };
            w.children = E, l.push(w);
          }
        }
      }), l;
    }
    function a(s, e) {
      g.value = [s], m("node-click", { id: s, componentSchema: e });
    }
    return f("expandedKeys", x), f("selectedKeys", g), f("treeProps", o), f("handleSelect", a), f("handleSelect", a), (s, e) => (i(), k("div", J, [
      _("div", O, [
        b(v(c), {
          placeholder: "搜索节点",
          clearable: "",
          allowClear: "",
          modelValue: r.value,
          "onUpdate:modelValue": e[0] || (e[0] = (l) => r.value = l),
          value: r.value,
          "onUpdate:value": e[1] || (e[1] = (l) => r.value = l)
        }, {
          prefix: U(() => [
            b(v(D), { name: "icon-chaxun" })
          ]),
          _: 1
        }, 8, ["modelValue", "value"])
      ]),
      _("div", Q, [
        _("ul", null, [
          b(j, {
            schemas: n.value,
            "onUpdate:schemas": e[2] || (e[2] = (l) => n.value = l)
          }, null, 8, ["schemas"])
        ]),
        M(_("div", R, "没有查询到的数据", 512), [
          [q, !n.value.length]
        ])
      ])
    ]));
  }
});
export {
  ee as _
};
