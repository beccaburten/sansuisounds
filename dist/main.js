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
c.imageSmoothingEnabled = false;
document.addEventListener("DOMContentLoaded", function () {
  var tree = new Image();
  tree.src = "./src/images/garden-items/bonzai-2.png";
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
}); // putting this inside DOMContentLoaded will render a tree
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvY2FudmFzLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9nYXJkZW4taXRlbXMuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9uYXZiYXIuc2NzcyJdLCJuYW1lcyI6WyJzYW5kYm94IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInciLCJ3aWR0aCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJoIiwiaGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJjIiwiZ2V0Q29udGV4dCIsImltYWdlU21vb3RoaW5nRW5hYmxlZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0cmVlIiwiSW1hZ2UiLCJzcmMiLCJxdWVyeVNlbGVjdG9yIiwiY2xlYXJDYW52YXMiLCJjbGVhclJlY3QiLCJhbmltYXRlUmFrZSIsIlJha2UiLCJ5IiwiZFgiLCJzdHlsZSIsImNYIiwiZHJhdyIsImkiLCJ0b3BZIiwiYmVnaW5QYXRoIiwibW92ZVRvIiwibGluZVRvIiwic3Ryb2tlU3R5bGUiLCJzdHJva2UiLCJtb3ZlIiwicmFrZUIiLCJyYWtlVyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNB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QmlCLHlCQUFxQixDQUFDakIsV0FBRCxDQUFyQjtBQUVBZ0IsU0FBSyxDQUFDRixJQUFOO0FBQ0FDLFNBQUssQ0FBQ0QsSUFBTjs7QUFFQSxRQUFJQyxLQUFLLENBQUNiLENBQU4sSUFBV25CLENBQWYsRUFBbUI7QUFDZmdDLFdBQUssQ0FBQ1osRUFBTixHQUFXLENBQVg7QUFDQWEsV0FBSyxDQUFDYixFQUFOLEdBQVcsQ0FBWDtBQUNIO0FBQ0o7QUFFSixDQXhERCxFLENBNkRBO0FBQ0k7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFSjtBQUNJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSDtBQUNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSTs7Ozs7Ozs7Ozs7QUMzR0osdUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsdUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0ICcuL3N0eWxlcy9pbmRleC5zY3NzJztcbmltcG9ydCAnLi9zdHlsZXMvbmF2YmFyLnNjc3MnO1xuaW1wb3J0ICcuL3N0eWxlcy9jYW52YXMuc2Nzcyc7XG5pbXBvcnQgJy4vc3R5bGVzL2dhcmRlbi1pdGVtcy5zY3NzJztcblxuXG5sZXQgc2FuZGJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2FuZGJveFwiKTtcbiAgICBsZXQgdyA9IHNhbmRib3gud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICBsZXQgaCA9IHNhbmRib3guaGVpZ2h0ID0gMC43NSAqIHdpbmRvdy5pbm5lckhlaWdodDtcbmxldCBjID0gc2FuZGJveC5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgYy5pbWFnZVNtb290aGluZ0VuYWJsZWQgPSBmYWxzZTtcblxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICAgXG4gICAgbGV0IHRyZWUgPSBuZXcgSW1hZ2UoKTtcbiAgICB0cmVlLnNyYyA9IFwiLi9zcmMvaW1hZ2VzL2dhcmRlbi1pdGVtcy9ib256YWktMi5wbmdcIjsgIFxuICAgIFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2xlYXItY2FudmFzXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbGVhckNhbnZhcyk7XG5cbiAgICBmdW5jdGlvbiBjbGVhckNhbnZhcygpIHtcbiAgICAgICAgYy5jbGVhclJlY3QoMCwgMCwgdywgaCk7XG4gICAgfVxuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyYWtlLXBsYXlcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFuaW1hdGVSYWtlKTtcbiAgICBcbiAgICBmdW5jdGlvbiBSYWtlKHksIGRYLCBzdHlsZSkge1xuICAgICAgICBsZXQgY1ggPSAwO1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICB0aGlzLmRYID0gZFg7XG4gICAgICAgIHRoaXMuc3R5bGUgPSBzdHlsZTtcblxuICAgICAgICB0aGlzLmRyYXcgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IHRvcFkgPSB0aGlzLnkgKyAoaSAqIDEwKTtcbiAgICAgICAgICAgICAgICBjLmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICAgIGMubW92ZVRvKDAsIHRvcFkpO1xuICAgICAgICAgICAgICAgIGMubGluZVRvKGNYLCB0b3BZKTtcbiAgICAgICAgICAgICAgICBjLnN0cm9rZVN0eWxlID0gdGhpcy5zdHlsZTtcbiAgICAgICAgICAgICAgICBjLnN0cm9rZSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5tb3ZlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAoY1ggPT09IHcgKSB7XG4gICAgICAgICAgICAgICAgdGhpcy55ICs9IDUwO1xuICAgICAgICAgICAgICAgIGNYID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNYICs9IHRoaXMuZFg7XG5cbiAgICAgICAgICAgIHRoaXMuZHJhdygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbGV0IHJha2VCID0gbmV3IFJha2UoMTAsIDIsJyMyNjEzMDgnKVxuICAgIGxldCByYWtlVyA9IG5ldyBSYWtlKDksIDIsICd3aGl0ZScpXG5cbiAgICBmdW5jdGlvbiBhbmltYXRlUmFrZSgpIHtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGVSYWtlKVxuXG4gICAgICAgIHJha2VXLm1vdmUoKTtcbiAgICAgICAgcmFrZUIubW92ZSgpO1xuICAgICAgICBcbiAgICAgICAgaWYgKHJha2VCLnkgPj0gdyApIHtcbiAgICAgICAgICAgIHJha2VCLmRYID0gMDtcbiAgICAgICAgICAgIHJha2VXLmRYID0gMDtcbiAgICAgICAgfVxuICAgIH1cblxufSlcblxuXG5cblxuLy8gcHV0dGluZyB0aGlzIGluc2lkZSBET01Db250ZW50TG9hZGVkIHdpbGwgcmVuZGVyIGEgdHJlZVxuICAgIC8vIGRyYXcoKTtcblxuICAgIC8vIGZ1bmN0aW9uIGRyYXcoKXtcbiAgICAvLyAgICAgYy5jbGVhclJlY3QoMCwwLCB3LCBoKVxuICAgIC8vICAgICB0cmVlLm9ubG9hZCA9IGZ1bmN0aW9uKCl7XG4gICAgLy8gICAgICAgICBjLmRyYXdJbWFnZSh0cmVlLCAyMDAsIDIwKTtcbiAgICAvLyAgICAgfVxuICAgIC8vIH0gXG5cbi8vIG1vdXNlIGxpc3RlbmVycy9kcmFnZ2luZyBET0VTIE5PVCB3b3JrXG4gICAgLy8gZnVuY3Rpb24gZGlzdGFuY2VNb3ZlZCh4LCB5LCBpdGVtKSB7XG4gICAgLy8gICAgIGZ1bmN0aW9uIGRpc3RhbmNlWFkgKHgwLCB5MCwgeDEsIHkxKSB7XG4gICAgLy8gICAgICAgICBsZXQgZHggPSB4MSAtIHgwLCBkeSA9IHkxIC0geTA7XG4gICAgLy8gICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KGR4ICogZHggKyBkeSAqIGR5KTtcbiAgICAvLyAgICAgfVxuXHQvLyBcdHJldHVybiBkaXN0YW5jZVhZKHgsIHksIGl0ZW0ueCwgaXRlbS55KSA8IChpdGVtLndpZHRoIC8gMik7XG4gICAgLy8gfVxuICAgIC8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgKGUpPT57XG4gICAgLy8gICAgICAgICBpZihkaXN0YW5jZU1vdmVkKGUuY2xpZW50WCwgZS5jbGllbnRZLCB0cmVlKSkge1xuICAgIC8vICAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgb25Nb3VzZU1vdmUpO1xuICAgIC8vICAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIG9uTW91c2VVcCk7XG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgIH1cbiAgICAvLyApXG4gICAgLy8gZnVuY3Rpb24gb25Nb3VzZU1vdmUoZSkge1xuICAgIC8vICAgICB0cmVlLnggPSBlLmNsaWVudFg7XG4gICAgLy8gICAgIHRyZWUueSA9IGUuY2xpZW50WTtcbiAgICAvLyAgICAgZHJhdygpO1xuICAgIC8vIH1cbiAgICAvLyBmdW5jdGlvbiBvbk1vdXNlVXAoKSB7XG4gICAgLy8gICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgb25Nb3VzZU1vdmUpO1xuICAgIC8vICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBvbk1vdXNlVXApO1xuICAgIC8vIH0iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9