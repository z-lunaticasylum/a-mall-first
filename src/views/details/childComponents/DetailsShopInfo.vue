<template>
    <div class="details-shop">
        <div class="shop-title">
            <img :src="shop.logo" alt="">
            <span>{{shop.name}}</span>
        </div>
        <div class="shop-base-info">
            <div class="shop-left">
                <div class="sell-left">
                    <div>{{shop.sells}}</div>
                    <div>总销量</div>
                </div>
                <div class="sell-right">
                    <div>{{shop.goodsCount}}</div>
                    <div>全部宝贝</div>
                </div>
            </div>
            <div class="shop-right">
                <table>
                    <tr v-for="(item, index) in shop.score" :key="index">
                        <td class="shop-score-name">{{item.name}}</td>
                        <td class="shop-score-num" :class="{active: item.isBetter}">
                            <span>{{item.score}}</span>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
        <div class="into-shop">
            <div class="into-shop-text">进店逛逛</div>
        </div>
    </div>
</template>

<script>

export default {
    name: "DetailsShopInfo",
    props: {
        shop: {
            type: Object,
            default() {
                return {}
            }
        }
    }
}
</script>

<style scoped>
    .details-shop {
        border-bottom: 3px solid rgb(244, 244, 244);
        background: #fff;
    }
    .shop-title {
        margin: 25px 5px;
    }
    .shop-title img {
        height: 60px;
        width: 60px;
        border-radius: 50%;
    }
    .shop-title span {
        position: relative;
        top: -25px;
        margin-left: 10px;
    }
    .shop-base-info {
        display: flex;
        justify-content: space-evenly;
        text-align: center;
        font-size: 14px;
    }
    .shop-base-info .shop-left {
        display: flex;
        justify-content: space-evenly;
        border-right: 2px solid rgb(242, 242, 242);
        padding: 10px;
    }
    .shop-base-info .sell-left {
        margin-right: 4px;
    }
    .shop-base-info .sell-right {
        margin-left: 4px;
    }
    .shop-score-num {
        color: rgb(105, 162, 69);
    }
    .shop-right .active {
        color: rgb(218, 47, 53);
        border: none;
    }
    .into-shop {
        text-align: center;
    }
    .into-shop .into-shop-text {
        text-align: center;
        display: inline-block;
        text-align: center;
        background: rgb(241, 245, 251);
        margin: 20px 0px 25px 0px;
        height: 20px;
        width: 150px;
        line-height: 20px;
        border-radius: 10px;
    }
</style>
