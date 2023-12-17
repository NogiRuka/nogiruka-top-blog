import { resolve } from 'node:path'
import { defineConfig, loadEnv } from 'vite'
import Vue from '@vitejs/plugin-vue'
import VueRouter from 'unplugin-vue-router/vite'
import Layouts from 'vite-plugin-vue-layouts'
import UnoCSS from 'unocss/vite'
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'

// https://vitejs.dev/config/
export default defineConfig((env) => {
  // 获取到当前开发模式（dev/pro）下对应的环境文件对象值
  const evnMap = loadEnv(env.mode, process.cwd())
  console.log(`evnMap = ${JSON.stringify(evnMap)}`);
  return {
    plugins: [
      VueRouter({
        dataFetching: true,
        extensions: ['.vue', '.md'],
        dts: './typed-router.d.ts',
      }),
      Layouts(),
      Vue(),
      UnoCSS(),
      VueI18nPlugin({
        runtimeOnly: true,
        compositionOnly: true,
        fullInstall: true,
        include: [resolve(__dirname, 'src/locales/lang/**')],
      }),
    ],
    resolve: {
      alias: {
        // 文件系统路径的别名, 绝对路径
        '@': resolve(__dirname, 'src'),
        '#': resolve(__dirname, 'types'),
        '/imgs': './src/assets/imgs',
      },
      // 使用路径别名时想要省略的后缀名
      extensions: ['.js', '.json', '.ts', '.vue'],
    },

    base: './', // 打包的路径
    server: {
      port: 4000, // 服务端口号
      open: true, // 服务启动时自动打开浏览器
      cors: true, // 允许跨域
      // 设置代理，根据我们项目实际情况配置
      proxy: {
        [evnMap.VITE_APP_PROXY_BASE_API]: {
          target: 'https://api.notion.com', //目标源，目标服务器，真实请求地址
          changeOrigin: true, //是否跨域
          // rewrite: (path) => path.replace(/^\/api/, ''), //重写真实路径,替换/api
          rewrite: (path) => path.replace(new RegExp('^' + evnMap.VITE_APP_PROXY_BASE_API), ''), // 重写真实路径,替换/api

          bypass: (req, res, options) => {
            const proxyUrl = options.target + options.rewrite(req.url)
            console.log(`真实请求的完整地址proxyUrl: ${proxyUrl}`)
          },
        },
      },
    },
    build: {
      target: ['edge90', 'chrome90', 'firefox90', 'safari15'],
      chunkSizeWarningLimit: 2000, // 消除打包大小超过500kb警告
      minify: 'terser', // Vite 2.6.x 以上需要配置 minify: "terser", terserOptions 才能生效
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
  }
})
