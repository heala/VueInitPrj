<template>
    <div :style="displayStyle" class="fixed-tabbar">
        <div class="el-icon-refresh" @click="refresh"></div>
        <div class="el-icon-edit-outline" @click="toEdit"></div>
    </div>
</template>

<script>
    export default {
        name: "EditTab",
        data(){
            return {
                offsetY: 0,
                show: true
            }
        },
        computed: {
            displayStyle(){
                return this.show? {display: "flex"} : {display: "none"};
            }
        },
        props: {
            actionType: {
                type: String,
                default: 'public'
            },
            articleId: {
                default: null
            }
        },
        methods: {
            toEdit() {
                this.$router.push({
                    path: "edit",
                    query: {
                        actionType: this.actionType,
                        articleId: this.articleId
                    }
                })
            },
            refresh() {
                this.$emit("refresh")
            },
            handlerScroll(e) {
                let p = window.pageYOffset;
                if (this.offsetY < p) {
                    this.show = false;
                } else {
                    this.show = true
                }
                this.offsetY = p;
            }
        },
        mounted() {
            document.addEventListener("scroll", this.handlerScroll, false);
        }
    }
</script>

<style lang="less" scoped>
    .fixed-tabbar {
        position: fixed;
        bottom: 20px;
        right: 20px;
        text-align: center;
        width: 100px;
        height: 50px;
        display: flex;
        z-index: 1600;      /*mavoneditor 是1500，需要盖住*/
        div {
            flex: 1;
            background-color: #c9eac9;
            line-height: 50px;
            border-radius: 50%;
        }
    }
</style>
