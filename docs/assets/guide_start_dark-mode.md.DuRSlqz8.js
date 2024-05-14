import{_ as s,c as a,o as n,a3 as i}from"./chunks/framework.Bkcw4pAp.js";const g=JSON.parse('{"title":"暗黑模式  v0.9.11","description":"","frontmatter":{},"headers":[],"relativePath":"guide/start/dark-mode.md","filePath":"guide/start/dark-mode.md"}'),p={name:"guide/start/dark-mode.md"},e=i(`<h1 id="暗黑模式-v0-9-11" tabindex="-1">暗黑模式 <span style="font-size:16px;">v0.9.11</span> <a class="header-anchor" href="#暗黑模式-v0-9-11" aria-label="Permalink to &quot;暗黑模式  &lt;span style=&quot;font-size:16px&quot;&gt;v0.9.11&lt;/span&gt;&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">国际化</p><p><code>EpicDesigner</code>从v0.9.11开始支持了暗黑模式！</p><p>注：本部分文档仅切换暗黑模式主题，UI组件暗黑模式请自行参照UI文档</p></div><h2 id="如何使用" tabindex="-1">如何使用 <a class="header-anchor" href="#如何使用" aria-label="Permalink to &quot;如何使用&quot;">​</a></h2><p>首先你可以创建一个开关来控制 <code>暗黑模式</code> 的 class 类名。</p><blockquote><p>如果您只需要暗色模式，只需在 html 上添加一个名为 <code>dark</code> 的类 。</p></blockquote><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">html</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;dark&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">head</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">head</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">body</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">body</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">html</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="动态切换模式" tabindex="-1">动态切换模式 <a class="header-anchor" href="#动态切换模式" aria-label="Permalink to &quot;动态切换模式&quot;">​</a></h2><div class="language-tsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { useTheme } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;epic-designer&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">toggleDark</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> useTheme</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 切换主题模式</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toggleDark</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span></code></pre></div><p><img src="https://epic.kcz66.com/static/dark.png" alt=""></p><h2 id="修改暗黑主题" tabindex="-1">修改暗黑主题 <a class="header-anchor" href="#修改暗黑主题" aria-label="Permalink to &quot;修改暗黑主题&quot;">​</a></h2><p>同自定义主题一样，直接覆盖对应的 css 变量即可</p><p>像这样，新建一个 <code>styles/dark-vars.css</code>文件:</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">html</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.dark</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /* 自定义深色背景颜色 */</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  --epic-primary-color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">#98f</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  --epic-primary-hover-color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">#9988ff26</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  --epic-widget-shade-color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">#9988ff18</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>在 Epic Designer 的样式之后导入它</p><div class="language-tsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// main.ts</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;epic-designer/dist/style.css&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;./styles/dark-vars.css&#39;</span></span></code></pre></div><h2 id="ui组件暗黑模式" tabindex="-1">UI组件暗黑模式 <a class="header-anchor" href="#ui组件暗黑模式" aria-label="Permalink to &quot;UI组件暗黑模式&quot;">​</a></h2><blockquote><p>参照上面方案，可完成EpicDesigner 设计器暗黑模式，UI组件还需要参照UI官方文档完成暗黑模式切换</p></blockquote><h3 id="element-plus" tabindex="-1">Element Plus <a class="header-anchor" href="#element-plus" aria-label="Permalink to &quot;Element Plus&quot;">​</a></h3><blockquote><p>EpicDesigner与Element Plus暗黑模式一致，只需在 html 上添加一个名为 <code>dark</code> 的类即可</p></blockquote><p><a href="https://element-plus.org/zh-CN/guide/dark-mode.html" target="_blank" rel="noreferrer">暗黑模式 | Element Plus (element-plus.org)</a></p><h3 id="ant-design-vue" tabindex="-1">Ant Design Vue <a class="header-anchor" href="#ant-design-vue" aria-label="Permalink to &quot;Ant Design Vue&quot;">​</a></h3><p><a href="https://www.antdv.com/docs/vue/customize-theme-cn#%E4%BD%BF%E7%94%A8%E9%A2%84%E8%AE%BE%E7%AE%97%E6%B3%95" target="_blank" rel="noreferrer">定制主题 - Ant Design Vue (antdv.com)</a></p><h3 id="naive-ui" tabindex="-1">Naive UI <a class="header-anchor" href="#naive-ui" aria-label="Permalink to &quot;Naive UI&quot;">​</a></h3><p><a href="https://www.naiveui.com/zh-CN/light/docs/customize-theme#%E4%BD%BF%E7%94%A8%E6%9A%97%E8%89%B2%E4%B8%BB%E9%A2%98" target="_blank" rel="noreferrer">调整主题 - Naive UI</a></p><h2 id="css变量" tabindex="-1">css变量 <a class="header-anchor" href="#css变量" aria-label="Permalink to &quot;css变量&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 主色</span></span>
<span class="line"><span>--epic-primary-color: #3e8bf2;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// hover颜色</span></span>
<span class="line"><span>--epic-primary-hover-color: rgba(62, 139, 242, 0.08);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 设计器背景色</span></span>
<span class="line"><span>--epic-designer-color: #fafafc;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 设计器点颜色</span></span>
<span class="line"><span>--epic-designer-dot-color: #373739;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 画布背景</span></span>
<span class="line"><span>--epic-edit-range-color: #fff;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 属性视图背景色</span></span>
<span class="line"><span>--epic-view-color: #fff;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 拖拽区域背景色</span></span>
<span class="line"><span>--epic-edit-color: #ccc;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 活动视图切换器背景色</span></span>
<span class="line"><span>--epic-action-bar-color: #fff;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 顶部颜色</span></span>
<span class="line"><span>--epic-header-color: white;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 动作栏 hover</span></span>
<span class="line"><span>--epic-action-hover-color: #f8f8f8;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 窗口部件 hover</span></span>
<span class="line"><span>--epic-widget-hover-color: #f8f8f8;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 窗口部件遮罩颜色</span></span>
<span class="line"><span>--epic-widget-shade-color: rgba(62, 139, 242, 0.06);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 事件项背景色</span></span>
<span class="line"><span>--epic-event-item-color: #f8f8f8;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 阴影颜色</span></span>
<span class="line"><span>--epic-shadow-color: #0000003d;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 主要文本颜色</span></span>
<span class="line"><span>--epic-text-main: #000000de;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 二级文本颜色（介于主要文本和辅助文本之间）</span></span>
<span class="line"><span>--epic-text-secondary: #00000099;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 辅助文本颜色（更浅）</span></span>
<span class="line"><span>--epic-text-helper: #00000066;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 禁用文本颜色</span></span>
<span class="line"><span>--epic-text-disabled: #00000042;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 边框颜色</span></span>
<span class="line"><span>--epic-border-color: #d9d9d9;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 组件tabs颜色</span></span>
<span class="line"><span>--epic-compoent-tabs-color: #f8f8f8;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 组件hover颜色</span></span>
<span class="line"><span>--epic-compoent-hover-color: rgba(62, 139, 242, 0.06);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 字体大小</span></span>
<span class="line"><span>--epic-text-sm: 12px;</span></span>
<span class="line"><span>--epic-text-md: 14px;</span></span>
<span class="line"><span>--epic-text-lg: 16px;</span></span></code></pre></div>`,26),l=[e];function t(h,c,r,k,o,d){return n(),a("div",null,l)}const u=s(p,[["render",t]]);export{g as __pageData,u as default};
