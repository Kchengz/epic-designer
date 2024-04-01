import { defineComponent as V, ref as o, watch as i, computed as y, h as a, nextTick as E } from "vue";
import { ElUpload as U, ElImageViewer as w, ElMessage as C } from "element-plus";
const P = V({
  props: {
    modelValue: {
      type: Array,
      default: () => []
    }
  },
  emits: ["update:modelValue"],
  setup(d, { emit: p, attrs: c }) {
    const l = o([]), r = o(""), n = o(!1), u = (e) => {
      n.value = e;
    };
    i(l, (e) => {
      p("update:modelValue", e);
    }), i(
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
    const g = (e, t) => {
      E(() => {
        l.value = t;
      });
    }, m = (e, t, s) => {
      console.log(s);
    }, f = (e, t, s) => {
      C.error("上传失败"), console.error(e);
    }, v = (e) => {
    }, h = y(() => ({
      ...c,
      "file-list": l.value,
      "list-type": "picture-card",
      accept: "image/gif,image/jpeg,image/jpg,image/png,image/svg",
      onBeforeUpload: v,
      onChange: g,
      onSuccess: m,
      onError: f,
      onPreview: x
    })), x = (e) => {
      e.url && (r.value = e.url, u(!0));
    };
    return () => a(
      "div",
      {
        class: "epic-upload-image"
      },
      {
        default: () => [
          a(U, h.value, {
            default: () => [
              a("div", { style: { "text-align": "center" } }, {
                default: () => [
                  a("span", {
                    class: "iconfont epic-icon-shangchuan1 text-md",
                    style: { "margin-right": "2px" }
                  }),
                  a(
                    "div",
                    { class: "ant-upload-text" },
                    { default: () => "点击上传" }
                  )
                ]
              })
            ]
          }),
          (() => {
            if (n.value)
              return a(w, {
                urlList: [r.value],
                onClose: () => {
                  u(!1);
                }
              });
          })()
        ]
      }
    );
  }
});
export {
  P as default
};
