const image = 'https://placehold.it/200x150'

const url = 'https://raw.githubusercontent.com/ShevelevAndrew/api-json-test/master/catalogData.json'

import GetData from './getdata.js'

class Products {
    constructor() {
        this.goodList
        this._init()
    }
    _init() {
        this._getDate()
    }
    _getDate() {
        let dateJson = new GetData(url)
        dateJson.data()
            .then(data => {
                console.log(data.msg)
                this.goodList = JSON.parse(data.dateStr)
                this.list = this._fetchData()
                this.renderProducts()
                    // this._handleEvents()
            })
            .catch(err => {
                console.log(err)
            })
            .finally(() => {
                console.log('Promise completed')
            })
    }
    _handleEvents() {
        document.querySelector('.products').addEventListener('click', (evt) => {
            if (evt.target.classList.contains('buy-btn')) {
                cart.addProduct(evt.target);
            }
        })
    }
    _fetchData() {
        let arr = [];
        for (let i = 0; i < this.goodList.length; i++) {
            arr.push(this.createProduct(i));
        }
        return arr
    }
    createProduct(i) {
        return {
            id: this.goodList[i].id_product,
            name: this.goodList[i].product_name,
            price: this.goodList[i].price,
            img: image,
            quantity: 0,
            createTemplate: function() {
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
    }
    renderProducts() {
        let str = ''
        for (let item of this.list) {
            str += item.createTemplate()
        }
        document.querySelector('.products').innerHTML = str;
    }
}

export default Products