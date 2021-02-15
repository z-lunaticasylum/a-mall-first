<template>
    <div id="tab-bar-item" @click="itemClick">
        <div v-if="!isActive"><slot name="item-icon"></slot></div>
        <div v-else><slot name="item-icon-active"></slot></div>
        <div><slot name="item-text"></slot></div>
    </div>
</template>

<script>
export default {
    name: "TabBarItem",
    props: {
        path: String
    },
    computed: {
        isActive() {
            return this.$route.path.indexOf(this.path) != -1
        }
    },
    methods: {
        itemClick() {
            this.$router.push(this.path)
        }
    },
}
</script>

<style>
    #tab-bar-item {
        font-size: 12px;
        text-align: center;
        margin-top: 3px;
    }

    #tab-bar-item img{
        height: 24px;
        width: 24px;
    }
</style>
