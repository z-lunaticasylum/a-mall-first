<template>
    <div id="tab-control">
        <div v-for="(item, index) in itemnames" 
        :key="index"
        :class="{active:index === currentIndex}" 
        @click="itemClick(index)"
        class="tab-control-item">
            <div>{{item}}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: "tabControl",
    props: {
        itemnames: {
            type: Array,
            default() {
                return []
            }
        },
    },
    data () {
        return {
            currentIndex: 0,
        }
    },
    methods: {
        itemClick(index) {
            this.currentIndex = index

            // 子组件将事件传递出去,实现首页tab-control的点击切换
            this.$emit('changeTab', index)
        }
    }
}
</script>

<style>
    #tab-control {
        display: flex;
        justify-content: space-around;
        font-size: 14px;
        background: #ffffff;
    }
    .tab-control-item {
        /* flex: 1; */
        height: 30px;
        line-height: 30px;
        /* 用height将div的高度撑起来，看起来与其他部分 */
        /* 就有了距离 */
        
    }
    .tab-control-item div {
        padding: 0 5px 2px 5px;
    }
    .active {
        color: var(--color-high-text);
        border-bottom: 3px solid #ff5777;
    }
</style>
