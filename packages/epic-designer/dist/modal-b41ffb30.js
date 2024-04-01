import { defineComponent as s, h as e, renderSlot as a } from "vue";
import { NModal as h, NSpace as S, NButton as u } from "naive-ui";
const y = s({
  props: {
    componentSchema: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["ok", "close", "update:modelValue"],
  setup(d, { attrs: c, slots: l, emit: n }) {
    return () => {
      var i;
      const o = {
        ...d.componentSchema,
        ...c,
        title: ((i = d.componentSchema) == null ? void 0 : i.label) ?? "",
        class: "epic-modal-n",
        preset: "card",
        show: c.modelValue,
        "onUpdate:show": p
      }, m = o.children ?? [];
      delete o.children;
      let t = null;
      m.length ? t = () => m.map(
        (f) => a(l, "node", { componentSchema: f })
      ) : t = () => [a(l, "default")];
      function r() {
        n("ok");
      }
      function p() {
        n("update:modelValue", !1), n("close");
      }
      return e(h, o, {
        default: () => [
          e(
            "div",
            { class: "epic-modal-main" },
            a(l, "edit-node", {}, t)
          ),
          e(
            "div",
            { class: "epic-modal-footer" },
            e(
              S,
              { justify: "end" },
              {
                default: () => [
                  e(
                    u,
                    { onClick: p },
                    {
                      default: () => "关闭"
                    }
                  ),
                  e(
                    u,
                    { type: "primary", onClick: r },
                    {
                      default: () => o.okText ?? "确定"
                    }
                  )
                ]
              }
            )
          )
        ]
      });
    };
  }
});
export {
  y as default
};
