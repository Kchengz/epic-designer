import{_ as s,c as i,o as a,a3 as t}from"./chunks/framework.C8YhLXwE.js";const g=JSON.parse('{"title":"公共函数","description":"","frontmatter":{},"headers":[],"relativePath":"guide/action/publicMethods.md","filePath":"guide/action/publicMethods.md"}'),n={name:"guide/action/publicMethods.md"},e=t(`<h1 id="公共函数" tabindex="-1">公共函数 <a class="header-anchor" href="#公共函数" aria-label="Permalink to &quot;公共函数&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">公共函数说明</p><p><code>公共函数</code> 是设计器中的一项关键功能，它能让开发者提供一些预设方法函数给设计器使用。用户可以通过公共函数在给设计器预设方法函数，在设计器中可以通过动作配置选择使用预设的方法函数，或者在自定义函数中进行编码使用，比如预设获取路由实例或者用户状态之类hooks函数。</p></div><h2 id="添加公共函数" tabindex="-1">添加公共函数 <a class="header-anchor" href="#添加公共函数" aria-label="Permalink to &quot;添加公共函数&quot;">​</a></h2><blockquote><p>通过pluginManager对象的addPublicMetho方法添加公共函数</p></blockquote><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { pluginManager, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> PublicMethodModel } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;epic-designer&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> methodItem</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> PublicMethodModel</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;myFun&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    handler</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: ()</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        alert</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;myFun 被调用了&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    describe: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;这是一个测试函数描述&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">pluginManager.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">addPublicMethod</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(methodItem)</span></span></code></pre></div>`,5),l=[e];function h(p,k,d,o,r,c){return a(),i("div",null,l)}const u=s(n,[["render",h]]);export{g as __pageData,u as default};
