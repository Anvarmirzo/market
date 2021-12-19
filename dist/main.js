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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/cart */ \"./src/modules/cart.js\");\n/* harmony import */ var _modules_getData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/getData */ \"./src/modules/getData.js\");\n\r\n\r\n(0,_modules_cart__WEBPACK_IMPORTED_MODULE_0__.cart)();\r\n(0,_modules_getData__WEBPACK_IMPORTED_MODULE_1__.getData)();\r\n\n\n//# sourceURL=webpack://ozon/./src/index.js?");

/***/ }),

/***/ "./src/modules/cart.js":
/*!*****************************!*\
  !*** ./src/modules/cart.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cart\": () => (/* binding */ cart)\n/* harmony export */ });\n/* harmony import */ var _postData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./postData */ \"./src/modules/postData.js\");\n\r\n\r\nconst cart = () => {\r\n\tconst cartBtn = document.getElementById('cart');\r\n\tconst cartModal = document.querySelector('.cart');\r\n\tconst cartCloseBtn = document.querySelector('.cart-close');\r\n\r\n\tconst openCart = () => {\r\n\t\tcartModal.style.display = 'flex';\r\n\t};\r\n\r\n\tconst closeCart = () => {\r\n\t\tcartModal.style.display = 'none';\r\n\t};\r\n\r\n\tcartBtn.addEventListener('click', () => {\r\n\t\topenCart();\r\n\t\t(0,_postData__WEBPACK_IMPORTED_MODULE_0__.postData)();\r\n\t});\r\n\r\n\tcartCloseBtn.addEventListener('click', closeCart);\r\n};\r\n\n\n//# sourceURL=webpack://ozon/./src/modules/cart.js?");

/***/ }),

/***/ "./src/modules/getData.js":
/*!********************************!*\
  !*** ./src/modules/getData.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getData\": () => (/* binding */ getData)\n/* harmony export */ });\nconst getData = async () => {\n\tconst response = await fetch('http://localhost:3000/goods');\n\tconsole.log(await response.json());\n};\n\n\n//# sourceURL=webpack://ozon/./src/modules/getData.js?");

/***/ }),

/***/ "./src/modules/postData.js":
/*!*********************************!*\
  !*** ./src/modules/postData.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"postData\": () => (/* binding */ postData)\n/* harmony export */ });\nconst postData = async () => {\n\tconst response = await fetch('http://localhost:3000/goods', {\n\t\tmethod: 'POST',\n\t\tbody: JSON.stringify({\n\t\t\ttitle: 'Ведьмак 3',\n\t\t\tprice: 3000,\n\t\t\tsale: true,\n\t\t\timg: 'https://cdn1.ozone.ru/multimedia/c400/1023547851.jpg',\n\t\t\tcategory: 'Игры и софт',\n\t\t}),\n\t\theaders: {\n\t\t\t'Content-Type': 'application/json; charset=UTF-8',\n\t\t},\n\t});\n\tconsole.log(await response.json());\n};\n\n\n//# sourceURL=webpack://ozon/./src/modules/postData.js?");

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