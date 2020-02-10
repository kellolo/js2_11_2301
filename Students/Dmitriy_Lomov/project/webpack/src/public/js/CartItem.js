import Item from './Item'
import { cartImage } from './apis'

export default class CartItem extends Item {
    constructor (obj, img = cartImage) {
        super (obj, img)
        this.quantity = obj.quantity
    }
    render () {
        return `
                <div class="cart__item" data-id="${this.id_product}">
                    <img class="cart__pic" src="${this.img}">
                    <div class="cart__description">
                        <h3 class="cart__title">${this.product_name}</h3>
                        <span class="cart__price">$: <b>${this.price}</b></span>
                        <span class="cart__quantity">qty: <b>${this.quantity}</b></span>
                    </div>
                    <button 
                        class="del-btn" 
                        data-id="${this.id_product}"
                    >&times;</button>
                </div>
        `
    }
}