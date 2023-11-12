import { defineConfig } from 'vite'
import { resolve } from "path"
// 提供 Vue 3 单文件组件支持,在插件中使用
import vue from '@vitejs/plugin-vue'
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'


// UnoCSS
import UnoCSS from 'unocss/vite'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), UnoCSS(), , VueI18nPlugin({
    runtimeOnly: true,
    compositionOnly: true,
    fullInstall: true,
    include: [resolve(__dirname, 'src/locales/lang/**')],
  })],
  resolve: {
    alias: {
      //文件系统路径的别名, 绝对路径
      "@": resolve(__dirname, "src"),
      "/imgs": "./src/assets/imgs",
    },
    // 使用路径别名时想要省略的后缀名
    extensions: ['.js', '.json', '.ts', '.vue']
  },

  base: './',//打包的路径
  server: {
    port: 4000,//服务端口号
    open: true,//服务启动时自动打开浏览器
    cors: true//允许跨域

  },
  build: {
    chunkSizeWarningLimit: 2000, // 消除打包大小超过500kb警告
    minify: "terser", // Vite 2.6.x 以上需要配置 minify: "terser", terserOptions 才能生效
    terserOptions: {
      compress: {
        keep_infinity: true, // 防止 Infinity 被压缩成 1/0，这可能会导致 Chrome 上的性能问题
        drop_console: true, // 生产环境去除 console
        drop_debugger: true, // 生产环境去除 debugger
      },
      format: {
        comments: false, // 删除注释
      },
    },
  },
})
