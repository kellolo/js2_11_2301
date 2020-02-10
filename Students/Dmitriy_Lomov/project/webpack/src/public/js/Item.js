import { image } from './apis'

export default class Item {
    constructor (obj, img = image) {
        this.product_name = obj.product_name
        this.price = obj.price
        this.id_product = obj.id_product
        this.img = img
    }
    render () {
        return `
            <div class="product">
                <img class="product__pic" src="${this.img}">
                <h2 class="product__title">${this.product_name}</h2>
                <span class="product__price">${this.price} $</span>
                <button
                    class="buy-btn"
                    data-name="${this.product_name}"
                    data-price="${this.price}"
                    data-id="${this.id_product}"
                    data-image="${this.img}"
                >add to cart</button>
            </div>
        `
    }
}