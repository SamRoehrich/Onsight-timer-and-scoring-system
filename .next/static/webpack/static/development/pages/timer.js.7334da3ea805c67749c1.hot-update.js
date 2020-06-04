webpackHotUpdate("static/development/pages/timer.js",{

/***/ "./components/Timer.jsx":
/*!******************************!*\
  !*** ./components/Timer.jsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _LocalState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LocalState */ \"./components/LocalState.js\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/sam/Desktop/timer/next/components/Timer.jsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\nvar Timer = function Timer() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(1),\n      minutes = _useState[0],\n      setMinutes = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      seconds = _useState2[0],\n      setSeconds = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      isActive = _useState3[0],\n      setIsActive = _useState3[1];\n\n  var _useLocalState = Object(_LocalState__WEBPACK_IMPORTED_MODULE_2__[\"useLocalState\"])(),\n      athletes = _useLocalState.athletes,\n      inIso = _useLocalState.inIso,\n      setInIso = _useLocalState.setInIso,\n      onDeck = _useLocalState.onDeck,\n      setOnDeck = _useLocalState.setOnDeck,\n      climbing = _useLocalState.climbing,\n      setClimbing = _useLocalState.setClimbing,\n      setFinished = _useLocalState.setFinished;\n\n  function startRound() {\n    setInIso.apply(void 0, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(athletes));\n    setOnDeck(inIso[0]);\n  }\n\n  function cycle() {}\n\n  function toggle() {\n    setIsActive(!isActive);\n\n    if (isActive == true) {\n      startRound();\n    }\n  }\n\n  function reset() {\n    console.log('reset called');\n    setClimbing.apply(void 0, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(onDeck));\n    setMinutes(1);\n    setSeconds(0);\n  } //timer control\n\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (isActive) {\n      if (seconds == 0) {\n        if (minutes == 0) {\n          reset();\n        }\n\n        if (minutes > 0) {\n          setSeconds(10);\n          setMinutes(minutes - 1);\n        }\n      }\n\n      if (seconds > 0) {\n        setTimeout(function () {\n          return setSeconds(seconds - 1);\n        }, 1000);\n      }\n    }\n  }, [isActive, seconds, minutes]);\n  return __jsx(\"div\", {\n    className: \"timer\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 5\n    }\n  }, __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 9\n    }\n  }, minutes, \" : \", seconds < 10 ? \"0\".concat(seconds) : seconds), __jsx(\"button\", {\n    onClick: toggle,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 9\n    }\n  }, isActive ? 'Stop' : 'Start'));\n};\n\n_s(Timer, \"9c7+8qM2/fHN1AQOmnZiiMNDi34=\", false, function () {\n  return [_LocalState__WEBPACK_IMPORTED_MODULE_2__[\"useLocalState\"]];\n});\n\n_c = Timer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Timer);\n\nvar _c;\n\n$RefreshReg$(_c, \"Timer\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1RpbWVyLmpzeD9kNjkxIl0sIm5hbWVzIjpbIlRpbWVyIiwidXNlU3RhdGUiLCJtaW51dGVzIiwic2V0TWludXRlcyIsInNlY29uZHMiLCJzZXRTZWNvbmRzIiwiaXNBY3RpdmUiLCJzZXRJc0FjdGl2ZSIsInVzZUxvY2FsU3RhdGUiLCJhdGhsZXRlcyIsImluSXNvIiwic2V0SW5Jc28iLCJvbkRlY2siLCJzZXRPbkRlY2siLCJjbGltYmluZyIsInNldENsaW1iaW5nIiwic2V0RmluaXNoZWQiLCJzdGFydFJvdW5kIiwiY3ljbGUiLCJ0b2dnbGUiLCJyZXNldCIsImNvbnNvbGUiLCJsb2ciLCJ1c2VFZmZlY3QiLCJzZXRUaW1lb3V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFNO0FBQUE7O0FBQUEsa0JBRWNDLHNEQUFRLENBQUMsQ0FBRCxDQUZ0QjtBQUFBLE1BRVRDLE9BRlM7QUFBQSxNQUVBQyxVQUZBOztBQUFBLG1CQUdjRixzREFBUSxDQUFDLENBQUQsQ0FIdEI7QUFBQSxNQUdURyxPQUhTO0FBQUEsTUFHQUMsVUFIQTs7QUFBQSxtQkFJZ0JKLHNEQUFRLENBQUMsS0FBRCxDQUp4QjtBQUFBLE1BSVRLLFFBSlM7QUFBQSxNQUlDQyxXQUpEOztBQUFBLHVCQVVaQyxpRUFBYSxFQVZEO0FBQUEsTUFLUkMsUUFMUSxrQkFLUkEsUUFMUTtBQUFBLE1BTVJDLEtBTlEsa0JBTVJBLEtBTlE7QUFBQSxNQU1EQyxRQU5DLGtCQU1EQSxRQU5DO0FBQUEsTUFPUkMsTUFQUSxrQkFPUkEsTUFQUTtBQUFBLE1BT0FDLFNBUEEsa0JBT0FBLFNBUEE7QUFBQSxNQVFSQyxRQVJRLGtCQVFSQSxRQVJRO0FBQUEsTUFRRUMsV0FSRixrQkFRRUEsV0FSRjtBQUFBLE1BU1JDLFdBVFEsa0JBU1JBLFdBVFE7O0FBWWhCLFdBQVNDLFVBQVQsR0FBc0I7QUFDbEJOLFlBQVEsTUFBUixzR0FBWUYsUUFBWjtBQUNBSSxhQUFTLENBQUNILEtBQUssQ0FBQyxDQUFELENBQU4sQ0FBVDtBQUNIOztBQUVELFdBQVNRLEtBQVQsR0FBaUIsQ0FDaEI7O0FBRUQsV0FBU0MsTUFBVCxHQUFrQjtBQUNkWixlQUFXLENBQUMsQ0FBQ0QsUUFBRixDQUFYOztBQUNBLFFBQUdBLFFBQVEsSUFBSSxJQUFmLEVBQXFCO0FBQ2pCVyxnQkFBVTtBQUNiO0FBQ0o7O0FBRUQsV0FBU0csS0FBVCxHQUFpQjtBQUNiQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxjQUFaO0FBQ0FQLGVBQVcsTUFBWCxzR0FBZUgsTUFBZjtBQUNBVCxjQUFVLENBQUMsQ0FBRCxDQUFWO0FBQ0FFLGNBQVUsQ0FBQyxDQUFELENBQVY7QUFDSCxHQWhDZSxDQWtDaEI7OztBQUNBa0IseURBQVMsQ0FBQyxZQUFNO0FBQ1osUUFBR2pCLFFBQUgsRUFBYTtBQUNULFVBQUdGLE9BQU8sSUFBSSxDQUFkLEVBQWlCO0FBQ2IsWUFBR0YsT0FBTyxJQUFJLENBQWQsRUFBaUI7QUFDYmtCLGVBQUs7QUFDUjs7QUFDRCxZQUFHbEIsT0FBTyxHQUFHLENBQWIsRUFBZ0I7QUFDWkcsb0JBQVUsQ0FBQyxFQUFELENBQVY7QUFDQUYsb0JBQVUsQ0FBQ0QsT0FBTyxHQUFHLENBQVgsQ0FBVjtBQUNIO0FBQ0o7O0FBQ0QsVUFBR0UsT0FBTyxHQUFHLENBQWIsRUFBZ0I7QUFDWm9CLGtCQUFVLENBQUM7QUFBQSxpQkFBTW5CLFVBQVUsQ0FBQ0QsT0FBTyxHQUFHLENBQVgsQ0FBaEI7QUFBQSxTQUFELEVBQWdDLElBQWhDLENBQVY7QUFDSDtBQUNKO0FBQ0osR0FmUSxFQWVOLENBQUNFLFFBQUQsRUFBV0YsT0FBWCxFQUFvQkYsT0FBcEIsQ0FmTSxDQUFUO0FBaUJBLFNBQ0E7QUFBSyxhQUFTLEVBQUMsT0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFLQSxPQUFMLFNBQWlCRSxPQUFPLEdBQUcsRUFBVixjQUFtQkEsT0FBbkIsSUFBK0JBLE9BQWhELENBREosRUFFSTtBQUFRLFdBQU8sRUFBRWUsTUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUEwQmIsUUFBUSxHQUFHLE1BQUgsR0FBWSxPQUE5QyxDQUZKLENBREE7QUFNSCxDQTFERDs7R0FBTU4sSztVQVVFUSx5RDs7O0tBVkZSLEs7QUE0RFNBLG9FQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9UaW1lci5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VMb2NhbFN0YXRlIH0gZnJvbSAnLi9Mb2NhbFN0YXRlJ1xuXG5jb25zdCBUaW1lciA9ICgpID0+IHtcblxuICAgIGNvbnN0IFttaW51dGVzLCBzZXRNaW51dGVzXSA9IHVzZVN0YXRlKDEpXG4gICAgY29uc3QgW3NlY29uZHMsIHNldFNlY29uZHNdID0gdXNlU3RhdGUoMClcbiAgICBjb25zdCBbaXNBY3RpdmUsIHNldElzQWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKVxuICAgIGNvbnN0IHsgYXRobGV0ZXMsXG4gICAgICAgICAgICBpbklzbywgc2V0SW5Jc28sXG4gICAgICAgICAgICBvbkRlY2ssIHNldE9uRGVjayxcbiAgICAgICAgICAgIGNsaW1iaW5nLCBzZXRDbGltYmluZyxcbiAgICAgICAgICAgIHNldEZpbmlzaGVkICAgIFxuICAgIH0gPSB1c2VMb2NhbFN0YXRlKClcblxuICAgIGZ1bmN0aW9uIHN0YXJ0Um91bmQoKSB7XG4gICAgICAgIHNldEluSXNvKC4uLmF0aGxldGVzKVxuICAgICAgICBzZXRPbkRlY2soaW5Jc29bMF0pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3ljbGUoKSB7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdG9nZ2xlKCkge1xuICAgICAgICBzZXRJc0FjdGl2ZSghaXNBY3RpdmUpXG4gICAgICAgIGlmKGlzQWN0aXZlID09IHRydWUpIHtcbiAgICAgICAgICAgIHN0YXJ0Um91bmQoKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVzZXQoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdyZXNldCBjYWxsZWQnKVxuICAgICAgICBzZXRDbGltYmluZyguLi5vbkRlY2spXG4gICAgICAgIHNldE1pbnV0ZXMoMSlcbiAgICAgICAgc2V0U2Vjb25kcygwKVxuICAgIH1cblxuICAgIC8vdGltZXIgY29udHJvbFxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmKGlzQWN0aXZlKSB7XG4gICAgICAgICAgICBpZihzZWNvbmRzID09IDApIHtcbiAgICAgICAgICAgICAgICBpZihtaW51dGVzID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzZXQoKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZihtaW51dGVzID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBzZXRTZWNvbmRzKDEwKVxuICAgICAgICAgICAgICAgICAgICBzZXRNaW51dGVzKG1pbnV0ZXMgLSAxKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKHNlY29uZHMgPiAwKSB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBzZXRTZWNvbmRzKHNlY29uZHMgLSAxKSwgMTAwMClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIFtpc0FjdGl2ZSwgc2Vjb25kcywgbWludXRlc10pXG5cbiAgICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSd0aW1lcic+XG4gICAgICAgIDxoMT57bWludXRlc30gOiB7c2Vjb25kcyA8IDEwID8gYDAke3NlY29uZHN9YCA6IHNlY29uZHN9PC9oMT5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0b2dnbGV9Pntpc0FjdGl2ZSA/ICdTdG9wJyA6ICdTdGFydCd9PC9idXR0b24+XG4gICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBUaW1lciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Timer.jsx\n");

/***/ })

})