import { r as ze, k as Pe, e as Ba, a as Oa, l as wt, b as Ve, d as yt, M as ya, t as Le, c as wa, s as Na, w as mt, v as Nt, z as Kt, i as Dt, j as It } from "./useConfigInject.fdc04e2e.js";
import { _ as qe } from "./index.1fa3133f.js";
import { r as pe } from "./_vue_commonjs-external.cdc460b2.js";
import { r as Ka, b as Et, c as Tt, a as Rt } from "./iconUtil.1001c051.js";
import { r as Ua } from "./omit.ba8a174d.js";
import { g as At } from "./useMergedState.94fe30d0.js";
import { r as Vt } from "./pickAttrs.65eceb8b.js";
import { r as Lt } from "./vnode.716a0aad.js";
import { r as Mt } from "./useState.0fa93a30.js";
import { r as qt } from "./KeyCode.93922cee.js";
import { r as $t } from "./RightOutlined.6a1a2e8d.js";
import { r as Ft } from "./LeftOutlined.cc9d3903.js";
import { r as jt } from "./index.ae5edccb.js";
function Bt(a, e) {
  for (var t = 0; t < e.length; t++) {
    const b = e[t];
    if (typeof b != "string" && !Array.isArray(b)) {
      for (const h in b)
        if (h !== "default" && !(h in a)) {
          const u = Object.getOwnPropertyDescriptor(b, h);
          u && Object.defineProperty(a, h, u.get ? u : {
            enumerable: !0,
            get: () => b[h]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(a, Symbol.toStringTag, { value: "Module" }));
}
var ma = {}, $a = {}, Fa = {}, Oe = {}, Ga;
function ea() {
  if (Ga)
    return Oe;
  Ga = 1, Object.defineProperty(Oe, "__esModule", {
    value: !0
  }), Oe.VALUE_SPLIT = Oe.SHOW_PARENT = Oe.SHOW_CHILD = void 0, Oe.fillFieldNames = i, Oe.isLeaf = f, Oe.scrollIntoParentView = p, Oe.toPathKey = b, Oe.toPathKeys = h, Oe.toPathValueStr = u;
  var a = "__RC_CASCADER_SPLIT__";
  Oe.VALUE_SPLIT = a;
  var e = "SHOW_PARENT";
  Oe.SHOW_PARENT = e;
  var t = "SHOW_CHILD";
  Oe.SHOW_CHILD = t;
  function b(d) {
    return d.join(a);
  }
  function h(d) {
    return d.map(b);
  }
  function u(d) {
    return d.split(a);
  }
  function i(d) {
    var r = d || {}, v = r.label, _ = r.value, w = r.children, I = _ || "value";
    return {
      label: v || "label",
      value: I,
      key: I,
      children: w || "children"
    };
  }
  function f(d, r) {
    var v, _;
    return (v = d.isLeaf) !== null && v !== void 0 ? v : !((_ = d[r.children]) !== null && _ !== void 0 && _.length);
  }
  function p(d) {
    var r = d.parentElement;
    if (!!r) {
      var v = d.offsetTop - r.offsetTop;
      v - r.scrollTop < 0 ? r.scrollTo({
        top: v
      }) : v + d.offsetHeight - r.scrollTop > r.offsetHeight && r.scrollTo({
        top: v + d.offsetHeight - r.offsetHeight
      });
    }
  }
  return Oe;
}
var la = {}, Ke = {}, be = {}, ua = {}, Ie = {}, za;
function Ut() {
  if (za)
    return Ie;
  za = 1, Object.defineProperty(Ie, "__esModule", {
    value: !0
  }), Ie.useProvideKeysState = Ie.useInjectTreeContext = Ie.useInjectKeysState = Ie.TreeContext = void 0;
  var a = pe, e = Symbol("TreeContextKey"), t = (0, a.defineComponent)({
    compatConfig: {
      MODE: 3
    },
    name: "TreeContext",
    props: {
      value: {
        type: Object
      }
    },
    setup: function(p, d) {
      var r = d.slots;
      return (0, a.provide)(e, (0, a.computed)(function() {
        return p.value;
      })), function() {
        var v;
        return (v = r.default) === null || v === void 0 ? void 0 : v.call(r);
      };
    }
  });
  Ie.TreeContext = t;
  var b = function() {
    return (0, a.inject)(e, (0, a.computed)(function() {
      return {};
    }));
  };
  Ie.useInjectTreeContext = b;
  var h = Symbol("KeysStateKey"), u = function(p) {
    (0, a.provide)(h, p);
  };
  Ie.useProvideKeysState = u;
  var i = function() {
    return (0, a.inject)(h, {
      expandedKeys: (0, a.shallowRef)([]),
      selectedKeys: (0, a.shallowRef)([]),
      loadedKeys: (0, a.shallowRef)([]),
      loadingKeys: (0, a.shallowRef)([]),
      checkedKeys: (0, a.shallowRef)([]),
      halfCheckedKeys: (0, a.shallowRef)([]),
      expandedKeysSet: (0, a.computed)(function() {
        return /* @__PURE__ */ new Set();
      }),
      selectedKeysSet: (0, a.computed)(function() {
        return /* @__PURE__ */ new Set();
      }),
      loadedKeysSet: (0, a.computed)(function() {
        return /* @__PURE__ */ new Set();
      }),
      loadingKeysSet: (0, a.computed)(function() {
        return /* @__PURE__ */ new Set();
      }),
      checkedKeysSet: (0, a.computed)(function() {
        return /* @__PURE__ */ new Set();
      }),
      halfCheckedKeysSet: (0, a.computed)(function() {
        return /* @__PURE__ */ new Set();
      }),
      flattenNodes: (0, a.shallowRef)([])
    });
  };
  return Ie.useInjectKeysState = i, Ie;
}
var ia = {}, Xa;
function Wt() {
  if (Xa)
    return ia;
  Xa = 1;
  var a = Pe.exports;
  Object.defineProperty(ia, "__esModule", {
    value: !0
  }), ia.default = void 0;
  var e = pe, t = a(ze()), b = function(i) {
    for (var f = i.prefixCls, p = i.level, d = i.isStart, r = i.isEnd, v = "".concat(f, "-indent-unit"), _ = [], w = 0; w < p; w += 1) {
      var I;
      _.push((0, e.createVNode)("span", {
        key: w,
        class: (I = {}, (0, t.default)(I, v, !0), (0, t.default)(I, "".concat(v, "-start"), d[w]), (0, t.default)(I, "".concat(v, "-end"), r[w]), I)
      }, null));
    }
    return (0, e.createVNode)("span", {
      "aria-hidden": "true",
      class: "".concat(f, "-indent")
    }, [_]);
  }, h = b;
  return ia.default = h, ia;
}
var Ae = {}, Ya;
function Ht() {
  if (Ya)
    return Ae;
  Ya = 1;
  var a = Pe.exports;
  Object.defineProperty(Ae, "__esModule", {
    value: !0
  }), Ae.treeProps = Ae.treeNodeProps = Ae.nodeListProps = void 0;
  var e = a(Ba()), t = {
    eventKey: [String, Number],
    prefixCls: String,
    title: e.default.any,
    data: {
      type: Object,
      default: void 0
    },
    parent: {
      type: Object,
      default: void 0
    },
    isStart: {
      type: Array
    },
    isEnd: {
      type: Array
    },
    active: {
      type: Boolean,
      default: void 0
    },
    onMousemove: {
      type: Function
    },
    isLeaf: {
      type: Boolean,
      default: void 0
    },
    checkable: {
      type: Boolean,
      default: void 0
    },
    selectable: {
      type: Boolean,
      default: void 0
    },
    disabled: {
      type: Boolean,
      default: void 0
    },
    disableCheckbox: {
      type: Boolean,
      default: void 0
    },
    icon: e.default.any,
    switcherIcon: e.default.any,
    domRef: {
      type: Function
    }
  };
  Ae.treeNodeProps = t;
  var b = {
    prefixCls: {
      type: String
    },
    motion: {
      type: Object
    },
    focusable: {
      type: Boolean
    },
    activeItem: {
      type: Object
    },
    focused: {
      type: Boolean
    },
    tabindex: {
      type: Number
    },
    checkable: {
      type: Boolean
    },
    selectable: {
      type: Boolean
    },
    disabled: {
      type: Boolean
    },
    height: {
      type: Number
    },
    itemHeight: {
      type: Number
    },
    virtual: {
      type: Boolean
    },
    onScroll: {
      type: Function
    },
    onKeydown: {
      type: Function
    },
    onFocus: {
      type: Function
    },
    onBlur: {
      type: Function
    },
    onActiveChange: {
      type: Function
    },
    onContextmenu: {
      type: Function
    },
    onListChangeStart: {
      type: Function
    },
    onListChangeEnd: {
      type: Function
    }
  };
  Ae.nodeListProps = b;
  var h = function() {
    return {
      prefixCls: String,
      focusable: {
        type: Boolean,
        default: void 0
      },
      activeKey: [Number, String],
      tabindex: Number,
      children: e.default.any,
      treeData: {
        type: Array
      },
      fieldNames: {
        type: Object
      },
      showLine: {
        type: [Boolean, Object],
        default: void 0
      },
      showIcon: {
        type: Boolean,
        default: void 0
      },
      icon: e.default.any,
      selectable: {
        type: Boolean,
        default: void 0
      },
      disabled: {
        type: Boolean,
        default: void 0
      },
      multiple: {
        type: Boolean,
        default: void 0
      },
      checkable: {
        type: Boolean,
        default: void 0
      },
      checkStrictly: {
        type: Boolean,
        default: void 0
      },
      draggable: {
        type: [Function, Boolean]
      },
      defaultExpandParent: {
        type: Boolean,
        default: void 0
      },
      autoExpandParent: {
        type: Boolean,
        default: void 0
      },
      defaultExpandAll: {
        type: Boolean,
        default: void 0
      },
      defaultExpandedKeys: {
        type: Array
      },
      expandedKeys: {
        type: Array
      },
      defaultCheckedKeys: {
        type: Array
      },
      checkedKeys: {
        type: [Object, Array]
      },
      defaultSelectedKeys: {
        type: Array
      },
      selectedKeys: {
        type: Array
      },
      allowDrop: {
        type: Function
      },
      dropIndicatorRender: {
        type: Function
      },
      onFocus: {
        type: Function
      },
      onBlur: {
        type: Function
      },
      onKeydown: {
        type: Function
      },
      onContextmenu: {
        type: Function
      },
      onClick: {
        type: Function
      },
      onDblclick: {
        type: Function
      },
      onScroll: {
        type: Function
      },
      onExpand: {
        type: Function
      },
      onCheck: {
        type: Function
      },
      onSelect: {
        type: Function
      },
      onLoad: {
        type: Function
      },
      loadData: {
        type: Function
      },
      loadedKeys: {
        type: Array
      },
      onMouseenter: {
        type: Function
      },
      onMouseleave: {
        type: Function
      },
      onRightClick: {
        type: Function
      },
      onDragstart: {
        type: Function
      },
      onDragenter: {
        type: Function
      },
      onDragover: {
        type: Function
      },
      onDragleave: {
        type: Function
      },
      onDragend: {
        type: Function
      },
      onDrop: {
        type: Function
      },
      onActiveChange: {
        type: Function
      },
      filterTreeNode: {
        type: Function
      },
      motion: e.default.any,
      switcherIcon: e.default.any,
      height: Number,
      itemHeight: Number,
      virtual: {
        type: Boolean,
        default: void 0
      },
      direction: {
        type: String
      }
    };
  };
  return Ae.treeProps = h, Ae;
}
var Sa = {}, Ja;
function Gt() {
  if (Ja)
    return Sa;
  Ja = 1, Object.defineProperty(Sa, "__esModule", {
    value: !0
  }), Sa.default = e;
  var a = pe;
  function e(t) {
    var b = (0, a.shallowRef)();
    return (0, a.watchEffect)(function() {
      b.value = t();
    }, {
      flush: "sync"
    }), b;
  }
  return Sa;
}
var Qa;
function zt() {
  if (Qa)
    return ua;
  Qa = 1;
  var a = Pe.exports;
  Object.defineProperty(ua, "__esModule", {
    value: !0
  }), ua.default = void 0;
  var e = pe, t = a(ze()), b = a(Oa()), h = a(wt()), u = a(Ve()), i = Ut(), f = a(Wt()), p = Ct(), d = Ht(), r = a(yt()), v = ya(), _ = a(Vt()), w = a(Gt()), I = ["eventKey", "isLeaf", "isStart", "isEnd", "domRef", "active", "data", "onMousemove", "selectable"], V = "open", E = "close", S = "---", T = (0, e.defineComponent)({
    compatConfig: {
      MODE: 3
    },
    name: "TreeNode",
    inheritAttrs: !1,
    props: d.treeNodeProps,
    isTreeNode: 1,
    slots: ["title", "icon", "switcherIcon"],
    setup: function(P, g) {
      var s = g.attrs, o = g.slots, m = g.expose;
      (0, v.warning)(!("slots" in P.data), "treeData slots is deprecated, please use ".concat(Object.keys(P.data.slots || {}).map(function(K) {
        return "`v-slot:" + K + "` ";
      }), "instead"));
      var l = (0, e.ref)(!1), n = (0, i.useInjectTreeContext)(), C = (0, i.useInjectKeysState)(), x = C.expandedKeysSet, O = C.selectedKeysSet, N = C.loadedKeysSet, L = C.loadingKeysSet, D = C.checkedKeysSet, y = C.halfCheckedKeysSet, q = n.value, W = q.dragOverNodeKey, J = q.dropPosition, F = q.keyEntities, M = (0, e.computed)(function() {
        return (0, p.getTreeNodeProps)(P.eventKey, {
          expandedKeysSet: x.value,
          selectedKeysSet: O.value,
          loadedKeysSet: N.value,
          loadingKeysSet: L.value,
          checkedKeysSet: D.value,
          halfCheckedKeysSet: y.value,
          dragOverNodeKey: W,
          dropPosition: J,
          keyEntities: F
        });
      }), Q = (0, w.default)(function() {
        return M.value.expanded;
      }), ae = (0, w.default)(function() {
        return M.value.selected;
      }), $ = (0, w.default)(function() {
        return M.value.checked;
      }), G = (0, w.default)(function() {
        return M.value.loaded;
      }), te = (0, w.default)(function() {
        return M.value.loading;
      }), Y = (0, w.default)(function() {
        return M.value.halfChecked;
      }), oe = (0, w.default)(function() {
        return M.value.dragOver;
      }), ce = (0, w.default)(function() {
        return M.value.dragOverGapTop;
      }), se = (0, w.default)(function() {
        return M.value.dragOverGapBottom;
      }), ve = (0, w.default)(function() {
        return M.value.pos;
      }), ie = (0, e.ref)(), he = (0, e.computed)(function() {
        var K = P.eventKey, c = n.value.keyEntities, k = c[K] || {}, z = k.children;
        return !!(z || []).length;
      }), le = (0, e.computed)(function() {
        var K = P.isLeaf, c = n.value.loadData, k = he.value;
        return K === !1 ? !1 : K || !c && !k || c && G.value && !k;
      }), ge = (0, e.computed)(function() {
        return le.value ? null : Q.value ? V : E;
      }), j = (0, e.computed)(function() {
        var K = P.disabled, c = n.value.disabled;
        return !!(c || K);
      }), B = (0, e.computed)(function() {
        var K = P.checkable, c = n.value.checkable;
        return !c || K === !1 ? !1 : c;
      }), re = (0, e.computed)(function() {
        var K = P.selectable, c = n.value.selectable;
        return typeof K == "boolean" ? K : c;
      }), ee = (0, e.computed)(function() {
        var K = P.data, c = P.active, k = P.checkable, z = P.disableCheckbox, X = P.disabled, A = P.selectable;
        return (0, u.default)((0, u.default)({
          active: c,
          checkable: k,
          disableCheckbox: z,
          disabled: X,
          selectable: A
        }, K), {}, {
          dataRef: K,
          data: K,
          isLeaf: le.value,
          checked: $.value,
          expanded: Q.value,
          loading: te.value,
          selected: ae.value,
          halfChecked: Y.value
        });
      }), de = (0, e.getCurrentInstance)(), H = (0, e.computed)(function() {
        var K = P.eventKey, c = n.value.keyEntities, k = c[K] || {}, z = k.parent;
        return (0, u.default)((0, u.default)({}, (0, p.convertNodePropsToEventData)((0, h.default)({}, P, M.value))), {}, {
          parent: z
        });
      }), ne = (0, e.reactive)({
        eventData: H,
        eventKey: (0, e.computed)(function() {
          return P.eventKey;
        }),
        selectHandle: ie,
        pos: ve,
        key: de.vnode.key
      });
      m(ne);
      var ke = function(c) {
        var k = n.value.onNodeDoubleClick;
        k(c, H.value);
      }, Ce = function(c) {
        if (!j.value) {
          var k = n.value.onNodeSelect;
          c.preventDefault(), k(c, H.value);
        }
      }, Te = function(c) {
        if (!j.value) {
          var k = P.disableCheckbox, z = n.value.onNodeCheck;
          if (!(!B.value || k)) {
            c.preventDefault();
            var X = !$.value;
            z(c, H.value, X);
          }
        }
      }, $e = function(c) {
        var k = n.value.onNodeClick;
        k(c, H.value), re.value ? Ce(c) : Te(c);
      }, Re = function(c) {
        var k = n.value.onNodeMouseEnter;
        k(c, H.value);
      }, aa = function(c) {
        var k = n.value.onNodeMouseLeave;
        k(c, H.value);
      }, ta = function(c) {
        var k = n.value.onNodeContextMenu;
        k(c, H.value);
      }, Fe = function(c) {
        var k = n.value.onNodeDragStart;
        c.stopPropagation(), l.value = !0, k(c, ne);
        try {
          c.dataTransfer.setData("text/plain", "");
        } catch {
        }
      }, Xe = function(c) {
        var k = n.value.onNodeDragEnter;
        c.preventDefault(), c.stopPropagation(), k(c, ne);
      }, ra = function(c) {
        var k = n.value.onNodeDragOver;
        c.preventDefault(), c.stopPropagation(), k(c, ne);
      }, je = function(c) {
        var k = n.value.onNodeDragLeave;
        c.stopPropagation(), k(c, ne);
      }, na = function(c) {
        var k = n.value.onNodeDragEnd;
        c.stopPropagation(), l.value = !1, k(c, ne);
      }, oa = function(c) {
        var k = n.value.onNodeDrop;
        c.preventDefault(), c.stopPropagation(), l.value = !1, k(c, ne);
      }, Ia = function(c) {
        var k = n.value.onNodeExpand;
        te.value || k(c, H.value);
      }, Ea = function() {
        var c = P.data, k = n.value.draggable;
        return !!(k && (!k.nodeDraggable || k.nodeDraggable(c)));
      }, De = function() {
        var c = n.value, k = c.draggable, z = c.prefixCls;
        return k != null && k.icon ? (0, e.createVNode)("span", {
          class: "".concat(z, "-draggable-icon")
        }, [k.icon]) : null;
      }, Ta = function() {
        var c, k, z, X = P.switcherIcon, A = X === void 0 ? o.switcherIcon || ((c = n.value.slots) === null || c === void 0 ? void 0 : c[(k = P.data) === null || k === void 0 || (z = k.slots) === null || z === void 0 ? void 0 : z.switcherIcon]) : X, U = n.value.switcherIcon, Z = A || U;
        return typeof Z == "function" ? Z(ee.value) : Z;
      }, _a = function() {
        var c = n.value, k = c.loadData, z = c.onNodeLoad;
        te.value || k && Q.value && !le.value && !he.value && !G.value && z(H.value);
      };
      (0, e.onMounted)(function() {
        _a();
      }), (0, e.onUpdated)(function() {
        _a();
      });
      var Ra = function() {
        var c = n.value.prefixCls, k = Ta();
        if (le.value)
          return k !== !1 ? (0, e.createVNode)("span", {
            class: (0, r.default)("".concat(c, "-switcher"), "".concat(c, "-switcher-noop"))
          }, [k]) : null;
        var z = (0, r.default)("".concat(c, "-switcher"), "".concat(c, "-switcher_").concat(Q.value ? V : E));
        return k !== !1 ? (0, e.createVNode)("span", {
          onClick: Ia,
          class: z
        }, [k]) : null;
      }, Aa = function() {
        var c, k, z = P.disableCheckbox, X = n.value.prefixCls, A = j.value, U = B.value;
        return U ? (0, e.createVNode)("span", {
          class: (0, r.default)("".concat(X, "-checkbox"), $.value && "".concat(X, "-checkbox-checked"), !$.value && Y.value && "".concat(X, "-checkbox-indeterminate"), (A || z) && "".concat(X, "-checkbox-disabled")),
          onClick: Te
        }, [(c = (k = n.value).customCheckable) === null || c === void 0 ? void 0 : c.call(k)]) : null;
      }, ba = function() {
        var c = n.value.prefixCls;
        return (0, e.createVNode)("span", {
          class: (0, r.default)("".concat(c, "-iconEle"), "".concat(c, "-icon__").concat(ge.value || "docu"), te.value && "".concat(c, "-icon_loading"))
        }, null);
      }, Va = function() {
        var c = P.disabled, k = P.eventKey, z = n.value, X = z.draggable, A = z.dropLevelOffset, U = z.dropPosition, Z = z.prefixCls, ye = z.indent, ue = z.dropIndicatorRender, _e = z.dragOverNodeKey, me = z.direction, fe = X !== !1, Ne = !c && fe && _e === k;
        return Ne ? ue({
          dropPosition: U,
          dropLevelOffset: A,
          indent: ye,
          prefixCls: Z,
          direction: me
        }) : null;
      }, La = function() {
        var c, k, z, X, A = P.icon, U = A === void 0 ? o.icon : A, Z = P.data, ye = o.title || ((c = n.value.slots) === null || c === void 0 ? void 0 : c[(k = P.data) === null || k === void 0 || (z = k.slots) === null || z === void 0 ? void 0 : z.title]) || ((X = n.value.slots) === null || X === void 0 ? void 0 : X.title) || P.title, ue = n.value, _e = ue.prefixCls, me = ue.showIcon, fe = ue.icon, Ne = ue.loadData, Be = j.value, Ye = "".concat(_e, "-node-content-wrapper"), Ue;
        if (me) {
          var We, xe, Je = U || ((We = n.value.slots) === null || We === void 0 ? void 0 : We[Z == null || (xe = Z.slots) === null || xe === void 0 ? void 0 : xe.icon]) || fe;
          Ue = Je ? (0, e.createVNode)("span", {
            class: (0, r.default)("".concat(_e, "-iconEle"), "".concat(_e, "-icon__customize"))
          }, [typeof Je == "function" ? Je(ee.value) : Je]) : ba();
        } else
          Ne && te.value && (Ue = ba());
        var Me;
        typeof ye == "function" ? Me = ye(ee.value) : Me = ye, Me = Me === void 0 ? S : Me;
        var Ma = (0, e.createVNode)("span", {
          class: "".concat(_e, "-title")
        }, [Me]);
        return (0, e.createVNode)("span", {
          ref: ie,
          title: typeof ye == "string" ? ye : "",
          class: (0, r.default)("".concat(Ye), "".concat(Ye, "-").concat(ge.value || "normal"), !Be && (ae.value || l.value) && "".concat(_e, "-node-selected")),
          onMouseenter: Re,
          onMouseleave: aa,
          onContextmenu: ta,
          onClick: $e,
          onDblclick: ke
        }, [Ue, Ma, Va()]);
      };
      return function() {
        var K, c = (0, u.default)((0, u.default)({}, P), s), k = c.eventKey, z = c.isLeaf, X = c.isStart, A = c.isEnd, U = c.domRef, Z = c.active;
        c.data;
        var ye = c.onMousemove, ue = c.selectable, _e = (0, b.default)(c, I), me = n.value, fe = me.prefixCls, Ne = me.filterTreeNode, Be = me.keyEntities, Ye = me.dropContainerKey, Ue = me.dropTargetKey, We = me.draggingNodeKey, xe = j.value, Je = (0, _.default)(_e, {
          aria: !0,
          data: !0
        }), Me = Be[k] || {}, Ma = Me.level, xt = A[A.length - 1], Qe = Ea(), qa = !xe && Qe, Ha = We === k, Ot = ue !== void 0 ? {
          "aria-selected": !!ue
        } : void 0;
        return (0, e.createVNode)("div", (0, u.default)((0, u.default)({
          ref: U,
          class: (0, r.default)(s.class, "".concat(fe, "-treenode"), (K = {}, (0, t.default)(K, "".concat(fe, "-treenode-disabled"), xe), (0, t.default)(K, "".concat(fe, "-treenode-switcher-").concat(Q.value ? "open" : "close"), !z), (0, t.default)(K, "".concat(fe, "-treenode-checkbox-checked"), $.value), (0, t.default)(K, "".concat(fe, "-treenode-checkbox-indeterminate"), Y.value), (0, t.default)(K, "".concat(fe, "-treenode-selected"), ae.value), (0, t.default)(K, "".concat(fe, "-treenode-loading"), te.value), (0, t.default)(K, "".concat(fe, "-treenode-active"), Z), (0, t.default)(K, "".concat(fe, "-treenode-leaf-last"), xt), (0, t.default)(K, "".concat(fe, "-treenode-draggable"), qa), (0, t.default)(K, "dragging", Ha), (0, t.default)(K, "drop-target", Ue === k), (0, t.default)(K, "drop-container", Ye === k), (0, t.default)(K, "drag-over", !xe && oe.value), (0, t.default)(K, "drag-over-gap-top", !xe && ce.value), (0, t.default)(K, "drag-over-gap-bottom", !xe && se.value), (0, t.default)(K, "filter-node", Ne && Ne(H.value)), K)),
          style: s.style,
          draggable: qa,
          "aria-grabbed": Ha,
          onDragstart: qa ? Fe : void 0,
          onDragenter: Qe ? Xe : void 0,
          onDragover: Qe ? ra : void 0,
          onDragleave: Qe ? je : void 0,
          onDrop: Qe ? oa : void 0,
          onDragend: Qe ? na : void 0,
          onMousemove: ye
        }, Ot), Je), [(0, e.createVNode)(f.default, {
          prefixCls: fe,
          level: Ma,
          isStart: X,
          isEnd: A
        }, null), De(), Ra(), Aa(), La()]);
      };
    }
  });
  return ua.default = T, ua;
}
var Za;
function Xt() {
  if (Za)
    return be;
  Za = 1;
  var a = Pe.exports;
  Object.defineProperty(be, "__esModule", {
    value: !0
  }), be.arrAdd = r, be.arrDel = d, be.calcDropPosition = S, be.calcSelectedKeys = T, be.conductExpandParent = s, be.convertDataToTree = P, be.getDragChildrenKeys = I, be.getPosition = _, be.isFirstChild = E, be.isLastChild = V, be.isTreeNode = w, be.parseCheckedKeys = g, be.posToArr = v;
  var e = pe, t = a(Le()), b = a(qe.exports), h = a(Ve()), u = a(Oa()), i = a(zt()), f = ya(), p = ["children"];
  function d(o, m) {
    if (!o)
      return [];
    var l = o.slice(), n = l.indexOf(m);
    return n >= 0 && l.splice(n, 1), l;
  }
  function r(o, m) {
    var l = (o || []).slice();
    return l.indexOf(m) === -1 && l.push(m), l;
  }
  function v(o) {
    return o.split("-");
  }
  function _(o, m) {
    return "".concat(o, "-").concat(m);
  }
  function w(o) {
    return o && o.type && o.type.isTreeNode;
  }
  function I(o, m) {
    var l = [], n = m[o];
    function C() {
      var x = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
      x.forEach(function(O) {
        var N = O.key, L = O.children;
        l.push(N), C(L);
      });
    }
    return C(n.children), l;
  }
  function V(o) {
    if (o.parent) {
      var m = v(o.pos);
      return Number(m[m.length - 1]) === o.parent.children.length - 1;
    }
    return !1;
  }
  function E(o) {
    var m = v(o.pos);
    return Number(m[m.length - 1]) === 0;
  }
  function S(o, m, l, n, C, x, O, N, L, D) {
    var y, q = o.clientX, W = o.clientY, J = o.target.getBoundingClientRect(), F = J.top, M = J.height, Q = (D === "rtl" ? -1 : 1) * (((C == null ? void 0 : C.x) || 0) - q), ae = (Q - 12) / n, $ = N[l.eventKey];
    if (W < F + M / 2) {
      var G = O.findIndex(function(B) {
        return B.key === $.key;
      }), te = G <= 0 ? 0 : G - 1, Y = O[te].key;
      $ = N[Y];
    }
    var oe = $.key, ce = $, se = $.key, ve = 0, ie = 0;
    if (!L.has(oe))
      for (var he = 0; he < ae && V($); he += 1)
        $ = $.parent, ie += 1;
    var le = m.eventData, ge = $.node, j = !0;
    return E($) && $.level === 0 && W < F + M / 2 && x({
      dragNode: le,
      dropNode: ge,
      dropPosition: -1
    }) && $.key === l.eventKey ? ve = -1 : (ce.children || []).length && L.has(se) ? x({
      dragNode: le,
      dropNode: ge,
      dropPosition: 0
    }) ? ve = 0 : j = !1 : ie === 0 ? ae > -1.5 ? x({
      dragNode: le,
      dropNode: ge,
      dropPosition: 1
    }) ? ve = 1 : j = !1 : x({
      dragNode: le,
      dropNode: ge,
      dropPosition: 0
    }) ? ve = 0 : x({
      dragNode: le,
      dropNode: ge,
      dropPosition: 1
    }) ? ve = 1 : j = !1 : x({
      dragNode: le,
      dropNode: ge,
      dropPosition: 1
    }) ? ve = 1 : j = !1, {
      dropPosition: ve,
      dropLevelOffset: ie,
      dropTargetKey: $.key,
      dropTargetPos: $.pos,
      dragOverNodeKey: se,
      dropContainerKey: ve === 0 ? null : ((y = $.parent) === null || y === void 0 ? void 0 : y.key) || null,
      dropAllowed: j
    };
  }
  function T(o, m) {
    if (!!o) {
      var l = m.multiple;
      return l ? o.slice() : o.length ? [o[0]] : o;
    }
  }
  var R = function(m) {
    return m;
  };
  function P(o, m) {
    if (!o)
      return [];
    var l = m || {}, n = l.processProps, C = n === void 0 ? R : n, x = Array.isArray(o) ? o : [o];
    return x.map(function(O) {
      var N = O.children, L = (0, u.default)(O, p), D = P(N, m);
      return (0, e.createVNode)(i.default, (0, h.default)({
        key: L.key
      }, C(L)), {
        default: function() {
          return [D];
        }
      });
    });
  }
  function g(o) {
    if (!o)
      return null;
    var m;
    if (Array.isArray(o))
      m = {
        checkedKeys: o,
        halfCheckedKeys: void 0
      };
    else if ((0, b.default)(o) === "object")
      m = {
        checkedKeys: o.checked || void 0,
        halfCheckedKeys: o.halfChecked || void 0
      };
    else
      return (0, f.warning)(!1, "`checkedKeys` is not an array or an object"), null;
    return m;
  }
  function s(o, m) {
    var l = /* @__PURE__ */ new Set();
    function n(C) {
      if (!l.has(C)) {
        var x = m[C];
        if (!!x) {
          l.add(C);
          var O = x.parent, N = x.node;
          N.disabled || O && n(O.key);
        }
      }
    }
    return (o || []).forEach(function(C) {
      n(C);
    }), (0, t.default)(l);
  }
  return be;
}
var et;
function Ct() {
  if (et)
    return Ke;
  et = 1;
  var a = Pe.exports;
  Object.defineProperty(Ke, "__esModule", {
    value: !0
  }), Ke.convertDataToEntities = T, Ke.convertNodePropsToEventData = P, Ke.convertTreeToData = V, Ke.fillFieldNames = w, Ke.flattenTreeData = E, Ke.getKey = _, Ke.getTreeNodeProps = R, Ke.traverseDataNodes = S, Ke.warningWithoutKey = I;
  var e = a(qe.exports), t = a(Le()), b = a(Oa()), h = a(Ve()), u = a(wa()), i = Xt(), f = ya(), p = pe, d = Na(), r = a(Ua()), v = ["title", "icon", "switcherIcon"];
  function _(g, s) {
    return g != null ? g : s;
  }
  function w(g) {
    var s = g || {}, o = s.title, m = s._title, l = s.key, n = s.children, C = o || "title";
    return {
      title: C,
      _title: m || [C],
      key: l || "key",
      children: n || "children"
    };
  }
  function I(g, s) {
    var o = /* @__PURE__ */ new Map();
    function m(l) {
      var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
      (l || []).forEach(function(C) {
        var x = C[s.key], O = C[s.children];
        (0, f.warning)(x != null, "Tree node must have a certain key: [".concat(n).concat(x, "]"));
        var N = String(x);
        (0, f.warning)(!o.has(N) || x === null || x === void 0, "Same 'key' exist in the Tree: ".concat(N)), o.set(N, !0), m(O, "".concat(n).concat(N, " > "));
      });
    }
    m(g);
  }
  function V(g) {
    function s() {
      var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], m = (0, d.filterEmpty)(o);
      return m.map(function(l) {
        var n, C, x, O;
        if (!(0, i.isTreeNode)(l))
          return (0, f.warning)(!l, "Tree/TreeNode can only accept TreeNode as children."), null;
        for (var N = l.children || {}, L = l.key, D = {}, y = 0, q = Object.entries(l.props); y < q.length; y++) {
          var W = (0, u.default)(q[y], 2), J = W[0], F = W[1];
          D[(0, p.camelize)(J)] = F;
        }
        var M = D.isLeaf, Q = D.checkable, ae = D.selectable, $ = D.disabled, G = D.disableCheckbox, te = {
          isLeaf: M || M === "" || void 0,
          checkable: Q || Q === "" || void 0,
          selectable: ae || ae === "" || void 0,
          disabled: $ || $ === "" || void 0,
          disableCheckbox: G || G === "" || void 0
        }, Y = (0, h.default)((0, h.default)({}, D), te), oe = D.title, ce = oe === void 0 ? (n = N.title) === null || n === void 0 ? void 0 : n.call(N, Y) : oe, se = D.icon, ve = se === void 0 ? (C = N.icon) === null || C === void 0 ? void 0 : C.call(N, Y) : se, ie = D.switcherIcon, he = ie === void 0 ? (x = N.switcherIcon) === null || x === void 0 ? void 0 : x.call(N, Y) : ie, le = (0, b.default)(D, v), ge = (O = N.default) === null || O === void 0 ? void 0 : O.call(N), j = (0, h.default)((0, h.default)({}, le), {}, {
          title: ce,
          icon: ve,
          switcherIcon: he,
          key: L,
          isLeaf: M
        }, te), B = s(ge);
        return B.length && (j.children = B), j;
      });
    }
    return s(g);
  }
  function E(g, s, o) {
    var m = w(o), l = m._title, n = m.key, C = m.children, x = new Set(s === !0 ? [] : s), O = [];
    function N(L) {
      var D = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
      return L.map(function(y, q) {
        for (var W = (0, i.getPosition)(D ? D.pos : "0", q), J = _(y[n], W), F, M = 0; M < l.length; M += 1) {
          var Q = l[M];
          if (y[Q] !== void 0) {
            F = y[Q];
            break;
          }
        }
        var ae = (0, h.default)((0, h.default)({}, (0, r.default)(y, [].concat((0, t.default)(l), [n, C]))), {}, {
          title: F,
          key: J,
          parent: D,
          pos: W,
          children: null,
          data: y,
          isStart: [].concat((0, t.default)(D ? D.isStart : []), [q === 0]),
          isEnd: [].concat((0, t.default)(D ? D.isEnd : []), [q === L.length - 1])
        });
        return O.push(ae), s === !0 || x.has(J) ? ae.children = N(y[C] || [], ae) : ae.children = [], ae;
      });
    }
    return N(g), O;
  }
  function S(g, s, o) {
    var m = {};
    (0, e.default)(o) === "object" ? m = o : m = {
      externalGetKey: o
    }, m = m || {};
    var l = m, n = l.childrenPropName, C = l.externalGetKey, x = l.fieldNames, O = w(x), N = O.key, L = O.children, D = n || L, y;
    C ? typeof C == "string" ? y = function(J) {
      return J[C];
    } : typeof C == "function" && (y = function(J) {
      return C(J);
    }) : y = function(J, F) {
      return _(J[N], F);
    };
    function q(W, J, F, M) {
      var Q = W ? W[D] : g, ae = W ? (0, i.getPosition)(F.pos, J) : "0", $ = W ? [].concat((0, t.default)(M), [W]) : [];
      if (W) {
        var G = y(W, ae), te = {
          node: W,
          index: J,
          pos: ae,
          key: G,
          parentPos: F.node ? F.pos : null,
          level: F.level + 1,
          nodes: $
        };
        s(te);
      }
      Q && Q.forEach(function(Y, oe) {
        q(Y, oe, {
          node: W,
          pos: ae,
          level: F ? F.level + 1 : -1
        }, $);
      });
    }
    q(null);
  }
  function T(g) {
    var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o = s.initWrapper, m = s.processEntity, l = s.onProcessFinished, n = s.externalGetKey, C = s.childrenPropName, x = s.fieldNames, O = arguments.length > 2 ? arguments[2] : void 0, N = n || O, L = {}, D = {}, y = {
      posEntities: L,
      keyEntities: D
    };
    return o && (y = o(y) || y), S(g, function(q) {
      var W = q.node, J = q.index, F = q.pos, M = q.key, Q = q.parentPos, ae = q.level, $ = q.nodes, G = {
        node: W,
        nodes: $,
        index: J,
        key: M,
        pos: F,
        level: ae
      }, te = _(M, F);
      L[F] = G, D[te] = G, G.parent = L[Q], G.parent && (G.parent.children = G.parent.children || [], G.parent.children.push(G)), m && m(G, y);
    }, {
      externalGetKey: N,
      childrenPropName: C,
      fieldNames: x
    }), l && l(y), y;
  }
  function R(g, s) {
    var o = s.expandedKeysSet, m = s.selectedKeysSet, l = s.loadedKeysSet, n = s.loadingKeysSet, C = s.checkedKeysSet, x = s.halfCheckedKeysSet, O = s.dragOverNodeKey, N = s.dropPosition, L = s.keyEntities, D = L[g], y = {
      eventKey: g,
      expanded: o.has(g),
      selected: m.has(g),
      loaded: l.has(g),
      loading: n.has(g),
      checked: C.has(g),
      halfChecked: x.has(g),
      pos: String(D ? D.pos : ""),
      parent: D.parent,
      dragOver: O === g && N === 0,
      dragOverGapTop: O === g && N === -1,
      dragOverGapBottom: O === g && N === 1
    };
    return y;
  }
  function P(g) {
    var s = g.data, o = g.expanded, m = g.selected, l = g.checked, n = g.loaded, C = g.loading, x = g.halfChecked, O = g.dragOver, N = g.dragOverGapTop, L = g.dragOverGapBottom, D = g.pos, y = g.active, q = g.eventKey, W = (0, h.default)((0, h.default)({
      dataRef: s
    }, s), {}, {
      expanded: o,
      selected: m,
      checked: l,
      loaded: n,
      loading: C,
      halfChecked: x,
      dragOver: O,
      dragOverGapTop: N,
      dragOverGapBottom: L,
      pos: D,
      active: y,
      eventKey: q,
      key: q
    });
    return "props" in W || Object.defineProperty(W, "props", {
      get: function() {
        return (0, f.warning)(!1, "Second param return from event is node data instead of TreeNode instance. Please read value directly instead of reading from `props`."), g;
      }
    }), W;
  }
  return Ke;
}
var at;
function Yt() {
  if (at)
    return la;
  at = 1;
  var a = Pe.exports;
  Object.defineProperty(la, "__esModule", {
    value: !0
  }), la.default = void 0;
  var e = a(Ve()), t = Ct(), b = ea(), h = pe, u = function(f, p) {
    var d = (0, h.computed)(function() {
      return (0, t.convertDataToEntities)(f.value, {
        fieldNames: p.value,
        initWrapper: function(v) {
          return (0, e.default)((0, e.default)({}, v), {}, {
            pathKeyEntities: {}
          });
        },
        processEntity: function(v, _) {
          var w = v.nodes.map(function(I) {
            return I[p.value.value];
          }).join(b.VALUE_SPLIT);
          _.pathKeyEntities[w] = v, v.key = w;
        }
      }).pathKeyEntities;
    });
    return d;
  };
  return la.default = u, la;
}
var Pa = {}, tt;
function Jt() {
  if (tt)
    return Pa;
  tt = 1;
  var a = Pe.exports;
  Object.defineProperty(Pa, "__esModule", {
    value: !0
  }), Pa.default = u;
  var e = a(Ve()), t = a(qe.exports), b = pe, h = ya();
  function u(i) {
    var f = (0, b.ref)(!1), p = (0, b.ref)({});
    return (0, b.watchEffect)(function() {
      if (!i.value) {
        f.value = !1, p.value = {};
        return;
      }
      var d = {
        matchInputWidth: !0,
        limit: 50
      };
      i.value && (0, t.default)(i.value) === "object" && (d = (0, e.default)((0, e.default)({}, d), i.value)), d.limit <= 0 && (delete d.limit, process.env.NODE_ENV !== "production" && (0, h.warning)(!1, "'limit' of showSearch should be positive number or false.")), f.value = !0, p.value = d;
    }), {
      showSearch: f,
      searchConfig: p
    };
  }
  return Pa;
}
var He = {}, rt;
function Wa() {
  if (rt)
    return He;
  rt = 1;
  var a = Pe.exports;
  Object.defineProperty(He, "__esModule", {
    value: !0
  }), He.default = He.SEARCH_MARK = void 0;
  var e = a(ze()), t = a(Ve()), b = a(Le()), h = pe, u = "__rc_cascader_search_mark__";
  He.SEARCH_MARK = u;
  var i = function(r, v, _) {
    var w = _.label;
    return v.some(function(I) {
      return String(I[w]).toLowerCase().includes(r.toLowerCase());
    });
  }, f = function(r) {
    var v = r.path, _ = r.fieldNames;
    return v.map(function(w) {
      return w[_.label];
    }).join(" / ");
  }, p = function(r, v, _, w, I, V) {
    return (0, h.computed)(function() {
      var E = I.value, S = E.filter, T = S === void 0 ? i : S, R = E.render, P = R === void 0 ? f : R, g = E.limit, s = g === void 0 ? 50 : g, o = E.sort, m = [];
      if (!r.value)
        return [];
      function l(n, C) {
        n.forEach(function(x) {
          if (!(!o && s > 0 && m.length >= s)) {
            var O = [].concat((0, b.default)(C), [x]), N = x[_.value.children];
            if ((!N || N.length === 0 || V.value) && T(r.value, O, {
              label: _.value.label
            })) {
              var L;
              m.push((0, t.default)((0, t.default)({}, x), {}, (L = {}, (0, e.default)(L, _.value.label, P({
                inputValue: r.value,
                path: O,
                prefixCls: w.value,
                fieldNames: _.value
              })), (0, e.default)(L, u, O), L)));
            }
            N && l(x[_.value.children], O);
          }
        });
      }
      return l(v.value, []), o && m.sort(function(n, C) {
        return o(n[u], C[u], r.value, _.value);
      }), s > 0 ? m.slice(0, s) : m;
    });
  };
  return He.default = p, He;
}
var da = {}, ca = {}, nt;
function Da() {
  if (nt)
    return ca;
  nt = 1, Object.defineProperty(ca, "__esModule", {
    value: !0
  }), ca.formatStrategyValues = e, ca.toPathOptions = t;
  var a = ea();
  function e(b, h, u) {
    var i = new Set(b);
    return b.filter(function(f) {
      var p = h[f], d = p ? p.parent : null, r = p ? p.children : null;
      return u === a.SHOW_CHILD ? !(r && r.some(function(v) {
        return v.key && i.has(v.key);
      })) : !(d && !d.node.disabled && i.has(d.key));
    });
  }
  function t(b, h, u) {
    for (var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1, f = h, p = [], d = function() {
      var _, w, I, V = b[r], E = (_ = f) === null || _ === void 0 ? void 0 : _.findIndex(function(T) {
        var R = T[u.value];
        return i ? String(R) === String(V) : R === V;
      }), S = E !== -1 ? (w = f) === null || w === void 0 ? void 0 : w[E] : null;
      p.push({
        value: (I = S == null ? void 0 : S[u.value]) !== null && I !== void 0 ? I : V,
        index: E,
        option: S
      }), f = S == null ? void 0 : S[u.children];
    }, r = 0; r < b.length; r += 1)
      d();
    return p;
  }
  return ca;
}
var ot;
function Qt() {
  if (ot)
    return da;
  ot = 1, Object.defineProperty(da, "__esModule", {
    value: !0
  }), da.default = void 0;
  var a = pe, e = Da(), t = function(h, u, i) {
    return (0, a.computed)(function() {
      var f = [], p = [];
      return i.value.forEach(function(d) {
        var r = (0, e.toPathOptions)(d, h.value, u.value);
        r.every(function(v) {
          return v.option;
        }) ? p.push(d) : f.push(d);
      }), [p, f];
    });
  };
  return da.default = t, da;
}
var sa = {}, lt;
function Zt() {
  if (lt)
    return sa;
  lt = 1, Object.defineProperty(sa, "__esModule", {
    value: !0
  }), sa.conductCheck = u, sa.isCheckDisabled = t;
  var a = ya();
  function e(i, f) {
    var p = /* @__PURE__ */ new Set();
    return i.forEach(function(d) {
      f.has(d) || p.add(d);
    }), p;
  }
  function t(i) {
    var f = i || {}, p = f.disabled, d = f.disableCheckbox, r = f.checkable;
    return !!(p || d) || r === !1;
  }
  function b(i, f, p, d) {
    for (var r = new Set(i), v = /* @__PURE__ */ new Set(), _ = 0; _ <= p; _ += 1) {
      var w = f.get(_) || /* @__PURE__ */ new Set();
      w.forEach(function(S) {
        var T = S.key, R = S.node, P = S.children, g = P === void 0 ? [] : P;
        r.has(T) && !d(R) && g.filter(function(s) {
          return !d(s.node);
        }).forEach(function(s) {
          r.add(s.key);
        });
      });
    }
    for (var I = /* @__PURE__ */ new Set(), V = p; V >= 0; V -= 1) {
      var E = f.get(V) || /* @__PURE__ */ new Set();
      E.forEach(function(S) {
        var T = S.parent, R = S.node;
        if (!(d(R) || !S.parent || I.has(S.parent.key))) {
          if (d(S.parent.node)) {
            I.add(T.key);
            return;
          }
          var P = !0, g = !1;
          (T.children || []).filter(function(s) {
            return !d(s.node);
          }).forEach(function(s) {
            var o = s.key, m = r.has(o);
            P && !m && (P = !1), !g && (m || v.has(o)) && (g = !0);
          }), P && r.add(T.key), g && v.add(T.key), I.add(T.key);
        }
      });
    }
    return {
      checkedKeys: Array.from(r),
      halfCheckedKeys: Array.from(e(v, r))
    };
  }
  function h(i, f, p, d, r) {
    for (var v = new Set(i), _ = new Set(f), w = 0; w <= d; w += 1) {
      var I = p.get(w) || /* @__PURE__ */ new Set();
      I.forEach(function(T) {
        var R = T.key, P = T.node, g = T.children, s = g === void 0 ? [] : g;
        !v.has(R) && !_.has(R) && !r(P) && s.filter(function(o) {
          return !r(o.node);
        }).forEach(function(o) {
          v.delete(o.key);
        });
      });
    }
    _ = /* @__PURE__ */ new Set();
    for (var V = /* @__PURE__ */ new Set(), E = d; E >= 0; E -= 1) {
      var S = p.get(E) || /* @__PURE__ */ new Set();
      S.forEach(function(T) {
        var R = T.parent, P = T.node;
        if (!(r(P) || !T.parent || V.has(T.parent.key))) {
          if (r(T.parent.node)) {
            V.add(R.key);
            return;
          }
          var g = !0, s = !1;
          (R.children || []).filter(function(o) {
            return !r(o.node);
          }).forEach(function(o) {
            var m = o.key, l = v.has(m);
            g && !l && (g = !1), !s && (l || _.has(m)) && (s = !0);
          }), g || v.delete(R.key), s && _.add(R.key), V.add(R.key);
        }
      });
    }
    return {
      checkedKeys: Array.from(v),
      halfCheckedKeys: Array.from(e(_, v))
    };
  }
  function u(i, f, p, d, r, v) {
    var _ = [], w;
    v ? w = v : w = t;
    var I = new Set(i.filter(function(E) {
      var S = !!p[E];
      return S || _.push(E), S;
    }));
    (0, a.note)(!_.length, "Tree missing follow keys: ".concat(_.slice(0, 100).map(function(E) {
      return "'".concat(E, "'");
    }).join(", ")));
    var V;
    return f === !0 ? V = b(I, r, d, w) : V = h(I, f.halfCheckedKeys, r, d, w), V;
  }
  return sa;
}
var va = {}, ut;
function er() {
  if (ut)
    return va;
  ut = 1;
  var a = Pe.exports;
  Object.defineProperty(va, "__esModule", {
    value: !0
  }), va.default = void 0;
  var e = a(Le()), t = a(qe.exports), b = Da(), h = ea(), u = pe, i = Na(), f = Lt(), p = function(r, v, _, w, I) {
    return (0, u.computed)(function() {
      var V = I.value || function(E) {
        var S = E.labels, T = w.value ? S.slice(-1) : S, R = " / ";
        return T.every(function(P) {
          return ["string", "number"].includes((0, t.default)(P));
        }) ? T.join(R) : T.reduce(function(P, g, s) {
          var o = (0, i.isValidElement)(g) ? (0, f.cloneElement)(g, {
            key: s
          }) : g;
          return s === 0 ? [o] : [].concat((0, e.default)(P), [R, o]);
        }, []);
      };
      return r.value.map(function(E) {
        var S = (0, b.toPathOptions)(E, v.value, _.value), T = V({
          labels: S.map(function(P) {
            var g, s = P.option, o = P.value;
            return (g = s == null ? void 0 : s[_.value.label]) !== null && g !== void 0 ? g : o;
          }),
          selectedOptions: S.map(function(P) {
            var g = P.option;
            return g;
          })
        }), R = (0, h.toPathKey)(E);
        return {
          label: T,
          value: R,
          key: R,
          valueCells: E
        };
      });
    });
  };
  return va.default = p, va;
}
var Ge = {}, it;
function Ca() {
  if (it)
    return Ge;
  it = 1, Object.defineProperty(Ge, "__esModule", {
    value: !0
  }), Ge.useProvideCascader = Ge.useInjectCascader = void 0;
  var a = pe, e = Symbol("CascaderContextKey"), t = function(u) {
    (0, a.provide)(e, u);
  };
  Ge.useProvideCascader = t;
  var b = function() {
    return (0, a.inject)(e);
  };
  return Ge.useInjectCascader = b, Ge;
}
var fa = {}, pa = {}, dt;
function ar() {
  if (dt)
    return pa;
  dt = 1;
  var a = Pe.exports;
  Object.defineProperty(pa, "__esModule", {
    value: !0
  }), pa.default = void 0;
  var e = a(wa()), t = Ca(), b = pe, h = Ka(), u = a(Mt()), i = function() {
    var p = (0, h.useBaseProps)(), d = (0, t.useInjectCascader)(), r = d.values, v = (0, u.default)([]), _ = (0, e.default)(v, 2), w = _[0], I = _[1];
    return (0, b.watch)(function() {
      return p.open;
    }, function() {
      if (p.open && !p.multiple) {
        var V = r.value[0];
        I(V || []);
      }
    }, {
      immediate: !0
    }), [w, I];
  };
  return pa.default = i, pa;
}
var ha = {}, ct;
function tr() {
  if (ct)
    return ha;
  ct = 1;
  var a = Pe.exports;
  Object.defineProperty(ha, "__esModule", {
    value: !0
  }), ha.default = void 0;
  var e = a(Le()), t = pe, b = Ka(), h = a(qt()), u = Wa(), i = function(p, d, r, v, _, w) {
    var I = (0, b.useBaseProps)(), V = (0, t.computed)(function() {
      return I.direction === "rtl";
    }), E = [(0, t.ref)([]), (0, t.ref)(), (0, t.ref)([])], S = E[0], T = E[1], R = E[2];
    (0, t.watchEffect)(function() {
      for (var m = -1, l = d.value, n = [], C = [], x = v.value.length, O = function(J) {
        var F = l.findIndex(function(M) {
          return M[r.value.value] === v.value[J];
        });
        if (F === -1)
          return "break";
        m = F, n.push(m), C.push(v.value[J]), l = l[m][r.value.children];
      }, N = 0; N < x && l; N += 1) {
        var L = O(N);
        if (L === "break")
          break;
      }
      for (var D = d.value, y = 0; y < n.length - 1; y += 1)
        D = D[n[y]][r.value.children];
      var q = [C, m, D];
      S.value = q[0], T.value = q[1], R.value = q[2];
    });
    var P = function(l) {
      _(l);
    }, g = function(l) {
      var n = R.value.length, C = T.value;
      C === -1 && l < 0 && (C = n);
      for (var x = 0; x < n; x += 1) {
        C = (C + l + n) % n;
        var O = R.value[C];
        if (O && !O.disabled) {
          var N = O[r.value.value], L = S.value.slice(0, -1).concat(N);
          P(L);
          return;
        }
      }
    }, s = function() {
      if (S.value.length > 1) {
        var l = S.value.slice(0, -1);
        P(l);
      } else
        I.toggleOpen(!1);
    }, o = function() {
      var l, n = ((l = R.value[T.value]) === null || l === void 0 ? void 0 : l[r.value.children]) || [], C = n.find(function(O) {
        return !O.disabled;
      });
      if (C) {
        var x = [].concat((0, e.default)(S.value), [C[r.value.value]]);
        P(x);
      }
    };
    p.expose({
      onKeydown: function(l) {
        var n = l.which;
        switch (n) {
          case h.default.UP:
          case h.default.DOWN: {
            var C = 0;
            n === h.default.UP ? C = -1 : n === h.default.DOWN && (C = 1), C !== 0 && g(C);
            break;
          }
          case h.default.LEFT: {
            V.value ? o() : s();
            break;
          }
          case h.default.RIGHT: {
            V.value ? s() : o();
            break;
          }
          case h.default.BACKSPACE: {
            I.searchValue || s();
            break;
          }
          case h.default.ENTER: {
            if (S.value.length) {
              var x = R.value[T.value], O = (x == null ? void 0 : x[u.SEARCH_MARK]) || [];
              O.length ? w(O.map(function(N) {
                return N[r.value.value];
              }), O[O.length - 1]) : w(S.value, x);
            }
            break;
          }
          case h.default.ESC:
            I.toggleOpen(!1), open && l.stopPropagation();
        }
      },
      onKeyup: function() {
      }
    });
  };
  return ha.default = i, ha;
}
var Ze = {}, ka = {}, st;
function rr() {
  if (st)
    return ka;
  st = 1;
  var a = Pe.exports;
  Object.defineProperty(ka, "__esModule", {
    value: !0
  }), ka.default = h;
  var e = pe, t = a(ze()), b = Ca();
  function h(u) {
    var i, f = u.prefixCls, p = u.checked, d = u.halfChecked, r = u.disabled, v = u.onClick, _ = (0, b.useInjectCascader)(), w = _.customSlots, I = _.checkable, V = I.value !== !1 ? w.value.checkable : I.value, E = typeof V == "function" ? V() : typeof V == "boolean" ? null : V;
    return (0, e.createVNode)("span", {
      class: (i = {}, (0, t.default)(i, f, !0), (0, t.default)(i, "".concat(f, "-checked"), p), (0, t.default)(i, "".concat(f, "-indeterminate"), !p && d), (0, t.default)(i, "".concat(f, "-disabled"), r), i),
      onClick: v
    }, [E]);
  }
  return h.props = ["prefixCls", "checked", "halfChecked", "disabled", "onClick"], h.displayName = "Checkbox", h.inheritAttrs = !1, ka;
}
var vt;
function nr() {
  if (vt)
    return Ze;
  vt = 1;
  var a = Pe.exports;
  Object.defineProperty(Ze, "__esModule", {
    value: !0
  }), Ze.FIX_LABEL = void 0, Ze.default = d;
  var e = pe, t = a(ze()), b = a(Le()), h = ea(), u = a(rr()), i = Wa(), f = Ca(), p = "__cascader_fix_label__";
  Ze.FIX_LABEL = p;
  function d(r) {
    var v, _, w, I, V, E, S = r.prefixCls, T = r.multiple, R = r.options, P = r.activeValue, g = r.prevValuePath, s = r.onToggleOpen, o = r.onSelect, m = r.onActive, l = r.checkedSet, n = r.halfCheckedSet, C = r.loadingKeys, x = r.isSelectable, O = "".concat(S, "-menu"), N = "".concat(S, "-menu-item"), L = (0, f.useInjectCascader)(), D = L.fieldNames, y = L.changeOnSelect, q = L.expandTrigger, W = L.expandIcon, J = L.loadingIcon, F = L.dropdownMenuColumnStyle, M = L.customSlots, Q = (v = W.value) !== null && v !== void 0 ? v : (_ = (w = M.value).expandIcon) === null || _ === void 0 ? void 0 : _.call(w), ae = (I = J.value) !== null && I !== void 0 ? I : (V = (E = M.value).loadingIcon) === null || V === void 0 ? void 0 : V.call(E), $ = q.value === "hover";
    return (0, e.createVNode)("ul", {
      class: O,
      role: "menu"
    }, [R.map(function(G) {
      var te, Y, oe = G.disabled, ce = G[i.SEARCH_MARK], se = (te = G[p]) !== null && te !== void 0 ? te : G[D.value.label], ve = G[D.value.value], ie = (0, h.isLeaf)(G, D.value), he = ce ? ce.map(function(H) {
        return H[D.value.value];
      }) : [].concat((0, b.default)(g), [ve]), le = (0, h.toPathKey)(he), ge = C.includes(le), j = l.has(le), B = n.has(le), re = function() {
        !oe && (!$ || !ie) && m(he);
      }, ee = function() {
        x(G) && o(he, ie);
      }, de;
      return typeof G.title == "string" ? de = G.title : typeof se == "string" && (de = se), (0, e.createVNode)("li", {
        key: le,
        class: [N, (Y = {}, (0, t.default)(Y, "".concat(N, "-expand"), !ie), (0, t.default)(Y, "".concat(N, "-active"), P === ve), (0, t.default)(Y, "".concat(N, "-disabled"), oe), (0, t.default)(Y, "".concat(N, "-loading"), ge), Y)],
        style: F.value,
        role: "menuitemcheckbox",
        title: de,
        "aria-checked": j,
        "data-path-key": le,
        onClick: function() {
          re(), (!T || ie) && ee();
        },
        onDblclick: function() {
          y.value && s(!1);
        },
        onMouseenter: function() {
          $ && re();
        },
        onMousedown: function(ne) {
          ne.preventDefault();
        }
      }, [T && (0, e.createVNode)(u.default, {
        prefixCls: "".concat(S, "-checkbox"),
        checked: j,
        halfChecked: B,
        disabled: oe,
        onClick: function(ne) {
          ne.stopPropagation(), ee();
        }
      }, null), (0, e.createVNode)("div", {
        class: "".concat(N, "-content")
      }, [se]), !ge && Q && !ie && (0, e.createVNode)("div", {
        class: "".concat(N, "-expand-icon")
      }, [Q]), ge && ae && (0, e.createVNode)("div", {
        class: "".concat(N, "-loading-icon")
      }, [ae])]);
    })]);
  }
  return d.props = ["prefixCls", "multiple", "options", "activeValue", "prevValuePath", "onToggleOpen", "onSelect", "onActive", "checkedSet", "halfCheckedSet", "loadingKeys", "isSelectable"], d.displayName = "Column", d.inheritAttrs = !1, Ze;
}
var ft;
function or() {
  if (ft)
    return fa;
  ft = 1;
  var a = Pe.exports, e = qe.exports;
  Object.defineProperty(fa, "__esModule", {
    value: !0
  }), fa.default = void 0;
  var t = pe, b = a(Ve()), h = a(ze()), u = a(wa()), i = a(Le()), f = ea(), p = a(ar()), d = a(tr()), r = Da(), v = Ka(), _ = Ca(), w = V(nr());
  function I(S) {
    if (typeof WeakMap != "function")
      return null;
    var T = /* @__PURE__ */ new WeakMap(), R = /* @__PURE__ */ new WeakMap();
    return (I = function(g) {
      return g ? R : T;
    })(S);
  }
  function V(S, T) {
    if (!T && S && S.__esModule)
      return S;
    if (S === null || e(S) !== "object" && typeof S != "function")
      return { default: S };
    var R = I(T);
    if (R && R.has(S))
      return R.get(S);
    var P = {}, g = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var s in S)
      if (s !== "default" && Object.prototype.hasOwnProperty.call(S, s)) {
        var o = g ? Object.getOwnPropertyDescriptor(S, s) : null;
        o && (o.get || o.set) ? Object.defineProperty(P, s, o) : P[s] = S[s];
      }
    return P.default = S, R && R.set(S, P), P;
  }
  var E = (0, t.defineComponent)({
    compatConfig: {
      MODE: 3
    },
    name: "OptionList",
    inheritAttrs: !1,
    setup: function(T, R) {
      var P = R.attrs, g = R.slots, s = (0, v.useBaseProps)(), o = (0, t.ref)(), m = (0, t.computed)(function() {
        return s.direction === "rtl";
      }), l = (0, _.useInjectCascader)(), n = l.options, C = l.values, x = l.halfValues, O = l.fieldNames, N = l.changeOnSelect, L = l.onSelect, D = l.searchOptions, y = l.dropdownPrefixCls, q = l.loadData, W = l.expandTrigger, J = l.customSlots, F = (0, t.computed)(function() {
        return y.value || s.prefixCls;
      }), M = (0, t.shallowRef)([]), Q = function(B) {
        if (!(!q.value || s.searchValue)) {
          var re = (0, r.toPathOptions)(B, n.value, O.value), ee = re.map(function(ne) {
            var ke = ne.option;
            return ke;
          }), de = ee[ee.length - 1];
          if (de && !(0, f.isLeaf)(de, O.value)) {
            var H = (0, f.toPathKey)(B);
            M.value = [].concat((0, i.default)(M.value), [H]), q.value(ee);
          }
        }
      };
      (0, t.watchEffect)(function() {
        M.value.length && M.value.forEach(function(j) {
          var B = (0, f.toPathValueStr)(j), re = (0, r.toPathOptions)(B, n.value, O.value, !0).map(function(de) {
            var H = de.option;
            return H;
          }), ee = re[re.length - 1];
          (!ee || ee[O.value.children] || (0, f.isLeaf)(ee, O.value)) && (M.value = M.value.filter(function(de) {
            return de !== j;
          }));
        });
      });
      var ae = (0, t.computed)(function() {
        return new Set((0, f.toPathKeys)(C.value));
      }), $ = (0, t.computed)(function() {
        return new Set((0, f.toPathKeys)(x.value));
      }), G = (0, p.default)(), te = (0, u.default)(G, 2), Y = te[0], oe = te[1], ce = function(B) {
        oe(B), Q(B);
      }, se = function(B) {
        var re = B.disabled, ee = (0, f.isLeaf)(B, O.value);
        return !re && (ee || N.value || s.multiple);
      }, ve = function(B, re) {
        var ee = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
        L(B), !s.multiple && (re || N.value && (W.value === "hover" || ee)) && s.toggleOpen(!1);
      }, ie = (0, t.computed)(function() {
        return s.searchValue ? D.value : n.value;
      }), he = (0, t.computed)(function() {
        for (var j = [{
          options: ie.value
        }], B = ie.value, re = function() {
          var ne = Y.value[ee], ke = B.find(function(Te) {
            return Te[O.value.value] === ne;
          }), Ce = ke == null ? void 0 : ke[O.value.children];
          if (!(Ce != null && Ce.length))
            return "break";
          B = Ce, j.push({
            options: Ce
          });
        }, ee = 0; ee < Y.value.length; ee += 1) {
          var de = re();
          if (de === "break")
            break;
        }
        return j;
      }), le = function(B, re) {
        se(re) && ve(B, (0, f.isLeaf)(re, O.value), !0);
      };
      (0, d.default)(R, ie, O, Y, ce, le);
      var ge = function(B) {
        B.preventDefault();
      };
      return (0, t.onMounted)(function() {
        (0, t.watch)(Y, function(j) {
          for (var B = 0; B < j.length; B += 1) {
            var re, ee = j.slice(0, B + 1), de = (0, f.toPathKey)(ee), H = (re = o.value) === null || re === void 0 ? void 0 : re.querySelector('li[data-path-key="'.concat(de.replace(/\\{0,2}"/g, '\\"'), '"]'));
            H && (0, f.scrollIntoParentView)(H);
          }
        }, {
          flush: "post",
          immediate: !0
        });
      }), function() {
        var j, B, re, ee, de, H, ne, ke = s.notFoundContent, Ce = ke === void 0 ? ((j = g.notFoundContent) === null || j === void 0 ? void 0 : j.call(g)) || ((B = (re = J.value).notFoundContent) === null || B === void 0 ? void 0 : B.call(re)) : ke, Te = s.multiple, $e = s.toggleOpen, Re = !((ee = he.value[0]) !== null && ee !== void 0 && (de = ee.options) !== null && de !== void 0 && de.length), aa = [(H = {}, (0, h.default)(H, O.value.value, "__EMPTY__"), (0, h.default)(H, w.FIX_LABEL, Ce), (0, h.default)(H, "disabled", !0), H)], ta = (0, b.default)((0, b.default)({}, P), {}, {
          multiple: !Re && Te,
          onSelect: ve,
          onActive: ce,
          onToggleOpen: $e,
          checkedSet: ae.value,
          halfCheckedSet: $.value,
          loadingKeys: M.value,
          isSelectable: se
        }), Fe = Re ? [{
          options: aa
        }] : he.value, Xe = Fe.map(function(ra, je) {
          var na = Y.value.slice(0, je), oa = Y.value[je];
          return (0, t.createVNode)(w.default, (0, b.default)((0, b.default)({
            key: je
          }, ta), {}, {
            prefixCls: F.value,
            options: ra.options,
            prevValuePath: na,
            activeValue: oa
          }), null);
        });
        return (0, t.createVNode)("div", {
          class: ["".concat(F.value, "-menus"), (ne = {}, (0, h.default)(ne, "".concat(F.value, "-menu-empty"), Re), (0, h.default)(ne, "".concat(F.value, "-rtl"), m.value), ne)],
          onMousedown: ge,
          ref: o
        }, [Xe]);
      };
    }
  });
  return fa.default = E, fa;
}
var xa = {}, pt;
function lr() {
  if (pt)
    return xa;
  pt = 1, Object.defineProperty(xa, "__esModule", {
    value: !0
  }), xa.default = e;
  var a = pe;
  function e(t) {
    var b = (0, a.ref)(0), h = (0, a.shallowRef)();
    return (0, a.watchEffect)(function() {
      var u = /* @__PURE__ */ new Map(), i = 0, f = t.value || {};
      for (var p in f)
        if (Object.prototype.hasOwnProperty.call(f, p)) {
          var d = f[p], r = d.level, v = u.get(r);
          v || (v = /* @__PURE__ */ new Set(), u.set(r, v)), v.add(d), i = Math.max(i, r);
        }
      b.value = i, h.value = u;
    }), {
      maxLevel: b,
      levelEntities: h
    };
  }
  return xa;
}
var ht;
function ur() {
  return ht || (ht = 1, function(a) {
    var e = Pe.exports;
    Object.defineProperty(a, "__esModule", {
      value: !0
    }), Object.defineProperty(a, "SHOW_CHILD", {
      enumerable: !0,
      get: function() {
        return _.SHOW_CHILD;
      }
    }), Object.defineProperty(a, "SHOW_PARENT", {
      enumerable: !0,
      get: function() {
        return _.SHOW_PARENT;
      }
    }), a.default = void 0, a.internalCascaderProps = x, a.multipleCascaderProps = C, a.singleCascaderProps = n;
    var t = pe, b = e(Le()), h = e(wa()), u = e(Ve()), i = Et(), f = e(Ua()), p = e(Ba()), d = Na(), r = e(Tt()), v = e(At()), _ = ea(), w = e(Yt()), I = e(Jt()), V = e(Wa()), E = e(Qt()), S = Da(), T = Zt(), R = e(er()), P = Ca(), g = e(or()), s = Ka(), o = e(mt()), m = e(lr());
    function l() {
      return (0, u.default)((0, u.default)({}, (0, f.default)((0, i.baseSelectPropsWithoutPrivate)(), ["tokenSeparators", "mode", "showSearch"])), {}, {
        id: String,
        prefixCls: String,
        fieldNames: Object,
        children: Array,
        value: {
          type: [String, Number, Array]
        },
        defaultValue: {
          type: [String, Number, Array]
        },
        changeOnSelect: {
          type: Boolean,
          default: void 0
        },
        displayRender: Function,
        checkable: {
          type: Boolean,
          default: void 0
        },
        showCheckedStrategy: {
          type: String,
          default: _.SHOW_PARENT
        },
        showSearch: {
          type: [Boolean, Object],
          default: void 0
        },
        searchValue: String,
        onSearch: Function,
        expandTrigger: String,
        options: Array,
        dropdownPrefixCls: String,
        loadData: Function,
        popupVisible: {
          type: Boolean,
          default: void 0
        },
        popupClassName: String,
        dropdownClassName: String,
        dropdownMenuColumnStyle: {
          type: Object,
          default: void 0
        },
        popupStyle: {
          type: Object,
          default: void 0
        },
        dropdownStyle: {
          type: Object,
          default: void 0
        },
        popupPlacement: String,
        placement: String,
        onPopupVisibleChange: Function,
        onDropdownVisibleChange: Function,
        expandIcon: p.default.any,
        loadingIcon: p.default.any
      });
    }
    function n() {
      return (0, u.default)((0, u.default)({}, l()), {}, {
        checkable: Boolean,
        onChange: Function
      });
    }
    function C() {
      return (0, u.default)((0, u.default)({}, l()), {}, {
        checkable: Boolean,
        onChange: Function
      });
    }
    function x() {
      return (0, u.default)((0, u.default)({}, l()), {}, {
        onChange: Function,
        customSlots: Object
      });
    }
    function O(D) {
      return Array.isArray(D) && Array.isArray(D[0]);
    }
    function N(D) {
      return D ? O(D) ? D : (D.length === 0 ? [] : [D]).map(function(y) {
        return Array.isArray(y) ? y : [y];
      }) : [];
    }
    var L = (0, t.defineComponent)({
      compatConfig: {
        MODE: 3
      },
      name: "Cascader",
      inheritAttrs: !1,
      props: (0, d.initDefaultProps)(x(), {}),
      setup: function(y, q) {
        var W = q.attrs, J = q.expose, F = q.slots, M = (0, r.default)((0, t.toRef)(y, "id")), Q = (0, t.computed)(function() {
          return !!y.checkable;
        }), ae = (0, v.default)(y.defaultValue, {
          value: (0, t.computed)(function() {
            return y.value;
          }),
          postState: N
        }), $ = (0, h.default)(ae, 2), G = $[0], te = $[1], Y = (0, t.computed)(function() {
          return (0, _.fillFieldNames)(y.fieldNames);
        }), oe = (0, t.computed)(function() {
          return y.options || [];
        }), ce = (0, w.default)(oe, Y), se = function(A) {
          var U = ce.value;
          return A.map(function(Z) {
            var ye = U[Z].nodes;
            return ye.map(function(ue) {
              return ue[Y.value.value];
            });
          });
        }, ve = (0, v.default)("", {
          value: (0, t.computed)(function() {
            return y.searchValue;
          }),
          postState: function(A) {
            return A || "";
          }
        }), ie = (0, h.default)(ve, 2), he = ie[0], le = ie[1], ge = function(A, U) {
          le(A), U.source !== "blur" && y.onSearch && y.onSearch(A);
        }, j = (0, I.default)((0, t.toRef)(y, "showSearch")), B = j.showSearch, re = j.searchConfig, ee = (0, V.default)(he, oe, Y, (0, t.computed)(function() {
          return y.dropdownPrefixCls || y.prefixCls;
        }), re, (0, t.toRef)(y, "changeOnSelect")), de = (0, E.default)(oe, Y, G), H = [(0, t.ref)([]), (0, t.ref)([]), (0, t.ref)([])], ne = H[0], ke = H[1], Ce = H[2], Te = (0, m.default)(ce), $e = Te.maxLevel, Re = Te.levelEntities;
        (0, t.watchEffect)(function() {
          var X = (0, h.default)(de.value, 2), A = X[0], U = X[1];
          if (!Q.value || !G.value.length) {
            var Z = [A, [], U];
            ne.value = Z[0], ke.value = Z[1], Ce.value = Z[2];
            return;
          }
          var ye = (0, _.toPathKeys)(A), ue = ce.value, _e = (0, T.conductCheck)(ye, !0, ue, $e.value, Re.value), me = _e.checkedKeys, fe = _e.halfCheckedKeys, Ne = [se(me), se(fe), U];
          ne.value = Ne[0], ke.value = Ne[1], Ce.value = Ne[2];
        });
        var aa = (0, t.computed)(function() {
          var X = (0, _.toPathKeys)(ne.value), A = (0, S.formatStrategyValues)(X, ce.value, y.showCheckedStrategy);
          return [].concat((0, b.default)(Ce.value), (0, b.default)(se(A)));
        }), ta = (0, R.default)(aa, oe, Y, Q, (0, t.toRef)(y, "displayRender")), Fe = function(A) {
          if (te(A), y.onChange) {
            var U = N(A), Z = U.map(function(_e) {
              return (0, S.toPathOptions)(_e, oe.value, Y.value).map(function(me) {
                return me.option;
              });
            }), ye = Q.value ? U : U[0], ue = Q.value ? Z : Z[0];
            y.onChange(ye, ue);
          }
        }, Xe = function(A) {
          if (le(""), !Q.value)
            Fe(A);
          else {
            var U = (0, _.toPathKey)(A), Z = (0, _.toPathKeys)(ne.value), ye = (0, _.toPathKeys)(ke.value), ue = Z.includes(U), _e = Ce.value.some(function(xe) {
              return (0, _.toPathKey)(xe) === U;
            }), me = ne.value, fe = Ce.value;
            if (_e && !ue)
              fe = Ce.value.filter(function(xe) {
                return (0, _.toPathKey)(xe) !== U;
              });
            else {
              var Ne = ue ? Z.filter(function(xe) {
                return xe !== U;
              }) : [].concat((0, b.default)(Z), [U]), Be;
              if (ue) {
                var Ye = (0, T.conductCheck)(Ne, {
                  checked: !1,
                  halfCheckedKeys: ye
                }, ce.value, $e.value, Re.value);
                Be = Ye.checkedKeys;
              } else {
                var Ue = (0, T.conductCheck)(Ne, !0, ce.value, $e.value, Re.value);
                Be = Ue.checkedKeys;
              }
              var We = (0, S.formatStrategyValues)(Be, ce.value, y.showCheckedStrategy);
              me = se(We);
            }
            Fe([].concat((0, b.default)(fe), (0, b.default)(me)));
          }
        }, ra = function(A, U) {
          if (U.type === "clear") {
            Fe([]);
            return;
          }
          var Z = U.values[0].valueCells;
          Xe(Z);
        };
        process.env.NODE_ENV !== "production" && (0, t.watchEffect)(function() {
          (0, o.default)(!y.onPopupVisibleChange, "Cascader", "`popupVisibleChange` is deprecated. Please use `dropdownVisibleChange` instead."), (0, o.default)(y.popupVisible === void 0, "Cascader", "`popupVisible` is deprecated. Please use `open` instead."), (0, o.default)(y.popupClassName === void 0, "Cascader", "`popupClassName` is deprecated. Please use `dropdownClassName` instead."), (0, o.default)(y.popupPlacement === void 0, "Cascader", "`popupPlacement` is deprecated. Please use `placement` instead."), (0, o.default)(y.popupStyle === void 0, "Cascader", "`popupStyle` is deprecated. Please use `dropdownStyle` instead.");
        });
        var je = (0, t.computed)(function() {
          return y.open !== void 0 ? y.open : y.popupVisible;
        }), na = (0, t.computed)(function() {
          return y.dropdownClassName || y.popupClassName;
        }), oa = (0, t.computed)(function() {
          return y.dropdownStyle || y.popupStyle || {};
        }), Ia = (0, t.computed)(function() {
          return y.placement || y.popupPlacement;
        }), Ea = function(A) {
          var U, Z;
          (U = y.onDropdownVisibleChange) === null || U === void 0 || U.call(y, A), (Z = y.onPopupVisibleChange) === null || Z === void 0 || Z.call(y, A);
        }, De = (0, t.toRefs)(y), Ta = De.changeOnSelect, _a = De.checkable, Ra = De.dropdownPrefixCls, Aa = De.loadData, ba = De.expandTrigger, Va = De.expandIcon, La = De.loadingIcon, K = De.dropdownMenuColumnStyle, c = De.customSlots;
        (0, P.useProvideCascader)({
          options: oe,
          fieldNames: Y,
          values: ne,
          halfValues: ke,
          changeOnSelect: Ta,
          onSelect: Xe,
          checkable: _a,
          searchOptions: ee,
          dropdownPrefixCls: Ra,
          loadData: Aa,
          expandTrigger: ba,
          expandIcon: Va,
          loadingIcon: La,
          dropdownMenuColumnStyle: K,
          customSlots: c
        });
        var k = (0, t.ref)();
        J({
          focus: function() {
            var A;
            (A = k.value) === null || A === void 0 || A.focus();
          },
          blur: function() {
            var A;
            (A = k.value) === null || A === void 0 || A.blur();
          },
          scrollTo: function(A) {
            var U;
            (U = k.value) === null || U === void 0 || U.scrollTo(A);
          }
        });
        var z = (0, t.computed)(function() {
          return (0, f.default)(y, [
            "id",
            "prefixCls",
            "fieldNames",
            "defaultValue",
            "value",
            "changeOnSelect",
            "onChange",
            "displayRender",
            "checkable",
            "searchValue",
            "onSearch",
            "showSearch",
            "expandTrigger",
            "options",
            "dropdownPrefixCls",
            "loadData",
            "popupVisible",
            "open",
            "popupClassName",
            "dropdownClassName",
            "dropdownMenuColumnStyle",
            "popupPlacement",
            "placement",
            "onDropdownVisibleChange",
            "onPopupVisibleChange",
            "expandIcon",
            "loadingIcon",
            "customSlots",
            "showCheckedStrategy",
            "children"
          ]);
        });
        return function() {
          var X = !(he.value ? ee.value : oe.value).length, A = y.dropdownMatchSelectWidth, U = A === void 0 ? !1 : A, Z = he.value && re.value.matchInputWidth || X ? {} : {
            minWidth: "auto"
          };
          return (0, t.createVNode)(s.BaseSelect, (0, u.default)((0, u.default)((0, u.default)({}, z.value), W), {}, {
            ref: k,
            id: M,
            prefixCls: y.prefixCls,
            dropdownMatchSelectWidth: U,
            dropdownStyle: (0, u.default)((0, u.default)({}, oa.value), Z),
            displayValues: ta.value,
            onDisplayValuesChange: ra,
            mode: Q.value ? "multiple" : void 0,
            searchValue: he.value,
            onSearch: ge,
            showSearch: B.value,
            OptionList: g.default,
            emptyOptions: X,
            open: je.value,
            dropdownClassName: na.value,
            placement: Ia.value,
            onDropdownVisibleChange: Ea,
            getRawInputElement: function() {
              var ue;
              return (ue = F.default) === null || ue === void 0 ? void 0 : ue.call(F);
            }
          }), F);
        };
      }
    });
    a.default = L;
  }(Fa)), Fa;
}
var gt;
function ir() {
  return gt || (gt = 1, function(a) {
    var e = qe.exports;
    Object.defineProperty(a, "__esModule", {
      value: !0
    }), Object.defineProperty(a, "SHOW_CHILD", {
      enumerable: !0,
      get: function() {
        return t.SHOW_CHILD;
      }
    }), Object.defineProperty(a, "SHOW_PARENT", {
      enumerable: !0,
      get: function() {
        return t.SHOW_PARENT;
      }
    }), Object.defineProperty(a, "cascaderProps", {
      enumerable: !0,
      get: function() {
        return t.internalCascaderProps;
      }
    }), a.default = void 0;
    var t = h(ur());
    function b(i) {
      if (typeof WeakMap != "function")
        return null;
      var f = /* @__PURE__ */ new WeakMap(), p = /* @__PURE__ */ new WeakMap();
      return (b = function(r) {
        return r ? p : f;
      })(i);
    }
    function h(i, f) {
      if (!f && i && i.__esModule)
        return i;
      if (i === null || e(i) !== "object" && typeof i != "function")
        return { default: i };
      var p = b(f);
      if (p && p.has(i))
        return p.get(i);
      var d = {}, r = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var v in i)
        if (v !== "default" && Object.prototype.hasOwnProperty.call(i, v)) {
          var _ = r ? Object.getOwnPropertyDescriptor(i, v) : null;
          _ && (_.get || _.set) ? Object.defineProperty(d, v, _) : d[v] = i[v];
        }
      return d.default = i, p && p.set(i, d), d;
    }
    var u = t.default;
    a.default = u;
  }($a)), $a;
}
var we = Pe.exports, dr = qe.exports;
Object.defineProperty(ma, "__esModule", {
  value: !0
});
var cr = ma.cascaderProps = kt, _t = ma.default = void 0, Se = pe, sr = we(Oa()), ga = we(ze()), Ee = we(Ve()), bt = we(qe.exports), vr = we(Le()), St = Or(ir()), fr = we($t()), pr = we(Nt()), hr = we(Ft()), gr = we(Rt()), yr = Kt(), mr = we(Ua()), Cr = we(Ba()), _r = Na(), br = we(Dt()), Sr = we(yt()), Pr = we(mt()), ja = It(), kr = jt(), xr = ["notFoundContent", "expandIcon", "multiple", "bordered", "allowClear", "choiceTransitionName", "transitionName", "id"];
function Pt(a) {
  if (typeof WeakMap != "function")
    return null;
  var e = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ new WeakMap();
  return (Pt = function(h) {
    return h ? t : e;
  })(a);
}
function Or(a, e) {
  if (!e && a && a.__esModule)
    return a;
  if (a === null || dr(a) !== "object" && typeof a != "function")
    return { default: a };
  var t = Pt(e);
  if (t && t.has(a))
    return t.get(a);
  var b = {}, h = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var u in a)
    if (u !== "default" && Object.prototype.hasOwnProperty.call(a, u)) {
      var i = h ? Object.getOwnPropertyDescriptor(a, u) : null;
      i && (i.get || i.set) ? Object.defineProperty(b, u, i) : b[u] = a[u];
    }
  return b.default = a, t && t.set(a, b), b;
}
function wr(a, e, t) {
  var b = a.toLowerCase().split(e).reduce(function(i, f, p) {
    return p === 0 ? [f] : [].concat((0, vr.default)(i), [e, f]);
  }, []), h = [], u = 0;
  return b.forEach(function(i, f) {
    var p = u + i.length, d = a.slice(u, p);
    u = p, f % 2 === 1 && (d = (0, Se.createVNode)("span", {
      class: "".concat(t, "-menu-item-keyword"),
      key: "seperator"
    }, [d])), h.push(d);
  }), h;
}
var Nr = function(e) {
  var t = e.inputValue, b = e.path, h = e.prefixCls, u = e.fieldNames, i = [], f = t.toLowerCase();
  return b.forEach(function(p, d) {
    d !== 0 && i.push(" / ");
    var r = p[u.label], v = (0, bt.default)(r);
    (v === "string" || v === "number") && (r = wr(String(r), f, h)), i.push(r);
  }), i;
};
function kt() {
  return (0, Ee.default)((0, Ee.default)({}, (0, mr.default)((0, St.cascaderProps)(), ["customSlots", "checkable", "options"])), {}, {
    multiple: {
      type: Boolean,
      default: void 0
    },
    size: String,
    bordered: {
      type: Boolean,
      default: void 0
    },
    placement: {
      type: String
    },
    suffixIcon: Cr.default.any,
    options: Array,
    "onUpdate:value": Function
  });
}
var Kr = (0, Se.defineComponent)({
  compatConfig: {
    MODE: 3
  },
  name: "ACascader",
  inheritAttrs: !1,
  props: (0, _r.initDefaultProps)(kt(), {
    bordered: !0,
    choiceTransitionName: "",
    allowClear: !0
  }),
  setup: function(e, t) {
    var b = t.attrs, h = t.expose, u = t.slots, i = t.emit, f = (0, kr.useInjectFormItemContext)(), p = (0, br.default)("cascader", e), d = p.prefixCls, r = p.rootPrefixCls, v = p.getPrefixCls, _ = p.direction, w = p.getPopupContainer, I = p.renderEmpty, V = p.size, E = (0, Se.computed)(function() {
      return v("select", e.prefixCls);
    }), S = (0, Se.computed)(function() {
      return _.value === "rtl";
    });
    process.env.NODE_ENV !== "production" && (0, Se.watchEffect)(function() {
      (0, Pr.default)(!e.multiple || !e.displayRender || !u.displayRender, "Cascader", "`displayRender` not work on `multiple`. Please use `tagRender` instead.");
    });
    var T = (0, Se.computed)(function() {
      if (!e.showSearch)
        return e.showSearch;
      var l = {
        render: Nr
      };
      return (0, bt.default)(e.showSearch) === "object" && (l = (0, Ee.default)((0, Ee.default)({}, l), e.showSearch)), l;
    }), R = (0, Se.computed)(function() {
      return (0, Sr.default)(e.dropdownClassName || e.popupClassName, "".concat(d.value, "-dropdown"), (0, ga.default)({}, "".concat(d.value, "-dropdown-rtl"), S.value));
    }), P = (0, Se.ref)();
    h({
      focus: function() {
        var n;
        (n = P.value) === null || n === void 0 || n.focus();
      },
      blur: function() {
        var n;
        (n = P.value) === null || n === void 0 || n.blur();
      }
    });
    var g = function() {
      for (var n = arguments.length, C = new Array(n), x = 0; x < n; x++)
        C[x] = arguments[x];
      i("update:value", C[0]), i.apply(void 0, ["change"].concat(C)), f.onFieldChange();
    }, s = function() {
      for (var n = arguments.length, C = new Array(n), x = 0; x < n; x++)
        C[x] = arguments[x];
      i.apply(void 0, ["blur"].concat(C)), f.onFieldBlur();
    }, o = (0, Se.computed)(function() {
      return e.showArrow !== void 0 ? e.showArrow : e.loading || !e.multiple;
    }), m = (0, Se.computed)(function() {
      return e.placement !== void 0 ? e.placement : _.value === "rtl" ? "bottomRight" : "bottomLeft";
    });
    return function() {
      var l, n, C, x = e.notFoundContent, O = x === void 0 ? (l = u.notFoundContent) === null || l === void 0 ? void 0 : l.call(u) : x, N = e.expandIcon, L = N === void 0 ? (n = u.expandIcon) === null || n === void 0 ? void 0 : n.call(u) : N, D = e.multiple, y = e.bordered, q = e.allowClear, W = e.choiceTransitionName, J = e.transitionName, F = e.id, M = F === void 0 ? f.id.value : F, Q = (0, sr.default)(e, xr), ae = O || I.value("Cascader"), $ = L;
      L || ($ = S.value ? (0, Se.createVNode)(hr.default, null, null) : (0, Se.createVNode)(fr.default, null, null));
      var G = (0, Se.createVNode)("span", {
        class: "".concat(E.value, "-menu-item-loading-icon")
      }, [(0, Se.createVNode)(pr.default, {
        spin: !0
      }, null)]), te = (0, gr.default)((0, Ee.default)((0, Ee.default)({}, e), {}, {
        multiple: D,
        prefixCls: E.value,
        showArrow: o.value
      }), u), Y = te.suffixIcon, oe = te.removeIcon, ce = te.clearIcon;
      return (0, Se.createVNode)(St.default, (0, Ee.default)((0, Ee.default)((0, Ee.default)({}, Q), b), {}, {
        id: M,
        prefixCls: E.value,
        class: [d.value, (C = {}, (0, ga.default)(C, "".concat(E.value, "-lg"), V.value === "large"), (0, ga.default)(C, "".concat(E.value, "-sm"), V.value === "small"), (0, ga.default)(C, "".concat(E.value, "-rtl"), S.value), (0, ga.default)(C, "".concat(E.value, "-borderless"), !y), C), b.class],
        direction: _.value,
        placement: m.value,
        notFoundContent: ae,
        allowClear: q,
        showSearch: T.value,
        expandIcon: $,
        inputIcon: Y,
        removeIcon: oe,
        clearIcon: ce,
        loadingIcon: G,
        checkable: !!D,
        dropdownClassName: R.value,
        dropdownPrefixCls: d.value,
        choiceTransitionName: (0, ja.getTransitionName)(r.value, "", W),
        transitionName: (0, ja.getTransitionName)(r.value, (0, ja.getTransitionDirection)(m.value), J),
        getPopupContainer: w.value,
        customSlots: (0, Ee.default)((0, Ee.default)({}, u), {}, {
          checkable: function() {
            return (0, Se.createVNode)("span", {
              class: "".concat(d.value, "-checkbox-inner")
            }, null);
          }
        }),
        tagRender: e.tagRender || u.tagRender,
        displayRender: e.displayRender || u.displayRender,
        maxTagPlaceholder: e.maxTagPlaceholder || u.maxTagPlaceholder,
        showArrow: e.showArrow,
        onChange: g,
        onBlur: s,
        ref: P
      }), u);
    };
  }
}), Dr = (0, yr.withInstall)(Kr);
_t = ma.default = Dr;
const Ur = /* @__PURE__ */ Bt({
  __proto__: null,
  cascaderProps: cr,
  get default() {
    return _t;
  }
}, [ma]);
export {
  Ur as i
};
