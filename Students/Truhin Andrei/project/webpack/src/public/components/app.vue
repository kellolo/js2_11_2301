<template>
  <div>
    <header>
      <div class="logo">E-shop</div>
      <div class="cart">
        <searchForm />
        <button class="btn-cart" type="button" @click="isCartVisible = !isCartVisible">Корзина</button>
        <cart v-show="isCartVisible" ref="cart"/>
        <!--Cart-->
      </div>
    </header>
    <main>
      <catalog ref="catalog" />
      <!--Catalog-->
    </main>
  </div>
</template>

<script>
import catalog from "./Catalog.vue";
import cart from "./Cart.vue";
import searchForm from "./SearchForm.vue";

export default {
  data() {
    return {
      isCartVisible: false
    };
  },
  methods: {
    getData(url) {
      return fetch(url).then(d => d.json());
    }
  },
  components: { catalog, cart, searchForm }
};
</script>

<style>
</style>