import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
//引入antd-desigin-vue 特别的组件message
import base from "@/base.js";



const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(base)
app.mount('#app')
