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
/* harmony import */ var _scripts_init__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scripts/init */ "./src/scripts/init.js");
/* harmony import */ var _scripts_rake__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scripts/rake */ "./src/scripts/rake.js");
/* harmony import */ var _scripts_draw__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./scripts/draw */ "./src/scripts/draw.js");






 // import {animateRipple} from './scripts/ripple';

var sandbox = document.getElementById("sandbox");
var w = sandbox.width = window.innerWidth;
var h = sandbox.height = 0.75 * window.innerHeight;
var c = sandbox.getContext("2d");
c.imageSmoothingEnabled = false; // not working for Rake functionality
// window.addEventListener('resize', () => {
//     w = sandbox.width = window.innerWidth;
//     h = sandbox.height = 0.75 * window.innerHeight;
//     c = sandbox.getContext("2d");
// });

document.addEventListener("DOMContentLoaded", function () {
  Object(_scripts_init__WEBPACK_IMPORTED_MODULE_4__["init"])();
  document.querySelector("#clear-canvas").addEventListener("click", _scripts_draw__WEBPACK_IMPORTED_MODULE_6__["clearCanvas"]);
  var rakeB = new _scripts_rake__WEBPACK_IMPORTED_MODULE_5__["Rake"](0, 10, 2, '#91897c'); // let rakeB = new Rake(0, 10, 2,'#261308');

  var rakeW = new _scripts_rake__WEBPACK_IMPORTED_MODULE_5__["Rake"](0, 9, 2, 'white');
  document.querySelector("#rake-play").addEventListener("click", Object(_scripts_rake__WEBPACK_IMPORTED_MODULE_5__["animateRake"])(rakeB, rakeW));
});

/***/ }),

/***/ "./src/scripts/draw.js":
/*!*****************************!*\
  !*** ./src/scripts/draw.js ***!
  \*****************************/
/*! exports provided: gardenItems, doAnim, draw, drawGardenItem, clearCanvas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gardenItems", function() { return gardenItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doAnim", function() { return doAnim; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "draw", function() { return draw; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawGardenItem", function() { return drawGardenItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearCanvas", function() { return clearCanvas; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/scripts/utils.js");

var sandbox = document.getElementById("sandbox");
var w = sandbox.width = window.innerWidth;
var h = sandbox.height = 0.75 * window.innerHeight;
var c = sandbox.getContext("2d");
var gardenItems = [];
var doAnim = true;
function draw() {
  c.clearRect(0, 0, window.innerWidth, window.innerHeight * 0.75);
  gardenItems.map(function (item) {
    c.globalCompositeOperation = 'destination-over';
    c.drawImage(item.img, item.x, item.y);
  });
}
function drawGardenItem(e) {
  function random(max) {
    return 100 + Math.random() * (max - 200);
  }

  var img = new Image();
  img.src = "".concat(e.target.src);
  var newItem = {
    img: img,
    x: random(w),
    y: random(h),
    width: img.width,
    height: img.height
  };
  gardenItems.push(newItem);
  draw();
}
var offset = {};
document.addEventListener("mousedown", function (event) {
  gardenItems.map(function (item) {
    if (Object(_utils__WEBPACK_IMPORTED_MODULE_0__["itemPointCollision"])(event.offsetX, event.offsetY, item)) {
      if (event.shiftKey) {
        gardenItems = gardenItems.filter(function (i) {
          return i !== item;
        });
        draw();
      } else {
        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseup", onMouseUp);
        offset.x = event.offsetX - item.x;
        offset.y = event.offsetY - item.y;
      }
    }

    function onMouseMove(event) {
      item.x = event.offsetX - offset.x;
      item.y = event.offsetY - offset.y;
      draw();
    }

    function onMouseUp(event) {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    }
  });
});
function clearCanvas() {
  c.clearRect(0, 0, w, h);
  gardenItems = [];
  doAnim = false;
}

/***/ }),

/***/ "./src/scripts/init.js":
/*!*****************************!*\
  !*** ./src/scripts/init.js ***!
  \*****************************/
/*! exports provided: init */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony import */ var _draw_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./draw.js */ "./src/scripts/draw.js");

