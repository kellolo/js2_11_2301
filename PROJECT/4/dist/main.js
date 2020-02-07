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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _public_css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public/css/style.css */ \"./src/public/css/style.css\");\n/* harmony import */ var _public_css_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_public_css_style_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _public_js_main_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./public/js/main.js */ \"./src/public/js/main.js\");\n/* harmony import */ var _public_js_main_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_js_main_js__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconsole.log(_public_js_main_js__WEBPACK_IMPORTED_MODULE_1___default.a);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/public/css/style.css":
/*!**********************************!*\
  !*** ./src/public/css/style.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/public/css/style.css?");

/***/ }),

/***/ "./src/public/js/main.js":
/*!*******************************!*\
  !*** ./src/public/js/main.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n//заглушки (имитация базы данных)\nvar image = 'https://placehold.it/200x150';\nvar cartImage = 'https://placehold.it/100x80';\nvar API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses'; // const items = ['Notebook', 'Display', 'Keyboard', 'Mouse', 'Phones', 'Router', 'USB-camera', 'Gamepad'];\n// const prices = [1000, 200, 20, 10, 25, 30, 18, 24];\n// const ids = [1, 2, 3, 4, 5, 6, 7, 8];\n\nvar listsVocabulary = {\n  Catalog: CatalogItem,\n  Cart: CartItem\n};\n\nvar List =\n/*#__PURE__*/\nfunction () {\n  function List(url, container) {\n    _classCallCheck(this, List);\n\n    this.url = url;\n    this.container = container;\n    this.items = [];\n\n    this._init();\n  }\n\n  _createClass(List, [{\n    key: \"_init\",\n    value: function _init() {\n      return false;\n    }\n  }, {\n    key: \"getData\",\n    value: function getData(url) {\n      return fetch(url).then(function (d) {\n        return d.json();\n      });\n    }\n  }, {\n    key: \"_render\",\n    value: function _render() {\n      var _this = this;\n\n      var block = document.querySelector(this.container);\n      var htmlString = '';\n      this.items.forEach(function (item) {\n        var newObj = new listsVocabulary[_this.constructor.name](item);\n        htmlString += newObj.render();\n      });\n      block.innerHTML = htmlString;\n    }\n  }]);\n\n  return List;\n}();\n\nvar Item =\n/*#__PURE__*/\nfunction () {\n  function Item(obj) {\n    var img = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : image;\n\n    _classCallCheck(this, Item);\n\n    this.product_name = obj.product_name;\n    this.price = obj.price;\n    this.id_product = obj.id_product;\n    this.img = img;\n  }\n\n  _createClass(Item, [{\n    key: \"render\",\n    value: function render() {\n      return \"\\n            <div class=\\\"product-item\\\" data-id=\\\"\".concat(this.id_product, \"\\\">\\n                <img src=\\\"\").concat(this.img, \"\\\" alt=\\\"Some img\\\">\\n                <div class=\\\"desc\\\">\\n                    <h3>\").concat(this.product_name, \"</h3>\\n                    <p>\").concat(this.price, \" $</p>\\n                    <button class=\\\"buy-btn\\\" \\n                    data-id=\\\"\").concat(this.id_product, \"\\\"\\n                    data-name=\\\"\").concat(this.product_name, \"\\\"\\n                    data-image=\\\"\").concat(this.img, \"\\\"\\n                    data-price=\\\"\").concat(this.price, \"\\\">\\u041A\\u0443\\u043F\\u0438\\u0442\\u044C</button>\\n                </div>\\n            </div>\\n        \");\n    }\n  }]);\n\n  return Item;\n}();\n\nvar Catalog =\n/*#__PURE__*/\nfunction (_List) {\n  _inherits(Catalog, _List);\n\n  function Catalog(cart) {\n    var _this2;\n\n    var url = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '/catalogData.json';\n    var container = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '.products';\n\n    _classCallCheck(this, Catalog);\n\n    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(Catalog).call(this, url, container));\n    _this2.cart = cart;\n    return _this2;\n  }\n\n  _createClass(Catalog, [{\n    key: \"_init\",\n    value: function _init() {\n      var _this3 = this;\n\n      this.getData(API + this.url).then(function (parsedData) {\n        _this3.items = parsedData;\n      }).then(function () {\n        _this3._render();\n      })[\"finally\"](function () {\n        _this3._addListeners();\n      });\n    }\n  }, {\n    key: \"_addListeners\",\n    value: function _addListeners() {\n      var _this4 = this;\n\n      document.querySelector(this.container).addEventListener('click', function (evt) {\n        if (evt.target.classList.contains('buy-btn')) {\n          _this4.cart.addProduct(evt.target);\n        }\n      });\n    }\n  }]);\n\n  return Catalog;\n}(List);\n\nvar Cart =\n/*#__PURE__*/\nfunction (_List2) {\n  _inherits(Cart, _List2);\n\n  function Cart() {\n    var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '/getBasket.json';\n    var container = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '.cart-block';\n\n    _classCallCheck(this, Cart);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(Cart).call(this, url, container));\n  }\n\n  _createClass(Cart, [{\n    key: \"_init\",\n    value: function _init() {\n      var _this5 = this;\n\n      this.getData(API + this.url).then(function (parsedData) {\n        _this5.items = parsedData.contents;\n      }).then(function () {\n        _this5._render();\n      })[\"finally\"](function () {\n        _this5._addListeners();\n      });\n    }\n  }, {\n    key: \"_addListeners\",\n    value: function _addListeners() {\n      var _this6 = this;\n\n      //кнопка скрытия и показа корзины\n      document.querySelector('.btn-cart').addEventListener('click', function () {\n        document.querySelector('.cart-block').classList.toggle('invisible');\n      }); //кнопки удаления товара (добавляется один раз)\n\n      document.querySelector(this.container).addEventListener('click', function (evt) {\n        if (evt.target.classList.contains('del-btn')) {\n          _this6.removeProduct(evt.target);\n        }\n      });\n    }\n  }, {\n    key: \"addProduct\",\n    value: function addProduct(prod) {\n      var serverResponse200;\n      this.getData(API + '/addToBasket.json').then(function (response) {\n        serverResponse200 = response;\n      })[\"finally\"](function () {\n        if (serverResponse200) {\n          console.log(\"\\u0422\\u043E\\u0432\\u0430\\u0440 \".concat(prod.dataset.name, \" \\u0434\\u043E\\u0431\\u0430\\u0432\\u043B\\u0435\\u043D \\u0432 \\u043A\\u043E\\u0440\\u0437\\u0438\\u043D\\u0443\"));\n        }\n      });\n    }\n  }, {\n    key: \"removeProduct\",\n    value: function removeProduct(prod) {\n      var serverResponse200;\n      this.getData(API + '/deleteFromBasket.json').then(function (response) {\n        serverResponse200 = response;\n      })[\"finally\"](function () {\n        if (serverResponse200) {\n          console.log(\"\\u0422\\u043E\\u0432\\u0430\\u0440 \".concat(prod.dataset.id, \" \\u0443\\u0434\\u0430\\u043B\\u0435\\u043D \\u0438\\u0437 \\u043A\\u043E\\u0440\\u0437\\u0438\\u043D\\u044B\"));\n        }\n      });\n    }\n  }]);\n\n  return Cart;\n}(List);\n\nvar CatalogItem =\n/*#__PURE__*/\nfunction (_Item) {\n  _inherits(CatalogItem, _Item);\n\n  function CatalogItem() {\n    _classCallCheck(this, CatalogItem);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(CatalogItem).apply(this, arguments));\n  }\n\n  return CatalogItem;\n}(Item);\n\nvar CartItem =\n/*#__PURE__*/\nfunction (_Item2) {\n  _inherits(CartItem, _Item2);\n\n  function CartItem(obj) {\n    var _this7;\n\n    var img = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : cartImage;\n\n    _classCallCheck(this, CartItem);\n\n    _this7 = _possibleConstructorReturn(this, _getPrototypeOf(CartItem).call(this, obj, img));\n    _this7.quantity = 1;\n    return _this7;\n  }\n\n  _createClass(CartItem, [{\n    key: \"render\",\n    value: function render() {\n      return \"\\n            <div class=\\\"cart-item\\\" data-id=\\\"\".concat(this.id_product, \"\\\">\\n                <div class=\\\"product-bio\\\">\\n                    <img src=\\\"\").concat(this.img, \"\\\" alt=\\\"Some image\\\">\\n                    <div class=\\\"product-desc\\\">\\n                        <p class=\\\"product-title\\\">\").concat(this.product_name, \"</p>\\n                        <p class=\\\"product-quantity\\\">Quantity: \").concat(this.quantity, \"</p>\\n                        <p class=\\\"product-single-price\\\">$\").concat(this.price, \" each</p>\\n                    </div>\\n                </div>\\n                <div class=\\\"right-block\\\">\\n                    <p class=\\\"product-price\\\">\").concat(this.quantity * this.price, \"</p>\\n                    <button class=\\\"del-btn\\\" data-id=\\\"\").concat(this.id_product, \"\\\">&times;</button>\\n                </div>\\n            </div>\\n        \");\n    }\n  }]);\n\n  return CartItem;\n}(Item); //глобальные сущности корзины и каталога (ИМИТАЦИЯ! НЕЛЬЗЯ ТАК ДЕЛАТЬ!)\n\n/*var userCart = [];\nvar list = fetchData ();\n\n//кнопка скрытия и показа корзины\ndocument.querySelector('.btn-cart').addEventListener('click', () => {\n    document.querySelector('.cart-block').classList.toggle('invisible');\n});\n//кнопки удаления товара (добавляется один раз)\ndocument.querySelector('.cart-block').addEventListener ('click', (evt) => {\n    if (evt.target.classList.contains ('del-btn')) {\n        removeProduct (evt.target);\n    }\n})\n//кнопки покупки товара (добавляется один раз)\ndocument.querySelector('.products').addEventListener ('click', (evt) => {\n    if (evt.target.classList.contains ('buy-btn')) {\n        addProduct (evt.target);\n    }\n})\n\n//создание массива объектов - имитация загрузки данных с сервера\nfunction fetchData () {\n    let arr = [];\n    for (let i = 0; i < items.length; i++) {\n        arr.push (createProduct (i));\n    }\n    return arr\n};\n\n//создание товара\nfunction createProduct (i) {\n    return {\n        id: ids[i],\n        name: items[i],\n        price: prices[i],\n        img: image,\n        quantity: 0,\n        createTemplate: function () {\n            return `<div class=\"product-item\" data-id=\"${this.id}\">\n                        <img src=\"${this.img}\" alt=\"Some img\">\n                        <div class=\"desc\">\n                            <h3>${this.name}</h3>\n                            <p>${this.price} $</p>\n                            <button class=\"buy-btn\" \n                            data-id=\"${this.id}\"\n                            data-name=\"${this.name}\"\n                            data-image=\"${this.img}\"\n                            data-price=\"${this.price}\">Купить</button>\n                        </div>\n                    </div>`\n        },\n\n        add: function() {\n            this.quantity++\n        }\n    }\n};\n\n//рендер списка товаров (каталога)\nfunction renderProducts () {\n    let arr = [];\n    for (item of list) {\n        arr.push(item.createTemplate())\n    }\n    document.querySelector('.products').innerHTML = arr.join();\n}\n\nrenderProducts ();\n\n//CART\n\n// Добавление продуктов в корзину\nfunction addProduct (product) {\n    let productId = +product.dataset['id'];\n    let find = userCart.find (element => element.id === productId);\n    if (!find) {\n        userCart.push ({\n            name: product.dataset ['name'],\n            id: productId,\n            img: cartImage,\n            price: +product.dataset['price'],\n            quantity: 1\n        })\n    }  else {\n        find.quantity++\n    }\n    renderCart ()\n}\n\n//удаление товаров\nfunction removeProduct (product) {\n    let productId = +product.dataset['id'];\n    let find = userCart.find (element => element.id === productId);\n    if (find.quantity > 1) {\n        find.quantity--;\n    } else {\n        userCart.splice(userCart.indexOf(find), 1);\n        document.querySelector(`.cart-item[data-id=\"${productId}\"]`).remove()\n    }\n    renderCart ();\n}\n\n//перерендер корзины\nfunction renderCart () {\n    let allProducts = '';\n    for (el of userCart) {\n        allProducts += `<div class=\"cart-item\" data-id=\"${el.id}\">\n                            <div class=\"product-bio\">\n                                <img src=\"${el.img}\" alt=\"Some image\">\n                                <div class=\"product-desc\">\n                                    <p class=\"product-title\">${el.name}</p>\n                                    <p class=\"product-quantity\">Quantity: ${el.quantity}</p>\n                                    <p class=\"product-single-price\">$${el.price} each</p>\n                                </div>\n                            </div>\n                            <div class=\"right-block\">\n                                <p class=\"product-price\">${el.quantity * el.price}</p>\n                                <button class=\"del-btn\" data-id=\"${el.id}\">&times;</button>\n                            </div>\n                        </div>`\n    }\n\n    document.querySelector(`.cart-block`).innerHTML = allProducts;\n}*/\n\n//# sourceURL=webpack:///./src/public/js/main.js?");

/***/ })

/******/ });