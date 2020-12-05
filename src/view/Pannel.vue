<template>
    <div>
        <el-input v-model="token"></el-input>
        <el-button @click="mergeInfo">更新</el-button>
    </div>
</template>

<script>
    export default {
        name: "Pannel",
        data(){
            return {
                token: this.$store.state.userinfo.token
            }
        },
        methods: {
            mergeInfo(){
                //this.$store.commit("updateinfo", this.token)
                this.$store.commit({
                    type: "updateinfo",
                    token: this.token
                })
            }
        }
    }
</script>

<style scoped>

</style>