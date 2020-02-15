<template>
    <div>
        <header>
            <div class="logo">E-shop</div>
            <div class="cart">
                <form action="#" class="search-form">
                    <input type="text" class="search-field">
                    <button class="btn-search" type="submit">
                        <i class="fas fa-search"></i>
                    </button>
                </form>
                <button class="btn-cart" type="button" @click="btn_cartClick">Корзина</button>
                <div class="cart-block" v-show="btn_cart_cliked" > 
                    <cart />
                </div> 
            </div>
        </header>
        <main>
            <catalog />
        </main>
    </div>
</template>

<script>

import catalog from './Catalog.vue'
import cart from './Cart.vue'

export default {
    data() {
        return {
            btn_cart_cliked: false
        }
    },
    methods: {
        getData (url) {
            return fetch(url)
                    .then(d => d.json())
        },
        btn_cartClick () {
            this.btn_cart_cliked = !this.btn_cart_cliked
            // <!-- this.calculateSum () -->
        },
    },
    components: { catalog, cart }

}
</script>