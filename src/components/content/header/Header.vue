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
        position: static;
        top: 0;
        height: 44px;
        line-height: 44px;
        text-align: center;
        z-index: 1650;
        box-shadow: 0 3px 10px rgba(0, 0, 0, .3);
        display: flex;
        .left, .right {
            width: 60px;
            font-size: 25px;
        }

        .center {
            flex: 1;
        }
    }

</style>
