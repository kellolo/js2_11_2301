<template>
  <div class="products">
    <catalog ref="catalog" />
  </div>
</template>

<script>
// @ is an alias to /src
import catalog from "@/components/Catalog";

export default {
  name: 'Catalog',
  components: {
    catalog
  }
}
</script>
