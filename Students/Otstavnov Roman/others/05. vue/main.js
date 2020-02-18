const API = 'https://raw.githubusercontent.com/vatokato/js2_11_2301/master/Students/Otstavnov%20Roman/project/src';


const app = new Vue ({
    el: '#app',
    data: {
        products: [],
        cart: {
            amount: 0,
            count: 0,
            items: [],
            isVisible: false,
        },
        searchLine: ''
    },
    methods: {
        toggleSearchInput (el) {
            this.searchLine = el.target.value;
            const regExp = new RegExp(this.searchLine, 'i');
            this.products.forEach(product => {
              this.$set(product, 'isVisible', regExp.test(product.name))
            });
        },
        toggleCartVisible () {
            this.$set(this.cart, 'isVisible', !this.cart.isVisible);
        },
        getProducts () {
            fetch (`${API}/catalogData.json`)
                .then (result => result.json())
                .then (result => {
                   this.products = result.map(product => ({
                        id: product.id_product,
                        name: product.product_name,
                        price: product.price,
                        img: product.img || 'https://placehold.it/200x150',
                        isVisible: true,
                    }));
                });
        },
        getCart () {
             fetch (`${API}/getBasket.json`)
                .then (result => result.json())
                .then (result => {
                    this.cart.amount = result.amount;
                    this.cart.count = result.countGoods;
                    this.cart.items = result.contents && result.contents.map(product => ({
                        id: product.id_product,
                        name: product.product_name,
                        price: product.price,
                        img: product.img || 'https://placehold.it/100x80',
                        quantity: product.quantity
                    }));
                });

        }
    },
    computed: {
        isProductListNotEmpty () {
            return Boolean(this.products.filter(product => product.isVisible === true).length);
        },
        getAmount () {
            this.cart.amount = 0;
            this.cart.items.forEach(item => {
              this.cart.amount = this.cart.amount + item.price * item.quantity;
            });
            return this.cart.amount;
        }
    },

    mounted () {
        this.getProducts()
        this.getCart()
    },
});