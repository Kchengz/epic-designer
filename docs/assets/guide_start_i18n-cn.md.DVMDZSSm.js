import{_ as s,c as i,o as e,a3 as a}from"./chunks/framework.Bj7ZzXMq.js";const u=JSON.parse('{"title":"国际化","description":"","frontmatter":{},"headers":[],"relativePath":"guide/start/i18n-cn.md","filePath":"guide/start/i18n-cn.md"}'),t={name:"guide/start/i18n-cn.md"},n=a(`<h1 id="国际化" tabindex="-1">国际化 <a class="header-anchor" href="#国际化" aria-label="Permalink to &quot;国际化&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">国际化</p><p><code>EpicDesigner</code> 目前的默认是ui的默认语言，如果需要调整ui使用其他语言，可以参考下面的方案。</p></div><h2 id="element-plus" tabindex="-1">Element Plus <a class="header-anchor" href="#element-plus" aria-label="Permalink to &quot;Element Plus&quot;">​</a></h2><p>先参考官方文档的国际化</p><p><a href="https://element-plus.org/zh-CN/guide/i18n.html#%E5%9B%BD%E9%99%85%E5%8C%96" target="_blank" rel="noreferrer">国际化 | Element Plus (element-plus.org)</a></p><p>完成UI文档国际化基础上，添加<code>provideGlobalConfig</code>函数，完成EpicDesigner内部国际化</p><div class="language-tsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> zhCn </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;element-plus/dist/locale/zh-cn.mjs&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { provideGlobalConfig } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;epic-designer/dist/ui/elementPlus&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">provideGlobalConfig</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({ locale: zhCn });</span></span></code></pre></div><h2 id="ant-design-vue" tabindex="-1">Ant Design Vue <a class="header-anchor" href="#ant-design-vue" aria-label="Permalink to &quot;Ant Design Vue&quot;">​</a></h2><p>先参考官方文档的国际化</p><p><a href="https://www.antdv.com/docs/vue/i18n-cn" target="_blank" rel="noreferrer">国际化 - Ant Design Vue (antdv.com)</a></p><p>完成UI文档国际化基础上，添加<code>setDateLocale</code>函数，完成EpicDesigner内部国际化</p><div class="language-tsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { setDateLocale } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;epic-designer/dist/ui/antd&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setDateLocale</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;zh-cn&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><h2 id="naive-ui" tabindex="-1">Naive UI <a class="header-anchor" href="#naive-ui" aria-label="Permalink to &quot;Naive UI&quot;">​</a></h2><p>直接参考官方文档的国际化</p><p><a href="https://www.naiveui.com/zh-CN/os-theme/components/config-provider#language.vue" target="_blank" rel="noreferrer">全局化配置 Config Provider - Naive UI</a></p>`,15),l=[n];function p(h,r,o,d,c,k){return e(),i("div",null,l)}const E=s(t,[["render",p]]);export{u as __pageData,E as default};
