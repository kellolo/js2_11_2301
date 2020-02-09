export default class CartItem{
  constructor(item) {
    this.item = item;
  
  }

  createItem() {
    return `<div class="cart-item" data-id="${this.item.id}">
    <div class="product-bio">
        <img src="${this.item.img}" alt="Some image">
        <div class="product-desc">
            <p class="product-title">${this.item.name}</p>
            <p class="product-quantity">Quantity: ${this.item.quantity}</p>
            <p class="product-single-price">$${this.item.price} each</p>
        </div>
    </div>
    <div class="right-block">
        <p class="product-price">${this.item.quantity * this.item.price}</p>
        <button class="del-btn" data-id="${this.item.id}">&times;</button>
    </div>
</div>`;
  };

  totalItemPrice(){
    return this.item.quantity * this.item.price;
  }
}