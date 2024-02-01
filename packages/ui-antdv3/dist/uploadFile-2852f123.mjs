import { defineComponent as h, ref as g, watch as p, computed as v, h as r, nextTick as U } from "vue";
import { d as V, m as a } from "./index-bfaa4855.mjs";
import { B as x } from "./index-43cd11f6.mjs";
import "./useConfigInject-f4796704.mjs";
import "./index-4ddd22ca.mjs";
import "./pickAttrs-0f2b7511.mjs";
import "./index-34e90455.mjs";
import "./Portal-6677def3.mjs";
import "./raf-09a8b76f.mjs";
import "./vnode-35592114.mjs";
import "./ResizeObserver.es-8567d31b.mjs";
import "./index-0b483102.mjs";
import "./_flatRest-805d9865.mjs";
import "./Col-790da5bd.mjs";
import "./useFlexGapSupport-4e554c93.mjs";
import "./index-ae81290b.mjs";
import "./CheckOutlined-e56c0a8d.mjs";
import "./collapseMotion-f404b746.mjs";
import "./FormItemContext-4e085918.mjs";
import "./index-d455f4a3.mjs";
import "./wave-320c2dad.mjs";
import "./classCallCheck-781f96f0.mjs";
import "./EyeOutlined-6405133e.mjs";
import "./index-82313b29.mjs";
import "./colors-e1c01837.mjs";
import "./firstNotUndefined-ac7713f5.mjs";
import "./useRefs-3af9dee9.mjs";
import "./useMergedState-d616d3f0.mjs";
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
    p(e, (t) => {
      m("update:modelValue", t);
    }), p(
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
            t.file.status = "error", a.error("上传失败");
            return;
          }
          t.file.url = i;
        }
        t.file.status === "error" && a.error("upload error");
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
