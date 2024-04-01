import { defineComponent as m, h as a } from "vue";
import "./el-select-4ed993c7.js";
import { ElCheckboxGroup as p, ElCheckboxButton as r, ElCheckbox as b } from "element-plus";
const s = m({
  emits: ["update:modelValue"],
  setup(c, { emit: u, attrs: n }) {
    function d(e = null) {
      u("update:modelValue", e);
    }
    return () => {
      const e = {
        ...n,
        "onUpdate:modelValue": d
      };
      return a(p, e, {
        default: () => {
          var o, t;
          return [
            e != null && e.radioButton ? (o = e.options) == null ? void 0 : o.map(
              (l) => a(r, { label: l.label, value: l.value })
            ) : (t = e.options) == null ? void 0 : t.map(
              (l) => a(b, { label: l.label, value: l.value })
            )
          ];
        }
      });
    };
  }
});
export {
  s as default
};
