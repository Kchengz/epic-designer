import{N as l,b as d}from"./chunks/index-DZavvwVo.CLpuZ4sn.js";import{u as p,D as k,t as i,C as r}from"./chunks/revoke.D5jw0695.js";import{c as E,I as a,w as o,m as s,a3 as h,o as g,l as c}from"./chunks/framework.C8YhLXwE.js";import"./chunks/commonjsHelpers-CT_km90n.D7mXbCtF.js";import"./chunks/index.DOFZgDuz.js";const y="/epic-designer/assets/layout.BlBtozTN.jpg",m=h('<h1 id="edesigner-设计器" tabindex="-1">EDesigner 设计器 <a class="header-anchor" href="#edesigner-设计器" aria-label="Permalink to &quot;EDesigner 设计器&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">设计器</p><p><code>EDesigner</code> 是一个可视化设计器组件，用户可以通过拖拽组件的方式快速生成 JSON 配置。它提供了丰富的组件库和配置项，用户可以根据需要选择合适的组件并配置相应的属性、事件和动作。设计器还提供了实时预览功能，用户可以随时查看所设计页面的效果。最终，用户可以将 JSON 配置导出，用于页面的生成和修改。</p></div><h2 id="设计器布局说明" tabindex="-1">设计器布局说明 <a class="header-anchor" href="#设计器布局说明" aria-label="Permalink to &quot;设计器布局说明&quot;">​</a></h2><p><img src="'+y+'" alt=""></p><p><strong>界面主要分为 6 个区域</strong></p><ol><li>顶部 操作按钮</li><li>活动栏 可以切换侧边栏面板</li><li>侧边栏 组件选择或信息展示</li><li>编辑区域 拖拽组件布局设计</li><li>右侧边栏 属性编辑相关</li><li>底部 状态展示</li></ol><p>其中 活动栏，侧边栏及右侧边栏可以自定义配置修改</p><h2 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-label="Permalink to &quot;基础用法&quot;">​</a></h2>',8),u={class:"epic-designer-container"},F=h(`<div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;epic-designer-container&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">EDesigner</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> @</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">save</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">handleSubmit</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> setup</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { EDesigner } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;epic-designer&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * 点击保存按钮操作</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@param</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> e</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> handleSubmit</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">e</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(e);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">style</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.epic-designer-container</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  width</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1100</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  height</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">800</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  border</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> solid</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">--epic-border-color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">style</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th><th>版本</th></tr></thead><tbody><tr><td>title</td><td>设计器头部标题</td><td>string</td><td>-</td><td>0.9.7</td></tr><tr><td>defaultSchema</td><td>默认pageSchema，初始化和重置设计器将以该数据为基础模板</td><td>PageSchema</td><td>-</td><td>0.9.6</td></tr><tr><td>lockDefaultSchemaEdit</td><td>锁定defaultSchema中组件不可以复制或移除</td><td>boolean</td><td>false</td><td>0.9.7</td></tr><tr><td>disabledZoom</td><td>禁止缩放功能</td><td>boolean</td><td>false</td><td>-</td></tr><tr><td>hiddenHeader</td><td>隐藏头部</td><td>boolean</td><td>false</td><td>-</td></tr></tbody></table><h2 id="函数" tabindex="-1">函数 <a class="header-anchor" href="#函数" aria-label="Permalink to &quot;函数&quot;">​</a></h2><table><thead><tr><th>函数名称</th><th>说明</th><th>参数</th><th>回调参数</th><th>版本</th></tr></thead><tbody><tr><td>setData</td><td>导入 json 数据，继续编辑</td><td>json</td><td>Boolean</td><td>0.0.36</td></tr><tr><td>getData</td><td>获取 json 数据</td><td>-</td><td>Object</td><td>0.0.36</td></tr><tr><td>reset</td><td>清除表单</td><td>-</td><td>Boolean</td><td>0.0.36</td></tr></tbody></table><h2 id="事件" tabindex="-1">事件 <a class="header-anchor" href="#事件" aria-label="Permalink to &quot;事件&quot;">​</a></h2><table><thead><tr><th>事件名称</th><th>说明</th><th>参数</th><th>版本</th></tr></thead><tbody><tr><td>save</td><td>点击保存按钮时回调</td><td>json</td><td>0.0.35</td></tr><tr><td>reset</td><td>点击清空重置按钮时触发</td><td>PageSchema</td><td>0.9.6</td></tr><tr><td>toggleDeviceMode</td><td>点击切换设备模式时触发</td><td>string</td><td>0.9.7</td></tr></tbody></table><h2 id="插槽" tabindex="-1">插槽 <a class="header-anchor" href="#插槽" aria-label="Permalink to &quot;插槽&quot;">​</a></h2><table><thead><tr><th>插槽名称</th><th>说明</th><th>参数</th><th>版本</th></tr></thead><tbody><tr><td>header-prefix</td><td>顶部左侧插槽（logo，标题）</td><td></td><td>0.8.1</td></tr><tr><td>header-title</td><td>顶部标题</td><td></td><td></td></tr><tr><td>header-right-prefix</td><td>顶部右侧区域前置插槽</td><td></td><td>0.8.10</td></tr><tr><td>header-right-suffix</td><td>顶部右侧区域后置插槽</td><td></td><td>0.8.10</td></tr></tbody></table>`,9),v=JSON.parse('{"title":"EDesigner 设计器","description":"","frontmatter":{},"headers":[],"relativePath":"guide/components/EDesigner.md","filePath":"guide/components/EDesigner.md"}'),b={name:"guide/components/EDesigner.md"},S=Object.assign(b,{setup(_){const{isDark:n}=p();k(l);function e(t){console.log(t)}return(t,D)=>(g(),E("div",null,[m,a(s(r),{theme:{algorithm:s(n)?s(i).darkAlgorithm:s(i).defaultAlgorithm}},{default:o(()=>[c("div",u,[a(s(d),{onSave:e})])]),_:1},8,["theme"]),F]))}});export{v as __pageData,S as default};
