/*
 * @Author: whj
 * @Date: 2023-01-29 16:31:57
 * @LastEditors: whj
 * @LastEditTime: 2023-02-24 09:26:56
 * @FilePath: /cat-kit/docs/.vitepress/plugins/demo-plugin.ts
 *
 */
import type { PluginOption } from 'vite'
import path from 'path'
import fs from 'fs'
import { cwd } from 'process'

// 该插件的作用是往md文件中插入一个vue的script标签脚本
// vitepress检测到这个脚本时会将其作为每一个vue模板的公共script来用
// 详细查看此文档: https://vitepress.vuejs.org/guide/using-vue#script-style-hoisting
export function DemoPlugin(): PluginOption {
  return {
    name: 'md-transform',
    enforce: 'pre',
    async transform(code, id) {
      
      if (!id.endsWith('.md')) return

      const docsPath = path.resolve(cwd(), 'docs')
      const examplesPath = path.resolve(docsPath, 'example')

      // 当前md文件相对于docs目录的路径
      const modulePath = id.split('docs/')[1]!.replace(/\.md/, '')
      // 是否存在目标demo文件
      const hasDemos = fs.existsSync(path.resolve(examplesPath, modulePath))
      if (!hasDemos) return
      // 导入模块下的所有vue文件
      const script = `<script setup>
        const demos = import.meta.glob('/example/${modulePath}/*.vue', { eager: true })
        </script>\n`
      
      // 返回一个相对该md文件的相对路径的
      return `${script} ${code}`
    }
  }
}

/**
 * 这段代码是一个 Vite 插件，它的作用是在 Markdown 文件中插入一个 Vue 的 <script> 标签脚本，以便 VitePress 检测到该脚本并将其作为每个 Vue 模板的公共 script 来使用。具体来说，这个插件会根据 Markdown 文件的路径自动导入该文件夹下所有的 Vue 文件，并将其绑定到一个 demos 变量上。

具体解释如下：

首先，这个插件导入了 vite 的 PluginOption 接口和 path、fs、cwd 等 Node.js 自带的模块。

然后，该插件的返回值是一个对象，该对象包含了插件的名称 name 和插件的执行顺序 enforce，以及 transform 函数，该函数会在构建过程中被执行。

在 transform 函数中，首先通过判断传入的 id 参数是否以 .md 结尾，如果不是，则直接返回不做处理；否则，获取当前 Markdown 文件相对于 docs 目录的路径，并检查是否存在与其同名的 Vue 文件夹。如果不存在，则同样返回不做处理。

接着，使用 import.meta.glob 方法来动态导入目标文件夹下所有的 Vue 文件，并将其绑定到一个 demos 变量上。import.meta.glob 方法接受一个 glob 模式作为参数，并返回一个包含所有匹配文件路径的对象，每个路径都可以通过动态导入方式加载。

最后，将获取到的 demos 变量插入到 Markdown 文件的头部，并返回一个新的字符串。这个新字符串就是原 Markdown 文件的内容加上自动生成的 Vue <script> 脚本。
 */