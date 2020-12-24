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
                          @imgAdd="imageAdd"
                          :toolbars="toolbars"
                          :shortCut=true
                          :scrollStyle="true"
                          v-model="form.content"
                          :subfield="false"
                          toolbarsBackground="#fff6df"
                          editorBackground="#fff6df"
            />
        </el-form>
    </div>
</template>

<script>
    import Header from "components/content/header/Header";
    import {publicArticle, uploadFile} from "network/Forum/forum"
    import {replyArticle} from "network/Forum/reply"

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
                    header: true,
                    imagelink: true,
                    quote: true, // 引用
                    italic: true, // 斜体
                    strikethrough: true, // 中划线
                },
                fileList: []
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
            imageAdd(pos, $file) {
                let formdata = new FormData();
                formdata.append('file', $file);
                formdata.append('type', 'pic');
                uploadFile(formdata).then(response => {
                    if (response.code == 200) {
                        this.$message({
                            type: "success",
                            message: "图片上传成功",
                            duration: 800
                        });
                        this.$refs.md.$img2Url(pos, response.msg)
                    }
                })
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
