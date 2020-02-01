// ------------------------------ ИМИТАЦИЯ РАБОТЫ БАЗЫ ДАННЫХ И СЕРВЕРА ------------------------------

const PRODUCTS_NAMES = ['Processor', 'Display', 'Notebook', 'Mouse', 'Keyboard', 'Headphones']
const PRICES = [100, 120, 1000, 15, 18, 30]
const IDS = [0, 1, 2, 3, 4, 5]

// ------------------------------ ===================================== ------------------------------

let catalog = {
    items: [],
    cart: null,

    container: document.querySelector('.products'),

    construct() {
        this.cart = cart
        this._init()
    },
    _init() {
        this._handleData()
        this.render()
        this._handleEvents()
    },
    _handleData() {
        for (let i = 0; i < IDS.length; i++) {
            this.items.push(this._createNewProduct(i))
        }
    },
    _handleEvents() {
        this.container.addEventListener('click', (evt) => {
            if (evt.target.name === 'buy-btn') {
                this.cart.addProduct(evt.target)
            }
        })
    },
    _createNewProduct(index) {
        return {
            product_name: PRODUCTS_NAMES[index],
            price: PRICES[index],
            id_product: IDS[index]
        }
    },
    render() {
        let str = ''
        this.items.forEach(item => {
            str += `
                <div class="product">
                    <img class="product__pic" src="https://placehold.it/300x200">
                    <h2 class="product__title">${item.product_name}</h2>
                    <span class="product__price">${item.price} $</span>
                    <button
                    class="product__btn" 
                    name="buy-btn"
                    data-name="${item.product_name}"
                    data-price="${item.price}"
                    data-id="${item.id_product}"
                    >add to cart</button>
                </div>
            `
        })
        this.container.innerHTML = str
    }
}

let cart = {
    items: [],
    total: 0,
    sum: 0,

    container: document.querySelector('.cart'),
    priceBlock: document.querySelector('#price'),
    qtyBlock: document.querySelector('#quantity'),
    cartBtn: document.querySelector('#cart-main-btn'),
    cartWrapper: document.querySelector('#cartWrapper'),

    construct() {
        this._init()
    },
    _init() {
        this._handleEvents()
    },
    _handleEvents() {
        this.cartBtn.addEventListener('click', this._showCart)
        this.container.addEventListener('click', (evt) => {
            if (evt.target.name === 'del-btn') {
                this.deleteProduct(evt.target)
            }
        })
    },

    addProduct(product) {
        let id = product.dataset['id']
        let find = this.items.find(product => product.id_product === id)
        if (find) {
            find.quantity++
        } else {
            let prod = this._createNewProduct(product)
            this.items.push(prod)
        }

        this._checkTotal()
        this._calculateSum()
        this.render()
    },
    _createNewProduct(prod) {
        return {
            product_name: prod.dataset['name'],
            price: prod.dataset['price'],
            id_product: prod.dataset['id'],
            quantity: 1
        }
    },
    deleteProduct(product) {
        let id = product.dataset['id']
        let find = this.items.find(product => product.id_product === id)
        if (find.quantity > 1) {
            find.quantity--
        } else {
            this.items.splice(this.items.indexOf(find), 1)
        }

        this._checkTotal()
        this._calculateSum()
        this.render()
    },
    _calculateSum() {
        let sumResult = 0
        let sumNums = []

        this.items.forEach(el => sumNums.push(el.price * el.quantity))

        for (let i = 0; i < sumNums.length; i++) sumResult += sumNums[i]

        this.sum = sumResult
    },
    _checkTotal() {
        let totalSum = 0
        let totalNums = []

        this.items.forEach(el => totalNums.push(el.quantity))

        for (let i = 0; i < totalNums.length; i++) totalSum += totalNums[i]

        this.total = totalSum
    },
    _showCart() {
        cart.cartWrapper.classList.contains('visible') ? cart.cartWrapper.classList.remove('visible') : cart.cartWrapper.classList.add('visible')
    },
    render() {
        let str = ''
        this.items.forEach(item => {
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

        this.container.innerHTML = str
        this.priceBlock.innerHTML = this.sum
        this.qtyBlock.innerHTML = this.total
    }
}

catalog.construct(cart)
cart.construct()