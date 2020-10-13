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
/* harmony import */ var _scripts_dragdrop_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scripts/dragdrop.js */ "./src/scripts/dragdrop.js");
/* harmony import */ var _scripts_draw_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scripts/draw.js */ "./src/scripts/draw.js");






var sandbox = document.getElementById("sandbox");
var w = sandbox.width = window.innerWidth;
var h = sandbox.height = 0.75 * window.innerHeight; //attempt to resize canvas on window resize:
// sandbox.addEventListener("resize", ()=> {
//     w = sandbox.width = window.innerWidth;
//     h = sandbox.height = 0.75 * window.innerHeight;
// })

var c = sandbox.getContext("2d");
c.imageSmoothingEnabled = false;

window.onload = function () {
  // get the offset position of the sandbox
  var offsetX = sandbox.offsetLeft;
  var offsetY = sandbox.offsetTop; // select all class 'sm' from garden-items

  var images = document.getElementsByClassName('sm'); // make all .tool's draggable

  images.draggable({
    helper: 'clone'
  }); // assign each image an attribute containing its index

  images.forEach(function (img, i) {
    img.setAttribute("imageIndex", i);
  }); // make the sandbox a dropzone

  sandbox.droppable(function drop(e, ui) {
    // determine the closest point in the grid on X axis
    var x = parseInt(parseInt(ui.offset.left - offsetX - 1) / 100) * 100; // determine the closest point in the grid on Y axis

    var y = parseInt(parseInt(ui.offset.top - offsetY) / 100) * 100; // determine the width and the height of the image

    var width = ui.helper[0].width;
    var height = ui.helper[0].height; // get the drop payload (here the payload is the $tools index)

    var theIndex = ui.draggable.data("imageIndex"); // get the image having the respective index

    var image = images[theIndex]; // drawImage at the drop point using the dropped image 
    // This will make the img a permanent part of the sandbox content

    c.drawImage(image, x, y, width, height);
  });
};

document.addEventListener("DOMContentLoaded", function () {
  _scripts_dragdrop_js__WEBPACK_IMPORTED_MODULE_4__["cnct"](); //console logs "hi" correctly

  var tree = new Image();
  tree.src = "./src/images/garden-items/bonzai-2.png";
  Object(_scripts_draw_js__WEBPACK_IMPORTED_MODULE_5__["draw"])(tree, 200, 20); // sandbox.addEventListener("mousedown", (e)=> {
  //     console.log(e)
  //     debugger;
  // });
  // sandbox.addEventListener("mousemove", DragDropUtil.handleMouseMove);
  // sandbox.addEventListener("mouseup", DragDropUtil.handleMouseUp);
  // sandbox.addEventListener("mouseout", DragDropUtil.handleMouseOut);

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

/***/ "./src/scripts/dragdrop.js":
/*!*********************************!*\
  !*** ./src/scripts/dragdrop.js ***!
  \*********************************/
/*! exports provided: cnct */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cnct", function() { return cnct; });
function cnct() {
  console.log('hi');
} // VERSION ONE
// let sandbox = document.getElementById("sandbox");
//     let offsetX=sandbox.offsetLeft;
//     let offsetY=sandbox.offsetTop;
//     let isDragging=false;
//     export function handleMouseDown(e){
//       let canMouseX=parseInt(e.clientX-offsetX);
//       let canMouseY=parseInt(e.clientY-offsetY);
//       // set the drag flag
//       isDragging=true;
//     }
//     export function handleMouseUp(e){
//       let canMouseX=parseInt(e.clientX-offsetX);
//       let canMouseY=parseInt(e.clientY-offsetY);
//       // clear the drag flag
//       isDragging=false;
//     }
//     export function handleMouseOut(e){
//       let canMouseX=parseInt(e.clientX-offsetX);
//       let canMouseY=parseInt(e.clientY-offsetY);
//       // user has left the canvas, so clear the drag flag
//       //isDragging=false;
//     }
//     export function handleMouseMove(e){
//       let canMouseX=parseInt(e.clientX-offsetX);
//       let canMouseY=parseInt(e.clientY-offsetY);
//       // if the drag flag is set, clear the canvas and draw the image
//       if(isDragging){
//           ctx.clearRect(0,0,w,h);
//           ctx.drawImage(img,canMouseX-128/2,canMouseY-120/2,128,120);
//       }
//     }
////// VERSION TWO
// export function selectImage() {
//   return (this.startX > this.imageX && this.startX < this.imageX + this.imageWidth && this.startY > this.imageY && this.startY < this.imageY + this.imageHeight);
// }
//  export function handleMouseDown(e){
//   this.startX = parseInt(e.clientX - this.offsetX);
//   this.startY = parseInt(e.clientY - this.offsetY);
//   // set the drag flag
//   this.isDragging = this.selectImage;
// }
//  export function handleMouseUp(e,img){
//   this.startX=parseInt(e.clientX-this.offsetX);
//   this.startY=parseInt(e.clientY-this.offsetY);
//   // clear the drag flag
//   this.isDragging=false;
//   this.drawImage(e,img);
// }
//  export function handleMouseOut(e,img){
//   this.handleMouseUp(e,img);
// }
//  export function handleMouseMove(e,img){
//   // only compute new positions if in drag
//   if(this.isDragging){
//     this.canMouseX=parseInt(e.clientX - this.offsetX);
//     this.canMouseY=parseInt(e.clientY - this.offsetY);
//   // move the image by the amount of the latest drag
//     var dx = this.canMouseX - this.startX;
//     var dy = this.canMouseY - this.startY;
//     this.imageX += dx;
//     this.imageY += dy;
//     // Negative image locations break the pattern in this.fillPattern
//     this.imageY = Math.max(0, this.imageY);
//     this.imageX = Math.max(0, this.imageX);
//     // reset the startXY for next time
//     this.startX = this.canMouseX;
//     this.startY = this.canMouseY;
//     this.drawImage(e,img);
//   }
// }

/***/ }),

