// import mitt from 'mitt'
import _ from 'lodash'
import router from '@/router'
import { createPinia } from 'pinia';
import ElementPlus from 'element-plus'
import i18n from './i18n/index'

import './assets/main.css'
import './assets/css/tailwind.css';
import '@/components/SvgIcon.vue'
import 'element-plus/dist/index.css'
import 'virtual:svg-icons-register';

const install = (Vue: any) => {
  Vue.config.globalProperties.$baseUrl = import.meta.env.VITE_APP_BASE_API

  Vue.config.globalProperties.$_ = _
  Vue.use(i18n)
  Vue.use(router)
  const pinia = createPinia()
  Vue.use(pinia)
  Vue.use(ElementPlus)
  Vue.config.productionTip = false
}

export default {
  install
}
