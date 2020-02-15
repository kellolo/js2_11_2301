
const app = new Vue({

    el: '#app',
    data: {
        API: `https://raw.githubusercontent.com/gek-finn/online-store-api/master/responses`,
        items: [],
        cartItems: [],
        searchLine: '',
        filtered: [],
        visibility: false,
    },

    methods: {
        getData(url) {
            return fetch(url)
                .then(d => d.json())
        },

        filter() {
            const regxp = new RegExp(this.searchLine, 'i');
            this.filtered = this.items.filter((i) => regxp.test(i.product_name));
        },


        showCart() {
            this.visibility = !this.visibility
        },
        addToCart(item) {
            let serverResponse200
            this.getData(this.API + '/addToBasket.json')
                .then(response => { serverResponse200 = response })
                .finally(() => {
                    if (serverResponse200) {
                        let id = item.id_product
                        let find = this.cartItems.find(el => +el.id_product === +id)
                        if (find) {
                            find.quantity++
                        } else {
                            this.$set(item, 'quantity', 1)
                            this.cartItems.push(item)
                        }
                    }
                })
        },
        removeFromCart(item) {
            let serverResponse200
            this.getData(this.API + '/deleteFromBasket.json')
                .then(response => { serverResponse200 = response })
                .finally(() => {
                    if (serverResponse200) {
                        let id = item.id_product
                        let find = this.cartItems.find(el => +el.id_product === +id)
                        if (find.quantity > 1) {
                            find.quantity--
                        } else {
                            this.cartItems.splice(this.cartItems.indexOf(find), 1)
                        }
                    }

                })
        }
    },

    computed: {

        _calculateSum() {
            return this.cartItems.reduce((total, el) => total += el.price * el.quantity, 0)
        },
        _checkTotal() {
            return this.cartItems.reduce((total, el) => total += el.quantity, 0)
        }
    },
    
    mounted() {
        this.getData(this.API + '/catalogData.json')
            .then(parsedData => { this.items = parsedData })
        
        this.filtered = [...this.items]

        this.getData(this.API + '/getBasket.json')
            .then(parsedData => { this.cartItems = parsedData.contents })
    }
})


