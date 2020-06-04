webpackHotUpdate("static/development/pages/timer.js",{

/***/ "./components/Timer.jsx":
/*!******************************!*\
  !*** ./components/Timer.jsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _LocalState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LocalState */ \"./components/LocalState.js\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/sam/Desktop/timer/next/components/Timer.jsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\nvar Timer = function Timer() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(1),\n      minutes = _useState[0],\n      setMinutes = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      seconds = _useState2[0],\n      setSeconds = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      isActive = _useState3[0],\n      setIsActive = _useState3[1];\n\n  var _useLocalState = Object(_LocalState__WEBPACK_IMPORTED_MODULE_2__[\"useLocalState\"])(),\n      athletes = _useLocalState.athletes,\n      inIso = _useLocalState.inIso,\n      setInIso = _useLocalState.setInIso,\n      onDeck = _useLocalState.onDeck,\n      setOnDeck = _useLocalState.setOnDeck,\n      climbing = _useLocalState.climbing,\n      setClimbing = _useLocalState.setClimbing,\n      setFinished = _useLocalState.setFinished;\n\n  function startRound() {\n    console.log('start called');\n    setInIso.apply(void 0, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(athletes));\n    setOnDeck(athletes[0]);\n  }\n\n  function toggle() {\n    if (!isActive) {\n      startRound();\n    }\n\n    setIsActive(!isActive);\n  }\n\n  function reset() {\n    setClimbing.apply(void 0, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(onDeck));\n    setMinutes(1);\n    setSeconds(0);\n  } //timer control\n\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (isActive) {\n      if (seconds == 0) {\n        if (minutes == 0) {\n          reset();\n        }\n\n        if (minutes > 0) {\n          setSeconds(10);\n          setMinutes(minutes - 1);\n        }\n      }\n\n      if (seconds > 0) {\n        setTimeout(function () {\n          return setSeconds(seconds - 1);\n        }, 1000);\n      }\n    }\n  }, [isActive, seconds, minutes]);\n  return __jsx(\"div\", {\n    className: \"timer\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 5\n    }\n  }, __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 9\n    }\n  }, minutes, \" : \", seconds < 10 ? \"0\".concat(seconds) : seconds), __jsx(\"button\", {\n    onClick: toggle,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 9\n    }\n  }, isActive ? 'Stop' : 'Start'));\n};\n\n_s(Timer, \"9c7+8qM2/fHN1AQOmnZiiMNDi34=\", false, function () {\n  return [_LocalState__WEBPACK_IMPORTED_MODULE_2__[\"useLocalState\"]];\n});\n\n_c = Timer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Timer);\n\nvar _c;\n\n$RefreshReg$(_c, \"Timer\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1RpbWVyLmpzeD9kNjkxIl0sIm5hbWVzIjpbIlRpbWVyIiwidXNlU3RhdGUiLCJtaW51dGVzIiwic2V0TWludXRlcyIsInNlY29uZHMiLCJzZXRTZWNvbmRzIiwiaXNBY3RpdmUiLCJzZXRJc0FjdGl2ZSIsInVzZUxvY2FsU3RhdGUiLCJhdGhsZXRlcyIsImluSXNvIiwic2V0SW5Jc28iLCJvbkRlY2siLCJzZXRPbkRlY2siLCJjbGltYmluZyIsInNldENsaW1iaW5nIiwic2V0RmluaXNoZWQiLCJzdGFydFJvdW5kIiwiY29uc29sZSIsImxvZyIsInRvZ2dsZSIsInJlc2V0IiwidXNlRWZmZWN0Iiwic2V0VGltZW91dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUFBOztBQUFBLGtCQUVjQyxzREFBUSxDQUFDLENBQUQsQ0FGdEI7QUFBQSxNQUVUQyxPQUZTO0FBQUEsTUFFQUMsVUFGQTs7QUFBQSxtQkFHY0Ysc0RBQVEsQ0FBQyxDQUFELENBSHRCO0FBQUEsTUFHVEcsT0FIUztBQUFBLE1BR0FDLFVBSEE7O0FBQUEsbUJBSWdCSixzREFBUSxDQUFDLEtBQUQsQ0FKeEI7QUFBQSxNQUlUSyxRQUpTO0FBQUEsTUFJQ0MsV0FKRDs7QUFBQSx1QkFVWkMsaUVBQWEsRUFWRDtBQUFBLE1BS1JDLFFBTFEsa0JBS1JBLFFBTFE7QUFBQSxNQU1SQyxLQU5RLGtCQU1SQSxLQU5RO0FBQUEsTUFNREMsUUFOQyxrQkFNREEsUUFOQztBQUFBLE1BT1JDLE1BUFEsa0JBT1JBLE1BUFE7QUFBQSxNQU9BQyxTQVBBLGtCQU9BQSxTQVBBO0FBQUEsTUFRUkMsUUFSUSxrQkFRUkEsUUFSUTtBQUFBLE1BUUVDLFdBUkYsa0JBUUVBLFdBUkY7QUFBQSxNQVNSQyxXQVRRLGtCQVNSQSxXQVRROztBQVloQixXQUFTQyxVQUFULEdBQXNCO0FBQ2xCQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxjQUFaO0FBQ0FSLFlBQVEsTUFBUixzR0FBWUYsUUFBWjtBQUNBSSxhQUFTLENBQUNKLFFBQVEsQ0FBQyxDQUFELENBQVQsQ0FBVDtBQUNIOztBQUVELFdBQVNXLE1BQVQsR0FBa0I7QUFDZCxRQUFHLENBQUNkLFFBQUosRUFBYztBQUNWVyxnQkFBVTtBQUNiOztBQUNEVixlQUFXLENBQUMsQ0FBQ0QsUUFBRixDQUFYO0FBQ0g7O0FBRUQsV0FBU2UsS0FBVCxHQUFpQjtBQUNiTixlQUFXLE1BQVgsc0dBQWVILE1BQWY7QUFDQVQsY0FBVSxDQUFDLENBQUQsQ0FBVjtBQUNBRSxjQUFVLENBQUMsQ0FBRCxDQUFWO0FBQ0gsR0E3QmUsQ0ErQmhCOzs7QUFDQWlCLHlEQUFTLENBQUMsWUFBTTtBQUNaLFFBQUdoQixRQUFILEVBQWE7QUFDVCxVQUFHRixPQUFPLElBQUksQ0FBZCxFQUFpQjtBQUNiLFlBQUdGLE9BQU8sSUFBSSxDQUFkLEVBQWlCO0FBQ2JtQixlQUFLO0FBQ1I7O0FBQ0QsWUFBR25CLE9BQU8sR0FBRyxDQUFiLEVBQWdCO0FBQ1pHLG9CQUFVLENBQUMsRUFBRCxDQUFWO0FBQ0FGLG9CQUFVLENBQUNELE9BQU8sR0FBRyxDQUFYLENBQVY7QUFDSDtBQUNKOztBQUNELFVBQUdFLE9BQU8sR0FBRyxDQUFiLEVBQWdCO0FBQ1ptQixrQkFBVSxDQUFDO0FBQUEsaUJBQU1sQixVQUFVLENBQUNELE9BQU8sR0FBRyxDQUFYLENBQWhCO0FBQUEsU0FBRCxFQUFnQyxJQUFoQyxDQUFWO0FBQ0g7QUFDSjtBQUNKLEdBZlEsRUFlTixDQUFDRSxRQUFELEVBQVdGLE9BQVgsRUFBb0JGLE9BQXBCLENBZk0sQ0FBVDtBQWlCQSxTQUNBO0FBQUssYUFBUyxFQUFDLE9BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBS0EsT0FBTCxTQUFpQkUsT0FBTyxHQUFHLEVBQVYsY0FBbUJBLE9BQW5CLElBQStCQSxPQUFoRCxDQURKLEVBRUk7QUFBUSxXQUFPLEVBQUVnQixNQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQTBCZCxRQUFRLEdBQUcsTUFBSCxHQUFZLE9BQTlDLENBRkosQ0FEQTtBQU1ILENBdkREOztHQUFNTixLO1VBVUVRLHlEOzs7S0FWRlIsSztBQXlEU0Esb0VBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1RpbWVyLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZUxvY2FsU3RhdGUgfSBmcm9tICcuL0xvY2FsU3RhdGUnXG5cbmNvbnN0IFRpbWVyID0gKCkgPT4ge1xuXG4gICAgY29uc3QgW21pbnV0ZXMsIHNldE1pbnV0ZXNdID0gdXNlU3RhdGUoMSlcbiAgICBjb25zdCBbc2Vjb25kcywgc2V0U2Vjb25kc10gPSB1c2VTdGF0ZSgwKVxuICAgIGNvbnN0IFtpc0FjdGl2ZSwgc2V0SXNBY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpXG4gICAgY29uc3QgeyBhdGhsZXRlcyxcbiAgICAgICAgICAgIGluSXNvLCBzZXRJbklzbyxcbiAgICAgICAgICAgIG9uRGVjaywgc2V0T25EZWNrLFxuICAgICAgICAgICAgY2xpbWJpbmcsIHNldENsaW1iaW5nLFxuICAgICAgICAgICAgc2V0RmluaXNoZWQgICAgXG4gICAgfSA9IHVzZUxvY2FsU3RhdGUoKVxuXG4gICAgZnVuY3Rpb24gc3RhcnRSb3VuZCgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3N0YXJ0IGNhbGxlZCcpXG4gICAgICAgIHNldEluSXNvKC4uLmF0aGxldGVzKVxuICAgICAgICBzZXRPbkRlY2soYXRobGV0ZXNbMF0pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdG9nZ2xlKCkge1xuICAgICAgICBpZighaXNBY3RpdmUpIHtcbiAgICAgICAgICAgIHN0YXJ0Um91bmQoKVxuICAgICAgICB9XG4gICAgICAgIHNldElzQWN0aXZlKCFpc0FjdGl2ZSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXNldCgpIHtcbiAgICAgICAgc2V0Q2xpbWJpbmcoLi4ub25EZWNrKVxuICAgICAgICBzZXRNaW51dGVzKDEpXG4gICAgICAgIHNldFNlY29uZHMoMClcbiAgICB9XG5cbiAgICAvL3RpbWVyIGNvbnRyb2xcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZihpc0FjdGl2ZSkge1xuICAgICAgICAgICAgaWYoc2Vjb25kcyA9PSAwKSB7XG4gICAgICAgICAgICAgICAgaWYobWludXRlcyA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc2V0KClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYobWludXRlcyA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0U2Vjb25kcygxMClcbiAgICAgICAgICAgICAgICAgICAgc2V0TWludXRlcyhtaW51dGVzIC0gMSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZihzZWNvbmRzID4gMCkge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gc2V0U2Vjb25kcyhzZWNvbmRzIC0gMSksIDEwMDApXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCBbaXNBY3RpdmUsIHNlY29uZHMsIG1pbnV0ZXNdKVxuXG4gICAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0ndGltZXInPlxuICAgICAgICA8aDE+e21pbnV0ZXN9IDoge3NlY29uZHMgPCAxMCA/IGAwJHtzZWNvbmRzfWAgOiBzZWNvbmRzfTwvaDE+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17dG9nZ2xlfT57aXNBY3RpdmUgPyAnU3RvcCcgOiAnU3RhcnQnfTwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGltZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Timer.jsx\n");

/***/ })

})