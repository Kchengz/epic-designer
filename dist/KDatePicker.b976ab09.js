import { defineComponent as u, watch as n, h as r } from "vue";
import { E as l } from "./index.dfa51ea7.js";
import "./weekYear.7d67b0c3.js";
import "./_commonjsHelpers.da91e947.js";
import "./useElementPlus.5a2e6faa.js";
import "./isEqual.c2f76849.js";
import "./index.f6071fa7.js";
import "./index.0fb88f51.js";
import "./index.1e43ecc1.js";
import "./flatten.3de0f950.js";
const j = u({
  emits: ["update:modelValue"],
  setup(m, { emit: i, attrs: o }) {
    n(
      () => o.type,
      () => {
        p();
      }
    );
    function p(t = null) {
      i("update:modelValue", t);
    }
    return () => {
      let t = l;
      const a = o.type, e = {
        ...o,
        "onUpdate:modelValue": p
      };
      return a === "daterange" ? (typeof e.value != "object" && e.value !== null && (e.value = null), t = l.RangePicker) : a === "month" ? (typeof e.value == "object" && (e.value = null), t = l.MonthPicker) : typeof e.value == "object" && (e.value = null), [r(t, e)];
    };
  }
});
export {
  j as default
};
