<template>
  <div class="about">
    <header>
      <div class="logo">E-shop</div>
      <div id="nav">
          <router-link to="/">Home</router-link>
          <router-link to="/about">About</router-link>
          <router-link to="/showroom">Showroom</router-link>
          <router-link to="/contact">Contact</router-link>
      </div>
      <!-- <div class="totalSum">Суммарная стоимость товаров:&nbsp;{{ }}</div> -->
      <div class="cart">
          
          <filterest />
          <button class="btn-cart" type="button" @click="isVisibleCart = !isVisibleCart">Корзина</button>
          <basket ref="basket" v-show="isVisibleCart" />
          <!-- Basket -->
      </div>
    </header>
    <h1>This is an about page</h1>
  </div>
</template>

<script>
import catalog from '../components/Catalog.vue'
import basket from '../components/Basket.vue'
import filterest from '../components/Filter.vue'
export default {
  data() {
    return {
      isVisibleCart: false
    }
  },
  methods: {
    getData(url) {
        return fetch(url)
            .then(d => d.json())
    },
  },
  components: { catalog, basket, filterest }
}
</script>