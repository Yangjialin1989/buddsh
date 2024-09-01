import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Bulma from "@/views/Bulma.vue";
import Index from "@/views/Index.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'layout',
      // component: ()=>import('../layout/Layout.vue'),
      //跳转路由
      redirect:'/index',
      //嵌套路由
      children:[
        {
          path: '/index',
          name: 'index',
          component:Index,
        },
        {
          path: '/bulma',
          name: 'bulma',
          component:Bulma,
        },
        {
          path: '/about',
          name: 'about',
          component: () => import('../views/AboutView.vue')
        }
        ]
    },


  ]
})

export default router
