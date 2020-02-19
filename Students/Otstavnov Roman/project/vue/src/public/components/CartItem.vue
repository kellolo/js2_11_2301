<template>
  <div class="cart-item">
    <div class="product-bio">
      <img :src="item.img" alt="Some image">
      <div class="product-desc">
        <p class="product-title">{{ item.name }}</p>
        <p class="product-quantity">Quantity: {{ item.quantity }}</p>
        <p class="product-single-price">{{ item.price }}р. each</p>
      </div>
    </div>
    <div class="right-block">
      <p class="product-price">{{item.quantity * item.price}} р.</p>
      <button class="del-btn" @click="removeProduct">&times;</button>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      item: {type: Object},
    },

    data () {
      return {}
    },
    methods: {
      removeProduct () {
        const cart = this.$parent.$parent.cart;
        let serverResponse200;
        fetch('https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/deleteFromBasket.json')
          .then(d => d.json())
          .then(response => { serverResponse200 = response })
          .finally(() => {
            if (serverResponse200) {
              let find = cart.items.find(cartItem => cartItem.id === +this.item.id)
              if (find.quantity > 1) {
                find.quantity--
              } else {
                cart.items.splice(cart.items.indexOf(find), 1)
              }
              this.$parent.updateTotal();
            }
          })
      }
    }
  }
</script>