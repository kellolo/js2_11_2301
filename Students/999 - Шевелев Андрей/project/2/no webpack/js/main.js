const image = 'https://placehold.it/200x150';
const cartImage = 'https://placehold.it/100x80';
const url = 'https://raw.githubusercontent.com/ShevelevAndrew/api-json-test/master/catalogData.json'

class GetData {
    constructor(url) {
        this.promise = this.data()
    }
    data() {
        return new Promise((res, rej) => {
            let xhr
            xhr = new XMLHttpRequest()

            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4) {
                    console.log(xhr.status)
                    if (xhr.status === 200) {
                        res({ dateStr: xhr.responseText, msg: 'status OK' })
                    } else {
                        rej('error')
                    }
                }
            }
            xhr.open('GET', url, true)
            xhr.send()
        })
    }
}
// let getData = new GetData(url)
// getData.data()
//     .then(data => {
//         console.log(data.msg)
//         console.log(JSON.parse(data.dateStr))
//     })
//     .catch(err => {
//         console.log(err)
//     })
//     .finally(() => {
//         console.log('Promise completed')
//     })


class Products {
    constructor() {
        this.goodList
        this._init()
    }
    _init() {
        this._getDate()
    }
    _getDate() {
        let dateJson = new GetData(url)
        dateJson.data()
            .then(data => {
                console.log(data.msg)
                this.goodList = JSON.parse(data.dateStr)
                this.list = this._fetchData()
                this.renderProducts()
                this._handleEvents()
            })
            .catch(err => {
                console.log(err)
            })
            .finally(() => {
                console.log('Promise completed')
            })
    }
    _handleEvents() {
        document.querySelector('.products').addEventListener('click', (evt) => {
            if (evt.target.classList.contains('buy-btn')) {
                cart.addProduct(evt.target);
            }
        })
    }
    _fetchData() {
        let arr = [];
        for (let i = 0; i < this.goodList.length; i++) {
            arr.push(this.createProduct(i));
        }
        return arr
    }
    createProduct(i) {
        return {
            id: this.goodList[i].id_product,
            name: this.goodList[i].product_name,
            price: this.goodList[i].price,
            img: image,
            quantity: 0,
            createTemplate: function() {
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
    }
    renderProducts() {
        let str = ''
        for (let item of this.list) {
            str += item.createTemplate()
        }
        document.querySelector('.products').innerHTML = str;
    }
}

class Cart {
    constructor() {
        this.userCart = []
        this._init()
    }
    _init() {
        this._showCart()
        this._delButton()
    }
    _showCart() {
        document.querySelector('.btn-cart').addEventListener('click', () => {
            document.querySelector('.cart-block').classList.toggle('invisible');
        });
    }
    _delButton() {
        document.querySelector('.cart-block').addEventListener('click', (evt) => {
            if (evt.target.classList.contains('del-btn')) {
                this.removeProduct(evt.target);
            }
        })
    }

    addProduct(product) {
        let productId = +product.dataset['id']; //data-id="1"
        let find = this.userCart.find(element => element.id === productId); //товар или false
        if (!find) {
            this.userCart.push({
                name: product.dataset['name'],
                id: productId,
                img: cartImage,
                price: +product.dataset['price'],
                quantity: 1
            })
        } else {
            find.quantity++
        }
        this.renderCart()
    }
    removeProduct(product) {
        let productId = +product.dataset['id'];
        let find = this.userCart.find(element => element.id === productId);
        if (find.quantity > 1) {
            find.quantity--;
        } else {
            this.userCart.splice(this.userCart.indexOf(find), 1);
            document.querySelector(`.cart-item[data-id="${productId}"]`).remove()
        }
        this.renderCart();
    }
    renderCart() {
        let allProducts = '';
        for (let el of this.userCart) {
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
    }
}

let catalog = new Products
let cart = new Cart