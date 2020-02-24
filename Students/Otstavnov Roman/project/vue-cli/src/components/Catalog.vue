<template>
    <div class="list">
        <item v-for="item of filteredProducts" :key="item.product_id" :item="item"/>
    </div>
</template>

<script>
  import item from './CatalogItem.vue'

  export default {
    props: {},
    data() {
      return {
        products: [],
        filteredProducts: [],
      }
    },
    mounted() {
      this.$root.$children[0].getData('/api/catalog')
        .then(result => {
          if(result.length) {
            this.products = [...result];
            this.filteredProducts = [...result];
          }
        });
    },
    methods: {
      filter (str) {
        const regExp = new RegExp(str, 'i');
        this.filteredProducts = this.products.filter(product => regExp.test(product.product_name));
      }
    },
    components: {item}
  }
</script>