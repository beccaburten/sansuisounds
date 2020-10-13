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
/* harmony import */ var _scripts_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scripts/utils */ "./src/scripts/utils.js");




 // import * as DragDropUtil from './scripts/dragdrop.js';
// import { draw } from './scripts/draw.js'

var sandbox = document.getElementById("sandbox");
var w = sandbox.width = window.innerWidth;
var h = sandbox.height = 0.75 * window.innerHeight; //attempt to resize canvas on window resize:
// sandbox.addEventListener("resize", ()=> {
//     w = sandbox.width = window.innerWidth;
//     h = sandbox.height = 0.75 * window.innerHeight;
// })

var c = sandbox.getContext("2d");
c.imageSmoothingEnabled = false;
document.addEventListener("DOMContentLoaded", function () {
  var tree = new Image();
  tree.src = "./src/images/garden-items/bonzai-2.png";
  draw(tree, 200, 20);

  function draw() {
    c.clearRect(0, 0, w, h);

    tree.onload = function () {
      c.drawImage(tree, 200, 20);
    };
  }

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
});

window.onload = function () {
  var sandbox = document.getElementById("sandbox");
  var width = sandbox.width = window.innerWidth;
  var height = sandbox.height = 0.75 * window.innerHeight;
  var c = sandbox.getContext("2d");
  var handle = {
    x: width / 2,
    y: height / 2,
    radius: 20
  },
      offset = {};
  drawHandle();

  function drawHandle() {
    c.clearRect(0, 0, width, height);
    c.fillStyle = "black";
    c.beginPath();
    c.arc(handle.x, handle.y, handle.radius, 0, Math.PI * 2, false);
    c.fill();
  }

  document.addEventListener("mousedown", function (event) {
    if (Object(_scripts_utils__WEBPACK_IMPORTED_MODULE_4__["circlePointCollision"])(event.offsetX, event.offsetY, handle)) {
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);
      offset.x = event.offsetX - handle.x;
      offset.y = event.offsetY - handle.y;
    }
  });

  function onMouseMove(event) {
    handle.x = event.offsetX; // - offset.x;

    handle.y = event.offsetY; // - offset.y;

    drawHandle();
  }

  function onMouseUp(event) {
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseup", onMouseUp);
  }
}; // putting this inside DOMContentLoaded will render a tree
// draw();
// function draw(){
//     c.clearRect(0,0, w, h)
//     tree.onload = function(){
//         c.drawImage(tree, 200, 20);
//     }
// } 
// mouse listeners/dragging DOES NOT work
// function distanceMoved(x, y, item) {
//     function distanceXY (x0, y0, x1, y1) {
//         let dx = x1 - x0, dy = y1 - y0;
//         return Math.sqrt(dx * dx + dy * dy);
//     }
// 	return distanceXY(x, y, item.x, item.y) < (item.width / 2);
// }
// document.addEventListener("mousedown", (e)=>{
//         if(distanceMoved(e.clientX, e.clientY, tree)) {
//             document.addEventListener("mousemove", onMouseMove);
//             document.addEventListener("mouseup", onMouseUp);
//         }
//     }
// )
// function onMouseMove(e) {
//     tree.x = e.clientX;
//     tree.y = e.clientY;
//     draw();
// }
// function onMouseUp() {
//     document.removeEventListener("mousemove", onMouseMove);
//     document.removeEventListener("mouseup", onMouseUp);
// }

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
function circlePointCollision(x, y, circle) {
  return distanceXY(x, y, circle.x, circle.y) < circle.radius;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3V0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvY2FudmFzLnNjc3M/NzY0MCIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2dhcmRlbi1pdGVtcy5zY3NzP2ZhNTciLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzP2M4MDciLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9uYXZiYXIuc2Nzcz8yNDg0Il0sIm5hbWVzIjpbInNhbmRib3giLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwidyIsIndpZHRoIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImgiLCJoZWlnaHQiLCJpbm5lckhlaWdodCIsImMiLCJnZXRDb250ZXh0IiwiaW1hZ2VTbW9vdGhpbmdFbmFibGVkIiwiYWRkRXZlbnRMaXN0ZW5lciIsInRyZWUiLCJJbWFnZSIsInNyYyIsImRyYXciLCJjbGVhclJlY3QiLCJvbmxvYWQiLCJkcmF3SW1hZ2UiLCJxdWVyeVNlbGVjdG9yIiwiY2xlYXJDYW52YXMiLCJhbmltYXRlUmFrZSIsIlJha2UiLCJ5IiwiZFgiLCJzdHlsZSIsImNYIiwicHVsbFJha2UiLCJpIiwidG9wWSIsImJlZ2luUGF0aCIsIm1vdmVUbyIsImxpbmVUbyIsInN0cm9rZVN0eWxlIiwic3Ryb2tlIiwibW92ZSIsInJha2VCIiwicmFrZVciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJoYW5kbGUiLCJ4IiwicmFkaXVzIiwib2Zmc2V0IiwiZHJhd0hhbmRsZSIsImZpbGxTdHlsZSIsImFyYyIsIk1hdGgiLCJQSSIsImZpbGwiLCJldmVudCIsImNpcmNsZVBvaW50Q29sbGlzaW9uIiwib2Zmc2V0WCIsIm9mZnNldFkiLCJvbk1vdXNlTW92ZSIsIm9uTW91c2VVcCIsInJlbW92ZUV2ZW50TGlzdGVuZXIi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RU0sU0FBU2dCLFVBQVQsQ0FBb0JDLEVBQXBCLEVBQXdCQyxFQUF4QixFQUE0QkMsRUFBNUIsRUFBZ0NDLEVBQWhDLEVBQW9DO0FBQ3pDLE1BQUlDLEVBQUUsR0FBR0YsRUFBRSxHQUFHRixFQUFkO0FBQUEsTUFDQ0ssRUFBRSxHQUFHRixFQUFFLEdBQUdGLEVBRFg7QUFFQSxTQUFPYixJQUFJLENBQUNrQixJQUFMLENBQVVGLEVBQUUsR0FBR0EsRUFBTCxHQUFVQyxFQUFFLEdBQUdBLEVBQXpCLENBQVA7QUFDRCxDOzs7Ozs7Ozs7OztBQ1JELHVDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLHVDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCAnLi9zdHlsZXMvaW5kZXguc2Nzcyc7XG5pbXBvcnQgJy4vc3R5bGVzL25hdmJhci5zY3NzJztcbmltcG9ydCAnLi9zdHlsZXMvY2FudmFzLnNjc3MnO1xuaW1wb3J0ICcuL3N0eWxlcy9nYXJkZW4taXRlbXMuc2Nzcyc7XG5pbXBvcnQge2NpcmNsZVBvaW50Q29sbGlzaW9ufSBmcm9tICcuL3NjcmlwdHMvdXRpbHMnO1xuXG4vLyBpbXBvcnQgKiBhcyBEcmFnRHJvcFV0aWwgZnJvbSAnLi9zY3JpcHRzL2RyYWdkcm9wLmpzJztcbi8vIGltcG9ydCB7IGRyYXcgfSBmcm9tICcuL3NjcmlwdHMvZHJhdy5qcydcblxubGV0IHNhbmRib3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNhbmRib3hcIik7XG4gICAgbGV0IHcgPSBzYW5kYm94LndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgbGV0IGggPSBzYW5kYm94LmhlaWdodCA9IDAuNzUgKiB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgLy9hdHRlbXB0IHRvIHJlc2l6ZSBjYW52YXMgb24gd2luZG93IHJlc2l6ZTpcbiAgICAvLyBzYW5kYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgKCk9PiB7XG4gICAgLy8gICAgIHcgPSBzYW5kYm94LndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgLy8gICAgIGggPSBzYW5kYm94LmhlaWdodCA9IDAuNzUgKiB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgLy8gfSlcbmxldCBjID0gc2FuZGJveC5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgYy5pbWFnZVNtb290aGluZ0VuYWJsZWQgPSBmYWxzZTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICAgIFxuICAgIGxldCB0cmVlID0gbmV3IEltYWdlKCk7XG4gICAgdHJlZS5zcmMgPSBcIi4vc3JjL2ltYWdlcy9nYXJkZW4taXRlbXMvYm9uemFpLTIucG5nXCI7ICBcblxuICAgIGRyYXcodHJlZSwgMjAwLCAyMCk7XG5cbiAgICBmdW5jdGlvbiBkcmF3KCkge1xuICAgICAgICBjLmNsZWFyUmVjdCgwLDAsIHcsIGgpXG4gICAgICAgIHRyZWUub25sb2FkID0gZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGMuZHJhd0ltYWdlKHRyZWUsIDIwMCwgMjApO1xuICAgICAgICB9XG4gICAgfSBcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2xlYXItY2FudmFzXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbGVhckNhbnZhcyk7XG5cbiAgICBmdW5jdGlvbiBjbGVhckNhbnZhcygpIHtcbiAgICAgICAgYy5jbGVhclJlY3QoMCwgMCwgdywgaCk7XG4gICAgfVxuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyYWtlLXBsYXlcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFuaW1hdGVSYWtlKTtcbiAgICBcbiAgICBmdW5jdGlvbiBSYWtlKHksIGRYLCBzdHlsZSkge1xuICAgICAgICBsZXQgY1ggPSAwO1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICB0aGlzLmRYID0gZFg7XG4gICAgICAgIHRoaXMuc3R5bGUgPSBzdHlsZTtcblxuICAgICAgICB0aGlzLnB1bGxSYWtlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCB0b3BZID0gdGhpcy55ICsgKGkgKiAxMCk7XG4gICAgICAgICAgICAgICAgYy5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICBjLm1vdmVUbygwLCB0b3BZKTtcbiAgICAgICAgICAgICAgICBjLmxpbmVUbyhjWCwgdG9wWSk7XG4gICAgICAgICAgICAgICAgYy5zdHJva2VTdHlsZSA9IHRoaXMuc3R5bGU7XG4gICAgICAgICAgICAgICAgYy5zdHJva2UoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgICAgIHRoaXMubW92ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKGNYID09PSB3ICkge1xuICAgICAgICAgICAgICAgIHRoaXMueSArPSA1MDtcbiAgICAgICAgICAgICAgICBjWCA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjWCArPSB0aGlzLmRYO1xuXG4gICAgICAgICAgICB0aGlzLnB1bGxSYWtlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgcmFrZUIgPSBuZXcgUmFrZSgxMCwgMiwnIzI2MTMwOCcpXG4gICAgbGV0IHJha2VXID0gbmV3IFJha2UoOSwgMiwgJ3doaXRlJylcblxuICAgIGZ1bmN0aW9uIGFuaW1hdGVSYWtlKCkge1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZVJha2UpXG5cbiAgICAgICAgcmFrZVcubW92ZSgpO1xuICAgICAgICByYWtlQi5tb3ZlKCk7XG4gICAgICAgIFxuICAgICAgICBpZiAocmFrZUIueSA+PSB3ICkge1xuICAgICAgICAgICAgcmFrZUIuZFggPSAwO1xuICAgICAgICAgICAgcmFrZVcuZFggPSAwO1xuICAgICAgICB9XG4gICAgfVxuXG59KVxuXG5cbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpIHtcblx0bGV0IHNhbmRib3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNhbmRib3hcIik7XG4gICAgbGV0IHdpZHRoID0gc2FuZGJveC53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgIGxldCBoZWlnaHQgPSBzYW5kYm94LmhlaWdodCA9IDAuNzUgKiB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgbGV0IGMgPSBzYW5kYm94LmdldENvbnRleHQoXCIyZFwiKTtcblx0bGV0XHRoYW5kbGUgPSB7XG5cdFx0XHR4OiB3aWR0aCAvIDIsXG5cdFx0XHR5OiBoZWlnaHQgLyAyLFxuXHRcdFx0cmFkaXVzOiAyMFxuXHRcdH0sXG5cdFx0b2Zmc2V0ID0ge307XG5cblx0ZHJhd0hhbmRsZSgpO1xuXG5cdGZ1bmN0aW9uIGRyYXdIYW5kbGUoKSB7XG5cdFx0Yy5jbGVhclJlY3QoMCwgMCwgd2lkdGgsIGhlaWdodCk7XG5cblx0XHRjLmZpbGxTdHlsZSA9IFwiYmxhY2tcIjtcblx0XHRjLmJlZ2luUGF0aCgpO1xuXHRcdGMuYXJjKGhhbmRsZS54LCBoYW5kbGUueSwgaGFuZGxlLnJhZGl1cywgMCwgTWF0aC5QSSAqIDIsIGZhbHNlKTtcblx0XHRjLmZpbGwoKTtcblx0fVxuXG5cdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgKGV2ZW50KSA9PiB7XG5cdFx0aWYoY2lyY2xlUG9pbnRDb2xsaXNpb24oZXZlbnQub2Zmc2V0WCwgZXZlbnQub2Zmc2V0WSwgaGFuZGxlKSkge1xuXHRcdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBvbk1vdXNlTW92ZSk7XG5cdFx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBvbk1vdXNlVXApO1xuXHRcdFx0b2Zmc2V0LnggPSBldmVudC5vZmZzZXRYIC0gaGFuZGxlLng7XG5cdFx0XHRvZmZzZXQueSA9IGV2ZW50Lm9mZnNldFkgLSBoYW5kbGUueTtcblx0XHR9XG5cdH0pO1xuXG5cdGZ1bmN0aW9uIG9uTW91c2VNb3ZlKGV2ZW50KSB7XG5cdFx0aGFuZGxlLnggPSBldmVudC5vZmZzZXRYOy8vIC0gb2Zmc2V0Lng7XG5cdFx0aGFuZGxlLnkgPSBldmVudC5vZmZzZXRZOy8vIC0gb2Zmc2V0Lnk7XG5cdFx0ZHJhd0hhbmRsZSgpO1xuXHR9XG5cblx0ZnVuY3Rpb24gb25Nb3VzZVVwKGV2ZW50KSB7XG5cdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBvbk1vdXNlTW92ZSk7XG5cdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgb25Nb3VzZVVwKTtcblx0fVxuXG5cbn07XG5cbi8vIHB1dHRpbmcgdGhpcyBpbnNpZGUgRE9NQ29udGVudExvYWRlZCB3aWxsIHJlbmRlciBhIHRyZWVcbiAgICAvLyBkcmF3KCk7XG5cbiAgICAvLyBmdW5jdGlvbiBkcmF3KCl7XG4gICAgLy8gICAgIGMuY2xlYXJSZWN0KDAsMCwgdywgaClcbiAgICAvLyAgICAgdHJlZS5vbmxvYWQgPSBmdW5jdGlvbigpe1xuICAgIC8vICAgICAgICAgYy5kcmF3SW1hZ2UodHJlZSwgMjAwLCAyMCk7XG4gICAgLy8gICAgIH1cbiAgICAvLyB9IFxuXG4vLyBtb3VzZSBsaXN0ZW5lcnMvZHJhZ2dpbmcgRE9FUyBOT1Qgd29ya1xuICAgIC8vIGZ1bmN0aW9uIGRpc3RhbmNlTW92ZWQoeCwgeSwgaXRlbSkge1xuICAgIC8vICAgICBmdW5jdGlvbiBkaXN0YW5jZVhZICh4MCwgeTAsIHgxLCB5MSkge1xuICAgIC8vICAgICAgICAgbGV0IGR4ID0geDEgLSB4MCwgZHkgPSB5MSAtIHkwO1xuICAgIC8vICAgICAgICAgcmV0dXJuIE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSk7XG4gICAgLy8gICAgIH1cblx0Ly8gXHRyZXR1cm4gZGlzdGFuY2VYWSh4LCB5LCBpdGVtLngsIGl0ZW0ueSkgPCAoaXRlbS53aWR0aCAvIDIpO1xuICAgIC8vIH1cbiAgICAvLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIChlKT0+e1xuICAgIC8vICAgICAgICAgaWYoZGlzdGFuY2VNb3ZlZChlLmNsaWVudFgsIGUuY2xpZW50WSwgdHJlZSkpIHtcbiAgICAvLyAgICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIG9uTW91c2VNb3ZlKTtcbiAgICAvLyAgICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBvbk1vdXNlVXApO1xuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICB9XG4gICAgLy8gKVxuICAgIC8vIGZ1bmN0aW9uIG9uTW91c2VNb3ZlKGUpIHtcbiAgICAvLyAgICAgdHJlZS54ID0gZS5jbGllbnRYO1xuICAgIC8vICAgICB0cmVlLnkgPSBlLmNsaWVudFk7XG4gICAgLy8gICAgIGRyYXcoKTtcbiAgICAvLyB9XG4gICAgLy8gZnVuY3Rpb24gb25Nb3VzZVVwKCkge1xuICAgIC8vICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIG9uTW91c2VNb3ZlKTtcbiAgICAvLyAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgb25Nb3VzZVVwKTtcbiAgICAvLyB9IiwiZXhwb3J0IGZ1bmN0aW9uIGNpcmNsZVBvaW50Q29sbGlzaW9uKHgsIHksIGNpcmNsZSkge1xuXHRyZXR1cm4gZGlzdGFuY2VYWSh4LCB5LCBjaXJjbGUueCwgY2lyY2xlLnkpIDwgY2lyY2xlLnJhZGl1cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3RhbmNlWFkoeDAsIHkwLCB4MSwgeTEpIHtcblx0XHRsZXQgZHggPSB4MSAtIHgwLFxuXHRcdFx0ZHkgPSB5MSAtIHkwO1xuXHRcdHJldHVybiBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpO1xufVxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==