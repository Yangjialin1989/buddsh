import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'

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

app.use(createPinia())
app.use(router)
app.use(base)
app.mount('#app')
