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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _public_style_normalize_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public/style/normalize.css */ \"./src/public/style/normalize.css\");\n/* harmony import */ var _public_style_normalize_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_public_style_normalize_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _public_style_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./public/style/style.css */ \"./src/public/style/style.css\");\n/* harmony import */ var _public_style_style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_style_style_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _public_js_main_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./public/js/main.js */ \"./src/public/js/main.js\");\n\n\n\nObject(_public_js_main_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(); // import './public/js/main.js'\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/public/js/main.js":
/*!*******************************!*\
  !*** ./src/public/js/main.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n//заглушки (имитация базы данных)\nvar image = 'https://placehold.it/200x150';\nvar cartImage = 'https://placehold.it/100x80';\nvar API = 'https://raw.githubusercontent.com/bor1eu/online-store-api/master/responses';\n\nvar List =\n/*#__PURE__*/\nfunction () {\n  function List(url) {\n    _classCallCheck(this, List);\n\n    this.url = url;\n    this.items = [];\n\n    this._init();\n  }\n\n  _createClass(List, [{\n    key: \"_init\",\n    value: function _init() {\n      return false;\n    }\n  }, {\n    key: \"getData\",\n    value: function getData(url) {\n      return fetch(url).then(function (d) {\n        return d.json();\n      });\n    }\n  }]);\n\n  return List;\n}();\n\nvar Item = function Item(obj) {\n  var img = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : image;\n\n  _classCallCheck(this, Item);\n\n  this.product_name = obj.product_name;\n  this.price = obj.price;\n  this.id_product = obj.id_product;\n  this.img = img;\n};\n\nvar Catalog =\n/*#__PURE__*/\nfunction (_List) {\n  _inherits(Catalog, _List);\n\n  function Catalog(cart) {\n    var _this;\n\n    var url = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '/catalogData.json';\n\n    _classCallCheck(this, Catalog);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Catalog).call(this, url));\n    _this.cart = cart;\n    return _this;\n  }\n\n  _createClass(Catalog, [{\n    key: \"_init\",\n    value: function _init() {\n      var _this2 = this;\n\n      this.getData(API + this.url).then(function (parsedData) {\n        parsedData.forEach(function (el) {\n          _this2.items.push(new CatalogItem(el));\n        });\n      });\n    }\n  }]);\n\n  return Catalog;\n}(List);\n\nvar Cart =\n/*#__PURE__*/\nfunction (_List2) {\n  _inherits(Cart, _List2);\n\n  function Cart() {\n    var _this3;\n\n    var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '/getBasket.json';\n\n    _classCallCheck(this, Cart);\n\n    _this3 = _possibleConstructorReturn(this, _getPrototypeOf(Cart).call(this, url));\n    _this3.visible = false;\n    return _this3;\n  }\n\n  _createClass(Cart, [{\n    key: \"_init\",\n    value: function _init() {\n      var _this4 = this;\n\n      this.getData(API + this.url).then(function (parsedData) {\n        parsedData.contents.forEach(function (el) {\n          _this4.items.push(new CartItem(el));\n        });\n        _this4.amount = parsedData.amount;\n        _this4.countGoods = parsedData.countGoods;\n      }).then(function () {\n        _this4.calcCart();\n      });\n    }\n  }, {\n    key: \"addProduct\",\n    value: function addProduct(selectedItem) {\n      var _this5 = this;\n\n      var serverResponse200;\n      this.getData(API + '/addToBasket.json').then(function (response) {\n        serverResponse200 = response;\n      })[\"finally\"](function () {\n        if (serverResponse200) {\n          console.log(\"\\u0422\\u043E\\u0432\\u0430\\u0440 \".concat(selectedItem.product_name, \" \\u0434\\u043E\\u0431\\u0430\\u0432\\u043B\\u0435\\u043D \\u0432 \\u043A\\u043E\\u0440\\u0437\\u0438\\u043D\\u0443\"));\n\n          var find = _this5.items.find(function (item) {\n            return item.id_product === +selectedItem.id_product;\n          });\n\n          if (!find) {\n            _this5.items.push(new CartItem(_objectSpread({}, selectedItem, {\n              quantity: 1\n            })));\n          } else {\n            find.quantity++;\n          }\n\n          _this5.calcCart();\n        }\n      });\n    }\n  }, {\n    key: \"removeProduct\",\n    value: function removeProduct(selectedItem) {\n      var _this6 = this;\n\n      var serverResponse200;\n      this.getData(API + '/deleteFromBasket.json').then(function (response) {\n        serverResponse200 = response;\n      })[\"finally\"](function () {\n        if (serverResponse200) {\n          console.log(\"\\u0422\\u043E\\u0432\\u0430\\u0440 \".concat(selectedItem.product_name, \" \\u0443\\u0434\\u0430\\u043B\\u0435\\u043D \\u0438\\u0437 \\u043A\\u043E\\u0440\\u0437\\u0438\\u043D\\u044B\"));\n\n          var find = _this6.items.find(function (item) {\n            return item.id_product === +selectedItem.id_product;\n          });\n\n          if (find.quantity > 1) {\n            find.quantity--;\n          } else {\n            _this6.items.splice(_this6.items.indexOf(find), 1);\n          }\n\n          _this6.calcCart();\n        }\n      });\n    }\n  }, {\n    key: \"calcCart\",\n    value: function calcCart() {\n      var cost = 0;\n      var count = 0;\n      this.items.forEach(function (item) {\n        cost += item.price * item.quantity;\n        count += item.quantity;\n      });\n      this.amount = cost;\n      this.countGoods = count;\n    }\n  }]);\n\n  return Cart;\n}(List);\n\nvar CatalogItem =\n/*#__PURE__*/\nfunction (_Item) {\n  _inherits(CatalogItem, _Item);\n\n  function CatalogItem() {\n    _classCallCheck(this, CatalogItem);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(CatalogItem).apply(this, arguments));\n  }\n\n  return CatalogItem;\n}(Item);\n\nvar CartItem =\n/*#__PURE__*/\nfunction (_Item2) {\n  _inherits(CartItem, _Item2);\n\n  function CartItem(obj) {\n    var _this7;\n\n    var img = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : cartImage;\n\n    _classCallCheck(this, CartItem);\n\n    _this7 = _possibleConstructorReturn(this, _getPrototypeOf(CartItem).call(this, obj, img));\n    _this7.quantity = obj.quantity;\n    return _this7;\n  }\n\n  return CartItem;\n}(Item);\n\nvar listsVocabulary = {\n  Catalog: CatalogItem,\n  Cart: CartItem\n};\n\nfunction vueApp() {\n  var app = new Vue({\n    el: '#app',\n    data: {\n      filterString: '',\n      cart: {},\n      catalog: {}\n    },\n    methods: {\n      toggleCart: function toggleCart() {\n        this.cart.visible = !this.cart.visible;\n      },\n      filteredItem: function filteredItem(filterString, testString) {\n        filterRegExp = new RegExp(filterString, 'i');\n        return filterRegExp.test(testString);\n      }\n    },\n    computed: {},\n    mounted: function mounted() {\n      this.cart = new Cart();\n      this.catalog = new Catalog(this.cart);\n    }\n  });\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (vueApp);\n\n//# sourceURL=webpack:///./src/public/js/main.js?");

/***/ }),

/***/ "./src/public/style/normalize.css":
/*!****************************************!*\
  !*** ./src/public/style/normalize.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/public/style/normalize.css?");

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