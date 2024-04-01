import { defineComponent as p, watch as c, h as r } from "vue";
import { DatePicker as n } from "ant-design-vue";
const m = p({
  name: "EDatePicker",
  emits: ["update:modelValue", "change", "blur"],
  setup(f, { emit: t, attrs: a }) {
    c(
      () => a.type,
      () => {
        u();
      }
    );
    function u(l = null) {
      t("update:modelValue", l), t("change", l), t("blur", l);
    }
    return () => {
      let l = n;
      const o = a.type, e = {
        ...a,
        "onUpdate:value": u
      };
      return o === "daterange" ? (typeof e.value != "object" && e.value !== null && (e.value = null), l = n.RangePicker) : o === "month" ? (typeof e.value == "object" && (e.value = null), l = n.MonthPicker) : typeof e.value == "object" && (e.value = null), r(l, e);
    };
  }
});
export {
  m as default
};
