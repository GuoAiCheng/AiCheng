<template>
    <div class="two_c">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
            <el-form-item label="上传大头贴" prop="img">
                <el-upload action="#" list-type="picture-card" :auto-upload="false">
                    <i slot="default" class="el-icon-plus"></i>
                    <div slot="file" slot-scope="{file}">
                        <img class="el-upload-list__item-thumbnail" :src="file.url" alt="">
                        <span class="el-upload-list__item-actions">
                            <span class="el-upload-list__item-preview" @click="handlePictureCardPreview(file)">
                                <i class="el-icon-zoom-in"></i>
                            </span>
                            <span v-if="!disabled" class="el-upload-list__item-delete" @click="handleDownload(file)">
                                <i class="el-icon-download"></i>
                            </span>
                            <span v-if="!disabled" class="el-upload-list__item-delete" @click="handleRemove(file)">
                                <i class="el-icon-delete"></i>
                            </span>
                        </span>
                    </div>
                </el-upload>
                <el-dialog :visible.sync="dialogVisible">
                    <img width="100%" :src="dialogImageUrl" alt="">
                </el-dialog>
                <i style="font-size:5px;color: tomato;">/* 要求：1000px *1000px</i>
            </el-form-item>

            <el-form-item label="姓名" prop="name">
                <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>

            <el-form-item label="性别" prop="region">
                <el-select v-model="ruleForm.region" placeholder="请选择您的性别">
                    <el-option label="男" value="shanghai"></el-option>
                    <el-option label="女" value="beijing"></el-option>
                </el-select>
            </el-form-item>

            <el-form-item label="报工时间" required>
                <el-col :span="11">
                    <el-form-item prop="date1">
                        <el-date-picker type="date" placeholder="Pick a date" v-model="ruleForm.date1"
                            style="width: 100%;"></el-date-picker>
                    </el-form-item>
                </el-col>
                <el-col class="line" :span="2">-</el-col>
                <el-col :span="11">
                    <el-form-item prop="date2">
                        <el-time-picker placeholder="Pick a time" v-model="ruleForm.date2"
                            style="width: 100%;"></el-time-picker>
                    </el-form-item>
                </el-col>
            </el-form-item>

            <el-form-item label="Instant delivery" prop="delivery">
                <el-switch v-model="ruleForm.delivery"></el-switch>
            </el-form-item>

            <el-form-item label="小组状态" prop="type">
                <el-checkbox-group v-model="ruleForm.type">
                    <el-checkbox label="待申请" name="type"></el-checkbox>
                    <el-checkbox label="已报工" name="type"></el-checkbox>
                    <el-checkbox label="审批中" name="type"></el-checkbox>
                    <el-checkbox label="任务中" name="type"></el-checkbox>
                </el-checkbox-group>
            </el-form-item>
            <el-form-item label="报工表" prop="resource">
                <el-radio-group v-model="ruleForm.resource">
                    <el-radio label="已交付"></el-radio>
                    <el-radio label="未交付"></el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="留言反馈" prop="desc">
                <el-input type="textarea" v-model="ruleForm.desc"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            dialogImageUrl: '',
            dialogVisible: false,
            disabled: false,

            ruleForm: {
                name: '',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: ''
            },
            rules: {
                name: [
                    { required: true, message: 'Please input Activity name', trigger: 'blur' },
                    { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' }
                ],
                region: [
                    { required: true, message: 'Please select Activity zone', trigger: 'change' }
                ],
                date1: [
                    { type: 'date', required: true, message: 'Please pick a date', trigger: 'change' }
                ],
                date2: [
                    { type: 'date', required: true, message: 'Please pick a time', trigger: 'change' }
                ],
                type: [
                    { type: 'array', required: true, message: 'Please select at least one activity type', trigger: 'change' }
                ],
                resource: [
                    { required: true, message: 'Please select activity resource', trigger: 'change' }
                ],
                desc: [
                    { required: true, message: 'Please input activity form', trigger: 'blur' }
                ]
            }
        };
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert('submit!');
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        },
        handleRemove(file) {
            console.log(file);
        },
        handlePictureCardPreview(file) {
            this.dialogImageUrl = file.url;
            this.dialogVisible = true;
        },
        handleDownload(file) {
            console.log(file);
        }
    }
}
</script>

<style lang="less" scoped>
.two_c {
    width: 1030px;
    margin: 10px 10px 10px 10px;
    box-shadow: 0 0 5px rgb(169, 167, 167);
}

.demo-ruleForm {
    padding: 10px 10px 10px 10px;
}
</style>