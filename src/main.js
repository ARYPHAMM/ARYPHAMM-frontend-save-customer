// eslint-disable-next-line no-unused-vars
// import $ from "jquery";
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import init from './plugins/init'
import piniaCustom from './plugins/pinia-custom'
import App from './App.vue'
import router from './router'
//style
// import './assets/css/bootstrap.css'
// import './assets/font-awesome/css/all.css'
import '@/assets/scss/main.scss'

// import 'bootstrap/dist/js/bootstrap.min.js'


// eslint-disable-next-line no-unused-vars
import Popper from 'popper.js'
const pinia = createPinia()
const app = createApp(App)
app.use(createPinia())
pinia.use(piniaCustom)
app.use(init)
app.use(pinia)
app.use(router)
app.mount('#app')
