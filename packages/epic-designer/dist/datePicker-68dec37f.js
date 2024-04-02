import { defineComponent as p, watch as c, h as r } from "vue";
import { DatePicker as u } from "ant-design-vue";
const m = p({
  name: "EDatePicker",
  emits: ["update:modelValue", "change", "blur"],
  setup(f, { emit: t, attrs: a }) {
    c(
      () => a.type,
      () => {
        n();
      }
    );
    function n(l = null) {
      t("update:modelValue", l), t("change", l), t("blur", l);
    }
    return () => {
      let l = u;
      const o = a.type, e = {
        ...a,
        value: a.modelValue,
        "onUpdate:value": n
      };
      return o === "daterange" ? (typeof e.value != "object" && e.value !== null && (e.value = null), l = u.RangePicker) : o === "month" ? (typeof e.value == "object" && (e.value = null), l = u.MonthPicker) : typeof e.value == "object" && (e.value = null), r(l, e);
    };
  }
});
export {
  m as default
};
