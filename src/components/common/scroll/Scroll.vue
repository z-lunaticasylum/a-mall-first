<template>
    <div class="wrapper" ref="wrapper">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import BScroll from "better-scroll"

export default {
    name: "Scroll",
    data () {
        return {
            scroll: null
        }
    },
    props: {
        probetype: {
            type: Number,
            default() {
                return 0
            }
        },
        pullUpLoad: {
            type: Boolean,
            default() {
                return false
            }
        }
    },
    mounted() {
        this.scroll = new BScroll(this.$refs.wrapper, {
            click: true,
            probeType: this.probetype,
            // 这里的probetype是设置是否监听滚动
            // 其值由父组件通过props属性传递过来的值决定
            pullUpLoad: this.pullUpLoad
            // 这里的pullUpLoad是设置是否进行上拉加载更多
            // 其值由父组件通过props属性传递过来的值决定
        })
        // 要找到指定的标签,最好是通过标签的属性ref,然后使用this.$refs.属性名
        // 来找到
        this.scroll.on("scroll", (position) => {
            // console.log(position)
            this.$emit("scrollposition", position)
            // 通过$emit事件将子组件的position数据传递出去
        })

        this.scroll.on("pullingUp", () => {
            // console.log("上拉加载更多")
            this.$emit("pullingUp")
        })
    },
    methods: {
        scrollTo(x, y, time=300) {
            this.scroll && this.scroll.scrollTo(x, y, time)
        },
        // 定义一个方法用来实现点击跳转到指定的position，方便调用
        finishPullUp() {
            this.scroll && this.scroll.finishPullUp()
        },
        refresh() {
            this.scroll && this.scroll.refresh()
        },
        // 定义一个方法用来实现页面的重刷新
        getPositionY() {
            return this.scroll.y
        },
        // 定义一个方法用来获得滚动到某个位置时的位置position的y值
        // 先判断scroll是否存在，即是否已经加载出来了，是则返回scroll.y值，不是则返回0
    },
}
</script>

<style>

</style>
