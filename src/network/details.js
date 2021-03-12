import {request} from "./request"

export function getDetails(iid) {
    return request({
        url: "/detail",
        params: {
            iid
        }
    })
}
// 进行商品详情页数据的请求

export function getRecommendsInfo() {
    return request({
        url: "recommend"
    })
}

// 由于商品的详情页中关于商品的数据比较多，因此最好先将数据
// 整合再给到显示数据的组件比较好

// 这里定义了一个类，将需要用到的数据整合成类的属性(用到了ES6的语法)
export class detailsGoodsInfo{
    constructor(columns, itemInfo, services) {
        this.columns = columns      //  商品的销量等
        this.title = itemInfo.title     // 商品标题
        this.oldPrice = itemInfo.oldPrice   //  商品价格(旧/新价格)
        this.newPrice = itemInfo.price
        this.currentPrice = itemInfo.lowNowPrice    //  商品的价格是一个区间时，拿到最低价格
        this.desc = itemInfo.desc           //  商品的描述信息
        this.discount = itemInfo.discountDesc      //   商品的打折信息
        this.services = services        //  商品的快递相关信息
        this.discountBgColor = itemInfo.discountBgColor     //  折扣的背景颜色
    }
}

// 同样将每个商品的店铺信息进行整合
export class detailsShopInfo{
    constructor(shopInfo) {
        this.logo = shopInfo.shopLogo       //  店铺的logo
        this.name = shopInfo.name       //  店铺的名称
        this.score = shopInfo.score     //  店铺的评分
        this.fans = shopInfo.cFans
        this.sells = shopInfo.cSells;       //  店铺内商品的销量
        this.goodsCount = shopInfo.cGoods   //  店铺内商品总量
    }
}

// 将商品的一些参数(尺码等)进行整合
export class detailsParamsInfo{
    constructor(info, rule) {
        this.image = info.images ? info.images[0] : '';     //  有些店铺内可能没有这一项，做个判断
        this.infos = info.set;
        this.sizes = rule.tables;
    }
}