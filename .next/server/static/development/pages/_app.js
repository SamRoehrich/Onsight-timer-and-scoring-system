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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LocalState\", function() { return LocalState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LocalStateContext\", function() { return LocalStateContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useLocalState\", function() { return useLocalState; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/sam/Desktop/timer/next/components/LocalState.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nconst LocalStateContext = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"createContext\"])();\nconst LocalStateProvider = LocalStateContext.Provider;\nconst initialState = {\n  athletes: [],\n  inIso: [],\n  onDeck: [],\n  climbing: [],\n  finished: []\n};\n\nfunction reducer(state, action) {\n  switch (action.type) {\n    case \"start-round\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        athletes: action.payload,\n        inIso: action.payload\n      });\n\n    case 'remove-climber-from-iso':\n      let currentIso = [];\n      state.inIso.forEach(climber => currentIso.push(climber));\n      let nextClimber = currentIso.shift();\n      console.log(nextClimber);\n      return _objectSpread(_objectSpread({}, state), {}, {\n        inIso: currentIso,\n        onDeck: [...state.onDeck, nextClimber]\n      });\n\n    case 'transition-climbers':\n      let currentClimbing = [];\n      let modifiedClimbing = [];\n      let currentOnDeck = [];\n      let currentFinished = state.finished;\n      currentIso = []; //fill temp arrays\n\n      state.climbing.forEach(climber => currentClimbing.push(climber));\n      state.onDeck.forEach(climber => currentOnDeck.push(climber));\n      state.inIso.forEach(climber => currentIso.push(climber)); //modify current climbers\n\n      currentClimbing.map(climber => climber.cycle());\n      currentClimbing.forEach(climber => {\n        if (climber.bouldersClimbed == 4) {\n          currentFinished = [...currentFinished, climber];\n        } else {\n          modifiedClimbing.push(climber);\n        }\n      }); //get next climber\n\n      let next = currentIso.shift();\n\n      if (next !== undefined) {\n        next.setStartedClimbing();\n        modifiedClimbing = [...modifiedClimbing, next];\n      }\n\n      return _objectSpread(_objectSpread({}, state), {}, {\n        climbing: currentOnDeck,\n        onDeck: modifiedClimbing,\n        inIso: currentIso,\n        finished: currentFinished\n      });\n\n    case 'reset':\n      state = initialState;\n      return _objectSpread(_objectSpread({}, state), {}, {\n        athletes: action.payload,\n        inIso: action.payload\n      });\n\n    default:\n      return state;\n  }\n}\n\nfunction LocalState({\n  children\n}) {\n  const {\n    0: roundInformation,\n    1: setRoundInformation\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({});\n  const {\n    0: athletes,\n    1: setAthletes\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]);\n  const {\n    0: state,\n    1: dispatch\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useReducer\"])(reducer, initialState);\n\n  function setLocalStateRoundInformation(roundInfo) {\n    setRoundInformation(roundInfo);\n  }\n\n  const defaultValues = {\n    roundInformation,\n    setLocalStateRoundInformation,\n    athletes,\n    setAthletes,\n    reducerState: state,\n    dispatch\n  };\n  return __jsx(LocalStateProvider, {\n    value: defaultValues,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 12\n    }\n  }, children);\n}\n\nfunction useLocalState() {\n  const all = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(LocalStateContext);\n  return all;\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xvY2FsU3RhdGUuanM/MjZkNiJdLCJuYW1lcyI6WyJMb2NhbFN0YXRlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJMb2NhbFN0YXRlUHJvdmlkZXIiLCJQcm92aWRlciIsImluaXRpYWxTdGF0ZSIsImF0aGxldGVzIiwiaW5Jc28iLCJvbkRlY2siLCJjbGltYmluZyIsImZpbmlzaGVkIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsInBheWxvYWQiLCJjdXJyZW50SXNvIiwiZm9yRWFjaCIsImNsaW1iZXIiLCJwdXNoIiwibmV4dENsaW1iZXIiLCJzaGlmdCIsImNvbnNvbGUiLCJsb2ciLCJjdXJyZW50Q2xpbWJpbmciLCJtb2RpZmllZENsaW1iaW5nIiwiY3VycmVudE9uRGVjayIsImN1cnJlbnRGaW5pc2hlZCIsIm1hcCIsImN5Y2xlIiwiYm91bGRlcnNDbGltYmVkIiwibmV4dCIsInVuZGVmaW5lZCIsInNldFN0YXJ0ZWRDbGltYmluZyIsIkxvY2FsU3RhdGUiLCJjaGlsZHJlbiIsInJvdW5kSW5mb3JtYXRpb24iLCJzZXRSb3VuZEluZm9ybWF0aW9uIiwidXNlU3RhdGUiLCJzZXRBdGhsZXRlcyIsImRpc3BhdGNoIiwidXNlUmVkdWNlciIsInNldExvY2FsU3RhdGVSb3VuZEluZm9ybWF0aW9uIiwicm91bmRJbmZvIiwiZGVmYXVsdFZhbHVlcyIsInJlZHVjZXJTdGF0ZSIsInVzZUxvY2FsU3RhdGUiLCJhbGwiLCJ1c2VDb250ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQSxNQUFNQSxpQkFBaUIsR0FBR0MsMkRBQWEsRUFBdkM7QUFFQSxNQUFNQyxrQkFBa0IsR0FBR0YsaUJBQWlCLENBQUNHLFFBQTdDO0FBRUEsTUFBTUMsWUFBWSxHQUFHO0FBQ2pCQyxVQUFRLEVBQUUsRUFETztBQUVqQkMsT0FBSyxFQUFFLEVBRlU7QUFHakJDLFFBQU0sRUFBRSxFQUhT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QVEsQ0FBQyxFQUFELENBQXhEO0FBQ0EsUUFBTTtBQUFBLE9BQUNoQyxRQUFEO0FBQUEsT0FBV2lDO0FBQVgsTUFBMEJELHNEQUFRLENBQUMsRUFBRCxDQUF4QztBQUNBLFFBQU07QUFBQSxPQUFDMUIsS0FBRDtBQUFBLE9BQVE0QjtBQUFSLE1BQW9CQyx3REFBVSxDQUFDOUIsT0FBRCxFQUFVTixZQUFWLENBQXBDOztBQUVBLFdBQVNxQyw2QkFBVCxDQUF1Q0MsU0FBdkMsRUFBa0Q7QUFDOUNOLHVCQUFtQixDQUFDTSxTQUFELENBQW5CO0FBQ0g7O0FBRUQsUUFBTUMsYUFBYSxHQUFHO0FBQ2xCUixvQkFEa0I7QUFDQU0saUNBREE7QUFFbEJwQyxZQUZrQjtBQUVSaUMsZUFGUTtBQUdsQk0sZ0JBQVksRUFBRWpDLEtBSEk7QUFJbEI0QjtBQUprQixHQUF0QjtBQU9BLFNBQU8sTUFBQyxrQkFBRDtBQUFvQixTQUFLLEVBQUVJLGFBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDTVQsUUFETixDQUFQO0FBR0g7O0FBRUQsU0FBU1csYUFBVCxHQUF5QjtBQUNyQixRQUFNQyxHQUFHLEdBQUdDLHdEQUFVLENBQUMvQyxpQkFBRCxDQUF0QjtBQUNBLFNBQU84QyxHQUFQO0FBQ0giLCJmaWxlIjoiLi9jb21wb25lbnRzL0xvY2FsU3RhdGUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSwgdXNlQ29udGV4dCwgdXNlUmVkdWNlciB9IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBMb2NhbFN0YXRlQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKVxuXG5jb25zdCBMb2NhbFN0YXRlUHJvdmlkZXIgPSBMb2NhbFN0YXRlQ29udGV4dC5Qcm92aWRlclxuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gICAgYXRobGV0ZXM6IFtdLFxuICAgIGluSXNvOiBbXSxcbiAgICBvbkRlY2s6IFtdLFxuICAgIGNsaW1iaW5nOiBbXSxcbiAgICBmaW5pc2hlZDogW10sXG59XG5cbmZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUsIGFjdGlvbikge1xuICAgIHN3aXRjaChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIFwic3RhcnQtcm91bmRcIjpcbiAgICAgICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBhdGhsZXRlczogYWN0aW9uLnBheWxvYWQsIGluSXNvOiBhY3Rpb24ucGF5bG9hZH07XG4gICAgICAgIGNhc2UgJ3JlbW92ZS1jbGltYmVyLWZyb20taXNvJzpcbiAgICAgICAgICAgIGxldCBjdXJyZW50SXNvID0gW11cbiAgICAgICAgICAgIHN0YXRlLmluSXNvLmZvckVhY2goY2xpbWJlciA9PiBjdXJyZW50SXNvLnB1c2goY2xpbWJlcikpXG4gICAgICAgICAgICBsZXQgbmV4dENsaW1iZXIgPSBjdXJyZW50SXNvLnNoaWZ0KClcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG5leHRDbGltYmVyKVxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBpbklzbzogY3VycmVudElzbyxcbiAgICAgICAgICAgICAgICBvbkRlY2s6IFsuLi5zdGF0ZS5vbkRlY2ssIG5leHRDbGltYmVyXVxuICAgICAgICAgICAgfTtcbiAgICAgICAgY2FzZSAndHJhbnNpdGlvbi1jbGltYmVycyc6XG4gICAgICAgICAgICBsZXQgY3VycmVudENsaW1iaW5nID0gW11cbiAgICAgICAgICAgIGxldCBtb2RpZmllZENsaW1iaW5nID0gW11cbiAgICAgICAgICAgIGxldCBjdXJyZW50T25EZWNrID0gW11cbiAgICAgICAgICAgIGxldCBjdXJyZW50RmluaXNoZWQgPSBzdGF0ZS5maW5pc2hlZFxuICAgICAgICAgICAgY3VycmVudElzbyA9IFtdXG4gICAgICAgICAgICAvL2ZpbGwgdGVtcCBhcnJheXNcbiAgICAgICAgICAgIHN0YXRlLmNsaW1iaW5nLmZvckVhY2goY2xpbWJlciA9PiBjdXJyZW50Q2xpbWJpbmcucHVzaChjbGltYmVyKSlcbiAgICAgICAgICAgIHN0YXRlLm9uRGVjay5mb3JFYWNoKGNsaW1iZXIgPT4gY3VycmVudE9uRGVjay5wdXNoKGNsaW1iZXIpKVxuICAgICAgICAgICAgc3RhdGUuaW5Jc28uZm9yRWFjaChjbGltYmVyID0+IGN1cnJlbnRJc28ucHVzaChjbGltYmVyKSlcbiAgICAgICAgICAgIC8vbW9kaWZ5IGN1cnJlbnQgY2xpbWJlcnNcbiAgICAgICAgICAgIGN1cnJlbnRDbGltYmluZy5tYXAoY2xpbWJlciA9PiBjbGltYmVyLmN5Y2xlKCkpXG4gICAgICAgICAgICBjdXJyZW50Q2xpbWJpbmcuZm9yRWFjaChjbGltYmVyID0+IHtcbiAgICAgICAgICAgICAgICBpZihjbGltYmVyLmJvdWxkZXJzQ2xpbWJlZCA9PSA0KSB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRGaW5pc2hlZCA9IFsuLi5jdXJyZW50RmluaXNoZWQsIGNsaW1iZXJdXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbW9kaWZpZWRDbGltYmluZy5wdXNoKGNsaW1iZXIpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC8vZ2V0IG5leHQgY2xpbWJlclxuICAgICAgICAgICAgbGV0IG5leHQgPSBjdXJyZW50SXNvLnNoaWZ0KClcbiAgICAgICAgICAgIGlmKG5leHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIG5leHQuc2V0U3RhcnRlZENsaW1iaW5nKClcbiAgICAgICAgICAgICAgICBtb2RpZmllZENsaW1iaW5nID0gWy4uLm1vZGlmaWVkQ2xpbWJpbmcsIG5leHRdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIGNsaW1iaW5nOiBjdXJyZW50T25EZWNrLFxuICAgICAgICAgICAgICAgIG9uRGVjazogbW9kaWZpZWRDbGltYmluZyxcbiAgICAgICAgICAgICAgICBpbklzbzogY3VycmVudElzbyxcbiAgICAgICAgICAgICAgICBmaW5pc2hlZDogY3VycmVudEZpbmlzaGVkXG4gICAgICAgICAgICB9O1xuICAgICAgICBjYXNlICdyZXNldCc6XG4gICAgICAgICAgICBzdGF0ZSA9IGluaXRpYWxTdGF0ZVxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBhdGhsZXRlczogYWN0aW9uLnBheWxvYWQsXG4gICAgICAgICAgICAgICAgaW5Jc286IGFjdGlvbi5wYXlsb2FkXG4gICAgICAgICAgICB9XG4gICAgICAgIGRlZmF1bHQ6IFxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gTG9jYWxTdGF0ZSh7Y2hpbGRyZW59KSB7XG4gICAgY29uc3QgW3JvdW5kSW5mb3JtYXRpb24sIHNldFJvdW5kSW5mb3JtYXRpb25dID0gdXNlU3RhdGUoe30pXG4gICAgY29uc3QgW2F0aGxldGVzLCBzZXRBdGhsZXRlc10gPSB1c2VTdGF0ZShbXSlcbiAgICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIocmVkdWNlciwgaW5pdGlhbFN0YXRlKVxuXG4gICAgZnVuY3Rpb24gc2V0TG9jYWxTdGF0ZVJvdW5kSW5mb3JtYXRpb24ocm91bmRJbmZvKSB7XG4gICAgICAgIHNldFJvdW5kSW5mb3JtYXRpb24ocm91bmRJbmZvKVxuICAgIH1cblxuICAgIGNvbnN0IGRlZmF1bHRWYWx1ZXMgPSB7XG4gICAgICAgIHJvdW5kSW5mb3JtYXRpb24sIHNldExvY2FsU3RhdGVSb3VuZEluZm9ybWF0aW9uLFxuICAgICAgICBhdGhsZXRlcywgc2V0QXRobGV0ZXMsXG4gICAgICAgIHJlZHVjZXJTdGF0ZTogc3RhdGUsXG4gICAgICAgIGRpc3BhdGNoXG4gICAgfVxuXG4gICAgcmV0dXJuIDxMb2NhbFN0YXRlUHJvdmlkZXIgdmFsdWU9e2RlZmF1bHRWYWx1ZXN9PlxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICAgIDwvTG9jYWxTdGF0ZVByb3ZpZGVyPlxufVxuXG5mdW5jdGlvbiB1c2VMb2NhbFN0YXRlKCkge1xuICAgIGNvbnN0IGFsbCA9IHVzZUNvbnRleHQoTG9jYWxTdGF0ZUNvbnRleHQpXG4gICAgcmV0dXJuIGFsbFxufVxuXG5leHBvcnQgeyBMb2NhbFN0YXRlLCBMb2NhbFN0YXRlQ29udGV4dCwgdXNlTG9jYWxTdGF0ZSB9Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/LocalState.js\n");

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