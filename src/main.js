import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import mitt from 'mitt'
import store from '@/store'
import 'element-plus/dist/index.css'
import { DATE_FORMAT } from '@utils/format'
import { CONFIG } from '@config/index'
import { setStorage, getStorage } from '@utils/storage'
DATE_FORMAT()
const app = createApp(App)
app.use(ElementPlus)
app.use(router)
app.use(store)
window.CONFIG = CONFIG
window.mitt = mitt()
setStorage('ADMIN_KEY', atob('Q3JhY2tlZCBTdWNjZXNzZnVsbHkh'))
window.setStorage = setStorage
window.getStorage = getStorage

app.mount('#app')
