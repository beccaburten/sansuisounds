import {doAnim} from '../index';

let sandbox = document.getElementById("sandbox");
let w = sandbox.width = window.innerWidth;
let h = sandbox.height = 0.75 * window.innerHeight;
let c = sandbox.getContext("2d");

export function Ripple(x, y, radius, style) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.style = style;
        // this.dR = dR;

        this.drawRipple = function() {
            //draws 5 concentric circles, 10px btwn each
            if (doAnim) {
                // for (let rad = 0; rad < 5; rad++) {
                    // let nextRad = this.radius + (rad * 10);
                    c.beginPath(); 
                    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
                    // c.arc(this.x, this.y, nextRad, 0, Math.PI * 2, false);
                    c.strokeStyle = this.style;
                    c.stroke();
                    c.closePath();
                // } 
            }
        }
}

// let rippleB = new Ripple(100, 100, 30, 2, '#261308')
// let rippleW = new Ripple(99, 99, 29, 2, 'white')


// animateRipple() {

// }