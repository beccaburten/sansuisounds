import './styles/index.scss';
import './styles/navbar.scss';
import './styles/canvas.scss';
import './styles/garden-items.scss';
import {init} from './scripts/init';
import {animateRake} from './scripts/rake';
// import {animateRipple} from './scripts/ripple';

let sandbox = document.getElementById("sandbox");
let w = sandbox.width = window.innerWidth;
let h = sandbox.height = 0.75 * window.innerHeight;
let c = sandbox.getContext("2d");
    c.imageSmoothingEnabled = false;
export let doAnim = true;

// not working for Rake functionality
// window.addEventListener('resize', () => {
//     w = sandbox.width = window.innerWidth;
//     h = sandbox.height = 0.75 * window.innerHeight;
//     c = sandbox.getContext("2d");
// });

document.addEventListener("DOMContentLoaded", () => {

    ///////////////////////////////////////////////////////////

    init();

    document.querySelector("#clear-canvas").addEventListener("click", clearCanvas);

    function clearCanvas() {
        c.clearRect(0, 0, w, h);
        doAnim = false;
    }

    // animateRipple();

    document.querySelector("#rake-play").addEventListener("click", animateRake);
    
})
