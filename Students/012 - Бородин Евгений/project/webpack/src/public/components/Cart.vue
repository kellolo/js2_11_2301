<template>
    <!-- <div class="cart-block" v-show="cart.visible"> -->
    <div class="cart-block">
            <div class="d-flex">
            <strong class="d-block">Всего товаров</strong> <div id="quantity">{{ cart.countGoods }}</div>
        </div>
        <hr>
        <cartitem v-for="i of cart.contents" :key="i.id_product" :item="i"/>
        <hr>
        <div class="d-flex">
            <strong class="d-block">Общая ст-ть:</strong> <div id="price">{{ cart.amount }}</div>
        </div>
    </div>
</template>

<script>
import cartitem from './CartItem.vue'

export default {
    data() {
        return {
            cart: {
                visible: false,
                amount: 0,
                countGoods: 0,
                contents: []
            },
            // urlGetData: 'https://raw.githubusercontent.com/bor1eu/online-store-api/master/responses/getBasket.json'
            urlGetData: '/api/cart'
        }
    },
    methods: {
        calcCart () {
            let cost = 0
            let count = 0
            this.cart.contents.forEach (item => {
                cost += item.price * item.quantity
                count += item.quantity
            })
            this.cart.amount = cost
            this.cart.countGoods = count
        },
        addProduct (selectedItem) {
            let serverResponse200
            this.$parent.getData('https://raw.githubusercontent.com/bor1eu/online-store-api/master/responses/addToBasket.json')
                .then (response => { serverResponse200 = response })
                .finally (() => {
                    if (serverResponse200) {
                        console.log (`Товар ${selectedItem.product_name} добавлен в корзину`)
                        let find = this.cart.contents.find (item => item.id_product === +selectedItem.id_product )
                        if (!find) {
                            this.cart.contents.push ({...selectedItem, quantity: 1, img: this.cartImage})
                        } else {
                            find.quantity++
                        }
                        this.calcCart()
                    }
                })
        },
        removeProduct (selectedItem) {
            let serverResponse200
            this.$parent.getData('https://raw.githubusercontent.com/bor1eu/online-store-api/master/responses/deleteFromBasket.json')
                .then (response => { serverResponse200 = response })
                .finally (() => {
                    if (serverResponse200) {
                        console.log (`Товар ${selectedItem.product_name} удален из корзины`)
                        let find = this.cart.contents.find (item => item.id_product === +selectedItem.id_product )
                        if (find.quantity > 1) {
                            find.quantity--
                        } else {
                            this.cart.contents.splice (this.cart.contents.indexOf(find), 1)
                        }
                        this.calcCart()
                    }
                })
        }
    },
    mounted() {
        this.$parent.getData(this.urlGetData)
            .then (parsedData => { 
                parsedData.contents.forEach (el => {
                    this.cart.contents.push (el)     
                })
                this.cart.amount = parsedData.amount
                this.cart.countGoods = parsedData.countGoods
            })
            .then(() => { 
                this.calcCart()
            })
    },
    components: {cartitem}
}
</script>