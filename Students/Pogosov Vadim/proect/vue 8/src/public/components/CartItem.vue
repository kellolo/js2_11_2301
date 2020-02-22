<template>
   
        <!--<div v-for="el of cartitems">-->
            <div class="cart-item">
                <div class="product-bio">
                    <img v-bind:src="cartimg" alt="Some image">
                    <div class="product-desc">
                        <p class="product-title">{{cartitem.product_name}}</p>
                        <p class="product-quantity">Quantity: {{cartitem.quantity}}</p>
                        <p class="product-single-price">${{cartitem.price}} each</p>
                    </div>
                </div>
                <div class="right-block">
                    <p class="product-price">${{cartitem.quantity*cartitem.price}}</p>
                    <button class="del-btn" @click="del_btnClickitem(cartitem)">&times;</button>
                </div>
            </div>
        
        <!--<hr><p class="product-title">Сумма товаров: ${{cart_summa}}</p>-->
   
</template>

<script>
export default {
    props: {
        cartitem: {type: Object},
    },
    data() {
        return {
            cartimg: 'https://placehold.it/100x80',
            urlGetData: 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses'
        }
    },
    methods: {
        del_btnClickitem(cartitem) {
            console.log(this)
            this.$parent.del_btnClick(cartitem)
        }
    }
    
}
</script>