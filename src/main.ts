import { createApp } from 'vue'
import router from './router'
import { createPinia } from 'pinia'
const pinia = createPinia()
import '@purge-icons/generated'
import FIcon from '@/components/FIcon'
import 'reset-css'
import './style.css'
import App from './App.vue'

createApp(App)
  .use(pinia)
  .use(router)
  .component("f-icon", FIcon)
  .mount('#app')
