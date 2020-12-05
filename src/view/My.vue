<template>
    <div>
        <el-input v-model="newToken"></el-input>
        <el-button @click="merge">更新</el-button>
        <el-input v-model="menu"></el-input>
        <el-input v-model="realName"></el-input>
    </div>
</template>

<script>
    export default {
        name: "My",
        data() {
            return {
                newToken: this.$store.state.userinfo.token,
                menu: this.$store.state.permission.menu[0].name
            }
        },
        methods: {
            merge() {
                this.$store
                    .dispatch("asyncUpdate", {token: this.newToken})
                    .then(res => {
                        this.$message({
                            type: "success",
                            message: "修改成功",
                            offset: 180,
                            center: true
                        })
                    })
            }
        },
        computed: {
            realName(){
                return this.$store.getters.realName
            }
        }
    }
</script>

<style scoped>

</style>