webpackHotUpdate("static/development/pages/timer.js",{

/***/ "./components/ScoreCard.jsx":
/*!**********************************!*\
  !*** ./components/ScoreCard.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/sam/Desktop/timer/next/components/ScoreCard.jsx\";\n\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\nvar ScoreCard = function ScoreCard(_ref) {\n  var athlete = _ref.athlete;\n\n  var logAttempt = function logAttempt(score) {\n    athlete.scores[athlete.bouldersClimbed].attempts.push({\n      attempt: athlete.scores[athlete.bouldersClimbed].attempts.length() + 1,\n      score: score\n    });\n  };\n\n  return __jsx(\"div\", {\n    className: \"jsx-1147449248\" + \" \" + 'score-card',\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"jsx-1147449248\" + \" \" + 'score-card-banner',\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 13\n    }\n  }, __jsx(\"p\", {\n    className: \"jsx-1147449248\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 17\n    }\n  }, athlete.name)), __jsx(\"span\", {\n    className: \"jsx-1147449248\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 13\n    }\n  }, \"Score per attempt\"), __jsx(\"div\", {\n    className: \"jsx-1147449248\" + \" \" + 'score-card-buttons',\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 13\n    }\n  }, __jsx(\"button\", {\n    onClick: function onClick() {\n      return logAttempt(5);\n    },\n    className: \"jsx-1147449248\" + \" \" + 'score-card-button',\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 17\n    }\n  }, \"5\"), __jsx(\"button\", {\n    onClick: function onClick() {\n      return logAttempt(10);\n    },\n    className: \"jsx-1147449248\" + \" \" + 'score-card-button',\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 17\n    }\n  }, \"10\"), __jsx(\"button\", {\n    onClick: function onClick() {\n      return logAttempt(15);\n    },\n    className: \"jsx-1147449248\" + \" \" + 'score-card-button',\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 17\n    }\n  }, \"15\"), __jsx(\"button\", {\n    onClick: function onClick() {\n      return logAttempt(25);\n    },\n    className: \"jsx-1147449248\" + \" \" + 'score-card-button',\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 17\n    }\n  }, \"25\")), __jsx(\"div\", {\n    className: \"jsx-1147449248\" + \" \" + 'boulder-results',\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 13\n    }\n  }, __jsx(\"p\", {\n    className: \"jsx-1147449248\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 17\n    }\n  }, \"Score\"), __jsx(\"p\", {\n    className: \"jsx-1147449248\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 17\n    }\n  }, \"Attempts to highpoint\")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {\n    id: \"1147449248\",\n    __self: _this\n  }, \".score-card.jsx-1147449248{padding:10px 10px;border:1px solid black;width:20vw;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW0vRGVza3RvcC90aW1lci9uZXh0L2NvbXBvbmVudHMvU2NvcmVDYXJkLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwQndCLEFBRzJDLGtCQUNLLHVCQUNaLFdBQ0MsWUFDQywwRUFDTSw2RkFDRyw4RUFDMUIiLCJmaWxlIjoiL1VzZXJzL3NhbS9EZXNrdG9wL3RpbWVyL25leHQvY29tcG9uZW50cy9TY29yZUNhcmQuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBTY29yZUNhcmQgPSAoeyBhdGhsZXRlIH0pID0+IHtcblxuICAgIGNvbnN0IGxvZ0F0dGVtcHQgPSAoc2NvcmUpID0+IHtcbiAgICAgICAgYXRobGV0ZS5zY29yZXNbYXRobGV0ZS5ib3VsZGVyc0NsaW1iZWRdLmF0dGVtcHRzLnB1c2goe1xuICAgICAgICAgICAgYXR0ZW1wdDogYXRobGV0ZS5zY29yZXNbYXRobGV0ZS5ib3VsZGVyc0NsaW1iZWRdLmF0dGVtcHRzLmxlbmd0aCgpICsgMSxcbiAgICAgICAgICAgIHNjb3JlXG4gICAgICAgIH0pXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzY29yZS1jYXJkJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzY29yZS1jYXJkLWJhbm5lcic+XG4gICAgICAgICAgICAgICAgPHA+e2F0aGxldGUubmFtZX08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxzcGFuPlNjb3JlIHBlciBhdHRlbXB0PC9zcGFuPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Njb3JlLWNhcmQtYnV0dG9ucyc+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J3Njb3JlLWNhcmQtYnV0dG9uJyBvbkNsaWNrPXsoKSA9PiBsb2dBdHRlbXB0KDUpfT41PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J3Njb3JlLWNhcmQtYnV0dG9uJyBvbkNsaWNrPXsoKSA9PiBsb2dBdHRlbXB0KDEwKX0+MTA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nc2NvcmUtY2FyZC1idXR0b24nIG9uQ2xpY2s9eygpID0+IGxvZ0F0dGVtcHQoMTUpfT4xNTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdzY29yZS1jYXJkLWJ1dHRvbicgb25DbGljaz17KCkgPT4gbG9nQXR0ZW1wdCgyNSl9PjI1PC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdib3VsZGVyLXJlc3VsdHMnPlxuICAgICAgICAgICAgICAgIDxwPlNjb3JlPC9wPlxuICAgICAgICAgICAgICAgIDxwPkF0dGVtcHRzIHRvIGhpZ2hwb2ludDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgIC5zY29yZS1jYXJkIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwdnc7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTY29yZUNhcmQiXX0= */\\n/*@ sourceURL=/Users/sam/Desktop/timer/next/components/ScoreCard.jsx */\"));\n};\n\n_c = ScoreCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ScoreCard);\n\nvar _c;\n\n$RefreshReg$(_c, \"ScoreCard\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Njb3JlQ2FyZC5qc3g/YjUxZiJdLCJuYW1lcyI6WyJTY29yZUNhcmQiLCJhdGhsZXRlIiwibG9nQXR0ZW1wdCIsInNjb3JlIiwic2NvcmVzIiwiYm91bGRlcnNDbGltYmVkIiwiYXR0ZW1wdHMiLCJwdXNoIiwiYXR0ZW1wdCIsImxlbmd0aCIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksT0FBaUI7QUFBQSxNQUFkQyxPQUFjLFFBQWRBLE9BQWM7O0FBRS9CLE1BQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLEtBQUQsRUFBVztBQUMxQkYsV0FBTyxDQUFDRyxNQUFSLENBQWVILE9BQU8sQ0FBQ0ksZUFBdkIsRUFBd0NDLFFBQXhDLENBQWlEQyxJQUFqRCxDQUFzRDtBQUNsREMsYUFBTyxFQUFFUCxPQUFPLENBQUNHLE1BQVIsQ0FBZUgsT0FBTyxDQUFDSSxlQUF2QixFQUF3Q0MsUUFBeEMsQ0FBaURHLE1BQWpELEtBQTRELENBRG5CO0FBRWxETixXQUFLLEVBQUxBO0FBRmtELEtBQXREO0FBSUgsR0FMRDs7QUFNQSxTQUNJO0FBQUEsd0NBQWUsWUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQSx3Q0FBZSxtQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUlGLE9BQU8sQ0FBQ1MsSUFBWixDQURKLENBREosRUFJSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBSkosRUFLSTtBQUFBLHdDQUFlLG9CQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFzQyxXQUFPLEVBQUU7QUFBQSxhQUFNUixVQUFVLENBQUMsQ0FBRCxDQUFoQjtBQUFBLEtBQS9DO0FBQUEsd0NBQWtCLG1CQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBREosRUFFSTtBQUFzQyxXQUFPLEVBQUU7QUFBQSxhQUFNQSxVQUFVLENBQUMsRUFBRCxDQUFoQjtBQUFBLEtBQS9DO0FBQUEsd0NBQWtCLG1CQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBRkosRUFHSTtBQUFzQyxXQUFPLEVBQUU7QUFBQSxhQUFNQSxVQUFVLENBQUMsRUFBRCxDQUFoQjtBQUFBLEtBQS9DO0FBQUEsd0NBQWtCLG1CQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBSEosRUFJSTtBQUFzQyxXQUFPLEVBQUU7QUFBQSxhQUFNQSxVQUFVLENBQUMsRUFBRCxDQUFoQjtBQUFBLEtBQS9DO0FBQUEsd0NBQWtCLG1CQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBSkosQ0FMSixFQVdJO0FBQUEsd0NBQWUsaUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLEVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQUZKLENBWEo7QUFBQTtBQUFBO0FBQUEsZzNGQURKO0FBNkJILENBckNEOztLQUFNRixTO0FBdUNTQSx3RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvU2NvcmVDYXJkLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcblxuY29uc3QgU2NvcmVDYXJkID0gKHsgYXRobGV0ZSB9KSA9PiB7XG5cbiAgICBjb25zdCBsb2dBdHRlbXB0ID0gKHNjb3JlKSA9PiB7XG4gICAgICAgIGF0aGxldGUuc2NvcmVzW2F0aGxldGUuYm91bGRlcnNDbGltYmVkXS5hdHRlbXB0cy5wdXNoKHtcbiAgICAgICAgICAgIGF0dGVtcHQ6IGF0aGxldGUuc2NvcmVzW2F0aGxldGUuYm91bGRlcnNDbGltYmVkXS5hdHRlbXB0cy5sZW5ndGgoKSArIDEsXG4gICAgICAgICAgICBzY29yZVxuICAgICAgICB9KVxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2NvcmUtY2FyZCc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2NvcmUtY2FyZC1iYW5uZXInPlxuICAgICAgICAgICAgICAgIDxwPnthdGhsZXRlLm5hbWV9PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8c3Bhbj5TY29yZSBwZXIgYXR0ZW1wdDwvc3Bhbj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzY29yZS1jYXJkLWJ1dHRvbnMnPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdzY29yZS1jYXJkLWJ1dHRvbicgb25DbGljaz17KCkgPT4gbG9nQXR0ZW1wdCg1KX0+NTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdzY29yZS1jYXJkLWJ1dHRvbicgb25DbGljaz17KCkgPT4gbG9nQXR0ZW1wdCgxMCl9PjEwPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J3Njb3JlLWNhcmQtYnV0dG9uJyBvbkNsaWNrPXsoKSA9PiBsb2dBdHRlbXB0KDE1KX0+MTU8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nc2NvcmUtY2FyZC1idXR0b24nIG9uQ2xpY2s9eygpID0+IGxvZ0F0dGVtcHQoMjUpfT4yNTwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYm91bGRlci1yZXN1bHRzJz5cbiAgICAgICAgICAgICAgICA8cD5TY29yZTwvcD5cbiAgICAgICAgICAgICAgICA8cD5BdHRlbXB0cyB0byBoaWdocG9pbnQ8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAuc2NvcmUtY2FyZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMHZ3O1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2NvcmVDYXJkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ScoreCard.jsx\n");

/***/ })

})