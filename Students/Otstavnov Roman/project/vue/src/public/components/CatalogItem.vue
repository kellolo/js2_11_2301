<template>
  <div class="product-item">
    <img :src="getImage" alt="Some img">
    <div class="desc">
      <h3>{{ item.product_name }}</h3>
      <p>{{ item.price }} $</p>
      <button class="buy-btn" @click="$root.$children[0].$refs.cart.addToCart(item)">Купить</button>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      item: {type: Object},
    },
    computed: {
      getImage () {
        return this.item.img || 'https://placehold.it/200x150';
      }
    },
  }
</script>