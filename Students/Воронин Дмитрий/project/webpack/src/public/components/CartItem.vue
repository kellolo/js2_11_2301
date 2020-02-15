<template>
    <div class="cart-item">
        <img :src="img" alt="Small pic">
        <div class="product-desc">
            <p class="product-title">{{ item.product_name }}</p>
            <p class="product-quantity">{{ item.quantity }}</p>
            <p class="product-single-price">{{ item.price }}</p>
        </div>
        <div class="right-block">
            <button name="del-btn" class="del-btn" @click="delEl" data-id="{{item.id_product}}">&times;</button>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            item: {type: Object},
        },
        data() {
            return {
                img: 'https://placehold.it/100x80'
            }
        },
        methods: {
            delEl(item) {
                    let id = item.dataset['id'];
                    let find = this.items.find(product => product.id_product === id);
                    if (find.quantity > 1) {
                        find.quantity--
                    } else {
                        this.items.splice(this.items.indexOf(find), 1)
                    }

                    this._checkTotalAndSum();
                    this.render();
            }
        }
    }
</script>