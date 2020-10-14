import {itemPointCollision} from './utils';


let sandbox = document.getElementById("sandbox");
let w = sandbox.width = window.innerWidth;
let h = sandbox.height = 0.75 * window.innerHeight;
let c = sandbox.getContext("2d");

let gardenItems = [];


export function draw(){
    c.clearRect(0,0, window.innerWidth, window.innerHeight * 0.75)

    // img.onload = function() {
        gardenItems.map(item => {
            c.globalCompositeOperation='destination-over';
            c.drawImage(item.img, item.x, item.y);
        })
        setDragListeners();
    // }
} 

export function drawGardenItem(e) {
        function random(max) {
            return 100 + (Math.random() * (max - 200));
        }
        // return (e) => {
            let img = new Image();
            img.src = `${e.target.src}`; 
            let newItem = {
                img: img,
                x: random(w),
                y: random(h),
                width: parseInt(e.target.style.width)
            };
            gardenItems.push(newItem);
            draw();
        // }
    }



function setDragListeners() {
    // debugger;
    let	offset = {};
    gardenItems.map(item => {

        document.addEventListener("mousedown", (event) => {
            if(itemPointCollision(event.offsetX, event.offsetY, item)) {
                document.addEventListener("mousemove", onMouseMove);
                document.addEventListener("mouseup", onMouseUp);
                // debugger;
                offset.x = event.offsetX - item.x;
                offset.y = event.offsetY - item.y;
            }
        });

        function onMouseMove(event) {
            // debugger;
            item.x = event.offsetX; //- offset.x;
            item.y = event.offsetY; //- offset.y;
            // debugger;
            drawGardenItem(event);
        }

        function onMouseUp(event) {
            document.removeEventListener("mousemove", onMouseMove);
            document.removeEventListener("mouseup", onMouseUp);
        }
    })

}