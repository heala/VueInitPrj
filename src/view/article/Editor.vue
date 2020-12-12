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
        <el-input v-model="form.title" id="title" :style="showStyle" placeholder="请输入标题"></el-input>
        <mavon-editor ref=md
                      @imgAdd="imageAdd"
                      :toolbars="toolbars"
                      :shortCut=true
                      :scrollStyle="true"
                      v-model="form.content"
                      :subfield="false"
        />
    </el-form>
    </div>
</template>

<script>
    import Header from "components/content/header/Header";
    import {publicArticle, uploadFile} from "network/Forum/forum"

    export default {
        name: "My",
        components: {
            Header
        },
        computed: {
            isReply() {
                return this.actionType === 'reply';
            },
            showStyle(){
                return this.isReply? {display: "none"} : {display: "block"};
            }
        },
        data() {
            return {
                value: null,
                form: {},
                actionType: '',
                articleId: null,
                toolbars: {
                    bold: true,
                    header: true,
                    link: true,
                    imagelink: true,
                    code: true,
                    quote: true, // 引用
                    alignleft: true,
                    aligncenter: true,
                }
            }
        },
        methods: {
            publicArticle() {
                this.form.labelID = 1;
                this.form.categoryID = 1;
                publicArticle(this.form).then(response => {
                    if (response.code === 200) {
                        this.$message.success("发布成功");
                        this.$router.go(-1);
                    }
                })
            },
            imageAdd(pos, $file) {
                console.log(pos);
                console.log($file);
                let formdata = new FormData();
                formdata.append('file', $file);
                uploadFile(formdata).then(response => {
                    if (response.code == 200) {
                        this.$message.success('图片上传成功');
                        this.$refs.md.$img2Url(pos, response.msg)
                    }
                })
            },
            goBack() {
                this.$router.go(-1)
            }
        },
        mounted() {
            document.getElementById("title").focus();
            this.actionType = this.$route.query.actionType;
            if(this.actionType === 'reply') {
                this.articleId = this.$route.query.articleId;
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
        height: 93%;
    }
</style>
