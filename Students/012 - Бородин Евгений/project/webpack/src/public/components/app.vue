<template>
    <div>
        <header>
            <div class="logo">E-shop</div>
            <div class="cart">
                <filt />
                <button class="btn-cart" type="button" @click="cartvisible=!cartvisible">Корзина</button>
                <cart ref="cart" v-show="cartvisible" />
            </div>
        </header>
        <main>
            <catalog ref="catalog" />
        </main>
    </div>
</template>

<script>

import catalog from './Catalog.vue'
import cart from './Cart.vue'
import filt from './filt.vue'

export default {
    data() {
        return {
            cartvisible: false
        }
    },
    methods: {
        getData (url) {
            return fetch(url)
                    .then(d => d.json())
        }
    },
    components: { catalog, cart, filt }
}
</script>

<style>
    
</style>