/***/ "./src/scripts/draw.js":
/*!*****************************!*\
  !*** ./src/scripts/draw.js ***!
  \*****************************/
/*! exports provided: draw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "draw", function() { return draw; });
var c = sandbox.getContext("2d");
function draw(img, x, y) {
  c.clearRect(0, 0, window.innerWidth, window.innerHeight * 0.75);

  img.onload = function () {
    c.drawImage(img, x, y);
  };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2RyYWdkcm9wLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2RyYXcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9jYW52YXMuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2dhcmRlbi1pdGVtcy5zY3NzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL25hdmJhci5zY3NzIl0sIm5hbWVzIjpbInNhbmRib3giLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwidyIsIndpZHRoIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImgiLCJoZWlnaHQiLCJpbm5lckhlaWdodCIsImMiLCJnZXRDb250ZXh0IiwiaW1hZ2VTbW9vdGhpbmdFbmFibGVkIiwib25sb2FkIiwib2Zmc2V0WCIsIm9mZnNldExlZnQiLCJvZmZzZXRZIiwib2Zmc2V0VG9wIiwiaW1hZ2VzIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImRyYWdnYWJsZSIsImhlbHBlciIsImZvckVhY2giLCJpbWciLCJpIiwic2V0QXR0cmlidXRlIiwiZHJvcHBhYmxlIiwiZHJvcCIsImUiLCJ1aSIsIngiLCJwYXJzZUludCIsIm9mZnNldCIsImxlZnQiLCJ5IiwidG9wIiwidGhlSW5kZXgiLCJkYXRhIiwiaW1hZ2UiLCJkcmF3SW1hZ2UiLCJhZGRFdmVudExpc3RlbmVyIiwiRHJhZ0Ryb3BVdGlsIiwidHJlZSIsIkltYWdlIiwic3JjIiwiZHJhdyIsInF1ZXJ5U2VsZWN0b3IiLCJjbGVhckNhbnZhcyIsImNsZWFyUmVjdCIsImFuaW1hdGVSYWtlIiwiUmFrZSIsImRYIiwic3R5bGUiLCJjWCIsInRvcFkiLCJiZWdpblBhdGgiLCJtb3ZlVG8iLCJsaW5lVG8iLCJzdHJva2VTdHlsZSIsInN0cm9rZSIsIm1vdmUiLCJyYWtlQiIsInJha2VXIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiY25jdCIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQUlBLE9BQU8sR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLFNBQXhCLENBQWQ7QUFDSSxJQUFJQyxDQUFDLEdBQUdILE9BQU8sQ0FBQ0ksS0FBUixHQUFnQkMsTUFBTSxDQUFDQyxVQUEvQjtBQUNBLElBQUlDLENBQUMsR0FBR1AsT0FBTyxDQUFDUSxNQUFSLEdBQWlCLE9BQU9ILE1BQU0sQ0FBQ0ksV0FBdkMsQyxDQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0osSUFBSUMs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Q0QsTUFBTSxDQUFDSSxXQUFQLEdBQXFCLElBQXpEOztBQUNBYyxLQUFHLENBQUNWLE1BQUosR0FBYSxZQUFVO0FBQ25CSCxLQUFDLENBQUM2QixTQUFGLENBQVloQixHQUFaLEVBQWlCTyxDQUFqQixFQUFvQkksQ0FBcEI7QUFDSCxHQUZEO0FBR0gsQzs7Ozs7Ozs7Ozs7QUNQTCx1Qzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSx1QyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgJy4vc3R5bGVzL2luZGV4LnNjc3MnO1xuaW1wb3J0ICcuL3N0eWxlcy9uYXZiYXIuc2Nzcyc7XG5pbXBvcnQgJy4vc3R5bGVzL2NhbnZhcy5zY3NzJztcbmltcG9ydCAnLi9zdHlsZXMvZ2FyZGVuLWl0ZW1zLnNjc3MnO1xuaW1wb3J0ICogYXMgRHJhZ0Ryb3BVdGlsIGZyb20gJy4vc2NyaXB0cy9kcmFnZHJvcC5qcyc7XG5pbXBvcnQgeyBkcmF3IH0gZnJvbSAnLi9zY3JpcHRzL2RyYXcuanMnXG5cbmxldCBzYW5kYm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzYW5kYm94XCIpO1xuICAgIGxldCB3ID0gc2FuZGJveC53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgIGxldCBoID0gc2FuZGJveC5oZWlnaHQgPSAwLjc1ICogd2luZG93LmlubmVySGVpZ2h0O1xuICAgIC8vYXR0ZW1wdCB0byByZXNpemUgY2FudmFzIG9uIHdpbmRvdyByZXNpemU6XG4gICAgLy8gc2FuZGJveC5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsICgpPT4ge1xuICAgIC8vICAgICB3ID0gc2FuZGJveC53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgIC8vICAgICBoID0gc2FuZGJveC5oZWlnaHQgPSAwLjc1ICogd2luZG93LmlubmVySGVpZ2h0O1xuICAgIC8vIH0pXG5sZXQgYyA9IHNhbmRib3guZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIGMuaW1hZ2VTbW9vdGhpbmdFbmFibGVkID0gZmFsc2U7XG5cblxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuIFxuICAgIC8vIGdldCB0aGUgb2Zmc2V0IHBvc2l0aW9uIG9mIHRoZSBzYW5kYm94XG4gICAgbGV0IG9mZnNldFggPSBzYW5kYm94Lm9mZnNldExlZnQ7XG4gICAgbGV0IG9mZnNldFkgPSBzYW5kYm94Lm9mZnNldFRvcDsgICBcbiBcbiAgICAvLyBzZWxlY3QgYWxsIGNsYXNzICdzbScgZnJvbSBnYXJkZW4taXRlbXNcbiAgICBsZXQgaW1hZ2VzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc20nKTtcblxuICAgIC8vIG1ha2UgYWxsIC50b29sJ3MgZHJhZ2dhYmxlXG4gICAgaW1hZ2VzLmRyYWdnYWJsZSh7XG4gICAgICAgIGhlbHBlcjonY2xvbmUnLFxuICAgIH0pO1xuIFxuICAgIC8vIGFzc2lnbiBlYWNoIGltYWdlIGFuIGF0dHJpYnV0ZSBjb250YWluaW5nIGl0cyBpbmRleFxuICAgIGltYWdlcy5mb3JFYWNoKChpbWcsIGkpID0+IHtcbiAgICAgICAgaW1nLnNldEF0dHJpYnV0ZShcImltYWdlSW5kZXhcIiwgaSk7XG4gICAgfSk7XG4gXG4gICAgLy8gbWFrZSB0aGUgc2FuZGJveCBhIGRyb3B6b25lXG4gICAgc2FuZGJveC5kcm9wcGFibGUoZnVuY3Rpb24gZHJvcChlLCB1aSkge1xuICAgICAgICAgICAgLy8gZGV0ZXJtaW5lIHRoZSBjbG9zZXN0IHBvaW50IGluIHRoZSBncmlkIG9uIFggYXhpc1xuICAgICAgICAgICAgbGV0IHg9IHBhcnNlSW50KHBhcnNlSW50KCh1aS5vZmZzZXQubGVmdC1vZmZzZXRYKS0xKSAvIDEwMCkgKiAxMDA7XG4gXG4gICAgICAgICAgICAvLyBkZXRlcm1pbmUgdGhlIGNsb3Nlc3QgcG9pbnQgaW4gdGhlIGdyaWQgb24gWSBheGlzXG4gICAgICAgICAgICBsZXQgeT0gcGFyc2VJbnQocGFyc2VJbnQodWkub2Zmc2V0LnRvcC1vZmZzZXRZKSAvIDEwMCkgKiAxMDA7XG4gXG4gICAgICAgICAgICAvLyBkZXRlcm1pbmUgdGhlIHdpZHRoIGFuZCB0aGUgaGVpZ2h0IG9mIHRoZSBpbWFnZVxuICAgICAgICAgICAgbGV0IHdpZHRoPXVpLmhlbHBlclswXS53aWR0aDtcbiAgICAgICAgICAgIGxldCBoZWlnaHQ9dWkuaGVscGVyWzBdLmhlaWdodDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gZ2V0IHRoZSBkcm9wIHBheWxvYWQgKGhlcmUgdGhlIHBheWxvYWQgaXMgdGhlICR0b29scyBpbmRleClcbiAgICAgICAgICAgIGxldCB0aGVJbmRleD11aS5kcmFnZ2FibGUuZGF0YShcImltYWdlSW5kZXhcIik7XG4gXG4gICAgICAgICAgICAvLyBnZXQgdGhlIGltYWdlIGhhdmluZyB0aGUgcmVzcGVjdGl2ZSBpbmRleFxuICAgICAgICAgICAgbGV0IGltYWdlID0gaW1hZ2VzW3RoZUluZGV4XTtcbiBcbiAgICAgICAgICAgIC8vIGRyYXdJbWFnZSBhdCB0aGUgZHJvcCBwb2ludCB1c2luZyB0aGUgZHJvcHBlZCBpbWFnZSBcbiAgICAgICAgICAgIC8vIFRoaXMgd2lsbCBtYWtlIHRoZSBpbWcgYSBwZXJtYW5lbnQgcGFydCBvZiB0aGUgc2FuZGJveCBjb250ZW50XG4gICAgICAgICAgICBjLmRyYXdJbWFnZShpbWFnZSwgeCwgeSwgd2lkdGgsIGhlaWdodCk7XG4gICAgICAgIH0pXG59XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICAgXG4gICAgRHJhZ0Ryb3BVdGlsLmNuY3QoKTsgLy9jb25zb2xlIGxvZ3MgXCJoaVwiIGNvcnJlY3RseVxuXG4gICAgbGV0IHRyZWUgPSBuZXcgSW1hZ2UoKTtcbiAgICB0cmVlLnNyYyA9IFwiLi9zcmMvaW1hZ2VzL2dhcmRlbi1pdGVtcy9ib256YWktMi5wbmdcIjsgIFxuXG4gICAgZHJhdyh0cmVlLCAyMDAsIDIwKTtcblxuICAgIC8vIHNhbmRib3guYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCAoZSk9PiB7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKGUpXG4gICAgLy8gICAgIGRlYnVnZ2VyO1xuICAgIC8vIH0pO1xuICAgIC8vIHNhbmRib3guYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBEcmFnRHJvcFV0aWwuaGFuZGxlTW91c2VNb3ZlKTtcbiAgICAvLyBzYW5kYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIERyYWdEcm9wVXRpbC5oYW5kbGVNb3VzZVVwKTtcbiAgICAvLyBzYW5kYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCBEcmFnRHJvcFV0aWwuaGFuZGxlTW91c2VPdXQpO1xuXG5cblxuXG5cblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2xlYXItY2FudmFzXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbGVhckNhbnZhcyk7XG5cbiAgICBmdW5jdGlvbiBjbGVhckNhbnZhcygpIHtcbiAgICAgICAgYy5jbGVhclJlY3QoMCwgMCwgdywgaCk7XG4gICAgfVxuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyYWtlLXBsYXlcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFuaW1hdGVSYWtlKTtcbiAgICBcbiAgICBmdW5jdGlvbiBSYWtlKHksIGRYLCBzdHlsZSkge1xuICAgICAgICBsZXQgY1ggPSAwO1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICB0aGlzLmRYID0gZFg7XG4gICAgICAgIHRoaXMuc3R5bGUgPSBzdHlsZTtcblxuICAgICAgICB0aGlzLmRyYXcgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IHRvcFkgPSB0aGlzLnkgKyAoaSAqIDEwKTtcbiAgICAgICAgICAgICAgICBjLmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICAgIGMubW92ZVRvKDAsIHRvcFkpO1xuICAgICAgICAgICAgICAgIGMubGluZVRvKGNYLCB0b3BZKTtcbiAgICAgICAgICAgICAgICBjLnN0cm9rZVN0eWxlID0gdGhpcy5zdHlsZTtcbiAgICAgICAgICAgICAgICBjLnN0cm9rZSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5tb3ZlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAoY1ggPT09IHcgKSB7XG4gICAgICAgICAgICAgICAgdGhpcy55ICs9IDUwO1xuICAgICAgICAgICAgICAgIGNYID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNYICs9IHRoaXMuZFg7XG5cbiAgICAgICAgICAgIHRoaXMuZHJhdygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbGV0IHJha2VCID0gbmV3IFJha2UoMTAsIDIsJyMyNjEzMDgnKVxuICAgIGxldCByYWtlVyA9IG5ldyBSYWtlKDksIDIsICd3aGl0ZScpXG5cbiAgICBmdW5jdGlvbiBhbmltYXRlUmFrZSgpIHtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGVSYWtlKVxuXG4gICAgICAgIHJha2VXLm1vdmUoKTtcbiAgICAgICAgcmFrZUIubW92ZSgpO1xuICAgICAgICBcbiAgICAgICAgaWYgKHJha2VCLnkgPj0gdyApIHtcbiAgICAgICAgICAgIHJha2VCLmRYID0gMDtcbiAgICAgICAgICAgIHJha2VXLmRYID0gMDtcbiAgICAgICAgfVxuICAgIH1cblxufSlcblxuXG5cblxuLy8gcHV0dGluZyB0aGlzIGluc2lkZSBET01Db250ZW50TG9hZGVkIHdpbGwgcmVuZGVyIGEgdHJlZVxuICAgIC8vIGRyYXcoKTtcblxuICAgIC8vIGZ1bmN0aW9uIGRyYXcoKXtcbiAgICAvLyAgICAgYy5jbGVhclJlY3QoMCwwLCB3LCBoKVxuICAgIC8vICAgICB0cmVlLm9ubG9hZCA9IGZ1bmN0aW9uKCl7XG4gICAgLy8gICAgICAgICBjLmRyYXdJbWFnZSh0cmVlLCAyMDAsIDIwKTtcbiAgICAvLyAgICAgfVxuICAgIC8vIH0gXG5cbi8vIG1vdXNlIGxpc3RlbmVycy9kcmFnZ2luZyBET0VTIE5PVCB3b3JrXG4gICAgLy8gZnVuY3Rpb24gZGlzdGFuY2VNb3ZlZCh4LCB5LCBpdGVtKSB7XG4gICAgLy8gICAgIGZ1bmN0aW9uIGRpc3RhbmNlWFkgKHgwLCB5MCwgeDEsIHkxKSB7XG4gICAgLy8gICAgICAgICBsZXQgZHggPSB4MSAtIHgwLCBkeSA9IHkxIC0geTA7XG4gICAgLy8gICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KGR4ICogZHggKyBkeSAqIGR5KTtcbiAgICAvLyAgICAgfVxuXHQvLyBcdHJldHVybiBkaXN0YW5jZVhZKHgsIHksIGl0ZW0ueCwgaXRlbS55KSA8IChpdGVtLndpZHRoIC8gMik7XG4gICAgLy8gfVxuICAgIC8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgKGUpPT57XG4gICAgLy8gICAgICAgICBpZihkaXN0YW5jZU1vdmVkKGUuY2xpZW50WCwgZS5jbGllbnRZLCB0cmVlKSkge1xuICAgIC8vICAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgb25Nb3VzZU1vdmUpO1xuICAgIC8vICAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIG9uTW91c2VVcCk7XG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgIH1cbiAgICAvLyApXG4gICAgLy8gZnVuY3Rpb24gb25Nb3VzZU1vdmUoZSkge1xuICAgIC8vICAgICB0cmVlLnggPSBlLmNsaWVudFg7XG4gICAgLy8gICAgIHRyZWUueSA9IGUuY2xpZW50WTtcbiAgICAvLyAgICAgZHJhdygpO1xuICAgIC8vIH1cbiAgICAvLyBmdW5jdGlvbiBvbk1vdXNlVXAoKSB7XG4gICAgLy8gICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgb25Nb3VzZU1vdmUpO1xuICAgIC8vICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBvbk1vdXNlVXApO1xuICAgIC8vIH0iLCJcbmV4cG9ydCBmdW5jdGlvbiBjbmN0KCkge1xuICAgIGNvbnNvbGUubG9nKCdoaScpXG59XG5cblxuXG5cbi8vIFZFUlNJT04gT05FXG5cbi8vIGxldCBzYW5kYm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzYW5kYm94XCIpO1xuLy8gICAgIGxldCBvZmZzZXRYPXNhbmRib3gub2Zmc2V0TGVmdDtcbi8vICAgICBsZXQgb2Zmc2V0WT1zYW5kYm94Lm9mZnNldFRvcDtcbi8vICAgICBsZXQgaXNEcmFnZ2luZz1mYWxzZTtcblxuLy8gICAgIGV4cG9ydCBmdW5jdGlvbiBoYW5kbGVNb3VzZURvd24oZSl7XG4vLyAgICAgICBsZXQgY2FuTW91c2VYPXBhcnNlSW50KGUuY2xpZW50WC1vZmZzZXRYKTtcbi8vICAgICAgIGxldCBjYW5Nb3VzZVk9cGFyc2VJbnQoZS5jbGllbnRZLW9mZnNldFkpO1xuLy8gICAgICAgLy8gc2V0IHRoZSBkcmFnIGZsYWdcbi8vICAgICAgIGlzRHJhZ2dpbmc9dHJ1ZTtcbi8vICAgICB9XG5cbi8vICAgICBleHBvcnQgZnVuY3Rpb24gaGFuZGxlTW91c2VVcChlKXtcbi8vICAgICAgIGxldCBjYW5Nb3VzZVg9cGFyc2VJbnQoZS5jbGllbnRYLW9mZnNldFgpO1xuLy8gICAgICAgbGV0IGNhbk1vdXNlWT1wYXJzZUludChlLmNsaWVudFktb2Zmc2V0WSk7XG4vLyAgICAgICAvLyBjbGVhciB0aGUgZHJhZyBmbGFnXG4vLyAgICAgICBpc0RyYWdnaW5nPWZhbHNlO1xuLy8gICAgIH1cblxuLy8gICAgIGV4cG9ydCBmdW5jdGlvbiBoYW5kbGVNb3VzZU91dChlKXtcbi8vICAgICAgIGxldCBjYW5Nb3VzZVg9cGFyc2VJbnQoZS5jbGllbnRYLW9mZnNldFgpO1xuLy8gICAgICAgbGV0IGNhbk1vdXNlWT1wYXJzZUludChlLmNsaWVudFktb2Zmc2V0WSk7XG4vLyAgICAgICAvLyB1c2VyIGhhcyBsZWZ0IHRoZSBjYW52YXMsIHNvIGNsZWFyIHRoZSBkcmFnIGZsYWdcbi8vICAgICAgIC8vaXNEcmFnZ2luZz1mYWxzZTtcbi8vICAgICB9XG5cbi8vICAgICBleHBvcnQgZnVuY3Rpb24gaGFuZGxlTW91c2VNb3ZlKGUpe1xuLy8gICAgICAgbGV0IGNhbk1vdXNlWD1wYXJzZUludChlLmNsaWVudFgtb2Zmc2V0WCk7XG4vLyAgICAgICBsZXQgY2FuTW91c2VZPXBhcnNlSW50KGUuY2xpZW50WS1vZmZzZXRZKTtcbi8vICAgICAgIC8vIGlmIHRoZSBkcmFnIGZsYWcgaXMgc2V0LCBjbGVhciB0aGUgY2FudmFzIGFuZCBkcmF3IHRoZSBpbWFnZVxuLy8gICAgICAgaWYoaXNEcmFnZ2luZyl7XG4vLyAgICAgICAgICAgY3R4LmNsZWFyUmVjdCgwLDAsdyxoKTtcbi8vICAgICAgICAgICBjdHguZHJhd0ltYWdlKGltZyxjYW5Nb3VzZVgtMTI4LzIsY2FuTW91c2VZLTEyMC8yLDEyOCwxMjApO1xuLy8gICAgICAgfVxuLy8gICAgIH1cblxuXG4vLy8vLy8gVkVSU0lPTiBUV09cblxuICAgIC8vIGV4cG9ydCBmdW5jdGlvbiBzZWxlY3RJbWFnZSgpIHtcbiAgICAvLyAgIHJldHVybiAodGhpcy5zdGFydFggPiB0aGlzLmltYWdlWCAmJiB0aGlzLnN0YXJ0WCA8IHRoaXMuaW1hZ2VYICsgdGhpcy5pbWFnZVdpZHRoICYmIHRoaXMuc3RhcnRZID4gdGhpcy5pbWFnZVkgJiYgdGhpcy5zdGFydFkgPCB0aGlzLmltYWdlWSArIHRoaXMuaW1hZ2VIZWlnaHQpO1xuICAgIC8vIH1cblxuICAgIC8vICBleHBvcnQgZnVuY3Rpb24gaGFuZGxlTW91c2VEb3duKGUpe1xuICAgIC8vICAgdGhpcy5zdGFydFggPSBwYXJzZUludChlLmNsaWVudFggLSB0aGlzLm9mZnNldFgpO1xuICAgIC8vICAgdGhpcy5zdGFydFkgPSBwYXJzZUludChlLmNsaWVudFkgLSB0aGlzLm9mZnNldFkpO1xuICAgIC8vICAgLy8gc2V0IHRoZSBkcmFnIGZsYWdcbiAgICAvLyAgIHRoaXMuaXNEcmFnZ2luZyA9IHRoaXMuc2VsZWN0SW1hZ2U7XG4gICAgLy8gfVxuXG4gICAgLy8gIGV4cG9ydCBmdW5jdGlvbiBoYW5kbGVNb3VzZVVwKGUsaW1nKXtcbiAgICAvLyAgIHRoaXMuc3RhcnRYPXBhcnNlSW50KGUuY2xpZW50WC10aGlzLm9mZnNldFgpO1xuICAgIC8vICAgdGhpcy5zdGFydFk9cGFyc2VJbnQoZS5jbGllbnRZLXRoaXMub2Zmc2V0WSk7XG4gICAgLy8gICAvLyBjbGVhciB0aGUgZHJhZyBmbGFnXG4gICAgLy8gICB0aGlzLmlzRHJhZ2dpbmc9ZmFsc2U7XG4gICAgLy8gICB0aGlzLmRyYXdJbWFnZShlLGltZyk7XG4gICAgLy8gfVxuXG4gICAgLy8gIGV4cG9ydCBmdW5jdGlvbiBoYW5kbGVNb3VzZU91dChlLGltZyl7XG4gICAgLy8gICB0aGlzLmhhbmRsZU1vdXNlVXAoZSxpbWcpO1xuICAgIC8vIH1cblxuICAgIC8vICBleHBvcnQgZnVuY3Rpb24gaGFuZGxlTW91c2VNb3ZlKGUsaW1nKXtcbiAgICAvLyAgIC8vIG9ubHkgY29tcHV0ZSBuZXcgcG9zaXRpb25zIGlmIGluIGRyYWdcbiAgICAvLyAgIGlmKHRoaXMuaXNEcmFnZ2luZyl7XG5cbiAgICAvLyAgICAgdGhpcy5jYW5Nb3VzZVg9cGFyc2VJbnQoZS5jbGllbnRYIC0gdGhpcy5vZmZzZXRYKTtcbiAgICAvLyAgICAgdGhpcy5jYW5Nb3VzZVk9cGFyc2VJbnQoZS5jbGllbnRZIC0gdGhpcy5vZmZzZXRZKTtcbiAgICAvLyAgIC8vIG1vdmUgdGhlIGltYWdlIGJ5IHRoZSBhbW91bnQgb2YgdGhlIGxhdGVzdCBkcmFnXG4gICAgLy8gICAgIHZhciBkeCA9IHRoaXMuY2FuTW91c2VYIC0gdGhpcy5zdGFydFg7XG4gICAgLy8gICAgIHZhciBkeSA9IHRoaXMuY2FuTW91c2VZIC0gdGhpcy5zdGFydFk7XG5cbiAgICAvLyAgICAgdGhpcy5pbWFnZVggKz0gZHg7XG4gICAgLy8gICAgIHRoaXMuaW1hZ2VZICs9IGR5O1xuICAgIC8vICAgICAvLyBOZWdhdGl2ZSBpbWFnZSBsb2NhdGlvbnMgYnJlYWsgdGhlIHBhdHRlcm4gaW4gdGhpcy5maWxsUGF0dGVyblxuICAgIC8vICAgICB0aGlzLmltYWdlWSA9IE1hdGgubWF4KDAsIHRoaXMuaW1hZ2VZKTtcbiAgICAvLyAgICAgdGhpcy5pbWFnZVggPSBNYXRoLm1heCgwLCB0aGlzLmltYWdlWCk7XG5cbiAgICAvLyAgICAgLy8gcmVzZXQgdGhlIHN0YXJ0WFkgZm9yIG5leHQgdGltZVxuICAgIC8vICAgICB0aGlzLnN0YXJ0WCA9IHRoaXMuY2FuTW91c2VYO1xuICAgIC8vICAgICB0aGlzLnN0YXJ0WSA9IHRoaXMuY2FuTW91c2VZO1xuXG4gICAgLy8gICAgIHRoaXMuZHJhd0ltYWdlKGUsaW1nKTtcbiAgICAvLyAgIH1cbiAgICAvLyB9IiwibGV0IGMgPSBzYW5kYm94LmdldENvbnRleHQoXCIyZFwiKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGRyYXcoaW1nLCB4LCB5KXtcbiAgICAgICAgYy5jbGVhclJlY3QoMCwwLCB3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0ICogMC43NSlcbiAgICAgICAgaW1nLm9ubG9hZCA9IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBjLmRyYXdJbWFnZShpbWcsIHgsIHkpO1xuICAgICAgICB9XG4gICAgfSAiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9