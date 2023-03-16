import { DefaultTheme } from 'vitepress'

const sidebar: DefaultTheme.Sidebar = {
  '/demo1/': [
    {
      text: '演示1-1',
      items: [
        { text: '目录', link: '/demo1/' },
        { text: '按钮', link: '/demo1/common/button' },
        { text: '表单', link: '/demo1/common/form' },
        { text: 'P标签', link: '/demo1/common/p' },
        { text: 'A标签', link: '/demo1/common/a' },
      ]
    },
    {
      text: '演示1-2',
      items: []
    },
    {
      text: '演示1-3',
      items: []
    }
  ],
  '/demo2/': [
    {
      text: '演示2-1',
      items: [
        { text: '目录', link: '/demo2/' },
        { text: '表格', link: '/demo2/common/table' },
        { text: '图片', link: '/demo2/common/image' },
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
