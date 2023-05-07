import { defineComponent as u, h as t } from "vue";
import "./useElementPlus.5a2e6faa.js";
import { b as r, E as m } from "./index.e1b0fec6.js";
import "./isEqual.c2f76849.js";
import "./index.f6071fa7.js";
const E = u({
  emits: ["update:modelValue"],
  setup(n, { emit: l, attrs: p }) {
    function d(e = null) {
      l("update:modelValue", e);
    }
    return () => {
      const e = {
        ...p,
        "onUpdate:modelValue": d
      };
      return t(r, e, {
        default: () => {
          var o;
          return [
            (o = e.options) == null ? void 0 : o.map(
              (a) => t(m, { label: a.value }, { default: () => a.label })
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
