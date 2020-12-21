<template>
    <div class="article-item" @click="articleDetail">
        <div class="article-info">
            <div class="title">
                <p>{{article.title}}</p>
            </div>
            <div class="details">
                <div>
                    <span>阅读({{article.readCount}})</span>
                </div>
                <div>
                    <span>评论(01)</span>
                </div>
                <div>
                    <span>赞({{article.agree}})</span>
                </div>
            </div>
        </div>
        <div class="article-img">
            <img src="~assets/img/favicon.png"></img>
        </div>
    </div>
</template>

<script>
    export default {
        name: "articleItem",
        data(){
            return {
            }
        },
        props: {
            article: null
        },
        methods: {
            articleDetail(){
                this.$router.push({
                    path: '/detail',
                    query: {
                        article: this.article
                    }
                });
            }
        }
    }
</script>

<style lang="less" scoped>
    .article-item {
        position: relative;
        height: 120px;
        margin-top: 10px;
        border-radius:12px;
        background-color: #ffedc3;
        .article-info {
            width: 70%;
            float: left;
            .title {
                height: 55px;
                padding: 20px 20px;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                overflow: hidden;
            }
            .details {
                display: flex;
                position: absolute;
                bottom: 10px;
                left: 0;
                height: 30px;
                text-align: left;
                line-height: 30px;
                div span {
                    margin-left: 20px;
                    font-size: 13px;
                    color: #454945;
                    flex: 1;
                }
            }
        }
        .article-img {
            float: right;
            position: absolute;
            top: 50%;
            right: 20px;
            transform: translateY(-50%);
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100px;
            height: 100px;
        }
        .article-item:hover {
            box-shadow: 0 2px 2px rgba(100, 100, 100, .3);
        }
    }
</style>
