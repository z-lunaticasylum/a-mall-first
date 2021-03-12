<template>
    <div id="car-list-items">
        <div>
            <div class="car-goods-item">
                <check-button class="check-button" 
                @click.native="selectButton" :isactive="isactive"></check-button>
                <img :src="carshopitems.image" alt="">
                <div class="item-text">
                    <div class="one-line title-text">{{carshopitems.title}}</div>
                    <div class="one-line desc-text">{{carshopitems.desc}}</div>
                    <div class="item-price">
                        <span class="price-text">￥{{carshopitems.price}}</span>
                        <span class="count-text">x{{carshopitems.count}}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CheckButton from "./CheckButton"

export default {
    name: "CarListItems",
    data() {
        return {
            isactive: false
        }
    },
    props: {
        carshopitems: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    components: {
        CheckButton  
    },
    methods: {
        selectButton() {
            this.carshopitems.selected = !this.carshopitems.selected
            this.isactive = this.carshopitems.selected
            // console.log(this.carShopItems)
            // console.log(this.carShopItems.selected)
            // console.log("hhhh")
        }
        // changeSelected(selected) {
        //     if(this.carShopItems.)
        //     console.log(this.carShopItems)
        // }
    }
}
</script>

<style scoped>
    .car-goods-item {
        display: flex;
        height: 150px;
        padding: 10px;
        border-bottom: 2px solid rgb(214, 214, 216);
    }
    .check-button {
        position: relative;
        top: 56px;
        right: 4px;
    }
    .car-goods-item img {
        height: 130px;
        width: 115px;
        border-radius: 8px;
    }
    .item-text {
        margin: 0px 5px;
    }
    .car-goods-item .one-line {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        width: 200px;
    }
    .car-goods-item .title-text {
        color: rgb(59, 59, 59);
        margin-bottom: 20px;
    }
    .desc-text {
        font-size: 13px;
        color: rgb(118, 118, 118);
        margin-bottom: 25px;
    }
    .item-price {
        display: flex;
        justify-content: space-between;
        margin-top: 45px;
    }
    .price-text {
        font-size: 16px;
        color: rgb(255, 114, 63); 
    }
</style>
