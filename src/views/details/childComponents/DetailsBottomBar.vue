<template>
    <div id="bottom-bar">
        <div class="bar-left">
            <div>
                <i class="icon service"></i>
                <span>客服</span>
            </div>
            <div>
                <i class="icon shop"></i>
                <span>店铺</span>
            </div>
            <div>
                <i class="icon collect"></i>
                <span>收藏</span>
            </div>
        </div>
        <div class="bar-center" @click="shopCarClick">
            <div>加入购物车</div>
        </div>
        <div class="bar-right">
            <div>购买</div>
        </div>
    </div>
</template>

<script>
export default {
    name: "DetailsBottomBar", 
    methods: {
        shopCarClick() {
            this.$emit("messageToCar")
        }
    }

}
</script>

<style scoped>
    #bottom-bar {
        height: 49px;
        position: relative;
        display: flex;
        text-align: center;
        line-height: 49px;
        
    }
    .bar-left {
        width: 50%;
        display: flex;
        justify-content: space-around;
        background-color: #fff;
    }
    .bar-left .icon {
        display: block;
        width: 22px;
        height: 22px;
        margin: 10px auto 3px;  
        background: url("~assets/img/detail/detail_bottom.png") 0 0/100%;
    }
    .bar-left .service {
    background-position:0 -54px;
    }
    .bar-left .shop {
    background-position:0 -98px;
    }
    .bar-left span {
        position: relative;
        bottom: 20px;
        font-size: 13px;
    }
    .bar-center {
        width: 25%;
        background-color: rgb(255, 231, 24);
        font-size: 15px;
    }
    .bar-right {
        width: 25%;
        background-color: rgb(255, 101, 155);
        font-size: 15px;
        color: #fff;
    }
</style>
