import './public/css/style.css'
import './public/css/normalize.css'
// import app from './public/js/main.js'
import Vue from 'vue'
import app from './public/components/app.vue'

new Vue ({
    render: h => h(app)
}).$mount('#app')