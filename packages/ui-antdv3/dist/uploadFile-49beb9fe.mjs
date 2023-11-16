import { defineComponent as h, ref as g, watch as a, computed as v, h as r, nextTick as U } from "vue";
import { d as V, m as p } from "./index-9b4e28a8.mjs";
import { B as x } from "./index-22096bf0.mjs";
import "./useConfigInject-f0dbb416.mjs";
import "./index-5fc6c346.mjs";
import "./pickAttrs-288ea149.mjs";
import "./index-d3f861e4.mjs";
import "./Portal-f8d09ab1.mjs";
import "./raf-09a8b76f.mjs";
import "./vnode-1aa65f32.mjs";
import "./ResizeObserver.es-aa1c2e0c.mjs";
import "./index-76b85780.mjs";
import "./_flatRest-18b83366.mjs";
import "./Col-6a21d416.mjs";
import "./useFlexGapSupport-a4f1c6a3.mjs";
import "./index-ae81290b.mjs";
import "./CheckOutlined-bdc41ba2.mjs";
import "./collapseMotion-0fff0c33.mjs";
import "./FormItemContext-f32a9c9f.mjs";
import "./index-6ded6d59.mjs";
import "./wave-7581548b.mjs";
import "./classCallCheck-7491e821.mjs";
import "./EyeOutlined-8b81c1ea.mjs";
import "./index-696fd4ee.mjs";
import "./colors-049dd05b.mjs";
import "./firstNotUndefined-ac7713f5.mjs";
import "./useRefs-07d4d46d.mjs";
import "./useMergedState-dbb38782.mjs";
const W = h({
  props: {
    modelValue: {
      type: Array,
      default: () => []
    }
  },
  emits: ["update:modelValue"],
  setup(u, { emit: m, attrs: n }) {
    const e = g([]);
    a(e, (t) => {
      m("update:modelValue", t);
    }), a(
      () => u.modelValue,
      (t) => {
        if (t != null && t.length > 0 && e.value != null) {
          if (e.value === t)
            return;
          e.value.length = 0, e.value.push(...t);
        }
      },
      { deep: !0, immediate: !0 }
    );
    function s(t) {
      U(() => {
        e.value = t;
      });
    }
    const d = (t) => {
      var o, l;
      if (t.file.status !== "uploading") {
        if (t.file.status === "done") {
          const i = (l = (o = t.file.response) == null ? void 0 : o.data) == null ? void 0 : l.url;
          if (!t.file.url && !i) {
            t.file.status = "error", p.error("上传失败");
            return;
          }
          t.file.url = i;
        }
        t.file.status === "error" && p.error("upload error");
      }
    }, f = (t) => {
    }, c = v(() => ({
      ...n,
      "onUpdate:file-list": s,
      "file-list": e.value,
      "onBefore-upload": f,
      onChange: d
    }));
    return () => r("div", null, {
      default: () => [
        r(V, c.value, {
          default: () => [
            r(
              x,
              {},
              {
                default: () => [
                  r("span", {
                    class: "iconfont epic-icon-shangchuan1",
                    style: { "margin-right": "2px" }
                  }),
                  r("span", null, { default: () => "上传文件" })
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
  W as default
};
