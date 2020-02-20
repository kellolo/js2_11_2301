<template>
    <div>
        <header>
            <div class="logo">E-shop</div>
            <div class="cart">
                <filt />
                <button class="btn-cart" type="button" @click="cartVisible = !cartVisible">Корзина</button>
                <div class="cart-block invisible"></div>
                <cart ref="cart" v-show="cartVisible"/>
            </div>
        </header>
        <main>
            <catalog ref="catalog"/>
            <!--catalog ref="catalog" @custom="someMethod"/-->
            <!--Catalog-->
        </main>
    </div>
</template>

<script>

import catalog from './Catalog.vue'
import cart from './Cart.vue'
import filt from './filter-item.vue'

export default {
    data() {
        return {
            cartVisible: false
        }
    },
    methods: {
        getData (url) {
            return fetch(url)
                    .then(d => d.json())
        },
        // someMethod (val) {
        //     console.log (val)
        // }
    },
    mounted() {
        console.log (this)
    },
    components: { catalog, cart, filt }
}
</script>

<style>
    
</style>