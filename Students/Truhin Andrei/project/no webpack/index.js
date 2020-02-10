let app = new Vue ({
    el: '#app',
    data: {
        img: 'https://placehold.it/200x150',
        cartImage: 'https://placehold.it/100x80',
        API: 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses',
        url_basket: '/getBasket.json',
        url_catalog: '/catalogData.json',
        items: [],
        cart: [],
        isCartVisible: false,
        totalSum: 0,
        searchLine: '',
        filteredItems: []

    },

    methods: {
        toggleCartVisibility(){
           //document.querySelector('.cart-block').classList.toggle('invisible');
           this.isCartVisible = !this.isCartVisible;
        },
        getData (url) {
            return fetch(this.API+url)
                    .then(d => d.json())
        },
        addItem(item){
            let serverResponse200
            this.getData(this.API + '/addToBasket.json')
                .then (response => { serverResponse200 = response })
                .finally (() => {
                    let find = this.cart.find(el => el.id_product === item.id_product);
                    if (!find) {
                        this.cart.push({
                            id_product: item.id_product,
                            product_name: item.product_name,
                            price: +item.price,
                            quantity: 1
                        });
                        this.totalSum += +item.price;
                    } else {
                        find.quantity++;
                        this.totalSum += find.price;
                    }                  
                })
        },

        removeItem(item){
            let serverResponse200
            this.getData(this.API + '/deleteFromBasket.json')
                .then (response => { serverResponse200 = response })
                .finally (() => {
                    if (serverResponse200) {
                        let find = this.cart.find(element => element.id_product === item.id_product);
                        if (find.quantity > 1) {                
                            find.quantity--;
                            this.totalSum -= find.price;
                        } else {
                            this.totalSum -= find.price;
                            this.cart.splice(this.cart.indexOf(find), 1);
                        }
                        
                    }
                })
        },
        filterGoods(){
            this.filteredItems = this.items.filter(item => item.product_name.toLowerCase().indexOf(this.searchLine.toLowerCase()) +1)
            console.log(this.filteredItems)
        },
    },

    computed: {

    },

    async mounted(){
        this.items = await this.getData(this.API+this.url_catalog);
        dataCart = await this.getData(this.API+this.url_basket);
        this.cart = await dataCart.contents;
        this.totalSum = await this.cart.reduce((acc,item) => acc+item.price* item.quantity,0)
        this.filteredItems = await this.items
    }
})