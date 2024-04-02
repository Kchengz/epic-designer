import { pluginManager as X } from "epic-designer";
import { c as ee, g as te } from "./_commonjsHelpers-c5d32002.js";
import { version as le } from "ant-design-vue";
var A = { exports: {} }, Z;
function oe() {
  return Z || (Z = 1, function(n, e) {
    (function(L, v) {
      n.exports = v();
    })(ee, function() {
      var L = 1e3, v = 6e4, j = 36e5, x = "millisecond", h = "second", M = "minute", E = "hour", g = "day", O = "week", P = "month", W = "quarter", w = "year", D = "date", q = "Invalid Date", G = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, B = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, Q = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(p) {
        var o = ["th", "st", "nd", "rd"], t = p % 100;
        return "[" + p + (o[(t - 20) % 10] || o[t] || o[0]) + "]";
      } }, Y = function(p, o, t) {
        var a = String(p);
        return !a || a.length >= o ? p : "" + Array(o + 1 - a.length).join(t) + p;
      }, K = { s: Y, z: function(p) {
        var o = -p.utcOffset(), t = Math.abs(o), a = Math.floor(t / 60), l = t % 60;
        return (o <= 0 ? "+" : "-") + Y(a, 2, "0") + ":" + Y(l, 2, "0");
      }, m: function p(o, t) {
        if (o.date() < t.date())
          return -p(t, o);
        var a = 12 * (t.year() - o.year()) + (t.month() - o.month()), l = o.clone().add(a, P), i = t - l < 0, r = o.clone().add(a + (i ? -1 : 1), P);
        return +(-(a + (t - l) / (i ? l - r : r - l)) || 0);
      }, a: function(p) {
        return p < 0 ? Math.ceil(p) || 0 : Math.floor(p);
      }, p: function(p) {
        return { M: P, y: w, w: O, d: g, D, h: E, m: M, s: h, ms: x, Q: W }[p] || String(p || "").toLowerCase().replace(/s$/, "");
      }, u: function(p) {
        return p === void 0;
      } }, R = "en", $ = {};
      $[R] = Q;
      var U = "$isDayjsObject", H = function(p) {
        return p instanceof V || !(!p || !p[U]);
      }, _ = function p(o, t, a) {
        var l;
        if (!o)
          return R;
        if (typeof o == "string") {
          var i = o.toLowerCase();
          $[i] && (l = i), t && ($[i] = t, l = i);
          var r = o.split("-");
          if (!l && r.length > 1)
            return p(r[0]);
        } else {
          var c = o.name;
          $[c] = o, l = c;
        }
        return !a && l && (R = l), l || !a && R;
      }, u = function(p, o) {
        if (H(p))
          return p.clone();
        var t = typeof o == "object" ? o : {};
        return t.date = p, t.args = arguments, new V(t);
      }, s = K;
      s.l = _, s.i = H, s.w = function(p, o) {
        return u(p, { locale: o.$L, utc: o.$u, x: o.$x, $offset: o.$offset });
      };
      var V = function() {
        function p(t) {
          this.$L = _(t.locale, null, !0), this.parse(t), this.$x = this.$x || t.x || {}, this[U] = !0;
        }
        var o = p.prototype;
        return o.parse = function(t) {
          this.$d = function(a) {
            var l = a.date, i = a.utc;
            if (l === null)
              return /* @__PURE__ */ new Date(NaN);
            if (s.u(l))
              return /* @__PURE__ */ new Date();
            if (l instanceof Date)
              return new Date(l);
            if (typeof l == "string" && !/Z$/i.test(l)) {
              var r = l.match(G);
              if (r) {
                var c = r[2] - 1 || 0, d = (r[7] || "0").substring(0, 3);
                return i ? new Date(Date.UTC(r[1], c, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, d)) : new Date(r[1], c, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, d);
              }
            }
            return new Date(l);
          }(t), this.init();
        }, o.init = function() {
          var t = this.$d;
          this.$y = t.getFullYear(), this.$M = t.getMonth(), this.$D = t.getDate(), this.$W = t.getDay(), this.$H = t.getHours(), this.$m = t.getMinutes(), this.$s = t.getSeconds(), this.$ms = t.getMilliseconds();
        }, o.$utils = function() {
          return s;
        }, o.isValid = function() {
          return this.$d.toString() !== q;
        }, o.isSame = function(t, a) {
          var l = u(t);
          return this.startOf(a) <= l && l <= this.endOf(a);
        }, o.isAfter = function(t, a) {
          return u(t) < this.startOf(a);
        }, o.isBefore = function(t, a) {
          return this.endOf(a) < u(t);
        }, o.$g = function(t, a, l) {
          return s.u(t) ? this[a] : this.set(l, t);
        }, o.unix = function() {
          return Math.floor(this.valueOf() / 1e3);
        }, o.valueOf = function() {
          return this.$d.getTime();
        }, o.startOf = function(t, a) {
          var l = this, i = !!s.u(a) || a, r = s.p(t), c = function(S, f) {
            var k = s.w(l.$u ? Date.UTC(l.$y, f, S) : new Date(l.$y, f, S), l);
            return i ? k : k.endOf(g);
          }, d = function(S, f) {
            return s.w(l.toDate()[S].apply(l.toDate("s"), (i ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(f)), l);
          }, m = this.$W, b = this.$M, y = this.$D, z = "set" + (this.$u ? "UTC" : "");
          switch (r) {
            case w:
              return i ? c(1, 0) : c(31, 11);
            case P:
              return i ? c(1, b) : c(0, b + 1);
            case O:
              var C = this.$locale().weekStart || 0, T = (m < C ? m + 7 : m) - C;
              return c(i ? y - T : y + (6 - T), b);
            case g:
            case D:
              return d(z + "Hours", 0);
            case E:
              return d(z + "Minutes", 1);
            case M:
              return d(z + "Seconds", 2);
            case h:
              return d(z + "Milliseconds", 3);
            default:
              return this.clone();
          }
        }, o.endOf = function(t) {
          return this.startOf(t, !1);
        }, o.$set = function(t, a) {
          var l, i = s.p(t), r = "set" + (this.$u ? "UTC" : ""), c = (l = {}, l[g] = r + "Date", l[D] = r + "Date", l[P] = r + "Month", l[w] = r + "FullYear", l[E] = r + "Hours", l[M] = r + "Minutes", l[h] = r + "Seconds", l[x] = r + "Milliseconds", l)[i], d = i === g ? this.$D + (a - this.$W) : a;
          if (i === P || i === w) {
            var m = this.clone().set(D, 1);
            m.$d[c](d), m.init(), this.$d = m.set(D, Math.min(this.$D, m.daysInMonth())).$d;
          } else
            c && this.$d[c](d);
          return this.init(), this;
        }, o.set = function(t, a) {
          return this.clone().$set(t, a);
        }, o.get = function(t) {
          return this[s.p(t)]();
        }, o.add = function(t, a) {
          var l, i = this;
          t = Number(t);
          var r = s.p(a), c = function(b) {
            var y = u(i);
            return s.w(y.date(y.date() + Math.round(b * t)), i);
          };
          if (r === P)
            return this.set(P, this.$M + t);
          if (r === w)
            return this.set(w, this.$y + t);
          if (r === g)
            return c(1);
          if (r === O)
            return c(7);
          var d = (l = {}, l[M] = v, l[E] = j, l[h] = L, l)[r] || 1, m = this.$d.getTime() + t * d;
          return s.w(m, this);
        }, o.subtract = function(t, a) {
          return this.add(-1 * t, a);
        }, o.format = function(t) {
          var a = this, l = this.$locale();
          if (!this.isValid())
            return l.invalidDate || q;
          var i = t || "YYYY-MM-DDTHH:mm:ssZ", r = s.z(this), c = this.$H, d = this.$m, m = this.$M, b = l.weekdays, y = l.months, z = l.meridiem, C = function(f, k, N, I) {
            return f && (f[k] || f(a, i)) || N[k].slice(0, I);
          }, T = function(f) {
            return s.s(c % 12 || 12, f, "0");
          }, S = z || function(f, k, N) {
            var I = f < 12 ? "AM" : "PM";
            return N ? I.toLowerCase() : I;
          };
          return i.replace(B, function(f, k) {
            return k || function(N) {
              switch (N) {
                case "YY":
                  return String(a.$y).slice(-2);
                case "YYYY":
                  return s.s(a.$y, 4, "0");
                case "M":
                  return m + 1;
                case "MM":
                  return s.s(m + 1, 2, "0");
                case "MMM":
                  return C(l.monthsShort, m, y, 3);
                case "MMMM":
                  return C(y, m);
                case "D":
                  return a.$D;
                case "DD":
                  return s.s(a.$D, 2, "0");
                case "d":
                  return String(a.$W);
                case "dd":
                  return C(l.weekdaysMin, a.$W, b, 2);
                case "ddd":
                  return C(l.weekdaysShort, a.$W, b, 3);
                case "dddd":
                  return b[a.$W];
                case "H":
                  return String(c);
                case "HH":
                  return s.s(c, 2, "0");
                case "h":
                  return T(1);
                case "hh":
                  return T(2);
                case "a":
                  return S(c, d, !0);
                case "A":
                  return S(c, d, !1);
                case "m":
                  return String(d);
                case "mm":
                  return s.s(d, 2, "0");
                case "s":
                  return String(a.$s);
                case "ss":
                  return s.s(a.$s, 2, "0");
                case "SSS":
                  return s.s(a.$ms, 3, "0");
                case "Z":
                  return r;
              }
              return null;
            }(f) || r.replace(":", "");
          });
        }, o.utcOffset = function() {
          return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
        }, o.diff = function(t, a, l) {
          var i, r = this, c = s.p(a), d = u(t), m = (d.utcOffset() - this.utcOffset()) * v, b = this - d, y = function() {
            return s.m(r, d);
          };
          switch (c) {
            case w:
              i = y() / 12;
              break;
            case P:
              i = y();
              break;
            case W:
              i = y() / 3;
              break;
            case O:
              i = (b - m) / 6048e5;
              break;
            case g:
              i = (b - m) / 864e5;
              break;
            case E:
              i = b / j;
              break;
            case M:
              i = b / v;
              break;
            case h:
              i = b / L;
              break;
            default:
              i = b;
          }
          return l ? i : s.a(i);
        }, o.daysInMonth = function() {
          return this.endOf(P).$D;
        }, o.$locale = function() {
          return $[this.$L];
        }, o.locale = function(t, a) {
          if (!t)
            return this.$L;
          var l = this.clone(), i = _(t, a, !0);
          return i && (l.$L = i), l;
        }, o.clone = function() {
          return s.w(this.$d, this);
        }, o.toDate = function() {
          return new Date(this.valueOf());
        }, o.toJSON = function() {
          return this.isValid() ? this.toISOString() : null;
        }, o.toISOString = function() {
          return this.$d.toISOString();
        }, o.toString = function() {
          return this.$d.toUTCString();
        }, p;
      }(), J = V.prototype;
      return u.prototype = J, [["$ms", x], ["$s", h], ["$m", M], ["$H", E], ["$W", g], ["$M", P], ["$y", w], ["$D", D]].forEach(function(p) {
        J[p[1]] = function(o) {
          return this.$g(o, p[0], p[1]);
        };
      }), u.extend = function(p, o) {
        return p.$i || (p(o, V, u), p.$i = !0), u;
      }, u.locale = _, u.isDayjs = H, u.unix = function(p) {
        return u(1e3 * p);
      }, u.en = $[R], u.Ls = $, u.p = {}, u;
    });
  }(A)), A.exports;
}
var ae = oe();
const ne = /* @__PURE__ */ te(ae), pe = {
  component: async () => (await import("ant-design-vue")).Input,
  defaultSchema: {
    label: "输入框",
    type: "input",
    field: "input",
    icon: "epic-icon-write",
    input: !0,
    componentProps: {
      bordered: !0,
      placeholder: "请输入"
    }
  },
  groupName: "表单",
  config: {
    attribute: [
      {
        label: "字段名",
        type: "input",
        field: "field"
      },
      {
        label: "标题",
        type: "input",
        field: "label"
      },
      {
        label: "占位内容",
        type: "input",
        field: "componentProps.placeholder"
      },
      {
        label: "默认值",
        type: "input",
        field: "componentProps.defaultValue",
        componentProps: {
          placeholder: "请输入"
        }
      },
      {
        label: "输入类型",
        type: "select",
        componentProps: {
          placeholder: "请选择",
          allowClear: !0,
          options: [
            {
              label: "text",
              value: "text"
            },
            {
              label: "number",
              value: "number"
            },
            {
              label: "password",
              value: "password"
            }
          ]
        },
        field: "componentProps.type"
      },
      {
        label: "尺寸",
        type: "select",
        componentProps: {
          placeholder: "请选择",
          allowClear: !0,
          options: [
            {
              label: "large",
              value: "large"
            },
            {
              label: "middle",
              value: "middle"
            },
            {
              label: "small",
              value: "small"
            }
          ]
        },
        field: "componentProps.size"
      },
      {
        label: "可清空",
        type: "switch",
        field: "componentProps.allowClear"
      },
      {
        label: "有边框",
        type: "switch",
        field: "componentProps.bordered"
      },
      {
        label: "最大输入长度",
        type: "number",
        field: "componentProps.maxlength",
        componentProps: {
          placeholder: "请输入"
        }
      },
      {
        label: "统计字数",
        type: "switch",
        field: "componentProps.showCount"
      },
      {
        label: "禁用",
        type: "switch",
        field: "componentProps.disabled"
      },
      {
        label: "隐藏",
        type: "switch",
        field: "componentProps.hidden"
      },
      {
        label: "表单校验",
        type: "ERuleEditor",
        layout: "vertical",
        field: "rules",
        describe: "校验规则需要配合表单使用"
      }
    ],
    event: [
      {
        type: "input",
        describe: "输入值"
      },
      {
        type: "change",
        describe: "值修改"
      },
      {
        type: "pressEnter",
        describe: "按下回车的回调"
      },
      {
        type: "focus",
        describe: "获取焦点"
      },
      {
        type: "blur",
        describe: "失去焦点"
      }
    ],
    action: [
      {
        type: "focus",
        describe: "使 input 获取焦点"
      },
      {
        type: "blur",
        describe: "使 input 失去焦点"
      },
      {
        type: "select",
        describe: "选中 input 中的文字"
      }
    ]
  },
  bindModel: "value"
}, ie = {
  component: async () => (await import("ant-design-vue")).Textarea,
  defaultSchema: {
    label: "文本域",
    type: "textarea",
    field: "textarea",
    icon: "epic-icon-edit",
    input: !0,
    componentProps: {
      placeholder: "请输入"
    }
  },
  groupName: "表单",
  config: {
    attribute: [
      {
        label: "字段名",
        type: "input",
        field: "field"
      },
      {
        label: "标题",
        type: "input",
        field: "label"
      },
      {
        label: "默认值",
        type: "textarea",
        field: "componentProps.defaultValue",
        componentProps: {
          placeholder: "请输入"
        }
      },
      {
        label: "占位内容",
        type: "input",
        field: "componentProps.placeholder"
      },
      {
        label: "最小行数",
        type: "number",
        field: "componentProps.autoSize.minRows",
        componentProps: {
          placeholder: "请输入"
        }
      },
      {
        label: "最大行数",
        type: "number",
        field: "componentProps.autoSize.maxRows",
        componentProps: {
          placeholder: "请输入"
        }
      },
      {
        label: "有边框",
        type: "switch",
        field: "componentProps.bordered"
      },
      {
        label: "尺寸",
        type: "select",
        componentProps: {
          placeholder: "请选择",
          allowClear: !0,
          options: [
            {
              label: "large",
              value: "large"
            },
            {
              label: "middle",
              value: "middle"
            },
            {
              label: "small",
              value: "small"
            }
          ]
        },
        field: "componentProps.size"
      },
      {
        label: "最大输入长度",
        type: "number",
        field: "componentProps.maxLength",
        componentProps: {
          placeholder: "请输入"
        }
      },
      {
        label: "统计字数",
        type: "switch",
        field: "componentProps.showCount"
      },
      {
        label: "可清除",
        type: "switch",
        field: "componentProps.allowClear"
      },
      {
        label: "禁用",
        type: "switch",
        field: "componentProps.disabled"
      },
      {
        label: "隐藏",
        type: "switch",
        field: "componentProps.hidden"
      },
      {
        label: "表单校验",
        type: "ERuleEditor",
        layout: "vertical",
        field: "rules",
        describe: "校验规则需要配合表单使用"
      }
    ],
    event: [
      {
        type: "input",
        describe: "输入值"
      },
      {
        type: "change",
        describe: "值修改"
      },
      {
        type: "pressEnter",
        describe: "按下回车的回调"
      },
      {
        type: "focus",
        describe: "获取焦点"
      },
      {
        type: "blur",
        describe: "失去焦点"
      }
    ],
    action: [
      {
        type: "focus",
        describe: "使 input 获取焦点"
      },
      {
        type: "blur",
        describe: "使 input 失去焦点"
      },
      {
        type: "select",
        describe: "选中 input 中的文字"
      }
    ]
  },
  bindModel: "value"
}, re = {
  component: async () => (await import("ant-design-vue")).InputNumber,
  defaultSchema: {
    label: "数字输入框",
    type: "number",
    icon: "epic-icon-number",
    field: "number",
    input: !0,
    componentProps: {
      style: { width: "100%" },
      placeholder: "请输入"
    }
  },
  groupName: "表单",
  config: {
    attribute: [
      {
        label: "字段名",
        type: "input",
        field: "field"
      },
      {
        label: "文字",
        type: "input",
        field: "label"
      },
      {
        label: "默认值",
        type: "input",
        field: "componentProps.defaultValue",
        componentProps: {
          placeholder: "请输入",
          size: "middle"
        }
      },
      {
        label: "占位内容",
        type: "input",
        field: "componentProps.placeholder"
      },
      {
        label: "尺寸",
        type: "select",
        componentProps: {
          placeholder: "请选择",
          allowClear: !0,
          options: [
            {
              label: "large",
              value: "large"
            },
            {
              label: "middle",
              value: "middle"
            },
            {
              label: "small",
              value: "small"
            }
          ]
        },
        field: "componentProps.size"
      },
      {
        label: "键盘快捷行为",
        type: "switch",
        field: "componentProps.keyboard"
      },
      {
        label: "最大值",
        type: "number",
        field: "componentProps.max",
        componentProps: {
          placeholder: "请输入"
        }
      },
      {
        label: "最小值",
        type: "number",
        field: "componentProps.min",
        componentProps: {
          placeholder: "请输入"
        }
      },
      {
        label: "精度",
        type: "number",
        field: "componentProps.precision",
        componentProps: {
          placeholder: "请输入"
        }
      },
      {
        label: "步长",
        type: "number",
        field: "componentProps.step",
        componentProps: {
          placeholder: "请输入"
        }
      },
      {
        label: "字符模式",
        type: "switch",
        field: "componentProps.stringMode"
      },
      {
        label: "有边框",
        type: "switch",
        field: "componentProps.bordered"
      },
      {
        label: "可清空",
        type: "switch",
        field: "componentProps.allowClear"
      },
      {
        label: "禁用",
        type: "switch",
        field: "componentProps.disabled"
      },
      {
        label: "隐藏",
        type: "switch",
        field: "componentProps.hidden"
      },
      {
        label: "表单校验",
        type: "ERuleEditor",
        layout: "vertical",
        field: "rules",
        describe: "校验规则需要配合表单使用"
      }
    ],
    event: [
      {
        type: "input",
        describe: "输入值"
      },
      {
        type: "change",
        describe: "值修改"
      },
      {
        type: "pressEnter",
        describe: "按下回车的回调"
      },
      {
        type: "focus",
        describe: "获取焦点"
      },
      {
        type: "blur",
        describe: "失去焦点"
      }
    ],
    action: [
      {
        type: "focus",
        describe: "使 input 获取焦点"
      },
      {
        type: "blur",
        describe: "使 input 失去焦点"
      },
      {
        type: "select",
        describe: "选中 input 中的文字"
      }
    ]
  },
  bindModel: "value"
}, se = {
  component: async () => (await import("ant-design-vue")).InputPassword,
  defaultSchema: {
    label: "密码输入框",
    type: "password",
    icon: "epic-icon-mima",
    field: "password",
    input: !0,
    componentProps: {
      placeholder: "请输入",
      bordered: !0
    }
  },
  groupName: "表单",
  config: {
    attribute: [
      {
        label: "字段名",
        type: "input",
        field: "field"
      },
      {
        label: "文字",
        type: "input",
        field: "label"
      },
      {
        label: "占位内容",
        type: "input",
        field: "componentProps.placeholder"
      },
      {
        label: "尺寸",
        type: "select",
        componentProps: {
          placeholder: "请选择",
          allowClear: !0,
          options: [
            {
              label: "large",
              value: "large"
            },
            {
              label: "middle",
              value: "middle"
            },
            {
              label: "small",
              value: "small"
            }
          ]
        },
        field: "componentProps.size"
      },
      {
        label: "有边框",
        type: "switch",
        field: "componentProps.bordered"
      },
      {
        label: "最大输入长度",
        type: "number",
        field: "componentProps.maxLength",
        componentProps: {
          placeholder: "请输入"
        }
      },
      {
        label: "统计字数",
        type: "switch",
        field: "componentProps.showCount"
      },
      {
        label: "可清空",
        type: "switch",
        field: "componentProps.allowClear"
      },
      {
        label: "禁用",
        type: "switch",
        field: "componentProps.disabled"
      },
      {
        label: "隐藏",
        type: "switch",
        field: "componentProps.hidden"
      },
      {
        label: "表单校验",
        type: "ERuleEditor",
        layout: "vertical",
        field: "rules",
        describe: "校验规则需要配合表单使用"
      }
    ],
    event: [
      {
        type: "input",
        describe: "输入值"
      },
      {
        type: "change",
        describe: "值修改"
      },
      {
        type: "pressEnter",
        describe: "按下回车的回调"
      },
      {
        type: "focus",
        describe: "获取焦点"
      },
      {
        type: "blur",
        describe: "失去焦点"
      }
    ],
    action: [
      {
        type: "focus",
        describe: "使 input 获取焦点"
      },
      {
        type: "blur",
        describe: "使 input 失去焦点"
      },
      {
        type: "select",
        describe: "选中 input 中的文字"
      }
    ]
  },
  bindModel: "value"
}, ce = {
  component: async () => (await import("ant-design-vue")).RadioGroup,
  defaultSchema: {
    label: "单选框",
    type: "radio",
    icon: "epic-icon-danxuan-cuxiantiao",
    field: "radio",
    input: !0,
    componentProps: {
      options: [
        {
          label: "选项1",
          value: "选项1"
        },
        {
          label: "选项2",
          value: "选项2"
        }
      ],
      optionType: "default"
    }
  },
  groupName: "表单",
  config: {
    attribute: [
      {
        label: "字段名",
        type: "input",
        field: "field"
      },
      {
        label: "默认值",
        type: "radio",
        field: "componentProps.defaultValue"
      },
      {
        label: "文字",
        type: "input",
        field: "label"
      },
      {
        label: "尺寸",
        type: "select",
        componentProps: {
          placeholder: "请选择",
          allowClear: !0,
          options: [
            {
              label: "large",
              value: "large"
            },
            {
              label: "middle",
              value: "middle"
            },
            {
              label: "small",
              value: "small"
            }
          ]
        },
        field: "componentProps.size"
      },
      {
        label: "option类型",
        type: "select",
        componentProps: {
          options: [
            {
              label: "default",
              value: "default"
            },
            {
              label: "button",
              value: "button"
            }
          ]
        },
        field: "componentProps.optionType"
      },
      {
        label: "禁用",
        type: "switch",
        field: "componentProps.disabled"
      },
      {
        label: "隐藏",
        type: "switch",
        field: "componentProps.hidden"
      },
      {
        label: "选项管理",
        type: "EOptionsEditor",
        layout: "vertical",
        field: "componentProps.options"
      },
      {
        label: "表单校验",
        type: "ERuleEditor",
        layout: "vertical",
        field: "rules",
        describe: "校验规则需要配合表单使用"
      }
    ],
    event: [
      {
        type: "change",
        describe: "值变化时"
      }
    ]
  },
  bindModel: "value"
}, de = {
  component: async () => (await import("ant-design-vue")).CheckboxGroup,
  defaultSchema: {
    label: "多选框",
    type: "checkbox",
    icon: "epic-icon-duoxuan1",
    field: "checkbox",
    input: !0,
    componentProps: {
      options: [
        {
          label: "选项1",
          value: "选项1"
        },
        {
          label: "选项2",
          value: "选项2"
        }
      ]
    }
  },
  groupName: "表单",
  config: {
    attribute: [
      {
        label: "字段名",
        type: "input",
        field: "field"
      },
      {
        label: "默认值",
        type: "checkbox",
        field: "componentProps.defaultValue"
      },
      {
        label: "文字",
        type: "input",
        field: "label"
      },
      {
        label: "尺寸",
        type: "select",
        componentProps: {
          placeholder: "请选择",
          allowClear: !0,
          options: [
            {
              label: "large",
              value: "large"
            },
            {
              label: "middle",
              value: "middle"
            },
            {
              label: "small",
              value: "small"
            }
          ]
        },
        field: "componentProps.size"
      },
      {
        label: "禁用",
        type: "switch",
        field: "componentProps.disabled"
      },
      {
        label: "隐藏",
        type: "switch",
        field: "componentProps.hidden"
      },
      {
        label: "选项管理",
        type: "EOptionsEditor",
        layout: "vertical",
        field: "componentProps.options"
      },
      {
        label: "表单校验",
        type: "ERuleEditor",
        layout: "vertical",
        field: "rules",
        describe: "校验规则需要配合表单使用"
      }
    ],
    event: [
      {
        type: "change",
        describe: "值变化时"
      }
    ]
  },
  bindModel: "value"
}, ue = {
  component: async () => (await import("ant-design-vue")).Select,
  defaultSchema: {
    label: "选择框",
    type: "select",
    icon: "epic-icon-xiala",
    field: "select",
    input: !0,
    componentProps: {
      options: [
        {
          label: "选项1",
          value: "选项1"
        },
        {
          label: "选项2",
          value: "选项2"
        }
      ],
      listHeight: 256,
      placeholder: "请选择",
      placement: "bottomLeft"
    }
  },
  groupName: "表单",
  config: {
    attribute: [
      {
        label: "字段名",
        type: "input",
        field: "field"
      },
      {
        label: "文字",
        type: "input",
        field: "label"
      },
      {
        label: "占位内容",
        type: "input",
        field: "componentProps.placeholder",
        componentProps: {
          placeholder: "请输入"
        }
      },
      {
        label: "默认值",
        type: "select",
        field: "componentProps.defaultValue"
      },
      {
        label: "尺寸",
        type: "select",
        componentProps: {
          placeholder: "请选择",
          allowClear: !0,
          options: [
            {
              label: "large",
              value: "large"
            },
            {
              label: "middle",
              value: "middle"
            },
            {
              label: "small",
              value: "small"
            }
          ]
        },
        field: "componentProps.size"
      },
      {
        label: "label包装到value中",
        type: "switch",
        field: "componentProps.labelInValue"
      },
      {
        label: "设置弹窗高度",
        type: "number",
        field: "componentProps.listHeight"
      },
      {
        label: "模式",
        type: "select",
        componentProps: {
          options: [
            {
              label: "multiple",
              value: "multiple"
            },
            {
              label: "tags",
              value: "tags"
            }
          ],
          placeholder: "请选择",
          allowClear: !0
        },
        field: "componentProps.mode"
      },
      {
        label: "可搜索",
        type: "switch",
        field: "componentProps.showSearch"
      },
      {
        label: "选中选项后清空搜索框",
        type: "switch",
        field: "componentProps.autoClearSearchValue",
        show: ({ values: n }) => n.componentProps.mode && n.componentProps.showSearch
      },
      {
        label: "最大tag文本长度",
        type: "number",
        field: "componentProps.maxTagTextLength",
        show: ({ values: n }) => n.componentProps.mode
      },
      {
        label: "最大tag显示数",
        type: "number",
        field: "componentProps.maxTagCount",
        show: ({ values: n }) => n.componentProps.mode
      },
      {
        label: "弹出框位置",
        type: "select",
        componentProps: {
          options: [
            {
              label: "bottomLeft",
              value: "bottomLeft"
            },
            {
              label: "bottomRight",
              value: "bottomRight"
            },
            {
              label: "topLeft",
              value: "topLeft"
            },
            {
              label: "topRight",
              value: "topRight"
            }
          ]
        },
        field: "componentProps.placement"
      },
      {
        label: "可清空",
        type: "switch",
        field: "componentProps.allowClear"
      },
      {
        label: "禁用",
        type: "switch",
        field: "componentProps.disabled"
      },
      {
        label: "隐藏",
        type: "switch",
        field: "componentProps.hidden"
      },
      {
        label: "选项管理",
        type: "EOptionsEditor",
        layout: "vertical",
        field: "componentProps.options"
      },
      {
        label: "表单校验",
        type: "ERuleEditor",
        layout: "vertical",
        field: "rules",
        describe: "校验规则需要配合表单使用"
      }
    ],
    event: [
      {
        type: "change",
        describe: "值修改"
      },
      {
        type: "focus",
        describe: "获取焦点"
      },
      {
        type: "blur",
        describe: "失去焦点"
      }
    ],
    action: [
      {
        type: "focus",
        describe: "使 input 获取焦点"
      },
      {
        type: "blur",
        describe: "使 input 失去焦点"
      },
      {
        type: "select",
        describe: "选中 input 中的文字"
      }
    ]
  },
  bindModel: "value"
}, me = {
  component: async () => (await import("ant-design-vue")).Slider,
  defaultSchema: {
    label: "滑块",
    type: "slider",
    icon: "epic-icon-menu",
    field: "slider",
    input: !0
  },
  groupName: "表单",
  config: {
    attribute: [
      {
        label: "字段名",
        type: "input",
        field: "field"
      },
      {
        label: "文字",
        type: "input",
        field: "label"
      },
      {
        label: "默认值",
        type: "slider",
        field: "componentProps.defaultValue"
      },
      {
        label: "尺寸",
        type: "select",
        componentProps: {
          placeholder: "请选择",
          allowClear: !0,
          options: [
            {
              label: "large",
              value: "large"
            },
            {
              label: "middle",
              value: "middle"
            },
            {
              label: "small",
              value: "small"
            }
          ]
        },
        field: "componentProps.size"
      },
      // {
      //   label: "键盘可控",
      //   type: "switch",
      //   field: "componentProps.keyboard",
      // },
      // {
      //   label: "范围选择",
      //   type: "switch",
      //   field: "componentProps.range",
      //   changeSync: true,
      //   onChange: ({ value, values }) => {
      //     if (value) {
      //       values.componentProps.defaultValue = [0, 100];
      //     } else {
      //       values.componentProps.defaultValue = 0;
      //     }
      //   },
      // },
      {
        label: "倒转轨道",
        type: "switch",
        field: "componentProps.reverse"
      },
      {
        label: "步长",
        type: "number",
        field: "componentProps.step",
        componentProps: {
          placeholder: "请输入"
        }
      },
      {
        label: "最小值",
        type: "number",
        field: "componentProps.min",
        componentProps: {
          placeholder: "请输入"
        }
      },
      {
        label: "最大值",
        type: "number",
        field: "componentProps.max",
        componentProps: {
          placeholder: "请输入"
        }
      },
      {
        label: "垂直模式",
        type: "switch",
        field: "componentProps.vertical"
      },
      {
        label: "禁用",
        type: "switch",
        field: "componentProps.disabled"
      },
      {
        label: "隐藏",
        type: "switch",
        field: "componentProps.hidden"
      },
      {
        label: "表单校验",
        type: "ERuleEditor",
        layout: "vertical",
        field: "rules",
        describe: "校验规则需要配合表单使用"
      }
    ],
    event: [
      {
        type: "afterChange",
        describe: "与mouseup触发时机一致"
      },
      {
        type: "change",
        describe: "拖拽结束改变值时"
      }
    ]
  },
  bindModel: "value"
}, be = {
  component: async () => (await import("ant-design-vue")).TimePicker,
  defaultSchema: {
    label: "时间选择器",
    type: "time",
    icon: "epic-icon-time",
    field: "time",
    input: !0,
    componentProps: {
      valueFormat: "HH:mm:ss",
      size: "middle",
      placement: "bottomLeft",
      placeholder: "请输入"
    }
  },
  groupName: "表单",
  config: {
    attribute: [
      {
        label: "字段名",
        type: "input",
        field: "field"
      },
      {
        label: "文字",
        type: "input",
        field: "label"
      },
      {
        label: "默认值",
        type: "time",
        field: "componentProps.defaultValue"
      },
      {
        label: "占位内容",
        type: "input",
        field: "componentProps.placeholder"
      },
      {
        label: "格式",
        type: "input",
        field: "componentProps.valueFormat",
        onChange: (n) => {
          n.values.componentProps.format = n.value;
        }
      },
      {
        label: "尺寸",
        type: "select",
        defaultValue: "default",
        componentProps: {
          options: [
            {
              label: "large",
              value: "large"
            },
            {
              label: "middle",
              value: "middle"
            },
            {
              label: "small",
              value: "small"
            }
          ]
        },
        field: "componentProps.size"
      },
      {
        label: "有边框",
        type: "switch",
        field: "componentProps.bordered"
      },
      {
        label: "尺寸",
        type: "select",
        componentProps: {
          placeholder: "请选择",
          allowClear: !0,
          options: [
            {
              label: "large",
              value: "large"
            },
            {
              label: "middle",
              value: "middle"
            },
            {
              label: "small",
              value: "small"
            }
          ]
        },
        field: "componentProps.size"
      },
      {
        label: "小时选项间隔",
        type: "number",
        field: "componentProps.hourStep",
        componentProps: {
          placeholder: "请输入"
        }
      },
      {
        label: "分钟选项间隔",
        type: "number",
        field: "componentProps.minuteStep",
        componentProps: {
          placeholder: "请输入"
        }
      },
      {
        label: "秒选项间隔",
        type: "number",
        field: "componentProps.secondStep",
        componentProps: {
          placeholder: "请输入"
        }
      },
      {
        label: "弹出框位置",
        type: "select",
        componentProps: {
          options: [
            {
              label: "bottomLeft",
              value: "bottomLeft"
            },
            {
              label: "bottomRight",
              value: "bottomRight"
            },
            {
              label: "topLeft",
              value: "topLeft"
            },
            {
              label: "topRight",
              value: "topRight"
            }
          ]
        },
        field: "componentProps.placement"
      },
      {
        label: "可清空",
        type: "switch",
        field: "componentProps.allowClear"
      },
      {
        label: "禁用",
        type: "switch",
        field: "componentProps.disabled"
      },
      {
        label: "隐藏",
        type: "switch",
        field: "componentProps.hidden"
      },
      {
        label: "表单校验",
        type: "ERuleEditor",
        layout: "vertical",
        field: "rules",
        describe: "校验规则需要配合表单使用"
      }
    ],
    event: [
      {
        type: "change",
        describe: "值变化时"
      }
    ]
  },
  bindModel: "value"
}, fe = {
  component: () => import("./datePicker-68dec37f.js"),
  defaultSchema: {
    label: "日期选择器",
    type: "date",
    icon: "epic-icon-calendar",
    field: "date",
    input: !0,
    componentProps: {
      valueFormat: "YYYY-MM-DD",
      type: "date",
      placeholder: "请选择"
    }
  },
  groupName: "表单",
  config: {
    attribute: [
      {
        label: "字段名",
        type: "input",
        field: "field"
      },
      {
        label: "文字",
        type: "input",
        field: "label"
      },
      {
        label: "默认值",
        type: "date",
        field: "componentProps.defaultValue"
      },
      {
        label: "尺寸",
        type: "select",
        componentProps: {
          placeholder: "请选择",
          allowClear: !0,
          options: [
            {
              label: "large",
              value: "large"
            },
            {
              label: "middle",
              value: "middle"
            },
            {
              label: "small",
              value: "small"
            }
          ]
        },
        field: "componentProps.size"
      },
      {
        label: "弹出框位置",
        type: "select",
        componentProps: {
          options: [
            {
              label: "bottomLeft",
              value: "bottomLeft"
            },
            {
              label: "bottomRight",
              value: "bottomRight"
            },
            {
              label: "topLeft",
              value: "topLeft"
            },
            {
              label: "topRight",
              value: "topRight"
            }
          ],
          placeholder: "请选择"
        },
        field: "componentProps.placement"
      },
      {
        label: "占位内容",
        type: "input",
        field: "componentProps.placeholder",
        componentProps: {
          placeholder: "请输入"
        },
        show: ({ values: n }) => n.componentProps.type !== "daterange"
      },
      {
        label: "开始占位符",
        type: "input",
        field: "componentProps.placeholder.0",
        show: ({ values: n }) => n.componentProps.type === "daterange"
      },
      {
        label: "结束占位符",
        type: "input",
        field: "componentProps.placeholder.1",
        show: ({ values: n }) => n.componentProps.type === "daterange"
      },
      {
        label: "格式",
        type: "input",
        field: "componentProps.valueFormat",
        onChange: (n) => {
          n.values.componentProps.format = n.value;
        }
      },
      {
        label: "显示类型",
        type: "select",
        field: "componentProps.type",
        componentProps: {
          options: [
            {
              label: "日期",
              value: "date"
            },
            {
              label: "月份",
              value: "month"
            },
            {
              label: "日期范围",
              value: "daterange"
            }
          ],
          placeholder: "请选择"
        },
        onChange: ({ value: n, values: e }) => {
          n === "daterange" ? e.componentProps.placeholder = ["开始日期", "结束日期"] : e.componentProps.placeholder = "请输入";
        }
      },
      {
        label: "边框",
        type: "radio",
        componentProps: {
          options: [
            {
              label: "有",
              value: void 0
            },
            {
              label: "无",
              value: !1
            }
          ],
          placeholder: "请选择"
        },
        field: "componentProps.bordered"
      },
      {
        label: "增加时间选择",
        type: "switch",
        field: "componentProps.showTime"
      },
      {
        label: "可清空",
        type: "switch",
        field: "componentProps.allowClear"
      },
      {
        label: "禁用",
        type: "switch",
        field: "componentProps.disabled"
      },
      {
        label: "隐藏",
        type: "switch",
        field: "componentProps.hidden"
      },
      {
        label: "表单校验",
        type: "ERuleEditor",
        layout: "vertical",
        field: "rules",
        describe: "校验规则需要配合表单使用"
      }
    ],
    event: [
      {
        type: "change",
        describe: "值变化时"
      }
    ]
  },
  bindModel: "modelValue"
}, he = {
  component: async () => (await import("ant-design-vue")).Cascader,
  defaultSchema: {
    label: "级联选择器",
    type: "cascader",
    field: "cascader",
    icon: "epic-icon-guanlian",
    input: !0,
    componentProps: {
      options: [
        {
          label: "选项1",
          value: "选项1"
        },
        {
          label: "选项2",
          value: "选项2"
        }
      ],
      placeholder: "请选择",
      placement: "bottomLeft"
    }
  },
  groupName: "表单",
  config: {
    attribute: [
      {
        label: "字段名",
        type: "input",
        field: "field"
      },
      {
        label: "标题",
        type: "input",
        field: "label"
      },
      {
        label: "默认值",
        type: "input",
        field: "componentProps.defaultValue"
      },
      {
        label: "占位内容",
        type: "input",
        field: "componentProps.placeholder"
      },
      {
        label: "尺寸",
        type: "select",
        componentProps: {
          placeholder: "请选择",
          allowClear: !0,
          options: [
            {
              label: "large",
              value: "large"
            },
            {
              label: "middle",
              value: "middle"
            },
            {
              label: "small",
              value: "small"
            }
          ]
        },
        field: "componentProps.size"
      },
      {
        label: "多选",
        type: "switch",
        field: "componentProps.multiple"
      },
      {
        label: "可搜索",
        type: "switch",
        field: "componentProps.showSearch"
      },
      {
        label: "最大tag文本长度",
        type: "number",
        field: "componentProps.maxTagTextLength",
        componentProps: {
          placeholder: "请输入"
        },
        show: ({ values: n }) => n.componentProps.multiple
      },
      {
        label: "最大tag显示数",
        type: "number",
        field: "componentProps.maxTagCount",
        componentProps: {
          placeholder: "请输入"
        },
        show: ({ values: n }) => n.componentProps.multiple
      },
      {
        label: "弹出框位置",
        type: "select",
        componentProps: {
          options: [
            {
              label: "bottomLeft",
              value: "bottomLeft"
            },
            {
              label: "bottomRight",
              value: "bottomRight"
            },
            {
              label: "topLeft",
              value: "topLeft"
            },
            {
              label: "topRight",
              value: "topRight"
            }
          ]
        },
        field: "componentProps.placement"
      },
      {
        label: "可清空",
        type: "switch",
        field: "componentProps.allowClear"
      },
      {
        label: "禁用",
        type: "switch",
        field: "componentProps.disabled"
      },
      {
        label: "隐藏",
        type: "switch",
        field: "componentProps.hidden"
      },
      {
        label: "选项管理",
        type: "EOptionsEditor",
        layout: "vertical",
        field: "componentProps.options",
        componentProps: {
          tree: !0
        }
      },
      {
        label: "表单校验",
        type: "ERuleEditor",
        layout: "vertical",
        field: "rules",
        describe: "校验规则需要配合表单使用"
      }
    ],
    event: [
      {
        type: "change",
        describe: "值变化时"
      }
    ]
  },
  bindModel: "value"
}, ye = {
  component: async () => (await import("ant-design-vue")).Switch,
  defaultSchema: {
    label: "开关",
    type: "switch",
    icon: "epic-icon-kaiguan3",
    field: "switch",
    input: !0,
    componentProps: {}
  },
  groupName: "表单",
  config: {
    attribute: [
      {
        label: "字段名",
        type: "input",
        field: "field"
      },
      {
        label: "文字",
        type: "input",
        field: "label"
      },
      {
        label: "默认值",
        type: "switch",
        field: "componentProps.defaultValue"
      },
      {
        label: "选中时内容",
        type: "input",
        field: "componentProps.checkedChildren",
        componentProps: {
          placeholder: "请输入"
        }
      },
      {
        label: "非选中时内容",
        type: "input",
        field: "componentProps.unCheckedChildren",
        componentProps: {
          placeholder: "请输入"
        }
      },
      {
        label: "尺寸",
        type: "select",
        componentProps: {
          placeholder: "请选择",
          allowClear: !0,
          options: [
            {
              label: "default",
              value: "default"
            },
            {
              label: "small",
              value: "small"
            }
          ]
        },
        field: "componentProps.size"
      },
      {
        label: "禁用",
        type: "switch",
        field: "componentProps.disabled"
      },
      {
        label: "隐藏",
        type: "switch",
        field: "componentProps.hidden"
      },
      {
        label: "表单校验",
        type: "ERuleEditor",
        layout: "vertical",
        field: "rules",
        describe: "校验规则需要配合表单使用"
      }
    ],
    event: [
      {
        type: "change",
        describe: "值变化时"
      }
    ]
  },
  bindModel: "checked"
}, Pe = {
  component: () => import("./uploadImage-7ad6d746.js"),
  defaultSchema: {
    label: "上传图片",
    type: "upload-image",
    icon: "epic-icon-image",
    field: "uploadImage",
    input: !0,
    componentProps: {
      action: "https://epic.kcz66.com/static/upload-img.json"
    }
  },
  groupName: "表单",
  config: {
    attribute: [
      {
        label: "字段名",
        type: "input",
        field: "field"
      },
      {
        label: "文字",
        type: "input",
        field: "label"
      },
      {
        label: "请求地址",
        type: "input",
        field: "componentProps.action"
      },
      {
        label: "多选",
        type: "switch",
        field: "componentProps.multiple"
      },
      {
        label: "允许上传最大数量",
        type: "number",
        field: "componentProps.maxCount",
        componentProps: {
          min: 0,
          placeholder: "请输入"
        }
      },
      {
        label: "禁用",
        type: "switch",
        field: "componentProps.disabled"
      },
      {
        label: "隐藏",
        type: "switch",
        field: "componentProps.hidden"
      },
      {
        label: "表单校验",
        type: "ERuleEditor",
        layout: "vertical",
        field: "rules",
        describe: "校验规则需要配合表单使用"
      }
    ]
  },
  bindModel: "modelValue"
}, ve = {
  component: () => import("./uploadFile-6a46689d.js"),
  defaultSchema: {
    label: "上传文件",
    type: "upload-file",
    icon: "epic-icon-upload",
    field: "uploadFile",
    input: !0,
    componentProps: {
      action: "https://epic.kcz66.com/static/upload-img.json"
    }
  },
  groupName: "表单",
  config: {
    attribute: [
      {
        label: "字段名",
        type: "input",
        field: "field"
      },
      {
        label: "文字",
        type: "input",
        field: "label"
      },
      {
        label: "请求地址",
        type: "input",
        field: "componentProps.action"
      },
      {
        label: "多选",
        type: "switch",
        field: "componentProps.multiple"
      },
      {
        label: "允许上传最大数量",
        type: "number",
        field: "componentProps.maxCount",
        componentProps: {
          min: 0,
          placeholder: "请输入"
        }
      },
      {
        label: "禁用",
        type: "switch",
        field: "componentProps.disabled"
      },
      {
        label: "隐藏",
        type: "switch",
        field: "componentProps.hidden"
      },
      {
        label: "表单校验",
        type: "ERuleEditor",
        layout: "vertical",
        field: "rules",
        describe: "校验规则需要配合表单使用"
      }
    ]
  },
  bindModel: "modelValue"
}, ge = {
  component: () => import("./card-c61a583c.js"),
  defaultSchema: {
    label: "卡片布局",
    type: "card",
    icon: "epic-icon-qiapian",
    children: []
  },
  groupName: "布局",
  config: {
    attribute: [
      {
        label: "标题",
        type: "input",
        field: "label"
      },
      {
        label: "隐藏",
        type: "switch",
        field: "componentProps.hidden"
      }
    ]
  }
}, we = {
  component: () => import("./row-54672f62.js"),
  defaultSchema: {
    label: "栅格布局",
    type: "row",
    icon: "epic-icon-zhage",
    childImmovable: !0,
    children: [
      {
        type: "col",
        children: [],
        componentProps: {
          span: 12
        }
      },
      {
        type: "col",
        children: [],
        componentProps: {
          span: 12
        }
      }
    ]
  },
  groupName: "布局",
  config: {
    attribute: [
      {
        label: "垂直对齐方式",
        type: "select",
        componentProps: {
          style: { width: "100%" },
          options: [
            {
              label: "top",
              value: "top"
            },
            {
              label: "middle",
              value: "middle"
            },
            {
              label: "bottom",
              value: "bottom"
            }
          ],
          placeholder: "请选择"
        },
        field: "componentProps.align"
      },
      {
        label: "水平排列方式",
        type: "select",
        componentProps: {
          style: { width: "100%" },
          options: [
            {
              label: "start",
              value: "start"
            },
            {
              label: "end",
              value: "end"
            },
            {
              label: "center",
              value: "center"
            },
            {
              label: "space-around",
              value: "space-around"
            },
            {
              label: "space-between",
              value: "space-between"
            }
          ],
          placeholder: "请选择"
        },
        field: "componentProps.justify"
      },
      {
        label: "栅格间距",
        type: "input",
        field: "componentProps.gutter",
        componentProps: {
          placeholder: "请输入"
        }
      },
      {
        label: "列编辑",
        type: "EColEditor",
        field: "children"
      },
      {
        label: "隐藏",
        type: "switch",
        field: "componentProps.hidden"
      }
    ]
  }
}, ke = {
  component: () => import("./col-a746e6c3.js"),
  defaultSchema: {
    label: "栅格布局-列",
    type: "col",
    icon: "epic-icon-xiala",
    children: [],
    componentProps: {
      span: 6
    }
  },
  config: {
    attribute: [
      {
        label: "占位格数",
        type: "number",
        field: "componentProps.span"
      }
    ]
  }
}, F = {
  component: () => import("./form-83f59457.js"),
  defaultSchema: {
    label: "表单",
    type: "form",
    icon: "epic-icon-daibanshixiang",
    componentProps: {
      layout: "horizontal",
      name: "default",
      labelWidth: 100,
      labelLayout: "fixed",
      labelCol: {
        span: 5
      },
      wrapperCol: {
        span: 19
      },
      hideRequiredMark: !1,
      colon: !0,
      labelAlign: "right",
      size: "middle"
    },
    children: []
  },
  groupName: "表单",
  config: {
    attribute: [
      {
        label: "name",
        type: "input",
        field: "componentProps.name"
      },
      {
        label: "标签布局",
        type: "radio",
        field: "componentProps.labelLayout",
        componentProps: {
          options: [
            {
              label: "固定宽度",
              value: "fixed"
            },
            {
              label: "自适应宽度",
              value: "flex"
            }
          ]
        }
      },
      {
        label: "labelWidth",
        type: "input",
        field: "componentProps.labelWidth",
        show: ({ values: n }) => {
          var e;
          return ((e = n.componentProps) == null ? void 0 : e.labelLayout) === "fixed";
        }
      },
      {
        label: "labelCol",
        type: "input",
        field: "componentProps.labelCol.span",
        show: ({ values: n }) => {
          var e;
          return ((e = n.componentProps) == null ? void 0 : e.labelLayout) === "flex";
        }
      },
      {
        label: "wrapperCol",
        type: "input",
        field: "componentProps.wrapperCol.span",
        show: ({ values: n }) => {
          var e;
          return ((e = n.componentProps) == null ? void 0 : e.labelLayout) === "flex";
        }
      },
      {
        label: "显示冒号",
        type: "switch",
        field: "componentProps.colon"
      },
      {
        label: "对齐方式",
        type: "select",
        componentProps: {
          options: [
            {
              label: "left",
              value: "left"
            },
            {
              label: "right",
              value: "right"
            }
          ]
        },
        field: "componentProps.labelAlign"
      },
      {
        label: "标签文本换行",
        type: "switch",
        field: "componentProps.labelWrap"
      },
      {
        label: "表单布局",
        type: "select",
        componentProps: {
          options: [
            {
              label: "horizontal",
              value: "horizontal"
            },
            {
              label: "vertical",
              value: "vertical"
            },
            {
              label: "inline",
              value: "inline"
            }
          ]
        },
        field: "componentProps.layout"
      },
      {
        label: "尺寸",
        type: "select",
        defaultValue: "default",
        componentProps: {
          options: [
            {
              label: "large",
              value: "large"
            },
            {
              label: "middle",
              value: "middle"
            },
            {
              label: "small",
              value: "small"
            }
          ]
        },
        field: "componentProps.size"
      },
      {
        label: "禁用",
        type: "switch",
        field: "componentProps.disabled"
      },
      {
        label: "隐藏",
        type: "switch",
        field: "componentProps.hidden"
      }
    ],
    action: [
      {
        type: "getData",
        describe: "获取表单数据"
      },
      {
        type: "setData",
        describe: "设置表单数据"
      },
      {
        type: "validate",
        describe: "校验表单"
      }
    ]
  }
}, $e = {
  component: () => import("./formItem-cc230c56.js"),
  defaultSchema: {
    label: "表单项",
    type: "form-item",
    icon: "epic-icon-qiapian"
  },
  config: {}
}, Ce = {
  component: () => import("./button-8de3d55b.js"),
  defaultSchema: {
    label: "按钮",
    type: "button",
    field: "input",
    icon: "epic-icon-button-remove",
    input: !1,
    componentProps: {}
  },
  groupName: "表单",
  config: {
    attribute: [
      {
        label: "标题",
        type: "input",
        field: "label"
      },
      {
        label: "类型",
        type: "select",
        componentProps: {
          placeholder: "请选择",
          clearable: !0,
          options: [
            {
              label: "primary",
              value: "primary"
            },
            {
              label: "ghost",
              value: "ghost"
            },
            {
              label: "dashed",
              value: "dashed"
            },
            {
              label: "link",
              value: "link"
            },
            {
              label: "text",
              value: "text"
            },
            {
              label: "default",
              value: "default"
            }
          ]
        },
        field: "componentProps.type"
      },
      {
        label: "链接",
        type: "input",
        field: "componentProps.href",
        componentProps: {
          allowClear: !0,
          placeholder: "请输入"
        }
      },
      {
        label: "链接打开方式",
        type: "select",
        field: "componentProps.target",
        show: ({ values: n }) => n.componentProps.href,
        componentProps: {
          placeholder: "请选择",
          clearable: !0,
          options: [
            {
              label: "blank",
              value: "_blank"
            },
            {
              label: "parent",
              value: "_parent"
            },
            {
              label: "self",
              value: "_self"
            },
            {
              label: "top",
              value: "_top"
            }
          ]
        }
      },
      {
        label: "尺寸",
        type: "select",
        componentProps: {
          placeholder: "请选择",
          allowClear: !0,
          options: [
            {
              label: "default",
              value: "default"
            },
            {
              label: "small",
              value: "small"
            },
            {
              label: "large",
              value: "large"
            }
          ]
        },
        field: "componentProps.size"
      },
      {
        label: "形状",
        type: "select",
        componentProps: {
          placeholder: "请选择",
          clearable: !0,
          options: [
            {
              label: "default",
              value: "default"
            },
            {
              label: "circle",
              value: "circle"
            },
            {
              label: "round",
              value: "round"
            }
          ]
        },
        field: "componentProps.shape"
      },
      {
        label: "危险按钮",
        type: "switch",
        field: "componentProps.danger"
      },
      {
        label: "禁用",
        type: "switch",
        field: "componentProps.disabled"
      },
      {
        label: "隐藏",
        type: "switch",
        field: "componentProps.hidden"
      }
    ],
    event: [
      {
        type: "click",
        describe: "点击按钮时"
      },
      {
        type: "dblclick",
        describe: "双击按钮时"
      }
    ]
  }
}, Se = {
  component: () => import("./modal-d9308edc.js"),
  defaultSchema: {
    label: "模态框",
    type: "modal",
    icon: "epic-icon-xiala",
    children: []
  },
  config: {
    attribute: [
      {
        label: "标题",
        type: "input",
        field: "title"
      }
    ]
  }
}, xe = {
  component: async () => (await import("ant-design-vue")).Input,
  defaultSchema: {
    label: "颜色选择器",
    type: "color-picker",
    field: "color-picker",
    icon: "epic-icon-yanse",
    input: !0,
    componentProps: {
      type: "color",
      style: {
        width: "80px"
      }
    }
  },
  groupName: "表单",
  config: {
    attribute: [
      {
        label: "字段名",
        type: "input",
        field: "field"
      },
      {
        label: "标题",
        type: "input",
        field: "label"
      },
      {
        label: "默认值",
        type: "input",
        field: "componentProps.defaultValue"
      },
      {
        label: "尺寸",
        type: "select",
        componentProps: {
          placeholder: "请选择",
          allowClear: !0,
          options: [
            {
              label: "large",
              value: "large"
            },
            {
              label: "middle",
              value: "middle"
            },
            {
              label: "small",
              value: "small"
            }
          ]
        },
        field: "componentProps.size"
      },
      {
        label: "可清空",
        type: "switch",
        field: "componentProps.allowClear"
      },
      {
        label: "禁用",
        type: "switch",
        field: "componentProps.disabled"
      },
      {
        label: "隐藏",
        type: "switch",
        field: "componentProps.hidden"
      },
      {
        label: "表单校验",
        type: "ERuleEditor",
        layout: "vertical",
        field: "rules",
        describe: "校验规则需要配合表单使用"
      }
    ],
    event: [
      {
        type: "change",
        describe: "值变化时"
      }
    ],
    action: []
  },
  bindModel: "value"
};
function ze(n = X) {
  var x;
  const e = le.split("."), L = parseInt(e[0]), v = document.createElement("style");
  if (L > 3) {
    const h = `
.epic-modal-ant .epic-modal-main {
  padding: 4px 12px 12px;
}
.epic-modal-ant .ant-modal-title {
  padding: 16px 16px 0px;
}
.epic-modal-ant .ant-modal-content {
  padding: 0px;
}`;
    v.appendChild(document.createTextNode(h)), document.head.appendChild(v);
  } else
    F.config.attribute = (x = F.config.attribute) == null ? void 0 : x.filter(
      (h) => h.label !== "禁用"
    );
  n.component(
    "Collapse",
    async () => (await import("ant-design-vue")).Collapse
  ), n.component(
    "CollapseItem",
    async () => (await import("ant-design-vue")).CollapsePanel
  ), n.component(
    "Tabs",
    async () => (await import("ant-design-vue")).Tabs
  ), n.component(
    "TabPane",
    async () => (await import("ant-design-vue")).TabPane
  ), [
    F,
    $e,
    pe,
    ie,
    re,
    se,
    ce,
    de,
    ue,
    me,
    be,
    fe,
    he,
    ye,
    Pe,
    ve,
    xe,
    Ce,
    ge,
    we,
    ke,
    Se
  ].forEach((h) => {
    n.registerComponent(h);
  }), n.setInitialized(!0);
}
function Le(n = "zh-cn") {
  switch (ne.locale(n), n.toLowerCase()) {
    case "az-az":
      import("./az-bd6380da.js").then((e) => e.a);
      break;
    case "bg-bg":
      import("./bg-5caf349b.js").then((e) => e.b);
      break;
    case "bn-bd":
      import("./bn-bd-64ae4ad9.js").then((e) => e.b);
      break;
    case "by-by":
      import("./be-e997f1c1.js").then((e) => e.b);
      break;
    case "ca-es":
      import("./ca-03d802bf.js").then((e) => e.c);
      break;
    case "cs-cz":
      import("./cs-5c818d1a.js").then((e) => e.c);
      break;
    case "da-dk":
      import("./da-a7d0f3e3.js").then((e) => e.d);
      break;
    case "de-de":
      import("./de-8b2223bb.js").then((e) => e.d);
      break;
    case "el-gr":
      import("./el-b2c3ad50.js").then((e) => e.e);
      break;
    case "en-gb":
      import("./en-gb-8ebceade.js").then((e) => e.e);
      break;
    case "en-us":
      import("./en-6caaea1a.js").then((e) => e.e);
      break;
    case "es-es":
      import("./es-05d4b638.js").then((e) => e.e);
      break;
    case "et-ee":
      import("./et-38b2724e.js").then((e) => e.e);
      break;
    case "fa-ir":
      import("./fa-373ef538.js").then((e) => e.f);
      break;
    case "fi-fi":
      import("./fi-cb7e4112.js").then((e) => e.f);
      break;
    case "fr-ca":
      import("./fr-ca-e2b2da9d.js").then((e) => e.f);
      break;
    case "fr-fr":
      import("./fr-9c7318c3.js").then((e) => e.f);
      break;
    case "ga-ie":
      import("./ga-1034a8a9.js").then((e) => e.g);
      break;
    case "gl-es":
      import("./gl-08087432.js").then((e) => e.g);
      break;
    case "he-il":
      import("./he-e2f3393f.js").then((e) => e.h);
      break;
    case "hi-in":
      import("./hi-e2dcaa00.js").then((e) => e.h);
      break;
    case "hr-hr":
      import("./hr-dd727065.js").then((e) => e.h);
      break;
    case "hu-hu":
      import("./hu-8f7d1c3b.js").then((e) => e.h);
      break;
    case "hy-am":
      import("./hy-am-46e3b422.js").then((e) => e.h);
      break;
    case "id-id":
      import("./id-2785754f.js").then((e) => e.i);
      break;
    case "is-is":
      import("./is-ab94fed8.js").then((e) => e.i);
      break;
    case "it-it":
      import("./it-95b50fc2.js").then((e) => e.i);
      break;
    case "ja-jp":
      import("./ja-430559ee.js").then((e) => e.j);
      break;
    case "ka-ge":
      import("./ka-29757586.js").then((e) => e.k);
      break;
    case "kk-kz":
      import("./kk-7a008cdc.js").then((e) => e.k);
      break;
    case "km-kh":
      import("./km-ff834f8f.js").then((e) => e.k);
      break;
    case "kmr-iq":
      import("./ku-aa9b532e.js").then((e) => e.k);
      break;
    case "kn-in":
      import("./kn-553541ab.js").then((e) => e.k);
      break;
    case "ko-kr":
      import("./ko-98cefed7.js").then((e) => e.k);
      break;
    case "ku-iq":
      import("./ku-aa9b532e.js").then((e) => e.k);
      break;
    case "lt-lt":
      import("./lt-061bea1b.js").then((e) => e.l);
      break;
    case "lv-lv":
      import("./lv-6703a539.js").then((e) => e.l);
      break;
    case "mk-mk":
      import("./mk-cbdf3ce3.js").then((e) => e.m);
      break;
    case "ml-in":
      import("./ml-e8296aac.js").then((e) => e.m);
      break;
    case "mn-mn":
      import("./mn-b2fb587f.js").then((e) => e.m);
      break;
    case "ms-my":
      import("./ms-my-e31d6440.js").then((e) => e.m);
      break;
    case "nb-no":
      import("./nb-fa9b71c5.js").then((e) => e.n);
      break;
    case "ne-np":
      import("./ne-97b49bab.js").then((e) => e.n);
      break;
    case "nl-be":
      import("./nl-be-fdbffe01.js").then((e) => e.n);
      break;
    case "nl-nl":
      import("./nl-74a3e074.js").then((e) => e.n);
      break;
    case "pl-pl":
      import("./pl-4b9db056.js").then((e) => e.p);
      break;
    case "pt-br":
      import("./pt-br-6d07e692.js").then((e) => e.p);
      break;
    case "pt-pt":
      import("./pt-48ed4572.js").then((e) => e.p);
      break;
    case "ro-ro":
      import("./ro-8a5b8333.js").then((e) => e.r);
      break;
    case "ru-ru":
      import("./ru-221c0c3b.js").then((e) => e.r);
      break;
    case "sk-sk":
      import("./sk-9c8cfeee.js").then((e) => e.s);
      break;
    case "sl-si":
      import("./sl-723441e5.js").then((e) => e.s);
      break;
    case "sr-rs":
      import("./sr-1fd24e63.js").then((e) => e.s);
      break;
    case "sv-se":
      import("./sv-a14904a4.js").then((e) => e.s);
      break;
    case "ta-in":
      import("./ta-913937e8.js").then((e) => e.t);
      break;
    case "th-th":
      import("./th-363aae16.js").then((e) => e.t);
      break;
    case "tr-tr":
      import("./tr-d5462d1e.js").then((e) => e.t);
      break;
    case "uk-ua":
      import("./uk-a5503484.js").then((e) => e.u);
      break;
    case "ur-pk":
      import("./ur-94da425b.js").then((e) => e.u);
      break;
    case "vi-vn":
      import("./vi-b47b28d9.js").then((e) => e.v);
      break;
    case "zh-cn":
      import("./zh-cn-e4428a0a.js").then((e) => e.z);
      break;
    case "zh-hk":
      import("./zh-hk-7ba5d59e.js").then((e) => e.z);
      break;
    case "zh-tw":
      import("./zh-tw-cf831bcb.js").then((e) => e.z);
      break;
  }
}
export {
  Le as a,
  oe as r,
  ze as s
};
