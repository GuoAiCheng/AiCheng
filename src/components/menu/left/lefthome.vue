<template>
    <div class="leftstyle">
        <el-container>
            <el-aside width="210px">
                <el-menu :default-openeds="['1']">
                
                <el-menu-item index="8">
                <i class="el-icon-price-tag"></i>
                <router-link to="/home/one_c" style="color: black;">首页</router-link>
                </el-menu-item>

                <el-submenu index="1">
                    <template slot="title"><i class="el-icon-s-home"></i>部门和岗位管理</template>
                    <el-menu-item index="1-1"><router-link to="/home/one_a">部门管理</router-link></el-menu-item>
                    <el-menu-item index="1-2"><router-link to="/home/one_b">车间管理</router-link></el-menu-item>
                </el-submenu>

                <el-submenu index="2">
                    <template slot="title"><i class="el-icon-s-custom"></i>用户和权限管理</template>
                    <el-menu-item index="2-1"><router-link to="/home/two_a">用户数据</router-link></el-menu-item>
                    <el-menu-item index="2-2"><router-link to="/home/two_b">分工日历</router-link></el-menu-item>
                    <el-submenu index="2-4">
                    <template slot="title">超级用户</template>
                    <el-menu-item index="2-4-1"><router-link to="/home/two_c">添加用户</router-link></el-menu-item>
                    <el-menu-item index="2-4-2"><router-link to="/home/two_d">找回密码</router-link></el-menu-item>
                    <el-menu-item index="2-4-3"><router-link to="/home/two_e">修改密码</router-link></el-menu-item>
                    </el-submenu>
                </el-submenu>
                
                <el-submenu index="3">
                    <template slot="title"><i class="el-icon-truck"></i>生产管理</template>
                    <el-menu-item index="3-1"><router-link to="/home/three_a">上报计划</router-link></el-menu-item>
                    <el-menu-item index="3-2"><router-link to="/home/three_b">审批进度</router-link></el-menu-item>
                </el-submenu>

                <el-submenu index="4">
                    <template slot="title"><i class="el-icon-cpu"></i>原材料和配件管理</template>
                    <el-menu-item-group>
                    <template slot="title">原材料采购计划</template>
                    <el-menu-item index="4-1"><router-link to="/home/four_a">材料一览</router-link></el-menu-item>
                    <el-menu-item index="4-2"><router-link to="/home/five_a">销售</router-link></el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group title="配件采购计划">
                    <el-menu-item index="4-3"><router-link to="/home/five_b">水印</router-link></el-menu-item>
                    <el-menu-item index="4-4"><router-link to="/home/five_c">证件电子签名</router-link></el-menu-item>
                    </el-menu-item-group>
                </el-submenu>

                <el-menu-item index="5">
                    <i class="el-icon-money"></i>
                    <router-link to="/home/four_b" style="color: black;">车间人员管理</router-link>
                </el-menu-item>

                <el-menu-item index="6">
                    <i class="el-icon-price-tag"></i>
                    <router-link to="/home/four_c" style="color: black;">销售动态管理</router-link>
                </el-menu-item>
                </el-menu>
            </el-aside>
    </el-container>
    </div>
</template>

<script>
    export default {
        data() {
            return {

            }
        }
    }
</script>

<style lang="less" scoped>
    .leftstyle{
        // position: relative;
        margin-top: 50px;
        position: fixed;
        overflow-y: hidden;
        z-index: 1;
    }
    a{
        text-decoration: none;
        color:rgb(100, 99, 99);
        font-size: 10px;
    }
    a:hover{
        text-decoration:none;
    }
    .el-aside{
        height: 568px;
        width:250px;
        background-color: #FFF;
        border: 1px solid rgb(210, 210, 210);
        position: relative;
    }
    .el-menu{
        background-color: #FFF;
        transition: border-color .3s,background-color .3s,color .3s;
    }
    /deep/.el-submenu__title{
        font-size: 12px;
        i{
            font-size: 12px;
        }
    }
    /deep/.el-menu-item{
        font-size: 12px;
        i{
            font-size: 12px;
        }
    }
</style>
