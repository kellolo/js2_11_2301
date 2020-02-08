window.addEventListener('load', () => {
    // 
    const products = new Products();
    const bin = new Bin();

    
    bin.init(products);
});

function makeGETRequest(url) {
    return new Promise((resolve, reject) => {
        var xhr;

        if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
        } else if (window.ActiveXObject) { 
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
        }

        xhr.open('GET', url, true);
        xhr.send();

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
              resolve(xhr.responseText);
            }
          }        
    })    
}




const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

  

//заглушки (имитация базы данных)
const image = 'https://placehold.it/200x150';
const cartImage = 'https://placehold.it/100x80';
const items = ['Notebook', 'Display', 'Keyboard', 'Mouse', 'Phones', 'Router', 'USB-camera', 'Gamepad'];
const prices = [1000, 200, 20, 10, 25, 30, 18, 24];
const ids = [1, 2, 3, 4, 5, 6, 7, 8];


//глобальные сущности корзины и каталога (ИМИТАЦИЯ! НЕЛЬЗЯ ТАК ДЕЛАТЬ!)
var userCart = [];


class Products {
    constructor() {
        this.fetchGoods();
    }
    fetchGoods() {
        makeGETRequest(`${API_URL}/catalogData.json`)
        .then((goods) => {
            this.goods = JSON.parse(goods);
            this.renderProducts();
          })    
      }
    //рендер списка товаров (каталога)
    renderProducts () {
        //let arr = [];
        let str = '';
        this.goods.forEach((item) => {            
            str += this.createProduct(item).createTemplate();
        });
        document.querySelector('.products').innerHTML = str;
    }
    //создание товара
    createProduct (good) {
        return {
            id: good.id_product,
            name: good.product_name,
            price: good.price,
            quantity: 0,
            createTemplate: function () {
                return `<div class="product-item" data-id="${this.id}">
                            <div class="desc">
                                <h3>${this.name}</h3>
                                <p>${this.price} $</p>
                                <button class="buy-btn" 
                                data-id="${this.id}"
                                data-name="${this.name}"
                                data-price="${this.price}">Купить</button>
                            </div>
                        </div>`
            },
            add: function() {
                this.quantity++
            }
        }
    };

}

class Bin {
    constructor() {
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
                this.addProductToBin (evt.target);
            }
        })
    }

    init(products) {
        this.products = products;
    }

    // Добавление продуктов в корзину
    addProductToBin (product) {
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

    renderCart () {
        let allProducts = '';
        userCart.forEach(function (el){
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
        })
        allProducts += `<div class="binSum"> Суммарная стоимость: ${this.countSum()}$</div>`
        
        document.querySelector(`.cart-block`).innerHTML = allProducts;
    }

    countSum() {
        let sum = 0;
        userCart.forEach(function (el){
            sum += el.quantity * el.price;
            console.log(sum);
        })
        return sum;
    }
}