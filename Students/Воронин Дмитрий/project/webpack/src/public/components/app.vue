<template>
    <div>
        <header>
            <div class="logo">E-shop</div>
            <cart/>
        </header>
        <main>
            <catalog />
            <!--Catalog-->
        </main>
    </div>
</template>

<script>

import catalog from './Catalog.vue'
import cart from './Cart.vue'

export default {
    methods: {
        getData (url) {
            return fetch(url)
                    .then(d => d.json())
        },
        _addListeners () {
            document.querySelector('#btn-cart').addEventListener('click', () => {
                document.querySelector('.cart-wrapper').classList.toggle('visible')
            });
            document.querySelector(this.container).addEventListener('click', (evt) => {
                if (evt.target.classList.contains('del-btn')) {
                    this.removeProduct(evt.target);
                    console.log(evt.target)
                }
            })
        },
        _createNewProduct(prod) {
            return {
                product_name: prod.dataset['name'],
                price: prod.dataset['price'],
                id_product: prod.dataset['id'],
                quantity: 1
            }
        },
        addProduct(product) {
            let serverResponse200
            this.getData(API + '/addToBasket.json')
                .then (response => { serverResponse200 = response })
                .finally (() => {
                    if (serverResponse200) {
                        debugger
                        let id = product.dataset['id']
                        let find = this.items.find(product => +product.id_product === +id)
                        if (find) {
                            find.quantity++
                        } else {
                            let prod = this._createNewProduct(product)
                            this.items.push(prod)
                        }
                    }
                    this._checkTotal()
                    this._calculateSum()
                    this._render()
                    this._renderTotal()
                })
        },


        _calculateSum() {
            this.sumPrice = this.items.reduce((total, el) => total += el.price * el.quantity, 0);
        },
        _checkTotal() {
            this.sumQty = this.items.reduce((total, el) => total += el.quantity, 0);
        },
        _renderTotal () {
            let price = document.querySelector('#price');
            let quantity = document.querySelector('#quantity');

            price.innerHTML = this.sumPrice;
            quantity.innerHTML = this.sumQty;
        }
    },
    components: { catalog, cart }
}
</script>

<style>
    
</style>