<template>

    <div class="content">
        <el-text style="font-size: 80px;">
            Fifth
        </el-text><br>
        <el-text style="font-size: 18px;">
            你好{{ cookies.get('user') }}, 欢迎来到个人主页<br>
            很高兴在这里遇到你<br>
            这个项目总时长约为4天<br>
            <el-link style="font-size: 18px;" type="success" href="https://github.com/Polyethylenekjc/shopping">git仓库地址</el-link><br>
            祝你我都能开开心心每一天！
        </el-text>
    </div>
</template>

<script setup>

    import { useCookies } from 'vue3-cookies';
    const { cookies } = useCookies();
</script>

<style scoped>
    .content {
        left: 50%;
        top: 40%;
        position: absolute;
        transform: translate(-50%, -50%);
        text-align: center;
        letter-spacing: 2px; 
        line-height: 2;
    }
</style>