//заглушки (имитация базы данных)
const image = 'https://placehold.it/200x150';
const cartImage = 'https://placehold.it/100x80';
const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses'



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
        console.log(url)
        return fetch(url)
                .then(d => d.json())
    }
    _render () {
        let block = document.querySelector(this.container)
        let htmlString = ''
        this.items.forEach (item => {
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
    }
}

class Cart extends List {
    constructor (url = '/getBasket.json', container = '.cart-block') {
        super (url, container)
        this.totalSum = 0
    }

    _init () {
        this.getData(API + this.url)
            .then(parsedData => { this.items = parsedData.contents })
            .then(() => { this._render(); this.getTotalSum(); })
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
                    let productId = +prod.dataset["id"]; //data-id="1"
                    
                    let find = this.items.find(element => element.id_product === productId);
                    if (!find) {
                    this.items.push({
                        id_product: productId,
                        product_name: prod.dataset["name"],
                        price: +prod.dataset["price"],
                        quantity: 1
                    });

                    this.totalSum += +product.dataset["price"];
                    } else {
                    find.quantity++;
                    this.totalSum += find.price;
                    }
                   
                    this._render()
                    this.getTotalSum()
                    console.log (`Товар ${prod.dataset.name} добавлен в корзину`)
                }
            })
    }

    removeProduct (prod) {
        let serverResponse200
        this.getData(API + '/deleteFromBasket.json')
            .then (response => { serverResponse200 = response })
            .finally (() => {
                if (serverResponse200) {
                    let productId = +prod.dataset["id"];
                    let find = this.items.find(element => element.id_product === productId);
                   
                    if (find.quantity > 1) {
                     
                    find.quantity--;
                    this.totalSum -= find.price;
                    } else {
                    this.totalSum -= find.price;
                    this.items.splice(this.items.indexOf(find), 1);
                    document.querySelector(`.cart-item[data-id="${productId}"]`).remove();
                    }
                    this._render()
                    this.getTotalSum()
                    console.log (`Товар ${prod.dataset.id} удален из корзины`)
                }
            })
    }

    renderTotalSum(sum){
        let div = document.createElement('div');
        div.innerText = `Total: ${sum}`
        document.body.append(div);
        document.querySelector('.cart-block').append(div);
    }

    getTotalSum(){
        let sum = this.items.reduce((acc, item) => acc + item.price * item.quantity, 0)
        this.renderTotalSum(sum)
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
