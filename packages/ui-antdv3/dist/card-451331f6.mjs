import { defineComponent as Ae, h as Oe, renderSlot as pe } from "vue";
import { g as Be } from "./index-5fc6c346.mjs";
import { a as z, j as ye, c as ge, p as Re, f as F, l as Ie, i as B, g as H } from "./useConfigInject-f0dbb416.mjs";
import { t as Ke } from "./index-0611b8fe.mjs";
import { r as Ue } from "./index-3f2c855e.mjs";
import { c as ke } from "./index-ba221574.mjs";
import "./raf-09a8b76f.mjs";
import "./KeyCode-8a26b842.mjs";
import "./shallowequal-01dcd160.mjs";
import "./index-d3f861e4.mjs";
import "./Portal-f8d09ab1.mjs";
import "./vnode-1aa65f32.mjs";
import "./ResizeObserver.es-aa1c2e0c.mjs";
import "./_flatRest-18b83366.mjs";
import "./index-a26e140f.mjs";
import "./index-292db55b.mjs";
import "./index-696fd4ee.mjs";
import "./colors-049dd05b.mjs";
import "./firstNotUndefined-ac7713f5.mjs";
import "./collapseMotion-0fff0c33.mjs";
import "./useState-d62b7544.mjs";
import "./useRefs-07d4d46d.mjs";
import "./isMobile-1112823b.mjs";
import "./useMergedState-dbb38782.mjs";
import "./omit-d14a337a.mjs";
import "./index-53911fa5.mjs";
import "./Col-6a21d416.mjs";
import "./useFlexGapSupport-a4f1c6a3.mjs";
var Ce = {}, C = {}, _e;
function We() {
  if (_e)
    return C;
  _e = 1;
  var a = B;
  Object.defineProperty(C, "__esModule", {
    value: !0
  }), C.default = C.cardProps = void 0;
  var e = H, t = a(z()), u = a(Ke), n = a(Ue), d = a(ke), o = a(ye()), s = ge(), S = a(Re()), y = a(F()), T = a(Ie()), g = u.default.TabPane, V = function() {
    return {
      prefixCls: String,
      title: o.default.any,
      extra: o.default.any,
      bordered: {
        type: Boolean,
        default: !0
      },
      bodyStyle: {
        type: Object,
        default: void 0
      },
      headStyle: {
        type: Object,
        default: void 0
      },
      loading: {
        type: Boolean,
        default: !1
      },
      hoverable: {
        type: Boolean,
        default: !1
      },
      type: {
        type: String
      },
      size: {
        type: String
      },
      actions: o.default.any,
      tabList: {
        type: Array
      },
      tabBarExtraContent: o.default.any,
      activeTabKey: String,
      defaultActiveTabKey: String,
      cover: o.default.any,
      onTabChange: {
        type: Function
      }
    };
  };
  C.cardProps = V;
  var c = (0, e.defineComponent)({
    compatConfig: {
      MODE: 3
    },
    name: "ACard",
    props: V(),
    slots: ["title", "extra", "tabBarExtraContent", "actions", "cover", "customTab"],
    setup: function(r, M) {
      var i = M.slots, P = (0, y.default)("card", r), G = P.prefixCls, I = P.direction, J = P.size, he = function(m) {
        var v = m.map(function(p, j) {
          return (0, e.isVNode)(p) && !(0, s.isEmptyElement)(p) || !(0, e.isVNode)(p) ? (0, e.createVNode)("li", {
            style: {
              width: "".concat(100 / m.length, "%")
            },
            key: "action-".concat(j)
          }, [(0, e.createVNode)("span", null, [p])]) : null;
        });
        return v;
      }, Ne = function(m) {
        var v;
        (v = r.onTabChange) === null || v === void 0 || v.call(r, m);
      }, Ve = function() {
        var m = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], v;
        return m.forEach(function(p) {
          p && (0, S.default)(p.type) && p.type.__ANT_CARD_GRID && (v = !0);
        }), v;
      };
      return function() {
        var x, m, v, p, j, K, _, D, Q = r.headStyle, Pe = Q === void 0 ? {} : Q, X = r.bodyStyle, U = X === void 0 ? {} : X, Y = r.loading, Z = r.bordered, xe = Z === void 0 ? !0 : Z, ee = r.type, E = r.tabList, Se = r.hoverable, te = r.activeTabKey, Te = r.defaultActiveTabKey, ae = r.tabBarExtraContent, re = ae === void 0 ? (0, s.filterEmptyWithUndefined)((x = i.tabBarExtraContent) === null || x === void 0 ? void 0 : x.call(i)) : ae, ne = r.title, k = ne === void 0 ? (0, s.filterEmptyWithUndefined)((m = i.title) === null || m === void 0 ? void 0 : m.call(i)) : ne, de = r.extra, W = de === void 0 ? (0, s.filterEmptyWithUndefined)((v = i.extra) === null || v === void 0 ? void 0 : v.call(i)) : de, oe = r.actions, L = oe === void 0 ? (0, s.filterEmptyWithUndefined)((p = i.actions) === null || p === void 0 ? void 0 : p.call(i)) : oe, le = r.cover, ue = le === void 0 ? (0, s.filterEmptyWithUndefined)((j = i.cover) === null || j === void 0 ? void 0 : j.call(i)) : le, A = (0, s.flattenChildren)((K = i.default) === null || K === void 0 ? void 0 : K.call(i)), l = G.value, je = (_ = {}, (0, t.default)(_, "".concat(l), !0), (0, t.default)(_, "".concat(l, "-loading"), Y), (0, t.default)(_, "".concat(l, "-bordered"), xe), (0, t.default)(_, "".concat(l, "-hoverable"), !!Se), (0, t.default)(_, "".concat(l, "-contain-grid"), Ve(A)), (0, t.default)(_, "".concat(l, "-contain-tabs"), E && E.length), (0, t.default)(_, "".concat(l, "-").concat(J.value), J.value), (0, t.default)(_, "".concat(l, "-type-").concat(ee), !!ee), (0, t.default)(_, "".concat(l, "-rtl"), I.value === "rtl"), _), De = U.padding === 0 || U.padding === "0px" ? {
          padding: "24px"
        } : void 0, b = (0, e.createVNode)("div", {
          class: "".concat(l, "-loading-block")
        }, null), Ee = (0, e.createVNode)("div", {
          class: "".concat(l, "-loading-content"),
          style: De
        }, [(0, e.createVNode)(n.default, {
          gutter: 8
        }, {
          default: function() {
            return [(0, e.createVNode)(d.default, {
              span: 22
            }, {
              default: function() {
                return [b];
              }
            })];
          }
        }), (0, e.createVNode)(n.default, {
          gutter: 8
        }, {
          default: function() {
            return [(0, e.createVNode)(d.default, {
              span: 8
            }, {
              default: function() {
                return [b];
              }
            }), (0, e.createVNode)(d.default, {
              span: 15
            }, {
              default: function() {
                return [b];
              }
            })];
          }
        }), (0, e.createVNode)(n.default, {
          gutter: 8
        }, {
          default: function() {
            return [(0, e.createVNode)(d.default, {
              span: 6
            }, {
              default: function() {
                return [b];
              }
            }), (0, e.createVNode)(d.default, {
              span: 18
            }, {
              default: function() {
                return [b];
              }
            })];
          }
        }), (0, e.createVNode)(n.default, {
          gutter: 8
        }, {
          default: function() {
            return [(0, e.createVNode)(d.default, {
              span: 13
            }, {
              default: function() {
                return [b];
              }
            }), (0, e.createVNode)(d.default, {
              span: 9
            }, {
              default: function() {
                return [b];
              }
            })];
          }
        }), (0, e.createVNode)(n.default, {
          gutter: 8
        }, {
          default: function() {
            return [(0, e.createVNode)(d.default, {
              span: 4
            }, {
              default: function() {
                return [b];
              }
            }), (0, e.createVNode)(d.default, {
              span: 3
            }, {
              default: function() {
                return [b];
              }
            }), (0, e.createVNode)(d.default, {
              span: 16
            }, {
              default: function() {
                return [b];
              }
            })];
          }
        })]), ie = te !== void 0, $e = (D = {
          size: "large"
        }, (0, t.default)(D, ie ? "activeKey" : "defaultActiveKey", ie ? te : Te), (0, t.default)(D, "onChange", Ne), (0, t.default)(D, "class", "".concat(l, "-head-tabs")), D), ce, fe = E && E.length ? (0, e.createVNode)(u.default, $e, {
          default: function() {
            return [E.map(function(f) {
              var se = f.tab, O = f.slots, ve = O == null ? void 0 : O.tab;
              (0, T.default)(!O, "Card", "tabList slots is deprecated, Please use `customTab` instead.");
              var w = se !== void 0 ? se : i[ve] ? i[ve](f) : null;
              return w = (0, e.renderSlot)(i, "customTab", f, function() {
                return [w];
              }), (0, e.createVNode)(g, {
                tab: w,
                key: f.key,
                disabled: f.disabled
              }, null);
            })];
          },
          rightExtra: re ? function() {
            return re;
          } : null
        }) : null;
        (k || W || fe) && (ce = (0, e.createVNode)("div", {
          class: "".concat(l, "-head"),
          style: Pe
        }, [(0, e.createVNode)("div", {
          class: "".concat(l, "-head-wrapper")
        }, [k && (0, e.createVNode)("div", {
          class: "".concat(l, "-head-title")
        }, [k]), W && (0, e.createVNode)("div", {
          class: "".concat(l, "-extra")
        }, [W])]), fe]));
        var qe = ue ? (0, e.createVNode)("div", {
          class: "".concat(l, "-cover")
        }, [ue]) : null, Me = (0, e.createVNode)("div", {
          class: "".concat(l, "-body"),
          style: U
        }, [Y ? Ee : A]), Ge = L && L.length ? (0, e.createVNode)("ul", {
          class: "".concat(l, "-actions")
        }, [he(L)]) : null;
        return (0, e.createVNode)("div", {
          class: je,
          ref: "cardContainerRef"
        }, [ce, qe, A && A.length ? Me : null, Ge]);
      };
    }
  }), R = c;
  return C.default = R, C;
}
var h = {}, me;
function Le() {
  if (me)
    return h;
  me = 1;
  var a = B;
  Object.defineProperty(h, "__esModule", {
    value: !0
  }), h.default = h.cardMetaProps = void 0;
  var e = H, t = a(z()), u = a(ye()), n = ge(), d = a(F()), o = function() {
    return {
      prefixCls: String,
      title: u.default.any,
      description: u.default.any,
      avatar: u.default.any
    };
  };
  h.cardMetaProps = o;
  var s = (0, e.defineComponent)({
    compatConfig: {
      MODE: 3
    },
    name: "ACardMeta",
    props: o(),
    slots: ["title", "description", "avatar"],
    setup: function(y, T) {
      var g = T.slots, V = (0, d.default)("card", y), c = V.prefixCls;
      return function() {
        var R = (0, t.default)({}, "".concat(c.value, "-meta"), !0), q = (0, n.getPropsSlot)(g, y, "avatar"), r = (0, n.getPropsSlot)(g, y, "title"), M = (0, n.getPropsSlot)(g, y, "description"), i = q ? (0, e.createVNode)("div", {
          class: "".concat(c.value, "-meta-avatar")
        }, [q]) : null, P = r ? (0, e.createVNode)("div", {
          class: "".concat(c.value, "-meta-title")
        }, [r]) : null, G = M ? (0, e.createVNode)("div", {
          class: "".concat(c.value, "-meta-description")
        }, [M]) : null, I = P || G ? (0, e.createVNode)("div", {
          class: "".concat(c.value, "-meta-detail")
        }, [P, G]) : null;
        return (0, e.createVNode)("div", {
          class: R
        }, [i, I]);
      };
    }
  });
  return h.default = s, h;
}
var N = {}, be;
function we() {
  if (be)
    return N;
  be = 1;
  var a = B;
  Object.defineProperty(N, "__esModule", {
    value: !0
  }), N.default = N.cardGridProps = void 0;
  var e = H, t = a(z()), u = a(F()), n = function() {
    return {
      prefixCls: String,
      hoverable: {
        type: Boolean,
        default: !0
      }
    };
  };
  N.cardGridProps = n;
  var d = (0, e.defineComponent)({
    compatConfig: {
      MODE: 3
    },
    name: "ACardGrid",
    __ANT_CARD_GRID: !0,
    props: n(),
    setup: function(s, S) {
      var y = S.slots, T = (0, u.default)("card", s), g = T.prefixCls, V = (0, e.computed)(function() {
        var c;
        return c = {}, (0, t.default)(c, "".concat(g.value, "-grid"), !0), (0, t.default)(c, "".concat(g.value, "-grid-hoverable"), s.hoverable), c;
      });
      return function() {
        var c;
        return (0, e.createVNode)("div", {
          class: V.value
        }, [(c = y.default) === null || c === void 0 ? void 0 : c.call(y)]);
      };
    }
  });
  return N.default = d, N;
}
(function(a) {
  var e = B;
  Object.defineProperty(a, "__esModule", {
    value: !0
  }), Object.defineProperty(a, "CardGrid", {
    enumerable: !0,
    get: function() {
      return n.default;
    }
  }), Object.defineProperty(a, "CardMeta", {
    enumerable: !0,
    get: function() {
      return u.default;
    }
  }), a.default = void 0;
  var t = e(We()), u = e(Le()), n = e(we());
  t.default.Meta = u.default, t.default.Grid = n.default, t.default.install = function(o) {
    return o.component(t.default.name, t.default), o.component(u.default.name, u.default), o.component(n.default.name, n.default), o;
  };
  var d = t.default;
  a.default = d;
})(Ce);
const ze = /* @__PURE__ */ Be(Ce), ht = Ae({
  props: {
    record: {
      type: Object,
      require: !0,
      default: () => ({})
    }
  },
  setup(a, { attrs: e, slots: t }) {
    return () => {
      var d;
      const u = {
        ...a.record,
        title: ((d = a.record) == null ? void 0 : d.label) ?? ""
      }, n = u.children ?? [];
      return delete u.children, Oe(ze, u, {
        default: () => pe(
          t,
          "edit-node",
          {},
          () => n.map(
            (o) => pe(t, "node", { record: o })
          )
        )
      });
    };
  }
});
export {
  ht as default
};
