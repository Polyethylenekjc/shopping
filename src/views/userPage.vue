<template>

<el-row :gutter="20" >
    <el-col :span="4" v-for="item in shoppingdata" align="center" class="layout-card">
    <el-card :body-style="{ padding: '0px',height: '240px',}" style="border-radius: 15px;font-size: 16px;">
        <template #header>{{ item.name }}</template>
        <img :src="item.pic" class="image" style="height: 240px;width: 240px;"/>
        <template #footer>
        {{ item.price }}元<br>
        <el-input-number class="number" v-model="item.number" size="small" />
        </template>
    </el-card>
    </el-col>
</el-row>
</template>

<script setup>

import { shoppingdata } from '@/assets/shoppingdata';

</script>

<style scoped>
    p{
        position: absolute;
        top: 50%;
        left: 50%;
    }
</style>
