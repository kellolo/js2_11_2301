<template>
    <div>
        <cartitem v-for="i of cartitems" :key="i.id_product" :cartitem="i"  />
    </div>
</template>

<script>
import cartitem from './CartItem.vue'

export default {
    data() {
        return {
            name: 'cart',
            cartitems: [],
            urlGetData: 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses',
        }
    },
    mounted() {
        this.$parent.getData(this.urlGetData + '/getBasket.json')
            .then (data => {
                this.cartitems = data.contents
        })
    },
    methods: {
        del_btnClick(el) {
            let productId = +el.id_product
            let serverResponse200
            this.$parent.getData(this.urlGetData + '/deleteFromBasket.json')
                .then (response => { serverResponse200 = response })
                .finally (() => {
                    if (serverResponse200) {
                        let find = this.cartitems.find (element => element.id_product === productId)
                        if (find && find.quantity > 1) {
                            find.quantity--
                        } else if (find){
                            this.cartitems.splice(this.cartitems.indexOf(find), 1);
                        }
                        // this.calculateSum ()
                    }
                })
            console.log("uyuyu")
        },
        add_btnClick(el) {
            let productId = +el.id_product
            let serverResponse200
            this.$parent.getData(this.urlGetData + '/addToBasket.json')
                .then (response => { serverResponse200 = response })
                .finally (() => {
                    if (serverResponse200) {
                        let find = this.cartitems.find (element => element.id_product === productId) //товар или false
                        if (!find) {
                            this.cartitems.push ({
                                product_name: el.product_name,
                                id_product: productId,
                                img: this.cartImg,//product.dataset ['image'],
                                price: +el.price,
                                quantity: 1
                            })
                        }  else {
                            find.quantity++
                        }
                        // this.calculateSum ()
                    }
                })
            
        },
    },
    components: {cartitem}
}
</script>