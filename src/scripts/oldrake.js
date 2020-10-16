import { gardenItems } from './draw';
import { Ripple } from './ripple';
import { btwn } from './utils';
import { doAnim } from './draw';

let sandbox = document.getElementById("sandbox");
let w = sandbox.width = window.innerWidth;
let h = sandbox.height = 0.75 * window.innerHeight;
let c = sandbox.getContext("2d");

window.addEventListener('resize', () => {
    w = sandbox.width = window.innerWidth;
    h = sandbox.height = 0.75 * window.innerHeight;
    c = sandbox.getContext("2d");
});

function Rake(x, y, dX, style) {

        this.x = x;
        this.y = y;
        this.dX = dX;
        this.style = style;
        this.continueAnim = true;

        this.pullRake = function() {
            if (doAnim) {
                for (let i = 0; i < 5; i++) {
                    let y2 = this.y + (i * 10);
                    c.beginPath();
                    c.moveTo(0, y2); // don't start 0?
                    c.lineTo(this.x, y2);
                    c.strokeStyle = this.style;
                    c.stroke();
                }
            }
        }


        // stop the function (dX = 0) when it hits an item and trigger a ripple
        // from the ripple, when it's done, trigger the rake move again
        // x will be 0 to start and then the items.x + width + 50 after the items ripple
        this.move = function() {
            if (this.continueAnim) {
                if (this.x >= w ) {
                    this.y += 50;
                    this.x = 0;
                }
                if (this.y >= h ) {
                    this.dX = 0;
                    this.continueAnim = false;
                }   
                // gardenItems.map(item => {
                //     let nextX = item.x + item.width;
                //     let nextY = item.y + item.height;
                //     if (btwn(this.x, item.x, nextX) && btwn(this.y, item.y, nextY)) {
                //         console.log("reached item") 
                //         this.continueAnim = false;
                //         this.dX = 0;
                //         debugger;
                //         this.ripple(item);
                //     }
                // });
                this.x += this.dX;
                this.pullRake();
            }  

        }

        this.move = this.move.bind(this);


        this.ripple = function(item) {
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
            // continueAnim = true;
            
            debugger;
            let rakeB2 = new Rake(rX + 50, rY, 2,'#261308')
            // let rakeW2 = new Rake(rX + 50, rY - 1, 2, 'white')
            // rakeW2.move();
            rakeB2.move();
        }
}

let rakeB = new Rake(0, 10, 2,'#261308');
let rakeW = new Rake(0, 9, 2, 'white');

export function animateRake() {
        // doAnim = true;
        requestAnimationFrame(animateRake)
        rakeW.move();
        rakeB.move();
}

 