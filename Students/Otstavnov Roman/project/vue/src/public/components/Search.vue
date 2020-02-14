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
    props: {
      visible: {type: Boolean},
    },
    data () {
      return {
        searchLine: '',
      }
    },
    methods: {
      onInputSearchField (el) {
            this.searchLine = el.target.value;
            const regExp = new RegExp(this.searchLine, 'i');
            console.log(regExp);
            this.$parent.products.forEach(product => {
              this.$set(product, 'isVisible', regExp.test(product.name))
            });
        },
    },
    mounted () {}
  }
</script>