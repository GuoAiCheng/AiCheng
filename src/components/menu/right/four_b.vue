<template>
    <div class="fourtop">
        <div id="fourapp">
            <div class="head">
                <el-row :gutter="70" style="padding: 10px 10px 10px 10px;">
                    <el-col :span="6">
                        <el-input v-model="userInfo.name" placeholder="请输入你的公司名"></el-input>
                    </el-col>
                    <el-col :span="6">
                        <el-input v-model="userInfo.position" placeholder="请输入你的职位"></el-input>
                    </el-col>
                    <el-col :span="6">
                        <el-input v-model="userInfo.major" placeholder="请输入你的专业"></el-input>
                    </el-col>
                    <el-col :span="6">
                        <el-input v-model="userInfo.number" placeholder="请输入数量"></el-input>
                    </el-col>
                </el-row>
                <el-button type="primary" @click="addUser" class="add-btn" plain>添加信息</el-button>
            </div>
            <hr>
            <!-- 主体内容 -->
            <div class="body">
                <template>
                    <el-table :data="tableData" style="width: 100%">
                        <el-table-column label="序号" width="180"><template slot-scope="scope"> {{scope.$index + 1 }} </template></el-table-column>
                        <el-table-column prop="name" label="公司名称" width="180"></el-table-column>
                        <el-table-column prop="position" label="职位编"></el-table-column>
                        <el-table-column prop="major" label="产品名称"></el-table-column>
                        <el-table-column prop="number" label="数量"></el-table-column>
                        <el-table-column prop="birthday" label="操作">
                            <template slot-scope="scope">
                                <el-button type="primary" icon="el-icon-edit" @click="editUser(scope.row,scope.$index)" circle></el-button>
                                <el-button type="danger" icon="el-icon-delete" @click="delUser(scope.$index)" circle></el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </template>
            </div>
            <!-- 编辑框 -->
            <el-dialog title="编辑用户信息" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
                <div>
                    <el-form ref="form" :model="editObj" label-width="80px">
                        <el-form-item label="公司名"><el-input v-model="editObj.name"></el-input></el-form-item>
                        <el-form-item label="职位"><el-input v-model="editObj.position"></el-input></el-form-item>
                        <el-form-item label="产品"><el-input v-model="editObj.major"></el-input></el-form-item>
                        <el-form-item label="数量"><el-input v-model="editObj.number"></el-input></el-form-item>
                    </el-form>
                </div>
                <span slot="footer" class="dialog-footer">
                    <el-button @click="dialogVisible = false">取 消</el-button>
                    <el-button type="primary" @click="confirm">确 定</el-button>
                </span>
            </el-dialog>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                userInfo:{  
                        name:'',
                        position: '',
                        major: '',
                        number: '',
                    },
                    tableData: [{
                        name:'A公司',
                        position: '车间管理',
                        major: '产品A',
                        number: '2',
                    },{
                        name:'B公司',
                        position: '起重机',
                        major: '精密机械制造',
                        number: '12',
                    },{
                        name:'船公司',
                        position: '船锚部',
                        major: '船锚',
                        number: '4',
                    }
                    ],
                    dialogVisible: false,  
                    editObj:{
                        name:'',
                        position: '',
                        major: '',
                        number: '',
                    },
                    userIndex:0,
            }
        },
        methods:{
                //添加
                addUser(){
                    if(!this.userInfo.name){
                        this.$message({
                            message: '请输入公司名称',
                            
                        });
                        return;
                    }
                    if(!this.userInfo.position){
                        this.$message({
                            message: '请输入职位名称',
                            type: 'warning'
                        });
                        return;
                    }
                    if (!this.userInfo.major) {
                        this.$message({
                            message: '请输入产品名称',
                            type: 'warning'
                        });
                        return;
                    }
                    if (!this.userInfo.number) {
                        this.$message({
                            message: '请输入数量！',
                            type: 'warning'
                        });
                        return;
                    }

                    this.tableData.push(this.userInfo);
                    this.userInfo = { 
                        name:'',
                        position: '',
                        major: '',
                        number: '',
                    };
                },

                //删除
                delUser(idx){
                    this.$confirm('确认删除此用户信息？')
                        .then(_ => {
                            this.tableData.splice(idx, 1);
                        })
                        .catch(_ => {});
                },
                //编辑
                editUser(item,idx){
                    this.userIndex = idx;
                    this.editObj = {
                        name: item.name,
                        position: item.position,
                        major: item.major,
                        number: item.number,
                    };
                    this.dialogVisible = true;
                },

                handleClose(){
                    this.dialogVisible = false;
                },

                confirm(){
                    this.dialogVisible = false;
                    Vue.set(this.tableData, this.userIndex, this.editObj);
                }
        },
    }
</script>

<style lang="less" scoped>
.fourtop{
        width: 1040px;
        margin: 10px 10px 10px 10px;
        box-shadow: 0 0 5px rgb(169, 167, 167);
}
.add-btn{
            width: 90%;
            display: table;
            margin: auto;
        }
        .body{
            padding: 0 10px 0 10px;
        }
.head{
    padding: 10px 0 10px 0;
}
</style>