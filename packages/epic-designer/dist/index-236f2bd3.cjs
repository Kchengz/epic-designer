"use strict";const q=require("./_commonjsHelpers-6763f629.cjs"),le=require("./_vue_commonjs-external-0743e21a.cjs"),w=require("./index-8a4d6b86.cjs"),_e=require("./index-a2c63f32.cjs");function dt(o,s){for(var r=0;r<s.length;r++){const g=s[r];if(typeof g!="string"&&!Array.isArray(g)){for(const b in g)if(b!=="default"&&!(b in o)){const v=Object.getOwnPropertyDescriptor(g,b);v&&Object.defineProperty(o,b,v.get?v:{enumerable:!0,get:()=>g[b]})}}}return Object.freeze(Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}))}var Ce={},Se={},Be={},se={},de={},ce={};Object.defineProperty(ce,"__esModule",{value:!0});ce.default={tabFontSizeSmall:"14px",tabFontSizeMedium:"14px",tabFontSizeLarge:"16px",tabGapSmallLine:"36px",tabGapMediumLine:"36px",tabGapLargeLine:"36px",tabGapSmallLineVertical:"8px",tabGapMediumLineVertical:"8px",tabGapLargeLineVertical:"8px",tabPaddingSmallLine:"6px 0",tabPaddingMediumLine:"10px 0",tabPaddingLargeLine:"14px 0",tabPaddingVerticalSmallLine:"6px 12px",tabPaddingVerticalMediumLine:"8px 16px",tabPaddingVerticalLargeLine:"10px 20px",tabGapSmallBar:"36px",tabGapMediumBar:"36px",tabGapLargeBar:"36px",tabGapSmallBarVertical:"8px",tabGapMediumBarVertical:"8px",tabGapLargeBarVertical:"8px",tabPaddingSmallBar:"4px 0",tabPaddingMediumBar:"6px 0",tabPaddingLargeBar:"10px 0",tabPaddingVerticalSmallBar:"6px 12px",tabPaddingVerticalMediumBar:"8px 16px",tabPaddingVerticalLargeBar:"10px 20px",tabGapSmallCard:"4px",tabGapMediumCard:"4px",tabGapLargeCard:"4px",tabGapSmallCardVertical:"4px",tabGapMediumCardVertical:"4px",tabGapLargeCardVertical:"4px",tabPaddingSmallCard:"8px 16px",tabPaddingMediumCard:"10px 20px",tabPaddingLargeCard:"12px 24px",tabPaddingSmallSegment:"4px 0",tabPaddingMediumSegment:"6px 0",tabPaddingLargeSegment:"8px 0",tabPaddingVerticalLargeSegment:"0 8px",tabPaddingVerticalSmallCard:"8px 12px",tabPaddingVerticalMediumCard:"10px 16px",tabPaddingVerticalLargeCard:"12px 20px",tabPaddingVerticalSmallSegment:"0 4px",tabPaddingVerticalMediumSegment:"0 6px",tabGapSmallSegment:"0",tabGapMediumSegment:"0",tabGapLargeSegment:"0",tabGapSmallSegmentVertical:"0",tabGapMediumSegmentVertical:"0",tabGapLargeSegmentVertical:"0",panePaddingSmall:"8px 0 0 0",panePaddingMedium:"12px 0 0 0",panePaddingLarge:"16px 0 0 0",closeSize:"18px",closeIconSize:"14px"};(function(o){var s=q.commonjsGlobal&&q.commonjsGlobal.__importDefault||function(_){return _&&_.__esModule?_:{default:_}};Object.defineProperty(o,"__esModule",{value:!0}),o.self=void 0;const r=s(ce),g=w.common,b=_=>{const{textColor2:l,primaryColor:u,textColorDisabled:x,closeIconColor:T,closeIconColorHover:W,closeIconColorPressed:L,closeColorHover:k,closeColorPressed:V,tabColor:G,baseColor:j,dividerColor:t,fontWeight:c,textColor1:f,borderRadius:C,fontSize:h,fontWeightStrong:z}=_;return Object.assign(Object.assign({},r.default),{colorSegment:G,tabFontSizeCard:h,tabTextColorLine:f,tabTextColorActiveLine:u,tabTextColorHoverLine:u,tabTextColorDisabledLine:x,tabTextColorSegment:f,tabTextColorActiveSegment:l,tabTextColorHoverSegment:l,tabTextColorDisabledSegment:x,tabTextColorBar:f,tabTextColorActiveBar:u,tabTextColorHoverBar:u,tabTextColorDisabledBar:x,tabTextColorCard:f,tabTextColorHoverCard:f,tabTextColorActiveCard:u,tabTextColorDisabledCard:x,barColor:u,closeIconColor:T,closeIconColorHover:W,closeIconColorPressed:L,closeColorHover:k,closeColorPressed:V,closeBorderRadius:C,tabColor:G,tabColorSegment:j,tabBorderColor:t,tabFontWeightActive:c,tabFontWeight:c,tabBorderRadius:C,paneTextColor:l,fontWeightStrong:z})};o.self=b;const v={name:"Tabs",common:g.commonLight,self:o.self};o.default=v})(de);Object.defineProperty(se,"__esModule",{value:!0});const ct=w.common,bt=de,ft={name:"Tabs",common:ct.commonDark,self(o){const s=(0,bt.self)(o),{inputColor:r}=o;return s.colorSegment=r,s.tabColorSegment=r,s}};se.default=ft;(function(o){var s=q.commonjsGlobal&&q.commonjsGlobal.__importDefault||function(b){return b&&b.__esModule?b:{default:b}};Object.defineProperty(o,"__esModule",{value:!0}),o.tabsLight=o.tabsDark=void 0;var r=se;Object.defineProperty(o,"tabsDark",{enumerable:!0,get:function(){return s(r).default}});var g=de;Object.defineProperty(o,"tabsLight",{enumerable:!0,get:function(){return s(g).default}})})(Be);var Y={};Object.defineProperty(Y,"__esModule",{value:!0});Y.tabsInjectionKey=void 0;const ut=w._utils;Y.tabsInjectionKey=(0,ut.createInjectionKey)("n-tabs");var be={},fe={};(function(o){Object.defineProperty(o,"__esModule",{value:!0}),o.tabPaneProps=void 0;const s=le.require$$0,r=w._utils,g=Y;o.tabPaneProps={tab:[String,Number,Object,Function],name:{type:[String,Number],required:!0},disabled:Boolean,displayDirective:{type:String,default:"if"},closable:{type:Boolean,default:void 0},tabProps:Object,label:[String,Number,Object,Function]},o.default=(0,s.defineComponent)({__TAB_PANE__:!0,name:"TabPane",alias:["TabPanel"],props:o.tabPaneProps,setup(b){process.env.NODE_ENV!=="production"&&(0,s.watchEffect)(()=>{b.label!==void 0&&(0,r.warnOnce)("tab-pane","`label` is deprecated, please use `tab` instead.")});const v=(0,s.inject)(g.tabsInjectionKey,null);return v||(0,r.throwError)("tab-pane","`n-tab-pane` must be placed inside `n-tabs`."),{style:v.paneStyleRef,class:v.paneClassRef,mergedClsPrefix:v.mergedClsPrefixRef}},render(){return(0,s.h)("div",{class:[`${this.mergedClsPrefix}-tab-pane`,this.class],style:this.style},this.$slots)}})})(fe);(function(o){Object.defineProperty(o,"__esModule",{value:!0}),o.tabProps=void 0;const s=le.require$$0,r=_e.icons,g=_e._internal,b=w._utils,v=Y,_=fe;o.tabProps=Object.assign({internalLeftPadded:Boolean,internalAddable:Boolean,internalCreatedByPane:Boolean},(0,b.omit)(_.tabPaneProps,["displayDirective"])),o.default=(0,s.defineComponent)({__TAB__:!0,inheritAttrs:!1,name:"Tab",props:o.tabProps,setup(l){const{mergedClsPrefixRef:u,valueRef:x,typeRef:T,closableRef:W,tabStyleRef:L,tabChangeIdRef:k,onBeforeLeaveRef:V,triggerRef:G,handleAdd:j,activateTab:t,handleClose:c}=(0,s.inject)(v.tabsInjectionKey);return{trigger:G,mergedClosable:(0,s.computed)(()=>{if(l.internalAddable)return!1;const{closable:f}=l;return f===void 0?W.value:f}),style:L,clsPrefix:u,value:x,type:T,handleClose(f){f.stopPropagation(),!l.disabled&&c(l.name)},activateTab(){if(l.disabled)return;if(l.internalAddable){j();return}const{name:f}=l,C=++k.id;if(f!==x.value){const{value:h}=V;h?Promise.resolve(h(l.name,x.value)).then(z=>{z&&k.id===C&&t(f)}):t(f)}}}},render(){const{internalAddable:l,clsPrefix:u,name:x,disabled:T,label:W,tab:L,value:k,mergedClosable:V,style:G,trigger:j,$slots:{default:t}}=this,c=W??L;return(0,s.h)("div",{class:`${u}-tabs-tab-wrapper`},this.internalLeftPadded?(0,s.h)("div",{class:`${u}-tabs-tab-pad`}):null,(0,s.h)("div",Object.assign({key:x,"data-name":x,"data-disabled":T?!0:void 0},(0,s.mergeProps)({class:[`${u}-tabs-tab`,k===x&&`${u}-tabs-tab--active`,T&&`${u}-tabs-tab--disabled`,V&&`${u}-tabs-tab--closable`,l&&`${u}-tabs-tab--addable`],onClick:j==="click"?this.activateTab:void 0,onMouseenter:j==="hover"?this.activateTab:void 0,style:l?void 0:G},this.internalCreatedByPane?this.tabProps||{}:this.$attrs)),(0,s.h)("span",{class:`${u}-tabs-tab__label`},l?(0,s.h)(s.Fragment,null,(0,s.h)("div",{class:`${u}-tabs-tab__height-placeholder`}," "),(0,s.h)(g.NBaseIcon,{clsPrefix:u},{default:()=>(0,s.h)(r.AddIcon,null)})):t?t():typeof c=="object"?c:(0,b.render)(c??x)),V&&this.type==="card"?(0,s.h)(g.NBaseClose,{clsPrefix:u,class:`${u}-tabs-tab__close`,onClick:this.handleClose,disabled:T}):null))}})})(be);var ue={};Object.defineProperty(ue,"__esModule",{value:!0});const e=w.cssr;ue.default=(0,e.cB)("tabs",`
 box-sizing: border-box;
 width: 100%;
 display: flex;
 flex-direction: column;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
`,[(0,e.cM)("segment-type",[(0,e.cB)("tabs-rail",[(0,e.c)("&.transition-disabled","color: red;",[(0,e.cB)("tabs-tab",`
 transition: none;
 `)])])]),(0,e.cM)("top",[(0,e.cB)("tab-pane",`
 padding: var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left);
 `)]),(0,e.cM)("left",[(0,e.cB)("tab-pane",`
 padding: var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left) var(--n-pane-padding-top);
 `)]),(0,e.cM)("left, right",`
 flex-direction: row;
 `,[(0,e.cB)("tabs-bar",`
 width: 2px;
 right: 0;
 transition:
 top .2s var(--n-bezier),
 max-height .2s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),(0,e.cB)("tabs-tab",`
 padding: var(--n-tab-padding-vertical); 
 `)]),(0,e.cM)("right",`
 flex-direction: row-reverse;
 `,[(0,e.cB)("tab-pane",`
 padding: var(--n-pane-padding-left) var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom);
 `),(0,e.cB)("tabs-bar",`
 left: 0;
 `)]),(0,e.cM)("bottom",`
 flex-direction: column-reverse;
 justify-content: flex-end;
 `,[(0,e.cB)("tab-pane",`
 padding: var(--n-pane-padding-bottom) var(--n-pane-padding-right) var(--n-pane-padding-top) var(--n-pane-padding-left);
 `),(0,e.cB)("tabs-bar",`
 top: 0;
 `)]),(0,e.cB)("tabs-rail",`
 padding: 3px;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 background-color: var(--n-color-segment);
 transition: background-color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 `,[(0,e.cB)("tabs-tab-wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[(0,e.cB)("tabs-tab",`
 overflow: hidden;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[(0,e.cM)("active",`
 font-weight: var(--n-font-weight-strong);
 color: var(--n-tab-text-color-active);
 background-color: var(--n-tab-color-segment);
 box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .08);
 `),(0,e.c)("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])])]),(0,e.cM)("flex",[(0,e.cB)("tabs-nav",{width:"100%"},[(0,e.cB)("tabs-wrapper",{width:"100%"},[(0,e.cB)("tabs-tab",{marginRight:0})])])]),(0,e.cB)("tabs-nav",`
 box-sizing: border-box;
 line-height: 1.5;
 display: flex;
 transition: border-color .3s var(--n-bezier);
 `,[(0,e.cE)("prefix, suffix",`
 display: flex;
 align-items: center;
 `),(0,e.cE)("prefix","padding-right: 16px;"),(0,e.cE)("suffix","padding-left: 16px;")]),(0,e.cM)("top, bottom",[(0,e.cB)("tabs-nav-scroll-wrapper",[(0,e.c)("&::before",`
 top: 0;
 bottom: 0;
 left: 0;
 width: 20px;
 `),(0,e.c)("&::after",`
 top: 0;
 bottom: 0;
 right: 0;
 width: 20px;
 `),(0,e.cM)("shadow-start",[(0,e.c)("&::before",`
 box-shadow: inset 10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]),(0,e.cM)("shadow-end",[(0,e.c)("&::after",`
 box-shadow: inset -10px 0 8px -8px rgba(0, 0, 0, .12);
 `)])])]),(0,e.cM)("left, right",[(0,e.cB)("tabs-nav-scroll-wrapper",[(0,e.c)("&::before",`
 top: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),(0,e.c)("&::after",`
 bottom: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),(0,e.cM)("shadow-start",[(0,e.c)("&::before",`
 box-shadow: inset 0 10px 8px -8px rgba(0, 0, 0, .12);
 `)]),(0,e.cM)("shadow-end",[(0,e.c)("&::after",`
 box-shadow: inset 0 -10px 8px -8px rgba(0, 0, 0, .12);
 `)])])]),(0,e.cB)("tabs-nav-scroll-wrapper",`
 flex: 1;
 position: relative;
 overflow: hidden;
 `,[(0,e.cB)("tabs-nav-y-scroll",`
 height: 100%;
 width: 100%;
 overflow-y: auto; 
 scrollbar-width: none;
 `,[(0,e.c)("&::-webkit-scrollbar",`
 width: 0;
 height: 0;
 `)]),(0,e.c)("&::before, &::after",`
 transition: box-shadow .3s var(--n-bezier);
 pointer-events: none;
 content: "";
 position: absolute;
 z-index: 1;
 `)]),(0,e.cB)("tabs-nav-scroll-content",`
 display: flex;
 position: relative;
 min-width: 100%;
 width: fit-content;
 box-sizing: border-box;
 `),(0,e.cB)("tabs-wrapper",`
 display: inline-flex;
 flex-wrap: nowrap;
 position: relative;
 `),(0,e.cB)("tabs-tab-wrapper",`
 display: flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 flex-grow: 0;
 `),(0,e.cB)("tabs-tab",`
 cursor: pointer;
 white-space: nowrap;
 flex-wrap: nowrap;
 display: inline-flex;
 align-items: center;
 color: var(--n-tab-text-color);
 font-size: var(--n-tab-font-size);
 background-clip: padding-box;
 padding: var(--n-tab-padding);
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[(0,e.cM)("disabled",{cursor:"not-allowed"}),(0,e.cE)("close",`
 margin-left: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),(0,e.cE)("label",`
 display: flex;
 align-items: center;
 `)]),(0,e.cB)("tabs-bar",`
 position: absolute;
 bottom: 0;
 height: 2px;
 border-radius: 1px;
 background-color: var(--n-bar-color);
 transition:
 left .2s var(--n-bezier),
 max-width .2s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `,[(0,e.c)("&.transition-disabled",`
 transition: none;
 `),(0,e.cM)("disabled",`
 background-color: var(--n-tab-text-color-disabled)
 `)]),(0,e.cB)("tabs-pane-wrapper",`
 position: relative;
 overflow: hidden;
 transition: max-height .2s var(--n-bezier);
 `),(0,e.cB)("tab-pane",`
 color: var(--n-pane-text-color);
 width: 100%;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .2s var(--n-bezier);
 left: 0;
 right: 0;
 top: 0;
 `,[(0,e.c)("&.next-transition-leave-active, &.prev-transition-leave-active, &.next-transition-enter-active, &.prev-transition-enter-active",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 transform .2s var(--n-bezier),
 opacity .2s var(--n-bezier);
 `),(0,e.c)("&.next-transition-leave-active, &.prev-transition-leave-active",`
 position: absolute;
 `),(0,e.c)("&.next-transition-enter-from, &.prev-transition-leave-to",`
 transform: translateX(32px);
 opacity: 0;
 `),(0,e.c)("&.next-transition-leave-to, &.prev-transition-enter-from",`
 transform: translateX(-32px);
 opacity: 0;
 `),(0,e.c)("&.next-transition-leave-from, &.next-transition-enter-to, &.prev-transition-leave-from, &.prev-transition-enter-to",`
 transform: translateX(0);
 opacity: 1;
 `)]),(0,e.cB)("tabs-tab-pad",`
 box-sizing: border-box;
 width: var(--n-tab-gap);
 flex-grow: 0;
 flex-shrink: 0;
 `),(0,e.cM)("line-type, bar-type",[(0,e.cB)("tabs-tab",`
 font-weight: var(--n-tab-font-weight);
 box-sizing: border-box;
 vertical-align: bottom;
 `,[(0,e.c)("&:hover",{color:"var(--n-tab-text-color-hover)"}),(0,e.cM)("active",`
 color: var(--n-tab-text-color-active);
 font-weight: var(--n-tab-font-weight-active);
 `),(0,e.cM)("disabled",{color:"var(--n-tab-text-color-disabled)"})])]),(0,e.cB)("tabs-nav",[(0,e.cM)("line-type",[(0,e.cM)("top",[(0,e.cE)("prefix, suffix",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),(0,e.cB)("tabs-nav-scroll-content",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),(0,e.cB)("tabs-bar",`
 bottom: -1px;
 `)]),(0,e.cM)("left",[(0,e.cE)("prefix, suffix",`
 border-right: 1px solid var(--n-tab-border-color);
 `),(0,e.cB)("tabs-nav-scroll-content",`
 border-right: 1px solid var(--n-tab-border-color);
 `),(0,e.cB)("tabs-bar",`
 right: -1px;
 `)]),(0,e.cM)("right",[(0,e.cE)("prefix, suffix",`
 border-left: 1px solid var(--n-tab-border-color);
 `),(0,e.cB)("tabs-nav-scroll-content",`
 border-left: 1px solid var(--n-tab-border-color);
 `),(0,e.cB)("tabs-bar",`
 left: -1px;
 `)]),(0,e.cM)("bottom",[(0,e.cE)("prefix, suffix",`
 border-top: 1px solid var(--n-tab-border-color);
 `),(0,e.cB)("tabs-nav-scroll-content",`
 border-top: 1px solid var(--n-tab-border-color);
 `),(0,e.cB)("tabs-bar",`
 top: -1px;
 `)]),(0,e.cE)("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 `),(0,e.cB)("tabs-nav-scroll-content",`
 transition: border-color .3s var(--n-bezier);
 `),(0,e.cB)("tabs-bar",`
 border-radius: 0;
 `)]),(0,e.cM)("card-type",[(0,e.cE)("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),(0,e.cB)("tabs-pad",`
 flex-grow: 1;
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),(0,e.cB)("tabs-tab-pad",`
 transition: border-color .3s var(--n-bezier);
 `),(0,e.cB)("tabs-tab",`
 font-weight: var(--n-tab-font-weight);
 border: 1px solid var(--n-tab-border-color);
 background-color: var(--n-tab-color);
 box-sizing: border-box;
 position: relative;
 vertical-align: bottom;
 display: flex;
 justify-content: space-between;
 font-size: var(--n-tab-font-size);
 color: var(--n-tab-text-color);
 `,[(0,e.cM)("addable",`
 padding-left: 8px;
 padding-right: 8px;
 font-size: 16px;
 `,[(0,e.cE)("height-placeholder",`
 width: 0;
 font-size: var(--n-tab-font-size);
 `),(0,e.cNotM)("disabled",[(0,e.c)("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])]),(0,e.cM)("closable","padding-right: 8px;"),(0,e.cM)("active",`
 background-color: #0000;
 font-weight: var(--n-tab-font-weight-active);
 color: var(--n-tab-text-color-active);
 `),(0,e.cM)("disabled","color: var(--n-tab-text-color-disabled);")]),(0,e.cB)("tabs-scroll-padding","border-bottom: 1px solid var(--n-tab-border-color);")]),(0,e.cM)("left, right",[(0,e.cB)("tabs-wrapper",`
 flex-direction: column;
 `,[(0,e.cB)("tabs-tab-wrapper",`
 flex-direction: column;
 `,[(0,e.cB)("tabs-tab-pad",`
 height: var(--n-tab-gap-vertical);
 width: 100%;
 `)])])]),(0,e.cM)("top",[(0,e.cM)("card-type",[(0,e.cB)("tabs-tab",`
 border-top-left-radius: var(--n-tab-border-radius);
 border-top-right-radius: var(--n-tab-border-radius);
 `,[(0,e.cM)("active",`
 border-bottom: 1px solid #0000;
 `)]),(0,e.cB)("tabs-tab-pad",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `)])]),(0,e.cM)("left",[(0,e.cM)("card-type",[(0,e.cB)("tabs-tab",`
 border-top-left-radius: var(--n-tab-border-radius);
 border-bottom-left-radius: var(--n-tab-border-radius);
 `,[(0,e.cM)("active",`
 border-right: 1px solid #0000;
 `)]),(0,e.cB)("tabs-tab-pad",`
 border-right: 1px solid var(--n-tab-border-color);
 `)])]),(0,e.cM)("right",[(0,e.cM)("card-type",[(0,e.cB)("tabs-tab",`
 border-top-right-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[(0,e.cM)("active",`
 border-left: 1px solid #0000;
 `)]),(0,e.cB)("tabs-tab-pad",`
 border-left: 1px solid var(--n-tab-border-color);
 `)])]),(0,e.cM)("bottom",[(0,e.cM)("card-type",[(0,e.cB)("tabs-tab",`
 border-bottom-left-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[(0,e.cM)("active",`
 border-top: 1px solid #0000;
 `)]),(0,e.cB)("tabs-tab-pad",`
 border-top: 1px solid var(--n-tab-border-color);
 `)])])])]);(function(o){var s=q.commonjsGlobal&&q.commonjsGlobal.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(o,"__esModule",{value:!0}),o.tabsProps=void 0;const r=le.require$$0,g=w.require$$1$1,b=w.lodashExports,v=w.require$$2,_=w._mixins,l=w._utils,u=Be,x=Y,T=s(be),W=s(ue),L=w.require$$1;o.tabsProps=Object.assign(Object.assign({},_.useTheme.props),{value:[String,Number],defaultValue:[String,Number],trigger:{type:String,default:"click"},type:{type:String,default:"bar"},closable:Boolean,justifyContent:String,size:{type:String,default:"medium"},placement:{type:String,default:"top"},tabStyle:[String,Object],barWidth:Number,paneClass:String,paneStyle:[String,Object],paneWrapperClass:String,paneWrapperStyle:[String,Object],addable:[Boolean,Object],tabsPadding:{type:Number,default:0},animated:Boolean,onBeforeLeave:Function,onAdd:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onClose:[Function,Array],labelSize:String,activeName:[String,Number],onActiveNameChange:[Function,Array]}),o.default=(0,r.defineComponent)({name:"Tabs",props:o.tabsProps,setup(t,{slots:c}){var f,C,h,z;process.env.NODE_ENV!=="production"&&(0,r.watchEffect)(()=>{t.labelSize!==void 0&&(0,l.warnOnce)("tabs","`label-size` is deprecated, please use `size` instead."),t.activeName!==void 0&&(0,l.warnOnce)("tabs","`active-name` is deprecated, please use `value` instead."),t.onActiveNameChange!==void 0&&(0,l.warnOnce)("tabs","`on-active-name-change` is deprecated, please use `on-update:value` instead.")});const{mergedClsPrefixRef:y,inlineThemeDisabled:O}=(0,_.useConfig)(t),D=(0,_.useTheme)("Tabs","-tabs",W.default,u.tabsLight,t,y),E=(0,r.ref)(null),R=(0,r.ref)(null),U=(0,r.ref)(null),I=(0,r.ref)(null),P=(0,r.ref)(null),S=(0,r.ref)(!0),F=(0,r.ref)(!0),A=(0,v.useCompitable)(t,["labelSize","size"]),X=(0,v.useCompitable)(t,["activeName","value"]),M=(0,r.ref)((C=(f=X.value)!==null&&f!==void 0?f:t.defaultValue)!==null&&C!==void 0?C:c.default?(z=(h=(0,l.flatten)(c.default())[0])===null||h===void 0?void 0:h.props)===null||z===void 0?void 0:z.name:null),H=(0,v.useMergedState)(X,M),N={id:0},p=(0,r.computed)(()=>{if(!(!t.justifyContent||t.type==="card"))return{display:"flex",justifyContent:t.justifyContent}});(0,r.watch)(H,()=>{N.id=0,ee(),ve()});function m(){var a;const{value:n}=H;return n===null?null:(a=E.value)===null||a===void 0?void 0:a.querySelector(`[data-name="${n}"]`)}function Z(a){if(t.type==="card")return;const{value:n}=R;if(n&&a){const i=`${y.value}-tabs-bar--disabled`,{barWidth:d,placement:B}=t;if(a.dataset.disabled==="true"?n.classList.add(i):n.classList.remove(i),["top","bottom"].includes(B)){if(pe(["top","maxHeight","height"]),typeof d=="number"&&a.offsetWidth>=d){const $=Math.floor((a.offsetWidth-d)/2)+a.offsetLeft;n.style.left=`${$}px`,n.style.maxWidth=`${d}px`}else n.style.left=`${a.offsetLeft}px`,n.style.maxWidth=`${a.offsetWidth}px`;n.style.width="8192px",n.offsetWidth}else{if(pe(["left","maxWidth","width"]),typeof d=="number"&&a.offsetHeight>=d){const $=Math.floor((a.offsetHeight-d)/2)+a.offsetTop;n.style.top=`${$}px`,n.style.maxHeight=`${d}px`}else n.style.top=`${a.offsetTop}px`,n.style.maxHeight=`${a.offsetHeight}px`;n.style.height="8192px",n.offsetHeight}}}function pe(a){const{value:n}=R;if(n)for(const i of a)n.style[i]=""}function ee(){if(t.type==="card")return;const a=m();a&&Z(a)}function ve(a){var n;const i=(n=P.value)===null||n===void 0?void 0:n.$el;if(!i)return;const d=m();if(!d)return;const{scrollLeft:B,offsetWidth:$}=i,{offsetLeft:Q,offsetWidth:re}=d;B>Q?i.scrollTo({top:0,left:Q,behavior:"smooth"}):Q+re>B+$&&i.scrollTo({top:0,left:Q+re-$,behavior:"smooth"})}const te=(0,r.ref)(null);let oe=0,K=null;function we(a){const n=te.value;if(n){oe=a.getBoundingClientRect().height;const i=`${oe}px`,d=()=>{n.style.height=i,n.style.maxHeight=i};K?(d(),K(),K=null):K=d}}function Te(a){const n=te.value;if(n){const i=a.getBoundingClientRect().height,d=()=>{document.body.offsetHeight,n.style.maxHeight=`${i}px`,n.style.height=`${Math.max(oe,i)}px`};K?(K(),K=null,d()):K=d}}function ze(){const a=te.value;a&&(a.style.maxHeight="",a.style.height="")}const ge={value:[]},he=(0,r.ref)("next");function Re(a){const n=H.value;let i="next";for(const d of ge.value){if(d===n)break;if(d===a){i="prev";break}}he.value=i,Me(a)}function Me(a){const{onActiveNameChange:n,onUpdateValue:i,"onUpdate:value":d}=t;n&&(0,l.call)(n,a),i&&(0,l.call)(i,a),d&&(0,l.call)(d,a),M.value=a}function $e(a){const{onClose:n}=t;n&&(0,l.call)(n,a)}function me(){const{value:a}=R;if(!a)return;const n="transition-disabled";a.classList.add(n),ee(),a.classList.remove(n)}let xe=0;function Le(a){var n;if(a.contentRect.width===0&&a.contentRect.height===0||xe===a.contentRect.width)return;xe=a.contentRect.width;const{type:i}=t;(i==="line"||i==="bar")&&me(),i!=="segment"&&ie((n=P.value)===null||n===void 0?void 0:n.$el)}const je=(0,b.throttle)(Le,64);(0,r.watch)([()=>t.justifyContent,()=>t.size],()=>{(0,r.nextTick)(()=>{const{type:a}=t;(a==="line"||a==="bar")&&me()})});const ae=(0,r.ref)(!1);function Oe(a){var n;const{target:i,contentRect:{width:d}}=a,B=i.parentElement.offsetWidth;if(!ae.value)B<d&&(ae.value=!0);else{const{value:$}=I;if(!$)return;B-d>$.$el.offsetWidth&&(ae.value=!1)}ie((n=P.value)===null||n===void 0?void 0:n.$el)}const Ee=(0,b.throttle)(Oe,64);function Ae(){const{onAdd:a}=t;a&&a(),(0,r.nextTick)(()=>{const n=m(),{value:i}=P;!n||!i||i.scrollTo({left:n.offsetLeft,top:0,behavior:"smooth"})})}function ie(a){if(!a)return;const{placement:n}=t;if(n==="top"||n==="bottom"){const{scrollLeft:i,scrollWidth:d,offsetWidth:B}=a;S.value=i<=0,F.value=i+B>=d}else{const{scrollTop:i,scrollHeight:d,offsetHeight:B}=a;S.value=i<=0,F.value=i+B>=d}}const We=(0,b.throttle)(a=>{ie(a.target)},64);(0,r.provide)(x.tabsInjectionKey,{triggerRef:(0,r.toRef)(t,"trigger"),tabStyleRef:(0,r.toRef)(t,"tabStyle"),paneClassRef:(0,r.toRef)(t,"paneClass"),paneStyleRef:(0,r.toRef)(t,"paneStyle"),mergedClsPrefixRef:y,typeRef:(0,r.toRef)(t,"type"),closableRef:(0,r.toRef)(t,"closable"),valueRef:H,tabChangeIdRef:N,onBeforeLeaveRef:(0,r.toRef)(t,"onBeforeLeave"),activateTab:Re,handleClose:$e,handleAdd:Ae}),(0,v.onFontsReady)(()=>{ee(),ve()}),(0,r.watchEffect)(()=>{const{value:a}=U;if(!a)return;const{value:n}=y,i=`${n}-tabs-nav-scroll-wrapper--shadow-start`,d=`${n}-tabs-nav-scroll-wrapper--shadow-end`;S.value?a.classList.remove(i):a.classList.add(i),F.value?a.classList.remove(d):a.classList.add(d)});const ye=(0,r.ref)(null);(0,r.watch)(H,()=>{if(t.type==="segment"){const a=ye.value;a&&(0,r.nextTick)(()=>{a.classList.add("transition-disabled"),a.offsetWidth,a.classList.remove("transition-disabled")})}});const ke={syncBarPosition:()=>{ee()}},Pe=(0,r.computed)(()=>{const{value:a}=A,{type:n}=t,i={card:"Card",bar:"Bar",line:"Line",segment:"Segment"}[n],d=`${a}${i}`,{self:{barColor:B,closeIconColor:$,closeIconColorHover:Q,closeIconColorPressed:re,tabColor:Ve,tabBorderColor:Ge,paneTextColor:De,tabFontWeight:He,tabBorderRadius:Ie,tabFontWeightActive:Fe,colorSegment:Ne,fontWeightStrong:Ke,tabColorSegment:qe,closeSize:Ue,closeIconSize:Xe,closeColorHover:Je,closeColorPressed:Qe,closeBorderRadius:Ye,[(0,l.createKey)("panePadding",a)]:ne,[(0,l.createKey)("tabPadding",d)]:Ze,[(0,l.createKey)("tabPaddingVertical",d)]:et,[(0,l.createKey)("tabGap",d)]:tt,[(0,l.createKey)("tabGap",`${d}Vertical`)]:at,[(0,l.createKey)("tabTextColor",n)]:rt,[(0,l.createKey)("tabTextColorActive",n)]:nt,[(0,l.createKey)("tabTextColorHover",n)]:ot,[(0,l.createKey)("tabTextColorDisabled",n)]:it,[(0,l.createKey)("tabFontSize",a)]:lt},common:{cubicBezierEaseInOut:st}}=D.value;return{"--n-bezier":st,"--n-color-segment":Ne,"--n-bar-color":B,"--n-tab-font-size":lt,"--n-tab-text-color":rt,"--n-tab-text-color-active":nt,"--n-tab-text-color-disabled":it,"--n-tab-text-color-hover":ot,"--n-pane-text-color":De,"--n-tab-border-color":Ge,"--n-tab-border-radius":Ie,"--n-close-size":Ue,"--n-close-icon-size":Xe,"--n-close-color-hover":Je,"--n-close-color-pressed":Qe,"--n-close-border-radius":Ye,"--n-close-icon-color":$,"--n-close-icon-color-hover":Q,"--n-close-icon-color-pressed":re,"--n-tab-color":Ve,"--n-tab-font-weight":He,"--n-tab-font-weight-active":Fe,"--n-tab-padding":Ze,"--n-tab-padding-vertical":et,"--n-tab-gap":tt,"--n-tab-gap-vertical":at,"--n-pane-padding-left":(0,L.getPadding)(ne,"left"),"--n-pane-padding-right":(0,L.getPadding)(ne,"right"),"--n-pane-padding-top":(0,L.getPadding)(ne,"top"),"--n-pane-padding-bottom":(0,L.getPadding)(ne,"bottom"),"--n-font-weight-strong":Ke,"--n-tab-color-segment":qe}}),J=O?(0,_.useThemeClass)("tabs",(0,r.computed)(()=>`${A.value[0]}${t.type[0]}`),Pe,t):void 0;return Object.assign({mergedClsPrefix:y,mergedValue:H,renderedNames:new Set,tabsRailElRef:ye,tabsPaneWrapperRef:te,tabsElRef:E,barElRef:R,addTabInstRef:I,xScrollInstRef:P,scrollWrapperElRef:U,addTabFixed:ae,tabWrapperStyle:p,handleNavResize:je,mergedSize:A,handleScroll:We,handleTabsResize:Ee,cssVars:O?void 0:Pe,themeClass:J==null?void 0:J.themeClass,animationDirection:he,renderNameListRef:ge,onAnimationBeforeLeave:we,onAnimationEnter:Te,onAnimationAfterEnter:ze,onRender:J==null?void 0:J.onRender},ke)},render(){const{mergedClsPrefix:t,type:c,placement:f,addTabFixed:C,addable:h,mergedSize:z,renderNameListRef:y,onRender:O,paneWrapperClass:D,paneWrapperStyle:E,$slots:{default:R,prefix:U,suffix:I}}=this;O==null||O();const P=R?(0,l.flatten)(R()).filter(p=>p.type.__TAB_PANE__===!0):[],S=R?(0,l.flatten)(R()).filter(p=>p.type.__TAB__===!0):[],F=!S.length,A=c==="card",X=c==="segment",M=!A&&!X&&this.justifyContent;y.value=[];const H=()=>{const p=(0,r.h)("div",{style:this.tabWrapperStyle,class:[`${t}-tabs-wrapper`]},M?null:(0,r.h)("div",{class:`${t}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}),F?P.map((m,Z)=>(y.value.push(m.props.name),j((0,r.h)(T.default,Object.assign({},m.props,{internalCreatedByPane:!0,internalLeftPadded:Z!==0&&(!M||M==="center"||M==="start"||M==="end")}),m.children?{default:m.children.tab}:void 0)))):S.map((m,Z)=>(y.value.push(m.props.name),j(Z!==0&&!M?G(m):m))),!C&&h&&A?V(h,(F?P.length:S.length)!==0):null,M?null:(0,r.h)("div",{class:`${t}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}));return(0,r.h)("div",{ref:"tabsElRef",class:`${t}-tabs-nav-scroll-content`},A&&h?(0,r.h)(g.VResizeObserver,{onResize:this.handleTabsResize},{default:()=>p}):p,A?(0,r.h)("div",{class:`${t}-tabs-pad`}):null,A?null:(0,r.h)("div",{ref:"barElRef",class:`${t}-tabs-bar`}))},N=X?"top":f;return(0,r.h)("div",{class:[`${t}-tabs`,this.themeClass,`${t}-tabs--${c}-type`,`${t}-tabs--${z}-size`,M&&`${t}-tabs--flex`,`${t}-tabs--${N}`],style:this.cssVars},(0,r.h)("div",{class:[`${t}-tabs-nav--${c}-type`,`${t}-tabs-nav--${N}`,`${t}-tabs-nav`]},(0,l.resolveWrappedSlot)(U,p=>p&&(0,r.h)("div",{class:`${t}-tabs-nav__prefix`},p)),X?(0,r.h)("div",{class:`${t}-tabs-rail`,ref:"tabsRailElRef"},F?P.map((p,m)=>(y.value.push(p.props.name),(0,r.h)(T.default,Object.assign({},p.props,{internalCreatedByPane:!0,internalLeftPadded:m!==0}),p.children?{default:p.children.tab}:void 0))):S.map((p,m)=>(y.value.push(p.props.name),m===0?p:G(p)))):(0,r.h)(g.VResizeObserver,{onResize:this.handleNavResize},{default:()=>(0,r.h)("div",{class:`${t}-tabs-nav-scroll-wrapper`,ref:"scrollWrapperElRef"},["top","bottom"].includes(N)?(0,r.h)(g.VXScroll,{ref:"xScrollInstRef",onScroll:this.handleScroll},{default:H}):(0,r.h)("div",{class:`${t}-tabs-nav-y-scroll`,onScroll:this.handleScroll},H()))}),C&&h&&A?V(h,!0):null,(0,l.resolveWrappedSlot)(I,p=>p&&(0,r.h)("div",{class:`${t}-tabs-nav__suffix`},p))),F&&(this.animated&&(N==="top"||N==="bottom")?(0,r.h)("div",{ref:"tabsPaneWrapperRef",style:E,class:[`${t}-tabs-pane-wrapper`,D]},k(P,this.mergedValue,this.renderedNames,this.onAnimationBeforeLeave,this.onAnimationEnter,this.onAnimationAfterEnter,this.animationDirection)):k(P,this.mergedValue,this.renderedNames)))}});function k(t,c,f,C,h,z,y){const O=[];return t.forEach(D=>{const{name:E,displayDirective:R,"display-directive":U}=D.props,I=S=>R===S||U===S,P=c===E;if(D.key!==void 0&&(D.key=E),P||I("show")||I("show:lazy")&&f.has(E)){f.has(E)||f.add(E);const S=!I("if");O.push(S?(0,r.withDirectives)(D,[[r.vShow,P]]):D)}}),y?(0,r.h)(r.TransitionGroup,{name:`${y}-transition`,onBeforeLeave:C,onEnter:h,onAfterEnter:z},{default:()=>O}):O}function V(t,c){return(0,r.h)(T.default,{ref:"addTabInstRef",key:"__addable",name:"__addable",internalCreatedByPane:!0,internalAddable:!0,internalLeftPadded:c,disabled:typeof t=="object"&&t.disabled})}function G(t){const c=(0,r.cloneVNode)(t);return c.props?c.props.internalLeftPadded=!0:c.props={internalLeftPadded:!0},c}function j(t){return Array.isArray(t.dynamicProps)?t.dynamicProps.includes("internalLeftPadded")||t.dynamicProps.push("internalLeftPadded"):t.dynamicProps=["internalLeftPadded"],t}})(Se);(function(o){var s=q.commonjsGlobal&&q.commonjsGlobal.__importDefault||function(v){return v&&v.__esModule?v:{default:v}};Object.defineProperty(o,"__esModule",{value:!0}),o.tabProps=o.NTab=o.tabPaneProps=o.NTabPane=o.tabsProps=o.NTabs=void 0;var r=Se;Object.defineProperty(o,"NTabs",{enumerable:!0,get:function(){return s(r).default}}),Object.defineProperty(o,"tabsProps",{enumerable:!0,get:function(){return r.tabsProps}});var g=fe;Object.defineProperty(o,"NTabPane",{enumerable:!0,get:function(){return s(g).default}}),Object.defineProperty(o,"tabPaneProps",{enumerable:!0,get:function(){return g.tabPaneProps}});var b=be;Object.defineProperty(o,"NTab",{enumerable:!0,get:function(){return s(b).default}}),Object.defineProperty(o,"tabProps",{enumerable:!0,get:function(){return b.tabProps}})})(Ce);const pt=dt({__proto__:null},[Ce]);exports.index=pt;
