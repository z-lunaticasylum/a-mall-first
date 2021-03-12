<template>
    <div id="car">
        <nav-bar class="car-nav-bar">
            <div slot="center">购物车({{carShopNums}})</div>
        </nav-bar>
        <car-list></car-list>
        <car-bottom-bar class="car-bottom-bar"></car-bottom-bar>
    </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar"
// 导入顶部的导航栏组件
import CarList from "./childCar/CarList"
// 导入购物车内容展示的组件
import CarBottomBar from "./childCar/CarBottomBar"
import {mapGetters} from "vuex"
// 从vuex中导入mapGetters，可以直接将getters中的对象传到computed中，
// 然后在标签中引用

export default {
    name: "Car",
    components: {
        NavBar,
        CarList,
        CarBottomBar,
    },
    computed: {
        ...mapGetters(["carShopNums"])
    },
}
</script>

<style>
    .car-nav-bar {
        background: var(--color-tint);
        color: #fff;
        position: relative;
        z-index: 9;
    }
    .car-bottom-bar {
        position: relative;
        z-index: 9;
        bottom: -435px;
    }
</style>
