<template>
    <div>

    </div>
</template>

<script>
    import {articleList} from "network/Forum/forum"
    export default {
        name: "Pannel",
        data(){
            return {
                articleArray: []
            }
        },
        methods: {
            articleList(category, label){
                articleList(category, label).then(response => {
                    this.articleArray = response.data;
                }).catch(error => [
                    this.$message.error(error)
                ]);
            }
        },
        created() {
            //查询帖子列表
            this.articleList();
        }
    }
</script>

<style scoped>

</style>