import { defineComponent as m, ref as h, watch as t, computed as g, h as o, nextTick as v } from "vue";
import { ElUpload as E, ElButton as F, ElMessage as U } from "element-plus";
const y = m({
  props: {
    modelValue: {
      type: Array,
      default: () => []
    }
  },
  emits: ["update:modelValue"],
  setup(u, { emit: r, attrs: s }) {
    const l = h([]);
    t(l, (e) => {
      r("update:modelValue", e);
    }), t(
      () => u.modelValue,
      (e) => {
        if (e != null && e.length > 0 && l.value != null) {
          if (l.value === e)
            return;
          l.value.length = 0, l.value.push(...e);
        }
      },
      { deep: !0, immediate: !0 }
    );
    const d = (e, a) => {
      v(() => {
        l.value = a;
      });
    }, p = (e) => {
    }, i = (e, a, n) => {
      console.log(n);
    }, c = (e, a, n) => {
      U.error("上传失败"), console.error(e);
    }, f = g(() => ({
      ...s,
      "file-list": l.value,
      onBeforeUpload: p,
      onChange: d,
      onSuccess: i,
      onError: c
    }));
    return () => o("div", null, {
      default: () => [
        o(E, f.value, {
          default: () => [
            o(
              F,
              {},
              {
                default: () => [
                  o("span", {
                    class: "iconfont epic-icon-shangchuan1",
                    style: { "margin-right": "2px" }
                  }),
                  o("span", null, { default: () => "上传文件" })
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
  y as default
};
