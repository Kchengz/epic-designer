import { defineComponent as s, h as o, renderSlot as d } from "vue";
import { ElDialog as h, ElButton as u } from "element-plus";
const C = s({
  props: {
    componentSchema: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["ok", "close", "update:modelValue"],
  setup(c, { attrs: i, slots: l, emit: n }) {
    return () => {
      var p;
      const e = {
        ...c.componentSchema,
        ...i,
        title: ((p = c.componentSchema) == null ? void 0 : p.label) ?? "",
        class: "epic-modal-el",
        "destroy-on-close": !0,
        "onUpdate:modelValue": r
      }, m = e.children ?? [];
      delete e.children;
      let t = null;
      m.length ? t = () => m.map(
        (a) => d(l, "node", { componentSchema: a })
      ) : t = () => [d(l, "default")];
      function f() {
        n("ok");
      }
      function r(a) {
        console.log(a), n("update:modelValue", !1), n("close");
      }
      return o(h, e, {
        default: () => [
          d(l, "edit-node", {}, t),
          o("div", { class: "epic-modal-footer" }, [
            o(
              u,
              { onClick: r },
              {
                default: () => "关闭"
              }
            ),
            o(
              u,
              { type: "primary", onClick: f },
              {
                default: () => e.okText ?? "确定"
              }
            )
          ])
        ]
      });
    };
  }
});
export {
  C as default
};
