/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.scss */ "./src/styles/index.scss");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_navbar_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/navbar.scss */ "./src/styles/navbar.scss");
/* harmony import */ var _styles_navbar_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_navbar_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_canvas_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/canvas.scss */ "./src/styles/canvas.scss");
/* harmony import */ var _styles_canvas_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_canvas_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_garden_items_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/garden-items.scss */ "./src/styles/garden-items.scss");
/* harmony import */ var _styles_garden_items_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_garden_items_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _scripts_draw_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scripts/draw.js */ "./src/scripts/draw.js");
/* harmony import */ var _scripts_utils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scripts/utils.js */ "./src/scripts/utils.js");






var sandbox = document.getElementById("sandbox");
var w = sandbox.width = window.innerWidth;
var h = sandbox.height = 0.75 * window.innerHeight;
var c = sandbox.getContext("2d");
c.imageSmoothingEnabled = false;
document.addEventListener("DOMContentLoaded", function () {
  var gardenItems = [];
  var offset = {};

  function drawGardenItem(e) {
    return function (e) {
      var img = new Image();
      img.src = "".concat(e.target.src);
      Object(_scripts_draw_js__WEBPACK_IMPORTED_MODULE_4__["draw"])(img, w / 3, h / 3);
      debugger;
      gardenItems.push({
        img: img,
        x: w / 3,
        y: h / 3,
        radius: parseInt(e.target.style.width)
      });
    };
  }

  document.getElementById("stone-2").addEventListener("click", drawGardenItem("stone-2"));
  document.getElementById("stone-4").addEventListener("click", drawGardenItem("stone-4"));
  document.getElementById("stone-3").addEventListener("click", drawGardenItem("stone-3"));
  document.getElementById("stone-1").addEventListener("click", drawGardenItem("stone-1"));
  document.getElementById("stone-pile-1").addEventListener("click", drawGardenItem("stone-pile-1"));
  document.getElementById("stone-pile-2").addEventListener("click", drawGardenItem("stone-pile-2"));
  document.getElementById("lantern").addEventListener("click", drawGardenItem("lantern"));
  document.getElementById("bonzai-1").addEventListener("click", drawGardenItem("bonzai-1"));
  document.getElementById("bonzai-2").addEventListener("click", drawGardenItem("bonzai-2"));
  sandbox.addEventListener("mousedown", function (e) {
    debugger;

    function distanceXY(x0, y0, x1, y1) {
      var dx = x1 - x0,
          dy = y1 - y0;
      return Math.sqrt(dx * dx + dy * dy);
    }

    function circlePointCollision(x, y, item) {
      debugger;
      return distanceXY(x, y, item.x, item.y) < item.radius;
    }

    gardenItems.map(function (item) {
      debugger;

      if (circlePointCollision(e.offsetX, e.offsetY, item)) {
        function onMouseMove(event) {
          debugger;
          item.x = event.offsetX; // - offset.x;

          item.y = event.offsetY; // - offset.y;

          drawGardenItem();
        }

        function onMouseUp(event) {
          document.removeEventListener("mousemove", onMouseMove);
          document.removeEventListener("mouseup", onMouseUp);
        }

        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseup", onMouseUp);
        offset.x = e.offsetX - item.x;
        offset.y = e.offsetY - item.y;
      }
    });
  });
  document.querySelector("#clear-canvas").addEventListener("click", clearCanvas);

  function clearCanvas() {
    c.clearRect(0, 0, w, h);
  }

  document.querySelector("#rake-play").addEventListener("click", animateRake);

  function Rake(y, dX, style) {
    var cX = 0;
    this.y = y;
    this.dX = dX;
    this.style = style;

    this.pullRake = function () {
      for (var i = 0; i < 5; i++) {
        var topY = this.y + i * 10;
        c.beginPath();
        c.moveTo(0, topY);
        c.lineTo(cX, topY);
        c.strokeStyle = this.style;
        c.stroke();
      }
    };

    this.move = function () {
      if (cX === w) {
        this.y += 50;
        cX = 0;
      }

      cX += this.dX;
      this.pullRake();
    };
  }

  var rakeB = new Rake(10, 2, '#261308');
  var rakeW = new Rake(9, 2, 'white');

  function animateRake() {
    requestAnimationFrame(animateRake);
    rakeW.move();
    rakeB.move();

    if (rakeB.y >= w) {
      rakeB.dX = 0;
      rakeW.dX = 0;
    }
  }
}); // This will draw a tree:
// let tree = new Image();
//     tree.src = "./src/images/garden-items/bonzai-2.png";  
//     draw(tree, 200, 20);

