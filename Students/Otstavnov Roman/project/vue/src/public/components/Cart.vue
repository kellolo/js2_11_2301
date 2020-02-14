<template>
  <div class="cart-block" v-show="visible">
    <div class="list">
      <item :key="item.id" v-for="item of data.items" :item="item"/>
    </div>
    <div v-if="data.count" v-show="data.count" class="cart-total">
      В корзине <b>{{ data.count }} товаров</b> на сумму <b>{{ data.amount }} р.</b>
    </div>
    <div v-else>
      Корзина пуста.
    </div>
  </div>
</template>

<script>
  import item from './CartItem.vue'

  export default {
    props: {
      visible: {type: Boolean},
      data: {type: Object},
    },
    data () {
      return {}
    },
    components: {item},
    methods: {
      updateTotal () {
        this.data.count = 0
        this.data.amount = 0
        this.data.items.forEach(item => {
          this.data.count += item.quantity
          this.data.amount = this.data.amount + item.price * item.quantity
        })
      },
    },

  }
</script>