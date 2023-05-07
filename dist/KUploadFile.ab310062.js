import { defineComponent as h, ref as g, watch as l, computed as v, h as r } from "vue";
import { l as y } from "./revoke.807da173.js";
import { d as U, m as u } from "./index.06c6e9f6.js";
import "./useConfigInject.fdc04e2e.js";
import "./_vue_commonjs-external.cdc460b2.js";
import "./_commonjsHelpers.da91e947.js";
import "./index.1fa3133f.js";
import "./index.1e43ecc1.js";
import "./pickAttrs.65eceb8b.js";
import "./useMergedState.94fe30d0.js";
import "./Portal.a423630d.js";
import "./raf.f4e1fc4f.js";
import "./vnode.716a0aad.js";
import "./ResizeObserver.es.f11dbe23.js";
import "./index.ae5edccb.js";
import "./_flatRest.969e6721.js";
import "./Col.c9fdc545.js";
import "./styleChecker.856616fa.js";
import "./index.f6071fa7.js";
import "./CheckOutlined.69455364.js";
import "./collapseMotion.7799b65c.js";
import "./FormItemContext.896a7bec.js";
import "./index.8e979d13.js";
import "./index.ece5d132.js";
import "./wave.712e07cd.js";
import "./classCallCheck.fb739271.js";
import "./EyeOutlined.44c22b8a.js";
import "./useRefs.8c7f5dd6.js";
import "./colors.6e77f922.js";
import "./firstNotUndefined.4390bc7f.js";
const A = y(
  async () => (await import("./index.ffe828cd.js").then((o) => o.i)).default
), Y = h({
  emits: ["update:modelValue"],
  props: {
    modelValue: {
      type: Array,
      default: []
    }
  },
  setup(o, { emit: m, attrs: n }) {
    const e = g([]);
    l(e, (t) => {
      m("update:modelValue", t);
    }), l(
      () => o.modelValue,
      (t) => {
        if (t && t.length > 0 && e.value) {
          if (e.value === t)
            return;
          e.value.length = 0, e.value.push(...t);
        }
      },
      { deep: !0, immediate: !0 }
    );
    function s(t) {
      e.value = t;
    }
    const d = (t) => {
      var i, p;
      if (t.file.status !== "uploading") {
        if (t.file.status === "done") {
          const a = (p = (i = t.file.response) == null ? void 0 : i.data) == null ? void 0 : p.url;
          if (!t.file.url && !a) {
            t.file.status = "error", u.error("\u4E0A\u4F20\u5931\u8D25");
            return;
          }
          t.file.url = a;
        }
        t.file.status === "error" && u.error("upload error");
      }
    }, f = (t) => {
    }, c = v(() => ({
      ...n,
      "onUpdate:file-list": s,
      "onBefore-upload": f,
      onChange: d
    }));
    return () => r("div", null, {
      default: () => [
        r(U, c, {
          default: () => [
            r(
              A,
              {},
              {
                default: () => [
                  r("span", {
                    class: "iconfont icon-shangchuan1",
                    style: { "margin-right": "2px" }
                  }),
                  r("span", null, { default: () => "\u4E0A\u4F20\u6587\u4EF6" })
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
  Y as default
};
