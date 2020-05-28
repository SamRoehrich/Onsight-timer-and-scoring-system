module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/LocalState.js":
/*!**********************************!*\
  !*** ./components/LocalState.js ***!
  \**********************************/
/*! exports provided: LocalState, LocalStateContext, useLocalState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LocalState\", function() { return LocalState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LocalStateContext\", function() { return LocalStateContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useLocalState\", function() { return useLocalState; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/sam/Desktop/timer/next/components/LocalState.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nconst LocalStateContext = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"createContext\"])();\nconst LocalStateProvider = LocalStateContext.Provider;\n\nfunction LocalState({\n  children\n}) {\n  const {\n    0: roundInformation,\n    1: setRoundInformation\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({});\n\n  function setLocalStateRoundInformation(roundInfo) {\n    setRoundInformation(roundInfo);\n  }\n\n  const defaultValues = {\n    roundInformation,\n    setLocalStateRoundInformation\n  };\n  return __jsx(LocalStateProvider, {\n    value: defaultValues,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 12\n    }\n  }, children);\n}\n\nfunction useLocalState() {\n  const all = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(LocalStateContext);\n  return all;\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xvY2FsU3RhdGUuanM/MjZkNiJdLCJuYW1lcyI6WyJMb2NhbFN0YXRlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJMb2NhbFN0YXRlUHJvdmlkZXIiLCJQcm92aWRlciIsIkxvY2FsU3RhdGUiLCJjaGlsZHJlbiIsInJvdW5kSW5mb3JtYXRpb24iLCJzZXRSb3VuZEluZm9ybWF0aW9uIiwidXNlU3RhdGUiLCJzZXRMb2NhbFN0YXRlUm91bmRJbmZvcm1hdGlvbiIsInJvdW5kSW5mbyIsImRlZmF1bHRWYWx1ZXMiLCJ1c2VMb2NhbFN0YXRlIiwiYWxsIiwidXNlQ29udGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFFQSxNQUFNQSxpQkFBaUIsR0FBR0MsMkRBQWEsRUFBdkM7QUFFQSxNQUFNQyxrQkFBa0IsR0FBR0YsaUJBQWlCLENBQUNHLFFBQTdDOztBQUVBLFNBQVNDLFVBQVQsQ0FBb0I7QUFBQ0M7QUFBRCxDQUFwQixFQUFnQztBQUM1QixRQUFNO0FBQUEsT0FBQ0MsZ0JBQUQ7QUFBQSxPQUFtQkM7QUFBbkIsTUFBMENDLHNEQUFRLENBQUMsRUFBRCxDQUF4RDs7QUFFQSxXQUFTQyw2QkFBVCxDQUF1Q0MsU0FBdkMsRUFBa0Q7QUFDOUNILHVCQUFtQixDQUFDRyxTQUFELENBQW5CO0FBQ0g7O0FBRUQsUUFBTUMsYUFBYSxHQUFHO0FBQ2xCTCxvQkFEa0I7QUFFbEJHO0FBRmtCLEdBQXRCO0FBS0EsU0FBTyxNQUFDLGtCQUFEO0FBQW9CLFNBQUssRUFBRUUsYUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNNTixRQUROLENBQVA7QUFHSDs7QUFFRCxTQUFTTyxhQUFULEdBQXlCO0FBQ3JCLFFBQU1DLEdBQUcsR0FBR0Msd0RBQVUsQ0FBQ2QsaUJBQUQsQ0FBdEI7QUFDQSxTQUFPYSxHQUFQO0FBQ0giLCJmaWxlIjoiLi9jb21wb25lbnRzL0xvY2FsU3RhdGUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBMb2NhbFN0YXRlQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKVxuXG5jb25zdCBMb2NhbFN0YXRlUHJvdmlkZXIgPSBMb2NhbFN0YXRlQ29udGV4dC5Qcm92aWRlclxuXG5mdW5jdGlvbiBMb2NhbFN0YXRlKHtjaGlsZHJlbn0pIHtcbiAgICBjb25zdCBbcm91bmRJbmZvcm1hdGlvbiwgc2V0Um91bmRJbmZvcm1hdGlvbl0gPSB1c2VTdGF0ZSh7fSlcblxuICAgIGZ1bmN0aW9uIHNldExvY2FsU3RhdGVSb3VuZEluZm9ybWF0aW9uKHJvdW5kSW5mbykge1xuICAgICAgICBzZXRSb3VuZEluZm9ybWF0aW9uKHJvdW5kSW5mbylcbiAgICB9XG5cbiAgICBjb25zdCBkZWZhdWx0VmFsdWVzID0ge1xuICAgICAgICByb3VuZEluZm9ybWF0aW9uLFxuICAgICAgICBzZXRMb2NhbFN0YXRlUm91bmRJbmZvcm1hdGlvblxuICAgIH1cblxuICAgIHJldHVybiA8TG9jYWxTdGF0ZVByb3ZpZGVyIHZhbHVlPXtkZWZhdWx0VmFsdWVzfT5cbiAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICA8L0xvY2FsU3RhdGVQcm92aWRlcj5cbn1cblxuZnVuY3Rpb24gdXNlTG9jYWxTdGF0ZSgpIHtcbiAgICBjb25zdCBhbGwgPSB1c2VDb250ZXh0KExvY2FsU3RhdGVDb250ZXh0KVxuICAgIHJldHVybiBhbGxcbn1cblxuZXhwb3J0IHsgTG9jYWxTdGF0ZSwgTG9jYWxTdGF0ZUNvbnRleHQsIHVzZUxvY2FsU3RhdGUgfSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/LocalState.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MyApp; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_LocalState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/LocalState */ \"./components/LocalState.js\");\nvar _jsxFileName = \"/Users/sam/Desktop/timer/next/pages/_app.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\nfunction MyApp({\n  Component,\n  pageProps\n}) {\n  return __jsx(_components_LocalState__WEBPACK_IMPORTED_MODULE_1__[\"LocalState\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 5,\n      columnNumber: 9\n    }\n  }, __jsx(Component, _extends({}, pageProps, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 13\n    }\n  })));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzP2Q1MzAiXSwibmFtZXMiOlsiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFFZSxTQUFTQSxLQUFULENBQWU7QUFBQ0MsV0FBRDtBQUFZQztBQUFaLENBQWYsRUFBdUM7QUFDbEQsU0FDSSxNQUFDLGlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLFNBQUQsZUFBZUEsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBREosQ0FESjtBQUtIIiwiZmlsZSI6Ii4vcGFnZXMvX2FwcC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExvY2FsU3RhdGUgfSBmcm9tICcuLi9jb21wb25lbnRzL0xvY2FsU3RhdGUnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE15QXBwKHtDb21wb25lbnQsIHBhZ2VQcm9wc30pIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8TG9jYWxTdGF0ZT5cbiAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgPC9Mb2NhbFN0YXRlPlxuICAgIClcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });