<template>
  <form action="#" class="search-form">
    <input type="text" class="search-field" v-model="searchLine" />
    <button class="btn-search" type="submit" @click="search">
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
  mounted() {},
  methods: {
    search() {
      this.$root.$emit("searchTransfer", this.searchLine);
    }
  }
};
</script>