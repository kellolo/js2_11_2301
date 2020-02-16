<template>
  <div>
    <header>
      <div class="logo">E-shop</div>
      <div class="cart">
        <search/>
        <button class="btn-cart" type="button" @click="cartVisible=!cartVisible">Корзина</button>
        <cart :visible="cartVisible" :data="cart"/>
      </div>
    </header>
    <main>
      <catalog :products="products"/>
    </main>
  </div>
</template>

<script>
  import catalog from './Catalog.vue'
  import cart from './Cart.vue'
  import search from './Search.vue'

  export default {
    data () {
      return {
        cartVisible: false,
        products: [],
        cart: {},
        API: 'https://raw.githubusercontent.com/vatokato/js2_11_2301/master/Students/Otstavnov%20Roman/project',
      }
    },
    methods: {
      getData (url) {
        return fetch(url)
          .then(d => d.json())
      }
    },
    components: {
      catalog,
      cart,
      search
    },
    mounted () {
      fetch(this.API + '/catalogData.json')
        .then(d => d.json())
        .then(products => {
          this.products = products.map(product => ({
            id: product.id_product,
            name: product.product_name,
            price: product.price,
            img: product.img || 'https://placehold.it/200x150',
            isVisible: true,
          }))
        });

      fetch(this.API + '/getBasket.json')
        .then(d => d.json())
        .then(result => {
          this.cart = {
            amount: result.amount,
            count: result.countGoods,
            items: result.contents && result.contents.map(product => ({
              id: product.id_product,
              name: product.product_name,
              price: product.price,
              img: product.img || 'https://placehold.it/100x80',
              quantity: product.quantity
            }))
          }
        });
    }
  }
</script>

<style>

</style>