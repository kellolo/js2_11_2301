import List from './List'
import { API } from './apis'

export default class Cart extends List{
    constructor(url = '/getBasket.json', container = '.cart') {
        super (url, container)
        this.sumPrice = 0
        this.sumQty = 0
    }
    _init () {
        this.getData(API + this.url)
            .then(parsedData => { 
                this.items = parsedData.contents
                console.log(this.items)
             })
            .then(() => { this._render() })
            .then(() => { this._checkTotal() })
            .then(() => { this._calculateSum() })
            .then(() => { this._renderTotal() })
            .finally(() => { this._addListeners() })
    }
    _addListeners () {
        document.querySelector('#cart-main-btn').addEventListener('click', () => {
            document.querySelector('.cart-wrapper').classList.toggle('visible')
        })
        document.querySelector(this.container).addEventListener('click', (evt) => {
            if (evt.target.classList.contains('del-btn')) {
                this.removeProduct(evt.target)
                console.log(evt.target)
            }
        })
    }
    _createNewProduct(prod) {
        return {
            product_name: prod.dataset['name'],
            price: prod.dataset['price'],
            id_product: prod.dataset['id'],
            quantity: 1
        }
    }
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
    }
    
    removeProduct(product) {
        let serverResponse200
        this.getData(API + '/deleteFromBasket.json')
            .then (response => { serverResponse200 = response })
            .finally (() => {
                if (serverResponse200) {
                    let id = product.dataset['id']
                    let find = this.items.find(product => +product.id_product === +id)
                    if (find.quantity > 1) {
                        find.quantity--
                    } else {
                        this.items.splice(this.items.indexOf(find), 1)
                    }
                }
                this._checkTotal()
                this._calculateSum()
                this._render()
                this._renderTotal()
            })
    }
    _calculateSum() {
        this.sumPrice = this.items.reduce((total, el) => total += el.price * el.quantity, 0)
    }
    _checkTotal() {
        this.sumQty = this.items.reduce((total, el) => total += el.quantity, 0)
    }
    _renderTotal () {
        let price = document.querySelector('#price')
        let quantity = document.querySelector('#quantity')

        price.innerHTML = this.sumPrice
        quantity.innerHTML = this.sumQty
    }
}