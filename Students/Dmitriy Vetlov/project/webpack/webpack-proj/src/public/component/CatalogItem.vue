<template>
    <div class="product-item">
        <div class="desc">
            <img :src="item.image">
            <h3>{{ item.product_name }}</h3>
            <p>{{ item.price }} $</p>
            <button class="buy-btn" @click="$root.$children[0].$refs.basket.addToBasket(item)">Купить</button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        item: {type: Object}
    },
    data() {
        return {
            
        }
    }
}
</script>