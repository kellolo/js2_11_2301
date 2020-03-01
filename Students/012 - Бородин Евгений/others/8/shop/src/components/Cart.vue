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
            let id = selectedItem.id_product
            let find = this.cart.contents.find(el => +el.id_product === +id)
            if (find) {
                this.$parent.putData(`/api/cart/${id}`, {delta: 1})
                    .then((d) => {
                        d.result ? find.quantity++ : console.log ('error')
                        this.calcCart()
                    })
                //find.quantity++
            } else {
                let ob = Object.assign ({}, selectedItem, {quantity: 1})
                this.$parent.postData(`/api/cart`, ob)
                .then (d => {
                    d.result ? this.cart.contents.push(ob) : console.log ('error')
                    this.calcCart()
                })
            }
        },
        removeProduct (selectedItem) {
            let id = selectedItem.id_product
            let find = this.cart.contents.find(el => +el.id_product === +id)
            if (find.quantity > 1) {
                this.$parent.putData(`/api/cart/${id}`, {delta: -1})
                    .then((d) => {
                        d.result ? find.quantity-- : console.log ('error')
                        this.calcCart()
                    })
            } else {
                this.$parent.deleteData(`/api/cart/${id}`)
                .then((d) => {
                        d.result ? this.cart.contents.splice(this.cart.contents.indexOf(find), 1) : console.log ('error')
                        this.calcCart()
                    })
            }
            
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