<template>
    <form action="#" class="search-form" @submit.prevent="$root.$children[0].$refs.catalog.filterItems(str)">
        <input class="search-input" type="text" placeholder="Search..." v-model="str">
    </form>
</template>

<script>
export default {
    data() {
        return{
            str: ''
        }
    }
}
</script>