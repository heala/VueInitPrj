<template>
    <div class="head">
        <div class="left">
            <slot name="left"></slot>
        </div>
        <div class="center">
            <slot name="center"></slot>
        </div>
        <div class="right">
            <slot name="right"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style lang="less">
    .head {
        position: sticky;
        top: 0;
        height: 44px;
        background-color: #fff;
        line-height: 44px;
        text-align: center;
        box-shadow: 0 3px 10px rgba(0, 0, 0, .3);
        display: flex;
        z-index: 9;
        .left, .right {
            width: 60px;
            font-size: 25px;
        }

        .center {
            flex: 1;
        }
    }

</style>
