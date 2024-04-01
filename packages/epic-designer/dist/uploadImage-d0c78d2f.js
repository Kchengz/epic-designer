import { defineComponent as m, ref as f, watch as n, h as t, nextTick as h } from "vue";
import { NUpload as x } from "naive-ui";
const V = m({
  props: {
    modelValue: {
      type: Array,
      default: () => []
    }
  },
  emits: ["update:modelValue"],
  setup(i, { emit: s, attrs: r }) {
    const a = f([]);
    n(a, (e) => {
      s("update:modelValue", e);
    }), n(
      () => i.modelValue,
      (e) => {
        if (e != null && e.length > 0 && a.value != null) {
          if (a.value === e)
            return;
          a.value.length = 0, a.value.push(...e);
        }
      },
      { deep: !0, immediate: !0 }
    );
    function u(e) {
      console.log("onChange called->", e), h(() => {
        a.value = e;
      });
    }
    const d = ({ file: e, event: l }) => {
      var o;
      console.log("OnFinish called->", e, l);
      const p = l == null ? void 0 : l.target, g = JSON.parse(p.response ?? "{}");
      e.url = (o = g.data) == null ? void 0 : o.url;
    }, c = ({ file: e, event: l }) => {
      console.log("OnError called->", e, l);
    };
    return () => t(
      "div",
      {
        class: "epic-upload-image"
      },
      {
        default: () => [
          t(
            x,
            {
              ...r,
              "list-type": "image-card",
              accept: "image/gif,image/jpeg,image/jpg,image/png,image/svg",
              "onUpdate:file-list": u,
              "file-list": a.value,
              onFinish: d,
              onError: c
            },
            {
              default: () => [
                t(
                  "div",
                  { style: { "text-align": "center" } },
                  {
                    default: () => [
                      t("span", {
                        class: "iconfont epic-icon-shangchuan1 text-md",
                        style: { "margin-right": "2px" }
                      }),
                      t(
                        "div",
                        { class: "ant-upload-text" },
                        { default: () => "点击上传" }
                      )
                    ]
                  }
                )
              ]
            }
          )
        ]
      }
    );
  }
});
export {
  V as default
};
