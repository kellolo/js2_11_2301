<template>
  <div class="cart-block invisibleq">
    <cartItem v-for="item of cart" :key="item.id_product" :cartItem="item" />
    <span>Total: {{ this.getTotalSum() }}</span>
  </div>
</template>

<script>
import cartItem from "./CartItem.vue";

export default {
  props: {},
  data() {
    return {
      cart: [],
      urlCart: "/api/cart"
    };
  },
  mounted() {
    this.$parent
      .getData(this.urlCart)
      .then(data => (this.cart = data.contents));
  },
  methods: {
    removeItem(item) {
      let find = this.cart.find(
        element => element.id_product === item.id_product
      );
      if (find.quantity > 1) {
        this.$parent.putData(`/api/cart/${item.id_product}`, { delta: -1 }).then(d => {
          d.result ? find.quantity-- : console.log("error");
        });
      } else {
        this.$parent.deleteData(`/api/cart/${item.id_product}`).then(d => {
          d.result
            ? this.cart.splice(this.cart.indexOf(find), 1)
            : console.log("error");
        });
      }
    },
    addItem(item) {
      let find = this.cart.find(el => el.id_product === item.id_product);
      if (!find) {
        const ob = Object.assign({}, item, { quantity: 1 });

        this.$parent.postData(`/api/cart`, ob).then(d => {
          d.result ? this.cart.push(ob) : console.log("error");
        });
      } else {
        this.$parent.putData(`/api/cart/${item.id_product}`, { delta: 1 }).then(d => {
          d.result ? find.quantity++ : console.log("error");
        });
      }
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
