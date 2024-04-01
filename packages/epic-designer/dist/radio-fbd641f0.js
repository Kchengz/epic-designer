import { defineComponent as p, h as o } from "vue";
import { NRadioGroup as n, NRadio as r } from "naive-ui";
const s = p({
  emits: ["update:modelValue"],
  setup(m, { emit: d, attrs: l }) {
    function t(e = null) {
      d("update:modelValue", e);
    }
    return () => {
      const e = {
        ...l,
        value: l.modelValue,
        "onUpdate:value": t
      };
      return o(n, e, {
        default: () => {
          var u;
          return [
            (u = e.options) == null ? void 0 : u.map(
              (a) => o(r, { value: a.value, key: a.value }, { default: () => a.label })
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
