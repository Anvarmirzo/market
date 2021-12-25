/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/cart */ \"./src/modules/cart.js\");\n/* harmony import */ var _modules_catalog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/catalog */ \"./src/modules/catalog.js\");\n/* harmony import */ var _modules_load__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/load */ \"./src/modules/load.js\");\n/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search */ \"./src/search.js\");\n\r\n\r\n\r\n\r\n\r\n(0,_modules_cart__WEBPACK_IMPORTED_MODULE_0__.cart)();\r\n(0,_modules_load__WEBPACK_IMPORTED_MODULE_2__.load)();\r\n(0,_search__WEBPACK_IMPORTED_MODULE_3__.search)();\r\n(0,_modules_catalog__WEBPACK_IMPORTED_MODULE_1__.catalogToggle)();\r\n(0,_modules_cart__WEBPACK_IMPORTED_MODULE_0__.cartCounter)();\r\n\n\n//# sourceURL=webpack://ozon/./src/index.js?");

/***/ }),

/***/ "./src/modules/cart.js":
/*!*****************************!*\
  !*** ./src/modules/cart.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cart\": () => (/* binding */ cart),\n/* harmony export */   \"addToCart\": () => (/* binding */ addToCart),\n/* harmony export */   \"renderCart\": () => (/* binding */ renderCart),\n/* harmony export */   \"cartCounter\": () => (/* binding */ cartCounter),\n/* harmony export */   \"cartTotal\": () => (/* binding */ cartTotal)\n/* harmony export */ });\n/* harmony import */ var _deleteData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deleteData */ \"./src/modules/deleteData.js\");\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _postData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./postData */ \"./src/modules/postData.js\");\n\r\n\r\n\r\n\r\nconst cart = () => {\r\n\tconst cartBtn = document.getElementById('cart');\r\n\tconst cartModal = document.querySelector('.cart');\r\n\tconst cartCloseBtn = document.querySelector('.cart-close');\r\n\r\n\tconst openCart = () => {\r\n\t\tcartModal.style.display = 'flex';\r\n\t};\r\n\r\n\tconst closeCart = () => {\r\n\t\tcartModal.style.display = 'none';\r\n\t};\r\n\r\n\tcartBtn.addEventListener('click', () => {\r\n\t\topenCart();\r\n\t});\r\n\r\n\tcartCloseBtn.addEventListener('click', closeCart);\r\n};\r\n\r\nconst addToCart = async ({ id, ...product }) => {\r\n\tconst cart = await (0,_postData__WEBPACK_IMPORTED_MODULE_2__.postData)('cart', product);\r\n\trenderCart(cart);\r\n\tcartCounter(cart.length);\r\n};\r\n\r\nconst renderCart = async (cart) => {\r\n\tconst cartWrapper = document.querySelector('.cart-wrapper');\r\n\r\n\tlet price = 0;\r\n\r\n\tconst ol = document.createElement('ol');\r\n\tol.classList.add('cart-list');\r\n\r\n\tcart.forEach((item) => {\r\n\t\tprice += item.price;\r\n\t\tconst li = document.createElement('li');\r\n\r\n\t\tli.dataset.id = item.id;\r\n\r\n\t\tli.innerHTML = `<span>${item.title}</span> <span>${item.price}₽</span> <button class=\"cart-delete\" title=\"Remove product\"></button>`;\r\n\r\n\t\tli.addEventListener('click', function (e) {\r\n\t\t\tif (e.target.classList.contains('cart-delete')) {\r\n\t\t\t\t(0,_deleteData__WEBPACK_IMPORTED_MODULE_0__.deleteData)(e.target.parentElement.dataset.id);\r\n\t\t\t}\r\n\t\t});\r\n\r\n\t\tol.appendChild(li);\r\n\t});\r\n\tcartWrapper.innerHTML = '';\r\n\tcartWrapper.append(ol);\r\n\tcartTotal(price);\r\n};\r\n\r\nconst cartCounter = async (count = 0) => {\r\n\tconst cart = await (0,_getData__WEBPACK_IMPORTED_MODULE_1__.getCartData)();\r\n\trenderCart(cart);\r\n\r\n\tconst counter = document.querySelector('.counter');\r\n\tcounter.textContent = cart.length || count;\r\n};\r\n\r\nconst cartTotal = (price) => {\r\n\tconst total = document.querySelector('.cart-total span');\r\n\ttotal.textContent = price;\r\n};\r\n\n\n//# sourceURL=webpack://ozon/./src/modules/cart.js?");

/***/ }),

