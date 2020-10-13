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




var sandbox = document.getElementById("sandbox");
var w = sandbox.width = window.innerWidth;
var h = sandbox.height = 0.75 * window.innerHeight;
var c = sandbox.getContext("2d");
c.imageSmoothingEnabled = false; //5 Lines

document.addEventListener("DOMContentLoaded", function () {
  var tree = new Image();
  tree.src = "./src/images/garden-items/bonzai-2.png";
  draw();

  function draw() {
    c.clearRect(0, 0, w, h);

    tree.onload = function () {
      c.drawImage(tree, 200, 20);
    };
  }

  function distanceMoved(x, y, item) {
    function distanceXY(x0, y0, x1, y1) {
      var dx = x1 - x0,
          dy = y1 - y0;
      return Math.sqrt(dx * dx + dy * dy);
    }

    return distanceXY(x, y, item.x, item.y) < item.width / 2;
  }

  document.addEventListener("mousedown", function (e) {
    if (distanceMoved(e.clientX, e.clientY, tree)) {
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);
    }
  });

  function onMouseMove(e) {
    tree.x = e.clientX;
    tree.y = e.clientY;
    draw();
  }

  function onMouseUp() {
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseup", onMouseUp);
  } // 5-LINE RAKE DRAW >>> this code works to generate 5 lines
  // for (let i=0; i < 5; i++) {
  //     let newY = 5 + (i * 10);
  //     c.beginPath();
  //     c.moveTo(0, newY - 1);
  //     c.lineTo(w, newY - 1);
  //     c.strokeStyle = 'white';
  //     c.stroke();
  // }
  // for (let i=0; i < 5; i++) {
  //     let newY = 5 + (i * 10);
  //     c.beginPath();
  //     c.moveTo(0, newY);
  //     c.lineTo(w, newY);
  //     c.strokeStyle = '#261308';
  //     c.stroke();
  // }

}); // SINGLE LINE WORKS WELL
// function Line(y, dX, style) {
//     let cX = 0;
//     this.y = y;
//     this.dX = dX;
//     this.style = style;
//     this.draw = function() {
//         c.beginPath();
//         c.moveTo(0, this.y);
//         c.lineTo(cX, this.y);
//         c.strokeStyle = this.style;
//         c.stroke();
//     }
//     this.move = function() {
//         if (cX === w) {
//             this.y += 10;
//             cX = 0;
//         }
//         cX += this.dX;
//         this.draw();
//     }
// }

function Rake(y, dX, style) {
  var cX = 0;
  this.y = y;
  this.dX = dX;
  this.style = style;

  this.draw = function () {
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
    this.draw();
  };
} // let y = 10;
// let lineW = new Line(y - 1, 2, 'white')
// let lineB = new Line(y, 2,'#261308')


var rakeB = new Rake(10, 2, '#261308');
var rakeW = new Rake(9, 2, 'white');

function animate() {
  requestAnimationFrame(animate); // lines work to generate simultaneously, rake does not :(
  // lineW.move();
  // lineB.move();

  rakeW.move();
  rakeB.move(); // this draws 5 lines simultaneously
  // for (let i = 0; i < 5; i++) {
  //     let newY = 5 + (i * 10);
  //     c.beginPath();
  //     c.moveTo(0, newY - 1);
  //     c.lineTo(w, newY - 1);
  //     c.strokeStyle = 'white';
  //     c.stroke();
  // }
  // for (let i=0; i < 5; i++) {
  //     let newY = 5 + (i * 10);
  //     c.beginPath();
  //     c.moveTo(0, newY);
  //     c.lineTo(w, newY);
  //     c.strokeStyle = '#261308';
  //     c.stroke();
  // }
}

