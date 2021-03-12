<template>
    <div id="details">
        <details-nav-bar class="details-navbar" @detailsBarClick="detailsBarClick" ref="navbar"></details-nav-bar>
        <scroll class="content" ref="scroll" :probetype="3"  @scrollposition="scrollposition">
            <details-swiper :topImage="topImage"></details-swiper>
            <details-goods-info :goods="detailsGoodsInfo"></details-goods-info>
            <details-shop-info :shop="detailsShopInfo"></details-shop-info>
            <details-show-image :show-image="detailsImage" @imageLoadFinish="imageLoadFinish"></details-show-image>
            <details-params :params-info="detailsParamsInfo" ref="params"></details-params>
            <details-commends-info :commends="detailsCommends" ref="comments"></details-commends-info>
            <goods-list :goodspop="recommendsInfo" class="recommends-image" ref="recommends"></goods-list>
        </scroll>
        <details-bottom-bar @messageToCar="messageToCar"></details-bottom-bar>
        <back-top @click.native="backTop" v-show="showBackTop"></back-top>
    </div>
</template>

<script>
import DetailsNavBar from "./childComponents/DetailsNavBar"
import DetailsGoodsInfo from "./childComponents/DetailsGoodsInfo"
import DetailsShopInfo from "./childComponents/DetailsShopInfo"
import DetailsShowImage from "./childComponents/DetailsShowImage"
import DetailsParams from "./childComponents/DetailsParams"
import DetailsCommendsInfo from "./childComponents/DetailsCommendsInfo"
import DetailsBottomBar from "./childComponents/DetailsBottomBar"
// 导入导航栏组件、商品的一些信息、店铺信息、商品参数、用户评论的组件
import {getDetails, getRecommendsInfo} from "network/details"
// 导入数据请求的函数
import DetailsSwiper from "./childComponents/DetailsSwiper"
// 导入轮播图下的图片组件
import {detailsGoodsInfo, detailsShopInfo, detailsParamsInfo} from "network/details"
// 导入整合好的数据的类
import Scroll from "components/common/scroll/Scroll"
// 导入滚动的组件
import GoodsList from "components/content/goods/GoodsList"
// 导入图片展示的组件，为了展示推荐的商品信息
import {debounce} from "common/utils"
// 导入防抖函数
import BackTop from "components/content/backTop/BackTop"
export default {
    name: "Details",
    components: {
      DetailsNavBar,  
      DetailsSwiper,
      DetailsGoodsInfo,
      DetailsShopInfo,
      Scroll,
      DetailsShowImage,
      DetailsParams,
      DetailsCommendsInfo,
      GoodsList,
      DetailsBottomBar,
      BackTop,
    },
    data () {
        return {
            iid: null,
            topImage: [],
            detailsGoodsInfo: {},   // 用来存储详情页中商品的一些数据
            detailsShopInfo: {},    // 用来存储详情页中商品对应店铺的一些数据
            detailsImage: {},       // 用来存储详情页的商品的展示信息和图片
            detailsParamsInfo: {},  //  用来存储详情页的一些参数信息
            detailsCommends: [],    //  用来存储用户评论数据信息
            recommendsInfo: [],     //  用来保存推荐的商品的数据
            detailsNavBarPosition: [], //  用来记录点击详情页导航栏时调转到对应内容的组件的位置信息 
            detailsNavBarIndex: null,   //  用来记录详情页导航栏和内容之间的联动相关
            showBackTop: false,         // 用来记录是否显示回到顶部的图标，默认不显示
        }
    },
    created() {
        this.iid = this.$route.params.iid
        // console.log(this.iid)

        getDetails(this.iid).then((res) => {
            console.log(res)
            const goodsData = res.result
            this.topImage = res.result.itemInfo.topImages

            this.detailsGoodsInfo = new detailsGoodsInfo(goodsData.columns, goodsData.itemInfo, goodsData.shopInfo.services)

            this.detailsShopInfo = new detailsShopInfo(goodsData.shopInfo)

            this.detailsImage = goodsData.detailInfo

            this.detailsParamsInfo = new detailsParamsInfo(goodsData.itemParams.info, goodsData.itemParams.rule)

            if(goodsData.rate.cRate !== 0) {
                this.detailsCommends = goodsData.rate.list
            }
        })
        // getDetails是请求详情页中的一些数据

        getRecommendsInfo().then((res) => {
            console.log(res)
            this.recommendsInfo = res.data.list
            console.log(this.recommendsInfo)
        })
        // getRecommendsInfo是拿到推荐的商品数据
    },
    mounted() {
        const refresh = debounce(this.$refs.scroll.refresh, 500)
        // 调用debounce函数，返回一个函数，用refresh接受
        this.$bus.$on("detailsItemImgLoad", () => {
            refresh()
        })
    },
    methods: {
        imageLoadFinish() {
            this.$refs.scroll.refresh()
            // 图片加载完后调用重刷新

            this.detailsNavBarPosition = []
            this.detailsNavBarPosition.push(0)
            this.detailsNavBarPosition.push(this.$refs.params.$el.offsetTop)
            this.detailsNavBarPosition.push(this.$refs.comments.$el.offsetTop)
            this.detailsNavBarPosition.push(this.$refs.recommends.$el.offsetTop)

            console.log(this.detailsNavBarPosition)
        },
        detailsBarClick(index) {
            // console.log(index)
            this.$refs.scroll.scrollTo(0, -this.detailsNavBarPosition[index], 300)
        },
        // 点击详情页上的导航栏对应的标签内容，跳转到对应的位置
        scrollposition(position) {
            let positionY = -position.y
            const length = this.detailsNavBarPosition.length
            // for(let i in this.detailsNavBarPosition) {
            //     // 用for in 循环遍历数组拿到的数字是String类型
            //     i = parseInt(i)
            //     // [0, 100, 1000, 10000]
            //     if(this.detailsNavBarIndex !== i && (i < (length - 1) && positionY >= this.detailsNavBarPosition[i] && positionY < this.detailsNavBarPosition[i + 1]) || this.detailsNavBarIndex !== i && (i === (length - 1) && positionY >= this.detailsNavBarPosition[i])) {
            //         this.detailsNavBarIndex = i
            //         this.$refs.navbar.currentIndex = this.detailsNavBarIndex
            //         // 拿到导航栏组件中的currentIndex数据，将滚到区域对应的数字传过去
            //     }
            // }
            // 这是第一种方法

            this.detailsNavBarPosition.push(Number.MAX_VALUE)
            // Number.MAX_VALUE是拿到js中的最大数
            for(let i = 0; i < this.detailsNavBarPosition.length - 1; i++) {
                if(this.detailsNavBarIndex !== i && positionY >= this.detailsNavBarPosition[i] && positionY < this.detailsNavBarPosition[i + 1]) {
                    // console.log(i)
                    this.detailsNavBarIndex = i
                    this.$refs.navbar.currentIndex = this.detailsNavBarIndex
                }
            }
            // 这是第二种方法

            this.showBackTop = (-position.y) > 1000
            // 回到顶部按钮的显示与隐藏
        },
        backTop() {
            this.$refs.scroll.scrollTo(0, 0)
        },
        messageToCar() {
            // console.log("hahaha")
            const product = {}
            product.image = this.topImage[0]
            product.title = this.detailsGoodsInfo.title
            product.desc = this.detailsGoodsInfo.desc
            product.price = this.detailsGoodsInfo.currentPrice
            product.iid = this.iid

            // this.$store.commit("infoToCar", product)
            this.$store.dispatch("infoToCar", product).then(data => {
                console.log(data)
                console.log(this.$toast)
                this.$toast.show(data, 1500)
                
            })

        }
        // 详情页底部点击购物车将事件传到details父组件
    },
}
</script>

<style scoped>
    #details {
        height: 100vh;
        position: relative;
        z-index: 9;
        background: #fff;
    }
    .details-navbar {
        position: relative;
        z-index: 9;
        background: #fff;
    }
    #details .content {
        height: calc(100% - 44px - 49px);
    }
    .recommends-image {
        margin-top: 10px;
    }
</style>
