<template>
    <div class="layout-header-container d-flex justify-content-between align-items-center p-3">
        <h4 class="layout-header-left-title ml-3">🍊果冻程吖~</h4>
        <p>{{name}}，欢迎回来！！！</p>
         <!-- 右侧按钮区域 -->
        <div class="layout-header-right">
            <button type="button" class="btn btn-light" @click="logout">退出登录</button>
        </div>
    </div>
</template>

<script>
    export default {
        props:[
            "name"
        ],
        methods:{
            logout(){
            // 清空token
            localStorage.removeItem('token')
            // 跳转到登录页面
            this.$router.push('/login')
            }
        }
    }
</script>

<style lang="less" scoped>
    .layout-header-container {
        width: 100%;
        height: 50px;
        border-bottom: 1px solid #eaeaea;
        font-family: "montserrat";
        background-image: linear-gradient(55deg,#ffffff,#e2f5fc,#f1d8f5,#f6edf3);  
        background-size:500%;
        animation: bganimation 20s infinite;
        position: fixed;
        overflow-y: hidden;
        z-index: 1;
        top: 0;
    }
</style>