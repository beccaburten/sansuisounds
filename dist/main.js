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
  }
});

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
  requestAnimationFrame(animate);
  rakeW.move();
  rakeB.move();

  if (rakeB.y >= w) {
    rakeB.dX = 0;
    rakeW.dX = 0;
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvY2FudmFzLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9nYXJkZW4taXRlbXMuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9uYXZiYXIuc2NzcyJdLCJuYW1lcyI6WyJzYW5kYm94IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInciLCJ3aWR0aCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJoIiwiaGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJjIiwiZ2V0Q29udGV4dCIsImltYWdlU21vb3RoaW5nRW5hYmxlZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0cmVlIiwiSW1hZ2UiLCJzcmMiLCJkcmF3IiwiY2xlYXJSZWN0Iiwib25sb2FkIiwiZHJhd0ltYWdlIiwiZGlzdGFuY2VNb3ZlZCIsIngiLCJ5IiwiaXRlbSIsImRpc3RhbmNlWFkiLCJ4MCIsInkwIiwieDEiLCJ5MSIsImR4IiwiZHkiLCJNYXRoIiwic3FydCIsImUiLCJjbGllbnRYIiwiY2xpZW50WSIsIm9uTW91c2VNb3ZlIiwib25Nb3VzZVVwIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIlJha2UiLCJkWCIsInN0eWxlIiwiY1giLCJpIiwidG9wWSIsImJlZ2luUGF0aCIsIm1vdmVUbyIsImxpbmVUbyIsInN0cm9rZVN0eWxlIiwic3Ryb2tlIiwibW92ZSIsInJha2VCIiwicmFrZVciLCJhbmltYXRlUmFrZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImFuaW1hdGUiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztR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S0YsRUFBWDtBQUVBLFNBQUt4QixJQUFMO0FBQ0gsR0FSRDtBQVNIOztBQUVELElBQUltQyxLQUFLLEdBQUcsSUFBSVosSUFBSixDQUFTLEVBQVQsRUFBYSxDQUFiLEVBQWUsU0FBZixDQUFaO0FBQ0EsSUFBSWEsS0FBSyxHQUFHLElBQUliLElBQUosQ0FBUyxDQUFULEVBQVksQ0FBWixFQUFlLE9BQWYsQ0FBWjs7QUFFQSxTQUFTYyxXQUFULEdBQXVCO0FBQ25CQyx1QkFBcUIsQ0FBQ0MsT0FBRCxDQUFyQjtBQUVBSCxPQUFLLENBQUNGLElBQU47QUFDQUMsT0FBSyxDQUFDRCxJQUFOOztBQUVBLE1BQUlDLEtBQUssQ0FBQzdCLENBQU4sSUFBV3BCLENBQWYsRUFBbUI7QUFDZmlELFNBQUssQ0FBQ1gsRUFBTixHQUFXLENBQVg7QUFDQVksU0FBSyxDQUFDWixFQUFOLEdBQVcsQ0FBWDtBQUNIO0FBQ0osQzs7Ozs7Ozs7Ozs7QUNqR0QsdUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsdUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0ICcuL3N0eWxlcy9pbmRleC5zY3NzJztcbmltcG9ydCAnLi9zdHlsZXMvbmF2YmFyLnNjc3MnO1xuaW1wb3J0ICcuL3N0eWxlcy9jYW52YXMuc2Nzcyc7XG5pbXBvcnQgJy4vc3R5bGVzL2dhcmRlbi1pdGVtcy5zY3NzJztcblxuXG5sZXQgc2FuZGJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2FuZGJveFwiKTtcbiAgICBsZXQgdyA9IHNhbmRib3gud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICBsZXQgaCA9IHNhbmRib3guaGVpZ2h0ID0gMC43NSAqIHdpbmRvdy5pbm5lckhlaWdodDtcbmxldCBjID0gc2FuZGJveC5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgYy5pbWFnZVNtb290aGluZ0VuYWJsZWQgPSBmYWxzZTtcblxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICAgXG4gICAgbGV0IHRyZWUgPSBuZXcgSW1hZ2UoKTtcbiAgICB0cmVlLnNyYyA9IFwiLi9zcmMvaW1hZ2VzL2dhcmRlbi1pdGVtcy9ib256YWktMi5wbmdcIjsgIFxuICAgIFxuICAgIGRyYXcoKTtcblxuICAgIGZ1bmN0aW9uIGRyYXcoKXtcbiAgICAgICAgYy5jbGVhclJlY3QoMCwwLCB3LCBoKVxuICAgICAgICB0cmVlLm9ubG9hZCA9IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBjLmRyYXdJbWFnZSh0cmVlLCAyMDAsIDIwKTtcbiAgICAgICAgfVxuICAgIH0gXG5cbiAgICBmdW5jdGlvbiBkaXN0YW5jZU1vdmVkKHgsIHksIGl0ZW0pIHtcbiAgICAgICAgZnVuY3Rpb24gZGlzdGFuY2VYWSAoeDAsIHkwLCB4MSwgeTEpIHtcbiAgICAgICAgICAgIGxldCBkeCA9IHgxIC0geDAsIGR5ID0geTEgLSB5MDtcbiAgICAgICAgICAgIHJldHVybiBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpO1xuICAgICAgICB9XG5cdFx0cmV0dXJuIGRpc3RhbmNlWFkoeCwgeSwgaXRlbS54LCBpdGVtLnkpIDwgKGl0ZW0ud2lkdGggLyAyKTtcbiAgICB9XG4gICAgXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCAoZSk9PntcbiAgICAgICAgICAgIGlmKGRpc3RhbmNlTW92ZWQoZS5jbGllbnRYLCBlLmNsaWVudFksIHRyZWUpKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBvbk1vdXNlTW92ZSk7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgb25Nb3VzZVVwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIClcblxuICAgIGZ1bmN0aW9uIG9uTW91c2VNb3ZlKGUpIHtcbiAgICAgICAgdHJlZS54ID0gZS5jbGllbnRYO1xuICAgICAgICB0cmVlLnkgPSBlLmNsaWVudFk7XG4gICAgICAgIGRyYXcoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbk1vdXNlVXAoKSB7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgb25Nb3VzZU1vdmUpO1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBvbk1vdXNlVXApO1xuICAgIH1cblxufSlcblxuZnVuY3Rpb24gUmFrZSh5LCBkWCwgc3R5bGUpIHtcbiAgICBsZXQgY1ggPSAwO1xuICAgIHRoaXMueSA9IHk7XG4gICAgdGhpcy5kWCA9IGRYO1xuICAgIHRoaXMuc3R5bGUgPSBzdHlsZTtcblxuICAgIHRoaXMuZHJhdyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xuICAgICAgICAgICAgbGV0IHRvcFkgPSB0aGlzLnkgKyAoaSAqIDEwKTtcbiAgICAgICAgICAgIGMuYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjLm1vdmVUbygwLCB0b3BZKTtcbiAgICAgICAgICAgIGMubGluZVRvKGNYLCB0b3BZKTtcbiAgICAgICAgICAgIGMuc3Ryb2tlU3R5bGUgPSB0aGlzLnN0eWxlO1xuICAgICAgICAgICAgYy5zdHJva2UoKTtcbiAgICAgICAgfVxuXG4gICAgfVxuICAgIHRoaXMubW92ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoY1ggPT09IHcgKSB7XG4gICAgICAgICAgICB0aGlzLnkgKz0gNTA7XG4gICAgICAgICAgICBjWCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgY1ggKz0gdGhpcy5kWDtcblxuICAgICAgICB0aGlzLmRyYXcoKTtcbiAgICB9XG59XG5cbmxldCByYWtlQiA9IG5ldyBSYWtlKDEwLCAyLCcjMjYxMzA4JylcbmxldCByYWtlVyA9IG5ldyBSYWtlKDksIDIsICd3aGl0ZScpXG5cbmZ1bmN0aW9uIGFuaW1hdGVSYWtlKCkge1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKVxuXG4gICAgcmFrZVcubW92ZSgpO1xuICAgIHJha2VCLm1vdmUoKTtcbiAgICBcbiAgICBpZiAocmFrZUIueSA+PSB3ICkge1xuICAgICAgICByYWtlQi5kWCA9IDA7XG4gICAgICAgIHJha2VXLmRYID0gMDtcbiAgICB9XG59XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9