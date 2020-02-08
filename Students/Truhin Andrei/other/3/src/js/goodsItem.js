export default class GoodsItem{
  constructor(image, price, id, item) {     
    this.image = image;
    this.price = price;
    this.id = id;
    this.item = item;
}

   //создание товара
 createProduct () {
  return {
      id: this.id,
      name: this.item,
      price: this.price,
      img: this.image,
      quantity: 0,
      createTemplate: function () {
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
      },

      add: function() {
          this.quantity++
      }
  }
};
}