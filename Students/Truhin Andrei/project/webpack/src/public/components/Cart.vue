<template>
<div class="cart-block invisibleq" >
    <cartItem v-for="item of cart" :key="item.id_product" :cartItem="item" />
    <span>Total: {{789}}</span>
</div>
  
  
</template>

<script>
import cartItem from './CartItem.vue';

export default {
    props:{
       
        },
    data(){
        return{
        
         cart: [],
           urlCart: 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/getBasket.json',
        }
        },
    mounted(){
        this.$parent.getData(this.urlCart).then((data) => this.cart = data.contents)
    },
    methods: {
removeItem(item){
            let serverResponse200
            this.$parent.getData('https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/deleteFromBasket.json')
                .then (response => { serverResponse200 = response })
                .finally (() => {
                    if (serverResponse200) {
                        let find = this.cart.find(element => element.id_product === item.id_product);
                        if (find.quantity > 1) {                
                            find.quantity--;
                          //  this.totalSum -= find.price;
                        } else {
                          //  this.totalSum -= find.price;
                            this.cart.splice(this.cart.indexOf(find), 1);
                        }
                        
                    }
                })
        },
        },
  components: { cartItem }
};
</script>