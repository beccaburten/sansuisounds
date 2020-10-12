import './styles/index.scss';
import './styles/navbar.scss';
import './styles/canvas.scss';
import './styles/garden-items.scss';


function draw(){
    let sandbox = document.getElementById("sandbox");
    let c = sandbox.getContext("2d");
    c.imageSmoothingEnabled = false;

    // c.arc(600, 600, 50, 0, Math.PI * 2, false);
    // c.beginPath();
    // c.stroke();


    var stone1 = document.getElementById("stone1");
    stone1.onload = function() {
        c.drawImage(stone1, 25, 25, 25, 25);
    };

    let tree = new Image();
    tree.src = "./src/images/garden-items/bonzai-2.png";
    tree.onload = function(){
        c.drawImage(tree, 100, 100, 20, 20);
    }
    debugger;
} 

draw();
