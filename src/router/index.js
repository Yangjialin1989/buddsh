import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Bulma from "@/views/Bulma.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'layout',
      component: ()=>import('../layout/Layout.vue'),
      //跳转路由
      redirect:'/home',
      //嵌套路由
      children:[
        {
          path: '/home',
          name: 'home',
          component:HomeView,
        },

        ]
    },
    {
      path: '/bulma',
      name: 'bulma',
      component:Bulma,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
