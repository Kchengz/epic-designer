import { c as d } from "./_commonjsHelpers-c5d32002.js";
import { r as p } from "./index-db7dae58.js";
var l = { exports: {} };
(function(_, M) {
  (function(n, s) {
    _.exports = s(p());
  })(d, function(n) {
    function s(a) {
      return a && typeof a == "object" && "default" in a ? a : { default: a };
    }
    var i = s(n);
    function e(a, m, t, o) {
      var u = { s: ["mõne sekundi", "mõni sekund", "paar sekundit"], m: ["ühe minuti", "üks minut"], mm: ["%d minuti", "%d minutit"], h: ["ühe tunni", "tund aega", "üks tund"], hh: ["%d tunni", "%d tundi"], d: ["ühe päeva", "üks päev"], M: ["kuu aja", "kuu aega", "üks kuu"], MM: ["%d kuu", "%d kuud"], y: ["ühe aasta", "aasta", "üks aasta"], yy: ["%d aasta", "%d aastat"] };
      return m ? (u[t][2] ? u[t][2] : u[t][1]).replace("%d", a) : (o ? u[t][0] : u[t][1]).replace("%d", a);
    }
    var r = { name: "et", weekdays: "pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev".split("_"), weekdaysShort: "P_E_T_K_N_R_L".split("_"), weekdaysMin: "P_E_T_K_N_R_L".split("_"), months: "jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split("_"), monthsShort: "jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split("_"), ordinal: function(a) {
      return a + ".";
    }, weekStart: 1, relativeTime: { future: "%s pärast", past: "%s tagasi", s: e, m: e, mm: e, h: e, hh: e, d: e, dd: "%d päeva", M: e, MM: e, y: e, yy: e }, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd, D. MMMM YYYY H:mm" } };
    return i.default.locale(r, null, !0), r;
  });
})(l);
const f = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" }));
export {
  f as e
};
