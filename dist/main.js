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
  var collision = false;

  while (!collision) {
    gardenItems.map(function (item) {
      if (Object(_utils__WEBPACK_IMPORTED_MODULE_0__["itemPointCollision"])(event.offsetX, event.offsetY, item)) {
        collision = true;

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
  } // gardenItems.map(item => {
  //     if(itemPointCollision(event.offsetX, event.offsetY, item)) {
  //         if(event.shiftKey) {
  //             gardenItems = gardenItems.filter(i => i !== item);
  //             draw();
  //         } else {
  //             document.addEventListener("mousemove", onMouseMove);
  //             document.addEventListener("mouseup", onMouseUp);
  //             offset.x = event.offsetX - item.x;
  //             offset.y = event.offsetY - item.y;
  //         }
  //     }
  //     function onMouseMove(event) {
  //         item.x = event.offsetX - offset.x;
  //         item.y = event.offsetY - offset.y;
  //         draw();
  //     }
  //     function onMouseUp(event) {
  //         document.removeEventListener("mousemove", onMouseMove);
  //         document.removeEventListener("mouseup", onMouseUp);
  //     }
  // })

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
