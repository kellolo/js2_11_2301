<template>
    <div class="cart-block">
        <item v-for="i of items" :key="i.id_product" :item="i" />
    </div>
</template>

<script>
import item from './CartItem.vue'
export default {
    data() {
        return {
            name: 'cart',
            items: [],
            urlGetData: '/api/cart',
            // urlGetData: 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/',
        }
    },
    
    methods: {
        addToCart (item) {
            let id = item.id_product
            let find = this.items.find(el => +el.id_product === +id)
            if (find) {
                this.$parent.putData(`/api/cart/${id}`, {delta: 1})
                    .then((d) => {
                        d.result ? find.quantity++ : console.log ('error')
                    })
                //find.quantity++
            } else {
                let ob = Object.assign ({}, item, {quantity: 1})
                this.$parent.postData(`/api/cart`, ob)
                .then (d => {
                    d.result ? this.items.push(ob) : console.log ('error')
                })
            }
        },
        removeFromCart (item) {
            let id = item.id_product
            let find = this.items.find(el => +el.id_product === +id)
            if (find.quantity > 1) {
                this.$parent.putData(`/api/cart/${id}`, {delta: -1})
                    .then((d) => {
                        d.result ? find.quantity-- : console.log ('error')
                    })
            } else {
                this.$parent.deleteData(`/api/cart/${id}`)
                .then((d) => {
                        d.result ? this.items.splice(this.items.indexOf(find), 1) : console.log ('error')
                    })
            }
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
        this.$parent.getData(this.urlGetData)
            .then (data => {
                this.items = data.contents
        })
    },
    components: {item}
}
</script>
