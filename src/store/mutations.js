import {COUNT_ADD, CAR_SHOP_PUSH} from "./mutations-type"

const mutations = {
    [COUNT_ADD](state, temProduct) {
        temProduct.count += 1
    },

    [CAR_SHOP_PUSH](state, payload) {
        state.carShopList.push(payload)
    }
}
export default mutations



