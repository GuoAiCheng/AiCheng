<template>
    <div class="five_a">
        <h3 class="five_h fmodel">销售数据一栏表</h3>
        <div class="five_d fmodel">
            <el-form :inline="true" class="demo-form-inline">
                <el-form-item label="产品编号:">
                    <el-input v-model="input" placeholder="请输入产品编号"></el-input>
                </el-form-item>
                <el-form-item label="产品名称:">
                    <el-input v-model="val" placeholder="请输入产品名称"></el-input>
                </el-form-item>
                <el-form-item label="生产部门:">
                    <el-input v-model="model" placeholder="请输入生产部门"></el-input>
                </el-form-item>
                <el-form-item label="员工编号:">
                    <el-input v-model="nums" placeholder="请输入员工编号"></el-input>
                </el-form-item>
                <el-form-item label="员工姓名:">
                    <el-input v-model="name" placeholder="请输入员工姓名"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="clickAdd">提交</el-button>
                </el-form-item>
            </el-form>
            <!-- </div> -->
            <div class="heard_search_bottom">
                <span>图书总数：{{ bookTotal }}</span>
            </div>

            <template>
                <el-table :data="bookList" border style="width: 100%">
                    <el-table-column prop="number" label="产品编号" width="90" style="text-algin:center"></el-table-column>
                    <el-table-column prop="user" label="产品名称" width="150"></el-table-column>
                    <el-table-column prop="model" label="生产部门" width="150"></el-table-column>
                    <el-table-column prop="nums" label="员工编号" width="150"></el-table-column>
                    <el-table-column prop="name" label="员工姓名" width="150"></el-table-column>
                    <el-table-column prop="time" label="时间" width="160"></el-table-column>
                    <el-table-column label="操作">
                        <template slot-scope="scope">
                            <el-button size="mini" @click="clickEdit(scope.$index)">编辑</el-button>
                            <el-button size="mini" type="danger" @click="clickDel(scope.$index)">删除</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </template>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            input: "", //输入的内容(序号)
            val: "", //  输入的名称
            model:"",
            nums:"",
            name:"",
            flag: false, //编辑的状态
            bookList: JSON.parse(window.localStorage.getItem("bookList")) || [],
            //存放管理数据
        };
    },
    methods: {
        clickAdd() {
            if (this.flag) {
                this.bookList.forEach(item => {//遍历数组
                    if (item.number === this.input) {//如果遍历数组中的序列号和输入的序列号一样
                        item.user = this.val;//那么将输入的名称，赋值给遍历对应的名称
                    }
                });
                this.input = "";//清空输入内容
                this.val = "";//清空输入内容
                this.model="",
                this.nums="",
                this.name="",
                this.save();//保存到本地
                this.flag = false;
            } else {
                // 判断输入的内容不能为空
                if (this.input.length !== 0 && this.val !== 0) {
                    var rel = true;
                    // 判断去重
                    this.bookList.forEach((item) => {//遍历数组
                        //如果遍历数组中的序列号和输入的序列号一样，或者遍历数组中的名称和输入的图书名称一致
                        if (item.number == this.input || item.user == this.val) {
                            this.$message("该名称已存在");//已存在
                            rel = false;
                            return false;
                        }
                    });

                    if (rel) {//添加
                        this.bookList.push({
                            number: this.input,
                            user: this.val,
                            model:this.model,
                            nums:this.nums,
                            name:this.name,

                            time: new Date().toLocaleString(),
                        });
                    }
                    this.input = "";//添加后清空
                    this.val = "";//添加后清空
                    this.model="",
                    this.nums="",
                    this.name="",
                    this.save();//保存到本地
                } else {
                    //   输入为空的提示
                    this.$alert("输入的编号或名称不能为空", "提示", {
                        confirmButtonText: "确定",
                        callback: () => { },
                    });
                }
            }
        },
        clickEdit(index) {
            //点击修改
            this.flag = true;
            var updateData = this.bookList[index];
            this.input = updateData.number;
            this.val = updateData.user;
            this.model = updateData.model;
            this.nums = updateData.nums;
            this.name = updateData.name;
        },
        clickDel(index) {
            //删除
            this.bookList.splice(index, 1);
            this.save();
        },

        save() {//保存到本地（封装的save方法）
            // localStorage.bookList=JSON.stringify(this.bookList);
            window.localStorage.setItem("bookList", JSON.stringify(this.bookList));
        },
    },
    computed: {//计算属性
        bookTotal() {//总数
            return this.bookList.length;
        }
    },
};
</script>

<style lang="less" scoped>
    .five_a{
        margin: 10px 10px 0 10px;
        width: 1040px;
        height: 100%;
        box-shadow: 0 0 5px rgb(169, 167, 167);
    }
    .fmodel{
        padding: 10px 10px 10px 10px;
    }
    /deep/.el-form-item__content{
        width: 170px;
    }
</style>