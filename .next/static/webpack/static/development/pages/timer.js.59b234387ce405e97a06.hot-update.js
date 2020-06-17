webpackHotUpdate("static/development/pages/timer.js",{

/***/ "./components/Transition.jsx":
/*!***********************************!*\
  !*** ./components/Transition.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _LocalState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LocalState */ \"./components/LocalState.js\");\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/sam/Desktop/timer/next/components/Transition.jsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__[\"default\"])([\"\\n    height: 50%;\\n    width: 100%;\\n    display: flex;\\n    justify-content: center;\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div(_templateObject());\n_c = Container;\nvar initialState = {\n  athletes: [],\n  inIso: [],\n  onDeck: [],\n  climbing: [],\n  finished: []\n};\n\nfunction reducer(state, action) {\n  switch (action.type) {\n    case \"start-round\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        athletes: action.payload,\n        inIso: action.payload\n      });\n\n    case 'remove-climber-from-iso':\n      var currentIso = [];\n      state.inIso.forEach(function (climber) {\n        return currentIso.push(climber);\n      });\n      var nextClimber = currentIso.shift();\n      return _objectSpread(_objectSpread({}, state), {}, {\n        inIso: currentIso,\n        onDeck: [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(state.onDeck), [nextClimber])\n      });\n\n    case 'transition-climbers':\n      var currentClimbing = sttae.climbing.map(function (climber) {\n        return climber;\n      });\n      var currentOnDeck = state.onDeck.map(function (climber) {\n        return climber;\n      });\n      currentClimbing.forEach(function (climber) {\n        return climber.cycle();\n      });\n      return _objectSpread(_objectSpread({}, state), {}, {\n        climbing: currentOnDeck,\n        onDeck: currentClimbing\n      });\n\n    default:\n      return state;\n  }\n}\n\nfunction cycleClimbers() {\n  dispatch({\n    type: 'transition-climbers '\n  });\n  dispatch({\n    type: 'remove-climber-from-iso '\n  });\n  return null;\n}\n\nvar RoundControl = function RoundControl() {\n  _s();\n\n  var _useLocalState = Object(_LocalState__WEBPACK_IMPORTED_MODULE_5__[\"useLocalState\"])(),\n      athletes = _useLocalState.athletes;\n\n  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useReducer\"])(reducer, initialState),\n      state = _useReducer[0],\n      dispatch = _useReducer[1];\n\n  return __jsx(Container, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 9\n    }\n  }, __jsx(\"button\", {\n    onClick: function onClick() {\n      return dispatch({\n        type: 'start-round',\n        payload: athletes\n      });\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 13\n    }\n  }, \"Start Round\"), __jsx(\"button\", {\n    onCLick: function onCLick() {\n      dispatch({\n        type: 'transition-climbers'\n      });\n      dispatch({\n        type: 'remove-climber-from-iso'\n      });\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 13\n    }\n  }, \"Cycle Climbers\"));\n};\n\n_s(RoundControl, \"eDe+abGvuWB9YzpQcOGABc9l/gc=\", false, function () {\n  return [_LocalState__WEBPACK_IMPORTED_MODULE_5__[\"useLocalState\"]];\n});\n\n_c2 = RoundControl;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RoundControl);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Container\");\n$RefreshReg$(_c2, \"RoundControl\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1RyYW5zaXRpb24uanN4P2E3MGYiXSwibmFtZXMiOlsiQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwiaW5pdGlhbFN0YXRlIiwiYXRobGV0ZXMiLCJpbklzbyIsIm9uRGVjayIsImNsaW1iaW5nIiwiZmluaXNoZWQiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwicGF5bG9hZCIsImN1cnJlbnRJc28iLCJmb3JFYWNoIiwiY2xpbWJlciIsInB1c2giLCJuZXh0Q2xpbWJlciIsInNoaWZ0IiwiY3VycmVudENsaW1iaW5nIiwic3R0YWUiLCJtYXAiLCJjdXJyZW50T25EZWNrIiwiY3ljbGUiLCJjeWNsZUNsaW1iZXJzIiwiZGlzcGF0Y2giLCJSb3VuZENvbnRyb2wiLCJ1c2VMb2NhbFN0YXRlIiwidXNlUmVkdWNlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQyx5REFBTSxDQUFDQyxHQUFWLG1CQUFmO0tBQU1GLFM7QUFPTixJQUFNRyxZQUFZLEdBQUc7QUFDakJDLFVBQVEsRUFBRSxFQURPO0FBRWpCQyxPQUFLLEVBQUUsRUFGVTtBQUdqQkMsUUFBTSxFQUFFLEVBSFM7QUFJakJDLFVBQVEsRUFBRSxFQUpPO0FBS2pCQyxVQUFRLEVBQUU7QUFMTyxDQUFyQjs7QUFRQSxTQUFTQyxPQUFULENBQWlCQyxLQUFqQixFQUF3QkMsTUFBeEIsRUFBZ0M7QUFDNUIsVUFBT0EsTUFBTSxDQUFDQyxJQUFkO0FBQ0ksU0FBSyxhQUFMO0FBQ0ksNkNBQVlGLEtBQVo7QUFBbUJOLGdCQUFRLEVBQUVPLE1BQU0sQ0FBQ0UsT0FBcEM7QUFBNkNSLGFBQUssRUFBRU0sTUFBTSxDQUFDRTtBQUEzRDs7QUFDSixTQUFLLHlCQUFMO0FBQ0ksVUFBSUMsVUFBVSxHQUFHLEVBQWpCO0FBQ0FKLFdBQUssQ0FBQ0wsS0FBTixDQUFZVSxPQUFaLENBQW9CLFVBQUFDLE9BQU87QUFBQSxlQUFJRixVQUFVLENBQUNHLElBQVgsQ0FBZ0JELE9BQWhCLENBQUo7QUFBQSxPQUEzQjtBQUNBLFVBQUlFLFdBQVcsR0FBR0osVUFBVSxDQUFDSyxLQUFYLEVBQWxCO0FBQ0EsNkNBQ09ULEtBRFA7QUFFSUwsYUFBSyxFQUFFUyxVQUZYO0FBR0lSLGNBQU0seUdBQU1JLEtBQUssQ0FBQ0osTUFBWixJQUFvQlksV0FBcEI7QUFIVjs7QUFLSixTQUFLLHFCQUFMO0FBQ0ksVUFBSUUsZUFBZSxHQUFHQyxLQUFLLENBQUNkLFFBQU4sQ0FBZWUsR0FBZixDQUFtQixVQUFBTixPQUFPO0FBQUEsZUFBSUEsT0FBSjtBQUFBLE9BQTFCLENBQXRCO0FBQ0EsVUFBSU8sYUFBYSxHQUFHYixLQUFLLENBQUNKLE1BQU4sQ0FBYWdCLEdBQWIsQ0FBaUIsVUFBQU4sT0FBTztBQUFBLGVBQUlBLE9BQUo7QUFBQSxPQUF4QixDQUFwQjtBQUVBSSxxQkFBZSxDQUFDTCxPQUFoQixDQUF3QixVQUFBQyxPQUFPO0FBQUEsZUFDM0JBLE9BQU8sQ0FBQ1EsS0FBUixFQUQyQjtBQUFBLE9BQS9CO0FBSUEsNkNBQ09kLEtBRFA7QUFFSUgsZ0JBQVEsRUFBRWdCLGFBRmQ7QUFHSWpCLGNBQU0sRUFBRWM7QUFIWjs7QUFNSjtBQUNJLGFBQU9WLEtBQVA7QUEzQlI7QUE2Qkg7O0FBRUQsU0FBU2UsYUFBVCxHQUF5QjtBQUNyQkMsVUFBUSxDQUFDO0FBQUVkLFFBQUksRUFBRTtBQUFSLEdBQUQsQ0FBUjtBQUNBYyxVQUFRLENBQUM7QUFBRWQsUUFBSSxFQUFFO0FBQVIsR0FBRCxDQUFSO0FBQ0EsU0FBTyxJQUFQO0FBQ0g7O0FBRUQsSUFBTWUsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUFBOztBQUFBLHVCQUNGQyxpRUFBYSxFQURYO0FBQUEsTUFDZnhCLFFBRGUsa0JBQ2ZBLFFBRGU7O0FBQUEsb0JBRUd5Qix3REFBVSxDQUFDcEIsT0FBRCxFQUFVTixZQUFWLENBRmI7QUFBQSxNQUVoQk8sS0FGZ0I7QUFBQSxNQUVUZ0IsUUFGUzs7QUFJdkIsU0FDSSxNQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQVEsV0FBTyxFQUFFO0FBQUEsYUFBTUEsUUFBUSxDQUFDO0FBQUVkLFlBQUksRUFBRSxhQUFSO0FBQXVCQyxlQUFPLEVBQUVUO0FBQWhDLE9BQUQsQ0FBZDtBQUFBLEtBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosRUFFSTtBQUFRLFdBQU8sRUFBRSxtQkFBTTtBQUNuQnNCLGNBQVEsQ0FBQztBQUFFZCxZQUFJLEVBQUU7QUFBUixPQUFELENBQVI7QUFDQWMsY0FBUSxDQUFDO0FBQUVkLFlBQUksRUFBRTtBQUFSLE9BQUQsQ0FBUjtBQUNILEtBSEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFGSixDQURKO0FBV0gsQ0FmRDs7R0FBTWUsWTtVQUNtQkMseUQ7OztNQURuQkQsWTtBQWlCU0EsMkVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1RyYW5zaXRpb24uanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUmVkdWNlciwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyB1c2VMb2NhbFN0YXRlIH0gZnJvbSAnLi9Mb2NhbFN0YXRlJ1xuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICAgIGhlaWdodDogNTAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5gXG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgICBhdGhsZXRlczogW10sXG4gICAgaW5Jc286IFtdLFxuICAgIG9uRGVjazogW10sXG4gICAgY2xpbWJpbmc6IFtdLFxuICAgIGZpbmlzaGVkOiBbXSxcbn1cblxuZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSwgYWN0aW9uKSB7XG4gICAgc3dpdGNoKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgXCJzdGFydC1yb3VuZFwiOlxuICAgICAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGF0aGxldGVzOiBhY3Rpb24ucGF5bG9hZCwgaW5Jc286IGFjdGlvbi5wYXlsb2FkfTtcbiAgICAgICAgY2FzZSAncmVtb3ZlLWNsaW1iZXItZnJvbS1pc28nOlxuICAgICAgICAgICAgbGV0IGN1cnJlbnRJc28gPSBbXVxuICAgICAgICAgICAgc3RhdGUuaW5Jc28uZm9yRWFjaChjbGltYmVyID0+IGN1cnJlbnRJc28ucHVzaChjbGltYmVyKSlcbiAgICAgICAgICAgIGxldCBuZXh0Q2xpbWJlciA9IGN1cnJlbnRJc28uc2hpZnQoKVxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBpbklzbzogY3VycmVudElzbyxcbiAgICAgICAgICAgICAgICBvbkRlY2s6IFsuLi5zdGF0ZS5vbkRlY2ssIG5leHRDbGltYmVyXVxuICAgICAgICAgICAgfTtcbiAgICAgICAgY2FzZSAndHJhbnNpdGlvbi1jbGltYmVycyc6XG4gICAgICAgICAgICBsZXQgY3VycmVudENsaW1iaW5nID0gc3R0YWUuY2xpbWJpbmcubWFwKGNsaW1iZXIgPT4gY2xpbWJlcilcbiAgICAgICAgICAgIGxldCBjdXJyZW50T25EZWNrID0gc3RhdGUub25EZWNrLm1hcChjbGltYmVyID0+IGNsaW1iZXIpXG5cbiAgICAgICAgICAgIGN1cnJlbnRDbGltYmluZy5mb3JFYWNoKGNsaW1iZXIgPT4gKFxuICAgICAgICAgICAgICAgIGNsaW1iZXIuY3ljbGUoKVxuICAgICAgICAgICAgKSlcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBjbGltYmluZzogY3VycmVudE9uRGVjayxcbiAgICAgICAgICAgICAgICBvbkRlY2s6IGN1cnJlbnRDbGltYmluZyxcbiAgICAgICAgICAgIH07XG4gICAgICAgIFxuICAgICAgICBkZWZhdWx0OiBcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGN5Y2xlQ2xpbWJlcnMoKSB7XG4gICAgZGlzcGF0Y2goeyB0eXBlOiAndHJhbnNpdGlvbi1jbGltYmVycyAnfSk7XG4gICAgZGlzcGF0Y2goeyB0eXBlOiAncmVtb3ZlLWNsaW1iZXItZnJvbS1pc28gJ30pO1xuICAgIHJldHVybiBudWxsXG59XG5cbmNvbnN0IFJvdW5kQ29udHJvbCA9ICgpID0+IHtcbiAgICBjb25zdCB7IGF0aGxldGVzIH0gPSB1c2VMb2NhbFN0YXRlKClcbiAgICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIocmVkdWNlciwgaW5pdGlhbFN0YXRlKVxuIFxuICAgIHJldHVybiAoXG4gICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGRpc3BhdGNoKHsgdHlwZTogJ3N0YXJ0LXJvdW5kJywgcGF5bG9hZDogYXRobGV0ZXN9KX0+U3RhcnQgUm91bmQ8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gb25DTGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ3RyYW5zaXRpb24tY2xpbWJlcnMnfSk7XG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiAncmVtb3ZlLWNsaW1iZXItZnJvbS1pc28nfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB9PkN5Y2xlIENsaW1iZXJzPC9idXR0b24+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuXG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBSb3VuZENvbnRyb2wiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Transition.jsx\n");

/***/ })

})