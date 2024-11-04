import { defineConfig } from "vitepress";
export default defineConfig({
  // 网站标题
  title: "EpicDesigner文档",
  // 网站描述
  description: "低代码可视化设计器及生成器",
  lang: "zh-CN",
  base: "/",
  sitemap: {
    hostname: "https://docs.epicjs.cn",
  },
  // 打包目录
  head: [
    // 添加图标
    ["link", { rel: "epic-icon", type: "image/x-icon", href: "/favicon.ico" }],
  ],
  // 主题配置
  themeConfig: {
    logo: "https://examples.epicjs.cn/static/logo.png",
    algolia: {
      appId: "D2HVZWN04E",
      apiKey: "99ba99d14a34ec161f62dec1d1f303df",
      indexName: "epicjs",
    },
    editLink: {
      text: "为此页提供修改建议",
      pattern: "https://github.com/Kchengz/epic-designer/issues",
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/Kchengz/epic-designer" },
    ],
    footer: {
      copyright:
        `本文档内容版权为 EpicDesigner 作者所有，保留所有权利。<a class="beian-link" href="https://beian.miit.gov.cn/">桂ICP备17005529号-4</a>`,
    },
    nav: [
      {
        text: "文档",
        link: "/guide/start/index",
        activeMatch: "/guide/start/index",
      },
      { text: "更新日志", link: "/updateLog", activeMatch: "/updateLog" },
      {
        text: "权益声明",
        link: "/guide/copyright/copyright",
        activeMatch: "/copyright",
      },
      {
        text: "关于 | 赞助",
        link: "/guide/about/about",
        activeMatch: "/about",
      },
      // { text: "个人博客", link: "https://www.kcz66.com" },
      {
        text: "相关链接",
        items: [
          {
            text: "Vue3",
            link: "https://cn.vuejs.org/",
          },
          {
            text: "Vite",
            link: "https://cn.vitejs.dev/",
          },
          {
            text: "TypeScript",
            link: "https://www.typescriptlang.org/",
          },
        ],
      },
    ],
    sidebar: {
      "/guide/": [
        {
          text: "介绍",
          items: [
            {
              text: "简介",
              link: "/guide/start/index",
            },
            {
              text: "快速上手",
              link: "/guide/start/quick-start",
            },
            {
              text: "国际化",
              link: "/guide/start/i18n-cn",
            },
            {
              text: "定制主题",
              link: "/guide/start/theme",
            },
            {
              text: "暗黑模式",
              link: "/guide/start/dark-mode",
            },
          ],
        },
        {
          text: "组件",
          items: [
            {
              text: "Designer 设计器",
              link: "/guide/components/EDesigner",
            },
            {
              text: "Builder 生成器",
              link: "/guide/components/EBuilder",
            },
          ],
        },
        {
          text: "事件动作",
          items: [
            {
              text: "自定义函数",
              link: "/guide/action/customFunctions",
            },
          ],
        },
        {
          text: "扩展",
          items: [
            {
              text: "Icon 图标",
              link: "/guide/extensions/icon",
            },
            {
              text: "自定义组件",
              link: "/guide/extensions/component",
            },
            {
              text: "活动栏扩展",
              link: "/guide/extensions/activityBar",
            },
            {
              text: "右侧边栏扩展",
              link: "/guide/extensions/rightSidebar",
            },
            {
              text: "公共函数",
              link: "/guide/extensions/publicMethods",
            },
          ],
        },
        {
          text: "更多",
          items: [
            {
              text: "pluginManager 插件管理器",
              link: "/guide/utils/pluginManager",
            },
            {
              text: "pageManager 页面管理器",
              link: "/guide/utils/pageManager",
            },
          ],
        },
      ],
    },
  },
});
