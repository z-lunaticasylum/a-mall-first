import Vue from "vue"
import Vuex from "vuex"
import mutations from "./mutations"
import actions from "./actions"
import getters from "./getters"

// 一、使用vuex插件
Vue.use(Vuex)

// 二、创建vuex对象
const store = new Vuex.Store({
    state: {
        carShopList: []     //  用来存放添加进购物车中的商品内容
    },
    mutations,
        // 由于mutations中的一个函数最好只对应改变一个状态
        // 而下面的infoToCar函数改变了两个状态：temProduct.count和state.carShopList
        // 所以将一部分代码抽到actions中
        // infoToCar(state, payload) {
        //     let temProduct = null
        //     for(let item of state.carShopList) {
        //         if(item.iid === payload.iid) {
        //             temProduct = item
        //         }
        //     }
        //     if(temProduct) {
        //         temProduct.count += 1
        //     }else {
        //         payload.count = 1
        //         state.carShopList.push(payload)
        //     }
        // }
    actions,
    getters,
})

// 三、导出vuex对象
export default store