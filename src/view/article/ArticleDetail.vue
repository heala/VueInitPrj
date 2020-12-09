<template>
    <div class="detail-container">
        <Header>
            <div slot="left" class="iconfont icon-houtui" @click="goBack"></div>
            <div slot="center">
                <span>主题详情</span>
            </div>
            <div slot="right" class="el-icon-share">
            </div>
        </Header>
        <div class="detail">
            <mavon-editor defaultOpen="preview" :ishljs="true" :subfield="false" :toolbarsFlag="false" v-model="content"/>
            <el-backtop target=".page-component__scroll .el-scrollbar__wrap"></el-backtop>
        </div>
    </div>
</template>

<script>
    import {articleDetail} from 'network/Forum/forum'
    import Header from "components/content/header/Header";

    export default {
        name: "ArticleDetail",
        components: {
            Header
        },
        data() {
            return {
                content: null
            }
        },
        methods: {
            articleDetail(articleID) {
                articleDetail(articleID).then(response => {
                    this.content = response.data.content;
                });
            },
            goBack(){
                this.$router.go(-1)
            }
        },
        created() {
            const articleID = this.$route.params.articleID;
            this.articleDetail(articleID);
        }
    }
</script>

<style lang="less" scoped>
    .detail {
        z-index: 8;
        position: relative;
    }
</style>
