/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 44);
/******/ })
/************************************************************************/
/******/ ({

/***/ 44:
/* unknown exports provided */
/* all exports used */
/*!************************************************************!*\
  !*** ./Scripts/Views/Tests/Unit/Examples.EventBus.test.js ***!
  \************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\ndescribe('Event Bus View', function () {\n    it('True Equals True', function () {\n        expect(true).to.equal(true);\n    });\n});//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDQuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vU2NyaXB0cy9WaWV3cy9UZXN0cy9Vbml0L0V4YW1wbGVzLkV2ZW50QnVzLnRlc3QuanM/ZTkyYiJdLCJzb3VyY2VzQ29udGVudCI6WyJkZXNjcmliZSgnRXZlbnQgQnVzIFZpZXcnLCAoKSA9PiB7XG4gICAgaXQoJ1RydWUgRXF1YWxzIFRydWUnLCAoKSA9PiB7XG4gICAgICAgIGV4cGVjdCh0cnVlKVxuICAgICAgICAgIC50by5lcXVhbCh0cnVlKVxuICAgIH0pXG59KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIFNjcmlwdHMvVmlld3MvVGVzdHMvVW5pdC9FeGFtcGxlcy5FdmVudEJ1cy50ZXN0LmpzIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7QUFDQTtBQUVBOyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

/******/ });