<template>
    <div class="five_b">
        <div class="five_b1">
            <el-row :gutter="20">
                <el-col :span="6">
                    <div>
                        <el-statistic group-separator="," :precision="2" :value="value2" :title="title"></el-statistic>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div>
                        <el-statistic title="Gender Distribution">
                            <template slot="formatter"> 456/2 </template>
                        </el-statistic>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div>
                        <el-statistic group-separator="," :precision="2" decimal-separator="." :value="value1"
                            :title="title">
                            <template slot="prefix">
                                <i class="el-icon-s-flag" style="color: red"></i>
                            </template>
                            <template slot="suffix">
                                <i class="el-icon-s-flag" style="color: blue"></i>
                            </template>
                        </el-statistic>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div>
                        <el-statistic :value="like ? 521 : 520" title="Feedback">
                            <template slot="suffix">
                                <span @click="like = !like" class="like">
                                    <i class="el-icon-star-on" style="color:red" v-show="!!like"></i>
                                    <i class="el-icon-star-off" v-show="!like"></i>
                                </span>
                            </template>
                        </el-statistic>
                    </div>
                </el-col>
            </el-row>
        </div>

        <div class="five_b2">
            <el-empty :image-size="250"></el-empty>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            like: true,
            value1: 4154.564,
            value2: 2222,
            title: 'Growth this year',
        };
    },
}
</script>

<style lang="less" scoped>
.five_b {
    width: 1030px;
    margin: 10px 10px 10px 10px;
    box-shadow: 0 0 5px rgb(169, 167, 167);
}
.five_b1 {
    box-shadow: 0 0 1px rgb(169, 167, 167);
}

.like {
    cursor: pointer;
    font-size: 25px;
    display: inline-block;
}
.five_b2{
    padding: 10px 0 0 0x;
    height: 500px;
}
</style>