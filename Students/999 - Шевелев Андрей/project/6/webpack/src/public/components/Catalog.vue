<template>
    <div class="products">
        <item v-for="i of items" :key="i.name" :item="i" />
    </div>
</template>

<script>
import item from './CatalogItem.vue'

export default {
    data() {
        return {
            items: [],
            urlGetData: 'https://raw.githubusercontent.com/ShevelevAndrew/api-json-test/master/catalogData.json',
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