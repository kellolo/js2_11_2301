import css from './public/css/styles.css'

//заглушки (имитация базы данных)
const image = 'https://placehold.it/200x150';
const cartImage = 'https://placehold.it/100x80';
const items = ['Notebook', 'Display', 'Keyboard', 'Mouse', 'Phones', 'Router', 'USB-camera', 'Gamepad'];
const prices = [1000, 200, 20, 10, 25, 30, 18, 24];
const ids = [1, 2, 3, 4, 5, 6, 7, 8];

//глобальные сущности корзины и каталога (ИМИТАЦИЯ! НЕЛЬЗЯ ТАК ДЕЛАТЬ!)
var userCart = [];


class Render{
    constructor(){
        this._createEventListeners();
    }
    // подтягивает обьекты в зону видимости
    init(products, renderCart){
        this.products = products;
        this.renderCart = renderCart;
    }
    //рендер списка товаров (каталога)
    renderProducts () {
        let str = ''
        for (let item of this.products.arr) {
            str += this.products.createTemplate(item);
        }
        document.querySelector('.products').innerHTML = str;
    }
    // создает слушатели событий
    _createEventListeners(){
        //кнопка скрытия и показа корзины
        document.querySelector('.btn-cart').addEventListener('click', () => {
            document.querySelector('.cart-block').classList.toggle('invisible');
        });
        //кнопки удаления товара (добавляется один раз)
        document.querySelector('.cart-block').addEventListener ('click', (evt) => {
            if (evt.target.classList.contains ('del-btn')) {
                this.renderCart.removeProduct (evt.target);
            }
        })
        //кнопки покупки товара (добавляется один раз)
        document.querySelector('.products').addEventListener ('click', (evt) => {
            if (evt.target.classList.contains ('buy-btn')) {
                this.renderCart.addProduct (evt.target);
    }
})
    }
}


class RenderCart{
    constructor(){

    }
    // Добавление продуктов в корзину
    addProduct (product) {
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
        this.renderCart ()
    }
    //удаление товаров
    removeProduct (product) {
        let productId = +product.dataset['id'];
        let find = userCart.find (element => element.id === productId);
        if (find.quantity > 1) {
            find.quantity--;
        } else {
            userCart.splice(userCart.indexOf(find), 1);
            document.querySelector(`.cart-item[data-id="${productId}"]`).remove()
        }
        this.renderCart ();
    }
    //перерендер корзины
    renderCart () {
        let allProducts = '';
        let sumProducts = 0;
        for (let el of userCart) {
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
            sumProducts += (el.quantity * el.price);
        }
    
        document.querySelector(`.cart-block`).innerHTML = allProducts;
        let sumCart = `<p>сумма корзины: ${sumProducts}</p>`;
        document.querySelector(`.cart-block`).insertAdjacentHTML('beforeend', sumCart);
        
    }
}


class Products {
    constructor(){
        
    }
    //создание товара
    createProduct (i) {
        return {
            id: ids[i],
            name: items[i],
            price: prices[i],
            img: image,
            quantity: 0,
        }
    }

    createTemplate(item) {
        return `<div class="product-item" data-id="${this.id}">
                    <img src="${item.img}" alt="Some img">
                    <div class="desc">
                        <h3>${item.name}</h3>
                        <p>${item.price} $</p>
                        <button class="buy-btn" 
                        data-id="${item.id}"
                        data-name="${item.name}"
                        data-image="${item.img}"
                        data-price="${item.price}">Купить</button>
                    </div>
                </div>`
    }
    //создание массива объектов - имитация загрузки данных с сервера
    fetchData () {
        this.arr = [];
        for (let i = 0; i < items.length; i++) {
             this.arr.push (this.createProduct (i));
        }
        console.log(this.arr);
    }
}

addEventListener('load', function(event) {
    let products = new Products();
    let render = new Render();
    let renderCart = new RenderCart();
    render.init(products, renderCart);
    products.fetchData();
    render.renderProducts();
});
