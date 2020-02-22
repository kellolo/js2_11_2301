<template>
  <div class="cart-item">
    <div class="product-bio">
      <img :src="getImage" alt="Some image">
      <div class="product-desc">
        <p class="product-title">{{ item.product_name }}</p>
        <p class="product-quantity">Quantity: {{ item.quantity }}</p>
        <p class="product-single-price">{{ item.price }}р. each</p>
      </div>
    </div>
    <div class="right-block">
      <p class="product-price">{{item.quantity * item.price}} р.</p>
      <button class="del-btn" @click="$parent.removeProduct(item)">&times;</button>
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
        return this.item.img || 'https://placehold.it/100x80';
      }
    },
  }
</script>