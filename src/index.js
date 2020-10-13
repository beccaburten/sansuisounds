import './styles/index.scss';
import './styles/navbar.scss';
import './styles/canvas.scss';
import './styles/garden-items.scss';


let sandbox = document.getElementById("sandbox");
    let w = sandbox.width = window.innerWidth;
    let h = sandbox.height = 0.75 * window.innerHeight;
let c = sandbox.getContext("2d");
    c.imageSmoothingEnabled = false;


//5 Lines

document.addEventListener("DOMContentLoaded", () => {
    
    let tree = new Image();
    tree.src = "./src/images/garden-items/bonzai-2.png";  
    
    draw();

    function draw(){
        c.clearRect(0,0, w, h)
        tree.onload = function(){
            c.drawImage(tree, 200, 20);
        }
    } 

    function distanceMoved(x, y, item) {
        function distanceXY (x0, y0, x1, y1) {
            let dx = x1 - x0, dy = y1 - y0;
            return Math.sqrt(dx * dx + dy * dy);
        }
		return distanceXY(x, y, item.x, item.y) < (item.width / 2);
    }
    
    document.addEventListener("mousedown", (e)=>{
            if(distanceMoved(e.clientX, e.clientY, tree)) {
                document.addEventListener("mousemove", onMouseMove);
                document.addEventListener("mouseup", onMouseUp);
            }
        }
    )

    function onMouseMove(e) {
        tree.x = e.clientX;
        tree.y = e.clientY;
        draw();
    }

    function onMouseUp() {
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseup", onMouseUp);
    }


    // 5-LINE RAKE DRAW >>> this code works to generate 5 lines
    // for (let i=0; i < 5; i++) {
    //     let newY = 5 + (i * 10);
    //     c.beginPath();
    //     c.moveTo(0, newY - 1);
    //     c.lineTo(w, newY - 1);
    //     c.strokeStyle = 'white';
    //     c.stroke();
    // }

    // for (let i=0; i < 5; i++) {
    //     let newY = 5 + (i * 10);
    //     c.beginPath();
    //     c.moveTo(0, newY);
    //     c.lineTo(w, newY);
    //     c.strokeStyle = '#261308';
    //     c.stroke();
    // }
})


// SINGLE LINE WORKS WELL
// function Line(y, dX, style) {
//     let cX = 0;
//     this.y = y;
//     this.dX = dX;
//     this.style = style;

//     this.draw = function() {
//         c.beginPath();
//         c.moveTo(0, this.y);
//         c.lineTo(cX, this.y);
//         c.strokeStyle = this.style;
//         c.stroke();
//     }
//     this.move = function() {
//         if (cX === w) {
//             this.y += 10;
//             cX = 0;
//         }
//         cX += this.dX;

//         this.draw();
//     }
// }

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

// let y = 10;
// let lineW = new Line(y - 1, 2, 'white')
// let lineB = new Line(y, 2,'#261308')
let rakeB = new Rake(10, 2,'#261308')
let rakeW = new Rake(9, 2, 'white')

function animate() {
    requestAnimationFrame(animate)

    // lines work to generate simultaneously, rake does not :(
    // lineW.move();
    // lineB.move();

    rakeW.move();
    rakeB.move();
    


    // this draws 5 lines simultaneously
    // for (let i = 0; i < 5; i++) {
    //     let newY = 5 + (i * 10);
    //     c.beginPath();
    //     c.moveTo(0, newY - 1);
    //     c.lineTo(w, newY - 1);
    //     c.strokeStyle = 'white';
    //     c.stroke();
    // }
    // for (let i=0; i < 5; i++) {
    //     let newY = 5 + (i * 10);
    //     c.beginPath();
    //     c.moveTo(0, newY);
    //     c.lineTo(w, newY);
    //     c.strokeStyle = '#261308';
    //     c.stroke();
    // }


}

animate();