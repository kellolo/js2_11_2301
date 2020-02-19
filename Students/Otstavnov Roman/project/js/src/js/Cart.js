import List from './List';
import SETTINGS from './settings';
import CartItem from './CartItem'

class Cart extends List {
  constructor (url = '/getBasket.json', container = '.cart-block') {
    super (url, container);
    this.totalSum = 0;
    this.totalQuantity = 0;
  }

  _init () {
    this.getData(SETTINGS.API + this.url)
      .then(parsedData => {
        parsedData.contents.forEach(item => {
          this.addProduct({
            name: item.product_name,
            price: +item.price,
            id: +item.id_product,
            img: item.img,
          });
        });
      })
      .then(() => { this._render() })
      .finally(() => {
        this._addListeners()
      })
  }

  _addListeners () {
    //кнопка скрытия и показа корзины
    document.querySelector('.btn-cart').addEventListener('click', () => {
      document.querySelector('.cart-block').classList.toggle('invisible')
    })
    //кнопки удаления товара (добавляется один раз)
    document.querySelector(this.container).addEventListener('click', (evt) => {
      if (evt.target.classList.contains('del-btn')) {
        this.removeProduct(evt.target)
      }
    })
  }

  addProduct (prod) {
    let serverResponse200
    this.getData(SETTINGS.API + '/addToBasket.json')
      .then (response => { serverResponse200 = response })
      .finally (() => {
        if (serverResponse200) {
          let find = this.items.find (item => item.id_product === +prod.id )
          if (!find) {
            this.items.push (new CartItem ({
              product_name: prod.name,
              price: +prod.price,
              id_product: +prod.id,
              img: prod.img,
              quantity: 1
            }));
          } else {
            find.quantity++
          }
          this._updateTotal();
          this._render ()
        }
      })
  }

  removeProduct (prod) {
    let serverResponse200
    this.getData(SETTINGS.API + '/deleteFromBasket.json')
      .then (response => { serverResponse200 = response })
      .finally (() => {
        if (serverResponse200) {
          let find = this.items.find (item => item.id_product === +prod.dataset.id )
          if (find.quantity > 1) {
            find.quantity--
          } else {
            this.items.splice (this.items.indexOf(find), 1);
          }
          this._updateTotal();
          this._render()
        }
      })
  }

  _updateTotal () {
    this.totalQuantity = 0;
    this.totalSum = 0;
    this.items.forEach(item => {
      this.totalQuantity += item.quantity;
      this.totalSum = this.totalSum + item.price * item.quantity;
    });
  }

  _render_append() {
    return `<div class="cart-total">В корзине <b>${this.totalQuantity} товаров</b> на сумму <b>${this.totalSum} $</b></div>`;
  }
}

export default Cart;