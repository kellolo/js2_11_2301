class Item {
  constructor (obj) {
    this.product_name = obj.product_name
    this.price = obj.price
    this.id_product = obj.id_product
    this.img = obj.img;
  }
  render () {
    return `
          <div class="item" data-id="${this.id_product}">
              <img src="${this.img}" alt="Some img">
              <h3>${this.product_name}</h3>
          </div>
        `
  }
}

export default Item;