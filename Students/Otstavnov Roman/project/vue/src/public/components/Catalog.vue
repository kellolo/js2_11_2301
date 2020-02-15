<template>
  <div class="products">
    <div class="list">
      <item v-for="i of products" :key="i.id" :item="i"/>
    </div>
  </div>
</template>

<script>
  import item from './CatalogItem.vue'

  export default {
    props: {
      products: {type: Array}
    },
    components: {item}
  }
</script>