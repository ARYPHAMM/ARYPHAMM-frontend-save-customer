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
import './assets/theme/libs/flot/css/float-chart.css'
import './assets/theme/dist/css/style.min.css'
import '@/assets/scss/main.scss'

// import 'bootstrap/dist/js/bootstrap.min.js'


import "./assets/theme/libs/jquery/dist/jquery.min.js"

import "./assets/theme/libs/bootstrap/dist/js/bootstrap.bundle.min.js"

import "./assets/theme/libs/perfect-scrollbar/dist/perfect-scrollbar.jquery.min.js"

import "./assets/theme/extra-libs/sparkline/sparkline.js"

import "./assets/theme/dist/js/waves.js"

import "./assets/theme/dist/js/sidebarmenu.js"

import "./assets/theme/dist/js/custom.min.js"

import "./assets/theme/libs/flot/excanvas.js"

import "./assets/theme/libs/flot/jquery.flot.js"

import "./assets/theme/libs/flot/jquery.flot.pie.js"

import "./assets/theme/libs/flot/jquery.flot.time.js"

import "./assets/theme/libs/flot/jquery.flot.stack.js"

import "./assets/theme/libs/flot/jquery.flot.crosshair.js"

import "./assets/theme/libs/flot.tooltip/js/jquery.flot.tooltip.min.js"

import "./assets/theme/dist/js/pages/chart/chart-page-init.js"
var invalidChars = ["-", "e", "+", "E"]; // replace ký tự trong type number
// eslint-disable-next-line no-undef
$("input[type='number']").on("keydown", function (e) {
  if (invalidChars.includes(e.key)) {
    e.preventDefault();
  }
});


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
