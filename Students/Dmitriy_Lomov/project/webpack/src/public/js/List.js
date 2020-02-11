import CartItem from './CartItem'
import CatalogItem from './CatalogItem'

const listVocabulary = {
    Catalog: CatalogItem,
    Cart: CartItem
}

export default class List {
    constructor (url, container) {
        this.url = url
        this.container = container
        this.items = []

        this._init()
    }
    _init (){
        return false
    }
    getData (url){
        return fetch(url)
                .then(d => d.json())
    }
    _render (){
        const block = document.querySelector(this.container)
        let htmlString = ''

        this.items.forEach (item => {
            const newObj = new listVocabulary[this.constructor.name] (item)
            htmlString += newObj.render()
        })

        block.innerHTML = htmlString
    }
}

