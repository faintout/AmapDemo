
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const path = require('path')
const target_server = "http://172.17.35.25:29890/"
// const target_server = "http://172.17.13.101:29890/"

const viteConfig = {
    // 端口号(默认3000)
    port: 3005,
    // 是否自动打开浏览器(默认false)
    open: true,
    // 是否开启 https
    // https: false,
    // 服务端渲染
    // ssr: false,
    // 引入第三方的配置
    optimizeDeps: {
        include: ["element-plus/lib/locale/lang/zh-cn"]
    },
    // 生产环境路径，类似webpack的assetsPath
    base: './',
    // 打包后目录,默认dist
    outDir: 'dist',
    // 别名配置
    resolve:{
        alias: {
            // 键必须以斜线开始和结束
            '@': path.resolve(__dirname, 'src')
        },
    },
    // 代理配置
    server: {
        compress: true,//配置热更新
        host:'0.0.0.0',
        proxy: {
            '/api': {
                target: target_server,
                changeOrigin: true,
                // rewrite: path => path.replace(/^\/board/, "")
            },
            
        },
        fs: {
            strict: false
          }
    },
}
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    ...viteConfig
})
