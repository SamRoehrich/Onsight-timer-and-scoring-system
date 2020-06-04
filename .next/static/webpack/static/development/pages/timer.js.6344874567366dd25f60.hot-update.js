webpackHotUpdate("static/development/pages/timer.js",{

/***/ "./components/Scoring.jsx":
/*!********************************!*\
  !*** ./components/Scoring.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _LocalState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LocalState */ \"./components/LocalState.js\");\n/* harmony import */ var _ScoreCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ScoreCard */ \"./components/ScoreCard.jsx\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/sam/Desktop/timer/next/components/Scoring.jsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nvar Scoring = function Scoring(_ref) {\n  _s();\n\n  var activeClimbers = _ref.activeClimbers;\n\n  var _useLocalState = Object(_LocalState__WEBPACK_IMPORTED_MODULE_1__[\"useLocalState\"])(),\n      round = _useLocalState.round;\n\n  round.startRound();\n  console.log(round);\n  return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 9\n    }\n  }, activeClimbers.map(function (athlete) {\n    return __jsx(_ScoreCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      athlete: athlete,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 47\n      }\n    });\n  }));\n};\n\n_s(Scoring, \"ntVT7yic8r8uMWroSeA86iK64ZQ=\", false, function () {\n  return [_LocalState__WEBPACK_IMPORTED_MODULE_1__[\"useLocalState\"]];\n});\n\n_c = Scoring;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Scoring); //get index of active athlete from timer page and render scorecard for each athlete based on that index\n\nvar _c;\n\n$RefreshReg$(_c, \"Scoring\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Njb3JpbmcuanN4P2ExOTYiXSwibmFtZXMiOlsiU2NvcmluZyIsImFjdGl2ZUNsaW1iZXJzIiwidXNlTG9jYWxTdGF0ZSIsInJvdW5kIiwic3RhcnRSb3VuZCIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJhdGhsZXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBRUE7O0FBRUEsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsT0FBd0I7QUFBQTs7QUFBQSxNQUFyQkMsY0FBcUIsUUFBckJBLGNBQXFCOztBQUFBLHVCQUVsQkMsaUVBQWEsRUFGSztBQUFBLE1BRTVCQyxLQUY0QixrQkFFNUJBLEtBRjRCOztBQUdwQ0EsT0FBSyxDQUFDQyxVQUFOO0FBQ0FDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZSCxLQUFaO0FBQ0EsU0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRVFGLGNBQWMsQ0FBQ00sR0FBZixDQUFtQixVQUFBQyxPQUFPO0FBQUEsV0FBSSxNQUFDLGtEQUFEO0FBQVcsYUFBTyxFQUFFQSxPQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQUo7QUFBQSxHQUExQixDQUZSLENBREo7QUFPSCxDQVpEOztHQUFNUixPO1VBRWdCRSx5RDs7O0tBRmhCRixPO0FBY1NBLHNFQUFmLEUsQ0FFQSIsImZpbGUiOiIuL2NvbXBvbmVudHMvU2NvcmluZy5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VMb2NhbFN0YXRlIH0gZnJvbSAnLi9Mb2NhbFN0YXRlJ1xuXG5pbXBvcnQgU2NvcmVDYXJkIGZyb20gXCIuL1Njb3JlQ2FyZFwiXG5cbmNvbnN0IFNjb3JpbmcgPSAoeyBhY3RpdmVDbGltYmVycyB9KSA9PiB7XG5cbiAgICBjb25zdCB7IHJvdW5kIH0gPSB1c2VMb2NhbFN0YXRlKClcbiAgICByb3VuZC5zdGFydFJvdW5kKClcbiAgICBjb25zb2xlLmxvZyhyb3VuZClcbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYWN0aXZlQ2xpbWJlcnMubWFwKGF0aGxldGUgPT4gPFNjb3JlQ2FyZCBhdGhsZXRlPXthdGhsZXRlfSAvPilcbiAgICAgICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTY29yaW5nXG5cbi8vZ2V0IGluZGV4IG9mIGFjdGl2ZSBhdGhsZXRlIGZyb20gdGltZXIgcGFnZSBhbmQgcmVuZGVyIHNjb3JlY2FyZCBmb3IgZWFjaCBhdGhsZXRlIGJhc2VkIG9uIHRoYXQgaW5kZXgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Scoring.jsx\n");

/***/ })

})