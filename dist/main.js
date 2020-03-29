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

/***/ "./src/HW-1/HW-1.js":
/*!**************************!*\
  !*** ./src/HW-1/HW-1.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst Nokia = 15.678, Samsung = 90.2345, Apple = 123.965;\r\n\r\nlet maxPrice = Math.max(Nokia,Samsung,Apple);\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (maxPrice);\n\n//# sourceURL=webpack:///./src/HW-1/HW-1.js?");

/***/ }),

/***/ "./src/HW-2/HW-3.js":
/*!**************************!*\
  !*** ./src/HW-2/HW-3.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return getMaxDigit; });\nfunction getMaxDigit(number){\r\n    number = number.toString();\r\n    let maxDigit = 0;\r\n    for (let i = 0; i < number.length; i++) {\r\n        if(maxDigit < number[i]){\r\n            maxDigit = number[i];\r\n        }\r\n    }\r\n    return number + ' => ' + maxDigit;\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/HW-2/HW-3.js?");

/***/ }),

/***/ "./src/HW-3/HW-4.js":
/*!**************************!*\
  !*** ./src/HW-3/HW-4.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\r\nlet students = [\"Саша\", \"Ігор\", \"Олена\", \"Іра\", \"Олексій\", \"Світлана\"];\r\nfunction pairsOfStudents(students) {  \r\n    return `\r\n    1)${[students[0], students[5]]}\r\n    2)${[students[1], students[3]]}\r\n    3)${[students[4], students[2]]}\r\n    `;\r\n}\r\n\r\nlet resStud = pairsOfStudents(students);\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (resStud);\n\n//# sourceURL=webpack:///./src/HW-3/HW-4.js?");

/***/ }),

/***/ "./src/HW-4/HW-5.js":
/*!**************************!*\
  !*** ./src/HW-4/HW-5.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst students = [{\r\n    name: \"Tanya\",\r\n    course: 3,\r\n    subjects: {\r\n      math: [4, 4, 3, 4],\r\n      algorithms: [3, 3, 3, 4, 4, 4],\r\n      data_science: [5, 5, 3, 4]\r\n    }\r\n  }, {\r\n    name: \"Victor\",\r\n    course: 4,\r\n    subjects: {\r\n      physics: [5, 5, 5, 3],\r\n      economics: [2, 3, 3, 3, 3, 5],\r\n      geometry: [5, 5, 2, 3, 5]\r\n    }\r\n  }, {\r\n    name: \"Anton\",\r\n    course: 2,\r\n    subjects: {\r\n      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],\r\n      english: [5, 3],\r\n      cosmology: [5, 5, 5, 5]\r\n    }\r\n  }];\r\n\r\n  let getStudentsNames = (students) => students.map(student => student.name).sort();\r\n\r\n  let getStudent = getStudentsNames(students);\r\n\r\n  /* harmony default export */ __webpack_exports__[\"default\"] = (getStudent);\n\n//# sourceURL=webpack:///./src/HW-4/HW-5.js?");

/***/ }),

/***/ "./src/HW-5/HW-6.js":
/*!**************************!*\
  !*** ./src/HW-5/HW-6.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return getRandomArray; });\nfunction getRandomArray(length, min, max){\r\n    const arrLength = [];\r\n    for(let i = 0; i < length; i++){\r\n        arrLength[i] = Math.floor(Math.random()*(max - min)+min);\r\n    }\r\n    return arrLength;\r\n};\n\n//# sourceURL=webpack:///./src/HW-5/HW-6.js?");

/***/ }),

/***/ "./src/HW-6/HW-7.js":
/*!**************************!*\
  !*** ./src/HW-6/HW-7.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst ukraine = { \r\n    tax: 0.195, \r\n    middleSalary: 1789, \r\n    vacancies: 11476 \r\n};\r\nfunction getMySalary(){\r\n    let mySalary = {};\r\n    mySalary.salary = Math.floor(Math.random()*500+1500);\r\n    mySalary.taxes = (this.tax * mySalary.salary).toFixed(2);\r\n    mySalary.profit = (mySalary.salary - mySalary.taxes).toFixed(2);\r\n    \r\n    return JSON.stringify(mySalary);\r\n    };\r\n\r\n    /* harmony default export */ __webpack_exports__[\"default\"] = (getMySalary.call(ukraine));\n\n//# sourceURL=webpack:///./src/HW-6/HW-7.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HW_1_HW_1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HW-1/HW-1 */ \"./src/HW-1/HW-1.js\");\n/* harmony import */ var _HW_2_HW_3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HW-2/HW-3 */ \"./src/HW-2/HW-3.js\");\n/* harmony import */ var _HW_3_HW_4__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HW-3/HW-4 */ \"./src/HW-3/HW-4.js\");\n/* harmony import */ var _HW_4_HW_5__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HW-4/HW-5 */ \"./src/HW-4/HW-5.js\");\n/* harmony import */ var _HW_5_HW_6__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./HW-5/HW-6 */ \"./src/HW-5/HW-6.js\");\n/* harmony import */ var _HW_6_HW_7__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./HW-6/HW-7 */ \"./src/HW-6/HW-7.js\");\n\r\n//1)\r\n\r\nconsole.log('1)' + _HW_1_HW_1__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\r\n//2)\r\n\r\nconsole.log('2)' + Object(_HW_2_HW_3__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(842364));\r\n//3)\r\n\r\nconsole.log('3)' + _HW_3_HW_4__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\r\n//4)\r\n\r\nconsole.log('4)' + _HW_4_HW_5__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\r\n//5)\r\n\r\nconsole.log('5)Масив випадкових чисел:' + Object(_HW_5_HW_6__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(5,1,10));\r\n//6)\r\n\r\nconsole.log('6)Моя зарплата в Україні: ' + _HW_6_HW_7__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });