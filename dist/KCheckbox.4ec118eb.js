import { defineComponent as m, h as a } from "vue";
import "./useElementPlus.5a2e6faa.js";
import { a as u, E as n } from "./index.da468ef6.js";
import "./isEqual.c2f76849.js";
import "./index.f6071fa7.js";
import "./hasIn.d68b1023.js";
import "./flatten.3de0f950.js";
const C = m({
  emits: ["update:modelValue"],
  setup(d, { emit: l, attrs: p }) {
    function r(e = null) {
      l("update:modelValue", e);
    }
    return () => {
      const e = {
        ...p,
        "onUpdate:modelValue": r
      };
      return a(u, e, {
        default: () => {
          var o;
          return [
            (o = e.options) == null ? void 0 : o.map(
              (t) => a(n, { label: t.label, value: t.value })
            )
          ];
        }
      });
    };
  }
});
export {
  C as default
};
