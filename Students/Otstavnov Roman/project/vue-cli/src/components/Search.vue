<template>
  <form action="#" class="search-form" @submit.prevent="filterItems(searchLine)">
    <input @input="filterItems(searchLine)" v-model="searchLine" type="text" class="search-field">
    <button class="btn-search" type="submit">
      <i class="fas fa-search"></i>
    </button>
  </form>
</template>

<script>
  export default {
    data () {
      return {
        searchLine: '',
      }
    },
    methods: {
      filterItems (searchLine) {
        const catalog = this.$root.$children[0].$refs.router.$refs.catalog;
        if (catalog) {
          catalog.filter(searchLine);
        } else {
          console.log('только на странице каталога');
        }
      }
    }
  }
</script>