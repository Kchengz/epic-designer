import { c as p } from "./_commonjsHelpers-c5d32002.js";
import { r as Y } from "./index-aea079b3.js";
var c = { exports: {} };
(function(l, h) {
  (function(i, n) {
    l.exports = n(Y());
  })(p, function(i) {
    function n(_) {
      return _ && typeof _ == "object" && "default" in _ ? _ : { default: _ };
    }
    var d = n(i), u = "січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня".split("_"), a = "січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень".split("_"), f = /D[oD]?(\[[^[\]]*\]|\s)+MMMM?/;
    function t(_, r, m) {
      var e, o;
      return m === "m" ? r ? "хвилина" : "хвилину" : m === "h" ? r ? "година" : "годину" : _ + " " + (e = +_, o = { ss: r ? "секунда_секунди_секунд" : "секунду_секунди_секунд", mm: r ? "хвилина_хвилини_хвилин" : "хвилину_хвилини_хвилин", hh: r ? "година_години_годин" : "годину_години_годин", dd: "день_дні_днів", MM: "місяць_місяці_місяців", yy: "рік_роки_років" }[m].split("_"), e % 10 == 1 && e % 100 != 11 ? o[0] : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? o[1] : o[2]);
    }
    var s = function(_, r) {
      return f.test(r) ? u[_.month()] : a[_.month()];
    };
    s.s = a, s.f = u;
    var M = { name: "uk", weekdays: "неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота".split("_"), weekdaysShort: "ндл_пнд_втр_срд_чтв_птн_сбт".split("_"), weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"), months: s, monthsShort: "січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд".split("_"), weekStart: 1, relativeTime: { future: "за %s", past: "%s тому", s: "декілька секунд", m: t, mm: t, h: t, hh: t, d: "день", dd: t, M: "місяць", MM: t, y: "рік", yy: t }, ordinal: function(_) {
      return _;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY р.", LLL: "D MMMM YYYY р., HH:mm", LLLL: "dddd, D MMMM YYYY р., HH:mm" } };
    return d.default.locale(M, null, !0), M;
  });
})(c);
const D = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" }));
export {
  D as u
};
