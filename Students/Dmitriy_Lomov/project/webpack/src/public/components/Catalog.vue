<template>
    <div class="products">
        <item v-for="i of filtered" :key="i.id_product" :item="i" />
    </div>
</template>

<script>
import item from './CatalogItem.vue'

export default {
    data() {
        return {
            items: [],
            filtered: [],
            urlGetData: '/api/catalog',
        }
    },
    methods: {
        filterItems (string) {
            const reg = new RegExp (string, 'i')
            this.filtered = this.items.filter(el => reg.test (el.product_name))
        }
    },
    mounted() {
        this.$parent.getData(this.urlGetData)
            .then (data => {
                this.items = data
                this.filtered = data
        })
    },
    components: {item}
}
</script>