webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/Athlete.js":
/*!************************!*\
  !*** ./src/Athlete.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Athlete; });\nfunction Athlete(name, ageCat) {\n  this.name = name;\n  this.ageCat = ageCat;\n  this.scores = [{\n    boulder: 1,\n    score: 0,\n    attempts: 0\n  }, {\n    boulder: 2,\n    score: 0,\n    attempts: 0\n  }, {\n    boulder: 3,\n    score: 0,\n    attempts: 0\n  }, {\n    boulder: 4,\n    score: 0,\n    attempts: 0\n  }, {\n    boulder: 5,\n    score: 0,\n    attempts: 0\n  }, {\n    boulder: 6,\n    score: 0,\n    attempts: 0\n  }];\n  this.finalScore = 0;\n  this.bouldersClimbed = 0;\n  this.lastBoulder = false;\n}\n_c = Athlete;\n\nAthlete.prototype.cycle = function () {\n  if (this.bouldersClimbed == 4) {\n    this.lastBoulder == true;\n    return;\n  }\n\n  if (this.bouldersClimbed < 4) {\n    this.bouldersClimbed += 1;\n  }\n\n  this.onDeck = !this.onDeck;\n};\n\nAthlete.prototype.start = function () {\n  this.inIso == false;\n  this.onDeck == true;\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"Athlete\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvQXRobGV0ZS5qcz83MmRkIl0sIm5hbWVzIjpbIkF0aGxldGUiLCJuYW1lIiwiYWdlQ2F0Iiwic2NvcmVzIiwiYm91bGRlciIsInNjb3JlIiwiYXR0ZW1wdHMiLCJmaW5hbFNjb3JlIiwiYm91bGRlcnNDbGltYmVkIiwibGFzdEJvdWxkZXIiLCJwcm90b3R5cGUiLCJjeWNsZSIsIm9uRGVjayIsInN0YXJ0IiwiaW5Jc28iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBZSxTQUFTQSxPQUFULENBQWtCQyxJQUFsQixFQUF3QkMsTUFBeEIsRUFBZ0M7QUFDM0MsT0FBS0QsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsT0FBS0MsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsT0FBS0MsTUFBTCxHQUFjLENBQ1Y7QUFDSUMsV0FBTyxFQUFFLENBRGI7QUFFSUMsU0FBSyxFQUFFLENBRlg7QUFHSUMsWUFBUSxFQUFFO0FBSGQsR0FEVSxFQU1WO0FBQ0lGLFdBQU8sRUFBRSxDQURiO0FBRUlDLFNBQUssRUFBRSxDQUZYO0FBR0lDLFlBQVEsRUFBRTtBQUhkLEdBTlUsRUFXVjtBQUNJRixXQUFPLEVBQUUsQ0FEYjtBQUVJQyxTQUFLLEVBQUUsQ0FGWDtBQUdJQyxZQUFRLEVBQUU7QUFIZCxHQVhVLEVBZ0JWO0FBQ0lGLFdBQU8sRUFBRSxDQURiO0FBRUlDLFNBQUssRUFBRSxDQUZYO0FBR0lDLFlBQVEsRUFBRTtBQUhkLEdBaEJVLEVBcUJWO0FBQ0lGLFdBQU8sRUFBRSxDQURiO0FBRUlDLFNBQUssRUFBRSxDQUZYO0FBR0lDLFlBQVEsRUFBRTtBQUhkLEdBckJVLEVBMEJWO0FBQ0lGLFdBQU8sRUFBRSxDQURiO0FBRUlDLFNBQUssRUFBRSxDQUZYO0FBR0lDLFlBQVEsRUFBRTtBQUhkLEdBMUJVLENBQWQ7QUFnQ0EsT0FBS0MsVUFBTCxHQUFrQixDQUFsQjtBQUNBLE9BQUtDLGVBQUwsR0FBdUIsQ0FBdkI7QUFDQSxPQUFLQyxXQUFMLEdBQW1CLEtBQW5CO0FBQ0g7S0F0Q3VCVCxPOztBQXdDeEJBLE9BQU8sQ0FBQ1UsU0FBUixDQUFrQkMsS0FBbEIsR0FBMEIsWUFBVztBQUNqQyxNQUFHLEtBQUtILGVBQUwsSUFBd0IsQ0FBM0IsRUFBOEI7QUFDMUIsU0FBS0MsV0FBTCxJQUFvQixJQUFwQjtBQUNBO0FBQ0g7O0FBQ0QsTUFBRyxLQUFLRCxlQUFMLEdBQXVCLENBQTFCLEVBQTRCO0FBQ3hCLFNBQUtBLGVBQUwsSUFBd0IsQ0FBeEI7QUFDSDs7QUFDRCxPQUFLSSxNQUFMLEdBQWMsQ0FBQyxLQUFLQSxNQUFwQjtBQUNILENBVEQ7O0FBV0FaLE9BQU8sQ0FBQ1UsU0FBUixDQUFrQkcsS0FBbEIsR0FBMEIsWUFBVztBQUNqQyxPQUFLQyxLQUFMLElBQWMsS0FBZDtBQUNBLE9BQUtGLE1BQUwsSUFBZSxJQUFmO0FBQ0gsQ0FIRCIsImZpbGUiOiIuL3NyYy9BdGhsZXRlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXRobGV0ZSAobmFtZSwgYWdlQ2F0KSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmFnZUNhdCA9IGFnZUNhdDtcbiAgICB0aGlzLnNjb3JlcyA9IFtcbiAgICAgICAge1xuICAgICAgICAgICAgYm91bGRlcjogMSxcbiAgICAgICAgICAgIHNjb3JlOiAwLFxuICAgICAgICAgICAgYXR0ZW1wdHM6IDBcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgYm91bGRlcjogMixcbiAgICAgICAgICAgIHNjb3JlOiAwLFxuICAgICAgICAgICAgYXR0ZW1wdHM6IDBcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgYm91bGRlcjogMyxcbiAgICAgICAgICAgIHNjb3JlOiAwLFxuICAgICAgICAgICAgYXR0ZW1wdHM6IDBcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgYm91bGRlcjogNCxcbiAgICAgICAgICAgIHNjb3JlOiAwLFxuICAgICAgICAgICAgYXR0ZW1wdHM6IDBcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgYm91bGRlcjogNSxcbiAgICAgICAgICAgIHNjb3JlOiAwLFxuICAgICAgICAgICAgYXR0ZW1wdHM6IDBcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgYm91bGRlcjogNixcbiAgICAgICAgICAgIHNjb3JlOiAwLFxuICAgICAgICAgICAgYXR0ZW1wdHM6IDBcbiAgICAgICAgfSxcbiAgICBdO1xuICAgIHRoaXMuZmluYWxTY29yZSA9IDA7XG4gICAgdGhpcy5ib3VsZGVyc0NsaW1iZWQgPSAwO1xuICAgIHRoaXMubGFzdEJvdWxkZXIgPSBmYWxzZTtcbn1cblxuQXRobGV0ZS5wcm90b3R5cGUuY3ljbGUgPSBmdW5jdGlvbigpIHtcbiAgICBpZih0aGlzLmJvdWxkZXJzQ2xpbWJlZCA9PSA0KSB7XG4gICAgICAgIHRoaXMubGFzdEJvdWxkZXIgPT0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGlmKHRoaXMuYm91bGRlcnNDbGltYmVkIDwgNCl7XG4gICAgICAgIHRoaXMuYm91bGRlcnNDbGltYmVkICs9IDE7XG4gICAgfVxuICAgIHRoaXMub25EZWNrID0gIXRoaXMub25EZWNrO1xufVxuXG5BdGhsZXRlLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuaW5Jc28gPT0gZmFsc2U7XG4gICAgdGhpcy5vbkRlY2sgPT0gdHJ1ZTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/Athlete.js\n");

/***/ })

})