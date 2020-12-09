<template>
    <div ref="tabbar" :style="maskStyle" class="nav-tabs" @mousewheel.prevent @touchmove.prevent>
        <div @click="toggleMenu" class="nav-mask"></div>
        <transition>
            <div v-if="maskOpen" class="navmenus">
                <el-menu
                        background-color="#545c64"
                        text-color="#fff"
                        active-text-color="#ffd04b"
                        default-active="1"
                        :unique-opened=true
                >
                    <el-submenu index="1">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>导航一</span>
                        </template>
                        <el-menu-item-group>
                            <template slot="title">分组一</template>
                            <el-menu-item route="/home" index="1-1">选项1</el-menu-item>
                            <el-menu-item index="1-2">选项2</el-menu-item>
                        </el-menu-item-group>
                        <el-menu-item-group title="分组2">
                            <el-menu-item index="1-3">选项3</el-menu-item>
                        </el-menu-item-group>
                        <el-submenu index="1-4">
                            <template slot="title">选项4</template>
                            <el-menu-item index="1-4-1">选项1</el-menu-item>
                        </el-submenu>
                    </el-submenu>
                    <el-submenu index="2">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>导航一</span>
                        </template>
                        <el-menu-item-group>
                            <template slot="title">分组一</template>
                            <el-menu-item index="1-1">选项1</el-menu-item>
                            <el-menu-item index="1-2">选项2</el-menu-item>
                        </el-menu-item-group>
                        <el-menu-item-group title="分组2">
                            <el-menu-item index="1-3">选项3</el-menu-item>
                        </el-menu-item-group>
                        <el-submenu index="1-4">
                            <template slot="title">选项4</template>
                            <el-menu-item index="1-4-1">选项1</el-menu-item>
                        </el-submenu>
                    </el-submenu>
                    <el-submenu index="3">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>导航一</span>
                        </template>
                        <el-menu-item-group>
                            <template slot="title">分组一</template>
                            <el-menu-item index="1-1">选项1</el-menu-item>
                            <el-menu-item index="1-2">选项2</el-menu-item>
                        </el-menu-item-group>
                        <el-menu-item-group title="分组2">
                            <el-menu-item index="1-3">选项3</el-menu-item>
                        </el-menu-item-group>
                        <el-submenu index="1-4">
                            <template slot="title">选项4</template>
                            <el-menu-item index="1-4-1">选项1</el-menu-item>
                        </el-submenu>
                    </el-submenu>
                </el-menu>
            </div>
        </transition>
    </div>
</template>

<script>
    import eventBus from "@/util/eventBus";
    export default {
        name: "navbar",
        data() {
            return {
                maskOpen: false
            }
        },
        computed: {
            maskStyle(){
                return this.maskOpen? {"display":"block"} : {"display":"none"};
            }
        },
        methods: {
            toggleMenu() {
                this.maskOpen = !this.maskOpen;
            }
        },
        mounted: function () {
            eventBus.$on("toggleMenu", () => {
                this.toggleMenu();
            })
        }
    }
</script>

<style lang="less" scoped>
    .nav-tabs {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 10;

        .nav-mask {
            background-color: rgba(0, 0, 0, .4);
            height: 100%;
        }

        .navmenus {
            width: 200px;
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;

            .el-menu {
                height: 100%;
            }
        }

        .slide-fade-enter-active {
            transition: .5s;
        }

        .slide-fade-leave-active {
            transition: .5s;
        }

        .slide-fade-enter, .slide-fade-leave-to {
            transform: translateX(-200px);
        }
    }
</style>
