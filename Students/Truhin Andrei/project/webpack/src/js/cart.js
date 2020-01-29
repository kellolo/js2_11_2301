import CartItem from "./cartItem";

export default class Cart {
    constructor(userCart, cartImage) {
        this.userCart = userCart;
        this.cartImage = cartImage;
        this.totalSum = 0;
    }
    // Добавление продуктов в корзину
addProduct (product) {
    let productId = +product.dataset['id']; //data-id="1"
    let find = this.userCart.find (element => element.id === productId); //товар или false
    if (!find) {
        this.userCart.push ({
            name: product.dataset ['name'],
            id: productId,
            img: this.cartImage,
            price: +product.dataset['price'],
            quantity: 1
        });

        this.totalSum += +product.dataset['price'];
        
    }  else {
        find.quantity++;
        this.totalSum += find.price;
       
    }
    this.renderCart ()
}

//удаление товаров
 removeProduct (product) {
    let productId = +product.dataset['id'];
    let find = this.userCart.find (element => element.id === productId);
    if (find.quantity > 1) {
        find.quantity--;
        this.totalSum -= find.price;
      
    } else {
        this.totalSum -= find.price;
        this.userCart.splice(this.userCart.indexOf(find), 1);
        document.querySelector(`.cart-item[data-id="${productId}"]`).remove();
        
    }
    this.renderCart ();
}


//перерендер корзины
 renderCart () {
    let allProducts = '';
    for (let el of this.userCart) {
        const newCartItem = new CartItem(el);
        allProducts += newCartItem.createItem();
    }
    this.renderSumCart();

    document.querySelector(`.cart-block`).innerHTML = allProducts;
}

renderSumCart(){
    console.log(this.totalSum);
}
}