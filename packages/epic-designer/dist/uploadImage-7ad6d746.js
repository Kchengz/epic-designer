import { defineComponent as k, useAttrs as E, ref as n, watch as d, computed as N, openBlock as m, createElementBlock as f, createVNode as g, unref as v, normalizeProps as B, guardReactiveProps as j, withCtx as A, createCommentVNode as I, nextTick as z, createElementVNode as h } from "vue";
import { Upload as L, Image as R, message as s } from "ant-design-vue";
const T = { class: "epic-upload-image" }, q = { key: 0 }, D = /* @__PURE__ */ h("span", { class: "iconfont epic-icon-shangchuan1 mr-2px" }, null, -1), F = /* @__PURE__ */ h("div", { class: "ant-upload-text" }, "点击上传", -1), G = [
  D,
  F
], K = /* @__PURE__ */ k({
  __name: "uploadImage",
  props: {
    modelValue: {
      type: Array,
      default: () => []
    },
    maxCount: {
      type: Number
    }
  },
  emits: ["update:modelValue", "change"],
  setup(_, { emit: V }) {
    const x = E(), i = _, u = V, t = n([]), l = n(""), c = n(!1), p = (e) => {
      c.value = e;
    };
    d(t, (e) => {
      u("update:modelValue", e), u("change", e);
    }), d(
      () => i.modelValue,
      (e) => {
        if (e != null && e.length > 0 && t.value != null) {
          if (t.value === e)
            return;
          t.value.length = 0, t.value.push(...e);
        }
      },
      { deep: !0, immediate: !0 }
    );
    function C(e) {
      z(() => {
        t.value = e;
      });
    }
    const b = (e) => {
      var a, r;
      if (e.file.status !== "uploading") {
        if (e.file.status === "done") {
          const o = (r = (a = e.file.response) == null ? void 0 : a.data) == null ? void 0 : r.url;
          if (!e.file.url && !o) {
            e.file.status = "error", s.error("上传失败");
            return;
          }
          e.file.url = o, e.file.thumbUrl = o;
        }
        e.file.status === "error" && s.error("upload error");
      }
    }, w = (e) => {
    }, y = N(() => ({
      ...x,
      "list-type": "picture-card",
      accept: "image/gif,image/jpeg,image/jpg,image/png,image/svg",
      "onUpdate:file-list": C,
      "file-list": t.value,
      "onBefore-upload": w,
      onChange: b,
      onPreview: U
    }));
    function U(e) {
      e.url && (l.value = e.url, p(!0));
    }
    function P() {
      l.value && s.error("图片地址无法访问!");
    }
    return (e, a) => (m(), f("div", T, [
      g(v(L), B(j(y.value)), {
        default: A(() => {
          var r;
          return [
            (((r = t.value) == null ? void 0 : r.length) ?? 0) < (i.maxCount ?? 999) ? (m(), f("div", q, G)) : I("", !0)
          ];
        }),
        _: 1
      }, 16),
      g(v(R), {
        style: { display: "none" },
        src: l.value,
        preview: {
          visible: c.value,
          onVisibleChange: p
        },
        onError: P
      }, null, 8, ["src", "preview"])
    ]));
  }
});
export {
  K as default
};
