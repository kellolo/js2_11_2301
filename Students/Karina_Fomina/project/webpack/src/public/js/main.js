//заглушки (имитация базы данных)
const image = 'https://placehold.it/200x150';
const cartImage = 'https://placehold.it/100x80';
const API = 'https://raw.githubusercontent.com/bor1eu/online-store-api/master/responses'
// const items = ['Notebook', 'Display', 'Keyboard', 'Mouse', 'Phones', 'Router', 'USB-camera', 'Gamepad'];
// const prices = [1000, 200, 20, 10, 25, 30, 18, 24];
// const ids = [1, 2, 3, 4, 5, 6, 7, 8];


class List {
    constructor (url, container) {
        this.url = url
        this.container = container
        this.items = []
        this._init()
    }
    _init () {
        return false
    }
    getData (url) {
        return fetch(url)
                .then(d => d.json())
    }
    _render (filterString = '') {
        let block = document.querySelector(this.container)
        let htmlString = ''
        const regexp = filterString === '' ? /./i : new RegExp(filterString, 'i')
        let filteredList = this.items.filter (item => regexp.test(item.product_name))
        filteredList.forEach (item => {
            let newObj = new listsVocabulary[this.constructor.name] (item)
            htmlString += newObj.render()
        })
        block.innerHTML = htmlString
    }
}
class Item {
    constructor (obj, img = image) {
        this.product_name = obj.product_name
        this.price = obj.price
        this.id_product = obj.id_product
        this.img = img
    }
    render () {
        return `
            <div class="product-item" data-id="${this.id_product}">
                <img src="${this.img}" alt="Some img">
                <div class="desc">
                    <h3>${this.product_name}</h3>
                    <p>${this.price} $</p>
                    <button class="buy-btn" 
                    data-id="${this.id_product}"
                    data-name="${this.product_name}"
                    data-image="${this.img}"
                    data-price="${this.price}">Купить</button>
                </div>
            </div>
        `
    }
}

class Catalog extends List {
    constructor (cart, url = '/catalogData.json', container = '.products') {
        super (url, container)
        this.cart = cart
    }
    _init () {
        this.getData(API + this.url)
            .then(parsedData => { this.items = parsedData })
            .then(() => { this._render() })
            .finally(() => { this._addListeners() })
    }

    _addListeners () {
        document.querySelector(this.container).addEventListener('click', (evt) => {
            if (evt.target.classList.contains('buy-btn')) {
                this.cart.addProduct(evt.target)
            }
        })
        //кнопка поиска товаров в каталоге
        document.querySelector('.btn-search').addEventListener('click', () => {
            let searchInput = document.querySelector('.search-field')
            const filterString = searchInput.value
            this._render(filterString)
        })
    }
}

class Cart extends List {
    constructor (url = '/getBasket.json', container = '.cart-items') {
        super (url, container)
    }

    _init () {
        this.getData(API + this.url)
            .then(parsedData => { 
                this.items = parsedData.contents
                this.amount = parsedData.amount
                this.countGoods = parsedData.countGoods
            })
            .then(() => { 
                this.calcCart()
                this._render() 
            })
            .finally(() => { this._addListeners() })
    }

    _addListeners () {
        //кнопка скрытия и показа корзины
        document.querySelector('.btn-cart').addEventListener('click', () => {
            document.querySelector('.cart-block').classList.toggle('invisible')
        })
        //кнопки удаления товара (добавляется один раз)
        document.querySelector(this.container).addEventListener('click', (evt) => {
            if (evt.target.classList.contains('del-btn')) {
                this.removeProduct(evt.target)
            }
        })
    }

    addProduct (prod) {
        let serverResponse200
        this.getData(API + '/addToBasket.json')
            .then (response => { serverResponse200 = response })
            .finally (() => {
                if (serverResponse200) {
                    let find = this.items.find (item => item.id_product === +prod.dataset.id )
                    if (!find) {
                        this.items.push (new CartItem ({
                            product_name: prod.dataset.name,
                            price: +prod.dataset.price,
                            id_product: +prod.dataset.id,
                            quantity: 1
                        }, prod.dataset.img))
                        // this.totalSum += prod.dataset.price
                        // this.totalQuantity ++
                    } else {
                        find.quantity++
                        // this.totalQuantity ++
                        // this.totalSum += find.price
                    }
                    this._render (this.totalSum, this.totalQuantity)
                }
            })
    }

    removeProduct (prod) {
        let serverResponse200
        this.getData(API + '/deleteFromBasket.json')
            .then (response => { serverResponse200 = response })
            .finally (() => {
                if (serverResponse200) {
                    console.log (`Товар ${prod.dataset.id} удален из корзины`)
                }
                let find = this.items.find (item => item.id_product === +prod.dataset.id )
                if (find.quantity > 1) {
                    find.quantity--
                } else {
                    this.items.splice (this.items.indexOf(find), 1)
                }
                this.calcCart()
                this._render()
            })
    }

