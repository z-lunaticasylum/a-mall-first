<template>
    <div>
        <nav-bar class="details-navbar">
            <div slot="left" class="details-navbar-back" @click="detailsBack">
                <img src="~assets/img/common/back.svg" alt="">
            </div>
            <div slot="center" class="details-titles">
                <div v-for="(item, index) in navBarTitles" :key="index" 
                :class="{active: index === currentIndex}" 
                @click="titlesStyleChange(index)">{{item}}</div>
            </div>
        </nav-bar>
    </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar"

export default {
    name: "DetailsNavBar",
    components: {
        NavBar,
    },
    data () {
        return {
            navBarTitles: ["商品", "参数", "评论", "推荐"],
            currentIndex: 0,
        }
    },
    methods: {
        detailsBack() {
            this.$router.back()
        },
        titlesStyleChange(index) {
            this.currentIndex = index

            this.$emit("detailsBarClick", index)
            // 将详情页的导航栏的点击事件传递到父组件，实现点击页面对应的内容联动
        }
    }
}
</script>

<style scoped>
    .details-navbar {
        color: black;
    }
    .details-titles {
        display: flex;
        justify-content: space-evenly;
        font-size: 14px;
    }
    .details-navbar-back {
        margin-top: 9px;
    }
    .active {
        color: var(--color-high-text);
    }
</style>
