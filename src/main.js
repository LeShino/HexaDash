import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import PrimeVue from 'primevue/config';

//// Importation styles Theme Hexadash
import '@/assets/css/bootstrap.css'
import '@/assets/css/hexastyles.css'

//// Importation  styles package PrimeVue
/// Core PrimeVue
import "primevue/resources/primevue.min.css"
/// Theme PrimeVue
// import "primevue/resources/themes/lara-light-indigo/theme.css";

//// Fonts, Icons css
import '@/assets/icons/unicons-iconscout.css'
import '@/assets/icons/line-awesome.min.css'

////  Plugins Javascript Theme
import jquery from 'jquery'
import $ from 'jquery'
window.$ = window.jQuery = require('jquery');
import '@/assets/js/jquery.min.js'
import '@/assets/js/jqueryui.js'
import '@/assets/js/popper.js'
import '@/assets/js/bootstrap.min.js'
// import '@/assets/js/accordion.js'
// import '@/assets/js/drawer.js'
// import'@/assets/js/popover.js'
import '@/assets/js/main.js'

createApp(App).use(store).use(router).use(PrimeVue).mount('#app')
