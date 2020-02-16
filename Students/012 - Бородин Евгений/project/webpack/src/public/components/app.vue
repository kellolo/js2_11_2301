<template>
    <div>
        <header>
            <div class="logo">E-shop</div>
            <div class="cart">
                <form action="#" class="search-form">
                    <input type="text" class="search-field" v-model="searchtext">
                    <button class="btn-search" type="submit" @click="searchtext=''">
                        <i class="fas fa-search"></i>
                    </button>
                </form>
                <button class="btn-cart" type="button" @click="cartvisible=!cartvisible">Корзина</button>
                <cart v-show="cartvisible" />
            </div>
        </header>
        <main>
            <catalog :searchtext="searchtext" />
        </main>
    </div>
</template>

<script>

import catalog from './Catalog.vue'
import cart from './Cart.vue'

export default {
    data() {
        return {
            searchtext: '',
            cartvisible: false
        }
    },
    methods: {
        getData (url) {
            return fetch(url)
                    .then(d => d.json())
        }
    },
    components: { catalog, cart }
}
</script>

<style>
    
</style>