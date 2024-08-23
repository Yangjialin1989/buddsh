import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

//antd-design-vue 按需引入
import Components from 'unplugin-vue-components/vite'
import {AntDesignVueResolver} from "unplugin-vue-components/resolvers"
// https://vitejs.dev/config/
export default defineConfig({
  // server:{
  //   open:true,
  //   port:8088,
  //   host:'172.28.80.1'
  // },
  // devServer:{
  //   host:'0.0.0.0',
  //   https:false,
  //   open:true,
  //   disableHostCheck:true,
  // },
  plugins: [
    vue(),
    Components({
      resolvers:[AntDesignVueResolver()],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
