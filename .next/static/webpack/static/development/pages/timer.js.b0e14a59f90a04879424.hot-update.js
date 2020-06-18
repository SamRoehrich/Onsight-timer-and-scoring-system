webpackHotUpdate("static/development/pages/timer.js",{

/***/ "./components/Transition.jsx":
/*!***********************************!*\
  !*** ./components/Transition.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _LocalState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LocalState */ \"./components/LocalState.js\");\n/* harmony import */ var _ScoreCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ScoreCard */ \"./components/ScoreCard.jsx\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/sam/Desktop/timer/next/components/Transition.jsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    height: 50%;\\n    width: 100%;\\n    display: flex;\\n    justify-content: center;\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject());\n_c = Container;\n\nvar RoundControl = function RoundControl() {\n  _s();\n\n  var _useLocalState = Object(_LocalState__WEBPACK_IMPORTED_MODULE_3__[\"useLocalState\"])(),\n      athletes = _useLocalState.athletes,\n      dispatch = _useLocalState.dispatch;\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(Container, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 9\n    }\n  }, __jsx(\"button\", {\n    onClick: function onClick() {\n      return dispatch({\n        type: 'reset',\n        payload: athletes\n      });\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 13\n    }\n  }, \"Reset Round\"), __jsx(\"button\", {\n    onClick: function onClick() {\n      return dispatch({\n        type: 'start-round',\n        payload: athletes\n      });\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 13\n    }\n  }, \"Start Round\"), __jsx(\"button\", {\n    onClick: function onClick() {\n      return dispatch({\n        type: 'remove-climber-from-iso'\n      });\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 13\n    }\n  }, \"Get first climber\"), __jsx(\"button\", {\n    onClick: function onClick() {\n      return dispatch({\n        type: 'transition-climbers'\n      });\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 13\n    }\n  }, \"Cycle Climbers\")), __jsx(Container, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 9\n    }\n  }, state.climbing.length !== 0 && state.climbing.map(function (climber) {\n    return __jsx(_ScoreCard__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      athlete: climber,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 17\n      }\n    });\n  })));\n};\n\n_s(RoundControl, \"Qz18Ht3XgEu7qow6H/Xc3cv/k+E=\", false, function () {\n  return [_LocalState__WEBPACK_IMPORTED_MODULE_3__[\"useLocalState\"]];\n});\n\n_c2 = RoundControl;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RoundControl);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Container\");\n$RefreshReg$(_c2, \"RoundControl\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1RyYW5zaXRpb24uanN4P2E3MGYiXSwibmFtZXMiOlsiQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwiUm91bmRDb250cm9sIiwidXNlTG9jYWxTdGF0ZSIsImF0aGxldGVzIiwiZGlzcGF0Y2giLCJ0eXBlIiwicGF5bG9hZCIsInN0YXRlIiwiY2xpbWJpbmciLCJsZW5ndGgiLCJtYXAiLCJjbGltYmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQyx5REFBTSxDQUFDQyxHQUFWLG1CQUFmO0tBQU1GLFM7O0FBT04sSUFBTUcsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUFBOztBQUFBLHVCQUNRQyxpRUFBYSxFQURyQjtBQUFBLE1BQ2ZDLFFBRGUsa0JBQ2ZBLFFBRGU7QUFBQSxNQUNMQyxRQURLLGtCQUNMQSxRQURLOztBQUd2QixTQUNJLG1FQUNBLE1BQUMsU0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBUSxXQUFPLEVBQUU7QUFBQSxhQUFNQSxRQUFRLENBQUM7QUFBRUMsWUFBSSxFQUFFLE9BQVI7QUFBaUJDLGVBQU8sRUFBRUg7QUFBMUIsT0FBRCxDQUFkO0FBQUEsS0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixFQUVJO0FBQVEsV0FBTyxFQUFFO0FBQUEsYUFBTUMsUUFBUSxDQUFDO0FBQUVDLFlBQUksRUFBRSxhQUFSO0FBQXVCQyxlQUFPLEVBQUVIO0FBQWhDLE9BQUQsQ0FBZDtBQUFBLEtBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkosRUFHSTtBQUFRLFdBQU8sRUFBRTtBQUFBLGFBQU1DLFFBQVEsQ0FBQztBQUFFQyxZQUFJLEVBQUU7QUFBUixPQUFELENBQWQ7QUFBQSxLQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUhKLEVBSUk7QUFBUSxXQUFPLEVBQUU7QUFBQSxhQUFNRCxRQUFRLENBQUM7QUFBRUMsWUFBSSxFQUFFO0FBQVIsT0FBRCxDQUFkO0FBQUEsS0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFKSixDQURBLEVBT0EsTUFBQyxTQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFSUUsS0FBSyxDQUFDQyxRQUFOLENBQWVDLE1BQWYsS0FBMEIsQ0FBMUIsSUFDQUYsS0FBSyxDQUFDQyxRQUFOLENBQWVFLEdBQWYsQ0FBbUIsVUFBQUMsT0FBTztBQUFBLFdBQ3RCLE1BQUMsa0RBQUQ7QUFBVyxhQUFPLEVBQUVBLE9BQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFEc0I7QUFBQSxHQUExQixDQUhKLENBUEEsQ0FESjtBQWtCSCxDQXJCRDs7R0FBTVYsWTtVQUM2QkMseUQ7OztNQUQ3QkQsWTtBQXVCU0EsMkVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1RyYW5zaXRpb24uanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUmVkdWNlciwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyB1c2VMb2NhbFN0YXRlIH0gZnJvbSAnLi9Mb2NhbFN0YXRlJ1xuaW1wb3J0IFNjb3JlQ2FyZCBmcm9tICcuL1Njb3JlQ2FyZCdcblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgICBoZWlnaHQ6IDUwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuYFxuXG5jb25zdCBSb3VuZENvbnRyb2wgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBhdGhsZXRlcywgZGlzcGF0Y2ggfSA9IHVzZUxvY2FsU3RhdGUoKVxuICAgIFxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGRpc3BhdGNoKHsgdHlwZTogJ3Jlc2V0JywgcGF5bG9hZDogYXRobGV0ZXN9KX0+UmVzZXQgUm91bmQ8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gZGlzcGF0Y2goeyB0eXBlOiAnc3RhcnQtcm91bmQnLCBwYXlsb2FkOiBhdGhsZXRlc30pfT5TdGFydCBSb3VuZDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBkaXNwYXRjaCh7IHR5cGU6ICdyZW1vdmUtY2xpbWJlci1mcm9tLWlzbyd9KX0+R2V0IGZpcnN0IGNsaW1iZXI8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gZGlzcGF0Y2goeyB0eXBlOiAndHJhbnNpdGlvbi1jbGltYmVycyd9KX0+Q3ljbGUgQ2xpbWJlcnM8L2J1dHRvbj5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgIDxDb250YWluZXI+XG4gICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRlLmNsaW1iaW5nLmxlbmd0aCAhPT0gMCAmJiBcbiAgICAgICAgICAgIHN0YXRlLmNsaW1iaW5nLm1hcChjbGltYmVyID0+IChcbiAgICAgICAgICAgICAgICA8U2NvcmVDYXJkIGF0aGxldGU9e2NsaW1iZXJ9IC8+XG4gICAgICAgICAgICApKVxuICAgICAgICB9XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICA8Lz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJvdW5kQ29udHJvbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Transition.jsx\n");

/***/ })

})