<template>
    <div class="products">
        <item v-for="i of filtered" :key="i.id_product" :item="i" />
        <!--button @click="$emit('custom', 100)">Click</button-->
    </div>
</template>

<script>
import item from './CatalogItem.vue'

export default {
    data() {
        return {
            items: [],
            filtered: [],
            urlGetData: 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/catalogData.json',
        }
    },
    mounted() {
        this.$parent.getData(this.urlGetData)
            .then (data => {
                this.items = data
                this.filtered = data
        })
    },
    methods: {
        filter (string) {
            let reg = new RegExp (string, 'i')
            this.filtered = this.items.filter (el => reg.test (el.product_name))
        }
    },
    components: {item}
}
</script>