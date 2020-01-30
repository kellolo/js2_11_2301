//заглушки (имитация базы данных)
const image = 'https://placehold.it/200x150';
const cartImage = 'https://placehold.it/100x80';
const items = ['Notebook', 'Display', 'Keyboard', 'Mouse', 'Phones', 'Router', 'USB-camera', 'Gamepad'];
const prices = [1000, 200, 20, 10, 25, 30, 18, 24];
const ids = [1, 2, 3, 4, 5, 6, 7, 8];

class Catalog {
    constructor () {
        this._init ()
        this.renderProducts ()
    }

    _init () {
        this.Products = [];
        for (let i = 0; i < items.length; i++) {
            this.Products.push (this._createProduct (i));
        }
    }
    _createProduct (i) {
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
    }
    renderProducts () {
        let str = ''
        for (let item of this.Products) {
            str += item.createTemplate()
        }
        document.querySelector('.products').innerHTML = str;
    }
}

class Cart {
    constructor () {
        this._init ()
    }

    _init () {
        this.List = []
        //кнопка скрытия и показа корзины
        document.querySelector('.btn-cart').addEventListener('click', () => {
            document.querySelector('.cart-block').classList.toggle('invisible');
        });
        //кнопки удаления товара (добавляется один раз)
        document.querySelector('.cart-block').addEventListener ('click', (evt) => {
            if (evt.target.classList.contains ('del-btn')) {
                this.removeProduct (evt.target);
            }
        })
        //кнопки покупки товара (добавляется один раз)
        document.querySelector('.products').addEventListener ('click', (evt) => {
            if (evt.target.classList.contains ('buy-btn')) {
                this.addProduct (evt.target);
            }
        })
    }
    addProduct (product) {
        let productId = +product.dataset['id']; //data-id="1"
        let find = this.List.find (element => element.id === productId); //товар или false
        if (!find) {
            this.List.push ({
                name: product.dataset ['name'],
                id: productId,
                img: cartImage,
                price: +product.dataset['price'],
                quantity: 1
            })
        }  else {
            find.quantity++
        }
        this.renderCart ()
    }
    removeProduct (product) {
        let productId = +product.dataset['id'];
        let find = this.List.find (element => element.id === productId);
        if (find.quantity > 1) {
            find.quantity--;
        } else {
            this.List.splice(this.List.indexOf(find), 1);
            document.querySelector(`.cart-item[data-id="${productId}"]`).remove()
        }
        this.renderCart ();
    }
    renderCart () {
        let allProducts = '';
        for (let el of this.List) {
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
        this.totalNum ()
        this.totalSum ()
        document.querySelector(`.cart-items`).innerHTML = allProducts;
    }
    totalNum () {
        let num = 0;
        for (let el of this.List) {
            num += el.quantity
        }
        document.querySelector('#quantity').innerHTML = num;
    }
    totalSum () {
        let sum = 0;
        for (let el of this.List) {
            sum += el.quantity * el.price
        }
        document.querySelector('#price').innerHTML = sum;
    }
}

let shopCatalog = new Catalog ()
let shopCart = new Cart ()

/*
//глобальные сущности корзины и каталога (ИМИТАЦИЯ! НЕЛЬЗЯ ТАК ДЕЛАТЬ!)
var userCart = [];
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
    //let arr = [];
    let str = ''
    for (item of list) {
        str += item.createTemplate()
    }
    document.querySelector('.products').innerHTML = str;
}

renderProducts ();

//CART

// Добавление продуктов в корзину
function addProduct (product) {
    let productId = +product.dataset['id']; //data-id="1"
    let find = userCart.find (element => element.id === productId); //товар или false
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
}
*/