function init() {
  document.getElementById("stone-2").addEventListener("click", _draw_js__WEBPACK_IMPORTED_MODULE_0__["drawGardenItem"]);
  document.getElementById("stone-4").addEventListener("click", _draw_js__WEBPACK_IMPORTED_MODULE_0__["drawGardenItem"]);
  document.getElementById("stone-3").addEventListener("click", _draw_js__WEBPACK_IMPORTED_MODULE_0__["drawGardenItem"]);
  document.getElementById("stone-1").addEventListener("click", _draw_js__WEBPACK_IMPORTED_MODULE_0__["drawGardenItem"]);
  document.getElementById("stone-pile-1").addEventListener("click", _draw_js__WEBPACK_IMPORTED_MODULE_0__["drawGardenItem"]);
  document.getElementById("stone-pile-2").addEventListener("click", _draw_js__WEBPACK_IMPORTED_MODULE_0__["drawGardenItem"]);
  document.getElementById("lantern").addEventListener("click", _draw_js__WEBPACK_IMPORTED_MODULE_0__["drawGardenItem"]);
  document.getElementById("bonzai-1").addEventListener("click", _draw_js__WEBPACK_IMPORTED_MODULE_0__["drawGardenItem"]); // document.getElementById("bonzai-2").addEventListener("click", drawGardenItem);
}

/***/ }),

/***/ "./src/scripts/rake.js":
/*!*****************************!*\
  !*** ./src/scripts/rake.js ***!
  \*****************************/
/*! exports provided: Rake, animateRake */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rake", function() { return Rake; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animateRake", function() { return animateRake; });
/* harmony import */ var _draw__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./draw */ "./src/scripts/draw.js");
/* harmony import */ var _ripple__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ripple */ "./src/scripts/ripple.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./src/scripts/utils.js");



 /// try cropping actual images into circles 

var sandbox = document.getElementById("sandbox");
var w = sandbox.width = window.innerWidth;
var h = sandbox.height = 0.75 * window.innerHeight;
var c = sandbox.getContext("2d");
window.addEventListener('resize', function () {
  w = sandbox.width = window.innerWidth;
  h = sandbox.height = 0.75 * window.innerHeight;
  c = sandbox.getContext("2d");
});
function Rake(x, y, dX, style) {
  this.x = x;
  var nextX = x;
  this.y = y;
  this.dX = dX;
  this.style = style;
  this.continueAnim = true;

  this.pullRake = function () {
    // if (doAnim) {
    for (var i = 0; i < 5; i++) {
      var y2 = this.y + i * 10;
      c.beginPath();
      c.moveTo(this.x, y2); // don't start 0?

      c.lineTo(nextX, y2);
      c.strokeStyle = this.style;
      c.stroke();
    } // }

  }; // stop the function (dX = 0) when it hits an item and trigger a ripple
  // from the ripple, when it's done, trigger the rake move again
  // x will be 0 to start and then the items.x + width + 50 after the items ripple


  this.move = function () {
    var _this = this;

    if (this.continueAnim) {
      if (nextX >= w) {
        this.y += 50;
        this.x = 0;
        nextX = 0;
      }

      if (this.y >= h) {
        this.dX = 0;
        this.continueAnim = false;
      }

      _draw__WEBPACK_IMPORTED_MODULE_0__["gardenItems"].map(function (item) {
        var postItemX = item.x + item.width;
        var nextY = item.y + item.height;

        if (Object(_utils__WEBPACK_IMPORTED_MODULE_2__["btwn"])(nextX, item.x - 50, postItemX) && Object(_utils__WEBPACK_IMPORTED_MODULE_2__["btwn"])(_this.y, item.y - item.height, nextY + 25)) {
          // console.log(this.x) 
          // this.continueAnim = false;
          // this.dX = 0;
          // debugger;
          _this.ripple(item);
        }
      });
      nextX += this.dX;
      this.pullRake();
    }
  };

  this.move = this.move.bind(this);

  this.ripple = function (item) {
    var rW = item.width * 0.5;
    var rH = item.height * 0.5;
    var rX = item.x + rW;
    var rY = item.y + rH;
    var rad;

    if (rW > rH) {
      rad = rW + 40;
    } else {
      rad = rH + 40;
    }

    var rippleB = new _ripple__WEBPACK_IMPORTED_MODULE_1__["Ripple"](rX, rY, rad); // let rippleW = new Ripple(rX - 1, rY, rad + 40, 'white');

    rippleB.drawRipple(); // rippleW.drawRipple();
    // let newRake = new Rake(rX + item.width, this.y, 2, this.style);
    // debugger;
    // animateRake(newRake, null)();
  };
}
function animateRake(rake1, rake2) {
  // doAnim = true;
  return function () {
    requestAnimationFrame(animateRake(rake1, rake2));
    rake1.move();
    rake2.move();
  };
}

