"use strict";const c=require("./useConfigInject.9ebe03f9.cjs");var t={},l;function v(){if(l)return t;l=1;var u=c.interopRequireDefault.exports;Object.defineProperty(t,"__esModule",{value:!0}),t.default=f;var d=u(c.requireObjectSpread2()),p=`accept acceptcharset accesskey action allowfullscreen allowtransparency
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
summary tabindex target title type usemap value width wmode wrap`,m=`onCopy onCut onPaste onCompositionend onCompositionstart onCompositionupdate onKeydown
    onKeypress onKeyup onFocus onBlur onChange onInput onSubmit onClick onContextmenu onDoubleclick onDblclick
    onDrag onDragend onDragenter onDragexit onDragleave onDragover onDragstart onDrop onMousedown
    onMouseenter onMouseleave onMousemove onMouseout onMouseover onMouseup onSelect onTouchcancel
    onTouchend onTouchmove onTouchstart onTouchstartPassive onTouchmovePassive onScroll onWheel onAbort onCanplay onCanplaythrough
    onDurationchange onEmptied onEncrypted onEnded onError onLoadeddata onLoadedmetadata
    onLoadstart onPause onPlay onPlaying onProgress onRatechange onSeeked onSeeking onStalled onSuspend onTimeupdate onVolumechange onWaiting onLoad onError`,r="".concat(p," ").concat(m).split(/[\s\n]+/),g="aria-",h="data-";function s(a,o){return a.indexOf(o)===0}function f(a){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,n;o===!1?n={aria:!0,data:!0,attr:!0}:o===!0?n={aria:!0}:n=(0,d.default)({},o);var i={};return Object.keys(a).forEach(function(e){(n.aria&&(e==="role"||s(e,g))||n.data&&s(e,h)||n.attr&&(r.includes(e)||r.includes(e.toLowerCase())))&&(i[e]=a[e])}),i}return t}exports.requirePickAttrs=v;
