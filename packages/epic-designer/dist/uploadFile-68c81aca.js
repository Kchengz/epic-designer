import { defineComponent as h, ref as m, watch as n, h as o, nextTick as g } from "vue";
import { NUpload as V, NButton as x } from "naive-ui";
const F = h({
  props: {
    modelValue: {
      type: Array,
      default: () => []
    }
  },
  emits: ["update:modelValue"],
  setup(u, { emit: r, attrs: s }) {
    const e = m([]);
    n(e, (l) => {
      r("update:modelValue", l);
    }), n(
      () => u.modelValue,
      (l) => {
        if (l != null && l.length > 0 && e.value != null) {
          if (e.value === l)
            return;
          e.value.length = 0, e.value.push(...l);
        }
      },
      { deep: !0, immediate: !0 }
    );
    function d(l) {
      console.log("onChange called->", l), g(() => {
        e.value = l;
      });
    }
    const i = ({ file: l, event: a }) => {
      console.log("OnError called->", l, a);
    }, p = ({ file: l, event: a }) => {
      var t;
      console.log("OnFinish called->", l, a);
      const c = a == null ? void 0 : a.target, f = JSON.parse(c.response ?? "{}");
      l.url = (t = f.data) == null ? void 0 : t.url;
    };
    return () => o("div", null, {
      default: () => [
        o(V, {
          ...s,
          "onUpdate:file-list": d,
          "file-list": e.value,
          onError: i,
          onFinish: p,
          "default-upload": !0
        }, {
          default: () => [
            o(
              x,
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
  F as default
};
