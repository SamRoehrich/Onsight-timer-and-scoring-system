webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/LocalState.js":
/*!**********************************!*\
  !*** ./components/LocalState.js ***!
  \**********************************/
/*! exports provided: LocalState, LocalStateContext, useLocalState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LocalState\", function() { return LocalState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LocalStateContext\", function() { return LocalStateContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useLocalState\", function() { return useLocalState; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/sam/Desktop/timer/next/components/LocalState.js\",\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nvar LocalStateContext = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"createContext\"])();\nvar LocalStateProvider = LocalStateContext.Provider;\n\nfunction LocalState(_ref) {\n  _s();\n\n  var children = _ref.children;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({}),\n      roundInformation = _useState[0],\n      setRoundInformation = _useState[1];\n\n  function setLocalStateRoundInformation(roundInfo) {\n    setRoundInformation(roundInfo);\n  }\n\n  var defaultValues = {\n    roundInformation: roundInformation,\n    setLocalStateRoundInformation: setLocalStateRoundInformation\n  };\n  return __jsx(LocalStateProvider, {\n    value: defaultValues,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 12\n    }\n  }, children);\n}\n\n_s(LocalState, \"Nwlih5VE1pGHZRsBLRr6UHyBQ1M=\");\n\n_c = LocalState;\n\nfunction useLocalState() {\n  _s2();\n\n  var all = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(LocalStateContext);\n  return all;\n}\n\n_s2(useLocalState, \"k0r6hllA0ZVFTbsvyQUS1AVLOSY=\");\n\n\n\nvar _c;\n\n$RefreshReg$(_c, \"LocalState\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xvY2FsU3RhdGUuanM/MjZkNiJdLCJuYW1lcyI6WyJMb2NhbFN0YXRlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJMb2NhbFN0YXRlUHJvdmlkZXIiLCJQcm92aWRlciIsIkxvY2FsU3RhdGUiLCJjaGlsZHJlbiIsInVzZVN0YXRlIiwicm91bmRJbmZvcm1hdGlvbiIsInNldFJvdW5kSW5mb3JtYXRpb24iLCJzZXRMb2NhbFN0YXRlUm91bmRJbmZvcm1hdGlvbiIsInJvdW5kSW5mbyIsImRlZmF1bHRWYWx1ZXMiLCJ1c2VMb2NhbFN0YXRlIiwiYWxsIiwidXNlQ29udGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQSxJQUFNQSxpQkFBaUIsR0FBR0MsMkRBQWEsRUFBdkM7QUFFQSxJQUFNQyxrQkFBa0IsR0FBR0YsaUJBQWlCLENBQUNHLFFBQTdDOztBQUVBLFNBQVNDLFVBQVQsT0FBZ0M7QUFBQTs7QUFBQSxNQUFYQyxRQUFXLFFBQVhBLFFBQVc7O0FBQUEsa0JBQ29CQyxzREFBUSxDQUFDLEVBQUQsQ0FENUI7QUFBQSxNQUNyQkMsZ0JBRHFCO0FBQUEsTUFDSEMsbUJBREc7O0FBRzVCLFdBQVNDLDZCQUFULENBQXVDQyxTQUF2QyxFQUFrRDtBQUM5Q0YsdUJBQW1CLENBQUNFLFNBQUQsQ0FBbkI7QUFDSDs7QUFFRCxNQUFNQyxhQUFhLEdBQUc7QUFDbEJKLG9CQUFnQixFQUFoQkEsZ0JBRGtCO0FBRWxCRSxpQ0FBNkIsRUFBN0JBO0FBRmtCLEdBQXRCO0FBS0EsU0FBTyxNQUFDLGtCQUFEO0FBQW9CLFNBQUssRUFBRUUsYUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNNTixRQUROLENBQVA7QUFHSDs7R0FmUUQsVTs7S0FBQUEsVTs7QUFpQlQsU0FBU1EsYUFBVCxHQUF5QjtBQUFBOztBQUNyQixNQUFNQyxHQUFHLEdBQUdDLHdEQUFVLENBQUNkLGlCQUFELENBQXRCO0FBQ0EsU0FBT2EsR0FBUDtBQUNIOztJQUhRRCxhOztBQUtUIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Mb2NhbFN0YXRlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcblxuY29uc3QgTG9jYWxTdGF0ZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KClcblxuY29uc3QgTG9jYWxTdGF0ZVByb3ZpZGVyID0gTG9jYWxTdGF0ZUNvbnRleHQuUHJvdmlkZXJcblxuZnVuY3Rpb24gTG9jYWxTdGF0ZSh7Y2hpbGRyZW59KSB7XG4gICAgY29uc3QgW3JvdW5kSW5mb3JtYXRpb24sIHNldFJvdW5kSW5mb3JtYXRpb25dID0gdXNlU3RhdGUoeyB9KVxuXG4gICAgZnVuY3Rpb24gc2V0TG9jYWxTdGF0ZVJvdW5kSW5mb3JtYXRpb24ocm91bmRJbmZvKSB7XG4gICAgICAgIHNldFJvdW5kSW5mb3JtYXRpb24ocm91bmRJbmZvKVxuICAgIH1cblxuICAgIGNvbnN0IGRlZmF1bHRWYWx1ZXMgPSB7XG4gICAgICAgIHJvdW5kSW5mb3JtYXRpb24sXG4gICAgICAgIHNldExvY2FsU3RhdGVSb3VuZEluZm9ybWF0aW9uXG4gICAgfVxuXG4gICAgcmV0dXJuIDxMb2NhbFN0YXRlUHJvdmlkZXIgdmFsdWU9e2RlZmF1bHRWYWx1ZXN9PlxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICAgIDwvTG9jYWxTdGF0ZVByb3ZpZGVyPlxufVxuXG5mdW5jdGlvbiB1c2VMb2NhbFN0YXRlKCkge1xuICAgIGNvbnN0IGFsbCA9IHVzZUNvbnRleHQoTG9jYWxTdGF0ZUNvbnRleHQpXG4gICAgcmV0dXJuIGFsbFxufVxuXG5leHBvcnQgeyBMb2NhbFN0YXRlLCBMb2NhbFN0YXRlQ29udGV4dCwgdXNlTG9jYWxTdGF0ZSB9Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/LocalState.js\n");

/***/ })

})