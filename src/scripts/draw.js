let c = sandbox.getContext("2d");

export function draw(img, x, y){
        c.clearRect(0,0, window.innerWidth, window.innerHeight * 0.75)
        img.onload = function(){
            c.drawImage(img, x, y);
        }
    } 