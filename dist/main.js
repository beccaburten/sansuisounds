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





var sandbox = document.getElementById("sandbox");
var w = sandbox.width = window.innerWidth;
var h = sandbox.height = 0.75 * window.innerHeight;
var c = sandbox.getContext("2d");
c.imageSmoothingEnabled = false;
document.addEventListener("DOMContentLoaded", function () {
  ///////////////////////////////////////////////////////////
  document.getElementById("stone-2").addEventListener("click", _scripts_draw_js__WEBPACK_IMPORTED_MODULE_4__["drawGardenItem"]);
  document.getElementById("stone-4").addEventListener("click", _scripts_draw_js__WEBPACK_IMPORTED_MODULE_4__["drawGardenItem"]);
  document.getElementById("stone-3").addEventListener("click", _scripts_draw_js__WEBPACK_IMPORTED_MODULE_4__["drawGardenItem"]);
  document.getElementById("stone-1").addEventListener("click", _scripts_draw_js__WEBPACK_IMPORTED_MODULE_4__["drawGardenItem"]);
  document.getElementById("stone-pile-1").addEventListener("click", _scripts_draw_js__WEBPACK_IMPORTED_MODULE_4__["drawGardenItem"]);
  document.getElementById("stone-pile-2").addEventListener("click", _scripts_draw_js__WEBPACK_IMPORTED_MODULE_4__["drawGardenItem"]);
  document.getElementById("lantern").addEventListener("click", _scripts_draw_js__WEBPACK_IMPORTED_MODULE_4__["drawGardenItem"]);
  document.getElementById("bonzai-1").addEventListener("click", _scripts_draw_js__WEBPACK_IMPORTED_MODULE_4__["drawGardenItem"]);
  document.getElementById("bonzai-2").addEventListener("click", _scripts_draw_js__WEBPACK_IMPORTED_MODULE_4__["drawGardenItem"]);
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
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/scripts/utils.js");

var sandbox = document.getElementById("sandbox");
var w = sandbox.width = window.innerWidth;
var h = sandbox.height = 0.75 * window.innerHeight;
var c = sandbox.getContext("2d");
var gardenItems = [];
function draw() {
  c.clearRect(0, 0, window.innerWidth, window.innerHeight * 0.75); // img.onload = function() {

  gardenItems.map(function (item) {
    c.globalCompositeOperation = 'destination-over';
    c.drawImage(item.img, item.x, item.y);
    debugger;
  });
  setDragListeners(); // }
}
function drawGardenItem(e) {
  function random(max) {
    return 100 + Math.random() * (max - 200);
  } // return (e) => {


  var img = new Image();
  img.src = "".concat(e.target.src);
  var newItem = {
    img: img,
    x: random(w),
    y: random(h),
    width: parseInt(e.target.style.width)
  };
  gardenItems.push(newItem);
  draw(); // }
}

function setDragListeners() {
  // debugger;
  var offset = {};
  gardenItems.map(function (item) {
    document.addEventListener("mousedown", function (event) {
      if (Object(_utils__WEBPACK_IMPORTED_MODULE_0__["itemPointCollision"])(event.offsetX, event.offsetY, item)) {
        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseup", onMouseUp); // debugger;

        offset.x = event.offsetX - item.x;
        offset.y = event.offsetY - item.y;
      }
    });

    function onMouseMove(event) {
      // debugger;
      item.x = event.offsetX - offset.x;
      item.y = event.offsetY - offset.y; // debugger;

      draw();
    }

    function onMouseUp(event) {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    }
  });
}

/***/ }),

/***/ "./src/scripts/utils.js":
/*!******************************!*\
  !*** ./src/scripts/utils.js ***!
  \******************************/
