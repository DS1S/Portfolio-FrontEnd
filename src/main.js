import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './index.css'
import './global_css/global.css'

createApp(App).use(store).use(router).mount('#app')
