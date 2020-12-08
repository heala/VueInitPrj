<template>
    <div>
        <div class="homeHeader">
            <div class="head-title">
                <div class="left">
                    <i class="el-icon-tickets"></i>
                </div>
                <div class="title">
                    <span>云梦小站</span>
                </div>
                <div class="search" @click="showbox">
                    <i :class="serchIcon"></i>
                </div>
            </div>
            <el-collapse-transition>
                <div v-show="show">
                    <div class="transition-box">
                        <el-input placeholder="请输入内容" class="input-with-select" id="searchbox">
                            <el-select slot="prepend" style="width: 90px"
                                       v-model="searchType"
                                       placeholder="请选择">
                                <el-option v-for="type in searchTypeArray" :key="type.value" :label="type.label"
                                           :value="type.value"></el-option>
                            </el-select>
                        </el-input>
                    </div>
                </div>
            </el-collapse-transition>
        </div>
        <div class="navmenu">
            <el-col :span="12">
                <el-menu default-active="2"
                         class="el-menu-vertical-demo">
                    <el-submenu index="1">
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
                    <el-menu-item index="2">
                        <i class="el-icon-menu"></i>
                        <span slot="title">导航二</span>
                    </el-menu-item>
                    <el-menu-item index="3" disabled>
                        <i class="el-icon-document"></i>
                        <span slot="title">导航三</span>
                    </el-menu-item>
                    <el-menu-item index="4">
                        <i class="el-icon-setting"></i>
                        <span slot="title">导航四</span>
                    </el-menu-item>
                </el-menu>
            </el-col>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HomeHeader",
        data() {
            return {
                show: false,
                searchType: 1
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
                if (this.show) {
                    document.getElementById("searchbox").focus();
                }
            }
        },
        computed: {
            serchIcon() {
                return this.show ? 'el-icon-close' : 'el-icon-search';
            }
        }
    }
</script>

<style lang="less" scoped>
    .homeHeader {
        position: sticky;
        top: 0;
        z-index: 9;
        height: 44px;
        background-color: #fff;
        line-height: 44px;
        text-align: center;

        box-shadow: 0 3px 10px rgba(100, 100, 100, .3);

        .head-title {
            display: flex;

            .left, .search {
                width: 60px;
            }

            .title {
                flex: 1;
            }
        }

    }
    .navmenu {
        position: absolute;
        height: 100%;
        top: 0;
        left: 0;
        z-index: 11;
        background-color: #fff;
        width: 200px;
    }
</style>
