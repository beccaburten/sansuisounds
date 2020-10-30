// import './styles/index.scss';
// import './styles/navbar.scss';
// import './styles/canvas.scss';
// import './styles/garden-items.scss';
// import { draw } from './scripts/draw.js'
// import { circlePointCollision } from './scripts/utils.js';


// let sandbox = document.getElementById("sandbox");
//     let w = sandbox.width = window.innerWidth;
//     let h = sandbox.height = 0.65 * window.innerHeight;
// let c = sandbox.getContext("2d");
//     c.imageSmoothingEnabled = false;

// document.addEventListener("DOMContentLoaded", () => {

//     let gardenItems = [];
//     let offset = {};

//     document.getElementById("stone-2").addEventListener("click", drawGardenItem("stone-2"));
//     document.getElementById("stone-4").addEventListener("click", drawGardenItem("stone-4"));
//     document.getElementById("stone-3").addEventListener("click", drawGardenItem("stone-3"));
//     document.getElementById("stone-1").addEventListener("click", drawGardenItem("stone-1"));
//     document.getElementById("stone-pile-1").addEventListener("click", drawGardenItem("stone-pile-1"));
//     document.getElementById("stone-pile-2").addEventListener("click", drawGardenItem("stone-pile-2"));
//     document.getElementById("lantern").addEventListener("click", drawGardenItem("lantern"));
//     document.getElementById("bonzai-1").addEventListener("click", drawGardenItem("bonzai-1"));
//     document.getElementById("bonzai-2").addEventListener("click", drawGardenItem("bonzai-2"));


//     sandbox.addEventListener("mousedown", (e) => {
//         debugger;
//         function distanceXY(x0, y0, x1, y1) {
//             let dx = x1 - x0,
//                 dy = y1 - y0;
//             return Math.sqrt(dx * dx + dy * dy);
//         }
//         function circlePointCollision(x, y, item) {
//             debugger;
//             return distanceXY(x, y, item.x, item.y) < item.radius;
//         }
        
//         gardenItems.map(item => {
//             debugger;
//             if(circlePointCollision(e.offsetX, e.offsetY, item)) {
//                 	function onMouseMove(event) {
//                         debugger;
//                         item.x = event.offsetX;// - offset.x;
//                         item.y = event.offsetY;// - offset.y;
//                         drawGardenItem();
//                     }

//                     function onMouseUp(event) {
//                         document.removeEventListener("mousemove", onMouseMove);
//                         document.removeEventListener("mouseup", onMouseUp);
//                     }
//                 document.addEventListener("mousemove", onMouseMove);
//                 document.addEventListener("mouseup", onMouseUp);
//                 offset.x = e.offsetX - item.x;
//                 offset.y = e.offsetY - item.y;
//             }
//         })
// 	});






//     document.querySelector("#clear-canvas").addEventListener("click", clearCanvas);

//     function clearCanvas() {
//         c.clearRect(0, 0, w, h);
//     }

//     document.querySelector("#rake-play").addEventListener("click", animateRake);
    
//     function Rake(y, dX, style) {
//         let cX = 0;
//         this.y = y;
//         this.dX = dX;
//         this.style = style;

//         this.pullRake = function() {
//             for (let i = 0; i < 5; i++) {
//                 let topY = this.y + (i * 10);
//                 c.beginPath();
//                 c.moveTo(0, topY);
//                 c.lineTo(cX, topY);
//                 c.strokeStyle = this.style;
//                 c.stroke();
//             }

//         }
//         this.move = function() {
//             if (cX === w ) {
//                 this.y += 50;
//                 cX = 0;
//             }
//             cX += this.dX;

//             this.pullRake();
//         }
//     }

//     let rakeB = new Rake(10, 2,'#261308')
//     let rakeW = new Rake(9, 2, 'white')

//     function animateRake() {
//         requestAnimationFrame(animateRake)

//         rakeW.move();
//         rakeB.move();
        
//         if (rakeB.y >= w ) {
//             rakeB.dX = 0;
//             rakeW.dX = 0;
//         }
//     }

// })

// // This will draw a tree:
// // let tree = new Image();
// //     tree.src = "./src/images/garden-items/bonzai-2.png";  

// //     draw(tree, 200, 20);