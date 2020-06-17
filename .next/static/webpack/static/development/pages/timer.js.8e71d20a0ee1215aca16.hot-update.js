webpackHotUpdate("static/development/pages/timer.js",{

/***/ "./components/Transition.jsx":
/*!***********************************!*\
  !*** ./components/Transition.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _LocalState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LocalState */ \"./components/LocalState.js\");\n/* harmony import */ var _ScoreCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ScoreCard */ \"./components/ScoreCard.jsx\");\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/sam/Desktop/timer/next/components/Transition.jsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__[\"default\"])([\"\\n    height: 50%;\\n    width: 100%;\\n    display: flex;\\n    justify-content: center;\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div(_templateObject());\n_c = Container;\nvar initialState = {\n  athletes: [],\n  inIso: [],\n  onDeck: [],\n  climbing: [],\n  finished: []\n};\n\nfunction reducer(state, action) {\n  switch (action.type) {\n    case \"start-round\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        athletes: action.payload,\n        inIso: action.payload\n      });\n\n    case 'remove-climber-from-iso':\n      var currentIso = [];\n      state.inIso.forEach(function (climber) {\n        return currentIso.push(climber);\n      });\n      var nextClimber = currentIso.shift();\n      console.log(nextClimber);\n      return _objectSpread(_objectSpread({}, state), {}, {\n        inIso: currentIso,\n        onDeck: [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(state.onDeck), [nextClimber])\n      });\n\n    case 'transition-climbers':\n      var currentClimbing = [];\n      var modifiedClimbing = [];\n      var currentOnDeck = [];\n      var currentFinished = state.finished;\n      currentIso = []; //fill temp arrays\n\n      state.climbing.forEach(function (climber) {\n        return currentClimbing.push(climber);\n      });\n      state.onDeck.forEach(function (climber) {\n        return currentOnDeck.push(climber);\n      });\n      state.inIso.forEach(function (climber) {\n        return currentIso.push(climber);\n      }); //modify current climbers\n\n      currentClimbing.map(function (climber) {\n        return climber.cycle();\n      });\n      currentClimbing.forEach(function (climber) {\n        if (climber.bouldersClimbed == 4) {\n          currentFinished = [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(currentFinished), [climber]);\n        } else {\n          modifiedClimbing.push(climber);\n        }\n      }); //get next climber\n\n      var next = currentIso.shift();\n\n      if (next !== undefined) {\n        modifiedClimbing = [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(modifiedClimbing), [next]);\n      }\n\n      return _objectSpread(_objectSpread({}, state), {}, {\n        climbing: currentOnDeck,\n        onDeck: modifiedClimbing,\n        inIso: currentIso,\n        finished: currentFinished\n      });\n\n    case 'reset':\n      state = initialState;\n      var modifiedAthletes = action.payload.forEach(function (athlete) {\n        return athlete.bouldersClimbed == 0;\n      });\n      return _objectSpread(_objectSpread({}, state), {}, {\n        athletes: modifiedAthletes,\n        inIso: modifiedAthletes\n      });\n\n    default:\n      return state;\n  }\n}\n\nvar RoundControl = function RoundControl() {\n  _s();\n\n  var _useLocalState = Object(_LocalState__WEBPACK_IMPORTED_MODULE_5__[\"useLocalState\"])(),\n      athletes = _useLocalState.athletes;\n\n  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useReducer\"])(reducer, initialState),\n      state = _useReducer[0],\n      dispatch = _useReducer[1];\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(Container, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 9\n    }\n  }, __jsx(\"button\", {\n    onClick: function onClick() {\n      return dispatch({\n        type: 'reset',\n        payload: athletes\n      });\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 13\n    }\n  }, \"Reset Round\"), __jsx(\"button\", {\n    onClick: function onClick() {\n      return dispatch({\n        type: 'start-round',\n        payload: athletes\n      });\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 13\n    }\n  }, \"Start Round\"), __jsx(\"button\", {\n    onClick: function onClick() {\n      return dispatch({\n        type: 'remove-climber-from-iso'\n      });\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 13\n    }\n  }, \"Get first climber\"), __jsx(\"button\", {\n    onClick: function onClick() {\n      return dispatch({\n        type: 'transition-climbers'\n      });\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 13\n    }\n  }, \"Cycle Climbers\")), __jsx(Container, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 9\n    }\n  }, state.climbing.length !== 0 && state.climbing.map(function (climber) {\n    return __jsx(_ScoreCard__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      athlete: climber,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 95,\n        columnNumber: 17\n      }\n    });\n  })));\n};\n\n_s(RoundControl, \"eDe+abGvuWB9YzpQcOGABc9l/gc=\", false, function () {\n  return [_LocalState__WEBPACK_IMPORTED_MODULE_5__[\"useLocalState\"]];\n});\n\n_c2 = RoundControl;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RoundControl);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Container\");\n$RefreshReg$(_c2, \"RoundControl\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1RyYW5zaXRpb24uanN4P2E3MGYiXSwibmFtZXMiOlsiQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwiaW5pdGlhbFN0YXRlIiwiYXRobGV0ZXMiLCJpbklzbyIsIm9uRGVjayIsImNsaW1iaW5nIiwiZmluaXNoZWQiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwicGF5bG9hZCIsImN1cnJlbnRJc28iLCJmb3JFYWNoIiwiY2xpbWJlciIsInB1c2giLCJuZXh0Q2xpbWJlciIsInNoaWZ0IiwiY29uc29sZSIsImxvZyIsImN1cnJlbnRDbGltYmluZyIsIm1vZGlmaWVkQ2xpbWJpbmciLCJjdXJyZW50T25EZWNrIiwiY3VycmVudEZpbmlzaGVkIiwibWFwIiwiY3ljbGUiLCJib3VsZGVyc0NsaW1iZWQiLCJuZXh0IiwidW5kZWZpbmVkIiwibW9kaWZpZWRBdGhsZXRlcyIsImF0aGxldGUiLCJSb3VuZENvbnRyb2wiLCJ1c2VMb2NhbFN0YXRlIiwidXNlUmVkdWNlciIsImRpc3BhdGNoIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLHlEQUFNLENBQUNDLEdBQVYsbUJBQWY7S0FBTUYsUztBQU9OLElBQU1HLFlBQVksR0FBRztBQUNqQkMsVUFBUSxFQUFFLEVBRE87QUFFakJDLE9BQUssRUFBRSxFQUZVO0FBR2pCQyxRQUFNLEVBQUUsRUFIUztBQUlqQkMsVUFBUSxFQUFFLEVBSk87QUFLakJDLFVBQVEsRUFBRTtBQUxPLENBQXJCOztBQVFBLFNBQVNDLE9BQVQsQ0FBaUJDLEtBQWpCLEVBQXdCQyxNQUF4QixFQUFnQztBQUM1QixVQUFPQSxNQUFNLENBQUNDLElBQWQ7QUFDSSxTQUFLLGFBQUw7QUFDSSw2Q0FBWUYsS0FBWjtBQUFtQk4sZ0JBQVEsRUFBRU8sTUFBTSxD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LE1BRHNCO0FBQUEsR0FBMUIsQ0FISixDQVBBLENBREo7QUFrQkgsQ0F0QkQ7O0dBQU1pQixZO1VBQ21CQyx5RDs7O01BRG5CRCxZO0FBd0JTQSwyRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvVHJhbnNpdGlvbi5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSZWR1Y2VyLCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCB7IHVzZUxvY2FsU3RhdGUgfSBmcm9tICcuL0xvY2FsU3RhdGUnXG5pbXBvcnQgU2NvcmVDYXJkIGZyb20gJy4vU2NvcmVDYXJkJ1xuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICAgIGhlaWdodDogNTAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5gXG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgICBhdGhsZXRlczogW10sXG4gICAgaW5Jc286IFtdLFxuICAgIG9uRGVjazogW10sXG4gICAgY2xpbWJpbmc6IFtdLFxuICAgIGZpbmlzaGVkOiBbXSxcbn1cblxuZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSwgYWN0aW9uKSB7XG4gICAgc3dpdGNoKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgXCJzdGFydC1yb3VuZFwiOlxuICAgICAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGF0aGxldGVzOiBhY3Rpb24ucGF5bG9hZCwgaW5Jc286IGFjdGlvbi5wYXlsb2FkfTtcbiAgICAgICAgY2FzZSAncmVtb3ZlLWNsaW1iZXItZnJvbS1pc28nOlxuICAgICAgICAgICAgbGV0IGN1cnJlbnRJc28gPSBbXVxuICAgICAgICAgICAgc3RhdGUuaW5Jc28uZm9yRWFjaChjbGltYmVyID0+IGN1cnJlbnRJc28ucHVzaChjbGltYmVyKSlcbiAgICAgICAgICAgIGxldCBuZXh0Q2xpbWJlciA9IGN1cnJlbnRJc28uc2hpZnQoKVxuICAgICAgICAgICAgY29uc29sZS5sb2cobmV4dENsaW1iZXIpXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIGluSXNvOiBjdXJyZW50SXNvLFxuICAgICAgICAgICAgICAgIG9uRGVjazogWy4uLnN0YXRlLm9uRGVjaywgbmV4dENsaW1iZXJdXG4gICAgICAgICAgICB9O1xuICAgICAgICBjYXNlICd0cmFuc2l0aW9uLWNsaW1iZXJzJzpcbiAgICAgICAgICAgIGxldCBjdXJyZW50Q2xpbWJpbmcgPSBbXVxuICAgICAgICAgICAgbGV0IG1vZGlmaWVkQ2xpbWJpbmcgPSBbXVxuICAgICAgICAgICAgbGV0IGN1cnJlbnRPbkRlY2sgPSBbXVxuICAgICAgICAgICAgbGV0IGN1cnJlbnRGaW5pc2hlZCA9IHN0YXRlLmZpbmlzaGVkXG4gICAgICAgICAgICBjdXJyZW50SXNvID0gW11cbiAgICAgICAgICAgIC8vZmlsbCB0ZW1wIGFycmF5c1xuICAgICAgICAgICAgc3RhdGUuY2xpbWJpbmcuZm9yRWFjaChjbGltYmVyID0+IGN1cnJlbnRDbGltYmluZy5wdXNoKGNsaW1iZXIpKVxuICAgICAgICAgICAgc3RhdGUub25EZWNrLmZvckVhY2goY2xpbWJlciA9PiBjdXJyZW50T25EZWNrLnB1c2goY2xpbWJlcikpXG4gICAgICAgICAgICBzdGF0ZS5pbklzby5mb3JFYWNoKGNsaW1iZXIgPT4gY3VycmVudElzby5wdXNoKGNsaW1iZXIpKVxuICAgICAgICAgICAgLy9tb2RpZnkgY3VycmVudCBjbGltYmVyc1xuICAgICAgICAgICAgY3VycmVudENsaW1iaW5nLm1hcChjbGltYmVyID0+IGNsaW1iZXIuY3ljbGUoKSlcbiAgICAgICAgICAgIGN1cnJlbnRDbGltYmluZy5mb3JFYWNoKGNsaW1iZXIgPT4ge1xuICAgICAgICAgICAgICAgIGlmKGNsaW1iZXIuYm91bGRlcnNDbGltYmVkID09IDQpIHtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEZpbmlzaGVkID0gWy4uLmN1cnJlbnRGaW5pc2hlZCwgY2xpbWJlcl1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBtb2RpZmllZENsaW1iaW5nLnB1c2goY2xpbWJlcilcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLy9nZXQgbmV4dCBjbGltYmVyXG4gICAgICAgICAgICBsZXQgbmV4dCA9IGN1cnJlbnRJc28uc2hpZnQoKVxuICAgICAgICAgICAgaWYobmV4dCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgbW9kaWZpZWRDbGltYmluZyA9IFsuLi5tb2RpZmllZENsaW1iaW5nLCBuZXh0XVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBjbGltYmluZzogY3VycmVudE9uRGVjayxcbiAgICAgICAgICAgICAgICBvbkRlY2s6IG1vZGlmaWVkQ2xpbWJpbmcsXG4gICAgICAgICAgICAgICAgaW5Jc286IGN1cnJlbnRJc28sXG4gICAgICAgICAgICAgICAgZmluaXNoZWQ6IGN1cnJlbnRGaW5pc2hlZFxuICAgICAgICAgICAgfTtcbiAgICAgICAgY2FzZSAncmVzZXQnOlxuICAgICAgICAgICAgc3RhdGUgPSBpbml0aWFsU3RhdGVcbiAgICAgICAgICAgIGxldCBtb2RpZmllZEF0aGxldGVzID0gYWN0aW9uLnBheWxvYWQuZm9yRWFjaChhdGhsZXRlID0+IGF0aGxldGUuYm91bGRlcnNDbGltYmVkID09IDApXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIGF0aGxldGVzOiBtb2RpZmllZEF0aGxldGVzLFxuICAgICAgICAgICAgICAgIGluSXNvOiBtb2RpZmllZEF0aGxldGVzXG4gICAgICAgICAgICB9XG4gICAgICAgIGRlZmF1bHQ6IFxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbn1cblxuY29uc3QgUm91bmRDb250cm9sID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgYXRobGV0ZXMgfSA9IHVzZUxvY2FsU3RhdGUoKVxuICAgIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihyZWR1Y2VyLCBpbml0aWFsU3RhdGUpXG4gICAgXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gZGlzcGF0Y2goeyB0eXBlOiAncmVzZXQnLCBwYXlsb2FkOiBhdGhsZXRlc30pfT5SZXNldCBSb3VuZDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBkaXNwYXRjaCh7IHR5cGU6ICdzdGFydC1yb3VuZCcsIHBheWxvYWQ6IGF0aGxldGVzfSl9PlN0YXJ0IFJvdW5kPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGRpc3BhdGNoKHsgdHlwZTogJ3JlbW92ZS1jbGltYmVyLWZyb20taXNvJ30pfT5HZXQgZmlyc3QgY2xpbWJlcjwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBkaXNwYXRjaCh7IHR5cGU6ICd0cmFuc2l0aW9uLWNsaW1iZXJzJ30pfT5DeWNsZSBDbGltYmVyczwvYnV0dG9uPlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAge1xuICAgICAgICAgICAgc3RhdGUuY2xpbWJpbmcubGVuZ3RoICE9PSAwICYmIFxuICAgICAgICAgICAgc3RhdGUuY2xpbWJpbmcubWFwKGNsaW1iZXIgPT4gKFxuICAgICAgICAgICAgICAgIDxTY29yZUNhcmQgYXRobGV0ZT17Y2xpbWJlcn0gLz5cbiAgICAgICAgICAgICkpXG4gICAgICAgIH1cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUm91bmRDb250cm9sIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Transition.jsx\n");

/***/ })

})