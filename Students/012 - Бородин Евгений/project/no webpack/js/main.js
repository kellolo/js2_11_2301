let app = new Vue ({
    el: '#app',
    data: {
        image: 'https://placehold.it/200x150',
        cartImage: 'https://placehold.it/100x80',
        API: 'https://raw.githubusercontent.com/bor1eu/online-store-api/master/responses',
        
        filterString: '',
        cart: {
            visible: false,
            amount: 0,
            countGoods: 0,
            contents: []
        },
        catalog: {
            items: []
        }
    },
    methods: {
        // toggleCart () {
        //     this.cart.visible = !this.cart.visible
        // },
        filteredItem (filterString, testString) {
            filterRegExp = new RegExp (filterString, 'i')            
            return filterRegExp.test( testString )
        },
        getData (url) {
            return fetch(url)
                    .then(d => d.json())
        },
        catalogInit () {
            this.getData(this.API + '/catalogData.json')
                .then(parsedData => { 
                    parsedData.forEach (el => {
                        this.catalog.items.push ({
                            ...el, 
                            img: this.image
                        })
                    })
                })
        },
        cartInit () {
            this.getData(this.API + '/getBasket.json')
                .then(parsedData => { 
                    parsedData.contents.forEach (el => {
                        this.cart.contents.push ({
                            ...el,
                            img: this.cartImage,
                        })     
                    })
                    this.cart.amount = parsedData.amount
                    this.cart.countGoods = parsedData.countGoods
                })
                .then(() => { 
                    this.calcCart()
                })
        },
        calcCart () {
            let cost = 0
            let count = 0
            this.cart.contents.forEach (item => {
                cost += item.price * item.quantity
                count += item.quantity
            })
            this.cart.amount = cost
            this.cart.countGoods = count
        },
        addProduct (selectedItem) {
            let serverResponse200
            this.getData(this.API + '/addToBasket.json')
                .then (response => { serverResponse200 = response })
                .finally (() => {
                    if (serverResponse200) {
                        console.log (`Товар ${selectedItem.product_name} добавлен в корзину`)
                        let find = this.cart.contents.find (item => item.id_product === +selectedItem.id_product )
                        if (!find) {
                            this.cart.contents.push ({...selectedItem, quantity: 1, img: this.cartImage})
                        } else {
                            find.quantity++
                        }
                        this.calcCart()
                    }
                })
        },    
        removeProduct (selectedItem) {
            let serverResponse200
            this.getData(this.API + '/deleteFromBasket.json')
                .then (response => { serverResponse200 = response })
                .finally (() => {
                    if (serverResponse200) {
                        console.log (`Товар ${selectedItem.product_name} удален из корзины`)
                        let find = this.cart.contents.find (item => item.id_product === +selectedItem.id_product )
                        if (find.quantity > 1) {
                            find.quantity--
                        } else {
                            this.cart.contents.splice (this.cart.contents.indexOf(find), 1)
                        }
                        this.calcCart()
                    }
                })
        }
    },
    computed: {},
    mounted () {
        this.catalogInit ()
        this.cartInit ()
    }
})

// export default vueApp
