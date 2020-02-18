import './public/css/normalize.css'
import './public/css/style.css'
import Vue from 'vue'
import app from './public/components/app.vue'

new Vue({
    render: h => h(app)
}).$mount('#app');