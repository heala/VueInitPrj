<template>
    <div class="result-container" style="height: 100%">
        <Header>
            <div slot="left" class="iconfont icon-houtui" @click="goBack"></div>
            <div slot="center">
                <span>搜索结果</span>
            </div>
        </Header>
        <div v-if="show"
             v-loading="loading"
             element-loading-text="拼命加载中"
             element-loading-spinner="el-icon-loading"
             element-loading-background="rgba(0, 0, 0, 0.5)"
             class="article-list"
             style="height: 100%">
            <articleItem v-for="(article, articleId) in articles" :article="article" :key="articleId"></articleItem>
        </div>
        <div class="none-result" v-else>
            没有结果呢~~~
        </div>
    </div>
</template>

<script>
    import Header from "components/content/header/Header";
    import articleItem from "components/content/articleLine/articleItem";
    import {articleList} from "network/Forum/forum"

    export default {
        name: "SearchResult",
        components: {
            Header,
            articleItem
        },
        data() {
            return {
                articles: {
                    type: Array,
                    default: []
                },
                loading: false,
                show: true
            }
        },
        methods: {
            goBack() {
                this.$router.go(-1)
            },
            search(searchType, topic){
                this.loading = true;
                articleList({
                    'searchType': searchType,
                    'topic': topic
                }).then(response => {
                    this.articles= response.data
                    if(this.articles.length == 0) {
                        this.show = false
                    }
                }).catch(err=> {
                    this.$message.error("搜索失败" + err.msg)
                }).finally(()=> {
                    this.loading = false;
                });
            }
        },
        created() {
            let searchType = this.$route.query.searchType;
            let topic = this.$route.query.topic;
            this.search(searchType, topic)
        }
    }
</script>

<style scoped>
    .none-result {
        text-align: center;
        position: center;
        top: 50%;
        left: 50%;
        position: absolute;
        transform: translateX(-50%);
    }

</style>
