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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/public/css/normalize.css":
/*!****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/public/css/normalize.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\\r\\n\\r\\n/* Document\\r\\n   ========================================================================== */\\r\\n\\r\\n/**\\r\\n * 1. Correct the line height in all browsers.\\r\\n * 2. Prevent adjustments of font size after orientation changes in iOS.\\r\\n */\\r\\n\\r\\nhtml {\\r\\n  line-height: 1.15; /* 1 */\\r\\n  -webkit-text-size-adjust: 100%; /* 2 */\\r\\n}\\r\\n\\r\\n/* Sections\\r\\n   ========================================================================== */\\r\\n\\r\\n/**\\r\\n * Remove the margin in all browsers.\\r\\n */\\r\\n\\r\\nbody {\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\n/**\\r\\n * Render the `main` element consistently in IE.\\r\\n */\\r\\n\\r\\nmain {\\r\\n  display: block;\\r\\n}\\r\\n\\r\\n/**\\r\\n * Correct the font size and margin on `h1` elements within `section` and\\r\\n * `article` contexts in Chrome, Firefox, and Safari.\\r\\n */\\r\\n\\r\\nh1 {\\r\\n  font-size: 2em;\\r\\n  margin: 0.67em 0;\\r\\n}\\r\\n\\r\\n/* Grouping content\\r\\n   ========================================================================== */\\r\\n\\r\\n/**\\r\\n * 1. Add the correct box sizing in Firefox.\\r\\n * 2. Show the overflow in Edge and IE.\\r\\n */\\r\\n\\r\\nhr {\\r\\n  box-sizing: content-box; /* 1 */\\r\\n  height: 0; /* 1 */\\r\\n  overflow: visible; /* 2 */\\r\\n}\\r\\n\\r\\n/**\\r\\n * 1. Correct the inheritance and scaling of font size in all browsers.\\r\\n * 2. Correct the odd `em` font sizing in all browsers.\\r\\n */\\r\\n\\r\\npre {\\r\\n  font-family: monospace, monospace; /* 1 */\\r\\n  font-size: 1em; /* 2 */\\r\\n}\\r\\n\\r\\n/* Text-level semantics\\r\\n   ========================================================================== */\\r\\n\\r\\n/**\\r\\n * Remove the gray background on active links in IE 10.\\r\\n */\\r\\n\\r\\na {\\r\\n  background-color: transparent;\\r\\n}\\r\\n\\r\\n/**\\r\\n * 1. Remove the bottom border in Chrome 57-\\r\\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\\r\\n */\\r\\n\\r\\nabbr[title] {\\r\\n  border-bottom: none; /* 1 */\\r\\n  text-decoration: underline; /* 2 */\\r\\n  text-decoration: underline dotted; /* 2 */\\r\\n}\\r\\n\\r\\n/**\\r\\n * Add the correct font weight in Chrome, Edge, and Safari.\\r\\n */\\r\\n\\r\\nb,\\r\\nstrong {\\r\\n  font-weight: bolder;\\r\\n}\\r\\n\\r\\n/**\\r\\n * 1. Correct the inheritance and scaling of font size in all browsers.\\r\\n * 2. Correct the odd `em` font sizing in all browsers.\\r\\n */\\r\\n\\r\\ncode,\\r\\nkbd,\\r\\nsamp {\\r\\n  font-family: monospace, monospace; /* 1 */\\r\\n  font-size: 1em; /* 2 */\\r\\n}\\r\\n\\r\\n/**\\r\\n * Add the correct font size in all browsers.\\r\\n */\\r\\n\\r\\nsmall {\\r\\n  font-size: 80%;\\r\\n}\\r\\n\\r\\n/**\\r\\n * Prevent `sub` and `sup` elements from affecting the line height in\\r\\n * all browsers.\\r\\n */\\r\\n\\r\\nsub,\\r\\nsup {\\r\\n  font-size: 75%;\\r\\n  line-height: 0;\\r\\n  position: relative;\\r\\n  vertical-align: baseline;\\r\\n}\\r\\n\\r\\nsub {\\r\\n  bottom: -0.25em;\\r\\n}\\r\\n\\r\\nsup {\\r\\n  top: -0.5em;\\r\\n}\\r\\n\\r\\n/* Embedded content\\r\\n   ========================================================================== */\\r\\n\\r\\n/**\\r\\n * Remove the border on images inside links in IE 10.\\r\\n */\\r\\n\\r\\nimg {\\r\\n  border-style: none;\\r\\n}\\r\\n\\r\\n/* Forms\\r\\n   ========================================================================== */\\r\\n\\r\\n/**\\r\\n * 1. Change the font styles in all browsers.\\r\\n * 2. Remove the margin in Firefox and Safari.\\r\\n */\\r\\n\\r\\nbutton,\\r\\ninput,\\r\\noptgroup,\\r\\nselect,\\r\\ntextarea {\\r\\n  font-family: inherit; /* 1 */\\r\\n  font-size: 100%; /* 1 */\\r\\n  line-height: 1.15; /* 1 */\\r\\n  margin: 0; /* 2 */\\r\\n}\\r\\n\\r\\n/**\\r\\n * Show the overflow in IE.\\r\\n * 1. Show the overflow in Edge.\\r\\n */\\r\\n\\r\\nbutton,\\r\\ninput { /* 1 */\\r\\n  overflow: visible;\\r\\n}\\r\\n\\r\\n/**\\r\\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\\r\\n * 1. Remove the inheritance of text transform in Firefox.\\r\\n */\\r\\n\\r\\nbutton,\\r\\nselect { /* 1 */\\r\\n  text-transform: none;\\r\\n}\\r\\n\\r\\n/**\\r\\n * Correct the inability to style clickable types in iOS and Safari.\\r\\n */\\r\\n\\r\\nbutton,\\r\\n[type=\\\"button\\\"],\\r\\n[type=\\\"reset\\\"],\\r\\n[type=\\\"submit\\\"] {\\r\\n  -webkit-appearance: button;\\r\\n}\\r\\n\\r\\n/**\\r\\n * Remove the inner border and padding in Firefox.\\r\\n */\\r\\n\\r\\nbutton::-moz-focus-inner,\\r\\n[type=\\\"button\\\"]::-moz-focus-inner,\\r\\n[type=\\\"reset\\\"]::-moz-focus-inner,\\r\\n[type=\\\"submit\\\"]::-moz-focus-inner {\\r\\n  border-style: none;\\r\\n  padding: 0;\\r\\n}\\r\\n\\r\\n/**\\r\\n * Restore the focus styles unset by the previous rule.\\r\\n */\\r\\n\\r\\nbutton:-moz-focusring,\\r\\n[type=\\\"button\\\"]:-moz-focusring,\\r\\n[type=\\\"reset\\\"]:-moz-focusring,\\r\\n[type=\\\"submit\\\"]:-moz-focusring {\\r\\n  outline: 1px dotted ButtonText;\\r\\n}\\r\\n\\r\\n/**\\r\\n * Correct the padding in Firefox.\\r\\n */\\r\\n\\r\\nfieldset {\\r\\n  padding: 0.35em 0.75em 0.625em;\\r\\n}\\r\\n\\r\\n/**\\r\\n * 1. Correct the text wrapping in Edge and IE.\\r\\n * 2. Correct the color inheritance from `fieldset` elements in IE.\\r\\n * 3. Remove the padding so developers are not caught out when they zero out\\r\\n *    `fieldset` elements in all browsers.\\r\\n */\\r\\n\\r\\nlegend {\\r\\n  box-sizing: border-box; /* 1 */\\r\\n  color: inherit; /* 2 */\\r\\n  display: table; /* 1 */\\r\\n  max-width: 100%; /* 1 */\\r\\n  padding: 0; /* 3 */\\r\\n  white-space: normal; /* 1 */\\r\\n}\\r\\n\\r\\n/**\\r\\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\\r\\n */\\r\\n\\r\\nprogress {\\r\\n  vertical-align: baseline;\\r\\n}\\r\\n\\r\\n/**\\r\\n * Remove the default vertical scrollbar in IE 10+.\\r\\n */\\r\\n\\r\\ntextarea {\\r\\n  overflow: auto;\\r\\n}\\r\\n\\r\\n/**\\r\\n * 1. Add the correct box sizing in IE 10.\\r\\n * 2. Remove the padding in IE 10.\\r\\n */\\r\\n\\r\\n[type=\\\"checkbox\\\"],\\r\\n[type=\\\"radio\\\"] {\\r\\n  box-sizing: border-box; /* 1 */\\r\\n  padding: 0; /* 2 */\\r\\n}\\r\\n\\r\\n/**\\r\\n * Correct the cursor style of increment and decrement buttons in Chrome.\\r\\n */\\r\\n\\r\\n[type=\\\"number\\\"]::-webkit-inner-spin-button,\\r\\n[type=\\\"number\\\"]::-webkit-outer-spin-button {\\r\\n  height: auto;\\r\\n}\\r\\n\\r\\n/**\\r\\n * 1. Correct the odd appearance in Chrome and Safari.\\r\\n * 2. Correct the outline style in Safari.\\r\\n */\\r\\n\\r\\n[type=\\\"search\\\"] {\\r\\n  -webkit-appearance: textfield; /* 1 */\\r\\n  outline-offset: -2px; /* 2 */\\r\\n}\\r\\n\\r\\n/**\\r\\n * Remove the inner padding in Chrome and Safari on macOS.\\r\\n */\\r\\n\\r\\n[type=\\\"search\\\"]::-webkit-search-decoration {\\r\\n  -webkit-appearance: none;\\r\\n}\\r\\n\\r\\n/**\\r\\n * 1. Correct the inability to style clickable types in iOS and Safari.\\r\\n * 2. Change font properties to `inherit` in Safari.\\r\\n */\\r\\n\\r\\n::-webkit-file-upload-button {\\r\\n  -webkit-appearance: button; /* 1 */\\r\\n  font: inherit; /* 2 */\\r\\n}\\r\\n\\r\\n/* Interactive\\r\\n   ========================================================================== */\\r\\n\\r\\n/*\\r\\n * Add the correct display in Edge, IE 10+, and Firefox.\\r\\n */\\r\\n\\r\\ndetails {\\r\\n  display: block;\\r\\n}\\r\\n\\r\\n/*\\r\\n * Add the correct display in all browsers.\\r\\n */\\r\\n\\r\\nsummary {\\r\\n  display: list-item;\\r\\n}\\r\\n\\r\\n/* Misc\\r\\n   ========================================================================== */\\r\\n\\r\\n/**\\r\\n * Add the correct display in IE 10+.\\r\\n */\\r\\n\\r\\ntemplate {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n/**\\r\\n * Add the correct display in IE 10.\\r\\n */\\r\\n\\r\\n[hidden] {\\r\\n  display: none;\\r\\n}\\r\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/public/css/normalize.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/public/css/style.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/public/css/style.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"body{\\r\\n    font-family: 'SF Pro Display', sans-serif;\\r\\n}\\r\\nheader{\\r\\n    display: flex;\\r\\n    background-color: #2f2a2d;\\r\\n    justify-content: space-between;\\r\\n    color: #fafafa;\\r\\n    padding: 30px 80px;\\r\\n}\\r\\nbutton:focus{\\r\\n    outline: none;\\r\\n}\\r\\n.logo{\\r\\n\\r\\n    text-transform: uppercase;\\r\\n    font-weight: bold;\\r\\n}\\r\\n.btn-cart{\\r\\n    background-color: #fafafa;\\r\\n    padding: 10px 20px;\\r\\n    border: 1px solid transparent;\\r\\n    color: #2f2a2d;\\r\\n    border-radius: 5px;\\r\\n    transition: all ease-in-out .4s;\\r\\n    cursor: pointer;\\r\\n}\\r\\n.btn-cart:hover{\\r\\n    background-color: transparent;\\r\\n    border-color: #fafafa;\\r\\n    color: #fafafa;\\r\\n}\\r\\n.btn-cart, .logo{\\r\\n    align-self: center;\\r\\n}\\r\\n/*.products {*/\\r\\n/*display: flex;*/\\r\\n/*justify-content: space-between;*/\\r\\n/*flex-wrap: wrap;*/\\r\\n/*padding: 40px 80px;*/\\r\\n/*}*/\\r\\n.products{\\r\\n    column-gap: 30px;\\r\\n    display: grid;\\r\\n    grid-template-columns: repeat(auto-fit, 200px);\\r\\n    grid-template-rows: 1fr;\\r\\n    padding: 40px 80px;\\r\\n    justify-content: space-between;\\r\\n}\\r\\np {\\r\\n    margin: 0 0 5px 0;\\r\\n}\\r\\n.product-item{\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    width: 200px;\\r\\n    border-radius: 5px;\\r\\n    overflow: hidden;\\r\\n    margin: 20px 0;\\r\\n}\\r\\nimg {\\r\\n    max-width: 100%;\\r\\n    height: auto\\r\\n}\\r\\n.desc {\\r\\n    border: 1px solid #c0c0c040;\\r\\n    padding: 15px\\r\\n}\\r\\n.cart{\\r\\n    position: relative;\\r\\n}\\r\\n.cart-block{\\r\\n    box-shadow: 0 0 5px rgba(0, 0, 0, 0.62);\\r\\n    border-radius: 5px;\\r\\n    box-sizing: border-box;\\r\\n    right: 0;\\r\\n    top: 130%;\\r\\n    position: absolute;\\r\\n    background-color: white;\\r\\n    padding: 20px;\\r\\n    color: black;\\r\\n    width: 300px;\\r\\n}\\r\\n\\r\\n.invisible{\\r\\n    display: none;\\r\\n}\\r\\n.cart-block:before{\\r\\n    content: '';\\r\\n    width: 0;\\r\\n    height: 0;\\r\\n    position: absolute;\\r\\n    top: -10px;\\r\\n    right: 35px;\\r\\n    border-left: 10px solid transparent;\\r\\n    border-right: 10px solid transparent;\\r\\n    border-bottom: 10px solid white;\\r\\n}\\r\\n\\r\\n.buy-btn, .del-btn{\\r\\n    margin-top: 5px;\\r\\n    background-color: #2f2a2d;\\r\\n    padding: 5px 15px;\\r\\n    border: 1px solid transparent;\\r\\n    color: #fafafa;\\r\\n    border-radius: 5px;\\r\\n    transition: all ease-in-out .4s;\\r\\n    cursor: pointer;\\r\\n}\\r\\n.buy-btn:hover, .del-btn:hover{\\r\\n    background-color: #fafafa;\\r\\n    color: #2f2a2d;\\r\\n    border: 1px solid #2f2a2d;\\r\\n}\\r\\n.cart-item {\\r\\n    display: flex;\\r\\n    justify-content: space-between;\\r\\n}\\r\\n.cart-item:not(:last-child){\\r\\n    margin-bottom: 20px;\\r\\n}\\r\\n.product-bio{\\r\\n    display: flex;\\r\\n}\\r\\n.cart-item img{\\r\\n    align-self: flex-start;\\r\\n    margin-right: 15px;\\r\\n}\\r\\n.product-single-price{\\r\\n    color: #474747;\\r\\n    font-size: 0.5em;\\r\\n}\\r\\n.product-price{\\r\\n    margin-left: 30px;\\r\\n}\\r\\n.product-desc{\\r\\n    max-width: 150px;\\r\\n}\\r\\n.product-quantity {\\r\\n    margin-top: 15px;\\r\\n    font-size: 0.75em;\\r\\n}\\r\\n.right-block{\\r\\n    text-align: right;\\r\\n}\\r\\n.btn-search {\\r\\n    background-color: transparent;\\r\\n    border: none;\\r\\n    color: #fafafa;\\r\\n    font-size: 1.2em;\\r\\n    position: absolute;\\r\\n    bottom: 5px;\\r\\n    right: 0;\\r\\n}\\r\\n.search-form{\\r\\n    position: relative;\\r\\n    margin-right: 50px;\\r\\n    display: inline-block;\\r\\n}\\r\\n.search-field:focus{\\r\\n    outline: none;\\r\\n}\\r\\n.search-field {\\r\\n    box-sizing: border-box;\\r\\n    width: 200px;\\r\\n    color: #fafafa;\\r\\n    padding: 10px;\\r\\n    background-color: transparent;\\r\\n    border: none;\\r\\n    border-bottom: 2px solid #fafafa;\\r\\n}\\r\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/public/css/style.css?./node_modules/css-loader/dist/cjs.js");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _public_css_normalize_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public/css/normalize.css */ \"./src/public/css/normalize.css\");\n/* harmony import */ var _public_css_normalize_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_public_css_normalize_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _public_css_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./public/css/style.css */ \"./src/public/css/style.css\");\n/* harmony import */ var _public_css_style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_css_style_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _public_js_Cart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./public/js/Cart.js */ \"./src/public/js/Cart.js\");\n/* harmony import */ var _public_js_Catalog_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./public/js/Catalog.js */ \"./src/public/js/Catalog.js\");\n\r\n\r\n\r\n\r\n\r\nlet cart = new _public_js_Cart_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\r\nlet catalog = new _public_js_Catalog_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](cart);\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/public/css/normalize.css":
/*!**************************************!*\
  !*** ./src/public/css/normalize.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./normalize.css */ \"./node_modules/css-loader/dist/cjs.js!./src/public/css/normalize.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/public/css/normalize.css?");

/***/ }),

