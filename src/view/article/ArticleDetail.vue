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
        <!-- 标题 -->

        <!-- 主题 -->
        <DetailItem :content="content"></DetailItem>
        <!-- 回复
        <DetailItem v-for="">
        -->
    </div>
</template>

<script>
    import {articleDetail} from 'network/Forum/forum'
    import Header from "components/content/header/Header";
    import DetailItem from "../response/responseTitle/DetailItem";

    export default {
        name: "ArticleDetail",
        components: {
            Header,
            DetailItem
        },
        data() {
            return {
                article: null,
                content: null
            }
        },
        methods: {
            //查询主题内容
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
            this.article = this.$route.query.article;
            this.content = this.articleDetail(this.article.articleID)
        }
    }
</script>

<style lang="less" scoped>
    .detail {
        z-index: 8;
        position: relative;
    }
</style>
