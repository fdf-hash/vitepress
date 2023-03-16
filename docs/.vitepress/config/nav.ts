import { DefaultTheme } from 'vitepress'

const navbar: DefaultTheme.NavItem[] = [
    { text: '首页', link: '/' },
    { text: '演示1', link: '/demo1/', activeMatch: '/demo1/' },
    {
        text: '演示2',
        items: [
            { text: '表格', link: '/demo2/common/table' },
            { text: '图片', link: '/demo2/common/image' },
        ]
    }
]

export default navbar
