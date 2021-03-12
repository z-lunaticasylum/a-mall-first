<template>
    <swiper class="details-swiper">
        <swiper-item v-for="(item, index) in topImage" :key="index">
            <img :src="item" alt="">
        </swiper-item>
    </swiper>
</template>

<script>
import {Swiper, SwiperItem} from "components/common/swiper"
// 导入轮播图的框架

export default {
    name: "DetailsSwiper",
    components: {
        Swiper,
        SwiperItem
    },
    props: {
        topImage: {
            type: Array,
            default() {
                return []
            }
        }
    }
}
</script>

<style>
    .details-swiper {
        height: 300px;
    }
</style>
