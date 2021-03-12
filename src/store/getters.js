const getters = {
    carShopNums(state) {
        return state.carShopList.length 
    },
    // 返回购物车中的商品的数量

    carShopItems(state) {
        return state.carShopList
    }
    // 返回购物车中的商品
}

export default getters