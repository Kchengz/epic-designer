import { defineComponent as g, inject as i, computed as a, openBlock as p, createElementBlock as m, unref as n, createVNode as h, createCommentVNode as _ } from "vue";
import { p as v } from "./index.091e7416.js";
import { h as k, s as y, r as F } from "./revoke.807da173.js";
const U = { class: "k-event-view" }, V = { key: 0 }, A = /* @__PURE__ */ g({
  __name: "KEventView",
  setup(B) {
    const l = i("schemas"), s = i("designer"), f = v.getComponent("k-action-editor"), b = v.getComponentConfings(), r = a(() => s.state.checkedNode), C = a(() => {
      var o, d, u, c;
      const t = [{
        title: "\u751F\u547D\u5468\u671F",
        events: [
          {
            type: "vnodeBeforeMount",
            describe: "beforeMount"
          },
          {
            type: "vnodeMounted",
            describe: "mounted"
          },
          {
            type: "vnodeBeforeUpdate",
            describe: "beforeUpdate"
          },
          {
            type: "vnodeUpdated",
            describe: "updated"
          },
          {
            type: "vnodeBeforeUnmount",
            describe: "beforeUnmount"
          },
          {
            type: "vnodeUnmounted",
            describe: "unmounted"
          },
          {
            type: "vnodeErrorCaptured",
            describe: "errorCaptured"
          }
        ]
      }], e = (c = (u = b[(d = (o = s.state.checkedNode) == null ? void 0 : o.type) != null ? d : ""]) == null ? void 0 : u.config.event) != null ? c : [];
      return t.unshift({
        title: "\u7EC4\u4EF6\u4E8B\u4EF6",
        events: e
      }), t;
    });
    function E(t, e) {
      y(t, e, r.value), F.push(l.value, "\u7F16\u8F91\u7EC4\u4EF6\u5C5E\u6027");
    }
    return (t, e) => (p(), m("aside", U, [
      n(r) ? (p(), m("div", V, [
        h(n(f), {
          eventList: n(C),
          "model-value": n(k)("on", n(r)),
          "onUpdate:modelValue": e[0] || (e[0] = (o) => E(o, "on"))
        }, null, 8, ["eventList", "model-value"])
      ])) : _("", !0)
    ]));
  }
});
export {
  A as default
};
