import { c as o } from "./_commonjsHelpers-c5d32002.js";
import { d as l, a as p } from "./index-815197f3.js";
var n = {}, u = o && o.__importDefault || function(e) {
  return e && e.__esModule ? e : {
    default: e
  };
};
Object.defineProperty(n, "__esModule", {
  value: !0
});
n.fadeInScaleUpTransition = void 0;
const c = p, m = u(l), {
  cubicBezierEaseIn: r,
  cubicBezierEaseOut: i
} = m.default;
function _({
  transformOrigin: e = "inherit",
  duration: a = ".2s",
  enterScale: f = ".9",
  originalTransform: s = "",
  originalTransition: t = ""
} = {}) {
  return [(0, c.c)("&.fade-in-scale-up-transition-leave-active", {
    transformOrigin: e,
    transition: `opacity ${a} ${r}, transform ${a} ${r} ${t && "," + t}`
  }), (0, c.c)("&.fade-in-scale-up-transition-enter-active", {
    transformOrigin: e,
    transition: `opacity ${a} ${i}, transform ${a} ${i} ${t && "," + t}`
  }), (0, c.c)("&.fade-in-scale-up-transition-enter-from, &.fade-in-scale-up-transition-leave-to", {
    opacity: 0,
    transform: `${s} scale(${f})`
  }), (0, c.c)("&.fade-in-scale-up-transition-leave-from, &.fade-in-scale-up-transition-enter-to", {
    opacity: 1,
    transform: `${s} scale(1)`
  })];
}
n.fadeInScaleUpTransition = _;
export {
  n as f
};
