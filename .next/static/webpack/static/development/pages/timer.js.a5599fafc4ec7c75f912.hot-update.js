webpackHotUpdate("static/development/pages/timer.js",{

/***/ "./components/Transition.jsx":
/*!***********************************!*\
  !*** ./components/Transition.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _LocalState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LocalState */ \"./components/LocalState.js\");\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/sam/Desktop/timer/next/components/Transition.jsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__[\"default\"])([\"\\n    height: 50%;\\n    width: 100%;\\n    display: flex;\\n    justify-content: center;\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div(_templateObject());\n_c = Container;\nvar initialState = {\n  athletes: [],\n  inIso: [],\n  onDeck: [],\n  climbing: [],\n  finished: []\n};\n\nfunction reducer(state, action) {\n  switch (action.type) {\n    case \"start-round\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        athletes: action.payload,\n        inIso: action.payload\n      });\n\n    case 'remove-climber-from-iso':\n      var currentIso = [];\n      state.inIso.forEach(function (climber) {\n        return currentIso.push(climber);\n      });\n      var nextClimber = currentIso.shift();\n      console.log(nextClimber);\n      return _objectSpread(_objectSpread({}, state), {}, {\n        inIso: currentIso,\n        onDeck: [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(state.onDeck), [nextClimber])\n      });\n\n    case 'transition-climbers':\n      var currentClimbing = [];\n      var modifiedClimbing = [];\n      var currentOnDeck = [];\n      var currentFinished = state.finished;\n      var finishedClimber = null;\n      currentIso = []; //fill temp arrays\n\n      state.climbing.forEach(function (climber) {\n        return currentClimbing.push(climber);\n      });\n      state.onDeck.forEach(function (climber) {\n        return currentOnDeck.push(climber);\n      });\n      state.inIso.forEach(function (climber) {\n        return currentIso.push(climber);\n      }); //modify current climbers\n\n      currentClimbing.map(function (climber) {\n        return climber.cycle();\n      }); // currentClimbing.forEach((climber, idx) => {\n      //     if(climber.bouldersClimbed == 4) {\n      //         currentClimbing.splice(idx, 0)\n      //     }\n      // })\n\n      currentClimbing.forEach(function (climber) {\n        if (climber.bouldersClimbed == 4) {\n          currentFinished = [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(currentFinished), [climber]);\n        } else {\n          modifiedClimbing.push(climber);\n        }\n      }); //get next climber\n\n      var next = currentIso.shift();\n\n      if (next !== undefined) {\n        modifiedClimbing = [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(modifiedClimbing), [next]);\n      }\n\n      return _objectSpread(_objectSpread({}, state), {}, {\n        climbing: currentOnDeck,\n        onDeck: modifiedClimbing,\n        inIso: currentIso,\n        finished: currentFinished\n      });\n\n    case 'reset':\n      state = initialState;\n      return _objectSpread(_objectSpread({}, state), {}, {\n        athletes: action.payload,\n        inIso: action.payload\n      });\n\n    default:\n      return state;\n  }\n}\n\nfunction cycleClimbers(dispatch) {\n  return null;\n}\n\nvar RoundControl = function RoundControl() {\n  _s();\n\n  var _useLocalState = Object(_LocalState__WEBPACK_IMPORTED_MODULE_5__[\"useLocalState\"])(),\n      athletes = _useLocalState.athletes;\n\n  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useReducer\"])(reducer, initialState),\n      state = _useReducer[0],\n      dispatch = _useReducer[1];\n\n  return __jsx(Container, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 9\n    }\n  }, __jsx(\"button\", {\n    onClick: function onClick() {\n      return dispatch({\n        type: 'reset',\n        payload: athletes\n      });\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 13\n    }\n  }, \"Reset Round\"), __jsx(\"button\", {\n    onClick: function onClick() {\n      return dispatch({\n        type: 'start-round',\n        payload: athletes\n      });\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 13\n    }\n  }, \"Start Round\"), __jsx(\"button\", {\n    onClick: function onClick() {\n      return dispatch({\n        type: 'remove-climber-from-iso'\n      });\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 13\n    }\n  }, \"Get first climber\"), __jsx(\"button\", {\n    onClick: function onClick() {\n      return dispatch({\n        type: 'transition-climbers'\n      });\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 13\n    }\n  }, \"Cycle Climbers\"));\n};\n\n_s(RoundControl, \"eDe+abGvuWB9YzpQcOGABc9l/gc=\", false, function () {\n  return [_LocalState__WEBPACK_IMPORTED_MODULE_5__[\"useLocalState\"]];\n});\n\n_c2 = RoundControl;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RoundControl);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Container\");\n$RefreshReg$(_c2, \"RoundControl\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1RyYW5zaXRpb24uanN4P2E3MGYiXSwibmFtZXMiOlsiQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwiaW5pdGlhbFN0YXRlIiwiYXRobGV0ZXMiLCJpbklzbyIsIm9uRGVjayIsImNsaW1iaW5nIiwiZmluaXNoZWQiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwicGF5bG9hZCIsImN1cnJlbnRJc28iLCJmb3JFYWNoIiwiY2xpbWJlciIsInB1c2giLCJuZXh0Q2xpbWJlciIsInNoaWZ0IiwiY29uc29sZSIsImxvZyIsImN1cnJlbnRDbGltYmluZyIsIm1vZGlmaWVkQ2xpbWJpbmciLCJjdXJyZW50T25EZWNrIiwiY3VycmVudEZpbmlzaGVkIiwiZmluaXNoZWRDbGltYmVyIiwibWFwIiwiY3ljbGUiLCJib3VsZGVyc0NsaW1iZWQiLCJuZXh0IiwidW5kZWZpbmVkIiwiY3ljbGVDbGltYmVycyIsImRpc3BhdGNoIiwiUm91bmRDb250cm9sIiwidXNlTG9jYWxTdGF0ZSIsInVzZVJlZHVjZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVixtQkFBZjtLQUFNRixTO0FBT04sSUFBTUcsWUFBWSxHQUFHO0FBQ2pCQyxVQUFRLEVBQUUsRUFETztBQUVqQkMsT0FBSyxFQUFFLEVBRlU7QUFHakJDLFFBQU0sRUFBRSxFQUhTO0FBSWpCQyxVQUFRLEVBQUUsRUFKTztBQUtqQkMsVUFBUSxFQUFFO0FBTE8sQ0FBckI7O0FBUUEsU0FBU0MsT0FBVCxDQUFpQkMsS0FBakIsRUFBd0JDLE1BQXhCLEVBQWdDO0FBQzVCLFVBQU9BLE1BQU0sQ0FBQ0MsSUFBZDtBQUNJLFNBQUssYUFBTDtBQUNJLDZDQUFZRixLQUFaO0FBQW1CTixnQkFBUSxFQUFFTyxNQUFNLENBQUNFLE9BQXBD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QUQsRUFBVU4sWUFBVixDQUZiO0FBQUEsTUFFaEJPLEtBRmdCO0FBQUEsTUFFVHVCLFFBRlM7O0FBSXZCLFNBQ0ksTUFBQyxTQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFRLFdBQU8sRUFBRTtBQUFBLGFBQU1BLFFBQVEsQ0FBQztBQUFFckIsWUFBSSxFQUFFLE9BQVI7QUFBaUJDLGVBQU8sRUFBRVQ7QUFBMUIsT0FBRCxDQUFkO0FBQUEsS0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixFQUVJO0FBQVEsV0FBTyxFQUFFO0FBQUEsYUFBTTZCLFFBQVEsQ0FBQztBQUFFckIsWUFBSSxFQUFFLGFBQVI7QUFBdUJDLGVBQU8sRUFBRVQ7QUFBaEMsT0FBRCxDQUFkO0FBQUEsS0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGSixFQUdJO0FBQVEsV0FBTyxFQUFFO0FBQUEsYUFBTTZCLFFBQVEsQ0FBQztBQUFFckIsWUFBSSxFQUFFO0FBQVIsT0FBRCxDQUFkO0FBQUEsS0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFISixFQUlJO0FBQVEsV0FBTyxFQUFFO0FBQUEsYUFBTXFCLFFBQVEsQ0FBQztBQUFFckIsWUFBSSxFQUFFO0FBQVIsT0FBRCxDQUFkO0FBQUEsS0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFKSixDQURKO0FBU0gsQ0FiRDs7R0FBTXNCLFk7VUFDbUJDLHlEOzs7TUFEbkJELFk7QUFlU0EsMkVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1RyYW5zaXRpb24uanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUmVkdWNlciwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyB1c2VMb2NhbFN0YXRlIH0gZnJvbSAnLi9Mb2NhbFN0YXRlJ1xuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICAgIGhlaWdodDogNTAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5gXG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgICBhdGhsZXRlczogW10sXG4gICAgaW5Jc286IFtdLFxuICAgIG9uRGVjazogW10sXG4gICAgY2xpbWJpbmc6IFtdLFxuICAgIGZpbmlzaGVkOiBbXSxcbn1cblxuZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSwgYWN0aW9uKSB7XG4gICAgc3dpdGNoKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgXCJzdGFydC1yb3VuZFwiOlxuICAgICAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGF0aGxldGVzOiBhY3Rpb24ucGF5bG9hZCwgaW5Jc286IGFjdGlvbi5wYXlsb2FkfTtcbiAgICAgICAgY2FzZSAncmVtb3ZlLWNsaW1iZXItZnJvbS1pc28nOlxuICAgICAgICAgICAgbGV0IGN1cnJlbnRJc28gPSBbXVxuICAgICAgICAgICAgc3RhdGUuaW5Jc28uZm9yRWFjaChjbGltYmVyID0+IGN1cnJlbnRJc28ucHVzaChjbGltYmVyKSlcbiAgICAgICAgICAgIGxldCBuZXh0Q2xpbWJlciA9IGN1cnJlbnRJc28uc2hpZnQoKVxuICAgICAgICAgICAgY29uc29sZS5sb2cobmV4dENsaW1iZXIpXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIGluSXNvOiBjdXJyZW50SXNvLFxuICAgICAgICAgICAgICAgIG9uRGVjazogWy4uLnN0YXRlLm9uRGVjaywgbmV4dENsaW1iZXJdXG4gICAgICAgICAgICB9O1xuICAgICAgICBjYXNlICd0cmFuc2l0aW9uLWNsaW1iZXJzJzpcbiAgICAgICAgICAgIGxldCBjdXJyZW50Q2xpbWJpbmcgPSBbXVxuICAgICAgICAgICAgbGV0IG1vZGlmaWVkQ2xpbWJpbmcgPSBbXVxuICAgICAgICAgICAgbGV0IGN1cnJlbnRPbkRlY2sgPSBbXVxuICAgICAgICAgICAgbGV0IGN1cnJlbnRGaW5pc2hlZCA9IHN0YXRlLmZpbmlzaGVkXG4gICAgICAgICAgICBsZXQgZmluaXNoZWRDbGltYmVyID0gbnVsbFxuICAgICAgICAgICAgY3VycmVudElzbyA9IFtdXG4gICAgICAgICAgICAvL2ZpbGwgdGVtcCBhcnJheXNcbiAgICAgICAgICAgIHN0YXRlLmNsaW1iaW5nLmZvckVhY2goY2xpbWJlciA9PiBjdXJyZW50Q2xpbWJpbmcucHVzaChjbGltYmVyKSlcbiAgICAgICAgICAgIHN0YXRlLm9uRGVjay5mb3JFYWNoKGNsaW1iZXIgPT4gY3VycmVudE9uRGVjay5wdXNoKGNsaW1iZXIpKVxuICAgICAgICAgICAgc3RhdGUuaW5Jc28uZm9yRWFjaChjbGltYmVyID0+IGN1cnJlbnRJc28ucHVzaChjbGltYmVyKSlcbiAgICAgICAgICAgIC8vbW9kaWZ5IGN1cnJlbnQgY2xpbWJlcnNcbiAgICAgICAgICAgIGN1cnJlbnRDbGltYmluZy5tYXAoY2xpbWJlciA9PiBjbGltYmVyLmN5Y2xlKCkpXG4gICAgICAgICAgICAvLyBjdXJyZW50Q2xpbWJpbmcuZm9yRWFjaCgoY2xpbWJlciwgaWR4KSA9PiB7XG4gICAgICAgICAgICAvLyAgICAgaWYoY2xpbWJlci5ib3VsZGVyc0NsaW1iZWQgPT0gNCkge1xuICAgICAgICAgICAgLy8gICAgICAgICBjdXJyZW50Q2xpbWJpbmcuc3BsaWNlKGlkeCwgMClcbiAgICAgICAgICAgIC8vICAgICB9XG4gICAgICAgICAgICAvLyB9KVxuICAgICAgICAgICAgY3VycmVudENsaW1iaW5nLmZvckVhY2goY2xpbWJlciA9PiB7XG4gICAgICAgICAgICAgICAgaWYoY2xpbWJlci5ib3VsZGVyc0NsaW1iZWQgPT0gNCkge1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50RmluaXNoZWQgPSBbLi4uY3VycmVudEZpbmlzaGVkLCBjbGltYmVyXVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG1vZGlmaWVkQ2xpbWJpbmcucHVzaChjbGltYmVyKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAvL2dldCBuZXh0IGNsaW1iZXJcbiAgICAgICAgICAgIGxldCBuZXh0ID0gY3VycmVudElzby5zaGlmdCgpXG4gICAgICAgICAgICBpZihuZXh0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBtb2RpZmllZENsaW1iaW5nID0gWy4uLm1vZGlmaWVkQ2xpbWJpbmcsIG5leHRdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIGNsaW1iaW5nOiBjdXJyZW50T25EZWNrLFxuICAgICAgICAgICAgICAgIG9uRGVjazogbW9kaWZpZWRDbGltYmluZyxcbiAgICAgICAgICAgICAgICBpbklzbzogY3VycmVudElzbyxcbiAgICAgICAgICAgICAgICBmaW5pc2hlZDogY3VycmVudEZpbmlzaGVkXG4gICAgICAgICAgICB9O1xuICAgICAgICBjYXNlICdyZXNldCc6XG4gICAgICAgICAgICBzdGF0ZSA9IGluaXRpYWxTdGF0ZVxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBhdGhsZXRlczogYWN0aW9uLnBheWxvYWQsXG4gICAgICAgICAgICAgICAgaW5Jc286IGFjdGlvbi5wYXlsb2FkXG4gICAgICAgICAgICB9XG4gICAgICAgIGRlZmF1bHQ6IFxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gY3ljbGVDbGltYmVycyhkaXNwYXRjaCkge1xuICAgIHJldHVybiBudWxsXG59XG5cbmNvbnN0IFJvdW5kQ29udHJvbCA9ICgpID0+IHtcbiAgICBjb25zdCB7IGF0aGxldGVzIH0gPSB1c2VMb2NhbFN0YXRlKClcbiAgICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIocmVkdWNlciwgaW5pdGlhbFN0YXRlKVxuICAgIFxuICAgIHJldHVybiAoXG4gICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGRpc3BhdGNoKHsgdHlwZTogJ3Jlc2V0JywgcGF5bG9hZDogYXRobGV0ZXN9KX0+UmVzZXQgUm91bmQ8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gZGlzcGF0Y2goeyB0eXBlOiAnc3RhcnQtcm91bmQnLCBwYXlsb2FkOiBhdGhsZXRlc30pfT5TdGFydCBSb3VuZDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBkaXNwYXRjaCh7IHR5cGU6ICdyZW1vdmUtY2xpbWJlci1mcm9tLWlzbyd9KX0+R2V0IGZpcnN0IGNsaW1iZXI8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gZGlzcGF0Y2goeyB0eXBlOiAndHJhbnNpdGlvbi1jbGltYmVycyd9KX0+Q3ljbGUgQ2xpbWJlcnM8L2J1dHRvbj5cbiAgICAgICAgPC9Db250YWluZXI+XG5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJvdW5kQ29udHJvbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Transition.jsx\n");

/***/ })

})