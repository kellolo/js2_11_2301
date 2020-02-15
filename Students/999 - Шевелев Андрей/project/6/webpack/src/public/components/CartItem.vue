<template>
    <div class="cart-item">
        <div class="product-bio">
            <img :src="img" alt="Some image">
            <div class="product-desc">
                <p class="product-title">{{ cart.product_name }}</p>
                <p class="product-quantity">Quantity: {{ cart.quantity }}</p>
                <p class="product-single-price">$ {{cart.price}} each</p>
            </div>
        </div>
        <div class="right-block">
            <p class="product-price">{{cart.quantity * cart.price }}</p>
            <button class="del-btn" @click="$parent.removeProduct(cart)">&times;</button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        cart: {type: Object},
    },
    data() {
        return {
            img: 'https://placehold.it/100x80'
        }
    }
}
</script>