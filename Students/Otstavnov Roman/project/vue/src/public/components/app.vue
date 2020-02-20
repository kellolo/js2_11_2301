<template>
  <div>
    <header>
      <div class="logo">E-shop</div>
      <div class="cart">
        <search/>
        <button class="btn-cart" type="button" @click="cartVisible=!cartVisible">Корзина</button>
        <cart :visible="cartVisible" ref="cart"/>
      </div>
    </header>
    <main>
      <catalog ref="catalog" />
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
      }
    },
    methods: {
      getData (url) {
        return fetch(url)
          .then(result => result.json())
      },
      postData (url, body) {
        return fetch(
                url,
                {
                  method: 'post',
                  headers: { 'Content-Type': 'application/json;charset=utf-8' },
                  body: JSON.stringify(body)
                })
          .then(result => result.json())
      }
    },
    components: {
      catalog,
      cart,
      search
    }
  }
</script>

<style>

</style>