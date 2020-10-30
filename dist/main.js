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
var h = sandbox.height = 0.65 * window.innerHeight;
var c = sandbox.getContext("2d");
c.imageSmoothingEnabled = false; // not working for Rake functionality
// window.addEventListener('resize', () => {
//     w = sandbox.width = window.innerWidth;
//     h = sandbox.height = 0.655 * window.innerHeight;
//     c = sandbox.getContext("2d");
// });

document.addEventListener("DOMContentLoaded", function () {
  Object(_scripts_init__WEBPACK_IMPORTED_MODULE_4__["init"])();
  document.querySelector("#clear-canvas").addEventListener("click", _scripts_draw__WEBPACK_IMPORTED_MODULE_6__["clearCanvas"]);
  var rakeB = new _scripts_rake__WEBPACK_IMPORTED_MODULE_5__["Rake"](0, 10, 2, '#80796e'); // let rakeB = new Rake(0, 10, 2,'#261308');

  var rakeW = new _scripts_rake__WEBPACK_IMPORTED_MODULE_5__["Rake"](0, 9, 2, '#d1c5b0');
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
var h = sandbox.height = 0.65 * window.innerHeight;
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
var h = sandbox.height = 0.65 * window.innerHeight;
var c = sandbox.getContext("2d");
window.addEventListener('resize', function () {
  w = sandbox.width = window.innerWidth;
  h = sandbox.height = 0.65 * window.innerHeight;
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
var h = sandbox.height = 0.65 * window.innerHeight;
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
      c.strokeStyle = '#80796e';
      c.stroke();
      c.closePath();
      debugger;
      var nextRad2 = this.radius - rad * 10 - 1;
      c.beginPath();
      c.arc(this.x, this.y, nextRad2, 0, Math.PI * 2, false);
      c.strokeStyle = '#d1c5b0';
      c.stroke();
      c.closePath();
    } //BROWN OUTERMOST, filled in


    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.fillStyle = "#A69D8D";
    c.fill();
    c.strokeStyle = '#80796e';
    c.stroke();
    c.closePath();
    debugger; //WHITE OUTERMOST, no fill

    c.beginPath();
    c.arc(this.x, this.y, this.radius - 1, 0, Math.PI * 2, false);
    c.strokeStyle = '#d1c5b0';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2RyYXcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvaW5pdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9yYWtlLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3JpcHBsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2NhbnZhcy5zY3NzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvZ2FyZGVuLWl0ZW1zLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvbmF2YmFyLnNjc3MiXSwibmFtZXMiOlsic2FuZGJveCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ3Iiwid2lkdGgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaCIsImhlaWdodCIsImlubmVySGVpZ2h0IiwiYyIsImdldENvbnRleHQiLCJpbWFnZVNtb290aGluZ0VuYWJsZWQiLCJhZGRFdmVudExpc3RlbmVyIiwiaW5pdCIsInF1ZXJ5U2VsZWN0b3IiLCJjbGVhckNhbnZhcyIsInJha2VCIiwiUmFrZSIsInJha2VXIiwiYW5pbWF0ZVJha2UiLCJnYXJkZW5JdGVtcyIsImRvQW5pbSIsImRyYXciLCJjbGVhclJlY3QiLCJtYXAiLCJpdGVtIiwiZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uIiwiZHJhd0ltYWdlIiwiaW1nIiwieCIsInkiLCJkcmF3R2FyZGVuSXRlbSIsImUiLCJyYW5kb20iLCJtYXgiLCJNYXRoIiwiSW1hZ2UiLCJzcmMiLCJ0YXJnZXQiLCJuZXdJdGVtIiwicHVzaCIsIm9mZnNldCIsImV2ZW50IiwiaXRlbVBvaW50Q29sbGlzaW9uIiwib2Zmc2V0WCIsIm9mZnNldFkiLCJzaGlmdEtleSIsImZpbHRlciIsImkiLCJvbk1vdXNlTW92ZSIsIm9uTW91c2VVcCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJkWCIsInN0eWxlIiwibmV4dFgiLCJjb250aW51ZUFuaW0iLCJwdWxsUmFrZSIsInkyIiwiYmVnaW5QYXRoIiwibW92ZVRvIiwibGluZVRvIiwic3Ryb2tlU3R5bGUiLCJzdHJva2UiLCJtb3ZlIiwicG9zdEl0ZW1YIiwibmV4dFkiLCJidHduIiwicmlwcGxlIiwiYmluZCIsInJXIiwickgiLCJyWCIsInJZIiwicmFkIiwicmlwcGxlQiIsIlJpcHBsZSIsImRyYXdSaXBwbGUiLCJyYWtlMSIsInJha2UyIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwicmFkaXVzIiwibmV4dFJhZCIsImFyYyIsIlBJIiwiY2xvc2VQYXRoIiwibmV4dFJhZDIiLCJmaWxsU3R5bGUiLCJmaWxsIiwiZGlzdGFuY2VYWSIsIngwIiwieTAiLCJ4MSIsInkxIiwiZHgiLCJkeSIsInNxcnQiLCJtaW4iXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7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RUFBc0I5RCxHQUF0QixFQUEyQjtBQUNoQyxTQUFPTCxDQUFDLEdBQUdtRSxHQUFKLElBQVduRSxDQUFDLEdBQUdLLEdBQXRCO0FBQ0QsQzs7Ozs7Ozs7Ozs7QUNiRCx1Qzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSx1QyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgJy4vc3R5bGVzL2luZGV4LnNjc3MnO1xuaW1wb3J0ICcuL3N0eWxlcy9uYXZiYXIuc2Nzcyc7XG5pbXBvcnQgJy4vc3R5bGVzL2NhbnZhcy5zY3NzJztcbmltcG9ydCAnLi9zdHlsZXMvZ2FyZGVuLWl0ZW1zLnNjc3MnO1xuaW1wb3J0IHtpbml0fSBmcm9tICcuL3NjcmlwdHMvaW5pdCc7XG5pbXBvcnQge1Jha2UsIGFuaW1hdGVSYWtlfSBmcm9tICcuL3NjcmlwdHMvcmFrZSc7XG5pbXBvcnQge2NsZWFyQ2FudmFzfSBmcm9tICcuL3NjcmlwdHMvZHJhdyc7XG4vLyBpbXBvcnQge2FuaW1hdGVSaXBwbGV9IGZyb20gJy4vc2NyaXB0cy9yaXBwbGUnO1xuXG5sZXQgc2FuZGJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2FuZGJveFwiKTtcbmxldCB3ID0gc2FuZGJveC53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xubGV0IGggPSBzYW5kYm94LmhlaWdodCA9IDAuNjUgKiB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5sZXQgYyA9IHNhbmRib3guZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIGMuaW1hZ2VTbW9vdGhpbmdFbmFibGVkID0gZmFsc2U7XG5cbi8vIG5vdCB3b3JraW5nIGZvciBSYWtlIGZ1bmN0aW9uYWxpdHlcbi8vIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XG4vLyAgICAgdyA9IHNhbmRib3gud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbi8vICAgICBoID0gc2FuZGJveC5oZWlnaHQgPSAwLjY1NSAqIHdpbmRvdy5pbm5lckhlaWdodDtcbi8vICAgICBjID0gc2FuZGJveC5nZXRDb250ZXh0KFwiMmRcIik7XG4vLyB9KTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuXG4gICAgaW5pdCgpO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjbGVhci1jYW52YXNcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsZWFyQ2FudmFzKTtcbiAgICBsZXQgcmFrZUIgPSBuZXcgUmFrZSgwLCAxMCwgMiwnIzgwNzk2ZScpO1xuICAgIC8vIGxldCByYWtlQiA9IG5ldyBSYWtlKDAsIDEwLCAyLCcjMjYxMzA4Jyk7XG4gICAgbGV0IHJha2VXID0gbmV3IFJha2UoMCwgOSwgMiwgJyNkMWM1YjAnKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Jha2UtcGxheVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYW5pbWF0ZVJha2UocmFrZUIsIHJha2VXKSk7XG4gICAgXG59KVxuIiwiaW1wb3J0IHtpdGVtUG9pbnRDb2xsaXNpb259IGZyb20gJy4vdXRpbHMnO1xuXG5sZXQgc2FuZGJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2FuZGJveFwiKTtcbmxldCB3ID0gc2FuZGJveC53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xubGV0IGggPSBzYW5kYm94LmhlaWdodCA9IDAuNjUgKiB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5sZXQgYyA9IHNhbmRib3guZ2V0Q29udGV4dChcIjJkXCIpO1xuXG5leHBvcnQgbGV0IGdhcmRlbkl0ZW1zID0gW107XG5cbmV4cG9ydCBsZXQgZG9BbmltID0gdHJ1ZTtcblxuZXhwb3J0IGZ1bmN0aW9uIGRyYXcoKXtcbiAgICBjLmNsZWFyUmVjdCgwLDAsIHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQgKiAwLjc1KVxuXG4gICAgZ2FyZGVuSXRlbXMubWFwKGl0ZW0gPT4ge1xuICAgICAgICBjLmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbj0nZGVzdGluYXRpb24tb3Zlcic7XG4gICAgICAgIGMuZHJhd0ltYWdlKGl0ZW0uaW1nLCBpdGVtLngsIGl0ZW0ueSk7XG4gICAgfSlcblxufSBcblxuZXhwb3J0IGZ1bmN0aW9uIGRyYXdHYXJkZW5JdGVtKGUpIHtcbiAgICAgICAgZnVuY3Rpb24gcmFuZG9tKG1heCkge1xuICAgICAgICAgICAgcmV0dXJuIDEwMCArIChNYXRoLnJhbmRvbSgpICogKG1heCAtIDIwMCkpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgaW1nLnNyYyA9IGAke2UudGFyZ2V0LnNyY31gOyBcbiAgICAgICAgbGV0IG5ld0l0ZW0gPSB7XG4gICAgICAgICAgICBpbWc6IGltZyxcbiAgICAgICAgICAgIHg6IHJhbmRvbSh3KSxcbiAgICAgICAgICAgIHk6IHJhbmRvbShoKSxcbiAgICAgICAgICAgIHdpZHRoOiBpbWcud2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQ6IGltZy5oZWlnaHRcbiAgICAgICAgfTtcbiAgICAgICAgZ2FyZGVuSXRlbXMucHVzaChuZXdJdGVtKTtcbiAgICAgICAgZHJhdygpO1xufVxuXG5cblxuXG5sZXRcdG9mZnNldCA9IHt9O1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIChldmVudCkgPT4ge1xuICAgIGdhcmRlbkl0ZW1zLm1hcChpdGVtID0+IHtcbiAgICAgICAgaWYoaXRlbVBvaW50Q29sbGlzaW9uKGV2ZW50Lm9mZnNldFgsIGV2ZW50Lm9mZnNldFksIGl0ZW0pKSB7XG4gICAgICAgICAgICBpZihldmVudC5zaGlmdEtleSkge1xuICAgICAgICAgICAgICAgIGdhcmRlbkl0ZW1zID0gZ2FyZGVuSXRlbXMuZmlsdGVyKGkgPT4gaSAhPT0gaXRlbSk7XG4gICAgICAgICAgICAgICAgZHJhdygpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIG9uTW91c2VNb3ZlKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBvbk1vdXNlVXApO1xuICAgICAgICAgICAgICAgIG9mZnNldC54ID0gZXZlbnQub2Zmc2V0WCAtIGl0ZW0ueDtcbiAgICAgICAgICAgICAgICBvZmZzZXQueSA9IGV2ZW50Lm9mZnNldFkgLSBpdGVtLnk7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIGZ1bmN0aW9uIG9uTW91c2VNb3ZlKGV2ZW50KSB7XG4gICAgICAgIGl0ZW0ueCA9IGV2ZW50Lm9mZnNldFggLSBvZmZzZXQueDtcbiAgICAgICAgaXRlbS55ID0gZXZlbnQub2Zmc2V0WSAtIG9mZnNldC55O1xuICAgICAgICBkcmF3KCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG9uTW91c2VVcChldmVudCkge1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIG9uTW91c2VNb3ZlKTtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgb25Nb3VzZVVwKTtcbiAgICB9XG4gICAgfSlcbn0pO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBjbGVhckNhbnZhcygpIHtcbiAgICBjLmNsZWFyUmVjdCgwLCAwLCB3LCBoKTtcbiAgICBnYXJkZW5JdGVtcyA9IFtdO1xuICAgIGRvQW5pbSA9IGZhbHNlO1xufSIsImltcG9ydCB7IGRyYXdHYXJkZW5JdGVtIH0gZnJvbSAnLi9kcmF3LmpzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdG9uZS0yXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkcmF3R2FyZGVuSXRlbSk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdG9uZS00XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkcmF3R2FyZGVuSXRlbSk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdG9uZS0zXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkcmF3R2FyZGVuSXRlbSk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdG9uZS0xXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkcmF3R2FyZGVuSXRlbSk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdG9uZS1waWxlLTFcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRyYXdHYXJkZW5JdGVtKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0b25lLXBpbGUtMlwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZHJhd0dhcmRlbkl0ZW0pO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGFudGVyblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZHJhd0dhcmRlbkl0ZW0pO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYm9uemFpLTFcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRyYXdHYXJkZW5JdGVtKTtcbiAgICAvLyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJvbnphaS0yXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkcmF3R2FyZGVuSXRlbSk7XG59IiwiaW1wb3J0IHsgZ2FyZGVuSXRlbXMgfSBmcm9tICcuL2RyYXcnO1xuaW1wb3J0IHsgUmlwcGxlIH0gZnJvbSAnLi9yaXBwbGUnO1xuaW1wb3J0IHsgYnR3biB9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IHsgZG9BbmltIH0gZnJvbSAnLi9kcmF3JztcblxuLy8vIHRyeSBjcm9wcGluZyBhY3R1YWwgaW1hZ2VzIGludG8gY2lyY2xlcyBcblxubGV0IHNhbmRib3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNhbmRib3hcIik7XG5sZXQgdyA9IHNhbmRib3gud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbmxldCBoID0gc2FuZGJveC5oZWlnaHQgPSAwLjY1ICogd2luZG93LmlubmVySGVpZ2h0O1xubGV0IGMgPSBzYW5kYm94LmdldENvbnRleHQoXCIyZFwiKTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcbiAgICB3ID0gc2FuZGJveC53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgIGggPSBzYW5kYm94LmhlaWdodCA9IDAuNjUgKiB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgYyA9IHNhbmRib3guZ2V0Q29udGV4dChcIjJkXCIpO1xufSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBSYWtlKHgsIHksIGRYLCBzdHlsZSkge1xuXG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIGxldCBuZXh0WCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIHRoaXMuZFggPSBkWDtcbiAgICAgICAgdGhpcy5zdHlsZSA9IHN0eWxlO1xuICAgICAgICB0aGlzLmNvbnRpbnVlQW5pbSA9IHRydWU7XG5cbiAgICAgICAgdGhpcy5wdWxsUmFrZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgLy8gaWYgKGRvQW5pbSkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCB5MiA9IHRoaXMueSArIChpICogMTApO1xuICAgICAgICAgICAgICAgICAgICBjLmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICAgICAgICBjLm1vdmVUbyh0aGlzLngsIHkyKTsgLy8gZG9uJ3Qgc3RhcnQgMD9cbiAgICAgICAgICAgICAgICAgICAgYy5saW5lVG8obmV4dFgsIHkyKTtcbiAgICAgICAgICAgICAgICAgICAgYy5zdHJva2VTdHlsZSA9IHRoaXMuc3R5bGU7XG4gICAgICAgICAgICAgICAgICAgIGMuc3Ryb2tlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gfVxuICAgICAgICB9XG5cblxuICAgICAgICAvLyBzdG9wIHRoZSBmdW5jdGlvbiAoZFggPSAwKSB3aGVuIGl0IGhpdHMgYW4gaXRlbSBhbmQgdHJpZ2dlciBhIHJpcHBsZVxuICAgICAgICAvLyBmcm9tIHRoZSByaXBwbGUsIHdoZW4gaXQncyBkb25lLCB0cmlnZ2VyIHRoZSByYWtlIG1vdmUgYWdhaW5cbiAgICAgICAgLy8geCB3aWxsIGJlIDAgdG8gc3RhcnQgYW5kIHRoZW4gdGhlIGl0ZW1zLnggKyB3aWR0aCArIDUwIGFmdGVyIHRoZSBpdGVtcyByaXBwbGVcbiAgICAgICAgdGhpcy5tb3ZlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jb250aW51ZUFuaW0pIHtcbiAgICAgICAgICAgICAgICBpZiAobmV4dFggPj0gdyApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy55ICs9IDUwO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnggPSAwO1xuICAgICAgICAgICAgICAgICAgICBuZXh0WCA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnkgPj0gaCApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kWCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGludWVBbmltID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSAgIFxuICAgICAgICAgICAgICAgIGdhcmRlbkl0ZW1zLm1hcChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHBvc3RJdGVtWCA9IGl0ZW0ueCArIGl0ZW0ud2lkdGg7XG4gICAgICAgICAgICAgICAgICAgIGxldCBuZXh0WSA9IGl0ZW0ueSArIGl0ZW0uaGVpZ2h0O1xuICAgICAgICAgICAgICAgICAgICBpZiAoYnR3bihuZXh0WCwgaXRlbS54IC0gNTAsIHBvc3RJdGVtWCkgJiYgYnR3bih0aGlzLnksIGl0ZW0ueSAtIGl0ZW0uaGVpZ2h0LCBuZXh0WSArIDI1KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy54KSBcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuY29udGludWVBbmltID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmRYID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGRlYnVnZ2VyO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yaXBwbGUoaXRlbSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBuZXh0WCArPSB0aGlzLmRYO1xuICAgICAgICAgICAgICAgIHRoaXMucHVsbFJha2UoKTtcbiAgICAgICAgICAgIH0gIFxuXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm1vdmUgPSB0aGlzLm1vdmUuYmluZCh0aGlzKTtcblxuXG4gICAgICAgIHRoaXMucmlwcGxlID0gZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICAgICAgbGV0IHJXID0gaXRlbS53aWR0aCAqIDAuNTtcbiAgICAgICAgICAgIGxldCBySCA9IGl0ZW0uaGVpZ2h0ICogMC41O1xuICAgICAgICAgICAgbGV0IHJYID0gaXRlbS54ICsgclc7XG4gICAgICAgICAgICBsZXQgclkgPSBpdGVtLnkgKyBySDtcbiAgICAgICAgICAgIGxldCByYWQ7XG4gICAgICAgICAgICBpZiAoclcgPiBySCkge1xuICAgICAgICAgICAgICAgIHJhZCA9IHJXICsgNDA7IFxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByYWQgPSBySCArIDQwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBsZXQgcmlwcGxlQiA9IG5ldyBSaXBwbGUoclgsIHJZLCByYWQpO1xuICAgICAgICAgICAgLy8gbGV0IHJpcHBsZVcgPSBuZXcgUmlwcGxlKHJYIC0gMSwgclksIHJhZCArIDQwLCAnd2hpdGUnKTtcbiAgICAgICAgICAgIHJpcHBsZUIuZHJhd1JpcHBsZSgpO1xuICAgICAgICAgICAgLy8gcmlwcGxlVy5kcmF3UmlwcGxlKCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIGxldCBuZXdSYWtlID0gbmV3IFJha2UoclggKyBpdGVtLndpZHRoLCB0aGlzLnksIDIsIHRoaXMuc3R5bGUpO1xuICAgICAgICAgICAgLy8gZGVidWdnZXI7XG4gICAgICAgICAgICAvLyBhbmltYXRlUmFrZShuZXdSYWtlLCBudWxsKSgpO1xuICAgICAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhbmltYXRlUmFrZShyYWtlMSwgcmFrZTIpIHtcbiAgICAgICAgLy8gZG9BbmltID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlUmFrZShyYWtlMSwgcmFrZTIpKVxuICAgICAgICAgICAgcmFrZTEubW92ZSgpO1xuICAgICAgICAgICAgcmFrZTIubW92ZSgpO1xuICAgICAgICB9XG59XG5cblxuICIsImxldCBzYW5kYm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzYW5kYm94XCIpO1xubGV0IHcgPSBzYW5kYm94LndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG5sZXQgaCA9IHNhbmRib3guaGVpZ2h0ID0gMC42NSAqIHdpbmRvdy5pbm5lckhlaWdodDtcbmxldCBjID0gc2FuZGJveC5nZXRDb250ZXh0KFwiMmRcIik7XG5cbmV4cG9ydCBmdW5jdGlvbiBSaXBwbGUoeCwgeSwgcmFkaXVzKSB7XG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIHRoaXMucmFkaXVzID0gcmFkaXVzO1xuICAgICAgICAvLyB0aGlzLnN0eWxlID0gc3R5bGU7XG5cbiAgICAgICAgdGhpcy5kcmF3UmlwcGxlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBmb3IgKGxldCByYWQgPSAwOyByYWQgPCA1OyByYWQrKykge1xuICAgICAgICAgICAgICAgIC8vIGxldCBuZXh0UmFkID0gdGhpcy5yYWRpdXMgKyAocmFkICogMTApO1xuICAgICAgICAgICAgICAgIGMuZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uPSdkZXN0aW5hdGlvbi1vdmVyJ1xuICAgICAgICAgICAgICAgIGxldCBuZXh0UmFkID0gdGhpcy5yYWRpdXMgLSAocmFkICogMTApO1xuICAgICAgICAgICAgICAgIGMuYmVnaW5QYXRoKCk7IFxuICAgICAgICAgICAgICAgIGMuYXJjKHRoaXMueCwgdGhpcy55LCBuZXh0UmFkLCAwLCBNYXRoLlBJICogMiwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGMuc3Ryb2tlU3R5bGUgPSAnIzgwNzk2ZSc7XG4gICAgICAgICAgICAgICAgYy5zdHJva2UoKTtcbiAgICAgICAgICAgICAgICBjLmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgICAgIGRlYnVnZ2VyO1xuXG4gICAgICAgICAgICAgICAgbGV0IG5leHRSYWQyID0gdGhpcy5yYWRpdXMgLSAocmFkICogMTApIC0gMTtcbiAgICAgICAgICAgICAgICBjLmJlZ2luUGF0aCgpOyBcbiAgICAgICAgICAgICAgICBjLmFyYyh0aGlzLngsIHRoaXMueSwgbmV4dFJhZDIsIDAsIE1hdGguUEkgKiAyLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgYy5zdHJva2VTdHlsZSA9ICcjZDFjNWIwJztcbiAgICAgICAgICAgICAgICBjLnN0cm9rZSgpO1xuICAgICAgICAgICAgICAgIGMuY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICB9IFxuICAgICAgICAgICAgLy9CUk9XTiBPVVRFUk1PU1QsIGZpbGxlZCBpblxuICAgICAgICAgICAgICAgIGMuYmVnaW5QYXRoKCk7IFxuICAgICAgICAgICAgICAgIGMuYXJjKHRoaXMueCwgdGhpcy55LCB0aGlzLnJhZGl1cywgMCwgTWF0aC5QSSAqIDIsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBjLmZpbGxTdHlsZSA9IFwiI0E2OUQ4RFwiO1xuICAgICAgICAgICAgICAgIGMuZmlsbCgpO1xuICAgICAgICAgICAgICAgIGMuc3Ryb2tlU3R5bGUgPSAnIzgwNzk2ZSc7XG4gICAgICAgICAgICAgICAgYy5zdHJva2UoKTtcbiAgICAgICAgICAgICAgICBjLmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgICAgIGRlYnVnZ2VyO1xuICAgICAgICAgICAgLy9XSElURSBPVVRFUk1PU1QsIG5vIGZpbGxcbiAgICAgICAgICAgICAgICBjLmJlZ2luUGF0aCgpOyBcbiAgICAgICAgICAgICAgICBjLmFyYyh0aGlzLngsIHRoaXMueSwgdGhpcy5yYWRpdXMgLSAxLCAwLCBNYXRoLlBJICogMiwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGMuc3Ryb2tlU3R5bGUgPSAnI2QxYzViMCc7XG4gICAgICAgICAgICAgICAgYy5zdHJva2UoKTtcbiAgICAgICAgICAgICAgICBjLmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgICAgIGRlYnVnZ2VyO1xuXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMuZHJhd1JpcHBsZSA9IHRoaXMuZHJhd1JpcHBsZS5iaW5kKHRoaXMpXG5cbiAgICAgICAgfVxufVxuXG4vLyBhbmltYXRlUmlwcGxlKCkge1xuXG4vLyB9IiwiZXhwb3J0IGZ1bmN0aW9uIGl0ZW1Qb2ludENvbGxpc2lvbih4LCB5LCBpdGVtKSB7XG5cdHJldHVybiBkaXN0YW5jZVhZKHgsIHksIGl0ZW0ueCwgaXRlbS55KSA8IGl0ZW0ud2lkdGg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXN0YW5jZVhZKHgwLCB5MCwgeDEsIHkxKSB7XG5cdFx0bGV0IGR4ID0geDEgLSB4MCxcblx0XHRcdGR5ID0geTEgLSB5MDtcblx0XHRcdC8vUHl0aGFnb3JpYW4gVGhlb3JlbSB0byBjYWxjIGRpc3RhbmNlXG5cdFx0cmV0dXJuIE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBidHduKHgsIG1pbiwgbWF4KSB7XG4gIHJldHVybiB4ID4gbWluICYmIHggPCBtYXg7XG59XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9