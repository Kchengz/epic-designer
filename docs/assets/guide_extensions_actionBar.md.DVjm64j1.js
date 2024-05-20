import{_ as s,c as i,o as a,a3 as n}from"./chunks/framework.C8YhLXwE.js";const c=JSON.parse('{"title":"活动栏扩展","description":"","frontmatter":{},"headers":[],"relativePath":"guide/extensions/actionBar.md","filePath":"guide/extensions/actionBar.md"}'),t={name:"guide/extensions/actionBar.md"},e=n(`<h1 id="活动栏扩展" tabindex="-1">活动栏扩展 <a class="header-anchor" href="#活动栏扩展" aria-label="Permalink to &quot;活动栏扩展&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">活动栏扩展</p><p><code>pluginManager</code> 提供了registerRightSidebar方法扩展活动栏功能模块</p></div><p>参考demo仓库： <a href="https://gitee.com/kcz66/k-designer-demo" target="_blank" rel="noreferrer">https://gitee.com/kcz66/k-designer-demo</a></p><h2 id="活动扩展" tabindex="-1">活动扩展 <a class="header-anchor" href="#活动扩展" aria-label="Permalink to &quot;活动扩展&quot;">​</a></h2><p>在src目录下新建designer-extensions 文件目录，下面是一个简单扩展示例</p><h3 id="新建-designer-extensions-actionbar-index-vue" tabindex="-1">新建 designer-extensions/actionBar/index.vue <a class="header-anchor" href="#新建-designer-extensions-actionbar-index-vue" aria-label="Permalink to &quot;新建 designer-extensions/actionBar/index.vue&quot;">​</a></h3><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        我是一个扩展模块</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h3 id="新建designer-extensions-index-ts-扩展函数" tabindex="-1">新建designer-extensions/index.ts(扩展函数) <a class="header-anchor" href="#新建designer-extensions-index-ts-扩展函数" aria-label="Permalink to &quot;新建designer-extensions/index.ts(扩展函数)&quot;">​</a></h3><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { pluginManager } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;epic-designer&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 安装扩展</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> setupDesignerExtensions</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> void</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 添加右侧模块</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  pluginManager.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">registerRightSidebar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    id: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;test&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    title: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;扩展活动栏&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    component</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">async</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> await</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;./actionBar/index.vue&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  });</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="main-ts-添加执行扩展函数" tabindex="-1">main.ts 添加执行扩展函数 <a class="header-anchor" href="#main-ts-添加执行扩展函数" aria-label="Permalink to &quot;main.ts 添加执行扩展函数&quot;">​</a></h3><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { setupDesignerExtensions } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;./designer-extensions&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 执行扩展函数</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setupDesignerExtensions</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div><h2 id="如何修改覆盖原来的模块" tabindex="-1">如何修改覆盖原来的模块 <a class="header-anchor" href="#如何修改覆盖原来的模块" aria-label="Permalink to &quot;如何修改覆盖原来的模块&quot;">​</a></h2><p>在扩展活动栏时，需要传入的配置id是唯一的，如果id一样则后注册组件会替换原来的组件，所以我们可以通过设置id来覆盖原来右侧边栏模块</p><table><thead><tr><th>模块名</th><th>id</th></tr></thead><tbody><tr><td>组件</td><td>component_view</td></tr><tr><td>源码</td><td>sound_code_view</td></tr><tr><td>大纲</td><td>outline_view</td></tr></tbody></table>`,14),h=[e];function l(p,k,d,r,o,E){return a(),i("div",null,h)}const y=s(t,[["render",l]]);export{c as __pageData,y as default};
