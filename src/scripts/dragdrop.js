// Pasting this into index.js works for circle moving


// import {circlePointCollision} from './scripts/utils';



// window.onload = function() {
// 	let	handle = {
// 			x: w / 2,
// 			y: h / 2,
// 			radius: 20
// 		};
// 	let	offset = {};

// 	drawHandle();

// 	function drawHandle() {
// 		c.clearRect(0, 0, w, h);

// 		c.fillStyle = "black";
// 		c.beginPath();
// 		c.arc(handle.x, handle.y, handle.radius, 0, Math.PI * 2, false);
// 		c.fill();
// 	}

// 	document.addEventListener("mousedown", (event) => {
// 		if(circlePointCollision(event.offsetX, event.offsetY, handle)) {
// 			document.addEventListener("mousemove", onMouseMove);
// 			document.addEventListener("mouseup", onMouseUp);
// 			offset.x = event.offsetX - handle.x;
// 			offset.y = event.offsetY - handle.y;
// 		}
// 	});

// 	function onMouseMove(event) {
// 		handle.x = event.offsetX;// - offset.x;
// 		handle.y = event.offsetY;// - offset.y;
// 		drawHandle();
// 	}

// 	function onMouseUp(event) {
// 		document.removeEventListener("mousemove", onMouseMove);
// 		document.removeEventListener("mouseup", onMouseUp);
// 	}


// };