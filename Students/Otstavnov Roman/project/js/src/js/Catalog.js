import List from './List';
import SETTINGS from './settings';

class Catalog extends List {
  constructor (cart, url = '/catalogData.json', container = '.products') {
    super (url, container)
    this.cart = cart
  }
  _init () {
    this.getData(SETTINGS.API2 + this.url)
      .then(parsedData => { this.items = parsedData })
      .then(() => { this._render() })
      .finally(() => { this._addListeners() })
  }

  _addListeners () {
    document.querySelector(this.container).addEventListener('click', (evt) => {
      if (evt.target.classList.contains('buy-btn')) {
        this.cart.addProduct({...evt.target.dataset})
      }
    })
  }
}

export default Catalog;