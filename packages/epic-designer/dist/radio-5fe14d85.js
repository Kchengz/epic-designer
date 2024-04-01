import { defineComponent as m, h as l } from "vue";
import "./el-select-4ed993c7.js";
import { ElRadioGroup as r, ElRadioButton as i, ElRadio as p } from "element-plus";
const E = m({
  emits: ["update:modelValue"],
  setup(f, { emit: u, attrs: d }) {
    function n(e = null) {
      u("update:modelValue", e);
    }
    return () => {
      const e = {
        ...d,
        "onUpdate:modelValue": n
      };
      return l(r, e, {
        default: () => {
          var t, o;
          return [
            e != null && e.radioButton ? (t = e.options) == null ? void 0 : t.map(
              (a) => l(i, { label: a.value }, { default: () => a.label })
            ) : (o = e.options) == null ? void 0 : o.map(
              (a) => l(p, { label: a.value }, { default: () => a.label })
            )
          ];
        }
      });
    };
  }
});
export {
  E as default
};
