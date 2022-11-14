import { defineConfig } from "vitepress";
export default defineConfig({
  // 网站标题
  title: "KDesigner",
  // 网站描述
  description: "低代码可视化设计器及生成器",
  lang: "zh-CN",

  // 打包目录
  head: [
    // 添加图标
    ["link", { rel: "icon", href: "/favicon.ico" }],
  ],
  // 主题配置
  themeConfig: {
    editLink: {
      text: "为此页提供修改建议",
      pattern: "https://gitee.com/kcz66",
    },
    socialLinks: [{ icon: "github", link: "https://gitee.com/kcz66" }],
    footer: {
      copyright: "本文档内容版权为 KDesigner 作者所有，保留所有权利。",
    },
    nav: [
      { text: "指引", link: "/guide/start/", activeMatch: "/guide/start/" },
      { text: "更新日志", link: "/updateLog/", activeMatch: "/updateLog/" },
      { text: "个人博客", link: "https://www.kcz66.com" },
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
      "/components": [
        {
          text: "引导",
          items: [
            {
              text: "开始",
              link: "/guide/start/index",
            },
            {
              text: "开始3",
              link: "/guide/start/index",
            },
          ],
        },
        {
          text: "引导",
          items: [
            {
              text: "开始",
              link: "/guide/start/index",
            },
            {
              text: "开始3",
              link: "/guide/start/index",
            },
          ],
        },
      ],
    },
  },
});
