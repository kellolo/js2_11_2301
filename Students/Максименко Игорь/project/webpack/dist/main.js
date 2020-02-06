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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/public/css/styles.css":
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/public/css/styles.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"body{\\r\\n    font-family: 'SF Pro Display', sans-serif;\\r\\n}\\r\\nheader{\\r\\n    display: flex;\\r\\n    background-color: #2f2a2d;\\r\\n    justify-content: space-between;\\r\\n    color: #fafafa;\\r\\n    padding: 30px 80px;\\r\\n}\\r\\nbutton:focus{\\r\\n    outline: none;\\r\\n}\\r\\n.logo{\\r\\n\\r\\n    text-transform: uppercase;\\r\\n    font-weight: bold;\\r\\n}\\r\\n.btn-cart{\\r\\n    background-color: #fafafa;\\r\\n    padding: 10px 20px;\\r\\n    border: 1px solid transparent;\\r\\n    color: #2f2a2d;\\r\\n    border-radius: 5px;\\r\\n    transition: all ease-in-out .4s;\\r\\n    cursor: pointer;\\r\\n}\\r\\n.btn-cart:hover{\\r\\n    background-color: transparent;\\r\\n    border-color: #fafafa;\\r\\n    color: #fafafa;\\r\\n}\\r\\n.btn-cart, .logo{\\r\\n    align-self: center;\\r\\n}\\r\\n/*.products {*/\\r\\n/*display: flex;*/\\r\\n/*justify-content: space-between;*/\\r\\n/*flex-wrap: wrap;*/\\r\\n/*padding: 40px 80px;*/\\r\\n/*}*/\\r\\n.products{\\r\\n    column-gap: 30px;\\r\\n    display: grid;\\r\\n    grid-template-columns: repeat(auto-fit, 200px);\\r\\n    grid-template-rows: 1fr;\\r\\n    padding: 40px 80px;\\r\\n    justify-content: space-between;\\r\\n}\\r\\np {\\r\\n    margin: 0 0 5px 0;\\r\\n}\\r\\n.product-item{\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    width: 200px;\\r\\n    border-radius: 5px;\\r\\n    overflow: hidden;\\r\\n    margin: 20px 0;\\r\\n}\\r\\nimg {\\r\\n    max-width: 100%;\\r\\n    height: auto\\r\\n}\\r\\n.desc {\\r\\n    border: 1px solid #c0c0c040;\\r\\n    padding: 15px\\r\\n}\\r\\n.cart{\\r\\n    position: relative;\\r\\n}\\r\\n.cart-block{\\r\\n    box-shadow: 0 0 5px rgba(0, 0, 0, 0.62);\\r\\n    border-radius: 5px;\\r\\n    box-sizing: border-box;\\r\\n    right: 0;\\r\\n    top: 130%;\\r\\n    position: absolute;\\r\\n    background-color: white;\\r\\n    padding: 20px;\\r\\n    color: black;\\r\\n    width: 300px;\\r\\n}\\r\\n\\r\\n.invisible{\\r\\n    display: none;\\r\\n}\\r\\n.cart-block:before{\\r\\n    content: '';\\r\\n    width: 0;\\r\\n    height: 0;\\r\\n    position: absolute;\\r\\n    top: -10px;\\r\\n    right: 35px;\\r\\n    border-left: 10px solid transparent;\\r\\n    border-right: 10px solid transparent;\\r\\n    border-bottom: 10px solid white;\\r\\n}\\r\\n\\r\\n.buy-btn, .del-btn{\\r\\n    margin-top: 5px;\\r\\n    background-color: #2f2a2d;\\r\\n    padding: 5px 15px;\\r\\n    border: 1px solid transparent;\\r\\n    color: #fafafa;\\r\\n    border-radius: 5px;\\r\\n    transition: all ease-in-out .4s;\\r\\n    cursor: pointer;\\r\\n}\\r\\n.buy-btn:hover, .del-btn:hover{\\r\\n    background-color: #fafafa;\\r\\n    color: #2f2a2d;\\r\\n    border: 1px solid #2f2a2d;\\r\\n}\\r\\n.cart-item {\\r\\n    display: flex;\\r\\n    justify-content: space-between;\\r\\n}\\r\\n.cart-item:not(:last-child){\\r\\n    margin-bottom: 20px;\\r\\n}\\r\\n.product-bio{\\r\\n    display: flex;\\r\\n}\\r\\n.cart-item img{\\r\\n    align-self: flex-start;\\r\\n    margin-right: 15px;\\r\\n}\\r\\n.product-single-price{\\r\\n    color: #474747;\\r\\n    font-size: 0.5em;\\r\\n}\\r\\n.product-price{\\r\\n    margin-left: 30px;\\r\\n}\\r\\n.product-desc{\\r\\n    max-width: 150px;\\r\\n}\\r\\n.product-quantity {\\r\\n    margin-top: 15px;\\r\\n    font-size: 0.75em;\\r\\n}\\r\\n.right-block{\\r\\n    text-align: right;\\r\\n}\\r\\n.btn-search {\\r\\n    background-color: transparent;\\r\\n    border: none;\\r\\n    color: #fafafa;\\r\\n    font-size: 1.2em;\\r\\n    position: absolute;\\r\\n    bottom: 5px;\\r\\n    right: 0;\\r\\n}\\r\\n.search-form{\\r\\n    position: relative;\\r\\n    margin-right: 50px;\\r\\n    display: inline-block;\\r\\n}\\r\\n.search-field:focus{\\r\\n    outline: none;\\r\\n}\\r\\n.search-field {\\r\\n    box-sizing: border-box;\\r\\n    width: 200px;\\r\\n    color: #fafafa;\\r\\n    padding: 10px;\\r\\n    background-color: transparent;\\r\\n    border: none;\\r\\n    border-bottom: 2px solid #fafafa;\\r\\n}\\r\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/public/css/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _public_css_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public/css/styles.css */ \"./src/public/css/styles.css\");\n/* harmony import */ var _public_css_styles_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_public_css_styles_css__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\n//заглушки (имитация базы данных)\r\nconst image = 'https://placehold.it/200x150';\r\nconst cartImage = 'https://placehold.it/100x80';\r\nconst items = ['Notebook', 'Display', 'Keyboard', 'Mouse', 'Phones', 'Router', 'USB-camera', 'Gamepad'];\r\nconst prices = [1000, 200, 20, 10, 25, 30, 18, 24];\r\nconst ids = [1, 2, 3, 4, 5, 6, 7, 8];\r\n\r\n//глобальные сущности корзины и каталога (ИМИТАЦИЯ! НЕЛЬЗЯ ТАК ДЕЛАТЬ!)\r\nvar userCart = [];\r\n\r\n\r\nclass Render{\r\n    constructor(){\r\n        this._createEventListeners();\r\n    }\r\n    // подтягивает обьекты в зону видимости\r\n    init(products, renderCart){\r\n        this.products = products;\r\n        this.renderCart = renderCart;\r\n    }\r\n    //рендер списка товаров (каталога)\r\n    renderProducts () {\r\n        let str = ''\r\n        for (let item of this.products.arr) {\r\n            str += this.products.createTemplate(item);\r\n        }\r\n        document.querySelector('.products').innerHTML = str;\r\n    }\r\n    // создает слушатели событий\r\n    _createEventListeners(){\r\n        //кнопка скрытия и показа корзины\r\n        document.querySelector('.btn-cart').addEventListener('click', () => {\r\n            document.querySelector('.cart-block').classList.toggle('invisible');\r\n        });\r\n        //кнопки удаления товара (добавляется один раз)\r\n        document.querySelector('.cart-block').addEventListener ('click', (evt) => {\r\n            if (evt.target.classList.contains ('del-btn')) {\r\n                this.renderCart.removeProduct (evt.target);\r\n            }\r\n        })\r\n        //кнопки покупки товара (добавляется один раз)\r\n        document.querySelector('.products').addEventListener ('click', (evt) => {\r\n            if (evt.target.classList.contains ('buy-btn')) {\r\n                this.renderCart.addProduct (evt.target);\r\n    }\r\n})\r\n    }\r\n}\r\n\r\n\r\nclass RenderCart{\r\n    constructor(){\r\n\r\n    }\r\n    // Добавление продуктов в корзину\r\n    addProduct (product) {\r\n        let productId = +product.dataset['id']; //data-id=\"1\"\r\n        let find = userCart.find (element => element.id === productId); //товар или false\r\n        if (!find) {\r\n            userCart.push ({\r\n                name: product.dataset ['name'],\r\n                id: productId,\r\n                img: cartImage,\r\n                price: +product.dataset['price'],\r\n                quantity: 1\r\n            })\r\n        }  else {\r\n            find.quantity++\r\n        }\r\n        this.renderCart ()\r\n    }\r\n    //удаление товаров\r\n    removeProduct (product) {\r\n        let productId = +product.dataset['id'];\r\n        let find = userCart.find (element => element.id === productId);\r\n        if (find.quantity > 1) {\r\n            find.quantity--;\r\n        } else {\r\n            userCart.splice(userCart.indexOf(find), 1);\r\n            document.querySelector(`.cart-item[data-id=\"${productId}\"]`).remove()\r\n        }\r\n        this.renderCart ();\r\n    }\r\n    //перерендер корзины\r\n    renderCart () {\r\n        let allProducts = '';\r\n        let sumProducts = 0;\r\n        for (let el of userCart) {\r\n            allProducts += `<div class=\"cart-item\" data-id=\"${el.id}\">\r\n                                <div class=\"product-bio\">\r\n                                    <img src=\"${el.img}\" alt=\"Some image\">\r\n                                    <div class=\"product-desc\">\r\n                                        <p class=\"product-title\">${el.name}</p>\r\n                                        <p class=\"product-quantity\">Quantity: ${el.quantity}</p>\r\n                                        <p class=\"product-single-price\">$${el.price} each</p>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"right-block\">\r\n                                    <p class=\"product-price\">${el.quantity * el.price}</p>\r\n                                    <button class=\"del-btn\" data-id=\"${el.id}\">&times;</button>\r\n                                </div>\r\n                            </div>`\r\n            sumProducts += (el.quantity * el.price);\r\n        }\r\n    \r\n        document.querySelector(`.cart-block`).innerHTML = allProducts;\r\n        let test = `<p>сумма корзины: ${sumProducts}</p>`;\r\n        document.querySelector(`.cart-block`).insertAdjacentHTML('beforeend', test);\r\n        \r\n    }\r\n}\r\n\r\n\r\nclass Products {\r\n    constructor(){\r\n        \r\n    }\r\n    //создание товара\r\n    createProduct (i) {\r\n        return {\r\n            id: ids[i],\r\n            name: items[i],\r\n            price: prices[i],\r\n            img: image,\r\n            quantity: 0,\r\n        }\r\n    }\r\n\r\n    createTemplate(item) {\r\n        return `<div class=\"product-item\" data-id=\"${this.id}\">\r\n                    <img src=\"${item.img}\" alt=\"Some img\">\r\n                    <div class=\"desc\">\r\n                        <h3>${item.name}</h3>\r\n                        <p>${item.price} $</p>\r\n                        <button class=\"buy-btn\" \r\n                        data-id=\"${item.id}\"\r\n                        data-name=\"${item.name}\"\r\n                        data-image=\"${item.img}\"\r\n                        data-price=\"${item.price}\">Купить</button>\r\n                    </div>\r\n                </div>`\r\n    }\r\n    //создание массива объектов - имитация загрузки данных с сервера\r\n    fetchData () {\r\n        this.arr = [];\r\n        for (let i = 0; i < items.length; i++) {\r\n             this.arr.push (this.createProduct (i));\r\n        }\r\n        console.log(this.arr);\r\n    }\r\n}\r\n\r\naddEventListener('load', function(event) {\r\n    let products = new Products();\r\n    let render = new Render();\r\n    let renderCart = new RenderCart();\r\n    render.init(products, renderCart);\r\n    products.fetchData();\r\n    render.renderProducts();\r\n});\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/public/css/styles.css":
/*!***********************************!*\
  !*** ./src/public/css/styles.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/public/css/styles.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/public/css/styles.css?");

/***/ })

/******/ });