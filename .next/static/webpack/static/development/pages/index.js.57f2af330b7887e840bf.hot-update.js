webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/Athlete.js":
/*!************************!*\
  !*** ./src/Athlete.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Athlete; });\nfunction Athlete(name, ageCat) {\n  this.name = name;\n  this.ageCat = ageCat;\n  this.onDeck = false;\n  this.scores = {\n    boulder1: {\n      score: 0,\n      attempts: 0\n    },\n    boulder2: {\n      score: 0,\n      attempts: 0\n    },\n    boulder3: {\n      score: 0,\n      attempts: 0\n    },\n    boulder4: {\n      score: 0,\n      attempts: 0\n    },\n    boulder5: {\n      score: 0,\n      attempts: 0\n    },\n    boulder6: {\n      score: 0,\n      attempts: 0\n    },\n    superFinal: {\n      score: 0,\n      attempts: 0\n    },\n    superFinal2: {\n      score: 0,\n      attempts: 0\n    }\n  };\n  this.inIso = true;\n  this.finalScore = 0;\n  this.position = 0;\n  this.lastBoulder = false;\n}\n_c = Athlete;\n\nAthlete.prototype.onFloor = function () {\n  this.onDeck = true;\n  return !this.inIso;\n};\n\nAthlete.prototype.getScore = function () {\n  var total = 0;\n\n  for (var score in this.scores) {\n    total += score.score;\n  }\n\n  return total;\n};\n\nAthlete.prototype.updateScore = function (boulder, score) {};\n\nvar _c;\n\n$RefreshReg$(_c, \"Athlete\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvQXRobGV0ZS5qcz83MmRkIl0sIm5hbWVzIjpbIkF0aGxldGUiLCJuYW1lIiwiYWdlQ2F0Iiwib25EZWNrIiwic2NvcmVzIiwiYm91bGRlcjEiLCJzY29yZSIsImF0dGVtcHRzIiwiYm91bGRlcjIiLCJib3VsZGVyMyIsImJvdWxkZXI0IiwiYm91bGRlcjUiLCJib3VsZGVyNiIsInN1cGVyRmluYWwiLCJzdXBlckZpbmFsMiIsImluSXNvIiwiZmluYWxTY29yZSIsInBvc2l0aW9uIiwibGFzdEJvdWxkZXIiLCJwcm90b3R5cGUiLCJvbkZsb29yIiwiZ2V0U2NvcmUiLCJ0b3RhbCIsInVwZGF0ZVNjb3JlIiwiYm91bGRlciJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFlLFNBQVNBLE9BQVQsQ0FBa0JDLElBQWxCLEVBQXdCQyxNQUF4QixFQUFnQztBQUMzQyxPQUFLRCxJQUFMLEdBQVlBLElBQVo7QUFDQSxPQUFLQyxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxPQUFLQyxNQUFMLEdBQWMsS0FBZDtBQUNBLE9BQUtDLE1BQUwsR0FBYztBQUNWQyxZQUFRLEVBQUU7QUFDTkMsV0FBSyxFQUFFLENBREQ7QUFFTkMsY0FBUSxFQUFFO0FBRkosS0FEQTtBQUtWQyxZQUFRLEVBQUU7QUFDTkYsV0FBSyxFQUFFLENBREQ7QUFFTkMsY0FBUSxFQUFFO0FBRkosS0FMQTtBQVNWRSxZQUFRLEVBQUU7QUFDTkgsV0FBSyxFQUFFLENBREQ7QUFFTkMsY0FBUSxFQUFFO0FBRkosS0FUQTtBQWFWRyxZQUFRLEVBQUU7QUFDTkosV0FBSyxFQUFFLENBREQ7QUFFTkMsY0FBUSxFQUFFO0FBRkosS0FiQTtBQWlCVkksWUFBUSxFQUFFO0FBQ05MLFdBQUssRUFBRSxDQUREO0FBRU5DLGNBQVEsRUFBRTtBQUZKLEtBakJBO0FBcUJWSyxZQUFRLEVBQUU7QUFDTk4sV0FBSyxFQUFFLENBREQ7QUFFTkMsY0FBUSxFQUFFO0FBRkosS0FyQkE7QUF5QlZNLGNBQVUsRUFBRTtBQUNSUCxXQUFLLEVBQUUsQ0FEQztBQUVSQyxjQUFRLEVBQUU7QUFGRixLQXpCRjtBQTZCVk8sZUFBVyxFQUFFO0FBQ1RSLFdBQUssRUFBRSxDQURFO0FBRVRDLGNBQVEsRUFBRTtBQUZEO0FBN0JILEdBQWQ7QUFrQ0EsT0FBS1EsS0FBTCxHQUFhLElBQWI7QUFDQSxPQUFLQyxVQUFMLEdBQWtCLENBQWxCO0FBQ0EsT0FBS0MsUUFBTCxHQUFnQixDQUFoQjtBQUNBLE9BQUtDLFdBQUwsR0FBbUIsS0FBbkI7QUFDSDtLQTFDdUJsQixPOztBQTRDeEJBLE9BQU8sQ0FBQ21CLFNBQVIsQ0FBa0JDLE9BQWxCLEdBQTRCLFlBQVk7QUFDcEMsT0FBS2pCLE1BQUwsR0FBYyxJQUFkO0FBQ0EsU0FBTyxDQUFDLEtBQUtZLEtBQWI7QUFDSCxDQUhEOztBQUtBZixPQUFPLENBQUNtQixTQUFSLENBQWtCRSxRQUFsQixHQUE2QixZQUFZO0FBQ3JDLE1BQUlDLEtBQUssR0FBRyxDQUFaOztBQUNBLE9BQUksSUFBSWhCLEtBQVIsSUFBaUIsS0FBS0YsTUFBdEIsRUFBOEI7QUFDMUJrQixTQUFLLElBQUloQixLQUFLLENBQUNBLEtBQWY7QUFDSDs7QUFDRCxTQUFPZ0IsS0FBUDtBQUNILENBTkQ7O0FBUUF0QixPQUFPLENBQUNtQixTQUFSLENBQWtCSSxXQUFsQixHQUFnQyxVQUFTQyxPQUFULEVBQWtCbEIsS0FBbEIsRUFBeUIsQ0FFeEQsQ0FGRCIsImZpbGUiOiIuL3NyYy9BdGhsZXRlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXRobGV0ZSAobmFtZSwgYWdlQ2F0KSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmFnZUNhdCA9IGFnZUNhdDtcbiAgICB0aGlzLm9uRGVjayA9IGZhbHNlO1xuICAgIHRoaXMuc2NvcmVzID0ge1xuICAgICAgICBib3VsZGVyMToge1xuICAgICAgICAgICAgc2NvcmU6IDAsXG4gICAgICAgICAgICBhdHRlbXB0czogMFxuICAgICAgICB9LFxuICAgICAgICBib3VsZGVyMjoge1xuICAgICAgICAgICAgc2NvcmU6IDAsXG4gICAgICAgICAgICBhdHRlbXB0czogMFxuICAgICAgICB9LFxuICAgICAgICBib3VsZGVyMzoge1xuICAgICAgICAgICAgc2NvcmU6IDAsXG4gICAgICAgICAgICBhdHRlbXB0czogMFxuICAgICAgICB9LFxuICAgICAgICBib3VsZGVyNDoge1xuICAgICAgICAgICAgc2NvcmU6IDAsXG4gICAgICAgICAgICBhdHRlbXB0czogMFxuICAgICAgICB9LFxuICAgICAgICBib3VsZGVyNToge1xuICAgICAgICAgICAgc2NvcmU6IDAsXG4gICAgICAgICAgICBhdHRlbXB0czogMFxuICAgICAgICB9LFxuICAgICAgICBib3VsZGVyNjoge1xuICAgICAgICAgICAgc2NvcmU6IDAsXG4gICAgICAgICAgICBhdHRlbXB0czogMFxuICAgICAgICB9LFxuICAgICAgICBzdXBlckZpbmFsOiB7XG4gICAgICAgICAgICBzY29yZTogMCxcbiAgICAgICAgICAgIGF0dGVtcHRzOiAwXG4gICAgICAgIH0sXG4gICAgICAgIHN1cGVyRmluYWwyOiB7XG4gICAgICAgICAgICBzY29yZTogMCxcbiAgICAgICAgICAgIGF0dGVtcHRzOiAwXG4gICAgICAgIH0sXG4gICAgfTtcbiAgICB0aGlzLmluSXNvID0gdHJ1ZTtcbiAgICB0aGlzLmZpbmFsU2NvcmUgPSAwO1xuICAgIHRoaXMucG9zaXRpb24gPSAwO1xuICAgIHRoaXMubGFzdEJvdWxkZXIgPSBmYWxzZTtcbn1cblxuQXRobGV0ZS5wcm90b3R5cGUub25GbG9vciA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLm9uRGVjayA9IHRydWU7XG4gICAgcmV0dXJuICF0aGlzLmluSXNvO1xufVxuXG5BdGhsZXRlLnByb3RvdHlwZS5nZXRTY29yZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdG90YWwgPSAwO1xuICAgIGZvcihsZXQgc2NvcmUgaW4gdGhpcy5zY29yZXMpIHtcbiAgICAgICAgdG90YWwgKz0gc2NvcmUuc2NvcmU7XG4gICAgfVxuICAgIHJldHVybiB0b3RhbDtcbn1cblxuQXRobGV0ZS5wcm90b3R5cGUudXBkYXRlU2NvcmUgPSBmdW5jdGlvbihib3VsZGVyLCBzY29yZSkge1xuXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/Athlete.js\n");

/***/ })

})