import { c as o } from "./_commonjsHelpers-c5d32002.js";
var a = { exports: {} };
(function(t, _) {
  (function(r, e) {
    t.exports = e();
  })(o, function() {
    return { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(r) {
      var e = ["th", "st", "nd", "rd"], n = r % 100;
      return "[" + r + (e[(n - 20) % 10] || e[n] || e[0]) + "]";
    } };
  });
})(a);
const s = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" }));
export {
  s as e
};
