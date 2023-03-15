<template>
    <div class="two_b">
        <el-calendar v-model="value"></el-calendar>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: new Date()
        }
    },
    methods:{
        handclick(){
            alert('已添加')
        }
    }
}
</script>

<style lang="less" scoped>
.two_b{
    width: 1030px;
    margin: 10px 10px 10px 10px;
    box-shadow: 0 0 5px rgb(169, 167, 167);
}
</style>