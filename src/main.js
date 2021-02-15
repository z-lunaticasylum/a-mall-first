import Vue from 'vue'
import App from './App.vue'
// import 'normalize.css/normalize.css'
import router from "./router/index"

Vue.config.productionTip = false
// 阻止启动生产消息(开发环境下，Vue 会提供很多警告来帮你对付常见的错误与陷阱。而在生产环境下，这些警告语句却没有用，反而会增加应用的体积。此外，有些警告检查还有一些小的运行时开销，这在生产环境模式下是可以避免的。)

Vue.prototype.$bus = new Vue()
// 给事件总线添加内容

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
