
const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses'
let app = new Vue ({
    el: '#app',
    data: {
        items: [],
        cartitems: [],
        img: 'https://placehold.it/200x150',
        cartImg: 'https://placehold.it/100x80',
        btn_cart_cliked: false,
        cart_summa: 0
    },

    methods: {
        getData (url) {
        return fetch(url)
                .then(d => d.json())
        },

        init () {
            this.getData(API + '/catalogData.json')
                .then(parsedData => { this.items = parsedData })
            this.getData(API + '/getBasket.json')
                .then(parsedData => { this.cartitems = parsedData.contents })    
            },
        
        btn_cartClick () {
            this.btn_cart_cliked = !this.btn_cart_cliked
            this.calculateSum ()
        },

        del_btnClick(el) {
            let productId = +el.id_product
            let serverResponse200
            this.getData(API + '/deleteFromBasket.json')
                .then (response => { serverResponse200 = response })
                .finally (() => {
                    if (serverResponse200) {
                        let find = this.cartitems.find (element => element.id_product === productId)
                        if (find && find.quantity > 1) {
                            find.quantity--
                        } else if (find){
                            this.cartitems.splice(this.cartitems.indexOf(find), 1);
                        }
                        this.calculateSum ()
                    }
                })
        },

        add_btnClick(el) {
            let productId = +el.id_product
            let serverResponse200
            this.getData(API + '/addToBasket.json')
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
                        this.calculateSum ()
                    }
                })
        },

        calculateSum () {
            this.cart_summa = 0
            this.cartitems.forEach(el => this.cart_summa += el.price*el.quantity)
        }
    },

    computed: {},
    mounted () {
        this.init ()
    },
    
    
})

