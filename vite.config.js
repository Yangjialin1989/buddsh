import { fileURLToPath, URL } from 'node:url'

import { defineConfig,loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

//antd-design-vue 按需引入
import Components from 'unplugin-vue-components/vite'
import {AntDesignVueResolver} from "unplugin-vue-components/resolvers"
// https://vitejs.dev/config/
export default defineConfig(({coomand,mode})=>{
  const env = loadEnv(mode,process.cwd(),'')

  return {
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
    },
    server:{
      //外网转发
      host:'0.0.0.0',

      //端口
      prot:env.VITE_APP_PROT,

      //代理
      proxy:{
        '/api':{
          // target:env.VITE_APP_API_BASEURL,
          target: 'http://127.0.0.1:8000/', // 目标服务器地址
          changeOrigin:true,
          rewrite:(path)=>path.replace(/^\/api/,'')
        }
      }


    }
  }

})



// export default defineConfig({
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
  // plugins: [
  //   vue(),
  //   Components({
  //     resolvers:[AntDesignVueResolver()],
  //   }),
  // ],
  // resolve: {
  //   alias: {
  //     '@': fileURLToPath(new URL('./src', import.meta.url))
  //   }
  // }
// })
