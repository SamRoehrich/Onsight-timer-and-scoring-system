webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/Athlete.js":
/*!************************!*\
  !*** ./src/Athlete.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Athlete; });\nfunction Athlete(name, ageCat) {\n  this.name = name;\n  this.ageCat = ageCat;\n  this.onDeck = false;\n  this.scores = [boulder1 = {\n    score: 0,\n    attempts: 0\n  }, boulder2 = {\n    score: 0,\n    attempts: 0\n  }, boulder3 = {\n    score: 0,\n    attempts: 0\n  }, boulder4 = {\n    score: 0,\n    attempts: 0\n  }, boulder5 = {\n    score: 0,\n    attempts: 0\n  }, boulder6 = {\n    score: 0,\n    attempts: 0\n  }, superFinal = {\n    score: 0,\n    attempts: 0\n  }, superFinal2 = {\n    score: 0,\n    attempts: 0\n  }];\n  this.inIso = true;\n  this.finalScore = 0;\n  this.bouldersClimbed = 0;\n  this.lastBoulder = false;\n}\n_c = Athlete;\n\nAthlete.prototype.cycle = function () {\n  if (this.bouldersClimbed == 4) {\n    this.lastBoulder == true;\n    return;\n  }\n\n  if (this.bouldersClimbed < 4) {\n    this.bouldersClimbed += 1;\n  }\n\n  this.onDeck = !this.onDeck;\n};\n\nAthlete.prototype.start = function () {\n  this.inIso == false;\n  this.onDeck == true;\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"Athlete\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvQXRobGV0ZS5qcz83MmRkIl0sIm5hbWVzIjpbIkF0aGxldGUiLCJuYW1lIiwiYWdlQ2F0Iiwib25EZWNrIiwic2NvcmVzIiwiYm91bGRlcjEiLCJzY29yZSIsImF0dGVtcHRzIiwiYm91bGRlcjIiLCJib3VsZGVyMyIsImJvdWxkZXI0IiwiYm91bGRlcjUiLCJib3VsZGVyNiIsInN1cGVyRmluYWwiLCJzdXBlckZpbmFsMiIsImluSXNvIiwiZmluYWxTY29yZSIsImJvdWxkZXJzQ2xpbWJlZCIsImxhc3RCb3VsZGVyIiwicHJvdG90eXBlIiwiY3ljbGUiLCJzdGFydCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFlLFNBQVNBLE9BQVQsQ0FBa0JDLElBQWxCLEVBQXdCQyxNQUF4QixFQUFnQztBQUMzQyxPQUFLRCxJQUFMLEdBQVlBLElBQVo7QUFDQSxPQUFLQyxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxPQUFLQyxNQUFMLEdBQWMsS0FBZDtBQUNBLE9BQUtDLE1BQUwsR0FBYyxDQUNWQyxRQUFRLEdBQUc7QUFDUEMsU0FBSyxFQUFFLENBREE7QUFFUEMsWUFBUSxFQUFFO0FBRkgsR0FERCxFQUtWQyxRQUFRLEdBQUc7QUFDUEYsU0FBSyxFQUFFLENBREE7QUFFUEMsWUFBUSxFQUFFO0FBRkgsR0FMRCxFQVNWRSxRQUFRLEdBQUc7QUFDUEgsU0FBSyxFQUFFLENBREE7QUFFUEMsWUFBUSxFQUFFO0FBRkgsR0FURCxFQWFWRyxRQUFRLEdBQUc7QUFDUEosU0FBSyxFQUFFLENBREE7QUFFUEMsWUFBUSxFQUFFO0FBRkgsR0FiRCxFQWlCVkksUUFBUSxHQUFHO0FBQ1BMLFNBQUssRUFBRSxDQURBO0FBRVBDLFlBQVEsRUFBRTtBQUZILEdBakJELEVBcUJWSyxRQUFRLEdBQUc7QUFDUE4sU0FBSyxFQUFFLENBREE7QUFFUEMsWUFBUSxFQUFFO0FBRkgsR0FyQkQsRUF5QlZNLFVBQVUsR0FBRztBQUNUUCxTQUFLLEVBQUUsQ0FERTtBQUVUQyxZQUFRLEVBQUU7QUFGRCxHQXpCSCxFQTZCVk8sV0FBVyxHQUFHO0FBQ1ZSLFNBQUssRUFBRSxDQURHO0FBRVZDLFlBQVEsRUFBRTtBQUZBLEdBN0JKLENBQWQ7QUFrQ0EsT0FBS1EsS0FBTCxHQUFhLElBQWI7QUFDQSxPQUFLQyxVQUFMLEdBQWtCLENBQWxCO0FBQ0EsT0FBS0MsZUFBTCxHQUF1QixDQUF2QjtBQUNBLE9BQUtDLFdBQUwsR0FBbUIsS0FBbkI7QUFDSDtLQTFDdUJsQixPOztBQTRDeEJBLE9BQU8sQ0FBQ21CLFNBQVIsQ0FBa0JDLEtBQWxCLEdBQTBCLFlBQVc7QUFDakMsTUFBRyxLQUFLSCxlQUFMLElBQXdCLENBQTNCLEVBQThCO0FBQzFCLFNBQUtDLFdBQUwsSUFBb0IsSUFBcEI7QUFDQTtBQUNIOztBQUNELE1BQUcsS0FBS0QsZUFBTCxHQUF1QixDQUExQixFQUE0QjtBQUN4QixTQUFLQSxlQUFMLElBQXdCLENBQXhCO0FBQ0g7O0FBQ0QsT0FBS2QsTUFBTCxHQUFjLENBQUMsS0FBS0EsTUFBcEI7QUFDSCxDQVREOztBQVdBSCxPQUFPLENBQUNtQixTQUFSLENBQWtCRSxLQUFsQixHQUEwQixZQUFXO0FBQ2pDLE9BQUtOLEtBQUwsSUFBYyxLQUFkO0FBQ0EsT0FBS1osTUFBTCxJQUFlLElBQWY7QUFDSCxDQUhEIiwiZmlsZSI6Ii4vc3JjL0F0aGxldGUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBdGhsZXRlIChuYW1lLCBhZ2VDYXQpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuYWdlQ2F0ID0gYWdlQ2F0O1xuICAgIHRoaXMub25EZWNrID0gZmFsc2U7XG4gICAgdGhpcy5zY29yZXMgPSBbXG4gICAgICAgIGJvdWxkZXIxID0ge1xuICAgICAgICAgICAgc2NvcmU6IDAsXG4gICAgICAgICAgICBhdHRlbXB0czogMFxuICAgICAgICB9LFxuICAgICAgICBib3VsZGVyMiA9IHtcbiAgICAgICAgICAgIHNjb3JlOiAwLFxuICAgICAgICAgICAgYXR0ZW1wdHM6IDBcbiAgICAgICAgfSxcbiAgICAgICAgYm91bGRlcjMgPSB7XG4gICAgICAgICAgICBzY29yZTogMCxcbiAgICAgICAgICAgIGF0dGVtcHRzOiAwXG4gICAgICAgIH0sXG4gICAgICAgIGJvdWxkZXI0ID0ge1xuICAgICAgICAgICAgc2NvcmU6IDAsXG4gICAgICAgICAgICBhdHRlbXB0czogMFxuICAgICAgICB9LFxuICAgICAgICBib3VsZGVyNSA9IHtcbiAgICAgICAgICAgIHNjb3JlOiAwLFxuICAgICAgICAgICAgYXR0ZW1wdHM6IDBcbiAgICAgICAgfSxcbiAgICAgICAgYm91bGRlcjYgPSB7XG4gICAgICAgICAgICBzY29yZTogMCxcbiAgICAgICAgICAgIGF0dGVtcHRzOiAwXG4gICAgICAgIH0sXG4gICAgICAgIHN1cGVyRmluYWwgPSB7XG4gICAgICAgICAgICBzY29yZTogMCxcbiAgICAgICAgICAgIGF0dGVtcHRzOiAwXG4gICAgICAgIH0sXG4gICAgICAgIHN1cGVyRmluYWwyID0ge1xuICAgICAgICAgICAgc2NvcmU6IDAsXG4gICAgICAgICAgICBhdHRlbXB0czogMFxuICAgICAgICB9LFxuICAgIF07XG4gICAgdGhpcy5pbklzbyA9IHRydWU7XG4gICAgdGhpcy5maW5hbFNjb3JlID0gMDtcbiAgICB0aGlzLmJvdWxkZXJzQ2xpbWJlZCA9IDA7XG4gICAgdGhpcy5sYXN0Qm91bGRlciA9IGZhbHNlO1xufVxuXG5BdGhsZXRlLnByb3RvdHlwZS5jeWNsZSA9IGZ1bmN0aW9uKCkge1xuICAgIGlmKHRoaXMuYm91bGRlcnNDbGltYmVkID09IDQpIHtcbiAgICAgICAgdGhpcy5sYXN0Qm91bGRlciA9PSB0cnVlO1xuICAgICAgICByZXR1cm5cbiAgICB9XG4gICAgaWYodGhpcy5ib3VsZGVyc0NsaW1iZWQgPCA0KXtcbiAgICAgICAgdGhpcy5ib3VsZGVyc0NsaW1iZWQgKz0gMTtcbiAgICB9XG4gICAgdGhpcy5vbkRlY2sgPSAhdGhpcy5vbkRlY2s7XG59XG5cbkF0aGxldGUucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5pbklzbyA9PSBmYWxzZTtcbiAgICB0aGlzLm9uRGVjayA9PSB0cnVlO1xufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/Athlete.js\n");

/***/ })

})