<template>
    <div>
        <Header>
            <div slot="left" class="iconfont icon-houtui" @click="goBack"></div>
            <div slot="center">
                <span>个人信息</span>
            </div>
        </Header>
        <div>
            <div class="userinfo">
                <p>用户名</p>
                <p>{{userName}}</p>
            </div>
            <hr>
            <div class="userinfo"
                 @click="changeAvatar"
                 v-loading="loading"
                 element-loading-text="拼命加载中"
                 element-loading-spinner="el-icon-loading"
                 element-loading-background="rgba(0, 0, 0, 0.5)">
                <span>头像</span>
                <el-avatar icon="el-icon-user-solid" fit="fill" :size="70"
                           :src="avatar"/>
                <input style="display: none" id="avatarUpload" type="file" accept="image/gif,image/jpeg,image/jpg,image/png,image/svg"
                       @change="imageAdd($event.target.files[0])" multiple="multiple"/>
            </div>
            <hr>
            <div class="userinfo">
                <p>签名</p>
                <p>{{note ? note : "未添加签名"}}</p>
            </div>
            <hr>
        </div>
    </div>
</template>

<script>
    import Header from "components/content/header/Header";
    import {uploadFile} from "network/Forum/forum";
    import {uploadAvatar} from "network/system/user"
    export default {
        name: "UserInfo",
        data(){
            return {
                userName: this.$store.getters.name,
                avatar: this.$store.getters.avatar,
                note: this.$store.getters.note,
                loading: false
            }
        },
        components: {
            Header
        },
        methods: {
            goBack() {
                this.$router.replace("/home")
            },
            changeAvatar(){
                document.getElementById('avatarUpload').click();
            },
            handleAvatarSuccess(){
                console.log("上传成功")
            },
            beforeUpload(){
                console.log("准备上场")
            },
            imageAdd($file) {
                this.loading = true;
                let formdata = new FormData();
                formdata.append('file', $file);
                uploadFile(formdata).then(response => {
                    if (response.code == 200) {
                        let avatar = response.msg;
                        this.avatar = avatar;
                        this.$store.commit("setAvatar", avatar)
                        uploadAvatar(avatar);
                    } else {
                        this.$message.error("上传失败")
                    }
                }).catch(err=> {
                    this.$message.error("上传失败")
                }).finally(()=> {
                    this.loading = false
                })
            }
        }
    }
</script>

<style lang="less" scoped>
    .userinfo {
        width: 90%;
        display: flex;
        justify-content: space-between;
        line-height: 80px;
        margin-left: 20px;
        vertical-align: middle;
        align-items: center;
    }
</style>