    calcCart () {
        let cost = 0
        let count = 0
        this.items.forEach (item => {
            cost += item.price * item.quantity
            count += item.quantity
        })
        this.amount = cost
        this.countGoods = count
        document.getElementById('price').innerText = cost
        document.getElementById('quantity').innerText = count
    }

}

class CatalogItem extends Item {}
class CartItem extends Item {
    constructor (obj, img = cartImage) {
        super (obj, img)
        this.quantity = obj.quantity
    }

    render () {
        return `
            <div class="cart-item" data-id="${this.id_product}">
                <div class="product-bio">
                    <img src="${this.img}" alt="Some image">
                    <div class="product-desc">
                        <p class="product-title">${this.product_name}</p>
                        <p class="product-quantity">Quantity: ${this.quantity}</p>
                        <p class="product-single-price">$${this.price} each</p>
                    </div>
                </div>
                <div class="right-block">
                    <p class="product-price">${this.quantity * this.price}</p>
                    <button class="del-btn" data-id="${this.id_product}">&times;</button>
                </div>
            </div>
        `
    }
}

let listsVocabulary = {
    Catalog: CatalogItem,
    Cart: CartItem
}

function app () {
    let cart = new Cart ()
    let catalog = new Catalog (cart)
}

export default app


//глобальные сущности корзины и каталога (ИМИТАЦИЯ! НЕЛЬЗЯ ТАК ДЕЛАТЬ!)
/*var userCart = [];
var list = fetchData ();
//кнопка скрытия и показа корзины
document.querySelector('.btn-cart').addEventListener('click', () => {
    document.querySelector('.cart-block').classList.toggle('invisible');
});
//кнопки удаления товара (добавляется один раз)
document.querySelector('.cart-block').addEventListener ('click', (evt) => {
    if (evt.target.classList.contains ('del-btn')) {
        removeProduct (evt.target);
    }
})
//кнопки покупки товара (добавляется один раз)
document.querySelector('.products').addEventListener ('click', (evt) => {
    if (evt.target.classList.contains ('buy-btn')) {
        addProduct (evt.target);
    }
})
//создание массива объектов - имитация загрузки данных с сервера
function fetchData () {
    let arr = [];
    for (let i = 0; i < items.length; i++) {
        arr.push (createProduct (i));
    }
    return arr
};
//создание товара
function createProduct (i) {
    return {
        id: ids[i],
        name: items[i],
        price: prices[i],
        img: image,
        quantity: 0,
        createTemplate: function () {
            return `<div class="product-item" data-id="${this.id}">
                        <img src="${this.img}" alt="Some img">
                        <div class="desc">
                            <h3>${this.name}</h3>
                            <p>${this.price} $</p>
                            <button class="buy-btn" 
                            data-id="${this.id}"
                            data-name="${this.name}"
                            data-image="${this.img}"
                            data-price="${this.price}">Купить</button>
                        </div>
                    </div>`
        },
        add: function() {
            this.quantity++
        }
    }
};
//рендер списка товаров (каталога)
function renderProducts () {
    let arr = [];
    for (item of list) {
        arr.push(item.createTemplate())
    }
    document.querySelector('.products').innerHTML = arr.join();
}
renderProducts ();
//CART
// Добавление продуктов в корзину
function addProduct (product) {
    let productId = +product.dataset['id'];
    let find = userCart.find (element => element.id === productId);
    if (!find) {
        userCart.push ({
            name: product.dataset ['name'],
            id: productId,
            img: cartImage,
            price: +product.dataset['price'],
            quantity: 1
        })
    }  else {
        find.quantity++
    }
    renderCart ()
}
//удаление товаров
function removeProduct (product) {
    let productId = +product.dataset['id'];
    let find = userCart.find (element => element.id === productId);
    if (find.quantity > 1) {
        find.quantity--;
    } else {
        userCart.splice(userCart.indexOf(find), 1);
        document.querySelector(`.cart-item[data-id="${productId}"]`).remove()
    }
    renderCart ();
}
//перерендер корзины
function renderCart () {
    let allProducts = '';
    for (el of userCart) {
        allProducts += `<div class="cart-item" data-id="${el.id}">
                            <div class="product-bio">
                                <img src="${el.img}" alt="Some image">
                                <div class="product-desc">
                                    <p class="product-title">${el.name}</p>
                                    <p class="product-quantity">Quantity: ${el.quantity}</p>
                                    <p class="product-single-price">$${el.price} each</p>
                                </div>
                            </div>
                            <div class="right-block">
                                <p class="product-price">${el.quantity * el.price}</p>
                                <button class="del-btn" data-id="${el.id}">&times;</button>
                            </div>
                        </div>`
    }
    document.querySelector(`.cart-block`).innerHTML = allProducts;
}*/