import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import mitt from 'mitt'
import Plugins from '@plugins'
import { CONFIG } from '@config/index'
import { DATE_FORMAT } from '@utils/format'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import '@styles/element-ui.scss'
import '@/globalComponents'// 自动注册全局组件
import "tailwindcss/tailwind.css"
import { setStorage, getStorage } from '@utils/storage'
DATE_FORMAT()
Vue.config.productionTip = false
Vue.prototype.CONFIG = CONFIG
Vue.prototype.mitt = mitt()
window.mitt = Vue.prototype.mitt
Vue.prototype.setStorage = setStorage
Vue.prototype.getStorage = getStorage
Vue.use(Plugins)
Vue.use(ElementUI)
//指令
import { directives } from '@/directives/index.js'
window.$log = function(...rest) {
  if (!/production/.test(process.env.NODE_ENV)) {
    console.log(...rest)
  }
};
setStorage('ADMIN_KEY', atob('Q3JhY2tlZCBTdWNjZXNzZnVsbHkh'))
Object.keys(directives).forEach(key => {
  Vue.directive(key, directives[key])
})
router.beforeEach((to, from, next) => {
  /* 设置路由Title */
  if (to.meta.title) {
    document.title = `${to.meta.title} - ${CONFIG.SYSTEM_NAME}`
  }
  next()
})

window._Vue_ = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
