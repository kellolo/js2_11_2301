//заглушки (имитация базы данных)
const image = 'https://placehold.it/200x150';
const cartImage = 'https://placehold.it/100x80';
const items = ['Notebook', 'Display', 'Keyboard', 'Mouse', 'Phones', 'Router', 'USB-camera', 'Gamepad'];
const prices = [1000, 200, 20, 10, 25, 30, 18, 24];
const ids = [1, 2, 3, 4, 5, 6, 7, 8];


//глобальные сущности корзины и каталога (ИМИТАЦИЯ! НЕЛЬЗЯ ТАК ДЕЛАТЬ!)



//кнопка скрытия и показа корзины
document.querySelector('.btn-cart').addEventListener('click', () => {
    document.querySelector('.cart-block').classList.toggle('invisible');
});
//кнопки удаления товара (добавляется один раз)
document.querySelector('.cart-block').addEventListener ('click', (evt) => {
    if (evt.target.classList.contains ('del-btn')) {
        mcart.removeProduct (evt.target);
    }
})
//кнопки покупки товара (добавляется один раз)
document.querySelector('.products').addEventListener ('click', (evt) => {
    if (evt.target.classList.contains ('buy-btn')) {
        mcart.addProduct (evt.target);
    }
})

//создание массива объектов - имитация загрузки данных с сервера
class fetchData {
    constructor () {
        this.arr = []
        }    
    construct() {
        for (let i = 0; i < items.length; i++) {
            this.arr.push (new createProduct (i)) //
            
        }
        return this.arr
    }    
        
    //рендер списка товаров (каталога)
    renderProducts () {
        let str = ''
        for (let item of this.arr) {
            str += item.createTemplate()
        }
        document.querySelector('.products').innerHTML = str;
    }
}

class createProduct {
    constructor (i) {
        this.id = ids[i]
        this.name = items[i]
        this.price = prices[i]
        this.img = image
        this.quantity = 0
        // this.createTemplate ()
        // this.add()
    }    
            
    createTemplate () {
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
    }
    
    add () {
        this.quantity++
    }
}        
   
// //CART

class cart {
    constructor () {
        this.userCart = []
        this.sum = 0
    }
    addProduct (product) {
        let productId = +product.dataset['id'] //data-id="1"
        let find = this.userCart.find (element => element.id === productId) //товар или false
        if (!find) {
            this.userCart.push ({
                name: product.dataset ['name'],
                id: productId,
                img: cartImage,
                price: +product.dataset['price'],
                quantity: 1
            })
        }  else {
            find.quantity++
        }
        this.sum = this.calculateSum ()
        this.renderCart ()
    }

    calculateSum () {
        let summa = 0
        this.userCart.forEach(el => summa += el.price*el.quantity)
        return summa
    }

    //перерендер корзины
    renderCart () {
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
        allProducts +=`<hr><p class="product-title">Сумма товаров: ${this.sum}</p>`
        document.querySelector(`.cart-block`).innerHTML = allProducts;
    }

    // //удаление товаров
    removeProduct (product) {
        let productId = +product.dataset['id']
        let find = this.userCart.find (element => element.id === productId)
        if (find.quantity > 1) {
            find.quantity--;
        } else {
            this.userCart.splice(this.userCart.indexOf(find), 1);
            document.querySelector(`.cart-item[data-id="${productId}"]`).remove()
        }
        this.renderCart ()
    }

}

let list = new fetchData()
list.construct ()
list.renderProducts ()
let mcart = new cart()