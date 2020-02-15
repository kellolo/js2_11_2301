<template>
    <div class="cart-block" v-show="this.hiddenCart">
       <cart v-for="i of cartItems" :key="i.id_product" :cart="i" /> 
    </div>
</template>
<script>
import cart from './CartItem.vue'

export default {
    data() {
        return {
            cartItems: [],
            urlGetCart: 'https://raw.githubusercontent.com/ShevelevAndrew/api-json-test/master/getBasket.json',
            urladdTobasket: 'https://raw.githubusercontent.com/ShevelevAndrew/api-json-test/master/addToBasket.json',
            urldelFromBasket: 'https://raw.githubusercontent.com/ShevelevAndrew/api-json-test/master/deleteFromBasket.json',
            hiddenCart: false
        }
    },
    methods: {
        removeProduct(prod) {
            let serverResponse200
            this.$parent.getData(this.urldelFromBasket)
                .then(response => { serverResponse200 = response })
                .finally(() => {
                    if (serverResponse200) {
                        let productId = +prod.id_product
                        let find = this.cartItems.find(element => element.id_product === productId)
                        if (find.quantity > 1) {
                            find.quantity--
                        } else {
                            this.cartItems.splice(this.cartItems.indexOf(find), 1)
                        }
                    }
                })
        }
    },

    mounted() {
        this.$parent.getData(this.urlGetCart)
        .then (data => {
            this.cartItems = data.contents
        })
        this.$root.$on ('addProduct', (prod) => {
            let serverResponse200
            this.$parent.getData(this.urladdTobasket)
                .then(response => { serverResponse200 = response })
                .finally(() => {
                    let productId = +prod.id_product
                    let find = this.cartItems.find(element => element.id_product === productId)
                    if (!find) {
                                this.cartItems.push({
                                    id_product: +prod.id_product,
                                    product_name: prod.product_name,
                                    price: +prod.price,
                                    quantity: 1
                                })
                            } else {
                                find.quantity++
                            }
                })
        })
        this.$root.$on ('hiddenCart', () => {
            this.hiddenCart = !this.hiddenCart
        })
    },
    components: {
        cart
    }
}
</script>