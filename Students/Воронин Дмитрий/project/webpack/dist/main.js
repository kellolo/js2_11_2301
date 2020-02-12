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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _public_css_normalize_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public/css/normalize.css */ \"./src/public/css/normalize.css\");\n/* harmony import */ var _public_css_normalize_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_public_css_normalize_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _public_css_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./public/css/style.css */ \"./src/public/css/style.css\");\n/* harmony import */ var _public_css_style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_css_style_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _public_js_Cart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./public/js/Cart.js */ \"./src/public/js/Cart.js\");\n/* harmony import */ var _public_js_Catalog_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./public/js/Catalog.js */ \"./src/public/js/Catalog.js\");\n\n\n\n // let cart = new Cart();\n// let catalog = new Catalog(cart);\n\nvar app = new Vue({\n  el: '#app',\n  data: {\n    imgCatalog: 'https://placehold.it/200x150',\n    JsonData: './data/dataItem.json',\n    products: []\n  },\n  methods: {\n    getJson: function getJson(url) {\n      return fetch(\"\".concat(url)).then(function (result) {\n        return result.json();\n      })[\"catch\"](function (err) {\n        console.log(err);\n      });\n    },\n    // getData (url) {\n    //     return fetch(url)\n    //         .then(d => d.json())\n    //         .catch(err => {\n    //             console.log(err);\n    //         })\n    // },\n    addProduct: function addProduct(product) {\n      console.log(\"\\u041A\\u0443\\u043F\\u043B\\u0435\\u043D \".concat(product.product_name));\n    }\n  },\n  mounted: function mounted() {\n    var _this = this;\n\n    this.getJson(this.JsonData).then(function (data) {\n      return _this.products = data;\n    });\n  }\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/public/css/normalize.css":
/*!**************************************!*\
  !*** ./src/public/css/normalize.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/public/css/normalize.css?");

/***/ }),

/***/ "./src/public/css/style.css":
/*!**********************************!*\
  !*** ./src/public/css/style.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/public/css/style.css?");

/***/ }),

