document.addEventListener('DOMContentLoaded', InitPage);


const goods = [
    { id: 1, title: 'Shirt', price: 150 },
    { id: 2, title: 'Socks', price: 50 },
    { id: 3, title: 'Jacket', price: 350 },
    { id: 4, title: 'Shoes', price: 250 },
];


export var productStock = []
export var cart = {}

export function InitPage() {
    document.querySelector('.cart-button').addEventListener('click', () => {
        document.querySelector('#cart').classList.toggle('invisible');
    });

    let shop = new ShopWindow(goods, '.goods');
    productStock = shop.getStock();
    shop.renderHTMLElement();

    cart = new Cart('#cart');
    cart.renderHTMLElement();
}

//при клике на кнопку .. BuyItem не видит
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

    //метод вызывает рекурсивно себя, пока не проставит дефолтные значения
    renderHTMLElement(querySelectorTarget, erasePreviousHTML) {
        if ( querySelectorTarget === null || querySelectorTarget === undefined ) {
            this.renderHTMLElement(this.defaultSelectorTarget)
        } else if ( erasePreviousHTML === null || erasePreviousHTML === undefined ) {
            this.renderHTMLElement(querySelectorTarget, this.defaultRenderBehaviour)
        } else {
            if(erasePreviousHTML) {
                document.querySelector(querySelectorTarget).innerHTML = this._renderInnerElement()
            } else {
                document.querySelector(querySelectorTarget).innerHTML += this._renderInnerElement()
            }
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
        this.stock = this._fetchData(remoteSource);
    }

    _fetchData(remoteSource) {
        let products = []
        remoteSource.forEach(item => products.push(new Product(item.id, item.title, item.price)));
        return products;
    }

    _renderInnerElement() {
        let shopBuilder = 'Ассортимент магазина: <br>';
        this.stock.forEach(item => shopBuilder += `${item.title}, стоимость ${item.price} рублей <button onclick='BuyItem(${item.id})'>Купить</button><br>`);
        return shopBuilder;
    }

    getStock() {
        return this.stock;
    }
}
