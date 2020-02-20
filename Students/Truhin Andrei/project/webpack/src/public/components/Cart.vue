<template>
  <div class="cart-block invisibleq">
    <cartItem v-for="item of cart" :key="item.id_product" :cartItem="item" />
    <span>Total: {{this.getTotalSum()}}</span>
  </div>
</template>

<script>
import cartItem from "./CartItem.vue";

export default {
  props: {},
  data() {
    return {
      cart: [],
       urlCart: '/api/cart',
      // urlCart:
      //   "https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/getBasket.json"
    };
  },
  mounted() {
    this.$parent
      .getData(this.urlCart)
      .then(data => (this.cart = data.contents));
  },
  methods: {
    removeItem(item) {
      let serverResponse200;
      this.$parent
        .getData(
          "https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/deleteFromBasket.json"
        )
        .then(response => {
          serverResponse200 = response;
        })
        .finally(() => {
          if (serverResponse200) {
            let find = this.cart.find(
              element => element.id_product === item.id_product
            );
            if (find.quantity > 1) {
              find.quantity--;
            } else {
              this.cart.splice(this.cart.indexOf(find), 1);
            }
          }
        });
    },
    addItem(item) {
      let serverResponse200;
      this.$parent
        .getData(
          //'/api/addtocart',
          "https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/addToBasket.json",
        )
        .then(response => {
          serverResponse200 = response;
console.log(JSON.stringify(item))
        })
        .finally(() => {
          let find = this.cart.find(el => el.id_product === item.id_product);
          if (!find) {
            this.cart.push({
              id_product: item.id_product,
              product_name: item.product_name,
              price: +item.price,
              quantity: 1
            });
          } else {
            find.quantity++;
          }
        });
    },
    getTotalSum() {
      return this.cart.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
    }
  },
  components: { cartItem }
};
</script>