/***/ "./src/public/css/style.css":
/*!**********************************!*\
  !*** ./src/public/css/style.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/public/css/style.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/public/css/style.css?");

/***/ }),

/***/ "./src/public/js/Cart.js":
/*!*******************************!*\
  !*** ./src/public/js/Cart.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Cart; });\nclass Cart {\r\n    constructor() {\r\n        this.items = [];\r\n        this.total = 0;\r\n        this.sum = 0;\r\n        this.container = '.cart-block';\r\n        this.quantityBlock = document.querySelector('#quantity');\r\n        this.priceBlock = document.querySelector('#price');\r\n        this._init()\r\n    };\r\n\r\n    _init() {\r\n        this._handleEvents()\r\n    };\r\n\r\n    _handleEvents() {\r\n        document.querySelector(this.container).addEventListener('click', (evt) => {\r\n            if (evt.target.name === 'del-btn') {\r\n                this.deleteProduct(evt.target)\r\n            }\r\n        })\r\n    };\r\n\r\n    addProduct(product) {\r\n        let id = product.dataset['id'];\r\n        let find = this.items.find(product => product.id_product === id);\r\n        if (find) {\r\n            find.quantity++\r\n        } else {\r\n            let prod = this._createNewProduct(product);\r\n            this.items.push(prod)\r\n        }\r\n        this._checkTotalAndSum();\r\n        this.render()\r\n    };\r\n\r\n    _createNewProduct(prod) {\r\n        return {\r\n            product_name: prod.dataset['name'],\r\n            price: prod.dataset['price'],\r\n            id_product: prod.dataset['id'],\r\n            quantity: 1\r\n        }\r\n    };\r\n\r\n    deleteProduct(product) {\r\n        let id = product.dataset['id'];\r\n        let find = this.items.find(product => product.id_product === id);\r\n        if (find.quantity > 1) {\r\n            find.quantity--\r\n        } else {\r\n            this.items.splice(this.items.indexOf(find), 1)\r\n        }\r\n\r\n        this._checkTotalAndSum();\r\n        this.render();\r\n    };\r\n\r\n    _checkTotalAndSum() {\r\n        let qua = 0;\r\n        let pr = 0;\r\n        this.items.forEach(item => {\r\n            qua += item.quantity;\r\n            pr += item.price * item.quantity\r\n        });\r\n        this.total = qua;\r\n        this.sum = pr;\r\n    };\r\n\r\n    render() {\r\n        let itemsBlock = document.querySelector(this.container).querySelector('.cart-items');\r\n        let str = '';\r\n        this.items.forEach(item => {\r\n            str += `<div class=\"cart-item\" data-id=\"${item.id_product}\">\r\n                    <img src=\"https://placehold.it/100x80\" alt=\"\">\r\n                    <div class=\"product-desc\">\r\n                        <p class=\"product-title\">${item.product_name}</p>\r\n                        <p class=\"product-quantity\">${item.quantity}</p>\r\n                        <p class=\"product-single-price\">${item.price}</p>\r\n                    </div>\r\n                    <div class=\"right-block\">\r\n                        <button name=\"del-btn\" class=\"del-btn\" data-id=\"${item.id_product}\">&times;</button>\r\n                    </div>\r\n                </div>`\r\n        });\r\n        itemsBlock.innerHTML = str;\r\n        this.quantityBlock.innerText = this.total;\r\n        this.priceBlock.innerText = this.sum;\r\n    };\r\n\r\n}\n\n//# sourceURL=webpack:///./src/public/js/Cart.js?");

/***/ }),

