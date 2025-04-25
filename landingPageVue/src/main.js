import 'bootstrap/dist/css/bootstrap.min.css'; // Importing Bootstrap CSS
import 'bootstrap-icons/font/bootstrap-icons.css'; // Importing Bootstrap Icons
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Importing Bootstrap JS
// import SimpleLightbox from "simplelightbox";
// import "simplelightbox/dist/simple-lightbox.min.css";  revisar no funciona es para que las imagenes se pueda explorar
import './assets/styles.css' // Importing custom styles

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')

