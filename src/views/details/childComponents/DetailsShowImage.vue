<template>
    <div id="details-show" v-if="Object.keys(showImage).length !== 0">
        <div class="show-desc" v-if="this.showImage.detailImage">
            <div class="show-spot show-spot-left"></div>
            <div class="show-desc-text">{{this.showImage.desc}}</div>
            <dir class="show-spot show-spot-right"></dir>
        </div>
        <div class="show-words">{{this.showImage.detailImage[0].key}}</div>
        <div class="show-img" v-for="(item, index) in showImage.detailImage[0].list" :key="index">
            <img :src="item" alt="" @load="imgLoadFinish">
        </div>
    </div>
</template>

<script>
export default {
    name: "DetailsShowImage",
    data () {
        return {
            counter: 0,     //  记录加载完成的图片的数量
            imgNums: 0,     //  当前详情页的展示图片的总数
        }
    },
    props: {
        showImage: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    methods: {
        imgLoadFinish() {
            this.counter++
            if(this.counter === this.imgNums) {
                this.$emit("imageLoadFinish")
            }
        }
    },
    watch: {
        showImage: function() {
            this.imgNums = this.showImage.detailImage[0].list.length
            // 拿到当前详情页的展示图片的总数
        }
    },
    //  vue中的watch是监听data或者props中的数据变化的，当监听到对应的数据时，会执行对应的
    // 函数
}
</script>

<style scoped>
    #details-show {
        padding: 15px 0;
        border-bottom: 5px solid #f2f5f8;
        background: #fff;
    }
    .show-spot, .show-spot {
        width: 90px;
        height: 1px;
        background-color: #a3a3a5;
        position: relative;
    }
    .show-spot-left {
        float: left;
    }
    .show-spot-right {
        float: right;
    }
    .show-spot::before, .show-spot::after {
        content: '';
        position: absolute;
        width: 5px;
        height: 5px;
        background-color: #333;
        bottom: 0;
    }
    .show-desc-text {
        padding: 15px 0;
        font-size: 13px;
        margin: 0 8px;
        color: rgb(146, 146, 146);
    }
    .show-words {
        margin: 10px 0;
    }
    .show-img img {
        width: 100%;
    }
</style>
