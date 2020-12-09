<template>
    <div class="edit el-icon-edit-outline" @click="toEdit"></div>
</template>

<script>
    export default {
        name: "EditTab",
        methods: {
            toEdit(){
                this.$router.push("/edit")
            }
        }
    }
</script>

<style scoped>
    .edit {
        position: fixed;
        bottom: 50px;
        right: 20px;
        border-radius: 50%;
        background-color: #8cc5ff;
        width: 50px;
        height: 50px;
        text-align: center;
        line-height: 50px;
    }
</style>