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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _public_style_normalize_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public/style/normalize.css */ \"./src/public/style/normalize.css\");\n/* harmony import */ var _public_style_normalize_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_public_style_normalize_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _public_style_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./public/style/style.css */ \"./src/public/style/style.css\");\n/* harmony import */ var _public_style_style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_style_style_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _public_js_main_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./public/js/main.js */ \"./src/public/js/main.js\");\n/* harmony import */ var _public_js_main_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_js_main_js__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/public/js/main.js":
/*!*******************************!*\
  !*** ./src/public/js/main.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n//заглушки (имитация базы данных)\nvar image = 'https://placehold.it/200x150';\nvar cartImage = 'https://placehold.it/100x80'; // const items = ['Notebook', 'Display', 'Keyboard', 'Mouse', 'Phones', 'Router', 'USB-camera', 'Gamepad'];\n// const prices = [1000, 200, 20, 10, 25, 30, 18, 24];\n// const ids = [1, 2, 3, 4, 5, 6, 7, 8];\n\nvar Catalog =\n/*#__PURE__*/\nfunction () {\n  function Catalog(inputArray) {\n    _classCallCheck(this, Catalog);\n\n    this._init(inputArray);\n\n    this.renderProducts();\n  }\n\n  _createClass(Catalog, [{\n    key: \"_init\",\n    value: function _init(inputArray) {\n      var _this = this;\n\n      this.Products = [];\n      inputArray.forEach(function (el) {\n        _this.Products.push(_this._createProduct(el));\n      });\n    }\n  }, {\n    key: \"_createProduct\",\n    value: function _createProduct(obj) {\n      return {\n        id: obj.id_product,\n        name: obj.product_name,\n        price: obj.price,\n        img: image,\n        quantity: 0,\n        createTemplate: function createTemplate() {\n          return \"<div class=\\\"product-item\\\" data-id=\\\"\".concat(this.id, \"\\\">\\n                            <img src=\\\"\").concat(this.img, \"\\\" alt=\\\"Some img\\\">\\n                            <div class=\\\"desc\\\">\\n                                <h3>\").concat(this.name, \"</h3>\\n                                <p>\").concat(this.price, \" $</p>\\n                                <button class=\\\"buy-btn\\\" \\n                                data-id=\\\"\").concat(this.id, \"\\\"\\n                                data-name=\\\"\").concat(this.name, \"\\\"\\n                                data-image=\\\"\").concat(this.img, \"\\\"\\n                                data-price=\\\"\").concat(this.price, \"\\\">\\u041A\\u0443\\u043F\\u0438\\u0442\\u044C</button>\\n                            </div>\\n                        </div>\");\n        },\n        add: function add() {\n          this.quantity++;\n        }\n      };\n    }\n  }, {\n    key: \"renderProducts\",\n    value: function renderProducts() {\n      var str = '';\n      var _iteratorNormalCompletion = true;\n      var _didIteratorError = false;\n      var _iteratorError = undefined;\n\n      try {\n        for (var _iterator = this.Products[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n          var item = _step.value;\n          str += item.createTemplate();\n        }\n      } catch (err) {\n        _didIteratorError = true;\n        _iteratorError = err;\n      } finally {\n        try {\n          if (!_iteratorNormalCompletion && _iterator[\"return\"] != null) {\n            _iterator[\"return\"]();\n          }\n        } finally {\n          if (_didIteratorError) {\n            throw _iteratorError;\n          }\n        }\n      }\n\n      document.querySelector('.products').innerHTML = str;\n    }\n  }]);\n\n  return Catalog;\n}();\n\nvar Cart =\n/*#__PURE__*/\nfunction () {\n  function Cart() {\n    _classCallCheck(this, Cart);\n\n    this._init();\n  }\n\n  _createClass(Cart, [{\n    key: \"_init\",\n    value: function _init() {\n      var _this2 = this;\n\n      this.List = []; //кнопка скрытия и показа корзины\n\n      document.querySelector('.btn-cart').addEventListener('click', function () {\n        document.querySelector('.cart-block').classList.toggle('invisible');\n      }); //кнопки удаления товара (добавляется один раз)\n\n      document.querySelector('.cart-block').addEventListener('click', function (evt) {\n        if (evt.target.classList.contains('del-btn')) {\n          _this2.removeProduct(evt.target);\n        }\n      }); //кнопки покупки товара (добавляется один раз)\n\n      document.querySelector('.products').addEventListener('click', function (evt) {\n        if (evt.target.classList.contains('buy-btn')) {\n          _this2.addProduct(evt.target);\n        }\n      });\n    }\n  }, {\n    key: \"addProduct\",\n    value: function addProduct(product) {\n      var productId = +product.dataset['id']; //data-id=\"1\"\n\n      var find = this.List.find(function (element) {\n        return element.id === productId;\n      }); //товар или false\n\n      if (!find) {\n        this.List.push({\n          name: product.dataset['name'],\n          id: productId,\n          img: cartImage,\n          price: +product.dataset['price'],\n          quantity: 1\n        });\n      } else {\n        find.quantity++;\n      }\n\n      this.renderCart();\n    }\n  }, {\n    key: \"removeProduct\",\n    value: function removeProduct(product) {\n      var productId = +product.dataset['id'];\n      var find = this.List.find(function (element) {\n        return element.id === productId;\n      });\n\n      if (find.quantity > 1) {\n        find.quantity--;\n      } else {\n        this.List.splice(this.List.indexOf(find), 1);\n        document.querySelector(\".cart-item[data-id=\\\"\".concat(productId, \"\\\"]\")).remove();\n      }\n\n      this.renderCart();\n    }\n  }, {\n    key: \"renderCart\",\n    value: function renderCart() {\n      var allProducts = '';\n      var _iteratorNormalCompletion2 = true;\n      var _didIteratorError2 = false;\n      var _iteratorError2 = undefined;\n\n      try {\n        for (var _iterator2 = this.List[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {\n          var el = _step2.value;\n          allProducts += \"<div class=\\\"cart-item\\\" data-id=\\\"\".concat(el.id, \"\\\">\\n                                <div class=\\\"product-bio\\\">\\n                                    <img src=\\\"\").concat(el.img, \"\\\" alt=\\\"Some image\\\">\\n                                    <div class=\\\"product-desc\\\">\\n                                        <p class=\\\"product-title\\\">\").concat(el.name, \"</p>\\n                                        <p class=\\\"product-quantity\\\">Quantity: \").concat(el.quantity, \"</p>\\n                                        <p class=\\\"product-single-price\\\">$\").concat(el.price, \" each</p>\\n                                    </div>\\n                                </div>\\n                                <div class=\\\"right-block\\\">\\n                                    <p class=\\\"product-price\\\">\").concat(el.quantity * el.price, \"</p>\\n                                    <button class=\\\"del-btn\\\" data-id=\\\"\").concat(el.id, \"\\\">&times;</button>\\n                                </div>\\n                            </div>\");\n        }\n      } catch (err) {\n        _didIteratorError2 = true;\n        _iteratorError2 = err;\n      } finally {\n        try {\n          if (!_iteratorNormalCompletion2 && _iterator2[\"return\"] != null) {\n            _iterator2[\"return\"]();\n          }\n        } finally {\n          if (_didIteratorError2) {\n            throw _iteratorError2;\n          }\n        }\n      }\n\n      this.totalNum();\n      this.totalSum();\n      document.querySelector(\".cart-items\").innerHTML = allProducts;\n    }\n  }, {\n    key: \"totalNum\",\n    value: function totalNum() {\n      var num = 0;\n      var _iteratorNormalCompletion3 = true;\n      var _didIteratorError3 = false;\n      var _iteratorError3 = undefined;\n\n      try {\n        for (var _iterator3 = this.List[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {\n          var el = _step3.value;\n          num += el.quantity;\n        }\n      } catch (err) {\n        _didIteratorError3 = true;\n        _iteratorError3 = err;\n      } finally {\n        try {\n          if (!_iteratorNormalCompletion3 && _iterator3[\"return\"] != null) {\n            _iterator3[\"return\"]();\n          }\n        } finally {\n          if (_didIteratorError3) {\n            throw _iteratorError3;\n          }\n        }\n      }\n\n      document.querySelector('#quantity').innerHTML = num;\n    }\n  }, {\n    key: \"totalSum\",\n    value: function totalSum() {\n      var sum = 0;\n      var _iteratorNormalCompletion4 = true;\n      var _didIteratorError4 = false;\n      var _iteratorError4 = undefined;\n\n      try {\n        for (var _iterator4 = this.List[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {\n          var el = _step4.value;\n          sum += el.quantity * el.price;\n        }\n      } catch (err) {\n        _didIteratorError4 = true;\n        _iteratorError4 = err;\n      } finally {\n        try {\n          if (!_iteratorNormalCompletion4 && _iterator4[\"return\"] != null) {\n            _iterator4[\"return\"]();\n          }\n        } finally {\n          if (_didIteratorError4) {\n            throw _iteratorError4;\n          }\n        }\n      }\n\n      document.querySelector('#price').innerHTML = sum;\n    }\n  }]);\n\n  return Cart;\n}();\n\nvar url = 'https://raw.githubusercontent.com/bor1eu/online-store-api/master/responses/catalogData.json';\n\nfunction makeGETRequest(url) {\n  return new Promise(function (res, rej) {\n    var xhr;\n    xhr = new XMLHttpRequest();\n\n    xhr.onreadystatechange = function () {\n      if (xhr.readyState === 4) {\n        console.log(xhr.status);\n\n        if (xhr.status === 200) {\n          res({\n            data: xhr.responseText,\n            msg: 'status OK'\n          });\n        } else {\n          rej('Error occured');\n        }\n      }\n    };\n\n    xhr.open('GET', url, true);\n    xhr.send();\n  });\n}\n\nvar promise = makeGETRequest(url).then(function (data) {\n  console.log(data.msg);\n  return data.data;\n}).then(JSON.parse).then(function (array) {\n  var shopCatalog = new Catalog(array);\n})[\"catch\"](console.log);\nvar shopCart = new Cart();\n\n//# sourceURL=webpack:///./src/public/js/main.js?");

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