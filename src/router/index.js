import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Bulma from "@/views/Bulma.vue";
import Index from "@/views/Index.vue";
import CategoryView from "@/views/CategoryView.vue";
import ArticleDetail from "@/views/ArticleDetail.vue";
import SearchView from "@/views/SearchView.vue";
import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";

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
    {
      path:'/login',
      name:'login',
      component:Login
    },
    {
      path:'/register',
      name:'register',
      component:Register
    }


  ]
})
// 路由守卫
router.beforeEach((to, from, next) => {
  // 可以进行身份验证、权限检查等操作
  // ...

  // 必须调用next()来resolve这个钩子。
  // 它可以接受一个路径作为参数来强制跳转到另一个路径
  next()
})






export default router
