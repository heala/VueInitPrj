<template>
    <div ref="tabbar" :style="maskStyle" class="nav-tabs" @mousewheel.prevent @touchmove.prevent>
        <div @click="toggleMenu" class="nav-mask"></div>
        <transition>
            <div v-if="maskOpen" class="navmenus">
                <div class="user-icon" @click="tologin">
                    <el-avatar icon="el-icon-user-solid" :size="60" src="~assets/img/face.jpg"/>
                </div>
                <el-menu
                        background-color="#fff0cd"
                        text-color="#1a3959"
                        active-text-color="#E6A23C"
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
                            <el-menu-item @click="logout">退出</el-menu-item>
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
    import {removeToken} from '@/network/auth'
    export default {
        name: "navbar",
        data() {
            return {
                maskOpen: false
            }
        },
        computed: {
            maskStyle() {
                return this.maskOpen ? {"display": "block"} : {"display": "none"};
            }
        },
        methods: {
            toggleMenu() {
                this.maskOpen = !this.maskOpen;
            },
            logout(){
                removeToken();
                this.$store.commit("setName", "")
                this.toggleMenu();
            },
            tologin(){
                let userName = this.$store.state.name;
                if(userName == '') {
                    this.$router.push("login")
                } else {
                    this.$router.push("userInfo")
                }
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
        top: 44px;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 1700;

        .user-icon {
            width: 200px;
            height: 100px;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #fff0cd;

            img {
                border: solid 5px #EEDABB;
                height: 70px;
                width: 70px;
                border-radius: 50%;
            }
        }

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