animate();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvY2FudmFzLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9nYXJkZW4taXRlbXMuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9uYXZiYXIuc2NzcyJdLCJuYW1lcyI6WyJzYW5kYm94IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInciLCJ3aWR0aCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJoIiwiaGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJjIiwiZ2V0Q29udGV4dCIsImltYWdlU21vb3RoaW5nRW5hYmxlZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0cmVlIiwiSW1hZ2UiLCJzcmMiLCJkcmF3IiwiY2xlYXJSZWN0Iiwib25sb2FkIiwiZHJhd0ltYWdlIiwiZGlzdGFuY2VNb3ZlZCIsIngiLCJ5IiwiaXRlbSIsImRpc3RhbmNlWFkiLCJ4MCIsInkwIiwieDEiLCJ5MSIsImR4IiwiZHkiLCJNYXRoIiwic3FydCIsImUiLCJjbGllbnRYIiwiY2xpZW50WSIsIm9uTW91c2VNb3ZlIiwib25Nb3VzZVVwIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIlJha2UiLCJkWCIsInN0eWxlIiwiY1giLCJpIiwidG9wWSIsImJlZ2luUGF0aCIsIm1vdmVUbyIsImxpbmVUbyIsInN0cm9rZVN0eWxlIiwic3Ryb2tlIiwibW92ZSIsInJha2VCIiwicmFrZVciLCJhbmltYXRlIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7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Q3VDLFdBQUYsR0FBZ0IsS0FBS1AsS0FBckI7QUFDQWhDLE9BQUMsQ0FBQ3dDLE1BQUY7QUFDSDtBQUVKLEdBVkQ7O0FBV0EsT0FBS0MsSUFBTCxHQUFZLFlBQVc7QUFDbkIsUUFBSVIsRUFBRSxLQUFLeEMsQ0FBWCxFQUFlO0FBQ1gsV0FBS29CLENBQUwsSUFBVSxFQUFWO0FBQ0FvQixRQUFFLEdBQUcsQ0FBTDtBQUNIOztBQUNEQSxNQUFFLElBQUksS0FBS0YsRUFBWDtBQUVBLFNBQUt4QixJQUFMO0FBQ0gsR0FSRDtBQVNILEMsQ0FFRDtBQUNBO0FBQ0E7OztBQUNBLElBQUltQyxLQUFLLEdBQUcsSUFBSVosSUFBSixDQUFTLEVBQVQsRUFBYSxDQUFiLEVBQWUsU0FBZixDQUFaO0FBQ0EsSUFBSWEsS0FBSyxHQUFHLElBQUliLElBQUosQ0FBUyxDQUFULEVBQVksQ0FBWixFQUFlLE9BQWYsQ0FBWjs7QUFFQSxTQUFTYyxPQUFULEdBQW1CO0FBQ2ZDLHVCQUFxQixDQUFDRCxPQUFELENBQXJCLENBRGUsQ0FHZjtBQUNBO0FBQ0E7O0FBRUFELE9BQUssQ0FBQ0YsSUFBTjtBQUNBQyxPQUFLLENBQUNELElBQU4sR0FSZSxDQVlmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHSDs7QUFFREcsT0FBTyxHOzs7Ozs7Ozs7OztBQzFLUCx1Qzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSx1QyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgJy4vc3R5bGVzL2luZGV4LnNjc3MnO1xuaW1wb3J0ICcuL3N0eWxlcy9uYXZiYXIuc2Nzcyc7XG5pbXBvcnQgJy4vc3R5bGVzL2NhbnZhcy5zY3NzJztcbmltcG9ydCAnLi9zdHlsZXMvZ2FyZGVuLWl0ZW1zLnNjc3MnO1xuXG5cbmxldCBzYW5kYm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzYW5kYm94XCIpO1xuICAgIGxldCB3ID0gc2FuZGJveC53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgIGxldCBoID0gc2FuZGJveC5oZWlnaHQgPSAwLjc1ICogd2luZG93LmlubmVySGVpZ2h0O1xubGV0IGMgPSBzYW5kYm94LmdldENvbnRleHQoXCIyZFwiKTtcbiAgICBjLmltYWdlU21vb3RoaW5nRW5hYmxlZCA9IGZhbHNlO1xuXG5cbi8vNSBMaW5lc1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICAgXG4gICAgbGV0IHRyZWUgPSBuZXcgSW1hZ2UoKTtcbiAgICB0cmVlLnNyYyA9IFwiLi9zcmMvaW1hZ2VzL2dhcmRlbi1pdGVtcy9ib256YWktMi5wbmdcIjsgIFxuICAgIFxuICAgIGRyYXcoKTtcblxuICAgIGZ1bmN0aW9uIGRyYXcoKXtcbiAgICAgICAgYy5jbGVhclJlY3QoMCwwLCB3LCBoKVxuICAgICAgICB0cmVlLm9ubG9hZCA9IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBjLmRyYXdJbWFnZSh0cmVlLCAyMDAsIDIwKTtcbiAgICAgICAgfVxuICAgIH0gXG5cbiAgICBmdW5jdGlvbiBkaXN0YW5jZU1vdmVkKHgsIHksIGl0ZW0pIHtcbiAgICAgICAgZnVuY3Rpb24gZGlzdGFuY2VYWSAoeDAsIHkwLCB4MSwgeTEpIHtcbiAgICAgICAgICAgIGxldCBkeCA9IHgxIC0geDAsIGR5ID0geTEgLSB5MDtcbiAgICAgICAgICAgIHJldHVybiBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpO1xuICAgICAgICB9XG5cdFx0cmV0dXJuIGRpc3RhbmNlWFkoeCwgeSwgaXRlbS54LCBpdGVtLnkpIDwgKGl0ZW0ud2lkdGggLyAyKTtcbiAgICB9XG4gICAgXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCAoZSk9PntcbiAgICAgICAgICAgIGlmKGRpc3RhbmNlTW92ZWQoZS5jbGllbnRYLCBlLmNsaWVudFksIHRyZWUpKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBvbk1vdXNlTW92ZSk7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgb25Nb3VzZVVwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIClcblxuICAgIGZ1bmN0aW9uIG9uTW91c2VNb3ZlKGUpIHtcbiAgICAgICAgdHJlZS54ID0gZS5jbGllbnRYO1xuICAgICAgICB0cmVlLnkgPSBlLmNsaWVudFk7XG4gICAgICAgIGRyYXcoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbk1vdXNlVXAoKSB7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgb25Nb3VzZU1vdmUpO1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBvbk1vdXNlVXApO1xuICAgIH1cblxuXG4gICAgLy8gNS1MSU5FIFJBS0UgRFJBVyA+Pj4gdGhpcyBjb2RlIHdvcmtzIHRvIGdlbmVyYXRlIDUgbGluZXNcbiAgICAvLyBmb3IgKGxldCBpPTA7IGkgPCA1OyBpKyspIHtcbiAgICAvLyAgICAgbGV0IG5ld1kgPSA1ICsgKGkgKiAxMCk7XG4gICAgLy8gICAgIGMuYmVnaW5QYXRoKCk7XG4gICAgLy8gICAgIGMubW92ZVRvKDAsIG5ld1kgLSAxKTtcbiAgICAvLyAgICAgYy5saW5lVG8odywgbmV3WSAtIDEpO1xuICAgIC8vICAgICBjLnN0cm9rZVN0eWxlID0gJ3doaXRlJztcbiAgICAvLyAgICAgYy5zdHJva2UoKTtcbiAgICAvLyB9XG5cbiAgICAvLyBmb3IgKGxldCBpPTA7IGkgPCA1OyBpKyspIHtcbiAgICAvLyAgICAgbGV0IG5ld1kgPSA1ICsgKGkgKiAxMCk7XG4gICAgLy8gICAgIGMuYmVnaW5QYXRoKCk7XG4gICAgLy8gICAgIGMubW92ZVRvKDAsIG5ld1kpO1xuICAgIC8vICAgICBjLmxpbmVUbyh3LCBuZXdZKTtcbiAgICAvLyAgICAgYy5zdHJva2VTdHlsZSA9ICcjMjYxMzA4JztcbiAgICAvLyAgICAgYy5zdHJva2UoKTtcbiAgICAvLyB9XG59KVxuXG5cbi8vIFNJTkdMRSBMSU5FIFdPUktTIFdFTExcbi8vIGZ1bmN0aW9uIExpbmUoeSwgZFgsIHN0eWxlKSB7XG4vLyAgICAgbGV0IGNYID0gMDtcbi8vICAgICB0aGlzLnkgPSB5O1xuLy8gICAgIHRoaXMuZFggPSBkWDtcbi8vICAgICB0aGlzLnN0eWxlID0gc3R5bGU7XG5cbi8vICAgICB0aGlzLmRyYXcgPSBmdW5jdGlvbigpIHtcbi8vICAgICAgICAgYy5iZWdpblBhdGgoKTtcbi8vICAgICAgICAgYy5tb3ZlVG8oMCwgdGhpcy55KTtcbi8vICAgICAgICAgYy5saW5lVG8oY1gsIHRoaXMueSk7XG4vLyAgICAgICAgIGMuc3Ryb2tlU3R5bGUgPSB0aGlzLnN0eWxlO1xuLy8gICAgICAgICBjLnN0cm9rZSgpO1xuLy8gICAgIH1cbi8vICAgICB0aGlzLm1vdmUgPSBmdW5jdGlvbigpIHtcbi8vICAgICAgICAgaWYgKGNYID09PSB3KSB7XG4vLyAgICAgICAgICAgICB0aGlzLnkgKz0gMTA7XG4vLyAgICAgICAgICAgICBjWCA9IDA7XG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgY1ggKz0gdGhpcy5kWDtcblxuLy8gICAgICAgICB0aGlzLmRyYXcoKTtcbi8vICAgICB9XG4vLyB9XG5cbmZ1bmN0aW9uIFJha2UoeSwgZFgsIHN0eWxlKSB7XG4gICAgbGV0IGNYID0gMDtcbiAgICB0aGlzLnkgPSB5O1xuICAgIHRoaXMuZFggPSBkWDtcbiAgICB0aGlzLnN0eWxlID0gc3R5bGU7XG5cbiAgICB0aGlzLmRyYXcgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcbiAgICAgICAgICAgIGxldCB0b3BZID0gdGhpcy55ICsgKGkgKiAxMCk7XG4gICAgICAgICAgICBjLmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgYy5tb3ZlVG8oMCwgdG9wWSk7XG4gICAgICAgICAgICBjLmxpbmVUbyhjWCwgdG9wWSk7XG4gICAgICAgICAgICBjLnN0cm9rZVN0eWxlID0gdGhpcy5zdHlsZTtcbiAgICAgICAgICAgIGMuc3Ryb2tlKCk7XG4gICAgICAgIH1cblxuICAgIH1cbiAgICB0aGlzLm1vdmUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKGNYID09PSB3ICkge1xuICAgICAgICAgICAgdGhpcy55ICs9IDUwO1xuICAgICAgICAgICAgY1ggPSAwO1xuICAgICAgICB9XG4gICAgICAgIGNYICs9IHRoaXMuZFg7XG5cbiAgICAgICAgdGhpcy5kcmF3KCk7XG4gICAgfVxufVxuXG4vLyBsZXQgeSA9IDEwO1xuLy8gbGV0IGxpbmVXID0gbmV3IExpbmUoeSAtIDEsIDIsICd3aGl0ZScpXG4vLyBsZXQgbGluZUIgPSBuZXcgTGluZSh5LCAyLCcjMjYxMzA4JylcbmxldCByYWtlQiA9IG5ldyBSYWtlKDEwLCAyLCcjMjYxMzA4JylcbmxldCByYWtlVyA9IG5ldyBSYWtlKDksIDIsICd3aGl0ZScpXG5cbmZ1bmN0aW9uIGFuaW1hdGUoKSB7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpXG5cbiAgICAvLyBsaW5lcyB3b3JrIHRvIGdlbmVyYXRlIHNpbXVsdGFuZW91c2x5LCByYWtlIGRvZXMgbm90IDooXG4gICAgLy8gbGluZVcubW92ZSgpO1xuICAgIC8vIGxpbmVCLm1vdmUoKTtcblxuICAgIHJha2VXLm1vdmUoKTtcbiAgICByYWtlQi5tb3ZlKCk7XG4gICAgXG5cblxuICAgIC8vIHRoaXMgZHJhd3MgNSBsaW5lcyBzaW11bHRhbmVvdXNseVxuICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XG4gICAgLy8gICAgIGxldCBuZXdZID0gNSArIChpICogMTApO1xuICAgIC8vICAgICBjLmJlZ2luUGF0aCgpO1xuICAgIC8vICAgICBjLm1vdmVUbygwLCBuZXdZIC0gMSk7XG4gICAgLy8gICAgIGMubGluZVRvKHcsIG5ld1kgLSAxKTtcbiAgICAvLyAgICAgYy5zdHJva2VTdHlsZSA9ICd3aGl0ZSc7XG4gICAgLy8gICAgIGMuc3Ryb2tlKCk7XG4gICAgLy8gfVxuICAgIC8vIGZvciAobGV0IGk9MDsgaSA8IDU7IGkrKykge1xuICAgIC8vICAgICBsZXQgbmV3WSA9IDUgKyAoaSAqIDEwKTtcbiAgICAvLyAgICAgYy5iZWdpblBhdGgoKTtcbiAgICAvLyAgICAgYy5tb3ZlVG8oMCwgbmV3WSk7XG4gICAgLy8gICAgIGMubGluZVRvKHcsIG5ld1kpO1xuICAgIC8vICAgICBjLnN0cm9rZVN0eWxlID0gJyMyNjEzMDgnO1xuICAgIC8vICAgICBjLnN0cm9rZSgpO1xuICAgIC8vIH1cblxuXG59XG5cbmFuaW1hdGUoKTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9