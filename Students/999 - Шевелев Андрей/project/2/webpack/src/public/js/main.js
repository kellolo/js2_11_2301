import Products from './products.js'
import Cart from './cart.js'

let catalog = new Products
let cart = new Cart
console.log(catalog)
console.log(cart)

//кнопки покупки товара (добавляется один раз)
document.querySelector('.products').addEventListener('click', (evt) => {
    if (evt.target.classList.contains('buy-btn')) {
        cart.addProduct(evt.target);
    }
})