/***/ }),

/***/ "./src/scripts/ripple.js":
/*!*******************************!*\
  !*** ./src/scripts/ripple.js ***!
  \*******************************/
/*! exports provided: Ripple */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ripple", function() { return Ripple; });
var sandbox = document.getElementById("sandbox");
var w = sandbox.width = window.innerWidth;
var h = sandbox.height = 0.75 * window.innerHeight;
var c = sandbox.getContext("2d");
function Ripple(x, y, radius) {
  this.x = x;
  this.y = y;
  this.radius = radius; // this.style = style;

  this.drawRipple = function () {
    for (var rad = 0; rad < 5; rad++) {
      // let nextRad = this.radius + (rad * 10);
      c.globalCompositeOperation = 'destination-over';
      var nextRad = this.radius - rad * 10;
      c.beginPath();
      c.arc(this.x, this.y, nextRad, 0, Math.PI * 2, false);
      c.strokeStyle = '#91897c';
      c.stroke();
      c.closePath();
      debugger;
      var nextRad2 = this.radius - rad * 10 - 1;
      c.beginPath();
      c.arc(this.x, this.y, nextRad2, 0, Math.PI * 2, false);
      c.strokeStyle = 'white';
      c.stroke();
      c.closePath();
    } //BROWN OUTERMOST, filled in


    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.fillStyle = "#A69D8D";
    c.fill();
    c.strokeStyle = '#91897c';
    c.stroke();
    c.closePath();
    debugger; //WHITE OUTERMOST, no fill

    c.beginPath();
    c.arc(this.x, this.y, this.radius - 1, 0, Math.PI * 2, false);
    c.strokeStyle = 'white';
    c.stroke();
    c.closePath();
    debugger;
    this.drawRipple = this.drawRipple.bind(this);
  };
} // animateRipple() {
// }

/***/ }),

/***/ "./src/scripts/utils.js":
/*!******************************!*\
  !*** ./src/scripts/utils.js ***!
  \******************************/
