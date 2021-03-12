<template>
    <div id="home">
        <nav-bar class="nav-bar">
            <div slot="center">购物街</div>
        </nav-bar>
        <tab-control :itemnames="tabnames" class="tab-control" @changeTab="changeTab"
        ref="tabcontrol1" v-show="ceilingShow"></tab-control>
        <scroll class="content" ref="scroll" :probetype="3" @scrollposition="showScroll" :pullUpLoad="true" @pullingUp="showMoreInfo">
            <home-swiper :banners="banner" @swiperLoadFinish="tabFixed"></home-swiper>
            <home-recommend :recommends="recommend"></home-recommend>
            <home-feature></home-feature>
            <tab-control :itemnames="tabnames" class="tab-control" @changeTab="changeTab"
            ref="tabcontrol2"></tab-control>
            <goods-list :goodspop="homeGoodsShow"></goods-list>
        </scroll>
        <back-top @click.native="backTop" v-show="showBackTop"></back-top>
    </div>
</template>

<script>
import HomeSwiper from "./childComponents/HomeSwiper"
import HomeRecommend from "./childComponents/HomeRecommend"
import HomeFeature from "./childComponents/HomeFeature"


import NavBar from "components/common/navbar/NavBar"
import tabControl from "components/content/tabControl/tabControl"
import GoodsList from "components/content/goods/GoodsList"

import {getHomeMultiData, getHomeGoods} from "network/home"
// 导入获取页面商品信息的函数
import {debounce} from "common/utils"

import Scroll from "components/common/scroll/Scroll"
// 导入滚动的组件
import BackTop from "components/content/backTop/BackTop"
// 导入点击跳到页面顶部的组件
export default {
    name: "Home",
    components: {
        HomeSwiper,
        HomeRecommend,
        HomeFeature,
        NavBar,
        tabControl,
        GoodsList,
        Scroll,
        BackTop
    },
    data() {
        return {
            banner: [],
            recommend: [],
            tabnames: ["流行", "新款", "精选"],
            goods: {
                "pop": {page: 0, list: []},
                "new": {page: 0, list: []},
                "sell": {page: 0, list: []}
            },
            // 存储首页中的“流行、新款、精选”的内容
            currentType: "pop",
            // 记录首页商品属于哪种：流行、新款、精选
            showBackTop: false,
            // 用来记录是否显示回到顶部的图标，默认不显示
            tabOffsetHeight: 0,
            // 记录tabControl在滚动时需要实现吸顶的高度
            ceilingShow: false,
            // 记录要实现tabControl的吸顶效果，位于顶部的tabControl是否实现
            pagePositionY: 0,
            // 记录离开首页时的position位置
        }
    },
    computed: {
      homeGoodsShow() {
          return this.goods[this.currentType].list
      }  
    },
    activated () {
        this.$refs.scroll.scrollTo(0, this.pagePositionY, 0)
        this.$refs.scroll.refresh()
    },
    deactivated () {
        this.pagePositionY = this.$refs.scroll.getPositionY()
    },
    created() {
        this.getHomeMultiData(),
        this.getHomeGoods("pop"),
        this.getHomeGoods("new"),
        this.getHomeGoods("sell")
        // 调用三次getHomeGoods方法，拿到请求到的数据
    },
    mounted() {
        const refresh = debounce(this.$refs.scroll.refresh, 500)
        // 调用debounce函数，返回一个函数，用refresh接受
        this.$bus.$on("homeGoodsItemImgLoad", () => {
            refresh()
        })
    },
    methods: {
        // 首页点击切换商品的方法(“流行”，“新款”，“精选”)
        changeTab(index) {
            // console.log(index)
            switch(index) {
                case 0:
                this.currentType = "pop"
                break;
                case 1:
                this.currentType = "new"
                break;
                case 2: 
                this.currentType = "sell"
                break;
            }

            this.$refs.tabcontrol1.currentIndex = index
            this.$refs.tabcontrol2.currentIndex = index
        },
        // 点击回到页面顶部
        backTop() {
            this.$refs.scroll.scrollTo(0, 0)
        },
        // 子组件传递的scroll方法中的position数据,也相当于是一个监听
        // 页面滚动位置的函数
        showScroll(position) {
            // console.log(position)
            this.showBackTop = (-position.y) > 1000

            this.ceilingShow = (-position.y) > this.tabOffsetHeight
        },

        // 上拉加载更多商品,就是调用getHomeGoods方法
        showMoreInfo() {
            this.getHomeGoods(this.currentType)
        },

        // 网络请求相关的方法
        getHomeMultiData() {
            getHomeMultiData().then(res => {
                // console.log(res)
                this.banner = res.data.banner.list
                // console.log(this.banners)
                this.recommend = res.data.recommend.list
            })
        },
        // getHomeGoods方法是拿到不同类型的商品数据
        getHomeGoods(type) {
            let page = this.goods[type].page + 1
            getHomeGoods(type, page).then(res => {
                // 这个getHomeGoods函数是导入的home.js中的函数
                // console.log(res.data.list)
                this.goods[type].list = this.goods[type].list.concat(res.data.list)
                // 使用数组的concat方法，将请求到的数据保存到data属性中
                console.log(this.goods[type].list)
                this.goods[type].page += 1       
                this.$refs.scroll.finishPullUp()
            })   
        },

        // 轮播图图片加载完成后获取tabControl的offsetTop
        tabFixed() {
            this.tabOffsetHeight = this.$refs.tabcontrol2.$el.offsetTop
        }
    },
}
</script>

<style scoped>
/* 加个scoped表示这里的style样式只针对本.vue文件有效 */
    #home {
        padding-top: 44px;
        height: 100vh;
        /* vh单位代表视图高度,100vh表示元素高度为百分百试图高度 */
    }

    .nav-bar {
        position: fixed;
        top: 0px;
        left: 0px;
        right: 0px;
        z-index: 2;
        background: var(--color-tint);
    }

    .tab-control {
        position: sticky;
        top: 44px;
        z-index: 2;
    }

    .content {
        overflow: hidden;
        position: absolute;
        top: 44px;
        bottom: 49px;
        left: 0px;
        right: 0px;
    }
</style>
