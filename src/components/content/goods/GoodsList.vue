<template>
    <div class="goods-list">
        <goods-list-items v-for="(item, index) in goodspop" :key="index" :goodsitem="item"></goods-list-items>
    </div>
</template>

<script>
import GoodsListItems from "./GoodListItems"

export default {
    name: "GoodsList",
    props: {
        goodspop: {
            type: Array,
            default() {
                return []
            }
        }
    },
    components: {
        GoodsListItems
    }
}
</script>

<style>
    .goods-list {
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
        border-top: 3px;
    }
</style>
