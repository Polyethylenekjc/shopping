<script setup>
import { ref } from 'vue'
import {  useRouter } from 'vue-router';
import { useCookies } from 'vue3-cookies';

const { cookies }   = useCookies()
const username      = ref("")
const password      = ref("")
const passwordagain = ref("")
const islogin       = ref(true)
const isregister    = ref(false)
const msgUser       = ref("用户名")
const msgPass       = ref("密码")
const router        = useRouter()
const temp          = ref()

function nowlogin() {
    islogin.value    = true
    isregister.value = false
}

function nowregister() {
    islogin.value    = false
    isregister.value = true
}

function SignUpkAndjump() {
    var flag    = false
    temp.value  = "请输入"
    if (username.value == "") {
        temp.value  = temp.value+"用户名"
        flag        = true
    }
    if (password.value == "") {
        temp.value  = temp.value+"密码"
        flag        = true
    }
    if (flag) {
        alert(temp.value)
    }
    if (password.value != passwordagain.value) {
        temp.value  = "两次密码不一致"
        alert(temp.value)
        return
    }
    if (!flag) {
        alert("注册成功")
        islogin.value    = true
        isregister.value = false
    }
}

function checkAndjump() {
    var flag    = false
    temp.value  = "请输入"
    if (username.value == "") {
        temp.value  = temp.value+"用户名"
        flag        = true
    }
    if (password.value == "") {
        temp.value  = temp.value+"密码"
        flag        = true
    }
    if (flag) {
        alert(temp.value)
    }
    if (!flag) {
        if (cookies.isKey('user')) {
            cookies.remove('user')
        }
        cookies.set('user', username.value, '1h')
        console.log(cookies.get('user'))
        router.push({
            path: '/shopping',
            replace: true,
        })
    }
}

</script>

<template>
    <div class="content">
        <div class="left">
        </div>
        <div class="center">
            <h3>登录注册</h3>
            <div class="login-area">
                <div class="tab">
                    <li :class="islogin ? 'active' : 'noactive'">
                        <button type="button" @click="nowlogin">
                            登录
                        </button>
                    </li>
                    <li :class="isregister ? 'active' : 'noactive'">
                        <button type="button" @click="nowregister">
                            注册
                        </button>
                    </li>
                </div>
                <div class="tab-con" v-if="islogin">
                    <div class="item">
                        <div class="inp">
                            <p>{{ msgUser }}</p>
                            <input v-model="username" type="text" 
                                placeholder="请输入用户名">
                        </div>
                        <div class="inp_password">
                            <p>{{ msgPass }}</p>
                            <input v-model="password" type="password" 
                                placeholder="请输入密码"
                                @keyup.enter="checkAndjump">
                        </div>
                    </div>
                    <div class="login_button">
                        <button type="button" class="niceButton" 
                            @click="checkAndjump">
                            登录
                        </button>
                    </div>
                </div>
                <div class="tab-con" v-if="isregister">
                    <div class="item">
                        <div class="inp">
                            <p>{{ msgUser }}</p>
                            <input v-model="username" type="text" 
                                placeholder="请输入用户名">
                        </div>
                        <div class="inp_password">
                            <p>{{ msgPass }}</p>
                            <input v-model="password" type="password" 
                                placeholder="请输入密码">
                        </div><br>
                        <div class="inp_password">
                            <p>再次输入密码</p>
                            <input v-model="passwordagain" type="password" 
                                placeholder="请再次输入密码"
                                @keyup.enter="SignUpkAndjump">
                        </div>
                    </div>
                    <div class="login_button">
                        <button type="button" class="niceButton" 
                            @click="SignUpkAndjump">
                            注册
                        </button>
                    </div>
                </div>
                <p class="Welcome">Welcome!</p>
            </div>
        </div>
    </div>
</template> 

<style scoped>
    @import '@/assets/login.css';
    @import '@/assets/commoon.css';
    .el-alert {
        max-width: 400px !important;
    }
    .el-alert:first-child {
        margin: 0;
        position:relative;
    }
    .alert{
        position: absolute;
        top: 1%;
        left: 50%;
        border-radius: 10px;
    }
</style>