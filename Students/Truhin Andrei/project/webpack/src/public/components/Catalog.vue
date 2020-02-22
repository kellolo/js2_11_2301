<template>
  <div class="products">
    <item v-for="i of filteredItems" :key="i.id_product" :item="i" />
  </div>
</template>

<script>
import item from "./CatalogItem.vue";

export default {
  data() {
    return {
      items: [],
      filteredItems: [],
      urlGetData: '/api/catalog',
      // urlGetData:
      //   "https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/catalogData.json"
    };
  },
  mounted() {
    this.$parent
      .getData(this.urlGetData)
      .then(data => {
        this.items = data;
      })
      .finally(() => (this.filteredItems = this.items));
      
    this.$root.$on("searchTransfer", searchLine =>
      this.filterGoods(searchLine)
    );
  },
  methods: {
    filterGoods(searchLine) {
      this.filteredItems = this.items.filter(
        item =>
          item.product_name.toLowerCase().indexOf(searchLine.toLowerCase()) + 1
      );
    }
  },
  components: { item }
};
</script>