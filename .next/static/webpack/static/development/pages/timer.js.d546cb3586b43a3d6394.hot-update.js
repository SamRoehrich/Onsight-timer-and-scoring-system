webpackHotUpdate("static/development/pages/timer.js",{

/***/ "./components/Timer.jsx":
/*!******************************!*\
  !*** ./components/Timer.jsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _LocalState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LocalState */ \"./components/LocalState.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/sam/Desktop/timer/next/components/Timer.jsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nvar Timer = function Timer() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(4),\n      minutes = _useState[0],\n      setMinutes = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(0),\n      seconds = _useState2[0],\n      setSeconds = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      isActive = _useState3[0],\n      setIsActive = _useState3[1];\n\n  var _useLocalState = Object(_LocalState__WEBPACK_IMPORTED_MODULE_1__[\"useLocalState\"])(),\n      roundInformation = _useLocalState.roundInformation;\n\n  var round = roundInformation.round;\n\n  function toggle() {\n    setIsActive(!isActive);\n    round.startRound();\n  }\n\n  function reset() {\n    setMinutes(4);\n    setSeconds(0);\n  } //timer control\n\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    if (isActive) {\n      if (seconds == 0) {\n        if (minutes > 0) {\n          setSeconds(59);\n          setMinutes(minutes - 1);\n        }\n\n        if (minutes == 0) {\n          reset();\n        }\n      }\n\n      if (seconds > 0) {\n        setTimeout(function () {\n          return setSeconds(seconds - 1);\n        }, 1000);\n      }\n    }\n  }, [isActive, seconds, minutes]);\n  return __jsx(\"div\", {\n    className: \"timer\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 5\n    }\n  }, __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 9\n    }\n  }, minutes, \" : \", seconds < 10 ? \"0\".concat(seconds) : seconds), __jsx(\"button\", {\n    onClick: toggle,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 9\n    }\n  }, isActive ? 'Stop' : 'Start'));\n};\n\n_s(Timer, \"tZmwjs2p8x0wqkGTkxScxmxPm48=\", false, function () {\n  return [_LocalState__WEBPACK_IMPORTED_MODULE_1__[\"useLocalState\"]];\n});\n\n_c = Timer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Timer);\n\nvar _c;\n\n$RefreshReg$(_c, \"Timer\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1RpbWVyLmpzeD9kNjkxIl0sIm5hbWVzIjpbIlRpbWVyIiwidXNlU3RhdGUiLCJtaW51dGVzIiwic2V0TWludXRlcyIsInNlY29uZHMiLCJzZXRTZWNvbmRzIiwiaXNBY3RpdmUiLCJzZXRJc0FjdGl2ZSIsInVzZUxvY2FsU3RhdGUiLCJyb3VuZEluZm9ybWF0aW9uIiwicm91bmQiLCJ0b2dnbGUiLCJzdGFydFJvdW5kIiwicmVzZXQiLCJ1c2VFZmZlY3QiLCJzZXRUaW1lb3V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFNO0FBQUE7O0FBQUEsa0JBRWNDLHNEQUFRLENBQUMsQ0FBRCxDQUZ0QjtBQUFBLE1BRVRDLE9BRlM7QUFBQSxNQUVBQyxVQUZBOztBQUFBLG1CQUdjRixzREFBUSxDQUFDLENBQUQsQ0FIdEI7QUFBQSxNQUdURyxPQUhTO0FBQUEsTUFHQUMsVUFIQTs7QUFBQSxtQkFJZ0JKLHNEQUFRLENBQUMsS0FBRCxDQUp4QjtBQUFBLE1BSVRLLFFBSlM7QUFBQSxNQUlDQyxXQUpEOztBQUFBLHVCQUthQyxpRUFBYSxFQUwxQjtBQUFBLE1BS1JDLGdCQUxRLGtCQUtSQSxnQkFMUTs7QUFBQSxNQU1SQyxLQU5RLEdBTUVELGdCQU5GLENBTVJDLEtBTlE7O0FBUWhCLFdBQVNDLE1BQVQsR0FBa0I7QUFDZEosZUFBVyxDQUFDLENBQUNELFFBQUYsQ0FBWDtBQUNBSSxTQUFLLENBQUNFLFVBQU47QUFDSDs7QUFFRCxXQUFTQyxLQUFULEdBQWlCO0FBQ2JWLGNBQVUsQ0FBQyxDQUFELENBQVY7QUFDQUUsY0FBVSxDQUFDLENBQUQsQ0FBVjtBQUNILEdBaEJlLENBa0JoQjs7O0FBQ0FTLHlEQUFTLENBQUMsWUFBTTtBQUNaLFFBQUdSLFFBQUgsRUFBYTtBQUNULFVBQUdGLE9BQU8sSUFBSSxDQUFkLEVBQWlCO0FBQ2IsWUFBR0YsT0FBTyxHQUFHLENBQWIsRUFBZ0I7QUFDWkcsb0JBQVUsQ0FBQyxFQUFELENBQVY7QUFDQUYsb0JBQVUsQ0FBQ0QsT0FBTyxHQUFHLENBQVgsQ0FBVjtBQUNIOztBQUNELFlBQUdBLE9BQU8sSUFBSSxDQUFkLEVBQWlCO0FBQ2JXLGVBQUs7QUFDUjtBQUNKOztBQUNELFVBQUdULE9BQU8sR0FBRyxDQUFiLEVBQWdCO0FBQ1pXLGtCQUFVLENBQUM7QUFBQSxpQkFBTVYsVUFBVSxDQUFDRCxPQUFPLEdBQUcsQ0FBWCxDQUFoQjtBQUFBLFNBQUQsRUFBZ0MsSUFBaEMsQ0FBVjtBQUNIO0FBQ0o7QUFDSixHQWZRLEVBZU4sQ0FBQ0UsUUFBRCxFQUFXRixPQUFYLEVBQW9CRixPQUFwQixDQWZNLENBQVQ7QUFpQkEsU0FDQTtBQUFLLGFBQVMsRUFBQyxPQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUtBLE9BQUwsU0FBaUJFLE9BQU8sR0FBRyxFQUFWLGNBQW1CQSxPQUFuQixJQUErQkEsT0FBaEQsQ0FESixFQUVJO0FBQVEsV0FBTyxFQUFFTyxNQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQTBCTCxRQUFRLEdBQUcsTUFBSCxHQUFZLE9BQTlDLENBRkosQ0FEQTtBQU1ILENBMUNEOztHQUFNTixLO1VBSzJCUSx5RDs7O0tBTDNCUixLO0FBNENTQSxvRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvVGltZXIuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlTG9jYWxTdGF0ZSB9IGZyb20gJy4vTG9jYWxTdGF0ZSdcblxuY29uc3QgVGltZXIgPSAoKSA9PiB7XG5cbiAgICBjb25zdCBbbWludXRlcywgc2V0TWludXRlc10gPSB1c2VTdGF0ZSg0KVxuICAgIGNvbnN0IFtzZWNvbmRzLCBzZXRTZWNvbmRzXSA9IHVzZVN0YXRlKDApXG4gICAgY29uc3QgW2lzQWN0aXZlLCBzZXRJc0FjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgICBjb25zdCB7IHJvdW5kSW5mb3JtYXRpb24gfSA9IHVzZUxvY2FsU3RhdGUoKVxuICAgIGNvbnN0IHsgcm91bmQgfSA9IHJvdW5kSW5mb3JtYXRpb247XG5cbiAgICBmdW5jdGlvbiB0b2dnbGUoKSB7XG4gICAgICAgIHNldElzQWN0aXZlKCFpc0FjdGl2ZSlcbiAgICAgICAgcm91bmQuc3RhcnRSb3VuZCgpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVzZXQoKSB7XG4gICAgICAgIHNldE1pbnV0ZXMoNClcbiAgICAgICAgc2V0U2Vjb25kcygwKVxuICAgIH1cblxuICAgIC8vdGltZXIgY29udHJvbFxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmKGlzQWN0aXZlKSB7XG4gICAgICAgICAgICBpZihzZWNvbmRzID09IDApIHtcbiAgICAgICAgICAgICAgICBpZihtaW51dGVzID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBzZXRTZWNvbmRzKDU5KVxuICAgICAgICAgICAgICAgICAgICBzZXRNaW51dGVzKG1pbnV0ZXMgLSAxKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZihtaW51dGVzID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzZXQoKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKHNlY29uZHMgPiAwKSB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBzZXRTZWNvbmRzKHNlY29uZHMgLSAxKSwgMTAwMClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIFtpc0FjdGl2ZSwgc2Vjb25kcywgbWludXRlc10pXG5cbiAgICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSd0aW1lcic+XG4gICAgICAgIDxoMT57bWludXRlc30gOiB7c2Vjb25kcyA8IDEwID8gYDAke3NlY29uZHN9YCA6IHNlY29uZHN9PC9oMT5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0b2dnbGV9Pntpc0FjdGl2ZSA/ICdTdG9wJyA6ICdTdGFydCd9PC9idXR0b24+XG4gICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBUaW1lciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Timer.jsx\n");

/***/ })

})