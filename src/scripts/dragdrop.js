
export function cnct() {
    console.log('hi')
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