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
                <button class="btn-cart" type="button" @click="toggleClick()">Корзина</button>
                <cart />
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
    methods: {
        getData (url) {
            return fetch(url)
                    .then(d => d.json())
        },
        toggleClick() {
             this.$root.$emit('hiddenCart')
         }
    },
    components: { 
        catalog,
        cart
    }
}
</script>

<style>
    
</style>