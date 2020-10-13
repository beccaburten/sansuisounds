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
}

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
}; // VERSION ONE
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2RyYWdkcm9wLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2RyYXcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9jYW52YXMuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2dhcmRlbi1pdGVtcy5zY3NzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL25hdmJhci5zY3NzIl0sIm5hbWVzIjpbInNhbmRib3giLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwidyIsIndpZHRoIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImgiLCJoZWlnaHQiLCJpbm5lckhlaWdodCIsImMiLCJnZXRDb250ZXh0IiwiaW1hZ2VTbW9vdGhpbmdFbmFibGVkIiwiYWRkRXZlbnRMaXN0ZW5lciIsIkRyYWdEcm9wVXRpbCIsInRyZWUiLCJJbWFnZSIsInNyYyIsImRyYXciLCJxdWVyeVNlbGVjdG9yIiwiY2xlYXJDYW52YXMiLCJjbGVhclJlY3QiLCJhbmltYXRlUmFrZSIsIlJha2UiLCJ5IiwiZFgiLCJzdHlsZSIsImNYIiwiaSIsInRvcFkiLCJiZWdpblBhdGgiLCJtb3ZlVG8iLCJsaW5lVG8iLCJzdHJva2VTdHlsZSIsInN0cm9rZSIsIm1vdmUiLCJyYWtlQiIsInJha2VXIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiY25jdCIsImNvbnNvbGUiLCJsb2ciLCJvbmxvYWQiLCJvZmZzZXRYIiwib2Zmc2V0TGVmdCIsIm9mZnNldFkiLCJvZmZzZXRUb3AiLCJpbWFnZXMiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiZHJhZ2dhYmxlIiwiaGVscGVyIiwiZm9yRWFjaCIsImltZyIsInNldEF0dHJpYnV0ZSIsImRyb3BwYWJsZSIsImRyb3AiLCJlIiwidWkiLCJ4IiwicGFyc2VJbnQiLCJvZmZzZXQiLCJsZWZ0IiwidG9wIiwidGhlSW5kZXgiLCJkYXRhIiwiaW1hZ2UiLCJkcmF3SW1hZ2UiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQUlBLE9BQU8sR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLFNBQXhCLENBQWQ7QUFDSSxJQUFJQyxDQUFDLEdBQUdILE9BQU8sQ0FBQ0ksS0FBUixHQUFnQkMsTUFBTSxDQUFDQyxVQUEvQjtBQUNBLElBQUlDLENBQUMsR0FBR1AsT0FBTyxDQUFDUSxNQUFSLEdBQWlCLE9BQU9ILE1BQU0sQ0FBQ0ksV0FBdkMsQyxDQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0osSUFBSUMs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QUFNLENBQUNJLFdBQVAsR0FBcUIsSUFBekQ7O0FBQ0EyQyxLQUFHLENBQUNWLE1BQUosR0FBYSxZQUFVO0FBQ25CaEMsS0FBQyxDQUFDd0QsU0FBRixDQUFZZCxHQUFaLEVBQWlCTSxDQUFqQixFQUFvQmxDLENBQXBCO0FBQ0gsR0FGRDtBQUdILEM7Ozs7Ozs7Ozs7O0FDUEwsdUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsdUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0ICcuL3N0eWxlcy9pbmRleC5zY3NzJztcbmltcG9ydCAnLi9zdHlsZXMvbmF2YmFyLnNjc3MnO1xuaW1wb3J0ICcuL3N0eWxlcy9jYW52YXMuc2Nzcyc7XG5pbXBvcnQgJy4vc3R5bGVzL2dhcmRlbi1pdGVtcy5zY3NzJztcbmltcG9ydCAqIGFzIERyYWdEcm9wVXRpbCBmcm9tICcuL3NjcmlwdHMvZHJhZ2Ryb3AuanMnO1xuaW1wb3J0IHsgZHJhdyB9IGZyb20gJy4vc2NyaXB0cy9kcmF3LmpzJ1xuXG5sZXQgc2FuZGJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2FuZGJveFwiKTtcbiAgICBsZXQgdyA9IHNhbmRib3gud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICBsZXQgaCA9IHNhbmRib3guaGVpZ2h0ID0gMC43NSAqIHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAvL2F0dGVtcHQgdG8gcmVzaXplIGNhbnZhcyBvbiB3aW5kb3cgcmVzaXplOlxuICAgIC8vIHNhbmRib3guYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCAoKT0+IHtcbiAgICAvLyAgICAgdyA9IHNhbmRib3gud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAvLyAgICAgaCA9IHNhbmRib3guaGVpZ2h0ID0gMC43NSAqIHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAvLyB9KVxubGV0IGMgPSBzYW5kYm94LmdldENvbnRleHQoXCIyZFwiKTtcbiAgICBjLmltYWdlU21vb3RoaW5nRW5hYmxlZCA9IGZhbHNlO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICAgXG4gICAgRHJhZ0Ryb3BVdGlsLmNuY3QoKTsgLy9jb25zb2xlIGxvZ3MgXCJoaVwiIGNvcnJlY3RseVxuXG4gICAgbGV0IHRyZWUgPSBuZXcgSW1hZ2UoKTtcbiAgICB0cmVlLnNyYyA9IFwiLi9zcmMvaW1hZ2VzL2dhcmRlbi1pdGVtcy9ib256YWktMi5wbmdcIjsgIFxuXG4gICAgZHJhdyh0cmVlLCAyMDAsIDIwKTtcblxuICAgIC8vIHNhbmRib3guYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCAoZSk9PiB7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKGUpXG4gICAgLy8gICAgIGRlYnVnZ2VyO1xuICAgIC8vIH0pO1xuICAgIC8vIHNhbmRib3guYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBEcmFnRHJvcFV0aWwuaGFuZGxlTW91c2VNb3ZlKTtcbiAgICAvLyBzYW5kYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIERyYWdEcm9wVXRpbC5oYW5kbGVNb3VzZVVwKTtcbiAgICAvLyBzYW5kYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCBEcmFnRHJvcFV0aWwuaGFuZGxlTW91c2VPdXQpO1xuXG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NsZWFyLWNhbnZhc1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xlYXJDYW52YXMpO1xuXG4gICAgZnVuY3Rpb24gY2xlYXJDYW52YXMoKSB7XG4gICAgICAgIGMuY2xlYXJSZWN0KDAsIDAsIHcsIGgpO1xuICAgIH1cblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcmFrZS1wbGF5XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhbmltYXRlUmFrZSk7XG4gICAgXG4gICAgZnVuY3Rpb24gUmFrZSh5LCBkWCwgc3R5bGUpIHtcbiAgICAgICAgbGV0IGNYID0gMDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICAgICAgdGhpcy5kWCA9IGRYO1xuICAgICAgICB0aGlzLnN0eWxlID0gc3R5bGU7XG5cbiAgICAgICAgdGhpcy5kcmF3ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCB0b3BZID0gdGhpcy55ICsgKGkgKiAxMCk7XG4gICAgICAgICAgICAgICAgYy5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICBjLm1vdmVUbygwLCB0b3BZKTtcbiAgICAgICAgICAgICAgICBjLmxpbmVUbyhjWCwgdG9wWSk7XG4gICAgICAgICAgICAgICAgYy5zdHJva2VTdHlsZSA9IHRoaXMuc3R5bGU7XG4gICAgICAgICAgICAgICAgYy5zdHJva2UoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgICAgIHRoaXMubW92ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKGNYID09PSB3ICkge1xuICAgICAgICAgICAgICAgIHRoaXMueSArPSA1MDtcbiAgICAgICAgICAgICAgICBjWCA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjWCArPSB0aGlzLmRYO1xuXG4gICAgICAgICAgICB0aGlzLmRyYXcoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxldCByYWtlQiA9IG5ldyBSYWtlKDEwLCAyLCcjMjYxMzA4JylcbiAgICBsZXQgcmFrZVcgPSBuZXcgUmFrZSg5LCAyLCAnd2hpdGUnKVxuXG4gICAgZnVuY3Rpb24gYW5pbWF0ZVJha2UoKSB7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlUmFrZSlcblxuICAgICAgICByYWtlVy5tb3ZlKCk7XG4gICAgICAgIHJha2VCLm1vdmUoKTtcbiAgICAgICAgXG4gICAgICAgIGlmIChyYWtlQi55ID49IHcgKSB7XG4gICAgICAgICAgICByYWtlQi5kWCA9IDA7XG4gICAgICAgICAgICByYWtlVy5kWCA9IDA7XG4gICAgICAgIH1cbiAgICB9XG5cbn0pXG5cblxuXG5cbi8vIHB1dHRpbmcgdGhpcyBpbnNpZGUgRE9NQ29udGVudExvYWRlZCB3aWxsIHJlbmRlciBhIHRyZWVcbiAgICAvLyBkcmF3KCk7XG5cbiAgICAvLyBmdW5jdGlvbiBkcmF3KCl7XG4gICAgLy8gICAgIGMuY2xlYXJSZWN0KDAsMCwgdywgaClcbiAgICAvLyAgICAgdHJlZS5vbmxvYWQgPSBmdW5jdGlvbigpe1xuICAgIC8vICAgICAgICAgYy5kcmF3SW1hZ2UodHJlZSwgMjAwLCAyMCk7XG4gICAgLy8gICAgIH1cbiAgICAvLyB9IFxuXG4vLyBtb3VzZSBsaXN0ZW5lcnMvZHJhZ2dpbmcgRE9FUyBOT1Qgd29ya1xuICAgIC8vIGZ1bmN0aW9uIGRpc3RhbmNlTW92ZWQoeCwgeSwgaXRlbSkge1xuICAgIC8vICAgICBmdW5jdGlvbiBkaXN0YW5jZVhZICh4MCwgeTAsIHgxLCB5MSkge1xuICAgIC8vICAgICAgICAgbGV0IGR4ID0geDEgLSB4MCwgZHkgPSB5MSAtIHkwO1xuICAgIC8vICAgICAgICAgcmV0dXJuIE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSk7XG4gICAgLy8gICAgIH1cblx0Ly8gXHRyZXR1cm4gZGlzdGFuY2VYWSh4LCB5LCBpdGVtLngsIGl0ZW0ueSkgPCAoaXRlbS53aWR0aCAvIDIpO1xuICAgIC8vIH1cbiAgICAvLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIChlKT0+e1xuICAgIC8vICAgICAgICAgaWYoZGlzdGFuY2VNb3ZlZChlLmNsaWVudFgsIGUuY2xpZW50WSwgdHJlZSkpIHtcbiAgICAvLyAgICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIG9uTW91c2VNb3ZlKTtcbiAgICAvLyAgICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBvbk1vdXNlVXApO1xuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICB9XG4gICAgLy8gKVxuICAgIC8vIGZ1bmN0aW9uIG9uTW91c2VNb3ZlKGUpIHtcbiAgICAvLyAgICAgdHJlZS54ID0gZS5jbGllbnRYO1xuICAgIC8vICAgICB0cmVlLnkgPSBlLmNsaWVudFk7XG4gICAgLy8gICAgIGRyYXcoKTtcbiAgICAvLyB9XG4gICAgLy8gZnVuY3Rpb24gb25Nb3VzZVVwKCkge1xuICAgIC8vICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIG9uTW91c2VNb3ZlKTtcbiAgICAvLyAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgb25Nb3VzZVVwKTtcbiAgICAvLyB9IiwiXG5leHBvcnQgZnVuY3Rpb24gY25jdCgpIHtcbiAgICBjb25zb2xlLmxvZygnaGknKVxufVxuXG5cbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiBcbiAgICAvLyBnZXQgdGhlIG9mZnNldCBwb3NpdGlvbiBvZiB0aGUgc2FuZGJveFxuICAgIGxldCBvZmZzZXRYID0gc2FuZGJveC5vZmZzZXRMZWZ0O1xuICAgIGxldCBvZmZzZXRZID0gc2FuZGJveC5vZmZzZXRUb3A7ICAgXG4gXG4gICAgLy8gc2VsZWN0IGFsbCBjbGFzcyAnc20nIGZyb20gZ2FyZGVuLWl0ZW1zXG4gICAgbGV0IGltYWdlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3NtJyk7XG5cbiAgICAvLyBtYWtlIGFsbCAudG9vbCdzIGRyYWdnYWJsZVxuICAgIGltYWdlcy5kcmFnZ2FibGUoe1xuICAgICAgICBoZWxwZXI6J2Nsb25lJyxcbiAgICB9KTtcbiBcbiAgICAvLyBhc3NpZ24gZWFjaCBpbWFnZSBhbiBhdHRyaWJ1dGUgY29udGFpbmluZyBpdHMgaW5kZXhcbiAgICBpbWFnZXMuZm9yRWFjaCgoaW1nLCBpKSA9PiB7XG4gICAgICAgIGltZy5zZXRBdHRyaWJ1dGUoXCJpbWFnZUluZGV4XCIsIGkpO1xuICAgIH0pO1xuIFxuICAgIC8vIG1ha2UgdGhlIHNhbmRib3ggYSBkcm9wem9uZVxuICAgIHNhbmRib3guZHJvcHBhYmxlKGZ1bmN0aW9uIGRyb3AoZSwgdWkpIHtcbiAgICAgICAgICAgIC8vIGRldGVybWluZSB0aGUgY2xvc2VzdCBwb2ludCBpbiB0aGUgZ3JpZCBvbiBYIGF4aXNcbiAgICAgICAgICAgIGxldCB4PSBwYXJzZUludChwYXJzZUludCgodWkub2Zmc2V0LmxlZnQtb2Zmc2V0WCktMSkgLyAxMDApICogMTAwO1xuIFxuICAgICAgICAgICAgLy8gZGV0ZXJtaW5lIHRoZSBjbG9zZXN0IHBvaW50IGluIHRoZSBncmlkIG9uIFkgYXhpc1xuICAgICAgICAgICAgbGV0IHk9IHBhcnNlSW50KHBhcnNlSW50KHVpLm9mZnNldC50b3Atb2Zmc2V0WSkgLyAxMDApICogMTAwO1xuIFxuICAgICAgICAgICAgLy8gZGV0ZXJtaW5lIHRoZSB3aWR0aCBhbmQgdGhlIGhlaWdodCBvZiB0aGUgaW1hZ2VcbiAgICAgICAgICAgIGxldCB3aWR0aD11aS5oZWxwZXJbMF0ud2lkdGg7XG4gICAgICAgICAgICBsZXQgaGVpZ2h0PXVpLmhlbHBlclswXS5oZWlnaHQ7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIGdldCB0aGUgZHJvcCBwYXlsb2FkIChoZXJlIHRoZSBwYXlsb2FkIGlzIHRoZSAkdG9vbHMgaW5kZXgpXG4gICAgICAgICAgICBsZXQgdGhlSW5kZXg9dWkuZHJhZ2dhYmxlLmRhdGEoXCJpbWFnZUluZGV4XCIpO1xuIFxuICAgICAgICAgICAgLy8gZ2V0IHRoZSBpbWFnZSBoYXZpbmcgdGhlIHJlc3BlY3RpdmUgaW5kZXhcbiAgICAgICAgICAgIGxldCBpbWFnZSA9IGltYWdlc1t0aGVJbmRleF07XG4gXG4gICAgICAgICAgICAvLyBkcmF3SW1hZ2UgYXQgdGhlIGRyb3AgcG9pbnQgdXNpbmcgdGhlIGRyb3BwZWQgaW1hZ2UgXG4gICAgICAgICAgICAvLyBUaGlzIHdpbGwgbWFrZSB0aGUgaW1nIGEgcGVybWFuZW50IHBhcnQgb2YgdGhlIHNhbmRib3ggY29udGVudFxuICAgICAgICAgICAgYy5kcmF3SW1hZ2UoaW1hZ2UsIHgsIHksIHdpZHRoLCBoZWlnaHQpO1xuICAgICAgICB9KVxufVxuXG5cblxuLy8gVkVSU0lPTiBPTkVcblxuLy8gbGV0IHNhbmRib3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNhbmRib3hcIik7XG4vLyAgICAgbGV0IG9mZnNldFg9c2FuZGJveC5vZmZzZXRMZWZ0O1xuLy8gICAgIGxldCBvZmZzZXRZPXNhbmRib3gub2Zmc2V0VG9wO1xuLy8gICAgIGxldCBpc0RyYWdnaW5nPWZhbHNlO1xuXG4vLyAgICAgZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZU1vdXNlRG93bihlKXtcbi8vICAgICAgIGxldCBjYW5Nb3VzZVg9cGFyc2VJbnQoZS5jbGllbnRYLW9mZnNldFgpO1xuLy8gICAgICAgbGV0IGNhbk1vdXNlWT1wYXJzZUludChlLmNsaWVudFktb2Zmc2V0WSk7XG4vLyAgICAgICAvLyBzZXQgdGhlIGRyYWcgZmxhZ1xuLy8gICAgICAgaXNEcmFnZ2luZz10cnVlO1xuLy8gICAgIH1cblxuLy8gICAgIGV4cG9ydCBmdW5jdGlvbiBoYW5kbGVNb3VzZVVwKGUpe1xuLy8gICAgICAgbGV0IGNhbk1vdXNlWD1wYXJzZUludChlLmNsaWVudFgtb2Zmc2V0WCk7XG4vLyAgICAgICBsZXQgY2FuTW91c2VZPXBhcnNlSW50KGUuY2xpZW50WS1vZmZzZXRZKTtcbi8vICAgICAgIC8vIGNsZWFyIHRoZSBkcmFnIGZsYWdcbi8vICAgICAgIGlzRHJhZ2dpbmc9ZmFsc2U7XG4vLyAgICAgfVxuXG4vLyAgICAgZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZU1vdXNlT3V0KGUpe1xuLy8gICAgICAgbGV0IGNhbk1vdXNlWD1wYXJzZUludChlLmNsaWVudFgtb2Zmc2V0WCk7XG4vLyAgICAgICBsZXQgY2FuTW91c2VZPXBhcnNlSW50KGUuY2xpZW50WS1vZmZzZXRZKTtcbi8vICAgICAgIC8vIHVzZXIgaGFzIGxlZnQgdGhlIGNhbnZhcywgc28gY2xlYXIgdGhlIGRyYWcgZmxhZ1xuLy8gICAgICAgLy9pc0RyYWdnaW5nPWZhbHNlO1xuLy8gICAgIH1cblxuLy8gICAgIGV4cG9ydCBmdW5jdGlvbiBoYW5kbGVNb3VzZU1vdmUoZSl7XG4vLyAgICAgICBsZXQgY2FuTW91c2VYPXBhcnNlSW50KGUuY2xpZW50WC1vZmZzZXRYKTtcbi8vICAgICAgIGxldCBjYW5Nb3VzZVk9cGFyc2VJbnQoZS5jbGllbnRZLW9mZnNldFkpO1xuLy8gICAgICAgLy8gaWYgdGhlIGRyYWcgZmxhZyBpcyBzZXQsIGNsZWFyIHRoZSBjYW52YXMgYW5kIGRyYXcgdGhlIGltYWdlXG4vLyAgICAgICBpZihpc0RyYWdnaW5nKXtcbi8vICAgICAgICAgICBjdHguY2xlYXJSZWN0KDAsMCx3LGgpO1xuLy8gICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoaW1nLGNhbk1vdXNlWC0xMjgvMixjYW5Nb3VzZVktMTIwLzIsMTI4LDEyMCk7XG4vLyAgICAgICB9XG4vLyAgICAgfVxuXG5cbi8vLy8vLyBWRVJTSU9OIFRXT1xuXG4gICAgLy8gZXhwb3J0IGZ1bmN0aW9uIHNlbGVjdEltYWdlKCkge1xuICAgIC8vICAgcmV0dXJuICh0aGlzLnN0YXJ0WCA+IHRoaXMuaW1hZ2VYICYmIHRoaXMuc3RhcnRYIDwgdGhpcy5pbWFnZVggKyB0aGlzLmltYWdlV2lkdGggJiYgdGhpcy5zdGFydFkgPiB0aGlzLmltYWdlWSAmJiB0aGlzLnN0YXJ0WSA8IHRoaXMuaW1hZ2VZICsgdGhpcy5pbWFnZUhlaWdodCk7XG4gICAgLy8gfVxuXG4gICAgLy8gIGV4cG9ydCBmdW5jdGlvbiBoYW5kbGVNb3VzZURvd24oZSl7XG4gICAgLy8gICB0aGlzLnN0YXJ0WCA9IHBhcnNlSW50KGUuY2xpZW50WCAtIHRoaXMub2Zmc2V0WCk7XG4gICAgLy8gICB0aGlzLnN0YXJ0WSA9IHBhcnNlSW50KGUuY2xpZW50WSAtIHRoaXMub2Zmc2V0WSk7XG4gICAgLy8gICAvLyBzZXQgdGhlIGRyYWcgZmxhZ1xuICAgIC8vICAgdGhpcy5pc0RyYWdnaW5nID0gdGhpcy5zZWxlY3RJbWFnZTtcbiAgICAvLyB9XG5cbiAgICAvLyAgZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZU1vdXNlVXAoZSxpbWcpe1xuICAgIC8vICAgdGhpcy5zdGFydFg9cGFyc2VJbnQoZS5jbGllbnRYLXRoaXMub2Zmc2V0WCk7XG4gICAgLy8gICB0aGlzLnN0YXJ0WT1wYXJzZUludChlLmNsaWVudFktdGhpcy5vZmZzZXRZKTtcbiAgICAvLyAgIC8vIGNsZWFyIHRoZSBkcmFnIGZsYWdcbiAgICAvLyAgIHRoaXMuaXNEcmFnZ2luZz1mYWxzZTtcbiAgICAvLyAgIHRoaXMuZHJhd0ltYWdlKGUsaW1nKTtcbiAgICAvLyB9XG5cbiAgICAvLyAgZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZU1vdXNlT3V0KGUsaW1nKXtcbiAgICAvLyAgIHRoaXMuaGFuZGxlTW91c2VVcChlLGltZyk7XG4gICAgLy8gfVxuXG4gICAgLy8gIGV4cG9ydCBmdW5jdGlvbiBoYW5kbGVNb3VzZU1vdmUoZSxpbWcpe1xuICAgIC8vICAgLy8gb25seSBjb21wdXRlIG5ldyBwb3NpdGlvbnMgaWYgaW4gZHJhZ1xuICAgIC8vICAgaWYodGhpcy5pc0RyYWdnaW5nKXtcblxuICAgIC8vICAgICB0aGlzLmNhbk1vdXNlWD1wYXJzZUludChlLmNsaWVudFggLSB0aGlzLm9mZnNldFgpO1xuICAgIC8vICAgICB0aGlzLmNhbk1vdXNlWT1wYXJzZUludChlLmNsaWVudFkgLSB0aGlzLm9mZnNldFkpO1xuICAgIC8vICAgLy8gbW92ZSB0aGUgaW1hZ2UgYnkgdGhlIGFtb3VudCBvZiB0aGUgbGF0ZXN0IGRyYWdcbiAgICAvLyAgICAgdmFyIGR4ID0gdGhpcy5jYW5Nb3VzZVggLSB0aGlzLnN0YXJ0WDtcbiAgICAvLyAgICAgdmFyIGR5ID0gdGhpcy5jYW5Nb3VzZVkgLSB0aGlzLnN0YXJ0WTtcblxuICAgIC8vICAgICB0aGlzLmltYWdlWCArPSBkeDtcbiAgICAvLyAgICAgdGhpcy5pbWFnZVkgKz0gZHk7XG4gICAgLy8gICAgIC8vIE5lZ2F0aXZlIGltYWdlIGxvY2F0aW9ucyBicmVhayB0aGUgcGF0dGVybiBpbiB0aGlzLmZpbGxQYXR0ZXJuXG4gICAgLy8gICAgIHRoaXMuaW1hZ2VZID0gTWF0aC5tYXgoMCwgdGhpcy5pbWFnZVkpO1xuICAgIC8vICAgICB0aGlzLmltYWdlWCA9IE1hdGgubWF4KDAsIHRoaXMuaW1hZ2VYKTtcblxuICAgIC8vICAgICAvLyByZXNldCB0aGUgc3RhcnRYWSBmb3IgbmV4dCB0aW1lXG4gICAgLy8gICAgIHRoaXMuc3RhcnRYID0gdGhpcy5jYW5Nb3VzZVg7XG4gICAgLy8gICAgIHRoaXMuc3RhcnRZID0gdGhpcy5jYW5Nb3VzZVk7XG5cbiAgICAvLyAgICAgdGhpcy5kcmF3SW1hZ2UoZSxpbWcpO1xuICAgIC8vICAgfVxuICAgIC8vIH0iLCJsZXQgYyA9IHNhbmRib3guZ2V0Q29udGV4dChcIjJkXCIpO1xuXG5leHBvcnQgZnVuY3Rpb24gZHJhdyhpbWcsIHgsIHkpe1xuICAgICAgICBjLmNsZWFyUmVjdCgwLDAsIHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQgKiAwLjc1KVxuICAgICAgICBpbWcub25sb2FkID0gZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGMuZHJhd0ltYWdlKGltZywgeCwgeSk7XG4gICAgICAgIH1cbiAgICB9ICIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=