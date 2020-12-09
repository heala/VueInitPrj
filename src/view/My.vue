<template>
    <div>
        <el-form ref="form" :model="form">
            <el-input v-model="form.title"></el-input>
            <el-input v-model="form.labelID"></el-input>
            <el-input v-model="form.categoryID"></el-input>
            <mavon-editor ref=md class="editor" @save="save" @imgAdd = "imageAdd" :toolbars="toolbars" :shortCut=true :scrollStyle="true" v-model="form.content"/>
            <el-button @click="publicArticle">发布</el-button>
        </el-form>
    </div>
</template>

<script>
    import {publicArticle, uploadFile} from "network/Forum/forum"
    export default {
        name: "My",
        data() {
            return {
                value: null,
                form: {},
                toolbars: {
                    bold: true,
                    header: true,
                    strikethrough: true,
                    ol: true,
                    ul: true,
                    link: true,
                    imagelink: true,
                    code: true,
                    trash: true,
                    alignleft: true,
                    aligncenter: true,
                    preview: true
                }
            }
        },
        methods: {
            publicArticle(){
                publicArticle(this.form).then(response => {
                    if(response.code === 200) {
                        this.$message.success("发布成功")
                    }
                })
            },
            imageAdd(pos, $file) {
                console.log(pos);
                console.log($file);
                let formdata = new FormData();
                formdata.append('file', $file);
                uploadFile(formdata).then(response => {
                    if(response.code == 200) {
                        this.$message.success('图片上传成功');
                        this.$refs.md.$img2Url(pos, response.msg)
                    }
                })
            },
            save() {
                console.log("保存中..");
            }
        }
    }
</script>

<style lang="less" scoped>
    .editor {
        height: 100px;
        margin: 10px 10px;
    }
</style>
