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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LocalState\", function() { return LocalState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LocalStateContext\", function() { return LocalStateContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useLocalState\", function() { return useLocalState; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/sam/Desktop/timer/next/components/LocalState.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nconst LocalStateContext = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"createContext\"])();\nconst LocalStateProvider = LocalStateContext.Provider;\nconst initialState = {\n  athletes: [],\n  inIso: [],\n  onDeck: [],\n  climbing: [],\n  finished: []\n};\n\nfunction reducer(state, action) {\n  switch (action.type) {\n    case \"start-round\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        athletes: action.payload,\n        inIso: action.payload\n      });\n\n    case 'remove-climber-from-iso':\n      let currentIso = [];\n      state.inIso.forEach(climber => currentIso.push(climber));\n      let nextClimber = currentIso.shift();\n      console.log(nextClimber);\n      return _objectSpread(_objectSpread({}, state), {}, {\n        inIso: currentIso,\n        onDeck: [...state.onDeck, nextClimber]\n      });\n\n    case 'transition-climbers':\n      let currentClimbing = [];\n      let modifiedClimbing = [];\n      let currentOnDeck = [];\n      let currentFinished = state.finished;\n      currentIso = []; //fill temp arrays\n\n      state.climbing.forEach(climber => currentClimbing.push(climber));\n      state.onDeck.forEach(climber => currentOnDeck.push(climber));\n      state.inIso.forEach(climber => currentIso.push(climber)); //modify current climbers\n\n      currentClimbing.map(climber => climber.cycle());\n      currentClimbing.forEach(climber => {\n        if (climber.bouldersClimbed == 4) {\n          currentFinished = [...currentFinished, climber];\n        } else {\n          modifiedClimbing.push(climber);\n        }\n      }); //get next climber\n\n      let next = currentIso.shift();\n\n      if (next !== undefined) {\n        modifiedClimbing = [...modifiedClimbing, next];\n      }\n\n      return _objectSpread(_objectSpread({}, state), {}, {\n        climbing: currentOnDeck,\n        onDeck: modifiedClimbing,\n        inIso: currentIso,\n        finished: currentFinished\n      });\n\n    case 'reset':\n      state = initialState;\n      return _objectSpread(_objectSpread({}, state), {}, {\n        athletes: action.payload,\n        inIso: action.payload\n      });\n\n    default:\n      return state;\n  }\n}\n\nfunction LocalState({\n  children\n}) {\n  const {\n    0: roundInformation,\n    1: setRoundInformation\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({});\n  const {\n    0: athletes,\n    1: setAthletes\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]);\n  const {\n    0: state,\n    1: dispatch\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useReducer\"])(reducer, initialState);\n\n  function setLocalStateRoundInformation(roundInfo) {\n    setRoundInformation(roundInfo);\n  }\n\n  const defaultValues = {\n    roundInformation,\n    setLocalStateRoundInformation,\n    athletes,\n    setAthletes,\n    reducerState: state,\n    dispatch\n  };\n  return __jsx(LocalStateProvider, {\n    value: defaultValues,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 12\n    }\n  }, children);\n}\n\nfunction useLocalState() {\n  const all = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(LocalStateContext);\n  return all;\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xvY2FsU3RhdGUuanM/MjZkNiJdLCJuYW1lcyI6WyJMb2NhbFN0YXRlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJMb2NhbFN0YXRlUHJvdmlkZXIiLCJQcm92aWRlciIsImluaXRpYWxTdGF0ZSIsImF0aGxldGVzIiwiaW5Jc28iLCJvbkRlY2siLCJjbGltYmluZyIsImZpbmlzaGVkIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsInBheWxvYWQiLCJjdXJyZW50SXNvIiwiZm9yRWFjaCIsImNsaW1iZXIiLCJwdXNoIiwibmV4dENsaW1iZXIiLCJzaGlmdCIsImNvbnNvbGUiLCJsb2ciLCJjdXJyZW50Q2xpbWJpbmciLCJtb2RpZmllZENsaW1iaW5nIiwiY3VycmVudE9uRGVjayIsImN1cnJlbnRGaW5pc2hlZCIsIm1hcCIsImN5Y2xlIiwiYm91bGRlcnNDbGltYmVkIiwibmV4dCIsInVuZGVmaW5lZCIsIkxvY2FsU3RhdGUiLCJjaGlsZHJlbiIsInJvdW5kSW5mb3JtYXRpb24iLCJzZXRSb3VuZEluZm9ybWF0aW9uIiwidXNlU3RhdGUiLCJzZXRBdGhsZXRlcyIsImRpc3BhdGNoIiwidXNlUmVkdWNlciIsInNldExvY2FsU3RhdGVSb3VuZEluZm9ybWF0aW9uIiwicm91bmRJbmZvIiwiZGVmYXVsdFZhbHVlcyIsInJlZHVjZXJTdGF0ZSIsInVzZUxvY2FsU3RhdGUiLCJhbGwiLCJ1c2VDb250ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQSxNQUFNQSxpQkFBaUIsR0FBR0MsMkRBQWEsRUFBdkM7QUFFQSxNQUFNQyxrQkFBa0IsR0FBR0YsaUJBQWlCLENBQUNHLFFBQTdDO0FBRUEsTUFBTUMsWUFBWSxHQUFHO0FBQ2pCQyxVQUFRLEVBQUUsRUFETztBQUVqQkMsT0FBSyxFQUFFLEVBRlU7QUFHakJDLFFBQU0sRUFBRSxFQUhTO0FBSWpCQyxVQUFRLEVBQUUsRUFK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RDtBQUFBLE9BQVdnQztBQUFYLE1BQTBCRCxzREFBUSxDQUFDLEVBQUQsQ0FBeEM7QUFDQSxRQUFNO0FBQUEsT0FBQ3pCLEtBQUQ7QUFBQSxPQUFRMkI7QUFBUixNQUFvQkMsd0RBQVUsQ0FBQzdCLE9BQUQsRUFBVU4sWUFBVixDQUFwQzs7QUFFQSxXQUFTb0MsNkJBQVQsQ0FBdUNDLFNBQXZDLEVBQWtEO0FBQzlDTix1QkFBbUIsQ0FBQ00sU0FBRCxDQUFuQjtBQUNIOztBQUVELFFBQU1DLGFBQWEsR0FBRztBQUNsQlIsb0JBRGtCO0FBQ0FNLGlDQURBO0FBRWxCbkMsWUFGa0I7QUFFUmdDLGVBRlE7QUFHbEJNLGdCQUFZLEVBQUVoQyxLQUhJO0FBSWxCMkI7QUFKa0IsR0FBdEI7QUFPQSxTQUFPLE1BQUMsa0JBQUQ7QUFBb0IsU0FBSyxFQUFFSSxhQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ01ULFFBRE4sQ0FBUDtBQUdIOztBQUVELFNBQVNXLGFBQVQsR0FBeUI7QUFDckIsUUFBTUMsR0FBRyxHQUFHQyx3REFBVSxDQUFDOUMsaUJBQUQsQ0FBdEI7QUFDQSxTQUFPNkMsR0FBUDtBQUNIIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Mb2NhbFN0YXRlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUNvbnRleHQsIHVzZVJlZHVjZXIgfSBmcm9tICdyZWFjdCdcblxuY29uc3QgTG9jYWxTdGF0ZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KClcblxuY29uc3QgTG9jYWxTdGF0ZVByb3ZpZGVyID0gTG9jYWxTdGF0ZUNvbnRleHQuUHJvdmlkZXJcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICAgIGF0aGxldGVzOiBbXSxcbiAgICBpbklzbzogW10sXG4gICAgb25EZWNrOiBbXSxcbiAgICBjbGltYmluZzogW10sXG4gICAgZmluaXNoZWQ6IFtdLFxufVxuXG5mdW5jdGlvbiByZWR1Y2VyKHN0YXRlLCBhY3Rpb24pIHtcbiAgICBzd2l0Y2goYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSBcInN0YXJ0LXJvdW5kXCI6XG4gICAgICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgYXRobGV0ZXM6IGFjdGlvbi5wYXlsb2FkLCBpbklzbzogYWN0aW9uLnBheWxvYWR9O1xuICAgICAgICBjYXNlICdyZW1vdmUtY2xpbWJlci1mcm9tLWlzbyc6XG4gICAgICAgICAgICBsZXQgY3VycmVudElzbyA9IFtdXG4gICAgICAgICAgICBzdGF0ZS5pbklzby5mb3JFYWNoKGNsaW1iZXIgPT4gY3VycmVudElzby5wdXNoKGNsaW1iZXIpKVxuICAgICAgICAgICAgbGV0IG5leHRDbGltYmVyID0gY3VycmVudElzby5zaGlmdCgpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhuZXh0Q2xpbWJlcilcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgaW5Jc286IGN1cnJlbnRJc28sXG4gICAgICAgICAgICAgICAgb25EZWNrOiBbLi4uc3RhdGUub25EZWNrLCBuZXh0Q2xpbWJlcl1cbiAgICAgICAgICAgIH07XG4gICAgICAgIGNhc2UgJ3RyYW5zaXRpb24tY2xpbWJlcnMnOlxuICAgICAgICAgICAgbGV0IGN1cnJlbnRDbGltYmluZyA9IFtdXG4gICAgICAgICAgICBsZXQgbW9kaWZpZWRDbGltYmluZyA9IFtdXG4gICAgICAgICAgICBsZXQgY3VycmVudE9uRGVjayA9IFtdXG4gICAgICAgICAgICBsZXQgY3VycmVudEZpbmlzaGVkID0gc3RhdGUuZmluaXNoZWRcbiAgICAgICAgICAgIGN1cnJlbnRJc28gPSBbXVxuICAgICAgICAgICAgLy9maWxsIHRlbXAgYXJyYXlzXG4gICAgICAgICAgICBzdGF0ZS5jbGltYmluZy5mb3JFYWNoKGNsaW1iZXIgPT4gY3VycmVudENsaW1iaW5nLnB1c2goY2xpbWJlcikpXG4gICAgICAgICAgICBzdGF0ZS5vbkRlY2suZm9yRWFjaChjbGltYmVyID0+IGN1cnJlbnRPbkRlY2sucHVzaChjbGltYmVyKSlcbiAgICAgICAgICAgIHN0YXRlLmluSXNvLmZvckVhY2goY2xpbWJlciA9PiBjdXJyZW50SXNvLnB1c2goY2xpbWJlcikpXG4gICAgICAgICAgICAvL21vZGlmeSBjdXJyZW50IGNsaW1iZXJzXG4gICAgICAgICAgICBjdXJyZW50Q2xpbWJpbmcubWFwKGNsaW1iZXIgPT4gY2xpbWJlci5jeWNsZSgpKVxuICAgICAgICAgICAgY3VycmVudENsaW1iaW5nLmZvckVhY2goY2xpbWJlciA9PiB7XG4gICAgICAgICAgICAgICAgaWYoY2xpbWJlci5ib3VsZGVyc0NsaW1iZWQgPT0gNCkge1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50RmluaXNoZWQgPSBbLi4uY3VycmVudEZpbmlzaGVkLCBjbGltYmVyXVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG1vZGlmaWVkQ2xpbWJpbmcucHVzaChjbGltYmVyKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAvL2dldCBuZXh0IGNsaW1iZXJcbiAgICAgICAgICAgIGxldCBuZXh0ID0gY3VycmVudElzby5zaGlmdCgpXG4gICAgICAgICAgICBpZihuZXh0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBtb2RpZmllZENsaW1iaW5nID0gWy4uLm1vZGlmaWVkQ2xpbWJpbmcsIG5leHRdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIGNsaW1iaW5nOiBjdXJyZW50T25EZWNrLFxuICAgICAgICAgICAgICAgIG9uRGVjazogbW9kaWZpZWRDbGltYmluZyxcbiAgICAgICAgICAgICAgICBpbklzbzogY3VycmVudElzbyxcbiAgICAgICAgICAgICAgICBmaW5pc2hlZDogY3VycmVudEZpbmlzaGVkXG4gICAgICAgICAgICB9O1xuICAgICAgICBjYXNlICdyZXNldCc6XG4gICAgICAgICAgICBzdGF0ZSA9IGluaXRpYWxTdGF0ZVxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBhdGhsZXRlczogYWN0aW9uLnBheWxvYWQsXG4gICAgICAgICAgICAgICAgaW5Jc286IGFjdGlvbi5wYXlsb2FkXG4gICAgICAgICAgICB9XG4gICAgICAgIGRlZmF1bHQ6IFxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gTG9jYWxTdGF0ZSh7Y2hpbGRyZW59KSB7XG4gICAgY29uc3QgW3JvdW5kSW5mb3JtYXRpb24sIHNldFJvdW5kSW5mb3JtYXRpb25dID0gdXNlU3RhdGUoe30pXG4gICAgY29uc3QgW2F0aGxldGVzLCBzZXRBdGhsZXRlc10gPSB1c2VTdGF0ZShbXSlcbiAgICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIocmVkdWNlciwgaW5pdGlhbFN0YXRlKVxuXG4gICAgZnVuY3Rpb24gc2V0TG9jYWxTdGF0ZVJvdW5kSW5mb3JtYXRpb24ocm91bmRJbmZvKSB7XG4gICAgICAgIHNldFJvdW5kSW5mb3JtYXRpb24ocm91bmRJbmZvKVxuICAgIH1cblxuICAgIGNvbnN0IGRlZmF1bHRWYWx1ZXMgPSB7XG4gICAgICAgIHJvdW5kSW5mb3JtYXRpb24sIHNldExvY2FsU3RhdGVSb3VuZEluZm9ybWF0aW9uLFxuICAgICAgICBhdGhsZXRlcywgc2V0QXRobGV0ZXMsXG4gICAgICAgIHJlZHVjZXJTdGF0ZTogc3RhdGUsXG4gICAgICAgIGRpc3BhdGNoXG4gICAgfVxuXG4gICAgcmV0dXJuIDxMb2NhbFN0YXRlUHJvdmlkZXIgdmFsdWU9e2RlZmF1bHRWYWx1ZXN9PlxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICAgIDwvTG9jYWxTdGF0ZVByb3ZpZGVyPlxufVxuXG5mdW5jdGlvbiB1c2VMb2NhbFN0YXRlKCkge1xuICAgIGNvbnN0IGFsbCA9IHVzZUNvbnRleHQoTG9jYWxTdGF0ZUNvbnRleHQpXG4gICAgcmV0dXJuIGFsbFxufVxuXG5leHBvcnQgeyBMb2NhbFN0YXRlLCBMb2NhbFN0YXRlQ29udGV4dCwgdXNlTG9jYWxTdGF0ZSB9Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/LocalState.js\n");

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