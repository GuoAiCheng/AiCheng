<template>
    <div>
        <div class="first">
            <div class="first_box1">
                <div class="first_b1">
                    <img src="../../../assets//image/daichuli.png" alt="" class="icon">
                    <p>14个</p>
                    <span>代办未处理</span>
                </div>
                <div class="first_b1" style="cursor: not-allowed;">
                    <img src="../../../assets//image/daichuli.png" alt="" class="icon">
                    <p>14个</p>
                    <span>代办未处理</span>
                </div>
                <div class="first_b1">
                    <img src="../../../assets//image/daichuli.png" alt="" class="icon">
                    <p>14个</p>
                    <span>代办未处理</span>
                </div>
                <div class="first_b1" style="cursor: not-allowed;">
                    <img src="../../../assets//image/daichuli.png" alt="" class="icon">
                    <p>14个</p>
                    <span>代办未处理</span>
                </div>
                <div class="first_b1">
                    <img src="../../../assets//image/daichuli.png" alt="" class="icon">
                    <p>14个</p>
                    <span>代办未处理</span>
                </div>
                <div class="first_b1">
                    <img src="../../../assets//image/daichuli.png" alt="" class="icon">
                    <p>14个</p>
                    <span>代办未处理</span>
                </div>
            </div>
    
            <div class="first_box2">
                <el-empty></el-empty>
            </div>
    
            <div class="first_box3">
                <div class="first_box3_a">
                    <span style="font-size: 14px;margin-left: 10px;">通知公告</span>
                    <span style="float: right; margin-right: 10px;"><a href="javascript:;">更多...</a></span>
                </div>
                <div class="first_box3_b">
                    <ul>
                        <a href="javascript:;" style="color: red;"><li>2022年全国最具竞争里的菠萝派品牌手机</li></a>
                        <a href="javascript:;"><li>2022年全国最具竞争里的菠萝派品牌手机</li></a>
                        <a href="javascript:;"><li>2022年全国最具竞争里的菠萝派品牌手机</li></a>
                        <a href="javascript:;"><li>2022年全国最具竞争里的菠萝派品牌手机</li></a>
                        <a href="javascript:;"><li>2022年全国最具竞争里的菠萝派品牌手机</li></a>
                        <a href="javascript:;"><li>2022年全国最具竞争里的菠萝派品牌手机</li></a>
                    </ul>
                </div>
            </div>
        </div>

        <div class="second">
            <div class="second_box_a">
                <p class="second_box1_1">今日销量</p>
                <div id="second_box1" class="second_box1"></div>
            </div>

            <div class="second_box_b">
                <el-tabs v-model="activeName" @tab-click="handleClick">
                    <el-tab-pane label="待办信息" name="first">
                        <ul>
                            <a href="javascript:;"><li>2022年全国最具竞争里的品牌手机</li></a>
                            <a href="javascript:;"><li>2022年全国最具竞争里的品牌手机</li></a>
                            <a href="javascript:;"><li>2022年全国最具竞争里的品牌手机</li></a>
                            <a href="javascript:;"><li>2022年全国最具竞争里的品牌手机</li></a>
                            <a href="javascript:;"><li>2022年全国最具竞争里的品牌手机</li></a>
                            <a href="javascript:;"><li>2022年全国最具竞争里的品牌手机</li></a>
                            <a href="javascript:;"><li>2022年全国最具竞争里的品牌手机</li></a>
                    </ul>
                    </el-tab-pane>
                    <el-tab-pane label="已办信息" name="second">Config...</el-tab-pane>
                    <el-tab-pane label="更多资料" name="third">Loding...</el-tab-pane>
                </el-tabs>
            </div>
        </div>

        <div class="third">
            <p class="third_box1_1">项目进度</p>
            <el-button @click="next">下一步</el-button>
            <el-steps :active="active" finish-status="success">
                <el-step title="Step 1"></el-step>
                <el-step title="Step 2"></el-step>
                <el-step title="Step 3"></el-step>
            </el-steps>
            <hr>
            <div class="third_left">
                <p>待受理事项：</p>
                <div>
                    <table class="table">
                        <thead>
                            <tr>
                                <th>产品</th>
                                <th>付款日期</th>
                                <th>状态</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>产品1</td>
                                <td>23/11/2013</td>
                                <td>待发货</td>
                            </tr>
                            <tr>
                                <td>产品2</td>
                                <td>23/11/2013</td>
                                <td>发货中</td>
                            </tr>
                            <tr>
                                <td>产品3</td>
                                <td>23/11/2013</td>
                                <td>已发货</td>
                            </tr>
                            <tr>
                                <td>产品4</td>
                                <td>23/11/2013</td>
                                <td>待发货</td>
                            </tr>
                            <tr>
                                <td>产品5</td>
                                <td>23/11/2013</td>
                                <td>待发货</td>
                            </tr>
                            <tr>
                                <td>产品6</td>
                                <td>23/11/2013</td>
                                <td>待发货</td>
                            </tr>
                            <tr>
                                <td>产品7</td>
                                <td>23/11/2013</td>
                                <td>退款中</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="third_right" id="third_right"></div>
        </div>
    </div>
