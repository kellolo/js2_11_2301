<template>
  <form action="#" class="search-form">
    <input @input="onInputSearchField" type="text" class="search-field">
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
      onInputSearchField (el) {
        this.searchLine = el.target.value
        const regExp = new RegExp(this.searchLine, 'i')
        this.$parent.products.forEach(product => {
          this.$set(product, 'isVisible', regExp.test(product.name))
        })
      },
    },
  }
</script>