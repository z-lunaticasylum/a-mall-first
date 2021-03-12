<template>
    <swiper>
        <swiper-item v-for="item in banners" :key="item.acm">
            <a :href="item.link">
                <img :src="item.image" alt="" @load="swiperShowImage">
            </a>
        </swiper-item>
    </swiper>
</template>

<script>
import {Swiper, SwiperItem} from "components/common/swiper"

export default {
    name: "HomeSwiper",
    components: {
        Swiper,
        SwiperItem
    },
    data() {
        return {
            isLoadFinish: false
        }
    },
    props: {
        banners: {
            type: Array,
            default() {
                return []
            }
        }
    },
    methods: {
        swiperShowImage() {
            if(!this.isLoadFinish) {
                this.$emit("swiperLoadFinish")
                // console.log("图片加载完成")
                this.isLoadFinish = true
            }
        }
        // 监听轮播图的图片是否加载完成，完成后将将事件发送出去
        // 才能计算出准确的tabControl的offsetTop，即距离页面顶部的距离

        // 由于轮播图有多张图片，而加载完一张就会发送一次这个事件，考虑到性能
        // 只发送一次事件
    },
}
</script>

<style>

</style>
