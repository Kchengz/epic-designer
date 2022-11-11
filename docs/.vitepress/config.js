export default {
    // 网站标题
    title: 'Interview222',
    // 网站描述
    description: 'Interview with vitePress',
    // 打包目录
    dest: './dist',
    head: [
        // 添加图标
        ['link', { rel: 'icon', href: '/favicon.ico' }]
    ],
    // 主题配置
    themeConfig: {
        // 获取每个文件最后一次 git 提交的 UNIX 时间戳(ms)，同时它将以合适的日期格式显示在每一页的底部
        // lastUpdated: 'Last Updated', // string | boolean
        // 启动页面丝滑滚动
        smoothScroll: true,
        // 导航栏配置
        nav: [
            { text: '个人博客', link: 'https://www.kcz66.com' },
            { text: 'Github', link: 'https://github.com/kcz66' }
        ],
        sidebar: [
        ]
    }
}
