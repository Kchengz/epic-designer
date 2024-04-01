import { c } from "./_commonjsHelpers-c5d32002.js";
import { r as l } from "./index-db7dae58.js";
var p = { exports: {} };
(function(m, M) {
  (function(a, _) {
    m.exports = _(l());
  })(c, function(a) {
    function _(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var d = _(a);
    function o(e) {
      return e > 1 && e < 5 && ~~(e / 10) != 1;
    }
    function t(e, n, i, r) {
      var s = e + " ";
      switch (i) {
        case "s":
          return n || r ? "pár sekund" : "pár sekundami";
        case "m":
          return n ? "minuta" : r ? "minutu" : "minutou";
        case "mm":
          return n || r ? s + (o(e) ? "minuty" : "minut") : s + "minutami";
        case "h":
          return n ? "hodina" : r ? "hodinu" : "hodinou";
        case "hh":
          return n || r ? s + (o(e) ? "hodiny" : "hodin") : s + "hodinami";
        case "d":
          return n || r ? "den" : "dnem";
        case "dd":
          return n || r ? s + (o(e) ? "dny" : "dní") : s + "dny";
        case "M":
          return n || r ? "měsíc" : "měsícem";
        case "MM":
          return n || r ? s + (o(e) ? "měsíce" : "měsíců") : s + "měsíci";
        case "y":
          return n || r ? "rok" : "rokem";
        case "yy":
          return n || r ? s + (o(e) ? "roky" : "let") : s + "lety";
      }
    }
    var u = { name: "cs", weekdays: "neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota".split("_"), weekdaysShort: "ne_po_út_st_čt_pá_so".split("_"), weekdaysMin: "ne_po_út_st_čt_pá_so".split("_"), months: "leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec".split("_"), monthsShort: "led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro".split("_"), weekStart: 1, yearStart: 4, ordinal: function(e) {
      return e + ".";
    }, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd D. MMMM YYYY H:mm", l: "D. M. YYYY" }, relativeTime: { future: "za %s", past: "před %s", s: t, m: t, mm: t, h: t, hh: t, d: t, dd: t, M: t, MM: t, y: t, yy: t } };
    return d.default.locale(u, null, !0), u;
  });
})(p);
const f = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" }));
export {
  f as c
};
