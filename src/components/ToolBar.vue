<template>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      :ellipsis="false"
      @select="handleSelect"
    >
      <el-menu-item index="0" style="margin-right: auto;">
        <img
          style="width: 100px"
          src="https://element-plus.org/images/element-plus-logo.svg"
          alt="Element logo"
        />
      </el-menu-item>
      <el-menu-item index="shoppingCar">购物车</el-menu-item>
      <el-menu-item index="/shopping" >购物</el-menu-item>
      <el-menu-item index="login">注册登录</el-menu-item>
      <el-sub-menu index="User">
        <template #title>个人</template>
        <el-menu-item index="UserPage">个人主页</el-menu-item>
        <el-menu-item index="logout">登出</el-menu-item>
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