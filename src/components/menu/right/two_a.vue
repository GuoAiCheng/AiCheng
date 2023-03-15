<template>
    <div>
        <div class="first_box">
            <div class="first_box_1">
                <p class="first_box_p1">客户来源</p>
                <div id="first_box_e" class="first_box_e"></div>
            </div>
            <div class="first_box_2">
                <p class="first_box_p2">客户信息分析</p>
                <div>
                    <div>
                        <ul>
                            <li>30岁以下</li>
                            <li>30~60岁</li>
                            <li>60岁以上</li>
                        </ul>
                    </div>
                    <el-progress type="circle" :percentage="25"></el-progress>
                    <el-progress type="circle" :percentage="45"></el-progress>
                    <el-progress type="circle" :percentage="85"></el-progress>
                    <div>
                        <ul>
                            <li>224354人</li>
                            <li>142131人</li>
                            <li>112342人</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="second_box">
            <div class="second_box_1">
                <el-button type="primary" icon="el-icon-search">搜索</el-button>

                <el-button type="primary" @click="centerDialogVisible = true">添加用户</el-button>
                <el-dialog title="输入新用户信息" :visible.sync="centerDialogVisible" width="30%" center>
                    <!-- 输入框 -->
                    请输入姓名：<el-input placeholder="Please input" v-model="inp_name">{{ inp_name }}</el-input>
                    请输入手机号：<el-input placeholder="Please input" v-model="inp_number">{{ inp_number }}</el-input>
                    请输入注册时间：<el-input placeholder="Please input" v-model="inp_time">{{ inp_time }}</el-input>
                    请输入交易账号：<el-input placeholder="Please input" v-model="inp_pnum">{{ inp_pnum }}</el-input>
                    请输入提现金额：<el-input placeholder="Please input" v-model="inp_money">{{ inp_money }}</el-input>

                    <span slot="footer" class="dialog-footer">
                        <el-button @click="centerDialogVisible = false">取消</el-button>
                        <el-button type="primary" @click="add">提交</el-button>
                    </span>
                </el-dialog>
            </div>
            
            <div class="second_box_2">
                <el-table
                    :data="tableData"
                    style="width: 100%">
                    <el-table-column
                    fixed
                    prop="date"
                    label="日期"
                    width="150">
                    </el-table-column>
                    <el-table-column
                    prop="name"
                    label="姓名"
                    width="120">
                    </el-table-column>
                    <el-table-column
                    prop="state"
                    label="State"
                    width="120">
                    </el-table-column>
                    <el-table-column
                    prop="city"
                    label="交易账号"
                    width="120">
                    </el-table-column>
                    <el-table-column
                    prop="address"
                    label="地址"
                    width="260">
                    </el-table-column>
                    <el-table-column
                    prop="zip"
                    label="Zip"
                    width="120">
                    </el-table-column>
                    <el-table-column
                    fixed="right"
                    label="Operations"
                    width="120">
                    <template slot-scope="scope">
                        <el-button type="text" @click="handleClick" size="small">详情</el-button>
                        <el-button type="text" size="small">编辑</el-button>
                        <el-button @click.native.prevent="deleteRow(scope.$index, tableData)" type="text" size="small">删除</el-button>
                    </template>
                    </el-table-column>
                </el-table>

                <el-pagination
                    small
                    layout="prev, pager, next"
                    :total="60"
                    style="margin-left: 780px; margin-top: 20px; position: absolute;">
                </el-pagination>
            </div>
        </div>
    </div>
</template>

<script>
    import * as echarts from 'echarts';
    export default {
        data() {
            return {
                centerDialogVisible: false,
                input: '',
                tableData: [{
                    id:1,
                    date: '2016-05-03',
                    name: 'Tom',
                    state: 'California',
                    city: 'Los Angeles',
                    address: 'No. 189, Grove St, Los Angeles',
                    zip: 'CA 90036',
                    tag: 'Home'
                    }, {
                    id:2,
                    date: '2016-05-02',
                    name: 'Tom',
                    state: 'California',
                    city: 'Los Angeles',
                    address: 'No. 189, Grove St, Los Angeles',
                    zip: 'CA 90036',
                    tag: 'Office'
                    }, {
                    id:3,
                    date: '2016-05-04',
                    name: 'Tom',
                    state: 'California',
                    city: 'Los Angeles',
                    address: 'No. 189, Grove St, Los Angeles',
                    zip: 'CA 90036',
                    tag: 'Home'
                    }, {
                    id:4,
                    date: '2016-05-01',
                    name: 'Tom',
                    state: 'California',
                    city: 'Los Angeles',
                    address: 'No. 189, Grove St, Los Angeles',
                    zip: 'CA 90036',
                    tag: 'Office'
                    }],
                list:[

                ]
            };
        },
        mounted(){
            var myChart1 = echarts.init(document.getElementById('first_box_e'));
            var option1 = {
                xAxis: {
                    type: 'category',
                    data: ['小程序', '微信', '淘宝', '朋友圈', '抖音', '支付宝', '游戏']
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                    data: [20, 90, 100, 20, 70, 50, 60],
                    type: 'bar'
                    }
                ]
            };
            myChart1.setOption(option1);
        },
        methods:{
            handleClick() {
                alert("详情")
            },
            deleteRow(index, rows) {
                rows.splice(index, 1);
            },
        }
    }
</script>

<style lang="less" scoped>
    .first_box{
        position: relative;
        width: 1030px;
        height: 260px;
        margin: 10px 10px 10px 10px;
        box-shadow: 0 0 5px rgb(169, 167, 167);
        .first_box_1{
            float: left;
            // display: inline;
            width: 410px;
            height: 260px;
            .first_box_p1{
                width: 410px;
                height: 20px;
                background-color: rgb(248, 248, 248);
                padding: 0 0 0 10px;
            }
            .first_box_e{
                width: 410px;
                height: 240px;
            }
        }
        .first_box_2{
            margin-left: 10px;
            float: left;
            width: 610px;
            height: 260px;
            .first_box_p2{
                width: 610px;
                height: 20px;
                background-color: rgb(248, 248, 248);
                padding: 0 0 0 10px;
            }
            ul{
                li{
                    padding: 0 110px 10px 20px;
                    float: left;
                    list-style: none;
                }
            }
            .el-progress{
                padding: 0 28px 0 28px;
            }
        }
    }
    .second_box{
        box-shadow: 0 0 5px rgb(169, 167, 167);
        width: 1030px;
        height: 550px;
        margin: 10px 10px 10px 10px;
        .second_box_1{
            margin-left: 780px;
            padding-top: 10px;
        }
        .second_box_2{
            width: 1030px;
            height: 350px;
            .table{
                margin-left: 10px;
            }
        }
    }
</style>