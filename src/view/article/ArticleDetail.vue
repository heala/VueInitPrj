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
            <DetailItem v-for="(reply, commentId) in replyArray" :content="reply.content" :responseContent="responseContent(reply.replyId)" :article="reply" :key="commentId"/>
            <EditTab actionType="reply" :articleId="article.articleId"></EditTab>
        </div>
    </div>
</template>

<script>
    import {replyList} from 'network/Forum/reply'
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
                content: null,
                replyArray: []
            }
        },
        methods: {
            //查询主题内容
            articleDetail(articleId) {
                articleDetail(articleId).then(response => {
                    this.content = response.data.content;
                });
            },
            replyList(articleId){
                replyList(articleId).then(response=> {
                    this.replyArray.push(...response.data);
                    console.log(this.replyArray);
                });
            },
            goBack() {
                this.$router.go(-1)
            },
            responseContent(replyId) {
                return this.replyArray.find(reply => reply.commentId == replyId)
            }
        },
        created() {
            this.article = this.$route.query.article;
            this.content = this.articleDetail(this.article.articleId);
            this.replyList(this.article.articleId)

        }
    }
</script>

<style lang="less" scoped>
    .article-active {
        > div:first-of-type {
            font-size: 18px;
            margin: 15px 0 5px 10px;
            min-height: 15px;
        }
        >div:nth-child(2n) {
            background-color: #fff0cd;
        }
    }
</style>
