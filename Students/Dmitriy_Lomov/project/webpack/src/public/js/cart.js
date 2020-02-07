export default class Cart {
    constructor() {
        this.goods = []
        this.qtySum = 0
        this.sum = 0

        this.container = document.querySelector('.cart')
        this.priceBlock = document.querySelector('#price')
        this.qtyBlock = document.querySelector('#quantity')
        this.cartBtn = document.querySelector('#cart-main-btn')
        this.cartWrapper = document.querySelector('#cartWrapper')

        this._init()
    }
    _init() {
        this._handleEvents()
    }
    _handleEvents() {
        this.cartBtn.addEventListener('click', () => {
            this.cartWrapper.classList.contains('visible') ? this.cartWrapper.classList.remove('visible') : this.cartWrapper.classList.add('visible')
        })
        this.container.addEventListener('click', (evt) => {
            if (evt.target.name === 'del-btn') {
                this.deleteProduct(evt.target)
            }
        })
    }

    addProduct(product) {
        let id = product.dataset['id']
        let find = this.goods.find(product => product.id_product === id)
        if (find) {
            find.quantity++
        } else {
            this.goods.push(this.fetchGoods(product))
        }

        this._checkTotal()
        this._calculateSum()
        this.render()
    }
    fetchGoods(prod) {
        return {
            product_name: prod.dataset['name'],
            price: prod.dataset['price'],
            id_product: prod.dataset['id'],
            quantity: 1
        }
    }
    deleteProduct(product) {
        let id = product.dataset['id']
        let find = this.goods.find(product => product.id_product === id)
        if (find.quantity > 1) {
            find.quantity--
        } else {
            this.goods.splice(this.goods.indexOf(find), 1)
        }

        this._checkTotal()
        this._calculateSum()
        this.render()
    }
    _calculateSum() {
        this.sum = this.goods.reduce((total, el) => total += el.price * el.quantity, 0)
    }
    _checkTotal() {
        this.qtySum = this.goods.reduce((total, el) => total += el.quantity, 0)
    }
    render() {
        let str = ''
        if (this.goods.length !== 0) {
            this.goods.forEach(item => {
                str += `
                    <div class="cart__item">
                        <img class="cart__pic" src="https://placehold.it/100x50">
                        <div class="cart__description">
                            <h3 class="cart__title">${item.product_name}</h3>
                            <span class="cart__price">$: <b>${item.price}</b></span>
                            <span class="cart__quantity">qty: <b>${item.quantity}</b></span>
                        </div>
                        <button 
                            name="del-btn" 
                            class="cart__btn" 
                            data-id="${item.id_product}"
                        >&times;</button>
                    </div>
                `
            })
        } else {
            str += `<span>Cart is empty</span>`
        }

        this.container.innerHTML = str
        this.priceBlock.innerHTML = this.sum
        this.qtyBlock.innerHTML = this.qtySum
    }
}