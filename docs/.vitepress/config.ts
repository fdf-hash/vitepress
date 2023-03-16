import { defineConfig } from 'vitepress'
import nav from './config/nav'
import sidebar from './config/slider'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: "FuDongFei",
  description: "A VitePress Site",
  base: '/',
  head: [
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: `/images/58969488.jpg`
      }
    ]
  ],
  themeConfig: {
    nav,

    sidebar,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/fdf-hash' }
    ],


    logo: '/images/58969488.jpg',
    
    footer: {
      message: 'VitePress 学习之路',
      copyright: 'Copyright © 2023-present Evan You'
    },

    docFooter: {
      prev: '上一节',
      next: '下一节'
    }
  },
})
