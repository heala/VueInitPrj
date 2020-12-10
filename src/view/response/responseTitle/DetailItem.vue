<template>
    <div class="reply-container">
        <div class="head">
            <div class="touxiang"></div>
            <div class="middle"></div>
            <div class="stairNo"></div>
        </div>
        <div class="content">
            <mavon-editor
                    defaultOpen="preview"
                    :ishljs="true"
                    :subfield="false"
                    :toolbarsFlag="false"
                    v-model="content"/>
        </div>
        <div class="bottom">
            <div class="opinion">
                <span class="icon-home"></span>
                <span class="icon-my"></span>
            </div>
            <div class="reply">
                <span class="iconfont icon-huifu"></span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "DetailItem",
        data(){
            return {
            }
        },
        props: {
            content: {
                type: String,
                default: ''
            }
        }
    }
</script>

<style lang="less" scoped>
    .head {
        height: 80px;
        background-color: #63a35c;
        display: flex;
        .touxiang,.stairNo {
            width: 80px;
        }
        .middle {
            flex: 1;
        }
    }
    .content {
        .v-note-wrapper {
            min-height: 100px;
        }
    }
    .bottom {
        height: 36px;
        background-color: #795da3;
    }
</style>
