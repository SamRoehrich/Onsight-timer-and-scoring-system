webpackHotUpdate("static/development/pages/timer.js",{

/***/ "./components/Transition.jsx":
/*!***********************************!*\
  !*** ./components/Transition.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _LocalState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LocalState */ \"./components/LocalState.js\");\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/sam/Desktop/timer/next/components/Transition.jsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__[\"default\"])([\"\\n    height: 50%;\\n    width: 100%;\\n    display: flex;\\n    justify-content: center;\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div(_templateObject());\n_c = Container;\nvar initialState = {\n  athletes: [],\n  inIso: [],\n  onDeck: [],\n  climbing: [],\n  finished: []\n};\n\nfunction reducer(state, action) {\n  switch (action.type) {\n    case \"start-round\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        athletes: action.payload,\n        inIso: action.payload\n      });\n\n    case 'remove-climber-from-iso':\n      var currentIso = [];\n      state.inIso.forEach(function (climber) {\n        return currentIso.push(climber);\n      });\n      var nextClimber = currentIso.shift();\n      console.log(nextClimber);\n      return _objectSpread(_objectSpread({}, state), {}, {\n        inIso: currentIso,\n        onDeck: [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(state.onDeck), [nextClimber])\n      });\n\n    case 'transition-climbers':\n      var currentClimbing = [];\n      var currentOnDeck = [];\n      state.climbing.forEach(function (climber) {\n        return currentClimbing.push(climber);\n      });\n      state.onDeck.forEach(function (climber) {\n        return currentOnDeck.push(climber);\n      });\n      currentClimbing.map(function (climber) {\n        return climber.cycle();\n      });\n      return _objectSpread(_objectSpread({}, state), {}, {\n        climbing: currentOnDeck,\n        onDeck: currentClimbing\n      });\n\n    case 'reset':\n      state = initialState;\n      return _objectSpread(_objectSpread({}, state), {}, {\n        athletes: action.payload,\n        inIso: action.payload\n      });\n\n    default:\n      return state;\n  }\n}\n\nfunction cycleClimbers(dispatch) {\n  return null;\n}\n\nvar RoundControl = function RoundControl() {\n  _s();\n\n  var _useLocalState = Object(_LocalState__WEBPACK_IMPORTED_MODULE_5__[\"useLocalState\"])(),\n      athletes = _useLocalState.athletes;\n\n  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useReducer\"])(reducer, initialState),\n      state = _useReducer[0],\n      dispatch = _useReducer[1];\n\n  return __jsx(Container, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 9\n    }\n  }, __jsx(\"button\", {\n    onClick: function onClick() {\n      return dispatch({\n        type: 'reset',\n        payload: athletes\n      });\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 13\n    }\n  }, \"Reset Round\"), __jsx(\"button\", {\n    onClick: function onClick() {\n      return dispatch({\n        type: 'start-round',\n        payload: athletes\n      });\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 13\n    }\n  }, \"Start Round\"), __jsx(\"button\", {\n    onClick: function onClick() {\n      return dispatch({\n        type: 'remove-climber-from-iso'\n      });\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 13\n    }\n  }, \"Get first climber\"), __jsx(\"button\", {\n    onClick: function onClick() {\n      return dispatch({\n        type: 'transition-climbers'\n      });\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 13\n    }\n  }, \"Cycle Climbers\"));\n};\n\n_s(RoundControl, \"eDe+abGvuWB9YzpQcOGABc9l/gc=\", false, function () {\n  return [_LocalState__WEBPACK_IMPORTED_MODULE_5__[\"useLocalState\"]];\n});\n\n_c2 = RoundControl;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RoundControl);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Container\");\n$RefreshReg$(_c2, \"RoundControl\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1RyYW5zaXRpb24uanN4P2E3MGYiXSwibmFtZXMiOlsiQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwiaW5pdGlhbFN0YXRlIiwiYXRobGV0ZXMiLCJpbklzbyIsIm9uRGVjayIsImNsaW1iaW5nIiwiZmluaXNoZWQiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwicGF5bG9hZCIsImN1cnJlbnRJc28iLCJmb3JFYWNoIiwiY2xpbWJlciIsInB1c2giLCJuZXh0Q2xpbWJlciIsInNoaWZ0IiwiY29uc29sZSIsImxvZyIsImN1cnJlbnRDbGltYmluZyIsImN1cnJlbnRPbkRlY2siLCJtYXAiLCJjeWNsZSIsImN5Y2xlQ2xpbWJlcnMiLCJkaXNwYXRjaCIsIlJvdW5kQ29udHJvbCIsInVzZUxvY2FsU3RhdGUiLCJ1c2VSZWR1Y2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLHlEQUFNLENBQUNDLEdBQVYsbUJBQWY7S0FBTUYsUztBQU9OLElBQU1HLFlBQVksR0FBRztBQUNqQkMsVUFBUSxFQUFFLEVBRE87QUFFakJDLE9BQUssRUFBRSxFQUZVO0FBR2pCQyxRQUFNLEVBQUUsRUFIUztBQUlqQkMsVUFBUSxFQUFFLEVBSk87QUFLakJDLFVBQVEsRUFBRTtBQUxPLENBQXJCOztBQVFBLFNBQVNDLE9BQVQsQ0FBaUJDLEtBQWpCLEVBQXdCQyxNQUF4QixFQUFnQztBQUM1QixVQUFPQSxNQUFNLENBQUNDLElBQWQ7QUFDSSxTQUFLLGFBQUw7QUFDSSw2Q0FBWUYsS0FBWjtBQUFtQk4sZ0JBQVEsRUFBRU8sTUFBTSxDQUFDRSxPQUFwQztBQUE2Q1IsYUFBSyxFQUFFTSxNQUFNLENBQUNFO0FBQTNEOztBQUNKLFNBQUsseUJBQUw7QUFDSSxVQUFJQyxVQUFVLEdBQUcsRUFBakI7QUFDQUosV0FBSyxD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ZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJlZHVjZXIsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgdXNlTG9jYWxTdGF0ZSB9IGZyb20gJy4vTG9jYWxTdGF0ZSdcblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgICBoZWlnaHQ6IDUwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuYFxuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gICAgYXRobGV0ZXM6IFtdLFxuICAgIGluSXNvOiBbXSxcbiAgICBvbkRlY2s6IFtdLFxuICAgIGNsaW1iaW5nOiBbXSxcbiAgICBmaW5pc2hlZDogW10sXG59XG5cbmZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUsIGFjdGlvbikge1xuICAgIHN3aXRjaChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIFwic3RhcnQtcm91bmRcIjpcbiAgICAgICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBhdGhsZXRlczogYWN0aW9uLnBheWxvYWQsIGluSXNvOiBhY3Rpb24ucGF5bG9hZH07XG4gICAgICAgIGNhc2UgJ3JlbW92ZS1jbGltYmVyLWZyb20taXNvJzpcbiAgICAgICAgICAgIGxldCBjdXJyZW50SXNvID0gW11cbiAgICAgICAgICAgIHN0YXRlLmluSXNvLmZvckVhY2goY2xpbWJlciA9PiBjdXJyZW50SXNvLnB1c2goY2xpbWJlcikpXG4gICAgICAgICAgICBsZXQgbmV4dENsaW1iZXIgPSBjdXJyZW50SXNvLnNoaWZ0KClcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG5leHRDbGltYmVyKVxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBpbklzbzogY3VycmVudElzbyxcbiAgICAgICAgICAgICAgICBvbkRlY2s6IFsuLi5zdGF0ZS5vbkRlY2ssIG5leHRDbGltYmVyXVxuICAgICAgICAgICAgfTtcbiAgICAgICAgY2FzZSAndHJhbnNpdGlvbi1jbGltYmVycyc6XG4gICAgICAgICAgICBsZXQgY3VycmVudENsaW1iaW5nID0gW11cbiAgICAgICAgICAgIGxldCBjdXJyZW50T25EZWNrID0gW11cbiAgICAgICAgICAgIHN0YXRlLmNsaW1iaW5nLmZvckVhY2goY2xpbWJlciA9PiAoXG4gICAgICAgICAgICAgICAgY3VycmVudENsaW1iaW5nLnB1c2goY2xpbWJlcilcbiAgICAgICAgICAgICkpXG4gICAgICAgICAgICBzdGF0ZS5vbkRlY2suZm9yRWFjaChjbGltYmVyID0+IGN1cnJlbnRPbkRlY2sucHVzaChjbGltYmVyKSlcbiAgICAgICAgICAgIGN1cnJlbnRDbGltYmluZy5tYXAoY2xpbWJlciA9PiBjbGltYmVyLmN5Y2xlKCkpXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIGNsaW1iaW5nOiBjdXJyZW50T25EZWNrLFxuICAgICAgICAgICAgICAgIG9uRGVjazogY3VycmVudENsaW1iaW5nLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgY2FzZSAncmVzZXQnOlxuICAgICAgICAgICAgc3RhdGUgPSBpbml0aWFsU3RhdGVcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgYXRobGV0ZXM6IGFjdGlvbi5wYXlsb2FkLFxuICAgICAgICAgICAgICAgIGluSXNvOiBhY3Rpb24ucGF5bG9hZFxuICAgICAgICAgICAgfVxuICAgICAgICBkZWZhdWx0OiBcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGN5Y2xlQ2xpbWJlcnMoZGlzcGF0Y2gpIHtcbiAgICByZXR1cm4gbnVsbFxufVxuXG5jb25zdCBSb3VuZENvbnRyb2wgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBhdGhsZXRlcyB9ID0gdXNlTG9jYWxTdGF0ZSgpXG4gICAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKHJlZHVjZXIsIGluaXRpYWxTdGF0ZSlcbiAgICBcbiAgICByZXR1cm4gKFxuICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBkaXNwYXRjaCh7IHR5cGU6ICdyZXNldCcsIHBheWxvYWQ6IGF0aGxldGVzfSl9PlJlc2V0IFJvdW5kPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGRpc3BhdGNoKHsgdHlwZTogJ3N0YXJ0LXJvdW5kJywgcGF5bG9hZDogYXRobGV0ZXN9KX0+U3RhcnQgUm91bmQ8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gZGlzcGF0Y2goeyB0eXBlOiAncmVtb3ZlLWNsaW1iZXItZnJvbS1pc28nfSl9PkdldCBmaXJzdCBjbGltYmVyPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGRpc3BhdGNoKHsgdHlwZTogJ3RyYW5zaXRpb24tY2xpbWJlcnMnfSl9PkN5Y2xlIENsaW1iZXJzPC9idXR0b24+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuXG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBSb3VuZENvbnRyb2wiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Transition.jsx\n");

/***/ })

})