<template>
    <div class="tabbar">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "Tabbar"
    }
</script>

<style scoped>
    .tabbar {
        display: flex;
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        height: 49px;
        box-shadow: 0 -2px 1px rgba(100, 100, 100, .3);
        background-color: #addb93;
    }
</style>