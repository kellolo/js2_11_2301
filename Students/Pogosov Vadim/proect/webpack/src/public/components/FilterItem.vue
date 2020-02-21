<template>
    
    <form action="#" class="search-form" @submit.prevent="$root.$children[0].$refs.catalog.filterItems(str)"> <!--"$root.$children[0].$refs.catalog.filterItems(str)"-->
        <input type="text" class="search-field" v-model="str">
        <button class="btn-search" type="submit" @click="fil">
            <i class="fas fa-search"></i>
        </button>
    </form>
        
</template>

<script>

export default {
    data() {
        return {
            str: ''
        }
    },
    methods: {
        fil() {
            console.log(this.$root.$children[0].$refs.catalog.filterItems(this.str))
        }
        },
    

}
</script>