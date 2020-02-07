const goods = [
    { title: 'Shirt', price: 150 },
    { title: 'Socks', price: 50 },
    { title: 'Jacket', price: 350 },
    { title: 'Shoes', price: 250 },
];

document.querySelector('.cart-button').addEventListener('click', () => {
    document.querySelector('.cart-block').classList.toggle('invisible');
});

// Корзина
class Card {
    constructor() {  //Конструктор, создание корзины
        this._inut()
    }

    _init() { // Инициализация, рендер корзины
    }

    addProduct(product) { // Добавление продуктов в корзину
    }
    removeProduct() {  // Удаление продуктов в корзину
    }
}

class Products {
    constructor (array) {
        this.products = array
        this.container = null
        this._init ()
    }
    _init () {
        this.container = document.querySelector('.goods-list')
        //render
        this.render ()
    }
    render () {
        let str = ''
        this.products.forEach(element => {
            str += this.createProduct (element)
        })
        //str = '<div /><div /><div /><div /><div /><div />'
        this.container.innerHTML = str //произойдет рендер
    }
    createProduct (prod) {
        return `
                <div class="goods-item">
                    <img src="https://placehold.it/150x50" alt="Some img">
                    <h3>${prod.title}</h3>
                    <p>${prod.price}</p>
                    <button class="buy-btn" data-id="3" data-name="Keyboard" data-price="${prod.price}">Купить</button>
                </div>`

    }
    summ () { // метод, определяющий суммарную стоимость всех товаров.
        let sum = 0
        this.products.forEach(el => {
            sum += el.price;
        })

        return sum
    }
}




/*const renderGoodsItem = (title, price) => {
    return `<div class="goods-item"><h3>${title}</h3><p>${price}</p></div>`;
};

const renderGoodsList = (list) => {
    let goodsList = list.map(item => renderGoodsItem(item.title, item.price));
    document.querySelector('.goods-list').innerHTML = goodsList;
}

renderGoodsList(goods); */
