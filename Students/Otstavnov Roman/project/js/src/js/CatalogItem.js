import Item from './Item'
import SETTINGS from './settings'

export class CatalogItem extends Item {
  constructor (obj) {
    obj.img = obj.img ? obj.img : SETTINGS.image;
    super (obj)
  }

  render () {
    return `
            <div class="product-item" data-id="${this.id_product}">
                <img src="${this.img}" alt="Some img">
                <div class="desc">
                    <h3>${this.product_name}</h3>
                    <p>${this.price} $</p>
                    <button class="buy-btn" 
                    data-id="${this.id_product}"
                    data-name="${this.product_name}"
                    data-img="${this.img}"
                    data-price="${this.price}">Купить</button>
                </div>
            </div>
        `
  }
}

export default CatalogItem;