/*! exports provided: itemPointCollision, distanceXY, btwn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "itemPointCollision", function() { return itemPointCollision; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "distanceXY", function() { return distanceXY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "btwn", function() { return btwn; });
function itemPointCollision(x, y, item) {
  return distanceXY(x, y, item.x, item.y) < item.width;
}
function distanceXY(x0, y0, x1, y1) {
  var dx = x1 - x0,
      dy = y1 - y0; //Pythagorian Theorem to calc distance

  return Math.sqrt(dx * dx + dy * dy);
}
function btwn(x, min, max) {
  return x > min && x < max;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2RyYXcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvaW5pdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9yYWtlLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3JpcHBsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2NhbnZhcy5zY3NzPzc2NDAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9nYXJkZW4taXRlbXMuc2Nzcz9mYTU3Iiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2Nzcz9jODA3Iiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvbmF2YmFyLnNjc3M/MjQ4NCJdLCJuYW1lcyI6WyJzYW5kYm94IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInciLCJ3aWR0aCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJoIiwiaGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJjIiwiZ2V0Q29udGV4dCIsImltYWdlU21vb3RoaW5nRW5hYmxlZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJpbml0IiwicXVlcnlTZWxlY3RvciIsImNsZWFyQ2FudmFzIiwicmFrZUIiLCJSYWtlIiwicmFrZVciLCJhbmltYXRlUmFrZSIsImdhcmRlbkl0ZW1zIiwiZG9BbmltIiwiZHJhdyIsImNsZWFyUmVjdCIsIm1hcCIsIml0ZW0iLCJnbG9iYWxDb21wb3NpdGVPcGVyYXRpb24iLCJkcmF3SW1hZ2UiLCJpbWciLCJ4IiwieSIsImRyYXdHYXJkZW5JdGVtIiwiZSIsInJhbmRvbSIsIm1heCIsIk1hdGgiLCJJbWFnZSIsInNyYyIsInRhcmdldCIsIm5ld0l0ZW0iLCJwdXNoIiwib2Zmc2V0IiwiZXZlbnQiLCJpdGVtUG9pbnRDb2xsaXNpb24iLCJvZmZzZXRYIiwib2Zmc2V0WSIsInNoaWZ0S2V5IiwiZmlsdGVyIiwiaSIsIm9uTW91c2VNb3ZlIiwib25Nb3VzZVVwIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRYIiwic3R5bGUiLCJuZXh0WCIsImNvbnRpbnVlQW5pbSIsInB1bGxSYWtlIiwieTIiLCJiZWdpblBhdGgiLCJtb3ZlVG8iLCJsaW5lVG8iLCJzdHJva2VTdHlsZSIsInN0cm9rZSIsIm1vdmUiLCJwb3N0SXRlbVgiLCJuZXh0WSIsImJ0d24iLCJyaXBwbGUiLCJiaW5kIiwiclciLCJySCIsInJYIiwiclkiLCJyYWQiLCJyaXBwbGVCIiwiUmlwcGxlIiwiZHJhd1JpcHBsZSIsInJha2UxIiwicmFrZTIiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJyYWRpdXMiLCJuZXh0UmFkIiwiYXJjIiwiUEkiLCJjbG9zZVBhdGgiLCJuZXh0UmFkMiIsImZpbGxTdHlsZSIsImZpbGwiLCJkaXN0YW5jZVhZIiwieDAiLCJ5MCIsIngxIiwieTEiLCJkeCIsImR5Iiwic3FydCIsIm1pbiJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNB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LENBQWQsRUFBaUJtRSxHQUFqQixFQUFzQjlELEdBQXRCLEVBQTJCO0FBQ2hDLFNBQU9MLENBQUMsR0FBR21FLEdBQUosSUFBV25FLENBQUMsR0FBR0ssR0FBdEI7QUFDRCxDOzs7Ozs7Ozs7OztBQ2JELHVDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLHVDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCAnLi9zdHlsZXMvaW5kZXguc2Nzcyc7XG5pbXBvcnQgJy4vc3R5bGVzL25hdmJhci5zY3NzJztcbmltcG9ydCAnLi9zdHlsZXMvY2FudmFzLnNjc3MnO1xuaW1wb3J0ICcuL3N0eWxlcy9nYXJkZW4taXRlbXMuc2Nzcyc7XG5pbXBvcnQge2luaXR9IGZyb20gJy4vc2NyaXB0cy9pbml0JztcbmltcG9ydCB7UmFrZSwgYW5pbWF0ZVJha2V9IGZyb20gJy4vc2NyaXB0cy9yYWtlJztcbmltcG9ydCB7Y2xlYXJDYW52YXN9IGZyb20gJy4vc2NyaXB0cy9kcmF3Jztcbi8vIGltcG9ydCB7YW5pbWF0ZVJpcHBsZX0gZnJvbSAnLi9zY3JpcHRzL3JpcHBsZSc7XG5cbmxldCBzYW5kYm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzYW5kYm94XCIpO1xubGV0IHcgPSBzYW5kYm94LndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG5sZXQgaCA9IHNhbmRib3guaGVpZ2h0ID0gMC43NSAqIHdpbmRvdy5pbm5lckhlaWdodDtcbmxldCBjID0gc2FuZGJveC5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgYy5pbWFnZVNtb290aGluZ0VuYWJsZWQgPSBmYWxzZTtcblxuLy8gbm90IHdvcmtpbmcgZm9yIFJha2UgZnVuY3Rpb25hbGl0eVxuLy8gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcbi8vICAgICB3ID0gc2FuZGJveC53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuLy8gICAgIGggPSBzYW5kYm94LmhlaWdodCA9IDAuNzUgKiB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4vLyAgICAgYyA9IHNhbmRib3guZ2V0Q29udGV4dChcIjJkXCIpO1xuLy8gfSk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcblxuICAgIGluaXQoKTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2xlYXItY2FudmFzXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbGVhckNhbnZhcyk7XG4gICAgbGV0IHJha2VCID0gbmV3IFJha2UoMCwgMTAsIDIsJyM5MTg5N2MnKTtcbiAgICAvLyBsZXQgcmFrZUIgPSBuZXcgUmFrZSgwLCAxMCwgMiwnIzI2MTMwOCcpO1xuICAgIGxldCByYWtlVyA9IG5ldyBSYWtlKDAsIDksIDIsICd3aGl0ZScpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcmFrZS1wbGF5XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhbmltYXRlUmFrZShyYWtlQiwgcmFrZVcpKTtcbiAgICBcbn0pXG4iLCJpbXBvcnQge2l0ZW1Qb2ludENvbGxpc2lvbn0gZnJvbSAnLi91dGlscyc7XG5cbmxldCBzYW5kYm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzYW5kYm94XCIpO1xubGV0IHcgPSBzYW5kYm94LndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG5sZXQgaCA9IHNhbmRib3guaGVpZ2h0ID0gMC43NSAqIHdpbmRvdy5pbm5lckhlaWdodDtcbmxldCBjID0gc2FuZGJveC5nZXRDb250ZXh0KFwiMmRcIik7XG5cbmV4cG9ydCBsZXQgZ2FyZGVuSXRlbXMgPSBbXTtcblxuZXhwb3J0IGxldCBkb0FuaW0gPSB0cnVlO1xuXG5leHBvcnQgZnVuY3Rpb24gZHJhdygpe1xuICAgIGMuY2xlYXJSZWN0KDAsMCwgd2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCAqIDAuNzUpXG5cbiAgICBnYXJkZW5JdGVtcy5tYXAoaXRlbSA9PiB7XG4gICAgICAgIGMuZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uPSdkZXN0aW5hdGlvbi1vdmVyJztcbiAgICAgICAgYy5kcmF3SW1hZ2UoaXRlbS5pbWcsIGl0ZW0ueCwgaXRlbS55KTtcbiAgICB9KVxuXG59IFxuXG5leHBvcnQgZnVuY3Rpb24gZHJhd0dhcmRlbkl0ZW0oZSkge1xuICAgICAgICBmdW5jdGlvbiByYW5kb20obWF4KSB7XG4gICAgICAgICAgICByZXR1cm4gMTAwICsgKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gMjAwKSk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBpbWcuc3JjID0gYCR7ZS50YXJnZXQuc3JjfWA7IFxuICAgICAgICBsZXQgbmV3SXRlbSA9IHtcbiAgICAgICAgICAgIGltZzogaW1nLFxuICAgICAgICAgICAgeDogcmFuZG9tKHcpLFxuICAgICAgICAgICAgeTogcmFuZG9tKGgpLFxuICAgICAgICAgICAgd2lkdGg6IGltZy53aWR0aCxcbiAgICAgICAgICAgIGhlaWdodDogaW1nLmhlaWdodFxuICAgICAgICB9O1xuICAgICAgICBnYXJkZW5JdGVtcy5wdXNoKG5ld0l0ZW0pO1xuICAgICAgICBkcmF3KCk7XG59XG5cblxuXG5cbmxldFx0b2Zmc2V0ID0ge307XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgKGV2ZW50KSA9PiB7XG4gICAgZ2FyZGVuSXRlbXMubWFwKGl0ZW0gPT4ge1xuICAgICAgICBpZihpdGVtUG9pbnRDb2xsaXNpb24oZXZlbnQub2Zmc2V0WCwgZXZlbnQub2Zmc2V0WSwgaXRlbSkpIHtcbiAgICAgICAgICAgIGlmKGV2ZW50LnNoaWZ0S2V5KSB7XG4gICAgICAgICAgICAgICAgZ2FyZGVuSXRlbXMgPSBnYXJkZW5JdGVtcy5maWx0ZXIoaSA9PiBpICE9PSBpdGVtKTtcbiAgICAgICAgICAgICAgICBkcmF3KCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgb25Nb3VzZU1vdmUpO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIG9uTW91c2VVcCk7XG4gICAgICAgICAgICAgICAgb2Zmc2V0LnggPSBldmVudC5vZmZzZXRYIC0gaXRlbS54O1xuICAgICAgICAgICAgICAgIG9mZnNldC55ID0gZXZlbnQub2Zmc2V0WSAtIGl0ZW0ueTtcblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgZnVuY3Rpb24gb25Nb3VzZU1vdmUoZXZlbnQpIHtcbiAgICAgICAgaXRlbS54ID0gZXZlbnQub2Zmc2V0WCAtIG9mZnNldC54O1xuICAgICAgICBpdGVtLnkgPSBldmVudC5vZmZzZXRZIC0gb2Zmc2V0Lnk7XG4gICAgICAgIGRyYXcoKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gb25Nb3VzZVVwKGV2ZW50KSB7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgb25Nb3VzZU1vdmUpO1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBvbk1vdXNlVXApO1xuICAgIH1cbiAgICB9KVxufSk7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyQ2FudmFzKCkge1xuICAgIGMuY2xlYXJSZWN0KDAsIDAsIHcsIGgpO1xuICAgIGdhcmRlbkl0ZW1zID0gW107XG4gICAgZG9BbmltID0gZmFsc2U7XG59IiwiaW1wb3J0IHsgZHJhd0dhcmRlbkl0ZW0gfSBmcm9tICcuL2RyYXcuanMnO1xuXG5leHBvcnQgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0b25lLTJcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRyYXdHYXJkZW5JdGVtKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0b25lLTRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRyYXdHYXJkZW5JdGVtKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0b25lLTNcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRyYXdHYXJkZW5JdGVtKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0b25lLTFcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRyYXdHYXJkZW5JdGVtKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0b25lLXBpbGUtMVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZHJhd0dhcmRlbkl0ZW0pO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RvbmUtcGlsZS0yXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkcmF3R2FyZGVuSXRlbSk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsYW50ZXJuXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkcmF3R2FyZGVuSXRlbSk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJib256YWktMVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZHJhd0dhcmRlbkl0ZW0pO1xuICAgIC8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYm9uemFpLTJcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRyYXdHYXJkZW5JdGVtKTtcbn0iLCJpbXBvcnQgeyBnYXJkZW5JdGVtcyB9IGZyb20gJy4vZHJhdyc7XG5pbXBvcnQgeyBSaXBwbGUgfSBmcm9tICcuL3JpcHBsZSc7XG5pbXBvcnQgeyBidHduIH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgeyBkb0FuaW0gfSBmcm9tICcuL2RyYXcnO1xuXG4vLy8gdHJ5IGNyb3BwaW5nIGFjdHVhbCBpbWFnZXMgaW50byBjaXJjbGVzIFxuXG5sZXQgc2FuZGJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2FuZGJveFwiKTtcbmxldCB3ID0gc2FuZGJveC53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xubGV0IGggPSBzYW5kYm94LmhlaWdodCA9IDAuNzUgKiB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5sZXQgYyA9IHNhbmRib3guZ2V0Q29udGV4dChcIjJkXCIpO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xuICAgIHcgPSBzYW5kYm94LndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgaCA9IHNhbmRib3guaGVpZ2h0ID0gMC43NSAqIHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICBjID0gc2FuZGJveC5nZXRDb250ZXh0KFwiMmRcIik7XG59KTtcblxuZXhwb3J0IGZ1bmN0aW9uIFJha2UoeCwgeSwgZFgsIHN0eWxlKSB7XG5cbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgbGV0IG5leHRYID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICAgICAgdGhpcy5kWCA9IGRYO1xuICAgICAgICB0aGlzLnN0eWxlID0gc3R5bGU7XG4gICAgICAgIHRoaXMuY29udGludWVBbmltID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLnB1bGxSYWtlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAvLyBpZiAoZG9BbmltKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHkyID0gdGhpcy55ICsgKGkgKiAxMCk7XG4gICAgICAgICAgICAgICAgICAgIGMuYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgICAgIGMubW92ZVRvKHRoaXMueCwgeTIpOyAvLyBkb24ndCBzdGFydCAwP1xuICAgICAgICAgICAgICAgICAgICBjLmxpbmVUbyhuZXh0WCwgeTIpO1xuICAgICAgICAgICAgICAgICAgICBjLnN0cm9rZVN0eWxlID0gdGhpcy5zdHlsZTtcbiAgICAgICAgICAgICAgICAgICAgYy5zdHJva2UoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgIH1cblxuXG4gICAgICAgIC8vIHN0b3AgdGhlIGZ1bmN0aW9uIChkWCA9IDApIHdoZW4gaXQgaGl0cyBhbiBpdGVtIGFuZCB0cmlnZ2VyIGEgcmlwcGxlXG4gICAgICAgIC8vIGZyb20gdGhlIHJpcHBsZSwgd2hlbiBpdCdzIGRvbmUsIHRyaWdnZXIgdGhlIHJha2UgbW92ZSBhZ2FpblxuICAgICAgICAvLyB4IHdpbGwgYmUgMCB0byBzdGFydCBhbmQgdGhlbiB0aGUgaXRlbXMueCArIHdpZHRoICsgNTAgYWZ0ZXIgdGhlIGl0ZW1zIHJpcHBsZVxuICAgICAgICB0aGlzLm1vdmUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbnRpbnVlQW5pbSkge1xuICAgICAgICAgICAgICAgIGlmIChuZXh0WCA+PSB3ICkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnkgKz0gNTA7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMueCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIG5leHRYID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMueSA+PSBoICkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRYID0gMDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250aW51ZUFuaW0gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9ICAgXG4gICAgICAgICAgICAgICAgZ2FyZGVuSXRlbXMubWFwKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcG9zdEl0ZW1YID0gaXRlbS54ICsgaXRlbS53aWR0aDtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5leHRZID0gaXRlbS55ICsgaXRlbS5oZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIGlmIChidHduKG5leHRYLCBpdGVtLnggLSA1MCwgcG9zdEl0ZW1YKSAmJiBidHduKHRoaXMueSwgaXRlbS55IC0gaXRlbS5oZWlnaHQsIG5leHRZICsgMjUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLngpIFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5jb250aW51ZUFuaW0gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuZFggPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZGVidWdnZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJpcHBsZShpdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIG5leHRYICs9IHRoaXMuZFg7XG4gICAgICAgICAgICAgICAgdGhpcy5wdWxsUmFrZSgpO1xuICAgICAgICAgICAgfSAgXG5cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubW92ZSA9IHRoaXMubW92ZS5iaW5kKHRoaXMpO1xuXG5cbiAgICAgICAgdGhpcy5yaXBwbGUgPSBmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgICAgICBsZXQgclcgPSBpdGVtLndpZHRoICogMC41O1xuICAgICAgICAgICAgbGV0IHJIID0gaXRlbS5oZWlnaHQgKiAwLjU7XG4gICAgICAgICAgICBsZXQgclggPSBpdGVtLnggKyByVztcbiAgICAgICAgICAgIGxldCByWSA9IGl0ZW0ueSArIHJIO1xuICAgICAgICAgICAgbGV0IHJhZDtcbiAgICAgICAgICAgIGlmIChyVyA+IHJIKSB7XG4gICAgICAgICAgICAgICAgcmFkID0gclcgKyA0MDsgXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJhZCA9IHJIICsgNDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGxldCByaXBwbGVCID0gbmV3IFJpcHBsZShyWCwgclksIHJhZCk7XG4gICAgICAgICAgICAvLyBsZXQgcmlwcGxlVyA9IG5ldyBSaXBwbGUoclggLSAxLCByWSwgcmFkICsgNDAsICd3aGl0ZScpO1xuICAgICAgICAgICAgcmlwcGxlQi5kcmF3UmlwcGxlKCk7XG4gICAgICAgICAgICAvLyByaXBwbGVXLmRyYXdSaXBwbGUoKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gbGV0IG5ld1Jha2UgPSBuZXcgUmFrZShyWCArIGl0ZW0ud2lkdGgsIHRoaXMueSwgMiwgdGhpcy5zdHlsZSk7XG4gICAgICAgICAgICAvLyBkZWJ1Z2dlcjtcbiAgICAgICAgICAgIC8vIGFuaW1hdGVSYWtlKG5ld1Jha2UsIG51bGwpKCk7XG4gICAgICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFuaW1hdGVSYWtlKHJha2UxLCByYWtlMikge1xuICAgICAgICAvLyBkb0FuaW0gPSB0cnVlO1xuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGVSYWtlKHJha2UxLCByYWtlMikpXG4gICAgICAgICAgICByYWtlMS5tb3ZlKCk7XG4gICAgICAgICAgICByYWtlMi5tb3ZlKCk7XG4gICAgICAgIH1cbn1cblxuXG4gIiwibGV0IHNhbmRib3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNhbmRib3hcIik7XG5sZXQgdyA9IHNhbmRib3gud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbmxldCBoID0gc2FuZGJveC5oZWlnaHQgPSAwLjc1ICogd2luZG93LmlubmVySGVpZ2h0O1xubGV0IGMgPSBzYW5kYm94LmdldENvbnRleHQoXCIyZFwiKTtcblxuZXhwb3J0IGZ1bmN0aW9uIFJpcHBsZSh4LCB5LCByYWRpdXMpIHtcbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICAgICAgdGhpcy5yYWRpdXMgPSByYWRpdXM7XG4gICAgICAgIC8vIHRoaXMuc3R5bGUgPSBzdHlsZTtcblxuICAgICAgICB0aGlzLmRyYXdSaXBwbGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGZvciAobGV0IHJhZCA9IDA7IHJhZCA8IDU7IHJhZCsrKSB7XG4gICAgICAgICAgICAgICAgLy8gbGV0IG5leHRSYWQgPSB0aGlzLnJhZGl1cyArIChyYWQgKiAxMCk7XG4gICAgICAgICAgICAgICAgYy5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb249J2Rlc3RpbmF0aW9uLW92ZXInXG4gICAgICAgICAgICAgICAgbGV0IG5leHRSYWQgPSB0aGlzLnJhZGl1cyAtIChyYWQgKiAxMCk7XG4gICAgICAgICAgICAgICAgYy5iZWdpblBhdGgoKTsgXG4gICAgICAgICAgICAgICAgYy5hcmModGhpcy54LCB0aGlzLnksIG5leHRSYWQsIDAsIE1hdGguUEkgKiAyLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgYy5zdHJva2VTdHlsZSA9ICcjOTE4OTdjJztcbiAgICAgICAgICAgICAgICBjLnN0cm9rZSgpO1xuICAgICAgICAgICAgICAgIGMuY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICAgICAgZGVidWdnZXI7XG5cbiAgICAgICAgICAgICAgICBsZXQgbmV4dFJhZDIgPSB0aGlzLnJhZGl1cyAtIChyYWQgKiAxMCkgLSAxO1xuICAgICAgICAgICAgICAgIGMuYmVnaW5QYXRoKCk7IFxuICAgICAgICAgICAgICAgIGMuYXJjKHRoaXMueCwgdGhpcy55LCBuZXh0UmFkMiwgMCwgTWF0aC5QSSAqIDIsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBjLnN0cm9rZVN0eWxlID0gJ3doaXRlJztcbiAgICAgICAgICAgICAgICBjLnN0cm9rZSgpO1xuICAgICAgICAgICAgICAgIGMuY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICB9IFxuICAgICAgICAgICAgLy9CUk9XTiBPVVRFUk1PU1QsIGZpbGxlZCBpblxuICAgICAgICAgICAgICAgIGMuYmVnaW5QYXRoKCk7IFxuICAgICAgICAgICAgICAgIGMuYXJjKHRoaXMueCwgdGhpcy55LCB0aGlzLnJhZGl1cywgMCwgTWF0aC5QSSAqIDIsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBjLmZpbGxTdHlsZSA9IFwiI0E2OUQ4RFwiO1xuICAgICAgICAgICAgICAgIGMuZmlsbCgpO1xuICAgICAgICAgICAgICAgIGMuc3Ryb2tlU3R5bGUgPSAnIzkxODk3Yyc7XG4gICAgICAgICAgICAgICAgYy5zdHJva2UoKTtcbiAgICAgICAgICAgICAgICBjLmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgICAgIGRlYnVnZ2VyO1xuICAgICAgICAgICAgLy9XSElURSBPVVRFUk1PU1QsIG5vIGZpbGxcbiAgICAgICAgICAgICAgICBjLmJlZ2luUGF0aCgpOyBcbiAgICAgICAgICAgICAgICBjLmFyYyh0aGlzLngsIHRoaXMueSwgdGhpcy5yYWRpdXMgLSAxLCAwLCBNYXRoLlBJICogMiwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGMuc3Ryb2tlU3R5bGUgPSAnd2hpdGUnO1xuICAgICAgICAgICAgICAgIGMuc3Ryb2tlKCk7XG4gICAgICAgICAgICAgICAgYy5jbG9zZVBhdGgoKTtcbiAgICAgICAgICAgICAgICBkZWJ1Z2dlcjtcblxuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLmRyYXdSaXBwbGUgPSB0aGlzLmRyYXdSaXBwbGUuYmluZCh0aGlzKVxuXG4gICAgICAgIH1cbn1cblxuLy8gYW5pbWF0ZVJpcHBsZSgpIHtcblxuLy8gfSIsImV4cG9ydCBmdW5jdGlvbiBpdGVtUG9pbnRDb2xsaXNpb24oeCwgeSwgaXRlbSkge1xuXHRyZXR1cm4gZGlzdGFuY2VYWSh4LCB5LCBpdGVtLngsIGl0ZW0ueSkgPCBpdGVtLndpZHRoO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGlzdGFuY2VYWSh4MCwgeTAsIHgxLCB5MSkge1xuXHRcdGxldCBkeCA9IHgxIC0geDAsXG5cdFx0XHRkeSA9IHkxIC0geTA7XG5cdFx0XHQvL1B5dGhhZ29yaWFuIFRoZW9yZW0gdG8gY2FsYyBkaXN0YW5jZVxuXHRcdHJldHVybiBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYnR3bih4LCBtaW4sIG1heCkge1xuICByZXR1cm4geCA+IG1pbiAmJiB4IDwgbWF4O1xufVxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==