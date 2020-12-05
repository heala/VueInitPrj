<template>
    <div>
        <el-input-number v-model="count" @change="handleChange" :min="1" label="123"></el-input-number>
    </div>
</template>

<script>
    import {request} from "../network/Request";
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
            },
            getdata() {
                request().then(res=> {
                    console.log(res);
                })
            }
        }
    }
</script>

<style scoped>

</style>