function draw(){
    let sandbox = document.getElementById("sandbox");
    let c = sandbox.getContext("2d");

    c.beginPath;
    c.moveTo(200, 200);
    c.lineTo(200, 300);
    c.stroke();


    let stone2 = document.getElementById("stone2");
    c.drawImage(stone2, 250, 250, 50, 50);
} 

draw();
