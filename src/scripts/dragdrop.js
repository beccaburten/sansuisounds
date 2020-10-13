
export function cnct() {
    console.log('hi')
}


window.onload = function() {
 
    // get the offset position of the sandbox
    let offsetX = sandbox.offsetLeft;
    let offsetY = sandbox.offsetTop;   
 
    // select all class 'sm' from garden-items
    let images = document.getElementsByClassName('sm');

    // make all .tool's draggable
    images.draggable({
        helper:'clone',
    });
 
    // assign each image an attribute containing its index
    images.forEach((img, i) => {
        img.setAttribute("imageIndex", i);
    });
 
    // make the sandbox a dropzone
    sandbox.droppable(function drop(e, ui) {
            // determine the closest point in the grid on X axis
            let x= parseInt(parseInt((ui.offset.left-offsetX)-1) / 100) * 100;
 
            // determine the closest point in the grid on Y axis
            let y= parseInt(parseInt(ui.offset.top-offsetY) / 100) * 100;
 
            // determine the width and the height of the image
            let width=ui.helper[0].width;
            let height=ui.helper[0].height;
            
            // get the drop payload (here the payload is the $tools index)
            let theIndex=ui.draggable.data("imageIndex");
 
            // get the image having the respective index
            let image = images[theIndex];
 
            // drawImage at the drop point using the dropped image 
            // This will make the img a permanent part of the sandbox content
            c.drawImage(image, x, y, width, height);
        })
}



// VERSION ONE

// let sandbox = document.getElementById("sandbox");
//     let offsetX=sandbox.offsetLeft;
//     let offsetY=sandbox.offsetTop;
//     let isDragging=false;

//     export function handleMouseDown(e){
//       let canMouseX=parseInt(e.clientX-offsetX);
//       let canMouseY=parseInt(e.clientY-offsetY);
//       // set the drag flag
//       isDragging=true;
//     }

//     export function handleMouseUp(e){
//       let canMouseX=parseInt(e.clientX-offsetX);
//       let canMouseY=parseInt(e.clientY-offsetY);
//       // clear the drag flag
//       isDragging=false;
//     }

//     export function handleMouseOut(e){
//       let canMouseX=parseInt(e.clientX-offsetX);
//       let canMouseY=parseInt(e.clientY-offsetY);
//       // user has left the canvas, so clear the drag flag
//       //isDragging=false;
//     }

//     export function handleMouseMove(e){
//       let canMouseX=parseInt(e.clientX-offsetX);
//       let canMouseY=parseInt(e.clientY-offsetY);
//       // if the drag flag is set, clear the canvas and draw the image
//       if(isDragging){
//           ctx.clearRect(0,0,w,h);
//           ctx.drawImage(img,canMouseX-128/2,canMouseY-120/2,128,120);
//       }
//     }


////// VERSION TWO

    // export function selectImage() {
    //   return (this.startX > this.imageX && this.startX < this.imageX + this.imageWidth && this.startY > this.imageY && this.startY < this.imageY + this.imageHeight);
    // }

    //  export function handleMouseDown(e){
    //   this.startX = parseInt(e.clientX - this.offsetX);
    //   this.startY = parseInt(e.clientY - this.offsetY);
    //   // set the drag flag
    //   this.isDragging = this.selectImage;
    // }

    //  export function handleMouseUp(e,img){
    //   this.startX=parseInt(e.clientX-this.offsetX);
    //   this.startY=parseInt(e.clientY-this.offsetY);
    //   // clear the drag flag
    //   this.isDragging=false;
    //   this.drawImage(e,img);
    // }

    //  export function handleMouseOut(e,img){
    //   this.handleMouseUp(e,img);
    // }

    //  export function handleMouseMove(e,img){
    //   // only compute new positions if in drag
    //   if(this.isDragging){

    //     this.canMouseX=parseInt(e.clientX - this.offsetX);
    //     this.canMouseY=parseInt(e.clientY - this.offsetY);
    //   // move the image by the amount of the latest drag
    //     var dx = this.canMouseX - this.startX;
    //     var dy = this.canMouseY - this.startY;

    //     this.imageX += dx;
    //     this.imageY += dy;
    //     // Negative image locations break the pattern in this.fillPattern
    //     this.imageY = Math.max(0, this.imageY);
    //     this.imageX = Math.max(0, this.imageX);

    //     // reset the startXY for next time
    //     this.startX = this.canMouseX;
    //     this.startY = this.canMouseY;

    //     this.drawImage(e,img);
    //   }
    // }