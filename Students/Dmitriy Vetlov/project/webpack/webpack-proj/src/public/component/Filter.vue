

<template>
    <form action="#" class="search-form" @submit.prevent="$root.$children[0].$refs.catalog.filt(str)">
        <input type="text" class="search-field" v-model="str">
        <button class="btn-search" type="submit">
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
    }
}
</script>

<style>

</style>