/*! exports provided: itemPointCollision, distanceXY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "itemPointCollision", function() { return itemPointCollision; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "distanceXY", function() { return distanceXY; });
function itemPointCollision(x, y, item) {
  // debugger;
  return distanceXY(x, y, item.x, item.y) < item.width;
}
function distanceXY(x0, y0, x1, y1) {
  var dx = x1 - x0,
      dy = y1 - y0; // debugger;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2RyYXcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9jYW52YXMuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2dhcmRlbi1pdGVtcy5zY3NzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL25hdmJhci5zY3NzIl0sIm5hbWVzIjpbInNhbmRib3giLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwidyIsIndpZHRoIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImgiLCJoZWlnaHQiLCJpbm5lckhlaWdodCIsImMiLCJnZXRDb250ZXh0IiwiaW1hZ2VTbW9vdGhpbmdFbmFibGVkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImRyYXdHYXJkZW5JdGVtIiwicXVlcnlTZWxlY3RvciIsImNsZWFyQ2FudmFzIiwiY2xlYXJSZWN0IiwiYW5pbWF0ZVJha2UiLCJSYWtlIiwieSIsImRYIiwic3R5bGUiLCJjWCIsInB1bGxSYWtlIiwiaSIsInRvcFkiLCJiZWdpblBhdGgiLCJtb3ZlVG8iLCJsaW5lVG8iLCJzdHJva2VTdHlsZSIsInN0cm9rZSIsIm1vdmUiLCJyYWtlQiIsInJha2VXIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZ2FyZGVuSXRlbXMiLCJkcmF3IiwibWFwIiwiaXRlbSIsImdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiIsImRyYXdJbWFnZSIsImltZyIsIngiLCJzZXREcmFnTGlzdGVuZXJzIiwiZSIsInJhbmRvbSIsIm1heCIsIk1hdGgiLCJJbWFnZSIsInNyYyIsInRhcmdldCIsIm5ld0l0ZW0iLCJwYXJzZUludCIsInB1c2giLCJvZmZzZXQiLCJldmVudCIsIml0ZW1Qb2ludENvbGxpc2lvbiIsIm9mZnNldFgiLCJvZmZzZXRZIiwib25Nb3VzZU1vdmUiLCJvbk1vdXNlVXAiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZGlzdGFuY2VYWSIsIngwIiwieTAiLCJ4MSIsInkxIiwiZHgiLCJkeSIsInNxcnQiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBSUEsT0FBTyxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsU0FBeEIsQ0FBZDtBQUNJLElBQUlDLENBQUMsR0FBR0gsT0FBTyxDQUFDSSxLQUFSLEdBQWdCQyxNQUFNLENBQUNDLFVBQS9CO0FBQ0EsSUFBSUMsQ0FBQyxHQUFHUCxPQUFPLENBQUNRLE1BQVIsR0FBaUIsT0FBT0gsTUFBTSxDQUFDSSxXQUF2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NUIsRUFBZ0NDLEVBQWhDLEVBQW9DO0FBQ3pDLE1BQUlDLEVBQUUsR0FBR0YsRUFBRSxHQUFHRixFQUFkO0FBQUEsTUFDQ0ssRUFBRSxHQUFHRixFQUFFLEdBQUdGLEVBRFgsQ0FEeUMsQ0FHeEM7O0FBQ0QsU0FBT2pCLElBQUksQ0FBQ3NCLElBQUwsQ0FBVUYsRUFBRSxHQUFHQSxFQUFMLEdBQVVDLEVBQUUsR0FBR0EsRUFBekIsQ0FBUDtBQUNELEM7Ozs7Ozs7Ozs7O0FDVkQsdUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsdUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0ICcuL3N0eWxlcy9pbmRleC5zY3NzJztcbmltcG9ydCAnLi9zdHlsZXMvbmF2YmFyLnNjc3MnO1xuaW1wb3J0ICcuL3N0eWxlcy9jYW52YXMuc2Nzcyc7XG5pbXBvcnQgJy4vc3R5bGVzL2dhcmRlbi1pdGVtcy5zY3NzJztcbmltcG9ydCB7IGRyYXdHYXJkZW5JdGVtIH0gZnJvbSAnLi9zY3JpcHRzL2RyYXcuanMnXG5cbmxldCBzYW5kYm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzYW5kYm94XCIpO1xuICAgIGxldCB3ID0gc2FuZGJveC53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgIGxldCBoID0gc2FuZGJveC5oZWlnaHQgPSAwLjc1ICogd2luZG93LmlubmVySGVpZ2h0O1xubGV0IGMgPSBzYW5kYm94LmdldENvbnRleHQoXCIyZFwiKTtcbiAgICBjLmltYWdlU21vb3RoaW5nRW5hYmxlZCA9IGZhbHNlO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG5cbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdG9uZS0yXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkcmF3R2FyZGVuSXRlbSk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdG9uZS00XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkcmF3R2FyZGVuSXRlbSk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdG9uZS0zXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkcmF3R2FyZGVuSXRlbSk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdG9uZS0xXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkcmF3R2FyZGVuSXRlbSk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdG9uZS1waWxlLTFcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRyYXdHYXJkZW5JdGVtKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0b25lLXBpbGUtMlwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZHJhd0dhcmRlbkl0ZW0pO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGFudGVyblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZHJhd0dhcmRlbkl0ZW0pO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYm9uemFpLTFcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRyYXdHYXJkZW5JdGVtKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJvbnphaS0yXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkcmF3R2FyZGVuSXRlbSk7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NsZWFyLWNhbnZhc1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xlYXJDYW52YXMpO1xuXG4gICAgZnVuY3Rpb24gY2xlYXJDYW52YXMoKSB7XG4gICAgICAgIGMuY2xlYXJSZWN0KDAsIDAsIHcsIGgpO1xuICAgIH1cblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcmFrZS1wbGF5XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhbmltYXRlUmFrZSk7XG4gICAgXG4gICAgZnVuY3Rpb24gUmFrZSh5LCBkWCwgc3R5bGUpIHtcbiAgICAgICAgbGV0IGNYID0gMDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICAgICAgdGhpcy5kWCA9IGRYO1xuICAgICAgICB0aGlzLnN0eWxlID0gc3R5bGU7XG5cbiAgICAgICAgdGhpcy5wdWxsUmFrZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgdG9wWSA9IHRoaXMueSArIChpICogMTApO1xuICAgICAgICAgICAgICAgIGMuYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgYy5tb3ZlVG8oMCwgdG9wWSk7XG4gICAgICAgICAgICAgICAgYy5saW5lVG8oY1gsIHRvcFkpO1xuICAgICAgICAgICAgICAgIGMuc3Ryb2tlU3R5bGUgPSB0aGlzLnN0eWxlO1xuICAgICAgICAgICAgICAgIGMuc3Ryb2tlKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgICAgICB0aGlzLm1vdmUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmIChjWCA9PT0gdyApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnkgKz0gNTA7XG4gICAgICAgICAgICAgICAgY1ggPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY1ggKz0gdGhpcy5kWDtcblxuICAgICAgICAgICAgdGhpcy5wdWxsUmFrZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbGV0IHJha2VCID0gbmV3IFJha2UoMTAsIDIsJyMyNjEzMDgnKVxuICAgIGxldCByYWtlVyA9IG5ldyBSYWtlKDksIDIsICd3aGl0ZScpXG5cbiAgICBmdW5jdGlvbiBhbmltYXRlUmFrZSgpIHtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGVSYWtlKVxuXG4gICAgICAgIHJha2VXLm1vdmUoKTtcbiAgICAgICAgcmFrZUIubW92ZSgpO1xuICAgICAgICBcbiAgICAgICAgaWYgKHJha2VCLnkgPj0gdyApIHtcbiAgICAgICAgICAgIHJha2VCLmRYID0gMDtcbiAgICAgICAgICAgIHJha2VXLmRYID0gMDtcbiAgICAgICAgfVxuICAgIH1cblxufSlcblxuLy8gVGhpcyB3aWxsIGRyYXcgYSB0cmVlOlxuLy8gbGV0IHRyZWUgPSBuZXcgSW1hZ2UoKTtcbi8vICAgICB0cmVlLnNyYyA9IFwiLi9zcmMvaW1hZ2VzL2dhcmRlbi1pdGVtcy9ib256YWktMi5wbmdcIjsgIFxuXG4vLyAgICAgZHJhdyh0cmVlLCAyMDAsIDIwKTsiLCJpbXBvcnQge2l0ZW1Qb2ludENvbGxpc2lvbn0gZnJvbSAnLi91dGlscyc7XG5cblxubGV0IHNhbmRib3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNhbmRib3hcIik7XG5sZXQgdyA9IHNhbmRib3gud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbmxldCBoID0gc2FuZGJveC5oZWlnaHQgPSAwLjc1ICogd2luZG93LmlubmVySGVpZ2h0O1xubGV0IGMgPSBzYW5kYm94LmdldENvbnRleHQoXCIyZFwiKTtcblxubGV0IGdhcmRlbkl0ZW1zID0gW107XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGRyYXcoKXtcbiAgICBjLmNsZWFyUmVjdCgwLDAsIHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQgKiAwLjc1KVxuXG4gICAgLy8gaW1nLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBnYXJkZW5JdGVtcy5tYXAoaXRlbSA9PiB7XG4gICAgICAgICAgICBjLmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbj0nZGVzdGluYXRpb24tb3Zlcic7XG4gICAgICAgICAgICBjLmRyYXdJbWFnZShpdGVtLmltZywgaXRlbS54LCBpdGVtLnkpO1xuICAgICAgICAgICAgZGVidWdnZXI7XG4gICAgICAgIH0pXG4gICAgICAgIHNldERyYWdMaXN0ZW5lcnMoKTtcbiAgICAvLyB9XG59IFxuXG5leHBvcnQgZnVuY3Rpb24gZHJhd0dhcmRlbkl0ZW0oZSkge1xuICAgICAgICBmdW5jdGlvbiByYW5kb20obWF4KSB7XG4gICAgICAgICAgICByZXR1cm4gMTAwICsgKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gMjAwKSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gcmV0dXJuIChlKSA9PiB7XG4gICAgICAgICAgICBsZXQgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICBpbWcuc3JjID0gYCR7ZS50YXJnZXQuc3JjfWA7IFxuICAgICAgICAgICAgbGV0IG5ld0l0ZW0gPSB7XG4gICAgICAgICAgICAgICAgaW1nOiBpbWcsXG4gICAgICAgICAgICAgICAgeDogcmFuZG9tKHcpLFxuICAgICAgICAgICAgICAgIHk6IHJhbmRvbShoKSxcbiAgICAgICAgICAgICAgICB3aWR0aDogcGFyc2VJbnQoZS50YXJnZXQuc3R5bGUud2lkdGgpXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgZ2FyZGVuSXRlbXMucHVzaChuZXdJdGVtKTtcbiAgICAgICAgICAgIGRyYXcoKTtcbiAgICAgICAgLy8gfVxuICAgIH1cblxuXG5cbmZ1bmN0aW9uIHNldERyYWdMaXN0ZW5lcnMoKSB7XG4gICAgLy8gZGVidWdnZXI7XG4gICAgbGV0XHRvZmZzZXQgPSB7fTtcbiAgICBnYXJkZW5JdGVtcy5tYXAoaXRlbSA9PiB7XG5cbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmKGl0ZW1Qb2ludENvbGxpc2lvbihldmVudC5vZmZzZXRYLCBldmVudC5vZmZzZXRZLCBpdGVtKSkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgb25Nb3VzZU1vdmUpO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIG9uTW91c2VVcCk7XG4gICAgICAgICAgICAgICAgLy8gZGVidWdnZXI7XG4gICAgICAgICAgICAgICAgb2Zmc2V0LnggPSBldmVudC5vZmZzZXRYIC0gaXRlbS54O1xuICAgICAgICAgICAgICAgIG9mZnNldC55ID0gZXZlbnQub2Zmc2V0WSAtIGl0ZW0ueTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgZnVuY3Rpb24gb25Nb3VzZU1vdmUoZXZlbnQpIHtcbiAgICAgICAgICAgIC8vIGRlYnVnZ2VyO1xuICAgICAgICAgICAgaXRlbS54ID0gZXZlbnQub2Zmc2V0WCAtIG9mZnNldC54O1xuICAgICAgICAgICAgaXRlbS55ID0gZXZlbnQub2Zmc2V0WSAtIG9mZnNldC55O1xuICAgICAgICAgICAgLy8gZGVidWdnZXI7XG4gICAgICAgICAgICBkcmF3KCk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBvbk1vdXNlVXAoZXZlbnQpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgb25Nb3VzZU1vdmUpO1xuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgb25Nb3VzZVVwKTtcbiAgICAgICAgfVxuICAgIH0pXG5cbn0iLCJleHBvcnQgZnVuY3Rpb24gaXRlbVBvaW50Q29sbGlzaW9uKHgsIHksIGl0ZW0pIHtcblx0Ly8gZGVidWdnZXI7XG5cdHJldHVybiBkaXN0YW5jZVhZKHgsIHksIGl0ZW0ueCwgaXRlbS55KSA8IGl0ZW0ud2lkdGg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXN0YW5jZVhZKHgwLCB5MCwgeDEsIHkxKSB7XG5cdFx0bGV0IGR4ID0geDEgLSB4MCxcblx0XHRcdGR5ID0geTEgLSB5MDtcblx0XHRcdC8vIGRlYnVnZ2VyO1xuXHRcdHJldHVybiBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpO1xufVxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==