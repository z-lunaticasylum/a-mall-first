<template>
    <div class="recommend">
        <div v-for="(item, index) in recommends" :key="index" class="recommend-item">
            <a :href="item.link">
                <img :src="item.image" alt="">
                <div>{{item.title}}</div>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: "HomeRecomend",
    props: {
        recommends: {
            type: Array,
            default() {
                return []
            }
        }
    }
}
</script>

<style>
    .recommend {
        display: flex;
        justify-content: space-between;
        text-align: center;
        font-size: 14px;
        padding-bottom: 20px;
        border-bottom: 8px solid #eee;
    }
    .recommend img {
        width: 70px;
        height: 70px;
        margin: 10px 0 5px 0;
    }
</style>
