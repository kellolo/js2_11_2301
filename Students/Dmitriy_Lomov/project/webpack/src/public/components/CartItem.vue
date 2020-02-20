<template>
     <div class="cart">
        <div class="cart__item">
            <img class="cart__pic" :src="img">
            <div class="cart__description">
                <h3 class="cart__title">{{ item.product_name }}</h3>
                <span class="cart__price">$: <b>{{ item.price }}</b></span>
                <span class="cart__quantity">qty: <b>{{ item.quantity }}</b></span>
            </div>
            <button class="cart__del-btn" @click="$parent.removeFromCart(item)">&times;</button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        item: {type: Object},
    },
    data() {
        return {
            img: 'https://placehold.it/100x80'
        }
    }
}
</script>