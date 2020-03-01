<template>
    <div class="cart-block">
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
            urlGetData: '/api/cart',
        }
    },
    mounted() {
        this.$parent.getData(this.urlGetData)
            .then (data => {
                this.cartitems = data.contents
        })
    },
    methods: {
        add_btnClick(el) {
            let productId = +el.id_product
            let find = this.cartitems.find (element => element.id_product === productId) //товар или false
                if (!find) { 
                    let ob = Object.assign({}, el, {quantity:1})
                    this.$parent.postData('/api/cart', ob)
                        .then (data => {
                            data.result ? this.cartitems.push(ob) : console.log("error") //this.cartitems1
                            })
                }  else {
                    this.$parent.putData(`/api/cart/${productId}`,{delta:1})
                        .then (data => {
                            data.result ? find.quantity++ : console.log("error") 
                            })
                }
                    
        },
        del_btnClick(el) {
            let productId = +el.id_product
            let find = this.cartitems.find (element => element.id_product === productId) //товар или false
                if (find && find.quantity > 1) { 
                    this.$parent.putData(`/api/cart/${productId}`,{delta:-1})
                        .then (data => {
                            data.result ? find.quantity-- : console.log("error") 
                        })
                }   else {
                        this.$parent.deleteData(`/api/cart/${productId}`)
                            .then (data => {
                                data.result ? this.cartitems.splice(this.cartitems.indexOf(find), 1) : console.log("error") 
                            })
                        }
            }
            
    },
    components: {cartitem}
}
</script>