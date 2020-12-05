<template>
    <div class="container">
        <Tabbar>
            <TabbarItem activeColor="red" path="/pannel" iconclass="icon-home" title="首页"></TabbarItem>
            <TabbarItem path="/category" iconclass="icon-category" title="分类"></TabbarItem>
            <TabbarItem path="/cart" iconclass="icon-aui-icon-cart" title="购物车"></TabbarItem>
            <TabbarItem path="/my" iconclass="icon-my" title="我的"></TabbarItem>
        </Tabbar>
        <div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import Tabbar from "components/tabbar/Tabbar";
    import TabbarItem from "components/tabbar/TabbarItem";

    export default {
        name: "Home",
        components: {
            Tabbar,
            TabbarItem
        }
    }
</script>

<style scoped>

</style>