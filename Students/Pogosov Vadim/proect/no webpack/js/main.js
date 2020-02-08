//заглушки (имитация базы данных)
// const image = 'https://placehold.it/200x150';
 const cartImage = 'https://placehold.it/100x80';
// const items = ['Notebook', 'Display', 'Keyboard', 'Mouse', 'Phones', 'Router', 'USB-camera', 'Gamepad'];
// const prices = [1000, 200, 20, 10, 25, 30, 18, 24];
// const ids = [1, 2, 3, 4, 5, 6, 7, 8];


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
        this.API_URL = 'https://raw.githubusercontent.com/midavp/geekbrains/master/packages'
        }    
    construct() {
        this._GoodsList()
    }    
        
    //рендер списка товаров (каталога)
    _renderProducts () {
        let str = ''
        for (let item of this.arr) {
           str += this.createTemplate(item)
        }
        document.querySelector('.products').innerHTML = str;
    }

    makeGETRequest(url) {
        return new Promise ((respon, reject) => {
            let xhr
            xhr = new XMLHttpRequest()

            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        respon ({data: xhr.responseText, msg: "OK"})
                    } else {
                        reject ("Error")
                    }   
                }
            }

            xhr.open('GET', url, true);
            xhr.send();
            })
        }
    
        _GoodsList () {
            this.makeGETRequest(`${this.API_URL}/catalogData.json`)
            .then (responData => {
                this.arr = [...JSON.parse(responData.data)]
                this._renderProducts ()
            })
            .catch (rejectData => {
                console.log(rejectData)
            })
        }

    createTemplate (item) {
        return `<div class="product-item" data-id="${item.id}">
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
    
    add () {
        this.quantity++
    }
}   
// }        
   
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
                img: cartImage,//product.dataset ['image'],
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
        this.sum = this.calculateSum ()
        this.renderCart ()
    }

}

let list = new fetchData()
list.construct ()

// list.renderProducts ()
let mcart = new cart()