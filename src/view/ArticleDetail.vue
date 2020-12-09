<template>
    <div class="detail">
        <mavon-editor defaultOpen="preview" :ishljs=true :subfield=false :toolbarsFlag=false v-model="content"/>
    </div>
</template>

<script>
    import {articleDetail} from 'network/Forum/forum'
    export default {
        name: "ArticleDetail",
        data() {
            return {
                content: null
            }
        },
        methods: {
            articleDetail(articleID){
                articleDetail(articleID).then(response => {
                    this.content = response.data.content;
                });
            }
        },
        created() {
            const articleID = this.$route.params.articleID;
            this.articleDetail(articleID);
        }
    }
</script>

<style scoped>
    .detail {

    }
</style>
