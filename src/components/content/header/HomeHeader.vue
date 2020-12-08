<template>
    <div>
        <div class="homeHeader">
            <div class="head-title">
                <div class="left" @click="toggleMenu">
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
                        <el-input ref="searchbox" placeholder="请输入内容" class="input-with-select">
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
    </div>
</template>

<script>
    import eventBus from "@/util/eventBus";
    export default {
        name: "HomeHeader",
        components: {
        },
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
                    this.$refs.searchbox.focus();
                }
            },
            toggleMenu(){
                eventBus.$emit("toggleMenu");
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
</style>
