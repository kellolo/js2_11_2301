<template>
    <div>
        <header>
            <div class="logo">E-shop</div>
            <div class="totalSum">Суммарная стоимость товаров:&nbsp;{{ }}</div>
            <div class="cart">
                
                <filterest />
                <button class="btn-cart" type="button" @click="isVisibleCart = !isVisibleCart">Корзина</button>
                <basket ref="basket" v-show="isVisibleCart" />
                <!-- Basket -->
            </div>
        </header>
        <main>
            <catalog ref="catalog" />
            <!-- Catalog -->
        </main>
    </div>
</template>

<script>
import basket from './Basket.vue'
import catalog from './Catalog.vue'
import filterest from './Filter.vue'
export default {
    data() {
        return {
            name: 'App',
            isVisibleCart: false,
            searchLine: ''
        }
    },
    methods: {
        getData(url) {
            return fetch(url)
                .then(d => d.json())
        }
    },
    components: { catalog, basket, filterest }
}
</script>

<style>

</style>