import{_ as s,c as i,o as a,a3 as n}from"./chunks/framework.C8YhLXwE.js";const g=JSON.parse('{"title":"组件扩展","description":"","frontmatter":{},"headers":[],"relativePath":"guide/extensions/component.md","filePath":"guide/extensions/component.md"}'),e={name:"guide/extensions/component.md"},p=n(`<h1 id="组件扩展" tabindex="-1">组件扩展 <a class="header-anchor" href="#组件扩展" aria-label="Permalink to &quot;组件扩展&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">组件扩展</p><p><code>pluginManager</code> 提供了registerComponent方法添加组件</p></div><p>参考demo仓库： <a href="https://gitee.com/kcz66/k-designer-demo" target="_blank" rel="noreferrer">https://gitee.com/kcz66/k-designer-demo</a></p><h2 id="普通组件扩展" tabindex="-1">普通组件扩展 <a class="header-anchor" href="#普通组件扩展" aria-label="Permalink to &quot;普通组件扩展&quot;">​</a></h2><p>在src目录下新建designer-extensions 文件目录，下面是一个简单扩展示例</p><h2 id="新建-designer-extensions-test-index-vue-组件" tabindex="-1">新建 designer-extensions/test/index.vue（组件） <a class="header-anchor" href="#新建-designer-extensions-test-index-vue-组件" aria-label="Permalink to &quot;新建 designer-extensions/test/index.vue（组件）&quot;">​</a></h2><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  	我是扩展的组件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="新建designer-extensions-test-index-ts-组件配置文件" tabindex="-1">新建designer-extensions/test/index.ts(组件配置文件) <a class="header-anchor" href="#新建designer-extensions-test-index-ts-组件配置文件" aria-label="Permalink to &quot;新建designer-extensions/test/index.ts(组件配置文件)&quot;">​</a></h2><p><a href="#componentconfigmodel-类型及字段注释">ComponentConfigModel 配置字段类型</a></p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ComponentConfigModel } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;epic-designer&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  component</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">async</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> await</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;./cmp.vue&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  groupName:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;自定义组件&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  icon: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;epic-icon-write&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  defaultSchema: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    label: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;测试扩展组件&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    type: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;test&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    componentProps: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  config: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    attribute: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        label: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;属性1&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        type: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;input&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        field: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;name&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">as</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ComponentConfigModel</span></span></code></pre></div><h2 id="新建designer-extensions-index-ts-扩展函数" tabindex="-1">新建designer-extensions/index.ts(扩展函数) <a class="header-anchor" href="#新建designer-extensions-index-ts-扩展函数" aria-label="Permalink to &quot;新建designer-extensions/index.ts(扩展函数)&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { pluginManager } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;epic-designer&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Test </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;./Test&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 安装扩展</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> setupDesignerExtensions</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> void</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     // 注册组件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">     pluginManager.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">registerComponent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Test);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="main-ts-添加执行扩展函数" tabindex="-1">main.ts 添加执行扩展函数 <a class="header-anchor" href="#main-ts-添加执行扩展函数" aria-label="Permalink to &quot;main.ts 添加执行扩展函数&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { setupDesignerExtensions } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;./designer-extensions&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 执行扩展函数</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setupDesignerExtensions</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div><h2 id="componentconfigmodel-类型及字段注释" tabindex="-1">ComponentConfigModel 类型及字段注释 <a class="header-anchor" href="#componentconfigmodel-类型及字段注释" aria-label="Permalink to &quot;ComponentConfigModel 类型及字段注释&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>export interface ComponentConfigModel {</span></span>
<span class="line"><span>  // 组件</span></span>
<span class="line"><span>  component: any;</span></span>
<span class="line"><span>  // 分组名称（组件分组），不设置分组时仅注册，但不会显示在组件列表中，可选</span></span>
<span class="line"><span>  groupName?: string;</span></span>
<span class="line"><span>  // 组件图标</span></span>
<span class="line"><span>  icon?: string;</span></span>
<span class="line"><span>  // 当前组件是否固定不可拖动，可选</span></span>
<span class="line"><span>  immovable?: boolean;</span></span>
<span class="line"><span>  // 子节点是否固定不可拖动,只控制下一级，可选</span></span>
<span class="line"><span>  childImmovable?: boolean;</span></span>
<span class="line"><span>  // 表单字段是否固定 不添加随机UUID</span></span>
<span class="line"><span>  fixedField?: boolean;</span></span>
<span class="line"><span>  // 默认组件结构数据</span></span>
<span class="line"><span>  defaultSchema: ComponentSchema;</span></span>
<span class="line"><span>  // 配置</span></span>
<span class="line"><span>  config: {</span></span>
<span class="line"><span>    // 属性编辑列表</span></span>
<span class="line"><span>    attribute?: ComponentSchema[];</span></span>
<span class="line"><span>    // 样式编辑组件列表</span></span>
<span class="line"><span>    style?: ComponentSchema[];</span></span>
<span class="line"><span>    // 可触发事件</span></span>
<span class="line"><span>    event?: EventModel[];</span></span>
<span class="line"><span>    // 可执行函数</span></span>
<span class="line"><span>    action?: ActionModel[];</span></span>
<span class="line"><span>  };</span></span>
<span class="line"><span>  // 输入表单组件v-model绑定变量名称 默认 modelValue</span></span>
<span class="line"><span>  bindModel?: string;</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,16),t=[p];function l(h,k,d,E,o,r){return a(),i("div",null,t)}const y=s(e,[["render",l]]);export{g as __pageData,y as default};
