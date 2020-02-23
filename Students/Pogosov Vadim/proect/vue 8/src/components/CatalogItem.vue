<template>
    <div class="product-item">
        <img v-bind:src="img" alt="Some img">
        <div class="desc">
            <h3>{{item.product_name}}</h3>
            <p>{{item.price}} $</p>
            <button class="buy-btn" @click="add_btnClickitem (item)">Купить</button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        item: {type: Object},
    },
    data() {
        return {
            img: 'https://placehold.it/200x150'
        }
    },
    methods: {
        add_btnClickitem(em) {
            console.log(this.$root.$children[0])
            
            this.$root.$children[0].$children[2].$refs.cart.add_btnClick(em)

        }
    }
    
}
</script>