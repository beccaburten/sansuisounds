import './styles/index.scss';
import './styles/navbar.scss';
import './styles/canvas.scss';
import './styles/garden-items.scss';
import {circlePointCollision} from './scripts/utils';

// import * as DragDropUtil from './scripts/dragdrop.js';
// import { draw } from './scripts/draw.js'

let sandbox = document.getElementById("sandbox");
    let w = sandbox.width = window.innerWidth;
    let h = sandbox.height = 0.75 * window.innerHeight;
    //attempt to resize canvas on window resize:
    // sandbox.addEventListener("resize", ()=> {
    //     w = sandbox.width = window.innerWidth;
    //     h = sandbox.height = 0.75 * window.innerHeight;
    // })
let c = sandbox.getContext("2d");
    c.imageSmoothingEnabled = false;

document.addEventListener("DOMContentLoaded", () => {
    
    let tree = new Image();
    tree.src = "./src/images/garden-items/bonzai-2.png";  

    draw(tree, 200, 20);

    function draw() {
        c.clearRect(0,0, w, h)
        tree.onload = function(){
            c.drawImage(tree, 200, 20);
        }
    } 

    document.querySelector("#clear-canvas").addEventListener("click", clearCanvas);

    function clearCanvas() {
        c.clearRect(0, 0, w, h);
    }

    document.querySelector("#rake-play").addEventListener("click", animateRake);
    
    function Rake(y, dX, style) {
        let cX = 0;
        this.y = y;
        this.dX = dX;
        this.style = style;

        this.pullRake = function() {
            for (let i = 0; i < 5; i++) {
                let topY = this.y + (i * 10);
                c.beginPath();
                c.moveTo(0, topY);
                c.lineTo(cX, topY);
                c.strokeStyle = this.style;
                c.stroke();
            }

        }
        this.move = function() {
            if (cX === w ) {
                this.y += 50;
                cX = 0;
            }
            cX += this.dX;

            this.pullRake();
        }
    }

    let rakeB = new Rake(10, 2,'#261308')
    let rakeW = new Rake(9, 2, 'white')

    function animateRake() {
        requestAnimationFrame(animateRake)

        rakeW.move();
        rakeB.move();
        
        if (rakeB.y >= w ) {
            rakeB.dX = 0;
            rakeW.dX = 0;
        }
    }

})


window.onload = function() {
	let sandbox = document.getElementById("sandbox");
    let width = sandbox.width = window.innerWidth;
    let height = sandbox.height = 0.75 * window.innerHeight;
    let c = sandbox.getContext("2d");
	let	handle = {
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

	document.addEventListener("mousedown", (event) => {
		if(circlePointCollision(event.offsetX, event.offsetY, handle)) {
			document.addEventListener("mousemove", onMouseMove);
			document.addEventListener("mouseup", onMouseUp);
			offset.x = event.offsetX - handle.x;
			offset.y = event.offsetY - handle.y;
		}
	});

	function onMouseMove(event) {
		handle.x = event.offsetX;// - offset.x;
		handle.y = event.offsetY;// - offset.y;
		drawHandle();
	}

	function onMouseUp(event) {
		document.removeEventListener("mousemove", onMouseMove);
		document.removeEventListener("mouseup", onMouseUp);
	}


};

// putting this inside DOMContentLoaded will render a tree
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