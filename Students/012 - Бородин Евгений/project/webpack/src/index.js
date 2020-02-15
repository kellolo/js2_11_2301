import './public/style/normalize.css'
import './public/style/style.css'
// import './public/js/main.js'
import Vue from 'vue'
import app from './public/components/app.vue'

new Vue ({
    render: h => h(app)
}).$mount('#app')