/***/ "./src/modules/catalog.js":
/*!********************************!*\
  !*** ./src/modules/catalog.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"catalogToggle\": () => (/* binding */ catalogToggle)\n/* harmony export */ });\n/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filters */ \"./src/modules/filters.js\");\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _renderGoodies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderGoodies */ \"./src/modules/renderGoodies.js\");\n\r\n\r\n\r\n\r\nconst catalogToggle = () => {\r\n\tconst btnCatalog = document.getElementById('catalog-btn');\r\n\tconst modalCatalog = document.querySelector('.catalog');\r\n\tconst modalCatalogItems = document.querySelectorAll('.catalog-list li');\r\n\tlet isOpen = false;\r\n\tconst showList = (e) => {\r\n\t\tisOpen = !isOpen;\r\n\r\n\t\tisOpen\r\n\t\t\t? (modalCatalog.style.display = 'block')\r\n\t\t\t: (modalCatalog.style.display = '');\r\n\t\tdocument.addEventListener('click', hideList);\r\n\t};\r\n\r\n\tconst hideList = ({ target }) => {\r\n\t\tif (\r\n\t\t\t!target.closest(\r\n\t\t\t\t'.catalog, .catalog-list, .catalog-list__switcher, #catalog-btn',\r\n\t\t\t)\r\n\t\t) {\r\n\t\t\tmodalCatalog.style.display = '';\r\n\t\t}\r\n\t};\r\n\tbtnCatalog.addEventListener('click', showList);\r\n\r\n\tmodalCatalogItems.forEach((item) => {\r\n\t\titem.addEventListener('click', async function (e) {\r\n\t\t\tconst text = item.textContent;\r\n\t\t\tconst goodies = await (0,_getData__WEBPACK_IMPORTED_MODULE_1__.getData)();\r\n\t\t\tconst foundGoodies = await (0,_filters__WEBPACK_IMPORTED_MODULE_0__.categoryFilter)(goodies, text);\r\n\t\t\t(0,_renderGoodies__WEBPACK_IMPORTED_MODULE_2__.renderGoodies)(foundGoodies);\r\n\t\t});\r\n\t});\r\n};\r\n\n\n//# sourceURL=webpack://ozon/./src/modules/catalog.js?");

/***/ }),

/***/ "./src/modules/deleteData.js":
/*!***********************************!*\
  !*** ./src/modules/deleteData.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"deleteData\": () => (/* binding */ deleteData)\n/* harmony export */ });\n/* harmony import */ var _cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cart */ \"./src/modules/cart.js\");\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n\r\n\r\n\r\nconst deleteData = async (id) => {\r\n\tconst response = await fetch(`http://localhost:3000/cart/${id}`, {\r\n\t\tmethod: 'DELETE',\r\n\t\theaders: {\r\n\t\t\t'Content-Type': 'application/json; charset=UTF-8',\r\n\t\t},\r\n\t});\r\n\tif (response.ok) {\r\n\t\tconst cart = await (0,_getData__WEBPACK_IMPORTED_MODULE_1__.getCartData)();\r\n\t\t(0,_cart__WEBPACK_IMPORTED_MODULE_0__.renderCart)(cart);\r\n\t\t(0,_cart__WEBPACK_IMPORTED_MODULE_0__.cartCounter)(cart.length);\r\n\t}\r\n};\r\n\n\n//# sourceURL=webpack://ozon/./src/modules/deleteData.js?");

/***/ }),

/***/ "./src/modules/filters.js":
/*!********************************!*\
  !*** ./src/modules/filters.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"searchFilter\": () => (/* binding */ searchFilter),\n/* harmony export */   \"categoryFilter\": () => (/* binding */ categoryFilter)\n/* harmony export */ });\nconst searchFilter = (goodies, value) => {\r\n\tconst regexp = new RegExp(value, 'gi');\r\n\r\n\treturn goodies.filter((item) => {\r\n\t\treturn item.title.match(regexp);\r\n\t});\r\n};\r\n\r\nconst categoryFilter = (goodies, value) => {\r\n\tconst regexp = new RegExp(value, 'gi');\r\n\treturn goodies.filter((item) => {\r\n\t\treturn item.category.match(regexp);\r\n\t});\r\n};\r\n\n\n//# sourceURL=webpack://ozon/./src/modules/filters.js?");

/***/ }),

/***/ "./src/modules/getData.js":
/*!********************************!*\
  !*** ./src/modules/getData.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getData\": () => (/* binding */ getData),\n/* harmony export */   \"getCartData\": () => (/* binding */ getCartData)\n/* harmony export */ });\n/* harmony import */ var _renderGoodies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderGoodies */ \"./src/modules/renderGoodies.js\");\n\r\n\r\nconst getData = async (str = '') => {\r\n\tconst response = await fetch(`http://localhost:3000/goods/${str}`);\r\n\tconst goodies = await response.json();\r\n\treturn goodies;\r\n};\r\n\r\nconst getCartData = async () => {\r\n\tconst response = await fetch('http://localhost:3000/cart');\r\n\tconst cart = await response.json();\r\n\treturn cart;\r\n};\r\n\n\n//# sourceURL=webpack://ozon/./src/modules/getData.js?");

/***/ }),