/***/ }),

/***/ "./src/scripts/draw.js":
/*!*****************************!*\
  !*** ./src/scripts/draw.js ***!
  \*****************************/
/*! exports provided: draw, drawGardenItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "draw", function() { return draw; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawGardenItem", function() { return drawGardenItem; });
var sandbox = document.getElementById("sandbox");
var w = sandbox.width = window.innerWidth;
var h = sandbox.height = 0.75 * window.innerHeight;
var c = sandbox.getContext("2d");
function draw(img, x, y) {
  c.clearRect(0, 0, window.innerWidth, window.innerHeight * 0.75);

  img.onload = function () {
    c.drawImage(img, x, y);
  };
}
function drawGardenItem(e) {
  return function (e) {
    var img = new Image();
    img.src = "".concat(e.target.src);
    debugger;
    draw(img, w / 3, h / 3);
  };
}

/***/ }),

/***/ "./src/scripts/utils.js":
/*!******************************!*\
  !*** ./src/scripts/utils.js ***!
  \******************************/
/*! exports provided: circlePointCollision, distanceXY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "circlePointCollision", function() { return circlePointCollision; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "distanceXY", function() { return distanceXY; });
function circlePointCollision(x, y, item) {
  return distanceXY(x, y, item.x, item.y) < item.radius;
}
function distanceXY(x0, y0, x1, y1) {
  var dx = x1 - x0,
      dy = y1 - y0;
  return Math.sqrt(dx * dx + dy * dy);
}

/***/ }),

