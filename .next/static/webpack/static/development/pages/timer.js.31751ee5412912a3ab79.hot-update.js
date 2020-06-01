webpackHotUpdate("static/development/pages/timer.js",{

/***/ "./pages/timer.js":
/*!************************!*\
  !*** ./pages/timer.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_LocalState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/LocalState */ \"./components/LocalState.js\");\n/* harmony import */ var _components_Scoring__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Scoring */ \"./components/Scoring.jsx\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/sam/Desktop/timer/next/pages/timer.js\",\n    _s = $RefreshSig$();\n\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\nvar TimerPage = function TimerPage() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(4),\n      minutes = _useState[0],\n      setMinutes = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      seconds = _useState2[0],\n      setSeconds = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      isActive = _useState3[0],\n      setIsActive = _useState3[1];\n\n  var _useLocalState = Object(_components_LocalState__WEBPACK_IMPORTED_MODULE_2__[\"useLocalState\"])(),\n      roundInformation = _useLocalState.roundInformation;\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]),\n      activeClimbers = _useState4[0],\n      setActiveClimbers = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]),\n      onDeck = _useState5[0],\n      setOnDeck = _useState5[1];\n\n  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      nextOnDeck = _useState6[0],\n      setNextOnDeck = _useState6[1];\n\n  function toggle() {\n    setIsActive(!isActive);\n  }\n\n  function reset() {\n    setMinutes(4);\n    setSeconds(0);\n    setNextOnDeck(nextOnDeck + 1);\n  }\n\n  function startRound() {\n    setOnDeck(roundInformation.athletes[0]);\n    setNextOnDeck(nextOnDeck + 1);\n  } // useEffect(() => {\n  //     setActiveClimbers([roundInformation.athletes[0], roundInformation.athletes[2], roundInformation.athletes[4]])\n  // }, [])\n  //timer control\n\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (isActive) {\n      if (seconds == 0) {\n        if (minutes > 0) {\n          setSeconds(59);\n          setMinutes(minutes - 1);\n        }\n\n        if (minutes == 0) {\n          reset();\n        }\n      }\n\n      if (seconds > 0) {\n        setTimeout(function () {\n          return setSeconds(seconds - 1);\n        }, 1000);\n      }\n    }\n  }, [isActive, seconds, minutes]);\n  return __jsx(\"div\", {\n    className: \"jsx-586014635\" + \" \" + 'container',\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"jsx-586014635\" + \" \" + 'timer-and-scoring',\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: \"jsx-586014635\" + \" \" + 'timer',\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 17\n    }\n  }, __jsx(\"h1\", {\n    className: \"jsx-586014635\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 21\n    }\n  }, minutes, \" : \", seconds < 10 ? \"0\".concat(seconds) : seconds), __jsx(\"button\", {\n    onClick: toggle,\n    className: \"jsx-586014635\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 21\n    }\n  }, isActive ? 'Stop' : 'Start')), __jsx(\"div\", {\n    className: \"jsx-586014635\" + \" \" + 'scoring',\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 17\n    }\n  }, __jsx(_components_Scoring__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    onDeck: onDeck,\n    activeClimbers: activeClimbers,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 21\n    }\n  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {\n    id: \"586014635\",\n    __self: _this\n  }, \".athlete-list.jsx-586014635{width:20%;height:100vh;border:1px solid black;}.timer-and-scoring.jsx-586014635{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.timer.jsx-586014635{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.container.jsx-586014635{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.scoring.jsx-586014635{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW0vRGVza3RvcC90aW1lci9uZXh0L3BhZ2VzL3RpbWVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtFaUIsQUFHbUMsQUFLRyxBQUlBLEFBTUEsQUFHQSxVQWpCQSxhQUNVLHVCQUMzQiw0QkFHMEIsQUFJQSxBQU0xQixBQUdpQyw4RUFaakMsQUFJK0IsNkNBUy9CLDREQVJ1Qiw2RkFDdkIiLCJmaWxlIjoiL1VzZXJzL3NhbS9EZXNrdG9wL3RpbWVyL25leHQvcGFnZXMvdGltZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5cbmltcG9ydCB7IHVzZUxvY2FsU3RhdGUgfSBmcm9tICcuLi9jb21wb25lbnRzL0xvY2FsU3RhdGUnXG5pbXBvcnQgU2NvcmluZyBmcm9tICcuLi9jb21wb25lbnRzL1Njb3JpbmcnXG5cbmNvbnN0IFRpbWVyUGFnZSA9ICgpID0+IHtcblxuICAgIGNvbnN0IFttaW51dGVzLCBzZXRNaW51dGVzXSA9IHVzZVN0YXRlKDQpXG4gICAgY29uc3QgW3NlY29uZHMsIHNldFNlY29uZHNdID0gdXNlU3RhdGUoMClcbiAgICBjb25zdCBbaXNBY3RpdmUsIHNldElzQWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gICAgY29uc3QgeyByb3VuZEluZm9ybWF0aW9uIH0gPSB1c2VMb2NhbFN0YXRlKClcbiAgICBjb25zdCBbYWN0aXZlQ2xpbWJlcnMsIHNldEFjdGl2ZUNsaW1iZXJzXSA9IHVzZVN0YXRlKFtdKVxuICAgIGNvbnN0IFtvbkRlY2ssIHNldE9uRGVja10gPSB1c2VTdGF0ZShbXSlcbiAgICBjb25zdCBbbmV4dE9uRGVjaywgc2V0TmV4dE9uRGVja10gPSB1c2VTdGF0ZSgwKVxuICAgIFxuICAgIGZ1bmN0aW9uIHRvZ2dsZSgpIHtcbiAgICAgICAgc2V0SXNBY3RpdmUoIWlzQWN0aXZlKVxuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiByZXNldCgpIHtcbiAgICAgICAgc2V0TWludXRlcyg0KVxuICAgICAgICBzZXRTZWNvbmRzKDApXG4gICAgICAgIHNldE5leHRPbkRlY2sobmV4dE9uRGVjayArIDEpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc3RhcnRSb3VuZCgpIHtcbiAgICAgICAgc2V0T25EZWNrKHJvdW5kSW5mb3JtYXRpb24uYXRobGV0ZXNbMF0pXG4gICAgICAgIHNldE5leHRPbkRlY2sobmV4dE9uRGVjayArIDEpXG4gICAgfVxuXG4gICAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyAgICAgc2V0QWN0aXZlQ2xpbWJlcnMoW3JvdW5kSW5mb3JtYXRpb24uYXRobGV0ZXNbMF0sIHJvdW5kSW5mb3JtYXRpb24uYXRobGV0ZXNbMl0sIHJvdW5kSW5mb3JtYXRpb24uYXRobGV0ZXNbNF1dKVxuICAgIC8vIH0sIFtdKVxuXG4gICAgLy90aW1lciBjb250cm9sXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYoaXNBY3RpdmUpIHtcbiAgICAgICAgICAgIGlmKHNlY29uZHMgPT0gMCkge1xuICAgICAgICAgICAgICAgIGlmKG1pbnV0ZXMgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFNlY29uZHMoNTkpXG4gICAgICAgICAgICAgICAgICAgIHNldE1pbnV0ZXMobWludXRlcyAtIDEpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmKG1pbnV0ZXMgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICByZXNldCgpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoc2Vjb25kcyA+IDApIHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHNldFNlY29uZHMoc2Vjb25kcyAtIDEpLCAxMDAwKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwgW2lzQWN0aXZlLCBzZWNvbmRzLCBtaW51dGVzXSlcblxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGltZXItYW5kLXNjb3JpbmcnPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0aW1lcic+XG4gICAgICAgICAgICAgICAgICAgIDxoMT57bWludXRlc30gOiB7c2Vjb25kcyA8IDEwID8gYDAke3NlY29uZHN9YCA6IHNlY29uZHN9PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0b2dnbGV9Pntpc0FjdGl2ZSA/ICdTdG9wJyA6ICdTdGFydCd9PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Njb3JpbmcnPlxuICAgICAgICAgICAgICAgICAgICA8U2NvcmluZyBvbkRlY2s9e29uRGVja30gYWN0aXZlQ2xpbWJlcnM9e2FjdGl2ZUNsaW1iZXJzfSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAgICAgIHtgXG4gICAgICAgICAgICAgICAgICAgIC5hdGhsZXRlLWxpc3Qge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAudGltZXItYW5kLXNjb3Jpbmcge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLnRpbWVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLnNjb3Jpbmcge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGltZXJQYWdlXG5cblxuXG4gICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9J2F0aGxldGUtbGlzdCc+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2F0aGxldGUtbGlzdC1pdGVtJz5cbiAgICAgICAgICAgICAgICAgICAgPHA+TmFtZTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHA+QWdlPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhdGhsZXRlLWxpc3QtaXRlbSc+XG4gICAgICAgICAgICAgICAgICAgIDxwPk5hbWU8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwPkFnZTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYXRobGV0ZS1saXN0LWl0ZW0nPlxuICAgICAgICAgICAgICAgICAgICA8cD5OYW1lPC9wPlxuICAgICAgICAgICAgICAgICAgICA8cD5BZ2U8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2F0aGxldGUtbGlzdC1pdGVtJz5cbiAgICAgICAgICAgICAgICAgICAgPHA+TmFtZTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHA+QWdlPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhdGhsZXRlLWxpc3QtaXRlbSc+XG4gICAgICAgICAgICAgICAgICAgIDxwPk5hbWU8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwPkFnZTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYXRobGV0ZS1saXN0LWl0ZW0nPlxuICAgICAgICAgICAgICAgICAgICA8cD5OYW1lPC9wPlxuICAgICAgICAgICAgICAgICAgICA8cD5BZ2U8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj4gKi99Il19 */\\n/*@ sourceURL=/Users/sam/Desktop/timer/next/pages/timer.js */\"));\n};\n\n_s(TimerPage, \"bOf9PONX06CM2InrsELWC8Ub+sQ=\", false, function () {\n  return [_components_LocalState__WEBPACK_IMPORTED_MODULE_2__[\"useLocalState\"]];\n});\n\n_c = TimerPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TimerPage);\n{\n  /* <div className='athlete-list'>\n     <div className='athlete-list-item'>\n         <p>Name</p>\n         <p>Age</p>\n     </div>\n     <div className='athlete-list-item'>\n         <p>Name</p>\n         <p>Age</p>\n     </div>\n     <div className='athlete-list-item'>\n         <p>Name</p>\n         <p>Age</p>\n     </div>\n     <div className='athlete-list-item'>\n         <p>Name</p>\n         <p>Age</p>\n     </div>\n     <div className='athlete-list-item'>\n         <p>Name</p>\n         <p>Age</p>\n     </div>\n     <div className='athlete-list-item'>\n         <p>Name</p>\n         <p>Age</p>\n     </div>\n  </div> */\n}\n\nvar _c;\n\n$RefreshReg$(_c, \"TimerPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy90aW1lci5qcz84ZWQzIl0sIm5hbWVzIjpbIlRpbWVyUGFnZSIsInVzZVN0YXRlIiwibWludXRlcyIsInNldE1pbnV0ZXMiLCJzZWNvbmRzIiwic2V0U2Vjb25kcyIsImlzQWN0aXZlIiwic2V0SXNBY3RpdmUiLCJ1c2VMb2NhbFN0YXRlIiwicm91bmRJbmZvcm1hdGlvbiIsImFjdGl2ZUNsaW1iZXJzIiwic2V0QWN0aXZlQ2xpbWJlcnMiLCJvbkRlY2siLCJzZXRPbkRlY2siLCJuZXh0T25EZWNrIiwic2V0TmV4dE9uRGVjayIsInRvZ2dsZSIsInJlc2V0Iiwic3RhcnRSb3VuZCIsImF0aGxldGVzIiwidXNlRWZmZWN0Iiwic2V0VGltZW91dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7O0FBRUEsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUFBOztBQUFBLGtCQUVVQyxzREFBUSxDQUFDLENBQUQsQ0FGbEI7QUFBQSxNQUViQyxPQUZhO0FBQUEsTUFFSkMsVUFGSTs7QUFBQSxtQkFHVUYsc0RBQVEsQ0FBQyxDQUFELENBSGxCO0FBQUEsTUFHYkcsT0FIYTtBQUFBLE1BR0pDLFVBSEk7O0FBQUEsbUJBSVlKLHNEQUFRLENBQUMsS0FBRCxDQUpwQjtBQUFBLE1BSWJLLFFBSmE7QUFBQSxNQUlIQyxXQUpHOztBQUFBLHVCQU1TQyw0RUFBYSxFQU50QjtBQUFBLE1BTVpDLGdCQU5ZLGtCQU1aQSxnQkFOWTs7QUFBQSxtQkFPd0JSLHNEQUFRLENBQUMsRUFBRCxDQVBoQztBQUFBLE1BT2JTLGNBUGE7QUFBQSxNQU9HQyxpQkFQSDs7QUFBQSxtQkFRUVYsc0RBQVEsQ0FBQyxFQUFELENBUmhCO0FBQUEsTUFRYlcsTUFSYTtBQUFBLE1BUUxDLFNBUks7O0FBQUEsbUJBU2dCWixzREFBUSxDQUFDLENBQUQsQ0FUeEI7QUFBQSxNQVNiYSxVQVRhO0FBQUEsTUFTREMsYUFUQzs7QUFXcEIsV0FBU0MsTUFBVCxHQUFrQjtBQUNkVCxlQUFXLENBQUMsQ0FBQ0QsUUFBRixDQUFYO0FBQ0g7O0FBRUQsV0FBU1csS0FBVCxHQUFpQjtBQUNiZCxjQUFVLENBQUMsQ0FBRCxDQUFWO0FBQ0FFLGNBQVUsQ0FBQyxDQUFELENBQVY7QUFDQVUsaUJBQWEsQ0FBQ0QsVUFBVSxHQUFHLENBQWQsQ0FBYjtBQUNIOztBQUVELFdBQVNJLFVBQVQsR0FBc0I7QUFDbEJMLGFBQVMsQ0FBQ0osZ0JBQWdCLENBQUNVLFFBQWpCLENBQTBCLENBQTFCLENBQUQsQ0FBVDtBQUNBSixpQkFBYSxDQUFDRCxVQUFVLEdBQUcsQ0FBZCxDQUFiO0FBQ0gsR0F4Qm1CLENBMEJwQjtBQUNBO0FBQ0E7QUFFQTs7O0FBQ0FNLHlEQUFTLENBQUMsWUFBTTtBQUNaLFFBQUdkLFFBQUgsRUFBYTtBQUNULFVBQUdGLE9BQU8sSUFBSSxDQUFkLEVBQWlCO0FBQ2IsWUFBR0YsT0FBTyxHQUFHLENBQWIsRUFBZ0I7QUFDWkcsb0JBQVUsQ0FBQyxFQUFELENBQVY7QUFDQUYsb0JBQVUsQ0FBQ0QsT0FBTyxHQUFHLENBQVgsQ0FBVjtBQUNIOztBQUNELFlBQUdBLE9BQU8sSUFBSSxDQUFkLEVBQWlCO0FBQ2JlLGVBQUs7QUFDUjtBQUNKOztBQUNELFVBQUdiLE9BQU8sR0FBRyxDQUFiLEVBQWdCO0FBQ1ppQixrQkFBVSxDQUFDO0FBQUEsaUJBQU1oQixVQUFVLENBQUNELE9BQU8sR0FBRyxDQUFYLENBQWhCO0FBQUEsU0FBRCxFQUFnQyxJQUFoQyxDQUFWO0FBQ0g7QUFDSjtBQUNKLEdBZlEsRUFlTixDQUFDRSxRQUFELEVBQVdGLE9BQVgsRUFBb0JGLE9BQXBCLENBZk0sQ0FBVDtBQWtCQSxTQUNJO0FBQUEsdUNBQWUsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQSx1Q0FBZSxtQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQSx1Q0FBZSxPQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBS0EsT0FBTCxTQUFpQkUsT0FBTyxHQUFHLEVBQVYsY0FBbUJBLE9BQW5CLElBQStCQSxPQUFoRCxDQURKLEVBRUk7QUFBUSxXQUFPLEVBQUVZLE1BQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUEwQlYsUUFBUSxHQUFHLE1BQUgsR0FBWSxPQUE5QyxDQUZKLENBREosRUFLSTtBQUFBLHVDQUFlLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsMkRBQUQ7QUFBUyxVQUFNLEVBQUVNLE1BQWpCO0FBQXlCLGtCQUFjLEVBQUVGLGNBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQUxKLENBREo7QUFBQTtBQUFBO0FBQUEsK2lOQURKO0FBdUNILENBeEZEOztHQUFNVixTO1VBTTJCUSxvRTs7O0tBTjNCUixTO0FBMEZTQSx3RUFBZjtBQUlZO0FBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUJTIiwiZmlsZSI6Ii4vcGFnZXMvdGltZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5cbmltcG9ydCB7IHVzZUxvY2FsU3RhdGUgfSBmcm9tICcuLi9jb21wb25lbnRzL0xvY2FsU3RhdGUnXG5pbXBvcnQgU2NvcmluZyBmcm9tICcuLi9jb21wb25lbnRzL1Njb3JpbmcnXG5cbmNvbnN0IFRpbWVyUGFnZSA9ICgpID0+IHtcblxuICAgIGNvbnN0IFttaW51dGVzLCBzZXRNaW51dGVzXSA9IHVzZVN0YXRlKDQpXG4gICAgY29uc3QgW3NlY29uZHMsIHNldFNlY29uZHNdID0gdXNlU3RhdGUoMClcbiAgICBjb25zdCBbaXNBY3RpdmUsIHNldElzQWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gICAgY29uc3QgeyByb3VuZEluZm9ybWF0aW9uIH0gPSB1c2VMb2NhbFN0YXRlKClcbiAgICBjb25zdCBbYWN0aXZlQ2xpbWJlcnMsIHNldEFjdGl2ZUNsaW1iZXJzXSA9IHVzZVN0YXRlKFtdKVxuICAgIGNvbnN0IFtvbkRlY2ssIHNldE9uRGVja10gPSB1c2VTdGF0ZShbXSlcbiAgICBjb25zdCBbbmV4dE9uRGVjaywgc2V0TmV4dE9uRGVja10gPSB1c2VTdGF0ZSgwKVxuICAgIFxuICAgIGZ1bmN0aW9uIHRvZ2dsZSgpIHtcbiAgICAgICAgc2V0SXNBY3RpdmUoIWlzQWN0aXZlKVxuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiByZXNldCgpIHtcbiAgICAgICAgc2V0TWludXRlcyg0KVxuICAgICAgICBzZXRTZWNvbmRzKDApXG4gICAgICAgIHNldE5leHRPbkRlY2sobmV4dE9uRGVjayArIDEpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc3RhcnRSb3VuZCgpIHtcbiAgICAgICAgc2V0T25EZWNrKHJvdW5kSW5mb3JtYXRpb24uYXRobGV0ZXNbMF0pXG4gICAgICAgIHNldE5leHRPbkRlY2sobmV4dE9uRGVjayArIDEpXG4gICAgfVxuXG4gICAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyAgICAgc2V0QWN0aXZlQ2xpbWJlcnMoW3JvdW5kSW5mb3JtYXRpb24uYXRobGV0ZXNbMF0sIHJvdW5kSW5mb3JtYXRpb24uYXRobGV0ZXNbMl0sIHJvdW5kSW5mb3JtYXRpb24uYXRobGV0ZXNbNF1dKVxuICAgIC8vIH0sIFtdKVxuXG4gICAgLy90aW1lciBjb250cm9sXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYoaXNBY3RpdmUpIHtcbiAgICAgICAgICAgIGlmKHNlY29uZHMgPT0gMCkge1xuICAgICAgICAgICAgICAgIGlmKG1pbnV0ZXMgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFNlY29uZHMoNTkpXG4gICAgICAgICAgICAgICAgICAgIHNldE1pbnV0ZXMobWludXRlcyAtIDEpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmKG1pbnV0ZXMgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICByZXNldCgpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoc2Vjb25kcyA+IDApIHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHNldFNlY29uZHMoc2Vjb25kcyAtIDEpLCAxMDAwKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwgW2lzQWN0aXZlLCBzZWNvbmRzLCBtaW51dGVzXSlcblxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGltZXItYW5kLXNjb3JpbmcnPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0aW1lcic+XG4gICAgICAgICAgICAgICAgICAgIDxoMT57bWludXRlc30gOiB7c2Vjb25kcyA8IDEwID8gYDAke3NlY29uZHN9YCA6IHNlY29uZHN9PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0b2dnbGV9Pntpc0FjdGl2ZSA/ICdTdG9wJyA6ICdTdGFydCd9PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Njb3JpbmcnPlxuICAgICAgICAgICAgICAgICAgICA8U2NvcmluZyBvbkRlY2s9e29uRGVja30gYWN0aXZlQ2xpbWJlcnM9e2FjdGl2ZUNsaW1iZXJzfSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAgICAgIHtgXG4gICAgICAgICAgICAgICAgICAgIC5hdGhsZXRlLWxpc3Qge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAudGltZXItYW5kLXNjb3Jpbmcge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLnRpbWVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLnNjb3Jpbmcge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGltZXJQYWdlXG5cblxuXG4gICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9J2F0aGxldGUtbGlzdCc+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2F0aGxldGUtbGlzdC1pdGVtJz5cbiAgICAgICAgICAgICAgICAgICAgPHA+TmFtZTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHA+QWdlPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhdGhsZXRlLWxpc3QtaXRlbSc+XG4gICAgICAgICAgICAgICAgICAgIDxwPk5hbWU8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwPkFnZTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYXRobGV0ZS1saXN0LWl0ZW0nPlxuICAgICAgICAgICAgICAgICAgICA8cD5OYW1lPC9wPlxuICAgICAgICAgICAgICAgICAgICA8cD5BZ2U8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2F0aGxldGUtbGlzdC1pdGVtJz5cbiAgICAgICAgICAgICAgICAgICAgPHA+TmFtZTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHA+QWdlPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhdGhsZXRlLWxpc3QtaXRlbSc+XG4gICAgICAgICAgICAgICAgICAgIDxwPk5hbWU8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwPkFnZTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYXRobGV0ZS1saXN0LWl0ZW0nPlxuICAgICAgICAgICAgICAgICAgICA8cD5OYW1lPC9wPlxuICAgICAgICAgICAgICAgICAgICA8cD5BZ2U8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj4gKi99Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/timer.js\n");

/***/ })

})