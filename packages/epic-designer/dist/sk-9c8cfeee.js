import { c } from "./_commonjsHelpers-c5d32002.js";
import { r as p } from "./index-aea079b3.js";
var l = { exports: {} };
(function(_, M) {
  (function(m, s) {
    _.exports = s(p());
  })(c, function(m) {
    function s(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var u = s(m);
    function o(e) {
      return e > 1 && e < 5 && ~~(e / 10) != 1;
    }
    function r(e, t, d, n) {
      var a = e + " ";
      switch (d) {
        case "s":
          return t || n ? "pár sekúnd" : "pár sekundami";
        case "m":
          return t ? "minúta" : n ? "minútu" : "minútou";
        case "mm":
          return t || n ? a + (o(e) ? "minúty" : "minút") : a + "minútami";
        case "h":
          return t ? "hodina" : n ? "hodinu" : "hodinou";
        case "hh":
          return t || n ? a + (o(e) ? "hodiny" : "hodín") : a + "hodinami";
        case "d":
          return t || n ? "deň" : "dňom";
        case "dd":
          return t || n ? a + (o(e) ? "dni" : "dní") : a + "dňami";
        case "M":
          return t || n ? "mesiac" : "mesiacom";
        case "MM":
          return t || n ? a + (o(e) ? "mesiace" : "mesiacov") : a + "mesiacmi";
        case "y":
          return t || n ? "rok" : "rokom";
        case "yy":
          return t || n ? a + (o(e) ? "roky" : "rokov") : a + "rokmi";
      }
    }
    var i = { name: "sk", weekdays: "nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota".split("_"), weekdaysShort: "ne_po_ut_st_št_pi_so".split("_"), weekdaysMin: "ne_po_ut_st_št_pi_so".split("_"), months: "január_február_marec_apríl_máj_jún_júl_august_september_október_november_december".split("_"), monthsShort: "jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec".split("_"), weekStart: 1, yearStart: 4, ordinal: function(e) {
      return e + ".";
    }, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd D. MMMM YYYY H:mm", l: "D. M. YYYY" }, relativeTime: { future: "za %s", past: "pred %s", s: r, m: r, mm: r, h: r, hh: r, d: r, dd: r, M: r, MM: r, y: r, yy: r } };
    return u.default.locale(i, null, !0), i;
  });
})(l);
const f = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" }));
export {
  f as s
};
