<template>
    <div>
        <header>
            <div class="logo">E-shop</div>
            <div class="cart">
                <filterItems />
                <button class="btn-cart" type="button" @click="btn_cartClick=!btn_cartClick">Корзина</button>
                <!--<div class="cart-block" invisible> </div> -->
                    <cart ref="cart" v-show="btn_cartClick" />
                 
            </div>
        </header>
        <main>
            <catalog ref="catalog"/>
        </main>
    </div>
</template>

<script>

import catalog from './Catalog.vue'
import cart from './Cart.vue'
import filterItems from './FilterItem.vue'
export default {
    data() {
        return {
            btn_cartClick: false
        }
    },
    methods: {
        getData (url) {
            return fetch(url)
                    .then(d => d.json())
        },
        postData (url, params) {
            return fetch(url, {
                method: 'POST',
                body: JSON.stringify(params)
            }, )
                    .then(d => d.json())
        },
        // btn_cartClick () {
        //     this.btn_cart_cliked = !this.btn_cart_cliked
        //     // <!-- this.calculateSum () -->
        // },
    },
    components: { catalog, cart, filterItems }

}
</script>