<template>
    <div class="products">
        <item v-for="i of items" v-show="filteredItem(searchtext, i.product_name)" :key="i.id_product" :item="i" />
    </div>
</template>

<script>
import item from './CatalogItem.vue'

export default {
    data() {
        return {
            items: [],
            urlGetData: 'https://raw.githubusercontent.com/bor1eu/online-store-api/master/responses/catalogData.json'
        }
    },
    props: {
        searchtext: {
            type: String,
            default: ''
            }
    },
    methods: {
        filteredItem (filterString, testString) {
            let filterRegExp = new RegExp (filterString, 'i')            
            return filterRegExp.test( testString )
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