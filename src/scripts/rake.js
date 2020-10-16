import { gardenItems } from './draw';
import { Ripple } from './ripple';
import { btwn } from './utils';
import { doAnim } from './draw';

/// try cropping actual images into circles 

let sandbox = document.getElementById("sandbox");
let w = sandbox.width = window.innerWidth;
let h = sandbox.height = 0.75 * window.innerHeight;
let c = sandbox.getContext("2d");

window.addEventListener('resize', () => {
    w = sandbox.width = window.innerWidth;
    h = sandbox.height = 0.75 * window.innerHeight;
    c = sandbox.getContext("2d");
});

export function Rake(x, y, dX, style) {

        this.x = x;
        let nextX = x;
        this.y = y;
        this.dX = dX;
        this.style = style;
        this.continueAnim = true;

        this.pullRake = function() {
            // if (doAnim) {
                for (let i = 0; i < 5; i++) {
                    let y2 = this.y + (i * 10);
                    c.beginPath();
                    c.moveTo(this.x, y2); // don't start 0?
                    c.lineTo(nextX, y2);
                    c.strokeStyle = this.style;
                    c.stroke();
                }
            // }
        }


        // stop the function (dX = 0) when it hits an item and trigger a ripple
        // from the ripple, when it's done, trigger the rake move again
        // x will be 0 to start and then the items.x + width + 50 after the items ripple
        this.move = function() {
            if (this.continueAnim) {
                if (nextX >= w ) {
                    this.y += 50;
                    this.x = 0;
                    nextX = 0;
                }
                if (this.y >= h ) {
                    this.dX = 0;
                    this.continueAnim = false;
                }   
                gardenItems.map(item => {
                    let postItemX = item.x + item.width;
                    let nextY = item.y + item.height;
                    if (btwn(nextX, item.x - 50, postItemX) && btwn(this.y, item.y - item.height, nextY + 25)) {
                        // console.log(this.x) 
                        // this.continueAnim = false;
                        // this.dX = 0;
                        // debugger;
                        this.ripple(item);
                    }
                });
                nextX += this.dX;
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
                rad = rW + 40; 
            } else {
                rad = rH + 40;
            }
            
            let rippleB = new Ripple(rX, rY, rad);
            // let rippleW = new Ripple(rX - 1, rY, rad + 40, 'white');
            rippleB.drawRipple();
            // rippleW.drawRipple();
            
            // let newRake = new Rake(rX + item.width, this.y, 2, this.style);
            // debugger;
            // animateRake(newRake, null)();
        }
}

export function animateRake(rake1, rake2) {
        // doAnim = true;
        return () => {
            requestAnimationFrame(animateRake(rake1, rake2))
            rake1.move();
            rake2.move();
        }
}


 