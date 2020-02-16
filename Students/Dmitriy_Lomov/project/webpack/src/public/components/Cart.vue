<template>
    <div class="cart-wrapper" v-show="visible">
        <item v-for="i of items" :key="i.id_product" :item="i" />
            
        <div class="cart-total">
            <span class="cart-total__price">Total price: <b>{{ _calculateSum }}</b> $</span>
            <span class="cart-total__quantity">Total quantity: <b> {{ _checkTotal }} </b> pcs</span>
        </div>
    </div>
</template>

<script>
import item from './CartItem.vue'

export default {
    data() {
        return {
            name: 'cart',
            items: [],
            visible: false,
            urlGetData: 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/',
        }
    },
    
    methods: {
        addToCart (item) {
            let serverResponse200
            this.$parent.getData(this.urlGetData + '/addToBasket.json')
                .then (response => { serverResponse200 = response })
                .finally (() => {
                    if (serverResponse200) {
                        let id = item.id_product
                        let find = this.items.find(el => +el.id_product === +id)
                        if (find) {
                            find.quantity++
                        } else {
                            this.$set(item, 'quantity', 1)
                            this.items.push(item)
                        }
                    }
                })
        },
        removeFromCart (item) {
            let serverResponse200
            this.$parent.getData(this.urlGetData + '/deleteFromBasket.json')
                .then (response => { serverResponse200 = response })
                .finally (() => {
                    if (serverResponse200) {
                        let id = item.id_product
                        let find = this.items.find(el => +el.id_product === +id)
                        if (find.quantity > 1) {
                            find.quantity--
                        } else {
                            this.items.splice(this.items.indexOf(find), 1)
                        }
                    }
                
            })
        }
    },

    computed: {
        _calculateSum() {
            return this.items.reduce((total, el) => total += +el.price * +el.quantity, 0)
        },
        _checkTotal() {
            return this.items.reduce((total, el) => total += +el.quantity, 0)
        }
    },

    mounted() {
        this.$parent.getData(this.urlGetData + '/getBasket.json')
            .then (data => {
                this.items = data.contents
        })
    },
    components: {item}
}
</script>