</template>

<script>
    import * as echarts from 'echarts';
    export default {
        data() {
            return {
                activeName: 'first',
                active: 1
            }
        },
        mounted(){
            var myChart1 = echarts.init(document.getElementById('second_box1'));
            var myChart2 = echarts.init(document.getElementById('third_right'));
            var option1 = {
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                    type: 'shadow'
                    }
                },
                legend: {},
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: [
                    {
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                    }
                ],
                yAxis: [
                    {
                    type: 'value'
                    }
                ],
                series: [
                    {
                    name: 'Direct',
                    type: 'bar',
                    emphasis: {
                        focus: 'series'
                    },
                    data: [320, 332, 301, 334, 390, 330, 320]
                    },
                    {
                    name: 'Email',
                    type: 'bar',
                    stack: 'Ad',
                    emphasis: {
                        focus: 'series'
                    },
                    data: [120, 132, 101, 134, 90, 230, 210]
                    },
                    {
                    name: 'Union Ads',
                    type: 'bar',
                    stack: 'Ad',
                    emphasis: {
                        focus: 'series'
                    },
                    data: [220, 182, 191, 234, 290, 330, 310]
                    },
                    {
                    name: 'Video Ads',
                    type: 'bar',
                    stack: 'Ad',
                    emphasis: {
                        focus: 'series'
                    },
                    data: [150, 232, 201, 154, 190, 330, 410]
                    },
                    {
                    name: 'Search Engine',
                    type: 'bar',
                    data: [862, 1018, 964, 1026, 1679, 1600, 1570],
                    emphasis: {
                        focus: 'series'
                    },
                    markLine: {
                        lineStyle: {
                        type: 'dashed'
                        },
                        data: [[{ type: 'min' }, { type: 'max' }]]
                    }
                    },
                    {
                    name: 'Baidu',
                    type: 'bar',
                    barWidth: 5,
                    stack: 'Search Engine',
                    emphasis: {
                        focus: 'series'
                    },
                    data: [620, 732, 701, 734, 1090, 1130, 1120]
                    },
                    {
                    name: 'Google',
                    type: 'bar',
                    stack: 'Search Engine',
                    emphasis: {
                        focus: 'series'
                    },
                    data: [120, 132, 101, 134, 290, 230, 220]
                    },
                    {
                    name: 'Bing',
                    type: 'bar',
                    stack: 'Search Engine',
                    emphasis: {
                        focus: 'series'
                    },
                    data: [60, 72, 71, 74, 190, 130, 110]
                    },
                    {
                    name: 'Others',
                    type: 'bar',
                    stack: 'Search Engine',
                    emphasis: {
                        focus: 'series'
                    },
                    data: [62, 82, 91, 84, 109, 110, 120]
                }
                ],
            };
            var option2={
                // 饼图
                title: {
                    text: '产品销量比',
                    subtext: '日销量/年销量',
                    left: 'center'
                },
                tooltip: {
                    trigger: 'item'
                },
                legend: {
                    orient: 'vertical',
                    left: 'left'
                },
                series: [
                    {
                    name: 'Access From',
                    type: 'pie',
                    radius: '50%',
                    data: [
                        { value: 1048, name: '产品1'},
                        { value: 735, name: '产品2'},
                        { value: 580, name: '产品3'},
                        { value: 484, name: '产品4'},
                        { value: 300, name: '产品5'}
                    ],
                    emphasis: {
                        itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                    }
                ]
            };
            myChart1.setOption(option1);
            myChart2.setOption(option2)
        },
    methods:{
        handleClick(tab, event) {
        console.log(tab, event);
      },
      next() {
        if (this.active++ > 2) this.active = 0;
      }
    }
    
}
</script>

