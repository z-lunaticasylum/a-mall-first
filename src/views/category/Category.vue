<template>
    <div class="wrapper" ref="a">
        <ul class="content">
            <li>哈哈哈哈</li>
            <li>哈哈哈哈</li>
            <li>哈哈哈哈</li>
            <li>哈哈哈哈</li>
            <li>哈哈哈哈</li>
            <li>哈哈哈哈</li>
            <li>哈哈哈哈</li>
            <li>哈哈哈哈</li>
            <li>哈哈哈哈</li>
            <li>哈哈哈哈</li>
            <li>哈哈哈哈</li>
            <li>哈哈哈哈</li>
            <li>哈哈哈哈</li>
            <li>哈哈哈哈</li>
            <li>哈哈哈哈</li>
            <li>哈哈哈哈</li>
            <li>哈哈哈哈</li>
            <li>哈哈哈哈</li>
            <li>哈哈哈哈</li>
            <li>哈哈哈哈</li>
            <li>哈哈哈哈</li>
            <li>哈哈哈哈</li>
            <li>哈哈哈哈</li>
            <li>哈哈哈哈</li>
            <li>哈哈哈哈</li>
            <li>哈哈哈哈</li>
            <li>哈哈哈哈</li>
            <li>哈哈哈哈</li>
            <li>哈哈哈哈</li>
            <li>哈哈哈哈</li>
            <li>哈哈哈哈</li>
            <li>哈哈哈哈</li>
            <li>哈哈哈哈</li>
            <li>哈哈哈哈</li>
            <li>哈哈哈哈</li>
            <li>哈哈哈哈</li>
            <li>哈哈哈哈</li>
            <li>哈哈哈哈</li>
            <li>哈哈哈哈</li>
            <li>哈哈哈哈</li>
            <li>哈哈哈哈</li>
            <li>哈哈哈哈</li>
            <li>哈哈哈哈</li>
            <li>哈哈哈哈</li>
            <li>哈哈哈哈</li>
            <li>哈哈哈哈</li>
            <li>哈哈哈哈</li>
            <li>哈哈哈哈</li>
            <li>哈哈哈哈</li>
            <li>哈哈哈哈</li>
            <li>哈哈哈哈</li>
            <li>哈哈哈哈</li>
            <li>哈哈哈哈</li>
            <li>哈哈哈哈</li>
            <li>哈哈哈哈</li>
            <li>哈哈哈哈</li>
            <li>哈哈哈哈</li>
            <li>哈哈哈哈</li>
            <li>哈哈哈哈</li>
            <li>哈哈哈哈</li>
            <li>哈哈哈哈</li>
            <li>哈哈哈哈</li>
            <li>哈哈哈哈</li>
            <li>哈哈哈哈</li>
            <li>哈哈哈哈</li>
            <li>哈哈哈哈</li>
            <li>哈哈哈哈</li>
            <li>哈哈哈哈</li>
            <li>哈哈哈哈</li>
            <li>哈哈哈哈</li>
            <li>哈哈哈哈</li>
            <li>哈哈哈哈</li>
            <li>哈哈哈哈</li>
            <li>哈哈哈哈</li>
            <li>哈哈哈哈</li>
            <li>哈哈哈哈</li>
            <li>哈哈哈哈</li>
            <li>哈哈哈哈</li>
            <li>哈哈哈哈</li>
            <li>哈哈哈哈</li>
            <li>哈哈哈哈</li>
            <li>哈哈哈哈</li>
            <li>哈哈哈哈</li>
            <li>哈哈哈哈</li>
            <li>哈哈哈哈</li>
            <li>哈哈哈哈</li>
            <li>哈哈哈哈</li>
            <li>哈哈哈哈</li>
            <li>哈哈哈哈</li>
            <li>哈哈哈哈</li>
            <li>哈哈哈哈</li>
            <li>哈哈哈哈</li>
            <li>哈哈哈哈</li>
            <li>哈哈哈哈</li>
            <li>哈哈哈哈</li>
            <li>哈哈哈哈</li>
            <li>哈哈哈哈</li>
            <li>哈哈哈哈</li>
            <li>哈哈哈哈</li>
            <li>哈哈哈哈</li>
        </ul>
    </div>
</template>

<script>
import BScroll from "better-scroll"
// npm后导入better-scroll
export default {
    name: "Category",
    data () {
        return {
            scroll: null
        }
    },
    mounted() {
        this.scroll = new BScroll(this.$refs.a, {

        })
    },
}
</script>

<style scoped>
    .wrapper {
        height: 150px;
        background: blue;
        overflow-y: scroll;
    }
</style>
