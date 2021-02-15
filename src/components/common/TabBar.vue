<template>
    <div id="tab-bar">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "TabBar"
}
</script>

<style>
    #tab-bar {
        height: 49px;
        background: #f2f2f2;
        display: flex;
        justify-content: space-evenly;
        position: fixed;
        bottom: 0px;
        left: 0px;
        right: 0px;
        /* 必须要加上left:0px和right:0px，否则页面不会显示设置的边框 */
        box-shadow: 0px -1px 1px #a5a5a5
    }
</style>