<style lang="less" scoped>
    a{
        text-decoration: none;
        color: rgb(82, 81, 81);
    }
    a:hover {
        text-decoration:none;
    }
    .first{
        width: 100%;
        overflow: hidden;
        padding-bottom: 5px;
        position: relative;
        .first_box1{
            float: left;
            margin-top: 10px;
            margin-left: 10px;
            width: 550px;//10x4 + 170x3
            height: 165px;//15x3 + 60x2
            box-shadow: 0 0 5px rgb(169, 167, 167);
            .first_b1{
                cursor: pointer;
                width: 170px;
                height: 75px;
                float: left;
                margin-left: 10px;
                margin-top: 5px;
                background-color: rgb(248, 248, 248);
                .icon{
                    width: 35px;
                    margin: 20px 20px 0 25px;
                    float: left;
                }
                p{
                    font-size: 12px;
                    margin: 20px 0 0 0;
                }
            }
        }
        .first_box2{
            // position: absolute;
            width: 165px;
            height: 165px;
            float: left;
            display: inline;
            margin-top: 10px;
            margin-left: 10px;
            background-color: rgb(248, 248, 248);
            box-shadow: 0 0 5px rgb(169, 167, 167);
            .el-empty{
                height: 165px;
                /deep/.el-empty__image{
                    width: 50px;
                    height: 50px;
                }
            }
        }
        .first_box3{
            box-shadow: 0 0 5px rgb(169, 167, 167);
            float: left;
            display: inline;
            margin-top: 10px;
            margin-left: 10px;
            margin-right: 10px;
            width: 298px;
            height: 165px;
            .first_box3_a{
                width: 298px;
                height: 20px;
                background-color: rgb(248, 248, 248);
            }
            .first_box3_b{
                margin-top: 10px;
            }
        }
    }
    .second{
        overflow: hidden;
        position: relative;
        height: 220px;
        width: 100%;
        .second_box_a{
            width: 780px;
            height: 200px;
            box-shadow: 0 0 5px rgb(169, 167, 167);
            float: left;
            display: inline;
            margin-top: 10px;
            margin-left: 10px;
            .second_box1_1{
                padding-left: 10px;
                width: 780px;
                background-color: rgb(248, 248, 248);
            }
            .second_box1{
                width: 780px;
                height: 170px;
                
            }
        }
        .second_box_b{
            float: left;
            display: inline;
            width: 243px;
            height: 200px;
            margin-top: 10px;
            margin-left: 10px;
            margin-right: 10px;
            
            box-shadow: 0 0 5px rgb(169, 167, 167);
            /deep/.el-tabs__item {
                line-height: 20px;
                font-size: 1px;
                height: 20px;
                left: 10px;
                padding: 0 10px 0 5px;
            }
            /deep/.el-tabs__nav-scroll{
                background-color: rgb(248, 248, 248);
            }
            /deep/.el-tabs__active-bar{
                left: 10px;
            }
            ul{
                margin-left: -20px;
            }
            li{
                list-style: none;
            }
        }
    }
    .third{
        width: 1033px;
        height: 500px;
        overflow: hidden;
        position: relative;
        box-shadow: 0 0 5px rgb(169, 167, 167);
        top: 5px;
        left: 10px;
        right: 10px;
        margin-bottom: 10px;
        .third_box1_1{
            padding-left: 10px;
            width: 1033px;
            background-color: rgb(248, 248, 248);
        }
        .el-steps {
            padding: 0 20px 0 50px;
        }
        .el-button{
            float: left;
            margin-left: 10px;
        }
        .third_left{
            width: 505px;
            height: 370px;
            float: left;
            display: inline;
            margin-left: 10px;
        }
        .third_right{
            width: 505px;
            height: 370px;
            float: left;
            display: inline;
            padding: 40px 0 0 30px;
        }
    }
</style>