<template>
    <div class="products">
        <item v-for="i of items" :key="i.id_product" :item="i" />
    </div>
</template>

<script>
import item from './CatalogItem.vue'

export default {
    data() {
        return {
            items: [],
            urlGetData: '../data/dataItem.json',
        }
    },
    mounted() {
        this.$parent.getData(this.urlGetData)
            .then (data => {
                this.items = data
        })
    },

    components: {item}
}
</script>