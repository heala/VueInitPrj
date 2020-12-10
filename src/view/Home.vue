<template>
    <div>
        <HomeHeader :searchTypeArray="[{label: '主题', value: 'TOPIC'},{label: '作者', value: 'AUTHOR'}]"/>
        <navbar></navbar>
        <div class="article-content">
            <div class="title">
                <span>Android小应用</span>
            </div>
            <div class="article-list">
                <articleitem v-for="(article, articleID) in articles" :article="article" :key="articleID"></articleitem>
            </div>
            <EditTab @refresh="getArticleList"></EditTab>
        </div>
    </div>
</template>

<script>
    import HomeHeader from "./article/HomeHeader";
    import articleitem from "components/content/articleLine/articleItem";
    import navbar from "components/content/navbar/navbar";
    import {articleList} from "network/Forum/forum";
    import EditTab from "./article/EditTab";

    export default {
        name: "Home",
        components: {
            HomeHeader,
            articleitem,
            navbar,
            EditTab
        },
        data() {
            return {
                articles: []
            }
        },
        methods: {
            getArticleList() {
                articleList().then(response => {
                    this.articles.push(...response.data);
                });
            }
        },
        created() {
            this.getArticleList();
        }
    }
</script>

<style lang="less" scoped>
    .title {
        margin-top: 12px;

        span {
            padding-left: 10px;
            border-left: solid 3px green;
        }
    }
</style>
