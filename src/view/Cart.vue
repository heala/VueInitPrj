<template>
    <div>
        <el-input-number v-model="count" @change="handleChange" :min="1" label="123"></el-input-number>
    </div>
</template>

<script>
    export default {
        name: "Cart",
        data(){
            return {
                count: this.$store.state.count
            }
        },
        methods: {
            handleChange(state, data){
                this.$store.state.count = state.count;
            }
        }
    }
</script>

<style scoped>

</style>