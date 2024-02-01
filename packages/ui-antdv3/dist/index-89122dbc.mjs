import { g as pe, a as ze, i as Pe, j as Ba, o as xa, u as wt, r as Ve, e as yt, t as ya, b as Le, n as wa, c as Na, l as mt, A as Nt, h as Kt, f as Dt, k as Et } from "./useConfigInject-f4796704.mjs";
import { _ as qe } from "./index-4ddd22ca.mjs";
import { r as Ka, b as It, c as Tt, a as At } from "./iconUtil-c0289a2b.mjs";
import { r as Ua } from "./omit-567cf556.mjs";
import { r as Rt } from "./useMergedState-d616d3f0.mjs";
import { r as Vt } from "./pickAttrs-0f2b7511.mjs";
import { r as Lt } from "./vnode-35592114.mjs";
import { r as Mt } from "./useState-08f41f35.mjs";
import { r as qt } from "./KeyCode-8a26b842.mjs";
import { r as Ft } from "./RightOutlined-4cc89754.mjs";
import { r as $t } from "./LeftOutlined-923a8577.mjs";
import { r as jt } from "./index-0b483102.mjs";
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
var ma = {}, Fa = {}, $a = {}, xe = {}, Ga;
function ea() {
  if (Ga)
    return xe;
  Ga = 1, Object.defineProperty(xe, "__esModule", {
    value: !0
  }), xe.VALUE_SPLIT = xe.SHOW_PARENT = xe.SHOW_CHILD = void 0, xe.fillFieldNames = i, xe.isLeaf = f, xe.scrollIntoParentView = p, xe.toPathKey = b, xe.toPathKeys = h, xe.toPathValueStr = u;
  var a = "__RC_CASCADER_SPLIT__";
  xe.VALUE_SPLIT = a;
  var e = "SHOW_PARENT";
  xe.SHOW_PARENT = e;
  var t = "SHOW_CHILD";
  xe.SHOW_CHILD = t;
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
    var r = d || {}, v = r.label, _ = r.value, w = r.children, E = _ || "value";
    return {
      label: v || "label",
      value: E,
      key: E,
      children: w || "children"
    };
  }
  function f(d, r) {
    var v, _;
    return (v = d.isLeaf) !== null && v !== void 0 ? v : !((_ = d[r.children]) !== null && _ !== void 0 && _.length);
  }
  function p(d) {
    var r = d.parentElement;
    if (r) {
      var v = d.offsetTop - r.offsetTop;
      v - r.scrollTop < 0 ? r.scrollTo({
        top: v
      }) : v + d.offsetHeight - r.scrollTop > r.offsetHeight && r.scrollTo({
        top: v + d.offsetHeight - r.offsetHeight
      });
    }
  }
  return xe;
}
var la = {}, Ke = {}, be = {}, ua = {}, Ee = {}, za;
function Ut() {
  if (za)
    return Ee;
  za = 1, Object.defineProperty(Ee, "__esModule", {
    value: !0
  }), Ee.useProvideKeysState = Ee.useInjectTreeContext = Ee.useInjectKeysState = Ee.TreeContext = void 0;
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
  Ee.TreeContext = t;
  var b = function() {
    return (0, a.inject)(e, (0, a.computed)(function() {
      return {};
    }));
  };
  Ee.useInjectTreeContext = b;
  var h = Symbol("KeysStateKey"), u = function(p) {
    (0, a.provide)(h, p);
  };
  Ee.useProvideKeysState = u;
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
  return Ee.useInjectKeysState = i, Ee;
}
var ia = {}, Xa;
function Wt() {
  if (Xa)
    return ia;
  Xa = 1;
  var a = Pe;
  Object.defineProperty(ia, "__esModule", {
    value: !0
  }), ia.default = void 0;
  var e = pe, t = a(ze()), b = function(i) {
    for (var f = i.prefixCls, p = i.level, d = i.isStart, r = i.isEnd, v = "".concat(f, "-indent-unit"), _ = [], w = 0; w < p; w += 1) {
      var E;
      _.push((0, e.createVNode)("span", {
        key: w,
        class: (E = {}, (0, t.default)(E, v, !0), (0, t.default)(E, "".concat(v, "-start"), d[w]), (0, t.default)(E, "".concat(v, "-end"), r[w]), E)
      }, null));
    }
    return (0, e.createVNode)("span", {
      "aria-hidden": "true",
      class: "".concat(f, "-indent")
    }, [_]);
  }, h = b;
  return ia.default = h, ia;
}
var Re = {}, Ya;
function Ht() {
  if (Ya)
    return Re;
  Ya = 1;
  var a = Pe;
  Object.defineProperty(Re, "__esModule", {
    value: !0
  }), Re.treeProps = Re.treeNodeProps = Re.nodeListProps = void 0;
  var e = a(Ba()), t = {
    eventKey: [String, Number],
    prefixCls: String,
    // By parent
    // expanded: { type: Boolean, default: undefined },
    // selected: { type: Boolean, default: undefined },
    // checked: { type: Boolean, default: undefined },
    // loaded: { type: Boolean, default: undefined },
    // loading: { type: Boolean, default: undefined },
    // halfChecked: { type: Boolean, default: undefined },
    // dragOver: { type: Boolean, default: undefined },
    // dragOverGapTop: { type: Boolean, default: undefined },
    // dragOverGapBottom: { type: Boolean, default: undefined },
    // pos: String,
    title: e.default.any,
    /** New added in Tree for easy data access */
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
    // By user
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
  Re.treeNodeProps = t;
  var b = {
    prefixCls: {
      type: String
    },
    // data: { type: Array as PropType<FlattenNode[]> },
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
    // expandedKeys: { type: Array as PropType<Key[]> },
    // selectedKeys: { type: Array as PropType<Key[]> },
    // checkedKeys: { type: Array as PropType<Key[]> },
    // loadedKeys: { type: Array as PropType<Key[]> },
    // loadingKeys: { type: Array as PropType<Key[]> },
    // halfCheckedKeys: { type: Array as PropType<Key[]> },
    // keyEntities: { type: Object as PropType<Record<Key, DataEntity<DataNode>>> },
    // dragging: { type: Boolean as PropType<boolean> },
    // dragOverNodeKey: { type: [String, Number] as PropType<Key> },
    // dropPosition: { type: Number as PropType<number> },
    // Virtual list
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
  Re.nodeListProps = b;
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
      /**
       * Used for `rc-tree-select` only.
       * Do not use in your production code directly since this will be refactor.
       */
      onActiveChange: {
        type: Function
      },
      filterTreeNode: {
        type: Function
      },
      motion: e.default.any,
      switcherIcon: e.default.any,
      // Virtual List
      height: Number,
      itemHeight: Number,
      virtual: {
        type: Boolean,
        default: void 0
      },
      // direction for drag logic
      direction: {
        type: String
      }
    };
  };
  return Re.treeProps = h, Re;
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
      // needed so updates are immediate.
    }), b;
  }
  return Sa;
}
var Qa;
function zt() {
  if (Qa)
    return ua;
  Qa = 1;
  var a = Pe;
  Object.defineProperty(ua, "__esModule", {
    value: !0
  }), ua.default = void 0;
  var e = pe, t = a(ze()), b = a(xa()), h = a(wt()), u = a(Ve()), i = Ut(), f = a(Wt()), p = Ct(), d = Ht(), r = a(yt()), v = ya(), _ = a(Vt()), w = a(Gt()), E = ["eventKey", "isLeaf", "isStart", "isEnd", "domRef", "active", "data", "onMousemove", "selectable"], V = "open", I = "close", S = "---", T = (0, e.defineComponent)({
    compatConfig: {
      MODE: 3
    },
    name: "ATreeNode",
    inheritAttrs: !1,
    props: d.treeNodeProps,
    isTreeNode: 1,
    slots: ["title", "icon", "switcherIcon"],
    setup: function(P, g) {
      var s = g.attrs, o = g.slots, m = g.expose;
      (0, v.warning)(!("slots" in P.data), "treeData slots is deprecated, please use ".concat(Object.keys(P.data.slots || {}).map(function(K) {
        return "`v-slot:" + K + "` ";
      }), "instead"));
      var l = (0, e.ref)(!1), n = (0, i.useInjectTreeContext)(), C = (0, i.useInjectKeysState)(), O = C.expandedKeysSet, x = C.selectedKeysSet, N = C.loadedKeysSet, L = C.loadingKeysSet, D = C.checkedKeysSet, y = C.halfCheckedKeysSet, q = n.value, W = q.dragOverNodeKey, J = q.dropPosition, $ = q.keyEntities, M = (0, e.computed)(function() {
        return (0, p.getTreeNodeProps)(P.eventKey, {
          expandedKeysSet: O.value,
          selectedKeysSet: x.value,
          loadedKeysSet: N.value,
          loadingKeysSet: L.value,
          checkedKeysSet: D.value,
          halfCheckedKeysSet: y.value,
          dragOverNodeKey: W,
          dropPosition: J,
          keyEntities: $
        });
      }), Q = (0, w.default)(function() {
        return M.value.expanded;
      }), ae = (0, w.default)(function() {
        return M.value.selected;
      }), F = (0, w.default)(function() {
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
        return le.value ? null : Q.value ? V : I;
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
        var K = P.data, c = P.active, k = P.checkable, z = P.disableCheckbox, X = P.disabled, R = P.selectable;
        return (0, u.default)((0, u.default)({
          active: c,
          checkable: k,
          disableCheckbox: z,
          disabled: X,
          selectable: R
        }, K), {}, {
          dataRef: K,
          data: K,
          isLeaf: le.value,
          checked: F.value,
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
            var X = !F.value;
            z(c, H.value, X);
          }
        }
      }, Fe = function(c) {
        var k = n.value.onNodeClick;
        k(c, H.value), re.value ? Ce(c) : Te(c);
      }, Ae = function(c) {
        var k = n.value.onNodeMouseEnter;
        k(c, H.value);
      }, aa = function(c) {
        var k = n.value.onNodeMouseLeave;
        k(c, H.value);
      }, ta = function(c) {
        var k = n.value.onNodeContextMenu;
        k(c, H.value);
      }, $e = function(c) {
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
      }, Ea = function(c) {
        var k = n.value.onNodeExpand;
        te.value || k(c, H.value);
      }, Ia = function() {
        var c = P.data, k = n.value.draggable;
        return !!(k && (!k.nodeDraggable || k.nodeDraggable(c)));
      }, De = function() {
        var c = n.value, k = c.draggable, z = c.prefixCls;
        return k && k !== null && k !== void 0 && k.icon ? (0, e.createVNode)("span", {
          class: "".concat(z, "-draggable-icon")
        }, [k.icon]) : null;
      }, Ta = function() {
        var c, k, z, X = P.switcherIcon, R = X === void 0 ? o.switcherIcon || ((c = n.value.slots) === null || c === void 0 ? void 0 : c[(k = P.data) === null || k === void 0 || (z = k.slots) === null || z === void 0 ? void 0 : z.switcherIcon]) : X, U = n.value.switcherIcon, Z = R || U;
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
      var Aa = function() {
        var c = n.value.prefixCls, k = Ta();
        if (le.value)
          return k !== !1 ? (0, e.createVNode)("span", {
            class: (0, r.default)("".concat(c, "-switcher"), "".concat(c, "-switcher-noop"))
          }, [k]) : null;
        var z = (0, r.default)("".concat(c, "-switcher"), "".concat(c, "-switcher_").concat(Q.value ? V : I));
        return k !== !1 ? (0, e.createVNode)("span", {
          onClick: Ea,
          class: z
        }, [k]) : null;
      }, Ra = function() {
        var c, k, z = P.disableCheckbox, X = n.value.prefixCls, R = j.value, U = B.value;
        return U ? (0, e.createVNode)("span", {
          class: (0, r.default)("".concat(X, "-checkbox"), F.value && "".concat(X, "-checkbox-checked"), !F.value && Y.value && "".concat(X, "-checkbox-indeterminate"), (R || z) && "".concat(X, "-checkbox-disabled")),
          onClick: Te
        }, [(c = (k = n.value).customCheckable) === null || c === void 0 ? void 0 : c.call(k)]) : null;
      }, ba = function() {
        var c = n.value.prefixCls;
        return (0, e.createVNode)("span", {
          class: (0, r.default)("".concat(c, "-iconEle"), "".concat(c, "-icon__").concat(ge.value || "docu"), te.value && "".concat(c, "-icon_loading"))
        }, null);
      }, Va = function() {
        var c = P.disabled, k = P.eventKey, z = n.value, X = z.draggable, R = z.dropLevelOffset, U = z.dropPosition, Z = z.prefixCls, ye = z.indent, ue = z.dropIndicatorRender, _e = z.dragOverNodeKey, me = z.direction, fe = X !== !1, Ne = !c && fe && _e === k;
        return Ne ? ue({
          dropPosition: U,
          dropLevelOffset: R,
          indent: ye,
          prefixCls: Z,
          direction: me
        }) : null;
      }, La = function() {
        var c, k, z, X, R = P.icon, U = R === void 0 ? o.icon : R, Z = P.data, ye = o.title || ((c = n.value.slots) === null || c === void 0 ? void 0 : c[(k = P.data) === null || k === void 0 || (z = k.slots) === null || z === void 0 ? void 0 : z.title]) || ((X = n.value.slots) === null || X === void 0 ? void 0 : X.title) || P.title, ue = n.value, _e = ue.prefixCls, me = ue.showIcon, fe = ue.icon, Ne = ue.loadData, Be = j.value, Ye = "".concat(_e, "-node-content-wrapper"), Ue;
        if (me) {
          var We, Oe, Je = U || ((We = n.value.slots) === null || We === void 0 ? void 0 : We[Z == null || (Oe = Z.slots) === null || Oe === void 0 ? void 0 : Oe.icon]) || fe;
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
          onMouseenter: Ae,
          onMouseleave: aa,
          onContextmenu: ta,
          onClick: Fe,
          onDblclick: ke
        }, [Ue, Ma, Va()]);
      };
      return function() {
        var K, c = (0, u.default)((0, u.default)({}, P), s), k = c.eventKey, z = c.isLeaf, X = c.isStart, R = c.isEnd, U = c.domRef, Z = c.active;
        c.data;
        var ye = c.onMousemove, ue = c.selectable, _e = (0, b.default)(c, E), me = n.value, fe = me.prefixCls, Ne = me.filterTreeNode, Be = me.keyEntities, Ye = me.dropContainerKey, Ue = me.dropTargetKey, We = me.draggingNodeKey, Oe = j.value, Je = (0, _.default)(_e, {
          aria: !0,
          data: !0
        }), Me = Be[k] || {}, Ma = Me.level, Ot = R[R.length - 1], Qe = Ia(), qa = !Oe && Qe, Ha = We === k, xt = ue !== void 0 ? {
          "aria-selected": !!ue
        } : void 0;
        return (0, e.createVNode)("div", (0, u.default)((0, u.default)({
          ref: U,
          class: (0, r.default)(s.class, "".concat(fe, "-treenode"), (K = {}, (0, t.default)(K, "".concat(fe, "-treenode-disabled"), Oe), (0, t.default)(K, "".concat(fe, "-treenode-switcher-").concat(Q.value ? "open" : "close"), !z), (0, t.default)(K, "".concat(fe, "-treenode-checkbox-checked"), F.value), (0, t.default)(K, "".concat(fe, "-treenode-checkbox-indeterminate"), Y.value), (0, t.default)(K, "".concat(fe, "-treenode-selected"), ae.value), (0, t.default)(K, "".concat(fe, "-treenode-loading"), te.value), (0, t.default)(K, "".concat(fe, "-treenode-active"), Z), (0, t.default)(K, "".concat(fe, "-treenode-leaf-last"), Ot), (0, t.default)(K, "".concat(fe, "-treenode-draggable"), qa), (0, t.default)(K, "dragging", Ha), (0, t.default)(K, "drop-target", Ue === k), (0, t.default)(K, "drop-container", Ye === k), (0, t.default)(K, "drag-over", !Oe && oe.value), (0, t.default)(K, "drag-over-gap-top", !Oe && ce.value), (0, t.default)(K, "drag-over-gap-bottom", !Oe && se.value), (0, t.default)(K, "filter-node", Ne && Ne(H.value)), K)),
          style: s.style,
          draggable: qa,
          "aria-grabbed": Ha,
          onDragstart: qa ? $e : void 0,
          onDragenter: Qe ? Xe : void 0,
          onDragover: Qe ? ra : void 0,
          onDragleave: Qe ? je : void 0,
          onDrop: Qe ? oa : void 0,
          onDragend: Qe ? na : void 0,
          onMousemove: ye
        }, xt), Je), [(0, e.createVNode)(f.default, {
          prefixCls: fe,
          level: Ma,
          isStart: X,
          isEnd: R
        }, null), De(), Aa(), Ra(), La()]);
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
  var a = Pe;
  Object.defineProperty(be, "__esModule", {
    value: !0
  }), be.arrAdd = r, be.arrDel = d, be.calcDropPosition = S, be.calcSelectedKeys = T, be.conductExpandParent = s, be.convertDataToTree = P, be.getDragChildrenKeys = E, be.getPosition = _, be.isFirstChild = I, be.isLastChild = V, be.isTreeNode = w, be.parseCheckedKeys = g, be.posToArr = v;
  var e = pe, t = a(Le()), b = a(qe), h = a(Ve()), u = a(xa()), i = a(zt()), f = ya(), p = ["children"];
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
  function E(o, m) {
    var l = [], n = m[o];
    function C() {
      var O = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
      O.forEach(function(x) {
        var N = x.key, L = x.children;
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
  function I(o) {
    var m = v(o.pos);
    return Number(m[m.length - 1]) === 0;
  }
  function S(o, m, l, n, C, O, x, N, L, D) {
    var y, q = o.clientX, W = o.clientY, J = o.target.getBoundingClientRect(), $ = J.top, M = J.height, Q = (D === "rtl" ? -1 : 1) * (((C == null ? void 0 : C.x) || 0) - q), ae = (Q - 12) / n, F = N[l.eventKey];
    if (W < $ + M / 2) {
      var G = x.findIndex(function(B) {
        return B.key === F.key;
      }), te = G <= 0 ? 0 : G - 1, Y = x[te].key;
      F = N[Y];
    }
    var oe = F.key, ce = F, se = F.key, ve = 0, ie = 0;
    if (!L.has(oe))
      for (var he = 0; he < ae && V(F); he += 1)
        F = F.parent, ie += 1;
    var le = m.eventData, ge = F.node, j = !0;
    return I(F) && F.level === 0 && W < $ + M / 2 && O({
      dragNode: le,
      dropNode: ge,
      dropPosition: -1
    }) && F.key === l.eventKey ? ve = -1 : (ce.children || []).length && L.has(se) ? O({
      dragNode: le,
      dropNode: ge,
      dropPosition: 0
    }) ? ve = 0 : j = !1 : ie === 0 ? ae > -1.5 ? O({
      dragNode: le,
      dropNode: ge,
      dropPosition: 1
    }) ? ve = 1 : j = !1 : O({
      dragNode: le,
      dropNode: ge,
      dropPosition: 0
    }) ? ve = 0 : O({
      dragNode: le,
      dropNode: ge,
      dropPosition: 1
    }) ? ve = 1 : j = !1 : O({
      dragNode: le,
      dropNode: ge,
      dropPosition: 1
    }) ? ve = 1 : j = !1, {
      dropPosition: ve,
      dropLevelOffset: ie,
      dropTargetKey: F.key,
      dropTargetPos: F.pos,
      dragOverNodeKey: se,
      dropContainerKey: ve === 0 ? null : ((y = F.parent) === null || y === void 0 ? void 0 : y.key) || null,
      dropAllowed: j
    };
  }
  function T(o, m) {
    if (o) {
      var l = m.multiple;
      return l ? o.slice() : o.length ? [o[0]] : o;
    }
  }
  var A = function(m) {
    return m;
  };
  function P(o, m) {
    if (!o)
      return [];
    var l = m || {}, n = l.processProps, C = n === void 0 ? A : n, O = Array.isArray(o) ? o : [o];
    return O.map(function(x) {
      var N = x.children, L = (0, u.default)(x, p), D = P(N, m);
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
        var O = m[C];
        if (O) {
          l.add(C);
          var x = O.parent, N = O.node;
          N.disabled || x && n(x.key);
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
  var a = Pe;
  Object.defineProperty(Ke, "__esModule", {
    value: !0
  }), Ke.convertDataToEntities = T, Ke.convertNodePropsToEventData = P, Ke.convertTreeToData = V, Ke.fillFieldNames = w, Ke.flattenTreeData = I, Ke.getKey = _, Ke.getTreeNodeProps = A, Ke.traverseDataNodes = S, Ke.warningWithoutKey = E;
  var e = a(qe), t = a(Le()), b = a(xa()), h = a(Ve()), u = a(wa()), i = Xt(), f = ya(), p = pe, d = Na(), r = a(Ua()), v = ["title", "icon", "switcherIcon"];
  function _(g, s) {
    return g ?? s;
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
  function E(g, s) {
    var o = /* @__PURE__ */ new Map();
    function m(l) {
      var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
      (l || []).forEach(function(C) {
        var O = C[s.key], x = C[s.children];
        (0, f.warning)(O != null, "Tree node must have a certain key: [".concat(n).concat(O, "]"));
        var N = String(O);
        (0, f.warning)(!o.has(N) || O === null || O === void 0, "Same 'key' exist in the Tree: ".concat(N)), o.set(N, !0), m(x, "".concat(n).concat(N, " > "));
      });
    }
    m(g);
  }
  function V(g) {
    function s() {
      var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], m = (0, d.filterEmpty)(o);
      return m.map(function(l) {
        var n, C, O, x;
        if (!(0, i.isTreeNode)(l))
          return (0, f.warning)(!l, "Tree/TreeNode can only accept TreeNode as children."), null;
        for (var N = l.children || {}, L = l.key, D = {}, y = 0, q = Object.entries(l.props); y < q.length; y++) {
          var W = (0, u.default)(q[y], 2), J = W[0], $ = W[1];
          D[(0, p.camelize)(J)] = $;
        }
        var M = D.isLeaf, Q = D.checkable, ae = D.selectable, F = D.disabled, G = D.disableCheckbox, te = {
          isLeaf: M || M === "" || void 0,
          checkable: Q || Q === "" || void 0,
          selectable: ae || ae === "" || void 0,
          disabled: F || F === "" || void 0,
          disableCheckbox: G || G === "" || void 0
        }, Y = (0, h.default)((0, h.default)({}, D), te), oe = D.title, ce = oe === void 0 ? (n = N.title) === null || n === void 0 ? void 0 : n.call(N, Y) : oe, se = D.icon, ve = se === void 0 ? (C = N.icon) === null || C === void 0 ? void 0 : C.call(N, Y) : se, ie = D.switcherIcon, he = ie === void 0 ? (O = N.switcherIcon) === null || O === void 0 ? void 0 : O.call(N, Y) : ie, le = (0, b.default)(D, v), ge = (x = N.default) === null || x === void 0 ? void 0 : x.call(N), j = (0, h.default)((0, h.default)({}, le), {}, {
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
  function I(g, s, o) {
    var m = w(o), l = m._title, n = m.key, C = m.children, O = new Set(s === !0 ? [] : s), x = [];
    function N(L) {
      var D = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
      return L.map(function(y, q) {
        for (var W = (0, i.getPosition)(D ? D.pos : "0", q), J = _(y[n], W), $, M = 0; M < l.length; M += 1) {
          var Q = l[M];
          if (y[Q] !== void 0) {
            $ = y[Q];
            break;
          }
        }
        var ae = (0, h.default)((0, h.default)({}, (0, r.default)(y, [].concat((0, t.default)(l), [n, C]))), {}, {
          title: $,
          key: J,
          parent: D,
          pos: W,
          children: null,
          data: y,
          isStart: [].concat((0, t.default)(D ? D.isStart : []), [q === 0]),
          isEnd: [].concat((0, t.default)(D ? D.isEnd : []), [q === L.length - 1])
        });
        return x.push(ae), s === !0 || O.has(J) ? ae.children = N(y[C] || [], ae) : ae.children = [], ae;
      });
    }
    return N(g), x;
  }
  function S(g, s, o) {
    var m = {};
    (0, e.default)(o) === "object" ? m = o : m = {
      externalGetKey: o
    }, m = m || {};
    var l = m, n = l.childrenPropName, C = l.externalGetKey, O = l.fieldNames, x = w(O), N = x.key, L = x.children, D = n || L, y;
    C ? typeof C == "string" ? y = function(J) {
      return J[C];
    } : typeof C == "function" && (y = function(J) {
      return C(J);
    }) : y = function(J, $) {
      return _(J[N], $);
    };
    function q(W, J, $, M) {
      var Q = W ? W[D] : g, ae = W ? (0, i.getPosition)($.pos, J) : "0", F = W ? [].concat((0, t.default)(M), [W]) : [];
      if (W) {
        var G = y(W, ae), te = {
          node: W,
          index: J,
          pos: ae,
          key: G,
          parentPos: $.node ? $.pos : null,
          level: $.level + 1,
          nodes: F
        };
        s(te);
      }
      Q && Q.forEach(function(Y, oe) {
        q(Y, oe, {
          node: W,
          pos: ae,
          level: $ ? $.level + 1 : -1
        }, F);
      });
    }
    q(null);
  }
  function T(g) {
    var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o = s.initWrapper, m = s.processEntity, l = s.onProcessFinished, n = s.externalGetKey, C = s.childrenPropName, O = s.fieldNames, x = arguments.length > 2 ? arguments[2] : void 0, N = n || x, L = {}, D = {}, y = {
      posEntities: L,
      keyEntities: D
    };
    return o && (y = o(y) || y), S(g, function(q) {
      var W = q.node, J = q.index, $ = q.pos, M = q.key, Q = q.parentPos, ae = q.level, F = q.nodes, G = {
        node: W,
        nodes: F,
        index: J,
        key: M,
        pos: $,
        level: ae
      }, te = _(M, $);
      L[$] = G, D[te] = G, G.parent = L[Q], G.parent && (G.parent.children = G.parent.children || [], G.parent.children.push(G)), m && m(G, y);
    }, {
      externalGetKey: N,
      childrenPropName: C,
      fieldNames: O
    }), l && l(y), y;
  }
  function A(g, s) {
    var o = s.expandedKeysSet, m = s.selectedKeysSet, l = s.loadedKeysSet, n = s.loadingKeysSet, C = s.checkedKeysSet, O = s.halfCheckedKeysSet, x = s.dragOverNodeKey, N = s.dropPosition, L = s.keyEntities, D = L[g], y = {
      eventKey: g,
      expanded: o.has(g),
      selected: m.has(g),
      loaded: l.has(g),
      loading: n.has(g),
      checked: C.has(g),
      halfChecked: O.has(g),
      pos: String(D ? D.pos : ""),
      parent: D.parent,
      // [Legacy] Drag props
      // Since the interaction of drag is changed, the semantic of the props are
      // not accuracy, I think it should be finally removed
      dragOver: x === g && N === 0,
      dragOverGapTop: x === g && N === -1,
      dragOverGapBottom: x === g && N === 1
    };
    return y;
  }
  function P(g) {
    var s = g.data, o = g.expanded, m = g.selected, l = g.checked, n = g.loaded, C = g.loading, O = g.halfChecked, x = g.dragOver, N = g.dragOverGapTop, L = g.dragOverGapBottom, D = g.pos, y = g.active, q = g.eventKey, W = (0, h.default)((0, h.default)({
      dataRef: s
    }, s), {}, {
      expanded: o,
      selected: m,
      checked: l,
      loaded: n,
      loading: C,
      halfChecked: O,
      dragOver: x,
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
  var a = Pe;
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
          var w = v.nodes.map(function(E) {
            return E[p.value.value];
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
  var a = Pe;
  Object.defineProperty(Pa, "__esModule", {
    value: !0
  }), Pa.default = u;
  var e = a(Ve()), t = a(qe), b = pe, h = ya();
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
  var a = Pe;
  Object.defineProperty(He, "__esModule", {
    value: !0
  }), He.default = He.SEARCH_MARK = void 0;
  var e = a(ze()), t = a(Ve()), b = a(Le()), h = pe, u = "__rc_cascader_search_mark__";
  He.SEARCH_MARK = u;
  var i = function(r, v, _) {
    var w = _.label;
    return v.some(function(E) {
      return String(E[w]).toLowerCase().includes(r.toLowerCase());
    });
  }, f = function(r) {
    var v = r.path, _ = r.fieldNames;
    return v.map(function(w) {
      return w[_.label];
    }).join(" / ");
  }, p = function(r, v, _, w, E, V) {
    return (0, h.computed)(function() {
      var I = E.value, S = I.filter, T = S === void 0 ? i : S, A = I.render, P = A === void 0 ? f : A, g = I.limit, s = g === void 0 ? 50 : g, o = I.sort, m = [];
      if (!r.value)
        return [];
      function l(n, C) {
        n.forEach(function(O) {
          if (!(!o && s > 0 && m.length >= s)) {
            var x = [].concat((0, b.default)(C), [O]), N = O[_.value.children];
            if (
              // If is leaf option
              (!N || N.length === 0 || // If is changeOnSelect
              V.value) && T(r.value, x, {
                label: _.value.label
              })
            ) {
              var L;
              m.push((0, t.default)((0, t.default)({}, O), {}, (L = {}, (0, e.default)(L, _.value.label, P({
                inputValue: r.value,
                path: x,
                prefixCls: w.value,
                fieldNames: _.value
              })), (0, e.default)(L, u, x), L)));
            }
            N && l(O[_.value.children], x);
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
      var _, w, E, V = b[r], I = (_ = f) === null || _ === void 0 ? void 0 : _.findIndex(function(T) {
        var A = T[u.value];
        return i ? String(A) === String(V) : A === V;
      }), S = I !== -1 ? (w = f) === null || w === void 0 ? void 0 : w[I] : null;
      p.push({
        value: (E = S == null ? void 0 : S[u.value]) !== null && E !== void 0 ? E : V,
        index: I,
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
        var T = S.key, A = S.node, P = S.children, g = P === void 0 ? [] : P;
        r.has(T) && !d(A) && g.filter(function(s) {
          return !d(s.node);
        }).forEach(function(s) {
          r.add(s.key);
        });
      });
    }
    for (var E = /* @__PURE__ */ new Set(), V = p; V >= 0; V -= 1) {
      var I = f.get(V) || /* @__PURE__ */ new Set();
      I.forEach(function(S) {
        var T = S.parent, A = S.node;
        if (!(d(A) || !S.parent || E.has(S.parent.key))) {
          if (d(S.parent.node)) {
            E.add(T.key);
            return;
          }
          var P = !0, g = !1;
          (T.children || []).filter(function(s) {
            return !d(s.node);
          }).forEach(function(s) {
            var o = s.key, m = r.has(o);
            P && !m && (P = !1), !g && (m || v.has(o)) && (g = !0);
          }), P && r.add(T.key), g && v.add(T.key), E.add(T.key);
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
      var E = p.get(w) || /* @__PURE__ */ new Set();
      E.forEach(function(T) {
        var A = T.key, P = T.node, g = T.children, s = g === void 0 ? [] : g;
        !v.has(A) && !_.has(A) && !r(P) && s.filter(function(o) {
          return !r(o.node);
        }).forEach(function(o) {
          v.delete(o.key);
        });
      });
    }
    _ = /* @__PURE__ */ new Set();
    for (var V = /* @__PURE__ */ new Set(), I = d; I >= 0; I -= 1) {
      var S = p.get(I) || /* @__PURE__ */ new Set();
      S.forEach(function(T) {
        var A = T.parent, P = T.node;
        if (!(r(P) || !T.parent || V.has(T.parent.key))) {
          if (r(T.parent.node)) {
            V.add(A.key);
            return;
          }
          var g = !0, s = !1;
          (A.children || []).filter(function(o) {
            return !r(o.node);
          }).forEach(function(o) {
            var m = o.key, l = v.has(m);
            g && !l && (g = !1), !s && (l || _.has(m)) && (s = !0);
          }), g || v.delete(A.key), s && _.add(A.key), V.add(A.key);
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
    var E = new Set(i.filter(function(I) {
      var S = !!p[I];
      return S || _.push(I), S;
    }));
    (0, a.note)(!_.length, "Tree missing follow keys: ".concat(_.slice(0, 100).map(function(I) {
      return "'".concat(I, "'");
    }).join(", ")));
    var V;
    return f === !0 ? V = b(E, r, d, w) : V = h(E, f.halfCheckedKeys, r, d, w), V;
  }
  return sa;
}
var va = {}, ut;
function er() {
  if (ut)
    return va;
  ut = 1;
  var a = Pe;
  Object.defineProperty(va, "__esModule", {
    value: !0
  }), va.default = void 0;
  var e = a(Le()), t = a(qe), b = Da(), h = ea(), u = pe, i = Na(), f = Lt(), p = function(r, v, _, w, E) {
    return (0, u.computed)(function() {
      var V = E.value || // Default displayRender
      function(I) {
        var S = I.labels, T = w.value ? S.slice(-1) : S, A = " / ";
        return T.every(function(P) {
          return ["string", "number"].includes((0, t.default)(P));
        }) ? T.join(A) : T.reduce(function(P, g, s) {
          var o = (0, i.isValidElement)(g) ? (0, f.cloneElement)(g, {
            key: s
          }) : g;
          return s === 0 ? [o] : [].concat((0, e.default)(P), [A, o]);
        }, []);
      };
      return r.value.map(function(I) {
        var S = (0, b.toPathOptions)(I, v.value, _.value), T = V({
          labels: S.map(function(P) {
            var g, s = P.option, o = P.value;
            return (g = s == null ? void 0 : s[_.value.label]) !== null && g !== void 0 ? g : o;
          }),
          selectedOptions: S.map(function(P) {
            var g = P.option;
            return g;
          })
        }), A = (0, h.toPathKey)(I);
        return {
          label: T,
          value: A,
          key: A,
          valueCells: I
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
  var a = Pe;
  Object.defineProperty(pa, "__esModule", {
    value: !0
  }), pa.default = void 0;
  var e = a(wa()), t = Ca(), b = pe, h = Ka(), u = a(Mt()), i = function() {
    var p = (0, h.useBaseProps)(), d = (0, t.useInjectCascader)(), r = d.values, v = (0, u.default)([]), _ = (0, e.default)(v, 2), w = _[0], E = _[1];
    return (0, b.watch)(function() {
      return p.open;
    }, function() {
      if (p.open && !p.multiple) {
        var V = r.value[0];
        E(V || []);
      }
    }, {
      immediate: !0
    }), [w, E];
  };
  return pa.default = i, pa;
}
var ha = {}, ct;
function tr() {
  if (ct)
    return ha;
  ct = 1;
  var a = Pe;
  Object.defineProperty(ha, "__esModule", {
    value: !0
  }), ha.default = void 0;
  var e = a(Le()), t = pe, b = Ka(), h = a(qt()), u = Wa(), i = function(p, d, r, v, _, w) {
    var E = (0, b.useBaseProps)(), V = (0, t.computed)(function() {
      return E.direction === "rtl";
    }), I = [(0, t.ref)([]), (0, t.ref)(), (0, t.ref)([])], S = I[0], T = I[1], A = I[2];
    (0, t.watchEffect)(function() {
      for (var m = -1, l = d.value, n = [], C = [], O = v.value.length, x = function(J) {
        var $ = l.findIndex(function(M) {
          return M[r.value.value] === v.value[J];
        });
        if ($ === -1)
          return "break";
        m = $, n.push(m), C.push(v.value[J]), l = l[m][r.value.children];
      }, N = 0; N < O && l; N += 1) {
        var L = x(N);
        if (L === "break")
          break;
      }
      for (var D = d.value, y = 0; y < n.length - 1; y += 1)
        D = D[n[y]][r.value.children];
      var q = [C, m, D];
      S.value = q[0], T.value = q[1], A.value = q[2];
    });
    var P = function(l) {
      _(l);
    }, g = function(l) {
      var n = A.value.length, C = T.value;
      C === -1 && l < 0 && (C = n);
      for (var O = 0; O < n; O += 1) {
        C = (C + l + n) % n;
        var x = A.value[C];
        if (x && !x.disabled) {
          var N = x[r.value.value], L = S.value.slice(0, -1).concat(N);
          P(L);
          return;
        }
      }
    }, s = function() {
      if (S.value.length > 1) {
        var l = S.value.slice(0, -1);
        P(l);
      } else
        E.toggleOpen(!1);
    }, o = function() {
      var l, n = ((l = A.value[T.value]) === null || l === void 0 ? void 0 : l[r.value.children]) || [], C = n.find(function(x) {
        return !x.disabled;
      });
      if (C) {
        var O = [].concat((0, e.default)(S.value), [C[r.value.value]]);
        P(O);
      }
    };
    p.expose({
      // scrollTo: treeRef.current?.scrollTo,
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
            E.searchValue || s();
            break;
          }
          case h.default.ENTER: {
            if (S.value.length) {
              var O = A.value[T.value], x = (O == null ? void 0 : O[u.SEARCH_MARK]) || [];
              x.length ? w(x.map(function(N) {
                return N[r.value.value];
              }), x[x.length - 1]) : w(S.value, O);
            }
            break;
          }
          case h.default.ESC:
            E.toggleOpen(!1), open && l.stopPropagation();
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
  var a = Pe;
  Object.defineProperty(ka, "__esModule", {
    value: !0
  }), ka.default = h;
  var e = pe, t = a(ze()), b = Ca();
  function h(u) {
    var i, f = u.prefixCls, p = u.checked, d = u.halfChecked, r = u.disabled, v = u.onClick, _ = (0, b.useInjectCascader)(), w = _.customSlots, E = _.checkable, V = E.value !== !1 ? w.value.checkable : E.value, I = typeof V == "function" ? V() : typeof V == "boolean" ? null : V;
    return (0, e.createVNode)("span", {
      class: (i = {}, (0, t.default)(i, f, !0), (0, t.default)(i, "".concat(f, "-checked"), p), (0, t.default)(i, "".concat(f, "-indeterminate"), !p && d), (0, t.default)(i, "".concat(f, "-disabled"), r), i),
      onClick: v
    }, [I]);
  }
  return h.props = ["prefixCls", "checked", "halfChecked", "disabled", "onClick"], h.displayName = "Checkbox", h.inheritAttrs = !1, ka;
}
var vt;
function nr() {
  if (vt)
    return Ze;
  vt = 1;
  var a = Pe;
  Object.defineProperty(Ze, "__esModule", {
    value: !0
  }), Ze.FIX_LABEL = void 0, Ze.default = d;
  var e = pe, t = a(ze()), b = a(Le()), h = ea(), u = a(rr()), i = Wa(), f = Ca(), p = "__cascader_fix_label__";
  Ze.FIX_LABEL = p;
  function d(r) {
    var v, _, w, E, V, I, S = r.prefixCls, T = r.multiple, A = r.options, P = r.activeValue, g = r.prevValuePath, s = r.onToggleOpen, o = r.onSelect, m = r.onActive, l = r.checkedSet, n = r.halfCheckedSet, C = r.loadingKeys, O = r.isSelectable, x = "".concat(S, "-menu"), N = "".concat(S, "-menu-item"), L = (0, f.useInjectCascader)(), D = L.fieldNames, y = L.changeOnSelect, q = L.expandTrigger, W = L.expandIcon, J = L.loadingIcon, $ = L.dropdownMenuColumnStyle, M = L.customSlots, Q = (v = W.value) !== null && v !== void 0 ? v : (_ = (w = M.value).expandIcon) === null || _ === void 0 ? void 0 : _.call(w), ae = (E = J.value) !== null && E !== void 0 ? E : (V = (I = M.value).loadingIcon) === null || V === void 0 ? void 0 : V.call(I), F = q.value === "hover";
    return (0, e.createVNode)("ul", {
      class: x,
      role: "menu"
    }, [A.map(function(G) {
      var te, Y, oe = G.disabled, ce = G[i.SEARCH_MARK], se = (te = G[p]) !== null && te !== void 0 ? te : G[D.value.label], ve = G[D.value.value], ie = (0, h.isLeaf)(G, D.value), he = ce ? ce.map(function(H) {
        return H[D.value.value];
      }) : [].concat((0, b.default)(g), [ve]), le = (0, h.toPathKey)(he), ge = C.includes(le), j = l.has(le), B = n.has(le), re = function() {
        !oe && (!F || !ie) && m(he);
      }, ee = function() {
        O(G) && o(he, ie);
      }, de;
      return typeof G.title == "string" ? de = G.title : typeof se == "string" && (de = se), (0, e.createVNode)("li", {
        key: le,
        class: [N, (Y = {}, (0, t.default)(Y, "".concat(N, "-expand"), !ie), (0, t.default)(Y, "".concat(N, "-active"), P === ve), (0, t.default)(Y, "".concat(N, "-disabled"), oe), (0, t.default)(Y, "".concat(N, "-loading"), ge), Y)],
        style: $.value,
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
          F && re();
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
  var a = Pe, e = qe;
  Object.defineProperty(fa, "__esModule", {
    value: !0
  }), fa.default = void 0;
  var t = pe, b = a(Ve()), h = a(ze()), u = a(wa()), i = a(Le()), f = ea(), p = a(ar()), d = a(tr()), r = Da(), v = Ka(), _ = Ca(), w = V(nr());
  function E(S) {
    if (typeof WeakMap != "function")
      return null;
    var T = /* @__PURE__ */ new WeakMap(), A = /* @__PURE__ */ new WeakMap();
    return (E = function(g) {
      return g ? A : T;
    })(S);
  }
  function V(S, T) {
    if (!T && S && S.__esModule)
      return S;
    if (S === null || e(S) !== "object" && typeof S != "function")
      return { default: S };
    var A = E(T);
    if (A && A.has(S))
      return A.get(S);
    var P = {}, g = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var s in S)
      if (s !== "default" && Object.prototype.hasOwnProperty.call(S, s)) {
        var o = g ? Object.getOwnPropertyDescriptor(S, s) : null;
        o && (o.get || o.set) ? Object.defineProperty(P, s, o) : P[s] = S[s];
      }
    return P.default = S, A && A.set(S, P), P;
  }
  var I = (0, t.defineComponent)({
    compatConfig: {
      MODE: 3
    },
    name: "OptionList",
    inheritAttrs: !1,
    setup: function(T, A) {
      var P = A.attrs, g = A.slots, s = (0, v.useBaseProps)(), o = (0, t.ref)(), m = (0, t.computed)(function() {
        return s.direction === "rtl";
      }), l = (0, _.useInjectCascader)(), n = l.options, C = l.values, O = l.halfValues, x = l.fieldNames, N = l.changeOnSelect, L = l.onSelect, D = l.searchOptions, y = l.dropdownPrefixCls, q = l.loadData, W = l.expandTrigger, J = l.customSlots, $ = (0, t.computed)(function() {
        return y.value || s.prefixCls;
      }), M = (0, t.shallowRef)([]), Q = function(B) {
        if (!(!q.value || s.searchValue)) {
          var re = (0, r.toPathOptions)(B, n.value, x.value), ee = re.map(function(ne) {
            var ke = ne.option;
            return ke;
          }), de = ee[ee.length - 1];
          if (de && !(0, f.isLeaf)(de, x.value)) {
            var H = (0, f.toPathKey)(B);
            M.value = [].concat((0, i.default)(M.value), [H]), q.value(ee);
          }
        }
      };
      (0, t.watchEffect)(function() {
        M.value.length && M.value.forEach(function(j) {
          var B = (0, f.toPathValueStr)(j), re = (0, r.toPathOptions)(B, n.value, x.value, !0).map(function(de) {
            var H = de.option;
            return H;
          }), ee = re[re.length - 1];
          (!ee || ee[x.value.children] || (0, f.isLeaf)(ee, x.value)) && (M.value = M.value.filter(function(de) {
            return de !== j;
          }));
        });
      });
      var ae = (0, t.computed)(function() {
        return new Set((0, f.toPathKeys)(C.value));
      }), F = (0, t.computed)(function() {
        return new Set((0, f.toPathKeys)(O.value));
      }), G = (0, p.default)(), te = (0, u.default)(G, 2), Y = te[0], oe = te[1], ce = function(B) {
        oe(B), Q(B);
      }, se = function(B) {
        var re = B.disabled, ee = (0, f.isLeaf)(B, x.value);
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
            return Te[x.value.value] === ne;
          }), Ce = ke == null ? void 0 : ke[x.value.children];
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
        se(re) && ve(B, (0, f.isLeaf)(re, x.value), !0);
      };
      (0, d.default)(A, ie, x, Y, ce, le);
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
        var j, B, re, ee, de, H, ne, ke = s.notFoundContent, Ce = ke === void 0 ? ((j = g.notFoundContent) === null || j === void 0 ? void 0 : j.call(g)) || ((B = (re = J.value).notFoundContent) === null || B === void 0 ? void 0 : B.call(re)) : ke, Te = s.multiple, Fe = s.toggleOpen, Ae = !((ee = he.value[0]) !== null && ee !== void 0 && (de = ee.options) !== null && de !== void 0 && de.length), aa = [(H = {}, (0, h.default)(H, x.value.value, "__EMPTY__"), (0, h.default)(H, w.FIX_LABEL, Ce), (0, h.default)(H, "disabled", !0), H)], ta = (0, b.default)((0, b.default)({}, P), {}, {
          multiple: !Ae && Te,
          onSelect: ve,
          onActive: ce,
          onToggleOpen: Fe,
          checkedSet: ae.value,
          halfCheckedSet: F.value,
          loadingKeys: M.value,
          isSelectable: se
        }), $e = Ae ? [{
          options: aa
        }] : he.value, Xe = $e.map(function(ra, je) {
          var na = Y.value.slice(0, je), oa = Y.value[je];
          return (0, t.createVNode)(w.default, (0, b.default)((0, b.default)({
            key: je
          }, ta), {}, {
            prefixCls: $.value,
            options: ra.options,
            prevValuePath: na,
            activeValue: oa
          }), null);
        });
        return (0, t.createVNode)("div", {
          class: ["".concat($.value, "-menus"), (ne = {}, (0, h.default)(ne, "".concat($.value, "-menu-empty"), Ae), (0, h.default)(ne, "".concat($.value, "-rtl"), m.value), ne)],
          onMousedown: ge,
          ref: o
        }, [Xe]);
      };
    }
  });
  return fa.default = I, fa;
}
var Oa = {}, pt;
function lr() {
  if (pt)
    return Oa;
  pt = 1, Object.defineProperty(Oa, "__esModule", {
    value: !0
  }), Oa.default = e;
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
  return Oa;
}
var ht;
function ur() {
  return ht || (ht = 1, function(a) {
    var e = Pe;
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
    }), a.default = void 0, a.internalCascaderProps = O, a.multipleCascaderProps = C, a.singleCascaderProps = n;
    var t = pe, b = e(Le()), h = e(wa()), u = e(Ve()), i = It(), f = e(Ua()), p = e(Ba()), d = Na(), r = e(Tt()), v = e(Rt()), _ = ea(), w = e(Yt()), E = e(Jt()), V = e(Wa()), I = e(Qt()), S = Da(), T = Zt(), A = e(er()), P = Ca(), g = e(or()), s = Ka(), o = e(mt()), m = e(lr());
    function l() {
      return (0, u.default)((0, u.default)({}, (0, f.default)((0, i.baseSelectPropsWithoutPrivate)(), ["tokenSeparators", "mode", "showSearch"])), {}, {
        // MISC
        id: String,
        prefixCls: String,
        fieldNames: Object,
        children: Array,
        // Value
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
        // Search
        showSearch: {
          type: [Boolean, Object],
          default: void 0
        },
        searchValue: String,
        onSearch: Function,
        // Trigger
        expandTrigger: String,
        // Options
        options: Array,
        /** @private Internal usage. Do not use in your production. */
        dropdownPrefixCls: String,
        loadData: Function,
        // Open
        /** @deprecated Use `open` instead */
        popupVisible: {
          type: Boolean,
          default: void 0
        },
        /** @deprecated Use `dropdownClassName` instead */
        popupClassName: String,
        dropdownClassName: String,
        dropdownMenuColumnStyle: {
          type: Object,
          default: void 0
        },
        /** @deprecated Use `dropdownStyle` instead */
        popupStyle: {
          type: Object,
          default: void 0
        },
        dropdownStyle: {
          type: Object,
          default: void 0
        },
        /** @deprecated Use `placement` instead */
        popupPlacement: String,
        placement: String,
        /** @deprecated Use `onDropdownVisibleChange` instead */
        onPopupVisibleChange: Function,
        onDropdownVisibleChange: Function,
        // Icon
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
    function O() {
      return (0, u.default)((0, u.default)({}, l()), {}, {
        onChange: Function,
        customSlots: Object
      });
    }
    function x(D) {
      return Array.isArray(D) && Array.isArray(D[0]);
    }
    function N(D) {
      return D ? x(D) ? D : (D.length === 0 ? [] : [D]).map(function(y) {
        return Array.isArray(y) ? y : [y];
      }) : [];
    }
    var L = (0, t.defineComponent)({
      compatConfig: {
        MODE: 3
      },
      name: "Cascader",
      inheritAttrs: !1,
      props: (0, d.initDefaultProps)(O(), {}),
      setup: function(y, q) {
        var W = q.attrs, J = q.expose, $ = q.slots, M = (0, r.default)((0, t.toRef)(y, "id")), Q = (0, t.computed)(function() {
          return !!y.checkable;
        }), ae = (0, v.default)(y.defaultValue, {
          value: (0, t.computed)(function() {
            return y.value;
          }),
          postState: N
        }), F = (0, h.default)(ae, 2), G = F[0], te = F[1], Y = (0, t.computed)(function() {
          return (0, _.fillFieldNames)(y.fieldNames);
        }), oe = (0, t.computed)(function() {
          return y.options || [];
        }), ce = (0, w.default)(oe, Y), se = function(R) {
          var U = ce.value;
          return R.map(function(Z) {
            var ye = U[Z].nodes;
            return ye.map(function(ue) {
              return ue[Y.value.value];
            });
          });
        }, ve = (0, v.default)("", {
          value: (0, t.computed)(function() {
            return y.searchValue;
          }),
          postState: function(R) {
            return R || "";
          }
        }), ie = (0, h.default)(ve, 2), he = ie[0], le = ie[1], ge = function(R, U) {
          le(R), U.source !== "blur" && y.onSearch && y.onSearch(R);
        }, j = (0, E.default)((0, t.toRef)(y, "showSearch")), B = j.showSearch, re = j.searchConfig, ee = (0, V.default)(he, oe, Y, (0, t.computed)(function() {
          return y.dropdownPrefixCls || y.prefixCls;
        }), re, (0, t.toRef)(y, "changeOnSelect")), de = (0, I.default)(oe, Y, G), H = [(0, t.ref)([]), (0, t.ref)([]), (0, t.ref)([])], ne = H[0], ke = H[1], Ce = H[2], Te = (0, m.default)(ce), Fe = Te.maxLevel, Ae = Te.levelEntities;
        (0, t.watchEffect)(function() {
          var X = (0, h.default)(de.value, 2), R = X[0], U = X[1];
          if (!Q.value || !G.value.length) {
            var Z = [R, [], U];
            ne.value = Z[0], ke.value = Z[1], Ce.value = Z[2];
            return;
          }
          var ye = (0, _.toPathKeys)(R), ue = ce.value, _e = (0, T.conductCheck)(ye, !0, ue, Fe.value, Ae.value), me = _e.checkedKeys, fe = _e.halfCheckedKeys, Ne = [se(me), se(fe), U];
          ne.value = Ne[0], ke.value = Ne[1], Ce.value = Ne[2];
        });
        var aa = (0, t.computed)(function() {
          var X = (0, _.toPathKeys)(ne.value), R = (0, S.formatStrategyValues)(X, ce.value, y.showCheckedStrategy);
          return [].concat((0, b.default)(Ce.value), (0, b.default)(se(R)));
        }), ta = (0, A.default)(aa, oe, Y, Q, (0, t.toRef)(y, "displayRender")), $e = function(R) {
          if (te(R), y.onChange) {
            var U = N(R), Z = U.map(function(_e) {
              return (0, S.toPathOptions)(_e, oe.value, Y.value).map(function(me) {
                return me.option;
              });
            }), ye = Q.value ? U : U[0], ue = Q.value ? Z : Z[0];
            y.onChange(ye, ue);
          }
        }, Xe = function(R) {
          if (le(""), !Q.value)
            $e(R);
          else {
            var U = (0, _.toPathKey)(R), Z = (0, _.toPathKeys)(ne.value), ye = (0, _.toPathKeys)(ke.value), ue = Z.includes(U), _e = Ce.value.some(function(Oe) {
              return (0, _.toPathKey)(Oe) === U;
            }), me = ne.value, fe = Ce.value;
            if (_e && !ue)
              fe = Ce.value.filter(function(Oe) {
                return (0, _.toPathKey)(Oe) !== U;
              });
            else {
              var Ne = ue ? Z.filter(function(Oe) {
                return Oe !== U;
              }) : [].concat((0, b.default)(Z), [U]), Be;
              if (ue) {
                var Ye = (0, T.conductCheck)(Ne, {
                  checked: !1,
                  halfCheckedKeys: ye
                }, ce.value, Fe.value, Ae.value);
                Be = Ye.checkedKeys;
              } else {
                var Ue = (0, T.conductCheck)(Ne, !0, ce.value, Fe.value, Ae.value);
                Be = Ue.checkedKeys;
              }
              var We = (0, S.formatStrategyValues)(Be, ce.value, y.showCheckedStrategy);
              me = se(We);
            }
            $e([].concat((0, b.default)(fe), (0, b.default)(me)));
          }
        }, ra = function(R, U) {
          if (U.type === "clear") {
            $e([]);
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
        }), Ea = (0, t.computed)(function() {
          return y.placement || y.popupPlacement;
        }), Ia = function(R) {
          var U, Z;
          (U = y.onDropdownVisibleChange) === null || U === void 0 || U.call(y, R), (Z = y.onPopupVisibleChange) === null || Z === void 0 || Z.call(y, R);
        }, De = (0, t.toRefs)(y), Ta = De.changeOnSelect, _a = De.checkable, Aa = De.dropdownPrefixCls, Ra = De.loadData, ba = De.expandTrigger, Va = De.expandIcon, La = De.loadingIcon, K = De.dropdownMenuColumnStyle, c = De.customSlots;
        (0, P.useProvideCascader)({
          options: oe,
          fieldNames: Y,
          values: ne,
          halfValues: ke,
          changeOnSelect: Ta,
          onSelect: Xe,
          checkable: _a,
          searchOptions: ee,
          dropdownPrefixCls: Aa,
          loadData: Ra,
          expandTrigger: ba,
          expandIcon: Va,
          loadingIcon: La,
          dropdownMenuColumnStyle: K,
          customSlots: c
        });
        var k = (0, t.ref)();
        J({
          focus: function() {
            var R;
            (R = k.value) === null || R === void 0 || R.focus();
          },
          blur: function() {
            var R;
            (R = k.value) === null || R === void 0 || R.blur();
          },
          scrollTo: function(R) {
            var U;
            (U = k.value) === null || U === void 0 || U.scrollTo(R);
          }
        });
        var z = (0, t.computed)(function() {
          return (0, f.default)(y, [
            "id",
            "prefixCls",
            "fieldNames",
            // Value
            "defaultValue",
            "value",
            "changeOnSelect",
            "onChange",
            "displayRender",
            "checkable",
            // Search
            "searchValue",
            "onSearch",
            "showSearch",
            // Trigger
            "expandTrigger",
            // Options
            "options",
            "dropdownPrefixCls",
            "loadData",
            // Open
            "popupVisible",
            "open",
            "popupClassName",
            "dropdownClassName",
            "dropdownMenuColumnStyle",
            "popupPlacement",
            "placement",
            "onDropdownVisibleChange",
            "onPopupVisibleChange",
            // Icon
            "expandIcon",
            "loadingIcon",
            "customSlots",
            "showCheckedStrategy",
            // Children
            "children"
          ]);
        });
        return function() {
          var X = !(he.value ? ee.value : oe.value).length, R = y.dropdownMatchSelectWidth, U = R === void 0 ? !1 : R, Z = (
            // Search to match width
            he.value && re.value.matchInputWidth || // Empty keep the width
            X ? {} : {
              minWidth: "auto"
            }
          );
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
            placement: Ea.value,
            onDropdownVisibleChange: Ia,
            getRawInputElement: function() {
              var ue;
              return (ue = $.default) === null || ue === void 0 ? void 0 : ue.call($);
            }
          }), $);
        };
      }
    });
    a.default = L;
  }($a)), $a;
}
var gt;
function ir() {
  return gt || (gt = 1, function(a) {
    var e = qe;
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
  }(Fa)), Fa;
}
var we = Pe, dr = qe;
Object.defineProperty(ma, "__esModule", {
  value: !0
});
var cr = ma.cascaderProps = kt, _t = ma.default = void 0, Se = pe, sr = we(xa()), ga = we(ze()), Ie = we(Ve()), bt = we(qe), vr = we(Le()), St = xr(ir()), fr = we(Ft()), pr = we(Nt()), hr = we($t()), gr = we(At()), yr = Kt(), mr = we(Ua()), Cr = we(Ba()), _r = Na(), br = we(Dt()), Sr = we(yt()), Pr = we(mt()), ja = Et(), kr = jt(), Or = ["notFoundContent", "expandIcon", "multiple", "bordered", "allowClear", "choiceTransitionName", "transitionName", "id"];
function Pt(a) {
  if (typeof WeakMap != "function")
    return null;
  var e = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ new WeakMap();
  return (Pt = function(h) {
    return h ? t : e;
  })(a);
}
function xr(a, e) {
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
  return (0, Ie.default)((0, Ie.default)({}, (0, mr.default)((0, St.cascaderProps)(), ["customSlots", "checkable", "options"])), {}, {
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
    var b = t.attrs, h = t.expose, u = t.slots, i = t.emit, f = (0, kr.useInjectFormItemContext)(), p = (0, br.default)("cascader", e), d = p.prefixCls, r = p.rootPrefixCls, v = p.getPrefixCls, _ = p.direction, w = p.getPopupContainer, E = p.renderEmpty, V = p.size, I = (0, Se.computed)(function() {
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
      return (0, bt.default)(e.showSearch) === "object" && (l = (0, Ie.default)((0, Ie.default)({}, l), e.showSearch)), l;
    }), A = (0, Se.computed)(function() {
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
      for (var n = arguments.length, C = new Array(n), O = 0; O < n; O++)
        C[O] = arguments[O];
      i("update:value", C[0]), i.apply(void 0, ["change"].concat(C)), f.onFieldChange();
    }, s = function() {
      for (var n = arguments.length, C = new Array(n), O = 0; O < n; O++)
        C[O] = arguments[O];
      i.apply(void 0, ["blur"].concat(C)), f.onFieldBlur();
    }, o = (0, Se.computed)(function() {
      return e.showArrow !== void 0 ? e.showArrow : e.loading || !e.multiple;
    }), m = (0, Se.computed)(function() {
      return e.placement !== void 0 ? e.placement : _.value === "rtl" ? "bottomRight" : "bottomLeft";
    });
    return function() {
      var l, n, C, O = e.notFoundContent, x = O === void 0 ? (l = u.notFoundContent) === null || l === void 0 ? void 0 : l.call(u) : O, N = e.expandIcon, L = N === void 0 ? (n = u.expandIcon) === null || n === void 0 ? void 0 : n.call(u) : N, D = e.multiple, y = e.bordered, q = e.allowClear, W = e.choiceTransitionName, J = e.transitionName, $ = e.id, M = $ === void 0 ? f.id.value : $, Q = (0, sr.default)(e, Or), ae = x || E.value("Cascader"), F = L;
      L || (F = S.value ? (0, Se.createVNode)(hr.default, null, null) : (0, Se.createVNode)(fr.default, null, null));
      var G = (0, Se.createVNode)("span", {
        class: "".concat(I.value, "-menu-item-loading-icon")
      }, [(0, Se.createVNode)(pr.default, {
        spin: !0
      }, null)]), te = (0, gr.default)((0, Ie.default)((0, Ie.default)({}, e), {}, {
        multiple: D,
        prefixCls: I.value,
        showArrow: o.value
      }), u), Y = te.suffixIcon, oe = te.removeIcon, ce = te.clearIcon;
      return (0, Se.createVNode)(St.default, (0, Ie.default)((0, Ie.default)((0, Ie.default)({}, Q), b), {}, {
        id: M,
        prefixCls: I.value,
        class: [d.value, (C = {}, (0, ga.default)(C, "".concat(I.value, "-lg"), V.value === "large"), (0, ga.default)(C, "".concat(I.value, "-sm"), V.value === "small"), (0, ga.default)(C, "".concat(I.value, "-rtl"), S.value), (0, ga.default)(C, "".concat(I.value, "-borderless"), !y), C), b.class],
        direction: _.value,
        placement: m.value,
        notFoundContent: ae,
        allowClear: q,
        showSearch: T.value,
        expandIcon: F,
        inputIcon: Y,
        removeIcon: oe,
        clearIcon: ce,
        loadingIcon: G,
        checkable: !!D,
        dropdownClassName: A.value,
        dropdownPrefixCls: d.value,
        choiceTransitionName: (0, ja.getTransitionName)(r.value, "", W),
        transitionName: (0, ja.getTransitionName)(r.value, (0, ja.getTransitionDirection)(m.value), J),
        getPopupContainer: w.value,
        customSlots: (0, Ie.default)((0, Ie.default)({}, u), {}, {
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
const Br = /* @__PURE__ */ Bt({
  __proto__: null,
  cascaderProps: cr,
  get default() {
    return _t;
  }
}, [ma]);
export {
  Br as i
};
