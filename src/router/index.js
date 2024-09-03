import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Bulma from "@/views/Bulma.vue";
import Index from "@/views/Index.vue";
import CategoryView from "@/views/CategoryView.vue";
import ArticleDetail from "@/views/ArticleDetail.vue";
import SearchView from "@/views/SearchView.vue";

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
          //navbar分类页跳转
        {
          //传入动态id
          path:'/category/:id',
          name:'category',
          component:CategoryView
        },
        //详情页跳转
        {
          //传入动态id
          path:'/article/:id',
          name:'article',
          component:ArticleDetail
        },
        //全局搜索
        {
          //传入动态id
          path:'/search',
          name:'search',
          component:SearchView
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
