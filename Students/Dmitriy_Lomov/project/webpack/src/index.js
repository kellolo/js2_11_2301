import './public/sass/main.sass'

import Vue from 'vue'
import app from './public/components/app.vue'

new Vue ({
    render: h => h(app)
}).$mount('#app')