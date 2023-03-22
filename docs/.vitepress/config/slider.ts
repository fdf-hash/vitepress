import { DefaultTheme } from 'vitepress'

const sidebar: DefaultTheme.Sidebar = {
  '/start/': [
    {
      text: '演示1-1',
      items: [
        { text: '目录', link: '/start/' },
        { text: '按钮', link: '/start/common/button' },
        { text: '表单', link: '/start/common/form' },
        { text: 'P标签', link: '/start/common/p' },
        { text: 'A标签', link: '/start/common/a' },
      ]
    }
  ],
  '/code/':[
    {
      text: '代码示例',
      items: [
        {text:'代码示例',link:'/code/html/iphone'}
      ]
    },
  ],
  '/upgrade/': [
    {
      text: '演示2-1',
      items: [
        { text: '目录', link: '/upgrade/' },
        { text: '表格', link: '/upgrade/common/table' },
        { text: '图片', link: '/upgrade/common/image' },
      ]
    },
    {
      text: '演示2-2',
      items: []
    },
    {
      text: '演示2-3',
      items: []
    }
  ]
}

export default sidebar
