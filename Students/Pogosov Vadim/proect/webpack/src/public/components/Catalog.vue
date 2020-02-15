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
            urlGetData: 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses',
        }
    },
    mounted() {
        this.$parent.getData(this.urlGetData + '/catalogData.json')
            .then (data => {
                this.items = data
        })
    },
    methods: {
       

    },
    components: {item}
}
</script>