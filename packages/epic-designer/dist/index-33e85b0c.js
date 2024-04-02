import { defineComponent as U, inject as _, ref as k, computed as S, openBlock as d, createElementBlock as m, createElementVNode as a, createVNode as i, unref as s, withCtx as C, Fragment as $, renderList as D, normalizeClass as E, toDisplayString as b, mergeProps as j, withDirectives as z, vShow as A } from "vue";
import { d as F } from "./vuedraggable.umd-6a5b6da9.js";
import { p as w, b as y, f as G, r as M } from "./index-bc424301.js";
import { _ as V } from "./icon.vue_vue_type_script_setup_true_lang-3f9e4127.js";
import "./_commonjsHelpers-c5d32002.js";
import "./_vue_commonjs-external-eb7fec7f.js";
const P = { class: "epic-component-view flex flex-col" }, T = { class: "search-box px-10px py-6px" }, q = { class: "flex flex-1 overflow-auto" }, H = { class: "tabs-box" }, J = ["title", "onClick"], K = { class: "h-full flex-1 overflow-auto py-2 box-border" }, O = ["onClick"], Q = { class: "text-center pt-42px text-gray-400" }, le = /* @__PURE__ */ U({
  __name: "index",
  setup(R) {
    const I = w.getComponent("input"), p = _("pageSchema"), h = _("designer"), v = w.getComponentSchemaGroups(), n = k(""), f = {
      title: "全部",
      list: []
    }, c = k(f), L = S(() => [
      f,
      ...v.value
    ]), r = S(() => {
      let l = c.value.list;
      if (c.value.title === "全部") {
        const t = v.value.map((e) => e.list);
        l = [].concat(...t);
      }
      return n.value ? l.filter((t) => {
        var e;
        return (e = t.label) == null ? void 0 : e.includes(n.value);
      }) : l;
    });
    function N(l) {
      c.value = l;
    }
    function B(l) {
      var x;
      const t = G(p.schemas, ((x = h.state.checkedNode) == null ? void 0 : x.id) ?? "root");
      if (!t)
        return !1;
      let { list: e, schema: o, index: u } = t;
      o.children && !o.childImmovable && (e = o.children, u = o.children.length - 1);
      const g = y(l);
      e.splice(u + 1, 0, g), h.setCheckedNode(g), M.push(p.schemas, "插入组件");
    }
    return (l, t) => (d(), m("div", P, [
      a("div", T, [
        i(s(I), {
          placeholder: "搜索组件",
          modelValue: n.value,
          "onUpdate:modelValue": t[0] || (t[0] = (e) => n.value = e),
          clearable: "",
          allowClear: "",
          value: n.value,
          "onUpdate:value": t[1] || (t[1] = (e) => n.value = e)
        }, {
          prefix: C(() => [
            i(s(V), { name: "icon-chaxun" })
          ]),
          _: 1
        }, 8, ["modelValue", "value"])
      ]),
      a("div", q, [
        a("div", H, [
          (d(!0), m($, null, D(L.value, (e, o) => (d(), m("div", {
            class: E(["tab cursor-pointer truncate", { checked: c.value.title === e.title }]),
            key: o,
            title: e.title,
            onClick: (u) => N(e)
          }, b(e.title), 11, J))), 128))
        ]),
        a("div", K, [
          i(s(F), j({
            modelValue: r.value,
            "onUpdate:modelValue": t[2] || (t[2] = (e) => r.value = e)
          }, {
            group: { name: "edit-draggable", pull: "clone", put: !1 },
            sort: !1,
            animation: 180,
            ghostClass: "moving"
          }, {
            clone: s(y),
            "item-key": "id",
            class: "grid grid-cols-[auto_auto] px-10px gap-2"
          }), {
            item: C(({ element: e }) => [
              a("div", {
                class: "source-componet-item flex items-center truncate",
                onClick: (o) => B(e)
              }, [
                i(s(V), {
                  prefix: "",
                  name: e.icon
                }, null, 8, ["name"]),
                a("div", null, b(e.label), 1)
              ], 8, O)
            ]),
            _: 1
          }, 16, ["modelValue", "clone"]),
          z(a("div", Q, "没有查询到的组件", 512), [
            [A, !r.value.length]
          ])
        ])
      ])
    ]));
  }
});
export {
  le as default
};
