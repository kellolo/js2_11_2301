
const API = `https://raw.githubusercontent.com/gek-finn/online-store-api/master/responses`;


class List {
    constructor(url, container){
        this.container = container;
        this.url = url;
        this.data = [];
        this.allProducts = [];
        this.filtered = [];
        this._init();
    }
    getJson(url){
        return fetch(url ? url : `${API + this.url}`)
            .then(result => result.json())
            .catch(error => console.log(error));
    }
    handleData(data){
        this.data = [...data];
        this._render()
    }
    _init(){
        return false
    }
    _render(){
        const block = document.querySelector(this.container);
        for (let el of this.data) {
            const product = new lists[this.constructor.name](el);
            this.allProducts.push(product);
            block.insertAdjacentHTML('beforeend', product.render())
        }
    }
    getItem(id){
        return this.allProducts.find(el => el.id_product === id);
    }
    calcSum(){
        return this.allProducts.reduce((accum, item) => accum + item.price, 0);
    }
    filter(value){
        const regexp = new RegExp(value, 'i');
        this.filtered = this.allProducts.filter(el => regexp.test(el.product_name));
        this.allProducts.forEach(el => {
            const block = document.querySelector(`.product-item[data-id="${el.id_product}"]`);
            if(!this.filtered.includes(el)){
                block.classList.add('invisible');
            } else {
                block.classList.remove('invisible');
            }
        })
    }
}

class Item {
    constructor(el, img='https://placehold.it/200x150'){
        this.product_name = el.product_name;
        this.id_product = el.id_product;
        this.price = el.price;
        this.img = img;
    }
    render() {
        return `<div class="product-item" data-id="${this.id_product}">
                 <img src="${this.img}" alt="${this.product_name}">
                 <div class="desc">
                     <h3>${this.product_name}</h3>
                     <p>${this.price}</p>
                     <button class="buy-btn" data-id="${this.id_product}">Купить</button>
                 </div>
             </div>`
    }
}
class Products extends List {
    constructor(cart, url="/catalogData.json", container=`.products`){
        super(url, container);
        this.cart = cart;
        this.getJson()
            .then(data => this.handleData(data))
    }
    _init(){
        document.querySelector(this.container).addEventListener('click', e => {
            if(e.target.classList.contains('buy-btn')){
                const id = +e.target.dataset['id'];
                cart.addProduct(this.getItem(id));
            }
        });
        document.querySelector(`.search-form`).addEventListener('submit', e => {
            e.preventDefault();
            this.filter(document.querySelector(`.search-field`).value);
        })
    }
}

class ProductItem extends Item{}

class Cart extends List {
    constructor(url='/getBasket.json', container='.cart-block'){
        super(url, container);
        this.getJson()
            .then(data => this.handleData(data.contents))
    }
    addProduct(product){
        this.getJson(`${API}/addToBasket.json`)
            .then(data => {
                if(data.result){
                    let find = this.allProducts.find(el => el.id_product === product.id_product);
                    if(find){
                        find.quantity++;
                        this._updateCart(find);
                    } else {
                        let prod = Object.assign({quantity: 1}, product);
                        this.data = [prod];
                        this._render()
                    }
                } else {
                    console.log('error');
                }
            })
    }
    removeProduct(product){
        this.getJson(`${API}/deleteFromBasket.json`)
            .then(data => {
                if(data.result){
                    if(product.quantity > 1) {
                        product.quantity--;
                        this._updateCart(product);
                    } else {
                        this.allProducts.splice(this.allProducts.indexOf(product), 1);
                        document.querySelector(`.cart-item[data-id="${product.id_product}"]`).remove();
                    }
                } else {
                    console.log('error');
                }
            })
    }
    _updateCart(product){
        const block = document.querySelector(`.cart-item[data-id="${product.id_product}"]`);
        block.querySelector(`.product-quantity`).textContent = `Quantity: ${product.quantity}`;
        block.querySelector(`.product-price`).textContent = `$${product.quantity*product.price}`;
    }
    _init(){
        document.querySelector(this.container).addEventListener('click', e => {
            if(e.target.classList.contains('del-btn')){
                const id = +e.target.dataset['id'];
                this.removeProduct(this.getItem(id));
            }
        });
        document.querySelector(`.btn-cart`).addEventListener('click', () => {
            document.querySelector(this.container).classList.toggle(`invisible`);
        })
    }
}

class CartItem extends Item{
    constructor(el, img=`https://placehold.it/50x100`){
        super(el, img);
        this.quantity = el.quantity;
    }
    render() {
        return `<div class="cart-item" data-id="${this.id_product}">
        			<div class="product-bio">
        				<img src="${this.img}" alt="Some image">
        				<div class="product-desc">
        					<p class="product-title">${this.product_name}</p>
        					<p class="product-quantity">Quantity: ${this.quantity}</p>
        					<p class="product-single-price">$${this.price} each</p>
        				</div>
        			</div>
        			<div class="right-block">
        				<p class="product-price">$${this.quantity*this.price}</p>
        				<button class="del-btn" data-id="${this.id_product}">
        					&times;
        				</button>
        			</div>
        		</div>`
    }
} 

const lists = {
    Cart: CartItem,
    Products: ProductItem
};



const cart = new Cart();
const products = new Products(cart);
products.getJson(`getProducts.json`).then(data => products.handleData(data));



