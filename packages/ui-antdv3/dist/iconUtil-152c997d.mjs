import { b as nn, r as Ve, t as ia, i as ue, a as $e, o as Vt, j as He, e as Ge, g as le, u as an, n as jt, c as ut, B as Va, A as Ta, w as Da, m as Na } from "./useConfigInject-f0dbb416.mjs";
import { _ as Ke } from "./index-5fc6c346.mjs";
import { r as Fa, a as Ea } from "./CheckOutlined-bdc41ba2.mjs";
import { b as qa } from "./index-d3f861e4.mjs";
import { r as zt } from "./KeyCode-8a26b842.mjs";
import { r as ca } from "./vnode-1aa65f32.mjs";
import { r as La, a as Ba } from "./SearchOutlined-1df98106.mjs";
import { r as rn } from "./pickAttrs-288ea149.mjs";
import { r as Aa } from "./index-a26e140f.mjs";
import { r as Ua } from "./isMobile-1112823b.mjs";
import { r as ka } from "./index-292db55b.mjs";
import { r as Yt } from "./raf-09a8b76f.mjs";
import { r as da } from "./Portal-f8d09ab1.mjs";
import { r as Ka } from "./useMemo-338dbc47.mjs";
import { r as fa } from "./omit-d14a337a.mjs";
import { r as $a } from "./useMergedState-dbb38782.mjs";
import { r as Ha } from "./useState-d62b7544.mjs";
import { r as Wa } from "./DownOutlined-c6420e47.mjs";
var tn = {}, ot = {}, ze = {}, Je = {}, Sn;
function on() {
  if (Sn)
    return Je;
  Sn = 1;
  var t = ue;
  Object.defineProperty(Je, "__esModule", {
    value: !0
  }), Je.fillFieldNames = s, Je.flattenOptions = l, Je.getSeparatedContent = g, Je.injectPropsWithOption = S;
  var e = t(nn()), o = t(Fa()), d = t(Ve()), p = ia();
  function y(r, f) {
    var n = r.key, i;
    return "value" in r && (i = r.value), n ?? (i !== void 0 ? i : "rc-index-key-".concat(f));
  }
  function s(r, f) {
    var n = r || {}, i = n.label, c = n.value, a = n.options;
    return {
      label: i || (f ? "children" : "label"),
      value: c || "value",
      options: a || "options"
    };
  }
  function l(r) {
    var f = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = f.fieldNames, i = f.childrenAsData, c = [], a = s(n, !1), v = a.label, b = a.value, _ = a.options;
    function N(L, F) {
      L.forEach(function(X) {
        var A = X[v];
        if (F || !(_ in X)) {
          var ee = X[b];
          c.push({
            key: y(X, c.length),
            groupOption: F,
            data: X,
            label: A,
            value: ee
          });
        } else {
          var x = A;
          x === void 0 && i && (x = X.label), c.push({
            key: y(X, c.length),
            group: !0,
            data: X,
            label: x
          }), N(X[_], !0);
        }
      });
    }
    return N(r, !1), c;
  }
  function S(r) {
    var f = (0, d.default)({}, r);
    return "props" in f || Object.defineProperty(f, "props", {
      get: function() {
        return (0, p.warning)(!1, "Return type is option instead of Option instance. Please read value directly instead of reading from `props`."), f;
      }
    }), f;
  }
  function g(r, f) {
    if (!f || !f.length)
      return null;
    var n = !1;
    function i(a, v) {
      var b = (0, o.default)(v), _ = b[0], N = b.slice(1);
      if (!_)
        return [a];
      var L = a.split(_);
      return n = n || L.length > 1, L.reduce(function(F, X) {
        return [].concat((0, e.default)(F), (0, e.default)(i(X, N)));
      }, []).filter(function(F) {
        return F;
      });
    }
    var c = i(r, f);
    return n ? c : null;
  }
  return Je;
}
var ct = {}, _n;
function ja() {
  if (_n)
    return ct;
  _n = 1;
  var t = ue;
  Object.defineProperty(ct, "__esModule", {
    value: !0
  }), ct.default = void 0;
  var e = le, o = t($e()), d = t(Ve()), p = t(Vt()), y = t(qa()), s = t(He()), l = t(Ge()), S = ["empty"], g = function(i) {
    var c = i === !0 ? 0 : 1;
    return {
      bottomLeft: {
        points: ["tl", "bl"],
        offset: [0, 4],
        overflow: {
          adjustX: c,
          adjustY: 1
        }
      },
      bottomRight: {
        points: ["tr", "br"],
        offset: [0, 4],
        overflow: {
          adjustX: c,
          adjustY: 1
        }
      },
      topLeft: {
        points: ["bl", "tl"],
        offset: [0, -4],
        overflow: {
          adjustX: c,
          adjustY: 1
        }
      },
      topRight: {
        points: ["br", "tr"],
        offset: [0, -4],
        overflow: {
          adjustX: c,
          adjustY: 1
        }
      }
    };
  }, r = (0, e.defineComponent)({
    name: "SelectTrigger",
    inheritAttrs: !1,
    props: {
      dropdownAlign: Object,
      visible: {
        type: Boolean,
        default: void 0
      },
      disabled: {
        type: Boolean,
        default: void 0
      },
      dropdownClassName: String,
      dropdownStyle: s.default.object,
      placement: String,
      empty: {
        type: Boolean,
        default: void 0
      },
      prefixCls: String,
      popupClassName: String,
      animation: String,
      transitionName: String,
      getPopupContainer: Function,
      dropdownRender: Function,
      containerWidth: Number,
      dropdownMatchSelectWidth: s.default.oneOfType([Number, Boolean]).def(!0),
      popupElement: s.default.any,
      direction: String,
      getTriggerDOMNode: Function,
      onPopupVisibleChange: Function,
      onPopupMouseEnter: Function
    },
    setup: function(i, c) {
      var a = c.slots, v = c.attrs, b = c.expose, _ = (0, e.computed)(function() {
        var L = i.dropdownMatchSelectWidth;
        return g(L);
      }), N = (0, e.ref)();
      return b({
        getPopupElement: function() {
          return N.value;
        }
      }), function() {
        var L = (0, d.default)((0, d.default)({}, i), v), F = L.empty, X = F === void 0 ? !1 : F, A = (0, p.default)(L, S), ee = A.visible, x = A.dropdownAlign, O = A.prefixCls, R = A.popupElement, D = A.dropdownClassName, E = A.dropdownStyle, P = A.direction, m = P === void 0 ? "ltr" : P, M = A.placement, u = A.dropdownMatchSelectWidth, w = A.containerWidth, I = A.dropdownRender, K = A.animation, J = A.transitionName, U = A.getPopupContainer, Q = A.getTriggerDOMNode, re = A.onPopupVisibleChange, de = A.onPopupMouseEnter, ie = "".concat(O, "-dropdown"), W = R;
        I && (W = I({
          menuNode: R,
          props: i
        }));
        var T = K ? "".concat(ie, "-").concat(K) : J, Y = (0, d.default)({
          minWidth: "".concat(w, "px")
        }, E);
        return typeof u == "number" ? Y.width = "".concat(u, "px") : u && (Y.width = "".concat(w, "px")), (0, e.createVNode)(y.default, (0, d.default)((0, d.default)({}, i), {}, {
          showAction: re ? ["click"] : [],
          hideAction: re ? ["click"] : [],
          popupPlacement: M || (m === "rtl" ? "bottomRight" : "bottomLeft"),
          builtinPlacements: _.value,
          prefixCls: ie,
          popupTransitionName: T,
          popupAlign: x,
          popupVisible: ee,
          getPopupContainer: U,
          popupClassName: (0, l.default)(D, (0, o.default)({}, "".concat(ie, "-empty"), X)),
          popupStyle: Y,
          getTriggerDOMNode: Q,
          onPopupVisibleChange: re
        }), {
          default: a.default,
          popup: function() {
            return (0, e.createVNode)("div", {
              ref: N,
              onMouseenter: de
            }, [W]);
          }
        });
      };
    }
  }), f = r;
  return ct.default = f, ct;
}
var dt = {}, ft = {}, st = {}, wn;
function un() {
  if (wn)
    return st;
  wn = 1;
  var t = ue;
  Object.defineProperty(st, "__esModule", {
    value: !0
  }), st.default = void 0;
  var e = le, o = t(He()), d = function(s, l) {
    var S, g = l.slots, r = s.class, f = s.customizeIcon, n = s.customizeIconProps, i = s.onMousedown, c = s.onClick, a;
    return typeof f == "function" ? a = f(n) : a = f, (0, e.createVNode)("span", {
      class: r,
      onMousedown: function(b) {
        b.preventDefault(), i && i(b);
      },
      style: {
        userSelect: "none",
        WebkitUserSelect: "none"
      },
      unselectable: "on",
      onClick: c,
      "aria-hidden": !0
    }, [a !== void 0 ? a : (0, e.createVNode)("span", {
      class: r.split(/\s+/).map(function(v) {
        return "".concat(v, "-icon");
      })
    }, [(S = g.default) === null || S === void 0 ? void 0 : S.call(g)])]);
  };
  d.inheritAttrs = !1, d.displayName = "TransBtn", d.props = {
    class: String,
    customizeIcon: o.default.any,
    customizeIconProps: o.default.any,
    onMousedown: Function,
    onClick: Function
  };
  var p = d;
  return st.default = p, st;
}
var et = {}, Cn;
function sa() {
  if (Cn)
    return et;
  Cn = 1;
  var t = ue;
  Object.defineProperty(et, "__esModule", {
    value: !0
  }), et.inputProps = et.default = void 0;
  var e = le, o = t(Ve()), d = t(an()), p = ca(), y = t(He()), s = t(La()), l = t(Ge()), S = {
    inputRef: y.default.any,
    prefixCls: String,
    id: String,
    inputElement: y.default.VueNode,
    disabled: {
      type: Boolean,
      default: void 0
    },
    autofocus: {
      type: Boolean,
      default: void 0
    },
    autocomplete: String,
    editable: {
      type: Boolean,
      default: void 0
    },
    activeDescendantId: String,
    value: String,
    open: {
      type: Boolean,
      default: void 0
    },
    tabindex: y.default.oneOfType([y.default.number, y.default.string]),
    /** Pass accessibility props to input */
    attrs: y.default.object,
    onKeydown: {
      type: Function
    },
    onMousedown: {
      type: Function
    },
    onChange: {
      type: Function
    },
    onPaste: {
      type: Function
    },
    onCompositionstart: {
      type: Function
    },
    onCompositionend: {
      type: Function
    },
    onFocus: {
      type: Function
    },
    onBlur: {
      type: Function
    }
  };
  et.inputProps = S;
  var g = (0, e.defineComponent)({
    compatConfig: {
      MODE: 3
    },
    name: "Input",
    inheritAttrs: !1,
    props: S,
    setup: function(n) {
      var i = null, c = (0, e.inject)("VCSelectContainerEvent");
      return function() {
        var a, v, b = n.prefixCls, _ = n.id, N = n.inputElement, L = n.disabled, F = n.tabindex, X = n.autofocus, A = n.autocomplete, ee = n.editable, x = n.activeDescendantId, O = n.value, R = n.onKeydown, D = n.onMousedown, E = n.onChange, P = n.onPaste, m = n.onCompositionstart, M = n.onCompositionend, u = n.onFocus, w = n.onBlur, I = n.open, K = n.inputRef, J = n.attrs, U = N || (0, e.withDirectives)((0, e.createVNode)("input", null, null), [[s.default]]), Q = U.props || {}, re = Q.onKeydown, de = Q.onInput, ie = Q.onFocus, W = Q.onBlur, T = Q.onMousedown, Y = Q.onCompositionstart, k = Q.onCompositionend, ae = Q.style;
        return U = (0, p.cloneElement)(U, (0, d.default)((0, o.default)((0, o.default)((0, o.default)({
          type: "search"
        }, Q), {}, {
          id: _,
          ref: K,
          disabled: L,
          tabindex: F,
          autocomplete: A || "off",
          autofocus: X,
          class: (0, l.default)("".concat(b, "-selection-search-input"), (a = U) === null || a === void 0 || (v = a.props) === null || v === void 0 ? void 0 : v.class),
          role: "combobox",
          "aria-expanded": I,
          "aria-haspopup": "listbox",
          "aria-owns": "".concat(_, "_list"),
          "aria-autocomplete": "list",
          "aria-controls": "".concat(_, "_list"),
          "aria-activedescendant": x
        }, J), {}, {
          value: ee ? O : "",
          readonly: !ee,
          unselectable: ee ? null : "on",
          style: (0, o.default)((0, o.default)({}, ae), {}, {
            opacity: ee ? null : 0
          }),
          onKeydown: function(Z) {
            R(Z), re && re(Z);
          },
          onMousedown: function(Z) {
            D(Z), T && T(Z);
          },
          onInput: function(Z) {
            E(Z), de && de(Z);
          },
          onCompositionstart: function(Z) {
            m(Z), Y && Y(Z);
          },
          onCompositionend: function(Z) {
            M(Z), k && k(Z);
          },
          onPaste: P,
          onFocus: function() {
            clearTimeout(i), ie && ie(arguments.length <= 0 ? void 0 : arguments[0]), u && u(arguments.length <= 0 ? void 0 : arguments[0]), c == null || c.focus(arguments.length <= 0 ? void 0 : arguments[0]);
          },
          onBlur: function() {
            for (var Z = arguments.length, me = new Array(Z), se = 0; se < Z; se++)
              me[se] = arguments[se];
            i = setTimeout(function() {
              W && W(me[0]), w && w(me[0]), c == null || c.blur(me[0]);
            }, 100);
          }
        }), U.type === "textarea" ? {} : {
          type: "search"
        }), !0, !0), U;
      };
    }
  }), r = g;
  return et.default = r, et;
}
var vt = {}, On;
function ln() {
  if (On)
    return vt;
  On = 1, Object.defineProperty(vt, "__esModule", {
    value: !0
  }), vt.default = d, vt.useProvideLegacySelectContext = o;
  var t = le, e = Symbol("TreeSelectLegacyContextPropsKey");
  function o(p) {
    return (0, t.provide)(e, p);
  }
  function d() {
    return (0, t.inject)(e, {});
  }
  return vt;
}
var Pn;
function za() {
  if (Pn)
    return ft;
  Pn = 1;
  var t = ue;
  Object.defineProperty(ft, "__esModule", {
    value: !0
  }), ft.default = void 0;
  var e = le, o = t($e()), d = t(un()), p = t(sa()), y = t(Ge()), s = t(rn()), l = t(He()), S = t(Aa()), g = t(ln()), r = {
    id: String,
    prefixCls: String,
    values: l.default.array,
    open: {
      type: Boolean,
      default: void 0
    },
    searchValue: String,
    inputRef: l.default.any,
    placeholder: l.default.any,
    disabled: {
      type: Boolean,
      default: void 0
    },
    mode: String,
    showSearch: {
      type: Boolean,
      default: void 0
    },
    autofocus: {
      type: Boolean,
      default: void 0
    },
    autocomplete: String,
    activeDescendantId: String,
    tabindex: l.default.oneOfType([l.default.number, l.default.string]),
    removeIcon: l.default.any,
    choiceTransitionName: String,
    maxTagCount: l.default.oneOfType([l.default.number, l.default.string]),
    maxTagTextLength: Number,
    maxTagPlaceholder: l.default.any.def(function() {
      return function(c) {
        return "+ ".concat(c.length, " ...");
      };
    }),
    tagRender: Function,
    onToggleOpen: {
      type: Function
    },
    onRemove: Function,
    onInputChange: Function,
    onInputPaste: Function,
    onInputKeyDown: Function,
    onInputMouseDown: Function,
    onInputCompositionStart: Function,
    onInputCompositionEnd: Function
  }, f = function(a) {
    a.preventDefault(), a.stopPropagation();
  }, n = (0, e.defineComponent)({
    name: "MultipleSelectSelector",
    inheritAttrs: !1,
    props: r,
    setup: function(a) {
      var v = (0, e.ref)(), b = (0, e.ref)(0), _ = (0, e.ref)(!1), N = (0, g.default)(), L = (0, e.computed)(function() {
        return "".concat(a.prefixCls, "-selection");
      }), F = (0, e.computed)(function() {
        return a.open || a.mode === "tags" ? a.searchValue : "";
      }), X = (0, e.computed)(function() {
        return a.mode === "tags" || a.showSearch && (a.open || _.value);
      });
      (0, e.onMounted)(function() {
        (0, e.watch)(F, function() {
          b.value = v.value.scrollWidth;
        }, {
          flush: "post",
          immediate: !0
        });
      });
      function A(R, D, E, P, m) {
        return (0, e.createVNode)("span", {
          class: (0, y.default)("".concat(L.value, "-item"), (0, o.default)({}, "".concat(L.value, "-item-disabled"), E)),
          title: typeof R == "string" || typeof R == "number" ? R.toString() : void 0
        }, [(0, e.createVNode)("span", {
          class: "".concat(L.value, "-item-content")
        }, [D]), P && (0, e.createVNode)(d.default, {
          class: "".concat(L.value, "-item-remove"),
          onMousedown: f,
          onClick: m,
          customizeIcon: a.removeIcon
        }, {
          default: function() {
            return [(0, e.createTextVNode)("×")];
          }
        })]);
      }
      function ee(R, D, E, P, m, M) {
        var u = function(J) {
          f(J), a.onToggleOpen(!open);
        }, w = M;
        if (N.keyEntities) {
          var I;
          w = ((I = N.keyEntities[R]) === null || I === void 0 ? void 0 : I.node) || {};
        }
        return (0, e.createVNode)("span", {
          key: R,
          onMousedown: u
        }, [a.tagRender({
          label: D,
          value: R,
          disabled: E,
          closable: P,
          onClose: m,
          option: w
        })]);
      }
      function x(R) {
        var D = R.disabled, E = R.label, P = R.value, m = R.option, M = !a.disabled && !D, u = E;
        if (typeof a.maxTagTextLength == "number" && (typeof E == "string" || typeof E == "number")) {
          var w = String(u);
          w.length > a.maxTagTextLength && (u = "".concat(w.slice(0, a.maxTagTextLength), "..."));
        }
        var I = function(J) {
          var U;
          J && J.stopPropagation(), (U = a.onRemove) === null || U === void 0 || U.call(a, R);
        };
        return typeof a.tagRender == "function" ? ee(P, u, D, M, I, m) : A(E, u, D, M, I);
      }
      function O(R) {
        var D = a.maxTagPlaceholder, E = D === void 0 ? function(m) {
          return "+ ".concat(m.length, " ...");
        } : D, P = typeof E == "function" ? E(R) : E;
        return A(P, P, !1);
      }
      return function() {
        var R = a.id, D = a.prefixCls, E = a.values, P = a.open, m = a.inputRef, M = a.placeholder, u = a.disabled, w = a.autofocus, I = a.autocomplete, K = a.activeDescendantId, J = a.tabindex, U = a.onInputChange, Q = a.onInputPaste, re = a.onInputKeyDown, de = a.onInputMouseDown, ie = a.onInputCompositionStart, W = a.onInputCompositionEnd, T = (0, e.createVNode)("div", {
          class: "".concat(L.value, "-search"),
          style: {
            width: b.value + "px"
          },
          key: "input"
        }, [(0, e.createVNode)(p.default, {
          inputRef: m,
          open: P,
          prefixCls: D,
          id: R,
          inputElement: null,
          disabled: u,
          autofocus: w,
          autocomplete: I,
          editable: X.value,
          activeDescendantId: K,
          value: F.value,
          onKeydown: re,
          onMousedown: de,
          onChange: U,
          onPaste: Q,
          onCompositionstart: ie,
          onCompositionend: W,
          tabindex: J,
          attrs: (0, s.default)(a, !0),
          onFocus: function() {
            return _.value = !0;
          },
          onBlur: function() {
            return _.value = !1;
          }
        }, null), (0, e.createVNode)("span", {
          ref: v,
          class: "".concat(L.value, "-search-mirror"),
          "aria-hidden": !0
        }, [F.value, (0, e.createTextVNode)(" ")])]), Y = (0, e.createVNode)(S.default, {
          prefixCls: "".concat(L.value, "-overflow"),
          data: E,
          renderItem: x,
          renderRest: O,
          suffix: T,
          itemKey: "key",
          maxCount: a.maxTagCount,
          key: "overflow"
        }, null);
        return (0, e.createVNode)(e.Fragment, null, [Y, !E.length && !F.value && (0, e.createVNode)("span", {
          class: "".concat(L.value, "-placeholder")
        }, [M])]);
      };
    }
  }), i = n;
  return ft.default = i, ft;
}
var pt = {}, Mn;
function Ya() {
  if (Mn)
    return pt;
  Mn = 1;
  var t = ue;
  Object.defineProperty(pt, "__esModule", {
    value: !0
  }), pt.default = void 0;
  var e = le, o = t(rn()), d = t(sa()), p = t(He()), y = t(ln()), s = {
    inputElement: p.default.any,
    id: String,
    prefixCls: String,
    values: p.default.array,
    open: {
      type: Boolean,
      default: void 0
    },
    searchValue: String,
    inputRef: p.default.any,
    placeholder: p.default.any,
    disabled: {
      type: Boolean,
      default: void 0
    },
    mode: String,
    showSearch: {
      type: Boolean,
      default: void 0
    },
    autofocus: {
      type: Boolean,
      default: void 0
    },
    autocomplete: String,
    activeDescendantId: String,
    tabindex: p.default.oneOfType([p.default.number, p.default.string]),
    activeValue: String,
    backfill: {
      type: Boolean,
      default: void 0
    },
    optionLabelRender: Function,
    onInputChange: Function,
    onInputPaste: Function,
    onInputKeyDown: Function,
    onInputMouseDown: Function,
    onInputCompositionStart: Function,
    onInputCompositionEnd: Function
  }, l = (0, e.defineComponent)({
    name: "SingleSelector",
    setup: function(r) {
      var f = (0, e.ref)(!1), n = (0, e.computed)(function() {
        return r.mode === "combobox";
      }), i = (0, e.computed)(function() {
        return n.value || r.showSearch;
      }), c = (0, e.computed)(function() {
        var N = r.searchValue || "";
        return n.value && r.activeValue && !f.value && (N = r.activeValue), N;
      }), a = (0, y.default)();
      (0, e.watch)([n, function() {
        return r.activeValue;
      }], function() {
        n.value && (f.value = !1);
      }, {
        immediate: !0
      });
      var v = (0, e.computed)(function() {
        return r.mode !== "combobox" && !r.open && !r.showSearch ? !1 : !!c.value;
      }), b = (0, e.computed)(function() {
        var N = r.values[0];
        return N && (typeof N.label == "string" || typeof N.label == "number") ? N.label.toString() : void 0;
      }), _ = function() {
        if (r.values[0])
          return null;
        var L = v.value ? {
          visibility: "hidden"
        } : void 0;
        return (0, e.createVNode)("span", {
          class: "".concat(r.prefixCls, "-selection-placeholder"),
          style: L
        }, [r.placeholder]);
      };
      return function() {
        var N, L = r.inputElement, F = r.prefixCls, X = r.id, A = r.values, ee = r.inputRef, x = r.disabled, O = r.autofocus, R = r.autocomplete, D = r.activeDescendantId, E = r.open, P = r.tabindex, m = r.optionLabelRender, M = r.onInputKeyDown, u = r.onInputMouseDown, w = r.onInputChange, I = r.onInputPaste, K = r.onInputCompositionStart, J = r.onInputCompositionEnd, U = A[0], Q = null;
        if (U && a.customSlots) {
          var re, de, ie, W = (re = U.key) !== null && re !== void 0 ? re : U.value, T = ((de = a.keyEntities[W]) === null || de === void 0 ? void 0 : de.node) || {};
          Q = a.customSlots[(ie = T.slots) === null || ie === void 0 ? void 0 : ie.title] || a.customSlots.title || U.label, typeof Q == "function" && (Q = Q(T));
        } else
          Q = m && U ? m(U.option) : U == null ? void 0 : U.label;
        return (0, e.createVNode)(e.Fragment, null, [(0, e.createVNode)("span", {
          class: "".concat(F, "-selection-search")
        }, [(0, e.createVNode)(d.default, {
          inputRef: ee,
          prefixCls: F,
          id: X,
          open: E,
          inputElement: L,
          disabled: x,
          autofocus: O,
          autocomplete: R,
          editable: i.value,
          activeDescendantId: D,
          value: c.value,
          onKeydown: M,
          onMousedown: u,
          onChange: function(k) {
            f.value = !0, w(k);
          },
          onPaste: I,
          onCompositionstart: K,
          onCompositionend: J,
          tabindex: P,
          attrs: (0, o.default)(r, !0)
        }, null)]), !n.value && U && !v.value && (0, e.createVNode)("span", {
          class: "".concat(F, "-selection-item"),
          title: b.value
        }, [(0, e.createVNode)(e.Fragment, {
          key: (N = U.key) !== null && N !== void 0 ? N : U.value
        }, [Q])]), _()]);
      };
    }
  });
  l.props = s, l.inheritAttrs = !1;
  var S = l;
  return pt.default = S, pt;
}
var Nt = {}, In;
function Ga() {
  if (In)
    return Nt;
  In = 1;
  var t = ue;
  Object.defineProperty(Nt, "__esModule", {
    value: !0
  }), Nt.isValidateOpenKey = o;
  var e = t(zt());
  function o(d) {
    return ![
      // System function button
      e.default.ESC,
      e.default.SHIFT,
      e.default.BACKSPACE,
      e.default.TAB,
      e.default.WIN_KEY,
      e.default.ALT,
      e.default.META,
      e.default.WIN_KEY_RIGHT,
      e.default.CTRL,
      e.default.SEMICOLON,
      e.default.EQUALS,
      e.default.CAPS_LOCK,
      e.default.CONTEXT_MENU,
      // F1-F12
      e.default.F1,
      e.default.F2,
      e.default.F3,
      e.default.F4,
      e.default.F5,
      e.default.F6,
      e.default.F7,
      e.default.F8,
      e.default.F9,
      e.default.F10,
      e.default.F11,
      e.default.F12
    ].includes(d);
  }
  return Nt;
}
var Ft = {}, Rn;
function va() {
  if (Rn)
    return Ft;
  Rn = 1, Object.defineProperty(Ft, "__esModule", {
    value: !0
  }), Ft.default = e;
  var t = le;
  function e() {
    var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 250, d = null, p;
    (0, t.onBeforeUnmount)(function() {
      clearTimeout(p);
    });
    function y(s) {
      (s || d === null) && (d = s), clearTimeout(p), p = setTimeout(function() {
        d = null;
      }, o);
    }
    return [function() {
      return d;
    }, y];
  }
  return Ft;
}
var tt = {}, xn;
function Gt() {
  if (xn)
    return tt;
  xn = 1;
  var t = ue;
  Object.defineProperty(tt, "__esModule", {
    value: !0
  }), tt.composeRef = p, tt.default = void 0, tt.fillRef = d;
  var e = t(Ke);
  function o() {
    var s = function l(S) {
      l.current = S;
    };
    return s;
  }
  function d(s, l) {
    typeof s == "function" ? s(l) : (0, e.default)(s) === "object" && s && "current" in s && (s.current = l);
  }
  function p() {
    for (var s = arguments.length, l = new Array(s), S = 0; S < s; S++)
      l[S] = arguments[S];
    return function(g) {
      l.forEach(function(r) {
        d(r, g);
      });
    };
  }
  var y = o;
  return tt.default = y, tt;
}
var Vn;
function Xa() {
  if (Vn)
    return dt;
  Vn = 1;
  var t = ue;
  Object.defineProperty(dt, "__esModule", {
    value: !0
  }), dt.default = void 0;
  var e = le, o = t(Ve()), d = t(jt()), p = t(zt()), y = t(za()), s = t(Ya()), l = Ga(), S = t(va()), g = t(Gt()), r = t(He()), f = (0, e.defineComponent)({
    name: "Selector",
    inheritAttrs: !1,
    props: {
      id: String,
      prefixCls: String,
      showSearch: {
        type: Boolean,
        default: void 0
      },
      open: {
        type: Boolean,
        default: void 0
      },
      /** Display in the Selector value, it's not same as `value` prop */
      values: r.default.array,
      multiple: {
        type: Boolean,
        default: void 0
      },
      mode: String,
      searchValue: String,
      activeValue: String,
      inputElement: r.default.any,
      autofocus: {
        type: Boolean,
        default: void 0
      },
      activeDescendantId: String,
      tabindex: r.default.oneOfType([r.default.number, r.default.string]),
      disabled: {
        type: Boolean,
        default: void 0
      },
      placeholder: r.default.any,
      removeIcon: r.default.any,
      // Tags
      maxTagCount: r.default.oneOfType([r.default.number, r.default.string]),
      maxTagTextLength: Number,
      maxTagPlaceholder: r.default.any,
      tagRender: Function,
      optionLabelRender: Function,
      /** Check if `tokenSeparators` contains `\n` or `\r\n` */
      tokenWithEnter: {
        type: Boolean,
        default: void 0
      },
      // Motion
      choiceTransitionName: String,
      onToggleOpen: {
        type: Function
      },
      /** `onSearch` returns go next step boolean to check if need do toggle open */
      onSearch: Function,
      onSearchSubmit: Function,
      onRemove: Function,
      onInputKeyDown: {
        type: Function
      },
      /**
       * @private get real dom for trigger align.
       * This may be removed after React provides replacement of `findDOMNode`
       */
      domRef: Function
    },
    setup: function(c, a) {
      var v = a.expose, b = (0, g.default)(), _ = !1, N = (0, S.default)(0), L = (0, d.default)(N, 2), F = L[0], X = L[1], A = function(w) {
        var I = w.which;
        (I === p.default.UP || I === p.default.DOWN) && w.preventDefault(), c.onInputKeyDown && c.onInputKeyDown(w), I === p.default.ENTER && c.mode === "tags" && !_ && !c.open && c.onSearchSubmit(w.target.value), (0, l.isValidateOpenKey)(I) && c.onToggleOpen(!0);
      }, ee = function() {
        X(!0);
      }, x = null, O = function(w) {
        c.onSearch(w, !0, _) !== !1 && c.onToggleOpen(!0);
      }, R = function() {
        _ = !0;
      }, D = function(w) {
        _ = !1, c.mode !== "combobox" && O(w.target.value);
      }, E = function(w) {
        var I = w.target.value;
        if (c.tokenWithEnter && x && /[\r\n]/.test(x)) {
          var K = x.replace(/[\r\n]+$/, "").replace(/\r\n/g, " ").replace(/[\r\n]/g, " ");
          I = I.replace(K, x);
        }
        x = null, O(I);
      }, P = function(w) {
        var I = w.clipboardData, K = I.getData("text");
        x = K;
      }, m = function(w) {
        var I = w.target;
        if (I !== b.current) {
          var K = document.body.style.msTouchAction !== void 0;
          K ? setTimeout(function() {
            b.current.focus();
          }) : b.current.focus();
        }
      }, M = function(w) {
        var I = F();
        w.target !== b.current && !I && w.preventDefault(), (c.mode !== "combobox" && (!c.showSearch || !I) || !c.open) && (c.open && c.onSearch("", !0, !1), c.onToggleOpen());
      };
      return v({
        focus: function() {
          b.current.focus();
        },
        blur: function() {
          b.current.blur();
        }
      }), function() {
        var u = c.prefixCls, w = c.domRef, I = c.mode, K = {
          inputRef: b,
          onInputKeyDown: A,
          onInputMouseDown: ee,
          onInputChange: E,
          onInputPaste: P,
          onInputCompositionStart: R,
          onInputCompositionEnd: D
        }, J = I === "multiple" || I === "tags" ? (0, e.createVNode)(y.default, (0, o.default)((0, o.default)({}, c), K), null) : (0, e.createVNode)(s.default, (0, o.default)((0, o.default)({}, c), K), null);
        return (0, e.createVNode)("div", {
          ref: w,
          class: "".concat(u, "-selector"),
          onClick: m,
          onMousedown: M
        }, [J]);
      };
    }
  }), n = f;
  return dt.default = n, dt;
}
var Et = {}, Tn;
function Qa() {
  if (Tn)
    return Et;
  Tn = 1, Object.defineProperty(Et, "__esModule", {
    value: !0
  }), Et.default = e;
  var t = le;
  function e(o, d, p) {
    function y(s) {
      var l, S, g, r = s.target;
      r.shadowRoot && s.composed && (r = s.composedPath()[0] || r);
      var f = [(l = o[0]) === null || l === void 0 ? void 0 : l.value, (S = o[1]) === null || S === void 0 || (g = S.value) === null || g === void 0 ? void 0 : g.getPopupElement()];
      d.value && f.every(function(n) {
        return n && !n.contains(r) && n !== r;
      }) && p(!1);
    }
    (0, t.onMounted)(function() {
      window.addEventListener("mousedown", y);
    }), (0, t.onBeforeUnmount)(function() {
      window.removeEventListener("mousedown", y);
    });
  }
  return Et;
}
var qt = {}, Dn;
function Za() {
  if (Dn)
    return qt;
  Dn = 1, Object.defineProperty(qt, "__esModule", {
    value: !0
  }), qt.default = e;
  var t = le;
  function e() {
    var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 10, d = (0, t.ref)(!1), p, y = function() {
      clearTimeout(p);
    };
    (0, t.onMounted)(function() {
      y();
    });
    var s = function(S, g) {
      y(), p = setTimeout(function() {
        d.value = S, g && g();
      }, o);
    };
    return [d, s, y];
  }
  return qt;
}
var ht = {}, Nn;
function cn() {
  if (Nn)
    return ht;
  Nn = 1, Object.defineProperty(ht, "__esModule", {
    value: !0
  }), ht.default = d, ht.useProvideBaseSelectProps = o;
  var t = le, e = Symbol("BaseSelectContextKey");
  function o(p) {
    return (0, t.provide)(e, p);
  }
  function d() {
    return (0, t.inject)(e, {});
  }
  return ht;
}
var Lt = {}, Fn;
function pa() {
  if (Fn)
    return Lt;
  Fn = 1, Object.defineProperty(Lt, "__esModule", {
    value: !0
  }), Lt.toReactive = e;
  var t = le;
  function e(o) {
    if (!(0, t.isRef)(o))
      return (0, t.reactive)(o);
    var d = new Proxy({}, {
      get: function(y, s, l) {
        return Reflect.get(o.value, s, l);
      },
      set: function(y, s, l) {
        return o.value[s] = l, !0;
      },
      deleteProperty: function(y, s) {
        return Reflect.deleteProperty(o.value, s);
      },
      has: function(y, s) {
        return Reflect.has(o.value, s);
      },
      ownKeys: function() {
        return Object.keys(o.value);
      },
      getOwnPropertyDescriptor: function() {
        return {
          enumerable: !0,
          configurable: !0
        };
      }
    });
    return (0, t.reactive)(d);
  }
  return Lt;
}
var En;
function dn() {
  if (En)
    return ze;
  En = 1;
  var t = ue;
  Object.defineProperty(ze, "__esModule", {
    value: !0
  }), ze.default = ze.baseSelectPropsWithoutPrivate = void 0, ze.isMultiple = P;
  var e = le, o = t(Ke), d = t($e()), p = t(Vt()), y = t(nn()), s = t(jt()), l = t(Ve()), S = on(), g = t(ja()), r = t(Xa()), f = t(Qa()), n = t(Za()), i = t(un()), c = t(va()), a = cn(), v = t(He()), b = ut(), _ = t(Ua()), N = t(zt()), L = pa(), F = t(Ge()), X = t(Gt()), A = t(ln()), ee = ca(), x = ["prefixCls", "id", "open", "defaultOpen", "mode", "showSearch", "searchValue", "onSearch", "allowClear", "clearIcon", "showArrow", "inputIcon", "disabled", "loading", "getInputElement", "getPopupContainer", "placement", "animation", "transitionName", "dropdownStyle", "dropdownClassName", "dropdownMatchSelectWidth", "dropdownRender", "dropdownAlign", "showAction", "direction", "tokenSeparators", "tagRender", "optionLabelRender", "onPopupScroll", "onDropdownVisibleChange", "onFocus", "onBlur", "onKeyup", "onKeydown", "onMousedown", "onClear", "omitDomProps", "getRawInputElement", "displayValues", "onDisplayValuesChange", "emptyOptions", "activeDescendantId", "activeValue", "OptionList"], O = ["value", "onChange", "removeIcon", "placeholder", "autofocus", "maxTagCount", "maxTagTextLength", "maxTagPlaceholder", "choiceTransitionName", "onInputKeyDown", "onPopupScroll", "tabindex", "OptionList", "notFoundContent"], R = function() {
    return {
      prefixCls: String,
      id: String,
      omitDomProps: Array,
      // >>> Value
      displayValues: Array,
      onDisplayValuesChange: Function,
      // >>> Active
      /** Current dropdown list active item string value */
      activeValue: String,
      /** Link search input with target element */
      activeDescendantId: String,
      onActiveValueChange: Function,
      // >>> Search
      searchValue: String,
      /** Trigger onSearch, return false to prevent trigger open event */
      onSearch: Function,
      /** Trigger when search text match the `tokenSeparators`. Will provide split content */
      onSearchSplit: Function,
      maxLength: Number,
      OptionList: v.default.any,
      /** Tell if provided `options` is empty */
      emptyOptions: Boolean
    };
  }, D = function() {
    return {
      showSearch: {
        type: Boolean,
        default: void 0
      },
      tagRender: {
        type: Function
      },
      optionLabelRender: {
        type: Function
      },
      direction: {
        type: String
      },
      // MISC
      tabindex: Number,
      autofocus: Boolean,
      notFoundContent: v.default.any,
      placeholder: v.default.any,
      onClear: Function,
      choiceTransitionName: String,
      // >>> Mode
      mode: String,
      // >>> Status
      disabled: {
        type: Boolean,
        default: void 0
      },
      loading: {
        type: Boolean,
        default: void 0
      },
      // >>> Open
      open: {
        type: Boolean,
        default: void 0
      },
      defaultOpen: {
        type: Boolean,
        default: void 0
      },
      onDropdownVisibleChange: {
        type: Function
      },
      // >>> Customize Input
      /** @private Internal usage. Do not use in your production. */
      getInputElement: {
        type: Function
      },
      /** @private Internal usage. Do not use in your production. */
      getRawInputElement: {
        type: Function
      },
      // >>> Selector
      maxTagTextLength: Number,
      maxTagCount: {
        type: [String, Number]
      },
      maxTagPlaceholder: v.default.any,
      // >>> Search
      tokenSeparators: {
        type: Array
      },
      // >>> Icons
      allowClear: {
        type: Boolean,
        default: void 0
      },
      showArrow: {
        type: Boolean,
        default: void 0
      },
      inputIcon: v.default.any,
      /** Clear all icon */
      clearIcon: v.default.any,
      /** Selector remove icon */
      removeIcon: v.default.any,
      // >>> Dropdown
      animation: String,
      transitionName: String,
      dropdownStyle: {
        type: Object
      },
      dropdownClassName: String,
      dropdownMatchSelectWidth: {
        type: [Boolean, Number],
        default: void 0
      },
      dropdownRender: {
        type: Function
      },
      dropdownAlign: Object,
      placement: {
        type: String
      },
      getPopupContainer: {
        type: Function
      },
      // >>> Focus
      showAction: {
        type: Array
      },
      onBlur: {
        type: Function
      },
      onFocus: {
        type: Function
      },
      // >>> Rest Events
      onKeyup: Function,
      onKeydown: Function,
      onMousedown: Function,
      onPopupScroll: Function,
      onInputKeyDown: Function,
      onMouseenter: Function,
      onMouseleave: Function,
      onClick: Function
    };
  };
  ze.baseSelectPropsWithoutPrivate = D;
  var E = function() {
    return (0, l.default)((0, l.default)({}, R()), D());
  };
  function P(M) {
    return M === "tags" || M === "multiple";
  }
  var m = (0, e.defineComponent)({
    compatConfig: {
      MODE: 3
    },
    name: "BaseSelect",
    inheritAttrs: !1,
    props: (0, b.initDefaultProps)(E(), {
      showAction: [],
      notFoundContent: "Not Found"
    }),
    setup: function(u, w) {
      var I = w.attrs, K = w.expose, J = w.slots, U = (0, e.computed)(function() {
        return P(u.mode);
      }), Q = (0, e.computed)(function() {
        return u.showSearch !== void 0 ? u.showSearch : U.value || u.mode === "combobox";
      }), re = (0, e.ref)(!1);
      (0, e.onMounted)(function() {
        re.value = (0, _.default)();
      });
      var de = (0, A.default)(), ie = (0, e.ref)(null), W = (0, X.default)(), T = (0, e.ref)(null), Y = (0, e.ref)(null), k = (0, e.ref)(null), ae = (0, n.default)(), oe = (0, s.default)(ae, 3), Z = oe[0], me = oe[1], se = oe[2], Pe = function() {
        var h;
        (h = Y.value) === null || h === void 0 || h.focus();
      }, We = function() {
        var h;
        (h = Y.value) === null || h === void 0 || h.blur();
      };
      K({
        focus: Pe,
        blur: We,
        scrollTo: function(h) {
          var $;
          return ($ = k.value) === null || $ === void 0 ? void 0 : $.scrollTo(h);
        }
      });
      var Me = (0, e.computed)(function() {
        var j;
        if (u.mode !== "combobox")
          return u.searchValue;
        var h = (j = u.displayValues[0]) === null || j === void 0 ? void 0 : j.value;
        return typeof h == "string" || typeof h == "number" ? String(h) : "";
      }), _e = u.open !== void 0 ? u.open : u.defaultOpen, we = (0, e.ref)(_e), te = (0, e.ref)(_e), Te = function(h) {
        we.value = u.open !== void 0 ? u.open : h, te.value = we.value;
      };
      (0, e.watch)(function() {
        return u.open;
      }, function() {
        Te(u.open);
      });
      var Le = (0, e.computed)(function() {
        return !u.notFoundContent && u.emptyOptions;
      });
      (0, e.watchEffect)(function() {
        te.value = we.value, (u.disabled || Le.value && te.value && u.mode === "combobox") && (te.value = !1);
      });
      var ce = (0, e.computed)(function() {
        return Le.value ? !1 : te.value;
      }), ye = function(h) {
        var $ = h !== void 0 ? h : !te.value;
        we.value !== $ && !u.disabled && (Te($), u.onDropdownVisibleChange && u.onDropdownVisibleChange($));
      }, Be = (0, e.computed)(function() {
        return (u.tokenSeparators || []).some(function(j) {
          return [`
`, `\r
`].includes(j);
        });
      }), V = function(h, $, ge) {
        var ve, he = !0, H = h;
        (ve = u.onActiveValueChange) === null || ve === void 0 || ve.call(u, null);
        var C = ge ? null : (0, S.getSeparatedContent)(h, u.tokenSeparators);
        if (u.mode !== "combobox" && C) {
          var q;
          H = "", (q = u.onSearchSplit) === null || q === void 0 || q.call(u, C), ye(!1), he = !1;
        }
        return u.onSearch && Me.value !== H && u.onSearch(H, {
          source: $ ? "typing" : "effect"
        }), he;
      }, G = function(h) {
        var $;
        !h || !h.trim() || ($ = u.onSearch) === null || $ === void 0 || $.call(u, h, {
          source: "submit"
        });
      };
      (0, e.watch)(te, function() {
        !te.value && !U.value && u.mode !== "combobox" && V("", !1, !1);
      }, {
        immediate: !0,
        flush: "post"
      }), (0, e.watch)(function() {
        return u.disabled;
      }, function() {
        we.value && u.disabled && Te(!1);
      }, {
        immediate: !0
      });
      var fe = (0, c.default)(), pe = (0, s.default)(fe, 2), Ie = pe[0], Xe = pe[1], Ae = function(h) {
        var $, ge = Ie(), ve = h.which;
        if (ve === N.default.ENTER && (u.mode !== "combobox" && h.preventDefault(), te.value || ye(!0)), Xe(!!Me.value), ve === N.default.BACKSPACE && !ge && U.value && !Me.value && u.displayValues.length) {
          for (var he = (0, y.default)(u.displayValues), H = null, C = he.length - 1; C >= 0; C -= 1) {
            var q = he[C];
            if (!q.disabled) {
              he.splice(C, 1), H = q;
              break;
            }
          }
          H && u.onDisplayValuesChange(he, {
            type: "remove",
            values: [H]
          });
        }
        for (var B = arguments.length, ne = new Array(B > 1 ? B - 1 : 0), z = 1; z < B; z++)
          ne[z - 1] = arguments[z];
        if (te.value && k.value) {
          var Re;
          (Re = k.value).onKeydown.apply(Re, [h].concat(ne));
        }
        ($ = u.onKeydown) === null || $ === void 0 || $.call.apply($, [u, h].concat(ne));
      }, je = function(h) {
        for (var $ = arguments.length, ge = new Array($ > 1 ? $ - 1 : 0), ve = 1; ve < $; ve++)
          ge[ve - 1] = arguments[ve];
        if (te.value && k.value) {
          var he;
          (he = k.value).onKeyup.apply(he, [h].concat(ge));
        }
        u.onKeyup && u.onKeyup.apply(u, [h].concat(ge));
      }, Ce = function(h) {
        var $ = u.displayValues.filter(function(ge) {
          return ge !== h;
        });
        u.onDisplayValuesChange($, {
          type: "remove",
          values: [h]
        });
      }, Ue = (0, e.ref)(!1), be = function() {
        me(!0), u.disabled || (u.onFocus && !Ue.value && u.onFocus.apply(u, arguments), u.showAction && u.showAction.includes("focus") && ye(!0)), Ue.value = !0;
      }, xe = function() {
        if (me(!1, function() {
          Ue.value = !1, ye(!1);
        }), !u.disabled) {
          var h = Me.value;
          h && (u.mode === "tags" ? u.onSearch(h, {
            source: "submit"
          }) : u.mode === "multiple" && u.onSearch("", {
            source: "blur"
          })), u.onBlur && u.onBlur.apply(u, arguments);
        }
      };
      (0, e.provide)("VCSelectContainerEvent", {
        focus: be,
        blur: xe
      });
      var Oe = [];
      (0, e.onMounted)(function() {
        Oe.forEach(function(j) {
          return clearTimeout(j);
        }), Oe.splice(0, Oe.length);
      }), (0, e.onBeforeUnmount)(function() {
        Oe.forEach(function(j) {
          return clearTimeout(j);
        }), Oe.splice(0, Oe.length);
      });
      var De = function(h) {
        var $, ge, ve = h.target, he = ($ = T.value) === null || $ === void 0 ? void 0 : $.getPopupElement();
        if (he && he.contains(ve)) {
          var H = setTimeout(function() {
            var ne = Oe.indexOf(H);
            if (ne !== -1 && Oe.splice(ne, 1), se(), !re.value && !he.contains(document.activeElement)) {
              var z;
              (z = Y.value) === null || z === void 0 || z.focus();
            }
          });
          Oe.push(H);
        }
        for (var C = arguments.length, q = new Array(C > 1 ? C - 1 : 0), B = 1; B < C; B++)
          q[B - 1] = arguments[B];
        (ge = u.onMousedown) === null || ge === void 0 || ge.call.apply(ge, [u, h].concat(q));
      }, Ne = (0, e.ref)(null), Ee = (0, e.getCurrentInstance)(), at = function() {
        Ee.update();
      };
      return (0, e.onMounted)(function() {
        (0, e.watch)(ce, function() {
          if (ce.value) {
            var j, h = Math.ceil((j = ie.value) === null || j === void 0 ? void 0 : j.offsetWidth);
            Ne.value !== h && !Number.isNaN(h) && (Ne.value = h);
          }
        }, {
          immediate: !0,
          flush: "post"
        });
      }), (0, f.default)([ie, T], ce, ye), (0, a.useProvideBaseSelectProps)((0, L.toReactive)((0, l.default)((0, l.default)({}, (0, e.toRefs)(u)), {}, {
        open: te,
        triggerOpen: ce,
        showSearch: Q,
        multiple: U,
        toggleOpen: ye
      }))), function() {
        var j, h = (0, l.default)((0, l.default)({}, u), I), $ = h.prefixCls, ge = h.id;
        h.open, h.defaultOpen;
        var ve = h.mode;
        h.showSearch, h.searchValue, h.onSearch;
        var he = h.allowClear, H = h.clearIcon, C = h.showArrow, q = h.inputIcon, B = h.disabled, ne = h.loading, z = h.getInputElement, Re = h.getPopupContainer, qe = h.placement, Qe = h.animation, Se = h.transitionName, Ze = h.dropdownStyle, Xt = h.dropdownClassName, sn = h.dropdownMatchSelectWidth, lt = h.dropdownRender, ke = h.dropdownAlign;
        h.showAction;
        var rt = h.direction;
        h.tokenSeparators;
        var ya = h.tagRender, ba = h.optionLabelRender;
        h.onPopupScroll, h.onDropdownVisibleChange, h.onFocus, h.onBlur, h.onKeyup, h.onKeydown, h.onMousedown;
        var Qt = h.onClear, Zt = h.omitDomProps, vn = h.getRawInputElement, Tt = h.displayValues, Sa = h.onDisplayValuesChange, _a = h.emptyOptions, wa = h.activeDescendantId, Ca = h.activeValue, Oa = h.OptionList, Pa = (0, p.default)(h, x), pn = ve === "combobox" && z && z() || null, it = typeof vn == "function" && vn(), Jt = (0, l.default)({}, Pa), hn;
        it && (hn = function(Dt) {
          ye(Dt);
        }), O.forEach(function(Fe) {
          delete Jt[Fe];
        }), Zt == null || Zt.forEach(function(Fe) {
          delete Jt[Fe];
        });
        var mn = C !== void 0 ? C : ne || !U.value && ve !== "combobox", gn;
        mn && (gn = (0, e.createVNode)(i.default, {
          class: (0, F.default)("".concat($, "-arrow"), (0, d.default)({}, "".concat($, "-arrow-loading"), ne)),
          customizeIcon: q,
          customizeIconProps: {
            loading: ne,
            searchValue: Me.value,
            open: te.value,
            focused: Z.value,
            showSearch: Q.value
          }
        }, null));
        var yn, Ma = function() {
          Qt == null || Qt(), Sa([], {
            type: "clear",
            values: Tt
          }), V("", !1, !1);
        };
        !B && he && (Tt.length || Me.value) && (yn = (0, e.createVNode)(i.default, {
          class: "".concat($, "-clear"),
          onMousedown: Ma,
          customizeIcon: H
        }, {
          default: function() {
            return [(0, e.createTextVNode)("×")];
          }
        }));
        var Ia = (0, e.createVNode)(Oa, {
          ref: k
        }, (0, l.default)((0, l.default)({}, de.customSlots), {}, {
          option: J.option
        })), Ra = (0, F.default)($, I.class, (j = {}, (0, d.default)(j, "".concat($, "-focused"), Z.value), (0, d.default)(j, "".concat($, "-multiple"), U.value), (0, d.default)(j, "".concat($, "-single"), !U.value), (0, d.default)(j, "".concat($, "-allow-clear"), he), (0, d.default)(j, "".concat($, "-show-arrow"), mn), (0, d.default)(j, "".concat($, "-disabled"), B), (0, d.default)(j, "".concat($, "-loading"), ne), (0, d.default)(j, "".concat($, "-open"), te.value), (0, d.default)(j, "".concat($, "-customize-input"), pn), (0, d.default)(j, "".concat($, "-show-search"), Q.value), j)), bn = (0, e.createVNode)(g.default, {
          ref: T,
          disabled: B,
          prefixCls: $,
          visible: ce.value,
          popupElement: Ia,
          containerWidth: Ne.value,
          animation: Qe,
          transitionName: Se,
          dropdownStyle: Ze,
          dropdownClassName: Xt,
          direction: rt,
          dropdownMatchSelectWidth: sn,
          dropdownRender: lt,
          dropdownAlign: ke,
          placement: qe,
          getPopupContainer: Re,
          empty: _a,
          getTriggerDOMNode: function() {
            return W.current;
          },
          onPopupVisibleChange: hn,
          onPopupMouseEnter: at
        }, {
          default: function() {
            return it ? (0, b.isValidElement)(it) && (0, ee.cloneElement)(it, {
              ref: W
            }, !1, !0) : (0, e.createVNode)(r.default, (0, l.default)((0, l.default)({}, u), {}, {
              domRef: W,
              prefixCls: $,
              inputElement: pn,
              ref: Y,
              id: ge,
              showSearch: Q.value,
              mode: ve,
              activeDescendantId: wa,
              tagRender: ya,
              optionLabelRender: ba,
              values: Tt,
              open: te.value,
              onToggleOpen: ye,
              activeValue: Ca,
              searchValue: Me.value,
              onSearch: V,
              onSearchSubmit: G,
              onRemove: Ce,
              tokenWithEnter: Be.value
            }), null);
          }
        }), en;
        return it ? en = bn : en = (0, e.createVNode)("div", (0, l.default)((0, l.default)({}, Jt), {}, {
          class: Ra,
          ref: ie,
          onMousedown: De,
          onKeydown: Ae,
          onKeyup: je
        }), [Z.value && !te.value && (0, e.createVNode)("span", {
          style: {
            width: 0,
            height: 0,
            position: "absolute",
            overflow: "hidden",
            opacity: 0
          },
          "aria-live": "polite"
        }, ["".concat(Tt.map(function(Fe) {
          var Dt = Fe.label, xa = Fe.value;
          return ["number", "string"].includes((0, o.default)(Dt)) ? Dt : xa;
        }).join(", "))]), bn, gn, yn]), en;
      };
    }
  });
  return ze.default = m, ze;
}
var mt = {}, gt = {}, yt = {}, bt = {}, qn;
function Ja() {
  if (qn)
    return bt;
  qn = 1;
  var t = ue;
  Object.defineProperty(bt, "__esModule", {
    value: !0
  }), bt.default = void 0;
  var e = le, o = t($e()), d = t(Ve()), p = t(Ge()), y = t(ka()), s = function(g, r) {
    var f, n = g.height, i = g.offset, c = g.prefixCls, a = g.onInnerResize, v = r.slots, b = {}, _ = {
      display: "flex",
      flexDirection: "column"
    };
    return i !== void 0 && (b = {
      height: "".concat(n, "px"),
      position: "relative",
      overflow: "hidden"
    }, _ = (0, d.default)((0, d.default)({}, _), {}, {
      transform: "translateY(".concat(i, "px)"),
      position: "absolute",
      left: 0,
      right: 0,
      top: 0
    })), (0, e.createVNode)("div", {
      style: b
    }, [(0, e.createVNode)(y.default, {
      onResize: function(L) {
        var F = L.offsetHeight;
        F && a && a();
      }
    }, {
      default: function() {
        return [(0, e.createVNode)("div", {
          style: _,
          class: (0, p.default)((0, o.default)({}, "".concat(c, "-holder-inner"), c))
        }, [(f = v.default) === null || f === void 0 ? void 0 : f.call(v)])];
      }
    })]);
  };
  s.displayName = "Filter", s.inheritAttrs = !1, s.props = {
    prefixCls: String,
    /** Virtual filler height. Should be `count * itemMinHeight` */
    height: Number,
    /** Set offset of visible items. Should be the top of start item position */
    offset: Number,
    onInnerResize: Function
  };
  var l = s;
  return bt.default = l, bt;
}
var St = {}, Ln;
function er() {
  if (Ln)
    return St;
  Ln = 1, Object.defineProperty(St, "__esModule", {
    value: !0
  }), St.default = void 0;
  var t = le, e = ut(), o = function(y, s) {
    var l, S = y.setRef, g = s.slots, r = (0, e.flattenChildren)((l = g.default) === null || l === void 0 ? void 0 : l.call(g));
    return r && r.length ? (0, t.cloneVNode)(r[0], {
      ref: S
    }) : r;
  };
  o.props = {
    setRef: {
      type: Function,
      default: function() {
      }
    }
  };
  var d = o;
  return St.default = d, St;
}
var _t = {}, Bn;
function tr() {
  if (Bn)
    return _t;
  Bn = 1;
  var t = ue;
  Object.defineProperty(_t, "__esModule", {
    value: !0
  }), _t.default = void 0;
  var e = le, o = t($e()), d = t(an()), p = t(Ge()), y = t(Gt()), s = t(Yt()), l = t(da()), S = 20;
  function g(f) {
    return "touches" in f ? f.touches[0].pageY : f.pageY;
  }
  var r = (0, e.defineComponent)({
    compatConfig: {
      MODE: 3
    },
    name: "ScrollBar",
    inheritAttrs: !1,
    props: {
      prefixCls: String,
      scrollTop: Number,
      scrollHeight: Number,
      height: Number,
      count: Number,
      onScroll: {
        type: Function
      },
      onStartMove: {
        type: Function
      },
      onStopMove: {
        type: Function
      }
    },
    setup: function() {
      return {
        moveRaf: null,
        scrollbarRef: (0, y.default)(),
        thumbRef: (0, y.default)(),
        visibleTimeout: null,
        state: (0, e.reactive)({
          dragging: !1,
          pageY: null,
          startTop: null,
          visible: !1
        })
      };
    },
    watch: {
      scrollTop: {
        handler: function() {
          this.delayHidden();
        },
        flush: "post"
      }
    },
    mounted: function() {
      var n, i;
      (n = this.scrollbarRef.current) === null || n === void 0 || n.addEventListener("touchstart", this.onScrollbarTouchStart, l.default ? {
        passive: !1
      } : !1), (i = this.thumbRef.current) === null || i === void 0 || i.addEventListener("touchstart", this.onMouseDown, l.default ? {
        passive: !1
      } : !1);
    },
    beforeUnmount: function() {
      this.removeEvents(), clearTimeout(this.visibleTimeout);
    },
    methods: {
      delayHidden: function() {
        var n = this;
        clearTimeout(this.visibleTimeout), this.state.visible = !0, this.visibleTimeout = setTimeout(function() {
          n.state.visible = !1;
        }, 2e3);
      },
      onScrollbarTouchStart: function(n) {
        n.preventDefault();
      },
      onContainerMouseDown: function(n) {
        n.stopPropagation(), n.preventDefault();
      },
      // ======================= Clean =======================
      patchEvents: function() {
        window.addEventListener("mousemove", this.onMouseMove), window.addEventListener("mouseup", this.onMouseUp), this.thumbRef.current.addEventListener("touchmove", this.onMouseMove, l.default ? {
          passive: !1
        } : !1), this.thumbRef.current.addEventListener("touchend", this.onMouseUp);
      },
      removeEvents: function() {
        window.removeEventListener("mousemove", this.onMouseMove), window.removeEventListener("mouseup", this.onMouseUp), this.scrollbarRef.current.removeEventListener("touchstart", this.onScrollbarTouchStart, l.default ? {
          passive: !1
        } : !1), this.thumbRef.current && (this.thumbRef.current.removeEventListener("touchstart", this.onMouseDown, l.default ? {
          passive: !1
        } : !1), this.thumbRef.current.removeEventListener("touchmove", this.onMouseMove, l.default ? {
          passive: !1
        } : !1), this.thumbRef.current.removeEventListener("touchend", this.onMouseUp)), s.default.cancel(this.moveRaf);
      },
      // ======================= Thumb =======================
      onMouseDown: function(n) {
        var i = this.$props.onStartMove;
        (0, d.default)(this.state, {
          dragging: !0,
          pageY: g(n),
          startTop: this.getTop()
        }), i(), this.patchEvents(), n.stopPropagation(), n.preventDefault();
      },
      onMouseMove: function(n) {
        var i = this.state, c = i.dragging, a = i.pageY, v = i.startTop, b = this.$props.onScroll;
        if (s.default.cancel(this.moveRaf), c) {
          var _ = g(n) - a, N = v + _, L = this.getEnableScrollRange(), F = this.getEnableHeightRange(), X = F ? N / F : 0, A = Math.ceil(X * L);
          this.moveRaf = (0, s.default)(function() {
            b(A);
          });
        }
      },
      onMouseUp: function() {
        var n = this.$props.onStopMove;
        this.state.dragging = !1, n(), this.removeEvents();
      },
      // ===================== Calculate =====================
      getSpinHeight: function() {
        var n = this.$props, i = n.height, c = n.count, a = i / c * 10;
        return a = Math.max(a, S), a = Math.min(a, i / 2), Math.floor(a);
      },
      getEnableScrollRange: function() {
        var n = this.$props, i = n.scrollHeight, c = n.height;
        return i - c || 0;
      },
      getEnableHeightRange: function() {
        var n = this.$props.height, i = this.getSpinHeight();
        return n - i || 0;
      },
      getTop: function() {
        var n = this.$props.scrollTop, i = this.getEnableScrollRange(), c = this.getEnableHeightRange();
        if (n === 0 || i === 0)
          return 0;
        var a = n / i;
        return a * c;
      },
      // Not show scrollbar when height is large than scrollHeight
      showScroll: function() {
        var n = this.$props, i = n.height, c = n.scrollHeight;
        return c > i;
      }
    },
    render: function() {
      var n = this.state, i = n.dragging, c = n.visible, a = this.$props.prefixCls, v = this.getSpinHeight() + "px", b = this.getTop() + "px", _ = this.showScroll(), N = _ && c;
      return (0, e.createVNode)("div", {
        ref: this.scrollbarRef,
        class: (0, p.default)("".concat(a, "-scrollbar"), (0, o.default)({}, "".concat(a, "-scrollbar-show"), _)),
        style: {
          width: "8px",
          top: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: N ? void 0 : "none"
        },
        onMousedown: this.onContainerMouseDown,
        onMousemove: this.delayHidden
      }, [(0, e.createVNode)("div", {
        ref: this.thumbRef,
        class: (0, p.default)("".concat(a, "-scrollbar-thumb"), (0, o.default)({}, "".concat(a, "-scrollbar-thumb-moving"), i)),
        style: {
          width: "100%",
          height: v,
          top: b,
          left: 0,
          position: "absolute",
          background: "rgba(0, 0, 0, 0.5)",
          borderRadius: "99px",
          cursor: "pointer",
          userSelect: "none"
        },
        onMousedown: this.onMouseDown
      }, null)]);
    }
  });
  return _t.default = r, _t;
}
var Bt = {}, An;
function nr() {
  if (An)
    return Bt;
  An = 1;
  var t = ue;
  Object.defineProperty(Bt, "__esModule", {
    value: !0
  }), Bt.default = d;
  var e = le, o = t(Yt());
  function d(p, y, s, l) {
    var S = /* @__PURE__ */ new Map(), g = /* @__PURE__ */ new Map(), r = (0, e.ref)(Symbol("update"));
    (0, e.watch)(p, function() {
      r.value = Symbol("update");
    });
    var f = void 0;
    function n() {
      o.default.cancel(f);
    }
    function i() {
      n(), f = (0, o.default)(function() {
        S.forEach(function(a, v) {
          if (a && a.offsetParent) {
            var b = a.offsetHeight;
            g.get(v) !== b && (r.value = Symbol("update"), g.set(v, a.offsetHeight));
          }
        });
      });
    }
    function c(a, v) {
      var b = y(a), _ = S.get(b);
      v ? (S.set(b, v.$el || v), i()) : S.delete(b), !_ != !v && (v ? s == null || s(a) : l == null || l(a));
    }
    return (0, e.onUnmounted)(function() {
      n();
    }), [c, i, g, r];
  }
  return Bt;
}
var At = {}, Un;
function ar() {
  if (Un)
    return At;
  Un = 1;
  var t = ue;
  Object.defineProperty(At, "__esModule", {
    value: !0
  }), At.default = d;
  var e = t(Ke), o = t(Yt());
  function d(p, y, s, l, S, g, r, f) {
    var n;
    return function(i) {
      if (i == null) {
        f();
        return;
      }
      o.default.cancel(n);
      var c = y.value, a = l.itemHeight;
      if (typeof i == "number")
        r(i);
      else if (i && (0, e.default)(i) === "object") {
        var v, b = i.align;
        "index" in i ? v = i.index : v = c.findIndex(function(F) {
          return S(F) === i.key;
        });
        var _ = i.offset, N = _ === void 0 ? 0 : _, L = function F(X, A) {
          if (!(X < 0 || !p.value)) {
            var ee = p.value.clientHeight, x = !1, O = A;
            if (ee) {
              for (var R = A || b, D = 0, E = 0, P = 0, m = Math.min(c.length, v), M = 0; M <= m; M += 1) {
                var u = S(c[M]);
                E = D;
                var w = s.get(u);
                P = E + (w === void 0 ? a : w), D = P, M === v && w === void 0 && (x = !0);
              }
              var I = p.value.scrollTop, K = null;
              switch (R) {
                case "top":
                  K = E - N;
                  break;
                case "bottom":
                  K = P - ee + N;
                  break;
                default: {
                  var J = I + ee;
                  E < I ? O = "top" : P > J && (O = "bottom");
                }
              }
              K !== null && K !== I && r(K);
            }
            n = (0, o.default)(function() {
              x && g(), F(X - 1, O);
            }, 2);
          }
        };
        L(5);
      }
    };
  }
  return At;
}
var Ut = {}, wt = {}, kn;
function rr() {
  if (kn)
    return wt;
  kn = 1;
  var t = ue;
  Object.defineProperty(wt, "__esModule", {
    value: !0
  }), wt.default = void 0;
  var e = t(Ke), o = (typeof navigator > "u" ? "undefined" : (0, e.default)(navigator)) === "object" && /Firefox/i.test(navigator.userAgent), d = o;
  return wt.default = d, wt;
}
var Ct = {}, Kn;
function ha() {
  if (Kn)
    return Ct;
  Kn = 1, Object.defineProperty(Ct, "__esModule", {
    value: !0
  }), Ct.default = void 0;
  var t = function(o, d) {
    var p = !1, y = null;
    function s() {
      clearTimeout(y), p = !0, y = setTimeout(function() {
        p = !1;
      }, 50);
    }
    return function(l) {
      var S = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, g = (
        // Pass origin wheel when on the top
        l < 0 && o.value || // Pass origin wheel when on the bottom
        l > 0 && d.value
      );
      return S && g ? (clearTimeout(y), p = !1) : (!g || p) && s(), !p && g;
    };
  };
  return Ct.default = t, Ct;
}
var $n;
function or() {
  if ($n)
    return Ut;
  $n = 1;
  var t = ue;
  Object.defineProperty(Ut, "__esModule", {
    value: !0
  }), Ut.default = p;
  var e = t(Yt()), o = t(rr()), d = t(ha());
  function p(y, s, l, S) {
    var g = 0, r = null, f = null, n = !1, i = (0, d.default)(s, l);
    function c(v) {
      if (y.value) {
        e.default.cancel(r);
        var b = v.deltaY;
        g += b, f = b, !i(b) && (o.default || v.preventDefault(), r = (0, e.default)(function() {
          var _ = n ? 10 : 1;
          S(g * _), g = 0;
        }));
      }
    }
    function a(v) {
      y.value && (n = v.detail === f);
    }
    return [c, a];
  }
  return Ut;
}
var kt = {}, Hn;
function ur() {
  if (Hn)
    return kt;
  Hn = 1, Object.defineProperty(kt, "__esModule", {
    value: !0
  }), kt.default = o;
  var t = le, e = 14 / 15;
  function o(d, p, y) {
    var s = !1, l = 0, S = null, g = null, r = function() {
      S && (S.removeEventListener("touchmove", f), S.removeEventListener("touchend", n));
    }, f = function(v) {
      if (s) {
        var b = Math.ceil(v.touches[0].pageY), _ = l - b;
        l = b, y(_) && v.preventDefault(), clearInterval(g), g = setInterval(function() {
          _ *= e, (!y(_, !0) || Math.abs(_) <= 0.1) && clearInterval(g);
        }, 16);
      }
    }, n = function() {
      s = !1, r();
    }, i = function(v) {
      r(), v.touches.length === 1 && !s && (s = !0, l = Math.ceil(v.touches[0].pageY), S = v.target, S.addEventListener("touchmove", f, {
        passive: !1
      }), S.addEventListener("touchend", n));
    }, c = function() {
    };
    (0, t.onMounted)(function() {
      document.addEventListener("touchmove", c, {
        passive: !1
      }), (0, t.watch)(d, function(a) {
        p.value.removeEventListener("touchstart", i), r(), clearInterval(g), a && p.value.addEventListener("touchstart", i, {
          passive: !1
        });
      }, {
        immediate: !0
      });
    }), (0, t.onBeforeUnmount)(function() {
      document.removeEventListener("touchmove", c);
    });
  }
  return kt;
}
var Wn;
function lr() {
  if (Wn)
    return yt;
  Wn = 1;
  var t = ue;
  Object.defineProperty(yt, "__esModule", {
    value: !0
  }), yt.default = void 0;
  var e = le, o = t(Vt()), d = t($e()), p = t(Ve()), y = t(an()), s = t(jt()), l = t(Ja()), S = t(er()), g = t(tr()), r = t(nr()), f = t(ar()), n = t(or()), i = t(ur()), c = t(ha()), a = t(He()), v = t(Ge()), b = t(da()), _ = ["prefixCls", "height", "itemHeight", "fullHeight", "data", "itemKey", "virtual", "component", "onScroll", "children", "style", "class"], N = [], L = {
    overflowY: "auto",
    overflowAnchor: "none"
  };
  function F(ee, x, O, R, D, E) {
    var P = E.getKey;
    return ee.slice(x, O + 1).map(function(m, M) {
      var u = x + M, w = D(m, u, {
        // style: status === 'MEASURE_START' ? { visibility: 'hidden' } : {},
      }), I = P(m);
      return (0, e.createVNode)(S.default, {
        key: I,
        setRef: function(J) {
          return R(m, J);
        }
      }, {
        default: function() {
          return [w];
        }
      });
    });
  }
  var X = (0, e.defineComponent)({
    compatConfig: {
      MODE: 3
    },
    name: "List",
    inheritAttrs: !1,
    props: {
      prefixCls: String,
      data: a.default.array,
      height: Number,
      itemHeight: Number,
      /** If not match virtual scroll condition, Set List still use height of container. */
      fullHeight: {
        type: Boolean,
        default: void 0
      },
      itemKey: {
        type: [String, Number, Function],
        required: !0
      },
      component: {
        type: [String, Object]
      },
      /** Set `false` will always use real scroll instead of virtual one */
      virtual: {
        type: Boolean,
        default: void 0
      },
      children: Function,
      onScroll: Function,
      onMousedown: Function,
      onMouseenter: Function,
      onVisibleChange: Function
    },
    setup: function(x, O) {
      var R = O.expose, D = (0, e.computed)(function() {
        var V = x.height, G = x.itemHeight, fe = x.virtual;
        return !!(fe !== !1 && V && G);
      }), E = (0, e.computed)(function() {
        var V = x.height, G = x.itemHeight, fe = x.data;
        return D.value && fe && G * fe.length > V;
      }), P = (0, e.reactive)({
        scrollTop: 0,
        scrollMoving: !1
      }), m = (0, e.computed)(function() {
        return x.data || N;
      }), M = (0, e.shallowRef)([]);
      (0, e.watch)(m, function() {
        M.value = (0, e.toRaw)(m.value).slice();
      }, {
        immediate: !0
      });
      var u = (0, e.shallowRef)(function(V) {
      });
      (0, e.watch)(function() {
        return x.itemKey;
      }, function(V) {
        typeof V == "function" ? u.value = V : u.value = function(G) {
          return G == null ? void 0 : G[V];
        };
      }, {
        immediate: !0
      });
      var w = (0, e.ref)(), I = (0, e.ref)(), K = (0, e.ref)(), J = function(G) {
        return u.value(G);
      }, U = {
        getKey: J
      };
      function Q(V) {
        var G;
        typeof V == "function" ? G = V(P.scrollTop) : G = V;
        var fe = Z(G);
        w.value && (w.value.scrollTop = fe), P.scrollTop = fe;
      }
      var re = (0, r.default)(M, J, null, null), de = (0, s.default)(re, 4), ie = de[0], W = de[1], T = de[2], Y = de[3], k = (0, e.reactive)({
        scrollHeight: void 0,
        start: 0,
        end: 0,
        offset: void 0
      }), ae = (0, e.ref)(0);
      (0, e.onMounted)(function() {
        (0, e.nextTick)(function() {
          var V;
          ae.value = ((V = I.value) === null || V === void 0 ? void 0 : V.offsetHeight) || 0;
        });
      }), (0, e.onUpdated)(function() {
        (0, e.nextTick)(function() {
          var V;
          ae.value = ((V = I.value) === null || V === void 0 ? void 0 : V.offsetHeight) || 0;
        });
      }), (0, e.watch)([D, M], function() {
        D.value || (0, y.default)(k, {
          scrollHeight: void 0,
          start: 0,
          end: M.value.length - 1,
          offset: void 0
        });
      }, {
        immediate: !0
      }), (0, e.watch)([D, M, ae, E], function() {
        D.value && !E.value && (0, y.default)(k, {
          scrollHeight: ae.value,
          start: 0,
          end: M.value.length - 1,
          offset: void 0
        }), w.value && (P.scrollTop = w.value.scrollTop);
      }, {
        immediate: !0
      }), (0, e.watch)([E, D, function() {
        return P.scrollTop;
      }, M, Y, function() {
        return x.height;
      }, ae], function() {
        if (!(!D.value || !E.value)) {
          for (var V = 0, G, fe, pe, Ie = M.value.length, Xe = M.value, Ae = P.scrollTop, je = x.itemHeight, Ce = x.height, Ue = Ae + Ce, be = 0; be < Ie; be += 1) {
            var xe = Xe[be], Oe = J(xe), De = T.get(Oe);
            De === void 0 && (De = je);
            var Ne = V + De;
            G === void 0 && Ne >= Ae && (G = be, fe = V), pe === void 0 && Ne > Ue && (pe = be), V = Ne;
          }
          G === void 0 && (G = 0, fe = 0, pe = Math.ceil(Ce / je)), pe === void 0 && (pe = Ie - 1), pe = Math.min(pe + 1, Ie), (0, y.default)(k, {
            scrollHeight: V,
            start: G,
            end: pe,
            offset: fe
          });
        }
      }, {
        immediate: !0
      });
      var oe = (0, e.computed)(function() {
        return k.scrollHeight - x.height;
      });
      function Z(V) {
        var G = V;
        return Number.isNaN(oe.value) || (G = Math.min(G, oe.value)), G = Math.max(G, 0), G;
      }
      var me = (0, e.computed)(function() {
        return P.scrollTop <= 0;
      }), se = (0, e.computed)(function() {
        return P.scrollTop >= oe.value;
      }), Pe = (0, c.default)(me, se);
      function We(V) {
        var G = V;
        Q(G);
      }
      function Me(V) {
        var G, fe = V.currentTarget.scrollTop;
        fe !== P.scrollTop && Q(fe), (G = x.onScroll) === null || G === void 0 || G.call(x, V);
      }
      var _e = (0, n.default)(D, me, se, function(V) {
        Q(function(G) {
          var fe = G + V;
          return fe;
        });
      }), we = (0, s.default)(_e, 2), te = we[0], Te = we[1];
      (0, i.default)(D, w, function(V, G) {
        return Pe(V, G) ? !1 : (te({
          preventDefault: function() {
          },
          deltaY: V
        }), !0);
      });
      function Le(V) {
        D.value && V.preventDefault();
      }
      var ce = function() {
        w.value && (w.value.removeEventListener("wheel", te, b.default ? {
          passive: !1
        } : !1), w.value.removeEventListener("DOMMouseScroll", Te), w.value.removeEventListener("MozMousePixelScroll", Le));
      };
      (0, e.watchEffect)(function() {
        (0, e.nextTick)(function() {
          w.value && (ce(), w.value.addEventListener("wheel", te, b.default ? {
            passive: !1
          } : !1), w.value.addEventListener("DOMMouseScroll", Te), w.value.addEventListener("MozMousePixelScroll", Le));
        });
      }), (0, e.onBeforeUnmount)(function() {
        ce();
      });
      var ye = (0, f.default)(w, M, T, x, J, W, Q, function() {
        var V;
        (V = K.value) === null || V === void 0 || V.delayHidden();
      });
      R({
        scrollTo: ye
      });
      var Be = (0, e.computed)(function() {
        var V = null;
        return x.height && (V = (0, p.default)((0, d.default)({}, x.fullHeight ? "height" : "maxHeight", x.height + "px"), L), D.value && (V.overflowY = "hidden", P.scrollMoving && (V.pointerEvents = "none"))), V;
      });
      return (0, e.watch)([function() {
        return k.start;
      }, function() {
        return k.end;
      }, M], function() {
        if (x.onVisibleChange) {
          var V = M.value.slice(k.start, k.end + 1);
          x.onVisibleChange(V, M.value);
        }
      }, {
        flush: "post"
      }), {
        state: P,
        mergedData: M,
        componentStyle: Be,
        onFallbackScroll: Me,
        onScrollBar: We,
        componentRef: w,
        useVirtual: D,
        calRes: k,
        collectHeight: W,
        setInstance: ie,
        sharedConfig: U,
        scrollBarRef: K,
        fillerInnerRef: I
      };
    },
    render: function() {
      var x = this, O = (0, p.default)((0, p.default)({}, this.$props), this.$attrs), R = O.prefixCls, D = R === void 0 ? "rc-virtual-list" : R, E = O.height;
      O.itemHeight, O.fullHeight, O.data, O.itemKey, O.virtual;
      var P = O.component, m = P === void 0 ? "div" : P;
      O.onScroll;
      var M = O.children, u = M === void 0 ? this.$slots.default : M, w = O.style, I = O.class, K = (0, o.default)(O, _), J = (0, v.default)(D, I), U = this.state.scrollTop, Q = this.calRes, re = Q.scrollHeight, de = Q.offset, ie = Q.start, W = Q.end, T = this.componentStyle, Y = this.onFallbackScroll, k = this.onScrollBar, ae = this.useVirtual, oe = this.collectHeight, Z = this.sharedConfig, me = this.setInstance, se = this.mergedData;
      return (0, e.createVNode)("div", (0, p.default)({
        style: (0, p.default)((0, p.default)({}, w), {}, {
          position: "relative"
        }),
        class: J
      }, K), [(0, e.createVNode)(m, {
        class: "".concat(D, "-holder"),
        style: T,
        ref: "componentRef",
        onScroll: Y
      }, {
        default: function() {
          return [(0, e.createVNode)(l.default, {
            prefixCls: D,
            height: re,
            offset: de,
            onInnerResize: oe,
            ref: "fillerInnerRef"
          }, {
            default: function() {
              return F(se, ie, W, me, u, Z);
            }
          })];
        }
      }), ae && (0, e.createVNode)(g.default, {
        ref: "scrollBarRef",
        prefixCls: D,
        scrollTop: U,
        height: E,
        scrollHeight: re,
        count: se.length,
        onScroll: k,
        onStartMove: function() {
          x.state.scrollMoving = !0;
        },
        onStopMove: function() {
          x.state.scrollMoving = !1;
        }
      }, null)]);
    }
  }), A = X;
  return yt.default = A, yt;
}
var jn;
function ir() {
  if (jn)
    return gt;
  jn = 1;
  var t = ue;
  Object.defineProperty(gt, "__esModule", {
    value: !0
  }), gt.default = void 0;
  var e = t(lr()), o = e.default;
  return gt.default = o, gt;
}
var Kt = {}, zn;
function cr() {
  if (zn)
    return Kt;
  zn = 1, Object.defineProperty(Kt, "__esModule", {
    value: !0
  }), Kt.isPlatformMac = t;
  function t() {
    return /(mac\sos|macintosh)/i.test(navigator.appVersion);
  }
  return Kt;
}
var Ot = {}, Yn;
function ma() {
  if (Yn)
    return Ot;
  Yn = 1, Object.defineProperty(Ot, "__esModule", {
    value: !0
  }), Ot.default = d, Ot.useProvideSelectProps = o;
  var t = le, e = Symbol("SelectContextKey");
  function o(p) {
    return (0, t.provide)(e, p);
  }
  function d() {
    return (0, t.inject)(e, {});
  }
  return Ot;
}
var Gn;
function dr() {
  if (Gn)
    return mt;
  Gn = 1;
  var t = ue;
  Object.defineProperty(mt, "__esModule", {
    value: !0
  }), mt.default = void 0;
  var e = le, o = t($e()), d = t(Vt()), p = t(Ve()), y = t(un()), s = t(zt()), l = t(Ge()), S = t(rn()), g = ut(), r = t(Gt()), f = t(ir()), n = t(Ka()), i = cr(), c = t(fa()), a = t(cn()), v = t(ma()), b = ["disabled", "title", "children", "style", "class", "className"];
  function _(F) {
    return typeof F == "string" || typeof F == "number";
  }
  var N = (0, e.defineComponent)({
    compatConfig: {
      MODE: 3
    },
    name: "OptionList",
    inheritAttrs: !1,
    slots: ["option"],
    setup: function(X, A) {
      var ee = A.expose, x = A.slots, O = (0, a.default)(), R = (0, v.default)(), D = (0, e.computed)(function() {
        return "".concat(O.prefixCls, "-item");
      }), E = (0, n.default)(function() {
        return R.flattenOptions;
      }, [function() {
        return O.open;
      }, function() {
        return R.flattenOptions;
      }], function(W) {
        return W[0];
      }), P = (0, r.default)(), m = function(T) {
        T.preventDefault();
      }, M = function(T) {
        P.current && P.current.scrollTo(typeof T == "number" ? {
          index: T
        } : T);
      }, u = function(T) {
        for (var Y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1, k = E.value.length, ae = 0; ae < k; ae += 1) {
          var oe = (T + ae * Y + k) % k, Z = E.value[oe], me = Z.group, se = Z.data;
          if (!me && !se.disabled)
            return oe;
        }
        return -1;
      }, w = (0, e.reactive)({
        activeIndex: u(0)
      }), I = function(T) {
        var Y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
        w.activeIndex = T;
        var k = {
          source: Y ? "keyboard" : "mouse"
        }, ae = E.value[T];
        if (!ae) {
          R.onActiveValue(null, -1, k);
          return;
        }
        R.onActiveValue(ae.value, T, k);
      };
      (0, e.watch)([function() {
        return E.value.length;
      }, function() {
        return O.searchValue;
      }], function() {
        I(R.defaultActiveFirstOption !== !1 ? u(0) : -1);
      }, {
        immediate: !0
      });
      var K = function(T) {
        return R.rawValues.has(T) && O.mode !== "combobox";
      };
      (0, e.watch)([function() {
        return O.open;
      }, function() {
        return O.searchValue;
      }], function() {
        if (!O.multiple && O.open && R.rawValues.size === 1) {
          var W = Array.from(R.rawValues)[0], T = (0, e.toRaw)(E.value).findIndex(function(Y) {
            var k = Y.data;
            return k[R.fieldNames.value] === W;
          });
          T !== -1 && (I(T), (0, e.nextTick)(function() {
            M(T);
          }));
        }
        O.open && (0, e.nextTick)(function() {
          var Y;
          (Y = P.current) === null || Y === void 0 || Y.scrollTo(void 0);
        });
      }, {
        immediate: !0,
        flush: "post"
      });
      var J = function(T) {
        T !== void 0 && R.onSelect(T, {
          selected: !R.rawValues.has(T)
        }), O.multiple || O.toggleOpen(!1);
      }, U = function(T) {
        return typeof T.label == "function" ? T.label() : T.label;
      };
      function Q(W) {
        var T = E.value[W];
        if (!T)
          return null;
        var Y = T.data || {}, k = Y.value, ae = T.group, oe = (0, S.default)(Y, !0), Z = U(T);
        return T ? (0, e.createVNode)("div", (0, p.default)((0, p.default)({
          "aria-label": typeof Z == "string" && !ae ? Z : null
        }, oe), {}, {
          key: W,
          role: ae ? "presentation" : "option",
          id: "".concat(O.id, "_list_").concat(W),
          "aria-selected": K(k)
        }), [k]) : null;
      }
      var re = function(T) {
        var Y = T.which, k = T.ctrlKey;
        switch (Y) {
          case s.default.N:
          case s.default.P:
          case s.default.UP:
          case s.default.DOWN: {
            var ae = 0;
            if (Y === s.default.UP ? ae = -1 : Y === s.default.DOWN ? ae = 1 : (0, i.isPlatformMac)() && k && (Y === s.default.N ? ae = 1 : Y === s.default.P && (ae = -1)), ae !== 0) {
              var oe = u(w.activeIndex + ae, ae);
              M(oe), I(oe, !0);
            }
            break;
          }
          case s.default.ENTER: {
            var Z = E.value[w.activeIndex];
            Z && !Z.data.disabled ? J(Z.value) : J(void 0), O.open && T.preventDefault();
            break;
          }
          case s.default.ESC:
            O.toggleOpen(!1), O.open && T.stopPropagation();
        }
      }, de = function() {
      }, ie = function(T) {
        M(T);
      };
      return ee({
        onKeydown: re,
        onKeyup: de,
        scrollTo: ie
      }), function() {
        var W = O.id, T = O.notFoundContent, Y = O.onPopupScroll, k = R.menuItemSelectedIcon, ae = R.fieldNames, oe = R.virtual, Z = R.listHeight, me = R.listItemHeight, se = x.option, Pe = w.activeIndex, We = Object.keys(ae).map(function(Me) {
          return ae[Me];
        });
        return E.value.length === 0 ? (0, e.createVNode)("div", {
          role: "listbox",
          id: "".concat(W, "_list"),
          class: "".concat(D.value, "-empty"),
          onMousedown: m
        }, [T]) : (0, e.createVNode)(e.Fragment, null, [(0, e.createVNode)("div", {
          role: "listbox",
          id: "".concat(W, "_list"),
          style: {
            height: 0,
            width: 0,
            overflow: "hidden"
          }
        }, [Q(Pe - 1), Q(Pe), Q(Pe + 1)]), (0, e.createVNode)(f.default, {
          itemKey: "key",
          ref: P,
          data: E.value,
          height: Z,
          itemHeight: me,
          fullHeight: !1,
          onMousedown: m,
          onScroll: Y,
          virtual: oe
        }, {
          default: function(_e, we) {
            var te, Te = _e.group, Le = _e.groupOption, ce = _e.data, ye = _e.value, Be = ce.key, V = typeof _e.label == "function" ? _e.label() : _e.label;
            if (Te) {
              var G, fe = (G = ce.title) !== null && G !== void 0 ? G : _(V) && V;
              return (0, e.createVNode)("div", {
                class: (0, l.default)(D.value, "".concat(D.value, "-group")),
                title: fe
              }, [se ? se(ce) : V !== void 0 ? V : Be]);
            }
            var pe = ce.disabled, Ie = ce.title;
            ce.children;
            var Xe = ce.style, Ae = ce.class, je = ce.className, Ce = (0, d.default)(ce, b), Ue = (0, c.default)(Ce, We), be = K(ye), xe = "".concat(D.value, "-option"), Oe = (0, l.default)(D.value, xe, Ae, je, (te = {}, (0, o.default)(te, "".concat(xe, "-grouped"), Le), (0, o.default)(te, "".concat(xe, "-active"), Pe === we && !pe), (0, o.default)(te, "".concat(xe, "-disabled"), pe), (0, o.default)(te, "".concat(xe, "-selected"), be), te)), De = U(_e), Ne = !k || typeof k == "function" || be, Ee = typeof De == "number" ? De : De || ye, at = _(Ee) ? Ee.toString() : void 0;
            return Ie !== void 0 && (at = Ie), (0, e.createVNode)("div", (0, p.default)((0, p.default)({}, Ue), {}, {
              "aria-selected": be,
              class: Oe,
              title: at,
              onMousemove: function(h) {
                Ce.onMousemove && Ce.onMousemove(h), !(Pe === we || pe) && I(we);
              },
              onClick: function(h) {
                pe || J(ye), Ce.onClick && Ce.onClick(h);
              },
              style: Xe
            }), [(0, e.createVNode)("div", {
              class: "".concat(xe, "-content")
            }, [se ? se(ce) : Ee]), (0, g.isValidElement)(k) || be, Ne && (0, e.createVNode)(y.default, {
              class: "".concat(D.value, "-option-state"),
              customizeIcon: k,
              customizeIconProps: {
                isSelected: be
              }
            }, {
              default: function() {
                return [be ? "✓" : null];
              }
            })]);
          }
        })]);
      };
    }
  }), L = N;
  return mt.default = L, mt;
}
var $t = {}, Ht = {}, Xn;
function ga() {
  if (Xn)
    return Ht;
  Xn = 1;
  var t = ue;
  Object.defineProperty(Ht, "__esModule", {
    value: !0
  }), Ht.convertChildrenToData = s;
  var e = t(Ve()), o = t(Vt()), d = ut(), p = ["value", "disabled"];
  function y(l) {
    var S = l.key, g = l.children, r = l.props, f = r.value, n = r.disabled, i = (0, o.default)(r, p), c = g == null ? void 0 : g.default;
    return (0, e.default)({
      key: S,
      value: f !== void 0 ? f : S,
      children: c,
      disabled: n || n === ""
    }, i);
  }
  function s(l) {
    var S = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, g = (0, d.flattenChildren)(l).map(function(r, f) {
      var n;
      if (!(0, d.isValidElement)(r) || !r.type)
        return null;
      var i = r.type.isSelectOptGroup, c = r.key, a = r.children, v = r.props;
      if (S || !i)
        return y(r);
      var b = a && a.default ? a.default() : void 0, _ = (v == null ? void 0 : v.label) || ((n = a.label) === null || n === void 0 ? void 0 : n.call(a)) || c;
      return (0, e.default)((0, e.default)({
        key: "__RC_SELECT_GRP__".concat(c === null ? f : String(c), "__")
      }, v), {}, {
        label: _,
        options: s(b || [])
      });
    }).filter(function(r) {
      return r;
    });
    return g;
  }
  return Ht;
}
var Qn;
function fr() {
  if (Qn)
    return $t;
  Qn = 1, Object.defineProperty($t, "__esModule", {
    value: !0
  }), $t.default = o;
  var t = le, e = ga();
  function o(d, p, y) {
    var s = (0, t.shallowRef)(), l = (0, t.shallowRef)(), S = (0, t.shallowRef)(), g = (0, t.shallowRef)([]);
    return (0, t.watch)([d, p], function() {
      d.value ? g.value = (0, t.toRaw)(d.value).slice() : g.value = (0, e.convertChildrenToData)(p.value);
    }, {
      immediate: !0,
      deep: !0
    }), (0, t.watchEffect)(function() {
      var r = g.value, f = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), i = y.value;
      function c(a) {
        for (var v = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, b = 0; b < a.length; b += 1) {
          var _ = a[b];
          !_[i.options] || v ? (f.set(_[i.value], _), n.set(_[i.label], _)) : c(_[i.options], !0);
        }
      }
      c(r), s.value = r, l.value = f, S.value = n;
    }), {
      options: s,
      valueOptions: l,
      labelOptions: S
    };
  }
  return $t;
}
var nt = {}, Zn;
function sr() {
  if (Zn)
    return nt;
  Zn = 1;
  var t = ue;
  Object.defineProperty(nt, "__esModule", {
    value: !0
  }), nt.default = s, nt.getUUID = y, nt.isBrowserClient = void 0;
  var e = le, o = t(Va()), d = 0, p = process.env.NODE_ENV !== "test" && (0, o.default)();
  nt.isBrowserClient = p;
  function y() {
    var l;
    return p ? (l = d, d += 1) : l = "TEST_OR_SSR", l;
  }
  function s() {
    var l = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : (0, e.ref)(""), S = "rc_select_".concat(y());
    return l.value || S;
  }
  return nt;
}
var Pt = {}, Ye = {}, Jn;
function fn() {
  if (Jn)
    return Ye;
  Jn = 1, Object.defineProperty(Ye, "__esModule", {
    value: !0
  }), Ye.isClient = Ye.isBrowserClient = void 0, Ye.toArray = t;
  function t(d) {
    return Array.isArray(d) ? d : d !== void 0 ? [d] : [];
  }
  var e = typeof window < "u" && window.document && window.document.documentElement;
  Ye.isClient = e;
  var o = process.env.NODE_ENV !== "test" && e;
  return Ye.isBrowserClient = o, Ye;
}
var ea;
function vr() {
  if (ea)
    return Pt;
  ea = 1;
  var t = ue, e = Ke;
  Object.defineProperty(Pt, "__esModule", {
    value: !0
  }), Pt.default = void 0;
  var o = t(Ke), d = g(ia()), p = ga(), y = fn(), s = ut(), l = dn();
  function S(n) {
    if (typeof WeakMap != "function")
      return null;
    var i = /* @__PURE__ */ new WeakMap(), c = /* @__PURE__ */ new WeakMap();
    return (S = function(v) {
      return v ? c : i;
    })(n);
  }
  function g(n, i) {
    if (!i && n && n.__esModule)
      return n;
    if (n === null || e(n) !== "object" && typeof n != "function")
      return { default: n };
    var c = S(i);
    if (c && c.has(n))
      return c.get(n);
    var a = {}, v = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var b in n)
      if (b !== "default" && Object.prototype.hasOwnProperty.call(n, b)) {
        var _ = v ? Object.getOwnPropertyDescriptor(n, b) : null;
        _ && (_.get || _.set) ? Object.defineProperty(a, b, _) : a[b] = n[b];
      }
    return a.default = n, c && c.set(n, a), a;
  }
  function r(n) {
    var i = n.mode, c = n.options, a = n.children, v = n.backfill, b = n.allowClear, _ = n.placeholder, N = n.getInputElement, L = n.showSearch, F = n.onSearch, X = n.defaultOpen, A = n.autofocus, ee = n.labelInValue, x = n.value, O = n.inputValue, R = n.optionLabelProp, D = (0, l.isMultiple)(i), E = L !== void 0 ? L : D || i === "combobox", P = c || (0, p.convertChildrenToData)(a);
    if ((0, d.default)(i !== "tags" || P.every(function(u) {
      return !u.disabled;
    }), "Please avoid setting option to disabled in tags mode since user can always type text as tag."), (0, d.default)(i !== "combobox" || !R, "`combobox` mode not support `optionLabelProp`. Please set `value` on Option directly."), (0, d.default)(i === "combobox" || !v, "`backfill` only works with `combobox` mode."), (0, d.default)(i === "combobox" || !N, "`getInputElement` only work with `combobox` mode."), (0, d.noteOnce)(i !== "combobox" || !N || !b || !_, "Customize `getInputElement` should customize clear and placeholder logic instead of configuring `allowClear` and `placeholder`."), F && !E && i !== "combobox" && i !== "tags" && (0, d.default)(!1, "`onSearch` should work with `showSearch` instead of use alone."), (0, d.noteOnce)(!X || A, "`defaultOpen` makes Select open without focus which means it will not close by click outside. You can set `autofocus` if needed."), x != null) {
      var m = (0, y.toArray)(x);
      (0, d.default)(!ee || m.every(function(u) {
        return (0, o.default)(u) === "object" && ("key" in u || "value" in u);
      }), "`value` should in shape of `{ value: string | number, label?: any }` when you set `labelInValue` to `true`"), (0, d.default)(!D || Array.isArray(x), "`value` should be array when `mode` is `multiple` or `tags`");
    }
    if (a) {
      var M = null;
      a.some(function(u) {
        if (!(0, s.isValidElement)(u) || !u.type)
          return !1;
        var w = u.type;
        if (w.isSelectOption)
          return !1;
        if (w.isSelectOptGroup) {
          var I, K = ((I = u.children) === null || I === void 0 ? void 0 : I.default()) || [], J = K.every(function(U) {
            return !(0, s.isValidElement)(U) || !u.type || U.type.isSelectOption ? !0 : (M = U.type, !1);
          });
          return !J;
        }
        return M = w, !0;
      }), M && (0, d.default)(!1, "`children` should be `Select.Option` or `Select.OptGroup` instead of `".concat(M.displayName || M.name || M, "`.")), (0, d.default)(O === void 0, "`inputValue` is deprecated, please use `searchValue` instead.");
    }
  }
  var f = r;
  return Pt.default = f, Pt;
}
var Mt = {}, ta;
function pr() {
  if (ta)
    return Mt;
  ta = 1;
  var t = ue;
  Object.defineProperty(Mt, "__esModule", {
    value: !0
  }), Mt.default = void 0;
  var e = t($e()), o = t(Ve()), d = fn(), p = on(), y = le;
  function s(S, g) {
    return (0, d.toArray)(S).join("").toUpperCase().includes(g);
  }
  var l = function(g, r, f, n, i) {
    return (0, y.computed)(function() {
      var c = f.value, a = i == null ? void 0 : i.value, v = n == null ? void 0 : n.value;
      if (!c || v === !1)
        return g.value;
      var b = r.value, _ = b.options, N = b.label, L = b.value, F = [], X = typeof v == "function", A = c.toUpperCase(), ee = X ? v : function(O, R) {
        return a ? s(R[a], A) : R[_] ? s(R[N !== "children" ? N : "label"], A) : s(R[L], A);
      }, x = X ? function(O) {
        return (0, p.injectPropsWithOption)(O);
      } : function(O) {
        return O;
      };
      return g.value.forEach(function(O) {
        if (O[_]) {
          var R = ee(c, x(O));
          if (R)
            F.push(O);
          else {
            var D = O[_].filter(function(E) {
              return ee(c, x(E));
            });
            D.length && F.push((0, o.default)((0, o.default)({}, O), {}, (0, e.default)({}, _, D)));
          }
          return;
        }
        ee(c, x(O)) && F.push(O);
      }), F;
    });
  };
  return Mt.default = l, Mt;
}
var It = {}, na;
function hr() {
  if (na)
    return It;
  na = 1;
  var t = ue;
  Object.defineProperty(It, "__esModule", {
    value: !0
  }), It.default = void 0;
  var e = t(Ve()), o = le, d = function(y, s) {
    var l = (0, o.shallowRef)({
      values: /* @__PURE__ */ new Map(),
      options: /* @__PURE__ */ new Map()
    }), S = (0, o.computed)(function() {
      var r = l.value, f = r.values, n = r.options, i = y.value.map(function(v) {
        if (v.label === void 0) {
          var b;
          return (0, e.default)((0, e.default)({}, v), {}, {
            label: (b = f.get(v.value)) === null || b === void 0 ? void 0 : b.label
          });
        }
        return v;
      }), c = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map();
      return i.forEach(function(v) {
        c.set(v.value, v), a.set(v.value, s.value.get(v.value) || n.get(v.value));
      }), l.value.values = c, l.value.options = a, i;
    }), g = function(f) {
      return s.value.get(f) || l.value.options.get(f);
    };
    return [S, g];
  };
  return It.default = d, It;
}
var aa;
function mr() {
  if (aa)
    return ot;
  aa = 1;
  var t = ue, e = Ke;
  Object.defineProperty(ot, "__esModule", {
    value: !0
  }), ot.default = void 0, ot.selectProps = R;
  var o = le, d = t(nn()), p = t($e()), y = t(jt()), s = t(Ke), l = t(Ve()), S = x(dn()), g = t(dr()), r = t(fr()), f = ma(), n = t(sr()), i = on(), c = t(vr()), a = fn(), v = t(pr()), b = t(hr()), _ = t(He()), N = ut(), L = t($a()), F = t(Ha()), X = pa(), A = t(fa());
  function ee(P) {
    if (typeof WeakMap != "function")
      return null;
    var m = /* @__PURE__ */ new WeakMap(), M = /* @__PURE__ */ new WeakMap();
    return (ee = function(w) {
      return w ? M : m;
    })(P);
  }
  function x(P, m) {
    if (!m && P && P.__esModule)
      return P;
    if (P === null || e(P) !== "object" && typeof P != "function")
      return { default: P };
    var M = ee(m);
    if (M && M.has(P))
      return M.get(P);
    var u = {}, w = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var I in P)
      if (I !== "default" && Object.prototype.hasOwnProperty.call(P, I)) {
        var K = w ? Object.getOwnPropertyDescriptor(P, I) : null;
        K && (K.get || K.set) ? Object.defineProperty(u, I, K) : u[I] = P[I];
      }
    return u.default = P, M && M.set(P, u), u;
  }
  var O = ["inputValue"];
  function R() {
    return (0, l.default)((0, l.default)({}, (0, S.baseSelectPropsWithoutPrivate)()), {}, {
      prefixCls: String,
      id: String,
      backfill: {
        type: Boolean,
        default: void 0
      },
      // >>> Field Names
      fieldNames: Object,
      // >>> Search
      /** @deprecated Use `searchValue` instead */
      inputValue: String,
      searchValue: String,
      onSearch: Function,
      autoClearSearchValue: {
        type: Boolean,
        default: void 0
      },
      // >>> Select
      onSelect: Function,
      onDeselect: Function,
      // >>> Options
      /**
       * In Select, `false` means do nothing.
       * In TreeSelect, `false` will highlight match item.
       * It's by design.
       */
      filterOption: {
        type: [Boolean, Function],
        default: void 0
      },
      filterSort: Function,
      optionFilterProp: String,
      optionLabelProp: String,
      options: Array,
      defaultActiveFirstOption: {
        type: Boolean,
        default: void 0
      },
      virtual: {
        type: Boolean,
        default: void 0
      },
      listHeight: Number,
      listItemHeight: Number,
      // >>> Icon
      menuItemSelectedIcon: _.default.any,
      mode: String,
      labelInValue: {
        type: Boolean,
        default: void 0
      },
      value: _.default.any,
      defaultValue: _.default.any,
      onChange: Function,
      children: Array
    });
  }
  function D(P) {
    return !P || (0, s.default)(P) !== "object";
  }
  var E = (0, o.defineComponent)({
    compatConfig: {
      MODE: 3
    },
    name: "Select",
    inheritAttrs: !1,
    props: (0, N.initDefaultProps)(R(), {
      prefixCls: "vc-select",
      autoClearSearchValue: !0,
      listHeight: 200,
      listItemHeight: 20,
      dropdownMatchSelectWidth: !0
    }),
    setup: function(m, M) {
      var u = M.expose, w = M.attrs, I = M.slots, K = (0, n.default)((0, o.toRef)(m, "id")), J = (0, o.computed)(function() {
        return (0, S.isMultiple)(m.mode);
      }), U = (0, o.computed)(function() {
        return !!(!m.options && m.children);
      }), Q = (0, o.computed)(function() {
        return m.filterOption === void 0 && m.mode === "combobox" ? !1 : m.filterOption;
      }), re = (0, o.computed)(function() {
        return (0, i.fillFieldNames)(m.fieldNames, U.value);
      }), de = (0, L.default)("", {
        value: (0, o.computed)(function() {
          return m.searchValue !== void 0 ? m.searchValue : m.inputValue;
        }),
        postState: function(C) {
          return C || "";
        }
      }), ie = (0, y.default)(de, 2), W = ie[0], T = ie[1], Y = (0, r.default)((0, o.toRef)(m, "options"), (0, o.toRef)(m, "children"), re), k = Y.valueOptions, ae = Y.labelOptions, oe = Y.options, Z = function(C) {
        var q = (0, a.toArray)(C);
        return q.map(function(B) {
          var ne, z, Re, qe;
          if (D(B))
            ne = B;
          else {
            var Qe;
            Re = B.key, z = B.label, ne = (Qe = B.value) !== null && Qe !== void 0 ? Qe : Re;
          }
          var Se = k.value.get(ne);
          if (Se) {
            var Ze;
            z === void 0 && (z = Se == null ? void 0 : Se[m.optionLabelProp || re.value.label]), Re === void 0 && (Re = (Ze = Se == null ? void 0 : Se.key) !== null && Ze !== void 0 ? Ze : ne), qe = Se == null ? void 0 : Se.disabled;
          }
          return {
            label: z,
            value: ne,
            key: Re,
            disabled: qe,
            option: Se
          };
        });
      }, me = (0, L.default)(m.defaultValue, {
        value: (0, o.toRef)(m, "value")
      }), se = (0, y.default)(me, 2), Pe = se[0], We = se[1], Me = (0, o.computed)(function() {
        var H, C = Z(Pe.value);
        return m.mode === "combobox" && !((H = C[0]) !== null && H !== void 0 && H.value) ? [] : C;
      }), _e = (0, b.default)(Me, k), we = (0, y.default)(_e, 2), te = we[0], Te = we[1], Le = (0, o.computed)(function() {
        if (!m.mode && te.value.length === 1) {
          var H = te.value[0];
          if (H.value === null && (H.label === null || H.label === void 0))
            return [];
        }
        return te.value.map(function(C) {
          var q;
          return (0, l.default)((0, l.default)({}, C), {}, {
            label: (q = typeof C.label == "function" ? C.label() : C.label) !== null && q !== void 0 ? q : C.value
          });
        });
      }), ce = (0, o.computed)(function() {
        return new Set(te.value.map(function(H) {
          return H.value;
        }));
      });
      (0, o.watchEffect)(function() {
        if (m.mode === "combobox") {
          var H, C = (H = te.value[0]) === null || H === void 0 ? void 0 : H.value;
          C != null && T(String(C));
        }
      }, {
        flush: "post"
      });
      var ye = function(C, q) {
        var B, ne = q ?? C;
        return B = {}, (0, p.default)(B, re.value.value, C), (0, p.default)(B, re.value.label, ne), B;
      }, Be = (0, o.shallowRef)();
      (0, o.watchEffect)(function() {
        if (m.mode !== "tags") {
          Be.value = oe.value;
          return;
        }
        var H = oe.value.slice(), C = function(B) {
          return k.value.has(B);
        };
        (0, d.default)(te.value).sort(function(q, B) {
          return q.value < B.value ? -1 : 1;
        }).forEach(function(q) {
          var B = q.value;
          C(B) || H.push(ye(B, q.label));
        }), Be.value = H;
      });
      var V = (0, v.default)(Be, re, W, Q, (0, o.toRef)(m, "optionFilterProp")), G = (0, o.computed)(function() {
        return m.mode !== "tags" || !W.value || V.value.some(function(H) {
          return H[m.optionFilterProp || "value"] === W.value;
        }) ? V.value : [ye(W.value)].concat((0, d.default)(V.value));
      }), fe = (0, o.computed)(function() {
        return m.filterSort ? (0, d.default)(G.value).sort(function(H, C) {
          return m.filterSort(H, C);
        }) : G.value;
      }), pe = (0, o.computed)(function() {
        return (0, i.flattenOptions)(fe.value, {
          fieldNames: re.value,
          childrenAsData: U.value
        });
      }), Ie = function(C) {
        var q = Z(C);
        if (We(q), m.onChange && // Trigger event only when value changed
        (q.length !== te.value.length || q.some(function(z, Re) {
          var qe;
          return ((qe = te.value[Re]) === null || qe === void 0 ? void 0 : qe.value) !== (z == null ? void 0 : z.value);
        }))) {
          var B = m.labelInValue ? q.map(function(z) {
            return (0, l.default)((0, l.default)({}, z), {}, {
              originLabel: z.label,
              label: typeof z.label == "function" ? z.label() : z.label
            });
          }) : q.map(function(z) {
            return z.value;
          }), ne = q.map(function(z) {
            return (0, i.injectPropsWithOption)(Te(z.value));
          });
          m.onChange(
            // Value
            J.value ? B : B[0],
            // Option
            J.value ? ne : ne[0]
          );
        }
      }, Xe = (0, F.default)(null), Ae = (0, y.default)(Xe, 2), je = Ae[0], Ce = Ae[1], Ue = (0, F.default)(0), be = (0, y.default)(Ue, 2), xe = be[0], Oe = be[1], De = (0, o.computed)(function() {
        return m.defaultActiveFirstOption !== void 0 ? m.defaultActiveFirstOption : m.mode !== "combobox";
      }), Ne = function(C, q) {
        var B = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, ne = B.source, z = ne === void 0 ? "keyboard" : ne;
        Oe(q), m.backfill && m.mode === "combobox" && C !== null && z === "keyboard" && Ce(String(C));
      }, Ee = function(C, q) {
        var B = function() {
          var lt, ke = Te(C), rt = ke == null ? void 0 : ke[re.value.label];
          return [m.labelInValue ? {
            label: typeof rt == "function" ? rt() : rt,
            originLabel: rt,
            value: C,
            key: (lt = ke == null ? void 0 : ke.key) !== null && lt !== void 0 ? lt : C
          } : C, (0, i.injectPropsWithOption)(ke)];
        };
        if (q && m.onSelect) {
          var ne = B(), z = (0, y.default)(ne, 2), Re = z[0], qe = z[1];
          m.onSelect(Re, qe);
        } else if (!q && m.onDeselect) {
          var Qe = B(), Se = (0, y.default)(Qe, 2), Ze = Se[0], Xt = Se[1];
          m.onDeselect(Ze, Xt);
        }
      }, at = function(C, q) {
        var B, ne = J.value ? q.selected : !0;
        ne ? B = J.value ? [].concat((0, d.default)(te.value), [C]) : [C] : B = te.value.filter(function(z) {
          return z.value !== C;
        }), Ie(B), Ee(C, ne), m.mode === "combobox" ? Ce("") : (!J.value || m.autoClearSearchValue) && (T(""), Ce(""));
      }, j = function(C, q) {
        Ie(C), (q.type === "remove" || q.type === "clear") && q.values.forEach(function(B) {
          Ee(B.value, !1);
        });
      }, h = function(C, q) {
        if (T(C), Ce(null), q.source === "submit") {
          var B = (C || "").trim();
          if (B) {
            var ne = Array.from(new Set([].concat((0, d.default)(ce.value), [B])));
            Ie(ne), Ee(B, !0), T("");
          }
          return;
        }
        if (q.source !== "blur") {
          var z;
          m.mode === "combobox" && Ie(C), (z = m.onSearch) === null || z === void 0 || z.call(m, C);
        }
      }, $ = function(C) {
        var q = C;
        m.mode !== "tags" && (q = C.map(function(ne) {
          var z = ae.value.get(ne);
          return z == null ? void 0 : z.value;
        }).filter(function(ne) {
          return ne !== void 0;
        }));
        var B = Array.from(new Set([].concat((0, d.default)(ce.value), (0, d.default)(q))));
        Ie(B), B.forEach(function(ne) {
          Ee(ne, !0);
        });
      }, ge = (0, o.computed)(function() {
        return m.virtual !== !1 && m.dropdownMatchSelectWidth !== !1;
      });
      (0, f.useProvideSelectProps)((0, X.toReactive)((0, l.default)((0, l.default)({}, Y), {}, {
        flattenOptions: pe,
        onActiveValue: Ne,
        defaultActiveFirstOption: De,
        onSelect: at,
        menuItemSelectedIcon: (0, o.toRef)(m, "menuItemSelectedIcon"),
        rawValues: ce,
        fieldNames: re,
        virtual: ge,
        listHeight: (0, o.toRef)(m, "listHeight"),
        listItemHeight: (0, o.toRef)(m, "listItemHeight"),
        childrenAsData: U
      }))), process.env.NODE_ENV !== "production" && (0, o.watchEffect)(function() {
        (0, c.default)(m);
      }, {
        flush: "post"
      });
      var ve = (0, o.ref)();
      u({
        focus: function() {
          var C;
          (C = ve.value) === null || C === void 0 || C.focus();
        },
        blur: function() {
          var C;
          (C = ve.value) === null || C === void 0 || C.blur();
        },
        scrollTo: function(C) {
          var q;
          (q = ve.value) === null || q === void 0 || q.scrollTo(C);
        }
      });
      var he = (0, o.computed)(function() {
        return (0, A.default)(m, [
          "id",
          "mode",
          "prefixCls",
          "backfill",
          "fieldNames",
          // Search
          "inputValue",
          "searchValue",
          "onSearch",
          "autoClearSearchValue",
          // Select
          "onSelect",
          "onDeselect",
          "dropdownMatchSelectWidth",
          // Options
          "filterOption",
          "filterSort",
          "optionFilterProp",
          "optionLabelProp",
          "options",
          "children",
          "defaultActiveFirstOption",
          "menuItemSelectedIcon",
          "virtual",
          "listHeight",
          "listItemHeight",
          // Value
          "value",
          "defaultValue",
          "labelInValue",
          "onChange"
        ]);
      });
      return function() {
        return (0, o.createVNode)(S.default, (0, l.default)((0, l.default)((0, l.default)({}, he.value), w), {}, {
          id: K,
          prefixCls: m.prefixCls,
          ref: ve,
          omitDomProps: O,
          mode: m.mode,
          displayValues: Le.value,
          onDisplayValuesChange: j,
          searchValue: W.value,
          onSearch: h,
          onSearchSplit: $,
          dropdownMatchSelectWidth: m.dropdownMatchSelectWidth,
          OptionList: g.default,
          emptyOptions: !pe.value.length,
          activeValue: je.value,
          activeDescendantId: "".concat(K, "_list_").concat(xe.value)
        }), I);
      };
    }
  });
  return ot.default = E, ot;
}
var Rt = {}, ra;
function gr() {
  if (ra)
    return Rt;
  ra = 1, Object.defineProperty(Rt, "__esModule", {
    value: !0
  }), Rt.default = void 0;
  var t = function() {
    return null;
  };
  t.isSelectOption = !0, t.displayName = "ASelectOption";
  var e = t;
  return Rt.default = e, Rt;
}
var xt = {}, oa;
function yr() {
  if (oa)
    return xt;
  oa = 1, Object.defineProperty(xt, "__esModule", {
    value: !0
  }), xt.default = void 0;
  var t = function() {
    return null;
  };
  t.isSelectOptGroup = !0, t.displayName = "ASelectOptGroup";
  var e = t;
  return xt.default = e, xt;
}
var ua;
function Lr() {
  return ua || (ua = 1, function(t) {
    var e = ue, o = Ke;
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), Object.defineProperty(t, "BaseSelect", {
      enumerable: !0,
      get: function() {
        return s.default;
      }
    }), Object.defineProperty(t, "OptGroup", {
      enumerable: !0,
      get: function() {
        return y.default;
      }
    }), Object.defineProperty(t, "Option", {
      enumerable: !0,
      get: function() {
        return p.default;
      }
    }), t.default = void 0, Object.defineProperty(t, "selectProps", {
      enumerable: !0,
      get: function() {
        return d.selectProps;
      }
    }), Object.defineProperty(t, "useBaseProps", {
      enumerable: !0,
      get: function() {
        return l.default;
      }
    });
    var d = g(mr()), p = e(gr()), y = e(yr()), s = e(dn()), l = e(cn());
    function S(f) {
      if (typeof WeakMap != "function")
        return null;
      var n = /* @__PURE__ */ new WeakMap(), i = /* @__PURE__ */ new WeakMap();
      return (S = function(a) {
        return a ? i : n;
      })(f);
    }
    function g(f, n) {
      if (!n && f && f.__esModule)
        return f;
      if (f === null || o(f) !== "object" && typeof f != "function")
        return { default: f };
      var i = S(n);
      if (i && i.has(f))
        return i.get(f);
      var c = {}, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var v in f)
        if (v !== "default" && Object.prototype.hasOwnProperty.call(f, v)) {
          var b = a ? Object.getOwnPropertyDescriptor(f, v) : null;
          b && (b.get || b.set) ? Object.defineProperty(c, v, b) : c[v] = f[v];
        }
      return c.default = f, i && i.set(f, c), c;
    }
    var r = d.default;
    t.default = r;
  }(tn)), tn;
}
var Wt = {}, la;
function Br() {
  if (la)
    return Wt;
  la = 1;
  var t = ue;
  Object.defineProperty(Wt, "__esModule", {
    value: !0
  }), Wt.default = S;
  var e = le, o = t(Wa()), d = t(Ta()), p = t(Ea()), y = t(Da()), s = t(Na()), l = t(Ba());
  function S(g) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, f = g.loading, n = g.multiple, i = g.prefixCls, c = g.suffixIcon || r.suffixIcon && r.suffixIcon(), a = g.clearIcon || r.clearIcon && r.clearIcon(), v = g.menuItemSelectedIcon || r.menuItemSelectedIcon && r.menuItemSelectedIcon(), b = g.removeIcon || r.removeIcon && r.removeIcon(), _ = a;
    a || (_ = (0, e.createVNode)(s.default, null, null));
    var N = null;
    if (c !== void 0)
      N = c;
    else if (f)
      N = (0, e.createVNode)(d.default, {
        spin: !0
      }, null);
    else {
      var L = "".concat(i, "-suffix");
      N = function(ee) {
        var x = ee.open, O = ee.showSearch;
        return x && O ? (0, e.createVNode)(l.default, {
          class: L
        }, null) : (0, e.createVNode)(o.default, {
          class: L
        }, null);
      };
    }
    var F = null;
    v !== void 0 ? F = v : n ? F = (0, e.createVNode)(p.default, null, null) : F = null;
    var X = null;
    return b !== void 0 ? X = b : X = (0, e.createVNode)(y.default, null, null), {
      clearIcon: _,
      suffixIcon: N,
      itemIcon: F,
      removeIcon: X
    };
  }
  return Wt;
}
export {
  Br as a,
  dn as b,
  sr as c,
  Lr as r
};
