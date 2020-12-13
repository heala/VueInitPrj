<template>
    <div class="reply-container">
        <div class="detail-head">
            <div class="pic">
                <img src="~assets/img/face.jpg" alt="">
            </div>
            <div class="middle">
                <h3>{{article.user.nickName}}</h3>
                <p>{{article.user.note}}</p>
            </div>
            <div class="stairNo">{{stairNo}}</div>
        </div>
        <div class="content">
            <mavon-editor
                    :toolbarsFlag="false"
                    :subfield="false"
                    defaultOpen="preview"
                    :ishljs="true"
                    v-model="content"
                    toolbarsBackground="#fff6df"
                    :boxShadow="false"
            />
        </div>
        <div class="bottom">
            <div class="reply-date">2020-01-12</div>
            <div class="opinion">
                <span class="iconfont icon-good" @click="showOpinion(0)">{{article.agree}}</span>
                <span class="iconfont icon-bad" @click="showOpinion(1)">{{article.disAgree}}</span>
                <span @click="reply" class="iconfont icon-huifu"></span>
            </div>
        </div>
    </div>
</template>

<script>
    import {opinionArticle} from 'network/Forum/forum'
    export default {
        name: "DetailItem",
        data() {
            return {
                detailArticle: null
            }
        },
        props: {
            content: {
                type: String,
                default: ''
            },
            article: {
                type: Object,
                default: null
            }
        },
        computed: {
            stairNo(){
                return this.article.articleId? "楼主" : this.article.rowno + '楼';
            }
        },
        methods: {
            reply(){
                this.$router.push({
                    path: '/edit',
                    query: {
                        actionType: 'reply',
                        articleId: this.article.articleId ? this.article.articleId : this.article.commentId,
                        replyContent: this.concatReplyContent(this.article)
                    }
                })
            },
            concatReplyContent(article){
                return '@' + article.user.nickName + '\\n> ' + article.content + '\\n\\n';
            },
            showOpinion(type){
                opinionArticle(
                    {
                        userId: 1,
                        agree: type,
                        detailId: this.article.articleId ? this.article.articleId : this.article.commentId
                    }
                ).then(
                    res => {

                    }
                ).catch(res => {
                    console.log(res);
                });
            }
        }
    }
</script>

<style lang="less" scoped>
    .reply-container {
        margin-top: 1px;
        .detail-head {
            height: 80px;
            display: flex;
            .pic {
                width: 80px;
                display: flex;
                justify-content: center;
                align-items: center;

                img {
                    border: solid 5px #EEDABB;
                    height: 70px;
                    width: 70px;
                    border-radius: 50%;
                }
            }
            .stairNo{
                text-align: center;
                width: 80px;
            }
            .middle {
                margin-left: 20px;
                text-align: left;
                flex: 1;
            }
        }

        .content {
            .v-note-wrapper {
                min-height: 100px;
            }
        }

        .bottom {
            height: 36px;
            line-height: 36px;
            .reply-date {
                margin-left: 12px;
                float: left;
            }
            .opinion {
                float: right;
                span {
                    margin: 0 12px;
                }
            }
        }
    }
</style>
