<template>
    <div>
        <Top :name="username"></Top>
        <div class="home2">
           <LeftHome></LeftHome>
        </div>
        <div class="home3">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import Top from '../menu/top/top.vue'
    import LeftHome from '../menu/left/lefthome.vue'
    
    export default {
        data(){
            return{
                username:'admin'
            }
        },
        components:{
            Top,
            LeftHome,
        },
    }
</script>

<style lang="less" scoped>
    .home2{
        float: left;
    }
    .home3{
        top: 50px;
        position: absolute;
        // position: relative;
        left: 210px;
    }
</style>