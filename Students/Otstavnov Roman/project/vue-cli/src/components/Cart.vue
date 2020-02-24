<template>
    <div class="cart-block" v-show="visible">
        <div class="list">
            <item :key="item.product_id" v-for="item of items" :item="item"/>
        </div>
        <div v-if="count" v-show="count" class="cart-total">
            В корзине <b>{{ count }} товаров</b> на сумму <b>{{ amount }} р.</b>
        </div>
        <div v-else>
            Корзина пуста.
        </div>
    </div>
</template>

<script>
  import item from './CartItem.vue';

  export default {
    props: {
      visible: {type: Boolean},
    },
    data() {
      return {
        data: {},
        amount: 0,
        count: 0,
        items: [],
      }
    },
    mounted() {
      this.$parent.getData('/api/cart')
        .then(result => {
          this.items = result;
          this.updateTotal();
        });
    },
    methods: {
      addToCart(item) {
        this.$parent.postData('/api/cart/add', item)
          .then(result => {
            if(result.cartItems) {
              this.items = result.cartItems;
              this.updateTotal();
            }
          });
      },
      removeProduct(item) {
        this.$parent.deleteData(`/api/cart/${item.product_id}`)
          .then(result => {
            if(result.cartItems) {
              this.items = result.cartItems;
              this.updateTotal();
            }
          });
      },
      updateTotal() {
        this.count = 0;
        this.amount = 0;
        this.items.forEach(item => {
          this.count += item.quantity;
          this.amount = this.amount + item.price * item.quantity
        })
      },
    },
    components: {item},
  }
</script>