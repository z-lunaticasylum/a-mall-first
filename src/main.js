import Vue from 'vue'
import App from './App.vue'
import router from "./router/index"
import store from "./store/index"
import Toast from "components/common/toast"
// 导入toast默认就导入了该文件夹下的index.js文件
import LazyLoad from "vue-lazyload"

Vue.config.productionTip = false
// 阻止启动生产消息(开发环境下，Vue 会提供很多警告来帮你对付常见的错误与陷阱。而在生产环境下，这些警告语句却没有用，反而会增加应用的体积。此外，有些警告检查还有一些小的运行时开销，这在生产环境模式下是可以避免的。)

Vue.prototype.$bus = new Vue()
// 给事件总线添加内容

Vue.use(Toast)
// 将Toast作为插件导入，并使用插件
// 调用.use后，会回调插件(组件)的.install方法

Vue.use(LazyLoad)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
