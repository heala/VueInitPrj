<template>
    <div class="login">
        <div class="login_box">
            <h1>登陆</h1>
            <div class="login_form">
                <el-form :model="loginForm" :rules="loginRules" ref="loginForm" >
                    <el-form-item prop="username">
                        <el-input v-model="loginForm.username" prefix-icon="iconfont icon-B1"></el-input>
                    </el-form-item>
                    <el-form-item prop="password">
                        <el-input v-model="loginForm.password" prefix-icon="iconfont icon-B"></el-input>
                    </el-form-item>
                    <el-form-item prop="code">
                        <el-input class="codeinput" v-model="loginForm.code" prefix-icon="iconfont icon-yanzhengma"></el-input>
                        <div class="logincode">
                            123123
                        </div>
                    </el-form-item>
                    <el-form-item>
                        <el-checkbox v-model="loginForm.remember">记住密码</el-checkbox>
                    </el-form-item>
                    <el-form-item class="btn" size="large">
                        <el-button type="primary" @click="login">登陆</el-button>
                        <el-button type="info" @click="regist">注册</el-button>
                        <el-button type="info" @click="reset">重置</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script>
    import Cookies from "js-cookie";
    export default {
        name: "Login",
        data(){
            return {
                loginForm : {
                    username: "",
                    password: "",
                    code: "",
                    remember: ""
                },
                loginRules: {
                    username: { required: true, message: '请输入用户名', trigger: 'blur' },
                    password: { required: true, message: '请输入密码', trigger: 'blur' },
                    code: { required: true, message: '请输入验证码', trigger: 'blur' }
                }
            }
        },
        methods: {
            login(){
                this.$refs['loginForm'].validate((valid) => {
                    if(valid) {
                        console.log(this.loginForm);
                        if(this.loginForm.remember) {
                            Cookies.set("username", this.loginForm.username, { expires: 30 });
                            Cookies.set("password", this.loginForm.password, { expires: 30 });
                            Cookies.set('rememberMe', this.loginForm.remember, { expires: 30 });
                        }
                        window.sessionStorage.setItem("token", "Beara");
                        this.$router.replace("/home")
                    }
                });
            },
            regist(){

            },
            reset(){
                this.$refs['loginForm'].resetFields();
            }
        }
    }
</script>

<style lang="less" scoped>
    .login {
        background-color: #2b4b6b;
        height: 100%;

        .login_box {
            position: fixed;
            right: 0;
            top: 50%;
            transform: translate(0, -50%);
            width: 500px;
            height: 450px;
            background-color: #fff;
            margin-right: 80px;
            border-radius: 5%;

            h1 {
                text-align: center;
                font-weight: 400;
                margin-top: 25px;
            }

            .login_form {
                margin-top: 50px;
                padding: 0 40px;
                .codeinput {
                    width: 55%;
                }
                .logincode {
                    text-align: center;
                    width: 40%;
                    line-height: 38px;
                    float: right;
                    background-color: red;
                }
            }
        }
    }

    .btn {
        display: flex;
        justify-content: flex-end;
    }

</style>