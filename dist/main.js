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
  document.getElementById("stone-2").addEventListener("click", Object(_scripts_draw_js__WEBPACK_IMPORTED_MODULE_4__["drawGardenItem"])("stone-2"));
  document.getElementById("stone-4").addEventListener("click", Object(_scripts_draw_js__WEBPACK_IMPORTED_MODULE_4__["drawGardenItem"])("stone-4"));
  document.getElementById("stone-3").addEventListener("click", Object(_scripts_draw_js__WEBPACK_IMPORTED_MODULE_4__["drawGardenItem"])("stone-3"));
  document.getElementById("stone-1").addEventListener("click", Object(_scripts_draw_js__WEBPACK_IMPORTED_MODULE_4__["drawGardenItem"])("stone-1"));
  document.getElementById("stone-pile-1").addEventListener("click", Object(_scripts_draw_js__WEBPACK_IMPORTED_MODULE_4__["drawGardenItem"])("stone-pile-1"));
  document.getElementById("stone-pile-2").addEventListener("click", Object(_scripts_draw_js__WEBPACK_IMPORTED_MODULE_4__["drawGardenItem"])("stone-pile-2"));
  document.getElementById("lantern").addEventListener("click", Object(_scripts_draw_js__WEBPACK_IMPORTED_MODULE_4__["drawGardenItem"])("lantern"));
  document.getElementById("bonzai-1").addEventListener("click", Object(_scripts_draw_js__WEBPACK_IMPORTED_MODULE_4__["drawGardenItem"])("bonzai-1"));
  document.getElementById("bonzai-2").addEventListener("click", Object(_scripts_draw_js__WEBPACK_IMPORTED_MODULE_4__["drawGardenItem"])("bonzai-2"));
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
        debugger;
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
      debugger;
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
var gardenItems = [];
function draw(img, x, y) {
  c.clearRect(0, 0, window.innerWidth, window.innerHeight * 0.75);

  img.onload = function () {
    gardenItems.map(function (item) {
      c.drawImage(item.img, item.x, item.y);
    });
  }; // img.onload = function(){
  //     c.drawImage(img, x, y);
  // }

}
function drawGardenItem(e) {
  function random(max) {
    return 100 + Math.random() * (max - 200);
  }

  return function (e) {
    var img = new Image();
    img.src = "".concat(e.target.src);
    var setW = random(w);
    var setH = random(h);
    gardenItems.push({
      img: img,
      x: setW,
      y: setH,
      width: parseInt(e.target.style.width)
    });
    draw(img, setW, setH);
  };
} // OLD
// export function drawGardenItem(e) {
//     return (e) => {
//         let img = new Image();
//         img.src = `${e.target.src}`; 
//         debugger; 
//         draw(img, w/3, h/3);
//     }
// }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2RyYXcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9jYW52YXMuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2dhcmRlbi1pdGVtcy5zY3NzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL25hdmJhci5zY3NzIl0sIm5hbWVzIjpbInNhbmRib3giLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwidyIsIndpZHRoIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImgiLCJoZWlnaHQiLCJpbm5lckhlaWdodCIsImMiLCJnZXRDb250ZXh0IiwiaW1hZ2VTbW9vdGhpbmdFbmFibGVkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImRyYXdHYXJkZW5JdGVtIiwicXVlcnlTZWxlY3RvciIsImNsZWFyQ2FudmFzIiwiY2xlYXJSZWN0IiwiYW5pbWF0ZVJha2UiLCJSYWtlIiwieSIsImRYIiwic3R5bGUiLCJjWCIsInB1bGxSYWtlIiwiaSIsInRvcFkiLCJiZWdpblBhdGgiLCJtb3ZlVG8iLCJsaW5lVG8iLCJzdHJva2VTdHlsZSIsInN0cm9rZSIsIm1vdmUiLCJyYWtlQiIsInJha2VXIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZ2FyZGVuSXRlbXMiLCJkcmF3IiwiaW1nIiwieCIsIm9ubG9hZCIsIm1hcCIsIml0ZW0iLCJkcmF3SW1hZ2UiLCJlIiwicmFuZG9tIiwibWF4IiwiTWF0aCIsIkltYWdlIiwic3JjIiwidGFyZ2V0Iiwic2V0VyIsInNldEgiLCJwdXNoIiwicGFyc2VJbnQiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7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QUZEO0FBR0gsR0FKRCxDQUgyQixDQVF2QjtBQUNBO0FBQ0E7O0FBQ1A7QUFFTSxTQUFTTixjQUFULENBQXdCOEIsQ0FBeEIsRUFBMkI7QUFDMUIsV0FBU0MsTUFBVCxDQUFnQkMsR0FBaEIsRUFBcUI7QUFDakIsV0FBTyxNQUFPQyxJQUFJLENBQUNGLE1BQUwsTUFBaUJDLEdBQUcsR0FBRyxHQUF2QixDQUFkO0FBQ0g7O0FBQ0QsU0FBTyxVQUFDRixDQUFELEVBQU87QUFDVixRQUFJTixHQUFHLEdBQUcsSUFBSVUsS0FBSixFQUFWO0FBQ0FWLE9BQUcsQ0FBQ1csR0FBSixhQUFhTCxDQUFDLENBQUNNLE1BQUYsQ0FBU0QsR0FBdEI7QUFDQSxRQUFJRSxJQUFJLEdBQUdOLE1BQU0sQ0FBQzFDLENBQUQsQ0FBakI7QUFDQSxRQUFJaUQsSUFBSSxHQUFHUCxNQUFNLENBQUN0QyxDQUFELENBQWpCO0FBQ0E2QixlQUFXLENBQUNpQixJQUFaLENBQWlCO0FBQ2JmLFNBQUcsRUFBRUEsR0FEUTtBQUViQyxPQUFDLEVBQUVZLElBRlU7QUFHYi9CLE9BQUMsRUFBRWdDLElBSFU7QUFJYmhELFdBQUssRUFBRWtELFFBQVEsQ0FBQ1YsQ0FBQyxDQUFDTSxNQUFGLENBQVM1QixLQUFULENBQWVsQixLQUFoQjtBQUpGLEtBQWpCO0FBTUFpQyxRQUFJLENBQUNDLEdBQUQsRUFBTWEsSUFBTixFQUFZQyxJQUFaLENBQUo7QUFDSCxHQVpEO0FBYUgsQyxDQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJOzs7Ozs7Ozs7OztBQ2hEQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSx1QyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgJy4vc3R5bGVzL2luZGV4LnNjc3MnO1xuaW1wb3J0ICcuL3N0eWxlcy9uYXZiYXIuc2Nzcyc7XG5pbXBvcnQgJy4vc3R5bGVzL2NhbnZhcy5zY3NzJztcbmltcG9ydCAnLi9zdHlsZXMvZ2FyZGVuLWl0ZW1zLnNjc3MnO1xuaW1wb3J0IHsgZHJhd0dhcmRlbkl0ZW0gfSBmcm9tICcuL3NjcmlwdHMvZHJhdy5qcydcblxubGV0IHNhbmRib3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNhbmRib3hcIik7XG4gICAgbGV0IHcgPSBzYW5kYm94LndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgbGV0IGggPSBzYW5kYm94LmhlaWdodCA9IDAuNzUgKiB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5sZXQgYyA9IHNhbmRib3guZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIGMuaW1hZ2VTbW9vdGhpbmdFbmFibGVkID0gZmFsc2U7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RvbmUtMlwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZHJhd0dhcmRlbkl0ZW0oXCJzdG9uZS0yXCIpKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0b25lLTRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRyYXdHYXJkZW5JdGVtKFwic3RvbmUtNFwiKSk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdG9uZS0zXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkcmF3R2FyZGVuSXRlbShcInN0b25lLTNcIikpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RvbmUtMVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZHJhd0dhcmRlbkl0ZW0oXCJzdG9uZS0xXCIpKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0b25lLXBpbGUtMVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZHJhd0dhcmRlbkl0ZW0oXCJzdG9uZS1waWxlLTFcIikpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RvbmUtcGlsZS0yXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkcmF3R2FyZGVuSXRlbShcInN0b25lLXBpbGUtMlwiKSk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsYW50ZXJuXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkcmF3R2FyZGVuSXRlbShcImxhbnRlcm5cIikpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYm9uemFpLTFcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRyYXdHYXJkZW5JdGVtKFwiYm9uemFpLTFcIikpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYm9uemFpLTJcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRyYXdHYXJkZW5JdGVtKFwiYm9uemFpLTJcIikpO1xuXG5cblxuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjbGVhci1jYW52YXNcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsZWFyQ2FudmFzKTtcblxuICAgIGZ1bmN0aW9uIGNsZWFyQ2FudmFzKCkge1xuICAgICAgICBjLmNsZWFyUmVjdCgwLCAwLCB3LCBoKTtcbiAgICB9XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Jha2UtcGxheVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYW5pbWF0ZVJha2UpO1xuICAgIFxuICAgIGZ1bmN0aW9uIFJha2UoeSwgZFgsIHN0eWxlKSB7XG4gICAgICAgIGxldCBjWCA9IDA7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIHRoaXMuZFggPSBkWDtcbiAgICAgICAgdGhpcy5zdHlsZSA9IHN0eWxlO1xuXG4gICAgICAgIHRoaXMucHVsbFJha2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IHRvcFkgPSB0aGlzLnkgKyAoaSAqIDEwKTtcbiAgICAgICAgICAgICAgICBjLmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICAgIGMubW92ZVRvKDAsIHRvcFkpO1xuICAgICAgICAgICAgICAgIGMubGluZVRvKGNYLCB0b3BZKTtcbiAgICAgICAgICAgICAgICBjLnN0cm9rZVN0eWxlID0gdGhpcy5zdHlsZTtcbiAgICAgICAgICAgICAgICBjLnN0cm9rZSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5tb3ZlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAoY1ggPT09IHcgKSB7XG4gICAgICAgICAgICAgICAgZGVidWdnZXI7XG4gICAgICAgICAgICAgICAgdGhpcy55ICs9IDUwO1xuICAgICAgICAgICAgICAgIGNYID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNYICs9IHRoaXMuZFg7XG5cbiAgICAgICAgICAgIHRoaXMucHVsbFJha2UoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxldCByYWtlQiA9IG5ldyBSYWtlKDEwLCAyLCcjMjYxMzA4JylcbiAgICBsZXQgcmFrZVcgPSBuZXcgUmFrZSg5LCAyLCAnd2hpdGUnKVxuXG4gICAgZnVuY3Rpb24gYW5pbWF0ZVJha2UoKSB7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlUmFrZSlcblxuICAgICAgICByYWtlVy5tb3ZlKCk7XG4gICAgICAgIHJha2VCLm1vdmUoKTtcbiAgICAgICAgXG4gICAgICAgIGlmIChyYWtlQi55ID49IHcgKSB7XG4gICAgICAgICAgICBkZWJ1Z2dlcjtcbiAgICAgICAgICAgIHJha2VCLmRYID0gMDtcbiAgICAgICAgICAgIHJha2VXLmRYID0gMDtcbiAgICAgICAgfVxuICAgIH1cblxufSlcblxuLy8gVGhpcyB3aWxsIGRyYXcgYSB0cmVlOlxuLy8gbGV0IHRyZWUgPSBuZXcgSW1hZ2UoKTtcbi8vICAgICB0cmVlLnNyYyA9IFwiLi9zcmMvaW1hZ2VzL2dhcmRlbi1pdGVtcy9ib256YWktMi5wbmdcIjsgIFxuXG4vLyAgICAgZHJhdyh0cmVlLCAyMDAsIDIwKTsiLCJsZXQgc2FuZGJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2FuZGJveFwiKTtcbmxldCB3ID0gc2FuZGJveC53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xubGV0IGggPSBzYW5kYm94LmhlaWdodCA9IDAuNzUgKiB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5sZXQgYyA9IHNhbmRib3guZ2V0Q29udGV4dChcIjJkXCIpO1xuXG5sZXQgZ2FyZGVuSXRlbXMgPSBbXTtcblxuXG5leHBvcnQgZnVuY3Rpb24gZHJhdyhpbWcsIHgsIHkpe1xuICAgIGMuY2xlYXJSZWN0KDAsMCwgd2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCAqIDAuNzUpXG5cbiAgICBpbWcub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGdhcmRlbkl0ZW1zLm1hcChpdGVtID0+IHtcbiAgICAgICAgICAgIGMuZHJhd0ltYWdlKGl0ZW0uaW1nLCBpdGVtLngsIGl0ZW0ueSk7XG4gICAgICAgIH0pXG4gICAgfVxuICAgICAgICAvLyBpbWcub25sb2FkID0gZnVuY3Rpb24oKXtcbiAgICAgICAgLy8gICAgIGMuZHJhd0ltYWdlKGltZywgeCwgeSk7XG4gICAgICAgIC8vIH1cbn0gXG5cbmV4cG9ydCBmdW5jdGlvbiBkcmF3R2FyZGVuSXRlbShlKSB7XG4gICAgICAgIGZ1bmN0aW9uIHJhbmRvbShtYXgpIHtcbiAgICAgICAgICAgIHJldHVybiAxMDAgKyAoTWF0aC5yYW5kb20oKSAqIChtYXggLSAyMDApKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKGUpID0+IHtcbiAgICAgICAgICAgIGxldCBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgIGltZy5zcmMgPSBgJHtlLnRhcmdldC5zcmN9YDsgXG4gICAgICAgICAgICBsZXQgc2V0VyA9IHJhbmRvbSh3KTtcbiAgICAgICAgICAgIGxldCBzZXRIID0gcmFuZG9tKGgpO1xuICAgICAgICAgICAgZ2FyZGVuSXRlbXMucHVzaCh7XG4gICAgICAgICAgICAgICAgaW1nOiBpbWcsXG4gICAgICAgICAgICAgICAgeDogc2V0VyxcbiAgICAgICAgICAgICAgICB5OiBzZXRILFxuICAgICAgICAgICAgICAgIHdpZHRoOiBwYXJzZUludChlLnRhcmdldC5zdHlsZS53aWR0aClcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZHJhdyhpbWcsIHNldFcsIHNldEgpO1xuICAgICAgICB9XG4gICAgfVxuXG4vLyBPTERcbi8vIGV4cG9ydCBmdW5jdGlvbiBkcmF3R2FyZGVuSXRlbShlKSB7XG4vLyAgICAgcmV0dXJuIChlKSA9PiB7XG4vLyAgICAgICAgIGxldCBpbWcgPSBuZXcgSW1hZ2UoKTtcbi8vICAgICAgICAgaW1nLnNyYyA9IGAke2UudGFyZ2V0LnNyY31gOyBcbi8vICAgICAgICAgZGVidWdnZXI7IFxuLy8gICAgICAgICBkcmF3KGltZywgdy8zLCBoLzMpO1xuLy8gICAgIH1cbi8vIH0iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9