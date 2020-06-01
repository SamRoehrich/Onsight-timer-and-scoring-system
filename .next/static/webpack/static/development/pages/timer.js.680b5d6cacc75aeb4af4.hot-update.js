webpackHotUpdate("static/development/pages/timer.js",{

/***/ "./components/Scoring.jsx":
/*!********************************!*\
  !*** ./components/Scoring.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _LocalState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LocalState */ \"./components/LocalState.js\");\n/* harmony import */ var _ScoreCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ScoreCard */ \"./components/ScoreCard.jsx\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/sam/Desktop/timer/next/components/Scoring.jsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nvar Scoring = function Scoring(_ref) {\n  _s();\n\n  var activeClimbers = _ref.activeClimbers;\n  var athletes = [];\n\n  var _useLocalState = Object(_LocalState__WEBPACK_IMPORTED_MODULE_1__[\"useLocalState\"])(),\n      roundInformation = _useLocalState.roundInformation;\n\n  var test = roundInformation.athletes.map(function (athlete, idx) {\n    if (activeClimbers[idx] !== undefined) {\n      athletes.push(athlete);\n    }\n  });\n  console.log(athletes);\n  return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 9\n    }\n  }, __jsx(_ScoreCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 13\n    }\n  }));\n};\n\n_s(Scoring, \"yTRKCalA+0RToLkLlem1LDX4vMc=\", false, function () {\n  return [_LocalState__WEBPACK_IMPORTED_MODULE_1__[\"useLocalState\"]];\n});\n\n_c = Scoring;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Scoring); //get index of active athlete from timer page and render scorecard for each athlete based on that index\n\nvar _c;\n\n$RefreshReg$(_c, \"Scoring\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Njb3JpbmcuanN4P2ExOTYiXSwibmFtZXMiOlsiU2NvcmluZyIsImFjdGl2ZUNsaW1iZXJzIiwiYXRobGV0ZXMiLCJ1c2VMb2NhbFN0YXRlIiwicm91bmRJbmZvcm1hdGlvbiIsInRlc3QiLCJtYXAiLCJhdGhsZXRlIiwiaWR4IiwidW5kZWZpbmVkIiwicHVzaCIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTs7QUFFQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxPQUF3QjtBQUFBOztBQUFBLE1BQXJCQyxjQUFxQixRQUFyQkEsY0FBcUI7QUFFcEMsTUFBSUMsUUFBUSxHQUFHLEVBQWY7O0FBRm9DLHVCQUdQQyxpRUFBYSxFQUhOO0FBQUEsTUFHNUJDLGdCQUg0QixrQkFHNUJBLGdCQUg0Qjs7QUFJcEMsTUFBTUMsSUFBSSxHQUFHRCxnQkFBZ0IsQ0FBQ0YsUUFBakIsQ0FBMEJJLEdBQTFCLENBQThCLFVBQUNDLE9BQUQsRUFBVUMsR0FBVixFQUFrQjtBQUFDLFFBQUdQLGNBQWMsQ0FBQ08sR0FBRCxDQUFkLEtBQXdCQyxTQUEzQixFQUFxQztBQUFDUCxjQUFRLENBQUNRLElBQVQsQ0FBY0gsT0FBZDtBQUF1QjtBQUFDLEdBQS9HLENBQWI7QUFFQUksU0FBTyxDQUFDQyxHQUFSLENBQVlWLFFBQVo7QUFFQSxTQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLGtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQURKO0FBS0gsQ0FiRDs7R0FBTUYsTztVQUcyQkcseUQ7OztLQUgzQkgsTztBQWVTQSxzRUFBZixFLENBRUEiLCJmaWxlIjoiLi9jb21wb25lbnRzL1Njb3JpbmcuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlTG9jYWxTdGF0ZSB9IGZyb20gJy4vTG9jYWxTdGF0ZSdcblxuaW1wb3J0IFNjb3JlQ2FyZCBmcm9tIFwiLi9TY29yZUNhcmRcIlxuXG5jb25zdCBTY29yaW5nID0gKHsgYWN0aXZlQ2xpbWJlcnMgfSkgPT4ge1xuXG4gICAgbGV0IGF0aGxldGVzID0gW11cbiAgICBjb25zdCB7IHJvdW5kSW5mb3JtYXRpb24gfSA9IHVzZUxvY2FsU3RhdGUoKVxuICAgIGNvbnN0IHRlc3QgPSByb3VuZEluZm9ybWF0aW9uLmF0aGxldGVzLm1hcCgoYXRobGV0ZSwgaWR4KSA9PiB7aWYoYWN0aXZlQ2xpbWJlcnNbaWR4XSAhPT0gdW5kZWZpbmVkKXthdGhsZXRlcy5wdXNoKGF0aGxldGUpfX0pXG4gICAgXG4gICAgY29uc29sZS5sb2coYXRobGV0ZXMpXG4gICAgXG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPFNjb3JlQ2FyZC8+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2NvcmluZ1xuXG4vL2dldCBpbmRleCBvZiBhY3RpdmUgYXRobGV0ZSBmcm9tIHRpbWVyIHBhZ2UgYW5kIHJlbmRlciBzY29yZWNhcmQgZm9yIGVhY2ggYXRobGV0ZSBiYXNlZCBvbiB0aGF0IGluZGV4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Scoring.jsx\n");

/***/ })

})