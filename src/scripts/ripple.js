let sandbox = document.getElementById("sandbox");
let w = sandbox.width = window.innerWidth;
let h = sandbox.height = 0.75 * window.innerHeight;
let c = sandbox.getContext("2d");

export function Ripple(x, y, radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        // this.style = style;

        this.drawRipple = function() {
            for (let rad = 0; rad < 5; rad++) {
                // let nextRad = this.radius + (rad * 10);
                c.globalCompositeOperation='destination-over'
                let nextRad = this.radius - (rad * 10);
                c.beginPath(); 
                c.arc(this.x, this.y, nextRad, 0, Math.PI * 2, false);
                c.strokeStyle = '#261308';
                c.stroke();
                c.closePath();
                debugger;

                let nextRad2 = this.radius - (rad * 10) - 1;
                c.beginPath(); 
                c.arc(this.x, this.y, nextRad2, 0, Math.PI * 2, false);
                c.strokeStyle = 'white';
                c.stroke();
                c.closePath();
            } 
            //BROWN OUTERMOST, filled in
                c.beginPath(); 
                c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
                c.fillStyle = "#A69D8D";
                c.fill();
                c.strokeStyle = '#261308';
                c.stroke();
                c.closePath();
                debugger;
            //WHITE OUTERMOST, no fill
                c.beginPath(); 
                c.arc(this.x, this.y, this.radius - 1, 0, Math.PI * 2, false);
                c.strokeStyle = 'white';
                c.stroke();
                c.closePath();
                debugger;

            
            this.drawRipple = this.drawRipple.bind(this)

        }
}

// animateRipple() {

// }