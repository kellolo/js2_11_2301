<template>
    <div class="products">
        <item v-for="i of filter" :key="i.id_product" :item="i" />
    </div>
</template>

<script>
import item from './CatalogItem.vue'

export default {
    data() {
        return {
            items: [],
            filter: [],
            urlGetData: '/api/catalog',
        }
    },
    mounted() {
        this.$parent.getData(this.urlGetData)
            .then (data => {
                this.items = data
                this.filter = data
        })
        console.log(this.$root)
    },
    methods: {
       filterItems(strit) {
        //    console.log("1234vfv")
            let regv = new RegExp (strit, "i")
            this.filter = this.items.filter(el => regv.test(el.product_name))

       }
        

    },
    components: {item}
}
</script>