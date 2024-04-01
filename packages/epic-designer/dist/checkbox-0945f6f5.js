import { defineComponent as n, h as u } from "vue";
import { NCheckboxGroup as d, NCheckbox as m } from "naive-ui";
const s = n({
  emits: ["update:modelValue"],
  setup(r, { emit: t, attrs: l }) {
    function p(e = null) {
      t("update:modelValue", e);
    }
    return () => {
      const e = {
        ...l,
        value: l.modelValue,
        "onUpdate:value": p
      };
      return u(d, e, {
        default: () => {
          var o;
          return [
            (o = e.options) == null ? void 0 : o.map(
              (a) => u(m, { label: a.label, value: a.value })
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
