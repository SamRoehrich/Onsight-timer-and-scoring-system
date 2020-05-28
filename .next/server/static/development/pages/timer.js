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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
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

/***/ "./pages/timer.js":
/*!************************!*\
  !*** ./pages/timer.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ \"styled-jsx/style\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_LocalState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/LocalState */ \"./components/LocalState.js\");\nvar _jsxFileName = \"/Users/sam/Desktop/timer/next/pages/timer.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\nconst TimerPage = () => {\n  const {\n    0: minutes,\n    1: setMinutes\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(4);\n  const {\n    0: seconds,\n    1: setSeconds\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0);\n  const {\n    0: isActive,\n    1: setIsActive\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false);\n  const {\n    0: tick,\n    1: setTick\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0);\n  const {\n    roundInformation\n  } = Object(_components_LocalState__WEBPACK_IMPORTED_MODULE_2__[\"useLocalState\"])();\n\n  function toggle() {\n    setIsActive(!isActive);\n  }\n\n  function reset() {\n    setMinutes();\n    setSeconds(0);\n    setIsActive(false);\n  }\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    console.log(roundInformation);\n\n    if (isActive) {\n      if (seconds == 0) {\n        if (minutes > 0) {\n          setSeconds(59);\n          setMinutes(minutes - 1);\n        }\n\n        if (minutes == 0) {\n          setSeconds(59);\n          setMinutes(3);\n        }\n      }\n\n      if (seconds > 0) {\n        setTimeout(() => setSeconds(seconds - 1), 1000);\n        setTick(tick + 1);\n      }\n    }\n  }, [isActive, seconds, minutes]);\n  return __jsx(\"div\", {\n    className: \"jsx-129867920\" + \" \" + 'container',\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"jsx-129867920\" + \" \" + 'athlete-list',\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: \"jsx-129867920\" + \" \" + 'athlete-list-item',\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 17\n    }\n  }, __jsx(\"p\", {\n    className: \"jsx-129867920\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 21\n    }\n  }, \"Name\"), __jsx(\"p\", {\n    className: \"jsx-129867920\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 21\n    }\n  }, \"Age\")), __jsx(\"div\", {\n    className: \"jsx-129867920\" + \" \" + 'athlete-list-item',\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 17\n    }\n  }, __jsx(\"p\", {\n    className: \"jsx-129867920\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 21\n    }\n  }, \"Name\"), __jsx(\"p\", {\n    className: \"jsx-129867920\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 21\n    }\n  }, \"Age\")), __jsx(\"div\", {\n    className: \"jsx-129867920\" + \" \" + 'athlete-list-item',\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 17\n    }\n  }, __jsx(\"p\", {\n    className: \"jsx-129867920\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 21\n    }\n  }, \"Name\"), __jsx(\"p\", {\n    className: \"jsx-129867920\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 21\n    }\n  }, \"Age\")), __jsx(\"div\", {\n    className: \"jsx-129867920\" + \" \" + 'athlete-list-item',\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 17\n    }\n  }, __jsx(\"p\", {\n    className: \"jsx-129867920\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 21\n    }\n  }, \"Name\"), __jsx(\"p\", {\n    className: \"jsx-129867920\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 21\n    }\n  }, \"Age\")), __jsx(\"div\", {\n    className: \"jsx-129867920\" + \" \" + 'athlete-list-item',\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 17\n    }\n  }, __jsx(\"p\", {\n    className: \"jsx-129867920\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 21\n    }\n  }, \"Name\"), __jsx(\"p\", {\n    className: \"jsx-129867920\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 21\n    }\n  }, \"Age\")), __jsx(\"div\", {\n    className: \"jsx-129867920\" + \" \" + 'athlete-list-item',\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 17\n    }\n  }, __jsx(\"p\", {\n    className: \"jsx-129867920\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 21\n    }\n  }, \"Name\"), __jsx(\"p\", {\n    className: \"jsx-129867920\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 21\n    }\n  }, \"Age\"))), __jsx(\"div\", {\n    className: \"jsx-129867920\" + \" \" + 'timer',\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 13\n    }\n  }, __jsx(\"h1\", {\n    className: \"jsx-129867920\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 17\n    }\n  }, minutes, \" : \", seconds < 10 ? `0${seconds}` : seconds), __jsx(\"button\", {\n    onClick: toggle,\n    className: \"jsx-129867920\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 17\n    }\n  }, isActive ? 'Stop' : 'Start')), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {\n    id: \"129867920\",\n    __self: undefined\n  }, \".athlete-list.jsx-129867920{width:20%;height:100vh;border:1px solid black;}.timer.jsx-129867920{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.container.jsx-129867920{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW0vRGVza3RvcC90aW1lci9uZXh0L3BhZ2VzL3RpbWVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRFaUIsQUFHbUMsQUFLRyxBQVFBLFVBWkEsYUFDVSx1QkFDM0IsNEJBRzBCLEFBUzFCLDhFQVIrQix5R0FDUiw2RkFHdkIiLCJmaWxlIjoiL1VzZXJzL3NhbS9EZXNrdG9wL3RpbWVyL25leHQvcGFnZXMvdGltZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5cbmltcG9ydCB7IHVzZUxvY2FsU3RhdGUgfSBmcm9tICcuLi9jb21wb25lbnRzL0xvY2FsU3RhdGUnXG5cbmNvbnN0IFRpbWVyUGFnZSA9ICgpID0+IHtcbiAgICBjb25zdCBbbWludXRlcywgc2V0TWludXRlc10gPSB1c2VTdGF0ZSg0KVxuICAgIGNvbnN0IFtzZWNvbmRzLCBzZXRTZWNvbmRzXSA9IHVzZVN0YXRlKDApXG4gICAgY29uc3QgW2lzQWN0aXZlLCBzZXRJc0FjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgICBjb25zdCBbdGljaywgc2V0VGlja10gPSB1c2VTdGF0ZSgwKVxuICAgIGNvbnN0IHsgcm91bmRJbmZvcm1hdGlvbiB9ID0gdXNlTG9jYWxTdGF0ZSgpXG4gICAgXG4gICAgZnVuY3Rpb24gdG9nZ2xlKCkge1xuICAgICAgICBzZXRJc0FjdGl2ZSghaXNBY3RpdmUpXG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIHJlc2V0KCkge1xuICAgICAgICBzZXRNaW51dGVzKClcbiAgICAgICAgc2V0U2Vjb25kcygwKVxuICAgICAgICBzZXRJc0FjdGl2ZShmYWxzZSlcbiAgICB9XG4gICAgXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocm91bmRJbmZvcm1hdGlvbilcblxuICAgICAgICBpZihpc0FjdGl2ZSkge1xuICAgICAgICAgICAgaWYoc2Vjb25kcyA9PSAwKSB7XG4gICAgICAgICAgICAgICAgaWYobWludXRlcyA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0U2Vjb25kcyg1OSlcbiAgICAgICAgICAgICAgICAgICAgc2V0TWludXRlcyhtaW51dGVzIC0gMSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYobWludXRlcyA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFNlY29uZHMoNTkpXG4gICAgICAgICAgICAgICAgICAgIHNldE1pbnV0ZXMoMylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZihzZWNvbmRzID4gMCkge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gc2V0U2Vjb25kcyhzZWNvbmRzIC0gMSksIDEwMDApXG4gICAgICAgICAgICAgICAgc2V0VGljayh0aWNrICsgMSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfSwgW2lzQWN0aXZlLCBzZWNvbmRzLCBtaW51dGVzXSlcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2F0aGxldGUtbGlzdCc+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2F0aGxldGUtbGlzdC1pdGVtJz5cbiAgICAgICAgICAgICAgICAgICAgPHA+TmFtZTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHA+QWdlPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhdGhsZXRlLWxpc3QtaXRlbSc+XG4gICAgICAgICAgICAgICAgICAgIDxwPk5hbWU8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwPkFnZTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYXRobGV0ZS1saXN0LWl0ZW0nPlxuICAgICAgICAgICAgICAgICAgICA8cD5OYW1lPC9wPlxuICAgICAgICAgICAgICAgICAgICA8cD5BZ2U8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2F0aGxldGUtbGlzdC1pdGVtJz5cbiAgICAgICAgICAgICAgICAgICAgPHA+TmFtZTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHA+QWdlPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhdGhsZXRlLWxpc3QtaXRlbSc+XG4gICAgICAgICAgICAgICAgICAgIDxwPk5hbWU8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwPkFnZTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYXRobGV0ZS1saXN0LWl0ZW0nPlxuICAgICAgICAgICAgICAgICAgICA8cD5OYW1lPC9wPlxuICAgICAgICAgICAgICAgICAgICA8cD5BZ2U8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0aW1lcic+XG4gICAgICAgICAgICAgICAgPGgxPnttaW51dGVzfSA6IHtzZWNvbmRzIDwgMTAgPyBgMCR7c2Vjb25kc31gIDogc2Vjb25kc308L2gxPlxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dG9nZ2xlfT57aXNBY3RpdmUgPyAnU3RvcCcgOiAnU3RhcnQnfTwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAgICAgIHtgXG4gICAgICAgICAgICAgICAgICAgIC5hdGhsZXRlLWxpc3Qge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAudGltZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGltZXJQYWdlIl19 */\\n/*@ sourceURL=/Users/sam/Desktop/timer/next/pages/timer.js */\"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (TimerPage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy90aW1lci5qcz84ZWQzIl0sIm5hbWVzIjpbIlRpbWVyUGFnZSIsIm1pbnV0ZXMiLCJzZXRNaW51dGVzIiwidXNlU3RhdGUiLCJzZWNvbmRzIiwic2V0U2Vjb25kcyIsImlzQWN0aXZlIiwic2V0SXNBY3RpdmUiLCJ0aWNrIiwic2V0VGljayIsInJvdW5kSW5mb3JtYXRpb24iLCJ1c2VMb2NhbFN0YXRlIiwidG9nZ2xlIiwicmVzZXQiLCJ1c2VFZmZlY3QiLCJjb25zb2xlIiwibG9nIiwic2V0VGltZW91dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBRUE7O0FBRUEsTUFBTUEsU0FBUyxHQUFHLE1BQU07QUFDcEIsUUFBTTtBQUFBLE9BQUNDLE9BQUQ7QUFBQSxPQUFVQztBQUFWLE1BQXdCQyxzREFBUSxDQUFDLENBQUQsQ0FBdEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsT0FBRDtBQUFBLE9BQVVDO0FBQVYsTUFBd0JGLHNEQUFRLENBQUMsQ0FBRCxDQUF0QztBQUNBLFFBQU07QUFBQSxPQUFDRyxRQUFEO0FBQUEsT0FBV0M7QUFBWCxNQUEwQkosc0RBQVEsQ0FBQyxLQUFELENBQXhDO0FBQ0EsUUFBTTtBQUFBLE9BQUNLLElBQUQ7QUFBQSxPQUFPQztBQUFQLE1BQWtCTixzREFBUSxDQUFDLENBQUQsQ0FBaEM7QUFDQSxRQUFNO0FBQUVPO0FBQUYsTUFBdUJDLDRFQUFhLEVBQTFDOztBQUVBLFdBQVNDLE1BQVQsR0FBa0I7QUFDZEwsZUFBVyxDQUFDLENBQUNELFFBQUYsQ0FBWDtBQUNIOztBQUVELFdBQVNPLEtBQVQsR0FBaUI7QUFDYlgsY0FBVTtBQUNWRyxjQUFVLENBQUMsQ0FBRCxDQUFWO0FBQ0FFLGVBQVcsQ0FBQyxLQUFELENBQVg7QUFDSDs7QUFFRE8seURBQVMsQ0FBQyxNQUFNO0FBQ1pDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZTixnQkFBWjs7QUFFQSxRQUFHSixRQUFILEVBQWE7QUFDVCxVQUFHRixP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QVksT0FBOUMsQ0FGSixDQTNCSjtBQUFBO0FBQUE7QUFBQSw0OUpBREo7QUF1REgsQ0E5RkQ7O0FBZ0dlTix3RUFBZiIsImZpbGUiOiIuL3BhZ2VzL3RpbWVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgeyB1c2VMb2NhbFN0YXRlIH0gZnJvbSAnLi4vY29tcG9uZW50cy9Mb2NhbFN0YXRlJ1xuXG5jb25zdCBUaW1lclBhZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgW21pbnV0ZXMsIHNldE1pbnV0ZXNdID0gdXNlU3RhdGUoNClcbiAgICBjb25zdCBbc2Vjb25kcywgc2V0U2Vjb25kc10gPSB1c2VTdGF0ZSgwKVxuICAgIGNvbnN0IFtpc0FjdGl2ZSwgc2V0SXNBY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpXG4gICAgY29uc3QgW3RpY2ssIHNldFRpY2tdID0gdXNlU3RhdGUoMClcbiAgICBjb25zdCB7IHJvdW5kSW5mb3JtYXRpb24gfSA9IHVzZUxvY2FsU3RhdGUoKVxuICAgIFxuICAgIGZ1bmN0aW9uIHRvZ2dsZSgpIHtcbiAgICAgICAgc2V0SXNBY3RpdmUoIWlzQWN0aXZlKVxuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiByZXNldCgpIHtcbiAgICAgICAgc2V0TWludXRlcygpXG4gICAgICAgIHNldFNlY29uZHMoMClcbiAgICAgICAgc2V0SXNBY3RpdmUoZmFsc2UpXG4gICAgfVxuICAgIFxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJvdW5kSW5mb3JtYXRpb24pXG5cbiAgICAgICAgaWYoaXNBY3RpdmUpIHtcbiAgICAgICAgICAgIGlmKHNlY29uZHMgPT0gMCkge1xuICAgICAgICAgICAgICAgIGlmKG1pbnV0ZXMgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFNlY29uZHMoNTkpXG4gICAgICAgICAgICAgICAgICAgIHNldE1pbnV0ZXMobWludXRlcyAtIDEpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmKG1pbnV0ZXMgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBzZXRTZWNvbmRzKDU5KVxuICAgICAgICAgICAgICAgICAgICBzZXRNaW51dGVzKDMpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoc2Vjb25kcyA+IDApIHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHNldFNlY29uZHMoc2Vjb25kcyAtIDEpLCAxMDAwKVxuICAgICAgICAgICAgICAgIHNldFRpY2sodGljayArIDEpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH0sIFtpc0FjdGl2ZSwgc2Vjb25kcywgbWludXRlc10pXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhdGhsZXRlLWxpc3QnPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhdGhsZXRlLWxpc3QtaXRlbSc+XG4gICAgICAgICAgICAgICAgICAgIDxwPk5hbWU8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwPkFnZTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYXRobGV0ZS1saXN0LWl0ZW0nPlxuICAgICAgICAgICAgICAgICAgICA8cD5OYW1lPC9wPlxuICAgICAgICAgICAgICAgICAgICA8cD5BZ2U8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2F0aGxldGUtbGlzdC1pdGVtJz5cbiAgICAgICAgICAgICAgICAgICAgPHA+TmFtZTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHA+QWdlPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhdGhsZXRlLWxpc3QtaXRlbSc+XG4gICAgICAgICAgICAgICAgICAgIDxwPk5hbWU8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwPkFnZTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYXRobGV0ZS1saXN0LWl0ZW0nPlxuICAgICAgICAgICAgICAgICAgICA8cD5OYW1lPC9wPlxuICAgICAgICAgICAgICAgICAgICA8cD5BZ2U8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2F0aGxldGUtbGlzdC1pdGVtJz5cbiAgICAgICAgICAgICAgICAgICAgPHA+TmFtZTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHA+QWdlPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGltZXInPlxuICAgICAgICAgICAgICAgIDxoMT57bWludXRlc30gOiB7c2Vjb25kcyA8IDEwID8gYDAke3NlY29uZHN9YCA6IHNlY29uZHN9PC9oMT5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RvZ2dsZX0+e2lzQWN0aXZlID8gJ1N0b3AnIDogJ1N0YXJ0J308L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICAgICAgICB7YFxuICAgICAgICAgICAgICAgICAgICAuYXRobGV0ZS1saXN0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLnRpbWVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRpbWVyUGFnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/timer.js\n");

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/timer.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/sam/Desktop/timer/next/pages/timer.js */"./pages/timer.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-jsx/style\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtanN4L3N0eWxlXCI/MmJiYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJzdHlsZWQtanN4L3N0eWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWpzeC9zdHlsZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///styled-jsx/style\n");

/***/ })

/******/ });