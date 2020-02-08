import GoodsList from "./goodsList";
import Cart from "./cart";

//заглушки (имитация базы данных)
const image = "https://placehold.it/200x150";
const cartImage = "https://placehold.it/100x80";

//глобальные сущности корзины и каталога (ИМИТАЦИЯ! НЕЛЬЗЯ ТАК ДЕЛАТЬ!)
var userCart = [];

let goodsList = new GoodsList(image);

goodsList.fetchData("catalogData.json").then(data => {
  goodsList.renderProducts(data);
});

//CART

let cart = new Cart(userCart, cartImage);

//кнопка скрытия и показа корзины
document.querySelector(".btn-cart").addEventListener("click", () => {
  document.querySelector(".cart-block").classList.toggle("invisible");
});
//кнопки удаления товара (добавляется один раз)
document.querySelector(".cart-block").addEventListener("click", evt => {
  if (evt.target.classList.contains("del-btn")) {
    cart.removeProduct(evt.target);
  }
});
//кнопки покупки товара (добавляется один раз)
document.querySelector(".products").addEventListener("click", evt => {
  if (evt.target.classList.contains("buy-btn")) {
    cart.addProduct(evt.target);
  }
});





