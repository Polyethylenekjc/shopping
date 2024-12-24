<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue';
import ToolBar from './components/ToolBar.vue';
const id = ref(0)
</script>

<template>
  <nav>    
    <ToolBar/>
  </nav>
  <div class="content">
    <RouterView />
  </div>
</template>

<style scoped>
  nav {
    width: 100%;
    height: 100px;
    top: 0%;
    left: 0%;
    position: absolute;
  }

  .content {
    margin-top: 65px;
  }

</style>