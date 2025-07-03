import { defineConfig } from 'vitepress';

export default defineConfig({
  base: '/',
  // 网站描述
  description: '低代码可视化设计器及生成器',
  // 打包目录
  head: [
    // 添加图标
    ['link', { href: '/favicon.ico', rel: 'epic-icon', type: 'image/x-icon' }],
  ],
  lang: 'zh-CN',
  sitemap: {
    hostname: 'https://docs.epicjs.cn',
  },
  // 主题配置
  themeConfig: {
    algolia: {
      apiKey: '99ba99d14a34ec161f62dec1d1f303df',
      appId: 'D2HVZWN04E',
      indexName: 'epicjs',
    },
    editLink: {
      pattern: 'https://github.com/Kchengz/epic-designer/issues',
      text: '为此页提供修改建议',
    },
    footer: {
      copyright: `本文档内容版权为 EpicDesigner 作者所有，保留所有权利。<a class="beian-link" href="https://beian.miit.gov.cn/">桂ICP备17005529号-4</a>`,
    },

    logo: 'https://examples.epicjs.cn/static/logo.png',
    nav: [
      {
        activeMatch: '/guide/start/index',
        link: '/guide/start/index',
        text: '文档',
      },
      { activeMatch: '/updateLog', link: '/updateLog', text: '更新日志' },
      {
        activeMatch: '/copyright',
        link: '/guide/copyright/copyright',
        text: '权益声明',
      },
      {
        activeMatch: '/about',
        link: '/guide/about/about',
        text: '关于 | 赞助',
      },
      // { text: "个人博客", link: "https://www.kcz66.com" },
      {
        text: '相关链接',
        items: [
          {
            link: 'https://cn.vuejs.org/',
            text: 'Vue3',
          },
          {
            link: 'https://cn.vitejs.dev/',
            text: 'Vite',
          },
          {
            link: 'https://www.typescriptlang.org/',
            text: 'TypeScript',
          },
        ],
      },
    ],
    sidebar: {
      '/guide/': [
        {
          text: '介绍',
          items: [
            {
              link: '/guide/start/index',
              text: '简介',
            },
            {
              link: '/guide/start/quick-start',
              text: '快速上手',
            },
            {
              link: '/guide/start/i18n-cn',
              text: 'UI组件国际化',
            },
            {
              link: '/guide/start/theme',
              text: '定制主题',
            },
            {
              link: '/guide/start/dark-mode',
              text: '暗黑模式',
            },
            {
              link: '/guide/other/hotkeys',
              text: '快捷键',
            },
          ],
        },
        {
          text: '组件',
          items: [
            {
              link: '/guide/components/EDesigner',
              text: 'Designer 设计器',
            },
            {
              link: '/guide/components/EBuilder',
              text: 'Builder 生成器',
            },
          ],
        },
        {
          text: '事件动作',
          items: [
            {
              link: '/guide/action/customFunctions',
              text: '自定义函数',
            },
          ],
        },
        {
          text: '扩展',
          items: [
            {
              link: '/guide/extensions/icon',
              text: 'Icon 图标',
            },
            {
              link: '/guide/extensions/component',
              text: '自定义组件',
            },
            {
              link: '/guide/extensions/activityBar',
              text: '活动栏扩展',
            },
            {
              link: '/guide/extensions/rightSidebar',
              text: '右侧边栏扩展',
            },
            {
              link: '/guide/extensions/publicMethods',
              text: '公共函数',
            },
          ],
        },
        {
          text: '更多',
          items: [
            {
              link: '/guide/utils/pluginManager',
              text: 'pluginManager 插件管理器',
            },
            {
              link: '/guide/utils/pageManager',
              text: 'pageManager 页面管理器',
            },
          ],
        },
      ],
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Kchengz/epic-designer' },
    ],
  },
  // 网站标题
  title: 'EpicDesigner文档',
});
