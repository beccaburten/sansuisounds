import './styles/index.scss';
import './styles/navbar.scss';
import './styles/canvas.scss';
import './styles/garden-items.scss';
import { drawGardenItem } from './scripts/draw.js'

let sandbox = document.getElementById("sandbox");
    let w = sandbox.width = window.innerWidth;
    let h = sandbox.height = 0.75 * window.innerHeight;
let c = sandbox.getContext("2d");
    c.imageSmoothingEnabled = false;

document.addEventListener("DOMContentLoaded", () => {

    ///////////////////////////////////////////////////////////

    document.getElementById("stone-2").addEventListener("click", drawGardenItem);
    document.getElementById("stone-4").addEventListener("click", drawGardenItem);
    document.getElementById("stone-3").addEventListener("click", drawGardenItem);
    document.getElementById("stone-1").addEventListener("click", drawGardenItem);
    document.getElementById("stone-pile-1").addEventListener("click", drawGardenItem);
    document.getElementById("stone-pile-2").addEventListener("click", drawGardenItem);
    document.getElementById("lantern").addEventListener("click", drawGardenItem);
    document.getElementById("bonzai-1").addEventListener("click", drawGardenItem);
    document.getElementById("bonzai-2").addEventListener("click", drawGardenItem);

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