/***/ "./src/styles/canvas.scss":
/*!********************************!*\
  !*** ./src/styles/canvas.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/styles/garden-items.scss":
/*!**************************************!*\
  !*** ./src/styles/garden-items.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/styles/navbar.scss":
/*!********************************!*\
  !*** ./src/styles/navbar.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2RyYXcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9jYW52YXMuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2dhcmRlbi1pdGVtcy5zY3NzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL25hdmJhci5zY3NzIl0sIm5hbWVzIjpbInNhbmRib3giLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwidyIsIndpZHRoIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImgiLCJoZWlnaHQiLCJpbm5lckhlaWdodCIsImMiLCJnZXRDb250ZXh0IiwiaW1hZ2VTbW9vdGhpbmdFbmFibGVkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImdhcmRlbkl0ZW1zIiwib2Zmc2V0IiwiZHJhd0dhcmRlbkl0ZW0iLCJlIiwiaW1nIiwiSW1hZ2UiLCJzcmMiLCJ0YXJnZXQiLCJkcmF3IiwicHVzaCIsIngiLCJ5IiwicmFkaXVzIiwicGFyc2VJbnQiLCJzdHlsZSIsImRpc3RhbmNlWFkiLCJ4MCIsInkwIiwieDEiLCJ5MSIsImR4IiwiZHkiLCJNYXRoIiwic3FydCIsImNpcmNsZVBvaW50Q29sbGlzaW9uIiwiaXRlbSIsIm1hcCIsIm9mZnNldFgiLCJvZmZzZXRZIiwib25Nb3VzZU1vdmUiLCJldmVudCIsIm9uTW91c2VVcCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJxdWVyeVNlbGVjdG9yIiwiY2xlYXJDYW52YXMiLCJjbGVhclJlY3QiLCJhbmltYXRlUmFrZSIsIlJha2UiLCJkWCIsImNYIiwicHVsbFJha2UiLCJpIiwidG9wWSIsImJlZ2luUGF0aCIsIm1vdmVUbyIsImxpbmVUbyIsInN0cm9rZVN0eWxlIiwic3Ryb2tlIiwibW92ZSIsInJha2VCIiwicmFrZVciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJvbmxvYWQiLCJkcmF3SW1hZ2UiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBLElBQUlBLE9BQU8sR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLFNBQXhCLENBQWQ7QUFDSSxJQUFJQyxDQUFDLEdBQUdILE9BQU8sQ0FBQ0ksS0FBUixHQUFnQkMsTUFBTSxDQUFDQyxVQUEvQjtBQUNBLElBQUlDLENBQUMsR0FBR1AsT0FBTyxDQUFDUSxNQUFSLEdBQWlCLE9BQU9ILE1BQU0sQ0FBQ0ksV0FBdkM7QUFDSixJQUFJQyxDQUFDLEdBQUdWLE9BQU8sQ0FBQ1csVUFBUixD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QUFDSCxHQUZEO0FBR0g7QUFFRSxTQUFTVCxjQUFULENBQXdCQyxDQUF4QixFQUEyQjtBQUM5QixTQUFPLFVBQUNBLENBQUQsRUFBTztBQUNWLFFBQUlDLEdBQUcsR0FBRyxJQUFJQyxLQUFKLEVBQVY7QUFDQUQsT0FBRyxDQUFDRSxHQUFKLGFBQWFILENBQUMsQ0FBQ0ksTUFBRixDQUFTRCxHQUF0QjtBQUNBO0FBQ0FFLFFBQUksQ0FBQ0osR0FBRCxFQUFNZixDQUFDLEdBQUMsQ0FBUixFQUFXSSxDQUFDLEdBQUMsQ0FBYixDQUFKO0FBQ0gsR0FMRDtBQU1ILEM7Ozs7Ozs7Ozs7OztBQ25CRDtBQUFBO0FBQUE7QUFBTyxTQUFTK0Isb0JBQVQsQ0FBOEJkLENBQTlCLEVBQWlDQyxDQUFqQyxFQUFvQ2MsSUFBcEMsRUFBMEM7QUFDaEQsU0FBT1YsVUFBVSxDQUFDTCxDQUFELEVBQUlDLENBQUosRUFBT2MsSUFBSSxDQUFDZixDQUFaLEVBQWVlLElBQUksQ0FBQ2QsQ0FBcEIsQ0FBVixHQUFtQ2MsSUFBSSxDQUFDYixNQUEvQztBQUNBO0FBRU0sU0FBU0csVUFBVCxDQUFvQkMsRUFBcEIsRUFBd0JDLEVBQXhCLEVBQTRCQyxFQUE1QixFQUFnQ0MsRUFBaEMsRUFBb0M7QUFDekMsTUFBSUMsRUFBRSxHQUFHRixFQUFFLEdBQUdGLEVBQWQ7QUFBQSxNQUNDSyxFQUFFLEdBQUdGLEVBQUUsR0FBR0YsRUFEWDtBQUVBLFNBQU9LLElBQUksQ0FBQ0MsSUFBTCxDQUFVSCxFQUFFLEdBQUdBLEVBQUwsR0FBVUMsRUFBRSxHQUFHQSxFQUF6QixDQUFQO0FBQ0QsQzs7Ozs7Ozs7Ozs7QUNSRCx1Qzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSx1QyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgJy4vc3R5bGVzL2luZGV4LnNjc3MnO1xuaW1wb3J0ICcuL3N0eWxlcy9uYXZiYXIuc2Nzcyc7XG5pbXBvcnQgJy4vc3R5bGVzL2NhbnZhcy5zY3NzJztcbmltcG9ydCAnLi9zdHlsZXMvZ2FyZGVuLWl0ZW1zLnNjc3MnO1xuaW1wb3J0IHsgZHJhdyB9IGZyb20gJy4vc2NyaXB0cy9kcmF3LmpzJ1xuaW1wb3J0IHsgY2lyY2xlUG9pbnRDb2xsaXNpb24gfSBmcm9tICcuL3NjcmlwdHMvdXRpbHMuanMnO1xuXG5cbmxldCBzYW5kYm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzYW5kYm94XCIpO1xuICAgIGxldCB3ID0gc2FuZGJveC53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgIGxldCBoID0gc2FuZGJveC5oZWlnaHQgPSAwLjc1ICogd2luZG93LmlubmVySGVpZ2h0O1xubGV0IGMgPSBzYW5kYm94LmdldENvbnRleHQoXCIyZFwiKTtcbiAgICBjLmltYWdlU21vb3RoaW5nRW5hYmxlZCA9IGZhbHNlO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG5cbiAgICBsZXQgZ2FyZGVuSXRlbXMgPSBbXTtcbiAgICBsZXQgb2Zmc2V0ID0ge307XG4gICAgZnVuY3Rpb24gZHJhd0dhcmRlbkl0ZW0oZSkge1xuICAgICAgICByZXR1cm4gKGUpID0+IHtcbiAgICAgICAgICAgIGxldCBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgIGltZy5zcmMgPSBgJHtlLnRhcmdldC5zcmN9YDsgXG4gICAgICAgICAgICBkcmF3KGltZywgdy8zLCBoLzMpO1xuICAgICAgICAgICAgZGVidWdnZXI7XG4gICAgICAgICAgICBnYXJkZW5JdGVtcy5wdXNoKHtcbiAgICAgICAgICAgIGltZzogaW1nLFxuXHRcdFx0eDogdy8zLFxuXHRcdFx0eTogaC8zLFxuXHRcdFx0cmFkaXVzOiBwYXJzZUludChlLnRhcmdldC5zdHlsZS53aWR0aClcblx0XHR9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RvbmUtMlwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZHJhd0dhcmRlbkl0ZW0oXCJzdG9uZS0yXCIpKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0b25lLTRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRyYXdHYXJkZW5JdGVtKFwic3RvbmUtNFwiKSk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdG9uZS0zXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkcmF3R2FyZGVuSXRlbShcInN0b25lLTNcIikpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RvbmUtMVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZHJhd0dhcmRlbkl0ZW0oXCJzdG9uZS0xXCIpKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0b25lLXBpbGUtMVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZHJhd0dhcmRlbkl0ZW0oXCJzdG9uZS1waWxlLTFcIikpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RvbmUtcGlsZS0yXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkcmF3R2FyZGVuSXRlbShcInN0b25lLXBpbGUtMlwiKSk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsYW50ZXJuXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkcmF3R2FyZGVuSXRlbShcImxhbnRlcm5cIikpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYm9uemFpLTFcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRyYXdHYXJkZW5JdGVtKFwiYm9uemFpLTFcIikpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYm9uemFpLTJcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRyYXdHYXJkZW5JdGVtKFwiYm9uemFpLTJcIikpO1xuXG5cbiAgICBzYW5kYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgKGUpID0+IHtcbiAgICAgICAgZGVidWdnZXI7XG4gICAgICAgIGZ1bmN0aW9uIGRpc3RhbmNlWFkoeDAsIHkwLCB4MSwgeTEpIHtcbiAgICAgICAgICAgIGxldCBkeCA9IHgxIC0geDAsXG4gICAgICAgICAgICAgICAgZHkgPSB5MSAtIHkwO1xuICAgICAgICAgICAgcmV0dXJuIE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gY2lyY2xlUG9pbnRDb2xsaXNpb24oeCwgeSwgaXRlbSkge1xuICAgICAgICAgICAgZGVidWdnZXI7XG4gICAgICAgICAgICByZXR1cm4gZGlzdGFuY2VYWSh4LCB5LCBpdGVtLngsIGl0ZW0ueSkgPCBpdGVtLnJhZGl1cztcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgZ2FyZGVuSXRlbXMubWFwKGl0ZW0gPT4ge1xuICAgICAgICAgICAgZGVidWdnZXI7XG4gICAgICAgICAgICBpZihjaXJjbGVQb2ludENvbGxpc2lvbihlLm9mZnNldFgsIGUub2Zmc2V0WSwgaXRlbSkpIHtcbiAgICAgICAgICAgICAgICBcdGZ1bmN0aW9uIG9uTW91c2VNb3ZlKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWJ1Z2dlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ueCA9IGV2ZW50Lm9mZnNldFg7Ly8gLSBvZmZzZXQueDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ueSA9IGV2ZW50Lm9mZnNldFk7Ly8gLSBvZmZzZXQueTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRyYXdHYXJkZW5JdGVtKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBvbk1vdXNlVXAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgb25Nb3VzZU1vdmUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgb25Nb3VzZVVwKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgb25Nb3VzZU1vdmUpO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIG9uTW91c2VVcCk7XG4gICAgICAgICAgICAgICAgb2Zmc2V0LnggPSBlLm9mZnNldFggLSBpdGVtLng7XG4gICAgICAgICAgICAgICAgb2Zmc2V0LnkgPSBlLm9mZnNldFkgLSBpdGVtLnk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cdH0pO1xuXG5cblxuXG5cblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2xlYXItY2FudmFzXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbGVhckNhbnZhcyk7XG5cbiAgICBmdW5jdGlvbiBjbGVhckNhbnZhcygpIHtcbiAgICAgICAgYy5jbGVhclJlY3QoMCwgMCwgdywgaCk7XG4gICAgfVxuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyYWtlLXBsYXlcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFuaW1hdGVSYWtlKTtcbiAgICBcbiAgICBmdW5jdGlvbiBSYWtlKHksIGRYLCBzdHlsZSkge1xuICAgICAgICBsZXQgY1ggPSAwO1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICB0aGlzLmRYID0gZFg7XG4gICAgICAgIHRoaXMuc3R5bGUgPSBzdHlsZTtcblxuICAgICAgICB0aGlzLnB1bGxSYWtlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCB0b3BZID0gdGhpcy55ICsgKGkgKiAxMCk7XG4gICAgICAgICAgICAgICAgYy5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICBjLm1vdmVUbygwLCB0b3BZKTtcbiAgICAgICAgICAgICAgICBjLmxpbmVUbyhjWCwgdG9wWSk7XG4gICAgICAgICAgICAgICAgYy5zdHJva2VTdHlsZSA9IHRoaXMuc3R5bGU7XG4gICAgICAgICAgICAgICAgYy5zdHJva2UoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgICAgIHRoaXMubW92ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKGNYID09PSB3ICkge1xuICAgICAgICAgICAgICAgIHRoaXMueSArPSA1MDtcbiAgICAgICAgICAgICAgICBjWCA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjWCArPSB0aGlzLmRYO1xuXG4gICAgICAgICAgICB0aGlzLnB1bGxSYWtlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgcmFrZUIgPSBuZXcgUmFrZSgxMCwgMiwnIzI2MTMwOCcpXG4gICAgbGV0IHJha2VXID0gbmV3IFJha2UoOSwgMiwgJ3doaXRlJylcblxuICAgIGZ1bmN0aW9uIGFuaW1hdGVSYWtlKCkge1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZVJha2UpXG5cbiAgICAgICAgcmFrZVcubW92ZSgpO1xuICAgICAgICByYWtlQi5tb3ZlKCk7XG4gICAgICAgIFxuICAgICAgICBpZiAocmFrZUIueSA+PSB3ICkge1xuICAgICAgICAgICAgcmFrZUIuZFggPSAwO1xuICAgICAgICAgICAgcmFrZVcuZFggPSAwO1xuICAgICAgICB9XG4gICAgfVxuXG59KVxuXG4vLyBUaGlzIHdpbGwgZHJhdyBhIHRyZWU6XG4vLyBsZXQgdHJlZSA9IG5ldyBJbWFnZSgpO1xuLy8gICAgIHRyZWUuc3JjID0gXCIuL3NyYy9pbWFnZXMvZ2FyZGVuLWl0ZW1zL2JvbnphaS0yLnBuZ1wiOyAgXG5cbi8vICAgICBkcmF3KHRyZWUsIDIwMCwgMjApOyIsImxldCBzYW5kYm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzYW5kYm94XCIpO1xubGV0IHcgPSBzYW5kYm94LndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG5sZXQgaCA9IHNhbmRib3guaGVpZ2h0ID0gMC43NSAqIHdpbmRvdy5pbm5lckhlaWdodDtcbmxldCBjID0gc2FuZGJveC5nZXRDb250ZXh0KFwiMmRcIik7XG5cbmV4cG9ydCBmdW5jdGlvbiBkcmF3KGltZywgeCwgeSl7XG4gICAgICAgIGMuY2xlYXJSZWN0KDAsMCwgd2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCAqIDAuNzUpXG4gICAgICAgIGltZy5vbmxvYWQgPSBmdW5jdGlvbigpe1xuICAgICAgICAgICAgYy5kcmF3SW1hZ2UoaW1nLCB4LCB5KTtcbiAgICAgICAgfVxuICAgIH0gXG5cbmV4cG9ydCBmdW5jdGlvbiBkcmF3R2FyZGVuSXRlbShlKSB7XG4gICAgcmV0dXJuIChlKSA9PiB7XG4gICAgICAgIGxldCBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgaW1nLnNyYyA9IGAke2UudGFyZ2V0LnNyY31gOyBcbiAgICAgICAgZGVidWdnZXI7IFxuICAgICAgICBkcmF3KGltZywgdy8zLCBoLzMpO1xuICAgIH1cbn0iLCJleHBvcnQgZnVuY3Rpb24gY2lyY2xlUG9pbnRDb2xsaXNpb24oeCwgeSwgaXRlbSkge1xuXHRyZXR1cm4gZGlzdGFuY2VYWSh4LCB5LCBpdGVtLngsIGl0ZW0ueSkgPCBpdGVtLnJhZGl1cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3RhbmNlWFkoeDAsIHkwLCB4MSwgeTEpIHtcblx0XHRsZXQgZHggPSB4MSAtIHgwLFxuXHRcdFx0ZHkgPSB5MSAtIHkwO1xuXHRcdHJldHVybiBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpO1xufVxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==