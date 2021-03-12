<template>
    <div class="nav-bar">
        <div class="left"><slot name="left"></slot></div>
        <div class="center"><slot name="center"></slot></div>
        <div class="right"><slot name="right"></slot></div>
    </div>
</template>

<script>
export default {
    name: "NavBar"
}
</script>

<style>
    .nav-bar {
        display: flex;
        height: 44px;
        /* 导航的行高默认是44px */
        line-height: 44px;
        text-align: center;
        /* 引用定义好的css变量 */
        color: #fff;
        box-shadow: 0 1px 1px rgba(100,100,100,.2)
    }
    .nav-bar .left, .right {
        width: 50px;
    }
    .nav-bar .center {
        flex-grow: 1;
        /* flex-grow,对剩余空间进行分配，为1时将剩余空间占满 */
    }
</style>
