// //заглушки (имитация базы данных)
// const image = 'https://placehold.it/200x150';
// const cartImage = 'https://placehold.it/100x80';
// const API = 'https://raw.githubusercontent.com/bor1eu/online-store-api/master/responses'

// class List {
//     constructor (url) {
//         this.url = url
//         this.items = []
//         this._init()
//     }
//     _init () {
//         return false
//     }
//     getData (url) {
//         return fetch(url)
//                 .then(d => d.json())
//     }
// }

// class Item {
//     constructor (obj, img = image) {
//         this.product_name = obj.product_name
//         this.price = obj.price
//         this.id_product = obj.id_product
//         this.img = img
//     }
// }

// class Catalog extends List {
//     constructor (cart, url = '/catalogData.json') {
//         super (url)
//         this.cart = cart
//     }
//     _init () {
//         this.getData(API + this.url)
//             .then(parsedData => { 
//                 parsedData.forEach (el => {
//                     this.items.push (new CatalogItem (el))
//                 })
//             })
//     }
// }

// class Cart extends List {
//     constructor (url = '/getBasket.json') {
//         super (url)
//         this.visible = false
//     }

//     _init () {
//         this.getData(API + this.url)
//             .then(parsedData => { 
//                 parsedData.contents.forEach (el => {
//                     this.items.push (new CartItem (el))     
//                 })
//                 this.amount = parsedData.amount
//                 this.countGoods = parsedData.countGoods
//             })
//             .then(() => { 
//                 this.calcCart()
//             })
//     }

//     addProduct (selectedItem) {
//         let serverResponse200
//         this.getData(API + '/addToBasket.json')
//             .then (response => { serverResponse200 = response })
//             .finally (() => {
//                 if (serverResponse200) {
//                     console.log (`Товар ${selectedItem.product_name} добавлен в корзину`)
//                     let find = this.items.find (item => item.id_product === +selectedItem.id_product )
//                     if (!find) {
//                         this.items.push (new CartItem ({...selectedItem, quantity: 1}))
//                     } else {
//                         find.quantity++
//                     }
//                     this.calcCart()
//                 }
//             })
//     }

//     removeProduct (selectedItem) {
//         let serverResponse200
//         this.getData(API + '/deleteFromBasket.json')
//             .then (response => { serverResponse200 = response })
//             .finally (() => {
//                 if (serverResponse200) {
//                     console.log (`Товар ${selectedItem.product_name} удален из корзины`)
//                     let find = this.items.find (item => item.id_product === +selectedItem.id_product )
//                     if (find.quantity > 1) {
//                         find.quantity--
//                     } else {
//                         this.items.splice (this.items.indexOf(find), 1)
//                     }
//                     this.calcCart()
//                 }
//             })
//     }

//     calcCart () {
//         let cost = 0
//         let count = 0
//         this.items.forEach (item => {
//             cost += item.price * item.quantity
//             count += item.quantity
//         })
//         this.amount = cost
//         this.countGoods = count
//     }
// }

// class CatalogItem extends Item {}
// class CartItem extends Item {
//     constructor (obj, img = cartImage) {
//         super (obj, img)
//         this.quantity = obj.quantity
//     }
// }

// let listsVocabulary = {
//     Catalog: CatalogItem,
//     Cart: CartItem
// }

// let app = new Vue ({
//     el: '#app',
//     data: {
//         filterString: '',
//         cart: {},
//         catalog: {}
//     },
//     methods: {
//         toggleCart () {
//             this.cart.visible = !this.cart.visible
//         },
//         filteredItem (filterString, testString) {
//             filterRegExp = new RegExp (filterString, 'i')            
//             return filterRegExp.test( testString )
//         }
//     },
//     computed: {},
//     mounted () {
//         this.cart = new Cart ()
//         this.catalog = new Catalog (this.cart)
//     }
// })

// // export default vueApp
