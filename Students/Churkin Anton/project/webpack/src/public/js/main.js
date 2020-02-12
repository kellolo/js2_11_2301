const image = 'https://placehold.it/200x150';
const cartImage = 'https://placehold.it/100x80';
const API = 'https://raw.githubusercontent.com/BruTyler/online-store-api/master/responses'

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
    _render (sum, qua) {
        let block = document.querySelector(this.container)
        let htmlString = ''
        this.items.forEach (item => {
            let newObj = new listsVocabulary[this.constructor.name] (item)
            htmlString += newObj.render()
            console.log(newObj.price)
        })
        
        if (sum && qua) {
            htmlString += `<div>Всего: ${qua} шт на сумму <b>${sum}</b> руб<div>`
        }
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
    }
}

class Cart extends List {
    constructor (url = '/getBasket.json', container = '.cart-block') {
        super (url, container)
    }

    getTotalSum() {
        return this.items.length > 0 
            ? this.items.reduce((total, current) =>  total + current.quantity * current.price, 0)
            : 0;
    }
    getTotalQuantity() {
        return this.items.length > 0 
            ? this.items.reduce((total, current) =>  total + current.quantity, 0)
            : 0;
    }

    _init () {
        this.getData(API + this.url)
            .then(parsedData => { this.items = parsedData.contents })
            .then(() => { this._render (this.getTotalSum(), this.getTotalQuantity()) })
            .finally(() => { 
                this._addListeners() 
            })
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
                    } else {
                        find.quantity++
                    }
                    this._render (this.getTotalSum(), this.getTotalQuantity())
                }
            })
    }

    removeProduct (prod) {
        let serverResponse200
        this.getData(API + '/deleteFromBasket.json')
            .then (response => { serverResponse200 = response })
            .finally (() => {
                if (serverResponse200) {
                    let find = this.items.find (item => item.id_product === +prod.dataset.id )
                    if (find.quantity > 1) {
                        find.quantity--
                    } else {
                        this.items.splice (this.items.indexOf(find), 1)
                    }
                    this._render (this.getTotalSum(), this.getTotalQuantity())
                }
            })
    }

}

class CatalogItem extends Item {}

class CartItem extends Item {
    constructor (obj, img = cartImage) {
        super (obj, img)
        this.quantity = obj.hasOwnProperty('quantity')
            ? Number(obj.quantity)
            : 1;
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


/* Собственная реализация
export var productStock = []
export var cart = {}

export function InitPage() {
    document.querySelector('.cart-button').addEventListener('click', () => {
        document.querySelector('#cart').classList.toggle('invisible');
    });

    let shop = new ShopWindow(goodsUrl, '.goods');

    cart = new Cart('#cart');
    cart.renderHTMLElement();
}

window.BuyItem = BuyItem;

export function BuyItem(productId) {
    cart.addProduct(productId)
}


//класс отрисовки объектов - родительский, абстрактный сам по себе не существует
class Renderable {

    //при создании объекта как минимум должен указываться тег где будет отрисован обьект
    constructor(querySelectorTarget, erasePreviousHTML = true) {
        if ( querySelectorTarget === null || querySelectorTarget === undefined ) {
            throw new Error("не указан selector");
        }
        this.defaultSelectorTarget = querySelectorTarget;
        this.defaultRenderBehaviour = erasePreviousHTML;
    }

    renderHTMLElement(querySelectorTarget, erasePreviousHTML) {
        if ( querySelectorTarget === null || querySelectorTarget === undefined )
            querySelectorTarget = this.defaultSelectorTarget;

        if ( erasePreviousHTML === null || erasePreviousHTML === undefined ) 
            erasePreviousHTML = this.defaultRenderBehaviour

        if(erasePreviousHTML) {
            document.querySelector(querySelectorTarget).innerHTML = this._renderInnerElement()
        } else {
            document.querySelector(querySelectorTarget).innerHTML += this._renderInnerElement()
        }
    }

    //метод абстрактный, необходимо переопределять каждый раз - занимается отрисовкой внутри заданного html тэга
    _renderInnerElement() {
        throw new Error("renderInnerElement Not Implemented");
    }
}

class Cart extends Renderable {
    constructor(querySelectorTarget = '#cart', erasePreviousHTML = true) {
        super(querySelectorTarget, erasePreviousHTML)
        this.lines = [];
    }

    _renderInnerElement() {
        let cartBuilder = '<hr>Ваш заказ: <br>';

        if(this.lines.length == 0)
            cartBuilder += 'Пусто'
        else {
            this.lines.forEach(line => cartBuilder += `<b>${line.product.title}<b>, ${line.product.price} руб х ${line.quantity} шт = ${line.calculateSummary()} руб<br>`);
            cartBuilder += `<h1>ИТОГО: ${this.calculateSummary()} руб<h1>`
        }
        
        return cartBuilder;
    }

    addProduct(productId) {
        if(this.lines.filter(x => x.product.id == productId).length == 1)
            this.lines.find(x => x.product.id == productId).quantity++;
        else 
            this.lines.push(new CartLine(productId))

        this.renderHTMLElement();
    }

    removeProduct(productId) {
        if(this.lines.find(x => x.product.id == productId).quantity == 1) {
            let lineIndex = this.lines.indexOf(this.lines.find(x => x.product.id == productId));
            this.lines =  lines.splice(lineIndex, 1);
        } else {
            this.lines.find(x => x.product.id == productId).quantity--;
        }

        this.renderHTMLElement();
    }

    clear() {
        this.lines.length = 0;
        this.renderHTMLElement();
    }

    calculateSummary() {
        let sumBuilder = 0;
        this.lines.forEach(item => sumBuilder += item.calculateSummary());
        return sumBuilder;
    }

}

//строка корзины
class CartLine {
    constructor(productId, ) {
        this.product = this.fetchProduct(productId);
        this.quantity = 1;
    }

    fetchProduct(productId) {
        return productStock.find(x => x.id == productId)
    }

    calculateSummary() {
        return this.quantity * this.product.price;
    }

    _renderInnerElement() {
        return `<b>${this.product.title}<b>, ${this.product.price} руб х ${this.quantity} шт = ${this.calculateSummary()} руб<br>`;
    }
}

//продукт
class Product {
    constructor(id, title, price) {
        this.id = id;
        this.title = title;
        this.price = price;
    }
}

//витрина
class ShopWindow extends Renderable {
    constructor(remoteSource, querySelectorTarget = '.shop', erasePreviousHTML = false) {
        super(querySelectorTarget, erasePreviousHTML)
        this.stock = [];
        this._fetchData(remoteSource);
    }

    _fetchData(url) {

        makeGETRequest (url)
            .then (data => {
                let remoteSourceItem = JSON.parse (data)
                remoteSourceItem.forEach(item => this.stock.push(new Product(item.id_product, item.product_name, item.price)));
                productStock = this.stock
                this.renderHTMLElement()
            })
            .catch (err => {
                console.log (err)
            })
    }

    _renderInnerElement() {
        let shopBuilder = 'Ассортимент магазина: <br>';
        this.stock.forEach(item => shopBuilder += `${item.title}, стоимость ${item.price} рублей <button onclick='BuyItem(${item.id})'>Купить</button><br>`);
        return shopBuilder;
    }
}
*/
