<template>
    <el-container class="layout-container-demo" style="height: calc(100vh - 100px)">
      <el-aside width="200px">
        <el-scrollbar>
          <el-menu 
            :default-openeds="['2','3']"
            @select="handleSelect"
            >
            <el-menu-item index="All">
              <el-icon><House /></el-icon>
              <div>全部商品</div>
            </el-menu-item>
            <el-sub-menu index="2">
              <template #title>
                <el-icon><Watermelon /></el-icon>
                <div>蔬菜</div>
              </template>
              <el-menu-item index="Veg">
                <el-icon><ShoppingCartFull /></el-icon>
                <div>全部蔬菜</div>
              </el-menu-item>
              <el-menu-item-group>
              <template #title>本地蔬菜</template>
                <el-menu-item index="veglocal">
                  <el-icon><Location /></el-icon>
                  <div>本地蔬菜</div>
                </el-menu-item>
                <el-menu-item index="vegnotlocal">
                  <el-icon><DeleteLocation /></el-icon>
                  <div>非本地蔬菜</div>
                </el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="当季热销">
                <el-menu-item index="hot">
                  <el-icon><Sell /></el-icon>
                  <div>当季热销</div>
                </el-menu-item>
              </el-menu-item-group>
            </el-sub-menu>
            <el-sub-menu index="3">
              <template #title>
                <el-icon><DishDot /></el-icon>肉类
              </template>
              <el-menu-item index="meat">
                <el-icon><ShoppingCartFull /></el-icon>
                全部肉类
              </el-menu-item>
              <el-menu-item-group>
                <template #title>类型</template>
                <el-menu-item index="fresh">
                  <el-icon><ForkSpoon /></el-icon>
                  新鲜肉类
                </el-menu-item>
                <el-menu-item index="cooked">
                  <el-icon><Burger /></el-icon>
                  加工肉类
                </el-menu-item>
              </el-menu-item-group>
            </el-sub-menu>
          </el-menu>
        </el-scrollbar>
      </el-aside>
  
      <el-container>
        <el-header style="text-align: center; font-size: 12px; height: 160px">
          <el-text class="mx-1" size="large">购物平台</el-text><br>
          <el-input
            v-model="input"
            size="large"
            placeholder="Please Input"
            :suffix-icon="Search"
            class = "search"
            @keyup.enter="searchGoods()"
          />
        </el-header>
  
        <el-main class="layout-main">
          <el-scrollbar>
            <el-row :gutter="20">
              <el-col :span="4"  align="center" class="layout-card" v-for="item in data" :key="item.id" >
                <el-card :body-style="{ padding: '0px',height: '240px',}" style="border-radius: 15px;font-size: 16px;">
                  <template #header>{{ item.name }}</template>
                  <img :src="item.pic" class="image" style="height: 240px;width: 240px;"/>
                  <template #footer>
                    {{ item.price.toFixed(2) }}元<br>
                    <el-input-number class="number" v-model="num[item.name]" size="small" :min="0" placeholder="0" @change="handleInput(item.name)"/>
                  </template>
                </el-card>
              </el-col>
            </el-row>
          </el-scrollbar>
        </el-main>
      </el-container>
      
    </el-container>
  </template>
  
<script lang="ts" setup>
  import { ref, onBeforeMount, onBeforeUnmount } from 'vue'
  import { shoppingdata } from '@/assets/shoppingdata'
  import { Search } from '@element-plus/icons-vue'
  import { shoppingCar } from '../assets/shoppingCar'
  import { useCookies } from 'vue3-cookies';

  const { cookies } = useCookies();

  const car = ref()
  let data = ref(shoppingdata.value)
  const input = ref('')
  const num = ref({})
  
  function handleInput(item){
    const list = shoppingdata.value.filter(i => i.name === item)
    const list2 = car.value.car.filter(i => i.name === item)
    if( list2.length == 0) {
      let temp = {
        "name": item,
        "num": num.value[item],
        "price": (list[0].price * num.value[item]).toFixed(2)
      }
      car.value.car.push(temp)
    }
    else{
      list2[0].num = num.value[item]
      list2[0].price = (list[0].price * num.value[item]).toFixed(2)
    }
    console.log(car.value.car)
  }
  function searchGoods(){
    data.value = shoppingdata.value.filter(item => item.name.includes(input.value))
    input.value = ''
  }

  function createShoppingCar(){
    for(let i = 0; i < shoppingCar.value.length; i++){
      if(shoppingCar.value[i].name == cookies.get('user')){
        car.value = shoppingCar.value[i]
        for(let j = 0; j < car.value.car.length; j++){
          num.value[car.value.car[j].name] = car.value.car[j].num
        }
        return
      }
    }
    car.value = {
        "name": cookies.get('user'),
        "car" : []
    }
    num.value = {}
    shoppingCar.value.push(car.value)
  }

  function delZero(){
    console.log("func delZero")
    for(let key in car.value.car){
      if(car.value.car[key] == 0){
        delete car.value.car[key]
      }
    }
  }

  onBeforeUnmount(() => {
    delZero()
    console.log(num.value)
  })

  onBeforeMount(() => {
    createShoppingCar()
    console.log(num.value)
  })

  function myfilter(value, key){
    for(let i = 0; i < key.length; i++){
      console.log(value, key[i])
      if(key[i][0] == "!"){
        key[i] = key[i].slice(1);
        if(value.includes(key[i])){
            return false
        }
      }
      else{
        if(!value.includes(key[i])){
            return false
        }
      }
    }
    return true
  }

  const handleSelect = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
    if (key == "All") {
      data.value = shoppingdata.value
    }
    if ( key == "Veg") {
      data.value = shoppingdata.value.filter(item => myfilter(item.tag,["veg"]))
    }
    if ( key == "veglocal") {
      data.value = shoppingdata.value.filter(item => myfilter(item.tag,["veg","local"]))
    }
    if ( key == "vegnotlocal") {
      data.value = shoppingdata.value.filter(item => myfilter(item.tag,["veg","!local"]))
    }
    if( key == "hot"){
      data.value = shoppingdata.value.filter(item => myfilter(item.tag,["veg","hot"]))
    }
    if (key == "fresh"){
      data.value = shoppingdata.value.filter(item => myfilter(item.tag,["meat","fresh"]))
    }
    if (key == "cooked"){
      data.value = shoppingdata.value.filter(item => myfilter(item.tag,["meat","!fresh"]))
    }
    if (key == "meat"){
      data.value = shoppingdata.value.filter(item => myfilter(item.tag,["meat"]))
    }
  }
  
</script>
  
<style scoped>

  .mx-1{
    font-size: 50px;
    margin-bottom: 10px;
  }

  .search{
    width: 240px;
    transition-property: width;
    transition-duration: 0.5s;
    transition-timing-function: ease-in-out;
    margin-top: 20px;
  }

  .search:hover{
    width: 400px;
  }

  .number{
    margin-top: 15px;
  }

  .layout-main{
    margin-left: 20px;
  }

  .layout-card{
    margin-bottom: 20px;
  }

  .layout-container-demo .el-header {
    position: relative;
    color: var(--el-text-color-primary);
    padding-top: 10px;
  }
  .layout-container-demo .el-aside {
    color: var(--el-text-color-primary);
    border-right: solid 1px var(--el-border-color);
    
  }
  .layout-container-demo .el-menu {
    border-right: none;
  }
  .layout-container-demo .el-main {
    padding: 0;
  }

</style>