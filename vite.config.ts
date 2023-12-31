import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// 拼接相对路径
import { resolve } from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { viteMockServe } from 'vite-plugin-mock';

function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir)
}

// https://vitejs.dev/config/
export default defineConfig(({command, mode}) => {
  
  return {
  
    plugins: [
      vue(),
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
      viteMockServe({
        mockPath: './src/mock',
        localEnabled: command === 'serve',
        supportTs: true,
        prodEnabled: false,
        logger: false
      })
    ],
    // 共享选项配置
    resolve: {
      // 路径别名设置
      alias: [
        // /@/xxxx => src/xxxx
        {
          find: /@\//,
          replacement: pathResolve('src') + '/',
        },
        // /#/xxxx => types/xxxx
        {
          find: /#\//,
          replacement: pathResolve('types') + '/',
        },
      ],
    },
    // 服务器选项
      server: {
        host: true,
        port: 9527,
      },
    }
})
