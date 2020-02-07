class Cart {
    constructor() {
        this.userCart = []
        this._init()
    }
    _init() {
        this._showCart()
        this._delButton()
    }
    _showCart() {
        document.querySelector('.btn-cart').addEventListener('click', () => {
            document.querySelector('.cart-block').classList.toggle('invisible');
        });
    }
    _delButton() {
        document.querySelector('.cart-block').addEventListener('click', (evt) => {
            if (evt.target.classList.contains('del-btn')) {
                this.removeProduct(evt.target);
            }
        })
    }

    addProduct(product) {
        let productId = +product.dataset['id']; //data-id="1"
        let find = this.userCart.find(element => element.id === productId); //товар или false
        if (!find) {
            this.userCart.push({
                name: product.dataset['name'],
                id: productId,
                img: 'https://placehold.it/100x80',
                price: +product.dataset['price'],
                quantity: 1
            })
        } else {
            find.quantity++
        }
        this.renderCart()
    }
    removeProduct(product) {
        let productId = +product.dataset['id'];
        let find = this.userCart.find(element => element.id === productId);
        if (find.quantity > 1) {
            find.quantity--;
        } else {
            this.userCart.splice(this.userCart.indexOf(find), 1);
            document.querySelector(`.cart-item[data-id="${productId}"]`).remove()
        }
        this.renderCart();
    }
    renderCart() {
        let allProducts = '';
        for (let el of this.userCart) {
            allProducts += `<div class="cart-item" data-id="${el.id}">
                                <div class="product-bio">
                                    <img src="${el.img}" alt="Some image">
                                    <div class="product-desc">
                                        <p class="product-title">${el.name}</p>
                                        <p class="product-quantity">Quantity: ${el.quantity}</p>
                                        <p class="product-single-price">$${el.price} each</p>
                                    </div>
                                </div>
                                <div class="right-block">
                                    <p class="product-price">${el.quantity * el.price}</p>
                                    <button class="del-btn" data-id="${el.id}">&times;</button>
                                </div>
                            </div>`
        }
        document.querySelector(`.cart-block`).innerHTML = allProducts
    }
}
export default Cart