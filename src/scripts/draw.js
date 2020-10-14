let sandbox = document.getElementById("sandbox");
let w = sandbox.width = window.innerWidth;
let h = sandbox.height = 0.75 * window.innerHeight;
let c = sandbox.getContext("2d");

let gardenItems = [];


export function draw(img, x, y){
    c.clearRect(0,0, window.innerWidth, window.innerHeight * 0.75)

    img.onload = function() {
        gardenItems.map(item => {
            c.drawImage(item.img, item.x, item.y);
        })
    }
        // img.onload = function(){
        //     c.drawImage(img, x, y);
        // }
} 

export function drawGardenItem(e) {
        function random(max) {
            return 100 + (Math.random() * (max - 200));
        }
        return (e) => {
            let img = new Image();
            img.src = `${e.target.src}`; 
            let setW = random(w);
            let setH = random(h);
            gardenItems.push({
                img: img,
                x: setW,
                y: setH,
                width: parseInt(e.target.style.width)
            });
            draw(img, setW, setH);
        }
    }

// OLD
// export function drawGardenItem(e) {
//     return (e) => {
//         let img = new Image();
//         img.src = `${e.target.src}`; 
//         debugger; 
//         draw(img, w/3, h/3);
//     }
// }