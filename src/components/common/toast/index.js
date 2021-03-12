// 这个文件的作用是将封装好的组件作为插件使用，同时将其导出
import Toast from "./Toast.vue"

const object = {}

object.install = function(Vue) {
    console.log("哈哈哈")
    const toastConstructor = Vue.extend(Toast)
    // 创建一个组件构造器，使用的是Vue.extend()方法，里面会传一个参数
    // 这个参数是要渲染的模板对象

    const toast = new toastConstructor()
    // 有了组件构造器后，用new创建出来一个组件对象(注意加一个括号)

    toast.$mount(document.createElement("div"))
    // 将创建出来的组件对象手动挂载到一个元素上(这个元素自己创建)

    document.body.appendChild(toast.$el)
    // 将组件对象的标签模板添加到整个的页面上

    Vue.prototype.$toast = toast
}

export default object