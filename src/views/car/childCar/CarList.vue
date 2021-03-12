<template>
    <div id="car-list">
        <scroll class="content" ref="scroll">
            <car-list-items class="carlistitem" v-for="(item, index) in carShopItems" :key="index" :carshopitems="item">
            </car-list-items>
        </scroll>
    </div>
</template>

<script>
import {mapGetters} from "vuex"
import scroll from "components/common/scroll/Scroll"
import CarListItems from "./CarListItems"

export default {
    name: "CarList",
    components: {
        scroll,
        CarListItems,
    },
    computed: {
        ...mapGetters(["carShopItems"])
    },
    activated() {
        this.$refs.scroll.refresh()
    },
}
</script>

<style scoped>
    .content {
        /* height: calc(100% - 44px - 49px); */
        position: absolute;
        top: 44px;
        left: 0;
        right: 0;
        bottom: 49px;
    }
    .carlistitem {
        height: 100%;
        overflow: hidden;
    }

</style>
