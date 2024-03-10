import { h as l } from "./useConfigInject-f4796704.mjs";
var e = {}, o;
function u() {
  if (o)
    return e;
  o = 1, Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.PresetStatusColorTypes = e.PresetColorTypes = void 0;
  var r = l(), s = (0, r.tuple)("success", "processing", "error", "default", "warning");
  e.PresetStatusColorTypes = s;
  var t = (0, r.tuple)("pink", "red", "yellow", "orange", "cyan", "green", "blue", "purple", "geekblue", "magenta", "volcano", "gold", "lime");
  return e.PresetColorTypes = t, e;
}
export {
  u as r
};
