webpackHotUpdate("static/development/pages/timer.js",{

/***/ "./components/LocalState.js":
/*!**********************************!*\
  !*** ./components/LocalState.js ***!
  \**********************************/
/*! exports provided: LocalState, LocalStateContext, useLocalState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LocalState\", function() { return LocalState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LocalStateContext\", function() { return LocalStateContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useLocalState\", function() { return useLocalState; });\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar _jsxFileName = \"/Users/sam/Desktop/timer/next/components/LocalState.js\",\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\nvar LocalStateContext = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"createContext\"])();\nvar LocalStateProvider = LocalStateContext.Provider;\nvar initialState = {\n  athletes: [],\n  inIso: [],\n  onDeck: [],\n  climbing: [],\n  finished: []\n};\n\nfunction reducer(state, action) {\n  switch (action.type) {\n    case \"start-round\":\n      var athletes = action.payload;\n      athletes.forEach(function (athlete) {\n        return athlete.inIso = true;\n      });\n      return _objectSpread(_objectSpread({}, state), {}, {\n        athletes: athletes,\n        inIso: athletes\n      });\n\n    case 'remove-climber-from-iso':\n      var currentIso = [];\n      state.inIso.forEach(function (climber) {\n        return currentIso.push(climber);\n      });\n      var nextClimber = currentIso.shift();\n      console.log(nextClimber);\n      return _objectSpread(_objectSpread({}, state), {}, {\n        inIso: currentIso,\n        onDeck: [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(state.onDeck), [nextClimber])\n      });\n\n    case 'transition-climbers':\n      var currentClimbing = [];\n      var modifiedClimbing = [];\n      var currentOnDeck = [];\n      var currentFinished = state.finished;\n      currentIso = []; //fill temp arrays\n\n      state.climbing.forEach(function (climber) {\n        return currentClimbing.push(climber);\n      });\n      state.onDeck.forEach(function (climber) {\n        return currentOnDeck.push(climber);\n      });\n      state.inIso.forEach(function (climber) {\n        return currentIso.push(climber);\n      }); //modify current climbers\n\n      currentClimbing.map(function (climber) {\n        return climber.cycle();\n      });\n      currentClimbing.forEach(function (climber) {\n        if (climber.finished) {\n          climber.climbing = false;\n          currentFinished = [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(currentFinished), [climber]);\n        } else {\n          modifiedClimbing.push(climber);\n        }\n      });\n      currentOnDeck.forEach(function (climber) {\n        climber.climbing = true;\n        climber.onDeck = false;\n      }); //get next climber\n\n      var next = currentIso.shift();\n\n      if (next !== undefined) {\n        next.setStartedClimbing();\n        modifiedClimbing = [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(modifiedClimbing), [next]);\n      }\n\n      return _objectSpread(_objectSpread({}, state), {}, {\n        climbing: currentOnDeck,\n        onDeck: modifiedClimbing,\n        inIso: currentIso,\n        finished: currentFinished\n      });\n\n    case 'reset':\n      state = initialState;\n      return _objectSpread(_objectSpread({}, state), {}, {\n        athletes: action.payload,\n        inIso: action.payload\n      });\n\n    default:\n      return state;\n  }\n}\n\nfunction LocalState(_ref) {\n  _s();\n\n  var children = _ref.children;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])({}),\n      roundInformation = _useState[0],\n      setRoundInformation = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])([]),\n      athletes = _useState2[0],\n      setAthletes = _useState2[1];\n\n  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useReducer\"])(reducer, initialState),\n      state = _useReducer[0],\n      dispatch = _useReducer[1];\n\n  function setLocalStateRoundInformation(roundInfo) {\n    setRoundInformation(roundInfo);\n  }\n\n  var defaultValues = {\n    roundInformation: roundInformation,\n    setLocalStateRoundInformation: setLocalStateRoundInformation,\n    athletes: athletes,\n    setAthletes: setAthletes,\n    reducerState: state,\n    dispatch: dispatch\n  };\n  return __jsx(LocalStateProvider, {\n    value: defaultValues,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 12\n    }\n  }, children);\n}\n\n_s(LocalState, \"5K25b9WwnD3xlxiFTWXIb6NRKtw=\");\n\n_c = LocalState;\n\nfunction useLocalState() {\n  _s2();\n\n  var all = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useContext\"])(LocalStateContext);\n  return all;\n}\n\n_s2(useLocalState, \"k0r6hllA0ZVFTbsvyQUS1AVLOSY=\");\n\n\n\nvar _c;\n\n$RefreshReg$(_c, \"LocalState\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xvY2FsU3RhdGUuanM/MjZkNiJdLCJuYW1lcyI6WyJMb2NhbFN0YXRlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJMb2NhbFN0YXRlUHJvdmlkZXIiLCJQcm92aWRlciIsImluaXRpYWxTdGF0ZSIsImF0aGxldGVzIiwiaW5Jc28iLCJvbkRlY2siLCJjbGltYmluZyIsImZpbmlzaGVkIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsInBheWxvYWQiLCJmb3JFYWNoIiwiYXRobGV0ZSIsImN1cnJlbnRJc28iLCJjbGltYmVyIiwicHVzaCIsIm5leHRDbGltYmVyIiwic2hpZnQiLCJjb25zb2xlIiwibG9nIiwiY3VycmVudENsaW1iaW5nIiwibW9kaWZpZWRDbGltYmluZyIsImN1cnJlbnRPbkRlY2siLCJjdXJyZW50RmluaXNoZWQiLCJtYXAiLCJjeWNsZSIsIm5leHQiLCJ1bmRlZmluZWQiLCJzZXRTdGFydGVkQ2xpbWJpbmciLCJMb2NhbFN0YXRlIiwiY2hpbGRyZW4iLCJ1c2VTdGF0ZSIsInJvdW5kSW5mb3JtYXRpb24iLCJzZXRSb3VuZEluZm9ybWF0aW9uIiwic2V0QXRobGV0ZXMiLCJ1c2VSZWR1Y2VyIiwiZGlzcGF0Y2giLCJzZXRMb2NhbFN0YXRlUm91bmRJbmZvcm1hdGlvbiIsInJvdW5kSW5mbyIsImRlZmF1bHRWYWx1ZXMiLCJyZWR1Y2VyU3RhdGUiLCJ1c2VMb2NhbFN0YXRlIiwiYWxsIiwidXNlQ29udGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUEsSUFBTUEsaUJBQWlCLEdBQUdDLDJEQUFhLEVBQXZDO0FBRUEsSUFBTUMsa0JBQWtCLEdBQUdGLGlCQUFpQixDQUFDRyxRQUE3QztBQUVBLElBQU1DLFlBQVksR0FBRztBQUNqQkMsVUFBUSxFQUFFLEVBRE87QUFFakJDLE9BQUssRUFBRSxFQUZVO0FBR2pCQyxRQUFNLEVBQUUsRUFIUztB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VCxHQUF5QjtBQUFBOztBQUNyQixNQUFNQyxHQUFHLEdBQUdDLHdEQUFVLENBQUMvQyxpQkFBRCxDQUF0QjtBQUNBLFNBQU84QyxHQUFQO0FBQ0g7O0lBSFFELGE7O0FBS1QiLCJmaWxlIjoiLi9jb21wb25lbnRzL0xvY2FsU3RhdGUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSwgdXNlQ29udGV4dCwgdXNlUmVkdWNlciB9IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBMb2NhbFN0YXRlQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKVxuXG5jb25zdCBMb2NhbFN0YXRlUHJvdmlkZXIgPSBMb2NhbFN0YXRlQ29udGV4dC5Qcm92aWRlclxuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gICAgYXRobGV0ZXM6IFtdLFxuICAgIGluSXNvOiBbXSxcbiAgICBvbkRlY2s6IFtdLFxuICAgIGNsaW1iaW5nOiBbXSxcbiAgICBmaW5pc2hlZDogW10sXG59XG5cbmZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUsIGFjdGlvbikge1xuICAgIHN3aXRjaChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIFwic3RhcnQtcm91bmRcIjpcbiAgICAgICAgICAgIGxldCBhdGhsZXRlcyA9IGFjdGlvbi5wYXlsb2FkXG4gICAgICAgICAgICBhdGhsZXRlcy5mb3JFYWNoKGF0aGxldGUgPT4gYXRobGV0ZS5pbklzbyA9IHRydWUpXG4gICAgICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgYXRobGV0ZXMsIGluSXNvOiBhdGhsZXRlc307XG4gICAgICAgIGNhc2UgJ3JlbW92ZS1jbGltYmVyLWZyb20taXNvJzpcbiAgICAgICAgICAgIGxldCBjdXJyZW50SXNvID0gW11cbiAgICAgICAgICAgIHN0YXRlLmluSXNvLmZvckVhY2goY2xpbWJlciA9PiBjdXJyZW50SXNvLnB1c2goY2xpbWJlcikpXG4gICAgICAgICAgICBsZXQgbmV4dENsaW1iZXIgPSBjdXJyZW50SXNvLnNoaWZ0KClcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG5leHRDbGltYmVyKVxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBpbklzbzogY3VycmVudElzbyxcbiAgICAgICAgICAgICAgICBvbkRlY2s6IFsuLi5zdGF0ZS5vbkRlY2ssIG5leHRDbGltYmVyXVxuICAgICAgICAgICAgfTtcbiAgICAgICAgY2FzZSAndHJhbnNpdGlvbi1jbGltYmVycyc6XG4gICAgICAgICAgICBsZXQgY3VycmVudENsaW1iaW5nID0gW11cbiAgICAgICAgICAgIGxldCBtb2RpZmllZENsaW1iaW5nID0gW11cbiAgICAgICAgICAgIGxldCBjdXJyZW50T25EZWNrID0gW11cbiAgICAgICAgICAgIGxldCBjdXJyZW50RmluaXNoZWQgPSBzdGF0ZS5maW5pc2hlZFxuICAgICAgICAgICAgY3VycmVudElzbyA9IFtdXG4gICAgICAgICAgICAvL2ZpbGwgdGVtcCBhcnJheXNcbiAgICAgICAgICAgIHN0YXRlLmNsaW1iaW5nLmZvckVhY2goY2xpbWJlciA9PiBjdXJyZW50Q2xpbWJpbmcucHVzaChjbGltYmVyKSlcbiAgICAgICAgICAgIHN0YXRlLm9uRGVjay5mb3JFYWNoKGNsaW1iZXIgPT4gY3VycmVudE9uRGVjay5wdXNoKGNsaW1iZXIpKVxuICAgICAgICAgICAgc3RhdGUuaW5Jc28uZm9yRWFjaChjbGltYmVyID0+IGN1cnJlbnRJc28ucHVzaChjbGltYmVyKSlcbiAgICAgICAgICAgIC8vbW9kaWZ5IGN1cnJlbnQgY2xpbWJlcnNcbiAgICAgICAgICAgIGN1cnJlbnRDbGltYmluZy5tYXAoY2xpbWJlciA9PiBjbGltYmVyLmN5Y2xlKCkpXG4gICAgICAgICAgICBjdXJyZW50Q2xpbWJpbmcuZm9yRWFjaChjbGltYmVyID0+IHtcbiAgICAgICAgICAgICAgICBpZihjbGltYmVyLmZpbmlzaGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsaW1iZXIuY2xpbWJpbmcgPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50RmluaXNoZWQgPSBbLi4uY3VycmVudEZpbmlzaGVkLCBjbGltYmVyXVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG1vZGlmaWVkQ2xpbWJpbmcucHVzaChjbGltYmVyKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBjdXJyZW50T25EZWNrLmZvckVhY2goY2xpbWJlciA9PiB7XG4gICAgICAgICAgICAgICAgY2xpbWJlci5jbGltYmluZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgY2xpbWJlci5vbkRlY2sgPSBmYWxzZTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAvL2dldCBuZXh0IGNsaW1iZXJcbiAgICAgICAgICAgIGxldCBuZXh0ID0gY3VycmVudElzby5zaGlmdCgpXG4gICAgICAgICAgICBpZihuZXh0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBuZXh0LnNldFN0YXJ0ZWRDbGltYmluZygpXG4gICAgICAgICAgICAgICAgbW9kaWZpZWRDbGltYmluZyA9IFsuLi5tb2RpZmllZENsaW1iaW5nLCBuZXh0XVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBjbGltYmluZzogY3VycmVudE9uRGVjayxcbiAgICAgICAgICAgICAgICBvbkRlY2s6IG1vZGlmaWVkQ2xpbWJpbmcsXG4gICAgICAgICAgICAgICAgaW5Jc286IGN1cnJlbnRJc28sXG4gICAgICAgICAgICAgICAgZmluaXNoZWQ6IGN1cnJlbnRGaW5pc2hlZFxuICAgICAgICAgICAgfTtcbiAgICAgICAgY2FzZSAncmVzZXQnOlxuICAgICAgICAgICAgc3RhdGUgPSBpbml0aWFsU3RhdGVcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgYXRobGV0ZXM6IGFjdGlvbi5wYXlsb2FkLFxuICAgICAgICAgICAgICAgIGluSXNvOiBhY3Rpb24ucGF5bG9hZFxuICAgICAgICAgICAgfVxuICAgICAgICBkZWZhdWx0OiBcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIExvY2FsU3RhdGUoe2NoaWxkcmVufSkge1xuICAgIGNvbnN0IFtyb3VuZEluZm9ybWF0aW9uLCBzZXRSb3VuZEluZm9ybWF0aW9uXSA9IHVzZVN0YXRlKHt9KVxuICAgIGNvbnN0IFthdGhsZXRlcywgc2V0QXRobGV0ZXNdID0gdXNlU3RhdGUoW10pXG4gICAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKHJlZHVjZXIsIGluaXRpYWxTdGF0ZSlcblxuICAgIGZ1bmN0aW9uIHNldExvY2FsU3RhdGVSb3VuZEluZm9ybWF0aW9uKHJvdW5kSW5mbykge1xuICAgICAgICBzZXRSb3VuZEluZm9ybWF0aW9uKHJvdW5kSW5mbylcbiAgICB9XG5cbiAgICBjb25zdCBkZWZhdWx0VmFsdWVzID0ge1xuICAgICAgICByb3VuZEluZm9ybWF0aW9uLCBzZXRMb2NhbFN0YXRlUm91bmRJbmZvcm1hdGlvbixcbiAgICAgICAgYXRobGV0ZXMsIHNldEF0aGxldGVzLFxuICAgICAgICByZWR1Y2VyU3RhdGU6IHN0YXRlLFxuICAgICAgICBkaXNwYXRjaFxuICAgIH1cblxuICAgIHJldHVybiA8TG9jYWxTdGF0ZVByb3ZpZGVyIHZhbHVlPXtkZWZhdWx0VmFsdWVzfT5cbiAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICA8L0xvY2FsU3RhdGVQcm92aWRlcj5cbn1cblxuZnVuY3Rpb24gdXNlTG9jYWxTdGF0ZSgpIHtcbiAgICBjb25zdCBhbGwgPSB1c2VDb250ZXh0KExvY2FsU3RhdGVDb250ZXh0KVxuICAgIHJldHVybiBhbGxcbn1cblxuZXhwb3J0IHsgTG9jYWxTdGF0ZSwgTG9jYWxTdGF0ZUNvbnRleHQsIHVzZUxvY2FsU3RhdGUgfSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/LocalState.js\n");

/***/ })

})