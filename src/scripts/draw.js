import {itemPointCollision} from './utils';

let sandbox = document.getElementById("sandbox");
let w = sandbox.width = window.innerWidth;
let h = sandbox.height = 0.65 * window.innerHeight;
let c = sandbox.getContext("2d");

export let gardenItems = [];

export let doAnim = true;

export function draw(){
    c.clearRect(0,0, window.innerWidth, window.innerHeight * 0.75)

    gardenItems.map(item => {
        c.globalCompositeOperation='destination-over';
        c.drawImage(item.img, item.x, item.y);
    })

} 

export function drawGardenItem(e) {
        function random(max) {
            return 100 + (Math.random() * (max - 200));
        }
        let img = new Image();
        img.src = `${e.target.src}`; 
        let newItem = {
            img: img,
            x: random(w),
            y: random(h),
            width: img.width,
            height: img.height
        };
        gardenItems.push(newItem);
        draw();
}




let	offset = {};

document.addEventListener("mousedown", (event) => {
    // let collision = false;

    // while (!collision) {
        gardenItems.map(item => {
            if(itemPointCollision(event.offsetX, event.offsetY, item)) {
                collision = true;
                if(event.shiftKey) {
                    gardenItems = gardenItems.filter(i => i !== item);
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
        })
    //}

    // gardenItems.map(item => {
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


export function clearCanvas() {
    c.clearRect(0, 0, w, h);
    gardenItems = [];
    doAnim = false;
}