<template>
    <div ref="tabbar" :style="maskStyle" class="nav-tabs">
        <div @click="toggleMenu" class="nav-mask"></div>
        <transition>
            <div v-if="maskOpen" class="navmenus">
                <div class="user-icon" @click="tologin">
                    <el-avatar icon="el-icon-user-solid" :size="70" :src="avatar"/>
                </div>
                <el-menu
                        background-color="#fff0cd"
                        text-color="#1a3959"
                        active-text-color="#E6A23C"
                        :unique-opened=true
                >
                    <el-menu-item index="2" @click="logout">
                        <i class="el-icon-menu"></i>
                        <span slot="title">我的帖子</span>
                    </el-menu-item>
                    <el-menu-item index="3" @click="logout">
                        <i class="el-icon-menu"></i>
                        <span slot="title">我的回复</span>
                    </el-menu-item>
                    <el-menu-item index="1" @click="logout">
                        <i class="el-icon-menu"></i>
                        <span slot="title">退出</span>
                    </el-menu-item>
                </el-menu>
            </div>
        </transition>
    </div>
</template>

<script>
    import eventBus from "@/util/eventBus";
    import {getToken} from "network/auth";

    export default {
        name: "navbar",
        data() {
            return {
                maskOpen: false,
                avatar: this.$store.getters.avatar
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
                this.$store.dispatch("logout");
                this.toggleMenu();
            },
            tologin(){
                let token = getToken();
                if(!token) {
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
