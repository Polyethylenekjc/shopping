<template>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      :ellipsis="false"
      @select="handleSelect"
    >
      <el-menu-item index="0" style="margin-right: auto;">
        <el-text>
          <el-icon><ShoppingCartFull /></el-icon>
          Fifth的购物平台
        </el-text>
      </el-menu-item>
      <el-menu-item index="/shopping" ><el-icon><WalletFilled /></el-icon>购物</el-menu-item>
      <el-menu-item index="shoppingCar"><el-icon><ShoppingCart /></el-icon>购物车</el-menu-item>
      <el-menu-item index="login"><el-icon><Finished /></el-icon>注册登录</el-menu-item>
      <el-sub-menu index="User">
        <template #title><el-icon><User /></el-icon>个人</template>
        <el-menu-item index="UserPage"><el-icon><Edit /></el-icon>个人主页</el-menu-item>
        <el-menu-item index="logout"><el-icon><TurnOff /></el-icon>登出</el-menu-item>
      </el-sub-menu> 
    </el-menu>
  </template>
  
<script lang="ts" setup>
  import { ref, inject } from 'vue'
  import { useRouter } from 'vue-router'
  import { useCookies } from 'vue3-cookies';
  
  const router       = useRouter()
  const activeIndex  = ref('1')
  const { cookies }       = useCookies()

  const handleSelect = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
    if (key == "/shopping") {
      router.push({
        name : 'shopping',
        replace: true,
      })
    }
    if (key == "shoppingCar") {
      router.push({
        name : 'shoppingCar',
        replace: true,
      })
    }
    if (key == "UserPage") {
      router.push({
        name : 'user',
        replace: true,
      })
    }
    if (key == "login") {
      router.push({
        path: '/login',
        replace: true,
      })
    }
    if (key == "logout") {
      cookies.remove('user')
      alert("退出成功")
      router.push({
        path: '/login',
        replace: true,
      })
    }
  }
</script>
  
<style scoped>
.router-link{
  text-decoration: none;
}
</style>