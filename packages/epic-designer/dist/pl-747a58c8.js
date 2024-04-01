import { c as z } from "./_commonjsHelpers-c5d32002.js";
import { r as M } from "./index-db7dae58.js";
var y = { exports: {} };
(function(c, f) {
  (function(o, n) {
    c.exports = n(M());
  })(z, function(o) {
    function n(t) {
      return t && typeof t == "object" && "default" in t ? t : { default: t };
    }
    var l = n(o);
    function i(t) {
      return t % 10 < 5 && t % 10 > 1 && ~~(t / 10) % 10 != 1;
    }
    function e(t, r, p) {
      var a = t + " ";
      switch (p) {
        case "m":
          return r ? "minuta" : "minutę";
        case "mm":
          return a + (i(t) ? "minuty" : "minut");
        case "h":
          return r ? "godzina" : "godzinę";
        case "hh":
          return a + (i(t) ? "godziny" : "godzin");
        case "MM":
          return a + (i(t) ? "miesiące" : "miesięcy");
        case "yy":
          return a + (i(t) ? "lata" : "lat");
      }
    }
    var s = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_"), m = "styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"), d = /D MMMM/, _ = function(t, r) {
      return d.test(r) ? s[t.month()] : m[t.month()];
    };
    _.s = m, _.f = s;
    var u = { name: "pl", weekdays: "niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"), weekdaysShort: "ndz_pon_wt_śr_czw_pt_sob".split("_"), weekdaysMin: "Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"), months: _, monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"), ordinal: function(t) {
      return t + ".";
    }, weekStart: 1, yearStart: 4, relativeTime: { future: "za %s", past: "%s temu", s: "kilka sekund", m: e, mm: e, h: e, hh: e, d: "1 dzień", dd: "%d dni", M: "miesiąc", MM: e, y: "rok", yy: e }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" } };
    return l.default.locale(u, null, !0), u;
  });
})(y);
const Y = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" }));
export {
  Y as p
};
