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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _public_css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public/css/style.css */ \"./src/public/css/style.css\");\n/* harmony import */ var _public_css_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_public_css_style_css__WEBPACK_IMPORTED_MODULE_0__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\nwindow.addEventListener('load', function () {\n  function makeGETRequest(url) {\n    return new Promise(function (res, rej) {\n      var xhr;\n\n      if (window.XMLHttpRequest) {\n        xhr = new XMLHttpRequest();\n      } else if (window.ActiveXObject) {\n        xhr = new ActiveXObject(\"Microsoft.XMLHTTP\");\n      }\n\n      xhr.onreadystatechange = function () {\n        if (xhr.readyState === 4) {\n          console.log(xhr.status);\n\n          if (xhr.status === 200) {\n            res(xhr.responseText);\n          } else {\n            rej('ERROR occured');\n          }\n        }\n      };\n\n      xhr.open('GET', url, true);\n      xhr.send();\n    }); //return new Promise((resolve, reject) => {\n    // if(...readyState === 4) {\n    //     if(...status === 200) {\n    //         this.goods = JSON.parse(goods);\n    //         resolve(...);\n    //     }\n    // } else {\n    //     reject(...);\n    // }\n    // })\n  }\n\n  ;\n  var API_URL = 'https://raw.githubusercontent.com/Vetl-off0098/online-store-api/master/responses';\n  var basket = []; // const goods = [\n  //     {\n  //         image: 'https://placehold.it/200x150',\n  //         cartImage: 'https://placehold.it/100x80',\n  //         item: 'Notebook',\n  //         price: 1000,\n  //         id: 1\n  //     },\n  //     {\n  //         image: 'https://placehold.it/200x150',\n  //         cartImage: 'https://placehold.it/100x80',\n  //         item: 'Display',\n  //         price: 200,\n  //         id: 2\n  //     },\n  //     {\n  //         image: 'https://placehold.it/200x150',\n  //         cartImage: 'https://placehold.it/100x80',\n  //         item: 'Keyboard',\n  //         price: 20,\n  //         id: 3\n  //     },\n  //     {\n  //         image: 'https://placehold.it/200x150',\n  //         cartImage: 'https://placehold.it/100x80',\n  //         item: 'Mouse',\n  //         price: 10,\n  //         id: 4\n  //     },\n  //     {\n  //         image: 'https://placehold.it/200x150',\n  //         cartImage: 'https://placehold.it/100x80',\n  //         item: 'Phones',\n  //         price: 25,\n  //         id: 5\n  //     },\n  //     {\n  //         image: 'https://placehold.it/200x150',\n  //         cartImage: 'https://placehold.it/100x80',\n  //         item: 'Router',\n  //         price: 30,\n  //         id: 6\n  //     },\n  //     {\n  //         image: 'https://placehold.it/200x150',\n  //         cartImage: 'https://placehold.it/100x80',\n  //         item: 'USB-camera',\n  //         price: 18,\n  //         id: 7\n  //     },\n  //     {\n  //         image: 'https://placehold.it/200x150',\n  //         cartImage: 'https://placehold.it/100x80',\n  //         item: 'Gamepad',\n  //         price: 24,\n  //         id: 8\n  //     },\n  // ];\n\n  var GoodsItem =\n  /*#__PURE__*/\n  function () {\n    // constructor(array) {\n    //     this.products = array;\n    //     this.container = null;\n    //     this._init();\n    // }\n    function GoodsItem(id, name, price, img) {\n      _classCallCheck(this, GoodsItem);\n\n      this.id_product = id;\n      this.product_name = name;\n      this.price = price;\n      this.image = img;\n    }\n\n    _createClass(GoodsItem, [{\n      key: \"render\",\n      value: function render() {\n        return \"<div class=\\\"product-item\\\" data-id=\\\"\".concat(this.id_product, \"\\\">\\n                        <div class=\\\"desc\\\">\\n                            <img src = \\\"\").concat(this.image, \"\\\">\\n                            <h3>\").concat(this.product_name, \"</h3>\\n                            <p>\").concat(this.price, \" $</p>\\n                            <button class=\\\"buy-btn\\\" \\n                            data-id=\\\"\").concat(this.id_product, \"\\\" \\n                            data-name=\\\"\").concat(this.product_name, \"\\\"\\n                            data-img=\\\"\").concat(this.image, \"\\\"  \\n                            data-price=\\\"\").concat(this.price, \"\\\">\\u041A\\u0443\\u043F\\u0438\\u0442\\u044C</button>\\n                        </div>\\n                    </div>\");\n      } // _init() {\n      //     this.container = document.querySelector('.goods-list');\n      //     this.render();\n      //     //Возможно, тут будет метод рендера Корзины\n      // }\n      // render() {\n      //     let str = '';\n      //     this.products.forEach(element => {\n      //         let item = this.createProduct(element);\n      //         str += item.createTemplate();\n      //     });\n      //     this.container.innerHTML = str;\n      //     this.totalSum();\n      // }\n      // totalSumHtml(total) {\n      //     return `<span>${total}<span>`\n      // }\n      // totalSumRend(total) {\n      //     let totalSum = document.querySelector('.totalSum');\n      //     totalSum.innerHTML += this.totalSumHtml(total);\n      //     // totalSum.innerHTML = total;\n      // }\n      // totalSum() {\n      //     let total = 0;\n      //     this.products.forEach(elem => {\n      //         total += elem.price;\n      //     });\n      //     this.totalSumRend(total);\n      // }\n      // createProduct(prod) {\n      //     return {\n      //         id: prod.id,\n      //         name: prod.item,\n      //         price: prod.price,\n      //         img: prod.image,\n      //         quantity: 0,\n      //         createTemplate: function() {\n      //             return `<div class=\"product-item\" data-id=\"${this.id}\">\n      //                         <img src=\"${this.img}\">\n      //                         <div class=\"desc\">\n      //                             <h3>${this.name}</h3>\n      //                             <p>${this.price} $</p>\n      //                             <button class=\"buy-btn\" \n      //                             data-id=\"${this.id}\" \n      //                             data-name=\"${this.name}\" \n      //                             data-image=\"${this.img}\" \n      //                             data-price=\"${this.price}\">Купить</button>\n      //                         </div>\n      //                     </div>`\n      //         },\n      //         add: function() {\n      //             this.quantity++;\n      //         }\n      //     }\n      // }\n\n    }]);\n\n    return GoodsItem;\n  }();\n\n  var GoodsList =\n  /*#__PURE__*/\n  function () {\n    function GoodsList() {\n      _classCallCheck(this, GoodsList);\n\n      this.goods = [];\n    }\n\n    _createClass(GoodsList, [{\n      key: \"fetchGood\",\n      value: function fetchGood() {\n        var _this = this;\n\n        // this.goods = [ \n        //     {\n        //         image: 'https://placehold.it/200x150',\n        //         cartImage: 'https://placehold.it/100x80',\n        //         item: 'Notebook',\n        //         price: 1000,\n        //         id: 1\n        //     },\n        //     {\n        //         image: 'https://placehold.it/200x150',\n        //         cartImage: 'https://placehold.it/100x80',\n        //         item: 'Display',\n        //         price: 200,\n        //         id: 2\n        //     },\n        //     {\n        //         image: 'https://placehold.it/200x150',\n        //         cartImage: 'https://placehold.it/100x80',\n        //         item: 'Keyboard',\n        //         price: 20,\n        //         id: 3\n        //     },\n        //     {\n        //         image: 'https://placehold.it/200x150',\n        //         cartImage: 'https://placehold.it/100x80',\n        //         item: 'Mouse',\n        //         price: 10,\n        //         id: 4\n        //     },\n        //     {\n        //         image: 'https://placehold.it/200x150',\n        //         cartImage: 'https://placehold.it/100x80',\n        //         item: 'Phones',\n        //         price: 25,\n        //         id: 5\n        //     },\n        //     {\n        //         image: 'https://placehold.it/200x150',\n        //         cartImage: 'https://placehold.it/100x80',\n        //         item: 'Router',\n        //         price: 30,\n        //         id: 6\n        //     },\n        //     {\n        //         image: 'https://placehold.it/200x150',\n        //         cartImage: 'https://placehold.it/100x80',\n        //         item: 'USB-camera',\n        //         price: 18,\n        //         id: 7\n        //     },\n        //     {\n        //         image: 'https://placehold.it/200x150',\n        //         cartImage: 'https://placehold.it/100x80',\n        //         item: 'Gamepad',\n        //         price: 24,\n        //         id: 8\n        //     },\n        // ];\n        makeGETRequest(\"\".concat(API_URL, \"/catalogData.json\")).then(function (goods) {\n          _this.goods = JSON.parse(goods);\n\n          _this.render();\n\n          _this.totalSum();\n        })[\"catch\"](function (err) {\n          console.log(err);\n        });\n      }\n    }, {\n      key: \"render\",\n      value: function render() {\n        var listHtml = '';\n        this.goods.forEach(function (good) {\n          var goodItem = new GoodsItem(good.id_product, good.product_name, good.price, good.image);\n          listHtml += goodItem.render();\n        });\n        document.querySelector('.goods-list').innerHTML = listHtml;\n      } // три метода ниже делают одно общее дело - выводят суммарную стоимость всех товаров.\n      // возможно, их стоило объединить в один, пока хз...\n\n    }, {\n      key: \"totalSumHtml\",\n      value: function totalSumHtml(total) {\n        return \"<span>\".concat(total, \" $<span>\");\n      }\n    }, {\n      key: \"totalSumRend\",\n      value: function totalSumRend(total) {\n        var totalSum = document.querySelector('.totalSum');\n        totalSum.innerHTML += this.totalSumHtml(total);\n      }\n    }, {\n      key: \"totalSum\",\n      value: function totalSum() {\n        var total = 0;\n        this.goods.forEach(function (elem) {\n          total += elem.price;\n        });\n        this.totalSumRend(total);\n      }\n    }]);\n\n    return GoodsList;\n  }();\n\n  var list = new GoodsList();\n  list.fetchGood();\n\n  var Basket =\n  /*#__PURE__*/\n  function () {\n    function Basket(item) {\n      _classCallCheck(this, Basket);\n\n      /*img, name, quantity, price, totalSum НУ ЛИБО ПРИЛЕТАЕТ ОБЪЕКТ СО ВСЕМИ ПЕРЕЧИСЛЕННЫМИ СВОЙСТВАМИ */\n      this.id = +item.dataset.id_product;\n      this.name = item.dataset.product_name;\n      this.price = +item.dataset.price;\n      this.img = item.dataset.image;\n      this.quantity = 0;\n    }\n    /**\n     * Метод \"Показать/скрыть Корзину\"\n    */\n\n\n    _createClass(Basket, [{\n      key: \"showHide\",\n      value: function showHide() {\n        document.querySelector('.btn-cart').addEventListener('click', function () {\n          document.querySelector('.cart-block').classList.toggle('invisible');\n        });\n      }\n      /**\n       * Метод добавляет товар в Корзину\n       */\n\n    }, {\n      key: \"addToBasket\",\n      value: function addToBasket(item) {\n        var itemId = +item.dataset.id_product;\n        var find = basket.find(function (elem) {\n          return elem.id === itemId;\n        });\n\n        if (!find) {\n          basket.push({\n            id: this.id,\n            name: this.name,\n            price: this.price,\n            img: this.img,\n            quantity: 1\n          });\n        } else {\n          find.quantity++;\n        }\n      }\n      /**\n       * Метод удаления товара из Корзины\n       */\n\n    }, {\n      key: \"delGood\",\n      value: function delGood() {}\n      /**\n       * Метод перерендера Корзины\n       */\n\n    }, {\n      key: \"renderBasket\",\n      value: function renderBasket() {}\n    }]);\n\n    return Basket;\n  }(); // let catalog = new GoodsItem(goods);\n\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/public/css/style.css":
/*!**********************************!*\
  !*** ./src/public/css/style.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/public/css/style.css?");

/***/ })

/******/ });