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

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/public/sass/main.sass":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--5-2!./node_modules/postcss-loader/src??ref--5-3!./node_modules/sass-loader/dist/cjs.js??ref--5-4!./src/public/sass/main.sass ***!
  \**************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/public/sass/main.sass?./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--5-2!./node_modules/postcss-loader/src??ref--5-3!./node_modules/sass-loader/dist/cjs.js??ref--5-4");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _public_sass_main_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public/sass/main.sass */ \"./src/public/sass/main.sass\");\n/* harmony import */ var _public_sass_main_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_public_sass_main_sass__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _public_images_my_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./public/images/my_logo.png */ \"./src/public/images/my_logo.png\");\n/* harmony import */ var _public_js_main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./public/js/main */ \"./src/public/js/main.js\");\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/public/images/my_logo.png":
/*!***************************************!*\
  !*** ./src/public/images/my_logo.png ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"./images/my_logo.png\");\n\n//# sourceURL=webpack:///./src/public/images/my_logo.png?");

/***/ }),

/***/ "./src/public/js/cart.js":
/*!*******************************!*\
  !*** ./src/public/js/cart.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Cart; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Cart =\n/*#__PURE__*/\nfunction () {\n  function Cart() {\n    _classCallCheck(this, Cart);\n\n    this.goods = [];\n    this.qtySum = 0;\n    this.sum = 0;\n    this.container = document.querySelector('.cart');\n    this.priceBlock = document.querySelector('#price');\n    this.qtyBlock = document.querySelector('#quantity');\n    this.cartBtn = document.querySelector('#cart-main-btn');\n    this.cartWrapper = document.querySelector('#cartWrapper');\n\n    this._init();\n  }\n\n  _createClass(Cart, [{\n    key: \"_init\",\n    value: function _init() {\n      this._handleEvents();\n    }\n  }, {\n    key: \"_handleEvents\",\n    value: function _handleEvents() {\n      var _this = this;\n\n      this.cartBtn.addEventListener('click', function () {\n        _this.cartWrapper.classList.contains('visible') ? _this.cartWrapper.classList.remove('visible') : _this.cartWrapper.classList.add('visible');\n      });\n      this.container.addEventListener('click', function (evt) {\n        if (evt.target.name === 'del-btn') {\n          _this.deleteProduct(evt.target);\n        }\n      });\n    }\n  }, {\n    key: \"addProduct\",\n    value: function addProduct(product) {\n      var id = product.dataset['id'];\n      var find = this.goods.find(function (product) {\n        return product.id_product === id;\n      });\n\n      if (find) {\n        find.quantity++;\n      } else {\n        this.goods.push(this.fetchGoods(product));\n      }\n\n      this._checkTotal();\n\n      this._calculateSum();\n\n      this.render();\n    }\n  }, {\n    key: \"fetchGoods\",\n    value: function fetchGoods(prod) {\n      return {\n        product_name: prod.dataset['name'],\n        price: prod.dataset['price'],\n        id_product: prod.dataset['id'],\n        quantity: 1\n      };\n    }\n  }, {\n    key: \"deleteProduct\",\n    value: function deleteProduct(product) {\n      var id = product.dataset['id'];\n      var find = this.goods.find(function (product) {\n        return product.id_product === id;\n      });\n\n      if (find.quantity > 1) {\n        find.quantity--;\n      } else {\n        this.goods.splice(this.goods.indexOf(find), 1);\n      }\n\n      this._checkTotal();\n\n      this._calculateSum();\n\n      this.render();\n    }\n  }, {\n    key: \"_calculateSum\",\n    value: function _calculateSum() {\n      this.sum = this.goods.reduce(function (total, el) {\n        return total += el.price * el.quantity;\n      }, 0);\n    }\n  }, {\n    key: \"_checkTotal\",\n    value: function _checkTotal() {\n      this.qtySum = this.goods.reduce(function (total, el) {\n        return total += el.quantity;\n      }, 0);\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var str = '';\n\n      if (this.goods.length !== 0) {\n        this.goods.forEach(function (item) {\n          str += \"\\n                    <div class=\\\"cart__item\\\">\\n                        <img class=\\\"cart__pic\\\" src=\\\"https://placehold.it/100x50\\\">\\n                        <div class=\\\"cart__description\\\">\\n                            <h3 class=\\\"cart__title\\\">\".concat(item.product_name, \"</h3>\\n                            <span class=\\\"cart__price\\\">$: <b>\").concat(item.price, \"</b></span>\\n                            <span class=\\\"cart__quantity\\\">qty: <b>\").concat(item.quantity, \"</b></span>\\n                        </div>\\n                        <button \\n                            name=\\\"del-btn\\\" \\n                            class=\\\"cart__btn\\\" \\n                            data-id=\\\"\").concat(item.id_product, \"\\\"\\n                        >&times;</button>\\n                    </div>\\n                \");\n        });\n      } else {\n        str += \"<span>Cart is empty</span>\";\n      }\n\n      this.container.innerHTML = str;\n      this.priceBlock.innerHTML = this.sum;\n      this.qtyBlock.innerHTML = this.qtySum;\n    }\n  }]);\n\n  return Cart;\n}();\n\n\n\n//# sourceURL=webpack:///./src/public/js/cart.js?");

/***/ }),

/***/ "./src/public/js/goodsList.js":
/*!************************************!*\
  !*** ./src/public/js/goodsList.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return GoodsList; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar GoodsList =\n/*#__PURE__*/\nfunction () {\n  function GoodsList(cart) {\n    _classCallCheck(this, GoodsList);\n\n    this.goods = [];\n    this.url = 'https://raw.githubusercontent.com/DimaLom/online-store-api/master/responses/catalogData.json';\n    this.container = null;\n    this.cart = cart;\n\n    this._init();\n  }\n\n  _createClass(GoodsList, [{\n    key: \"_init\",\n    value: function _init() {\n      this.container = document.querySelector('.products');\n\n      this._handleData();\n\n      this._handleEvents();\n    }\n  }, {\n    key: \"_handleData\",\n    value: function _handleData() {\n      var _this = this;\n\n      this.fetchGoods(this.url).then(function (data) {\n        _this.goods = JSON.parse(data);\n\n        _this.render();\n      }).catch(function (err) {\n        _this.renderErr(err);\n      });\n    }\n  }, {\n    key: \"_handleEvents\",\n    value: function _handleEvents() {\n      var _this2 = this;\n\n      this.container.addEventListener('click', function (evt) {\n        if (evt.target.name === 'buy-btn') {\n          _this2.cart.addProduct(evt.target);\n        }\n      });\n    }\n  }, {\n    key: \"fetchGoods\",\n    value: function fetchGoods(url) {\n      return new Promise(function (res, rej) {\n        var xhr;\n        xhr = new XMLHttpRequest();\n\n        xhr.onreadystatechange = function () {\n          if (xhr.readyState === 4) {\n            console.log(xhr.status);\n\n            if (xhr.status === 200) {\n              res(xhr.responseText);\n            } else {\n              rej('Error occured! Try again later.');\n            }\n          }\n        };\n\n        xhr.open('GET', url, true);\n        xhr.send();\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var str = '';\n      this.goods.forEach(function (item) {\n        str += \"\\n                <div class=\\\"product\\\">\\n                    <img class=\\\"product__pic\\\" src=\\\"https://placehold.it/300x200\\\">\\n                    <h2 class=\\\"product__title\\\">\".concat(item.product_name, \"</h2>\\n                    <span class=\\\"product__price\\\">\").concat(item.price, \" $</span>\\n                    <button\\n                    class=\\\"product__btn\\\" \\n                    name=\\\"buy-btn\\\"\\n                    data-name=\\\"\").concat(item.product_name, \"\\\"\\n                    data-price=\\\"\").concat(item.price, \"\\\"\\n                    data-id=\\\"\").concat(item.id_product, \"\\\"\\n                    >add to cart</button>\\n                </div>\\n            \");\n      });\n      this.container.innerHTML = str;\n    }\n  }, {\n    key: \"renderErr\",\n    value: function renderErr(error) {\n      var errText = \"<div class=\\\"err-text\\\">\".concat(error, \"</div>\");\n      this.container.innerHTML = errText;\n    }\n  }]);\n\n  return GoodsList;\n}();\n\n\n\n//# sourceURL=webpack:///./src/public/js/goodsList.js?");

/***/ }),

/***/ "./src/public/js/main.js":
/*!*******************************!*\
  !*** ./src/public/js/main.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cart */ \"./src/public/js/cart.js\");\n/* harmony import */ var _goodsList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./goodsList */ \"./src/public/js/goodsList.js\");\n\n\nvar cart = new _cart__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\nvar goodsList = new _goodsList__WEBPACK_IMPORTED_MODULE_1__[\"default\"](cart);\n\n//# sourceURL=webpack:///./src/public/js/main.js?");

/***/ }),

/***/ "./src/public/sass/main.sass":
/*!***********************************!*\
  !*** ./src/public/sass/main.sass ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../node_modules/css-loader/dist/cjs.js??ref--5-2!../../../node_modules/postcss-loader/src??ref--5-3!../../../node_modules/sass-loader/dist/cjs.js??ref--5-4!./main.sass */ \"./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/public/sass/main.sass\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/public/sass/main.sass?");

/***/ })

/******/ });