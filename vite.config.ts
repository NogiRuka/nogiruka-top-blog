import { defineConfig } from 'vite'
// 提供 Vue 3 单文件组件支持,在插件中使用
import vue from '@vitejs/plugin-vue'
import { resolve } from "path"

// UnoCSS
import UnoCSS from 'unocss/vite'


// https://vitejs.dev/config/
// defineConfig 工具函数，这样不用 jsdoc 注解也可以获取类型提示
export default defineConfig({
  plugins: [vue(), UnoCSS(),],
  resolve: {
    alias: {
      //文件系统路径的别名, 绝对路径
      "@": resolve(__dirname, "src"),
    },
    // 使用路径别名时想要省略的后缀名
    // 不建议忽略自定义导入类型的扩展名（例如：.vue）
    // 因为它会影响 IDE 和类型支持。
    extensions: ['.js', '.json', '.ts']
  },

  base: './',//打包的路径
  server: {
    port: 4000,//服务端口号
    open: true,//服务启动时自动打开浏览器
    cors: true//允许跨域

  }
})
