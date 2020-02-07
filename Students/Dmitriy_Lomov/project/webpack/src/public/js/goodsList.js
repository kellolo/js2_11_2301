export default class GoodsList{
    constructor(cart) {
        this.goods = []
        this.url = 'https://raw.githubusercontent.com/DimaLom/online-store-api/master/responses/catalogData.json'

        this.container = null

        this.cart = cart
        this._init()
    }
    _init() {
        this.container = document.querySelector('.products')

        this._handleData()
        this._handleEvents()
    }
    _handleData() {
        this.fetchGoods (this.url)
            .then (data => {
                this.goods = JSON.parse (data)
                this.render()
            })
            .catch (err => {
                this.renderErr(err)
            })
    }
    _handleEvents() {
        this.container.addEventListener('click', (evt) => {
            if (evt.target.name === 'buy-btn') {
                this.cart.addProduct(evt.target)
            }
        })
    }
    fetchGoods(url) {
            return new Promise ((res, rej) => {
                let xhr
                xhr = new XMLHttpRequest ()

                xhr.onreadystatechange = function () {
                    if (xhr.readyState === 4) {
                        console.log(xhr.status)
                        if (xhr.status === 200) {
                            res (xhr.responseText)
                        } else {
                            rej ('Error occured! Try again later.')
                        }
                    }
                }
                
                xhr.open('GET', url, true)
                xhr.send()
            })
        }
    render() {
        let str = ''
        this.goods.forEach(item => {
            str += `
                <div class="product">
                    <img class="product__pic" src="https://placehold.it/300x200">
                    <h2 class="product__title">${item.product_name}</h2>
                    <span class="product__price">${item.price} $</span>
                    <button
                    class="product__btn" 
                    name="buy-btn"
                    data-name="${item.product_name}"
                    data-price="${item.price}"
                    data-id="${item.id_product}"
                    >add to cart</button>
                </div>
            `
        })
        
        this.container.innerHTML = str
    }
    renderErr(error) {
        let errText = `<div class="err-text">${error}</div>`

        this.container.innerHTML = errText
    }
}