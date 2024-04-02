import { c as i } from "./_commonjsHelpers-c5d32002.js";
import { r as m } from "./index-aea079b3.js";
var p = { exports: {} };
(function(a, c) {
  (function(o, u) {
    a.exports = u(m());
  })(i, function(o) {
    function u(t) {
      return t && typeof t == "object" && "default" in t ? t : { default: t };
    }
    var s = u(o), _ = { name: "hu", weekdays: "vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat".split("_"), weekdaysShort: "vas_hét_kedd_sze_csüt_pén_szo".split("_"), weekdaysMin: "v_h_k_sze_cs_p_szo".split("_"), months: "január_február_március_április_május_június_július_augusztus_szeptember_október_november_december".split("_"), monthsShort: "jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec".split("_"), ordinal: function(t) {
      return t + ".";
    }, weekStart: 1, relativeTime: { future: "%s múlva", past: "%s", s: function(t, e, r, n) {
      return "néhány másodperc" + (n || e ? "" : "e");
    }, m: function(t, e, r, n) {
      return "egy perc" + (n || e ? "" : "e");
    }, mm: function(t, e, r, n) {
      return t + " perc" + (n || e ? "" : "e");
    }, h: function(t, e, r, n) {
      return "egy " + (n || e ? "óra" : "órája");
    }, hh: function(t, e, r, n) {
      return t + " " + (n || e ? "óra" : "órája");
    }, d: function(t, e, r, n) {
      return "egy " + (n || e ? "nap" : "napja");
    }, dd: function(t, e, r, n) {
      return t + " " + (n || e ? "nap" : "napja");
    }, M: function(t, e, r, n) {
      return "egy " + (n || e ? "hónap" : "hónapja");
    }, MM: function(t, e, r, n) {
      return t + " " + (n || e ? "hónap" : "hónapja");
    }, y: function(t, e, r, n) {
      return "egy " + (n || e ? "év" : "éve");
    }, yy: function(t, e, r, n) {
      return t + " " + (n || e ? "év" : "éve");
    } }, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "YYYY.MM.DD.", LL: "YYYY. MMMM D.", LLL: "YYYY. MMMM D. H:mm", LLLL: "YYYY. MMMM D., dddd H:mm" } };
    return s.default.locale(_, null, !0), _;
  });
})(p);
const d = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" }));
export {
  d as h
};
