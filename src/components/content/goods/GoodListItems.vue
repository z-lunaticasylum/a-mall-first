<template>
    <div class="goods-list-items" @click="showDetails">
        <img v-lazy="showImg" alt="" @load="imgLoad">
        <div class="goodsitem-text">
            <p>{{goodsitem.title}}</p>
            <span class="price">{{goodsitem.price}}</span>
            <span class="collect">{{goodsitem.cfav}}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: "GoodsListItems",
    props: {
        goodsitem: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    computed: {
      showImg() {
        return this.goodsitem.image || this.goodsitem.show.img
        // 为什么这里调换了顺序就会报错？
      }
    },
    methods: {
      imgLoad() {
        // this.$bus.$emit("goodsItemImgLoad")
        // 使用事件总线，当图片加载完成后将事件发送出去

        // 由于这个组件被两个地方调用了，分别是首页和详情页，因此需要对首页和详情页
        // 的图片分别加载完后的重刷新进行判断
        if(this.$route.path.indexOf("/home") !== -1) {
          this.$bus.$emit("homeGoodsItemImgLoad")
        }else if(this.$route.path.indexOf("/recommend") !== -1) {
          this.$bus.$emit("detailsItemImgLoad")
        }
      },
      showDetails() {
        this.$router.push("/details/" + this.goodsitem.iid)
      }
    }
}
</script>

<style>
  .goods-list-items {
    padding-bottom: 40px;
    position: relative;

    width: 48%;
  }

  .goods-list-items img {
    width: 100%;
    border-radius: 5px;
  }

  .goodsitem-text {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }

  .goodsitem-text p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }

  .goodsitem-text .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }

  .goodsitem-text .collect {
    position: relative;
  }

  .goodsitem-text .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>
