<template>
    <div class="cart-block">
        <basketitem v-for="item of basketItems" :key="item.id_product" :item="item" />
        Итого: $<span>{{ totalSum }}</span>
    </div>
</template>

<script>
import basketitem from './BasketItem.vue'
export default {
    data() {
        return {
            basketItems: [],
            urlServerResponse: 'https://raw.githubusercontent.com/Vetl-off0098/online-store-api/master/responses'
        }
    },
    mounted() {
        this.$parent.getData(this.urlServerResponse + '/getBasket.json')
            .then(data => {
                this.basketItems = data.contents
            })
    },
    methods: {
        addToBasket(item) {
            let serverResponse200
            this.$parent.getData(this.urlServerResponse + '/addToBasket.json')
                .then(response => { serverResponse200 = response })
                .finally(() => {
                    if(serverResponse200) {
                        let productId = +item.id_product
                        let find = this.basketItems.find(element => element.id_product === productId)
                        if(find) {
                            find.quantity++
                        } else {
                            let ob = Object.assign({}, item, {quantity: 1})
                            this.basketItems.push(ob)
                        }
                    }
                })
        },
        removeFromCart(item) {
            let serverResponse200
            this.$parent.getData(this.urlServerResponse + '/deleteFromBasket.json')
                .then(response => { serverResponse200 = response })
                .finally(() => {
                    if(serverResponse200) {
                        let productId = +item.id_product
                        let find = this.basketItems.find(el => el.id_product === productId)
                        if(find.quantity > 1) {
                            find.quantity--
                        } else {
                            this.basketItems.splice(this.basketItems.indexOf(find), 1)
                        }
                    }
                })
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