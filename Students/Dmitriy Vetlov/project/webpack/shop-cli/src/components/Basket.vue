<template>
    <div class="cart-block">
        <basketitem v-for="item of basketItems" :key="item.id_product" :item="item" />
        Итого: $ <span>{{ totalSum }}</span>
    </div>
</template>

<script>
import basketitem from './BasketItem.vue'
export default {
    data() {
        return {
            basketItems: [],
            urlServerResponse: '/api/basket',
            //urlServerResponse: 'https://raw.githubusercontent.com/Vetl-off0098/online-store-api/master/responses'
        }
    },
    mounted() {
        this.$parent.getData(this.urlServerResponse)
            .then(data => {
                this.basketItems = data.contents
            })
    },
    methods: {
        addToBasket(item) {
            let productId = +item.id_product
            let find = this.basketItems.find(element => element.id_product === productId)
            if(find) {
                this.$parent.putData(`/api/basket/${productId}`, {delta: 1})
                    .then((d) => {
                        d.result ? find.quantity++ : console.log('error')
                    })
                // find.quantity++
            } else {
                let ob = Object.assign({}, item, {quantity: 1})
                this.$parent.postData('/api/basket', ob)
                    .then((d) => {
                        d.result ? this.basketItems.push(ob) : console.log('error')
                    })
            }
        },
        removeFromCart(item) {
            let productId = +item.id_product
            let find = this.basketItems.find(el => el.id_product === productId)
            if(find.quantity > 1) {
                this.$parent.putData(`/api/basket/${productId}`, {delta: -1})
                    .then((d) => {
                        d.result ? find.quantity-- : console.log('error')
                    })
            } else {
                this.$parent.deleteData(`/api/basket/${productId}`)
                    .then((d) => {
                        d.result ? this.basketItems.splice(this.basketItems.indexOf(find), 1) : console.log('error')
                    })
            }
        }
    },
    computed: {
        totalSum() {
            return this.basketItems.reduce((total, el) => total += +el.price * +el.quantity, 0)
        }
    },
    components: { basketitem }
}
</script>

<style>

</style>