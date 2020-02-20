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
    mounted() {
        this.$parent.getData(this.urlGetData)
            .then (data => {
                this.items = data;
                this.filtered = data;
        })
    },
    methods: {
        filter (string) {
            let reg = new RegExp (string, 'i');
            this.filtered = this.items.filter (el => reg.test (el.product_name))
        }
    },
    components: {item}
}
</script>