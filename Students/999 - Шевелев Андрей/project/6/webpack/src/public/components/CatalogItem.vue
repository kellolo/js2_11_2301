<template>
    <div class="product-item">
        <img :src="img" alt="Some img">
        <div class="desc">
            <h3>{{ item.product_name }}</h3>
            <p>{{ item.price }} $</p>
            <button class="buy-btn" @click="addProduct(item)">Купить</button> 
        </div>
    </div>
</template>

<script>
import cart from './Cart.vue'
export default {
    props: {
        item: {type: Object},
    },
    data() {
        return {
            img: 'https://placehold.it/200x150'
        }
    },
    methods: {
        addProduct(prod) {
            this.$root.$emit('addProduct', prod)
        }
    },
    components: {
        cart
    }
}
</script>