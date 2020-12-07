<template>
    <div>
        <el-form ref="form" :model="form">
            <el-input v-model="form.title"></el-input>
            <el-input v-model="form.labelID"></el-input>
            <el-input v-model="form.categoryID"></el-input>
            <mavon-editor class="editor" :toolbars="toolbars" :scrollStyle="true" v-model="form.content"/>
            <el-button @click="publicArticle">发布</el-button>
        </el-form>
    </div>
</template>

<script>
    import {publicArticle} from "network/Forum/forum"

    export default {
        name: "My",
        data() {
            return {
                value: null,
                form: {}
            }
        },
        methods: {
            publicArticle(){
                publicArticle(this.form).then(response => {
                    if(response.code === 200) {
                        this.$message.success("发布成功")
                    }
                })
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