webpackHotUpdate("static/development/pages/timer.js",{

/***/ "./components/Transition.jsx":
/*!***********************************!*\
  !*** ./components/Transition.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _LocalState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LocalState */ \"./components/LocalState.js\");\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/sam/Desktop/timer/next/components/Transition.jsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__[\"default\"])([\"\\n    height: 50%;\\n    width: 100%;\\n    display: flex;\\n    justify-content: center;\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div(_templateObject());\n_c = Container;\nvar initialState = {\n  athletes: [],\n  inIso: [],\n  onDeck: [],\n  climbing: [],\n  finished: []\n};\n\nfunction reducer(state, action) {\n  switch (action.type) {\n    case \"start-round\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        athletes: action.payload,\n        inIso: action.payload\n      });\n\n    case 'remove-climber-from-iso':\n      var currentIso = [];\n      state.inIso.forEach(function (climber) {\n        return currentIso.push(climber);\n      });\n      var nextClimber = currentIso.shift();\n      console.log(nextClimber);\n      return _objectSpread(_objectSpread({}, state), {}, {\n        inIso: currentIso,\n        onDeck: [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(state.onDeck), [nextClimber])\n      });\n\n    case 'transition-climbers':\n      var currentClimbing = [];\n      var currentOnDeck = [];\n      var currentFinished = state.finished;\n      var done = null;\n      currentIso = []; //fill temp arrays\n\n      state.climbing.forEach(function (climber) {\n        return currentClimbing.push(climber);\n      });\n      state.onDeck.forEach(function (climber) {\n        return currentOnDeck.push(climber);\n      });\n      state.inIso.forEach(function (climber) {\n        return currentIso.push(climber);\n      }); //modify current climbers\n\n      currentClimbing.map(function (climber) {\n        return climber.cycle();\n      });\n      currentClimbing.forEach(function (climber) {\n        if (climber.bouldersClimbed == 4) {\n          done = climber;\n        }\n      }); //get next climber\n\n      var next = currentIso.shift();\n      return _objectSpread(_objectSpread({}, state), {}, {\n        climbing: currentOnDeck,\n        onDeck: [].concat(currentClimbing, [next]),\n        inIso: currentIso,\n        finished: [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(currentFinished), [done])\n      });\n\n    case 'reset':\n      state = initialState;\n      return _objectSpread(_objectSpread({}, state), {}, {\n        athletes: action.payload,\n        inIso: action.payload\n      });\n\n    default:\n      return state;\n  }\n}\n\nfunction cycleClimbers(dispatch) {\n  return null;\n}\n\nvar RoundControl = function RoundControl() {\n  _s();\n\n  var _useLocalState = Object(_LocalState__WEBPACK_IMPORTED_MODULE_5__[\"useLocalState\"])(),\n      athletes = _useLocalState.athletes;\n\n  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useReducer\"])(reducer, initialState),\n      state = _useReducer[0],\n      dispatch = _useReducer[1];\n\n  return __jsx(Container, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 9\n    }\n  }, __jsx(\"button\", {\n    onClick: function onClick() {\n      return dispatch({\n        type: 'reset',\n        payload: athletes\n      });\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 13\n    }\n  }, \"Reset Round\"), __jsx(\"button\", {\n    onClick: function onClick() {\n      return dispatch({\n        type: 'start-round',\n        payload: athletes\n      });\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 13\n    }\n  }, \"Start Round\"), __jsx(\"button\", {\n    onClick: function onClick() {\n      return dispatch({\n        type: 'remove-climber-from-iso'\n      });\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 13\n    }\n  }, \"Get first climber\"), __jsx(\"button\", {\n    onClick: function onClick() {\n      return dispatch({\n        type: 'transition-climbers'\n      });\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 13\n    }\n  }, \"Cycle Climbers\"));\n};\n\n_s(RoundControl, \"eDe+abGvuWB9YzpQcOGABc9l/gc=\", false, function () {\n  return [_LocalState__WEBPACK_IMPORTED_MODULE_5__[\"useLocalState\"]];\n});\n\n_c2 = RoundControl;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RoundControl);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Container\");\n$RefreshReg$(_c2, \"RoundControl\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1RyYW5zaXRpb24uanN4P2E3MGYiXSwibmFtZXMiOlsiQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwiaW5pdGlhbFN0YXRlIiwiYXRobGV0ZXMiLCJpbklzbyIsIm9uRGVjayIsImNsaW1iaW5nIiwiZmluaXNoZWQiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwicGF5bG9hZCIsImN1cnJlbnRJc28iLCJmb3JFYWNoIiwiY2xpbWJlciIsInB1c2giLCJuZXh0Q2xpbWJlciIsInNoaWZ0IiwiY29uc29sZSIsImxvZyIsImN1cnJlbnRDbGltYmluZyIsImN1cnJlbnRPbkRlY2siLCJjdXJyZW50RmluaXNoZWQiLCJkb25lIiwibWFwIiwiY3ljbGUiLCJib3VsZGVyc0NsaW1iZWQiLCJuZXh0IiwiY3ljbGVDbGltYmVycyIsImRpc3BhdGNoIiwiUm91bmRDb250cm9sIiwidXNlTG9jYWxTdGF0ZSIsInVzZVJlZHVjZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVixtQkFBZjtLQUFNRixTO0FBT04sSUFBTUcsWUFBWSxHQUFHO0FBQ2pCQyxVQUFRLEVBQUUsRUFETztBQUVqQkMsT0FBSyxFQUFFLEVBRlU7QUFHakJDLFFBQU0sRUFBRSxFQUhTO0FBSWpCQyxVQUFRLEVBQUUsRUFKTztBQUtqQkMsVUFBUSxFQUFFO0FBTE8sQ0FBckI7O0FBUUEsU0FBU0MsT0FBVCxDQUFpQkMsS0FBakIsRUFBd0JDLE1BQXhCLEVBQWdDO0FBQzVCLFVBQU9BLE1BQU0sQ0FBQ0MsSUFBZDtBQUNJLFNBQUssYUFBTDtBQUNJLDZDQUFZRixLQUFaO0FBQW1CTixnQkFBUSxFQUFFTyxNQUFNLENBQUNFLE9BQXBDO0FBQTZDUixhQUFLLEVBQUVNLE1BQU0sQ0FBQ0U7QUFBM0Q7O0FBQ0os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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLEVBRUk7QUFBUSxXQUFPLEVBQUU7QUFBQSxhQUFNMkIsUUFBUSxDQUFDO0FBQUVuQixZQUFJLEVBQUUsYUFBUjtBQUF1QkMsZUFBTyxFQUFFVDtBQUFoQyxPQUFELENBQWQ7QUFBQSxLQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZKLEVBR0k7QUFBUSxXQUFPLEVBQUU7QUFBQSxhQUFNMkIsUUFBUSxDQUFDO0FBQUVuQixZQUFJLEVBQUU7QUFBUixPQUFELENBQWQ7QUFBQSxLQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUhKLEVBSUk7QUFBUSxXQUFPLEVBQUU7QUFBQSxhQUFNbUIsUUFBUSxDQUFDO0FBQUVuQixZQUFJLEVBQUU7QUFBUixPQUFELENBQWQ7QUFBQSxLQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUpKLENBREo7QUFTSCxDQWJEOztHQUFNb0IsWTtVQUNtQkMseUQ7OztNQURuQkQsWTtBQWVTQSwyRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvVHJhbnNpdGlvbi5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSZWR1Y2VyLCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCB7IHVzZUxvY2FsU3RhdGUgfSBmcm9tICcuL0xvY2FsU3RhdGUnXG5cbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gICAgaGVpZ2h0OiA1MCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbmBcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICAgIGF0aGxldGVzOiBbXSxcbiAgICBpbklzbzogW10sXG4gICAgb25EZWNrOiBbXSxcbiAgICBjbGltYmluZzogW10sXG4gICAgZmluaXNoZWQ6IFtdLFxufVxuXG5mdW5jdGlvbiByZWR1Y2VyKHN0YXRlLCBhY3Rpb24pIHtcbiAgICBzd2l0Y2goYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSBcInN0YXJ0LXJvdW5kXCI6XG4gICAgICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgYXRobGV0ZXM6IGFjdGlvbi5wYXlsb2FkLCBpbklzbzogYWN0aW9uLnBheWxvYWR9O1xuICAgICAgICBjYXNlICdyZW1vdmUtY2xpbWJlci1mcm9tLWlzbyc6XG4gICAgICAgICAgICBsZXQgY3VycmVudElzbyA9IFtdXG4gICAgICAgICAgICBzdGF0ZS5pbklzby5mb3JFYWNoKGNsaW1iZXIgPT4gY3VycmVudElzby5wdXNoKGNsaW1iZXIpKVxuICAgICAgICAgICAgbGV0IG5leHRDbGltYmVyID0gY3VycmVudElzby5zaGlmdCgpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhuZXh0Q2xpbWJlcilcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgaW5Jc286IGN1cnJlbnRJc28sXG4gICAgICAgICAgICAgICAgb25EZWNrOiBbLi4uc3RhdGUub25EZWNrLCBuZXh0Q2xpbWJlcl1cbiAgICAgICAgICAgIH07XG4gICAgICAgIGNhc2UgJ3RyYW5zaXRpb24tY2xpbWJlcnMnOlxuICAgICAgICAgICAgbGV0IGN1cnJlbnRDbGltYmluZyA9IFtdXG4gICAgICAgICAgICBsZXQgY3VycmVudE9uRGVjayA9IFtdXG4gICAgICAgICAgICBsZXQgY3VycmVudEZpbmlzaGVkID0gc3RhdGUuZmluaXNoZWRcbiAgICAgICAgICAgIGxldCBkb25lID0gbnVsbFxuICAgICAgICAgICAgY3VycmVudElzbyA9IFtdXG4gICAgICAgICAgICAvL2ZpbGwgdGVtcCBhcnJheXNcbiAgICAgICAgICAgIHN0YXRlLmNsaW1iaW5nLmZvckVhY2goY2xpbWJlciA9PiBjdXJyZW50Q2xpbWJpbmcucHVzaChjbGltYmVyKSlcbiAgICAgICAgICAgIHN0YXRlLm9uRGVjay5mb3JFYWNoKGNsaW1iZXIgPT4gY3VycmVudE9uRGVjay5wdXNoKGNsaW1iZXIpKVxuICAgICAgICAgICAgc3RhdGUuaW5Jc28uZm9yRWFjaChjbGltYmVyID0+IGN1cnJlbnRJc28ucHVzaChjbGltYmVyKSlcbiAgICAgICAgICAgIC8vbW9kaWZ5IGN1cnJlbnQgY2xpbWJlcnNcbiAgICAgICAgICAgIGN1cnJlbnRDbGltYmluZy5tYXAoY2xpbWJlciA9PiBjbGltYmVyLmN5Y2xlKCkpXG4gICAgICAgICAgICBjdXJyZW50Q2xpbWJpbmcuZm9yRWFjaChjbGltYmVyID0+IHtcbiAgICAgICAgICAgICAgICBpZihjbGltYmVyLmJvdWxkZXJzQ2xpbWJlZCA9PSA0KSB7XG4gICAgICAgICAgICAgICAgICAgIGRvbmUgPSBjbGltYmVyXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC8vZ2V0IG5leHQgY2xpbWJlclxuICAgICAgICAgICAgbGV0IG5leHQgPSBjdXJyZW50SXNvLnNoaWZ0KClcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgY2xpbWJpbmc6IGN1cnJlbnRPbkRlY2ssXG4gICAgICAgICAgICAgICAgb25EZWNrOiBbLi4uY3VycmVudENsaW1iaW5nLCBuZXh0XSxcbiAgICAgICAgICAgICAgICBpbklzbzogY3VycmVudElzbyxcbiAgICAgICAgICAgICAgICBmaW5pc2hlZDogWy4uLmN1cnJlbnRGaW5pc2hlZCwgZG9uZV1cbiAgICAgICAgICAgIH07XG4gICAgICAgIGNhc2UgJ3Jlc2V0JzpcbiAgICAgICAgICAgIHN0YXRlID0gaW5pdGlhbFN0YXRlXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIGF0aGxldGVzOiBhY3Rpb24ucGF5bG9hZCxcbiAgICAgICAgICAgICAgICBpbklzbzogYWN0aW9uLnBheWxvYWRcbiAgICAgICAgICAgIH1cbiAgICAgICAgZGVmYXVsdDogXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBjeWNsZUNsaW1iZXJzKGRpc3BhdGNoKSB7XG4gICAgcmV0dXJuIG51bGxcbn1cblxuY29uc3QgUm91bmRDb250cm9sID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgYXRobGV0ZXMgfSA9IHVzZUxvY2FsU3RhdGUoKVxuICAgIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihyZWR1Y2VyLCBpbml0aWFsU3RhdGUpXG4gICAgXG4gICAgcmV0dXJuIChcbiAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gZGlzcGF0Y2goeyB0eXBlOiAncmVzZXQnLCBwYXlsb2FkOiBhdGhsZXRlc30pfT5SZXNldCBSb3VuZDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBkaXNwYXRjaCh7IHR5cGU6ICdzdGFydC1yb3VuZCcsIHBheWxvYWQ6IGF0aGxldGVzfSl9PlN0YXJ0IFJvdW5kPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGRpc3BhdGNoKHsgdHlwZTogJ3JlbW92ZS1jbGltYmVyLWZyb20taXNvJ30pfT5HZXQgZmlyc3QgY2xpbWJlcjwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBkaXNwYXRjaCh7IHR5cGU6ICd0cmFuc2l0aW9uLWNsaW1iZXJzJ30pfT5DeWNsZSBDbGltYmVyczwvYnV0dG9uPlxuICAgICAgICA8L0NvbnRhaW5lcj5cblxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUm91bmRDb250cm9sIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Transition.jsx\n");

/***/ })

})