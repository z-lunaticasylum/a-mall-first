import {COUNT_ADD, CAR_SHOP_PUSH} from "./mutations-type"

const actions = {
    infoToCar(context, payload) {
        return new Promise((resolve, reject) => {
            let temProduct = null
            for(let item of context.state.carShopList) {
                if(payload.iid === item.iid) {
                    temProduct = item
                }
            }
    
            if(temProduct) {
                context.commit(COUNT_ADD, temProduct)
                resolve("商品添加购物车成功")
            }else {
                payload.count = 1
                payload.selected = false     //  给添加进购物车中的商品增添一个属性，用来判断是否被选中
                context.commit(CAR_SHOP_PUSH, payload)
                resolve("商品添加购物车成功")
            }
        })
    }
}

export default actions