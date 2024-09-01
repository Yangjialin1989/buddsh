import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
//自定义全局方法
import isMobile from '@/global/utils/isMobile.js'
//字体图标 框架
// import 'font-awesome/css/font-awesome.css'
import 'font-awesome/css/font-awesome.min.css';
// main.js 或 main.ts
import 'bulma/css/bulma.min.css';
// import "@fortawesome/fontawesome-free/css/all.css"


import router from './router'
//引入antd-desigin-vue 特别的组件message
import base from "@/base.js";



const app = createApp(App)
//全局方法
app.config.globalProperties.$utils = {
    ISMOBILE:isMobile
}
app.config.globalProperties.globalInfo = {
    theme:"light"
}







app.use(createPinia())
app.use(router)
app.use(base)
app.mount('#app')
