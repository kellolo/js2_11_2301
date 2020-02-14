import Item from './Item';
import SETTINGS from './settings';

export class CartItem extends Item {
  constructor (obj) {
    obj.img = obj.img ? obj.img : SETTINGS.cartImage;
    super (obj)
    this.quantity = obj.quantity;
    this.id = obj.id;
  }

  render () {
    return `
            <div class="cart-item" data-id="${this.id_product}">
                <div class="product-bio">
                    <img src="${this.img}" alt="Some image">
                    <div class="product-desc">
                        <p class="product-title">${this.product_name}</p>
                        <p class="product-quantity">Quantity: ${this.quantity}</p>
                        <p class="product-single-price">$${this.price} each</p>
                    </div>
                </div>
                <div class="right-block">
                    <p class="product-price">${this.quantity * this.price}</p>
                    <button class="del-btn" data-id="${this.id_product}">&times;</button>
                </div>
            </div>
        `
  }
}

export default CartItem;