<template>
    <div class="goods-list">
        <item v-for="prod of filtered" :key="prod.id_product" :item="prod"/>
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
            //urlGetData: 'https://raw.githubusercontent.com/Vetl-off0098/online-store-api/master/responses'
        }
    },
    mounted() {
        this.$parent.getData(this.urlGetData)
            .then(data => {
                this.items = data
                this.filtered = data
            })
    },
    methods: {
        filt(string) {
            let reg = new RegExp(string, 'i')
            this.filtered = this.items.filter(el => reg.test(el.product_name))
        }
    },
    components: {item}
}
</script>

<style>

</style>