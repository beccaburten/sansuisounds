import './styles/index.scss';
import './styles/navbar.scss';
import './styles/canvas.scss';
import './styles/garden-items.scss';
import * as DragDropUtil from './scripts/dragdrop.js';
import { draw } from './scripts/draw.js'

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


window.onload = function() {
 
    // get the offset position of the sandbox
    let offsetX = sandbox.offsetLeft;
    let offsetY = sandbox.offsetTop;   
 
    // select all class 'sm' from garden-items
    let images = document.getElementsByClassName('sm');

    // make all .tool's draggable
    images.draggable({
        helper:'clone',
    });
 
    // assign each image an attribute containing its index
    images.forEach((img, i) => {
        img.setAttribute("imageIndex", i);
    });
 
    // make the sandbox a dropzone
    sandbox.droppable(function drop(e, ui) {
            // determine the closest point in the grid on X axis
            let x= parseInt(parseInt((ui.offset.left-offsetX)-1) / 100) * 100;
 
            // determine the closest point in the grid on Y axis
            let y= parseInt(parseInt(ui.offset.top-offsetY) / 100) * 100;
 
            // determine the width and the height of the image
            let width=ui.helper[0].width;
            let height=ui.helper[0].height;
            
            // get the drop payload (here the payload is the $tools index)
            let theIndex=ui.draggable.data("imageIndex");
 
            // get the image having the respective index
            let image = images[theIndex];
 
            // drawImage at the drop point using the dropped image 
            // This will make the img a permanent part of the sandbox content
            c.drawImage(image, x, y, width, height);
        })
}















document.addEventListener("DOMContentLoaded", () => {
    
    DragDropUtil.cnct(); //console logs "hi" correctly

    let tree = new Image();
    tree.src = "./src/images/garden-items/bonzai-2.png";  

    draw(tree, 200, 20);

    // sandbox.addEventListener("mousedown", (e)=> {
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
        let cX = 0;
        this.y = y;
        this.dX = dX;
        this.style = style;

        this.draw = function() {
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

            this.draw();
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