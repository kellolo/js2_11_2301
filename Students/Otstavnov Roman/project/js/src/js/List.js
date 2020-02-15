import CatalogItem from './CatalogItem'
import CartItem from './CartItem'


const listsVocabulary = {
  Catalog: CatalogItem,
  Cart: CartItem
}


class List {
  constructor (url, container) {
    this.url = url
    this.container = container
    this.items = []
    this._init()
  }
  _init () {
    return false
  }
  getData (url) {
    return fetch(url)
      .then(d => d.json())
  }
  _render () {
    let block = document.querySelector(this.container)
    let htmlString = this._render_prepend();

    if(this.items.length) {
      htmlString += '<div class="list">';
      this.items.forEach (item => {
        let newObj = new listsVocabulary[this.constructor.name] (item)
        htmlString += newObj.render();
      });
      htmlString += '</div>';
    }
    htmlString += this._render_append();
    block.innerHTML = htmlString
  }

  _render_prepend () { return '' };

  _render_append () { return '' };
}

export default List;