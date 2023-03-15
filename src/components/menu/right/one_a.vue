<template>
    <div>
        <div class="first_box">
            <p class="first_box_p">部门任务</p>
            <div class="fboxs">
                <div class="first_box_1 boxs">
                    <div style="float: left;">
                        <p>待申请</p>
                        <p>总数量：10/100</p>
                    </div>
                    <img src="../../../assets/image/daichuli.png" alt="" style="width: 90px;float: right;">
                </div>
                <div class="first_box_2 boxs">
                    <div style="float: left;">
                        <p>待提交</p>
                        <p>总数量：10/100</p>
                    </div>
                    <img src="../../../assets/image/daichuli.png" alt="" style="width: 90px;float: right;">
                </div>
                <div class="first_box_3 boxs">
                    <div style="float: left;">
                        <p>待审核</p>
                        <p>总数量：10/100</p>
                    </div>
                    <img src="../../../assets/image/daichuli.png" alt="" style="width: 90px;float: right;">
                </div>
                <div class="first_box_4 boxs">
                    <div style="float: left;">
                        <p>已审核</p>
                        <p>总数量：10/100</p>
                    </div>
                    <img src="../../../assets/image/daichuli.png" alt="" style="width: 90px;float: right;">
                </div>
            </div>
        </div>
        <div class="second_box">
            <div style="padding: 10px 10px 10px 10px;">
                <avue-crud :option="option" :data="data" v-model:page="page" @on-load="onLoad"></avue-crud>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            page: {
                pageSize: 20
            },
            option: {
                excelBtn: true,
                border: true,
                index: true,
                expandLevel: 3,
                headerAlign: 'center',
                align: 'center',
                tree: true,
                labelWidth: 100,
                column: [{
                    width: 130,
                    label: '姓名',
                    prop: 'name',
                    display: false
                }, {
                    label: '性别1',
                    prop: 'sex',
                    display: false
                },
                {
                    label: '自定义图标',
                    prop: 'icon',
                    type: "icon",
                    iconList: [{
                        label: '基本图表',
                        list: ['el-icon-time', 'el-icon-bell', 'el-icon-star-on']
                    }],
                    display: false
                }, {
                    label: '多级表头',
                    display: false,
                    children: [{
                        label: '信息',
                        display: false,
                        children: [{
                            label: '年龄',
                            prop: 'age',
                            display: false
                        }, {
                            label: '手机号',
                            prop: 'phone',
                            display: false
                        }]
                    }, {
                        label: '级别',
                        prop: 'grade',
                        type: 'select',
                        display: false,
                        dicData: [{
                            label: '测试',
                            value: 1
                        }]
                    }]
                }, {
                    label: '测试',
                    prop: 'test',
                    display: false
                }],
                group: [{
                    label: '用户信息',
                    prop: 'jbxx',
                    icon: 'el-icon-edit-outline',
                    column: [
                        {
                            label: '姓名',
                            prop: 'name'
                        },
                        {
                            label: '年龄',
                            prop: 'age'
                        }
                    ]
                }, {
                    label: '其他信息',
                    prop: 'jbxxs',
                    icon: 'el-icon-edit-outline',
                    column: [
                        {
                            label: '级别',
                            prop: 'grade',
                            type: 'select',
                            dicData: [{
                                label: '测试',
                                value: 1
                            }]
                        },
                        {
                            label: '手机信息',
                            prop: 'phone'
                        },
                        {
                            label: '自定义图标',
                            prop: 'icon',
                            type: "icon",
                            iconList: [{
                                label: '基本图表',
                                list: ['el-icon-time', 'el-icon-bell', 'el-icon-star-on']
                            }]
                        },
                    ]
                }]
            },
            data: [{
                id: '1',
                name: '张三',
                age: 14,
                grade: 1,
                phone1: '17547400800',
                phone: '17547400800',
                icon: 'el-icon-time',
                test: 1,
                sex: '男',
                children: [{
                    id: '2',
                    name: '李四',
                    age: 20,
                    grade: 1,
                    sex: '男',
                    test: 1,
                    phone1: '17547400800',
                    phone: '17547400800',
                    icon: 'el-icon-bell',
                    children: [{
                        id: '3',
                        name: '王五',
                        age: 10,
                        grade: 1,
                        test: 1,
                        sex: '女',
                        icon: 'el-icon-star-on',
                        phone1: '17547400800',
                        phone: '17547400800'
                    }]
                }]
            }, {
                id: '4',
                name: '王五',
                age: 10,
                grade: 1,
                test: 1,
                sex: '女',
                icon: 'el-icon-star-on',
                phone1: '17547400800',
                phone: '17547400800'
            },
            {
                id: '5',
                name: '小Q',
                age: 10,
                grade: 1,
                test: 1,
                sex: '女',
                icon: 'el-icon-star-on',
                phone1: '17547400800',
                phone: '17547400800'
            }]
        }
    },
    methods: {
        onLoad(page) {
            //模拟分页
            this.page.total = 40
        }
    }
}
</script>

<style lang="less" scoped>
.first_box {
    margin: 10px 10px 0 10px;
    width: 1030px;
    height: 180px;
    box-shadow: 0 0 5px rgb(169, 167, 167);

    .first_box_p {
        width: 1030px;
        height: 20px;
        background-color: rgb(248, 248, 248);
        padding-left: 10px;
    }

    .boxs {
        width: 240px;
        height: 130px;
        float: left;
        display: inline;
        box-shadow: 0 0 1px rgb(169, 167, 167);
        margin-left: 15px;

        p {
            margin: 30px 20px 10px 10px;
        }

        img {
            margin: 15px 10px 10px 10px;
        }
    }

}

.second_box {
    box-shadow: 0 0 5px rgb(169, 167, 167);
    width: 1030px;
    height: 400px;
    margin: 10px 10px 10px 10px;
}
</style>