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
            // urlGetData: 'https://raw.githubusercontent.com/bor1eu/online-store-api/master/responses/catalogData.json'
            urlGetData: '/api/catalog'
        }
    },
    methods: {
        filter (filterString) {
            let filterRegExp = new RegExp (filterString, 'i')            
            this.filtered = this.items.filter (el => filterRegExp.test (el.product_name))
        }
    },
    mounted() {
        this.$parent.getData(this.urlGetData)
            .then (data => {
                this.items = data
                this.filter('')
        })
    },
    components: {item}
}
</script>