<template>
    <div id="example-1">
        <button @click="show = !show">
            Toggle render
        </button>
        <transition name="slide-fade">
            <p v-if="show">hello</p>
        </transition>
    </div>
</template>

<script>
    export default {
        name: "Pannel",
        data(){
            return {
                show: true
            }
        }
    }
</script>

<style scoped>
    .slide-fade-enter-active {
        transition: .5s;
    }
    .slide-fade-leave-active {
        transition: .5s ;
    }
    .slide-fade-enter, .slide-fade-leave-to {
        transform: translateX(200px);
    }
</style>