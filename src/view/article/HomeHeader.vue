<template>
    <div class="home-header">
        <Header :searchTypeArray="searchTypeArray">
            <div slot="left" @click="toggleMenu" class="iconfont icon-toggle-right"></div>
            <div slot="center">
                <span>大胖之家</span>
            </div>
            <div slot="right" :show="show" @click="showbox" :class="serchIcon">
            </div>
        </Header>
        <el-collapse-transition>
            <div v-show="show">
                <div class="transition-box">
                    <el-input v-model="topic" placeholder="请输入内容" class="input-with-select">
                        <el-select v-model="searchType"
                                   slot="prepend"
                                   style="width: 90px"
                                   placeholder="请选择">
                            <el-option v-for="type in searchTypeArray"
                                       :key="type.value"
                                       :label="type.label"
                                       :value="type.value">
                            </el-option>
                        </el-select>
                        <el-button slot="append"
                                   @click="searchArticle"
                                   @keyup.enter="searchArticle"
                                   icon="el-icon-search">
                        </el-button>
                    </el-input>
                </div>
            </div>
        </el-collapse-transition>
    </div>
</template>

<script>
    import eventBus from "@/util/eventBus";
    import Header from "components/content/header/Header";

    import {articleList} from "network/Forum/forum"

    export default {
        name: "HomeHeader",
        components: {
            Header
        },
        data() {
            return {
                show: false,
                topic: "",
                searchType: 'TOPIC'
            }
        },
        props: {
            searchTypeArray: {
                type: Array,
                default: [{label: "主题", value: 1}]
            }
        },
        methods: {
            showbox() {
                this.show = !this.show;
            },
            toggleMenu() {
                eventBus.$emit("toggleMenu");
            },
            searchArticle() {
                if(!this.topic) {
                    this.$message.error("请输入条件");
                    return;
                }
                articleList({
                    'searchType': this.searchType,
                    'topic': this.topic
                }).then(response => {
                    this.$router.push({
                        path: "/result",
                        query: {
                            articles: response.data
                        }
                    })
                });
            }
        },
        computed: {
            serchIcon() {
                return this.show ? 'iconfont icon-close' : 'iconfont icon-search';
            }
        }
    }
</script>

<style>
    .home-header {
        z-index: 1650;
    }
</style>
