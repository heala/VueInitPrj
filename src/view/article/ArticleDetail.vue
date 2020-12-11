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
        <div class="article-active">
            <!-- 标题 -->
            <div>{{article.title}}</div>
            <!-- 主题 -->
            <DetailItem :content="content" :article="article"></DetailItem>
            <!-- 回复
            <DetailItem v-for="">
            -->
            <EditTab actionType="reply" :articleId="article.articleId"></EditTab>
        </div>
    </div>
</template>

<script>
    import {articleDetail} from 'network/Forum/forum'
    import Header from "components/content/header/Header";
    import DetailItem from "../response/responseTitle/DetailItem";
    import EditTab from "./EditTab";

    export default {
        name: "ArticleDetail",
        components: {
            Header,
            DetailItem,
            EditTab
        },
        data() {
            return {
                article: null,
                content: null
            }
        },
        methods: {
            //查询主题内容
            articleDetail(articleId) {
                articleDetail(articleId).then(response => {
                    this.content = response.data.content;
                });
            },
            goBack() {
                this.$router.go(-1)
            }
        },
        created() {
            this.article = this.$route.query.article;
            this.content = this.articleDetail(this.article.articleId)
        }
    }
</script>

<style lang="less" scoped>
    .article-active {
        background-color: #E6A23C;
        > div:first-of-type {
            font-weight: 400;
            font-size: 29px;
            margin: 10px 0 10px 12px;
            line-height: 44px;
        }
    }
</style>
