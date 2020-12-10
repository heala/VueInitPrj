<template>
    <div class="result-container">
        <Header>
            <div slot="left" class="iconfont icon-houtui" @click="goBack"></div>
            <div slot="center">
                <span>搜索结果</span>
            </div>
        </Header>
        <div v-if="show" class="article-list">
            <articleitem v-for="(article, articleID) in articles" :article="article" :key="articleID"></articleitem>
        </div>
        <div class="none-result" v-else>
            没有结果呢~~~
        </div>
    </div>
</template>

<script>
    import Header from "components/content/header/Header";
    import articleitem from "components/content/articleLine/articleItem";

    export default {
        name: "SearchResult",
        components: {
            Header,
            articleitem
        },
        data() {
            return {
                articles: {
                    type: Array,
                    default: []
                }
            }
        },
        computed: {
            show() {
                console.log(typeof this.articles)
                return this.articles.length>0
            }
        },
        methods: {
            goBack() {
                this.$router.go(-1)
            }
        },
        created() {
            this.articles = this.$route.query.articles
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
