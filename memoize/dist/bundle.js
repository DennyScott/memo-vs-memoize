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

/***/ "./node_modules/memoize-one/dist/memoize-one.esm.js":
/*!**********************************************************!*\
  !*** ./node_modules/memoize-one/dist/memoize-one.esm.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction areInputsEqual(newInputs, lastInputs) {\n  if (newInputs.length !== lastInputs.length) {\n    return false;\n  }\n\n  for (var i = 0; i < newInputs.length; i++) {\n    if (newInputs[i] !== lastInputs[i]) {\n      return false;\n    }\n  }\n\n  return true;\n}\n\nfunction memoizeOne(resultFn, isEqual) {\n  if (isEqual === void 0) {\n    isEqual = areInputsEqual;\n  }\n\n  var lastThis;\n  var lastArgs = [];\n  var lastResult;\n  var calledOnce = false;\n\n  var result = function memoized() {\n    for (var _len = arguments.length, newArgs = new Array(_len), _key = 0; _key < _len; _key++) {\n      newArgs[_key] = arguments[_key];\n    }\n\n    if (calledOnce && lastThis === this && isEqual(newArgs, lastArgs)) {\n      return lastResult;\n    }\n\n    lastResult = resultFn.apply(this, newArgs);\n    calledOnce = true;\n    lastThis = this;\n    lastArgs = newArgs;\n    return lastResult;\n  };\n\n  return result;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (memoizeOne);\n\n\n//# sourceURL=webpack:///./node_modules/memoize-one/dist/memoize-one.esm.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! memoize-one */ \"./node_modules/memoize-one/dist/memoize-one.esm.js\");\n\n\nfunction add(a, b) {\n  console.log('add');\n  return a + b;\n}\n\nvar c = 1;\n\nfunction sideEffectAdd(a, b) {\n  console.log('seAdd');\n  return a + b + c;\n}\n\nvar memAdd = Object(memoize_one__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(sideEffectAdd);\nconsole.log(memAdd(1, 2));\nconsole.log(memAdd(1, 2));\nc++;\nconsole.log(memAdd(1, 2));\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });