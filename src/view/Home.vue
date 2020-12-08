<template>
    <div class="container">
        <HomeHeader :searchTypeArray="[{label: '主题', value: 1},{label: '作者', value: 2}]"/>
        <div class="mask"></div>
        <div>
            <div class="title">
                <p>Android小应用</p>
            </div>
            <div class="article-list">
                <articleitem v-for="(article, articleID) in articles" :article="article" :key="articleID"></articleitem>
            </div>
        </div>
    </div>
</template>

<script>
    import HomeHeader from "components/content/header/HomeHeader";
    import articleitem from "components/content/articleLine/articleItem";
    import {articleList} from "network/Forum/forum";
    export default {
        name: "Home",
        components: {
            HomeHeader,
            articleitem
        },
        data(){
            return {
                articles: []
            }
        },
        methods: {
            getArticleList(){
                articleList().then(response => {
                    this.articles.push(...response.data);
                    console.log('home-----------------'+ this.articles);
                });
            }
        },
        created() {
            this.getArticleList();
        }
    }
</script>

<style lang="less" scoped>
    .container {
        position: relative;
    }
    .mask {
        z-index: 10;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .4);
    }
    .title {
        margin: 12px 0 0 12px;
        p {
            padding-left: 10px;
            border-left: solid 3px green;
        }
    }
</style>