/***/ "./src/public/js/Catalog.js":
/*!**********************************!*\
  !*** ./src/public/js/Catalog.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Catalog; });\nconst PRODUCTS_NAMES = ['Processor', 'Display', 'Notebook', 'Mouse', 'Keyboard'];\r\nconst PRICES = [100, 120, 1000, 15, 18];\r\nconst IDS = [0, 1, 2, 3, 4];\r\nconst IMGS = ['https://cs8.pikabu.ru/post_img/big/2017/12/25/5/1514188160141511997.jpg',\r\n    'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/HMUB2?wid=1144&hei=1144&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1563827752399',\r\n    'https://zeon18.ru/files/item/Xiaomi-Mi-Notebook-Air-4G-Officially-Announced-Weboo-co-2%20(1)_1.jpg',\r\n    'https://files.sandberg.it/products/images/lg/640-05_lg.jpg',\r\n    'https://images-na.ssl-images-amazon.com/images/I/81PLqxtrJ3L._SX466_.jpg'];\r\n\r\nclass Catalog {\r\n    constructor(cart) {\r\n        this.items = [];\r\n        this.container = '.products';\r\n        this.cart = cart;\r\n        this._init();\r\n    };\r\n\r\n    _init() {\r\n        this._handleData ();\r\n        this.render ();\r\n        this._handleEvents ();\r\n    };\r\n\r\n    _handleEvents () {\r\n        document.querySelector (this.container).addEventListener ('click', (evt) => {\r\n            if (evt.target.name === 'buy-btn') {\r\n                this.cart.addProduct (evt.target);\r\n            }\r\n        });\r\n    };\r\n\r\n    _handleData() {\r\n        for (let i = 0; i < IDS.length; i++) {\r\n            this.items.push(this._createNewProduct(i));\r\n        }\r\n    };\r\n\r\n    _createNewProduct (index) {\r\n        return {\r\n            product_name: PRODUCTS_NAMES [index],\r\n            price: PRICES [index],\r\n            id_product: IDS [index],\r\n            img: IMGS [index]\r\n        }\r\n    };\r\n\r\n    render() {\r\n        let str = '';\r\n        this.items.forEach (item => {\r\n            str += `\r\n                <div class=\"product-item\">\r\n                    <img src=\"https://placehold.it/300x200\" alt=\"${item.product_name}\">\r\n                    <!--img src=\"${item.img}\" width=\"300\" height=\"200\" alt=\"${item.product_name}\"-->\r\n                    <div class=\"desc\">\r\n                        <h1>${item.product_name}</h1>\r\n                        <p>${item.price}</p>\r\n                        <button \r\n                        class=\"buy-btn\" \r\n                        name=\"buy-btn\"\r\n                        data-name=\"${item.product_name}\"\r\n                        data-price=\"${item.price}\"\r\n                        data-id=\"${item.id_product}\"\r\n                        >Купить</button>\r\n                    </div>\r\n                </div>\r\n            `\r\n        });\r\n        document.querySelector(this.container).innerHTML = str;\r\n    };\r\n}\n\n//# sourceURL=webpack:///./src/public/js/Catalog.js?");

/***/ })

/******/ });