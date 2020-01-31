/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// //заглушки (имитация базы данных)\r\n// const image = 'https://placehold.it/200x150';\r\n// const cartImage = 'https://placehold.it/100x80';\r\n// const items = ['Notebook', 'Display', 'Keyboard', 'Mouse', 'Phones', 'Router', 'USB-camera', 'Gamepad'];\r\n// const prices = [1000, 200, 20, 10, 25, 30, 18, 24];\r\n// const ids = [1, 2, 3, 4, 5, 6, 7, 8];\r\n\r\n\r\n// //глобальные сущности корзины и каталога (ИМИТАЦИЯ! НЕЛЬЗЯ ТАК ДЕЛАТЬ!)\r\n// var userCart = [];\r\n// var list = fetchData ();\r\n\r\n// //кнопка скрытия и показа корзины\r\n// document.querySelector('.btn-cart').addEventListener('click', () => {\r\n//     document.querySelector('.cart-block').classList.toggle('invisible');\r\n// });\r\n// //кнопки удаления товара (добавляется один раз)\r\n// document.querySelector('.cart-block').addEventListener ('click', (evt) => {\r\n//     if (evt.target.classList.contains ('del-btn')) {\r\n//         removeProduct (evt.target);\r\n//     }\r\n// })\r\n// //кнопки покупки товара (добавляется один раз)\r\n// document.querySelector('.products').addEventListener ('click', (evt) => {\r\n//     if (evt.target.classList.contains ('buy-btn')) {\r\n//         addProduct (evt.target);\r\n//     }\r\n// })\r\n\r\n// //создание массива объектов - имитация загрузки данных с сервера\r\n// function fetchData () {\r\n//     let arr = [];\r\n//     for (let i = 0; i < items.length; i++) {\r\n//         arr.push (createProduct (i));\r\n//     }\r\n//     return arr\r\n// };\r\n\r\n// //создание товара\r\n// function createProduct (i) {\r\n//     return {\r\n//         id: ids[i],\r\n//         name: items[i],\r\n//         price: prices[i],\r\n//         img: image,\r\n//         quantity: 0,\r\n//         createTemplate: function () {\r\n//             return `<div class=\"product-item\" data-id=\"${this.id}\">\r\n//                         <img src=\"${this.img}\" alt=\"Some img\">\r\n//                         <div class=\"desc\">\r\n//                             <h3>${this.name}</h3>\r\n//                             <p>${this.price} $</p>\r\n//                             <button class=\"buy-btn\" \r\n//                             data-id=\"${this.id}\"\r\n//                             data-name=\"${this.name}\"\r\n//                             data-image=\"${this.img}\"\r\n//                             data-price=\"${this.price}\">Купить</button>\r\n//                         </div>\r\n//                     </div>`\r\n//         },\r\n\r\n//         add: function() {\r\n//             this.quantity++\r\n//         }\r\n//     }\r\n// };\r\n\r\n// //рендер списка товаров (каталога)\r\n// function renderProducts () {\r\n//     //let arr = [];\r\n//     let str = ''\r\n//     for (item of list) {\r\n//         str += item.createTemplate()\r\n//     }\r\n//     document.querySelector('.products').innerHTML = str;\r\n// }\r\n\r\n// renderProducts ();\r\n\r\n// //CART\r\n\r\n// // Добавление продуктов в корзину\r\n// function addProduct (product) {\r\n//     let productId = +product.dataset['id']; //data-id=\"1\"\r\n//     let find = userCart.find (element => element.id === productId); //товар или false\r\n//     if (!find) {\r\n//         userCart.push ({\r\n//             name: product.dataset ['name'],\r\n//             id: productId,\r\n//             img: cartImage,\r\n//             price: +product.dataset['price'],\r\n//             quantity: 1\r\n//         })\r\n//     }  else {\r\n//         find.quantity++\r\n//     }\r\n//     renderCart ()\r\n// }\r\n\r\n// //удаление товаров\r\n// function removeProduct (product) {\r\n//     let productId = +product.dataset['id'];\r\n//     let find = userCart.find (element => element.id === productId);\r\n//     if (find.quantity > 1) {\r\n//         find.quantity--;\r\n//     } else {\r\n//         userCart.splice(userCart.indexOf(find), 1);\r\n//         document.querySelector(`.cart-item[data-id=\"${productId}\"]`).remove()\r\n//     }\r\n//     renderCart ();\r\n// }\r\n\r\n// //перерендер корзины\r\n// function renderCart () {\r\n//     let allProducts = '';\r\n//     for (el of userCart) {\r\n//         allProducts += `<div class=\"cart-item\" data-id=\"${el.id}\">\r\n//                             <div class=\"product-bio\">\r\n//                                 <img src=\"${el.img}\" alt=\"Some image\">\r\n//                                 <div class=\"product-desc\">\r\n//                                     <p class=\"product-title\">${el.name}</p>\r\n//                                     <p class=\"product-quantity\">Quantity: ${el.quantity}</p>\r\n//                                     <p class=\"product-single-price\">$${el.price} each</p>\r\n//                                 </div>\r\n//                             </div>\r\n//                             <div class=\"right-block\">\r\n//                                 <p class=\"product-price\">${el.quantity * el.price}</p>\r\n//                                 <button class=\"del-btn\" data-id=\"${el.id}\">&times;</button>\r\n//                             </div>\r\n//                         </div>`\r\n//     }\r\n\r\n//     document.querySelector(`.cart-block`).innerHTML = allProducts;\r\n// }\r\n\r\n// lesson 2\r\n\r\nconst goods = [\r\n    { title: 'Shirt', price: 150 },\r\n    { title: 'Socks', price: 50 },\r\n    { title: 'Jacket', price: 350 },\r\n    { title: 'Shoes', price: 250 },\r\n];\r\n\r\nlet buyBtn = document.querySelector('.buy-btn');\r\n\r\nclass Products {\r\n    constructor (array) {\r\n        this.products = array;\r\n        this.container = null;\r\n        this._init ();\r\n    }\r\n\r\n    _init () {\r\n        this.container = document.querySelector('.goods-list');\r\n        //render\r\n        this.render ();\r\n    }\r\n   \r\n    render () {\r\n        let str = '';\r\n        this.products.forEach(element => {\r\n          str += this.createProduct (element);\r\n        });\r\n        this.container.innerHTML = str; //произойдет рендер\r\n    }\r\n    \r\n    createProduct (prod) {\r\n        return `<div class=\"product-item\" data-id=\"${prod.id}>\r\n                    <img src=\"${prod.img}\" alt=\"Some img\">\r\n                    <div class=\"desc\">\r\n                    <h3>${prod.title}</h3>\r\n                       <p>${prod.price} $</p>\r\n                       <p>Quantity: 0</p>\r\n                       <button class=\"buy-btn\"\r\n                            data-id=\"${prod.id}\"\r\n                            data-name=\"${prod.title}\"\r\n                            data-image=\"${prod.img}\"\r\n                            data-price=\"${prod.price}\">Купить\r\n                        </button>\r\n                    </div>\r\n                </div>`;   \r\n    }\r\n    \r\n    // addToCart () {\r\n    //     buyBtn.addEventListener('click', функцияСлуш);\r\n    //     function функцияСлуш() {\r\n    //         /здесь будет что-то\r\n    //  }    \r\n    // }\r\n}\r\n\r\n\r\nclass Cart {\r\n    // здесь будет что-нибудь\r\n}\r\n\r\nclass InCart {\r\n\r\n}// здесь будет что-нибудь\r\n\r\nlet catalog = new Products (goods);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });