import { defineComponent as Ge, h as Oe, renderSlot as pe } from "vue";
import { a as Be } from "./_commonjsHelpers.da91e947.js";
import { r as z, e as be, s as ge, L as Re, i as F, w as Ie, k as B } from "./useConfigInject.fdc04e2e.js";
import { r as H } from "./_vue_commonjs-external.cdc460b2.js";
import { t as Ke } from "./index.05f71c48.js";
import { r as Ue } from "./index.bfca5ebd.js";
import { c as ke } from "./index.d3f2de21.js";
import "./index.1fa3133f.js";
import "./index.1e43ecc1.js";
import "./raf.f4e1fc4f.js";
import "./KeyCode.93922cee.js";
import "./shallowequal.ae22630f.js";
import "./useMergedState.94fe30d0.js";
import "./Portal.a423630d.js";
import "./vnode.716a0aad.js";
import "./ResizeObserver.es.f11dbe23.js";
import "./_flatRest.969e6721.js";
import "./index.8a2670ef.js";
import "./index.704db3ff.js";
import "./useRefs.8c7f5dd6.js";
import "./colors.6e77f922.js";
import "./firstNotUndefined.4390bc7f.js";
import "./collapseMotion.7799b65c.js";
import "./useState.0fa93a30.js";
import "./isMobile.73c6cf20.js";
import "./omit.ba8a174d.js";
import "./index.da9ce20f.js";
import "./Col.c9fdc545.js";
import "./styleChecker.856616fa.js";
var Ce = {}, C = {}, _e;
function We() {
  if (_e)
    return C;
  _e = 1;
  var a = B.exports;
  Object.defineProperty(C, "__esModule", {
    value: !0
  }), C.default = C.cardProps = void 0;
  var e = H, t = a(z()), l = a(Ke), n = a(Ue), d = a(ke), i = a(be()), s = ge(), S = a(Re()), b = a(F()), T = a(Ie()), g = l.default.TabPane, V = function() {
    return {
      prefixCls: String,
      title: i.default.any,
      extra: i.default.any,
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
      actions: i.default.any,
      tabList: {
        type: Array
      },
      tabBarExtraContent: i.default.any,
      activeTabKey: String,
      defaultActiveTabKey: String,
      cover: i.default.any,
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
    setup: function(r, $) {
      var u = $.slots, P = (0, b.default)("card", r), A = P.prefixCls, I = P.direction, J = P.size, he = function(m) {
        var v = m.map(function(p, D) {
          return (0, e.isVNode)(p) && !(0, s.isEmptyElement)(p) || !(0, e.isVNode)(p) ? (0, e.createVNode)("li", {
            style: {
              width: "".concat(100 / m.length, "%")
            },
            key: "action-".concat(D)
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
        var x, m, v, p, D, K, _, j, Q = r.headStyle, Pe = Q === void 0 ? {} : Q, X = r.bodyStyle, U = X === void 0 ? {} : X, Y = r.loading, Z = r.bordered, xe = Z === void 0 ? !0 : Z, ee = r.type, E = r.tabList, Se = r.hoverable, te = r.activeTabKey, Te = r.defaultActiveTabKey, ae = r.tabBarExtraContent, re = ae === void 0 ? (0, s.filterEmptyWithUndefined)((x = u.tabBarExtraContent) === null || x === void 0 ? void 0 : x.call(u)) : ae, ne = r.title, k = ne === void 0 ? (0, s.filterEmptyWithUndefined)((m = u.title) === null || m === void 0 ? void 0 : m.call(u)) : ne, oe = r.extra, W = oe === void 0 ? (0, s.filterEmptyWithUndefined)((v = u.extra) === null || v === void 0 ? void 0 : v.call(u)) : oe, de = r.actions, L = de === void 0 ? (0, s.filterEmptyWithUndefined)((p = u.actions) === null || p === void 0 ? void 0 : p.call(u)) : de, le = r.cover, ie = le === void 0 ? (0, s.filterEmptyWithUndefined)((D = u.cover) === null || D === void 0 ? void 0 : D.call(u)) : le, G = (0, s.flattenChildren)((K = u.default) === null || K === void 0 ? void 0 : K.call(u)), o = A.value, De = (_ = {}, (0, t.default)(_, "".concat(o), !0), (0, t.default)(_, "".concat(o, "-loading"), Y), (0, t.default)(_, "".concat(o, "-bordered"), xe), (0, t.default)(_, "".concat(o, "-hoverable"), !!Se), (0, t.default)(_, "".concat(o, "-contain-grid"), Ve(G)), (0, t.default)(_, "".concat(o, "-contain-tabs"), E && E.length), (0, t.default)(_, "".concat(o, "-").concat(J.value), J.value), (0, t.default)(_, "".concat(o, "-type-").concat(ee), !!ee), (0, t.default)(_, "".concat(o, "-rtl"), I.value === "rtl"), _), je = U.padding === 0 || U.padding === "0px" ? {
          padding: "24px"
        } : void 0, y = (0, e.createVNode)("div", {
          class: "".concat(o, "-loading-block")
        }, null), Ee = (0, e.createVNode)("div", {
          class: "".concat(o, "-loading-content"),
          style: je
        }, [(0, e.createVNode)(n.default, {
          gutter: 8
        }, {
          default: function() {
            return [(0, e.createVNode)(d.default, {
              span: 22
            }, {
              default: function() {
                return [y];
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
                return [y];
              }
            }), (0, e.createVNode)(d.default, {
              span: 15
            }, {
              default: function() {
                return [y];
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
                return [y];
              }
            }), (0, e.createVNode)(d.default, {
              span: 18
            }, {
              default: function() {
                return [y];
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
                return [y];
              }
            }), (0, e.createVNode)(d.default, {
              span: 9
            }, {
              default: function() {
                return [y];
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
                return [y];
              }
            }), (0, e.createVNode)(d.default, {
              span: 3
            }, {
              default: function() {
                return [y];
              }
            }), (0, e.createVNode)(d.default, {
              span: 16
            }, {
              default: function() {
                return [y];
              }
            })];
          }
        })]), ue = te !== void 0, qe = (j = {
          size: "large"
        }, (0, t.default)(j, ue ? "activeKey" : "defaultActiveKey", ue ? te : Te), (0, t.default)(j, "onChange", Ne), (0, t.default)(j, "class", "".concat(o, "-head-tabs")), j), ce, fe = E && E.length ? (0, e.createVNode)(l.default, qe, {
          default: function() {
            return [E.map(function(f) {
              var se = f.tab, O = f.slots, ve = O == null ? void 0 : O.tab;
              (0, T.default)(!O, "Card", "tabList slots is deprecated, Please use `customTab` instead.");
              var w = se !== void 0 ? se : u[ve] ? u[ve](f) : null;
              return w = (0, e.renderSlot)(u, "customTab", f, function() {
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
          class: "".concat(o, "-head"),
          style: Pe
        }, [(0, e.createVNode)("div", {
          class: "".concat(o, "-head-wrapper")
        }, [k && (0, e.createVNode)("div", {
          class: "".concat(o, "-head-title")
        }, [k]), W && (0, e.createVNode)("div", {
          class: "".concat(o, "-extra")
        }, [W])]), fe]));
        var Me = ie ? (0, e.createVNode)("div", {
          class: "".concat(o, "-cover")
        }, [ie]) : null, $e = (0, e.createVNode)("div", {
          class: "".concat(o, "-body"),
          style: U
        }, [Y ? Ee : G]), Ae = L && L.length ? (0, e.createVNode)("ul", {
          class: "".concat(o, "-actions")
        }, [he(L)]) : null;
        return (0, e.createVNode)("div", {
          class: De,
          ref: "cardContainerRef"
        }, [ce, Me, G && G.length ? $e : null, Ae]);
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
  var a = B.exports;
  Object.defineProperty(h, "__esModule", {
    value: !0
  }), h.default = h.cardMetaProps = void 0;
  var e = H, t = a(z()), l = a(be()), n = ge(), d = a(F()), i = function() {
    return {
      prefixCls: String,
      title: l.default.any,
      description: l.default.any,
      avatar: l.default.any
    };
  };
  h.cardMetaProps = i;
  var s = (0, e.defineComponent)({
    compatConfig: {
      MODE: 3
    },
    name: "ACardMeta",
    props: i(),
    slots: ["title", "description", "avatar"],
    setup: function(b, T) {
      var g = T.slots, V = (0, d.default)("card", b), c = V.prefixCls;
      return function() {
        var R = (0, t.default)({}, "".concat(c.value, "-meta"), !0), M = (0, n.getPropsSlot)(g, b, "avatar"), r = (0, n.getPropsSlot)(g, b, "title"), $ = (0, n.getPropsSlot)(g, b, "description"), u = M ? (0, e.createVNode)("div", {
          class: "".concat(c.value, "-meta-avatar")
        }, [M]) : null, P = r ? (0, e.createVNode)("div", {
          class: "".concat(c.value, "-meta-title")
        }, [r]) : null, A = $ ? (0, e.createVNode)("div", {
          class: "".concat(c.value, "-meta-description")
        }, [$]) : null, I = P || A ? (0, e.createVNode)("div", {
          class: "".concat(c.value, "-meta-detail")
        }, [P, A]) : null;
        return (0, e.createVNode)("div", {
          class: R
        }, [u, I]);
      };
    }
  });
  return h.default = s, h;
}
var N = {}, ye;
function we() {
  if (ye)
    return N;
  ye = 1;
  var a = B.exports;
  Object.defineProperty(N, "__esModule", {
    value: !0
  }), N.default = N.cardGridProps = void 0;
  var e = H, t = a(z()), l = a(F()), n = function() {
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
      var b = S.slots, T = (0, l.default)("card", s), g = T.prefixCls, V = (0, e.computed)(function() {
        var c;
        return c = {}, (0, t.default)(c, "".concat(g.value, "-grid"), !0), (0, t.default)(c, "".concat(g.value, "-grid-hoverable"), s.hoverable), c;
      });
      return function() {
        var c;
        return (0, e.createVNode)("div", {
          class: V.value
        }, [(c = b.default) === null || c === void 0 ? void 0 : c.call(b)]);
      };
    }
  });
  return N.default = d, N;
}
(function(a) {
  var e = B.exports;
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
      return l.default;
    }
  }), a.default = void 0;
  var t = e(We()), l = e(Le()), n = e(we());
  t.default.Meta = l.default, t.default.Grid = n.default, t.default.install = function(i) {
    return i.component(t.default.name, t.default), i.component(l.default.name, l.default), i.component(n.default.name, n.default), i;
  };
  var d = t.default;
  a.default = d;
})(Ce);
const ze = /* @__PURE__ */ Be(Ce), Nt = Ge({
  props: {
    record: {
      type: Object,
      require: !0
    },
    children: {
      type: Array
    }
  },
  setup(a, { attrs: e, slots: t }) {
    return () => {
      const l = {
        ...a.record,
        title: a.record.label
      }, n = l.children;
      return delete l.children, Oe(ze, l, {
        default: () => pe(
          t,
          "edit-node",
          {},
          () => n.map(
            (d) => pe(t, "node", { record: d })
          )
        )
      });
    };
  }
});
export {
  Nt as default
};
