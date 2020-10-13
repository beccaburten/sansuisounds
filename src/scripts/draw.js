let sandbox = document.getElementById("sandbox");
let w = sandbox.width = window.innerWidth;
let h = sandbox.height = 0.75 * window.innerHeight;
let c = sandbox.getContext("2d");

export function draw(img, x, y){
        c.clearRect(0,0, window.innerWidth, window.innerHeight * 0.75)
        img.onload = function(){
            c.drawImage(img, x, y);
        }
    } 

export function drawGardenItem(e) {
    return (e) => {
        let img = new Image();
        img.src = `${e.target.src}`; 
        debugger; 
        draw(img, w/3, h/3);
    }
}