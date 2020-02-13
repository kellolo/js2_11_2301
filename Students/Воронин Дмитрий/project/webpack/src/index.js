import './public/css/normalize.css'
import './public/css/style.css'
import Cart from  './public/js/Cart.js'
import  Catalog from './public/js/Catalog.js'

// let cart = new Cart();
// let catalog = new Catalog(cart);
let app = new Vue({
    el:'#app',
    data:{
        imgCatalog: 'https://placehold.it/200x150',
        JsonData : './data/dataItem.json',
        products: []

    },
    methods:{
        getJson (url) {
            return fetch (`${url}`)
                .then (result => result.json())
                .catch (err => {
                    console.log (err)
                })
        },
        // getData (url) {
        //     return fetch(url)
        //         .then(d => d.json())
        //         .catch(err => {
        //             console.log(err);
        //         })
        // },
        addProduct (product) {
            console.log (`Куплен ${product.product_name}`)
        }
    },
    mounted(){
        this.getJson (this.JsonData)
            .then (data => this.products = data)
    }
});