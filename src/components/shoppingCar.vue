<template>
    <el-table 
        :data="car.car" 
        style="width: 595px;"
        show-summary
    >
        <el-table-column type="selection" width="55" />
        <el-table-column prop="name" label="品名" width="180" />
        <el-table-column prop="num" label="数量" width="180" />
        <el-table-column prop="price" label="价格" width="180" />
    </el-table>
</template>

<script lang="ts" setup>
    import { ElTable } from 'element-plus'
    import { shoppingCar } from '@/assets/shoppingCar'
    import { shoppingdata } from '@/assets/shoppingdata'
    import { onBeforeMount, ref } from 'vue'
    import { useCookies } from 'vue3-cookies'
    const { cookies } = useCookies()
    const selectData = ref("Null")
    const car = ref()

    function createShoppingCar(){
        console.log("createShoppingCar")
        for(let i = 0; i < shoppingCar.value.length; i++){
            if(shoppingCar.value[i].name == cookies.get('user')){
                car.value = shoppingCar.value[i]
                return
            }
        }
        car.value = {
        }
    }

    onBeforeMount(() => {
        createShoppingCar()
        console.log(car.value)
    })

    interface User {
        date: string
        name: string
        address: string
    }
    const tableData: User[] = [
    {
        date: '2016-05-04',
        name: 'Aleyna Kutzner',
        address: 'Lohrbergstr. 86c, Süd Lilli, Saarland',
    },
    {
        date: '2016-05-03',
        name: 'Helen Jacobi',
        address: '760 A Street, South Frankfield, Illinois',
    },
    {
        date: '2016-05-02',
        name: 'Brandon Deckert',
        address: 'Arnold-Ohletz-Str. 41a, Alt Malinascheid, Thüringen',
    },
    {
        date: '2016-05-01',
        name: 'Margie Smith',
        address: '23618 Windsor Drive, West Ricardoview, Idaho',
    },
    ]
</script>
