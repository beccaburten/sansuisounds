import {itemPointCollision} from './utils';
import {gardenItems} from './draw';

let sandbox = document.getElementById("sandbox");
let w = sandbox.width = window.innerWidth;
let h = sandbox.height = 0.75 * window.innerHeight;
let c = sandbox.getContext("2d");

window.addEventListener('resize', () => {
    w = sandbox.width = window.innerWidth;
    h = sandbox.height = 0.75 * window.innerHeight;
    c = sandbox.getContext("2d");
});

function Rake(y, dX, style) {
        let x = 0;
        this.y = y;
        this.dX = dX;
        this.style = style;

        this.pullRake = function() {
            for (let i = 0; i < 5; i++) {
                let topY = this.y + (i * 10);
                c.beginPath();
                c.moveTo(0, topY);
                c.lineTo(x, topY);
                c.strokeStyle = this.style;
                c.stroke();
            }

        }
        this.move = function() {
            if (x >= w ) {
                this.y += 50;
                x = 0;
            }
            if (this.y >= h ) {
                this.dX = 0;
            }   

            gardenItems.map(item => {
                let itemWidth = item.width;
                if((x >= (item.x - 50)) && (x <= (item.x + itemWidth + 50))) {
                    debugger;
                    this.style = 'red';
                } else {
                    this.style = style;
                }
            })

            x += this.dX;

            this.pullRake();
        }
}

let rakeB = new Rake(10, 2,'#261308')
let rakeW = new Rake(9, 2, 'white')

export function animateRake() {
        requestAnimationFrame(animateRake)
        rakeW.move();
        rakeB.move();
}

