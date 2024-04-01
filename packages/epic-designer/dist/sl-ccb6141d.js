import { c as d } from "./_commonjsHelpers-c5d32002.js";
import { r as p } from "./index-db7dae58.js";
var M = { exports: {} };
(function(s, f) {
  (function(i, u) {
    s.exports = u(p());
  })(d, function(i) {
    function u(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var c = u(i);
    function n(e) {
      return e % 100 == 2;
    }
    function o(e) {
      return e % 100 == 3 || e % 100 == 4;
    }
    function m(e, t, l, r) {
      var a = e + " ";
      switch (l) {
        case "s":
          return t || r ? "nekaj sekund" : "nekaj sekundami";
        case "m":
          return t ? "ena minuta" : "eno minuto";
        case "mm":
          return n(e) ? a + (t || r ? "minuti" : "minutama") : o(e) ? a + (t || r ? "minute" : "minutami") : a + (t || r ? "minut" : "minutami");
        case "h":
          return t ? "ena ura" : "eno uro";
        case "hh":
          return n(e) ? a + (t || r ? "uri" : "urama") : o(e) ? a + (t || r ? "ure" : "urami") : a + (t || r ? "ur" : "urami");
        case "d":
          return t || r ? "en dan" : "enim dnem";
        case "dd":
          return n(e) ? a + (t || r ? "dneva" : "dnevoma") : a + (t || r ? "dni" : "dnevi");
        case "M":
          return t || r ? "en mesec" : "enim mesecem";
        case "MM":
          return n(e) ? a + (t || r ? "meseca" : "mesecema") : o(e) ? a + (t || r ? "mesece" : "meseci") : a + (t || r ? "mesecev" : "meseci");
        case "y":
          return t || r ? "eno leto" : "enim letom";
        case "yy":
          return n(e) ? a + (t || r ? "leti" : "letoma") : o(e) ? a + (t || r ? "leta" : "leti") : a + (t || r ? "let" : "leti");
      }
    }
    var _ = { name: "sl", weekdays: "nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota".split("_"), months: "januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"), weekStart: 1, weekdaysShort: "ned._pon._tor._sre._čet._pet._sob.".split("_"), monthsShort: "jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"), weekdaysMin: "ne_po_to_sr_če_pe_so".split("_"), ordinal: function(e) {
      return e + ".";
    }, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd, D. MMMM YYYY H:mm", l: "D. M. YYYY" }, relativeTime: { future: "čez %s", past: "pred %s", s: m, m, mm: m, h: m, hh: m, d: m, dd: m, M: m, MM: m, y: m, yy: m } };
    return c.default.locale(_, null, !0), _;
  });
})(M);
const k = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" }));
export {
  k as s
};
