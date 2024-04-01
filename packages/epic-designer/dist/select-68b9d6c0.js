import { defineComponent as n, h as a } from "vue";
import "./el-select-4ed993c7.js";
import { ElSelect as m, ElOption as d } from "element-plus";
const c = n({
  emits: ["update:modelValue"],
  setup(r, { emit: p, attrs: l }) {
    function u(e = null) {
      p("update:modelValue", e);
    }
    return () => {
      const e = {
        ...l,
        key: String(l.multiple),
        "onUpdate:modelValue": u
      };
      return a(m, e, {
        default: () => {
          var t;
          return [
            (t = e.options) == null ? void 0 : t.map(
              (o) => a(d, { label: o.label, value: o.value })
            )
          ];
        }
      });
    };
  }
});
export {
  c as default
};
