<template>
  <form action="#" class="search-form" @submit="$root.$children[0].$refs.catalog.filterGoods(searchLine)">
    <input type="text" class="search-field" v-model="searchLine" />
    <button class="btn-search" type="submit" >
      <i class="fas fa-search"></i>
    </button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      searchLine: ""
    };
  },
  mounted() {
    console.log(this.$root)
  },
  methods: {
    search() {
      this.$root.$emit("searchTransfer", this.searchLine);
    }
  }
};
</script>