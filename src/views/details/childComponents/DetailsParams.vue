<template>
    <div id="details-params">
        <div class="goods-size">
            <table v-for="(item, index) in paramsInfo.sizes" :key="index">
                <tr v-for="(items, indexs) in item" :key="indexs">
                    <td v-for="(itemss, indexss) in items" :key="indexss">{{itemss}}</td>
                </tr>
            </table>
        </div>
        <div class="goods-other-info">
            <table>
                <tr v-for="(item, index) in paramsInfo.infos" :key="index">
                    <td class="item-key">{{item.key}}</td>
                    <td class="item-value">{{item.value}}</td>
                </tr>
            </table>
        </div> 
        <div class="goods-other-img">
            <img src="paramsInfo.image" alt="">
        </div> 
    </div>
</template>

<script>
export default {
    name: "DetailsParams",
    props: {
        paramsInfo: {
            type: Object,
            defuault() {
                return {}
            }
        }
    }
}
</script>

<style scoped>
    #details-params {
        padding: 25px 10px 0 10px;
        font-size: 13px;
        background: #fff;
    }
    #details-params table{
        width: 100%;
        border-collapse: collapse;
    }
    #details-params table tr {
        height: 42px;
    }
    #details-params table tr td {
        border-bottom: 1px solid rgba(100,100,100,.1);
    }
    .item-key {
        width: 85px;
    }
    .item-value {
        color: var(--color-tint)
    }
    .goods-other-img img {
        width: 100%;
    }
</style>
