import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

import '@/assets/sass/main.sass'
import 'bootstrap'

createApp(App)
    .use(store)
    .use(router)
    .mount('#app')