/***/ "./src/modules/load.js":
/*!*****************************!*\
  !*** ./src/modules/load.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"load\": () => (/* binding */ load)\n/* harmony export */ });\n/* harmony import */ var _renderGoodies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderGoodies */ \"./src/modules/renderGoodies.js\");\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n\r\n\r\n\r\nconst load = async () => {\r\n\t(0,_renderGoodies__WEBPACK_IMPORTED_MODULE_0__.renderGoodies)(await (0,_getData__WEBPACK_IMPORTED_MODULE_1__.getData)());\r\n};\r\n\n\n//# sourceURL=webpack://ozon/./src/modules/load.js?");

/***/ }),

/***/ "./src/modules/postData.js":
/*!*********************************!*\
  !*** ./src/modules/postData.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"postData\": () => (/* binding */ postData)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n\r\n\r\nconst postData = async (url = '', data) => {\r\n\tconst response = await fetch(`http://localhost:3000/${url}`, {\r\n\t\tmethod: 'POST',\r\n\t\tbody: JSON.stringify(data),\r\n\t\theaders: {\r\n\t\t\t'Content-Type': 'application/json; charset=UTF-8',\r\n\t\t},\r\n\t});\r\n\tif (response.ok) {\r\n\t\treturn await (0,_getData__WEBPACK_IMPORTED_MODULE_0__.getCartData)();\r\n\t}\r\n};\r\n\n\n//# sourceURL=webpack://ozon/./src/modules/postData.js?");

/***/ }),

/***/ "./src/modules/renderGoodies.js":
/*!**************************************!*\
  !*** ./src/modules/renderGoodies.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderGoodies\": () => (/* binding */ renderGoodies)\n/* harmony export */ });\n/* harmony import */ var _cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cart */ \"./src/modules/cart.js\");\n/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filters */ \"./src/modules/filters.js\");\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n\r\n\r\n\r\nconst renderGoodies = (goodies) => {\r\n\tconst goodiesWrapper = document.querySelector('.goods');\r\n\tconst fragment = document.createDocumentFragment();\r\n\r\n\tgoodiesWrapper.innerHTML = '';\r\n\tgoodies.forEach((item) => {\r\n\t\tconst article = document.createElement('article');\r\n\r\n\t\tarticle.classList.add('col-12', 'col-md-6', 'col-lg-4', 'col-xl-3');\r\n\t\tarticle.innerHTML = `\r\n\t\t\t<div class=\"card\" data-category=\"${item.category}\">\r\n\t\t\t${item.sale ? `<div class='card-sale'>🔥Hot Sale🔥</div>` : ''}\r\n\t\t\t\t<div class=\"card-img-wrapper\">\r\n\t\t\t\t\t<span class=\"card-img-top\"\r\n\t\t\t\t\t\tstyle=\"background-image: url('${item.img}')\"></span>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"card-body justify-content-between\">\r\n\t\t\t\t\t<div class=\"card-price\">${item.price} ₽</div>\r\n\t\t\t\t\t<h5 class=\"card-title\">${item.title}</h5>\r\n\t\t\t\t\t<button class=\"btn btn-primary\">В корзину</button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t`;\r\n\r\n\t\tfragment.appendChild(article);\r\n\t});\r\n\tgoodiesWrapper.append(fragment);\r\n\r\n\tconst goods = document.querySelectorAll('.card');\r\n\tgoods.forEach((item) => {\r\n\t\tconst btn = item.querySelector('button');\r\n\t\tconst title = item.querySelector('.card-title').textContent;\r\n\t\tbtn.addEventListener('click', async function (e) {\r\n\t\t\tconst goodies = await (0,_getData__WEBPACK_IMPORTED_MODULE_2__.getData)();\r\n\t\t\tconst product = (0,_filters__WEBPACK_IMPORTED_MODULE_1__.searchFilter)(goodies, title);\r\n\t\t\tproduct.length && (0,_cart__WEBPACK_IMPORTED_MODULE_0__.addToCart)(...product);\r\n\t\t});\r\n\t});\r\n};\r\n\n\n//# sourceURL=webpack://ozon/./src/modules/renderGoodies.js?");

/***/ }),

/***/ "./src/search.js":
/*!***********************!*\
  !*** ./src/search.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"search\": () => (/* binding */ search)\n/* harmony export */ });\n/* harmony import */ var _modules_filters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/filters */ \"./src/modules/filters.js\");\n/* harmony import */ var _modules_getData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _modules_renderGoodies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/renderGoodies */ \"./src/modules/renderGoodies.js\");\n\r\n\r\n\r\n\r\nconst search = () => {\r\n\tconst searchInput = document.querySelector('.search-wrapper_input');\r\n\r\n\tsearchInput.addEventListener('input', async function (e) {\r\n\t\tconst value = e.target.value;\r\n\t\tconst goodies = await (0,_modules_getData__WEBPACK_IMPORTED_MODULE_1__.getData)();\r\n\t\tconst foundGoodies = await (0,_modules_filters__WEBPACK_IMPORTED_MODULE_0__.searchFilter)(goodies, value);\r\n\t\t(0,_modules_renderGoodies__WEBPACK_IMPORTED_MODULE_2__.renderGoodies)(foundGoodies);\r\n\t});\r\n};\r\n\n\n//# sourceURL=webpack://ozon/./src/search.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;