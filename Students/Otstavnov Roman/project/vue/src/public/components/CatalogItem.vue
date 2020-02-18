<template>
  <div class="product-item" v-show="item.isVisible">
    <img :src="item.img" alt="Some img">
    <div class="desc">
      <h3>{{ item.name }}</h3>
      <p>{{ item.price }} $</p>
      <button class="buy-btn" @click="addToCart">Купить</button>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      item: {type: Object},
    },

    methods: {
      addToCart () {
        const cart = this.$parent.$parent.cart;

        let serverResponse200;
        fetch('https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/addToBasket.json')
          .then(d => d.json())
          .then(response => { serverResponse200 = response })
          .finally(() => {
            if (serverResponse200) {
              let find = cart.items.find(cartItem => cartItem.id === +this.item.id)
              if (!find) {
                cart.items.push({
                  name: this.item.name,
                  price: +this.item.price,
                  id: +this.item.id,
                  img: this.item.img,
                  quantity: 1
                })
              } else {
                find.quantity++
              }
              cart.amount += +this.item.price;
              cart.count += 1;
            }
          })
      }
    },

    data () {
      return {}
    },
  }
</script>