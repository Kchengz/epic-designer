import { defineComponent as g, inject as c, computed as a, openBlock as d, createElementBlock as i, createBlock as h, unref as u, createCommentVNode as y } from "vue";
import { p, o as _, s as k, r as C } from "./index-bc424301.js";
const U = { class: "epic-event-view" }, B = { key: 0 }, M = /* @__PURE__ */ g({
  __name: "eventView",
  setup(E) {
    const l = c("pageSchema"), r = c("designer"), v = p.getComponent("EActionEditor"), m = p.getComponentConfings(), n = a(() => r.state.checkedNode), f = a(() => {
      var o, s;
      const t = [{
        title: "生命周期",
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
      }], e = ((s = m[((o = r.state.checkedNode) == null ? void 0 : o.type) ?? ""]) == null ? void 0 : s.config.event) ?? [];
      return t.unshift({
        title: "组件事件",
        events: e
      }), t;
    });
    function b(t, e) {
      k(t, e, n.value), C.push(l.schemas, "编辑组件属性");
    }
    return (t, e) => (d(), i("aside", U, [
      n.value ? (d(), i("div", B, [
        (d(), h(u(v), {
          key: n.value.id,
          "event-list": f.value,
          "model-value": u(_)("on", n.value),
          "onUpdate:modelValue": e[0] || (e[0] = (o) => b(o, "on"))
        }, null, 8, ["event-list", "model-value"]))
      ])) : y("", !0)
    ]));
  }
});
export {
  M as default
};
