<template>
    <div class="reply-container">
        <div class="detail-head">
            <div class="pic">
                <el-avatar class="user-avatar" icon="el-icon-user-solid" :size="70" :src="article.user.avatar"/>
            </div>
            <div class="middle">
                <span>{{article.user.nickName}}</span>
                <div class="user-note">{{article.user.note}}</div>
            </div>
            <div class="stairNo">{{stairNo}}</div>
        </div>
        <div class="content">
            <div v-if="responseContent != null" class="response-container">
                <section>
                    回复 <a href="#">{{responseContent.user.nickName}}</a>
                </section>
                <mavon-editor
                        :toolbarsFlag="false"
                        :subfield="false"
                        defaultOpen="preview"
                        :ishljs="true"
                        v-model="responseContent.content"
                        toolbarsBackground="#fff6df"
                        :boxShadow="false"
                />
            </div>
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
                <span class="iconfont icon-good" :style="agree(0)" @click="showOpinion(0)">{{article.agree}}</span>
                <span class="iconfont icon-bad" :style="agree(1)" @click="showOpinion(1)">{{article.disAgree}}</span>
                <span @click="reply" class="iconfont icon-huifu"></span>
            </div>
        </div>
    </div>
</template>

<script>
    import {opinionArticle} from 'network/Forum/forum'
    export default {
        name: "DetailItem",
        props: {
            content: {
                type: String,
                default: ''
            },
            article: {
                type: Object,
                default: null
            },
            responseContent: {
                type: Object,
                default: null
            }
        },
        computed: {
            stairNo(){
                return this.article.articleId? "楼主" : this.article.rowno + '楼';
            },
            agree(){
                return function (type) {
                    if(this.article.currUserOpinion >= 0) {
                        return this.article.currUserOpinion === type ? {color: "red"} : {};
                    }
                    return this.opinionType === type ? {color: "red"} : {};
                }
            }
        },
        methods: {
            reply(){
                this.$router.push({
                    path: '/edit',
                    query: {
                        actionType: 'reply',
                        articleId: this.article.articleId ? this.article.articleId : this.article.commentId,
                    }
                })
            },
            showOpinion(type){
                let userType = this.article.currUserOpinion;
                opinionArticle(
                    {
                        userId: 1,
                        agree: userType ===type ? 2 : type,
                        detailId: this.article.articleId ? this.article.articleId : this.article.commentId
                    }
                ).then(res => {
                    if(res.code == 200) {
                        //修改已赞信息
                        if(userType === type) {
                            if(userType === 0) {    //修改赞
                                this.article.agree -= 1;
                            } else {
                                this.article.disAgree -=1;
                            }
                            this.article.currUserOpinion = 2;
                        } else {
                            if(userType != 2) {
                                if(type ===0) {
                                    this.article.disAgree -=1;
                                    this.article.agree += 1;
                                    this.article.currUserOpinion = 0;
                                } else {
                                    this.article.disAgree +=1;
                                    this.article.agree -= 1;
                                    this.article.currUserOpinion = 1;
                                }
                            } else {
                                if(type === 0) {
                                    this.article.agree +=1;
                                    this.article.currUserOpinion = 0;
                                } else {
                                    this.article.disAgree +=1;
                                    this.article.currUserOpinion = 1;
                                }
                            }
                        }
                    } else {
                        this.$message.error(res.msg);
                    }
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
            border-top: solid 3px #d4b780;
            .pic {
                width: 80px;
                display: flex;
                justify-content: center;
                align-items: center;
                .user-avatar {
                    border: solid 6px #FFEC7B8D;
                }
            }
            .stairNo{
                text-align: center;
                width: 80px;
                margin-top: 10px;
            }
            .middle {
                flex: 1;
                position: relative;
                padding: 10px 0 10px 10px;
                font-size: 19px;
                .user-note {
                    position: absolute;
                    bottom: 10px;
                    width: 100%;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    font-size: 15px;
                }
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
        .response-container {
            border: solid 1px #000000;
            border-radius: 3px;
            padding: 5px;
            width: 90%;
            margin: 10px auto;
        }
    }
</style>
