<template>
    <div>
        <el-input v-model="token"></el-input>
        <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="id" label="编号" width="120"></el-table-column>
            <el-table-column prop="name" label="姓名" width="120"></el-table-column>
            <el-table-column prop="age" label="年龄"></el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        name: "Category",
        data() {
            return {
                token: this.$store.state.userinfo.token,
                tableData: this.$store.getters.filteUserByAge(20)
            }
        }
    }
</script>

<style scoped>

</style>