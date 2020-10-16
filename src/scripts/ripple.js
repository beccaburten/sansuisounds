let sandbox = document.getElementById("sandbox");
let w = sandbox.width = window.innerWidth;
let h = sandbox.height = 0.75 * window.innerHeight;
let c = sandbox.getContext("2d");

export function Ripple(x, y, radius, style) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.style = style;

        this.drawRipple = function() {
            //draws 5 concentric circles, 10px btwn each
            for (let rad = 0; rad < 5; rad++) {
                let nextRad = this.radius + (rad * 10);
                c.beginPath(); 
                c.arc(this.x, this.y, nextRad, 0, Math.PI * 2, false);
                c.strokeStyle = this.style;
                c.stroke();
                c.closePath();
            } 
        }
}

// animateRipple() {

// }