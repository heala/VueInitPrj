<template>
    <div class="editor-container">
        <Header>
            <div slot="left" class="el-icon-back" @click="goBack"></div>
            <div slot="center">
                <span>{{isReply? "回复主题" : "编辑主题"}}</span>
            </div>
            <div slot="right" class="iconfont icon-fabu" @click="publicArticle">
            </div>
        </Header>
        <el-form ref="form" :model="form" class="editor">
            <el-input v-model="form.title" id="title" autofocus="true" :style="showStyle" placeholder="请输入标题"></el-input>
            <mavon-editor ref=md
                          :toolbars="toolbars"
                          :scrollStyle="true"
                          v-model="form.content"
                          :subfield="false"
                          boxShadow="false"
                          toolbarsBackground="#fff6df"
                          editorBackground="#fff6df"
                          :token="this.token"
                          :uploadUrl="this.uploadUrl"
                          :looksUrl="looksUrl"
            />
        </el-form>
    </div>
</template>

<script>
    import Header from "components/content/header/Header";
    import {publicArticle, uploadFile} from "network/Forum/forum"
    import {replyArticle} from "network/Forum/reply"
    import {getToken} from "network/auth"
    export default {
        name: "My",
        components: {
            Header
        },
        computed: {
            isReply() {
                return this.actionType === 'reply';
            },
            showStyle() {
                return this.isReply ? {display: "none"} : {display: "block"};
            },
        },
        data() {
            return {
                value: null,
                form: {},
                actionType: '',
                toolbars: {
                    bold: true,
                    italic: true,
                    header: true,
                    underline: true,
                    strikethrough: true,
                    quote: true,
                    link: true,
                    table: true
                },
                token: "Bearer " + getToken(),
                uploadUrl: "http://81.70.199.252:8080/VueAPI/forum/upload",
                looksUrl: "http://81.70.199.252:8080/VueAPI/reply/countenance"
            }
        },
        methods: {
            publicArticle() {
                this.form.labelID = 1;
                this.form.categoryID = 1;
                if ("public" === this.actionType) {
                    publicArticle(this.form).then(response => {
                        if (response.code === 200) {
                            this.$message({
                                type: "success",
                                message: "发布成功",
                                duration: 800
                            });
                            this.$router.go(-1);
                        }
                    })
                } else if ("reply" === this.actionType) {
                    console.log("保存评论----------------" + this.form.content + ": " + this.form.articleId)
                    replyArticle(this.form).then(response => {
                        if (response.code === 200) {
                            this.$message({
                                type: "success",
                                message: "回复成功",
                                duration: 800
                            });
                            this.$router.go(-1);
                        }
                    })
                }

            },
            goBack() {
                this.$router.go(-1)
            },
        },
        mounted() {
            this.actionType = this.$route.query.actionType;
            if (this.actionType === 'reply') {
                this.form.replyId = this.$route.query.articleId;
            }
        }
    }
</script>

<style lang="less" scoped>
    .editor-container {
        height: 100%;

        #title {
            height: 5%;
        }
    }

    .editor, .markdown-body {
        margin-top: 10px;
        position: relative;
        z-index: 8;
    }

    .auto-textarea-input {
        background-color: #ffedc3;
    }
</style>
