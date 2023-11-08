import { r as f, i as v } from "./useConfigInject-f0dbb416.mjs";
var t = {}, l;
function b() {
  if (l)
    return t;
  l = 1;
  var c = v;
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = h;
  var d = c(f()), u = `accept acceptcharset accesskey action allowfullscreen allowtransparency
alt async autocomplete autofocus autoplay capture cellpadding cellspacing challenge
charset checked classid classname colspan cols content contenteditable contextmenu
controls coords crossorigin data datetime default defer dir disabled download draggable
enctype form formaction formenctype formmethod formnovalidate formtarget frameborder
headers height hidden high href hreflang htmlfor for httpequiv icon id inputmode integrity
is keyparams keytype kind label lang list loop low manifest marginheight marginwidth max maxlength media
mediagroup method min minlength multiple muted name novalidate nonce open
optimum pattern placeholder poster preload radiogroup readonly rel required
reversed role rowspan rows sandbox scope scoped scrolling seamless selected
shape size sizes span spellcheck src srcdoc srclang srcset start step style
summary tabindex target title type usemap value width wmode wrap`, p = `onCopy onCut onPaste onCompositionend onCompositionstart onCompositionupdate onKeydown
    onKeypress onKeyup onFocus onBlur onChange onInput onSubmit onClick onContextmenu onDoubleclick onDblclick
    onDrag onDragend onDragenter onDragexit onDragleave onDragover onDragstart onDrop onMousedown
    onMouseenter onMouseleave onMousemove onMouseout onMouseover onMouseup onSelect onTouchcancel
    onTouchend onTouchmove onTouchstart onTouchstartPassive onTouchmovePassive onScroll onWheel onAbort onCanplay onCanplaythrough
    onDurationchange onEmptied onEncrypted onEnded onError onLoadeddata onLoadedmetadata
    onLoadstart onPause onPlay onPlaying onProgress onRatechange onSeeked onSeeking onStalled onSuspend onTimeupdate onVolumechange onWaiting onLoad onError`, r = "".concat(u, " ").concat(p).split(/[\s\n]+/), m = "aria-", g = "data-";
  function s(a, n) {
    return a.indexOf(n) === 0;
  }
  function h(a) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, o;
    n === !1 ? o = {
      aria: !0,
      data: !0,
      attr: !0
    } : n === !0 ? o = {
      aria: !0
    } : o = (0, d.default)({}, n);
    var i = {};
    return Object.keys(a).forEach(function(e) {
      // Aria
      (o.aria && (e === "role" || s(e, m)) || // Data
      o.data && s(e, g) || // Attr
      o.attr && (r.includes(e) || r.includes(e.toLowerCase()))) && (i[e] = a[e]);
    }), i;
  }
  return t;
}
export {
  b as r
};
