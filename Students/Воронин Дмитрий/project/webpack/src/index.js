import './public/css/normalize.css'
import './public/css/style.css'
import Cart from  './public/js/Cart.js'
import  Catalog from './public/js/Catalog.js'

let cart = new Cart();
let catalog = new Catalog(cart);
