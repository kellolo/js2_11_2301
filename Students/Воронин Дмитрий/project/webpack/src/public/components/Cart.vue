<template>
    <div class="cart">
        <form action="#" class="search-form">
            <input type="text" class="search-field">
            <button class="btn-search" type="submit">
                <i class="fas fa-search"></i>
            </button>
        </form>
        <button @click="_addListeners" class="btn-cart" id="btn-cart" type="button">Корзина</button>
        <div class="cart-block invisible"></div>
        <!--Cart-->
        <item v-for="i of items" :key="i.id_product" :item="i" />
    </div>
</template>

<script>
    import item from './CartItem.vue'

    export default {
        data() {
            return {
                items: [],
                urlGetData: '../data/dataItem.json',
            }
        },
        methods:{
            _addListeners() {
                document.querySelector('#cart-main-btn').addEventListener('click', () => {
                    document.querySelector('.cart-wrapper').classList.toggle('visible')
                });
                document.querySelector(this.container).addEventListener('click', (evt) => {
                    if (evt.target.classList.contains('del-btn')) {
                        this.removeProduct(evt.target);
                    }
                })
            },
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