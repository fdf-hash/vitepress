import { DefaultTheme } from 'vitepress'

const navbar: DefaultTheme.NavItem[] = [
    { text: '首页', link: '/' },
    { text: '演示1', link: '/start/', activeMatch: '/start/' },
    {
        text: '演示2',
        items: [
            { text: '表格', link: '/upgrade/common/table' },
            { text: '图片', link: '/upgrade/common/image' },
        ]
    },
    { text: '代码', link: '/code/', activeMatch: '/code/' },
]

export default navbar
