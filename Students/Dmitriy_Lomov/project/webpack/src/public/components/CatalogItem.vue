<template>
    <div class="product">
        <img class="product__pic" :src="img">
        <h2 class="product__title">{{ item.product_name }}</h2>
        <span class="product__price">{{ item.price }} $</span>
        <button class="buy-btn" @click="add">add to cart</button>
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
    },
    methods: {
        add() {
            this.$root.$children[0].$children[1].addToCart(this.item)
        }
    }
}
</script>