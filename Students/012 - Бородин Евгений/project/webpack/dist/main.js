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

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _public_style_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public/style/style.css */ \"./src/public/style/style.css\");\n/* harmony import */ var _public_style_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_public_style_style_css__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/public/style/style.css":
/*!************************************!*\
  !*** ./src/public/style/style.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"body{\\r\\n    font-family: 'SF Pro Display', sans-serif;\\r\\n}\\r\\nheader{\\r\\n    display: flex;\\r\\n    background-color: #2f2a2d;\\r\\n    justify-content: space-between;\\r\\n    color: #fafafa;\\r\\n    padding: 30px 80px;\\r\\n}\\r\\nbutton:focus{\\r\\n    outline: none;\\r\\n}\\r\\n.logo{\\r\\n\\r\\n    text-transform: uppercase;\\r\\n    font-weight: bold;\\r\\n}\\r\\n.btn-cart{\\r\\n    background-color: #fafafa;\\r\\n    padding: 10px 20px;\\r\\n    border: 1px solid transparent;\\r\\n    color: #2f2a2d;\\r\\n    border-radius: 5px;\\r\\n    transition: all ease-in-out .4s;\\r\\n    cursor: pointer;\\r\\n}\\r\\n.btn-cart:hover{\\r\\n    background-color: transparent;\\r\\n    border-color: #fafafa;\\r\\n    color: #fafafa;\\r\\n}\\r\\n.btn-cart, .logo{\\r\\n    align-self: center;\\r\\n}\\r\\n/*.products {*/\\r\\n/*display: flex;*/\\r\\n/*justify-content: space-between;*/\\r\\n/*flex-wrap: wrap;*/\\r\\n/*padding: 40px 80px;*/\\r\\n/*}*/\\r\\n.products{\\r\\n    column-gap: 30px;\\r\\n    display: grid;\\r\\n    grid-template-columns: repeat(auto-fit, 200px);\\r\\n    grid-template-rows: 1fr;\\r\\n    padding: 40px 80px;\\r\\n    justify-content: space-between;\\r\\n}\\r\\np {\\r\\n    margin: 0 0 5px 0;\\r\\n}\\r\\n.product-item{\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    width: 200px;\\r\\n    border-radius: 5px;\\r\\n    overflow: hidden;\\r\\n    margin: 20px 0;\\r\\n}\\r\\nimg {\\r\\n    max-width: 100%;\\r\\n    height: auto\\r\\n}\\r\\n.desc {\\r\\n    border: 1px solid #c0c0c040;\\r\\n    padding: 15px\\r\\n}\\r\\n.cart{\\r\\n    position: relative;\\r\\n}\\r\\n.cart-block{\\r\\n    box-shadow: 0 0 5px rgba(0, 0, 0, 0.62);\\r\\n    border-radius: 5px;\\r\\n    box-sizing: border-box;\\r\\n    right: 0;\\r\\n    top: 130%;\\r\\n    position: absolute;\\r\\n    background-color: white;\\r\\n    padding: 20px;\\r\\n    color: black;\\r\\n    width: 300px;\\r\\n}\\r\\n\\r\\n.invisible{\\r\\n    display: none;\\r\\n}\\r\\n.cart-block:before{\\r\\n    content: '';\\r\\n    width: 0;\\r\\n    height: 0;\\r\\n    position: absolute;\\r\\n    top: -10px;\\r\\n    right: 35px;\\r\\n    border-left: 10px solid transparent;\\r\\n    border-right: 10px solid transparent;\\r\\n    border-bottom: 10px solid white;\\r\\n}\\r\\n\\r\\n.buy-btn, .del-btn{\\r\\n    margin-top: 5px;\\r\\n    background-color: #2f2a2d;\\r\\n    padding: 5px 15px;\\r\\n    border: 1px solid transparent;\\r\\n    color: #fafafa;\\r\\n    border-radius: 5px;\\r\\n    transition: all ease-in-out .4s;\\r\\n    cursor: pointer;\\r\\n}\\r\\n.buy-btn:hover, .del-btn:hover{\\r\\n    background-color: #fafafa;\\r\\n    color: #2f2a2d;\\r\\n    border: 1px solid #2f2a2d;\\r\\n}\\r\\n.cart-item {\\r\\n    display: flex;\\r\\n    justify-content: space-between;\\r\\n}\\r\\n.cart-item:not(:last-child){\\r\\n    margin-bottom: 20px;\\r\\n}\\r\\n.product-bio{\\r\\n    display: flex;\\r\\n}\\r\\n.cart-item img{\\r\\n    align-self: flex-start;\\r\\n    margin-right: 15px;\\r\\n}\\r\\n.product-single-price{\\r\\n    color: #474747;\\r\\n    font-size: 0.5em;\\r\\n}\\r\\n.product-price{\\r\\n    margin-left: 30px;\\r\\n}\\r\\n.product-desc{\\r\\n    max-width: 150px;\\r\\n}\\r\\n.product-quantity {\\r\\n    margin-top: 15px;\\r\\n    font-size: 0.75em;\\r\\n}\\r\\n.right-block{\\r\\n    text-align: right;\\r\\n}\\r\\n.btn-search {\\r\\n    background-color: transparent;\\r\\n    border: none;\\r\\n    color: #fafafa;\\r\\n    font-size: 1.2em;\\r\\n    position: absolute;\\r\\n    bottom: 5px;\\r\\n    right: 0;\\r\\n}\\r\\n.search-form{\\r\\n    position: relative;\\r\\n    margin-right: 50px;\\r\\n    display: inline-block;\\r\\n}\\r\\n.search-field:focus{\\r\\n    outline: none;\\r\\n}\\r\\n.search-field {\\r\\n    box-sizing: border-box;\\r\\n    width: 200px;\\r\\n    color: #fafafa;\\r\\n    padding: 10px;\\r\\n    background-color: transparent;\\r\\n    border: none;\\r\\n    border-bottom: 2px solid #fafafa;\\r\\n}\\r\\n\\r\\n.d-flex {\\r\\n    display: flex;\\r\\n    flex-direction: row;\\r\\n    justify-content: space-between;\\r\\n}\\r\\n\\r\\n.d-block {\\r\\n    display: block\\r\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/public/style/style.css?");

/***/ })

/******/ });