<template>
    <div id="bottom-bar">
        <div class="bar-left">
            <img src="~assets/img/cart/tick.svg" alt="" :class="{all: isSelected}" @click="selectAll">
            <span>全选</span>
        </div>
        <div class="bar-center">
            合计：￥{{totalPrice}}
        </div>
        <div class="bar-right">
            去结账({{finalNums}})
        </div>
    </div>
</template>

<script>
import {mapGetters} from "vuex"

export default {
    name: "CarBottomBar",
    computed: {
        ...mapGetters(["carShopItems"]),
        totalPrice() {
            return this.$store.state.carShopList.filter(item => {
                return item.selected
            }).reduce((pre, item) => {
                return pre + item.price * item.count
            }, 0)
        },
        finalNums() {
            return this.$store.state.carShopList.filter(item => {
                return item.selected
            }).length
        },
        isSelected() {
            if(this.$store.state.carShopList.length === 0) {
                return false
            }
            // 判断如果购物车中没有添加进元素，直接返回false
            return !this.$store.state.carShopList.find(item => {
                return !item.selected
            })
            // find函数，找出数组中符合条件的元素就停止；在这里找出数组中的.selected属性
            // 不为true(取反了)就返回，同时对返回的再取反，结果就是false
        }
    },
    methods: {
        selectAll() {
            if(this.isSelected) {
                this.$store.state.carShopList.forEach(item => {
                    item.selected = false
                })
            }else {
                this.$store.state.carShopList.forEach(item => {
                    item.selected = true
                })
            }

            console.log(this.carShopItems)
        }
    }
}
</script>

<style scoped>
    #bottom-bar {
        height: 40px;
        background-color: rgb(238, 238, 238);
        display: flex;
        justify-content: space-between;
        text-align: center;
        font-size: 14px;
        align-items: center;
    }
    .bar-left {
        margin-left: 5px;
    }
    .bar-right {
        height: 100%;
        background-color: lightsalmon;
        color: #fff;
        line-height: 40px;
    }
    .all {
        background-color: rgb(255, 87, 119);
    }
</style>
