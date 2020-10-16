import {itemPointCollision} from './utils';
import {doAnim} from '../index';
import {gardenItems} from './draw';
import {Ripple} from './ripple';

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
            if (doAnim) {
                for (let i = 0; i < 5; i++) {
                    let topY = this.y + (i * 10);
                    c.beginPath();
                    c.moveTo(0, topY);
                    c.lineTo(x, topY);
                    c.strokeStyle = this.style;
                    c.stroke();
                }
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

            // gardenItems.map(item => {
            //     let itemWidth = item.width;
            //     let halfW = itemWidth * 0.5
            //     // if((x >= (item.x - 50)) && (x <= (item.x + itemWidth + 50))) {
            //     //     let rippleB = new Ripple(x, this.y, itemWidth, 2, '#261308')
            //     //     let rippleW = new Ripple(x - 1, this.y - 1, itemWidth, 2, 'white')
            //     //     animateRipple(rippleB, rippleW);

            //     let hitItem = x >= (item.x - halfW)
            //     let onItem = x <= (item.x + itemWidth + 50)
            //      if(hitItem && onItem)  {
            //         this.dX = 0;
            //         let rippleB = new Ripple(x, this.y + halfW, itemWidth, '#261308')
            //         let rippleW = new Ripple(x - 1, this.y + halfW, itemWidth, 'white')
            //         rippleB.drawRipple();
            //         rippleW.drawRipple();
            //         debugger;
            //         x += itemWidth; 
            //     } else {
            //         x += this.dX;
            //         this.pullRake();
            //     }
            // })

             x += this.dX;
            this.pullRake();

        }
        this.ripple = function() {
            gardenItems.map(item => {
                let rW = item.width * 0.5;
                let rH = item.height * 0.5;
                let rX = item.x + rW;
                let rY = item.y + rH;
                let rad;
                if (rW > rH) {
                    rad = rW;
                } else {
                    rad = rH;
                }
                let rippleB = new Ripple(rX, rY, rad, '#261308');
                let rippleW = new Ripple(rX - 1, rY, rad, 'white');
                rippleB.drawRipple();
                rippleW.drawRipple();
            })
        }
}

let rakeB = new Rake(10, 2,'#261308')
let rakeW = new Rake(9, 2, 'white')

export function animateRake() {
        requestAnimationFrame(animateRake)
        // rakeW.move();
        // rakeB.move();
        rakeB.ripple();
        rakeW.ripple();
}

