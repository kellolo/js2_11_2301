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
                <button class="btn-cart" type="button" @click="isCartVisible = !isCartVisible">Корзина</button>   
                <cart v-show="isCartVisible"/>
                <!--Cart-->
            </div>
        </header>
        <main>
            <catalog />
            <!--Catalog-->
        </main>
    </div>
</template>

<script>

import catalog from './Catalog.vue'
import cart from './Cart.vue'

export default {
    data() {
        return {
        isCartVisible: false,
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