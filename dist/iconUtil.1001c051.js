import { t as tn, b as Ve, M as ia, k as le, r as $e, a as Vt, e as He, d as Ye, l as nn, c as jt, s as ut, u as Va, v as Ta, f as Da, K as Na } from "./useConfigInject.fdc04e2e.js";
import { _ as Ke } from "./index.1fa3133f.js";
import { r as ue } from "./_vue_commonjs-external.cdc460b2.js";
import { r as Fa, a as Ea } from "./CheckOutlined.69455364.js";
import { d as qa, g as La } from "./useMergedState.94fe30d0.js";
import { r as zt } from "./KeyCode.93922cee.js";
import { r as ca } from "./vnode.716a0aad.js";
import { r as Ba, a as Aa } from "./SearchOutlined.c837e04b.js";
import { r as an } from "./pickAttrs.65eceb8b.js";
import { r as Ua } from "./index.8a2670ef.js";
import { r as ka } from "./isMobile.73c6cf20.js";
import { r as Ka } from "./index.704db3ff.js";
import { r as rn } from "./raf.f4e1fc4f.js";
import { d as da } from "./Portal.a423630d.js";
import { r as $a } from "./useMemo.4b130cf0.js";
import { r as fa } from "./omit.ba8a174d.js";
import { r as Ha } from "./useState.0fa93a30.js";
import { r as Wa } from "./DownOutlined.62799cd5.js";
var en = {}, ot = {}, je = {}, Je = {}, Sn;
function on() {
  if (Sn)
    return Je;
  Sn = 1;
  var t = le.exports;
  Object.defineProperty(Je, "__esModule", {
    value: !0
  }), Je.fillFieldNames = s, Je.flattenOptions = c, Je.getSeparatedContent = y, Je.injectPropsWithOption = b;
  var e = t(tn()), i = t(Fa()), d = t(Ve()), v = ia();
  function g(r, f) {
    var n = r.key, o;
    return "value" in r && (o = r.value), n != null ? n : o !== void 0 ? o : "rc-index-key-".concat(f);
  }
  function s(r, f) {
    var n = r || {}, o = n.label, u = n.value, a = n.options;
    return {
      label: o || (f ? "children" : "label"),
      value: u || "value",
      options: a || "options"
    };
  }
  function c(r) {
    var f = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = f.fieldNames, o = f.childrenAsData, u = [], a = s(n, !1), h = a.label, S = a.value, _ = a.options;
    function N(L, F) {
      L.forEach(function(X) {
        var A = X[h];
        if (F || !(_ in X)) {
          var ee = X[S];
          u.push({
            key: g(X, u.length),
            groupOption: F,
            data: X,
            label: A,
            value: ee
          });
        } else {
          var x = A;
          x === void 0 && o && (x = X.label), u.push({
            key: g(X, u.length),
            group: !0,
            data: X,
            label: x
          }), N(X[_], !0);
        }
      });
    }
    return N(r, !1), u;
  }
  function b(r) {
    var f = (0, d.default)({}, r);
    return "props" in f || Object.defineProperty(f, "props", {
      get: function() {
        return (0, v.warning)(!1, "Return type is option instead of Option instance. Please read value directly instead of reading from `props`."), f;
      }
    }), f;
  }
  function y(r, f) {
    if (!f || !f.length)
      return null;
    var n = !1;
    function o(a, h) {
      var S = (0, i.default)(h), _ = S[0], N = S.slice(1);
      if (!_)
        return [a];
      var L = a.split(_);
      return n = n || L.length > 1, L.reduce(function(F, X) {
        return [].concat((0, e.default)(F), (0, e.default)(o(X, N)));
      }, []).filter(function(F) {
        return F;
      });
    }
    var u = o(r, f);
    return n ? u : null;
  }
  return Je;
}
var ct = {}, _n;
function ja() {
  if (_n)
    return ct;
  _n = 1;
  var t = le.exports;
  Object.defineProperty(ct, "__esModule", {
    value: !0
  }), ct.default = void 0;
  var e = ue, i = t($e()), d = t(Ve()), v = t(Vt()), g = t(qa()), s = t(He()), c = t(Ye()), b = ["empty"], y = function(o) {
    var u = o === !0 ? 0 : 1;
    return {
      bottomLeft: {
        points: ["tl", "bl"],
        offset: [0, 4],
        overflow: {
          adjustX: u,
          adjustY: 1
        }
      },
      bottomRight: {
        points: ["tr", "br"],
        offset: [0, 4],
        overflow: {
          adjustX: u,
          adjustY: 1
        }
      },
      topLeft: {
        points: ["bl", "tl"],
        offset: [0, -4],
        overflow: {
          adjustX: u,
          adjustY: 1
        }
      },
      topRight: {
        points: ["br", "tr"],
        offset: [0, -4],
        overflow: {
          adjustX: u,
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
    setup: function(o, u) {
      var a = u.slots, h = u.attrs, S = u.expose, _ = (0, e.computed)(function() {
        var L = o.dropdownMatchSelectWidth;
        return y(L);
      }), N = (0, e.ref)();
      return S({
        getPopupElement: function() {
          return N.value;
        }
      }), function() {
        var L = (0, d.default)((0, d.default)({}, o), h), F = L.empty, X = F === void 0 ? !1 : F, A = (0, v.default)(L, b), ee = A.visible, x = A.dropdownAlign, O = A.prefixCls, R = A.popupElement, D = A.dropdownClassName, E = A.dropdownStyle, P = A.direction, m = P === void 0 ? "ltr" : P, M = A.placement, l = A.dropdownMatchSelectWidth, w = A.containerWidth, I = A.dropdownRender, K = A.animation, J = A.transitionName, U = A.getPopupContainer, Q = A.getTriggerDOMNode, re = A.onPopupVisibleChange, de = A.onPopupMouseEnter, ie = "".concat(O, "-dropdown"), W = R;
        I && (W = I({
          menuNode: R,
          props: o
        }));
        var T = K ? "".concat(ie, "-").concat(K) : J, Y = (0, d.default)({
          minWidth: "".concat(w, "px")
        }, E);
        return typeof l == "number" ? Y.width = "".concat(l, "px") : l && (Y.width = "".concat(w, "px")), (0, e.createVNode)(g.default, (0, d.default)((0, d.default)({}, o), {}, {
          showAction: re ? ["click"] : [],
          hideAction: re ? ["click"] : [],
          popupPlacement: M || (m === "rtl" ? "bottomRight" : "bottomLeft"),
          builtinPlacements: _.value,
          prefixCls: ie,
          popupTransitionName: T,
          popupAlign: x,
          popupVisible: ee,
          getPopupContainer: U,
          popupClassName: (0, c.default)(D, (0, i.default)({}, "".concat(ie, "-empty"), X)),
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
  var t = le.exports;
  Object.defineProperty(st, "__esModule", {
    value: !0
  }), st.default = void 0;
  var e = ue, i = t(He()), d = function(s, c) {
    var b, y = c.slots, r = s.class, f = s.customizeIcon, n = s.customizeIconProps, o = s.onMousedown, u = s.onClick, a;
    return typeof f == "function" ? a = f(n) : a = f, (0, e.createVNode)("span", {
      class: r,
      onMousedown: function(S) {
        S.preventDefault(), o && o(S);
      },
      style: {
        userSelect: "none",
        WebkitUserSelect: "none"
      },
      unselectable: "on",
      onClick: u,
      "aria-hidden": !0
    }, [a !== void 0 ? a : (0, e.createVNode)("span", {
      class: r.split(/\s+/).map(function(h) {
        return "".concat(h, "-icon");
      })
    }, [(b = y.default) === null || b === void 0 ? void 0 : b.call(y)])]);
  };
  d.inheritAttrs = !1, d.displayName = "TransBtn", d.props = {
    class: String,
    customizeIcon: i.default.any,
    customizeIconProps: i.default.any,
    onMousedown: Function,
    onClick: Function
  };
  var v = d;
  return st.default = v, st;
}
var et = {}, Cn;
function sa() {
  if (Cn)
    return et;
  Cn = 1;
  var t = le.exports;
  Object.defineProperty(et, "__esModule", {
    value: !0
  }), et.inputProps = et.default = void 0;
  var e = ue, i = t(Ve()), d = t(nn()), v = ca(), g = t(He()), s = t(Ba()), c = t(Ye()), b = {
    inputRef: g.default.any,
    prefixCls: String,
    id: String,
    inputElement: g.default.VueNode,
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
    tabindex: g.default.oneOfType([g.default.number, g.default.string]),
    attrs: g.default.object,
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
  et.inputProps = b;
  var y = (0, e.defineComponent)({
    compatConfig: {
      MODE: 3
    },
    name: "Input",
    inheritAttrs: !1,
    props: b,
    setup: function(n) {
      var o = null, u = (0, e.inject)("VCSelectContainerEvent");
      return function() {
        var a, h, S = n.prefixCls, _ = n.id, N = n.inputElement, L = n.disabled, F = n.tabindex, X = n.autofocus, A = n.autocomplete, ee = n.editable, x = n.activeDescendantId, O = n.value, R = n.onKeydown, D = n.onMousedown, E = n.onChange, P = n.onPaste, m = n.onCompositionstart, M = n.onCompositionend, l = n.onFocus, w = n.onBlur, I = n.open, K = n.inputRef, J = n.attrs, U = N || (0, e.withDirectives)((0, e.createVNode)("input", null, null), [[s.default]]), Q = U.props || {}, re = Q.onKeydown, de = Q.onInput, ie = Q.onFocus, W = Q.onBlur, T = Q.onMousedown, Y = Q.onCompositionstart, k = Q.onCompositionend, ae = Q.style;
        return U = (0, v.cloneElement)(U, (0, d.default)((0, i.default)((0, i.default)((0, i.default)({
          type: "search"
        }, Q), {}, {
          id: _,
          ref: K,
          disabled: L,
          tabindex: F,
          autocomplete: A || "off",
          autofocus: X,
          class: (0, c.default)("".concat(S, "-selection-search-input"), (a = U) === null || a === void 0 || (h = a.props) === null || h === void 0 ? void 0 : h.class),
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
          style: (0, i.default)((0, i.default)({}, ae), {}, {
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
            clearTimeout(o), ie && ie(arguments.length <= 0 ? void 0 : arguments[0]), l && l(arguments.length <= 0 ? void 0 : arguments[0]), u == null || u.focus(arguments.length <= 0 ? void 0 : arguments[0]);
          },
          onBlur: function() {
            for (var Z = arguments.length, he = new Array(Z), se = 0; se < Z; se++)
              he[se] = arguments[se];
            o = setTimeout(function() {
              W && W(he[0]), w && w(he[0]), u == null || u.blur(he[0]);
            }, 100);
          }
        }), U.type === "textarea" ? {} : {
          type: "search"
        }), !0, !0), U;
      };
    }
  }), r = y;
  return et.default = r, et;
}
var vt = {}, On;
function ln() {
  if (On)
    return vt;
  On = 1, Object.defineProperty(vt, "__esModule", {
    value: !0
  }), vt.default = d, vt.useProvideLegacySelectContext = i;
  var t = ue, e = Symbol("TreeSelectLegacyContextPropsKey");
  function i(v) {
    return (0, t.provide)(e, v);
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
  var t = le.exports;
  Object.defineProperty(ft, "__esModule", {
    value: !0
  }), ft.default = void 0;
  var e = ue, i = t($e()), d = t(un()), v = t(sa()), g = t(Ye()), s = t(an()), c = t(He()), b = t(Ua()), y = t(ln()), r = {
    id: String,
    prefixCls: String,
    values: c.default.array,
    open: {
      type: Boolean,
      default: void 0
    },
    searchValue: String,
    inputRef: c.default.any,
    placeholder: c.default.any,
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
    tabindex: c.default.oneOfType([c.default.number, c.default.string]),
    removeIcon: c.default.any,
    choiceTransitionName: String,
    maxTagCount: c.default.oneOfType([c.default.number, c.default.string]),
    maxTagTextLength: Number,
    maxTagPlaceholder: c.default.any.def(function() {
      return function(u) {
        return "+ ".concat(u.length, " ...");
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
      var h = (0, e.ref)(), S = (0, e.ref)(0), _ = (0, e.ref)(!1), N = (0, y.default)(), L = (0, e.computed)(function() {
        return "".concat(a.prefixCls, "-selection");
      }), F = (0, e.computed)(function() {
        return a.open || a.mode === "tags" ? a.searchValue : "";
      }), X = (0, e.computed)(function() {
        return a.mode === "tags" || a.showSearch && (a.open || _.value);
      });
      (0, e.onMounted)(function() {
        (0, e.watch)(F, function() {
          S.value = h.value.scrollWidth;
        }, {
          flush: "post",
          immediate: !0
        });
      });
      function A(R, D, E, P, m) {
        return (0, e.createVNode)("span", {
          class: (0, g.default)("".concat(L.value, "-item"), (0, i.default)({}, "".concat(L.value, "-item-disabled"), E)),
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
            return [(0, e.createTextVNode)("\xD7")];
          }
        })]);
      }
      function ee(R, D, E, P, m, M) {
        var l = function(J) {
          f(J), a.onToggleOpen(!open);
        }, w = M;
        if (N.keyEntities) {
          var I;
          w = ((I = N.keyEntities[R]) === null || I === void 0 ? void 0 : I.node) || {};
        }
        return (0, e.createVNode)("span", {
          key: R,
          onMousedown: l
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
        var D = R.disabled, E = R.label, P = R.value, m = R.option, M = !a.disabled && !D, l = E;
        if (typeof a.maxTagTextLength == "number" && (typeof E == "string" || typeof E == "number")) {
          var w = String(l);
          w.length > a.maxTagTextLength && (l = "".concat(w.slice(0, a.maxTagTextLength), "..."));
        }
        var I = function(J) {
          var U;
          J && J.stopPropagation(), (U = a.onRemove) === null || U === void 0 || U.call(a, R);
        };
        return typeof a.tagRender == "function" ? ee(P, l, D, M, I, m) : A(E, l, D, M, I);
      }
      function O(R) {
        var D = a.maxTagPlaceholder, E = D === void 0 ? function(m) {
          return "+ ".concat(m.length, " ...");
        } : D, P = typeof E == "function" ? E(R) : E;
        return A(P, P, !1);
      }
      return function() {
        var R = a.id, D = a.prefixCls, E = a.values, P = a.open, m = a.inputRef, M = a.placeholder, l = a.disabled, w = a.autofocus, I = a.autocomplete, K = a.activeDescendantId, J = a.tabindex, U = a.onInputChange, Q = a.onInputPaste, re = a.onInputKeyDown, de = a.onInputMouseDown, ie = a.onInputCompositionStart, W = a.onInputCompositionEnd, T = (0, e.createVNode)("div", {
          class: "".concat(L.value, "-search"),
          style: {
            width: S.value + "px"
          },
          key: "input"
        }, [(0, e.createVNode)(v.default, {
          inputRef: m,
          open: P,
          prefixCls: D,
          id: R,
          inputElement: null,
          disabled: l,
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
          ref: h,
          class: "".concat(L.value, "-search-mirror"),
          "aria-hidden": !0
        }, [F.value, (0, e.createTextVNode)("\xA0")])]), Y = (0, e.createVNode)(b.default, {
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
  }), o = n;
  return ft.default = o, ft;
}
var pt = {}, Mn;
function Ya() {
  if (Mn)
    return pt;
  Mn = 1;
  var t = le.exports;
  Object.defineProperty(pt, "__esModule", {
    value: !0
  }), pt.default = void 0;
  var e = ue, i = t(an()), d = t(sa()), v = t(He()), g = t(ln()), s = {
    inputElement: v.default.any,
    id: String,
    prefixCls: String,
    values: v.default.array,
    open: {
      type: Boolean,
      default: void 0
    },
    searchValue: String,
    inputRef: v.default.any,
    placeholder: v.default.any,
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
    tabindex: v.default.oneOfType([v.default.number, v.default.string]),
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
  }, c = (0, e.defineComponent)({
    name: "SingleSelector",
    setup: function(r) {
      var f = (0, e.ref)(!1), n = (0, e.computed)(function() {
        return r.mode === "combobox";
      }), o = (0, e.computed)(function() {
        return n.value || r.showSearch;
      }), u = (0, e.computed)(function() {
        var N = r.searchValue || "";
        return n.value && r.activeValue && !f.value && (N = r.activeValue), N;
      }), a = (0, g.default)();
      (0, e.watch)([n, function() {
        return r.activeValue;
      }], function() {
        n.value && (f.value = !1);
      }, {
        immediate: !0
      });
      var h = (0, e.computed)(function() {
        return r.mode !== "combobox" && !r.open && !r.showSearch ? !1 : !!u.value;
      }), S = (0, e.computed)(function() {
        var N = r.values[0];
        return N && (typeof N.label == "string" || typeof N.label == "number") ? N.label.toString() : void 0;
      }), _ = function() {
        if (r.values[0])
          return null;
        var L = h.value ? {
          visibility: "hidden"
        } : void 0;
        return (0, e.createVNode)("span", {
          class: "".concat(r.prefixCls, "-selection-placeholder"),
          style: L
        }, [r.placeholder]);
      };
      return function() {
        var N, L = r.inputElement, F = r.prefixCls, X = r.id, A = r.values, ee = r.inputRef, x = r.disabled, O = r.autofocus, R = r.autocomplete, D = r.activeDescendantId, E = r.open, P = r.tabindex, m = r.optionLabelRender, M = r.onInputKeyDown, l = r.onInputMouseDown, w = r.onInputChange, I = r.onInputPaste, K = r.onInputCompositionStart, J = r.onInputCompositionEnd, U = A[0], Q = null;
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
          editable: o.value,
          activeDescendantId: D,
          value: u.value,
          onKeydown: M,
          onMousedown: l,
          onChange: function(k) {
            f.value = !0, w(k);
          },
          onPaste: I,
          onCompositionstart: K,
          onCompositionend: J,
          tabindex: P,
          attrs: (0, i.default)(r, !0)
        }, null)]), !n.value && U && !h.value && (0, e.createVNode)("span", {
          class: "".concat(F, "-selection-item"),
          title: S.value
        }, [(0, e.createVNode)(e.Fragment, {
          key: (N = U.key) !== null && N !== void 0 ? N : U.value
        }, [Q])]), _()]);
      };
    }
  });
  c.props = s, c.inheritAttrs = !1;
  var b = c;
  return pt.default = b, pt;
}
var Nt = {}, In;
function Ga() {
  if (In)
    return Nt;
  In = 1;
  var t = le.exports;
  Object.defineProperty(Nt, "__esModule", {
    value: !0
  }), Nt.isValidateOpenKey = i;
  var e = t(zt());
  function i(d) {
    return ![
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
  var t = ue;
  function e() {
    var i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 250, d = null, v;
    (0, t.onBeforeUnmount)(function() {
      clearTimeout(v);
    });
    function g(s) {
      (s || d === null) && (d = s), clearTimeout(v), v = setTimeout(function() {
        d = null;
      }, i);
    }
    return [function() {
      return d;
    }, g];
  }
  return Ft;
}
var tt = {}, xn;
function Yt() {
  if (xn)
    return tt;
  xn = 1;
  var t = le.exports;
  Object.defineProperty(tt, "__esModule", {
    value: !0
  }), tt.composeRef = v, tt.default = void 0, tt.fillRef = d;
  var e = t(Ke.exports);
  function i() {
    var s = function c(b) {
      c.current = b;
    };
    return s;
  }
  function d(s, c) {
    typeof s == "function" ? s(c) : (0, e.default)(s) === "object" && s && "current" in s && (s.current = c);
  }
  function v() {
    for (var s = arguments.length, c = new Array(s), b = 0; b < s; b++)
      c[b] = arguments[b];
    return function(y) {
      c.forEach(function(r) {
        d(r, y);
      });
    };
  }
  var g = i;
  return tt.default = g, tt;
}
var Vn;
function Xa() {
  if (Vn)
    return dt;
  Vn = 1;
  var t = le.exports;
  Object.defineProperty(dt, "__esModule", {
    value: !0
  }), dt.default = void 0;
  var e = ue, i = t(Ve()), d = t(jt()), v = t(zt()), g = t(za()), s = t(Ya()), c = Ga(), b = t(va()), y = t(Yt()), r = t(He()), f = (0, e.defineComponent)({
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
      maxTagCount: r.default.oneOfType([r.default.number, r.default.string]),
      maxTagTextLength: Number,
      maxTagPlaceholder: r.default.any,
      tagRender: Function,
      optionLabelRender: Function,
      tokenWithEnter: {
        type: Boolean,
        default: void 0
      },
      choiceTransitionName: String,
      onToggleOpen: {
        type: Function
      },
      onSearch: Function,
      onSearchSubmit: Function,
      onRemove: Function,
      onInputKeyDown: {
        type: Function
      },
      domRef: Function
    },
    setup: function(u, a) {
      var h = a.expose, S = (0, y.default)(), _ = !1, N = (0, b.default)(0), L = (0, d.default)(N, 2), F = L[0], X = L[1], A = function(w) {
        var I = w.which;
        (I === v.default.UP || I === v.default.DOWN) && w.preventDefault(), u.onInputKeyDown && u.onInputKeyDown(w), I === v.default.ENTER && u.mode === "tags" && !_ && !u.open && u.onSearchSubmit(w.target.value), (0, c.isValidateOpenKey)(I) && u.onToggleOpen(!0);
      }, ee = function() {
        X(!0);
      }, x = null, O = function(w) {
        u.onSearch(w, !0, _) !== !1 && u.onToggleOpen(!0);
      }, R = function() {
        _ = !0;
      }, D = function(w) {
        _ = !1, u.mode !== "combobox" && O(w.target.value);
      }, E = function(w) {
        var I = w.target.value;
        if (u.tokenWithEnter && x && /[\r\n]/.test(x)) {
          var K = x.replace(/[\r\n]+$/, "").replace(/\r\n/g, " ").replace(/[\r\n]/g, " ");
          I = I.replace(K, x);
        }
        x = null, O(I);
      }, P = function(w) {
        var I = w.clipboardData, K = I.getData("text");
        x = K;
      }, m = function(w) {
        var I = w.target;
        if (I !== S.current) {
          var K = document.body.style.msTouchAction !== void 0;
          K ? setTimeout(function() {
            S.current.focus();
          }) : S.current.focus();
        }
      }, M = function(w) {
        var I = F();
        w.target !== S.current && !I && w.preventDefault(), (u.mode !== "combobox" && (!u.showSearch || !I) || !u.open) && (u.open && u.onSearch("", !0, !1), u.onToggleOpen());
      };
      return h({
        focus: function() {
          S.current.focus();
        },
        blur: function() {
          S.current.blur();
        }
      }), function() {
        var l = u.prefixCls, w = u.domRef, I = u.mode, K = {
          inputRef: S,
          onInputKeyDown: A,
          onInputMouseDown: ee,
          onInputChange: E,
          onInputPaste: P,
          onInputCompositionStart: R,
          onInputCompositionEnd: D
        }, J = I === "multiple" || I === "tags" ? (0, e.createVNode)(g.default, (0, i.default)((0, i.default)({}, u), K), null) : (0, e.createVNode)(s.default, (0, i.default)((0, i.default)({}, u), K), null);
        return (0, e.createVNode)("div", {
          ref: w,
          class: "".concat(l, "-selector"),
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
  var t = ue;
  function e(i, d, v) {
    function g(s) {
      var c, b, y, r = s.target;
      r.shadowRoot && s.composed && (r = s.composedPath()[0] || r);
      var f = [(c = i[0]) === null || c === void 0 ? void 0 : c.value, (b = i[1]) === null || b === void 0 || (y = b.value) === null || y === void 0 ? void 0 : y.getPopupElement()];
      d.value && f.every(function(n) {
        return n && !n.contains(r) && n !== r;
      }) && v(!1);
    }
    (0, t.onMounted)(function() {
      window.addEventListener("mousedown", g);
    }), (0, t.onBeforeUnmount)(function() {
      window.removeEventListener("mousedown", g);
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
  var t = ue;
  function e() {
    var i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 10, d = (0, t.ref)(!1), v, g = function() {
      clearTimeout(v);
    };
    (0, t.onMounted)(function() {
      g();
    });
    var s = function(b, y) {
      g(), v = setTimeout(function() {
        d.value = b, y && y();
      }, i);
    };
    return [d, s, g];
  }
  return qt;
}
var ht = {}, Nn;
function cn() {
  if (Nn)
    return ht;
  Nn = 1, Object.defineProperty(ht, "__esModule", {
    value: !0
  }), ht.default = d, ht.useProvideBaseSelectProps = i;
  var t = ue, e = Symbol("BaseSelectContextKey");
  function i(v) {
    return (0, t.provide)(e, v);
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
  var t = ue;
  function e(i) {
    if (!(0, t.isRef)(i))
      return (0, t.reactive)(i);
    var d = new Proxy({}, {
      get: function(g, s, c) {
        return Reflect.get(i.value, s, c);
      },
      set: function(g, s, c) {
        return i.value[s] = c, !0;
      },
      deleteProperty: function(g, s) {
        return Reflect.deleteProperty(i.value, s);
      },
      has: function(g, s) {
        return Reflect.has(i.value, s);
      },
      ownKeys: function() {
        return Object.keys(i.value);
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
    return je;
  En = 1;
  var t = le.exports;
  Object.defineProperty(je, "__esModule", {
    value: !0
  }), je.default = je.baseSelectPropsWithoutPrivate = void 0, je.isMultiple = P;
  var e = ue, i = t(Ke.exports), d = t($e()), v = t(Vt()), g = t(tn()), s = t(jt()), c = t(Ve()), b = on(), y = t(ja()), r = t(Xa()), f = t(Qa()), n = t(Za()), o = t(un()), u = t(va()), a = cn(), h = t(He()), S = ut(), _ = t(ka()), N = t(zt()), L = pa(), F = t(Ye()), X = t(Yt()), A = t(ln()), ee = ca(), x = ["prefixCls", "id", "open", "defaultOpen", "mode", "showSearch", "searchValue", "onSearch", "allowClear", "clearIcon", "showArrow", "inputIcon", "disabled", "loading", "getInputElement", "getPopupContainer", "placement", "animation", "transitionName", "dropdownStyle", "dropdownClassName", "dropdownMatchSelectWidth", "dropdownRender", "dropdownAlign", "showAction", "direction", "tokenSeparators", "tagRender", "optionLabelRender", "onPopupScroll", "onDropdownVisibleChange", "onFocus", "onBlur", "onKeyup", "onKeydown", "onMousedown", "onClear", "omitDomProps", "getRawInputElement", "displayValues", "onDisplayValuesChange", "emptyOptions", "activeDescendantId", "activeValue", "OptionList"], O = ["value", "onChange", "removeIcon", "placeholder", "autofocus", "maxTagCount", "maxTagTextLength", "maxTagPlaceholder", "choiceTransitionName", "onInputKeyDown", "onPopupScroll", "tabindex", "OptionList", "notFoundContent"], R = function() {
    return {
      prefixCls: String,
      id: String,
      omitDomProps: Array,
      displayValues: Array,
      onDisplayValuesChange: Function,
      activeValue: String,
      activeDescendantId: String,
      onActiveValueChange: Function,
      searchValue: String,
      onSearch: Function,
      onSearchSplit: Function,
      maxLength: Number,
      OptionList: h.default.any,
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
      tabindex: Number,
      autofocus: Boolean,
      notFoundContent: h.default.any,
      placeholder: h.default.any,
      onClear: Function,
      choiceTransitionName: String,
      mode: String,
      disabled: {
        type: Boolean,
        default: void 0
      },
      loading: {
        type: Boolean,
        default: void 0
      },
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
      getInputElement: {
        type: Function
      },
      getRawInputElement: {
        type: Function
      },
      maxTagTextLength: Number,
      maxTagCount: {
        type: [String, Number]
      },
      maxTagPlaceholder: h.default.any,
      tokenSeparators: {
        type: Array
      },
      allowClear: {
        type: Boolean,
        default: void 0
      },
      showArrow: {
        type: Boolean,
        default: void 0
      },
      inputIcon: h.default.any,
      clearIcon: h.default.any,
      removeIcon: h.default.any,
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
      showAction: {
        type: Array
      },
      onBlur: {
        type: Function
      },
      onFocus: {
        type: Function
      },
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
  je.baseSelectPropsWithoutPrivate = D;
  var E = function() {
    return (0, c.default)((0, c.default)({}, R()), D());
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
    props: (0, S.initDefaultProps)(E(), {
      showAction: [],
      notFoundContent: "Not Found"
    }),
    setup: function(l, w) {
      var I = w.attrs, K = w.expose, J = w.slots, U = (0, e.computed)(function() {
        return P(l.mode);
      }), Q = (0, e.computed)(function() {
        return l.showSearch !== void 0 ? l.showSearch : U.value || l.mode === "combobox";
      }), re = (0, e.ref)(!1);
      (0, e.onMounted)(function() {
        re.value = (0, _.default)();
      });
      var de = (0, A.default)(), ie = (0, e.ref)(null), W = (0, X.default)(), T = (0, e.ref)(null), Y = (0, e.ref)(null), k = (0, e.ref)(null), ae = (0, n.default)(), oe = (0, s.default)(ae, 3), Z = oe[0], he = oe[1], se = oe[2], Oe = function() {
        var p;
        (p = Y.value) === null || p === void 0 || p.focus();
      }, We = function() {
        var p;
        (p = Y.value) === null || p === void 0 || p.blur();
      };
      K({
        focus: Oe,
        blur: We,
        scrollTo: function(p) {
          var $;
          return ($ = k.value) === null || $ === void 0 ? void 0 : $.scrollTo(p);
        }
      });
      var Pe = (0, e.computed)(function() {
        var j;
        if (l.mode !== "combobox")
          return l.searchValue;
        var p = (j = l.displayValues[0]) === null || j === void 0 ? void 0 : j.value;
        return typeof p == "string" || typeof p == "number" ? String(p) : "";
      }), _e = l.open !== void 0 ? l.open : l.defaultOpen, we = (0, e.ref)(_e), te = (0, e.ref)(_e), Te = function(p) {
        we.value = l.open !== void 0 ? l.open : p, te.value = we.value;
      };
      (0, e.watch)(function() {
        return l.open;
      }, function() {
        Te(l.open);
      });
      var Le = (0, e.computed)(function() {
        return !l.notFoundContent && l.emptyOptions;
      });
      (0, e.watchEffect)(function() {
        te.value = we.value, (l.disabled || Le.value && te.value && l.mode === "combobox") && (te.value = !1);
      });
      var ce = (0, e.computed)(function() {
        return Le.value ? !1 : te.value;
      }), ye = function(p) {
        var $ = p !== void 0 ? p : !te.value;
        we.value !== $ && !l.disabled && (Te($), l.onDropdownVisibleChange && l.onDropdownVisibleChange($));
      }, Be = (0, e.computed)(function() {
        return (l.tokenSeparators || []).some(function(j) {
          return [`
`, `\r
`].includes(j);
        });
      }), V = function(p, $, ge) {
        var ve, pe = !0, H = p;
        (ve = l.onActiveValueChange) === null || ve === void 0 || ve.call(l, null);
        var C = ge ? null : (0, b.getSeparatedContent)(p, l.tokenSeparators);
        if (l.mode !== "combobox" && C) {
          var q;
          H = "", (q = l.onSearchSplit) === null || q === void 0 || q.call(l, C), ye(!1), pe = !1;
        }
        return l.onSearch && Pe.value !== H && l.onSearch(H, {
          source: $ ? "typing" : "effect"
        }), pe;
      }, G = function(p) {
        var $;
        !p || !p.trim() || ($ = l.onSearch) === null || $ === void 0 || $.call(l, p, {
          source: "submit"
        });
      };
      (0, e.watch)(te, function() {
        !te.value && !U.value && l.mode !== "combobox" && V("", !1, !1);
      }, {
        immediate: !0,
        flush: "post"
      }), (0, e.watch)(function() {
        return l.disabled;
      }, function() {
        we.value && !!l.disabled && Te(!1);
      }, {
        immediate: !0
      });
      var fe = (0, u.default)(), me = (0, s.default)(fe, 2), Me = me[0], Ge = me[1], Ae = function(p) {
        var $, ge = Me(), ve = p.which;
        if (ve === N.default.ENTER && (l.mode !== "combobox" && p.preventDefault(), te.value || ye(!0)), Ge(!!Pe.value), ve === N.default.BACKSPACE && !ge && U.value && !Pe.value && l.displayValues.length) {
          for (var pe = (0, g.default)(l.displayValues), H = null, C = pe.length - 1; C >= 0; C -= 1) {
            var q = pe[C];
            if (!q.disabled) {
              pe.splice(C, 1), H = q;
              break;
            }
          }
          H && l.onDisplayValuesChange(pe, {
            type: "remove",
            values: [H]
          });
        }
        for (var B = arguments.length, ne = new Array(B > 1 ? B - 1 : 0), z = 1; z < B; z++)
          ne[z - 1] = arguments[z];
        if (te.value && k.value) {
          var Re;
          (Re = k.value).onKeydown.apply(Re, [p].concat(ne));
        }
        ($ = l.onKeydown) === null || $ === void 0 || $.call.apply($, [l, p].concat(ne));
      }, Xe = function(p) {
        for (var $ = arguments.length, ge = new Array($ > 1 ? $ - 1 : 0), ve = 1; ve < $; ve++)
          ge[ve - 1] = arguments[ve];
        if (te.value && k.value) {
          var pe;
          (pe = k.value).onKeyup.apply(pe, [p].concat(ge));
        }
        l.onKeyup && l.onKeyup.apply(l, [p].concat(ge));
      }, Ie = function(p) {
        var $ = l.displayValues.filter(function(ge) {
          return ge !== p;
        });
        l.onDisplayValuesChange($, {
          type: "remove",
          values: [p]
        });
      }, Ue = (0, e.ref)(!1), be = function() {
        he(!0), l.disabled || (l.onFocus && !Ue.value && l.onFocus.apply(l, arguments), l.showAction && l.showAction.includes("focus") && ye(!0)), Ue.value = !0;
      }, xe = function() {
        if (he(!1, function() {
          Ue.value = !1, ye(!1);
        }), !l.disabled) {
          var p = Pe.value;
          p && (l.mode === "tags" ? l.onSearch(p, {
            source: "submit"
          }) : l.mode === "multiple" && l.onSearch("", {
            source: "blur"
          })), l.onBlur && l.onBlur.apply(l, arguments);
        }
      };
      (0, e.provide)("VCSelectContainerEvent", {
        focus: be,
        blur: xe
      });
      var Ce = [];
      (0, e.onMounted)(function() {
        Ce.forEach(function(j) {
          return clearTimeout(j);
        }), Ce.splice(0, Ce.length);
      }), (0, e.onBeforeUnmount)(function() {
        Ce.forEach(function(j) {
          return clearTimeout(j);
        }), Ce.splice(0, Ce.length);
      });
      var De = function(p) {
        var $, ge, ve = p.target, pe = ($ = T.value) === null || $ === void 0 ? void 0 : $.getPopupElement();
        if (pe && pe.contains(ve)) {
          var H = setTimeout(function() {
            var ne = Ce.indexOf(H);
            if (ne !== -1 && Ce.splice(ne, 1), se(), !re.value && !pe.contains(document.activeElement)) {
              var z;
              (z = Y.value) === null || z === void 0 || z.focus();
            }
          });
          Ce.push(H);
        }
        for (var C = arguments.length, q = new Array(C > 1 ? C - 1 : 0), B = 1; B < C; B++)
          q[B - 1] = arguments[B];
        (ge = l.onMousedown) === null || ge === void 0 || ge.call.apply(ge, [l, p].concat(q));
      }, Ne = (0, e.ref)(null), Ee = (0, e.getCurrentInstance)(), at = function() {
        Ee.update();
      };
      return (0, e.onMounted)(function() {
        (0, e.watch)(ce, function() {
          if (ce.value) {
            var j, p = Math.ceil((j = ie.value) === null || j === void 0 ? void 0 : j.offsetWidth);
            Ne.value !== p && !Number.isNaN(p) && (Ne.value = p);
          }
        }, {
          immediate: !0,
          flush: "post"
        });
      }), (0, f.default)([ie, T], ce, ye), (0, a.useProvideBaseSelectProps)((0, L.toReactive)((0, c.default)((0, c.default)({}, (0, e.toRefs)(l)), {}, {
        open: te,
        triggerOpen: ce,
        showSearch: Q,
        multiple: U,
        toggleOpen: ye
      }))), function() {
        var j, p = (0, c.default)((0, c.default)({}, l), I), $ = p.prefixCls, ge = p.id;
        p.open, p.defaultOpen;
        var ve = p.mode;
        p.showSearch, p.searchValue, p.onSearch;
        var pe = p.allowClear, H = p.clearIcon, C = p.showArrow, q = p.inputIcon, B = p.disabled, ne = p.loading, z = p.getInputElement, Re = p.getPopupContainer, qe = p.placement, Qe = p.animation, Se = p.transitionName, Ze = p.dropdownStyle, Gt = p.dropdownClassName, sn = p.dropdownMatchSelectWidth, lt = p.dropdownRender, ke = p.dropdownAlign;
        p.showAction;
        var rt = p.direction;
        p.tokenSeparators;
        var ya = p.tagRender, ba = p.optionLabelRender;
        p.onPopupScroll, p.onDropdownVisibleChange, p.onFocus, p.onBlur, p.onKeyup, p.onKeydown, p.onMousedown;
        var Xt = p.onClear, Qt = p.omitDomProps, vn = p.getRawInputElement, Tt = p.displayValues, Sa = p.onDisplayValuesChange, _a = p.emptyOptions, wa = p.activeDescendantId, Ca = p.activeValue, Oa = p.OptionList, Pa = (0, v.default)(p, x), pn = ve === "combobox" && z && z() || null, it = typeof vn == "function" && vn(), Zt = (0, c.default)({}, Pa), hn;
        it && (hn = function(Dt) {
          ye(Dt);
        }), O.forEach(function(Fe) {
          delete Zt[Fe];
        }), Qt == null || Qt.forEach(function(Fe) {
          delete Zt[Fe];
        });
        var mn = C !== void 0 ? C : ne || !U.value && ve !== "combobox", gn;
        mn && (gn = (0, e.createVNode)(o.default, {
          class: (0, F.default)("".concat($, "-arrow"), (0, d.default)({}, "".concat($, "-arrow-loading"), ne)),
          customizeIcon: q,
          customizeIconProps: {
            loading: ne,
            searchValue: Pe.value,
            open: te.value,
            focused: Z.value,
            showSearch: Q.value
          }
        }, null));
        var yn, Ma = function() {
          Xt == null || Xt(), Sa([], {
            type: "clear",
            values: Tt
          }), V("", !1, !1);
        };
        !B && pe && (Tt.length || Pe.value) && (yn = (0, e.createVNode)(o.default, {
          class: "".concat($, "-clear"),
          onMousedown: Ma,
          customizeIcon: H
        }, {
          default: function() {
            return [(0, e.createTextVNode)("\xD7")];
          }
        }));
        var Ia = (0, e.createVNode)(Oa, {
          ref: k
        }, (0, c.default)((0, c.default)({}, de.customSlots), {}, {
          option: J.option
        })), Ra = (0, F.default)($, I.class, (j = {}, (0, d.default)(j, "".concat($, "-focused"), Z.value), (0, d.default)(j, "".concat($, "-multiple"), U.value), (0, d.default)(j, "".concat($, "-single"), !U.value), (0, d.default)(j, "".concat($, "-allow-clear"), pe), (0, d.default)(j, "".concat($, "-show-arrow"), mn), (0, d.default)(j, "".concat($, "-disabled"), B), (0, d.default)(j, "".concat($, "-loading"), ne), (0, d.default)(j, "".concat($, "-open"), te.value), (0, d.default)(j, "".concat($, "-customize-input"), pn), (0, d.default)(j, "".concat($, "-show-search"), Q.value), j)), bn = (0, e.createVNode)(y.default, {
          ref: T,
          disabled: B,
          prefixCls: $,
          visible: ce.value,
          popupElement: Ia,
          containerWidth: Ne.value,
          animation: Qe,
          transitionName: Se,
          dropdownStyle: Ze,
          dropdownClassName: Gt,
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
            return it ? (0, S.isValidElement)(it) && (0, ee.cloneElement)(it, {
              ref: W
            }, !1, !0) : (0, e.createVNode)(r.default, (0, c.default)((0, c.default)({}, l), {}, {
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
              searchValue: Pe.value,
              onSearch: V,
              onSearchSubmit: G,
              onRemove: Ie,
              tokenWithEnter: Be.value
            }), null);
          }
        }), Jt;
        return it ? Jt = bn : Jt = (0, e.createVNode)("div", (0, c.default)((0, c.default)({}, Zt), {}, {
          class: Ra,
          ref: ie,
          onMousedown: De,
          onKeydown: Ae,
          onKeyup: Xe
        }), [Z.value && !te.value && (0, e.createVNode)("span", {
          style: {
            width: 0,
            height: 0,
            display: "flex",
            overflow: "hidden",
            opacity: 0
          },
          "aria-live": "polite"
        }, ["".concat(Tt.map(function(Fe) {
          var Dt = Fe.label, xa = Fe.value;
          return ["number", "string"].includes((0, i.default)(Dt)) ? Dt : xa;
        }).join(", "))]), bn, gn, yn]), Jt;
      };
    }
  });
  return je.default = m, je;
}
var mt = {}, gt = {}, yt = {}, bt = {}, qn;
function Ja() {
  if (qn)
    return bt;
  qn = 1;
  var t = le.exports;
  Object.defineProperty(bt, "__esModule", {
    value: !0
  }), bt.default = void 0;
  var e = ue, i = t($e()), d = t(Ve()), v = t(Ye()), g = t(Ka()), s = function(y, r) {
    var f, n = y.height, o = y.offset, u = y.prefixCls, a = y.onInnerResize, h = r.slots, S = {}, _ = {
      display: "flex",
      flexDirection: "column"
    };
    return o !== void 0 && (S = {
      height: "".concat(n, "px"),
      position: "relative",
      overflow: "hidden"
    }, _ = (0, d.default)((0, d.default)({}, _), {}, {
      transform: "translateY(".concat(o, "px)"),
      position: "absolute",
      left: 0,
      right: 0,
      top: 0
    })), (0, e.createVNode)("div", {
      style: S
    }, [(0, e.createVNode)(g.default, {
      onResize: function(L) {
        var F = L.offsetHeight;
        F && a && a();
      }
    }, {
      default: function() {
        return [(0, e.createVNode)("div", {
          style: _,
          class: (0, v.default)((0, i.default)({}, "".concat(u, "-holder-inner"), u))
        }, [(f = h.default) === null || f === void 0 ? void 0 : f.call(h)])];
      }
    })]);
  };
  s.displayName = "Filter", s.inheritAttrs = !1, s.props = {
    prefixCls: String,
    height: Number,
    offset: Number,
    onInnerResize: Function
  };
  var c = s;
  return bt.default = c, bt;
}
var St = {}, Ln;
function er() {
  if (Ln)
    return St;
  Ln = 1, Object.defineProperty(St, "__esModule", {
    value: !0
  }), St.default = void 0;
  var t = ue, e = ut(), i = function(g, s) {
    var c, b = g.setRef, y = s.slots, r = (0, e.flattenChildren)((c = y.default) === null || c === void 0 ? void 0 : c.call(y));
    return r && r.length ? (0, t.cloneVNode)(r[0], {
      ref: b
    }) : r;
  };
  i.props = {
    setRef: {
      type: Function,
      default: function() {
      }
    }
  };
  var d = i;
  return St.default = d, St;
}
var _t = {}, Bn;
function tr() {
  if (Bn)
    return _t;
  Bn = 1;
  var t = le.exports;
  Object.defineProperty(_t, "__esModule", {
    value: !0
  }), _t.default = void 0;
  var e = ue, i = t($e()), d = t(nn()), v = t(Ye()), g = t(Yt()), s = t(rn()), c = t(da()), b = 20;
  function y(f) {
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
        scrollbarRef: (0, g.default)(),
        thumbRef: (0, g.default)(),
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
      var n, o;
      (n = this.scrollbarRef.current) === null || n === void 0 || n.addEventListener("touchstart", this.onScrollbarTouchStart, c.default ? {
        passive: !1
      } : !1), (o = this.thumbRef.current) === null || o === void 0 || o.addEventListener("touchstart", this.onMouseDown, c.default ? {
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
      patchEvents: function() {
        window.addEventListener("mousemove", this.onMouseMove), window.addEventListener("mouseup", this.onMouseUp), this.thumbRef.current.addEventListener("touchmove", this.onMouseMove, c.default ? {
          passive: !1
        } : !1), this.thumbRef.current.addEventListener("touchend", this.onMouseUp);
      },
      removeEvents: function() {
        window.removeEventListener("mousemove", this.onMouseMove), window.removeEventListener("mouseup", this.onMouseUp), this.scrollbarRef.current.removeEventListener("touchstart", this.onScrollbarTouchStart, c.default ? {
          passive: !1
        } : !1), this.thumbRef.current.removeEventListener("touchstart", this.onMouseDown, c.default ? {
          passive: !1
        } : !1), this.thumbRef.current.removeEventListener("touchmove", this.onMouseMove, c.default ? {
          passive: !1
        } : !1), this.thumbRef.current.removeEventListener("touchend", this.onMouseUp), s.default.cancel(this.moveRaf);
      },
      onMouseDown: function(n) {
        var o = this.$props.onStartMove;
        (0, d.default)(this.state, {
          dragging: !0,
          pageY: y(n),
          startTop: this.getTop()
        }), o(), this.patchEvents(), n.stopPropagation(), n.preventDefault();
      },
      onMouseMove: function(n) {
        var o = this.state, u = o.dragging, a = o.pageY, h = o.startTop, S = this.$props.onScroll;
        if (s.default.cancel(this.moveRaf), u) {
          var _ = y(n) - a, N = h + _, L = this.getEnableScrollRange(), F = this.getEnableHeightRange(), X = F ? N / F : 0, A = Math.ceil(X * L);
          this.moveRaf = (0, s.default)(function() {
            S(A);
          });
        }
      },
      onMouseUp: function() {
        var n = this.$props.onStopMove;
        this.state.dragging = !1, n(), this.removeEvents();
      },
      getSpinHeight: function() {
        var n = this.$props, o = n.height, u = n.count, a = o / u * 10;
        return a = Math.max(a, b), a = Math.min(a, o / 2), Math.floor(a);
      },
      getEnableScrollRange: function() {
        var n = this.$props, o = n.scrollHeight, u = n.height;
        return o - u || 0;
      },
      getEnableHeightRange: function() {
        var n = this.$props.height, o = this.getSpinHeight();
        return n - o || 0;
      },
      getTop: function() {
        var n = this.$props.scrollTop, o = this.getEnableScrollRange(), u = this.getEnableHeightRange();
        if (n === 0 || o === 0)
          return 0;
        var a = n / o;
        return a * u;
      },
      showScroll: function() {
        var n = this.$props, o = n.height, u = n.scrollHeight;
        return u > o;
      }
    },
    render: function() {
      var n = this.state, o = n.dragging, u = n.visible, a = this.$props.prefixCls, h = this.getSpinHeight() + "px", S = this.getTop() + "px", _ = this.showScroll(), N = _ && u;
      return (0, e.createVNode)("div", {
        ref: this.scrollbarRef,
        class: (0, v.default)("".concat(a, "-scrollbar"), (0, i.default)({}, "".concat(a, "-scrollbar-show"), _)),
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
        class: (0, v.default)("".concat(a, "-scrollbar-thumb"), (0, i.default)({}, "".concat(a, "-scrollbar-thumb-moving"), o)),
        style: {
          width: "100%",
          height: h,
          top: S,
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
  An = 1, Object.defineProperty(Bt, "__esModule", {
    value: !0
  }), Bt.default = e;
  var t = ue;
  function e(i, d, v, g) {
    var s = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), b = (0, t.ref)(Symbol("update"));
    (0, t.watch)(i, function() {
      b.value = Symbol("update");
    });
    var y = 0;
    function r() {
      y += 1;
      var n = y;
      Promise.resolve().then(function() {
        n === y && s.forEach(function(o, u) {
          if (o && o.offsetParent) {
            var a = o.offsetHeight;
            c.get(u) !== a && (b.value = Symbol("update"), c.set(u, o.offsetHeight));
          }
        });
      });
    }
    function f(n, o) {
      var u = d(n), a = s.get(u);
      o ? (s.set(u, o.$el || o), r()) : s.delete(u), !a != !o && (o ? v == null || v(n) : g == null || g(n));
    }
    return [f, r, c, b];
  }
  return Bt;
}
var At = {}, Un;
function ar() {
  if (Un)
    return At;
  Un = 1;
  var t = le.exports;
  Object.defineProperty(At, "__esModule", {
    value: !0
  }), At.default = d;
  var e = t(Ke.exports), i = t(rn());
  function d(v, g, s, c, b, y, r, f) {
    var n;
    return function(o) {
      if (o == null) {
        f();
        return;
      }
      i.default.cancel(n);
      var u = g.value, a = c.itemHeight;
      if (typeof o == "number")
        r(o);
      else if (o && (0, e.default)(o) === "object") {
        var h, S = o.align;
        "index" in o ? h = o.index : h = u.findIndex(function(F) {
          return b(F) === o.key;
        });
        var _ = o.offset, N = _ === void 0 ? 0 : _, L = function F(X, A) {
          if (!(X < 0 || !v.value)) {
            var ee = v.value.clientHeight, x = !1, O = A;
            if (ee) {
              for (var R = A || S, D = 0, E = 0, P = 0, m = Math.min(u.length, h), M = 0; M <= m; M += 1) {
                var l = b(u[M]);
                E = D;
                var w = s.get(l);
                P = E + (w === void 0 ? a : w), D = P, M === h && w === void 0 && (x = !0);
              }
              var I = v.value.scrollTop, K = null;
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
            n = (0, i.default)(function() {
              x && y(), F(X - 1, O);
            });
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
  var t = le.exports;
  Object.defineProperty(wt, "__esModule", {
    value: !0
  }), wt.default = void 0;
  var e = t(Ke.exports), i = (typeof navigator > "u" ? "undefined" : (0, e.default)(navigator)) === "object" && /Firefox/i.test(navigator.userAgent), d = i;
  return wt.default = d, wt;
}
var Ct = {}, Kn;
function ha() {
  if (Kn)
    return Ct;
  Kn = 1, Object.defineProperty(Ct, "__esModule", {
    value: !0
  }), Ct.default = void 0;
  var t = function(i, d) {
    var v = !1, g = null;
    function s() {
      clearTimeout(g), v = !0, g = setTimeout(function() {
        v = !1;
      }, 50);
    }
    return function(c) {
      var b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, y = c < 0 && i.value || c > 0 && d.value;
      return b && y ? (clearTimeout(g), v = !1) : (!y || v) && s(), !v && y;
    };
  };
  return Ct.default = t, Ct;
}
var $n;
function or() {
  if ($n)
    return Ut;
  $n = 1;
  var t = le.exports;
  Object.defineProperty(Ut, "__esModule", {
    value: !0
  }), Ut.default = v;
  var e = t(rn()), i = t(rr()), d = t(ha());
  function v(g, s, c, b) {
    var y = 0, r = null, f = null, n = !1, o = (0, d.default)(s, c);
    function u(h) {
      if (!!g.value) {
        e.default.cancel(r);
        var S = h.deltaY;
        y += S, f = S, !o(S) && (i.default || h.preventDefault(), r = (0, e.default)(function() {
          var _ = n ? 10 : 1;
          b(y * _), y = 0;
        }));
      }
    }
    function a(h) {
      !g.value || (n = h.detail === f);
    }
    return [u, a];
  }
  return Ut;
}
var kt = {}, Hn;
function ur() {
  if (Hn)
    return kt;
  Hn = 1, Object.defineProperty(kt, "__esModule", {
    value: !0
  }), kt.default = i;
  var t = ue, e = 14 / 15;
  function i(d, v, g) {
    var s = !1, c = 0, b = null, y = null, r = function() {
      b && (b.removeEventListener("touchmove", f), b.removeEventListener("touchend", n));
    }, f = function(h) {
      if (s) {
        var S = Math.ceil(h.touches[0].pageY), _ = c - S;
        c = S, g(_) && h.preventDefault(), clearInterval(y), y = setInterval(function() {
          _ *= e, (!g(_, !0) || Math.abs(_) <= 0.1) && clearInterval(y);
        }, 16);
      }
    }, n = function() {
      s = !1, r();
    }, o = function(h) {
      r(), h.touches.length === 1 && !s && (s = !0, c = Math.ceil(h.touches[0].pageY), b = h.target, b.addEventListener("touchmove", f, {
        passive: !1
      }), b.addEventListener("touchend", n));
    }, u = function() {
    };
    (0, t.onMounted)(function() {
      document.addEventListener("touchmove", u, {
        passive: !1
      }), (0, t.watch)(d, function(a) {
        v.value.removeEventListener("touchstart", o), r(), clearInterval(y), a && v.value.addEventListener("touchstart", o, {
          passive: !1
        });
      }, {
        immediate: !0
      });
    }), (0, t.onBeforeUnmount)(function() {
      document.removeEventListener("touchmove", u);
    });
  }
  return kt;
}
var Wn;
function lr() {
  if (Wn)
    return yt;
  Wn = 1;
  var t = le.exports;
  Object.defineProperty(yt, "__esModule", {
    value: !0
  }), yt.default = void 0;
  var e = ue, i = t(Vt()), d = t($e()), v = t(Ve()), g = t(nn()), s = t(jt()), c = t(Ja()), b = t(er()), y = t(tr()), r = t(nr()), f = t(ar()), n = t(or()), o = t(ur()), u = t(ha()), a = t(He()), h = t(Ye()), S = t(da()), _ = ["prefixCls", "height", "itemHeight", "fullHeight", "data", "itemKey", "virtual", "component", "onScroll", "children", "style", "class"], N = [], L = {
    overflowY: "auto",
    overflowAnchor: "none"
  };
  function F(ee, x, O, R, D, E) {
    var P = E.getKey;
    return ee.slice(x, O + 1).map(function(m, M) {
      var l = x + M, w = D(m, l, {}), I = P(m);
      return (0, e.createVNode)(b.default, {
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
      var l = (0, e.shallowRef)(function(V) {
      });
      (0, e.watch)(function() {
        return x.itemKey;
      }, function(V) {
        typeof V == "function" ? l.value = V : l.value = function(G) {
          return G == null ? void 0 : G[V];
        };
      }, {
        immediate: !0
      });
      var w = (0, e.ref)(), I = (0, e.ref)(), K = (0, e.ref)(), J = function(G) {
        return l.value(G);
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
        D.value || (0, g.default)(k, {
          scrollHeight: void 0,
          start: 0,
          end: M.value.length - 1,
          offset: void 0
        });
      }, {
        immediate: !0
      }), (0, e.watch)([D, M, ae, E], function() {
        D.value && !E.value && (0, g.default)(k, {
          scrollHeight: ae.value,
          start: 0,
          end: M.value.length - 1,
          offset: void 0
        });
      }, {
        immediate: !0
      }), (0, e.watch)([E, D, function() {
        return P.scrollTop;
      }, M, Y, function() {
        return x.height;
      }, ae], function() {
        if (!(!D.value || !E.value)) {
          for (var V = 0, G, fe, me, Me = M.value.length, Ge = M.value, Ae = P.scrollTop, Xe = x.itemHeight, Ie = x.height, Ue = Ae + Ie, be = 0; be < Me; be += 1) {
            var xe = Ge[be], Ce = J(xe), De = T.get(Ce);
            De === void 0 && (De = Xe);
            var Ne = V + De;
            G === void 0 && Ne >= Ae && (G = be, fe = V), me === void 0 && Ne > Ue && (me = be), V = Ne;
          }
          G === void 0 && (G = 0, fe = 0), me === void 0 && (me = Me - 1), me = Math.min(me + 1, Me), (0, g.default)(k, {
            scrollHeight: V,
            start: G,
            end: me,
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
      var he = (0, e.computed)(function() {
        return P.scrollTop <= 0;
      }), se = (0, e.computed)(function() {
        return P.scrollTop >= oe.value;
      }), Oe = (0, u.default)(he, se);
      function We(V) {
        var G = V;
        Q(G);
      }
      function Pe(V) {
        var G, fe = V.currentTarget.scrollTop;
        Math.abs(fe - P.scrollTop) >= 1 && Q(fe), (G = x.onScroll) === null || G === void 0 || G.call(x, V);
      }
      var _e = (0, n.default)(D, he, se, function(V) {
        Q(function(G) {
          var fe = G + V;
          return fe;
        });
      }), we = (0, s.default)(_e, 2), te = we[0], Te = we[1];
      (0, o.default)(D, w, function(V, G) {
        return Oe(V, G) ? !1 : (te({
          preventDefault: function() {
          },
          deltaY: V
        }), !0);
      });
      function Le(V) {
        D.value && V.preventDefault();
      }
      var ce = function() {
        w.value && (w.value.removeEventListener("wheel", te, S.default ? {
          passive: !1
        } : !1), w.value.removeEventListener("DOMMouseScroll", Te), w.value.removeEventListener("MozMousePixelScroll", Le));
      };
      (0, e.watchEffect)(function() {
        (0, e.nextTick)(function() {
          w.value && (ce(), w.value.addEventListener("wheel", te, S.default ? {
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
        return x.height && (V = (0, v.default)((0, d.default)({}, x.fullHeight ? "height" : "maxHeight", x.height + "px"), L), D.value && (V.overflowY = "hidden", P.scrollMoving && (V.pointerEvents = "none"))), V;
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
        onFallbackScroll: Pe,
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
      var x = this, O = (0, v.default)((0, v.default)({}, this.$props), this.$attrs), R = O.prefixCls, D = R === void 0 ? "rc-virtual-list" : R, E = O.height;
      O.itemHeight, O.fullHeight, O.data, O.itemKey, O.virtual;
      var P = O.component, m = P === void 0 ? "div" : P;
      O.onScroll;
      var M = O.children, l = M === void 0 ? this.$slots.default : M, w = O.style, I = O.class, K = (0, i.default)(O, _), J = (0, h.default)(D, I), U = this.state.scrollTop, Q = this.calRes, re = Q.scrollHeight, de = Q.offset, ie = Q.start, W = Q.end, T = this.componentStyle, Y = this.onFallbackScroll, k = this.onScrollBar, ae = this.useVirtual, oe = this.collectHeight, Z = this.sharedConfig, he = this.setInstance, se = this.mergedData;
      return (0, e.createVNode)("div", (0, v.default)({
        style: (0, v.default)((0, v.default)({}, w), {}, {
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
          return [(0, e.createVNode)(c.default, {
            prefixCls: D,
            height: re,
            offset: de,
            onInnerResize: oe,
            ref: "fillerInnerRef"
          }, {
            default: function() {
              return F(se, ie, W, he, l, Z);
            }
          })];
        }
      }), ae && (0, e.createVNode)(y.default, {
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
  var t = le.exports;
  Object.defineProperty(gt, "__esModule", {
    value: !0
  }), gt.default = void 0;
  var e = t(lr()), i = e.default;
  return gt.default = i, gt;
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
  }), Ot.default = d, Ot.useProvideSelectProps = i;
  var t = ue, e = Symbol("SelectContextKey");
  function i(v) {
    return (0, t.provide)(e, v);
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
  var t = le.exports;
  Object.defineProperty(mt, "__esModule", {
    value: !0
  }), mt.default = void 0;
  var e = ue, i = t($e()), d = t(Vt()), v = t(Ve()), g = t(un()), s = t(zt()), c = t(Ye()), b = t(an()), y = ut(), r = t(Yt()), f = t(ir()), n = t($a()), o = cr(), u = t(fa()), a = t(cn()), h = t(ma()), S = ["disabled", "title", "children", "style", "class", "className"];
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
      var ee = A.expose, x = A.slots, O = (0, a.default)(), R = (0, h.default)(), D = (0, e.computed)(function() {
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
      }, l = function(T) {
        for (var Y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1, k = E.value.length, ae = 0; ae < k; ae += 1) {
          var oe = (T + ae * Y + k) % k, Z = E.value[oe], he = Z.group, se = Z.data;
          if (!he && !se.disabled)
            return oe;
        }
        return -1;
      }, w = (0, e.reactive)({
        activeIndex: l(0)
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
        I(R.defaultActiveFirstOption !== !1 ? l(0) : -1);
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
        var Y = T.data || {}, k = Y.value, ae = T.group, oe = (0, b.default)(Y, !0), Z = U(T);
        return T ? (0, e.createVNode)("div", (0, v.default)((0, v.default)({
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
            if (Y === s.default.UP ? ae = -1 : Y === s.default.DOWN ? ae = 1 : (0, o.isPlatformMac)() && k && (Y === s.default.N ? ae = 1 : Y === s.default.P && (ae = -1)), ae !== 0) {
              var oe = l(w.activeIndex + ae, ae);
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
        var W = O.id, T = O.notFoundContent, Y = O.onPopupScroll, k = R.menuItemSelectedIcon, ae = R.fieldNames, oe = R.virtual, Z = R.listHeight, he = R.listItemHeight, se = x.option, Oe = w.activeIndex, We = Object.keys(ae).map(function(Pe) {
          return ae[Pe];
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
        }, [Q(Oe - 1), Q(Oe), Q(Oe + 1)]), (0, e.createVNode)(f.default, {
          itemKey: "key",
          ref: P,
          data: E.value,
          height: Z,
          itemHeight: he,
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
                class: (0, c.default)(D.value, "".concat(D.value, "-group")),
                title: fe
              }, [se ? se(ce) : V !== void 0 ? V : Be]);
            }
            var me = ce.disabled, Me = ce.title;
            ce.children;
            var Ge = ce.style, Ae = ce.class, Xe = ce.className, Ie = (0, d.default)(ce, S), Ue = (0, u.default)(Ie, We), be = K(ye), xe = "".concat(D.value, "-option"), Ce = (0, c.default)(D.value, xe, Ae, Xe, (te = {}, (0, i.default)(te, "".concat(xe, "-grouped"), Le), (0, i.default)(te, "".concat(xe, "-active"), Oe === we && !me), (0, i.default)(te, "".concat(xe, "-disabled"), me), (0, i.default)(te, "".concat(xe, "-selected"), be), te)), De = U(_e), Ne = !k || typeof k == "function" || be, Ee = typeof De == "number" ? De : De || ye, at = _(Ee) ? Ee.toString() : void 0;
            return Me !== void 0 && (at = Me), (0, e.createVNode)("div", (0, v.default)((0, v.default)({}, Ue), {}, {
              "aria-selected": be,
              class: Ce,
              title: at,
              onMousemove: function(p) {
                Ie.onMousemove && Ie.onMousemove(p), !(Oe === we || me) && I(we);
              },
              onClick: function(p) {
                me || J(ye), Ie.onClick && Ie.onClick(p);
              },
              style: Ge
            }), [(0, e.createVNode)("div", {
              class: "".concat(xe, "-content")
            }, [se ? se(ce) : Ee]), (0, y.isValidElement)(k) || be, Ne && (0, e.createVNode)(g.default, {
              class: "".concat(D.value, "-option-state"),
              customizeIcon: k,
              customizeIconProps: {
                isSelected: be
              }
            }, {
              default: function() {
                return [be ? "\u2713" : null];
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
  var t = le.exports;
  Object.defineProperty(Ht, "__esModule", {
    value: !0
  }), Ht.convertChildrenToData = s;
  var e = t(Ve()), i = t(Vt()), d = ut(), v = ["value", "disabled"];
  function g(c) {
    var b = c.key, y = c.children, r = c.props, f = r.value, n = r.disabled, o = (0, i.default)(r, v), u = y == null ? void 0 : y.default;
    return (0, e.default)({
      key: b,
      value: f !== void 0 ? f : b,
      children: u,
      disabled: n || n === ""
    }, o);
  }
  function s(c) {
    var b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, y = (0, d.flattenChildren)(c).map(function(r, f) {
      var n;
      if (!(0, d.isValidElement)(r) || !r.type)
        return null;
      var o = r.type.isSelectOptGroup, u = r.key, a = r.children, h = r.props;
      if (b || !o)
        return g(r);
      var S = a && a.default ? a.default() : void 0, _ = (h == null ? void 0 : h.label) || ((n = a.label) === null || n === void 0 ? void 0 : n.call(a)) || u;
      return (0, e.default)((0, e.default)({
        key: "__RC_SELECT_GRP__".concat(u === null ? f : String(u), "__")
      }, h), {}, {
        label: _,
        options: s(S || [])
      });
    }).filter(function(r) {
      return r;
    });
    return y;
  }
  return Ht;
}
var Qn;
function fr() {
  if (Qn)
    return $t;
  Qn = 1, Object.defineProperty($t, "__esModule", {
    value: !0
  }), $t.default = i;
  var t = ue, e = ga();
  function i(d, v, g) {
    var s = (0, t.shallowRef)(), c = (0, t.shallowRef)(), b = (0, t.shallowRef)(), y = (0, t.shallowRef)([]);
    return (0, t.watch)([d, v], function() {
      d.value ? y.value = (0, t.toRaw)(d.value).slice() : y.value = (0, e.convertChildrenToData)(v.value);
    }, {
      immediate: !0,
      deep: !0
    }), (0, t.watchEffect)(function() {
      var r = y.value, f = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), o = g.value;
      function u(a) {
        for (var h = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, S = 0; S < a.length; S += 1) {
          var _ = a[S];
          !_[o.options] || h ? (f.set(_[o.value], _), n.set(_[o.label], _)) : u(_[o.options], !0);
        }
      }
      u(r), s.value = r, c.value = f, b.value = n;
    }), {
      options: s,
      valueOptions: c,
      labelOptions: b
    };
  }
  return $t;
}
var nt = {}, Zn;
function sr() {
  if (Zn)
    return nt;
  Zn = 1;
  var t = le.exports;
  Object.defineProperty(nt, "__esModule", {
    value: !0
  }), nt.default = s, nt.getUUID = g, nt.isBrowserClient = void 0;
  var e = ue, i = t(Va()), d = 0, v = process.env.NODE_ENV !== "test" && (0, i.default)();
  nt.isBrowserClient = v;
  function g() {
    var c;
    return v ? (c = d, d += 1) : c = "TEST_OR_SSR", c;
  }
  function s() {
    var c = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : (0, e.ref)(""), b = "rc_select_".concat(g());
    return c.value || b;
  }
  return nt;
}
var Pt = {}, ze = {}, Jn;
function fn() {
  if (Jn)
    return ze;
  Jn = 1, Object.defineProperty(ze, "__esModule", {
    value: !0
  }), ze.isClient = ze.isBrowserClient = void 0, ze.toArray = t;
  function t(d) {
    return Array.isArray(d) ? d : d !== void 0 ? [d] : [];
  }
  var e = typeof window < "u" && window.document && window.document.documentElement;
  ze.isClient = e;
  var i = process.env.NODE_ENV !== "test" && e;
  return ze.isBrowserClient = i, ze;
}
var ea;
function vr() {
  if (ea)
    return Pt;
  ea = 1;
  var t = le.exports, e = Ke.exports;
  Object.defineProperty(Pt, "__esModule", {
    value: !0
  }), Pt.default = void 0;
  var i = t(Ke.exports), d = y(ia()), v = ga(), g = fn(), s = ut(), c = dn();
  function b(n) {
    if (typeof WeakMap != "function")
      return null;
    var o = /* @__PURE__ */ new WeakMap(), u = /* @__PURE__ */ new WeakMap();
    return (b = function(h) {
      return h ? u : o;
    })(n);
  }
  function y(n, o) {
    if (!o && n && n.__esModule)
      return n;
    if (n === null || e(n) !== "object" && typeof n != "function")
      return { default: n };
    var u = b(o);
    if (u && u.has(n))
      return u.get(n);
    var a = {}, h = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var S in n)
      if (S !== "default" && Object.prototype.hasOwnProperty.call(n, S)) {
        var _ = h ? Object.getOwnPropertyDescriptor(n, S) : null;
        _ && (_.get || _.set) ? Object.defineProperty(a, S, _) : a[S] = n[S];
      }
    return a.default = n, u && u.set(n, a), a;
  }
  function r(n) {
    var o = n.mode, u = n.options, a = n.children, h = n.backfill, S = n.allowClear, _ = n.placeholder, N = n.getInputElement, L = n.showSearch, F = n.onSearch, X = n.defaultOpen, A = n.autofocus, ee = n.labelInValue, x = n.value, O = n.inputValue, R = n.optionLabelProp, D = (0, c.isMultiple)(o), E = L !== void 0 ? L : D || o === "combobox", P = u || (0, v.convertChildrenToData)(a);
    if ((0, d.default)(o !== "tags" || P.every(function(l) {
      return !l.disabled;
    }), "Please avoid setting option to disabled in tags mode since user can always type text as tag."), (0, d.default)(o !== "combobox" || !R, "`combobox` mode not support `optionLabelProp`. Please set `value` on Option directly."), (0, d.default)(o === "combobox" || !h, "`backfill` only works with `combobox` mode."), (0, d.default)(o === "combobox" || !N, "`getInputElement` only work with `combobox` mode."), (0, d.noteOnce)(o !== "combobox" || !N || !S || !_, "Customize `getInputElement` should customize clear and placeholder logic instead of configuring `allowClear` and `placeholder`."), F && !E && o !== "combobox" && o !== "tags" && (0, d.default)(!1, "`onSearch` should work with `showSearch` instead of use alone."), (0, d.noteOnce)(!X || A, "`defaultOpen` makes Select open without focus which means it will not close by click outside. You can set `autofocus` if needed."), x != null) {
      var m = (0, g.toArray)(x);
      (0, d.default)(!ee || m.every(function(l) {
        return (0, i.default)(l) === "object" && ("key" in l || "value" in l);
      }), "`value` should in shape of `{ value: string | number, label?: any }` when you set `labelInValue` to `true`"), (0, d.default)(!D || Array.isArray(x), "`value` should be array when `mode` is `multiple` or `tags`");
    }
    if (a) {
      var M = null;
      a.some(function(l) {
        if (!(0, s.isValidElement)(l) || !l.type)
          return !1;
        var w = l.type;
        if (w.isSelectOption)
          return !1;
        if (w.isSelectOptGroup) {
          var I, K = ((I = l.children) === null || I === void 0 ? void 0 : I.default()) || [], J = K.every(function(U) {
            return !(0, s.isValidElement)(U) || !l.type || U.type.isSelectOption ? !0 : (M = U.type, !1);
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
  var t = le.exports;
  Object.defineProperty(Mt, "__esModule", {
    value: !0
  }), Mt.default = void 0;
  var e = t($e()), i = t(Ve()), d = fn(), v = on(), g = ue;
  function s(b, y) {
    return (0, d.toArray)(b).join("").toUpperCase().includes(y);
  }
  var c = function(y, r, f, n, o) {
    return (0, g.computed)(function() {
      var u = f.value, a = o == null ? void 0 : o.value, h = n == null ? void 0 : n.value;
      if (!u || h === !1)
        return y.value;
      var S = r.value, _ = S.options, N = S.label, L = S.value, F = [], X = typeof h == "function", A = u.toUpperCase(), ee = X ? h : function(O, R) {
        return a ? s(R[a], A) : R[_] ? s(R[N !== "children" ? N : "label"], A) : s(R[L], A);
      }, x = X ? function(O) {
        return (0, v.injectPropsWithOption)(O);
      } : function(O) {
        return O;
      };
      return y.value.forEach(function(O) {
        if (O[_]) {
          var R = ee(u, x(O));
          if (R)
            F.push(O);
          else {
            var D = O[_].filter(function(E) {
              return ee(u, x(E));
            });
            D.length && F.push((0, i.default)((0, i.default)({}, O), {}, (0, e.default)({}, _, D)));
          }
          return;
        }
        ee(u, x(O)) && F.push(O);
      }), F;
    });
  };
  return Mt.default = c, Mt;
}
var It = {}, na;
function hr() {
  if (na)
    return It;
  na = 1;
  var t = le.exports;
  Object.defineProperty(It, "__esModule", {
    value: !0
  }), It.default = void 0;
  var e = t(Ve()), i = ue, d = function(g, s) {
    var c = (0, i.shallowRef)({
      values: /* @__PURE__ */ new Map(),
      options: /* @__PURE__ */ new Map()
    }), b = (0, i.computed)(function() {
      var r = c.value, f = r.values, n = r.options, o = g.value.map(function(h) {
        if (h.label === void 0) {
          var S;
          return (0, e.default)((0, e.default)({}, h), {}, {
            label: (S = f.get(h.value)) === null || S === void 0 ? void 0 : S.label
          });
        }
        return h;
      }), u = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map();
      return o.forEach(function(h) {
        u.set(h.value, h), a.set(h.value, s.value.get(h.value) || n.get(h.value));
      }), c.value.values = u, c.value.options = a, o;
    }), y = function(f) {
      return s.value.get(f) || c.value.options.get(f);
    };
    return [b, y];
  };
  return It.default = d, It;
}
var aa;
function mr() {
  if (aa)
    return ot;
  aa = 1;
  var t = le.exports, e = Ke.exports;
  Object.defineProperty(ot, "__esModule", {
    value: !0
  }), ot.default = void 0, ot.selectProps = R;
  var i = ue, d = t(tn()), v = t($e()), g = t(jt()), s = t(Ke.exports), c = t(Ve()), b = x(dn()), y = t(dr()), r = t(fr()), f = ma(), n = t(sr()), o = on(), u = t(vr()), a = fn(), h = t(pr()), S = t(hr()), _ = t(He()), N = ut(), L = t(La()), F = t(Ha()), X = pa(), A = t(fa());
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
    var l = {}, w = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var I in P)
      if (I !== "default" && Object.prototype.hasOwnProperty.call(P, I)) {
        var K = w ? Object.getOwnPropertyDescriptor(P, I) : null;
        K && (K.get || K.set) ? Object.defineProperty(l, I, K) : l[I] = P[I];
      }
    return l.default = P, M && M.set(P, l), l;
  }
  var O = ["inputValue"];
  function R() {
    return (0, c.default)((0, c.default)({}, (0, b.baseSelectPropsWithoutPrivate)()), {}, {
      prefixCls: String,
      id: String,
      backfill: {
        type: Boolean,
        default: void 0
      },
      fieldNames: Object,
      inputValue: String,
      searchValue: String,
      onSearch: Function,
      autoClearSearchValue: {
        type: Boolean,
        default: void 0
      },
      onSelect: Function,
      onDeselect: Function,
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
  var E = (0, i.defineComponent)({
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
      var l = M.expose, w = M.attrs, I = M.slots, K = (0, n.default)((0, i.toRef)(m, "id")), J = (0, i.computed)(function() {
        return (0, b.isMultiple)(m.mode);
      }), U = (0, i.computed)(function() {
        return !!(!m.options && m.children);
      }), Q = (0, i.computed)(function() {
        return m.filterOption === void 0 && m.mode === "combobox" ? !1 : m.filterOption;
      }), re = (0, i.computed)(function() {
        return (0, o.fillFieldNames)(m.fieldNames, U.value);
      }), de = (0, L.default)("", {
        value: (0, i.computed)(function() {
          return m.searchValue !== void 0 ? m.searchValue : m.inputValue;
        }),
        postState: function(C) {
          return C || "";
        }
      }), ie = (0, g.default)(de, 2), W = ie[0], T = ie[1], Y = (0, r.default)((0, i.toRef)(m, "options"), (0, i.toRef)(m, "children"), re), k = Y.valueOptions, ae = Y.labelOptions, oe = Y.options, Z = function(C) {
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
      }, he = (0, L.default)(m.defaultValue, {
        value: (0, i.toRef)(m, "value")
      }), se = (0, g.default)(he, 2), Oe = se[0], We = se[1], Pe = (0, i.computed)(function() {
        var H, C = Z(Oe.value);
        return m.mode === "combobox" && !((H = C[0]) !== null && H !== void 0 && H.value) ? [] : C;
      }), _e = (0, S.default)(Pe, k), we = (0, g.default)(_e, 2), te = we[0], Te = we[1], Le = (0, i.computed)(function() {
        if (!m.mode && te.value.length === 1) {
          var H = te.value[0];
          if (H.value === null && (H.label === null || H.label === void 0))
            return [];
        }
        return te.value.map(function(C) {
          var q;
          return (0, c.default)((0, c.default)({}, C), {}, {
            label: (q = typeof C.label == "function" ? C.label() : C.label) !== null && q !== void 0 ? q : C.value
          });
        });
      }), ce = (0, i.computed)(function() {
        return new Set(te.value.map(function(H) {
          return H.value;
        }));
      });
      (0, i.watchEffect)(function() {
        if (m.mode === "combobox") {
          var H, C = (H = te.value[0]) === null || H === void 0 ? void 0 : H.value;
          C != null && T(String(C));
        }
      }, {
        flush: "post"
      });
      var ye = function(C, q) {
        var B, ne = q != null ? q : C;
        return B = {}, (0, v.default)(B, re.value.value, C), (0, v.default)(B, re.value.label, ne), B;
      }, Be = (0, i.shallowRef)();
      (0, i.watchEffect)(function() {
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
      var V = (0, h.default)(Be, re, W, Q, (0, i.toRef)(m, "optionFilterProp")), G = (0, i.computed)(function() {
        return m.mode !== "tags" || !W.value || V.value.some(function(H) {
          return H[m.optionFilterProp || "value"] === W.value;
        }) ? V.value : [ye(W.value)].concat((0, d.default)(V.value));
      }), fe = (0, i.computed)(function() {
        return m.filterSort ? (0, d.default)(G.value).sort(function(H, C) {
          return m.filterSort(H, C);
        }) : G.value;
      }), me = (0, i.computed)(function() {
        return (0, o.flattenOptions)(fe.value, {
          fieldNames: re.value,
          childrenAsData: U.value
        });
      }), Me = function(C) {
        var q = Z(C);
        if (We(q), m.onChange && (q.length !== te.value.length || q.some(function(z, Re) {
          var qe;
          return ((qe = te.value[Re]) === null || qe === void 0 ? void 0 : qe.value) !== (z == null ? void 0 : z.value);
        }))) {
          var B = m.labelInValue ? q.map(function(z) {
            return (0, c.default)((0, c.default)({}, z), {}, {
              originLabel: z.label,
              label: typeof z.label == "function" ? z.label() : z.label
            });
          }) : q.map(function(z) {
            return z.value;
          }), ne = q.map(function(z) {
            return (0, o.injectPropsWithOption)(Te(z.value));
          });
          m.onChange(
            J.value ? B : B[0],
            J.value ? ne : ne[0]
          );
        }
      }, Ge = (0, F.default)(null), Ae = (0, g.default)(Ge, 2), Xe = Ae[0], Ie = Ae[1], Ue = (0, F.default)(0), be = (0, g.default)(Ue, 2), xe = be[0], Ce = be[1], De = (0, i.computed)(function() {
        return m.defaultActiveFirstOption !== void 0 ? m.defaultActiveFirstOption : m.mode !== "combobox";
      }), Ne = function(C, q) {
        var B = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, ne = B.source, z = ne === void 0 ? "keyboard" : ne;
        Ce(q), m.backfill && m.mode === "combobox" && C !== null && z === "keyboard" && Ie(String(C));
      }, Ee = function(C, q) {
        var B = function() {
          var lt, ke = Te(C), rt = ke == null ? void 0 : ke[re.value.label];
          return [m.labelInValue ? {
            label: typeof rt == "function" ? rt() : rt,
            originLabel: rt,
            value: C,
            key: (lt = ke == null ? void 0 : ke.key) !== null && lt !== void 0 ? lt : C
          } : C, (0, o.injectPropsWithOption)(ke)];
        };
        if (q && m.onSelect) {
          var ne = B(), z = (0, g.default)(ne, 2), Re = z[0], qe = z[1];
          m.onSelect(Re, qe);
        } else if (!q && m.onDeselect) {
          var Qe = B(), Se = (0, g.default)(Qe, 2), Ze = Se[0], Gt = Se[1];
          m.onDeselect(Ze, Gt);
        }
      }, at = function(C, q) {
        var B, ne = J.value ? q.selected : !0;
        ne ? B = J.value ? [].concat((0, d.default)(te.value), [C]) : [C] : B = te.value.filter(function(z) {
          return z.value !== C;
        }), Me(B), Ee(C, ne), m.mode === "combobox" ? Ie("") : (!J.value || m.autoClearSearchValue) && (T(""), Ie(""));
      }, j = function(C, q) {
        Me(C), (q.type === "remove" || q.type === "clear") && q.values.forEach(function(B) {
          Ee(B.value, !1);
        });
      }, p = function(C, q) {
        if (T(C), Ie(null), q.source === "submit") {
          var B = (C || "").trim();
          if (B) {
            var ne = Array.from(new Set([].concat((0, d.default)(ce.value), [B])));
            Me(ne), Ee(B, !0), T("");
          }
          return;
        }
        if (q.source !== "blur") {
          var z;
          m.mode === "combobox" && Me(C), (z = m.onSearch) === null || z === void 0 || z.call(m, C);
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
        Me(B), B.forEach(function(ne) {
          Ee(ne, !0);
        });
      }, ge = (0, i.computed)(function() {
        return m.virtual !== !1 && m.dropdownMatchSelectWidth !== !1;
      });
      (0, f.useProvideSelectProps)((0, X.toReactive)((0, c.default)((0, c.default)({}, Y), {}, {
        flattenOptions: me,
        onActiveValue: Ne,
        defaultActiveFirstOption: De,
        onSelect: at,
        menuItemSelectedIcon: (0, i.toRef)(m, "menuItemSelectedIcon"),
        rawValues: ce,
        fieldNames: re,
        virtual: ge,
        listHeight: (0, i.toRef)(m, "listHeight"),
        listItemHeight: (0, i.toRef)(m, "listItemHeight"),
        childrenAsData: U
      }))), process.env.NODE_ENV !== "production" && (0, i.watchEffect)(function() {
        (0, u.default)(m);
      }, {
        flush: "post"
      });
      var ve = (0, i.ref)();
      l({
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
      var pe = (0, i.computed)(function() {
        return (0, A.default)(m, [
          "id",
          "mode",
          "prefixCls",
          "backfill",
          "fieldNames",
          "inputValue",
          "searchValue",
          "onSearch",
          "autoClearSearchValue",
          "onSelect",
          "onDeselect",
          "dropdownMatchSelectWidth",
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
          "value",
          "defaultValue",
          "labelInValue",
          "onChange"
        ]);
      });
      return function() {
        return (0, i.createVNode)(b.default, (0, c.default)((0, c.default)((0, c.default)({}, pe.value), w), {}, {
          id: K,
          prefixCls: m.prefixCls,
          ref: ve,
          omitDomProps: O,
          mode: m.mode,
          displayValues: Le.value,
          onDisplayValuesChange: j,
          searchValue: W.value,
          onSearch: p,
          onSearchSplit: $,
          dropdownMatchSelectWidth: m.dropdownMatchSelectWidth,
          OptionList: y.default,
          emptyOptions: !me.value.length,
          activeValue: Xe.value,
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
    var e = le.exports, i = Ke.exports;
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
        return g.default;
      }
    }), Object.defineProperty(t, "Option", {
      enumerable: !0,
      get: function() {
        return v.default;
      }
    }), t.default = void 0, Object.defineProperty(t, "selectProps", {
      enumerable: !0,
      get: function() {
        return d.selectProps;
      }
    }), Object.defineProperty(t, "useBaseProps", {
      enumerable: !0,
      get: function() {
        return c.default;
      }
    });
    var d = y(mr()), v = e(gr()), g = e(yr()), s = e(dn()), c = e(cn());
    function b(f) {
      if (typeof WeakMap != "function")
        return null;
      var n = /* @__PURE__ */ new WeakMap(), o = /* @__PURE__ */ new WeakMap();
      return (b = function(a) {
        return a ? o : n;
      })(f);
    }
    function y(f, n) {
      if (!n && f && f.__esModule)
        return f;
      if (f === null || i(f) !== "object" && typeof f != "function")
        return { default: f };
      var o = b(n);
      if (o && o.has(f))
        return o.get(f);
      var u = {}, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var h in f)
        if (h !== "default" && Object.prototype.hasOwnProperty.call(f, h)) {
          var S = a ? Object.getOwnPropertyDescriptor(f, h) : null;
          S && (S.get || S.set) ? Object.defineProperty(u, h, S) : u[h] = f[h];
        }
      return u.default = f, o && o.set(f, u), u;
    }
    var r = d.default;
    t.default = r;
  }(en)), en;
}
var Wt = {}, la;
function Br() {
  if (la)
    return Wt;
  la = 1;
  var t = le.exports;
  Object.defineProperty(Wt, "__esModule", {
    value: !0
  }), Wt.default = b;
  var e = ue, i = t(Wa()), d = t(Ta()), v = t(Ea()), g = t(Da()), s = t(Na()), c = t(Aa());
  function b(y) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, f = y.loading, n = y.multiple, o = y.prefixCls, u = y.suffixIcon || r.suffixIcon && r.suffixIcon(), a = y.clearIcon || r.clearIcon && r.clearIcon(), h = y.menuItemSelectedIcon || r.menuItemSelectedIcon && r.menuItemSelectedIcon(), S = y.removeIcon || r.removeIcon && r.removeIcon(), _ = a;
    a || (_ = (0, e.createVNode)(s.default, null, null));
    var N = null;
    if (u !== void 0)
      N = u;
    else if (f)
      N = (0, e.createVNode)(d.default, {
        spin: !0
      }, null);
    else {
      var L = "".concat(o, "-suffix");
      N = function(ee) {
        var x = ee.open, O = ee.showSearch;
        return x && O ? (0, e.createVNode)(c.default, {
          class: L
        }, null) : (0, e.createVNode)(i.default, {
          class: L
        }, null);
      };
    }
    var F = null;
    h !== void 0 ? F = h : n ? F = (0, e.createVNode)(v.default, null, null) : F = null;
    var X = null;
    return S !== void 0 ? X = S : X = (0, e.createVNode)(g.default, null, null), {
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
