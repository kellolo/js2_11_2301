let app = new Vue ({
    el: '#app',
    data: {
        img: 'https://placehold.it/200x150',
        cartImage: 'https://placehold.it/100x80',
        API: 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses',
        url_basket: '/getBasket.json',
        url_catalog: '/catalogData.json',
        items: [],
        cart: []

    },

    methods: {
        toggleCartVisibility(){
            document.querySelector('.cart-block').classList.toggle('invisible');
        },
        getData (url) {
            return fetch(this.API+url)
                    .then(d => d.json())
                    // .then(parsedData => { this.items = parsedData })
                    // .finally(() => {
                    //   //  console.log(document.querySelector('.products'))
                    // })
        },
        
    },

    computed: {

    },

    async mounted(){
        this.items = await this.getData(this.API+this.url_catalog);
        dataCart = await this.getData(this.API+this.url_basket);
        this.cart = await dataCart.contents;
        console.log( this.cart)
    }
})