 let app = new Vue({
     el: '#app',
     data: {
         items: [],
         cart: [],
         API: 'https://raw.githubusercontent.com/ShevelevAndrew/api-json-test/master',
         hidden: true
     },
     methods: {
         toggleClick() {
             this.hidden = !this.hidden
         },
         getDataCatalog() {
             fetch(this.API + '/catalogData.json')
                 .then(dJSON => dJSON.json())
                 .then(d => {
                     this.items = d
                 })
             fetch(this.API + '/getBasket.json')
                 .then(dJSON => dJSON.json())
                 .then(d => {
                     this.cart = d.contents
                     console.log(d)
                 })
         },
         addProduct(prod) {
             let serverResponse200
             fetch(this.API + '/addToBasket.json')
                 .then(response => {
                     serverResponse200 = response
                 })
                 .finally(() => {
                     if (serverResponse200) {
                         let productId = +prod.id_product
                         let find = this.cart.find(element => element.id_product === productId)
                         if (!find) {
                             this.cart.push({
                                 id_product: +prod.id_product,
                                 product_name: prod.product_name,
                                 price: +prod.price,
                                 quantity: 1
                             })
                         } else {
                             find.quantity++
                         }
                     }
                 })
         },
         removeProduct(prod) {
             let serverResponse200
             fetch(this.API + '/deleteFromBasket.json')
                 .then(response => {
                     serverResponse200 = response
                 })
                 .finally(() => {
                     if (serverResponse200) {
                         let productId = +prod
                         let find = this.cart.find(element => element.id_product === productId)
                         if (find.quantity > 1) {
                             find.quantity--
                         } else {
                             this.cart.splice(this.cart.indexOf(find), 1)
                         }
                     }
                 })
         }
     },
     computed: {},
     mounted() {
         this.getDataCatalog()
     }


 })