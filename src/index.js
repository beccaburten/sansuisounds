import './styles/index.scss';
import './styles/navbar.scss';
import './styles/canvas.scss';
import './styles/garden-items.scss';

function draw(){
    let sandbox = document.getElementById("sandbox");
    sandbox.width = window.innerWidth;
    sandbox.height = 0.75 * window.innerHeight;
    let c = sandbox.getContext("2d");
    c.imageSmoothingEnabled = false;

    // var stone1 = document.getElementById("stone1");
    // c.drawImage(stone1, 25, 25, 70);


    let tree = new Image();
    tree.onload = function(){
        // c.drawImage(tree, 100, 100, 30, 40);
        c.drawImage(tree, 20, 20);
    }
    tree.src = "./src/images/garden-items/bonzai-2.png";

    debugger;
} 


document.addEventListener("DOMContentLoaded", () => {
    draw();  
})
