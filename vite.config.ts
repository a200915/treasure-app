import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// 拼接相对路径
import { resolve } from 'path'

function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir)
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // 共享选项配置
  resolve: {
    // 路径别名设置
    alias: [
      // /@/xxxx => src/xxxx
      {
        find: /\/@\//,
        replacement: pathResolve('src') + '/',
      },
      // /#/xxxx => types/xxxx
      {
        find: /\/#\//,
        replacement: pathResolve('types') + '/',
      },
    ],
  },
  // 服务器选项
    server: {
      host: true,
      port: 9527,
    },
  
})
