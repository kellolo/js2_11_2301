<template>
    <div class="product">
        <img class="product__pic" :src="img">
        <h2 class="product__title">{{ item.product_name }}</h2>
        <span class="product__price">{{ item.price }} $</span>
        <button class="product__buy-btn" @click="$root.$children[0].$refs.cart.addToCart (item)">add to cart</button>
    </div>
</template>

<script>
export default {
    props: {
        item: {type: Object},
    },
    data() {
        return {
            img: 'https://placehold.it/200x150'
        }
    }
}
</script>