<template>
    <div>
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="账号">
                <el-input v-model="form.account"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input v-model="form.password"></el-input>
            </el-form-item>
            <el-button type="primary" @click="onSubmit">立即创建</el-button>
        </el-form>
    </div>
</template>
<script>
export default {
    data() {
        return {
            form: {
                account: '',
                password: ''
            },
            rules: {
                account: [{
                    required: true, message: '请输入账号', trigger: 'blur'
                }],
                password: [{
                    required: true, message: '请输入密码', trigger: 'blur'
                }]
            }
        }
    },
    methods: {
        onSubmit() {
            console.log(this.form);
        }
    },
};
</script>
<style lang="scss" scoped></style>