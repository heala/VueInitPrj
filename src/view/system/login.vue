<template>
    <div class="user-container">
        <el-form class="user-box" status-icon ref="form" :rules="formRule" :model="form">
            <el-form-item prop="userName">
                <el-input v-model="form.userName" placeholder="请输入用户名">
                    <i slot="prefix" class="iconfont icon-my"/>
                </el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input v-model="form.password" type="password" placeholder="请输入密码">
                    <i slot="prefix" class="iconfont icon-B"/>
                </el-input>
            </el-form-item>
            <el-form-item :style="isRegist" prop="checkPass">
                <el-input type="password" v-model="form.checkPass" placeholder="再次输入密码">
                    <i slot="prefix" class="iconfont icon-B"/>
                </el-input>
            </el-form-item>
            <el-form-item>
                <el-button @click="registOrLogin" class="btn-login">{{registFlag? "注册" : "登录"}}</el-button>
            </el-form-item>
        </el-form>
        <div class="regis-reset">
            <a @click.prevent="toRegist">{{registFlag? "登录" : "注册账号"}}</a>
            <a>忘记密码</a>
        </div>
    </div>
</template>

<script>
    import {login, regist} from 'network/system/user'
    import {setToken} from 'network/auth'
    export default {
        name: "login",
        data(){
            let checkPass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else {
                    if (this.form.checkPass !== '') {
                        this.$refs.form.validateField('checkPass');
                    }
                    callback();
                }
            }
            let validatePass2 = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value !== this.form.password) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            };
            return {
                form: {
                    "userName": '',
                    "password": '',
                    "checkPass": ''
                },
                registFlag: false,
                formRule: {
                    userName: [
                        { required: true, message: '请输入用户名', trigger: 'blur' }
                    ],
                    password: [
                        { validator: checkPass, trigger: 'blur' }
                    ],
                    checkPass: [
                        { validator: validatePass2, trigger: 'blur' }
                    ]
                }
            }
        },
        computed: {
            isRegist(){
                return this.registFlag? {"display": "block"} : {"display": "none"};
            }
        },
        methods: {
            toRegist(){
                this.$refs.form.resetFields();
                this.registFlag = !this.registFlag ;
            },
            registOrLogin(){
                this.$refs.form.validate(valid => {
                    if(this.registFlag) {   //注册
                        this.$store.dispatch("regist", this.form).then(()=>
                            this.toRegist()
                        )
                    } else {                        //登录
                        this.$store.dispatch("login", this.form).then( ()=>
                            this.$router.push("/home")
                        )
                    }
                })
            }
        }
    }
</script>

<style lang="less" scoped>
    .user-container {
        background: #EEDABB url(../../assets/img/userBg.jpg) no-repeat 0px 0px;
        height: 100%;
        position: relative;
        .user-box {
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            top: 0;
            margin: auto;
            height: 400px;
            width: 90%;
            .btn-login {
                margin-top: 15px;
                width: 100%;
            }
        }
        .regis-reset {
            color: #EEDABB;
            font-size: 18px;
            position: absolute;
            bottom: 20px;
            width: 100%;
            text-align: center;
            a {
                padding: 20px;
            }
        }
    }
</style>