/***/ "./src/public/js/Cart.js":
/*!*******************************!*\
  !*** ./src/public/js/Cart.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Cart; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Cart =\n/*#__PURE__*/\nfunction () {\n  function Cart() {\n    _classCallCheck(this, Cart);\n\n    this.items = [];\n    this.total = 0;\n    this.sum = 0;\n    this.container = '.cart-block';\n    this.quantityBlock = document.querySelector('#quantity');\n    this.priceBlock = document.querySelector('#price');\n\n    this._init();\n  }\n\n  _createClass(Cart, [{\n    key: \"_init\",\n    value: function _init() {\n      this._handleEvents();\n    }\n  }, {\n    key: \"_handleEvents\",\n    value: function _handleEvents() {\n      var _this = this;\n\n      document.querySelector(this.container).addEventListener('click', function (evt) {\n        if (evt.target.name === 'del-btn') {\n          _this.deleteProduct(evt.target);\n        }\n      });\n    }\n  }, {\n    key: \"addProduct\",\n    value: function addProduct(product) {\n      var id = product.dataset['id'];\n      var find = this.items.find(function (product) {\n        return product.id_product === id;\n      });\n\n      if (find) {\n        find.quantity++;\n      } else {\n        var prod = this._createNewProduct(product);\n\n        this.items.push(prod);\n      }\n\n      this._checkTotalAndSum();\n\n      this.render();\n    }\n  }, {\n    key: \"_createNewProduct\",\n    value: function _createNewProduct(prod) {\n      return {\n        product_name: prod.dataset['name'],\n        price: prod.dataset['price'],\n        id_product: prod.dataset['id'],\n        quantity: 1\n      };\n    }\n  }, {\n    key: \"deleteProduct\",\n    value: function deleteProduct(product) {\n      var id = product.dataset['id'];\n      var find = this.items.find(function (product) {\n        return product.id_product === id;\n      });\n\n      if (find.quantity > 1) {\n        find.quantity--;\n      } else {\n        this.items.splice(this.items.indexOf(find), 1);\n      }\n\n      this._checkTotalAndSum();\n\n      this.render();\n    }\n  }, {\n    key: \"_checkTotalAndSum\",\n    value: function _checkTotalAndSum() {\n      var qua = 0;\n      var pr = 0;\n      this.items.forEach(function (item) {\n        qua += item.quantity;\n        pr += item.price * item.quantity;\n      });\n      this.total = qua;\n      this.sum = pr;\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var itemsBlock = document.querySelector(this.container).querySelector('.cart-items');\n      var str = '';\n      this.items.forEach(function (item) {\n        str += \"<div class=\\\"cart-item\\\" data-id=\\\"\".concat(item.id_product, \"\\\">\\n                    <img src=\\\"https://placehold.it/100x80\\\" alt=\\\"\\\">\\n                    <div class=\\\"product-desc\\\">\\n                        <p class=\\\"product-title\\\">\").concat(item.product_name, \"</p>\\n                        <p class=\\\"product-quantity\\\">\").concat(item.quantity, \"</p>\\n                        <p class=\\\"product-single-price\\\">\").concat(item.price, \"</p>\\n                    </div>\\n                    <div class=\\\"right-block\\\">\\n                        <button name=\\\"del-btn\\\" class=\\\"del-btn\\\" data-id=\\\"\").concat(item.id_product, \"\\\">&times;</button>\\n                    </div>\\n                </div>\");\n      });\n      itemsBlock.innerHTML = str;\n      this.quantityBlock.innerText = this.total;\n      this.priceBlock.innerText = this.sum;\n    }\n  }]);\n\n  return Cart;\n}();\n\n\n\n//# sourceURL=webpack:///./src/public/js/Cart.js?");

/***/ }),

/***/ "./src/public/js/Catalog.js":
/*!**********************************!*\
  !*** ./src/public/js/Catalog.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Catalog; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar PRODUCTS_NAMES = ['Processor', 'Display', 'Notebook', 'Mouse', 'Keyboard'];\nvar PRICES = [100, 120, 1000, 15, 18];\nvar IDS = [0, 1, 2, 3, 4];\nvar IMGS = ['https://cs8.pikabu.ru/post_img/big/2017/12/25/5/1514188160141511997.jpg', 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/HMUB2?wid=1144&hei=1144&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1563827752399', 'https://zeon18.ru/files/item/Xiaomi-Mi-Notebook-Air-4G-Officially-Announced-Weboo-co-2%20(1)_1.jpg', 'https://files.sandberg.it/products/images/lg/640-05_lg.jpg', 'https://images-na.ssl-images-amazon.com/images/I/81PLqxtrJ3L._SX466_.jpg'];\n\nvar Catalog =\n/*#__PURE__*/\nfunction () {\n  function Catalog(cart) {\n    _classCallCheck(this, Catalog);\n\n    this.items = [];\n    this.container = '.products';\n    this.cart = cart;\n\n    this._init();\n  }\n\n  _createClass(Catalog, [{\n    key: \"_init\",\n    value: function _init() {\n      this._handleData();\n\n      this.render();\n\n      this._handleEvents();\n    }\n  }, {\n    key: \"_handleEvents\",\n    value: function _handleEvents() {\n      var _this = this;\n\n      document.querySelector(this.container).addEventListener('click', function (evt) {\n        if (evt.target.name === 'buy-btn') {\n          _this.cart.addProduct(evt.target);\n        }\n      });\n    }\n  }, {\n    key: \"_handleData\",\n    value: function _handleData() {\n      for (var i = 0; i < IDS.length; i++) {\n        this.items.push(this._createNewProduct(i));\n      }\n    }\n  }, {\n    key: \"_createNewProduct\",\n    value: function _createNewProduct(index) {\n      return {\n        product_name: PRODUCTS_NAMES[index],\n        price: PRICES[index],\n        id_product: IDS[index],\n        img: IMGS[index]\n      };\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var str = '';\n      this.items.forEach(function (item) {\n        str += \"\\n                <div class=\\\"product-item\\\">\\n                    <img src=\\\"https://placehold.it/300x200\\\" alt=\\\"\".concat(item.product_name, \"\\\">\\n                    <!--img src=\\\"\").concat(item.img, \"\\\" width=\\\"300\\\" height=\\\"200\\\" alt=\\\"\").concat(item.product_name, \"\\\"-->\\n                    <div class=\\\"desc\\\">\\n                        <h1>\").concat(item.product_name, \"</h1>\\n                        <p>\").concat(item.price, \"</p>\\n                        <button \\n                        class=\\\"buy-btn\\\" \\n                        name=\\\"buy-btn\\\"\\n                        data-name=\\\"\").concat(item.product_name, \"\\\"\\n                        data-price=\\\"\").concat(item.price, \"\\\"\\n                        data-id=\\\"\").concat(item.id_product, \"\\\"\\n                        >\\u041A\\u0443\\u043F\\u0438\\u0442\\u044C</button>\\n                    </div>\\n                </div>\\n            \");\n      });\n      document.querySelector(this.container).innerHTML = str;\n    }\n  }]);\n\n  return Catalog;\n}();\n\n\n\n//# sourceURL=webpack:///./src/public/js/Catalog.js?");

/***/ })

/******/ });