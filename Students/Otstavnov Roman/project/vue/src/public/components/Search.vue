<template>
  <form action="#" class="search-form" @submit.prevent="$root.$children[0].$refs.catalog.filter(searchLine)">
    <input @input="$root.$children[0].$refs.catalog.filter(searchLine)" v-model="searchLine" type="text" class="search-field">
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
  }
</script>