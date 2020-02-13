// function makeGETRequest(url, callback) {
//     let xhr;

//     if(window.XMLHttpRequest) {
//         xhr = new XMLHttpRequest();
//     } else if(window.ActiveXObject) {
//         xhr = new ActiveXObject("Microsoft.XMLHTTP");
//     }

//     xhr.onreadystatechange = function() {
//         if(xhr.readyState === 4) {
//             callback(xhr.responseText);
//         }
//     }

//     xhr.open('GET', url, true);
//     xhr.send();
// }

// const image = 'https://placehold.it/200x150';
// const cartImage = 'https://placehold.it/100x80';
const API = 'https://raw.githubusercontent.com/Vetl-off0098/online-store-api/master/responses';

class List {
    constructor(url, container) {
        this.url = url
        this.container = container
        this.items = []
        this._init()
    }
    _init() {
        return false
    }
    getData(url) {
        return fetch(url)
                .then(d => d.json())
    }
    _render() {
        let block = document.querySelector(this.container)
        let htmlString = ''
        this.items.forEach(item => {
            let newObj = new listsVocabulary[this.constructor.name](item)
            htmlString += newObj.render()
        })
        block.innerHTML = htmlString
    }
}

class Item {
    constructor(obj, img = image) {
        this.product_name = obj.product_name
        this.price = obj.price
        this.id_product = obj.id_product
        this.img = obj.image
        this.cartImage = obj.cartImage
    }
    render() {
        return `
                <div class="product-item" data-id="${this.id_product}">
                    <div class="desc">
                        <img src = "${this.img}">
                        <h3>${this.product_name}</h3>
                        <p>${this.price} $</p>
                        <button class="buy-btn" 
                        data-id="${this.id_product}" 
                        data-name="${this.product_name}"
                        data-img="${this.img}"  
                        data-price="${this.price}">Купить</button>
                    </div>
                </div>`
    }
}

class Catalog extends List {
    constructor(basket, url = '/catalogData.json', container = '.goods-list') {
        super(url, container)
        this.basket = basket
    }
    _init() {
        this.getData(API + this.url)
            .then(parsedData => {this.items = parsedData})
            .then(() => { this._render() })
            .finally(() => { this._addListeners() })
    }

    _addListeners() {
        document.querySelector(this.container).addEventListener('click', (evt) => {
            if(evt.target.classList.contains('buy-btn')) {
                this.basket.addProduct(evt.target)
            }
        })
    }

    totalSumHtml(total) {
        return `<span>${total} $<span>`
    }

    totalSumRend(total) {
        let totalSum = document.querySelector('.totalSum');
        totalSum.innerHTML += this.totalSumHtml(total);
    }

    totalSum() {
        let total = 0;
        this.goods.forEach(elem => {
            total += elem.price;
        });
        this.totalSumRend(total);
    }
}
class Basket extends List {
    constructor(url = '/getBasket.json', container = '.cart-block') {
        super(url, container)
    }
    _init() {
        this.getData(API + this.url)
            .then(parsedData => {this.items = parsedData.contents})
            .then(() => { this._render() })
            .finally(() => { this._addListeners() })
    }

    _addListeners() {
        document.querySelector('.btn-cart').addEventListener('click', () => {
            document.querySelector('.cart-block').classList.toggle('invisible');
        })

        document.querySelector(this.container).addEventListener ('click', (evt) => {
            if (evt.target.classList.contains ('del-btn')) {
                this.removeProduct (evt.target)
            }
        })
    }

    addProduct(prod) {
        let serverResponse200
        this.getData(API + '/addToBasket.json')
            .then(response => { serverResponse200 = response })
            .finally(() => {
                if(serverResponse200) {
                    let productId = +prod.dataset.id
                    let find = this.items.find(element => element.id_product === productId)
                    if(!find) {
                        this.items.push({
                            id_product: productId,
                            product_name: prod.dataset.name,
                            price: +prod.dataset.price,
                            cartImage: "https://placehold.it/100x80"
                        })
                    } else {
                        find.quantity++
                    }
                    this._render()
                    console.log(`Товар ${prod.dataset.name} добавлен в корзину`)
                }
            })
    }
    removeProduct(prod) {
        let serverResponse200
        this.getData(API + '/deleteFromBasket.json')
            .then(response => { serverResponse200 = response })
            .finally(() => {
                if(serverResponse200) {
                    let productId = +product.dataset.id
                    let find = userCart.find (element => element.id === productId)
                    if(find.quantity > 1) {
                        find.quantity--
                    } else {
                        this.items.splice(this.items.indexOf(find), 1)
                        document.querySelector(`.cart-item[data-id=${productId}]`).remove()
                    }
                    this._render()
                    console.log(`Товар ${prod.dataset.id} удален из корзины`)
                }
            })
    }
}

class CatalogItem extends Item {}
class BasketItem extends Item {
    constructor(obj, img = cartImage) {
        super(obj, img)
        this.quantity = 1
    }

    render() {
        return `
            <div class="cart-item" data-id="${this.id_product}">
                <div class="product-bio">
                    <img src="${this.img}" alt="Some image">
                    <div class="product-desc">
                        <p class="product-title">${this.product_name}</p>
                        <p class="product-quantity">Quantity: ${this.quantity}</p>
                        <p class="product-single-price">$${el.price} each</p>
                    </div>
                </div>
                <div class="right-block">
                    <p class="product-price">${this.quantity * this.price}</p>
                    <button class="del-btn" data-id="${this.id_product}">&times;</button>
                </div>
            </div>`
    }
}

let listsVocabulary = {
    Catalog: CatalogItem,
    Basket: BasketItem
}

function app() {
    let basket = new Basket()
    let catalog = new Catalog(basket)
    catalog.totalSum()
}

export default app