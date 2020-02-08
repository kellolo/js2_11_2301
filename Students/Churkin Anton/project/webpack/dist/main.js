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
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _public_style_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public/style/style.css */ \"./src/public/style/style.css\");\n/* harmony import */ var _public_style_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_public_style_style_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _public_app_shop_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./public/app/shop.js */ \"./src/public/app/shop.js\");\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/public/app/shop.js":
/*!********************************!*\
  !*** ./src/public/app/shop.js ***!
  \********************************/
/*! exports provided: productStock, cart, InitPage, BuyItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"productStock\", function() { return productStock; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cart\", function() { return cart; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"InitPage\", function() { return InitPage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BuyItem\", function() { return BuyItem; });\ndocument.addEventListener('DOMContentLoaded', InitPage);\nconst goodsUrl = 'https://raw.githubusercontent.com/BruTyler/online-store-api/master/responses/catalogData.json';\n\nfunction makeGETRequest(url) {\n  return new Promise((res, rej) => {\n    let xhr;\n    xhr = new XMLHttpRequest();\n\n    xhr.onreadystatechange = function () {\n      if (xhr.readyState === 4) {\n        console.log(xhr.status);\n\n        if (xhr.status === 200) {\n          res(xhr.response);\n        } else {\n          rej('Error occured');\n        }\n      }\n    };\n\n    xhr.open('GET', url, true);\n    xhr.send();\n  });\n}\n\nvar productStock = [];\nvar cart = {};\nfunction InitPage() {\n  document.querySelector('.cart-button').addEventListener('click', () => {\n    document.querySelector('#cart').classList.toggle('invisible');\n  });\n  let shop = new ShopWindow(goodsUrl, '.goods');\n  cart = new Cart('#cart');\n  cart.renderHTMLElement();\n}\nwindow.BuyItem = BuyItem;\nfunction BuyItem(productId) {\n  cart.addProduct(productId);\n} //класс отрисовки объектов - родительский, абстрактный сам по себе не существует\n\nclass Renderable {\n  //при создании объекта как минимум должен указываться тег где будет отрисован обьект\n  constructor(querySelectorTarget, erasePreviousHTML = true) {\n    if (querySelectorTarget === null || querySelectorTarget === undefined) {\n      throw new Error(\"не указан selector\");\n    }\n\n    this.defaultSelectorTarget = querySelectorTarget;\n    this.defaultRenderBehaviour = erasePreviousHTML;\n  }\n\n  renderHTMLElement(querySelectorTarget, erasePreviousHTML) {\n    if (querySelectorTarget === null || querySelectorTarget === undefined) querySelectorTarget = this.defaultSelectorTarget;\n    if (erasePreviousHTML === null || erasePreviousHTML === undefined) erasePreviousHTML = this.defaultRenderBehaviour;\n\n    if (erasePreviousHTML) {\n      document.querySelector(querySelectorTarget).innerHTML = this._renderInnerElement();\n    } else {\n      document.querySelector(querySelectorTarget).innerHTML += this._renderInnerElement();\n    }\n  } //метод абстрактный, необходимо переопределять каждый раз - занимается отрисовкой внутри заданного html тэга\n\n\n  _renderInnerElement() {\n    throw new Error(\"renderInnerElement Not Implemented\");\n  }\n\n}\n\nclass Cart extends Renderable {\n  constructor(querySelectorTarget = '#cart', erasePreviousHTML = true) {\n    super(querySelectorTarget, erasePreviousHTML);\n    this.lines = [];\n  }\n\n  _renderInnerElement() {\n    let cartBuilder = '<hr>Ваш заказ: <br>';\n    if (this.lines.length == 0) cartBuilder += 'Пусто';else {\n      this.lines.forEach(line => cartBuilder += `<b>${line.product.title}<b>, ${line.product.price} руб х ${line.quantity} шт = ${line.calculateSummary()} руб<br>`);\n      cartBuilder += `<h1>ИТОГО: ${this.calculateSummary()} руб<h1>`;\n    }\n    return cartBuilder;\n  }\n\n  addProduct(productId) {\n    if (this.lines.filter(x => x.product.id == productId).length == 1) this.lines.find(x => x.product.id == productId).quantity++;else this.lines.push(new CartLine(productId));\n    this.renderHTMLElement();\n  }\n\n  removeProduct(productId) {\n    if (this.lines.find(x => x.product.id == productId).quantity == 1) {\n      let lineIndex = this.lines.indexOf(this.lines.find(x => x.product.id == productId));\n      this.lines = lines.splice(lineIndex, 1);\n    } else {\n      this.lines.find(x => x.product.id == productId).quantity--;\n    }\n\n    this.renderHTMLElement();\n  }\n\n  clear() {\n    this.lines.length = 0;\n    this.renderHTMLElement();\n  }\n\n  calculateSummary() {\n    let sumBuilder = 0;\n    this.lines.forEach(item => sumBuilder += item.calculateSummary());\n    return sumBuilder;\n  }\n\n} //строка корзины\n\n\nclass CartLine {\n  constructor(productId) {\n    this.product = this.fetchProduct(productId);\n    this.quantity = 1;\n  }\n\n  fetchProduct(productId) {\n    return productStock.find(x => x.id == productId);\n  }\n\n  calculateSummary() {\n    return this.quantity * this.product.price;\n  }\n\n  _renderInnerElement() {\n    return `<b>${this.product.title}<b>, ${this.product.price} руб х ${this.quantity} шт = ${this.calculateSummary()} руб<br>`;\n  }\n\n} //продукт\n\n\nclass Product {\n  constructor(id, title, price) {\n    this.id = id;\n    this.title = title;\n    this.price = price;\n  }\n\n} //витрина\n\n\nclass ShopWindow extends Renderable {\n  constructor(remoteSource, querySelectorTarget = '.shop', erasePreviousHTML = false) {\n    super(querySelectorTarget, erasePreviousHTML);\n    this.stock = [];\n\n    this._fetchData(remoteSource);\n  }\n\n  _fetchData(url) {\n    makeGETRequest(url).then(data => {\n      let remoteSourceItem = JSON.parse(data);\n      remoteSourceItem.forEach(item => this.stock.push(new Product(item.id_product, item.product_name, item.price)));\n      productStock = this.stock;\n      this.renderHTMLElement();\n    }).catch(err => {\n      console.log(err);\n    });\n  }\n\n  _renderInnerElement() {\n    let shopBuilder = 'Ассортимент магазина: <br>';\n    this.stock.forEach(item => shopBuilder += `${item.title}, стоимость ${item.price} рублей <button onclick='BuyItem(${item.id})'>Купить</button><br>`);\n    return shopBuilder;\n  }\n\n}\n\n//# sourceURL=webpack:///./src/public/app/shop.js?");

/***/ }),

/***/ "./src/public/style/style.css":
/*!************************************!*\
  !*** ./src/public/style/style.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/public/style/style.css?");

/***/ })

/******/ });