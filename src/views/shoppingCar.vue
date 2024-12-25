<template>
    
    <div class="common-layout">
    <el-container align="center">
      <el-header style="height: 60px;">
        <el-text class="mx-1" style="font-size: 40px;">
            <el-icon><GoodsFilled /></el-icon>
            购物车
        </el-text>
      </el-header>
        <el-main>
            <div style="padding-left: calc(50% - 340px);">
                <el-table 
                    :data="car.car" 
                    style="width: 680px;height: 650px;"
                    show-summary
                    :summary-method="getSummaries"
                    @selection-change="handleSelectionChange"
                >
                    <el-table-column fixed type="selection" width="80" />
                    <el-table-column prop="name" label="品名" width="150" />
                    <el-table-column prop="num" label="数量" width="150" />
                    <el-table-column prop="price" label="价格" width="150" />
                    <el-table-column label="选项" width="150">
                    <template #default="scope">
                        <el-button size="small" @click="handleEdit(scope.$index, scope.row)" ref="buttonRef">
                            Edit
                        </el-button>
                        <el-button
                            size="small"
                            type="danger"
                            @click="handleDelete(scope.$index, scope.row)"
                        >
                            Delete
                        </el-button>
                    </template>
                    </el-table-column>
                </el-table>
            </div>
        </el-main>
    </el-container>
  </div>
</template>
    
<style scoped>
    .common-layout{
        margin-top: 200px;
        width: 800px;
        position: absolute;
        height: 800px;
        top: 30%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    el-header{
        border: 1px solid var(--el-border-color);;
    }
</style>

<script lang="ts" setup>
    import { ElTable } from 'element-plus'
    import { shoppingCar } from '@/assets/shoppingCar'
    import { shoppingdata } from '@/assets/shoppingdata'
    import { onBeforeMount, ref } from 'vue'
    import { useCookies } from 'vue3-cookies'
    const { cookies } = useCookies()
    const selectData = ref([])
    const car = ref()
    
    function handleDelete(index, row) {
        car.value.car = car.value.car.filter(i => i.name !== row.name)
    }

    function handleEdit(index, row) {
        console.log(index, row)
        var n = prompt("请输入更改数量")
        while(isNaN(n)||n<0){
            n = prompt("输入非法数字,请重新输入")
        }
        if(n == null)
            return
        if(n == 0){
            car.value.car = car.value.car.filter(i => i.name !== row.name)
            return
        }
        row.num = n
        row.price = (row.num * shoppingdata.value.filter(i => i.name === row.name)[0].price).toFixed(2)
    }
    function handleSelectionChange(selection) {
    selectData.value = selection.map(item => item)
    }

    function getSummaries(val){
        const { columns, data } = val;
        const sums = [];
        columns.forEach((column, index) => {
            if (index === 0) {
                sums[index] = '合计';
                return;
            }
            let values = []
            if (selectData.value.length===0){
                values = data.map(item => Number(item[column.property]));
            }
            else{
                values = selectData.value.map(item => Number(item[column.property]));
            }

            console.log(values)

            if (!values.every(value => isNaN(value))){
                sums[index] = values.reduce((prev, curr) =>{
                    const temp = Number(curr);
                    let sum =Number(Number(prev) + Number(curr));
                    if (!isNaN(temp)) {
                        return sum;
                    } 
                    else {
                        return prev;
                    }
                }, 0);
                if(index === 3){
                    sums[index] = sums[index].toFixed(2);
                    sums[index] += ' 元';
                }
                if(index === 2){
                    sums[index] += ' 件';
                } 
            }
            else{
                sums[index] = '';
            }
        })
        return sums
    }

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

</script>
