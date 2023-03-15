<template>
    <div class="fivectop">
        <div>
            <span :key="key"></span>
        </div>
        <avue-sign ref="sign"></avue-sign>
        <div class="prima">
            <el-button type="primary"
                @click="handleSubmit">生成</el-button>
            <el-button type="danger"
                    @click="$refs.sign.getStar('财务用章','果冻程前端开发','123456')">图章</el-button>
            <el-button @click="$refs.sign.clear()">清空</el-button>
        </div>
        <div>
            <img :src="img"
                id="img"
                alt=""
                width="200"
                height="200" />
        </div>
    </div>
</template>
<script>
  export default {
    data () {
      return {
        img: '',
        key:0,
      }
    },
    methods: {
      handleSubmit () {
        this.img = this.$refs.sign.submit(80, 50);
        // console.log(this.img)
      }
    }
  }
</script>
<style>
    .fivectop{
        width: 1030px;
        margin: 10px 10px 10px 10px;
        box-shadow: 0 0 5px rgb(169, 167, 167);
    }
    .prima{
        margin-left: 250px;
        padding: 10px 20px 20xp 10px;
    }
    .avue-sign__canvas {
        border: 1px solid #ccc;
        width: 710px;
        height: 342px;
    }
    #img{
        position: absolute;
        margin-left: 750px;
        margin-top: -350px;
    }
    .el-button--primary{
        margin: 10px 0 10px 0;
    }
</style>