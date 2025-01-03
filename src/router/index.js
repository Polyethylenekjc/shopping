import { createRouter, createWebHistory } from 'vue-router'
import login from '@/views/login.vue'
import { useCookies } from "vue3-cookies"
const { cookies } = useCookies()

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login,
    },
    {
      path: '/userPageApi',
      name: 'userApi',
      beforeEnter: (to, from) => {
        if (!cookies.isKey("user")) {
          alert("请先登录")
          return { name: 'login'}
        }
        else{
          return { path: '/userHome' }
        }
      }
    },
    {
      path: '/shoppingApi',
      name: 'shopping',
      beforeEnter: (to, from) => {
        if (!cookies.isKey("user")) {
          alert("请先登录")
          return { name: 'login'}
        }
        else{
          return { path: '/shopping' }
        }
      }
    },
    {
      path: '/userHome',
      component: () => import('@/views/userHome.vue'),
    },
    {
      path: '/',
      redirect: '/userHome',
    },
    {
      path: '/shopping',
      component: () => import('@/views/shopping.vue'),
    },
    {
      path: '/shoppingCarApi',
      name: 'shoppingCar',
      beforeEnter: (to, from) => {
        if (!cookies.isKey("user")) {
          alert("请先登录")
          return { name: 'login'}
        }
        else{
          return { path: '/shoppingCar' }
        }
      }
    },
    {
      path: '/shoppingCar',
      component: () => import('@/views/shoppingCar.vue'),
    },
    { path: "/:catchAll(.*)", redirect: "/login" }
  ],
})

export default router
