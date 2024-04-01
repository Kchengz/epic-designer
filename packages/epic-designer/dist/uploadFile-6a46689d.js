import { defineComponent as m, ref as g, watch as o, computed as v, h as t, nextTick as U } from "vue";
import { Upload as V, Button as x, message as s } from "ant-design-vue";
const B = m({
  props: {
    modelValue: {
      type: Array,
      default: () => []
    }
  },
  emits: ["update:modelValue", "change"],
  setup(d, { emit: a, attrs: i }) {
    const l = g([]);
    o(l, (e) => {
      a("update:modelValue", e), a("change", e);
    }), o(
      () => d.modelValue,
      (e) => {
        if (e != null && e.length > 0 && l.value != null) {
          if (l.value === e)
            return;
          l.value.length = 0, l.value.push(...e);
        }
      },
      { deep: !0, immediate: !0 }
    );
    function p(e) {
      U(() => {
        l.value = e;
      });
    }
    const f = (e) => {
      var u, r;
      if (e.file.status !== "uploading") {
        if (e.file.status === "done") {
          const n = (r = (u = e.file.response) == null ? void 0 : u.data) == null ? void 0 : r.url;
          if (!e.file.url && !n) {
            e.file.status = "error", s.error("上传失败");
            return;
          }
          e.file.url = n;
        }
        e.file.status === "error" && s.error("upload error");
      }
    }, c = (e) => {
    }, h = v(() => ({
      ...i,
      "onUpdate:file-list": p,
      "file-list": l.value,
      "onBefore-upload": c,
      onChange: f
    }));
    return () => t("div", null, {
      default: () => [
        t(V, h.value, {
          default: () => [
            t(
              x,
              {},
              {
                default: () => [
                  t("span", {
                    class: "iconfont epic-icon-shangchuan1",
                    style: { "margin-right": "2px" }
                  }),
                  t("span", null, { default: () => "上传文件" })
                ]
              }
            )
          ]
        })
      ]
    });
  }
});
export {
  B as default
};
