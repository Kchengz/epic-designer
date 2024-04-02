import { c as h } from "./_commonjsHelpers-c5d32002.js";
import { r as y } from "./index-aea079b3.js";
var L = { exports: {} };
(function(c, v) {
  (function(i, o) {
    c.exports = o(y());
  })(h, function(i) {
    function o(_) {
      return _ && typeof _ == "object" && "default" in _ ? _ : { default: _ };
    }
    var Y = o(i), u = "января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_"), a = "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"), M = "янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split("_"), l = "янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split("_"), f = /D[oD]?(\[[^[\]]*\]|\s)+MMMM?/;
    function r(_, e, p) {
      var t, n;
      return p === "m" ? e ? "минута" : "минуту" : _ + " " + (t = +_, n = { mm: e ? "минута_минуты_минут" : "минуту_минуты_минут", hh: "час_часа_часов", dd: "день_дня_дней", MM: "месяц_месяца_месяцев", yy: "год_года_лет" }[p].split("_"), t % 10 == 1 && t % 100 != 11 ? n[0] : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? n[1] : n[2]);
    }
    var s = function(_, e) {
      return f.test(e) ? u[_.month()] : a[_.month()];
    };
    s.s = a, s.f = u;
    var m = function(_, e) {
      return f.test(e) ? M[_.month()] : l[_.month()];
    };
    m.s = l, m.f = M;
    var d = { name: "ru", weekdays: "воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"), weekdaysShort: "вск_пнд_втр_срд_чтв_птн_сбт".split("_"), weekdaysMin: "вс_пн_вт_ср_чт_пт_сб".split("_"), months: s, monthsShort: m, weekStart: 1, yearStart: 4, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY г.", LLL: "D MMMM YYYY г., H:mm", LLLL: "dddd, D MMMM YYYY г., H:mm" }, relativeTime: { future: "через %s", past: "%s назад", s: "несколько секунд", m: r, mm: r, h: "час", hh: r, d: "день", dd: r, M: "месяц", MM: r, y: "год", yy: r }, ordinal: function(_) {
      return _;
    }, meridiem: function(_) {
      return _ < 4 ? "ночи" : _ < 12 ? "утра" : _ < 17 ? "дня" : "вечера";
    } };
    return Y.default.locale(d, null, !0), d;
  });
})(L);
const b = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" }));
export {
  b as r
};
