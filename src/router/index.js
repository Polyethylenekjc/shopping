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
      name: 'user',
      beforeEnter: (to, from) => {
        if (!cookies.isKey("user")) {
          alert("请先登录")
          return { name: 'login'}
        }
        else{
          return { path: '/userPage' }
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
      path: '/userPage',
      component: () => import('../views/userPage.vue'),
    },
    {
      path: '/shopping',
      component: () => import('../views/shopping.vue'),
    },
    {
      path : '/',
      redirect: '/shoppingApi',
    }
  ],
})

export default router
