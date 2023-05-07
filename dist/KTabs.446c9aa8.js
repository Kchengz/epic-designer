import { defineComponent as d, h as n, renderSlot as i } from "vue";
import { T as c } from "./index.05f71c48.js";
import "./_commonjsHelpers.da91e947.js";
import "./index.1fa3133f.js";
import "./index.1e43ecc1.js";
import "./useConfigInject.fdc04e2e.js";
import "./_vue_commonjs-external.cdc460b2.js";
import "./raf.f4e1fc4f.js";
import "./KeyCode.93922cee.js";
import "./shallowequal.ae22630f.js";
import "./useMergedState.94fe30d0.js";
import "./Portal.a423630d.js";
import "./vnode.716a0aad.js";
import "./ResizeObserver.es.f11dbe23.js";
import "./_flatRest.969e6721.js";
import "./index.8a2670ef.js";
import "./index.704db3ff.js";
import "./useRefs.8c7f5dd6.js";
import "./colors.6e77f922.js";
import "./firstNotUndefined.4390bc7f.js";
import "./collapseMotion.7799b65c.js";
import "./useState.0fa93a30.js";
import "./isMobile.73c6cf20.js";
import "./omit.ba8a174d.js";
const E = d({
  props: {
    record: {
      type: Object,
      require: !0
    },
    children: {
      type: Array
    }
  },
  setup(r, { attrs: a, slots: o }) {
    return () => {
      var e;
      const t = {
        ...r.record,
        ...(e = r.record) == null ? void 0 : e.componentProps,
        title: r.record.label
      }, p = t.children;
      return delete t.children, n(c, t, {
        default: () => i(
          o,
          "edit-node",
          {},
          () => p.map(
            (m) => i(o, "node", { record: m })
          )
        )
      });
    };
  }
});
export {
  E as default
};
