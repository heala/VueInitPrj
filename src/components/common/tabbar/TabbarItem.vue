<template>
    <div :style="activeStyle" @click="changePage" class="tabbar-item">
        <div>
            <span :class="'iconfont ' + iconclass"></span>
        </div>
        <div class="title">
            {{title}}
        </div>
    </div>
</template>

<script>
    export default {
        name: "TabbarItem",
        methods: {
            changePage() {
                this.$router.replace(this.path)
            }
        },
        computed: {
            isAcitve() {
                return this.$route.path.indexOf(this.path) != -1;
            },
            activeStyle() {
                return this.isAcitve ? {color: this.activeColor} : {};
            }
        },
        props: {
            iconclass: {
                type: String,
                default: "icon-home"
            },
            title: {
                type: String
            },
            path: {
                type: String,
                default: "pannel"
            },
            activeColor: {
                type: String,
                default: "red"
            }
        }
    }
</script>

<style lang="less" scoped>
    .tabbar-item {
        flex: 1;
        text-align: center;
        margin-top: 5px;

        .iconfont {
            font-weight: 700;
            font-size: 19px;
        }

        :hover {
            cursor: pointer;
        }

        .title {
            font-size: 14px;
        }
    }
</style>