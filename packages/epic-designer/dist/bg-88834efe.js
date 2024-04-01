import { c as m } from "./_commonjsHelpers-c5d32002.js";
import { r as d } from "./index-db7dae58.js";
var i = { exports: {} };
(function(s, l) {
  (function(o, r) {
    s.exports = r(d());
  })(m, function(o) {
    function r(_) {
      return _ && typeof _ == "object" && "default" in _ ? _ : { default: _ };
    }
    var a = r(o), e = { name: "bg", weekdays: "неделя_понеделник_вторник_сряда_четвъртък_петък_събота".split("_"), weekdaysShort: "нед_пон_вто_сря_чет_пет_съб".split("_"), weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"), months: "януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември".split("_"), monthsShort: "янр_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек".split("_"), weekStart: 1, ordinal: function(_) {
      var n = _ % 100;
      if (n > 10 && n < 20)
        return _ + "-ти";
      var t = _ % 10;
      return t === 1 ? _ + "-ви" : t === 2 ? _ + "-ри" : t === 7 || t === 8 ? _ + "-ми" : _ + "-ти";
    }, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "D.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY H:mm", LLLL: "dddd, D MMMM YYYY H:mm" }, relativeTime: { future: "след %s", past: "преди %s", s: "няколко секунди", m: "минута", mm: "%d минути", h: "час", hh: "%d часа", d: "ден", dd: "%d дена", M: "месец", MM: "%d месеца", y: "година", yy: "%d години" } };
    return a.default.locale(e, null, !0), e;
  });
})(i);
const f = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" }));
export {
  f as b
};
