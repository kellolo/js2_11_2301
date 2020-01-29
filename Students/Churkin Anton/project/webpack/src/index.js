const goods = [
    { id: 1, title: 'Shirt', price: 150 },
    { id: 2, title: 'Socks', price: 50 },
    { id: 3, title: 'Jacket', price: 350 },
    { id: 4, title: 'Shoes', price: 250 },
];

var productStock = [];

//старая сущность - удалить
const renderGoodsItem = (title, price) => {
    return `<div class="goods-item"><h3>${title}</h3><p>${price}</p></div>`;
};

//старая сущность - удалить
const renderGoodsList = (list) => {
    let goodsList = list.map(item => renderGoodsItem(item.title, item.price));
    document.querySelector('.goods-list').innerHTML = goodsList;
}


//класс отрисовки объектов - родительский, абстрактный сам по себе не существует
class Renderable {
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
            this.render(this.defaultSelectorTarget)
        } else if ( erasePreviousHTML === null || erasePreviousHTML === undefined ) {
            this.render(querySelectorTarget, this.defaultRenderBehaviour)
        } else {
            if(erasePreviousHTML) {
                document.querySelector(querySelector).innerHTML = this.renderInnerElement()
            } else {
                document.querySelector(querySelector).innerHTML += this.renderInnerElement()
            }
        }
    }

    //метод абстрактный, необходимо переопределять каждый раз
    render() {
        throw new Error("renderInnerElement Not Implemented");
    }
}

class Cart extends Renderable {
    constructor(querySelectorTarget, erasePreviousHTML) {
        super(querySelectorTarget, erasePreviousHTML)
        this.lines = [];
        this.summary = 0;
    }

    render() {
        return `${this.lines}`;
        //добавить summary
    }

    addProduct() {


        this.updateState();
    }

    removeProduct() {
        this.updateState();
    }

    clear() {
        this.lines.length = 0;
        this.updateState();
    }

    updateState() {
        //добавить summary
        this.render()
    }

}

class CartLine {
    constructor(name, price, calorie) {
        this.lines = [];
    }

}

class Product extends Renderable {
    constructor(id, name, price) {
        this.lines = [];
    }
}

//витрина
class ShopWindow extends Renderable {
    constructor(id, name, price) {
        this.lines = [];
    }
}


