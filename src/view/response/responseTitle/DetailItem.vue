<template>
    <div>
    <div class="reply-container">
        <div class="head">
            <div class="pic">
                <img src="~assets/img/face.jpg" alt="">
            </div>
            <div class="middle">
                <h3>{{article.user.nickName}}</h3>
                <p>{{article.user.note}}</p>
            </div>
            <div class="stairNo">1楼</div>
        </div>
        <div class="content">
            <mavon-editor
                    defaultOpen="preview"
                    :ishljs="true"
                    :subfield="false"
                    :toolbarsFlag="false"
                    v-model="content"/>
        </div>
        <div class="bottom">
            <div class="reply-date">2020-01-12</div>
            <div class="opinion">
                <span class="iconfont icon-home">{{article.agree}}</span>
                <span class="iconfont icon-my">{{article.disAgree}}</span>
                <span @click="reply" class="iconfont icon-huifu"></span>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
    export default {
        name: "DetailItem",
        data() {
            return {}
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
        methods: {
            reply(){
                this.$router.push({
                    path: '/edit',
                    query: {
                        actionType: 'reply',
                        articleId: 1
                    }
                })
            }
        }
    }
</script>

<style lang="less" scoped>
    .head {
        height: 80px;
        display: flex;
        .pic {
            width: 80px;
            display: flex;
            justify-content: center;
            align-items: center;

            img {
                border: solid 5px #9a6e3a;
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
            margin-left: 8px;
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
</style>
