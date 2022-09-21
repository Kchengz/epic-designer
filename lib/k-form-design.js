import { defineComponent as t, openBlock as e, createElementBlock as r, toDisplayString as s } from "vue";
const c = /* @__PURE__ */ t({
  __name: "KFormBuild",
  props: {
    msg: {
      type: String
    }
  },
  setup(o) {
    const n = o;
    return (m, u) => (e(), r("div", null, " jkjkjlkjl \u6211\u662F\u6D4B\u8BD5\u7EC4\u4EF6 " + s(n.msg), 1));
  }
}), l = [c], a = {
  install(o) {
    l.forEach((n) => {
      o.component(n.__name, n);
    });
  }
};
export {
  c as KFormBuild,
  a as default
};
