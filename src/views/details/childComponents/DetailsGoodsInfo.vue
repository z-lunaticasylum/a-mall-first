<template>
    <div v-if="Object.keys(goods).length !== 0" class="detailsGoods">
        <div class="goodsTitle">{{goods.title}}</div>
        <div class="goodsPrice">
            <span class="newPrice">{{goods.newPrice}}</span>
            <span v-if="goods.oldPrice" class="oldPrice">{{goods.oldPrice}}</span>
            <span v-if="goods.discount" class="discount" 
            :style="{background: goods.discountBgColor}">{{goods.discount}}</span>
        </div>
        <div class="goodsOtherInfo">
            <span>{{goods.columns[0]}}</span>
            <span>{{goods.columns[1]}}</span>
            <span>{{goods.columns[2]}}</span>
        </div>
        <!-- <div class="goods-express" v-for="(item, index) in goods.services" :key="index">
            <img src="item.icon" alt="">
            <span>{{item.name}}</span>
        </div> -->
        <div class="goods-express">
            <span class="info-service-item" v-for="index in goods.services.length-1" :key="index">
                <img :src="goods.services[index-1].icon" v-if="goods.services[index-1].icon">
                <span>{{goods.services[index-1].name}}</span>
            </span>
        </div>
    </div>
</template>

<script>
export default {
    name: "DetailsGoodsInfo",
    props: {
        goods: {
            type: Object,
            default() {
                return {}
            }
        }
    }
}
</script>

<style scoped>
    .detailsGoods {
        padding: 3px;
    }
    .goodsTitle {
        margin: 8px 0px;
        color: black
    }
    .goodsPrice {
        margin-bottom: 10px;
    }
    .goodsPrice .discount {
        color: #ffffff;
        border-radius: 10px;
        font-size: 14px;
        margin-left: 5px;

        /* 让整个的折扣字体上浮 */
        position: relative;
        bottom: 8px;
    }
    .goodsPrice .newPrice {
        font-size: 25px;
        color: var(--color-tint);
        margin-right: 5px;
    }
    .goodsPrice .oldPrice {
        font-size: 13px;
        text-decoration: line-through;  /* 在文字中间加一条横线 */
    }
    .goodsOtherInfo {
        display: flex;
        justify-content: space-between;
        font-size: 13px;
        border-bottom: 2px solid rgb(242, 242, 242);
        color: rgb(203, 203, 203);
        padding: 5px;
    }
    .goods-express {
        height: 60px;
        font-size: 12px;  
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 4px solid rgb(242, 242, 242);
    }
    .goods-express img{
        height: 12px;
        width: 12px;
    }
</style>
