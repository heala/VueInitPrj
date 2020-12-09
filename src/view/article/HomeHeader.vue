<template>
    <div>
        <Header :searchTypeArray="searchTypeArray">
            <div slot="left" @click="toggleMenu" class="el-icon-tickets"></div>
            <div slot="center">
                <span>云梦小站</span>
            </div>
            <div slot="right" :show="show" @click="showbox" :class="serchIcon">
            </div>
        </Header>
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
</template>

<script>
    import eventBus from "@/util/eventBus";
    import Header from "components/content/header/Header";

    export default {
        name: "HomeHeader",
        components: {
            Header
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
            },
            toggleMenu() {
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

<style>
</style>