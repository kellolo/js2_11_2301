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
/*! exports provided: productStock, cart, InitPage, BuyItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"productStock\", function() { return productStock; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cart\", function() { return cart; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"InitPage\", function() { return InitPage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BuyItem\", function() { return BuyItem; });\ndocument.addEventListener('DOMContentLoaded', InitPage);\r\n\r\n\r\nconst goods = [\r\n    { id: 1, title: 'Shirt', price: 150 },\r\n    { id: 2, title: 'Socks', price: 50 },\r\n    { id: 3, title: 'Jacket', price: 350 },\r\n    { id: 4, title: 'Shoes', price: 250 },\r\n];\r\n\r\n\r\nvar productStock = []\r\nvar cart = {}\r\n\r\nfunction InitPage() {\r\n    document.querySelector('.cart-button').addEventListener('click', () => {\r\n        document.querySelector('#cart').classList.toggle('invisible');\r\n    });\r\n\r\n    let shop = new ShopWindow(goods, '.goods');\r\n    productStock = shop.getStock();\r\n    shop.renderHTMLElement();\r\n\r\n    cart = new Cart('#cart');\r\n    cart.renderHTMLElement();\r\n}\r\n\r\n//при клике на кнопку .. BuyItem не видит\r\nwindow.BuyItem = BuyItem;\r\n\r\nfunction BuyItem(productId) {\r\n    cart.addProduct(productId)\r\n}\r\n\r\n\r\n//класс отрисовки объектов - родительский, абстрактный сам по себе не существует\r\nclass Renderable {\r\n\r\n    //при создании объекта как минимум должен указываться тег где будет отрисован обьект\r\n    constructor(querySelectorTarget, erasePreviousHTML = true) {\r\n        if ( querySelectorTarget === null || querySelectorTarget === undefined ) {\r\n            throw new Error(\"не указан selector\");\r\n        }\r\n        this.defaultSelectorTarget = querySelectorTarget;\r\n        this.defaultRenderBehaviour = erasePreviousHTML;\r\n    }\r\n\r\n    //метод вызывает рекурсивно себя, пока не проставит дефолтные значения\r\n    renderHTMLElement(querySelectorTarget, erasePreviousHTML) {\r\n        if ( querySelectorTarget === null || querySelectorTarget === undefined ) {\r\n            this.renderHTMLElement(this.defaultSelectorTarget)\r\n        } else if ( erasePreviousHTML === null || erasePreviousHTML === undefined ) {\r\n            this.renderHTMLElement(querySelectorTarget, this.defaultRenderBehaviour)\r\n        } else {\r\n            if(erasePreviousHTML) {\r\n                document.querySelector(querySelectorTarget).innerHTML = this._renderInnerElement()\r\n            } else {\r\n                document.querySelector(querySelectorTarget).innerHTML += this._renderInnerElement()\r\n            }\r\n        }\r\n    }\r\n\r\n    //метод абстрактный, необходимо переопределять каждый раз - занимается отрисовкой внутри заданного html тэга\r\n    _renderInnerElement() {\r\n        throw new Error(\"renderInnerElement Not Implemented\");\r\n    }\r\n}\r\n\r\nclass Cart extends Renderable {\r\n    constructor(querySelectorTarget = '#cart', erasePreviousHTML = true) {\r\n        super(querySelectorTarget, erasePreviousHTML)\r\n        this.lines = [];\r\n    }\r\n\r\n    _renderInnerElement() {\r\n        let cartBuilder = '<hr>Ваш заказ: <br>';\r\n\r\n        if(this.lines.length == 0)\r\n            cartBuilder += 'Пусто'\r\n        else {\r\n            this.lines.forEach(line => cartBuilder += `<b>${line.product.title}<b>, ${line.product.price} руб х ${line.quantity} шт = ${line.calculateSummary()} руб<br>`);\r\n            cartBuilder += `<h1>ИТОГО: ${this.calculateSummary()} руб<h1>`\r\n        }\r\n        \r\n        return cartBuilder;\r\n    }\r\n\r\n    addProduct(productId) {\r\n        if(this.lines.filter(x => x.product.id == productId).length == 1)\r\n            this.lines.find(x => x.product.id == productId).quantity++;\r\n        else \r\n            this.lines.push(new CartLine(productId))\r\n\r\n        this.renderHTMLElement();\r\n    }\r\n\r\n    removeProduct(productId) {\r\n        if(this.lines.find(x => x.product.id == productId).quantity == 1) {\r\n            let lineIndex = this.lines.indexOf(this.lines.find(x => x.product.id == productId));\r\n            this.lines =  lines.splice(lineIndex, 1);\r\n        } else {\r\n            this.lines.find(x => x.product.id == productId).quantity--;\r\n        }\r\n\r\n        this.renderHTMLElement();\r\n    }\r\n\r\n    clear() {\r\n        this.lines.length = 0;\r\n        this.renderHTMLElement();\r\n    }\r\n\r\n    calculateSummary() {\r\n        let sumBuilder = 0;\r\n        this.lines.forEach(item => sumBuilder += item.calculateSummary());\r\n        return sumBuilder;\r\n    }\r\n\r\n}\r\n\r\n//строка корзины\r\nclass CartLine {\r\n    constructor(productId, ) {\r\n        this.product = this.fetchProduct(productId);\r\n        this.quantity = 1;\r\n    }\r\n\r\n    fetchProduct(productId) {\r\n        return productStock.find(x => x.id == productId)\r\n    }\r\n\r\n    calculateSummary() {\r\n        return this.quantity * this.product.price;\r\n    }\r\n\r\n    _renderInnerElement() {\r\n        return `<b>${this.product.title}<b>, ${this.product.price} руб х ${this.quantity} шт = ${this.calculateSummary()} руб<br>`;\r\n    }\r\n}\r\n\r\n//продукт\r\nclass Product {\r\n    constructor(id, title, price) {\r\n        this.id = id;\r\n        this.title = title;\r\n        this.price = price;\r\n    }\r\n}\r\n\r\n//витрина\r\nclass ShopWindow extends Renderable {\r\n    constructor(remoteSource, querySelectorTarget = '.shop', erasePreviousHTML = false) {\r\n        super(querySelectorTarget, erasePreviousHTML)\r\n        this.stock = this._fetchData(remoteSource);\r\n    }\r\n\r\n    _fetchData(remoteSource) {\r\n        let products = []\r\n        remoteSource.forEach(item => products.push(new Product(item.id, item.title, item.price)));\r\n        return products;\r\n    }\r\n\r\n    _renderInnerElement() {\r\n        let shopBuilder = 'Ассортимент магазина: <br>';\r\n        this.stock.forEach(item => shopBuilder += `${item.title}, стоимость ${item.price} рублей <button onclick='BuyItem(${item.id})'>Купить</button><br>`);\r\n        return shopBuilder;\r\n    }\r\n\r\n    getStock() {\r\n        return this.stock;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });